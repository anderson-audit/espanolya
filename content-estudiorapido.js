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
  description: "Módulo bônus 100% visual: olhe a imagem, escute uma pergunta real sobre o assunto e responda falando em espanhol — o app escuta e corrige sua resposta e pronúncia na hora. Cada lição tem 'Casos prácticos': situações reais em que você escreve uma frase completa em espanhol, não só uma palavra. Vocabulário de casa, cafeteria, padaria, auditoria, aeroporto, construção, escritório, segurança residencial, comida rápida, bordo do avião, imigração, Galícia, lavanderia, troca de roupas/sapatos, saudações, pesos e medidas, inverno/esportes de neve, direções/transporte, culinária, banco/finanças, falsos cognatos, supermercado, salão de beleza e barbearia.",
  lessons: [
    {
      id: "er-hora", order: 1, title: "¿Qué hora es?", subtitle: "Como dizer as horas em espanhol",
      text: "Anderson llega a la oficina y mira el reloj: son las nueve en punto. Antes de las nueve y cuarto ya tiene la primera reunión, así que abre su agenda enseguida. A las nueve y media llama a un cliente de Bilbao para confirmar el plan de auditoría. Hacia las diez y veinte recibe un mensaje: ‘¿Podemos hablar a la una?’ Como aún faltan minutos para el mediodía, responde que sí. A las doce y media almuerza rápido, porque a la una en punto empieza la videollamada. La tarde pasa volando: a las tres y cuarto revisa un informe, a las cuatro menos veinte prepara una presentación, y a las cinco menos cuarto ya está guardando el ordenador. Por fin, a las seis en punto, sale de la oficina — otro día de trabajo terminado, minuto a minuto.",
      textPt: "Anderson chega ao escritório e olha o relógio: são nove em ponto. Antes das nove e quinze já tem a primeira reunião, então abre a agenda logo. Às nove e meia liga para um cliente de Bilbao para confirmar o plano de auditoria. Por volta das dez e vinte recebe uma mensagem: ‘Podemos falar à uma?’ Como ainda faltam minutos para o meio-dia, responde que sim. Ao meio-dia e meia almoça rápido, porque à uma em ponto começa a videochamada. A tarde passa voando: às três e quinze revisa um relatório, às quinze para as quatro prepara uma apresentação, e às quinze para as cinco já está guardando o computador. Por fim, às seis em ponto, sai do escritório — mais um dia de trabalho terminado, minuto a minuto.",
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
      text: "Cuando Anderson llega al hotel, deja la maleta al lado del armario y observa la habitación con calma. La cama tiene un cabecero de madera, una almohada suave y una manta doblada sobre la colcha; al lado, una mesilla de noche sostiene la lámpara y, encima, hay un pequeño espejo redondo colgado en la pared. Frente a la ventana, una cortina clara deja entrar la luz de la tarde, y junto a ella hay una estantería con algunos libros y un escritorio con una silla cómoda para trabajar. En una esquina, una alfombra suave cubre el suelo, y detrás de la puerta cuelga un cuadro sencillo. Antes de salir, Anderson pone la ropa sucia en la cesta de la ropa y abre el armario para guardar sus camisas — todo en su lugar, listo para una semana de trabajo.",
      textPt: "Quando Anderson chega ao hotel, deixa a mala ao lado do armário e observa o quarto com calma. A cama tem uma cabeceira de madeira, um travesseiro macio e um cobertor dobrado sobre a colcha; ao lado, uma mesinha de cabeceira sustenta o abajur e, em cima, há um pequeno espelho redondo pendurado na parede. Em frente à janela, uma cortina clara deixa entrar a luz da tarde, e ao lado dela há uma estante com alguns livros e uma escrivaninha com uma cadeira confortável para trabalhar. Em um canto, um tapete macio cobre o chão, e atrás da porta pende um quadro simples. Antes de sair, Anderson coloca a roupa suja no cesto de roupa e abre o armário para guardar suas camisas — tudo em seu lugar, pronto para uma semana de trabalho.",
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
      text: "Por la mañana, Anderson entra en la cocina y abre la nevera para sacar la leche. Enciende la cafetera sobre la encimera, junto al fregadero, y mientras el café se hace, pone dos rebanadas de pan en la tostadora. El horno todavía está caliente de la noche anterior, y la vitrocerámica, apagada, brilla debajo de la campana extractora. Saca una sartén de los armarios para freír un huevo y usa la tabla de cortar y el cuchillo para picar un poco de fruta; después revuelve todo con la cuchara de madera. Cuando termina de desayunar, lava el plato, la taza y el vaso a mano, porque el lavavajillas está lleno, y guarda lo que sobra en la despensa. Antes de salir, mete la olla que usó la noche anterior en el lavavajillas y cierra la puerta de la cocina — todo limpio para cuando vuelva.",
      textPt: "De manhã, Anderson entra na cozinha e abre a geladeira para pegar o leite. Liga a cafeteira sobre a bancada, ao lado da pia, e enquanto o café fica pronto, coloca duas fatias de pão na torradeira. O forno ainda está quente da noite anterior, e o cooktop, desligado, brilha embaixo da coifa. Pega uma frigideira nos armários para fritar um ovo e usa a tábua de cortar e a faca para picar um pouco de fruta; depois mexe tudo com a colher de pau. Quando termina de tomar café da manhã, lava o prato, a xícara e o copo à mão, porque a lava-louças está cheia, e guarda o que sobra na despensa. Antes de sair, coloca a panela que usou na noite anterior na lava-louças e fecha a porta da cozinha — tudo limpo para quando ele voltar.",
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
      text: "Antes de dormir, Anderson entra en el baño y se mira en el espejo sobre el lavabo. Abre el grifo, se lava las manos y coge el cepillo de dientes y la pasta de dientes para cepillarse. Después, entra en la ducha — la mampara de vidrio separa el agua del resto del baño — y se lava el pelo con champú y una esponja. Al terminar, se seca con una toalla grande que cuelga del toallero, y pisa la alfombrilla para no mojar el suelo. Los fines de semana, prefiere llenar la bañera y relajarse un rato. Antes de acostarse, se pesa en la báscula, guarda el papel higiénico nuevo en el armario, junto al bidé, y deja la ropa sucia en la cesta de la ropa — una rutina sencilla, pero completa, para terminar el día.",
      textPt: "Antes de dormir, Anderson entra no banheiro e se olha no espelho sobre a pia. Abre a torneira, lava as mãos e pega a escova de dentes e a pasta de dente para escovar os dentes. Depois, entra no chuveiro — o box de vidro separa a água do resto do banheiro — e lava o cabelo com xampu e uma esponja. Ao terminar, se seca com uma toalha grande que fica no toalheiro, e pisa no tapete de banheiro para não molhar o chão. Nos fins de semana, prefere encher a banheira e relaxar um pouco. Antes de deitar, se pesa na balança, guarda o papel higiênico novo no armário, ao lado do bidê, e deixa a roupa suja no cesto de roupa — uma rotina simples, mas completa, para terminar o dia.",
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
      text: "A media mañana, Anderson entra en su cafetería favorita y se sienta en un taburete de la barra, aunque a veces prefiere una mesa en la terraza. El camarero le trae el menú, pero él ya sabe lo que quiere: un café con leche y una tostada con mantequilla. Mientras espera, observa la vitrina llena de pasteles y croissants recién hechos, y escucha el ruido de la cafetera y del molinillo detrás de la barra. Cuando llega el pedido, el camarero pone la taza sobre el platillo, con una cucharilla y un sobrecito de azúcar al lado, y un vaso de agua junto al plato. En la mesa de al lado, un cliente pide un bocadillo y un zumo de naranja para llevar. Antes de irse, Anderson paga en la caja registradora, agradece al camarero y vuelve a la oficina con la cabeza despejada.",
      textPt: "No meio da manhã, Anderson entra em sua cafeteria favorita e senta em um banquinho no balcão, embora às vezes prefira uma mesa no terraço. O garçom traz o cardápio, mas ele já sabe o que quer: um café com leite e uma torrada com manteiga. Enquanto espera, observa a vitrine cheia de bolos e croissants recém-feitos, e escuta o barulho da máquina de café e do moedor atrás do balcão. Quando chega o pedido, o garçom coloca a xícara sobre o pires, com uma colherzinha e um saquinho de açúcar ao lado, e um copo de água perto do prato. Na mesa ao lado, um cliente pede um sanduíche de baguete e um suco de laranja para levar. Antes de ir embora, Anderson paga no caixa registradora, agradece ao garçom e volta ao escritório com a cabeça mais leve.",
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
      text: "Camino a casa, Anderson pasa por la panadería del barrio. El panadero acaba de sacar el pan del horno, y el olor a pan dulce llena toda la tienda. En los tarros de galletas hay galletas de chocolate y de mantequilla, y en el mostrador se ven magdalenas, napolitanas y palmeritas recién hechas. Anderson pide un pastel de cumpleaños para su hija y dos barras de pan para la semana; la panadera pesa todo en la balanza, calcula el precio con la harina que todavía tiene en las manos y cobra en la caja registradora. Después mete todo en una bolsa de papel y se la entrega con una sonrisa. De vuelta a casa, Anderson piensa que no hay nada como el pan recién hecho para terminar bien el día.",
      textPt: "A caminho de casa, Anderson passa pela padaria do bairro. O padeiro acabou de tirar o pão do forno, e o cheiro de pão doce enche toda a loja. Nos potes de biscoito há biscoitos de chocolate e de manteiga, e no balcão se veem bolinhos, napolitanas e palmierzinhas recém-feitas. Anderson pede um bolo de aniversário para a filha e duas baguetes para a semana; a padeira pesa tudo na balança, calcula o preço com a farinha ainda nas mãos e cobra no caixa registradora. Depois coloca tudo em uma sacola de papel e entrega com um sorriso. Voltando para casa, Anderson pensa que não há nada como o pão fresquinho para terminar bem o dia.",
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
      text: "Anderson llega a la empresa como auditor líder de un equipo auditor formado por tres personas. En la reunión de apertura, presenta el plan de auditoría, confirma el alcance con el gerente de calidad y explica cómo va a trabajar el equipo durante los próximos dos días. Con la carpeta de documentos, el ordenador y la lista de verificación en la mano, empieza las entrevistas con la alta dirección y revisa el cronograma de cada proceso. Durante el recorrido, detecta una no conformidad: falta la firma del responsable en un documento importante, y anota la evidencia junto con un gráfico del riesgo asociado. También encuentra una observación sobre la trazabilidad de un lote y sugiere una acción correctiva para mejorar el muestreo. Al final del día, prepara el informe y el dictamen preliminar, y agenda la reunión de cierre para presentar los hallazgos — otro paso más hacia la mejora continua y, con suerte, hacia la certificación de la empresa.",
      textPt: "Anderson chega à empresa como auditor líder de uma equipe auditora formada por três pessoas. Na reunião de abertura, apresenta o plano de auditoria, confirma o escopo com o gerente de qualidade e explica como a equipe vai trabalhar durante os próximos dois dias. Com a pasta de documentos, o computador e a lista de verificação na mão, começa as entrevistas com a alta direção e revisa o cronograma de cada processo. Durante a visita, detecta uma não conformidade: falta a assinatura do responsável em um documento importante, e anota a evidência junto com um gráfico do risco associado. Também encontra uma observação sobre a rastreabilidade de um lote e sugere uma ação corretiva para melhorar a amostragem. No final do dia, prepara o relatório e o parecer preliminar, e agenda a reunião de encerramento para apresentar os achados — mais um passo rumo à melhoria contínua e, com sorte, rumo à certificação da empresa.",
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
      text: "En el aeropuerto, Anderson hace fila en el mostrador de la aerolínea para el check-in. Muestra su billete electrónico y el código de reserva, factura la maleta grande —cuidando no pasar el límite de exceso de equipaje— y se queda solo con el equipaje de mano. Mira la pantalla de salidas para confirmar el número de vuelo y la puerta de embarque, y pasa por el control de seguridad antes de llegar a la sala de espera. Por megafonía anuncian un pequeño retraso, pero por suerte no hay cancelación. Cuando por fin embarca, encuentra su asiento, guarda el equipaje de mano y saluda a la tripulación. Después del despegue, la auxiliar de vuelo pasa con una bandeja de bebidas, y horas más tarde llega el aterrizaje sin problemas. Ya en tierra, Anderson espera en la cinta transportadora, pasa por la aduana y toma un taxi hacia el hotel.",
      textPt: "No aeroporto, Anderson faz fila no balcão de check-in da companhia aérea. Mostra a passagem eletrônica e o código de reserva, despacha a mala grande — tomando cuidado para não passar do limite de excesso de bagagem — e fica só com a bagagem de mão. Olha o painel de partidas para confirmar o número do voo e o portão de embarque, e passa pelo controle de segurança antes de chegar à sala de espera. Pelo alto-falante anunciam um pequeno atraso, mas felizmente não há cancelamento. Quando finalmente embarca, encontra seu assento, guarda a bagagem de mão e cumprimenta a tripulação. Depois da decolagem, a comissária de bordo passa com uma bandeja de bebidas, e horas depois chega o pouso sem problemas. Já em terra, Anderson espera na esteira de bagagem, passa pela alfândega e pega um táxi até o hotel.",
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
        ]},
        {category: "Aduana y reclamo de equipaje", items: [
          {es: "la terminal", pt: "o terminal"},
          {es: "el vuelo directo / el vuelo con escala", pt: "o voo direto / o voo com escala"},
          {es: "el billete de ida y vuelta", pt: "a passagem de ida e volta"},
          {es: "la clase económica / ejecutiva / primera clase", pt: "a classe econômica / executiva / primeira classe"},
          {es: "el control de pasaporte", pt: "o controle de passaporte"},
          {es: "declarar bienes / nada que declarar", pt: "declarar bens / nada a declarar"},
          {es: "los productos prohibidos", pt: "os produtos proibidos"},
          {es: "el sello en el pasaporte", pt: "o carimbo no passaporte"},
          {es: "el carrito de equipaje", pt: "o carrinho de bagagem"},
          {es: "la etiqueta de equipaje", pt: "a etiqueta de bagagem"},
          {es: "el peso permitido", pt: "o peso permitido"},
          {es: "la maleta extraviada", pt: "a mala extraviada"},
          {es: "el equipaje dañado", pt: "a bagagem danificada"},
          {es: "¿Dónde puedo retirar mi maleta?", pt: "Onde posso retirar minha mala?"}
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
        {type: "speak", prompt: "¿Qué usas para llevar varias maletas pesadas sin cargarlas en los brazos?", target: "El carrito de equipaje.", altAnswers: ["el carrito de equipaje", "el carrito"]},
        {type: "speak", prompt: "Si no tienes nada que declarar en la aduana, ¿qué dices?", target: "Nada que declarar.", altAnswers: ["nada que declarar"]},
        {type: "speak", prompt: "¿Qué pequeño papel llevan las maletas con tu nombre y datos de vuelo?", target: "La etiqueta de equipaje.", altAnswers: ["la etiqueta de equipaje", "la etiqueta"]},
        {type: "speak", prompt: "Si tu maleta no llegó y no la encuentras, ¿cómo se dice?", target: "Mi maleta está extraviada.", altAnswers: ["maleta extraviada", "se perdió mi maleta"]},
        {type: "speak", prompt: "¿Cómo preguntas dónde recoger tu equipaje al llegar?", target: "¿Dónde puedo retirar mi maleta?", altAnswers: ["dónde puedo retirar mi maleta", "dónde recojo mi maleta"]},
        {type: "mc", q: "'O painel de partidas', em espanhol, é...", options: ["la pantalla de salidas", "la torre de control", "la pista de aterrizaje", "la aduana"], correct: 0},
        {type: "mc", q: "El grupo de personas que trabaja dentro del avión (piloto, auxiliares...) se llama...", options: ["la aerolínea", "la tripulación", "el mostrador", "la aduana"], correct: 1},
        {type: "fill", q: "'A bagagem de mão' em espanhol se escreve: el equipaje de ___", answer: "mano"},
        {type: "fill", q: "'O momento em que o avião sobe e deixa o solo' se escreve: el ___", answer: "despegue"}
      ]
    },
    {
      id: "er-construccion", order: 9, title: "Materiales de construcción", subtitle: "Vocabulario de obra y reforma",
      text: "La obra de la casa nueva empieza temprano. El maestro de obra pide más cemento, arena y grava para preparar el hormigón, y dos trabajadores mezclan todo con una cuchara de albañil sobre una carretilla. Con ladrillos y bloques de concreto, levantan las paredes, y usan mortero y un nivel para dejar todo bien nivelado. Más tarde llega el momento del acabado: instalan puertas y ventanas de vidrio, colocan la teja en el tejado y aplican pintura con pincel y rodillo sobre el revestimiento. En la parte eléctrica, un técnico pasa el cable eléctrico por los tubos, instala interruptores, enchufes y bombillas, y conecta todo al interruptor automático. Cuando alguien pregunta ‘¿Cuánto cuesta este material?’, el maestro de obra revisa la lista con calma. Al final del día, mide de nuevo cada pared, comprueba que la pintura ya se secó y confirma: la obra avanza según lo previsto.",
      textPt: "A obra da casa nova começa cedo. O mestre de obras pede mais cimento, areia e brita para preparar o concreto, e dois trabalhadores misturam tudo com uma colher de pedreiro sobre um carrinho de mão. Com tijolos e blocos de concreto, levantam as paredes, e usam argamassa e um nível para deixar tudo bem nivelado. Mais tarde chega a hora do acabamento: instalam portas e janelas de vidro, colocam a telha no telhado e aplicam tinta com pincel e rolo sobre o revestimento. Na parte elétrica, um técnico passa o fio elétrico pelos tubos, instala interruptores, tomadas e lâmpadas, e conecta tudo ao disjuntor. Quando alguém pergunta ‘Quanto custa este material?’, o mestre de obras revisa a lista com calma. No final do dia, mede de novo cada parede, confere que a tinta já secou e confirma: a obra avança conforme o previsto.",
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
      text: "El primer día en la nueva oficina, Anderson organiza su escritorio. En el cajón guarda un bolígrafo, un lápiz, una goma de borrar y un sacapuntas; al lado, deja la grapadora, los clips y la perforadora dentro de una caja organizadora. Sobre la mesa pone un cuaderno, un bloc de notas y algunas notas adhesivas de colores para no olvidar nada, además de una carpeta con papeles importantes y un archivador para guardar documentos antiguos. Cuando necesita algo, pregunta con confianza: ‘¿Me prestas el resaltador?’ o ‘¿Dónde está la calculadora?’. En cuanto a la tecnología, conecta la computadora, el teclado y el ratón, prueba la impresora y el escáner, y guarda una memoria USB en el portalápices. Al final de la tarde, todo está en su lugar — hasta el cargador del ordenador — y Anderson piensa: ‘¡Muchas gracias, ya me siento como en casa!’",
      textPt: "No primeiro dia no novo escritório, Anderson organiza sua mesa. Na gaveta guarda uma caneta, um lápis, uma borracha e um apontador; ao lado, deixa o grampeador, os clips e o furador de papel dentro de uma caixa organizadora. Sobre a mesa coloca um caderno, um bloco de notas e alguns post-its coloridos para não esquecer de nada, além de uma pasta com papéis importantes e um fichário para guardar documentos antigos. Quando precisa de algo, pergunta com confiança: ‘Pode me emprestar o marca-texto?’ ou ‘Onde está a calculadora?’. Quanto à tecnologia, conecta o computador, o teclado e o mouse, testa a impressora e o scanner, e guarda um pendrive no porta-lápis. No final da tarde, tudo está em seu lugar — até o carregador do computador — e Anderson pensa: ‘Muito obrigado, já me sinto em casa!’",
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
      text: "Antes de mudarse, Anderson revisa la seguridad de la casa nueva. Comprueba la cerradura de la puerta principal, pide una llave extra y decide instalar cámaras de seguridad cerca de la entrada, además de un sensor de movimiento en el jardín. En la puerta pone un intercomunicador y un timbre con cámara, y activa una alarma que se enciende cada noche antes de dormir. Sigue algunos consejos simples: siempre cierra con llave puertas y ventanas, mantiene la iluminación exterior encendida y procura conocer a sus vecinos. También revisa el detector de humo y guarda los documentos importantes en la caja fuerte. Un día, al escuchar un ruido extraño, Anderson recuerda las frases de emergencia que aprendió: si algo pasara de verdad, sabría decir ‘¡Llame a la policía!’ o ‘¡Necesito ayuda!’ sin dudar — la seguridad, como dice el dicho, empieza con uno mismo.",
      textPt: "Antes de se mudar, Anderson revisa a segurança da casa nova. Confere a fechadura da porta principal, pede uma chave extra e decide instalar câmeras de segurança perto da entrada, além de um sensor de movimento no jardim. Na porta coloca um interfone e uma campainha com câmera, e ativa um alarme que liga toda noite antes de dormir. Segue alguns conselhos simples: sempre tranca portas e janelas, mantém a iluminação externa acesa e procura conhecer os vizinhos. Também revisa o detector de fumaça e guarda os documentos importantes no cofre. Um dia, ao escutar um barulho estranho, Anderson lembra das frases de emergência que aprendeu: se algo realmente acontecesse, saberia dizer ‘Ligue para a polícia!’ ou ‘Preciso de ajuda!’ sem hesitar — a segurança, como diz o ditado, começa com a gente mesmo.",
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
      text: "A la hora del almuerzo, Anderson entra en una hamburguesería con un colega. El empleado pregunta: ‘¿Qué van a pedir?’, y Anderson responde: ‘Me gustaría una hamburguesa con queso, con papas fritas y un refresco, por favor’. Su colega prefiere una pizza de pollo con el borde relleno, y pide una porción extra para llevar. Cuando el empleado pregunta ‘¿Es para aquí o para llevar?’, Anderson contesta: ‘Para aquí, por favor’. Mientras esperan, piden kétchup, mostaza y un poco de mayonesa para las papas, y al final Anderson no puede resistir un batido de chocolate de postre. Antes de irse, pregunta ‘¿Tiene opción vegetariana?’ pensando en su colega vegetariana para la próxima vez, y pide la cuenta con un simple ‘La cuenta, por favor’. Los dos vuelven a la oficina satisfechos, listos para seguir trabajando por la tarde.",
      textPt: "Na hora do almoço, Anderson entra em uma hamburgueria com um colega. O funcionário pergunta: ‘O que vão pedir?’, e Anderson responde: ‘Gostaria de um cheeseburguer, com batata frita e um refrigerante, por favor’. Seu colega prefere uma pizza de frango com a borda recheada, e pede uma fatia extra para levar. Quando o funcionário pergunta ‘É para aqui ou para levar?’, Anderson responde: ‘Para aqui, por favor’. Enquanto esperam, pedem ketchup, mostarda e um pouco de maionese para as batatas, e no final Anderson não resiste a um milkshake de chocolate de sobremesa. Antes de sair, pergunta ‘Tem opção vegetariana?’ pensando na colega vegetariana para a próxima vez, e pede a conta com um simples ‘A conta, por favor’. Os dois voltam ao escritório satisfeitos, prontos para continuar trabalhando à tarde.",
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
      text: "En cuanto los pasajeros suben al avión, la tripulación los recibe con un ‘¡Bienvenidos a bordo!’ y explica que nuestro destino es Madrid y que la duración del vuelo es de dos horas. Antes del despegue, piden que abrochen el cinturón de seguridad, que pongan los celulares en modo avión y que apaguen sus dispositivos electrónicos; también recuerdan que el Bluetooth debe permanecer apagado. Un auxiliar de vuelo pide que pongan el asiento en posición vertical, que guarden la mesita y que guarden los artículos en el compartimento superior antes de despegar. En caso de emergencia, explican que las máscaras de oxígeno caerán automáticamente y que hay que cubrirse la nariz y la boca, además de recordar dónde está el chaleco salvavidas y localizar la puerta de emergencia más cercana. Ya en el aire, avisan que hay turbulencia por delante y piden que mantengan la calma; poco después, sirven las comidas, ofrecen bebidas y snacks, y terminan el vuelo con un cordial ‘¡Gracias por volar con nosotros!’",
      textPt: "Assim que os passageiros sobem no avião, a tripulação os recebe com um ‘Bem-vindos a bordo!’ e explica que nosso destino é Madri e que a duração do voo é de duas horas. Antes da decolagem, pedem que ajustem o cinto de segurança, que coloquem os celulares no modo avião e que desliguem seus aparelhos eletrônicos; também lembram que o Bluetooth deve permanecer desligado. Um comissário de bordo pede que coloquem a poltrona na posição vertical, que recolham a mesinha e que guardem os itens no compartimento superior antes da decolagem. Em caso de emergência, explicam que as máscaras de oxigênio cairão automaticamente e que é preciso cobrir o nariz e a boca, além de lembrar onde está o colete salva-vidas e localizar a porta de emergência mais próxima. Já no ar, avisam que há turbulência pela frente e pedem que mantenham a calma; pouco depois, servem as refeições, oferecem bebidas e lanches, e terminam o voo com um cordial ‘Obrigado por voar conosco!’",
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
      text: "Después de bajar del avión, Anderson hace fila para pasar por inmigración con el pasaporte, la visa y la tarjeta de embarque en la mano. Cuando llega su turno, el oficial le pregunta: ‘¿Cuál es el motivo de su viaje?’, y Anderson responde con calma: ‘Negocios’. El oficial continúa: ‘¿Cuánto tiempo va a quedarse?’, y él contesta: ‘Voy a quedarme siete días’. Después pregunta dónde se va a hospedar, si tiene pasaje de regreso y si viaja solo; Anderson responde que sí, que viaja solo y que es su primera vez en el país. Como habla despacio, en un momento no entiende una pregunta y pide, sin pena: ‘¿Puede repetir, por favor?’. El oficial le pide que complete un formulario y que firme aquí, revisa el comprobante de vacuna y el seguro de viaje, y finalmente sonríe: ‘Puede avanzar’. Anderson respira aliviado y sigue hacia la aduana.",
      textPt: "Depois de descer do avião, Anderson faz fila para passar pela imigração com o passaporte, o visto e o cartão de embarque na mão. Quando chega a sua vez, o oficial pergunta: ‘Qual é o motivo da sua viagem?’, e Anderson responde com calma: ‘Negócios’. O oficial continua: ‘Quanto tempo vai ficar?’, e ele responde: ‘Vou ficar sete dias’. Depois pergunta onde ele vai se hospedar, se tem passagem de volta e se está viajando sozinho; Anderson responde que sim, que viaja sozinho e que é sua primeira vez no país. Como ele fala devagar, em um momento não entende uma pergunta e pede, sem vergonha: ‘Pode repetir, por favor?’. O oficial pede que ele preencha um formulário e assine aqui, revisa o comprovante de vacina e o seguro viagem, e finalmente sorri: ‘Pode seguir’. Anderson respira aliviado e segue até a alfândega.",
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
      text: "En su primer viaje a Galicia, Anderson recorre el centro histórico de una ciudad junto al mar y se detiene frente a una catedral impresionante. Desde un mirador cercano, observa el puerto, la costa y un acantilado a lo lejos, con el océano Atlántico como fondo. Un guía le cuenta leyendas de la región mientras escuchan, a lo lejos, el sonido de una gaita gallega en una romería local. Anderson pregunta ‘¿Dónde queda el Camino de Santiago?’, y el guía le señala un camino que atraviesa bosques y valles hasta llegar a un monasterio antiguo. A la hora de comer, prueba el pulpo a la gallega, una empanada gallega y unas vieiras frescas, todo acompañado de un buen vino Albariño. Antes de irse, compra una tarta de Santiago de recuerdo y piensa: ‘¡Me encanta Galicia! Es un lugar tranquilo, acogedor y realmente increíble.’",
      textPt: "Em sua primeira viagem à Galícia, Anderson percorre o centro histórico de uma cidade à beira-mar e para em frente a uma catedral impressionante. De um mirante próximo, observa o porto, a costa e um penhasco ao longe, com o oceano Atlântico como cenário. Um guia conta lendas da região enquanto escutam, ao longe, o som de uma gaita de foles em uma romaria local. Anderson pergunta ‘Onde fica o Caminho de Santiago?’, e o guia aponta um caminho que atravessa florestas e vales até chegar a um mosteiro antigo. Na hora de comer, prova o polvo à feira, uma empanada galega e umas vieiras frescas, tudo acompanhado de um bom vinho Albariño. Antes de ir embora, compra uma torta de Santiago de lembrança e pensa: ‘Adoro a Galícia! É um lugar tranquilo, acolhedor e realmente incrível.’",
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
      text: "El sábado por la mañana, Anderson separa la ropa antes de meterla en la lavadora: la ropa de color en un cesto de ropa, la ropa delicada en otro. Añade detergente en polvo y un poco de suavizante, y programa el ciclo para lavar y enjuagar bien las camisetas, la ropa interior y las sábanas. Cuando termina de centrifugar, revisa una mancha en una toalla y decide dejarla en remojo con un poco de quitamanchas antes de secar. Como no tiene secadora en casa, tiende toda la ropa en el tendedero con unas cuantas pinzas de ropa. Por la tarde, cuando la ropa ya está casi seca, saca la tabla de planchar y la plancha para planchar las camisas del trabajo, con cuidado de no quemar nada. Al doblar la última prenda, piensa que, esta vez, la lavadora no dio ningún problema — ni fuga de agua, ni mal olor, todo funcionó perfectamente.",
      textPt: "No sábado de manhã, Anderson separa a roupa antes de colocá-la na máquina de lavar: a roupa colorida em um cesto de roupa, a roupa delicada em outro. Adiciona sabão em pó e um pouco de amaciante, e programa o ciclo para lavar e enxaguar bem as camisetas, a roupa íntima e os lençóis. Quando termina de centrifugar, percebe uma mancha em uma toalha e decide deixá-la de molho com um pouco de tira-manchas antes de secar. Como não tem secadora em casa, estende toda a roupa no varal com alguns pregadores. À tarde, quando a roupa já está quase seca, pega a tábua de passar e o ferro de passar para passar as camisas do trabalho, com cuidado para não queimar nada. Ao dobrar a última peça, pensa que, dessa vez, a máquina de lavar não deu nenhum problema — nem vazamento de água, nem cheiro ruim, tudo funcionou perfeitamente.",
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
      text: "En el centro comercial, Anderson entra en una tienda de ropa buscando algo cómodo para un viaje. Coge una camiseta, un pantalón y una chaqueta, y le pregunta a la vendedora: ‘¿Puedo probarme esto?’. Ella le indica dónde está el probador. Dentro, se prueba primero el pantalón — está muy apretado — y pide una talla más grande; la blusa que su esposa eligió, en cambio, está muy suelta. Cuando por fin encuentra la combinación correcta, sale del probador y dice: ‘¡Quedó perfecto!’. También se prueba unas zapatillas y unas botas para el frío, y pregunta: ‘¿Tiene de otro color?’ antes de decidirse. En la caja, pregunta ‘¿Está en promoción?’ y, al ver que sí, sonríe: ‘¡Vale la pena!’. Antes de pagar, decide: ‘Me lo llevo’ — la ropa es cómoda, de buena calidad y justo lo que necesitaba para el viaje.",
      textPt: "No shopping, Anderson entra em uma loja de roupas procurando algo confortável para uma viagem. Pega uma camiseta, uma calça e um casaco, e pergunta à vendedora: ‘Posso experimentar isto?’. Ela indica onde fica o provador. Lá dentro, experimenta primeiro a calça — está muito apertada — e pede um tamanho maior; a blusa que sua esposa escolheu, por outro lado, está muito larga. Quando finalmente encontra a combinação certa, sai do provador e diz: ‘Ficou perfeito!’. Também experimenta um tênis e umas botas para o frio, e pergunta: ‘Tem de outra cor?’ antes de decidir. No caixa, pergunta ‘Está na promoção?’ e, ao ver que sim, sorri: ‘Vale a pena!’. Antes de pagar, decide: ‘Vou levar este’ — a roupa é confortável, de boa qualidade e exatamente o que precisava para a viagem.",
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
    },
    {
      id: "er-saludos", order: 18, title: "Saludos y cortesía", subtitle: "Cómo saludar, presentarse y despedirse en español",
      text: "Anderson llega a una reunión en Madrid y saluda formalmente al nuevo cliente: ‘¡Buenos días! ¿Cómo está usted?’ El cliente responde: ‘Muy bien, gracias. ¿Y usted?’ Después de la reunión, se presentan: ‘Mucho gusto, me llamo Anderson, soy de Brasil.’ ‘El gusto es mío, encantado de conocerlo.’ Por la tarde, se encuentra con un amigo español en la calle y el tono cambia: ‘¡Hola! ¿Qué tal? ¿Todo bien?’ ‘Todo bien, ¿y tú? ¿Qué haces por aquí?’ Antes de irse, agradece con cortesía: ‘Muchas gracias por tu ayuda.’ ‘De nada, con mucho gusto.’ Al despedirse del cliente, usa la forma formal: ‘¡Que tenga un buen día! Hasta la próxima.’ Y al despedirse del amigo, usa la forma informal: ‘¡Cuídate! Nos vemos pronto.’ Anderson aprende que, en español, saber cuándo usar ‘usted’ o ‘tú’ hace toda la diferencia para causar una buena impresión.",
      textPt: "Anderson chega a uma reunião em Madri e cumprimenta formalmente o novo cliente: ‘Bom dia! Como o senhor está?’ O cliente responde: ‘Muito bem, obrigado. E o senhor?’ Depois da reunião, se apresentam: ‘Muito prazer, me chamo Anderson, sou do Brasil.’ ‘O prazer é meu, encantado em conhecê-lo.’ À tarde, encontra um amigo espanhol na rua e o tom muda: ‘Oi! Que tal? Tudo bem?’ ‘Tudo bem, e você? O que você está fazendo por aqui?’ Antes de ir embora, agradece com cortesia: ‘Muito obrigado pela sua ajuda.’ ‘De nada, com muito prazer.’ Ao se despedir do cliente, usa a forma formal: ‘Que tenha um bom dia! Até a próxima.’ E ao se despedir do amigo, usa a forma informal: ‘Se cuida! Nos vemos em breve.’ Anderson aprende que, em espanhol, saber quando usar ‘usted’ ou ‘tú’ faz toda a diferença para causar uma boa impressão.",
      vocabulary: [
        {category: "Saludos según el momento", items: [
          {es: "Buenos días", pt: "Bom dia"}, {es: "Buenas tardes", pt: "Boa tarde"}, {es: "Buenas noches", pt: "Boa noite"},
          {es: "Hola", pt: "Olá"}, {es: "¿Qué tal?", pt: "Que tal?"},
          {es: "¿Cómo estás? (tú)", pt: "Como você está?"}, {es: "¿Cómo está usted? (formal)", pt: "Como o senhor/a senhora está?"}
        ]},
        {category: "Cómo responder", items: [
          {es: "Muy bien, gracias", pt: "Muito bem, obrigado(a)"}, {es: "Bien, gracias", pt: "Bem, obrigado(a)"},
          {es: "Más o menos", pt: "Mais ou menos"}, {es: "No estoy muy bien", pt: "Não estou muito bem"},
          {es: "Estoy cansado(a)", pt: "Estou cansado(a)"}
        ]},
        {category: "Presentaciones", items: [
          {es: "Me llamo...", pt: "Me chamo..."}, {es: "Soy de...", pt: "Sou de..."}, {es: "Vivo en...", pt: "Moro em..."},
          {es: "Mucho gusto", pt: "Muito prazer"}, {es: "El gusto es mío", pt: "O prazer é meu"},
          {es: "Encantado(a) de conocerlo(a)", pt: "Encantado(a) em conhecê-lo(a)"}
        ]},
        {category: "Despedidas", items: [
          {es: "Adiós", pt: "Adeus"}, {es: "Hasta luego", pt: "Até logo"}, {es: "Hasta mañana", pt: "Até amanhã"},
          {es: "Hasta pronto", pt: "Até breve"}, {es: "Nos vemos", pt: "Nos vemos"}, {es: "Cuídate", pt: "Cuide-se"},
          {es: "Que tenga un buen día", pt: "Que tenha um bom dia"}
        ]},
        {category: "Cortesía", items: [
          {es: "Por favor", pt: "Por favor"}, {es: "Muchas gracias", pt: "Muito obrigado(a)"}, {es: "De nada", pt: "De nada"},
          {es: "Con permiso", pt: "Com licença"}, {es: "Perdón", pt: "Desculpe"}, {es: "Lo siento mucho", pt: "Sinto muito"}
        ]},
        {category: "Tú o usted: formal e informal", items: [
          {es: "¿Cómo estás? (amigos)", pt: "Como vai? (amigos)"}, {es: "¿Cómo está usted? (formal)", pt: "Como está o senhor/a senhora?"},
          {es: "Cuídate (informal)", pt: "Se cuida (informal)"}, {es: "Que esté bien (formal)", pt: "Que fique bem (formal)"}
        ]}
      ],
      notes: [
        "'Tú' se usa con amigos, familia y personas de tu edad; 'usted' se usa con desconocidos, clientes, personas mayores o en situaciones formales — igual que 'você' vs. 'o senhor/a senhora' en portugués, pero en España 'tú' es aún más común que en gran parte de Latinoamérica.",
        "En España es común dar dos besos en la mejilla al saludar a amigos y familiares (empezando por la derecha); en México y buena parte de Latinoamérica, un apretón de manos o un abrazo es más habitual."
      ],
      exercises: [
        {
          type: "caso", icon: "🤝", stamp: "✅ PRESENTACIÓN HECHA",
          scenario: "Conoces a un cliente nuevo en una reunión formal de auditoría en Madrid.",
          q: "Escribe una frase completa para saludarlo formalmente y presentarte.",
          target: "Buenos días, mucho gusto, me llamo Anderson, soy de Brasil.",
          altAnswers: ["Buenos días, ¿cómo está usted? Me llamo Anderson.", "Mucho gusto, soy Anderson, de Brasil."]
        },
        {
          type: "caso", icon: "👋", stamp: "✅ DESPEDIDA CORDIAL",
          scenario: "Terminaste de tomar un café con un amigo español y necesitas despedirte de manera informal.",
          q: "Escribe una frase completa despidiéndote de tu amigo de forma informal.",
          target: "¡Cuídate! Nos vemos pronto.",
          altAnswers: ["Hasta luego, cuídate mucho.", "Nos vemos, que tengas un buen día."]
        },
        {type: "speak", prompt: "¿Cómo saludas formalmente por la mañana?", target: "Buenos días.", altAnswers: ["buenos días"]},
        {type: "speak", prompt: "¿Cómo saludas de forma informal a un amigo?", target: "¡Hola! ¿Qué tal?", altAnswers: ["hola", "qué tal"]},
        {type: "speak", prompt: "Si alguien te pregunta '¿Cómo estás?' y te sientes muy bien, ¿qué respondes?", target: "Muy bien, gracias.", altAnswers: ["muy bien gracias", "estoy muy bien"]},
        {type: "speak", prompt: "¿Cómo te presentas dando tu nombre?", target: "Me llamo Anderson.", altAnswers: ["me llamo", "soy Anderson"]},
        {type: "speak", prompt: "Cuando alguien se presenta y te da gusto conocerlo, ¿qué dices?", target: "Mucho gusto.", altAnswers: ["mucho gusto", "el gusto es mío", "encantado"]},
        {type: "speak", prompt: "¿Cómo te despides de manera formal, deseando un buen día?", target: "Que tenga un buen día.", altAnswers: ["que tenga un buen día"]},
        {type: "speak", prompt: "¿Cómo te despides de un amigo de manera informal?", target: "¡Cuídate! Nos vemos.", altAnswers: ["cuídate", "nos vemos", "hasta luego"]},
        {type: "speak", prompt: "Si alguien te ayuda, ¿cómo le agradeces?", target: "Muchas gracias.", altAnswers: ["muchas gracias", "gracias"]},
        {type: "speak", prompt: "Si alguien te da las gracias, ¿qué respondes?", target: "De nada.", altAnswers: ["de nada"]},
        {type: "speak", prompt: "¿Qué dices para pasar por un lugar estrecho sin molestar a alguien?", target: "Con permiso.", altAnswers: ["con permiso"]},
        {type: "speak", prompt: "Si pisas a alguien sin querer, ¿qué le dices?", target: "Perdón, lo siento mucho.", altAnswers: ["perdón", "lo siento"]},
        {type: "mc", q: "'Muito prazer', em espanhol, se dice...", options: ["Mucho gusto", "De nada", "Con permiso", "Lo siento"], correct: 0},
        {type: "mc", q: "Para hablar formalmente con un cliente (usted), '¿Cómo estás?' se convierte en...", options: ["¿Qué tal?", "¿Cómo está usted?", "¡Hola!", "Cuídate"], correct: 1},
        {type: "fill", q: "'Até logo', em espanhol, se escribe: Hasta ___", answer: "luego"},
        {type: "fill", q: "'Com licença', em espanhol, se escribe: Con ___", answer: "permiso"}
      ]
    },
    {
      id: "er-pesos-medidas", order: 19, title: "Pesos, medidas y unidades", subtitle: "Cómo pesar, medir y comparar cantidades en español",
      text: "En el mercado, Anderson quiere comprar fruta para la semana. Le pregunta al vendedor: ‘¿Cuánto pesa esta bolsa de manzanas?’ El vendedor pone la fruta en la balanza y responde: ‘Pesa un kilogramo y medio.’ Anderson pide: ‘Necesito medio kilo de queso también, por favor.’ Después va a la ferretería para comprar una tabla de madera y pregunta: ‘¿Cuánto mide esta tabla?’ ‘Mide dos metros de largo por treinta centímetros de ancho.’ En la farmacia, compra un jarabe y lee la etiqueta: cien mililitros, tomar una cucharada cada ocho horas. De vuelta a casa, prepara una receta que pide dos tazas de harina y una cucharadita de sal. Al final del día, revisa su lista: compró exactamente lo que necesitaba, ni un gramo de más ni de menos — ¡todo bien medido!",
      textPt: "No mercado, Anderson quer comprar frutas para a semana. Ele pergunta ao vendedor: ‘Quanto pesa esta sacola de maçãs?’ O vendedor coloca a fruta na balança e responde: ‘Pesa um quilo e meio.’ Anderson pede: ‘Preciso de meio quilo de queijo também, por favor.’ Depois vai à loja de ferragens comprar uma tábua de madeira e pergunta: ‘Quanto mede esta tábua?’ ‘Mede dois metros de comprimento por trinta centímetros de largura.’ Na farmácia, compra um xarope e lê o rótulo: cem mililitros, tomar uma colher a cada oito horas. De volta em casa, prepara uma receita que pede duas xícaras de farinha e uma colher de chá de sal. No final do dia, revisa sua lista: comprou exatamente o que precisava, nem um grama a mais nem a menos — tudo bem medido!",
      vocabulary: [
        {category: "Pesos", items: [
          {es: "el gramo", pt: "a grama"}, {es: "el kilogramo", pt: "o quilograma"}, {es: "la tonelada", pt: "a tonelada"},
          {es: "la onza", pt: "a onça"}, {es: "la libra", pt: "a libra"}, {es: "el miligramo", pt: "o miligrama"}
        ]},
        {category: "Medidas de longitud", items: [
          {es: "el milímetro", pt: "o milímetro"}, {es: "el centímetro", pt: "o centímetro"}, {es: "el metro", pt: "o metro"},
          {es: "el kilómetro", pt: "o quilômetro"}, {es: "la pulgada", pt: "a polegada"}
        ]},
        {category: "Medidas de capacidad", items: [
          {es: "el mililitro", pt: "o mililitro"}, {es: "el litro", pt: "o litro"}, {es: "la taza", pt: "a xícara"},
          {es: "la cuchara (sopera)", pt: "a colher de sopa"}, {es: "la cucharadita", pt: "a colher de chá"},
          {es: "el vaso", pt: "o copo"}, {es: "la botella", pt: "a garrafa"}
        ]},
        {category: "Cantidad y tiempo", items: [
          {es: "la docena", pt: "a dúzia"}, {es: "el par", pt: "o par"}, {es: "el porcentaje", pt: "a porcentagem"},
          {es: "el segundo", pt: "o segundo"}, {es: "el minuto", pt: "o minuto"}
        ]},
        {category: "Expresiones útiles", items: [
          {es: "¿Cuánto pesa?", pt: "Quanto pesa?"}, {es: "¿Cuánto mide?", pt: "Quanto mede?"},
          {es: "Pesa dos kilos", pt: "Pesa dois quilos"}, {es: "Necesito medio kilo", pt: "Preciso de meio quilo"},
          {es: "Es muy pesado / ligero", pt: "É muito pesado / leve"}, {es: "Aproximadamente", pt: "Aproximadamente"}
        ]}
      ],
      notes: [
        "España y toda Latinoamérica usan el sistema métrico decimal, igual que Brasil — kilos, metros y litros son exactamente los mismos números, solo cambia el nombre de la unidad en algunos casos (como 'libra' u 'onza', más comunes en el habla informal de algunos países).",
        "'Medio kilo' (0,5 kg) y 'kilo y medio' (1,5 kg) usan 'medio' de formas distintas — antes del sustantivo para la mitad, después para 'y media unidad más'."
      ],
      exercises: [
        {
          type: "caso", icon: "⚖️", stamp: "✅ PESO CONFIRMADO",
          scenario: "Estás en la frutería y quieres comprar exactamente medio kilo de tomates.",
          q: "Escribe una frase completa pidiéndole al vendedor medio kilo de tomates.",
          target: "Necesito medio kilo de tomates, por favor.",
          altAnswers: ["¿Me da medio kilo de tomates?", "Quiero medio kilo de tomates."]
        },
        {
          type: "caso", icon: "📏", stamp: "✅ MEDIDA TOMADA",
          scenario: "En la ferretería necesitas saber cuánto mide una tabla de madera antes de comprarla.",
          q: "Escribe una frase completa preguntando cuánto mide la tabla.",
          target: "¿Cuánto mide esta tabla de madera?",
          altAnswers: ["¿Cuáles son las medidas de esta tabla?", "¿Qué largo tiene esta tabla?"]
        },
        {type: "speak", prompt: "¿Qué usas para saber cuánto pesa algo?", target: "La balanza.", altAnswers: ["la balanza"]},
        {type: "speak", prompt: "Si algo pesa 1000 gramos, ¿cuántos kilogramos son?", target: "Un kilogramo.", altAnswers: ["un kilo", "un kilogramo"]},
        {type: "speak", prompt: "¿Cómo preguntas el peso de algo?", target: "¿Cuánto pesa?", altAnswers: ["cuánto pesa"]},
        {type: "speak", prompt: "¿Cómo preguntas la longitud de algo?", target: "¿Cuánto mide?", altAnswers: ["cuánto mide"]},
        {type: "speak", prompt: "¿Qué unidad usas para medir la distancia entre ciudades?", target: "El kilómetro.", altAnswers: ["el kilómetro", "kilómetros"]},
        {type: "speak", prompt: "¿En qué bebes el agua, en una medida pequeña de vidrio?", target: "En el vaso.", altAnswers: ["el vaso", "en el vaso"]},
        {type: "speak", prompt: "¿Cuántas unidades tiene una docena?", target: "Doce.", altAnswers: ["doce", "12"]},
        {type: "speak", prompt: "Si algo es difícil de cargar, ¿cómo se dice?", target: "Es muy pesado.", altAnswers: ["es pesado", "muy pesado"]},
        {type: "speak", prompt: "Si algo es fácil de cargar, ¿cómo se dice?", target: "Es muy ligero.", altAnswers: ["es ligero", "muy ligero"]},
        {type: "speak", prompt: "¿Qué unidad usas para medir un líquido, como el agua de una botella?", target: "El litro.", altAnswers: ["el litro"]},
        {type: "speak", prompt: "Si quieres comprar la mitad de un kilo, ¿qué pides?", target: "Medio kilo.", altAnswers: ["medio kilo"]},
        {type: "mc", q: "'Quilograma', em espanhol, se dice...", options: ["el gramo", "el kilogramo", "la tonelada", "la libra"], correct: 1},
        {type: "mc", q: "'Colher de sopa', em espanhol, se dice...", options: ["la cucharadita", "el vaso", "la cuchara", "la taza"], correct: 2},
        {type: "fill", q: "'Meio quilo', em espanhol, se escribe: ___ kilo", answer: "medio"},
        {type: "fill", q: "'Quanto mede?', em espanhol, se escribe: ¿Cuánto ___?", answer: "mide"}
      ]
    },
    {
      id: "er-invierno", order: 20, title: "Invierno, deportes y nieve", subtitle: "Vocabulario de la temporada fría y los deportes de nieve",
      text: "Anderson decide pasar sus vacaciones de invierno en la montaña. Antes de salir, revisa el pronóstico: ‘¡Qué frío! Va a nevar toda la semana.’ Prepara su maleta con ropa de abrigo: un gorro, una bufanda, guantes y botas para la nieve. Al llegar a la estación de esquí, alquila unos esquís y pregunta: ‘¿Cuál es la pista para principiantes?’ Un instructor le explica: ‘Empieza por la pista verde, es la más fácil.’ Anderson intenta esquiar, se cae un par de veces, pero se levanta riendo: ‘¡Me encanta la nieve!’ Por la tarde, prueba el snowboard con un amigo y después suben en el teleférico para ver la vista panorámica desde la cima de la montaña. Al final del día, cansado pero feliz, entra en una cabaña acogedora y pide un chocolate caliente: ‘¡Qué paisaje tan hermoso! Vale la pena el frío.’",
      textPt: "Anderson decide passar suas férias de inverno na montanha. Antes de sair, confere a previsão: ‘Que frio! Vai nevar a semana toda.’ Prepara sua mala com roupas de frio: um gorro, um cachecol, luvas e botas para a neve. Ao chegar na estância de esqui, aluga uns esquis e pergunta: ‘Qual é a pista para iniciantes?’ Um instrutor explica: ‘Comece pela pista verde, é a mais fácil.’ Anderson tenta esquiar, cai algumas vezes, mas se levanta rindo: ‘Eu adoro a neve!’ À tarde, experimenta o snowboard com um amigo e depois sobem no teleférico para ver a vista panorâmica do topo da montanha. No final do dia, cansado mas feliz, entra em uma cabana aconchegante e pede um chocolate quente: ‘Que paisagem tão linda! Vale a pena o frio.’",
      vocabulary: [
        {category: "El invierno", items: [
          {es: "el invierno", pt: "o inverno"}, {es: "el frío", pt: "o frio"}, {es: "la nieve", pt: "a neve"},
          {es: "el hielo", pt: "o gelo"}, {es: "el viento frío", pt: "o vento frio"}, {es: "la temperatura", pt: "a temperatura"},
          {es: "un día nublado", pt: "um dia nublado"}
        ]},
        {category: "Ropa de invierno", items: [
          {es: "el abrigo", pt: "o agasalho"}, {es: "la bufanda", pt: "o cachecol"}, {es: "el guante", pt: "a luva"},
          {es: "el gorro", pt: "o gorro"}, {es: "las botas", pt: "as botas"}
        ]},
        {category: "Deportes de invierno", items: [
          {es: "el esquí", pt: "o esqui"}, {es: "el snowboard", pt: "o snowboard"},
          {es: "el patinaje sobre hielo", pt: "a patinação no gelo"}, {es: "el trineo", pt: "o trenó"}
        ]},
        {category: "En la montaña", items: [
          {es: "la montaña", pt: "a montanha"}, {es: "la estación de esquí", pt: "a estância de esqui"},
          {es: "la pista", pt: "a pista"}, {es: "el teleférico", pt: "o teleférico"}, {es: "la cabaña", pt: "a cabana"},
          {es: "el chocolate caliente", pt: "o chocolate quente"}
        ]},
        {category: "Expresiones útiles", items: [
          {es: "¡Qué frío!", pt: "Que frio!"}, {es: "Está nevando", pt: "Está nevando"},
          {es: "¿Vamos a esquiar?", pt: "Vamos esquiar?"}, {es: "Me encanta la nieve", pt: "Eu adoro a neve"},
          {es: "¡Qué paisaje tan hermoso!", pt: "Que paisagem tão linda!"}, {es: "Cuidado, no resbales", pt: "Cuidado para não escorregar"}
        ]}
      ],
      notes: [
        "Cuidado con la trampa clásica: en español se dice 'hace frío' (el clima) y 'tengo frío' (yo siento frío) — nunca 'estoy frío', como a veces se traduce directamente del portugués 'estou com frio'.",
        "Las pistas de esquí usan colores internacionales según la dificultad: verde (muy fácil), azul (fácil), roja (intermedia) y negra (difícil) — los mismos colores se usan en España y en Latinoamérica."
      ],
      exercises: [
        {
          type: "caso", icon: "🎿", stamp: "✅ PISTA ELEGIDA",
          scenario: "Es tu primer día esquiando y el instructor te pregunta qué pista quieres probar.",
          q: "Escribe una frase completa pidiendo la pista más fácil para principiantes.",
          target: "Quiero probar la pista más fácil, para principiantes.",
          altAnswers: ["¿Cuál es la pista para principiantes?", "Prefiero la pista verde, soy principiante."]
        },
        {
          type: "caso", icon: "🧣", stamp: "✅ ABRIGO LISTO",
          scenario: "Vas a viajar a la montaña y el pronóstico dice que hará mucho frío.",
          q: "Escribe una frase completa diciendo qué ropa de invierno vas a llevar.",
          target: "Voy a llevar un abrigo, una bufanda, guantes y un gorro.",
          altAnswers: ["Necesito llevar ropa de abrigo porque hace mucho frío.", "Voy a empacar botas, guantes y una bufanda."]
        },
        {type: "speak", prompt: "¿Cómo se dice cuando el termómetro marca una temperatura muy baja?", target: "¡Qué frío!", altAnswers: ["qué frío", "hace mucho frío"]},
        {type: "speak", prompt: "¿Qué cae del cielo en invierno, blanca y fría?", target: "La nieve.", altAnswers: ["la nieve"]},
        {type: "speak", prompt: "¿Qué te pones en la cabeza cuando hace frío?", target: "El gorro.", altAnswers: ["el gorro"]},
        {type: "speak", prompt: "¿Qué te pones en las manos cuando hace frío?", target: "Los guantes.", altAnswers: ["los guantes", "el guante"]},
        {type: "speak", prompt: "¿Qué te pones alrededor del cuello cuando hace frío?", target: "La bufanda.", altAnswers: ["la bufanda"]},
        {type: "speak", prompt: "¿Qué deporte practicas deslizándote sobre esquís en la nieve?", target: "El esquí.", altAnswers: ["el esquí", "esquiar"]},
        {type: "speak", prompt: "¿Qué usas para subir a la cima de la montaña sin caminar?", target: "El teleférico.", altAnswers: ["el teleférico"]},
        {type: "speak", prompt: "¿Qué bebida caliente tomas después de un día en la nieve?", target: "Un chocolate caliente.", altAnswers: ["chocolate caliente"]},
        {type: "speak", prompt: "¿Dónde practicas esquí, con pistas de diferentes niveles?", target: "En la estación de esquí.", altAnswers: ["la estación de esquí"]},
        {type: "speak", prompt: "Si te encanta la nieve, ¿qué dices?", target: "¡Me encanta la nieve!", altAnswers: ["me encanta la nieve"]},
        {type: "speak", prompt: "¿Qué pequeña casa de madera encuentras en la montaña para calentarte?", target: "La cabaña.", altAnswers: ["la cabaña"]},
        {type: "mc", q: "'Luva', em espanhol, se dice...", options: ["la bufanda", "el guante", "el gorro", "la bota"], correct: 1},
        {type: "mc", q: "'Está nevando', em português, significa...", options: ["Está fazendo sol", "Está chovendo", "Está nevando", "Está ventando"], correct: 2},
        {type: "fill", q: "'Cachecol', em espanhol, se escribe: la ___", answer: "bufanda"},
        {type: "fill", q: "'Que frio!', em espanhol, se escribe: ¡Qué ___!", answer: "frío"}
      ]
    },
    {
      id: "er-direcciones", order: 21, title: "Ubicación, direcciones y transporte", subtitle: "Cómo moverte y orientarte en la ciudad",
      text: "Anderson llega a una ciudad que no conoce y necesita llegar al hotel. Le pregunta a una persona en la calle: ‘¿Dónde queda la avenida principal?’ ‘Está allí, al lado del banco, cerca de la plaza.’ Como el hotel queda lejos, decide no ir a pie: toma el metro hasta el centro y después un taxi. Por el camino, ve una rotonda enorme y un letrero de retorno para volver a la carretera principal. Al llegar, el recepcionista le pregunta cómo fue el viaje: ‘Vine en metro y después en taxi, fue rápido.’ Al día siguiente, para ir a una reunión, prefiere caminar: ‘¿Cuánto tiempo lleva a pie hasta la oficina?’ ‘Unos quince minutos, siga todo recto y gire en la segunda calle.’ Anderson agradece y sale, pensando que, entre tantas opciones — a pie, en bus, en tren o en taxi — lo importante es no perderse: ‘Menos mal que pregunté, si no, ahora estaría perdido.’",
      textPt: "Anderson chega a uma cidade que não conhece e precisa chegar ao hotel. Pergunta a uma pessoa na rua: ‘Onde fica a avenida principal?’ ‘Fica ali, ao lado do banco, perto da praça.’ Como o hotel fica longe, decide não ir a pé: pega o metrô até o centro e depois um táxi. Pelo caminho, vê uma rotatória enorme e uma placa de retorno para voltar à estrada principal. Ao chegar, o recepcionista pergunta como foi a viagem: ‘Vim de metrô e depois de táxi, foi rápido.’ No dia seguinte, para ir a uma reunião, prefere caminhar: ‘Quanto tempo leva a pé até o escritório?’ ‘Uns quinze minutos, siga em frente e vire na segunda rua.’ Anderson agradece e sai, pensando que, entre tantas opções — a pé, de ônibus, de trem ou de táxi — o importante é não se perder: ‘Ainda bem que perguntei, senão agora estaria perdido.’",
      vocabulary: [
        {category: "Ubicación", items: [
          {es: "aquí / allí", pt: "aqui / ali"}, {es: "cerca / lejos", pt: "perto / longe"}, {es: "dentro / fuera", pt: "dentro / fora"},
          {es: "encima / debajo", pt: "em cima / embaixo"}, {es: "delante de / detrás de", pt: "na frente de / atrás de"},
          {es: "alrededor", pt: "ao redor"}
        ]},
        {category: "En el camino", items: [
          {es: "la rotonda", pt: "a rotatória"}, {es: "el retorno", pt: "o retorno"}, {es: "la salida", pt: "a saída"},
          {es: "atravesar", pt: "atravessar"}, {es: "siga adelante", pt: "siga em frente"}
        ]},
        {category: "Medios de transporte", items: [
          {es: "a pie", pt: "a pé"}, {es: "en coche", pt: "de carro"}, {es: "en moto", pt: "de moto"},
          {es: "en bicicleta", pt: "de bicicleta"}, {es: "en autobús", pt: "de ônibus"}, {es: "en tren", pt: "de trem"},
          {es: "en metro", pt: "de metrô"}, {es: "en taxi", pt: "de táxi"}, {es: "en avión", pt: "de avião"}, {es: "en barco", pt: "de barco"}
        ]},
        {category: "Verbos de movimiento", items: [
          {es: "ir", pt: "ir"}, {es: "venir", pt: "vir"}, {es: "llegar", pt: "chegar"}, {es: "salir", pt: "sair"},
          {es: "entrar", pt: "entrar"}, {es: "subir", pt: "subir"}, {es: "bajar", pt: "descer"}
        ]},
        {category: "Preguntas y expresiones útiles", items: [
          {es: "¿Dónde queda...?", pt: "Onde fica...?"}, {es: "¿Cómo llego a...?", pt: "Como chego a...?"},
          {es: "¿Está lejos?", pt: "Está longe?"}, {es: "¿Cuánto tiempo lleva?", pt: "Quanto tempo leva?"},
          {es: "Estoy perdido(a)", pt: "Estou perdido(a)"}, {es: "¿Puede ayudarme?", pt: "Pode me ajudar?"}
        ]}
      ],
      notes: [
        "Esta lección complementa la de 'Pedir/dar direcciones' del nivel Básico — aquí el repaso es más rápido y el foco está en los medios de transporte y las expresiones de ubicación que todavía no viste.",
        "'A pie' es la única excepción entre los medios de transporte: todos los demás usan 'en' (en coche, en tren, en avión), pero para caminar se dice 'a pie', nunca 'en pie'."
      ],
      exercises: [
        {
          type: "caso", icon: "🚕", stamp: "✅ RUTA ENCONTRADA",
          scenario: "Estás perdido en una ciudad nueva y necesitas llegar a tu hotel.",
          q: "Escribe una frase completa pidiendo ayuda para llegar al hotel.",
          target: "Estoy perdido, ¿puede ayudarme a llegar a mi hotel?",
          altAnswers: ["¿Puede decirme cómo llegar al hotel?", "Necesito ayuda, no sé cómo llegar al hotel."]
        },
        {
          type: "caso", icon: "🚇", stamp: "✅ TRANSPORTE ELEGIDO",
          scenario: "Tienes una reunión importante y el lugar queda lejos de tu hotel.",
          q: "Escribe una frase completa diciendo qué medio de transporte vas a usar y por qué.",
          target: "Voy a tomar el metro porque es más rápido que ir a pie.",
          altAnswers: ["Prefiero ir en taxi porque queda lejos.", "Voy en autobús, es más barato."]
        },
        {type: "speak", prompt: "¿Cómo preguntas dónde queda un lugar?", target: "¿Dónde queda...?", altAnswers: ["dónde queda"]},
        {type: "speak", prompt: "Si no sabes cómo llegar a un sitio, ¿qué preguntas?", target: "¿Cómo llego a...?", altAnswers: ["cómo llego"]},
        {type: "speak", prompt: "Si estás sin rumbo en una ciudad desconocida, ¿qué dices?", target: "Estoy perdido.", altAnswers: ["estoy perdido", "estoy perdida"]},
        {type: "speak", prompt: "¿Qué transporte usas para ir por debajo de la ciudad, muy rápido?", target: "El metro.", altAnswers: ["el metro"]},
        {type: "speak", prompt: "¿Qué transporte tomas para cruzar el océano o hacer un crucero?", target: "El barco.", altAnswers: ["el barco"]},
        {type: "speak", prompt: "Si vas caminando, sin ningún vehículo, ¿cómo se dice?", target: "A pie.", altAnswers: ["a pie"]},
        {type: "speak", prompt: "¿Qué construcción circular usan los coches para cambiar de dirección sin semáforo?", target: "La rotonda.", altAnswers: ["la rotonda"]},
        {type: "speak", prompt: "¿Cómo preguntas si un lugar está muy distante?", target: "¿Está lejos?", altAnswers: ["está lejos"]},
        {type: "speak", prompt: "¿Qué verbo usas para decir que vas a poner un pie dentro de un lugar?", target: "Entrar.", altAnswers: ["entrar"]},
        {type: "speak", prompt: "¿Qué verbo usas para decir que vas a dejar un lugar?", target: "Salir.", altAnswers: ["salir"]},
        {type: "speak", prompt: "¿Cómo preguntas cuánto tiempo toma llegar a un lugar?", target: "¿Cuánto tiempo lleva?", altAnswers: ["cuánto tiempo lleva"]},
        {type: "mc", q: "'De ônibus', em espanhol, se dice...", options: ["en tren", "en autobús", "en metro", "en taxi"], correct: 1},
        {type: "mc", q: "'Estou perdido', em espanhol, se dice...", options: ["Estoy cansado", "Estoy perdido", "Estoy cerca", "Estoy lejos"], correct: 1},
        {type: "fill", q: "'De bicicleta', em espanhol, se escribe: en ___", answer: "bicicleta"},
        {type: "fill", q: "'A rotatória', em espanhol, se escribe: la ___", answer: "rotonda"}
      ]
    },
    {
      id: "er-culinaria", order: 22, title: "Cocina: verbos, ingredientes y platos", subtitle: "Cómo hablar de preparación, ingredientes y sabores",
      text: "Un amigo le pide a Anderson la receta de su plato favorito por teléfono. ‘Es fácil’, le explica, ‘primero hay que picar la cebolla y el ajo, y sofreírlos en aceite.’ Después añade la carne y la deja cocinar bien. Mientras tanto, hierve el arroz en otra olla y prepara una ensalada con lechuga y tomate. Su amigo pregunta: ‘¿Se puede freír en vez de asar el pollo?’ ‘Claro, las dos formas quedan deliciosas’, responde Anderson. Al final, sazona todo con sal, pimienta y un poco de orégano, y prueba: ‘¡Está delicioso!’ Sirve la comida en la mesa y dice: ‘¡Buen provecho!’ Su amigo, al probar el plato, comenta que necesita un poco más de sal, y Anderson añade una pizca más. Antes de colgar el teléfono, Anderson concluye, satisfecho: ‘Me encanta cocinar, es la mejor forma de terminar el día.’",
      textPt: "Um amigo pede a Anderson a receita do seu prato favorito por telefone. ‘É fácil’, ele explica, ‘primeiro é preciso picar a cebola e o alho, e refogá-los no óleo.’ Depois acrescenta a carne e deixa cozinhar bem. Enquanto isso, ferve o arroz em outra panela e prepara uma salada com alface e tomate. Seu amigo pergunta: ‘Dá para fritar em vez de assar o frango?’ ‘Claro, das duas formas fica delicioso’, responde Anderson. No final, tempera tudo com sal, pimenta e um pouco de orégano, e prova: ‘Está delicioso!’ Serve a comida na mesa e diz: ‘Bom apetite!’ Seu amigo, ao provar o prato, comenta que precisa de um pouco mais de sal, e Anderson acrescenta uma pitada a mais. Antes de desligar o telefone, Anderson conclui, satisfeito: ‘Eu adoro cozinhar, é a melhor forma de terminar o dia.’",
      vocabulary: [
        {category: "Verbos de cocina", items: [
          {es: "asar / hornear", pt: "assar"}, {es: "cocinar", pt: "cozinhar"}, {es: "hervir", pt: "ferver"},
          {es: "freír", pt: "fritar"}, {es: "sofreír", pt: "refogar"}, {es: "tostar", pt: "torrar"},
          {es: "descongelar", pt: "descongelar"}, {es: "mezclar / batir", pt: "misturar / bater"}, {es: "picar / trocear", pt: "picar"}
        ]},
        {category: "Ingredientes básicos", items: [
          {es: "el arroz", pt: "o arroz"}, {es: "el frijol", pt: "o feijão"}, {es: "la carne", pt: "a carne"},
          {es: "el pollo", pt: "o frango"}, {es: "el pescado", pt: "o peixe"}, {es: "el huevo", pt: "o ovo"},
          {es: "la leche", pt: "o leite"}, {es: "el queso", pt: "o queijo"}, {es: "la mantequilla", pt: "a manteiga"},
          {es: "el aceite", pt: "o óleo"}, {es: "la harina", pt: "a farinha"}, {es: "el azúcar", pt: "o açúcar"}
        ]},
        {category: "Verduras y condimentos", items: [
          {es: "la lechuga", pt: "a alface"}, {es: "el tomate", pt: "o tomate"}, {es: "la cebolla", pt: "a cebola"},
          {es: "el ajo", pt: "o alho"}, {es: "la papa / patata", pt: "a batata"}, {es: "la zanahoria", pt: "a cenoura"},
          {es: "la sal", pt: "o sal"}, {es: "la pimienta", pt: "a pimenta"}, {es: "el orégano", pt: "o orégano"}, {es: "el perejil", pt: "a salsinha"}
        ]},
        {category: "Comidas y bebidas", items: [
          {es: "la sopa", pt: "a sopa"}, {es: "la ensalada", pt: "a salada"}, {es: "la pasta", pt: "o macarrão"},
          {es: "el asado", pt: "o churrasco"}, {es: "el flan", pt: "o pudim"}, {es: "el agua", pt: "a água"},
          {es: "el jugo", pt: "o suco"}, {es: "el café", pt: "o café"}
        ]},
        {category: "Expresiones del chef", items: [
          {es: "¡Está delicioso!", pt: "Está delicioso!"}, {es: "¡Buen provecho!", pt: "Bom apetite!"},
          {es: "La receta es fácil / difícil", pt: "A receita é fácil / difícil"}, {es: "Necesita más sal", pt: "Precisa de mais sal"},
          {es: "¡Me encanta cocinar!", pt: "Adoro cozinhar!"}
        ]}
      ],
      notes: [
        "Esta lección complementa la de 'La cocina' (que cubre los muebles y electrodomésticos, como la nevera y el horno) — aquí el foco son los verbos de preparación, los ingredientes y los platos.",
        "'Asar' en España suele referirse al horno, mientras que 'asar a la parrilla' se acerca más al sentido de 'churrasco' — en varios países de Latinoamérica también se usa 'asar' para la parrilla directamente."
      ],
      exercises: [
        {
          type: "caso", icon: "🍳", stamp: "✅ RECETA EXPLICADA",
          scenario: "Un amigo te pide la receta de tu plato favorito por teléfono.",
          q: "Escribe una frase completa explicando dos pasos para prepararlo, usando verbos de cocina.",
          target: "Primero, hay que picar la cebolla y el ajo, y después sofreírlos en aceite.",
          altAnswers: ["Primero se cocina el arroz y después se fríe el pollo.", "Hay que hervir el agua y después cocinar la pasta."]
        },
        {
          type: "caso", icon: "🍽️", stamp: "✅ PEDIDO HECHO",
          scenario: "Estás en un restaurante y quieres pedir un plato, pero avisas que no te gusta mucho la pimienta.",
          q: "Escribe una frase completa pidiendo un plato y avisando sobre la pimienta.",
          target: "Quiero la sopa, por favor, pero sin mucha pimienta.",
          altAnswers: ["Me gustaría el pollo asado, sin pimienta, por favor.", "Quiero una ensalada, pero poca pimienta, por favor."]
        },
        {type: "speak", prompt: "¿Qué verbo usas para cocinar algo en agua hirviendo?", target: "Hervir.", altAnswers: ["hervir"]},
        {type: "speak", prompt: "¿Qué verbo usas para cocinar algo en aceite caliente?", target: "Freír.", altAnswers: ["freír"]},
        {type: "speak", prompt: "¿Qué verbo usas para cocinar en el horno?", target: "Asar u hornear.", altAnswers: ["asar", "hornear"]},
        {type: "speak", prompt: "¿Qué verbo usas para cortar los ingredientes en pedazos pequeños?", target: "Picar.", altAnswers: ["picar"]},
        {type: "speak", prompt: "¿Qué grano blanco se cocina y acompaña casi toda comida brasileña?", target: "El arroz.", altAnswers: ["el arroz"]},
        {type: "speak", prompt: "¿Qué ingrediente amarillo pones en el pan por la mañana, viene de la vaca?", target: "La mantequilla.", altAnswers: ["la mantequilla"]},
        {type: "speak", prompt: "¿Qué verdura blanca y fuerte se usa para dar sabor a casi todas las comidas?", target: "El ajo.", altAnswers: ["el ajo"]},
        {type: "speak", prompt: "¿Qué condimento blanco le pones a la comida para que tenga más sabor?", target: "La sal.", altAnswers: ["la sal"]},
        {type: "speak", prompt: "Si la comida está muy rica, ¿qué dices?", target: "¡Está delicioso!", altAnswers: ["está delicioso", "delicioso"]},
        {type: "speak", prompt: "Antes de que alguien empiece a comer, ¿qué le deseas?", target: "¡Buen provecho!", altAnswers: ["buen provecho"]},
        {type: "speak", prompt: "Si te encanta cocinar, ¿qué dices?", target: "¡Me encanta cocinar!", altAnswers: ["me encanta cocinar"]},
        {type: "mc", q: "'Refogar', em espanhol, se dice...", options: ["hervir", "sofreír", "hornear", "descongelar"], correct: 1},
        {type: "mc", q: "'Fritar' (el verbo), em espanhol, se dice...", options: ["freír", "hervir", "asar", "picar"], correct: 0},
        {type: "fill", q: "'Picar/trocear', em espanhol, se escribe: ___", answer: "picar"},
        {type: "fill", q: "'Bom apetite!', em espanhol, se escribe: ¡Buen ___!", answer: "provecho"}
      ]
    },
    {
      id: "er-banco", order: 23, title: "Banco, dinero e inversión", subtitle: "Vocabulario financiero básico para el día a día",
      text: "Anderson entra en el banco para abrir una cuenta corriente. El gerente le pregunta: ‘¿Qué tipo de cuenta necesita?’ ‘Necesito una cuenta corriente y también quiero saber sobre inversiones.’ Después de firmar los documentos, recibe una tarjeta de débito y una contraseña para usar en el cajero. Al final del mes, revisa el extracto de la cuenta y hace un depósito. También pregunta sobre las tasas de interés: ‘¿Cuál es la tasa de interés de un préstamo?’ El gerente explica las opciones de renta fija y renta variable, y comenta: ‘Cuanto mayor es el riesgo, mayor es la posible rentabilidad.’ Anderson decide invertir una parte de sus ahorros y piensa: ‘Gastar menos de lo que gano y ahorrar todos los meses — ese es el primer paso hacia un buen futuro financiero.’",
      textPt: "Anderson entra no banco para abrir uma conta corrente. O gerente pergunta: ‘Que tipo de conta o senhor precisa?’ ‘Preciso de uma conta corrente e também quero saber sobre investimentos.’ Depois de assinar os documentos, recebe um cartão de débito e uma senha para usar no caixa eletrônico. No final do mês, confere o extrato da conta e faz um depósito. Também pergunta sobre as taxas de juros: ‘Qual é a taxa de juros de um empréstimo?’ O gerente explica as opções de renda fixa e renda variável, e comenta: ‘Quanto maior o risco, maior a possível rentabilidade.’ Anderson decide investir uma parte de suas economias e pensa: ‘Gastar menos do que ganho e poupar todo mês — esse é o primeiro passo para um bom futuro financeiro.’",
      vocabulary: [
        {category: "En el banco", items: [
          {es: "el banco", pt: "o banco"}, {es: "la agencia", pt: "a agência"}, {es: "la cuenta corriente", pt: "a conta corrente"},
          {es: "la cuenta de ahorro", pt: "a conta poupança"}, {es: "el gerente", pt: "o gerente"}, {es: "el extracto", pt: "o extrato"},
          {es: "la contraseña", pt: "a senha"}, {es: "el retiro", pt: "o saque"}, {es: "el depósito", pt: "o depósito"}, {es: "la transferencia", pt: "a transferência"}
        ]},
        {category: "Dinero", items: [
          {es: "el dinero", pt: "o dinheiro"}, {es: "la moneda", pt: "a moeda"}, {es: "el billete", pt: "a cédula / nota"},
          {es: "el dinero en efectivo", pt: "o dinheiro em espécie"}, {es: "el cambio / vuelto", pt: "o troco"}
        ]},
        {category: "Tarjetas y servicios", items: [
          {es: "la tarjeta de débito", pt: "o cartão de débito"}, {es: "la tarjeta de crédito", pt: "o cartão de crédito"},
          {es: "la factura", pt: "a fatura"}, {es: "el vencimiento", pt: "o vencimento"}, {es: "los intereses", pt: "os juros"},
          {es: "el préstamo", pt: "o empréstimo"}, {es: "el financiamiento", pt: "o financiamento"}
        ]},
        {category: "Inversiones y finanzas", items: [
          {es: "la inversión", pt: "o investimento"}, {es: "el inversor", pt: "o investidor"}, {es: "la rentabilidad", pt: "a rentabilidade"},
          {es: "el riesgo", pt: "o risco"}, {es: "el ahorro", pt: "a poupança"}, {es: "el presupuesto", pt: "o orçamento"}
        ]},
        {category: "Expresiones útiles", items: [
          {es: "¿Cuánto cuesta?", pt: "Quanto custa?"}, {es: "¿Puedo pagar con tarjeta?", pt: "Posso pagar com cartão?"},
          {es: "¿Cuál es la tasa de interés?", pt: "Qual é a taxa de juros?"}, {es: "Quiero invertir", pt: "Quero investir"},
          {es: "Necesito un préstamo", pt: "Preciso de um empréstimo"}
        ]}
      ],
      notes: [
        "'Cuenta corriente' es igual en portugués ('conta corrente'), pero cuidado con 'factura': en español significa 'fatura' (la cuenta a pagar), no 'nota fiscal'.",
        "En finanzas, 'renta fija' (menos riesgo, retorno más previsible) y 'renta variable' (más riesgo, más potencial de retorno) son los mismos términos usados en español que en portugués."
      ],
      exercises: [
        {
          type: "caso", icon: "🏦", stamp: "✅ CUENTA ABIERTA",
          scenario: "Quieres abrir una cuenta en un banco español y también preguntar sobre inversiones.",
          q: "Escribe una frase completa explicando lo que necesitas.",
          target: "Necesito abrir una cuenta corriente y quiero saber sobre inversiones.",
          altAnswers: ["Quiero abrir una cuenta y también invertir mis ahorros.", "Necesito una cuenta y información sobre inversión."]
        },
        {
          type: "caso", icon: "💳", stamp: "✅ CONSULTA HECHA",
          scenario: "Quieres pedir un préstamo pero primero necesitas saber la tasa de interés.",
          q: "Escribe una frase completa preguntando la tasa de interés del préstamo.",
          target: "¿Cuál es la tasa de interés de este préstamo?",
          altAnswers: ["¿Cuánto es el interés del préstamo?", "Antes de pedir el préstamo, ¿cuál es la tasa de interés?"]
        },
        {type: "speak", prompt: "¿Dónde guardas tu dinero y haces depósitos y retiros?", target: "En el banco.", altAnswers: ["el banco", "en el banco"]},
        {type: "speak", prompt: "¿Qué usas en vez de dinero en efectivo, para pagar con un clic?", target: "La tarjeta de débito.", altAnswers: ["la tarjeta de débito", "tarjeta de crédito"]},
        {type: "speak", prompt: "¿Qué documento muestra todas tus transacciones del mes?", target: "El extracto.", altAnswers: ["el extracto"]},
        {type: "speak", prompt: "¿Cómo se llama el dinero que le pides prestado a un banco?", target: "El préstamo.", altAnswers: ["el préstamo"]},
        {type: "speak", prompt: "¿Cómo se llama el dinero que guardas para el futuro?", target: "El ahorro.", altAnswers: ["el ahorro", "los ahorros"]},
        {type: "speak", prompt: "¿Qué palabra describe la posibilidad de perder dinero al invertir?", target: "El riesgo.", altAnswers: ["el riesgo"]},
        {type: "speak", prompt: "¿Cómo preguntas el precio de algo?", target: "¿Cuánto cuesta?", altAnswers: ["cuánto cuesta"]},
        {type: "speak", prompt: "¿Cómo preguntas si puedes pagar con tarjeta?", target: "¿Puedo pagar con tarjeta?", altAnswers: ["puedo pagar con tarjeta"]},
        {type: "speak", prompt: "¿Qué código secreto usas para entrar en el cajero automático?", target: "La contraseña.", altAnswers: ["la contraseña"]},
        {type: "speak", prompt: "Si quieres poner tu dinero a producir más dinero, ¿qué haces?", target: "Invertir.", altAnswers: ["invertir", "invierto"]},
        {type: "mc", q: "'Cartão de crédito', em espanhol, se dice...", options: ["la tarjeta de débito", "la tarjeta de crédito", "la factura", "el efectivo"], correct: 1},
        {type: "mc", q: "'Poupança' (a conta), em espanhol, se dice...", options: ["la cuenta corriente", "la cuenta de ahorro", "el préstamo", "la inversión"], correct: 1},
        {type: "fill", q: "'Empréstimo', em espanhol, se escribe: el ___", answer: "préstamo"},
        {type: "fill", q: "'Quero investir', em espanhol, se escribe: Quiero ___", answer: "invertir"}
      ]
    },
    {
      id: "er-falsos-cognatos", order: 24, title: "Falsos cognatos español-portugués", subtitle: "Palabras parecidas, ¡significados diferentes!",
      text: "Anderson, hablando español con un colega, dice sin querer: ‘¡Estoy muy embarazada por el error!’ Su colega se ríe: ‘embarazada’ en español no significa ‘envergonhado’, ¡significa que una mujer va a tener un bebé! Lo correcto es ‘avergonzado’. Otro día, en una tienda, pide: ‘Necesito una goma de borrar’ — porque en español, ‘borracho’ significa que bebiste demasiado alcohol, no tiene nada que ver con el objeto para borrar. En el restaurante, pide ‘ensalada’ en vez de ‘salada’, porque ‘salada’ en español simplemente significa ‘salgada’. Y cuando visita la oficina de un cliente, tiene cuidado: ‘oficina’ en español es donde trabajas, pero ‘escritorio’ es solo el mueble. Anderson aprende que estas palabras parecidas — los ‘falsos cognados’ — son las trampas más comunes entre el portugués y el español, y que prestar atención al significado real evita muchos malentendidos graciosos.",
      textPt: "Anderson, falando espanhol com um colega, diz sem querer: ‘Estou muito embarazada pelo erro!’ Seu colega ri: ‘embarazada’ em espanhol não significa ‘envergonhado’, significa que uma mulher vai ter um bebê! O certo é ‘avergonzado’. Outro dia, em uma loja, pede: ‘Preciso de uma borracha’ — porque em espanhol, ‘borracho’ significa que você bebeu álcool demais, não tem nada a ver com o objeto de apagar. No restaurante, pede ‘ensalada’ em vez de ‘salada’, porque ‘salada’ em espanhol simplesmente significa ‘salgada’. E quando visita o escritório de um cliente, toma cuidado: ‘oficina’ em espanhol é onde você trabalha, mas ‘escritorio’ é só o móvel. Anderson aprende que essas palavras parecidas — os ‘falsos cognatos’ — são as armadilhas mais comuns entre o português e o espanhol, e que prestar atenção ao significado real evita muitos mal-entendidos engraçados.",
      vocabulary: [
        {category: "Personas y sentimientos", items: [
          {es: "embarazada", pt: "grávida (NÃO é 'envergonhada' — isso é 'avergonzada')"},
          {es: "avergonzado(a)", pt: "envergonhado(a) (não confundir com 'embarazada')"},
          {es: "el apellido", pt: "o sobrenome (não é 'apelido', que é 'apodo')"},
          {es: "asistir (a una reunión)", pt: "comparecer / estar presente (não é 'assistir TV', que é 'ver')"},
          {es: "el pariente", pt: "o familiar"}
        ]},
        {category: "Objetos y comida", items: [
          {es: "el vaso", pt: "o copo (não é vaso de planta, que é 'jarrón' ou 'maceta')"},
          {es: "la taza", pt: "a xícara (não é 'taça', que é 'copa')"},
          {es: "el jamón", pt: "o presunto (o 'presunto' em espanhol significa 'suposto')"},
          {es: "borracho(a)", pt: "bêbado(a) (não é 'borracha', que é 'goma de borrar')"},
          {es: "salada (adjetivo)", pt: "salgada (a comida 'salada' é 'ensalada')"},
          {es: "la escoba", pt: "a vassoura (não é 'escova', que é 'cepillo')"}
        ]},
        {category: "Lugares y trabajo", items: [
          {es: "la oficina", pt: "o escritório (empresa) — não é 'oficina mecânica', que é 'taller'"},
          {es: "el escritorio", pt: "a mesa de trabalho (o móvel) — não é 'escritório' (empresa)"},
          {es: "un rato", pt: "um momento (não é 'rato'/camundongo, que é 'ratón')"},
          {es: "constipado(a)", pt: "resfriado(a) (não é intestino preso, que é 'estreñido')"}
        ]},
        {category: "Palabras engañosas", items: [
          {es: "largo", pt: "comprido / longo (não é 'largo', que em espanhol é 'ancho')"},
          {es: "el suceso", pt: "o acontecimento (não é 'sucesso', que é 'éxito')"},
          {es: "el pulpo", pt: "o polvo (o animal) — 'polvo' em espanhol é 'pó'"},
          {es: "el oso", pt: "o urso (não é 'osso', que é 'hueso')"},
          {es: "exquisito(a)", pt: "delicioso(a) / refinado(a) (não é 'esquisito', que é 'raro')"},
          {es: "lograr", pt: "conseguir / alcançar (não confundir com 'logo' — 'já', que em espanhol é 'ya')"}
        ]}
      ],
      notes: [
        "Los falsos cognados son la trampa más común entre hablantes de portugués y español: palabras casi idénticas, pero con significados totalmente diferentes — siempre vale la pena confirmar el significado real antes de usarlas en una situación formal.",
        "Otro par clásico fuera de esta lista: 'todavía' (español, = 'ainda') y 'todavia' (portugués, = 'porém/mas') — se escriben casi igual, pero cumplen funciones distintas en cada idioma."
      ],
      exercises: [
        {
          type: "caso", icon: "⚠️", stamp: "✅ TRAMPA EVITADA",
          scenario: "Quieres decir que te sientes avergonzado(a) por haber llegado tarde a una reunión, pero recuerdas que 'embarazada' no sirve para eso.",
          q: "Escribe una frase completa usando la palabra correcta para decir que estás avergonzado(a).",
          target: "Estoy muy avergonzado por haber llegado tarde.",
          altAnswers: ["Me siento avergonzado, llegué tarde a la reunión."]
        },
        {
          type: "caso", icon: "🤧", stamp: "✅ PALABRA CORRECTA",
          scenario: "Estás resfriado y quieres explicarle a un compañero español por qué no fuiste a trabajar.",
          q: "Escribe una frase completa usando la palabra correcta en español para 'resfriado'.",
          target: "No fui a trabajar porque estoy constipado.",
          altAnswers: ["Estoy constipado, por eso no fui a la oficina."]
        },
        {type: "speak", prompt: "¿Cómo se dice 'grávida' en español?", target: "Embarazada.", altAnswers: ["embarazada"]},
        {type: "speak", prompt: "¿Cómo se dice 'envergonhado', ya que 'embarazado' no sirve?", target: "Avergonzado.", altAnswers: ["avergonzado"]},
        {type: "speak", prompt: "¿Cómo se dice 'borracha' (el objeto para borrar) en español?", target: "La goma de borrar.", altAnswers: ["la goma", "goma de borrar"]},
        {type: "speak", prompt: "¿Qué significa 'borracho' en español?", target: "Que bebió mucho alcohol.", altAnswers: ["bêbado", "que bebió demasiado"]},
        {type: "speak", prompt: "¿Cómo se dice 'sobrenome' en español?", target: "El apellido.", altAnswers: ["el apellido"]},
        {type: "speak", prompt: "¿Cómo se dice 'copo', donde bebes agua, en español?", target: "El vaso.", altAnswers: ["el vaso"]},
        {type: "speak", prompt: "¿Qué significa 'taza' en español?", target: "Xícara, para tomar café.", altAnswers: ["xícara"]},
        {type: "speak", prompt: "¿Cómo se dice 'resfriado' en español?", target: "Constipado.", altAnswers: ["constipado", "resfriado"]},
        {type: "speak", prompt: "¿Cómo se dice 'escritório' (empresa, donde trabajas) en español?", target: "La oficina.", altAnswers: ["la oficina"]},
        {type: "speak", prompt: "Entonces, ¿qué es 'escritorio' en español?", target: "Es el mueble, la mesa de trabajo.", altAnswers: ["el mueble", "la mesa"]},
        {type: "mc", q: "'Vaso', em espanhol, significa...", options: ["vaso de planta", "copo", "taça", "garrafa"], correct: 1},
        {type: "mc", q: "'Salada' (adjetivo), em espanhol, significa...", options: ["a comida salada (prato)", "salgada", "doce", "fria"], correct: 1},
        {type: "fill", q: "'Sucesso', em espanhol, se escribe: el ___", answer: "éxito"},
        {type: "fill", q: "'Vassoura', em espanhol, se escribe: la ___", answer: "escoba"}
      ]
    },
    {
      id: "er-supermercado", order: 25, title: "Supermercado, carnicería y panadería", subtitle: "De compras: productos, secciones y frases del súper",
      text: "Antes de ir al supermercado, Anderson hace una lista de compras. Al llegar, coge un carrito y recorre los pasillos buscando arroz, aceite y huevos. En la sección de frutas y verduras, elige manzanas, plátanos, zanahorias y una lechuga fresca. Después va a la carnicería y pide: ‘Necesito medio kilo de carne de res, por favor, y también unas pechugas de pollo.’ El carnicero le pregunta: ‘¿Algo más? Tenemos una oferta en el tocino.’ Anderson aprovecha la promoción y añade un paquete a su carrito. En la caja, mientras paga, pregunta: ‘¿Acepta tarjeta de crédito?’ ‘Sí, claro’, responde la cajera, entregándole el recibo. De camino a casa, revisa su lista una última vez: todo comprado, sin olvidar nada — y, además, ¡consiguió varias ofertas!",
      textPt: "Antes de ir ao supermercado, Anderson faz uma lista de compras. Ao chegar, pega um carrinho e percorre os corredores procurando arroz, óleo e ovos. Na seção de frutas e verduras, escolhe maçãs, bananas, cenouras e uma alface fresca. Depois vai ao açougue e pede: ‘Preciso de meio quilo de carne bovina, por favor, e também uns peitos de frango.’ O açougueiro pergunta: ‘Mais alguma coisa? Temos uma promoção no bacon.’ Anderson aproveita a promoção e acrescenta um pacote ao carrinho. No caixa, enquanto paga, pergunta: ‘Vocês aceitam cartão de crédito?’ ‘Sim, claro’, responde a caixa, entregando o recibo. No caminho de casa, revisa sua lista uma última vez: tudo comprado, sem esquecer nada — e ainda por cima, conseguiu várias ofertas!",
      vocabulary: [
        {category: "En el supermercado", items: [
          {es: "el supermercado", pt: "o supermercado"}, {es: "el carrito de compras", pt: "o carrinho de compras"},
          {es: "el pasillo", pt: "o corredor"}, {es: "la estantería", pt: "a prateleira"}, {es: "la caja", pt: "o caixa (pagamento)"},
          {es: "la oferta / promoción", pt: "a oferta / promoção"}, {es: "el recibo", pt: "a nota fiscal"}, {es: "la lista de compras", pt: "a lista de compras"}
        ]},
        {category: "En la carnicería", items: [
          {es: "la carne", pt: "a carne"}, {es: "la carne de res", pt: "a carne bovina"}, {es: "la carne de cerdo", pt: "a carne suína"},
          {es: "el pollo", pt: "o frango"}, {es: "el pescado", pt: "o peixe"}, {es: "la salchicha", pt: "a linguiça"},
          {es: "el tocino", pt: "o bacon"}, {es: "el jamón", pt: "o presunto"}, {es: "el filete", pt: "o filé / bife"}
        ]},
        {category: "Frutas y verduras", items: [
          {es: "la manzana", pt: "a maçã"}, {es: "el plátano", pt: "a banana"}, {es: "la naranja", pt: "a laranja"},
          {es: "la fresa", pt: "o morango"}, {es: "la lechuga", pt: "a alface"}, {es: "la zanahoria", pt: "a cenoura"},
          {es: "el pimiento", pt: "o pimentão"}, {es: "la cebolla", pt: "a cebola"}
        ]},
        {category: "Otros productos", items: [
          {es: "el arroz", pt: "o arroz"}, {es: "el aceite", pt: "o óleo"}, {es: "el yogur", pt: "o iogurte"},
          {es: "los huevos", pt: "os ovos"}, {es: "la conserva", pt: "a conserva"}, {es: "el condimento", pt: "o tempero"}
        ]},
        {category: "Frases útiles", items: [
          {es: "¿Dónde está...?", pt: "Onde está...?"}, {es: "¿Cuánto cuesta?", pt: "Quanto custa?"},
          {es: "¿Acepta tarjeta?", pt: "Aceita cartão?"}, {es: "Necesito ayuda", pt: "Preciso de ajuda"},
          {es: "¡Está caro / barato!", pt: "Está caro / barato!"}
        ]}
      ],
      notes: [
        "Esta lección complementa la de 'La panadería' (que cubre al panadero, el pan y los dulces) — aquí el foco es el supermercado en general, la carnicería y las frutas y verduras.",
        "'El filete' varía según el país: en España se usa mucho para carne o pescado en lonjas finas; en varios países de Latinoamérica también se dice 'el bistec', muy parecido al portugués 'bife'."
      ],
      exercises: [
        {
          type: "caso", icon: "🛒", stamp: "✅ COMPRA HECHA",
          scenario: "Estás en la caja del supermercado y quieres saber si aceptan tarjeta de crédito.",
          q: "Escribe una frase completa preguntando si aceptan tarjeta.",
          target: "¿Acepta tarjeta de crédito, por favor?",
          altAnswers: ["¿Puedo pagar con tarjeta?", "¿Aceptan tarjeta aquí?"]
        },
        {
          type: "caso", icon: "🥩", stamp: "✅ PEDIDO EN LA CARNICERÍA",
          scenario: "En la carnicería quieres pedir medio kilo de carne de res para el asado del fin de semana.",
          q: "Escribe una frase completa pidiendo la carne.",
          target: "Necesito medio kilo de carne de res, por favor.",
          altAnswers: ["¿Me da medio kilo de carne de res?", "Quiero medio kilo de carne para el asado."]
        },
        {type: "speak", prompt: "¿Qué usas para llevar los productos mientras compras en el supermercado?", target: "El carrito de compras.", altAnswers: ["el carrito", "carrito de compras"]},
        {type: "speak", prompt: "¿Dónde pagas al final de las compras?", target: "En la caja.", altAnswers: ["la caja", "en la caja"]},
        {type: "speak", prompt: "¿Cómo se llama una rebaja de precio en el supermercado?", target: "La oferta.", altAnswers: ["la oferta", "la promoción"]},
        {type: "speak", prompt: "¿Qué carne viene de la vaca?", target: "La carne de res.", altAnswers: ["la carne de res"]},
        {type: "speak", prompt: "¿Qué carne viene del cerdo?", target: "La carne de cerdo.", altAnswers: ["la carne de cerdo"]},
        {type: "speak", prompt: "¿Qué fruta amarilla y alargada es muy popular en Brasil?", target: "El plátano.", altAnswers: ["el plátano", "la banana"]},
        {type: "speak", prompt: "¿Qué verdura naranja usas en la sopa?", target: "La zanahoria.", altAnswers: ["la zanahoria"]},
        {type: "speak", prompt: "¿Cómo preguntas el precio de un producto?", target: "¿Cuánto cuesta?", altAnswers: ["cuánto cuesta"]},
        {type: "speak", prompt: "Si algo tiene un precio muy alto, ¿cómo se dice?", target: "¡Está caro!", altAnswers: ["está caro", "muy caro"]},
        {type: "speak", prompt: "¿Qué documento te dan después de pagar, con todos los productos comprados?", target: "El recibo.", altAnswers: ["el recibo"]},
        {type: "mc", q: "'Açougue', em espanhol, se dice...", options: ["la panadería", "la carnicería", "el supermercado", "la frutería"], correct: 1},
        {type: "mc", q: "'Bacon', em espanhol, se dice...", options: ["el jamón", "el tocino", "la salchicha", "el filete"], correct: 1},
        {type: "fill", q: "'Carrinho de compras', em espanhol, se escribe: el ___ de compras", answer: "carrito"},
        {type: "fill", q: "'Promoção', em espanhol, se escribe: la ___", answer: "oferta"}
      ]
    }
,
    {
      id: "er-salon-belleza", order: 26, title: "El salón de belleza", subtitle: "Peluquería, uñas y maquillaje",
      text: "Anderson llama al salón de belleza para agendar una cita para su esposa: ‘Quiero agendar una cita para corte y tinte, ¿tiene disponibilidad para el sábado?’ La recepcionista confirma el horario. El sábado, mientras su esposa se hace las mechas y una manicura, Anderson aprovecha para cortarse el cabello también. La peluquera le pregunta: ‘¿Cómo lo desea?’ ‘Corto a los lados, por favor.’ Al terminar, aplica un poco de gel y le muestra el resultado en el espejo. Mientras tanto, la esteticista atiende a su esposa con una limpieza de piel y le recomienda un buen protector solar para el día a día. Al salir, los dos están felices: ‘¡Quedó perfecto! Me encantó el resultado’, dice la esposa de Anderson, mirándose al espejo una última vez. ‘¿Cuánto cuesta todo?’, pregunta Anderson en la caja, sacando su tarjeta para pagar.",
      textPt: "Anderson liga para o salão de beleza para agendar um horário para sua esposa: ‘Quero agendar um horário para corte e tintura, tem disponibilidade para o sábado?’ A recepcionista confirma o horário. No sábado, enquanto sua esposa faz as mechas e uma manicure, Anderson aproveita para cortar o cabelo também. A cabeleireira pergunta: ‘Como o senhor deseja?’ ‘Curto nas laterais, por favor.’ Ao terminar, aplica um pouco de gel e mostra o resultado no espelho. Enquanto isso, a esteticista atende sua esposa com uma limpeza de pele e recomenda um bom protetor solar para o dia a dia. Ao sair, os dois estão felizes: ‘Ficou perfeito! Amei o resultado’, diz a esposa de Anderson, se olhando no espelho uma última vez. ‘Quanto custa tudo?’, pergunta Anderson no caixa, tirando o cartão para pagar.",
      vocabulary: [
        {category: "Profesionales y cita", items: [
          {es: "el peluquero / la peluquera", pt: "o cabeleireiro / a cabeleireira"}, {es: "el/la manicurista", pt: "o/a manicure"},
          {es: "el maquillador / la maquilladora", pt: "o maquiador / a maquiadora"}, {es: "el/la esteticista", pt: "o/a esteticista"},
          {es: "quiero agendar una cita", pt: "quero agendar um horário"}, {es: "¿tiene disponibilidad?", pt: "tem disponibilidade?"}
        ]},
        {category: "Cabello y color", items: [
          {es: "el corte", pt: "o corte"}, {es: "el peinado", pt: "o penteado"}, {es: "el tinte / la coloración", pt: "a tintura / a coloração"},
          {es: "las mechas", pt: "as mechas"}, {es: "el alisado", pt: "o alisamento"},
          {es: "rubio(a) / moreno(a) / castaño(a) / pelirrojo(a) / canoso(a)", pt: "loiro(a) / moreno(a) / castanho(a) / ruivo(a) / grisalho(a)"}
        ]},
        {category: "Tratamientos capilares", items: [
          {es: "el champú", pt: "o shampoo"}, {es: "el acondicionador", pt: "o condicionador"},
          {es: "la mascarilla capilar", pt: "a máscara capilar"}, {es: "el aceite capilar", pt: "o óleo capilar"},
          {es: "la caída del cabello", pt: "a queda de cabelo"}
        ]},
        {category: "Uñas y maquillaje", items: [
          {es: "la manicura", pt: "a manicure (serviço)"}, {es: "la pedicura", pt: "a pedicure"}, {es: "el esmalte", pt: "o esmalte"},
          {es: "la base", pt: "a base"}, {es: "el corrector", pt: "o corretivo"}, {es: "la sombra de ojos", pt: "a sombra"}, {es: "el labial", pt: "o batom"}
        ]},
        {category: "Rostro y otros servicios", items: [
          {es: "la limpieza de piel", pt: "a limpeza de pele"}, {es: "la exfoliación", pt: "a esfoliação"},
          {es: "el protector solar", pt: "o protetor solar"}, {es: "la depilación", pt: "a depilação"},
          {es: "las cejas", pt: "as sobrancelhas"}, {es: "el masaje", pt: "a massagem"}
        ]},
        {category: "Frases útiles", items: [
          {es: "¿Cuánto cuesta?", pt: "Quanto custa?"}, {es: "¿Tiene disponibilidad?", pt: "Tem disponibilidade?"},
          {es: "¡Quedó perfecto!", pt: "Ficou perfeito!"}, {es: "¡Me encantó el resultado!", pt: "Amei o resultado!"}
        ]}
      ],
      notes: [
        "'Manicura' puede referirse tanto al servicio (hacerse las uñas) como a la profesional que lo hace — en algunos países se prefiere 'manicurista' para la persona, para evitar confusión.",
        "'¿Cómo lo desea?' es la pregunta clásica del peluquero o barbero antes de empezar — responder con detalles ('corto a los lados', 'solo las puntas') evita sorpresas al final."
      ],
      exercises: [
        {
          type: "caso", icon: "💇", stamp: "✅ CITA AGENDADA",
          scenario: "Quieres agendar una cita en el salón de belleza para cortarte el cabello el sábado.",
          q: "Escribe una frase completa pidiendo la cita.",
          target: "Quiero agendar una cita para el sábado, para cortarme el cabello.",
          altAnswers: ["¿Tiene disponibilidad para el sábado? Quiero un corte.", "Necesito agendar un corte de cabello para el sábado."]
        },
        {
          type: "caso", icon: "💅", stamp: "✅ SERVICIO ELEGIDO",
          scenario: "Estás en el salón y quieres pedir una manicura y también preguntar el precio.",
          q: "Escribe una frase completa pidiendo la manicura y preguntando el precio.",
          target: "Quiero una manicura, por favor. ¿Cuánto cuesta?",
          altAnswers: ["¿Puedo hacerme una manicura? ¿Cuánto cuesta?", "Necesito una manicura, ¿cuál es el precio?"]
        },
        {type: "speak", prompt: "¿Quién te corta el cabello en la peluquería?", target: "El peluquero / la peluquera.", altAnswers: ["el peluquero", "la peluquera"]},
        {type: "speak", prompt: "¿Cómo pides una cita en el salón?", target: "Quiero agendar una cita.", altAnswers: ["quiero agendar una cita", "agendar una cita"]},
        {type: "speak", prompt: "¿Qué color de cabello tiene alguien con el pelo amarillo claro?", target: "Rubio.", altAnswers: ["rubio", "es rubio"]},
        {type: "speak", prompt: "¿Qué color de cabello tiene alguien con canas?", target: "Canoso.", altAnswers: ["canoso"]},
        {type: "speak", prompt: "¿Qué usas para lavar el cabello?", target: "El champú.", altAnswers: ["el champú"]},
        {type: "speak", prompt: "¿Quién te hace las uñas?", target: "La manicurista.", altAnswers: ["la manicurista"]},
        {type: "speak", prompt: "¿Qué te pones en los labios como maquillaje?", target: "El labial.", altAnswers: ["el labial"]},
        {type: "speak", prompt: "¿Qué debes usar todos los días para proteger la piel del sol?", target: "El protector solar.", altAnswers: ["el protector solar"]},
        {type: "speak", prompt: "Si te encantó el resultado de tu corte, ¿qué dices?", target: "¡Me encantó el resultado!", altAnswers: ["me encantó el resultado", "quedó perfecto"]},
        {type: "speak", prompt: "¿Cómo preguntas si hay horario disponible?", target: "¿Tiene disponibilidad?", altAnswers: ["tiene disponibilidad"]},
        {type: "speak", prompt: "¿Qué te hacen en la cara para quitar las células muertas?", target: "La exfoliación.", altAnswers: ["la exfoliación", "exfoliación"]},
        {type: "mc", q: "'Sobrancelha', em espanhol, se dice...", options: ["las pestañas", "las cejas", "el cabello", "la barba"], correct: 1},
        {type: "mc", q: "'Esmalte' (de unhas), em espanhol, se dice...", options: ["el esmalte", "la base", "el corrector", "el rubor"], correct: 0},
        {type: "fill", q: "'Corte de cabelo', em espanhol, se escribe: el ___ de cabello", answer: "corte"},
        {type: "fill", q: "'Quero agendar um horário', em espanhol, se escribe: Quiero ___ una cita", answer: "agendar"}
      ]
    },
    {
      id: "er-barberia", order: 27, title: "En la barbería", subtitle: "Corte, barba y afeitado",
      text: "Anderson entra en la barbería para cortarse el cabello antes de un viaje de trabajo. El barbero le pregunta: ‘¿Cómo lo desea?’ ‘Corto a los lados y un poco más largo arriba, por favor. Y recorte la barba también.’ El barbero pone la capa, toma las tijeras y empieza a cortar con cuidado los laterales y la nuca. Después usa la máquina de cortar para hacer un degradado suave. Antes de afeitar la barba, aplica espuma y usa la navaja con calma. Al final, seca el cabello, lo peina y pregunta: ‘¿Le gustó el corte?’ Anderson se mira al espejo, sonríe y responde: ‘¡Quedó perfecto! Justo lo que necesitaba.’ El barbero termina con un poco de gel y una loción after-shave. Antes de irse, Anderson agradece: ‘Muchas gracias, quedé muy contento con el resultado.’",
      textPt: "Anderson entra na barbearia para cortar o cabelo antes de uma viagem de trabalho. O barbeiro pergunta: ‘Como o senhor deseja?’ ‘Curto nas laterais e um pouco mais comprido em cima, por favor. E apare a barba também.’ O barbeiro coloca a capa, pega a tesoura e começa a cortar com cuidado as laterais e a nuca. Depois usa a máquina de cortar para fazer um degradê suave. Antes de fazer a barba, aplica espuma e usa a navalha com calma. No final, seca o cabelo, penteia e pergunta: ‘Gostou do corte?’ Anderson se olha no espelho, sorri e responde: ‘Ficou perfeito! Exatamente o que eu precisava.’ O barbeiro termina com um pouco de gel e uma loção pós-barba. Antes de sair, Anderson agradece: ‘Muito obrigado, fiquei muito satisfeito com o resultado.’",
      vocabulary: [
        {category: "En la barbería", items: [
          {es: "el barbero", pt: "o barbeiro"}, {es: "el cliente", pt: "o cliente"}, {es: "la barbería", pt: "a barbearia"},
          {es: "la silla", pt: "a cadeira"}, {es: "el espejo", pt: "o espelho"}, {es: "la capa", pt: "a capa"}
        ]},
        {category: "Herramientas y productos", items: [
          {es: "las tijeras", pt: "a tesoura"}, {es: "la máquina de cortar", pt: "a máquina de cortar"}, {es: "el peine", pt: "o pente"},
          {es: "la navaja", pt: "a navalha"}, {es: "el gel", pt: "o gel"}, {es: "la espuma de afeitar", pt: "a espuma de barbear"},
          {es: "la loción after-shave", pt: "a loção pós-barba"}
        ]},
        {category: "Cortes de cabello", items: [
          {es: "el corte corto / medio / largo", pt: "o corte curto / médio / longo"}, {es: "el degradado (fade)", pt: "o degradê"},
          {es: "el copete", pt: "o topete"}, {es: "el corte al ras", pt: "o corte buzz cut"}, {es: "la raya lateral", pt: "o risco lateral"}
        ]},
        {category: "Barba y bigote", items: [
          {es: "la barba", pt: "a barba"}, {es: "el bigote", pt: "o bigode"}, {es: "recortar la barba", pt: "aparar a barba"},
          {es: "afeitar", pt: "fazer a barba / barbear"},
          {es: "la barba completa / corta / larga", pt: "a barba cheia / curta / longa"}
        ]},
        {category: "Acciones del barbero", items: [
          {es: "cortar el cabello", pt: "cortar o cabelo"}, {es: "recortar", pt: "aparar"}, {es: "lavar el cabello", pt: "lavar o cabelo"},
          {es: "secar", pt: "secar"}, {es: "peinar", pt: "pentear"}, {es: "finalizar", pt: "finalizar"}
        ]},
        {category: "Expresiones útiles", items: [
          {es: "¿Cómo lo desea?", pt: "Como o senhor deseja?"}, {es: "Solo las puntas", pt: "Só as pontas"},
          {es: "Más corto, por favor", pt: "Mais curto, por favor"}, {es: "Déjelo igual", pt: "Deixar do jeito"},
          {es: "¿Le gustó el corte?", pt: "Ficou bom?"}
        ]}
      ],
      notes: [
        "'Degradado' es el término más usado en España para lo que en portugués se llama 'degradê' o en inglés 'fade' — un corte con transición suave entre lo corto y lo largo.",
        "'Afeitar' se usa tanto para la barba como para el cuerpo en general; 'recortar la barba' es más específico para arreglar sin quitarla del todo."
      ],
      exercises: [
        {
          type: "caso", icon: "💈", stamp: "✅ CORTE PEDIDO",
          scenario: "Llegas a la barbería y el barbero te pregunta cómo quieres el corte.",
          q: "Escribe una frase completa explicando cómo quieres el corte de cabello.",
          target: "Quiero el corte corto a los lados y un poco más largo arriba.",
          altAnswers: ["Corto a los lados, por favor, y deje un poco más largo arriba.", "Quiero un degradado, corto en los laterales."]
        },
        {
          type: "caso", icon: "🪒", stamp: "✅ BARBA RECORTADA",
          scenario: "Además del corte de cabello, también quieres que te recorten la barba.",
          q: "Escribe una frase completa pidiendo que te recorten la barba también.",
          target: "¿Puede recortar la barba también, por favor?",
          altAnswers: ["Quiero recortar la barba también.", "Después del corte, ¿puede afeitar un poco la barba?"]
        },
        {type: "speak", prompt: "¿Quién te corta el cabello en la barbería?", target: "El barbero.", altAnswers: ["el barbero"]},
        {type: "speak", prompt: "¿Qué usas para cortar el cabello con precisión, con dos hojas?", target: "Las tijeras.", altAnswers: ["las tijeras"]},
        {type: "speak", prompt: "¿Qué máquina usa el barbero para hacer un degradado?", target: "La máquina de cortar.", altAnswers: ["la máquina de cortar", "la máquina"]},
        {type: "speak", prompt: "¿Qué usas para afeitar la barba con mucho cuidado?", target: "La navaja.", altAnswers: ["la navaja"]},
        {type: "speak", prompt: "¿Cómo se llama un corte con transición suave de corto a largo?", target: "El degradado.", altAnswers: ["el degradado", "el fade"]},
        {type: "speak", prompt: "¿Qué le preguntas al barbero antes de empezar?", target: "¿Cómo lo desea?", altAnswers: ["cómo lo desea"]},
        {type: "speak", prompt: "Si solo quieres cortar las puntas, ¿qué pides?", target: "Solo las puntas, por favor.", altAnswers: ["solo las puntas"]},
        {type: "speak", prompt: "Si quieres el pelo más corto, ¿qué dices?", target: "Más corto, por favor.", altAnswers: ["más corto"]},
        {type: "speak", prompt: "Si no quieres cambiar nada, ¿qué dices?", target: "Déjelo igual.", altAnswers: ["déjelo igual"]},
        {type: "speak", prompt: "Si te encantó el corte, ¿qué respondes cuando te preguntan?", target: "¡Quedó perfecto!", altAnswers: ["quedó perfecto"]},
        {type: "speak", prompt: "¿Qué producto usa el barbero en la piel después de afeitar?", target: "La loción after-shave.", altAnswers: ["la loción", "after-shave"]},
        {type: "mc", q: "'Barba cheia', em espanhol, se dice...", options: ["barba rala", "barba completa", "barba media", "sin barba"], correct: 1},
        {type: "mc", q: "'Máquina de cortar' (el cabello), em português, é...", options: ["tesoura", "navalha", "máquina de cortar", "pente"], correct: 2},
        {type: "fill", q: "'Corte curto', em espanhol, se escribe: el corte ___", answer: "corto"},
        {type: "fill", q: "'Aparar a barba', em espanhol, se escribe: ___ la barba", answer: "recortar"}
      ]
    }

  ]
};
