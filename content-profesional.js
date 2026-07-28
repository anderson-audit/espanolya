// content-profesional.js
// Módulo BÔNUS exclusivo: Español Profesional para Auditoría y Negocios
// Conteúdo extraído de material real de auditorias ISO 27001 (Argentina/Peru),
// glossário Jessy Quiceno e vocabulário corporativo "Auditoría y Normas".

const LEVEL_PROFESIONAL = {
  id: "profesional",
  name: "Español Profesional — Auditoría y Negocios",
  icon: "💼",
  colorFrom: "#263238",
  colorTo: "#AA151B",
  description: "Módulo exclusivo: o vocabulário e as frases que você realmente usa em auditorias ISO, reuniões e negócios em espanhol.",
  lessons: [
    {
      id: "p1",
      order: 1,
      title: "Vocabulario General de Auditoría",
      subtitle: "Términos clave ISO",
      vocabulary: [
        {
          category: "Auditoría y Normas",
          items: [
            { es: "auditoría", pt: "auditoria" },
            { es: "control interno", pt: "controle interno" },
            { es: "riesgo operativo", pt: "risco operacional" },
            { es: "informe de auditoría", pt: "relatório de auditoria" },
            { es: "hallazgo", pt: "achado / evidência encontrada" },
            { es: "procedimiento", pt: "procedimento" },
            { es: "protocolo", pt: "protocolo" },
            { es: "evaluación", pt: "avaliação" },
            { es: "verificación", pt: "verificação" },
            { es: "normativa", pt: "normativa" },
            { es: "estándar", pt: "norma / padrão" },
            { es: "regulación", pt: "regulação" },
            { es: "certificación", pt: "certificação" },
            { es: "control de calidad", pt: "controle de qualidade" },
            { es: "auditor externo", pt: "auditor externo" },
            { es: "trazabilidad", pt: "rastreabilidade" },
            { es: "cumplimiento de normas", pt: "conformidade com normas" },
            { es: "gestión de auditoría", pt: "gestão de auditoria" },
            { es: "auditar", pt: "auditar (verbo)" },
            { es: "verificar", pt: "verificar (verbo)" },
            { es: "evaluar", pt: "avaliar (verbo)" },
            { es: "implementar", pt: "implementar (verbo)" },
            { es: "reportar", pt: "reportar (verbo)" },
            { es: "controlar", pt: "controlar (verbo)" },
            { es: "revisar", pt: "revisar (verbo)" },
            { es: "supervisar", pt: "supervisionar (verbo)" },
            { es: "certificar", pt: "certificar (verbo)" },
            { es: "normar", pt: "normatizar (verbo)" },
            { es: "cumplir", pt: "cumprir (verbo)" },
            { es: "documentar", pt: "documentar (verbo)" },
            { es: "analizar", pt: "analisar (verbo)" },
            { es: "prevenir", pt: "prevenir (verbo)" },
            { es: "detectar", pt: "detectar (verbo)" },
            { es: "estandarizar", pt: "padronizar (verbo)" }
          ]
        },
        {
          category: "Términos Técnicos ISO 27001",
          items: [
            { es: "auditoría remota", pt: "auditoria remota" },
            { es: "auditoría interna", pt: "auditoria interna" },
            { es: "auditoría externa", pt: "auditoria externa" },
            { es: "alcance de la auditoría", pt: "escopo da auditoria" },
            { es: "alcance de certificación", pt: "escopo da certificação" },
            { es: "objetivos de la auditoría", pt: "objetivos da auditoria" },
            { es: "criterios de la auditoría", pt: "critérios da auditoria" },
            { es: "evidencias", pt: "evidências" },
            { es: "no conformidad mayor (NC A)", pt: "não conformidade maior" },
            { es: "no conformidad menor (NC B)", pt: "não conformidade menor" },
            { es: "constataciones", pt: "constatações / achados" },
            { es: "plan de auditoría", pt: "plano de auditoria" },
            { es: "registro / evidencia documentada", pt: "registro / evidência documentada" },
            { es: "mejora continua", pt: "melhoria contínua" },
            { es: "sistema de gestión", pt: "sistema de gestão" },
            { es: "Sistema de Gestión de Seguridad de la Información (SGSI)", pt: "SGSI" },
            { es: "riesgos y controles", pt: "riscos e controles" },
            { es: "requisitos", pt: "requisitos" },
            { es: "seguridad de la información", pt: "segurança da informação" },
            { es: "confidencialidad, integridad y disponibilidad", pt: "confidencialidade, integridade e disponibilidade" },
            { es: "declaración de aplicabilidad (SoA)", pt: "declaração de aplicabilidade" },
            { es: "requisitos no aplicables", pt: "requisitos não aplicáveis" },
            { es: "análisis crítico por la dirección", pt: "análise crítica pela direção" },
            { es: "acciones correctivas", pt: "ações corretivas" },
            { es: "análisis de la causa raíz", pt: "análise da causa raiz" },
            { es: "matriz de riesgos y oportunidades", pt: "matriz de riscos e oportunidades" },
            { es: "tratamiento de riesgos", pt: "tratamento de riscos" },
            { es: "inventario de activos", pt: "inventário de ativos" },
            { es: "control de acceso", pt: "controle de acesso" },
            { es: "copia de seguridad / respaldo", pt: "backup" },
            { es: "continuidad del negocio", pt: "continuidade de negócios" },
            { es: "escaneo de vulnerabilidades", pt: "varredura de vulnerabilidades" },
            { es: "alta dirección", pt: "alta direção" },
            { es: "requisitos legales aplicables", pt: "requisitos legais aplicáveis" }
          ]
        },
        {
          category: "Sectores de la Organización",
          items: [
            { es: "Recursos Humanos", pt: "Recursos Humanos" },
            { es: "Tecnología de la Información (TI)", pt: "Tecnologia da Informação" },
            { es: "Atención al cliente", pt: "Atendimento ao cliente" },
            { es: "Finanzas / contabilidad", pt: "Finanças / contabilidade" },
            { es: "Compras / suministros", pt: "Compras / suprimentos" },
            { es: "Mantenimiento / operaciones", pt: "Manutenção / operações" },
            { es: "Seguridad laboral", pt: "Segurança do trabalho" },
            { es: "Medio ambiente", pt: "Meio ambiente" },
            { es: "Dirección / alta gerencia", pt: "Direção / alta gerência" },
            { es: "Gestión de proveedores / contratistas", pt: "Gestão de fornecedores / contratados" }
          ]
        }
      ],
      text: "Este vocabulario proviene de documentos reales de auditorías ISO 27001 realizadas en clientes de Argentina y Perú, además de un glosario elaborado especialmente para el contexto de auditoría. Dominar estos términos es el primer paso para conducir una auditoría completa en español, desde la reunión de apertura hasta el informe final.",
      textPt: "Este vocabulário vem de documentos reais de auditorias ISO 27001 realizadas em clientes da Argentina e do Peru, além de um glossário elaborado especialmente para o contexto de auditoria. Dominar esses termos é o primeiro passo para conduzir uma auditoria completa em espanhol, desde a reunião de abertura até o relatório final.",
      exercises: [
        { type: "mc", q: "¿Qué significa 'hallazgo' en el contexto de una auditoría?", options: ["Achado / evidência encontrada", "Documento assinado", "Reunião de encerramento", "Plano de ação"], correct: 0 },
        { type: "mc", q: "¿Cuál es la traducción de 'no conformidad mayor'?", options: ["Oportunidade de melhoria", "Não conformidade maior", "Ação corretiva", "Boas práticas"], correct: 1 },
        { type: "mc", q: "'SGSI' significa:", options: ["Sistema de Gestión de Seguridad de la Información", "Servicio General de Sistemas Internos", "Sector de Gestión y Supervisión Interna", "Sistema General de Seguridad Industrial"], correct: 0 },
        { type: "mc", q: "¿Qué verbo usarías para decir que vas a 'padronizar' un proceso?", options: ["Certificar", "Estandarizar", "Prevenir", "Documentar"], correct: 1 },
        { type: "fill", q: "El auditor debe _______ (verificar) que los controles estén implementados.", answer: "verificar" },
        { type: "fill", q: "La empresa recibió la _______ ISO 27001 después de la auditoría.", answer: "certificación", altAnswers: ["certificacion"] },
        { type: "translate", from: "pt", text: "controle interno", answer: "control interno" },
        { type: "translate", from: "pt", text: "análise da causa raiz", answer: "análisis de la causa raíz", altAnswers: ["analisis de la causa raiz"] },
        { type: "translate", from: "es", text: "declaración de aplicabilidad", answer: "declaração de aplicabilidade" },
        { type: "mc", q: "¿A qué sector pertenece 'gestión de proveedores'?", options: ["Recursos Humanos", "Gestión de proveedores / contratistas", "Medio ambiente", "Atención al cliente"], correct: 1 },
        { type: "fill", q: "El _______ de auditoría define fechas, horarios y alcance antes de la visita.", answer: "plan" },
        { type: "mc", q: "'Trazabilidad' se refiere a:", options: ["Rastreabilidade", "Traduzibilidade", "Estabilidade", "Tratabilidade"], correct: 0 }
      ]
    },
    {
      id: "p2",
      order: 2,
      title: "La Reunión de Apertura y Cierre",
      subtitle: "Frases de la reunión de auditoría",
      dialogue: [
        { who: "Auditora", es: "Buenos días a todos. Permítanme presentarme: soy la auditora líder del equipo que va a realizar la auditoría integrada de hoy.", pt: "Bom dia a todos. Permitam-me me apresentar: sou a auditora líder da equipe que vai realizar a auditoria integrada de hoje." },
        { who: "Auditora", es: "Vamos a auditar cuatro sistemas de gestión al mismo tiempo: calidad según la ISO 9001, medio ambiente según la ISO 14001, seguridad y salud en el trabajo según la ISO 45001, y seguridad de la información según la ISO/IEC 27001.", pt: "Vamos auditar quatro sistemas de gestão ao mesmo tempo: qualidade conforme a ISO 9001, meio ambiente conforme a ISO 14001, segurança e saúde no trabalho conforme a ISO 45001, e segurança da informação conforme a ISO/IEC 27001." },
        { who: "Representante", es: "Bienvenida. Estamos a su disposición para lo que necesite durante estos dos días de auditoría.", pt: "Bem-vinda. Estamos à disposição para o que precisar durante estes dois dias de auditoria." },
        { who: "Auditora", es: "Gracias. ¿Podrían firmar la hoja de asistencia y confirmar los nombres de las personas que voy a entrevistar hoy?", pt: "Obrigada. Poderiam assinar a lista de presença e confirmar os nomes das pessoas que vou entrevistar hoje?" },
        { who: "Representante", es: "Claro, aquí tiene la lista completa, con Producción, Medio Ambiente, Recursos Humanos y Tecnología de la Información.", pt: "Claro, aqui está a lista completa, com Produção, Meio Ambiente, Recursos Humanos e Tecnologia da Informação." },
        { who: "Auditora", es: "Perfecto. Este es el plan de auditoría que les envié previamente, con el alcance de cada norma y los horarios de cada entrevista.", pt: "Perfeito. Este é o plano de auditoria que enviei previamente, com o escopo de cada norma e os horários de cada entrevista." },
        { who: "Representante", es: "Entendido. ¿Podría explicarnos cómo van a comunicar los resultados al final del día?", pt: "Entendido. Poderia nos explicar como vão comunicar os resultados ao final do dia?" },
        { who: "Auditora", es: "Por supuesto. Al final de cada entrevista indicaré si hay algún hallazgo, y al cierre de la auditoría vamos a presentar un resumen con las no conformidades, las oportunidades de mejora y las buenas prácticas.", pt: "Claro. Ao final de cada entrevista vou indicar se há algum achado, e no encerramento da auditoria vamos apresentar um resumo com as não conformidades, as oportunidades de melhoria e as boas práticas." },
        { who: "Auditora", es: "Empecemos por calidad: ¿la política de calidad se revisa cada año, según exige la ISO 9001?", pt: "Vamos começar pela qualidade: a política da qualidade é revisada todo ano, como exige a ISO 9001?" },
        { who: "Representante", es: "Sí, se revisa y se actualiza cada año, con la aprobación de la alta dirección.", pt: "Sim, é revisada e atualizada todo ano, com a aprovação da alta direção." },
        { who: "Auditora", es: "Ahora medio ambiente: he identificado que el aspecto ambiental 'consumo de agua' no está documentado en la matriz de aspectos e impactos, como exige la ISO 14001.", pt: "Agora meio ambiente: identifiquei que o aspecto ambiental 'consumo de água' não está documentado na matriz de aspectos e impactos, como exige a ISO 14001." },
        { who: "Representante", es: "Tiene razón, es un descuido. Vamos a corregirlo con una acción correctiva esta misma semana.", pt: "Você tem razão, foi um descuido. Vamos corrigir isso com uma ação corretiva ainda esta semana." },
        { who: "Auditora", es: "En seguridad laboral, ¿los trabajadores participan en la evaluación de riesgos, como exige la ISO 45001?", pt: "Em segurança do trabalho, os trabalhadores participam da avaliação de riscos, como exige a ISO 45001?" },
        { who: "Representante", es: "Sí, participan activamente, y todos reciben el equipo de protección personal antes de entrar a planta.", pt: "Sim, participam ativamente, e todos recebem o equipamento de proteção individual antes de entrar na planta." },
        { who: "Auditora", es: "Por último, seguridad de la información: ¿las contraseñas del sistema son cambiadas cada 90 días, conforme a la política de la ISO/IEC 27001?", pt: "Por último, segurança da informação: as senhas do sistema são trocadas a cada 90 dias, conforme a política da ISO/IEC 27001?" },
        { who: "Representante", es: "Sí, y además todos los activos críticos son protegidos con doble factor de autenticación.", pt: "Sim, e além disso todos os ativos críticos são protegidos com autenticação de dois fatores." },
        { who: "Auditora", es: "Excelente. He identificado solo una no conformidad menor, en medio ambiente, ya con acción correctiva definida. Con esto cerramos la auditoría integrada de hoy. Agradezco su tiempo y colaboración.", pt: "Excelente. Identifiquei apenas uma não conformidade menor, em meio ambiente, já com ação corretiva definida. Com isso encerramos a auditoria integrada de hoje. Agradeço o tempo e a colaboração de vocês." },
        { who: "Representante", es: "Muchas gracias a usted. Quedamos atentos al informe de auditoría integrada.", pt: "Muito obrigado a você. Ficamos no aguardo do relatório da auditoria integrada." }
      ],
      vocabulary: [
        {
          category: "Frases de la Reunión de Apertura",
          items: [
            { es: "Bienvenidos, gracias por recibirme", pt: "Bem-vindos, obrigado por me receberem" },
            { es: "Vamos a comenzar con la reunión de apertura", pt: "Vamos começar com a reunião de abertura" },
            { es: "Permítanme presentarme", pt: "Permitam-me me apresentar" },
            { es: "¿Podrían firmar la hoja de asistencia?", pt: "Poderiam assinar a lista de presença?" },
            { es: "Este es el alcance de la auditoría de hoy", pt: "Este é o escopo da auditoria de hoje" }
          ]
        },
        {
          category: "Frases para Conducir la Auditoría",
          items: [
            { es: "¿Podría explicarme cómo funciona este proceso?", pt: "Poderia me explicar como funciona este processo?" },
            { es: "¿Tiene un procedimiento documentado?", pt: "Você tem um procedimento documentado?" },
            { es: "¿Dónde se almacenan los registros?", pt: "Onde os registros são armazenados?" },
            { es: "He identificado una no conformidad menor", pt: "Identifiquei uma não conformidade menor" },
            { es: "Quiero ser claro y respetuoso al comunicar los resultados", pt: "Quero ser claro e respeitoso ao comunicar os resultados" }
          ]
        },
        {
          category: "Frases de la Reunión de Cierre",
          items: [
            { es: "Con esto cerramos la auditoría de hoy", pt: "Com isso encerramos a auditoria de hoje" },
            { es: "Agradezco su tiempo y colaboración", pt: "Agradeço seu tempo e colaboração" },
            { es: "Quedamos atentos al informe de auditoría", pt: "Ficamos no aguardo do relatório de auditoria" }
          ]
        },
        {
          category: "Conectores Formales",
          items: [
            { es: "En primer lugar / por último", pt: "Em primeiro lugar / por último" },
            { es: "Además / asimismo", pt: "Além disso / da mesma forma" },
            { es: "Sin embargo", pt: "No entanto" },
            { es: "Por lo tanto", pt: "Portanto" },
            { es: "De acuerdo con", pt: "De acordo com" },
            { es: "Cabe mencionar que", pt: "Cabe mencionar que" },
            { es: "Es importante destacar que", pt: "É importante destacar que" }
          ]
        }
      ],
      exercises: [
        { type: "mc", q: "¿Qué frase se usa para iniciar la reunión de apertura?", options: ["Con esto cerramos la auditoría", "Vamos a comenzar con la reunión de apertura", "He identificado una no conformidad", "Quedo atento a sus comentarios"], correct: 1 },
        { type: "mc", q: "¿Cuál es una forma respetuosa de comunicar un problema encontrado?", options: ["Esto está totalmente mal", "He identificado una no conformidad menor", "Ustedes no cumplen nada", "Este proceso es un desastre"], correct: 1 },
        { type: "fill", q: "¿Podrían _______ la hoja de asistencia, por favor?", answer: "firmar" },
        { type: "fill", q: "Con esto _______ la auditoría de hoy.", answer: "cerramos" },
        { type: "translate", from: "pt", text: "Permitam-me me apresentar.", answer: "Permítanme presentarme." },
        { type: "translate", from: "es", text: "¿Tiene un procedimiento documentado?", answer: "Você tem um procedimento documentado?" },
        { type: "mc", q: "'Asimismo' es un conector que significa:", options: ["No entanto", "Além disso / da mesma forma", "Portanto", "Por último"], correct: 1 },
        { type: "mc", q: "¿Qué se dice al agradecer al final de la auditoría?", options: ["Agradezco su tiempo y colaboración", "Vamos a comenzar", "Permítanme presentarme", "¿Tiene un procedimiento?"], correct: 0 },
        { type: "speak", prompt: "Practica la frase de apertura de la reunión.", target: "Vamos a comenzar con la reunión de apertura." },
        { type: "speak", prompt: "Practica cómo comunicar una no conformidad con respeto.", target: "He identificado una no conformidad menor." },
        { type: "open", q: "Escribe dos frases que usarías para conducir una entrevista de auditoría con un colaborador del área de TI.", sample: "¿Podría explicarme cómo funciona el control de acceso? ¿Dónde se almacenan los registros de los backups?" },
        { type: "mc", q: "En la auditoría integrada del diálogo, ¿cuántas normas se auditan al mismo tiempo?", options: ["Dos", "Tres", "Cuatro", "Cinco"], correct: 2 },
        { type: "mc", q: "¿En qué área se identificó la no conformidad menor durante la auditoría?", options: ["Calidad", "Medio ambiente", "Seguridad laboral", "Seguridad de la información"], correct: 1 },
        { type: "open", q: "Redacta un breve resumen de cierre de auditoría (de 4 a 6 frases) mencionando al menos dos de las cuatro normas (ISO 9001, ISO 14001, ISO 45001, ISO/IEC 27001), un hallazgo encontrado y una acción correctiva propuesta. Vas a poder comparar tu texto con un modelo de referencia al terminar.", sample: "Durante la auditoría integrada se revisaron los sistemas de gestión de calidad (ISO 9001) y de seguridad de la información (ISO/IEC 27001). Se identificó una no conformidad menor relacionada con el control de acceso a los servidores. La organización propuso, como acción correctiva, implementar la autenticación de dos factores en un plazo de 30 días. Los procesos de calidad, en cambio, mostraron un alto nivel de madurez, sin hallazgos relevantes. Se recomienda mantener el mismo ritmo de mejora continua para la próxima auditoría de seguimiento." }
      ]
    },
    {
      id: "p3",
      order: 3,
      title: "El Informe y el Plan de Auditoría",
      subtitle: "Documentos reales de auditoría en español",
      text: "Los siguientes fragmentos están adaptados de correos y documentos reales de auditorías ISO 27001 realizadas en empresas de Argentina (PREVI SRL) y Perú (SUNARP). Observa el registro formal y las fórmulas recurrentes: 'Adjunto en el presente mensaje el informe de auditoría con los resultados presentados el día 18 de octubre.' — 'Por favor enviame el conforme sobre el informe y el formulario firmado con la aceptación de los hallazgos.' — 'Dentro de las 6 semanas debes enviarme completo el formulario con el análisis de causa y la planificación de las acciones.' — 'Dentro de los próximos 3 meses debes enviarme la evidencia de resolución (implementación) de la NC tipo A.' — 'Adjunto el plan de auditoría para este miércoles 18 de octubre. Cualquier duda estoy a disposición.' — 'Remito el Plan de Auditoría del SGSI con algunas modificaciones.' — 'Confirmo recepción del plan de auditoría. ¡Éxitos en el servicio!' — 'Se evidencia el documento aprobado por Resolución [...]' — 'El auditor tiene 5 días corridos para encerrar eventos con la documentación completa.' Un ejemplo de descripción de perfil organizacional, tal como aparece en un plan de auditoría real: 'La empresa actúa en el segmento de servicios de venta a través de campañas telefónicas. La organización opera en 1 turno. La infraestructura crítica se encuentra en la infraestructura local en las oficinas.'",
      textPt: "Os fragmentos a seguir são adaptados de e-mails e documentos reais de auditorias ISO 27001 realizadas em empresas da Argentina (PREVI SRL) e do Peru (SUNARP). Observe o registro formal e as fórmulas recorrentes: 'Anexo à presente mensagem o relatório de auditoria com os resultados apresentados no dia 18 de outubro.' — 'Por favor, me envie a confirmação sobre o relatório e o formulário assinado com a aceitação dos achados.' — 'Dentro de 6 semanas você deve me enviar completo o formulário com a análise de causa e o planejamento das ações.' — 'Dentro dos próximos 3 meses você deve me enviar a evidência de resolução (implementação) da NC tipo A.' — 'Anexo o plano de auditoria para esta quarta-feira, 18 de outubro. Qualquer dúvida estou à disposição.' — 'Envio o Plano de Auditoria do SGSI com algumas modificações.' — 'Confirmo o recebimento do plano de auditoria. Sucesso no atendimento!' — 'Evidencia-se o documento aprovado pela Resolução [...]' — 'O auditor tem 5 dias corridos para encerrar eventos com a documentação completa.' Um exemplo de descrição de perfil organizacional, tal como aparece em um plano de auditoria real: 'A empresa atua no segmento de serviços de venda por meio de campanhas telefônicas. A organização opera em 1 turno. A infraestrutura crítica está na infraestrutura local nos escritórios.'",
      vocabulary: [
        {
          category: "Documentación de Auditoría",
          items: [
            { es: "plan de auditoría", pt: "plano de auditoria — enviado 15-30 dias antes, com data, horário, escopo e auditores" },
            { es: "informe de auditoría", pt: "relatório de auditoria — entregue em até 2 dias úteis após o encerramento" },
            { es: "gestión de las no conformidades", pt: "gestão das não conformidades — documento de plano de ação" },
            { es: "comentarios (CM)", pt: "comentários — 'risco de não conformidade' a verificar na próxima auditoria" },
            { es: "oportunidad de mejora (OM/OI/PI)", pt: "oportunidade de melhoria" },
            { es: "aspectos positivos / buenas prácticas", pt: "aspectos positivos / boas práticas" },
            { es: "auditor líder", pt: "auditor-líder" },
            { es: "equipo auditor", pt: "equipe auditora" },
            { es: "acción correctiva", pt: "ação corretiva" },
            { es: "evidencia", pt: "evidência" },
            { es: "plan de acción con reauditoría on-site", pt: "plano de ação com reauditoria presencial" },
            { es: "certificación / extensión / recertificación", pt: "certificação / extensão / recertificação" },
            { es: "suspensión / restauración / recusar-cancelar", pt: "suspensão / restauração / recusa-cancelamento" },
            { es: "perfil de auditoría / programa de auditoría", pt: "perfil / programa de auditoria" },
            { es: "monitoreo / extensión / recertificación", pt: "monitoramento / extensão / recertificação (tipos de auditoria)" },
            { es: "declaración jurada / acuerdo de confidencialidad", pt: "declaração juramentada / termo de confidencialidade" }
          ]
        }
      ],
      exercises: [
        { type: "mc", q: "¿En cuánto tiempo se entrega el informe de auditoría, según la práctica descrita?", options: ["En 2 días útiles", "En 6 semanas", "En 3 meses", "En 5 días corridos"], correct: 0 },
        { type: "mc", q: "¿Qué documento se envía 15-30 días antes de la auditoría?", options: ["El informe de auditoría", "El plan de auditoría", "La declaración jurada", "El acuerdo de confidencialidad"], correct: 1 },
        { type: "fill", q: "Adjunto en el presente mensaje el _______ de auditoría con los resultados presentados el día 18 de octubre.", answer: "informe" },
        { type: "fill", q: "Dentro de los próximos 3 meses debes enviarme la _______ de resolución de la NC tipo A.", answer: "evidencia" },
        { type: "translate", from: "pt", text: "gestão das não conformidades", answer: "gestión de las no conformidades" },
        { type: "translate", from: "es", text: "Remito el Plan de Auditoría del SGSI con algunas modificaciones.", answer: "Envio o Plano de Auditoria do SGSI com algumas modificações." },
        { type: "mc", q: "¿Qué significa 'comentarios (CM)' en el informe?", options: ["Ação corretiva já implementada", "Risco de não conformidade a verificar na próxima auditoria", "Boas práticas identificadas", "Escopo da certificação"], correct: 1 },
        { type: "fill", q: "El auditor tiene 5 días _______ para encerrar eventos con la documentación completa.", answer: "corridos" },
        { type: "mc", q: "¿Cuántos días tiene el auditor para cerrar eventos con documentación completa?", options: ["2 días útiles", "15 días", "5 días corridos", "30 días"], correct: 2 },
        { type: "translate", from: "pt", text: "Confirmo o recebimento do plano de auditoria.", answer: "Confirmo recepción del plan de auditoría." },
        { type: "mc", q: "'Se evidencia el documento aprobado por Resolución...' es una fórmula usada para:", options: ["Cerrar la reunión", "Citar evidencias documentales", "Pedir una nueva reunión", "Cancelar la certificación"], correct: 1 },
        { type: "open", q: "Redacta una frase breve, en el estilo de los correos de auditoría, informando que envías el informe con los resultados.", sample: "Adjunto en el presente mensaje el informe de auditoría con los resultados presentados el día de hoy." }
      ]
    },
    {
      id: "p4",
      order: 4,
      title: "Correos y Llamadas de Negocios",
      subtitle: "Comunicación formal en español",
      vocabulary: [
        {
          category: "Fórmulas de Correo Formal",
          items: [
            { es: "Estimado Sr. [Apellido]:", pt: "Prezado Sr. [Sobrenome]:" },
            { es: "Por medio de la presente, quisiera solicitar información sobre…", pt: "Por meio desta, gostaria de solicitar informações sobre…" },
            { es: "Adjunto encontrará el documento solicitado.", pt: "Em anexo, segue o documento solicitado." },
            { es: "Quedo atento a sus comentarios.", pt: "Fico no aguardo de seus comentários." },
            { es: "Atentamente / Cordialmente,", pt: "Atenciosamente / Cordialmente," }
          ]
        },
        {
          category: "Frases para Telefonemas",
          items: [
            { es: "Buenos días, le habla [su nombre] de la empresa [nombre de la empresa].", pt: "Bom dia, fala [seu nome] da empresa [nome da empresa]." },
            { es: "¿Podría hablar con [nombre de la persona], por favor?", pt: "Poderia falar com [nome da pessoa], por favor?" },
            { es: "Le agradecería si pudiera dejarle el mensaje de que lo llamaré más tarde.", pt: "Agradeceria se pudesse avisá-lo que ligarei mais tarde." },
            { es: "Lamento la molestia, pero quisiera confirmar la hora de nuestra reunión.", pt: "Desculpe o incômodo, mas gostaria de confirmar o horário da nossa reunião." }
          ]
        },
        {
          category: "Fórmulas por Situação",
          items: [
            { es: "Cumprimento inicial (teléfono): Buenos días, habla…", pt: "Cumprimento inicial (telefone)" },
            { es: "Cumprimento inicial (email): Estimado Sr./Sra…", pt: "Cumprimento inicial (e-mail)" },
            { es: "Fazer um pedido (teléfono): ¿Podría… por favor?", pt: "Fazer um pedido (telefone)" },
            { es: "Fazer um pedido (email): Quisiera solicitar…", pt: "Fazer um pedido (e-mail)" },
            { es: "Pedir confirmação (teléfono): Quisiera confirmar…", pt: "Pedir confirmação (telefone)" },
            { es: "Pedir confirmação (email): Agradecería su confirmación sobre…", pt: "Pedir confirmação (e-mail)" },
            { es: "Encerrar com cortesia (teléfono): Gracias por su atención. Que tenga buen día.", pt: "Encerrar com cortesia (telefone)" },
            { es: "Encerrar com cortesia (email): Quedo atento a sus comentarios. Atentamente.", pt: "Encerrar com cortesia (e-mail)" }
          ]
        }
      ],
      text: "Ejemplo real de correo de solicitud formal: 'Estimado Sr. González: Por medio de la presente, quisiera solicitar una copia del informe financiero del mes de mayo. Adjunto encontrará los datos necesarios para la referencia. Quedo atento a sus comentarios. Atentamente, Carlos Martínez, Departamento de Finanzas.' Ejemplo real de telefonema para confirmar una reunión: 'Buenos días, habla Laura Pérez de la empresa TECNO. ¿Podría hablar con el Sr. Ramírez? Quisiera confirmar la reunión programada para mañana a las 10:00. Gracias por su tiempo.'",
      textPt: "Exemplo real de e-mail de solicitação formal: 'Prezado Sr. González: Por meio desta, gostaria de solicitar uma cópia do relatório financeiro do mês de maio. Em anexo você encontrará os dados necessários para referência. Fico no aguardo de seus comentários. Atenciosamente, Carlos Martínez, Departamento Financeiro.' Exemplo real de ligação para confirmar uma reunião: 'Bom dia, aqui é a Laura Pérez da empresa TECNO. Poderia falar com o Sr. Ramírez? Gostaria de confirmar a reunião marcada para amanhã às 10h. Obrigada pela atenção.'",
      exercises: [
        { type: "mc", q: "¿Cómo se inicia un correo formal en español de negocios?", options: ["Hola, ¿qué tal?", "Estimado Sr. [Apellido]:", "Che, ¿cómo andás?", "Buenas, todo bien"], correct: 1 },
        { type: "mc", q: "¿Qué frase se usa para pedir algo por teléfono con cortesía?", options: ["Dame el informe ya", "¿Podría… por favor?", "Necesito eso ahora", "Envíame ya mismo"], correct: 1 },
        { type: "fill", q: "Por medio de la presente, quisiera _______ información sobre el informe financiero.", answer: "solicitar" },
        { type: "fill", q: "Adjunto _______ el documento solicitado.", answer: "encontrará", altAnswers: ["encontrara"] },
        { type: "translate", from: "pt", text: "Fico no aguardo de seus comentários.", answer: "Quedo atento a sus comentarios." },
        { type: "translate", from: "es", text: "Buenos días, le habla Laura Pérez de la empresa TECNO.", answer: "Bom dia, fala Laura Pérez da empresa TECNO." },
        { type: "mc", q: "¿Cuál es la forma correcta de cerrar un correo formal?", options: ["Chau, nos vemos", "Atentamente / Cordialmente,", "Bye bye", "Un abrazo grande"], correct: 1 },
        { type: "fill", q: "_______ atento a sus comentarios. Atentamente.", answer: "Quedo" },
        { type: "translate", from: "pt", text: "Poderia falar com o Sr. Ramírez, por favor?", answer: "¿Podría hablar con el Sr. Ramírez, por favor?" },
        { type: "open", q: "Escribe un correo formal breve solicitando una copia de un informe de auditoría al departamento de TI.", sample: "Estimado Sr. Ramírez: Por medio de la presente, quisiera solicitar una copia del informe de auditoría de TI del mes pasado. Quedo atento a sus comentarios. Atentamente, Anderson Santana." },
        { type: "mc", q: "En la tabla de fórmulas, ¿cuál es la versión telefónica de 'Quisiera solicitar…'?", options: ["Buenos días, habla…", "¿Podría… por favor?", "Gracias por su atención", "Agradecería su confirmación"], correct: 1 },
        { type: "speak", prompt: "Practica cómo confirmar una reunión por teléfono.", target: "Quisiera confirmar la reunión programada para mañana a las 10:00." }
      ]
    },
    {
      id: "p5",
      order: 5,
      title: "El Certificado ISO/IEC 27001: Alcance y Ciclo de Certificación",
      subtitle: "Cómo leer un certificado real",
      vocabulary: [
        {
          category: "Datos del Certificado",
          items: [
            { es: "certifica que el sistema de gestión de la organización...", pt: "certifica que o sistema de gestão da organização..." },
            { es: "ha sido auditado y aprobado con respecto a los requisitos", pt: "foi auditado e aprovado em relação aos requisitos" },
            { es: "este certificado es aplicable al siguiente alcance", pt: "este certificado é aplicável ao seguinte escopo" },
            { es: "sede principal / sitio permanente adicional", pt: "sede principal / site permanente adicional" },
            { es: "versión de la declaración de aplicabilidad", pt: "versão da declaração de aplicabilidade" },
            { es: "fecha de otorgamiento", pt: "data de outorga (emissão)" },
            { es: "fecha de inicio del ciclo actual de certificación", pt: "data de início do ciclo atual de certificação" },
            { es: "fecha de vencimiento del ciclo actual", pt: "data de vencimento do ciclo atual" },
            { es: "ciclo de certificación (habitualmente 3 años)", pt: "ciclo de certificação (normalmente 3 anos)" },
            { es: "auditoría de recertificación", pt: "auditoria de recertificação" },
            { es: "organismo de certificación", pt: "organismo de certificação" },
            { es: "número de registro / número de certificado", pt: "número de registro / número do certificado" },
            { es: "esta aprobación está sujeta a que el sistema se mantenga", pt: "esta aprovação está sujeita à manutenção do sistema" },
            { es: "ha implementado y mantiene un SGSI", pt: "implementou e mantém um SGSI" },
            { es: "lo cual será verificado por el organismo de certificación", pt: "o que será verificado pelo organismo de certificação" }
          ]
        }
      ],
      text: "Un certificado ISO/IEC 27001 real, emitido a una empresa aeroportuaria (LIMA AIRPORT PARTNERS S.R.L.) en Perú, dice así: 'Certifica que el Sistema de Gestión de la organización ha sido auditado y aprobado con respecto a los requisitos especificados en ISO/IEC 27001:2022. Este certificado es aplicable al siguiente alcance: seguridad de la información de los sistemas que apoyan la planificación y gestión de vuelos, según la Declaración de Aplicabilidad versión 01.' Observa los datos que siempre aparecen en un certificado real: el alcance exacto (nunca dice solo 'toda la empresa', sino los sistemas específicos cubiertos), la fecha de otorgamiento y la fecha de vencimiento del ciclo actual (normalmente 3 años, con auditorías de seguimiento en el medio), y la advertencia final: 'Esta aprobación está sujeta a que el sistema de gestión se mantenga de acuerdo con los requisitos especificados, lo cual será verificado por el organismo de certificación.' Es común que la organización reciba, además, un segundo certificado equivalente emitido por una red internacional de organismos (como IQNET), confirmando en inglés que la empresa 'has implemented and maintains an Information Security Management System' para el mismo alcance.",
      textPt: "Um certificado ISO/IEC 27001 real, emitido a uma empresa aeroportuária (LIMA AIRPORT PARTNERS S.R.L.) no Peru, diz assim: 'Certifica que o Sistema de Gestão da organização foi auditado e aprovado em relação aos requisitos especificados na ISO/IEC 27001:2022. Este certificado é aplicável ao seguinte escopo: segurança da informação dos sistemas que apoiam o planejamento e a gestão de voos, conforme a Declaração de Aplicabilidade versão 01.' Observe os dados que sempre aparecem em um certificado real: o escopo exato (nunca diz apenas 'toda a empresa', mas sim os sistemas específicos cobertos), a data de outorga e a data de vencimento do ciclo atual (normalmente 3 anos, com auditorias de acompanhamento no meio do caminho), e o aviso final: 'Esta aprovação está sujeita à manutenção do sistema de gestão de acordo com os requisitos especificados, o que será verificado pelo organismo de certificação.' É comum que a organização receba, além disso, um segundo certificado equivalente emitido por uma rede internacional de organismos (como a IQNET), confirmando em inglês que a empresa 'implementou e mantém um Sistema de Gestão de Segurança da Informação' para o mesmo escopo.",
      exercises: [
        { type: "mc", q: "¿Qué indica siempre el 'alcance' de un certificado ISO 27001?", options: ["Que toda la empresa está certificada sin excepción", "Los sistemas o procesos específicos cubiertos por la certificación", "El nombre del auditor líder", "El precio de la auditoría"], correct: 1 },
        { type: "mc", q: "¿Cuánto dura, habitualmente, un ciclo de certificación ISO 27001?", options: ["1 año", "3 años", "10 años", "6 meses"], correct: 1 },
        { type: "fill", q: "La empresa recibió el certificado en la fecha de _______ y debe renovarlo antes de la fecha de vencimiento del ciclo.", answer: "otorgamiento" },
        { type: "fill", q: "El certificado es aplicable al siguiente _______: seguridad de la información de los sistemas críticos.", answer: "alcance" },
        { type: "translate", from: "pt", text: "data de vencimento do ciclo atual", answer: "fecha de vencimiento del ciclo actual" },
        { type: "translate", from: "es", text: "Esta aprobación está sujeta a que el sistema de gestión se mantenga de acuerdo con los requisitos especificados.", answer: "Esta aprovação está sujeita à manutenção do sistema de gestão de acordo com os requisitos especificados." },
        { type: "mc", q: "¿Qué evalúa la 'auditoría de recertificación'?", options: ["Si la empresa cambió de nombre", "Si el sistema de gestión sigue cumpliendo los requisitos al final del ciclo", "El precio de la próxima auditoría", "El número de empleados"], correct: 1 },
        { type: "mc", q: "Un 'sitio permanente adicional' en un certificado multisitio se refiere a:", options: ["Una sucursal o sede extra cubierta por el mismo certificado", "Un error de impresión", "El nombre del organismo certificador", "Una auditoría cancelada"], correct: 0 },
        { type: "fill", q: "La declaración de _______ (SoA) indica qué controles del Anexo A se aplican y cuáles no.", answer: "aplicabilidad" },
        { type: "open", q: "Redacta dos frases, en el estilo formal de un certificado, indicando el alcance y la fecha de vencimiento de una certificación ISO 27001 ficticia.", sample: "Este certificado es aplicable al siguiente alcance: seguridad de la información de los sistemas de facturación electrónica. Fecha de vencimiento del ciclo actual: 2028-06-30." },
        { type: "speak", prompt: "Practica cómo se lee en voz alta la validez de un certificado.", target: "Esta aprobación está sujeta a que el sistema de gestión se mantenga de acuerdo con los requisitos especificados." },
        { type: "mc", q: "¿Qué organismo, además del certificador principal, suele emitir un certificado equivalente reconocido internacionalmente?", options: ["IQNET", "La OMS", "El Banco Mundial", "La ONU"], correct: 0 }
      ]
    },
    {
      id: "p6",
      order: 6,
      title: "El Informe de Auditoría: Hallazgos y Recomendación Final",
      subtitle: "Cómo se comunica el resultado de una auditoría de certificación",
      vocabulary: [
        {
          category: "Tipos y Etapas de Auditoría",
          items: [
            { es: "auditoría de otorgamiento", pt: "auditoria de outorga (certificação inicial)" },
            { es: "auditoría de seguimiento", pt: "auditoria de acompanhamento" },
            { es: "auditoría de renovación", pt: "auditoria de renovação (recertificação)" },
            { es: "auditoría extraordinaria / de reactivación", pt: "auditoria extraordinária / de reativação" },
            { es: "etapa 1 de la auditoría (revisión documental)", pt: "etapa 1 da auditoria (revisão documental)" },
            { es: "etapa 2 / auditoría en sitio", pt: "etapa 2 / auditoria in loco" },
            { es: "código IAF", pt: "código IAF (classificação setorial internacional)" },
            { es: "auditor líder / equipo auditor", pt: "auditor-líder / equipe auditora" },
            { es: "organización multisitio", pt: "organização multissite" }
          ]
        },
        {
          category: "Hallazgos y Recomendación",
          items: [
            { es: "hallazgos que apoyan la conformidad", pt: "achados que sustentam a conformidade" },
            { es: "oportunidades de mejora", pt: "oportunidades de melhoria" },
            { es: "recomendación del equipo auditor", pt: "recomendação da equipe auditora" },
            { es: "se recomienda otorgar la certificación", pt: "recomenda-se conceder a certificação" },
            { es: "requisitos no aplicables (justificados)", pt: "requisitos não aplicáveis (justificados)" },
            { es: "revisión del sistema por la dirección", pt: "análise crítica do sistema pela direção" },
            { es: "programa de auditoría interna", pt: "programa de auditoria interna" },
            { es: "toma de muestra de evidencias", pt: "amostragem de evidências" }
          ]
        }
      ],
      text: "Un informe de auditoría real de certificación ISO/IEC 27001 sigue siempre la misma estructura formal. Primero, describe el tipo de auditoría (por ejemplo, 'Tipo de auditoría: Otorgamiento') y si la organización es multisitio. Luego enumera los 'Hallazgos que apoyan la conformidad del sistema de gestión con los requisitos' — por ejemplo: 'La participación y compromiso de la alta dirección en la implementación del sistema de gestión de seguridad de la información asegura la toma de decisiones dirigidas al mejoramiento continuo.' A continuación, presenta las 'Oportunidades de mejora', como: 'Realizar campañas de capacitación y toma de conciencia segmentadas a cada grupo o rol del sistema de gestión de seguridad de información' o 'Revisar y mejorar la redacción de los riesgos, ya que una redacción precisa permite que todas las partes interesadas comprendan el riesgo sin ambigüedades.' El informe también responde preguntas cerradas del organismo certificador, como '¿Existen requisitos legales para el funcionamiento de la organización?' o '¿Se evidencian cambios significativos en la organización desde la anterior auditoría?'. Finalmente, cierra con la recomendación del equipo auditor: 'Se recomienda Otorgar la Certificación ISO/IEC 27001:2022', firmada por el auditor líder con la fecha correspondiente.",
      textPt: "Um relatório de auditoria real de certificação ISO/IEC 27001 segue sempre a mesma estrutura formal. Primeiro, descreve o tipo de auditoria (por exemplo, 'Tipo de auditoria: Outorga') e se a organização é multissite. Em seguida, enumera os 'Achados que sustentam a conformidade do sistema de gestão com os requisitos' — por exemplo: 'A participação e o comprometimento da alta direção na implementação do sistema de gestão de segurança da informação asseguram a tomada de decisões voltadas à melhoria contínua.' Na sequência, apresenta as 'Oportunidades de melhoria', como: 'Realizar campanhas de capacitação e conscientização segmentadas para cada grupo ou papel do sistema de gestão de segurança da informação' ou 'Revisar e melhorar a redação dos riscos, já que uma redação precisa permite que todas as partes interessadas compreendam o risco sem ambiguidades.' O relatório também responde a perguntas fechadas do organismo certificador, como '¿Existem requisitos legais para o funcionamento da organização?' ou '¿Evidenciam-se mudanças significativas na organização desde a auditoria anterior?'. Por fim, encerra com a recomendação da equipe auditora: 'Recomenda-se Conceder a Certificação ISO/IEC 27001:2022', assinada pelo auditor-líder com a data correspondente.",
      exercises: [
        { type: "mc", q: "¿Qué sección de un informe de auditoría describe los aspectos positivos observados?", options: ["Hallazgos que apoyan la conformidad", "Plan de auditoría", "Declaración jurada", "Alcance de la certificación"], correct: 0 },
        { type: "mc", q: "¿En qué etapa de la auditoría se revisa la documentación antes de la visita presencial?", options: ["Etapa 2", "Etapa 1", "Auditoría de seguimiento", "Auditoría extraordinaria"], correct: 1 },
        { type: "fill", q: "El equipo auditor concluye el informe con la _______ de otorgar la certificación.", answer: "recomendación" },
        { type: "fill", q: "Las 'oportunidades de _______' son sugerencias de mejora que no constituyen una no conformidad.", answer: "mejora" },
        { type: "translate", from: "pt", text: "achados que sustentam a conformidade", answer: "hallazgos que apoyan la conformidad" },
        { type: "translate", from: "es", text: "Se recomienda otorgar la certificación ISO/IEC 27001:2022.", answer: "Recomenda-se conceder a certificação ISO/IEC 27001:2022." },
        { type: "mc", q: "¿Qué tipo de auditoría se realiza cuando el ciclo de 3 años está por vencer?", options: ["Auditoría de otorgamiento", "Auditoría de renovación", "Auditoría extraordinaria", "Etapa 1"], correct: 1 },
        { type: "mc", q: "¿Qué son los 'requisitos no aplicables' en una auditoría?", options: ["Errores del auditor", "Controles del Anexo A que la organización justifica no aplicar (ej. no desarrolla software)", "No conformidades graves", "Cláusulas ilegales"], correct: 1 },
        { type: "open", q: "Escribe una oportunidad de mejora (no una no conformidad) para una empresa que capacita a su personal solo una vez al año.", sample: "Se recomienda ampliar la frecuencia de las campañas de capacitación y toma de conciencia sobre seguridad de la información, segmentándolas por rol, para fortalecer la cultura organizacional de seguridad." },
        { type: "fill", q: "El _______ auditor firma la recomendación final del informe.", answer: "líder" },
        { type: "speak", prompt: "Practica la frase de cierre de un informe de auditoría de otorgamiento.", target: "Se recomienda otorgar la certificación ISO/IEC 27001:2022." },
        { type: "mc", q: "¿Quién revisa el sistema de gestión de seguridad de la información al menos una vez al año, según exige la norma?", options: ["Un cliente externo", "La alta dirección", "El auditor externo", "Un proveedor"], correct: 1 }
      ]
    },
    {
      id: "p7",
      order: 7,
      title: "No Conformidad Real: Descripción, Evidencia y Acción Correctiva",
      subtitle: "El formato real de una Solicitud de Acción Correctiva (SAC)",
      vocabulary: [
        {
          category: "Estructura de una Solicitud de Acción Correctiva (SAC)",
          items: [
            { es: "solicitud de acción correctiva (SAC)", pt: "solicitação de ação corretiva (SAC)" },
            { es: "descripción de la no conformidad", pt: "descrição da não conformidade" },
            { es: "evidencia objetiva del incumplimiento", pt: "evidência objetiva do descumprimento" },
            { es: "corrección (acción inmediata)", pt: "correção (ação imediata)" },
            { es: "descripción de la(s) causa(s)", pt: "descrição da(s) causa(s)" },
            { es: "evidencia de implementación", pt: "evidência de implementação" },
            { es: "requisito incumplido (norma y numeral)", pt: "requisito descumprido (norma e item)" },
            { es: "verificar la eficacia de la acción correctiva", pt: "verificar a eficácia da ação corretiva" },
            { es: "plazo de cierre", pt: "prazo de encerramento" }
          ]
        }
      ],
      text: "Cada no conformidad detectada en una auditoría real se documenta en una Solicitud de Acción Correctiva (SAC) con un formato fijo. Primero, la 'Descripción de la no conformidad', redactada de forma objetiva: 'No se gestiona el acceso a sitios web externos para reducir la exposición a contenido malicioso.' Luego, la 'Evidencia': 'En el equipo de un colaborador de Operaciones se pudo acceder a sitios considerados fuentes de contenido malicioso.' Después viene la 'Corrección', la acción inmediata para eliminar el efecto (por ejemplo, 'Bloqueo inmediato de los sitios maliciosos identificados'), diferente de la 'Acción correctiva', que elimina la causa raíz para que no vuelva a ocurrir (por ejemplo, 'Actualizar periódicamente las listas negras y ajustar los parámetros de filtrado web'). La 'Descripción de la(s) causa(s)' se redacta normalmente con la técnica de los 5 porqués: '¿Por qué se pudo acceder a sitios maliciosos a pesar del filtro web? Porque el filtro no estaba configurado correctamente. ¿Por qué no estaba configurado correctamente? Porque no se realizó una revisión periódica de las listas bloqueadas.' Finalmente, cada acción tiene una fecha comprometida y una 'Evidencia de Implementación' (captura de pantalla, informe, correo de difusión), y el ciclo cierra solo cuando el auditor 'verifica la eficacia de la acción correctiva' en la siguiente visita.",
      textPt: "Cada não conformidade detectada em uma auditoria real é documentada em uma Solicitação de Ação Corretiva (SAC) com um formato fixo. Primeiro, a 'Descrição da não conformidade', redigida de forma objetiva: 'Não se gerencia o acesso a sites externos para reduzir a exposição a conteúdo malicioso.' Depois, a 'Evidência': 'No equipamento de um colaborador de Operações foi possível acessar sites considerados fontes de conteúdo malicioso.' Em seguida vem a 'Correção', a ação imediata para eliminar o efeito (por exemplo, 'Bloqueio imediato dos sites maliciosos identificados'), diferente da 'Ação corretiva', que elimina a causa raiz para que não volte a ocorrer (por exemplo, 'Atualizar periodicamente as listas negras e ajustar os parâmetros de filtragem web'). A 'Descrição da(s) causa(s)' é redigida normalmente com a técnica dos 5 porquês: '¿Por que foi possível acessar sites maliciosos apesar do filtro web? Porque o filtro não estava configurado corretamente. ¿Por que não estava configurado corretamente? Porque não se realizava uma revisão periódica das listas bloqueadas.' Por fim, cada ação tem uma data comprometida e uma 'Evidência de Implementação' (captura de tela, relatório, e-mail de divulgação), e o ciclo só se encerra quando o auditor 'verifica a eficácia da ação corretiva' na visita seguinte.",
      exercises: [
        { type: "mc", q: "¿Cuál es la diferencia entre 'corrección' y 'acción correctiva'?", options: ["Son sinónimos exactos", "La corrección elimina el efecto inmediato; la acción correctiva elimina la causa raíz", "La corrección es solo para no conformidades mayores", "La acción correctiva es opcional"], correct: 1 },
        { type: "mc", q: "¿Qué sección de la SAC explica por qué ocurrió el problema?", options: ["Descripción de la no conformidad", "Descripción de la(s) causa(s)", "Alcance del certificado", "Recomendación final"], correct: 1 },
        { type: "fill", q: "El auditor debe _______ la eficacia de la acción correctiva en la siguiente visita.", answer: "verificar" },
        { type: "fill", q: "La _______ es la acción inmediata para eliminar el efecto de la no conformidad detectada.", answer: "corrección" },
        { type: "translate", from: "pt", text: "evidência objetiva do descumprimento", answer: "evidencia objetiva del incumplimiento" },
        { type: "translate", from: "es", text: "Bloqueo inmediato de los sitios maliciosos identificados.", answer: "Bloqueio imediato dos sites maliciosos identificados." },
        { type: "mc", q: "Según el caso real de la lección, ¿por qué el filtro web no bloqueaba los sitios maliciosos?", options: ["No existía ningún filtro instalado", "El filtro no estaba configurado adecuadamente ni se revisaba periódicamente", "Los usuarios tenían permiso oficial", "Era un problema del proveedor de internet"], correct: 1 },
        { type: "fill", q: "Cada acción correctiva debe tener una fecha y una _______ de implementación.", answer: "evidencia" },
        { type: "open", q: "Redacta una 'Descripción de la no conformidad' y una 'Corrección' para el caso de un servidor de microservicios sin protección antimalware.", sample: "Descripción de la no conformidad: No se implementa protección contra malware en servidores de microservicios. Corrección: Validar la factibilidad de instalar una solución antimalware y aplicar la protección de inmediato en los servidores afectados." },
        { type: "mc", q: "¿Cuántas veces, como mínimo, se suele preguntar '¿por qué?' en la técnica de análisis de causa raíz?", options: ["Una vez", "Cinco veces (5 porqués)", "Diez veces", "No tiene límite definido"], correct: 1 },
        { type: "speak", prompt: "Practica cómo redactar una no conformidad con precisión.", target: "No se gestiona el acceso a sitios web externos para reducir la exposición a contenido malicioso." },
        { type: "mc", q: "¿Qué evidencia sería adecuada para cerrar una acción correctiva de bloqueo de sitios maliciosos?", options: ["Una opinión verbal del gerente", "Una captura de pantalla que confirme el bloqueo de los sitios", "Ninguna evidencia es necesaria", "Un rumor del área de TI"], correct: 1 }
      ]
    },
    {
      id: "p8",
      order: 8,
      title: "Análisis de Causas: los 5 Porqués y el Diagrama de Ishikawa",
      subtitle: "La historia del leñador y las herramientas reales para encontrar la causa raíz",
      vocabulary: [
        {
          category: "Herramientas de Análisis de Causas",
          items: [
            { es: "leñador", pt: "lenhador" },
            { es: "afilar el hacha", pt: "afiar o machado" },
            { es: "rendimiento / desempeño", pt: "rendimento / desempenho" },
            { es: "trabajo rutinario", pt: "trabalho rotineiro" },
            { es: "tormenta de ideas (lluvia de ideas)", pt: "tempestade de ideias (brainstorm)" },
            { es: "diagrama de Ishikawa (espina de pescado)", pt: "diagrama de Ishikawa (espinha de peixe)" },
            { es: "categorías de causas: materiales, métodos, máquinas, personal, medio", pt: "categorias de causas: materiais, métodos, máquinas, pessoal, meio" },
            { es: "técnica de los 5 porqués", pt: "técnica dos 5 porquês" },
            { es: "diagrama de Pareto", pt: "diagrama de Pareto" },
            { es: "principio de Pareto (80/20)", pt: "princípio de Pareto (80/20)" },
            { es: "plan de acción (método 5W+1H)", pt: "plano de ação (método 5W+1H)" },
            { es: "causa básica o raíz", pt: "causa básica ou raiz" }
          ]
        }
      ],
      text: "Un hombre robusto y entusiasta pide trabajo como leñador en un gran bosque y, después de una entrevista con el supervisor, consigue el empleo. El primer día, con mucho entusiasmo, derriba 15 árboles. Al segundo día, no satisfecho, decide trabajar con más ganas y solo logra 12. Al tercer día se levanta más temprano, dispuesto a superar su marca, pero apenas hacha 8 árboles. Al cuarto día madruga junto al sol, no para, trabaja más horas, y solo puede con 6. Exhausto y desilusionado, ve llegar al supervisor y le cuenta su experiencia. El veterano jefe le pregunta: '¿En estos días, cuánto tiempo has dedicado a afilar tu hacha?' Esta historia resume la esencia del análisis de causas: no basta con trabajar más duro si no nos detenemos a preguntarnos qué está fallando en la raíz del problema. Las herramientas más usadas para ese análisis son la técnica de los 5 porqués (preguntar '¿por qué?' repetidamente hasta llegar a la causa raíz, no solo al síntoma) y el diagrama de Ishikawa o espina de pescado, creado por Kaoru Ishikawa en 1953: se identifica la no conformidad, se hace una tormenta de ideas sobre las causas posibles, se agrupan en categorías (materiales, métodos, máquinas, personal, medio interno/externo) y se valida cuáles son las causas más probables. El diagrama de Pareto, por su parte, ordena las causas de mayor a menor frecuencia o costo para aplicar el principio de Pareto: 'si se eliminan las causas que provocan la mayoría de los problemas, desaparecerá la mayor parte de los defectos.'",
      textPt: "Um homem robusto e entusiasmado pede emprego como lenhador em uma grande floresta e, depois de uma entrevista com o supervisor, consegue o emprego. No primeiro dia, com muito entusiasmo, derruba 15 árvores. No segundo dia, insatisfeito, decide trabalhar com mais empenho e só consegue 12. No terceiro dia se levanta mais cedo, disposto a superar sua marca, mas mal consegue derrubar 8. No quarto dia madruga junto com o sol, não para, trabalha mais horas, e só consegue 6. Exausto e desiludido, vê chegar o supervisor e conta sua experiência. O veterano chefe lhe pergunta: 'Nestes dias, quanto tempo você dedicou a afiar seu machado?' Essa história resume a essência da análise de causas: não basta trabalhar mais duro se não pararmos para nos perguntar o que está falhando na raiz do problema. As ferramentas mais usadas para essa análise são a técnica dos 5 porquês (perguntar 'por quê?' repetidamente até chegar à causa raiz, não apenas ao sintoma) e o diagrama de Ishikawa ou espinha de peixe, criado por Kaoru Ishikawa em 1953: identifica-se a não conformidade, faz-se uma tempestade de ideias sobre as causas possíveis, agrupam-se em categorias (materiais, métodos, máquinas, pessoal, meio interno/externo) e valida-se quais são as causas mais prováveis. O diagrama de Pareto, por sua vez, ordena as causas da maior para a menor frequência ou custo para aplicar o princípio de Pareto: 'se as causas que provocam a maioria dos problemas forem eliminadas, desaparecerá a maior parte dos defeitos.'",
      exercises: [
        { type: "mc", q: "¿Qué le pregunta el supervisor al leñador al final de la historia?", options: ["¿Cuántos árboles derribaste hoy?", "¿Cuánto tiempo has dedicado a afilar tu hacha?", "¿Por qué llegas tarde?", "¿Quieres renunciar al trabajo?"], correct: 1 },
        { type: "mc", q: "¿Qué representa 'afilar el hacha' en la historia?", options: ["Descansar sin trabajar", "Detenerse a mejorar el método, no solo trabajar más duro", "Comprar una herramienta nueva", "Pedir ayuda a otro leñador"], correct: 1 },
        { type: "fill", q: "La técnica de los 5 _______ ayuda a llegar a la causa raíz de un problema, no solo al síntoma.", answer: "porqués" },
        { type: "fill", q: "El diagrama de _______, también llamado espina de pescado, fue creado por Kaoru Ishikawa en 1953.", answer: "Ishikawa" },
        { type: "translate", from: "pt", text: "tempestade de ideias", answer: "tormenta de ideas" },
        { type: "translate", from: "es", text: "¿Qué he hecho hoy para mejorar mi trabajo?", answer: "O que eu fiz hoje para melhorar meu trabalho?" },
        { type: "mc", q: "¿Cuáles son las categorías clásicas del diagrama de Ishikawa?", options: ["Precio, calidad, tiempo, lugar", "Materiales, métodos, máquinas, personal, medio", "Ventas, marketing, finanzas, logística", "Entrada, proceso, salida, control"], correct: 1 },
        { type: "mc", q: "Según el principio de Pareto aplicado al análisis de causas, ¿qué conviene hacer primero?", options: ["Atacar todas las causas por igual", "Atacar primero las causas que representan la mayor parte de los problemas (regla del 80/20)", "Ignorar las causas y solo corregir efectos", "Esperar a que el problema se resuelva solo"], correct: 1 },
        { type: "open", q: "Aplica la técnica de los 5 porqués a este problema: 'Un servidor quedó sin protección antivirus.' Escribe al menos 2 preguntas y respuestas encadenadas.", sample: "¿Por qué el servidor quedó sin antivirus? Porque no fue incluido en el alcance del monitoreo. ¿Por qué no fue incluido? Porque la matriz de activos no contemplaba ese tipo de servidor." },
        { type: "fill", q: "El diagrama de _______ ordena las causas de mayor a menor frecuencia, en forma de barras descendentes.", answer: "Pareto" },
        { type: "speak", prompt: "Practica la pregunta clave del análisis de causas.", target: "¿Qué he hecho hoy para mejorar mi trabajo?" },
        { type: "mc", q: "El método '5W+1H' para un plan de acción incluye preguntas como:", options: ["Qué, por qué, dónde, cuándo, quién y cómo", "Solo qué y cuándo", "Cuánto cuesta y quién paga", "Sí o no"], correct: 0 }
      ]
    },
    {
      id: "p9",
      order: 9,
      title: "Lineamientos de TI: Control de Accesos, Seguridad Física y Terceros",
      subtitle: "El vocabulario real de las políticas internas de seguridad de la información",
      vocabulary: [
        {
          category: "Control de Accesos",
          items: [
            { es: "autenticación multifactor (MFA)", pt: "autenticação multifator (MFA)" },
            { es: "identificador único de usuario", pt: "identificador único de usuário" },
            { es: "bloqueo de cuenta tras intentos fallidos", pt: "bloqueio de conta após tentativas falhas" },
            { es: "ciclo de vida de acceso del usuario", pt: "ciclo de vida de acesso do usuário" },
            { es: "usuario con privilegios elevados", pt: "usuário com privilégios elevados" },
            { es: "principio de mínimo privilegio", pt: "princípio do menor privilégio" },
            { es: "revisión periódica de accesos", pt: "revisão periódica de acessos" },
            { es: "filtrado web / sitios maliciosos", pt: "filtragem web / sites maliciosos" },
            { es: "directorio activo (Active Directory)", pt: "diretório ativo (Active Directory)" }
          ]
        },
        {
          category: "Seguridad Física y Ambiental",
          items: [
            { es: "perímetro de seguridad física", pt: "perímetro de segurança física" },
            { es: "cuarto de equipos / centro de datos", pt: "sala de equipamentos / data center" },
            { es: "tarjeta de proximidad", pt: "cartão de proximidade" },
            { es: "cámaras de videovigilancia", pt: "câmeras de videovigilância" },
            { es: "sistema contra incendios", pt: "sistema contra incêndio" },
            { es: "fuente de energía ininterrumpida (UPS)", pt: "fonte de energia ininterrupta (UPS/nobreak)" },
            { es: "escritorio y pantalla limpia", pt: "mesa e tela limpas (clean desk / clean screen)" }
          ]
        },
        {
          category: "Gestión de Terceros y Proveedores",
          items: [
            { es: "selección de terceros", pt: "seleção de terceiros" },
            { es: "contrato / acuerdo de confidencialidad", pt: "contrato / acordo de confidencialidade" },
            { es: "cadena de suministro (TIC)", pt: "cadeia de suprimentos (TIC)" },
            { es: "evaluación periódica de proveedores", pt: "avaliação periódica de fornecedores" },
            { es: "conflicto de intereses", pt: "conflito de interesses" },
            { es: "devolución de activos al término del contrato", pt: "devolução de ativos ao término do contrato" }
          ]
        }
      ],
      text: "Los lineamientos internos de una organización certificada en ISO/IEC 27001 son documentos muy concretos, con reglas numéricas exactas. En control de accesos, por ejemplo: 'Las contraseñas deberán tener una longitud de por lo menos diez dígitos alfanuméricos para usuarios, y de quince dígitos para cuentas con privilegios elevados. El sistema obligará a que las claves se renueven cada sesenta días como máximo. Las cuentas serán bloqueadas luego de cuatro intentos erróneos, desbloqueadas luego de treinta minutos.' En seguridad física: 'El acceso a los centros de cómputo solo se dará a personal autorizado, mediante tarjeta de proximidad, con cámaras de videovigilancia en las zonas seguras y un sistema contra incendios y de energía ininterrumpida (UPS) en cada cuarto de equipos.' Y en la gestión de terceros: 'Antes de iniciar un acuerdo con un proveedor, la organización debe realizar la evaluación e investigación necesaria para garantizar que el prospecto no genere un riesgo que afecte la confidencialidad, integridad y disponibilidad de la información. Al término de la relación contractual, el tercero deberá devolver todos los activos e información en su posesión, y se revocarán todos los permisos de acceso otorgados durante la relación comercial.' Dominar este vocabulario es fundamental para auditar controles de acceso, seguridad física y relaciones con terceros con precisión en español.",
      textPt: "Os lineamentos internos de uma organização certificada na ISO/IEC 27001 são documentos muito concretos, com regras numéricas exatas. No controle de acessos, por exemplo: 'As senhas deverão ter um comprimento de pelo menos dez dígitos alfanuméricos para usuários, e de quinze dígitos para contas com privilégios elevados. O sistema obrigará a renovação das senhas a cada sessenta dias, no máximo. As contas serão bloqueadas após quatro tentativas erradas, sendo desbloqueadas após trinta minutos.' Na segurança física: 'O acesso aos centros de processamento de dados só será concedido a pessoal autorizado, mediante cartão de proximidade, com câmeras de videovigilância nas zonas seguras e um sistema contra incêndio e de energia ininterrupta (UPS/nobreak) em cada sala de equipamentos.' E na gestão de terceiros: 'Antes de iniciar um acordo com um fornecedor, a organização deve realizar a avaliação e investigação necessária para garantir que o prospecto não gere um risco que afete a confidencialidade, integridade e disponibilidade da informação. Ao término da relação contratual, o terceiro deverá devolver todos os ativos e informações em sua posse, e todas as permissões de acesso concedidas durante a relação comercial serão revogadas.' Dominar esse vocabulário é fundamental para auditar controles de acesso, segurança física e relações com terceiros com precisão em espanhol.",
      exercises: [
        { type: "mc", q: "Según el lineamiento real citado, ¿cuántos dígitos mínimos debe tener la contraseña de un usuario con privilegios elevados?", options: ["6 dígitos", "10 dígitos", "15 dígitos", "20 dígitos"], correct: 2 },
        { type: "mc", q: "¿Cada cuántos días como máximo debe renovarse una contraseña, según el lineamiento?", options: ["30 días", "60 días", "90 días", "120 días"], correct: 1 },
        { type: "fill", q: "Las cuentas se bloquean tras cuatro intentos erróneos y se desbloquean luego de treinta _______.", answer: "minutos" },
        { type: "fill", q: "El acceso físico al cuarto de equipos requiere una tarjeta de _______.", answer: "proximidad" },
        { type: "translate", from: "pt", text: "autenticação multifator", answer: "autenticación multifactor" },
        { type: "translate", from: "es", text: "El tercero deberá devolver todos los activos al término del contrato.", answer: "O terceiro deverá devolver todos os ativos ao término do contrato." },
        { type: "mc", q: "¿Qué principio establece que un usuario solo debe tener acceso a lo estrictamente necesario para su función?", options: ["Principio de mínimo privilegio", "Principio de máxima disponibilidad", "Principio de Pareto", "Principio de redundancia"], correct: 0 },
        { type: "mc", q: "¿Qué se debe revocar al finalizar la relación contractual con un tercero?", options: ["Nada, el acceso permanece activo", "Todos los permisos de acceso lógicos y físicos otorgados", "Solo el acceso a internet", "Solo el correo electrónico"], correct: 1 },
        { type: "fill", q: "El escritorio y pantalla _______ evita dejar información sensible a la vista.", answer: "limpia" },
        { type: "open", q: "Redacta una frase, en el estilo formal de un lineamiento, sobre la revisión periódica de accesos de usuarios.", sample: "Los derechos de acceso de los usuarios se deben revisar de forma general y periódica, al menos una vez al año, manteniendo un registro de dichas revisiones." },
        { type: "speak", prompt: "Practica una regla real de control de accesos.", target: "Las contraseñas deberán tener una longitud de por lo menos diez dígitos alfanuméricos." },
        { type: "mc", q: "¿Qué debe evaluar la organización antes de firmar un contrato con un nuevo proveedor?", options: ["Solo el precio ofrecido", "El riesgo que el proveedor pueda representar para la confidencialidad, integridad y disponibilidad de la información", "El logo de la empresa proveedora", "Nada, la evaluación no es necesaria"], correct: 1 }
      ]
    },
    {
      id: "p10",
      order: 10,
      title: "El Correo de Difusión: Comunicar Actualizaciones de Seguridad",
      subtitle: "Cómo redactar un correo formal de difusión interna",
      vocabulary: [
        {
          category: "Fórmulas de Difusión Interna",
          items: [
            { es: "Por medio del presente, se les comunica que...", pt: "Por meio deste, comunica-se que..." },
            { es: "como parte de las acciones de mejora derivadas de los hallazgos", pt: "como parte das ações de melhoria decorrentes dos achados" },
            { es: "con el objetivo de fortalecer los controles y procesos", pt: "com o objetivo de fortalecer os controles e processos" },
            { es: "las principales actualizaciones incorporadas son las siguientes", pt: "as principais atualizações incorporadas são as seguintes" },
            { es: "se muestran resaltadas para facilitar su reconocimiento", pt: "são exibidas destacadas para facilitar seu reconhecimento" },
            { es: "cabe mencionar que pueden revisar los lineamientos en...", pt: "cabe mencionar que podem revisar os lineamentos em..." },
            { es: "quedamos atentos a cualquier consulta", pt: "ficamos à disposição para qualquer dúvida" }
          ]
        }
      ],
      text: "Un correo real de difusión, enviado por el área de Seguridad de la Información a todo el equipo de TI, sigue un patrón formal muy claro: 'Estimados: Por medio del presente, se les comunica que ya se encuentran publicadas las nuevas versiones de los lineamientos de seguridad de la información, como parte de las acciones de mejora derivadas de los hallazgos identificados durante la auditoría de certificación ISO 27001, con el objetivo de fortalecer los controles y procesos de Tecnología de la Información. Las principales actualizaciones incorporadas son las siguientes: mejora del control de acceso a sitios maliciosos, incluyendo la revisión periódica de listas negras; mejora del control de mantenimiento de equipos, con la finalidad de asegurar la disponibilidad de evidencias; y mejora del control enfocado a la revisión y evaluación periódica de proveedores. Las actualizaciones realizadas podrán identificarse fácilmente, ya que se muestran resaltadas dentro de cada lineamiento, con la finalidad de facilitar su reconocimiento. Cabe mencionar que pueden revisar los lineamientos dentro del Sistema Documental, en la sección de Gestión de la Tecnología e Información.' Este tipo de correo cierra siempre el círculo de una auditoría: primero se detectan los hallazgos, luego se definen las acciones correctivas, y finalmente se difunden los cambios a todo el personal para que los nuevos controles se cumplan de verdad.",
      textPt: "Um e-mail real de divulgação, enviado pela área de Segurança da Informação para toda a equipe de TI, segue um padrão formal muito claro: 'Estimados: Por meio deste, comunica-se que já estão publicadas as novas versões dos lineamentos de segurança da informação, como parte das ações de melhoria decorrentes dos achados identificados durante a auditoria de certificação ISO 27001, com o objetivo de fortalecer os controles e processos de Tecnologia da Informação. As principais atualizações incorporadas são as seguintes: melhoria do controle de acesso a sites maliciosos, incluindo a revisão periódica de listas negras; melhoria do controle de manutenção de equipamentos, com a finalidade de assegurar a disponibilidade de evidências; e melhoria do controle voltado à revisão e avaliação periódica de fornecedores. As atualizações realizadas podem ser identificadas facilmente, já que aparecem destacadas dentro de cada lineamento, com a finalidade de facilitar seu reconhecimento. Cabe mencionar que podem revisar os lineamentos dentro do Sistema Documental, na seção de Gestão da Tecnologia e Informação.' Esse tipo de e-mail sempre fecha o círculo de uma auditoria: primeiro se detectam os achados, depois se definem as ações corretivas, e finalmente se divulgam as mudanças para todo o pessoal, para que os novos controles sejam realmente cumpridos.",
      exercises: [
        { type: "mc", q: "¿Qué motiva, en el correo real, la actualización de los lineamientos de seguridad?", options: ["Un cambio de gerencia", "Las acciones de mejora derivadas de los hallazgos de la auditoría de certificación", "Una campaña de marketing", "Una fusión con otra empresa"], correct: 1 },
        { type: "mc", q: "¿Cómo se identifican las partes actualizadas dentro de cada lineamiento?", options: ["Se envían en un archivo aparte", "Se muestran resaltadas dentro del documento", "No se identifican, hay que leer todo de nuevo", "Se anuncian solo de forma verbal"], correct: 1 },
        { type: "fill", q: "Por medio del presente, se les _______ que ya se encuentran publicadas las nuevas versiones de los lineamientos.", answer: "comunica" },
        { type: "fill", q: "Las actualizaciones tienen como objetivo _______ los controles y procesos de Tecnología de la Información.", answer: "fortalecer" },
        { type: "translate", from: "pt", text: "como parte das ações de melhoria decorrentes dos achados", answer: "como parte de las acciones de mejora derivadas de los hallazgos" },
        { type: "translate", from: "es", text: "Quedamos atentos a cualquier consulta.", answer: "Ficamos à disposição para qualquer dúvida." },
        { type: "mc", q: "¿Qué tres controles se mencionan como mejorados en el correo real de esta lección?", options: ["Ventas, marketing y logística", "Acceso a sitios maliciosos, mantenimiento de equipos y evaluación de proveedores", "Recursos humanos, finanzas y compras", "Ninguno, el correo no detalla controles"], correct: 1 },
        { type: "open", q: "Redacta un correo breve de difusión anunciando que se actualizó el lineamiento de control de accesos.", sample: "Estimados: Por medio del presente, se les comunica que ya se encuentra publicada la nueva versión del Lineamiento de Control de Accesos, con el objetivo de fortalecer la gestión de contraseñas y el acceso remoto. Quedamos atentos a cualquier consulta. Saludos cordiales." },
        { type: "fill", q: "Cabe _______ que pueden revisar los lineamientos dentro del Sistema Documental.", answer: "mencionar" },
        { type: "speak", prompt: "Practica la frase de apertura de un correo de difusión formal.", target: "Por medio del presente, se les comunica que ya se encuentran publicadas las nuevas versiones de los lineamientos." },
        { type: "mc", q: "¿Cuál es el propósito final de un correo de difusión después de una auditoría?", options: ["Informar solo a la alta dirección", "Asegurar que todo el personal conozca y cumpla los nuevos controles", "Cerrar la empresa", "Cancelar la certificación"], correct: 1 }
      ]
    }
  ]
};
