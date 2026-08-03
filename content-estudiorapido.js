/* ==========================================================================
   EspañolYa! — Conteúdo: Módulo BÔNUS · ESTUDO RÁPIDO (imagens + voz)
   Fonte: 6 infográficos de vocabulário fornecidos por Anderson Santana
   (¿Qué hora es?, La habitación, La cocina, El baño, La cafetería,
   La panadería) + 2 infográficos próprios do EspañolYa!, no mesmo estilo,
   para os temas Auditoría e Aeropuerto (ligados à Quallisi e a viagens).

   Cada lição mostra uma imagem grande (ver LESSON_IMAGES em app.js) com o
   vocabulário rotulado, e os exercícios são todos do tipo "speak": o app
   PERGUNTA (em texto + botão de ouvir) e o aluno RESPONDE FALANDO — o
   reconhecimento de voz do navegador corrige a pronúncia automaticamente.
   Não há prova neste módulo (é prática livre, como Secretos/Tiempos).
   Segue o mesmo schema dos demais content-*.js.
   ========================================================================== */

const LEVEL_ESTUDIORAPIDO = {
  id: "estudiorapido",
  name: "Estudio Rápido",
  icon: "🖼️",
  colorFrom: "#2E7D32",
  colorTo: "#1565C0",
  description: "Módulo bônus 100% visual: olhe a imagem, ouça a pergunta e responda falando em espanhol — o app escuta e corrige sua pronúncia na hora. Vocabulário de casa, cafeteria, padaria, auditoria e aeroporto.",
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
        {type: "speak", prompt: "Olhe a imagem do relógio. São 3:15. Como se diz a hora em espanhol?", target: "Son las tres y cuarto"},
        {type: "speak", prompt: "São 6:30. Diga a hora em espanhol.", target: "Son las seis y media"},
        {type: "speak", prompt: "São 8:45. Diga a hora em espanhol (use 'menos').", target: "Son las nueve menos cuarto"},
        {type: "speak", prompt: "São 10:55. Diga a hora em espanhol.", target: "Son las once menos cinco"},
        {type: "speak", prompt: "É 1:00 em ponto. Diga a hora em espanhol (cuidado: é singular!).", target: "Es la una en punto"},
        {type: "speak", prompt: "São 2:00 em ponto. Diga a hora em espanhol.", target: "Son las dos en punto"},
        {type: "speak", prompt: "São 4:05. Diga a hora em espanhol.", target: "Son las cuatro y cinco"},
        {type: "speak", prompt: "São 7:20. Diga a hora em espanhol.", target: "Son las siete y veinte"},
        {type: "speak", prompt: "São 9:40. Diga a hora em espanhol (use 'menos').", target: "Son las diez menos veinte"},
        {type: "speak", prompt: "É 12:50 (quase 1 hora). Diga a hora em espanhol.", target: "Es la una menos diez"},
        {type: "mc", q: "8:45 se diz, em espanhol...", options: ["Las ocho y cuarenta y cinco", "Las nueve menos cuarto", "Las ocho menos cuarto", "Las nueve y cuarto"], correct: 1},
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
        {type: "speak", prompt: "Olhe a imagem. Como se diz 'a cama' em espanhol?", target: "la cama"},
        {type: "speak", prompt: "Como se diz 'o travesseiro' em espanhol?", target: "la almohada"},
        {type: "speak", prompt: "Como se diz 'o armário' em espanhol?", target: "el armario"},
        {type: "speak", prompt: "Como se diz 'o abajur / a luminária' em espanhol?", target: "la lámpara"},
        {type: "speak", prompt: "Como se diz 'o espelho' em espanhol?", target: "el espejo"},
        {type: "speak", prompt: "Como se diz 'a janela' em espanhol?", target: "la ventana"},
        {type: "speak", prompt: "Como se diz 'a cortina' em espanhol?", target: "la cortina"},
        {type: "speak", prompt: "Como se diz 'a estante' (dos livros) em espanhol?", target: "la estantería"},
        {type: "speak", prompt: "Como se diz 'a escrivaninha' em espanhol?", target: "el escritorio"},
        {type: "speak", prompt: "Como se diz 'o tapete' em espanhol?", target: "la alfombra"},
        {type: "speak", prompt: "Como se diz 'a porta' em espanhol?", target: "la puerta"},
        {type: "speak", prompt: "Como se diz 'o cesto de roupa' em espanhol?", target: "la cesta de la ropa"},
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
        {type: "speak", prompt: "Como se diz 'a geladeira' em espanhol (forma mais comum na Espanha)?", target: "la nevera"},
        {type: "speak", prompt: "Como se diz 'a pia' da cozinha em espanhol?", target: "el fregadero"},
        {type: "speak", prompt: "Como se diz 'a torneira' em espanhol?", target: "el grifo"},
        {type: "speak", prompt: "Como se diz 'o forno' em espanhol?", target: "el horno"},
        {type: "speak", prompt: "Como se diz 'o micro-ondas' em espanhol?", target: "el microondas"},
        {type: "speak", prompt: "Como se diz 'a panela' em espanhol?", target: "la olla"},
        {type: "speak", prompt: "Como se diz 'a frigideira' em espanhol?", target: "la sartén"},
        {type: "speak", prompt: "Como se diz 'a faca' em espanhol?", target: "el cuchillo"},
        {type: "speak", prompt: "Como se diz 'a lava-louças' em espanhol?", target: "el lavavajillas"},
        {type: "speak", prompt: "Como se diz 'a mesa' em espanhol?", target: "la mesa"},
        {type: "speak", prompt: "Como se diz 'o prato' em espanhol?", target: "el plato"},
        {type: "speak", prompt: "Como se diz 'a xícara' em espanhol?", target: "la taza"},
        {type: "speak", prompt: "Como se diz 'o copo' em espanhol?", target: "el vaso"},
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
        {type: "speak", prompt: "Como se diz 'o chuveiro' em espanhol?", target: "la ducha"},
        {type: "speak", prompt: "Como se diz 'a banheira' em espanhol?", target: "la bañera"},
        {type: "speak", prompt: "Como se diz 'o vaso sanitário' em espanhol?", target: "el inodoro"},
        {type: "speak", prompt: "Como se diz 'o papel higiênico' em espanhol?", target: "el papel higiénico"},
        {type: "speak", prompt: "Como se diz 'a escova de dentes' em espanhol?", target: "el cepillo de dientes"},
        {type: "speak", prompt: "Como se diz 'a pasta de dente' em espanhol?", target: "la pasta de dientes"},
        {type: "speak", prompt: "Como se diz 'a toalha' em espanhol?", target: "la toalla"},
        {type: "speak", prompt: "Como se diz 'o xampu' em espanhol?", target: "el champú"},
        {type: "speak", prompt: "Como se diz 'o espelho' em espanhol?", target: "el espejo"},
        {type: "speak", prompt: "Como se diz 'a pia do banheiro' em espanhol?", target: "el lavabo"},
        {type: "speak", prompt: "Como se diz 'a balança' em espanhol?", target: "la báscula"},
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
        {type: "speak", prompt: "Como se diz 'o garçom' em espanhol?", target: "el camarero"},
        {type: "speak", prompt: "Como se diz 'o cardápio' em espanhol?", target: "el menú"},
        {type: "speak", prompt: "Como se diz 'o balcão' da cafeteria em espanhol?", target: "la barra"},
        {type: "speak", prompt: "Como se diz 'o café com leite' em espanhol?", target: "el café con leche"},
        {type: "speak", prompt: "Como se diz 'o suco de laranja' em espanhol?", target: "el zumo de naranja"},
        {type: "speak", prompt: "Como se diz 'a torrada' em espanhol?", target: "la tostada"},
        {type: "speak", prompt: "Como se diz 'o croissant' em espanhol (mesma palavra, mas pronuncie em espanhol)?", target: "el croissant"},
        {type: "speak", prompt: "Como se diz 'a xícara' em espanhol?", target: "la taza"},
        {type: "speak", prompt: "Como se diz 'a garrafa de água' em espanhol?", target: "la botella de agua"},
        {type: "speak", prompt: "Como se diz 'o açúcar' em espanhol?", target: "el azúcar"},
        {type: "speak", prompt: "Como se diz 'o caixa registradora' em espanhol?", target: "la caja registradora"},
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
        {type: "speak", prompt: "Como se diz 'o pão' em espanhol?", target: "el pan"},
        {type: "speak", prompt: "Como se diz 'o padeiro' em espanhol?", target: "el panadero"},
        {type: "speak", prompt: "Como se diz 'a farinha' em espanhol?", target: "la harina"},
        {type: "speak", prompt: "Como se diz 'o bolo' em espanhol?", target: "el pastel"},
        {type: "speak", prompt: "Como se diz 'o biscoito' em espanhol?", target: "la galleta"},
        {type: "speak", prompt: "Como se diz 'a balança' em espanhol?", target: "la balanza"},
        {type: "speak", prompt: "Como se diz 'a sacola' em espanhol?", target: "la bolsa"},
        {type: "speak", prompt: "Como se diz 'o caixa registradora' em espanhol?", target: "la caja registradora"},
        {type: "mc", q: "'O bolinho/queque' pequeno, em espanhol, se chama...", options: ["la magdalena", "la galleta", "la napolitana", "la palmerita"], correct: 0},
        {type: "fill", q: "'O pão doce' em espanhol se escreve: el pan ___", answer: "dulce"}
      ]
    },
    {
      id: "er-auditoria", order: 7, title: "La auditoría", subtitle: "A auditoria (vocabulário profissional)",
      vocabulary: [
        {category: "Vocabulario", items: [
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
        ]}
      ],
      grammar: [],
      notes: [
        "Vocabulário direto ao ponto do seu trabalho — útil para reuniões, relatórios e apresentações de auditoria em espanhol."
      ],
      exercises: [
        {type: "speak", prompt: "Como se diz 'o auditor' em espanhol?", target: "el auditor"},
        {type: "speak", prompt: "Como se diz 'o relatório' em espanhol?", target: "el informe"},
        {type: "speak", prompt: "Como se diz 'a lista de verificação' em espanhol?", target: "la lista de verificación"},
        {type: "speak", prompt: "Como se diz 'a assinatura' em espanhol?", target: "la firma"},
        {type: "speak", prompt: "Como se diz 'o cronograma' em espanhol?", target: "el cronograma"},
        {type: "speak", prompt: "Como se diz 'a empresa' em espanhol?", target: "la empresa"},
        {type: "speak", prompt: "Como se diz 'a reunião' em espanhol?", target: "la reunión"},
        {type: "speak", prompt: "Como se diz 'a norma' em espanhol?", target: "la norma"},
        {type: "speak", prompt: "Como se diz 'o risco' em espanhol?", target: "el riesgo"},
        {type: "speak", prompt: "Como se diz 'o achado de auditoria' em espanhol?", target: "el hallazgo"},
        {type: "speak", prompt: "Como se diz 'a evidência' em espanhol?", target: "la evidencia"},
        {type: "mc", q: "'A pasta de documentos', em espanhol, é...", options: ["la carpeta", "el informe", "la firma", "el hallazgo"], correct: 0},
        {type: "fill", q: "'O computador' em espanhol se escreve: el ___", answer: "ordenador"}
      ]
    },
    {
      id: "er-aeropuerto", order: 8, title: "El aeropuerto", subtitle: "O aeroporto",
      vocabulary: [
        {category: "Vocabulario", items: [
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
        ]}
      ],
      grammar: [],
      notes: [
        "'Billete' (Espanha) é o mesmo que 'boleto/passagem' — em vários países da América Latina usa-se 'boleto' ou 'tiquete'."
      ],
      exercises: [
        {type: "speak", prompt: "Como se diz 'o avião' em espanhol?", target: "el avión"},
        {type: "speak", prompt: "Como se diz 'a mala' em espanhol?", target: "la maleta"},
        {type: "speak", prompt: "Como se diz 'o passaporte' em espanhol?", target: "el pasaporte"},
        {type: "speak", prompt: "Como se diz 'o cartão de embarque' em espanhol?", target: "la tarjeta de embarque"},
        {type: "speak", prompt: "Como se diz 'o portão de embarque' em espanhol?", target: "la puerta de embarque"},
        {type: "speak", prompt: "Como se diz 'a esteira de bagagem' em espanhol?", target: "la cinta transportadora"},
        {type: "speak", prompt: "Como se diz 'o controle de segurança' em espanhol?", target: "el control de seguridad"},
        {type: "speak", prompt: "Como se diz 'a alfândega' em espanhol?", target: "la aduana"},
        {type: "speak", prompt: "Como se diz 'a passagem' em espanhol?", target: "el billete"},
        {type: "speak", prompt: "Como se diz 'o voo' em espanhol?", target: "el vuelo"},
        {type: "speak", prompt: "Como se diz 'a sala de espera' em espanhol?", target: "la sala de espera"},
        {type: "mc", q: "'O painel de partidas', em espanhol, é...", options: ["la pantalla de salidas", "la torre de control", "la pista de aterrizaje", "la aduana"], correct: 0},
        {type: "fill", q: "'A bagagem de mão' em espanhol se escreve: el equipaje de ___", answer: "mano"}
      ]
    }
  ]
};
