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
        {who:"A", es:"¡Buenos días! ¿Cómo se llama usted?"},
        {who:"B", es:"¡Hola! ¿Cómo le va? Mi nombre es Juárez, ¿y usted?, ¿cómo se llama?"},
        {who:"A", es:"Me llamo María, ¡mucho gusto!"},
        {who:"B", es:"¡Es un placer conocerla y bienvenida a la empresa! ¿De dónde es, María?"},
        {who:"A", es:"¡Gracias! Soy de Brasil pero ahora estoy viviendo aquí, ¿y usted?"},
        {who:"B", es:"Casi todos en la empresa, incluso yo, somos de Venezuela. Hemos trabajado aquí desde hace 2 años, cuando la empresa fue fundada."},
        {who:"A", es:"¡Qué bien! ¿Usted me podría decir dónde está la oficina del responsable por el departamento de Recursos Humanos, por favor?"},
        {who:"B", es:"¡Sí, por supuesto! Pero, ahora ya somos amigos y nos vamos a ver todos los días, entonces esta formalidad no es necesaria."},
        {who:"A", es:"¡Está bien! ¡Gracias una vez más, Juárez!"},
        {who:"B", es:"Sin duda, vas a hacer muchos amigos. ¡Que tengas un buen día! ¡Nos vemos!"},
        {who:"A", es:"¡Hasta luego!"}
      ],
      vocabulary: [
        {category:"Saludos", items:[{es:"¡Hola!"},{es:"¿Qué tal?"},{es:"¿Cómo le va?/¿Cómo te va?"},{es:"¿Cómo está?/¿Cómo estás?"},{es:"¡Buenos días!/¡Buen día!"},{es:"¡Buenas tardes!"},{es:"¡Buenas noches!"}]},
        {category:"Presentaciones", items:[{es:"¿Cómo (tú) te llamas?"},{es:"¿Cómo (usted) se llama?"},{es:"¿Cuál es tu nombre?"},{es:"¿Cuál es su nombre?"},{es:"Soy..."},{es:"Me llamo..."},{es:"Mi nombre es..."},{es:"¡Mucho gusto!"},{es:"¡Un placer!"},{es:"¡Encantado(a)!"},{es:"Te presento a..."},{es:"Le presento a..."}]},
        {category:"Despedidas", items:[{es:"¡Hasta luego!"},{es:"¡Hasta pronto!"},{es:"¡Hasta mañana!"},{es:"¡Nos vemos…!"},{es:"¡Chau(o)!"},{es:"¡Adiós!"},{es:"¡Que tenga(s) un buen día!"}]},
        {category:"Palabras mágicas", items:[{es:"¡Por favor!"},{es:"¡(Muchas) gracias!"},{es:"¡De nada!"},{es:"¡Permiso!"},{es:"¡Perdón!"},{es:"¡Discúlpame! (informal)"},{es:"¡Discúlpeme! (formal)"}]},
        {category:"Pronombres personales", items:[{es:"Yo"},{es:"Tú"},{es:"Él"},{es:"Ella"},{es:"Usted"},{es:"Nosotros/Nosotras"},{es:"Vosotros/Vosotras"},{es:"Ellos/Ellas"},{es:"Ustedes"}]}
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
      vocabulary: [
        {category:"Países, nacionalidades e idiomas", items:[
          {es:"Brasil – Brasileño(a) – Portugués"},{es:"Argentina – Argentino(a) – Español"},{es:"Uruguay – Uruguayo(a) – Español"},{es:"Paraguay – Paraguayo(a) – Español/Guaraní"},{es:"Bolivia – Boliviano(a) – Español"},{es:"Estados Unidos – Americano(a) – Inglés"},{es:"Francia – Francés/Francesa – Francés"},{es:"México – Mexicano(a) – Español"},{es:"Italia – Italiano(a) – Italiano"},{es:"Inglaterra – Inglés/Inglesa – Inglés"},{es:"Alemania – Alemán/Alemana – Alemán"},{es:"Chile – Chileno(a) – Español"},{es:"Canadá – Canadiense – Inglés/Francés"},{es:"Japón – Japonés/Japonesa – Japonés"},{es:"Suiza – Suizo(a) – Alemán/Francés/Italiano"},{es:"Rusia – Ruso(a) – Ruso"},{es:"Ecuador – Ecuatoriano(a) – Español"},{es:"Cuba – Cubano(a) – Español"},{es:"Colombia – Colombiano(a) – Español"},{es:"Australia – Australiano(a) – Inglés"},{es:"China – Chino(a) – Chino"},{es:"España – Español(a) – Español"},{es:"India – Indio(a) – Hindi"},{es:"Grecia – Griego(a) – Griego"},{es:"Polonia – Polaco(a) – Polaco"},{es:"Portugal – Portugués/Portuguesa – Portugués"},{es:"Perú – Peruano(a) – Español"},{es:"Venezuela – Venezolano(a) – Español"},{es:"Egipto – Egipcio(a) – Árabe"},{es:"Israel – Israelí – Hebreo"},{es:"Panamá – Panameño(a) – Español"},{es:"República Dominicana – Dominicano(a) – Español"},{es:"Puerto Rico – Puertorriqueño(a) – Español/Inglés"}
        ]},
        {category:"Frases útiles", items:[{es:"Yo soy Argentino. Vengo de Buenos Aires, Argentina."},{es:"¿De dónde eres?"},{es:"¿De dónde es?"},{es:"¿Qué idioma hablas?"},{es:"¿Hablas (español)?"},{es:"¡Hablas muy bien portugués!"},{es:"¡Me gusta tu acento!"}]},
        {category:"Estado Civil", items:[{es:"Soltero(a)"},{es:"Casado(a)"},{es:"Viudo(a)"},{es:"Separado(a)"},{es:"Divorciado(a)"},{es:"Prometido(a)/Comprometido(a)"},{es:"Novio(a)"}]},
        {category:"Edad", items:[{es:"¿Cuántos años tienes?"},{es:"¿Cuál es tu(su) edad?"},{es:"Tengo (17) años."},{es:"Cumplo ______ mañana."},{es:"¿Cuándo es tu(su) cumpleaños?"},{es:"Mi cumpleaños es el (29 de octubre)."}]},
        {category:"Oficios (profissões)", items:[{es:"Administrador"},{es:"Doctor/Médico"},{es:"Abogado"},{es:"Electricista"},{es:"Analista Contable"},{es:"Enfermero"},{es:"Ingeniero"},{es:"Arquitecto"},{es:"Escritor"},{es:"Artista"},{es:"Fisioterapeuta"},{es:"Gerente Comercial"},{es:"Contador"},{es:"Auditor Interno"},{es:"Mecánico"},{es:"Bombero"},{es:"Conductor"},{es:"Peluquero"},{es:"Vendedor"},{es:"Camarero/Mesero/Mozo"},{es:"Psicólogo"},{es:"Cocinero"},{es:"Recepcionista"},{es:"Dentista"},{es:"Diseñador"},{es:"Secretario(a) bilingüe"},{es:"Guardia de Seguridad"},{es:"Traductor"},{es:"Profesor/maestro"},{es:"Pintor"},{es:"Cajero"},{es:"Panadero"},{es:"Carpintero"},{es:"Piloto"},{es:"Policía"},{es:"Cirujano"},{es:"Programador"}
        ]},
        {category:"Trabajo — frases", items:[{es:"Soy profesor(a)."},{es:"Trabajo con (análisis de costos)."},{es:"Tengo experiencia en/con…."},{es:"¿A qué te dedicas?"},{es:"¿A qué se dedica?"}]}
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
      vocabulary: [
        {category:"Miembros de la familia", items:[{es:"Ahijado(a)"},{es:"Abuelo(a)"},{es:"Bisabuelo(a)"},{es:"Bisnieto(a)"},{es:"Hermano(a) gemelo(a)/mellizo(a)"},{es:"Cuñado(a)"},{es:"Hijastro(a)"},{es:"Esposo(a)/Pareja"},{es:"Ex-esposo(a)"},{es:"Hijo(a)"},{es:"Hijo(a) adoptivo(a)"},{es:"Yerno/Nuera"},{es:"Hermano(a)"},{es:"Nieto(a)"},{es:"Primo(a)"},{es:"Madrastra/Padrastro"},{es:"Madre/Padre"},{es:"Mamá/Papá"},{es:"Madrina/Padrino"},{es:"Marido/Mujer"},{es:"Medio(a) Hermano(a)"},{es:"Sobrino(a)"},{es:"Suegro(a)"},{es:"Tío(a)"}]},
        {category:"Animales (salvajes y mascotas)", items:[{es:"Abeja"},{es:"Gato"},{es:"Águila"},{es:"Jirafa"},{es:"Araña"},{es:"Delfín"},{es:"Avestruz"},{es:"Ballena"},{es:"Cucaracha"},{es:"Caimán/Yacaré"},{es:"Jabalí"},{es:"Buey"},{es:"Mariposa"},{es:"León"},{es:"Caballo"},{es:"Mono"},{es:"Cabra"},{es:"Perro"},{es:"Mosquito"},{es:"Camello"},{es:"Murciélago"},{es:"Canguro"},{es:"Cangrejo"},{es:"Oveja"},{es:"Cigüeña"},{es:"Pájaro"},{es:"Pato"},{es:"Pez"},{es:"Conejo"},{es:"Pingüino"},{es:"Búho/Lechuza"},{es:"Paloma"},{es:"Cocodrilo"},{es:"Cerdo/Chancho"},{es:"Gallina"},{es:"Ratón"},{es:"Elefante"},{es:"Sapo"},{es:"Tortuga"},{es:"Foca"},{es:"Tigre"},{es:"Hormiga"},{es:"Toro"},{es:"Oso"},{es:"Vaca"},{es:"Gallo"},{es:"Cebra"}]}
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
      vocabulary: [
        {category:"Actividades diarias", items:[{es:"Despertarse"},{es:"Levantarse"},{es:"Cepillarse los dientes"},{es:"Peinarse"},{es:"Ducharse/Bañarse"},{es:"Limpiar la casa"},{es:"Ir a trabajar"},{es:"Hacer compras en el supermercado"},{es:"Lavar la ropa sucia/hacer la colada"},{es:"Ir al gimnasio"},{es:"Hacer ejercicios"},{es:"Caminar"},{es:"Salir con los amigos"},{es:"Ver películas/televisión"},{es:"Planchar"},{es:"Vestirse"},{es:"Preparar(se) el desayuno/almuerzo/cena"},{es:"Almorzar/Desayunar/Cenar"},{es:"Cocinar"},{es:"Ir a dormir"},{es:"Acostarse"},{es:"Sacar la basura"},{es:"Hacer la tarea"}]},
        {category:"Adverbios de frecuencia", items:[{es:"Siempre"},{es:"Casi siempre"},{es:"Normalmente"},{es:"Frecuentemente"},{es:"A menudo"},{es:"A veces"},{es:"Raramente"},{es:"Casi nunca"},{es:"Nunca"},{es:"Jamás"},{es:"Una vez por semana"},{es:"Todos los días"},{es:"A diario"}]},
        {category:"Estaciones del año", items:[{es:"Primavera"},{es:"Verano"},{es:"Otoño"},{es:"Invierno"}]}
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
        {who:"A", es:"¡Hola, María! ¿Cómo estás?"},
        {who:"B", es:"¡Hola, Julia! Estoy muy bien, ¿y tú? Supe que estás saliendo con alguien, ¿verdad?"},
        {who:"A", es:"¡Sí! Su nombre es Mateus. ¿Lo conoces?"},
        {who:"B", es:"No. ¿Y qué tal es? ¿Guapo? ¿Buena onda?"},
        {who:"A", es:"¡Es perfecto! Tiene 17 años, es un chico fuerte, rubio, tiene ojos azules, es vanidoso y demasiado celoso."},
        {who:"B", es:"¡Qué lindo eso, amiga! ¡Me alegro por ti!"}
      ],
      vocabulary: [
        {category:"Cabello, ojos, rostro", items:[{es:"Tiene el pelo corto/largo"},{es:"Es pelado/calvo"},{es:"Usa barba/bigote"},{es:"Es moreno(a)/castaño(a)/rubio(a)/pelirrojo(a)"},{es:"Tiene canas"},{es:"Tiene el pelo rizado/liso/ondulado"},{es:"Tiene los ojos azules/verdes/marrones/negros"},{es:"Lleva/usa gafas/lentes"},{es:"Tiene las pestañas largas"},{es:"Tiene las cejas espesas"},{es:"Es narigón/narigona"},{es:"Tiene hoyuelos"}]},
        {category:"Cuerpo/porte", items:[{es:"Es flaco(a)/delgado(a)"},{es:"Es gordo(a)"},{es:"Es fuerte"},{es:"Es débil"},{es:"Tiene espaldas anchas"},{es:"Está en forma"},{es:"Es musculoso(a)"}]},
        {category:"Personalidad y apariencia", items:[{es:"Guapo(a)"},{es:"Hermoso(a)"},{es:"Precioso(a)"},{es:"Encantador(a)"},{es:"Feliz"},{es:"Triste"},{es:"Buena onda"},{es:"Feo(a)"},{es:"Joven"},{es:"Inteligente"},{es:"Viejo(a)"},{es:"Tonto(a)"},{es:"Tranquilo(a)"},{es:"Nervioso(a)"},{es:"Elegante"},{es:"Simpático(a)"},{es:"Antipático(a)"},{es:"Tacaño(a)"},{es:"Ñoño"},{es:"Mentiroso(a)"},{es:"Aburrido(a)"}]},
        {category:"Formas de tratamiento", items:[{es:"Tú/vos, Usted, Señor(a), Don/Doña"},{es:"Entre amigos: tío, colega, cuate, hermano, compadre"},{es:"En el trabajo: Jefe/Jefa, Señor/Señora"}]}
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
        {who:"Camarero", es:"¡Buenas noches, señores! ¿Una mesa para dos?"},
        {who:"Cliente", es:"¡Hola, buenas noches! Sí, para dos, por favor."},
        {who:"Camarero", es:"Aquí tienen el menú y la carta de vinos. Vuelvo en un instante."},
        {who:"Cliente", es:"Quisiera el camarón con alioli y mi mujer el pollo con salsa cuatro quesos."},
        {who:"Camarero", es:"¡Por supuesto! ¿Y qué desean tomar?"},
        {who:"Cliente", es:"¿Qué nos recomiendas?"},
        {who:"Camarero", es:"Tenemos este vino chileno muy especial."},
        {who:"Cliente", es:"¡Camarero! Quisiéramos saber qué hay de postre."},
        {who:"Cliente", es:"¡No, gracias! Solo la cuenta, por favor."},
        {who:"Camarero", es:"¿Usted va a pagar con tarjeta o en efectivo?"},
        {who:"Cliente", es:"En efectivo, aquí tienes. ¡Muchas gracias y buenas noches!"}
      ],
      vocabulary: [
        {category:"Frases del camarero", items:[{es:"¿Cuántas personas, por favor?"},{es:"¿Fumadores o no fumadores?"},{es:"Aquí tienen el menú/la carta."},{es:"¿Qué desean de primer/segundo plato?"},{es:"¿Y para beber?"},{es:"¿Vino blanco o tinto?"},{es:"¿Qué tomarán de postre?"},{es:"Aquí tienen la cuenta."},{es:"¿Van a pagar con tarjeta o en efectivo?"}]},
        {category:"Frases del cliente", items:[{es:"Una mesa para dos personas, por favor."},{es:"He hecho una reserva a nombre de..."},{es:"Quisiera un pollo con vegetales salteados."},{es:"¿Me trae otra servilleta, por favor?"},{es:"¿Nos trae la cuenta, por favor?"},{es:"¡Qué rico/exquisito/delicioso!"}]},
        {category:"Comidas", items:[{es:"Arroz"},{es:"Frijoles/porotos"},{es:"Lentejas"},{es:"Pasta"},{es:"Huevo frito/duro/revuelto"},{es:"Puré de papas"},{es:"Papas fritas"},{es:"Ensalada"},{es:"Sopa"},{es:"Tortilla"},{es:"Pizza"},{es:"Pan"},{es:"Hamburguesa"},{es:"Filete"},{es:"Pollo"},{es:"Pescado"},{es:"Marisco"},{es:"Camarones"},{es:"Salmón"},{es:"Paella de marisco"},{es:"Empanadas"}]},
        {category:"Bebidas", items:[{es:"Agua (con/sin gas)"},{es:"Café"},{es:"Chocolate (caliente)"},{es:"Cerveza"},{es:"Té"},{es:"Leche"},{es:"Jugo/Zumo"},{es:"Gaseosa/refresco"},{es:"Vino (tinto, blanco, rosado)"},{es:"Sangría"}]},
        {category:"Postres", items:[{es:"Pastel/torta/tarta"},{es:"Helado"},{es:"Flan"},{es:"Mousse"}]}
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
      vocabulary: [
        {category:"Materiales escolares y de oficina", items:[{es:"Bolígrafo/Pluma/Lapicero"},{es:"Lápiz"},{es:"Goma (de borrar)"},{es:"Sacapuntas"},{es:"Tijera"},{es:"Cuaderno"},{es:"Regla"},{es:"Carpeta"},{es:"Pegamento"},{es:"Mochila"},{es:"Diccionario"},{es:"Marcador/Rotulador"},{es:"Calculadora"},{es:"Grapadora"},{es:"Impresora"},{es:"Ordenador/Computador(a)"},{es:"Pizarra"},{es:"Papel/Folio/Hoja"},{es:"Documento"},{es:"Papelera"},{es:"Agenda"},{es:"Archivo"},{es:"Teléfono"},{es:"Correo electrónico"}]}
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
        {category:"Partes de la casa", items:[{es:"Casa/vivienda/piso/departamento"},{es:"Habitación/Dormitorio"},{es:"Cuarto de baño"},{es:"Cocina"},{es:"Sala de estar/Living"},{es:"Comedor"},{es:"Escalera"},{es:"Garaje/Cochera"},{es:"Terraza"},{es:"Sótano"},{es:"Jardín"},{es:"Balcón"},{es:"Ático/Buhardilla"},{es:"Piscina/Pileta"},{es:"Chimenea"},{es:"Puerta"},{es:"Ventana"},{es:"Tejado"},{es:"Pared"}]},
        {category:"Adjetivos para objetos", items:[{es:"Agradable"},{es:"Alegre"},{es:"Alto(a)/Bajo(a)"},{es:"Barato(a)/Caro(a)"},{es:"Bonito(a)/Feo(a)"},{es:"Bueno(a)"},{es:"Caliente/Frío(a)"},{es:"Cómodo(a)"},{es:"Corto(a)/Largo(a)"},{es:"Débil/Fuerte"},{es:"Grande/Pequeño(a)"},{es:"Limpio(a)/Sucio(a)"},{es:"Nuevo(a)/Viejo(a)"},{es:"Peligroso(a)"},{es:"Rico(a)"},{es:"Seco(a)/Húmedo(a)"}]},
        {category:"Adverbios de lugar", items:[{es:"Aquí/Acá"},{es:"Ahí/Allí"},{es:"Cerca/Lejos"},{es:"Arriba/Abajo"},{es:"Delante/Detrás"},{es:"Encima/Debajo"},{es:"Adentro/Afuera"}]}
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
        {who:"A", es:"¡Buenos días! ¿Cómo te llamas?"},
        {who:"B", es:"¡Hola! Soy Henrico."},
        {who:"A", es:"¿Podrías contestarnos algunas preguntas sobre gustos y preferencias?"},
        {who:"B", es:"¡Por supuesto!"},
        {who:"A", es:"¿De qué equipo eres hincha?"},
        {who:"B", es:"De River. ¡Lo amo!"},
        {who:"A", es:"¿Qué les gusta más comer cuando están viajando?"},
        {who:"B", es:"A mí me gusta comer pescado y odio comer pizza, mi mujer prefiere pasta a pescado."}
      ],
      vocabulary: [
        {category:"Días de la semana", items:[{es:"Lunes"},{es:"Martes"},{es:"Miércoles"},{es:"Jueves"},{es:"Viernes"},{es:"Sábado"},{es:"Domingo"}]},
        {category:"Meses del año", items:[{es:"Enero"},{es:"Febrero"},{es:"Marzo"},{es:"Abril"},{es:"Mayo"},{es:"Junio"},{es:"Julio"},{es:"Agosto"},{es:"Septiembre"},{es:"Octubre"},{es:"Noviembre"},{es:"Diciembre"}]},
        {category:"Números ordinales", items:[{es:"1º Primero"},{es:"2º Segundo"},{es:"3º Tercero"},{es:"4º Cuarto"},{es:"5º Quinto"},{es:"6º Sexto"},{es:"7º Séptimo"},{es:"8º Octavo"},{es:"9º Noveno"},{es:"10º Décimo"}]}
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
        {category:"Salud — frases útiles", items:[{es:"¡Me siento mal!"},{es:"Llamen a un doctor."},{es:"Me duele…"},{es:"Tengo un resfriado."},{es:"Tengo alergia/soy alérgico(a) a…"},{es:"No tengo ninguna enfermedad."},{es:"Estoy embarazada."},{es:"¿Tengo que quedarme en cama?"},{es:"Tengo una receta médica para esta medicina."}]},
        {category:"Problemas de salud", items:[{es:"Me duele(n) la/el/las/los..."},{es:"Estoy enfermo(a)."},{es:"Tengo fiebre"},{es:"Tengo escalofríos"},{es:"Tengo diarrea"},{es:"Tengo jaqueca"},{es:"Tengo tos"},{es:"Tengo la nariz tapada"},{es:"Tengo calambres"},{es:"Catarro/Resfrío/Gripa/Resfriado (sinônimos de gripe)"}]},
        {category:"Partes del cuerpo", items:[{es:"Cabeza"},{es:"Cara"},{es:"Ojos"},{es:"Nariz"},{es:"Boca"},{es:"Orejas"},{es:"Cuello"},{es:"Hombros"},{es:"Brazos"},{es:"Manos"},{es:"Dedos"},{es:"Pecho"},{es:"Espalda"},{es:"Barriga/Estómago"},{es:"Piernas"},{es:"Rodillas"},{es:"Pies"}]}
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
        {who:"A", es:"¡Buen día, María! ¿Qué haces por acá?"},
        {who:"B", es:"Estoy buscando un lugar adonde tengo que ir. El consultorio está en la avenida Don Juan, 74."},
        {who:"A", es:"Es cerca de aquí. Gira a la izquierda, sigue recto hasta el supermercado Diones, cruza la calle y ahí va a estar el edificio."},
        {who:"B", es:"¡Ah, sí! Creo que ahora me ubiqué. ¡Muchísimas gracias!"}
      ],
      vocabulary: [
        {category:"Pedir/dar direcciones", items:[{es:"Doblar/girar a la izquierda"},{es:"Doblar/girar a la derecha"},{es:"Seguir/Ir todo recto"},{es:"Cruzar/Atravesar (la calle)"},{es:"Subir/Bajar la calle"},{es:"Volver/Regresar/Retornar"}]},
        {category:"Ubicación", items:[{es:"Está a la izquierda"},{es:"Está al final de la calle"},{es:"Está cerca de…"},{es:"Está ubicado/se encuentra enfrente a/al"},{es:"Está en la esquina de…"},{es:"Está al lado de..."}]},
        {category:"Preguntas útiles", items:[{es:"¿Dónde está la parada de colectivo/la farmacia/el hospital?"},{es:"¿Cómo se va hasta…?"},{es:"¿Dónde puedo encontrar…?"}]}
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
        {who:"A", es:"¡Hola, Joana! ¿Qué estás haciendo?"},
        {who:"B", es:"Estoy arreglando mis maletas, voy a viajar mañana. Voy de vacaciones a una playa con mi novio."},
        {who:"A", es:"¡Qué lindo! ¿Y cuánto tiempo se van a quedar allá?"},
        {who:"B", es:"Nos vamos a quedar solo una semana."},
        {who:"A", es:"¡Buen viaje y espero que se diviertan mucho!"}
      ],
      vocabulary: [
        {category:"A - AL - A LA - A LOS - A LAS", items:[{es:"Voy a un restaurante esta noche."},{es:"¿Vamos al centro comercial?"},{es:"¿Queréis ir a la panadería?"},{es:"¿Qué pasa a los chicos?"}]}
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
        {who:"Madre", es:"¡Martina! ¿Podrías ayudarme a limpiar la casa?"},
        {who:"Martina", es:"¡Perdón, mamá!, pero ahora estoy estudiando."},
        {who:"Madre", es:"¿A qué hora vas a terminar?"},
        {who:"Martina", es:"Cuando termine, voy a estar ordenando mi cuarto, jugando, viendo la tele."},
        {who:"Madre", es:"Si cuando vuelva, no hayas terminado todo, vas a tener problemas conmigo."}
      ],
      vocabulary: [
        {category:"Interjecciones", items:[{es:"¡Caramba!"},{es:"¡Dios mío!"},{es:"¡Bravo!"},{es:"¡Ojalá!"},{es:"¡Bah!"},{es:"¡Ay!"},{es:"¡Uy!"},{es:"¡Vale!"},{es:"¡Dale!"},{es:"¡Che!"}]}
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
        {category:"El clima (expresiones)", items:[{es:"Hace buen tiempo"},{es:"Hace mal tiempo"},{es:"Nieva"},{es:"Hace calor"},{es:"Hay niebla"},{es:"Hace frío"},{es:"Hay nubes"},{es:"Hace fresco"},{es:"Hay sol"},{es:"Hace sol"},{es:"Hace viento"},{es:"Hay una tormenta"},{es:"Está despejado"},{es:"Está nublado"},{es:"Llueve"}]},
        {category:"El tiempo está...", items:[{es:"Soleado"},{es:"Lluvioso"},{es:"Ventoso"},{es:"Nublado"},{es:"Frío"},{es:"Caliente"},{es:"Fresco"},{es:"Agradable"}]}
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
        {who:"Hija", es:"¡Mamá y papá! ¿Qué vamos a hacer esta Navidad?"},
        {who:"Padre", es:"Pensamos en cenar con la familia y después salir a la calle para darles comida a los que no tienen familia o casa."},
        {who:"Hija", es:"¡Me parece lindo, papá! Me gustaría dibujar el Papá Noel."},
        {who:"Padre", es:"¡Sí, buenísima idea! ¿Te gustaría ayudarnos a elegir ropas para regalar?"},
        {who:"Hija", es:"¡Por supuesto! Quisiera ir ahora."}
      ],
      vocabulary: [
        {category:"Feriados y fechas importantes", items:[{es:"Año Nuevo"},{es:"Día de San Valentín"},{es:"Pascuas"},{es:"Día Internacional de la Mujer"},{es:"Día del Trabajo"},{es:"Día de la Madre"},{es:"Día del Padre"},{es:"Halloween"},{es:"Navidad"},{es:"Día Mundial del Idioma Español (23 de abril)"}]}
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
