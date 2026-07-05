/* ==========================================================================
   EspañolYa! — Conteúdo: Nível 0 · FUNDAMENTOS
   Fonte: Método Espanhol de Verdade (MEV), Módulo 1 (Introdução/Metodologia)
   e Módulo 2 (Alfabeto, Pronúncia, Acentuação, Separação Silábica).

   SCHEMA (usado em todos os content-*.js):
   LEVEL = {
     id, name, icon, colorFrom, colorTo, description,
     lessons: [ {
        id, title, subtitle, order,
        dialogue: [ {who, es} ... ]   // opcional
        text: "..."                    // opcional (texto corrido de leitura)
        vocabulary: [ {category, items:[ {es, pt?} ... ]} ... ]
        grammar: [ {title, headers:[...], rows:[[...]]} ... ]  // tabelas
        notes: [ "..." ]               // observações/regras em texto
        exercises: [
           {type:'mc', q, options:[...], correct, explain?}
           {type:'fill', q, answer, altAnswers?:[...], explain?}
           {type:'translate', from:'pt'|'es', text, answer}
           {type:'listen', audioText, q, answer}   // TTS fala audioText; aluno responde
           {type:'speak', prompt, target}           // reconhecimento de voz compara com target
           {type:'order', items:[...], correctOrder:[0,1,2,...]}
           {type:'open', q, sample}                 // pergunta pessoal/aberta
        ]
     } ],
     exam: { title, questions: [ mesmos tipos de exercises ] }
   }
   ========================================================================== */

const LEVEL_FUNDAMENTOS = {
  id: "fundamentos",
  name: "Fundamentos",
  icon: "🔤",
  colorFrom: "#AA151B",
  colorTo: "#F1BF00",
  description: "As bases do espanhol: por que estudar, alfabeto, pronúncia, acentuação e separação silábica antes de começar o Nível Básico.",
  lessons: [
    {
      id: "fund-0",
      title: "Bem-vindo(a)! Por que aprender espanhol?",
      subtitle: "Motivação e metodologia",
      order: 0,
      text: "¡Bienvenido(a) a EspañolYa! Você está prestes a começar uma jornada rumo à fluência em espanhol — o idioma da Espanha, com sotaque e vocabulário castiço, para você usar na vida pessoal e profissional.\n\nAlguns motivos para seguir em frente:\n1. O espanhol é o 2º idioma com mais falantes nativos no mundo.\n2. Ganhou muita importância no mercado de trabalho e nas auditorias e negócios internacionais.\n3. É o idioma do livro mais vendido do mundo depois da Bíblia (Dom Quixote).\n4. Pode abrir portas para estudar, trabalhar ou morar no exterior.\n5. Facilita viajar por mais de 20 países.\n\nComo estudar bem:\n• Estude no seu próprio ritmo, sem pular etapas.\n• Gramática e vocabulário andam juntos — evite o 'portunhol'.\n• Repita frases em voz alta, ouça o áudio e tente falar — este app escuta você!\n• Revise sempre que precisar: o conteúdo fica disponível para sempre.\n• Avalie seu progresso fazendo as provas de cada módulo.",
      vocabulary: [],
      grammar: [],
      notes: [
        "Recursos úteis citados no material original: dle.rae.es (dicionário oficial da Real Academia Española), conjugador.reverso.net e wordreference.com/conj/EsVerbs.aspx (conjugadores online)."
      ],
      exercises: [
        {type:"open", q:"Escreva, em espanhol, uma frase curta contando por que você quer aprender espanhol.", sample:"Quiero aprender español porque..."},
        {type:"mc", q:"O espanhol é o quantos idioma com mais falantes nativos no mundo?", options:["1º","2º","5º","10º"], correct:1}
      ]
    },
    {
      id: "fund-1",
      title: "Origem do espanhol e diferenças entre países",
      subtitle: "Castellano x Español, voseo",
      order: 1,
      text: "El español es una lengua románica (deriva do latim), originada na Península Ibérica, na região de Castela — por isso também é chamado de 'castellano'. Os dois nomes, 'español' e 'castellano', estão corretos e são usados, principalmente na Espanha e em parte da América Latina, muitas vezes para diferenciá-lo de outros idiomas cooficiais da Espanha (catalão, galego, basco).\n\nAssim como o português tem variações entre Brasil e Portugal, o espanhol varia entre países. Exemplo: 'morango' é 'fresa' na Espanha e na maioria dos países, mas 'frutilla' na região do Rio da Prata (Argentina, Uruguai, Paraguai).\n\nO VOSEO: em vários países (Argentina, Uruguai, partes da América Central), usa-se 'vos' no lugar de 'tú' na forma informal.",
      vocabulary: [
        {category:"Pronomes de tratamento", items:[{es:"tú"},{es:"vos"},{es:"usted"},{es:"vosotros/vosotras"},{es:"ustedes"}]}
      ],
      grammar: [
        {title:"Voseo — Presente do indicativo (conjugação de 'vosotros' menos o 'i')", headers:["Tú","Vos"], rows:[
          ["sabes","sabés"],["quieres","querés"],["viajas","viajás"],["eres","sos"],["sales","salís"],["estás","estás"]
        ]},
        {title:"Voseo — Imperativo afirmativo (conjugação de 'vosotros' sem o 'd' final)", headers:["Tú","Vos"], rows:[
          ["habla","hablá"],["abre","abrí"],["sal","salí"],["duerme","dormí"],["di","decí"],["come","comé"]
        ]}
      ],
      notes: [
        "Nos demais tempos verbais (pretérito, futuro, pluscuamperfecto etc.) a conjugação de 'vos' é igual à de 'tu' — só muda no presente do indicativo e no imperativo afirmativo.",
        "Formas possessivas/pronominais seguem 'tu' mesmo com 'vos': '¡Te está mirando a vos!'; '¿Vos sabes cuál es tu coche?'",
        "Este curso ensina o español padrão (de España), mas você vai reconhecer o voseo quando ouvir falantes da Argentina/Uruguai."
      ],
      exercises: [
        {type:"mc", q:"'Frutilla' é como se diz 'morango' em qual região?", options:["Espanha","México","Região do Rio da Prata (Argentina/Uruguai)","Caribe"], correct:2},
        {type:"fill", q:"Voseo — 'tú eres' se transforma em 'vos ___'", answer:"sos"},
        {type:"fill", q:"Voseo — imperativo: 'tú come' se transforma em 'vos ___'", answer:"comé"},
        {type:"mc", q:"'Castellano' e 'Español' são:", options:["Idiomas diferentes","Dois nomes corretos para o mesmo idioma","Dialetos do catalão","Nomes antigos em desuso"], correct:1}
      ]
    },
    {
      id: "fund-2",
      title: "El Alfabeto y la Pronunciación",
      subtitle: "27 letras, 5 dígrafos, sons especiais",
      order: 2,
      text: "El español es descrito como uma língua fonética: tem regra fixa de pronúncia (relação letra-som bastante consistente, diferente do português/inglês). O alfabeto espanhol tem 27 letras (RAE, 2010): A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z. Todas as letras são substantivos femininos ('la a', 'la be'). O espanhol NÃO tem 'Ç' nem 'SS'. Possui 5 dígrafos: CH, LL, RR, GU, QU.",
      vocabulary: [
        {category:"Dígrafos e som", items:[
          {es:"CH — como em 'tchau'", pt:"chico, chancho, cuchara, cacho"},
          {es:"LL — varia por região (j/sh/i/lh)", pt:"llave, lluvia, mejilla, botella"},
          {es:"RR — r forte vibrante", pt:"perro, horrible, párrafo, carro"},
          {es:"GU — som /g/ antes de e,i", pt:"guerra, miguel, guitarra, siguiente"},
          {es:"QU — som /k/", pt:"paquete, pequeño, queso, quince"}
        ]}
      ],
      grammar: [
        {title:"Pronúncia letra a letra (destaques)", headers:["Letra","Nome","Som","Exemplos"], rows:[
          ["Ñ","eñe","nasal palatal (nh)","ñandú, ñoño, cariño, uña, España"],
          ["H","hache","muda (sem som)","hada, hombre, huevo, anhelo"],
          ["J","jota","gutural (h aspirado)","valija, jirafa, japón, reloj"],
          ["C","ce","/k/ (a,o,u) ou /s/·/θ/ (e,i)","cachorro, cuenta / cereza, cirugía"],
          ["G","ge","/g/ (a,o,u) ou gutural (e,i)","gallina, gusto / giro, ligero"],
          ["Y","ye","consoante (j/sh) ou vogal /i/","yo, ayuda / uruguay"],
          ["Z","zeta","/s/ ou /θ/ (Espanha)","zoológico, zapato, pez"],
          ["V","uve","/b/~/v/","vacaciones, televisión"],
          ["W","uve doble","rara, estrangeirismos","whiskería, web, sándwich"]
        ]}
      ],
      notes: [
        "R: forte no início de palavra ou após certas consoantes; o dígrafo RR sempre tem som forte.",
        "O 'th' interdental do C/Z (como em 'think', em inglês) é típico do espanhol da Espanha (distinción) — no app usamos a pronúncia da Espanha."
      ],
      exercises: [
        {type:"mc", q:"Quantas letras tem o alfabeto espanhol (RAE 2010)?", options:["26","27","28","25"], correct:1},
        {type:"mc", q:"Qual letra é sempre muda no espanhol?", options:["J","H","Ñ","Y"], correct:1},
        {type:"listen", audioText:"¡Sabes que yo te quiero mucho!, ¿verdad?", q:"Ouça e repita a frase em voz alta.", answer:"¡Sabes que yo te quiero mucho!, ¿verdad?"},
        {type:"speak", prompt:"Diga em voz alta: 'Este cachorro es muy bonito y tierno!'", target:"Este cachorro es muy bonito y tierno"},
        {type:"fill", q:"O dígrafo que soa como 'tch' em 'tchau' é: ___", answer:"CH", altAnswers:["ch"]},
        {type:"translate", from:"es", text:"Tengo clases con una profesora de español.", answer:"Tenho aulas com uma professora de espanhol."}
      ]
    },
    {
      id: "fund-3",
      title: "Sílaba tônica e acentuação",
      subtitle: "Agudas, llanas, esdrújulas",
      order: 3,
      text: "Sinais gráficos: tilde (á é í ó ú), diéresis (ü, em 'güe/güi'), virgulilla (~, forma o ñ). As palavras se classificam pela posição da sílaba tônica.",
      vocabulary: [],
      grammar: [
        {title:"Regras de acentuação", headers:["Classe","Sílaba tônica","Regra","Exemplos"], rows:[
          ["Agudas/Oxítonas","última","acento se termina em N, S ou vogal","corazón, está, café, aquí, quizás"],
          ["Llanas/Paroxítonas","penúltima","acento se termina em consoante ≠ N/S","árbol, tórax, lápiz, hábil"],
          ["Esdrújulas","antepenúltima","sempre acentuadas","cédula, bolígrafo, bálsamo, mecánica"],
          ["Sobresdrújulas","antes da antepenúltima","sempre acentuadas","dígamelo, cómpratela"]
        ]}
      ],
      notes: [
        "Hiato: vogal forte (a,e,o) + vogal fraca (i,u) com tônica na fraca → acentua-se a fraca. Ex.: día, país, todavía, maíz, baúl.",
        "Tilde diacrítica em monossílabos para diferenciar significado: tú/tu, él/el, sí/si, más/mas, mí/mi, sé/se, té/te, dé/de, qué/que.",
        "Advérbios em '-mente' mantêm o acento do adjetivo de origem: rápido→rápidamente, fácil→fácilmente.",
        "Heterotônicos (cuidado, mudam a posição da sílaba tônica em relação ao português): academia, nostalgia, elogio, cerebro, nivel, alergia, alguien, epidemia, oceano, oxígeno.",
        "Pela reforma ortográfica da RAE, 'solo' e os pronomes demonstrativos (esta, esa, aquel...) já não se acentuam mais na maioria dos casos."
      ],
      exercises: [
        {type:"mc", q:"'Corazón' é acentuada porque:", options:["É esdrújula","É aguda terminada em N","É llana terminada em consoante","Tem hiato"], correct:1},
        {type:"mc", q:"'Bolígrafo' é uma palavra:", options:["Aguda","Llana","Esdrújula","Sobresdrújula"], correct:2},
        {type:"fill", q:"'tu' (posessivo, sem acento) vs '___' (pronome pessoal, com acento)", answer:"tú"},
        {type:"translate", from:"pt", text:"café, país, día, ainda", answer:"café, país, día, todavía"}
      ]
    },
    {
      id: "fund-4",
      title: "Separação silábica",
      subtitle: "Dígrafos, prefixos, ditongos e hiatos",
      order: 4,
      text: "A separação silábica segue lógica semelhante à do português: a-pren-der, u-sur-par, me-sa, é-po-ca, la-drón.",
      vocabulary: [],
      grammar: [
        {title:"Regras especiais", headers:["Regra","Exemplos"], rows:[
          ["Dígrafos não se separam","gue-rra, e-lla, ca-cho"],
          ["Prefixos separam como unidade","sub-ra-yar, post-ro-mán-ti-co"],
          ["Consoantes que se separam (sem dígrafo)","hip-no-sis, ac-to, pes-car, gim-nas-ta"],
          ["Ditongos/tritongos = 1 sílaba","Lui-sa, mien-tras, re-si-duo"],
          ["Hiato entre vogais fortes (a,e,o) separa","le-al, te-a-tro, a-é-re-o"],
          ["Hiato por acento na vogal fraca separa","ma-rí-a, ca-í-a, ba-úl"]
        ]}
      ],
      notes: ["Grupo 'TL' varia por região: a-tle-ta (México) vs at-le-ta (Espanha e outras Américas)."],
      exercises: [
        {type:"fill", q:"Separe em sílabas: 'guerra' → ___", answer:"gue-rra"},
        {type:"fill", q:"Separe em sílabas: 'maría' → ___", answer:"ma-rí-a"},
        {type:"mc", q:"Em 'abstracto', quantas consoantes ficam juntas entre vogais na sílaba 'abs-'?", options:["2","3","4","1"], correct:1}
      ]
    }
  ],
  exam: {
    title: "Avaliação — Fundamentos",
    passScoreDefault: 70,
    questions: [
      {type:"mc", q:"Quantas letras tem o alfabeto espanhol?", options:["26","27","28","29"], correct:1},
      {type:"mc", q:"Qual letra é sempre muda?", options:["H","J","Ñ","G"], correct:0},
      {type:"mc", q:"'Vos' é usado como forma informal de 'tú' principalmente em:", options:["Espanha","Argentina/Uruguai","México","Cuba"], correct:1},
      {type:"mc", q:"'Bolígrafo' é uma palavra esdrújula porque:", options:["Termina em vogal","A sílaba tônica é a antepenúltima","Termina em N ou S","Tem hiato"], correct:1},
      {type:"fill", q:"Separe em sílabas: 'atleta' (versão da Espanha) → ___", answer:"at-le-ta"},
      {type:"fill", q:"O dígrafo de 'llave' e 'lluvia' é: ___", answer:"LL", altAnswers:["ll"]},
      {type:"translate", from:"es", text:"¿Cómo se llama usted?", answer:"Como você se chama? (formal)"},
      {type:"mc", q:"Palavras terminadas em consoante que NÃO seja N/S recebem acento quando são:", options:["Agudas","Llanas","Esdrújulas","Nunca recebem"], correct:1}
    ]
  }
};
