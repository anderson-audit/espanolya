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
   Não há prova neste módulo (é prática livre, como Secretos/Tiempos).
   Segue o mesmo schema dos demais content-*.js.
   ========================================================================== */

const LEVEL_ESTUDIORAPIDO = {
  id: "estudiorapido",
  name: "Estudio Rápido",
  icon: "🖼️",
  colorFrom: "#2E7D32",
  colorTo: "#1565C0",
  description: "Módulo bônus 100% visual: olhe a imagem, escute uma pergunta real sobre o assunto e responda falando em espanhol — o app escuta e corrige sua resposta e pronúncia na hora. Vocabulário de casa, cafeteria, padaria, auditoria e aeroporto.",
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
        {type: "speak", prompt: "¿Quién revisa los procesos y documentos de una empresa para verificar que todo esté correcto?", target: "El auditor.", altAnswers: ["el auditor", "la auditora"]},
        {type: "speak", prompt: "Al terminar la auditoría, ¿qué documento entregas con los resultados?", target: "El informe.", altAnswers: ["el informe"]},
        {type: "speak", prompt: "¿Dónde guardas los documentos de la auditoría, organizados?", target: "En la carpeta.", altAnswers: ["la carpeta", "En la carpeta"]},
        {type: "speak", prompt: "¿Qué usas para verificar, punto por punto, si cada requisito se cumple?", target: "La lista de verificación.", altAnswers: ["la lista de verificación", "el checklist"]},
        {type: "speak", prompt: "¿Qué pones al final de un documento para validarlo oficialmente?", target: "La firma.", altAnswers: ["la firma"]},
        {type: "speak", prompt: "¿Qué documento planifica las fechas y actividades de la auditoría?", target: "El cronograma.", altAnswers: ["el cronograma"]},
        {type: "speak", prompt: "¿Qué usas para mostrar datos numéricos de forma visual?", target: "El gráfico.", altAnswers: ["el gráfico"]},
        {type: "speak", prompt: "¿Cómo se llama la organización que estás auditando?", target: "La empresa.", altAnswers: ["la empresa"]},
        {type: "speak", prompt: "¿Cómo se llama un requisito oficial que la empresa debe cumplir, como una norma ISO?", target: "La norma.", altAnswers: ["la norma"]},
        {type: "speak", prompt: "¿Cómo se llama la posibilidad de que algo salga mal en un proceso?", target: "El riesgo.", altAnswers: ["el riesgo"]},
        {type: "speak", prompt: "¿Cómo se llama un problema real que encuentras durante la auditoría?", target: "El hallazgo.", altAnswers: ["el hallazgo"]},
        {type: "speak", prompt: "¿Cómo se llama el documento oficial que certifica que una empresa cumple una norma?", target: "La certificación.", altAnswers: ["la certificación"]},
        {type: "speak", prompt: "Antes de empezar, ¿qué documento define qué se va a auditar y cuándo?", target: "El plan de auditoría.", altAnswers: ["el plan de auditoría"]},
        {type: "speak", prompt: "¿Cómo se llama lo que está incluido dentro de la auditoría?", target: "El alcance.", altAnswers: ["el alcance"]},
        {type: "speak", prompt: "Cuando todo cumple con la norma, decimos que hay...", target: "Conformidad.", altAnswers: ["la conformidad"]},
        {type: "speak", prompt: "Cuando algo NO cumple con la norma, decimos que hay...", target: "No conformidad.", altAnswers: ["la no conformidad", "una no conformidad"]},
        {type: "speak", prompt: "Después de encontrar un problema, ¿qué se implementa para corregirlo?", target: "La acción correctiva.", altAnswers: ["la acción correctiva"]},
        {type: "speak", prompt: "En vez de revisar el 100% de los documentos, el auditor revisa solo una parte. ¿Cómo se llama eso?", target: "El muestreo.", altAnswers: ["el muestreo"]},
        {type: "speak", prompt: "¿Cómo se llama el proceso de mejorar poco a poco, siempre?", target: "La mejora continua.", altAnswers: ["la mejora continua"]},
        {type: "speak", prompt: "¿Cómo se llama el auditor que dirige y coordina todo el equipo?", target: "El auditor líder.", altAnswers: ["el auditor líder", "auditor líder"]},
        {type: "speak", prompt: "¿Cómo se llama la empresa o el área que está siendo auditada?", target: "El auditado.", altAnswers: ["el auditado"]},
        {type: "speak", prompt: "Cuando varios auditores trabajan juntos, ¿cómo se llama el grupo?", target: "El equipo auditor.", altAnswers: ["el equipo auditor"]},
        {type: "speak", prompt: "¿Cómo se llama la reunión al INICIO de la auditoría, donde se explica el plan?", target: "La reunión de apertura.", altAnswers: ["la reunión de apertura"]},
        {type: "speak", prompt: "¿Cómo se llama la reunión al FINAL, donde se presentan los resultados?", target: "La reunión de cierre.", altAnswers: ["la reunión de cierre"]},
        {type: "speak", prompt: "¿Cómo se llama la conversación donde el auditor hace preguntas a un empleado?", target: "La entrevista.", altAnswers: ["la entrevista"]},
        {type: "speak", prompt: "Además de preguntar, el auditor mira cómo se hace el trabajo en la práctica. ¿Cómo se llama eso?", target: "La observación.", altAnswers: ["la observación"]},
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
        {type: "speak", prompt: "¿En qué medio de transporte viajas por el aire?", target: "En el avión.", altAnswers: ["el avión", "En el avión"]},
        {type: "speak", prompt: "¿Dónde pones tu ropa cuando viajas?", target: "En la maleta.", altAnswers: ["la maleta", "En la maleta"]},
        {type: "speak", prompt: "¿Qué documento necesitas para viajar a otro país?", target: "El pasaporte.", altAnswers: ["el pasaporte"]},
        {type: "speak", prompt: "¿Qué necesitas para poder subir al avión?", target: "La tarjeta de embarque.", altAnswers: ["la tarjeta de embarque"]},
        {type: "speak", prompt: "¿Por dónde entras al avión, según el número indicado en tu tarjeta?", target: "Por la puerta de embarque.", altAnswers: ["la puerta de embarque", "Por la puerta de embarque"]},
        {type: "speak", prompt: "¿Dónde miras para saber si tu vuelo está a tiempo o retrasado?", target: "En la pantalla de salidas.", altAnswers: ["la pantalla de salidas"]},
        {type: "speak", prompt: "Después de aterrizar, ¿dónde recoges tu maleta?", target: "En la cinta transportadora.", altAnswers: ["la cinta transportadora"]},
        {type: "speak", prompt: "¿Dónde revisan que no llevas objetos prohibidos?", target: "En el control de seguridad.", altAnswers: ["el control de seguridad"]},
        {type: "speak", prompt: "¿Dónde revisan tu pasaporte al entrar a otro país?", target: "En la aduana.", altAnswers: ["la aduana"]},
        {type: "speak", prompt: "¿Dónde esperas antes de que llamen a tu vuelo?", target: "En la sala de espera.", altAnswers: ["la sala de espera"]},
        {type: "speak", prompt: "¿Cómo se llama la bolsa pequeña que llevas contigo dentro del avión?", target: "El equipaje de mano.", altAnswers: ["el equipaje de mano"]},
        {type: "speak", prompt: "Hoy en día, ¿cómo se llama el billete que llevas en el móvil, sin papel?", target: "El billete electrónico.", altAnswers: ["el billete electrónico"]},
        {type: "speak", prompt: "¿Qué código usas para identificar tu reserva del vuelo?", target: "El código de reserva.", altAnswers: ["el código de reserva"]},
        {type: "speak", prompt: "¿Cómo se llama la empresa que opera el vuelo, como Iberia o Vueling?", target: "La aerolínea.", altAnswers: ["la aerolínea"]},
        {type: "speak", prompt: "Cuando entregas tu maleta grande antes de volar, se llama equipaje...", target: "Facturado.", altAnswers: ["el equipaje facturado", "equipaje facturado"]},
        {type: "speak", prompt: "Si tu maleta pesa más de lo permitido, tienes que pagar por el...", target: "Exceso de equipaje.", altAnswers: ["el exceso de equipaje"]},
        {type: "speak", prompt: "Cuando hay mucha gente esperando en orden para el control de seguridad, se forma una...", target: "Fila.", altAnswers: ["la fila"]},
        {type: "speak", prompt: "¿Dónde entregas tu maleta y recibes la tarjeta de embarque?", target: "En el mostrador.", altAnswers: ["el mostrador"]},
        {type: "speak", prompt: "Si tu vuelo no sale a la hora prevista, ¿qué tiene el vuelo?", target: "Tiene un retraso.", altAnswers: ["el retraso", "un retraso"]},
        {type: "speak", prompt: "¿Dónde te sientas dentro del avión?", target: "En el asiento.", altAnswers: ["el asiento", "En el asiento"]},
        {type: "speak", prompt: "¿Qué te pones antes de despegar, por seguridad?", target: "El cinturón de seguridad.", altAnswers: ["el cinturón de seguridad"]},
        {type: "speak", prompt: "¿Cómo se llama el grupo de personas que trabaja dentro del avión?", target: "La tripulación.", altAnswers: ["la tripulación"]},
        {type: "speak", prompt: "¿Quién conduce el avión?", target: "El piloto.", altAnswers: ["el piloto"]},
        {type: "speak", prompt: "¿Cómo se llama el momento en que el avión sube y deja el suelo?", target: "El despegue.", altAnswers: ["el despegue"]},
        {type: "speak", prompt: "¿Cómo se llama el momento en que el avión toca el suelo al final del vuelo?", target: "El aterrizaje.", altAnswers: ["el aterrizaje"]},
        {type: "speak", prompt: "Después de aterrizar, ¿qué haces con tu maleta grande, en la cinta transportadora?", target: "La recogida de equipaje.", altAnswers: ["recojo el equipaje", "la recogida de equipaje"]},
        {type: "speak", prompt: "Al salir del aeropuerto, ¿qué transporte tomas para llegar rápido a la ciudad?", target: "El taxi.", altAnswers: ["el taxi", "un taxi"]},
        {type: "mc", q: "'O painel de partidas', em espanhol, é...", options: ["la pantalla de salidas", "la torre de control", "la pista de aterrizaje", "la aduana"], correct: 0},
        {type: "mc", q: "El grupo de personas que trabaja dentro del avión (piloto, auxiliares...) se llama...", options: ["la aerolínea", "la tripulación", "el mostrador", "la aduana"], correct: 1},
        {type: "fill", q: "'A bagagem de mão' em espanhol se escreve: el equipaje de ___", answer: "mano"},
        {type: "fill", q: "'O momento em que o avião sobe e deixa o solo' se escreve: el ___", answer: "despegue"}
      ]
    }
  ]
};
