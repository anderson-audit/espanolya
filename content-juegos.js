// content-juegos.js
// Módulo BÔNUS "🎮 Juegos": datos y configuración de los 12 juegos gráficos/interactivos.
// La LÓGICA de cada juego (render, eventos, estado) vive en app.js — aquí solo datos,
// siguiendo el mismo patrón de los demás content-*.js (datos separados del motor).

// Metadatos de los 12 juegos mostrados en el hub "🎮 Juegos".
const GAMES_META = [
  { id: "ahorcado", icon: "🪢", titleKey: "game_ahorcado_title", subKey: "game_ahorcado_sub", color: "#AA151B" },
  { id: "muneco", icon: "🗣️", titleKey: "game_muneco_title", subKey: "game_muneco_sub", color: "#2E7D32" },
  { id: "memoria", icon: "🧠", titleKey: "game_memoria_title", subKey: "game_memoria_sub", color: "#1565C0" },
  { id: "ruleta", icon: "🎡", titleKey: "game_ruleta_title", subKey: "game_ruleta_sub", color: "#EF6C00" },
  { id: "sopa", icon: "🔍", titleKey: "game_sopa_title", subKey: "game_sopa_sub", color: "#6A1B9A" },
  { id: "carrera", icon: "⚡", titleKey: "game_carrera_title", subKey: "game_carrera_sub", color: "#C62828" },
  { id: "anagrama", icon: "🔤", titleKey: "game_anagrama_title", subKey: "game_anagrama_sub", color: "#00838F" },
  { id: "vf", icon: "✅", titleKey: "game_vf_title", subKey: "game_vf_sub", color: "#558B2F" },
  { id: "bingo", icon: "🎯", titleKey: "game_bingo_title", subKey: "game_bingo_sub", color: "#8E24AA" },
  { id: "globos", icon: "🎈", titleKey: "game_globos_title", subKey: "game_globos_sub", color: "#D81B60" },
  { id: "frase", icon: "🧩", titleKey: "game_frase_title", subKey: "game_frase_sub", color: "#3949AB" },
  { id: "simon", icon: "🎵", titleKey: "game_simon_title", subKey: "game_simon_sub", color: "#F57F17" },
];

// Categorías de vocabulario reutilizadas por varios juegos (Sopa de Letras, Carrera...).
const GAME_CATEGORIES = [
  { id: "todas", labelKey: "game_cat_todas", levels: null },
  { id: "basico", labelKey: "game_cat_basico", levels: ["fundamentos", "basico"] },
  { id: "intermedio", labelKey: "game_cat_intermedio", levels: ["intermedio", "secretos", "tiempos", "normas"] },
  { id: "avanzado", labelKey: "game_cat_avanzado", levels: ["avanzado", "profesional", "pronunciacion", "canciones"] },
];

// Segmentos de la Ruleta de Vocabulario (puntos + color de cada gajo del círculo).
const RULETA_SEGMENTS = [
  { points: 10, color: "#AA151B" }, { points: 20, color: "#F1B434" }, { points: 50, color: "#2E7D32" },
  { points: 10, color: "#1565C0" }, { points: 100, color: "#6A1B9A" }, { points: 20, color: "#EF6C00" },
  { points: 10, color: "#00838F" }, { points: 30, color: "#C62828" },
];
const RULETA_TIME_LIMIT = 60; // segundos, para el modo "Tiempo"

// Configuración de la Sopa de Letras (el tamaño real se ajusta según la dificultad elegida).
const SOPA_SIZES = { facil: 8, medio: 10, dificil: 12 };
const SOPA_DIRS = [{ dr: 0, dc: 1 }, { dr: 1, dc: 0 }, { dr: 1, dc: 1 }, { dr: 1, dc: -1 }];

// Configuración de la Carrera contra el Reloj.
const CARRERA_TOTAL = 10;   // preguntas por partida
const CARRERA_TIME_OPTIONS = [5, 8, 12]; // segundos por pregunta, configurable

// Ahorcado: rango de tamaño de palabra + intentos permitidos por dificultad.
const AHORCADO_DIFF = {
  facil: { min: 3, max: 6, maxWrong: 8 },
  medio: { min: 5, max: 9, maxWrong: 6 },
  dificil: { min: 8, max: 16, maxWrong: 5 },
};
const AHORCADO_TIME_LIMIT = 75; // segundos, para el modo "Tiempo"

// Muñeco Parlanchín: cantidad de opciones + tiempo por pregunta (el "desafío") por dificultad.
const MUNECO_DIFF = {
  facil: { options: 2, time: null, rounds: 6 },
  medio: { options: 4, time: null, rounds: 8 },
  dificil: { options: 4, time: 7, rounds: 10 },
};

// Memoria: cantidad de parejas por dificultad.
const MEMORIA_DIFF = { facil: 6, medio: 8, dificil: 12 };

// Anagrama: rango de tamaño de palabra por dificultad.
const ANAGRAMA_DIFF = {
  facil: { min: 4, max: 5, rounds: 6 },
  medio: { min: 6, max: 8, rounds: 6 },
  dificil: { min: 9, max: 14, rounds: 6 },
};

// Verdadero o Falso: tiempo por pregunta y cantidad de rondas por dificultad.
const VF_DIFF = {
  facil: { time: 7, rounds: 12 },
  medio: { time: 5, rounds: 14 },
  dificil: { time: 3.5, rounds: 16 },
};

// Bingo de Vocabulario: tamaño de la cartela por dificultad.
const BINGO_DIFF = {
  facil: { size: 3 },
  medio: { size: 4 },
  dificil: { size: 5 },
};

// Globos de Palabras: cantidad de globos + tiempo por ronda.
const GLOBOS_DIFF = {
  facil: { count: 3, time: 8, rounds: 8 },
  medio: { count: 5, time: 6, rounds: 10 },
  dificil: { count: 7, time: 4.5, rounds: 12 },
};

// Ordena la Frase: cantidad de palabras de la frase por dificultad.
const FRASE_DIFF = {
  facil: { min: 4, max: 5, rounds: 6 },
  medio: { min: 6, max: 7, rounds: 6 },
  dificil: { min: 8, max: 10, rounds: 6 },
};

// Simón Dice: cantidad de pads + velocidad de la secuencia por dificultad.
const SIMON_DIFF = {
  facil: { pads: 4, speed: 850 },
  medio: { pads: 5, speed: 650 },
  dificil: { pads: 6, speed: 480 },
};
const SIMON_COLORS = ["#AA151B", "#1565C0", "#2E7D32", "#F1B434", "#8E24AA", "#00838F"];
const SIMON_COLOR_NAMES = ["rojo", "azul", "verde", "amarillo", "morado", "turquesa"];

// Banco de palabras de respaldo (siempre se suma al vocabulario real del curso, que se
// extrae en tiempo real de todas las lecciones vía buildGameWordPool() en app.js). Garantiza
// variedad mínima incluso si algún nivel bônus dinámico -como Canciones- aún no cargó nada.
const GAME_FALLBACK_WORDS = [
  { es: "casa", pt: "casa" }, { es: "trabajo", pt: "trabalho" }, { es: "auditoría", pt: "auditoria" },
  { es: "reunión", pt: "reunião" }, { es: "empresa", pt: "empresa" }, { es: "familia", pt: "família" },
  { es: "tiempo", pt: "tempo" }, { es: "dinero", pt: "dinheiro" }, { es: "comida", pt: "comida" },
  { es: "viaje", pt: "viagem" }, { es: "amigo", pt: "amigo" }, { es: "libro", pt: "livro" },
  { es: "ciudad", pt: "cidade" }, { es: "coche", pt: "carro" }, { es: "playa", pt: "praia" },
  { es: "montaña", pt: "montanha" }, { es: "escuela", pt: "escola" }, { es: "hospital", pt: "hospital" },
  { es: "mercado", pt: "mercado" }, { es: "oficina", pt: "escritório" }, { es: "cliente", pt: "cliente" },
  { es: "proyecto", pt: "projeto" }, { es: "riesgo", pt: "risco" }, { es: "control", pt: "controle" },
  { es: "seguridad", pt: "segurança" }, { es: "calidad", pt: "qualidade" }, { es: "proceso", pt: "processo" },
  { es: "equipo", pt: "equipe" }, { es: "norma", pt: "norma" }, { es: "objetivo", pt: "objetivo" },
  { es: "semana", pt: "semana" }, { es: "mañana", pt: "manhã" }, { es: "noche", pt: "noite" },
];
