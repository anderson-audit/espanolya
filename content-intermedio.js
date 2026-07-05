// content-intermedio.js
// Conteudo do Nivel Intermediario (Modulo 4) do curso "Metodo Espanhol de Verdade"
// 15 aulas + Exame Final. Gerado a partir do material fonte extraido do curso original.

const LEVEL_INTERMEDIO = {
  id: "intermedio",
  name: "Intermediário",
  icon: "🚀",
  colorFrom: "#1565c0",
  colorTo: "#AA151B",
  description: "15 aulas para avançar: supermercado, viagens de negócios, pretérito, imperfecto, subjuntivo, condicional e muito mais.",
  lessons: [
    {
      id: "i1",
      order: 1,
      title: "Supermercado",
      subtitle: "Frutas, vegetais e o Pretérito Perfecto Simple",
      dialogue: [
        { who: "A", es: "Mari! Fuiste al supermercado a comprar lo que te pedí ayer?" },
        { who: "B", es: "Discúlpame, mamá! Me lo olvidé." },
        { who: "A", es: "Al menos escribiste lo que tenías que comprar en un papel?" },
        { who: "B", es: "Sí!, hice una lista. Quieres que vaya ahora, madre?" },
        { who: "A", es: "Por supuesto! Pero no te olvides de los huevos, las zanahorias, la harina y la mantequilla, si no, no tendré como hacer el almuerzo." },
        { who: "B", es: "Está bien! Puedo comprar algo para mí?" },
        { who: "A", es: "Voy a darte la plata para que compres lo que está en la lista. Si hay cambio, puedes comprarte algo." },
        { who: "B", es: "Gracias, mamá! Ahorita me voy." },
        { who: "A", es: "Cuídate, hija! Hasta luego!" }
      ],
      vocabulary: [
        {
          category: "Frutas",
          items: [
            { es: "Manzana", pt: "Maçã" },
            { es: "Plátano/Banana/Guineo", pt: "Banana" },
            { es: "Aguacate/Palta", pt: "Abacate" },
            { es: "Limón", pt: "Limão" },
            { es: "Naranja", pt: "Laranja" },
            { es: "Uva", pt: "Uva" },
            { es: "Sandía/Melón de agua", pt: "Melancia" },
            { es: "Piña/Ananás", pt: "Abacaxi" },
            { es: "Higo", pt: "Figo" },
            { es: "Cereza", pt: "Cereja" },
            { es: "Coco", pt: "Coco" },
            { es: "Lima", pt: "Lima" },
            { es: "Mango", pt: "Manga" },
            { es: "Fresa/Frutilla", pt: "Morango" },
            { es: "Mandarina", pt: "Mandarina" },
            { es: "Ciruela", pt: "Ameixa" },
            { es: "Pera", pt: "Pera" },
            { es: "Mora", pt: "Amora" },
            { es: "Melón", pt: "Melão" },
            { es: "Granada", pt: "Romã" },
            { es: "Almendra", pt: "Amêndoa" },
            { es: "Grosella", pt: "Groselha" },
            { es: "Kiwi", pt: "Kiwi" },
            { es: "Caña", pt: "Cana" },
            { es: "Nectarina", pt: "Nectarina" },
            { es: "Durazno/Melocotón", pt: "Pêssego" },
            { es: "Dátil", pt: "Tâmara" },
            { es: "Pomelo", pt: "Pomelo" },
            { es: "Arándano", pt: "Mirtilo" },
            { es: "Albaricoque", pt: "Damasco" },
            { es: "Maracuyá", pt: "Maracujá" },
            { es: "Avellana", pt: "Avelã" },
            { es: "Membrillo", pt: "Marmelo" },
            { es: "Guayaba", pt: "Goiaba" },
            { es: "Mamón/Papaya", pt: "Mamão" },
            { es: "Frambuesa", pt: "Framboesa" },
            { es: "Caqui/Palosanto", pt: "Caqui" }
          ]
        },
        {
          category: "Vegetales/Legumbres/Verduras",
          items: [
            { es: "Zapallo/Calabaza", pt: "Moranga/Abóbora" },
            { es: "Berro", pt: "Agrião" },
            { es: "Lechuga", pt: "Alface" },
            { es: "Ajo", pt: "Alho" },
            { es: "Patata/Papa", pt: "Batata" },
            { es: "Batata/Boniato/Papa dulce", pt: "Batata doce" },
            { es: "Berenjena", pt: "Berinjela" },
            { es: "Beterraga/Remolacha", pt: "Beterraba" },
            { es: "Brócoli/Brécol", pt: "Brócolis" },
            { es: "Cebolla", pt: "Cebola" },
            { es: "Zanahoria", pt: "Cenoura" },
            { es: "Col", pt: "Couve" },
            { es: "Coliflor", pt: "Couve-flor" },
            { es: "Arveja/Guisante/Chícharo", pt: "Ervilha" },
            { es: "Espinaca", pt: "Espinafre" },
            { es: "Choclo/Maíz", pt: "Milho" },
            { es: "Palmito", pt: "Palmito" },
            { es: "Pepino", pt: "Pepino" },
            { es: "Pimiento/Morrón/Ají", pt: "Pimenta/Pimentão" },
            { es: "Repollo", pt: "Repolho" },
            { es: "Tomate", pt: "Tomate" },
            { es: "Vaina/Chaucha/Judía verde", pt: "Vagem" },
            { es: "Espárrago", pt: "Aspargo" },
            { es: "Rábano", pt: "Rabanete" },
            { es: "Champiñón", pt: "Champignon" },
            { es: "Puerro", pt: "Alho poró" },
            { es: "Aceituna", pt: "Azeitona" },
            { es: "Yuca/Mandioca/Casava/Casabe", pt: "Mandioca" },
            { es: "Zapallito/Calabacín", pt: "Abobrinha" },
            { es: "Nabo", pt: "Nabo" }
          ]
        },
        {
          category: "Otros alimentos importantes",
          items: [
            { es: "Leche", pt: "Leite" },
            { es: "Chocolate", pt: "Chocolate" },
            { es: "Endulzante/Edulcorante", pt: "Adoçante" },
            { es: "Galletas", pt: "Biscoito" },
            { es: "Huevo", pt: "Ovo" },
            { es: "Sal", pt: "Sal" },
            { es: "Jamón", pt: "Presunto" },
            { es: "Queso", pt: "Queijo" },
            { es: "Pan", pt: "Pão" },
            { es: "Mantequilla", pt: "Manteiga" },
            { es: "Pasta", pt: "Massa" },
            { es: "Arroz", pt: "Arroz" },
            { es: "Salsa de tomate", pt: "Molho de tomate" },
            { es: "Carne", pt: "Carne" },
            { es: "Mayonesa", pt: "Maionese" },
            { es: "Catchup", pt: "Catchup" },
            { es: "Mostaza", pt: "Mostarda" },
            { es: "Aceite", pt: "Azeite" },
            { es: "Refresco", pt: "Bebida" },
            { es: "Agua", pt: "Água" },
            { es: "Harina", pt: "Farinha" },
            { es: "Poroto/Judía/Alubia/Frijol/Habichuela", pt: "Feijão" },
            { es: "Café", pt: "Café" },
            { es: "Yogur", pt: "Iogurte" },
            { es: "Cereal", pt: "Cereal" },
            { es: "Levadura", pt: "Levedura" }
          ]
        }
      ],
      grammar: [
        {
          title: "Pretérito Perfecto Simple de Indicativo — verbos regulares",
          headers: ["Pronombres", "Comprar", "Comer", "Decidir"],
          rows: [
            ["Yo", "Compré", "Comí", "Decidí"],
            ["Tú/Vos", "Compraste", "Comiste", "Decidiste"],
            ["Él/Ella/Usted", "Compró", "Comió", "Decidió"],
            ["Nosotros/Nosotras", "Compramos", "Comimos", "Decidimos"],
            ["Vosotros/Vosotras", "Comprasteis", "Comisteis", "Decidisteis"],
            ["Ellos/Ellas/Ustedes", "Compraron", "Comieron", "Decidieron"]
          ]
        },
        {
          title: "Verbos irregulares — Hacer, Ir/Ser, Dormir",
          headers: ["Pronombres", "Hacer", "Ir/Ser", "Dormir"],
          rows: [
            ["Yo", "Hice", "Fui", "Dormí"],
            ["Tú/Vos", "Hiciste", "Fuiste", "Dormiste"],
            ["Él/Ella/Usted", "Hizo", "Fue", "Durmió"],
            ["Nosotros/Nosotras", "Hicimos", "Fuimos", "Dormimos"],
            ["Vosotros/Vosotras", "Hicisteis", "Fuisteis", "Dormisteis"],
            ["Ellos/Ellas/Ustedes", "Hicieron", "Fueron", "Durmieron"]
          ]
        },
        {
          title: "Verbos irregulares — Construir, Oír, Ver",
          headers: ["Pronombres", "Construir", "Oír", "Ver"],
          rows: [
            ["Yo", "Construí", "Oí", "Vi"],
            ["Tú/Vos", "Construiste", "Oíste", "Viste"],
            ["Él/Ella/Usted", "Construyó", "Oyó", "Vio"],
            ["Nosotros/Nosotras", "Construimos", "Oímos", "Vimos"],
            ["Vosotros/Vosotras", "Construisteis", "Oísteis", "Visteis"],
            ["Ellos/Ellas/Ustedes", "Construyeron", "Oyeron", "Vieron"]
          ]
        },
        {
          title: "Verbos irregulares — Dar, Leer, Elegir",
          headers: ["Pronombres", "Dar", "Leer", "Elegir"],
          rows: [
            ["Yo", "Di", "Leí", "Elegí"],
            ["Tú/Vos", "Diste", "Leíste", "Elegiste"],
            ["Él/Ella/Usted", "Dio", "Leyó", "Eligió"],
            ["Nosotros/Nosotras", "Dimos", "Leímos", "Elegimos"],
            ["Vosotros/Vosotras", "Disteis", "Leísteis", "Elegisteis"],
            ["Ellos/Ellas/Ustedes", "Dieron", "Leyeron", "Eligieron"]
          ]
        }
      ],
      notes: [
        "Pretérito Perfecto Simple de Indicativo: tempo verbal que denota uma ação ou estado anterior ao momento da fala, sem vínculo com o presente; aspecto perfectivo (ação já concluída).",
        "Exemplos: Vi una película en el cine el mes pasado. / Mis amigos me invitaron a visitarlos el año pasado. / Compramos un coche la última Navidad. / Mi hermana durmió doce horas ayer. / Su madre le dijo que estudiara más."
      ],
      exercises: [
        { type: "fill", q: "Nosotros ___ al supermercado ayer. (ir)", answer: "fuimos" },
        { type: "fill", q: "Qué ustedes ___ anoche? (hacer)", answer: "hicieron" },
        { type: "fill", q: "Ellas ___ muchos dulces para nosotros. (comprar)", answer: "compraron" },
        { type: "fill", q: "Cuántas papas él ___? (comer)", answer: "comió" },
        { type: "fill", q: "No creo lo tanto que ___ en la fiesta. (ellos - beber)", answer: "bebieron" },
        { type: "fill", q: "Cuántas hojas ___? (tú - imprimir)", answer: "imprimiste" },
        { type: "fill", q: "No ___ creer en aquello! (yo - poder)", answer: "pude" },
        { type: "fill", q: "Dime María, Qué ___? (3ª persona sing. - pasar)", answer: "pasó" },
        { type: "mc", q: "Qué significa 'Fresa/Frutilla' em português?", options: ["Morango", "Uva", "Ameixa"], correct: 0 },
        { type: "mc", q: "Complete a tabela do Pretérito Perfecto Simple: Nosotros + Ver = ?", options: ["Vimos", "Veímos", "Vieron"], correct: 0 },
        { type: "translate", from: "pt", text: "Compramos um carro no último Natal.", answer: "Compramos un coche la última Navidad." },
        { type: "listen", audioText: "Fuiste al supermercado a comprar lo que te pedí ayer?", q: "O que a mãe pergunta à filha?", answer: "Se ela foi ao supermercado comprar o que ela pediu ontem." },
        { type: "speak", prompt: "Diga em espanhol: 'Sim, eu fiz uma lista.'", target: "Sí, hice una lista." },
        { type: "order", items: ["Disculpame, mama! Me lo olvide.", "Mari! Fuiste al supermercado a comprar lo que te pedi ayer?", "Al menos escribiste lo que tenias que comprar en un papel?"], correctOrder: [1, 0, 2] },
        { type: "open", q: "O que você costuma comprar no supermercado? Responda em espanhol usando o pretérito perfecto simple.", sample: "Compré frutas, verduras y pan la última vez que fui al supermercado." }
      ]
    },
    {
      id: "i2",
      order: 2,
      title: "Viaje de Negocios",
      subtitle: "Pretérito Perfecto Compuesto e Participios",
      text: "Hola, cariño! Te estoy enviando este correo electrónico para contarte un poco acerca de mi viaje de negocios a Barcelona. No he podido llamarte por teléfono todavía, entonces he decidido escribirte algunas palabritas por aquí. Todavía no he visitado muchos sitios por acá pues he trabajado mucho y mis días han sido muy ajetreados. Sin embargo, he visto algunas atracciones turísticas, como por ejemplo, el Museo Picasso, el zoológico y he estado por la Rambla, que es una calle muy conocida acá. Creo que volveré allá para comprar algunos regalos en las tiendas que hay en la calle. Bueno, creo que es eso y espero que me contestes contándome un poco de tu semana y cómo la ha pasado. Te quiero mucho y nos vemos pronto! Lucas",
      vocabulary: [
        { category: "Lugares/Sitios/Destinos", items: [{ es: "Playa" }, { es: "Campo" }, { es: "Ciudad" }, { es: "Esquí" }, { es: "Naturaleza" }] },
        { category: "Tipos de viajes", items: [{ es: "Viaje de negocios" }, { es: "Viaje de estudios" }, { es: "Viaje de vacaciones" }, { es: "Viaje por salud" }, { es: "Viaje por trabajo" }, { es: "Viaje gastronómica" }, { es: "Gira/Excursión" }, { es: "Escapadas" }, { es: "Viaje en familia" }, { es: "Viaje solidario" }, { es: "Viaje de aventura" }, { es: "Viaje de naturaleza" }, { es: "Viaje de luna de miel" }] },
        { category: "Conjunciones", items: [
          { es: "Y — Me gustan los dulces y salados." },
          { es: "NI — No me gusta vino ni cerveza." },
          { es: "QUE — Deseo que vengas." },
          { es: "O — Te gustan más las verduras o frutas?" },
          { es: "PERO — No nos vemos mucho pero nos queremos." },
          { es: "MAS — Quise hacerlo, mas no pude." },
          { es: "AUNQUE — Aunque te quiera, no voy a casarme contigo." },
          { es: "SINO — Julieta no es americana, sino puertorriqueña." },
          { es: "SIN EMBARGO — Fuimos a España, sin embargo, no fuimos a Madrid." },
          { es: "A PESAR DE — A pesar de los problemas, aún quiero estar aquí." },
          { es: "PUES — Te dejo, pues ya no te quiero más." },
          { es: "ASÍ QUE — Podemos comprarlo, así que vamos antes que cierre el mercado." },
          { es: "ES DECIR — Mi padre siempre tiene razón, es decir, siempre me convence." },
          { es: "POR LO TANTO — Ya es tarde, por lo tanto, apúrate." },
          { es: "SI — Si te vas, yo también me voy." },
          { es: "POR CONSIGUIENTE — Ya estamos todos acá, por consiguiente, podemos empezar." },
          { es: "COMO — Como quiero aprobar, estudio." },
          { es: "LUEGO — Se abrazaron y luego cada uno fue a su casa." },
          { es: "O SEA — No podemos seguir así, o sea, tenemos que terminar lo nuestro." },
          { es: "POR ESTO — Estaba errado, por esto te pido perdón." },
          { es: "YA QUE — La fiesta va a estar buena ya que es mi cumpleaños." },
          { es: "PUESTO QUE — No me sorprendió, puesto que ya lo sabía." },
          { es: "PORQUE — Vamos a aprobar, porque estudiamos mucho." },
          { es: "CON TAL QUE — Te llevaré al cine con tal que pares de molestarme." },
          { es: "DE TAL MANERA QUE — Se comportó de tal manera que hubo que expulsarlo." },
          { es: "DE MODO QUE — Todo va a estar bien, de modo que, no te preocupes." },
          { es: "HASTA QUE — Relaja hasta que estés bien." },
          { es: "CONQUE — Ya es la hora, conque, vámonos." },
          { es: "APENAS — Apenas supo la noticia, la fue a ver." }
        ] },
        { category: "Aumentativos (sufixos)", items: [{ es: "-ÓN/ONA (Mandón/Mandona)" }, { es: "-OTE/OTA (Feote, Cabezota)" }, { es: "-ACHO/ACHA (Ricacho/a)" }, { es: "-UCHO/UCHA (Gorducho, Flacucha)" }] },
        { category: "Diminutivos (sufixos)", items: [{ es: "-ITO/ITA (Casita, Besito)" }, { es: "-ZUELO (Ladronzuelo)" }, { es: "-ÍN/INA (Chiquitín, Chiquitina)" }, { es: "-CITO/CITA (Cafecito, Madrecita)" }, { es: "-ILLO(A)/CILLO(A)/ECILLO(A) (Chiquillo, Friecillo)" }, { es: "-ECITO/ECITA (Florecita, Piececito)" }] },
        { category: "Participios regulares", items: [{ es: "Comprar", pt: "Comprado" }, { es: "Beber", pt: "Bebido" }, { es: "Cumplir", pt: "Cumplido" }] },
        { category: "Participios irregulares", items: [
          { es: "Ver", pt: "Visto" }, { es: "Volver", pt: "Vuelto" }, { es: "Hacer", pt: "Hecho" }, { es: "Romper", pt: "Roto" },
          { es: "Morir", pt: "Muerto" }, { es: "Decir", pt: "Dicho" }, { es: "Escribir", pt: "Escrito" }, { es: "Cubrir", pt: "Cubierto" },
          { es: "Poner", pt: "Puesto" }, { es: "Abrir", pt: "Abierto" }, { es: "Ser", pt: "Sido" }, { es: "Resolver", pt: "Resuelto" }
        ] }
      ],
      grammar: [
        {
          title: "Pretérito Perfecto Compuesto de Indicativo (Haber + Participio)",
          headers: ["Pronombres", "Haber (presente)"],
          rows: [
            ["Yo", "He"],
            ["Tú/Vos", "Has"],
            ["Él/Ella/Usted", "Ha"],
            ["Nosotros/Nosotras", "Hemos"],
            ["Vosotros/Vosotras", "Habéis"],
            ["Ellos/Ellas/Ustedes", "Han"]
          ]
        }
      ],
      notes: [
        "Pretérito Perfecto Compuesto de Indicativo: usado para fatos passados que têm relação com a zona temporal em que o falante se encontra (diferente do pretérito perfecto simple).",
        "Exemplos: Este fin de semana hemos estudiado mucho. / Ya he cenado. / Ella no ha visto esta película todavía. / Muchas personas han muerto en la guerra.",
        "Estrutura: Verbo Haber (presente indicativo) + Verbo principal (participio). Ex.: Yo he comprado."
      ],
      exercises: [
        { type: "fill", q: "___ los regalos para la fiesta de cumpleaños de Helena? (Tú - comprar)", answer: "Has comprado" },
        { type: "fill", q: "Nunca le ___ viajar en tren. (Gustar)", answer: "ha gustado" },
        { type: "fill", q: "Las chicas ___ sus fotografías en la exposición. (Ver)", answer: "han visto" },
        { type: "fill", q: "___ el mejor libro de todo el país. (Nosotros - Escribir)", answer: "Hemos escrito" },
        { type: "fill", q: "___ hoy? (Vosotros - Trabajar)", answer: "Habéis trabajado" },
        { type: "mc", q: "Escreva o aumentativo de 'Feo':", options: ["Feote", "Feíto", "Feoso"], correct: 0 },
        { type: "mc", q: "Escreva o diminutivo de 'Casa':", options: ["Casaza", "Casita", "Casón"], correct: 1 },
        { type: "mc", q: "Me desperté ___ luego salí.", options: ["y", "o", "aun"], correct: 0 },
        { type: "mc", q: "Qual o particípio irregular de 'Escribir'?", options: ["Escribido", "Escrito", "Escribiendo"], correct: 1 },
        { type: "translate", from: "pt", text: "Ainda não vi este filme.", answer: "Todavía no he visto esta película." },
        { type: "listen", audioText: "He visto algunas atracciones turísticas, como el Museo Picasso.", q: "O que Lucas já viu em Barcelona?", answer: "Algunas atracciones turísticas, como el Museo Picasso." },
        { type: "speak", prompt: "Diga em espanhol: 'Eu trabalhei muito esta semana.'", target: "He trabajado mucho esta semana." },
        { type: "open", q: "O que você já fez hoje? Responda usando o pretérito perfecto compuesto.", sample: "Hoy he estudiado español y he comido una fruta." }
      ]
    },
    {
      id: "i3",
      order: 3,
      title: "Con Quién Hablabas?",
      subtitle: "Verbos pronominales e Pretérito Imperfecto",
      dialogue: [
        { who: "A", es: "Oye, Lucy! Con quién hablabas por teléfono anoche? Traté de llamarte por dos horas y nunca logré hablar contigo." },
        { who: "B", es: "Ah, Julieta, una amiga de París con quien no charlaba hacía mucho tiempo. Y al mismo tiempo cocinaba porque ayer mis padres y mi hermana estaban acá para cenar con nosotros." },
        { who: "A", es: "Ah, sí? Y qué preparabas mientras hablabas por teléfono?" },
        { who: "B", es: "Preparaba una pasta con salsa de camarones. Estaba muy exquisita! Nos comimos todo. Solo es una lástima que mis parientes ya se fueron." },
        { who: "A", es: "Qué rico! Algún día quiero probar esta comida maravillosa. Ahora tengo que trabajar porque ayer no me sentía bien y no pude hacer nada." },
        { who: "B", es: "Ok! Hasta pronto, amiga!" }
      ],
      vocabulary: [
        { category: "Verbos pronominales — pares e diferença de sentido", items: [
          { es: "ACORDAR (chegar a um acordo) x ACORDARSE (lembrar)" },
          { es: "APRENDER x APRENDERSE (aprender com mais ênfase)" },
          { es: "APROVECHAR (empregar algo) x APROVECHARSE (tirar proveito de algo)" },
          { es: "BEBER x BEBERSE (exagero no ato de beber)" },
          { es: "CAER (mover algo, marcar uma data) x CAERSE (queda acidental)" },
          { es: "COMER x COMERSE (exagero no ato de comer)" },
          { es: "DEJAR (deixar algo em um lugar) x DEJARSE (esquecer algo em algum lugar)" },
          { es: "DORMIR x DORMIRSE (começar a dormir)" },
          { es: "FUMAR x FUMARSE (exagero no ato de fumar)" },
          { es: "HACER x HACERSE (passar por característica que não é a sua)" },
          { es: "IR (movimento a um lugar) x IRSE (ato de abandono)" },
          { es: "JUGAR (brincar) x JUGARSE (arriscar)" },
          { es: "LARGAR (deixar as coisas para alguém) x LARGARSE (deixar um lugar/sair)" },
          { es: "LLEVAR (carregar coisas) x LLEVARSE (tomar para si algo)" },
          { es: "LEER x LEERSE (exagero no ato de ler)" },
          { es: "MORIR x MORIRSE (referir-se a uma morte com mais sentimento)" },
          { es: "PONER (colocar) x PONERSE (mudança de curta duração)" },
          { es: "QUEDAR (combinar) x QUEDARSE (permanecer em um lugar)" },
          { es: "VENIR (referir-se a um sujeito/origem) x VENIRSE (deixar um lugar e ir a outro)" },
          { es: "VOLVER (regressar) x VOLVERSE (dar a volta/mudar de estado ou aspecto)" }
        ] }
      ],
      grammar: [
        {
          title: "Pretérito Imperfecto de Indicativo — verbos regulares",
          headers: ["Pronombres", "Comprar", "Beber", "Vivir"],
          rows: [
            ["Yo", "Compraba", "Bebía", "Vivía"],
            ["Tú/Vos", "Comprabas", "Bebías", "Vivías"],
            ["Él/Ella/Usted", "Compraba", "Bebía", "Vivía"],
            ["Nosotros/Nosotras", "Comprábamos", "Bebíamos", "Vivíamos"],
            ["Vosotros/Vosotras", "Comprabais", "Bebíais", "Vivíais"],
            ["Ellos/Ellas/Ustedes", "Compraban", "Bebían", "Vivían"]
          ]
        },
        {
          title: "Verbos irregulares — Ser, Ir, Ver",
          headers: ["Pronombres", "Ser", "Ir", "Ver"],
          rows: [
            ["Yo", "Era", "Iba", "Veía"],
            ["Tú/Vos", "Eras", "Ibas", "Veías"],
            ["Él/Ella/Usted", "Era", "Iba", "Veía"],
            ["Nosotros/Nosotras", "Éramos", "Íbamos", "Veíamos"],
            ["Vosotros/Vosotras", "Erais", "Ibais", "Veíais"],
            ["Ellos/Ellas/Ustedes", "Eran", "Iban", "Veían"]
          ]
        }
      ],
      notes: [
        "Verbos pronominales: construídos incluindo, na terminação do infinitivo, um pronome reflexivo (me, te, se, nos, os), que muda o significado do verbo ou indica que a ação afeta diretamente o sujeito.",
        "Exemplos: El se suicidó. / Ella está lavándose las manos. / Ya nos vamos de aquí. / Ellos se besaron. / María se cortó mientras cocinaba.",
        "Pretérito Imperfecto de Indicativo: usado para expressar ações passadas cujo início e fim não se concretizam; ressalta a continuidade ou regularidade de uma ação no passado.",
        "Exemplos: A Lucio le encantaba el fútbol. / Su madre le contaba historias todas las noches. / Se pasaba el día escuchando canciones. / Mientras cocinaba, se cortó.",
        "Pretérito Imperfecto x Pretérito Perfecto Simple: Fui al supermercado ayer. / Iba al supermercado ayer cuando ella llegó."
      ],
      exercises: [
        { type: "fill", q: "Dónde ___ María anoche? (estar)", answer: "estaba" },
        { type: "fill", q: "El ___ por la vereda cuando decidió ir a su casa. (caminar)", answer: "caminaba" },
        { type: "fill", q: "Cuando llegué a mi casa, ___ la ropa toda sucia. (tener)", answer: "tenía" },
        { type: "fill", q: "___ muchas cosas en nuestras vidas. (nosotros - cambiar)", answer: "cambiábamos" },
        { type: "fill", q: "Mis amigos ___ para el exterior el año pasado. (viajar)", answer: "viajaban" },
        { type: "fill", q: "Ella ___ muy hermosa cuando niña. (ser)", answer: "era" },
        { type: "mc", q: "Ella ___ y fue a la casa de su padre.", options: ["largó", "se largó"], correct: 1 },
        { type: "mc", q: "___ de todo antes de haber empezado a beber ayer.", options: ["Acuerdo", "Me acuerdo"], correct: 1 },
        { type: "mc", q: "Dios! Dónde ___ mi cartera?", options: ["Puse", "Me puse"], correct: 0 },
        { type: "translate", from: "pt", text: "Ela estava muito bonita quando criança.", answer: "Ella era muy hermosa cuando niña." },
        { type: "listen", audioText: "Con quién hablabas por teléfono anoche?", q: "O que a amiga pergunta a Lucy?", answer: "Com quem ela estava falando ao telefone ontem à noite." },
        { type: "speak", prompt: "Diga em espanhol: 'Eu preparava uma massa com molho de camarão.'", target: "Preparaba una pasta con salsa de camarones." },
        { type: "open", q: "O que você fazia quando era criança? Responda usando o pretérito imperfecto.", sample: "Cuando era niño, jugaba mucho en el parque." }
      ]
    },
    {
      id: "i4",
      order: 4,
      title: "Qué Estaba Haciendo?",
      subtitle: "Objetos da casa, verbo ECHAR e Pasado Continuo",
      dialogue: [
        { who: "A", es: "Hola, Bianca!, qué tal?" },
        { who: "B", es: "Hola Mari! Bien, gracias! Quisiera preguntarte una cosa. Ayer estaba de paseo por el centro comercial cuando vi a Lucy comprando cosas para la casa. Sabes si ella ha comprado finalmente el departamento que estaba soñando en comprar?" },
        { who: "A", es: "Sí! Ella está muy feliz. Estuve hablando mucho con ella estos días. Ayer me contó que ya ha comprado casi todo lo que necesita para su hogar. Me parece que le falta solo comprar algunas toallas, los cubiertos y un sofá." },
        { who: "B", es: "Qué buena noticia! Voy a llamarla esta noche entonces para felicitarla y saber cómo va todo." },
        { who: "A", es: "Ella va a sentirse muy feliz que la llames. Nos vemos amiga!" },
        { who: "B", es: "Vale! Hasta pronto!" }
      ],
      vocabulary: [
        { category: "Cosas/objetos de la casa", items: [
          { es: "Alfombra", pt: "Tapete" }, { es: "Almohada", pt: "Travesseiro" }, { es: "Cojín", pt: "Almofada" },
          { es: "Armario/guardarropa", pt: "Armário/Guarda-roupa" }, { es: "Bañera", pt: "Banheira" }, { es: "Cama", pt: "Cama" },
          { es: "Cepillo", pt: "Escova" }, { es: "Cómoda", pt: "Cômoda" }, { es: "Cortagrama/césped", pt: "Cortador de grama" },
          { es: "Cortina", pt: "Cortina" }, { es: "Cuadro", pt: "Quadro" }, { es: "Detergente", pt: "Detergente" },
          { es: "Ducha", pt: "Chuveiro" }, { es: "Escoba", pt: "Vassoura" }, { es: "Espejo", pt: "Espelho" },
          { es: "Esponja", pt: "Esponja" }, { es: "Estante", pt: "Prateleira" }, { es: "Estantería", pt: "Estante" },
          { es: "Frazada", pt: "Edredom" }, { es: "Fregadero", pt: "Pia/Cuba" }, { es: "Frigorífico/Nevera/Heladera", pt: "Geladeira" },
          { es: "Horno microondas", pt: "Forno microondas" }, { es: "Jabón", pt: "Sabão/Sabonete" }, { es: "Lámpara", pt: "Abajur" },
          { es: "Lavabo", pt: "Lavabo" }, { es: "Lavadora", pt: "Lavadora" }, { es: "Litera", pt: "Beliche" },
          { es: "Manguera", pt: "Mangueira" }, { es: "Mantel", pt: "Toalha de mesa" }, { es: "Mesa", pt: "Mesa" },
          { es: "Mesita de noche", pt: "Mesa de cabeceira" }, { es: "Papel higiénico", pt: "Papel higiênico" }, { es: "Percha", pt: "Cabide" },
          { es: "Plancha", pt: "Ferro" }, { es: "Reloj", pt: "Relógio" }, { es: "Sábanas", pt: "Lençóis" },
          { es: "Silla", pt: "Cadeira" }, { es: "Sillón", pt: "Poltrona" }, { es: "Sofá", pt: "Sofá" },
          { es: "Televisor", pt: "Televisor" }, { es: "Toalla", pt: "Toalha" }, { es: "Lavavajillas", pt: "Lava-louças" },
          { es: "Váter", pt: "Vaso sanitário" }, { es: "Grifo/Canilla", pt: "Torneira" }
        ] },
        { category: "Verbo ECHAR (verbo comodín)", items: [
          { es: "Echar abajo" }, { es: "Echar a perder" }, { es: "Echar un vistazo" }, { es: "Echar de menos" },
          { es: "Echar por alto" }, { es: "Echar tras uno" }, { es: "Echar una mano" }, { es: "Echar un cigarrillo" },
          { es: "Echar un bocado" }, { es: "Echar un trago" }, { es: "Echar un discurso" }, { es: "Echar a la lotería" }
        ] }
      ],
      grammar: [
        {
          title: "Verbo ESTAR — Pretérito Perfecto Simple",
          headers: ["Pronombres", "Estar"],
          rows: [
            ["Yo", "Estuve"], ["Tú/Vos", "Estuviste"], ["Él/Ella/Usted", "Estuvo"],
            ["Nosotros/Nosotras", "Estuvimos"], ["Vosotros/Vosotras", "Estuvisteis"], ["Ellos/Ellas/Ustedes", "Estuvieron"]
          ]
        },
        {
          title: "Verbo ESTAR — Pretérito Imperfecto",
          headers: ["Pronombres", "Estar"],
          rows: [
            ["Yo", "Estaba"], ["Tú/Vos", "Estabas"], ["Él/Ella/Usted", "Estaba"],
            ["Nosotros/Nosotras", "Estábamos"], ["Vosotros/Vosotras", "Estabais"], ["Ellos/Ellas/Ustedes", "Estaban"]
          ]
        }
      ],
      notes: [
        "Pasado Continuo (Pretérito Perfecto Progresivo): tempo continuo que enfatiza uma ação em progresso; expressa uma ação concluída, com ênfase na ação. Estrutura: Pronombre + Estar (pretérito perfecto) + gerundio.",
        "Exemplos: Yo estuve jugando al fútbol con mis hijos anoche. / Ella estuvo viendo unos videos de Youtube la última semana.",
        "Pasado Continuo (Pretérito Imperfecto Progresivo): expressa uma ação interrompida; enfatiza a duração da ação. Estrutura: Pronombre + Estar (pretérito imperfecto) + gerundio + cuando + verbo (pretérito perfecto simple).",
        "Exemplos: Yo estaba jugando al fútbol con mis hijos cuando me caí. / Ustedes estaban limpiando la casa, cuando el teléfono empezó a sonar.",
        "Variações: além de 'estar', é possível usar 'seguir' e 'continuar', ou verbos de movimento como andar, ir, venir."
      ],
      exercises: [
        { type: "fill", q: "María ___ por la calle, cuando encontró a su maestro y empezaron a charlar. (estar - imperfecto)", answer: "estaba" },
        { type: "fill", q: "Yo ___ sintiéndome enferma estos días, ahora estoy mejor. (estar - perfecto simple)", answer: "estuve" },
        { type: "fill", q: "Nosotros ___ estudiando juntos, cuando una de las chicas se sintió mal. (estar - imperfecto)", answer: "estábamos" },
        { type: "fill", q: "Ella ___ visitando París el año pasado. (estar - perfecto simple)", answer: "estuvo" },
        { type: "mc", q: "El presidente ___ un discurso. (echar)", options: ["echó", "echaba", "echa"], correct: 0 },
        { type: "mc", q: "Vamos a ___ al departamento. (echar un vistazo)", options: ["echar un vistazo", "echar de menos", "echar una mano"], correct: 0 },
        { type: "mc", q: "Te ___ de menos, amor! (echar)", options: ["echo", "echas", "echaste"], correct: 0 },
        { type: "translate", from: "pt", text: "Estou sentindo saudades de você, amor!", answer: "Te echo de menos, amor!" },
        { type: "listen", audioText: "Estaba de paseo por el centro comercial cuando vi a Lucy comprando cosas para la casa.", q: "Onde a pessoa estava quando viu Lucy?", answer: "Estava passeando pelo shopping." },
        { type: "speak", prompt: "Diga em espanhol: 'Ela está muito feliz.'", target: "Ella está muy feliz." },
        { type: "order", items: ["Hola, Bianca!, que tal?", "Hola Mari! Bien, gracias!", "Vale! Hasta pronto!"], correctOrder: [0, 1, 2] },
        { type: "open", q: "O que havia na sua última casa/apartamento? Cite três objetos em espanhol.", sample: "En mi casa hay un sofá, una lámpara y una alfombra." }
      ]
    },
    {
      id: "i5",
      order: 5,
      title: "Mañana",
      subtitle: "Muy x Mucho, Pronombres Átonos e Futuro Simple",
      text: "Mañana voy a levantarme temprano porque probablemente empezaré a trabajar a las ocho de la mañana. Tendré muchas cosas que hacer. Antes de salir, mientras me preparo el desayuno, llamaré a mi madre por teléfono y después de comer, saldré más o menos a las siete y media para el trabajo. Después de volver del trabajo creo que mis amigos me invitarán a cenar con ellos, pues será el cumpleaños de María, una amiga muy querida. Será un gusto verla y ya le he comprado un regalito! Seguramente me divertiré, comeré mucho y luego volveré a mi casa para dormir y el próximo día empezar todo de nuevo. Siempre ha sido y creo que siempre será así.",
      vocabulary: [
        { category: "MUY x MUCHO", items: [
          { es: "MUY (advérbio, invariável, antes de adjetivo/advérbio) — Julia es muy guapa." },
          { es: "MUCHO (adjetivo, varia em gênero/número, antes de substantivo) — Tengo mucho trabajo en la oficina hoy." },
          { es: "MUCHO (advérbio, invariável, depois de verbo) — Siempre como mucho." },
          { es: "MUCHO (pronome) — Muchos lo ayudaron." },
          { es: "MUCHÍSIMO (intensificado) — Te quiero muchísimo!" },
          { es: "Exceções fixas: MUCHO antes / MUCHO después; MUCHO más / MUCHO menos; MUCHO mayor / MUCHO menor; MUCHO mejor / MUCHO peor." }
        ] },
        { category: "Pronombres Personales Átonos — Objeto Directo", items: [
          { es: "Yo — me" }, { es: "Tú/Vos — te" }, { es: "Él/Ella/Usted — lo/la/le*" },
          { es: "Nosotros/Nosotras — nos" }, { es: "Vosotros/Vosotras — os" }, { es: "Ellos/Ellas/Ustedes — los/las/les*" }
        ] },
        { category: "Pronombres Personales Átonos — Objeto Indirecto", items: [
          { es: "Yo — me" }, { es: "Tú/Vos — te" }, { es: "Él/Ella/Usted — le/se*" },
          { es: "Nosotros/Nosotras — nos" }, { es: "Vosotros/Vosotras — os" }, { es: "Ellos/Ellas/Ustedes — les/se" }
        ] }
      ],
      grammar: [
        {
          title: "Futuro Simple (Imperfecto) del Indicativo — verbos regulares",
          headers: ["Pronombres", "Amar", "Esconder", "Escribir"],
          rows: [
            ["Yo", "Amaré", "Esconderé", "Escribiré"],
            ["Tú/Vos", "Amarás", "Esconderás", "Escribirás"],
            ["Él/Ella/Usted", "Amará", "Esconderá", "Escribirá"],
            ["Nosotros/Nosotras", "Amaremos", "Esconderemos", "Escribiremos"],
            ["Vosotros/Vosotras", "Amaréis", "Esconderéis", "Escribiréis"],
            ["Ellos/Ellas/Ustedes", "Amarán", "Esconderán", "Escribirán"]
          ]
        }
      ],
      notes: [
        "Verbos irregulares no futuro (raiz irregular + terminações regulares): Caber-cabré; Decir-diré; Haber-habré; Hacer-haré; Poder-podré; Poner-pondré; Querer-querré; Saber-sabré; Salir-saldré; Tener-tendré; Valer-valdré; Venir-vendré.",
        "Futuro Próximo: descreve ação a se realizar imediatamente ou ação confirmada/planejada (voy a + infinitivo). Futuro Simples: incerteza, suposição, sugestão, ordens atemporais, condicional tipo 1.",
        "Complemento directo: segue o verbo; identifica-se perguntando 'qué?' ou 'a quién?'. Ex.: El otro día fui al hospital a ver a María. -> El otro día fui al hospital a verla.",
        "Complemento indirecto: leva preposição 'a'/'para'; identifica-se perguntando 'a quién?' ou 'para quién?'. Ex.: Compro comida para Toby. -> Le compro comida."
      ],
      exercises: [
        { type: "fill", q: "Creo que nunca ___ a tiempo para el tren de las cinco. (ellos/llegar)", answer: "llegarán" },
        { type: "fill", q: "A partir de mañana creo que ___ a cobrar las entradas. (nosotros/empezar)", answer: "empezaremos" },
        { type: "fill", q: "Dentro de una década ___ ricos. (vosotros/ser)", answer: "seréis" },
        { type: "fill", q: "No me ___ lo que sientes? (tú/decir)", answer: "dirás" },
        { type: "mc", q: "Ella es ___ hermosa.", options: ["muy", "mucho", "muchos"], correct: 0 },
        { type: "mc", q: "Nosotros siempre trabajamos ___.", options: ["muy", "mucho", "muchas"], correct: 1 },
        { type: "mc", q: "Tengo ___ hambre o podemos esperar un poquito más?", options: ["muy", "mucho", "mucha"], correct: 2 },
        { type: "mc", q: "Voy a llamar a María. — Substituindo por pronome:", options: ["Voy a llamarla.", "Voy a llamarle solo.", "Voy a llamar."], correct: 0 },
        { type: "translate", from: "pt", text: "Comi toda a massa. (substitua por pronome)", answer: "Me la comí (toda)." },
        { type: "listen", audioText: "Mañana voy a levantarme temprano porque probablemente empezaré a trabajar a las ocho de la mañana.", q: "A que horas a pessoa vai começar a trabalhar amanhã?", answer: "Às oito da manhã." },
        { type: "speak", prompt: "Diga em espanhol: 'Eu vou me divertir muito.'", target: "Me divertiré mucho." },
        { type: "open", q: "O que você fará amanhã? Use o futuro simples.", sample: "Mañana trabajaré por la mañana y saldré con mis amigos por la noche." }
      ]
    },
    {
      id: "i6",
      order: 6,
      title: "Gira",
      subtitle: "Conselhos, Condicional e Pretérito Imperfecto de Subjuntivo",
      dialogue: [
        { who: "A", es: "Hola, Fede! Cómo te fue la gira de ayer?" },
        { who: "B", es: "Mal! Fuimos al zoológico pero no estuvo muy buena la gira. Mañana vamos a salir de paseo pero no sé cuál lugar elegir." },
        { who: "A", es: "Bueno...Si yo fuera tú, seguramente elegiría ir a conocer un museo, qué te parece?" },
        { who: "B", es: "Me parece una buena idea, pero, y el almuerzo? Tenemos que elegir ir a comer en un restaurante chino, un restaurante japonés o uno que tiene comida regional." },
        { who: "A", es: "Yo probaría sin duda los platos regionales a ver cómo saben." },
        { who: "B", es: "Perfecto, amiga! Ahora ya tengo casi todo planeado para mañana. Solo quisiera preguntarte una cosita más." },
        { who: "A", es: "Dime, Fede!" },
        { who: "B", es: "No me siento muy bien, creo que estoy enfermo por el frío. Qué debo hacer para sentirme mejor por la mañana?" },
        { who: "A", es: "Debes tomar una aspirina e ir a dormir. Estoy segura de que vas a sentirte mejor mañana." },
        { who: "B", es: "Ok, voy a hacerlo ya! Gracias por todo! Mañana te lo cuento." }
      ],
      vocabulary: [
        { category: "Como hablar de un paseo (positivo)", items: [
          { es: "Me encantó!" }, { es: "Estuvo muy bueno!" }, { es: "Me gustó mucho!" }, { es: "Quiero hacerlo de nuevo!" },
          { es: "Quiero ir más veces allá!" }, { es: "Que bueno que decidí ir!" }, { es: "Lo recomendaré a mis amigos!" }, { es: "Fue inolvidable!" }
        ] },
        { category: "Como hablar de un paseo (negativo)", items: [
          { es: "Lo detesté/odié" }, { es: "Peor imposible" }, { es: "La peor cosa que ya he hecho" }, { es: "Me morí de sueño" },
          { es: "No podía ser peor" }, { es: "Se lo recomendaré a mis enemigos" }, { es: "Muy aburrido" }, { es: "Un horror/desastre" }
        ] },
        { category: "Consejos y recomendaciones", items: [
          { es: "Opción 1: Deber + Infinitivo — Debes tomar una aspirina." },
          { es: "Opción 2: Yo + Condicional — Yo bebería menos." },
          { es: "Opción 3: Yo que tú + Condicional — Yo que tú iría de vacaciones a Barcelona." },
          { es: "Opción 4: Si yo fuera tú + Condicional — Si yo fuera tú estudiaría más." }
        ] }
      ],
      grammar: [
        {
          title: "Condicional — verbos regulares",
          headers: ["Pronombres", "Cantar", "Correr", "Existir"],
          rows: [
            ["Yo", "Cantaría", "Correría", "Existiría"],
            ["Tú/Vos", "Cantarías", "Correrías", "Existirías"],
            ["Él/Ella/Usted", "Cantaría", "Correría", "Existiría"],
            ["Nosotros/Nosotras", "Cantaríamos", "Correríamos", "Existiríamos"],
            ["Vosotros/Vosotras", "Cantaríais", "Correríais", "Existiríais"],
            ["Ellos/Ellas/Ustedes", "Cantarían", "Correrían", "Existirían"]
          ]
        },
        {
          title: "Condicional — irregulares (Salir, Hacer, Decir)",
          headers: ["Pronombres", "Salir", "Hacer", "Decir"],
          rows: [
            ["Yo", "Saldría", "Haría", "Diría"],
            ["Tú/Vos", "Saldrías", "Harías", "Dirías"],
            ["Él/Ella/Usted", "Saldría", "Haría", "Diría"],
            ["Nosotros/Nosotras", "Saldríamos", "Haríamos", "Diríamos"],
            ["Vosotros/Vosotras", "Saldríais", "Haríais", "Diríais"],
            ["Ellos/Ellas/Ustedes", "Saldrían", "Harían", "Dirían"]
          ]
        },
        {
          title: "Pretérito Imperfecto de Subjuntivo — Tipo 1 (-ra)",
          headers: ["Pronombres", "Amar", "Comer", "Vivir"],
          rows: [
            ["Yo", "Amara", "Comiera", "Viviera"],
            ["Tú/Vos", "Amaras", "Comieras", "Vivieras"],
            ["Él/Ella/Usted", "Amara", "Comiera", "Viviera"],
            ["Nosotros/Nosotras", "Amáramos", "Comiéramos", "Viviéramos"],
            ["Vosotros/Vosotras", "Amarais", "Comierais", "Vivierais"],
            ["Ellos/Ellas/Ustedes", "Amaran", "Comieran", "Vivieran"]
          ]
        }
      ],
      notes: [
        "SALIR = Tener, poner, valer, venir, poder (mesmo padrão). HACER = Haber, caber, querer, saber (mesmo padrão).",
        "Condicional: usado para expressar ações ou situações hipotéticas, além de perguntas em tom de cortesia ou desejos. Ex.: Yo compraría diez casas si sacara la lotería. / Podría ayudarme?",
        "Pretérito Imperfecto de Subjuntivo: usado nas orações condicionais imaginárias ou improváveis. Ex.: Si trabajara desde casa, viviría en una casita en el campo.",
        "Existe também a forma alternativa Tipo 2 em -se: Amase, Comiese, Viviese, Estuviese, Anduviese, Hiciese, Fuese, Pudiese, Quisiese, Tuviese, Trajese."
      ],
      exercises: [
        { type: "fill", q: "Maria tiene dolor de garganta. Creo que ella ___ tomar una pastilla. (deber - condicional)", answer: "debería" },
        { type: "fill", q: "No quiero ir a la fiesta. / Qué lástima! Yo que tú ___. (ir - condicional)", answer: "iría" },
        { type: "fill", q: "Si tú ___ menos aburrida, yo ___ contigo. (ser - salir)", answer: "fueras / saldría", altAnswers: ["fueses / saldría"] },
        { type: "fill", q: "Yo que tú, ___ más. (estudiar)", answer: "estudiaría" },
        { type: "fill", q: "Si yo ___ plata, ___ en este momento. (tener - viajar)", answer: "tuviera / viajaría", altAnswers: ["tuviese / viajaría"] },
        { type: "mc", q: "Yo que tú ___ menos.", options: ["dormir", "dormiría", "dormirá"], correct: 1 },
        { type: "mc", q: "Creo que tú ___ estudiar más.", options: ["debe", "debes", "deber"], correct: 1 },
        { type: "mc", q: "Si el ___, ___ menos.", options: ["pudiera-trabajar", "estuvieras-trabajaria", "pudiera-trabajaría"], correct: 2 },
        { type: "translate", from: "pt", text: "Se eu fosse você, iria conhecer um museu.", answer: "Si yo fuera tú, iría a conocer un museo." },
        { type: "listen", audioText: "Debes tomar una aspirina e ir a dormir.", q: "Que conselho a amiga dá para Fede se sentir melhor?", answer: "Tomar uma aspirina e ir dormir." },
        { type: "speak", prompt: "Diga em espanhol: 'Eu provaria sem dúvida os pratos regionais.'", target: "Yo probaría sin duda los platos regionales." },
        { type: "open", q: "O que você faria se ganhasse na loteria? Use o condicional.", sample: "Si ganara la lotería, viajaría por todo el mundo." }
      ]
    },
    {
      id: "i7",
      order: 7,
      title: "DELE",
      subtitle: "Verbos Haber/Hacer/Ir/Poder/Tener e Presente de Subjuntivo",
      text: "El DELE (Diploma de Español como Lengua Extranjera) es un examen internacional de lengua española que mide la habilidad de comunicación en español de una persona de cuatro maneras: oyendo, leyendo, escribiendo y hablando. Este test es buscado principalmente por personas que desean estudiar o trabajar donde el español es la lengua de comunicación y necesitan o simplemente quieren saber cuál es su nivel en este idioma. Desde 1991, el DELE ha sido probado y confiado por todo el mundo como un test seguro y auténtico, además de ser reconocido internacionalmente en muchas instituciones de educación. El DELE es elaborado por el Instituto Cervantes y es ofrecido en más de 650 centros que hay en más de 100 países del mundo.",
      vocabulary: [
        { category: "Usos del verbo HABER", items: [
          { es: "Sentido de existir (invariável) — Hay mucho sol. / Hubo un problema." },
          { es: "Como verbo auxiliar nos tempos compostos — He estado muy enferma estos días." },
          { es: "Para transmitir um pedido/aviso geral (invariável) — Hay que esperar." }
        ] },
        { category: "Usos del verbo HACER", items: [
          { es: "Sentido de atividade — Y ahora, qué voy a hacer?" },
          { es: "Para descrever o tempo (invariável) — Hace sol. / Hace calor. / Hacía frío." },
          { es: "Para indicar ideia de tempo passado (invariável) — Hace 10 años que estudia japonés." },
          { es: "Como verbo de mudança (converter) — El vino se hizo vinagre." }
        ] },
        { category: "Usos del verbo IR", items: [
          { es: "Sentido de movimento — Yo siempre voy en coche al trabajo." },
          { es: "Para indicar futuro próximo — Yo voy a salir pronto." }
        ] },
        { category: "Usos del verbo PODER", items: [
          { es: "Indicar permissão — Puedo ir a la fiesta, mamá?" },
          { es: "Ideia de capacidade/habilidade — Puedo nadar con facilidad." },
          { es: "Ideia de possibilidade/probabilidade — Está muy nublado, puede que llueva." }
        ] },
        { category: "Usos del verbo TENER", items: [
          { es: "Expressa posse — Tengo un auto." },
          { es: "Expressa condição — Tengo frío. Tener calor, cuidado, deseos, éxito, ganas, la culpa, miedo, prisa, razón, sueño, suerte, vergüenza." },
          { es: "Indica idade — Julia tiene 12 años." },
          { es: "Expressa preocupação — Qué tiene usted?" }
        ] }
      ],
      grammar: [
        {
          title: "Presente Subjuntivo — verbos regulares",
          headers: ["Pronombres", "Amar", "Comer", "Vivir"],
          rows: [
            ["Yo", "Ame", "Coma", "Viva"],
            ["Tú/Vos", "Ames", "Comas", "Vivas"],
            ["Él/Ella/Usted", "Ame", "Coma", "Viva"],
            ["Nosotros/Nosotras", "Amemos", "Comamos", "Vivamos"],
            ["Vosotros/Vosotras", "Améis", "Comáis", "Viváis"],
            ["Ellos/Ellas/Ustedes", "Amen", "Coman", "Vivan"]
          ]
        },
        {
          title: "Presente Subjuntivo — irregulares (Querer, Sentir, Pedir, Poder)",
          headers: ["Pronombres", "Querer", "Sentir", "Pedir", "Poder"],
          rows: [
            ["Yo", "Quiera", "Sienta", "Pida", "Pueda"],
            ["Tú/Vos", "Quieras", "Sientas", "Pidas", "Puedas"],
            ["Él/Ella/Usted", "Quiera", "Sienta", "Pida", "Pueda"],
            ["Nosotros/Nosotras", "Queramos", "Sintamos", "Pidamos", "Podamos"],
            ["Vosotros/Vosotras", "Queráis", "Sintáis", "Pidáis", "Podáis"],
            ["Ellos/Ellas/Ustedes", "Quieran", "Sientan", "Pidan", "Puedan"]
          ]
        },
        {
          title: "Presente Subjuntivo — irregulares (Jugar, Conocer, Oír, Ver)",
          headers: ["Pronombres", "Jugar", "Conocer", "Oír", "Ver"],
          rows: [
            ["Yo", "Juegue", "Conozca", "Oiga", "Vea"],
            ["Tú/Vos", "Juegues", "Conozcas", "Oigas", "Veas"],
            ["Él/Ella/Usted", "Juegue", "Conozca", "Oiga", "Vea"],
            ["Nosotros/Nosotras", "Juguemos", "Conozcamos", "Oigamos", "Veamos"],
            ["Vosotros/Vosotras", "Juguéis", "Conozcáis", "Oigáis", "Veáis"],
            ["Ellos/Ellas/Ustedes", "Jueguen", "Conozcan", "Oigan", "Vean"]
          ]
        },
        {
          title: "Presente Subjuntivo — irregulares (Hacer, Poner, Salir, Traer)",
          headers: ["Pronombres", "Hacer", "Poner", "Salir", "Traer"],
          rows: [
            ["Yo", "Haga", "Ponga", "Salga", "Traiga"],
            ["Tú/Vos", "Hagas", "Pongas", "Salgas", "Traigas"],
            ["Él/Ella/Usted", "Haga", "Ponga", "Salga", "Traiga"],
            ["Nosotros/Nosotras", "Hagamos", "Pongamos", "Salgamos", "Traigamos"],
            ["Vosotros/Vosotras", "Hagáis", "Pongáis", "Salgáis", "Traigáis"],
            ["Ellos/Ellas/Ustedes", "Hagan", "Pongan", "Salgan", "Traigan"]
          ]
        },
        {
          title: "Presente Subjuntivo — irregulares (Dar, Estar, Haber, Ir, Saber, Ser)",
          headers: ["Pronombres", "Dar", "Estar", "Haber", "Ir", "Saber", "Ser"],
          rows: [
            ["Yo", "Dé", "Esté", "Haya", "Vaya", "Sepa", "Sea"],
            ["Tú/Vos", "Des", "Estés", "Hayas", "Vayas", "Sepas", "Seas"],
            ["Él/Ella/Usted", "Dé", "Esté", "Haya", "Vaya", "Sepa", "Sea"],
            ["Nosotros/Nosotras", "Demos", "Estemos", "Hayamos", "Vayamos", "Sepamos", "Seamos"],
            ["Vosotros/Vosotras", "Deis", "Estéis", "Hayáis", "Vayáis", "Sepáis", "Seáis"],
            ["Ellos/Ellas/Ustedes", "Den", "Estén", "Hayan", "Vayan", "Sepan", "Sean"]
          ]
        }
      ],
      notes: [
        "Consejos y recomendaciones (Opção 5): Recomendación + que + presente (subjuntivo). Ex.: Te recomiendo que descargues la aplicación.",
        "Presente Subjuntivo: usado em enunciados que apresentam um cenário presente ou futuro; também usado para o imperativo negativo. Ex.: Quiero que vayas al supermercado. / Ojalá gane Brasil!",
        "Expressões usadas: Quizás, ojalá, es conveniente, es importante, es incierto, es interesante, es necesario, es probable, es posible, es seguro."
      ],
      exercises: [
        { type: "fill", q: "Quiero ___ a México de vacaciones este año. (ir)", answer: "ir" },
        { type: "fill", q: "Yo ___ muchas cosas ayer. (hacer)", answer: "hice" },
        { type: "fill", q: "Ellos ___ mucha sed. Hay algo para beber? (tener)", answer: "tienen" },
        { type: "fill", q: "Se ___ fumar aquí? (poder)", answer: "puede" },
        { type: "fill", q: "Quiero que ___ más de lo que estás haciendo. (hacer - subjuntivo)", answer: "hagas" },
        { type: "fill", q: "Deseo que él ___ toda la verdad. (decir - subjuntivo)", answer: "diga" },
        { type: "fill", q: "Ojalá que ellos me ___ a su fiesta. (invitar - subjuntivo)", answer: "inviten" },
        { type: "fill", q: "Espero que el niño ___ sueño pronto. (tener - subjuntivo)", answer: "tenga" },
        { type: "mc", q: "Espero que ___ dormir bien esta noche. (ellos - poder)", options: ["puedan", "pueden", "podrán"], correct: 0 },
        { type: "translate", from: "pt", text: "Quero que você venha à minha festa.", answer: "Quiero que vengas a mi cumpleaños." },
        { type: "listen", audioText: "El DELE es un examen internacional de lengua española.", q: "O que é o DELE?", answer: "Um exame internacional de língua espanhola." },
        { type: "speak", prompt: "Diga em espanhol: 'Espero que tudo vá bem na faculdade.'", target: "Espero que todo vaya bien en la facultad." },
        { type: "open", q: "O que você espera que aconteça no futuro? Use 'espero que' + subjuntivo.", sample: "Espero que pueda viajar a España el próximo año." }
      ]
    },
    {
      id: "i8",
      order: 8,
      title: "Empleos",
      subtitle: "Verbo Pegar, Comparativos e Superlativos",
      text: "Usted está buscando un empleo? Cada vez más personas están procurando empleo o cambiando de puesto debido a los cambios del mercado laboral. Y cómo encontrar oportunidades de trabajo entre las millones que hay? Usted puede buscarlas en los periódicos locales, en grupos de Facebook, en sitios web y en otros lugares que tienen informaciones de posibles ofertas de trabajo. Una de las formas más rápidas de conseguir un empleo, es andando por la calle. Hay muchas tiendas y otros tipos de empresas que tienen carteles pegados delante de su negocio informando cuáles son los puestos disponibles para aquel lugar. Para terminar, hay muchos negocios que contratan su personal por medio de agencias de empleo. Seguramente vas a lograrlo pronto.",
      vocabulary: [
        { category: "Usos del verbo PEGAR", items: [
          { es: "Unir uma coisa a outra com substância adesiva — Ella pegó una hoja a otra usando un pegamento." },
          { es: "Golpear alguém — Ella le pegó a su amiga." },
          { es: "Transmitir uma doença/pensamento/ideia — Ella le pegó su gripe." }
        ] },
        { category: "Otros números", items: [
          { es: "1.002 — mil dos" }, { es: "1.500 — mil quinientos" }, { es: "1.752 — mil setecientos cincuenta y dos" },
          { es: "3.011 — tres mil once" }, { es: "6.024 — seis mil veinticuatro" }, { es: "1.000.000 — un millón" },
          { es: "2.000.000 — dos millones" }, { es: "1.000.000.000 — Mil millones (España) / Un billón (otros países)" },
          { es: "1.000.000.000.000 — Un billón (España) / Un trillón (otros países)" }
        ] },
        { category: "Comparativos de igualdad", items: [
          { es: "TAN + adjetivo/adverbio + COMO — María es tan inteligente como Lucas." },
          { es: "IGUAL DE + adjetivo/adverbio + QUE — La hormiga es igual de lenta que la tortuga." },
          { es: "LO MISMO QUE — Ir de paseo cuesta lo mismo que ir al teatro." },
          { es: "TANTO/TANTA/TANTOS/TANTAS + substantivo + COMO — Mi hermano bebe tanta leche como yo." }
        ] },
        { category: "Superlativos irregulares", items: [
          { es: "Bueno-Mejor-Óptimo" }, { es: "Malo-Peor-Pésimo" }, { es: "Grande-Mayor-Máximo" },
          { es: "Pequeño-Menor-Mínimo" }, { es: "Alto-Superior-Supremo" }, { es: "Bajo-Inferior-Ínfimo" }
        ] }
      ],
      grammar: [
        {
          title: "Comparativos de desigualdad",
          headers: ["Estrutura", "Exemplo"],
          rows: [
            ["Adjetivo/Sustantivo/Adverbio + MÁS/MENOS + QUE", "Yo soy más alta que él."],
            ["MÁS/MENOS DE + número", "Tengo más de tres mil dólares en el bolsillo."],
            ["MÁS/MENOS QUE (oración negativa)", "No tengo más que tres mil dólares en el bolsillo."]
          ]
        },
        {
          title: "Superlativos (superioridad/inferioridad)",
          headers: ["Estrutura", "Exemplo"],
          rows: [
            ["EL/LA/LOS/LAS + sustantivo + MÁS/MENOS + adjetivo + DE", "Este libro es el más importante de este escritor."]
          ]
        }
      ],
      notes: [
        "Adjetivos terminados em -BLE mudam para -BILÍSIMO: amable-amabilísimo; noble-nobilísimo; notable-notabilísimo; afable-afabilísimo.",
        "Outras formas irregulares: fiel-fidelísimo; antiguo-antiquísimo; sagrado-sacratísimo; simple-simplísimo; cruel-crudelísimo; sabio-sapientísimo.",
        "Adjetivos que não aceitam superlativos e comparativos: Eterno, Infinito, Omnipotente, Ilimitado, Inmortal, Único, Muerto, Difunto."
      ],
      exercises: [
        { type: "mc", q: "Tengo más de ___ pesos en mi billetera.", options: ["un mil", "uno mil", "mil"], correct: 2 },
        { type: "mc", q: "Soy ___ hermosa que María.", options: ["mejor", "más", "la"], correct: 1 },
        { type: "mc", q: "No tengo más ___ 1500 pesos en mi cuenta.", options: ["de", "que", "plata"], correct: 1 },
        { type: "mc", q: "Mi coche tiene ___ puertas ___ el de Julio.", options: ["tanto-que", "tantas-como", "tan-como"], correct: 1 },
        { type: "mc", q: "Mi madre es igual ___ fuerte ___ un caballo.", options: ["de-como", "de-que", "que-como"], correct: 0 },
        { type: "mc", q: "Somos los ___.", options: ["más buenos", "mejor", "mejores"], correct: 2 },
        { type: "fill", q: "Escribe en letras: 1900", answer: "mil novecientos" },
        { type: "fill", q: "El verano es casi igual de caliente ___ la primavera donde vivo.", answer: "que" },
        { type: "fill", q: "Ir al zoo cuesta lo ___ que ir al cine.", answer: "mismo" },
        { type: "translate", from: "pt", text: "Este é o pior livro que eu tenho.", answer: "Este es el peor libro que tengo." },
        { type: "listen", audioText: "Cada vez más personas están procurando empleo o cambiando de puesto.", q: "O que está acontecendo com cada vez mais pessoas?", answer: "Estão procurando emprego ou mudando de cargo." },
        { type: "speak", prompt: "Diga em espanhol: 'Ela é a mais trabalhadora da empresa.'", target: "Ella es la más trabajadora de la empresa." },
        { type: "open", q: "Compare duas coisas usando um comparativo de igualdade ou desigualdade em espanhol.", sample: "Mi hermano es más alto que yo." }
      ]
    },
    {
      id: "i9",
      order: 9,
      title: "Recetas",
      subtitle: "Como escrever receitas e Contracciones",
      text: "ENSALADA DE TOMATES, PIÑONES Y ALBAHACA CON HUEVOS DE CODORNIZ. INGREDIENTES: 400 gr de tomates cereza; 50 gr de piñones; 8 huevitos de codorniz; 10 aceitunas verdes con hueso; 1 ramito de albahaca; Aceite de oliva virgen; Sal. PASOS (10 minutos): Cocer los huevos de codorniz durante 3 minutos y enfriarlos bajo el chorro de agua; Una vez fríos, pelarlos y partirlos por la mitad a lo largo; Lavar y cortar los tomatitos en cuartos y ponerlos en una ensaladera; Añadir el resto de ingredientes y aderezar con aceite y sal.",
      vocabulary: [
        { category: "Como escribir una receta", items: [
          { es: "1 - Infinitivo — Picar la cebolla y el morrón... Condimentar con bastante pimentón... Freír en abundante grasa..." },
          { es: "2 - Presente (SE + presente indicativo) — Previamente ponemos a cocer... Picamos al gusto los vegetales..." },
          { es: "3 - Imperativo — Calienta en un hervidor el agua... Cuécelas por 5 o 6 minutos... Coloca una salchicha en el pan..." }
        ] },
        { category: "Contracciones", items: [
          { es: "A + el = al" }, { es: "De + el = del" }, { es: "De + ella = della" }, { es: "Donde + quiera = doquiera" },
          { es: "Entre + ambos = entrambos" }, { es: "Otra + hora = otrora" }, { es: "De + esto = desto" }
        ] },
        { category: "Contracciones coloquiais", items: [
          { es: "Para + allá = pa'lla" }, { es: "Para + arriba = pa'rriba" }, { es: "Para adelante = p'alante" },
          { es: "Para + que = pa' que" }, { es: "Para + atrás = p'atrás" }, { es: "Para + el = pal'" }
        ] }
      ],
      grammar: [
        {
          title: "Verbos no imperativo (tú/usted) usados em receitas",
          headers: ["Infinitivo", "Imperativo (tú)"],
          rows: [
            ["Pelar", "Pela"], ["Cortar", "Corta"], ["Poner", "Pon"], ["Lavar", "Lava"], ["Retirar", "Retira"], ["Añadir", "Añade"]
          ]
        }
      ],
      notes: [
        "Outra receita de exemplo mencionada na aula: Guacamole fácil (aguacates, cebolla, tomate, cilantro, chile, limón).",
        "A contração 'al' vem de 'a + el' e 'del' vem de 'de + el' — as duas contrações obrigatórias e mais usadas no espanhol moderno."
      ],
      exercises: [
        { type: "fill", q: "Del salón en el ángulo oscuro. — Qual contração aparece?", answer: "Del" },
        { type: "fill", q: "Voy ___ supermercado esta noche. (a + el)", answer: "al" },
        { type: "fill", q: "Mari, ya voy ___! (para + allá, coloquial)", answer: "pa'lla" },
        { type: "mc", q: "Pa'que lo quieres? — Contração de:", options: ["para + que", "para + el", "para + arriba"], correct: 0 },
        { type: "mc", q: "Qual verbo no imperativo (tú) corresponde a 'Añadir'?", options: ["Añade", "Añado", "Añadió"], correct: 0 },
        { type: "mc", q: "Qual verbo no imperativo (tú) corresponde a 'Pelar'?", options: ["Pela", "Pelo", "Peló"], correct: 0 },
        { type: "translate", from: "pt", text: "Corte a cebola e o pimentão.", answer: "Corta la cebolla y el morrón." },
        { type: "translate", from: "es", text: "Añadir el resto de ingredientes y aderezar con aceite y sal.", answer: "Adicione o restante dos ingredientes e tempere com azeite e sal." },
        { type: "listen", audioText: "Cocer los huevos de codorniz durante 3 minutos y enfriarlos bajo el chorro de agua.", q: "Por quanto tempo os ovos de codorna devem cozinhar?", answer: "3 minutos." },
        { type: "speak", prompt: "Diga em espanhol: 'Adicione sal e pimenta.'", target: "Añade sal y pimienta." },
        { type: "open", q: "Escreva os passos de uma receita simples em espanhol usando o imperativo.", sample: "Corta las verduras, calienta el aceite y fríe todo junto." }
      ]
    },
    {
      id: "i10",
      order: 10,
      title: "Gustos",
      subtitle: "Lugares da cidade, roupas e concordar/discordar",
      dialogue: [
        { who: "A", es: "Lucy! Vamos al cine mañana?" },
        { who: "B", es: "Amiga, discúlpame pero no me gustan las películas que hay en el cine estos días." },
        { who: "A", es: "Verdad...A mí tampoco. Y qué tal ir al centro de paseo y comprar unas prendas nuevas en alguna tienda? Eso sí me gusta hacer!" },
        { who: "B", es: "A mí también me gusta esa idea. Necesito unas camisetas, unos pantalones y zapatos. Podemos hacerlo, pero ahora me acordé, no tengo plata." },
        { who: "A", es: "Yo sí...Pasamos por el cajero automático en un banco cercano y puedo prestarte algunos pesos. Me los devuelves otro día, qué te parece?" },
        { who: "B", es: "Buenísimo! Muchas gracias, amiga! También quiero comer algo rico en mi restaurante favorito." },
        { who: "A", es: "Yo también ya que nos gusta el mismo restaurante. Entonces nos vemos mañana!" },
        { who: "B", es: "Sí, hasta pronto!" }
      ],
      vocabulary: [
        { category: "Lugares de la ciudad", items: [
          { es: "Parque", pt: "Parque" }, { es: "Plaza", pt: "Praça" }, { es: "Edificio", pt: "Edifício" },
          { es: "Universidad/Facultad", pt: "Universidade" }, { es: "Ayuntamiento/Alcaldía", pt: "Prefeitura" }, { es: "Teatro", pt: "Teatro" },
          { es: "Supermercado", pt: "Supermercado" }, { es: "Farmacia/Droguería", pt: "Farmácia" }, { es: "Escuela/Colegio", pt: "Escola" },
          { es: "Iglesia", pt: "Igreja" }, { es: "Fábrica", pt: "Fábrica" }, { es: "Aeropuerto", pt: "Aeroporto" },
          { es: "Catedral", pt: "Catedral" }, { es: "Tienda", pt: "Loja" }, { es: "Hospital", pt: "Hospital" },
          { es: "Restaurante/Restorán", pt: "Restaurante" }, { es: "Estación de tren/metro/subte", pt: "Estação de trem/metrô" },
          { es: "Parada de autobús/colectivo", pt: "Parada de ônibus" }, { es: "Estadio", pt: "Estádio" },
          { es: "Aparcamiento/Estacionamiento", pt: "Estacionamento" }, { es: "Cine", pt: "Cinema" }, { es: "Bar", pt: "Bar" },
          { es: "Hotel", pt: "Hotel" }, { es: "Correo/Oficina de correos", pt: "Correio" }, { es: "Museo", pt: "Museu" },
          { es: "Café/Cafetería", pt: "Café" }, { es: "Heladería", pt: "Sorveteria" }, { es: "Panadería", pt: "Padaria" },
          { es: "Gomería", pt: "Borracharia" }, { es: "Gimnasio", pt: "Academia" }, { es: "Frutería", pt: "Fruteira" },
          { es: "Florería/Floristería", pt: "Floricultura" }, { es: "Pescadería", pt: "Peixaria" }, { es: "Carnicería", pt: "Açougue" },
          { es: "Banco", pt: "Banco" }, { es: "Centro Comercial/Shopping", pt: "Shopping" }, { es: "Centro", pt: "Centro" },
          { es: "Teléfono público/Cabina telefónica", pt: "Orelhão" }, { es: "Cajero automático", pt: "Caixa eletrônico" },
          { es: "Joyería", pt: "Joalheria" }, { es: "Biblioteca", pt: "Biblioteca" }, { es: "Contenedor de basura", pt: "Lixeira" },
          { es: "Comisaría de policía", pt: "Delegacia de polícia" }, { es: "Librería", pt: "Livraria" }, { es: "Zoológico", pt: "Zoológico" },
          { es: "Peluquería", pt: "Cabeleireiro" }, { es: "Almacén", pt: "Armazém" }, { es: "Gasolinera/Estación de servicios", pt: "Posto de combustível" },
          { es: "Lotería (tienda)", pt: "Lotérica" }, { es: "Taller mecánico", pt: "Oficina mecânica" }, { es: "Quiosco/Kiosco", pt: "Banca/Conveniência" }
        ] },
        { category: "Ropas/Prendas de vestir y accesorios", items: [
          { es: "Abrigo", pt: "Casaco" }, { es: "Anorak", pt: "Jaqueta com capuz" }, { es: "Bañador", pt: "Maiô" },
          { es: "Biquini", pt: "Biquíni" }, { es: "Blusa", pt: "Blusa" }, { es: "Camisa", pt: "Camisa" },
          { es: "Camiseta/Remera/Playera", pt: "Camiseta" }, { es: "Boina", pt: "Boina" }, { es: "Botas", pt: "Botas" },
          { es: "Bragas", pt: "Calcinhas" }, { es: "Bufanda", pt: "Cachecol" }, { es: "Calcetines/Medias", pt: "Meias" },
          { es: "Calzoncillos", pt: "Cuecas" }, { es: "Camisón", pt: "Camisola" }, { es: "Cinturón", pt: "Cinto" },
          { es: "Chaleco", pt: "Colete" }, { es: "Chándal", pt: "Abrigo completo" }, { es: "Chaqueta", pt: "Jaqueta" },
          { es: "Corbata", pt: "Gravata" }, { es: "Falda/Saya/Pollera", pt: "Saia" }, { es: "Gorra", pt: "Boné" },
          { es: "Guantes", pt: "Luvas" }, { es: "Pantalones (de vaquero)/Jeans", pt: "Calças" }, { es: "Pantalones cortos", pt: "Bermuda" },
          { es: "Pantuflas", pt: "Pantufas" }, { es: "Pañuelo", pt: "Lenço" }, { es: "Vestido", pt: "Vestido" },
          { es: "Uniforme", pt: "Uniforme" }, { es: "Piyamas/Pijamas", pt: "Pijamas" }, { es: "Sudadera", pt: "Moletom" },
          { es: "Sandalias", pt: "Sandálias" }, { es: "Sombrero", pt: "Chapéu" }, { es: "Shorts", pt: "Shorts" },
          { es: "Anillo", pt: "Anel" }, { es: "Sostén/Sujetador", pt: "Sutiã" }, { es: "Collar", pt: "Colar" },
          { es: "Suéter", pt: "Suéter" }, { es: "Pulsera", pt: "Pulseira" }, { es: "Tacones", pt: "Saltos" },
          { es: "Pendientes/Aretes/Zarcillos", pt: "Brincos" }, { es: "Traje", pt: "Traje" }, { es: "Reloj", pt: "Relógio" },
          { es: "Saco", pt: "Paletó" }, { es: "Gafas/Anteojos/Lentes", pt: "Óculos" }, { es: "Zapatillas/Deportivas/Tenis", pt: "Tênis" },
          { es: "Zapatos", pt: "Sapatos" }, { es: "Cartera/Bolso", pt: "Bolsa" }, { es: "Cartera/Billetera", pt: "Carteira" },
          { es: "Nadadora/Musculosa", pt: "Regata" }, { es: "Goma elástica", pt: "Elástico para cabelo" }, { es: "Gorro", pt: "Gorro/Touca" }
        ] }
      ],
      grammar: [
        {
          title: "Acuerdo y desacuerdo",
          headers: ["Situação", "Expressão"],
          rows: [
            ["Acuerdo (afirmativa)", "Yo también / A mí también"],
            ["Desacuerdo (afirmativa)", "Yo no / A mí no"],
            ["Acuerdo (negativa)", "Yo tampoco / A mí tampoco"],
            ["Desacuerdo (negativa)", "Yo sí / A mí sí"]
          ]
        }
      ],
      notes: [
        "Regras sobre 'tampoco': 1) Quando tampoco vem antes do verbo, é incorreto usar NO antes do verbo na mesma frase (Tampoco no tengo hambre = incorreto; Tampoco tengo hambre = correto).",
        "2) Tampoco é um advérbio usado para negar algo depois de já ter negado outra coisa. Ex.: No juegan fútbol pero tampoco juegan tenis.",
        "3) Pode-se usar NO antes do verbo e tampoco depois do verbo. Ex.: No canto. No bailo tampoco."
      ],
      exercises: [
        { type: "mc", q: "En qué lugar debemos ir para comprar frutas?", options: ["A la frutería", "Al cine", "A la iglesia"], correct: 0 },
        { type: "mc", q: "En qué lugar debemos ir para ver películas?", options: ["Al parque", "Al cine", "A la librería"], correct: 1 },
        { type: "mc", q: "En qué lugar debemos ir para comprar libros?", options: ["A la librería", "A la farmacia", "Al banco"], correct: 0 },
        { type: "fill", q: "Me encanta salir con mis amigos. (concordar) — Resposta:", answer: "A mí también" },
        { type: "fill", q: "No me gusta esta película. (concordar) — Resposta:", answer: "A mí tampoco" },
        { type: "fill", q: "Estudio mucho. (discordar) — Resposta:", answer: "Yo no" },
        { type: "fill", q: "No me gusta ir al museo. (discordar) — Resposta:", answer: "A mí sí" },
        { type: "mc", q: "Qual é a peça de roupa 'Bufanda' em português?", options: ["Cachecol", "Boné", "Cinto"], correct: 0 },
        { type: "translate", from: "pt", text: "Não tenho dinheiro para comprar as calças.", answer: "No tengo plata para comprar los pantalones." },
        { type: "listen", audioText: "No me gustan las películas que hay en el cine estos días.", q: "Por que Lucy não quer ir ao cinema?", answer: "Porque não gosta dos filmes em cartaz atualmente." },
        { type: "speak", prompt: "Diga em espanhol: 'Eu também gosto dessa ideia.'", target: "A mí también me gusta esa idea." },
        { type: "open", q: "Diga três lugares da cidade que você visita com frequência, em espanhol.", sample: "Voy mucho al supermercado, a la farmacia y al parque." }
      ]
    },
    {
      id: "i11",
      order: 11,
      title: "Tránsito",
      subtitle: "Expressões de tempo, transportes e o verbo QUEDAR",
      text: "Luciano se levanta todos los días a las siete de la mañana, desayuna con su mujer y luego sale para ir a trabajar. El va a trabajar en coche porque la empresa queda lejos, pero no le gusta para nada el tránsito de su ciudad. Hay muchos conductores yendo al trabajo al mismo tiempo entonces el tráfico empieza a embotellarse. Como en todas ciudades grandes, hay siempre calles y avenidas atascadas, pero este no es el único problema que le impide de tener una mañana tranquila. Después de todo eso, Luciano aún tiene que encontrar un sitio para aparcar su coche cerca de la empresa. El año que viene, quiere cambiar de trabajo y buscar un puesto en una empresa más cerca de su casa, adonde pueda ir a pie.",
      vocabulary: [
        { category: "Expresiones de tiempo — Pasado", items: [
          { es: "Ayer" }, { es: "Anteayer" }, { es: "Anoche" }, { es: "Anteanoche" }, { es: "El año pasado" },
          { es: "La semana pasada" }, { es: "El lunes pasado" }, { es: "Hace dos días" }, { es: "Desde 1990" },
          { es: "Desde hace mucho tiempo" }, { es: "En 2015" }, { es: "En octubre" }
        ] },
        { category: "Expresiones de tiempo — Presente", items: [
          { es: "Ahora" }, { es: "Ahorita" }, { es: "Hoy" }, { es: "Esta semana" }, { es: "En este momento" }
        ] },
        { category: "Expresiones de tiempo — Futuro", items: [
          { es: "Mañana" }, { es: "Pasado mañana" }, { es: "El próximo año" }, { es: "La próxima semana" },
          { es: "El mes que viene" }, { es: "En 2035" }
        ] },
        { category: "Medios de transporte", items: [
          { es: "A pie" }, { es: "En coche/auto/carro" }, { es: "Autobús/bus/colectivo/ómnibus/guagua/camión" },
          { es: "Camión" }, { es: "Tren" }, { es: "Avión" }, { es: "Motocicleta/moto" }, { es: "Metro/subte" },
          { es: "Microbús/buseta" }, { es: "Lancha" }, { es: "Helicóptero" }, { es: "Taxi" }, { es: "Tranvía" }
        ] },
        { category: "Verbos e termos relacionados ao trânsito", items: [
          { es: "Conducir" }, { es: "Manejar" }, { es: "Embotellar" }, { es: "Atascar" }, { es: "Alquilar" },
          { es: "Aparcar/Estacionar" }, { es: "Tránsito" }, { es: "Tráfico" }, { es: "Trayecto" }, { es: "Taxista/Chofer" },
          { es: "Esquina" }, { es: "Calle" }, { es: "Carretera" }, { es: "Avenida" }, { es: "Semáforo" },
          { es: "Carné de conducir" }, { es: "Alquiler de coches" }, { es: "Peatón" }, { es: "Paso peatonal/de peatones" }
        ] },
        { category: "Señales de tránsito (preventivas, exemplos)", items: [
          { es: "Curva" }, { es: "Curva cerrada" }, { es: "Camino sinuoso" }, { es: "Contracurva" }, { es: "Bifurcación" },
          { es: "Cruce" }, { es: "Doble circulación" }, { es: "Glorieta" }, { es: "Zona escolar" }, { es: "Paso peatonal" },
          { es: "Alto próximo" }, { es: "Cruce de ferrocarril" }, { es: "Semáforo" }, { es: "Ciclistas" }
        ] }
      ],
      grammar: [
        {
          title: "Usos del verbo QUEDAR",
          headers: ["Sentido", "Exemplo"],
          rows: [
            ["Permanecer em um estado", "Yo voy a quedarme en casa."],
            ["Chegar a um estado final", "La pasta quedó buena."],
            ["Restar/sobrar algo", "Cuánto te ha quedado de plata?"],
            ["Estar situado a certa distância", "La escuela queda lejos de aquí."],
            ["Tempo restante para algo", "Queda un mes para la Navidad."],
            ["Concertar uma cita", "Quedamos en ir al cine a las 10h."]
          ]
        }
      ],
      notes: [
        "Semáforo: Detenerse = pararse (vermelho); Prevención = precaución (amarelo); Iniciar (verde).",
        "Classicamente: rojo = alto (pare); amarillo = atención/precaución; verde = avance (siga)."
      ],
      exercises: [
        { type: "fill", q: "Me acuerdo de lo que hiciste el año pasado en tu pelo. ___ terrible. (quedar)", answer: "Quedó" },
        { type: "fill", q: "Dónde ___ el supermercado más cercano, María? (quedar)", answer: "queda" },
        { type: "fill", q: "Cuánto tiempo todavía nos ___ en el centro comercial? (quedar)", answer: "queda" },
        { type: "fill", q: "Todavía ___ 1 semana para el feriado. (quedar)", answer: "queda" },
        { type: "mc", q: "Maria sale todos los días para trabajar en ___ porque su trabajo queda lejos.", options: ["coche", "pie", "avión"], correct: 0 },
        { type: "mc", q: "A veces, ella coge el ___ si no tiene ganas de conducir su coche.", options: ["autobús", "tren", "helicóptero"], correct: 0 },
        { type: "mc", q: "Lo mejor sería poder ir a trabajar a ___.", options: ["pie", "coche", "moto"], correct: 0 },
        { type: "translate", from: "pt", text: "A escola fica longe daqui.", answer: "La escuela queda lejos de aquí." },
        { type: "listen", audioText: "Luciano se levanta todos los días a las siete de la mañana.", q: "A que horas Luciano se levanta todos os dias?", answer: "Às sete da manhã." },
        { type: "speak", prompt: "Diga em espanhol: 'Não gosto nada do trânsito da minha cidade.'", target: "No me gusta para nada el tránsito de mi ciudad." },
        { type: "order", items: ["Anteayer", "Ayer", "Hoy", "Mañana", "Pasado mañana"], correctOrder: [0, 1, 2, 3, 4] },
        { type: "open", q: "Como você vai ao trabalho ou à escola? Responda em espanhol usando um meio de transporte.", sample: "Voy al trabajo en autobús todos los días." }
      ]
    },
    {
      id: "i12",
      order: 12,
      title: "Llamada Telefónica",
      subtitle: "Aparelhos de comunicação e frases úteis ao telefone",
      dialogue: [
        { who: "N", es: "Suena el teléfono" },
        { who: "A", es: "Diga!" },
        { who: "B", es: "Quién habla?" },
        { who: "A", es: "Hola! Le habla Julieta." },
        { who: "B", es: "Por favor!, puedo hablar con Fernando?" },
        { who: "A", es: "De parte de quién?" },
        { who: "B", es: "Soy Lucía, trabajo con él." },
        { who: "A", es: "Un momento, por favor!" },
        { who: "B", es: "Gracias!" },
        { who: "C", es: "Hola, Lucía! Qué tal?" },
        { who: "B", es: "Bien, gracias! Y tú?" },
        { who: "C", es: "Tranquilo...Mira, estoy cocinando ahora. Te puedo llamar dentro de un rato?" },
        { who: "B", es: "Por supuesto!, espero tu llamada." },
        { who: "C", es: "Ok. Hasta luego!" },
        { who: "N", es: "1 hora después - Suena el teléfono" },
        { who: "B", es: "Aló!" },
        { who: "C", es: "Lucía, te habla Fernando. Perdón por no haber podido hablar antes. Qué necesitabas?" },
        { who: "B", es: "No te preocupes. Esta noche vamos a por una cerve en la U donde estudia Julieta. Quieres ir con nosotros?" },
        { who: "C", es: "Por supuesto. Estoy libre a las 8h. Nos vemos allá! Gracias por la invitación!" },
        { who: "B", es: "De nada! Hasta luego!" }
      ],
      vocabulary: [
        { category: "Aparatos/dispositivos de comunicación", items: [
          { es: "Correo" }, { es: "Teléfono fijo" }, { es: "Teléfono celular o móvil" }, { es: "Videoconferencias" },
          { es: "Sitios de redes sociales" }, { es: "Herramientas de ciberchat" }, { es: "Fax" }, { es: "Computador(a)/Ordenador" },
          { es: "Computador portátil/laptop" }, { es: "Notebook y Netbook" }, { es: "Tableta/Tablet" }, { es: "Software" },
          { es: "Televisión/Tele" }, { es: "Radio" }
        ] },
        { category: "Verbos útiles relacionados", items: [
          { es: "Hablar", pt: "Falar" }, { es: "Charlar", pt: "Bater papo" }, { es: "Atender", pt: "Atender" },
          { es: "Contestar", pt: "Atender/Responder" }, { es: "Esperar", pt: "Esperar" }, { es: "Repetir", pt: "Repetir" },
          { es: "Equivocarse", pt: "Se enganar" }, { es: "Recibir", pt: "Receber" }, { es: "Pasar", pt: "Passar/Acontecer" },
          { es: "Colgar", pt: "Desligar" }, { es: "Coger", pt: "Pegar" }, { es: "Llamar", pt: "Ligar" }, { es: "Anotar", pt: "Anotar" }
        ] },
        { category: "Haciendo la llamada", items: [
          { es: "Hola! Por favor, puedo hablar con (Luciara)?" }, { es: "Puede(s) pasarme con (Julia)?" },
          { es: "Hola!, (Helio) está?" }, { es: "Aquí es (Mauro)." }, { es: "Trabajo con él/ella." },
          { es: "Puede(s) hablar ahora?" }, { es: "Recibiste mi recado/mensaje?" }
        ] },
        { category: "Contestando el teléfono", items: [
          { es: "Diga!/Dígame!" }, { es: "Aló!" }, { es: "Bueno!" }, { es: "Sí?" }, { es: "Quién habla?" },
          { es: "De parte de quién?" }, { es: "Un momento, no cuelgue(s)." }
        ] },
        { category: "Problemas durante la llamada", items: [
          { es: "Perdón, se cortó la llamada." }, { es: "Hay un cruce de líneas." }, { es: "Hay muchas interferencias." },
          { es: "Te escucho mal." }, { es: "Lo siento, me he equivocado de número." }, { es: "El teléfono está ocupado." }
        ] },
        { category: "Acortamientos (exemplos)", items: [
          { es: "Automóvil-Auto" }, { es: "Autobús-Bus" }, { es: "Celular-Celu" }, { es: "Bicicleta-Bici" }, { es: "Cerveza-Cerve" },
          { es: "Fin de semana-Finde" }, { es: "Facultad-Facu/Facul" }, { es: "Computadora-Compu" }, { es: "Cumpleaños-Cumple" },
          { es: "Oficina-Ofi" }, { es: "Por favor-Porfa" }, { es: "Universidad-Uni/U" }, { es: "Profesor-Profe" }, { es: "Película-Peli" }
        ] },
        { category: "Jergas en línea/lenguaje chat/SMS", items: [
          { es: "Ademas-Ade+" }, { es: "Cuánto-Knto" }, { es: "Porque-Xq/Xk" }, { es: "Tampoco-Tp" }, { es: "Nada-Nd" },
          { es: "No te preocupes-Ntp" }, { es: "Gracias-Grax" }, { es: "También-Tmb/Tb" }, { es: "Te quiero-Tq/Tk" },
          { es: "Estoy-Toy" }, { es: "Que-Q" }, { es: "Nos vemos-Ns Vms" }, { es: "Adiós-A2" }, { es: "Beso-B/X" }
        ] }
      ],
      grammar: [
        {
          title: "Llamado x Llamada",
          headers: ["Região", "Uso"],
          rows: [
            ["España", "Usa-se unicamente 'llamada'"],
            ["América", "Alterna-se 'llamado' e 'llamada'"]
          ]
        }
      ],
      notes: [
        "Terminando la llamada: Tengo que colgar. / Que bueno hablar contigo! / Entonces hasta el (martes). / Un beso/besote/besito/abrazo... / Hasta luego! / Chao!",
        "Dejando recado/mensaje: Por favor, pídale que llame a Pedro. / Si no me encuentra, puede llamar al... / Volveré a llamar luego."
      ],
      exercises: [
        { type: "fill", q: "Diga! Quién ___? (hablar)", answer: "habla" },
        { type: "fill", q: "De ___ de quién? (parte)", answer: "parte" },
        { type: "fill", q: "Escribe el acortamiento de 'Bicicleta':", answer: "Bici" },
        { type: "fill", q: "Escribe el acortamiento de 'Cerveza':", answer: "Cerve" },
        { type: "fill", q: "Escribe el acortamiento de 'Por favor':", answer: "Porfa" },
        { type: "mc", q: "Qual a forma de 'Adiós' em linguagem de chat?", options: ["A2", "Adi+", "A2s"], correct: 0 },
        { type: "mc", q: "Qual a forma de 'Porque' em linguagem de chat?", options: ["Pq", "Xq/Xk", "Prq"], correct: 1 },
        { type: "mc", q: "Na Espanha, usa-se preferencialmente:", options: ["Llamado", "Llamada", "Ambos igualmente"], correct: 1 },
        { type: "translate", from: "pt", text: "Um momento, por favor, não desligue.", answer: "Un momento, por favor, no cuelgue." },
        { type: "listen", audioText: "Puedo hablar con Fernando? De parte de quién?", q: "O que a pessoa que atende pergunta?", answer: "Pergunta quem está falando/de parte de quem." },
        { type: "speak", prompt: "Diga em espanhol: 'Você pode falar agora?'", target: "Puedes hablar ahora?" },
        { type: "open", q: "Escreva um pequeno diálogo telefônico em espanhol (pelo menos 3 falas).", sample: "Diga! / Puedo hablar con Ana? / Sí, un momento, por favor." }
      ]
    },
    {
      id: "i13",
      order: 13,
      title: "Vamos de Compras",
      subtitle: "Cores, cosméticos e Condicional 1 (Si + presente)",
      dialogue: [
        { who: "A", es: "Amiga, vamos de compras al centro comercial mañana?" },
        { who: "B", es: "No sé...Si tengo plata, voy. Qué necesitas comprar?" },
        { who: "A", es: "No necesito nada, pero si puedo, voy a comprar un vestido nuevo para una fiesta." },
        { who: "B", es: "Y en qué color lo quieres?" },
        { who: "A", es: "Creo que dorado o negro. Si puedes elegir por mí, cuál color vas a preferir?" },
        { who: "B", es: "Seguramente el dorado. Es un color muy vibrante, bonito y chic." },
        { who: "A", es: "Buena elección. Tengo ganas de comprarme también unos cosméticos, perfume y maquillaje. Qué te parece?" },
        { who: "B", es: "Buena idea. También necesito unas cositas pero no sé si tengo plata. Igual voy contigo." },
        { who: "A", es: "Averígüelo. Espero que puedas comprarte algo también." },
        { who: "B", es: "Ojalá! Quedamos a las 10h?" },
        { who: "A", es: "Perfecto! Besitos y hasta mañana!" },
        { who: "B", es: "Chao, amiga!" }
      ],
      vocabulary: [
        { category: "Los colores", items: [
          { es: "Azul claro" }, { es: "Azul marino/oscuro" }, { es: "Morado-Violeta-Lila" }, { es: "Plata" }, { es: "Dorado" },
          { es: "Amarillento" }, { es: "Rojizo" }, { es: "Anaranjado" }, { es: "Azulado" }, { es: "Verdoso" }, { es: "Rosado" },
          { es: "Rosáceo" }, { es: "Grisáceo" }, { es: "Negruzco" }, { es: "Blancuzco" }, { es: "Pardusco" }
        ] },
        { category: "Productos de higiene y cosméticos (amostra)", items: [
          { es: "Jabón facial/corporal" }, { es: "Champú" }, { es: "Champú anticaspa/anticaída" }, { es: "Acondicionador/Crema de enjuague" },
          { es: "Tónico/Loción capilar" }, { es: "Tintura capilar" }, { es: "Dentífrico/Pasta de dientes" }, { es: "Enjuague bucal" },
          { es: "Desodorante/Antitranspirante axilar" }, { es: "Crema/gel/loción/espuma para afeitarse" }, { es: "Delineador para labios/ojos y cejas" },
          { es: "Protector labial" }, { es: "Lápiz labial/Pintalabios" }, { es: "Brillo labial" }, { es: "Sombra para párpados" },
          { es: "Máscara de pestañas/Rímel" }, { es: "Corrector de ojeras" }, { es: "Base (con FPS)" }, { es: "Protector solar" },
          { es: "Bronceador" }, { es: "Toallitas húmedas" }, { es: "Mascarilla facial" }, { es: "Desmaquillante" },
          { es: "Depilador" }, { es: "Esmalte/barniz para uñas" }, { es: "Quitaesmaltes" }, { es: "Perfume" }
        ] }
      ],
      grammar: [
        {
          title: "Condicional 1 — estrutura",
          headers: ["Parte 1", "Parte 2"],
          rows: [
            ["Si + presente de indicativo", "presente (consecuencia)"],
            ["Si + presente de indicativo", "imperativo (consejo)"],
            ["Si + presente de indicativo", "tener que (presente) + infinitivo (consejo)"],
            ["Si + presente de indicativo", "futuro simple (consecuencia en el futuro)"]
          ]
        }
      ],
      notes: [
        "Exemplos: Si vienes a mi casa esta noche, cenamos juntos. / Si deseas, te lo cuento. / Si no quieres, no vayas. / Si llegas antes que ellos, tienes que esperar. / Si hoy compramos más comida, mañana no tendremos que ir al supermercado.",
        "A oração condicional pode vir antes ou depois da principal.",
        "Atenção: 'Si + futuro' deve ser substituído por 'Si + presente de indicativo' (ex.: 'Si encontraremos...' incorreto -> 'Si encontramos...' correto)."
      ],
      exercises: [
        { type: "fill", q: "Si te ___, cómpratelo. (gustar)", answer: "gusta" },
        { type: "fill", q: "Si ___ plata, vamos a comprar muchas ropas el próximo verano. (tener)", answer: "tenemos" },
        { type: "fill", q: "Si ellos no ___ dormir, tienen que hacer algo más. (querer)", answer: "quieren" },
        { type: "fill", q: "Sal con él, si ___ hermoso. (ser)", answer: "es" },
        { type: "fill", q: "Si ___ a mi casa hoy, te invito a cenar conmigo. (venir)", answer: "vienes" },
        { type: "mc", q: "Qual cor é descrita como 'muy vibrante, bonito y chic' no diálogo?", options: ["Negro", "Dorado", "Plata"], correct: 1 },
        { type: "mc", q: "Sirve para lavar los cabellos:", options: ["Champú", "Pintalabios", "Quitaesmaltes"], correct: 0 },
        { type: "mc", q: "Es un buen producto para protegerse del sol:", options: ["Protector solar", "Perfume", "Esmalte"], correct: 0 },
        { type: "translate", from: "pt", text: "Se você quiser, eu conto tudo.", answer: "Si deseas, te lo cuento." },
        { type: "listen", audioText: "Voy a comprar un vestido nuevo para una fiesta.", q: "O que a amiga vai comprar?", answer: "Um vestido novo para uma festa." },
        { type: "speak", prompt: "Diga em espanhol: 'Espero que você possa comprar algo também.'", target: "Espero que puedas comprarte algo también." },
        { type: "open", q: "Complete: 'Si tengo dinero mañana...' (continue a frase em espanhol usando o condicional 1).", sample: "Si tengo dinero mañana, voy a comprar ropa nueva." }
      ]
    },
    {
      id: "i14",
      order: 14,
      title: "Aeropuerto",
      subtitle: "Frases de aeroporto e Futuro de Subjuntivo",
      dialogue: [
        { who: "A", es: "Señora, su pasaje y pasaporte, por favor." },
        { who: "B", es: "Aquí los tiene." },
        { who: "A", es: "Gracias! Usted va a facturar alguna maleta?" },
        { who: "B", es: "Sí, solo esta y tengo equipaje de mano." },
        { who: "A", es: "Bueno, aquí tiene su tarjeta de embarque y etiqueta para el equipaje de mano. Embarque a las 8 y media en la puerta 9." },
        { who: "B", es: "Una pregunta, cuál es mi asiento?" },
        { who: "A", es: "Es el 22B. Le puedo ayudar en algo más?" },
        { who: "B", es: "Sí. Quisiera saber si es directo el vuelo. No me acuerdo." },
        { who: "A", es: "No, señora. Hay una escala en Lisboa. Si quiere, usted puede cambiarlo por un vuelo directo todavía." },
        { who: "B", es: "Entiendo. No hay problema que tenga una escala. Muchísimas gracias!" },
        { who: "A", es: "Gracias a usted! Buen viaje!" }
      ],
      vocabulary: [
        { category: "Usos del verbo TIRAR", items: [
          { es: "Lançar algo com a mão em uma direção — El me tiró un bolígrafo en la cara." },
          { es: "Derrubar ou jogar ao chão — Nos peleamos y ella me tiró al suelo." },
          { es: "Descartar/jogar fora — Voy a tirar este vestido, no me gusta más." },
          { es: "Lançar uma peça de jogo — Tiró los dados y obtuvo el número 4." },
          { es: "Desperdiçar/não aproveitar algo — Tiraron el dinero comprando este coche." },
          { es: "Disparar com câmera fotográfica — Le pedí que me tirara una foto." }
        ] },
        { category: "Frases útiles — Aeropuerto", items: [
          { es: "Su pasaporte/identidad/pasaje, por favor." }, { es: "Va a facturar el equipaje?" },
          { es: "Este es el billete de vuelta, no de ida." }, { es: "Dónde puedo facturar mi maleta?" },
          { es: "A qué puerta de embarque debo ir?" }, { es: "Buen viaje!" },
          { es: "No llevo ningún objeto punzante/líquido en mi bolsa." }, { es: "Tiene algo a declarar?" },
          { es: "Dónde recogemos las maletas?" }, { es: "Hay alguna escala en este vuelo?" },
          { es: "Es directo este vuelo?" }, { es: "Cuándo sale/llega el vuelo?" }, { es: "Cuál es mi número de vuelo?" },
          { es: "Le gusta la ventanilla o pasillo?" }, { es: "Abróchense los cinturones." }, { es: "El avión va a despegar/aterrizar?" }
        ] },
        { category: "Vocabulario relacionado", items: [
          { es: "Avión (a jato)" }, { es: "Línea aérea" }, { es: "Aeropuerto" }, { es: "Tripulación" }, { es: "Azafata/Auxiliar de vuelo" },
          { es: "Llegadas" }, { es: "Salidas" }, { es: "Equipaje/Bagaje" }, { es: "Equipaje de mano" }, { es: "Maleta/Valija" },
          { es: "Billete/Pasaje (ida y vuelta)" }, { es: "Puerta de embarque" }, { es: "Tarjeta de embarque" }, { es: "Facturación/Check-in" },
          { es: "Aduana" }, { es: "Retrasado/Atrasado" }, { es: "Destino" }, { es: "Clase turista/económica" }, { es: "Vuelo" },
          { es: "Número de vuelo" }, { es: "Embarque" }, { es: "Pasaporte" }, { es: "Pasajero" }, { es: "Piloto" },
          { es: "Cinturón de seguridad" }, { es: "Asiento de pasillo/ventanilla" }, { es: "Control de seguridad" },
          { es: "Despegar/Despegue" }, { es: "Aterrizar/Aterrizaje" }, { es: "Escala/Conexión" }
        ] }
      ],
      grammar: [
        {
          title: "Futuro de Subjuntivo — equivalências no espanhol moderno",
          headers: ["Estrutura", "Exemplo"],
          rows: [
            ["Cuando + presente subjuntivo", "Cuando yo vaya. / Cuando ellos hagan."],
            ["Si + presente indicativo", "Si el viene. / Si tú vas."]
          ]
        }
      ],
      notes: [
        "Em espanhol não se usa o futuro do subjuntivo como no português (ex.: 'Quando eu for...', 'Se ele vier...').",
        "Frases antigas com futuro do subjuntivo e como são usadas hoje: 'Si hubiere sol mañana, voy a viajar.' -> 'Si hay sol mañana, voy a viajar.' / 'Cuando tuviere tiempo, te llamo.' -> 'Cuando tenga tiempo, te llamo.'",
        "O futuro do subjuntivo, usado até o século XVIII, caiu em desuso na língua falada (exceções em expressões como 'sea lo que fuere', ou refrões como 'adonde fueres haz lo que vieres')."
      ],
      exercises: [
        { type: "fill", q: "Cuando ___ a Madrid, iré contigo. (ir - subjuntivo)", answer: "vayas" },
        { type: "fill", q: "Si te ___, a mí también me gustará. (gustar - indicativo)", answer: "gusta" },
        { type: "fill", q: "Cuando ___ bien, llámeme. (estar - subjuntivo)", answer: "esté" },
        { type: "fill", q: "Si ___ calor mañana, voy a la playa. (hacer - indicativo)", answer: "hace" },
        { type: "fill", q: "Si ella ___, yo no vendré. (venir - indicativo)", answer: "viene" },
        { type: "mc", q: "Usted va a ___ alguna maleta?", options: ["facturar", "tirar", "aterrizar"], correct: 0 },
        { type: "mc", q: "Hay una ___ en Lisboa.", options: ["escala", "aduana", "tripulación"], correct: 0 },
        { type: "translate", from: "pt", text: "Este voo é direto?", answer: "Es directo este vuelo?" },
        { type: "listen", audioText: "Hay una escala en Lisboa. Si quiere, usted puede cambiarlo por un vuelo directo todavía.", q: "O que o funcionário informa sobre o voo?", answer: "Que há uma escala em Lisboa, mas ainda é possível trocar para um voo direto." },
        { type: "speak", prompt: "Diga em espanhol: 'Qual é o meu assento?'", target: "Cuál es mi asiento?" },
        { type: "order", items: ["Su pasaje y pasaporte, por favor.", "Aqui los tiene.", "Gracias! Usted va a facturar alguna maleta?"], correctOrder: [0, 1, 2] },
        { type: "open", q: "Escreva 3 frases úteis que você diria no check-in de um aeroporto, em espanhol.", sample: "Aquí tiene mi pasaporte. Voy a facturar una maleta. Prefiero el asiento de ventanilla." }
      ]
    },
    {
      id: "i15",
      order: 15,
      title: "Cumpleaños",
      subtitle: "Ver x Asistir x Mirar, surpresa e arrependimento",
      dialogue: [
        { who: "A", es: "Hola Mari, qué onda?" },
        { who: "B", es: "Todo tranquilo. Cómo te fue la fiesta de cumpleaños? Una lástima no haber podido asistir." },
        { who: "A", es: "Buenísima, pero..." },
        { who: "B", es: "Qué sucedió?" },
        { who: "A", es: "Bueno...Conoces a Mauricio?" },
        { who: "B", es: "Sí, me parece un buen tipo. Qué pasó?" },
        { who: "A", es: "Me invitó a salir después de la fiesta y yo dije no." },
        { who: "B", es: "No lo creo! Pero, por qué?" },
        { who: "A", es: "No lo sé amiga...Ahora es demasiado tarde." },
        { who: "B", es: "Tú deberías haber aceptado salir con él. Estoy segura de que no es tarde. Mándale un mensaje ahora mismo." },
        { who: "A", es: "Está bien, vamos a ver cómo van las cosas. Después te lo cuento todo." },
        { who: "B", es: "Ok. Suerte, amiga, y feliz cumple de nuevo!" },
        { who: "A", es: "Gracias, cuídate, cariño!" }
      ],
      vocabulary: [
        { category: "VER x ASISTIR x MIRAR", items: [
          { es: "VER: perceber algo pela visão — Desde tu casa se ve perfectamente toda la ciudad." },
          { es: "VER: assistir como espectador — Fuimos al cine a ver 'Contratiempo'." },
          { es: "MIRAR: dirigir a vista para algo — Mira el espejo. Qué es lo que ves?" },
          { es: "MIRAR: preocupar-se com alguém — En casa de mi abuela miran mucho por mí." },
          { es: "ASISTIR: estar presente em um lugar/ato — La mayoría de los invitados asistió a la boda." },
          { es: "ASISTIR: procurar ajuda/socorro — En urgencias se asisten muchas dolencias." }
        ] },
        { category: "Expresiones de sorpresa", items: [
          { es: "Dios mío!" }, { es: "Verdad?!" }, { es: "No lo creo!" }, { es: "Hablas en serio?" }, { es: "Estás bromeando!" },
          { es: "No consigo/puedo creerlo." }, { es: "De veras?" }, { es: "Quién lo diría?!" }, { es: "(Estás) seguro(a)?" }
        ] },
        { category: "Describiendo una sorpresa", items: [
          { es: "De veras que no lo estaba esperando." }, { es: "Me pilló de sorpresa." }, { es: "Nunca lo habría imaginado." },
          { es: "Jamás lo he soñado." }, { es: "Me asusté." }, { es: "Me costó aceptarlo." }, { es: "Quedé pasmado." }
        ] },
        { category: "Aceptando un suceso o noticia desagradable", items: [
          { es: "Sí, pues." }, { es: "Hace parte." }, { es: "Es la vida." }, { es: "Que se le va a hacer, no?" },
          { es: "Ley de Murphy." }, { es: "No es el fin del mundo." }, { es: "Qué tristeza!" }, { es: "Mis pésames/condolencias!" }
        ] },
        { category: "Arrepentimiento", items: [
          { es: "Ahora es demasiado tarde." }, { es: "Ahora no tiene más remedio." }, { es: "Nunca voy a perdonarme por..." },
          { es: "No sé por qué no cerré la boca." }, { es: "Qué tenía yo que hablar?" }, { es: "No sé qué me dio." },
          { es: "Quería poder volver atrás y tratar otra vez." }, { es: "Si supiera antes lo que sé ahora." }
        ] },
        { category: "PARABIENES x FELICIDADES x FELICITACIONES x ENHORABUENA", items: [
          { es: "Todas expressões usadas para desejar felicidade/parabenizar alguém por algo bom que aconteceu." }
        ] }
      ],
      grammar: [
        {
          title: "Estrutura do arrependimento",
          headers: ["Estrutura", "Exemplo"],
          rows: [
            ["SI + Pretérito Imperfecto Subjuntivo + Condicional", "Si tuviera otra chance, haría todo diferente."],
            ["Condicional (DEBERÍA) + Infinitivo Compuesto (Haber + Participio)", "Yo debería haber hecho diferente."]
          ]
        }
      ],
      notes: [
        "Infinitivo compuesto — exemplos: Haber hecho, Haber podido, Haber comprado, Haber bailado, Haber dormido, Haber leído, Haber salido, Haber vuelto, Haber dicho, Haber resuelto, Haber bebido.",
        "Canción de cumpleaños (mais comum): 'Cumpleaños feliz, cumpleaños feliz, Cumpleaños, cumpleaños, Cumpleaños feliz. Que los cumplas feliz, Que los cumplas feliz, Que los cumplas, que los cumplas, Que los cumplas feliz.' (com variações regionais em Argentina, España, Colombia, Chile, Cuba, Ecuador, Guatemala, México, Panamá e Perú)."
      ],
      exercises: [
        { type: "mc", q: "Has ___ a María?", options: ["visto", "Asistido", "Mirado"], correct: 0 },
        { type: "mc", q: "Los médicos ___ a muchos enfermos en el hospital anoche.", options: ["Asistieran", "Asistiron", "Asistieron"], correct: 2 },
        { type: "mc", q: "___ aquel avión. Qué grande!", options: ["Asista", "Mira", "Ves"], correct: 1 },
        { type: "fill", q: "No lo ___ creer! (poder)", answer: "puedo" },
        { type: "fill", q: "___ cumple, amigo! (feliz)", answer: "Feliz" },
        { type: "fill", q: "Ella debería haber ___ su boca. (cerrar)", answer: "cerrado" },
        { type: "fill", q: "Si tuviera otra chance, ___ todo de nuevo. (hacer - condicional)", answer: "haría" },
        { type: "translate", from: "pt", text: "Eu deveria ter feito o que ela me pediu.", answer: "Yo debería haber hecho lo que ella me pidió." },
        { type: "listen", audioText: "Me invitó a salir después de la fiesta y yo dije no.", q: "O que aconteceu depois da festa?", answer: "Mauricio convidou a amiga para sair e ela disse não." },
        { type: "speak", prompt: "Diga em espanhol: 'Feliz aniversário de novo!'", target: "Feliz cumple de nuevo!" },
        { type: "open", q: "Você já se arrependeu de algo? Escreva uma frase em espanhol usando 'debería haber' ou 'si tuviera otra chance'.", sample: "Si tuviera otra chance, estudiaría más para el examen." }
      ]
    }
  ],
  exam: {
    title: "Examen Final — Nivel Intermediário",
    passScoreDefault: 70,
    questions: [
      { type: "fill", q: "Si yo ___ tú, me compraría una camisa blanca. (ser - pretérito imperfecto subjuntivo)", answer: "fuera", altAnswers: ["fuese"] },
      { type: "fill", q: "Si ___ plata, voy al cine mañana. (tener - presente indicativo)", answer: "tengo" },
      { type: "fill", q: "___ hablando con ella estos días. (yo - estar - pretérito perfecto simple)", answer: "Estuve" },
      { type: "fill", q: "___ el próximo año. (nosotros - viajar - futuro indicativo)", answer: "Viajaremos" },
      { type: "fill", q: "Cuando yo ___ a conocer España, quiero ir a la Rambla. (ir - presente subjuntivo)", answer: "vaya" },
      { type: "fill", q: "Ya hemos ___ casi todo para la fiesta. (decidir - participio)", answer: "decidido" },
      { type: "fill", q: "___ bailar bien? (tú - poder - presente indicativo)", answer: "Puedes" },
      { type: "fill", q: "Ahora ___ demasiado tarde. (ser - presente indicativo)", answer: "es" },
      { type: "fill", q: "No lo puedo ___! (creer - infinitivo)", answer: "creer" },
      { type: "fill", q: "Te ___ dejar un recado? (gustar - condicional indicativo)", answer: "gustaría" },
      { type: "mc", q: "Me gusta bailar. — Para concordar (acuerdo):", options: ["A mí también", "A mí no", "Yo tampoco"], correct: 0 },
      { type: "mc", q: "Voy a la playa mañana. — Para discordar (desacuerdo):", options: ["Yo también", "Yo no", "A mí sí"], correct: 1 },
      { type: "mc", q: "Nunca viajo por negocios. — Para discordar (desacuerdo):", options: ["Yo también", "Yo tampoco", "Yo sí"], correct: 2 },
      { type: "mc", q: "No les gustan estas vacaciones para nada. — Para concordar (acuerdo):", options: ["A mí tampoco", "A mí sí", "Yo también"], correct: 0 },
      { type: "fill", q: "Yo debería haber ___ lo que ella me pidió. (hacer - participio)", answer: "hecho" },
      { type: "fill", q: "Ella ha ___ todo. (comer - participio)", answer: "comido" },
      { type: "fill", q: "Ellos han ___ harina para hacer pan. (comprar - participio)", answer: "comprado" },
      { type: "fill", q: "El debería haber ___ a la fiesta anoche. (ir - participio)", answer: "ido" },
      { type: "fill", q: "Ya nos hemos ___. (duchar - participio)", answer: "duchado" },
      { type: "fill", q: "Yo te quiero ___. (muy/mucho)", answer: "mucho" },
      { type: "fill", q: "Ella es ___ guapa. (muy/mucho)", answer: "muy" },
      { type: "fill", q: "Me gusta ___ bailar salsa. (muy/mucho)", answer: "mucho" },
      { type: "fill", q: "Vosotros sois ___ inteligentes. (muy/mucho)", answer: "muy" },
      { type: "translate", from: "pt", text: "Ontem fui às compras no shopping mas esqueci de comprar muitas coisas.", answer: "Ayer fui de compras al centro comercial pero me olvidé de comprar muchas cosas." },
      { type: "translate", from: "pt", text: "Se eu fosse ele, provavelmente aceitaria minha proposta.", answer: "Si yo fuera él, seguramente aceptaría mi propuesta." },
      { type: "fill", q: "Receita: ___ (mezclar - imperativo tú) la carne con el huevo, el pan molido, la cebolla y el ajo en polvo.", answer: "Mezcla" },
      { type: "fill", q: "Receita: ___ (añadir - imperativo tú) sal y pimienta y forma bolitas de tamaño medio.", answer: "Añade" },
      { type: "fill", q: "Receita: ___ (cubrir - imperativo tú) y deja cocer a fuego bajo durante 10 minutos.", answer: "Cubre" },
      { type: "translate", from: "pt", text: "Maria é tão inteligente quanto Julio. (comparativo de igualdade)", answer: "María es tan inteligente como Julio.", altAnswers: ["María es igual de inteligente que Julio."] },
      { type: "translate", from: "pt", text: "Lucas é mais bonito que Mario. (comparativo de superioridade)", answer: "Lucas es más guapo que Mario." },
      { type: "translate", from: "pt", text: "Eu sou menos alto que você. (comparativo de inferioridade)", answer: "Yo soy menos alto que tú." },
      { type: "translate", from: "pt", text: "Marta é a mais bonita da turma. (superlativo de superioridade)", answer: "Marta es la más hermosa de la clase." },
      { type: "translate", from: "pt", text: "Este livro é o pior que eu tenho. (superlativo de superioridade)", answer: "Este libro es el peor que tengo." },
      { type: "listen", audioText: "Si tienes dudas acerca de estos ejercicios, es interesante que vuelvas a ver las clases del cuarto módulo antes de seguir para el próximo módulo.", q: "O que o material recomenda caso o aluno tenha dúvidas?", answer: "Que revise as aulas do quarto módulo antes de seguir para o próximo." },
      { type: "speak", prompt: "Diga em espanhol: 'O importante aqui não é terminar tudo rápido, mas aprender e entender tudo de verdade.'", target: "Lo importante acá no es terminar todo rápido, sino, aprender y comprender todo de verdad." },
      { type: "open", q: "Escreva um pequeno parágrafo em espanhol contando o que você fez ontem, usando o pretérito perfecto simple e ao menos um verbo no pretérito perfecto compuesto.", sample: "Ayer fui al supermercado y compré muchas frutas. También he limpiado mi casa por la tarde." }
    ]
  }
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = LEVEL_INTERMEDIO;
}
