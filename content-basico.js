/* ==========================================================================
   EspañolYa! — Conteúdo: Nível 1 · BÁSICO
   Fonte: Método Espanhol de Verdade (MEV), Módulo 3 — Español Básico
   15 aulas + Prova Final. Conteúdo real extraído fielmente dos PDFs originais.
   Schema: ver cabeçalho de content-fundamentos.js
   ========================================================================== */

const LEVEL_BASICO = {
  id: "basico",
  name: "Básico",
  icon: "🌱",
  colorFrom: "#2e7d32",
  colorTo: "#AA151B",
  description: "15 aulas para sair do zero: saudações, família, rotina, casa, comida, corpo, direções, clima e muito mais — a base sólida do espanhol.",
  lessons: [
    {
      id: "b1", order: 1, title: "Saludos, presentaciones y despedidas", subtitle: "Verbo SER · pontuação invertida",
      dialogue: [
        {who:"A", es:"¡Buenos días! ¿Cómo se llama usted?", pt:"Bom dia! Como você se chama?"},
        {who:"B", es:"¡Hola! ¿Cómo le va? Mi nombre es Juárez, ¿y usted?, ¿cómo se llama?", pt:"Olá! Como vai? Meu nome é Juárez, e você, como se chama?"},
        {who:"A", es:"Me llamo María, ¡mucho gusto!", pt:"Me chamo María, muito prazer!"},
        {who:"B", es:"¡Es un placer conocerla y bienvenida a la empresa! ¿De dónde es, María?", pt:"É um prazer conhecê-la e seja bem-vinda à empresa! De onde você é, María?"},
        {who:"A", es:"¡Gracias! Soy de Brasil pero ahora estoy viviendo aquí, ¿y usted?", pt:"Obrigada! Sou do Brasil, mas agora estou morando aqui, e você?"},
        {who:"B", es:"Casi todos en la empresa, incluso yo, somos de Venezuela. Hemos trabajado aquí desde hace 2 años, cuando la empresa fue fundada.", pt:"Quase todos na empresa, inclusive eu, somos da Venezuela. Trabalhamos aqui há 2 anos, desde quando a empresa foi fundada."},
        {who:"A", es:"¡Qué bien! ¿Usted me podría decir dónde está la oficina del responsable por el departamento de Recursos Humanos, por favor?", pt:"Que bom! Você poderia me dizer onde fica o escritório do responsável pelo departamento de Recursos Humanos, por favor?"},
        {who:"B", es:"¡Sí, por supuesto! Pero, ahora ya somos amigos y nos vamos a ver todos los días, entonces esta formalidad no es necesaria.", pt:"Sim, claro! Mas agora já somos amigos e vamos nos ver todos os dias, então essa formalidade não é necessária."},
        {who:"A", es:"¡Está bien! ¡Gracias una vez más, Juárez!", pt:"Está bem! Obrigada mais uma vez, Juárez!"},
        {who:"B", es:"Sin duda, vas a hacer muchos amigos. ¡Que tengas un buen día! ¡Nos vemos!", pt:"Sem dúvida, você vai fazer muitos amigos. Tenha um bom dia! Nos vemos!"},
        {who:"A", es:"¡Hasta luego!", pt:"Até logo!"}
      ],
      vocabulary: [
        {category:"Saludos", items:[
          {es:"¡Hola!", pt:"Olá!"},{es:"¿Qué tal?", pt:"E aí? / Tudo bem?"},{es:"¿Cómo le va?/¿Cómo te va?", pt:"Como vai? (formal/informal)"},
          {es:"¿Cómo está?/¿Cómo estás?", pt:"Como você está? (formal/informal)"},{es:"¡Buenos días!/¡Buen día!", pt:"Bom dia!"},{es:"¡Buenas tardes!", pt:"Boa tarde!"},{es:"¡Buenas noches!", pt:"Boa noite!"}
        ]},
        {category:"Presentaciones", items:[
          {es:"¿Cómo (tú) te llamas?", pt:"Como você se chama? (informal)"},{es:"¿Cómo (usted) se llama?", pt:"Como o(a) senhor(a) se chama? (formal)"},
          {es:"¿Cuál es tu nombre?", pt:"Qual é o seu nome? (informal)"},{es:"¿Cuál es su nombre?", pt:"Qual é o seu nome? (formal)"},
          {es:"Soy...", pt:"Eu sou..."},{es:"Me llamo...", pt:"Eu me chamo..."},{es:"Mi nombre es...", pt:"Meu nome é..."},
          {es:"¡Mucho gusto!", pt:"Muito prazer!"},{es:"¡Un placer!", pt:"Um prazer!"},{es:"¡Encantado(a)!", pt:"Encantado(a)!"},
          {es:"Te presento a...", pt:"Apresento a você... (informal)"},{es:"Le presento a...", pt:"Apresento ao(à) senhor(a)... (formal)"}
        ]},
        {category:"Despedidas", items:[
          {es:"¡Hasta luego!", pt:"Até logo!"},{es:"¡Hasta pronto!", pt:"Até breve!"},{es:"¡Hasta mañana!", pt:"Até amanhã!"},
          {es:"¡Nos vemos…!", pt:"A gente se vê!"},{es:"¡Chau(o)!", pt:"Tchau!"},{es:"¡Adiós!", pt:"Adeus!"},{es:"¡Que tenga(s) un buen día!", pt:"Que você tenha um bom dia!"}
        ]},
        {category:"Palabras mágicas", items:[
          {es:"¡Por favor!", pt:"Por favor!"},{es:"¡(Muchas) gracias!", pt:"(Muito) obrigado(a)!"},{es:"¡De nada!", pt:"De nada!"},
          {es:"¡Permiso!", pt:"Com licença!"},{es:"¡Perdón!", pt:"Perdão! / Desculpe!"},{es:"¡Discúlpame! (informal)", pt:"Me desculpe! (informal)"},{es:"¡Discúlpeme! (formal)", pt:"Desculpe-me! (formal)"}
        ]},
        {category:"Pronombres personales", items:[
          {es:"Yo", pt:"Eu"},{es:"Tú", pt:"Você (informal)"},{es:"Él", pt:"Ele"},{es:"Ella", pt:"Ela"},{es:"Usted", pt:"Você (formal)"},
          {es:"Nosotros/Nosotras", pt:"Nós"},{es:"Vosotros/Vosotras", pt:"Vós / vocês (informal, Espanha)"},{es:"Ellos/Ellas", pt:"Eles/Elas"},{es:"Ustedes", pt:"Vocês"}
        ]}
      ],
      grammar: [
        {title:"Presente de indicativo — verbo SER", headers:["Pronombre","Conjugación"], rows:[["Yo","Soy"],["Tú/Vos","Eres/Sos"],["Él/Ella/Usted","Es"],["Nosotros/Nosotras","Somos"],["Vosotros/Vosotras","Sois"],["Ellos/Ellas/Ustedes","Son"]]}
      ],
      notes: ["Sinais de interrogação e exclamação abrem a frase invertidos: ¡Hola!, ¿qué tal estás? ¡Te quiero mucho!"],
      exercises: [
        {type:"fill", q:"Yo doy gracias a Dios por ser como _______.", answer:"soy"},
        {type:"fill", q:"Mi madre _______ una persona muy inteligente.", answer:"es"},
        {type:"fill", q:"¡Julia! ¿_______ la próxima a jugar?", answer:"Eres", altAnswers:["eres"]},
        {type:"fill", q:"Aquellos chicos ________ mis amigos.", answer:"son"},
        {type:"fill", q:"Vosotros _____ siempre los últimos.", answer:"sois"},
        {type:"mc", q:"______ Me llamo Marcio.", options:["¡Hola!","¡Chao!","¡Hasta!"], correct:0},
        {type:"mc", q:"_________, ¿me puedes traer un vaso de agua?", options:["¡Chao!","¡De nada!","¡Por favor!"], correct:2},
        {type:"mc", q:"Estas chicas ________ muy guapas.", options:["es","sois","son"], correct:2},
        {type:"mc", q:"______ eres una persona maravillosa!", options:["Usted","Él","Tú"], correct:2},
        {type:"listen", audioText:"¡Buenos días! ¿Cómo se llama usted?", q:"Ouça e repita a saudação formal.", answer:"¡Buenos días! ¿Cómo se llama usted?"},
        {type:"speak", prompt:"Apresente-se em espanhol dizendo seu nome com 'Me llamo...'", target:"Me llamo"}
      ]
    },
    {
      id: "b2", order: 2, title: "Biografía", subtitle: "Países, nacionalidades, verbos regulares -AR/-ER/-IR",
      text: "Mi nombre es María, soy brasileña, de Rio de Janeiro, o sea, tengo el portugués como lengua materna. Hablo también español e inglés. Tengo 25 años pero ya cumplo 26 mañana. Tengo un novio, Roberto, y vivo con él. No tenemos hijos pero quizás después de casarnos pensemos en esta posibilidad. Nos graduamos de la universidad en Publicidad en 2009 y trabajamos actualmente juntos en una agencia de publicidad. Lo que más me gusta hacer es salir para comer en restaurantes con mis amigos y con mi novio. También me encanta escuchar reggaetón y ver películas de terror.",
      textPt: "Meu nome é María, sou brasileira, do Rio de Janeiro, ou seja, tenho o português como língua materna. Falo também espanhol e inglês. Tenho 25 anos mas já faço 26 amanhã. Tenho um namorado, Roberto, e moro com ele. Não temos filhos, mas talvez depois de nos casarmos pensemos nessa possibilidade. Nos formamos na universidade em Publicidade em 2009 e trabalhamos atualmente juntos em uma agência de publicidade. O que mais gosto de fazer é sair para comer em restaurantes com meus amigos e com meu namorado. Também adoro escutar reggaetón e ver filmes de terror.",
      vocabulary: [
        {category:"Países, nacionalidades e idiomas", items:[
          {es:"Brasil – Brasileño(a) – Portugués", pt:"Brasil – brasileiro(a) – Português"},{es:"Argentina – Argentino(a) – Español", pt:"Argentina – argentino(a) – Espanhol"},
          {es:"Uruguay – Uruguayo(a) – Español", pt:"Uruguai – uruguaio(a) – Espanhol"},{es:"Paraguay – Paraguayo(a) – Español/Guaraní", pt:"Paraguai – paraguaio(a) – Espanhol/Guarani"},
          {es:"Bolivia – Boliviano(a) – Español", pt:"Bolívia – boliviano(a) – Espanhol"},{es:"Estados Unidos – Americano(a) – Inglés", pt:"Estados Unidos – americano(a) – Inglês"},
          {es:"Francia – Francés/Francesa – Francés", pt:"França – francês/francesa – Francês"},{es:"México – Mexicano(a) – Español", pt:"México – mexicano(a) – Espanhol"},
          {es:"Italia – Italiano(a) – Italiano", pt:"Itália – italiano(a) – Italiano"},{es:"Inglaterra – Inglés/Inglesa – Inglés", pt:"Inglaterra – inglês/inglesa – Inglês"},
          {es:"Alemania – Alemán/Alemana – Alemán", pt:"Alemanha – alemão/alemã – Alemão"},{es:"Chile – Chileno(a) – Español", pt:"Chile – chileno(a) – Espanhol"},
          {es:"Canadá – Canadiense – Inglés/Francés", pt:"Canadá – canadense – Inglês/Francês"},{es:"Japón – Japonés/Japonesa – Japonés", pt:"Japão – japonês/japonesa – Japonês"},
          {es:"Suiza – Suizo(a) – Alemán/Francés/Italiano", pt:"Suíça – suíço(a) – Alemão/Francês/Italiano"},{es:"Rusia – Ruso(a) – Ruso", pt:"Rússia – russo(a) – Russo"},
          {es:"Ecuador – Ecuatoriano(a) – Español", pt:"Equador – equatoriano(a) – Espanhol"},{es:"Cuba – Cubano(a) – Español", pt:"Cuba – cubano(a) – Espanhol"},
          {es:"Colombia – Colombiano(a) – Español", pt:"Colômbia – colombiano(a) – Espanhol"},{es:"Australia – Australiano(a) – Inglés", pt:"Austrália – australiano(a) – Inglês"},
          {es:"China – Chino(a) – Chino", pt:"China – chinês/chinesa – Chinês"},{es:"España – Español(a) – Español", pt:"Espanha – espanhol(a) – Espanhol"},
          {es:"India – Indio(a) – Hindi", pt:"Índia – indiano(a) – Hindi"},{es:"Grecia – Griego(a) – Griego", pt:"Grécia – grego(a) – Grego"},
          {es:"Polonia – Polaco(a) – Polaco", pt:"Polônia – polonês/polonesa – Polonês"},{es:"Portugal – Portugués/Portuguesa – Portugués", pt:"Portugal – português/portuguesa – Português"},
          {es:"Perú – Peruano(a) – Español", pt:"Peru – peruano(a) – Espanhol"},{es:"Venezuela – Venezolano(a) – Español", pt:"Venezuela – venezuelano(a) – Espanhol"},
          {es:"Egipto – Egipcio(a) – Árabe", pt:"Egito – egípcio(a) – Árabe"},{es:"Israel – Israelí – Hebreo", pt:"Israel – israelense – Hebraico"},
          {es:"Panamá – Panameño(a) – Español", pt:"Panamá – panamenho(a) – Espanhol"},{es:"República Dominicana – Dominicano(a) – Español", pt:"República Dominicana – dominicano(a) – Espanhol"},
          {es:"Puerto Rico – Puertorriqueño(a) – Español/Inglés", pt:"Porto Rico – porto-riquenho(a) – Espanhol/Inglês"}
        ]},
        {category:"Frases útiles", items:[
          {es:"Yo soy Argentino. Vengo de Buenos Aires, Argentina.", pt:"Eu sou argentino. Venho de Buenos Aires, Argentina."},
          {es:"¿De dónde eres?", pt:"De onde você é? (informal)"},{es:"¿De dónde es?", pt:"De onde você é? (formal)"},
          {es:"¿Qué idioma hablas?", pt:"Que idioma você fala?"},{es:"¿Hablas (español)?", pt:"Você fala (espanhol)?"},
          {es:"¡Hablas muy bien portugués!", pt:"Você fala muito bem português!"},{es:"¡Me gusta tu acento!", pt:"Eu gosto do seu sotaque!"}
        ]},
        {category:"Estado Civil", items:[
          {es:"Soltero(a)", pt:"Solteiro(a)"},{es:"Casado(a)", pt:"Casado(a)"},{es:"Viudo(a)", pt:"Viúvo(a)"},{es:"Separado(a)", pt:"Separado(a)"},
          {es:"Divorciado(a)", pt:"Divorciado(a)"},{es:"Prometido(a)/Comprometido(a)", pt:"Noivo(a) / comprometido(a)"},{es:"Novio(a)", pt:"Namorado(a)"}
        ]},
        {category:"Edad", items:[
          {es:"¿Cuántos años tienes?", pt:"Quantos anos você tem?"},{es:"¿Cuál es tu(su) edad?", pt:"Qual é a sua idade?"},
          {es:"Tengo (17) años.", pt:"Tenho (17) anos."},{es:"Cumplo ______ mañana.", pt:"Faço ___ anos amanhã."},
          {es:"¿Cuándo es tu(su) cumpleaños?", pt:"Quando é o seu aniversário?"},{es:"Mi cumpleaños es el (29 de octubre).", pt:"Meu aniversário é (29 de outubro)."}
        ]},
        {category:"Oficios (profissões)", items:[
          {es:"Administrador", pt:"Administrador(a)"},{es:"Doctor/Médico", pt:"Doutor(a) / Médico(a)"},{es:"Abogado", pt:"Advogado(a)"},{es:"Electricista", pt:"Eletricista"},
          {es:"Analista Contable", pt:"Analista Contábil"},{es:"Enfermero", pt:"Enfermeiro(a)"},{es:"Ingeniero", pt:"Engenheiro(a)"},{es:"Arquitecto", pt:"Arquiteto(a)"},
          {es:"Escritor", pt:"Escritor(a)"},{es:"Artista", pt:"Artista"},{es:"Fisioterapeuta", pt:"Fisioterapeuta"},{es:"Gerente Comercial", pt:"Gerente Comercial"},
          {es:"Contador", pt:"Contador(a)"},{es:"Auditor Interno", pt:"Auditor(a) Interno(a)"},{es:"Mecánico", pt:"Mecânico(a)"},{es:"Bombero", pt:"Bombeiro(a)"},
          {es:"Conductor", pt:"Motorista"},{es:"Peluquero", pt:"Cabeleireiro(a)"},{es:"Vendedor", pt:"Vendedor(a)"},{es:"Camarero/Mesero/Mozo", pt:"Garçom/Garçonete"},
          {es:"Psicólogo", pt:"Psicólogo(a)"},{es:"Cocinero", pt:"Cozinheiro(a)"},{es:"Recepcionista", pt:"Recepcionista"},{es:"Dentista", pt:"Dentista"},
          {es:"Diseñador", pt:"Designer"},{es:"Secretario(a) bilingüe", pt:"Secretário(a) bilíngue"},{es:"Guardia de Seguridad", pt:"Guarda de Segurança"},{es:"Traductor", pt:"Tradutor(a)"},
          {es:"Profesor/maestro", pt:"Professor(a)"},{es:"Pintor", pt:"Pintor(a)"},{es:"Cajero", pt:"Caixa (de loja/banco)"},{es:"Panadero", pt:"Padeiro(a)"},
          {es:"Carpintero", pt:"Carpinteiro(a)"},{es:"Piloto", pt:"Piloto"},{es:"Policía", pt:"Policial"},{es:"Cirujano", pt:"Cirurgião(ã)"},{es:"Programador", pt:"Programador(a)"}
        ]},
        {category:"Trabajo — frases", items:[
          {es:"Soy profesor(a).", pt:"Sou professor(a)."},{es:"Trabajo con (análisis de costos).", pt:"Trabalho com (análise de custos)."},
          {es:"Tengo experiencia en/con….", pt:"Tenho experiência em/com…."},{es:"¿A qué te dedicas?", pt:"O que você faz (da vida)? (informal)"},{es:"¿A qué se dedica?", pt:"O que o(a) senhor(a) faz (da vida)? (formal)"}
        ]}
      ],
      grammar: [
        {title:"Presente de indicativo — verbos regulares", headers:["Pronombre","Hablar (AR)","Comer (ER)","Vivir (IR)"], rows:[
          ["Yo","Hablo","Como","Vivo"],["Tú/Vos","Hablas/Hablás","Comes/Comés","Vives/Vivís"],["Él/Ella/Usted","Habla","Come","Vive"],["Nosotros/Nosotras","Hablamos","Comemos","Vivimos"],["Vosotros/Vosotras","Habláis","Coméis","Vivís"],["Ellos/Ellas/Ustedes","Hablan","Comen","Viven"]
        ]},
        {title:"Pronombres personales tónicos / con preposición CON", headers:["Sujeto","Tónico","Con CON"], rows:[
          ["Yo","Mí","Conmigo"],["Tú","Ti","Contigo"],["Él","Él","Con él"],["Nosotros(as)","Nosotros(as)","Con nosotros(as)"]
        ]}
      ],
      notes: [],
      exercises: [
        {type:"fill", q:"Mi hermano _______ conmigo. (vivir)", answer:"vive"},
        {type:"fill", q:"Yo no _______ mucho por la noche. (comer)", answer:"como"},
        {type:"fill", q:"¿________ Japonés? (tú - hablar)", answer:"Hablas", altAnswers:["hablas"]},
        {type:"fill", q:"José estudia chino e inglés, ¿y tú?, ¿Qué idiomas ________? (estudiar)", answer:"estudias"},
        {type:"mc", q:"¿Quieres ir al cine _________?", options:["mío","conmigo","tuyo"], correct:1},
        {type:"mc", q:"¡Hola! Me llamo Pedro, tengo 19 ______ y soy de __________.", options:["días - Francia","meses - Cuba","años - Rusia"], correct:2},
        {type:"mc", q:"________ inglés y francés en una escuela cerca de mi casa.", options:["Hablo","Estudio","Vivo"], correct:1},
        {type:"mc", q:"¿De dónde ______ María?", options:["está","es","son"], correct:1},
        {type:"mc", q:"________ 24 años mañana.", options:["Cumplo","Tengo","Soy"], correct:0},
        {type:"translate", from:"pt", text:"De onde você é? Eu sou do Brasil.", answer:"¿De dónde eres? Soy de Brasil."},
        {type:"speak", prompt:"Diga sua nacionalidade em espanhol usando 'Soy...'", target:"Soy"}
      ]
    },
    {
      id: "b3", order: 3, title: "Familia", subtitle: "Posesivos, artículos, verbo GUSTAR",
      text: "¡Hola! Me llamo Sofía y hoy quiero hablar un poco de mi familia. Nuestra familia tiene 7 miembros: mi padre Juan, mi madre María, mi hermana Julia, mi hermano Luís y nuestras dos mascotas: nuestra tortuga Brigitte y nuestro perro Toby. Nacimos todos en Montevideo, Uruguay. Mi padre tiene 45 años y es médico, mi madre tiene 38 y es profesora de español, Julia tiene 10 años, Luís 7 u 8 y yo tengo 15. Nos gusta hacer muchas cosas juntos los fines de semana, como cocinar, jugar, ver películas e ir al zoológico.",
      textPt: "Olá! Me chamo Sofía e hoje quero falar um pouco da minha família. Nossa família tem 7 membros: meu pai Juan, minha mãe María, minha irmã Julia, meu irmão Luís e nossos dois bichos de estimação: nossa tartaruga Brigitte e nosso cachorro Toby. Todos nós nascemos em Montevidéu, Uruguai. Meu pai tem 45 anos e é médico, minha mãe tem 38 e é professora de espanhol, Julia tem 10 anos, Luís 7 ou 8 e eu tenho 15. Gostamos de fazer muitas coisas juntos nos fins de semana, como cozinhar, brincar, ver filmes e ir ao zoológico.",
      vocabulary: [
        {category:"Miembros de la familia", items:[
          {es:"Ahijado(a)", pt:"Afilhado(a)"},{es:"Abuelo(a)", pt:"Avô/Avó"},{es:"Bisabuelo(a)", pt:"Bisavô/Bisavó"},{es:"Bisnieto(a)", pt:"Bisneto(a)"},
          {es:"Hermano(a) gemelo(a)/mellizo(a)", pt:"Irmão/irmã gêmeo(a)"},{es:"Cuñado(a)", pt:"Cunhado(a)"},{es:"Hijastro(a)", pt:"Enteado(a)"},
          {es:"Esposo(a)/Pareja", pt:"Esposo(a) / Parceiro(a)"},{es:"Ex-esposo(a)", pt:"Ex-esposo(a)"},{es:"Hijo(a)", pt:"Filho(a)"},
          {es:"Hijo(a) adoptivo(a)", pt:"Filho(a) adotivo(a)"},{es:"Yerno/Nuera", pt:"Genro/Nora"},{es:"Hermano(a)", pt:"Irmão/Irmã"},
          {es:"Nieto(a)", pt:"Neto(a)"},{es:"Primo(a)", pt:"Primo(a)"},{es:"Madrastra/Padrastro", pt:"Madrasta/Padrasto"},
          {es:"Madre/Padre", pt:"Mãe/Pai"},{es:"Mamá/Papá", pt:"Mamãe/Papai"},{es:"Madrina/Padrino", pt:"Madrinha/Padrinho"},
          {es:"Marido/Mujer", pt:"Marido/Esposa"},{es:"Medio(a) Hermano(a)", pt:"Meio-irmão/Meia-irmã"},{es:"Sobrino(a)", pt:"Sobrinho(a)"},
          {es:"Suegro(a)", pt:"Sogro(a)"},{es:"Tío(a)", pt:"Tio(a)"}
        ]},
        {category:"Animales (salvajes y mascotas)", items:[
          {es:"Abeja", pt:"Abelha"},{es:"Gato", pt:"Gato"},{es:"Águila", pt:"Águia"},{es:"Jirafa", pt:"Girafa"},{es:"Araña", pt:"Aranha"},
          {es:"Delfín", pt:"Golfinho"},{es:"Avestruz", pt:"Avestruz"},{es:"Ballena", pt:"Baleia"},{es:"Cucaracha", pt:"Barata"},
          {es:"Caimán/Yacaré", pt:"Jacaré"},{es:"Jabalí", pt:"Javali"},{es:"Buey", pt:"Boi"},{es:"Mariposa", pt:"Borboleta"},{es:"León", pt:"Leão"},
          {es:"Caballo", pt:"Cavalo"},{es:"Mono", pt:"Macaco"},{es:"Cabra", pt:"Cabra"},{es:"Perro", pt:"Cachorro/Cão"},{es:"Mosquito", pt:"Mosquito"},
          {es:"Camello", pt:"Camelo"},{es:"Murciélago", pt:"Morcego"},{es:"Canguro", pt:"Canguru"},{es:"Cangrejo", pt:"Caranguejo"},{es:"Oveja", pt:"Ovelha"},
          {es:"Cigüeña", pt:"Cegonha"},{es:"Pájaro", pt:"Pássaro"},{es:"Pato", pt:"Pato"},{es:"Pez", pt:"Peixe"},{es:"Conejo", pt:"Coelho"},
          {es:"Pingüino", pt:"Pinguim"},{es:"Búho/Lechuza", pt:"Coruja"},{es:"Paloma", pt:"Pomba"},{es:"Cocodrilo", pt:"Crocodilo"},{es:"Cerdo/Chancho", pt:"Porco"},
          {es:"Gallina", pt:"Galinha"},{es:"Ratón", pt:"Rato/Camundongo"},{es:"Elefante", pt:"Elefante"},{es:"Sapo", pt:"Sapo"},{es:"Tortuga", pt:"Tartaruga"},
          {es:"Foca", pt:"Foca"},{es:"Tigre", pt:"Tigre"},{es:"Hormiga", pt:"Formiga"},{es:"Toro", pt:"Touro"},{es:"Oso", pt:"Urso"},
          {es:"Vaca", pt:"Vaca"},{es:"Gallo", pt:"Galo"},{es:"Cebra", pt:"Zebra"}
        ]}
      ],
      grammar: [
        {title:"Los posesivos (plenos y apocopados)", headers:["Pronombre","Pleno","Apocopado"], rows:[["Yo","Mío(a)(s)","Mi(s)"],["Tú","Tuyo(a)(s)","Tu(s)"],["Él/Ella/Usted","Suyo(a)(s)","Su(s)"],["Nosotros(as)","Nuestro(a)(s)","Nuestro(a)(s)"],["Vosotros(as)","Vuestro(a)(s)","Vuestro(a)(s)"],["Ellos(as)/Ustedes","Suyo(a)(s)","Su(s)"]]},
        {title:"Artículos definidos", headers:["","Femenino","Masculino"], rows:[["Singular","LA","EL"],["Plural","LAS","LOS"]]},
        {title:"Verbo GUSTAR — presente", headers:["Pronombre","Conjugación"], rows:[["Yo","Gusto"],["Tú/Vos","Gustas/Gustás"],["Él/Ella/Usted","Gusta"],["Nosotros(as)","Gustamos"],["Vosotros(as)","Gustáis"],["Ellos/Ellas/Ustedes","Gustan"]]}
      ],
      notes: [
        "Artículo neutro LO: sustantivador (sem gênero/número), antes de adjetivos/advérbios. Ex.: 'Lo bonito en esta vida es estar contigo.'",
        "Verbo GUSTAR: me/te/le/nos/os/les + gusta/gustan + complemento. Ex.: (a mí) me gusta hablar chino; (a nosotros) nos gustan las frutas.",
        "Outros verbos como GUSTAR: encantar, asustar, parecer, aburrir, doler, interesar, molestar.",
        "Eufonía: Y→E antes de i/hi (María E Isabel); O→U antes de o/ho (Siete U ocho).",
        "Cacofonía: LA vira EL antes de palavra feminina com A/HA tônico no singular (EL agua, EL hada), mas volta a LA(S) no plural (Las águilas)."
      ],
      exercises: [
        {type:"fill", q:"¿Puedo salir ___________ hoy? (tú)", answer:"contigo"},
        {type:"fill", q:"¿Este libro es _________. (yo)", answer:"mío"},
        {type:"fill", q:"________ casas son lindas. (vosotros)", answer:"Vuestras", altAnswers:["vuestras"]},
        {type:"fill", q:"dos ___ocho (u/o)", answer:"u"},
        {type:"fill", q:"hermanos ___ hermanas (y/e)", answer:"y"},
        {type:"mc", q:"____ casa de María (artículo)", options:["La","El","Los"], correct:0},
        {type:"mc", q:"____ amor es bello (artículo)", options:["La","El","Los"], correct:1},
        {type:"mc", q:"Me ________ los dulces de Suiza.", options:["gusta","gustan","gusto"], correct:1},
        {type:"mc", q:"¿Esta es ____ casa, Julia?", options:["mi","tu","su"], correct:1},
        {type:"fill", q:"Plural de 'pez' → ___", answer:"peces"},
        {type:"fill", q:"Plural de 'reloj' → ___", answer:"relojes"},
        {type:"translate", from:"pt", text:"Eu gosto destas pessoas.", answer:"Me gustan estas personas."},
        {type:"open", q:"Desenhe (ou descreva em espanhol) a árvore genealógica da sua família.", sample:"Mi padre se llama..., mi madre se llama..."}
      ]
    },
    {
      id: "b4", order: 4, title: "Rutina diaria", subtitle: "Reflexivos, horário, verbos irregulares",
      text: "Por la mañana me despierto generalmente a las 7:30, me levanto a las 7:45 y me preparo el desayuno. A las 8:05 me visto, me cepillo los dientes y suelo salir para trabajar a las 08:20. Trabajo hasta las 12:00 y tengo una pausa de 1 hora para comer. Después del trabajo voy al supermercado y llego a mi casa a las 06:50. Ceno, me ducho, lavo la ropa sucia, saco la basura, veo alguna película y después me voy a dormir a las 10:00.",
      textPt: "De manhã eu geralmente acordo às 7:30, levanto às 7:45 e preparo o café da manhã. Às 8:05 me visto, escovo os dentes e costumo sair para trabalhar às 08:20. Trabalho até as 12:00 e tenho uma pausa de 1 hora para comer. Depois do trabalho vou ao supermercado e chego em casa às 06:50. Janto, tomo banho, lavo a roupa suja, tiro o lixo, vejo algum filme e depois vou dormir às 10:00.",
      vocabulary: [
        {category:"Actividades diarias", items:[
          {es:"Despertarse", pt:"Acordar"},{es:"Levantarse", pt:"Levantar-se"},{es:"Cepillarse los dientes", pt:"Escovar os dentes"},
          {es:"Peinarse", pt:"Pentear-se"},{es:"Ducharse/Bañarse", pt:"Tomar banho"},{es:"Limpiar la casa", pt:"Limpar a casa"},
          {es:"Ir a trabajar", pt:"Ir trabalhar"},{es:"Hacer compras en el supermercado", pt:"Fazer compras no supermercado"},
          {es:"Lavar la ropa sucia/hacer la colada", pt:"Lavar a roupa suja"},{es:"Ir al gimnasio", pt:"Ir à academia"},{es:"Hacer ejercicios", pt:"Fazer exercícios"},
          {es:"Caminar", pt:"Caminhar"},{es:"Salir con los amigos", pt:"Sair com os amigos"},{es:"Ver películas/televisión", pt:"Ver filmes/televisão"},
          {es:"Planchar", pt:"Passar roupa"},{es:"Vestirse", pt:"Vestir-se"},{es:"Preparar(se) el desayuno/almuerzo/cena", pt:"Preparar o café da manhã/almoço/jantar"},
          {es:"Almorzar/Desayunar/Cenar", pt:"Almoçar/Tomar café da manhã/Jantar"},{es:"Cocinar", pt:"Cozinhar"},{es:"Ir a dormir", pt:"Ir dormir"},
          {es:"Acostarse", pt:"Deitar-se"},{es:"Sacar la basura", pt:"Tirar o lixo"},{es:"Hacer la tarea", pt:"Fazer a tarefa (de casa)"}
        ]},
        {category:"Adverbios de frecuencia", items:[
          {es:"Siempre", pt:"Sempre"},{es:"Casi siempre", pt:"Quase sempre"},{es:"Normalmente", pt:"Normalmente"},{es:"Frecuentemente", pt:"Frequentemente"},
          {es:"A menudo", pt:"Com frequência"},{es:"A veces", pt:"Às vezes"},{es:"Raramente", pt:"Raramente"},{es:"Casi nunca", pt:"Quase nunca"},
          {es:"Nunca", pt:"Nunca"},{es:"Jamás", pt:"Jamais"},{es:"Una vez por semana", pt:"Uma vez por semana"},{es:"Todos los días", pt:"Todos os dias"},{es:"A diario", pt:"Diariamente"}
        ]},
        {category:"Estaciones del año", items:[{es:"Primavera", pt:"Primavera"},{es:"Verano", pt:"Verão"},{es:"Otoño", pt:"Outono"},{es:"Invierno", pt:"Inverno"}]}
      ],
      grammar: [
        {title:"Pronombres reflexivos átonos", headers:["Pronombre","Reflexivo"], rows:[["Yo","me"],["Tú/Vos","te"],["Él/Ella/Usted","se"],["Nosotros/Nosotras","nos"],["Vosotros/Vosotras","os"],["Ellos/Ellas/Ustedes","se"]]},
        {title:"Verbos irregulares — presente", headers:["Pronombre","Estar","Tener","Hacer","Ir"], rows:[
          ["Yo","Estoy","Tengo","Hago","Voy"],["Tú/Vos","Estás","Tienes/Tenés","Haces/Hacés","Vas"],["Él/Ella/Usted","Está","Tiene","Hace","Va"],["Nosotros(as)","Estamos","Tenemos","Hacemos","Vamos"],["Vosotros(as)","Estáis","Tenéis","Hacéis","Vais"],["Ellos/Ellas/Ustedes","Están","Tienen","Hacen","Van"]
        ]}
      ],
      notes: [
        "El horario: Es la una. / Son las tres. / Y cuarto / Y media / Menos veinte. Ex.: 10:40 → 'Son las once menos veinte'."
      ],
      exercises: [
        {type:"mc", q:"a - sol, calor, playa → ¿qué estación?", options:["VERANO","INVIERNO","OTOÑO"], correct:0},
        {type:"mc", q:"nieve, frío, lluvia → ¿qué estación?", options:["PRIMAVERA","INVIERNO","VERANO"], correct:1},
        {type:"mc", q:"La primera cosa que hago cuando me __________ es __________ los dientes.", options:["ducho - peinarme","despierto - lavarme","visto - cepillarme"], correct:1},
        {type:"mc", q:"____ gusta ________ con mis amigos.", options:["Me - salir","Te - salgo","Le - sales"], correct:0},
        {type:"mc", q:"Son ______________.", options:["las dos y cinco","las dos menos diez","la dos horas"], correct:0},
        {type:"fill", q:"¿Qué hora ____? (ser)", answer:"es"},
        {type:"fill", q:"_____ la una en punto. (ser)", answer:"Es", altAnswers:["es"]},
        {type:"listen", audioText:"Son las ocho menos cuarto.", q:"Que horas são?", answer:"07:45"},
        {type:"speak", prompt:"Diga em espanhol a que horas você acorda (Me despierto a las...)", target:"Me despierto a las"}
      ]
    },
    {
      id: "b5", order: 5, title: "Aspectos físicos", subtitle: "Descrições, artigo indefinido",
      dialogue: [
        {who:"A", es:"¡Hola, María! ¿Cómo estás?", pt:"Olá, María! Como você está?"},
        {who:"B", es:"¡Hola, Julia! Estoy muy bien, ¿y tú? Supe que estás saliendo con alguien, ¿verdad?", pt:"Olá, Julia! Estou muito bem, e você? Fiquei sabendo que você está namorando alguém, né?"},
        {who:"A", es:"¡Sí! Su nombre es Mateus. ¿Lo conoces?", pt:"Sim! O nome dele é Mateus. Você o conhece?"},
        {who:"B", es:"No. ¿Y qué tal es? ¿Guapo? ¿Buena onda?", pt:"Não. E como ele é? Bonito? Legal?"},
        {who:"A", es:"¡Es perfecto! Tiene 17 años, es un chico fuerte, rubio, tiene ojos azules, es vanidoso y demasiado celoso.", pt:"É perfeito! Tem 17 anos, é um rapaz forte, loiro, tem olhos azuis, é vaidoso e ciumento demais."},
        {who:"B", es:"¡Qué lindo eso, amiga! ¡Me alegro por ti!", pt:"Que legal isso, amiga! Fico feliz por você!"}
      ],
      vocabulary: [
        {category:"Cabello, ojos, rostro", items:[
          {es:"Tiene el pelo corto/largo", pt:"Tem o cabelo curto/comprido"},{es:"Es pelado/calvo", pt:"É careca"},{es:"Usa barba/bigote", pt:"Usa barba/bigode"},
          {es:"Es moreno(a)/castaño(a)/rubio(a)/pelirrojo(a)", pt:"É moreno(a)/castanho(a)/loiro(a)/ruivo(a)"},{es:"Tiene canas", pt:"Tem cabelos brancos"},
          {es:"Tiene el pelo rizado/liso/ondulado", pt:"Tem o cabelo cacheado/liso/ondulado"},{es:"Tiene los ojos azules/verdes/marrones/negros", pt:"Tem os olhos azuis/verdes/castanhos/pretos"},
          {es:"Lleva/usa gafas/lentes", pt:"Usa óculos"},{es:"Tiene las pestañas largas", pt:"Tem os cílios longos"},{es:"Tiene las cejas espesas", pt:"Tem as sobrancelhas grossas"},
          {es:"Es narigón/narigona", pt:"Tem nariz grande"},{es:"Tiene hoyuelos", pt:"Tem covinhas"}
        ]},
        {category:"Cuerpo/porte", items:[
          {es:"Es flaco(a)/delgado(a)", pt:"É magro(a)"},{es:"Es gordo(a)", pt:"É gordo(a)"},{es:"Es fuerte", pt:"É forte"},{es:"Es débil", pt:"É fraco(a)"},
          {es:"Tiene espaldas anchas", pt:"Tem costas largas"},{es:"Está en forma", pt:"Está em forma"},{es:"Es musculoso(a)", pt:"É musculoso(a)"}
        ]},
        {category:"Personalidad y apariencia", items:[
          {es:"Guapo(a)", pt:"Bonito(a)"},{es:"Hermoso(a)", pt:"Formoso(a) / Lindo(a)"},{es:"Precioso(a)", pt:"Precioso(a)"},{es:"Encantador(a)", pt:"Encantador(a)"},
          {es:"Feliz", pt:"Feliz"},{es:"Triste", pt:"Triste"},{es:"Buena onda", pt:"Legal / Gente boa"},{es:"Feo(a)", pt:"Feio(a)"},{es:"Joven", pt:"Jovem"},
          {es:"Inteligente", pt:"Inteligente"},{es:"Viejo(a)", pt:"Velho(a)"},{es:"Tonto(a)", pt:"Bobo(a)"},{es:"Tranquilo(a)", pt:"Tranquilo(a)"},
          {es:"Nervioso(a)", pt:"Nervoso(a)"},{es:"Elegante", pt:"Elegante"},{es:"Simpático(a)", pt:"Simpático(a)"},{es:"Antipático(a)", pt:"Antipático(a)"},
          {es:"Tacaño(a)", pt:"Pão-duro / Sovina"},{es:"Ñoño", pt:"Chato / Sem graça"},{es:"Mentiroso(a)", pt:"Mentiroso(a)"},{es:"Aburrido(a)", pt:"Chato(a) / Entediante"}
        ]},
        {category:"Formas de tratamiento", items:[
          {es:"Tú/vos, Usted, Señor(a), Don/Doña", pt:"Você (informal), Você (formal), Senhor(a), Dom/Dona (título de respeito)"},
          {es:"Entre amigos: tío, colega, cuate, hermano, compadre", pt:"Entre amigos: cara, colega, amigo, mano, compadre"},
          {es:"En el trabajo: Jefe/Jefa, Señor/Señora", pt:"No trabalho: Chefe, Senhor/Senhora"}
        ]}
      ],
      grammar: [
        {title:"Artículo indefinido", headers:["","Masculino","Femenino"], rows:[["Singular","UN","UNA"],["Plural","UNOS","UNAS"]]},
        {title:"Verbos irregulares — presente", headers:["Pronombre","Saber","Poder","Querer","Conocer"], rows:[
          ["Yo","Sé","Puedo","Quiero","Conozco"],["Tú/Vos","Sabes/Sabés","Puedes/Podés","Quieres/Querés","Conoces/Conocés"],["Él/Ella/Usted","Sabe","Puede","Quiere","Conoce"],["Nosotros(as)","Sabemos","Podemos","Queremos","Conocemos"],["Vosotros(as)","Sabéis","Podéis","Queréis","Conocéis"],["Ellos/Ellas/Ustedes","Saben","Pueden","Quieren","Conocen"]
        ]}
      ],
      notes: [],
      exercises: [
        {type:"mc", q:"Elimina el adjetivo que no tiene que ver: Flaco - Delgado - Huesudo - ___", options:["Gordito","Débil","Menudo"], correct:0},
        {type:"fill", q:"Quiero comprar _____ casa. (artículo)", answer:"una"},
        {type:"fill", q:"¡Dame _____ cuchillo ahora! (artículo)", answer:"un"},
        {type:"mc", q:"No me gusta este chico porque es _________.", options:["simpático","tonto","guapo"], correct:1},
        {type:"mc", q:"Yo _________ ir a viajar pronto.", options:["quiero","sé","conozco"], correct:0},
        {type:"mc", q:"¿_________ hablar portugués?", options:["Puedes","Sabes","Conoces"], correct:1},
        {type:"mc", q:"Ella tiene _____________.", options:["barba","hoyuelos","bigote"], correct:1},
        {type:"translate", from:"pt", text:"Ela tem o cabelo comprido e é magra.", answer:"Ella tiene el pelo largo y es flaca/delgada."},
        {type:"speak", prompt:"Descreva sua aparência em espanhol (Tengo el pelo..., soy...)", target:"Tengo el pelo"}
      ]
    },
    {
      id: "b6", order: 6, title: "Restaurante", subtitle: "Comidas, bebidas, verbos irregulares",
      dialogue: [
        {who:"Camarero", es:"¡Buenas noches, señores! ¿Una mesa para dos?", pt:"Boa noite, senhores! Uma mesa para dois?"},
        {who:"Cliente", es:"¡Hola, buenas noches! Sí, para dos, por favor.", pt:"Olá, boa noite! Sim, para dois, por favor."},
        {who:"Camarero", es:"Aquí tienen el menú y la carta de vinos. Vuelvo en un instante.", pt:"Aqui está o cardápio e a carta de vinhos. Volto em um instante."},
        {who:"Cliente", es:"Quisiera el camarón con alioli y mi mujer el pollo con salsa cuatro quesos.", pt:"Eu gostaria do camarão com alho e óleo, e minha esposa, o frango com molho quatro queijos."},
        {who:"Camarero", es:"¡Por supuesto! ¿Y qué desean tomar?", pt:"Claro! E o que desejam beber?"},
        {who:"Cliente", es:"¿Qué nos recomiendas?", pt:"O que você nos recomenda?"},
        {who:"Camarero", es:"Tenemos este vino chileno muy especial.", pt:"Temos este vinho chileno muito especial."},
        {who:"Cliente", es:"¡Camarero! Quisiéramos saber qué hay de postre.", pt:"Garçom! Gostaríamos de saber o que tem de sobremesa."},
        {who:"Cliente", es:"¡No, gracias! Solo la cuenta, por favor.", pt:"Não, obrigado! Só a conta, por favor."},
        {who:"Camarero", es:"¿Usted va a pagar con tarjeta o en efectivo?", pt:"O senhor vai pagar com cartão ou em dinheiro?"},
        {who:"Cliente", es:"En efectivo, aquí tienes. ¡Muchas gracias y buenas noches!", pt:"Em dinheiro, aqui está. Muito obrigado e boa noite!"}
      ],
      vocabulary: [
        {category:"Frases del camarero", items:[
          {es:"¿Cuántas personas, por favor?", pt:"Quantas pessoas, por favor?"},{es:"¿Fumadores o no fumadores?", pt:"Fumantes ou não fumantes?"},
          {es:"Aquí tienen el menú/la carta.", pt:"Aqui está o cardápio."},{es:"¿Qué desean de primer/segundo plato?", pt:"O que desejam de entrada/prato principal?"},
          {es:"¿Y para beber?", pt:"E para beber?"},{es:"¿Vino blanco o tinto?", pt:"Vinho branco ou tinto?"},{es:"¿Qué tomarán de postre?", pt:"O que vão querer de sobremesa?"},
          {es:"Aquí tienen la cuenta.", pt:"Aqui está a conta."},{es:"¿Van a pagar con tarjeta o en efectivo?", pt:"Vão pagar com cartão ou em dinheiro?"}
        ]},
        {category:"Frases del cliente", items:[
          {es:"Una mesa para dos personas, por favor.", pt:"Uma mesa para duas pessoas, por favor."},{es:"He hecho una reserva a nombre de...", pt:"Fiz uma reserva em nome de..."},
          {es:"Quisiera un pollo con vegetales salteados.", pt:"Eu gostaria de um frango com legumes salteados."},{es:"¿Me trae otra servilleta, por favor?", pt:"Você me traz outro guardanapo, por favor?"},
          {es:"¿Nos trae la cuenta, por favor?", pt:"Você nos traz a conta, por favor?"},{es:"¡Qué rico/exquisito/delicioso!", pt:"Que gostoso/saboroso/delicioso!"}
        ]},
        {category:"Comidas", items:[
          {es:"Arroz", pt:"Arroz"},{es:"Frijoles/porotos", pt:"Feijão"},{es:"Lentejas", pt:"Lentilhas"},{es:"Pasta", pt:"Macarrão/Massa"},
          {es:"Huevo frito/duro/revuelto", pt:"Ovo frito/cozido/mexido"},{es:"Puré de papas", pt:"Purê de batata"},{es:"Papas fritas", pt:"Batata frita"},
          {es:"Ensalada", pt:"Salada"},{es:"Sopa", pt:"Sopa"},{es:"Tortilla", pt:"Omelete (tortilha espanhola de batata)"},{es:"Pizza", pt:"Pizza"},
          {es:"Pan", pt:"Pão"},{es:"Hamburguesa", pt:"Hambúrguer"},{es:"Filete", pt:"Filé"},{es:"Pollo", pt:"Frango"},{es:"Pescado", pt:"Peixe"},
          {es:"Marisco", pt:"Frutos do mar"},{es:"Camarones", pt:"Camarões"},{es:"Salmón", pt:"Salmão"},{es:"Paella de marisco", pt:"Paella de frutos do mar"},{es:"Empanadas", pt:"Empanadas (salgados recheados assados/fritos)"}
        ]},
        {category:"Bebidas", items:[
          {es:"Agua (con/sin gas)", pt:"Água (com/sem gás)"},{es:"Café", pt:"Café"},{es:"Chocolate (caliente)", pt:"Chocolate (quente)"},{es:"Cerveza", pt:"Cerveja"},
          {es:"Té", pt:"Chá"},{es:"Leche", pt:"Leite"},{es:"Jugo/Zumo", pt:"Suco"},{es:"Gaseosa/refresco", pt:"Refrigerante"},
          {es:"Vino (tinto, blanco, rosado)", pt:"Vinho (tinto, branco, rosé)"},{es:"Sangría", pt:"Sangria"}
        ]},
        {category:"Postres", items:[{es:"Pastel/torta/tarta", pt:"Bolo/torta"},{es:"Helado", pt:"Sorvete"},{es:"Flan", pt:"Pudim (flan)"},{es:"Mousse", pt:"Mousse"}]}
      ],
      grammar: [
        {title:"Verbos irregulares — presente", headers:["Pronombre","Oír","Dar","Dormir","Venir"], rows:[
          ["Yo","Oigo","Doy","Duermo","Vengo"],["Tú/Vos","Oyes/Oís","Das","Duermes/Dormís","Vienes/Venís"],["Él/Ella/Usted","Oye","Da","Duerme","Viene"],["Nosotros(as)","Oímos","Damos","Dormimos","Venimos"],["Vosotros(as)","Oís","Dais","Dormís","Venís"],["Ellos/Ellas/Ustedes","Oyen","Dan","Duermen","Vienen"]
        ]}
      ],
      notes: [],
      exercises: [
        {type:"order", items:[
          "Sí, claro. Ahora se los traigo. Usted puede elegir una mesa.",
          "¡Buenas tardes, señor! ¿Cómo le puedo ayudar?",
          "Quisiera un café sin azúcar y un trozo de tarta de manzana. ¿Puede ser?",
          "Esta está perfecta. ¡Gracias!"
        ], correctOrder:[1,2,0,3]},
        {type:"fill", q:"De primer plato quisiera un helado. (corrige: helado é sobremesa)", answer:"De postre quisiera un helado."},
        {type:"fill", q:"Yo te _______ todo lo que necesitas. (dar)", answer:"doy"},
        {type:"fill", q:"Ella siempre _______ lo que digo. (oír)", answer:"oye"},
        {type:"fill", q:"Nosotros en general _____________ tarde. (dormir)", answer:"dormimos"},
        {type:"mc", q:"¿No ___________ salir conmigo esta noche? (tú - querer)", options:["quieres","quiero","queremos"], correct:0},
        {type:"translate", from:"pt", text:"A conta, por favor. Vou pagar em dinheiro.", answer:"La cuenta, por favor. Voy a pagar en efectivo."},
        {type:"speak", prompt:"Peça um prato no restaurante em espanhol (Quisiera...)", target:"Quisiera"}
      ]
    },
    {
      id: "b7", order: 7, title: "Oficina", subtitle: "Materiais, demonstrativos, palavras com/sem til",
      text: "Hoy empiezo a trabajar en la oficina a las 8:30 de la mañana. Tengo mucho que hacer allá. Muchos documentos para firmar, reuniones para ir, llamadas a clientes para hacer y aún tengo que ir a una papelería para comprar los materiales escolares de mi hija. Ella necesita cuadernos, tijeras, lápices, bolígrafos, reglas. Lo peor es que nuestro ordenador no está funcionando y tengo que llevarlo para arreglar.",
      textPt: "Hoje começo a trabalhar no escritório às 8:30 da manhã. Tenho muito o que fazer lá. Muitos documentos para assinar, reuniões para ir, ligações para clientes para fazer e ainda tenho que ir a uma papelaria comprar o material escolar da minha filha. Ela precisa de cadernos, tesoura, lápis, canetas, réguas. O pior é que nosso computador não está funcionando e tenho que levá-lo para consertar.",
      vocabulary: [
        {category:"Materiales escolares y de oficina", items:[
          {es:"Bolígrafo/Pluma/Lapicero", pt:"Caneta"},{es:"Lápiz", pt:"Lápis"},{es:"Goma (de borrar)", pt:"Borracha"},{es:"Sacapuntas", pt:"Apontador"},
          {es:"Tijera", pt:"Tesoura"},{es:"Cuaderno", pt:"Caderno"},{es:"Regla", pt:"Régua"},{es:"Carpeta", pt:"Pasta (de arquivo)"},
          {es:"Pegamento", pt:"Cola"},{es:"Mochila", pt:"Mochila"},{es:"Diccionario", pt:"Dicionário"},{es:"Marcador/Rotulador", pt:"Marcador / Caneta hidrográfica"},
          {es:"Calculadora", pt:"Calculadora"},{es:"Grapadora", pt:"Grampeador"},{es:"Impresora", pt:"Impressora"},{es:"Ordenador/Computador(a)", pt:"Computador"},
          {es:"Pizarra", pt:"Quadro (branco/negro)"},{es:"Papel/Folio/Hoja", pt:"Papel/Folha"},{es:"Documento", pt:"Documento"},{es:"Papelera", pt:"Lixeira"},
          {es:"Agenda", pt:"Agenda"},{es:"Archivo", pt:"Arquivo"},{es:"Teléfono", pt:"Telefone"},{es:"Correo electrónico", pt:"E-mail"}
        ]}
      ],
      grammar: [
        {title:"Pronombres/adjetivos demostrativos", headers:["","Masc. Sing.","Masc. Plural","Fem. Sing.","Fem. Plural"], rows:[["Cerca (this)","Este","Estos","Esta","Estas"],["Médio (that)","Ese","Esos","Esa","Esas"],["Longe (that, over there)","Aquel","Aquellos","Aquella","Aquellas"]]},
        {title:"Palavras com/sem til (pronomes interrogativos vs relativos)", headers:["Sem til (relativo)","Com til (interrogativo)"], rows:[
          ["que","qué"],["donde","dónde"],["cual(es)","cuál(es)"],["cuanto(s)","cuánto(s)"],["quien(es)","quién(es)"],["como","cómo"],["cuando","cuándo"]
        ]}
      ],
      notes: ["Pelas novas regras da RAE, pronomes demonstrativos não usam mais til diacrítica."],
      exercises: [
        {type:"fill", q:"¿_______ años tiene Maura? (com ou sem til)", answer:"Cuántos"},
        {type:"fill", q:"¡_______ lío! (com ou sem til)", answer:"Qué"},
        {type:"fill", q:"Le conté _______ estábamos anoche. (relativo, sem til)", answer:"dónde"},
        {type:"mc", q:"Mis libros son _____________.", options:["Aquellos","Aquello","Aquel"], correct:0},
        {type:"mc", q:"Te he comprado este regalo __________ me gustas mucho.", options:["porque","por qué","cuando"], correct:0},
        {type:"mc", q:"¿Qué es _______?", options:["eso","esa","esos"], correct:0},
        {type:"translate", from:"pt", text:"Onde estão as chaves? Não sei.", answer:"¿Dónde están las llaves? No sé."},
        {type:"speak", prompt:"Peça um material de escritório em espanhol (Necesito un/una...)", target:"Necesito"}
      ]
    },
    {
      id: "b8", order: 8, title: "Casa", subtitle: "Haber x Tener x Contar con, números 0-100",
      text: "Mi casa tiene dos pisos y es un lugar muy acogedor. Tengo una habitación y un baño solo para mí, hay también una cocina, otro baño, 2 habitaciones más, un garaje, un comedor, y cuenta también con un bello jardín y una pequeña piscina. Mi dirección es calle Bolívar, 47.",
      vocabulary: [
        {category:"Partes de la casa", items:[
          {es:"Casa/vivienda/piso/departamento", pt:"Casa/moradia/andar/apartamento"},{es:"Habitación/Dormitorio", pt:"Quarto"},{es:"Cuarto de baño", pt:"Banheiro"},
          {es:"Cocina", pt:"Cozinha"},{es:"Sala de estar/Living", pt:"Sala de estar"},{es:"Comedor", pt:"Sala de jantar"},{es:"Escalera", pt:"Escada"},
          {es:"Garaje/Cochera", pt:"Garagem"},{es:"Terraza", pt:"Terraço"},{es:"Sótano", pt:"Porão"},{es:"Jardín", pt:"Jardim"},{es:"Balcón", pt:"Varanda/Sacada"},
          {es:"Ático/Buhardilla", pt:"Sótão/Mansarda"},{es:"Piscina/Pileta", pt:"Piscina"},{es:"Chimenea", pt:"Lareira"},{es:"Puerta", pt:"Porta"},
          {es:"Ventana", pt:"Janela"},{es:"Tejado", pt:"Telhado"},{es:"Pared", pt:"Parede"}
        ]},
        {category:"Adjetivos para objetos", items:[
          {es:"Agradable", pt:"Agradável"},{es:"Alegre", pt:"Alegre"},{es:"Alto(a)/Bajo(a)", pt:"Alto(a)/Baixo(a)"},{es:"Barato(a)/Caro(a)", pt:"Barato(a)/Caro(a)"},
          {es:"Bonito(a)/Feo(a)", pt:"Bonito(a)/Feio(a)"},{es:"Bueno(a)", pt:"Bom/Boa"},{es:"Caliente/Frío(a)", pt:"Quente/Frio(a)"},{es:"Cómodo(a)", pt:"Confortável"},
          {es:"Corto(a)/Largo(a)", pt:"Curto(a)/Comprido(a)"},{es:"Débil/Fuerte", pt:"Fraco(a)/Forte"},{es:"Grande/Pequeño(a)", pt:"Grande/Pequeno(a)"},
          {es:"Limpio(a)/Sucio(a)", pt:"Limpo(a)/Sujo(a)"},{es:"Nuevo(a)/Viejo(a)", pt:"Novo(a)/Velho(a)"},{es:"Peligroso(a)", pt:"Perigoso(a)"},
          {es:"Rico(a)", pt:"Rico(a) / Gostoso(a)"},{es:"Seco(a)/Húmedo(a)", pt:"Seco(a)/Úmido(a)"}
        ]},
        {category:"Adverbios de lugar", items:[
          {es:"Aquí/Acá", pt:"Aqui"},{es:"Ahí/Allí", pt:"Ali/Lá"},{es:"Cerca/Lejos", pt:"Perto/Longe"},{es:"Arriba/Abajo", pt:"Em cima/Embaixo"},
          {es:"Delante/Detrás", pt:"Na frente/Atrás"},{es:"Encima/Debajo", pt:"Em cima de/Embaixo de"},{es:"Adentro/Afuera", pt:"Dentro/Fora"}
        ]}
      ],
      grammar: [
        {title:"Números cardinales 0-100 (amostras)", headers:["Número","Espanhol"], rows:[["0-9","Cero, Uno, Dos, Tres, Cuatro, Cinco, Seis, Siete, Ocho, Nueve"],["10-19","Diez, Once, Doce, Trece, Catorce, Quince, Dieciséis, Diecisiete, Dieciocho, Diecinueve"],["20-29","Veinte, Veintiuno...Veintinueve"],["30-90 (dezenas)","Treinta, Cuarenta, Cincuenta, Sesenta, Setenta, Ochenta, Noventa"],["100","Cien"]]}
      ],
      notes: ["HAY (existência: 'Hay 3 baños') x TENER (posse: 'Tengo un baño') x CONTAR CON (composição: 'Mi casa cuenta con 5 ambientes')."],
      exercises: [
        {type:"fill", q:"56 → escreva por extenso", answer:"Cincuenta y seis"},
        {type:"fill", q:"24 → escreva por extenso", answer:"Veinticuatro"},
        {type:"fill", q:"100 → escreva por extenso", answer:"Cien"},
        {type:"fill", q:"Mi casa _____ con cinco partes. (contar)", answer:"cuenta"},
        {type:"fill", q:"Yo _____ un baño solo para mí. (tener)", answer:"tengo"},
        {type:"mc", q:"Elige el adjetivo que no tiene que ver: BELLO - HERMOSO - ___ - LINDO", options:["FEO","BONITO","AGRADABLE"], correct:0},
        {type:"translate", from:"pt", text:"Minha casa tem três quartos e uma piscina.", answer:"Mi casa tiene tres habitaciones y una piscina."},
        {type:"speak", prompt:"Descreva sua casa em espanhol (Mi casa tiene...)", target:"Mi casa tiene"}
      ]
    },
    {
      id: "b9", order: 9, title: "Preferencias", subtitle: "Verbo PREFERIR, dias, meses, ordinais",
      dialogue: [
        {who:"A", es:"¡Buenos días! ¿Cómo te llamas?", pt:"Bom dia! Como você se chama?"},
        {who:"B", es:"¡Hola! Soy Henrico.", pt:"Olá! Eu sou Henrico."},
        {who:"A", es:"¿Podrías contestarnos algunas preguntas sobre gustos y preferencias?", pt:"Você poderia responder algumas perguntas sobre gostos e preferências?"},
        {who:"B", es:"¡Por supuesto!", pt:"Claro!"},
        {who:"A", es:"¿De qué equipo eres hincha?", pt:"De que time você é torcedor?"},
        {who:"B", es:"De River. ¡Lo amo!", pt:"Do River. Eu amo esse time!"},
        {who:"A", es:"¿Qué les gusta más comer cuando están viajando?", pt:"O que vocês mais gostam de comer quando estão viajando?"},
        {who:"B", es:"A mí me gusta comer pescado y odio comer pizza, mi mujer prefiere pasta a pescado.", pt:"Eu gosto de comer peixe e odeio comer pizza, minha esposa prefere macarrão a peixe."}
      ],
      vocabulary: [
        {category:"Días de la semana", items:[
          {es:"Lunes", pt:"Segunda-feira"},{es:"Martes", pt:"Terça-feira"},{es:"Miércoles", pt:"Quarta-feira"},{es:"Jueves", pt:"Quinta-feira"},
          {es:"Viernes", pt:"Sexta-feira"},{es:"Sábado", pt:"Sábado"},{es:"Domingo", pt:"Domingo"}
        ]},
        {category:"Meses del año", items:[
          {es:"Enero", pt:"Janeiro"},{es:"Febrero", pt:"Fevereiro"},{es:"Marzo", pt:"Março"},{es:"Abril", pt:"Abril"},{es:"Mayo", pt:"Maio"},{es:"Junio", pt:"Junho"},
          {es:"Julio", pt:"Julho"},{es:"Agosto", pt:"Agosto"},{es:"Septiembre", pt:"Setembro"},{es:"Octubre", pt:"Outubro"},{es:"Noviembre", pt:"Novembro"},{es:"Diciembre", pt:"Dezembro"}
        ]},
        {category:"Números ordinales", items:[
          {es:"1º Primero", pt:"1º Primeiro"},{es:"2º Segundo", pt:"2º Segundo"},{es:"3º Tercero", pt:"3º Terceiro"},{es:"4º Cuarto", pt:"4º Quarto"},
          {es:"5º Quinto", pt:"5º Quinto"},{es:"6º Sexto", pt:"6º Sexto"},{es:"7º Séptimo", pt:"7º Sétimo"},{es:"8º Octavo", pt:"8º Oitavo"},{es:"9º Noveno", pt:"9º Nono"},{es:"10º Décimo", pt:"10º Décimo"}
        ]}
      ],
      grammar: [
        {title:"Verbo PREFERIR — presente", headers:["Pronombre","Conjugación"], rows:[["Yo","Prefiero"],["Tú/Vos","Prefieres/Preferís"],["Él/Ella/Usted","Prefiere"],["Nosotros(as)","Preferimos"],["Vosotros(as)","Preferís"],["Ellos/Ellas/Ustedes","Prefieren"]]},
        {title:"Odiar / Detestar / Amar — presente", headers:["Pronombre","Odiar","Amar"], rows:[["Yo","Odio","Amo"],["Tú/Vos","Odias/Odiás","Amas/Amás"],["Él/Ella/Usted","Odia","Ama"]]}
      ],
      notes: ["Prefiero X a Y (não 'que'): 'Prefiero el helado de coco al de fresa.'"],
      exercises: [
        {type:"fill", q:"6° → escreva por extenso", answer:"Sexto"},
        {type:"fill", q:"1° → escreva por extenso", answer:"Primero"},
        {type:"fill", q:"Depois de fevereiro vem: ___", answer:"marzo"},
        {type:"fill", q:"Me ___________ salir con mis amigos los fines de semana. (gustar)", answer:"gusta"},
        {type:"fill", q:"¿Te ____________ bailar cumbia? (gustar)", answer:"gusta"},
        {type:"mc", q:"Último mês do ano:", options:["Noviembre","Diciembre","Octubre"], correct:1},
        {type:"translate", from:"pt", text:"Eu prefiro café a chá.", answer:"Prefiero el café al té."},
        {type:"speak", prompt:"Diga uma preferência em espanhol (Prefiero... a...)", target:"Prefiero"}
      ]
    },
    {
      id: "b10", order: 10, title: "Cuerpo", subtitle: "Saúde, imperativo afirmativo/negativo",
      text: "Muchas veces, puedes sentirte agotado o tienes dolores raros, y es muy importante que escuches tu cuerpo. Si te duele el estómago o la cabeza, si te sientes muy cansado, con mucho sueño o con tensión muscular, todo eso tiene un significado. ¡Escucha lo que te dice tu cuerpo! Empieza a relajarte más, medita, duerme más, come alimentos más saludables.",
      vocabulary: [
        {category:"Salud — frases útiles", items:[
          {es:"¡Me siento mal!", pt:"Estou me sentindo mal!"},{es:"Llamen a un doctor.", pt:"Chamem um médico."},{es:"Me duele…", pt:"Dói-me... / Estou com dor em..."},
          {es:"Tengo un resfriado.", pt:"Estou resfriado(a)."},{es:"Tengo alergia/soy alérgico(a) a…", pt:"Tenho alergia / sou alérgico(a) a..."},
          {es:"No tengo ninguna enfermedad.", pt:"Não tenho nenhuma doença."},{es:"Estoy embarazada.", pt:"Estou grávida."},
          {es:"¿Tengo que quedarme en cama?", pt:"Eu preciso ficar de cama?"},{es:"Tengo una receta médica para esta medicina.", pt:"Tenho uma receita médica para este remédio."}
        ]},
        {category:"Problemas de salud", items:[
          {es:"Me duele(n) la/el/las/los...", pt:"Dói/Doem o(s)/a(s)..."},{es:"Estoy enfermo(a).", pt:"Estou doente."},{es:"Tengo fiebre", pt:"Estou com febre"},
          {es:"Tengo escalofríos", pt:"Estou com calafrios"},{es:"Tengo diarrea", pt:"Estou com diarreia"},{es:"Tengo jaqueca", pt:"Estou com enxaqueca"},
          {es:"Tengo tos", pt:"Estou com tosse"},{es:"Tengo la nariz tapada", pt:"Estou com o nariz entupido"},{es:"Tengo calambres", pt:"Estou com cãibras"},
          {es:"Catarro/Resfrío/Gripa/Resfriado (sinônimos de gripe)", pt:"Catarro/Resfriado/Gripe (sinônimos)"}
        ]},
        {category:"Partes del cuerpo", items:[
          {es:"Cabeza", pt:"Cabeça"},{es:"Cara", pt:"Rosto"},{es:"Ojos", pt:"Olhos"},{es:"Nariz", pt:"Nariz"},{es:"Boca", pt:"Boca"},{es:"Orejas", pt:"Orelhas"},
          {es:"Cuello", pt:"Pescoço"},{es:"Hombros", pt:"Ombros"},{es:"Brazos", pt:"Braços"},{es:"Manos", pt:"Mãos"},{es:"Dedos", pt:"Dedos"},{es:"Pecho", pt:"Peito"},
          {es:"Espalda", pt:"Costas"},{es:"Barriga/Estómago", pt:"Barriga/Estômago"},{es:"Piernas", pt:"Pernas"},{es:"Rodillas", pt:"Joelhos"},{es:"Pies", pt:"Pés"}
        ]}
      ],
      grammar: [
        {title:"Imperativo afirmativo e negativo — AMAR/COMER/VIVIR", headers:["Pronombre","Amar (afirm.)","Amar (neg.)","Comer (afirm.)","Vivir (afirm.)"], rows:[
          ["Tú/Vos","Ama/Amá","No ames","Come/Comé","Vive/Viví"],["Usted","Ame","No ame","Coma","Viva"],["Nosotros(as)","Amemos","No amemos","Comamos","Vivamos"],["Ustedes","Amen","No amen","Coman","Vivan"]
        ]}
      ],
      notes: ["Modo Imperativo: usado para dar ordens, recomendar, instruir ou conceder permissão."],
      exercises: [
        {type:"fill", q:"_____________ lo que le estoy intentando decir. (escuchar - usted)", answer:"Escuche"},
        {type:"fill", q:"No ___________ por mí. (esperar - tú)", answer:"esperes"},
        {type:"fill", q:"__________ todo. (comer - vosotros)", answer:"Comed"},
        {type:"fill", q:"¡Pedro! ___________, por favor, unas manzanas. (comprar – vos)", answer:"Comprá"},
        {type:"mc", q:"Me _________ la cabeza.", options:["duele","dueles","duelo"], correct:0},
        {type:"mc", q:"Tengo _________.", options:["jaqueca","doctor","receta"], correct:0},
        {type:"translate", from:"pt", text:"Estou me sentindo mal. Dói minha cabeça.", answer:"Me siento mal. Me duele la cabeza."},
        {type:"speak", prompt:"Diga um sintoma em espanhol (Me duele...)", target:"Me duele"}
      ]
    },
    {
      id: "b11", order: 11, title: "Direcciones", subtitle: "Imperativo irregular, localização",
      dialogue: [
        {who:"A", es:"¡Buen día, María! ¿Qué haces por acá?", pt:"Bom dia, María! O que você está fazendo por aqui?"},
        {who:"B", es:"Estoy buscando un lugar adonde tengo que ir. El consultorio está en la avenida Don Juan, 74.", pt:"Estou procurando um lugar aonde preciso ir. O consultório fica na avenida Don Juan, 74."},
        {who:"A", es:"Es cerca de aquí. Gira a la izquierda, sigue recto hasta el supermercado Diones, cruza la calle y ahí va a estar el edificio.", pt:"É perto daqui. Vire à esquerda, siga reto até o supermercado Diones, atravesse a rua e ali vai estar o prédio."},
        {who:"B", es:"¡Ah, sí! Creo que ahora me ubiqué. ¡Muchísimas gracias!", pt:"Ah, sim! Acho que agora eu me situei. Muitíssimo obrigada!"}
      ],
      vocabulary: [
        {category:"Pedir/dar direcciones", items:[
          {es:"Doblar/girar a la izquierda", pt:"Virar à esquerda"},{es:"Doblar/girar a la derecha", pt:"Virar à direita"},{es:"Seguir/Ir todo recto", pt:"Seguir/Ir todo reto"},
          {es:"Cruzar/Atravesar (la calle)", pt:"Cruzar/Atravessar (a rua)"},{es:"Subir/Bajar la calle", pt:"Subir/Descer a rua"},{es:"Volver/Regresar/Retornar", pt:"Voltar/Regressar/Retornar"}
        ]},
        {category:"Ubicación", items:[
          {es:"Está a la izquierda", pt:"Fica à esquerda"},{es:"Está al final de la calle", pt:"Fica no final da rua"},{es:"Está cerca de…", pt:"Fica perto de..."},
          {es:"Está ubicado/se encuentra enfrente a/al", pt:"Fica localizado/se encontra em frente a/ao"},{es:"Está en la esquina de…", pt:"Fica na esquina de..."},{es:"Está al lado de...", pt:"Fica ao lado de..."}
        ]},
        {category:"Preguntas útiles", items:[
          {es:"¿Dónde está la parada de colectivo/la farmacia/el hospital?", pt:"Onde fica o ponto de ônibus/a farmácia/o hospital?"},
          {es:"¿Cómo se va hasta…?", pt:"Como se vai até...?"},{es:"¿Dónde puedo encontrar…?", pt:"Onde posso encontrar...?"}
        ]}
      ],
      grammar: [
        {title:"Imperativo irregular — IR / SEGUIR", headers:["Pronombre","Ir (afirm.)","Ir (neg.)","Seguir (afirm.)"], rows:[
          ["Tú/Vos","Ve/Andá","No vayas","Sigue/Seguí"],["Usted","Vaya","No vaya","Siga"],["Ustedes","Vayan","No vayan","Sigan"]
        ]}
      ],
      notes: [],
      exercises: [
        {type:"fill", q:"¿Dónde está el hospital? (corrige a pontuação)", answer:"¿Dónde está el hospital?"},
        {type:"fill", q:"Sigue recto y el banco va a estar a la mano ________. (izquierda, corrigido de 'isquierda')", answer:"izquierda"},
        {type:"fill", q:"No _____ recto, cariño. (seguir - tú, imperativo negativo)", answer:"sigas"},
        {type:"mc", q:"Como se diz 'virar à esquerda' em espanhol?", options:["Girar a la izquierda","Seguir recto","Cruzar la calle"], correct:0},
        {type:"translate", from:"pt", text:"Onde fica a farmácia mais próxima?", answer:"¿Dónde está la farmacia más cercana?"},
        {type:"speak", prompt:"Dê uma instrução de direção em espanhol (Sigue recto y...)", target:"Sigue recto"}
      ]
    },
    {
      id: "b12", order: 12, title: "Viaje de vacaciones", subtitle: "Futuro próximo, verbos pronominales",
      dialogue: [
        {who:"A", es:"¡Hola, Joana! ¿Qué estás haciendo?", pt:"Olá, Joana! O que você está fazendo?"},
        {who:"B", es:"Estoy arreglando mis maletas, voy a viajar mañana. Voy de vacaciones a una playa con mi novio.", pt:"Estou arrumando minhas malas, vou viajar amanhã. Vou de férias para uma praia com meu namorado."},
        {who:"A", es:"¡Qué lindo! ¿Y cuánto tiempo se van a quedar allá?", pt:"Que legal! E quanto tempo vocês vão ficar lá?"},
        {who:"B", es:"Nos vamos a quedar solo una semana.", pt:"Vamos ficar só uma semana."},
        {who:"A", es:"¡Buen viaje y espero que se diviertan mucho!", pt:"Boa viagem e espero que vocês se divirtam muito!"}
      ],
      vocabulary: [
        {category:"A - AL - A LA - A LOS - A LAS", items:[
          {es:"Voy a un restaurante esta noche.", pt:"Vou a um restaurante esta noite."},{es:"¿Vamos al centro comercial?", pt:"Vamos ao shopping?"},
          {es:"¿Queréis ir a la panadería?", pt:"Vocês querem ir à padaria?"},{es:"¿Qué pasa a los chicos?", pt:"O que está acontecendo com os garotos?"}
        ]}
      ],
      grammar: [
        {title:"Futuro próximo/inmediato — IR + A + infinitivo", headers:["Pronombre","Ir","+ a + infinitivo (ex.)"], rows:[
          ["Yo","voy","viajar"],["Tú/Vos","vas","comer"],["Él/Ella/Usted","va","dormir"],["Nosotros(as)","vamos","salir"],["Vosotros(as)","vais","trabajar"],["Ellos/Ellas/Ustedes","van","estudiar"]
        ]}
      ],
      notes: [
        "Verbos pronominales (me, te, se, nos, os, se) mudam sentido do verbo, indicam ação súbita ou que afeta o sujeito. Ex.: 'Me voy porque está tarde.'; '¿Te acuerdas de...?'; 'Se rompió el pie jugando fútbol.'",
        "Dativo de interés: SE + pronome objeto indireto + verbo 3ª pessoa + sujeito. Ex.: 'Se me cayó el vaso' (= Eu deixei cair o copo, sem querer)."
      ],
      exercises: [
        {type:"fill", q:"Yo _____ a estudiar con mi hija hoy. (ir)", answer:"voy"},
        {type:"fill", q:"¿Qué ______ a hacer mañana? (tú - ir)", answer:"vas"},
        {type:"fill", q:"Vamos _____ mercado esta noche. (a/al)", answer:"al"},
        {type:"fill", q:"Ella ____ puso a llorar. (pronombre)", answer:"se"},
        {type:"fill", q:"Se ____ cayó la botella. (yo)", answer:"me"},
        {type:"mc", q:"¿Por qué quieres ir _____ teatro y no _____ un restaurante?", options:["al - a","a - al","a - a"], correct:0},
        {type:"translate", from:"pt", text:"Vou viajar amanhã de férias.", answer:"Voy a viajar mañana de vacaciones."},
        {type:"speak", prompt:"Diga um plano futuro próximo em espanhol (Voy a...)", target:"Voy a"}
      ]
    },
    {
      id: "b13", order: 13, title: "¿Qué estás haciendo?", subtitle: "Presente continuo, gerundio, interjeições",
      dialogue: [
        {who:"Madre", es:"¡Martina! ¿Podrías ayudarme a limpiar la casa?", pt:"Martina! Você poderia me ajudar a limpar a casa?"},
        {who:"Martina", es:"¡Perdón, mamá!, pero ahora estoy estudiando.", pt:"Desculpa, mãe! Mas agora estou estudando."},
        {who:"Madre", es:"¿A qué hora vas a terminar?", pt:"A que horas você vai terminar?"},
        {who:"Martina", es:"Cuando termine, voy a estar ordenando mi cuarto, jugando, viendo la tele.", pt:"Quando eu terminar, vou estar arrumando meu quarto, brincando, vendo tevê."},
        {who:"Madre", es:"Si cuando vuelva, no hayas terminado todo, vas a tener problemas conmigo.", pt:"Se quando eu voltar você não tiver terminado tudo, vai ter problemas comigo."}
      ],
      vocabulary: [
        {category:"Interjecciones", items:[
          {es:"¡Caramba!", pt:"Caramba!"},{es:"¡Dios mío!", pt:"Meu Deus!"},{es:"¡Bravo!", pt:"Bravo!"},{es:"¡Ojalá!", pt:"Tomara!"},{es:"¡Bah!", pt:"Bah!"},
          {es:"¡Ay!", pt:"Ai!"},{es:"¡Uy!", pt:"Ui!"},{es:"¡Vale!", pt:"Tá bom! / Combinado! (uso espanhol)"},{es:"¡Dale!", pt:"Vai! / Combinado! (uso rio-platense)"},{es:"¡Che!", pt:"Ei! / Cara! (uso argentino)"}
        ]}
      ],
      grammar: [
        {title:"Presente continuo — ESTAR + gerundio", headers:["Pronombre","Estar + gerundio"], rows:[
          ["Yo","estoy trabajando"],["Tú/Vos","estás jugando"],["Él/Ella/Usted","está estudiando"],["Nosotros(as)","estamos limpiando"],["Vosotros(as)","estáis bailando"],["Ellos/Ellas/Ustedes","están viendo"]
        ]},
        {title:"Gerundios importantes", headers:["Infinitivo","Gerundio"], rows:[["Hacer","Haciendo"],["Dormir","Durmiendo"],["Leer","Leyendo"],["Decir","Diciendo"],["Oír","Oyendo"],["Ir","Yendo"],["Sugerir","Sugiriendo"]]}
      ],
      notes: ["Ojalá + subjuntivo, expressa desejo: 'Ojalá gane Brasil.'; 'Ojalá estudies más.'"],
      exercises: [
        {type:"mc", q:"¿Qué ______ haciendo, María?", options:["está","estás","estoy"], correct:1},
        {type:"mc", q:"Yo ________ cepillando mis dientes.", options:["estoy","estás","está"], correct:0},
        {type:"mc", q:"Ahora _________ todos estudiando...", options:["estamos","estáis","están"], correct:0},
        {type:"fill", q:"Gerundio de 'dormir' → ___", answer:"durmiendo"},
        {type:"fill", q:"Gerundio de 'leer' → ___", answer:"leyendo"},
        {type:"mc", q:"¡_________ saquemos la lotería! (desejo)", options:["Ojalá","Vale","Che"], correct:0},
        {type:"translate", from:"pt", text:"O que você está fazendo agora?", answer:"¿Qué estás haciendo ahora?"},
        {type:"speak", prompt:"Diga o que está fazendo agora, em espanhol (Estoy...)", target:"Estoy"}
      ]
    },
    {
      id: "b14", order: 14, title: "Clima", subtitle: "Expressões de tempo, temperatura, números 100-1000",
      text: "El clima brasileño es muy distinto en cada región. En enero se puede sentir el clima tropical, hace calor y hay humedad. En el sur, en la primavera hay muchas flores, en el verano hace muchísimo calor, en el otoño se pueden ver las hojas cayendo y en el invierno hace mucho frío y es posible ver la nieve.",
      vocabulary: [
        {category:"El clima (expresiones)", items:[
          {es:"Hace buen tiempo", pt:"Está fazendo bom tempo"},{es:"Hace mal tiempo", pt:"Está fazendo mau tempo"},{es:"Nieva", pt:"Neva"},
          {es:"Hace calor", pt:"Está fazendo calor"},{es:"Hay niebla", pt:"Há neblina"},{es:"Hace frío", pt:"Está fazendo frio"},{es:"Hay nubes", pt:"Há nuvens"},
          {es:"Hace fresco", pt:"Está fazendo fresco"},{es:"Hay sol", pt:"Há sol"},{es:"Hace sol", pt:"Está fazendo sol"},{es:"Hace viento", pt:"Está ventando"},
          {es:"Hay una tormenta", pt:"Há uma tempestade"},{es:"Está despejado", pt:"Está limpo (céu sem nuvens)"},{es:"Está nublado", pt:"Está nublado"},{es:"Llueve", pt:"Chove"}
        ]},
        {category:"El tiempo está...", items:[
          {es:"Soleado", pt:"Ensolarado"},{es:"Lluvioso", pt:"Chuvoso"},{es:"Ventoso", pt:"Ventoso"},{es:"Nublado", pt:"Nublado"},
          {es:"Frío", pt:"Frio"},{es:"Caliente", pt:"Quente"},{es:"Fresco", pt:"Fresco"},{es:"Agradable", pt:"Agradável"}
        ]}
      ],
      grammar: [
        {title:"Estaciones por hemisferio", headers:["Hemisferio","Verano","Invierno"], rows:[["Sur (Argentina)","Dic-Ene-Feb","Jun-Jul-Ago"],["Norte (España)","Jun-Jul-Ago","Dic-Ene-Feb"]]},
        {title:"Números cardinales 100-1000 (amostra)", headers:["Número","Espanhol"], rows:[["100","Cien"],["200","Doscientos"],["300","Trescientos"],["500","Quinientos"],["1000","Mil"]]}
      ],
      notes: ["Temperatura: 0°C = 32°F; 37°C = 99°F. Ex.: 'Hace 5 grados.'"],
      exercises: [
        {type:"mc", q:"¿Qué tiempo hace cuando el cielo está azul y sin nubes?", options:["Hace sol/Hace calor","Llueve","Nieva"], correct:0},
        {type:"mc", q:"¿Cómo está el cielo cuando hay nubes?", options:["Despejado","Nublado","Soleado"], correct:1},
        {type:"fill", q:"123 → escreva por extenso", answer:"Ciento veintitrés"},
        {type:"fill", q:"1000 → escreva por extenso", answer:"Mil"},
        {type:"fill", q:"308 → escreva por extenso", answer:"Trescientos ocho"},
        {type:"translate", from:"pt", text:"Está fazendo muito frio hoje.", answer:"Hace mucho frío hoy."},
        {type:"speak", prompt:"Descreva o clima de hoje em espanhol (Hace.../Hay...)", target:"Hace"}
      ]
    },
    {
      id: "b15", order: 15, title: "Navidad", subtitle: "Condicional, feriados, repaso geral",
      dialogue: [
        {who:"Hija", es:"¡Mamá y papá! ¿Qué vamos a hacer esta Navidad?", pt:"Mamãe e papai! O que vamos fazer neste Natal?"},
        {who:"Padre", es:"Pensamos en cenar con la familia y después salir a la calle para darles comida a los que no tienen familia o casa.", pt:"Pensamos em jantar com a família e depois sair pela rua para dar comida para quem não tem família ou casa."},
        {who:"Hija", es:"¡Me parece lindo, papá! Me gustaría dibujar el Papá Noel.", pt:"Acho lindo, papai! Eu gostaria de desenhar o Papai Noel."},
        {who:"Padre", es:"¡Sí, buenísima idea! ¿Te gustaría ayudarnos a elegir ropas para regalar?", pt:"Sim, ótima ideia! Você gostaria de nos ajudar a escolher roupas para doar?"},
        {who:"Hija", es:"¡Por supuesto! Quisiera ir ahora.", pt:"Claro! Eu gostaria de ir agora."}
      ],
      vocabulary: [
        {category:"Feriados y fechas importantes", items:[
          {es:"Año Nuevo", pt:"Ano Novo"},{es:"Día de San Valentín", pt:"Dia dos Namorados"},{es:"Pascuas", pt:"Páscoa"},
          {es:"Día Internacional de la Mujer", pt:"Dia Internacional da Mulher"},{es:"Día del Trabajo", pt:"Dia do Trabalho"},{es:"Día de la Madre", pt:"Dia das Mães"},
          {es:"Día del Padre", pt:"Dia dos Pais"},{es:"Halloween", pt:"Halloween"},{es:"Navidad", pt:"Natal"},{es:"Día Mundial del Idioma Español (23 de abril)", pt:"Dia Mundial do Idioma Espanhol (23 de abril)"}
        ]}
      ],
      grammar: [
        {title:"Condicional — GUSTAR / QUERER / QUERER (subj. imperf.)", headers:["Pronombre","Gustaría","Querría","Quisiera"], rows:[
          ["Yo","me gustaría(n)","querría","quisiera"],["Tú/Vos","te gustaría(n)","querrías","quisieras"],["Él/Ella/Usted","le gustaría(n)","querría","quisiera"],["Nosotros(as)","nos gustaría(n)","querríamos","quisiéramos"]
        ]}
      ],
      notes: ["Tener + frío/calor/hambre/sed/sueño/ganas de... (necessidades)."],
      exercises: [
        {type:"mc", q:"¿Qué vamos a comer? ¡Tengo __________!", options:["hambre","frío","ganas"], correct:0},
        {type:"mc", q:"¡Mozo! ___________ un trozo de tarta, por favor.", options:["Quiero","Quisiera","Querré"], correct:1},
        {type:"mc", q:"¡Feliz ___________!", options:["año nuevo","navidad árbol","pascua fiesta"], correct:0},
        {type:"fill", q:"¿Qué feriado se celebra em abril com ovos de chocolate?", answer:"Pascua", altAnswers:["Pascuas"]},
        {type:"fill", q:"Qual é a festa religiosa do nascimento de Jesus Cristo?", answer:"Navidad"},
        {type:"translate", from:"pt", text:"Eles comem muito.", answer:"Ellos comen mucho."},
        {type:"translate", from:"pt", text:"Ela se chama Julieta.", answer:"Ella se llama Julieta."},
        {type:"translate", from:"pt", text:"Eu gostaria de comer batatas fritas e peixe no vapor.", answer:"Me gustaría comer papas fritas y pescado al vapor."},
        {type:"translate", from:"pt", text:"Como está o tempo hoje? Está chovendo?", answer:"¿Cómo está el tiempo hoy? ¿Está lloviendo?"},
        {type:"speak", prompt:"Diga um desejo de festa em espanhol (Me gustaría...)", target:"Me gustaría"}
      ]
    }
  ],
  exam: {
    title: "Examen Final — Nivel Básico",
    passScoreDefault: 70,
    questions: [
      {type:"open", q:"¿Quién eres tú? ¿Podrías presentarte?", sample:"Soy... (nombre, edad, nacionalidad, profesión)"},
      {type:"fill", q:"¿Cuántos años tiene Pedro, en el texto: 'Mi nombre es Pedro, tengo 27 años, estoy casado, tengo 2 hijos y soy abogado.'?", answer:"27", altAnswers:["27 años","veintisiete"]},
      {type:"mc", q:"¡_________! ¿Podría pasar?", options:["Permiso","Hola","Chau"], correct:0},
      {type:"mc", q:"Yo ______ secretaria, ¿y tú?, ¿a qué te _________?", options:["soy - dedicas","es - dedico","eres - dedica"], correct:0},
      {type:"mc", q:"¡____ coche de Luana es muy precioso!", options:["El","La","Un"], correct:0},
      {type:"mc", q:"____ águilas volaban en el cielo.", options:["Los","Las","La"], correct:1},
      {type:"mc", q:"Yo __________ un vaso de agua, ¿es posible?", options:["quisiera","quiero","querré"], correct:0},
      {type:"mc", q:"El día de la semana que más me gusta es el ___________.", options:["Martes","Marte","Martas"], correct:0},
      {type:"mc", q:"Es muy fácil llegar allá. ______ recto y después ______ a la derecha.", options:["Sigue - gira","Sigues - giras","Sigo - giro"], correct:0},
      {type:"mc", q:"Creo que esta noche voy _____ cine.", options:["a el","al","a la"], correct:1},
      {type:"mc", q:"¿A qué hora ____ despiertas, Mariana? ¿A ____ ocho?", options:["te - las","se - los","le - la"], correct:0},
      {type:"mc", q:"¡______ muchísimo calor acá!", options:["Hace","Hay","Es"], correct:0},
      {type:"fill", q:"1° → escreva por extenso (ordinal)", answer:"Primero"},
      {type:"fill", q:"100 → escreva por extenso", answer:"Cien"},
      {type:"fill", q:"Conjugue: Yo ____________. (salir)", answer:"salgo"},
      {type:"fill", q:"Conjugue: Nosotros ___________. (poder)", answer:"podemos"},
      {type:"fill", q:"Conjugue: Ellos ___________. (encontrar)", answer:"encuentran"},
      {type:"fill", q:"Conjugue: Tú ___________. (saber)", answer:"sabes"},
      {type:"fill", q:"Complete os meses que faltam: Enero, Febrero, ___, Abril", answer:"Marzo"},
      {type:"translate", from:"pt", text:"Eu moro com meus pais, meus dois irmãos e minha avó.", answer:"Yo vivo con mis padres, mis dos hermanos y mi abuela."}
    ]
  }
};
