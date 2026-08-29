/* ==========================================================================
   EspañolYa! — Conteúdo: Módulo BÔNUS · TIEMPOS VERBALES
   Presente, Pasado (Pretérito Perfecto Compuesto / Simple / Imperfecto) e
   Futuro (Futuro Simple / Ir a + Infinitivo), com o uso específico do
   espanhol PENINSULAR (España) confirmado por pesquisa gramatical (RAE,
   Enforex, Burbuja del Español, Linguatua, Lets Speak Spanish) em 2026-07-27.
   Módulo de curiosidades/reforço gramatical — sem prova obrigatória, com
   muitos exercícios (incluindo "speak") para fixar cada tempo verbal.
   ========================================================================== */

const LEVEL_TIEMPOS = {
  id: "tiempos",
  name: "Tiempos Verbales",
  icon: "⏳",
  colorFrom: "#00695C",
  colorTo: "#AA151B",
  description: "Módulo bônus: presente, pasado (3 formas) y futuro (2 formas) — a gramática essencial do espanhol da Espanha, explicada, exemplificada e praticada.",
  lessons: [
    {
      id: "t1",
      order: 1,
      title: "Presente de Indicativo",
      subtitle: "Rutinas, verdades y también el futuro cercano",
      text: "En español, el presente de indicativo se usa muchísimo más de lo que uno imagina: no solo para hablar de lo que pasa ahora mismo, sino también para rutinas, verdades generales y hasta para planes cercanos. Podemos distinguir al menos cinco usos principales. Primero, el presente de acción actual: \"Ahora mismo estoy leyendo tu correo\" (aunque en este caso lo más natural sea el presente continuo, el presente simple también funciona: \"Ahora leo tu correo\"). Segundo, el presente de rutina o hábito, el más frecuente de todos: \"Todos los lunes reviso los indicadores de calidad con mi equipo\". Tercero, el presente de verdad general o atemporal, usado para leyes científicas, refranes y hechos que no cambian: \"El agua hierve a cien grados\", \"Quien mucho abarca, poco aprieta\". Cuarto, y este es el que más sorprende a los estudiantes brasileños, el presente con valor de futuro cercano: en España, cuando alguien dice \"mañana voy a Madrid\", en realidad está usando el presente (\"voy\") con valor de futuro — es igual de correcto y muchísimo más natural que \"mañana iré a Madrid\". Este uso es tan común que muchas veces reemplaza por completo al futuro simple en la conversación diaria: \"El lunes empiezo el nuevo contrato\", \"La semana que viene te llamo sin falta\". Y quinto, los periódicos y libros de historia españoles usan el llamado presente histórico para narrar hechos pasados con más viveza, como si el lector estuviera presenciando el acontecimiento: \"En 1978 España aprueba su Constitución\", \"Colón llega a América en 1492\" — suena mucho más vivo que \"aprobó\" o \"llegó\". Dominar el presente es la base de todo lo demás: casi todos los demás tiempos verbales se construyen a partir de sus raíces e irregularidades, así que cualquier error que arrastres del presente (por ejemplo, no saber que \"tener\" es irregular en la primera persona: \"tengo\") se repetirá en el subjuntivo, en el imperativo y en varios otros tiempos.",
      textPt: "Em espanhol, o presente do indicativo é usado muito mais do que se imagina: não só para falar do que acontece agora mesmo, mas também para rotinas, verdades gerais e até para planos próximos. Podemos distinguir pelo menos cinco usos principais. Primeiro, o presente de ação atual: \"Agora mesmo estou lendo seu e-mail\" (embora nesse caso o mais natural seja o presente contínuo, o presente simples também funciona: \"Agora leio seu e-mail\"). Segundo, o presente de rotina ou hábito, o mais frequente de todos: \"Toda segunda-feira reviso os indicadores de qualidade com minha equipe\". Terceiro, o presente de verdade geral ou atemporal, usado para leis científicas, provérbios e fatos que não mudam: \"A água ferve a cem graus\", \"Quem tudo quer, tudo perde\". Quarto, e este é o que mais surpreende os estudantes brasileiros, o presente com valor de futuro próximo: na Espanha, quando alguém diz \"mañana voy a Madrid\" (amanhã vou a Madrid), na verdade está usando o presente (\"voy\") com valor de futuro — é igualmente correto e muito mais natural do que \"mañana iré a Madrid\". Esse uso é tão comum que muitas vezes substitui por completo o futuro simples na conversa diária: \"O contrato eu começo na segunda\", \"Semana que vem eu te ligo sem falta\". E quinto, os jornais e livros de história espanhóis usam o chamado presente histórico para narrar fatos passados com mais vivacidade, como se o leitor estivesse presenciando o acontecimento: \"Em 1978 a Espanha aprova sua Constituição\", \"Colombo chega à América em 1492\" — soa muito mais vivo que \"aprovou\" ou \"chegou\". Dominar o presente é a base de tudo o mais: quase todos os outros tempos verbais se constroem a partir das suas raízes e irregularidades, então qualquer erro que você carregar do presente (por exemplo, não saber que \"tener\" é irregular na primeira pessoa: \"tengo\") vai se repetir no subjuntivo, no imperativo e em vários outros tempos.",
      dialogue: [
        { who: "Jefa", es: "Anderson, ¿qué tal va el informe de auditoría?", pt: "Anderson, como vai o relatório de auditoria?" },
        { who: "Anderson", es: "Va bien. Normalmente termino los informes en dos días, pero este cliente tiene muchos procesos.", pt: "Vai bem. Normalmente eu termino os relatórios em dois dias, mas este cliente tem muitos processos." },
        { who: "Jefa", es: "¿Puedes enviármelo hoy? Mañana lo presento al comité.", pt: "Você pode me enviar hoje? Amanhã eu apresento ao comitê." },
        { who: "Anderson", es: "Claro. Lo reviso una vez más y te lo mando en una hora.", pt: "Claro. Reviso mais uma vez e te mando em uma hora." }
      ],
      vocabulary: [
        {
          category: "Marcadores de tiempo del presente",
          items: [
            { es: "siempre", pt: "sempre" },
            { es: "normalmente", pt: "normalmente" },
            { es: "a veces", pt: "às vezes" },
            { es: "casi nunca", pt: "quase nunca" },
            { es: "nunca", pt: "nunca" },
            { es: "todos los días", pt: "todos os dias" },
            { es: "cada semana", pt: "cada semana" },
            { es: "los lunes", pt: "às segundas-feiras" },
            { es: "actualmente", pt: "atualmente" },
            { es: "hoy en día", pt: "hoje em dia" },
            { es: "por lo general", pt: "geralmente" },
            { es: "en general", pt: "em geral" }
          ]
        },
        {
          category: "Verbos de uso muy frecuente en presente (vida profesional y cotidiana)",
          items: [
            { es: "revisar", pt: "revisar" }, { es: "controlar", pt: "controlar" }, { es: "gestionar", pt: "gerir/gerenciar" },
            { es: "cumplir", pt: "cumprir" }, { es: "verificar", pt: "verificar" }, { es: "planificar", pt: "planejar" },
            { es: "coordinar", pt: "coordenar" }, { es: "supervisar", pt: "supervisionar" }, { es: "entregar", pt: "entregar" },
            { es: "necesitar", pt: "precisar" }, { es: "preferir", pt: "preferir" }, { es: "entender/comprender", pt: "entender/compreender" },
            { es: "empezar/comenzar", pt: "começar" }, { es: "seguir/continuar", pt: "seguir/continuar" }, { es: "conseguir/lograr", pt: "conseguir" }
          ]
        }
      ],
      grammar: [
        {
          title: "Verbos regulares (-AR, -ER, -IR)",
          headers: ["Pronombres", "Hablar", "Comer", "Vivir"],
          rows: [
            ["Yo", "Hablo", "Como", "Vivo"],
            ["Tú/Vos", "Hablas", "Comes", "Vives"],
            ["Él/Ella/Usted", "Habla", "Come", "Vive"],
            ["Nosotros/Nosotras", "Hablamos", "Comemos", "Vivimos"],
            ["Vosotros/Vosotras", "Habláis", "Coméis", "Vivís"],
            ["Ellos/Ellas/Ustedes", "Hablan", "Comen", "Viven"]
          ]
        },
        {
          title: "Diptongación — Querer (e→ie), Poder (o→ue), Pedir (e→i)",
          headers: ["Pronombres", "Querer", "Poder", "Pedir"],
          rows: [
            ["Yo", "Quiero", "Puedo", "Pido"],
            ["Tú/Vos", "Quieres", "Puedes", "Pides"],
            ["Él/Ella/Usted", "Quiere", "Puede", "Pide"],
            ["Nosotros/Nosotras", "Queremos", "Podemos", "Pedimos"],
            ["Vosotros/Vosotras", "Queréis", "Podéis", "Pedís"],
            ["Ellos/Ellas/Ustedes", "Quieren", "Pueden", "Piden"]
          ]
        },
        {
          title: "Irregulares solo en la 1ª persona (yo)",
          headers: ["Pronombres", "Tener", "Hacer", "Salir"],
          rows: [
            ["Yo", "Tengo", "Hago", "Salgo"],
            ["Tú/Vos", "Tienes", "Haces", "Sales"],
            ["Él/Ella/Usted", "Tiene", "Hace", "Sale"],
            ["Nosotros/Nosotras", "Tenemos", "Hacemos", "Salimos"],
            ["Vosotros/Vosotras", "Tenéis", "Hacéis", "Salís"],
            ["Ellos/Ellas/Ustedes", "Tienen", "Hacen", "Salen"]
          ]
        },
        {
          title: "Ser, Estar, Ir y Haber — totalmente irregulares",
          headers: ["Pronombres", "Ser", "Estar", "Ir", "Haber"],
          rows: [
            ["Yo", "Soy", "Estoy", "Voy", "He"],
            ["Tú/Vos", "Eres", "Estás", "Vas", "Has"],
            ["Él/Ella/Usted", "Es", "Está", "Va", "Ha"],
            ["Nosotros/Nosotras", "Somos", "Estamos", "Vamos", "Hemos"],
            ["Vosotros/Vosotras", "Sois", "Estáis", "Vais", "Habéis"],
            ["Ellos/Ellas/Ustedes", "Son", "Están", "Van", "Han"]
          ]
        }
      ],
      notes: [
        "Regla de oro para decidir cuándo usar el presente: si la acción es HABITUAL, GENERAL o ya DECIDIDA para el futuro cercano, usa presente. Contraste: \"Trabajo en Madrid\" (rutina) frente a \"El lunes empiezo el nuevo proyecto\" (futuro ya decidido) — las dos frases están en presente, aunque una hable del futuro.",
        "Cuidado con el 'falso amigo' del portugués: 'tener' y 'hacer' cambian SOLO en la primera persona (tengo, hago), no en las demás. Memorízalos como excepción, porque el resto de personas (tú tienes, él tiene...) sí sigue el patrón normal de diptongación o es regular.",
        "Los verbos con diptongación (e→ie: querer→quiero; o→ue: poder→puedo; e→i: pedir→pido) SOLO diptongan en las personas donde el acento cae en la raíz — es decir, todas menos 'nosotros' y 'vosotros'. Truco para recordarlo: nosotros/vosotros son las únicas formas donde el acento cae en la terminación, por eso 'suenan' distintas: pensamos/pensáis, nunca \"piensamos\".",
        "El presente histórico es un recurso de estilo, no una obligación: los periódicos y libros de historia lo usan para dar viveza (\"Colón llega a América en 1492\"), pero en una conversación normal seguirías usando el pasado (\"Colón llegó\"). Reconocerlo te ayuda a entender titulares y textos narrativos, aunque no lo uses tú mismo todos los días.",
        "'Haber' en presente (he/has/ha/hemos/habéis/han) casi nunca aparece solo: casi siempre acompaña a un participio para formar el pretérito perfecto compuesto (he terminado, ha llegado), que ves en la próxima lección. Si ves 'ha' o 'han' sueltos en un texto, revisa con calma: seguramente falta o sigue un participio cerca.",
        "Ser, estar, ir y haber son los cuatro verbos MÁS irregulares del presente — no siguen ningún patrón lógico, así que conviene memorizarlos como un bloque aparte, casi como una canción: soy-eres-es-somos-sois-son.",
        "Consejo práctico: si dudas entre presente simple y presente continuo (estoy + gerundio) para hablar de AHORA MISMO, en España el presente simple ya es perfectamente natural y hasta más común en el habla informal — \"Leo tu correo\" es tan válido como \"Estoy leyendo tu correo\"."
      ],
      exercises: [
        { type: "mc", q: "¿Cuál es la forma correcta de 'Nosotros' para el verbo 'Pedir'?", options: ["Pidemos", "Pedimos", "Piden"], correct: 1 },
        { type: "mc", q: "'Vosotros ___ razón' (tener) — España usa siempre 'vosotros' entre amigos.", options: ["tenéis", "tenen", "tienen"], correct: 0 },
        { type: "mc", q: "¿Qué frase usa el presente con valor de futuro cercano?", options: ["Iré al médico la próxima semana.", "El viernes entrego el informe.", "Fui al médico ayer."], correct: 1 },
        { type: "fill", q: "Ella ___ mucho café por la mañana. (tomar)", answer: "toma" },
        { type: "fill", q: "¿A qué hora ___ (vosotros) del trabajo normalmente? (salir)", answer: "salís" },
        { type: "translate", from: "pt", text: "Eu normalmente termino os relatórios em dois dias.", answer: "Yo normalmente termino los informes en dos días." },
        { type: "translate", from: "pt", text: "Nós sempre trabalhamos até tarde às sextas-feiras.", answer: "Nosotros siempre trabajamos hasta tarde los viernes." },
        {
          type: "order",
          items: [
            "Buenos días, ¿en qué puedo ayudarle?",
            "Quisiera revisar el estado de mi certificación ISO.",
            "Claro, deme un momento y consulto el sistema.",
            "Perfecto, muchas gracias."
          ],
          correctOrder: [0, 1, 2, 3]
        },
        { type: "speak", prompt: "Diga en voz alta esta frase con presente de rutina profesional:", target: "Normalmente reviso los informes antes de enviarlos al cliente." },
        { type: "speak", prompt: "Diga en voz alta esta frase con presente de futuro cercano:", target: "El lunes empezamos la auditoría en la nueva planta." }
      ]
    },
    {
      id: "t2",
      order: 2,
      title: "Pasado — Compuesto, Simple e Imperfecto",
      subtitle: "El pasado que más confunde a los brasileños",
      text: "El español tiene tres pasados de uso muy frecuente, y en España se usan de una forma que suele sorprender a quien aprende: si el periodo de tiempo todavía está \"abierto\" (hoy, esta semana, este mes, este año, mi vida hasta ahora), se usa el pretérito perfecto compuesto: \"He terminado el informe esta mañana\", \"Este año hemos certificado quince empresas\", \"Nunca he estado en Japón\". Si el periodo ya está cerrado (ayer, la semana pasada, en 2020, hace tres años), se usa el pretérito perfecto simple, también llamado indefinido: \"Terminé el informe ayer\", \"El año pasado certificamos veinte empresas\", \"Estuve en Japón en 2015\". Y para describir el marco, el ambiente, un estado o una costumbre del pasado — sin importar cuándo empezó o terminó, sin ninguna acción puntual — se usa el pretérito imperfecto: \"Cuando trabajaba en la fábrica, siempre llegaba a las siete\", \"El cielo estaba nublado y hacía mucho frío\", \"De niño, quería ser bombero\". Los tres tiempos conviven todo el tiempo en una misma conversación, y saber elegir el correcto es una de las señales más claras de fluidez real en español. Fíjate en este ejemplo completo, típico de una reunión de trabajo: \"Esta semana hemos revisado (compuesto, periodo abierto) todos los procedimientos. Ayer detectamos (simple, día cerrado) dos no conformidades, justo cuando el operario explicaba (imperfecto, acción de fondo) el proceso de empaquetado. Antes, la empresa no tenía (imperfecto, estado/costumbre) ningún sistema de trazabilidad, pero el año pasado implementaron (simple) uno nuevo.\" Ojo: en gran parte de Latinoamérica —y también en algunas zonas del sur de España, como Canarias, Galicia o Asturias— se prefiere el indefinido incluso para \"hoy\" (\"Hoy comí en casa\" en lugar de \"Hoy he comido en casa\"), pero como este curso sigue el español estándar de España (centro y norte peninsular), aquí el compuesto es el gran protagonista del pasado reciente, y es lo que vas a escuchar constantemente en Madrid, en la radio y en la televisión españolas.",
      textPt: "O espanhol tem três passados de uso muito frequente, e na Espanha eles são usados de uma forma que costuma surpreender quem aprende: se o período de tempo ainda está \"aberto\" (hoje, esta semana, este mês, este ano, minha vida até agora), usa-se o pretérito perfeito composto: \"He terminado el informe esta mañana\" (terminei o relatório esta manhã), \"Este año hemos certificado quince empresas\" (este ano certificamos quinze empresas), \"Nunca he estado en Japón\" (nunca estive no Japão). Se o período já está fechado (ontem, semana passada, em 2020, há três anos), usa-se o pretérito perfeito simples, também chamado indefinido: \"Terminé el informe ayer\" (terminei o relatório ontem), \"El año pasado certificamos veinte empresas\" (ano passado certificamos vinte empresas), \"Estuve en Japón en 2015\" (estive no Japão em 2015). E para descrever o cenário, o ambiente, um estado ou um hábito do passado — sem importar quando começou ou terminou, sem nenhuma ação pontual — usa-se o pretérito imperfeito: \"Cuando trabajaba en la fábrica, siempre llegaba a las siete\" (quando eu trabalhava na fábrica, sempre chegava às sete), \"El cielo estaba nublado y hacía mucho frío\" (o céu estava nublado e fazia muito frio), \"De niño, quería ser bombero\" (quando criança, eu queria ser bombeiro). Os três tempos convivem o tempo todo em uma mesma conversa, e saber escolher o correto é um dos sinais mais claros de fluência real em espanhol. Repare neste exemplo completo, típico de uma reunião de trabalho: \"Esta semana hemos revisado (composto, período aberto) todos os procedimentos. Ontem detectamos (simples, dia fechado) duas não conformidades, justamente quando o operário explicaba (imperfeito, ação de fundo) o processo de embalagem. Antes, a empresa não tinha (imperfeito, estado/hábito) nenhum sistema de rastreabilidade, mas ano passado implementaram (simples) um novo.\" Atenção: em boa parte da América Latina — e também em algumas regiões do sul da Espanha, como Canárias, Galiza ou Astúrias — prefere-se o indefinido mesmo para \"hoje\" (\"Hoy comí en casa\" em vez de \"Hoy he comido en casa\"), mas como este curso segue o espanhol padrão da Espanha (centro e norte peninsular), aqui o composto é o grande protagonista do passado recente, e é o que você vai ouvir o tempo todo em Madri, no rádio e na televisão espanhola.",
      dialogue: [
        { who: "Cliente", es: "¿Qué tal ha ido la visita de hoy?", pt: "Como foi a visita de hoje?" },
        { who: "Anderson", es: "Ha ido muy bien. Hemos revisado todos los procesos de calidad esta mañana.", pt: "Foi muito bem. Revisamos todos os processos de qualidade esta manhã." },
        { who: "Cliente", es: "¿Y encontraron algo el mes pasado, en la auditoría anterior?", pt: "E vocês encontraram algo no mês passado, na auditoria anterior?" },
        { who: "Anderson", es: "Sí, detectamos dos no conformidades menores, pero ya las corrigieron.", pt: "Sim, detectamos duas não conformidades menores, mas já as corrigiram." },
        { who: "Cliente", es: "Qué bien. Antes teníamos muchos más problemas de documentación.", pt: "Que bom. Antes tínhamos muito mais problemas de documentação." }
      ],
      vocabulary: [
        {
          category: "Marcadores de pasado (compuesto vs. simple vs. imperfecto)",
          items: [
            { es: "hoy / esta semana / este mes / este año", pt: "hoje / esta semana / este mês / este ano (→ compuesto)" },
            { es: "ayer / anteayer", pt: "ontem / anteontem (→ simple)" },
            { es: "la semana pasada / el mes pasado / el año pasado", pt: "semana passada / mês passado / ano passado (→ simple)" },
            { es: "hace dos años / en 2019", pt: "há dois anos / em 2019 (→ simple)" },
            { es: "mientras / cuando", pt: "enquanto / quando (→ imperfecto para el fondo)" },
            { es: "de niño / de joven / antes", pt: "quando criança / quando jovem / antes (→ imperfecto)" },
            { es: "de repente / de pronto", pt: "de repente (→ interrumpe el imperfecto, marca simple)" },
            { es: "todavía no / ya", pt: "ainda não / já (→ compuesto)" }
          ]
        },
        {
          category: "Verbos irregulares muy comunes en el indefinido (más allá de hacer/ir/ser/dormir)",
          items: [
            { es: "tener → tuve", pt: "ter → tive" }, { es: "estar → estuve", pt: "estar → estive" }, { es: "poder → pude", pt: "poder → pude" },
            { es: "poner → puse", pt: "colocar → coloquei" }, { es: "saber → supe", pt: "saber → soube" }, { es: "querer → quise", pt: "querer → quis" },
            { es: "venir → vine", pt: "vir → vim" }, { es: "decir → dije", pt: "dizer → disse" }, { es: "traer → traje", pt: "trazer → trouxe" },
            { es: "andar → anduve", pt: "andar → andei" }, { es: "caber → cupe", pt: "caber → coube" }, { es: "producir → produje", pt: "produzir → produzi" }
          ]
        }
      ],
      grammar: [
        {
          title: "Pretérito Perfecto Compuesto (haber + participio) — el más usado en España para el pasado reciente",
          headers: ["Pronombres", "Hablar", "Comer", "Vivir"],
          rows: [
            ["Yo", "He hablado", "He comido", "He vivido"],
            ["Tú/Vos", "Has hablado", "Has comido", "Has vivido"],
            ["Él/Ella/Usted", "Ha hablado", "Ha comido", "Ha vivido"],
            ["Nosotros/Nosotras", "Hemos hablado", "Hemos comido", "Hemos vivido"],
            ["Vosotros/Vosotras", "Habéis hablado", "Habéis comido", "Habéis vivido"],
            ["Ellos/Ellas/Ustedes", "Han hablado", "Han comido", "Han vivido"]
          ]
        },
        {
          title: "Participios irregulares más usados",
          headers: ["Infinitivo", "Participio"],
          rows: [
            ["Hacer", "Hecho"], ["Decir", "Dicho"], ["Ver", "Visto"], ["Poner", "Puesto"],
            ["Escribir", "Escrito"], ["Romper", "Roto"], ["Volver", "Vuelto"], ["Abrir", "Abierto"],
            ["Cubrir", "Cubierto"], ["Morir", "Muerto"], ["Resolver", "Resuelto"], ["Freír", "Frito"]
          ]
        },
        {
          title: "Pretérito Perfecto Simple (Indefinido) — regular",
          headers: ["Pronombres", "Trabajar", "Beber", "Escribir"],
          rows: [
            ["Yo", "Trabajé", "Bebí", "Escribí"],
            ["Tú/Vos", "Trabajaste", "Bebiste", "Escribiste"],
            ["Él/Ella/Usted", "Trabajó", "Bebió", "Escribió"],
            ["Nosotros/Nosotras", "Trabajamos", "Bebimos", "Escribimos"],
            ["Vosotros/Vosotras", "Trabajasteis", "Bebisteis", "Escribisteis"],
            ["Ellos/Ellas/Ustedes", "Trabajaron", "Bebieron", "Escribieron"]
          ]
        },
        {
          title: "Pretérito Imperfecto — regular + Ser/Ir (irregulares)",
          headers: ["Pronombres", "Hablar", "Vivir/Comer", "Ser", "Ir"],
          rows: [
            ["Yo", "Hablaba", "Vivía", "Era", "Iba"],
            ["Tú/Vos", "Hablabas", "Vivías", "Eras", "Ibas"],
            ["Él/Ella/Usted", "Hablaba", "Vivía", "Era", "Iba"],
            ["Nosotros/Nosotras", "Hablábamos", "Vivíamos", "Éramos", "Íbamos"],
            ["Vosotros/Vosotras", "Hablabais", "Vivíais", "Erais", "Ibais"],
            ["Ellos/Ellas/Ustedes", "Hablaban", "Vivían", "Eran", "Iban"]
          ]
        }
      ],
      notes: [
        "El truco más práctico para España: pregúntate '¿el periodo de tiempo que menciono ya se cerró o todavía está abierto?'. Si dices 'hoy', 'esta semana', 'este año' → el periodo sigue abierto → compuesto (he terminado). Si dices 'ayer', 'el año pasado', 'en 2020' → el periodo ya cerró → simple (terminé).",
        "El imperfecto NUNCA cuenta una acción puntual con principio y fin claros — solo describe el FONDO: el clima, la hora, la edad, un estado de ánimo, una costumbre repetida sin número exacto de veces. Por eso 'llovía' (fondo) convive con 'llegó' (acción puntual) en la misma frase: \"Llovía cuando el auditor llegó a la fábrica.\"",
        "Solo tres verbos son irregulares en el imperfecto — ser (era), ir (iba) y ver (veía) — así que si dudas de cualquier otro verbo, el imperfecto SIEMPRE es regular: raíz + aba/abas/aba... (verbos -AR) o raíz + ía/ías/ía... (verbos -ER/-IR). Es, con diferencia, el tiempo más fácil de conjugar de todo el español.",
        "Los participios irregulares (hecho, dicho, visto, puesto, escrito, roto, vuelto, abierto, cubierto, muerto, resuelto, frito) conviene memorizarlos como una lista cerrada — son solo doce, y aparecen constantemente en el pretérito perfecto compuesto (he hecho, ha dicho) y también en la voz pasiva (fue escrito).",
        "Diferencia clave con el portugués: en Brasil, 'eu fiz' cubre tanto 'hice ayer' como 'he hecho hoy'. En español de España hay que decidir: si fue hoy, 'he hecho'; si fue ayer o antes, 'hice'. Confundir los dos es, con diferencia, el error más común de brasileños hablando español peninsular.",
        "Muchos verbos irregulares del indefinido comparten un patrón: cambian la raíz Y pierden el acento en las terminaciones de 'yo' y 'él' (tuve/tuvo, estuve/estuvo, pude/pudo, quise/quiso) — al contrario de los verbos regulares, donde 'yo' y 'él' SIEMPRE llevan tilde (hablé/habló).",
        "En Latinoamérica y en el sur de España (Canarias, Galicia, Asturias) se usa el indefinido incluso para 'hoy' — no es un error, es otra norma regional igual de válida. Este curso enseña el uso del centro y norte de España porque es el que más se escucha en los medios y en Madrid, pero conviene reconocer ambos cuando los oigas."
      ],
      exercises: [
        { type: "mc", q: "'Esta mañana ___ el informe.' (terminar) — hoy sigue siendo hoy:", options: ["terminé", "he terminado", "terminaba"], correct: 1 },
        { type: "mc", q: "'El año pasado ___ a Sevilla.' (viajar) — periodo cerrado:", options: ["he viajado", "viajaba", "viajé"], correct: 2 },
        { type: "mc", q: "'Cuando era niño, siempre ___ con mi abuelo los domingos.' (comer) — costumbre, sin fecha exacta:", options: ["comí", "comía", "he comido"], correct: 1 },
        { type: "fill", q: "Todavía no ___ (yo) la respuesta del cliente. (recibir)", answer: "he recibido" },
        { type: "fill", q: "Ayer nosotros ___ dos no conformidades en la planta. (detectar)", answer: "detectamos" },
        { type: "translate", from: "pt", text: "Já terminamos a auditoria desta semana.", answer: "Ya hemos terminado la auditoría esta semana." },
        { type: "translate", from: "pt", text: "Antes eu trabalhava na fábrica todos os dias.", answer: "Antes yo trabajaba en la fábrica todos los días." },
        {
          type: "order",
          items: [
            "Llovía mucho aquella mañana en Madrid.",
            "De repente, sonó el teléfono de la oficina.",
            "Era el director general con una pregunta urgente.",
            "Le contesté enseguida y resolvimos el problema."
          ],
          correctOrder: [0, 1, 2, 3]
        },
        { type: "speak", prompt: "Diga en voz alta esta frase con pretérito perfecto compuesto:", target: "Esta semana hemos revisado todos los procedimientos de calidad." },
        { type: "speak", prompt: "Diga en voz alta esta frase mezclando imperfecto e indefinido:", target: "Cuando llegué a la reunión, todos ya estaban sentados." }
      ]
    },
    {
      id: "t3",
      order: 3,
      title: "Futuro — Simple e Ir a + Infinitivo",
      subtitle: "Planes, promesas y predicciones",
      text: "Para hablar del futuro, el español ofrece dos caminos muy distintos en la práctica, además de un tercero que ya conoces de la primera lección: el presente con valor de futuro. \"Ir a + infinitivo\" es la forma reina del habla cotidiana en España: se usa para planes concretos, decisiones ya tomadas y cosas que van a pasar pronto — \"Voy a llamar al cliente esta tarde\", \"Vamos a auditar la planta de Bilbao el mes que viene\", \"¿Vas a venir a la reunión?\". El futuro simple, en cambio, se reserva para promesas solemnes, predicciones a más largo plazo y contextos más formales o escritos — \"El informe se enviará el viernes\", \"La empresa certificará todas sus plantas antes de 2028\" suenan a compromiso oficial, casi como si estuvieran firmados. Para un hablante nativo de España, la diferencia no es tanto de calendario como de actitud: el futuro simple añade un matiz de compromiso, de apuesta o de incertidumbre, y por eso también sirve para expresar probabilidad en el presente, un uso muy particular que no existe de la misma forma en portugués — \"¿Qué hora es?\" \"No sé, serán las diez\" significa \"probablemente son las diez\", no un plan futuro; \"¿Dónde está el auditor?\" \"Estará todavía en la reunión\" significa \"probablemente está en la reunión\". Este mismo matiz de probabilidad también aparece con el futuro perfecto (haber + participio en futuro): \"El cliente ya habrá recibido el correo\" significa \"seguramente el cliente ya recibió el correo\", una suposición sobre algo que ya pasó, no un plan. En resumen, para planificar tu semana usarás casi siempre presente o \"ir a + infinitivo\"; el futuro simple queda reservado para cuando quieras sonar más formal, hacer una promesa fuerte, escribir un informe oficial, o simplemente especular sobre algo que no sabes con certeza.",
      textPt: "Para falar do futuro, o espanhol oferece dois caminhos bem distintos na prática, além de um terceiro que você já conhece da primeira lição: o presente com valor de futuro. \"Ir a + infinitivo\" é a forma rainha da fala cotidiana na Espanha: usa-se para planos concretos, decisões já tomadas e coisas que vão acontecer em breve — \"Voy a llamar al cliente esta tarde\" (vou ligar para o cliente esta tarde), \"Vamos a auditar la planta de Bilbao el mes que viene\" (vamos auditar a fábrica de Bilbao no mês que vem), \"¿Vas a venir a la reunión?\" (você vai vir à reunião?). O futuro simples, por outro lado, é reservado para promessas solenes, previsões a mais longo prazo e contextos mais formais ou escritos — \"El informe se enviará el viernes\" (o relatório será enviado na sexta-feira), \"La empresa certificará todas sus plantas antes de 2028\" (a empresa certificará todas as suas fábricas antes de 2028) soam como um compromisso oficial, quase como se estivessem assinados. Para um falante nativo da Espanha, a diferença não é tanto de calendário quanto de atitude: o futuro simples acrescenta um tom de compromisso, de aposta ou de incerteza, e por isso também serve para expressar probabilidade no presente, um uso bem particular que não existe da mesma forma em português — \"¿Qué hora es?\" \"No sé, serán las diez\" significa \"provavelmente são dez horas\", não um plano futuro; \"¿Dónde está el auditor?\" \"Estará todavía en la reunión\" significa \"provavelmente está na reunião\". Esse mesmo tom de probabilidade também aparece com o futuro perfeito (haber + particípio no futuro): \"El cliente ya habrá recibido el correo\" significa \"certamente o cliente já recebeu o e-mail\", uma suposição sobre algo que já aconteceu, não um plano. Resumindo, para planejar sua semana você vai usar quase sempre o presente ou \"ir a + infinitivo\"; o futuro simples fica reservado para quando você quiser soar mais formal, fazer uma promessa forte, escrever um relatório oficial, ou simplesmente especular sobre algo que você não sabe com certeza.",
      dialogue: [
        { who: "Anderson", es: "La próxima semana voy a visitar la planta de Barcelona.", pt: "Na próxima semana vou visitar a fábrica de Barcelona." },
        { who: "Colega", es: "¿Y vas a llevar el nuevo checklist de seguridad?", pt: "E você vai levar a nova checklist de segurança?" },
        { who: "Anderson", es: "Sí, lo voy a probar por primera vez. Si funciona bien, lo usaremos en todas las auditorías.", pt: "Sim, vou testá-la pela primeira vez. Se funcionar bem, vamos usá-la em todas as auditorias." },
        { who: "Colega", es: "Perfecto. El cliente estará muy contento con eso.", pt: "Perfeito. O cliente vai ficar muito contente com isso." }
      ],
      vocabulary: [
        {
          category: "Marcadores de futuro",
          items: [
            { es: "mañana", pt: "amanhã" },
            { es: "pasado mañana", pt: "depois de amanhã" },
            { es: "la próxima semana", pt: "a próxima semana" },
            { es: "el año que viene", pt: "o ano que vem" },
            { es: "dentro de poco", pt: "daqui a pouco" },
            { es: "en el futuro", pt: "no futuro" },
            { es: "algún día", pt: "algum dia" },
            { es: "probablemente / seguramente", pt: "provavelmente / seguramente" },
            { es: "tarde o temprano", pt: "mais cedo ou mais tarde" }
          ]
        },
        {
          category: "Verbos frecuentes para hablar de planes y proyectos",
          items: [
            { es: "planear/planificar", pt: "planejar" }, { es: "organizar", pt: "organizar" }, { es: "lanzar (un producto)", pt: "lançar (um produto)" },
            { es: "ampliar", pt: "ampliar" }, { es: "invertir", pt: "investir" }, { es: "expandirse", pt: "se expandir" },
            { es: "renovar (un contrato)", pt: "renovar (um contrato)" }, { es: "firmar", pt: "assinar" }, { es: "negociar", pt: "negociar" },
            { es: "prever", pt: "prever" }, { es: "estimar", pt: "estimar" }, { es: "proponer", pt: "propor" }
          ]
        }
      ],
      grammar: [
        {
          title: "Futuro Simple — verbos regulares",
          headers: ["Pronombres", "Hablar", "Comer", "Vivir"],
          rows: [
            ["Yo", "Hablaré", "Comeré", "Viviré"],
            ["Tú/Vos", "Hablarás", "Comerás", "Vivirás"],
            ["Él/Ella/Usted", "Hablará", "Comerá", "Vivirá"],
            ["Nosotros/Nosotras", "Hablaremos", "Comeremos", "Viviremos"],
            ["Vosotros/Vosotras", "Hablaréis", "Comeréis", "Viviréis"],
            ["Ellos/Ellas/Ustedes", "Hablarán", "Comerán", "Vivirán"]
          ]
        },
        {
          title: "Futuro Simple — raíces irregulares (las 12 más importantes)",
          headers: ["Infinitivo", "Raíz irregular", "Yo"],
          rows: [
            ["Decir", "dir-", "Diré"], ["Hacer", "har-", "Haré"], ["Poder", "podr-", "Podré"],
            ["Poner", "pondr-", "Pondré"], ["Querer", "querr-", "Querré"], ["Saber", "sabr-", "Sabré"],
            ["Salir", "saldr-", "Saldré"], ["Tener", "tendr-", "Tendré"], ["Valer", "valdr-", "Valdré"],
            ["Venir", "vendr-", "Vendré"], ["Haber", "habr-", "Habré"], ["Caber", "cabr-", "Cabré"]
          ]
        },
        {
          title: "Ir a + Infinitivo (futuro próximo / plan concreto)",
          headers: ["Pronombres", "Ir (presente)", "Ejemplo"],
          rows: [
            ["Yo", "Voy", "Voy a llamar al cliente."],
            ["Tú/Vos", "Vas", "Vas a llamar al cliente."],
            ["Él/Ella/Usted", "Va", "Va a llamar al cliente."],
            ["Nosotros/Nosotras", "Vamos", "Vamos a llamar al cliente."],
            ["Vosotros/Vosotras", "Vais", "Vais a llamar al cliente."],
            ["Ellos/Ellas/Ustedes", "Van", "Van a llamar al cliente."]
          ]
        },
        {
          title: "Futuro Perfecto (Compuesto) — haber (futuro) + participio, expresa suposición sobre el pasado",
          headers: ["Pronombres", "Haber (futuro)", "Ejemplo"],
          rows: [
            ["Yo", "Habré", "Habré terminado el informe para entonces."],
            ["Tú/Vos", "Habrás", "Habrás recibido mi correo ya."],
            ["Él/Ella/Usted", "Habrá", "El cliente ya habrá leído el contrato."],
            ["Nosotros/Nosotras", "Habremos", "Habremos certificado diez empresas este año."],
            ["Vosotros/Vosotras", "Habréis", "Habréis llegado antes que nosotros."],
            ["Ellos/Ellas/Ustedes", "Habrán", "Ya habrán salido de la reunión."]
          ]
        }
      ],
      notes: [
        "Regla práctica para elegir entre 'ir a + infinitivo' y futuro simple: si el plan ya está decidido y es más o menos cercano, usa 'ir a' (\"Voy a llamar al cliente esta tarde\"). Si quieres sonar formal, hacer una promesa fuerte o escribir un documento oficial, usa el futuro simple (\"El informe se enviará el viernes\").",
        "El futuro simple para expresar PROBABILIDAD es uno de los usos que más sorprende a los brasileños, porque no existe exactamente igual en portugués: '¿Dónde está Marta?' 'Estará en una reunión' no habla del futuro — significa 'probablemente está en una reunión', ahora mismo. El mismo uso existe con el futuro perfecto para especular sobre el pasado: 'Ya habrá llegado' = 'seguramente ya llegó'.",
        "Las 12 raíces irregulares del futuro (dir-, har-, podr-, pondr-, querr-, sabr-, saldr-, tendr-, valdr-, vendr-, habr-, cabr-) son EXACTAMENTE las mismas que usa el condicional (diría, haría, podría...) — aprenderlas de memoria ahora te ahorra estudiarlas otra vez cuando llegues al condicional.",
        "Fíjate en el patrón de las raíces irregulares: casi todas insertan una 'd' antes de la terminación (poner→pondr-, tener→tendr-, salir→saldr-, valer→valdr-, venir→vendr-) — reconocer este patrón te ayuda a adivinar raíces nuevas en lugar de memorizarlas una por una.",
        "El futuro simple SIEMPRE lleva las terminaciones regulares (-é, -ás, -á, -emos, -éis, -án) sobre el infinitivo completo o la raíz irregular, nunca sobre una raíz cortada como en otros tiempos. Por eso 'hablaré' mantiene el infinitivo entero, y hasta los irregulares como 'tendré' llevan las mismas terminaciones finales.",
        "En el habla cotidiana de España, decir 'iré a llamar' con el sentido de plan inmediato suena forzado — un nativo diría simplemente 'voy a llamar'. Reserva el futuro simple puro para frases sin 'ir a': nunca mezcles las dos construcciones en la misma idea.",
        "El futuro perfecto (habré/habrás/habrá + participio) casi no se usa en la conversación diaria para un futuro real 'terminado antes de otro futuro' — su uso más frecuente, con diferencia, es la suposición sobre el pasado reciente: \"El cliente ya habrá recibido el correo\" (= seguramente ya lo recibió)."
      ],
      exercises: [
        { type: "mc", q: "'La próxima semana ___ la nueva auditoría.' (empezar) — plan ya decidido:", options: ["empezaré", "voy a empezar", "empezaba"], correct: 1 },
        { type: "mc", q: "'El sistema se ___ la próxima versión en diciembre.' (actualizar) — anuncio formal:", options: ["va a actualizar", "actualizará", "actualiza"], correct: 1 },
        { type: "mc", q: "'¿Qué hora es?' '¡No sé, ___ las nueve!' (ser) — expresa probabilidad:", options: ["son", "serán", "eran"], correct: 1 },
        { type: "fill", q: "Nosotros ___ (tener) que revisar todos los documentos antes del viernes.", answer: "tendremos" },
        { type: "fill", q: "¿Vosotros ___ (venir) a la reunión de mañana?", answer: "vendréis" },
        { type: "translate", from: "pt", text: "Vou visitar a fábrica na próxima semana.", answer: "Voy a visitar la fábrica la próxima semana." },
        { type: "translate", from: "pt", text: "O relatório será enviado até sexta-feira.", answer: "El informe se enviará hasta el viernes." },
        {
          type: "order",
          items: [
            "El próximo mes vamos a auditar dos plantas nuevas.",
            "Primero visitaremos la fábrica de Valencia.",
            "Después iremos a la de Bilbao.",
            "Al final, presentaremos un informe conjunto al comité."
          ],
          correctOrder: [0, 1, 2, 3]
        },
        { type: "speak", prompt: "Diga en voz alta esta frase con 'ir a + infinitivo':", target: "Voy a terminar el informe antes de las cinco." },
        { type: "speak", prompt: "Diga en voz alta esta frase con futuro simple de predicción:", target: "El próximo año tendremos más clientes internacionales." }
      ]
    }
  ]
};
