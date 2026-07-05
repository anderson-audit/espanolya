// EspañolYa! - Conteúdo do Nível Avançado (Módulo 5)
// Gerado a partir do material original do curso MEV - Espanhol de Verdade

const LEVEL_AVANZADO = {
  id: "avanzado",
  name: "Avançado",
  icon: "⭐",
  colorFrom: "#6a1b9a",
  colorTo: "#AA151B",
  description: "15 aulas para o domínio do espanhol: negócios, entrevistas, meio ambiente, cultura e um vocabulário sofisticado.",
  lessons: [
    {
      id: "a1", order: 1, title: "Cocina", subtitle: "Utensílios, verbos culinários e o infinitivo composto",
      dialogue: [
        { who: "A", es: "Oye, ¿qué hicieron en sus vacaciones?" },
        { who: "B", es: "Fuimos a la playa y a una ciudad cercana de compras." },
        { who: "A", es: "Bueno. ¿Y les gustó?" },
        { who: "B", es: "Sí, pero creo que deberíamos haber ido a otra playa. Esta adonde fuimos era lejos de todo y no había ni restaurantes cerca de la casa." },
        { who: "A", es: "¡Ah! ¿Se quedaron en una casa entonces?" },
        { who: "B", es: "Sí, una casa muy bonita, sin embargo, no había casi nada en ella. Me gustaría haber cocinado más, ya que no había restaurantes por allá." },
        { who: "A", es: "¿Qué necesitabas que no había?" },
        { who: "B", es: "Todos los utensilios de cocina, ¿sabes? Como por ejemplo una buena sartén, ollas grandes, una licuadora y muchas otras cosas. No había ni siquiera tazas y cucharillas." },
        { who: "A", es: "No lo puedo creer. Esto es un problema para ti porque te encanta cocinar. Pero, ¡qué bueno que se divirtieron igual!" },
        { who: "B", es: "Sí, verdad. Haber elegido viajar fue estupendo. ¡Nos encantó el viaje!" }
      ],
      vocabulary: [
        {
          category: "Utensilios de cocina",
          items: [
            { es: "Alacena", pt: "Armário de cozinha" }, { es: "Gaveta/Cajón", pt: "Gaveta" },
            { es: "Gabinete", pt: "Móvel de cozinha" }, { es: "Batidora Eléctrica", pt: "Batedeira" },
            { es: "Cafetera/Máquina de café", pt: "Cafeteira" }, { es: "Grifo/Canilla", pt: "Torneira" },
            { es: "Congelador/Heladera/Nevera/Refrigeradora", pt: "Geladeira" }, { es: "Detergente", pt: "Detergente" },
            { es: "Campana extractora", pt: "Coifa" }, { es: "Tostador(a) (de pan)", pt: "Torradeira" },
            { es: "Cocina/Fogón/Estufa", pt: "Fogão" }, { es: "Gorro francés", pt: "Chapéu de cozinheiro" },
            { es: "Horno", pt: "Forno" }, { es: "Espumadera", pt: "Escumadeira" },
            { es: "Gas", pt: "Gás" }, { es: "Pinza", pt: "Pegador/pinça" },
            { es: "Lavavajillas", pt: "Lava-louças" }, { es: "Espátula/Paleta pescado", pt: "Espátula" },
            { es: "Licuadora", pt: "Liquidificador" }, { es: "Rodillo/Palote de masa", pt: "Rolo para massa" },
            { es: "Batidor", pt: "Fouet" }, { es: "Colador", pt: "Coador" },
            { es: "Amasadora", pt: "Amassadeira" }, { es: "Embudo", pt: "Funil" },
            { es: "Horno microondas", pt: "Forno microondas" }, { es: "Delantal", pt: "Avental" },
            { es: "Horno eléctrico", pt: "Forno elétrico" }, { es: "Cortador", pt: "Cortador" },
            { es: "Fregadero", pt: "Cuba" }, { es: "Cucharón/Cazo", pt: "Concha" },
            { es: "Exprimidor", pt: "Espremedor" }, { es: "Rallador", pt: "Ralador" },
            { es: "Hacha de cocina", pt: "Machado de cozinha" }, { es: "Vajilla", pt: "Louça" },
            { es: "Ablandador", pt: "Martelo de carne" }, { es: "Cubiertos", pt: "Talheres" },
            { es: "Pelador", pt: "Descascador" }, { es: "Plato", pt: "Prato" },
            { es: "Sacacorchos", pt: "Saca-rolhas" }, { es: "Cuchara", pt: "Colher" },
            { es: "Moledor", pt: "Moedor" }, { es: "Cuchara de palo", pt: "Colher de pau" },
            { es: "Cucharilla", pt: "Colherzinha" }, { es: "Trapo", pt: "Pano" },
            { es: "Mantel", pt: "Toalha de mesa" }, { es: "Tenedor", pt: "Garfo" },
            { es: "Paño", pt: "Pano" }, { es: "Molde de hornear", pt: "Forma de assar" },
            { es: "Cuchillo", pt: "Faca" }, { es: "Toalla", pt: "Toalha" },
            { es: "Fuente/Rustidera", pt: "Travessa" }, { es: "Vaso", pt: "Copo" },
            { es: "Pava", pt: "Chaleira" }, { es: "Sartén", pt: "Frigideira" },
            { es: "Taza", pt: "Xícara" }, { es: "Cazuela", pt: "Panela" },
            { es: "Copa", pt: "Taça" }, { es: "Cacerola", pt: "Caçarola" },
            { es: "Botella", pt: "Garrafa" }, { es: "Olla", pt: "Panela" },
            { es: "Balanza", pt: "Balança" }, { es: "Olla a presión", pt: "Panela de pressão" },
            { es: "Basura", pt: "Lixo" }, { es: "Tapa", pt: "Tampa" },
            { es: "Interruptor", pt: "Interruptor" }, { es: "Tabla de picar", pt: "Tábua" },
            { es: "Cocinero(a)", pt: "Cozinheiro(a)" }, { es: "Escurridor", pt: "Escorredor" },
            { es: "Bote/Cristal", pt: "Pote" }
          ]
        },
        {
          category: "Verbos de cocina",
          items: [
            { es: "Colocar", pt: "Colocar" }, { es: "Recortar", pt: "Recortar" },
            { es: "Tapar", pt: "Tampar" }, { es: "Cubrir", pt: "Cobrir" },
            { es: "Rallar", pt: "Ralar" }, { es: "Mezclar", pt: "Misturar" },
            { es: "Cortar", pt: "Cortar" }, { es: "Aliñar/Aderezar", pt: "Temperar" },
            { es: "Colar/Filtrar", pt: "Coar/Filtrar" }, { es: "Cocinar", pt: "Cozinhar" },
            { es: "Cocer", pt: "Cozinhar" }, { es: "Escurrir", pt: "Escorrer" },
            { es: "Amasar", pt: "Amassar" }, { es: "Freír", pt: "Fritar" },
            { es: "Sofreír", pt: "Refogar" }, { es: "Enharinar", pt: "Enfarinhar" },
            { es: "Introducir", pt: "Introduzir" }, { es: "Espolvorear", pt: "Polvilhar" },
            { es: "Hervir", pt: "Ferver" }, { es: "Batir", pt: "Bater" },
            { es: "Saltear", pt: "Saltear" }, { es: "Rehogar", pt: "Refogar" },
            { es: "Verter", pt: "Derramar" }, { es: "Añadir/Agregar/Incorporar/Echar", pt: "Adicionar" },
            { es: "Licuar", pt: "Liquidificar" }, { es: "Pelar", pt: "Descascar" },
            { es: "Moler", pt: "Moer" }, { es: "Rebozar", pt: "Empanar" },
            { es: "Extender", pt: "Estender" }, { es: "Picar", pt: "Picar" },
            { es: "Abrir", pt: "Abrir" }, { es: "Escaldar", pt: "Escaldar" },
            { es: "Servir", pt: "Servir" }, { es: "Adornar", pt: "Decorar" },
            { es: "Vaporizar", pt: "Vaporizar" }, { es: "Decorar", pt: "Decorar" },
            { es: "Hornear", pt: "Assar" }, { es: "Sazonar", pt: "Temperar" },
            { es: "Gratinar", pt: "Gratinar" }, { es: "Rociar", pt: "Borrifar" },
            { es: "Empanar", pt: "Empanar" }, { es: "Untar", pt: "Untar" },
            { es: "Preparar", pt: "Preparar" }, { es: "Fundir/Derretir (chocolate)", pt: "Derreter" }
          ]
        }
      ],
      grammar: [
        {
          title: "Usos del Infinitivo",
          headers: ["Exemplo"],
          rows: [
            ["Querer es poder."], ["Prohibido aparcar."], ["El comer y el rascar, todo es empezar."],
            ["Ver para creer."], ["El andar silencioso de esa dama me encantó."], ["Tu responsabilidad es trabajar."],
            ["La máquina de escribir se rompió."], ["Él se fue sin decir adiós."], ["Queremos beber algo."],
            ["El amanecer de acá es lindo."]
          ]
        },
        {
          title: "Infinitivo Compuesto (Haber + participio)",
          headers: ["Exemplo"],
          rows: [
            ["Tendría que haber reservado una mesa en el restaurante."],
            ["Yo debería haber comido menos en la cena."],
            ["Ella me lo debería haber dicho antes."],
            ["Quisiera que mi padre pudiese haber vivido más."],
            ["Haber cantado como cantó anoche, le hizo encantar al público."],
            ["Él creía haberlo contestado a ella."],
            ["Se quedó más tranquilo después de haber hablado con su hermana por teléfono."],
            ["Tuvimos que volver a la casa, por no haber apagado las luces."]
          ]
        }
      ],
      notes: [
        "Expresa una acción del pasado. Bastante usado cuando uno se arrepiente de no haber hecho algo que debería haber hecho.",
        "Estructura: Haber + participio."
      ],
      exercises: [
        { type: "mc", q: "Complete: Yo debería _________ __________ la tarea antes. (hacer)", options: ["haber hecho", "hacer habido", "haber hacido"], correct: 0 },
        { type: "mc", q: "Ella estaba muy feliz por __________ __________ su hija después de 10 años. (ver)", options: ["haber viendo", "haber visto", "ha visto"], correct: 1 },
        { type: "fill", q: "No quisiera __________ __________ en aquella situación. (estar)", answer: "haber estado", altAnswers: ["haber estar"] },
        { type: "fill", q: "Nosotros deberíamos ____________ ___________ a ver qué pasaba con ella. (volver)", answer: "haber vuelto" },
        { type: "fill", q: "Si al menos él pudiera __________ __________ con nosotros. (viajar)", answer: "haber viajado" },
        { type: "mc", q: "Qual utensílio corresponde a 'Torneira'?", options: ["Grifo/Canilla", "Fregadero", "Cocina"], correct: 0 },
        { type: "translate", from: "pt", text: "Deveríamos ter viajado no ano passado.", answer: "Deberíamos haber viajado el año pasado." },
        { type: "mc", q: "'Sofreír' em português significa:", options: ["Refogar", "Assar", "Ferver"], correct: 0 },
        { type: "listen", audioText: "Todos los utensilios de cocina, ¿sabes? Como por ejemplo una buena sartén, ollas grandes, una licuadora.", q: "O que a pessoa diz que faltava na casa?", answer: "Utensilios de cocina (sartén, ollas, licuadora, etc.)" },
        { type: "speak", prompt: "Repita em voz alta:", target: "Haber elegido viajar fue estupendo. ¡Nos encantó el viaje!" }
      ]
    },
    {
      id: "a2", order: 2, title: "Comercio", subtitle: "Compras, vendas e o gerundio compuesto",
      dialogue: [
        { who: "text", es: "María, habiendo sido invitada a la boda de su mejor amiga, fue rápidamente a una tienda de ropas a comprar un vestido para la fiesta. Ella fue a una tienda que se llama Vivir Bella y luego de haber entrado, vio el vestido más perfecto que había visto en su vida. Un vestido negro con dorado, largo y brillante. María luego le preguntó a la dependiente si tenía su talla, y por suerte, le dijo que sí. Ella fue al probador, lo probó y en el mismo momento se enamoró. Habiendo probado el vestido, ya fue a la caja y lo compró pagando con tarjeta de crédito en cuotas. Después de todo, era un vestido muy caro. Habiendo salido de la tienda, fue a pedir un turno con su peluquero y su manicura para estar linda en la boda de su amiga." }
      ],
      vocabulary: [
        {
          category: "Comercio",
          items: [
            { es: "Tienda de...", pt: "Loja de..." }, { es: "Talla", pt: "Tamanho" },
            { es: "Compra", pt: "Compra" }, { es: "Rebaja", pt: "Promoção" },
            { es: "Venta", pt: "Venda" }, { es: "Precio", pt: "Preço" },
            { es: "Comprar", pt: "Comprar" }, { es: "Abierto", pt: "Aberto" },
            { es: "Pagar", pt: "Pagar" }, { es: "Cerrado", pt: "Fechado" },
            { es: "Cliente", pt: "Cliente" }, { es: "Abrir", pt: "Abrir" },
            { es: "Dependiente", pt: "Atendente" }, { es: "Cerrar", pt: "Fechar" },
            { es: "Pagar con dinero/en efectivo", pt: "Pagar em dinheiro" }, { es: "Espejo", pt: "Espelho" },
            { es: "Pago al contado", pt: "Pagar à vista" }, { es: "Caja", pt: "Caixa" },
            { es: "Pago aplazado", pt: "Pagar à prazo" }, { es: "Vuelta/Vuelto", pt: "Troco" },
            { es: "Pagar con tarjeta", pt: "Pagar com cartão" }, { es: "Cambio", pt: "Troco/Câmbio" },
            { es: "Factura", pt: "Nota" }, { es: "Maniquí", pt: "Manequim" },
            { es: "Mostrador", pt: "Balcão" }, { es: "Perchero", pt: "Cabideiro" },
            { es: "Escaparate/vitrina", pt: "Vitrine" }, { es: "Horario comercial/de atención", pt: "Horário comercial/de atendimento" },
            { es: "Probador", pt: "Provador" }
          ]
        },
        {
          category: "Frases útiles",
          items: [
            { es: "¿Le puedo ayudar?" }, { es: "¿Le atienden?" }, { es: "¿Qué andaba/estaba buscando?" },
            { es: "Estoy mirando solamente, gracias." }, { es: "Ahora no voy a llevar nada. No tengo dólares. Mañana vuelvo." },
            { es: "¿Puede mostrarme el vestido que está en la vitrina?" }, { es: "Quisiera probarlo." },
            { es: "¿Tiene otros colores de la camisa?" }, { es: "Me parece fuera de moda." },
            { es: "No me gustó/ha gustado." }, { es: "Es el tono de la moda/del momento." },
            { es: "¿Dónde está el probador?" }, { es: "¿Cuánto vale?/¿Cuánto cuesta?" },
            { es: "Voy a pagar al contado. ¿Puede hacerme una rebaja?/un descuento?" },
            { es: "¿Puedo pagar con tarjeta de crédito?" }, { es: "¿Se puede pagar a plazo/en cuotas?" },
            { es: "Si paga al contado tiene descuento." }, { es: "Vuelva siempre." }
          ]
        },
        {
          category: "Placas y señales",
          items: [
            { es: "Aceptamos Visa/Mastercard/Diners/American Express" }, { es: "No aceptamos tarjetas de crédito" },
            { es: "Abierto las 24 horas del día" }, { es: "Rebajas" }, { es: "Liquidación" },
            { es: "Liquidación de saldos" }, { es: "Liquidación de verano/invierno" }, { es: "Se habla (inglés)" }
          ]
        }
      ],
      grammar: [
        {
          title: "Gerundio Compuesto (Habiendo + participio pasivo)",
          headers: ["Exemplo"],
          rows: [
            ["Habiendo comido, ella fue a dormir."],
            ["El amigo de Marta, habiendo hablado con ella por teléfono, se tranquilizó."],
            ["Los empleados habiendo almorzado, volvieron a trabajar."],
            ["La profesora, habiéndolo comunicado varias veces, nos tomó un examen sobre conocimientos ortográficos."]
          ]
        }
      ],
      notes: ["Se utiliza para expresar una acción terminada anterior a la acción del verbo principal (sea inmediata o no)."],
      exercises: [
        { type: "fill", q: "_________________ ______________ de su casa, Julia fue a trabajar. (salir)", answer: "Habiendo salido" },
        { type: "fill", q: "Ella, _____________ _____________ de todo, lo contó a Mary. (saber)", answer: "habiendo sabido" },
        { type: "fill", q: "____________ ____________ a la fiesta, tuvimos que volver porque nuestra madre nos llamó. (ir)", answer: "Habiendo ido" },
        { type: "fill", q: "______________ ______________ la cena, empezasteis a comer. (preparar)", answer: "Habiendo preparado" },
        { type: "fill", q: "______________ ______________ todo, pudo relajar. (limpiar)", answer: "Habiendo limpiado" },
        { type: "mc", q: "'Rebaja' em português é:", options: ["Promoção", "Vitrine", "Provador"], correct: 0 },
        { type: "mc", q: "'Talla' em português é:", options: ["Tamanho", "Preço", "Troco"], correct: 0 },
        { type: "translate", from: "pt", text: "Tendo saído da loja, ela foi ao cabeleireiro.", answer: "Habiendo salido de la tienda, fue a la peluquería." },
        { type: "listen", audioText: "¿Puede mostrarme el vestido que está en la vitrina? Quisiera probarlo.", q: "O que a cliente pede para ver?", answer: "El vestido que está en la vitrina." },
        { type: "speak", prompt: "Repita em voz alta:", target: "Habiendo probado el vestido, ya fue a la caja y lo compró." }
      ]
    },
    {
      id: "a3", order: 3, title: "Economía", subtitle: "Banco, mercado laboral e o futuro continuo",
      dialogue: [
        { who: "A", es: "¡Buen día! ¿La puedo ayudar?" },
        { who: "B", es: "Sí, por favor. Quisiera cambiar reales a pesos, ¿es posible?" },
        { who: "A", es: "Sí, el cambio está a 5 por 1." },
        { who: "B", es: "Bien, entonces quiero cambiar 300 reales." },
        { who: "A", es: "Está bien, aquí tiene. ¿Necesita algo más?" },
        { who: "B", es: "Sí, estaré viajando mañana y por eso necesito cobrar un cheque hoy. ¿Puede hacer efectivo el cheque?" },
        { who: "A", es: "Por supuesto. ¿Prefiere billetes de menor valor?" },
        { who: "B", es: "Sí, por favor." },
        { who: "A", es: "Listo. ¿La ayudo en algo más?" },
        { who: "B", es: "No, eso es todo. ¡Muchísimas gracias!" },
        { who: "A", es: "¡Gracias a usted! ¡Que tenga un buen día!" }
      ],
      vocabulary: [
        {
          category: "Economía y mercado laboral",
          items: [
            { es: "Compra" }, { es: "Venta" }, { es: "Dinero/Plata" }, { es: "Moneda" },
            { es: "Tarjeta de débito/crédito" }, { es: "Costo" }, { es: "Interés", pt: "juros" },
            { es: "Cuota", pt: "Parcela" }, { es: "Precio" }, { es: "Valor" }, { es: "Acciones", pt: "Ações" },
            { es: "Auditoría" }, { es: "Banco" }, { es: "Beneficios" }, { es: "Bienes", pt: "Bens" },
            { es: "Pagar" }, { es: "Cobrar" }, { es: "Cliente" }, { es: "Declaración de la renta" },
            { es: "Concesionario" }, { es: "Contrato" }, { es: "Crédito" }, { es: "Cuenta" },
            { es: "Cajero automático" }, { es: "Bolsa de valores" }, { es: "Ahorro", pt: "Poupança" },
            { es: "Cuenta de ahorros" }, { es: "Cuenta corriente" }, { es: "Depósito" }, { es: "Transferencia" },
            { es: "Empleo/Desempleo" }, { es: "Empleados" }, { es: "Gerente" }, { es: "Gestión" },
            { es: "Hipoteca" }, { es: "Giro" }, { es: "Honorarios" }, { es: "Horario comercial" },
            { es: "Huelga", pt: "Greve" }, { es: "Importación" }, { es: "Impuesto (sobre la renta)" },
            { es: "Inversión" }, { es: "Jefe(a)" }, { es: "Jubilación", pt: "Aposentadoria" },
            { es: "Liderazgo" }, { es: "Mayorista/Minorista" }, { es: "Oferta" }, { es: "Producto" },
            { es: "Mercado" }, { es: "Mercancía" }, { es: "Servicio" }, { es: "Queja" }, { es: "Riesgo" },
            { es: "Vendedor(a)" }, { es: "Empresa/Negocio/Compañía" }, { es: "Renta/Ingresos" },
            { es: "Saldo acreedor/deudor" }, { es: "Tabla de salarios" }, { es: "Tarjeta de visitas" },
            { es: "Toma de decisiones" }, { es: "Vacaciones" }, { es: "Viable" }, { es: "Vencimiento" },
            { es: "Nómina de sueldos", pt: "Folha de pagamento" }, { es: "Recibo de sueldo", pt: "Contracheque" },
            { es: "Préstamo", pt: "Empréstimo" }, { es: "Deuda", pt: "Dívida" }, { es: "Invertir", pt: "Investir" }
          ]
        },
        {
          category: "Símbolos matemáticos",
          items: [
            { es: "+", pt: "Adición/Suma" }, { es: "-", pt: "Sustracción" }, { es: "x", pt: "Multiplicación" },
            { es: "/", pt: "División" }, { es: "=", pt: "Igual/Resultado" }, { es: "%", pt: "Porcentaje" }
          ]
        },
        {
          category: "Monedas de países hispanohablantes",
          items: [
            { es: "Argentina", pt: "Peso" }, { es: "Bolivia", pt: "Boliviano" }, { es: "Chile", pt: "Peso" },
            { es: "Colombia", pt: "Peso" }, { es: "Costa Rica", pt: "Colón" }, { es: "Cuba", pt: "Peso" },
            { es: "Ecuador", pt: "Dólar" }, { es: "El Salvador", pt: "Dólar" }, { es: "España", pt: "Euro" },
            { es: "Guatemala", pt: "Quetzal" }, { es: "Honduras", pt: "Lempira" }, { es: "México", pt: "Peso" },
            { es: "Nicaragua", pt: "Córdoba" }, { es: "Panamá", pt: "Balboa/dólar" }, { es: "Paraguay", pt: "Guaraní" },
            { es: "Perú", pt: "Sol" }, { es: "República Dominicana", pt: "Peso" }, { es: "Uruguay", pt: "Peso" },
            { es: "Venezuela", pt: "Bolívar" }
          ]
        }
      ],
      grammar: [
        {
          title: "Futuro Continuo (Estar futuro + gerundio)",
          headers: ["Exemplo"],
          rows: [
            ["Estaré hablando con María por la tarde."],
            ["Cuando yo llegue, ella ya va a estar estudiando."],
            ["¿Estaremos escribiendo algo esta tarde?"],
            ["No estaré haciendo nada esta noche, ¿quieres hacer algo?"]
          ]
        }
      ],
      notes: ["Usado para hablar de algo que estará sucediendo en el futuro en una acción continua."],
      exercises: [
        { type: "fill", q: "Completa: Yo _______ viajando mañana. (estar - futuro continuo)", answer: "estaré" },
        { type: "fill", q: "Cuando yo llegue, ella ya _______ estudiando.", answer: "estará" },
        { type: "mc", q: "'Cuota' em português é:", options: ["Parcela", "Conta", "Troco"], correct: 0 },
        { type: "mc", q: "'Jubilación' em português é:", options: ["Aposentadoria", "Demissão", "Contratação"], correct: 0 },
        { type: "mc", q: "Moeda da Costa Rica:", options: ["Colón", "Peso", "Quetzal"], correct: 0 },
        { type: "fill", q: "Completa: ¿A cuánto _____ el cambio?", answer: "está" },
        { type: "translate", from: "pt", text: "Eu gostaria de fazer um depósito na minha poupança.", answer: "Quisiera hacer un depósito en mi cuenta de ahorros." },
        { type: "order", items: ["hoy", "cobrar", "cheque", "un", "necesito"], correctOrder: [3, 1, 4, 2, 0] },
        { type: "listen", audioText: "Sí, estaré viajando mañana y por eso necesito cobrar un cheque hoy.", q: "Por que a pessoa precisa descontar o cheque hoje?", answer: "Porque estará viajando mañana." },
        { type: "speak", prompt: "Repita em voz alta:", target: "¿Puede hacer efectivo el cheque? Sí, por favor." }
      ]
    },
    {
      id: "a4", order: 4, title: "Inmueble", subtitle: "Compra, venda, aluguel e o condicional 2",
      dialogue: [
        { who: "A", es: "¡Buen día, Sr. Rodríguez! ¿Ya ha pensado en la propuesta que le hice para que compre el apartamento?" },
        { who: "B", es: "Sí, pero todavía tengo miedo, porque la última vez que compré algo caro así, había pensado mucho antes de aceptarlo e igual tuve problemas después." },
        { who: "A", es: "Lo entiendo. Si yo pudiera asegurarle de que no tendrá problemas, lo haría, pero inmuebles son así. Solo después de vivir en ellos, los conocemos bien y sabemos si realmente fue un buen negocio. Sin embargo, en mi opinión, este es el momento justo para comprar inmuebles, y además, si lo compra ahora, le puedo ofrecer un buen descuento y una garantía de un año. ¿Qué le parece?" },
        { who: "B", es: "Me parece un buen negocio. Está bien...está bien… voy a comprarlo hoy. Dentro de algunos momentos le mando los documentos que me pidió." },
        { who: "A", es: "¡Perfecto, señor! ¡Estoy seguro de que no se arrepentirá!" }
      ],
      vocabulary: [
        {
          category: "Comprando/Vendiendo",
          items: [
            { es: "¿Cuáles son las ventajas del producto?" }, { es: "¿Puede darme un descuento?" },
            { es: "¿Ustedes están dispuestos a…?" }, { es: "¿El transporte y el seguro son por cuenta de quién?" },
            { es: "Si lo compra ahora, yo…" }, { es: "Es el mejor precio del mercado." },
            { es: "Está perdiendo un negocio formidable." }, { es: "Aproveche la oportunidad." },
            { es: "Es una promoción por tiempo limitado." }, { es: "¿Por qué no lo piensa mejor por algunos días?" }
          ]
        },
        {
          category: "Buscando una vivienda",
          items: [
            { es: "He visto un anuncio en el diario sobre un apartamento para alquilar." },
            { es: "¿Aún está disponible?" }, { es: "¿Dónde está ubicado?" }, { es: "¿Cómo es el apartamento?" },
            { es: "¿Cuánto es el alquiler?" }, { es: "¿Cuánto es la fianza?" },
            { es: "¿El alquiler incluye agua y gas?" }, { es: "¿Cuántos dormitorios tiene?" },
            { es: "¿Está amueblado?" }, { es: "¿Puedo verlo?" }, { es: "¿El barrio es seguro?" },
            { es: "¿A partir de cuándo puedo cambiarme?" }
          ]
        },
        {
          category: "Dinero/Precios (formatos)",
          items: [
            { es: "USD 1" }, { es: "R$ 50" }, { es: "$ 250" }, { es: "EUR 10,50" },
            { es: "CÉNTIMO" }, { es: "CENTAVO" }, { es: "CENTÉSIMO" }
          ]
        }
      ],
      grammar: [
        {
          title: "Condicional 2 (Si + imperfecto de subjuntivo + condicional simple)",
          headers: ["Exemplo"],
          rows: [
            ["Si me tocara/tocase la lotería, me compraría un coche nuevo."],
            ["Si tuviera/tuviese tiempo, te ayudaría."],
            ["Te contaría si supiera/supiese la verdad."],
            ["Si ella estudiase/estudiara más, aprobaría el examen."]
          ]
        },
        {
          title: "Pretérito Pluscuamperfecto (Indicativo)",
          headers: ["Exemplo"],
          rows: [
            ["Ella había practicado mucho antes de hacerlo aquel día."],
            ["Habíamos visto todo lo que pasó, pero preferimos no decir nada hasta ahora."],
            ["Julia encontró un lugar mejor para aparcar su coche que yo, porque había llegado antes."],
            ["Afortunadamente, cuando el incendio se produjo, todos ya se habían marchado del edificio."]
          ]
        }
      ],
      notes: ["El Pretérito Pluscuamperfecto expresa la anterioridad de un hecho pasado respecto a otro también pasado."],
      exercises: [
        { type: "mc", q: "Completa: Ella _____ practicado mucho antes de hacerlo. (haber - imperfecto)", options: ["había", "habíamos", "habían"], correct: 0 },
        { type: "fill", q: "Nosotros _______ visto todo lo que pasó.", answer: "habíamos" },
        { type: "fill", q: "Si me tocara la lotería, me _______ un coche nuevo. (comprar)", answer: "compraría" },
        { type: "fill", q: "Si tuviera tiempo, te _______. (ayudar)", answer: "ayudaría" },
        { type: "mc", q: "'Alquiler' em português é:", options: ["Aluguel", "Fiança", "Bairro"], correct: 0 },
        { type: "mc", q: "'Fianza' em português é:", options: ["Fiança/caução", "Aluguel", "Móveis"], correct: 0 },
        { type: "translate", from: "pt", text: "O bairro é seguro?", answer: "¿El barrio es seguro?" },
        { type: "translate", from: "pt", text: "Está mobiliado?", answer: "¿Está amueblado?" },
        { type: "listen", audioText: "Sin embargo, en mi opinión, este es el momento justo para comprar inmuebles.", q: "O que o corretor diz sobre o momento de comprar?", answer: "Que es el momento justo para comprar inmuebles." },
        { type: "speak", prompt: "Repita em voz alta:", target: "¡Estoy seguro de que no se arrepentirá!" }
      ]
    },
    {
      id: "a5", order: 5, title: "Carta", subtitle: "Correspondência formal e a licencia poética",
      dialogue: [
        { who: "text", es: "Montevideo, Uruguay — 28, diciembre, 2024. Estimado Sr. Saavedra: Le escribo para agradecerle por haberme contestado pronto y haber resuelto nuestros problemas con el sistema. Le envío también adjuntos los datos solicitados referentes al viaje que vamos a hacer y los días en los cuales no vamos a estar en la oficina para que usted mande a alguien la semana siguiente para averiguar qué tenemos que hacer para cambiar los sistemas. ¡Les deseamos a usted y a su equipo un feliz año nuevo! Estamos a su servicio para cualquier pregunta. Saludos, Luciana Álvez — Equipo de ventas — Su mejor Internet" }
      ],
      vocabulary: [
        {
          category: "Para empezar",
          items: [
            { es: "Estimado(a) Sr./Sra. Rodríguez:" }, { es: "Distinguido(a) Sr./Sra." },
            { es: "A la atención del (jefe de compras)." }, { es: "Le escribo porque…" },
            { es: "Espero que esté todo bien." }, { es: "Gracias por su correo electrónico/carta." },
            { es: "Le agradezco por haber contestado con tanta prontitud a mi solicitud." },
            { es: "¡Querido(a) amigo/Felipe!" }, { es: "¡Hola, Paulo! ¿Qué tal? ¿Cómo te va?" }
          ]
        },
        {
          category: "Propósito de la carta",
          items: [
            { es: "En respuesta a sus preguntas…" }, { es: "Como consecuencia de nuestra conversación telefónica…" },
            { es: "Como solicitó…" }, { es: "Le escribo para avisarle que recibimos el envío de…" },
            { es: "Le escribo para agradecerle/felicitarle/pedirle disculpas por..." },
            { es: "Te escribo para contarte una novedad/saber cómo estás…" }
          ]
        },
        {
          category: "Anejos e informaciones",
          items: [
            { es: "(Le) envío/enviamos adjunto los datos solicitados…" },
            { es: "Por favor, infórmenos en caso de estar de acuerdo." },
            { es: "Le envié ... por fax ayer." }, { es: "Estaré fuera de la oficina y sin posibilidades de contacto hasta…" }
          ]
        },
        {
          category: "Para terminar la carta",
          items: [
            { es: "Esperamos recibir…" }, { es: "Esperamos noticias suyas." }, { es: "Me pondré en contacto con Ud. nuevamente…" },
            { es: "Le agradezco su paciencia." }, { es: "Estaré a la espera de su pronta respuesta." },
            { es: "Estamos a su servicio para cualquier pregunta/duda." }, { es: "Cordiales saludos." },
            { es: "Atentamente." }, { es: "Sinceramente." }, { es: "Con cariño." },
            { es: "Besos y abrazos." }, { es: "Hasta pronto." }, { es: "Recuerdos a todos." },
            { es: "Te echo de menos." }, { es: "No te desaparezcas." }
          ]
        }
      ],
      grammar: [
        {
          title: "Licencia Poética",
          headers: ["Figura", "Exemplo"],
          rows: [
            ["Sinalefa (disminuir sílabas)", "No envidie a Europa quien nació en los Andes."],
            ["Hiato (separa vocales de una sílaba fonológica)", "No hay camino caminante."],
            ["Sinéresis (une dos vocales que no forman diptongo)", "La casa de la tía Gancho, fama tenía merecida."],
            ["Diéresis (rompe un diptongo en dos sílabas)", "Cuando yo aprenda a hablar un idioma."]
          ]
        },
        {
          title: "Infinitivo Personal",
          headers: ["Português", "Español"],
          rows: [
            ["Ele comprou uma casa para nós irmos nos fins de semana.", "Él compró una casa para nosotros ir en los fines de semana. / ...para que nosotros vayamos..."],
            ["Por não terem/ter passaporte, eles não puderam viajar.", "Por no tener pasaporte, ellos no pudieron viajar."]
          ]
        }
      ],
      notes: ["En español no hay infinitivo conjugado como en portugués."],
      exercises: [
        { type: "mc", q: "Complete com presente del subjuntivo: Le pedimos que _______ a la reunión. (venir - a)", options: ["venga", "viene", "vendrá"], correct: 0 },
        { type: "fill", q: "Completa: Espero que ________ todo bien. (estar)", answer: "esté" },
        { type: "fill", q: "Completa: Es importante que tú ________ mañana. (venir)", answer: "vengas" },
        { type: "mc", q: "Qual expressão se usa para começar uma carta formal?", options: ["Estimado Sr. Rodríguez:", "¡Hola, wey!", "Chau"], correct: 0 },
        { type: "mc", q: "Qual expressão se usa para terminar uma carta formal?", options: ["Atentamente.", "Nos vemos", "Chévere"], correct: 0 },
        { type: "translate", from: "pt", text: "Aguardamos notícias suas.", answer: "Esperamos noticias suyas." },
        { type: "translate", from: "pt", text: "Estamos à disposição para qualquer dúvida.", answer: "Estamos a su servicio para cualquier pregunta/duda." },
        { type: "order", items: ["escribo", "porque", "extrañamos", "le", "los"], correctOrder: [3, 0, 1, 4, 2] },
        { type: "listen", audioText: "Le escribo para agradecerle por haberme contestado pronto y haber resuelto nuestros problemas con el sistema.", q: "Por que a autora agradece o Sr. Saavedra?", answer: "Por haber contestado pronto y resuelto los problemas con el sistema." },
        { type: "speak", prompt: "Repita em voz alta:", target: "Estamos a su servicio para cualquier pregunta." }
      ]
    },
    {
      id: "a6", order: 6, title: "Intercambio", subtitle: "Vida acadêmica no exterior e o pretérito anterior",
      dialogue: [
        { who: "text", es: "Evandro luego que hubo empezado sus clases en España cuando estaba de intercambio en 2002, tuvo algunos problemas en la escuela donde estaba estudiando. Sus compañeros de clase eran muy inteligentes y lo recibieron muy bien desde el primer día, pero él estaba teniendo algunos problemas con el idioma y no podía comunicarse muy bien con sus nuevos amigos. Apenas hubo hablado con su profesora sobre todos sus problemas, tuvo una buena idea. Perder la vergüenza y tratar de practicar con sus colegas, y realmente hacer todo lo que podía para aprender mucho mientras estaba en este viaje inolvidable. Empezó a salir con todos de su clase, ir a las fiestas, a restaurantes, ver la tele, películas en español, escuchar temas que le gustaban y hacer de todo. Apenas hubo pasado un mes de mucho esfuerzo, Evandro ya se dio cuenta de que estaba hablando mucho mejor y ya podía comunicarse bien con sus amigos, teniendo de esta forma, un intercambio mejor imposible." }
      ],
      vocabulary: [
        {
          category: "Intercambio",
          items: [
            { es: "Viaje", pt: "Viagem" }, { es: "Pasaje", pt: "Passagem" }, { es: "Equipaje", pt: "Bagagem" },
            { es: "Maleta", pt: "Mala" }, { es: "Mochila", pt: "Mochila" }, { es: "Taxi/Remís", pt: "Táxi" },
            { es: "Chófer", pt: "Motorista" }, { es: "Residencia", pt: "Residência" },
            { es: "Hospedaje/Alojamiento", pt: "Hospedagem/Alojamento" }, { es: "Piso (compartido)", pt: "Apto compartilhado" },
            { es: "Alquiler", pt: "Aluguel" }, { es: "Clase", pt: "Aula" }, { es: "Materia", pt: "Matéria" },
            { es: "Curso", pt: "Curso" }, { es: "Libro", pt: "Livro" }, { es: "Horario", pt: "Horário" },
            { es: "Prueba", pt: "Prova" }, { es: "Subte/Metro", pt: "Metrô" }, { es: "Autobús", pt: "Ônibus" },
            { es: "Escuela", pt: "Escola" }, { es: "Universidad", pt: "Universidade" },
            { es: "Facultad", pt: "Faculdade" }, { es: "Colega/Compañero", pt: "Colega" }
          ]
        },
        {
          category: "En las clases",
          items: [
            { es: "Tengo una pregunta sobre…" }, { es: "Tengo una duda." },
            { es: "No sé si estoy en el aula/la clase correcta." }, { es: "¿Cuál es la materia de la prueba?" },
            { es: "¿Puede escribir eso en el pizarrón/la pizarra?" }, { es: "¿Puedo ver tus apuntes?" },
            { es: "No puedo venir el día de la prueba." }, { es: "¿Puedo hacer una prueba sustitutiva?" },
            { es: "¿Se puede usar el diccionario en la prueba?" }
          ]
        },
        {
          category: "Qué puede decir el profesor",
          items: [
            { es: "Va a haber prueba el viernes." }, { es: "La prueba vale 10 puntos." },
            { es: "Abran el libro en la página…" }, { es: "Trabajen en pares/grupos de 4." },
            { es: "¿Tienen alguna duda?" }, { es: "Hay que aprendérselo de memoria." }
          ]
        }
      ],
      grammar: [
        {
          title: "Pretérito Anterior (Verbo haber - pret. perf. simple + participio)",
          headers: ["Pronombre", "Forma"],
          rows: [
            ["Yo", "hube"], ["Tú/Vos", "hubiste"], ["Él/Ella/Usted", "hubo"],
            ["Nosotros", "hubimos"], ["Vosotros", "hubisteis"], ["Ellos/Ellas/Ustedes", "hubieron"]
          ]
        }
      ],
      notes: [
        "Prácticamente solo usado en textos escritos (cultos y elegantes).",
        "Marcadores temporales: Apenas · Así que · Cuando · En cuanto · Luego que · No bien · Tan pronto como · Una vez que.",
        "Ejemplo: Tan pronto como hubo comido, María se marchó a su sitio de trabajo.",
        "Uso cotidiano hoy en día (substitutos): Cuando había terminado de cenar, se acostó. / En cuanto terminó de cenar, se acostó."
      ],
      exercises: [
        { type: "fill", q: "Completa con pretérito anterior: Apenas yo _______ hecho la tarea, salí. (haber)", answer: "hube" },
        { type: "fill", q: "Completa: Tan pronto como nosotros _______ terminado, nos fuimos. (haber)", answer: "hubimos" },
        { type: "mc", q: "Completa: Cuando ellos _______ salido para el evento, Luis llegó.", options: ["hubieron", "hubimos", "hube"], correct: 0 },
        { type: "mc", q: "'Equipaje' em português é:", options: ["Bagagem", "Passagem", "Aluguel"], correct: 0 },
        { type: "mc", q: "'Materia' em português é:", options: ["Matéria", "Prova", "Aula"], correct: 0 },
        { type: "translate", from: "pt", text: "Tenho uma dúvida sobre a prova.", answer: "Tengo una duda sobre la prueba." },
        { type: "translate", from: "pt", text: "Posso ver suas anotações?", answer: "¿Puedo ver tus apuntes?" },
        { type: "order", items: ["hubo", "María", "que", "comido,", "marchó", "se", "Tan", "pronto"], correctOrder: [6, 7, 0, 3, 1, 5, 4, 2] },
        { type: "listen", audioText: "Apenas hubo pasado un mes de mucho esfuerzo, Evandro ya se dio cuenta de que estaba hablando mucho mejor.", q: "O que Evandro percebeu depois de um mês de esforço?", answer: "Que estaba hablando mucho mejor." },
        { type: "speak", prompt: "Repita em voz alta:", target: "Perder la vergüenza y tratar de practicar con sus colegas." }
      ]
    },
    {
      id: "a7", order: 7, title: "Currículo", subtitle: "Como montar um CV atrativo e o futuro perfecto",
      dialogue: [
        { who: "text", es: "10 consejos para hacer un currículum atractivo: 1 - Sea honesto. 2 - Haga un currículo de 1 página. 3 - Añada sus datos básicos. 4 - Especifique el nivel de sus habilidades. 5 - Especifique a cada puesto ocupado, las misiones y las tareas realizadas. 6 - Resalte sus experiencias y habilidades. 7 - Construya su CV en función del puesto al que aspira. 8 - Utilice un CV cronológico. 9 - Indique sus informaciones de contacto. 10 - Añada sus redes sociales." }
      ],
      vocabulary: [
        {
          category: "Frases útiles (Currículo)",
          items: [
            { es: "Yo estudié en...." }, { es: "Me recibí/gradué en…." }, { es: "Hice especialización en…" },
            { es: "También hice cursos de/en…" }, { es: "Hablo (3) idiomas." },
            { es: "Mientras estaba en la universidad, tuve la oportunidad de trabajar para…" },
            { es: "Hice la práctica en la…" }, { es: "Trabajé como…" }, { es: "Trabajé como voluntario en…" },
            { es: "Yo hice maestría en…" }, { es: "Durante el posgrado estudié…" }, { es: "Publiqué trabajos en…" },
            { es: "Viví fuera por 3 años." }, { es: "Mi trabajo incluía…" }, { es: "Me hacía cargo de…" },
            { es: "Era responsable por el desarrollo de…" }, { es: "Colaboré con la implementación de un nuevo…" },
            { es: "Adquirí mucha experiencia con…" }, { es: "Aprendí mucho sobre…" },
            { es: "Mi tesis trataba sobre…" }, { es: "Defendí tesis de doctorado en…" },
            { es: "Luego me promovieron a…" }, { es: "De (asistente) fui para (gerente)." },
            { es: "Salí de la empresa en que trabajaba porque…" }, { es: "Tengo amplia experiencia en casi todas las áreas de..." }
          ]
        },
        {
          category: "Informaciones para el currículo",
          items: [
            { es: "Datos personales" }, { es: "Cargo/puesto deseado" }, { es: "Contacto" },
            { es: "Formación (académica)/Estudios" }, { es: "Formación complementaria" },
            { es: "Habilidades y destrezas" }, { es: "Experiencia profesional/laboral" },
            { es: "Idiomas" }, { es: "Resumen profesional" }, { es: "Otros datos de interés" }
          ]
        },
        {
          category: "Asignaturas",
          items: [
            { es: "Matemáticas" }, { es: "Lengua" }, { es: "Arte/Dibujo" }, { es: "Biología" },
            { es: "Geografía" }, { es: "Química" }, { es: "Religión" }, { es: "Informática" },
            { es: "Tecnología" }, { es: "Educación Física" }, { es: "Ciencias" }, { es: "Música" },
            { es: "Historia" }, { es: "Física" }
          ]
        }
      ],
      grammar: [
        {
          title: "Futuro Perfecto (Indicativo)",
          headers: ["Pronombre", "Forma de haber"],
          rows: [
            ["Yo", "habré"], ["Tú/Vos", "habrás"], ["Él/Ella/Usted", "habrá"],
            ["Nosotros", "habremos"], ["Vosotros", "habréis"], ["Ellos/Ellas/Ustedes", "habrán"]
          ]
        }
      ],
      notes: [
        "Uso 1: Indicar una acción futura anterior a otra futura. Ex.: Julieta ya se habrá marchado para la universidad cuando su novio llegue del trabajo.",
        "Uso 2: Hacer preguntas retóricas en el pasado. Ex.: ¿Habrá ido a casa de un amigo?"
      ],
      exercises: [
        { type: "fill", q: "Completa: Yo _______ terminado la facultad el año que viene. (haber)", answer: "habré" },
        { type: "fill", q: "Completa: Nosotros _______ terminado el proyecto para entonces.", answer: "habremos" },
        { type: "mc", q: "Completa: ¿Qué _______ hecho después de la fiesta?", options: ["habrán", "habré", "habrás"], correct: 0 },
        { type: "mc", q: "'Me recibí/gradué en...' se usa para falar sobre:", options: ["Formación académica", "Experiencia atual", "Idiomas"], correct: 0 },
        { type: "mc", q: "'Química' em espanhol é:", options: ["Química", "Ciencias", "Física"], correct: 0 },
        { type: "translate", from: "pt", text: "Trabalhei como voluntário durante dois anos.", answer: "Trabajé como voluntario durante dos años." },
        { type: "translate", from: "pt", text: "Adquiri muita experiência com vendas.", answer: "Adquirí mucha experiencia con ventas." },
        { type: "order", items: ["curso", "de", "1", "página", "un", "Haga"], correctOrder: [5, 4, 2, 0, 1, 3] },
        { type: "listen", audioText: "Especifique el nivel de sus habilidades.", q: "O que o conselho 4 recomenda especificar?", answer: "El nivel de las habilidades." },
        { type: "speak", prompt: "Repita em voz alta:", target: "Tengo amplia experiencia en casi todas las áreas de..." }
      ]
    },
    {
      id: "a8", order: 8, title: "Entrevista", subtitle: "Entrevista de trabalho e o condicional perfecto",
      dialogue: [
        { who: "A", es: "¡Gracias por haber venido!" },
        { who: "B", es: "¡Yo que les agradezco por la oportunidad! Me interesé mucho por la compañía, porque creo que tiene todo que ver conmigo y me encuadro bien en este cargo." },
        { who: "A", es: "Estamos felices de escuchar eso y le agradecemos por su interés en formar parte del equipo. Tuvimos buena impresión de usted y de su experiencia laboral. Usted puede empezar a trabajar con nosotros inmediatamente." },
        { who: "B", es: "¡Qué buena noticia! Si lo hubiera sabido, ya les habría enviado mi currículo mucho tiempo atrás." },
        { who: "A", es: "¡Nos alegramos! ¡Sea bienvenido!" },
        { who: "B", es: "¡Muchísimas gracias por la oportunidad que me están ofreciendo! No se van a arrepentir." }
      ],
      vocabulary: [
        {
          category: "Preguntas y comentarios del entrevistador",
          items: [
            { es: "Gracias por haber venido." }, { es: "¿Puede hablar un poco sobre su formación?" },
            { es: "Hábleme un poco sobre su experiencia en/como…" }, { es: "¿Qué le atrajo en este cargo?" },
            { es: "¿Qué estudió/cursó en la universidad?" }, { es: "¿Tiene conocimientos de/en…?" },
            { es: "¿Qué sueldo tiene actualmente?" }, { es: "¿Qué nivel/categoría salarial usted tiene en mente?" },
            { es: "Tuvimos una buena impresión de usted." }, { es: "¿Cuándo puede empezar?" },
            { es: "Nos pondremos/Entraremos en contacto." }, { es: "No estamos necesitando a nadie en este momento." }
          ]
        },
        {
          category: "Preguntas y comentarios del entrevistado",
          items: [
            { es: "Estoy en el momento buscando un cargo en…" }, { es: "Creo que me encuadro bien en este cargo porque…" },
            { es: "Creo que mis puntos fuertes son…" }, { es: "Tengo mucha experiencia en…" },
            { es: "Adjunté algunas recomendaciones de empleadores anteriores en mi currículo." },
            { es: "En mi cargo anterior estaba recibiendo…" }, { es: "Es una propuesta interesante." },
            { es: "¿Puedo darle una respuesta al comienzo de la semana?" }, { es: "Puedo empezar inmediatamente/hoy mismo." }
          ]
        }
      ],
      grammar: [
        {
          title: "Condicional Perfecto (Indicativo)",
          headers: ["Uso", "Exemplo"],
          rows: [
            ["Acciones finalizadas (invitaciones, deseos, sugerencias)", "Habrías podido avisarnos."],
            ["Preguntas retóricas/suposiciones sobre el pasado", "¿Dónde habría estado Juan?"],
            ["Condicional 3/perfecto (con 'si')", "Si ayer no hubiera llovido, Juan y yo habríamos ido a la playa."]
          ]
        },
        {
          title: "Verbo haber (Condicional simple - indicativo)",
          headers: ["Pronombre", "Forma"],
          rows: [
            ["Yo", "habría"], ["Tú/Vos", "habrías"], ["Él/Ella/Usted", "habría"],
            ["Nosotros", "habríamos"], ["Vosotros", "habríais"], ["Ellos/Ellas/Ustedes", "habrían"]
          ]
        }
      ],
      notes: ["Estructura: Verbo haber (Condicional simple) + Verbo principal (participio)."],
      exercises: [
        { type: "fill", q: "Completa: Yo _______ hecho diferente en otra situación. (haber)", answer: "habría" },
        { type: "fill", q: "Completa: Ellos no _______ querido venir. (haber)", answer: "habrían" },
        { type: "mc", q: "Completa: Si lo hubiera sabido, ya les _______ enviado mi currículo.", options: ["habría", "habré", "he"], correct: 0 },
        { type: "mc", q: "'Sueldo' em português é:", options: ["Salário", "Cargo", "Currículo"], correct: 0 },
        { type: "mc", q: "'¿Qué le atrajo en este cargo?' pergunta sobre:", options: ["Motivação para o cargo", "Salário atual", "Formação"], correct: 0 },
        { type: "translate", from: "pt", text: "Tenho boa impressão da empresa.", answer: "Tengo buena impresión de la empresa." },
        { type: "translate", from: "pt", text: "Posso começar imediatamente.", answer: "Puedo empezar inmediatamente." },
        { type: "order", items: ["venido", "haber", "Gracias", "por"], correctOrder: [2, 3, 1, 0] },
        { type: "listen", audioText: "¡Qué buena noticia! Si lo hubiera sabido, ya les habría enviado mi currículo mucho tiempo atrás.", q: "O que o candidato teria feito se soubesse antes?", answer: "Habría enviado su currículo mucho tiempo atrás." },
        { type: "speak", prompt: "Repita em voz alta:", target: "¡Muchísimas gracias por la oportunidad que me están ofreciendo!" }
      ]
    },
    {
      id: "a9", order: 9, title: "Medio Ambiente", subtitle: "Natureza, geografia e o pretérito perfecto del subjuntivo",
      dialogue: [
        { who: "text", es: "El calentamiento global — 10 consejos: 1. Reduce el consumo de agua. 2. Planta un árbol. 3. Educa a los más jóvenes. 4. Modera el uso del vehículo y reduce el consumo del aire acondicionado. 5. Evita usar en exceso la plancha, el calentador de agua o la lavadora. 6. Usa habitualmente papel reciclado y reduce el consumo de papel. 7. Recicla la basura. 8. No consumas animales exóticos como tortugas e iguanas, y pescado de tamaños pequeños. 9. Exige del gobierno la gestión sostenible a largo plazo de los recursos naturales. 10. Minimiza el uso de productos químicos como aerosoles, fertilizantes, etc." }
      ],
      vocabulary: [
        {
          category: "Geografía - Medio Ambiente - Naturaleza",
          items: [
            { es: "Sistema solar" }, { es: "Planeta" }, { es: "Tornado" }, { es: "Rayo" }, { es: "Trueno" },
            { es: "Terremoto" }, { es: "Termómetro" }, { es: "Capa de ozono" }, { es: "Sombra" },
            { es: "Tierra" }, { es: "Atmósfera" }, { es: "Roca" }, { es: "Cielo" }, { es: "Región" },
            { es: "Línea Costera" }, { es: "Cascada" }, { es: "Evolución" }, { es: "Sol" }, { es: "Luna" },
            { es: "Paisaje" }, { es: "Recurso natural" }, { es: "Elemento" }, { es: "Renovable/No renovable" },
            { es: "Relieve" }, { es: "Mineral" }, { es: "Vegetación" }, { es: "Temperatura" },
            { es: "Precipitación" }, { es: "Viento" }, { es: "Suelo", pt: "Solo" }, { es: "Volcán", pt: "Vulcão" },
            { es: "Glaciar", pt: "Geleira" }, { es: "Hielo marino", pt: "Gelo marinho" }, { es: "Irradiación" },
            { es: "Océano" }, { es: "Nivel del mar" }, { es: "Árbol" }, { es: "Flor" }, { es: "Hoja" },
            { es: "Planta" }, { es: "Fauna" }, { es: "Flora" }, { es: "Densidad" }, { es: "Nube" },
            { es: "Humedad" }, { es: "Insolación" }, { es: "Presión atmosférica" }, { es: "Ecosistema" },
            { es: "Desierto" }, { es: "Selva" }, { es: "Bosque" }, { es: "Matorral", pt: "Matagal" },
            { es: "Costa" }, { es: "Humedal", pt: "Pântano" }, { es: "Río" }, { es: "Lago" }, { es: "Mar" },
            { es: "Meteoro" }, { es: "Estrella" }
          ]
        },
        {
          category: "El sistema solar",
          items: [
            { es: "Sol" }, { es: "Mercurio" }, { es: "Venus" }, { es: "Tierra" }, { es: "Marte" },
            { es: "Júpiter" }, { es: "Saturno" }, { es: "Urano" }, { es: "Neptuno" }, { es: "Plutón" }
          ]
        },
        {
          category: "Palabras biacentuales",
          items: [
            { es: "Afrodisíaco/Afrodisiaco" }, { es: "Cardíaco/Cardiaco" }, { es: "Chófer/Chofer" },
            { es: "Fútbol/Futbol" }, { es: "Cóctel/Coctel" }, { es: "Vídeo/Video" }, { es: "Kárate/Karate" },
            { es: "Electrólisis/Electrolisis" }, { es: "Endoscopía/Endoscopia" }, { es: "Rinoplastía/Rinoplastia" },
            { es: "Período/Periodo" }, { es: "Búmeran/Bumerán" }, { es: "Olimpíada/Olimpiada" },
            { es: "Maníaco/Maniaco" }, { es: "Píxel/Pixel" }
          ]
        }
      ],
      grammar: [
        {
          title: "Pretérito Perfecto (Subjuntivo) — Haber (presente subj.) + participio",
          headers: ["Pronombre", "Forma"],
          rows: [
            ["Yo", "haya"], ["Tú/Vos", "hayas"], ["Él/Ella/Usted", "haya"],
            ["Nosotros", "hayamos"], ["Vosotros", "hayáis"], ["Ellos/Ellas/Ustedes", "hayan"]
          ]
        }
      ],
      notes: [
        "Usado para acciones finalizadas que siguen vinculadas al presente o que finalizarán en el futuro.",
        "Ex.: Espero que te haya ido bien en el examen. / Cuando hayas limpiado los cristales, empieza con los platos."
      ],
      exercises: [
        { type: "fill", q: "Completa: Espero que te _______ ido bien en el examen. (haber)", answer: "haya" },
        { type: "fill", q: "Completa: Cuando yo _______ corregido todos los exámenes, os daré los resultados.", answer: "haya" },
        { type: "mc", q: "Completa: Me duele que _______ hecho eso.", options: ["hayas", "has", "habías"], correct: 0 },
        { type: "mc", q: "'Volcán' em português é:", options: ["Vulcão", "Vento", "Nuvem"], correct: 0 },
        { type: "mc", q: "Qual grafia também é aceita para 'Vídeo'?", options: ["Video", "Vidio", "Videó"], correct: 0 },
        { type: "translate", from: "pt", text: "A camada de ozônio está ameaçada.", answer: "La capa de ozono está amenazada." },
        { type: "translate", from: "pt", text: "Precisamos reciclar o lixo.", answer: "Necesitamos reciclar la basura." },
        { type: "order", items: ["árbol", "un", "Planta"], correctOrder: [2, 1, 0] },
        { type: "listen", audioText: "Recicla la basura. No consumas animales exóticos como tortugas e iguanas.", q: "Cite dois conselhos citados no áudio.", answer: "Reciclar la basura y no consumir animales exóticos." },
        { type: "speak", prompt: "Repita em voz alta:", target: "Reduce el consumo de agua. Planta un árbol." }
      ]
    },
    {
      id: "a10", order: 10, title: "Entretenimiento", subtitle: "Lazer, diversão e o pretérito pluscuamperfecto del subjuntivo",
      dialogue: [
        { who: "text", es: "Trecho da canção 'Si no te hubieras ido' (Maná): Te extraño más que nunca y no sé qué hacer. Despierto y te recuerdo al amanecer. Me espera otro día por vivir sin ti. El espejo no miente me veo tan diferente. Me haces falta tú. La gente pasa y pasa siempre tan igual. El ritmo de la vida me parece mal. Era tan diferente cuando estabas tú. No hay nada más difícil que vivir sin ti. Sufriendo en la espera de verte llegar. Si no te hubieras ido sería tan feliz." }
      ],
      vocabulary: [
        {
          category: "Tipos de entretenimiento",
          items: [
            { es: "Hacer ejercicios" }, { es: "Mirar/Ver programas de televisión/películas/series/telenovelas" },
            { es: "Escuchar música" }, { es: "Jugar juegos" }, { es: "Dibujar" }, { es: "Cantar (karaoke)" },
            { es: "Leer un libro/historietas/noticias/artículos" }, { es: "Salir con los amigos" },
            { es: "Navegar por internet" }, { es: "Ir a fiestas" }, { es: "Ir de compras" }, { es: "Ir de paseo" },
            { es: "Bailar" }, { es: "Tomar un curso" }, { es: "Ir al cine" }, { es: "Ir al teatro" },
            { es: "Cocinar" }, { es: "Ir a viajar" }, { es: "Ir a un concierto" }, { es: "Salir para comer en restaurantes" }
          ]
        },
        {
          category: "Frases útiles",
          items: [
            { es: "¿Vamos a salir?" }, { es: "¿Quieren hacer algo esta noche?" }, { es: "¿Vamos a ver una peli?" },
            { es: "¿Quieres ir al cine conmigo?" }, { es: "Quiero ir al gimnasio." },
            { es: "Conozco un lugar muy bueno para bailar." }, { es: "¿Qué tipo de película te gusta más?" },
            { es: "La fiesta estuvo buenísima." }, { es: "¿Te gusta leer?" }, { es: "¿Viste la telenovela...?" },
            { es: "¿Te gustaría ir al concierto de Maluma?" }, { es: "Mi pasatiempo favorito es jugar en la compu." }
          ]
        }
      ],
      grammar: [
        {
          title: "Oración Subordinada",
          headers: ["Exemplo"],
          rows: [
            ["Lo hice cuando me dijiste."], ["Me gusta que vengas pronto."], ["El libro que me prestaste, era muy bueno."]
          ]
        },
        {
          title: "Pretérito Pluscuamperfecto (Subjuntivo)",
          headers: ["Pronombre", "Forma"],
          rows: [
            ["Yo", "hubiera/hubiese"], ["Tú/Vos", "hubieras/hubieses"], ["Él/Ella/Usted", "hubiera/hubiese"],
            ["Nosotros", "hubiéramos/hubiésemos"], ["Vosotros", "hubierais/hubieseis"], ["Ellos/Ellas/Ustedes", "hubieran/hubiesen"]
          ]
        }
      ],
      notes: [
        "Expresa acciones que tuvieron lugar antes de un momento determinado del pasado, o acciones que podrían haber tenido lugar en el pasado en otras circunstancias.",
        "Ex.: Me extrañó mucho que me hubieras mandado una postal de la Cordillera Cantábrica."
      ],
      exercises: [
        { type: "fill", q: "Completa: Me extrañó mucho que me _______ mandado una postal. (haber)", answer: "hubieras" },
        { type: "fill", q: "Completa: Si me lo _______ dicho antes, habría ido contigo. (haber)", answer: "hubieras" },
        { type: "mc", q: "Completa: Probablemente me _______ encantado la visita.", options: ["hubiera", "había", "habré"], correct: 0 },
        { type: "mc", q: "'Pasatiempo' em português é:", options: ["Passatempo", "Ritmo", "Concerto"], correct: 0 },
        { type: "mc", q: "Qual frase pergunta sobre gostos de filme?", options: ["¿Qué tipo de película te gusta más?", "¿Cuánto cuesta?", "¿Dónde está el probador?"], correct: 0 },
        { type: "translate", from: "pt", text: "Meu passatempo favorito é ler.", answer: "Mi pasatiempo favorito es leer." },
        { type: "translate", from: "pt", text: "Você gostaria de ir ao show?", answer: "¿Te gustaría ir al concierto?" },
        { type: "order", items: ["Quieren", "hacer", "algo", "esta", "noche"], correctOrder: [0, 1, 2, 3, 4] },
        { type: "listen", audioText: "Te extraño más que nunca y no sé qué hacer. Despierto y te recuerdo al amanecer.", q: "O que a pessoa sente na música?", answer: "Extraña (sente saudades) e não sabe o que fazer." },
        { type: "speak", prompt: "Repita em voz alta:", target: "Si no te hubieras ido sería tan feliz." }
      ]
    },
    {
      id: "a11", order: 11, title: "Hotel", subtitle: "Check-in, objetos do quarto e o futuro perfecto compuesto de subjuntivo",
      dialogue: [
        { who: "A", es: "¡Buen día! Tengo una reserva para hoy a nombre de Luciano Pérez." },
        { who: "B", es: "Sí, señor. Es una habitación doble por 5 noches, ¿verdad?" },
        { who: "A", es: "Sí, eso mismo." },
        { who: "B", es: "Su pasaporte, por favor." },
        { who: "A", es: "Aquí lo tiene." },
        { who: "B", es: "¡Perfecto! Rellene esta ficha con sus datos, por favor, y luego les acompañarán a su habitación." },
        { who: "A", es: "Listo. ¿A qué hora es el desayuno?" },
        { who: "B", es: "De las 7h30 a las 10h45." },
        { who: "A", es: "¡Muchísimas gracias!" },
        { who: "B", es: "¡Gracias a ustedes y que disfruten de sus vacaciones!" }
      ],
      vocabulary: [
        {
          category: "Habitación",
          items: [
            { es: "Simple/Individual" }, { es: "Doble" }, { es: "Matrimonio" }, { es: "Con vistas al mar" },
            { es: "En la parte delantera/trasera" }, { es: "En un piso alto/bajo" }, { es: "Con cama supletoria" },
            { es: "Con cuna" }, { es: "Con baño" }, { es: "Con balcón/terraza" }, { es: "Con aire acondicionado" },
            { es: "Con calefacción" }
          ]
        },
        {
          category: "Objetos del hotel",
          items: [
            { es: "Lámpara", pt: "Abajur" }, { es: "Cojín", pt: "Almofada" }, { es: "Calefacción" },
            { es: "Aire acondicionado" }, { es: "Colgadores/Perchas", pt: "Cabides" }, { es: "Silla", pt: "Cadeira" },
            { es: "Timbre", pt: "Campainha" }, { es: "Cartel", pt: "Aviso" }, { es: "Frazada/Cobija/Manta", pt: "Coberta" },
            { es: "Colcha/Cubrecama", pt: "Colcha" }, { es: "Colchón", pt: "Colchão" },
            { es: "Mando a distancia/Control remoto" }, { es: "Ducha", pt: "Chuveiro" }, { es: "Cuenta/Factura", pt: "Conta/Nota" },
            { es: "Vaso", pt: "Copo" }, { es: "Mesita de noche/Velador", pt: "Mesa de cabeceira" },
            { es: "Espejo", pt: "Espelho" }, { es: "Cerradura", pt: "Fechadura" }, { es: "Funda", pt: "Fronha" },
            { es: "Sábanas", pt: "Lençóis" }, { es: "Cajón", pt: "Gaveta" }, { es: "Interruptor/Switch" },
            { es: "Ventana", pt: "Janela" }, { es: "Bombilla/Ampolleta", pt: "Lâmpada" },
            { es: "Picaporte/Manija", pt: "Maçaneta" }, { es: "Asidero", pt: "Barra de apoio" },
            { es: "Wáter/Inodoro", pt: "Vaso sanitário" }, { es: "Enchufe", pt: "Tomada" }, { es: "Lavatorio", pt: "Pia" },
            { es: "Alfombra", pt: "Tapete" }, { es: "Televisor" }, { es: "Pestillo", pt: "Tranca" },
            { es: "Ventilación" }, { es: "Voltaje" }, { es: "Minibar", pt: "Frigobar" }, { es: "Lecho/Cama" },
            { es: "Cable", pt: "Cabo" }, { es: "Cargador", pt: "Carregador" }, { es: "Supresor de picos", pt: "Régua" },
            { es: "Pila", pt: "Pilha" }, { es: "Plancha de pelo", pt: "Chapinha" }, { es: "Secador de pelo", pt: "Secador" }
          ]
        },
        {
          category: "Frases útiles",
          items: [
            { es: "¿Tiene habitaciones disponibles?" }, { es: "Quisiera una habitación simple/individual/doble…" },
            { es: "¿Cuál es el precio por noche?" }, { es: "¿Está incluso el desayuno?" },
            { es: "¿Puedo ver la habitación?" }, { es: "¿A qué hora debo desocupar la habitación?" },
            { es: "Tengo una reserva para hoy a nombre de…" }, { es: "¿Podría darme mi cuenta?" },
            { es: "Rellene esta ficha con sus datos, por favor." }, { es: "¿Consumieron algo del minibar?" }
          ]
        }
      ],
      grammar: [
        {
          title: "Futuro Perfecto (Compuesto - Subjuntivo)",
          headers: ["Pronombre", "Forma"],
          rows: [
            ["Yo", "hubiere"], ["Tú/Vos", "hubieres"], ["Él/Ella/Usted", "hubiere"],
            ["Nosotros", "hubiéremos"], ["Vosotros", "hubiereis"], ["Ellos/Ellas/Ustedes", "hubieren"]
          ]
        }
      ],
      notes: [
        "Tiempo verbal inusual en diálogos cotidianos; se usa en espacios literarios y profesionales/jurídicos.",
        "Ex.: Si en abril no hubiere vuelto, no me esperéis para mayo. (equivalente cotidiano: haya vuelto)"
      ],
      exercises: [
        { type: "fill", q: "Completa: Si en abril no _______ vuelto, no me esperéis. (haber - futuro subj.)", answer: "hubiere" },
        { type: "mc", q: "Qual objeto do hotel é 'Almofada'?", options: ["Cojín", "Colchón", "Funda"], correct: 0 },
        { type: "mc", q: "Qual objeto do hotel é 'Lençóis'?", options: ["Sábanas", "Cobija", "Cortina"], correct: 0 },
        { type: "mc", q: "'Wáter/Inodoro' em português é:", options: ["Vaso sanitário", "Pia", "Chuveiro"], correct: 0 },
        { type: "fill", q: "Completa: Tengo una _______ para hoy a nombre de Luciano Pérez.", answer: "reserva" },
        { type: "translate", from: "pt", text: "Gostaria de um quarto duplo com vista para o mar.", answer: "Quisiera una habitación doble con vistas al mar." },
        { type: "translate", from: "pt", text: "A que horas devo desocupar o quarto?", answer: "¿A qué hora debo desocupar la habitación?" },
        { type: "order", items: ["ficha", "sus", "con", "esta", "Rellene", "datos"], correctOrder: [4, 3, 2, 1, 5, 0] },
        { type: "listen", audioText: "Rellene esta ficha con sus datos, por favor, y luego les acompañarán a su habitación.", q: "O que o hóspede deve fazer antes de ir ao quarto?", answer: "Rellenar la ficha con sus datos." },
        { type: "speak", prompt: "Repita em voz alta:", target: "¡Gracias a ustedes y que disfruten de sus vacaciones!" }
      ]
    },
    {
      id: "a12", order: 12, title: "Deportes", subtitle: "Esportes, numerais especiais e o resumo dos condicionais",
      dialogue: [
        { who: "text", es: "Estoy pensando en empezar a practicar algún deporte porque sé que además de hacer mejorar la capacidad física, también es bueno para el psicológico, porque la persona se siente mejor con su cuerpo y tiene la mente más despejada. El deporte no puede ser una cosa mala para tu vida, porque puede ser un pasatiempo, juego, diversión, competición y hacerte tener más disciplina. Estaba pensando en algún deporte externo y que también pueda ser practicado en el interior, como el vóleibol, pero después pensé mejor y he decidido que voy a nadar, porque la natación es buenísima para la salud y para todo lo demás. Estoy muy ansiosa para empezar. Si tuviera tiempo, empezaría hoy mismo, pero creo que empezaré el próximo mes pues estaré trabajando un tercio del tiempo que estoy trabajando en este momento. Después les cuento más novedades." }
      ],
      vocabulary: [
        {
          category: "Deportes",
          items: [
            { es: "Alpinismo" }, { es: "Atletismo" }, { es: "Automovilismo" }, { es: "Básquet/Baloncesto" },
            { es: "Béisbol" }, { es: "Boxeo" }, { es: "Buceo" }, { es: "Kárate" }, { es: "Ciclismo" },
            { es: "Críquet" }, { es: "Equitación" }, { es: "Esgrima" }, { es: "Esquí (acuático)" },
            { es: "Fútbol/Balonpié" }, { es: "Fútbol americano" }, { es: "Gimnasia artística/rítmica" },
            { es: "Golf" }, { es: "Halterofilia" }, { es: "Hockey" }, { es: "Hándbol/Balonmano" },
            { es: "Hipismo" }, { es: "Judo" }, { es: "Montañismo" }, { es: "Motociclismo" }, { es: "Natación" },
            { es: "Paracaidismo" }, { es: "Parapente" }, { es: "Paragüismo" }, { es: "Patinaje" },
            { es: "Ping-Pong" }, { es: "Remo" }, { es: "Rugby" }, { es: "Surf" }, { es: "Taekwondo" },
            { es: "Tenis" }, { es: "Tiro con arco" }, { es: "Tiro al blanco" }, { es: "Vóleibol/Balonvolea" }
          ]
        },
        {
          category: "Numerales fraccionarios/partitivos",
          items: [
            { es: "1/2", pt: "medio" }, { es: "1/3", pt: "un tercio" }, { es: "1/4", pt: "un cuarto" },
            { es: "1/5", pt: "un quinto" }, { es: "1/6", pt: "un sexto" }, { es: "1/7", pt: "un séptimo" },
            { es: "1/8", pt: "un octavo" }, { es: "1/9", pt: "un noveno" }, { es: "1/10", pt: "un décimo" },
            { es: "1/11", pt: "un onceavo" }, { es: "1/32", pt: "un treintaydosavo" }, { es: "2/5", pt: "dos quintas partes" }
          ]
        },
        {
          category: "Numerales multiplicativos",
          items: [
            { es: "2", pt: "doble/duplo" }, { es: "3", pt: "triple/triplo" }, { es: "4", pt: "cuádruple/cuádruplo" },
            { es: "5", pt: "quíntuple" }, { es: "6", pt: "séxtuple" }, { es: "7", pt: "séptuple" },
            { es: "8", pt: "óctuple" }, { es: "9", pt: "nónuplo" }, { es: "10", pt: "décuplo" },
            { es: "100", pt: "céntuplo" }
          ]
        },
        {
          category: "Colectivos numéricos",
          items: [
            { es: "1", pt: "solo" }, { es: "2", pt: "dúo/dueto/par/pareja" }, { es: "3", pt: "trío/terceto" },
            { es: "4", pt: "cuarteto" }, { es: "5", pt: "quinteto" }, { es: "6", pt: "sexteto" },
            { es: "10", pt: "decena" }, { es: "12", pt: "docena" }, { es: "15", pt: "quincena" },
            { es: "20", pt: "veintena" }, { es: "40", pt: "cuarentena" }, { es: "100", pt: "centena" }, { es: "1.000", pt: "milenio" }
          ]
        }
      ],
      grammar: [
        {
          title: "Resumen Condicionales",
          headers: ["Tipo", "Estructura", "Exemplo"],
          rows: [
            ["Posible/real", "SI + presente → presente/futuro/imperativo/tener que + infinitivo", "Si hace buen tiempo, voy al mercado."],
            ["Improbable/irreal", "SI + imperfecto de subjuntivo → condicional simple", "Si tuviera coche, haría ese viaje sin pensar dos veces."],
            ["Imposible", "SI + pluscuamperfecto de subjuntivo → condicional compuesto", "Si hubiera hecho lo correcto, no habría sentido remordimientos después."]
          ]
        },
        {
          title: "Adjetivos Apocopados",
          headers: ["Regra", "Exemplo"],
          rows: [
            ["bueno, malo, alguno, ninguno, uno, primero, tercero, postrero perdem -o antes de nome masculino", "Un buen hombre / Ningún día"],
            ["Santo → San (exceto Domingo/Tomás)", "San Luis, San Pablo — mas Santo Domingo"],
            ["Grande → gran antes de sustantivo/infinitivo", "Un gran banquete / Una gran fiesta"],
            ["Tanto/cuanto → tan/cuan antes de adjetivo", "Tenía tanto dolor / Es tan bello"],
            ["Cualquiera/doquiera → cualquier/doquier antes de sustantivo", "Cualquier día / Por doquier"]
          ]
        }
      ],
      notes: ["Resumen de advérbios de tempo, quantidade, lugar, modo, afirmação, negação, dúvida, ordem e inclusão/exclusão fazem parte desta aula."],
      exercises: [
        { type: "fill", q: "Completa: Si hace buen tiempo, _______ al mercado. (ir - presente)", answer: "voy" },
        { type: "fill", q: "Completa: Si tuviera coche, _______ ese viaje. (hacer - condicional)", answer: "haría" },
        { type: "mc", q: "Complete o adjetivo apocopado: Un _______ hombre. (bueno)", options: ["buen", "bueno", "buena"], correct: 0 },
        { type: "mc", q: "Complete: Una _______ fiesta. (grande)", options: ["gran", "grande", "grande"], correct: 0 },
        { type: "mc", q: "'1/3' em espanhol é:", options: ["un tercio", "un treceavo", "un tres"], correct: 0 },
        { type: "mc", q: "'12' como coletivo é:", options: ["docena", "decena", "quincena"], correct: 0 },
        { type: "translate", from: "pt", text: "Estou pensando em começar a praticar natação.", answer: "Estoy pensando en empezar a practicar natación." },
        { type: "order", items: ["gran", "banquete", "Un"], correctOrder: [2, 0, 1] },
        { type: "listen", audioText: "Si tuviera tiempo, empezaría hoy mismo, pero creo que empezaré el próximo mes.", q: "Quando a pessoa pretende começar a nadar?", answer: "El próximo mes." },
        { type: "speak", prompt: "Repita em voz alta:", target: "La natación es buenísima para la salud." }
      ]
    },
    {
      id: "a13", order: 13, title: "Música", subtitle: "Ritmos, instrumentos e o verbo gustar em outros tempos",
      dialogue: [
        { who: "text", es: "Ritmos latinos = combinación de vários ritmos como son, salsa, cumbia, bachata, samba, mambo, cha cha cha, rumba, conga, merengue etc. El Son es considerado el 'abuelo' de la mayoría de los ritmos latinos actuales. La Salsa es una mezcla de estilos de música cubana y afro-caribeña. La Cumbia tiene origen africana y es popular en Panamá, Venezuela, Perú y, sobre todo, en Colombia. La Bachata tiene fuerte arraigo en la clase baja y zonas rurales. El Mambo nace en Cuba y llega a Europa en los años 60. El Cha, cha, cha fue creado por el violinista cubano Enrique Jorrín en 1948. La Rumba es forma musical y danza de salón para parejas, de origen en el folclore afrocubano. El Merengue es un estilo del Caribe con elementos de la contradanza, mazurca y vals europeos." }
      ],
      vocabulary: [
        {
          category: "Estilos/Ritmos musicales",
          items: [
            { es: "Rock" }, { es: "Pop" }, { es: "Música electrónica" }, { es: "Rap" }, { es: "Hip-Hop" },
            { es: "Reggae" }, { es: "Bachata" }, { es: "Reggaetón" }, { es: "Clásica" }, { es: "Banda" },
            { es: "Balada" }, { es: "Metal" }, { es: "Salsa" }, { es: "Punk" }, { es: "Jazz" },
            { es: "Grunge" }, { es: "Cumbia" }, { es: "Ska" }, { es: "Samba" }, { es: "Dance" }, { es: "Soul" },
            { es: "Folk" }, { es: "Disco" }, { es: "Trance" }, { es: "Swing" }, { es: "Country" },
            { es: "Mambo" }, { es: "Dancehall" }, { es: "Blues" }, { es: "Merengue" }, { es: "Ranchero" },
            { es: "Rhythm and Blues (R&B)" }, { es: "Ópera" }, { es: "Flamenco" }, { es: "Tango" },
            { es: "Bolero" }, { es: "Vallenato" }, { es: "Trip-hop" }, { es: "Bossa nova" }
          ]
        },
        {
          category: "Instrumentos musicales",
          items: [
            { es: "Arpa" }, { es: "Clarinete" }, { es: "Guitarra" }, { es: "Guitarra eléctrica" }, { es: "Violín" },
            { es: "Teclado" }, { es: "Batería" }, { es: "Flauta" }, { es: "Piano" }, { es: "Bajo eléctrico" },
            { es: "Theremín" }, { es: "Sintetizador" }, { es: "Saxófano/Saxofón/Saxo" }, { es: "Tambor" },
            { es: "Trompeta" }, { es: "Micrófono" }, { es: "Órgano clásico" }, { es: "Xilófono" }, { es: "Maraca" },
            { es: "Oboe" }, { es: "Timbal" }, { es: "Platillos" }, { es: "Bombo" }, { es: "Contrabajo" }
          ]
        },
        {
          category: "Preposiciones (uso)",
          items: [
            { es: "A", pt: "Vamos a Venezuela." }, { es: "Ante", pt: "Apareció ante todos." },
            { es: "Bajo", pt: "La tarea la hizo bajo presión." }, { es: "Con", pt: "Una mesa con 4 sillas." },
            { es: "Contra", pt: "Lo besó contra su voluntad." }, { es: "De", pt: "Una copa de vino." },
            { es: "Desde", pt: "Te mandamos un beso desde Brasil." }, { es: "Durante", pt: "Vamos a viajar durante nuestras vacaciones." },
            { es: "En", pt: "Vivo en Chile." }, { es: "Entre", pt: "Esto tiene que ser discutido entre tú y yo." },
            { es: "Hacia", pt: "Vamos hacia el sur de España." }, { es: "Hasta", pt: "Estudio hasta las 6h." },
            { es: "Vía", pt: "He venido vía París." }, { es: "Mediante", pt: "Compré esta falda mediante tarjeta de débito." },
            { es: "Para", pt: "Esto es para ella." }, { es: "Por", pt: "La llamaré por teléfono." },
            { es: "Versus", pt: "Occidente versus Oriente." }, { es: "Según", pt: "Hazlo según te parezca mejor." },
            { es: "Sin", pt: "Estoy sin plata en este momento." }, { es: "Sobre", pt: "El diccionario está sobre la mesa." },
            { es: "Tras", pt: "Tras una fuerte tormenta siempre sale el sol." }
          ]
        }
      ],
      grammar: [
        {
          title: "Verbo Gustar y similares (otros tiempos)",
          headers: ["Exemplo"],
          rows: [
            ["Nos ha gustado mucho todo lo que ya has hecho por nosotros."],
            ["Me gustaron las rosas que me diste ayer."],
            ["Me habría gustado su visita."],
            ["¿Te gustaría ir con ellas al evento?"],
            ["Me gustaban las clases de salsa en la escuela."],
            ["Me encantan los libros de historia."],
            ["Nos molestó mucho aquel ruido."],
            ["Siempre me dolían los dientes, hasta que decidí ir al dentista."],
            ["A nosotros nos caen mal estas personas."],
            ["Estoy seguro de que te apetecerá esta comida."],
            ["Os asusta saber que estáis solos."]
          ]
        }
      ],
      notes: ["Verbos como gustar, encantar, molestar, doler, caer (bien/mal) e apetecer seguem a mesma estrutura gramatical (objeto indireto + verbo na 3ª pessoa)."],
      exercises: [
        { type: "fill", q: "Completa: Me _______ las rosas que me diste ayer. (gustar - pretérito)", answer: "gustaron" },
        { type: "fill", q: "Completa: Me _______ su visita. (gustar - condicional perfecto)", answer: "habría gustado" },
        { type: "mc", q: "Completa: Siempre me _______ los dientes. (doler - imperfecto)", options: ["dolían", "duele", "dolió"], correct: 0 },
        { type: "mc", q: "Qual preposição completa: Vamos ____ el sur de España.", options: ["hacia", "desde", "sobre"], correct: 0 },
        { type: "mc", q: "Qual instrumento é 'Bateria'?", options: ["Batería", "Guitarra", "Flauta"], correct: 0 },
        { type: "mc", q: "Qual ritmo nasceu em Cuba e chegou à Europa nos anos 60?", options: ["El Mambo", "El Tango", "La Bachata"], correct: 0 },
        { type: "translate", from: "pt", text: "Eu adoro os livros de história.", answer: "Me encantan los libros de historia." },
        { type: "order", items: ["gusta", "salsa", "Me", "la"], correctOrder: [2, 0, 3, 1] },
        { type: "listen", audioText: "La Rumba es forma musical y danza de salón para parejas, de origen en el folclore afrocubano.", q: "Qual é a origem da Rumba?", answer: "El folclore afrocubano." },
        { type: "speak", prompt: "Repita em voz alta:", target: "Me encantan los libros de historia." }
      ]
    },
    {
      id: "a14", order: 14, title: "Herramientas", subtitle: "Ferramentas, discurso indireto e pronomes relativos/indefinidos",
      dialogue: [
        { who: "A", es: "¡Perdone! ¿Usted me podría ayudar?" },
        { who: "B", es: "Por supuesto. ¿Qué necesita?" },
        { who: "A", es: "Quisiera saber dónde hay una tienda de herramientas cerca de aquí. Necesito comprar unos clavos, tornillos y un martillo." },
        { who: "B", es: "Hay una que se llama Señor Sierra a dos cuadras de aquí. Siga recto por una cuadra, luego gire a la izquierda y la encontrará." },
        { who: "A", es: "¡Perfecto! ¡Muy amable!" },
        { who: "B", es: "¿Le puedo ayudar con algo más?" },
        { who: "A", es: "Sí, por favor. Después de la tienda quedé con mi amiga de encontrarnos en un restaurante cuya comida es china y no sé cómo llegar hasta allá." },
        { who: "B", es: "¿Cómo se llama el restaurante?" },
        { who: "A", es: "El Toro." },
        { who: "B", es: "Bueno, queda cerca. Solo tiene que cruzar la calle cuando salga de la tienda y ahí estará ubicado." },
        { who: "A", es: "¡Qué fácil! ¡Muchísimas gracias!" },
        { who: "B", es: "¡No ha sido nada! ¡Que tenga un buen día!" }
      ],
      vocabulary: [
        {
          category: "Herramientas",
          items: [
            { es: "Alicates/Tenazas", pt: "Alicate/Torquês" }, { es: "Taladro", pt: "Furadeira" },
            { es: "Navaja", pt: "Navalha" }, { es: "Cincel", pt: "Cinzel" }, { es: "Cortador de cables", pt: "Cortador de cabos" },
            { es: "Linterna", pt: "Lanterna" }, { es: "Destornillador", pt: "Chave de fenda" }, { es: "Azada", pt: "Enxada" },
            { es: "Extractor (de tornillos)/Broca" }, { es: "Formón", pt: "Formão" },
            { es: "Juego de herramientas", pt: "Jogo de ferramentas" }, { es: "Llave (inglesa, hexagonal, de tuercas...)" },
            { es: "Lija/Lima/Escofina", pt: "Lixa" }, { es: "Hacha", pt: "Machado" }, { es: "Mandarria", pt: "Marreta" },
            { es: "Martillo", pt: "Martelo" }, { es: "Pala", pt: "Pá" }, { es: "Tornillo", pt: "Parafuso" },
            { es: "Clavo", pt: "Prego" }, { es: "Punzón", pt: "Furador" }, { es: "Remachadora", pt: "Rebitador" },
            { es: "Pinza", pt: "Pinça" }, { es: "Sierra", pt: "Serra" }, { es: "Tijeras", pt: "Tesoura" },
            { es: "Brocha", pt: "Pincel" }, { es: "Taladrador(a)/Perfuradora", pt: "Furadeira" }
          ]
        }
      ],
      grammar: [
        {
          title: "Discurso Directo/Indirecto",
          headers: ["Direto", "Indireto"],
          rows: [
            ["Manuel dijo \"Me gustan mucho los carros\".", "Manuel dijo que los carros le gustaban mucho."],
            ["Hago la tarea", "Dice que hace la tarea."],
            ["Hice la tarea", "Dice que hizo la tarea."],
            ["He hecho la tarea", "Dice que ha hecho la tarea."],
            ["Haré la tarea", "Dice que hará la tarea."],
            ["¡Haz la tarea!", "Dice que hagas la tarea."]
          ]
        },
        {
          title: "Pronombres Relativos",
          headers: ["Pronome", "Exemplo"],
          rows: [
            ["QUE", "El coche que quiere es barato."],
            ["EL QUE/LOS QUE/LA QUE/LAS QUE", "Perdón, pero la que tengo es azul."],
            ["QUIEN, QUIENES", "Los hombres, quienes están bebiendo, son nuestros maridos."],
            ["CUYO, CUYA, CUYOS, CUYAS", "Ese hombre, cuyas hijas son todas pelirrojas, es vecino nuestro."],
            ["EL CUAL, LA CUAL...", "Juan, el cual me invitó a salir, trabaja con su hermano."],
            ["CUANTO, CUANTA...", "Le prestó cuanto (dinero) encontró."],
            ["DONDE/COMO/CUANDO (adverbios)", "El pueblo donde yo crecí, es ahora una gran ciudad."]
          ]
        },
        {
          title: "Pronombres Indefinidos",
          headers: ["Tipo", "Exemplos"],
          rows: [
            ["Invariables", "ALGO, NADA, ALGUIEN, NADIE, DEMÁS, MÁS, MENOS, CADA"],
            ["Variables", "VARIOS(AS), CUALQUIERA, CIERTO(S), ALGUNO(A), NINGUNO(A), MUCHO(A), OTRO(A), TANTO(A), MISMO(S), TODO(S)"]
          ]
        }
      ],
      notes: ["Verbos que introducem discurso indireto: Decir, Comentar, Sugerir, Agregar/Añadir, Advertir."],
      exercises: [
        { type: "fill", q: "Passe para discurso indireto: 'Haré la tarea' → Dice que _______ la tarea.", answer: "hará" },
        { type: "fill", q: "Passe para discurso indireto: '¡Haz la tarea!' → Dice que la _______. (hacer)", answer: "hagas" },
        { type: "mc", q: "Qual pronome relativo completa: Ese hombre, _______ hijas son pelirrojas, es vecino nuestro.", options: ["cuyas", "que", "quien"], correct: 0 },
        { type: "mc", q: "Qual ferramenta é 'Martelo'?", options: ["Martillo", "Destornillador", "Tornillo"], correct: 0 },
        { type: "mc", q: "'Clavo' em português é:", options: ["Prego", "Parafuso", "Serra"], correct: 0 },
        { type: "translate", from: "pt", text: "Preciso comprar pregos, parafusos e um martelo.", answer: "Necesito comprar clavos, tornillos y un martillo." },
        { type: "translate", from: "pt", text: "Nada me importa neste momento.", answer: "Nada me importa en este momento." },
        { type: "order", items: ["izquierda", "gire", "la", "a"], correctOrder: [1, 3, 2, 0] },
        { type: "listen", audioText: "Siga recto por una cuadra, luego gire a la izquierda y la encontrará.", q: "Quais são as instruções dadas para chegar à loja?", answer: "Seguir reto uma quadra e depois virar à esquerda." },
        { type: "speak", prompt: "Repita em voz alta:", target: "¡No ha sido nada! ¡Que tenga un buen día!" }
      ]
    },
    {
      id: "a15", order: 15, title: "Palabras", subtitle: "Concordância, palavras compostas, coletivos e heterotônicos",
      dialogue: [
        { who: "A", es: "Lucia, ¿vamos al concierto esta noche?" },
        { who: "B", es: "Amiga, creo que va a estar bueno pero va a haber una multitud, además de la pelirroja que me ha robado el novio." },
        { who: "A", es: "Hmmm... Entiendo... Quizás podríamos ir entonces a cenar en la casa de Priscila. Nos ha invitado y dicho que seremos bienvenidas allá." },
        { who: "B", es: "Sí, creo que puede ser una buena idea. Voy a hablar con mi familia a ver si me dejan usar el coche. Solo espero que nadie malo allá diga algo sobre mi ex y sea aguafiestas." },
        { who: "A", es: "Estoy segura de que no va a pasar nada. Nadie te va a quitar la sonrisa de la cara. Somos todos como familia. ¡Nos vamos a divertir mucho!" },
        { who: "B", es: "Está bien Mari, te llamo más tarde a ver a que hora quedamos." },
        { who: "A", es: "Bueno, ¡hasta luego!" }
      ],
      vocabulary: [
        {
          category: "Palabras compuestas (exemplos)",
          items: [
            { es: "Abrebotellas" }, { es: "Abrelatas" }, { es: "Agridulce" }, { es: "Aguafiestas" },
            { es: "Altibajo" }, { es: "Automóvil" }, { es: "Bajamar" }, { es: "Balompié" }, { es: "Baloncesto" },
            { es: "Bienvenida" }, { es: "Bocacalle" }, { es: "Compraventa" }, { es: "Cortaplumas" },
            { es: "Cumpleaños" }, { es: "Girasol" }, { es: "Guardarropa" }, { es: "Hispanoamericano" },
            { es: "Lavaplatos" }, { es: "Limpiabotas" }, { es: "Mapamundi" }, { es: "Mediodía" },
            { es: "Parabrisas" }, { es: "Paraguas" }, { es: "Pararrayos" }, { es: "Pasatiempo" },
            { es: "Pelirrojo" }, { es: "Portaaviones" }, { es: "Rascacielos" }, { es: "Rompecabezas" },
            { es: "Sabelotodo" }, { es: "Sacacorchos" }, { es: "Sacapuntas" }, { es: "Salvavidas" }
          ]
        },
        {
          category: "Colectivos (curiosidades)",
          items: [
            { es: "Abecedario/Alfabeto", pt: "conjunto de letras" }, { es: "Armada", pt: "soldados de mar" },
            { es: "Bandada", pt: "aves" }, { es: "Cardumen", pt: "peces" }, { es: "Clero", pt: "sacerdotes católicos" },
            { es: "Enjambre", pt: "abejas" }, { es: "Familia", pt: "miembros" }, { es: "Flota", pt: "vehículos/barcos" },
            { es: "Gentío", pt: "personas" }, { es: "Manada", pt: "animales" }, { es: "Orquesta", pt: "músicos" },
            { es: "Piara", pt: "cerdos" }, { es: "Rebaño", pt: "ovejas" }, { es: "Jauría", pt: "perros" },
            { es: "Coro", pt: "cantantes" }, { es: "Viñedo", pt: "uvas" }, { es: "Archipiélago", pt: "islas" },
            { es: "Muchedumbre", pt: "personas" }, { es: "Vajilla", pt: "platos" }, { es: "Vestuario", pt: "ropa" },
            { es: "País", pt: "estados/habitantes" }, { es: "Lenguaje", pt: "palabras" }, { es: "Alumnado", pt: "alumnos" }
          ]
        },
        {
          category: "Heterotónicos (acentuação diferente do português)",
          items: [
            { es: "Academia" }, { es: "Alcohol" }, { es: "Alergia" }, { es: "Alguien" }, { es: "Atmósfera" },
            { es: "Burocracia" }, { es: "Cerebro" }, { es: "Cráter" }, { es: "Diplomacia" }, { es: "Élite" },
            { es: "Epidemia" }, { es: "Pandemia" }, { es: "Euforia" }, { es: "Fobia" }, { es: "Gaucho" },
            { es: "Héroe" }, { es: "Imán" }, { es: "Imbécil" }, { es: "Límite" }, { es: "Magia" }, { es: "Metro" },
            { es: "Micrófono" }, { es: "Miope" }, { es: "Nivel" }, { es: "Nostalgia" }, { es: "Oxígeno" },
            { es: "Pantano" }, { es: "Parásito" }, { es: "Policía" }, { es: "Prototipo" }, { es: "Régimen" },
            { es: "Sarampión" }, { es: "Síntoma" }, { es: "Teléfono" }, { es: "Tulipán" }
          ]
        },
        {
          category: "Heterogenéricos (gênero diferente do português)",
          items: [
            { es: "El coraje", pt: "masc. em espanhol, fem. em português" }, { es: "El equipaje" }, { es: "El garaje" },
            { es: "El viaje" }, { es: "El lenguaje" }, { es: "El puente" }, { es: "El fraude" }, { es: "El insomnio" },
            { es: "El árbol" }, { es: "La mascota", pt: "fem. em espanhol, masc. em português" }, { es: "La nariz" },
            { es: "La sonrisa" }, { es: "La sal" }, { es: "La señal" }, { es: "La licuadora" }, { es: "La leche" },
            { es: "La miel" }
          ]
        }
      ],
      grammar: [
        {
          title: "Concordancia Verbal",
          headers: ["Regra", "Exemplo"],
          rows: [
            ["Sujeito simples → verbo concorda em número/pessoa", "El hombre trabaja mucho."],
            ["Sujeito composto → verbo no plural", "Lucia y yo vamos de compras mañana."],
            ["Sujeito coletivo singular → verbo geralmente singular", "Toda la familia vino a visitarme."],
            ["Coletivo + complemento plural → verbo pode ficar no plural", "Vinieron/Vino a la empresa solamente una docena de empleados."],
            ["Verbo SER concorda com o predicativo", "Mi sueldo es 200 dólares. / Mi sueldo son 200 dólares."]
          ]
        },
        {
          title: "Palabras Compuestas — normas de acentuação",
          headers: ["Regra"],
          rows: [
            ["1º elemento perde o til; o 2º conserva. Ex.: Decimoséptimo, ciempiés, voleibol."],
            ["Compostas por hífen conservam til em cada elemento. Ex.: Teórico-práctico, físico-químico."],
            ["Compostos verbo+complemento não levam til. Ex.: Sabelotodo, metomentodo."],
            ["Advérbios em -mente conservam til se o adjetivo original tinha. Ex.: Dócil→dócilmente, fría→fríamente."]
          ]
        }
      ],
      notes: ["Também citados nesta aula: Sustantivos Ambiguos (El/La mar, El/La azúcar) e Homónimos de géneros diferentes (El cura × La cura; El coma × La coma)."],
      exercises: [
        { type: "fill", q: "Completa a concordância: Toda la familia _______ a visitarme. (venir)", answer: "vino" },
        { type: "mc", q: "Qual coletivo corresponde a 'abelhas'?", options: ["Enjambre", "Rebaño", "Piara"], correct: 0 },
        { type: "mc", q: "Qual coletivo corresponde a 'ovelhas'?", options: ["Rebaño", "Jauría", "Cardumen"], correct: 0 },
        { type: "mc", q: "'El mar' é um substantivo:", options: ["Ambíguo (aceita el/la)", "Só masculino", "Só feminino"], correct: 0 },
        { type: "mc", q: "'El coma' (medicina) × 'La coma' (pontuação) são exemplos de:", options: ["Homônimos de gêneros diferentes", "Palavras compostas", "Coletivos"], correct: 0 },
        { type: "translate", from: "pt", text: "Ninguém vai tirar o sorriso do meu rosto.", answer: "Nadie me va a quitar la sonrisa de la cara." },
        { type: "translate", from: "pt", text: "Somos todos como uma família.", answer: "Somos todos como una familia." },
        { type: "order", items: ["sacacorchos", "un", "Necesito"], correctOrder: [2, 1, 0] },
        { type: "listen", audioText: "Nadie te va a quitar la sonrisa de la cara. Somos todos como familia.", q: "O que a amiga promete que ninguém fará?", answer: "Quitarle la sonrisa de la cara." },
        { type: "speak", prompt: "Repita em voz alta:", target: "¡Nos vamos a divertir mucho!" }
      ]
    }
  ],
  exam: {
    title: "Examen Final — Nivel Avanzado",
    passScoreDefault: 70,
    questions: [
      { type: "mc", q: "Completa el participio: Yo debería haber ______________ menos en el almuerzo. (comer)", options: ["comido", "comiendo", "come"], correct: 0 },
      { type: "fill", q: "Habiendo ___________ la cena, ellos fueron a comer. (preparar)", answer: "preparado" },
      { type: "fill", q: "Cuando hubieron __________ todo, Luis llegó. (hacer)", answer: "hecho" },
      { type: "fill", q: "¿Habrá ________ a la casa de un amigo? (ir)", answer: "ido" },
      { type: "fill", q: "Habrías ____________ avisarnos. (poder)", answer: "podido" },
      { type: "fill", q: "Si ayer no hubiera ___________, María y yo habríamos ido a la fiesta. (llover)", answer: "llovido" },
      { type: "fill", q: "Creí que no habríais __________ venir. (querer)", answer: "querido" },
      { type: "fill", q: "Me encanta que hayas ___________ eso. (poner)", answer: "puesto" },
      { type: "fill", q: "Seguro que me habría alegrado de que me lo hubieras __________. (decir)", answer: "dicho" },
      { type: "fill", q: "Si en enero no hubiere _____________, no me esperéis para febrero. (volver)", answer: "vuelto" },
      { type: "mc", q: "Escolha o artigo correto: _______ vida", options: ["La", "El", "Los"], correct: 0 },
      { type: "mc", q: "Escolha o artigo correto: _______ nariz", options: ["La", "El", "Los"], correct: 0 },
      { type: "mc", q: "Escolha o artigo correto: _______ pasaje", options: ["El", "La", "Los"], correct: 0 },
      { type: "mc", q: "Escolha o artigo correto: _______ pétalo", options: ["El", "La", "Los"], correct: 0 },
      { type: "fill", q: "Qual é o coletivo de 'Alumnos'?", answer: "Alumnado" },
      { type: "fill", q: "Qual é o coletivo de 'Palabras'?", answer: "Lenguaje" },
      { type: "fill", q: "Qual é o coletivo de 'Estados y habitantes'?", answer: "País" },
      { type: "fill", q: "Qual é o coletivo de 'Abejas'?", answer: "Enjambre" },
      { type: "fill", q: "Qual é o coletivo de 'Ovejas'?", answer: "Rebaño" },
      { type: "fill", q: "Qual é o coletivo de 'Uvas'?", answer: "Viñedo" },
      { type: "open", q: "¿Cuál es tu ritmo musical y por qué te gusta?", sample: "Me gusta la salsa porque es alegre y tiene mucho ritmo." },
      { type: "mc", q: "Completa: Ella no tiene su ______ talla en la tienda.", options: ["talla", "cuesta", "vuelve"], correct: 0 },
      { type: "mc", q: "Completa: Voy a pagar con ______ de viaje.", options: ["cheques", "pesos", "prueba"], correct: 0 },
      { type: "mc", q: "Completa: Necesito saber la _______ de la calle.", options: ["dirección", "remís", "experiencia"], correct: 0 },
      { type: "mc", q: "Completa: Voy a ir de ______ este fin de semana.", options: ["compras", "vacaciones", "trabajar"], correct: 0 },
      { type: "mc", q: "Escolha a preposição correta: La tarea la hizo _____ presión.", options: ["bajo", "incluso", "desde"], correct: 0 },
      { type: "mc", q: "Escolha a preposição correta: Te mandamos un beso ____ Brasil.", options: ["desde", "para", "contra"], correct: 0 },
      { type: "mc", q: "Escolha a preposição correta: Esto tiene que ser discutido ____ tú y yo.", options: ["entre", "hacia", "bajo"], correct: 0 },
      { type: "mc", q: "Escolha o pronome/advérbio correto: El libro _______ me prestaste era muy bueno.", options: ["que", "cuyo", "tampoco"], correct: 0 },
      { type: "mc", q: "Escolha o pronome/advérbio correto: Ese hombre, _______ hijas son pelirrojas, es vecino.", options: ["cuyo", "que", "menos"], correct: 0 },
      { type: "mc", q: "Escolha o pronome/advérbio correto: Hay una tienda a _______ esquina.", options: ["cada", "muy", "tarde"], correct: 0 },
      { type: "mc", q: "Escolha o pronome/advérbio correto: A mí _____ me importa.", options: ["tampoco", "sólo", "mientras"], correct: 0 },
      { type: "translate", from: "pt", text: "Se eu tivesse tempo, viajaria com você.", answer: "Si tuviera tiempo, viajaría contigo." },
      { type: "translate", from: "pt", text: "Se eu tivesse feito o correto, não teria sentido remorso.", answer: "Si hubiera hecho lo correcto, no habría sentido remordimientos." },
      { type: "listen", audioText: "Lo importante acá no es terminar todo rápido, sino, aprender y comprender todo de verdad.", q: "Segundo o aviso do módulo, o que é mais importante?", answer: "Aprender y comprender todo de verdad, no terminar rápido." },
      { type: "speak", prompt: "Repita em voz alta a frase-chave do módulo:", target: "Lo importante no es terminar todo rápido, sino aprender y comprender todo de verdad." }
    ]
  }
};
