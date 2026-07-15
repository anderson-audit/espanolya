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
    }
  ]
};
