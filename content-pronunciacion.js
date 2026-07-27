/* ==========================================================================
   EspañolYa! — Conteúdo: Módulo BÔNUS · MEJORA DE PRONUNCIACIÓN
   17 situaciones cotidianas y profesionales, cada una con un texto rico de
   contexto + vocabulario amplio y específico + 6-8 frases completas
   (presente/pasado/futuro) para repetir en voz alta — el sistema escucha
   (reconocimiento de voz) y da la pronunciación correcta (síntesis de voz +
   comparación de similitud). Todo en español de España.
   Módulo de curiosidades/práctica oral — sem prova obrigatória.
   ========================================================================== */

const LEVEL_PRONUNCIACION = {
  id: "pronunciacion",
  name: "Mejora de Pronunciación",
  icon: "🗣️",
  colorFrom: "#6A1B9A",
  colorTo: "#AA151B",
  description: "Módulo bônus: 17 situações do dia a dia e do mundo profissional — textos ricos, vocabulário amplo e frases completas para você repetir, o sistema ouve e corrige sua pronúncia em espanhol.",
  lessons: [
    {
      id: "pr1", order: 1, title: "En las Compras", subtitle: "De tiendas por España",
      text: "Ir de compras en España es todo un ejercicio de pronunciación: hay que entender precios, tallas, colores y formas de pago hablados rápido por el dependiente, y también saber preguntar con seguridad. La 'c' antes de 'e/i' y la 'z' se pronuncian en el centro y norte de España como una 'th' inglesa (el llamado ceceo o distinción, muy distinto del seseo latinoamericano) — presta muchísima atención a palabras como 'talla', 'precio', 'efectivo', 'descuento' o 'zapatería', porque este sonido cambia por completo la musicalidad de la frase. Además, en las tiendas españolas es habitual regatear un poco en mercadillos y rebajas, preguntar por la talla superior o inferior, pedir que te guarden una prenda, o solicitar la factura para hacienda si compras para tu empresa. También es importante distinguir 'la caja' (donde se paga) de 'el probador' (donde te pruebas la ropa), y saber usar expresiones típicas como '¿Qué tal me queda?', '¿Tiene esto en otro color?' o 'Me lo llevo'. Practicar estas frases en voz alta, con el ritmo natural de un dependiente español, te ayudará muchísimo a sonar más fluido en situaciones reales de compra, ya sea en un centro comercial grande, en una boutique pequeña o en el mercado tradicional del barrio.",
      textPt: "Fazer compras na Espanha é todo um exercício de pronúncia: é preciso entender preços, tamanhos, cores e formas de pagamento faladas rápido pelo vendedor, e também saber perguntar com segurança. O 'c' antes de 'e/i' e o 'z' são pronunciados no centro e norte da Espanha como um 'th' do inglês (o chamado ceceo ou distinción, bem diferente do seseo latino-americano) — preste muita atenção em palavras como 'talla' (tamanho), 'precio' (preço), 'efectivo' (dinheiro), 'descuento' (desconto) ou 'zapatería' (sapataria), porque esse som muda completamente a musicalidade da frase. Além disso, nas lojas espanholas é comum pechinchar um pouco em feirinhas e liquidações, perguntar pelo tamanho maior ou menor, pedir para reservarem uma peça, ou solicitar a nota fiscal para a empresa. Também é importante distinguir 'la caja' (onde se paga) de 'el probador' (onde você experimenta a roupa), e saber usar expressões típicas como '¿Qué tal me queda?' (Como ficou em mim?), '¿Tiene esto en otro color?' (Tem isso em outra cor?) ou 'Me lo llevo' (Vou levar). Praticar essas frases em voz alta, com o ritmo natural de um vendedor espanhol, vai te ajudar muito a soar mais fluente em situações reais de compra, seja em um shopping grande, em uma boutique pequena ou no mercado tradicional do bairro.",
      vocabulary: [
        { category: "Compras — lugares y personas", items: [
          { es: "el dependiente / la dependienta", pt: "o vendedor / a vendedora" }, { es: "la caja", pt: "o caixa" },
          { es: "el probador", pt: "o provador" }, { es: "el escaparate", pt: "a vitrine" }, { es: "el mercadillo", pt: "a feirinha" },
          { es: "la zapatería", pt: "a sapataria" }, { es: "la boutique", pt: "a boutique" }, { es: "el centro comercial", pt: "o shopping" }
        ]},
        { category: "Compras — acciones y pagos", items: [
          { es: "probarse la ropa", pt: "experimentar a roupa" }, { es: "quedar bien/mal", pt: "ficar bem/mal (vestir)" },
          { es: "pagar en efectivo", pt: "pagar em dinheiro" }, { es: "pagar con tarjeta", pt: "pagar com cartão" },
          { es: "el descuento / la rebaja", pt: "o desconto / a liquidação" }, { es: "el recibo / la factura", pt: "o recibo / a nota fiscal" },
          { es: "devolver / cambiar", pt: "devolver / trocar" }, { es: "regatear", pt: "pechinchar" }, { es: "me lo llevo", pt: "vou levar" }
        ]}
      ],
      notes: ["La 'z' de 'talla' no existe: es 'talla' con doble L (elle), suena parecido a 'y' en España central.", "'Efectivo' lleva el sonido de 'c' suave (th) en 'efec-' — no confundir con 'v' en 'efectivo'.", "El ceceo/distinción se nota mucho en 'precio', 'descuento' y 'zapatería' — practica exagerando un poco el sonido 'th' al principio."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Esta camisa me gusta mucho, pero necesito una talla más grande." },
        { type: "speak", prompt: "Repita (presente):", target: "¿Aceptan tarjeta o solo pagan en efectivo?" },
        { type: "speak", prompt: "Repita (presente):", target: "¿Tiene este modelo en otro color, quizás en azul o en negro?" },
        { type: "speak", prompt: "Repita (pasado):", target: "Ayer compré unos zapatos preciosos y me costaron muy baratos." },
        { type: "speak", prompt: "Repita (pasado):", target: "La semana pasada devolví una chaqueta porque no era de mi talla." },
        { type: "speak", prompt: "Repita (pasado):", target: "El dependiente me hizo un buen descuento porque pagué en efectivo." },
        { type: "speak", prompt: "Repita (futuro):", target: "Mañana voy a comprar un regalo para mi compañera de trabajo." },
        { type: "speak", prompt: "Repita (futuro):", target: "El próximo mes aprovecharemos las rebajas de enero en el centro comercial." }
      ]
    },
    {
      id: "pr2", order: 2, title: "De Paseo y Turismo", subtitle: "Caminando por la ciudad",
      text: "Pasear por una ciudad española es una de las mejores formas de practicar entonación, preguntas y direcciones en voz alta. Al pedir información a un desconocido, la entonación española sube claramente al final de la pregunta, y suele empezar con 'Perdone' o 'Disculpe' como fórmula de cortesía. La 'j' y la 'g' antes de 'e/i' tienen un sonido fuerte, gutural, muy distinto del portugués — palabras como 'viaje', 'gente', 'girar' o 'equipaje' exigen ese sonido marcado en la garganta, casi como una 'h' aspirada con fuerza. Cuando paseas por el casco antiguo de una ciudad española, es habitual encontrarte con una plaza mayor, una catedral, algún mirador con vistas panorámicas, callejones estrechos y comercios centenarios. Es común perderse un poco entre calles empedradas, preguntar por el camino más corto, subir a un campanario o a una muralla, y aprovechar para hacer fotos de los monumentos más emblemáticos. También conviene saber pedir recomendaciones de restaurantes típicos, preguntar los horarios de un museo, o entender indicaciones como 'siga todo recto', 'gire a la derecha en la próxima esquina' o 'está a cinco minutos andando'. Practicar estas situaciones en voz alta te prepara para moverte con soltura por cualquier ciudad española, sea Madrid, Sevilla, Toledo o Santiago de Compostela.",
      textPt: "Passear por uma cidade espanhola é uma das melhores formas de praticar entonação, perguntas e direções em voz alta. Ao pedir informação a um desconhecido, a entonação espanhola sobe claramente no final da pergunta, e costuma começar com 'Perdone' ou 'Disculpe' como fórmula de cortesia. O 'j' e o 'g' antes de 'e/i' têm um som forte, gutural, bem diferente do português — palavras como 'viaje' (viagem), 'gente' (gente/pessoas), 'girar' (virar) ou 'equipaje' (bagagem) exigem esse som marcado na garganta, quase como um 'h' aspirado com força. Quando você passeia pelo centro histórico de uma cidade espanhola, é comum encontrar uma praça principal, uma catedral, algum mirante com vista panorâmica, becos estreitos e comércios centenários. É comum se perder um pouco entre ruas de paralelepípedo, perguntar pelo caminho mais curto, subir a um campanário ou a uma muralha, e aproveitar para tirar fotos dos monumentos mais famosos. Também convém saber pedir recomendações de restaurantes típicos, perguntar os horários de um museu, ou entender indicações como 'siga todo recto' (siga em frente), 'gire a la derecha en la próxima esquina' (vire à direita na próxima esquina) ou 'está a cinco minutos andando' (fica a cinco minutos a pé). Praticar essas situações em voz alta te prepara para se mover com desenvoltura por qualquer cidade espanhola, seja Madri, Sevilha, Toledo ou Santiago de Compostela.",
      vocabulary: [
        { category: "Paseo y Turismo — lugares", items: [
          { es: "el casco antiguo", pt: "o centro histórico" }, { es: "la plaza mayor", pt: "a praça principal" },
          { es: "el mirador", pt: "o mirante" }, { es: "el monumento", pt: "o monumento" }, { es: "la catedral", pt: "a catedral" },
          { es: "el campanario", pt: "o campanário" }, { es: "la muralla", pt: "a muralha" }, { es: "el callejón", pt: "o beco" }
        ]},
        { category: "Paseo y Turismo — verbos y frases", items: [
          { es: "perderse", pt: "se perder" }, { es: "girar a la derecha/izquierda", pt: "virar à direita/esquerda" },
          { es: "seguir todo recto", pt: "seguir em frente" }, { es: "el guía turístico", pt: "o guia turístico" },
          { es: "hacer una foto", pt: "tirar uma foto" }, { es: "estar a X minutos andando", pt: "ficar a X minutos a pé" },
          { es: "¿Me podría indicar cómo llegar a...?", pt: "Poderia me indicar como chegar a...?" }
        ]}
      ],
      notes: ["La 'j' de 'viaje' y 'girar' suena fuerte y gutural — no como la 'j' del portugués, que es suave.", "En 'todo recto', la doble erre no existe, pero la 'r' de 'recto' al inicio de sílaba ya suena fuerte.", "La entonación de una pregunta de dirección sube marcadamente al final: '¿... está muy lejos?' con la voz subiendo en 'lejos'."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Me encanta pasear por el casco antiguo los domingos por la mañana." },
        { type: "speak", prompt: "Repita (presente):", target: "Perdone, ¿el museo queda cerca de aquí o tengo que coger un taxi?" },
        { type: "speak", prompt: "Repita (presente):", target: "Desde este mirador se ve toda la ciudad y la catedral al fondo." },
        { type: "speak", prompt: "Repita (pasado):", target: "El año pasado visitamos Toledo y subimos hasta el mirador más alto." },
        { type: "speak", prompt: "Repita (pasado):", target: "Nos perdimos un poco, pero al final encontramos la plaza mayor." },
        { type: "speak", prompt: "Repita (pasado):", target: "Hicimos muchísimas fotos de la muralla y del campanario de la catedral." },
        { type: "speak", prompt: "Repita (futuro):", target: "Este fin de semana vamos a caminar por el centro histórico." },
        { type: "speak", prompt: "Repita (futuro):", target: "El guía turístico nos explicará la historia del monumento mañana." }
      ]
    },
    {
      id: "pr3", order: 3, title: "En la Cocina", subtitle: "Recetas y sabores",
      text: "La cocina es un tema lleno de vocales fuertes, verbos de acción y palabras rítmicas, perfecto para practicar la fluidez y la velocidad al hablar. Presta mucha atención al sonido de la 'll' (pronunciado como 'y' en gran parte de la España central) en palabras como 'paella', 'cebolla', 'olla' o 'sencillo'. La cocina española tradicional se organiza alrededor de ingredientes como el aceite de oliva, el ajo, la cebolla, el tomate, el pimiento, el azafrán y una enorme variedad de pescados y mariscos, sobre todo en las regiones costeras. Al hablar de una receta, se combinan verbos de preparación como 'picar', 'cortar', 'sofreír', 'remover', 'hornear', 'hervir' o 'dejar reposar', y también expresiones de cantidad y tiempo como 'un chorrito de aceite', 'a fuego lento', 'durante media hora' o 'hasta que dore'. España tiene además una gran diversidad de platos regionales: la paella valenciana, el gazpacho andaluz, la tortilla de patatas, el pulpo a la gallega, el jamón ibérico, o los pintxos vascos, cada uno con su propio vocabulario y su propia forma de prepararlo. Practicar frases sobre cocina en voz alta te ayuda a fijar tanto la pronunciación de sonidos difíciles como un vocabulario riquísimo y muy usado en la vida diaria, ya sea siguiendo una receta escrita, viendo un programa de cocina o compartiendo la mesa con amigos españoles.",
      textPt: "A cozinha é um tema cheio de vogais fortes, verbos de ação e palavras rítmicas, perfeito para praticar a fluência e a velocidade ao falar. Preste muita atenção no som do 'll' (pronunciado como 'y' em boa parte da Espanha central) em palavras como 'paella', 'cebolla' (cebola), 'olla' (panela) ou 'sencillo' (simples). A culinária espanhola tradicional se organiza em torno de ingredientes como o azeite de oliva, o alho, a cebola, o tomate, o pimentão, o açafrão e uma enorme variedade de peixes e frutos do mar, principalmente nas regiões costeiras. Ao falar de uma receita, combinam-se verbos de preparo como 'picar', 'cortar', 'refogar', 'mexer', 'assar', 'ferver' ou 'deixar descansar', e também expressões de quantidade e tempo como 'um fiozinho de azeite', 'em fogo baixo', 'por meia hora' ou 'até dourar'. A Espanha tem ainda uma grande diversidade de pratos regionais: a paella valenciana, o gaspacho andaluz, a tortilha de batatas, o polvo à galega, o presunto ibérico, ou os pintxos bascos, cada um com seu próprio vocabulário e sua própria forma de preparo. Praticar frases sobre culinária em voz alta ajuda a fixar tanto a pronúncia de sons difíceis quanto um vocabulário riquíssimo e muito usado no dia a dia, seja seguindo uma receita escrita, assistindo a um programa de culinária ou compartilhando a mesa com amigos espanhóis.",
      vocabulary: [
        { category: "Cocina — utensilios e ingredientes", items: [
          { es: "la sartén", pt: "a frigideira" }, { es: "la olla", pt: "a panela" }, { es: "el aceite de oliva", pt: "o azeite de oliva" },
          { es: "el ajo", pt: "o alho" }, { es: "la cebolla", pt: "a cebola" }, { es: "el azafrán", pt: "o açafrão" },
          { es: "el marisco", pt: "os frutos do mar" }, { es: "el horno", pt: "o forno" }
        ]},
        { category: "Cocina — verbos de preparación", items: [
          { es: "picar / cortar", pt: "picar / cortar" }, { es: "sofreír", pt: "refogar" }, { es: "remover / mezclar", pt: "mexer / misturar" },
          { es: "hornear", pt: "assar" }, { es: "hervir", pt: "ferver" }, { es: "dejar reposar", pt: "deixar descansar" },
          { es: "a fuego lento/fuerte", pt: "em fogo baixo/alto" }, { es: "hasta que dore", pt: "até dourar" }
        ]}
      ],
      notes: ["La 'll' de 'paella', 'cebolla' y 'olla' suena como una 'y' fuerte en el centro de España.", "La 'h' de 'horno' es siempre muda — nunca se pronuncia.", "'Azafrán' y 'marisco' llevan la sílaba tónica al final o casi al final — cuida el acento natural sin forzarlo."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Primero pico la cebolla y después la sofrío en aceite de oliva." },
        { type: "speak", prompt: "Repita (presente):", target: "Esta receta lleva arroz, pollo y un poco de azafrán." },
        { type: "speak", prompt: "Repita (presente):", target: "Siempre dejo la salsa reposar unos minutos antes de servirla." },
        { type: "speak", prompt: "Repita (pasado):", target: "El domingo pasado cociné una paella para toda mi familia." },
        { type: "speak", prompt: "Repita (pasado):", target: "Dejé la salsa a fuego lento durante media hora." },
        { type: "speak", prompt: "Repita (pasado):", target: "Compré marisco fresco en el mercado y lo cociné esa misma noche." },
        { type: "speak", prompt: "Repita (futuro):", target: "Esta noche voy a preparar una tortilla de patatas." },
        { type: "speak", prompt: "Repita (futuro):", target: "El fin de semana probaremos una receta nueva de pescado al horno." }
      ]
    },
    {
      id: "pr4", order: 4, title: "En el Aeropuerto", subtitle: "Vuelos, maletas y trámites",
      text: "El aeropuerto exige claridad al hablar rápido y bajo presión: horarios, puertas de embarque, números de vuelo, y muchas veces cambios de última hora que hay que entender de inmediato por megafonía. Practicar los números y el alfabeto en español es fundamental en este contexto, ya que los números de vuelo, las puertas de embarque y los asientos se dicen constantemente. Todo el proceso empieza en el mostrador de facturación, donde se entrega el pasaporte, se factura el equipaje y se recibe la tarjeta de embarque; después viene el control de seguridad, donde hay que quitarse el cinturón y los objetos metálicos, y finalmente la sala de espera, desde donde se accede a la puerta de embarque correspondiente. Es habitual escuchar anuncios como 'Última llamada para los pasajeros del vuelo con destino a...', 'El vuelo sufre un retraso de...' o 'Por favor, diríjanse a la puerta número...'. También conviene saber vocabulario para imprevistos: un vuelo cancelado, una conexión perdida, un equipaje extraviado, o la necesidad de cambiar de asiento. 'Embarque' y 'equipaje' tienen el sonido fuerte de la 'j'/'g', muy característico del español, y hay que practicarlo sin suavizarlo, tal como se hace con 'viaje' o 'gente'. Dominar estas frases te dará mucha más tranquilidad en cualquier aeropuerto de habla hispana, ya sea viajando por turismo o por trabajo.",
      textPt: "O aeroporto exige clareza ao falar rápido e sob pressão: horários, portões de embarque, números de voo, e muitas vezes mudanças de última hora que é preciso entender imediatamente pela sonorização. Praticar os números e o alfabeto em espanhol é fundamental nesse contexto, já que os números de voo, os portões de embarque e os assentos são ditos o tempo todo. Todo o processo começa no balcão de check-in, onde se entrega o passaporte, se despacha a bagagem e se recebe o cartão de embarque; depois vem o controle de segurança, onde é preciso tirar o cinto e os objetos metálicos, e finalmente a sala de espera, de onde se acessa o portão de embarque correspondente. É comum ouvir anúncios como 'Última llamada para los pasajeros del vuelo con destino a...' (última chamada para os passageiros do voo com destino a...), 'El vuelo sufre un retraso de...' (o voo sofre um atraso de...) ou 'Por favor, diríjanse a la puerta número...' (por favor, dirijam-se ao portão número...). Também convém saber vocabulário para imprevistos: um voo cancelado, uma conexão perdida, uma bagagem extraviada, ou a necessidade de trocar de assento. 'Embarque' e 'equipaje' têm o som forte do 'j'/'g', muito característico do espanhol, e é preciso praticá-lo sem suavizar, assim como se faz com 'viaje' ou 'gente'. Dominar essas frases vai te dar muito mais tranquilidade em qualquer aeroporto de língua espanhola, seja viajando a turismo ou a trabalho.",
      vocabulary: [
        { category: "Aeropuerto — trámites", items: [
          { es: "el mostrador de facturación", pt: "o balcão de check-in" }, { es: "la puerta de embarque", pt: "o portão de embarque" },
          { es: "el equipaje de mano", pt: "a bagagem de mão" }, { es: "facturar la maleta", pt: "despachar a mala" },
          { es: "la tarjeta de embarque", pt: "o cartão de embarque" }, { es: "el control de seguridad", pt: "o controle de segurança" },
          { es: "la sala de espera", pt: "a sala de espera" }
        ]},
        { category: "Aeropuerto — imprevistos", items: [
          { es: "el vuelo con retraso", pt: "o voo atrasado" }, { es: "el vuelo cancelado", pt: "o voo cancelado" },
          { es: "perder la conexión", pt: "perder a conexão" }, { es: "el equipaje extraviado", pt: "a bagagem extraviada" },
          { es: "aterrizar / despegar", pt: "aterrissar / decolar" }, { es: "la última llamada", pt: "a última chamada" }
        ]}
      ],
      notes: ["'Embarque' y 'equipaje' tienen el sonido fuerte de la 'j'/'g' — practica sin suavizarlo.", "La 'q' de 'equipaje' y 'facturar' se pronuncia como 'k', sin sonido de 'u'.", "En los anuncios de megafonía, presta atención al ritmo rápido y a los números de vuelo/puerta dichos uno por uno."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Mi vuelo sale a las siete, así que llego con dos horas de antelación." },
        { type: "speak", prompt: "Repita (presente):", target: "Siempre facturo la maleta grande y llevo solo el equipaje de mano." },
        { type: "speak", prompt: "Repita (presente):", target: "En el control de seguridad hay que quitarse el cinturón y los zapatos." },
        { type: "speak", prompt: "Repita (pasado):", target: "El vuelo se retrasó dos horas por culpa del mal tiempo." },
        { type: "speak", prompt: "Repita (pasado):", target: "Perdí la conexión y tuve que esperar en el aeropuerto toda la tarde." },
        { type: "speak", prompt: "Repita (pasado):", target: "La aerolínea extravió mi maleta y tardó tres días en encontrarla." },
        { type: "speak", prompt: "Repita (futuro):", target: "El próximo viaje de auditoría lo haré en el vuelo de la mañana." },
        { type: "speak", prompt: "Repita (futuro):", target: "Llegaremos al aeropuerto con tiempo de sobra para pasar el control." }
      ]
    },
    {
      id: "pr5", order: 5, title: "En el Tránsito", subtitle: "Coches, atascos y direcciones",
      text: "Hablar de tránsito en España significa hablar de 'atascos', no de 'tráfico' como en portugués — el vocabulario cambia bastante y conviene aprenderlo bien, sobre todo si vas a alquilar un coche o a moverte en las horas punta de una gran ciudad. Practica también las órdenes y consejos con el imperativo, muy usados al dar direcciones de conducción: 'gira aquí', 'para en el semáforo', 'no adelantes ahora'. En una ciudad española, es habitual toparse con atascos kilométricos en las horas de entrada y salida del trabajo, calles cortadas por obras, zonas de aparcamiento regulado (la llamada 'zona azul' o 'zona verde'), y carriles exclusivos para autobuses o bicicletas. También es importante conocer el vocabulario de las autopistas: el peaje, el carril de la derecha para adelantar, el área de servicio para descansar en viajes largos, y las señales de tráfico. Al conducir, se habla constantemente de poner el intermitente, ceder el paso, respetar el límite de velocidad, y abrocharse el cinturón de seguridad antes de arrancar. En situaciones de emergencia, es útil saber pedir ayuda en la carretera, describir una avería o un accidente leve, y entender las indicaciones de la Guardia Civil de Tráfico. Practicar estas frases en voz alta te prepara para desenvolverte con soltura tanto conduciendo como usando el transporte público en cualquier ciudad española.",
      textPt: "Falar de trânsito na Espanha significa falar de 'atascos' (engarrafamentos), não de 'tráfico' como em português — o vocabulário muda bastante e convém aprendê-lo bem, principalmente se você for alugar um carro ou se locomover nos horários de pico de uma grande cidade. Pratique também as ordens e conselhos no imperativo, muito usados ao dar instruções de condução: 'gira aquí' (vire aqui), 'para en el semáforo' (pare no semáforo), 'no adelantes ahora' (não ultrapasse agora). Em uma cidade espanhola, é comum encontrar engarrafamentos quilométricos nos horários de entrada e saída do trabalho, ruas fechadas por obras, zonas de estacionamento regulado (a chamada 'zona azul' ou 'zona verde'), e faixas exclusivas para ônibus ou bicicletas. Também é importante conhecer o vocabulário das rodovias: o pedágio, a faixa da direita para ultrapassar, a área de serviço para descansar em viagens longas, e as placas de trânsito. Ao dirigir, fala-se constantemente de ligar a seta, dar preferência, respeitar o limite de velocidade, e colocar o cinto de segurança antes de dar partida. Em situações de emergência, é útil saber pedir ajuda na estrada, descrever uma pane ou um acidente leve, e entender as indicações da Guarda Civil de Trânsito. Praticar essas frases em voz alta te prepara para se virar com desenvoltura tanto dirigindo quanto usando o transporte público em qualquer cidade espanhola.",
      vocabulary: [
        { category: "Tránsito — ciudad", items: [
          { es: "el atasco", pt: "o engarrafamento" }, { es: "el semáforo", pt: "o semáforo" }, { es: "el carril", pt: "a faixa/pista" },
          { es: "la zona azul/verde", pt: "a zona de estacionamento regulado" }, { es: "aparcar", pt: "estacionar" },
          { es: "el carril bici/bus", pt: "a ciclofaixa / faixa de ônibus" }, { es: "ceder el paso", pt: "dar preferência" }
        ]},
        { category: "Tránsito — carretera y emergencias", items: [
          { es: "el peaje", pt: "o pedágio" }, { es: "el área de servicio", pt: "a área de serviço/posto" },
          { es: "adelantar", pt: "ultrapassar" }, { es: "poner el intermitente", pt: "ligar a seta" },
          { es: "el cinturón de seguridad", pt: "o cinto de segurança" }, { es: "la avería", pt: "a pane" },
          { es: "el límite de velocidad", pt: "o limite de velocidade" }
        ]}
      ],
      notes: ["'Aparcar' (não 'estacionar') es la palabra habitual en España.", "La 'll' de 'atasco kilométrico' no aparece, pero cuida el sonido fuerte de la 'k' en 'kilométrico'.", "El imperativo de las indicaciones ('gira', 'para', 'sigue') tiene un ritmo corto y directo — practica sin alargar las vocales."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Siempre hay un atasco enorme a la salida de Madrid a esta hora." },
        { type: "speak", prompt: "Repita (presente):", target: "Es difícil aparcar en el centro entre semana." },
        { type: "speak", prompt: "Repita (presente):", target: "Antes de adelantar, siempre pongo el intermitente y miro el retrovisor." },
        { type: "speak", prompt: "Repita (pasado):", target: "Ayer tardé una hora más por culpa de un atasco kilométrico." },
        { type: "speak", prompt: "Repita (pasado):", target: "Un coche se paró en medio del carril y todos tuvimos que frenar." },
        { type: "speak", prompt: "Repita (pasado):", target: "Tuvimos una avería en la autopista y llamamos a la grúa." },
        { type: "speak", prompt: "Repita (futuro):", target: "Mañana saldré más temprano para evitar el tráfico." },
        { type: "speak", prompt: "Repita (futuro):", target: "El nuevo peaje reducirá el número de coches en la autopista." }
      ]
    },
    {
      id: "pr6", order: 6, title: "Entrevista de Trabajo", subtitle: "Hablando de tu experiencia",
      text: "En una entrevista de trabajo se combinan los tres tiempos naturalmente: el presente para describir quién eres y qué haces actualmente, el pasado para contar tu experiencia y tu formación, y el futuro para hablar de tus objetivos y expectativas dentro de la empresa. Cuida mucho la entonación: en España las preguntas suben de tono claramente al final, y el entrevistador espera respuestas seguras, ni demasiado largas ni demasiado cortas. Una entrevista típica sigue una estructura bastante predecible: primero te piden que te presentes brevemente ('Hábleme un poco de usted'), después preguntan por tu experiencia laboral previa, tus estudios y certificaciones, tus puntos fuertes y débiles, tu disponibilidad horaria y salarial, y por qué te interesa ese puesto en concreto. También es habitual que te pregunten cómo resolverías situaciones hipotéticas de trabajo en equipo, manejo de conflictos o gestión del estrés. Al final, casi siempre te dan la oportunidad de hacer tus propias preguntas sobre el puesto, el equipo o las posibilidades de crecimiento dentro de la empresa. Vocabulario clave incluye 'el currículum', 'la carta de presentación', 'las referencias laborales', 'el periodo de prueba' y 'las condiciones contractuales'. Practicar respuestas completas en voz alta, no solo palabras sueltas, es la mejor forma de llegar preparado y sonar natural, seguro y profesional durante toda la conversación.",
      textPt: "Numa entrevista de emprego combinam-se os três tempos naturalmente: o presente para descrever quem você é e o que faz atualmente, o passado para contar sua experiência e formação, e o futuro para falar de seus objetivos e expectativas dentro da empresa. Cuide muito a entonação: na Espanha as perguntas sobem de tom claramente no final, e o entrevistador espera respostas seguras, nem longas demais nem curtas demais. Uma entrevista típica segue uma estrutura bastante previsível: primeiro pedem que você se apresente brevemente ('Hábleme un poco de usted' — me fale um pouco sobre você), depois perguntam pela sua experiência profissional anterior, seus estudos e certificações, seus pontos fortes e fracos, sua disponibilidade de horário e salarial, e por que você tem interesse naquela vaga específica. Também é comum perguntarem como você resolveria situações hipotéticas de trabalho em equipe, gestão de conflitos ou controle do estresse. No final, quase sempre te dão a oportunidade de fazer suas próprias perguntas sobre o cargo, a equipe ou as possibilidades de crescimento dentro da empresa. Vocabulário-chave inclui 'el currículum' (o currículo), 'la carta de presentación' (a carta de apresentação), 'las referencias laborales' (as referências profissionais), 'el periodo de prueba' (o período de experiência) e 'las condiciones contractuales' (as condições contratuais). Praticar respostas completas em voz alta, não só palavras soltas, é a melhor forma de chegar preparado e soar natural, seguro e profissional durante toda a conversa.",
      vocabulary: [
        { category: "Entrevista — documentos y proceso", items: [
          { es: "el currículum", pt: "o currículo" }, { es: "la carta de presentación", pt: "a carta de apresentação" },
          { es: "las referencias laborales", pt: "as referências profissionais" }, { es: "el periodo de prueba", pt: "o período de experiência" },
          { es: "la entrevista personal/grupal", pt: "a entrevista individual/em grupo" }, { es: "la selección de personal", pt: "a seleção de pessoal" }
        ]},
        { category: "Entrevista — preguntas frecuentes", items: [
          { es: "la experiencia laboral", pt: "a experiência profissional" }, { es: "el puesto de trabajo", pt: "o cargo/vaga" },
          { es: "las fortalezas y debilidades", pt: "os pontos fortes e fracos" }, { es: "la disponibilidad", pt: "a disponibilidade" },
          { es: "las condiciones contractuales", pt: "as condições contratuais" }, { es: "el salario", pt: "o salário" }, { es: "contratar", pt: "contratar" }
        ]}
      ],
      notes: ["La entonación de las preguntas en español sube claramente al final — practícalo con '¿Por qué le interesa este puesto?'", "'Currículum' se pronuncia con acento en la 'i': cu-rrí-cu-lum.", "'Contratar' y 'contractuales' comparten raíz — cuida la 't' clara en ambas, sin suavizarla."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Soy consultor y auditor con más de quince años de experiencia." },
        { type: "speak", prompt: "Repita (presente):", target: "Actualmente trabajo con normas ISO de calidad y medio ambiente." },
        { type: "speak", prompt: "Repita (presente):", target: "Mi disponibilidad para viajar es total, incluso a nivel internacional." },
        { type: "speak", prompt: "Repita (pasado):", target: "Trabajé varios años en una empresa de certificación internacional." },
        { type: "speak", prompt: "Repita (pasado):", target: "Estudié un máster en ingeniería industrial hace algunos años." },
        { type: "speak", prompt: "Repita (pasado):", target: "Envié mi currículum y mi carta de presentación la semana pasada." },
        { type: "speak", prompt: "Repita (futuro):", target: "En este puesto quiero desarrollar nuevos proyectos de consultoría." },
        { type: "speak", prompt: "Repita (futuro):", target: "Con el tiempo me gustaría liderar un equipo de auditores." }
      ]
    },
    {
      id: "pr7", order: 7, title: "En la Auditoría", subtitle: "El día a día del auditor",
      text: "Las palabras del mundo de la auditoría suelen ser largas y con muchas sílabas — 'conformidad', 'trazabilidad', 'procedimiento', 'documentación', 'certificación' — y por eso conviene practicar dividiéndolas en sílabas antes de decir la frase completa, sin acelerar demasiado. Una auditoría normalmente sigue un proceso estructurado: la reunión de apertura, donde el equipo auditor presenta el alcance, los objetivos y los criterios de la auditoría; el trabajo de campo, donde se revisan documentos, se entrevista a los responsables de cada área y se buscan evidencias objetivas; y la reunión de cierre, donde se presentan los hallazgos, ya sean no conformidades mayores, no conformidades menores u observaciones de mejora. El auditor necesita dominar verbos como 'verificar', 'constatar', 'evidenciar', 'incumplir', 'subsanar' y 'cerrar', además de expresiones típicas de los informes como 'se ha detectado que...', 'se recomienda...' o 'queda pendiente de verificación...'. También es fundamental el vocabulario de las normas ISO más comunes: la ISO 9001 de calidad, la ISO 14001 de medio ambiente, la ISO 45001 de seguridad y salud ocupacional, y la ISO/IEC 27001 de seguridad de la información. Practicar estas frases en voz alta, con calma y buena dicción, es esencial para transmitir profesionalismo y claridad durante toda una auditoría, tanto al hablar con el auditado como al redactar el informe final.",
      textPt: "As palavras do mundo da auditoria costumam ser longas e com muitas sílabas — 'conformidad' (conformidade), 'trazabilidad' (rastreabilidade), 'procedimiento' (procedimento), 'documentación' (documentação), 'certificación' (certificação) — e por isso convém praticar dividindo-as em sílabas antes de dizer a frase completa, sem acelerar demais. Uma auditoria normalmente segue um processo estruturado: a reunião de abertura, onde a equipe auditora apresenta o escopo, os objetivos e os critérios da auditoria; o trabalho de campo, onde se revisam documentos, se entrevistam os responsáveis de cada área e se buscam evidências objetivas; e a reunião de encerramento, onde são apresentados os achados, sejam não conformidades maiores, não conformidades menores ou observações de melhoria. O auditor precisa dominar verbos como 'verificar', 'constatar', 'evidenciar', 'descumprir', 'sanar' e 'fechar', além de expressões típicas dos relatórios como 'se ha detectado que...' (foi detectado que...), 'se recomienda...' (recomenda-se...) ou 'queda pendiente de verificación...' (fica pendente de verificação...). Também é fundamental o vocabulário das normas ISO mais comuns: a ISO 9001 de qualidade, a ISO 14001 de meio ambiente, a ISO 45001 de segurança e saúde ocupacional, e a ISO/IEC 27001 de segurança da informação. Praticar essas frases em voz alta, com calma e boa dicção, é essencial para transmitir profissionalismo e clareza durante toda uma auditoria, tanto ao falar com o auditado quanto ao redigir o relatório final.",
      vocabulary: [
        { category: "Auditoría — proceso", items: [
          { es: "la reunión de apertura/cierre", pt: "a reunião de abertura/encerramento" }, { es: "el alcance de la auditoría", pt: "o escopo da auditoria" },
          { es: "los criterios de auditoría", pt: "os critérios de auditoria" }, { es: "la evidencia objetiva", pt: "a evidência objetiva" },
          { es: "el trabajo de campo", pt: "o trabalho de campo" }, { es: "el auditado", pt: "o auditado" }
        ]},
        { category: "Auditoría — hallazgos y normas", items: [
          { es: "la no conformidad mayor/menor", pt: "a não conformidade maior/menor" }, { es: "la observación de mejora", pt: "a observação de melhoria" },
          { es: "el hallazgo", pt: "o achado" }, { es: "cerrar la no conformidad", pt: "fechar a não conformidade" },
          { es: "subsanar", pt: "sanar/corrigir" }, { es: "el sistema de gestión", pt: "o sistema de gestão" }
        ]}
      ],
      notes: ["'Trazabilidad' se divide: tra-za-bi-li-dad — cinco sílabas, con acento en la última.", "En 'conformidad', el acento cae en la última sílaba: con-for-mi-DAD.", "'Subsanar' tiene la 's' inicial y la 'b' bien marcadas — no las juntes ni las suavices."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Reviso la trazabilidad de los documentos antes de cerrar el hallazgo." },
        { type: "speak", prompt: "Repita (presente):", target: "El auditado presenta la evidencia objetiva durante la reunión de apertura." },
        { type: "speak", prompt: "Repita (presente):", target: "En cada auditoría verificamos el sistema de gestión de calidad completo." },
        { type: "speak", prompt: "Repita (pasado):", target: "Detectamos dos no conformidades menores en el área de producción." },
        { type: "speak", prompt: "Repita (pasado):", target: "El equipo entregó el informe final al comité la semana pasada." },
        { type: "speak", prompt: "Repita (pasado):", target: "El auditado subsanó todas las observaciones antes del plazo acordado." },
        { type: "speak", prompt: "Repita (futuro):", target: "La próxima auditoría se enfocará en la gestión de riesgos." },
        { type: "speak", prompt: "Repita (futuro):", target: "Cerraremos todas las no conformidades antes del próximo trimestre." }
      ]
    },
    {
      id: "pr8", order: 8, title: "En la Consultoría", subtitle: "Diagnóstico y recomendaciones",
      text: "El lenguaje de la consultoría mezcla verbos de análisis (analizar, diagnosticar, recomendar, priorizar) con expresiones de cortesía y persuasión, ya que el consultor necesita convencer al cliente de que sus recomendaciones son las correctas sin sonar impositivo. Practica el ritmo pausado y seguro típico de una presentación formal, con pausas claras entre ideas. Un proyecto de consultoría suele empezar con un diagnóstico inicial, donde se analiza la situación actual de la empresa, se identifican brechas (o 'gaps') entre lo que existe y lo que se necesita, y se prioriza qué problemas resolver primero según su impacto y urgencia. A partir de ahí, el consultor elabora un plan de acción con objetivos claros, plazos definidos y responsables asignados, y lo presenta al cliente en una reunión formal, normalmente apoyado en una presentación con gráficos y datos concretos. Vocabulario esencial incluye 'el diagnóstico', 'la brecha', 'el plan de acción', 'el indicador de desempeño', 'el retorno de la inversión' y 'la hoja de ruta'. También es importante saber manejar objeciones del cliente con frases como 'Entiendo su preocupación, pero...' o 'Le propongo una alternativa...'. Practicar estas frases en voz alta, con seguridad y buena dicción, es fundamental para transmitir credibilidad y liderazgo durante todo el proceso de consultoría, desde la primera reunión hasta la entrega final del proyecto.",
      textPt: "A linguagem da consultoria mistura verbos de análise (analisar, diagnosticar, recomendar, priorizar) com expressões de cortesia e persuasão, já que o consultor precisa convencer o cliente de que suas recomendações são as corretas sem soar impositivo. Pratique o ritmo pausado e seguro típico de uma apresentação formal, com pausas claras entre ideias. Um projeto de consultoria costuma começar com um diagnóstico inicial, onde se analisa a situação atual da empresa, identificam-se lacunas (ou 'gaps') entre o que existe e o que é necessário, e prioriza-se quais problemas resolver primeiro de acordo com seu impacto e urgência. A partir daí, o consultor elabora um plano de ação com objetivos claros, prazos definidos e responsáveis designados, e o apresenta ao cliente em uma reunião formal, normalmente apoiado em uma apresentação com gráficos e dados concretos. Vocabulário essencial inclui 'el diagnóstico' (o diagnóstico), 'la brecha' (a lacuna), 'el plan de acción' (o plano de ação), 'el indicador de desempeño' (o indicador de desempenho), 'el retorno de la inversión' (o retorno do investimento) e 'la hoja de ruta' (o roteiro/plano de ação). Também é importante saber lidar com objeções do cliente com frases como 'Entiendo su preocupación, pero...' (entendo sua preocupação, mas...) ou 'Le propongo una alternativa...' (proponho uma alternativa...). Praticar essas frases em voz alta, com segurança e boa dicção, é fundamental para transmitir credibilidade e liderança durante todo o processo de consultoria, desde a primeira reunião até a entrega final do projeto.",
      vocabulary: [
        { category: "Consultoría — diagnóstico", items: [
          { es: "el diagnóstico", pt: "o diagnóstico" }, { es: "la brecha / el gap", pt: "a lacuna" },
          { es: "priorizar", pt: "priorizar" }, { es: "el impacto y la urgencia", pt: "o impacto e a urgência" },
          { es: "la situación actual", pt: "a situação atual" }, { es: "el análisis de causa raíz", pt: "a análise de causa raiz" }
        ]},
        { category: "Consultoría — plan y presentación", items: [
          { es: "el plan de acción", pt: "o plano de ação" }, { es: "la hoja de ruta", pt: "o roteiro/plano" },
          { es: "el indicador de desempeño", pt: "o indicador de desempenho" }, { es: "el retorno de la inversión", pt: "o retorno do investimento" },
          { es: "implementar mejoras", pt: "implementar melhorias" }, { es: "el cliente", pt: "o cliente" }
        ]}
      ],
      notes: ["'Diagnóstico' lleva acento en la 'o': diag-NÓS-ti-co — un error común es acentuar mal esta palabra.", "La 'g' de 'diagnóstico' es suave (como en 'gato'), no fuerte como en 'gente'.", "'Priorizar' y 'implementar' son palabras largas — practica separando bien cada sílaba antes de acelerar."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Analizamos los procesos de la empresa y recomendamos mejoras concretas." },
        { type: "speak", prompt: "Repita (presente):", target: "El diagnóstico muestra una brecha importante en la gestión de calidad." },
        { type: "speak", prompt: "Repita (presente):", target: "Siempre priorizamos los problemas con mayor impacto y urgencia." },
        { type: "speak", prompt: "Repita (pasado):", target: "Presentamos el plan de acción al director general la semana pasada." },
        { type: "speak", prompt: "Repita (pasado):", target: "El cliente aceptó todas nuestras recomendaciones sin ningún cambio." },
        { type: "speak", prompt: "Repita (pasado):", target: "Elaboramos una hoja de ruta clara con plazos y responsables." },
        { type: "speak", prompt: "Repita (futuro):", target: "Implementaremos las mejoras en un plazo de tres meses." },
        { type: "speak", prompt: "Repita (futuro):", target: "El próximo diagnóstico incluirá también los riesgos de seguridad." }
      ]
    },
    {
      id: "pr9", order: 9, title: "Negocios y Reuniones", subtitle: "Cerrando acuerdos",
      text: "En una reunión de negocios, la claridad y la cortesía van siempre de la mano. Practica frases con 'me gustaría' y 'podríamos', formas educadas muy usadas en España para proponer, negociar y evitar sonar demasiado directo o brusco. Una negociación típica pasa por varias etapas: la presentación de la propuesta inicial, la discusión de condiciones (precio, plazos, forma de pago, garantías), las contraofertas de ambas partes, y finalmente el cierre del acuerdo, que suele formalizarse con la firma de un contrato. Es habitual escuchar y usar expresiones como 'Nos gustaría llegar a un acuerdo beneficioso para ambas partes', 'Necesitaríamos ajustar el plazo de entrega' o 'Estamos dispuestos a negociar el precio si aumentamos el volumen'. También es importante el vocabulario relacionado con los documentos legales: el contrato, la cláusula, el anexo, la firma, el sello y la fecha de vigencia. En las reuniones de seguimiento, se suele revisar lo acordado anteriormente y establecer los próximos pasos, usando frases como 'Como quedamos la última vez...' o 'El siguiente paso será...'. Practicar estas frases en voz alta, con un tono seguro pero cordial, es fundamental para desenvolverte con confianza en el mundo de los negocios en español, tanto presencialmente como en videollamadas internacionales.",
      textPt: "Numa reunião de negócios, clareza e cortesia sempre andam juntas. Pratique frases com 'me gustaría' (eu gostaria) e 'podríamos' (poderíamos), formas educadas muito usadas na Espanha para propor, negociar e evitar soar direto demais ou brusco. Uma negociação típica passa por várias etapas: a apresentação da proposta inicial, a discussão de condições (preço, prazos, forma de pagamento, garantias), as contrapropostas de ambas as partes, e finalmente o fechamento do acordo, que costuma se formalizar com a assinatura de um contrato. É comum ouvir e usar expressões como 'Nos gustaría llegar a un acuerdo beneficioso para ambas partes' (gostaríamos de chegar a um acordo benéfico para ambas as partes), 'Necesitaríamos ajustar el plazo de entrega' (precisaríamos ajustar o prazo de entrega) ou 'Estamos dispuestos a negociar el precio si aumentamos el volumen' (estamos dispostos a negociar o preço se aumentarmos o volume). Também é importante o vocabulário relacionado aos documentos legais: o contrato, a cláusula, o anexo, a assinatura, o carimbo e a data de vigência. Nas reuniões de acompanhamento, costuma-se revisar o que foi combinado anteriormente e estabelecer os próximos passos, usando frases como 'Como quedamos la última vez...' (como combinamos da última vez...) ou 'El siguiente paso será...' (o próximo passo será...). Praticar essas frases em voz alta, com um tom seguro mas cordial, é fundamental para se desenvolver com confiança no mundo dos negócios em espanhol, tanto presencialmente quanto em videochamadas internacionais.",
      vocabulary: [
        { category: "Negocios — negociación", items: [
          { es: "el acuerdo", pt: "o acordo" }, { es: "la propuesta / la contraoferta", pt: "a proposta / a contraproposta" },
          { es: "negociar", pt: "negociar" }, { es: "el presupuesto", pt: "o orçamento" }, { es: "el plazo de entrega", pt: "o prazo de entrega" },
          { es: "estar dispuesto a...", pt: "estar disposto a..." }
        ]},
        { category: "Negocios — documentos y cierre", items: [
          { es: "el contrato", pt: "o contrato" }, { es: "la cláusula", pt: "a cláusula" }, { es: "el anexo", pt: "o anexo" },
          { es: "firmar / el sello", pt: "assinar / o carimbo" }, { es: "la fecha de vigencia", pt: "a data de vigência" },
          { es: "los próximos pasos", pt: "os próximos passos" }
        ]}
      ],
      notes: ["'Presupuesto' tiene tres sílabas fuertes seguidas — practica despacio: pre-su-PUES-to.", "'Firmar' no significa 'confirmar', significa 'assinar' — cuidado con este falso amigo.", "'Cláusula' lleva el acento en la primera sílaba: CLÁU-su-la, con diptongo 'au'."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Nos gustaría revisar el presupuesto antes de firmar el contrato." },
        { type: "speak", prompt: "Repita (presente):", target: "Normalmente negociamos el plazo de entrega con cada proveedor." },
        { type: "speak", prompt: "Repita (presente):", target: "Estamos dispuestos a negociar el precio si aumentamos el volumen." },
        { type: "speak", prompt: "Repita (pasado):", target: "Firmamos el acuerdo con el nuevo cliente el mes pasado." },
        { type: "speak", prompt: "Repita (pasado):", target: "La propuesta inicial no convenció al comité directivo." },
        { type: "speak", prompt: "Repita (pasado):", target: "Añadimos una cláusula nueva antes de firmar el contrato final." },
        { type: "speak", prompt: "Repita (futuro):", target: "La próxima semana presentaremos una nueva propuesta más competitiva." },
        { type: "speak", prompt: "Repita (futuro):", target: "Firmaremos el contrato en cuanto el cliente confirme el presupuesto." }
      ]
    },
    {
      id: "pr10", order: 10, title: "En el Trabajo — Rutina y Reuniones", subtitle: "El día a día laboral",
      text: "Hablar del trabajo diario mezcla naturalmente rutina (presente), lo que ya se hizo (pasado) y lo que queda pendiente (futuro), y por eso es el terreno perfecto para practicar los tres tiempos dentro de una sola conversación fluida. Una jornada laboral típica en una oficina española empieza revisando el correo electrónico, organizando las tareas prioritarias del día y, muchas veces, participando en una breve reunión de equipo para repartir responsabilidades. A lo largo del día se alternan reuniones presenciales o por videollamada, tiempo de trabajo concentrado, llamadas con clientes o proveedores, y la gestión de imprevistos que surgen sin avisar. Vocabulario clave incluye 'la agenda', 'la tarea pendiente', 'la fecha límite', 'el compañero de trabajo', 'el jefe directo', 'delegar', 'priorizar' y 'coordinar'. También es habitual hablar de la conciliación entre la vida laboral y personal, del teletrabajo, de las horas extra, y de las evaluaciones de desempeño periódicas. Expresiones útiles incluyen 'Voy a delegar esta tarea en...', 'Tenemos que priorizar el informe antes del viernes' o 'Quedamos en repasar esto mañana a primera hora'. Practicar frases completas sobre la rutina laboral en voz alta te ayuda a sonar natural en cualquier ambiente de oficina hispanohablante, sea cual sea tu sector.",
      textPt: "Falar do trabalho diário mistura naturalmente rotina (presente), o que já foi feito (passado) e o que ainda falta fazer (futuro), e por isso é o terreno perfeito para praticar os três tempos dentro de uma única conversa fluida. Um dia de trabalho típico em um escritório espanhol começa revisando o e-mail, organizando as tarefas prioritárias do dia e, muitas vezes, participando de uma breve reunião de equipe para distribuir responsabilidades. Ao longo do dia se alternam reuniões presenciais ou por videochamada, tempo de trabalho concentrado, ligações com clientes ou fornecedores, e a gestão de imprevistos que surgem sem avisar. Vocabulário-chave inclui 'la agenda' (a agenda), 'la tarea pendiente' (a tarefa pendente), 'la fecha límite' (o prazo final), 'el compañero de trabajo' (o colega de trabalho), 'el jefe directo' (o chefe direto), 'delegar' (delegar), 'priorizar' (priorizar) e 'coordinar' (coordenar). Também é comum falar da conciliação entre a vida profissional e pessoal, do trabalho remoto, das horas extras, e das avaliações de desempenho periódicas. Expressões úteis incluem 'Voy a delegar esta tarea en...' (vou delegar essa tarefa para...), 'Tenemos que priorizar el informe antes del viernes' (temos que priorizar o relatório antes de sexta) ou 'Quedamos en repasar esto mañana a primera hora' (combinamos de revisar isso amanhã bem cedo). Praticar frases completas sobre a rotina de trabalho em voz alta ajuda você a soar natural em qualquer ambiente de escritório de língua espanhola, seja qual for o seu setor.",
      vocabulary: [
        { category: "Trabajo — organización", items: [
          { es: "la agenda", pt: "a agenda" }, { es: "la tarea pendiente", pt: "a tarefa pendente" }, { es: "la fecha límite", pt: "o prazo final" },
          { es: "delegar", pt: "delegar" }, { es: "priorizar", pt: "priorizar" }, { es: "coordinar", pt: "coordenar" }
        ]},
        { category: "Trabajo — equipo y rutina", items: [
          { es: "el compañero de trabajo", pt: "o colega de trabalho" }, { es: "el jefe directo", pt: "o chefe direto" },
          { es: "la reunión de equipo", pt: "a reunião de equipe" }, { es: "el correo electrónico", pt: "o e-mail" },
          { es: "el teletrabajo", pt: "o trabalho remoto" }, { es: "las horas extra", pt: "as horas extras" }, { es: "el informe", pt: "o relatório" }
        ]}
      ],
      notes: ["'Fecha límite' — la 'ch' de 'fecha' es suave, un solo sonido, diferente del portugués.", "'Compañero' lleva la 'ñ' — practica el sonido nasal palatal, muy distinto de 'nh' en portugués aunque suene parecido.", "'Delegar', 'priorizar' y 'coordinar' terminan todas en '-ar' con acento en la última sílaba al hablar en presente de 'yo': delegO, priorizO, coordinO."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Todos los lunes tenemos una reunión de equipo a primera hora." },
        { type: "speak", prompt: "Repita (presente):", target: "Reviso mi correo electrónico antes de empezar cualquier tarea." },
        { type: "speak", prompt: "Repita (presente):", target: "Siempre priorizo las tareas según la fecha límite de cada una." },
        { type: "speak", prompt: "Repita (pasado):", target: "Ayer terminé el informe justo antes de la fecha límite." },
        { type: "speak", prompt: "Repita (pasado):", target: "Mi compañero me ayudó con una tarea pendiente muy complicada." },
        { type: "speak", prompt: "Repita (pasado):", target: "Delegué dos tareas en mi equipo para poder terminar a tiempo." },
        { type: "speak", prompt: "Repita (futuro):", target: "Mañana tendremos que entregar el informe final al director." },
        { type: "speak", prompt: "Repita (futuro):", target: "La próxima semana organizaré mejor mis tareas pendientes." }
      ]
    },
    {
      id: "pr11", order: 11, title: "Medio Ambiente", subtitle: "Sostenibilidad y gestión ambiental",
      text: "El vocabulario ambiental combina palabras técnicas con conceptos de la vida diaria, y es un tema cada vez más presente tanto en la conversación cotidiana como en el mundo profesional de la auditoría y la consultoría. Practica el sonido de la 's' final, que en español de España se pronuncia con claridad, sin aspirarse como en algunas zonas de Latinoamérica y del sur peninsular — esto es especialmente importante en plurales como 'los aspectos ambientales' o 'las emisiones'. En el ámbito de la gestión ambiental empresarial, conceptos centrales son el aspecto ambiental (cualquier elemento de las actividades de una empresa que interactúa con el medio ambiente), el impacto ambiental (el cambio que ese aspecto produce), la huella de carbono, la gestión de residuos, el reciclaje, la economía circular y la eficiencia energética. La norma ISO 14001 es la referencia internacional para los sistemas de gestión ambiental, y exige a las empresas identificar sus aspectos ambientales significativos, establecer objetivos de mejora y cumplir con la legislación ambiental vigente. También es importante el vocabulario relacionado con el cambio climático: el calentamiento global, las emisiones de gases de efecto invernadero, las energías renovables (solar, eólica, hidráulica) y la descarbonización. Practicar frases sobre medio ambiente en voz alta te prepara tanto para conversaciones cotidianas sobre sostenibilidad como para reuniones profesionales de auditoría ambiental.",
      textPt: "O vocabulário ambiental combina palavras técnicas com conceitos do dia a dia, e é um tema cada vez mais presente tanto na conversa cotidiana quanto no mundo profissional da auditoria e da consultoria. Pratique o som do 's' final, que no espanhol da Espanha é pronunciado com clareza, sem ser aspirado como em algumas regiões da América Latina e do sul peninsular — isso é especialmente importante em plurais como 'los aspectos ambientales' (os aspectos ambientais) ou 'las emisiones' (as emissões). No âmbito da gestão ambiental empresarial, conceitos centrais são o aspecto ambiental (qualquer elemento das atividades de uma empresa que interage com o meio ambiente), o impacto ambiental (a mudança que esse aspecto produz), a pegada de carbono, a gestão de resíduos, a reciclagem, a economia circular e a eficiência energética. A norma ISO 14001 é a referência internacional para os sistemas de gestão ambiental, e exige que as empresas identifiquem seus aspectos ambientais significativos, estabeleçam objetivos de melhoria e cumpram a legislação ambiental vigente. Também é importante o vocabulário relacionado à mudança climática: o aquecimento global, as emissões de gases de efeito estufa, as energias renováveis (solar, eólica, hidráulica) e a descarbonização. Praticar frases sobre meio ambiente em voz alta te prepara tanto para conversas cotidianas sobre sustentabilidade quanto para reuniões profissionais de auditoria ambiental.",
      vocabulary: [
        { category: "Medio Ambiente — gestión", items: [
          { es: "el aspecto ambiental", pt: "o aspecto ambiental" }, { es: "el impacto ambiental", pt: "o impacto ambiental" },
          { es: "los residuos", pt: "os resíduos" }, { es: "reciclar", pt: "reciclar" }, { es: "la economía circular", pt: "a economia circular" },
          { es: "la eficiencia energética", pt: "a eficiência energética" }, { es: "la huella de carbono", pt: "a pegada de carbono" }
        ]},
        { category: "Medio Ambiente — cambio climático", items: [
          { es: "el calentamiento global", pt: "o aquecimento global" }, { es: "las emisiones", pt: "as emissões" },
          { es: "los gases de efecto invernadero", pt: "os gases de efeito estufa" }, { es: "la energía renovable", pt: "a energia renovável" },
          { es: "la descarbonización", pt: "a descarbonização" }, { es: "el desarrollo sostenible", pt: "o desenvolvimento sustentável" }
        ]}
      ],
      notes: ["'Residuos' se pronuncia re-SI-duos, con el acento en la 'i', no en la 'e'.", "Marca bien todas las 's' finales: 'los aspectos ambientales' — cada 's' se oye clara en español peninsular.", "'Invernadero' tiene cuatro sílabas: in-ver-na-DE-ro, con acento en la penúltima."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "La empresa evalúa el impacto ambiental de todos sus procesos." },
        { type: "speak", prompt: "Repita (presente):", target: "Reciclamos los residuos de papel y plástico en contenedores separados." },
        { type: "speak", prompt: "Repita (presente):", target: "Cada vez más empresas invierten en energías renovables." },
        { type: "speak", prompt: "Repita (pasado):", target: "El año pasado la fábrica redujo su huella de carbono en un veinte por ciento." },
        { type: "speak", prompt: "Repita (pasado):", target: "Identificamos varios aspectos ambientales significativos durante la revisión." },
        { type: "speak", prompt: "Repita (pasado):", target: "Reducimos las emisiones de gases de efecto invernadero el año pasado." },
        { type: "speak", prompt: "Repita (futuro):", target: "La próxima norma exigirá una gestión de residuos más estricta." },
        { type: "speak", prompt: "Repita (futuro):", target: "Reduciremos el consumo de agua en la nueva planta industrial." }
      ]
    },
    {
      id: "pr12", order: 12, title: "Seguridad y Salud Ocupacional", subtitle: "Prevención de riesgos laborales",
      text: "En seguridad laboral, muchas palabras terminan en '-ción' — 'prevención', 'protección', 'capacitación', 'evaluación', 'inspección' — y esta terminación se pronuncia siempre igual: sonido suave, con el acento en la última sílaba. La gestión de la seguridad y salud ocupacional, regulada internacionalmente por la norma ISO 45001, busca identificar los peligros presentes en el trabajo, evaluar los riesgos asociados y establecer controles para eliminarlos o reducirlos. Vocabulario esencial incluye el peligro (la fuente potencial de daño), el riesgo (la combinación de probabilidad y gravedad de que ese daño ocurra), el equipo de protección personal o EPP (casco, guantes, gafas, calzado de seguridad, arnés), el accidente de trabajo, el incidente (un suceso que pudo haber causado daño pero no lo hizo) y la investigación de accidentes. En una empresa comprometida con la seguridad, es habitual hablar de simulacros de evacuación, capacitaciones periódicas, permisos de trabajo para tareas de alto riesgo, y la importancia de reportar cualquier condición insegura de inmediato. También se usa mucho el vocabulario de primeros auxilios y de señalización de seguridad. Practicar estas palabras en voz alta, con buena dicción, es fundamental porque en este campo un malentendido puede tener consecuencias serias — la claridad al hablar de seguridad no es solo cuestión de idioma, es cuestión de proteger vidas.",
      textPt: "Em segurança do trabalho, muitas palavras terminam em '-ción' — 'prevención' (prevenção), 'protección' (proteção), 'capacitación' (capacitação/treinamento), 'evaluación' (avaliação), 'inspección' (inspeção) — e essa terminação é pronunciada sempre igual: som suave, com o acento na última sílaba. A gestão da segurança e saúde ocupacional, regulada internacionalmente pela norma ISO 45001, busca identificar os perigos presentes no trabalho, avaliar os riscos associados e estabelecer controles para eliminá-los ou reduzi-los. Vocabulário essencial inclui o perigo (a fonte potencial de dano), o risco (a combinação de probabilidade e gravidade de que esse dano ocorra), o equipamento de proteção individual ou EPI (capacete, luvas, óculos, calçado de segurança, cinto de segurança/arnês), o acidente de trabalho, o incidente (um evento que poderia ter causado dano mas não causou) e a investigação de acidentes. Em uma empresa comprometida com a segurança, é comum falar de simulados de evacuação, capacitações periódicas, permissões de trabalho para tarefas de alto risco, e a importância de reportar qualquer condição insegura imediatamente. Também se usa muito o vocabulário de primeiros socorros e de sinalização de segurança. Praticar essas palavras em voz alta, com boa dicção, é fundamental porque nesse campo um mal-entendido pode ter consequências sérias — a clareza ao falar de segurança não é só uma questão de idioma, é uma questão de proteger vidas.",
      vocabulary: [
        { category: "Seguridad Ocupacional — conceptos", items: [
          { es: "el peligro", pt: "o perigo" }, { es: "el riesgo laboral", pt: "o risco ocupacional" },
          { es: "el equipo de protección personal (EPP)", pt: "o EPI" }, { es: "el accidente de trabajo", pt: "o acidente de trabalho" },
          { es: "el incidente", pt: "o incidente" }, { es: "la investigación de accidentes", pt: "a investigação de acidentes" }
        ]},
        { category: "Seguridad Ocupacional — prevención", items: [
          { es: "la capacitación", pt: "o treinamento/capacitação" }, { es: "el simulacro de evacuación", pt: "o simulado de evacuação" },
          { es: "el permiso de trabajo", pt: "a permissão de trabalho" }, { es: "la condición insegura", pt: "a condição insegura" },
          { es: "los primeros auxilios", pt: "os primeiros socorros" }, { es: "prevenir", pt: "prevenir" }, { es: "el casco y los guantes", pt: "o capacete e as luvas" }
        ]}
      ],
      notes: ["Todas las palabras en '-ción' llevan el acento en la última sílaba: pre-ven-CIÓN.", "'Riesgo' tiene un diptongo 'ie' que se pronuncia en una sola sílaba: RIES-go, no ri-es-go.", "'Peligro' y 'riesgo' no son sinónimos exactos — practica la diferencia con calma para no confundirlos."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Todos los trabajadores usan el equipo de protección personal en la planta." },
        { type: "speak", prompt: "Repita (presente):", target: "El área de seguridad evalúa los riesgos laborales cada mes." },
        { type: "speak", prompt: "Repita (presente):", target: "Reportamos cualquier condición insegura de inmediato al supervisor." },
        { type: "speak", prompt: "Repita (pasado):", target: "El mes pasado tuvimos una capacitación sobre prevención de accidentes." },
        { type: "speak", prompt: "Repita (pasado):", target: "No hubo ningún accidente de trabajo durante todo el trimestre." },
        { type: "speak", prompt: "Repita (pasado):", target: "Hicimos un simulacro de evacuación la semana pasada en la fábrica." },
        { type: "speak", prompt: "Repita (futuro):", target: "La próxima capacitación será sobre el uso correcto del casco y los guantes." },
        { type: "speak", prompt: "Repita (futuro):", target: "Reduciremos el riesgo laboral con nuevos procedimientos de seguridad." }
      ]
    },
    {
      id: "pr13", order: 13, title: "Calidad de Procesos y Procedimientos", subtitle: "Gestión de la calidad",
      text: "Las palabras 'procedimiento' y 'proceso' se confunden fácilmente al hablar rápido, aunque tienen significados distintos: el proceso es el conjunto de actividades que transforman entradas en salidas, mientras que el procedimiento es la forma documentada de ejecutar ese proceso paso a paso. Practica marcando bien cada sílaba: pro-ce-di-MIEN-to tiene una sílaba más que pro-CE-so. La gestión de la calidad, basada en la norma ISO 9001, se organiza alrededor de varios conceptos centrales: el enfoque a procesos, la mejora continua, la satisfacción del cliente, el control de calidad y la trazabilidad de los productos o servicios. Vocabulario esencial incluye el procedimiento documentado, el registro de calidad, el indicador de calidad (o KPI), la no conformidad, la acción correctiva, la acción preventiva y la auditoría interna. También es habitual hablar del ciclo PHVA o PDCA (Planificar, Hacer, Verificar, Actuar), una metodología central para la mejora continua en cualquier sistema de gestión. En el día a día de una empresa certificada, se revisan constantemente los indicadores de calidad, se actualizan los procedimientos cuando se detectan errores o mejoras posibles, y se capacita al personal para que cumpla correctamente cada procedimiento. Practicar estas palabras técnicas en voz alta, sin acelerar, es clave para comunicarte con precisión en cualquier departamento de calidad de habla hispana.",
      textPt: "As palavras 'procedimiento' (procedimento) e 'proceso' (processo) se confundem facilmente ao falar rápido, embora tenham significados distintos: o processo é o conjunto de atividades que transformam entradas em saídas, enquanto o procedimento é a forma documentada de executar esse processo passo a passo. Pratique marcando bem cada sílaba: pro-ce-di-MIEN-to tem uma sílaba a mais que pro-CE-so. A gestão da qualidade, baseada na norma ISO 9001, se organiza em torno de vários conceitos centrais: a abordagem por processos, a melhoria contínua, a satisfação do cliente, o controle de qualidade e a rastreabilidade dos produtos ou serviços. Vocabulário essencial inclui o procedimento documentado, o registro de qualidade, o indicador de qualidade (ou KPI), a não conformidade, a ação corretiva, a ação preventiva e a auditoria interna. Também é comum falar do ciclo PDCA (Planejar, Fazer, Verificar, Agir), uma metodologia central para a melhoria contínua em qualquer sistema de gestão. No dia a dia de uma empresa certificada, revisam-se constantemente os indicadores de qualidade, atualizam-se os procedimentos quando se detectam erros ou melhorias possíveis, e capacita-se o pessoal para que cumpra corretamente cada procedimento. Praticar essas palavras técnicas em voz alta, sem acelerar, é fundamental para se comunicar com precisão em qualquer departamento de qualidade de língua espanhola.",
      vocabulary: [
        { category: "Calidad — conceptos base", items: [
          { es: "el procedimiento documentado", pt: "o procedimento documentado" }, { es: "el proceso productivo", pt: "o processo produtivo" },
          { es: "el control de calidad", pt: "o controle de qualidade" }, { es: "la mejora continua", pt: "a melhoria contínua" },
          { es: "el enfoque a procesos", pt: "a abordagem por processos" }, { es: "la satisfacción del cliente", pt: "a satisfação do cliente" }
        ]},
        { category: "Calidad — indicadores y acciones", items: [
          { es: "el indicador de calidad", pt: "o indicador de qualidade" }, { es: "el registro de calidad", pt: "o registro de qualidade" },
          { es: "la acción correctiva", pt: "a ação corretiva" }, { es: "la acción preventiva", pt: "a ação preventiva" },
          { es: "cumplir el procedimiento", pt: "cumprir o procedimento" }, { es: "el ciclo PHVA (PDCA)", pt: "o ciclo PDCA" }
        ]}
      ],
      notes: ["'Procedimiento' tiene el diptongo 'ie' en la penúltima sílaba: proce-di-MIEN-to.", "'Continua' cambia de significado según el acento: contiNUA (adjetivo) vs continÚa (verbo continuar).", "'Correctiva' y 'preventiva' terminan igual, pero cuida que la 'c' de 'correctiva' no se pierda al hablar rápido."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Cada proceso productivo tiene su propio procedimiento documentado." },
        { type: "speak", prompt: "Repita (presente):", target: "El equipo de calidad revisa los indicadores todas las semanas." },
        { type: "speak", prompt: "Repita (presente):", target: "Aplicamos el ciclo PHVA para mejorar continuamente nuestros procesos." },
        { type: "speak", prompt: "Repita (pasado):", target: "Actualizamos el procedimiento después de detectar varios errores." },
        { type: "speak", prompt: "Repita (pasado):", target: "El control de calidad mejoró mucho después del último cambio." },
        { type: "speak", prompt: "Repita (pasado):", target: "Implementamos una acción correctiva para resolver la no conformidad." },
        { type: "speak", prompt: "Repita (futuro):", target: "El próximo procedimiento incluirá controles más estrictos." },
        { type: "speak", prompt: "Repita (futuro):", target: "Implementaremos la mejora continua en todos los procesos de la fábrica." }
      ]
    },
    {
      id: "pr14", order: 14, title: "Gobernanza, Dirección y Organigrama", subtitle: "La estructura de la empresa",
      text: "Hablar de la estructura organizativa exige claridad al nombrar cargos y jerarquías, y en español de negocios existe un vocabulario específico y bastante formal para describir cómo se organiza una empresa. Practica los títulos con cuidado: 'director general', 'junta directiva', 'consejo de administración', 'gerente de área'. La gobernanza corporativa se refiere al conjunto de reglas, prácticas y procesos que dirigen y controlan una empresa, buscando equilibrar los intereses de los accionistas, la alta dirección, los empleados y otras partes interesadas. En la cúspide de la estructura suele estar el consejo de administración, responsable de las grandes decisiones estratégicas, seguido por la alta dirección o comité ejecutivo, que incluye al director general (o CEO) y a los directores de cada área funcional (finanzas, operaciones, recursos humanos, calidad). El organigrama representa visualmente esta jerarquía, mostrando quién reporta a quién y cómo se distribuyen las responsabilidades. Vocabulario clave incluye 'la línea de mando', 'el responsable de área', 'delegar autoridad', 'rendir cuentas', 'la toma de decisiones' y 'la política empresarial'. También es importante entender conceptos como la transparencia, la rendición de cuentas y el cumplimiento normativo (compliance), cada vez más exigidos por las normas internacionales de gestión. Practicar este vocabulario en voz alta te prepara para participar con seguridad en reuniones sobre estrategia y estructura organizativa.",
      textPt: "Falar da estrutura organizacional exige clareza ao nomear cargos e hierarquias, e no espanhol de negócios existe um vocabulário específico e bastante formal para descrever como uma empresa se organiza. Pratique os títulos com cuidado: 'director general' (diretor geral), 'junta directiva' (diretoria), 'consejo de administración' (conselho de administração), 'gerente de área' (gerente de área). A governança corporativa se refere ao conjunto de regras, práticas e processos que dirigem e controlam uma empresa, buscando equilibrar os interesses dos acionistas, da alta direção, dos funcionários e de outras partes interessadas. No topo da estrutura costuma estar o conselho de administração, responsável pelas grandes decisões estratégicas, seguido pela alta direção ou comitê executivo, que inclui o diretor geral (ou CEO) e os diretores de cada área funcional (finanças, operações, recursos humanos, qualidade). O organograma representa visualmente essa hierarquia, mostrando quem se reporta a quem e como as responsabilidades são distribuídas. Vocabulário-chave inclui 'la línea de mando' (a linha de comando), 'el responsable de área' (o responsável pela área), 'delegar autoridad' (delegar autoridade), 'rendir cuentas' (prestar contas), 'la toma de decisiones' (a tomada de decisões) e 'la política empresarial' (a política empresarial). Também é importante entender conceitos como a transparência, a prestação de contas e a conformidade normativa (compliance), cada vez mais exigidos pelas normas internacionais de gestão. Praticar esse vocabulário em voz alta te prepara para participar com segurança em reuniões sobre estratégia e estrutura organizacional.",
      vocabulary: [
        { category: "Gobernanza — estructura", items: [
          { es: "el consejo de administración", pt: "o conselho de administração" }, { es: "la junta directiva", pt: "a diretoria" },
          { es: "el organigrama", pt: "o organograma" }, { es: "la alta dirección", pt: "a alta direção" },
          { es: "el responsable de área", pt: "o responsável pela área" }, { es: "la línea de mando", pt: "a linha de comando" }
        ]},
        { category: "Gobernanza — decisiones y cumplimiento", items: [
          { es: "tomar decisiones", pt: "tomar decisões" }, { es: "delegar autoridad", pt: "delegar autoridade" },
          { es: "rendir cuentas", pt: "prestar contas" }, { es: "la transparencia", pt: "a transparência" },
          { es: "el cumplimiento normativo", pt: "a conformidade normativa" }, { es: "la política empresarial", pt: "a política empresarial" }
        ]}
      ],
      notes: ["'Organigrama' se pronuncia or-ga-ni-GRA-ma, con el acento en la penúltima sílaba.", "'Junta' y 'gestión' llevan sonidos distintos de 'j' y 'g' — compara ambos con cuidado.", "'Rendir cuentas' es una expresión fija — practica las dos palabras juntas, con ritmo natural, no palabra por palabra."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "El consejo de administración se reúne una vez al mes." },
        { type: "speak", prompt: "Repita (presente):", target: "Cada responsable de área presenta su informe a la alta dirección." },
        { type: "speak", prompt: "Repita (presente):", target: "La alta dirección siempre rinde cuentas ante el consejo de administración." },
        { type: "speak", prompt: "Repita (pasado):", target: "La junta directiva aprobó el nuevo organigrama la semana pasada." },
        { type: "speak", prompt: "Repita (pasado):", target: "Tomamos varias decisiones importantes durante la última reunión." },
        { type: "speak", prompt: "Repita (pasado):", target: "El director delegó autoridad en tres nuevos responsables de área." },
        { type: "speak", prompt: "Repita (futuro):", target: "El próximo organigrama tendrá una nueva dirección de sostenibilidad." },
        { type: "speak", prompt: "Repita (futuro):", target: "La alta dirección decidirá el presupuesto del año que viene." }
      ]
    },
    {
      id: "pr15", order: 15, title: "Indicadores y Sostenibilidad", subtitle: "Midiendo el progreso",
      text: "Los indicadores combinan números con palabras técnicas — practica decir porcentajes y cifras con claridad, ya que este tema exige mucha precisión numérica. La sostenibilidad, con su 'st' inicial poco común en español, también merece atención especial. En el mundo empresarial actual, los indicadores clave de desempeño (o KPI, del inglés) permiten medir el progreso hacia los objetivos estratégicos en áreas como calidad, medio ambiente, seguridad, finanzas y recursos humanos. Un buen indicador debe ser específico, medible, alcanzable, relevante y con un plazo definido (la metodología SMART). Ejemplos comunes incluyen el porcentaje de cumplimiento de auditorías, la tasa de accidentabilidad, el índice de satisfacción del cliente, la huella de carbono por unidad producida, o el porcentaje de residuos reciclados. La sostenibilidad corporativa, cada vez más central en la estrategia de las empresas, se apoya en tres pilares: el ambiental (impacto en el planeta), el social (impacto en las personas) y el de gobernanza (ética y transparencia en la gestión) — lo que en inglés se conoce como criterios ESG. Muchas empresas ahora publican informes de sostenibilidad anuales, donde detallan sus indicadores, sus metas y sus avances en cada uno de estos tres pilares. Practicar cifras, porcentajes y vocabulario de sostenibilidad en voz alta te prepara para presentar resultados con seguridad ante cualquier comité o cliente.",
      textPt: "Os indicadores combinam números com palavras técnicas — pratique dizer porcentagens e números com clareza, já que esse tema exige muita precisão numérica. A palavra 'sostenibilidad' (sustentabilidade), com seu 'st' inicial pouco comum em espanhol, também merece atenção especial. No mundo empresarial atual, os indicadores-chave de desempenho (ou KPI, do inglês) permitem medir o progresso rumo aos objetivos estratégicos em áreas como qualidade, meio ambiente, segurança, finanças e recursos humanos. Um bom indicador deve ser específico, mensurável, alcançável, relevante e com um prazo definido (a metodologia SMART). Exemplos comuns incluem o percentual de cumprimento de auditorias, a taxa de acidentes, o índice de satisfação do cliente, a pegada de carbono por unidade produzida, ou o percentual de resíduos reciclados. A sustentabilidade corporativa, cada vez mais central na estratégia das empresas, se apoia em três pilares: o ambiental (impacto no planeta), o social (impacto nas pessoas) e o de governança (ética e transparência na gestão) — o que em inglês é conhecido como critérios ESG. Muitas empresas agora publicam relatórios de sustentabilidade anuais, onde detalham seus indicadores, suas metas e seus avanços em cada um desses três pilares. Praticar números, porcentagens e vocabulário de sustentabilidade em voz alta te prepara para apresentar resultados com segurança diante de qualquer comitê ou cliente.",
      vocabulary: [
        { category: "Indicadores — medición", items: [
          { es: "el indicador clave (KPI)", pt: "o indicador-chave (KPI)" }, { es: "la meta / el objetivo", pt: "a meta / o objetivo" },
          { es: "el porcentaje de cumplimiento", pt: "o percentual de cumprimento" }, { es: "la tasa de accidentabilidad", pt: "a taxa de acidentes" },
          { es: "medir el desempeño", pt: "medir o desempenho" }, { es: "específico, medible, alcanzable", pt: "específico, mensurável, alcançável" }
        ]},
        { category: "Sostenibilidad — pilares ESG", items: [
          { es: "la sostenibilidad", pt: "a sustentabilidade" }, { es: "el desarrollo sostenible", pt: "o desenvolvimento sustentável" },
          { es: "el pilar ambiental/social/de gobernanza", pt: "o pilar ambiental/social/de governança" },
          { es: "el informe de sostenibilidad", pt: "o relatório de sustentabilidade" }, { es: "los criterios ESG", pt: "os critérios ESG" }
        ]}
      ],
      notes: ["'Sostenibilidad' se divide sos-te-ni-bi-li-DAD — seis sílabas, acento en la última.", "Los porcentajes se dicen así: '85%' = 'ochenta y cinco por ciento', sin abreviar.", "'Medible' y 'alcanzable' terminan en '-ble' — practica ese sonido final sin agregar una vocal extra."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Medimos el desempeño de cada área con indicadores claros." },
        { type: "speak", prompt: "Repita (presente):", target: "La sostenibilidad es una prioridad para la alta dirección." },
        { type: "speak", prompt: "Repita (presente):", target: "Publicamos un informe de sostenibilidad con los tres pilares ESG." },
        { type: "speak", prompt: "Repita (pasado):", target: "El porcentaje de cumplimiento aumentó del setenta al noventa por ciento." },
        { type: "speak", prompt: "Repita (pasado):", target: "Definimos nuevas metas de desarrollo sostenible el año pasado." },
        { type: "speak", prompt: "Repita (pasado):", target: "Redujimos la tasa de accidentabilidad en un quince por ciento." },
        { type: "speak", prompt: "Repita (futuro):", target: "El próximo informe incluirá indicadores de sostenibilidad ambiental." },
        { type: "speak", prompt: "Repita (futuro):", target: "Mediremos el progreso de cada meta cada tres meses." }
      ]
    },
    {
      id: "pr16", order: 16, title: "Seguridad de la Información y Privacidad de Datos", subtitle: "ISO/IEC 27001 y protección de datos",
      text: "El vocabulario de la seguridad de la información combina términos técnicos de tecnología con conceptos legales de protección de datos, y es un área cada vez más relevante para cualquier auditor o consultor. Practica con cuidado palabras como 'confidencialidad', 'vulnerabilidad', 'ciberseguridad' e 'incidente', que tienen muchas sílabas y consonantes seguidas. La norma ISO/IEC 27001 establece los requisitos para un Sistema de Gestión de Seguridad de la Información (SGSI), basado en tres pilares fundamentales: la confidencialidad (que la información solo sea accesible para quien está autorizado), la integridad (que la información sea exacta y no se altere sin autorización) y la disponibilidad (que la información esté accesible cuando se necesite). Vocabulario esencial incluye la amenaza, la vulnerabilidad, el riesgo de seguridad, el control de acceso, el cifrado de datos, la copia de seguridad (o backup), el incidente de seguridad y la brecha de datos. En el ámbito legal, es fundamental conocer los conceptos de protección de datos personales: el consentimiento informado, el responsable del tratamiento, el derecho de acceso, rectificación y supresión de datos, y las notificaciones de brechas de seguridad a las autoridades competentes. Muchas empresas hoy exigen capacitaciones periódicas sobre phishing, contraseñas seguras y uso responsable de los sistemas informáticos. Practicar estas frases en voz alta te prepara para participar con confianza en auditorías, capacitaciones o negociaciones relacionadas con la seguridad de la información y la privacidad de datos.",
      textPt: "O vocabulário da segurança da informação combina termos técnicos de tecnologia com conceitos legais de proteção de dados, e é uma área cada vez mais relevante para qualquer auditor ou consultor. Pratique com cuidado palavras como 'confidencialidad' (confidencialidade), 'vulnerabilidad' (vulnerabilidade), 'ciberseguridad' (cibersegurança) e 'incidente' (incidente), que têm muitas sílabas e consoantes seguidas. A norma ISO/IEC 27001 estabelece os requisitos para um Sistema de Gestão de Segurança da Informação (SGSI), baseado em três pilares fundamentais: a confidencialidade (que a informação só seja acessível para quem está autorizado), a integridade (que a informação seja exata e não seja alterada sem autorização) e a disponibilidade (que a informação esteja acessível quando for necessária). Vocabulário essencial inclui a ameaça, a vulnerabilidade, o risco de segurança, o controle de acesso, a criptografia de dados, a cópia de segurança (ou backup), o incidente de segurança e o vazamento de dados. No âmbito legal, é fundamental conhecer os conceitos de proteção de dados pessoais: o consentimento informado, o responsável pelo tratamento, o direito de acesso, retificação e exclusão de dados, e as notificações de vazamentos de segurança às autoridades competentes. Muitas empresas hoje exigem capacitações periódicas sobre phishing, senhas seguras e uso responsável dos sistemas de informática. Praticar essas frases em voz alta te prepara para participar com confiança em auditorias, capacitações ou negociações relacionadas à segurança da informação e à privacidade de dados.",
      vocabulary: [
        { category: "Seguridad de la Información — pilares y riesgos", items: [
          { es: "la confidencialidad", pt: "a confidencialidade" }, { es: "la integridad de los datos", pt: "a integridade dos dados" },
          { es: "la disponibilidad", pt: "a disponibilidade" }, { es: "la amenaza", pt: "a ameaça" },
          { es: "la vulnerabilidad", pt: "a vulnerabilidade" }, { es: "el riesgo de seguridad", pt: "o risco de segurança" },
          { es: "la ciberseguridad", pt: "a cibersegurança" }
        ]},
        { category: "Privacidad de Datos — legal y controles", items: [
          { es: "el control de acceso", pt: "o controle de acesso" }, { es: "el cifrado de datos", pt: "a criptografia de dados" },
          { es: "la copia de seguridad (backup)", pt: "a cópia de segurança (backup)" }, { es: "la brecha de datos", pt: "o vazamento de dados" },
          { es: "el consentimiento informado", pt: "o consentimento informado" }, { es: "el responsable del tratamiento", pt: "o responsável pelo tratamento" },
          { es: "la contraseña segura", pt: "a senha segura" }
        ]}
      ],
      notes: ["'Confidencialidad' se divide con-fi-den-cia-li-DAD — seis sílabas, acento en la última.", "'Vulnerabilidad' y 'ciberseguridad' son largas — practica sílaba por sílaba antes de decir la frase completa.", "La 'c' de 'cifrado' es suave (th en el centro de España), distinta de la 'c' de 'contraseña', también suave por estar antes de 'o'."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Protegemos la confidencialidad de los datos de nuestros clientes." },
        { type: "speak", prompt: "Repita (presente):", target: "El equipo de seguridad evalúa las vulnerabilidades del sistema cada mes." },
        { type: "speak", prompt: "Repita (presente):", target: "Todos los empleados usan contraseñas seguras y autenticación en dos pasos." },
        { type: "speak", prompt: "Repita (pasado):", target: "El año pasado detectamos una vulnerabilidad grave en el servidor." },
        { type: "speak", prompt: "Repita (pasado):", target: "La empresa notificó la brecha de datos a la autoridad competente." },
        { type: "speak", prompt: "Repita (pasado):", target: "Implementamos el cifrado de datos después de la auditoría de seguridad." },
        { type: "speak", prompt: "Repita (futuro):", target: "La próxima auditoría se enfocará en la seguridad de la información." },
        { type: "speak", prompt: "Repita (futuro):", target: "Actualizaremos la política de privacidad antes de fin de año." }
      ]
    },
    {
      id: "pr17", order: 17, title: "Tecnología", subtitle: "Innovación y transformación digital",
      text: "El vocabulario de la tecnología cambia constantemente, mezcla muchas palabras tomadas directamente del inglés con adaptaciones al español, y exige práctica especial porque combina sonidos duros de consonantes con anglicismos de pronunciación particular. Palabras como 'software', 'hardware', 'inteligencia artificial' o 'algoritmo' aparecen en casi cualquier conversación profesional moderna. La transformación digital de las empresas incluye conceptos como la automatización de procesos, la nube (o 'cloud'), el análisis de datos (o 'big data'), la inteligencia artificial, el aprendizaje automático (o 'machine learning'), y la ciberseguridad, ya vista en la lección anterior. En el trabajo diario, se habla constantemente de actualizar el software, migrar a la nube, digitalizar procesos que antes eran en papel, e implementar nuevas herramientas de colaboración. También es habitual mencionar plataformas de videoconferencia, sistemas de gestión empresarial (ERP), aplicaciones móviles y herramientas de firma electrónica. Vocabulario clave incluye 'la aplicación (app)', 'la plataforma', 'el usuario', 'la contraseña', 'el dispositivo', 'la conexión a internet' y 'el soporte técnico'. La tecnología también transformó la forma de trabajar: el teletrabajo, las reuniones virtuales y los equipos distribuidos por diferentes países son hoy completamente normales. Practicar este vocabulario en voz alta, incluyendo los anglicismos adaptados al español, te prepara para participar con naturalidad en cualquier conversación sobre innovación y tecnología en el entorno profesional actual.",
      textPt: "O vocabulário da tecnologia muda constantemente, mistura muitas palavras tomadas diretamente do inglês com adaptações ao espanhol, e exige prática especial porque combina sons duros de consoantes com estrangeirismos de pronúncia particular. Palavras como 'software', 'hardware', 'inteligencia artificial' (inteligência artificial) ou 'algoritmo' (algoritmo) aparecem em quase qualquer conversa profissional moderna. A transformação digital das empresas inclui conceitos como a automação de processos, a nuvem (ou 'cloud'), a análise de dados (ou 'big data'), a inteligência artificial, o aprendizado de máquina (ou 'machine learning'), e a cibersegurança, já vista na lição anterior. No trabalho diário, fala-se constantemente de atualizar o software, migrar para a nuvem, digitalizar processos que antes eram em papel, e implementar novas ferramentas de colaboração. Também é comum mencionar plataformas de videoconferência, sistemas de gestão empresarial (ERP), aplicativos móveis e ferramentas de assinatura eletrônica. Vocabulário-chave inclui 'la aplicación (app)' (o aplicativo), 'la plataforma' (a plataforma), 'el usuario' (o usuário), 'la contraseña' (a senha), 'el dispositivo' (o dispositivo), 'la conexión a internet' (a conexão com a internet) e 'el soporte técnico' (o suporte técnico). A tecnologia também transformou a forma de trabalhar: o trabalho remoto, as reuniões virtuais e as equipes distribuídas em diferentes países são hoje completamente normais. Praticar esse vocabulário em voz alta, incluindo os estrangeirismos adaptados ao espanhol, te prepara para participar com naturalidade em qualquer conversa sobre inovação e tecnologia no ambiente profissional atual.",
      vocabulary: [
        { category: "Tecnología — conceptos", items: [
          { es: "el software / el hardware", pt: "o software / o hardware" }, { es: "la inteligencia artificial", pt: "a inteligência artificial" },
          { es: "el algoritmo", pt: "o algoritmo" }, { es: "la nube (cloud)", pt: "a nuvem (cloud)" },
          { es: "el análisis de datos (big data)", pt: "a análise de dados (big data)" }, { es: "la automatización", pt: "a automação" }
        ]},
        { category: "Tecnología — uso diario", items: [
          { es: "la aplicación (app)", pt: "o aplicativo" }, { es: "la plataforma", pt: "a plataforma" },
          { es: "el usuario", pt: "o usuário" }, { es: "la contraseña", pt: "a senha" }, { es: "el dispositivo", pt: "o dispositivo" },
          { es: "actualizar el software", pt: "atualizar o software" }, { es: "el soporte técnico", pt: "o suporte técnico" }
        ]}
      ],
      notes: ["Anglicismos como 'software' se pronuncian con acento en la primera sílaba, adaptados a la fonética española: SOF-guer.", "'Algoritmo' lleva el acento en la 'i': al-go-RIT-mo.", "'Actualizar' tiene cinco sílabas — practica despacio: ac-tua-li-ZAR, con el diptongo 'ua' en una sola sílaba."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Usamos inteligencia artificial para analizar grandes cantidades de datos." },
        { type: "speak", prompt: "Repita (presente):", target: "Todos los documentos se guardan en la nube para mayor seguridad." },
        { type: "speak", prompt: "Repita (presente):", target: "El equipo de soporte técnico ayuda con cualquier problema del sistema." },
        { type: "speak", prompt: "Repita (pasado):", target: "El año pasado migramos todos nuestros datos a la nube." },
        { type: "speak", prompt: "Repita (pasado):", target: "Actualizamos el software de gestión después de varios problemas técnicos." },
        { type: "speak", prompt: "Repita (pasado):", target: "Implementamos una nueva aplicación para digitalizar los procesos." },
        { type: "speak", prompt: "Repita (futuro):", target: "El próximo año automatizaremos gran parte de nuestros procesos." },
        { type: "speak", prompt: "Repita (futuro):", target: "La empresa invertirá más en inteligencia artificial y ciberseguridad." }
      ]
    }
  ]
};
