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
        { who: "A", es: "Oye, ¿qué hicieron en sus vacaciones?", pt: "Ei, o que vocês fizeram nas férias de vocês?" },
        { who: "B", es: "Fuimos a la playa y a una ciudad cercana de compras.", pt: "Fomos à praia e a uma cidade próxima fazer compras." },
        { who: "A", es: "Bueno. ¿Y les gustó?", pt: "Legal. E vocês gostaram?" },
        { who: "B", es: "Sí, pero creo que deberíamos haber ido a otra playa. Esta adonde fuimos era lejos de todo y no había ni restaurantes cerca de la casa.", pt: "Sim, mas acho que deveríamos ter ido a outra praia. Essa aonde fomos era longe de tudo e não tinha nem restaurantes perto da casa." },
        { who: "A", es: "¡Ah! ¿Se quedaron en una casa entonces?", pt: "Ah! Vocês ficaram numa casa então?" },
        { who: "B", es: "Sí, una casa muy bonita, sin embargo, no había casi nada en ella. Me gustaría haber cocinado más, ya que no había restaurantes por allá.", pt: "Sim, uma casa muito bonita, porém, não tinha quase nada nela. Eu gostaria de ter cozinhado mais, já que não tinha restaurantes por lá." },
        { who: "A", es: "¿Qué necesitabas que no había?", pt: "O que faltava que você precisava?" },
        { who: "B", es: "Todos los utensilios de cocina, ¿sabes? Como por ejemplo una buena sartén, ollas grandes, una licuadora y muchas otras cosas. No había ni siquiera tazas y cucharillas.", pt: "Todos os utensílios de cozinha, sabe? Como por exemplo uma boa frigideira, panelas grandes, um liquidificador e muitas outras coisas. Não tinha nem xícaras e colherzinhas." },
        { who: "A", es: "No lo puedo creer. Esto es un problema para ti porque te encanta cocinar. Pero, ¡qué bueno que se divirtieron igual!", pt: "Não acredito. Isso é um problema para você porque você adora cozinhar. Mas que bom que vocês se divertiram do mesmo jeito!" },
        { who: "B", es: "Sí, verdad. Haber elegido viajar fue estupendo. ¡Nos encantó el viaje!", pt: "Sim, verdade. Ter escolhido viajar foi ótimo. Adoramos a viagem!" }
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
        { who: "text", es: "María, habiendo sido invitada a la boda de su mejor amiga, fue rápidamente a una tienda de ropas a comprar un vestido para la fiesta. Ella fue a una tienda que se llama Vivir Bella y luego de haber entrado, vio el vestido más perfecto que había visto en su vida. Un vestido negro con dorado, largo y brillante. María luego le preguntó a la dependiente si tenía su talla, y por suerte, le dijo que sí. Ella fue al probador, lo probó y en el mismo momento se enamoró. Habiendo probado el vestido, ya fue a la caja y lo compró pagando con tarjeta de crédito en cuotas. Después de todo, era un vestido muy caro. Habiendo salido de la tienda, fue a pedir un turno con su peluquero y su manicura para estar linda en la boda de su amiga.", pt: "Maria, tendo sido convidada para o casamento da melhor amiga dela, foi rapidamente a uma loja de roupas comprar um vestido para a festa. Ela foi a uma loja chamada Vivir Bella e, depois de ter entrado, viu o vestido mais perfeito que já tinha visto na vida. Um vestido preto com dourado, longo e brilhante. Maria então perguntou à atendente se tinha o tamanho dela, e por sorte, ela disse que sim. Foi ao provador, experimentou o vestido e no mesmo momento se apaixonou. Tendo experimentado o vestido, foi até o caixa e o comprou pagando com cartão de crédito parcelado. Afinal, era um vestido muito caro. Tendo saído da loja, foi marcar um horário com o cabeleireiro e a manicure para estar linda no casamento da amiga." }
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
            { es: "¿Le puedo ayudar?", pt: "Posso te ajudar?" }, { es: "¿Le atienden?", pt: "Já está sendo atendido(a)?" }, { es: "¿Qué andaba/estaba buscando?", pt: "O que você estava procurando?" },
            { es: "Estoy mirando solamente, gracias.", pt: "Estou só olhando, obrigado(a)." }, { es: "Ahora no voy a llevar nada. No tengo dólares. Mañana vuelvo.", pt: "Agora não vou levar nada. Não tenho dinheiro. Amanhã eu volto." },
            { es: "¿Puede mostrarme el vestido que está en la vitrina?", pt: "Pode me mostrar o vestido que está na vitrine?" }, { es: "Quisiera probarlo.", pt: "Eu gostaria de experimentá-lo." },
            { es: "¿Tiene otros colores de la camisa?", pt: "Tem outras cores dessa camisa?" }, { es: "Me parece fuera de moda.", pt: "Me parece fora de moda." },
            { es: "No me gustó/ha gustado.", pt: "Não gostei." }, { es: "Es el tono de la moda/del momento.", pt: "É a cor da moda/do momento." },
            { es: "¿Dónde está el probador?", pt: "Onde fica o provador?" }, { es: "¿Cuánto vale?/¿Cuánto cuesta?", pt: "Quanto custa?" },
            { es: "Voy a pagar al contado. ¿Puede hacerme una rebaja?/un descuento?", pt: "Vou pagar à vista. Pode me fazer um desconto?" },
            { es: "¿Puedo pagar con tarjeta de crédito?", pt: "Posso pagar com cartão de crédito?" }, { es: "¿Se puede pagar a plazo/en cuotas?", pt: "Dá para pagar parcelado?" },
            { es: "Si paga al contado tiene descuento.", pt: "Se pagar à vista tem desconto." }, { es: "Vuelva siempre.", pt: "Volte sempre." }
          ]
        },
        {
          category: "Placas y señales",
          items: [
            { es: "Aceptamos Visa/Mastercard/Diners/American Express", pt: "Aceitamos Visa/Mastercard/Diners/American Express" }, { es: "No aceptamos tarjetas de crédito", pt: "Não aceitamos cartões de crédito" },
            { es: "Abierto las 24 horas del día", pt: "Aberto 24 horas por dia" }, { es: "Rebajas", pt: "Promoções" }, { es: "Liquidación", pt: "Liquidação" },
            { es: "Liquidación de saldos", pt: "Liquidação de estoque" }, { es: "Liquidación de verano/invierno", pt: "Liquidação de verão/inverno" }, { es: "Se habla (inglés)", pt: "Fala-se (inglês)" }
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
        { who: "A", es: "¡Buen día! ¿La puedo ayudar?", pt: "Bom dia! Posso ajudá-la?" },
        { who: "B", es: "Sí, por favor. Quisiera cambiar reales a pesos, ¿es posible?", pt: "Sim, por favor. Eu gostaria de trocar reais por pesos, é possível?" },
        { who: "A", es: "Sí, el cambio está a 5 por 1.", pt: "Sim, o câmbio está a 5 por 1." },
        { who: "B", es: "Bien, entonces quiero cambiar 300 reales.", pt: "Certo, então eu quero trocar 300 reais." },
        { who: "A", es: "Está bien, aquí tiene. ¿Necesita algo más?", pt: "Certo, aqui está. Precisa de mais alguma coisa?" },
        { who: "B", es: "Sí, estaré viajando mañana y por eso necesito cobrar un cheque hoy. ¿Puede hacer efectivo el cheque?", pt: "Sim, estarei viajando amanhã e por isso preciso descontar um cheque hoje. Pode descontar o cheque?" },
        { who: "A", es: "Por supuesto. ¿Prefiere billetes de menor valor?", pt: "Claro. Prefere notas de menor valor?" },
        { who: "B", es: "Sí, por favor.", pt: "Sim, por favor." },
        { who: "A", es: "Listo. ¿La ayudo en algo más?", pt: "Pronto. Posso ajudá-la em mais alguma coisa?" },
        { who: "B", es: "No, eso es todo. ¡Muchísimas gracias!", pt: "Não, é só isso. Muito obrigada!" },
        { who: "A", es: "¡Gracias a usted! ¡Que tenga un buen día!", pt: "Obrigado à senhora! Tenha um bom dia!" }
      ],
      vocabulary: [
        {
          category: "Economía y mercado laboral",
          items: [
            { es: "Compra", pt: "Compra" }, { es: "Venta", pt: "Venda" }, { es: "Dinero/Plata", pt: "Dinheiro" }, { es: "Moneda", pt: "Moeda" },
            { es: "Tarjeta de débito/crédito", pt: "Cartão de débito/crédito" }, { es: "Costo", pt: "Custo" }, { es: "Interés", pt: "Juros" },
            { es: "Cuota", pt: "Parcela" }, { es: "Precio", pt: "Preço" }, { es: "Valor", pt: "Valor" }, { es: "Acciones", pt: "Ações" },
            { es: "Auditoría", pt: "Auditoria" }, { es: "Banco", pt: "Banco" }, { es: "Beneficios", pt: "Benefícios" }, { es: "Bienes", pt: "Bens" },
            { es: "Pagar", pt: "Pagar" }, { es: "Cobrar", pt: "Cobrar/Receber" }, { es: "Cliente", pt: "Cliente" }, { es: "Declaración de la renta", pt: "Declaração de renda" },
            { es: "Concesionario", pt: "Concessionária" }, { es: "Contrato", pt: "Contrato" }, { es: "Crédito", pt: "Crédito" }, { es: "Cuenta", pt: "Conta" },
            { es: "Cajero automático", pt: "Caixa eletrônico" }, { es: "Bolsa de valores", pt: "Bolsa de valores" }, { es: "Ahorro", pt: "Poupança" },
            { es: "Cuenta de ahorros", pt: "Conta poupança" }, { es: "Cuenta corriente", pt: "Conta corrente" }, { es: "Depósito", pt: "Depósito" }, { es: "Transferencia", pt: "Transferência" },
            { es: "Empleo/Desempleo", pt: "Emprego/Desemprego" }, { es: "Empleados", pt: "Empregados/Funcionários" }, { es: "Gerente", pt: "Gerente" }, { es: "Gestión", pt: "Gestão" },
            { es: "Hipoteca", pt: "Hipoteca" }, { es: "Giro", pt: "Saque/Transferência bancária" }, { es: "Honorarios", pt: "Honorários" }, { es: "Horario comercial", pt: "Horário comercial" },
            { es: "Huelga", pt: "Greve" }, { es: "Importación", pt: "Importação" }, { es: "Impuesto (sobre la renta)", pt: "Imposto (de renda)" },
            { es: "Inversión", pt: "Investimento" }, { es: "Jefe(a)", pt: "Chefe" }, { es: "Jubilación", pt: "Aposentadoria" },
            { es: "Liderazgo", pt: "Liderança" }, { es: "Mayorista/Minorista", pt: "Atacadista/Varejista" }, { es: "Oferta", pt: "Oferta" }, { es: "Producto", pt: "Produto" },
            { es: "Mercado", pt: "Mercado" }, { es: "Mercancía", pt: "Mercadoria" }, { es: "Servicio", pt: "Serviço" }, { es: "Queja", pt: "Reclamação" }, { es: "Riesgo", pt: "Risco" },
            { es: "Vendedor(a)", pt: "Vendedor(a)" }, { es: "Empresa/Negocio/Compañía", pt: "Empresa/Negócio/Companhia" }, { es: "Renta/Ingresos", pt: "Renda/Receita" },
            { es: "Saldo acreedor/deudor", pt: "Saldo credor/devedor" }, { es: "Tabla de salarios", pt: "Tabela salarial" }, { es: "Tarjeta de visitas", pt: "Cartão de visita" },
            { es: "Toma de decisiones", pt: "Tomada de decisões" }, { es: "Vacaciones", pt: "Férias" }, { es: "Viable", pt: "Viável" }, { es: "Vencimiento", pt: "Vencimento" },
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
        { who: "A", es: "¡Buen día, Sr. Rodríguez! ¿Ya ha pensado en la propuesta que le hice para que compre el apartamento?", pt: "Bom dia, Sr. Rodríguez! Já pensou na proposta que fiz para o senhor comprar o apartamento?" },
        { who: "B", es: "Sí, pero todavía tengo miedo, porque la última vez que compré algo caro así, había pensado mucho antes de aceptarlo e igual tuve problemas después.", pt: "Sim, mas ainda tenho medo, porque da última vez que comprei algo caro assim, tinha pensado muito antes de aceitar e mesmo assim tive problemas depois." },
        { who: "A", es: "Lo entiendo. Si yo pudiera asegurarle de que no tendrá problemas, lo haría, pero inmuebles son así. Solo después de vivir en ellos, los conocemos bien y sabemos si realmente fue un buen negocio. Sin embargo, en mi opinión, este es el momento justo para comprar inmuebles, y además, si lo compra ahora, le puedo ofrecer un buen descuento y una garantía de un año. ¿Qué le parece?", pt: "Eu entendo. Se eu pudesse garantir ao senhor que não terá problemas, eu faria isso, mas imóveis são assim. Só depois de morar neles é que os conhecemos bem e sabemos se realmente foi um bom negócio. No entanto, na minha opinião, este é o momento certo para comprar imóveis, e além disso, se comprar agora, posso oferecer um bom desconto e uma garantia de um ano. O que acha?" },
        { who: "B", es: "Me parece un buen negocio. Está bien...está bien… voy a comprarlo hoy. Dentro de algunos momentos le mando los documentos que me pidió.", pt: "Me parece um bom negócio. Está bem... está bem... vou comprá-lo hoje. Daqui a pouco te mando os documentos que você pediu." },
        { who: "A", es: "¡Perfecto, señor! ¡Estoy seguro de que no se arrepentirá!", pt: "Perfeito, senhor! Tenho certeza de que não vai se arrepender!" }
      ],
      vocabulary: [
        {
          category: "Comprando/Vendiendo",
          items: [
            { es: "¿Cuáles son las ventajas del producto?", pt: "Quais são as vantagens do produto?" }, { es: "¿Puede darme un descuento?", pt: "Pode me dar um desconto?" },
            { es: "¿Ustedes están dispuestos a…?", pt: "Vocês estão dispostos a…?" }, { es: "¿El transporte y el seguro son por cuenta de quién?", pt: "O transporte e o seguro são por conta de quem?" },
            { es: "Si lo compra ahora, yo…", pt: "Se comprar agora, eu…" }, { es: "Es el mejor precio del mercado.", pt: "É o melhor preço do mercado." },
            { es: "Está perdiendo un negocio formidable.", pt: "Está perdendo um negócio e tanto." }, { es: "Aproveche la oportunidad.", pt: "Aproveite a oportunidade." },
            { es: "Es una promoción por tiempo limitado.", pt: "É uma promoção por tempo limitado." }, { es: "¿Por qué no lo piensa mejor por algunos días?", pt: "Por que não pensa melhor por alguns dias?" }
          ]
        },
        {
          category: "Buscando una vivienda",
          items: [
            { es: "He visto un anuncio en el diario sobre un apartamento para alquilar.", pt: "Vi um anúncio no jornal sobre um apartamento para alugar." },
            { es: "¿Aún está disponible?", pt: "Ainda está disponível?" }, { es: "¿Dónde está ubicado?", pt: "Onde fica localizado?" }, { es: "¿Cómo es el apartamento?", pt: "Como é o apartamento?" },
            { es: "¿Cuánto es el alquiler?", pt: "Quanto é o aluguel?" }, { es: "¿Cuánto es la fianza?", pt: "Quanto é a fiança/caução?" },
            { es: "¿El alquiler incluye agua y gas?", pt: "O aluguel inclui água e gás?" }, { es: "¿Cuántos dormitorios tiene?", pt: "Quantos quartos tem?" },
            { es: "¿Está amueblado?", pt: "Está mobiliado?" }, { es: "¿Puedo verlo?", pt: "Posso vê-lo?" }, { es: "¿El barrio es seguro?", pt: "O bairro é seguro?" },
            { es: "¿A partir de cuándo puedo cambiarme?", pt: "A partir de quando posso me mudar?" }
          ]
        },
        {
          category: "Dinero/Precios (formatos)",
          items: [
            { es: "USD 1", pt: "1 dólar americano" }, { es: "R$ 50", pt: "50 reais" }, { es: "$ 250", pt: "250 (símbolo genérico de peso/dólar, varia por país)" }, { es: "EUR 10,50", pt: "10,50 euros" },
            { es: "CÉNTIMO", pt: "Cêntimo (moeda fracionária, ex: euro)" }, { es: "CENTAVO", pt: "Centavo (moeda fracionária, ex: peso/real)" }, { es: "CENTÉSIMO", pt: "Centésimo (moeda fracionária, ex: boliviano/sol)" }
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
        { who: "text", es: "Montevideo, Uruguay — 28, diciembre, 2024. Estimado Sr. Saavedra: Le escribo para agradecerle por haberme contestado pronto y haber resuelto nuestros problemas con el sistema. Le envío también adjuntos los datos solicitados referentes al viaje que vamos a hacer y los días en los cuales no vamos a estar en la oficina para que usted mande a alguien la semana siguiente para averiguar qué tenemos que hacer para cambiar los sistemas. ¡Les deseamos a usted y a su equipo un feliz año nuevo! Estamos a su servicio para cualquier pregunta. Saludos, Luciana Álvez — Equipo de ventas — Su mejor Internet", pt: "Montevidéu, Uruguai — 28 de dezembro de 2024. Prezado Sr. Saavedra: Escrevo para agradecer por ter me respondido rapidamente e ter resolvido nossos problemas com o sistema. Envio também em anexo os dados solicitados referentes à viagem que vamos fazer e os dias em que não estaremos no escritório, para que o senhor envie alguém na semana seguinte para verificar o que precisamos fazer para trocar os sistemas. Desejamos a você e à sua equipe um feliz ano novo! Estamos à disposição para qualquer dúvida. Saudações, Luciana Álvez — Equipe de vendas — Sua melhor Internet" }
      ],
      vocabulary: [
        {
          category: "Para empezar",
          items: [
            { es: "Estimado(a) Sr./Sra. Rodríguez:", pt: "Prezado(a) Sr./Sra. Rodríguez:" }, { es: "Distinguido(a) Sr./Sra.", pt: "Distinto(a) Sr./Sra." },
            { es: "A la atención del (jefe de compras).", pt: "Aos cuidados do (chefe de compras)." }, { es: "Le escribo porque…", pt: "Escrevo porque…" },
            { es: "Espero que esté todo bien.", pt: "Espero que esteja tudo bem." }, { es: "Gracias por su correo electrónico/carta.", pt: "Obrigado(a) pelo seu e-mail/carta." },
            { es: "Le agradezco por haber contestado con tanta prontitud a mi solicitud.", pt: "Agradeço por ter respondido tão prontamente à minha solicitação." },
            { es: "¡Querido(a) amigo/Felipe!", pt: "Querido(a) amigo/Felipe!" }, { es: "¡Hola, Paulo! ¿Qué tal? ¿Cómo te va?", pt: "Olá, Paulo! Tudo bem? Como vai?" }
          ]
        },
        {
          category: "Propósito de la carta",
          items: [
            { es: "En respuesta a sus preguntas…", pt: "Em resposta às suas perguntas…" }, { es: "Como consecuencia de nuestra conversación telefónica…", pt: "Em decorrência da nossa conversa por telefone…" },
            { es: "Como solicitó…", pt: "Como solicitado…" }, { es: "Le escribo para avisarle que recibimos el envío de…", pt: "Escrevo para avisar que recebemos o envio de…" },
            { es: "Le escribo para agradecerle/felicitarle/pedirle disculpas por...", pt: "Escrevo para agradecer/parabenizar/pedir desculpas por..." },
            { es: "Te escribo para contarte una novedad/saber cómo estás…", pt: "Te escrevo para contar uma novidade/saber como você está…" }
          ]
        },
        {
          category: "Anejos e informaciones",
          items: [
            { es: "(Le) envío/enviamos adjunto los datos solicitados…", pt: "Envio/enviamos em anexo os dados solicitados…" },
            { es: "Por favor, infórmenos en caso de estar de acuerdo.", pt: "Por favor, nos informe caso esteja de acordo." },
            { es: "Le envié ... por fax ayer.", pt: "Enviei ... por fax ontem." }, { es: "Estaré fuera de la oficina y sin posibilidades de contacto hasta…", pt: "Estarei fora do escritório e sem possibilidade de contato até…" }
          ]
        },
        {
          category: "Para terminar la carta",
          items: [
            { es: "Esperamos recibir…", pt: "Aguardamos receber…" }, { es: "Esperamos noticias suyas.", pt: "Aguardamos notícias suas." }, { es: "Me pondré en contacto con Ud. nuevamente…", pt: "Entrarei em contato com o(a) senhor(a) novamente…" },
            { es: "Le agradezco su paciencia.", pt: "Agradeço sua paciência." }, { es: "Estaré a la espera de su pronta respuesta.", pt: "Ficarei no aguardo de sua pronta resposta." },
            { es: "Estamos a su servicio para cualquier pregunta/duda.", pt: "Estamos à disposição para qualquer pergunta/dúvida." }, { es: "Cordiales saludos.", pt: "Cordiais saudações." },
            { es: "Atentamente.", pt: "Atenciosamente." }, { es: "Sinceramente.", pt: "Sinceramente." }, { es: "Con cariño.", pt: "Com carinho." },
            { es: "Besos y abrazos.", pt: "Beijos e abraços." }, { es: "Hasta pronto.", pt: "Até breve." }, { es: "Recuerdos a todos.", pt: "Lembranças a todos." },
            { es: "Te echo de menos.", pt: "Sinto sua falta." }, { es: "No te desaparezcas.", pt: "Não suma." }
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
        { who: "text", es: "Evandro luego que hubo empezado sus clases en España cuando estaba de intercambio en 2002, tuvo algunos problemas en la escuela donde estaba estudiando. Sus compañeros de clase eran muy inteligentes y lo recibieron muy bien desde el primer día, pero él estaba teniendo algunos problemas con el idioma y no podía comunicarse muy bien con sus nuevos amigos. Apenas hubo hablado con su profesora sobre todos sus problemas, tuvo una buena idea. Perder la vergüenza y tratar de practicar con sus colegas, y realmente hacer todo lo que podía para aprender mucho mientras estaba en este viaje inolvidable. Empezó a salir con todos de su clase, ir a las fiestas, a restaurantes, ver la tele, películas en español, escuchar temas que le gustaban y hacer de todo. Apenas hubo pasado un mes de mucho esfuerzo, Evandro ya se dio cuenta de que estaba hablando mucho mejor y ya podía comunicarse bien con sus amigos, teniendo de esta forma, un intercambio mejor imposible.", pt: "Evandro, assim que começou suas aulas na Espanha quando estava de intercâmbio em 2002, teve alguns problemas na escola onde estava estudando. Seus colegas de classe eram muito inteligentes e o receberam muito bem desde o primeiro dia, mas ele estava tendo alguns problemas com o idioma e não conseguia se comunicar muito bem com seus novos amigos. Assim que conversou com sua professora sobre todos os seus problemas, teve uma boa ideia. Perder a vergonha e tentar praticar com seus colegas, e realmente fazer tudo o que podia para aprender bastante enquanto estava nessa viagem inesquecível. Começou a sair com todos da turma, ir a festas, a restaurantes, ver TV, filmes em espanhol, ouvir músicas de que gostava e fazer de tudo. Assim que se passou um mês de muito esforço, Evandro já percebeu que estava falando muito melhor e já conseguia se comunicar bem com seus amigos, tendo, dessa forma, um intercâmbio impossível de ser melhor." }
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
            { es: "Tengo una pregunta sobre…", pt: "Tenho uma pergunta sobre…" }, { es: "Tengo una duda.", pt: "Tenho uma dúvida." },
            { es: "No sé si estoy en el aula/la clase correcta.", pt: "Não sei se estou na sala/aula certa." }, { es: "¿Cuál es la materia de la prueba?", pt: "Qual é a matéria da prova?" },
            { es: "¿Puede escribir eso en el pizarrón/la pizarra?", pt: "Pode escrever isso no quadro?" }, { es: "¿Puedo ver tus apuntes?", pt: "Posso ver suas anotações?" },
            { es: "No puedo venir el día de la prueba.", pt: "Não posso vir no dia da prova." }, { es: "¿Puedo hacer una prueba sustitutiva?", pt: "Posso fazer uma prova substitutiva?" },
            { es: "¿Se puede usar el diccionario en la prueba?", pt: "Pode usar o dicionário na prova?" }
          ]
        },
        {
          category: "Qué puede decir el profesor",
          items: [
            { es: "Va a haber prueba el viernes.", pt: "Vai ter prova na sexta-feira." }, { es: "La prueba vale 10 puntos.", pt: "A prova vale 10 pontos." },
            { es: "Abran el libro en la página…", pt: "Abram o livro na página…" }, { es: "Trabajen en pares/grupos de 4.", pt: "Trabalhem em duplas/grupos de 4." },
            { es: "¿Tienen alguna duda?", pt: "Vocês têm alguma dúvida?" }, { es: "Hay que aprendérselo de memoria.", pt: "Precisa decorar isso." }
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
        { who: "text", es: "10 consejos para hacer un currículum atractivo: 1 - Sea honesto. 2 - Haga un currículo de 1 página. 3 - Añada sus datos básicos. 4 - Especifique el nivel de sus habilidades. 5 - Especifique a cada puesto ocupado, las misiones y las tareas realizadas. 6 - Resalte sus experiencias y habilidades. 7 - Construya su CV en función del puesto al que aspira. 8 - Utilice un CV cronológico. 9 - Indique sus informaciones de contacto. 10 - Añada sus redes sociales.", pt: "10 dicas para fazer um currículo atraente: 1 - Seja honesto. 2 - Faça um currículo de 1 página. 3 - Adicione seus dados básicos. 4 - Especifique o nível das suas habilidades. 5 - Especifique, para cada cargo ocupado, as missões e as tarefas realizadas. 6 - Destaque suas experiências e habilidades. 7 - Construa seu currículo em função do cargo ao qual você aspira. 8 - Utilize um currículo cronológico. 9 - Indique suas informações de contato. 10 - Adicione suas redes sociais." }
      ],
      vocabulary: [
        {
          category: "Frases útiles (Currículo)",
          items: [
            { es: "Yo estudié en....", pt: "Eu estudei em...." }, { es: "Me recibí/gradué en….", pt: "Me formei/me graduei em…." }, { es: "Hice especialización en…", pt: "Fiz especialização em…" },
            { es: "También hice cursos de/en…", pt: "Também fiz cursos de/em…" }, { es: "Hablo (3) idiomas.", pt: "Falo (3) idiomas." },
            { es: "Mientras estaba en la universidad, tuve la oportunidad de trabajar para…", pt: "Enquanto estava na universidade, tive a oportunidade de trabalhar para…" },
            { es: "Hice la práctica en la…", pt: "Fiz o estágio na…" }, { es: "Trabajé como…", pt: "Trabalhei como…" }, { es: "Trabajé como voluntario en…", pt: "Trabalhei como voluntário em…" },
            { es: "Yo hice maestría en…", pt: "Fiz mestrado em…" }, { es: "Durante el posgrado estudié…", pt: "Durante a pós-graduação estudei…" }, { es: "Publiqué trabajos en…", pt: "Publiquei trabalhos em…" },
            { es: "Viví fuera por 3 años.", pt: "Morei fora por 3 anos." }, { es: "Mi trabajo incluía…", pt: "Meu trabalho incluía…" }, { es: "Me hacía cargo de…", pt: "Eu era responsável por…" },
            { es: "Era responsable por el desarrollo de…", pt: "Era responsável pelo desenvolvimento de…" }, { es: "Colaboré con la implementación de un nuevo…", pt: "Colaborei com a implementação de um novo…" },
            { es: "Adquirí mucha experiencia con…", pt: "Adquiri muita experiência com…" }, { es: "Aprendí mucho sobre…", pt: "Aprendi muito sobre…" },
            { es: "Mi tesis trataba sobre…", pt: "Minha tese tratava sobre…" }, { es: "Defendí tesis de doctorado en…", pt: "Defendi tese de doutorado em…" },
            { es: "Luego me promovieron a…", pt: "Depois fui promovido(a) a…" }, { es: "De (asistente) fui para (gerente).", pt: "De (assistente) fui para (gerente)." },
            { es: "Salí de la empresa en que trabajaba porque…", pt: "Saí da empresa em que trabalhava porque…" }, { es: "Tengo amplia experiencia en casi todas las áreas de...", pt: "Tenho ampla experiência em quase todas as áreas de..." }
          ]
        },
        {
          category: "Informaciones para el currículo",
          items: [
            { es: "Datos personales", pt: "Dados pessoais" }, { es: "Cargo/puesto deseado", pt: "Cargo desejado" }, { es: "Contacto", pt: "Contato" },
            { es: "Formación (académica)/Estudios", pt: "Formação (acadêmica)/Estudos" }, { es: "Formación complementaria", pt: "Formação complementar" },
            { es: "Habilidades y destrezas", pt: "Habilidades e competências" }, { es: "Experiencia profesional/laboral", pt: "Experiência profissional" },
            { es: "Idiomas", pt: "Idiomas" }, { es: "Resumen profesional", pt: "Resumo profissional" }, { es: "Otros datos de interés", pt: "Outros dados de interesse" }
          ]
        },
        {
          category: "Asignaturas",
          items: [
            { es: "Matemáticas", pt: "Matemática" }, { es: "Lengua", pt: "Língua/Português" }, { es: "Arte/Dibujo", pt: "Arte/Desenho" }, { es: "Biología", pt: "Biologia" },
            { es: "Geografía", pt: "Geografia" }, { es: "Química", pt: "Química" }, { es: "Religión", pt: "Religião" }, { es: "Informática", pt: "Informática" },
            { es: "Tecnología", pt: "Tecnologia" }, { es: "Educación Física", pt: "Educação Física" }, { es: "Ciencias", pt: "Ciências" }, { es: "Música", pt: "Música" },
            { es: "Historia", pt: "História" }, { es: "Física", pt: "Física" }
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
        { who: "A", es: "¡Gracias por haber venido!", pt: "Obrigado por ter vindo!" },
        { who: "B", es: "¡Yo que les agradezco por la oportunidad! Me interesé mucho por la compañía, porque creo que tiene todo que ver conmigo y me encuadro bien en este cargo.", pt: "Sou eu que agradeço a vocês pela oportunidade! Me interessei muito pela empresa, porque acho que tem tudo a ver comigo e me encaixo bem nesse cargo." },
        { who: "A", es: "Estamos felices de escuchar eso y le agradecemos por su interés en formar parte del equipo. Tuvimos buena impresión de usted y de su experiencia laboral. Usted puede empezar a trabajar con nosotros inmediatamente.", pt: "Ficamos felizes em ouvir isso e agradecemos seu interesse em fazer parte da equipe. Tivemos uma boa impressão de você e da sua experiência profissional. Você pode começar a trabalhar conosco imediatamente." },
        { who: "B", es: "¡Qué buena noticia! Si lo hubiera sabido, ya les habría enviado mi currículo mucho tiempo atrás.", pt: "Que boa notícia! Se eu soubesse, já teria enviado meu currículo há muito tempo." },
        { who: "A", es: "¡Nos alegramos! ¡Sea bienvenido!", pt: "Ficamos felizes! Seja bem-vindo!" },
        { who: "B", es: "¡Muchísimas gracias por la oportunidad que me están ofreciendo! No se van a arrepentir.", pt: "Muito obrigado pela oportunidade que estão me oferecendo! Vocês não vão se arrepender." }
      ],
      vocabulary: [
        {
          category: "Preguntas y comentarios del entrevistador",
          items: [
            { es: "Gracias por haber venido.", pt: "Obrigado por ter vindo." }, { es: "¿Puede hablar un poco sobre su formación?", pt: "Pode falar um pouco sobre a sua formação?" },
            { es: "Hábleme un poco sobre su experiencia en/como…", pt: "Me fale um pouco sobre sua experiência em/como…" }, { es: "¿Qué le atrajo en este cargo?", pt: "O que te atraiu nesse cargo?" },
            { es: "¿Qué estudió/cursó en la universidad?", pt: "O que você estudou/cursou na universidade?" }, { es: "¿Tiene conocimientos de/en…?", pt: "Você tem conhecimentos de/em…?" },
            { es: "¿Qué sueldo tiene actualmente?", pt: "Qual é o seu salário atual?" }, { es: "¿Qué nivel/categoría salarial usted tiene en mente?", pt: "Qual nível/faixa salarial você tem em mente?" },
            { es: "Tuvimos una buena impresión de usted.", pt: "Tivemos uma boa impressão de você." }, { es: "¿Cuándo puede empezar?", pt: "Quando você pode começar?" },
            { es: "Nos pondremos/Entraremos en contacto.", pt: "Entraremos em contato." }, { es: "No estamos necesitando a nadie en este momento.", pt: "Não estamos precisando de ninguém neste momento." }
          ]
        },
        {
          category: "Preguntas y comentarios del entrevistado",
          items: [
            { es: "Estoy en el momento buscando un cargo en…", pt: "No momento estou procurando um cargo em…" }, { es: "Creo que me encuadro bien en este cargo porque…", pt: "Acho que me encaixo bem neste cargo porque…" },
            { es: "Creo que mis puntos fuertes son…", pt: "Acho que meus pontos fortes são…" }, { es: "Tengo mucha experiencia en…", pt: "Tenho muita experiência em…" },
            { es: "Adjunté algunas recomendaciones de empleadores anteriores en mi currículo.", pt: "Anexei algumas recomendações de empregadores anteriores no meu currículo." },
            { es: "En mi cargo anterior estaba recibiendo…", pt: "No meu cargo anterior eu recebia…" }, { es: "Es una propuesta interesante.", pt: "É uma proposta interessante." },
            { es: "¿Puedo darle una respuesta al comienzo de la semana?", pt: "Posso te dar uma resposta no começo da semana?" }, { es: "Puedo empezar inmediatamente/hoy mismo.", pt: "Posso começar imediatamente/hoje mesmo." }
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
        { who: "text", es: "El calentamiento global — 10 consejos: 1. Reduce el consumo de agua. 2. Planta un árbol. 3. Educa a los más jóvenes. 4. Modera el uso del vehículo y reduce el consumo del aire acondicionado. 5. Evita usar en exceso la plancha, el calentador de agua o la lavadora. 6. Usa habitualmente papel reciclado y reduce el consumo de papel. 7. Recicla la basura. 8. No consumas animales exóticos como tortugas e iguanas, y pescado de tamaños pequeños. 9. Exige del gobierno la gestión sostenible a largo plazo de los recursos naturales. 10. Minimiza el uso de productos químicos como aerosoles, fertilizantes, etc.", pt: "O aquecimento global — 10 dicas: 1. Reduza o consumo de água. 2. Plante uma árvore. 3. Eduque os mais jovens. 4. Modere o uso do veículo e reduza o consumo do ar-condicionado. 5. Evite usar em excesso o ferro de passar, o aquecedor de água ou a máquina de lavar. 6. Use habitualmente papel reciclado e reduza o consumo de papel. 7. Recicle o lixo. 8. Não consuma animais exóticos como tartarugas e iguanas, e peixes de tamanhos pequenos. 9. Exija do governo a gestão sustentável a longo prazo dos recursos naturais. 10. Minimize o uso de produtos químicos como aerossóis, fertilizantes, etc." }
      ],
      vocabulary: [
        {
          category: "Geografía - Medio Ambiente - Naturaleza",
          items: [
            { es: "Sistema solar", pt: "Sistema solar" }, { es: "Planeta", pt: "Planeta" }, { es: "Tornado", pt: "Tornado" }, { es: "Rayo", pt: "Raio" }, { es: "Trueno", pt: "Trovão" },
            { es: "Terremoto", pt: "Terremoto" }, { es: "Termómetro", pt: "Termômetro" }, { es: "Capa de ozono", pt: "Camada de ozônio" }, { es: "Sombra", pt: "Sombra" },
            { es: "Tierra", pt: "Terra" }, { es: "Atmósfera", pt: "Atmosfera" }, { es: "Roca", pt: "Rocha" }, { es: "Cielo", pt: "Céu" }, { es: "Región", pt: "Região" },
            { es: "Línea Costera", pt: "Linha costeira" }, { es: "Cascada", pt: "Cachoeira" }, { es: "Evolución", pt: "Evolução" }, { es: "Sol", pt: "Sol" }, { es: "Luna", pt: "Lua" },
            { es: "Paisaje", pt: "Paisagem" }, { es: "Recurso natural", pt: "Recurso natural" }, { es: "Elemento", pt: "Elemento" }, { es: "Renovable/No renovable", pt: "Renovável/Não renovável" },
            { es: "Relieve", pt: "Relevo" }, { es: "Mineral", pt: "Mineral" }, { es: "Vegetación", pt: "Vegetação" }, { es: "Temperatura", pt: "Temperatura" },
            { es: "Precipitación", pt: "Precipitação" }, { es: "Viento", pt: "Vento" }, { es: "Suelo", pt: "Solo" }, { es: "Volcán", pt: "Vulcão" },
            { es: "Glaciar", pt: "Geleira" }, { es: "Hielo marino", pt: "Gelo marinho" }, { es: "Irradiación", pt: "Irradiação" },
            { es: "Océano", pt: "Oceano" }, { es: "Nivel del mar", pt: "Nível do mar" }, { es: "Árbol", pt: "Árvore" }, { es: "Flor", pt: "Flor" }, { es: "Hoja", pt: "Folha" },
            { es: "Planta", pt: "Planta" }, { es: "Fauna", pt: "Fauna" }, { es: "Flora", pt: "Flora" }, { es: "Densidad", pt: "Densidade" }, { es: "Nube", pt: "Nuvem" },
            { es: "Humedad", pt: "Umidade" }, { es: "Insolación", pt: "Insolação" }, { es: "Presión atmosférica", pt: "Pressão atmosférica" }, { es: "Ecosistema", pt: "Ecossistema" },
            { es: "Desierto", pt: "Deserto" }, { es: "Selva", pt: "Selva" }, { es: "Bosque", pt: "Floresta/Bosque" }, { es: "Matorral", pt: "Matagal" },
            { es: "Costa", pt: "Costa" }, { es: "Humedal", pt: "Pântano" }, { es: "Río", pt: "Rio" }, { es: "Lago", pt: "Lago" }, { es: "Mar", pt: "Mar" },
            { es: "Meteoro", pt: "Meteoro" }, { es: "Estrella", pt: "Estrela" }
          ]
        },
        {
          category: "El sistema solar",
          items: [
            { es: "Sol", pt: "Sol" }, { es: "Mercurio", pt: "Mercúrio" }, { es: "Venus", pt: "Vênus" }, { es: "Tierra", pt: "Terra" }, { es: "Marte", pt: "Marte" },
            { es: "Júpiter", pt: "Júpiter" }, { es: "Saturno", pt: "Saturno" }, { es: "Urano", pt: "Urano" }, { es: "Neptuno", pt: "Netuno" }, { es: "Plutón", pt: "Plutão" }
          ]
        },
        {
          category: "Palabras biacentuales",
          items: [
            { es: "Afrodisíaco/Afrodisiaco", pt: "Afrodisíaco (as duas grafias são aceitas em espanhol)" }, { es: "Cardíaco/Cardiaco", pt: "Cardíaco (as duas grafias são aceitas em espanhol)" }, { es: "Chófer/Chofer", pt: "Motorista (as duas grafias são aceitas em espanhol)" },
            { es: "Fútbol/Futbol", pt: "Futebol (as duas grafias são aceitas em espanhol)" }, { es: "Cóctel/Coctel", pt: "Coquetel (as duas grafias são aceitas em espanhol)" }, { es: "Vídeo/Video", pt: "Vídeo (as duas grafias são aceitas em espanhol)" }, { es: "Kárate/Karate", pt: "Caratê (as duas grafias são aceitas em espanhol)" },
            { es: "Electrólisis/Electrolisis", pt: "Eletrólise (as duas grafias são aceitas em espanhol)" }, { es: "Endoscopía/Endoscopia", pt: "Endoscopia (as duas grafias são aceitas em espanhol)" }, { es: "Rinoplastía/Rinoplastia", pt: "Rinoplastia (as duas grafias são aceitas em espanhol)" },
            { es: "Período/Periodo", pt: "Período (as duas grafias são aceitas em espanhol)" }, { es: "Búmeran/Bumerán", pt: "Bumerangue (as duas grafias são aceitas em espanhol)" }, { es: "Olimpíada/Olimpiada", pt: "Olimpíada (as duas grafias são aceitas em espanhol)" },
            { es: "Maníaco/Maniaco", pt: "Maníaco (as duas grafias são aceitas em espanhol)" }, { es: "Píxel/Pixel", pt: "Pixel (as duas grafias são aceitas em espanhol)" }
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
        { who: "text", es: "Trecho da canção 'Si no te hubieras ido' (Maná): Te extraño más que nunca y no sé qué hacer. Despierto y te recuerdo al amanecer. Me espera otro día por vivir sin ti. El espejo no miente me veo tan diferente. Me haces falta tú. La gente pasa y pasa siempre tan igual. El ritmo de la vida me parece mal. Era tan diferente cuando estabas tú. No hay nada más difícil que vivir sin ti. Sufriendo en la espera de verte llegar. Si no te hubieras ido sería tan feliz.", pt: "Trecho da canção 'Si no te hubieras ido' (Maná): Sinto sua falta mais do que nunca e não sei o que fazer. Acordo e me lembro de você ao amanhecer. Me espera mais um dia para viver sem você. O espelho não mente, me vejo tão diferente. Sinto sua falta. As pessoas passam e passam sempre do mesmo jeito. O ritmo da vida me parece ruim. Era tão diferente quando você estava aqui. Não há nada mais difícil que viver sem você. Sofrendo à espera de te ver chegar. Se você não tivesse ido embora, eu seria tão feliz." }
      ],
      vocabulary: [
        {
          category: "Tipos de entretenimiento",
          items: [
            { es: "Hacer ejercicios", pt: "Fazer exercícios" }, { es: "Mirar/Ver programas de televisión/películas/series/telenovelas", pt: "Assistir a programas de televisão/filmes/séries/novelas" },
            { es: "Escuchar música", pt: "Ouvir música" }, { es: "Jugar juegos", pt: "Jogar jogos" }, { es: "Dibujar", pt: "Desenhar" }, { es: "Cantar (karaoke)", pt: "Cantar (karaokê)" },
            { es: "Leer un libro/historietas/noticias/artículos", pt: "Ler um livro/quadrinhos/notícias/artigos" }, { es: "Salir con los amigos", pt: "Sair com os amigos" },
            { es: "Navegar por internet", pt: "Navegar na internet" }, { es: "Ir a fiestas", pt: "Ir a festas" }, { es: "Ir de compras", pt: "Ir às compras" }, { es: "Ir de paseo", pt: "Passear" },
            { es: "Bailar", pt: "Dançar" }, { es: "Tomar un curso", pt: "Fazer um curso" }, { es: "Ir al cine", pt: "Ir ao cinema" }, { es: "Ir al teatro", pt: "Ir ao teatro" },
            { es: "Cocinar", pt: "Cozinhar" }, { es: "Ir a viajar", pt: "Viajar" }, { es: "Ir a un concierto", pt: "Ir a um show" }, { es: "Salir para comer en restaurantes", pt: "Sair para comer em restaurantes" }
          ]
        },
        {
          category: "Frases útiles",
          items: [
            { es: "¿Vamos a salir?", pt: "Vamos sair?" }, { es: "¿Quieren hacer algo esta noche?", pt: "Vocês querem fazer algo hoje à noite?" }, { es: "¿Vamos a ver una peli?", pt: "Vamos ver um filme?" },
            { es: "¿Quieres ir al cine conmigo?", pt: "Você quer ir ao cinema comigo?" }, { es: "Quiero ir al gimnasio.", pt: "Quero ir à academia." },
            { es: "Conozco un lugar muy bueno para bailar.", pt: "Conheço um lugar muito bom para dançar." }, { es: "¿Qué tipo de película te gusta más?", pt: "Que tipo de filme você mais gosta?" },
            { es: "La fiesta estuvo buenísima.", pt: "A festa estava ótima." }, { es: "¿Te gusta leer?", pt: "Você gosta de ler?" }, { es: "¿Viste la telenovela...?", pt: "Você viu a novela...?" },
            { es: "¿Te gustaría ir al concierto de Maluma?", pt: "Você gostaria de ir ao show do Maluma?" }, { es: "Mi pasatiempo favorito es jugar en la compu.", pt: "Meu passatempo favorito é jogar no computador." }
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
        { who: "A", es: "¡Buen día! Tengo una reserva para hoy a nombre de Luciano Pérez.", pt: "Bom dia! Tenho uma reserva para hoje em nome de Luciano Pérez." },
        { who: "B", es: "Sí, señor. Es una habitación doble por 5 noches, ¿verdad?", pt: "Sim, senhor. É um quarto duplo por 5 noites, certo?" },
        { who: "A", es: "Sí, eso mismo.", pt: "Sim, isso mesmo." },
        { who: "B", es: "Su pasaporte, por favor.", pt: "Seu passaporte, por favor." },
        { who: "A", es: "Aquí lo tiene.", pt: "Aqui está." },
        { who: "B", es: "¡Perfecto! Rellene esta ficha con sus datos, por favor, y luego les acompañarán a su habitación.", pt: "Perfeito! Preencha esta ficha com seus dados, por favor, e depois vão acompanhá-los até o quarto." },
        { who: "A", es: "Listo. ¿A qué hora es el desayuno?", pt: "Pronto. A que horas é o café da manhã?" },
        { who: "B", es: "De las 7h30 a las 10h45.", pt: "Das 7h30 às 10h45." },
        { who: "A", es: "¡Muchísimas gracias!", pt: "Muito obrigado!" },
        { who: "B", es: "¡Gracias a ustedes y que disfruten de sus vacaciones!", pt: "Obrigado a vocês e aproveitem as férias!" }
      ],
      vocabulary: [
        {
          category: "Habitación",
          items: [
            { es: "Simple/Individual", pt: "Simples/Individual" }, { es: "Doble", pt: "Duplo" }, { es: "Matrimonio", pt: "Casal" }, { es: "Con vistas al mar", pt: "Com vista para o mar" },
            { es: "En la parte delantera/trasera", pt: "Na parte da frente/dos fundos" }, { es: "En un piso alto/bajo", pt: "Em um andar alto/baixo" }, { es: "Con cama supletoria", pt: "Com cama extra" },
            { es: "Con cuna", pt: "Com berço" }, { es: "Con baño", pt: "Com banheiro" }, { es: "Con balcón/terraza", pt: "Com varanda/terraço" }, { es: "Con aire acondicionado", pt: "Com ar-condicionado" },
            { es: "Con calefacción", pt: "Com aquecimento" }
          ]
        },
        {
          category: "Objetos del hotel",
          items: [
            { es: "Lámpara", pt: "Abajur" }, { es: "Cojín", pt: "Almofada" }, { es: "Calefacción", pt: "Aquecimento" },
            { es: "Aire acondicionado", pt: "Ar-condicionado" }, { es: "Colgadores/Perchas", pt: "Cabides" }, { es: "Silla", pt: "Cadeira" },
            { es: "Timbre", pt: "Campainha" }, { es: "Cartel", pt: "Aviso" }, { es: "Frazada/Cobija/Manta", pt: "Coberta" },
            { es: "Colcha/Cubrecama", pt: "Colcha" }, { es: "Colchón", pt: "Colchão" },
            { es: "Mando a distancia/Control remoto", pt: "Controle remoto" }, { es: "Ducha", pt: "Chuveiro" }, { es: "Cuenta/Factura", pt: "Conta/Nota" },
            { es: "Vaso", pt: "Copo" }, { es: "Mesita de noche/Velador", pt: "Mesa de cabeceira" },
            { es: "Espejo", pt: "Espelho" }, { es: "Cerradura", pt: "Fechadura" }, { es: "Funda", pt: "Fronha" },
            { es: "Sábanas", pt: "Lençóis" }, { es: "Cajón", pt: "Gaveta" }, { es: "Interruptor/Switch", pt: "Interruptor" },
            { es: "Ventana", pt: "Janela" }, { es: "Bombilla/Ampolleta", pt: "Lâmpada" },
            { es: "Picaporte/Manija", pt: "Maçaneta" }, { es: "Asidero", pt: "Barra de apoio" },
            { es: "Wáter/Inodoro", pt: "Vaso sanitário" }, { es: "Enchufe", pt: "Tomada" }, { es: "Lavatorio", pt: "Pia" },
            { es: "Alfombra", pt: "Tapete" }, { es: "Televisor", pt: "Televisor" }, { es: "Pestillo", pt: "Tranca" },
            { es: "Ventilación", pt: "Ventilação" }, { es: "Voltaje", pt: "Voltagem" }, { es: "Minibar", pt: "Frigobar" }, { es: "Lecho/Cama", pt: "Cama" },
            { es: "Cable", pt: "Cabo" }, { es: "Cargador", pt: "Carregador" }, { es: "Supresor de picos", pt: "Régua" },
            { es: "Pila", pt: "Pilha" }, { es: "Plancha de pelo", pt: "Chapinha" }, { es: "Secador de pelo", pt: "Secador" }
          ]
        },
        {
          category: "Frases útiles",
          items: [
            { es: "¿Tiene habitaciones disponibles?", pt: "Tem quartos disponíveis?" }, { es: "Quisiera una habitación simple/individual/doble…", pt: "Eu gostaria de um quarto simples/individual/duplo…" },
            { es: "¿Cuál es el precio por noche?", pt: "Qual é o preço por noite?" }, { es: "¿Está incluso el desayuno?", pt: "O café da manhã está incluso?" },
            { es: "¿Puedo ver la habitación?", pt: "Posso ver o quarto?" }, { es: "¿A qué hora debo desocupar la habitación?", pt: "A que horas devo desocupar o quarto?" },
            { es: "Tengo una reserva para hoy a nombre de…", pt: "Tenho uma reserva para hoje em nome de…" }, { es: "¿Podría darme mi cuenta?", pt: "Poderia me dar minha conta?" },
            { es: "Rellene esta ficha con sus datos, por favor.", pt: "Preencha esta ficha com seus dados, por favor." }, { es: "¿Consumieron algo del minibar?", pt: "Vocês consumiram algo do frigobar?" }
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
        { who: "text", es: "Estoy pensando en empezar a practicar algún deporte porque sé que además de hacer mejorar la capacidad física, también es bueno para el psicológico, porque la persona se siente mejor con su cuerpo y tiene la mente más despejada. El deporte no puede ser una cosa mala para tu vida, porque puede ser un pasatiempo, juego, diversión, competición y hacerte tener más disciplina. Estaba pensando en algún deporte externo y que también pueda ser practicado en el interior, como el vóleibol, pero después pensé mejor y he decidido que voy a nadar, porque la natación es buenísima para la salud y para todo lo demás. Estoy muy ansiosa para empezar. Si tuviera tiempo, empezaría hoy mismo, pero creo que empezaré el próximo mes pues estaré trabajando un tercio del tiempo que estoy trabajando en este momento. Después les cuento más novedades.", pt: "Estou pensando em começar a praticar algum esporte porque sei que, além de melhorar a capacidade física, também é bom para o psicológico, porque a pessoa se sente melhor com o corpo e tem a mente mais tranquila. O esporte não pode ser uma coisa ruim para a sua vida, porque pode ser um passatempo, jogo, diversão, competição e te fazer ter mais disciplina. Eu estava pensando em algum esporte externo que também pudesse ser praticado dentro de casa, como o vôlei, mas depois pensei melhor e decidi que vou nadar, porque a natação é ótima para a saúde e para tudo mais. Estou muito ansiosa para começar. Se eu tivesse tempo, começaria hoje mesmo, mas acho que vou começar no próximo mês, pois estarei trabalhando um terço do tempo que estou trabalhando neste momento. Depois conto mais novidades." }
      ],
      vocabulary: [
        {
          category: "Deportes",
          items: [
            { es: "Alpinismo", pt: "Alpinismo" }, { es: "Atletismo", pt: "Atletismo" }, { es: "Automovilismo", pt: "Automobilismo" }, { es: "Básquet/Baloncesto", pt: "Basquete" },
            { es: "Béisbol", pt: "Beisebol" }, { es: "Boxeo", pt: "Boxe" }, { es: "Buceo", pt: "Mergulho" }, { es: "Kárate", pt: "Caratê" }, { es: "Ciclismo", pt: "Ciclismo" },
            { es: "Críquet", pt: "Críquete" }, { es: "Equitación", pt: "Hipismo/Equitação" }, { es: "Esgrima", pt: "Esgrima" }, { es: "Esquí (acuático)", pt: "Esqui (aquático)" },
            { es: "Fútbol/Balonpié", pt: "Futebol" }, { es: "Fútbol americano", pt: "Futebol americano" }, { es: "Gimnasia artística/rítmica", pt: "Ginástica artística/rítmica" },
            { es: "Golf", pt: "Golfe" }, { es: "Halterofilia", pt: "Halterofilismo" }, { es: "Hockey", pt: "Hóquei" }, { es: "Hándbol/Balonmano", pt: "Handebol" },
            { es: "Hipismo", pt: "Hipismo" }, { es: "Judo", pt: "Judô" }, { es: "Montañismo", pt: "Montanhismo" }, { es: "Motociclismo", pt: "Motociclismo" }, { es: "Natación", pt: "Natação" },
            { es: "Paracaidismo", pt: "Paraquedismo" }, { es: "Parapente", pt: "Parapente" }, { es: "Paragüismo", pt: "Paraquedismo (variante regional)" }, { es: "Patinaje", pt: "Patinação" },
            { es: "Ping-Pong", pt: "Pingue-pongue" }, { es: "Remo", pt: "Remo" }, { es: "Rugby", pt: "Rúgbi" }, { es: "Surf", pt: "Surfe" }, { es: "Taekwondo", pt: "Taekwondo" },
            { es: "Tenis", pt: "Tênis" }, { es: "Tiro con arco", pt: "Tiro com arco" }, { es: "Tiro al blanco", pt: "Tiro ao alvo" }, { es: "Vóleibol/Balonvolea", pt: "Vôlei" }
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
        { who: "text", es: "Ritmos latinos = combinación de vários ritmos como son, salsa, cumbia, bachata, samba, mambo, cha cha cha, rumba, conga, merengue etc. El Son es considerado el 'abuelo' de la mayoría de los ritmos latinos actuales. La Salsa es una mezcla de estilos de música cubana y afro-caribeña. La Cumbia tiene origen africana y es popular en Panamá, Venezuela, Perú y, sobre todo, en Colombia. La Bachata tiene fuerte arraigo en la clase baja y zonas rurales. El Mambo nace en Cuba y llega a Europa en los años 60. El Cha, cha, cha fue creado por el violinista cubano Enrique Jorrín en 1948. La Rumba es forma musical y danza de salón para parejas, de origen en el folclore afrocubano. El Merengue es un estilo del Caribe con elementos de la contradanza, mazurca y vals europeos.", pt: "Ritmos latinos = combinação de vários ritmos como o son, salsa, cúmbia, bachata, samba, mambo, cha cha cha, rumba, conga, merengue etc. O Son é considerado o 'avô' da maioria dos ritmos latinos atuais. A Salsa é uma mistura de estilos de música cubana e afro-caribenha. A Cúmbia tem origem africana e é popular no Panamá, na Venezuela, no Peru e, sobretudo, na Colômbia. A Bachata tem forte raiz na classe baixa e em zonas rurais. O Mambo nasce em Cuba e chega à Europa nos anos 60. O Cha, cha, cha foi criado pelo violinista cubano Enrique Jorrín em 1948. A Rumba é uma forma musical e dança de salão para casais, com origem no folclore afro-cubano. O Merengue é um estilo do Caribe com elementos da contradança, mazurca e valsa europeias." }
      ],
      vocabulary: [
        {
          category: "Estilos/Ritmos musicales",
          items: [
            { es: "Rock", pt: "Rock" }, { es: "Pop", pt: "Pop" }, { es: "Música electrónica", pt: "Música eletrônica" }, { es: "Rap", pt: "Rap" }, { es: "Hip-Hop", pt: "Hip-Hop" },
            { es: "Reggae", pt: "Reggae" }, { es: "Bachata", pt: "Bachata" }, { es: "Reggaetón", pt: "Reggaeton" }, { es: "Clásica", pt: "Clássica" }, { es: "Banda", pt: "Banda" },
            { es: "Balada", pt: "Balada" }, { es: "Metal", pt: "Metal" }, { es: "Salsa", pt: "Salsa" }, { es: "Punk", pt: "Punk" }, { es: "Jazz", pt: "Jazz" },
            { es: "Grunge", pt: "Grunge" }, { es: "Cumbia", pt: "Cúmbia" }, { es: "Ska", pt: "Ska" }, { es: "Samba", pt: "Samba" }, { es: "Dance", pt: "Dance" }, { es: "Soul", pt: "Soul" },
            { es: "Folk", pt: "Folk" }, { es: "Disco", pt: "Disco" }, { es: "Trance", pt: "Trance" }, { es: "Swing", pt: "Swing" }, { es: "Country", pt: "Country" },
            { es: "Mambo", pt: "Mambo" }, { es: "Dancehall", pt: "Dancehall" }, { es: "Blues", pt: "Blues" }, { es: "Merengue", pt: "Merengue" }, { es: "Ranchero", pt: "Ranchera (música mexicana)" },
            { es: "Rhythm and Blues (R&B)", pt: "Rhythm and Blues (R&B)" }, { es: "Ópera", pt: "Ópera" }, { es: "Flamenco", pt: "Flamenco" }, { es: "Tango", pt: "Tango" },
            { es: "Bolero", pt: "Bolero" }, { es: "Vallenato", pt: "Vallenato" }, { es: "Trip-hop", pt: "Trip-hop" }, { es: "Bossa nova", pt: "Bossa nova" }
          ]
        },
        {
          category: "Instrumentos musicales",
          items: [
            { es: "Arpa", pt: "Harpa" }, { es: "Clarinete", pt: "Clarinete" }, { es: "Guitarra", pt: "Violão" }, { es: "Guitarra eléctrica", pt: "Guitarra elétrica" }, { es: "Violín", pt: "Violino" },
            { es: "Teclado", pt: "Teclado" }, { es: "Batería", pt: "Bateria" }, { es: "Flauta", pt: "Flauta" }, { es: "Piano", pt: "Piano" }, { es: "Bajo eléctrico", pt: "Baixo elétrico" },
            { es: "Theremín", pt: "Teremim" }, { es: "Sintetizador", pt: "Sintetizador" }, { es: "Saxófano/Saxofón/Saxo", pt: "Saxofone" }, { es: "Tambor", pt: "Tambor" },
            { es: "Trompeta", pt: "Trompete" }, { es: "Micrófono", pt: "Microfone" }, { es: "Órgano clásico", pt: "Órgão clássico" }, { es: "Xilófono", pt: "Xilofone" }, { es: "Maraca", pt: "Maracá" },
            { es: "Oboe", pt: "Oboé" }, { es: "Timbal", pt: "Tímbale/Timbal" }, { es: "Platillos", pt: "Pratos" }, { es: "Bombo", pt: "Bumbo" }, { es: "Contrabajo", pt: "Contrabaixo" }
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
        { who: "A", es: "¡Perdone! ¿Usted me podría ayudar?", pt: "Com licença! Você poderia me ajudar?" },
        { who: "B", es: "Por supuesto. ¿Qué necesita?", pt: "Claro. O que você precisa?" },
        { who: "A", es: "Quisiera saber dónde hay una tienda de herramientas cerca de aquí. Necesito comprar unos clavos, tornillos y un martillo.", pt: "Eu gostaria de saber onde há uma loja de ferramentas perto daqui. Preciso comprar uns pregos, parafusos e um martelo." },
        { who: "B", es: "Hay una que se llama Señor Sierra a dos cuadras de aquí. Siga recto por una cuadra, luego gire a la izquierda y la encontrará.", pt: "Tem uma que se chama Señor Sierra a duas quadras daqui. Siga reto por uma quadra, depois vire à esquerda e você vai encontrá-la." },
        { who: "A", es: "¡Perfecto! ¡Muy amable!", pt: "Perfeito! Muito gentil!" },
        { who: "B", es: "¿Le puedo ayudar con algo más?", pt: "Posso te ajudar com mais alguma coisa?" },
        { who: "A", es: "Sí, por favor. Después de la tienda quedé con mi amiga de encontrarnos en un restaurante cuya comida es china y no sé cómo llegar hasta allá.", pt: "Sim, por favor. Depois da loja combinei com minha amiga de nos encontrarmos em um restaurante cuja comida é chinesa e não sei como chegar até lá." },
        { who: "B", es: "¿Cómo se llama el restaurante?", pt: "Como se chama o restaurante?" },
        { who: "A", es: "El Toro.", pt: "El Toro." },
        { who: "B", es: "Bueno, queda cerca. Solo tiene que cruzar la calle cuando salga de la tienda y ahí estará ubicado.", pt: "Certo, fica perto. Só precisa atravessar a rua quando sair da loja e ele estará ali." },
        { who: "A", es: "¡Qué fácil! ¡Muchísimas gracias!", pt: "Que fácil! Muito obrigada!" },
        { who: "B", es: "¡No ha sido nada! ¡Que tenga un buen día!", pt: "Não foi nada! Tenha um bom dia!" }
      ],
      vocabulary: [
        {
          category: "Herramientas",
          items: [
            { es: "Alicates/Tenazas", pt: "Alicate/Torquês" }, { es: "Taladro", pt: "Furadeira" },
            { es: "Navaja", pt: "Navalha" }, { es: "Cincel", pt: "Cinzel" }, { es: "Cortador de cables", pt: "Cortador de cabos" },
            { es: "Linterna", pt: "Lanterna" }, { es: "Destornillador", pt: "Chave de fenda" }, { es: "Azada", pt: "Enxada" },
            { es: "Extractor (de tornillos)/Broca", pt: "Extrator (de parafusos)/Broca" }, { es: "Formón", pt: "Formão" },
            { es: "Juego de herramientas", pt: "Jogo de ferramentas" }, { es: "Llave (inglesa, hexagonal, de tuercas...)", pt: "Chave (inglesa, hexagonal, de porcas...)" },
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
        { who: "A", es: "Lucia, ¿vamos al concierto esta noche?", pt: "Lucia, vamos ao show hoje à noite?" },
        { who: "B", es: "Amiga, creo que va a estar bueno pero va a haber una multitud, además de la pelirroja que me ha robado el novio.", pt: "Amiga, acho que vai ser bom, mas vai ter uma multidão, além da ruiva que me roubou o namorado." },
        { who: "A", es: "Hmmm... Entiendo... Quizás podríamos ir entonces a cenar en la casa de Priscila. Nos ha invitado y dicho que seremos bienvenidas allá.", pt: "Hmmm... Entendo... Talvez a gente pudesse então ir jantar na casa da Priscila. Ela nos convidou e disse que seremos bem-vindas lá." },
        { who: "B", es: "Sí, creo que puede ser una buena idea. Voy a hablar con mi familia a ver si me dejan usar el coche. Solo espero que nadie malo allá diga algo sobre mi ex y sea aguafiestas.", pt: "Sim, acho que pode ser uma boa ideia. Vou falar com a minha família para ver se me deixam usar o carro. Só espero que ninguém chato fale algo sobre meu ex e seja estraga-prazeres." },
        { who: "A", es: "Estoy segura de que no va a pasar nada. Nadie te va a quitar la sonrisa de la cara. Somos todos como familia. ¡Nos vamos a divertir mucho!", pt: "Tenho certeza de que não vai acontecer nada. Ninguém vai tirar o sorriso do seu rosto. Somos todos como uma família. Vamos nos divertir muito!" },
        { who: "B", es: "Está bien Mari, te llamo más tarde a ver a que hora quedamos.", pt: "Está bem, Mari, te ligo mais tarde para ver a que horas a gente combina." },
        { who: "A", es: "Bueno, ¡hasta luego!", pt: "Certo, até mais!" }
      ],
      vocabulary: [
        {
          category: "Palabras compuestas (exemplos)",
          items: [
            { es: "Abrebotellas", pt: "Abridor de garrafas" }, { es: "Abrelatas", pt: "Abridor de latas" }, { es: "Agridulce", pt: "Agridoce" }, { es: "Aguafiestas", pt: "Estraga-prazeres" },
            { es: "Altibajo", pt: "Altos e baixos" }, { es: "Automóvil", pt: "Automóvel" }, { es: "Bajamar", pt: "Maré baixa" }, { es: "Balompié", pt: "Futebol (termo formal)" }, { es: "Baloncesto", pt: "Basquete" },
            { es: "Bienvenida", pt: "Bem-vinda(o)" }, { es: "Bocacalle", pt: "Esquina/cruzamento de rua" }, { es: "Compraventa", pt: "Compra e venda" }, { es: "Cortaplumas", pt: "Canivete" },
            { es: "Cumpleaños", pt: "Aniversário" }, { es: "Girasol", pt: "Girassol" }, { es: "Guardarropa", pt: "Guarda-roupa" }, { es: "Hispanoamericano", pt: "Hispano-americano" },
            { es: "Lavaplatos", pt: "Lava-louças" }, { es: "Limpiabotas", pt: "Engraxate" }, { es: "Mapamundi", pt: "Mapa-múndi" }, { es: "Mediodía", pt: "Meio-dia" },
            { es: "Parabrisas", pt: "Para-brisa" }, { es: "Paraguas", pt: "Guarda-chuva" }, { es: "Pararrayos", pt: "Para-raios" }, { es: "Pasatiempo", pt: "Passatempo" },
            { es: "Pelirrojo", pt: "Ruivo" }, { es: "Portaaviones", pt: "Porta-aviões" }, { es: "Rascacielos", pt: "Arranha-céu" }, { es: "Rompecabezas", pt: "Quebra-cabeça" },
            { es: "Sabelotodo", pt: "Sabe-tudo" }, { es: "Sacacorchos", pt: "Saca-rolhas" }, { es: "Sacapuntas", pt: "Apontador" }, { es: "Salvavidas", pt: "Salva-vidas" }
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
            { es: "Academia", pt: "Academia" }, { es: "Alcohol", pt: "Álcool" }, { es: "Alergia", pt: "Alergia" }, { es: "Alguien", pt: "Alguém" }, { es: "Atmósfera", pt: "Atmosfera" },
            { es: "Burocracia", pt: "Burocracia" }, { es: "Cerebro", pt: "Cérebro" }, { es: "Cráter", pt: "Cratera" }, { es: "Diplomacia", pt: "Diplomacia" }, { es: "Élite", pt: "Elite" },
            { es: "Epidemia", pt: "Epidemia" }, { es: "Pandemia", pt: "Pandemia" }, { es: "Euforia", pt: "Euforia" }, { es: "Fobia", pt: "Fobia" }, { es: "Gaucho", pt: "Gaúcho" },
            { es: "Héroe", pt: "Herói" }, { es: "Imán", pt: "Ímã" }, { es: "Imbécil", pt: "Imbecil" }, { es: "Límite", pt: "Limite" }, { es: "Magia", pt: "Magia" }, { es: "Metro", pt: "Metrô" },
            { es: "Micrófono", pt: "Microfone" }, { es: "Miope", pt: "Míope" }, { es: "Nivel", pt: "Nível" }, { es: "Nostalgia", pt: "Nostalgia" }, { es: "Oxígeno", pt: "Oxigênio" },
            { es: "Pantano", pt: "Pântano" }, { es: "Parásito", pt: "Parasita" }, { es: "Policía", pt: "Polícia" }, { es: "Prototipo", pt: "Protótipo" }, { es: "Régimen", pt: "Regime" },
            { es: "Sarampión", pt: "Sarampo" }, { es: "Síntoma", pt: "Sintoma" }, { es: "Teléfono", pt: "Telefone" }, { es: "Tulipán", pt: "Tulipa" }
          ]
        },
        {
          category: "Heterogenéricos (gênero diferente do português)",
          items: [
            { es: "El coraje", pt: "masc. em espanhol, fem. em português" }, { es: "El equipaje", pt: "masc. em espanhol, fem. em português (bagagem)" }, { es: "El garaje", pt: "masc. em espanhol, fem. em português (garagem)" },
            { es: "El viaje", pt: "masc. em espanhol, fem. em português (viagem)" }, { es: "El lenguaje", pt: "masc. em espanhol, fem. em português (linguagem)" }, { es: "El puente", pt: "masc. em espanhol, fem. em português (ponte)" }, { es: "El fraude", pt: "masc. em espanhol, fem. em português (fraude)" }, { es: "El insomnio", pt: "masc. em espanhol, fem. em português (insônia)" },
            { es: "El árbol", pt: "masc. em espanhol, fem. em português (árvore)" }, { es: "La mascota", pt: "fem. em espanhol, masc. em português" }, { es: "La nariz", pt: "fem. em espanhol, masc. em português (nariz)" },
            { es: "La sonrisa", pt: "fem. em espanhol, masc. em português (sorriso)" }, { es: "La sal", pt: "fem. em espanhol, masc. em português (sal)" }, { es: "La señal", pt: "fem. em espanhol, masc. em português (sinal)" }, { es: "La licuadora", pt: "fem. em espanhol, masc. em português (liquidificador)" }, { es: "La leche", pt: "fem. em espanhol, masc. em português (leite)" },
            { es: "La miel", pt: "fem. em espanhol, masc. em português (mel)" }
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
