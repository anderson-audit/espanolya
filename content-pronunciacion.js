/* ==========================================================================
   EspañolYa! — Conteúdo: Módulo BÔNUS · MEJORA DE PRONUNCIACIÓN
   15 situaciones cotidianas y profesionales, cada una con 6 frases completas
   (2 en presente, 2 en pasado, 2 en futuro) para repetir en voz alta — el
   sistema escucha (reconocimiento de voz) y da la pronunciación correcta
   (síntesis de voz + comparación de similitud). Todo en español de España.
   Módulo de curiosidades/práctica oral — sem prova obrigatória.
   ========================================================================== */

const LEVEL_PRONUNCIACION = {
  id: "pronunciacion",
  name: "Mejora de Pronunciación",
  icon: "🗣️",
  colorFrom: "#6A1B9A",
  colorTo: "#AA151B",
  description: "Módulo bônus: 15 situações do dia a dia e do mundo profissional — frases completas para você repetir, o sistema ouve e corrige sua pronúncia em espanhol.",
  lessons: [
    {
      id: "pr1", order: 1, title: "En las Compras", subtitle: "De tiendas por España",
      text: "Ir de compras es una de las situaciones donde más se practica el oído: precios, tallas, formas de pago. En España, la 'c' antes de 'e/i' y la 'z' suenan como una 'th' inglesa (ceceo/distinción) — presta atención a palabras como 'talla', 'precio' o 'efectivo'.",
      textPt: "Ir às compras é uma das situações onde mais se pratica o ouvido: preços, tamanhos, formas de pagamento. Na Espanha, o 'c' antes de 'e/i' e o 'z' soam como um 'th' do inglês — preste atenção em palavras como 'talla' (tamanho), 'precio' (preço) ou 'efectivo' (dinheiro/à vista).",
      vocabulary: [{ category: "Compras", items: [
        { es: "el precio", pt: "o preço" }, { es: "la talla", pt: "o tamanho" }, { es: "el probador", pt: "o provador" },
        { es: "pagar en efectivo", pt: "pagar em dinheiro" }, { es: "pagar con tarjeta", pt: "pagar com cartão" },
        { es: "el descuento / la rebaja", pt: "o desconto / a liquidação" }, { es: "el recibo", pt: "o recibo" },
        { es: "el escaparate", pt: "a vitrine" }, { es: "devolver / cambiar", pt: "devolver / trocar" }
      ]}],
      notes: ["La 'z' de 'talla' no existe: es 'talla' con doble L (elle), suena parecido a 'y' en España central.", "'Efectivo' lleva el sonido de 'c' suave (th) en 'efec-' — no confundir con 'v' en 'efectivo'."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Esta camisa me gusta mucho, pero necesito una talla más grande." },
        { type: "speak", prompt: "Repita (presente):", target: "¿Aceptan tarjeta o solo pagan en efectivo?" },
        { type: "speak", prompt: "Repita (pasado):", target: "Ayer compré unos zapatos preciosos y me costaron muy baratos." },
        { type: "speak", prompt: "Repita (pasado):", target: "La semana pasada devolví una chaqueta porque no era de mi talla." },
        { type: "speak", prompt: "Repita (futuro):", target: "Mañana voy a comprar un regalo para mi compañera de trabajo." },
        { type: "speak", prompt: "Repita (futuro):", target: "El próximo mes aprovecharemos las rebajas de enero." }
      ]
    },
    {
      id: "pr2", order: 2, title: "De Paseo y Turismo", subtitle: "Caminando por la ciudad",
      text: "Pasear por una ciudad española es una excelente forma de practicar entonación: preguntas, exclamaciones y direcciones. La 'j' y la 'g' antes de 'e/i' tienen un sonido fuerte, gutural, como una 'h' aspirada muy marcada — palabras como 'viaje' o 'gente' lo muestran bien.",
      textPt: "Passear por uma cidade espanhola é uma ótima forma de praticar entonação: perguntas, exclamações e direções. O 'j' e o 'g' antes de 'e/i' têm um som forte, gutural, como um 'rr' bem marcado na garganta — palavras como 'viaje' (viagem) ou 'gente' (gente/pessoas) mostram isso bem.",
      vocabulary: [{ category: "Paseo y Turismo", items: [
        { es: "el casco antiguo", pt: "o centro histórico" }, { es: "la plaza mayor", pt: "a praça principal" },
        { es: "el mirador", pt: "o mirante" }, { es: "el monumento", pt: "o monumento" }, { es: "perderse", pt: "se perder" },
        { es: "girar a la derecha/izquierda", pt: "virar à direita/esquerda" }, { es: "seguir todo recto", pt: "seguir em frente" },
        { es: "el guía turístico", pt: "o guia turístico" }
      ]}],
      notes: ["La 'j' de 'viaje' y 'girar' suena fuerte y gutural — no como la 'j' del portugués, que es suave.", "En 'todo recto', la doble erre no existe, pero la 'r' de 'recto' al inicio de sílaba ya suena fuerte."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Me encanta pasear por el casco antiguo los domingos por la mañana." },
        { type: "speak", prompt: "Repita (presente):", target: "Perdone, ¿el museo queda cerca de aquí o tengo que coger un taxi?" },
        { type: "speak", prompt: "Repita (pasado):", target: "El año pasado visitamos Toledo y subimos hasta el mirador más alto." },
        { type: "speak", prompt: "Repita (pasado):", target: "Nos perdimos un poco, pero al final encontramos la plaza mayor." },
        { type: "speak", prompt: "Repita (futuro):", target: "Este fin de semana vamos a caminar por el centro histórico." },
        { type: "speak", prompt: "Repita (futuro):", target: "El guía turístico nos explicará la historia del monumento." }
      ]
    },
    {
      id: "pr3", order: 3, title: "En la Cocina", subtitle: "Recetas y sabores",
      text: "La cocina es un tema lleno de vocales fuertes y palabras rítmicas, perfecto para practicar la fluidez. Presta atención al sonido de la 'll' (como 'y' en gran parte de España) en palabras como 'paella' o 'cebolla'.",
      textPt: "A cozinha é um tema cheio de vogais fortes e palavras rítmicas, perfeito para praticar a fluência. Preste atenção no som do 'll' (como um 'y') em palavras como 'paella' ou 'cebolla' (cebola).",
      vocabulary: [{ category: "Cocina", items: [
        { es: "la sartén", pt: "a frigideira" }, { es: "la olla", pt: "a panela" }, { es: "picar la cebolla", pt: "picar a cebola" },
        { es: "el aceite de oliva", pt: "o azeite de oliva" }, { es: "a fuego lento", pt: "em fogo baixo" },
        { es: "remover / mezclar", pt: "mexer / misturar" }, { es: "la receta", pt: "a receita" }, { es: "el horno", pt: "o forno" }
      ]}],
      notes: ["La 'll' de 'paella', 'cebolla' y 'olla' suena como una 'y' fuerte en el centro de España.", "La 'h' de 'horno' es siempre muda — nunca se pronuncia."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Primero pico la cebolla y después la sofrío en aceite de oliva." },
        { type: "speak", prompt: "Repita (presente):", target: "Esta receta lleva arroz, pollo y un poco de azafrán." },
        { type: "speak", prompt: "Repita (pasado):", target: "El domingo pasado cociné una paella para toda mi familia." },
        { type: "speak", prompt: "Repita (pasado):", target: "Dejé la salsa a fuego lento durante media hora." },
        { type: "speak", prompt: "Repita (futuro):", target: "Esta noche voy a preparar una tortilla de patatas." },
        { type: "speak", prompt: "Repita (futuro):", target: "El fin de semana probaremos una receta nueva de pescado al horno." }
      ]
    },
    {
      id: "pr4", order: 4, title: "En el Aeropuerto", subtitle: "Vuelos, maletas y trámites",
      text: "El aeropuerto exige claridad al hablar rápido: horarios, puertas de embarque, números. Practica los números y las letras del alfabeto en español, muy comunes en este contexto (números de vuelo, puertas).",
      textPt: "O aeroporto exige clareza ao falar rápido: horários, portões de embarque, números. Pratique os números e as letras do alfabeto em espanhol, muito comuns nesse contexto (números de voo, portões).",
      vocabulary: [{ category: "Aeropuerto", items: [
        { es: "la puerta de embarque", pt: "o portão de embarque" }, { es: "el equipaje de mano", pt: "a bagagem de mão" },
        { es: "facturar la maleta", pt: "despachar a mala" }, { es: "el vuelo con retraso", pt: "o voo atrasado" },
        { es: "la tarjeta de embarque", pt: "o cartão de embarque" }, { es: "el control de seguridad", pt: "o controle de segurança" },
        { es: "aterrizar / despegar", pt: "aterrissar / decolar" }
      ]}],
      notes: ["'Embarque' y 'equipaje' tienen el sonido fuerte de la 'j'/'g' — practica sin suavizarlo.", "La 'q' de 'equipaje' y 'facturar' se pronuncia como 'k', sin sonido de 'u'."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Mi vuelo sale a las siete, así que llego con dos horas de antelación." },
        { type: "speak", prompt: "Repita (presente):", target: "Siempre facturo la maleta grande y llevo solo el equipaje de mano." },
        { type: "speak", prompt: "Repita (pasado):", target: "El vuelo se retrasó dos horas por culpa del mal tiempo." },
        { type: "speak", prompt: "Repita (pasado):", target: "Perdí la conexión y tuve que esperar en el aeropuerto toda la tarde." },
        { type: "speak", prompt: "Repita (futuro):", target: "El próximo viaje de auditoría lo haré en el vuelo de la mañana." },
        { type: "speak", prompt: "Repita (futuro):", target: "Llegaremos al aeropuerto con tiempo de sobra para pasar el control." }
      ]
    },
    {
      id: "pr5", order: 5, title: "En el Tránsito", subtitle: "Coches, atascos y direcciones",
      text: "Hablar de tránsito en España significa hablar de 'atascos', no de 'trânsito' como en portugués — el vocabulario cambia bastante. Practica también las órdenes y consejos con el imperativo, muy usados al dar direcciones.",
      textPt: "Falar de trânsito na Espanha significa falar de 'atascos' (engarrafamentos) — o vocabulário muda bastante em relação ao português. Pratique também as ordens e conselhos no imperativo, muito usados ao dar direções.",
      vocabulary: [{ category: "Tránsito", items: [
        { es: "el atasco", pt: "o engarrafamento" }, { es: "el semáforo", pt: "o semáforo" }, { es: "el carril", pt: "a faixa/pista" },
        { es: "adelantar", pt: "ultrapassar" }, { es: "el peaje", pt: "o pedágio" }, { es: "aparcar", pt: "estacionar" },
        { es: "el atasco kilométrico", pt: "o congestionamento quilométrico" }, { es: "el cinturón de seguridad", pt: "o cinto de segurança" }
      ]}],
      notes: ["'Aparcar' (não 'estacionar') es la palabra habitual en España.", "La 'll' de 'atasco kilométrico' no aparece, pero cuida el sonido fuerte de la 'k' en 'kilométrico'."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Siempre hay un atasco enorme a la salida de Madrid a esta hora." },
        { type: "speak", prompt: "Repita (presente):", target: "Es difícil aparcar en el centro entre semana." },
        { type: "speak", prompt: "Repita (pasado):", target: "Ayer tardé una hora más por culpa de un atasco kilométrico." },
        { type: "speak", prompt: "Repita (pasado):", target: "Un coche se paró en medio del carril y todos tuvimos que frenar." },
        { type: "speak", prompt: "Repita (futuro):", target: "Mañana saldré más temprano para evitar el tráfico." },
        { type: "speak", prompt: "Repita (futuro):", target: "El nuevo peaje reducirá el número de coches en la autopista." }
      ]
    },
    {
      id: "pr6", order: 6, title: "Entrevista de Trabajo", subtitle: "Hablando de tu experiencia",
      text: "En una entrevista de trabajo se combinan los tres tiempos naturalmente: el presente para describir quién eres, el pasado para tu experiencia y el futuro para tus objetivos. Cuida la entonación: en España las preguntas suben de tono al final.",
      textPt: "Numa entrevista de emprego combinam-se os três tempos naturalmente: o presente para descrever quem você é, o passado para sua experiência e o futuro para seus objetivos. Cuide a entonação: na Espanha as perguntas sobem de tom no final.",
      vocabulary: [{ category: "Entrevista de Trabajo", items: [
        { es: "el currículum", pt: "o currículo" }, { es: "la experiencia laboral", pt: "a experiência profissional" },
        { es: "el puesto de trabajo", pt: "o cargo/vaga" }, { es: "las fortalezas y debilidades", pt: "os pontos fortes e fracos" },
        { es: "la disponibilidad", pt: "a disponibilidade" }, { es: "el salario", pt: "o salário" }, { es: "contratar", pt: "contratar" }
      ]}],
      notes: ["La entonación de las preguntas en español sube claramente al final — practícalo con '¿Por qué le interesa este puesto?'", "'Currículum' se pronuncia con acento en la 'i': cu-rrí-cu-lum."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Soy consultor y auditor con más de quince años de experiencia." },
        { type: "speak", prompt: "Repita (presente):", target: "Actualmente trabajo con normas ISO de calidad y medio ambiente." },
        { type: "speak", prompt: "Repita (pasado):", target: "Trabajé varios años en una empresa de certificación internacional." },
        { type: "speak", prompt: "Repita (pasado):", target: "Estudié un máster en ingeniería industrial hace algunos años." },
        { type: "speak", prompt: "Repita (futuro):", target: "En este puesto quiero desarrollar nuevos proyectos de consultoría." },
        { type: "speak", prompt: "Repita (futuro):", target: "Con el tiempo me gustaría liderar un equipo de auditores." }
      ]
    },
    {
      id: "pr7", order: 7, title: "En la Auditoría", subtitle: "El día a día del auditor",
      text: "Las palabras de auditoría suelen ser largas y con muchas sílabas — 'conformidad', 'trazabilidad', 'procedimiento'. Practica dividiéndolas en sílabas antes de decir la frase completa, sin acelerar demasiado.",
      textPt: "As palavras de auditoria costumam ser longas e com muitas sílabas — 'conformidad' (conformidade), 'trazabilidad' (rastreabilidade), 'procedimiento' (procedimento). Pratique dividindo-as em sílabas antes de dizer a frase completa, sem acelerar demais.",
      vocabulary: [{ category: "Auditoría", items: [
        { es: "la no conformidad", pt: "a não conformidade" }, { es: "la evidencia objetiva", pt: "a evidência objetiva" },
        { es: "el plan de auditoría", pt: "o plano de auditoria" }, { es: "el hallazgo", pt: "o achado" },
        { es: "el auditado", pt: "o auditado" }, { es: "cerrar la no conformidad", pt: "fechar a não conformidade" }
      ]}],
      notes: ["'Trazabilidad' se divide: tra-za-bi-li-dad — cinco sílabas, con acento en la última.", "En 'conformidad', el acento cae en la última sílaba: con-for-mi-DAD."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Reviso la trazabilidad de los documentos antes de cerrar el hallazgo." },
        { type: "speak", prompt: "Repita (presente):", target: "El auditado presenta la evidencia objetiva durante la reunión de apertura." },
        { type: "speak", prompt: "Repita (pasado):", target: "Detectamos dos no conformidades menores en el área de producción." },
        { type: "speak", prompt: "Repita (pasado):", target: "El equipo entregó el informe final al comité la semana pasada." },
        { type: "speak", prompt: "Repita (futuro):", target: "La próxima auditoría se enfocará en la gestión de riesgos." },
        { type: "speak", prompt: "Repita (futuro):", target: "Cerraremos todas las no conformidades antes del próximo trimestre." }
      ]
    },
    {
      id: "pr8", order: 8, title: "En la Consultoría", subtitle: "Diagnóstico y recomendaciones",
      text: "El lenguaje de consultoría mezcla verbos de análisis (analizar, diagnosticar, recomendar) con expresiones de cortesía. Practica el ritmo pausado típico de una presentación formal.",
      textPt: "A linguagem de consultoria mistura verbos de análise (analisar, diagnosticar, recomendar) com expressões de cortesia. Pratique o ritmo pausado típico de uma apresentação formal.",
      vocabulary: [{ category: "Consultoría", items: [
        { es: "el diagnóstico", pt: "o diagnóstico" }, { es: "la recomendación", pt: "a recomendação" }, { es: "el plan de acción", pt: "o plano de ação" },
        { es: "la brecha / el gap", pt: "a lacuna" }, { es: "implementar mejoras", pt: "implementar melhorias" }, { es: "el cliente", pt: "o cliente" }
      ]}],
      notes: ["'Diagnóstico' lleva acento en la 'o': diag-NÓS-ti-co — un error común es acentuar mal esta palabra.", "La 'g' de 'diagnóstico' es suave (como en 'gato'), no fuerte como en 'gente'."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Analizamos los procesos de la empresa y recomendamos mejoras concretas." },
        { type: "speak", prompt: "Repita (presente):", target: "El diagnóstico muestra una brecha importante en la gestión de calidad." },
        { type: "speak", prompt: "Repita (pasado):", target: "Presentamos el plan de acción al director general la semana pasada." },
        { type: "speak", prompt: "Repita (pasado):", target: "El cliente aceptó todas nuestras recomendaciones sin ningún cambio." },
        { type: "speak", prompt: "Repita (futuro):", target: "Implementaremos las mejoras en un plazo de tres meses." },
        { type: "speak", prompt: "Repita (futuro):", target: "El próximo diagnóstico incluirá también los riesgos de seguridad." }
      ]
    },
    {
      id: "pr9", order: 9, title: "Negocios y Reuniones", subtitle: "Cerrando acuerdos",
      text: "En una reunión de negocios, la claridad y la cortesía van juntas. Practica frases con 'me gustaría' y 'podríamos', formas educadas muy usadas en España para proponer y negociar.",
      textPt: "Numa reunião de negócios, clareza e cortesia andam juntas. Pratique frases com 'me gustaría' (eu gostaria) e 'podríamos' (poderíamos), formas educadas muito usadas na Espanha para propor e negociar.",
      vocabulary: [{ category: "Negocios", items: [
        { es: "el acuerdo", pt: "o acordo" }, { es: "la propuesta", pt: "a proposta" }, { es: "el contrato", pt: "o contrato" },
        { es: "negociar", pt: "negociar" }, { es: "el presupuesto", pt: "o orçamento" }, { es: "firmar", pt: "assinar" }, { es: "el plazo de entrega", pt: "o prazo de entrega" }
      ]}],
      notes: ["'Presupuesto' tiene tres sílabas fuertes seguidas — practica despacio: pre-su-PUES-to.", "'Firmar' no significa 'confirmar', significa 'assinar' — cuidado con este falso amigo."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Nos gustaría revisar el presupuesto antes de firmar el contrato." },
        { type: "speak", prompt: "Repita (presente):", target: "Normalmente negociamos el plazo de entrega con cada proveedor." },
        { type: "speak", prompt: "Repita (pasado):", target: "Firmamos el acuerdo con el nuevo cliente el mes pasado." },
        { type: "speak", prompt: "Repita (pasado):", target: "La propuesta inicial no convenció al comité directivo." },
        { type: "speak", prompt: "Repita (futuro):", target: "La próxima semana presentaremos una nueva propuesta más competitiva." },
        { type: "speak", prompt: "Repita (futuro):", target: "Firmaremos el contrato en cuanto el cliente confirme el presupuesto." }
      ]
    },
    {
      id: "pr10", order: 10, title: "En el Trabajo — Rutina y Reuniones", subtitle: "El día a día laboral",
      text: "Hablar del trabajo diario mezcla rutina (presente), lo que ya se hizo (pasado) y lo que queda pendiente (futuro). Es el terreno perfecto para practicar los tres tiempos en una sola conversación.",
      textPt: "Falar do trabalho diário mistura rotina (presente), o que já foi feito (passado) e o que ainda falta fazer (futuro). É o terreno perfeito para praticar os três tempos em uma única conversa.",
      vocabulary: [{ category: "Trabajo", items: [
        { es: "la reunión de equipo", pt: "a reunião de equipe" }, { es: "el correo electrónico", pt: "o e-mail" },
        { es: "la tarea pendiente", pt: "a tarefa pendente" }, { es: "el compañero de trabajo", pt: "o colega de trabalho" },
        { es: "la fecha límite", pt: "o prazo final" }, { es: "el informe", pt: "o relatório" }
      ]}],
      notes: ["'Fecha límite' — la 'ch' de 'fecha' es suave, un solo sonido, diferente del portugués.", "'Compañero' lleva la 'ñ' — practica el sonido nasal palatal, muy distinto de 'nh' en portugués aunque suene parecido."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Todos los lunes tenemos una reunión de equipo a primera hora." },
        { type: "speak", prompt: "Repita (presente):", target: "Reviso mi correo electrónico antes de empezar cualquier tarea." },
        { type: "speak", prompt: "Repita (pasado):", target: "Ayer terminé el informe justo antes de la fecha límite." },
        { type: "speak", prompt: "Repita (pasado):", target: "Mi compañero me ayudó con una tarea pendiente muy complicada." },
        { type: "speak", prompt: "Repita (futuro):", target: "Mañana tendremos que entregar el informe final al director." },
        { type: "speak", prompt: "Repita (futuro):", target: "La próxima semana organizaré mejor mis tareas pendientes." }
      ]
    },
    {
      id: "pr11", order: 11, title: "Medio Ambiente", subtitle: "Sostenibilidad y gestión ambiental",
      text: "El vocabulario ambiental combina palabras técnicas con conceptos de la vida diaria. Practica el sonido de la 's' final, que en español de España se pronuncia con claridad, sin aspirarse como en algunas zonas de Latinoamérica.",
      textPt: "O vocabulário ambiental combina palavras técnicas com conceitos do dia a dia. Pratique o som do 's' final, que no espanhol da Espanha é pronunciado com clareza, sem ser aspirado como em algumas regiões da América Latina.",
      vocabulary: [{ category: "Medio Ambiente", items: [
        { es: "el impacto ambiental", pt: "o impacto ambiental" }, { es: "los residuos", pt: "os resíduos" }, { es: "reciclar", pt: "reciclar" },
        { es: "la huella de carbono", pt: "a pegada de carbono" }, { es: "el aspecto ambiental", pt: "o aspecto ambiental" }, { es: "la gestión de residuos", pt: "a gestão de resíduos" }
      ]}],
      notes: ["'Residuos' se pronuncia re-SI-duos, con el acento en la 'i', no en la 'e'.", "Marca bien todas las 's' finales: 'los aspectos ambientales' — cada 's' se oye clara en español peninsular."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "La empresa evalúa el impacto ambiental de todos sus procesos." },
        { type: "speak", prompt: "Repita (presente):", target: "Reciclamos los residuos de papel y plástico en contenedores separados." },
        { type: "speak", prompt: "Repita (pasado):", target: "El año pasado la fábrica redujo su huella de carbono en un veinte por ciento." },
        { type: "speak", prompt: "Repita (pasado):", target: "Identificamos varios aspectos ambientales significativos durante la revisión." },
        { type: "speak", prompt: "Repita (futuro):", target: "La próxima norma exigirá una gestión de residuos más estricta." },
        { type: "speak", prompt: "Repita (futuro):", target: "Reduciremos el consumo de agua en la nueva planta industrial." }
      ]
    },
    {
      id: "pr12", order: 12, title: "Seguridad y Salud Ocupacional", subtitle: "Prevención de riesgos laborales",
      text: "En seguridad laboral, muchas palabras terminan en '-ción' — 'prevención', 'protección', 'capacitación'. Esta terminación se pronuncia siempre igual: 'sión' suave, con el acento en la última sílaba.",
      textPt: "Em segurança do trabalho, muitas palavras terminam em '-ción' — 'prevención' (prevenção), 'protección' (proteção), 'capacitación' (capacitação/treinamento). Essa terminação se pronuncia sempre igual: som suave, com o acento na última sílaba.",
      vocabulary: [{ category: "Seguridad y Salud Ocupacional", items: [
        { es: "el riesgo laboral", pt: "o risco ocupacional" }, { es: "el equipo de protección personal (EPP)", pt: "o EPI" },
        { es: "el accidente de trabajo", pt: "o acidente de trabalho" }, { es: "la capacitación", pt: "o treinamento/capacitação" },
        { es: "prevenir", pt: "prevenir" }, { es: "el casco y los guantes", pt: "o capacete e as luvas" }
      ]}],
      notes: ["Todas las palabras en '-ción' llevan el acento en la última sílaba: pre-ven-CIÓN.", "'Riesgo' tiene un diptongo 'ie' que se pronuncia en una sola sílaba: RIES-go, no ri-es-go."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Todos los trabajadores usan el equipo de protección personal en la planta." },
        { type: "speak", prompt: "Repita (presente):", target: "El área de seguridad evalúa los riesgos laborales cada mes." },
        { type: "speak", prompt: "Repita (pasado):", target: "El mes pasado tuvimos una capacitación sobre prevención de accidentes." },
        { type: "speak", prompt: "Repita (pasado):", target: "No hubo ningún accidente de trabajo durante todo el trimestre." },
        { type: "speak", prompt: "Repita (futuro):", target: "La próxima capacitación será sobre el uso correcto del casco y los guantes." },
        { type: "speak", prompt: "Repita (futuro):", target: "Reduciremos el riesgo laboral con nuevos procedimientos de seguridad." }
      ]
    },
    {
      id: "pr13", order: 13, title: "Calidad de Procesos y Procedimientos", subtitle: "Gestión de la calidad",
      text: "Las palabras 'procedimiento' y 'proceso' se confunden fácilmente al hablar rápido. Practica marcando bien cada sílaba: pro-ce-di-MIEN-to tiene una sílaba más que pro-CE-so.",
      textPt: "As palavras 'procedimiento' (procedimento) e 'proceso' (processo) se confundem facilmente ao falar rápido. Pratique marcando bem cada sílaba: pro-ce-di-MIEN-to tem uma sílaba a mais que pro-CE-so.",
      vocabulary: [{ category: "Calidad de Procesos", items: [
        { es: "el procedimiento documentado", pt: "o procedimento documentado" }, { es: "el proceso productivo", pt: "o processo produtivo" },
        { es: "el control de calidad", pt: "o controle de qualidade" }, { es: "la mejora continua", pt: "a melhoria contínua" },
        { es: "el indicador de calidad", pt: "o indicador de qualidade" }, { es: "cumplir el procedimiento", pt: "cumprir o procedimento" }
      ]}],
      notes: ["'Procedimiento' tiene el diptongo 'ie' en la penúltima sílaba: proce-di-MIEN-to.", "'Continua' cambia de significado según el acento: contiNUA (adjetivo) vs continÚa (verbo continuar)."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Cada proceso productivo tiene su propio procedimiento documentado." },
        { type: "speak", prompt: "Repita (presente):", target: "El equipo de calidad revisa los indicadores todas las semanas." },
        { type: "speak", prompt: "Repita (pasado):", target: "Actualizamos el procedimiento después de detectar varios errores." },
        { type: "speak", prompt: "Repita (pasado):", target: "El control de calidad mejoró mucho después del último cambio." },
        { type: "speak", prompt: "Repita (futuro):", target: "El próximo procedimiento incluirá controles más estrictos." },
        { type: "speak", prompt: "Repita (futuro):", target: "Implementaremos la mejora continua en todos los procesos de la fábrica." }
      ]
    },
    {
      id: "pr14", order: 14, title: "Gobernanza, Dirección y Organigrama", subtitle: "La estructura de la empresa",
      text: "Hablar de la estructura organizativa exige claridad al nombrar cargos y jerarquías. Practica los títulos con cuidado: 'director general', 'junta directiva', 'consejo de administración'.",
      textPt: "Falar da estrutura organizacional exige clareza ao nomear cargos e hierarquias. Pratique os títulos com cuidado: 'director general' (diretor geral), 'junta directiva' (diretoria), 'consejo de administración' (conselho de administração).",
      vocabulary: [{ category: "Gobernanza y Dirección", items: [
        { es: "el consejo de administración", pt: "o conselho de administração" }, { es: "la junta directiva", pt: "a diretoria" },
        { es: "el organigrama", pt: "o organograma" }, { es: "la alta dirección", pt: "a alta direção" }, { es: "el responsable de área", pt: "o responsável pela área" },
        { es: "tomar decisiones", pt: "tomar decisões" }
      ]}],
      notes: ["'Organigrama' se pronuncia or-ga-ni-GRA-ma, con el acento en la penúltima sílaba.", "'Junta' y 'gestión' llevan sonidos distintos de 'j' y 'g' — compara ambos con cuidado."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "El consejo de administración se reúne una vez al mes." },
        { type: "speak", prompt: "Repita (presente):", target: "Cada responsable de área presenta su informe a la alta dirección." },
        { type: "speak", prompt: "Repita (pasado):", target: "La junta directiva aprobó el nuevo organigrama la semana pasada." },
        { type: "speak", prompt: "Repita (pasado):", target: "Tomamos varias decisiones importantes durante la última reunión." },
        { type: "speak", prompt: "Repita (futuro):", target: "El próximo organigrama tendrá una nueva dirección de sostenibilidad." },
        { type: "speak", prompt: "Repita (futuro):", target: "La alta dirección decidirá el presupuesto del año que viene." }
      ]
    },
    {
      id: "pr15", order: 15, title: "Indicadores y Sostenibilidad", subtitle: "Midiendo el progreso",
      text: "Los indicadores combinan números con palabras técnicas — practica decir porcentajes y cifras con claridad. La sostenibilidad, con su 'st' inicial poco común en español, también merece atención especial.",
      textPt: "Os indicadores combinam números com palavras técnicas — pratique dizer porcentagens e números com clareza. A palavra 'sostenibilidad' (sustentabilidade), com seu 'st' inicial pouco comum em espanhol, também merece atenção especial.",
      vocabulary: [{ category: "Indicadores y Sostenibilidad", items: [
        { es: "el indicador clave (KPI)", pt: "o indicador-chave (KPI)" }, { es: "la meta / el objetivo", pt: "a meta / o objetivo" },
        { es: "el porcentaje de cumplimiento", pt: "o percentual de cumprimento" }, { es: "la sostenibilidad", pt: "a sustentabilidade" },
        { es: "el desarrollo sostenible", pt: "o desenvolvimento sustentável" }, { es: "medir el desempeño", pt: "medir o desempenho" }
      ]}],
      notes: ["'Sostenibilidad' se divide sos-te-ni-bi-li-DAD — seis sílabas, acento en la última.", "Los porcentajes se dicen así: '85%' = 'ochenta y cinco por ciento', sin abreviar."],
      exercises: [
        { type: "speak", prompt: "Repita (presente):", target: "Medimos el desempeño de cada área con indicadores claros." },
        { type: "speak", prompt: "Repita (presente):", target: "La sostenibilidad es una prioridad para la alta dirección." },
        { type: "speak", prompt: "Repita (pasado):", target: "El porcentaje de cumplimiento aumentó del setenta al noventa por ciento." },
        { type: "speak", prompt: "Repita (pasado):", target: "Definimos nuevas metas de desarrollo sostenible el año pasado." },
        { type: "speak", prompt: "Repita (futuro):", target: "El próximo informe incluirá indicadores de sostenibilidad ambiental." },
        { type: "speak", prompt: "Repita (futuro):", target: "Mediremos el progreso de cada meta cada tres meses." }
      ]
    }
  ]
};
