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
        { speaker: "Auditor", line: "Buenos días a todos. Permítanme presentarme: soy el auditor líder responsable de esta auditoría." },
        { speaker: "Auditor", line: "Vamos a comenzar con la reunión de apertura. Gracias por recibirme." },
        { speaker: "Representante", line: "Bienvenido. Estamos a su disposición para lo que necesite." },
        { speaker: "Auditor", line: "¿Podrían firmar la hoja de asistencia, por favor?" },
        { speaker: "Representante", line: "Claro, aquí tiene." },
        { speaker: "Auditor", line: "Este es el alcance de la auditoría de hoy, según el plan de auditoría que les envié previamente." },
        { speaker: "Auditor", line: "Durante la visita, voy a verificar los procedimientos documentados y las evidencias de cumplimiento." },
        { speaker: "Representante", line: "Entendido. ¿Podría explicarnos cómo funciona el proceso de comunicación de resultados?" },
        { speaker: "Auditor", line: "Por supuesto. Al final de cada entrevista, les informaré si hay algún hallazgo o no conformidad." },
        { speaker: "Auditor", line: "He identificado una no conformidad menor en el área de TI, relacionada con el control de acceso." },
        { speaker: "Auditor", line: "Quiero ser claro y respetuoso al comunicar los resultados." },
        { speaker: "Auditor", line: "Con esto cerramos la auditoría de hoy. Agradezco su tiempo y colaboración." },
        { speaker: "Representante", line: "Muchas gracias a usted. Quedamos atentos al informe de auditoría." }
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
        { type: "open", q: "Escribe dos frases que usarías para conducir una entrevista de auditoría con un colaborador del área de TI.", sample: "¿Podría explicarme cómo funciona el control de acceso? ¿Dónde se almacenan los registros de los backups?" }
      ]
    },
    {
      id: "p3",
      order: 3,
      title: "El Informe y el Plan de Auditoría",
      subtitle: "Documentos reales de auditoría en español",
      text: "Los siguientes fragmentos están adaptados de correos y documentos reales de auditorías ISO 27001 realizadas en empresas de Argentina (PREVI SRL) y Perú (SUNARP). Observa el registro formal y las fórmulas recurrentes: 'Adjunto en el presente mensaje el informe de auditoría con los resultados presentados el día 18 de octubre.' — 'Por favor enviame el conforme sobre el informe y el formulario firmado con la aceptación de los hallazgos.' — 'Dentro de las 6 semanas debes enviarme completo el formulario con el análisis de causa y la planificación de las acciones.' — 'Dentro de los próximos 3 meses debes enviarme la evidencia de resolución (implementación) de la NC tipo A.' — 'Adjunto el plan de auditoría para este miércoles 18 de octubre. Cualquier duda estoy a disposición.' — 'Remito el Plan de Auditoría del SGSI con algunas modificaciones.' — 'Confirmo recepción del plan de auditoría. ¡Éxitos en el servicio!' — 'Se evidencia el documento aprobado por Resolución [...]' — 'El auditor tiene 5 días corridos para encerrar eventos con la documentación completa.' Un ejemplo de descripción de perfil organizacional, tal como aparece en un plan de auditoría real: 'La empresa actúa en el segmento de servicios de venta a través de campañas telefónicas. La organización opera en 1 turno. La infraestructura crítica se encuentra en la infraestructura local en las oficinas.'",
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
