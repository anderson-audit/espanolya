/* ==========================================================================
   EspañolYa! — app.js
   Motor do aplicativo: auth, progresso (Firestore), TTS com destaque de texto,
   reconhecimento de fala, motor de exercícios, provas e painel de admin.
   ========================================================================== */

/* ---------------------------------------------------------------------- */
/* 0. MONTAGEM DO CURSO A PARTIR DOS ARQUIVOS content-*.js                 */
/* ---------------------------------------------------------------------- */
// "Canciones" es un nivel bônus especial: a diferencia de los demás (contenido fijo
// escrito en los archivos content-*.js), su contenido (letras) lo agrega el propio
// administrador desde el panel — por eso .lessons empieza vacío y se llena en tiempo
// de ejecución con loadSongs() (colección "songs" de Firestore). Ver sección 19b.
const LEVEL_CANCIONES = {
  id: "canciones", icon: "🎵", name: "Canciones",
  description: "Aprende español cantando: descubre la letra, escucha paso a paso y completa los espacios de tus canciones favoritas.",
  lessons: [],
};

const COURSE_LEVELS = [
  LEVEL_FUNDAMENTOS,
  LEVEL_BASICO,
  LEVEL_INTERMEDIO,
  LEVEL_AVANZADO,
  LEVEL_SECRETOS,
  LEVEL_PROFESIONAL,
  LEVEL_NORMAS,
  LEVEL_CANCIONES,
].filter(Boolean);

// Ordem de progressão "principal" (o que precisa ser feito em sequência).
// Secretos, Profesional, Normas y Canciones son bônus: sempre desbloqueados, sem pré-requisito.
const MAIN_SEQUENCE = ["fundamentos", "basico", "intermedio", "avanzado"];
const BONUS_LEVELS = ["secretos", "profesional", "normas", "canciones"];

function getLevel(id) { return COURSE_LEVELS.find(l => l.id === id); }
function getLesson(levelId, lessonId) {
  const lvl = getLevel(levelId);
  return lvl ? lvl.lessons.find(l => l.id === lessonId) : null;
}

/* ---------------------------------------------------------------------- */
/* 1. FIREBASE                                                             */
/* ---------------------------------------------------------------------- */
firebase.initializeApp(FIREBASE_CONFIG);
const auth = firebase.auth();
const db = firebase.firestore();
// Cloud Functions (backend serverless) — usado para hablar con la API del Mercado Pago
// sin exponer el Access Token en el navegador. Requiere que index.html cargue
// firebase-functions-compat.js y que el proyecto tenga las funciones desplegadas
// (ver carpeta /functions y GUIA_PAGOS.md). Si no están desplegadas todavía,
// startCheckout() simplemente muestra un error amigable — el resto del sistema sigue funcionando.
const functions = (typeof firebase.functions === "function") ? firebase.functions() : null;

// Versión del sistema, visible en Mi Cuenta / Configuración y en el pie de la barra lateral.
// Se debe actualizar manualmente cada vez que se sube una nueva versión al repositorio
// (formato AAAA.MM.DD.N — N = número de subida ese día, empieza en 1).
const APP_VERSION = "2026.07.15.4";

// Valores por defecto de la mensualidad/anualidad — el admin puede cambiarlos en
// Configuración → Planes y precios (guardados en config/settings, campos priceMonthly/priceAnnual).
const DEFAULT_PRICE_MONTHLY = 29.90;
const DEFAULT_PRICE_ANNUAL = 299.00;

const DEFAULT_PASS_SCORES = { fundamentos: 70, basico: 70, intermedio: 70, avanzado: 70 };
// Modo de liberación del gabarito (respuesta correcta): "immediate" = se muestra apenas
// el alumno responde cada pregunta (comportamiento histórico); "after" = se oculta durante
// el ejercicio/prueba y solo se libera en la pantalla de Revisión, al terminar.
const DEFAULT_GABARITO_MODE = "immediate";
const DEFAULT_SCHEDULE_MONTHS = 12;
const SCHEDULE_PRESETS = [3, 6, 8, 12];
const MS_PER_MONTH = 1000 * 60 * 60 * 24 * 30.4368; // média de dias por mês (ano civil / 12)

/* ---------------------------------------------------------------------- */
/* 1b. APARIÊNCIA: TEMAS DE COR, FONTES E IDIOMA DA INTERFACE              */
/* ---------------------------------------------------------------------- */
const THEMES = {
  espana:    { label: "España Clásica",  rojo: "#AA151B", rojoDark: "#7a0f14", amarillo: "#F1BF00", amarilloDark: "#c99e00" },
  andalucia: { label: "Andalucía",       rojo: "#1D5C8C", rojoDark: "#123f61", amarillo: "#E8A33D", amarilloDark: "#c07d1e" },
  flamenco:  { label: "Flamenco",        rojo: "#6B1E3C", rojoDark: "#4a1229", amarillo: "#D4A017", amarilloDark: "#a97e0f" },
  noche:     { label: "Noche Madrileña", rojo: "#8B1E2E", rojoDark: "#5c1420", amarillo: "#F1BF00", amarilloDark: "#c99e00" },
};

const FONTS = {
  poppins: { label: "Poppins",        stack: `"Poppins","Segoe UI",system-ui,-apple-system,sans-serif` },
  nunito:  { label: "Nunito",         stack: `"Nunito","Segoe UI",system-ui,-apple-system,sans-serif` },
  lora:    { label: "Lora (clásica)", stack: `"Lora","Georgia",serif` },
};

const UI_LANGS = { es: "Español", pt: "Português", en: "English" };

const I18N = {
  es: {
    auth_login_sub: "Entra para continuar aprendiendo", auth_register_sub: "Crea tu cuenta gratis", auth_forgot_sub: "Recuperar contraseña",
    auth_name: "Nombre", auth_name_ph: "Tu nombre", auth_email: "E-mail", auth_password: "Contraseña", auth_password_ph: "••••••••",
    pass_show: "Mostrar contraseña", pass_hide: "Ocultar contraseña",
    auth_btn_login: "Entrar", auth_btn_register: "Crear cuenta", auth_btn_forgot: "Enviar e-mail de recuperación",
    auth_no_account: "¿No tienes cuenta?", auth_register_link: "Regístrate", auth_forgot_link: "¿Olvidaste tu contraseña?",
    auth_have_account: "¿Ya tienes cuenta?", auth_login_link: "Entra aquí", auth_back_login: "Volver al login",
    auth_hero_title: "¡Aprende Español de España!", auth_hero_sub: "Un curso interactivo, con pronunciación real, ejercicios de voz y seguimiento de tu progreso.",
    topbar_admin: "Admin", topbar_logout: "Salir",
    dash_greeting: "Hola, {name} 👋 ¿Qué vamos a estudiar hoy?", dash_bonus: "🎁 Módulos bono",
    back_modules: "← Volver a los módulos", back_to: "← Volver a {name}", start_exercises: "Empezar ejercicios ({n}) →",
    exam_pending: "Prueba pendiente", exam_passed: "✅ Prueba aprobada ({score}%)",
    exam_min_pass: "Nota mínima para aprobar: {score}%", exam_approved_with: " · ✅ Aprobado con {score}%",
    level_locked_alert: "Primero tienes que aprobar la prueba del nivel anterior para desbloquear este módulo.",
    level_preview_note: "puedes ver el temario, pero las lecciones se abren al desbloquear el nivel.",
    exit: "✕ Salir", exit_confirm: "¿Seguro que quieres salir? Vas a perder el progreso de este ejercicio/prueba.",
    ex_next: "Siguiente →", ex_check: "Comprobar", ex_skip: "No puedo grabar ahora",
    ex_resume_title: "📍 Tienes un ejercicio en curso", ex_resume_progress: "vas por la pregunta {cur} de {total}.",
    ex_continue_btn: "Continuar donde lo dejé →", ex_restart_btn: "Empezar de nuevo", ex_discover_lyrics_btn: "🎤 Descubrir la letra",
    result_pass_title: "¡Aprobado!", result_fail_title: "Todavía no...", result_lesson_title: "¡Ejercicios completados!",
    result_min_score: "Nota mínima exigida: {score}%", result_unlocked: "🔓 ¡Has desbloqueado el próximo nivel!",
    result_retry_msg: "Repasa la lección y vuelve a intentar la prueba cuando estés listo(a).",
    btn_back_to: "Volver a {name}", btn_retry: "Intentar de nuevo",
    admin_title: "⚙️ Panel de Administrador", admin_scores_title: "Nota mínima para aprobar cada nivel (%)",
    admin_passrate_title: "Aprobación por nivel", admin_passrate_none: "Todavía no hay alumnos con intentos registrados en este nivel.",
    admin_passrate_row: "{passed} de {total} alumnos aprobados ({attempted} rindieron la prueba)",
    admin_certs_issued: "certificados emitidos",
    admin_save: "Guardar configuración", admin_saved: "¡Configuración guardada!",
    admin_gabarito_title: "Liberación del gabarito", admin_gabarito_label: "¿Cuándo se muestra la respuesta correcta?",
    admin_gabarito_immediate: "Inmediato — al responder cada pregunta", admin_gabarito_after: "Solo al finalizar — el alumno revisa todo junto al terminar",
    admin_gabarito_hint: "Elige si el alumno ve la respuesta correcta apenas responde cada pregunta, o si prefieres ocultarla durante el ejercicio/prueba. En los dos casos, el alumno siempre puede consultar después sus respuestas y el gabarito completo en la pantalla de Revisión.",
    admin_nav_songs: "Canciones",
    admin_songs_title: "Canciones", admin_songs_intro: "Agrega canciones para que el alumno descubra la letra, escuche paso a paso y complete los espacios. Pega la letra tal cual la tengas — el sistema arma los ejercicios automáticamente.",
    admin_songs_new_btn: "Agregar canción", admin_songs_field_title: "Título de la canción", admin_songs_field_title_ph: "Ej.: ¿Cómo Pagarte",
    admin_songs_field_artist: "Artista", admin_songs_field_artist_ph: "Ej.: Carlos Rivera", admin_songs_field_youtube: "Link del video oficial de YouTube",
    admin_songs_field_lyrics: "Letra completa", admin_songs_field_lyrics_hint: "Una línea por renglón. Para marcar una palabra como hueco, envuélvela en doble llave: {{palabra}}. O pega la letra sin marcar nada y usa el botón de abajo para marcar automáticamente. Opcional (recomendado): agrega al inicio de la línea el minuto exacto en que se canta, así: [01:23] Letra de esa línea — el alumno va a poder escuchar el video ya abierto justo en ese fragmento, en vez de la canción entera.",
    admin_songs_field_lyrics_ph: "Pega aquí la letra completa, línea por línea...",
    admin_songs_auto_blank_btn: "Marcar palabras automáticamente", admin_songs_cancel: "Cancelar", admin_songs_save: "Guardar canción",
    admin_songs_auto_time_btn: "Marcar tiempos automáticamente",
    admin_songs_auto_time_hint: "Calcula un tiempo aproximado ([mm:ss]) para cada línea, repartiendo la duración real del video. No es exacto, pero alcanza para que el alumno escuche el fragmento correcto en vez de la canción entera. Si alguna línea queda desalineada, puedes corregir el número a mano.",
    admin_songs_need_youtube_first: "Primero pega un link válido de YouTube arriba.",
    admin_songs_calculating: "Calculando duración del video...",
    admin_songs_time_error: "No se pudo calcular la duración del video. Intenta de nuevo o marca los tiempos a mano con [mm:ss].",
    admin_songs_field_words: "Cantidad de palabras a practicar",
    admin_songs_field_words_hint: "El sistema calcula solo el tamaño del trecho de video (duración real de la canción ÷ esta cantidad). Menos palabras = trechos más largos; más palabras = trechos más cortos. Recomendado: entre 10 y 20, y cerca de la cantidad real de huecos {{...}} que marcaste abajo — un número mucho más alto que los huecos reales hace los trechos innecesariamente cortos.",
    admin_songs_list_title: "Canciones agregadas ({n})", admin_songs_empty: "Todavía no agregaste ninguna canción.",
    admin_songs_lines_unit: "líneas", admin_songs_blanks_unit: "huecos", admin_songs_bad_youtube: "No se pudo identificar el video de YouTube — revisa el link.",
    admin_songs_saved: "¡Canción guardada!", admin_songs_confirm_delete: "¿Eliminar esta canción? El alumno ya no podrá practicarla.",
    admin_songs_live_count: "{lines} líneas · {blanks} huecos marcados",
    admin_students_title: "Alumnos y progreso ({n})", admin_no_students: "Todavía no hay alumnos con pruebas realizadas.",
    back_panel: "← Volver al panel", back_generic: "← Volver",
    account_title: "👤 Mi Cuenta", account_tab_security: "Seguridad", account_tab_appearance: "Apariencia", account_tab_profile: "Perfil", account_tab_access: "Mis Accesos", account_tab_voice: "Voz",
    // --- Aceptación de términos + planes de pago (Mercado Pago) ---
    lgpd_label: "Protección de datos personales (LGPD)",
    lgpd_body: "De acuerdo con la Ley General de Protección de Datos (LGPD - Ley 13.709/2018) y normas de protección de datos aplicables, los datos personales que proporciones (nombre, e-mail, teléfono, dirección, foto y datos de uso del curso) serán recolectados y tratados por Quallisi — Consultoría y Auditoría, responsable de esta plataforma, con la única finalidad de gestionar tu matrícula, tu progreso académico, la emisión de certificados y el contacto relacionado al curso. Tus datos no serán vendidos ni compartidos con terceros ajenos a esta finalidad, y se conservarán mientras tu cuenta esté activa. Podés solicitar en cualquier momento el acceso, la corrección o la eliminación de tus datos personales escribiendo a la administración del curso.",
    lgpd_checkbox_label: "Leí y acepto el tratamiento de mis datos personales conforme a lo descrito arriba (LGPD).",
    lgpd_required_error: "Tenés que aceptar el tratamiento de datos personales para crear tu cuenta.",
    terms_title: "Antes de empezar", terms_intro: "Para liberar tu acceso al curso, primero aceptá las condiciones de uso y de pago.",
    terms_body: "Al continuar, confirmás que sos mayor de edad (o contás con autorización de tu responsable), que las lecciones y el material son de uso personal e intransferible, y que el acceso completo al curso depende de mantener al día el plan de pago que elijas a continuación. Los precios y condiciones pueden ser actualizados por la administración, siempre con aviso previo.",
    terms_checkbox_label: "Leí y acepto las condiciones de uso y de pago.",
    terms_accept_btn: "Aceptar y continuar", terms_required_error: "Tenés que marcar la casilla para continuar.", terms_logout_btn: "Salir",
    plan_title: "Elegí tu plan", plan_intro: "Elegí cómo preferís pagar tu acceso a ¡Español Ya!. Podés cambiar de plan más adelante escribiéndole a la administración.",
    plan_monthly_name: "Mensual", plan_monthly_desc: "Cobro recurrente todos los meses. Cancelás cuando quieras.",
    plan_annual_name: "Anual", plan_annual_desc: "Pago único por los 12 meses — no se renueva solo.",
    plan_per_month: "/ mes", plan_per_year: "/ año",
    plan_choose_btn: "Elegir este plan", plan_processing: "Conectando con Mercado Pago...",
    plan_generic_error: "No se pudo iniciar el pago. Puede que los pagos todavía no estén activados — contactá a la administración.",
    plan_logout_btn: "Salir", plan_checkout_return_title: "¡Gracias!", plan_checkout_return_msg: "Estamos confirmando tu pago con Mercado Pago. Esto puede tardar unos minutos — mientras tanto, ya podés entrar al curso.",
    plan_checkout_return_btn: "Ir al panel",
    pay_status_active: "🟢 Al día", pay_status_pending: "🟡 Pago pendiente de confirmación", pay_status_overdue: "🔴 Atrasado", pay_status_none: "⚪ Sin plan elegido", pay_status_suspended: "⛔ Acceso suspendido",
    pending_suspended_title: "Acceso suspendido", pending_suspended_msg: "Tu acceso fue suspendido por la administración (generalmente por una pendencia de pago). Contactá a la administración para regularizar tu situación.",
    admin_billing_title: "💳 Planes y precios", admin_billing_intro: "Valores cobrados por Mercado Pago. Cambios acá no afectan a quien ya tiene un plan activo, solo a nuevas elecciones de plan.",
    admin_billing_monthly_label: "Valor del plan mensual (R$)", admin_billing_annual_label: "Valor del plan anual (R$)",
    admin_pay_suspend_btn: "Suspender acceso", admin_pay_reactivate_btn: "Reactivar acceso", admin_pay_suspend_confirm: "¿Seguro que querés suspender el acceso de este alumno? Va a dejar de poder entrar al curso hasta que lo reactivés.",
    xp_tooltip: "XP = puntos de experiencia, ganados al completar lecciones y pruebas.",
    xp_explain_title: "⭐ ¿Qué es el XP?",
    xp_explain_body: "El XP (puntos de experiencia) es un indicador de tu actividad dentro del curso — no es una nota. Ganas XP cada vez que completas una lección o una prueba (cuanto mejor la nota de la prueba, un poco más de XP ganas). Sirve para que veas, de un vistazo, cuánto has practicado — pero tu aprobación real en cada nivel depende de la nota de la prueba, no del XP acumulado.",
    profile_name_label: "Nombre completo", profile_name_ph: "Tu nombre", profile_save: "Guardar nombre", profile_saved: "¡Nombre actualizado!",
    profile_extra_section_title: "Datos de contacto y perfil", profile_extra_section_hint: "Esta información complementa tu cuenta (que ya tiene tu e-mail de acceso) y ayuda a la administración a contactarte si es necesario.",
    profile_photo_upload_btn: "📷 Subir foto", profile_photo_hint: "Se muestra en tu Panel y en el menú. Formatos: JPG, PNG.",
    profile_photo_invalid: "Elegí un archivo de imagen válido.", profile_photo_error: "No se pudo procesar la imagen. Probá con otra.",
    profile_phone_label: "Teléfono", profile_phone_ph: "Ej.: (11) 91234-5678",
    profile_secondary_email_label: "E-mail adicional", profile_secondary_email_ph: "Un e-mail de contacto (puede ser distinto al de acceso)",
    profile_address_street_label: "Dirección (calle y número)", profile_address_street_ph: "Ej.: Av. Principal, 123",
    profile_address_city_label: "Ciudad", profile_address_state_label: "Provincia / Estado",
    profile_address_country_label: "País", profile_address_zip_label: "Código postal",
    profile_observations_label: "Observaciones", profile_observations_ph: "Algo más que quieras contarnos (opcional)",
    profile_complete_title: "Completá tu registro", profile_complete_intro: "Antes de continuar, completá algunos datos adicionales. Ya usamos tu e-mail de acceso para el login — esto es información complementaria.",
    profile_complete_save_btn: "Guardar y continuar", profile_complete_required_error: "Completá teléfono, e-mail adicional y dirección (calle, ciudad y país) para continuar.",
    account_current_pass: "Contraseña actual", account_new_pass: "Nueva contraseña", account_confirm_pass: "Confirmar nueva contraseña",
    account_change_pass_btn: "Cambiar contraseña", account_pass_mismatch: "Las contraseñas nuevas no coinciden.",
    account_pass_changed: "¡Contraseña actualizada con éxito!", account_theme_label: "Color del tema", account_font_label: "Fuente",
    account_lang_label: "Idioma de la interfaz", account_save_appearance: "Guardar apariencia", account_appearance_saved: "¡Apariencia guardada!", account_save_voice: "Guardar voz",
    account_voice_label: "Voz de las lecciones (texto a voz)", account_voice_preview: "Escuchar ejemplo con esta voz",
    account_voice_none: "Tu navegador no ofrece voces en español todavía. Prueba recargar la página o usar Google Chrome.",
    account_voice_hint: "Elige la voz que más te guste — se usará en todos los botones 🔊 del curso. Si cambias de dispositivo o navegador, puede que tengas que elegirla de nuevo.",
    account_voice_sample_text: "Hola, así sonará mi voz en tus lecciones de español.",
    dialogue_play_all: "Escuchar diálogo completo", dialogue_stop_all: "Detener",
    translate_toggle_title: "Mostrar/ocultar traducción al portugués", translation_missing: "Traducción aún no disponible para esta frase.",
    account_voice2_label: "2ª voz (para diálogos con 2 personajes)",
    account_voice2_hint: "Opcional: si eliges una 2ª voz, el primer personaje de cada diálogo habla con la Voz 1 (arriba) y el segundo con esta. Si no eliges ninguna, todos hablan con la Voz 1.",
    account_voice2_none_opt: "🚫 No usar 2ª voz (un solo narrador)",
    nav_schedule: "📅 Cronograma", panel_title: "🎓 Panel del Alumno",
    sidebar_dashboard: "Panel", sidebar_settings: "Configuración", sidebar_toggle: "Mostrar/ocultar menú",
    sidebar_section_learn: "Aprender", sidebar_section_admin: "Administración",
    panel_overall_title: "Progreso general del curso", panel_overall_sub: "{done} de {total} etapas completadas",
    panel_schedule_ontrack: "🟢 Dentro del plazo", panel_schedule_ahead: "🔵 Adelantado", panel_schedule_behind: "🟠 Atrasado",
    panel_schedule_ontrack_d: "Vas exactamente como lo planeado. ¡Sigue así!",
    panel_schedule_ahead_d: "Vas por delante de tu cronograma. ¡Excelente ritmo!",
    panel_schedule_behind_d: "Estás un poco atrasado respecto al plan. Nada grave, ¡puedes recuperar el ritmo!",
    panel_view_schedule: "Ver cronograma detallado →",
    cert_btn: "🎓 Certificado", cert_final_btn: "🏆 Diploma final del curso", cert_final_title: "¡Felicidades! Completaste los 3 niveles principales.",
    cert_final_card_title: "🏆 Diploma de Finalización Completa", cert_final_card_sub: "Disponible al aprobar Básico, Intermedio y Avanzado.",
    schedule_title: "📅 Mi Cronograma de Estudio", schedule_intro: "Por defecto, el curso está pensado para 12 meses. Ajusta la duración a tu ritmo: puedes hacerlo en 3, 6, 8, 12 meses o el tiempo que prefieras.",
    schedule_duration_label: "Duración total del curso", schedule_custom_label: "Meses (personalizado)",
    schedule_start_label: "Fecha de inicio", schedule_save: "Guardar cronograma", schedule_saved: "¡Cronograma actualizado!",
    schedule_status_title: "Tu situación actual", schedule_expected: "Esperado hasta hoy: {pct}%", schedule_actual: "Tu progreso real: {pct}%",
    schedule_projected: "🔮 A tu ritmo actual, terminarías el curso alrededor de {date}.",
    schedule_projected_unknown: "🔮 Completa tu primera lección para calcular tu previsión de finalización.",
    schedule_plan_title: "Plan de estudio sugerido mes a mes", schedule_plan_month: "Mes {n}",
    schedule_months_unit: "meses", back_dashboard: "← Volver al panel",
    schedule_edit_btn: "✏️ Personalizar contenido por mes", schedule_edit_title: "✏️ Personalizar Cronograma",
    schedule_edit_intro: "Elige en qué mes quieres hacer cada lección/prueba. Por defecto usan una distribución automática — cambia solo lo que quieras ajustar.",
    schedule_edit_col_content: "Contenido", schedule_edit_col_month: "Mes asignado",
    schedule_edit_save: "Guardar asignación", schedule_edit_reset: "Restaurar automático", schedule_edit_saved: "¡Cronograma personalizado guardado!",

    sidebar_levels: "Mis Niveles", sidebar_syllabus: "Temario Completo", sidebar_notas: "Mis Notas", sidebar_notebook: "Cuaderno",
    syllabus_title: "Temario Completo del Curso", syllabus_intro: "Todos los niveles y todas las lecciones de un vistazo, con su tema principal — para consultar el material de estudio sin tener que entrar nivel por nivel.",
    sidebar_analytics: "Mi Actividad", sidebar_schedule: "Cronograma", sidebar_tutorial: "Tutorial",
    sidebar_section_progress: "Mi Progreso",
    admin_nav_overview: "Resumen", admin_nav_students: "Alumnos", admin_nav_analytics: "Analíticas",
    admin_nav_certs: "Certificados", admin_nav_config: "Configuración", admin_nav_access: "Accesos",
    access_log_title: "Historial de Acceso", access_log_admin_hint: "Registro de todos los inicios de sesión de todos los usuarios (los últimos 300).",
    access_log_own_hint: "Registro de tus propios inicios de sesión en el sistema.",
    access_log_empty: "Todavía no hay accesos registrados.",
    access_log_col_user: "Usuario", access_log_col_date: "Fecha y hora", access_log_col_device: "Dispositivo", access_log_col_version: "Versión",
    system_version_title: "Versión del sistema", system_version_label: "Versión",
    current_level_badge: "📍 Estás aquí", continue_btn: "Continuar estudiando →", next_up_label: "Sigues en:",
    home_title: "🎓 Panel del Alumno", home_no_progress: "Todavía no empezaste ningún nivel. ¡Vamos a comenzar!",
    home_start_btn: "Empezar ahora →", home_your_levels_link: "Ver todos mis niveles →",
    notas_title: "📊 Mis Notas", notas_aproveitamento_label: "Aprovechamiento general",
    notas_aproveitamento_sub: "Promedio de {n} evaluaciones", notas_no_data: "Todavía no tienes evaluaciones registradas.",
    notas_schedule_label: "Cumplimiento del cronograma",
    notas_level_col: "Nivel", notas_lessons_col: "Lecciones", notas_avg_col: "Promedio",
    notas_exam_col: "Prueba", notas_status_col: "Estado",
    notas_status_passed: "✅ Aprobado", notas_status_failed: "❌ No aprobado", notas_status_pending: "⏳ Prueba pendiente",
    notas_status_progress: "▶️ En curso", notas_status_locked: "🔒 Bloqueado",
    notebook_title: "📓 Mi Cuaderno", notebook_intro: "Tus apuntes personales, guardados en la nube — solo tú puedes verlos.",
    notebook_new_btn: "+ Nueva nota", notebook_title_ph: "Título de la nota", notebook_body_ph: "Escribe aquí tus apuntes...",
    notebook_save: "Guardar nota", notebook_delete: "Eliminar", notebook_empty: "Todavía no tienes notas. ¡Crea la primera!",
    notebook_updated: "Actualizado el {date}", notebook_cancel: "Cancelar", notebook_saved_msg: "¡Nota guardada!",
    analytics_title: "📈 Mi Actividad", analytics_admin_title: "📈 Analíticas Generales",
    analytics_total_attempts: "Ejercicios respondidos", analytics_accuracy: "Precisión general",
    analytics_time_spent: "Tiempo estimado de estudio", analytics_by_type_title: "Aciertos por tipo de ejercicio",
    analytics_errors_title: "Últimos errores", analytics_no_data: "Todavía no hay suficientes datos. ¡Completa algunos ejercicios!",
    analytics_open_title: "✍️ Mis respuestas escritas", analytics_open_empty: "Todavía no respondiste ninguna pregunta dissertativa.",
    analytics_students_count: "Alumnos activos", analytics_avg_score: "Nota promedio general",
    cert_config_title: "🎓 Layouts de Certificados", cert_config_intro: "Cada nivel principal tiene un diseño de certificado propio, generado automáticamente en PDF al aprobar la prueba. Aquí puedes ver una vista previa de cada diseño.",
    cert_preview_btn: "Ver ejemplo en PDF",
    admin_nav_approvals: "Aprobaciones",
    pending_title: "⏳ Cuenta pendiente de aprobación", pending_msg: "¡Gracias por registrarte! Un administrador necesita aprobar tu cuenta antes de que puedas acceder al curso. Te avisaremos apenas esté lista.",
    pending_rejected_title: "🚫 Registro no aprobado", pending_rejected_msg: "Tu solicitud de registro no fue aprobada. Ponte en contacto con el administrador del curso si crees que esto es un error.",
    pending_logout_btn: "Salir",
    admin_approvals_title: "✅ Aprobaciones de Registro ({n})", admin_no_pending: "No hay registros pendientes de aprobación.",
    admin_approve_btn: "✅ Aprobar", admin_reject_btn: "🚫 Rechazar", admin_pending_since: "Registrado el {date}",
    cert_preview_open_btn: "👁️ Vista previa del certificado",
    cert_preview_locked_note: "Esta es solo una vista previa del diseño. Podrás generar el PDF real en cuanto apruebes la prueba de este nivel.",
  },
  pt: {
    auth_login_sub: "Entre para continuar aprendendo", auth_register_sub: "Crie sua conta grátis", auth_forgot_sub: "Recuperar senha",
    auth_name: "Nome", auth_name_ph: "Seu nome", auth_email: "E-mail", auth_password: "Senha", auth_password_ph: "••••••••",
    pass_show: "Mostrar senha", pass_hide: "Ocultar senha",
    auth_btn_login: "Entrar", auth_btn_register: "Criar conta", auth_btn_forgot: "Enviar e-mail de recuperação",
    auth_no_account: "Não tem conta?", auth_register_link: "Cadastre-se", auth_forgot_link: "Esqueceu sua senha?",
    auth_have_account: "Já tem conta?", auth_login_link: "Entre aqui", auth_back_login: "Voltar ao login",
    auth_hero_title: "Aprenda Espanhol da Espanha!", auth_hero_sub: "Um curso interativo, com pronúncia real, exercícios de fala e acompanhamento do seu progresso.",
    topbar_admin: "Admin", topbar_logout: "Sair",
    dash_greeting: "Olá, {name} 👋 O que vamos estudar hoje?", dash_bonus: "🎁 Módulos bônus",
    back_modules: "← Voltar aos módulos", back_to: "← Voltar a {name}", start_exercises: "Começar exercícios ({n}) →",
    exam_pending: "Prova pendente", exam_passed: "✅ Prova aprovada ({score}%)",
    exam_min_pass: "Nota mínima para aprovar: {score}%", exam_approved_with: " · ✅ Aprovado com {score}%",
    level_locked_alert: "Primeiro você precisa passar na prova do nível anterior para desbloquear este módulo.",
    level_preview_note: "você pode ver o conteúdo, mas as lições abrem ao desbloquear o nível.",
    exit: "✕ Sair", exit_confirm: "Tem certeza que quer sair? Você vai perder o progresso deste exercício/prova.",
    ex_next: "Próximo →", ex_check: "Verificar", ex_skip: "Não posso gravar agora",
    ex_resume_title: "📍 Você tem um exercício em andamento", ex_resume_progress: "você está na pergunta {cur} de {total}.",
    ex_continue_btn: "Continuar de onde parei →", ex_restart_btn: "Começar de novo", ex_discover_lyrics_btn: "🎤 Descobrir a letra",
    result_pass_title: "Aprovado!", result_fail_title: "Ainda não...", result_lesson_title: "Exercícios concluídos!",
    result_min_score: "Nota mínima exigida: {score}%", result_unlocked: "🔓 Você desbloqueou o próximo nível!",
    result_retry_msg: "Revise a lição e tente a prova novamente quando estiver pronto(a).",
    btn_back_to: "Voltar a {name}", btn_retry: "Tentar novamente",
    admin_title: "⚙️ Painel do Administrador", admin_scores_title: "Nota mínima para aprovar cada nível (%)",
    admin_passrate_title: "Aprovação por nível", admin_passrate_none: "Ainda não há alunos com tentativas registradas neste nível.",
    admin_passrate_row: "{passed} de {total} alunos aprovados ({attempted} fizeram a prova)",
    admin_certs_issued: "certificados emitidos",
    admin_save: "Salvar configuração", admin_saved: "Configuração salva!",
    admin_gabarito_title: "Liberação do gabarito", admin_gabarito_label: "Quando a resposta correta é exibida?",
    admin_gabarito_immediate: "Imediato — ao responder cada pergunta", admin_gabarito_after: "Só ao final — o aluno revisa tudo junto ao terminar",
    admin_gabarito_hint: "Escolha se o aluno vê a resposta correta assim que responde cada pergunta, ou se prefere ocultá-la durante o exercício/prova. Nos dois casos, o aluno sempre pode consultar depois suas respostas e o gabarito completo na tela de Revisão.",
    admin_nav_songs: "Canções",
    admin_songs_title: "Canções", admin_songs_intro: "Adicione músicas para o aluno descobrir a letra, ouvir passo a passo e completar os espaços. Cole a letra como você já tem — o sistema monta os exercícios automaticamente.",
    admin_songs_new_btn: "Adicionar canção", admin_songs_field_title: "Título da canção", admin_songs_field_title_ph: "Ex.: ¿Cómo Pagarte",
    admin_songs_field_artist: "Artista", admin_songs_field_artist_ph: "Ex.: Carlos Rivera", admin_songs_field_youtube: "Link do vídeo oficial no YouTube",
    admin_songs_field_lyrics: "Letra completa", admin_songs_field_lyrics_hint: "Uma linha por renglão. Para marcar uma palavra como lacuna, envolva em chave dupla: {{palavra}}. Ou cole a letra sem marcar nada e use o botão abaixo para marcar automaticamente. Opcional (recomendado): coloque no início da linha o minuto exato em que é cantada, assim: [01:23] Letra dessa linha — o aluno vai poder ouvir o vídeo já aberto direto nesse trecho, em vez da música inteira.",
    admin_songs_field_lyrics_ph: "Cole aqui a letra completa, linha por linha...",
    admin_songs_auto_blank_btn: "Marcar palavras automaticamente", admin_songs_cancel: "Cancelar", admin_songs_save: "Salvar canção",
    admin_songs_auto_time_btn: "Marcar tempos automaticamente",
    admin_songs_auto_time_hint: "Calcula um tempo aproximado ([mm:ss]) para cada linha, repartindo a duração real do vídeo. Não é exato, mas já é suficiente pro aluno ouvir o trecho certo em vez da música inteira. Se alguma linha ficar desalinhada, você pode corrigir o número manualmente.",
    admin_songs_need_youtube_first: "Cole primeiro um link válido do YouTube ali em cima.",
    admin_songs_calculating: "Calculando duração do vídeo...",
    admin_songs_time_error: "Não foi possível calcular a duração do vídeo. Tente de novo ou marque os tempos manualmente com [mm:ss].",
    admin_songs_field_words: "Quantidade de palavras a praticar",
    admin_songs_field_words_hint: "O sistema calcula sozinho o tamanho do trecho de vídeo (duração real da música ÷ essa quantidade). Menos palavras = trechos mais longos; mais palavras = trechos mais curtos. Recomendado: entre 10 e 20, e próximo da quantidade real de lacunas {{...}} marcadas abaixo — um número bem maior que as lacunas reais deixa os trechos curtos demais sem necessidade.",
    admin_songs_list_title: "Canções adicionadas ({n})", admin_songs_empty: "Você ainda não adicionou nenhuma canção.",
    admin_songs_lines_unit: "linhas", admin_songs_blanks_unit: "lacunas", admin_songs_bad_youtube: "Não consegui identificar o vídeo do YouTube — confira o link.",
    admin_songs_saved: "Canção salva!", admin_songs_confirm_delete: "Excluir esta canção? O aluno não vai poder mais praticá-la.",
    admin_songs_live_count: "{lines} linhas · {blanks} lacunas marcadas",
    admin_students_title: "Alunos e progresso ({n})", admin_no_students: "Ainda não há alunos com provas realizadas.",
    back_panel: "← Voltar ao painel", back_generic: "← Voltar",
    account_title: "👤 Minha Conta", account_tab_security: "Segurança", account_tab_appearance: "Aparência", account_tab_profile: "Perfil", account_tab_access: "Meus Acessos", account_tab_voice: "Voz",
    // --- Aceite de termos + planos de pagamento (Mercado Pago) ---
    lgpd_label: "Proteção de dados pessoais (LGPD)",
    lgpd_body: "De acordo com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018), os dados pessoais que você fornecer (nome, e-mail, telefone, endereço, foto e dados de uso do curso) serão coletados e tratados pela Quallisi — Consultoria e Auditoria, responsável por esta plataforma, com a única finalidade de gerenciar sua matrícula, seu progresso acadêmico, a emissão de certificados e o contato relacionado ao curso. Seus dados não serão vendidos nem compartilhados com terceiros alheios a essa finalidade, e serão mantidos enquanto sua conta estiver ativa. Você pode solicitar a qualquer momento o acesso, a correção ou a exclusão dos seus dados pessoais escrevendo para a administração do curso.",
    lgpd_checkbox_label: "Li e aceito o tratamento dos meus dados pessoais conforme descrito acima (LGPD).",
    lgpd_required_error: "Você precisa aceitar o tratamento de dados pessoais para criar sua conta.",
    terms_title: "Antes de começar", terms_intro: "Para liberar seu acesso ao curso, primeiro aceite as condições de uso e de pagamento.",
    terms_body: "Ao continuar, você confirma que é maior de idade (ou tem autorização do responsável), que as lições e o material são de uso pessoal e intransferível, e que o acesso completo ao curso depende de manter em dia o plano de pagamento escolhido a seguir. Preços e condições podem ser atualizados pela administração, sempre com aviso prévio.",
    terms_checkbox_label: "Li e aceito as condições de uso e de pagamento.",
    terms_accept_btn: "Aceitar e continuar", terms_required_error: "Você precisa marcar a caixa para continuar.", terms_logout_btn: "Sair",
    plan_title: "Escolha seu plano", plan_intro: "Escolha como prefere pagar seu acesso ao ¡Español Ya!. Você pode mudar de plano depois falando com a administração.",
    plan_monthly_name: "Mensal", plan_monthly_desc: "Cobrança recorrente todo mês. Cancele quando quiser.",
    plan_annual_name: "Anual", plan_annual_desc: "Pagamento único pelos 12 meses — não renova sozinho.",
    plan_per_month: "/ mês", plan_per_year: "/ ano",
    plan_choose_btn: "Escolher este plano", plan_processing: "Conectando com o Mercado Pago...",
    plan_generic_error: "Não foi possível iniciar o pagamento. Pode ser que os pagamentos ainda não estejam ativados — contate a administração.",
    plan_logout_btn: "Sair", plan_checkout_return_title: "Obrigado!", plan_checkout_return_msg: "Estamos confirmando seu pagamento com o Mercado Pago. Isso pode levar alguns minutos — enquanto isso, você já pode entrar no curso.",
    plan_checkout_return_btn: "Ir para o painel",
    pay_status_active: "🟢 Em dia", pay_status_pending: "🟡 Pagamento aguardando confirmação", pay_status_overdue: "🔴 Atrasado", pay_status_none: "⚪ Sem plano escolhido", pay_status_suspended: "⛔ Acesso suspenso",
    pending_suspended_title: "Acesso suspenso", pending_suspended_msg: "Seu acesso foi suspenso pela administração (geralmente por uma pendência de pagamento). Contate a administração para regularizar sua situação.",
    admin_billing_title: "💳 Planos e preços", admin_billing_intro: "Valores cobrados via Mercado Pago. Mudanças aqui não afetam quem já tem um plano ativo, só novas escolhas de plano.",
    admin_billing_monthly_label: "Valor do plano mensal (R$)", admin_billing_annual_label: "Valor do plano anual (R$)",
    admin_pay_suspend_btn: "Suspender acesso", admin_pay_reactivate_btn: "Reativar acesso", admin_pay_suspend_confirm: "Tem certeza que quer suspender o acesso deste aluno? Ele vai deixar de conseguir entrar no curso até você reativar.",
    xp_tooltip: "XP = pontos de experiência, ganhos ao completar lições e provas.",
    xp_explain_title: "⭐ O que é o XP?",
    xp_explain_body: "O XP (pontos de experiência) é um indicador da sua atividade dentro do curso — não é uma nota. Você ganha XP toda vez que completa uma lição ou uma prova (quanto melhor a nota da prova, um pouco mais de XP você ganha). Serve para você ver, de relance, o quanto já praticou — mas sua aprovação real em cada nível depende da nota da prova, não do XP acumulado.",
    profile_name_label: "Nome completo", profile_name_ph: "Seu nome", profile_save: "Salvar nome", profile_saved: "Nome atualizado!",
    profile_extra_section_title: "Dados de contato e perfil", profile_extra_section_hint: "Essas informações complementam sua conta (que já tem seu e-mail de acesso) e ajudam a administração a te contatar se necessário.",
    profile_photo_upload_btn: "📷 Enviar foto", profile_photo_hint: "Aparece no seu Painel e no menu. Formatos: JPG, PNG.",
    profile_photo_invalid: "Escolha um arquivo de imagem válido.", profile_photo_error: "Não foi possível processar a imagem. Tente outra.",
    profile_phone_label: "Telefone", profile_phone_ph: "Ex.: (11) 91234-5678",
    profile_secondary_email_label: "E-mail adicional", profile_secondary_email_ph: "Um e-mail de contato (pode ser diferente do de acesso)",
    profile_address_street_label: "Endereço (rua e número)", profile_address_street_ph: "Ex.: Av. Principal, 123",
    profile_address_city_label: "Cidade", profile_address_state_label: "Estado / Província",
    profile_address_country_label: "País", profile_address_zip_label: "CEP / Código postal",
    profile_observations_label: "Observações", profile_observations_ph: "Algo mais que queira nos contar (opcional)",
    profile_complete_title: "Complete seu cadastro", profile_complete_intro: "Antes de continuar, complete alguns dados adicionais. Já usamos seu e-mail de acesso para o login — isso aqui é informação complementar.",
    profile_complete_save_btn: "Salvar e continuar", profile_complete_required_error: "Preencha telefone, e-mail adicional e endereço (rua, cidade e país) para continuar.",
    account_current_pass: "Senha atual", account_new_pass: "Nova senha", account_confirm_pass: "Confirmar nova senha",
    account_change_pass_btn: "Alterar senha", account_pass_mismatch: "As novas senhas não coincidem.",
    account_pass_changed: "Senha atualizada com sucesso!", account_theme_label: "Cor do tema", account_font_label: "Fonte",
    account_lang_label: "Idioma da interface", account_save_appearance: "Salvar aparência", account_appearance_saved: "Aparência salva!", account_save_voice: "Salvar voz",
    account_voice_label: "Voz das lições (texto para voz)", account_voice_preview: "Ouvir exemplo com esta voz",
    account_voice_none: "Seu navegador ainda não oferece vozes em espanhol. Tente recarregar a página ou usar o Google Chrome.",
    account_voice_hint: "Escolha a voz de que mais gostar — ela será usada em todos os botões 🔊 do curso. Se trocar de dispositivo ou navegador, talvez precise escolher de novo.",
    account_voice_sample_text: "Olá, assim vai soar minha voz nas suas lições de espanhol.",
    dialogue_play_all: "Ouvir diálogo completo", dialogue_stop_all: "Parar",
    translate_toggle_title: "Mostrar/ocultar tradução em português", translation_missing: "Tradução ainda não disponível para esta frase.",
    account_voice2_label: "2ª voz (para diálogos com 2 personagens)",
    account_voice2_hint: "Opcional: se você escolher uma 2ª voz, o primeiro personagem de cada diálogo fala com a Voz 1 (acima) e o segundo com esta. Se não escolher nenhuma, todos falam com a Voz 1.",
    account_voice2_none_opt: "🚫 Não usar 2ª voz (um só narrador)",
    nav_schedule: "📅 Cronograma", panel_title: "🎓 Painel do Aluno",
    sidebar_dashboard: "Painel", sidebar_settings: "Configurações", sidebar_toggle: "Mostrar/ocultar menu",
    sidebar_section_learn: "Aprender", sidebar_section_admin: "Administração",
    panel_overall_title: "Progresso geral do curso", panel_overall_sub: "{done} de {total} etapas concluídas",
    panel_schedule_ontrack: "🟢 Dentro do prazo", panel_schedule_ahead: "🔵 Adiantado", panel_schedule_behind: "🟠 Atrasado",
    panel_schedule_ontrack_d: "Você está exatamente como planejado. Continue assim!",
    panel_schedule_ahead_d: "Você está à frente do seu cronograma. Excelente ritmo!",
    panel_schedule_behind_d: "Você está um pouco atrasado em relação ao plano. Nada grave, dá para retomar o ritmo!",
    panel_view_schedule: "Ver cronograma detalhado →",
    cert_btn: "🎓 Certificado", cert_final_btn: "🏆 Diploma final do curso", cert_final_title: "Parabéns! Você concluiu os 3 níveis principais.",
    cert_final_card_title: "🏆 Diploma de Conclusão Completa", cert_final_card_sub: "Disponível ao aprovar Básico, Intermediário e Avançado.",
    schedule_title: "📅 Meu Cronograma de Estudo", schedule_intro: "Por padrão, o curso é pensado para 12 meses. Ajuste a duração ao seu ritmo: você pode fazer em 3, 6, 8, 12 meses ou o tempo que preferir.",
    schedule_duration_label: "Duração total do curso", schedule_custom_label: "Meses (personalizado)",
    schedule_start_label: "Data de início", schedule_save: "Salvar cronograma", schedule_saved: "Cronograma atualizado!",
    schedule_status_title: "Sua situação atual", schedule_expected: "Esperado até hoje: {pct}%", schedule_actual: "Seu progresso real: {pct}%",
    schedule_projected: "🔮 No seu ritmo atual, você terminaria o curso por volta de {date}.",
    schedule_projected_unknown: "🔮 Conclua sua primeira lição para calcularmos sua previsão de conclusão.",
    schedule_plan_title: "Plano de estudo sugerido mês a mês", schedule_plan_month: "Mês {n}",
    schedule_months_unit: "meses", back_dashboard: "← Voltar ao painel",
    schedule_edit_btn: "✏️ Personalizar conteúdo por mês", schedule_edit_title: "✏️ Personalizar Cronograma",
    schedule_edit_intro: "Escolha em qual mês você quer fazer cada lição/prova. Por padrão usam uma distribuição automática — mude só o que quiser ajustar.",
    schedule_edit_col_content: "Conteúdo", schedule_edit_col_month: "Mês atribuído",
    schedule_edit_save: "Salvar atribuição", schedule_edit_reset: "Restaurar automático", schedule_edit_saved: "Cronograma personalizado salvo!",

    sidebar_levels: "Meus Níveis", sidebar_syllabus: "Programa Completo", sidebar_notas: "Minhas Notas", sidebar_notebook: "Caderno",
    syllabus_title: "Programa Completo do Curso", syllabus_intro: "Todos os níveis e todas as lições em um só lugar, com o tema principal de cada uma — para consultar o material de estudo sem precisar entrar nível por nível.",
    sidebar_analytics: "Minha Atividade", sidebar_schedule: "Cronograma", sidebar_tutorial: "Tutorial",
    sidebar_section_progress: "Meu Progresso",
    admin_nav_overview: "Resumo", admin_nav_students: "Alunos", admin_nav_analytics: "Analíticas",
    admin_nav_certs: "Certificados", admin_nav_config: "Configurações", admin_nav_access: "Acessos",
    access_log_title: "Histórico de Acesso", access_log_admin_hint: "Registro de todos os logins de todos os usuários (os últimos 300).",
    access_log_own_hint: "Registro dos seus próprios logins no sistema.",
    access_log_empty: "Ainda não há acessos registrados.",
    access_log_col_user: "Usuário", access_log_col_date: "Data e hora", access_log_col_device: "Dispositivo", access_log_col_version: "Versão",
    system_version_title: "Versão do sistema", system_version_label: "Versão",
    current_level_badge: "📍 Você está aqui", continue_btn: "Continuar estudando →", next_up_label: "Você está em:",
    home_title: "🎓 Painel do Aluno", home_no_progress: "Você ainda não começou nenhum nível. Vamos começar!",
    home_start_btn: "Começar agora →", home_your_levels_link: "Ver todos os meus níveis →",
    notas_title: "📊 Minhas Notas", notas_aproveitamento_label: "Aproveitamento geral",
    notas_aproveitamento_sub: "Média de {n} avaliações", notas_no_data: "Você ainda não tem avaliações registradas.",
    notas_schedule_label: "Cumprimento do cronograma",
    notas_level_col: "Nível", notas_lessons_col: "Lições", notas_avg_col: "Média",
    notas_exam_col: "Prova", notas_status_col: "Status",
    notas_status_passed: "✅ Aprovado", notas_status_failed: "❌ Não aprovado", notas_status_pending: "⏳ Prova pendente",
    notas_status_progress: "▶️ Em andamento", notas_status_locked: "🔒 Bloqueado",
    notebook_title: "📓 Meu Caderno", notebook_intro: "Suas anotações pessoais, salvas na nuvem — só você pode vê-las.",
    notebook_new_btn: "+ Nova nota", notebook_title_ph: "Título da nota", notebook_body_ph: "Escreva suas anotações aqui...",
    notebook_save: "Salvar nota", notebook_delete: "Excluir", notebook_empty: "Você ainda não tem notas. Crie a primeira!",
    notebook_updated: "Atualizado em {date}", notebook_cancel: "Cancelar", notebook_saved_msg: "Nota salva!",
    analytics_title: "📈 Minha Atividade", analytics_admin_title: "📈 Analíticas Gerais",
    analytics_total_attempts: "Exercícios respondidos", analytics_accuracy: "Precisão geral",
    analytics_time_spent: "Tempo estimado de estudo", analytics_by_type_title: "Acertos por tipo de exercício",
    analytics_errors_title: "Últimos erros", analytics_no_data: "Ainda não há dados suficientes. Complete alguns exercícios!",
    analytics_open_title: "✍️ Minhas respostas escritas", analytics_open_empty: "Você ainda não respondeu nenhuma pergunta dissertativa.",
    analytics_students_count: "Alunos ativos", analytics_avg_score: "Nota média geral",
    cert_config_title: "🎓 Layouts de Certificados", cert_config_intro: "Cada nível principal tem um design de certificado próprio, gerado automaticamente em PDF ao passar na prova. Aqui você pode ver uma prévia de cada design.",
    cert_preview_btn: "Ver exemplo em PDF",
    admin_nav_approvals: "Aprovações",
    pending_title: "⏳ Conta pendente de aprovação", pending_msg: "Obrigado por se cadastrar! Um administrador precisa aprovar sua conta antes que você possa acessar o curso. Vamos avisar assim que estiver liberada.",
    pending_rejected_title: "🚫 Cadastro não aprovado", pending_rejected_msg: "Sua solicitação de cadastro não foi aprovada. Entre em contato com o administrador do curso se achar que isso é um engano.",
    pending_logout_btn: "Sair",
    admin_approvals_title: "✅ Aprovações de Cadastro ({n})", admin_no_pending: "Não há cadastros pendentes de aprovação.",
    admin_approve_btn: "✅ Aprovar", admin_reject_btn: "🚫 Rejeitar", admin_pending_since: "Cadastrado em {date}",
    cert_preview_open_btn: "👁️ Prévia do certificado",
    cert_preview_locked_note: "Esta é apenas uma prévia do design. Você poderá gerar o PDF real assim que passar na prova deste nível.",
  },
  en: {
    auth_login_sub: "Sign in to keep learning", auth_register_sub: "Create your free account", auth_forgot_sub: "Reset password",
    auth_name: "Name", auth_name_ph: "Your name", auth_email: "Email", auth_password: "Password", auth_password_ph: "••••••••",
    pass_show: "Show password", pass_hide: "Hide password",
    auth_btn_login: "Sign in", auth_btn_register: "Create account", auth_btn_forgot: "Send reset email",
    auth_no_account: "Don't have an account?", auth_register_link: "Sign up", auth_forgot_link: "Forgot your password?",
    auth_have_account: "Already have an account?", auth_login_link: "Sign in here", auth_back_login: "Back to login",
    auth_hero_title: "Learn Spanish from Spain!", auth_hero_sub: "An interactive course with real pronunciation, speaking exercises, and progress tracking.",
    topbar_admin: "Admin", topbar_logout: "Log out",
    dash_greeting: "Hi, {name} 👋 What shall we study today?", dash_bonus: "🎁 Bonus modules",
    back_modules: "← Back to modules", back_to: "← Back to {name}", start_exercises: "Start exercises ({n}) →",
    exam_pending: "Exam pending", exam_passed: "✅ Exam passed ({score}%)",
    exam_min_pass: "Minimum passing score: {score}%", exam_approved_with: " · ✅ Passed with {score}%",
    level_locked_alert: "You first need to pass the previous level's exam to unlock this module.",
    level_preview_note: "you can preview the content, but lessons open once the level is unlocked.",
    exit: "✕ Exit", exit_confirm: "Are you sure you want to exit? You'll lose progress on this exercise/exam.",
    ex_next: "Next →", ex_check: "Check", ex_skip: "I can't record now",
    ex_resume_title: "📍 You have an exercise in progress", ex_resume_progress: "you're on question {cur} of {total}.",
    ex_continue_btn: "Continue where I left off →", ex_restart_btn: "Start over", ex_discover_lyrics_btn: "🎤 Discover the lyrics",
    result_pass_title: "Passed!", result_fail_title: "Not yet...", result_lesson_title: "Exercises completed!",
    result_min_score: "Minimum required score: {score}%", result_unlocked: "🔓 You've unlocked the next level!",
    result_retry_msg: "Review the lesson and retry the exam when you're ready.",
    btn_back_to: "Back to {name}", btn_retry: "Try again",
    admin_title: "⚙️ Admin Panel", admin_scores_title: "Minimum passing score per level (%)",
    admin_passrate_title: "Pass rate by level", admin_passrate_none: "No students have attempted this level's exam yet.",
    admin_passrate_row: "{passed} of {total} students passed ({attempted} took the exam)",
    admin_certs_issued: "certificates issued",
    admin_save: "Save settings", admin_saved: "Settings saved!",
    admin_gabarito_title: "Answer key release", admin_gabarito_label: "When is the correct answer shown?",
    admin_gabarito_immediate: "Immediately — as each question is answered", admin_gabarito_after: "Only at the end — the student reviews everything together when finished",
    admin_gabarito_hint: "Choose whether the student sees the correct answer right after answering each question, or whether you'd rather hide it during the exercise/exam. Either way, the student can always check their answers and the full answer key afterward on the Review screen.",
    admin_nav_songs: "Songs",
    admin_songs_title: "Songs", admin_songs_intro: "Add songs so the student can discover the lyrics, listen step by step, and fill in the blanks. Paste the lyrics as you have them — the system builds the exercises automatically.",
    admin_songs_new_btn: "Add song", admin_songs_field_title: "Song title", admin_songs_field_title_ph: "E.g.: ¿Cómo Pagarte",
    admin_songs_field_artist: "Artist", admin_songs_field_artist_ph: "E.g.: Carlos Rivera", admin_songs_field_youtube: "Official YouTube video link",
    admin_songs_field_lyrics: "Full lyrics", admin_songs_field_lyrics_hint: "One line per row. To mark a word as a blank, wrap it in double curly braces: {{word}}. Or paste the lyrics unmarked and use the button below to mark blanks automatically. Optional (recommended): add the exact minute it's sung at the start of the line, like this: [01:23] Line lyrics — the student will get the video already opened right at that fragment instead of the whole song.",
    admin_songs_field_lyrics_ph: "Paste the full lyrics here, line by line...",
    admin_songs_auto_blank_btn: "Auto-mark blank words", admin_songs_cancel: "Cancel", admin_songs_save: "Save song",
    admin_songs_auto_time_btn: "Auto-mark timestamps",
    admin_songs_auto_time_hint: "Calculates an approximate time ([mm:ss]) for each line, spreading the video's real duration across them. It's not exact, but it's enough for the student to hear the right fragment instead of the whole song. If a line ends up off, you can fix the number by hand.",
    admin_songs_need_youtube_first: "Paste a valid YouTube link above first.",
    admin_songs_calculating: "Calculating video duration...",
    admin_songs_time_error: "Couldn't calculate the video's duration. Try again or mark the times by hand with [mm:ss].",
    admin_songs_field_words: "Number of words to practice",
    admin_songs_field_words_hint: "The system only uses this to size the video snippet (the song's real duration ÷ this number). Fewer words = longer snippets; more words = shorter snippets. Recommended: between 10 and 20, and close to the real number of {{...}} blanks marked below — a number much higher than the real blanks makes snippets needlessly short.",
    admin_songs_list_title: "Songs added ({n})", admin_songs_empty: "You haven't added any songs yet.",
    admin_songs_lines_unit: "lines", admin_songs_blanks_unit: "blanks", admin_songs_bad_youtube: "Couldn't identify the YouTube video — check the link.",
    admin_songs_saved: "Song saved!", admin_songs_confirm_delete: "Delete this song? The student won't be able to practice it anymore.",
    admin_songs_live_count: "{lines} lines · {blanks} blanks marked",
    admin_students_title: "Students and progress ({n})", admin_no_students: "No students have taken exams yet.",
    back_panel: "← Back to panel", back_generic: "← Back",
    account_title: "👤 My Account", account_tab_security: "Security", account_tab_appearance: "Appearance", account_tab_profile: "Profile", account_tab_access: "My Access Log", account_tab_voice: "Voice",
    // --- Terms acceptance + payment plans (Mercado Pago) ---
    lgpd_label: "Personal data protection (LGPD)",
    lgpd_body: "In accordance with Brazil's General Data Protection Law (LGPD - Law 13,709/2018) and applicable data protection rules, the personal data you provide (name, e-mail, phone, address, photo and course usage data) will be collected and processed by Quallisi — Consultoría y Auditoría, the party responsible for this platform, solely to manage your enrollment, academic progress, certificate issuance and course-related contact. Your data will not be sold or shared with third parties outside this purpose, and will be kept while your account is active. You can request access, correction or deletion of your personal data at any time by contacting the course administration.",
    lgpd_checkbox_label: "I have read and accept the processing of my personal data as described above (LGPD).",
    lgpd_required_error: "You need to accept the processing of personal data to create your account.",
    terms_title: "Before you start", terms_intro: "To unlock your course access, first accept the terms of use and payment.",
    terms_body: "By continuing, you confirm you are of legal age (or have guardian authorization), that lessons and materials are for personal, non-transferable use, and that full course access depends on keeping the payment plan you choose next up to date. Prices and terms may be updated by the administration, always with prior notice.",
    terms_checkbox_label: "I have read and accept the terms of use and payment.",
    terms_accept_btn: "Accept and continue", terms_required_error: "You need to check the box to continue.", terms_logout_btn: "Log out",
    plan_title: "Choose your plan", plan_intro: "Choose how you'd prefer to pay for your ¡Español Ya! access. You can change plans later by contacting the administration.",
    plan_monthly_name: "Monthly", plan_monthly_desc: "Recurring charge every month. Cancel anytime.",
    plan_annual_name: "Annual", plan_annual_desc: "One-time payment for the full 12 months — doesn't auto-renew.",
    plan_per_month: "/ month", plan_per_year: "/ year",
    plan_choose_btn: "Choose this plan", plan_processing: "Connecting to Mercado Pago...",
    plan_generic_error: "Couldn't start the payment. Payments may not be enabled yet — contact the administration.",
    plan_logout_btn: "Log out", plan_checkout_return_title: "Thank you!", plan_checkout_return_msg: "We're confirming your payment with Mercado Pago. This can take a few minutes — meanwhile, you can already enter the course.",
    plan_checkout_return_btn: "Go to dashboard",
    pay_status_active: "🟢 Up to date", pay_status_pending: "🟡 Payment awaiting confirmation", pay_status_overdue: "🔴 Overdue", pay_status_none: "⚪ No plan chosen", pay_status_suspended: "⛔ Access suspended",
    pending_suspended_title: "Access suspended", pending_suspended_msg: "Your access was suspended by the administration (usually due to a pending payment). Contact the administration to sort it out.",
    admin_billing_title: "💳 Plans and prices", admin_billing_intro: "Amounts charged via Mercado Pago. Changes here don't affect students who already have an active plan, only new plan choices.",
    admin_billing_monthly_label: "Monthly plan price (R$)", admin_billing_annual_label: "Annual plan price (R$)",
    admin_pay_suspend_btn: "Suspend access", admin_pay_reactivate_btn: "Reactivate access", admin_pay_suspend_confirm: "Are you sure you want to suspend this student's access? They won't be able to enter the course until you reactivate it.",
    xp_tooltip: "XP = experience points, earned by completing lessons and exams.",
    xp_explain_title: "⭐ What is XP?",
    xp_explain_body: "XP (experience points) is a marker of your activity within the course — it's not a grade. You earn XP every time you complete a lesson or an exam (the better your exam score, the more XP you earn). It's there so you can see, at a glance, how much you've practiced — but your actual pass/fail in each level depends on your exam score, not your accumulated XP.",
    profile_name_label: "Full name", profile_name_ph: "Your name", profile_save: "Save name", profile_saved: "Name updated!",
    profile_extra_section_title: "Contact and profile details", profile_extra_section_hint: "This information complements your account (which already has your login e-mail) and helps the administration reach you if needed.",
    profile_photo_upload_btn: "📷 Upload photo", profile_photo_hint: "Shown on your Dashboard and in the menu. Formats: JPG, PNG.",
    profile_photo_invalid: "Please choose a valid image file.", profile_photo_error: "Couldn't process that image. Try another one.",
    profile_phone_label: "Phone", profile_phone_ph: "E.g.: (11) 91234-5678",
    profile_secondary_email_label: "Additional e-mail", profile_secondary_email_ph: "A contact e-mail (can differ from your login e-mail)",
    profile_address_street_label: "Address (street and number)", profile_address_street_ph: "E.g.: 123 Main St.",
    profile_address_city_label: "City", profile_address_state_label: "State / Province",
    profile_address_country_label: "Country", profile_address_zip_label: "ZIP / Postal code",
    profile_observations_label: "Notes", profile_observations_ph: "Anything else you'd like to tell us (optional)",
    profile_complete_title: "Complete your registration", profile_complete_intro: "Before continuing, fill in a few extra details. We already use your login e-mail for sign-in — this is additional information.",
    profile_complete_save_btn: "Save and continue", profile_complete_required_error: "Fill in phone, additional e-mail, and address (street, city and country) to continue.",
    account_current_pass: "Current password", account_new_pass: "New password", account_confirm_pass: "Confirm new password",
    account_change_pass_btn: "Change password", account_pass_mismatch: "New passwords don't match.",
    account_pass_changed: "Password updated successfully!", account_theme_label: "Theme color", account_font_label: "Font",
    account_lang_label: "Interface language", account_save_appearance: "Save appearance", account_appearance_saved: "Appearance saved!", account_save_voice: "Save voice",
    account_voice_label: "Lesson voice (text-to-speech)", account_voice_preview: "Listen to a sample with this voice",
    account_voice_none: "Your browser doesn't offer Spanish voices yet. Try reloading the page or using Google Chrome.",
    account_voice_hint: "Pick the voice you like best — it will be used on every 🔊 button in the course. If you switch device or browser, you may need to choose it again.",
    account_voice_sample_text: "Hi, this is how my voice will sound in your Spanish lessons.",
    dialogue_play_all: "Listen to full dialogue", dialogue_stop_all: "Stop",
    translate_toggle_title: "Show/hide Portuguese translation", translation_missing: "Translation not available yet for this sentence.",
    account_voice2_label: "2nd voice (for 2-character dialogues)",
    account_voice2_hint: "Optional: if you pick a 2nd voice, the first character in each dialogue speaks with Voice 1 (above) and the second with this one. If you don't pick one, everyone speaks with Voice 1.",
    account_voice2_none_opt: "🚫 Don't use a 2nd voice (single narrator)",
    nav_schedule: "📅 Schedule", panel_title: "🎓 Student Panel",
    sidebar_dashboard: "Dashboard", sidebar_settings: "Settings", sidebar_toggle: "Show/hide menu",
    sidebar_section_learn: "Learn", sidebar_section_admin: "Admin",
    panel_overall_title: "Overall course progress", panel_overall_sub: "{done} of {total} stages completed",
    panel_schedule_ontrack: "🟢 On track", panel_schedule_ahead: "🔵 Ahead of schedule", panel_schedule_behind: "🟠 Behind schedule",
    panel_schedule_ontrack_d: "You're exactly on plan. Keep it up!",
    panel_schedule_ahead_d: "You're ahead of your schedule. Excellent pace!",
    panel_schedule_behind_d: "You're a bit behind the plan. No big deal, you can catch up!",
    panel_view_schedule: "View detailed schedule →",
    cert_btn: "🎓 Certificate", cert_final_btn: "🏆 Final course diploma", cert_final_title: "Congratulations! You've completed all 3 main levels.",
    cert_final_card_title: "🏆 Full Completion Diploma", cert_final_card_sub: "Available once you pass Basic, Intermediate and Advanced.",
    schedule_title: "📅 My Study Schedule", schedule_intro: "By default, the course is designed for 12 months. Adjust the duration to your pace: 3, 6, 8, 12 months, or however long you prefer.",
    schedule_duration_label: "Total course duration", schedule_custom_label: "Months (custom)",
    schedule_start_label: "Start date", schedule_save: "Save schedule", schedule_saved: "Schedule updated!",
    schedule_status_title: "Your current situation", schedule_expected: "Expected by today: {pct}%", schedule_actual: "Your actual progress: {pct}%",
    schedule_projected: "🔮 At your current pace, you'd finish the course around {date}.",
    schedule_projected_unknown: "🔮 Complete your first lesson so we can calculate your completion forecast.",
    schedule_plan_title: "Suggested month-by-month study plan", schedule_plan_month: "Month {n}",
    schedule_months_unit: "months", back_dashboard: "← Back to panel",
    schedule_edit_btn: "✏️ Customize content by month", schedule_edit_title: "✏️ Customize Schedule",
    schedule_edit_intro: "Choose which month you want to do each lesson/exam in. They use an automatic distribution by default — change only what you want to adjust.",
    schedule_edit_col_content: "Content", schedule_edit_col_month: "Assigned month",
    schedule_edit_save: "Save assignment", schedule_edit_reset: "Reset to automatic", schedule_edit_saved: "Custom schedule saved!",

    sidebar_levels: "My Levels", sidebar_syllabus: "Full Syllabus", sidebar_notas: "My Grades", sidebar_notebook: "Notebook",
    syllabus_title: "Full Course Syllabus", syllabus_intro: "Every level and every lesson at a glance, with its main topic — so you can check the study material without opening each level one by one.",
    sidebar_analytics: "My Activity", sidebar_schedule: "Schedule", sidebar_tutorial: "Tutorial",
    sidebar_section_progress: "My Progress",
    admin_nav_overview: "Overview", admin_nav_students: "Students", admin_nav_analytics: "Analytics",
    admin_nav_certs: "Certificates", admin_nav_config: "Settings", admin_nav_access: "Access Log",
    access_log_title: "Access History", access_log_admin_hint: "Log of every login from every user (the last 300).",
    access_log_own_hint: "Log of your own logins to the system.",
    access_log_empty: "No access logged yet.",
    access_log_col_user: "User", access_log_col_date: "Date & time", access_log_col_device: "Device", access_log_col_version: "Version",
    system_version_title: "System version", system_version_label: "Version",
    current_level_badge: "📍 You are here", continue_btn: "Continue studying →", next_up_label: "You're on:",
    home_title: "🎓 Student Panel", home_no_progress: "You haven't started any level yet. Let's get going!",
    home_start_btn: "Start now →", home_your_levels_link: "See all my levels →",
    notas_title: "📊 My Grades", notas_aproveitamento_label: "Overall performance",
    notas_aproveitamento_sub: "Average of {n} evaluations", notas_no_data: "You don't have any recorded evaluations yet.",
    notas_schedule_label: "Schedule compliance",
    notas_level_col: "Level", notas_lessons_col: "Lessons", notas_avg_col: "Average",
    notas_exam_col: "Exam", notas_status_col: "Status",
    notas_status_passed: "✅ Passed", notas_status_failed: "❌ Not passed", notas_status_pending: "⏳ Exam pending",
    notas_status_progress: "▶️ In progress", notas_status_locked: "🔒 Locked",
    notebook_title: "📓 My Notebook", notebook_intro: "Your personal notes, saved in the cloud — only you can see them.",
    notebook_new_btn: "+ New note", notebook_title_ph: "Note title", notebook_body_ph: "Write your notes here...",
    notebook_save: "Save note", notebook_delete: "Delete", notebook_empty: "You don't have any notes yet. Create the first one!",
    notebook_updated: "Updated on {date}", notebook_cancel: "Cancel", notebook_saved_msg: "Note saved!",
    analytics_title: "📈 My Activity", analytics_admin_title: "📈 Overall Analytics",
    analytics_total_attempts: "Exercises answered", analytics_accuracy: "Overall accuracy",
    analytics_time_spent: "Estimated study time", analytics_by_type_title: "Correct answers by exercise type",
    analytics_errors_title: "Recent mistakes", analytics_no_data: "Not enough data yet. Complete some exercises!",
    analytics_open_title: "✍️ My written answers", analytics_open_empty: "You haven't answered any essay-type question yet.",
    analytics_students_count: "Active students", analytics_avg_score: "Overall average score",
    cert_config_title: "🎓 Certificate Layouts", cert_config_intro: "Each main level has its own certificate design, generated automatically as a PDF when the exam is passed. Preview each design here.",
    cert_preview_btn: "View sample PDF",
    admin_nav_approvals: "Approvals",
    pending_title: "⏳ Account pending approval", pending_msg: "Thanks for signing up! An administrator needs to approve your account before you can access the course. We'll let you know as soon as it's ready.",
    pending_rejected_title: "🚫 Registration not approved", pending_rejected_msg: "Your registration request was not approved. Please contact the course administrator if you believe this is a mistake.",
    pending_logout_btn: "Log out",
    admin_approvals_title: "✅ Registration Approvals ({n})", admin_no_pending: "No registrations pending approval.",
    admin_approve_btn: "✅ Approve", admin_reject_btn: "🚫 Reject", admin_pending_since: "Registered on {date}",
    cert_preview_open_btn: "👁️ Certificate preview",
    cert_preview_locked_note: "This is just a design preview. You'll be able to generate the real PDF as soon as you pass this level's exam.",
  },
};

function applyTheme(themeId) {
  const th = THEMES[themeId] || THEMES.espana;
  const s = document.documentElement.style;
  s.setProperty("--rojo", th.rojo);
  s.setProperty("--rojo-dark", th.rojoDark);
  s.setProperty("--amarillo", th.amarillo);
  s.setProperty("--amarillo-dark", th.amarilloDark);
}

function applyFont(fontId) {
  const f = FONTS[fontId] || FONTS.poppins;
  document.documentElement.style.setProperty("--font-main", f.stack);
}

function t(key, vars) {
  const lang = (state.prefs && state.prefs.lang) || "es";
  let str = (I18N[lang] && I18N[lang][key]) || I18N.es[key] || key;
  if (vars) Object.keys(vars).forEach(k => { str = str.split(`{${k}}`).join(vars[k]); });
  return str;
}

/* ---------------------------------------------------------------------- */
/* 2. ESTADO GLOBAL                                                        */
/* ---------------------------------------------------------------------- */
const state = {
  screen: "loading",       // loading | auth | dashboard | levels | lessonList | lesson | exercises | exam | result
                           // | notas | notebook | analytics | admin | adminStudents | adminAnalytics | adminCerts | adminConfig | account | review
  authMode: "login",       // login | register | forgot
  user: null,              // { uid, email, name, role }
  progress: null,          // documento de progresso do Firestore
  config: { passScores: { ...DEFAULT_PASS_SCORES }, gabaritoMode: DEFAULT_GABARITO_MODE },
  exerciseDetails: [],     // detalle pregunta-a-pregunta del ejercicio/prueba en curso (para la Revisión)
  reviewData: null,        // { title, items } — datos que muestra la pantalla de Revisión
  prefs: { theme: "espana", font: "poppins", lang: localStorage.getItem("ey_ui_lang") || "es" },
  currentLevelId: null,
  currentLessonId: null,
  exerciseQueue: [],       // fila de exercícios da lição/prova atual
  exerciseIndex: 0,
  exerciseAnswers: [],     // respostas dadas (para calcular nota)
  isExam: false,
  isRetry: false,          // true durante una sesión de "repasar lo que fallé" (no afecta nota/XP oficial)
  lastResult: null,        // {score, passed, levelId}
  ttsVoices: [],
  speaking: false,
  listening: false,
  adminStudents: [],
  adminPending: [],       // alumnos con registro pendiente de aprobación
  adminAttempts: [],       // caché de intentos de ejercicios de todos los alumnos (analíticas admin)
  myAttempts: [],          // caché de intentos de ejercicios del alumno actual (analíticas propias)
  errorMsg: "",
  accountMsg: "",
  sidebarCollapsed: localStorage.getItem("ey_sidebar_collapsed") === "1",
  notebookNotes: [],
  notebookLoaded: false,
  notebookEditingId: null, // null = no hay editor abierto; "new" = nota nueva; id = editando nota existente
  notebookMsg: "",
  songs: [],               // caché de canciones (colección "songs" de Firestore) — ver loadSongs()
  songFormEditingId: null, // null = formulario cerrado; "new" = canción nueva; id = editando existente
  songFormMsg: "",
  accountTab: "profile",   // profile | security | appearance | access
  myAccessLog: [],         // historial de accesos del propio alumno (colección "access_log")
  adminAccessLog: [],      // historial de accesos de TODOS los alumnos (solo admin)
};

applyTheme(state.prefs.theme);
applyFont(state.prefs.font);

// Botón "olhinho" (👁️) para mostrar/ocultar la contraseña mientras se escribe.
// Delegado en document (una sola vez, al cargar la app) para funcionar en
// cualquier campo .pass-wrap, en cualquier pantalla, sin necesidad de volver
// a conectar el evento después de cada render().
document.addEventListener("click", (ev) => {
  const btn = ev.target.closest(".pass-eye");
  if (!btn) return;
  const input = document.getElementById(btn.dataset.target);
  if (!input) return;
  const nowVisible = input.type === "password";
  input.type = nowVisible ? "text" : "password";
  btn.textContent = nowVisible ? "🙈" : "👁️";
  const label = nowVisible ? t("pass_hide") : t("pass_show");
  btn.setAttribute("aria-label", label);
  btn.setAttribute("title", label);
});

const root = document.getElementById("app");

/* ---------------------------------------------------------------------- */
/* 3. UTILITÁRIOS                                                          */
/* ---------------------------------------------------------------------- */
function normalize(str) {
  return (str || "")
    .toString()
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "") // remove acentos
    .replace(/[¡!¿?.,;:"']/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function similarity(a, b) {
  a = normalize(a); b = normalize(b);
  if (!a || !b) return 0;
  if (a === b) return 1;
  // similaridade simples por distância de Levenshtein normalizada
  const m = a.length, n = b.length;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  const dist = dp[m][n];
  return 1 - dist / Math.max(m, n);
}

function escapeHtml(s) {
  return (s || "").replace(/[&<>"']/g, c => ({ "&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;" }[c]));
}

function levelProgress(levelId) {
  const p = state.progress && state.progress.levels && state.progress.levels[levelId];
  return p || { lessonsCompleted: {}, examScore: null, examPassed: false, unlocked: MAIN_SEQUENCE[0] === levelId };
}

function isLevelUnlocked(levelId) {
  if (BONUS_LEVELS.includes(levelId)) return true;
  const idx = MAIN_SEQUENCE.indexOf(levelId);
  if (idx <= 0) return true;
  const prevId = MAIN_SEQUENCE[idx - 1];
  return !!levelProgress(prevId).examPassed;
}

function levelCompletionPct(levelId) {
  const lvl = getLevel(levelId);
  if (!lvl || !lvl.lessons.length) return 0;
  const p = levelProgress(levelId);
  const done = lvl.lessons.filter(l => p.lessonsCompleted && p.lessonsCompleted[l.id] && p.lessonsCompleted[l.id].done).length;
  return Math.round((done / lvl.lessons.length) * 100);
}

function passScoreFor(levelId) {
  return (state.config.passScores && state.config.passScores[levelId]) || DEFAULT_PASS_SCORES[levelId] || 70;
}

// Nivel "actual" del alumno: el primer nivel principal desbloqueado que todavía no fue aprobado,
// o el último nivel bonus si ya completó los 3 principales. Se usa para el destaque "Estás aquí".
function currentActiveLevelId() {
  for (const id of MAIN_SEQUENCE) {
    if (!levelProgress(id).examPassed) return id;
  }
  return MAIN_SEQUENCE[MAIN_SEQUENCE.length - 1];
}

// Próxima lección sugerida dentro de un nivel: la primera no completada.
function nextLessonInLevel(levelId) {
  const lvl = getLevel(levelId);
  if (!lvl) return null;
  const p = levelProgress(levelId);
  return lvl.lessons.find(l => !(p.lessonsCompleted && p.lessonsCompleted[l.id] && p.lessonsCompleted[l.id].done)) || null;
}

// "Aprovechamiento" general: promedio de todas las notas (lecciones + pruebas) ya registradas,
// sea cual sea el nivel — complementa el % de cumplimiento del cronograma con una medida de calidad.
function computeAproveitamento(levelsScope) {
  const scope = levelsScope || COURSE_LEVELS.map(l => l.id);
  const scores = [];
  scope.forEach(id => {
    const p = levelProgress(id);
    if (p.lessonsCompleted) {
      Object.values(p.lessonsCompleted).forEach(l => { if (l && typeof l.score === "number") scores.push(l.score); });
    }
    if (typeof p.examScore === "number") scores.push(p.examScore);
  });
  if (!scores.length) return null;
  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  return { avg, count: scores.length };
}

function levelGradeStatus(levelId) {
  const lvl = getLevel(levelId);
  const p = levelProgress(levelId);
  const unlocked = isLevelUnlocked(levelId);
  if (!unlocked) return "locked";
  if (lvl.exam) {
    if (p.examPassed) return "passed";
    if (typeof p.examScore === "number") return "failed";
  }
  const pct = levelCompletionPct(levelId);
  if (pct >= 100 && !lvl.exam) return "passed";
  if (pct > 0) return "progress";
  return lvl.exam ? "pending" : "pending";
}

/* ---------------------------------------------------------------------- */
/* 3b. CRONOGRAMA / PLAN DE ESTUDIO                                        */
/* ---------------------------------------------------------------------- */
// Lista "achatada" de todas las unidades de estudio de la secuencia principal
// (cada lección = 1 unidad, cada prueba = 1 unidad), en orden.
function buildFlattenedUnits() {
  const units = [];
  MAIN_SEQUENCE.forEach(levelId => {
    const lvl = getLevel(levelId);
    if (!lvl) return;
    lvl.lessons.forEach(lesson => units.push({ id: `${levelId}__${lesson.id}`, levelId, kind: "lesson", label: lesson.title }));
    if (lvl.exam) units.push({ id: `${levelId}__exam`, levelId, kind: "exam", label: lvl.exam.title });
  });
  return units;
}

// Devuelve el mapa de asignaciones personalizadas (unitId -> mes), guardado por el alumno
// en la tela "Personalizar cronograma". Vacío = usar la distribución automática.
function getScheduleAssignments() {
  return (state.progress && state.progress.scheduleAssignments) || {};
}

function totalUnitsCount() { return buildFlattenedUnits().length; }

function actualUnitsCompleted() {
  let done = 0;
  MAIN_SEQUENCE.forEach(levelId => {
    const p = levelProgress(levelId);
    const lvl = getLevel(levelId);
    if (!lvl) return;
    lvl.lessons.forEach(lesson => {
      if (p.lessonsCompleted && p.lessonsCompleted[lesson.id] && p.lessonsCompleted[lesson.id].done) done++;
    });
    if (lvl.exam && p.examPassed) done++;
  });
  return done;
}

function getSchedule() {
  return (state.progress && state.progress.schedule) || { durationMonths: DEFAULT_SCHEDULE_MONTHS, startDate: new Date().toISOString() };
}

// Calcula % esperado hasta hoy, % real, estado (adelantado/atrasado/en plazo) y fecha prevista de finalización.
// Extraída a partir de (schedule, actual, total) para poder reutilizarse tanto para el propio
// alumno (state.progress) como para CUALQUIER alumno visto desde el panel de Admin (Alumnos/
// Analíticas), donde solo se dispone del resumen público (progress_summary), no del progreso completo.
function computeScheduleStatusFrom(schedule, actual, total) {
  const start = new Date(schedule.startDate);
  const now = new Date();
  const monthsElapsed = Math.max(0, (now - start) / MS_PER_MONTH);
  const durationMonths = schedule.durationMonths || DEFAULT_SCHEDULE_MONTHS;
  const fractionElapsed = Math.min(1, monthsElapsed / durationMonths);
  const expectedUnits = fractionElapsed * total;
  const expectedPct = total ? Math.round((expectedUnits / total) * 100) : 0;
  const actualPct = total ? Math.round((actual / total) * 100) : 0;
  const diff = actual - expectedUnits;
  const thresholdUnits = Math.max(1, total * 0.04); // ~4% de margen antes de considerar adelantado/atrasado
  let status = "ontrack";
  if (diff > thresholdUnits) status = "ahead";
  else if (diff < -thresholdUnits) status = "behind";

  // Previsión de finalización según el ritmo real del alumno.
  let projectedDate = null;
  if (actual > 0 && monthsElapsed > 0.1 && actual < total) {
    const ratePerMonth = actual / monthsElapsed;
    const remaining = total - actual;
    const monthsToFinish = remaining / ratePerMonth;
    projectedDate = new Date(now.getTime() + monthsToFinish * MS_PER_MONTH);
  } else if (actual >= total && total > 0) {
    projectedDate = now;
  }

  return { total, actual, expectedPct, actualPct, status, projectedDate, durationMonths, startDate: start };
}

function computeScheduleStatus() {
  return computeScheduleStatusFrom(getSchedule(), actualUnitsCompleted(), totalUnitsCount());
}

// Misma cuenta, pero para un alumno visto desde el Admin (a partir de su doc en progress_summary,
// que ahora también guarda `schedule` y `unitsCompleted` — ver updateProgressSummary()).
function computeStudentScheduleStatus(summary) {
  const schedule = summary.schedule || { durationMonths: DEFAULT_SCHEDULE_MONTHS, startDate: new Date().toISOString() };
  const actual = typeof summary.unitsCompleted === "number" ? summary.unitsCompleted : 0;
  return computeScheduleStatusFrom(schedule, actual, totalUnitsCount());
}

function formatDate(d, lang) {
  try {
    return d.toLocaleDateString(lang === "pt" ? "pt-BR" : lang === "en" ? "en-US" : "es-ES", { year: "numeric", month: "long", day: "numeric" });
  } catch (e) { return d.toDateString(); }
}

// Calcula, para cada unidad, el mes "automático" (distribución proporcional) — se usa como
// valor por defecto en el editor y para las unidades que el alumno no reasignó a mano.
function autoMonthForUnits(units, durationMonths) {
  const total = units.length;
  const map = {};
  units.forEach((u, i) => {
    map[u.id] = Math.min(durationMonths, Math.max(1, Math.ceil(((i + 1) / total) * durationMonths)));
  });
  return map;
}

// Distribuye las unidades de estudio a lo largo de N meses y arma un resumen textual por mes.
// Si el alumno personalizó el cronograma (getScheduleAssignments), respeta esas asignaciones;
// las unidades sin asignación propia caen en su mes automático.
function buildStudyPlan(durationMonths) {
  const units = buildFlattenedUnits();
  const assignments = getScheduleAssignments();
  const autoMap = autoMonthForUnits(units, durationMonths);
  const months = [];
  for (let m = 1; m <= durationMonths; m++) {
    const slice = units.filter(u => (assignments[u.id] || autoMap[u.id]) === m);
    if (!slice.length) { months.push({ n: m, label: "—" }); continue; }
    // Agrupa el slice por nivel, mostrando el rango de lecciones/pruebas de cada nivel presente en el mes.
    const byLevel = {};
    slice.forEach(u => {
      if (!byLevel[u.levelId]) byLevel[u.levelId] = [];
      byLevel[u.levelId].push(u);
    });
    const parts = Object.keys(byLevel).map(levelId => {
      const lvl = getLevel(levelId);
      const items = byLevel[levelId];
      const examIncluded = items.some(i => i.kind === "exam");
      const lessonCount = items.filter(i => i.kind === "lesson").length;
      let txt = `${lvl.icon} ${lvl.name}`;
      if (lessonCount) txt += ` (${lessonCount} ${lessonCount === 1 ? "lección" : "lecciones"})`;
      if (examIncluded) txt += ` + prueba`;
      return txt;
    });
    months.push({ n: m, label: parts.join(" · ") });
  }
  return months;
}

function render() {
  switch (state.screen) {
    case "loading": return renderLoading();
    case "auth": return renderAuth();
    case "pendingApproval": return renderPendingApproval();
    case "completeProfile": return renderCompleteProfile();
    case "acceptTerms": return renderAcceptTerms();
    case "choosePlan": return renderChoosePlan();
    case "checkoutReturn": return renderCheckoutReturn();
    case "dashboard": return renderDashboard();
    case "levels": return renderLevels();
    case "syllabus": return renderSyllabus();
    case "lessonList": return renderLessonList();
    case "lesson": return renderLessonView();
    case "exercises": return renderExercise();
    case "exam": return renderExercise();
    case "result": return renderResult();
    case "review": return renderReview();
    case "notas": return renderNotas();
    case "notebook": return renderNotebook();
    case "analytics": return renderAnalytics();
    case "admin": return renderAdminOverview();
    case "adminApprovals": return renderAdminApprovals();
    case "adminStudents": return renderAdminStudents();
    case "adminAnalytics": return renderAdminAnalytics();
    case "adminCerts": return renderAdminCerts();
    case "adminSongs": return renderAdminSongs();
    case "adminAccessLog": return renderAdminAccessLog();
    case "adminConfig": return renderAdminConfig();
    case "account": return renderAccount();
    case "schedule": return renderSchedule();
    case "scheduleEdit": return renderScheduleEdit();
    case "tutorial": return renderTutorial();
    default: return renderLoading();
  }
}

/* ---------------------------------------------------------------------- */
/* 4. TELA: LOADING                                                        */
/* ---------------------------------------------------------------------- */
function renderLoading() {
  root.innerHTML = `
    <div class="loading-screen">
      <div class="spinner"></div>
      <div style="font-weight:700;color:var(--rojo)">¡Español Ya!</div>
    </div>`;
}

/* ---------------------------------------------------------------------- */
/* 5. TELA: AUTENTICAÇÃO                                                   */
/* ---------------------------------------------------------------------- */
function renderAuth() {
  const mode = state.authMode;
  root.innerHTML = `
    <div class="auth-wrap">
      <div class="auth-lang-switch">
        ${Object.keys(UI_LANGS).map(l => `<button class="lang-chip ${state.prefs.lang === l ? "active" : ""}" data-lang="${l}">${l.toUpperCase()}</button>`).join("")}
      </div>
      <div class="auth-grid">
        <div class="auth-hero">
          <div class="auth-hero-flag"><div></div><div></div><div></div></div>
          <div class="auth-hero-emblem">🇪🇸</div>
          <h1>${t("auth_hero_title")}</h1>
          <p>${t("auth_hero_sub")}</p>
          <div class="auth-hero-tags"><span>🎧 TTS</span><span>🎤 ${state.prefs.lang === "pt" ? "Fala" : state.prefs.lang === "en" ? "Speech" : "Habla"}</span><span>📊 Progreso</span></div>
        </div>
        <div class="auth-card">
          <div class="flag-strip"><div></div><div></div><div></div></div>
          <h1>¡Español Ya!</h1>
          <div class="auth-sub">${mode === "login" ? t("auth_login_sub") : mode === "register" ? t("auth_register_sub") : t("auth_forgot_sub")}</div>
          ${state.errorMsg ? `<div class="error-msg">${escapeHtml(state.errorMsg)}</div>` : ""}
          <form id="auth-form">
            ${mode === "register" ? `
            <div class="field"><label>${t("auth_name")}</label><input type="text" id="f-name" required placeholder="${t("auth_name_ph")}"></div>` : ""}
            <div class="field"><label>${t("auth_email")}</label><input type="email" id="f-email" required placeholder="tu@email.com"></div>
            ${mode !== "forgot" ? `
            <div class="field"><label>${t("auth_password")}</label><div class="pass-wrap"><input type="password" id="f-pass" required placeholder="${t("auth_password_ph")}" minlength="6"><button type="button" class="pass-eye" data-target="f-pass" aria-label="${t("pass_show")}" title="${t("pass_show")}">👁️</button></div></div>` : ""}
            ${mode === "register" ? `
            <div style="font-size:.78rem;font-weight:700;color:var(--gray-2);margin-bottom:4px">${t("lgpd_label")}</div>
            <div class="lgpd-box" style="max-height:120px;overflow:auto;border:1px solid var(--border);border-radius:10px;padding:10px 12px;font-size:.76rem;color:var(--gray-2);line-height:1.5;margin-bottom:10px">${t("lgpd_body")}</div>
            <label style="display:flex;gap:8px;align-items:flex-start;font-size:.82rem;margin-bottom:12px;cursor:pointer">
              <input type="checkbox" id="f-lgpd" style="margin-top:3px">
              <span>${t("lgpd_checkbox_label")}</span>
            </label>` : ""}
            <button type="submit" class="btn btn-primary btn-block">
              ${mode === "login" ? t("auth_btn_login") : mode === "register" ? t("auth_btn_register") : t("auth_btn_forgot")}
            </button>
          </form>
          <div class="auth-switch">
            ${mode === "login" ? `
              ${t("auth_no_account")} <button id="go-register">${t("auth_register_link")}</button><br><br>
              <button id="go-forgot">${t("auth_forgot_link")}</button>
            ` : mode === "register" ? `
              ${t("auth_have_account")} <button id="go-login">${t("auth_login_link")}</button>
            ` : `
              <button id="go-login">${t("auth_back_login")}</button>
            `}
          </div>
        </div>
      </div>
    </div>`;

  document.getElementById("auth-form").addEventListener("submit", onAuthSubmit);
  const goRegister = document.getElementById("go-register");
  const goForgot = document.getElementById("go-forgot");
  const goLogin = document.getElementById("go-login");
  if (goRegister) goRegister.onclick = () => { state.authMode = "register"; state.errorMsg = ""; render(); };
  if (goForgot) goForgot.onclick = () => { state.authMode = "forgot"; state.errorMsg = ""; render(); };
  if (goLogin) goLogin.onclick = () => { state.authMode = "login"; state.errorMsg = ""; render(); };
  document.querySelectorAll(".lang-chip").forEach(btn => {
    btn.onclick = () => {
      state.prefs.lang = btn.dataset.lang;
      localStorage.setItem("ey_ui_lang", btn.dataset.lang);
      render();
    };
  });
}

async function onAuthSubmit(e) {
  e.preventDefault();
  const mode = state.authMode;
  const email = document.getElementById("f-email").value.trim();
  state.errorMsg = "";
  try {
    if (mode === "login") {
      const pass = document.getElementById("f-pass").value;
      await auth.signInWithEmailAndPassword(email, pass);
    } else if (mode === "register") {
      // Consentimiento LGPD: se exige ANTES de crear la cuenta (no solo antes de guardar
      // el documento en Firestore), para que un registro nunca llegue a "efectivarse" sin
      // el aceite — pedido explícito de Anderson. Si falta, ni siquiera se llama a
      // createUserWithEmailAndPassword.
      const lgpdBox = document.getElementById("f-lgpd");
      if (!lgpdBox || !lgpdBox.checked) {
        state.errorMsg = t("lgpd_required_error");
        render();
        return;
      }
      const name = document.getElementById("f-name").value.trim();
      const pass = document.getElementById("f-pass").value;
      const cred = await auth.createUserWithEmailAndPassword(email, pass);
      const role = ADMIN_EMAILS.includes(email.toLowerCase()) ? "admin" : "aluno";
      // Todo registro de alumno nace "pendiente": solo se vuelve efectivo cuando un
      // administrador lo aprueba en el panel de Aprobaciones (evita que cualquiera
      // se registre y tenga acceso inmediato al curso).
      const status = role === "admin" ? "approved" : "pending";
      await db.collection("users").doc(cred.user.uid).set({
        name, email, role, status, createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        lgpdAcceptedAt: firebase.firestore.FieldValue.serverTimestamp(),
        prefs: { theme: "espana", font: "poppins", lang: state.prefs.lang || "es" }
      });
      await initProgressDoc(cred.user.uid);
    } else if (mode === "forgot") {
      await auth.sendPasswordResetEmail(email);
      state.errorMsg = "";
      alert("¡Listo! Revisa tu correo para restablecer la contraseña.");
      state.authMode = "login";
      render();
    }
  } catch (err) {
    state.errorMsg = translateFirebaseError(err);
    render();
  }
}

function translateFirebaseError(err) {
  const map = {
    "auth/email-already-in-use": "Este e-mail ya está registrado.",
    "auth/invalid-email": "E-mail inválido.",
    "auth/weak-password": "La contraseña debe tener al menos 6 caracteres.",
    "auth/user-not-found": "Usuario no encontrado.",
    "auth/wrong-password": "Contraseña incorrecta.",
    "auth/invalid-credential": "E-mail o contraseña incorrectos.",
    "auth/too-many-requests": "Demasiados intentos. Espera un momento e intenta de nuevo.",
  };
  return map[err.code] || ("Error: " + err.message);
}

// Pantalla mostrada a un alumno cuyo registro todavía no fue aprobado (o fue
// rechazado) por un administrador. No carga nada de progreso/curso.
function renderPendingApproval() {
  const rejected = state.user && state.user.status === "rejected";
  // Suspendido = admin cortó el acceso manualmente (botón en Alumnos), casi siempre por
  // atraso de pago — no confundir con "pending" (registro nuevo esperando primera aprobación).
  const suspended = state.user && state.user.status === "suspended";
  const emblem = suspended ? "⛔" : rejected ? "🚫" : "⏳";
  const title = suspended ? t("pending_suspended_title") : rejected ? t("pending_rejected_title") : t("pending_title");
  const msg = suspended ? t("pending_suspended_msg") : rejected ? t("pending_rejected_msg") : t("pending_msg");
  root.innerHTML = `
    <div class="auth-wrap">
      <div class="auth-grid">
        <div class="auth-hero">
          <div class="auth-hero-flag"><div></div><div></div><div></div></div>
          <div class="auth-hero-emblem">${emblem}</div>
          <h1>${t("auth_hero_title")}</h1>
          <p>${t("auth_hero_sub")}</p>
        </div>
        <div class="auth-card">
          <div class="flag-strip"><div></div><div></div><div></div></div>
          <h1>¡Español Ya!</h1>
          <div class="auth-sub">${title}</div>
          <p style="color:var(--gray-2);line-height:1.6;margin:14px 0 22px">${msg}</p>
          <button class="btn btn-primary btn-block" id="pending-logout">${t("pending_logout_btn")}</button>
        </div>
      </div>
    </div>`;
  document.getElementById("pending-logout").onclick = () => auth.signOut();
}

/* ---------------------------------------------------------------------- */
/* 5a-bis. CADASTRO COMPLEMENTAR DEL ALUMNO (teléfono, e-mail, dirección,  */
/* observaciones y foto) — se pide UNA vez, recién aprobado el registro,   */
/* antes de aceptar términos/elegir plan. También editable después desde  */
/* Mi Cuenta → Perfil (ver renderAccountProfileTab más abajo).             */
/* ---------------------------------------------------------------------- */

// Redimensiona la imagen elegida en el navegador (canvas, sin ninguna librería
// externa) ANTES de convertirla a base64 — así el documento en Firestore (users/{uid})
// se mantiene liviano (unos 20-80 KB típico) y nunca se acerca al límite de 1 MB por
// documento. Decisión: se guarda directo en Firestore (campo photoData, data URL) en vez
// de usar Firebase Storage, para no exigirle a Anderson configurar un bucket/reglas/CORS
// adicionales solo para esto — el proyecto ya tiene una pendencia de infraestructura
// (Cloud Functions de Mercado Pago) y esto evita sumar otra.
function resizeImageFile(file, maxDim, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let { width, height } = img;
        if (width > height && width > maxDim) { height = Math.round(height * maxDim / width); width = maxDim; }
        else if (height >= width && height > maxDim) { width = Math.round(width * maxDim / height); height = maxDim; }
        const canvas = document.createElement("canvas");
        canvas.width = width; canvas.height = height;
        canvas.getContext("2d").drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL("image/jpeg", quality));
      };
      img.onerror = () => reject(new Error("No se pudo leer la imagen."));
      img.src = e.target.result;
    };
    reader.onerror = () => reject(new Error("No se pudo leer el archivo."));
    reader.readAsDataURL(file);
  });
}

function wirePhotoPicker(inputId, previewId) {
  const input = document.getElementById(inputId);
  if (!input) return;
  input.onchange = async () => {
    const file = input.files && input.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) { alert(t("profile_photo_invalid")); input.value = ""; return; }
    try {
      const dataUrl = await resizeImageFile(file, 480, 0.72);
      state.pendingPhotoData = dataUrl;
      const preview = document.getElementById(previewId);
      if (preview) {
        // El placeholder inicial es un <span> (emoji); lo reemplazamos por una <img> real.
        if (preview.tagName === "IMG") preview.src = dataUrl;
        else preview.outerHTML = `<img id="${previewId}" src="${dataUrl}" style="width:100%;height:100%;object-fit:cover">`;
      }
    } catch (e) {
      console.warn(e);
      alert(t("profile_photo_error"));
    }
  };
}

// Genera los campos de teléfono/e-mail adicional/dirección/observaciones/foto, con ids
// prefijados (prefix) para poder usar el mismo bloque tanto en la pantalla de onboarding
// (prefix "cp") como en Mi Cuenta → Perfil (prefix "pf") sin que los ids choquen entre sí.
function profileExtraFieldsHtml(prefix, data) {
  data = data || {};
  const addr = data.address || {};
  const photo = state.pendingPhotoData || data.photoData || null;
  return `
    <div style="display:flex;gap:16px;align-items:center;margin-bottom:16px">
      <div class="profile-photo-preview" style="width:84px;height:84px;border-radius:50%;overflow:hidden;background:var(--gray-bg,#eee);display:flex;align-items:center;justify-content:center;flex-shrink:0">
        ${photo ? `<img id="${prefix}-photo-preview" src="${photo}" style="width:100%;height:100%;object-fit:cover">` : `<span id="${prefix}-photo-preview" style="font-size:1.9rem">🧑</span>`}
      </div>
      <div>
        <label class="btn btn-secondary btn-sm" for="${prefix}-photo-input" style="cursor:pointer;display:inline-block">${t("profile_photo_upload_btn")}</label>
        <input type="file" id="${prefix}-photo-input" accept="image/*" style="display:none">
        <p style="color:var(--gray-2);font-size:.75rem;margin:6px 0 0">${t("profile_photo_hint")}</p>
      </div>
    </div>
    <div class="field"><label>${t("profile_phone_label")}</label><input type="tel" id="${prefix}-phone" required value="${escapeHtml(data.phone || "")}" placeholder="${t("profile_phone_ph")}"></div>
    <div class="field"><label>${t("profile_secondary_email_label")}</label><input type="email" id="${prefix}-secemail" required value="${escapeHtml(data.secondaryEmail || "")}" placeholder="${t("profile_secondary_email_ph")}"></div>
    <div class="field"><label>${t("profile_address_street_label")}</label><input type="text" id="${prefix}-street" required value="${escapeHtml(addr.street || "")}" placeholder="${t("profile_address_street_ph")}"></div>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <div class="field" style="flex:1 1 160px"><label>${t("profile_address_city_label")}</label><input type="text" id="${prefix}-city" required value="${escapeHtml(addr.city || "")}"></div>
      <div class="field" style="flex:1 1 160px"><label>${t("profile_address_state_label")}</label><input type="text" id="${prefix}-state" value="${escapeHtml(addr.state || "")}"></div>
    </div>
    <div style="display:flex;gap:12px;flex-wrap:wrap">
      <div class="field" style="flex:1 1 160px"><label>${t("profile_address_country_label")}</label><input type="text" id="${prefix}-country" required value="${escapeHtml(addr.country || "")}"></div>
      <div class="field" style="flex:1 1 160px"><label>${t("profile_address_zip_label")}</label><input type="text" id="${prefix}-zip" value="${escapeHtml(addr.zip || "")}"></div>
    </div>
    <div class="field"><label>${t("profile_observations_label")}</label><textarea id="${prefix}-obs" rows="3" maxlength="500" placeholder="${t("profile_observations_ph")}">${escapeHtml(data.observations || "")}</textarea></div>
  `;
}

function readProfileExtraFields(prefix) {
  return {
    phone: document.getElementById(`${prefix}-phone`).value.trim(),
    secondaryEmail: document.getElementById(`${prefix}-secemail`).value.trim(),
    address: {
      street: document.getElementById(`${prefix}-street`).value.trim(),
      city: document.getElementById(`${prefix}-city`).value.trim(),
      state: document.getElementById(`${prefix}-state`).value.trim(),
      country: document.getElementById(`${prefix}-country`).value.trim(),
      zip: document.getElementById(`${prefix}-zip`).value.trim()
    },
    observations: document.getElementById(`${prefix}-obs`).value.trim()
  };
}

function renderCompleteProfile() {
  root.innerHTML = `
    <div class="auth-wrap">
      <div class="auth-grid">
        <div class="auth-hero">
          <div class="auth-hero-flag"><div></div><div></div><div></div></div>
          <div class="auth-hero-emblem">📇</div>
          <h1>${t("auth_hero_title")}</h1>
          <p>${t("auth_hero_sub")}</p>
        </div>
        <div class="auth-card">
          <div class="flag-strip"><div></div><div></div><div></div></div>
          <h1>¡Español Ya!</h1>
          <div class="auth-sub">${t("profile_complete_title")}</div>
          <p style="color:var(--gray-2);line-height:1.6;margin:10px 0 18px">${t("profile_complete_intro")}</p>
          <form id="complete-profile-form">
            ${profileExtraFieldsHtml("cp", {})}
            <div id="complete-profile-error" class="error-msg" style="display:none"></div>
            <button type="submit" class="btn btn-primary btn-block" style="margin-top:10px">${t("profile_complete_save_btn")}</button>
          </form>
          <button class="btn btn-secondary btn-block" id="complete-profile-logout-btn" style="margin-top:8px">${t("terms_logout_btn")}</button>
        </div>
      </div>
    </div>`;
  wirePhotoPicker("cp-photo-input", "cp-photo-preview");
  document.getElementById("complete-profile-logout-btn").onclick = () => auth.signOut();
  document.getElementById("complete-profile-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = readProfileExtraFields("cp");
    const errBox = document.getElementById("complete-profile-error");
    if (!data.phone || !data.secondaryEmail || !data.address.street || !data.address.city || !data.address.country) {
      errBox.textContent = t("profile_complete_required_error");
      errBox.style.display = "block";
      return;
    }
    errBox.style.display = "none";
    const submitBtn = e.target.querySelector("button[type=submit]");
    submitBtn.disabled = true;
    try {
      const payload = {
        phone: data.phone, secondaryEmail: data.secondaryEmail, address: data.address, observations: data.observations,
        profileCompletedAt: firebase.firestore.FieldValue.serverTimestamp()
      };
      if (state.pendingPhotoData) payload.photoData = state.pendingPhotoData;
      await db.collection("users").doc(state.user.uid).set(payload, { merge: true });
      Object.assign(state.user, {
        phone: data.phone, secondaryEmail: data.secondaryEmail, address: data.address, observations: data.observations,
        photoData: state.pendingPhotoData || state.user.photoData || null
      });
      // Espejo liviano en progress_summary para que Admin → Alumnos ya muestre la foto/
      // nombre desde el primer momento, aunque el alumno todavía no haya completado
      // ninguna lección (progress_summary normalmente solo se llena recién ahí). El admin
      // no tiene fila en "Alumnos", pero el merge acá no hace ningún daño si igual se ejecuta.
      db.collection("progress_summary").doc(state.user.uid).set({
        name: state.user.name, email: state.user.email, photoData: state.user.photoData || null
      }, { merge: true }).catch(err => console.warn(err));
      state.pendingPhotoData = null;
      // En vez de fijar manualmente el próximo screen (que sería distinto para alumno —
      // "acceptTerms" — y para admin — "dashboard" directo, sin progreso todavía cargado
      // en memoria), recargamos la página: auth.onAuthStateChanged vuelve a correr desde
      // cero, ve profileCompletedAt ya guardado, y decide el siguiente paso correcto para
      // CUALQUIER rol (alumno → términos/plan si faltan; admin → directo al dashboard).
      window.location.reload();
    } catch (err) {
      console.warn(err);
      errBox.textContent = "Error: " + err.message;
      errBox.style.display = "block";
      submitBtn.disabled = false;
    }
  });
}

/* ---------------------------------------------------------------------- */
/* 5b. TELAS: ACEPTACIÓN DE TÉRMINOS + ELECCIÓN DE PLAN (Mercado Pago)     */
/* ---------------------------------------------------------------------- */
function renderAcceptTerms() {
  root.innerHTML = `
    <div class="auth-wrap">
      <div class="auth-grid">
        <div class="auth-hero">
          <div class="auth-hero-flag"><div></div><div></div><div></div></div>
          <div class="auth-hero-emblem">📜</div>
          <h1>${t("auth_hero_title")}</h1>
          <p>${t("auth_hero_sub")}</p>
        </div>
        <div class="auth-card">
          <div class="flag-strip"><div></div><div></div><div></div></div>
          <h1>¡Español Ya!</h1>
          <div class="auth-sub">${t("terms_title")}</div>
          <p style="color:var(--gray-2);line-height:1.6;margin:10px 0 16px">${t("terms_intro")}</p>
          <div class="terms-box" style="max-height:220px;overflow:auto;border:1px solid var(--border);border-radius:10px;padding:12px;font-size:.85rem;color:var(--gray-2);line-height:1.6;margin-bottom:16px">${t("terms_body")}</div>
          <label style="display:flex;gap:8px;align-items:flex-start;font-size:.9rem;margin-bottom:6px;cursor:pointer">
            <input type="checkbox" id="terms-checkbox" style="margin-top:3px">
            <span>${t("terms_checkbox_label")}</span>
          </label>
          <div id="terms-error" class="error-msg" style="display:none">${t("terms_required_error")}</div>
          <button class="btn btn-primary btn-block" id="terms-accept-btn" style="margin-top:10px">${t("terms_accept_btn")}</button>
          <button class="btn btn-secondary btn-block" id="terms-logout-btn" style="margin-top:8px">${t("terms_logout_btn")}</button>
        </div>
      </div>
    </div>`;
  document.getElementById("terms-logout-btn").onclick = () => auth.signOut();
  document.getElementById("terms-accept-btn").onclick = async () => {
    const box = document.getElementById("terms-checkbox");
    if (!box.checked) {
      document.getElementById("terms-error").style.display = "block";
      return;
    }
    try {
      await db.collection("users").doc(state.user.uid).set({
        termsAcceptedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      state.screen = "choosePlan";
      render();
    } catch (e) {
      console.warn(e);
      alert("Error: " + e.message);
    }
  };
}

function renderChoosePlan() {
  const monthly = state.config.priceMonthly ?? DEFAULT_PRICE_MONTHLY;
  const annual = state.config.priceAnnual ?? DEFAULT_PRICE_ANNUAL;
  root.innerHTML = `
    <div class="auth-wrap">
      <div class="auth-grid">
        <div class="auth-hero">
          <div class="auth-hero-flag"><div></div><div></div><div></div></div>
          <div class="auth-hero-emblem">💳</div>
          <h1>${t("auth_hero_title")}</h1>
          <p>${t("auth_hero_sub")}</p>
        </div>
        <div class="auth-card">
          <div class="flag-strip"><div></div><div></div><div></div></div>
          <h1>¡Español Ya!</h1>
          <div class="auth-sub">${t("plan_title")}</div>
          <p style="color:var(--gray-2);line-height:1.6;margin:10px 0 18px">${t("plan_intro")}</p>
          <div class="plan-cards" style="display:flex;flex-direction:column;gap:14px">
            <div class="plan-card" style="border:1px solid var(--border);border-radius:12px;padding:16px">
              <h3 style="margin:0 0 4px">${t("plan_monthly_name")}</h3>
              <p style="color:var(--gray-2);font-size:.85rem;margin:0 0 10px">${t("plan_monthly_desc")}</p>
              <div style="font-size:1.4rem;font-weight:800;margin-bottom:12px">${formatBRL(monthly)}<span style="font-size:.8rem;font-weight:500;color:var(--gray-2)">${t("plan_per_month")}</span></div>
              <button class="btn btn-primary btn-block plan-choose-btn" data-plan="monthly">${t("plan_choose_btn")}</button>
            </div>
            <div class="plan-card" style="border:1px solid var(--border);border-radius:12px;padding:16px">
              <h3 style="margin:0 0 4px">${t("plan_annual_name")}</h3>
              <p style="color:var(--gray-2);font-size:.85rem;margin:0 0 10px">${t("plan_annual_desc")}</p>
              <div style="font-size:1.4rem;font-weight:800;margin-bottom:12px">${formatBRL(annual)}<span style="font-size:.8rem;font-weight:500;color:var(--gray-2)">${t("plan_per_year")}</span></div>
              <button class="btn btn-primary btn-block plan-choose-btn" data-plan="annual">${t("plan_choose_btn")}</button>
            </div>
          </div>
          <div id="plan-feedback" style="margin-top:12px"></div>
          <button class="btn btn-secondary btn-block" id="plan-logout-btn" style="margin-top:14px">${t("plan_logout_btn")}</button>
        </div>
      </div>
    </div>`;
  document.getElementById("plan-logout-btn").onclick = () => auth.signOut();
  document.querySelectorAll(".plan-choose-btn").forEach(btn => {
    btn.onclick = () => startCheckout(btn.dataset.plan);
  });
}

// Llama a la Cloud Function "createMpCheckout" (ver /functions/index.js) que crea la
// preferencia (anual, pago único) o la suscripción recurrente (mensual) en el Mercado Pago
// y guarda subscription={plan,status:'pending',...} en el user — luego redirige al checkout.
// Si las Functions todavía no están desplegadas (functions === null o falla la llamada),
// muestra un error amigable en vez de romper la pantalla.
async function startCheckout(plan) {
  const feedback = document.getElementById("plan-feedback");
  document.querySelectorAll(".plan-choose-btn").forEach(b => b.disabled = true);
  feedback.innerHTML = `<p style="color:var(--gray-2)">${t("plan_processing")}</p>`;
  try {
    if (!functions) throw new Error("Cloud Functions no disponibles en este cliente.");
    const call = functions.httpsCallable("createMpCheckout");
    const returnUrl = window.location.origin + window.location.pathname;
    const result = await call({ plan, returnUrl });
    const initPoint = result && result.data && result.data.initPoint;
    if (!initPoint) throw new Error("La función no devolvió un link de pago.");
    window.location.href = initPoint;
  } catch (e) {
    console.warn(e);
    feedback.innerHTML = `<div class="error-msg">${t("plan_generic_error")}</div>`;
    document.querySelectorAll(".plan-choose-btn").forEach(b => b.disabled = false);
  }
}

function renderCheckoutReturn() {
  root.innerHTML = `
    <div class="auth-wrap">
      <div class="auth-grid">
        <div class="auth-hero">
          <div class="auth-hero-flag"><div></div><div></div><div></div></div>
          <div class="auth-hero-emblem">🎉</div>
          <h1>${t("auth_hero_title")}</h1>
          <p>${t("auth_hero_sub")}</p>
        </div>
        <div class="auth-card">
          <div class="flag-strip"><div></div><div></div><div></div></div>
          <h1>¡Español Ya!</h1>
          <div class="auth-sub">${t("plan_checkout_return_title")}</div>
          <p style="color:var(--gray-2);line-height:1.6;margin:14px 0 22px">${t("plan_checkout_return_msg")}</p>
          <button class="btn btn-primary btn-block" id="checkout-return-btn">${t("plan_checkout_return_btn")}</button>
        </div>
      </div>
    </div>`;
  document.getElementById("checkout-return-btn").onclick = () => { state.screen = "dashboard"; render(); };
}

async function initProgressDoc(uid) {
  const initial = { xp: 0, levels: {}, schedule: { durationMonths: DEFAULT_SCHEDULE_MONTHS, startDate: new Date().toISOString() } };
  MAIN_SEQUENCE.forEach((id, idx) => {
    initial.levels[id] = { lessonsCompleted: {}, examScore: null, examPassed: false, unlocked: idx === 0 };
  });
  BONUS_LEVELS.forEach(id => {
    initial.levels[id] = { lessonsCompleted: {}, examScore: null, examPassed: false, unlocked: true };
  });
  await db.collection("progress").doc(uid).set(initial);
}

/* ---------------------------------------------------------------------- */
/* 6. CARREGAMENTO DE DADOS DO USUÁRIO                                     */
/* ---------------------------------------------------------------------- */
auth.onAuthStateChanged(async (fbUser) => {
  if (!fbUser) {
    state.user = null;
    state.screen = "auth";
    render();
    return;
  }
  try {
    let userDoc = await db.collection("users").doc(fbUser.uid).get();
    if (!userDoc.exists) {
      const role = ADMIN_EMAILS.includes((fbUser.email || "").toLowerCase()) ? "admin" : "aluno";
      const status = role === "admin" ? "approved" : "pending";
      await db.collection("users").doc(fbUser.uid).set({
        name: fbUser.email.split("@")[0], email: fbUser.email, role, status,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        prefs: { theme: "espana", font: "poppins", lang: state.prefs.lang || "es" }
      });
      userDoc = await db.collection("users").doc(fbUser.uid).get();
    }
    const userData = userDoc.data();
    // Cuentas creadas antes de que existiera este control no tienen campo "status":
    // se consideran "approved" automáticamente (no afecta a nadie que ya usaba el curso).
    const status = userData.status || "approved";
    state.user = {
      uid: fbUser.uid, email: fbUser.email, name: userData.name, role: userData.role, status,
      photoData: userData.photoData || null, phone: userData.phone || "", secondaryEmail: userData.secondaryEmail || "",
      address: userData.address || null, observations: userData.observations || ""
    };
    state.prefs = { theme: "espana", font: "poppins", lang: state.prefs.lang || "es", voiceURI: null, voiceURI2: null, ...(userData.prefs || {}) };
    applyTheme(state.prefs.theme);
    applyFont(state.prefs.font);
    localStorage.setItem("ey_ui_lang", state.prefs.lang);

    if (state.user.role !== "admin" && state.user.status !== "approved") {
      // Cuenta todavía no aprobada (o rechazada), O suspendida manualmente por el admin
      // (por ejemplo, por falta de pago — ver renderAdminStudents/suspendUserAccess): no
      // cargamos progreso/config, solo mostramos la pantalla de espera/rechazo/suspensión.
      state.screen = "pendingApproval";
      render();
      return;
    }

    // Aceptación de términos + elección de plan de pago (Mercado Pago) — solo para alumnos,
    // se verifica ANTES de cargar el progreso/curso porque el acceso completo depende de
    // haber aceptado los términos y elegido un plan. El admin nunca pasa por acá.
    // IMPORTANTE (pedido explícito): un pago atrasado NUNCA bloquea el acceso solo —
    // eso lo decide el administrador manualmente (botón "Suspender acceso" en Alumnos).
    await loadConfig();
    // Cadastro complementar (teléfono, e-mail adicional, dirección, observaciones, foto):
    // se pide una única vez, ANTES de términos/plan, porque es información de identidad
    // básica — pedido explícito de Anderson. A diferencia de términos/plan (que son solo
    // para alumnos, por el pago), este paso NO tiene excepción de rol: el propio admin
    // (Anderson) también tiene que completarlo, no solo los alumnos.
    if (!userData.profileCompletedAt) {
      state.screen = "completeProfile";
      render();
      return;
    }
    if (state.user.role !== "admin") {
      if (!userData.termsAcceptedAt) {
        state.screen = "acceptTerms";
        render();
        return;
      }
      if (!userData.subscription || !userData.subscription.plan) {
        state.screen = "choosePlan";
        render();
        return;
      }
      state.subscription = userData.subscription;
    }

    let progDoc = await db.collection("progress").doc(fbUser.uid).get();
    if (!progDoc.exists) {
      await initProgressDoc(fbUser.uid);
      progDoc = await db.collection("progress").doc(fbUser.uid).get();
    }
    state.progress = progDoc.data();
    if (!state.progress.schedule) {
      // Cuentas creadas antes de que existiera el Cronograma: inicializa con los valores por defecto.
      const fallbackSchedule = { durationMonths: DEFAULT_SCHEDULE_MONTHS, startDate: new Date().toISOString() };
      state.progress.schedule = fallbackSchedule;
      db.collection("progress").doc(fbUser.uid).set({ schedule: fallbackSchedule }, { merge: true }).catch(e => console.warn(e));
    }

    await loadSongs();
    await loadVoices();
    logAccess(); // fire-and-forget: registra este acceso en el historial (Configuración/Mi Cuenta)

    // Si venimos de vuelta del checkout del Mercado Pago (back_urls configuradas en la
    // Cloud Function apuntan acá con ?mp_return=1), mostramos una pantalla de agradecimiento
    // una única vez y limpiamos la URL para que un refresh no la muestre de nuevo.
    if (state.user.role !== "admin" && new URLSearchParams(window.location.search).get("mp_return") === "1") {
      window.history.replaceState({}, "", window.location.pathname);
      state.screen = "checkoutReturn";
      render();
      return;
    }

    state.screen = "dashboard";
    render();
  } catch (err) {
    console.error(err);
    state.errorMsg = "Error al cargar tus datos: " + err.message;
    state.screen = "auth";
    render();
  }
});

async function loadConfig() {
  try {
    const doc = await db.collection("config").doc("settings").get();
    const data = doc.exists ? doc.data() : {};
    if (data.passScores) {
      state.config.passScores = { ...DEFAULT_PASS_SCORES, ...data.passScores };
    } else {
      await db.collection("config").doc("settings").set({ passScores: DEFAULT_PASS_SCORES }, { merge: true });
    }
    if (data.gabaritoMode === "immediate" || data.gabaritoMode === "after") {
      state.config.gabaritoMode = data.gabaritoMode;
    } else {
      state.config.gabaritoMode = DEFAULT_GABARITO_MODE;
      await db.collection("config").doc("settings").set({ gabaritoMode: DEFAULT_GABARITO_MODE }, { merge: true });
    }
    // Precios de los planes (Mercado Pago) — configurables por el admin en
    // Configuración → Planes y precios. Si nunca se guardaron, usa los valores por defecto.
    state.config.priceMonthly = (typeof data.priceMonthly === "number") ? data.priceMonthly : DEFAULT_PRICE_MONTHLY;
    state.config.priceAnnual = (typeof data.priceAnnual === "number") ? data.priceAnnual : DEFAULT_PRICE_ANNUAL;
  } catch (e) { console.warn("No se pudo cargar config, usando valores por defecto.", e); }
}

// Formatea un valor numérico como Real brasileño (R$) — la moneda es fija en BRL porque
// el cobro se hace vía Mercado Pago Brasil, independiente del idioma de la interfaz elegido.
function formatBRL(value) {
  try {
    return (value || 0).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  } catch (e) { return `R$ ${(value || 0).toFixed(2).replace(".", ",")}`; }
}

// true  = el gabarito (respuesta correcta) se muestra apenas se responde cada pregunta.
// false = se oculta durante el ejercicio/prueba; solo se ve todo junto en la pantalla de Revisión.
function isGabaritoImmediate() {
  return (state.config.gabaritoMode || DEFAULT_GABARITO_MODE) !== "after";
}

// Texto legible de la respuesta correcta / modelo para cada tipo de ejercicio — usado tanto
// en el feedback inmediato como en la pantalla de Revisión.
function correctAnswerText(ex) {
  if (ex.type === "mc") return ex.options[ex.correct];
  if (ex.type === "fill" || ex.type === "translate") return ex.answer;
  if (ex.type === "listen" || ex.type === "songListen") return ex.answer;
  if (ex.type === "speak") return ex.target;
  if (ex.type === "order") return (ex.correctOrder || []).map(i => ex.items[i]).join(" → ");
  if (ex.type === "open") return ex.sample || "";
  return "";
}

function questionTextOf(ex) {
  return (ex.q || ex.text || ex.prompt || "") + "";
}

function loadVoices() {
  return new Promise((resolve) => {
    function pick() {
      const voices = speechSynthesis.getVoices();
      state.ttsVoices = voices;
      resolve();
    }
    if (speechSynthesis.getVoices().length) { pick(); }
    else { speechSynthesis.onvoiceschanged = pick; setTimeout(pick, 500); }
  });
}

function pickSpanishVoice() {
  const voices = state.ttsVoices || [];
  // Si el alumno eligió una voz propia en Configuración → Apariencia, se respeta esa elección
  // (identificada por voiceURI, único por voz/navegador). Si esa voz ya no está disponible en
  // este dispositivo/navegador (p. ej. cambió de PC), cae de forma segura a la selección automática.
  const preferred = state.prefs && state.prefs.voiceURI ? voices.find(v => v.voiceURI === state.prefs.voiceURI) : null;
  return preferred ||
         voices.find(v => v.lang === "es-ES") ||
         voices.find(v => v.lang && v.lang.startsWith("es-ES")) ||
         voices.find(v => v.lang && v.lang.startsWith("es")) ||
         null;
}

// Lista de voces en español disponibles en ESTE navegador/dispositivo, hasta un máximo de 4
// para no abrumar al alumno con la lista completa (que en algunos navegadores puede ser larga).
// Se ordenan priorizando variedad de región (España, México/Latam, Estados Unidos, Argentina)
// para ofrecer opciones bien distintas entre sí en vez de 4 voces casi iguales.
const VOICE_REGION_ORDER = ["es-ES", "es-MX", "es-US", "es-AR", "es-419", "es-CO", "es"];
function voiceRegionLabel(lang) {
  const map = { "es-ES": "🇪🇸 España", "es-MX": "🇲🇽 México", "es-US": "🇺🇸 EE. UU.", "es-AR": "🇦🇷 Argentina", "es-CO": "🇨🇴 Colombia", "es-419": "🌎 Latinoamérica" };
  return map[lang] || "🌐 Español";
}
function getSpanishVoiceOptions() {
  const all = (state.ttsVoices || []).filter(v => v.lang && v.lang.toLowerCase().startsWith("es"));
  const seen = new Set();
  const unique = [];
  all.forEach(v => { if (!seen.has(v.voiceURI)) { seen.add(v.voiceURI); unique.push(v); } });
  unique.sort((a, b) => {
    const ia = VOICE_REGION_ORDER.indexOf(a.lang) === -1 ? 99 : VOICE_REGION_ORDER.indexOf(a.lang);
    const ib = VOICE_REGION_ORDER.indexOf(b.lang) === -1 ? 99 : VOICE_REGION_ORDER.indexOf(b.lang);
    return ia - ib;
  });
  return unique.slice(0, 4);
}

function logout() { auth.signOut(); }

/* ---------------------------------------------------------------------- */
/* 7. TTS COM DESTAQUE DE PALAVRAS (karaokê)                               */
/* ---------------------------------------------------------------------- */
function speak(text, onWordSpans, btn, forceVoice, onFinish) {
  if (!("speechSynthesis" in window)) { alert("Tu navegador no soporta síntesis de voz. Prueba con Google Chrome."); return; }
  speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "es-ES";
  const voice = forceVoice || pickSpanishVoice();
  if (voice) utter.voice = voice;
  utter.rate = 0.92;

  if (btn) btn.classList.add("playing");

  if (onWordSpans && onWordSpans.length) {
    utter.onboundary = (ev) => {
      if (ev.name !== "word" && ev.name !== undefined) { /* alguns navegadores não enviam name */ }
      const charIndex = ev.charIndex;
      onWordSpans.forEach(span => span.classList.remove("active"));
      let acc = 0, target = null;
      for (const span of onWordSpans) {
        const wordLen = span.textContent.length;
        if (charIndex >= acc && charIndex < acc + wordLen + 1) { target = span; break; }
        acc += wordLen + 1;
      }
      if (target) target.classList.add("active");
    };
  }
  utter.onend = () => {
    if (btn) btn.classList.remove("playing");
    if (onWordSpans) onWordSpans.forEach(span => span.classList.remove("active"));
    if (onFinish) onFinish();
  };
  speechSynthesis.speak(utter);
}

// Variante usada por el botón "🔊 escuchar" del selector de voz en Configuración: reproduce
// una frase de ejemplo con una voz ESPECÍFICA (sin guardarla), para que el alumno pueda
// comparar antes de elegir cuál dejar guardada como su voz preferida.
function speakWithVoice(text, voice) {
  speak(text, null, null, voice || null);
}

/* ---------------------------------------------------------------------- */
/* 7b. REPRODUCIR UN DIÁLOGO COMPLETO (todas las líneas, una tras otra)     */
/* ---------------------------------------------------------------------- */
// Además de escuchar línea por línea (botón 🔊 de cada burbuja, ya existente), este botón
// reproduce TODO el diálogo en secuencia, resaltando la línea y la palabra actual en tiempo
// real, para que el alumno pueda seguir la conversación completa como si fuera un audio real.
// Un segundo clic mientras suena lo detiene (toggle reproducir/detener).
function playDialogueAll(container, btn, voiceMap) {
  if (!("speechSynthesis" in window)) { alert("Tu navegador no soporta síntesis de voz. Prueba con Google Chrome."); return; }
  if (state.dialoguePlayingAll) {
    state.dialoguePlayingAll = false;
    speechSynthesis.cancel();
    stopDialogueAllUI(container, btn);
    return;
  }
  const lineEls = Array.from(container.querySelectorAll(".dialogue-line"));
  if (!lineEls.length) return;
  speechSynthesis.cancel();
  state.dialoguePlayingAll = true;
  if (btn) { btn.classList.add("playing"); btn.innerHTML = `⏹ ${t("dialogue_stop_all")}`; }
  let i = 0;
  const playNext = () => {
    if (!state.dialoguePlayingAll || i >= lineEls.length) {
      state.dialoguePlayingAll = false;
      stopDialogueAllUI(container, btn);
      return;
    }
    const lineEl = lineEls[i];
    const text = lineEl.dataset.fulltext || lineEl.querySelector(".text-content").textContent;
    lineEls.forEach(le => le.classList.remove("active-line"));
    lineEl.classList.add("active-line");
    lineEl.scrollIntoView({ behavior: "smooth", block: "center" });
    const spans = Array.from(lineEl.querySelectorAll(".hl-word"));
    const lineBtn = lineEl.querySelector(".speak-icon-btn");
    const voice = voiceMap ? voiceMap[lineEl.dataset.who] : null;
    i++;
    speak(text, spans, lineBtn, voice || null, () => {
      if (state.dialoguePlayingAll) playNext();
    });
  };
  playNext();
}

function stopDialogueAllUI(container, btn) {
  if (btn) { btn.classList.remove("playing"); btn.innerHTML = `▶ ${t("dialogue_play_all")}`; }
  container.querySelectorAll(".dialogue-line").forEach(le => le.classList.remove("active-line"));
}

function wrapWordsForHighlight(text) {
  const words = text.split(/(\s+)/);
  return words.map(w => w.trim() ? `<span class="hl-word">${escapeHtml(w)}</span>` : w).join("");
}

function attachSpeakButton(container, text, forceVoice) {
  const btn = container.querySelector(".speak-icon-btn");
  const spans = Array.from(container.querySelectorAll(".hl-word"));
  if (btn) btn.onclick = () => speak(text, spans, btn, forceVoice || null);
}

// Asigna una voz a cada personaje de un diálogo: el PRIMER personaje que habla (en orden de
// aparición) usa la "Voz 1" del alumno (su voz preferida en Configuración), y el SEGUNDO
// personaje distinto usa la "Voz 2" (si la configuró) — así una conversación con dos
// interlocutores suena con dos voces distintas en vez de una sola leyendo todo. Si el alumno
// no configuró una Voz 2, todos los personajes usan la Voz 1 (comportamiento de siempre).
// No se basa en detectar el género real del personaje (el contenido no trae ese dato), sino
// en alternar por orden de aparición — funciona bien para diálogos de 2 personas (la mayoría).
function assignDialogueVoiceMap(dialogue) {
  const map = {};
  const v1 = pickSpanishVoice();
  const voices = state.ttsVoices || [];
  const v2 = state.prefs.voiceURI2 ? voices.find(v => v.voiceURI === state.prefs.voiceURI2) : null;
  const order = [];
  (dialogue || []).forEach(d => { if (d && d.who && !order.includes(d.who)) order.push(d.who); });
  order.forEach((who, idx) => { map[who] = (!v2 || idx % 2 === 0) ? v1 : v2; });
  return map;
}

/* ---------------------------------------------------------------------- */
/* 8. RECONHECIMENTO DE FALA                                               */
/* ---------------------------------------------------------------------- */
function getSpeechRecognition() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return null;
  const rec = new SR();
  rec.lang = "es-ES";
  rec.interimResults = false;
  rec.maxAlternatives = 3;
  return rec;
}

/* ---------------------------------------------------------------------- */
/* 9. MENU LATERAL (SIDEBAR) + TOPBAR ESTREITA + LAYOUT HELPERS            */
/* ---------------------------------------------------------------------- */
// Sección "Aprender": navegación del curso en sí (nivel actual + catálogo completo).
const SIDEBAR_LEARN_ITEMS = [
  { screen: "dashboard", icon: "🏠", labelKey: "sidebar_dashboard" },
  { screen: "levels", icon: "📚", labelKey: "sidebar_levels" },
  { screen: "syllabus", icon: "🗂️", labelKey: "sidebar_syllabus" },
];
// Sección "Mi Progreso": todo lo que es seguimiento/evaluación del propio alumno,
// separado a propósito de la navegación de contenido de arriba.
const SIDEBAR_PROGRESS_ITEMS = [
  { screen: "notas", icon: "📊", labelKey: "sidebar_notas" },
  { screen: "analytics", icon: "📈", labelKey: "sidebar_analytics" },
  { screen: "schedule", icon: "📅", labelKey: "sidebar_schedule" },
  { screen: "notebook", icon: "📓", labelKey: "sidebar_notebook" },
];
const SIDEBAR_ACCOUNT_ITEMS = [
  { screen: "account", icon: "⚙️", labelKey: "sidebar_settings" },
  { screen: "tutorial", icon: "❓", labelKey: "sidebar_tutorial" },
];
// Sección "Administración": solo visible para role === "admin". Varias pantallas propias
// (no pestañas escondidas) para que el menú refleje todo lo que el admin puede hacer.
const SIDEBAR_ADMIN_ITEMS = [
  { screen: "admin", icon: "🛠️", labelKey: "admin_nav_overview" },
  { screen: "adminApprovals", icon: "✅", labelKey: "admin_nav_approvals" },
  { screen: "adminStudents", icon: "👥", labelKey: "admin_nav_students" },
  { screen: "adminAnalytics", icon: "📈", labelKey: "admin_nav_analytics" },
  { screen: "adminCerts", icon: "🎓", labelKey: "admin_nav_certs" },
  { screen: "adminSongs", icon: "🎵", labelKey: "admin_nav_songs" },
  { screen: "adminAccessLog", icon: "🕓", labelKey: "admin_nav_access" },
  { screen: "adminConfig", icon: "⚙️", labelKey: "admin_nav_config" },
];

function sidebarNavGroup(items, activeScreen) {
  return items.map(it => `
    <button class="sidebar-item ${activeScreen === it.screen ? "active" : ""}" data-nav="${it.screen}" title="${t(it.labelKey)}">
      <span class="ico">${it.icon}</span><span class="label">${t(it.labelKey)}</span>
    </button>`).join("");
}

function sidebarHtml(activeScreen) {
  const isAdmin = state.user && state.user.role === "admin";
  const adminBlock = isAdmin ? `
    <span class="sidebar-section-label">${t("sidebar_section_admin")}</span>
    ${sidebarNavGroup(SIDEBAR_ADMIN_ITEMS, activeScreen)}` : "";
  const initials = (state.user && state.user.name || "?").trim().charAt(0).toUpperCase();
  const userPhoto = state.user && state.user.photoData;
  return `
    <aside class="sidebar">
      <div class="sidebar-head">
        <div class="sidebar-brand"><div class="flag"><div></div><div></div><div></div></div><span>¡Español Ya!</span></div>
        <button class="sidebar-toggle" id="sidebar-toggle" title="${t("sidebar_toggle")}">☰</button>
      </div>
      <nav class="sidebar-nav">
        <span class="sidebar-section-label">${t("sidebar_section_learn")}</span>
        ${sidebarNavGroup(SIDEBAR_LEARN_ITEMS, activeScreen)}
        <span class="sidebar-section-label">${t("sidebar_section_progress")}</span>
        ${sidebarNavGroup(SIDEBAR_PROGRESS_ITEMS, activeScreen)}
        ${sidebarNavGroup(SIDEBAR_ACCOUNT_ITEMS, activeScreen)}
        ${adminBlock}
      </nav>
      <div class="sidebar-foot">
        <div class="sidebar-user">
          <button class="avatar-btn ${userPhoto ? "has-photo" : ""}" id="btn-account-avatar" title="${t("account_title")}">${userPhoto ? `<img src="${userPhoto}" alt="">` : initials}</button>
          <div class="who"><strong>${escapeHtml((state.user && state.user.name) || "")}</strong><span>⭐ ${(state.progress && state.progress.xp) || 0} XP</span></div>
        </div>
        <button class="sidebar-item" id="btn-logout" title="${t("topbar_logout")}">
          <span class="ico">🚪</span><span class="label">${t("topbar_logout")}</span>
        </button>
        <div class="sidebar-version">v${APP_VERSION}</div>
      </div>
    </aside>`;
}

function nowDateTimeLabel() {
  try {
    const lang = (state.prefs && state.prefs.lang) || "es";
    const locale = lang === "pt" ? "pt-BR" : lang === "en" ? "en-US" : "es-ES";
    const now = new Date();
    const datePart = now.toLocaleDateString(locale, { weekday: "short", day: "2-digit", month: "short" });
    const timePart = now.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
    return `${datePart} · ${timePart}`;
  } catch (e) { return ""; }
}

function topbarSlimHtml() {
  const xp = (state.progress && state.progress.xp) || 0;
  return `
    <div class="topbar-slim">
      <div class="topbar-clock" id="topbar-clock">🕒 ${nowDateTimeLabel()}</div>
      <div class="xp-pill" title="${t("xp_tooltip")}">⭐ ${xp} XP</div>
    </div>`;
}

// Envuelve el contenido de cada pantalla con la sidebar + topbar estrecha.
// activeScreen se usa para resaltar el ítem correspondiente en el menú lateral.
function wrapShell(contentHtml, activeScreen) {
  const collapsed = state.sidebarCollapsed ? "sidebar-collapsed" : "";
  return `
    <div class="app-shell ${collapsed}">
      ${sidebarHtml(activeScreen)}
      <div class="app-main">
        ${topbarSlimHtml()}
        <div class="main-content">${contentHtml}</div>
      </div>
    </div>`;
}

let _clockInterval = null;
function attachShellEvents() {
  if (_clockInterval) clearInterval(_clockInterval);
  _clockInterval = setInterval(() => {
    const el = document.getElementById("topbar-clock");
    if (el) el.textContent = "🕒 " + nowDateTimeLabel();
  }, 30000);
  const toggle = document.getElementById("sidebar-toggle");
  if (toggle) toggle.onclick = () => {
    state.sidebarCollapsed = !state.sidebarCollapsed;
    localStorage.setItem("ey_sidebar_collapsed", state.sidebarCollapsed ? "1" : "0");
    render();
  };
  const logoutBtn = document.getElementById("btn-logout");
  if (logoutBtn) logoutBtn.onclick = logout;
  const accountBtn = document.getElementById("btn-account-avatar");
  if (accountBtn) accountBtn.onclick = () => { state.accountMsg = ""; state.accountTab = state.accountTab || "profile"; state.screen = "account"; render(); };
  document.querySelectorAll(".sidebar-item[data-nav]").forEach(btn => {
    btn.onclick = () => {
      const target = btn.dataset.nav;
      if (target === "admin" || target === "adminStudents") {
        state.screen = target;
        render(); // muestra la pantalla de inmediato (con la lista aún vacía)
        loadAdminStudents().then(render); // y la vuelve a pintar cuando llegan los datos
        return;
      }
      if (target === "adminAnalytics") {
        state.screen = target;
        render();
        Promise.all([loadAdminStudents(), loadAdminAttempts()]).then(render);
        return;
      }
      if (target === "adminApprovals") {
        state.screen = target;
        render();
        loadAdminPending().then(render);
        return;
      }
      if (target === "adminAccessLog") {
        state.screen = target;
        render();
        loadAdminAccessLog().then(render);
        return;
      }
      if (target === "analytics") {
        state.screen = target;
        render();
        loadMyAttempts().then(render);
        return;
      }
      if (target === "notebook") {
        state.screen = target;
        state.notebookEditingId = null;
        render();
        loadNotebookNotes().then(render);
        return;
      }
      if (target === "account") { state.accountMsg = ""; state.accountTab = state.accountTab || "profile"; }
      if (target === "schedule") { state.scheduleMsg = ""; }
      state.screen = target;
      render();
    };
  });
}

/* ---------------------------------------------------------------------- */
/* 10. TELA: DASHBOARD (níveis)                                            */
/* ---------------------------------------------------------------------- */
// Reaprovecha las imágenes ya curadas de la primera lección de cada nivel como
// foto de fondo del card (mismo criterio visual del panel, sin duplicar investigación).
const LEVEL_HERO_FIRST_LESSON = {
  fundamentos: "fund-0", basico: "b1", intermedio: "i1", avanzado: "a1", secretos: "s1", profesional: "p1", normas: "n1",
};
// Anderson reportó (2026-07-13, print de "Mis Niveles"): el card de "Avanzado" quedaba feo
// porque reusaba la imagen de la lección "a1" (una sartén vista desde arriba — buena DENTRO
// de esa lección de vocabulario de cocina, pero como fondo grande de todo el card se ve solo
// como un círculo negro). Y "Canciones" ni siquiera tenía imagen: no está en
// LEVEL_HERO_FIRST_LESSON porque sus lecciones son dinámicas (canciones que el admin agrega),
// no vienen de LESSON_IMAGES. Por eso este mapa aparte: SOLO afecta el fondo del card del
// nivel (no toca LESSON_IMAGES ni la imagen dentro de la lección "a1", que sigue siendo
// correcta ahí). Confirmadas por WebSearch en Wikimedia Commons (mismo criterio que el resto
// de LESSON_IMAGES: nombre de archivo real, licencia libre).
const LEVEL_COVER_OVERRIDE = {
  avanzado: { file: "Plaza_Mayor_de_Madrid_06.jpg", alt: "Plaza Mayor de Madrid" },
  canciones: { file: "Flamenco_granada-1.jpg", alt: "Guitarra flamenca" },
};
function levelHeroImageUrl(levelId) {
  const override = LEVEL_COVER_OVERRIDE[levelId];
  if (override) return wikimediaImg(override.file);
  const lessonId = LEVEL_HERO_FIRST_LESSON[levelId];
  const img = lessonId && LESSON_IMAGES[lessonId];
  return img ? wikimediaImg(img.file) : "";
}

function levelCardHtml(levelId, isBonus) {
  const lvl = getLevel(levelId);
  if (!lvl) return "";
  const unlocked = isLevelUnlocked(levelId);
  const pct = levelCompletionPct(levelId);
  const p = levelProgress(levelId);
  // Certificado disponible para cualquier nivel que tenga prueba propia Y un modelo
  // visual configurado en CERT_THEMES (los niveles principales lo tienen todos; entre
  // los bônus, solo "normas" tiene prueba + modelo propio, así que gana su certificado).
  const showCert = !!lvl.exam && !!CERT_THEMES[levelId] && p.examPassed;
  // Antes de aprobar, el alumno solo puede CONSULTAR el diseño del certificado en
  // pantalla (modal con vista previa) — el PDF real solo se genera al aprobar.
  const showCertPreview = !!lvl.exam && !!CERT_THEMES[levelId] && !p.examPassed;
  const bgUrl = levelHeroImageUrl(levelId);
  const isCurrent = !isBonus && levelId === currentActiveLevelId() && unlocked && !p.examPassed;
  return `
    <div class="level-card ${unlocked ? "" : "locked"} ${isCurrent ? "is-current" : ""}" data-level="${levelId}">
      ${isCurrent ? `<div class="current-ribbon">${t("current_level_badge")}</div>` : ""}
      <div class="level-card-photo" ${bgUrl ? `style="background-image:url('${bgUrl}')"` : ""}>
        <div class="level-card-scrim"></div>
        ${!unlocked ? `<div class="lock-badge">🔒</div>` : ""}
        <div class="level-card-icon">${lvl.icon}</div>
        <h3>${lvl.name}</h3>
      </div>
      <div class="level-card-body">
        <p>${lvl.description}</p>
        <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${pct}%">${pct > 0 ? `<span>${pct}%</span>` : ""}</div></div>
        <div class="stat-line">
          <span>${pct}% completo</span>
          <span>${p.examPassed ? t("exam_passed", { score: p.examScore }) : (lvl.exam ? t("exam_pending") : (isBonus ? "★" : ""))}</span>
        </div>
        ${showCert ? `<button class="btn btn-gold btn-sm cert-btn" data-cert-level="${levelId}">${t("cert_btn")}</button>` : ""}
        ${showCertPreview ? `<button class="btn btn-ghost btn-sm cert-preview-open-btn" data-cert-level="${levelId}">${t("cert_preview_open_btn")}</button>` : ""}
      </div>
    </div>`;
}

function panelSummaryHtml() {
  const total = totalUnitsCount();
  const actual = actualUnitsCompleted();
  const overallPct = total ? Math.round((actual / total) * 100) : 0;
  const sc = computeScheduleStatus();
  const lang = state.prefs.lang || "es";
  const statusLabelKey = sc.status === "ahead" ? "panel_schedule_ahead" : sc.status === "behind" ? "panel_schedule_behind" : "panel_schedule_ontrack";
  const statusDescKey = sc.status === "ahead" ? "panel_schedule_ahead_d" : sc.status === "behind" ? "panel_schedule_behind_d" : "panel_schedule_ontrack_d";
  const statusClass = sc.status;
  const allMainPassed = MAIN_SEQUENCE.every(id => levelProgress(id).examPassed);
  const userPhoto = state.user && state.user.photoData;
  const initials = (state.user && state.user.name || "?").trim().charAt(0).toUpperCase();
  return `
    <div class="section-title">${t("panel_title")}</div>
    <div class="panel-summary">
      <div class="panel-avatar">${userPhoto ? `<img src="${userPhoto}" alt="">` : initials}</div>
      <div class="panel-ring-wrap">
        <div class="panel-ring" style="--pct:${overallPct}">
          <div class="panel-ring-inner">
            <strong>${overallPct}%</strong>
            <span>${t("panel_overall_sub", { done: actual, total })}</span>
          </div>
        </div>
      </div>
      <div class="panel-status-box status-${statusClass}">
        <div class="panel-status-badge">${t(statusLabelKey)}</div>
        <p>${t(statusDescKey)}</p>
        <button class="btn btn-ghost btn-sm" id="panel-view-schedule">${t("panel_view_schedule")}</button>
      </div>
    </div>
    ${allMainPassed ? `
    <div class="final-diploma-card">
      <div class="icon">🏆</div>
      <div class="info"><h4>${t("cert_final_card_title")}</h4><span>${t("cert_final_card_sub")}</span></div>
      <button class="btn btn-gold" id="btn-final-cert">${t("cert_final_btn")}</button>
    </div>` : ""}`;
}

// Card grande de "continuar estudiando": foco absoluto en UN solo próximo paso,
// para que el alumno nunca tenga dudas de en qué nivel/lección está.
function continueCardHtml() {
  const levelId = currentActiveLevelId();
  const lvl = getLevel(levelId);
  const p = levelProgress(levelId);
  const pct = levelCompletionPct(levelId);
  const nextLesson = nextLessonInLevel(levelId);
  const bgUrl = levelHeroImageUrl(levelId);
  const examReady = lvl.exam && !nextLesson && !p.examPassed;
  const subtitle = examReady
    ? lvl.exam.title
    : (nextLesson ? `${escapeHtml(nextLesson.title)}` : "");
  return `
    <div class="continue-card" ${bgUrl ? `style="background-image:url('${bgUrl}')"` : ""} id="continue-card">
      <div class="continue-scrim"></div>
      <div class="continue-body">
        <span class="continue-eyebrow">${t("next_up_label")}</span>
        <h2>${lvl.icon} ${lvl.name}</h2>
        <div class="continue-sub">${subtitle}</div>
        <div class="progress-bar-track continue-progress"><div class="progress-bar-fill" style="width:${pct}%"><span>${pct}%</span></div></div>
        <button class="btn btn-gold" id="continue-cta">${examReady ? "📝 " + t("continue_btn") : t("continue_btn")}</button>
      </div>
    </div>`;
}

function renderDashboard() {
  const aprov = computeAproveitamento();
  root.innerHTML = wrapShell(`
      <div class="section-title">${t("dash_greeting", { name: escapeHtml(state.user.name || "") })}</div>
      ${continueCardHtml()}
      <div class="home-stats-row">
        <div class="home-stat-card">
          <span class="hs-label">${t("notas_aproveitamento_label")}</span>
          <strong class="hs-value">${aprov ? aprov.avg + "%" : "—"}</strong>
          <a class="hs-link" id="home-link-notas">${t("sidebar_notas")} →</a>
        </div>
        <div class="home-stat-card" title="${t("xp_tooltip")}">
          <span class="hs-label">⭐ XP</span>
          <strong class="hs-value">${(state.progress && state.progress.xp) || 0}</strong>
          <a class="hs-link" id="home-link-analytics">${t("analytics_title")} →</a>
        </div>
        <div class="home-stat-card">
          <span class="hs-label">${t("sidebar_notebook")}</span>
          <strong class="hs-value">📓</strong>
          <a class="hs-link" id="home-link-notebook">${t("sidebar_notebook")} →</a>
        </div>
      </div>
      ${panelSummaryHtml()}
      <div class="section-title-row">
        <div class="section-title" style="margin:0">${t("dash_bonus")}</div>
        <a class="hs-link" id="home-link-levels">${t("home_your_levels_link")}</a>
      </div>
      <div class="level-grid">
        ${BONUS_LEVELS.map(id => levelCardHtml(id, true)).join("")}
      </div>
      <div class="bottom-space"></div>
    `, "dashboard");
  attachShellEvents();
  wireLevelCardEvents();
  const scheduleLink = document.getElementById("panel-view-schedule");
  if (scheduleLink) scheduleLink.onclick = () => { state.screen = "schedule"; render(); };
  const finalCertBtn = document.getElementById("btn-final-cert");
  if (finalCertBtn) finalCertBtn.onclick = () => generateFinalDiplomaPDF();
  const continueCta = document.getElementById("continue-cta");
  if (continueCta) continueCta.onclick = () => goToLevel(currentActiveLevelId());
  const goLevels = () => { state.screen = "levels"; render(); };
  ["home-link-levels"].forEach(id => { const el = document.getElementById(id); if (el) el.onclick = goLevels; });
  const linkNotas = document.getElementById("home-link-notas");
  if (linkNotas) linkNotas.onclick = () => { state.screen = "notas"; render(); };
  const linkAnalytics = document.getElementById("home-link-analytics");
  if (linkAnalytics) linkAnalytics.onclick = () => { state.screen = "analytics"; render(); loadMyAttempts().then(render); };
  const linkNotebook = document.getElementById("home-link-notebook");
  if (linkNotebook) linkNotebook.onclick = () => { state.screen = "notebook"; state.notebookEditingId = null; render(); loadNotebookNotes().then(render); };
}

// Ya no bloqueamos con un alert: dejamos que el alumno vea el temario (títulos de las
// lecciones) de un nivel bloqueado, para saber qué le espera. Solo no puede abrir/hacer
// las lecciones en sí mientras esté bloqueado — eso lo controla renderLessonList.
function goToLevel(levelId) {
  state.currentLevelId = levelId;
  state.screen = "lessonList";
  render();
}

function wireLevelCardEvents() {
  document.querySelectorAll(".level-card").forEach(card => {
    card.onclick = (ev) => {
      if (ev.target.closest(".cert-btn") || ev.target.closest(".cert-preview-open-btn")) return;
      goToLevel(card.dataset.level);
    };
  });
  document.querySelectorAll(".cert-btn").forEach(btn => {
    btn.onclick = (ev) => { ev.stopPropagation(); generateCertificatePDF(btn.dataset.certLevel); };
  });
  document.querySelectorAll(".cert-preview-open-btn").forEach(btn => {
    btn.onclick = (ev) => { ev.stopPropagation(); openCertPreviewModal(btn.dataset.certLevel); };
  });
}

// Modal de "solo consulta en pantalla": muestra el diseño del certificado (colores,
// sello, título) SIN generar ningún PDF. La generación real del PDF queda reservada
// a generateCertificatePDF(), que solo se habilita cuando el alumno aprueba la prueba.
function openCertPreviewModal(levelId) {
  const cfg = CERT_THEMES[levelId];
  const lvl = getLevel(levelId);
  if (!cfg || !lvl) return;
  const rgb = (a) => `rgb(${a[0]},${a[1]},${a[2]})`;
  const sealIcon = cfg.seal === "circle" ? "⭘" : cfg.seal === "medallion" ? "🏅" : cfg.seal === "shield" ? "🛡️" : cfg.seal === "hexagon" ? "⬡" : "🎗️";
  const overlay = document.createElement("div");
  overlay.className = "cert-modal-overlay";
  overlay.innerHTML = `
    <div class="cert-modal">
      <button class="cert-modal-close" id="cert-modal-close" aria-label="Cerrar">✕</button>
      <div class="cert-preview-card">
        <div class="cert-preview-swatch" style="background:linear-gradient(135deg, ${rgb(cfg.primary)}, ${rgb(cfg.secondary)})">
          <span>${sealIcon}</span>
        </div>
        <div class="cert-preview-body">
          <h4>${lvl.icon} ${escapeHtml(cfg.name)}</h4>
          <span class="cert-preview-tag">${escapeHtml(cfg.title)}</span>
          <p>${escapeHtml(cfg.cefr)}</p>
          <p style="border-top:1px solid #eee;padding-top:10px">${t("cert_preview_locked_note")}</p>
        </div>
      </div>
    </div>`;
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  overlay.querySelector("#cert-modal-close").onclick = close;
  overlay.onclick = (ev) => { if (ev.target === overlay) close(); };
}

/* ---------------------------------------------------------------------- */
/* 10b. TELA: MIS NIVELES (catálogo completo, separado del Panel del Aluno) */
/* ---------------------------------------------------------------------- */
function renderLevels() {
  root.innerHTML = wrapShell(`
      <div class="section-title">📚 ${t("sidebar_levels")}</div>
      <div class="level-grid">
        ${MAIN_SEQUENCE.map(id => levelCardHtml(id, false)).join("")}
      </div>
      <div class="section-title">${t("dash_bonus")}</div>
      <div class="level-grid">
        ${BONUS_LEVELS.map(id => levelCardHtml(id, true)).join("")}
      </div>
      <div class="bottom-space"></div>
    `, "levels");
  attachShellEvents();
  wireLevelCardEvents();
}

/* ---------------------------------------------------------------------- */
/* 10c. TELA: TEMARIO COMPLETO (todos los niveles y lecciones de un vistazo) */
/* ---------------------------------------------------------------------- */
// Vista de solo consulta: junta TODOS los niveles (principales + bônus) y TODAS
// sus lecciones (título + subtítulo = el "tema") en una sola pantalla, para que
// el alumno no tenga que entrar nivel por nivel para saber qué se estudia en cada uno.
function syllabusLevelBlockHtml(levelId, isBonus) {
  const lvl = getLevel(levelId);
  if (!lvl) return "";
  const unlocked = isLevelUnlocked(levelId);
  const p = levelProgress(levelId);
  const pct = levelCompletionPct(levelId);
  return `
    <div class="card syllabus-level-card">
      <div class="syllabus-level-head" data-goto-level="${unlocked ? levelId : ""}">
        <div class="syllabus-level-icon">${lvl.icon}</div>
        <div class="syllabus-level-info">
          <h3>${escapeHtml(lvl.name)} ${!unlocked ? "🔒" : ""}</h3>
          <p>${escapeHtml(lvl.description)}</p>
        </div>
        <div class="syllabus-level-pct">${pct}%</div>
      </div>
      <ol class="syllabus-lesson-list">
        ${lvl.lessons.map((lesson, i) => {
          const done = p.lessonsCompleted && p.lessonsCompleted[lesson.id] && p.lessonsCompleted[lesson.id].done;
          return `
          <li class="syllabus-lesson-row ${unlocked ? "clickable" : ""}" ${unlocked ? `data-goto-lesson="${lesson.id}" data-goto-level="${levelId}"` : ""}>
            <span class="syllabus-lesson-num">${done ? "✓" : (lesson.order || i + 1)}</span>
            <span class="syllabus-lesson-text"><strong>${escapeHtml(lesson.title)}</strong>${lesson.subtitle ? ` — ${escapeHtml(lesson.subtitle)}` : ""}</span>
          </li>`;
        }).join("")}
        ${lvl.exam ? `
          <li class="syllabus-lesson-row syllabus-exam-row">
            <span class="syllabus-lesson-num">${p.examPassed ? "✓" : "📝"}</span>
            <span class="syllabus-lesson-text"><strong>${escapeHtml(lvl.exam.title)}</strong></span>
          </li>` : ""}
      </ol>
    </div>`;
}

function renderSyllabus() {
  root.innerHTML = wrapShell(`
      <div class="section-title">🗂️ ${t("syllabus_title")}</div>
      <p style="color:var(--gray-2);margin-top:-8px">${t("syllabus_intro")}</p>
      <div class="section-title" style="font-size:1rem;margin-top:22px">📚 ${t("sidebar_levels")}</div>
      ${MAIN_SEQUENCE.map(id => syllabusLevelBlockHtml(id, false)).join("")}
      <div class="section-title" style="font-size:1rem;margin-top:22px">${t("dash_bonus")}</div>
      ${BONUS_LEVELS.map(id => syllabusLevelBlockHtml(id, true)).join("")}
      <div class="bottom-space"></div>
    `, "syllabus");
  attachShellEvents();
  document.querySelectorAll("[data-goto-lesson]").forEach(row => {
    row.onclick = () => {
      state.currentLevelId = row.dataset.gotoLevel;
      state.currentLessonId = row.dataset.gotoLesson;
      state.screen = "lesson";
      render();
    };
  });
  document.querySelectorAll(".syllabus-level-head[data-goto-level]").forEach(head => {
    head.onclick = () => { if (head.dataset.gotoLevel) goToLevel(head.dataset.gotoLevel); };
  });
}

/* ---------------------------------------------------------------------- */
/* 11. TELA: LISTA DE LIÇÕES DE UM NÍVEL                                   */
/* ---------------------------------------------------------------------- */
function renderLessonList() {
  const lvl = getLevel(state.currentLevelId);
  const p = levelProgress(state.currentLevelId);
  const unlocked = isLevelUnlocked(state.currentLevelId);
  const idx = MAIN_SEQUENCE.indexOf(state.currentLevelId);
  const prevLvl = idx > 0 ? getLevel(MAIN_SEQUENCE[idx - 1]) : null;
  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">${t("back_modules")}</button>
      <div class="lesson-header">
        <h2>${lvl.icon} ${lvl.name}</h2>
        <div class="sub">${lvl.description}</div>
      </div>
      ${!unlocked ? `<div class="locked-banner">🔒 ${t("level_locked_alert")}${prevLvl ? ` (${prevLvl.name})` : ""} — ${t("level_preview_note")}</div>` : ""}
      ${lvl.lessons.map((lesson, i) => {
        const lp = p.lessonsCompleted && p.lessonsCompleted[lesson.id];
        const done = lp && lp.done;
        const hasReview = done && Array.isArray(lp.review) && lp.review.length > 0;
        const hasEvolution = done && lp.attempts > 1 && lp.firstAttempt;
        return `
        <div class="lesson-row ${done ? "done" : ""} ${!unlocked ? "locked preview-only" : ""}" data-lesson="${unlocked ? lesson.id : ""}">
          <div class="num">${done ? "✓" : !unlocked ? "🔒" : (lesson.order || i + 1)}</div>
          <div class="info"><h4>${escapeHtml(lesson.title)}</h4><span>${escapeHtml(lesson.subtitle || "")}${done ? (hasEvolution ? ` · 📈 ${lp.firstAttempt.score}% → ${lp.score}%` : ` · ✅ ${lp.score}%`) : ""}</span></div>
          ${hasEvolution ? `<button class="btn-icon lesson-review-btn" data-lesson-first="${lesson.id}" title="Ver mi primer intento">🕐</button>` : ""}
          ${hasReview ? `<button class="btn-icon lesson-review-btn" data-lesson-review="${lesson.id}" title="Ver mis respuestas y el gabarito">🔍</button>` : ""}
          <div class="chev">${unlocked ? "›" : ""}</div>
        </div>`;
      }).join("")}
      ${lvl.exam ? `
      <div class="lesson-row exam-row ${!unlocked ? "locked" : ""}" id="go-exam" data-locked="${!unlocked}">
        <div class="num">${unlocked ? (p.examPassed ? "✓" : "📝") : "🔒"}</div>
        <div class="info"><h4>${lvl.exam.title}</h4><span>Nota mínima para aprobar: ${passScoreFor(lvl.id)}%${p.examPassed ? " · ✅ Aprobado con " + p.examScore + "%" : (typeof p.examScore === "number" ? ` · ❌ No aprobado todavía — última nota: ${p.examScore}%` : "")}${p.examAttempts > 1 && p.examFirstAttempt ? ` · 📈 ${p.examFirstAttempt.score}% → ${p.examScore}%` : ""}${matchingInProgress(null, true, lvl.id) ? " · 📍 Prueba en curso" : ""}</span></div>
        ${p.examAttempts > 1 && p.examFirstAttempt ? `<button class="btn-icon lesson-review-btn" data-exam-first="1" title="Ver mi primer intento">🕐</button>` : ""}
        ${Array.isArray(p.examReview) && p.examReview.length ? `<button class="btn-icon lesson-review-btn" data-exam-review="1" title="Ver mis respuestas y el gabarito">🔍</button>` : ""}
        <div class="chev">${unlocked ? "›" : ""}</div>
      </div>` : ""}
      <div class="bottom-space"></div>
    `, "lessonList");
  attachShellEvents();
  document.getElementById("back-dash").onclick = () => { state.screen = "levels"; render(); };
  if (unlocked) {
    document.querySelectorAll(".lesson-row[data-lesson]").forEach(row => {
      if (!row.dataset.lesson) return;
      row.onclick = () => {
        state.currentLessonId = row.dataset.lesson;
        state.screen = "lesson";
        render();
      };
    });
    const examBtn = document.getElementById("go-exam");
    if (examBtn) examBtn.onclick = () => {
      const examIp = matchingInProgress(null, true, state.currentLevelId);
      if (examIp && confirm(`Tienes una prueba en curso (pregunta ${examIp.answers.length + 1}/${examIp.total}). Aceptar para continuar donde la dejaste, o Cancelar para empezar de nuevo.`)) {
        startExam(state.currentLevelId, true);
        return;
      }
      // Si el alumno ya aprobó esta prueba, avisamos antes de dejarlo repetir: la aprobación
      // y la nota más alta quedan guardadas para siempre (ver bugfix en saveExamResult), pero
      // es mejor que sepa de antemano que puede reintentar libremente sin ningún riesgo.
      if (p.examPassed && !confirm(`Ya aprobaste esta prueba con ${p.examScore}%. Puedes repetirla para intentar subir tu nota — tu aprobación ya está garantizada y solo se guardará el mejor resultado. ¿Deseas repetirla ahora?`)) {
        return;
      }
      startExam(state.currentLevelId, false);
    };
  }
  document.querySelectorAll(".lesson-review-btn").forEach(btn => {
    btn.onclick = (ev) => {
      ev.stopPropagation();
      if (btn.dataset.lessonReview) {
        const lesson = lvl.lessons.find(l => l.id === btn.dataset.lessonReview);
        const lp = p.lessonsCompleted[btn.dataset.lessonReview];
        openReview({ title: `✍️ ${lesson ? lesson.title : "Ejercicios"} — ${lvl.name}`, items: lp.review || [], backTo: "lessonList" });
      } else if (btn.dataset.lessonFirst) {
        const lesson = lvl.lessons.find(l => l.id === btn.dataset.lessonFirst);
        const lp = p.lessonsCompleted[btn.dataset.lessonFirst];
        openReview({ title: `🕐 Primer intento — ${lesson ? lesson.title : "Ejercicios"} — ${lvl.name}`, items: (lp.firstAttempt && lp.firstAttempt.review) || [], backTo: "lessonList" });
      } else if (btn.dataset.examReview) {
        openReview({ title: `📝 ${lvl.exam ? lvl.exam.title : "Prueba"} — ${lvl.name}`, items: p.examReview || [], backTo: "lessonList" });
      } else if (btn.dataset.examFirst) {
        openReview({ title: `🕐 Primer intento — ${lvl.exam ? lvl.exam.title : "Prueba"} — ${lvl.name}`, items: (p.examFirstAttempt && p.examFirstAttempt.review) || [], backTo: "lessonList" });
      }
    };
  });
}

/* ---------------------------------------------------------------------- */
/* 12. TELA: VISUALIZAÇÃO DA LIÇÃO (conteúdo antes dos exercícios)         */
/* ---------------------------------------------------------------------- */
function renderLessonView() {
  const lesson = getLesson(state.currentLevelId, state.currentLessonId);
  const lvl = getLevel(state.currentLevelId);
  let html = `
      <button class="back-link" id="back-list">${t("back_to", { name: lvl.name })}</button>
      <div class="lesson-header">
        <h2>${escapeHtml(lesson.title)}</h2>
        <div class="sub">${escapeHtml(lesson.subtitle || "")}</div>
      </div>
      ${lessonHeroImageHtml(lesson.id)}`;

  // Lección de tipo "canción": video de YouTube (embed oficial, sin hospedar audio propio)
  // + la letra completa para leer y escuchar antes de ir a los ejercicios. La letra la
  // pegó el propio administrador en el panel de Canciones — nunca la genera el asistente.
  if (lesson.youtubeId) {
    html += `
      <div class="card">
        <div class="song-video-wrap">
          <iframe src="https://www.youtube.com/embed/${encodeURIComponent(lesson.youtubeId)}" title="${escapeHtml(lesson.title)}"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      ${lesson.lyricsLines && lesson.lyricsLines.length ? `
      <div class="card">
        <h3>🎤 Letra</h3>
        <p style="color:var(--gray-2);font-size:.85rem;margin-top:-6px">Escucha el video y sigue la letra. Después, en los ejercicios, vas a completar los espacios de memoria.</p>
        <div class="song-lyrics">${lesson.lyricsLines.map(l => `<p>${escapeHtml(l)}</p>`).join("")}</div>
      </div>` : ""}`;
  }

  if (lesson.text) {
    // BUGFIX: el texto introductorio de la lección tenía botón de escuchar pero NUNCA tuvo
    // botón de traducción (a diferencia de vocabulario y diálogo) — el campo "textPt" ni
    // siquiera existía en los datos. El usuario lo notó en un módulo y pidió revisar TODOS
    // los módulos: se agregó "textPt" a cada lección con "text" en todos los archivos
    // content-*.js, y aquí se reutiliza exactamente el mismo patrón de botón/estructura
    // que ya se usa en diálogo y vocabulario (mismas clases CSS, mismo toggle show/hide).
    html += `<div class="card"><h3>📖 Texto</h3><div class="dialogue-line" data-fulltext="${escapeHtml(lesson.text)}">
      <div class="bubble">
        <div class="bubble-main">
          <span class="text-content">${wrapWordsForHighlight(lesson.text)}</span>
          <button class="speak-icon-btn" title="Escuchar">🔊</button>
          <button class="translate-toggle-btn" data-translate-toggle="1" title="${t("translate_toggle_title")}">🇧🇷 PT</button>
        </div>
        <div class="translation-text ${lesson.textPt ? "" : "missing"}">${lesson.textPt ? escapeHtml(lesson.textPt) : t("translation_missing")}</div>
      </div></div></div>`;
  }
  if (lesson.dialogue && lesson.dialogue.length) {
    html += `<div class="card dialogue-card">
      <div class="dialogue-card-head">
        <h3>💬 Diálogo</h3>
        <button type="button" class="btn btn-ghost btn-sm play-all-btn" id="play-all-dialogue">▶ ${t("dialogue_play_all")}</button>
      </div>` + lesson.dialogue.map((d, i) => `
      <div class="dialogue-line" data-idx="${i}" data-who="${escapeHtml(d.who)}">
        <div class="who">${escapeHtml(d.who)}</div>
        <div class="bubble">
          <div class="bubble-main">
            <span class="text-content">${wrapWordsForHighlight(d.es)}</span>
            <button class="speak-icon-btn" title="Escuchar">🔊</button>
            <button class="translate-toggle-btn" data-translate-toggle="1" title="${t("translate_toggle_title")}">🇧🇷 PT</button>
          </div>
          <div class="translation-text ${d.pt ? "" : "missing"}">${d.pt ? escapeHtml(d.pt) : t("translation_missing")}</div>
        </div>
      </div>`).join("") + `</div>`;
  }
  if (lesson.vocabulary && lesson.vocabulary.length) {
    html += `<div class="card"><h3>🗂️ Vocabulario</h3>` + lesson.vocabulary.map(group => `
      <div class="vocab-group">
        <h4>${escapeHtml(group.category)}</h4>
        <div class="vocab-chips">
          ${group.items.map(it => `
            <div class="vocab-chip" data-say="${escapeHtml(it.es)}">
              <button class="vocab-speak-btn" title="Escuchar">🔊</button>
              <span>${escapeHtml(it.es)}</span>
              <button class="translate-toggle-btn" data-translate-toggle="1" title="${t("translate_toggle_title")}">🇧🇷 PT</button>
              <div class="translation-text ${it.pt ? "" : "missing"}">${it.pt ? escapeHtml(it.pt) : t("translation_missing")}</div>
            </div>`).join("")}
        </div>
      </div>`).join("") + `</div>`;
  }
  if (lesson.grammar && lesson.grammar.length) {
    html += `<div class="card"><h3>📐 Gramática</h3>` + lesson.grammar.map(g => `
      <h4 style="margin-bottom:6px">${escapeHtml(g.title)}</h4>
      <table class="grammar-table"><thead><tr>${g.headers.map(h => `<th>${escapeHtml(h)}</th>`).join("")}</tr></thead>
      <tbody>${g.rows.map(r => `<tr>${r.map(c => `<td>${escapeHtml(c)}</td>`).join("")}</tr>`).join("")}</tbody></table>
      <br>`).join("") + `</div>`;
  }
  if (lesson.notes && lesson.notes.length) {
    html += `<div class="card"><h3>💡 Notas</h3><ul class="notes-list">${lesson.notes.map(n => `<li>${escapeHtml(n)}</li>`).join("")}</ul></div>`;
  }

  const ip = matchingInProgress(lesson.id, false);
  html += `
      ${ip ? `
      <div class="card continue-progress">
        <div><strong>${t("ex_resume_title")}</strong> — ${t("ex_resume_progress", { cur: ip.answers.length + 1, total: ip.total })}</div>
        <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${Math.round((ip.answers.length / ip.total) * 100)}%"></div></div>
        <div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap">
          <button class="btn btn-primary btn-sm" id="continue-exercises">${t("ex_continue_btn")}</button>
          <button class="btn btn-secondary btn-sm" id="restart-exercises">${t("ex_restart_btn")}</button>
        </div>
      </div>` : ""}
      <div style="text-align:center;margin: 24px 0 40px">
        <button class="btn btn-primary" id="start-exercises" style="padding:16px 34px">${ip ? t("ex_restart_btn") : (lesson.youtubeId ? t("ex_discover_lyrics_btn") : t("start_exercises", { n: lesson.exercises.length }))}${ip || lesson.youtubeId ? ` (${lesson.exercises.length}) →` : ""}</button>
      </div>
      <div class="bottom-space"></div>`;
  root.innerHTML = wrapShell(html, "lesson");
  attachShellEvents();
  state.dialoguePlayingAll = false;
  document.getElementById("back-list").onclick = () => { speechSynthesis.cancel(); state.screen = "lessonList"; render(); };
  const contBtn = document.getElementById("continue-exercises");
  if (contBtn) contBtn.onclick = () => { speechSynthesis.cancel(); startLessonExercises(lesson, true); };
  const restartBtn = document.getElementById("restart-exercises");
  if (restartBtn) restartBtn.onclick = () => { speechSynthesis.cancel(); startLessonExercises(lesson, false); };

  const dialogueVoiceMap = assignDialogueVoiceMap(lesson.dialogue);
  document.querySelectorAll(".dialogue-line").forEach(line => {
    const text = line.dataset.fulltext || (lesson.dialogue && lesson.dialogue[line.dataset.idx] ? lesson.dialogue[line.dataset.idx].es : "");
    attachSpeakButton(line, text, dialogueVoiceMap[line.dataset.who]);
  });
  const playAllBtn = document.getElementById("play-all-dialogue");
  if (playAllBtn) {
    const dialogueCard = playAllBtn.closest(".dialogue-card");
    playAllBtn.onclick = () => playDialogueAll(dialogueCard, playAllBtn, dialogueVoiceMap);
  }
  document.querySelectorAll(".vocab-chip").forEach(chip => {
    chip.querySelector(".vocab-speak-btn").onclick = () => speak(chip.dataset.say, null, null);
  });
  // Mostrar/ocultar traducción: cada botón 🇧🇷 revela (o esconde de nuevo) SOLO su propia
  // línea de traducción, sin afectar a las demás — el alumno decide cuándo quiere ver el
  // português, no aparece automáticamente.
  document.querySelectorAll(".translate-toggle-btn").forEach(btn => {
    btn.onclick = (ev) => {
      ev.stopPropagation();
      const wrap = btn.closest(".vocab-chip, .bubble");
      const txt = wrap ? wrap.querySelector(".translation-text") : null;
      if (txt) txt.classList.toggle("show");
      btn.classList.toggle("active");
    };
  });

  document.getElementById("start-exercises").onclick = () => { speechSynthesis.cancel(); startLessonExercises(lesson); };
}

/* ---------------------------------------------------------------------- */
/* 13. MOTOR DE EXERCÍCIOS                                                 */
/* ---------------------------------------------------------------------- */
function startLessonExercises(lesson, resume) {
  const saved = resume ? matchingInProgress(lesson.id, false) : null;
  state.exerciseQueue = lesson.exercises;
  // El resume se retoma en la PRÓXIMA pregunta sin responder (answers.length), no en el
  // "index" guardado — ese quedó apuntando a la pregunta que ya se había contestado.
  state.exerciseIndex = saved ? Math.min(saved.answers.length, lesson.exercises.length - 1) : 0;
  state.exerciseAnswers = saved ? saved.answers.slice() : [];
  state.exerciseDetails = saved ? saved.details.slice() : [];
  state.isExam = false;
  state.isRetry = false;
  state.screen = "exercises";
  render();
}

function startExam(levelId, resume) {
  const lvl = getLevel(levelId);
  if (!lvl.exam) return;
  const saved = resume ? matchingInProgress(null, true, levelId) : null;
  state.exerciseQueue = lvl.exam.questions;
  state.exerciseIndex = saved ? Math.min(saved.answers.length, lvl.exam.questions.length - 1) : 0;
  state.exerciseAnswers = saved ? saved.answers.slice() : [];
  state.exerciseDetails = saved ? saved.details.slice() : [];
  state.isExam = true;
  state.isRetry = false;
  state.screen = "exam";
  render();
}

function currentExercise() { return state.exerciseQueue[state.exerciseIndex]; }

// Arma la URL del embed de YouTube, con start=/end= cuando la línea tenía marca de tiempo
// [mm:ss] — así el video abre directo en el fragmento del ejercicio. cacheBust (opcional)
// fuerza que el navegador recargue el iframe desde cero (usado por el botón "Repetir").
// autoplay=1 es lo que hace que, al abrir el ejercicio o al tocar "Repetir el fragmento", el
// video arranque solo desde "start" — sin esto el iframe solo queda "preparado" en esa
// posición pero pausado, y visualmente no cambia nada (se ve la miniatura genérica de
// siempre), lo que hacía parecer que el botón "no hacía nada". mute=0 para que suene.
function songEmbedSrc(youtubeId, startSec, endSec, cacheBust) {
  // enablejsapi=1 + origin es lo que permite que initSongPlayer() (más abajo) tome control
  // real del iframe vía la IFrame API — sin esto, "Repetir el fragmento" solo podía
  // reasignar el src entero, lo cual en varios navegadores no reinicia el player interno
  // de YouTube (queda "atascado" donde iba, o directo salta al inicio real de la canción).
  //
  // mute=1 en la carga inicial (NO mute=0): confirmado probando en vivo que Chrome bloquea
  // el autoplay CON sonido cuando no hay un gesto directo del usuario — en ese caso YouTube
  // ni siquiera reproduce, se queda mostrando su propia pantalla "Ver en YouTube" con el
  // video genérico, lo cual hacía parecer que el botón/fragmento "no funcionaba". Arrancar
  // en silencio SIEMPRE se permite, así el video ya abre visualmente en el trecho correcto.
  // El sonido se activa con unMute() dentro del clic de "Repetir el fragmento" (gesto real
  // del usuario → Chrome sí permite audio ahí).
  const params = ["autoplay=1", "mute=1", "playsinline=1", "enablejsapi=1", `origin=${encodeURIComponent(location.origin)}`];
  if (startSec != null) params.push(`start=${Math.max(0, Math.floor(startSec))}`);
  if (endSec != null) params.push(`end=${Math.max(0, Math.floor(endSec))}`);
  if (cacheBust) params.push(`_r=${cacheBust}`);
  return `https://www.youtube.com/embed/${encodeURIComponent(youtubeId)}?${params.join("&")}`;
}

// Reproductores YouTube activos de los ejercicios de canción (uno por frameId), controlados
// por la IFrame API en vez de solo cambiar iframe.src. Guardamos la instancia para que el
// botón "Repetir el fragmento" pueda llamar seekTo()/playVideo() directo — mucho más
// confiable que recargar el iframe entero (que en algunos navegadores no reinicia la
// posición real, o el usuario ve el video saltar al inicio de la canción en vez del trecho).
let _exSongPlayers = {};
function destroySongPlayers() {
  Object.keys(_exSongPlayers).forEach((k) => {
    try { _exSongPlayers[k].destroy(); } catch (e) { /* noop */ }
  });
  _exSongPlayers = {};
}
function initSongPlayer(frameId, startSec, endSec) {
  loadYouTubeIframeAPI().then(() => {
    const el = document.getElementById(frameId);
    if (!el) return; // el alumno ya pasó a otro ejercicio antes de que la API terminara de cargar
    const player = new YT.Player(frameId, {
      events: {
        onReady: (ev) => {
          if (startSec != null) ev.target.seekTo(startSec, true);
          ev.target.playVideo();
        },
        onStateChange: (ev) => {
          // Corta la reproducción al llegar a endSec, sin depender de que el parámetro
          // "end" de la URL se vuelva a aplicar después de un seekTo() manual.
          if (endSec == null || ev.data !== YT.PlayerState.PLAYING) return;
          const check = setInterval(() => {
            if (_exSongPlayers[frameId] !== player) { clearInterval(check); return; }
            let t = 0;
            try { t = ev.target.getCurrentTime(); } catch (e) { clearInterval(check); return; }
            if (t >= endSec - 0.15) { try { ev.target.pauseVideo(); } catch (e) {} clearInterval(check); }
          }, 250);
        },
      },
    });
    _exSongPlayers[frameId] = player;
  });
}

// Bloque de video reutilizado en los ejercicios "fill"(canción) y "songListen". Cuando hay
// startSec (la línea tenía [mm:ss]), agrega un botón "Repetir el fragmento" — reasignar el
// mismo start/end al iframe no siempre recarga en todos los navegadores, por eso el botón
// suma un parámetro cacheBust distinto cada vez para forzar la recarga real (y el autoplay
// hace que directamente vuelva a sonar desde el inicio del trecho, sin un segundo clic).
function songFragmentHtml(frameId, youtubeId, startSec, endSec) {
  // El video arranca SIEMPRE mudo (ver songEmbedSrc) porque es la única forma de que el
  // autoplay funcione de manera confiable en todos los navegadores. Por eso este botón ya
  // no es solo "repetir" — es también la forma de activar el sonido la primera vez, ya que
  // el clic es un gesto real del usuario y el navegador sí permite audio ahí dentro.
  const label = startSec != null ? "🔊 Escuchar el fragmento" : "🔊 Activar sonido";
  return `
    <div class="song-video-wrap">
      <iframe id="${frameId}" src="${songEmbedSrc(youtubeId, startSec, endSec)}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <button class="btn btn-secondary btn-sm song-replay-btn" type="button" id="${frameId}-replay">${label}</button>`;
}

const EX_TYPE_BADGE = {
  mc: "🔠 Opción múltiple", fill: "✏️ Completar", translate: "🔁 Traducción", listen: "🎧 Escucha",
  songListen: "🎧 Dictado musical", speak: "🎙️ Pronunciación", order: "🔀 Ordenar", open: "✍️ Respuesta libre",
};

function renderExercise() {
  clearAutoAdvance(); // cualquier temporizador de la pantalla anterior queda obsoleto en este render
  destroySongPlayers(); // el iframe de la canción anterior ya no existe en el DOM tras el re-render
  const ex = currentExercise();
  const total = state.exerciseQueue.length;
  const idx = state.exerciseIndex;
  let body = "";
  // Botón 🔊 opcional junto al enunciado: lee en voz alta (Web Speech API) el texto en
  // español de la pregunta, cuando lo hay. En "translate" pt→es no hay texto en español
  // todavía (el alumno lo tiene que escribir), así que ahí no se ofrece.
  const ttsSource = ex.type === "mc" ? ex.q
    : ex.type === "fill" ? ex.q
    : (ex.type === "translate" && ex.from !== "pt") ? ex.text
    : ex.type === "order" ? (ex.correctOrder || []).map(i => ex.items[i]).join(". ") : "";
  const ttsBtnHtml = ttsSource ? `<button class="tts-btn" id="ex-tts" type="button" title="Escuchar">🔊</button>` : "";

  if (ex.type === "mc") {
    body = `
      <div class="ex-question">${escapeHtml(ex.q)} ${ttsBtnHtml}</div>
      <div class="ex-options">
        ${ex.options.map((opt, i) => `<button class="ex-option" data-i="${i}">${escapeHtml(opt)}</button>`).join("")}
      </div>
      <div id="ex-feedback"></div>
      <div class="ex-actions"><button class="btn btn-primary" id="ex-next" disabled>${t("ex_next")}</button></div>`;
  } else if (ex.type === "fill" || ex.type === "translate") {
    const label = ex.type === "translate" ? `Traduce${ex.from === "pt" ? " (Português → Español)" : " (Español → Português)"}: ${escapeHtml(ex.text)}` : escapeHtml(ex.q);
    const fillInner = `
      <div class="ex-question">${label} ${ttsBtnHtml}</div>
      ${ex.youtubeId ? `<p class="ex-hint">🔇 ${ex.startSec != null ? "El video ya abrió en el fragmento de este hueco" : "Puedes escuchar la canción mientras completas el hueco"}, pero empieza SIN sonido (los navegadores bloquean el audio automático) — toca "${ex.startSec != null ? "Escuchar el fragmento" : "Activar sonido"}" cuantas veces quieras.</p>` : ""}
      <input type="text" class="ex-input" id="ex-answer" placeholder="Escribe tu respuesta aquí..." autocomplete="off">
      <div class="ex-actions"><button class="btn btn-secondary btn-sm" id="ex-check">${t("ex_check")}</button><button class="btn btn-primary" id="ex-next">${t("ex_next")}</button></div>
      <div id="ex-feedback"></div>`;
    body = ex.youtubeId ? `
      <div class="song-ex-split">
        <div class="song-ex-video">${songFragmentHtml("song-fill-frame", ex.youtubeId, ex.startSec, ex.endSec)}</div>
        <div class="song-ex-content">${fillInner}</div>
      </div>` : fillInner;
  } else if (ex.type === "listen") {
    body = `
      <div class="ex-question">🎧 ${escapeHtml(ex.q)}</div>
      <div style="text-align:center;margin-bottom:18px"><button class="mic-btn" id="ex-play" style="background:var(--rojo)">🔊</button></div>
      <input type="text" class="ex-input" id="ex-answer" placeholder="Tu respuesta..." autocomplete="off">
      <div class="ex-actions"><button class="btn btn-secondary btn-sm" id="ex-check">${t("ex_check")}</button><button class="btn btn-primary" id="ex-next">${t("ex_next")}</button></div>
      <div id="ex-feedback"></div>`;
  } else if (ex.type === "songListen") {
    // Dictado con la canción real: el alumno usa los controles nativos del video de
    // YouTube (reproducir/rebobinar) para escuchar cuantas veces quiera y escribe lo que
    // entiende. Se valida con la misma tolerancia que "listen" (transcripción libre).
    body = `
      <div class="song-ex-split">
        <div class="song-ex-video">${songFragmentHtml("song-listen-frame", ex.youtubeId, ex.startSec, ex.endSec)}</div>
        <div class="song-ex-content">
          <div class="ex-question">🎧 ${escapeHtml(ex.q || "Escucha la canción y escribe lo que oyes en este fragmento.")}</div>
          <p class="ex-hint">🔇 El video abre sin sonido — toca "${ex.startSec != null ? "Escuchar el fragmento" : "Activar sonido"}" para escuchar.</p>
          <input type="text" class="ex-input" id="ex-answer" placeholder="Escribe lo que escuchas..." autocomplete="off">
          <div class="ex-actions"><button class="btn btn-secondary btn-sm" id="ex-check">${t("ex_check")}</button><button class="btn btn-primary" id="ex-next">${t("ex_next")}</button></div>
          <div id="ex-feedback"></div>
        </div>
      </div>`;
  } else if (ex.type === "speak") {
    body = `
      <div class="ex-question">🎙️ ${escapeHtml(ex.prompt)}</div>
      <div class="speak-target">"${escapeHtml(ex.target)}"</div>
      <div style="text-align:center"><button class="mic-btn" id="ex-mic">🎤</button></div>
      <div class="speak-transcript" id="ex-transcript"></div>
      <div id="ex-feedback"></div>
      <div class="ex-actions"><button class="btn btn-secondary btn-sm" id="ex-skip">${t("ex_skip")}</button><button class="btn btn-primary" id="ex-next" disabled>${t("ex_next")}</button></div>`;
  } else if (ex.type === "order") {
    body = `
      <div class="ex-question">Ordena el diálogo (haz clic en orden): ${ttsBtnHtml}</div>
      <div id="order-list">${ex.items.map((it, i) => `<div class="order-item" data-i="${i}">${escapeHtml(it)}</div>`).join("")}</div>
      <div id="ex-feedback"></div>
      <div class="ex-actions"><button class="btn btn-secondary btn-sm" id="ex-check">${t("ex_check")}</button><button class="btn btn-primary" id="ex-next">${t("ex_next")}</button></div>`;
  } else if (ex.type === "open") {
    body = `
      <div class="ex-question">✍️ ${escapeHtml(ex.q)}</div>
      <textarea class="ex-input" id="ex-answer" rows="3" placeholder="Escribe tu respuesta..."></textarea>
      ${isGabaritoImmediate()
        ? `<div class="ex-feedback ok">Respuesta modelo: <em>${escapeHtml(ex.sample || "")}</em></div>`
        : `<div class="ex-feedback neutral">📝 Vas a poder comparar tu respuesta con la respuesta modelo en la Revisión, al terminar.</div>`}
      <div class="ex-actions"><button class="btn btn-primary" id="ex-next">${t("ex_next")}</button></div>`;
  }

  const correctSoFar = state.exerciseAnswers.filter(Boolean).length;
  const answeredSoFar = state.exerciseAnswers.length;
  let streak = 0;
  for (let i = state.exerciseAnswers.length - 1; i >= 0; i--) { if (state.exerciseAnswers[i]) streak++; else break; }
  const heroImg = exerciseImageHtml(state.isExam ? null : state.currentLessonId, idx);

  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-exit">✕ Salir</button>
      <div class="card exercise-card">
        <div class="ex-topline">
          <div class="ex-progress">${state.isRetry ? "🔁 Repaso" : state.isExam ? "Prueba" : "Ejercicio"} ${idx + 1} / ${total} <span class="ex-type-badge">${EX_TYPE_BADGE[ex.type] || ""}</span></div>
          <div class="ex-scoreboard" id="ex-scoreboard">✅ ${correctSoFar}/${answeredSoFar} ${streak >= 2 ? `· 🔥 racha ${streak}` : ""}</div>
        </div>
        <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${Math.round(((idx) / total) * 100)}%"></div></div>
        ${heroImg}
        ${body}
      </div>
      <div class="bottom-space"></div>
    `, state.isExam ? "exam" : "exercises");
  attachShellEvents();
  document.getElementById("back-exit").onclick = () => {
    clearAutoAdvance();
    if (state.isRetry || (idx === 0 && state.exerciseAnswers.length === 0)) {
      state.screen = "lessonList";
      render();
      return;
    }
    if (confirm("Tu progreso se guarda automáticamente. Vas a poder continuar donde lo dejaste. ¿Salir ahora?")) {
      state.screen = "lessonList";
      render();
    }
  };
  const ttsBtn = document.getElementById("ex-tts");
  if (ttsBtn && ttsSource) ttsBtn.onclick = () => speak(ttsSource.replace(/_{2,}/g, "..."), null, ttsBtn);

  // Video + botón "Escuchar el fragmento". Arrancamos el reproductor vía IFrame API
  // (initSongPlayer) para poder controlar la posición con seekTo() en vez de recargar el
  // iframe entero. El video siempre carga MUDO (ver songEmbedSrc) porque confirmé probando
  // en vivo que Chrome bloquea el autoplay con sonido sin un gesto del usuario — el video ni
  // siquiera arrancaba, quedaba en la pantalla "Ver en YouTube" de YouTube, lo que parecía
  // que el botón "no hacía nada". Por eso este clic (que SÍ es un gesto real del usuario)
  // llama unMute() antes de reproducir — ahí el navegador sí permite el audio.
  ["song-fill-frame", "song-listen-frame"].forEach((frameId) => {
    const frame = document.getElementById(frameId);
    if (!frame) return;
    initSongPlayer(frameId, ex.startSec, ex.endSec);
    const replayBtn = document.getElementById(`${frameId}-replay`);
    if (replayBtn) replayBtn.onclick = () => {
      const player = _exSongPlayers[frameId];
      if (player && typeof player.seekTo === "function") {
        try { player.unMute(); } catch (e) { /* noop */ }
        player.seekTo(ex.startSec != null ? ex.startSec : 0, true);
        player.playVideo();
      } else {
        // Respaldo si la API todavía no terminó de cargar/enlazar el reproductor.
        const fr = document.getElementById(frameId);
        if (fr) fr.src = songEmbedSrc(ex.youtubeId, ex.startSec, ex.endSec, Date.now());
      }
    };
  });

  wireExerciseInteractions(ex);
}

function updateScoreboard() {
  const el = document.getElementById("ex-scoreboard");
  if (!el) return;
  const correctSoFar = state.exerciseAnswers.filter(Boolean).length;
  const answeredSoFar = state.exerciseAnswers.length;
  let streak = 0;
  for (let i = state.exerciseAnswers.length - 1; i >= 0; i--) { if (state.exerciseAnswers[i]) streak++; else break; }
  el.innerHTML = `✅ ${correctSoFar}/${answeredSoFar} ${streak >= 2 ? `· 🔥 racha ${streak}` : ""}`;
}

function markAnswered(correct) {
  state.exerciseAnswers.push(correct);
  const nextBtn = document.getElementById("ex-next");
  if (nextBtn) nextBtn.disabled = false;
  updateScoreboard();
  persistExerciseProgress();
}

// Guarda el punto exacto donde el alumno está dentro de un ejercicio/prueba en curso, para
// poder ofrecer "Continuar donde lo dejaste" si sale y vuelve más tarde. Se llama después de
// cada respuesta — es "fire and forget" (no bloquea la interacción ni espera confirmación).
// Las sesiones de repaso (isRetry) no se guardan: son práctica libre, no un avance oficial.
function persistExerciseProgress() {
  if (!state.user || state.isRetry || !state.progress) return;
  const snapshot = {
    levelId: state.currentLevelId,
    lessonId: state.isExam ? null : (state.currentLessonId || null),
    isExam: !!state.isExam,
    index: state.exerciseIndex,
    answers: state.exerciseAnswers.slice(),
    details: state.exerciseDetails.slice(),
    total: state.exerciseQueue.length,
    updatedAt: Date.now(),
  };
  state.progress.inProgress = snapshot;
  db.collection("progress").doc(state.user.uid).update({ inProgress: snapshot })
    .catch(e => console.warn("No se pudo guardar el progreso del ejercicio.", e));
}

async function clearInProgress() {
  if (!state.progress) return;
  state.progress.inProgress = null;
  if (!state.user) return;
  try {
    await db.collection("progress").doc(state.user.uid).update({ inProgress: firebase.firestore.FieldValue.delete() });
  } catch (e) { console.warn(e); }
}

// Devuelve el snapshot guardado si corresponde exactamente a esta lección/prueba y tiene
// al menos una respuesta ya dada (si index=0 y sin respuestas, no hay nada que retomar).
function matchingInProgress(lessonId, isExam, levelId) {
  const ip = state.progress && state.progress.inProgress;
  if (!ip || ip.isExam !== !!isExam) return null;
  if (isExam) { if (ip.levelId !== levelId) return null; }
  else { if (ip.lessonId !== lessonId || ip.levelId !== state.currentLevelId) return null; }
  if (!ip.answers || ip.answers.length === 0) return null;
  if (ip.answers.length >= (ip.total || 0)) return null; // ya había respondido todo — no hay nada que retomar
  return ip;
}

// Registra cada intento de ejercicio en Firestore (colección "attempts"), para alimentar
// los dashboards de analíticas (propios y del admin): qué se acertó/erró, de qué tipo, en qué nivel/lección.
function logAttempt(ex, correct, answerText) {
  // Guarda el detalle de esta pregunta (tu respuesta + el gabarito) para la pantalla de
  // Revisión que se muestra al terminar el ejercicio/prueba — independiente de si el
  // feedback se reveló en el momento o no (eso lo decide isGabaritoImmediate()).
  state.exerciseDetails.push({
    type: ex.type,
    question: questionTextOf(ex),
    userAnswer: ((answerText || "") + "").slice(0, 400),
    correctAnswer: (correctAnswerText(ex) + "").slice(0, 400),
    correct: !!correct,
  });
  try {
    if (!state.user) return;
    db.collection("attempts").add({
      uid: state.user.uid,
      levelId: state.currentLevelId || null,
      lessonId: state.isExam ? null : (state.currentLessonId || null),
      isExam: !!state.isExam,
      exType: ex.type,
      correct: !!correct,
      question: ((ex.q || ex.text || ex.prompt || "") + "").slice(0, 200),
      answerText: ((answerText || "") + "").slice(0, 200),
      at: firebase.firestore.FieldValue.serverTimestamp(),
    }).catch(e => console.warn("No se pudo registrar el intento (analíticas).", e));
  } catch (e) { console.warn(e); }
}

function showFeedback(correct, correctText) {
  const fb = document.getElementById("ex-feedback");
  if (!fb) return;
  if (!isGabaritoImmediate()) {
    fb.innerHTML = `<div class="ex-feedback neutral">📝 Respuesta registrada. Vas a ver el gabarito en la Revisión, al terminar.</div>`;
    return;
  }
  fb.innerHTML = correct
    ? `<div class="ex-feedback ok">✅ ¡Correcto!</div>`
    : `<div class="ex-feedback bad">❌ La respuesta correcta es: <strong>${escapeHtml(correctText)}</strong></div>`;
}

function wireExerciseInteractions(ex) {
  const nextBtn = document.getElementById("ex-next");
  // answered: controla el comportamiento del botón "Siguiente" para los tipos que tienen
  // un "Comprobar" separado — el primer clic en "Siguiente" (antes de comprobar) EJECUTA
  // la comprobación (igual que el botón "Comprobar"), deja el feedback visible ~5s y avanza
  // solo; un clic manual posterior (o en "Comprobar") avanza/reprograma de inmediato.
  let answered = false;
  if (nextBtn) nextBtn.onclick = () => {
    if (answered) { clearAutoAdvance(); goToNextExercise(); }
  };

  // Preguntas abiertas/dissertativas: no se auto-corrigen, pero SÍ deben quedar registradas
  // (el alumno tiene que poder consultar después lo que escribió — antes no se guardaba nada).
  if (ex.type === "open") {
    if (nextBtn) nextBtn.onclick = () => {
      const ta = document.getElementById("ex-answer");
      const val = ta ? ta.value.trim() : "";
      markAnswered(true);
      logAttempt(ex, true, val || "(sin respuesta)");
      goToNextExercise();
    };
  }

  if (ex.type === "mc") {
    document.querySelectorAll(".ex-option").forEach(btn => {
      btn.onclick = () => {
        if (btn.disabled) return;
        document.querySelectorAll(".ex-option").forEach(b => b.disabled = true);
        const i = parseInt(btn.dataset.i, 10);
        const correct = i === ex.correct;
        if (isGabaritoImmediate()) {
          btn.classList.add(correct ? "correct" : "incorrect");
          if (!correct) {
            document.querySelectorAll(".ex-option")[ex.correct].classList.add("correct");
          }
        } else {
          btn.classList.add("selected-neutral");
        }
        showFeedback(correct, ex.options[ex.correct]);
        markAnswered(correct);
        logAttempt(ex, correct, ex.options[i]);
        answered = true;
        scheduleAutoAdvance(5000);
      };
    });
  }

  if (ex.type === "fill" || ex.type === "translate") {
    const doCheck = () => {
      const val = document.getElementById("ex-answer").value;
      const target = ex.answer;
      const alts = ex.altAnswers || [];
      const correct = similarity(val, target) > 0.82 || alts.some(a => similarity(val, a) > 0.82);
      showFeedback(correct, target);
      markAnswered(correct);
      logAttempt(ex, correct, val);
      document.getElementById("ex-answer").disabled = true;
      document.getElementById("ex-check").disabled = true;
      answered = true;
      scheduleAutoAdvance(5000);
    };
    document.getElementById("ex-check").onclick = doCheck;
    if (nextBtn) nextBtn.onclick = () => { if (answered) { clearAutoAdvance(); goToNextExercise(); } else { doCheck(); } };
  }

  if (ex.type === "listen") {
    document.getElementById("ex-play").onclick = () => speak(ex.audioText, null, document.getElementById("ex-play"));
    const doCheck = () => {
      const val = document.getElementById("ex-answer").value;
      const correct = similarity(val, ex.answer) > 0.6; // resposta livre/descritiva, mais tolerante
      showFeedback(correct, ex.answer);
      markAnswered(correct);
      logAttempt(ex, correct, val);
      document.getElementById("ex-answer").disabled = true;
      document.getElementById("ex-check").disabled = true;
      answered = true;
      scheduleAutoAdvance(5000);
    };
    document.getElementById("ex-check").onclick = doCheck;
    if (nextBtn) nextBtn.onclick = () => { if (answered) { clearAutoAdvance(); goToNextExercise(); } else { doCheck(); } };
  }

  if (ex.type === "songListen") {
    // Sin botón de reproducir propio: el alumno usa los controles nativos del iframe de
    // YouTube (puede rebobinar y escuchar el fragmento las veces que quiera).
    const doCheck = () => {
      const val = document.getElementById("ex-answer").value;
      const correct = similarity(val, ex.answer) > 0.55; // dictado de canción real: más tolerante que TTS
      showFeedback(correct, ex.answer);
      markAnswered(correct);
      logAttempt(ex, correct, val);
      document.getElementById("ex-answer").disabled = true;
      document.getElementById("ex-check").disabled = true;
      answered = true;
      scheduleAutoAdvance(5000);
    };
    document.getElementById("ex-check").onclick = doCheck;
    if (nextBtn) nextBtn.onclick = () => { if (answered) { clearAutoAdvance(); goToNextExercise(); } else { doCheck(); } };
  }

  if (ex.type === "order") {
    const chosen = [];
    document.querySelectorAll(".order-item").forEach(item => {
      item.onclick = () => {
        if (item.classList.contains("chosen")) return;
        chosen.push(parseInt(item.dataset.i, 10));
        item.classList.add("chosen");
        item.innerHTML = `${chosen.length}. ${item.innerHTML}`;
      };
    });
    const doCheck = () => {
      const correct = JSON.stringify(chosen) === JSON.stringify(ex.correctOrder);
      showFeedback(correct, "Orden correcto aplicado.");
      markAnswered(correct);
      logAttempt(ex, correct, chosen.join(" → "));
      document.getElementById("ex-check").disabled = true;
      answered = true;
      scheduleAutoAdvance(5000);
    };
    document.getElementById("ex-check").onclick = doCheck;
    if (nextBtn) nextBtn.onclick = () => { if (answered) { clearAutoAdvance(); goToNextExercise(); } else { doCheck(); } };
  }

  if (ex.type === "speak") {
    const micBtn = document.getElementById("ex-mic");
    const transcriptEl = document.getElementById("ex-transcript");
    const rec = getSpeechRecognition();
    document.getElementById("ex-skip").onclick = () => {
      markAnswered(true); showFeedback(true, ex.target); logAttempt(ex, true, "(omitido)");
      document.getElementById("ex-skip").disabled = true;
      answered = true;
      scheduleAutoAdvance(5000);
    };
    if (!rec) {
      micBtn.disabled = true;
      transcriptEl.textContent = "Tu navegador no soporta reconocimiento de voz. Usa Google Chrome en computadora o Android, o haz clic en 'No puedo grabar ahora'.";
    } else {
      micBtn.onclick = () => {
        micBtn.classList.add("listening");
        transcriptEl.textContent = "Escuchando...";
        rec.start();
      };
      rec.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        transcriptEl.textContent = `Escuchamos: "${transcript}"`;
        const correct = similarity(transcript, ex.target) > 0.55;
        showFeedback(correct, ex.target);
        markAnswered(correct);
        logAttempt(ex, correct, transcript);
        micBtn.classList.remove("listening");
        answered = true;
        scheduleAutoAdvance(5000);
      };
      rec.onerror = () => { micBtn.classList.remove("listening"); transcriptEl.textContent = "No se pudo escuchar. Intenta de nuevo o usa 'No puedo grabar ahora'."; };
      rec.onend = () => micBtn.classList.remove("listening");
    }
  }
}

// Auto-avance: después de responder (por "Comprobar" o directamente por "Siguiente"),
// el feedback queda visible en pantalla unos segundos y luego se avanza solo — el alumno
// ya no necesita dar dos clics (uno para comprobar, otro para seguir). Un clic manual en
// "Siguiente" en cualquier momento cancela la espera y avanza de inmediato.
let _autoAdvanceTimer = null;
function scheduleAutoAdvance(delayMs) {
  clearAutoAdvance();
  _autoAdvanceTimer = setTimeout(() => { _autoAdvanceTimer = null; goToNextExercise(); }, delayMs);
}
function clearAutoAdvance() {
  if (_autoAdvanceTimer) { clearTimeout(_autoAdvanceTimer); _autoAdvanceTimer = null; }
}

function goToNextExercise() {
  clearAutoAdvance();
  if (state.exerciseIndex < state.exerciseQueue.length - 1) {
    state.exerciseIndex++;
    render();
  } else {
    finishExerciseSet();
  }
}

async function finishExerciseSet() {
  const correctCount = state.exerciseAnswers.filter(Boolean).length;
  const total = state.exerciseQueue.length;
  const score = total ? Math.round((correctCount / total) * 100) : 100;
  const review = state.exerciseDetails.slice();
  // Preguntas erradas de esta ronda, guardadas como objetos completos (no solo texto) para
  // poder relanzarlas tal cual en un "Repasar lo que fallé" desde la pantalla de resultado.
  const wrongItems = state.exerciseQueue.filter((_, i) => state.exerciseAnswers[i] === false);

  await clearInProgress();

  if (state.isRetry) {
    // Sesión de repaso de errores: es práctica libre, no vuelve a guardar nota ni XP.
    state.lastResult = {
      score, passed: true, levelId: state.currentLevelId, isExam: state.isExam,
      lessonId: state.currentLessonId, review, wrongItems, isRetry: true,
    };
    state.isRetry = false;
    state.screen = "result";
    render();
    return;
  }

  if (state.isExam) {
    const passScore = passScoreFor(state.currentLevelId);
    const passed = score >= passScore;
    await saveExamResult(state.currentLevelId, score, passed, review);
    state.lastResult = { score, passed, levelId: state.currentLevelId, isExam: true, review, wrongItems };
  } else {
    await saveLessonResult(state.currentLevelId, state.currentLessonId, score, review);
    state.lastResult = { score, passed: true, levelId: state.currentLevelId, isExam: false, lessonId: state.currentLessonId, review, wrongItems };
  }
  state.screen = "result";
  render();
}

async function saveLessonResult(levelId, lessonId, score, review) {
  const ref = db.collection("progress").doc(state.user.uid);
  const field = `levels.${levelId}.lessonsCompleted.${lessonId}`;
  const xpGain = 10 + Math.round(score / 10);
  const prevEntry = state.progress.levels[levelId] && state.progress.levels[levelId].lessonsCompleted && state.progress.levels[levelId].lessonsCompleted[lessonId];
  // Preserva el PRIMER intento (nota + gabarito) aunque el alumno rehaga la lección entera
  // más adelante y su resultado oficial cambie — así puede comparar "cómo empecé" vs "cómo
  // estoy ahora" y ver su evolución real, no solo el último resultado.
  const firstAttempt = (prevEntry && prevEntry.firstAttempt) ? prevEntry.firstAttempt : { score, review: review || [] };
  const attempts = (prevEntry && prevEntry.attempts ? prevEntry.attempts : 0) + 1;
  const entry = { done: true, score, review: review || [], at: firebase.firestore.FieldValue.serverTimestamp(), firstAttempt, attempts };
  await ref.update({
    [field]: entry,
    xp: firebase.firestore.FieldValue.increment(xpGain)
  });
  if (!state.progress.levels[levelId]) state.progress.levels[levelId] = { lessonsCompleted: {} };
  if (!state.progress.levels[levelId].lessonsCompleted) state.progress.levels[levelId].lessonsCompleted = {};
  state.progress.levels[levelId].lessonsCompleted[lessonId] = { ...entry, at: new Date() };
  state.progress.xp = (state.progress.xp || 0) + xpGain;
  await updateProgressSummary();
}

// Resumen público usado por el panel de Admin ("Alumnos"/"Analíticas") para listar a
// TODOS los usuarios con actividad — antes solo se creaba/actualizaba al completar una
// prueba, por lo que alguien que solo hizo lecciones (incluido un admin estudiando su
// propio curso) nunca aparecía en "Alumnos". Ahora se actualiza también al completar
// cualquier lección, para cualquier rol (admin o aluno), reflejando actividad real.
async function updateProgressSummary() {
  try {
    await db.collection("progress_summary").doc(state.user.uid).set({
      name: state.user.name, email: state.user.email,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      xp: state.progress.xp,
      levels: Object.fromEntries(Object.entries(state.progress.levels).map(([k, v]) => [k, { examScore: v.examScore || null, examPassed: !!v.examPassed }])),
      // Datos del cronograma del alumno + su avance real (en "unidades" = lecciones + pruebas),
      // guardados aquí para que el Admin pueda calcular, para CADA alumno, si está adelantado,
      // atrasado o en plazo respecto a lo que él mismo planeó — sin necesitar leer su progreso completo.
      schedule: getSchedule(),
      unitsCompleted: actualUnitsCompleted(),
      // Copia del estado de pago (plan/status), para que Admin → Alumnos pueda mostrar el
      // badge de pago sin tener que leer la colección "users" alumno por alumno. La fuente
      // de verdad sigue siendo users/{uid}.subscription (actualizada por el webhook del
      // Mercado Pago vía Cloud Function); acá guardamos una copia liviana.
      subscription: state.subscription || null,
      status: state.user.status || "approved",
      // Foto del alumno (ya redimensionada a ~480px/JPEG antes de guardarse) — espejada
      // acá para que Admin → Alumnos pueda mostrar el avatar sin leer "users" uno por uno.
      photoData: state.user.photoData || null
    }, { merge: true });
  } catch (e) { console.warn("No se pudo actualizar el resumen para el admin.", e); }
}

async function saveExamResult(levelId, score, passed, review) {
  const ref = db.collection("progress").doc(state.user.uid);
  const idx = MAIN_SEQUENCE.indexOf(levelId);
  const nextId = idx >= 0 ? MAIN_SEQUENCE[idx + 1] : null;
  const prevLevel = state.progress.levels[levelId];
  const wasPassed = !!(prevLevel && prevLevel.examPassed);
  // BUGFIX: una vez que el alumno aprobó la prueba de una etapa, esa aprobación queda
  // definitiva — un reintento posterior (para intentar subir la nota, o por error) con
  // una nota más baja NO puede "reprovarlo" de nuevo. Antes esto sobreescribía siempre
  // examScore/examPassed con el último intento, así que un segundo intento peor borraba
  // la aprobación ya obtenida (el nivel volvía a mostrar "Prueba pendiente" y el botón
  // de certificado desaparecía). Ahora se guarda el MEJOR resultado: passed nunca vuelve
  // a false, y la nota registrada es la más alta entre la anterior y la nueva.
  const finalPassed = passed || wasPassed;
  const finalScore = wasPassed && typeof prevLevel.examScore === "number" ? Math.max(prevLevel.examScore, score) : score;
  const xpGain = passed ? 50 : 5;
  // Igual que en las lecciones: guarda el primer intento de la prueba (nota + gabarito) una
  // sola vez, sin sobreescribirlo en los siguientes intentos, para poder mostrar la evolución.
  const examFirstAttempt = (prevLevel && prevLevel.examFirstAttempt)
    ? prevLevel.examFirstAttempt
    : (prevLevel && prevLevel.examScore != null ? { score: prevLevel.examScore, passed: !!prevLevel.examPassed, review: prevLevel.examReview || [] } : { score, passed, review: review || [] });
  const examAttempts = (prevLevel && prevLevel.examAttempts ? prevLevel.examAttempts : 0) + 1;
  const updates = {
    [`levels.${levelId}.examScore`]: finalScore,
    [`levels.${levelId}.examPassed`]: finalPassed,
    [`levels.${levelId}.examReview`]: review || [],
    [`levels.${levelId}.examFirstAttempt`]: examFirstAttempt,
    [`levels.${levelId}.examAttempts`]: examAttempts,
    xp: firebase.firestore.FieldValue.increment(xpGain)
  };
  if (finalPassed && nextId) updates[`levels.${nextId}.unlocked`] = true;
  await ref.update(updates);

  if (!state.progress.levels[levelId]) state.progress.levels[levelId] = {};
  state.progress.levels[levelId].examScore = finalScore;
  state.progress.levels[levelId].examPassed = finalPassed;
  state.progress.levels[levelId].examReview = review || [];
  state.progress.levels[levelId].examFirstAttempt = examFirstAttempt;
  state.progress.levels[levelId].examAttempts = examAttempts;
  state.progress.xp = (state.progress.xp || 0) + xpGain;
  if (finalPassed && nextId) {
    if (!state.progress.levels[nextId]) state.progress.levels[nextId] = {};
    state.progress.levels[nextId].unlocked = true;
  }

  await updateProgressSummary();
}

/* ---------------------------------------------------------------------- */
/* 13b. TELA: MIS NOTAS (aprovechamiento + cumplimiento del cronograma)     */
/* ---------------------------------------------------------------------- */
function renderNotas() {
  const aprov = computeAproveitamento();
  const sc = computeScheduleStatus();
  const statusLabelKey = sc.status === "ahead" ? "panel_schedule_ahead" : sc.status === "behind" ? "panel_schedule_behind" : "panel_schedule_ontrack";
  const rows = COURSE_LEVELS.map(lvl => {
    const p = levelProgress(lvl.id);
    const status = levelGradeStatus(lvl.id);
    const doneCount = p.lessonsCompleted ? Object.values(p.lessonsCompleted).filter(l => l && l.done).length : 0;
    const lessonScores = p.lessonsCompleted ? Object.values(p.lessonsCompleted).filter(l => l && typeof l.score === "number").map(l => l.score) : [];
    const avgLessons = lessonScores.length ? Math.round(lessonScores.reduce((a, b) => a + b, 0) / lessonScores.length) : null;
    const statusKey = status === "passed" ? "notas_status_passed" : status === "failed" ? "notas_status_failed"
      : status === "progress" ? "notas_status_progress" : status === "locked" ? "notas_status_locked" : "notas_status_pending";
    const hasExamReview = Array.isArray(p.examReview) && p.examReview.length > 0;
    return `
      <tr class="${status === "locked" ? "row-locked" : ""}">
        <td>${lvl.icon} ${lvl.name}</td>
        <td>${doneCount} / ${lvl.lessons.length}</td>
        <td>${avgLessons !== null ? avgLessons + "%" : "—"}</td>
        <td>${typeof p.examScore === "number" ? p.examScore + "%" : "—"}</td>
        <td><span class="badge-status status-${status}">${t(statusKey)}</span></td>
        <td>${hasExamReview ? `<button class="btn-icon notas-review-btn" data-level="${lvl.id}" title="Ver mis respuestas y el gabarito">🔍</button>` : "—"}</td>
      </tr>`;
  }).join("");

  root.innerHTML = wrapShell(`
      <div class="section-title">${t("notas_title")}</div>
      <div class="home-stats-row">
        <div class="home-stat-card highlight">
          <span class="hs-label">${t("notas_aproveitamento_label")}</span>
          <strong class="hs-value">${aprov ? aprov.avg + "%" : "—"}</strong>
          <span class="hs-sub">${aprov ? t("notas_aproveitamento_sub", { n: aprov.count }) : t("notas_no_data")}</span>
        </div>
        <div class="home-stat-card status-${sc.status}">
          <span class="hs-label">${t("notas_schedule_label")}</span>
          <strong class="hs-value">${sc.actualPct}%</strong>
          <span class="hs-sub">${t(statusLabelKey)} · ${t("schedule_expected", { pct: sc.expectedPct })}</span>
        </div>
      </div>
      <div class="card">
        <table class="notas-table">
          <thead><tr>
            <th>${t("notas_level_col")}</th><th>${t("notas_lessons_col")}</th><th>${t("notas_avg_col")}</th><th>${t("notas_exam_col")}</th><th>${t("notas_status_col")}</th><th>Revisión</th>
          </tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
      <div class="bottom-space"></div>
    `, "notas");
  attachShellEvents();
  document.querySelectorAll(".notas-review-btn").forEach(btn => {
    btn.onclick = () => {
      const lvl = getLevel(btn.dataset.level);
      const p = levelProgress(lvl.id);
      openReview({
        title: `📝 ${lvl.exam ? lvl.exam.title : "Prueba"} — ${lvl.name}`,
        items: p.examReview || [],
        backTo: "notas",
      });
    };
  });
}

/* ---------------------------------------------------------------------- */
/* 13b2. HISTORIAL DE ACCESO (login) — visible en Mi Cuenta y, para el admin, de todos */
/* ---------------------------------------------------------------------- */
// Registra este acceso (inicio de sesión / apertura del sistema) en la colección
// "access_log". Se llama una vez por cada resolución de auth.onAuthStateChanged, es decir,
// cada vez que el sistema carga con una sesión activa. Fire-and-forget: nunca bloquea la carga.
function logAccess() {
  if (!state.user) return;
  try {
    db.collection("access_log").add({
      uid: state.user.uid,
      name: state.user.name || "",
      email: state.user.email || "",
      role: state.user.role || "aluno",
      appVersion: APP_VERSION,
      userAgent: (typeof navigator !== "undefined" && navigator.userAgent) || "",
      at: firebase.firestore.FieldValue.serverTimestamp(),
    }).catch(e => console.warn("No se pudo registrar el acceso.", e));
  } catch (e) { console.warn(e); }
}

async function loadMyAccessLog() {
  try {
    if (!state.user) return;
    // BUGFIX: antes esto combinaba where("uid","==",...) con orderBy("at","desc") en la
    // MISMA consulta — Firestore exige un índice compuesto para eso, que este proyecto nunca
    // tuvo creado (no hay firestore.indexes.json ni fue creado manualmente en la consola).
    // La consulta fallaba en silencio (el error solo aparecía en la consola del navegador,
    // nunca visible para el alumno) y el catch dejaba myAccessLog en [], por lo que "Mis
    // Accesos" siempre mostraba "Todavía no hay accesos registrados" aunque hubiera logins
    // reales guardados. Ahora se filtra solo por uid (no exige índice) y se ordena en el
    // cliente, evitando depender de crear un índice en la consola de Firebase.
    const snap = await db.collection("access_log").where("uid", "==", state.user.uid).limit(200).get();
    state.myAccessLog = snap.docs
      .map(d => ({ id: d.id, ...d.data() }))
      .sort((a, b) => (b.at && b.at.toMillis ? b.at.toMillis() : 0) - (a.at && a.at.toMillis ? a.at.toMillis() : 0))
      .slice(0, 100);
  } catch (e) {
    console.warn("No se pudo cargar tu historial de acceso.", e);
    state.myAccessLog = [];
  }
}

async function loadAdminAccessLog() {
  try {
    const snap = await db.collection("access_log").orderBy("at", "desc").limit(300).get();
    state.adminAccessLog = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (e) {
    console.warn("No se pudo cargar el historial de accesos.", e);
    state.adminAccessLog = [];
  }
}

function formatAccessAt(at) {
  try {
    if (!at) return "—";
    const d = at.toDate ? at.toDate() : new Date(at);
    const lang = (state.prefs && state.prefs.lang) || "es";
    const locale = lang === "pt" ? "pt-BR" : lang === "en" ? "en-US" : "es-ES";
    return d.toLocaleDateString(locale, { day: "2-digit", month: "short", year: "numeric" }) + " · " + d.toLocaleTimeString(locale, { hour: "2-digit", minute: "2-digit" });
  } catch (e) { return "—"; }
}

// Extrae un nombre de navegador/dispositivo legible a partir del userAgent, solo para
// mostrar algo amigable en la tabla (no es una detección exhaustiva, es suficiente para
// que el alumno/admin reconozca "desde qué vine").
function friendlyDeviceFromUA(ua) {
  if (!ua) return "—";
  const isMobile = /Mobile|Android|iPhone/i.test(ua);
  let browser = "Navegador";
  if (/Edg\//.test(ua)) browser = "Edge";
  else if (/Chrome\//.test(ua)) browser = "Chrome";
  else if (/Firefox\//.test(ua)) browser = "Firefox";
  else if (/Safari\//.test(ua)) browser = "Safari";
  return `${browser} · ${isMobile ? "📱 Móvil" : "💻 Computadora"}`;
}

/* ---------------------------------------------------------------------- */
/* 13c. TELA: MI ACTIVIDAD (analíticas propias del alumno)                 */
/* ---------------------------------------------------------------------- */
async function loadMyAttempts() {
  try {
    if (!state.user) return;
    // BUGFIX (2026-07-15): combinar where("uid","==",...) + orderBy("at","desc") en la
    // MISMA query exige un índice compuesto en Firestore que nunca fue creado — el mismo
    // problema real que ya había pasado antes con loadMyAccessLog() (ver historial). La
    // query fallaba en silencio (catch → console.warn) y "Mi Actividad" quedaba siempre en
    // cero aunque el alumno ya tuviera XP y progreso real. Fix: filtrar solo por uid (sin
    // índice) y ordenar del lado del cliente.
    // Sin orderBy en la query, un limit() del lado del servidor podría devolver 300
    // intentos cualquiera (no necesariamente los más recientes) — por eso traemos todos
    // los del alumno y recién LUEGO de ordenar por fecha (más reciente primero) cortamos
    // a los últimos 300, ya del lado del cliente.
    const snap = await db.collection("attempts").where("uid", "==", state.user.uid).get();
    state.myAttempts = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      .sort((a, b) => (b.at && b.at.toMillis ? b.at.toMillis() : 0) - (a.at && a.at.toMillis ? a.at.toMillis() : 0))
      .slice(0, 300);
  } catch (e) {
    console.warn("No se pudieron cargar tus analíticas.", e);
    state.myAttempts = [];
  }
}

function renderAnalytics() {
  const attempts = state.myAttempts || [];
  const total = attempts.length;
  const correctCount = attempts.filter(a => a.correct).length;
  const accuracy = total ? Math.round((correctCount / total) * 100) : null;
  const estMinutes = Math.round(total * 0.75); // ~45s por ejercicio, estimación simple
  const byType = groupAttemptsBy(attempts, a => a.exType);
  const byLevel = groupAttemptsBy(attempts, a => (getLevel(a.levelId) || {}).name || a.levelId);
  const recentErrors = attempts.filter(a => !a.correct).slice(0, 12);
  const openResponses = attempts.filter(a => a.exType === "open").slice(0, 20);

  root.innerHTML = wrapShell(`
      <div class="section-title">${t("analytics_title")}</div>
      <div class="home-stats-row">
        <div class="home-stat-card"><span class="hs-label">${t("analytics_total_attempts")}</span><strong class="hs-value">${total}</strong></div>
        <div class="home-stat-card"><span class="hs-label">${t("analytics_accuracy")}</span><strong class="hs-value">${accuracy !== null ? accuracy + "%" : "—"}</strong></div>
        <div class="home-stat-card"><span class="hs-label">${t("analytics_time_spent")}</span><strong class="hs-value">${estMinutes} min</strong></div>
      </div>
      ${total === 0 ? `<div class="card"><p style="color:var(--gray-2);margin:0">${t("analytics_no_data")}</p></div>` : `
      <div class="analytics-grid">
        <div class="card"><h3>${t("analytics_by_type_title")}</h3><canvas id="chart-my-type" height="200"></canvas></div>
        <div class="card"><h3>${t("notas_level_col")}</h3><canvas id="chart-my-level" height="200"></canvas></div>
      </div>
      <div class="card">
        <h3>${t("analytics_errors_title")}</h3>
        ${recentErrors.length === 0 ? `<p style="color:var(--gray-2)">—</p>` : recentErrors.map(e => `
          <div class="error-row"><span class="badge admin" style="background:var(--danger)">${escapeHtml(e.exType || "")}</span> <strong>${escapeHtml(e.question || "")}</strong> ${e.answerText ? `→ <em>${escapeHtml(e.answerText)}</em>` : ""}</div>
        `).join("")}
      </div>
      <div class="card">
        <h3>${t("analytics_open_title")}</h3>
        ${openResponses.length === 0 ? `<p style="color:var(--gray-2)">${t("analytics_open_empty")}</p>` : openResponses.map(e => `
          <div class="open-response-row">
            <div class="oq">✍️ ${escapeHtml(e.question || "")}</div>
            <div class="oa">${escapeHtml(e.answerText || "")}</div>
          </div>
        `).join("")}
      </div>`}
      <div class="bottom-space"></div>
    `, "analytics");
  attachShellEvents();
  if (total) {
    renderChart("chart-my-type", {
      type: "bar",
      data: { labels: Object.keys(byType), datasets: [
        { label: "✅", data: Object.values(byType).map(v => v.correct), backgroundColor: "#2e7d32" },
        { label: "❌", data: Object.values(byType).map(v => v.total - v.correct), backgroundColor: "#c62828" },
      ] },
      options: { responsive: true, scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } } }
    });
    renderChart("chart-my-level", {
      type: "doughnut",
      data: { labels: Object.keys(byLevel), datasets: [{ data: Object.values(byLevel).map(v => v.total), backgroundColor: ["#AA151B", "#F1BF00", "#1D5C8C", "#6B1E3C", "#2e7d32", "#8B1E2E"] }] },
      options: { responsive: true }
    });
  }
}

/* ---------------------------------------------------------------------- */
/* 13d. TELA: MI CUADERNO (anotaciones personales)                         */
/* ---------------------------------------------------------------------- */
async function loadNotebookNotes() {
  try {
    if (!state.user) return;
    const snap = await db.collection("notebook_notes").where("uid", "==", state.user.uid).get();
    state.notebookNotes = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      .sort((a, b) => (b.updatedAtMs || 0) - (a.updatedAtMs || 0));
  } catch (e) {
    console.warn("No se pudo cargar el cuaderno.", e);
    state.notebookNotes = [];
  } finally {
    state.notebookLoaded = true;
  }
}

function renderNotebook() {
  const editing = state.notebookEditingId;
  const editingNote = editing && editing !== "new" ? state.notebookNotes.find(n => n.id === editing) : null;
  const showEditor = editing === "new" || !!editingNote;

  root.innerHTML = wrapShell(`
      <div class="section-title">${t("notebook_title")}</div>
      <p style="color:var(--gray-2);margin-top:-8px">${t("notebook_intro")}</p>
      ${state.notebookMsg ? `<div class="success-msg">${escapeHtml(state.notebookMsg)}</div>` : ""}
      ${showEditor ? `
      <div class="card">
        <form id="note-form">
          <div class="field"><input type="text" id="note-title" placeholder="${t("notebook_title_ph")}" value="${escapeHtml((editingNote && editingNote.title) || "")}" required></div>
          <div class="field"><textarea id="note-body" rows="6" placeholder="${t("notebook_body_ph")}" required>${escapeHtml((editingNote && editingNote.body) || "")}</textarea></div>
          <div style="display:flex;gap:10px;justify-content:flex-end">
            <button type="button" class="btn btn-secondary btn-sm" id="note-cancel">${t("notebook_cancel")}</button>
            <button type="submit" class="btn btn-primary btn-sm">${t("notebook_save")}</button>
          </div>
        </form>
      </div>` : `
      <div style="margin-bottom:16px"><button class="btn btn-gold btn-sm" id="note-new">${t("notebook_new_btn")}</button></div>`}
      ${!state.notebookLoaded ? "" : state.notebookNotes.length === 0 && !showEditor ? `
      <div class="card"><p style="color:var(--gray-2);margin:0">${t("notebook_empty")}</p></div>` : `
      <div class="notebook-grid">
        ${state.notebookNotes.map(n => `
          <div class="notebook-card" data-id="${n.id}">
            <h4>${escapeHtml(n.title || "")}</h4>
            <p>${escapeHtml((n.body || "").slice(0, 220))}${(n.body || "").length > 220 ? "…" : ""}</p>
            <div class="notebook-card-foot">
              <span>${n.updatedAtMs ? t("notebook_updated", { date: formatDate(new Date(n.updatedAtMs), state.prefs.lang) }) : ""}</span>
              <div>
                <button class="btn-icon note-edit" data-id="${n.id}" title="✏️">✏️</button>
                <button class="btn-icon note-del" data-id="${n.id}" title="🗑️">🗑️</button>
              </div>
            </div>
          </div>`).join("")}
      </div>`}
      <div class="bottom-space"></div>
    `, "notebook");
  attachShellEvents();

  const newBtn = document.getElementById("note-new");
  if (newBtn) newBtn.onclick = () => { state.notebookEditingId = "new"; state.notebookMsg = ""; render(); };
  const cancelBtn = document.getElementById("note-cancel");
  if (cancelBtn) cancelBtn.onclick = () => { state.notebookEditingId = null; render(); };
  const form = document.getElementById("note-form");
  if (form) form.onsubmit = onSaveNote;
  document.querySelectorAll(".note-edit").forEach(b => b.onclick = () => { state.notebookEditingId = b.dataset.id; state.notebookMsg = ""; render(); });
  document.querySelectorAll(".note-del").forEach(b => b.onclick = () => onDeleteNote(b.dataset.id));
}

async function onSaveNote(e) {
  e.preventDefault();
  const title = document.getElementById("note-title").value.trim();
  const body = document.getElementById("note-body").value.trim();
  if (!title || !body) return;
  const editing = state.notebookEditingId;
  try {
    if (editing && editing !== "new") {
      await db.collection("notebook_notes").doc(editing).update({ title, body, updatedAtMs: Date.now(), updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
      const n = state.notebookNotes.find(x => x.id === editing);
      if (n) { n.title = title; n.body = body; n.updatedAtMs = Date.now(); }
    } else {
      const ref = await db.collection("notebook_notes").add({
        uid: state.user.uid, title, body, updatedAtMs: Date.now(), createdAt: firebase.firestore.FieldValue.serverTimestamp(), updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      state.notebookNotes.unshift({ id: ref.id, uid: state.user.uid, title, body, updatedAtMs: Date.now() });
    }
    state.notebookEditingId = null;
    state.notebookMsg = t("notebook_saved_msg");
  } catch (err) {
    alert("Error: " + err.message);
  }
  render();
}

async function onDeleteNote(id) {
  if (!confirm("¿Eliminar esta nota?")) return;
  try {
    await db.collection("notebook_notes").doc(id).delete();
    state.notebookNotes = state.notebookNotes.filter(n => n.id !== id);
    render();
  } catch (err) {
    alert("Error: " + err.message);
  }
}

/* ---------------------------------------------------------------------- */
/* 13e. CANCIONES: parsing de letras + generación automática de ejercicios */
/* ---------------------------------------------------------------------- */
// El administrador pega la letra completa en un textarea, una línea por renglón, y marca
// las palabras que quiere convertir en "hueco" envolviéndolas en doble llave: {{palabra}}.
// Ejemplo de línea que el admin escribiría: "No sé cómo {{pagarte}} todo lo que has hecho".
// Esta función NUNCA contiene ni genera letras por sí misma — solo interpreta lo que el
// propio administrador ya escribió/pegó (letras protegidas por derechos de autor deben
// venir siempre de él, nunca ser transcritas por el asistente).
const SONG_BLANK_RE = /\{\{\s*([^{}]+?)\s*\}\}/g;

// Palabras muy comunes del español que NO tiene sentido convertir en hueco (artículos,
// preposiciones, conjunciones...) — usada solo por el marcador automático de abajo.
const SONG_STOPWORDS = new Set([
  "de","la","el","en","y","a","que","los","las","un","una","se","del","al","con","por",
  "para","no","es","su","sus","lo","le","les","o","u","mi","tu","tus","mis","este","esta",
  "esto","ese","esa","eso","muy","pero","si","sí","ya","me","te","nos","os","como","también",
  "tan","así","cuando","donde","porque","sin","sobre","hay","fue","son","soy","eres","era",
  "han","he","has","más","qué","yo","tú","él","ella","nosotros","ustedes","ellos","ellas",
]);

// Marcador automático de huecos: recorre las líneas que el admin pegó (sin tocar las que
// YA tienen {{...}} manual) y envuelve en {{}} una palabra "de contenido" (4+ letras, no
// stopword) por línea, hasta un máximo total. Corre enteramente en el navegador del propio
// admin sobre el texto que él mismo pegó — el asistente nunca procesa ni ve esa letra.
function autoMarkBlanks(raw, maxBlanks) {
  const limit = maxBlanks || 15;
  let count = 0;
  const lines = (raw || "").split("\n");
  const outLines = lines.map(line => {
    if (count >= limit || !line.trim()) return line;
    if (SONG_BLANK_RE.test(line)) { SONG_BLANK_RE.lastIndex = 0; return line; } // ya tiene hueco manual
    const tokens = line.split(/(\s+)/); // conserva los espacios originales al recomponer
    const candidates = [];
    tokens.forEach((tok, i) => {
      const clean = tok.replace(/[.,;:!?¡¿"'()]/g, "");
      if (/^[A-Za-zÁÉÍÓÚÑÜáéíóúñü]{4,}$/.test(clean) && !SONG_STOPWORDS.has(clean.toLowerCase())) {
        candidates.push(i);
      }
    });
    if (!candidates.length) return line;
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    tokens[pick] = tokens[pick].replace(/^([^A-Za-zÁÉÍÓÚÑÜáéíóúñü]*)([A-Za-zÁÉÍÓÚÑÜáéíóúñü]{4,})([^A-Za-zÁÉÍÓÚÑÜáéíóúñü]*)$/, "$1{{$2}}$3");
    count++;
    return tokens.join("");
  });
  return outLines.join("\n");
}

// Carga la YouTube IFrame API una sola vez (bajo demanda, solo cuando el admin usa la
// herramienta de marcar tiempos automáticamente — no se carga en el resto del sistema).
let _ytApiPromise = null;
function loadYouTubeIframeAPI() {
  if (window.YT && window.YT.Player) return Promise.resolve();
  if (_ytApiPromise) return _ytApiPromise;
  _ytApiPromise = new Promise((resolve) => {
    const prevCb = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => { if (prevCb) prevCb(); resolve(); };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  });
  return _ytApiPromise;
}

// Crea un reproductor de YouTube invisible solo para leer la duración real del video
// (ev.target.getDuration()), y lo destruye enseguida. Usado por "Marcar tiempos automáticamente".
function getYouTubeDuration(youtubeId) {
  return loadYouTubeIframeAPI().then(() => new Promise((resolve, reject) => {
    let hostDiv = document.getElementById("yt-duration-probe");
    if (!hostDiv) {
      hostDiv = document.createElement("div");
      hostDiv.id = "yt-duration-probe";
      hostDiv.style.cssText = "position:fixed;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden";
      document.body.appendChild(hostDiv);
    }
    hostDiv.innerHTML = "";
    const mount = document.createElement("div");
    hostDiv.appendChild(mount);
    let settled = false;
    new YT.Player(mount, {
      videoId: youtubeId,
      events: {
        onReady: (ev) => {
          if (settled) return;
          settled = true;
          const d = ev.target.getDuration();
          try { ev.target.destroy(); } catch (e) { /* noop */ }
          if (d) resolve(d); else reject(new Error("duración inválida"));
        },
        onError: () => { if (!settled) { settled = true; reject(new Error("error de YouTube")); } },
      },
    });
    setTimeout(() => { if (!settled) { settled = true; reject(new Error("timeout")); } }, 8000);
  }));
}

// Genera timestamps [mm:ss] aproximados para cada línea con texto, repartiendo la duración
// REAL del video (obtenida de YouTube) en partes iguales. No analiza el audio, así que es
// una aproximación — reserva ~6% de intro y ~5% de outro antes de repartir el resto. Sirve
// como punto de partida rápido: el admin puede ajustar a mano el número de cualquier línea
// después (basta con editar el [mm:ss] en el textarea) si el video no cae justo ahí.
function estimateSongTimestamps(rawLyrics, durationSec) {
  const rawLines = (rawLyrics || "").split("\n");
  const nonEmptyIdx = [];
  rawLines.forEach((l, i) => { if (l.trim()) nonEmptyIdx.push(i); });
  if (!nonEmptyIdx.length || !durationSec) return rawLyrics;
  const intro = Math.min(8, durationSec * 0.06);
  const outro = Math.min(6, durationSec * 0.05);
  const available = Math.max(1, durationSec - intro - outro);
  const fmt = (sec) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `[${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}]`;
  };
  // BUGFIX (2026-07-13): antes se repartía "available" en partes IGUALES por línea (available /
  // cantidad de líneas), sin importar si la línea era corta ("Vente ya") o larga (varias frases
  // seguidas). Eso hacía que el timestamp de una línea larga cayera muy cerca del de la línea
  // siguiente, dejando muy poco tiempo real para cantarla — y como el trecho de audio del
  // ejercicio corta cerca del PRÓXIMO timestamp (ver windowOf en buildSongExercises), el corte
  // llegaba antes de que la palabra marcada como hueco terminara de sonar. Síntoma reportado:
  // "el tiempo está diferente, no combina la frase que hay que escuchar con la música". Ahora
  // el tiempo se reparte proporcional al largo del texto de cada línea (peso = cantidad de
  // caracteres, con piso de 6 para que una línea de 1-2 palabras no quede con peso ~0) — una
  // línea con el doble de caracteres recibe aproximadamente el doble de tiempo antes de la
  // siguiente marca. Sigue siendo una aproximación (no analiza el audio real), pero ya no
  // asume que todas las líneas duran lo mismo.
  const weights = nonEmptyIdx.map(i => {
    const { text } = extractLineTimestamp(rawLines[i]);
    const clean = text.replace(SONG_BLANK_RE, (_, w) => w).trim();
    return Math.max(6, clean.length);
  });
  const totalWeight = weights.reduce((a, b) => a + b, 0) || 1;
  let acc = 0;
  nonEmptyIdx.forEach((lineIdx, k) => {
    const { text } = extractLineTimestamp(rawLines[lineIdx]); // quita marca previa, si había
    const pos = intro + (acc / totalWeight) * available;
    rawLines[lineIdx] = `${fmt(pos)} ${text}`;
    acc += weights[k];
  });
  return rawLines.join("\n");
}

function parseSongLyrics(raw) {
  return (raw || "")
    .split("\n")
    .map(l => l.trim())
    .filter(l => l.length > 0);
}

// Marca de tiempo opcional al inicio de una línea, formato [mm:ss] o [mm:ss.xx] (estilo LRC,
// el mismo que usan letras sincronizadas de Spotify/Musixmatch) — Anderson pidió que el video
// abra directo en el fragmento del ejercicio en vez de obligar al alumno a decorar toda la
// canción para saber dónde buscar. Es opcional: una línea sin marca de tiempo sigue funcionando
// exactamente como antes (video completo, sin salto).
const SONG_TIME_RE = /^\[(\d{1,2}):(\d{2}(?:\.\d+)?)\]\s*/;

// Separa el timestamp del texto real de la línea. Devuelve {seconds, text} — seconds es
// null si la línea no tiene marca de tiempo.
function extractLineTimestamp(line) {
  const m = (line || "").match(SONG_TIME_RE);
  if (!m) return { seconds: null, text: line || "" };
  const mins = parseInt(m[1], 10);
  const secs = parseFloat(m[2]);
  return { seconds: Math.max(0, Math.round(mins * 60 + secs)), text: line.slice(m[0].length) };
}

// Texto limpio de una línea (sin marca de tiempo, huecos resueltos a la palabra real) — usado
// para mostrar la letra completa en la pantalla de "escuchar y leer" y para el ejercicio de
// ordenar versos.
function songLineClean(line) {
  return extractLineTimestamp(line).text.replace(SONG_BLANK_RE, (_, word) => word);
}

// Cuenta cuántos huecos {{...}} hay en una línea, sin generar los ejercicios todavía.
function songLineBlankCount(line) {
  return (extractLineTimestamp(line).text.match(SONG_BLANK_RE) || []).length;
}

// Calcula el tamaño del "trecho" (en segundos) para una canción: duración real ÷ cantidad
// de palabras que el admin quiere practicar. Menos palabras = trechos más largos y generosos;
// más palabras = trechos más cortos y exigentes, ya que hay que repartir el mismo video entre
// más huecos. Con un piso de 6s (trechos más cortos que eso quedan casi imposibles de escuchar)
// y sin datos (canción sin duración guardada o sin cantidad definida) cae en 30s por defecto.
function computeSongFragmentSec(durationSec, targetWordCount) {
  if (!durationSec || !targetWordCount || targetWordCount <= 0) return 30;
  return Math.max(6, Math.round(durationSec / targetWordCount));
}

// A partir de las líneas ya separadas (parseSongLyrics), arma la fila de ejercicios:
// un "fill" por cada hueco marcado (reutiliza el motor de ejercicios ya existente, con
// gabarito inmediato/al final según la configuración del admin) + un "order" final con
// un tramo de la canción (hasta 8 líneas) para practicar el orden de los versos.
// fragmentSec (calculado por computeSongFragmentSec, según lo que el admin configuró para
// ESTA canción) define ventanas fijas de tiempo (0-30s, 30-60s...) — todas las líneas cuyo
// timestamp cae en la misma ventana comparten el mismo fragmento de video. Dentro de cada
// ventana, si la misma palabra aparece más de una vez como hueco, solo se genera UN ejercicio
// para ella (la primera aparición): el alumno nunca tiene que adivinar la misma palabra dos
// veces escuchando el mismo trecho.
function buildSongExercises(lines, youtubeId, fragmentSec) {
  const frag = fragmentSec && fragmentSec > 0 ? fragmentSec : 30;
  const exercises = [];
  const parsed = lines.map(l => extractLineTimestamp(l));
  // BUGFIX (segunda vuelta): el intento anterior anclaba el tramo al timestamp de la LÍNEA
  // y sumaba "frag" segundos fijos — pero "frag" es un promedio general (duración de la
  // canción ÷ cantidad de palabras a adivinar), calculado por computeSongFragmentSec(). En
  // canciones con muchos huecos (más de los configurados en targetWordCount) ese promedio
  // sale muy chico — a veces 6-10 segundos —, y una línea con varias frases cortas seguidas
  // (p. ej. "Tanto busqué, cuánto encontré, cuánto perdí, cuánto gané") tarda en cantarse
  // MÁS que esos pocos segundos. Resultado: el corte (endSec) llegaba ANTES de que la
  // palabra a adivinar empezara siquiera a sonar — exactamente el síntoma reportado.
  // Ahora, además del margen mínimo de "frag" segundos, el tramo se extiende hasta justo
  // antes de la PRÓXIMA marca de tiempo real de la letra (si existe una más adelante) —
  // así el corte nunca cae en medio de la línea actual, sea cual sea su duración real.
  const allTimestamps = parsed.map(p => p.seconds).filter(s => s != null).sort((a, b) => a - b);
  const nextTimestampAfter = (sec) => {
    for (const t of allTimestamps) { if (t > sec + 0.05) return t; }
    return null;
  };
  // BUGFIX (2026-07-13): la línea con la marca de tiempo MÁS ALTA (la última con [mm:ss] en
  // toda la letra) no tiene una "próxima marca" de la que tomar el límite del trecho — antes
  // caía directo en "minEnd" (start + frag), y frag es un promedio general que puede ser bien
  // chico (canciones con muchos huecos configurados). Resultado: para esa última línea (y
  // cualquier otra sin marca siguiente) el video se cortaba a los pocos segundos, casi siempre
  // ANTES de que la palabra a adivinar terminara de sonar. Para estimar un límite más realista
  // sin analizar el audio real, calculamos un "ritmo" (segundos por carácter) a partir de los
  // pares de líneas consecutivas que SÍ tienen ambas marca de tiempo — ese ritmo, aplicado a la
  // cantidad de caracteres de la línea en cuestión, da una duración estimada mucho más fiel que
  // usar siempre el mismo "frag" fijo. Se descartan saltos raros (>20s entre líneas, típico de
  // silencios/instrumental) para no distorsionar el promedio.
  let _secPerChar = null;
  const secondsPerChar = () => {
    if (_secPerChar != null) return _secPerChar;
    let totalChars = 0, totalSecs = 0;
    for (let i = 0; i < parsed.length - 1; i++) {
      const a = parsed[i], b = parsed[i + 1];
      if (a.seconds == null || b.seconds == null) continue;
      const dur = b.seconds - a.seconds;
      const chars = Math.max(1, a.text.replace(SONG_BLANK_RE, (_m, w) => w).trim().length);
      if (dur > 0 && dur < 20) { totalChars += chars; totalSecs += dur; }
    }
    _secPerChar = totalChars > 0 ? totalSecs / totalChars : 0.14; // ~0.14s/carácter si no hay datos suficientes
    return _secPerChar;
  };
  const windowOf = (sec, lineText) => {
    if (sec == null) return null;
    const lead = Math.min(3, frag * 0.25);
    const start = Math.max(0, Math.round(sec - lead));
    const minEnd = start + frag;
    const next = nextTimestampAfter(sec);
    let end;
    if (next != null) {
      end = Math.max(minEnd, Math.round(next - 0.3));
    } else {
      // Sin próxima marca (última línea marcada): estimar cuánto tarda ESTA línea en cantarse
      // según el ritmo real de la canción, con un 40% de margen de seguridad, en vez de cortar
      // apenas "frag" segundos después del inicio.
      const chars = Math.max(1, (lineText || "").replace(SONG_BLANK_RE, (_m, w) => w).trim().length);
      const estDur = Math.round(chars * secondsPerChar() * 1.4);
      end = Math.max(minEnd, start + estDur);
    }
    return { start, end };
  };

  const seenWordsByWindow = new Map(); // "start-end" -> Set(palabra normalizada)
  parsed.forEach((p) => {
    const line = p.text;
    // [...matchAll] no comparte lastIndex con SONG_BLANK_RE (a diferencia de exec en loop),
    // así que es seguro aunque una misma línea tenga 2+ huecos — evita un loop infinito.
    const matches = [...line.matchAll(SONG_BLANK_RE)];
    if (!matches.length) return;
    const win = windowOf(p.seconds, line);
    matches.forEach(m => {
      const word = m[1];
      const start = m.index;
      const end = start + m[0].length;
      if (win) {
        const key = `${win.start}-${win.end}`;
        const normWord = normalize(word);
        if (!seenWordsByWindow.has(key)) seenWordsByWindow.set(key, new Set());
        const seen = seenWordsByWindow.get(key);
        if (seen.has(normWord)) return; // palabra repetida dentro del mismo trecho: se omite
        seen.add(normWord);
      }
      // Blanquea SOLO este hueco (a "___"); los demás huecos de la misma línea, si los hay,
      // se resuelven a su palabra real para que el resto de la frase quede legible.
      const withThisBlank = line.slice(0, start) + "___" + line.slice(end);
      const finalLine = withThisBlank.replace(SONG_BLANK_RE, (mm, w) => w);
      // Antes este ejercicio no llevaba el video — el alumno tenía que adivinar la letra
      // de memoria, sin poder escuchar. Ahora lleva youtubeId para mostrar el reproductor
      // también aquí, así puede escuchar cuantas veces quiera mientras completa el hueco.
      // startSec/endSec (si la línea tenía [mm:ss]) hacen que el video abra directo en el
      // fragmento correcto, en vez del alumno tener que buscar a ciegas en la canción entera.
      exercises.push({ type: "fill", q: `Completa la letra: "${finalLine}"`, answer: word, youtubeId, isSong: true, startSec: win ? win.start : null, endSec: win ? win.end : null });
    });
  });
  // Dictado con la canción real: el alumno escucha el video (controles nativos de YouTube,
  // puede rebobinar) y escribe lo que entiende. Hasta 3 líneas de tamaño razonable (3+
  // palabras), repartidas a lo largo de la canción para variar el fragmento practicado.
  if (youtubeId) {
    const candidates = parsed
      .map((p) => ({ text: p.text.replace(SONG_BLANK_RE, (_, w) => w), seconds: p.seconds }))
      .filter(c => c.text.split(/\s+/).filter(Boolean).length >= 3);
    if (candidates.length) {
      const step = Math.max(1, Math.floor(candidates.length / 3));
      for (let k = 0, picked = 0; k < candidates.length && picked < 3; k += step, picked++) {
        const c = candidates[k];
        const win = windowOf(c.seconds, c.text);
        exercises.push({ type: "songListen", answer: c.text, youtubeId, startSec: win ? win.start : null, endSec: win ? win.end : null });
      }
    }
  }

  const orderSlice = lines.slice(0, Math.min(8, lines.length)).map(songLineClean);
  if (orderSlice.length >= 3) {
    const order = orderSlice.map((_, i) => i);
    // Baraja simple (Fisher-Yates) — determinística no hace falta, es solo para variar el orden inicial.
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    exercises.push({ type: "order", items: order.map(i => orderSlice[i]), correctOrder: order.map((_, pos) => order.indexOf(pos)) });
  }
  return exercises;
}

// Extrae el ID de video de cualquier formato de URL de YouTube (watch?v=, youtu.be/, embed/)
// o lo deja pasar tal cual si el admin ya pegó solo el ID.
function extractYoutubeId(input) {
  const s = (input || "").trim();
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([A-Za-z0-9_-]{6,})/,
  ];
  for (const re of patterns) {
    const m = s.match(re);
    if (m) return m[1];
  }
  return /^[A-Za-z0-9_-]{6,}$/.test(s) ? s : "";
}

// Convierte un documento de Firestore ("songs") en un objeto "lección" compatible con
// el motor de lecciones/ejercicios ya existente (getLesson, startLessonExercises, etc.).
function songDocToLesson(doc) {
  const lines = parseSongLyrics(doc.lyricsRaw);
  const fragmentSec = computeSongFragmentSec(doc.durationSec, doc.targetWordCount);
  return {
    id: doc.id,
    title: doc.title || "Canción",
    subtitle: doc.artist || "",
    youtubeId: doc.youtubeId || "",
    lyricsLines: lines.map(songLineClean),
    exercises: buildSongExercises(lines, doc.youtubeId || "", fragmentSec),
  };
}

async function loadSongs() {
  try {
    const snap = await db.collection("songs").orderBy("createdAt", "desc").get();
    state.songs = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    LEVEL_CANCIONES.lessons = state.songs.map(songDocToLesson);
  } catch (e) {
    console.warn("No se pudieron cargar las canciones.", e);
    state.songs = state.songs || [];
  }
}

/* ---------------------------------------------------------------------- */
/* 14. TELA: RESULTADO                                                     */
/* ---------------------------------------------------------------------- */
function renderResult() {
  const r = state.lastResult;
  const lvl = getLevel(r.levelId);
  const isSong = r.levelId === "canciones";
  const hasWrong = r.wrongItems && r.wrongItems.length > 0;
  root.innerHTML = wrapShell(`
      <div class="card result-wrap">
        <div class="result-emoji-ring ${r.isExam && !r.passed ? "fail" : "pass"}"><span class="result-emoji">${isSong ? "🎤" : r.isExam ? (r.passed ? "🎉" : "😕") : "✅"}</span></div>
        <h2>${r.isRetry ? "¡Repaso completado!" : isSong ? (r.score >= 90 ? "¡Cantas como un/a nativo/a! 🎶" : "¡Muy bien, sigue practicando!") : r.isExam ? (r.passed ? "¡Aprobado!" : "Todavía no...") : "¡Ejercicios completados!"}</h2>
        <div class="result-score ${r.passed ? "pass" : "fail"}">${r.score}%</div>
        ${r.isRetry ? `<p style="color:var(--gray-2);font-size:.85rem">🔁 Esta fue una sesión de repaso de errores — no afecta tu nota oficial ni el XP.</p>` : ""}
        ${!r.isRetry && r.isExam ? `<p>Nota mínima exigida: ${passScoreFor(r.levelId)}%</p>` : ""}
        ${!r.isRetry && r.isExam && r.passed ? `<p>🔓 ¡Has desbloqueado el próximo nivel!</p>` : ""}
        ${!r.isRetry && r.isExam && !r.passed ? `<p>Repasa la lección y vuelve a intentar la prueba cuando estés listo(a).</p>` : ""}
        <div style="display:flex;gap:12px;justify-content:center;margin-top:20px;flex-wrap:wrap">
          <button class="btn btn-secondary" id="res-back">Volver a ${lvl.name}</button>
          ${r.review && r.review.length ? `<button class="btn btn-gold" id="res-review">🔍 Ver mis respuestas y el gabarito</button>` : ""}
          ${hasWrong ? `<button class="btn btn-primary" id="res-retry-wrong">🔁 Repasar lo que fallé (${r.wrongItems.length})</button>` : ""}
          ${!r.isRetry && r.isExam && !r.passed ? `<button class="btn btn-primary" id="res-retry">Intentar de nuevo</button>` : ""}
        </div>
      </div>
      <div class="bottom-space"></div>
    `, "result");
  attachShellEvents();
  document.getElementById("res-back").onclick = () => { state.screen = "lessonList"; render(); };
  const retry = document.getElementById("res-retry");
  if (retry) retry.onclick = () => startExam(r.levelId);
  const retryWrong = document.getElementById("res-retry-wrong");
  if (retryWrong) retryWrong.onclick = () => {
    state.exerciseQueue = r.wrongItems;
    state.exerciseIndex = 0;
    state.exerciseAnswers = [];
    state.exerciseDetails = [];
    state.isExam = r.isExam;
    state.currentLevelId = r.levelId;
    state.currentLessonId = r.lessonId || null;
    state.isRetry = true;
    state.screen = r.isExam ? "exam" : "exercises";
    render();
  };
  const reviewBtn = document.getElementById("res-review");
  if (reviewBtn) reviewBtn.onclick = () => openReview({
    title: r.isExam ? `📝 ${lvl.exam ? lvl.exam.title : "Prueba"} — ${lvl.name}` : `✍️ Ejercicios — ${lvl.name}`,
    items: r.review,
    backTo: "result",
  });
}

/* ---------------------------------------------------------------------- */
/* 14b. TELA: REVISIÓN (mis respuestas x gabarito, pregunta a pregunta)     */
/* ---------------------------------------------------------------------- */
function openReview(data) {
  state.reviewData = data;
  state.screen = "review";
  render();
}

function renderReview() {
  const data = state.reviewData || { title: "Revisión", items: [], backTo: "dashboard" };
  const items = data.items || [];
  const rightCount = items.filter(it => it.correct).length;

  root.innerHTML = wrapShell(`
      <button class="back-link" id="review-back">${t("back_generic")}</button>
      <div class="section-title">🔍 ${escapeHtml(data.title || "Revisión")}</div>
      <p style="color:var(--gray-2);margin-top:-8px">Aquí ves, pregunta a pregunta, lo que respondiste y cuál era la respuesta correcta (el gabarito).</p>
      ${items.length === 0 ? `<div class="card"><p style="color:var(--gray-2);margin:0">Todavía no hay respuestas registradas para mostrar aquí.</p></div>` : `
      <div class="home-stats-row">
        <div class="home-stat-card highlight">
          <span class="hs-label">Correctas</span>
          <strong class="hs-value">${rightCount} / ${items.length}</strong>
        </div>
      </div>
      ${items.map((it, i) => `
        <div class="card review-item ${it.type === "open" ? "review-open" : (it.correct ? "review-ok" : "review-bad")}">
          <div class="review-item-head">
            <span class="review-item-num">${i + 1}</span>
            <span class="review-item-badge">${it.type === "open" ? "✍️ Revisión libre" : (it.correct ? "✅ Correcta" : "❌ Incorrecta")}</span>
          </div>
          <div class="review-q">${escapeHtml(it.question || "")}</div>
          <div class="review-row"><span class="review-label">Tu respuesta:</span> <span class="review-val">${escapeHtml(it.userAnswer || "(sin respuesta)")}</span></div>
          <div class="review-row"><span class="review-label">${it.type === "open" ? "Respuesta modelo:" : "Respuesta correcta (gabarito):"}</span> <span class="review-val strong">${escapeHtml(it.correctAnswer || "—")}</span></div>
        </div>
      `).join("")}`}
      <div class="bottom-space"></div>
    `, "review");
  attachShellEvents();
  document.getElementById("review-back").onclick = () => { state.screen = data.backTo || "dashboard"; render(); };
}

/* ---------------------------------------------------------------------- */
/* 15. PAINEL DE ADMINISTRADOR (5 telas próprias, não abas escondidas)      */
/* ---------------------------------------------------------------------- */
async function loadAdminStudents() {
  try {
    const snap = await db.collection("progress_summary").get();
    state.adminStudents = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (e) {
    console.warn(e);
    state.adminStudents = [];
  }
}

// Carga los registros "aluno" que todavía están con status "pending" (esperando
// aprobación de un administrador) para la pantalla de Aprobaciones.
async function loadAdminPending() {
  try {
    const snap = await db.collection("users").where("status", "==", "pending").get();
    state.adminPending = snap.docs.map(d => ({ uid: d.id, ...d.data() }));
  } catch (e) {
    console.warn("No se pudieron cargar los registros pendientes.", e);
    state.adminPending = [];
  }
}

async function approveUser(uid) {
  try {
    await db.collection("users").doc(uid).set({ status: "approved", approvedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
    await loadAdminPending();
    render();
  } catch (e) { console.warn(e); alert("No se pudo aprobar el registro. Intenta de nuevo."); }
}

async function rejectUser(uid) {
  if (!confirm("¿Seguro que quieres rechazar este registro? El usuario no podrá acceder al curso.")) return;
  try {
    await db.collection("users").doc(uid).set({ status: "rejected", rejectedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
    await loadAdminPending();
    render();
  } catch (e) { console.warn(e); alert("No se pudo rechazar el registro. Intenta de nuevo."); }
}

// Deriva el estado de pago a mostrar en Admin → Alumnos a partir de la copia guardada
// en progress_summary (status del user + subscription). "suspended" pisa a todo lo demás
// porque es una decisión manual del admin, independiente de lo que diga Mercado Pago.
function paymentStatusOf(s) {
  if (s.status === "suspended") return "suspended";
  const sub = s.subscription;
  if (!sub || !sub.plan) return "none";
  return sub.status || "pending";
}

// Corta manualmente el acceso de un alumno (típicamente por atraso de pago). Pedido
// explícito de Anderson: el sistema NUNCA hace esto solo, siempre es una decisión del admin.
async function suspendUserAccess(uid) {
  if (!confirm(t("admin_pay_suspend_confirm"))) return;
  try {
    await db.collection("users").doc(uid).set({ status: "suspended", suspendedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
    await db.collection("progress_summary").doc(uid).set({ status: "suspended" }, { merge: true });
    await loadAdminStudents();
    render();
  } catch (e) { console.warn(e); alert("Error: " + e.message); }
}

async function reactivateUserAccess(uid) {
  try {
    await db.collection("users").doc(uid).set({ status: "approved", reactivatedAt: firebase.firestore.FieldValue.serverTimestamp() }, { merge: true });
    await db.collection("progress_summary").doc(uid).set({ status: "approved" }, { merge: true });
    await loadAdminStudents();
    render();
  } catch (e) { console.warn(e); alert("Error: " + e.message); }
}

// Carga los intentos de ejercicios de TODOS los alumnos (colección "attempts"),
// limitado a los últimos 500 para no sobrecargar el panel de analíticas del admin.
async function loadAdminAttempts() {
  try {
    const snap = await db.collection("attempts").orderBy("at", "desc").limit(500).get();
    state.adminAttempts = snap.docs.map(d => ({ id: d.id, ...d.data() }));
  } catch (e) {
    console.warn("No se pudieron cargar las analíticas de admin.", e);
    state.adminAttempts = [];
  }
}

// Barra de sub-navegación entre las 5 pantallas de admin (además de estar en el sidebar,
// para que quede clarísimo que son secciones hermanas de una misma área).
function adminTabsHtml(active) {
  return `<div class="admin-tabs">
    ${SIDEBAR_ADMIN_ITEMS.map(it => `<button class="admin-tab-btn ${active === it.screen ? "active" : ""}" data-nav="${it.screen}">${it.icon} ${t(it.labelKey)}</button>`).join("")}
  </div>`;
}

function adminBackDashHandler() {
  const b = document.getElementById("back-dash");
  if (b) b.onclick = () => { state.screen = "dashboard"; render(); };
}

function renderAdminOverview() {
  const totalStudents = state.adminStudents.length;
  const passRates = MAIN_SEQUENCE.map(id => {
    const attempted = state.adminStudents.filter(s => s.levels && s.levels[id] && typeof s.levels[id].examScore === "number").length;
    const passed = state.adminStudents.filter(s => s.levels && s.levels[id] && s.levels[id].examPassed).length;
    return { id, attempted, passed };
  });
  const avgXp = totalStudents ? Math.round(state.adminStudents.reduce((a, s) => a + (s.xp || 0), 0) / totalStudents) : 0;
  // "Certificados": antes esta tarjeta solo mostraba el emoji 🎓 sin ningún número — el
  // usuario preguntó "quer dizer o que?" con razón, no comunicaba nada. Un certificado se
  // emite cada vez que un alumno aprueba la prueba final de un nivel, así que el total de
  // certificados emitidos es simplemente la suma de aprobados en todos los niveles.
  const certsIssued = passRates.reduce((a, r) => a + r.passed, 0);
  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">${t("back_dashboard")}</button>
      <div class="section-title">${t("admin_title")}</div>
      ${adminTabsHtml("admin")}
      <div class="home-stats-row">
        <div class="home-stat-card"><span class="hs-label">${t("analytics_students_count")}</span><strong class="hs-value">${totalStudents}</strong></div>
        <div class="home-stat-card"><span class="hs-label">⭐ XP (promedio)</span><strong class="hs-value">${avgXp}</strong></div>
        <div class="home-stat-card"><span class="hs-label">🎓 ${t("admin_nav_certs")}</span><strong class="hs-value">${certsIssued}</strong><span style="color:var(--gray-2);font-size:.72rem">${t("admin_certs_issued")}</span></div>
      </div>
      <div class="card">
        <h3>${t("admin_passrate_title")}</h3>
        ${totalStudents === 0 ? `<p style="color:var(--gray-2)">${t("admin_no_students")}</p>` : passRates.map(r => `
          <div class="config-row">
            <span>${getLevel(r.id).icon} ${getLevel(r.id).name}</span>
            <span style="color:var(--gray-2);font-size:.85rem">${r.attempted === 0 ? t("admin_passrate_none") : t("admin_passrate_row", { passed: r.passed, total: totalStudents, attempted: r.attempted })}</span>
          </div>`).join("")}
      </div>
      <div class="bottom-space"></div>
    `, "admin");
  attachShellEvents();
  adminBackDashHandler();
  document.querySelectorAll(".admin-tab-btn").forEach(b => b.onclick = () => {
    const target = b.dataset.nav;
    state.screen = target;
    render();
    if (target === "adminAnalytics") Promise.all([loadAdminStudents(), loadAdminAttempts()]).then(render);
    else if (target === "adminApprovals") loadAdminPending().then(render);
    else if (target === "adminAccessLog") loadAdminAccessLog().then(render);
    else loadAdminStudents().then(render);
  });
}

function renderAdminApprovals() {
  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">${t("back_dashboard")}</button>
      <div class="section-title">${t("admin_title")}</div>
      ${adminTabsHtml("adminApprovals")}
      <div class="card">
        <h3>${t("admin_approvals_title", { n: state.adminPending.length })}</h3>
        ${state.adminPending.length === 0 ? `<p style="color:var(--gray-2)">${t("admin_no_pending")}</p>` : state.adminPending.map(u => `
          <div class="student-row">
            <div><strong>${escapeHtml(u.name || u.email)}</strong><br><span style="color:var(--gray-2)">${escapeHtml(u.email || "")}</span></div>
            <div style="color:var(--gray-2);font-size:.85rem">${u.createdAt && u.createdAt.toDate ? t("admin_pending_since", { date: formatDate(u.createdAt.toDate(), state.prefs.lang || "es") }) : ""}</div>
            <div style="display:flex;gap:8px">
              <button class="btn btn-primary btn-sm" data-approve="${u.uid}">${t("admin_approve_btn")}</button>
              <button class="btn btn-secondary btn-sm" data-reject="${u.uid}">${t("admin_reject_btn")}</button>
            </div>
          </div>`).join("")}
      </div>
      <div class="bottom-space"></div>
    `, "adminApprovals");
  attachShellEvents();
  adminBackDashHandler();
  document.querySelectorAll(".admin-tab-btn").forEach(b => b.onclick = () => {
    const target = b.dataset.nav;
    state.screen = target;
    render();
    if (target === "adminAnalytics") Promise.all([loadAdminStudents(), loadAdminAttempts()]).then(render);
    else if (target === "adminApprovals") loadAdminPending().then(render);
    else if (target === "adminAccessLog") loadAdminAccessLog().then(render);
    else loadAdminStudents().then(render);
  });
  document.querySelectorAll("[data-approve]").forEach(b => b.onclick = () => approveUser(b.dataset.approve));
  document.querySelectorAll("[data-reject]").forEach(b => b.onclick = () => rejectUser(b.dataset.reject));
}

function renderAdminStudents() {
  // Para cada alumno, calcula si está atrasado/adelantado/en plazo respecto a SU PROPIO
  // cronograma (usa los datos guardados en progress_summary por updateProgressSummary()).
  // Sin esto, el Admin tenía un cronograma configurable por alumno pero ninguna forma de ver
  // quién está atrasado — pedido explícito: mostrar el estado de cada uno, no solo el propio.
  const withStatus = state.adminStudents.map(s => ({ s, sc: computeStudentScheduleStatus(s) }));
  const behindCount = withStatus.filter(x => x.sc.status === "behind").length;
  const aheadCount = withStatus.filter(x => x.sc.status === "ahead").length;
  // Atrasados primero, para que salten a la vista de inmediato.
  const order = { behind: 0, ontrack: 1, ahead: 2 };
  withStatus.sort((a, b) => order[a.sc.status] - order[b.sc.status]);

  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">${t("back_dashboard")}</button>
      <div class="section-title">${t("admin_title")}</div>
      ${adminTabsHtml("adminStudents")}
      <div class="card">
        <h3>${t("admin_students_title", { n: state.adminStudents.length })}</h3>
        ${state.adminStudents.length > 0 ? `<p style="color:var(--gray-2);font-size:.85rem;margin-top:-6px">
          🟠 ${behindCount} atrasado(s) respecto a su cronograma · 🔵 ${aheadCount} adelantado(s)
        </p>` : ""}
        ${state.adminStudents.length === 0 ? `<p style="color:var(--gray-2)">${t("admin_no_students")}</p>` : withStatus.map(({ s, sc }) => {
          const payStatus = paymentStatusOf(s);
          const suspended = payStatus === "suspended";
          return `
          <div class="student-row">
            <div style="display:flex;align-items:center;gap:10px">
              <div class="admin-avatar">${s.photoData ? `<img src="${s.photoData}" alt="">` : (s.name || s.email || "?").trim().charAt(0).toUpperCase()}</div>
              <div><strong>${escapeHtml(s.name || s.email)}</strong><br><span style="color:var(--gray-2)">${escapeHtml(s.email || "")}</span></div>
            </div>
            <div>⭐ ${s.xp || 0} XP</div>
            <div><span class="sched-badge ${sc.status}">${t(sc.status === "ahead" ? "panel_schedule_ahead" : sc.status === "behind" ? "panel_schedule_behind" : "panel_schedule_ontrack")}</span>
              <span style="color:var(--gray-2);font-size:.72rem;display:block;margin-top:2px">${sc.actualPct}% real vs ${sc.expectedPct}% esperado</span></div>
            <div>
              <span class="pay-badge ${payStatus}">${t("pay_status_" + payStatus)}</span>
              ${s.subscription && s.subscription.plan ? `<span style="color:var(--gray-2);font-size:.72rem;display:block;margin-top:2px">${s.subscription.plan === "annual" ? t("plan_annual_name") : t("plan_monthly_name")}</span>` : ""}
              <button class="btn btn-secondary btn-sm pay-toggle-btn" data-uid="${s.id}" data-suspend="${suspended ? "0" : "1"}" style="margin-top:4px">${suspended ? t("admin_pay_reactivate_btn") : t("admin_pay_suspend_btn")}</button>
            </div>
            <div>${MAIN_SEQUENCE.map(id => (s.levels && s.levels[id] && s.levels[id].examPassed) ? `<span class="badge admin" style="background:var(--success)">${id} ✓</span>` : "").join(" ")}</div>
          </div>`;
        }).join("")}
      </div>
      <div class="bottom-space"></div>
    `, "adminStudents");
  attachShellEvents();
  adminBackDashHandler();
  document.querySelectorAll(".admin-tab-btn").forEach(b => b.onclick = () => {
    const target = b.dataset.nav;
    state.screen = target;
    render();
    if (target === "adminAnalytics") Promise.all([loadAdminStudents(), loadAdminAttempts()]).then(render);
    else if (target === "adminApprovals") loadAdminPending().then(render);
    else if (target === "adminAccessLog") loadAdminAccessLog().then(render);
    else loadAdminStudents().then(render);
  });
  document.querySelectorAll(".pay-toggle-btn").forEach(btn => {
    btn.onclick = () => btn.dataset.suspend === "1" ? suspendUserAccess(btn.dataset.uid) : reactivateUserAccess(btn.dataset.uid);
  });
}

/* ---------------------------------------------------------------------- */
/* 15b. ADMIN: CANCIONES (crear/editar/eliminar) — el admin pega la letra   */
/* ---------------------------------------------------------------------- */
function renderAdminSongs() {
  const editing = state.songFormEditingId;
  const editingSong = editing && editing !== "new" ? state.songs.find(s => s.id === editing) : null;
  const showForm = editing === "new" || !!editingSong;

  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">${t("back_dashboard")}</button>
      <div class="section-title">${t("admin_title")}</div>
      ${adminTabsHtml("adminSongs")}
      <div class="card">
        <h3>🎵 ${t("admin_songs_title")}</h3>
        <p style="color:var(--gray-2);font-size:.85rem;margin-top:0">${t("admin_songs_intro")}</p>
        ${state.songFormMsg ? `<div class="${state.songFormMsg.ok ? "success-msg" : "error-msg"}">${escapeHtml(state.songFormMsg.text)}</div>` : ""}
        ${!showForm ? `<button class="btn btn-gold btn-sm" id="song-new-btn">+ ${t("admin_songs_new_btn")}</button>` : ""}
        ${showForm ? `
        <form id="song-form" style="margin-top:16px">
          <div class="field"><label>${t("admin_songs_field_title")}</label>
            <input type="text" id="song-title" required value="${escapeHtml((editingSong && editingSong.title) || "")}" placeholder="${t("admin_songs_field_title_ph")}"></div>
          <div class="field"><label>${t("admin_songs_field_artist")}</label>
            <input type="text" id="song-artist" required value="${escapeHtml((editingSong && editingSong.artist) || "")}" placeholder="${t("admin_songs_field_artist_ph")}"></div>
          <div class="field"><label>${t("admin_songs_field_youtube")}</label>
            <input type="text" id="song-youtube" required value="${escapeHtml((editingSong && editingSong.youtubeId) || "")}" placeholder="https://www.youtube.com/watch?v=..."></div>
          <div class="field" style="max-width:260px">
            <label>${t("admin_songs_field_words")}</label>
            <p style="color:var(--gray-2);font-size:.78rem;margin:0 0 6px">${t("admin_songs_field_words_hint")}</p>
            <input type="number" min="1" max="200" id="song-target-words" value="${(editingSong && editingSong.targetWordCount) || 20}">
          </div>
          <div class="field">
            <label>${t("admin_songs_field_lyrics")}</label>
            <p style="color:var(--gray-2);font-size:.8rem;margin:0 0 8px">${t("admin_songs_field_lyrics_hint")}</p>
            <textarea id="song-lyrics" rows="12" required placeholder="${t("admin_songs_field_lyrics_ph")}" style="width:100%;padding:13px 16px;border-radius:12px;border:1.5px solid #e2e0db;font-size:.92rem;font-family:inherit">${escapeHtml((editingSong && editingSong.lyricsRaw) || "")}</textarea>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px;flex-wrap:wrap;gap:8px">
              <div id="song-lyrics-count" style="color:var(--gray-2);font-size:.78rem"></div>
              <div style="display:flex;gap:8px;flex-wrap:wrap">
                <button type="button" class="btn btn-secondary btn-sm" id="song-auto-blank-btn">🎲 ${t("admin_songs_auto_blank_btn")}</button>
                <button type="button" class="btn btn-secondary btn-sm" id="song-auto-time-btn">⏱️ ${t("admin_songs_auto_time_btn")}</button>
              </div>
            </div>
            <p style="color:var(--gray-2);font-size:.76rem;margin:4px 0 0">${t("admin_songs_auto_time_hint")}</p>
          </div>
          <div style="display:flex;gap:10px;justify-content:flex-end">
            <button type="button" class="btn btn-secondary btn-sm" id="song-cancel">${t("admin_songs_cancel")}</button>
            <button type="submit" class="btn btn-primary btn-sm">${t("admin_songs_save")}</button>
          </div>
        </form>` : ""}
      </div>
      ${!showForm ? `
      <div class="card">
        <h3>${t("admin_songs_list_title", { n: state.songs.length })}</h3>
        ${state.songs.length === 0 ? `<p style="color:var(--gray-2)">${t("admin_songs_empty")}</p>` : state.songs.map(s => {
          const lines = parseSongLyrics(s.lyricsRaw);
          const blanks = lines.reduce((acc, l) => acc + songLineBlankCount(l), 0);
          const fragSec = computeSongFragmentSec(s.durationSec, s.targetWordCount);
          return `
          <div class="student-row">
            <div><strong>${escapeHtml(s.title)}</strong><br><span style="color:var(--gray-2)">${escapeHtml(s.artist || "")} · ${lines.length} ${t("admin_songs_lines_unit")} · ${blanks} ${t("admin_songs_blanks_unit")} · ⏱️ ${fragSec}s${s.durationSec ? "" : " (sin duración guardada aún, usa Guardar)"}</span></div>
            <div style="display:flex;gap:8px">
              <button class="btn btn-secondary btn-sm song-edit-btn" data-id="${s.id}">✏️</button>
              <button class="btn btn-secondary btn-sm song-del-btn" data-id="${s.id}">🗑️</button>
            </div>
          </div>`;
        }).join("")}
      </div>` : ""}
      <div class="bottom-space"></div>
    `, "adminSongs");
  attachShellEvents();
  adminBackDashHandler();
  document.querySelectorAll(".admin-tab-btn").forEach(b => b.onclick = () => {
    const target = b.dataset.nav;
    state.screen = target;
    render();
    if (target === "adminAnalytics") Promise.all([loadAdminStudents(), loadAdminAttempts()]).then(render);
    else if (target === "adminApprovals") loadAdminPending().then(render);
    else if (target === "adminAccessLog") loadAdminAccessLog().then(render);
    else loadAdminStudents().then(render);
  });

  const newBtn = document.getElementById("song-new-btn");
  if (newBtn) newBtn.onclick = () => { state.songFormEditingId = "new"; state.songFormMsg = ""; render(); };
  const cancelBtn = document.getElementById("song-cancel");
  if (cancelBtn) cancelBtn.onclick = () => { state.songFormEditingId = null; render(); };
  const lyricsTa = document.getElementById("song-lyrics");
  const countEl = document.getElementById("song-lyrics-count");
  const updateCount = () => {
    if (!lyricsTa || !countEl) return;
    const lines = parseSongLyrics(lyricsTa.value);
    const blanks = lines.reduce((acc, l) => acc + songLineBlankCount(l), 0);
    countEl.textContent = t("admin_songs_live_count", { lines: lines.length, blanks });
  };
  if (lyricsTa) { lyricsTa.addEventListener("input", updateCount); updateCount(); }
  const autoBtn = document.getElementById("song-auto-blank-btn");
  if (autoBtn) autoBtn.onclick = () => {
    if (!lyricsTa) return;
    lyricsTa.value = autoMarkBlanks(lyricsTa.value, 15);
    updateCount();
  };
  const autoTimeBtn = document.getElementById("song-auto-time-btn");
  if (autoTimeBtn) autoTimeBtn.onclick = async () => {
    if (!lyricsTa) return;
    const ytInput = document.getElementById("song-youtube");
    const youtubeId = extractYoutubeId(ytInput ? ytInput.value.trim() : "");
    if (!youtubeId) { alert(t("admin_songs_need_youtube_first")); return; }
    const originalLabel = autoTimeBtn.innerHTML;
    autoTimeBtn.disabled = true;
    autoTimeBtn.textContent = "⏳ " + t("admin_songs_calculating");
    try {
      const duration = await getYouTubeDuration(youtubeId);
      lyricsTa.value = estimateSongTimestamps(lyricsTa.value, duration);
      updateCount();
    } catch (e) {
      console.warn(e);
      alert(t("admin_songs_time_error"));
    }
    autoTimeBtn.disabled = false;
    autoTimeBtn.innerHTML = originalLabel;
  };

  const form = document.getElementById("song-form");
  if (form) form.onsubmit = onSaveSong;
  document.querySelectorAll(".song-edit-btn").forEach(b => b.onclick = () => { state.songFormEditingId = b.dataset.id; state.songFormMsg = ""; render(); });
  document.querySelectorAll(".song-del-btn").forEach(b => b.onclick = () => onDeleteSong(b.dataset.id));
}

async function onSaveSong(e) {
  e.preventDefault();
  const title = document.getElementById("song-title").value.trim();
  const artist = document.getElementById("song-artist").value.trim();
  const youtubeInput = document.getElementById("song-youtube").value.trim();
  const lyricsRaw = document.getElementById("song-lyrics").value;
  const targetWordsInput = document.getElementById("song-target-words");
  const targetWordCount = Math.max(1, parseInt((targetWordsInput && targetWordsInput.value) || "20", 10) || 20);
  const youtubeId = extractYoutubeId(youtubeInput);
  if (!title || !artist || !lyricsRaw.trim()) return;
  if (!youtubeId) {
    state.songFormMsg = { ok: false, text: t("admin_songs_bad_youtube") };
    render();
    return;
  }
  const editing = state.songFormEditingId;
  const submitBtn = document.querySelector("#song-form button[type=submit]");
  if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = "⏳ " + t("admin_songs_calculating"); }
  // Busca la duración real del video (misma técnica del botón "Marcar tiempos automáticamente")
  // para poder calcular el tamaño del trecho (computeSongFragmentSec) sin depender de que el
  // admin haya usado ese botón — así el cálculo por palabras funciona aunque los timestamps
  // se hayan marcado a mano. Si falla (video privado, sin red, etc.), guarda igual sin duración
  // — el sistema simplemente cae al trecho por defecto de 30s.
  let durationSec = null;
  try { durationSec = await getYouTubeDuration(youtubeId); } catch (e) { console.warn("No se pudo obtener la duración del video.", e); }
  try {
    const payload = { title, artist, youtubeId, lyricsRaw, targetWordCount };
    if (durationSec) payload.durationSec = Math.round(durationSec);
    if (editing && editing !== "new") {
      await db.collection("songs").doc(editing).update({ ...payload, updatedAt: firebase.firestore.FieldValue.serverTimestamp() });
    } else {
      await db.collection("songs").add({ ...payload, createdAt: firebase.firestore.FieldValue.serverTimestamp(), createdBy: state.user.uid });
    }
    await loadSongs();
    state.songFormEditingId = null;
    state.songFormMsg = { ok: true, text: t("admin_songs_saved") };
  } catch (err) {
    state.songFormMsg = { ok: false, text: "Error: " + err.message };
  }
  render();
}

async function onDeleteSong(id) {
  if (!confirm(t("admin_songs_confirm_delete"))) return;
  try {
    await db.collection("songs").doc(id).delete();
    await loadSongs();
    render();
  } catch (err) {
    alert("Error: " + err.message);
  }
}

/* ---------------------------------------------------------------------- */
/* 15b. TELA: HISTORIAL DE ACCESO (admin — todos los usuarios)             */
/* ---------------------------------------------------------------------- */
function renderAdminAccessLog() {
  const log = state.adminAccessLog || [];
  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">${t("back_dashboard")}</button>
      <div class="section-title">🕓 ${t("access_log_title")}</div>
      ${adminTabsHtml("adminAccessLog")}
      <div class="card">
        <p style="color:var(--gray-2);font-size:.85rem;margin-top:0">${t("access_log_admin_hint")}</p>
        ${log.length === 0 ? `<p style="color:var(--gray-2)">${t("access_log_empty")}</p>` : `
        <table class="notas-table">
          <thead><tr><th>${t("access_log_col_user")}</th><th>${t("access_log_col_date")}</th><th>${t("access_log_col_device")}</th><th>${t("access_log_col_version")}</th></tr></thead>
          <tbody>
            ${log.map(a => `
              <tr>
                <td><strong>${escapeHtml(a.name || a.email || a.uid || "—")}</strong>${a.role === "admin" ? " · 🛠️" : ""}<br><span style="color:var(--gray-2);font-size:.8rem">${escapeHtml(a.email || "")}</span></td>
                <td>${formatAccessAt(a.at)}</td>
                <td>${friendlyDeviceFromUA(a.userAgent)}</td>
                <td>${escapeHtml(a.appVersion || "—")}</td>
              </tr>`).join("")}
          </tbody>
        </table>`}
      </div>
      <div class="bottom-space"></div>
    `, "adminAccessLog");
  attachShellEvents();
  adminBackDashHandler();
  document.querySelectorAll(".admin-tab-btn").forEach(b => b.onclick = () => {
    const target = b.dataset.nav;
    state.screen = target;
    render();
    if (target === "adminAnalytics") Promise.all([loadAdminStudents(), loadAdminAttempts()]).then(render);
    else if (target === "adminApprovals") loadAdminPending().then(render);
    else if (target === "adminAccessLog") loadAdminAccessLog().then(render);
    else loadAdminStudents().then(render);
  });
}

function renderAdminConfig() {
  const ps = state.config.passScores;
  const schedule = getSchedule();
  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">${t("back_dashboard")}</button>
      <div class="section-title">${t("admin_title")}</div>
      ${adminTabsHtml("adminConfig")}
      <div class="card">
        <h3>${t("admin_scores_title")}</h3>
        ${MAIN_SEQUENCE.map(id => `
          <div class="config-row">
            <span>${getLevel(id).icon} ${getLevel(id).name}</span>
            <input type="number" min="0" max="100" id="score-${id}" value="${ps[id] ?? 70}">
          </div>`).join("")}
        <div style="text-align:right;margin-top:14px"><button class="btn btn-primary btn-sm" id="save-config">${t("admin_save")}</button></div>
        <div id="config-feedback"></div>
      </div>
      <div class="card">
        <h3>🔍 ${t("admin_gabarito_title")}</h3>
        <p style="color:var(--gray-2);font-size:.85rem;margin-top:0">${t("admin_gabarito_hint")}</p>
        <div class="config-row">
          <span>${t("admin_gabarito_label")}</span>
          <select id="gabarito-mode">
            <option value="immediate" ${state.config.gabaritoMode !== "after" ? "selected" : ""}>${t("admin_gabarito_immediate")}</option>
            <option value="after" ${state.config.gabaritoMode === "after" ? "selected" : ""}>${t("admin_gabarito_after")}</option>
          </select>
        </div>
      </div>
      <div class="card">
        <h3>📅 ${t("schedule_title")}</h3>
        <p style="color:var(--gray-2);font-size:.85rem;margin-top:0">${t("schedule_intro")}</p>
        <div class="config-row"><span>${t("schedule_duration_label")}</span><span>${schedule.durationMonths || DEFAULT_SCHEDULE_MONTHS} ${t("schedule_months_unit")}</span></div>
      </div>
      <div class="card">
        <h3>${t("admin_billing_title")}</h3>
        <p style="color:var(--gray-2);font-size:.85rem;margin-top:0">${t("admin_billing_intro")}</p>
        <div class="config-row"><span>${t("admin_billing_monthly_label")}</span><input type="number" min="0" step="0.01" id="price-monthly" value="${(state.config.priceMonthly ?? DEFAULT_PRICE_MONTHLY).toFixed(2)}"></div>
        <div class="config-row"><span>${t("admin_billing_annual_label")}</span><input type="number" min="0" step="0.01" id="price-annual" value="${(state.config.priceAnnual ?? DEFAULT_PRICE_ANNUAL).toFixed(2)}"></div>
        <div style="text-align:right;margin-top:14px"><button class="btn btn-primary btn-sm" id="save-billing">${t("admin_save")}</button></div>
        <div id="billing-feedback"></div>
      </div>
      <div class="card">
        <h3>ℹ️ ${t("system_version_title")}</h3>
        <div class="config-row"><span>${t("system_version_label")}</span><span><strong>v${APP_VERSION}</strong></span></div>
      </div>
      <div class="bottom-space"></div>
    `, "adminConfig");
  attachShellEvents();
  adminBackDashHandler();
  document.querySelectorAll(".admin-tab-btn").forEach(b => b.onclick = () => {
    const target = b.dataset.nav;
    state.screen = target;
    render();
    if (target === "adminAnalytics") Promise.all([loadAdminStudents(), loadAdminAttempts()]).then(render);
    else if (target === "adminApprovals") loadAdminPending().then(render);
    else if (target === "adminAccessLog") loadAdminAccessLog().then(render);
    else loadAdminStudents().then(render);
  });
  document.getElementById("save-config").onclick = async () => {
    const newScores = {};
    MAIN_SEQUENCE.forEach(id => { newScores[id] = parseInt(document.getElementById(`score-${id}`).value, 10) || 70; });
    const gabaritoMode = document.getElementById("gabarito-mode").value === "after" ? "after" : "immediate";
    try {
      await db.collection("config").doc("settings").set({ passScores: newScores, gabaritoMode }, { merge: true });
      state.config.passScores = newScores;
      state.config.gabaritoMode = gabaritoMode;
      document.getElementById("config-feedback").innerHTML = `<div class="success-msg">${t("admin_saved")}</div>`;
    } catch (e) {
      document.getElementById("config-feedback").innerHTML = `<div class="error-msg">Error: ${e.message}</div>`;
    }
  };
  document.getElementById("save-billing").onclick = async () => {
    const priceMonthly = parseFloat(document.getElementById("price-monthly").value) || DEFAULT_PRICE_MONTHLY;
    const priceAnnual = parseFloat(document.getElementById("price-annual").value) || DEFAULT_PRICE_ANNUAL;
    try {
      await db.collection("config").doc("settings").set({ priceMonthly, priceAnnual }, { merge: true });
      state.config.priceMonthly = priceMonthly;
      state.config.priceAnnual = priceAnnual;
      document.getElementById("billing-feedback").innerHTML = `<div class="success-msg">${t("admin_saved")}</div>`;
    } catch (e) {
      document.getElementById("billing-feedback").innerHTML = `<div class="error-msg">Error: ${e.message}</div>`;
    }
  };
}

function renderAdminCerts() {
  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">${t("back_dashboard")}</button>
      <div class="section-title">${t("admin_title")}</div>
      ${adminTabsHtml("adminCerts")}
      <div class="card">
        <h3>${t("cert_config_title")}</h3>
        <p style="color:var(--gray-2)">${t("cert_config_intro")}</p>
        <div class="cert-gallery">
          ${MAIN_SEQUENCE.map(id => {
            const cfg = CERT_THEMES[id];
            if (!cfg) return "";
            const rgb = (a) => `rgb(${a[0]},${a[1]},${a[2]})`;
            return `
            <div class="cert-preview-card">
              <div class="cert-preview-swatch" style="background:linear-gradient(135deg, ${rgb(cfg.primary)}, ${rgb(cfg.secondary)})">
                <span>${cfg.seal === "circle" ? "⭘" : cfg.seal === "medallion" ? "🏅" : cfg.seal === "shield" ? "🛡️" : "🎗️"}</span>
              </div>
              <div class="cert-preview-body">
                <h4>${getLevel(id).icon} ${cfg.name}</h4>
                <span class="cert-preview-tag">${cfg.title}</span>
                <p>${cfg.cefr}</p>
                <button class="btn btn-secondary btn-sm cert-preview-btn" data-cert-level="${id}">${t("cert_preview_btn")}</button>
              </div>
            </div>`;
          }).join("")}
        </div>
      </div>
      <div class="bottom-space"></div>
    `, "adminCerts");
  attachShellEvents();
  adminBackDashHandler();
  document.querySelectorAll(".admin-tab-btn").forEach(b => b.onclick = () => {
    const target = b.dataset.nav;
    state.screen = target;
    render();
    if (target === "adminAnalytics") Promise.all([loadAdminStudents(), loadAdminAttempts()]).then(render);
    else if (target === "adminApprovals") loadAdminPending().then(render);
    else if (target === "adminAccessLog") loadAdminAccessLog().then(render);
    else loadAdminStudents().then(render);
  });
  document.querySelectorAll(".cert-preview-btn").forEach(btn => {
    btn.onclick = () => generateSampleCertificatePDF(btn.dataset.certLevel);
  });
}

// Agrupa una lista de intentos por una clave arbitraria y devuelve { key: {correct,total} }.
function groupAttemptsBy(attempts, keyFn) {
  const groups = {};
  attempts.forEach(a => {
    const k = keyFn(a) || "—";
    if (!groups[k]) groups[k] = { correct: 0, total: 0 };
    groups[k].total++;
    if (a.correct) groups[k].correct++;
  });
  return groups;
}

let _chartInstances = {};
function renderChart(canvasId, config) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || typeof Chart === "undefined") return;
  if (_chartInstances[canvasId]) { _chartInstances[canvasId].destroy(); }
  _chartInstances[canvasId] = new Chart(canvas.getContext("2d"), config);
}

function renderAdminAnalytics() {
  const attempts = state.adminAttempts || [];
  const totalStudents = state.adminStudents.length;
  const avgScore = (() => {
    const scores = [];
    state.adminStudents.forEach(s => {
      MAIN_SEQUENCE.forEach(id => { if (s.levels && s.levels[id] && typeof s.levels[id].examScore === "number") scores.push(s.levels[id].examScore); });
    });
    return scores.length ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : null;
  })();
  const byType = groupAttemptsBy(attempts, a => a.exType);
  const byLevel = groupAttemptsBy(attempts, a => a.levelId);
  // Nuevo indicador (a pedido): distribución de alumnos según su estado de cronograma —
  // reutiliza el mismo cálculo que ahora aparece por alumno en "Alumnos".
  const byScheduleStatus = { ahead: 0, ontrack: 0, behind: 0 };
  state.adminStudents.forEach(s => { byScheduleStatus[computeStudentScheduleStatus(s).status]++; });
  const recentErrors = attempts.filter(a => !a.correct).slice(0, 12);
  const openResponses = attempts.filter(a => a.exType === "open").slice(0, 20);
  const studentNameFor = (uid) => {
    const s = state.adminStudents.find(x => x.id === uid);
    return s ? (s.name || s.email) : uid;
  };

  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">${t("back_dashboard")}</button>
      <div class="section-title">${t("analytics_admin_title")}</div>
      ${adminTabsHtml("adminAnalytics")}
      <div class="home-stats-row">
        <div class="home-stat-card"><span class="hs-label">${t("analytics_students_count")}</span><strong class="hs-value">${totalStudents}</strong></div>
        <div class="home-stat-card"><span class="hs-label">${t("analytics_avg_score")}</span><strong class="hs-value">${avgScore !== null ? avgScore + "%" : "—"}</strong></div>
        <div class="home-stat-card"><span class="hs-label">${t("analytics_total_attempts")}</span><strong class="hs-value">${attempts.length}</strong></div>
      </div>
      ${totalStudents > 0 ? `
      <div class="card">
        <h3>${t("admin_passrate_title")} — 📅 ${t("nav_schedule")}</h3>
        <canvas id="chart-admin-schedule" height="120"></canvas>
      </div>` : ""}
      ${attempts.length === 0 ? `<div class="card"><p style="color:var(--gray-2);margin:0">${t("analytics_no_data")}</p></div>` : `
      <div class="analytics-grid">
        <div class="card"><h3>${t("analytics_by_type_title")}</h3><canvas id="chart-admin-type" height="200"></canvas></div>
        <div class="card"><h3>${t("notas_level_col")}</h3><canvas id="chart-admin-level" height="200"></canvas></div>
      </div>
      <div class="card">
        <h3>${t("analytics_errors_title")}</h3>
        ${recentErrors.length === 0 ? `<p style="color:var(--gray-2)">—</p>` : recentErrors.map(e => `
          <div class="error-row"><span class="badge admin" style="background:var(--danger)">${escapeHtml(e.exType || "")}</span> <strong>${escapeHtml(e.question || "")}</strong> ${e.answerText ? `→ <em>${escapeHtml(e.answerText)}</em>` : ""}</div>
        `).join("")}
      </div>
      <div class="card">
        <h3>${t("analytics_open_title")}</h3>
        ${openResponses.length === 0 ? `<p style="color:var(--gray-2)">${t("analytics_open_empty")}</p>` : openResponses.map(e => `
          <div class="open-response-row">
            <div class="oq">✍️ <strong>${escapeHtml(studentNameFor(e.uid))}</strong> — ${escapeHtml(e.question || "")}</div>
            <div class="oa">${escapeHtml(e.answerText || "")}</div>
          </div>
        `).join("")}
      </div>`}
      <div class="bottom-space"></div>
    `, "adminAnalytics");
  attachShellEvents();
  adminBackDashHandler();
  document.querySelectorAll(".admin-tab-btn").forEach(b => b.onclick = () => {
    const target = b.dataset.nav;
    state.screen = target;
    render();
    if (target === "adminAnalytics") Promise.all([loadAdminStudents(), loadAdminAttempts()]).then(render);
    else if (target === "adminApprovals") loadAdminPending().then(render);
    else if (target === "adminAccessLog") loadAdminAccessLog().then(render);
    else loadAdminStudents().then(render);
  });
  if (totalStudents > 0) {
    renderChart("chart-admin-schedule", {
      type: "bar",
      data: { labels: [t("panel_schedule_behind"), t("panel_schedule_ontrack"), t("panel_schedule_ahead")],
        datasets: [{ data: [byScheduleStatus.behind, byScheduleStatus.ontrack, byScheduleStatus.ahead], backgroundColor: ["#e65100", "#2e7d32", "#1565c0"] }] },
      options: { indexAxis: "y", responsive: true, plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, ticks: { stepSize: 1 } } } }
    });
  }
  if (attempts.length) {
    renderChart("chart-admin-type", {
      type: "bar",
      data: { labels: Object.keys(byType), datasets: [
        { label: "✅", data: Object.values(byType).map(v => v.correct), backgroundColor: "#2e7d32" },
        { label: "❌", data: Object.values(byType).map(v => v.total - v.correct), backgroundColor: "#c62828" },
      ] },
      options: { responsive: true, scales: { x: { stacked: true }, y: { stacked: true, beginAtZero: true } } }
    });
    renderChart("chart-admin-level", {
      type: "doughnut",
      data: { labels: Object.keys(byLevel).map(id => (getLevel(id) || {}).name || id), datasets: [{ data: Object.values(byLevel).map(v => v.total), backgroundColor: ["#AA151B", "#F1BF00", "#1D5C8C", "#6B1E3C", "#2e7d32", "#8B1E2E"] }] },
      options: { responsive: true }
    });
  }
}

/* ---------------------------------------------------------------------- */
/* 16. TELA: MI CUENTA (Seguridad + Apariencia)                            */
/* ---------------------------------------------------------------------- */
function renderAccount() {
  const tab = state.accountTab || "profile";
  const tabContent = tab === "profile" ? renderAccountProfileTab()
    : tab === "security" ? renderAccountSecurityTab()
    : tab === "access" ? renderAccountAccessTab()
    : tab === "voice" ? renderAccountVoiceTab()
    : renderAccountAppearanceTab();
  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">${t("back_panel")}</button>
      <div class="section-title">${t("account_title")}</div>
      <div class="account-tabs">
        <button class="account-tab-btn ${tab === "profile" ? "active" : ""}" data-tab="profile">👤 ${t("account_tab_profile")}</button>
        <button class="account-tab-btn ${tab === "security" ? "active" : ""}" data-tab="security">🔒 ${t("account_tab_security")}</button>
        <button class="account-tab-btn ${tab === "appearance" ? "active" : ""}" data-tab="appearance">🎨 ${t("account_tab_appearance")}</button>
        <button class="account-tab-btn ${tab === "voice" ? "active" : ""}" data-tab="voice">🔊 ${t("account_tab_voice")}</button>
        <button class="account-tab-btn ${tab === "access" ? "active" : ""}" data-tab="access">🕓 ${t("account_tab_access")}</button>
      </div>
      ${state.accountMsg ? `<div class="${state.accountMsg.ok ? "success-msg" : "error-msg"}">${escapeHtml(state.accountMsg.text)}</div>` : ""}
      <div class="card">
        ${tabContent}
      </div>
      <div style="text-align:center;color:var(--gray-2);font-size:.78rem;margin-top:-6px">${t("system_version_label")}: v${APP_VERSION}</div>
      <div class="bottom-space"></div>
    `, "account");
  attachShellEvents();
  document.getElementById("back-dash").onclick = () => { state.screen = "dashboard"; render(); };
  document.querySelectorAll(".account-tab-btn").forEach(btn => {
    btn.onclick = () => {
      state.accountTab = btn.dataset.tab;
      state.accountMsg = "";
      render();
      if (btn.dataset.tab === "access") loadMyAccessLog().then(render);
    };
  });

  if (tab === "profile") {
    const form = document.getElementById("profile-form");
    if (form) form.addEventListener("submit", onSaveProfileSubmit);
    wirePhotoPicker("pf-photo-input", "pf-photo-preview");
  } else if (tab === "security") {
    const form = document.getElementById("pass-form");
    if (form) form.addEventListener("submit", onChangePasswordSubmit);
  } else if (tab === "appearance") {
    document.querySelectorAll(".theme-swatch").forEach(sw => {
      sw.onclick = () => { state.prefs.theme = sw.dataset.theme; applyTheme(state.prefs.theme); render(); };
    });
    document.querySelectorAll(".font-option").forEach(fo => {
      fo.onclick = () => { state.prefs.font = fo.dataset.font; applyFont(state.prefs.font); render(); };
    });
    document.querySelectorAll(".lang-option").forEach(lo => {
      lo.onclick = () => { state.prefs.lang = lo.dataset.lang; render(); };
    });
    const saveBtn = document.getElementById("save-appearance");
    if (saveBtn) saveBtn.onclick = onSaveAppearance;
  } else if (tab === "voice") {
    // Antes esto vivía dentro de la pestaña "Apariencia" — el usuario pidió que la voz
    // tuviera su propia pestaña, al mismo nivel que Perfil/Seguridad/Apariencia/Accesos,
    // porque quedaba "escondida" y no era intuitivo que la configuración de voz estuviera ahí.
    // Si todavía no llegaron las voces del navegador (carga asíncrona), reintenta una vez
    // apenas estén listas, para no dejar la lista vacía sin necesidad.
    if (!(state.ttsVoices && state.ttsVoices.length)) { loadVoices().then(render); }
    document.querySelectorAll(".voice-option").forEach(vo => {
      vo.onclick = () => {
        const key = vo.dataset.voiceGroup === "v2" ? "voiceURI2" : "voiceURI";
        state.prefs[key] = vo.dataset.voiceUri || null;
        render();
      };
    });
    document.querySelectorAll(".voice-preview-btn").forEach(btn => {
      btn.onclick = (ev) => {
        ev.stopPropagation();
        const voice = (state.ttsVoices || []).find(v => v.voiceURI === btn.dataset.voicePreview);
        speakWithVoice(t("account_voice_sample_text"), voice);
      };
    });
    const saveVoiceBtn = document.getElementById("save-voice");
    if (saveVoiceBtn) saveVoiceBtn.onclick = onSaveAppearance;
  }
}

function renderAccountProfileTab() {
  const name = (state.user && state.user.name) || "";
  const xp = (state.progress && state.progress.xp) || 0;
  return `
    <h3>${t("account_tab_profile")}</h3>
    <form id="profile-form">
      <div class="field"><label>${t("profile_name_label")}</label><input type="text" id="profile-name" required placeholder="${t("profile_name_ph")}" value="${escapeHtml(name)}"></div>
      <h4 style="margin:18px 0 4px">${t("profile_extra_section_title")}</h4>
      <p style="color:var(--gray-2);font-size:.85rem;margin:0 0 12px">${t("profile_extra_section_hint")}</p>
      ${profileExtraFieldsHtml("pf", state.user || {})}
      <button type="submit" class="btn btn-primary">${t("profile_save")}</button>
    </form>
    <div class="xp-explain-box" style="margin-top:18px;border:1px solid var(--border);border-radius:10px;padding:14px 16px">
      <h4 style="margin:0 0 6px">${t("xp_explain_title")} <span style="color:var(--gray-2);font-weight:500">(${xp} XP)</span></h4>
      <p style="color:var(--gray-2);font-size:.88rem;margin:0;line-height:1.6">${t("xp_explain_body")}</p>
    </div>`;
}

async function onSaveProfileSubmit(e) {
  e.preventDefault();
  const newName = document.getElementById("profile-name").value.trim();
  if (!newName) return;
  const extra = readProfileExtraFields("pf");
  if (!extra.phone || !extra.secondaryEmail || !extra.address.street || !extra.address.city || !extra.address.country) {
    state.accountMsg = { ok: false, text: t("profile_complete_required_error") };
    render();
    return;
  }
  try {
    const payload = { name: newName, phone: extra.phone, secondaryEmail: extra.secondaryEmail, address: extra.address, observations: extra.observations };
    if (state.pendingPhotoData) payload.photoData = state.pendingPhotoData;
    await db.collection("users").doc(state.user.uid).set(payload, { merge: true });
    state.user.name = newName;
    Object.assign(state.user, { phone: extra.phone, secondaryEmail: extra.secondaryEmail, address: extra.address, observations: extra.observations });
    if (state.pendingPhotoData) { state.user.photoData = state.pendingPhotoData; state.pendingPhotoData = null; }
    state.accountMsg = { ok: true, text: t("profile_saved") };
    updateProgressSummary().catch(err => console.warn(err)); // refleja nombre/foto/etc. para el admin
  } catch (err) {
    state.accountMsg = { ok: false, text: "Error: " + err.message };
  }
  render();
}

function renderAccountSecurityTab() {
  return `
    <h3>${t("account_tab_security")}</h3>
    <form id="pass-form">
      <div class="field"><label>${t("account_current_pass")}</label><div class="pass-wrap"><input type="password" id="cur-pass" required><button type="button" class="pass-eye" data-target="cur-pass" aria-label="${t("pass_show")}" title="${t("pass_show")}">👁️</button></div></div>
      <div class="field"><label>${t("account_new_pass")}</label><div class="pass-wrap"><input type="password" id="new-pass" required minlength="6"><button type="button" class="pass-eye" data-target="new-pass" aria-label="${t("pass_show")}" title="${t("pass_show")}">👁️</button></div></div>
      <div class="field"><label>${t("account_confirm_pass")}</label><div class="pass-wrap"><input type="password" id="new-pass2" required minlength="6"><button type="button" class="pass-eye" data-target="new-pass2" aria-label="${t("pass_show")}" title="${t("pass_show")}">👁️</button></div></div>
      <button type="submit" class="btn btn-primary">${t("account_change_pass_btn")}</button>
    </form>`;
}

function renderAccountAccessTab() {
  const log = state.myAccessLog || [];
  return `
    <h3>🕓 ${t("account_tab_access")}</h3>
    <p style="color:var(--gray-2);font-size:.85rem;margin-top:0">${t("access_log_own_hint")}</p>
    ${log.length === 0 ? `<p style="color:var(--gray-2)">${t("access_log_empty")}</p>` : `
    <table class="notas-table">
      <thead><tr><th>${t("access_log_col_date")}</th><th>${t("access_log_col_device")}</th></tr></thead>
      <tbody>
        ${log.map(a => `<tr><td>${formatAccessAt(a.at)}</td><td>${friendlyDeviceFromUA(a.userAgent)}</td></tr>`).join("")}
      </tbody>
    </table>`}`;
}

function renderAccountAppearanceTab() {
  return `
    <h3>${t("account_tab_appearance")}</h3>
    <span class="settings-label">${t("account_theme_label")}</span>
    <div class="theme-swatches">
      ${Object.keys(THEMES).map(id => {
        const th = THEMES[id];
        return `
        <div class="theme-swatch ${state.prefs.theme === id ? "active" : ""}" data-theme="${id}">
          <div class="dots"><div class="dot" style="background:${th.rojo}"></div><div class="dot" style="background:${th.amarillo}"></div></div>
          ${th.label}
        </div>`;
      }).join("")}
    </div>
    <span class="settings-label">${t("account_font_label")}</span>
    <div class="font-options">
      ${Object.keys(FONTS).map(id => `<div class="font-option ${state.prefs.font === id ? "active" : ""}" data-font="${id}" style="font-family:${FONTS[id].stack}">${FONTS[id].label}</div>`).join("")}
    </div>
    <span class="settings-label">${t("account_lang_label")}</span>
    <div class="lang-options">
      ${Object.keys(UI_LANGS).map(id => `<div class="lang-option ${state.prefs.lang === id ? "active" : ""}" data-lang="${id}">${UI_LANGS[id]}</div>`).join("")}
    </div>
    <div style="text-align:right;margin-top:8px"><button class="btn btn-primary btn-sm" id="save-appearance">${t("account_save_appearance")}</button></div>`;
}

// Pestaña propia "Voz" (Mi Cuenta): antes vivía dentro de "Apariencia", lo que confundía —
// ahora es una pestaña hermana, al mismo nivel que Perfil/Seguridad/Apariencia/Accesos.
function renderAccountVoiceTab() {
  return `
    <h3>🔊 ${t("account_tab_voice")}</h3>
    <span class="settings-label">${t("account_voice_label")}</span>
    <p class="voice-empty-note">${t("account_voice_hint")}</p>
    ${renderVoiceOptionsHtml("voiceURI", "v1", false)}
    <span class="settings-label" style="margin-top:18px">${t("account_voice2_label")}</span>
    <p class="voice-empty-note">${t("account_voice2_hint")}</p>
    ${renderVoiceOptionsHtml("voiceURI2", "v2", true)}
    <div style="text-align:right;margin-top:8px"><button class="btn btn-primary btn-sm" id="save-voice">${t("account_save_voice")}</button></div>`;
}

// Selector de voz de la síntesis de voz (TTS): hasta 4 voces en español distintas, detectadas
// en el navegador/dispositivo del alumno, cada una con botón de "escuchar ejemplo" antes de elegir.
// prefKey: "voiceURI" (Voz 1) o "voiceURI2" (Voz 2). allowClear agrega una opción para dejar
// la Voz 2 sin elegir (diálogos leídos por un solo narrador, con la Voz 1).
function renderVoiceOptionsHtml(prefKey, groupName, allowClear) {
  const options = getSpanishVoiceOptions();
  if (!options.length) {
    return `<p class="voice-empty-note">${t("account_voice_none")}</p>`;
  }
  const current = state.prefs[prefKey];
  const clearOption = allowClear ? `
    <div class="voice-option ${!current ? "active" : ""}" data-voice-uri="" data-voice-group="${groupName}">
      <span style="width:34px"></span>
      <div class="voice-option-info"><strong>${t("account_voice2_none_opt")}</strong></div>
      <span class="voice-option-check">${!current ? "✓" : ""}</span>
    </div>` : "";
  return `
    <div class="voice-options">
      ${clearOption}
      ${options.map(v => `
        <div class="voice-option ${current === v.voiceURI ? "active" : ""}" data-voice-uri="${escapeHtml(v.voiceURI)}" data-voice-group="${groupName}">
          <button type="button" class="voice-preview-btn" data-voice-preview="${escapeHtml(v.voiceURI)}" title="${t("account_voice_preview")}">🔊</button>
          <div class="voice-option-info">
            <strong>${escapeHtml(v.name)}</strong>
            <span>${voiceRegionLabel(v.lang)}</span>
          </div>
          <span class="voice-option-check">${current === v.voiceURI ? "✓" : ""}</span>
        </div>`).join("")}
    </div>`;
}

async function onChangePasswordSubmit(e) {
  e.preventDefault();
  const curPass = document.getElementById("cur-pass").value;
  const newPass = document.getElementById("new-pass").value;
  const newPass2 = document.getElementById("new-pass2").value;
  if (newPass !== newPass2) {
    state.accountMsg = { ok: false, text: t("account_pass_mismatch") };
    render();
    return;
  }
  try {
    const fbUser = auth.currentUser;
    const cred = firebase.auth.EmailAuthProvider.credential(fbUser.email, curPass);
    await fbUser.reauthenticateWithCredential(cred);
    await fbUser.updatePassword(newPass);
    state.accountMsg = { ok: true, text: t("account_pass_changed") };
  } catch (err) {
    state.accountMsg = { ok: false, text: translateFirebaseError(err) };
  }
  render();
}

async function onSaveAppearance() {
  try {
    await db.collection("users").doc(state.user.uid).set({ prefs: { ...state.prefs } }, { merge: true });
    localStorage.setItem("ey_ui_lang", state.prefs.lang);
    state.accountMsg = { ok: true, text: t("account_appearance_saved") };
  } catch (err) {
    state.accountMsg = { ok: false, text: "Error: " + err.message };
  }
  render();
}

/* ---------------------------------------------------------------------- */
/* 17. TELA: CRONOGRAMA DE ESTUDIO                                         */
/* ---------------------------------------------------------------------- */
function renderSchedule() {
  const schedule = getSchedule();
  const draftMonths = state.scheduleDraftMonths || schedule.durationMonths || DEFAULT_SCHEDULE_MONTHS;
  const sc = computeScheduleStatus();
  const lang = state.prefs.lang || "es";
  const plan = buildStudyPlan(draftMonths);
  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">${t("back_dashboard")}</button>
      <div class="section-title">${t("schedule_title")}</div>
      <div class="card">
        <p style="color:var(--gray-1);margin-top:0">${t("schedule_intro")}</p>
        <span class="settings-label">${t("schedule_duration_label")}</span>
        <div class="duration-chips">
          ${SCHEDULE_PRESETS.map(m => `<button type="button" class="duration-chip ${draftMonths === m ? "active" : ""}" data-months="${m}">${m} ${t("schedule_months_unit")}</button>`).join("")}
        </div>
        <div class="field" style="max-width:220px">
          <label>${t("schedule_custom_label")}</label>
          <input type="number" min="1" max="36" id="custom-months" value="${draftMonths}">
        </div>
        <div class="field" style="max-width:280px">
          <label>${t("schedule_start_label")}</label>
          <input type="text" disabled value="${formatDate(new Date(schedule.startDate), lang)}">
        </div>
        <div style="text-align:right"><button class="btn btn-primary btn-sm" id="save-schedule">${t("schedule_save")}</button></div>
        ${state.scheduleMsg ? `<div class="success-msg" style="margin-top:12px">${escapeHtml(state.scheduleMsg)}</div>` : ""}
      </div>
      <div class="card">
        <h3>${t("schedule_status_title")}</h3>
        <div class="schedule-status-grid">
          <span class="settings-label">${t("schedule_expected", { pct: sc.expectedPct })}</span>
          <span class="settings-label">${t("schedule_actual", { pct: sc.actualPct })}</span>
        </div>
        <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${sc.actualPct}%"></div></div>
        <p style="margin-top:14px">${sc.projectedDate ? t("schedule_projected", { date: formatDate(sc.projectedDate, lang) }) : t("schedule_projected_unknown")}</p>
      </div>
      <div class="card">
        <div class="section-title-row" style="margin:0 0 10px">
          <h3 style="margin:0">${t("schedule_plan_title")}</h3>
          <button class="btn btn-secondary btn-sm" id="go-schedule-edit">${t("schedule_edit_btn")}</button>
        </div>
        <div class="study-plan-list">
          ${plan.map(m => `<div class="study-plan-row"><div class="month-badge">${t("schedule_plan_month", { n: m.n })}</div><div class="month-label">${escapeHtml(m.label)}</div></div>`).join("")}
        </div>
      </div>
      <div class="bottom-space"></div>
    `, "schedule");
  attachShellEvents();
  document.getElementById("back-dash").onclick = () => { state.screen = "dashboard"; render(); };
  document.getElementById("go-schedule-edit").onclick = () => { state.screen = "scheduleEdit"; render(); };
  document.querySelectorAll(".duration-chip").forEach(chip => {
    chip.onclick = () => { state.scheduleDraftMonths = parseInt(chip.dataset.months, 10); render(); };
  });
  document.getElementById("custom-months").onchange = (e) => {
    const v = Math.max(1, Math.min(36, parseInt(e.target.value, 10) || DEFAULT_SCHEDULE_MONTHS));
    state.scheduleDraftMonths = v;
    render();
  };
  document.getElementById("save-schedule").onclick = async () => {
    const months = state.scheduleDraftMonths || draftMonths;
    try {
      const newSchedule = { ...schedule, durationMonths: months };
      await db.collection("progress").doc(state.user.uid).set({ schedule: newSchedule }, { merge: true });
      state.progress.schedule = newSchedule;
      updateProgressSummary();
      state.scheduleMsg = t("schedule_saved");
      render();
    } catch (e) {
      state.scheduleMsg = "Error: " + e.message;
      render();
    }
  };
}

/* ---------------------------------------------------------------------- */
/* 17a. TELA: PERSONALIZAR CRONOGRAMA (asignar contenido a cada mes)       */
/* ---------------------------------------------------------------------- */
function renderScheduleEdit() {
  const schedule = getSchedule();
  const durationMonths = schedule.durationMonths || DEFAULT_SCHEDULE_MONTHS;
  const units = buildFlattenedUnits();
  const autoMap = autoMonthForUnits(units, durationMonths);
  const assignments = { ...getScheduleAssignments() };
  const monthOptions = Array.from({ length: durationMonths }, (_, i) => i + 1);

  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-schedule">${t("back_dashboard")}</button>
      <div class="section-title">${t("schedule_edit_title")}</div>
      <div class="card">
        <p style="color:var(--gray-1);margin-top:0">${t("schedule_edit_intro")}</p>
        ${state.scheduleEditMsg ? `<div class="success-msg">${escapeHtml(state.scheduleEditMsg)}</div>` : ""}
        <table class="notas-table schedule-edit-table">
          <thead><tr><th>${t("schedule_edit_col_content")}</th><th style="width:160px">${t("schedule_edit_col_month")}</th></tr></thead>
          <tbody>
            ${units.map(u => {
              const lvl = getLevel(u.levelId);
              const current = assignments[u.id] || autoMap[u.id];
              return `
              <tr data-unit="${u.id}">
                <td>${lvl.icon} <strong>${escapeHtml(lvl.name)}</strong> — ${u.kind === "exam" ? "📝 " : ""}${escapeHtml(u.label)}</td>
                <td>
                  <select class="unit-month-select" data-unit="${u.id}">
                    ${monthOptions.map(m => `<option value="${m}" ${current === m ? "selected" : ""}>${t("schedule_plan_month", { n: m })}</option>`).join("")}
                  </select>
                </td>
              </tr>`;
            }).join("")}
          </tbody>
        </table>
        <div style="display:flex;gap:10px;justify-content:flex-end;margin-top:16px">
          <button class="btn btn-secondary btn-sm" id="reset-schedule-assignments">${t("schedule_edit_reset")}</button>
          <button class="btn btn-primary btn-sm" id="save-schedule-assignments">${t("schedule_edit_save")}</button>
        </div>
      </div>
      <div class="bottom-space"></div>
    `, "scheduleEdit");
  attachShellEvents();
  document.getElementById("back-schedule").onclick = () => { state.screen = "schedule"; render(); };

  const pendingAssignments = { ...assignments };
  document.querySelectorAll(".unit-month-select").forEach(sel => {
    sel.onchange = () => { pendingAssignments[sel.dataset.unit] = parseInt(sel.value, 10); };
  });

  document.getElementById("reset-schedule-assignments").onclick = async () => {
    try {
      await db.collection("progress").doc(state.user.uid).set({ scheduleAssignments: {} }, { merge: true });
      state.progress.scheduleAssignments = {};
      state.scheduleEditMsg = t("schedule_edit_saved");
      render();
    } catch (e) { alert("Error: " + e.message); }
  };

  document.getElementById("save-schedule-assignments").onclick = async () => {
    try {
      await db.collection("progress").doc(state.user.uid).set({ scheduleAssignments: pendingAssignments }, { merge: true });
      state.progress.scheduleAssignments = pendingAssignments;
      state.scheduleEditMsg = t("schedule_edit_saved");
      render();
    } catch (e) { alert("Error: " + e.message); }
  };
}

/* ---------------------------------------------------------------------- */
/* 17b. TELA: TUTORIAL / CÓMO FUNCIONA                                     */
/* ---------------------------------------------------------------------- */
const TUTORIAL_SECTIONS = {
  es: [
    { icon: "🏠", title: "Panel del Alumno", body: "Tu pantalla de inicio siempre te muestra UN solo próximo paso: el nivel y la lección exacta donde te quedaste, con un botón para continuar. El progreso general y tu situación con el cronograma también aparecen aquí." },
    { icon: "📚", title: "Mis Niveles", body: "Aquí ves el catálogo completo: Fundamentos, Básico, Intermedio, Avanzado y los módulos bono (Secretos del Español y Español Profesional). Un nivel bloqueado 🔒 muestra el temario (títulos de las lecciones) para que sepas qué viene, pero solo se abre después de aprobar la prueba del nivel anterior." },
    { icon: "✍️", title: "Ejercicios y pruebas", body: "Cada lección tiene ejercicios variados: opción múltiple, completar espacios, traducción, escucha, orden de diálogo, habla (con reconocimiento de voz) y preguntas abiertas/dissertativas (donde escribes libremente y luego ves una respuesta modelo). Al final de cada nivel principal hay una prueba con la nota mínima configurada por el administrador." },
    { icon: "🔊", title: "Audio y pronunciación", body: "Haz clic en el ícono 🔊 en cualquier texto, diálogo o palabra de vocabulario para escuchar la pronunciación en español de España, con la palabra hablada resaltada en tiempo real. En los ejercicios de tipo 'habla', usa el micrófono 🎤 — funciona mejor en Google Chrome." },
    { icon: "📊", title: "Mis Notas", body: "Muestra tu Aprovechamiento general (promedio de todas tus notas de lecciones y pruebas) y tu Cumplimiento del cronograma (si vas dentro del plazo), además de una tabla con el detalle de cada nivel." },
    { icon: "📈", title: "Mi Actividad", body: "Aquí ves cuántos ejercicios respondiste, tu precisión general, gráficos de aciertos por tipo de ejercicio y nivel, tus últimos errores y tus respuestas escritas (preguntas dissertativas)." },
    { icon: "📅", title: "Cronograma", body: "Por defecto el curso está pensado para 12 meses, pero puedes ajustarlo a 3, 6, 8, 12 o cualquier cantidad de meses. El sistema calcula tu % esperado vs. tu % real y proyecta una fecha de finalización según tu ritmo actual." },
    { icon: "📓", title: "Cuaderno", body: "Un espacio para tus propias anotaciones — crea, edita y elimina notas personales, guardadas en la nube. Solo tú puedes verlas." },
    { icon: "🎓", title: "Certificados", body: "Al aprobar la prueba de un nivel principal, se desbloquea un botón para descargar tu certificado en PDF, con un diseño único por nivel. Al completar Básico + Intermedio + Avanzado, se libera el Diploma Final del curso." },
  ],
  pt: [
    { icon: "🏠", title: "Painel do Aluno", body: "Sua tela inicial sempre mostra UM único próximo passo: o nível e a lição exata onde você parou, com um botão para continuar. O progresso geral e sua situação com o cronograma também aparecem aqui." },
    { icon: "📚", title: "Meus Níveis", body: "Aqui você vê o catálogo completo: Fundamentos, Básico, Intermediário, Avançado e os módulos bônus (Segredos do Espanhol e Espanhol Profissional). Um nível bloqueado 🔒 mostra o conteúdo (títulos das lições) para você saber o que vem, mas só abre depois de passar na prova do nível anterior." },
    { icon: "✍️", title: "Exercícios e provas", body: "Cada lição tem exercícios variados: múltipla escolha, completar espaços, tradução, escuta, ordem de diálogo, fala (com reconhecimento de voz) e perguntas abertas/dissertativas (onde você escreve livremente e depois vê uma resposta modelo). No final de cada nível principal há uma prova com a nota mínima configurada pelo administrador." },
    { icon: "🔊", title: "Áudio e pronúncia", body: "Clique no ícone 🔊 em qualquer texto, diálogo ou palavra de vocabulário para ouvir a pronúncia em espanhol da Espanha, com a palavra falada destacada em tempo real. Nos exercícios do tipo 'fala', use o microfone 🎤 — funciona melhor no Google Chrome." },
    { icon: "📊", title: "Minhas Notas", body: "Mostra seu Aproveitamento geral (média de todas as suas notas de lições e provas) e seu Cumprimento do cronograma (se você está dentro do prazo), além de uma tabela com o detalhe de cada nível." },
    { icon: "📈", title: "Minha Atividade", body: "Aqui você vê quantos exercícios respondeu, sua precisão geral, gráficos de acertos por tipo de exercício e nível, seus últimos erros e suas respostas escritas (perguntas dissertativas)." },
    { icon: "📅", title: "Cronograma", body: "Por padrão o curso é pensado para 12 meses, mas você pode ajustar para 3, 6, 8, 12 ou qualquer quantidade de meses. O sistema calcula seu % esperado vs. seu % real e projeta uma data de conclusão de acordo com seu ritmo atual." },
    { icon: "📓", title: "Caderno", body: "Um espaço para suas próprias anotações — crie, edite e exclua notas pessoais, salvas na nuvem. Só você pode vê-las." },
    { icon: "🎓", title: "Certificados", body: "Ao passar na prova de um nível principal, é liberado um botão para baixar seu certificado em PDF, com um design único por nível. Ao completar Básico + Intermediário + Avançado, é liberado o Diploma Final do curso." },
  ],
  en: [
    { icon: "🏠", title: "Student Panel", body: "Your home screen always shows ONE single next step: the level and exact lesson where you left off, with a button to continue. Overall progress and your schedule status also appear here." },
    { icon: "📚", title: "My Levels", body: "Here you'll find the full catalog: Fundamentos, Basic, Intermediate, Advanced and the bonus modules (Spanish Secrets and Professional Spanish). A locked level 🔒 shows its syllabus (lesson titles) so you know what's coming, but only opens after passing the previous level's exam." },
    { icon: "✍️", title: "Exercises and exams", body: "Each lesson has varied exercises: multiple choice, fill-in-the-blank, translation, listening, dialogue ordering, speaking (with voice recognition), and open/essay questions (where you write freely and then see a model answer). Each main level ends with an exam with the minimum score set by the admin." },
    { icon: "🔊", title: "Audio and pronunciation", body: "Click the 🔊 icon on any text, dialogue, or vocabulary word to hear Spain Spanish pronunciation, with the spoken word highlighted in real time. For 'speak' exercises, use the microphone 🎤 — works best in Google Chrome." },
    { icon: "📊", title: "My Grades", body: "Shows your overall performance (average of all your lesson and exam scores) and your schedule compliance (whether you're on track), plus a table with detail per level." },
    { icon: "📈", title: "My Activity", body: "Here you can see how many exercises you've answered, your overall accuracy, charts of correct answers by exercise type and level, your recent mistakes, and your written answers (essay questions)." },
    { icon: "📅", title: "Schedule", body: "By default the course is designed for 12 months, but you can adjust it to 3, 6, 8, 12, or any number of months. The system calculates your expected % vs. your actual %, and projects a completion date based on your current pace." },
    { icon: "📓", title: "Notebook", body: "A space for your own notes — create, edit and delete personal notes, saved in the cloud. Only you can see them." },
    { icon: "🎓", title: "Certificates", body: "Passing a main level's exam unlocks a button to download your certificate as a PDF, with a unique design per level. Completing Basic + Intermediate + Advanced unlocks the course's Final Diploma." },
  ],
};

function renderTutorial() {
  const lang = state.prefs.lang || "es";
  const sections = TUTORIAL_SECTIONS[lang] || TUTORIAL_SECTIONS.es;
  root.innerHTML = wrapShell(`
      <div class="section-title">❓ ${t("sidebar_tutorial")}</div>
      <div class="tutorial-grid">
        ${sections.map(s => `
          <div class="card tutorial-card">
            <div class="tutorial-icon">${s.icon}</div>
            <h3>${escapeHtml(s.title)}</h3>
            <p>${escapeHtml(s.body)}</p>
          </div>`).join("")}
      </div>
      <div class="bottom-space"></div>
    `, "tutorial");
  attachShellEvents();
}

/* ---------------------------------------------------------------------- */
/* 18. CERTIFICADOS EM PDF (jsPDF) — um modelo visual diferente por nivel  */
/* ---------------------------------------------------------------------- */
const CERT_THEMES = {
  fundamentos: {
    name: "Fundamentos", title: "CERTIFICADO DE PARTICIPACIÓN", subtitle: "Nivel Fundamentos",
    cefr: "Nivel inicial de preparación (Pre-A1 / A1)",
    primary: [170, 21, 27], secondary: [241, 191, 0], corner: "arc", seal: "circle",
  },
  basico: {
    name: "Básico", title: "CERTIFICADO DE FINALIZACIÓN", subtitle: "Nivel Básico",
    cefr: "Equivalente al nivel A2 del Marco Común Europeo de Referencia (MCER)",
    primary: [170, 21, 27], secondary: [241, 191, 0], corner: "laurel", seal: "medallion",
  },
  intermedio: {
    name: "Intermedio", title: "DIPLOMA DE FINALIZACIÓN", subtitle: "Nivel Intermedio",
    cefr: "Equivalente al nivel B1 del Marco Común Europeo de Referencia (MCER)",
    primary: [29, 92, 140], secondary: [232, 163, 61], corner: "lattice", seal: "shield",
  },
  avanzado: {
    name: "Avanzado", title: "DIPLOMA DE EXCELENCIA", subtitle: "Nivel Avanzado",
    cefr: "Equivalente al nivel B2 del Marco Común Europeo de Referencia (MCER)",
    primary: [107, 30, 60], secondary: [212, 160, 23], corner: "fleur", seal: "ribbon",
  },
  // Módulo bônus especial — modelo visual totalmente distinto de los demás (verde/marino
  // institucional, ornamento tipo "engranaje" evocando normas técnicas/ISO, sello hexagonal).
  normas: {
    name: "Normas", title: "CERTIFICADO ESPECIAL DE GRAMÁTICA NORMATIVA", subtitle: "Módulo Bônus: Español de las Normas",
    cefr: "Vocabulario técnico y gramática avanzada en contexto normativo/profesional",
    primary: [15, 76, 58], secondary: [201, 162, 39], corner: "gear", seal: "hexagon",
  },
};

function buildCertId(levelId) {
  const uidPart = ((state.user && state.user.uid) || "XXXXXX").slice(0, 6).toUpperCase();
  const levelCode = levelId.slice(0, 3).toUpperCase();
  const time36 = Date.now().toString(36).toUpperCase();
  return `EY-${levelCode}-${uidPart}-${time36}`;
}

function drawWatermark(doc, W, H, primary) {
  try {
    doc.saveGraphicsState && doc.saveGraphicsState();
    doc.setGState(new doc.GState({ opacity: 0.055 }));
    doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.setFont("times", "bold");
    doc.setFontSize(66);
    doc.text("ESPAÑOL YA", W / 2, H / 2 + 10, { align: "center", angle: 22 });
    doc.setGState(new doc.GState({ opacity: 1 }));
    doc.restoreGraphicsState && doc.restoreGraphicsState();
  } catch (e) { /* si el plugin de opacidad no está disponible, se omite la marca de agua sin romper el PDF */ }
}

function drawCornerOrnament(doc, W, H, style, color) {
  doc.setDrawColor(color[0], color[1], color[2]);
  const positions = [
    { x: 20, y: 20, fx: 1, fy: 1 },
    { x: W - 20, y: 20, fx: -1, fy: 1 },
    { x: 20, y: H - 20, fx: 1, fy: -1 },
    { x: W - 20, y: H - 20, fx: -1, fy: -1 },
  ];
  positions.forEach(({ x, y, fx, fy }) => {
    if (style === "arc") {
      doc.setLineWidth(0.6);
      doc.circle(x, y, 6.5, "S");
      doc.circle(x, y, 3.2, "S");
    } else if (style === "laurel") {
      doc.setLineWidth(0.45);
      for (let i = 0; i < 6; i++) {
        const ang = (20 + i * 12) * Math.PI / 180;
        const len = 9;
        doc.line(x, y, x + fx * len * Math.cos(ang), y + fy * len * Math.sin(ang));
      }
      doc.setFillColor(color[0], color[1], color[2]);
      doc.circle(x, y, 1.3, "F");
    } else if (style === "lattice") {
      doc.setLineWidth(0.4);
      [3, 5.5, 8].forEach(s => {
        const cx = x + fx * s * 0.4, cy = y + fy * s * 0.4;
        doc.line(cx, cy - s, cx + s, cy);
        doc.line(cx + s, cy, cx, cy + s);
        doc.line(cx, cy + s, cx - s, cy);
        doc.line(cx - s, cy, cx, cy - s);
      });
    } else if (style === "fleur") {
      doc.setLineWidth(0.5);
      doc.triangle(x - fx * 6, y, x + fx * 6, y, x, y + fy * 9, "S");
      doc.circle(x, y - fy * 3, 1.6, "S");
      doc.circle(x - fx * 7, y, 1.1, "S");
      doc.circle(x + fx * 7, y, 1.1, "S");
    } else if (style === "gear") {
      // Ornamento tipo "engranaje" — evoca normas técnicas / ISO.
      doc.setLineWidth(0.55);
      doc.circle(x, y, 5.5, "S");
      for (let i = 0; i < 8; i++) {
        const ang = (i * 45) * Math.PI / 180;
        const r1 = 5.5, r2 = 8.3;
        doc.line(
          x + fx * r1 * Math.cos(ang), y + fy * r1 * Math.sin(ang),
          x + fx * r2 * Math.cos(ang), y + fy * r2 * Math.sin(ang)
        );
      }
      doc.setFillColor(color[0], color[1], color[2]);
      doc.circle(x, y, 1.6, "F");
    }
  });
}

function drawSeal(doc, cx, cy, style, primary, secondary) {
  if (style === "circle") {
    doc.setDrawColor(primary[0], primary[1], primary[2]);
    doc.setLineWidth(0.8);
    doc.circle(cx, cy, 11, "S");
    doc.circle(cx, cy, 8, "S");
    doc.setFont("times", "bold"); doc.setFontSize(15); doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.text("★", cx, cy + 2.2, { align: "center" });
  } else if (style === "medallion") {
    doc.setDrawColor(primary[0], primary[1], primary[2]);
    doc.setLineWidth(1); doc.circle(cx, cy, 12.5, "S");
    doc.setLineWidth(0.5); doc.circle(cx, cy, 9.5, "S");
    doc.setFont("times", "bold"); doc.setFontSize(8.5); doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.text("APROBADO", cx, cy + 1.2, { align: "center" });
    doc.setFillColor(primary[0], primary[1], primary[2]);
    doc.triangle(cx - 6, cy + 11, cx - 1, cy + 11, cx - 3.5, cy + 22, "F");
    doc.setFillColor(secondary[0], secondary[1], secondary[2]);
    doc.triangle(cx + 1, cy + 11, cx + 6, cy + 11, cx + 3.5, cy + 22, "F");
  } else if (style === "shield") {
    doc.setDrawColor(primary[0], primary[1], primary[2]);
    doc.setFillColor(255, 255, 255);
    doc.setLineWidth(0.9);
    doc.rect(cx - 9, cy - 12, 18, 16, "FD");
    doc.triangle(cx - 9, cy + 4, cx + 9, cy + 4, cx, cy + 14, "FD");
    doc.setFont("times", "bold"); doc.setFontSize(9); doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.text("B1", cx, cy - 2, { align: "center" });
  } else if (style === "ribbon") {
    doc.setFillColor(primary[0], primary[1], primary[2]);
    doc.rect(cx - 22, cy - 6, 44, 12, "F");
    doc.setFillColor(secondary[0], secondary[1], secondary[2]);
    doc.triangle(cx - 22, cy - 6, cx - 22, cy + 6, cx - 28, cy, "F");
    doc.triangle(cx + 22, cy - 6, cx + 22, cy + 6, cx + 28, cy, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(9); doc.setTextColor(255, 255, 255);
    doc.text("EXCELENCIA", cx, cy + 3, { align: "center" });
  } else if (style === "hexagon") {
    // Sello hexagonal — distinto de los círculos/escudo/cinta de los demás modelos.
    const drawHex = (r, lw) => {
      const pts = [];
      for (let i = 0; i < 6; i++) {
        const ang = (60 * i - 90) * Math.PI / 180;
        pts.push([cx + r * Math.cos(ang), cy + r * Math.sin(ang)]);
      }
      doc.setLineWidth(lw);
      for (let i = 0; i < 6; i++) {
        const a = pts[i], b = pts[(i + 1) % 6];
        doc.line(a[0], a[1], b[0], b[1]);
      }
    };
    doc.setDrawColor(primary[0], primary[1], primary[2]);
    drawHex(13, 0.9);
    drawHex(9.5, 0.4);
    doc.setFillColor(primary[0], primary[1], primary[2]);
    doc.circle(cx, cy, 1, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(8.5); doc.setTextColor(primary[0], primary[1], primary[2]);
    doc.text("ISO", cx, cy - 2, { align: "center" });
    doc.setFontSize(6);
    doc.text("VERIFICADO", cx, cy + 4, { align: "center" });
  }
}

function drawCertificateBase(doc, W, H, cfg) {
  doc.setFillColor(255, 253, 248);
  doc.rect(0, 0, W, H, "F");
  doc.setDrawColor(cfg.primary[0], cfg.primary[1], cfg.primary[2]);
  doc.setLineWidth(2.4);
  doc.rect(7, 7, W - 14, H - 14);
  doc.setDrawColor(cfg.secondary[0], cfg.secondary[1], cfg.secondary[2]);
  doc.setLineWidth(0.7);
  doc.rect(11, 11, W - 22, H - 22);

  drawWatermark(doc, W, H, cfg.primary);
  drawCornerOrnament(doc, W, H, cfg.corner, cfg.primary);

  const fx = W / 2 - 13, fy = 16;
  doc.setFillColor(170, 21, 27); doc.rect(fx, fy, 26, 4, "F");
  doc.setFillColor(241, 191, 0); doc.rect(fx, fy + 4, 26, 6, "F");
  doc.setFillColor(170, 21, 27); doc.rect(fx, fy + 10, 26, 4, "F");
  doc.setDrawColor(180, 180, 180); doc.setLineWidth(0.2);
  doc.rect(fx, fy, 26, 14);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(120, 120, 120);
  doc.text("¡ESPAÑOL YA! — CURSO INTERACTIVO DE ESPAÑOL", W / 2, fy + 21, { align: "center" });
}

function generateCertificatePDF(levelId, opts) {
  const sample = opts && opts.sample;
  if (!window.jspdf) { alert("No se pudo cargar el generador de PDF. Verifica tu conexión a internet e intenta de nuevo."); return; }
  const cfg = CERT_THEMES[levelId];
  const lvl = getLevel(levelId);
  const p = sample ? { examPassed: true, examScore: 95 } : levelProgress(levelId);
  if (!cfg || !lvl || !p.examPassed) return;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const W = 297, H = 210;

  drawCertificateBase(doc, W, H, cfg);

  doc.setFont("times", "bold");
  doc.setFontSize(25);
  doc.setTextColor(cfg.primary[0], cfg.primary[1], cfg.primary[2]);
  doc.text(cfg.title, W / 2, 50, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(90, 90, 90);
  doc.text(`${cfg.subtitle} · ¡Español Ya! — Curso Interactivo de Español`, W / 2, 58, { align: "center" });

  doc.setFontSize(12);
  doc.setTextColor(70, 70, 70);
  doc.text("Se otorga el presente documento a:", W / 2, 75, { align: "center" });

  const studentName = sample ? "Nombre de Ejemplo" : ((state.user && (state.user.name || state.user.email)) || "Alumno/a");
  doc.setFont("times", "bolditalic");
  doc.setFontSize(29);
  doc.setTextColor(30, 30, 30);
  doc.text(studentName, W / 2, 91, { align: "center" });
  const nameWidth = doc.getTextWidth(studentName);
  doc.setDrawColor(cfg.secondary[0], cfg.secondary[1], cfg.secondary[2]);
  doc.setLineWidth(0.8);
  doc.line(W / 2 - Math.max(60, nameWidth / 2 + 6), 96, W / 2 + Math.max(60, nameWidth / 2 + 6), 96);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11.5);
  doc.setTextColor(70, 70, 70);
  const bodyText = `por haber completado satisfactoriamente el nivel "${lvl.name}" del curso ¡Español Ya!, con una calificación final de ${p.examScore}%.`;
  const bodyLines = doc.splitTextToSize(bodyText, 190);
  doc.text(bodyLines, W / 2, 108, { align: "center" });

  const cefrY = 108 + bodyLines.length * 6 + 4;
  doc.setFont("times", "italic");
  doc.setFontSize(10);
  doc.setTextColor(cfg.primary[0], cfg.primary[1], cfg.primary[2]);
  doc.text(cfg.cefr, W / 2, cefrY, { align: "center" });

  if (p.examScore >= 90) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(cfg.secondary[0], cfg.secondary[1], cfg.secondary[2]);
    doc.text("★ CON MENCIÓN DE EXCELENCIA ★", W / 2, cefrY + 8, { align: "center" });
  }

  drawSeal(doc, W / 2, 152, cfg.seal, cfg.primary, cfg.secondary);

  const dateStr = formatDate(new Date(), "es");
  const certId = buildCertId(levelId);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(110, 110, 110);
  doc.text(`Emitido el ${dateStr}`, 26, 176);
  doc.text(`ID: ${certId}`, 26, 181);

  doc.setDrawColor(120, 120, 120);
  doc.setLineWidth(0.3);
  doc.line(W - 95, 174, W - 26, 174);
  doc.setFont("times", "bolditalic");
  doc.setFontSize(11);
  doc.setTextColor(40, 40, 40);
  doc.text("¡Español Ya!", W - 60.5, 170, { align: "center" });
  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(110, 110, 110);
  doc.text("Sistema · Emisión Automática Verificada", W - 60.5, 179, { align: "center" });

  doc.setFontSize(7);
  doc.setTextColor(130, 130, 130);
  doc.text("Plataforma desarrollada por Quallisi® — Consultoría y Auditoría", W / 2, 191, { align: "center" });
  doc.text(`Este certificado puede verificarse por su ID único: ${certId}`, W / 2, 195.5, { align: "center" });

  // Nombre del archivo pedido por el admin: "Cert_{Etapa}_Español_YA_{MM-AAAA}", con el
  // mes/año de EMISIÓN del certificado (no de aprobación), sin el nombre del alumno.
  const issueDate = new Date();
  const etapaSlug = lvl.name.replace(/\s+/g, "_");
  const mmYYYY = `${String(issueDate.getMonth() + 1).padStart(2, "0")}-${issueDate.getFullYear()}`;
  doc.save(`${sample ? "Ejemplo_" : ""}Cert_${etapaSlug}_Español_YA_${mmYYYY}.pdf`);
}

// Vista previa del layout de certificado, usada en Admin → Certificados, sin exigir
// que el nivel esté realmente aprobado (nombre y nota son de ejemplo).
function generateSampleCertificatePDF(levelId) {
  generateCertificatePDF(levelId, { sample: true });
}

function generateFinalDiplomaPDF() {
  if (!window.jspdf) { alert("No se pudo cargar el generador de PDF. Verifica tu conexión a internet e intenta de nuevo."); return; }
  const allPassed = MAIN_SEQUENCE.every(id => levelProgress(id).examPassed);
  if (!allPassed) return;

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
  const W = 297, H = 210;
  const cfg = { primary: [30, 26, 20], secondary: [197, 155, 58], corner: "fleur" };

  doc.setFillColor(252, 250, 244); doc.rect(0, 0, W, H, "F");
  doc.setDrawColor(cfg.secondary[0], cfg.secondary[1], cfg.secondary[2]); doc.setLineWidth(3); doc.rect(6, 6, W - 12, H - 12);
  doc.setDrawColor(cfg.primary[0], cfg.primary[1], cfg.primary[2]); doc.setLineWidth(0.6); doc.rect(11, 11, W - 22, H - 22);
  doc.setDrawColor(cfg.secondary[0], cfg.secondary[1], cfg.secondary[2]); doc.setLineWidth(0.3); doc.rect(14, 14, W - 28, H - 28);

  drawWatermark(doc, W, H, cfg.primary);
  drawCornerOrnament(doc, W, H, "fleur", cfg.secondary);

  const fx = W / 2 - 13, fy = 15;
  doc.setFillColor(170, 21, 27); doc.rect(fx, fy, 26, 4, "F");
  doc.setFillColor(241, 191, 0); doc.rect(fx, fy + 4, 26, 6, "F");
  doc.setFillColor(170, 21, 27); doc.rect(fx, fy + 10, 26, 4, "F");
  doc.setDrawColor(150, 150, 150); doc.setLineWidth(0.2);
  doc.rect(fx, fy, 26, 14);

  doc.setFont("helvetica", "bold"); doc.setFontSize(9); doc.setTextColor(120, 120, 120);
  doc.text("¡ESPAÑOL YA! — CURSO INTERACTIVO DE ESPAÑOL", W / 2, fy + 21, { align: "center" });

  doc.setFont("times", "bold"); doc.setFontSize(27); doc.setTextColor(cfg.primary[0], cfg.primary[1], cfg.primary[2]);
  doc.text("DIPLOMA DE FINALIZACIÓN COMPLETA", W / 2, 51, { align: "center" });
  doc.setFont("helvetica", "normal"); doc.setFontSize(11); doc.setTextColor(cfg.secondary[0], cfg.secondary[1], cfg.secondary[2]);
  doc.text("Niveles Fundamentos · Básico · Intermedio · Avanzado", W / 2, 59, { align: "center" });

  doc.setFontSize(12); doc.setTextColor(70, 70, 70);
  doc.text("Se otorga el presente diploma a:", W / 2, 74, { align: "center" });

  const studentName = (state.user && (state.user.name || state.user.email)) || "Alumno/a";
  doc.setFont("times", "bolditalic"); doc.setFontSize(29); doc.setTextColor(20, 20, 20);
  doc.text(studentName, W / 2, 90, { align: "center" });
  const nw = doc.getTextWidth(studentName);
  doc.setDrawColor(cfg.secondary[0], cfg.secondary[1], cfg.secondary[2]); doc.setLineWidth(0.8);
  doc.line(W / 2 - Math.max(60, nw / 2 + 6), 95, W / 2 + Math.max(60, nw / 2 + 6), 95);

  doc.setFont("helvetica", "normal"); doc.setFontSize(11); doc.setTextColor(70, 70, 70);
  const bodyLines = doc.splitTextToSize("por haber completado exitosamente todos los niveles principales del curso ¡Español Ya!, demostrando dominio progresivo del idioma español desde lo básico hasta lo avanzado.", 195);
  doc.text(bodyLines, W / 2, 106, { align: "center" });

  let ty = 106 + bodyLines.length * 6 + 8;
  doc.setFontSize(9.5);
  const cols = MAIN_SEQUENCE.filter(id => id !== "fundamentos");
  const colWidth = 58;
  const startX = W / 2 - (colWidth * cols.length) / 2;
  cols.forEach((id, i) => {
    const lvl = getLevel(id); const p = levelProgress(id);
    const cx = startX + i * colWidth + colWidth / 2;
    doc.setFont("helvetica", "bold"); doc.setTextColor(cfg.primary[0], cfg.primary[1], cfg.primary[2]);
    doc.text(`${lvl.icon} ${lvl.name}`, cx, ty, { align: "center" });
    doc.setFont("helvetica", "normal"); doc.setTextColor(90, 90, 90);
    doc.text(`${p.examScore}%`, cx, ty + 5, { align: "center" });
  });

  const sealY = Math.min(ty + 26, 168);
  drawSeal(doc, W / 2, sealY, "medallion", cfg.primary, cfg.secondary);

  const dateStr = formatDate(new Date(), "es");
  const certId = buildCertId("final");
  doc.setFont("helvetica", "normal"); doc.setFontSize(8.5); doc.setTextColor(110, 110, 110);
  doc.text(`Emitido el ${dateStr}`, 26, 178);
  doc.text(`ID: ${certId}`, 26, 183);

  doc.setDrawColor(120, 120, 120); doc.setLineWidth(0.3);
  doc.line(W - 95, 176, W - 26, 176);
  doc.setFont("times", "bolditalic"); doc.setFontSize(11); doc.setTextColor(40, 40, 40);
  doc.text("¡Español Ya!", W - 60.5, 172, { align: "center" });
  doc.setFont("helvetica", "normal"); doc.setFontSize(7.5); doc.setTextColor(110, 110, 110);
  doc.text("Sistema · Emisión Automática Verificada", W - 60.5, 181, { align: "center" });

  doc.setFontSize(7); doc.setTextColor(130, 130, 130);
  doc.text("Plataforma desarrollada por Quallisi® — Consultoría y Auditoría", W / 2, 191, { align: "center" });
  doc.text(`Este diploma puede verificarse por su ID único: ${certId}`, W / 2, 195.5, { align: "center" });

  const safeName = (studentName || "alumno").replace(/[^\w]+/g, "_");
  doc.save(`Diploma_Final_${safeName}.pdf`);
}

/* ---------------------------------------------------------------------- */
/* 19. IMÁGENES DE LAS LECCIONES (una imagen real y única por lección)     */
/* ---------------------------------------------------------------------- */
// Todas las imágenes vienen de Wikimedia Commons (licencia libre) vía Special:FilePath,
// que redirige de forma estable al archivo real sin necesitar hospedar nada aparte.
function wikimediaImg(filename) {
  return "https://commons.wikimedia.org/wiki/Special:FilePath/" + filename;
}

const LESSON_IMAGES = {
  // Fundamentos
  "fund-0": { file: "Pen-writing-notes-studying.jpg", alt: "Estudiante escribiendo apuntes", caption: "Todo comienzo empieza con la motivación de aprender." },
  "fund-1": { file: "Spanish_language_World_Map.svg", alt: "Mapa del español en el mundo", caption: "El español se habla en más de 20 países." },
  "fund-2": { file: "Fountain_pen_writing_(literacy).jpg", alt: "Pluma escribiendo letras", caption: "Cada letra tiene su propio sonido en español." },
  "fund-3": { file: "Classroom_blackboard_at_Cornell_University,_Ithaca,_NY_25.jpg", alt: "Pizarra de aula", caption: "La sílaba tónica cambia el significado de las palabras." },
  "fund-4": { file: "Jigsaw_Puzzle.svg", alt: "Piezas de rompecabezas", caption: "Separar en sílabas es como armar un rompecabezas." },
  // Básico
  "b1":  { file: "Man_and_Woman_Shaking_Hands.jpg", alt: "Saludo entre dos personas", caption: "¡Hola! Así empiezan todas las conversaciones." },
  "b2":  { file: "Flag_map_of_the_World.svg", alt: "Mapa de banderas del mundo", caption: "Cada país tiene su propia nacionalidad y bandera." },
  "b3":  { file: "Family_Portrait.jpg", alt: "Retrato de familia", caption: "La familia es el primer vocabulario que aprendemos." },
  "b4":  { file: "Kitchen_alarm_clock.JPG", alt: "Despertador", caption: "La rutina diaria empieza con el despertador." },
  "b5":  { file: "Portraits_from_human_ethnic_groups.jpg", alt: "Retratos de personas diversas", caption: "Describir el aspecto físico de las personas." },
  "b6":  { file: "Tapa_aceitunas.JPG", alt: "Tapa de aceitunas españolas", caption: "El restaurante y la comida típica española." },
  "b7":  { file: "Working_at_office_(Unsplash).jpg", alt: "Persona trabajando en la oficina", caption: "El vocabulario de la oficina y los materiales de trabajo." },
  "b8":  { file: "Living_Room.jpg", alt: "Sala de estar", caption: "La casa y sus espacios." },
  "b9":  { file: "Honeycomb_ice_cream_and_hot_toffee_sauce_(5725734559).jpg", alt: "Postre de helado", caption: "Hablar de preferencias y gustos." },
  "b10": { file: "Adult_male_diagram_template.svg", alt: "Diagrama del cuerpo humano", caption: "Las partes del cuerpo y la salud." },
  "b11": { file: "Crossroads_sign_-_geograph.org.uk_-_466404.jpg", alt: "Señal de cruce de caminos", caption: "Cómo pedir y dar direcciones." },
  "b12": { file: "Marbella_Beach,_Costa_Del_Sol,_Spain_-_Sept_2008.jpg", alt: "Playa de Marbella, España", caption: "El viaje de vacaciones soñado." },
  "b13": { file: "Woman_reading_a_book_on_lap_(Unsplash).jpg", alt: "Persona leyendo", caption: "¿Qué estás haciendo ahora mismo?" },
  "b14": { file: "Storm_clouds.jpg", alt: "Nubes de tormenta", caption: "El clima y sus expresiones." },
  "b15": { file: "Cabalgata_de_los_Reyes_Magos.jpg", alt: "Cabalgata de los Reyes Magos", caption: "La Navidad española y sus tradiciones." },
  // Intermedio
  "i1":  { file: "Supermarket_shelves.jpg", alt: "Estantes de supermercado", caption: "De compras por frutas y verduras." },
  "i2":  { file: "Briefcase-photo.jpg", alt: "Maletín de negocios", caption: "Un viaje de negocios y el pretérito perfecto compuesto." },
  "i3":  { file: "Three_Way_Conversation_(8391270573).jpg", alt: "Personas conversando", caption: "¿Con quién hablabas? El pretérito imperfecto." },
  "i4":  { file: "Maryse_cuisine.JPG", alt: "Cocina doméstica", caption: "Los objetos de la casa y el pasado continuo." },
  "i5":  { file: "Sunrise_at_ocean.JPG", alt: "Amanecer sobre el mar", caption: "Hablar del futuro: mañana será otro día." },
  "i6":  { file: "Color_Concert.jpg", alt: "Concierto con luces de colores", caption: "De gira: el condicional y los consejos." },
  "i7":  { file: "School_children_doing_exams_inside_a_classroom_(15727213731).jpg", alt: "Estudiantes haciendo un examen", caption: "Preparación para el examen DELE." },
  "i8":  { file: "WAITING.jpg", alt: "Persona esperando", caption: "Buscando empleo: comparativos y superlativos." },
  "i9":  { file: "Cassell's_dictionary_of_cookery_-_containing_about_nine_thousand_recipes_(1892)_(14770089371).jpg", alt: "Libro antiguo de recetas", caption: "Cómo escribir una receta paso a paso." },
  "i10": { file: "Modern_Fashion_Store-3.jpg", alt: "Tienda de moda", caption: "Gustos, lugares de la ciudad y ropa." },
  "i11": { file: "Miami_traffic_jam,_I-95_North_rush_hour.jpg", alt: "Atasco de tráfico", caption: "El tránsito y los transportes." },
  "i12": { file: "1960s_Ericsson_Etelphone_706_Diakon_Black_Rotary_Dial_Wall_Telephone.JPG", alt: "Teléfono antiguo de disco", caption: "Frases útiles para una llamada telefónica." },
  "i13": { file: "Iconsiam_shopping_mall.jpg", alt: "Centro comercial", caption: "Vamos de compras: colores y condicionales." },
  "i14": { file: "Albuquerque_International_Sunport_terminal_from_tarmac_02.jpg", alt: "Terminal de aeropuerto", caption: "Frases esenciales para el aeropuerto." },
  "i15": { file: "Creative_Commons_Birthday_Cake_and_Candles_(4825652728).jpg", alt: "Pastel de cumpleaños con velas", caption: "Celebrando un cumpleaños en español." },
  // Avanzado
  "a1":  { file: "Frying_pan.jpeg", alt: "Sartén de cocina", caption: "Utensilios y verbos culinarios." },
  "a2":  { file: "Pike_Place_Market_-_Sosio's_Produce_01.jpg", alt: "Mercado al aire libre", caption: "El comercio: comprar y vender." },
  "a3":  { file: "Old_American_Stock_Exchange_Building_2009.JPG", alt: "Edificio de la bolsa de valores", caption: "La economía, el banco y el mercado laboral." },
  "a4":  { file: "Charles_Baldwin_House.jpg", alt: "Casa residencial", caption: "Comprar, vender y alquilar un inmueble." },
  "a5":  { file: "Writing_a_letter.jpg", alt: "Escribiendo una carta", caption: "La correspondencia formal en español." },
  "a6":  { file: "International_Students.jpg", alt: "Estudiantes internacionales", caption: "La vida académica en el intercambio." },
  "a7":  { file: "Working_in_open_office_space_(Unsplash).jpg", alt: "Espacio de trabajo abierto", caption: "Cómo montar un currículo atractivo." },
  "a8":  { file: "Young_Woman_in_an_Interview.jpg", alt: "Entrevista de trabajo", caption: "La entrevista de trabajo en español." },
  "a9":  { file: "Beautiful_green_forest.jpg", alt: "Bosque verde", caption: "La naturaleza y el medio ambiente." },
  "a10": { file: "Pasant_Theatre_from_seats.JPG", alt: "Sala de teatro", caption: "El entretenimiento y el ocio." },
  "a11": { file: "Hotel_Room_-_Embassy_Suites_by_Hilton_St._Paul_Downtown_(31347597404).jpg", alt: "Habitación de hotel", caption: "El check-in y los objetos del cuarto." },
  "a12": { file: "SoFi_Stadium_soccer_game.jpg", alt: "Estadio de fútbol", caption: "Los deportes y los numerales especiales." },
  "a13": { file: "Close-up_Acoustic_Guitar.jpg", alt: "Guitarra acústica", caption: "La música y sus ritmos." },
  "a14": { file: "Hand-tool_set_with_bits_and_accessories_arranged_on_a_white_surface..jpg", alt: "Juego de herramientas", caption: "Las herramientas y el discurso indirecto." },
  "a15": { file: "Old_Books_01.JPG", alt: "Libros antiguos", caption: "Las palabras, su concordancia y su historia." },
  // Secretos del Español
  "s1": { file: "Confused_young_woman.jpg", alt: "Persona confundida", caption: "Cuidado con los falsos amigos del español." },
  "s2": { file: "Library_book_stacks.jpg", alt: "Estantería de biblioteca", caption: "Palabras similares, significados diferentes." },
  "s3": { file: "Flag_map_of_Latin_America.svg", alt: "Mapa de banderas de Latinoamérica", caption: "Jergas y expresiones de cada país." },
  "s4": { file: "The_grandmother’s_lesson_(1880-81),_by_Silvestro_Lega.jpg", alt: "La lección de la abuela", caption: "La sabiduría popular en los dichos y refranes." },
  "s5": { file: "Flag_Map_of_South_America.png", alt: "Mapa de banderas de Sudamérica", caption: "El mismo objeto, palabras distintas según el país." },
  "s6": { file: "Old_man_laughing_out_loud_in_Don_Det.jpg", alt: "Persona riendo", caption: "Trabalenguas: diversión con la pronunciación." },
  // Español Profesional
  "p1": { file: "Analyzing_Financial_Data_(5099605109).jpg", alt: "Analizando datos financieros", caption: "El vocabulario esencial de auditoría." },
  "p2": { file: "Meeting_room,_table_and_paper_board.jpg", alt: "Sala de reuniones", caption: "Frases para abrir y cerrar una reunión de auditoría." },
  "p3": { file: "Conference_room_table_(Unsplash).jpg", alt: "Mesa de sala de conferencias", caption: "Cómo redactar el informe y el plan de auditoría." },
  "p4": { file: "Workspace_Looking_Out.jpg", alt: "Espacio de trabajo profesional", caption: "Comunicación formal: correos y llamadas de negocios." },
  // Español de las Normas (módulo bônus especial — gramática a partir de las normas ISO)
  "n1": { file: "Audit_Cycle.jpg", alt: "Ciclo de auditoría de calidad", caption: "El verbo que manda: deber + infinitivo (ISO 9001)." },
  "n2": { file: "Reduce_Reuse_Recycle.jpg", alt: "Símbolo de reducir, reusar y reciclar", caption: "Concordancia en cadena y el se impersonal (ISO 14001)." },
  "n3": { file: "Occupational_Safety_Equipment.jpg", alt: "Equipo de protección personal", caption: "El subjuntivo del riesgo (ISO 45001)." },
  "n4": { file: "Cybersecurity.png", alt: "Ilustración de ciberseguridad", caption: "La voz pasiva de la seguridad (ISO/IEC 27001)." },
  "n5": { file: "Team_work.jpg", alt: "Equipo trabajando en conjunto", caption: "Repaso integrador: la auditoría de las cuatro normas." },
};

function lessonHeroImageHtml(lessonId) {
  const img = LESSON_IMAGES[lessonId];
  if (!img) return "";
  return `
    <div class="lesson-hero">
      <img src="${wikimediaImg(img.file)}" alt="${escapeHtml(img.alt)}" loading="lazy"
           onerror="this.closest('.lesson-hero').style.display='none'">
      <div class="lesson-hero-caption">${escapeHtml(img.caption)}</div>
    </div>`;
}

// Pool de imágenes extra por lección (además de la imagen única en LESSON_IMAGES), para que
// los ejercicios roten entre varias fotos temáticas en vez de repetir siempre la misma.
// Se completa gradualmente lección por lección — cada entrada necesita un archivo verificado
// en Wikimedia Commons. Mientras una lección no tenga entrada aquí, el pool cae de forma
// segura a la única imagen ya curada (nunca se muestra un enlace roto).
const LESSON_IMAGES_EXTRA = {
  // Ejemplo de formato al ampliar: "b1": [{ file: "...", alt: "...", caption: "..." }],
  // Primer lote verificado (Básico) — cada archivo fue confirmado como existente en
  // Wikimedia Commons antes de agregarlo aquí.
  "b1": [{ file: "Handshake.jpg", alt: "Apretón de manos", caption: "El primer contacto: un saludo cordial." }],
  "b3": [{ file: "Kennedy_family_portrait_photograph_(KFC-008-019-p0001).jpg", alt: "Retrato de familia", caption: "Presentar a los miembros de la familia." }],
  "b6": [{ file: "Tapas_para_2.jpg", alt: "Tapas españolas variadas", caption: "Pedir tapas para compartir en el restaurante." }],
  "b7": [{ file: "Work_Meeting.jpg", alt: "Reunión de trabajo", caption: "El vocabulario de las reuniones de oficina." }],
  "b9": [{ file: "Ice_Cream_Dessert_(Unsplash).jpg", alt: "Postre de helado", caption: "¿Qué postre prefieres?" }],
  "b12": [{ file: "El_Campello,_Costa_Blanca,_Spain.jpg", alt: "Costa Blanca, España", caption: "Otro rincón de la costa española para soñar con las vacaciones." }],
};

function getLessonImagePool(lessonId) {
  if (!lessonId) return [];
  const main = LESSON_IMAGES[lessonId];
  const extra = LESSON_IMAGES_EXTRA[lessonId] || [];
  return main ? [main, ...extra] : extra;
}

// Imagen temática mostrada dentro de la tarjeta de ejercicio (más pequeña que el "hero" de
// apertura de lección). Rota entre el pool de la lección según el índice del ejercicio, sin
// repetir la misma imagen dos veces seguidas cuando hay más de una disponible.
function exerciseImageHtml(lessonId, exerciseIdx) {
  const pool = getLessonImagePool(lessonId);
  if (!pool.length) return "";
  const img = pool[exerciseIdx % pool.length];
  return `
    <div class="lesson-hero ex-hero">
      <img src="${wikimediaImg(img.file)}" alt="${escapeHtml(img.alt)}" loading="lazy"
           onerror="this.closest('.ex-hero').style.display='none'">
    </div>`;
}