// content-juegos.js
// Módulo BÔNUS "🎮 Juegos": datos y configuración de los 6 juegos gráficos/interactivos.
// La LÓGICA de cada juego (render, eventos, estado) vive en app.js — aquí solo datos,
// siguiendo el mismo patrón de los demás content-*.js (datos separados del motor).

// Metadatos de los 6 juegos mostrados en el hub "🎮 Juegos".
const GAMES_META = [
  { id: "ahorcado", icon: "🪢", titleKey: "game_ahorcado_title", subKey: "game_ahorcado_sub", color: "#AA151B" },
  { id: "muneco", icon: "🗣️", titleKey: "game_muneco_title", subKey: "game_muneco_sub", color: "#2E7D32" },
  { id: "memoria", icon: "🧠", titleKey: "game_memoria_title", subKey: "game_memoria_sub", color: "#1565C0" },
  { id: "ruleta", icon: "🎡", titleKey: "game_ruleta_title", subKey: "game_ruleta_sub", color: "#EF6C00" },
  { id: "sopa", icon: "🔍", titleKey: "game_sopa_title", subKey: "game_sopa_sub", color: "#6A1B9A" },
  { id: "carrera", icon: "⚡", titleKey: "game_carrera_title", subKey: "game_carrera_sub", color: "#C62828" },
];

// Segmentos de la Ruleta de Vocabulario (puntos + color de cada gajo del círculo).
const RULETA_SEGMENTS = [
  { points: 10, color: "#AA151B" }, { points: 20, color: "#F1B434" }, { points: 50, color: "#2E7D32" },
  { points: 10, color: "#1565C0" }, { points: 100, color: "#6A1B9A" }, { points: 20, color: "#EF6C00" },
  { points: 10, color: "#00838F" }, { points: 30, color: "#C62828" },
];

// Configuración de la Sopa de Letras.
const SOPA_SIZE = 10;
const SOPA_DIRS = [{ dr: 0, dc: 1 }, { dr: 1, dc: 0 }, { dr: 1, dc: 1 }, { dr: 1, dc: -1 }];

// Configuración de la Carrera contra el Reloj.
const CARRERA_TOTAL = 10;   // preguntas por partida
const CARRERA_TIME = 8;     // segundos por pregunta

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
