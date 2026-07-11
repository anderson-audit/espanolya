/* ==========================================================================
   EspañolYa! — Conteúdo: Módulo BÔNUS · SECRETOS DEL ESPAÑOL
   Fonte: Método Espanhol de Verdade (MEV), Módulo 6
   Falsos cognatos, diferenças de significado, expressões/gírias regionais,
   ditados populares, variação de vocabulário por país e trava-línguas.
   Módulo de curiosidades — sem prova obrigatória.
   ========================================================================== */

const LEVEL_SECRETOS = {
  id: "secretos",
  name: "Secretos del Español",
  icon: "🔎",
  colorFrom: "#e65100",
  colorTo: "#AA151B",
  description: "Módulo bônus: 100 falsos cognatos, expressões, gírias regionais e ditados populares — para você soar como um nativo da Espanha.",
  lessons: [
    {
      id: "s1", order: 1, title: "100 Falsos Amigos", subtitle: "Palavras que enganam o brasileiro",
      vocabulary: [
        {category:"Falsos cognatos (espanhol → o que realmente significa)", items: [
          {es:"Abonar", pt:"adubar / pagar / inscrever-se (NÃO é 'abonar uma falta')"},
          {es:"Aceite", pt:"azeite / óleo (NÃO é 'aceite')"},
          {es:"Aceitar", pt:"passar óleo (aceitar = ACEPTAR)"},
          {es:"Acordarse", pt:"lembrar-se (acordar do sono = DESPERTARSE)"},
          {es:"Acreditar", pt:"creditar dinheiro (acreditar em algo = CREER)"},
          {es:"Aderezo", pt:"tempero (adereço/decoração = ORNAMENTO)"},
          {es:"Alejar", pt:"afastar (aleijar/machucar = LISIAR)"},
          {es:"Almohada", pt:"travesseiro (almofada = COJÍN)"},
          {es:"Alza", pt:"aumento (alça de mala = ASA)"},
          {es:"Amador", pt:"amante (amador/não profissional = NO PROFESIONAL)"},
          {es:"Apellido", pt:"sobrenome (apelido = APODO)"},
          {es:"Basura", pt:"lixo (vassoura = ESCOBA)"},
          {es:"Beca", pt:"bolsa de estudo (beca/vestimenta = BATA)"},
          {es:"Berro", pt:"agrião (berro/grito = BRAMIDO)"},
          {es:"Billete", pt:"nota/passagem (bilhete pequeno = NOTA)"},
          {es:"Billón", pt:"trilhão (bilhão = MIL MILLONES)"},
          {es:"Boliche", pt:"danceteria (boliche esporte = BOLOS)"},
          {es:"Borracha", pt:"bêbada (borracha material = GOMA)"},
          {es:"Botiquín", pt:"maleta de primeiros socorros (boteco = BAR)"},
          {es:"Brinco", pt:"pulo (brinco acessório = PENDIENTE/ARETE)"},
          {es:"Burlar(se)", pt:"debochar de alguém (burlar a lei = ELUDIR)"},
          {es:"Cacho", pt:"penca/pedaço (cacho quantidade = RACIMO)"},
          {es:"Cachorro", pt:"filhote de mamífero (cachorro/cão = PERRO)"},
          {es:"Cadera", pt:"quadris (cadeira assento = SILLA)"},
          {es:"Calar", pt:"cortar/furar (calar/fazer silêncio = CALLAR)"},
          {es:"Cambio", pt:"mudança/troco (câmbio de moeda = CAMBIO)"},
          {es:"Camelo", pt:"engano, mentira (camelo animal = CAMELLO)"},
          {es:"Chocho", pt:"feliz, bobo (merreca = MAL/CUTRE)"},
          {es:"Chulo", pt:"legal, bonito (chulo/rude = GROSERO)"},
          {es:"Cinta", pt:"fita (cinta acessório = CINTURÓN)"},
          {es:"Cola", pt:"fila / rabo (cola de grudar = PEGAMENTO; cola de prova = TRAMPA)"},
          {es:"Colar", pt:"coar (colar grudar = PEGAR; colar prova = HACER TRAMPA)"},
          {es:"Coma", pt:"vírgula (coma de comer = COME)"},
          {es:"Comedor", pt:"sala de jantar (comedor/comilão = COMILÓN)"},
          {es:"Comisario", pt:"delegado (comissário = COMISIONADO)"},
          {es:"Concertar", pt:"combinar, organizar (consertar = ARREGLAR; concerto/show = CONCIERTO)"},
          {es:"Conozco", pt:"conheço (conosco = CON NOSOTROS)"},
          {es:"Copa", pt:"taça (copo = VASO; copas naipe = CORAZONES)"},
          {es:"Crianza", pt:"criação (criança = NIÑO/A)"},
          {es:"Cubiertos", pt:"talheres (coberto = CUBIERTO/TAPADO)"},
          {es:"Cuello", pt:"pescoço (coelho = CONEJO)"},
          {es:"Cura", pt:"padre (cura de curar = CURACIÓN)"},
          {es:"Desabrochar", pt:"desabotoar (desabrochar flor = FLORECER)"},
          {es:"Despacho", pt:"escritório (despacho/envio = EXPEDICIÓN)"},
          {es:"Despejado", pt:"tempo aberto (despejar/expulsar = EXPULSAR)"},
          {es:"Dirección", pt:"endereço/direção"},
          {es:"Distinto", pt:"diferente (distinto/destacado = DISTINGUIDO)"},
          {es:"Embarazada", pt:"grávida (embaraçado cabelo = ENREDADO)"},
          {es:"En cuanto", pt:"assim que (enquanto = MIENTRAS)"},
          {es:"Enojado", pt:"aborrecido, bravo (enojado = ASQUEADO)"},
          {es:"Entretanto", pt:"enquanto isso (entretanto/mas = PERO/SIN EMBARGO)"},
          {es:"Escoba", pt:"vassoura (escova = CEPILLO)"},
          {es:"Esposas", pt:"algemas (e também esposas)"},
          {es:"Exquisito", pt:"requintado, delicioso (esquisito = RARO/EXTRAÑO)"},
          {es:"Experto", pt:"perito (esperto = INTELIGENTE/LISTO)"},
          {es:"Exprimir", pt:"espremer (exprimir/expressar = EXPRESAR)"},
          {es:"Extrañar", pt:"sentir falta/saudades (estranhar = PARECERLE RARO)"},
          {es:"Faro", pt:"farol (faro/olfato = OLFATO)"},
          {es:"Fecha", pt:"data (fechar = CERRAR)"},
          {es:"Felpudo", pt:"capacho (felpudo = VELLOSO)"},
          {es:"Ferias", pt:"feiras (férias = VACACIONES)"},
          {es:"Firmar", pt:"assinar (firmar/ficar firme = MANTENER FIRME)"},
          {es:"Flaco", pt:"magro (fraco = DÉBIL)"},
          {es:"Frente", pt:"testa (frente = DELANTERA/FACHADA)"},
          {es:"Goma", pt:"borracha objeto (goma de mascar = CHICLE)"},
          {es:"Gracioso", pt:"engraçado (gracioso/grácil = AGRACIADO)"},
          {es:"Grasa", pt:"gordura (graça = GRACIA; de graça = GRATIS)"},
          {es:"Jamón", pt:"presunto"},
          {es:"Jubilado", pt:"aposentado (jubilado universidade = RETIRADO)"},
          {es:"Largo", pt:"comprido (largo = ANCHO)"},
          {es:"Latir", pt:"bater do coração (latir de cachorro = LADRAR)"},
          {es:"Mostrador", pt:"balcão (mostrador = PANTALLA)"},
          {es:"Novela", pt:"romance (novela/telenovela = TELENOVELA)"},
          {es:"Oficina", pt:"escritório (oficina mecânica = TALLER)"},
          {es:"Oso", pt:"urso (osso = HUESO)"},
          {es:"Paladar", pt:"céu da boca (paladar/sentido = GUSTO)"},
          {es:"Palco", pt:"camarote (palco = ESCENARIO)"},
          {es:"Pasta", pt:"massa (pasta de arquivos = CARPETA; pasta de dentes = DENTÍFRICO)"},
          {es:"Pastel", pt:"bolo (pastel salgado = EMPANADA)"},
          {es:"Pegamento", pt:"cola (pegamento/ato de pegar = TOMA)"},
          {es:"Pegar", pt:"colar (pegar com as mãos = TOMAR/AGARRAR)"},
          {es:"Pelado", pt:"careca (pelado/nu = DESNUDO)"},
          {es:"Pelo", pt:"cabelo (pelo de corpo = VELLO)"},
          {es:"Polvo", pt:"pó (polvo animal = PULPO)"},
          {es:"Pronto", pt:"logo (pronto/preparado = LISTO)"},
          {es:"Propina", pt:"gorjeta (propina/suborno = SOBORNO)"},
          {es:"Quitar", pt:"tirar (quitar dívidas = PAGAR/AMORTIZAR)"},
          {es:"Saco", pt:"paletó (saco plástico = BOLSA)"},
          {es:"Salada", pt:"salgada (salada comida = ENSALADA)"},
          {es:"Sino", pt:"senão, mas sim (sino instrumento = CAMPANA)"},
          {es:"Sitio", pt:"local, lugar (sítio = FINCA)"},
          {es:"Suceso", pt:"evento (sucesso = ÉXITO)"},
          {es:"Taller", pt:"oficina mecânica (talheres = CUBIERTOS)"},
          {es:"Tapa", pt:"tampa de panela (tapa/bofetada = CACHETADA)"},
          {es:"Tasa", pt:"taxa (taça = COPA)"},
          {es:"Taza", pt:"xícara (taça = COPA)"},
          {es:"Vaso", pt:"copo (vaso sanitário = RETRETE; vaso de flor = MACETA)"},
          {es:"Vello", pt:"pelo (velho pessoa = ANCIANO/VIEJO)"},
          {es:"Zurdo", pt:"canhoto (surdo = SORDO)"}
        ]}
      ],
      exercises: [
        {type:"mc", q:"'Vaso' em espanhol significa:", options:["Vaso de flor","Copo","Bacia"], correct:1},
        {type:"mc", q:"'Copa' em espanhol significa:", options:["Copo","Taça","Xícara"], correct:1},
        {type:"mc", q:"'Escoba' em espanhol significa:", options:["Escova","Vassoura","Esponja"], correct:1},
        {type:"mc", q:"'Oficina' em espanhol significa:", options:["Oficina mecânica","Escritório","Sala de reunião"], correct:1},
        {type:"mc", q:"'Taller' em espanhol significa:", options:["Talher","Oficina mecânica","Toalha"], correct:1},
        {type:"mc", q:"'Embarazada' significa:", options:["Envergonhada","Grávida","Embaraçada (cabelo)"], correct:1},
        {type:"mc", q:"'Exquisito' significa:", options:["Esquisito/estranho","Delicioso/requintado","Exigente"], correct:1},
        {type:"mc", q:"'Apellido' significa:", options:["Apelido","Sobrenome","Nome do meio"], correct:1},
        {type:"mc", q:"'Cachorro' em espanhol significa:", options:["Cão adulto","Filhote de mamífero","Gatinho"], correct:1},
        {type:"mc", q:"'Largo' em espanhol significa:", options:["Largo (largura)","Comprido","Curto"], correct:1},
        {type:"mc", q:"'Pastel' em espanhol significa:", options:["Bolo","Pastel salgado","Torta salgada"], correct:0},
        {type:"mc", q:"'Zurdo' significa:", options:["Surdo","Canhoto","Zoado"], correct:1},
        {type:"mc", q:"'Oso' em espanhol significa:", options:["Osso","Urso","Ouço"], correct:1},
        {type:"mc", q:"'Firmar' em espanhol significa:", options:["Ficar firme","Assinar","Confirmar"], correct:1},
        {type:"translate", from:"pt", text:"Amanhã eu vou assinar o contrato.", answer:"Mañana voy a firmar el contrato."},
        {type:"speak", prompt:"Diga em espanhol: 'Necesito un vaso de agua.' — o que significa em português?", target:"Necesito un vaso de agua"}
      ]
    },
    {
      id: "s2", order: 2, title: "Diferencias de Significado", subtitle: "Palabras similares, homófonas y con el mismo significado",
      vocabulary: [
        {category:"Palabras similares (pares que confundem)", items: [
          {es:"NADA × NADIE — nada (nada) × nadie (ninguém)", pt:"NADA = nada; NADIE = ninguém"},
          {es:"DEPARTAMENTO × APARTAMENTO × APARTAMIENTO — apartamento × apartamento × afastamento", pt:"DEPARTAMENTO = apartamento; APARTAMENTO = apartamento; APARTAMIENTO = afastamento"},
          {es:"HAY × AHÍ × AY — há (haver) × aí (lugar) × ai! (exclamação)", pt:"HAY = há (haver); AHÍ = aí (lugar); AY = ai! (exclamação)"},
          {es:"OLA × OLLA × HOLA — onda × panela × olá", pt:"OLA = onda; OLLA = panela; HOLA = olá"},
          {es:"SUELDO × SALDO — salário × saldo", pt:"SUELDO = salário; SALDO = saldo"},
          {es:"PATATA × BATATA — batata comum × batata-doce", pt:"PATATA = batata comum; BATATA = batata-doce"},
          {es:"SORDO × ZURDO — surdo × canhoto", pt:"SORDO = surdo; ZURDO = canhoto"},
          {es:"COLAR × COLLAR — coar × colar (acessório)", pt:"COLAR (verbo) = coar; COLLAR (substantivo) = colar (acessório)"},
          {es:"ESTELA × ESTRELLA — rastro × estrela", pt:"ESTELA = rastro; ESTRELLA = estrela"},
          {es:"RATO × RATÓN — momento × rato/mouse", pt:"RATO = momento; RATÓN = rato/mouse"},
          {es:"MONO × MOÑO — macaco × laço", pt:"MONO = macaco; MOÑO = laço"},
          {es:"ACERA × ACERO — calçada × aço", pt:"ACERA = calçada; ACERO = aço"},
          {es:"RECTO × RETO — reto/alinhado × desafio", pt:"RECTO = reto/alinhado; RETO = desafio"},
          {es:"PELAR × PELEAR — descascar × brigar", pt:"PELAR = descascar; PELEAR = brigar"},
          {es:"MÓVIL × MUEBLE — celular × móvel (mobília)", pt:"MÓVIL = celular; MUEBLE = móvel (mobília)"},
          {es:"VAJILLA × VALIJA — louça × mala de viagem", pt:"VAJILLA = louça; VALIJA = mala de viagem"},
          {es:"ZAPALLO × ZAPATO — abóbora × sapato", pt:"ZAPALLO = abóbora; ZAPATO = sapato"},
          {es:"SONAR × SOÑAR — soar × sonhar", pt:"SONAR = soar; SOÑAR = sonhar"}
        ]},
        {category:"Palabras homófonas (mesmo som, grafia diferente)", items: [
          {es:"Botar × Votar — jogar fora / chutar × votar", pt:"BOTAR = jogar fora / chutar; VOTAR = votar"},
          {es:"Bello × Vello — bonito × pelo do corpo", pt:"BELLO = bonito; VELLO = pelo do corpo"},
          {es:"Tubo × Tuvo — tubo × teve (verbo tener)", pt:"TUBO = tubo; TUVO = teve (verbo tener)"},
          {es:"Vaca × Baca — vaca (animal) × bagageiro de carro", pt:"VACA = vaca (animal); BACA = bagageiro de carro"},
          {es:"Tu × Tú — teu (possessivo) × tu (pronome)", pt:"TU = teu (possessivo); TÚ = tu (pronome)"},
          {es:"Si × Sí — se (condicional) × sim", pt:"SI = se (condicional); SÍ = sim"},
          {es:"Mas × Más — mas (porém) × mais (quantidade)", pt:"MAS = mas (porém); MÁS = mais (quantidade)"},
          {es:"Solo × Sólo — sozinho × somente (uso antigo com acento)", pt:"SOLO = sozinho; SÓLO = somente (uso antigo com acento)"},
          {es:"Halla × Haya — encontra (hallar) × haja (subjuntivo de haber)", pt:"HALLA = encontra (hallar); HAYA = haja (subjuntivo de haber)"},
          {es:"Hojear × Ojear — folhear × dar uma olhada", pt:"HOJEAR = folhear; OJEAR = dar uma olhada"},
          {es:"Grabar × Gravar — gravar (áudio/vídeo) × gravar (imposto/dívida)", pt:"GRABAR = gravar (áudio/vídeo); GRAVAR = gravar (imposto/dívida)"}
        ]},
        {category:"Palabras con el mismo significado (sinônimos com nuances)", items:[
          {es:"HERMOSO × LINDO × BONITO × BELLO × GUAPO — escala: Bonito < Lindo < Hermoso", pt:"Escala de intensidade: Bonito < Lindo < Hermoso (todos ≈ bonito/lindo)"},
          {es:"QUERER × AMAR — querer é mais egoísta/possessivo; amar é altruísta", pt:"QUERER = gostar/querer (mais possessivo); AMAR = amar (mais altruísta)"},
          {es:"TOMAR × COGER × AGARRAR — atenção: 'coger' tem conotação sexual em vários países da América", pt:"Os três podem significar 'pegar'; cuidado: COGER tem conotação sexual em vários países da América"},
          {es:"ESCUCHAR × OÍR — escutar com atenção × ouvir passivamente", pt:"ESCUCHAR = escutar com atenção; OÍR = ouvir passivamente"},
          {es:"PEDIR × PREGUNTAR — pedir algo × fazer uma pergunta", pt:"PEDIR = pedir algo; PREGUNTAR = fazer uma pergunta"},
          {es:"SABER × CONOCER — saber um fato × conhecer um lugar/pessoa", pt:"SABER = saber um fato; CONOCER = conhecer um lugar/pessoa"},
          {es:"NUNCA × JAMÁS — jamás é mais enfático", pt:"Ambos = nunca; JAMÁS é mais enfático"},
          {es:"MOMENTO × RATO — momento × um tempinho", pt:"MOMENTO = momento; RATO = um tempinho"},
          {es:"VIDRIO × CRISTAL — vidro (América) × vidro (Espanha, ainda que 'cristal' tecnicamente seja outra coisa)", pt:"Ambos ≈ vidro; VIDRIO é mais comum na América, CRISTAL na Espanha"},
          {es:"CAMBIAR(SE) × MUDAR(SE) — trocar/mudar de roupa × mudar de casa", pt:"CAMBIAR(SE) = trocar/mudar de roupa; MUDAR(SE) = mudar de casa"}
        ]}
      ],
      exercises: [
        {type:"mc", q:"'Sueldo' significa:", options:["Saldo bancário","Salário","Solto"], correct:1},
        {type:"mc", q:"'Hay' × 'Ahí' × '¡Ay!' — qual significa 'aí' (lugar)?", options:["Hay","Ahí","¡Ay!"], correct:1},
        {type:"mc", q:"'Bello' × 'Vello' — qual significa 'bonito'?", options:["Bello","Vello"], correct:0},
        {type:"mc", q:"'Tú' (com acento) é:", options:["Possessivo (teu)","Pronome pessoal (tu)"], correct:1},
        {type:"mc", q:"Qual verbo é mais forte/enfático: 'nunca' ou 'jamás'?", options:["Nunca","Jamás"], correct:1},
        {type:"mc", q:"Na América Latina, deve-se evitar usar qual verbo por conotação sexual em vários países?", options:["Tomar","Coger","Agarrar"], correct:1},
        {type:"fill", q:"'Móvil' × 'Mueble' — qual significa 'celular'?", answer:"Móvil", altAnswers:["móvil"]},
        {type:"translate", from:"pt", text:"Você tem certeza? Sim!", answer:"¿Estás seguro? ¡Sí!"},
        {type:"speak", prompt:"Diga em voz alta o par 'sí' (sim) e 'si' (se) destacando a diferença de acento.", target:"sí, si"}
      ]
    },
    {
      id: "s3", order: 3, title: "Expresiones y Jergas", subtitle: "Por país: España, México, Argentina, Colombia, Chile",
      vocabulary: [
        {category:"España", items:[
          {es:"Eso mola", pt:"é legal, é top"},{es:"Chulo(a)/Guay/Mono(a)", pt:"legal, bonito"},{es:"Flipar", pt:"vibrar, ficar animado"},{es:"Cabrear(se)/Rayar(se)", pt:"ficar P da vida"},{es:"Me la suda", pt:"tô cagando e andando"},{es:"Estar sin blanca", pt:"estar duro/sem grana"},{es:"Menudo(a)", pt:"baita"},{es:"Estar al loro", pt:"estar atento/ligado"},{es:"Hincar los codos", pt:"meter a cara nos livros/estudar muito"},{es:"Vale", pt:"ok, tá bom"},{es:"Tío/Tía", pt:"cara, mano (referindo-se a pessoa)"},{es:"Dar calabazas", pt:"dar um fora em alguém"},{es:"No hay color", pt:"não tem comparação"}
        ]},
        {category:"México", items:[
          {es:"Padre/Cool/Chido(a)", pt:"legal, da hora"},{es:"No manches", pt:"não creio! sério?"},{es:"Wey/Chavo(a)", pt:"cara, mano, garoto(a)"},{es:"Ándale", pt:"vamos lá, ânimo!"},{es:"Ahorita", pt:"já já, daqui a pouco"},{es:"¡Qué hueva!", pt:"que preguiça!"},{es:"Chambear", pt:"trabalhar, trampar"},{es:"Fresa", pt:"mauricinho, patricinha"},{es:"Ni modo", pt:"nem pensar, sem jeito"},{es:"Me vale madre", pt:"não me importo"},{es:"Antro", pt:"balada, boate"},{es:"Simón", pt:"claro, com certeza"}
        ]},
        {category:"Argentina", items:[
          {es:"Copado(a)/Piola", pt:"legal, da hora"},{es:"Chamuyar", pt:"conversar, bater papo/cantar alguém"},{es:"Boliche", pt:"balada"},{es:"Pibe(a)/Chabón(a)", pt:"garoto/a, mano/mina"},{es:"Laburo", pt:"trabalho, trampo"},{es:"Plata/Guita/Mango", pt:"dinheiro, grana"},{es:"¡Che!", pt:"ei! olha!"},{es:"Quilombo", pt:"bagunça, fuzuê"},{es:"Re + adjetivo", pt:"muito, pra caramba"},{es:"Bondi/Subte", pt:"ônibus/metrô"},{es:"Colgarse", pt:"dar um branco, viajar"},{es:"De diez", pt:"nota 10, show de bola"}
        ]},
        {category:"Colombia", items:[
          {es:"Prender la moto", pt:"prestar atenção, se ligar"},{es:"Hacer una vaca", pt:"fazer uma vaquinha"},{es:"Parce", pt:"amigo, parça"},{es:"Vaina", pt:"bagulho, negócio, treco"},{es:"¿Qué más?", pt:"e aí? salve!"},{es:"Dar lata", pt:"encher o saco"},{es:"Estar moscas", pt:"estar atento"},{es:"Lobo(a)", pt:"cafona, brega"},{es:"Echar los perros", pt:"dar cantadas em alguém"}
        ]},
        {category:"Chile", items:[
          {es:"Estar filete/un manjar", pt:"estar demais, perfeito"},{es:"Pololo(a)/Pololear", pt:"namorado(a) / ficar/namorar"},{es:"Al tiro", pt:"imediatamente, na hora"},{es:"Cachar", pt:"entender, sacar"},{es:"Buena leche", pt:"gente boa, gente fina"},{es:"Choreado(a)", pt:"P da vida, irritado"},{es:"Piola", pt:"tranquilo, de boa"},{es:"Bacán", pt:"legal, maneiro"}
        ]}
      ],
      exercises: [
        {type:"mc", q:"Na Argentina, 'plata', 'guita' e 'mango' significam:", options:["Comida","Dinheiro","Roupa"], correct:1},
        {type:"mc", q:"No México, 'no manches' expressa:", options:["Concordância","Surpresa/descrença","Despedida"], correct:1},
        {type:"mc", q:"Na Espanha, 'eso mola' significa:", options:["Isso incomoda","Isso é legal","Isso é caro"], correct:1},
        {type:"mc", q:"No Chile, 'pololo(a)' significa:", options:["Amigo","Namorado(a)","Colega de trabalho"], correct:1},
        {type:"mc", q:"Na Colômbia, 'parce' equivale a:", options:["Chefe","Amigo","Estranho"], correct:1},
        {type:"mc", q:"Na Argentina, exclamação típica para chamar atenção de alguém:", options:["¡Che!","¡Wey!","¡Vale!"], correct:0},
        {type:"translate", from:"pt", text:"Cara, isso é muito legal!", answer:"¡Che, eso es re copado! (Argentina) / ¡Tío, eso mola mucho! (España)"},
        {type:"speak", prompt:"Diga uma gíria de cada país para 'legal/bacana': guay, chido, copado, bacán", target:"guay chido copado bacán"}
      ]
    },
    {
      id: "s4", order: 4, title: "Dichos y Refranes Populares", subtitle: "Sabedoria popular espanhola",
      vocabulary: [
        {category:"Refranes (espanhol → português)", items:[
          {es:"A caballo regalado no le mires el diente", pt:"A cavalo dado não se olham os dentes"},
          {es:"A quien madruga Dios le ayuda", pt:"Deus ajuda quem cedo madruga"},
          {es:"Al buen entendedor pocas palabras bastan", pt:"Para bom entendedor, meia palavra basta"},
          {es:"A palabras necias, oídos sordos", pt:"Palavras loucas, ouvidos moucos"},
          {es:"Cada oveja con su pareja", pt:"Cada qual com seu igual / Toda panela tem sua tampa"},
          {es:"Camarón que se duerme se lo lleva la corriente", pt:"Camarão que dorme a onda leva"},
          {es:"Cuando a Roma fueres, haz como vieres", pt:"Em Roma, faça como os romanos"},
          {es:"Cuando el río suena, agua lleva", pt:"Não há fumaça sem fogo"},
          {es:"De tal palo, tal astilla", pt:"Tal pai, tal filho / Filho de peixe, peixinho é"},
          {es:"Dime con quién andas y te diré quién eres", pt:"Dize-me com quem andas e te direi quem és"},
          {es:"El hábito no hace el monje", pt:"O hábito não faz o monge"},
          {es:"El que a hierro mata a hierro muere", pt:"Quem com ferro fere, com ferro será ferido"},
          {es:"En boca cerrada no entran moscas", pt:"Em boca fechada não entra mosca"},
          {es:"En casa de herrero, cuchillo de palo", pt:"Casa de ferreiro, espeto de pau"},
          {es:"En tierra de ciegos, el tuerto es rey", pt:"Em terra de cegos, quem tem um olho é rei"},
          {es:"Hombre prevenido vale por dos", pt:"Homem prevenido vale por dois"},
          {es:"La esperanza es lo último que se pierde", pt:"A esperança é a última que morre"},
          {es:"La ocasión hace el ladrón", pt:"A ocasião faz o ladrão"},
          {es:"Lo que fácil viene fácil se va", pt:"O que vem fácil vai fácil"},
          {es:"Más vale pájaro en mano que ciento volando", pt:"Mais vale um pássaro na mão do que dois voando"},
          {es:"Más vale prevenir que curar", pt:"É melhor prevenir do que remediar"},
          {es:"Más vale tarde que nunca", pt:"Antes tarde do que nunca"},
          {es:"No dejes para mañana lo que puedes hacer hoy", pt:"Não deixe para amanhã o que pode fazer hoje"},
          {es:"No es oro todo lo que reluce", pt:"Nem tudo que reluz é ouro"},
          {es:"No hay mal que por bien no venga", pt:"Há males que vêm para o bem"},
          {es:"Ojos que no ven, corazón que no siente", pt:"O que os olhos não veem o coração não sente"},
          {es:"Perro ladrador, poco mordedor", pt:"Cão que ladra não morde"},
          {es:"Querer es poder", pt:"Querer é poder"},
          {es:"Quien calla otorga", pt:"Quem cala consente"},
          {es:"Zapatero a tus zapatos", pt:"Cada macaco no seu galho"},
          {es:"El tiempo es oro", pt:"Tempo é dinheiro"},
          {es:"En las malas se conocen a los amigos", pt:"É na dificuldade que se conhecem os amigos"}
        ]}
      ],
      exercises: [
        {type:"mc", q:"'De tal palo, tal astilla' corresponde a:", options:["Tal pai, tal filho","Antes tarde do que nunca","Cão que ladra não morde"], correct:0},
        {type:"mc", q:"'A quien madruga Dios le ayuda' significa:", options:["Deus ajuda quem cedo madruga","Deus vê tudo","Cedo é melhor"], correct:0},
        {type:"mc", q:"'Perro ladrador, poco mordedor' equivale a:", options:["Cão que ladra não morde","Cachorro bom não morde","Cão bravo late alto"], correct:0},
        {type:"mc", q:"'Más vale tarde que nunca' significa:", options:["Antes tarde do que nunca","Nunca é tarde demais","Mais vale nunca"], correct:0},
        {type:"fill", q:"Complete o ditado: 'Zapatero a tus ___'", answer:"zapatos"},
        {type:"fill", q:"Complete: 'Querer es ___'", answer:"poder"},
        {type:"translate", from:"pt", text:"Cada macaco no seu galho.", answer:"Zapatero a tus zapatos."},
        {type:"speak", prompt:"Diga em voz alta o ditado 'Más vale tarde que nunca.'", target:"Más vale tarde que nunca"}
      ]
    },
    {
      id: "s5", order: 5, title: "Palabras Diferentes en Cada País", subtitle: "Variação regional de vocabulário",
      vocabulary: [
        {category:"Vida cotidiana", items:[
          {es:"Camarero (España) / Mozo (Argentina) / Mesero (geral)", pt:"garçom"},
          {es:"Coche (España) / Auto, Carro (América)", pt:"carro"},
          {es:"Nevera (España) / Heladera (América)", pt:"geladeira"},
          {es:"Gafas (España) / Anteojos, Lentes (América)", pt:"óculos"},
          {es:"Ordenador (España) / Computador(a) (América)", pt:"computador"},
          {es:"Piso (España) / Departamento, Apartamento (América)", pt:"apartamento"},
          {es:"Fresa (España) / Frutilla (Río de la Plata)", pt:"morango"},
          {es:"Aguacate (España) / Palta (Argentina/Chile/Uruguai/Peru)", pt:"abacate"},
          {es:"Piña/Ananás (España) / Ananá (América)", pt:"abacaxi"},
          {es:"Zumo (España) / Jugo (América)", pt:"suco"},
          {es:"Autobús (España) / Guagua (Caribe) / Colectivo (Argentina) / Camión (México)", pt:"ônibus"},
          {es:"Móvil (España) / Celular (América)", pt:"celular"},
          {es:"Bolígrafo/Boli (España) / Birome, Lapicera (Argentina) / Esfero (Colômbia)", pt:"caneta"},
          {es:"Plátano (España) / Banana, Banano (América)", pt:"banana"},
          {es:"Vale (España) / Dale, Ya (América)", pt:"ok, combinado"},
          {es:"Guay (España) / Padre (México) / Copado (Argentina) / Chévere (outros)", pt:"legal"},
          {es:"Chaqueta (España) / Campera (Argentina) / Chamarra (México)", pt:"jaqueta"},
          {es:"Pastas (España e geral)", pt:"referência a doces/massas variam por região"}
        ]},
        {category:"Diversos", items:[
          {es:"Papá Noel (España/Argentina/Colômbia) / Viejito Pascuero (Chile) / Santa Claus (México/América Central)", pt:"Papai Noel"},
          {es:"Cerdo (España) / Chancho (Argentina) / Cochino (México)", pt:"porco"},
          {es:"Alquiler (España) / Renta (México/Chile) / Arriendo (Colômbia)", pt:"aluguel"},
          {es:"Ascensor (España) / Elevador (América)", pt:"elevador"},
          {es:"Palomitas (España/México) / Pochoclo (Argentina) / Cabritas (Chile) / Crispetas (Colômbia)", pt:"pipoca"},
          {es:"Judías (España) / Frijoles (México) / Porotos (Argentina/Chile)", pt:"feijão"}
        ]}
      ],
      exercises: [
        {type:"mc", q:"Na Espanha, 'garçom' se diz:", options:["Mozo","Camarero","Mesonero"], correct:1},
        {type:"mc", q:"Na Argentina, 'abacate' se diz:", options:["Aguacate","Palta","Ananá"], correct:1},
        {type:"mc", q:"Na Espanha, 'carro' se diz:", options:["Auto","Carro","Coche"], correct:2},
        {type:"mc", q:"No México, 'ônibus' se diz:", options:["Camión","Guagua","Colectivo"], correct:0},
        {type:"mc", q:"'Ordenador' (España) é o mesmo que:", options:["Computador","Organizador","Impressora"], correct:0},
        {type:"fill", q:"Como se diz 'morango' no Rio da Prata (Argentina/Uruguai)? ___", answer:"Frutilla"},
        {type:"translate", from:"pt", text:"Onde estão meus óculos?", answer:"¿Dónde están mis gafas? (España) / ¿Dónde están mis anteojos? (América)"},
        {type:"speak", prompt:"Diga 'carro' como se fala na Espanha (coche) e na América (auto/carro)", target:"coche auto carro"}
      ]
    },
    {
      id: "s6", order: 6, title: "Ejercicios de Pronunciación", subtitle: "Trabalenguas (trava-línguas) da Espanha",
      vocabulary: [
        {category:"Trabalenguas (repita em voz alta)", items:[
          {es:"Tres tigres trigaban trigo, tres tigres en un trigal. ¿Qué tigre trigaba más? Los tres igual.", pt:"Três tigres 'trigavam' trigo, três tigres num trigal. Qual tigre 'trigava' mais? Os três igual. (trava-língua com jogo de sons, sem tradução literal exata)"},
          {es:"¿Con cuántas planchas Pancha plancha? Pancha plancha con cuatro planchas.", pt:"Com quantos ferros Pancha passa roupa? Pancha passa roupa com quatro ferros."},
          {es:"Si seis sierras sierran seis cigarros sosos, seiscientas seis sierras sierran seiscientos seis cigarros sosos.", pt:"Se seis serras serram seis charutos sem sabor, seiscentas e seis serras serram seiscentos e seis charutos sem sabor."},
          {es:"Pablito clavó un clavito, un clavito clavó Pablito. ¿Qué clase de clavito clavó Pablito?", pt:"Pablito pregou um preguinho, um preguinho pregou Pablito. Que tipo de preguinho pregou Pablito?"},
          {es:"Un padre y un hijo fueron a misa. El padre pisa la paja, el hijo la paja pisa.", pt:"Um pai e um filho foram à missa. O pai pisa na palha, o filho pisa na palha."},
          {es:"En un viaje en carruaje, un paje perdió el equipaje.", pt:"Em uma viagem de carruagem, um pajem perdeu a bagagem."},
          {es:"Ahora es la hora, ora. Ora que te ha llegado la hora. Ora ahora en esta hora.", pt:"Agora é a hora, ore. Ore que chegou a sua hora. Ore agora nesta hora. (jogo de palavras entre 'hora' e 'orar')"},
          {es:"Hugo tuvo un tubo, pero el tubo que tuvo se le rompió. Para recuperar el tubo que tuvo, tuvo que comprar un tubo igual al tubo que tuvo.", pt:"Hugo teve um tubo, mas o tubo que teve quebrou. Para recuperar o tubo que teve, teve que comprar um tubo igual ao tubo que teve."},
          {es:"Ana tiene una banana que le regaló una enana, a cambio de una manzana. Ana peló la banana, y la enana la manzana. La enana se resbaló, y Ana se comió las dos.", pt:"Ana tem uma banana que uma anã lhe deu, em troca de uma maçã. Ana descascou a banana, e a anã, a maçã. A anã escorregou, e Ana comeu as duas."},
          {es:"Parra tenía una perra. Guerra tenía una parra. La perra de Parra subió a la parra de Guerra.", pt:"Parra tinha uma cadela. Guerra tinha uma parreira. A cadela de Parra subiu na parreira de Guerra."}
        ]}
      ],
      exercises: [
        {type:"speak", prompt:"Repita em voz alta: 'Tres tigres trigaban trigo, tres tigres en un trigal.'", target:"Tres tigres trigaban trigo, tres tigres en un trigal."},
        {type:"listen", audioText:"Tres tigres trigaban trigo, tres tigres en un trigal. ¿Qué tigre trigaba más? Los tres igual.", q:"Ouça e repita o trava-línguas dos tigres.", answer:"Tres tigres trigaban trigo..."},
        {type:"speak", prompt:"Repita em voz alta: '¿Con cuántas planchas Pancha plancha? Pancha plancha con cuatro planchas.'", target:"Con cuántas planchas Pancha plancha? Pancha plancha con cuatro planchas."},
        {type:"listen", audioText:"Pablito clavó un clavito, un clavito clavó Pablito.", q:"Ouça e repita o trava-línguas do Pablito.", answer:"Pablito clavó un clavito..."},
        {type:"speak", prompt:"Repita em voz alta: 'Hugo tuvo un tubo, pero el tubo que tuvo se le rompió.'", target:"Hugo tuvo un tubo, pero el tubo que tuvo se le rompió."},
        {type:"listen", audioText:"En un viaje en carruaje, un paje perdió el equipaje.", q:"Ouça e repita o trava-línguas do carruaje.", answer:"En un viaje en carruaje, un paje perdió el equipaje."},
        {type:"speak", prompt:"Repita em voz alta: 'Ahora es la hora, ora. Ora que te ha llegado la hora.'", target:"Ahora es la hora, ora. Ora que te ha llegado la hora."},
        {type:"open", q:"Qual trava-língua foi mais difícil para você pronunciar? Tente gravar-se falando novamente.", sample:"El trabalenguas de los tigres fue el más difícil para mí."}
      ]
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = LEVEL_SECRETOS;
}
