// content-normas.js
// Módulo BÔNUS especial: "Español de las Normas — Gramática ISO"
// Conteúdo criado a partir do ESTUDO de 4 normas técnicas em espanhol fornecidas
// pelo usuário (NBR ISO 9001:2015 Calidad, NBR ISO 14001:2015 Ambiental,
// ISO 45001:2018 Seguridad y Salud en el Trabajo, ABNT NBR ISO/IEC 27001:2022
// Seguridad de la Información). IMPORTANTE: este NO es un curso sobre las normas
// ISO — es un curso de ESPAÑOL que aprovecha el vocabulario técnico real y los
// patrones gramaticales (muy frecuentes en el "español normativo": el modal de
// obligación "deber + infinitivo", la concordancia sujeto-verbo, el "se"
// impersonal y el subjuntivo de riesgo/condición) como excusa creativa para
// enseñar gramática y vocabulario de nivel avanzado. Todos los ejemplos y
// diálogos son ORIGINALES (no copiados de los documentos fuente).

const LEVEL_NORMAS = {
  id: "normas",
  name: "Español de las Normas — Gramática ISO",
  icon: "📜",
  colorFrom: "#0F4C3A",
  colorTo: "#0D2137",
  description: "Módulo especial y creativo: usamos el lenguaje real de las normas ISO de calidad, medio ambiente, seguridad laboral y seguridad de la información como excusa para dominar la gramática más útil del español profesional — concordancia verbal, el modal de obligación, el 'se' impersonal y el subjuntivo de riesgo. Termina con una lección práctica sobre el proceso de auditoría (ISO 19011): qué decir en la reunión de apertura, qué decir en la reunión de cierre, y qué información debe contener el informe de auditoría.",
  lessons: [
    {
      id: "n1",
      order: 1,
      title: "El Verbo que Manda: DEBER + Infinitivo",
      subtitle: "Obligación normativa y concordancia sujeto-verbo · Tema: Calidad (ISO 9001)",
      text: "La norma ISO 9001 es el estándar internacional más adoptado del mundo para sistemas de gestión de la calidad (SGC). No certifica un producto específico, sino la capacidad de una organización para ofrecer, de manera constante, productos y servicios que cumplan los requisitos del cliente y los requisitos legales y reglamentarios aplicables. Se apoya en siete principios de gestión: el enfoque al cliente, el liderazgo, el compromiso de las personas, el enfoque basado en procesos, la mejora continua, la toma de decisiones basada en evidencia y la gestión de las relaciones con proveedores y otras partes interesadas. Su estructura sigue el ciclo PHVA — Planificar, Hacer, Verificar, Actuar —, un modelo que obliga a la organización a planificar sus procesos, ejecutarlos, medir los resultados frente a los objetivos de calidad y corregir las desviaciones, en un ciclo permanente. La versión vigente añade también el llamado 'pensamiento basado en riesgos': antes de que surja un problema, la organización debe identificar los riesgos y las oportunidades que puedan afectar la conformidad de lo que entrega. Certificarse en ISO 9001 no es, entonces, un fin en sí mismo, sino una señal — hacia clientes, proveedores y auditores — de que existe un sistema documentado, auditado y mejorado de forma constante. Y precisamente en el español de las normas técnicas, la fórmula más frecuente para expresar una obligación de este tipo es el verbo 'deber' seguido de un infinitivo. Presta mucha atención a la concordancia: si el sujeto es singular, se usa 'debe'; si el sujeto es plural, se usa 'deben'. Parece un detalle pequeño, pero en un documento de calidad, de medio ambiente, de seguridad laboral o de seguridad de la información, un error de concordancia puede cambiar por completo quién tiene la responsabilidad de una tarea. Este módulo recorre el lenguaje real de cuatro normas ISO — la ISO 9001 (gestión de calidad), la ISO 14001 (gestión ambiental), la ISO 45001 (seguridad y salud en el trabajo) y la ISO/IEC 27001 (seguridad de la información) — y empezamos aquí por la ISO 9001, que está llena de frases con esta estructura, así que es el punto de partida perfecto para entrenar el oído y la escritura. En las próximas lecciones vas a encontrar el mismo patrón gramatical, pero con el vocabulario propio de las otras tres normas.",
      textPt: "A norma ISO 9001 é o padrão internacional mais adotado do mundo para sistemas de gestão da qualidade (SGQ). Ela não certifica um produto específico, mas sim a capacidade de uma organização de oferecer, de forma constante, produtos e serviços que atendam aos requisitos do cliente e aos requisitos legais e regulamentares aplicáveis. Apoia-se em sete princípios de gestão: o foco no cliente, a liderança, o comprometimento das pessoas, a abordagem baseada em processos, a melhoria contínua, a tomada de decisão baseada em evidências e a gestão de relacionamento com fornecedores e outras partes interessadas. Sua estrutura segue o ciclo PDCA — Planejar, Fazer, Verificar, Agir —, um modelo que obriga a organização a planejar seus processos, executá-los, medir os resultados frente aos objetivos da qualidade e corrigir os desvios, em um ciclo permanente. A versão vigente acrescenta também o chamado 'pensamento baseado em risco': antes que surja um problema, a organização deve identificar os riscos e as oportunidades que possam afetar a conformidade do que ela entrega. Certificar-se na ISO 9001 não é, portanto, um fim em si mesmo, mas um sinal — para clientes, fornecedores e auditores — de que existe um sistema documentado, auditado e melhorado de forma constante. E é justamente no espanhol das normas técnicas que a fórmula mais frequente para expressar uma obrigação desse tipo é o verbo 'deber' seguido de infinitivo. Preste muita atenção à concordância: se o sujeito é singular, usa-se 'debe'; se o sujeito é plural, usa-se 'deben'. Parece um detalhe pequeno, mas em um documento de qualidade, de meio ambiente, de segurança do trabalho ou de segurança da informação, um erro de concordância pode mudar completamente quem tem a responsabilidade de uma tarefa. Este módulo percorre a linguagem real de quatro normas ISO — a ISO 9001 (gestão da qualidade), a ISO 14001 (gestão ambiental), a ISO 45001 (segurança e saúde no trabalho) e a ISO/IEC 27001 (segurança da informação) — e começamos aqui pela ISO 9001, que está cheia de frases com essa estrutura, então é o ponto de partida perfeito para treinar o ouvido e a escrita. Nas próximas lições você vai encontrar o mesmo padrão gramatical, mas com o vocabulário próprio das outras três normas.",
      grammar: [
        {
          title: "DEBER + infinitivo (obligación) — concordancia singular / plural",
          headers: ["Sujeto", "Forma verbal", "Ejemplo original"],
          rows: [
            ["la organización (singular)", "debe + infinitivo", "La organización debe establecer una política de calidad clara."],
            ["el proceso (singular)", "debe + infinitivo", "El proceso debe generar evidencias de su propio control."],
            ["los procesos (plural)", "deben + infinitivo", "Los procesos deben cumplir los requisitos del cliente."],
            ["las no conformidades (plural)", "deben + infinitivo", "Las no conformidades deben corregirse antes del cierre del informe."],
            ["tú / usted (recomendación suave)", "deberías / debería + infinitivo", "Deberías revisar los indicadores antes de la reunión."]
          ]
        }
      ],
      vocabulary: [
        {
          category: "Calidad — Sustantivos clave (ISO 9001)",
          items: [
            { es: "política de calidad", pt: "política de qualidade" },
            { es: "requisito", pt: "requisito" },
            { es: "conformidad", pt: "conformidade" },
            { es: "no conformidad", pt: "não conformidade" },
            { es: "mejora continua", pt: "melhoria contínua" },
            { es: "satisfacción del cliente", pt: "satisfação do cliente" },
            { es: "enfoque basado en procesos", pt: "abordagem baseada em processos" },
            { es: "alta dirección", pt: "alta direção" },
            { es: "objetivo de calidad", pt: "objetivo da qualidade" },
            { es: "indicador de desempeño", pt: "indicador de desempenho" },
            { es: "acción correctiva", pt: "ação corretiva" },
            { es: "eficacia", pt: "eficácia" },
            { es: "eficiencia", pt: "eficiência" },
            { es: "revisión por la dirección", pt: "análise crítica pela direção" },
            { es: "parte interesada", pt: "parte interessada" }
          ]
        },
        {
          category: "Calidad — Verbos de obligación",
          items: [
            { es: "establecer", pt: "estabelecer" },
            { es: "cumplir", pt: "cumprir" },
            { es: "verificar", pt: "verificar" },
            { es: "mejorar", pt: "melhorar" },
            { es: "satisfacer", pt: "satisfazer" },
            { es: "documentar", pt: "documentar" },
            { es: "planificar", pt: "planejar" },
            { es: "monitorear", pt: "monitorar" }
          ]
        }
      ],
      exercises: [
        { type: "mc", q: "La organización _______ establecer una política de calidad.", options: ["debe", "deben", "deber", "debemos"], correct: 0 },
        { type: "mc", q: "Los procesos de producción _______ cumplir los requisitos acordados con el cliente.", options: ["debe", "deben", "debes", "debiendo"], correct: 1 },
        { type: "mc", q: "¿Cuál de estas palabras significa 'melhoria contínua'?", options: ["conformidad", "mejora continua", "eficiencia", "requisito"], correct: 1 },
        { type: "fill", q: "La empresa _______ (deber) documentar cada procedimiento crítico.", answer: "debe" },
        { type: "fill", q: "Los indicadores de desempeño _______ (deber) reflejar la realidad de la organización.", answer: "deben" },
        { type: "fill", q: "El auditor _______ (deber) verificar la conformidad antes de firmar el informe.", answer: "debe" },
        { type: "translate", from: "pt", text: "A alta direção deve revisar os objetivos da qualidade.", answer: "La alta dirección debe revisar los objetivos de calidad." },
        { type: "translate", from: "es", text: "Las no conformidades deben corregirse antes del cierre del informe.", answer: "As não conformidades devem ser corrigidas antes do fechamento do relatório." },
        { type: "order", items: ["la organización", "debe", "establecer", "una política de calidad"], correctOrder: [0, 1, 2, 3] },
        { type: "mc", q: "¿Qué opción respeta la concordancia correcta?", options: ["Los procesos debe cumplir los requisitos.", "El proceso deben cumplir los requisitos.", "Los procesos deben cumplir los requisitos.", "El proceso deben cumplir el requisito."], correct: 2 },
        { type: "open", q: "Escribe dos frases sobre la política de calidad de una empresa: una con sujeto singular usando 'debe' y otra con sujeto plural usando 'deben'.", sample: "La organización debe comunicar su política de calidad a todo el personal. Los empleados deben conocer los objetivos de calidad de su área." },
        { type: "mc", q: "Según el texto, ¿cuántas normas ISO recorre este módulo completo?", options: ["Dos", "Tres", "Cuatro", "Cinco"], correct: 2 },
        { type: "mc", q: "¿Qué modelo cíclico sigue la estructura de la ISO 9001?", options: ["PHVA (Planificar-Hacer-Verificar-Actuar)", "FODA", "Kaizen", "Just in time"], correct: 0 }
      ]
    },
    {
      id: "n2",
      order: 2,
      title: "Concordancia en Cadena y el SE Impersonal",
      subtitle: "Sujetos compuestos, colectivos y frases sin sujeto claro · Tema: Medio Ambiente (ISO 14001)",
      text: "La norma ISO 14001 es el estándar internacional para sistemas de gestión ambiental (SGA). Su propósito es ayudar a las organizaciones a controlar el impacto de sus actividades, productos y servicios sobre el medio ambiente, cumplir la legislación ambiental aplicable y mejorar de forma continua su desempeño ambiental. Un concepto central de la norma es el 'aspecto ambiental': cualquier elemento de las actividades de una organización que interactúa con el medio ambiente, como el consumo de agua, la generación de residuos o las emisiones a la atmósfera. Cuando ese aspecto genera un cambio real en el entorno — positivo o negativo —, se habla de 'impacto ambiental'. La norma exige también una 'perspectiva de ciclo de vida': la organización debe considerar el efecto ambiental de un producto desde la extracción de la materia prima hasta su disposición final, no solo durante el proceso de fabricación. Igual que la ISO 9001, sigue el ciclo PHVA y promueve la prevención de la contaminación como principio rector, por encima de la simple corrección de problemas ya ocurridos. El lenguaje ambiental normativo añade dos retos gramaticales interesantes al español que ya conoces. El primero es la concordancia con sujetos compuestos o colectivos: cuando dos sustantivos se unen con 'y' (por ejemplo, 'el aspecto y el impacto ambiental'), el verbo casi siempre va en plural. El segundo es el 'se' impersonal, muy usado cuando no importa quién realiza la acción, sino que la acción se cumpla: 'se debe reducir', 'se establece un procedimiento', 'se identifican los riesgos'. Fíjate en que, con 'se', el verbo concuerda con el sustantivo que sigue: 'se identifica el aspecto' (singular) pero 'se identifican los aspectos' (plural).",
      textPt: "A norma ISO 14001 é o padrão internacional para sistemas de gestão ambiental (SGA). Seu propósito é ajudar as organizações a controlar o impacto de suas atividades, produtos e serviços sobre o meio ambiente, cumprir a legislação ambiental aplicável e melhorar de forma contínua seu desempenho ambiental. Um conceito central da norma é o 'aspecto ambiental': qualquer elemento das atividades de uma organização que interage com o meio ambiente, como o consumo de água, a geração de resíduos ou as emissões para a atmosfera. Quando esse aspecto gera uma mudança real no ambiente — positiva ou negativa —, fala-se em 'impacto ambiental'. A norma exige também uma 'perspectiva de ciclo de vida': a organização deve considerar o efeito ambiental de um produto desde a extração da matéria-prima até sua destinação final, não somente durante o processo de fabricação. Assim como a ISO 9001, segue o ciclo PDCA e promove a prevenção da poluição como princípio norteador, acima da simples correção de problemas já ocorridos. A linguagem ambiental normativa acrescenta dois desafios gramaticais interessantes ao espanhol que você já conhece. O primeiro é a concordância com sujeitos compostos ou coletivos: quando dois substantivos se unem com 'y' (por exemplo, 'el aspecto y el impacto ambiental'), o verbo quase sempre fica no plural. O segundo é o 'se' impessoal, muito usado quando não importa quem realiza a ação, mas sim que a ação se cumpra: 'se debe reducir', 'se establece un procedimiento', 'se identifican los riesgos'. Repare que, com 'se', o verbo concorda com o substantivo que vem em seguida: 'se identifica el aspecto' (singular) mas 'se identifican los aspectos' (plural).",
      dialogue: [
        { who: "Auditora Ambiental", es: "Buenos días. Vengo a revisar cómo la planta gestiona sus aspectos ambientales.", pt: "Bom dia. Vim revisar como a planta gerencia seus aspectos ambientais." },
        { who: "Gerente de Planta", es: "Bienvenida. Aquí se identifican y se registran todos los aspectos e impactos cada año.", pt: "Bem-vinda. Aqui se identificam e se registram todos os aspectos e impactos todo ano." },
        { who: "Auditora Ambiental", es: "Perfecto. ¿Cómo se controla la huella de carbono de la planta?", pt: "Perfeito. Como se controla a pegada de carbono da planta?" },
        { who: "Gerente de Planta", es: "Se debe reducir un 5% cada año, según nuestra política ambiental.", pt: "Deve-se reduzir 5% a cada ano, conforme nossa política ambiental." },
        { who: "Auditora Ambiental", es: "¿Y los residuos? ¿Se separan correctamente?", pt: "E os resíduos? Eles são separados corretamente?" },
        { who: "Gerente de Planta", es: "Sí, los residuos y los materiales reciclables se separan en contenedores distintos.", pt: "Sim, os resíduos e os materiais recicláveis são separados em contêineres distintos." },
        { who: "Auditora Ambiental", es: "Muy bien. El equipo ambiental trabaja de forma organizada.", pt: "Muito bem. A equipe ambiental trabalha de forma organizada." },
        { who: "Gerente de Planta", es: "Gracias. La prevención de la contaminación es una prioridad para toda la planta.", pt: "Obrigado. A prevenção da poluição é uma prioridade para toda a planta." }
      ],
      vocabulary: [
        {
          category: "Medio Ambiente — Vocabulario (ISO 14001)",
          items: [
            { es: "medio ambiente", pt: "meio ambiente" },
            { es: "aspecto ambiental", pt: "aspecto ambiental" },
            { es: "impacto ambiental", pt: "impacto ambiental" },
            { es: "desempeño ambiental", pt: "desempenho ambiental" },
            { es: "cumplimiento legal", pt: "cumprimento legal" },
            { es: "prevención de la contaminación", pt: "prevenção da poluição" },
            { es: "ciclo de vida", pt: "ciclo de vida" },
            { es: "huella de carbono", pt: "pegada de carbono" },
            { es: "residuos", pt: "resíduos" },
            { es: "gestión ambiental", pt: "gestão ambiental" },
            { es: "parte interesada", pt: "parte interessada" },
            { es: "riesgo ambiental", pt: "risco ambiental" },
            { es: "economía circular", pt: "economia circular" }
          ]
        }
      ],
      grammar: [
        {
          title: "SE impersonal — el verbo concuerda con lo que sigue",
          headers: ["Estructura", "Ejemplo", "Nota"],
          rows: [
            ["se + verbo singular + sustantivo singular", "Se identifica el aspecto ambiental.", "Sustantivo singular → verbo singular"],
            ["se + verbo plural + sustantivo plural", "Se identifican los aspectos ambientales.", "Sustantivo plural → verbo plural"],
            ["se debe + infinitivo (impersonal, invariable)", "Se debe reducir la huella de carbono.", "'Se debe' no cambia, aunque el complemento sea plural"],
            ["sujeto compuesto (X y Y) + verbo plural", "El aspecto y el impacto se registran juntos.", "Dos sustantivos unidos por 'y' piden verbo en plural"]
          ]
        }
      ],
      exercises: [
        { type: "mc", q: "¿Cuál frase usa correctamente el 'se' impersonal en plural?", options: ["Se identifica los aspectos.", "Se identifican los aspectos.", "Se identificas los aspectos.", "Se identificamos los aspectos."], correct: 1 },
        { type: "mc", q: "'Huella de carbono' significa:", options: ["Pegada de carbono", "Buraco de carbono", "Marca de carvão", "Ciclo de vida"], correct: 0 },
        { type: "fill", q: "En esta planta se _______ (reciclar) el 80% de los residuos.", answer: "recicla" },
        { type: "fill", q: "Los residuos y los materiales reciclables se _______ (separar) en contenedores distintos.", answer: "separan" },
        { type: "translate", from: "pt", text: "Aqui se identificam todos os aspectos ambientais.", answer: "Aquí se identifican todos los aspectos ambientales." },
        { type: "translate", from: "es", text: "Se debe reducir la huella de carbono cada año.", answer: "Deve-se reduzir a pegada de carbono a cada ano." },
        { type: "listen", q: "Escucha y escribe la frase completa.", audioText: "El equipo ambiental trabaja de forma organizada.", answer: "El equipo ambiental trabaja de forma organizada." },
        { type: "mc", q: "¿Qué opción respeta la concordancia con sujeto compuesto?", options: ["El aspecto y el impacto se registra junto.", "El aspecto y el impacto se registran juntos.", "El aspecto y el impacto registran juntos.", "El aspecto y el impacto se registrando juntos."], correct: 1 },
        { type: "open", q: "Escribe una frase con 'se' impersonal en singular y otra en plural, usando vocabulario ambiental.", sample: "Se controla el consumo de agua en cada turno. Se registran los residuos peligrosos cada semana." },
        { type: "mc", q: "Según el texto, ¿qué es un 'aspecto ambiental'?", options: ["Un elemento de las actividades de la organización que interactúa con el medio ambiente", "Un tipo de residuo peligroso", "Un certificado ambiental", "Un impuesto ambiental"], correct: 0 },
        { type: "mc", q: "¿Qué principio, según el texto, la ISO 14001 pone por encima de simplemente corregir problemas ya ocurridos?", options: ["La prevención de la contaminación", "La reducción de costos", "La certificación rápida", "El aumento de la producción"], correct: 0 }
      ]
    },
    {
      id: "n3",
      order: 3,
      title: "El Subjuntivo del Riesgo",
      subtitle: "'Es necesario que...', 'en caso de que...' · Tema: Seguridad y Salud en el Trabajo (ISO 45001)",
      text: "La norma ISO 45001 es el estándar internacional para sistemas de gestión de la seguridad y salud en el trabajo (SST), y sustituyó a la antigua OHSAS 18001. Su objetivo es proporcionar lugares de trabajo seguros y saludables, previniendo lesiones y problemas de salud relacionados con el trabajo, y mejorando de forma proactiva el desempeño en esta área. A diferencia de otras normas, pone un énfasis especial en la participación y consulta activa de los propios trabajadores: son ellos quienes mejor conocen los peligros reales de su puesto de trabajo, así que deben participar en la identificación de peligros y en la evaluación de riesgos, no solo recibir instrucciones desde arriba. La norma introduce también la 'jerarquía de controles', un orden de preferencia para reducir riesgos que va desde la eliminación del peligro (la opción más eficaz) hasta el uso de equipo de protección personal (EPP), pasando por la sustitución, los controles de ingeniería y los controles administrativos — el EPP se considera la última barrera, no la primera solución. Cuando ocurre un incidente, incluso uno sin consecuencias graves (lo que la norma llama 'casi accidente'), debe investigarse para evitar que se repita. Cuando una norma no solo describe una obligación directa, sino que expresa necesidad, finalidad o una condición hipotética de riesgo, el español recurre al subjuntivo. Compara: 'La empresa identifica los peligros' (hecho, indicativo) frente a 'Es necesario que la empresa identifique los peligros' (necesidad, subjuntivo). Este cambio de modo verbal es uno de los puntos más difíciles del español para hablantes de portugués, así que vamos a practicarlo con el vocabulario de seguridad y salud en el trabajo, un área donde el subjuntivo aparece constantemente: 'para que se garantice la seguridad', 'en caso de que ocurra un incidente', 'es importante que los trabajadores participen'.",
      textPt: "A norma ISO 45001 é o padrão internacional para sistemas de gestão de segurança e saúde no trabalho (SST), e substituiu a antiga OHSAS 18001. Seu objetivo é proporcionar locais de trabalho seguros e saudáveis, prevenindo lesões e problemas de saúde relacionados ao trabalho, e melhorando de forma proativa o desempenho nessa área. Diferente de outras normas, coloca uma ênfase especial na participação e consulta ativa dos próprios trabalhadores: são eles que melhor conhecem os perigos reais do seu posto de trabalho, então devem participar da identificação de perigos e da avaliação de riscos, não apenas receber instruções de cima. A norma introduz também a 'hierarquia de controles', uma ordem de preferência para reduzir riscos que vai desde a eliminação do perigo (a opção mais eficaz) até o uso de equipamento de proteção individual (EPI), passando pela substituição, os controles de engenharia e os controles administrativos — o EPI é considerado a última barreira, não a primeira solução. Quando ocorre um incidente, mesmo um sem consequências graves (o que a norma chama de 'quase acidente'), ele deve ser investigado para evitar que se repita. Quando uma norma não apenas descreve uma obrigação direta, mas expressa necessidade, finalidade ou uma condição hipotética de risco, o espanhol recorre ao subjuntivo. Compare: 'La empresa identifica los peligros' (fato, indicativo) frente a 'Es necesario que la empresa identifique los peligros' (necessidade, subjuntivo). Essa mudança de modo verbal é um dos pontos mais difíceis do espanhol para falantes de português, então vamos praticá-lo com o vocabulário de segurança e saúde no trabalho, uma área onde o subjuntivo aparece constantemente: 'para que se garantice la seguridad', 'en caso de que ocurra un incidente', 'es importante que los trabajadores participen'.",
      grammar: [
        {
          title: "Indicativo (hecho) vs. Subjuntivo (necesidad / condición de riesgo)",
          headers: ["Disparador", "Ejemplo con subjuntivo", "Equivalente en indicativo"],
          rows: [
            ["es necesario que + subjuntivo", "Es necesario que la empresa identifique los peligros.", "La empresa identifica los peligros."],
            ["es importante que + subjuntivo", "Es importante que los trabajadores participen en la evaluación de riesgos.", "Los trabajadores participan en la evaluación de riesgos."],
            ["para que + subjuntivo", "Se usa el equipo de protección para que se garantice la seguridad.", "El equipo de protección garantiza la seguridad."],
            ["en caso de que + subjuntivo", "En caso de que ocurra un incidente, se debe reportar de inmediato.", "Si ocurre un incidente, se reporta de inmediato."]
          ]
        }
      ],
      vocabulary: [
        {
          category: "Seguridad y Salud en el Trabajo — Vocabulario (ISO 45001)",
          items: [
            { es: "peligro", pt: "perigo" },
            { es: "riesgo", pt: "risco" },
            { es: "incidente", pt: "incidente" },
            { es: "accidente de trabajo", pt: "acidente de trabalho" },
            { es: "salud ocupacional", pt: "saúde ocupacional" },
            { es: "condiciones de trabajo", pt: "condições de trabalho" },
            { es: "equipo de protección personal (EPP)", pt: "equipamento de proteção individual (EPI)" },
            { es: "evaluación de riesgos", pt: "avaliação de riscos" },
            { es: "lugar de trabajo", pt: "local de trabalho" },
            { es: "participación de los trabajadores", pt: "participação dos trabalhadores" },
            { es: "jerarquía de controles", pt: "hierarquia de controles" },
            { es: "casi accidente", pt: "quase acidente" }
          ]
        }
      ],
      exercises: [
        { type: "mc", q: "¿Cuál frase usa correctamente el subjuntivo?", options: ["Es necesario que la empresa identifica los peligros.", "Es necesario que la empresa identifique los peligros.", "Es necesario que la empresa identificar los peligros.", "Es necesario que la empresa identificando los peligros."], correct: 1 },
        { type: "mc", q: "'EPP' significa:", options: ["Equipo de protección personal", "Evaluación de peligros y prevención", "Estándar de prevención permanente", "Escala de prevención de peligros"], correct: 0 },
        { type: "fill", q: "Es importante que los trabajadores _______ (participar) en la evaluación de riesgos.", answer: "participen" },
        { type: "fill", q: "En caso de que _______ (ocurrir) un incidente, se debe reportar de inmediato.", answer: "ocurra" },
        { type: "fill", q: "Es necesario que la empresa _______ (identificar) todos los peligros del lugar de trabajo.", answer: "identifique" },
        { type: "translate", from: "pt", text: "É importante que todos usem o equipamento de proteção pessoal.", answer: "Es importante que todos usen el equipo de protección personal." },
        { type: "translate", from: "es", text: "En caso de que ocurra un accidente de trabajo, se debe avisar a seguridad ocupacional.", answer: "Caso ocorra um acidente de trabalho, deve-se avisar a saúde ocupacional." },
        { type: "speak", prompt: "Practica esta frase con subjuntivo de riesgo.", target: "Es necesario que la empresa identifique los peligros del lugar de trabajo." },
        { type: "mc", q: "¿Qué expresión pide subjuntivo?", options: ["Sabemos que...", "Es evidente que...", "Es necesario que...", "Es verdad que..."], correct: 2 },
        { type: "open", q: "Escribe una frase con 'es necesario que' y otra con 'en caso de que', usando vocabulario de seguridad laboral.", sample: "Es necesario que todos los trabajadores usen casco en la planta. En caso de que se detecte un riesgo, se debe detener la actividad." },
        { type: "mc", q: "Según el texto, ¿qué opción NO forma parte de la 'jerarquía de controles' de la ISO 45001?", options: ["Eliminación del peligro", "Equipo de protección personal (EPP)", "Aumento del salario", "Controles administrativos"], correct: 2 },
        { type: "mc", q: "Según el texto, ¿quiénes deben participar activamente en la identificación de peligros, según la ISO 45001?", options: ["Solo la alta dirección", "Solo los auditores externos", "Los propios trabajadores", "Solo el departamento de TI"], correct: 2 }
      ]
    },
    {
      id: "n4",
      order: 4,
      title: "La Voz Pasiva de la Seguridad",
      subtitle: "SER + participio, y la concordancia de género y número · Tema: Seguridad de la Información (ISO/IEC 27001)",
      text: "La norma ISO/IEC 27001 es el estándar internacional para sistemas de gestión de la seguridad de la información (SGSI). Su objetivo central es proteger tres propiedades de la información, conocidas como la 'tríada CIA' por sus siglas en inglés: la confidencialidad (que solo acceda a la información quien está autorizado), la integridad (que la información no sea alterada de forma indebida) y la disponibilidad (que la información esté accesible cuando se necesite). El corazón de la norma es un proceso de evaluación y tratamiento de riesgos: la organización debe identificar sus activos de información, las amenazas que los afectan y las vulnerabilidades que podrían ser explotadas, para luego decidir cómo tratar cada riesgo. El Anexo A de la norma reúne un catálogo de controles de seguridad — organizativos, de personas, físicos y tecnológicos — de los cuales la organización selecciona los aplicables en un documento llamado 'Declaración de Aplicabilidad'. La norma exige también un plan de gestión de incidentes de seguridad y, cada vez más, de continuidad del negocio, para que la organización pueda seguir operando incluso después de un ciberataque o una fuga de datos. En los documentos de seguridad de la información es muy común, precisamente, la voz pasiva con 'ser', porque lo importante no es quién protege, sino qué es protegido. La regla de oro: el participio concuerda en género y número con el sujeto. 'La información es protegida' (femenino singular), pero 'los activos son protegidos' (masculino plural) y 'las contraseñas deben ser cambiadas' (femenino plural). Practicar esta concordancia del participio es clave para escribir — y hablar — con precisión sobre ciberseguridad en español.",
      textPt: "A norma ISO/IEC 27001 é o padrão internacional para sistemas de gestão de segurança da informação (SGSI). Seu objetivo central é proteger três propriedades da informação, conhecidas como 'tríade CIA' por sua sigla em inglês: a confidencialidade (que só acesse a informação quem está autorizado), a integridade (que a informação não seja alterada de forma indevida) e a disponibilidade (que a informação esteja acessível quando for necessário). O coração da norma é um processo de avaliação e tratamento de riscos: a organização deve identificar seus ativos de informação, as ameaças que os afetam e as vulnerabilidades que poderiam ser exploradas, para depois decidir como tratar cada risco. O Anexo A da norma reúne um catálogo de controles de segurança — organizacionais, de pessoas, físicos e tecnológicos — dos quais a organização seleciona os aplicáveis em um documento chamado 'Declaração de Aplicabilidade'. A norma exige também um plano de gestão de incidentes de segurança e, cada vez mais, de continuidade de negócios, para que a organização possa continuar operando mesmo depois de um ataque cibernético ou um vazamento de dados. Nos documentos de segurança da informação é muito comum, justamente, a voz passiva com 'ser', porque o importante não é quem protege, mas o que é protegido. A regra de ouro: o particípio concorda em gênero e número com o sujeito. 'La información es protegida' (feminino singular), mas 'los activos son protegidos' (masculino plural) e 'las contraseñas deben ser cambiadas' (feminino plural). Praticar essa concordância do particípio é fundamental para escrever — e falar — com precisão sobre segurança cibernética em espanhol.",
      vocabulary: [
        {
          category: "Seguridad de la Información — Vocabulario (ISO/IEC 27001)",
          items: [
            { es: "seguridad de la información", pt: "segurança da informação" },
            { es: "confidencialidad", pt: "confidencialidade" },
            { es: "integridad", pt: "integridade" },
            { es: "disponibilidad", pt: "disponibilidade" },
            { es: "activo de información", pt: "ativo de informação" },
            { es: "amenaza", pt: "ameaça" },
            { es: "vulnerabilidad", pt: "vulnerabilidade" },
            { es: "control de acceso", pt: "controle de acesso" },
            { es: "incidente de seguridad", pt: "incidente de segurança" },
            { es: "continuidad del negocio", pt: "continuidade de negócios" },
            { es: "política de seguridad", pt: "política de segurança" },
            { es: "gestión de riesgos", pt: "gestão de riscos" },
            { es: "copia de seguridad", pt: "cópia de segurança / backup" }
          ]
        }
      ],
      grammar: [
        {
          title: "Voz pasiva con SER + participio — concordancia de género y número",
          headers: ["Sujeto", "Ser + participio", "Ejemplo"],
          rows: [
            ["la información (fem. singular)", "es protegida", "La información es protegida mediante controles de acceso."],
            ["el activo (masc. singular)", "es clasificado", "Cada activo de información es clasificado según su nivel de riesgo."],
            ["los activos (masc. plural)", "son protegidos", "Los activos de información son protegidos contra amenazas externas."],
            ["las contraseñas (fem. plural)", "deben ser cambiadas", "Las contraseñas deben ser cambiadas cada 90 días."]
          ]
        }
      ],
      exercises: [
        { type: "mc", q: "¿Cuál opción respeta la concordancia del participio?", options: ["Los activos es protegido.", "Los activos son protegidos.", "Los activos son protegida.", "Los activos es protegidos."], correct: 1 },
        { type: "mc", q: "¿Qué principio NO forma parte de la tríada de la seguridad de la información?", options: ["Confidencialidad", "Integridad", "Rentabilidad", "Disponibilidad"], correct: 2 },
        { type: "fill", q: "La información _______ (proteger, fem. sing.) mediante controles de acceso estrictos.", answer: "es protegida" },
        { type: "fill", q: "Las contraseñas deben _______ (ser) cambiadas cada 90 días.", answer: "ser" },
        { type: "fill", q: "Los activos de información _______ (ser, masc. plural) clasificados según su riesgo.", answer: "son" },
        { type: "translate", from: "pt", text: "Os ativos de informação são protegidos contra ameaças externas.", answer: "Los activos de información son protegidos contra amenazas externas." },
        { type: "translate", from: "es", text: "Cada incidente de seguridad debe ser reportado de inmediato.", answer: "Cada incidente de segurança deve ser reportado imediatamente." },
        { type: "order", items: ["las contraseñas", "deben", "ser", "cambiadas", "cada 90 días"], correctOrder: [0, 1, 2, 3, 4] },
        { type: "mc", q: "'Copia de seguridad' significa:", options: ["Backup", "Contraseña", "Amenaza", "Vulnerabilidad"], correct: 0 },
        { type: "open", q: "Escribe dos frases en voz pasiva con 'ser + participio': una en femenino singular y otra en masculino plural, sobre seguridad de la información.", sample: "La confidencialidad es garantizada mediante el cifrado de datos. Los servidores son revisados cada mes por el equipo de TI." },
        { type: "mc", q: "Según el texto, ¿qué documento reúne los controles del Anexo A seleccionados por la organización?", options: ["La Declaración de Aplicabilidad", "El plan de auditoría", "La política de calidad", "El informe financiero"], correct: 0 },
        { type: "mc", q: "¿Qué significa la sigla 'CIA' en el contexto de la ISO/IEC 27001?", options: ["Confidencialidad, Integridad, Disponibilidad", "Control, Inspección, Auditoría", "Certificación, Implementación, Aprobación", "Confianza, Información, Acceso"], correct: 0 }
      ]
    },
    {
      id: "n5",
      order: 5,
      title: "Repaso Integrador: La Auditoría de las Cuatro Normas",
      subtitle: "Deber + infinitivo, se impersonal, subjuntivo y voz pasiva, todos juntos",
      text: "Llegó el momento de combinar los cuatro patrones gramaticales que aprendiste con las cuatro normas. En el mundo real, muchas organizaciones no implementan estas normas por separado: las integran en un solo Sistema Integrado de Gestión (SIG), aprovechando que la ISO 9001, la ISO 14001 y la ISO 45001 comparten una misma estructura de alto nivel (conocida como 'Anexo SL'), con los mismos capítulos genéricos — contexto de la organización, liderazgo, planificación, apoyo, operación, evaluación del desempeño y mejora —, aunque cada una los rellena con su propio contenido técnico. La ISO/IEC 27001 sigue una lógica muy parecida, centrada en el ciclo de gestión de riesgos de la información. Un auditor integral que revisa las cuatro normas al mismo tiempo necesita dominar, en un solo informe, el modal de obligación (deber + infinitivo, de la calidad), el 'se' impersonal y la concordancia con sujetos compuestos (del medio ambiente), el subjuntivo de necesidad y riesgo (de la seguridad y salud en el trabajo), y la voz pasiva con concordancia de participio (de la seguridad de la información).",
      textPt: "Chegou o momento de combinar os quatro padrões gramaticais que você aprendeu com as quatro normas. No mundo real, muitas organizações não implementam essas normas separadamente: elas as integram em um único Sistema Integrado de Gestão (SIG), aproveitando que a ISO 9001, a ISO 14001 e a ISO 45001 compartilham uma mesma estrutura de alto nível (conhecida como 'Anexo SL'), com os mesmos capítulos genéricos — contexto da organização, liderança, planejamento, apoio, operação, avaliação de desempenho e melhoria —, embora cada uma os preencha com seu próprio conteúdo técnico. A ISO/IEC 27001 segue uma lógica bem parecida, centrada no ciclo de gestão de riscos da informação. Um auditor integrado que revisa as quatro normas ao mesmo tempo precisa dominar, em um único relatório, o modal de obrigação (deber + infinitivo, da qualidade), o 'se' impessoal e a concordância com sujeitos compostos (do meio ambiente), o subjuntivo de necessidade e risco (da segurança e saúde no trabalho), e a voz passiva com concordância de particípio (da segurança da informação).",
      dialogue: [
        { who: "Auditor Integral", es: "Buenos días. Hoy voy a auditar las cuatro normas: calidad, medio ambiente, seguridad laboral y seguridad de la información.", pt: "Bom dia. Hoje vou auditar as quatro normas: qualidade, meio ambiente, segurança do trabalho e segurança da informação." },
        { who: "Directora General", es: "Adelante. Nuestra organización debe cumplir los cuatro sistemas de gestión al mismo tiempo.", pt: "Pode prosseguir. Nossa organização deve cumprir os quatro sistemas de gestão ao mesmo tempo." },
        { who: "Auditor Integral", es: "Perfecto. Empecemos por calidad: ¿la política de calidad se revisa cada año?", pt: "Perfeito. Vamos começar pela qualidade: a política da qualidade é revisada todo ano?" },
        { who: "Directora General", es: "Sí, se revisa y se actualiza cada año, según la alta dirección.", pt: "Sim, é revisada e atualizada todo ano, conforme a alta direção." },
        { who: "Auditor Integral", es: "Ahora medio ambiente: es necesario que todos los aspectos ambientales se identifiquen correctamente.", pt: "Agora meio ambiente: é necessário que todos os aspectos ambientais sejam identificados corretamente." },
        { who: "Directora General", es: "Ya se identifican y se registran en nuestro sistema ambiental.", pt: "Eles já são identificados e registrados em nosso sistema ambiental." },
        { who: "Auditor Integral", es: "En seguridad laboral, es importante que los trabajadores participen en la evaluación de riesgos.", pt: "Em segurança do trabalho, é importante que os trabalhadores participem da avaliação de riscos." },
        { who: "Directora General", es: "Ellos participan activamente, y el equipo de protección personal es entregado a todos.", pt: "Eles participam ativamente, e o equipamento de proteção individual é entregue a todos." },
        { who: "Auditor Integral", es: "Por último, ¿la información confidencial es protegida con controles de acceso?", pt: "Por último, a informação confidencial é protegida com controles de acesso?" },
        { who: "Directora General", es: "Sí, todos los activos son protegidos y las contraseñas deben ser cambiadas cada 90 días.", pt: "Sim, todos os ativos são protegidos e as senhas devem ser trocadas a cada 90 dias." },
        { who: "Auditor Integral", es: "Excelente. Su organización demuestra un dominio real de las cuatro normas — y del español normativo.", pt: "Excelente. Sua organização demonstra um domínio real das quatro normas — e do espanhol normativo." }
      ],
      vocabulary: [
        {
          category: "Repaso — Las cuatro normas en una sola frase",
          items: [
            { es: "sistema integrado de gestión", pt: "sistema integrado de gestão" },
            { es: "auditor integral", pt: "auditor integrado / multinorma" },
            { es: "cumplimiento normativo", pt: "conformidade normativa" },
            { es: "mejora continua", pt: "melhoria contínua" },
            { es: "gestión de riesgos", pt: "gestão de riscos" },
            { es: "informe de auditoría integral", pt: "relatório de auditoria integrada" }
          ]
        }
      ],
      exercises: [
        { type: "listen", q: "Escucha y escribe la frase completa.", audioText: "La organización debe cumplir los cuatro sistemas de gestión al mismo tiempo.", answer: "La organización debe cumplir los cuatro sistemas de gestión al mismo tiempo." },
        { type: "mc", q: "'Es necesario que todos los aspectos se identifiquen' usa:", options: ["Indicativo", "Subjuntivo", "Voz pasiva", "Imperativo"], correct: 1 },
        { type: "mc", q: "'Los activos son protegidos' es un ejemplo de:", options: ["Se impersonal", "Voz pasiva con concordancia de participio", "Subjuntivo de riesgo", "Deber + infinitivo"], correct: 1 },
        { type: "fill", q: "Se _______ (identificar, plural) los aspectos ambientales cada año.", answer: "identifican" },
        { type: "fill", q: "Es importante que los trabajadores _______ (participar) en la evaluación de riesgos.", answer: "participen" },
        { type: "order", items: ["las contraseñas", "deben", "ser", "cambiadas", "cada 90 días"], correctOrder: [0, 1, 2, 3, 4] },
        { type: "translate", from: "pt", text: "A organização deve cumprir os quatro sistemas de gestão ao mesmo tempo.", answer: "La organización debe cumplir los cuatro sistemas de gestión al mismo tiempo." },
        { type: "speak", prompt: "Practica esta frase de cierre de auditoría integral.", target: "Su organización demuestra un dominio real de las cuatro normas." },
        { type: "open", q: "Redacta un breve párrafo de informe de auditoría integral (3 a 5 frases) usando al menos tres de los cuatro patrones gramaticales de este módulo: deber + infinitivo, se impersonal, subjuntivo de riesgo y voz pasiva.", sample: "La organización debe mantener actualizada su política de calidad. Es necesario que los riesgos ambientales se identifiquen cada año. Los activos de información son protegidos mediante controles de acceso, y es importante que todos los trabajadores participen en la evaluación de riesgos laborales." }
      ]
    },
    {
      id: "n6",
      order: 6,
      title: "La Reunión de Auditoría: Apertura, Cierre y el Informe",
      subtitle: "Fórmulas de cortesía profesional y verbos de hallazgo (se constató que…, se recomienda que + subjuntivo) · Tema: El proceso de auditoría (ISO 19011)",
      text: "La norma ISO 19011 no certifica ningún sistema de gestión: es una guía internacional que orienta CÓMO se debe planificar y ejecutar una auditoría, ya sea de calidad, de medio ambiente, de seguridad y salud en el trabajo o de seguridad de la información. Según esta guía, toda auditoría in situ gira alrededor de tres momentos formales que el auditor conduce con un lenguaje profesional muy característico: la reunión de apertura, la ejecución de la auditoría y la reunión de cierre — y termina siempre con un documento escrito, el informe de auditoría. La reunión de apertura tiene un objetivo simple pero decisivo: dejar absolutamente claras las reglas del juego antes de empezar. En ella, el auditor se presenta a sí mismo y al equipo auditor, confirma el alcance y los objetivos de la auditoría, repasa el plan o cronograma acordado, explica la metodología que va a seguir (entrevistas, revisión de documentos, verificación in situ de los procesos), confirma los criterios de auditoría — es decir, contra qué norma o requisito se está evaluando —, aclara cómo se van a clasificar y comunicar los hallazgos, y garantiza la confidencialidad de la información. Es también el momento de confirmar los recursos y las personas de contacto disponibles durante la jornada, y de abrir un espacio breve para preguntas antes de comenzar. La reunión de cierre, al final de la jornada, cumple la función opuesta: presentar lo que se encontró. El auditor agradece la colaboración recibida, resume brevemente el proceso seguido, y presenta los hallazgos con su evidencia objetiva — clasificados normalmente en no conformidades mayores, no conformidades menores, observaciones y oportunidades de mejora —, explica los próximos pasos (plazos para el plan de acción correctivo, si corresponde) y deja espacio para que el auditado exprese su opinión o presente una discrepancia formal, si la tiene. El informe de auditoría, entregado después, formaliza todo por escrito: datos generales (fecha, organización, alcance, objetivos y criterios de auditoría, equipo auditor y participantes), la metodología empleada, un resumen ejecutivo, el detalle de cada hallazgo con su evidencia objetiva, la conclusión general sobre la conformidad del sistema, y las recomendaciones y plazos de seguimiento. Tanto en la reunión de apertura como en la de cierre, el español profesional recurre a fórmulas de cortesía muy estables — 'quisiera', 'nos gustaría', 'permítanme', 'antes de comenzar' — y, sobre todo en el informe, a verbos de constatación en 'se' impersonal ('se constató que…', 'se evidenció que…', 'se observó que…') seguidos de una recomendación en subjuntivo ('se recomienda que la organización revise…'), el mismo subjuntivo de necesidad que ya practicaste en la lección sobre seguridad y salud en el trabajo.",
      textPt: "A norma ISO 19011 não certifica nenhum sistema de gestão: é um guia internacional que orienta COMO se deve planejar e executar uma auditoria, seja de qualidade, de meio ambiente, de segurança e saúde no trabalho ou de segurança da informação. Segundo esse guia, toda auditoria in loco gira em torno de três momentos formais que o auditor conduz com uma linguagem profissional bem característica: a reunião de abertura, a execução da auditoria e a reunião de encerramento — e termina sempre com um documento escrito, o relatório de auditoria. A reunião de abertura tem um objetivo simples, porém decisivo: deixar absolutamente claras as regras do jogo antes de começar. Nela, o auditor se apresenta a si mesmo e à equipe auditora, confirma o escopo e os objetivos da auditoria, revisa o plano ou cronograma acordado, explica a metodologia que vai seguir (entrevistas, revisão de documentos, verificação in loco dos processos), confirma os critérios de auditoria — ou seja, contra qual norma ou requisito está sendo avaliado —, esclarece como os achados serão classificados e comunicados, e garante a confidencialidade das informações. É também o momento de confirmar os recursos e as pessoas de contato disponíveis durante o dia, e de abrir um espaço breve para perguntas antes de começar. A reunião de encerramento, ao final do dia, cumpre a função oposta: apresentar o que foi encontrado. O auditor agradece a colaboração recebida, resume brevemente o processo seguido, e apresenta os achados com sua evidência objetiva — normalmente classificados em não conformidades maiores, não conformidades menores, observações e oportunidades de melhoria —, explica os próximos passos (prazos para o plano de ação corretiva, se for o caso) e deixa espaço para que o auditado expresse sua opinião ou apresente uma discordância formal, se tiver. O relatório de auditoria, entregue depois, formaliza tudo por escrito: dados gerais (data, organização, escopo, objetivos e critérios de auditoria, equipe auditora e participantes), a metodologia empregada, um resumo executivo, o detalhamento de cada achado com sua evidência objetiva, a conclusão geral sobre a conformidade do sistema, e as recomendações e prazos de acompanhamento. Tanto na reunião de abertura quanto na de encerramento, o espanhol profissional recorre a fórmulas de cortesia muito estáveis — 'quisiera', 'nos gustaría', 'permítanme', 'antes de comenzar' — e, sobretudo no relatório, a verbos de constatação em 'se' impessoal ('se constató que…', 'se evidenció que…', 'se observó que…') seguidos de uma recomendação no subjuntivo ('se recomienda que la organización revise…'), o mesmo subjuntivo de necessidade que você já praticou na lição sobre segurança e saúde no trabalho.",
      dialogue: [
        { who: "Auditor Líder", es: "Buenos días a todos. Antes de comenzar, quisiera presentarme: soy el auditor líder de esta auditoría integral.", pt: "Bom dia a todos. Antes de começar, gostaria de me apresentar: sou o auditor líder desta auditoria integrada." },
        { who: "Directora General", es: "Bienvenido. Aquí está el equipo que lo va a acompañar durante toda la jornada.", pt: "Seja bem-vindo. Aqui está a equipe que vai acompanhá-lo durante todo o dia." },
        { who: "Auditor Líder", es: "Gracias. Nos gustaría confirmar el alcance: la auditoría cubre los procesos de producción y el sistema de gestión de calidad.", pt: "Obrigado. Gostaríamos de confirmar o escopo: a auditoria cobre os processos de produção e o sistema de gestão da qualidade." },
        { who: "Directora General", es: "Correcto, ese es el alcance acordado.", pt: "Correto, esse é o escopo acordado." },
        { who: "Auditor Líder", es: "Perfecto. Vamos a trabajar con entrevistas y revisión documental, y cualquier hallazgo se va a clasificar como no conformidad, observación u oportunidad de mejora.", pt: "Perfeito. Vamos trabalhar com entrevistas e revisão documental, e qualquer achado será classificado como não conformidade, observação ou oportunidade de melhoria." },
        { who: "Directora General", es: "Entendido. Toda la información va a ser tratada de forma confidencial, ¿verdad?", pt: "Entendido. Todas as informações serão tratadas de forma confidencial, certo?" },
        { who: "Auditor Líder", es: "Así es. Ahora, ya al final del día: se constató que el procedimiento de calibración no estaba actualizado.", pt: "Exatamente. Agora, já ao final do dia: constatou-se que o procedimento de calibração não estava atualizado." },
        { who: "Directora General", es: "Entiendo. ¿Eso se clasifica como no conformidad mayor o menor?", pt: "Entendo. Isso se classifica como não conformidade maior ou menor?" },
        { who: "Auditor Líder", es: "Se evidenció que el impacto es limitado, así que es una no conformidad menor. Se recomienda que la organización actualice el procedimiento en un plazo de 30 días.", pt: "Evidenciou-se que o impacto é limitado, então é uma não conformidade menor. Recomenda-se que a organização atualize o procedimento em um prazo de 30 dias." },
        { who: "Directora General", es: "Perfecto, vamos a preparar el plan de acción correctivo.", pt: "Perfeito, vamos preparar o plano de ação corretiva." },
        { who: "Auditor Líder", es: "Excelente. El informe de auditoría con todos los hallazgos y la conclusión final va a estar listo en cinco días hábiles.", pt: "Excelente. O relatório de auditoria com todos os achados e a conclusão final vai estar pronto em cinco dias úteis." }
      ],
      vocabulary: [
        {
          category: "Reunión de apertura — qué se debe decir",
          items: [
            { es: "alcance de la auditoría", pt: "escopo da auditoria" },
            { es: "objetivos de la auditoría", pt: "objetivos da auditoria" },
            { es: "criterios de auditoría", pt: "critérios de auditoria" },
            { es: "equipo auditor", pt: "equipe auditora" },
            { es: "plan de auditoría", pt: "plano de auditoria" },
            { es: "persona de contacto", pt: "pessoa de contato" },
            { es: "confidencialidad", pt: "confidencialidade" },
            { es: "metodología de auditoría", pt: "metodologia de auditoria" }
          ]
        },
        {
          category: "Reunión de cierre — qué se debe decir",
          items: [
            { es: "hallazgo", pt: "achado" },
            { es: "evidencia objetiva", pt: "evidência objetiva" },
            { es: "no conformidad mayor", pt: "não conformidade maior" },
            { es: "no conformidad menor", pt: "não conformidade menor" },
            { es: "observación", pt: "observação" },
            { es: "oportunidad de mejora", pt: "oportunidade de melhoria" },
            { es: "plan de acción correctivo", pt: "plano de ação corretiva" },
            { es: "derecho de apelación", pt: "direito de recurso" }
          ]
        },
        {
          category: "Informe de auditoría — qué debe contener",
          items: [
            { es: "resumen ejecutivo", pt: "resumo executivo" },
            { es: "alcance y objetivos", pt: "escopo e objetivos" },
            { es: "equipo auditor y participantes", pt: "equipe auditora e participantes" },
            { es: "metodología empleada", pt: "metodologia empregada" },
            { es: "conclusión de conformidad", pt: "conclusão de conformidade" },
            { es: "plazo de seguimiento", pt: "prazo de acompanhamento" },
            { es: "lista de distribución", pt: "lista de distribuição" },
            { es: "firma del auditor líder", pt: "assinatura do auditor líder" }
          ]
        }
      ],
      grammar: [
        {
          title: "Fórmulas de cortesía + verbos de hallazgo (se constató / se recomienda que + subjuntivo)",
          headers: ["Momento", "Fórmula", "Ejemplo"],
          rows: [
            ["Apertura — presentarse", "Quisiera / Permítanme presentarme", "Quisiera presentarme: soy el auditor líder de esta auditoría."],
            ["Apertura — confirmar alcance", "Nos gustaría confirmar que…", "Nos gustaría confirmar que el alcance incluye los tres turnos de producción."],
            ["Cierre — presentar un hallazgo (hecho)", "Se constató que… / Se evidenció que…", "Se constató que el procedimiento no estaba actualizado."],
            ["Informe — recomendación (subjuntivo)", "Se recomienda que + subjuntivo", "Se recomienda que la organización revise el procedimiento en un plazo de 30 días."]
          ]
        }
      ],
      exercises: [
        { type: "mc", q: "¿Cuál de estas frases es apropiada para ABRIR una reunión de apertura de auditoría?", options: ["Quisiera presentarme: soy el auditor líder de esta auditoría.", "Se constató que el procedimiento no estaba actualizado.", "El informe va a estar listo en cinco días.", "Gracias por su colaboración, hemos terminado."], correct: 0 },
        { type: "mc", q: "¿En qué momento de la auditoría se presentan los hallazgos con su evidencia objetiva?", options: ["En la reunión de apertura", "En la reunión de cierre", "Antes de firmar el contrato", "Nunca se presentan oralmente"], correct: 1 },
        { type: "fill", q: "Se _______ (constatar) que el procedimiento de calibración no estaba actualizado.", answer: "constató" },
        { type: "fill", q: "Se recomienda que la organización _______ (actualizar) el procedimiento en 30 días.", answer: "actualice" },
        { type: "fill", q: "Nos gustaría _______ (confirmar) el alcance de la auditoría antes de comenzar.", answer: "confirmar" },
        { type: "translate", from: "pt", text: "Gostaríamos de confirmar o escopo e os objetivos da auditoria.", answer: "Nos gustaría confirmar el alcance y los objetivos de la auditoría." },
        { type: "translate", from: "es", text: "Se recomienda que la organización revise el procedimiento en un plazo de 30 días.", answer: "Recomenda-se que a organização revise o procedimento em um prazo de 30 dias." },
        { type: "order", items: ["se", "recomienda", "que", "la organización", "revise el procedimiento"], correctOrder: [0, 1, 2, 3, 4] },
        { type: "speak", prompt: "Practica esta frase de apertura de auditoría.", target: "Quisiera presentarme: soy el auditor líder de esta auditoría." },
        { type: "mc", q: "¿Cuál de estas partes NO suele formar parte de un informe de auditoría?", options: ["Resumen ejecutivo", "Metodología empleada", "El salario de los empleados", "Conclusión de conformidad"], correct: 2 },
        { type: "mc", q: "Según el texto, ¿qué norma internacional ofrece la guía para PLANIFICAR y EJECUTAR una auditoría?", options: ["ISO 9001", "ISO 19011", "ISO 14001", "ISO/IEC 27001"], correct: 1 },
        { type: "open", q: "Escribe un breve párrafo (3 a 4 frases) como si fueras el auditor líder cerrando una reunión de cierre: agradece la colaboración, presenta un hallazgo con 'se constató que' y da una recomendación con 'se recomienda que' + subjuntivo.", sample: "Gracias a todos por la colaboración durante esta auditoría. Se constató que la documentación del proceso de producción está completa y actualizada. Sin embargo, se evidenció que faltan registros de capacitación del último trimestre. Se recomienda que el área de Recursos Humanos complete estos registros en un plazo de 15 días." }
      ]
    }
  ],
  exam: {
    title: "📜 Prueba Final — Español de las Normas",
    questions: [
      { type: "mc", q: "La organización _______ establecer una política de calidad clara.", options: ["debe", "deben", "debes", "deber"], correct: 0 },
      { type: "mc", q: "Los procesos _______ cumplir los requisitos del cliente.", options: ["debe", "deben", "debiendo", "debemos"], correct: 1 },
      { type: "fill", q: "El auditor _______ (deber) verificar la conformidad antes de firmar.", answer: "debe" },
      { type: "mc", q: "¿Cuál frase usa correctamente el 'se' impersonal en plural?", options: ["Se identifica los aspectos ambientales.", "Se identifican los aspectos ambientales.", "Se identificas los aspectos.", "Se identificamos los aspectos."], correct: 1 },
      { type: "fill", q: "Los residuos y los materiales reciclables se _______ (separar) en contenedores distintos.", answer: "separan" },
      { type: "translate", from: "pt", text: "Deve-se reduzir a pegada de carbono a cada ano.", answer: "Se debe reducir la huella de carbono cada año." },
      { type: "mc", q: "¿Cuál opción usa correctamente el subjuntivo de necesidad?", options: ["Es necesario que la empresa identifica los peligros.", "Es necesario que la empresa identifique los peligros.", "Es necesario que la empresa identificar los peligros.", "Es necesario la empresa identifique los peligros."], correct: 1 },
      { type: "fill", q: "En caso de que _______ (ocurrir) un incidente, se debe reportar de inmediato.", answer: "ocurra" },
      { type: "mc", q: "'EPP' en el contexto de seguridad laboral significa:", options: ["Equipo de protección personal", "Evaluación de peligros permanente", "Estándar de prevención de pérdidas", "Escala de participación del personal"], correct: 0 },
      { type: "mc", q: "¿Cuál opción respeta la concordancia del participio en voz pasiva?", options: ["Los activos es protegido.", "Los activos son protegidos.", "Los activos son protegida.", "Los activos es protegidos."], correct: 1 },
      { type: "fill", q: "Las contraseñas deben _______ (ser) cambiadas cada 90 días.", answer: "ser" },
      { type: "translate", from: "es", text: "Los activos de información son protegidos contra amenazas externas.", answer: "Os ativos de informação são protegidos contra ameaças externas." },
      { type: "order", items: ["la organización", "debe", "establecer", "una política de calidad"], correctOrder: [0, 1, 2, 3] },
      { type: "mc", q: "¿Qué norma trata específicamente sobre seguridad y salud en el trabajo?", options: ["ISO 9001", "ISO 14001", "ISO 45001", "ISO/IEC 27001"], correct: 2 },
      { type: "mc", q: "¿Qué norma trata específicamente sobre seguridad de la información?", options: ["ISO 9001", "ISO 14001", "ISO 45001", "ISO/IEC 27001"], correct: 3 },
      { type: "speak", prompt: "Practica esta frase con concordancia verbal y voz pasiva.", target: "Los activos de información son protegidos mediante controles de acceso." },
      { type: "open", q: "Escribe un párrafo breve (3 a 4 frases) como si fueras un auditor integral, usando al menos DOS de estos patrones: deber + infinitivo, se impersonal, subjuntivo de necesidad, voz pasiva con concordancia de participio.", sample: "La organización debe mantener actualizada su política de calidad. Es necesario que los riesgos se evalúen cada año. Los activos de información son protegidos mediante controles de acceso estrictos." },
      { type: "open", q: "Explica con tus propias palabras, en español, la diferencia entre 'debe' y 'deben', dando un ejemplo original de cada uno relacionado con el mundo de las normas técnicas.", sample: "'Debe' se usa cuando el sujeto es singular, por ejemplo: 'El proceso debe documentarse.' 'Deben' se usa cuando el sujeto es plural, por ejemplo: 'Los procedimientos deben actualizarse cada año.'" }
    ]
  }
};
