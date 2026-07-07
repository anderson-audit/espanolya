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
    result_pass_title: "¡Aprobado!", result_fail_title: "Todavía no...", result_lesson_title: "¡Ejercicios completados!",
    result_min_score: "Nota mínima exigida: {score}%", result_unlocked: "🔓 ¡Has desbloqueado el próximo nivel!",
    result_retry_msg: "Repasa la lección y vuelve a intentar la prueba cuando estés listo(a).",
    btn_back_to: "Volver a {name}", btn_retry: "Intentar de nuevo",
    admin_title: "⚙️ Panel de Administrador", admin_scores_title: "Nota mínima para aprobar cada nivel (%)",
    admin_save: "Guardar configuración", admin_saved: "¡Configuración guardada!",
    admin_gabarito_title: "Liberación del gabarito", admin_gabarito_label: "¿Cuándo se muestra la respuesta correcta?",
    admin_gabarito_immediate: "Inmediato — al responder cada pregunta", admin_gabarito_after: "Solo al finalizar — el alumno revisa todo junto al terminar",
    admin_gabarito_hint: "Elige si el alumno ve la respuesta correcta apenas responde cada pregunta, o si prefieres ocultarla durante el ejercicio/prueba. En los dos casos, el alumno siempre puede consultar después sus respuestas y el gabarito completo en la pantalla de Revisión.",
    admin_students_title: "Alumnos y progreso ({n})", admin_no_students: "Todavía no hay alumnos con pruebas realizadas.",
    back_panel: "← Volver al panel",
    account_title: "👤 Mi Cuenta", account_tab_security: "Seguridad", account_tab_appearance: "Apariencia", account_tab_profile: "Perfil",
    profile_name_label: "Nombre completo", profile_name_ph: "Tu nombre", profile_save: "Guardar nombre", profile_saved: "¡Nombre actualizado!",
    account_current_pass: "Contraseña actual", account_new_pass: "Nueva contraseña", account_confirm_pass: "Confirmar nueva contraseña",
    account_change_pass_btn: "Cambiar contraseña", account_pass_mismatch: "Las contraseñas nuevas no coinciden.",
    account_pass_changed: "¡Contraseña actualizada con éxito!", account_theme_label: "Color del tema", account_font_label: "Fuente",
    account_lang_label: "Idioma de la interfaz", account_save_appearance: "Guardar apariencia", account_appearance_saved: "¡Apariencia guardada!",
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
    admin_nav_certs: "Certificados", admin_nav_config: "Configuración",
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
    result_pass_title: "Aprovado!", result_fail_title: "Ainda não...", result_lesson_title: "Exercícios concluídos!",
    result_min_score: "Nota mínima exigida: {score}%", result_unlocked: "🔓 Você desbloqueou o próximo nível!",
    result_retry_msg: "Revise a lição e tente a prova novamente quando estiver pronto(a).",
    btn_back_to: "Voltar a {name}", btn_retry: "Tentar novamente",
    admin_title: "⚙️ Painel do Administrador", admin_scores_title: "Nota mínima para aprovar cada nível (%)",
    admin_save: "Salvar configuração", admin_saved: "Configuração salva!",
    admin_gabarito_title: "Liberação do gabarito", admin_gabarito_label: "Quando a resposta correta é exibida?",
    admin_gabarito_immediate: "Imediato — ao responder cada pergunta", admin_gabarito_after: "Só ao final — o aluno revisa tudo junto ao terminar",
    admin_gabarito_hint: "Escolha se o aluno vê a resposta correta assim que responde cada pergunta, ou se prefere ocultá-la durante o exercício/prova. Nos dois casos, o aluno sempre pode consultar depois suas respostas e o gabarito completo na tela de Revisão.",
    admin_students_title: "Alunos e progresso ({n})", admin_no_students: "Ainda não há alunos com provas realizadas.",
    back_panel: "← Voltar ao painel",
    account_title: "👤 Minha Conta", account_tab_security: "Segurança", account_tab_appearance: "Aparência", account_tab_profile: "Perfil",
    profile_name_label: "Nome completo", profile_name_ph: "Seu nome", profile_save: "Salvar nome", profile_saved: "Nome atualizado!",
    account_current_pass: "Senha atual", account_new_pass: "Nova senha", account_confirm_pass: "Confirmar nova senha",
    account_change_pass_btn: "Alterar senha", account_pass_mismatch: "As novas senhas não coincidem.",
    account_pass_changed: "Senha atualizada com sucesso!", account_theme_label: "Cor do tema", account_font_label: "Fonte",
    account_lang_label: "Idioma da interface", account_save_appearance: "Salvar aparência", account_appearance_saved: "Aparência salva!",
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
    admin_nav_certs: "Certificados", admin_nav_config: "Configurações",
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
    result_pass_title: "Passed!", result_fail_title: "Not yet...", result_lesson_title: "Exercises completed!",
    result_min_score: "Minimum required score: {score}%", result_unlocked: "🔓 You've unlocked the next level!",
    result_retry_msg: "Review the lesson and retry the exam when you're ready.",
    btn_back_to: "Back to {name}", btn_retry: "Try again",
    admin_title: "⚙️ Admin Panel", admin_scores_title: "Minimum passing score per level (%)",
    admin_save: "Save settings", admin_saved: "Settings saved!",
    admin_gabarito_title: "Answer key release", admin_gabarito_label: "When is the correct answer shown?",
    admin_gabarito_immediate: "Immediately — as each question is answered", admin_gabarito_after: "Only at the end — the student reviews everything together when finished",
    admin_gabarito_hint: "Choose whether the student sees the correct answer right after answering each question, or whether you'd rather hide it during the exercise/exam. Either way, the student can always check their answers and the full answer key afterward on the Review screen.",
    admin_students_title: "Students and progress ({n})", admin_no_students: "No students have taken exams yet.",
    back_panel: "← Back to panel",
    account_title: "👤 My Account", account_tab_security: "Security", account_tab_appearance: "Appearance", account_tab_profile: "Profile",
    profile_name_label: "Full name", profile_name_ph: "Your name", profile_save: "Save name", profile_saved: "Name updated!",
    account_current_pass: "Current password", account_new_pass: "New password", account_confirm_pass: "Confirm new password",
    account_change_pass_btn: "Change password", account_pass_mismatch: "New passwords don't match.",
    account_pass_changed: "Password updated successfully!", account_theme_label: "Theme color", account_font_label: "Font",
    account_lang_label: "Interface language", account_save_appearance: "Save appearance", account_appearance_saved: "Appearance saved!",
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
    admin_nav_certs: "Certificates", admin_nav_config: "Settings",
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
};

applyTheme(state.prefs.theme);
applyFont(state.prefs.font);

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
function computeScheduleStatus() {
  const schedule = getSchedule();
  const total = totalUnitsCount();
  const actual = actualUnitsCompleted();
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
            <div class="field"><label>${t("auth_password")}</label><input type="password" id="f-pass" required placeholder="${t("auth_password_ph")}" minlength="6"></div>` : ""}
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
  root.innerHTML = `
    <div class="auth-wrap">
      <div class="auth-grid">
        <div class="auth-hero">
          <div class="auth-hero-flag"><div></div><div></div><div></div></div>
          <div class="auth-hero-emblem">${rejected ? "🚫" : "⏳"}</div>
          <h1>${t("auth_hero_title")}</h1>
          <p>${t("auth_hero_sub")}</p>
        </div>
        <div class="auth-card">
          <div class="flag-strip"><div></div><div></div><div></div></div>
          <h1>¡Español Ya!</h1>
          <div class="auth-sub">${rejected ? t("pending_rejected_title") : t("pending_title")}</div>
          <p style="color:var(--gray-2);line-height:1.6;margin:14px 0 22px">${rejected ? t("pending_rejected_msg") : t("pending_msg")}</p>
          <button class="btn btn-primary btn-block" id="pending-logout">${t("pending_logout_btn")}</button>
        </div>
      </div>
    </div>`;
  document.getElementById("pending-logout").onclick = () => auth.signOut();
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
    state.user = { uid: fbUser.uid, email: fbUser.email, name: userData.name, role: userData.role, status };
    state.prefs = { theme: "espana", font: "poppins", lang: state.prefs.lang || "es", ...(userData.prefs || {}) };
    applyTheme(state.prefs.theme);
    applyFont(state.prefs.font);
    localStorage.setItem("ey_ui_lang", state.prefs.lang);

    if (state.user.role !== "admin" && state.user.status !== "approved") {
      // Cuenta todavía no aprobada (o rechazada) por un administrador: no cargamos
      // progreso/config, solo mostramos la pantalla de espera/rechazo.
      state.screen = "pendingApproval";
      render();
      return;
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

    await loadConfig();
    await loadVoices();

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
  } catch (e) { console.warn("No se pudo cargar config, usando valores por defecto.", e); }
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
  if (ex.type === "listen") return ex.answer;
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
  return voices.find(v => v.lang === "es-ES") ||
         voices.find(v => v.lang && v.lang.startsWith("es-ES")) ||
         voices.find(v => v.lang && v.lang.startsWith("es")) ||
         null;
}

function logout() { auth.signOut(); }

/* ---------------------------------------------------------------------- */
/* 7. TTS COM DESTAQUE DE PALAVRAS (karaokê)                               */
/* ---------------------------------------------------------------------- */
function speak(text, onWordSpans, btn) {
  if (!("speechSynthesis" in window)) { alert("Tu navegador no soporta síntesis de voz. Prueba con Google Chrome."); return; }
  speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = "es-ES";
  const voice = pickSpanishVoice();
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
  };
  speechSynthesis.speak(utter);
}

function wrapWordsForHighlight(text) {
  const words = text.split(/(\s+)/);
  return words.map(w => w.trim() ? `<span class="hl-word">${escapeHtml(w)}</span>` : w).join("");
}

function attachSpeakButton(container, text) {
  const btn = container.querySelector(".speak-icon-btn");
  const spans = Array.from(container.querySelectorAll(".hl-word"));
  if (btn) btn.onclick = () => speak(text, spans, btn);
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
          <button class="avatar-btn" id="btn-account-avatar" title="${t("account_title")}">${initials}</button>
          <div class="who"><strong>${escapeHtml((state.user && state.user.name) || "")}</strong><span>⭐ ${(state.progress && state.progress.xp) || 0} XP</span></div>
        </div>
        <button class="sidebar-item" id="btn-logout" title="${t("topbar_logout")}">
          <span class="ico">🚪</span><span class="label">${t("topbar_logout")}</span>
        </button>
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
      <div class="xp-pill">⭐ ${xp} XP</div>
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
function levelHeroImageUrl(levelId) {
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
  return `
    <div class="section-title">${t("panel_title")}</div>
    <div class="panel-summary">
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
        <div class="home-stat-card">
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
      <button class="back-link" id="back-dash">← Volver a los módulos</button>
      <div class="lesson-header">
        <h2>${lvl.icon} ${lvl.name}</h2>
        <div class="sub">${lvl.description}</div>
      </div>
      ${!unlocked ? `<div class="locked-banner">🔒 ${t("level_locked_alert")}${prevLvl ? ` (${prevLvl.name})` : ""} — ${t("level_preview_note")}</div>` : ""}
      ${lvl.lessons.map((lesson, i) => {
        const lp = p.lessonsCompleted && p.lessonsCompleted[lesson.id];
        const done = lp && lp.done;
        const hasReview = done && Array.isArray(lp.review) && lp.review.length > 0;
        return `
        <div class="lesson-row ${done ? "done" : ""} ${!unlocked ? "locked preview-only" : ""}" data-lesson="${unlocked ? lesson.id : ""}">
          <div class="num">${done ? "✓" : !unlocked ? "🔒" : (lesson.order || i + 1)}</div>
          <div class="info"><h4>${escapeHtml(lesson.title)}</h4><span>${escapeHtml(lesson.subtitle || "")}</span></div>
          ${hasReview ? `<button class="btn-icon lesson-review-btn" data-lesson-review="${lesson.id}" title="Ver mis respuestas y el gabarito">🔍</button>` : ""}
          <div class="chev">${unlocked ? "›" : ""}</div>
        </div>`;
      }).join("")}
      ${lvl.exam ? `
      <div class="lesson-row exam-row ${!unlocked ? "locked" : ""}" id="go-exam" data-locked="${!unlocked}">
        <div class="num">${unlocked ? "📝" : "🔒"}</div>
        <div class="info"><h4>${lvl.exam.title}</h4><span>Nota mínima para aprobar: ${passScoreFor(lvl.id)}%${p.examPassed ? " · ✅ Aprobado con " + p.examScore + "%" : ""}</span></div>
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
    if (examBtn) examBtn.onclick = () => startExam(state.currentLevelId);
  }
  document.querySelectorAll(".lesson-review-btn").forEach(btn => {
    btn.onclick = (ev) => {
      ev.stopPropagation();
      if (btn.dataset.lessonReview) {
        const lesson = lvl.lessons.find(l => l.id === btn.dataset.lessonReview);
        const lp = p.lessonsCompleted[btn.dataset.lessonReview];
        openReview({ title: `✍️ ${lesson ? lesson.title : "Ejercicios"} — ${lvl.name}`, items: lp.review || [], backTo: "lessonList" });
      } else if (btn.dataset.examReview) {
        openReview({ title: `📝 ${lvl.exam ? lvl.exam.title : "Prueba"} — ${lvl.name}`, items: p.examReview || [], backTo: "lessonList" });
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
      <button class="back-link" id="back-list">← Volver a ${lvl.name}</button>
      <div class="lesson-header">
        <h2>${escapeHtml(lesson.title)}</h2>
        <div class="sub">${escapeHtml(lesson.subtitle || "")}</div>
      </div>
      ${lessonHeroImageHtml(lesson.id)}`;

  if (lesson.text) {
    html += `<div class="card"><h3>📖 Texto</h3><div class="dialogue-line" data-fulltext="${escapeHtml(lesson.text)}">
      <div class="bubble"><span class="text-content">${wrapWordsForHighlight(lesson.text)}</span>
      <button class="speak-icon-btn" title="Escuchar">🔊</button></div></div></div>`;
  }
  if (lesson.dialogue && lesson.dialogue.length) {
    html += `<div class="card"><h3>💬 Diálogo</h3>` + lesson.dialogue.map((d, i) => `
      <div class="dialogue-line" data-idx="${i}">
        <div class="who">${escapeHtml(d.who)}</div>
        <div class="bubble"><span class="text-content">${wrapWordsForHighlight(d.es)}</span>
        <button class="speak-icon-btn" title="Escuchar">🔊</button></div>
      </div>`).join("") + `</div>`;
  }
  if (lesson.vocabulary && lesson.vocabulary.length) {
    html += `<div class="card"><h3>🗂️ Vocabulario</h3>` + lesson.vocabulary.map(group => `
      <div class="vocab-group">
        <h4>${escapeHtml(group.category)}</h4>
        <div class="vocab-chips">
          ${group.items.map(it => `
            <div class="vocab-chip" data-say="${escapeHtml(it.es)}">
              <button title="Escuchar">🔊</button>
              <span>${escapeHtml(it.es)}${it.pt ? `<span class="pt"> — ${escapeHtml(it.pt)}</span>` : ""}</span>
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

  html += `
      <div style="text-align:center;margin: 24px 0 40px">
        <button class="btn btn-primary" id="start-exercises" style="padding:16px 34px">Empezar ejercicios (${lesson.exercises.length}) →</button>
      </div>
      <div class="bottom-space"></div>`;
  root.innerHTML = wrapShell(html, "lesson");
  attachShellEvents();
  document.getElementById("back-list").onclick = () => { state.screen = "lessonList"; render(); };

  document.querySelectorAll(".dialogue-line").forEach(line => {
    const text = line.dataset.fulltext || (lesson.dialogue && lesson.dialogue[line.dataset.idx] ? lesson.dialogue[line.dataset.idx].es : "");
    attachSpeakButton(line, text);
  });
  document.querySelectorAll(".vocab-chip").forEach(chip => {
    chip.querySelector("button").onclick = () => speak(chip.dataset.say, null, null);
  });

  document.getElementById("start-exercises").onclick = () => startLessonExercises(lesson);
}

/* ---------------------------------------------------------------------- */
/* 13. MOTOR DE EXERCÍCIOS                                                 */
/* ---------------------------------------------------------------------- */
function startLessonExercises(lesson) {
  state.exerciseQueue = lesson.exercises;
  state.exerciseIndex = 0;
  state.exerciseAnswers = [];
  state.exerciseDetails = [];
  state.isExam = false;
  state.screen = "exercises";
  render();
}

function startExam(levelId) {
  const lvl = getLevel(levelId);
  if (!lvl.exam) return;
  state.exerciseQueue = lvl.exam.questions;
  state.exerciseIndex = 0;
  state.exerciseAnswers = [];
  state.exerciseDetails = [];
  state.isExam = true;
  state.screen = "exam";
  render();
}

function currentExercise() { return state.exerciseQueue[state.exerciseIndex]; }

function renderExercise() {
  const ex = currentExercise();
  const total = state.exerciseQueue.length;
  const idx = state.exerciseIndex;
  let body = "";

  if (ex.type === "mc") {
    body = `
      <div class="ex-question">${escapeHtml(ex.q)}</div>
      <div class="ex-options">
        ${ex.options.map((opt, i) => `<button class="ex-option" data-i="${i}">${escapeHtml(opt)}</button>`).join("")}
      </div>
      <div id="ex-feedback"></div>
      <div class="ex-actions"><button class="btn btn-primary" id="ex-next" disabled>Siguiente →</button></div>`;
  } else if (ex.type === "fill" || ex.type === "translate") {
    const label = ex.type === "translate" ? `Traduce${ex.from === "pt" ? " (Português → Español)" : " (Español → Português)"}: ${escapeHtml(ex.text)}` : escapeHtml(ex.q);
    body = `
      <div class="ex-question">${label}</div>
      <input type="text" class="ex-input" id="ex-answer" placeholder="Escribe tu respuesta aquí..." autocomplete="off">
      <div class="ex-actions"><button class="btn btn-secondary btn-sm" id="ex-check">Comprobar</button><button class="btn btn-primary" id="ex-next" disabled>Siguiente →</button></div>
      <div id="ex-feedback"></div>`;
  } else if (ex.type === "listen") {
    body = `
      <div class="ex-question">🎧 ${escapeHtml(ex.q)}</div>
      <div style="text-align:center;margin-bottom:18px"><button class="mic-btn" id="ex-play" style="background:var(--rojo)">🔊</button></div>
      <input type="text" class="ex-input" id="ex-answer" placeholder="Tu respuesta..." autocomplete="off">
      <div class="ex-actions"><button class="btn btn-secondary btn-sm" id="ex-check">Comprobar</button><button class="btn btn-primary" id="ex-next" disabled>Siguiente →</button></div>
      <div id="ex-feedback"></div>`;
  } else if (ex.type === "speak") {
    body = `
      <div class="ex-question">🎙️ ${escapeHtml(ex.prompt)}</div>
      <div class="speak-target">"${escapeHtml(ex.target)}"</div>
      <div style="text-align:center"><button class="mic-btn" id="ex-mic">🎤</button></div>
      <div class="speak-transcript" id="ex-transcript"></div>
      <div id="ex-feedback"></div>
      <div class="ex-actions"><button class="btn btn-secondary btn-sm" id="ex-skip">No puedo grabar ahora</button><button class="btn btn-primary" id="ex-next" disabled>Siguiente →</button></div>`;
  } else if (ex.type === "order") {
    body = `
      <div class="ex-question">Ordena el diálogo (haz clic en orden):</div>
      <div id="order-list">${ex.items.map((it, i) => `<div class="order-item" data-i="${i}">${escapeHtml(it)}</div>`).join("")}</div>
      <div id="ex-feedback"></div>
      <div class="ex-actions"><button class="btn btn-secondary btn-sm" id="ex-check">Comprobar</button><button class="btn btn-primary" id="ex-next" disabled>Siguiente →</button></div>`;
  } else if (ex.type === "open") {
    body = `
      <div class="ex-question">✍️ ${escapeHtml(ex.q)}</div>
      <textarea class="ex-input" id="ex-answer" rows="3" placeholder="Escribe tu respuesta..."></textarea>
      ${isGabaritoImmediate()
        ? `<div class="ex-feedback ok">Respuesta modelo: <em>${escapeHtml(ex.sample || "")}</em></div>`
        : `<div class="ex-feedback neutral">📝 Vas a poder comparar tu respuesta con la respuesta modelo en la Revisión, al terminar.</div>`}
      <div class="ex-actions"><button class="btn btn-primary" id="ex-next">Siguiente →</button></div>`;
  }

  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-exit">✕ Salir</button>
      <div class="card exercise-card">
        <div class="ex-progress">${state.isExam ? "Prueba" : "Ejercicio"} ${idx + 1} / ${total}</div>
        <div class="progress-bar-track"><div class="progress-bar-fill" style="width:${Math.round(((idx) / total) * 100)}%"></div></div>
        <br>
        ${body}
      </div>
      <div class="bottom-space"></div>
    `, state.isExam ? "exam" : "exercises");
  attachShellEvents();
  document.getElementById("back-exit").onclick = () => {
    if (confirm("¿Seguro que quieres salir? Vas a perder el progreso de este ejercicio/prueba.")) {
      state.screen = state.isExam ? "lessonList" : "lessonList";
      render();
    }
  };

  wireExerciseInteractions(ex);
}

function markAnswered(correct) {
  state.exerciseAnswers.push(correct);
  const nextBtn = document.getElementById("ex-next");
  if (nextBtn) nextBtn.disabled = false;
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
  if (nextBtn) nextBtn.onclick = goToNextExercise;

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
      };
    });
  }

  if (ex.type === "fill" || ex.type === "translate") {
    document.getElementById("ex-check").onclick = () => {
      const val = document.getElementById("ex-answer").value;
      const target = ex.answer;
      const alts = ex.altAnswers || [];
      const correct = similarity(val, target) > 0.82 || alts.some(a => similarity(val, a) > 0.82);
      showFeedback(correct, target);
      markAnswered(correct);
      logAttempt(ex, correct, val);
      document.getElementById("ex-answer").disabled = true;
      document.getElementById("ex-check").disabled = true;
    };
  }

  if (ex.type === "listen") {
    document.getElementById("ex-play").onclick = () => speak(ex.audioText, null, document.getElementById("ex-play"));
    document.getElementById("ex-check").onclick = () => {
      const val = document.getElementById("ex-answer").value;
      const correct = similarity(val, ex.answer) > 0.6; // resposta livre/descritiva, mais tolerante
      showFeedback(correct, ex.answer);
      markAnswered(correct);
      logAttempt(ex, correct, val);
      document.getElementById("ex-answer").disabled = true;
      document.getElementById("ex-check").disabled = true;
    };
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
    document.getElementById("ex-check").onclick = () => {
      const correct = JSON.stringify(chosen) === JSON.stringify(ex.correctOrder);
      showFeedback(correct, "Orden correcto aplicado.");
      markAnswered(correct);
      logAttempt(ex, correct, chosen.join(" → "));
      document.getElementById("ex-check").disabled = true;
    };
  }

  if (ex.type === "speak") {
    const micBtn = document.getElementById("ex-mic");
    const transcriptEl = document.getElementById("ex-transcript");
    const rec = getSpeechRecognition();
    document.getElementById("ex-skip").onclick = () => { markAnswered(true); showFeedback(true, ex.target); logAttempt(ex, true, "(omitido)"); document.getElementById("ex-skip").disabled = true; };
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
      };
      rec.onerror = () => { micBtn.classList.remove("listening"); transcriptEl.textContent = "No se pudo escuchar. Intenta de nuevo o usa 'No puedo grabar ahora'."; };
      rec.onend = () => micBtn.classList.remove("listening");
    }
  }
}

function goToNextExercise() {
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

  if (state.isExam) {
    const passScore = passScoreFor(state.currentLevelId);
    const passed = score >= passScore;
    await saveExamResult(state.currentLevelId, score, passed, review);
    state.lastResult = { score, passed, levelId: state.currentLevelId, isExam: true, review };
  } else {
    await saveLessonResult(state.currentLevelId, state.currentLessonId, score, review);
    state.lastResult = { score, passed: true, levelId: state.currentLevelId, isExam: false, lessonId: state.currentLessonId, review };
  }
  state.screen = "result";
  render();
}

async function saveLessonResult(levelId, lessonId, score, review) {
  const ref = db.collection("progress").doc(state.user.uid);
  const field = `levels.${levelId}.lessonsCompleted.${lessonId}`;
  const xpGain = 10 + Math.round(score / 10);
  await ref.update({
    [field]: { done: true, score, review: review || [], at: firebase.firestore.FieldValue.serverTimestamp() },
    xp: firebase.firestore.FieldValue.increment(xpGain)
  });
  if (!state.progress.levels[levelId]) state.progress.levels[levelId] = { lessonsCompleted: {} };
  if (!state.progress.levels[levelId].lessonsCompleted) state.progress.levels[levelId].lessonsCompleted = {};
  state.progress.levels[levelId].lessonsCompleted[lessonId] = { done: true, score, review: review || [] };
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
      levels: Object.fromEntries(Object.entries(state.progress.levels).map(([k, v]) => [k, { examScore: v.examScore || null, examPassed: !!v.examPassed }]))
    }, { merge: true });
  } catch (e) { console.warn("No se pudo actualizar el resumen para el admin.", e); }
}

async function saveExamResult(levelId, score, passed, review) {
  const ref = db.collection("progress").doc(state.user.uid);
  const xpGain = passed ? 50 : 5;
  const idx = MAIN_SEQUENCE.indexOf(levelId);
  const nextId = idx >= 0 ? MAIN_SEQUENCE[idx + 1] : null;
  const updates = {
    [`levels.${levelId}.examScore`]: score,
    [`levels.${levelId}.examPassed`]: passed,
    [`levels.${levelId}.examReview`]: review || [],
    xp: firebase.firestore.FieldValue.increment(xpGain)
  };
  if (passed && nextId) updates[`levels.${nextId}.unlocked`] = true;
  await ref.update(updates);

  if (!state.progress.levels[levelId]) state.progress.levels[levelId] = {};
  state.progress.levels[levelId].examScore = score;
  state.progress.levels[levelId].examPassed = passed;
  state.progress.levels[levelId].examReview = review || [];
  state.progress.xp = (state.progress.xp || 0) + xpGain;
  if (passed && nextId) {
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
/* 13c. TELA: MI ACTIVIDAD (analíticas propias del alumno)                 */
/* ---------------------------------------------------------------------- */
async function loadMyAttempts() {
  try {
    if (!state.user) return;
    const snap = await db.collection("attempts").where("uid", "==", state.user.uid).orderBy("at", "desc").limit(300).get();
    state.myAttempts = snap.docs.map(d => ({ id: d.id, ...d.data() }));
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

function parseSongLyrics(raw) {
  return (raw || "")
    .split("\n")
    .map(l => l.trim())
    .filter(l => l.length > 0);
}

// Texto limpio de una línea (huecos resueltos a la palabra real) — usado para mostrar la
// letra completa en la pantalla de "escuchar y leer" y para el ejercicio de ordenar versos.
function songLineClean(line) {
  return line.replace(SONG_BLANK_RE, (_, word) => word);
}

// Cuenta cuántos huecos {{...}} hay en una línea, sin generar los ejercicios todavía.
function songLineBlankCount(line) {
  return (line.match(SONG_BLANK_RE) || []).length;
}

// A partir de las líneas ya separadas (parseSongLyrics), arma la fila de ejercicios:
// un "fill" por cada hueco marcado (reutiliza el motor de ejercicios ya existente, con
// gabarito inmediato/al final según la configuración del admin) + un "order" final con
// un tramo de la canción (hasta 8 líneas) para practicar el orden de los versos.
function buildSongExercises(lines) {
  const exercises = [];
  lines.forEach(line => {
    let match;
    SONG_BLANK_RE.lastIndex = 0;
    while ((match = SONG_BLANK_RE.exec(line)) !== null) {
      const word = match[1];
      const blankedLine = line.replace(SONG_BLANK_RE, (m, w) => (w === word && m === match[0]) ? "___" : w);
      exercises.push({ type: "fill", q: `Completa la letra: "${blankedLine}"`, answer: word });
    }
  });
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
  return {
    id: doc.id,
    title: doc.title || "Canción",
    subtitle: doc.artist || "",
    youtubeId: doc.youtubeId || "",
    lyricsLines: lines.map(songLineClean),
    exercises: buildSongExercises(lines),
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
  root.innerHTML = wrapShell(`
      <div class="card result-wrap">
        <div class="result-emoji-ring ${r.isExam && !r.passed ? "fail" : "pass"}"><span class="result-emoji">${r.isExam ? (r.passed ? "🎉" : "😕") : "✅"}</span></div>
        <h2>${r.isExam ? (r.passed ? "¡Aprobado!" : "Todavía no...") : "¡Ejercicios completados!"}</h2>
        <div class="result-score ${r.passed ? "pass" : "fail"}">${r.score}%</div>
        ${r.isExam ? `<p>Nota mínima exigida: ${passScoreFor(r.levelId)}%</p>` : ""}
        ${r.isExam && r.passed ? `<p>🔓 ¡Has desbloqueado el próximo nivel!</p>` : ""}
        ${r.isExam && !r.passed ? `<p>Repasa la lección y vuelve a intentar la prueba cuando estés listo(a).</p>` : ""}
        <div style="display:flex;gap:12px;justify-content:center;margin-top:20px;flex-wrap:wrap">
          <button class="btn btn-secondary" id="res-back">Volver a ${lvl.name}</button>
          ${r.review && r.review.length ? `<button class="btn btn-gold" id="res-review">🔍 Ver mis respuestas y el gabarito</button>` : ""}
          ${r.isExam && !r.passed ? `<button class="btn btn-primary" id="res-retry">Intentar de nuevo</button>` : ""}
        </div>
      </div>
      <div class="bottom-space"></div>
    `, "result");
  attachShellEvents();
  document.getElementById("res-back").onclick = () => { state.screen = "lessonList"; render(); };
  const retry = document.getElementById("res-retry");
  if (retry) retry.onclick = () => startExam(r.levelId);
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
      <button class="back-link" id="review-back">← Volver</button>
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
  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">← Volver al panel</button>
      <div class="section-title">${t("admin_title")}</div>
      ${adminTabsHtml("admin")}
      <div class="home-stats-row">
        <div class="home-stat-card"><span class="hs-label">${t("analytics_students_count")}</span><strong class="hs-value">${totalStudents}</strong></div>
        <div class="home-stat-card"><span class="hs-label">⭐ XP (promedio)</span><strong class="hs-value">${avgXp}</strong></div>
        <div class="home-stat-card"><span class="hs-label">${t("admin_nav_certs")}</span><strong class="hs-value">🎓</strong></div>
      </div>
      <div class="card">
        <h3>${t("admin_scores_title")}</h3>
        ${passRates.map(r => `
          <div class="config-row">
            <span>${getLevel(r.id).icon} ${getLevel(r.id).name}</span>
            <span style="color:var(--gray-2);font-size:.85rem">${r.passed} / ${r.attempted || 0} ${t("notas_status_passed")}</span>
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
    else loadAdminStudents().then(render);
  });
}

function renderAdminApprovals() {
  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">← Volver al panel</button>
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
    else loadAdminStudents().then(render);
  });
  document.querySelectorAll("[data-approve]").forEach(b => b.onclick = () => approveUser(b.dataset.approve));
  document.querySelectorAll("[data-reject]").forEach(b => b.onclick = () => rejectUser(b.dataset.reject));
}

function renderAdminStudents() {
  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">← Volver al panel</button>
      <div class="section-title">${t("admin_title")}</div>
      ${adminTabsHtml("adminStudents")}
      <div class="card">
        <h3>${t("admin_students_title", { n: state.adminStudents.length })}</h3>
        ${state.adminStudents.length === 0 ? `<p style="color:var(--gray-2)">${t("admin_no_students")}</p>` : state.adminStudents.map(s => `
          <div class="student-row">
            <div><strong>${escapeHtml(s.name || s.email)}</strong><br><span style="color:var(--gray-2)">${escapeHtml(s.email || "")}</span></div>
            <div>⭐ ${s.xp || 0} XP</div>
            <div>${MAIN_SEQUENCE.map(id => (s.levels && s.levels[id] && s.levels[id].examPassed) ? `<span class="badge admin" style="background:var(--success)">${id} ✓</span>` : "").join(" ")}</div>
          </div>`).join("")}
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
    else loadAdminStudents().then(render);
  });
}

function renderAdminConfig() {
  const ps = state.config.passScores;
  const schedule = getSchedule();
  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">← Volver al panel</button>
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
}

function renderAdminCerts() {
  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">← Volver al panel</button>
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
  const recentErrors = attempts.filter(a => !a.correct).slice(0, 12);
  const openResponses = attempts.filter(a => a.exType === "open").slice(0, 20);
  const studentNameFor = (uid) => {
    const s = state.adminStudents.find(x => x.id === uid);
    return s ? (s.name || s.email) : uid;
  };

  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">← Volver al panel</button>
      <div class="section-title">${t("analytics_admin_title")}</div>
      ${adminTabsHtml("adminAnalytics")}
      <div class="home-stats-row">
        <div class="home-stat-card"><span class="hs-label">${t("analytics_students_count")}</span><strong class="hs-value">${totalStudents}</strong></div>
        <div class="home-stat-card"><span class="hs-label">${t("analytics_avg_score")}</span><strong class="hs-value">${avgScore !== null ? avgScore + "%" : "—"}</strong></div>
        <div class="home-stat-card"><span class="hs-label">${t("analytics_total_attempts")}</span><strong class="hs-value">${attempts.length}</strong></div>
      </div>
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
    else loadAdminStudents().then(render);
  });
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
    : renderAccountAppearanceTab();
  root.innerHTML = wrapShell(`
      <button class="back-link" id="back-dash">${t("back_panel")}</button>
      <div class="section-title">${t("account_title")}</div>
      <div class="account-tabs">
        <button class="account-tab-btn ${tab === "profile" ? "active" : ""}" data-tab="profile">👤 ${t("account_tab_profile")}</button>
        <button class="account-tab-btn ${tab === "security" ? "active" : ""}" data-tab="security">🔒 ${t("account_tab_security")}</button>
        <button class="account-tab-btn ${tab === "appearance" ? "active" : ""}" data-tab="appearance">🎨 ${t("account_tab_appearance")}</button>
      </div>
      ${state.accountMsg ? `<div class="${state.accountMsg.ok ? "success-msg" : "error-msg"}">${escapeHtml(state.accountMsg.text)}</div>` : ""}
      <div class="card">
        ${tabContent}
      </div>
      <div class="bottom-space"></div>
    `, "account");
  attachShellEvents();
  document.getElementById("back-dash").onclick = () => { state.screen = "dashboard"; render(); };
  document.querySelectorAll(".account-tab-btn").forEach(btn => {
    btn.onclick = () => { state.accountTab = btn.dataset.tab; state.accountMsg = ""; render(); };
  });

  if (tab === "profile") {
    const form = document.getElementById("profile-form");
    if (form) form.addEventListener("submit", onSaveProfileSubmit);
  } else if (tab === "security") {
    const form = document.getElementById("pass-form");
    if (form) form.addEventListener("submit", onChangePasswordSubmit);
  } else {
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
  }
}

function renderAccountProfileTab() {
  const name = (state.user && state.user.name) || "";
  return `
    <h3>${t("account_tab_profile")}</h3>
    <form id="profile-form">
      <div class="field"><label>${t("profile_name_label")}</label><input type="text" id="profile-name" required placeholder="${t("profile_name_ph")}" value="${escapeHtml(name)}"></div>
      <button type="submit" class="btn btn-primary">${t("profile_save")}</button>
    </form>`;
}

async function onSaveProfileSubmit(e) {
  e.preventDefault();
  const newName = document.getElementById("profile-name").value.trim();
  if (!newName) return;
  try {
    await db.collection("users").doc(state.user.uid).set({ name: newName }, { merge: true });
    state.user.name = newName;
    state.accountMsg = { ok: true, text: t("profile_saved") };
  } catch (err) {
    state.accountMsg = { ok: false, text: "Error: " + err.message };
  }
  render();
}

function renderAccountSecurityTab() {
  return `
    <h3>${t("account_tab_security")}</h3>
    <form id="pass-form">
      <div class="field"><label>${t("account_current_pass")}</label><input type="password" id="cur-pass" required></div>
      <div class="field"><label>${t("account_new_pass")}</label><input type="password" id="new-pass" required minlength="6"></div>
      <div class="field"><label>${t("account_confirm_pass")}</label><input type="password" id="new-pass2" required minlength="6"></div>
      <button type="submit" class="btn btn-primary">${t("account_change_pass_btn")}</button>
    </form>`;
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

  const safeName = (studentName || "alumno").replace(/[^\w]+/g, "_");
  doc.save(`${sample ? "Ejemplo_" : ""}Certificado_${lvl.name.replace(/\s+/g, "_")}_${safeName}.pdf`);
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