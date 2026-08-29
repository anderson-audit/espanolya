/* ==========================================================================
   EspañolYa! — Conteúdo: Módulo BÔNUS · ESTUDO RÁPIDO (imagens + voz)
   Fonte: 6 infográficos de vocabulário fornecidos por Anderson Santana
   (¿Qué hora es?, La habitación, La cocina, El baño, La cafetería,
   La panadería) + infográficos próprios do EspañolYa!, no mesmo estilo,
   para os temas Auditoría e Aeropuerto (ligados à Quallisi e a viagens) —
   estes dois ganharam categorias extra de vocabulário e imagens extra na
   sessão de 2026-08-03 (parte 3), a pedido do usuário ("está pobre...
   deveria ter mais imagens").

   Cada lição mostra uma imagem grande (ver LESSON_IMAGES em app.js, com
   galeria de miniaturas quando há mais de uma) com o vocabulário rotulado.
   Os exercícios são do tipo "speak": o app faz uma PERGUNTA REAL sobre o
   assunto (não apenas "como se diz X em espanhol?") e o aluno RESPONDE
   FALANDO EM ESPANHOL uma frase/resposta completa — o reconhecimento de voz
   do navegador corrige a pronúncia e o conteúdo da resposta automaticamente
   (comparando com "target" e, quando existe, com "altAnswers", formas
   alternativas igualmente válidas). Reformulado nesta mesma sessão a pedido
   do usuário: "não quero apenas palavras nos exercícios e sim perguntas
   para que o usuário dê a resposta em espanhol".

   Sessão de 2026-08-06: usuário reclamou que os exercícios "speak" eram
   repetitivos (uma palavra só) e que a lição de auditoría tinha muito mais
   exercícios que as demais — pediu perguntas do tema que exijam resposta
   mais complexa, em frase, e algo "diferente do que está lá". Resposta:
   (1) novo tipo de exercício "caso" (ver wireExerciseInteractions/renderExercise
   em app.js) — cartão de situação real + pergunta que se responde ESCREVENDO
   uma frase completa em espanhol, corrigido com tolerância e revelando um
   "selo" de aprovação ao acertar; aplicado em EXATAMENTE 2 exercícios por
   lição, nas 8 lições por igual, sem favoritismo a nenhum tema; (2) as
   listas de "speak" de auditoría e aeropuerto (que tinham ~27 itens cada,
   bem mais que as outras 6 lições, que tinham ~12-14) foram reduzidas para
   ~13, alinhadas ao padrão das demais — o vocabulário extra continua
   documentado em "vocabulary", só não é mais repetido em exercício isolado.
   A lição de auditoría manteve seu "chat" (bate-papo/reunião de auditoria)
   como exercício-assinatura, mas sem mais volume desproporcional de itens
   simples ao redor dele.

   Não há prova neste módulo (é prática livre, como Secretos/Tiempos).
   Segue o mesmo schema dos demais content-*.js.
   ========================================================================== */

const LEVEL_ESTUDIORAPIDO = {
  id: "estudiorapido",
  name: "Estudio Rápido",
  icon: "🖼️",
  colorFrom: "#2E7D32",
  colorTo: "#1565C0",
  description: "Módulo bônus 100% visual: olhe a imagem, escute uma pergunta real sobre o assunto e responda falando em espanhol — o app escuta e corrige sua resposta e pronúncia na hora. Cada lição tem 'Casos prácticos': situações reais em que você escreve uma frase completa em espanhol, não só uma palavra. Vocabulário de casa, cafeteria, padaria, auditoria, aeroporto, construção, escritório, segurança residencial, comida rápida, bordo do avião, imigração, Galícia, lavanderia e troca de roupas/sapatos.",
  lessons: [
    {
      id: "er-hora", order: 1, title: "¿Qué hora es?", subtitle: "Como dizer as horas em espanhol",
      vocabulary: [
        {category: "Como marcar os minutos", items: [
          {es: "en punto", pt: "em ponto (00)"},
          {es: "y cinco", pt: "e cinco (05)"},
          {es: "y diez", pt: "e dez (10)"},
          {es: "y cuarto", pt: "e quinze (15)"},
          {es: "y veinte", pt: "e vinte (20)"},
          {es: "y veinticinco", pt: "e vinte e cinco (25)"},
          {es: "y media", pt: "e meia (30)"},
          {es: "menos veinticinco", pt: "vinte e cinco para (35)"},
          {es: "menos veinte", pt: "vinte para (40)"},
          {es: "menos cuarto", pt: "quinze para (45)"},
          {es: "menos diez", pt: "dez para (50)"},
          {es: "menos cinco", pt: "cinco para (55)"}
        ]}
      ],
      grammar: [
        {title: "¿Qué hora es? — Que horas são?", headers: ["Espanhol", "Uso"], rows: [
          ["Es la una / Es la una y cuarto...", "Só para a 1 hora (singular)"],
          ["Son las dos / Son las tres...", "Para as demais horas (plural)"],
          ["Depois dos 30 minutos", "usa-se 'menos' contando para a hora seguinte"]
        ]}
      ],
      notes: [
        "Regra de ouro: até a meia hora conta-se 'y' (e); depois da meia hora, conta-se 'menos' (para) olhando para a HORA SEGUINTE. Ex.: 8:45 = 'Son las nueve menos cuarto' (não é 'las ocho y 45').",
        "Exemplos do infográfico: 3:15 → 'Son las tres y cuarto.' · 6:30 → 'Son las seis y media.' · 8:45 → 'Son las nueve menos cuarto.' · 10:55 → 'Son las once menos cinco.'"
      ],
      exercises: [
        {
          type: "caso", icon: "🗓️", stamp: "✅ REUNIÓN CONFIRMADA",
          scenario: "Trabajas en Quallisi y necesitas reprogramar una reunión con un cliente porque tienes otro compromiso a esa hora.",
          q: "Escribe una frase completa para proponer un nuevo horario a las 15:30.",
          target: "¿Podemos reunirnos a las tres y media de la tarde en vez de a esa hora?",
          altAnswers: ["¿Podemos vernos a las tres y media?", "¿Le parece bien a las tres y media de la tarde?", "Propongo cambiar la reunión a las tres y media."]
        },
        {
          type: "caso", icon: "⏰", stamp: "✅ HORARIO REGISTRADO",
          scenario: "Un colega nuevo te pregunta a qué hora empieza tu jornada de trabajo normalmente.",
          q: "Responde con una frase completa diciendo que empiezas a las 9 en punto y terminas a las 18:00.",
          target: "Empiezo a trabajar a las nueve en punto y termino a las seis de la tarde.",
          altAnswers: ["Trabajo desde las nueve hasta las seis de la tarde.", "Mi jornada empieza a las nueve y termina a las seis."]
        },
        {
          // Ejercicio "chat": movido al inicio de la lección (junto con los "caso") a pedido del
          // usuario, para que el alumno vea la parte más dinámica/nueva enseguida, sin tener que
          // pasar por todos los ejercicios "speak" de vocabulario primero.
          type: "chat",
          npcName: "Carlos (compañero de trabajo)",
          npcAvatar: "🧑‍💼",
          scenario: "Estás en la oficina y Carlos quiere coordinar contigo la hora de la reunión de mañana.",
          turns: [
            { npc: "¡Hola! ¿Tienes un momento para hablar sobre la reunión de mañana?" },
            { user: {
                prompt: "Responde que sí, y pregunta a qué hora es la reunión.",
                target: "Sí, claro. ¿A qué hora es la reunión?",
                altAnswers: ["¿A qué hora es la reunión?", "Sí, ¿a qué hora es?"]
            }},
            { npc: "Estaba pensando en las diez y media de la mañana. ¿Te va bien esa hora?" },
            { user: {
                prompt: "Responde que a esa hora no puedes, y propone las tres de la tarde.",
                target: "A las diez y media no puedo. ¿Podemos a las tres de la tarde?",
                altAnswers: [
                  {text: "No puedo a esa hora.", reply: "Vale, ¿qué hora te viene mejor?"},
                  "¿Podemos a las tres de la tarde?",
                  "A las diez y media no puedo."
                ]
            }},
            { npc: "Perfecto, entonces a las tres de la tarde. Nos vemos mañana." },
            { user: {
                prompt: "Confirma que de acuerdo, y agradece.",
                target: "De acuerdo, nos vemos a las tres. Gracias.",
                altAnswers: ["De acuerdo, gracias", "Nos vemos a las tres, gracias"]
            }},
            { npc: "¡Hasta mañana!" }
          ]
        },
        {type: "speak", prompt: "¿Qué hora es cuando el reloj marca las 3:15?", target: "Son las tres y cuarto.", altAnswers: ["Son las tres y cuarto", "Las tres y cuarto"]},
        {type: "speak", prompt: "¿Qué hora es cuando el reloj marca las 6:30?", target: "Son las seis y media.", altAnswers: ["Son las seis y media", "Las seis y media"]},
        {type: "speak", prompt: "Son las 8:45. ¿Cómo se dice esa hora en español, usando 'menos'?", target: "Son las nueve menos cuarto.", altAnswers: ["Son las nueve menos cuarto", "Las nueve menos cuarto"]},
        {type: "speak", prompt: "¿Qué hora es cuando el reloj marca las 10:55?", target: "Son las once menos cinco.", altAnswers: ["Son las once menos cinco", "Las once menos cinco"]},
        {type: "speak", prompt: "Es la 1:00 en punto. ¿Cómo se dice? (¡cuidado, es singular!)", target: "Es la una en punto.", altAnswers: ["Es la una en punto", "La una en punto"]},
        {type: "speak", prompt: "¿Qué hora es cuando el reloj marca las 2:00 en punto?", target: "Son las dos en punto.", altAnswers: ["Son las dos en punto", "Las dos en punto"]},
        {type: "speak", prompt: "¿Qué hora es cuando el reloj marca las 4:05?", target: "Son las cuatro y cinco.", altAnswers: ["Son las cuatro y cinco", "Las cuatro y cinco"]},
        {type: "speak", prompt: "¿Qué hora es cuando el reloj marca las 7:20?", target: "Son las siete y veinte.", altAnswers: ["Son las siete y veinte", "Las siete y veinte"]},
        {type: "speak", prompt: "Son las 9:40. ¿Cómo se dice esa hora usando 'menos'?", target: "Son las diez menos veinte.", altAnswers: ["Son las diez menos veinte", "Las diez menos veinte"]},
        {type: "speak", prompt: "Son las 12:50 (casi la 1). ¿Cómo se dice esa hora?", target: "Es la una menos diez.", altAnswers: ["Es la una menos diez", "La una menos diez"]},
        {type: "speak", prompt: "¿Qué palabra se usa para contar los minutos ANTES de la media hora, como en las 3:15?", target: "Se usa 'y'.", altAnswers: ["y", "Y", "Se usa y"]},
        {type: "speak", prompt: "¿Qué palabra se usa para contar los minutos DESPUÉS de la media hora, mirando hacia la hora siguiente?", target: "Se usa 'menos'.", altAnswers: ["menos", "Menos", "Se usa menos"]},
        {type: "mc", q: "8:45 se dice, en español...", options: ["Las ocho y cuarenta y cinco", "Las nueve menos cuarto", "Las ocho menos cuarto", "Las nueve y cuarto"], correct: 1},
        {type: "fill", q: "Complete: 'Es la ___' (usa-se para a 1 hora, no singular).", answer: "una", altAnswers: ["Una"]}
      ]
    },
    {
      id: "er-habitacion", order: 2, title: "La habitación", subtitle: "O quarto",
      vocabulary: [
        {category: "Vocabulario", items: [
          {es: "la cama", pt: "a cama"},
          {es: "el cabecero", pt: "a cabeceira"},
          {es: "la almohada", pt: "o travesseiro"},
          {es: "el cojín", pt: "a almofada"},
          {es: "la manta", pt: "o cobertor"},
          {es: "el edredón", pt: "o edredom"},
          {es: "la colcha", pt: "a colcha"},
          {es: "el armario", pt: "o armário/guarda-roupa"},
          {es: "la cómoda", pt: "a cômoda"},
          {es: "la mesilla de noche", pt: "a mesinha de cabeceira"},
          {es: "la lámpara", pt: "o abajur/luminária"},
          {es: "el espejo", pt: "o espelho"},
          {es: "la ventana", pt: "a janela"},
          {es: "la cortina", pt: "a cortina"},
          {es: "la estantería", pt: "a estante"},
          {es: "el escritorio", pt: "a escrivaninha"},
          {es: "la silla", pt: "a cadeira"},
          {es: "la alfombra", pt: "o tapete"},
          {es: "la puerta", pt: "a porta"},
          {es: "el cuadro", pt: "o quadro"},
          {es: "la cesta de la ropa", pt: "o cesto de roupa"}
        ]}
      ],
      grammar: [],
      notes: [
        "Repare no artigo de cada palavra (el/la) — em espanhol o gênero das palavras da casa muitas vezes muda em relação ao português."
      ],
      exercises: [
        {
          type: "caso", icon: "🛏️", stamp: "✅ SOLICITUD ENVIADA",
          scenario: "Estás en un hotel en España y notas que faltan cosas en tu habitación.",
          q: "Llama a recepción y pide, en una frase completa, una almohada extra y una manta.",
          target: "¿Podría traerme una almohada extra y una manta, por favor?",
          altAnswers: ["Necesito una almohada extra y una manta, por favor.", "¿Me puede traer una manta y una almohada más?"]
        },
        {
          type: "caso", icon: "🧹", stamp: "✅ MENSAJE ENVIADO",
          scenario: "Tu compañero de piso dejó la habitación desordenada antes de salir a trabajar.",
          q: "Escribe una frase completa pidiéndole, con educación, que ordene el armario y haga la cama.",
          target: "¿Puedes ordenar el armario y hacer la cama cuando vuelvas, por favor?",
          altAnswers: ["Por favor, ordena el armario y haz la cama.", "¿Podrías hacer la cama y ordenar el armario, por favor?"]
        },
        {
          type: "chat",
          npcName: "Lucía (tu compañera de piso)",
          npcAvatar: "👩",
          scenario: "Lucía acaba de mudarse a tu piso y está instalando sus cosas en la habitación.",
          turns: [
            { npc: "¡Hola! Soy Lucía, tu nueva compañera de piso. ¿Dónde pongo mis maletas?" },
            { user: {
                prompt: "Dile que puede poner las maletas en el armario, que hay espacio.",
                target: "Puedes poner las maletas en el armario, hay espacio.",
                altAnswers: ["En el armario, hay espacio", "Pon las maletas en el armario"]
            }},
            { npc: "Genial, gracias. Mi lámpara se rompió durante la mudanza. ¿Tienes una lámpara extra?" },
            { user: {
                prompt: "Responde que sí, y ofrece prestarle una.",
                target: "Sí, tengo una lámpara extra. Te la puedo prestar.",
                altAnswers: [
                  {text: "Sí, tengo una.", reply: "¡Qué bien, muchas gracias!"},
                  "Te la puedo prestar",
                  "Sí, te presto una lámpara"
                ]
            }},
            { npc: "¡Muchas gracias! Eres muy amable. ¿Dónde está el espejo grande?" },
            { user: {
                prompt: "Dile que el espejo grande está detrás de la puerta.",
                target: "El espejo grande está detrás de la puerta.",
                altAnswers: ["Detrás de la puerta", "Está detrás de la puerta"]
            }},
            { npc: "Perfecto, ya me estoy instalando. ¡Gracias por todo!" }
          ]
        },
        {type: "speak", prompt: "¿Dónde duermes por la noche?", target: "Duermo en la cama.", altAnswers: ["la cama", "En la cama"]},
        {type: "speak", prompt: "¿Qué usas para apoyar la cabeza cuando duermes?", target: "Uso la almohada.", altAnswers: ["la almohada", "La almohada"]},
        {type: "speak", prompt: "¿Dónde guardas la ropa colgada, dentro de un mueble alto?", target: "En el armario.", altAnswers: ["el armario", "El armario"]},
        {type: "speak", prompt: "¿Qué enciendes por la noche para leer un libro?", target: "Enciendo la lámpara.", altAnswers: ["la lámpara", "La lámpara"]},
        {type: "speak", prompt: "¿Dónde te miras para peinarte?", target: "En el espejo.", altAnswers: ["el espejo", "El espejo"]},
        {type: "speak", prompt: "¿Qué abres para que entre luz natural en la habitación?", target: "Abro la ventana.", altAnswers: ["la ventana", "La ventana"]},
        {type: "speak", prompt: "¿Qué cubre la ventana para bloquear la luz por la noche?", target: "La cortina.", altAnswers: ["la cortina"]},
        {type: "speak", prompt: "¿Dónde guardas tus libros en la habitación?", target: "En la estantería.", altAnswers: ["la estantería", "La estantería"]},
        {type: "speak", prompt: "¿Dónde estudias o escribes en tu habitación?", target: "En el escritorio.", altAnswers: ["el escritorio", "El escritorio"]},
        {type: "speak", prompt: "¿Qué hay en el suelo, suave, cerca de la cama?", target: "La alfombra.", altAnswers: ["la alfombra"]},
        {type: "speak", prompt: "¿Por dónde entras y sales de la habitación?", target: "Por la puerta.", altAnswers: ["la puerta", "Por la puerta"]},
        {type: "speak", prompt: "¿Dónde pones la ropa sucia antes de lavarla?", target: "En la cesta de la ropa.", altAnswers: ["la cesta de la ropa"]},
        {type: "mc", q: "'O cobertor' em espanhol é...", options: ["la almohada", "la manta", "la colcha", "el cojín"], correct: 1},
        {type: "fill", q: "'A cômoda' em espanhol se escreve: la ___", answer: "cómoda", altAnswers: ["comoda"]}
      ]
    },
    {
      id: "er-cocina", order: 3, title: "La cocina", subtitle: "A cozinha",
      vocabulary: [
        {category: "Vocabulario", items: [
          {es: "la nevera / el frigorífico", pt: "a geladeira"},
          {es: "el congelador", pt: "o freezer"},
          {es: "los armarios", pt: "os armários"},
          {es: "la encimera", pt: "a bancada"},
          {es: "el fregadero", pt: "a pia"},
          {es: "el grifo", pt: "a torneira"},
          {es: "el horno", pt: "o forno"},
          {es: "la vitrocerámica", pt: "o fogão de vidro/cooktop"},
          {es: "la campana extractora", pt: "a coifa"},
          {es: "el microondas", pt: "o micro-ondas"},
          {es: "la cafetera", pt: "a cafeteira"},
          {es: "la tostadora", pt: "a torradeira"},
          {es: "la olla", pt: "a panela"},
          {es: "la sartén", pt: "a frigideira"},
          {es: "la tabla de cortar", pt: "a tábua de cortar"},
          {es: "el cuchillo", pt: "a faca"},
          {es: "la cuchara de madera", pt: "a colher de pau"},
          {es: "el lavavajillas", pt: "a lava-louças"},
          {es: "la despensa", pt: "a despensa"},
          {es: "la mesa", pt: "a mesa"},
          {es: "el plato", pt: "o prato"},
          {es: "la taza", pt: "a xícara"},
          {es: "el vaso", pt: "o copo"}
        ]}
      ],
      grammar: [],
      notes: [
        "'Nevera' é mais usado na Espanha; 'frigorífico' também é entendido e usado. Os dois estão corretos."
      ],
      exercises: [
        {
          type: "caso", icon: "🍳", stamp: "✅ RECETA EN MARCHA",
          scenario: "Estás cocinando con un amigo español y necesitas un utensilio que no encuentras.",
          q: "Pregúntale, en una frase completa, dónde está la sartén para freír un huevo.",
          target: "¿Dónde está la sartén? Necesito freír un huevo.",
          altAnswers: ["¿Sabes dónde está la sartén?", "¿Me puedes decir dónde está la sartén, por favor?"]
        },
        {
          type: "caso", icon: "☕", stamp: "✅ CAFÉ LISTO",
          scenario: "Vas a preparar café para tus invitados y quieres explicar el paso a paso.",
          q: "Escribe una frase completa explicando que primero hierves el agua y después la pones en la cafetera.",
          target: "Primero hiervo el agua y después la pongo en la cafetera.",
          altAnswers: ["Primero se hierve el agua y luego se pone en la cafetera.", "Hiervo el agua primero y luego la echo en la cafetera."]
        },
        {
          type: "chat",
          npcName: "Ana (profesora de cocina)",
          npcAvatar: "👩‍🍳",
          scenario: "Estás en una clase de cocina y la profesora Ana te va guiando paso a paso para preparar una tortilla española.",
          turns: [
            { npc: "¡Bienvenido a la clase! Hoy vamos a preparar una tortilla española. ¿Sabes dónde está la sartén?" },
            { user: {
                prompt: "Responde que sí, que la sartén está en el armario de abajo.",
                target: "Sí, la sartén está en el armario de abajo.",
                altAnswers: ["Está en el armario de abajo", "Sí, en el armario de abajo"]
            }},
            { npc: "Perfecto. Ahora necesitamos calentar el aceite. ¿Puedes encender la vitrocerámica?" },
            { user: {
                prompt: "Responde que sí, que la vas a encender ahora.",
                target: "Sí, voy a encender la vitrocerámica ahora.",
                altAnswers: ["Sí, la enciendo ahora", "Voy a encenderla ahora"]
            }},
            { npc: "Muy bien. Mientras se calienta, ¿puedes cortar las patatas con el cuchillo?" },
            { user: {
                prompt: "Responde que sí, claro.",
                target: "Sí, claro, voy a cortar las patatas con el cuchillo.",
                altAnswers: [
                  {text: "Sí, claro.", reply: "Perfecto, córtalas en trozos pequeños."},
                  "Voy a cortar las patatas",
                  "Sí, ya las corto"
                ]
            }},
            { npc: "¡Excelente trabajo! La tortilla va a quedar deliciosa." }
          ]
        },
        {type: "speak", prompt: "¿Dónde guardas la comida fría, como la leche y las verduras?", target: "En la nevera.", altAnswers: ["la nevera", "En la nevera", "el frigorífico"]},
        {type: "speak", prompt: "¿Dónde lavas los platos a mano?", target: "En el fregadero.", altAnswers: ["el fregadero", "En el fregadero"]},
        {type: "speak", prompt: "¿Qué abres para que salga el agua en la cocina?", target: "El grifo.", altAnswers: ["el grifo", "Abro el grifo"]},
        {type: "speak", prompt: "¿Dónde horneas un pastel?", target: "En el horno.", altAnswers: ["el horno", "En el horno"]},
        {type: "speak", prompt: "¿Qué usas para calentar la comida muy rápido?", target: "El microondas.", altAnswers: ["el microondas"]},
        {type: "speak", prompt: "¿Dónde cocinas el arroz o la sopa?", target: "En la olla.", altAnswers: ["la olla", "En la olla"]},
        {type: "speak", prompt: "¿Qué usas para freír un huevo?", target: "La sartén.", altAnswers: ["la sartén"]},
        {type: "speak", prompt: "¿Qué usas para cortar el pan o la carne?", target: "El cuchillo.", altAnswers: ["el cuchillo"]},
        {type: "speak", prompt: "¿Qué máquina lava los platos por ti?", target: "El lavavajillas.", altAnswers: ["el lavavajillas"]},
        {type: "speak", prompt: "¿Dónde comes, sentado con tu familia?", target: "En la mesa.", altAnswers: ["la mesa", "En la mesa"]},
        {type: "speak", prompt: "¿En qué bebes el café por la mañana?", target: "En la taza.", altAnswers: ["la taza", "En la taza"]},
        {type: "speak", prompt: "¿En qué bebes el agua?", target: "En el vaso.", altAnswers: ["el vaso", "En el vaso"]},
        {type: "speak", prompt: "¿Dónde guardas los alimentos secos, como el arroz y la pasta?", target: "En la despensa.", altAnswers: ["la despensa", "En la despensa"]},
        {type: "mc", q: "'A bancada' da cozinha, em espanhol, é...", options: ["la encimera", "la despensa", "el armario", "la vitrocerámica"], correct: 0},
        {type: "fill", q: "'A cafeteira' em espanhol se escreve: la ___", answer: "cafetera"}
      ]
    },
    {
      id: "er-bano", order: 4, title: "El baño", subtitle: "O banheiro",
      vocabulary: [
        {category: "Vocabulario", items: [
          {es: "el lavabo", pt: "a pia do banheiro"},
          {es: "el grifo", pt: "a torneira"},
          {es: "el espejo", pt: "o espelho"},
          {es: "la ducha", pt: "o chuveiro"},
          {es: "la mampara", pt: "o box de vidro"},
          {es: "la bañera", pt: "a banheira"},
          {es: "el inodoro", pt: "o vaso sanitário"},
          {es: "el bidé", pt: "o bidê"},
          {es: "el papel higiénico", pt: "o papel higiênico"},
          {es: "el champú", pt: "o xampu"},
          {es: "la esponja", pt: "a esponja"},
          {es: "el cepillo de dientes", pt: "a escova de dentes"},
          {es: "la pasta de dientes", pt: "a pasta de dente"},
          {es: "la toalla", pt: "a toalha"},
          {es: "el toallero", pt: "o toalheiro"},
          {es: "la alfombrilla", pt: "o tapete de banheiro"},
          {es: "la báscula", pt: "a balança"},
          {es: "el armario", pt: "o armário"},
          {es: "la cesta de la ropa", pt: "o cesto de roupa"}
        ]}
      ],
      grammar: [],
      notes: [
        "'El bidé' é bem comum nos banheiros da Espanha — vale aprender a palavra mesmo sem esse costume no Brasil."
      ],
      exercises: [
        {
          type: "caso", icon: "🧻", stamp: "✅ SERVICIO SOLICITADO",
          scenario: "Estás en un hotel y el papel higiénico del baño se ha acabado.",
          q: "Llama a recepción y pide, en una frase completa, más papel higiénico y una toalla limpia.",
          target: "¿Podría traerme más papel higiénico y una toalla limpia, por favor?",
          altAnswers: ["Necesito más papel higiénico y una toalla limpia.", "¿Me puede subir papel higiénico y una toalla, por favor?"]
        },
        {
          type: "caso", icon: "🪞", stamp: "✅ AVISO REGISTRADO",
          scenario: "Notas que el espejo del baño está roto y quieres avisar al servicio técnico del hotel.",
          q: "Escribe una frase completa explicando que el espejo del baño está roto y pidiendo que lo arreglen.",
          target: "El espejo del baño está roto, ¿pueden arreglarlo, por favor?",
          altAnswers: ["El espejo está roto, necesito que lo reparen.", "Hay un problema: el espejo del baño está roto."]
        },
        {
          type: "chat",
          npcName: "Miguel (tu compañero de piso)",
          npcAvatar: "🧑",
          scenario: "Es por la mañana y Miguel tiene prisa para usar el baño.",
          turns: [
            { npc: "¿Vas a tardar mucho en el baño? Tengo prisa esta mañana." },
            { user: {
                prompt: "Responde que solo cinco minutos más, que ya casi terminas.",
                target: "No, solo cinco minutos más. Ya casi termino.",
                altAnswers: ["Cinco minutos más", "Ya casi termino, cinco minutos"]
            }},
            { npc: "Vale, gracias. Por cierto, ¿me pasas una toalla limpia?" },
            { user: {
                prompt: "Responde que sí, y dile que aquí tiene una toalla limpia.",
                target: "Sí, toma, aquí tienes una toalla limpia.",
                altAnswers: ["Sí, aquí tienes una toalla", "Toma, una toalla limpia"]
            }},
            { npc: "Gracias. ¿Sabes si queda champú?" },
            { user: {
                prompt: "Responde que sí, que hay un bote nuevo debajo del lavabo.",
                target: "Sí, hay un bote nuevo debajo del lavabo.",
                altAnswers: [
                  {text: "Sí, hay uno nuevo.", reply: "Perfecto, gracias por avisar."},
                  "Debajo del lavabo hay uno nuevo",
                  "Sí, debajo del lavabo"
                ]
            }},
            { npc: "Perfecto, gracias por todo. ¡Que tengas un buen día!" }
          ]
        },
        {type: "speak", prompt: "¿Dónde te lavas las manos y la cara?", target: "En el lavabo.", altAnswers: ["el lavabo", "En el lavabo"]},
        {type: "speak", prompt: "¿Dónde te bañas de pie, con el agua cayendo desde arriba?", target: "En la ducha.", altAnswers: ["la ducha", "En la ducha"]},
        {type: "speak", prompt: "¿Dónde te bañas sentado, en una bañera llena de agua?", target: "En la bañera.", altAnswers: ["la bañera", "En la bañera"]},
        {type: "speak", prompt: "¿Dónde te sientas para hacer tus necesidades?", target: "En el inodoro.", altAnswers: ["el inodoro", "En el inodoro"]},
        {type: "speak", prompt: "¿Qué papel usas después de ir al baño?", target: "El papel higiénico.", altAnswers: ["el papel higiénico"]},
        {type: "speak", prompt: "¿Qué usas para lavarte el pelo?", target: "El champú.", altAnswers: ["el champú"]},
        {type: "speak", prompt: "¿Qué usas para cepillarte los dientes?", target: "El cepillo de dientes.", altAnswers: ["el cepillo de dientes"]},
        {type: "speak", prompt: "¿Con qué te secas después de la ducha?", target: "Me seco con la toalla.", altAnswers: ["la toalla", "Con la toalla"]},
        {type: "speak", prompt: "¿Dónde te miras para peinarte o afeitarte?", target: "En el espejo.", altAnswers: ["el espejo", "En el espejo"]},
        {type: "speak", prompt: "¿Qué usas para saber tu peso?", target: "La báscula.", altAnswers: ["la báscula"]},
        {type: "speak", prompt: "¿Qué separa la ducha del resto del baño, hecho de vidrio?", target: "La mampara.", altAnswers: ["la mampara"]},
        {type: "mc", q: "'O box de vidro' do chuveiro, em espanhol, é...", options: ["la mampara", "la bañera", "el bidé", "la alfombrilla"], correct: 0},
        {type: "fill", q: "'A esponja' em espanhol se escreve: la ___", answer: "esponja"}
      ]
    },
    {
      id: "er-cafeteria", order: 5, title: "La cafetería", subtitle: "A cafeteria",
      vocabulary: [
        {category: "Vocabulario", items: [
          {es: "el camarero / la camarera", pt: "o garçom / a garçonete"},
          {es: "el cliente", pt: "o cliente"},
          {es: "la barra", pt: "o balcão"},
          {es: "el taburete", pt: "o banquinho"},
          {es: "la mesa", pt: "a mesa"},
          {es: "la silla", pt: "a cadeira"},
          {es: "la terraza", pt: "o terraço/calçada"},
          {es: "el menú", pt: "o cardápio"},
          {es: "la caja registradora", pt: "o caixa registradora"},
          {es: "la cafetera", pt: "a máquina de café"},
          {es: "el molinillo", pt: "o moedor de café"},
          {es: "la vitrina", pt: "a vitrine"},
          {es: "los pasteles", pt: "os bolos/doces"},
          {es: "el croissant", pt: "o croissant"},
          {es: "la tostada", pt: "a torrada"},
          {es: "el bocadillo", pt: "o sanduíche de baguete"},
          {es: "el café con leche", pt: "o café com leite"},
          {es: "el zumo de naranja", pt: "o suco de laranja"},
          {es: "la taza", pt: "a xícara"},
          {es: "el vaso", pt: "o copo"},
          {es: "la botella de agua", pt: "a garrafa de água"},
          {es: "el azúcar", pt: "o açúcar"},
          {es: "la cucharilla", pt: "a colherzinha"},
          {es: "el platillo", pt: "o pires"}
        ]}
      ],
      grammar: [],
      notes: [
        "'Bocadillo' é o sanduíche feito com pão tipo baguete, muito comum na Espanha — diferente do 'sándwich' feito com pão de forma."
      ],
      exercises: [
        {
          type: "caso", icon: "☕", stamp: "✅ PEDIDO TOMADO",
          scenario: "Llegas a una cafetería en Madrid con hambre y quieres pedir algo específico.",
          q: "Pide, en una frase completa, un café con leche y una tostada con mantequilla.",
          target: "Quiero un café con leche y una tostada con mantequilla, por favor.",
          altAnswers: ["Me trae un café con leche y una tostada con mantequilla, por favor.", "Para mí, un café con leche y una tostada con mantequilla."]
        },
        {
          type: "caso", icon: "🧾", stamp: "✅ CUENTA CERRADA",
          scenario: "Terminaste de desayunar y quieres pagar antes de salir.",
          q: "Pide la cuenta con una frase completa y pregunta si aceptan tarjeta.",
          target: "La cuenta, por favor. ¿Aceptan tarjeta?",
          altAnswers: ["¿Me trae la cuenta, por favor? ¿Puedo pagar con tarjeta?", "La cuenta, por favor, ¿se puede pagar con tarjeta?"]
        },
        {
          type: "chat",
          npcName: "El camarero",
          npcAvatar: "🤵",
          scenario: "Acabas de sentarte en una cafetería de Madrid y el camarero viene a tomar tu pedido.",
          turns: [
            { npc: "¡Buenos días! ¿Qué le pongo?" },
            { user: {
                prompt: "Pide un café con leche y una tostada.",
                target: "Un café con leche y una tostada, por favor.",
                altAnswers: ["Café con leche y una tostada, por favor", "Quiero un café con leche y una tostada"]
            }},
            { npc: "¿La tostada la quiere con mantequilla o con tomate?" },
            { user: {
                prompt: "Responde que con tomate, por favor.",
                target: "Con tomate, por favor.",
                altAnswers: [
                  {text: "Con mantequilla, por favor.", reply: "Marchando, con mantequilla entonces."},
                  "Con tomate",
                  "Tomate, por favor"
                ]
            }},
            { npc: "Marchando. ¿Algo más?" },
            { user: {
                prompt: "Pregunta la contraseña del wifi.",
                target: "¿Me puede dar la contraseña del wifi, por favor?",
                altAnswers: ["¿Cuál es la contraseña del wifi?", "La contraseña del wifi, por favor"]
            }},
            { npc: "Claro, aquí tiene. ¡Que aproveche!" }
          ]
        },
        {type: "speak", prompt: "Entras en la cafetería y quieres ver qué hay para pedir. ¿Qué le pides al camarero?", target: "El menú, por favor.", altAnswers: ["el menú", "El menú"]},
        {type: "speak", prompt: "¿Quién te atiende y te trae la comida en la cafetería?", target: "El camarero.", altAnswers: ["el camarero", "la camarera"]},
        {type: "speak", prompt: "Tienes mucho sueño por la mañana. ¿Qué bebida caliente pides?", target: "Un café con leche, por favor.", altAnswers: ["café con leche", "el café con leche"]},
        {type: "speak", prompt: "Quieres una bebida fría y natural, hecha de naranja. ¿Qué pides?", target: "Un zumo de naranja, por favor.", altAnswers: ["zumo de naranja", "el zumo de naranja"]},
        {type: "speak", prompt: "Quieres pan tostado para desayunar. ¿Qué pides?", target: "Una tostada, por favor.", altAnswers: ["tostada", "la tostada"]},
        {type: "speak", prompt: "Quieres un sándwich hecho con pan tipo baguete. ¿Qué pides?", target: "Un bocadillo, por favor.", altAnswers: ["bocadillo", "el bocadillo"]},
        {type: "speak", prompt: "¿Dónde te sientas si prefieres tomar el café afuera, al aire libre?", target: "En la terraza.", altAnswers: ["la terraza", "En la terraza"]},
        {type: "speak", prompt: "¿Dónde pagas la cuenta al final?", target: "En la caja registradora.", altAnswers: ["la caja registradora"]},
        {type: "speak", prompt: "¿En qué te sirven el café, normalmente?", target: "En la taza.", altAnswers: ["la taza", "En la taza"]},
        {type: "speak", prompt: "¿Qué le pones al café si te gusta dulce?", target: "Azúcar.", altAnswers: ["el azúcar", "Le pongo azúcar"]},
        {type: "speak", prompt: "¿Con qué remueves el azúcar dentro del café?", target: "Con la cucharilla.", altAnswers: ["la cucharilla", "Con la cucharilla"]},
        {type: "mc", q: "O sanduíche de pão tipo baguete, na Espanha, se chama...", options: ["el sándwich", "el bocadillo", "la tostada", "el croissant"], correct: 1},
        {type: "fill", q: "'A colherzinha' de café, em espanhol, se escreve: la ___", answer: "cucharilla"}
      ]
    },
    {
      id: "er-panaderia", order: 6, title: "La panadería", subtitle: "A padaria",
      vocabulary: [
        {category: "Vocabulario", items: [
          {es: "el panadero / la panadera", pt: "o padeiro / a padeira"},
          {es: "el pan", pt: "o pão"},
          {es: "la harina", pt: "a farinha"},
          {es: "el pan dulce", pt: "o pão doce"},
          {es: "el pastel", pt: "o bolo"},
          {es: "la magdalena", pt: "o bolinho/queque"},
          {es: "la galleta", pt: "o biscoito"},
          {es: "la napolitana", pt: "a napolitana (doce enrolado)"},
          {es: "las palmeritas", pt: "as palmierzinhas"},
          {es: "los tarros de galletas", pt: "os potes de biscoito"},
          {es: "la balanza", pt: "a balança"},
          {es: "la caja registradora", pt: "o caixa registradora"},
          {es: "la bolsa", pt: "a sacola"}
        ]}
      ],
      grammar: [],
      notes: [],
      exercises: [
        {
          type: "caso", icon: "🥖", stamp: "✅ ENCARGO CONFIRMADO",
          scenario: "Vas a organizar una reunión de trabajo y necesitas encargar pan y dulces para los invitados.",
          q: "Pide, en una frase completa, seis bocadillos y una docena de magdalenas.",
          target: "Quiero seis bocadillos y una docena de magdalenas, por favor.",
          altAnswers: ["Me da seis bocadillos y una docena de magdalenas, por favor.", "Necesito seis bocadillos y doce magdalenas para hoy."]
        },
        {
          type: "caso", icon: "🌾", stamp: "✅ CONSULTA RESUELTA",
          scenario: "Uno de tus invitados tiene alergia al gluten y quieres preguntar si hay opciones para él.",
          q: "Pregunta, en una frase completa, si tienen pan sin gluten.",
          target: "¿Tienen pan sin gluten, por favor?",
          altAnswers: ["¿Hay alguna opción sin gluten?", "¿Tiene pan que no tenga gluten?"]
        },
        {
          type: "chat",
          npcName: "El panadero",
          npcAvatar: "👨‍🍳",
          scenario: "Vas a encargar pan y dulces para una fiesta de veinte personas.",
          turns: [
            { npc: "¡Buenos días! ¿Qué necesita hoy?" },
            { user: {
                prompt: "Dile que necesitas pan para una fiesta de veinte personas.",
                target: "Necesito pan para una fiesta de veinte personas.",
                altAnswers: ["Pan para una fiesta de veinte personas", "Es para una fiesta de veinte personas"]
            }},
            { npc: "Perfecto, le recomiendo diez barras y unas magdalenas. ¿Le parece bien?" },
            { user: {
                prompt: "Responde que sí, y pregunta si tienen alguna opción sin gluten.",
                target: "Sí, me parece bien. ¿Tienen también alguna opción sin gluten?",
                altAnswers: [
                  {text: "Sí, me parece bien.", reply: "Perfecto, ahora se lo preparo."},
                  "¿Tienen algo sin gluten?",
                  "Sí, ¿hay opción sin gluten?"
                ]
            }},
            { npc: "Sí, tenemos pan sin gluten, pero hay que pedirlo con un día de antelación." },
            { user: {
                prompt: "Responde que vale, que lo pides para mañana.",
                target: "Vale, entonces lo pido para mañana.",
                altAnswers: ["Vale, para mañana entonces", "De acuerdo, lo pido para mañana"]
            }},
            { npc: "Perfecto, aquí lo tendrá mañana a primera hora." }
          ]
        },
        {type: "speak", prompt: "¿Quién hace y vende el pan en la panadería?", target: "El panadero.", altAnswers: ["el panadero", "la panadera"]},
        {type: "speak", prompt: "¿Qué compras todos los días para hacer un sándwich?", target: "Pan.", altAnswers: ["el pan", "Compro pan"]},
        {type: "speak", prompt: "¿Con qué se hace el pan?", target: "Con harina.", altAnswers: ["la harina", "Se hace con harina"]},
        {type: "speak", prompt: "Quieres algo dulce para el café, con forma redonda. ¿Qué pides?", target: "Un pastel, por favor.", altAnswers: ["pastel", "el pastel"]},
        {type: "speak", prompt: "Quieres un bizcochito pequeño y esponjoso. ¿Qué pides?", target: "Una magdalena, por favor.", altAnswers: ["magdalena", "la magdalena"]},
        {type: "speak", prompt: "Quieres algo crujiente y dulce para acompañar el té. ¿Qué pides?", target: "Una galleta, por favor.", altAnswers: ["galleta", "la galleta"]},
        {type: "speak", prompt: "¿Dónde pesa el panadero el pan antes de venderlo?", target: "En la balanza.", altAnswers: ["la balanza", "En la balanza"]},
        {type: "speak", prompt: "¿En qué te da el panadero el pan para llevarlo a casa?", target: "En la bolsa.", altAnswers: ["la bolsa", "En la bolsa"]},
        {type: "speak", prompt: "¿Dónde pagas en la panadería?", target: "En la caja registradora.", altAnswers: ["la caja registradora"]},
        {type: "mc", q: "'O bolinho/queque' pequeno, em espanhol, se chama...", options: ["la magdalena", "la galleta", "la napolitana", "la palmerita"], correct: 0},
        {type: "fill", q: "'O pão doce' em espanhol se escreve: el pan ___", answer: "dulce"}
      ]
    },
    {
      id: "er-auditoria", order: 7, title: "La auditoría", subtitle: "A auditoria (vocabulário profissional)",
      vocabulary: [
        {category: "Vocabulario general", items: [
          {es: "el auditor / la auditora", pt: "o auditor / a auditora"},
          {es: "el informe", pt: "o relatório"},
          {es: "la carpeta", pt: "a pasta de documentos"},
          {es: "el ordenador", pt: "o computador"},
          {es: "la calculadora", pt: "a calculadora"},
          {es: "la lista de verificación", pt: "a lista de verificação/checklist"},
          {es: "la firma", pt: "a assinatura"},
          {es: "el documento", pt: "o documento"},
          {es: "el cronograma", pt: "o cronograma"},
          {es: "el gráfico", pt: "o gráfico"},
          {es: "la empresa", pt: "a empresa"},
          {es: "la reunión", pt: "a reunião"},
          {es: "la norma", pt: "a norma"},
          {es: "el riesgo", pt: "o risco"},
          {es: "el hallazgo", pt: "o achado (de auditoria)"},
          {es: "la evidencia", pt: "a evidência"}
        ]},
        {category: "Proceso y hallazgos", items: [
          {es: "la certificación", pt: "a certificação"},
          {es: "el plan de auditoría", pt: "o plano de auditoria"},
          {es: "el alcance", pt: "o escopo/abrangência"},
          {es: "la conformidad", pt: "a conformidade"},
          {es: "la no conformidad", pt: "a não conformidade"},
          {es: "la acción correctiva", pt: "a ação corretiva"},
          {es: "el muestreo", pt: "a amostragem"},
          {es: "el dictamen", pt: "o parecer/laudo"},
          {es: "la trazabilidad", pt: "a rastreabilidade"},
          {es: "la mejora continua", pt: "a melhoria contínua"}
        ]},
        {category: "Personas y reunión", items: [
          {es: "el auditor líder", pt: "o auditor líder"},
          {es: "el auditado", pt: "o auditado (empresa/área avaliada)"},
          {es: "el equipo auditor", pt: "a equipe auditora"},
          {es: "el gerente de calidad", pt: "o gerente de qualidade"},
          {es: "la alta dirección", pt: "a alta direção"},
          {es: "la reunión de apertura", pt: "a reunião de abertura"},
          {es: "la reunión de cierre", pt: "a reunião de encerramento"},
          {es: "la entrevista", pt: "a entrevista"},
          {es: "la observación", pt: "a observação"},
          {es: "el procedimiento", pt: "o procedimento"}
        ]}
      ],
      grammar: [],
      notes: [
        "Vocabulário direto ao ponto do seu trabalho — útil para reuniões, relatórios e apresentações de auditoria em espanhol.",
        "As categorias 'Proceso y hallazgos' e 'Personas y reunión' foram ampliadas para dar mais profundidade a este módulo, já que é o tema mais ligado ao seu trabalho na Quallisi."
      ],
      exercises: [
        {
          type: "caso", icon: "📋", stamp: "✅ HALLAZGO REGISTRADO",
          scenario: "Terminaste la auditoría y encontraste una no conformidad importante en la empresa de tu cliente. Necesitas explicarla a la alta dirección.",
          q: "Escribe una frase completa explicando que encontraron una no conformidad en el proceso de almacenamiento y que se necesita una acción correctiva.",
          target: "Encontramos una no conformidad en el proceso de almacenamiento y se necesita una acción correctiva.",
          altAnswers: ["Hay una no conformidad en el almacenamiento y hace falta una acción correctiva.", "Detectamos una no conformidad en el proceso de almacenamiento; es necesaria una acción correctiva."]
        },
        {
          type: "caso", icon: "🔍", stamp: "✅ DICTAMEN EN CAMINO",
          scenario: "El gerente de calidad te pregunta si puede confiar en la trazabilidad de los documentos que revisaste.",
          q: "Responde con una frase completa confirmando que la trazabilidad está garantizada y que el dictamen final estará listo la próxima semana.",
          target: "La trazabilidad está garantizada y el dictamen final estará listo la próxima semana.",
          altAnswers: ["Sí, la trazabilidad es completa y el dictamen estará listo la semana que viene.", "Puede confiar en la trazabilidad; el dictamen final llegará la próxima semana."]
        },
        {
          // Ejercicio "chat": a pedido del usuario, este módulo pasó a tener una conversación
          // simulada de verdad al final de cada lección (no solo preguntas aisladas) — acá se
          // usa el vocabulario de auditoría ya practicado arriba, en una mini-reunión de
          // apertura con una auditora líder. Ver wireChatExercise() en app.js.
          type: "chat",
          npcName: "María (auditora líder)",
          npcAvatar: "👩‍💼",
          scenario: "Estás en la reunión de apertura de una auditoría en la empresa de tu cliente. María, la auditora líder, empieza a hablar contigo.",
          turns: [
            { npc: "¡Buenos días! Soy María, la auditora líder de hoy. ¿Ya tienes lista la carpeta con todos los documentos?" },
            { user: {
                prompt: "Responde que sí, que la carpeta ya está lista.",
                target: "Sí, la carpeta ya está lista.",
                altAnswers: ["Sí, ya está lista", "La carpeta está lista", "Sí, la carpeta está lista"]
            }},
            { npc: "Perfecto. Vamos a revisar la lista de verificación punto por punto. ¿Puedes traerme el informe del año pasado?" },
            { user: {
                prompt: "Responde que sí, aquí tienes el informe.",
                target: "Sí, aquí tienes el informe.",
                altAnswers: ["Aquí está el informe", "Sí, aquí está el informe", "el informe"]
            }},
            { npc: "Gracias. Durante la entrevista con tu equipo encontramos un hallazgo importante: un riesgo en el proceso de almacenamiento." },
            { user: {
                prompt: "Pregunta qué acción correctiva se debe implementar.",
                target: "¿Qué acción correctiva debemos implementar?",
                altAnswers: [
                  {text: "¿Qué hacemos ahora?", reply: "Vamos a definir una acción correctiva juntos, no te preocupes."},
                  "acción correctiva",
                  "¿Qué debemos hacer?"
                ]
            }},
            { npc: "Vamos a definir una acción correctiva y revisarla en la reunión de cierre. ¿Todo claro?" },
            { user: {
                prompt: "Responde que sí, todo claro, y agradece.",
                target: "Sí, todo claro. Gracias por la explicación.",
                altAnswers: ["Sí, todo claro", "de acuerdo", "Sí, gracias"]
            }},
            { npc: "¡Excelente! Nos vemos en la reunión de cierre. ¡Buen trabajo hoy!" }
          ]
        },
        {type: "speak", prompt: "¿Quién revisa los procesos y documentos de una empresa para verificar que todo esté correcto?", target: "El auditor.", altAnswers: ["el auditor", "la auditora"]},
        {type: "speak", prompt: "Al terminar la auditoría, ¿qué documento entregas con los resultados?", target: "El informe.", altAnswers: ["el informe"]},
        {type: "speak", prompt: "¿Dónde guardas los documentos de la auditoría, organizados?", target: "En la carpeta.", altAnswers: ["la carpeta", "En la carpeta"]},
        {type: "speak", prompt: "¿Qué usas para verificar, punto por punto, si cada requisito se cumple?", target: "La lista de verificación.", altAnswers: ["la lista de verificación", "el checklist"]},
        {type: "speak", prompt: "¿Cómo se llama un problema real que encuentras durante la auditoría?", target: "El hallazgo.", altAnswers: ["el hallazgo"]},
        {type: "speak", prompt: "Cuando algo NO cumple con la norma, decimos que hay...", target: "No conformidad.", altAnswers: ["la no conformidad", "una no conformidad"]},
        {type: "speak", prompt: "Después de encontrar un problema, ¿qué se implementa para corregirlo?", target: "La acción correctiva.", altAnswers: ["la acción correctiva"]},
        {type: "speak", prompt: "¿Cómo se llama el documento oficial que certifica que una empresa cumple una norma?", target: "La certificación.", altAnswers: ["la certificación"]},
        {type: "speak", prompt: "¿Cómo se llama el auditor que dirige y coordina todo el equipo?", target: "El auditor líder.", altAnswers: ["el auditor líder", "auditor líder"]},
        {type: "speak", prompt: "¿Cómo se llama la empresa o el área que está siendo auditada?", target: "El auditado.", altAnswers: ["el auditado"]},
        {type: "speak", prompt: "¿Cómo se llama la reunión al INICIO de la auditoría, donde se explica el plan?", target: "La reunión de apertura.", altAnswers: ["la reunión de apertura"]},
        {type: "speak", prompt: "¿Cómo se llama la reunión al FINAL, donde se presentan los resultados?", target: "La reunión de cierre.", altAnswers: ["la reunión de cierre"]},
        {type: "speak", prompt: "¿Cómo se llama el documento que describe, paso a paso, cómo se hace una tarea?", target: "El procedimiento.", altAnswers: ["el procedimiento"]},
        {type: "mc", q: "'A pasta de documentos', em espanhol, é...", options: ["la carpeta", "el informe", "la firma", "el hallazgo"], correct: 0},
        {type: "mc", q: "Cuando un requisito de la norma NO se cumple, se llama...", options: ["conformidad", "hallazgo positivo", "no conformidad", "certificación"], correct: 2},
        {type: "fill", q: "'O computador' em espanhol se escreve: el ___", answer: "ordenador"},
        {type: "fill", q: "'A reunião ao final da auditoria, onde se apresentam os resultados' se escreve: la reunión de ___", answer: "cierre"}
      ]
    },
    {
      id: "er-aeropuerto", order: 8, title: "El aeropuerto", subtitle: "O aeroporto",
      vocabulary: [
        {category: "Vocabulario general", items: [
          {es: "el avión", pt: "o avião"},
          {es: "la maleta", pt: "a mala"},
          {es: "el pasaporte", pt: "o passaporte"},
          {es: "la tarjeta de embarque", pt: "o cartão de embarque"},
          {es: "la puerta de embarque", pt: "o portão de embarque"},
          {es: "la pantalla de salidas", pt: "o painel de partidas"},
          {es: "la cinta transportadora", pt: "a esteira de bagagem"},
          {es: "el control de seguridad", pt: "o controle de segurança"},
          {es: "la aduana", pt: "a alfândega"},
          {es: "la torre de control", pt: "a torre de controle"},
          {es: "la pista de aterrizaje", pt: "a pista de pouso"},
          {es: "la sala de espera", pt: "a sala de espera"},
          {es: "el billete", pt: "a passagem"},
          {es: "el equipaje de mano", pt: "a bagagem de mão"},
          {es: "el vuelo", pt: "o voo"}
        ]},
        {category: "Documentos y check-in", items: [
          {es: "el billete electrónico", pt: "a passagem eletrônica"},
          {es: "el código de reserva", pt: "o código de reserva"},
          {es: "la aerolínea", pt: "a companhia aérea"},
          {es: "el equipaje facturado", pt: "a bagagem despachada"},
          {es: "el exceso de equipaje", pt: "o excesso de bagagem"},
          {es: "la fila", pt: "a fila"},
          {es: "el mostrador", pt: "o balcão de check-in"},
          {es: "el número de vuelo", pt: "o número do voo"},
          {es: "el retraso", pt: "o atraso"},
          {es: "la cancelación", pt: "o cancelamento"}
        ]},
        {category: "En el vuelo y la llegada", items: [
          {es: "el asiento", pt: "o assento"},
          {es: "el cinturón de seguridad", pt: "o cinto de segurança"},
          {es: "la tripulación", pt: "a tripulação"},
          {es: "el piloto", pt: "o piloto"},
          {es: "el auxiliar de vuelo", pt: "o comissário de bordo"},
          {es: "la bandeja", pt: "a bandeja"},
          {es: "el aterrizaje", pt: "o pouso"},
          {es: "el despegue", pt: "a decolagem"},
          {es: "la recogida de equipaje", pt: "a retirada de bagagem"},
          {es: "el taxi", pt: "o táxi"}
        ]}
      ],
      grammar: [],
      notes: [
        "'Billete' (Espanha) é o mesmo que 'boleto/passagem' — em vários países da América Latina usa-se 'boleto' ou 'tiquete'.",
        "As categorias 'Documentos y check-in' e 'En el vuelo y la llegada' foram adicionadas para cobrir toda a jornada do viajante, do check-in até a chegada."
      ],
      exercises: [
        {
          type: "caso", icon: "🛫", stamp: "✅ INFORMACIÓN CONFIRMADA",
          scenario: "Llegas al aeropuerto y descubres que tu vuelo tiene un retraso importante.",
          q: "Pregúntale al empleado de la aerolínea, en una frase completa, a qué hora sale ahora el vuelo.",
          target: "Mi vuelo tiene un retraso, ¿a qué hora sale ahora?",
          altAnswers: ["¿Me puede decir la nueva hora de salida de mi vuelo?", "¿A qué hora sale el vuelo ahora que hay retraso?"]
        },
        {
          type: "caso", icon: "🧳", stamp: "✅ TRÁMITE RESUELTO",
          scenario: "Tu maleta pesa más de lo permitido en el mostrador de facturación.",
          q: "Pregunta, en una frase completa, cuánto tienes que pagar por el exceso de equipaje.",
          target: "Mi maleta pesa más de lo permitido, ¿cuánto tengo que pagar por el exceso de equipaje?",
          altAnswers: ["¿Cuánto cuesta el exceso de equipaje?", "Tengo exceso de equipaje, ¿cuánto debo pagar?"]
        },
        {
          type: "chat",
          npcName: "La agente de la aerolínea",
          npcAvatar: "🧑‍✈️",
          scenario: "Estás en el mostrador de facturación y acabas de enterarte de que tu vuelo tiene retraso.",
          turns: [
            { npc: "Buenos días, ¿me muestra su pasaporte y su reserva, por favor?" },
            { user: {
                prompt: "Responde que sí, aquí tiene el pasaporte y el código de reserva.",
                target: "Sí, aquí tiene mi pasaporte y el código de reserva.",
                altAnswers: ["Aquí tiene mi pasaporte", "Sí, aquí está todo"]
            }},
            { npc: "Gracias. Veo que su vuelo tiene un retraso de dos horas." },
            { user: {
                prompt: "Pregunta en qué puerta de embarque tienes que esperar ahora.",
                target: "¿En qué puerta de embarque tengo que esperar ahora?",
                altAnswers: [
                  {text: "¿Qué hago ahora?", reply: "Espere en la sala y mire la pantalla de salidas."},
                  "¿Cuál es la puerta de embarque?",
                  "¿A qué puerta tengo que ir?"
                ]
            }},
            { npc: "Va a ser la puerta doce, pero se lo confirmaremos en la pantalla de salidas." },
            { user: {
                prompt: "Agradece, y pregunta si hay alguna sala de espera cómoda cerca.",
                target: "Vale, gracias. ¿Hay alguna sala de espera cómoda cerca?",
                altAnswers: ["Gracias, ¿hay una sala de espera cerca?", "¿Dónde puedo esperar cómodamente?"]
            }},
            { npc: "Sí, a la derecha hay una sala de espera. ¡Buen viaje!" }
          ]
        },
        {type: "speak", prompt: "¿En qué medio de transporte viajas por el aire?", target: "En el avión.", altAnswers: ["el avión", "En el avión"]},
        {type: "speak", prompt: "¿Dónde pones tu ropa cuando viajas?", target: "En la maleta.", altAnswers: ["la maleta", "En la maleta"]},
        {type: "speak", prompt: "¿Qué documento necesitas para viajar a otro país?", target: "El pasaporte.", altAnswers: ["el pasaporte"]},
        {type: "speak", prompt: "¿Qué necesitas para poder subir al avión?", target: "La tarjeta de embarque.", altAnswers: ["la tarjeta de embarque"]},
        {type: "speak", prompt: "¿Dónde revisan que no llevas objetos prohibidos?", target: "En el control de seguridad.", altAnswers: ["el control de seguridad"]},
        {type: "speak", prompt: "¿Dónde revisan tu pasaporte al entrar a otro país?", target: "En la aduana.", altAnswers: ["la aduana"]},
        {type: "speak", prompt: "¿Cómo se llama la bolsa pequeña que llevas contigo dentro del avión?", target: "El equipaje de mano.", altAnswers: ["el equipaje de mano"]},
        {type: "speak", prompt: "¿Cómo se llama la empresa que opera el vuelo, como Iberia o Vueling?", target: "La aerolínea.", altAnswers: ["la aerolínea"]},
        {type: "speak", prompt: "Si tu maleta pesa más de lo permitido, tienes que pagar por el...", target: "Exceso de equipaje.", altAnswers: ["el exceso de equipaje"]},
        {type: "speak", prompt: "Si tu vuelo no sale a la hora prevista, ¿qué tiene el vuelo?", target: "Tiene un retraso.", altAnswers: ["el retraso", "un retraso"]},
        {type: "speak", prompt: "¿Qué te pones antes de despegar, por seguridad?", target: "El cinturón de seguridad.", altAnswers: ["el cinturón de seguridad"]},
        {type: "speak", prompt: "¿Cómo se llama el momento en que el avión sube y deja el suelo?", target: "El despegue.", altAnswers: ["el despegue"]},
        {type: "speak", prompt: "¿Cómo se llama el momento en que el avión toca el suelo al final del vuelo?", target: "El aterrizaje.", altAnswers: ["el aterrizaje"]},
        {type: "mc", q: "'O painel de partidas', em espanhol, é...", options: ["la pantalla de salidas", "la torre de control", "la pista de aterrizaje", "la aduana"], correct: 0},
        {type: "mc", q: "El grupo de personas que trabaja dentro del avión (piloto, auxiliares...) se llama...", options: ["la aerolínea", "la tripulación", "el mostrador", "la aduana"], correct: 1},
        {type: "fill", q: "'A bagagem de mão' em espanhol se escreve: el equipaje de ___", answer: "mano"},
        {type: "fill", q: "'O momento em que o avião sobe e deixa o solo' se escreve: el ___", answer: "despegue"}
      ]
    },
    {
      id: "er-construccion", order: 9, title: "Materiales de construcción", subtitle: "Vocabulario de obra y reforma",
      vocabulary: [
        {category: "Materiales básicos", items: [
          {es: "el cemento", pt: "cimento"}, {es: "la arena", pt: "areia"}, {es: "la grava", pt: "brita"},
          {es: "el ladrillo", pt: "tijolo"}, {es: "el bloque de concreto", pt: "bloco de concreto"},
          {es: "el mortero", pt: "argamassa"}, {es: "el hormigón", pt: "concreto"}, {es: "la cal", pt: "cal"},
          {es: "el yeso", pt: "gesso"}, {es: "la piedra", pt: "pedra"}, {es: "la cerámica", pt: "cerâmica"}
        ]},
        {category: "Estructura y acabado", items: [
          {es: "el acero", pt: "aço"}, {es: "la madera", pt: "madeira"}, {es: "la teja", pt: "telha"},
          {es: "la puerta", pt: "porta"}, {es: "la ventana", pt: "janela"}, {es: "el vidrio", pt: "vidro"},
          {es: "la herraje", pt: "ferragem"}, {es: "la pintura", pt: "tinta"}, {es: "el pincel", pt: "pincel"},
          {es: "el rodillo", pt: "rolo de pintura"}, {es: "el revestimiento", pt: "revestimento"}
        ]},
        {category: "Herramientas", items: [
          {es: "el martillo", pt: "martelo"}, {es: "el destornillador", pt: "chave de fenda"},
          {es: "el alicate", pt: "alicate"}, {es: "la sierra", pt: "serra"}, {es: "la cinta métrica", pt: "trena"},
          {es: "el nivel", pt: "nível"}, {es: "la cuchara de albañil", pt: "colher de pedreiro"},
          {es: "la llana", pt: "desempenadeira"}, {es: "la azada", pt: "enxada"},
          {es: "la carretilla", pt: "carrinho de mão"}, {es: "el taladro", pt: "furadeira"}
        ]},
        {category: "Instalaciones", items: [
          {es: "el tubo", pt: "tubo/cano"}, {es: "el cable eléctrico", pt: "fio elétrico"},
          {es: "el interruptor", pt: "interruptor"}, {es: "el enchufe", pt: "tomada"},
          {es: "la bombilla", pt: "lâmpada"}, {es: "el interruptor automático", pt: "disjuntor"},
          {es: "la válvula", pt: "registro/válvula"}, {es: "la caja de luz", pt: "caixa de luz"},
          {es: "el desagüe", pt: "ralo"}
        ]},
        {category: "Acciones de obra", items: [
          {es: "construir", pt: "construir"}, {es: "reformar", pt: "reformar"}, {es: "asentar", pt: "assentar"},
          {es: "mezclar", pt: "misturar"}, {es: "cortar", pt: "cortar"}, {es: "perforar", pt: "furar"},
          {es: "pintar", pt: "pintar"}, {es: "medir", pt: "medir"}, {es: "nivelar", pt: "nivelar"},
          {es: "fijar", pt: "fixar"}, {es: "impermeabilizar", pt: "impermeabilizar"}
        ]},
        {category: "Frases de la obra", items: [
          {es: "¿Cuánto cuesta este material?", pt: "Quanto custa este material?"},
          {es: "Necesito cemento.", pt: "Preciso de cimento."},
          {es: "Vamos a empezar la obra.", pt: "Vamos começar a obra."},
          {es: "La obra está atrasada.", pt: "A obra está atrasada."},
          {es: "Necesitamos más ladrillos.", pt: "Precisamos de mais tijolos."},
          {es: "Mezcle bien el concreto.", pt: "Misture bem o concreto."},
          {es: "Use el nivel para nivelar.", pt: "Use o nível para nivelar."},
          {es: "La pintura ya se secó.", pt: "A pintura já secou."}
        ]}
      ],
      notes: [
        "'Hormigón' (España) y 'concreto' (América Latina) son sinónimos — las dos formas se entienden en todo el mundo hispanohablante, igual que 'hormigón armado' = concreto armado.",
        "'El nivel' sirve tanto para la herramienta (nivel de burbuja) como para la idea de 'altura' — 'nivelar' es dejar algo a la misma altura/horizontal."
      ],
      exercises: [
        {
          type: "caso", icon: "🏗️", stamp: "✅ PRESUPUESTO SOLICITADO",
          scenario: "Estás en una tienda de materiales de construcción y necesitas cemento y ladrillos para una reforma pequeña.",
          q: "Escribe una frase completa para pedir el precio del cemento y decir cuántos ladrillos necesitas.",
          target: "¿Cuánto cuesta el cemento? Necesito también cien ladrillos, por favor.",
          altAnswers: ["¿Cuánto cuesta el cemento y los ladrillos?", "Necesito cemento y cien ladrillos, ¿cuánto cuesta todo?"]
        },
        {
          type: "caso", icon: "🧱", stamp: "✅ INSTRUCCIÓN DADA",
          scenario: "Eres el encargado de la obra y el ayudante todavía no sabe usar bien el nivel al asentar los ladrillos.",
          q: "Escribe una frase completa dándole una instrucción sobre cómo nivelar bien la pared.",
          target: "Usa el nivel en cada hilada de ladrillos para que la pared quede bien nivelada.",
          altAnswers: ["Tienes que nivelar cada hilada con el nivel.", "Revisa el nivel antes de seguir asentando."]
        },
        {type: "speak", prompt: "¿Qué material se usa para pegar ladrillos, mezclado con arena y cemento?", target: "El mortero.", altAnswers: ["el mortero"]},
        {type: "speak", prompt: "¿Qué herramienta usas para clavar un clavo?", target: "El martillo.", altAnswers: ["el martillo"]},
        {type: "speak", prompt: "¿Qué herramienta usas para hacer agujeros en la pared?", target: "El taladro.", altAnswers: ["el taladro"]},
        {type: "speak", prompt: "¿Qué usas para medir distancias largas en la obra?", target: "La cinta métrica.", altAnswers: ["la cinta métrica"]},
        {type: "speak", prompt: "¿Cómo se llama el material transparente de las ventanas?", target: "El vidrio.", altAnswers: ["el vidrio"]},
        {type: "speak", prompt: "¿Qué usas para transportar arena o escombros dentro de la obra?", target: "La carretilla.", altAnswers: ["la carretilla"]},
        {type: "speak", prompt: "¿Cómo se llama el material que cubre el techo, hecho de barro?", target: "La teja.", altAnswers: ["la teja"]},
        {type: "speak", prompt: "¿Qué haces con la pared antes de que quede lisa y pareja, con la llana?", target: "La reboco / la aliso.", altAnswers: ["alisar la pared", "reboco"]},
        {type: "speak", prompt: "¿Qué se hace para evitar que el agua entre en la casa por el techo o la pared?", target: "Se impermeabiliza.", altAnswers: ["impermeabilizar"]},
        {type: "speak", prompt: "Si mezclas cemento, arena y agua, ¿qué obtienes?", target: "Obtengo mortero.", altAnswers: ["mortero", "el mortero"]},
        {type: "speak", prompt: "¿Qué revisas con el nivel antes de terminar una pared o un piso?", target: "Reviso que esté nivelado.", altAnswers: ["que esté nivelado", "el nivel"]},
        {type: "mc", q: "'A furadeira', em espanhol, é...", options: ["el destornillador", "el taladro", "la sierra", "el martillo"], correct: 1},
        {type: "mc", q: "'A carretilla' se usa para...", options: ["medir", "pintar", "transportar materiales", "cortar madera"], correct: 2},
        {type: "fill", q: "'A tinta', em espanhol, se escribe: la ___", answer: "pintura"},
        {type: "fill", q: "'O tijolo', em espanhol, se escribe: el ___", answer: "ladrillo"}
      ]
    },
    {
      id: "er-oficina", order: 10, title: "Materiales de oficina", subtitle: "Papelería, tecnología y organización",
      vocabulary: [
        {category: "Escritura y corrección", items: [
          {es: "el bolígrafo / la pluma", pt: "caneta"}, {es: "el lápiz", pt: "lápis"},
          {es: "el portaminas", pt: "lapiseira"}, {es: "la goma de borrar", pt: "borracha"},
          {es: "el sacapuntas", pt: "apontador"}, {es: "el resaltador", pt: "marca-texto"},
          {es: "el corrector", pt: "corretivo"}, {es: "el pegamento", pt: "cola"},
          {es: "la regla", pt: "régua"}, {es: "las tijeras", pt: "tesoura"}
        ]},
        {category: "Papeles y cuadernos", items: [
          {es: "el papel", pt: "papel"}, {es: "el bloc de notas", pt: "bloco de notas"},
          {es: "el cuaderno", pt: "caderno"}, {es: "la agenda", pt: "agenda"}, {es: "el diario", pt: "diário"},
          {es: "la nota adhesiva", pt: "post-it"}, {es: "el sobre", pt: "envelope"},
          {es: "la carpeta", pt: "pasta"}, {es: "los clips", pt: "clips"}, {es: "la grapadora", pt: "grampeador"},
          {es: "la perforadora", pt: "furador de papel"}, {es: "las etiquetas", pt: "etiquetas"}
        ]},
        {category: "Organización y archivo", items: [
          {es: "el archivo", pt: "arquivo"}, {es: "el cajón", pt: "gaveta"},
          {es: "la caja organizadora", pt: "caixa organizadora"}, {es: "el archivador", pt: "fichário"},
          {es: "el portalápices", pt: "porta-lápis"}, {es: "el cúter", pt: "estilete"},
          {es: "la calculadora", pt: "calculadora"}, {es: "el sello", pt: "carimbo"},
          {es: "la pizarra blanca", pt: "quadro branco"}
        ]},
        {category: "Tecnología y accesorios", items: [
          {es: "la computadora", pt: "computador"}, {es: "la impresora", pt: "impressora"},
          {es: "el escáner", pt: "scanner"}, {es: "el ratón / mouse", pt: "mouse"}, {es: "el teclado", pt: "teclado"},
          {es: "la memoria USB", pt: "pendrive"}, {es: "el cable", pt: "cabo"},
          {es: "los auriculares", pt: "fone de ouvido"}, {es: "la cámara web", pt: "webcam"},
          {es: "el cargador", pt: "carregador"}
        ]},
        {category: "Frases útiles de oficina", items: [
          {es: "¿Dónde está...?", pt: "Onde está...?"}, {es: "Necesito...", pt: "Eu preciso de..."},
          {es: "¿Me prestas...?", pt: "Pode me emprestar...?"}, {es: "¿Es tuyo?", pt: "Isso é seu?"},
          {es: "Está faltando...", pt: "Está faltando..."}, {es: "¡Muchas gracias!", pt: "Muito obrigado(a)!"}
        ]}
      ],
      notes: [
        "'Bolígrafo' es la palabra más usada en España; en América Latina también se dice 'lapicera' o 'pluma' — las tres formas se entienden.",
        "'Ratón' (España) y 'mouse' (América Latina, muy común) son intercambiables para el periférico de la computadora."
      ],
      exercises: [
        {
          type: "caso", icon: "🖇️", stamp: "✅ MATERIAL SOLICITADO",
          scenario: "Trabajas en Quallisi y necesitas pedirle al área de compras nuevos materiales de oficina para el equipo.",
          q: "Escribe una frase completa pidiendo bolígrafos, carpetas y una grapadora nueva.",
          target: "Necesito bolígrafos, carpetas y una grapadora nueva para el equipo.",
          altAnswers: ["¿Puede pedir bolígrafos, carpetas y una grapadora nueva?", "Faltan bolígrafos, carpetas y una grapadora."]
        },
        {
          type: "caso", icon: "🖨️", stamp: "✅ AYUDA SOLICITADA",
          scenario: "La impresora de la oficina no funciona y tienes una reunión en diez minutos.",
          q: "Escribe una frase completa pidiendo ayuda a un colega porque la impresora no funciona.",
          target: "¿Me puedes ayudar? La impresora no funciona y tengo una reunión en diez minutos.",
          altAnswers: ["La impresora no funciona, ¿me ayudas?", "Necesito ayuda con la impresora, por favor."]
        },
        {type: "speak", prompt: "¿Qué usas para escribir con tinta?", target: "El bolígrafo.", altAnswers: ["el bolígrafo", "la pluma"]},
        {type: "speak", prompt: "¿Qué usas para borrar lo que escribiste a lápiz?", target: "La goma de borrar.", altAnswers: ["la goma de borrar"]},
        {type: "speak", prompt: "¿Qué usas para juntar varias hojas de papel con un solo clic?", target: "La grapadora.", altAnswers: ["la grapadora"]},
        {type: "speak", prompt: "¿Dónde guardas documentos organizados por tema?", target: "En la carpeta.", altAnswers: ["la carpeta"]},
        {type: "speak", prompt: "¿Qué aparato imprime documentos en papel?", target: "La impresora.", altAnswers: ["la impresora"]},
        {type: "speak", prompt: "¿Qué usas para escribir un correo o un informe en la computadora?", target: "El teclado.", altAnswers: ["el teclado"]},
        {type: "speak", prompt: "¿Cómo se llama el pequeño dispositivo para guardar archivos y llevarlos a otra computadora?", target: "La memoria USB.", altAnswers: ["la memoria USB", "el pendrive"]},
        {type: "speak", prompt: "¿Qué usas para marcar un texto importante de un color fuerte?", target: "El resaltador.", altAnswers: ["el resaltador"]},
        {type: "speak", prompt: "¿Dónde guardas bolígrafos y lápices, de pie, sobre el escritorio?", target: "En el portalápices.", altAnswers: ["el portalápices"]},
        {type: "speak", prompt: "¿Qué usas en una reunión para escribir ideas y que todos las vean?", target: "La pizarra blanca.", altAnswers: ["la pizarra blanca"]},
        {type: "speak", prompt: "¿Qué le pides a un colega cuando algo no es tuyo pero lo necesitas por un momento?", target: "¿Me prestas eso?", altAnswers: ["me lo prestas", "¿me prestas?"]},
        {type: "mc", q: "'O grampeador', em espanhol, é...", options: ["la grapadora", "el clip", "la perforadora", "el sello"], correct: 0},
        {type: "mc", q: "'A pasta', em espanhol (para guardar documentos), é...", options: ["el archivo", "la carpeta", "el cajón", "el sobre"], correct: 1},
        {type: "fill", q: "'O apontador', em espanhol, se escribe: el ___", answer: "sacapuntas"},
        {type: "fill", q: "'A tesoura', em espanhol, se escribe: las ___", answer: "tijeras"}
      ]
    },
    {
      id: "er-seguridad-casa", order: 11, title: "Seguridad residencial", subtitle: "Vocabulario de seguridad en casa",
      vocabulary: [
        {category: "Elementos de seguridad", items: [
          {es: "la cerradura", pt: "fechadura"}, {es: "la llave", pt: "chave"}, {es: "el candado", pt: "cadeado"},
          {es: "la alarma", pt: "alarme"}, {es: "la cámara de seguridad", pt: "câmera de segurança"},
          {es: "el intercomunicador", pt: "interfone"}, {es: "el timbre con cámara", pt: "campainha com câmera"},
          {es: "la cerca eléctrica", pt: "cerca elétrica"}, {es: "el sensor de movimiento", pt: "sensor de movimento"},
          {es: "el portón electrónico", pt: "portão eletrônico"}, {es: "el extintor de incendios", pt: "extintor de incêndio"},
          {es: "el detector de humo", pt: "detector de fumaça"}, {es: "la caja fuerte", pt: "cofre"}
        ]},
        {category: "Acciones y cuidados", items: [
          {es: "cerrar con llave", pt: "trancar"}, {es: "abrir", pt: "destrancar"}, {es: "verificar", pt: "verificar"},
          {es: "comprobar", pt: "conferir"}, {es: "instalar", pt: "instalar"}, {es: "mantener", pt: "manter"},
          {es: "encender la alarma", pt: "ligar o alarme"}, {es: "apagar la alarma", pt: "desligar o alarme"},
          {es: "activar la sirena", pt: "acionar a sirene"}, {es: "pedir ayuda", pt: "chamar ajuda"},
          {es: "estar atento", pt: "ficar atento"}, {es: "alejarse", pt: "afastar-se"}
        ]},
        {category: "Consejos de seguridad", items: [
          {es: "Siempre cierre con llave puertas y ventanas.", pt: "Sempre tranque portas e janelas."},
          {es: "Mantenga la iluminación exterior encendida.", pt: "Mantenha a iluminação externa acesa."},
          {es: "Instale cámaras de seguridad.", pt: "Instale câmeras de segurança."},
          {es: "Conozca a sus vecinos.", pt: "Conheça seus vizinhos."},
          {es: "No deje llaves escondidas.", pt: "Não deixe chaves escondidas."},
          {es: "Evite rutinas predecibles.", pt: "Evite rotinas previsíveis."},
          {es: "¡La seguridad empieza contigo!", pt: "A segurança começa com você!"}
        ]},
        {category: "Frases de emergencia", items: [
          {es: "¡Socorro!", pt: "Socorro!"}, {es: "¡Llame a la policía!", pt: "Ligue para a polícia!"},
          {es: "¡Me han robado!", pt: "Fui roubado!"}, {es: "¡Hay un intruso en la casa!", pt: "Há um invasor na casa!"},
          {es: "¡Necesito ayuda!", pt: "Preciso de ajuda!"}, {es: "¿Dónde está la salida?", pt: "Onde está a saída?"},
          {es: "¡Llame a los bomberos!", pt: "Chame os bombeiros!"}, {es: "¡Estoy en peligro!", pt: "Estou em perigo!"}
        ]}
      ],
      notes: [
        "En una emergencia real, las frases cortas e imperativas ('¡Llame a la policía!', '¡Socorro!') son las más importantes de memorizar: no hay tiempo para frases largas.",
        "'Cerrar con llave' es más específico que 'cerrar' — usa esa expresión completa cuando quieras dejar claro que trancaste la puerta, no solo que la empujaste."
      ],
      exercises: [
        {
          type: "caso", icon: "🚨", stamp: "✅ ALERTA REPORTADA",
          scenario: "Estás en casa de noche y escuchas un ruido extraño en la ventana. Crees que alguien intenta entrar.",
          q: "Escribe una frase completa para llamar a la policía y explicar la situación.",
          target: "¡Llame a la policía, por favor! Hay un intruso intentando entrar por la ventana.",
          altAnswers: ["Necesito ayuda, hay un intruso en la ventana.", "¡Llame a la policía! Alguien intenta entrar en mi casa."]
        },
        {
          type: "caso", icon: "🔐", stamp: "✅ CONSEJO DADO",
          scenario: "Un vecino nuevo te pregunta qué puede hacer para que su casa sea más segura.",
          q: "Escribe una frase completa dándole un consejo de seguridad.",
          target: "Siempre cierre con llave puertas y ventanas, e instale una cámara de seguridad.",
          altAnswers: ["Le recomiendo instalar una alarma y conocer a los vecinos.", "Mantenga la iluminación exterior encendida por la noche."]
        },
        {type: "speak", prompt: "¿Qué usas para abrir la puerta de tu casa?", target: "La llave.", altAnswers: ["la llave"]},
        {type: "speak", prompt: "¿Qué se activa cuando alguien entra sin permiso?", target: "La alarma.", altAnswers: ["la alarma"]},
        {type: "speak", prompt: "¿Qué usas para ver quién está en la puerta antes de abrir?", target: "La cámara de seguridad.", altAnswers: ["la cámara de seguridad", "el intercomunicador"]},
        {type: "speak", prompt: "¿Qué detecta el humo y avisa en caso de incendio?", target: "El detector de humo.", altAnswers: ["el detector de humo"]},
        {type: "speak", prompt: "¿Qué usas para apagar un incendio pequeño?", target: "El extintor de incendios.", altAnswers: ["el extintor de incendios"]},
        {type: "speak", prompt: "¿Dónde guardas objetos de valor de forma muy segura?", target: "En la caja fuerte.", altAnswers: ["la caja fuerte"]},
        {type: "speak", prompt: "¿Qué debes hacer siempre al salir de casa, con la puerta?", target: "Cerrarla con llave.", altAnswers: ["cerrar con llave"]},
        {type: "speak", prompt: "Si ves algo sospechoso en tu calle, ¿qué debes hacer?", target: "Estar atento y avisar.", altAnswers: ["estar atento", "avisar"]},
        {type: "speak", prompt: "Si alguien entra a la fuerza en tu casa, ¿qué gritas?", target: "¡Socorro!", altAnswers: ["socorro", "¡ayuda!"]},
        {type: "speak", prompt: "¿A quién llamas si hay un incendio?", target: "A los bomberos.", altAnswers: ["los bomberos", "llamo a los bomberos"]},
        {type: "mc", q: "'O cadeado', em espanhol, é...", options: ["la cerradura", "el candado", "la llave", "la alarma"], correct: 1},
        {type: "mc", q: "'Trancar a porta', em espanhol, se dice...", options: ["abrir la puerta", "cerrar con llave la puerta", "romper la puerta", "pintar la puerta"], correct: 1},
        {type: "fill", q: "'Chame os bombeiros!', em espanhol, se escribe: ¡Llame a los ___!", answer: "bomberos"},
        {type: "fill", q: "'Fui roubado!', em espanhol, se escribe: ¡Me han ___!", answer: "robado"}
      ]
    }
,
    {
      id: "er-comida-rapida", order: 12, title: "Comida rápida", subtitle: "Pedir en una hamburguesería o pizzería",
      vocabulary: [
        {category: "Sándwiches y hamburguesas", items: [
          {es: "la hamburguesa", pt: "hambúrguer"}, {es: "la hamburguesa con queso", pt: "cheeseburguer"},
          {es: "el perro caliente", pt: "cachorro-quente"}, {es: "el sándwich", pt: "sanduíche"},
          {es: "el sándwich mixto", pt: "misto-quente"}, {es: "la tostada", pt: "torrada"}
        ]},
        {category: "Acompañamientos", items: [
          {es: "las papas fritas", pt: "batata frita"}, {es: "los nuggets", pt: "nuggets"},
          {es: "los aros de cebolla", pt: "onion rings"}, {es: "la ensalada", pt: "salada"},
          {es: "el maíz", pt: "milho"}, {es: "la salsa", pt: "molho"}, {es: "el kétchup", pt: "ketchup"},
          {es: "la mostaza", pt: "mostarda"}, {es: "la mayonesa", pt: "maionese"}, {es: "los pepinillos", pt: "picles"}
        ]},
        {category: "Pizzas", items: [
          {es: "la pizza de queso", pt: "pizza de queijo"}, {es: "la pizza de jamón", pt: "pizza de presunto"},
          {es: "la pizza de pollo", pt: "pizza de frango"}, {es: "la pizza vegetariana", pt: "pizza vegetariana"},
          {es: "el borde relleno", pt: "borda recheada"}, {es: "la porción de pizza", pt: "fatia de pizza"}
        ]},
        {category: "Bebidas y postres", items: [
          {es: "el refresco", pt: "refrigerante"}, {es: "el jugo", pt: "suco"}, {es: "el agua con gas", pt: "água com gás"},
          {es: "el batido / la malteada", pt: "milkshake"}, {es: "el helado", pt: "sorvete"},
          {es: "la tarta / el pastel", pt: "bolo/torta"}, {es: "el flan / pudín", pt: "pudim"}
        ]},
        {category: "Frases para pedir", items: [
          {es: "Quiero...", pt: "Quero..."}, {es: "Me gustaría...", pt: "Gostaria de..."},
          {es: "¿Cuánto cuesta?", pt: "Quanto custa?"}, {es: "¿Es para aquí o para llevar?", pt: "É para aqui ou para levar?"},
          {es: "Para aquí, por favor.", pt: "Para aqui, por favor."}, {es: "Para llevar, por favor.", pt: "Para levar, por favor."},
          {es: "La cuenta, por favor.", pt: "A conta, por favor."}, {es: "¿Tiene opción vegetariana?", pt: "Tem opção vegetariana?"},
          {es: "¿Qué recomienda?", pt: "O que você recomenda?"}
        ]}
      ],
      notes: [
        "'¿Para aquí o para llevar?' es LA pregunta clásica en cualquier lugar de comida rápida hispanohablante — memorízala junto con tu respuesta.",
        "'Me gustaría...' es más educado que 'Quiero...' para pedir — muy útil en cualquier situación de atención al cliente."
      ],
      exercises: [
        {
          type: "caso", icon: "🍔", stamp: "✅ PEDIDO REALIZADO",
          scenario: "Estás en el mostrador de una hamburguesería y quieres pedir una hamburguesa con queso y papas fritas para llevar.",
          q: "Escribe una frase completa haciendo tu pedido.",
          target: "Me gustaría una hamburguesa con queso y papas fritas, para llevar, por favor.",
          altAnswers: ["Quiero una hamburguesa con queso y papas fritas para llevar.", "Una hamburguesa con queso y papas fritas para llevar, por favor."]
        },
        {
          type: "caso", icon: "🍕", stamp: "✅ CONSULTA RESPONDIDA",
          scenario: "Un amigo vegetariano te pregunta si la pizzería tiene alguna opción para él.",
          q: "Escribe una frase completa preguntando al mesero si hay opción vegetariana.",
          target: "¿Tiene alguna opción vegetariana en la pizza?",
          altAnswers: ["¿Hay pizza vegetariana?", "¿Tienen opción vegetariana?"]
        },
        {type: "speak", prompt: "¿Qué pides si quieres papas fritas y una hamburguesa?", target: "Quiero una hamburguesa con papas fritas.", altAnswers: ["una hamburguesa con papas fritas"]},
        {type: "speak", prompt: "¿Qué salsa roja es la más común para las papas fritas?", target: "El kétchup.", altAnswers: ["el kétchup"]},
        {type: "speak", prompt: "¿Qué bebida fría y espesa se hace con helado?", target: "El batido.", altAnswers: ["el batido", "la malteada"]},
        {type: "speak", prompt: "¿Cómo se llama un pedazo de pizza?", target: "Una porción de pizza.", altAnswers: ["la porción de pizza"]},
        {type: "speak", prompt: "¿Qué preguntas si no sabes si comer ahí o llevar la comida a casa?", target: "¿Para aquí o para llevar?", altAnswers: ["para aquí o para llevar"]},
        {type: "speak", prompt: "¿Qué pides al final, cuando ya terminaste de comer y quieres pagar?", target: "La cuenta, por favor.", altAnswers: ["la cuenta"]},
        {type: "speak", prompt: "¿Qué le preguntas al mesero si no sabes qué pedir?", target: "¿Qué recomienda?", altAnswers: ["qué recomienda"]},
        {type: "speak", prompt: "¿Cómo pides algo de forma educada, en vez de decir sólo 'quiero'?", target: "Me gustaría...", altAnswers: ["me gustaría"]},
        {type: "speak", prompt: "¿Qué postre frío y dulce se sirve en bolas?", target: "El helado.", altAnswers: ["el helado"]},
        {type: "speak", prompt: "¿Qué dices si la comida está muy sabrosa?", target: "¡Está delicioso!", altAnswers: ["está delicioso", "muy sabroso"]},
        {type: "mc", q: "'A batata frita', em espanhol, se dice...", options: ["las papas fritas", "los nuggets", "el maíz", "la ensalada"], correct: 0},
        {type: "mc", q: "'A conta, por favor', em espanhol, se dice...", options: ["¿Cuánto cuesta?", "La cuenta, por favor.", "Para llevar, por favor.", "¿Qué recomienda?"], correct: 1},
        {type: "fill", q: "'Quero uma pizza de queijo', em espanhol, se escribe: Quiero una pizza de ___", answer: "queso"},
        {type: "fill", q: "'Para levar, por favor', em espanhol, se escribe: Para ___, por favor.", answer: "llevar"}
      ]
    },
    {
      id: "er-avion", order: 13, title: "A bordo del avión", subtitle: "Instrucciones de los auxiliares de vuelo",
      vocabulary: [
        {category: "Bienvenida e información", items: [
          {es: "¡Bienvenidos a bordo!", pt: "Bem-vindos a bordo!"}, {es: "Nuestro destino es...", pt: "Nosso destino é..."},
          {es: "La duración del vuelo es de...", pt: "A duração do voo é de..."},
          {es: "Presten atención a las instrucciones de seguridad.", pt: "Atentem para as instruções de segurança."},
          {es: "Estamos a su disposición.", pt: "Estamos à disposição."}
        ]},
        {category: "Cinturón y dispositivos", items: [
          {es: "Abrochen el cinturón de seguridad.", pt: "Ajustem o cinto de segurança."},
          {es: "Mantengan el cinturón abrochado.", pt: "Mantenham o cinto ajustado."},
          {es: "Pongan los celulares en modo avión.", pt: "Coloquem os celulares no modo avião."},
          {es: "Apaguen sus dispositivos electrónicos.", pt: "Desliguem seus aparelhos eletrônicos."},
          {es: "El Bluetooth debe permanecer apagado.", pt: "O Bluetooth deve permanecer desligado."}
        ]},
        {category: "Posición del asiento", items: [
          {es: "Pongan el asiento en posición vertical.", pt: "Coloquem a poltrona na posição vertical."},
          {es: "Guarden la mesita.", pt: "Recolham a mesinha."},
          {es: "Abran la persiana de la ventana.", pt: "Abram o protetor solar da janela."},
          {es: "Guarden los artículos en el compartimento superior.", pt: "Guardem os itens no compartimento superior."}
        ]},
        {category: "Emergencias", items: [
          {es: "Las máscaras de oxígeno caerán automáticamente.", pt: "As máscaras de oxigênio cairão automaticamente."},
          {es: "Cúbrase la nariz y la boca.", pt: "Cubram o nariz e a boca."},
          {es: "El chaleco salvavidas está debajo de su asiento.", pt: "O colete salva-vidas está embaixo do assento."},
          {es: "Localicen la puerta de emergencia más cercana.", pt: "Localizem a porta de emergência mais próxima."},
          {es: "Mantengan la calma.", pt: "Mantenham a calma."}
        ]},
        {category: "Durante el vuelo", items: [
          {es: "Tenemos turbulencia por delante.", pt: "Temos turbulência pela frente."},
          {es: "Serviremos las comidas en breve.", pt: "Serviremos as refeições em breve."},
          {es: "Bebidas y snacks están disponibles.", pt: "Bebidas e lanches estão disponíveis."},
          {es: "¡Gracias por volar con nosotros!", pt: "Obrigado por voar conosco!"}
        ]}
      ],
      notes: [
        "Los anuncios de a bordo casi siempre usan el imperativo de 'ustedes' (abrochen, pongan, guarden) — es la forma cortés y estándar de dar instrucciones a un grupo grande.",
        "'La tripulación' es el equipo completo (piloto + auxiliares de vuelo) — muy útil para entender los anuncios oficiales."
      ],
      exercises: [
        {
          type: "caso", icon: "✈️", stamp: "✅ INSTRUCCIÓN COMPRENDIDA",
          scenario: "Eres auxiliar de vuelo y el avión está por despegar. Un pasajero todavía tiene el celular encendido.",
          q: "Escribe una frase completa pidiéndole que apague el celular o lo ponga en modo avión.",
          target: "Por favor, apague su celular o póngalo en modo avión antes del despegue.",
          altAnswers: ["Ponga el celular en modo avión, por favor.", "Necesita apagar el celular para el despegue."]
        },
        {
          type: "caso", icon: "🦺", stamp: "✅ PROCEDIMIENTO EXPLICADO",
          scenario: "Un pasajero nervioso te pregunta qué debe hacer si las máscaras de oxígeno caen.",
          q: "Escribe una frase completa explicándole el procedimiento con la máscara.",
          target: "Cúbrase la nariz y la boca con la máscara, y respire normalmente.",
          altAnswers: ["Póngase la máscara y respire normalmente.", "Primero póngase su máscara, después ayude a los demás."]
        },
        {type: "speak", prompt: "¿Qué deben abrocharse los pasajeros antes de despegar?", target: "El cinturón de seguridad.", altAnswers: ["el cinturón de seguridad"]},
        {type: "speak", prompt: "¿En qué modo deben poner el celular durante el vuelo?", target: "En modo avión.", altAnswers: ["modo avión"]},
        {type: "speak", prompt: "¿Qué deben guardar antes del despegue, que está delante del asiento?", target: "La mesita.", altAnswers: ["la mesita"]},
        {type: "speak", prompt: "¿Dónde está el chaleco salvavidas?", target: "Debajo del asiento.", altAnswers: ["debajo del asiento", "el chaleco salvavidas"]},
        {type: "speak", prompt: "¿Qué cae automáticamente en caso de despresurización?", target: "Las máscaras de oxígeno.", altAnswers: ["las máscaras de oxígeno"]},
        {type: "speak", prompt: "¿Qué deben localizar los pasajeros al subir al avión, por seguridad?", target: "La puerta de emergencia más cercana.", altAnswers: ["la puerta de emergencia"]},
        {type: "speak", prompt: "¿Qué anuncia la tripulación cuando el vuelo se mueve mucho?", target: "Que hay turbulencia.", altAnswers: ["turbulencia", "hay turbulencia"]},
        {type: "speak", prompt: "¿Qué deben mantener los pasajeros durante toda una emergencia?", target: "La calma.", altAnswers: ["la calma"]},
        {type: "speak", prompt: "¿Cómo se llama el equipo de personas que trabaja dentro del avión?", target: "La tripulación.", altAnswers: ["la tripulación"]},
        {type: "speak", prompt: "¿Qué deben hacer los pasajeros con el respaldo del asiento antes de aterrizar?", target: "Ponerlo en posición vertical.", altAnswers: ["posición vertical"]},
        {type: "mc", q: "'Abram a persiana da janela', em espanhol, se dice...", options: ["Cierren la ventana.", "Abran la persiana de la ventana.", "Guarden la ventana.", "Enciendan la luz."], correct: 1},
        {type: "mc", q: "'Mantenham a calma', em espanhol, se dice...", options: ["Tengan cuidado.", "No se muevan.", "Mantengan la calma.", "Estén atentos."], correct: 2},
        {type: "fill", q: "'Bem-vindos a bordo!', em espanhol, se escribe: ¡___ a bordo!", answer: "Bienvenidos"},
        {type: "fill", q: "'O cinto de segurança', em espanhol, se escribe: el ___ de seguridad.", answer: "cinturón"}
      ]
    },
    {
      id: "er-inmigracion", order: 14, title: "Pasando por inmigración", subtitle: "Preguntas del oficial y respuestas útiles",
      vocabulary: [
        {category: "Documentos", items: [
          {es: "el pasaporte", pt: "passaporte"}, {es: "la visa", pt: "visto"},
          {es: "el documento de identidad", pt: "documento de identidade"}, {es: "la tarjeta de embarque", pt: "cartão de embarque"},
          {es: "el comprobante de domicilio", pt: "comprovante de residência"}, {es: "el comprobante de vacuna", pt: "comprovante de vacina"},
          {es: "el seguro de viaje", pt: "seguro viagem"}, {es: "la declaración aduanera", pt: "declaração alfandegária"}
        ]},
        {category: "Preguntas del oficial", items: [
          {es: "¿Cuál es el motivo de su viaje?", pt: "Qual é o motivo da sua viagem?"},
          {es: "¿Cuánto tiempo va a quedarse?", pt: "Quanto tempo vai ficar?"},
          {es: "¿Dónde se va a hospedar?", pt: "Onde você vai se hospedar?"},
          {es: "¿Tiene pasaje de regreso?", pt: "Você tem passagem de volta?"},
          {es: "¿Es su primera vez aquí?", pt: "É sua primeira vez aqui?"},
          {es: "¿Tiene algo que declarar?", pt: "Você tem algo a declarar?"},
          {es: "¿Con quién viaja?", pt: "Com quem você está viajando?"},
          {es: "¿Cuál es su profesión?", pt: "Qual é a sua profissão?"}
        ]},
        {category: "Respuestas útiles", items: [
          {es: "Turismo.", pt: "Turismo."}, {es: "Negocios.", pt: "Negócios."},
          {es: "Estoy de vacaciones.", pt: "Estou de férias."}, {es: "Voy a quedarme... días.", pt: "Vou ficar... dias."},
          {es: "Es mi primera vez.", pt: "É minha primeira vez."}, {es: "Viajo solo(a).", pt: "Viajo sozinho(a)."},
          {es: "Soy... (profesión).", pt: "Sou... (profissão)."}, {es: "Vivo en...", pt: "Moro em..."}
        ]},
        {category: "En la fila y expresiones", items: [
          {es: "Por favor, espere.", pt: "Por favor, espere."}, {es: "Puede avanzar.", pt: "Pode seguir."},
          {es: "Complete este formulario.", pt: "Preencha este formulário."}, {es: "Firme aquí, por favor.", pt: "Assine aqui, por favor."},
          {es: "No hablo español.", pt: "Eu não falo espanhol."}, {es: "¿Puede hablar más despacio?", pt: "Pode falar mais devagar?"},
          {es: "No entendí.", pt: "Não entendi."}, {es: "¿Puede repetir, por favor?", pt: "Pode repetir, por favor?"}
        ]}
      ],
      notes: [
        "Las respuestas cortas ('Turismo.', 'Negocios.') son perfectamente normales frente al oficial de inmigración — no hace falta una frase larga.",
        "'No hablo español' + '¿Puede hablar más despacio?' son las dos frases más útiles si te bloqueas frente al oficial: siempre puedes usarlas sin pena."
      ],
      exercises: [
        {
          type: "caso", icon: "🛂", stamp: "✅ ENTREVISTA APROBADA",
          scenario: "Estás en el control de inmigración de España y el oficial te pregunta el motivo de tu viaje.",
          q: "Escribe una frase completa respondiendo que viajas por turismo y te vas a quedar diez días.",
          target: "Viajo por turismo y voy a quedarme diez días.",
          altAnswers: ["Es turismo, voy a quedarme diez días.", "Vengo de turismo, me quedo diez días."]
        },
        {
          type: "caso", icon: "🧳", stamp: "✅ DECLARACIÓN COMPLETADA",
          scenario: "El oficial de aduana te pregunta si traes algo que declarar.",
          q: "Escribe una frase completa respondiendo que no tienes nada que declarar.",
          target: "No, no tengo nada que declarar.",
          altAnswers: ["No tengo nada que declarar.", "No, nada que declarar."]
        },
        {type: "speak", prompt: "¿Qué documento necesitas siempre para pasar por inmigración?", target: "El pasaporte.", altAnswers: ["el pasaporte"]},
        {type: "speak", prompt: "Si vienes a conocer el país sin trabajar, ¿cuál es el motivo de tu viaje?", target: "Turismo.", altAnswers: ["turismo"]},
        {type: "speak", prompt: "Si vienes por trabajo, ¿cuál es el motivo de tu viaje?", target: "Negocios.", altAnswers: ["negocios"]},
        {type: "speak", prompt: "¿Qué te pregunta el oficial sobre cuántos días te vas a quedar?", target: "¿Cuánto tiempo va a quedarse?", altAnswers: ["cuánto tiempo va a quedarse"]},
        {type: "speak", prompt: "¿Qué documento demuestra que ya tienes cómo volver a tu país?", target: "El pasaje de regreso.", altAnswers: ["el pasaje de regreso"]},
        {type: "speak", prompt: "Si no entiendes lo que dice el oficial, ¿qué le pides?", target: "¿Puede repetir, por favor?", altAnswers: ["puede repetir"]},
        {type: "speak", prompt: "¿Qué dices si el oficial habla muy rápido?", target: "¿Puede hablar más despacio?", altAnswers: ["hablar más despacio"]},
        {type: "speak", prompt: "¿Qué firmas cuando el oficial te pide 'firme aquí'?", target: "El formulario.", altAnswers: ["firmo el formulario", "el formulario"]},
        {type: "speak", prompt: "¿Qué dices para pedir permiso para pasar en la fila?", target: "Con permiso.", altAnswers: ["con permiso"]},
        {type: "speak", prompt: "¿Cómo terminas la conversación con el oficial, agradeciendo?", target: "Muchas gracias.", altAnswers: ["gracias", "muchas gracias"]},
        {type: "mc", q: "'Quanto tempo vai ficar?', em espanhol, se dice...", options: ["¿Dónde vive?", "¿Cuánto tiempo va a quedarse?", "¿Con quién viaja?", "¿Cuál es su profesión?"], correct: 1},
        {type: "mc", q: "'Não tenho nada a declarar', em espanhol, se dice...", options: ["No tengo pasaporte.", "No hablo español.", "No tengo nada que declarar.", "No es mi primera vez."], correct: 2},
        {type: "fill", q: "'Estou de férias', em espanhol, se escribe: Estoy de ___", answer: "vacaciones"},
        {type: "fill", q: "'Viajo sozinho', em espanhol, se escribe: Viajo ___", answer: "solo"}
      ]
    }
,
    {
      id: "er-galicia", order: 15, title: "Galicia", subtitle: "Lugares, cultura y comida típica gallega",
      vocabulary: [
        {category: "Lugares", items: [
          {es: "la ciudad", pt: "cidade"}, {es: "el centro histórico", pt: "centro histórico"},
          {es: "la plaza", pt: "praça"}, {es: "la catedral", pt: "catedral"}, {es: "el monasterio", pt: "mosteiro"},
          {es: "el castillo", pt: "castelo"}, {es: "el mirador", pt: "mirante"}, {es: "el puerto", pt: "porto"},
          {es: "la playa", pt: "praia"}, {es: "la montaña", pt: "montanha"}, {es: "el río", pt: "rio"},
          {es: "el faro", pt: "farol"}
        ]},
        {category: "Naturaleza", items: [
          {es: "el mar", pt: "mar"}, {es: "el océano Atlántico", pt: "oceano Atlântico"},
          {es: "la costa", pt: "costa"}, {es: "el acantilado", pt: "penhasco/falésia"},
          {es: "el bosque", pt: "floresta"}, {es: "el valle", pt: "vale"}, {es: "el cielo", pt: "céu"}
        ]},
        {category: "Cultura y tradiciones", items: [
          {es: "la gaita gallega", pt: "gaita de foles"}, {es: "la romería", pt: "romaria"},
          {es: "el traje típico", pt: "traje típico"}, {es: "el baile tradicional", pt: "dança tradicional"},
          {es: "la gente", pt: "povo/xente"}, {es: "la hospitalidad", pt: "hospitalidade"},
          {es: "la leyenda", pt: "lenda"}, {es: "el Camino de Santiago", pt: "Caminho de Santiago"},
          {es: "la vieira (concha)", pt: "vieira (concha)"}, {es: "el hórreo", pt: "hórreo"}
        ]},
        {category: "Comidas típicas", items: [
          {es: "el pulpo a la gallega", pt: "polvo à feira"}, {es: "la empanada gallega", pt: "empanada galega"},
          {es: "el lacón con grelos", pt: "lacón com grelos"}, {es: "el marisco", pt: "marisco"},
          {es: "los mejillones", pt: "mexilhões"}, {es: "las vieiras", pt: "vieiras"},
          {es: "el pescado", pt: "peixe"}, {es: "la tarta de Santiago", pt: "torta de Santiago"},
          {es: "el vino Albariño", pt: "vinho Albariño"}
        ]},
        {category: "Expresiones y adjetivos", items: [
          {es: "¿Dónde queda...?", pt: "Onde fica...?"}, {es: "¡Me encanta Galicia!", pt: "Adoro a Galícia!"},
          {es: "bonito/linda", pt: "bonito/linda"}, {es: "tranquilo/tranquila", pt: "tranquilo/tranquila"},
          {es: "increíble", pt: "incrível"}, {es: "acogedor/acogedora", pt: "acolhedor/acolhedora"}
        ]}
      ],
      notes: [
        "Galicia queda en el noroeste de España, tiene su propia lengua (el gallego) y es el destino final del famoso Camino de Santiago.",
        "'Bo camiño!' es una expresión gallega que significa '¡Buen camino!' — se usa para desear buena suerte a los peregrinos."
      ],
      exercises: [
        {
          type: "caso", icon: "🗺️", stamp: "✅ RECOMENDACIÓN DADA",
          scenario: "Un amigo va a viajar a Galicia por primera vez y te pregunta qué comida típica debe probar.",
          q: "Escribe una frase completa recomendándole el pulpo a la gallega y la empanada gallega.",
          target: "Tienes que probar el pulpo a la gallega y la empanada gallega, ¡son deliciosos!",
          altAnswers: ["Te recomiendo el pulpo a la gallega y la empanada gallega.", "Prueba el pulpo a la gallega, es típico de Galicia."]
        },
        {
          type: "caso", icon: "⛪", stamp: "✅ DIRECCIÓN PEDIDA",
          scenario: "Estás en Santiago de Compostela y quieres llegar a la catedral, pero no sabes el camino.",
          q: "Escribe una frase completa preguntando dónde queda la catedral.",
          target: "Disculpe, ¿dónde queda la catedral?",
          altAnswers: ["¿Dónde está la catedral, por favor?", "¿Puede decirme dónde queda la catedral?"]
        },
        {type: "speak", prompt: "¿Cómo se llama el instrumento musical típico de Galicia?", target: "La gaita gallega.", altAnswers: ["la gaita gallega", "la gaita"]},
        {type: "speak", prompt: "¿Cómo se llama el famoso camino que termina en Santiago de Compostela?", target: "El Camino de Santiago.", altAnswers: ["el Camino de Santiago"]},
        {type: "speak", prompt: "¿Qué plato típico gallego se hace con pulpo?", target: "El pulpo a la gallega.", altAnswers: ["el pulpo a la gallega"]},
        {type: "speak", prompt: "¿Qué símbolo del Camino de Santiago es una concha de mar?", target: "La vieira.", altAnswers: ["la vieira", "la concha"]},
        {type: "speak", prompt: "¿Qué océano baña la costa de Galicia?", target: "El océano Atlántico.", altAnswers: ["el océano Atlántico"]},
        {type: "speak", prompt: "¿Cómo se llama un edificio antiguo y muy importante, con torres, donde vivían religiosos?", target: "El monasterio.", altAnswers: ["el monasterio"]},
        {type: "speak", prompt: "¿Qué fiesta popular con música y baile se celebra en los pueblos gallegos?", target: "La romería.", altAnswers: ["la romería"]},
        {type: "speak", prompt: "¿Qué vino blanco es típico de Galicia?", target: "El vino Albariño.", altAnswers: ["el vino Albariño", "el Albariño"]},
        {type: "speak", prompt: "¿Qué postre dulce lleva el nombre de la ciudad de Santiago?", target: "La tarta de Santiago.", altAnswers: ["la tarta de Santiago"]},
        {type: "speak", prompt: "¿Cómo se dice cuando te encanta mucho un lugar?", target: "¡Me encanta!", altAnswers: ["me encanta"]},
        {type: "mc", q: "'A gente' (o povo), em espanhol gallego, se dice...", options: ["el pueblo", "la xente / la gente", "los vecinos", "la familia"], correct: 1},
        {type: "mc", q: "'Bo camiño!' significa...", options: ["¡Buenas noches!", "¡Buen camino!", "¡Buen provecho!", "¡Hasta luego!"], correct: 1},
        {type: "fill", q: "'O farol', em espanhol, se escribe: el ___", answer: "faro"},
        {type: "fill", q: "'A praia', em espanhol, se escribe: la ___", answer: "playa"}
      ]
    },
    {
      id: "er-lavanderia", order: 16, title: "En la lavandería", subtitle: "Lavar, secar y planchar la ropa",
      vocabulary: [
        {category: "La lavandería", items: [
          {es: "la lavandería", pt: "lavanderia"}, {es: "la ropa", pt: "roupa"}, {es: "el cesto de ropa", pt: "cesto de roupa"},
          {es: "la lavadora", pt: "máquina de lavar"}, {es: "la secadora", pt: "secadora"}, {es: "el tendedero", pt: "varal"},
          {es: "la tabla de planchar", pt: "tábua de passar"}, {es: "la plancha", pt: "ferro de passar"},
          {es: "la pinza de ropa", pt: "pregador"}
        ]},
        {category: "Acciones", items: [
          {es: "lavar", pt: "lavar"}, {es: "enjuagar", pt: "enxaguar"}, {es: "centrifugar", pt: "centrifugar"},
          {es: "secar", pt: "secar"}, {es: "tender", pt: "estender"}, {es: "planchar", pt: "passar"},
          {es: "doblar", pt: "dobrar"}, {es: "separar", pt: "separar"}, {es: "quitar manchas", pt: "remover manchas"}
        ]},
        {category: "Ropa y productos", items: [
          {es: "la camiseta", pt: "camiseta"}, {es: "la ropa interior", pt: "roupa íntima"}, {es: "la toalla", pt: "toalha"},
          {es: "la sábana", pt: "lençol"}, {es: "el detergente en polvo", pt: "sabão em pó"},
          {es: "el suavizante", pt: "amaciante"}, {es: "la lejía", pt: "água sanitária"},
          {es: "el quitamanchas", pt: "tira-manchas"}
        ]},
        {category: "Frases útiles", items: [
          {es: "¿Dónde está el jabón?", pt: "Onde está o sabão?"}, {es: "¿Cuánto jabón debo usar?", pt: "Quanto sabão devo usar?"},
          {es: "¿Esta ropa puede encoger?", pt: "Essa roupa pode encolher?"}, {es: "Está manchada.", pt: "Está manchada."},
          {es: "Ropa delicada.", pt: "Roupa delicada."}, {es: "Deja en remojo.", pt: "Deixe de molho."},
          {es: "Ya está casi seca.", pt: "Está quase seca."}, {es: "Se puede planchar.", pt: "Pode passar."}
        ]},
        {category: "Problemas comunes", items: [
          {es: "La máquina no enciende.", pt: "A máquina não liga."}, {es: "No está centrifugando.", pt: "Não está centrifugando."},
          {es: "Fuga de agua.", pt: "Vazamento de água."}, {es: "Mal olor.", pt: "Cheiro ruim."},
          {es: "La plancha no calienta.", pt: "O ferro não esquenta."}
        ]}
      ],
      notes: [
        "'Poner en remojo' (dejar en remojo) es dejar la ropa manchada en agua un tiempo antes de lavarla — muy útil para manchas difíciles.",
        "'Ropa delicada' se lava con un ciclo suave y agua fría — vale la pena aprender esta expresión antes de leer la etiqueta de una lavadora en español."
      ],
      exercises: [
        {
          type: "caso", icon: "🧺", stamp: "✅ INSTRUCCIÓN DADA",
          scenario: "Estás usando una lavandería compartida y necesitas explicarle a otra persona cómo funciona la máquina.",
          q: "Escribe una frase completa explicando que hay que separar la ropa de color antes de lavar.",
          target: "Primero hay que separar la ropa de color de la ropa blanca antes de lavar.",
          altAnswers: ["Separa la ropa clara de la oscura antes de lavar.", "Hay que separar la ropa antes de ponerla en la lavadora."]
        },
        {
          type: "caso", icon: "🔧", stamp: "✅ PROBLEMA REPORTADO",
          scenario: "La lavadora del edificio no enciende y necesitas avisar al conserje.",
          q: "Escribe una frase completa explicando el problema.",
          target: "La lavadora no enciende, ¿puede revisarla, por favor?",
          altAnswers: ["La máquina no enciende, necesito ayuda.", "Hay un problema: la lavadora no enciende."]
        },
        {type: "speak", prompt: "¿Dónde pones la ropa sucia antes de lavarla?", target: "En el cesto de ropa.", altAnswers: ["el cesto de ropa"]},
        {type: "speak", prompt: "¿Qué máquina lava la ropa?", target: "La lavadora.", altAnswers: ["la lavadora"]},
        {type: "speak", prompt: "¿Dónde cuelgas la ropa mojada para que se seque al aire?", target: "En el tendedero.", altAnswers: ["el tendedero"]},
        {type: "speak", prompt: "¿Qué usas para quitar las arrugas de la ropa?", target: "La plancha.", altAnswers: ["la plancha"]},
        {type: "speak", prompt: "¿Qué producto usas para que la ropa quede suave y con buen olor?", target: "El suavizante.", altAnswers: ["el suavizante"]},
        {type: "speak", prompt: "¿Qué producto usas para lavar la ropa, en polvo?", target: "El detergente en polvo.", altAnswers: ["el detergente en polvo"]},
        {type: "speak", prompt: "Si una mancha no sale fácil, ¿qué haces antes de lavar?", target: "La dejo en remojo.", altAnswers: ["dejar en remojo", "en remojo"]},
        {type: "speak", prompt: "¿Qué producto usas para blanquear la ropa blanca?", target: "La lejía.", altAnswers: ["la lejía"]},
        {type: "speak", prompt: "Después de secar la ropa, ¿qué haces antes de guardarla?", target: "La doblo.", altAnswers: ["doblar", "la doblo"]},
        {type: "speak", prompt: "¿Qué tipo de ropa necesita un lavado especial y suave?", target: "Ropa delicada.", altAnswers: ["ropa delicada"]},
        {type: "speak", prompt: "¿Qué dices cuando toda la ropa ya está limpia, seca y guardada?", target: "¡Todo listo!", altAnswers: ["todo listo"]},
        {type: "mc", q: "'O ferro de passar', em espanhol, é...", options: ["la lavadora", "la secadora", "la plancha", "el tendedero"], correct: 2},
        {type: "mc", q: "'Deixe de molho', em espanhol, se dice...", options: ["Deja en remojo.", "Cuelga a secar.", "Lava a mano.", "Plancha bien."], correct: 0},
        {type: "fill", q: "'O amaciante', em espanhol, se escribe: el ___", answer: "suavizante"},
        {type: "fill", q: "'O sabão em pó', em espanhol, se escribe: el detergente en ___", answer: "polvo"}
      ]
    },
    {
      id: "er-probador", order: 17, title: "Cambiando de ropa y zapatos", subtitle: "Probarse ropa en una tienda",
      vocabulary: [
        {category: "Ropa", items: [
          {es: "la camiseta", pt: "camiseta"}, {es: "el pantalón", pt: "calça"}, {es: "la falda", pt: "saia"},
          {es: "el vestido", pt: "vestido"}, {es: "la blusa", pt: "blusa"}, {es: "el suéter", pt: "suéter"},
          {es: "la chaqueta", pt: "casaco/jaqueta"}, {es: "la sudadera", pt: "moletom"},
          {es: "la bufanda", pt: "cachecol"}, {es: "el sombrero", pt: "chapéu"}, {es: "el cinturón", pt: "cinto"}
        ]},
        {category: "Zapatos", items: [
          {es: "las zapatillas / los tenis", pt: "tênis"}, {es: "los zapatos", pt: "sapato"},
          {es: "la sandalia", pt: "sandália"}, {es: "las chanclas", pt: "chinelo"}, {es: "la bota", pt: "bota"},
          {es: "los tacones altos", pt: "salto alto"}, {es: "el mocasín", pt: "mocassim"}
        ]},
        {category: "Probándose ropa", items: [
          {es: "¿Puedo probarme esto?", pt: "Posso experimentar isto?"}, {es: "¿Dónde está el probador?", pt: "Onde fica o provador?"},
          {es: "¿Este tamaño está bien?", pt: "Este tamanho está bom?"}, {es: "Está muy apretado.", pt: "Está muito apertado."},
          {es: "Está muy suelto.", pt: "Está muito largo."}, {es: "¡Quedó perfecto!", pt: "Ficou perfeito!"},
          {es: "Me lo llevo.", pt: "Vou levar este."}, {es: "No me gustó.", pt: "Não gostei."},
          {es: "¿Tiene de otro color?", pt: "Tem de outra cor?"}, {es: "¿Tiene de otro tamaño?", pt: "Tem de outro tamanho?"},
          {es: "Quiero cambiar.", pt: "Quero trocar."}, {es: "Quiero devolver.", pt: "Quero devolver."}
        ]},
        {category: "Comprando", items: [
          {es: "¿Está en promoción?", pt: "Está na promoção?"}, {es: "¿Cuánto cuesta?", pt: "Quanto custa?"},
          {es: "Está caro/barato.", pt: "Está caro/barato."}, {es: "¡Vale la pena!", pt: "Vale a pena!"},
          {es: "Es de buena calidad.", pt: "É de boa qualidade."}, {es: "Es cómodo.", pt: "É confortável."}
        ]}
      ],
      notes: [
        "'Me lo llevo' (para algo masculino) y 'me la llevo' (para algo femenino) es la forma natural de decir 'lo compro' cuando decides quedarte con la prenda.",
        "'Apretado' (muy ajustado) y 'suelto' (muy holgado) son los dos adjetivos clave para hablar de cómo te queda la ropa en el probador."
      ],
      exercises: [
        {
          type: "caso", icon: "👗", stamp: "✅ CAMBIO SOLICITADO",
          scenario: "Compraste una camisa pero al llegar a casa notaste que te queda muy apretada.",
          q: "Escribe una frase completa explicando en la tienda que quieres cambiarla por otro tamaño.",
          target: "Esta camisa me quedó muy apretada, quiero cambiarla por otro tamaño.",
          altAnswers: ["Quiero cambiar esta camisa, me queda apretada.", "¿Tiene esta camisa en otro tamaño? Me queda apretada."]
        },
        {
          type: "caso", icon: "👟", stamp: "✅ PROBADOR ENCONTRADO",
          scenario: "Estás en una tienda de zapatos y quieres probarte un par de zapatillas antes de comprarlas.",
          q: "Escribe una frase completa pidiendo el probador o preguntando si puedes probártelas.",
          target: "¿Puedo probarme estas zapatillas? ¿Dónde está el probador?",
          altAnswers: ["¿Dónde está el probador, por favor?", "Quiero probarme estas zapatillas."]
        },
        {type: "speak", prompt: "¿Dónde te pruebas la ropa antes de comprarla?", target: "En el probador.", altAnswers: ["el probador"]},
        {type: "speak", prompt: "Si la ropa te queda muy ajustada, ¿cómo se dice?", target: "Está muy apretada.", altAnswers: ["está apretada", "apretado"]},
        {type: "speak", prompt: "Si la ropa te queda muy grande, ¿cómo se dice?", target: "Está muy suelta.", altAnswers: ["está suelta", "suelto"]},
        {type: "speak", prompt: "Si te encantó cómo te queda la ropa, ¿qué dices?", target: "¡Quedó perfecto!", altAnswers: ["quedó perfecto"]},
        {type: "speak", prompt: "Si decides comprar la prenda, ¿qué le dices al vendedor?", target: "Me lo llevo.", altAnswers: ["me lo llevo", "me la llevo"]},
        {type: "speak", prompt: "¿Qué calzado usas para hacer ejercicio o caminar?", target: "Las zapatillas / los tenis.", altAnswers: ["las zapatillas", "los tenis"]},
        {type: "speak", prompt: "¿Qué calzado de verano se usa en la playa, muy simple?", target: "Las chanclas.", altAnswers: ["las chanclas"]},
        {type: "speak", prompt: "¿Qué prenda te pones alrededor del cuello cuando hace frío?", target: "La bufanda.", altAnswers: ["la bufanda"]},
        {type: "speak", prompt: "Si no te gustó la prenda que compraste, ¿qué le pides a la tienda?", target: "Quiero devolverla.", altAnswers: ["quiero devolver", "devolver"]},
        {type: "speak", prompt: "¿Qué preguntas si quieres saber el precio antes de decidir?", target: "¿Cuánto cuesta?", altAnswers: ["cuánto cuesta"]},
        {type: "mc", q: "'Tem de outra cor?', em espanhol, se dice...", options: ["¿Tiene de otro color?", "¿Está en promoción?", "¿Cuánto cuesta?", "¿Dónde está el probador?"], correct: 0},
        {type: "mc", q: "'Ficou perfeito!', em espanhol, se dice...", options: ["¡Está caro!", "¡Quedó perfecto!", "¡No me gustó!", "¡Vale la pena!"], correct: 1},
        {type: "fill", q: "'A bota', em espanhol, se escribe: la ___", answer: "bota"},
        {type: "fill", q: "'Quero trocar', em espanhol, se escribe: Quiero ___", answer: "cambiar"}
      ]
    }

  ]
};
