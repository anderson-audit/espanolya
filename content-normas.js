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
  description: "Módulo especial y creativo: usamos el lenguaje real de las normas ISO de calidad, medio ambiente, seguridad laboral y seguridad de la información como excusa para dominar la gramática más útil del español profesional — concordancia verbal, el modal de obligación, el 'se' impersonal y el subjuntivo de riesgo.",
  lessons: [
    {
      id: "n1",
      order: 1,
      title: "El Verbo que Manda: DEBER + Infinitivo",
      subtitle: "Obligación normativa y concordancia sujeto-verbo · Tema: Calidad (ISO 9001)",
      text: "En el español de las normas técnicas, la fórmula más frecuente para expresar una obligación es el verbo 'deber' seguido de un infinitivo. Presta mucha atención a la concordancia: si el sujeto es singular, se usa 'debe'; si el sujeto es plural, se usa 'deben'. Parece un detalle pequeño, pero en un documento de calidad un error de concordancia puede cambiar por completo quién tiene la responsabilidad de una tarea. La norma ISO 9001, sobre gestión de calidad, está llena de frases con esta estructura, así que es el punto de partida perfecto para entrenar el oído y la escritura.",
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
        { type: "open", q: "Escribe dos frases sobre la política de calidad de una empresa: una con sujeto singular usando 'debe' y otra con sujeto plural usando 'deben'.", sample: "La organización debe comunicar su política de calidad a todo el personal. Los empleados deben conocer los objetivos de calidad de su área." }
      ]
    },
    {
      id: "n2",
      order: 2,
      title: "Concordancia en Cadena y el SE Impersonal",
      subtitle: "Sujetos compuestos, colectivos y frases sin sujeto claro · Tema: Medio Ambiente (ISO 14001)",
      text: "El lenguaje ambiental normativo añade dos retos gramaticales interesantes. El primero es la concordancia con sujetos compuestos o colectivos: cuando dos sustantivos se unen con 'y' (por ejemplo, 'el aspecto y el impacto ambiental'), el verbo casi siempre va en plural. El segundo es el 'se' impersonal, muy usado quan­do no importa quién realiza la acción, sino que la acción se cumpla: 'se debe reducir', 'se establece un procedimiento', 'se identifican los riesgos'. Fíjate en que, con 'se', el verbo concuerda con el sustantivo que sigue: 'se identifica el aspecto' (singular) pero 'se identifican los aspectos' (plural).",
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
        { type: "open", q: "Escribe una frase con 'se' impersonal en singular y otra en plural, usando vocabulario ambiental.", sample: "Se controla el consumo de agua en cada turno. Se registran los residuos peligrosos cada semana." }
      ]
    },
    {
      id: "n3",
      order: 3,
      title: "El Subjuntivo del Riesgo",
      subtitle: "'Es necesario que...', 'en caso de que...' · Tema: Seguridad y Salud en el Trabajo (ISO 45001)",
      text: "Cuando una norma no solo describe una obligación directa, sino que expresa necesidad, finalidad o una condición hipotética de riesgo, el español recurre al subjuntivo. Compara: 'La empresa identifica los peligros' (hecho, indicativo) frente a 'Es necesario que la empresa identifique los peligros' (necesidad, subjuntivo). Este cambio de modo verbal es uno de los puntos más difíciles del español para hablantes de portugués, así que vamos a practicarlo con el vocabulario de seguridad y salud en el trabajo, un área donde el subjuntivo aparece constantemente: 'para que se garantice la seguridad', 'en caso de que ocurra un incidente', 'es importante que los trabajadores participen'.",
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
        { type: "open", q: "Escribe una frase con 'es necesario que' y otra con 'en caso de que', usando vocabulario de seguridad laboral.", sample: "Es necesario que todos los trabajadores usen casco en la planta. En caso de que se detecte un riesgo, se debe detener la actividad." }
      ]
    },
    {
      id: "n4",
      order: 4,
      title: "La Voz Pasiva de la Seguridad",
      subtitle: "SER + participio, y la concordancia de género y número · Tema: Seguridad de la Información (ISO/IEC 27001)",
      text: "En los documentos de seguridad de la información es muy común la voz pasiva con 'ser', porque lo importante no es quién protege, sino qué es protegido. La regla de oro: el participio concuerda en género y número con el sujeto. 'La información es protegida' (femenino singular), pero 'los activos son protegidos' (masculino plural) y 'las contraseñas deben ser cambiadas' (femenino plural). Practicar esta concordancia del participio es clave para escribir — y hablar — con precisión sobre ciberseguridad en español.",
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
        { type: "open", q: "Escribe dos frases en voz pasiva con 'ser + participio': una en femenino singular y otra en masculino plural, sobre seguridad de la información.", sample: "La confidencialidad es garantizada mediante el cifrado de datos. Los servidores son revisados cada mes por el equipo de TI." }
      ]
    },
    {
      id: "n5",
      order: 5,
      title: "Repaso Integrador: La Auditoría de las Cuatro Normas",
      subtitle: "Deber + infinitivo, se impersonal, subjuntivo y voz pasiva, todos juntos",
      text: "Llegó el momento de combinar los cuatro patrones gramaticales que aprendiste con las cuatro normas: el modal de obligación (deber + infinitivo, de la calidad), el 'se' impersonal y la concordancia con sujetos compuestos (del medio ambiente), el subjuntivo de necesidad y riesgo (de la seguridad y salud en el trabajo), y la voz pasiva con concordancia de participio (de la seguridad de la información). Un auditor integral que revisa las cuatro normas al mismo tiempo necesita dominar los cuatro patrones para escribir un informe claro y profesional.",
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
