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
        { who: "A", es: "Mari! Fuiste al supermercado a comprar lo que te pedí ayer?", pt: "Mari! Você foi ao supermercado comprar o que eu te pedi ontem?" },
        { who: "B", es: "Discúlpame, mamá! Me lo olvidé.", pt: "Desculpa, mãe! Eu esqueci." },
        { who: "A", es: "Al menos escribiste lo que tenías que comprar en un papel?", pt: "Pelo menos você escreveu num papel o que tinha que comprar?" },
        { who: "B", es: "Sí!, hice una lista. Quieres que vaya ahora, madre?", pt: "Sim! Fiz uma lista. Quer que eu vá agora, mãe?" },
        { who: "A", es: "Por supuesto! Pero no te olvides de los huevos, las zanahorias, la harina y la mantequilla, si no, no tendré como hacer el almuerzo.", pt: "Claro! Mas não esqueça dos ovos, das cenouras, da farinha e da manteiga, senão não terei como fazer o almoço." },
        { who: "B", es: "Está bien! Puedo comprar algo para mí?", pt: "Está bem! Posso comprar algo para mim?" },
        { who: "A", es: "Voy a darte la plata para que compres lo que está en la lista. Si hay cambio, puedes comprarte algo.", pt: "Vou te dar o dinheiro para você comprar o que está na lista. Se sobrar troco, você pode comprar algo para você." },
        { who: "B", es: "Gracias, mamá! Ahorita me voy.", pt: "Obrigada, mãe! Já vou indo." },
        { who: "A", es: "Cuídate, hija! Hasta luego!", pt: "Se cuida, filha! Até mais!" }
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
      textPt: "Olá, querida(o)! Estou te enviando este e-mail para te contar um pouco sobre minha viagem de negócios a Barcelona. Ainda não consegui te ligar por telefone, então decidi escrever algumas palavrinhas por aqui. Ainda não visitei muitos lugares por aqui pois tenho trabalhado muito e meus dias têm sido muito corridos. No entanto, vi algumas atrações turísticas, como por exemplo, o Museu Picasso, o zoológico e passei pela Rambla, que é uma rua muito conhecida por aqui. Acho que vou voltar lá para comprar alguns presentes nas lojas que tem na rua. Bom, acho que é isso e espero que você me responda me contando um pouco da sua semana e como ela passou. Te amo muito e nos vemos em breve! Lucas",
      vocabulary: [
        { category: "Lugares/Sitios/Destinos", items: [{ es: "Playa", pt: "Praia" }, { es: "Campo", pt: "Campo" }, { es: "Ciudad", pt: "Cidade" }, { es: "Esquí", pt: "Esqui" }, { es: "Naturaleza", pt: "Natureza" }] },
        { category: "Tipos de viajes", items: [
          { es: "Viaje de negocios", pt: "Viagem de negócios" }, { es: "Viaje de estudios", pt: "Viagem de estudos" }, { es: "Viaje de vacaciones", pt: "Viagem de férias" },
          { es: "Viaje por salud", pt: "Viagem por saúde" }, { es: "Viaje por trabajo", pt: "Viagem a trabalho" }, { es: "Viaje gastronómica", pt: "Viagem gastronômica" },
          { es: "Gira/Excursión", pt: "Excursão/Passeio" }, { es: "Escapadas", pt: "Escapadinhas (viagens curtas)" }, { es: "Viaje en familia", pt: "Viagem em família" },
          { es: "Viaje solidario", pt: "Viagem solidária" }, { es: "Viaje de aventura", pt: "Viagem de aventura" }, { es: "Viaje de naturaleza", pt: "Viagem de natureza" }, { es: "Viaje de luna de miel", pt: "Viagem de lua de mel" }
        ] },
        { category: "Conjunciones", items: [
          { es: "Y — Me gustan los dulces y salados.", pt: "E — Eu gosto de doces e salgados." },
          { es: "NI — No me gusta vino ni cerveza.", pt: "NEM — Eu não gosto de vinho nem de cerveja." },
          { es: "QUE — Deseo que vengas.", pt: "QUE — Desejo que você venha." },
          { es: "O — Te gustan más las verduras o frutas?", pt: "OU — Você gosta mais de verduras ou de frutas?" },
          { es: "PERO — No nos vemos mucho pero nos queremos.", pt: "MAS — Não nos vemos muito, mas nos amamos." },
          { es: "MAS — Quise hacerlo, mas no pude.", pt: "MAS (forma culta) — Quis fazer isso, mas não pude." },
          { es: "AUNQUE — Aunque te quiera, no voy a casarme contigo.", pt: "EMBORA/AINDA QUE — Embora eu te ame, não vou me casar com você." },
          { es: "SINO — Julieta no es americana, sino puertorriqueña.", pt: "SENÃO/E SIM — Julieta não é americana, e sim porto-riquenha." },
          { es: "SIN EMBARGO — Fuimos a España, sin embargo, no fuimos a Madrid.", pt: "NO ENTANTO — Fomos à Espanha, no entanto, não fomos a Madri." },
          { es: "A PESAR DE — A pesar de los problemas, aún quiero estar aquí.", pt: "APESAR DE — Apesar dos problemas, ainda quero estar aqui." },
          { es: "PUES — Te dejo, pues ya no te quiero más.", pt: "POIS — Vou te deixar, pois já não te amo mais." },
          { es: "ASÍ QUE — Podemos comprarlo, así que vamos antes que cierre el mercado.", pt: "ENTÃO — Podemos comprá-lo, então vamos antes que o mercado feche." },
          { es: "ES DECIR — Mi padre siempre tiene razón, es decir, siempre me convence.", pt: "OU SEJA — Meu pai sempre tem razão, ou seja, sempre me convence." },
          { es: "POR LO TANTO — Ya es tarde, por lo tanto, apúrate.", pt: "PORTANTO — Já é tarde, portanto, se apresse." },
          { es: "SI — Si te vas, yo también me voy.", pt: "SE — Se você for, eu também vou." },
          { es: "POR CONSIGUIENTE — Ya estamos todos acá, por consiguiente, podemos empezar.", pt: "POR CONSEGUINTE — Já estamos todos aqui, por conseguinte, podemos começar." },
          { es: "COMO — Como quiero aprobar, estudio.", pt: "COMO (já que) — Como eu quero passar, eu estudo." },
          { es: "LUEGO — Se abrazaron y luego cada uno fue a su casa.", pt: "DEPOIS/LOGO — Eles se abraçaram e depois cada um foi para sua casa." },
          { es: "O SEA — No podemos seguir así, o sea, tenemos que terminar lo nuestro.", pt: "OU SEJA — Não podemos continuar assim, ou seja, temos que terminar o nosso relacionamento." },
          { es: "POR ESTO — Estaba errado, por esto te pido perdón.", pt: "POR ISSO — Eu estava errado, por isso peço perdão." },
          { es: "YA QUE — La fiesta va a estar buena ya que es mi cumpleaños.", pt: "JÁ QUE — A festa vai estar boa já que é meu aniversário." },
          { es: "PUESTO QUE — No me sorprendió, puesto que ya lo sabía.", pt: "UMA VEZ QUE — Não me surpreendeu, uma vez que eu já sabia." },
          { es: "PORQUE — Vamos a aprobar, porque estudiamos mucho.", pt: "PORQUE — Vamos passar, porque estudamos muito." },
          { es: "CON TAL QUE — Te llevaré al cine con tal que pares de molestarme.", pt: "DESDE QUE — Vou te levar ao cinema desde que você pare de me incomodar." },
          { es: "DE TAL MANERA QUE — Se comportó de tal manera que hubo que expulsarlo.", pt: "DE TAL MANEIRA QUE — Ele se comportou de tal maneira que foi preciso expulsá-lo." },
          { es: "DE MODO QUE — Todo va a estar bien, de modo que, no te preocupes.", pt: "DE MODO QUE — Tudo vai ficar bem, de modo que não se preocupe." },
          { es: "HASTA QUE — Relaja hasta que estés bien.", pt: "ATÉ QUE — Relaxe até que você esteja bem." },
          { es: "CONQUE — Ya es la hora, conque, vámonos.", pt: "ENTÃO/PORTANTO — Já é a hora, então vamos." },
          { es: "APENAS — Apenas supo la noticia, la fue a ver.", pt: "ASSIM QUE — Assim que soube a notícia, foi vê-la." }
        ] },
        { category: "Aumentativos (sufixos)", items: [
          { es: "-ÓN/ONA (Mandón/Mandona)", pt: "sufixo aumentativo: mandão/mandona" },{ es: "-OTE/OTA (Feote, Cabezota)", pt: "sufixo aumentativo: feião, cabeçudo(a)" },
          { es: "-ACHO/ACHA (Ricacho/a)", pt: "sufixo aumentativo/pejorativo: ricaço(a)" },{ es: "-UCHO/UCHA (Gorducho, Flacucha)", pt: "sufixo aumentativo/pejorativo: gorducho, magricela" }
        ] },
        { category: "Diminutivos (sufixos)", items: [
          { es: "-ITO/ITA (Casita, Besito)", pt: "sufixo diminutivo: casinha, beijinho" },{ es: "-ZUELO (Ladronzuelo)", pt: "sufixo diminutivo/pejorativo: ladrãozinho" },
          { es: "-ÍN/INA (Chiquitín, Chiquitina)", pt: "sufixo diminutivo carinhoso: pequenininho(a)" },{ es: "-CITO/CITA (Cafecito, Madrecita)", pt: "sufixo diminutivo: cafezinho, mãezinha" },
          { es: "-ILLO(A)/CILLO(A)/ECILLO(A) (Chiquillo, Friecillo)", pt: "sufixo diminutivo: garotinho, friozinho" },{ es: "-ECITO/ECITA (Florecita, Piececito)", pt: "sufixo diminutivo: florzinha, pezinho" }
        ] },
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
        { who: "A", es: "Oye, Lucy! Con quién hablabas por teléfono anoche? Traté de llamarte por dos horas y nunca logré hablar contigo.", pt: "Ei, Lucy! Com quem você estava falando ao telefone ontem à noite? Tentei te ligar por duas horas e nunca consegui falar com você." },
        { who: "B", es: "Ah, Julieta, una amiga de París con quien no charlaba hacía mucho tiempo. Y al mismo tiempo cocinaba porque ayer mis padres y mi hermana estaban acá para cenar con nosotros.", pt: "Ah, Julieta, uma amiga de Paris com quem eu não conversava fazia muito tempo. E ao mesmo tempo eu estava cozinhando porque ontem meus pais e minha irmã estavam aqui para jantar conosco." },
        { who: "A", es: "Ah, sí? Y qué preparabas mientras hablabas por teléfono?", pt: "Ah, é? E o que você estava preparando enquanto falava ao telefone?" },
        { who: "B", es: "Preparaba una pasta con salsa de camarones. Estaba muy exquisita! Nos comimos todo. Solo es una lástima que mis parientes ya se fueron.", pt: "Eu estava preparando um macarrão com molho de camarão. Estava uma delícia! Comemos tudo. Só é uma pena que meus parentes já foram embora." },
        { who: "A", es: "Qué rico! Algún día quiero probar esta comida maravillosa. Ahora tengo que trabajar porque ayer no me sentía bien y no pude hacer nada.", pt: "Que gostoso! Um dia eu quero provar essa comida maravilhosa. Agora tenho que trabalhar porque ontem eu não estava me sentindo bem e não consegui fazer nada." },
        { who: "B", es: "Ok! Hasta pronto, amiga!", pt: "Ok! Até breve, amiga!" }
      ],
      vocabulary: [
        { category: "Verbos pronominales — pares e diferença de sentido", items: [
          { es: "ACORDAR (chegar a um acordo) x ACORDARSE (lembrar)", pt: "ACORDAR = chegar a um acordo; ACORDARSE = lembrar-se" },
          { es: "APRENDER x APRENDERSE (aprender com mais ênfase)", pt: "APRENDER = aprender; APRENDERSE = aprender de cor/com mais ênfase" },
          { es: "APROVECHAR (empregar algo) x APROVECHARSE (tirar proveito de algo)", pt: "APROVECHAR = aproveitar/empregar algo; APROVECHARSE = tirar proveito de alguém/algo" },
          { es: "BEBER x BEBERSE (exagero no ato de beber)", pt: "BEBER = beber; BEBERSE = beber tudo/exagero no ato de beber" },
          { es: "CAER (mover algo, marcar uma data) x CAERSE (queda acidental)", pt: "CAER = cair (em uma data, calhar); CAERSE = cair acidentalmente" },
          { es: "COMER x COMERSE (exagero no ato de comer)", pt: "COMER = comer; COMERSE = comer tudo/exagero no ato de comer" },
          { es: "DEJAR (deixar algo em um lugar) x DEJARSE (esquecer algo em algum lugar)", pt: "DEJAR = deixar algo em um lugar; DEJARSE = esquecer algo em algum lugar" },
          { es: "DORMIR x DORMIRSE (começar a dormir)", pt: "DORMIR = dormir; DORMIRSE = pegar no sono/adormecer" },
          { es: "FUMAR x FUMARSE (exagero no ato de fumar)", pt: "FUMAR = fumar; FUMARSE = fumar tudo/exagero no ato de fumar" },
          { es: "HACER x HACERSE (passar por característica que não é a sua)", pt: "HACER = fazer; HACERSE = fingir ser (característica que não é a sua)" },
          { es: "IR (movimento a um lugar) x IRSE (ato de abandono)", pt: "IR = ir a um lugar; IRSE = ir embora/abandonar" },
          { es: "JUGAR (brincar) x JUGARSE (arriscar)", pt: "JUGAR = jogar/brincar; JUGARSE = arriscar(-se)" },
          { es: "LARGAR (deixar as coisas para alguém) x LARGARSE (deixar um lugar/sair)", pt: "LARGAR = largar/deixar algo para alguém; LARGARSE = ir embora, dar o fora" },
          { es: "LLEVAR (carregar coisas) x LLEVARSE (tomar para si algo)", pt: "LLEVAR = carregar/levar coisas; LLEVARSE = levar para si algo" },
          { es: "LEER x LEERSE (exagero no ato de ler)", pt: "LEER = ler; LEERSE = ler tudo/por completo" },
          { es: "MORIR x MORIRSE (referir-se a uma morte com mais sentimento)", pt: "MORIR = morrer; MORIRSE = morrer (com mais carga emocional)" },
          { es: "PONER (colocar) x PONERSE (mudança de curta duração)", pt: "PONER = colocar; PONERSE = ficar (mudança de estado passageira, ex: ficar nervoso)" },
          { es: "QUEDAR (combinar) x QUEDARSE (permanecer em um lugar)", pt: "QUEDAR = combinar/marcar; QUEDARSE = ficar/permanecer em um lugar" },
          { es: "VENIR (referir-se a um sujeito/origem) x VENIRSE (deixar um lugar e ir a outro)", pt: "VENIR = vir (referir-se à origem); VENIRSE = vir embora de um lugar para outro" },
          { es: "VOLVER (regressar) x VOLVERSE (dar a volta/mudar de estado ou aspecto)", pt: "VOLVER = voltar/regressar; VOLVERSE = virar-se/tornar-se (mudança de estado)" }
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
        { who: "A", es: "Hola, Bianca!, qué tal?", pt: "Olá, Bianca! Tudo bem?" },
        { who: "B", es: "Hola Mari! Bien, gracias! Quisiera preguntarte una cosa. Ayer estaba de paseo por el centro comercial cuando vi a Lucy comprando cosas para la casa. Sabes si ella ha comprado finalmente el departamento que estaba soñando en comprar?", pt: "Olá Mari! Bem, obrigada! Eu queria te perguntar uma coisa. Ontem eu estava passeando no shopping quando vi a Lucy comprando coisas para a casa. Você sabe se ela finalmente comprou o apartamento que estava sonhando em comprar?" },
        { who: "A", es: "Sí! Ella está muy feliz. Estuve hablando mucho con ella estos días. Ayer me contó que ya ha comprado casi todo lo que necesita para su hogar. Me parece que le falta solo comprar algunas toallas, los cubiertos y un sofá.", pt: "Sim! Ela está muito feliz. Estive conversando muito com ela nestes dias. Ontem ela me contou que já comprou quase tudo o que precisa para o lar dela. Acho que só falta comprar umas toalhas, os talheres e um sofá." },
        { who: "B", es: "Qué buena noticia! Voy a llamarla esta noche entonces para felicitarla y saber cómo va todo.", pt: "Que boa notícia! Vou ligar para ela hoje à noite então para parabenizá-la e saber como está tudo." },
        { who: "A", es: "Ella va a sentirse muy feliz que la llames. Nos vemos amiga!", pt: "Ela vai ficar muito feliz que você ligue. Nos vemos, amiga!" },
        { who: "B", es: "Vale! Hasta pronto!", pt: "Combinado! Até breve!" }
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
          { es: "Echar abajo", pt: "Derrubar" }, { es: "Echar a perder", pt: "Estragar" }, { es: "Echar un vistazo", pt: "Dar uma olhada" }, { es: "Echar de menos", pt: "Sentir falta" },
          { es: "Echar por alto", pt: "Ignorar/desprezar" }, { es: "Echar tras uno", pt: "Perseguir alguém" }, { es: "Echar una mano", pt: "Dar uma mão/ajudar" }, { es: "Echar un cigarrillo", pt: "Fumar um cigarro" },
          { es: "Echar un bocado", pt: "Dar uma bocada/comer algo" }, { es: "Echar un trago", pt: "Tomar um gole/uma bebida" }, { es: "Echar un discurso", pt: "Fazer um discurso" }, { es: "Echar a la lotería", pt: "Jogar na loteria" }
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
      textPt: "Amanhã vou levantar cedo porque provavelmente vou começar a trabalhar às oito da manhã. Vou ter muitas coisas para fazer. Antes de sair, enquanto preparo o café da manhã, vou ligar para minha mãe por telefone e depois de comer, vou sair mais ou menos às sete e meia para o trabalho. Depois de voltar do trabalho acho que meus amigos vão me convidar para jantar com eles, pois será o aniversário de María, uma amiga muito querida. Vai ser um prazer vê-la e já comprei um presentinho para ela! Com certeza vou me divertir, vou comer muito e depois vou voltar para minha casa para dormir e no dia seguinte começar tudo de novo. Sempre foi e acho que sempre vai ser assim.",
      vocabulary: [
        { category: "MUY x MUCHO", items: [
          { es: "MUY (advérbio, invariável, antes de adjetivo/advérbio) — Julia es muy guapa.", pt: "MUY = muito (advérbio, invariável); Julia é muito bonita." },
          { es: "MUCHO (adjetivo, varia em gênero/número, antes de substantivo) — Tengo mucho trabajo en la oficina hoy.", pt: "MUCHO = muito(a) (adjetivo, varia em gênero/número); Tenho muito trabalho no escritório hoje." },
          { es: "MUCHO (advérbio, invariável, depois de verbo) — Siempre como mucho.", pt: "MUCHO = muito (advérbio, invariável, depois do verbo); Eu sempre como muito." },
          { es: "MUCHO (pronome) — Muchos lo ayudaron.", pt: "MUCHO(S) = muitos (pronome); Muitos o ajudaram." },
          { es: "MUCHÍSIMO (intensificado) — Te quiero muchísimo!", pt: "MUCHÍSIMO = muitíssimo (forma intensificada); Eu te amo muitíssimo!" },
          { es: "Exceções fixas: MUCHO antes / MUCHO después; MUCHO más / MUCHO menos; MUCHO mayor / MUCHO menor; MUCHO mejor / MUCHO peor.", pt: "Exceções fixas (não usam MUY): MUCHO antes/depois; MUCHO mais/menos; MUCHO maior/menor; MUCHO melhor/pior." }
        ] },
        { category: "Pronombres Personales Átonos — Objeto Directo", items: [
          { es: "Yo — me", pt: "Eu — me" }, { es: "Tú/Vos — te", pt: "Você — te" }, { es: "Él/Ella/Usted — lo/la/le*", pt: "Ele/Ela/Você (formal) — o/a/lhe*" },
          { es: "Nosotros/Nosotras — nos", pt: "Nós — nos" }, { es: "Vosotros/Vosotras — os", pt: "Vós/vocês (Espanha) — vos/os" }, { es: "Ellos/Ellas/Ustedes — los/las/les*", pt: "Eles/Elas/Vocês — os/as/lhes*" }
        ] },
        { category: "Pronombres Personales Átonos — Objeto Indirecto", items: [
          { es: "Yo — me", pt: "Eu — me" }, { es: "Tú/Vos — te", pt: "Você — te" }, { es: "Él/Ella/Usted — le/se*", pt: "Ele/Ela/Você (formal) — lhe/se*" },
          { es: "Nosotros/Nosotras — nos", pt: "Nós — nos" }, { es: "Vosotros/Vosotras — os", pt: "Vós/vocês (Espanha) — vos/os" }, { es: "Ellos/Ellas/Ustedes — les/se", pt: "Eles/Elas/Vocês — lhes/se" }
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
        { who: "A", es: "Hola, Fede! Cómo te fue la gira de ayer?", pt: "Olá, Fede! Como foi o passeio de ontem?" },
        { who: "B", es: "Mal! Fuimos al zoológico pero no estuvo muy buena la gira. Mañana vamos a salir de paseo pero no sé cuál lugar elegir.", pt: "Mal! Fomos ao zoológico, mas o passeio não foi muito bom. Amanhã vamos sair para passear, mas não sei qual lugar escolher." },
        { who: "A", es: "Bueno...Si yo fuera tú, seguramente elegiría ir a conocer un museo, qué te parece?", pt: "Bem... Se eu fosse você, com certeza escolheria conhecer um museu, o que acha?" },
        { who: "B", es: "Me parece una buena idea, pero, y el almuerzo? Tenemos que elegir ir a comer en un restaurante chino, un restaurante japonés o uno que tiene comida regional.", pt: "Acho uma boa ideia, mas e o almoço? Temos que escolher entre comer em um restaurante chinês, um restaurante japonês ou um que tem comida regional." },
        { who: "A", es: "Yo probaría sin duda los platos regionales a ver cómo saben.", pt: "Eu provaria sem dúvida os pratos regionais para ver como são." },
        { who: "B", es: "Perfecto, amiga! Ahora ya tengo casi todo planeado para mañana. Solo quisiera preguntarte una cosita más.", pt: "Perfeito, amiga! Agora já tenho quase tudo planejado para amanhã. Só queria te perguntar mais uma coisinha." },
        { who: "A", es: "Dime, Fede!", pt: "Diga, Fede!" },
        { who: "B", es: "No me siento muy bien, creo que estoy enfermo por el frío. Qué debo hacer para sentirme mejor por la mañana?", pt: "Não estou me sentindo muito bem, acho que estou doente por causa do frio. O que devo fazer para me sentir melhor amanhã de manhã?" },
        { who: "A", es: "Debes tomar una aspirina e ir a dormir. Estoy segura de que vas a sentirte mejor mañana.", pt: "Você deve tomar uma aspirina e ir dormir. Tenho certeza de que vai se sentir melhor amanhã." },
        { who: "B", es: "Ok, voy a hacerlo ya! Gracias por todo! Mañana te lo cuento.", pt: "Ok, vou fazer isso agora! Obrigado por tudo! Amanhã eu te conto." }
      ],
      vocabulary: [
        { category: "Como hablar de un paseo (positivo)", items: [
          { es: "Me encantó!", pt: "Adorei!" }, { es: "Estuvo muy bueno!", pt: "Foi muito bom!" }, { es: "Me gustó mucho!", pt: "Gostei muito!" }, { es: "Quiero hacerlo de nuevo!", pt: "Quero fazer de novo!" },
          { es: "Quiero ir más veces allá!", pt: "Quero ir mais vezes lá!" }, { es: "Que bueno que decidí ir!", pt: "Que bom que decidi ir!" }, { es: "Lo recomendaré a mis amigos!", pt: "Vou recomendar aos meus amigos!" }, { es: "Fue inolvidable!", pt: "Foi inesquecível!" }
        ] },
        { category: "Como hablar de un paseo (negativo)", items: [
          { es: "Lo detesté/odié", pt: "Detestei/odiei" }, { es: "Peor imposible", pt: "Impossível ser pior" }, { es: "La peor cosa que ya he hecho", pt: "A pior coisa que já fiz" }, { es: "Me morí de sueño", pt: "Morri de sono" },
          { es: "No podía ser peor", pt: "Não podia ser pior" }, { es: "Se lo recomendaré a mis enemigos", pt: "Vou recomendar aos meus inimigos" }, { es: "Muy aburrido", pt: "Muito chato/entediante" }, { es: "Un horror/desastre", pt: "Um horror/desastre" }
        ] },
        { category: "Consejos y recomendaciones", items: [
          { es: "Opción 1: Deber + Infinitivo — Debes tomar una aspirina.", pt: "Opção 1: Dever + Infinitivo — Você deve tomar uma aspirina." },
          { es: "Opción 2: Yo + Condicional — Yo bebería menos.", pt: "Opção 2: Eu + Condicional — Eu beberia menos." },
          { es: "Opción 3: Yo que tú + Condicional — Yo que tú iría de vacaciones a Barcelona.", pt: "Opção 3: Se eu fosse você + Condicional — Se eu fosse você iria de férias para Barcelona." },
          { es: "Opción 4: Si yo fuera tú + Condicional — Si yo fuera tú estudiaría más.", pt: "Opção 4: Se eu fosse você + Condicional — Se eu fosse você estudaria mais." }
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
      textPt: "O DELE (Diploma de Espanhol como Língua Estrangeira) é um exame internacional de língua espanhola que mede a habilidade de comunicação em espanhol de uma pessoa de quatro formas: ouvindo, lendo, escrevendo e falando. Esse teste é buscado principalmente por pessoas que desejam estudar ou trabalhar onde o espanhol é a língua de comunicação e precisam ou simplesmente querem saber qual é o seu nível nesse idioma. Desde 1991, o DELE tem sido testado e confiado por todo o mundo como um teste seguro e autêntico, além de ser reconhecido internacionalmente em muitas instituições de educação. O DELE é elaborado pelo Instituto Cervantes e é oferecido em mais de 650 centros que há em mais de 100 países do mundo.",
      vocabulary: [
        { category: "Usos del verbo HABER", items: [
          { es: "Sentido de existir (invariável) — Hay mucho sol. / Hubo un problema.", pt: "HABER = existir (invariável); Há muito sol. / Houve um problema." },
          { es: "Como verbo auxiliar nos tempos compostos — He estado muy enferma estos días.", pt: "Como verbo auxiliar nos tempos compostos; Estive muito doente esses dias." },
          { es: "Para transmitir um pedido/aviso geral (invariável) — Hay que esperar.", pt: "Para transmitir uma obrigação/aviso geral (invariável); É preciso esperar." }
        ] },
        { category: "Usos del verbo HACER", items: [
          { es: "Sentido de atividade — Y ahora, qué voy a hacer?", pt: "Sentido de atividade/fazer algo; E agora, o que eu vou fazer?" },
          { es: "Para descrever o tempo (invariável) — Hace sol. / Hace calor. / Hacía frío.", pt: "Para descrever o clima (invariável); Está fazendo sol. / Está fazendo calor. / Estava fazendo frio." },
          { es: "Para indicar ideia de tempo passado (invariável) — Hace 10 años que estudia japonés.", pt: "Para indicar tempo decorrido (invariável); Faz 10 anos que ele(a) estuda japonês." },
          { es: "Como verbo de mudança (converter) — El vino se hizo vinagre.", pt: "Como verbo de transformação; O vinho virou vinagre." }
        ] },
        { category: "Usos del verbo IR", items: [
          { es: "Sentido de movimento — Yo siempre voy en coche al trabajo.", pt: "Sentido de movimento; Eu sempre vou de carro para o trabalho." },
          { es: "Para indicar futuro próximo — Yo voy a salir pronto.", pt: "Para indicar futuro próximo; Eu vou sair logo." }
        ] },
        { category: "Usos del verbo PODER", items: [
          { es: "Indicar permissão — Puedo ir a la fiesta, mamá?", pt: "Indicar permissão; Posso ir à festa, mãe?" },
          { es: "Ideia de capacidade/habilidade — Puedo nadar con facilidad.", pt: "Ideia de capacidade/habilidade; Eu consigo nadar com facilidade." },
          { es: "Ideia de possibilidade/probabilidade — Está muy nublado, puede que llueva.", pt: "Ideia de possibilidade/probabilidade; Está muito nublado, pode ser que chova." }
        ] },
        { category: "Usos del verbo TENER", items: [
          { es: "Expressa posse — Tengo un auto.", pt: "Expressa posse; Eu tenho um carro." },
          { es: "Expressa condição — Tengo frío. Tener calor, cuidado, deseos, éxito, ganas, la culpa, miedo, prisa, razón, sueño, suerte, vergüenza.", pt: "Expressa condição/sensação (tener + substantivo = 'estar com'); Estou com frio. Estar com calor, cuidado, vontade, sucesso, vontade de, culpa, medo, pressa, razão, sono, sorte, vergonha." },
          { es: "Indica idade — Julia tiene 12 años.", pt: "Indica idade; Julia tem 12 anos." },
          { es: "Expressa preocupação — Qué tiene usted?", pt: "Expressa preocupação; O que você tem? / O que está acontecendo com você?" }
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
      textPt: "Você está procurando um emprego? Cada vez mais pessoas estão procurando emprego ou trocando de cargo devido às mudanças do mercado de trabalho. E como encontrar oportunidades de trabalho entre os milhões que existem? Você pode procurá-las nos jornais locais, em grupos de Facebook, em sites e em outros lugares que têm informações sobre possíveis ofertas de trabalho. Uma das formas mais rápidas de conseguir um emprego é andando pela rua. Há muitas lojas e outros tipos de empresas que têm cartazes colados na frente do seu negócio informando quais são as vagas disponíveis para aquele lugar. Para terminar, há muitos negócios que contratam seu pessoal por meio de agências de emprego. Com certeza você vai conseguir em breve.",
      vocabulary: [
        { category: "Usos del verbo PEGAR", items: [
          { es: "Unir uma coisa a outra com substância adesiva — Ella pegó una hoja a otra usando un pegamento.", pt: "Colar uma coisa na outra; Ela colou uma folha na outra usando cola." },
          { es: "Golpear alguém — Ella le pegó a su amiga.", pt: "Bater em alguém; Ela bateu na amiga dela." },
          { es: "Transmitir uma doença/pensamento/ideia — Ella le pegó su gripe.", pt: "Transmitir/passar uma doença; Ela passou a gripe dela para a amiga." }
        ] },
        { category: "Otros números", items: [
          { es: "1.002 — mil dos", pt: "1.002 — mil e dois" }, { es: "1.500 — mil quinientos", pt: "1.500 — mil e quinhentos" }, { es: "1.752 — mil setecientos cincuenta y dos", pt: "1.752 — mil setecentos e cinquenta e dois" },
          { es: "3.011 — tres mil once", pt: "3.011 — três mil e onze" }, { es: "6.024 — seis mil veinticuatro", pt: "6.024 — seis mil e vinte e quatro" }, { es: "1.000.000 — un millón", pt: "1.000.000 — um milhão" },
          { es: "2.000.000 — dos millones", pt: "2.000.000 — dois milhões" }, { es: "1.000.000.000 — Mil millones (España) / Un billón (otros países)", pt: "1.000.000.000 — um bilhão (chamado 'mil millones' na Espanha; atenção: 'un billón' em outros países é falso cognato)" },
          { es: "1.000.000.000.000 — Un billón (España) / Un trillón (otros países)", pt: "1.000.000.000.000 — um trilhão (chamado 'un billón' na Espanha, 'un trillón' em outros países)" }
        ] },
        { category: "Comparativos de igualdad", items: [
          { es: "TAN + adjetivo/adverbio + COMO — María es tan inteligente como Lucas.", pt: "TÃO...QUANTO; María é tão inteligente quanto Lucas." },
          { es: "IGUAL DE + adjetivo/adverbio + QUE — La hormiga es igual de lenta que la tortuga.", pt: "TÃO...QUANTO ('igual de'); A formiga é tão lenta quanto a tartaruga." },
          { es: "LO MISMO QUE — Ir de paseo cuesta lo mismo que ir al teatro.", pt: "O MESMO QUE; Passear custa o mesmo que ir ao teatro." },
          { es: "TANTO/TANTA/TANTOS/TANTAS + substantivo + COMO — Mi hermano bebe tanta leche como yo.", pt: "TANTO(A/S)...QUANTO; Meu irmão bebe tanto leite quanto eu." }
        ] },
        { category: "Superlativos irregulares", items: [
          { es: "Bueno-Mejor-Óptimo", pt: "Bom-Melhor-Ótimo" }, { es: "Malo-Peor-Pésimo", pt: "Mau-Pior-Péssimo" }, { es: "Grande-Mayor-Máximo", pt: "Grande-Maior-Máximo" },
          { es: "Pequeño-Menor-Mínimo", pt: "Pequeno-Menor-Mínimo" }, { es: "Alto-Superior-Supremo", pt: "Alto-Superior-Supremo" }, { es: "Bajo-Inferior-Ínfimo", pt: "Baixo-Inferior-Ínfimo" }
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
      textPt: "SALADA DE TOMATES, PINHÕES E MANJERICÃO COM OVOS DE CODORNA. INGREDIENTES: 400 g de tomate cereja; 50 g de pinhões; 8 ovinhos de codorna; 10 azeitonas verdes com caroço; 1 ramo de manjericão; Azeite de oliva extravirgem; Sal. MODO DE PREPARO (10 minutos): Cozinhar os ovos de codorna por 3 minutos e esfriá-los sob água corrente; Depois de frios, descascá-los e cortá-los ao meio no sentido do comprimento; Lavar e cortar os tomatinhos em quartos e colocá-los em uma saladeira; Adicionar o restante dos ingredientes e temperar com azeite e sal.",
      vocabulary: [
        { category: "Como escribir una receta", items: [
          { es: "1 - Infinitivo — Picar la cebolla y el morrón... Condimentar con bastante pimentón... Freír en abundante grasa...", pt: "1 - Infinitivo (estilo impessoal, muito comum em receitas escritas) — Picar a cebola e o pimentão... Temperar com bastante páprica... Fritar em bastante gordura..." },
          { es: "2 - Presente (SE + presente indicativo) — Previamente ponemos a cocer... Picamos al gusto los vegetales...", pt: "2 - Presente (SE + presente do indicativo, forma impessoal) — Primeiro colocamos para cozinhar... Picamos os vegetais a gosto..." },
          { es: "3 - Imperativo — Calienta en un hervidor el agua... Cuécelas por 5 o 6 minutos... Coloca una salchicha en el pan...", pt: "3 - Imperativo (como se estivesse dando instruções diretas a alguém) — Esquente a água numa chaleira... Cozinhe-as por 5 ou 6 minutos... Coloque uma salsicha no pão..." }
        ] },
        { category: "Contracciones", items: [
          { es: "A + el = al", pt: "A + o = ao (contração obrigatória, igual em português)" }, { es: "De + el = del", pt: "De + o = do (contração obrigatória, igual em português)" }, { es: "De + ella = della", pt: "De + ela = dela (forma antiga/em desuso; hoje se diz simplesmente 'de ella')" }, { es: "Donde + quiera = doquiera", pt: "Onde + quer = onde quer que (forma antiga/literária, sentido de 'em qualquer lugar')" },
          { es: "Entre + ambos = entrambos", pt: "Entre + ambos = entrambos (forma antiga/literária para 'entre os dois')" }, { es: "Otra + hora = otrora", pt: "Outra + hora = outrora (forma antiga/literária para 'antigamente')" }, { es: "De + esto = desto", pt: "De + isto = 'desto' (forma antiga, hoje se diz 'de esto')" }
        ] },
        { category: "Contracciones coloquiais", items: [
          { es: "Para + allá = pa'lla", pt: "Para + lá = 'pa'lla' (forma coloquial e reduzida)" }, { es: "Para + arriba = pa'rriba", pt: "Para + cima = 'pa'rriba' (forma coloquial e reduzida)" }, { es: "Para adelante = p'alante", pt: "Para frente = 'p'alante' (forma coloquial e reduzida)" },
          { es: "Para + que = pa' que", pt: "Para + que = 'pa' que' (forma coloquial e reduzida)" }, { es: "Para + atrás = p'atrás", pt: "Para + trás = 'p'atrás' (forma coloquial e reduzida)" }, { es: "Para + el = pal'", pt: "Para + o = 'pal'' (forma coloquial e reduzida)" }
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
        { who: "A", es: "Lucy! Vamos al cine mañana?", pt: "Lucy! Vamos ao cinema amanhã?" },
        { who: "B", es: "Amiga, discúlpame pero no me gustan las películas que hay en el cine estos días.", pt: "Amiga, me desculpa, mas eu não gosto dos filmes que estão em cartaz esses dias." },
        { who: "A", es: "Verdad...A mí tampoco. Y qué tal ir al centro de paseo y comprar unas prendas nuevas en alguna tienda? Eso sí me gusta hacer!", pt: "Verdade... Eu também não. E que tal ir passear no centro e comprar umas roupas novas em alguma loja? Isso sim eu gosto de fazer!" },
        { who: "B", es: "A mí también me gusta esa idea. Necesito unas camisetas, unos pantalones y zapatos. Podemos hacerlo, pero ahora me acordé, no tengo plata.", pt: "Eu também gosto dessa ideia. Preciso de umas camisetas, umas calças e sapatos. Podemos fazer isso, mas agora me lembrei, não tenho dinheiro." },
        { who: "A", es: "Yo sí...Pasamos por el cajero automático en un banco cercano y puedo prestarte algunos pesos. Me los devuelves otro día, qué te parece?", pt: "Eu tenho... Passamos no caixa eletrônico de um banco perto e posso te emprestar alguns pesos. Você me devolve outro dia, o que acha?" },
        { who: "B", es: "Buenísimo! Muchas gracias, amiga! También quiero comer algo rico en mi restaurante favorito.", pt: "Ótimo! Muito obrigada, amiga! Também quero comer algo gostoso no meu restaurante favorito." },
        { who: "A", es: "Yo también ya que nos gusta el mismo restaurante. Entonces nos vemos mañana!", pt: "Eu também, já que a gente gosta do mesmo restaurante. Então nos vemos amanhã!" },
        { who: "B", es: "Sí, hasta pronto!", pt: "Sim, até logo!" }
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
      textPt: "Luciano se levanta todos os dias às sete da manhã, toma café da manhã com a esposa e depois sai para ir trabalhar. Ele vai trabalhar de carro porque a empresa fica longe, mas ele não gosta nada do trânsito da sua cidade. Há muitos motoristas indo para o trabalho ao mesmo tempo, então o tráfego começa a engarrafar. Como em todas as cidades grandes, sempre há ruas e avenidas congestionadas, mas esse não é o único problema que o impede de ter uma manhã tranquila. Depois de tudo isso, Luciano ainda tem que encontrar um lugar para estacionar o carro perto da empresa. No ano que vem, ele quer trocar de emprego e procurar um cargo em uma empresa mais perto de casa, para onde possa ir a pé.",
      vocabulary: [
        { category: "Expresiones de tiempo — Pasado", items: [
          { es: "Ayer", pt: "Ontem" }, { es: "Anteayer", pt: "Anteontem" }, { es: "Anoche", pt: "Ontem à noite" }, { es: "Anteanoche", pt: "Anteontem à noite" }, { es: "El año pasado", pt: "O ano passado" },
          { es: "La semana pasada", pt: "A semana passada" }, { es: "El lunes pasado", pt: "A segunda-feira passada" }, { es: "Hace dos días", pt: "Há dois dias" }, { es: "Desde 1990", pt: "Desde 1990" },
          { es: "Desde hace mucho tiempo", pt: "Há muito tempo" }, { es: "En 2015", pt: "Em 2015" }, { es: "En octubre", pt: "Em outubro" }
        ] },
        { category: "Expresiones de tiempo — Presente", items: [
          { es: "Ahora", pt: "Agora" }, { es: "Ahorita", pt: "Agorinha/já já (uso coloquial)" }, { es: "Hoy", pt: "Hoje" }, { es: "Esta semana", pt: "Esta semana" }, { es: "En este momento", pt: "Neste momento" }
        ] },
        { category: "Expresiones de tiempo — Futuro", items: [
          { es: "Mañana", pt: "Amanhã" }, { es: "Pasado mañana", pt: "Depois de amanhã" }, { es: "El próximo año", pt: "O próximo ano" }, { es: "La próxima semana", pt: "A próxima semana" },
          { es: "El mes que viene", pt: "O mês que vem" }, { es: "En 2035", pt: "Em 2035" }
        ] },
        { category: "Medios de transporte", items: [
          { es: "A pie", pt: "A pé" }, { es: "En coche/auto/carro", pt: "De carro" }, { es: "Autobús/bus/colectivo/ómnibus/guagua/camión", pt: "Ônibus (várias formas regionais)" },
          { es: "Camión", pt: "Caminhão" }, { es: "Tren", pt: "Trem" }, { es: "Avión", pt: "Avião" }, { es: "Motocicleta/moto", pt: "Motocicleta/moto" }, { es: "Metro/subte", pt: "Metrô" },
          { es: "Microbús/buseta", pt: "Micro-ônibus" }, { es: "Lancha", pt: "Lancha" }, { es: "Helicóptero", pt: "Helicóptero" }, { es: "Taxi", pt: "Táxi" }, { es: "Tranvía", pt: "Bonde/VLT" }
        ] },
        { category: "Verbos e termos relacionados ao trânsito", items: [
          { es: "Conducir", pt: "Conduzir/dirigir (Espanha)" }, { es: "Manejar", pt: "Dirigir (América Latina)" }, { es: "Embotellar", pt: "Engarrafar" }, { es: "Atascar", pt: "Entupir/travar (trânsito parado)" }, { es: "Alquilar", pt: "Alugar" },
          { es: "Aparcar/Estacionar", pt: "Estacionar" }, { es: "Tránsito", pt: "Trânsito" }, { es: "Tráfico", pt: "Tráfego" }, { es: "Trayecto", pt: "Trajeto" }, { es: "Taxista/Chofer", pt: "Taxista/motorista" },
          { es: "Esquina", pt: "Esquina" }, { es: "Calle", pt: "Rua" }, { es: "Carretera", pt: "Rodovia/estrada" }, { es: "Avenida", pt: "Avenida" }, { es: "Semáforo", pt: "Semáforo" },
          { es: "Carné de conducir", pt: "Carteira de motorista" }, { es: "Alquiler de coches", pt: "Aluguel de carros" }, { es: "Peatón", pt: "Pedestre" }, { es: "Paso peatonal/de peatones", pt: "Faixa de pedestres" }
        ] },
        { category: "Señales de tránsito (preventivas, exemplos)", items: [
          { es: "Curva", pt: "Curva" }, { es: "Curva cerrada", pt: "Curva fechada" }, { es: "Camino sinuoso", pt: "Caminho sinuoso" }, { es: "Contracurva", pt: "Contracurva" }, { es: "Bifurcación", pt: "Bifurcação" },
          { es: "Cruce", pt: "Cruzamento" }, { es: "Doble circulación", pt: "Mão dupla" }, { es: "Glorieta", pt: "Rotatória" }, { es: "Zona escolar", pt: "Zona escolar" }, { es: "Paso peatonal", pt: "Faixa de pedestres" },
          { es: "Alto próximo", pt: "Pare à frente" }, { es: "Cruce de ferrocarril", pt: "Cruzamento de ferrovia" }, { es: "Semáforo", pt: "Semáforo" }, { es: "Ciclistas", pt: "Ciclistas" }
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
        { who: "N", es: "Suena el teléfono", pt: "O telefone toca" },
        { who: "A", es: "Diga!", pt: "Diga! (forma usada na Espanha)" },
        { who: "B", es: "Quién habla?", pt: "Quem fala?" },
        { who: "A", es: "Hola! Le habla Julieta.", pt: "Olá! Aqui é a Julieta." },
        { who: "B", es: "Por favor!, puedo hablar con Fernando?", pt: "Por favor, posso falar com o Fernando?" },
        { who: "A", es: "De parte de quién?", pt: "Da parte de quem?" },
        { who: "B", es: "Soy Lucía, trabajo con él.", pt: "Sou a Lucía, trabalho com ele." },
        { who: "A", es: "Un momento, por favor!", pt: "Um momento, por favor!" },
        { who: "B", es: "Gracias!", pt: "Obrigada!" },
        { who: "C", es: "Hola, Lucía! Qué tal?", pt: "Olá, Lucía! Tudo bem?" },
        { who: "B", es: "Bien, gracias! Y tú?", pt: "Bem, obrigada! E você?" },
        { who: "C", es: "Tranquilo...Mira, estoy cocinando ahora. Te puedo llamar dentro de un rato?", pt: "Tranquilo... Olha, estou cozinhando agora. Posso te ligar daqui a pouco?" },
        { who: "B", es: "Por supuesto!, espero tu llamada.", pt: "Claro! Vou esperar sua ligação." },
        { who: "C", es: "Ok. Hasta luego!", pt: "Ok. Até mais!" },
        { who: "N", es: "1 hora después - Suena el teléfono", pt: "1 hora depois - O telefone toca" },
        { who: "B", es: "Aló!", pt: "Alô!" },
        { who: "C", es: "Lucía, te habla Fernando. Perdón por no haber podido hablar antes. Qué necesitabas?", pt: "Lucía, aqui é o Fernando. Desculpa por não ter conseguido falar antes. O que você precisava?" },
        { who: "B", es: "No te preocupes. Esta noche vamos a por una cerve en la U donde estudia Julieta. Quieres ir con nosotros?", pt: "Não se preocupe. Hoje à noite vamos tomar uma cerveja na universidade onde a Julieta estuda. Quer ir com a gente?" },
        { who: "C", es: "Por supuesto. Estoy libre a las 8h. Nos vemos allá! Gracias por la invitación!", pt: "Claro. Estou livre às 8h. Nos vemos lá! Obrigado pelo convite!" },
        { who: "B", es: "De nada! Hasta luego!", pt: "De nada! Até mais!" }
      ],
      vocabulary: [
        { category: "Aparatos/dispositivos de comunicación", items: [
          { es: "Correo", pt: "Correio" }, { es: "Teléfono fijo", pt: "Telefone fixo" }, { es: "Teléfono celular o móvil", pt: "Telefone celular ou móvel" }, { es: "Videoconferencias", pt: "Videoconferências" },
          { es: "Sitios de redes sociales", pt: "Sites de redes sociais" }, { es: "Herramientas de ciberchat", pt: "Ferramentas de chat online" }, { es: "Fax", pt: "Fax" }, { es: "Computador(a)/Ordenador", pt: "Computador" },
          { es: "Computador portátil/laptop", pt: "Notebook/laptop" }, { es: "Notebook y Netbook", pt: "Notebook e Netbook" }, { es: "Tableta/Tablet", pt: "Tablet" }, { es: "Software", pt: "Software" },
          { es: "Televisión/Tele", pt: "Televisão/TV" }, { es: "Radio", pt: "Rádio" }
        ] },
        { category: "Verbos útiles relacionados", items: [
          { es: "Hablar", pt: "Falar" }, { es: "Charlar", pt: "Bater papo" }, { es: "Atender", pt: "Atender" },
          { es: "Contestar", pt: "Atender/Responder" }, { es: "Esperar", pt: "Esperar" }, { es: "Repetir", pt: "Repetir" },
          { es: "Equivocarse", pt: "Se enganar" }, { es: "Recibir", pt: "Receber" }, { es: "Pasar", pt: "Passar/Acontecer" },
          { es: "Colgar", pt: "Desligar" }, { es: "Coger", pt: "Pegar" }, { es: "Llamar", pt: "Ligar" }, { es: "Anotar", pt: "Anotar" }
        ] },
        { category: "Haciendo la llamada", items: [
          { es: "Hola! Por favor, puedo hablar con (Luciara)?", pt: "Olá! Por favor, posso falar com (Luciara)?" }, { es: "Puede(s) pasarme con (Julia)?", pt: "Você pode me passar para (Julia)?" },
          { es: "Hola!, (Helio) está?", pt: "Olá, o (Helio) está?" }, { es: "Aquí es (Mauro).", pt: "Aqui é o (Mauro)." }, { es: "Trabajo con él/ella.", pt: "Trabalho com ele/ela." },
          { es: "Puede(s) hablar ahora?", pt: "Você pode falar agora?" }, { es: "Recibiste mi recado/mensaje?", pt: "Você recebeu meu recado/mensagem?" }
        ] },
        { category: "Contestando el teléfono", items: [
          { es: "Diga!/Dígame!", pt: "Diga!/Pode falar! (forma usada na Espanha)" }, { es: "Aló!", pt: "Alô! (forma usada na América Latina)" }, { es: "Bueno!", pt: "Alô! (forma usada no México)" }, { es: "Sí?", pt: "Sim?" }, { es: "Quién habla?", pt: "Quem fala?" },
          { es: "De parte de quién?", pt: "Da parte de quem?" }, { es: "Un momento, no cuelgue(s).", pt: "Um momento, não desligue." }
        ] },
        { category: "Problemas durante la llamada", items: [
          { es: "Perdón, se cortó la llamada.", pt: "Desculpe, a ligação caiu." }, { es: "Hay un cruce de líneas.", pt: "Há um cruzamento de linhas." }, { es: "Hay muchas interferencias.", pt: "Há muita interferência." },
          { es: "Te escucho mal.", pt: "Estou te ouvindo mal." }, { es: "Lo siento, me he equivocado de número.", pt: "Desculpe, eu me enganei de número." }, { es: "El teléfono está ocupado.", pt: "O telefone está ocupado." }
        ] },
        { category: "Acortamientos (exemplos)", items: [
          { es: "Automóvil-Auto", pt: "Automóvel-Carro (redução coloquial)" }, { es: "Autobús-Bus", pt: "Ônibus-Bus (redução coloquial)" }, { es: "Celular-Celu", pt: "Celular-Celu (redução coloquial)" }, { es: "Bicicleta-Bici", pt: "Bicicleta-Bici (redução coloquial)" }, { es: "Cerveza-Cerve", pt: "Cerveja-Cerve (redução coloquial)" },
          { es: "Fin de semana-Finde", pt: "Fim de semana-Finde (redução coloquial)" }, { es: "Facultad-Facu/Facul", pt: "Faculdade-Facu/Facul (redução coloquial)" }, { es: "Computadora-Compu", pt: "Computador-Compu (redução coloquial)" }, { es: "Cumpleaños-Cumple", pt: "Aniversário-Cumple (redução coloquial)" },
          { es: "Oficina-Ofi", pt: "Escritório-Ofi (redução coloquial)" }, { es: "Por favor-Porfa", pt: "Por favor-Porfa (redução coloquial)" }, { es: "Universidad-Uni/U", pt: "Universidade-Uni/U (redução coloquial)" }, { es: "Profesor-Profe", pt: "Professor-Profe (redução coloquial)" }, { es: "Película-Peli", pt: "Filme-Peli (redução coloquial)" }
        ] },
        { category: "Jergas en línea/lenguaje chat/SMS", items: [
          { es: "Ademas-Ade+", pt: "Além disso-Ade+ (abreviação de chat/SMS)" }, { es: "Cuánto-Knto", pt: "Quanto-Knto (abreviação de chat/SMS)" }, { es: "Porque-Xq/Xk", pt: "Porque-Xq/Xk (abreviação de chat/SMS)" }, { es: "Tampoco-Tp", pt: "Tampouco-Tp (abreviação de chat/SMS)" }, { es: "Nada-Nd", pt: "Nada-Nd (abreviação de chat/SMS)" },
          { es: "No te preocupes-Ntp", pt: "Não se preocupe-Ntp (abreviação de chat/SMS)" }, { es: "Gracias-Grax", pt: "Obrigado-Grax (abreviação de chat/SMS)" }, { es: "También-Tmb/Tb", pt: "Também-Tmb/Tb (abreviação de chat/SMS)" }, { es: "Te quiero-Tq/Tk", pt: "Te amo/Gosto de você-Tq/Tk (abreviação de chat/SMS)" },
          { es: "Estoy-Toy", pt: "Estou-Toy (abreviação de chat/SMS)" }, { es: "Que-Q", pt: "Que-Q (abreviação de chat/SMS)" }, { es: "Nos vemos-Ns Vms", pt: "Nos vemos-Ns Vms (abreviação de chat/SMS)" }, { es: "Adiós-A2", pt: "Adeus-A2 (abreviação de chat/SMS)" }, { es: "Beso-B/X", pt: "Beijo-B/X (abreviação de chat/SMS)" }
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
        { who: "A", es: "Amiga, vamos de compras al centro comercial mañana?", pt: "Amiga, vamos às compras no shopping amanhã?" },
        { who: "B", es: "No sé...Si tengo plata, voy. Qué necesitas comprar?", pt: "Não sei... Se eu tiver dinheiro, eu vou. O que você precisa comprar?" },
        { who: "A", es: "No necesito nada, pero si puedo, voy a comprar un vestido nuevo para una fiesta.", pt: "Não preciso de nada, mas se eu puder, vou comprar um vestido novo para uma festa." },
        { who: "B", es: "Y en qué color lo quieres?", pt: "E em que cor você quer?" },
        { who: "A", es: "Creo que dorado o negro. Si puedes elegir por mí, cuál color vas a preferir?", pt: "Acho que dourado ou preto. Se você pudesse escolher por mim, qual cor prefere?" },
        { who: "B", es: "Seguramente el dorado. Es un color muy vibrante, bonito y chic.", pt: "Com certeza o dourado. É uma cor bem vibrante, bonita e chique." },
        { who: "A", es: "Buena elección. Tengo ganas de comprarme también unos cosméticos, perfume y maquillaje. Qué te parece?", pt: "Boa escolha. Estou com vontade de comprar também uns cosméticos, perfume e maquiagem. O que você acha?" },
        { who: "B", es: "Buena idea. También necesito unas cositas pero no sé si tengo plata. Igual voy contigo.", pt: "Boa ideia. Também preciso de umas coisinhas, mas não sei se tenho dinheiro. De qualquer jeito vou com você." },
        { who: "A", es: "Averígüelo. Espero que puedas comprarte algo también.", pt: "Descubra isso. Espero que você também possa comprar algo." },
        { who: "B", es: "Ojalá! Quedamos a las 10h?", pt: "Tomara! Combinamos às 10h?" },
        { who: "A", es: "Perfecto! Besitos y hasta mañana!", pt: "Perfeito! Beijinhos e até amanhã!" },
        { who: "B", es: "Chao, amiga!", pt: "Tchau, amiga!" }
      ],
      vocabulary: [
        { category: "Los colores", items: [
          { es: "Azul claro", pt: "Azul claro" }, { es: "Azul marino/oscuro", pt: "Azul marinho/escuro" }, { es: "Morado-Violeta-Lila", pt: "Roxo-Violeta-Lilás" }, { es: "Plata", pt: "Prata" }, { es: "Dorado", pt: "Dourado" },
          { es: "Amarillento", pt: "Amarelado" }, { es: "Rojizo", pt: "Avermelhado" }, { es: "Anaranjado", pt: "Alaranjado" }, { es: "Azulado", pt: "Azulado" }, { es: "Verdoso", pt: "Esverdeado" }, { es: "Rosado", pt: "Rosado" },
          { es: "Rosáceo", pt: "Rosáceo" }, { es: "Grisáceo", pt: "Acinzentado" }, { es: "Negruzco", pt: "Enegrecido" }, { es: "Blancuzco", pt: "Esbranquiçado" }, { es: "Pardusco", pt: "Amarronzado" }
        ] },
        { category: "Productos de higiene y cosméticos (amostra)", items: [
          { es: "Jabón facial/corporal", pt: "Sabonete facial/corporal" }, { es: "Champú", pt: "Xampu" }, { es: "Champú anticaspa/anticaída", pt: "Xampu anticaspa/antiqueda" }, { es: "Acondicionador/Crema de enjuague", pt: "Condicionador" },
          { es: "Tónico/Loción capilar", pt: "Tônico/Loção capilar" }, { es: "Tintura capilar", pt: "Tintura de cabelo" }, { es: "Dentífrico/Pasta de dientes", pt: "Creme dental/Pasta de dente" }, { es: "Enjuague bucal", pt: "Enxaguante bucal" },
          { es: "Desodorante/Antitranspirante axilar", pt: "Desodorante/Antitranspirante" }, { es: "Crema/gel/loción/espuma para afeitarse", pt: "Creme/gel/loção/espuma de barbear" }, { es: "Delineador para labios/ojos y cejas", pt: "Delineador para lábios/olhos e sobrancelhas" },
          { es: "Protector labial", pt: "Protetor labial" }, { es: "Lápiz labial/Pintalabios", pt: "Batom" }, { es: "Brillo labial", pt: "Brilho labial/gloss" }, { es: "Sombra para párpados", pt: "Sombra para pálpebras" },
          { es: "Máscara de pestañas/Rímel", pt: "Máscara de cílios/Rímel" }, { es: "Corrector de ojeras", pt: "Corretivo para olheiras" }, { es: "Base (con FPS)", pt: "Base (com FPS)" }, { es: "Protector solar", pt: "Protetor solar" },
          { es: "Bronceador", pt: "Bronzeador" }, { es: "Toallitas húmedas", pt: "Lenços umedecidos" }, { es: "Mascarilla facial", pt: "Máscara facial" }, { es: "Desmaquillante", pt: "Demaquilante" },
          { es: "Depilador", pt: "Depilador" }, { es: "Esmalte/barniz para uñas", pt: "Esmalte de unha" }, { es: "Quitaesmaltes", pt: "Removedor de esmalte" }, { es: "Perfume", pt: "Perfume" }
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
        { who: "A", es: "Señora, su pasaje y pasaporte, por favor.", pt: "Senhora, sua passagem e passaporte, por favor." },
        { who: "B", es: "Aquí los tiene.", pt: "Aqui estão." },
        { who: "A", es: "Gracias! Usted va a facturar alguna maleta?", pt: "Obrigado! A senhora vai despachar alguma mala?" },
        { who: "B", es: "Sí, solo esta y tengo equipaje de mano.", pt: "Sim, só esta, e tenho bagagem de mão." },
        { who: "A", es: "Bueno, aquí tiene su tarjeta de embarque y etiqueta para el equipaje de mano. Embarque a las 8 y media en la puerta 9.", pt: "Certo, aqui está seu cartão de embarque e a etiqueta para a bagagem de mão. Embarque às 8 e meia no portão 9." },
        { who: "B", es: "Una pregunta, cuál es mi asiento?", pt: "Uma pergunta, qual é o meu assento?" },
        { who: "A", es: "Es el 22B. Le puedo ayudar en algo más?", pt: "É o 22B. Posso ajudar em mais alguma coisa?" },
        { who: "B", es: "Sí. Quisiera saber si es directo el vuelo. No me acuerdo.", pt: "Sim. Eu gostaria de saber se o voo é direto. Não me lembro." },
        { who: "A", es: "No, señora. Hay una escala en Lisboa. Si quiere, usted puede cambiarlo por un vuelo directo todavía.", pt: "Não, senhora. Há uma escala em Lisboa. Se quiser, a senhora ainda pode trocar por um voo direto." },
        { who: "B", es: "Entiendo. No hay problema que tenga una escala. Muchísimas gracias!", pt: "Entendo. Não tem problema ter uma escala. Muito obrigada!" },
        { who: "A", es: "Gracias a usted! Buen viaje!", pt: "Obrigado à senhora! Boa viagem!" }
      ],
      vocabulary: [
        { category: "Usos del verbo TIRAR", items: [
          { es: "Lançar algo com a mão em uma direção — El me tiró un bolígrafo en la cara.", pt: "Jogar algo com a mão em uma direção: Ele jogou uma caneta na minha cara." },
          { es: "Derrubar ou jogar ao chão — Nos peleamos y ella me tiró al suelo.", pt: "Derrubar ou jogar ao chão: Brigamos e ela me jogou no chão." },
          { es: "Descartar/jogar fora — Voy a tirar este vestido, no me gusta más.", pt: "Descartar/jogar fora: Vou jogar fora este vestido, não gosto mais dele." },
          { es: "Lançar uma peça de jogo — Tiró los dados y obtuvo el número 4.", pt: "Lançar uma peça de jogo: Ele jogou os dados e tirou o número 4." },
          { es: "Desperdiçar/não aproveitar algo — Tiraron el dinero comprando este coche.", pt: "Desperdiçar/não aproveitar algo: Jogaram o dinheiro fora comprando este carro." },
          { es: "Disparar com câmera fotográfica — Le pedí que me tirara una foto.", pt: "Tirar uma foto (fotografar): Pedi que ele tirasse uma foto minha." }
        ] },
        { category: "Frases útiles — Aeropuerto", items: [
          { es: "Su pasaporte/identidad/pasaje, por favor.", pt: "Seu passaporte/identidade/passagem, por favor." }, { es: "Va a facturar el equipaje?", pt: "Vai despachar a bagagem?" },
          { es: "Este es el billete de vuelta, no de ida.", pt: "Esta é a passagem de volta, não a de ida." }, { es: "Dónde puedo facturar mi maleta?", pt: "Onde posso despachar minha mala?" },
          { es: "A qué puerta de embarque debo ir?", pt: "A qual portão de embarque devo ir?" }, { es: "Buen viaje!", pt: "Boa viagem!" },
          { es: "No llevo ningún objeto punzante/líquido en mi bolsa.", pt: "Não estou levando nenhum objeto cortante/líquido na minha bolsa." }, { es: "Tiene algo a declarar?", pt: "Tem algo a declarar?" },
          { es: "Dónde recogemos las maletas?", pt: "Onde pegamos as malas?" }, { es: "Hay alguna escala en este vuelo?", pt: "Há alguma escala neste voo?" },
          { es: "Es directo este vuelo?", pt: "Este voo é direto?" }, { es: "Cuándo sale/llega el vuelo?", pt: "Quando o voo sai/chega?" }, { es: "Cuál es mi número de vuelo?", pt: "Qual é o meu número de voo?" },
          { es: "Le gusta la ventanilla o pasillo?", pt: "Prefere janela ou corredor?" }, { es: "Abróchense los cinturones.", pt: "Apertem os cintos." }, { es: "El avión va a despegar/aterrizar?", pt: "O avião vai decolar/aterrissar?" }
        ] },
        { category: "Vocabulario relacionado", items: [
          { es: "Avión (a jato)", pt: "Avião (a jato)" }, { es: "Línea aérea", pt: "Companhia aérea" }, { es: "Aeropuerto", pt: "Aeroporto" }, { es: "Tripulación", pt: "Tripulação" }, { es: "Azafata/Auxiliar de vuelo", pt: "Aeromoça/Comissário(a) de bordo" },
          { es: "Llegadas", pt: "Chegadas" }, { es: "Salidas", pt: "Saídas" }, { es: "Equipaje/Bagaje", pt: "Bagagem" }, { es: "Equipaje de mano", pt: "Bagagem de mão" }, { es: "Maleta/Valija", pt: "Mala" },
          { es: "Billete/Pasaje (ida y vuelta)", pt: "Passagem (ida e volta)" }, { es: "Puerta de embarque", pt: "Portão de embarque" }, { es: "Tarjeta de embarque", pt: "Cartão de embarque" }, { es: "Facturación/Check-in", pt: "Check-in" },
          { es: "Aduana", pt: "Alfândega" }, { es: "Retrasado/Atrasado", pt: "Atrasado" }, { es: "Destino", pt: "Destino" }, { es: "Clase turista/económica", pt: "Classe turística/econômica" }, { es: "Vuelo", pt: "Voo" },
          { es: "Número de vuelo", pt: "Número do voo" }, { es: "Embarque", pt: "Embarque" }, { es: "Pasaporte", pt: "Passaporte" }, { es: "Pasajero", pt: "Passageiro" }, { es: "Piloto", pt: "Piloto" },
          { es: "Cinturón de seguridad", pt: "Cinto de segurança" }, { es: "Asiento de pasillo/ventanilla", pt: "Assento de corredor/janela" }, { es: "Control de seguridad", pt: "Controle de segurança" },
          { es: "Despegar/Despegue", pt: "Decolar/Decolagem" }, { es: "Aterrizar/Aterrizaje", pt: "Aterrissar/Aterrissagem" }, { es: "Escala/Conexión", pt: "Escala/Conexão" }
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
        { who: "A", es: "Hola Mari, qué onda?", pt: "Oi Mari, e aí?" },
        { who: "B", es: "Todo tranquilo. Cómo te fue la fiesta de cumpleaños? Una lástima no haber podido asistir.", pt: "Tudo tranquilo. Como foi a festa de aniversário? Que pena não ter conseguido ir." },
        { who: "A", es: "Buenísima, pero...", pt: "Ótima, mas..." },
        { who: "B", es: "Qué sucedió?", pt: "O que aconteceu?" },
        { who: "A", es: "Bueno...Conoces a Mauricio?", pt: "Bom... Você conhece o Mauricio?" },
        { who: "B", es: "Sí, me parece un buen tipo. Qué pasó?", pt: "Sim, parece um cara legal. O que houve?" },
        { who: "A", es: "Me invitó a salir después de la fiesta y yo dije no.", pt: "Ele me convidou para sair depois da festa e eu disse não." },
        { who: "B", es: "No lo creo! Pero, por qué?", pt: "Não acredito! Mas por quê?" },
        { who: "A", es: "No lo sé amiga...Ahora es demasiado tarde.", pt: "Não sei, amiga... Agora é tarde demais." },
        { who: "B", es: "Tú deberías haber aceptado salir con él. Estoy segura de que no es tarde. Mándale un mensaje ahora mismo.", pt: "Você deveria ter aceitado sair com ele. Tenho certeza de que não é tarde. Manda uma mensagem para ele agora mesmo." },
        { who: "A", es: "Está bien, vamos a ver cómo van las cosas. Después te lo cuento todo.", pt: "Está bem, vamos ver como as coisas vão. Depois te conto tudo." },
        { who: "B", es: "Ok. Suerte, amiga, y feliz cumple de nuevo!", pt: "Ok. Boa sorte, amiga, e feliz aniversário de novo!" },
        { who: "A", es: "Gracias, cuídate, cariño!", pt: "Obrigada, se cuida, querida!" }
      ],
      vocabulary: [
        { category: "VER x ASISTIR x MIRAR", items: [
          { es: "VER: perceber algo pela visão — Desde tu casa se ve perfectamente toda la ciudad.", pt: "VER: perceber algo pela visão: Da sua casa se vê perfeitamente toda a cidade." },
          { es: "VER: assistir como espectador — Fuimos al cine a ver 'Contratiempo'.", pt: "VER: assistir como espectador: Fomos ao cinema ver 'Contratiempo'." },
          { es: "MIRAR: dirigir a vista para algo — Mira el espejo. Qué es lo que ves?", pt: "MIRAR: dirigir o olhar para algo: Olhe o espelho. O que você vê?" },
          { es: "MIRAR: preocupar-se com alguém — En casa de mi abuela miran mucho por mí.", pt: "MIRAR: preocupar-se/cuidar de alguém: Na casa da minha avó cuidam muito de mim." },
          { es: "ASISTIR: estar presente em um lugar/ato — La mayoría de los invitados asistió a la boda.", pt: "ASISTIR: estar presente em um lugar/evento: A maioria dos convidados compareceu ao casamento." },
          { es: "ASISTIR: procurar ajuda/socorro — En urgencias se asisten muchas dolencias.", pt: "ASISTIR: prestar socorro/atendimento: No pronto-socorro atendem muitos males." }
        ] },
        { category: "Expresiones de sorpresa", items: [
          { es: "Dios mío!", pt: "Meu Deus!" }, { es: "Verdad?!", pt: "Verdade?!" }, { es: "No lo creo!", pt: "Não acredito!" }, { es: "Hablas en serio?", pt: "Você está falando sério?" }, { es: "Estás bromeando!", pt: "Você está brincando!" },
          { es: "No consigo/puedo creerlo.", pt: "Não consigo/posso acreditar." }, { es: "De veras?", pt: "Sério mesmo?" }, { es: "Quién lo diría?!", pt: "Quem diria?!" }, { es: "(Estás) seguro(a)?", pt: "Você tem certeza?" }
        ] },
        { category: "Describiendo una sorpresa", items: [
          { es: "De veras que no lo estaba esperando.", pt: "De verdade eu não estava esperando por isso." }, { es: "Me pilló de sorpresa.", pt: "Me pegou de surpresa." }, { es: "Nunca lo habría imaginado.", pt: "Eu nunca teria imaginado isso." },
          { es: "Jamás lo he soñado.", pt: "Eu jamais sonhei com isso." }, { es: "Me asusté.", pt: "Eu me assustei." }, { es: "Me costó aceptarlo.", pt: "Foi difícil aceitar isso." }, { es: "Quedé pasmado.", pt: "Fiquei pasmo/espantado." }
        ] },
        { category: "Aceptando un suceso o noticia desagradable", items: [
          { es: "Sí, pues.", pt: "Pois é." }, { es: "Hace parte.", pt: "Faz parte." }, { es: "Es la vida.", pt: "É a vida." }, { es: "Que se le va a hacer, no?", pt: "O que se vai fazer, né?" },
          { es: "Ley de Murphy.", pt: "Lei de Murphy." }, { es: "No es el fin del mundo.", pt: "Não é o fim do mundo." }, { es: "Qué tristeza!", pt: "Que tristeza!" }, { es: "Mis pésames/condolencias!", pt: "Meus pêsames/condolências!" }
        ] },
        { category: "Arrepentimiento", items: [
          { es: "Ahora es demasiado tarde.", pt: "Agora é tarde demais." }, { es: "Ahora no tiene más remedio.", pt: "Agora não tem mais jeito." }, { es: "Nunca voy a perdonarme por...", pt: "Nunca vou me perdoar por..." },
          { es: "No sé por qué no cerré la boca.", pt: "Não sei por que não fiquei calado(a)." }, { es: "Qué tenía yo que hablar?", pt: "Por que eu tinha que falar?" }, { es: "No sé qué me dio.", pt: "Não sei o que deu em mim." },
          { es: "Quería poder volver atrás y tratar otra vez.", pt: "Eu queria poder voltar atrás e tentar de novo." }, { es: "Si supiera antes lo que sé ahora.", pt: "Se eu soubesse antes o que sei agora." }
        ] },
        { category: "PARABIENES x FELICIDADES x FELICITACIONES x ENHORABUENA", items: [
          { es: "Todas expressões usadas para desejar felicidade/parabenizar alguém por algo bom que aconteceu.", pt: "Todas as expressões usadas para desejar felicidade/parabenizar alguém por algo bom que aconteceu." }
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
    },
    {
      id: "i16",
      order: 16,
      title: "Medios de Transporte",
      subtitle: "Experiencias de viaje — Pretérito Indefinido x Imperfecto (repaso)",
      text: "El verano pasado viajé en tren desde Barcelona hasta París. El viaje duró seis horas y fue muy cómodo. Durante el trayecto, leí un libro y observé el paisaje. Cuando era niño, siempre viajaba en coche con mis padres, y esos viajes eran más largos y cansados. Sin embargo, ahora prefiero el tren porque es más rápido y me permite disfrutar del camino. Fue una experiencia inolvidable.",
      textPt: "No verão passado, viajei de trem de Barcelona até Paris. A viagem durou seis horas e foi muito confortável. Durante o trajeto, li um livro e observei a paisagem. Quando eu era criança, sempre viajava de carro com meus pais, e essas viagens eram mais longas e cansativas. No entanto, agora prefiro o trem porque é mais rápido e me permite aproveitar o caminho. Foi uma experiência inesquecível.",
      vocabulary: [
        { category: "Transporte y viajes", items: [
          { es: "Avión — Viajé en avión a Madrid el año pasado.", pt: "Avião — Viajei de avião para Madri no ano passado." },
          { es: "Tren — El tren fue rápido y muy cómodo.", pt: "Trem — O trem foi rápido e muito confortável." },
          { es: "Autobús — Tomamos un autobús nocturno para llegar a la playa.", pt: "Ônibus — Pegamos um ônibus noturno para chegar à praia." },
          { es: "Barco — Mi familia viajó en barco por el Mediterráneo.", pt: "Barco — Minha família viajou de barco pelo Mediterrâneo." },
          { es: "Coche — Conduje mi coche por toda la costa.", pt: "Carro — Dirigi meu carro por toda a costa." },
          { es: "Metro — En la ciudad usamos el metro todos los días.", pt: "Metrô — Na cidade usamos o metrô todos os dias." },
          { es: "Reservar — Reservamos los billetes con anticipación.", pt: "Reservar — Reservamos as passagens com antecedência." },
          { es: "Retraso — El vuelo tuvo dos horas de retraso.", pt: "Atraso — O voo teve duas horas de atraso." },
          { es: "Cancelar — Cancelaron nuestro viaje por mal tiempo.", pt: "Cancelar — Cancelaram nossa viagem por causa do mau tempo." },
          { es: "Experiencia inolvidable — Fue una experiencia inolvidable viajar en tren nocturno.", pt: "Experiência inesquecível — Foi uma experiência inesquecível viajar de trem noturno." }
        ] }
      ],
      grammar: [
        { title: "Pretérito Indefinido x Imperfecto — narrar un viaje (repaso)", headers: ["Uso", "Ejemplo"], rows: [
          ["Indefinido: hecho puntual y concluido", "El viaje duró seis horas."],
          ["Imperfecto: descripción/hábito en el pasado", "Cuando era niño, siempre viajaba en coche."],
          ["Los dos juntos en una narración", "Leí un libro mientras el tren avanzaba por el paisaje."]
        ] }
      ],
      notes: ["Conectores útiles para narrar un viaje: primero, después, sin embargo, además, finalmente."],
      exercises: [
        { type: "mc", q: "¿Cuál de estas palabras NO es un medio de transporte?", options: ["Metro", "Barco", "Retraso"], correct: 2 },
        { type: "fill", q: "El verano pasado yo ___ (viajar - indefinido) en tren desde Barcelona.", answer: "viajé" },
        { type: "fill", q: "Cuando era niño, siempre ___ (viajar - imperfecto) en coche con mi familia.", answer: "viajaba" },
        { type: "fill", q: "Mi vuelo a Madrid ___ (tener - indefinido) dos horas de retraso.", answer: "tuvo" },
        { type: "order", items: ["Viajé en tren de Barcelona a París.", "El viaje en tren fue cómodo y duró seis horas.", "Cuando era niño, viajaba en coche con mi familia.", "Prefiero el tren porque es más rápido.", "Fue una experiencia inolvidable."], correctOrder: [0, 1, 2, 3, 4] },
        { type: "translate", from: "pt", text: "Reservamos as passagens com antecedência.", answer: "Reservamos los billetes con anticipación." },
        { type: "translate", from: "es", text: "Cancelaron nuestro viaje por mal tiempo.", answer: "Cancelaram nossa viagem por causa do mau tempo." },
        { type: "listen", audioText: "El viaje duró seis horas y fue muy cómodo.", q: "¿Cuánto duró el viaje en tren?", answer: "Seis horas." },
        { type: "open", q: "Escribe un párrafo (6 a 8 líneas) contando una experiencia de viaje real o imaginada: ¿a dónde fuiste?, ¿qué transporte usaste?, ¿cómo fue? Usa conectores: primero, después, sin embargo, además, finalmente.", sample: "El año pasado viajé a Lisboa en autobús. Primero, compré los billetes con anticipación. Después, el viaje fue largo, pero cómodo. Sin embargo, tuvimos un pequeño retraso. Además, conocí a otros viajeros muy simpáticos. Finalmente, llegamos y fue una experiencia inolvidable." }
      ]
    },
    {
      id: "i17",
      order: 17,
      title: "Alojamientos y Servicios Turísticos",
      subtitle: "Hoteles, hostales y campings — SER x ESTAR describiendo lugares",
      text: "Durante mis vacaciones en México, me alojé en un hotel frente al mar. La habitación tenía balcón y una vista espectacular. El servicio de limpieza era excelente, y el desayuno estaba incluido. Sin embargo, el internet era muy lento y la piscina estaba llena casi todo el tiempo. A pesar de esos detalles, fue una estancia muy agradable y lo recomendaría a mis amigos.",
      textPt: "Durante minhas férias no México, me hospedei em um hotel de frente para o mar. O quarto tinha varanda e uma vista espetacular. O serviço de limpeza era excelente, e o café da manhã estava incluído. No entanto, a internet era muito lenta e a piscina estava cheia quase o tempo todo. Apesar desses detalhes, foi uma estadia muito agradável e eu a recomendaria aos meus amigos.",
      vocabulary: [
        { category: "Alojamientos y servicios", items: [
          { es: "Hotel — El hotel tenía piscina y gimnasio.", pt: "Hotel — O hotel tinha piscina e academia." },
          { es: "Hostal — Nos alojamos en un hostal económico.", pt: "Hostel — Nos hospedamos em um hostel econômico." },
          { es: "Apartamento turístico — Alquilamos un apartamento con vista al mar.", pt: "Apartamento turístico — Alugamos um apartamento com vista para o mar." },
          { es: "Camping — Dormimos en tiendas de campaña en el camping.", pt: "Camping — Dormimos em barracas no camping." },
          { es: "Recepción — Preguntamos en la recepción por el horario del desayuno.", pt: "Recepção — Perguntamos na recepção o horário do café da manhã." },
          { es: "Desayuno incluido — El alojamiento ofrecía desayuno incluido.", pt: "Café da manhã incluído — A hospedagem oferecia café da manhã incluído." },
          { es: "Reservar — Reservamos la habitación por internet.", pt: "Reservar — Reservamos o quarto pela internet." },
          { es: "Cancelar — Tuvimos que cancelar la reserva por enfermedad.", pt: "Cancelar — Tivemos que cancelar a reserva por causa de doença." },
          { es: "Limpieza — El servicio de limpieza era excelente.", pt: "Limpeza — O serviço de limpeza era excelente." },
          { es: "Servicio al cliente — El servicio al cliente fue muy amable.", pt: "Atendimento ao cliente — O atendimento ao cliente foi muito gentil." }
        ] }
      ],
      grammar: [
        { title: "SER x ESTAR describiendo un alojamiento", headers: ["Uso", "Ejemplo"], rows: [
          ["SER: característica/ubicación permanente del lugar", "El hotel era frente al mar."],
          ["ESTAR: estado o condición temporal", "La piscina estaba llena casi todo el tiempo."],
          ["ESTAR + participio: resultado de una acción", "El desayuno estaba incluido."]
        ] }
      ],
      exercises: [
        { type: "mc", q: "¿Cuál de estas palabras describe un lugar para dormir en tiendas de campaña?", options: ["Hostal", "Camping", "Apartamento"], correct: 1 },
        { type: "fill", q: "El hotel ___ (ser) frente al mar.", answer: "era" },
        { type: "fill", q: "La piscina ___ (estar) llena casi todo el tiempo.", answer: "estaba" },
        { type: "fill", q: "El servicio de limpieza ___ (ser) excelente.", answer: "era" },
        { type: "order", items: ["Me alojé en un hotel frente al mar.", "La habitación tenía balcón y vista espectacular.", "El desayuno estaba incluido.", "La piscina estaba llena casi todo el tiempo.", "A pesar de los problemas, la estancia fue agradable."], correctOrder: [0, 1, 2, 3, 4] },
        { type: "translate", from: "pt", text: "Reservamos o quarto pela internet.", answer: "Reservamos la habitación por internet." },
        { type: "translate", from: "es", text: "El desayuno estaba incluido.", answer: "O café da manhã estava incluído." },
        { type: "open", q: "Escribe una reseña breve (8 a 10 líneas) de un alojamiento en el que te quedaste, real o imaginado.", sample: "Me alojé en un apartamento cerca de la playa. Era pequeño, pero muy cómodo. El servicio de limpieza era excelente y la recepción siempre estaba disponible. Sin embargo, el wifi era lento. En general, fue una experiencia agradable y lo recomendaría." }
      ]
    },
    {
      id: "i18",
      order: 18,
      title: "Gastronomía y Viajes",
      subtitle: "Sabores del mundo — Pretérito Pluscuamperfecto (repaso)",
      text: "Durante mis vacaciones en México, probé muchos platos típicos que nunca había comido antes. En un mercado local, degusté tacos de carne con diferentes salsas, y me sorprendió el sabor picante de algunos ingredientes. La gastronomía no solo fue deliciosa, también me permitió conocer mejor la cultura. Cada comida tenía una historia, una tradición y un significado especial. Al final del viaje, entendí que viajar también significa saborear la identidad de un país.",
      textPt: "Durante minhas férias no México, provei muitos pratos típicos que nunca tinha comido antes. Em um mercado local, degustei tacos de carne com molhos diferentes, e me surpreendi com o sabor picante de alguns ingredientes. A gastronomia não foi só deliciosa, também me permitiu conhecer melhor a cultura. Cada comida tinha uma história, uma tradição e um significado especial. No final da viagem, entendi que viajar também significa saborear a identidade de um país.",
      vocabulary: [
        { category: "Gastronomía y viajes", items: [
          { es: "Degustar — En España degusté tapas tradicionales.", pt: "Degustar — Na Espanha degustei tapas tradicionais." },
          { es: "Probar — Siempre quiero probar la comida típica del lugar.", pt: "Provar — Sempre quero provar a comida típica do lugar." },
          { es: "Saborear — Me gusta saborear los postres locales.", pt: "Saborear — Gosto de saborear as sobremesas locais." },
          { es: "Plato típico — La paella es un plato típico de Valencia.", pt: "Prato típico — A paella é um prato típico de Valência." },
          { es: "Especialidad — La especialidad de la región es el marisco.", pt: "Especialidade — A especialidade da região são os frutos do mar." },
          { es: "Ingredientes — Los ingredientes frescos hacen la diferencia.", pt: "Ingredientes — Os ingredientes frescos fazem a diferença." },
          { es: "Gastronomía — La gastronomía local refleja la cultura del país.", pt: "Gastronomia — A gastronomia local reflete a cultura do país." },
          { es: "Restaurante local — Prefiero comer en restaurantes locales.", pt: "Restaurante local — Prefiro comer em restaurantes locais." },
          { es: "Mercado — En el mercado conocí muchos productos nuevos.", pt: "Mercado — No mercado conheci muitos produtos novos." },
          { es: "Costumbre — Es una costumbre beber mate en Argentina.", pt: "Costume — É um costume beber mate na Argentina." }
        ] }
      ],
      grammar: [
        { title: "Pretérito Pluscuamperfecto — acción anterior a otra acción pasada (repaso)", headers: ["Estructura", "Ejemplo"], rows: [
          ["HABÍA + Participio", "Probé platos que nunca había comido antes."],
          ["HABÍA + Participio (negación)", "Nunca había probado algo tan picante."]
        ] }
      ],
      exercises: [
        { type: "mc", q: "¿Qué verbo significa 'probar algo prestando atención al sabor'?", options: ["Degustar", "Cancelar", "Reservar"], correct: 0 },
        { type: "fill", q: "En mis vacaciones en México, ___ (probar - indefinido) tacos de carne.", answer: "probé" },
        { type: "fill", q: "Nunca ___ (comer - pluscuamperfecto) platos tan picantes antes de ese viaje.", answer: "había comido" },
        { type: "order", items: ["Probé muchos platos típicos en México.", "En un mercado local degusté tacos con salsas.", "Me sorprendió el sabor picante de algunos ingredientes.", "Cada comida tenía una historia y tradición.", "Entendí que viajar es saborear la identidad de un país."], correctOrder: [0, 1, 2, 3, 4] },
        { type: "translate", from: "pt", text: "A gastronomia me permitiu conhecer melhor a cultura.", answer: "La gastronomía me permitió conocer mejor la cultura." },
        { type: "translate", from: "es", text: "Cada plato típico tiene una historia.", answer: "Cada prato típico tem uma história." },
        { type: "listen", audioText: "La gastronomía no solo fue deliciosa, también me permitió conocer mejor la cultura.", q: "Además de deliciosa, ¿qué le permitió la gastronomía?", answer: "Conocer mejor la cultura." },
        { type: "open", q: "Escribe un párrafo (5 a 8 líneas) sobre una experiencia gastronómica durante un viaje, real o inventada.", sample: "Cuando viajé a Perú, probé un ceviche delicioso en un mercado local. Nunca había comido algo tan fresco. El sabor era ácido y picante a la vez. Me encantó y ahora quiero aprender a prepararlo." }
      ]
    },
    {
      id: "i19",
      order: 19,
      title: "Actividades y Ocio en Vacaciones",
      subtitle: "Excursiones y aventuras — Pretérito Indefinido (repaso)",
      text: "El verano pasado viajé a Costa Rica con mis amigos. Durante las vacaciones hicimos muchas actividades diferentes. Un día fuimos de excursión a la selva y practicamos senderismo. Otro día fuimos a la playa, donde algunos decidieron relajarse y otros quisimos bucear. Además, visitamos un museo en la capital y participamos en una actividad cultural donde aprendimos bailes típicos. Cada día fue una experiencia única, y al final del viaje todos sentimos que habíamos disfrutado de unas vacaciones inolvidables.",
      textPt: "No verão passado, viajei para a Costa Rica com meus amigos. Durante as férias fizemos muitas atividades diferentes. Um dia fomos fazer uma excursão à selva e praticamos trilha. Outro dia fomos à praia, onde alguns decidiram relaxar e outros quisemos mergulhar. Além disso, visitamos um museu na capital e participamos de uma atividade cultural onde aprendemos danças típicas. Cada dia foi uma experiência única, e no final da viagem todos sentimos que tínhamos aproveitado umas férias inesquecíveis.",
      vocabulary: [
        { category: "Actividades y ocio", items: [
          { es: "Excursión — Hicimos una excursión a las montañas.", pt: "Excursão — Fizemos uma excursão às montanhas." },
          { es: "Senderismo — Practicamos senderismo por el bosque.", pt: "Trilha — Praticamos trilha pela floresta." },
          { es: "Bucear — En el mar Caribe buceamos con peces de colores.", pt: "Mergulhar — No mar do Caribe mergulhamos com peixes coloridos." },
          { es: "Visitar museos — Visitamos museos de arte y de historia.", pt: "Visitar museus — Visitamos museus de arte e de história." },
          { es: "Relajarse — Nos relajamos en la playa bajo el sol.", pt: "Relaxar — Relaxamos na praia sob o sol." },
          { es: "Disfrutar — Disfrutamos mucho de las vacaciones en familia.", pt: "Aproveitar — Aproveitamos muito as férias em família." },
          { es: "Aventura — Fue una verdadera aventura viajar en barco.", pt: "Aventura — Foi uma verdadeira aventura viajar de barco." },
          { es: "Descubrir — Descubrimos lugares nuevos y sorprendentes.", pt: "Descobrir — Descobrimos lugares novos e surpreendentes." },
          { es: "Pasear — Paseamos por las calles del centro histórico.", pt: "Passear — Passeamos pelas ruas do centro histórico." },
          { es: "Actividad cultural — Asistimos a una actividad cultural en la ciudad.", pt: "Atividade cultural — Assistimos a uma atividade cultural na cidade." }
        ] }
      ],
      grammar: [
        { title: "Pretérito Indefinido — narrar actividades de vacaciones (repaso)", headers: ["Pronombre", "Practicar (-ar)", "Visitar (-ar)"], rows: [
          ["Yo", "practiqué", "visité"],
          ["Nosotros/Nosotras", "practicamos", "visitamos"],
          ["Ellos/Ellas/Ustedes", "practicaron", "visitaron"]
        ] }
      ],
      exercises: [
        { type: "mc", q: "¿Qué actividad se hace bajo el agua?", options: ["Senderismo", "Bucear", "Pasear"], correct: 1 },
        { type: "fill", q: "En la selva ___ (practicar - indefinido, yo) senderismo con mis amigos.", answer: "practiqué" },
        { type: "fill", q: "En la capital ___ (visitar - indefinido, nosotros) un museo.", answer: "visitamos" },
        { type: "fill", q: "Al final del viaje ___ (disfrutar - indefinido, nosotros) unas vacaciones inolvidables.", answer: "disfrutamos" },
        { type: "order", items: ["Viajé a Costa Rica con mis amigos.", "Practicamos senderismo en la selva.", "En la playa algunos se relajaron y otros bucearon.", "Visitamos un museo en la capital.", "Participamos en una actividad cultural con bailes típicos.", "Sentimos que habíamos disfrutado de vacaciones inolvidables."], correctOrder: [0, 1, 2, 3, 4, 5] },
        { type: "translate", from: "pt", text: "Praticamos trilha pela floresta.", answer: "Practicamos senderismo por el bosque." },
        { type: "translate", from: "es", text: "Descubrimos lugares nuevos y sorprendentes.", answer: "Descobrimos lugares novos e surpreendentes." },
        { type: "open", q: "Escribe un pequeño texto (5 a 8 líneas) comparando dos tipos de vacaciones: tranquilas vs. activas.", sample: "Las vacaciones tranquilas son perfectas para descansar en la playa y relajarse. En cambio, las vacaciones activas incluyen excursiones, senderismo y aventuras. Prefiero una mezcla de las dos: unos días tranquilos y otros llenos de actividades." }
      ]
    },
    {
      id: "i20",
      order: 20,
      title: "Experiencias Culturales en el Extranjero",
      subtitle: "Festivales y museos — Pretérito Perfecto Compuesto x Indefinido (repaso)",
      text: "El verano pasado viajé a Italia y tuve la oportunidad de vivir muchas experiencias culturales. Visité museos famosos en Roma y Florencia, y aprendí sobre la historia del arte renacentista. Además, asistí a un festival local donde probé comidas típicas y participé en bailes tradicionales. Cada experiencia me permitió conocer mejor la cultura italiana y practicar mi español con otros turistas. Al final del viaje, sentí que había aprendido mucho y que esas experiencias culturales habían enriquecido mi vida.",
      textPt: "No verão passado, viajei para a Itália e tive a oportunidade de viver muitas experiências culturais. Visitei museus famosos em Roma e Florença, e aprendi sobre a história da arte renascentista. Além disso, assisti a um festival local onde provei comidas típicas e participei de danças tradicionais. Cada experiência me permitiu conhecer melhor a cultura italiana e praticar meu espanhol com outros turistas. No final da viagem, senti que tinha aprendido muito e que essas experiências culturais tinham enriquecido minha vida.",
      vocabulary: [
        { category: "Experiencias culturales", items: [
          { es: "Festival — Asistí a un festival de música en España.", pt: "Festival — Assisti a um festival de música na Espanha." },
          { es: "Tradición — Aprendí sobre tradiciones locales en México.", pt: "Tradição — Aprendi sobre tradições locais no México." },
          { es: "Museo — Visitamos un museo de arte moderno.", pt: "Museu — Visitamos um museu de arte moderna." },
          { es: "Evento cultural — Participé en un evento cultural en Francia.", pt: "Evento cultural — Participei de um evento cultural na França." },
          { es: "Patrimonio — El patrimonio histórico es muy importante para la cultura.", pt: "Patrimônio — O patrimônio histórico é muito importante para a cultura." },
          { es: "Artesanía — Compré artesanía típica de la región.", pt: "Artesanato — Comprei artesanato típico da região." },
          { es: "Monumento — Vimos monumentos históricos impresionantes.", pt: "Monumento — Vimos monumentos históricos impressionantes." },
          { es: "Exposición — La exposición de fotografía fue increíble.", pt: "Exposição — A exposição de fotografia foi incrível." },
          { es: "Experiencia — Fue una experiencia inolvidable.", pt: "Experiência — Foi uma experiência inesquecível." },
          { es: "Conocer — Conocí personas de diferentes países.", pt: "Conhecer — Conheci pessoas de diferentes países." }
        ] }
      ],
      grammar: [
        { title: "Pretérito Perfecto Compuesto x Indefinido — narrar experiencias (repaso)", headers: ["Uso", "Ejemplo"], rows: [
          ["Indefinido: hecho concluido, con tiempo específico", "El verano pasado visité museos en Roma."],
          ["Perfecto compuesto: experiencia sin tiempo específico o con relación al presente", "He viajado a varios países europeos."]
        ] }
      ],
      exercises: [
        { type: "mc", q: "¿Qué palabra se refiere a bienes históricos/culturales de un lugar?", options: ["Patrimonio", "Exposición", "Artesanía"], correct: 0 },
        { type: "fill", q: "En Italia ___ (visitar - indefinido) museos famosos en Roma.", answer: "visité" },
        { type: "fill", q: "___ (asistir - pretérito perfecto compuesto, yo) a festivales en varios países.", answer: "He asistido" },
        { type: "order", items: ["Viajé a Italia el verano pasado.", "Visité museos famosos en Roma y Florencia.", "Asistí a un festival local.", "Practiqué mi español con otros turistas.", "Sentí que había aprendido mucho."], correctOrder: [0, 1, 2, 3, 4] },
        { type: "translate", from: "pt", text: "Aprendi sobre tradições locais no México.", answer: "Aprendí sobre tradiciones locales en México." },
        { type: "translate", from: "es", text: "Compré artesanía típica de la región.", answer: "Comprei artesanato típico da região." },
        { type: "open", q: "Escribe un párrafo (5 a 8 líneas) sobre una experiencia cultural que hayas vivido en el extranjero o que te gustaría vivir.", sample: "Me gustaría asistir a un festival de flamenco en España. Me encantaría aprender sobre la tradición y bailar con la gente local. Creo que sería una experiencia inolvidable y me ayudaría a entender mejor la cultura." }
      ]
    },
    {
      id: "i21",
      order: 21,
      title: "Planes de Viaje y Próximas Vacaciones",
      subtitle: "IR A + Infinitivo, Futuro Simple y Primer Condicional",
      text: "El próximo verano voy a viajar a España con mis amigos. Hemos decidido visitar Barcelona y Madrid, y nuestro itinerario incluirá excursiones a museos, monumentos históricos y parques famosos. Vamos a alojarnos en un apartamento cerca del centro, y usaremos transporte público para movernos por la ciudad. Si hace buen tiempo, también iremos a la playa y participaremos en actividades al aire libre. Estoy muy emocionado porque será una experiencia inolvidable.",
      textPt: "No próximo verão, vou viajar para a Espanha com meus amigos. Decidimos visitar Barcelona e Madri, e nosso itinerário incluirá excursões a museus, monumentos históricos e parques famosos. Vamos nos hospedar em um apartamento perto do centro, e usaremos transporte público para nos movermos pela cidade. Se fizer bom tempo, também iremos à praia e participaremos de atividades ao ar livre. Estou muito animado porque será uma experiência inesquecível.",
      vocabulary: [
        { category: "Planes de viaje", items: [
          { es: "Destino — Nuestro destino será Barcelona.", pt: "Destino — Nosso destino será Barcelona." },
          { es: "Itinerario — Planeamos un itinerario de siete días.", pt: "Itinerário — Planejamos um itinerário de sete dias." },
          { es: "Alojamiento — Reservaremos un alojamiento cerca del centro.", pt: "Hospedagem — Reservaremos uma hospedagem perto do centro." },
          { es: "Transporte — Usaremos transporte público durante la estancia.", pt: "Transporte — Usaremos transporte público durante a estadia." },
          { es: "Reserva — Hice la reserva del hotel por internet.", pt: "Reserva — Fiz a reserva do hotel pela internet." },
          { es: "Excursión — Haremos excursiones a museos y monumentos.", pt: "Excursão — Faremos excursões a museus e monumentos." },
          { es: "Maleta — Prepararé la maleta con ropa cómoda.", pt: "Mala — Vou preparar a mala com roupas confortáveis." },
          { es: "Pasaporte — No olvides tu pasaporte para viajar al extranjero.", pt: "Passaporte — Não esqueça seu passaporte para viajar ao exterior." }
        ] }
      ],
      grammar: [
        { title: "IR A + Infinitivo x Futuro Simple x Primer Condicional", headers: ["Estructura", "Uso", "Ejemplo"], rows: [
          ["IR A + Infinitivo", "Plan ya decidido", "Voy a viajar a España en verano."],
          ["Futuro Simple", "Predicción o promesa", "Usaremos transporte público."],
          ["SI + Presente + Futuro", "Condición y consecuencia futura", "Si hace buen tiempo, iremos a la playa."]
        ] }
      ],
      exercises: [
        { type: "mc", q: "'Voy a viajar' expresa principalmente:", options: ["Una predicción lejana", "Un plan ya decidido", "Una hipótesis irreal"], correct: 1 },
        { type: "fill", q: "El próximo verano ___ (yo - ir a - viajar) a España.", answer: "voy a viajar" },
        { type: "fill", q: "Si hace buen tiempo, ___ (nosotros - ir - futuro) a la playa.", answer: "iremos" },
        { type: "fill", q: "Nuestro itinerario ___ (incluir - futuro) excursiones a museos.", answer: "incluirá" },
        { type: "order", items: ["Planean excursiones a museos y monumentos históricos.", "Van a alojarse en un apartamento cerca del centro.", "Usarán transporte público para moverse por la ciudad.", "Participarán en actividades al aire libre si hace buen tiempo.", "Esperan que sea una experiencia inolvidable."], correctOrder: [0, 1, 2, 3, 4] },
        { type: "translate", from: "pt", text: "Reservaremos uma hospedagem perto do centro.", answer: "Reservaremos un alojamiento cerca del centro." },
        { type: "translate", from: "es", text: "No olvides tu pasaporte para viajar al extranjero.", answer: "Não esqueça seu passaporte para viajar ao exterior." },
        { type: "open", q: "Describe tus próximas vacaciones (5-8 líneas): ¿qué actividades harás?, ¿a dónde irás?, ¿con quién viajarás?", sample: "El próximo año voy a viajar a Portugal con mi familia. Visitaremos Lisboa y Oporto. Si tenemos tiempo, iremos también a la playa. Será un viaje inolvidable." }
      ]
    },
    {
      id: "i22",
      order: 22,
      title: "Consejos para Viajeros",
      subtitle: "Recomendaciones — Imperativo afirmativo y negativo (repaso)",
      text: "Antes de viajar al extranjero, es importante tener cuidado con algunos puntos: primero, haz un plan de las actividades disponibles en el lugar y organiza todo según tu presupuesto. Lleva ropa variada, para el calor y el frío. No olvides tus documentos, principalmente el pasaporte. Y, por último, pero no menos importante, evita comer cosas que sabes que no toleras bien, porque es muy desagradable sentirse mal durante un viaje.",
      textPt: "Antes de viajar para o exterior, é importante tomar cuidado com alguns pontos: primeiro, faça um plano das atividades disponíveis no lugar e organize tudo de acordo com seu orçamento. Leve roupas variadas, para o calor e o frio. Não esqueça seus documentos, principalmente o passaporte. E, por último, mas não menos importante, evite comer coisas que você sabe que não tolera bem, porque é muito desagradável se sentir mal durante uma viagem.",
      vocabulary: [
        { category: "Consejos de viaje", items: [
          { es: "Presupuesto — Es importante hacer un presupuesto antes de viajar.", pt: "Orçamento — É importante fazer um orçamento antes de viajar." },
          { es: "Equipaje/Maleta — Prepara el equipaje con anticipación.", pt: "Bagagem/Mala — Prepare a bagagem com antecedência." },
          { es: "Seguro de viaje — Contrata un seguro de viaje antes de salir.", pt: "Seguro de viagem — Contrate um seguro de viagem antes de sair." },
          { es: "Documentación — Revisa toda tu documentación antes del vuelo.", pt: "Documentação — Revise toda a sua documentação antes do voo." },
          { es: "Imprevisto — Siempre puede surgir un imprevisto durante el viaje.", pt: "Imprevisto — Sempre pode surgir um imprevisto durante a viagem." },
          { es: "Precaución — Ten precaución con tus objetos de valor.", pt: "Precaução — Tenha precaução com seus objetos de valor." }
        ] }
      ],
      grammar: [
        { title: "Imperativo afirmativo x negativo (tú) — dar consejos (repaso)", headers: ["Afirmativo", "Negativo"], rows: [
          ["Lleva ropa variada.", "No lleves solo ropa de verano."],
          ["Haz un plan de actividades.", "No hagas todo sin planear."],
          ["Evita comidas que no toleras.", "No olvides tus documentos."]
        ] }
      ],
      exercises: [
        { type: "mc", q: "¿Qué palabra se refiere al dinero planeado para gastar en un viaje?", options: ["Presupuesto", "Imprevisto", "Seguro"], correct: 0 },
        { type: "fill", q: "___ (llevar - imperativo tú) ropa variada, para el calor y el frío.", answer: "Lleva" },
        { type: "fill", q: "No ___ (olvidar - imperativo negativo tú) tu pasaporte.", answer: "olvides" },
        { type: "translate", from: "pt", text: "Contrate um seguro de viagem antes de sair.", answer: "Contrata un seguro de viaje antes de salir." },
        { type: "translate", from: "es", text: "Ten precaución con tus objetos de valor.", answer: "Tenha precaução com seus objetos de valor." },
        { type: "open", q: "Escribe 5 consejos (con imperativo) para alguien que viaja por primera vez al extranjero.", sample: "1. Haz un presupuesto antes de viajar. 2. Lleva ropa variada. 3. No olvides tu pasaporte. 4. Contrata un seguro de viaje. 5. Evita comidas que no toleras bien." }
      ]
    },
    {
      id: "i23",
      order: 23,
      title: "Problemas y Soluciones Durante un Viaje",
      subtitle: "Imprevistos — Poder, Deber y Tener que + infinitivo",
      text: "Durante mis vacaciones en Francia, perdí mi pasaporte en el aeropuerto. Al principio me asusté mucho, pero fui a la oficina de objetos perdidos y pedí ayuda. Después de esperar un poco, lograron encontrarlo. Otro día, nuestro vuelo tuvo un retraso de cinco horas. Decidimos reprogramar las actividades para aprovechar el tiempo. Aunque hubo varios problemas, aprendimos que mantener la calma y buscar soluciones es la mejor manera de enfrentar situaciones inesperadas.",
      textPt: "Durante minhas férias na França, perdi meu passaporte no aeroporto. No início fiquei muito assustado, mas fui ao setor de achados e perdidos e pedi ajuda. Depois de esperar um pouco, conseguiram encontrá-lo. Outro dia, nosso voo teve um atraso de cinco horas. Decidimos reprogramar as atividades para aproveitar o tempo. Embora tenha havido vários problemas, aprendemos que manter a calma e buscar soluções é a melhor forma de enfrentar situações inesperadas.",
      vocabulary: [
        { category: "Problemas y soluciones", items: [
          { es: "Perder documentos — Perdí mi pasaporte en el aeropuerto.", pt: "Perder documentos — Perdi meu passaporte no aeroporto." },
          { es: "Retraso — Nuestro vuelo tuvo un gran retraso.", pt: "Atraso — Nosso voo teve um grande atraso." },
          { es: "Cancelación — Cancelaron la excursión por mal tiempo.", pt: "Cancelamento — Cancelaram a excursão por causa do mau tempo." },
          { es: "Enfermarse — Me enfermé durante el viaje.", pt: "Ficar doente — Fiquei doente durante a viagem." },
          { es: "Hotel completo — El hotel estaba lleno.", pt: "Hotel lotado — O hotel estava lotado." },
          { es: "Maleta perdida — La compañía perdió mi maleta.", pt: "Mala extraviada — A companhia perdeu minha mala." },
          { es: "Llamar a la embajada — Tuve que llamar a la embajada.", pt: "Ligar para a embaixada — Tive que ligar para a embaixada." },
          { es: "Pedir ayuda — Pedimos ayuda en la estación.", pt: "Pedir ajuda — Pedimos ajuda na estação." },
          { es: "Reprogramar — Tuvimos que reprogramar la excursión.", pt: "Reprogramar — Tivemos que reprogramar a excursão." }
        ] }
      ],
      grammar: [
        { title: "Verbos modales — resolver problemas de viaje", headers: ["Verbo modal", "Ejemplo"], rows: [
          ["Tener que (obligación)", "Tuve que llamar a la embajada."],
          ["Deber (recomendación/obligación)", "Debes reprogramar la excursión."],
          ["Poder (posibilidad)", "Podemos buscar otra solución."]
        ] }
      ],
      exercises: [
        { type: "mc", q: "¿Cuál expresa una obligación fuerte?", options: ["Poder", "Tener que", "Preferir"], correct: 1 },
        { type: "fill", q: "___ (yo - tener que) llamar a la embajada.", answer: "Tuve que" },
        { type: "fill", q: "___ (nosotros - deber) mantener la calma en situaciones difíciles.", answer: "Debemos" },
        { type: "order", items: ["Perdí mi pasaporte en el aeropuerto.", "Pedí ayuda en la oficina de objetos perdidos.", "Recuperé el pasaporte después de esperar.", "Nuestro vuelo tuvo un retraso de cinco horas.", "Reprogramamos las actividades y mantuvimos la calma."], correctOrder: [0, 1, 2, 3, 4] },
        { type: "translate", from: "pt", text: "A companhia perdeu minha mala.", answer: "La compañía perdió mi maleta." },
        { type: "translate", from: "es", text: "Tuvimos que reprogramar la excursión.", answer: "Tivemos que reprogramar a excursão." },
        { type: "open", q: "Escribe un párrafo (5-8 líneas) sobre un problema que hayas tenido en un viaje (real o hipotético) y cómo se resolvió.", sample: "Una vez perdí mi maleta en el aeropuerto. Tuve que hablar con la aerolínea y esperar dos días para recuperarla. Aprendí que siempre debo llevar ropa extra en mi equipaje de mano." }
      ]
    },
    {
      id: "i24",
      order: 24,
      title: "Redes Sociales en la Sociedad Actual",
      subtitle: "Subjuntivo en oraciones de opinión y duda",
      text: "Las redes sociales han transformado nuestra manera de comunicarnos. Hoy es posible estar en contacto con personas de cualquier parte del mundo en segundos. Sin embargo, muchos estudios indican que cuanto más tiempo pasamos conectados, más solos nos sentimos. No creo que el problema esté en las redes en sí, sino en cómo las usamos. Es posible que la búsqueda de aprobación social genere ansiedad y comparaciones constantes. Por eso, es importante aprender a usarlas con equilibrio y conciencia.",
      textPt: "As redes sociais transformaram nossa forma de nos comunicarmos. Hoje é possível estar em contato com pessoas de qualquer parte do mundo em segundos. No entanto, muitos estudos indicam que quanto mais tempo passamos conectados, mais sozinhos nos sentimos. Não acho que o problema esteja nas redes em si, mas sim em como as usamos. É possível que a busca por aprovação social gere ansiedade e comparações constantes. Por isso, é importante aprender a usá-las com equilíbrio e consciência.",
      vocabulary: [
        { category: "Redes sociales y sociedad", items: [
          { es: "Compartir — Comparto fotos y opiniones con mis amigos.", pt: "Compartilhar — Compartilho fotos e opiniões com meus amigos." },
          { es: "Publicar — Publico contenido sobre temas de actualidad.", pt: "Publicar — Publico conteúdo sobre temas atuais." },
          { es: "Influir — Las redes sociales influyen en nuestras decisiones.", pt: "Influenciar — As redes sociais influenciam nossas decisões." },
          { es: "Seguidor — Tengo muchos seguidores en Instagram.", pt: "Seguidor — Tenho muitos seguidores no Instagram." },
          { es: "Privacidad — Es importante proteger la privacidad en internet.", pt: "Privacidade — É importante proteger a privacidade na internet." },
          { es: "Desinformación — Hay mucha desinformación en las redes.", pt: "Desinformação — Há muita desinformação nas redes." },
          { es: "Viral — Un video puede hacerse viral en pocas horas.", pt: "Viral — Um vídeo pode viralizar em poucas horas." },
          { es: "Ciberacoso — El ciberacoso es un problema serio en la red.", pt: "Cyberbullying — O cyberbullying é um problema sério na rede." },
          { es: "Adicción — Muchas personas sufren adicción al móvil.", pt: "Vício — Muitas pessoas sofrem de vício no celular." }
        ] }
      ],
      grammar: [
        { title: "Subjuntivo en oraciones de opinión y duda", headers: ["Estructura", "Ejemplo"], rows: [
          ["No creo que + subjuntivo", "No creo que las redes sean malas por sí mismas."],
          ["Es posible que + subjuntivo", "Es posible que la gente busque aprobación en internet."],
          ["Dudo que + subjuntivo", "Dudo que todos usen las redes con responsabilidad."]
        ] }
      ],
      exercises: [
        { type: "mc", q: "¿Cuál de estas expresiones exige subjuntivo?", options: ["Creo que", "No creo que", "Sé que"], correct: 1 },
        { type: "fill", q: "No creo que las redes sociales ___ (ser) malas por sí mismas.", answer: "sean" },
        { type: "fill", q: "Es posible que la gente ___ (buscar) aprobación en internet.", answer: "busque" },
        { type: "fill", q: "Dudo que todos ___ (usar) las redes con responsabilidad.", answer: "usen" },
        { type: "translate", from: "pt", text: "É importante proteger a privacidade na internet.", answer: "Es importante proteger la privacidad en internet." },
        { type: "translate", from: "es", text: "Un video puede hacerse viral en pocas horas.", answer: "Um vídeo pode viralizar em poucas horas." },
        { type: "open", q: "Escribe un texto breve opinando si las redes sociales son más beneficiosas o perjudiciales. Usa al menos 2 oraciones con subjuntivo.", sample: "En mi opinión, las redes sociales tienen ventajas y desventajas. No creo que sean malas por sí mismas, pero es posible que generen dependencia si no las usamos con equilibrio." }
      ]
    },
    {
      id: "i25",
      order: 25,
      title: "Tecnología y su Impacto en la Sociedad",
      subtitle: "Voz Pasiva con SER + Participio",
      text: "Hoy en día, la tecnología forma parte esencial de nuestra vida. Podemos estudiar, trabajar, comprar, viajar o hablar con cualquier persona usando un solo dispositivo. La inteligencia artificial realiza tareas complejas y muchas empresas ya sustituyen trabajos humanos por máquinas. Sin embargo, existen problemas. La adicción al móvil afecta la salud mental y muchas personas no pueden pasar un día sin redes sociales. Los algoritmos deciden lo que vemos y manipulan nuestra atención. Por eso, debemos aprender a usar la tecnología con equilibrio: no se trata de vivir sin ella, sino de controlarla, y no dejar que nos controle.",
      textPt: "Hoje em dia, a tecnologia faz parte essencial da nossa vida. Podemos estudar, trabalhar, comprar, viajar ou falar com qualquer pessoa usando um só dispositivo. A inteligência artificial realiza tarefas complexas e muitas empresas já substituem trabalhos humanos por máquinas. No entanto, existem problemas. O vício no celular afeta a saúde mental e muitas pessoas não conseguem passar um dia sem redes sociais. Os algoritmos decidem o que vemos e manipulam nossa atenção. Por isso, devemos aprender a usar a tecnologia com equilíbrio: não se trata de viver sem ela, mas de controlá-la, e não deixar que ela nos controle.",
      vocabulary: [
        { category: "Tecnología", items: [
          { es: "Inteligencia artificial — La IA puede tomar decisiones rápidas.", pt: "Inteligência artificial — A IA pode tomar decisões rápidas." },
          { es: "Dispositivos móviles — Usamos dispositivos móviles para casi todo.", pt: "Dispositivos móveis — Usamos dispositivos móveis para quase tudo." },
          { es: "Conectividad global — Hoy tenemos conectividad global.", pt: "Conectividade global — Hoje temos conectividade global." },
          { es: "Privacidad digital — Es importante proteger nuestros datos.", pt: "Privacidade digital — É importante proteger nossos dados." },
          { es: "Automatización — Muchos trabajos ya tienen automatización.", pt: "Automação — Muitos trabalhos já têm automação." },
          { es: "Algoritmos — Los algoritmos deciden qué contenido vemos.", pt: "Algoritmos — Os algoritmos decidem qual conteúdo vemos." },
          { es: "Comunicación digital — Nos permite enviar mensajes instantáneos.", pt: "Comunicação digital — Nos permite enviar mensagens instantâneas." },
          { es: "Sustituir — Las máquinas pueden sustituir algunos trabajos.", pt: "Substituir — As máquinas podem substituir alguns trabalhos." }
        ] }
      ],
      grammar: [
        { title: "Voz Pasiva con SER + Participio", headers: ["Ejemplo", "Concordancia"], rows: [
          ["La tecnología debe ser usada con equilibrio.", "femenino singular"],
          ["Los datos personales son protegidos por la ley.", "masculino plural"],
          ["Las contraseñas deben ser cambiadas periódicamente.", "femenino plural"]
        ] }
      ],
      exercises: [
        { type: "mc", q: "En 'La tecnología debe ser usada con equilibrio', el participio concuerda con:", options: ["El sujeto (femenino singular)", "El verbo deber", "El objeto directo"], correct: 0 },
        { type: "fill", q: "La tecnología debe ___ (ser usada) con equilibrio.", answer: "ser usada" },
        { type: "fill", q: "Los datos personales ___ (ser protegidos) por la ley.", answer: "son protegidos" },
        { type: "translate", from: "pt", text: "Muitos trabalhos já têm automação.", answer: "Muchos trabajos ya tienen automatización." },
        { type: "translate", from: "es", text: "Los algoritmos deciden qué contenido vemos.", answer: "Os algoritmos decidem qual conteúdo vemos." },
        { type: "open", q: "Escribe un texto de 8 a 10 líneas respondiendo: ¿la tecnología ayuda más de lo que perjudica? Incluye ventajas, desventajas y tu opinión personal.", sample: "En mi opinión, la tecnología trae más ventajas que desventajas. Nos ayuda a comunicarnos, trabajar y aprender. Sin embargo, también puede generar dependencia. Por eso, debe ser usada con equilibrio y responsabilidad." }
      ]
    },
    {
      id: "i26",
      order: 26,
      title: "Vida Profesional Moderna y Equilibrio Personal",
      subtitle: "Teletrabajo, burnout y conciliación laboral",
      text: "En la última década, la vida laboral ha cambiado de manera impresionante. Muchas personas trabajan desde casa, los horarios son más flexibles y la tecnología permite que todo sea más rápido. Sin embargo, esto también trae nuevos problemas: sobrecarga, dificultad para desconectar y estrés constante. A pesar de esto, las empresas están buscando mejorar el bienestar de los empleados, ofreciendo espacios de descanso, días libres adicionales y programas de apoyo emocional. Encontrar el equilibrio perfecto sigue siendo un desafío, pero la sociedad avanza hacia un modelo laboral más humano.",
      textPt: "Na última década, a vida profissional mudou de forma impressionante. Muitas pessoas trabalham de casa, os horários são mais flexíveis e a tecnologia permite que tudo seja mais rápido. No entanto, isso também traz novos problemas: sobrecarga, dificuldade para desconectar e estresse constante. Apesar disso, as empresas estão buscando melhorar o bem-estar dos funcionários, oferecendo espaços de descanso, dias de folga adicionais e programas de apoio emocional. Encontrar o equilíbrio perfeito continua sendo um desafio, mas a sociedade avança rumo a um modelo profissional mais humano.",
      vocabulary: [
        { category: "Trabajo y equilibrio personal", items: [
          { es: "Agotamiento laboral (burnout) — Cansancio extremo causado por exceso de trabajo.", pt: "Esgotamento profissional (burnout) — Cansaço extremo causado por excesso de trabalho." },
          { es: "Horario flexible — Permite trabajar en diferentes horas según la necesidad.", pt: "Horário flexível — Permite trabalhar em horários diferentes conforme a necessidade." },
          { es: "Productividad — Cuánto trabajo haces en cierto tiempo.", pt: "Produtividade — Quanto trabalho você faz em determinado tempo." },
          { es: "Teletrabajo/Trabajo remoto — Trabajar desde casa o desde cualquier lugar.", pt: "Teletrabalho/Trabalho remoto — Trabalhar de casa ou de qualquer lugar." },
          { es: "Sobrecarga — Tener demasiadas tareas o responsabilidades.", pt: "Sobrecarga — Ter tarefas ou responsabilidades demais." },
          { es: "Desconectar — Dejar de pensar en el trabajo para descansar.", pt: "Desconectar — Parar de pensar no trabalho para descansar." },
          { es: "Conciliación laboral — Equilibrio entre vida personal y trabajo.", pt: "Conciliação profissional — Equilíbrio entre vida pessoal e trabalho." },
          { es: "Plazo — Fecha límite para entregar algo.", pt: "Prazo — Data limite para entregar algo." }
        ] }
      ],
      grammar: [
        { title: "Estar + Gerundio y Ya/Todavía + Pretérito Perfecto — cambios en curso", headers: ["Estructura", "Ejemplo"], rows: [
          ["Estar + Gerundio", "La sociedad está avanzando hacia un modelo más humano."],
          ["Ya + Pretérito Perfecto Compuesto", "Las empresas ya han mejorado sus políticas de bienestar."],
          ["Todavía + no + Pretérito Perfecto", "Muchos todavía no han encontrado el equilibrio perfecto."]
        ] }
      ],
      exercises: [
        { type: "mc", q: "¿Qué palabra describe trabajar desde casa?", options: ["Teletrabajo", "Sobrecarga", "Plazo"], correct: 0 },
        { type: "fill", q: "Cuando tengo mucho trabajo y no descanso, siento ___ laboral. (agotamiento)", answer: "agotamiento" },
        { type: "fill", q: "Es importante ___ (desconectar) después del trabajo.", answer: "desconectar" },
        { type: "translate", from: "pt", text: "Muitas empresas oferecem apoio emocional aos funcionários.", answer: "Muchas empresas ofrecen apoyo emocional a los empleados." },
        { type: "translate", from: "es", text: "Encontrar el equilibrio perfecto sigue siendo un desafío.", answer: "Encontrar o equilíbrio perfeito continua sendo um desafio." },
        { type: "open", q: "Escribe un texto de 10 líneas explicando cómo sería tu trabajo ideal.", sample: "Mi trabajo ideal tendría horario flexible y la posibilidad de trabajar desde casa algunos días. Me gustaría sentir que mi trabajo tiene un propósito y poder desconectar sin sentir culpa. También valoro mucho tener un buen equipo y un ambiente sano." }
      ]
    },
    {
      id: "i27",
      order: 27,
      title: "Expresiones Cotidianas",
      subtitle: "Modismos informales para sonar más natural",
      text: "Ayer tuve un día bastante curioso. Me desperté tarde, y cuando vi la hora pensé: '¡Qué fuerte! Se me hizo tardísimo.' Llegué al trabajo y todos estaban corriendo de un lado a otro. 'Vaya lío tenemos hoy', dijo mi compañera. Yo estaba hecho polvo, pero traté de organizarme. Por suerte, al final mi jefe dijo: 'Tranquilos, no pasa nada. Ya terminamos por hoy.'",
      textPt: "Ontem tive um dia bem curioso. Acordei tarde, e quando vi a hora pensei: 'Que loucura! Fiquei atrasadíssimo(a).' Cheguei no trabalho e todos estavam correndo de um lado para o outro. 'Que confusão temos hoje', disse minha colega. Eu estava exausto(a), mas tentei me organizar. Por sorte, no final meu chefe disse: 'Calma, não tem problema. Já terminamos por hoje.'",
      vocabulary: [
        { category: "Expresiones cotidianas", items: [
          { es: "¡Qué fuerte! — Se usa para expresar sorpresa.", pt: "Nossa!/Que loucura! — Usado para expressar surpresa." },
          { es: "No pasa nada — Significa 'no hay problema'.", pt: "Não tem problema — Significa 'tudo bem'." },
          { es: "¡Qué va! — Expresa negación informal, 'que nada!'.", pt: "Que nada! — Expressa negação informal." },
          { es: "Estar hecho polvo — Estar muy cansado.", pt: "Estar exausto — Estar muito cansado." },
          { es: "Tener pinta de… — Parecer algo.", pt: "Ter cara de… — Parecer algo." },
          { es: "Ni de broma — 'Nem brincando'.", pt: "Nem brincando — Recusa forte e informal." },
          { es: "¡Anda ya! — Para mostrar incredulidad.", pt: "Não acredito!/Sério? — Para mostrar descrença." },
          { es: "Por si acaso — 'Por via das dúvidas'.", pt: "Por via das dúvidas — Precaução." },
          { es: "De una vez — Para hacer algo inmediatamente.", pt: "De uma vez — Fazer algo imediatamente." },
          { es: "Vaya lío — 'Que confusão!'.", pt: "Que confusão! — Expressa bagunça/confusão." }
        ] }
      ],
      notes: ["Estas expresiones son de registro informal — perfectas para conversaciones con amigos, pero evítalas en contextos muy formales o profesionales."],
      exercises: [
        { type: "mc", q: "¿Qué significa 'estar hecho polvo'?", options: ["Estar muy cansado", "Estar muy feliz", "Estar enojado"], correct: 0 },
        { type: "mc", q: "¿Qué significa 'no pasa nada'?", options: ["No hay problema", "Es muy grave", "No es posible"], correct: 0 },
        { type: "fill", q: "Después del trabajo estaba ___. (muy cansado)", answer: "hecho polvo" },
        { type: "fill", q: "Si llueve, lleva un paraguas ___. (por via das dúvidas)", answer: "por si acaso" },
        { type: "translate", from: "pt", text: "Que confusão temos hoje!", answer: "¡Vaya lío tenemos hoy!" },
        { type: "translate", from: "es", text: "¡Ni de broma me quedo hoy!", answer: "Nem brincando eu fico hoje!" },
        { type: "open", q: "Escribe un texto de 7 a 9 líneas usando al menos 5 de las expresiones aprendidas en esta lección.", sample: "Ayer estaba hecho polvo después del trabajo. Cuando vi el precio de la cena pensé: ¡qué fuerte! Por si acaso, decidí cocinar en casa. Mi amigo me invitó a salir, pero le dije: ¡ni de broma! Al final, no pasó nada y descansé tranquilo." }
      ]
    },
    {
      id: "i28",
      order: 28,
      title: "Conectores Avanzados de Argumentación",
      subtitle: "Opinar, añadir, contrastar y concluir",
      text: "Durante una conversación sobre el trabajo remoto, Ana comentó que muchas empresas están adoptando esta modalidad porque permite más flexibilidad para los empleados. Carlos respondió que, por un lado, el trabajo remoto ofrece comodidad; sin embargo, también puede dificultar la comunicación entre equipos. Finalmente, Marta explicó que, en su opinión, el equilibrio es la mejor solución. Es decir, combinar trabajo remoto con algunos días en la oficina puede ser más productivo para todos.",
      textPt: "Durante uma conversa sobre o trabalho remoto, Ana comentou que muitas empresas estão adotando essa modalidade porque permite mais flexibilidade para os funcionários. Carlos respondeu que, por um lado, o trabalho remoto oferece comodidade; no entanto, também pode dificultar a comunicação entre equipes. Finalmente, Marta explicou que, em sua opinião, o equilíbrio é a melhor solução. Ou seja, combinar trabalho remoto com alguns dias no escritório pode ser mais produtivo para todos.",
      vocabulary: [
        { category: "Conectores de argumentación", items: [
          { es: "En mi opinión / Desde mi punto de vista / Considero que — introducen una opinión personal.", pt: "Na minha opinião / Do meu ponto de vista / Considero que — introduzem uma opinião pessoal." },
          { es: "Además / Asimismo / Incluso — añaden información o refuerzan un argumento.", pt: "Além disso / Da mesma forma / Inclusive — acrescentam informação ou reforçam um argumento." },
          { es: "Sin embargo / No obstante / Por otro lado — contrastan una idea opuesta.", pt: "No entanto / Entretanto / Por outro lado — contrastam uma ideia oposta." },
          { es: "En conclusión / Por lo tanto / En resumen — cierran una idea o presentan una conclusión.", pt: "Em conclusão / Portanto / Em resumo — fecham uma ideia ou apresentam uma conclusão." }
        ] }
      ],
      grammar: [
        { title: "Conectores argumentativos por función", headers: ["Función", "Conectores"], rows: [
          ["Introducir opinión", "En mi opinión, Desde mi punto de vista, Considero que"],
          ["Añadir información", "Además, Asimismo, Incluso"],
          ["Contrastar ideas", "Sin embargo, No obstante, Por otro lado"],
          ["Concluir", "En conclusión, Por lo tanto, En resumen"]
        ] }
      ],
      exercises: [
        { type: "mc", q: "¿Qué conector se usa para CONTRASTAR ideas?", options: ["Además", "Sin embargo", "En resumen"], correct: 1 },
        { type: "fill", q: "___, trabajar desde casa puede mejorar la calidad de vida. (conclusión)", answer: "En conclusión" },
        { type: "fill", q: "El proyecto es interesante; ___, necesita más inversión. (contraste)", answer: "sin embargo" },
        { type: "translate", from: "pt", text: "Na minha opinião, o equilíbrio é a melhor solução.", answer: "En mi opinión, el equilibrio es la mejor solución." },
        { type: "translate", from: "es", text: "Además, mejoró el ambiente laboral.", answer: "Além disso, melhorou o ambiente de trabalho." },
        { type: "open", q: "Escribe un texto (10-12 líneas) expresando tu opinión sobre un tema actual (tecnología, educación, trabajo o redes sociales). Incluye al menos 4 conectores de argumentación.", sample: "En mi opinión, la inteligencia artificial es una gran aliada en el trabajo. Además, ahorra tiempo en tareas repetitivas. Sin embargo, también genera preocupación sobre el empleo. Por otro lado, crea nuevas oportunidades. En conclusión, creo que debemos aprender a usarla con responsabilidad." }
      ]
    },
    {
      id: "i29",
      order: 29,
      title: "Condicionales Irreales",
      subtitle: "Hipótesis irreales en el presente y en el pasado",
      text: "Muchas personas reflexionan sobre las decisiones que han tomado en el pasado. Algunas dicen: 'Si hubiera estudiado otra carrera, mi vida sería diferente'. Estas frases expresan situaciones que no ocurrieron, pero que podrían haber cambiado la realidad. En debates políticos o sociales, también se utilizan hipótesis irreales para analizar escenarios posibles. Por ejemplo, algunos expertos comentan: 'Si los gobiernos invirtieran más en educación, la sociedad sería más equitativa'.",
      textPt: "Muitas pessoas refletem sobre as decisões que tomaram no passado. Algumas dizem: 'Se eu tivesse estudado outra carreira, minha vida seria diferente'. Essas frases expressam situações que não ocorreram, mas que poderiam ter mudado a realidade. Em debates políticos ou sociais, também se usam hipóteses irreais para analisar cenários possíveis. Por exemplo, alguns especialistas comentam: 'Se os governos investissem mais em educação, a sociedade seria mais equitativa'.",
      vocabulary: [
        { category: "Vocabulario de la hipótesis", items: [
          { es: "Hipótesis — Una hipótesis irreal habla de algo que no ocurrió.", pt: "Hipótese — Uma hipótese irreal fala de algo que não ocorreu." },
          { es: "Escenario — Analizamos diferentes escenarios posibles.", pt: "Cenário — Analisamos diferentes cenários possíveis." },
          { es: "Reflexionar — Es bueno reflexionar sobre nuestras decisiones.", pt: "Refletir — É bom refletir sobre nossas decisões." },
          { es: "Invertir — Si invirtiéramos más en educación...", pt: "Investir — Se investíssemos mais em educação..." },
          { es: "Equitativo — Una sociedad más equitativa.", pt: "Equitativo — Uma sociedade mais equitativa." }
        ] }
      ],
      grammar: [
        { title: "Hipótesis irreal en el PRESENTE", headers: ["Estructura", "Ejemplo"], rows: [
          ["SI + Imperfecto de Subjuntivo + Condicional Simple", "Si tuviera más tiempo, viajaría más."],
          ["", "Si ganara la lotería, compraría una casa en la playa."]
        ] },
        { title: "Hipótesis irreal en el PASADO", headers: ["Estructura", "Ejemplo"], rows: [
          ["SI + Pluscuamperfecto de Subjuntivo + Condicional Compuesto", "Si hubiera estudiado más, habría aprobado el examen."],
          ["", "Si hubiéramos invertido antes, habríamos ganado más dinero."]
        ] }
      ],
      exercises: [
        { type: "mc", q: "'Si tuviera más tiempo, viajaría más' habla de una hipótesis irreal en:", options: ["El presente", "El pasado", "El futuro"], correct: 0 },
        { type: "fill", q: "Si ___ (tener - imperfecto de subjuntivo) más tiempo, viajaría más.", answer: "tuviera" },
        { type: "fill", q: "Si ___ (estudiar - pluscuamperfecto de subjuntivo) más, habría aprobado el examen.", answer: "hubiera estudiado", altAnswers: ["hubiese estudiado"] },
        { type: "fill", q: "Si ganara la lotería, ___ (comprar - condicional) una casa en la playa.", answer: "compraría" },
        { type: "translate", from: "pt", text: "Se eu tivesse mais confiança, tomaria decisões diferentes.", answer: "Si tuviera más confianza, tomaría decisiones diferentes." },
        { type: "translate", from: "es", text: "Si hubiéramos invertido antes, habríamos ganado más dinero.", answer: "Se tivéssemos investido antes, teríamos ganhado mais dinheiro." },
        { type: "open", q: "Escribe un texto (12-15 líneas) reflexionando sobre decisiones hipotéticas en la vida o en la sociedad. Incluye dos hipótesis irreales en el presente y dos en el pasado.", sample: "Si tuviera más tiempo libre, aprendería a tocar un instrumento. Si viviera en otro país, hablaría varios idiomas. Si hubiera viajado más de joven, tendría una visión más amplia del mundo. Si los gobiernos hubieran invertido más en salud, muchas vidas se habrían salvado. Reflexionar sobre estas hipótesis nos ayuda a valorar las decisiones que tomamos hoy." }
      ]
    },
    {
      id: "i30",
      order: 30,
      title: "Personalidad, Carácter y Comportamiento",
      subtitle: "Vocabulario avanzado + hipótesis irreales + conectores",
      text: "En una conversación entre compañeros, surgió el tema de la personalidad y de cómo las experiencias pueden cambiar la forma de ser. Andrés comentó que antes era muy inseguro, pero con el tiempo se volvió más confiado porque tuvo que enfrentar muchas situaciones difíciles. Laura respondió que, desde su punto de vista, el carácter no cambia completamente, pero sí puede mejorar con la experiencia. Explicó que, si hubiera tenido más confianza cuando era joven, habría tomado decisiones diferentes.",
      textPt: "Em uma conversa entre colegas, surgiu o tema da personalidade e de como as experiências podem mudar a forma de ser. Andrés comentou que antes era muito inseguro, mas com o tempo ficou mais confiante porque teve que enfrentar muitas situações difíceis. Laura respondeu que, do seu ponto de vista, o caráter não muda completamente, mas pode melhorar com a experiência. Explicou que, se tivesse tido mais confiança quando era jovem, teria tomado decisões diferentes.",
      vocabulary: [
        { category: "Personalidad y comportamiento", items: [
          { es: "Personalidad — Forma de pensar y actuar de una persona.", pt: "Personalidade — Forma de pensar e agir de uma pessoa." },
          { es: "Carácter — Conjunto de cualidades que definen a alguien.", pt: "Caráter — Conjunto de qualidades que definem alguém." },
          { es: "Actitud — Manera de reaccionar ante situaciones.", pt: "Atitude — Maneira de reagir diante de situações." },
          { es: "Confianza — Seguridad en uno mismo.", pt: "Confiança — Segurança em si mesmo." },
          { es: "Inseguridad — Falta de confianza personal.", pt: "Insegurança — Falta de confiança pessoal." },
          { es: "Paciencia — Capacidad de esperar sin perder la calma.", pt: "Paciência — Capacidade de esperar sem perder a calma." },
          { es: "Valentía — Capacidad de enfrentar el miedo.", pt: "Coragem — Capacidade de enfrentar o medo." },
          { es: "Madurez — Capacidad de actuar con responsabilidad.", pt: "Maturidade — Capacidade de agir com responsabilidade." },
          { es: "Impulsividad — Actuar sin pensar.", pt: "Impulsividade — Agir sem pensar." },
          { es: "Hábito — Acción repetida con frecuencia.", pt: "Hábito — Ação repetida com frequência." }
        ] }
      ],
      grammar: [
        { title: "Hipótesis irreal aplicada a la personalidad (repaso de i29)", headers: ["Ejemplo"], rows: [
          ["Si fuera más paciente, tendría menos problemas."],
          ["Si hubiera tenido más confianza, habría tomado decisiones diferentes."]
        ] }
      ],
      exercises: [
        { type: "mc", q: "¿Qué palabra significa 'capacidad de enfrentar el miedo'?", options: ["Valentía", "Inseguridad", "Impulsividad"], correct: 0 },
        { type: "fill", q: "Si ___ (ser - imperfecto de subjuntivo) más paciente, tendría menos problemas.", answer: "fuera" },
        { type: "fill", q: "Si hubiera tenido más confianza, ___ (tomar - condicional compuesto) decisiones diferentes.", answer: "habría tomado" },
        { type: "translate", from: "pt", text: "A experiência pode mudar nossa forma de ser.", answer: "La experiencia puede cambiar nuestra forma de ser." },
        { type: "translate", from: "es", text: "El carácter no cambia completamente, pero sí puede mejorar.", answer: "O caráter não muda completamente, mas pode melhorar." },
        { type: "open", q: "Escribe un texto (12-15 líneas) sobre tu personalidad. Incluye: hipótesis irreales, conectores argumentativos, vocabulario de la lección y una conclusión personal.", sample: "Creo que soy una persona bastante paciente, pero a veces actúo de forma impulsiva. Si fuera menos impulsivo, tomaría mejores decisiones. Además, si hubiera tenido más confianza de joven, habría intentado cosas nuevas. Sin embargo, con el tiempo he ganado madurez. En conclusión, pienso que la personalidad puede mejorar con la experiencia." }
      ]
    },
    {
      id: "i31",
      order: 31,
      title: "Discurso Indirecto Avanzado",
      subtitle: "Cambios de tiempo verbal, pronombres y preguntas indirectas",
      text: "En una reunión, el director dijo: 'La empresa necesita adaptarse a los cambios del mercado'. También afirmó: 'Estamos trabajando en nuevas estrategias'. Más tarde, un empleado explicó que el director había dicho que la empresa necesitaba adaptarse a los cambios del mercado y que estaban trabajando en nuevas estrategias. Añadió que el objetivo era mejorar la competitividad.",
      textPt: "Em uma reunião, o diretor disse: 'A empresa precisa se adaptar às mudanças do mercado'. Também afirmou: 'Estamos trabalhando em novas estratégias'. Mais tarde, um funcionário explicou que o diretor tinha dito que a empresa precisava se adaptar às mudanças do mercado e que estavam trabalhando em novas estratégias. Acrescentou que o objetivo era melhorar a competitividade.",
      vocabulary: [
        { category: "Cambios en discurso indirecto", items: [
          { es: "Yo → él/ella", pt: "Eu → ele/ela" },
          { es: "Mi → su", pt: "Meu → dele/dela" },
          { es: "Aquí → allí", pt: "Aqui → ali/lá" },
          { es: "Hoy → ese día", pt: "Hoje → aquele dia" },
          { es: "Mañana → al día siguiente", pt: "Amanhã → no dia seguinte" }
        ] }
      ],
      grammar: [
        { title: "Cambios de tiempo verbal en discurso indirecto (verbo introductorio en pasado)", headers: ["Estilo directo", "Estilo indirecto"], rows: [
          ["Presente: 'Trabajo mucho'", "Imperfecto: Dijo que trabajaba mucho."],
          ["Pretérito perfecto: 'He terminado'", "Pluscuamperfecto: Dijo que había terminado."],
          ["Futuro: 'Viajaré mañana'", "Condicional: Dijo que viajaría al día siguiente."],
          ["Pregunta: '¿Vienes mañana?'", "Preguntó si venía al día siguiente."],
          ["Orden: 'Estudia más.'", "Me dijo que estudiara más."]
        ] }
      ],
      exercises: [
        { type: "mc", q: "En discurso indirecto (verbo introductorio en pasado), el Futuro cambia a:", options: ["Imperfecto", "Condicional", "Pluscuamperfecto"], correct: 1 },
        { type: "fill", q: "'Trabajo mucho' → Dijo que ___ mucho.", answer: "trabajaba" },
        { type: "fill", q: "'He terminado' → Dijo que ___ terminado.", answer: "había" },
        { type: "fill", q: "'Viajaré mañana' → Dijo que ___ al día siguiente.", answer: "viajaría" },
        { type: "translate", from: "pt", text: "Ele perguntou se eu vinha no dia seguinte.", answer: "Preguntó si yo venía al día siguiente." },
        { type: "translate", from: "es", text: "Me dijo que estudiara más.", answer: "Ele me disse para eu estudar mais." },
        { type: "open", q: "Escribe un texto (12-15 líneas) narrando una conversación formal usando discurso indirecto. Incluye: cambios de tiempo verbal, una pregunta indirecta, una orden transformada y un marcador temporal modificado.", sample: "En la reunión, mi jefe dijo que necesitábamos mejorar los resultados. Me preguntó si podía terminar el informe al día siguiente. También me indicó que revisara los datos con cuidado. Añadió que el objetivo era presentar todo antes del viernes." }
      ]
    },
    {
      id: "i32",
      order: 32,
      title: "Fiestas y Celebraciones",
      subtitle: "Cumpleaños y tradiciones familiares — Pretérito Indefinido (repaso)",
      text: "El mes pasado celebramos el cumpleaños de mi abuela. La fiesta fue en su casa y toda la familia estuvo presente. Decoramos la sala con globos y flores. Preparamos un almuerzo especial con su comida favorita. Cantamos, bailamos y reímos mucho. Mi abuela recibió muchos regalos y sopló las velas de un gran pastel de chocolate. Fue una celebración muy alegre y todos la recordaremos con cariño.",
      textPt: "No mês passado, celebramos o aniversário da minha avó. A festa foi na casa dela e toda a família esteve presente. Decoramos a sala com balões e flores. Preparamos um almoço especial com a comida favorita dela. Cantamos, dançamos e rimos muito. Minha avó recebeu muitos presentes e soprou as velinhas de um grande bolo de chocolate. Foi uma celebração muito alegre e todos vamos lembrar dela com carinho.",
      vocabulary: [
        { category: "Fiestas y celebraciones", items: [
          { es: "Celebrar", pt: "Celebrar/Comemorar" },
          { es: "Invitar", pt: "Convidar" },
          { es: "Reunirse", pt: "Reunir-se" },
          { es: "Bailar", pt: "Dançar" },
          { es: "Brindar", pt: "Brindar" },
          { es: "Decorar", pt: "Decorar" },
          { es: "Regalo", pt: "Presente" },
          { es: "Pastel", pt: "Bolo" },
          { es: "Tradición", pt: "Tradição" },
          { es: "Soplar las velas", pt: "Soprar as velinhas" }
        ] }
      ],
      grammar: [
        { title: "Pretérito Indefinido — narrar una celebración (repaso)", headers: ["Pronombre", "Decorar", "Soplar"], rows: [
          ["Nosotros/Nosotras", "decoramos", "soplamos"],
          ["Ella/Él/Usted", "decoró", "sopló"]
        ] }
      ],
      exercises: [
        { type: "mc", q: "¿Qué se hace con las velas de un pastel de cumpleaños?", options: ["Se sopla", "Se decora", "Se brinda"], correct: 0 },
        { type: "fill", q: "___ (decorar - indefinido, nosotros) la sala con globos.", answer: "Decoramos" },
        { type: "fill", q: "Mi abuela ___ (soplar - indefinido) las velas del pastel.", answer: "sopló" },
        { type: "translate", from: "pt", text: "Toda a família esteve presente na festa.", answer: "Toda la familia estuvo presente en la fiesta." },
        { type: "translate", from: "es", text: "Cantamos, bailamos y reímos mucho.", answer: "Cantamos, dançamos e rimos muito." },
        { type: "open", q: "Escribe un texto titulado 'La mejor celebración de mi vida'. Incluye: quiénes participaron, qué hicieron y qué te gustó más.", sample: "La mejor celebración de mi vida fue mi graduación. Toda mi familia estuvo presente. Preparamos una cena especial, brindamos y bailamos hasta tarde. Lo que más me gustó fue ver el orgullo de mis padres." }
      ]
    },
    {
      id: "i33",
      order: 33,
      title: "El Futuro de las Redes Sociales",
      subtitle: "Futuro Simple x Futuro Perfecto",
      text: "En el año 2040, las redes sociales habrán cambiado radicalmente. La mayoría de las personas no usará teléfonos ni computadoras tradicionales; interactuarán mediante lentes inteligentes, realidad aumentada y hologramas. Cada usuario tendrá un avatar que refleje su estado emocional, y la inteligencia artificial sugerirá contenido adaptado a cada persona. La privacidad será una prioridad, y los datos personales estarán más protegidos que nunca.",
      textPt: "No ano de 2040, as redes sociais terão mudado radicalmente. A maioria das pessoas não usará telefones nem computadores tradicionais; vão interagir por meio de lentes inteligentes, realidade aumentada e hologramas. Cada usuário terá um avatar que reflita seu estado emocional, e a inteligência artificial vai sugerir conteúdo adaptado a cada pessoa. A privacidade será uma prioridade, e os dados pessoais estarão mais protegidos do que nunca.",
      vocabulary: [
        { category: "Redes sociales y futuro", items: [
          { es: "Algoritmo — Los algoritmos decidirán qué contenido veremos.", pt: "Algoritmo — Os algoritmos vão decidir qual conteúdo veremos." },
          { es: "Interfaz — La interfaz será más intuitiva.", pt: "Interface — A interface será mais intuitiva." },
          { es: "Holograma — Podremos enviar mensajes mediante hologramas.", pt: "Holograma — Poderemos enviar mensagens por meio de hologramas." },
          { es: "Avatar — Cada usuario tendrá un avatar virtual.", pt: "Avatar — Cada usuário terá um avatar virtual." },
          { es: "Privacidad — La privacidad será más protegida.", pt: "Privacidade — A privacidade será mais protegida." },
          { es: "Innovar — Las empresas deben innovar para atraer usuarios.", pt: "Inovar — As empresas devem inovar para atrair usuários." },
          { es: "Conectividad — La conectividad será global y sin barreras.", pt: "Conectividade — A conectividade será global e sem barreiras." },
          { es: "Plataforma — Nuevas plataformas ofrecerán experiencias inmersivas.", pt: "Plataforma — Novas plataformas oferecerão experiências imersivas." }
        ] }
      ],
      grammar: [
        { title: "Futuro Simple x Futuro Perfecto (HABRÁ + Participio)", headers: ["Estructura", "Ejemplo"], rows: [
          ["Futuro Simple: predicción", "Cada usuario tendrá un avatar."],
          ["Futuro Perfecto: acción terminada en un punto futuro", "En 2040, las redes habrán cambiado radicalmente."],
          ["", "Para entonces, habremos aprendido a usarlas mejor."]
        ] }
      ],
      exercises: [
        { type: "mc", q: "¿Cuál expresa una acción que estará terminada en el futuro?", options: ["Futuro Simple", "Futuro Perfecto", "Presente"], correct: 1 },
        { type: "fill", q: "En 2040, las redes sociales ___ (cambiar - futuro perfecto) radicalmente.", answer: "habrán cambiado" },
        { type: "fill", q: "Cada usuario ___ (tener - futuro simple) un avatar.", answer: "tendrá" },
        { type: "translate", from: "pt", text: "A inteligência artificial vai sugerir conteúdo adaptado a cada pessoa.", answer: "La inteligencia artificial sugerirá contenido adaptado a cada persona." },
        { type: "translate", from: "es", text: "La privacidad será una prioridad en el futuro.", answer: "A privacidade será uma prioridade no futuro." },
        { type: "open", q: "Escribe un texto (8-10 líneas) imaginando un día usando redes sociales en 2040.", sample: "En 2040, me despertaré y mis lentes inteligentes me mostrarán las noticias del día. Hablaré con mis amigos mediante hologramas. La inteligencia artificial habrá organizado mi agenda. Todo será más rápido, pero espero que también sigamos siendo humanos de verdad." }
      ]
    },
    {
      id: "i34",
      order: 34,
      title: "El Impacto del Turismo en la Sociedad",
      subtitle: "Pretérito Perfecto Compuesto (repaso final del nivel)",
      text: "En los últimos años, el turismo ha cambiado la vida de muchas ciudades. Miles de personas han viajado a destinos populares como Barcelona, Ciudad de México o Cusco, y esto ha generado millones de ingresos económicos. Sin embargo, el turismo masivo también ha traído problemas: las calles se han llenado de gente, los precios han subido y en algunos lugares se ha perdido parte de la cultura tradicional. A pesar de todo, muchos países han tomado medidas para preservar su patrimonio cultural y proteger el medio ambiente. El turismo seguirá siendo muy importante, pero necesitamos hacerlo más sostenible.",
      textPt: "Nos últimos anos, o turismo mudou a vida de muitas cidades. Milhares de pessoas viajaram para destinos populares como Barcelona, Cidade do México ou Cusco, e isso gerou milhões em receita econômica. No entanto, o turismo em massa também trouxe problemas: as ruas ficaram cheias de gente, os preços subiram e em alguns lugares se perdeu parte da cultura tradicional. Apesar de tudo, muitos países tomaram medidas para preservar seu patrimônio cultural e proteger o meio ambiente. O turismo continuará sendo muito importante, mas precisamos torná-lo mais sustentável.",
      vocabulary: [
        { category: "Turismo y sociedad", items: [
          { es: "Viajar — He viajado a varios países europeos.", pt: "Viajar — Já viajei para vários países europeus." },
          { es: "Descubrir — Descubrí nuevas culturas durante mis vacaciones.", pt: "Descobrir — Descobri novas culturas durante minhas férias." },
          { es: "Hospedarse — Nos hospedamos en un hotel muy cómodo.", pt: "Hospedar-se — Nos hospedamos em um hotel muito confortável." },
          { es: "Gastar — Los turistas gastan mucho dinero en la economía local.", pt: "Gastar — Os turistas gastam muito dinheiro na economia local." },
          { es: "Contaminar — El turismo masivo contamina las playas.", pt: "Contaminar — O turismo em massa contamina as praias." },
          { es: "Preservar — Hemos preservado el patrimonio cultural de la ciudad.", pt: "Preservar — Preservamos o patrimônio cultural da cidade." },
          { es: "Masificación — La masificación afecta a muchas ciudades históricas.", pt: "Massificação — A massificação afeta muitas cidades históricas." },
          { es: "Patrimonio cultural — Toledo tiene un gran patrimonio cultural.", pt: "Patrimônio cultural — Toledo tem um grande patrimônio cultural." }
        ] }
      ],
      grammar: [
        { title: "Pretérito Perfecto Compuesto — hechos con relación al presente (repaso)", headers: ["Ejemplo"], rows: [
          ["El turismo ha cambiado la vida de muchas ciudades."],
          ["Miles de personas han viajado a destinos populares."],
          ["Muchos países han tomado medidas para preservar su patrimonio."]
        ] }
      ],
      exercises: [
        { type: "mc", q: "¿Qué palabra describe el exceso de turistas en un lugar?", options: ["Masificación", "Preservación", "Gastronomía"], correct: 0 },
        { type: "fill", q: "El turismo ___ (cambiar - pretérito perfecto compuesto) la vida de muchas ciudades.", answer: "ha cambiado" },
        { type: "fill", q: "Miles de personas ___ (viajar - pretérito perfecto compuesto) a destinos populares.", answer: "han viajado" },
        { type: "translate", from: "pt", text: "Muitos países tomaram medidas para proteger o meio ambiente.", answer: "Muchos países han tomado medidas para proteger el medio ambiente." },
        { type: "translate", from: "es", text: "El turismo seguirá siendo muy importante.", answer: "O turismo continuará sendo muito importante." },
        { type: "open", q: "Escribe una carta breve a un amigo contando tu última experiencia turística. Usa al menos 3 verbos en pretérito perfecto compuesto.", sample: "Querido amigo: Te escribo para contarte que he viajado a Cusco este año. He conocido lugares increíbles y he probado comidas típicas maravillosas. Ha sido una experiencia inolvidable. ¡Espero que puedas visitarlo pronto!" }
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
