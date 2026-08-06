/* ==========================================================================
   EspañolYa! — Conteúdo: Módulo BÔNUS · VERBOS PT↔ES (consulta rápida)
   Fonte: material próprio fornecido por Anderson Santana — "200 Verbos en
   Portugués (Edición Revisada y Corregida)", revisado e corrigido nesta
   importação (particípios e gerúndios irregulares que vieram errados no
   arquivo original: abrir/aberto/abierto, descobrir/descoberto/descubierto,
   escrever/escrito/escrito, morrer/morto/muerto, romper→roto, voltar→vuelto,
   e os gerúndios com "-yendo"/e→i/o→u de creer, leer, construir, destruir,
   disminuir, pedir, servir, seguir, conseguir, sentir, mentir, morir,
   preferir, reír, sonreír, sugerir, vestir, dormir, divertir).

   Módulo só de CONSULTA (sem exercícios nem prova) — um dicionário de
   conjugação completo dentro do próprio curso, sempre disponível.
   Segue o mesmo schema dos demais content-*.js (ver content-fundamentos.js).
   ========================================================================== */

const LEVEL_VERBOS = {
  id: "verbos",
  name: "Verbos e Conectores",
  icon: "📖",
  colorFrom: "#1565C0",
  colorTo: "#0d47a1",
  description: "Módulo bônus de consulta rápida: mais de 200 verbos com conjugação completa (Presente, Pretérito Perfeito, Pretérito Imperfeito, Futuro e Presente do Subjuntivo) em português e espanhol, lado a lado, mais uma lição dedicada aos conectores del discurso (adición, secuencia, contraste, causa, consecuencia, ejemplificación e conclusión) com explicação e exercícios de empregabilidade.",
  lessons: [
    {
      id: "verb-irreg", order: 1, title: "Verbos Irregulares", subtitle: "19 verbos — os mais usados e mais irregulares",
      vocabulary: [],
      grammar: [
      {title:"1. SER — SER  ·  Irregular  ·  Gerúndio/Gerundio: sendo (siendo)  ·  Particípio/Participio: sido (sido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "sou (soy)", "fui (fui)", "era (era)", "serei (seré)", "seja (sea)"],
        ["Tu — Tú", "és (eres)", "foste (fuiste)", "eras (eras)", "serás (serás)", "sejas (seas)"],
        ["Ele / Você — Él / Usted", "é (es)", "foi (fue)", "era (era)", "será (será)", "seja (sea)"],
        ["Nós — Nosotros", "somos (somos)", "fomos (fuimos)", "éramos (éramos)", "seremos (seremos)", "sejamos (seamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "são (son)", "foram (fueron)", "eram (eran)", "serão (serán)", "sejam (sean)"]
      ]},
      {title:"2. ESTAR — ESTAR  ·  Irregular  ·  Gerúndio/Gerundio: estando (estando)  ·  Particípio/Participio: estado (estado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "estou (estoy)", "estive (estuve)", "estava (estaba)", "estarei (estaré)", "esteja (esté)"],
        ["Tu — Tú", "estás (estás)", "estiveste (estuviste)", "estavas (estabas)", "estarás (estarás)", "estejas (estés)"],
        ["Ele / Você — Él / Usted", "está (está)", "esteve (estuvo)", "estava (estaba)", "estará (estará)", "esteja (esté)"],
        ["Nós — Nosotros", "estamos (estamos)", "estivemos (estuvimos)", "estávamos (estábamos)", "estaremos (estaremos)", "estejamos (estemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "estão (están)", "estiveram (estuvieron)", "estavam (estaban)", "estarão (estarán)", "estejam (estén)"]
      ]},
      {title:"3. TER — TENER  ·  Irregular  ·  Gerúndio/Gerundio: tendo (teniendo)  ·  Particípio/Participio: tido (tenido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "tenho (tengo)", "tive (tuve)", "tinha (tenía)", "terei (tendré)", "tenha (tenga)"],
        ["Tu — Tú", "tens (tienes)", "tiveste (tuviste)", "tinhas (tenías)", "terás (tendrás)", "tenhas (tengas)"],
        ["Ele / Você — Él / Usted", "tem (tiene)", "teve (tuvo)", "tinha (tenía)", "terá (tendrá)", "tenha (tenga)"],
        ["Nós — Nosotros", "temos (tenemos)", "tivemos (tuvimos)", "tínhamos (teníamos)", "teremos (tendremos)", "tenhamos (tengamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "têm (tienen)", "tiveram (tuvieron)", "tinham (tenían)", "terão (tendrán)", "tenham (tengan)"]
      ]},
      {title:"4. HAVER — HABER  ·  Irregular  ·  Gerúndio/Gerundio: havendo (habiendo)  ·  Particípio/Participio: havido (habido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "hei (he)", "houve (hube)", "havia (había)", "haverei (habré)", "haja (haya)"],
        ["Tu — Tú", "hás (has)", "houveste (hubiste)", "havias (habías)", "haverás (habrás)", "hajas (hayas)"],
        ["Ele / Você — Él / Usted", "há (ha/hay)", "houve (hubo)", "havia (había)", "haverá (habrá)", "haja (haya)"],
        ["Nós — Nosotros", "havemos (hemos)", "houvemos (hubimos)", "havíamos (habíamos)", "haveremos (habremos)", "hajamos (hayamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "hão (han)", "houveram (hubieron)", "haviam (habían)", "haverão (habrán)", "hajam (hayan)"]
      ]},
      {title:"5. IR — IR  ·  Irregular  ·  Gerúndio/Gerundio: indo (yendo)  ·  Particípio/Participio: ido (ido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "vou (voy)", "fui (fui)", "ia (iba)", "irei (iré)", "vá (vaya)"],
        ["Tu — Tú", "vais (vas)", "foste (fuiste)", "ias (ibas)", "irás (irás)", "vás (vayas)"],
        ["Ele / Você — Él / Usted", "vai (va)", "foi (fue)", "ia (iba)", "irá (irá)", "vá (vaya)"],
        ["Nós — Nosotros", "vamos (vamos)", "fomos (fuimos)", "íamos (íbamos)", "iremos (iremos)", "vamos (vayamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "vão (van)", "foram (fueron)", "iam (iban)", "irão (irán)", "vão (vayan)"]
      ]},
      {title:"6. VIR — VENIR  ·  Irregular  ·  Gerúndio/Gerundio: vindo (viniendo)  ·  Particípio/Participio: vindo (venido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "venho (vengo)", "vim (vine)", "vinha (venía)", "virei (vendré)", "venha (venga)"],
        ["Tu — Tú", "vens (vienes)", "vieste (viniste)", "vinhas (venías)", "virás (vendrás)", "venhas (vengas)"],
        ["Ele / Você — Él / Usted", "vem (viene)", "veio (vino)", "vinha (venía)", "virá (vendrá)", "venha (venga)"],
        ["Nós — Nosotros", "vimos (venimos)", "viemos (vinimos)", "vínhamos (veníamos)", "viremos (vendremos)", "venhamos (vengamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "vêm (vienen)", "vieram (vinieron)", "vinham (venían)", "virão (vendrán)", "venham (vengan)"]
      ]},
      {title:"7. FAZER — HACER  ·  Irregular  ·  Gerúndio/Gerundio: fazendo (haciendo)  ·  Particípio/Participio: feito (hecho)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "faço (hago)", "fiz (hice)", "fazia (hacía)", "farei (haré)", "faça (haga)"],
        ["Tu — Tú", "fazes (haces)", "fizeste (hiciste)", "fazias (hacías)", "farás (harás)", "faças (hagas)"],
        ["Ele / Você — Él / Usted", "faz (hace)", "fez (hizo)", "fazia (hacía)", "fará (hará)", "faça (haga)"],
        ["Nós — Nosotros", "fazemos (hacemos)", "fizemos (hicimos)", "fazíamos (hacíamos)", "faremos (haremos)", "façamos (hagamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "fazem (hacen)", "fizeram (hicieron)", "faziam (hacían)", "farão (harán)", "façam (hagan)"]
      ]},
      {title:"8. PODER — PODER  ·  Irregular  ·  Gerúndio/Gerundio: podendo (pudiendo)  ·  Particípio/Participio: podido (podido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "posso (puedo)", "pude (pude)", "podia (podía)", "poderei (podré)", "possa (pueda)"],
        ["Tu — Tú", "podes (puedes)", "pudeste (pudiste)", "podias (podías)", "poderás (podrás)", "possas (puedas)"],
        ["Ele / Você — Él / Usted", "pode (puede)", "pôde (pudo)", "podia (podía)", "poderá (podrá)", "possa (pueda)"],
        ["Nós — Nosotros", "podemos (podemos)", "pudemos (pudimos)", "podíamos (podíamos)", "poderemos (podremos)", "possamos (podamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "podem (pueden)", "puderam (pudieron)", "podiam (podían)", "poderão (podrán)", "possam (puedan)"]
      ]},
      {title:"9. DIZER — DECIR  ·  Irregular  ·  Gerúndio/Gerundio: dizendo (diciendo)  ·  Particípio/Participio: dito (dicho)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "digo (digo)", "disse (dije)", "dizia (decía)", "direi (diré)", "diga (diga)"],
        ["Tu — Tú", "dizes (dices)", "disseste (dijiste)", "dizias (decías)", "dirás (dirás)", "digas (digas)"],
        ["Ele / Você — Él / Usted", "diz (dice)", "disse (dijo)", "dizia (decía)", "dirá (dirá)", "diga (diga)"],
        ["Nós — Nosotros", "dizemos (decimos)", "dissemos (dijimos)", "dizíamos (decíamos)", "diremos (diremos)", "digamos (digamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "dizem (dicen)", "disseram (dijeron)", "diziam (decían)", "dirão (dirán)", "digam (digan)"]
      ]},
      {title:"10. SABER — SABER  ·  Irregular  ·  Gerúndio/Gerundio: sabendo (sabiendo)  ·  Particípio/Participio: sabido (sabido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "sei (sé)", "soube (supe)", "sabia (sabía)", "saberei (sabré)", "saiba (sepa)"],
        ["Tu — Tú", "sabes (sabes)", "soubeste (supiste)", "sabias (sabías)", "saberás (sabrás)", "saibas (sepas)"],
        ["Ele / Você — Él / Usted", "sabe (sabe)", "soube (supo)", "sabia (sabía)", "saberá (sabrá)", "saiba (sepa)"],
        ["Nós — Nosotros", "sabemos (sabemos)", "soubemos (supimos)", "sabíamos (sabíamos)", "saberemos (sabremos)", "saibamos (sepamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "sabem (saben)", "souberam (supieron)", "sabiam (sabían)", "saberão (sabrán)", "saibam (sepan)"]
      ]},
      {title:"11. VER — VER  ·  Irregular  ·  Gerúndio/Gerundio: vendo (viendo)  ·  Particípio/Participio: visto (visto)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "vejo (veo)", "vi (vi)", "via (veía)", "verei (veré)", "veja (vea)"],
        ["Tu — Tú", "vês (ves)", "viste (viste)", "vias (veías)", "verás (verás)", "vejas (veas)"],
        ["Ele / Você — Él / Usted", "vê (ve)", "viu (vio)", "via (veía)", "verá (verá)", "veja (vea)"],
        ["Nós — Nosotros", "vemos (vemos)", "vimos (vimos)", "víamos (veíamos)", "veremos (veremos)", "vejamos (veamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "vêem (ven)", "viram (vieron)", "viam (veían)", "verão (verán)", "vejam (vean)"]
      ]},
      {title:"12. QUERER — QUERER  ·  Irregular  ·  Gerúndio/Gerundio: querendo (queriendo)  ·  Particípio/Participio: querido (querido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "quero (quiero)", "quis (querí)", "queria (quería)", "quererei (quereré)", "queira (quiera)"],
        ["Tu — Tú", "queres (quieres)", "quiseste (queriste)", "querias (querías)", "quererás (quererás)", "queiras (quieras)"],
        ["Ele / Você — Él / Usted", "quer (quiere)", "quis (querió)", "queria (quería)", "quererá (quererá)", "queira (quiera)"],
        ["Nós — Nosotros", "queremos (queremos)", "quisemos (querimos)", "queríamos (queríamos)", "quereremos (quereremos)", "queiramos (queramos)"],
        ["Eles / Vocês — Ellos / Ustedes", "querem (quieren)", "quiseram (querieron)", "queriam (querían)", "quererão (quererán)", "queiram (quieran)"]
      ]},
      {title:"13. DAR — DAR  ·  Irregular  ·  Gerúndio/Gerundio: dando (dando)  ·  Particípio/Participio: dado (dado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "dou (doy)", "dei (di)", "dava (daba)", "darei (daré)", "dê (dé)"],
        ["Tu — Tú", "dás (das)", "deste (diste)", "davas (dabas)", "darás (darás)", "dês (des)"],
        ["Ele / Você — Él / Usted", "dá (da)", "deu (dio)", "dava (daba)", "dará (dará)", "dê (dé)"],
        ["Nós — Nosotros", "damos (damos)", "demos (dimos)", "dávamos (dábamos)", "daremos (daremos)", "demos (demos)"],
        ["Eles / Vocês — Ellos / Ustedes", "dão (dan)", "deram (dieron)", "davam (daban)", "darão (darán)", "dêem (den)"]
      ]},
      {title:"14. PÔR — PONER  ·  Irregular  ·  Gerúndio/Gerundio: pondo (poniendo)  ·  Particípio/Participio: posto (puesto)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "ponho (pongo)", "pus (puse)", "punha (ponía)", "porei (pondré)", "ponha (ponga)"],
        ["Tu — Tú", "pões (pones)", "puseste (pusiste)", "punhas (ponías)", "porás (pondrás)", "ponhas (pongas)"],
        ["Ele / Você — Él / Usted", "põe (pone)", "pôs (puso)", "punha (ponía)", "porá (pondrá)", "ponha (ponga)"],
        ["Nós — Nosotros", "pomos (ponemos)", "pusemos (pusimos)", "púnhamos (poníamos)", "poremos (pondremos)", "ponhamos (pongamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "põem (ponen)", "puseram (pusieron)", "punham (ponían)", "porão (pondrán)", "ponham (pongan)"]
      ]},
      {title:"15. OUVIR — OÍR  ·  Irregular  ·  Gerúndio/Gerundio: ouvindo (oyendo)  ·  Particípio/Participio: ouvido (oído)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "ouço (oigo)", "ouvi (oí)", "ouvia (oía)", "ouvirei (oiré)", "ouça (oiga)"],
        ["Tu — Tú", "ouves (oyes)", "ouviste (oíste)", "ouvias (oías)", "ouvirás (oirás)", "ouças (oigas)"],
        ["Ele / Você — Él / Usted", "ouve (oye)", "ouviu (oyó)", "ouvia (oía)", "ouvirá (oirá)", "ouça (oiga)"],
        ["Nós — Nosotros", "ouvimos (oímos)", "ouvimos (oímos)", "ouvíamos (oíamos)", "ouviremos (oiremos)", "ouçamos (oigamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "ouvem (oyen)", "ouviram (oyeron)", "ouviam (oían)", "ouvirão (oirán)", "ouçam (oigan)"]
      ]},
      {title:"16. PEDIR — PEDIR  ·  Irregular  ·  Gerúndio/Gerundio: pedindo (pidiendo)  ·  Particípio/Participio: pedito (pedido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "peço (pido)", "pedi (pedí)", "pedia (pedía)", "pedirei (pediré)", "peça (pida)"],
        ["Tu — Tú", "pedes (pides)", "pediste (pediste)", "pedias (pedías)", "pedirás (pedirás)", "peças (pidas)"],
        ["Ele / Você — Él / Usted", "pede (pide)", "pediu (pedió)", "pedia (pedía)", "pedirá (pedirá)", "peça (pida)"],
        ["Nós — Nosotros", "pedimos (pedimos)", "pedimos (pedimos)", "pedíamos (pedíamos)", "pediremos (pediremos)", "peçamos (pedamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "pedem (piden)", "pediram (pedieron)", "pediam (pedían)", "pedirão (pedirán)", "peçam (pidan)"]
      ]},
      {title:"17. TRAZER — TRAER  ·  Irregular  ·  Gerúndio/Gerundio: trazendo (trayendo)  ·  Particípio/Participio: trazido (traído)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "trago (traigo)", "trouxe (traje)", "trazia (traía)", "trarei (traeré)", "traga (traiga)"],
        ["Tu — Tú", "trazes (traes)", "trouxeste (trajiste)", "trazias (traías)", "trarás (traerás)", "tragas (traigas)"],
        ["Ele / Você — Él / Usted", "traz (trae)", "trouxe (trajo)", "trazia (traía)", "trará (traerá)", "traga (traiga)"],
        ["Nós — Nosotros", "trazemos (traemos)", "trouxemos (trajimos)", "trazíamos (traíamos)", "traremos (traeremos)", "tragamos (traigamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "trazem (traen)", "trouxeram (trajeron)", "traziam (traían)", "trarão (traerán)", "tragam (traigan)"]
      ]},
      {title:"18. SENTIR — SENTIR  ·  Irregular  ·  Gerúndio/Gerundio: sentindo (sintiendo)  ·  Particípio/Participio: sentido (sentido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "sinto (sento)", "senti (sentí)", "sentia (sentía)", "sentirei (sentiré)", "sinta (senta)"],
        ["Tu — Tú", "sentes (sentes)", "sentiste (sentiste)", "sentias (sentías)", "sentirás (sentirás)", "sintas (sentas)"],
        ["Ele / Você — Él / Usted", "sente (sente)", "sentiu (sentió)", "sentia (sentía)", "sentirá (sentirá)", "sinta (senta)"],
        ["Nós — Nosotros", "sentimos (sentimos)", "sentimos (sentimos)", "sentíamos (sentíamos)", "sentiremos (sentiremos)", "sintamos (sentamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "sentem (senten)", "sentiram (sentieron)", "sentiam (sentían)", "sentirão (sentirán)", "sintam (sentan)"]
      ]},
      {title:"19. SAIR — SALIR  ·  Irregular  ·  Gerúndio/Gerundio: saindo (saliendo)  ·  Particípio/Participio: saído (salido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "saio (salgo)", "saí (salí)", "saía (salía)", "sairei (saldré)", "saia (salga)"],
        ["Tu — Tú", "sais (sales)", "saíste (saliste)", "saías (salías)", "sairás (saldrás)", "saias (salgas)"],
        ["Ele / Você — Él / Usted", "sai (sale)", "saiu (salió)", "saía (salía)", "sairá (saldrá)", "saia (salga)"],
        ["Nós — Nosotros", "saímos (salimos)", "saímos (salimos)", "saíamos (salíamos)", "sairemos (saldremos)", "saiamos (salgamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "saem (salen)", "saíram (salieron)", "saíam (salían)", "sairão (saldrán)", "saiam (salgan)"]
      ]}
      ],
      notes: [
        "Comece por aqui: são os verbos que mais aparecem no dia a dia (ser, estar, ter, ir, fazer, poder, querer, dizer, saber...) e que têm as conjugações mais diferentes do português.",
        "Formato de cada célula: forma em português (forma em español) — leia sempre comparando os dois idiomas.",
        "Este módulo é só de consulta rápida — não tem exercícios nem prova. Use-o como dicionário de conjugação sempre que precisar, durante qualquer nível do curso."
      ],
      exercises: []
    },
    {
      id: "verb-ar1", order: 2, title: "Regulares -AR (parte 1)", subtitle: "65 verbos regulares terminados em -AR",
      vocabulary: [],
      grammar: [
      {title:"20. FICAR — QUEDARSE  ·  Regular -AR  ·  Gerúndio/Gerundio: ficando (quedandose)  ·  Particípio/Participio: ficado (quedado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "fico (me quedo)", "ficei (me quedé)", "ficava (me quedaba)", "ficarei (me quedaré)", "fice (me quede)"],
        ["Tu — Tú", "ficas (te quedas)", "ficaste (te quedaste)", "ficavas (te quedabas)", "ficarás (te quedarás)", "fices (te quedes)"],
        ["Ele / Você — Él / Usted", "fica (se queda)", "ficou (se quedó)", "ficava (se quedaba)", "ficará (se quedará)", "fice (se quede)"],
        ["Nós — Nosotros", "ficamos (nos quedamos)", "ficamos (nos quedamos)", "ficávamos (nos quedábamos)", "ficaremos (nos quedaremos)", "ficemos (nos quedemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "ficam (se quedan)", "ficaram (se quedaron)", "ficavam (se quedaban)", "ficarão (se quedarán)", "ficem (se queden)"]
      ]},
      {title:"22. ABRAÇAR — ABRAZAR  ·  Regular -AR  ·  Gerúndio/Gerundio: abraçando (abrazando)  ·  Particípio/Participio: abraçado (abrazado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "abraço (abrazo)", "abraçei (abrazé)", "abraçava (abrazaba)", "abraçarei (abrazaré)", "abraçe (abraze)"],
        ["Tu — Tú", "abraças (abrazas)", "abraçaste (abrazaste)", "abraçavas (abrazabas)", "abraçarás (abrazarás)", "abraçes (abrazes)"],
        ["Ele / Você — Él / Usted", "abraça (abraza)", "abraçou (abrazó)", "abraçava (abrazaba)", "abraçará (abrazará)", "abraçe (abraze)"],
        ["Nós — Nosotros", "abraçamos (abrazamos)", "abraçamos (abrazamos)", "abraçávamos (abrazábamos)", "abraçaremos (abrazaremos)", "abraçemos (abrazemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "abraçam (abrazan)", "abraçaram (abrazaron)", "abraçavam (abrazaban)", "abraçarão (abrazarán)", "abraçem (abrazen)"]
      ]},
      {title:"23. ACEITAR — ACEPTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: aceitando (aceptando)  ·  Particípio/Participio: aceitado (aceptado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "aceito (acepto)", "aceitei (acepté)", "aceitava (aceptaba)", "aceitarei (aceptaré)", "aceite (acepte)"],
        ["Tu — Tú", "aceitas (aceptas)", "aceitaste (aceptaste)", "aceitavas (aceptabas)", "aceitarás (aceptarás)", "aceites (aceptes)"],
        ["Ele / Você — Él / Usted", "aceita (acepta)", "aceitou (aceptó)", "aceitava (aceptaba)", "aceitará (aceptará)", "aceite (acepte)"],
        ["Nós — Nosotros", "aceitamos (aceptamos)", "aceitamos (aceptamos)", "aceitávamos (aceptábamos)", "aceitaremos (aceptaremos)", "aceitemos (aceptemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "aceitam (aceptan)", "aceitaram (aceptaron)", "aceitavam (aceptaban)", "aceitarão (aceptarán)", "aceitem (acepten)"]
      ]},
      {title:"24. ACHAR — ENCONTRAR/CREER  ·  Regular -AR  ·  Gerúndio/Gerundio: achando (encontrando)  ·  Particípio/Participio: achado (encontrado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "acho (encuentro)", "achei (encontré)", "achava (encontraba)", "acharei (encontraré)", "ache (encuentre)"],
        ["Tu — Tú", "achas (encuentras)", "achaste (encontraste)", "achavas (encontrabas)", "acharás (encontrarás)", "aches (encuentres)"],
        ["Ele / Você — Él / Usted", "acha (encuentra)", "achou (encontró)", "achava (encontraba)", "achará (encontrará)", "ache (encuentre)"],
        ["Nós — Nosotros", "achamos (encontramos)", "achamos (encontramos)", "achávamos (encontrábamos)", "acharemos (encontraremos)", "achemos (encontremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "acham (encuentran)", "acharam (encontraron)", "achavam (encontraban)", "acharão (encontrarán)", "achem (encuentren)"]
      ]},
      {title:"26. ACREDITAR — CREER  ·  Regular -AR  ·  Gerúndio/Gerundio: acreditando (creyendo)  ·  Particípio/Participio: acreditado (creido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "acredito (creo)", "acreditei (creí)", "acreditava (creía)", "acreditarei (creeré)", "acredite (crea)"],
        ["Tu — Tú", "acreditas (crees)", "acreditaste (creiste)", "acreditavas (creías)", "acreditarás (creerás)", "acredites (creas)"],
        ["Ele / Você — Él / Usted", "acredita (cree)", "acreditou (creió)", "acreditava (creía)", "acreditará (creerá)", "acredite (crea)"],
        ["Nós — Nosotros", "acreditamos (creemos)", "acreditamos (creimos)", "acreditávamos (creíamos)", "acreditaremos (creeremos)", "acreditemos (creamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "acreditam (creen)", "acreditaram (creieron)", "acreditavam (creían)", "acreditarão (creerán)", "acreditem (crean)"]
      ]},
      {title:"27. ADICIONAR — AÑADIR  ·  Regular -AR  ·  Gerúndio/Gerundio: adicionando (añadiendo)  ·  Particípio/Participio: adicionado (añadido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "adiciono (añado)", "adicionei (añadí)", "adicionava (añadía)", "adicionarei (añadiré)", "adicione (añada)"],
        ["Tu — Tú", "adicionas (añades)", "adicionaste (añadiste)", "adicionavas (añadías)", "adicionarás (añadirás)", "adiciones (añadas)"],
        ["Ele / Você — Él / Usted", "adiciona (añade)", "adicionou (añadió)", "adicionava (añadía)", "adicionará (añadirá)", "adicione (añada)"],
        ["Nós — Nosotros", "adicionamos (añadimos)", "adicionamos (añadimos)", "adicionávamos (añadíamos)", "adicionaremos (añadiremos)", "adicionemos (añadamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "adicionam (añaden)", "adicionaram (añadieron)", "adicionavam (añadían)", "adicionarão (añadirán)", "adicionem (añadan)"]
      ]},
      {title:"28. ADMIRAR — ADMIRAR  ·  Regular -AR  ·  Gerúndio/Gerundio: admirando (admirando)  ·  Particípio/Participio: admirado (admirado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "admiro (admiro)", "admirei (admiré)", "admirava (admiraba)", "admirarei (admiraré)", "admire (admire)"],
        ["Tu — Tú", "admiras (admiras)", "admiraste (admiraste)", "admiravas (admirabas)", "admirarás (admirarás)", "admires (admires)"],
        ["Ele / Você — Él / Usted", "admira (admira)", "admirou (admiró)", "admirava (admiraba)", "admirará (admirará)", "admire (admire)"],
        ["Nós — Nosotros", "admiramos (admiramos)", "admiramos (admiramos)", "admirávamos (admirábamos)", "admiraremos (admiraremos)", "admiremos (admiremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "admiram (admiran)", "admiraram (admiraron)", "admiravam (admiraban)", "admirarão (admirarán)", "admirem (admiren)"]
      ]},
      {title:"29. ADORAR — ADORAR  ·  Regular -AR  ·  Gerúndio/Gerundio: adorando (adorando)  ·  Particípio/Participio: adorado (adorado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "adoro (adoro)", "adorei (adoré)", "adorava (adoraba)", "adorarei (adoraré)", "adore (adore)"],
        ["Tu — Tú", "adoras (adoras)", "adoraste (adoraste)", "adoravas (adorabas)", "adorarás (adorarás)", "adores (adores)"],
        ["Ele / Você — Él / Usted", "adora (adora)", "adorou (adoró)", "adorava (adoraba)", "adorará (adorará)", "adore (adore)"],
        ["Nós — Nosotros", "adoramos (adoramos)", "adoramos (adoramos)", "adorávamos (adorábamos)", "adoraremos (adoraremos)", "adoremos (adoremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "adoram (adoran)", "adoraram (adoraron)", "adoravam (adoraban)", "adorarão (adorarán)", "adorem (adoren)"]
      ]},
      {title:"31. AJUDAR — AYUDAR  ·  Regular -AR  ·  Gerúndio/Gerundio: ajudando (ayudando)  ·  Particípio/Participio: ajudado (ayudado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "ajudo (ayudo)", "ajudei (ayudé)", "ajudava (ayudaba)", "ajudarei (ayudaré)", "ajude (ayude)"],
        ["Tu — Tú", "ajudas (ayudas)", "ajudaste (ayudaste)", "ajudavas (ayudabas)", "ajudarás (ayudarás)", "ajudes (ayudes)"],
        ["Ele / Você — Él / Usted", "ajuda (ayuda)", "ajudou (ayudó)", "ajudava (ayudaba)", "ajudará (ayudará)", "ajude (ayude)"],
        ["Nós — Nosotros", "ajudamos (ayudamos)", "ajudamos (ayudamos)", "ajudávamos (ayudábamos)", "ajudaremos (ayudaremos)", "ajudemos (ayudemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "ajudam (ayudan)", "ajudaram (ayudaron)", "ajudavam (ayudaban)", "ajudarão (ayudarán)", "ajudem (ayuden)"]
      ]},
      {title:"32. ALMOÇAR — ALMORZAR  ·  Regular -AR  ·  Gerúndio/Gerundio: almoçando (almorzando)  ·  Particípio/Participio: almoçado (almorzado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "almoço (almuerzo)", "almoçei (almorzé)", "almoçava (almorzaba)", "almoçarei (almorzaré)", "almoçe (almuerze)"],
        ["Tu — Tú", "almoças (almuerzas)", "almoçaste (almorzaste)", "almoçavas (almorzabas)", "almoçarás (almorzarás)", "almoçes (almuerzes)"],
        ["Ele / Você — Él / Usted", "almoça (almuerza)", "almoçou (almorzó)", "almoçava (almorzaba)", "almoçará (almorzará)", "almoçe (almuerze)"],
        ["Nós — Nosotros", "almoçamos (almorzamos)", "almoçamos (almorzamos)", "almoçávamos (almorzábamos)", "almoçaremos (almorzaremos)", "almoçemos (almorzemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "almoçam (almuerzan)", "almoçaram (almorzaron)", "almoçavam (almorzaban)", "almoçarão (almorzarán)", "almoçem (almuerzen)"]
      ]},
      {title:"33. AMAR — AMAR  ·  Regular -AR  ·  Gerúndio/Gerundio: amando (amando)  ·  Particípio/Participio: amado (amado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "amo (amo)", "amei (amé)", "amava (amaba)", "amarei (amaré)", "ame (ame)"],
        ["Tu — Tú", "amas (amas)", "amaste (amaste)", "amavas (amabas)", "amarás (amarás)", "ames (ames)"],
        ["Ele / Você — Él / Usted", "ama (ama)", "amou (amó)", "amava (amaba)", "amará (amará)", "ame (ame)"],
        ["Nós — Nosotros", "amamos (amamos)", "amamos (amamos)", "amávamos (amábamos)", "amaremos (amaremos)", "amemos (amemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "amam (aman)", "amaram (amaron)", "amavam (amaban)", "amarão (amarán)", "amem (amen)"]
      ]},
      {title:"34. ANDAR — ANDAR  ·  Regular -AR  ·  Gerúndio/Gerundio: andando (andando)  ·  Particípio/Participio: andado (andado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "ando (ando)", "andei (andé)", "andava (andaba)", "andarei (andaré)", "ande (ande)"],
        ["Tu — Tú", "andas (andas)", "andaste (andaste)", "andavas (andabas)", "andarás (andarás)", "andes (andes)"],
        ["Ele / Você — Él / Usted", "anda (anda)", "andou (andó)", "andava (andaba)", "andará (andará)", "ande (ande)"],
        ["Nós — Nosotros", "andamos (andamos)", "andamos (andamos)", "andávamos (andábamos)", "andaremos (andaremos)", "andemos (andemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "andam (andan)", "andaram (andaron)", "andavam (andaban)", "andarão (andarán)", "andem (anden)"]
      ]},
      {title:"35. ANUNCIAR — ANUNCIAR  ·  Regular -AR  ·  Gerúndio/Gerundio: anunciando (anunciando)  ·  Particípio/Participio: anunciado (anunciado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "anuncio (anuncio)", "anunciei (anuncié)", "anunciava (anunciaba)", "anunciarei (anunciaré)", "anuncie (anuncie)"],
        ["Tu — Tú", "anuncias (anuncias)", "anunciaste (anunciaste)", "anunciavas (anunciabas)", "anunciarás (anunciarás)", "anuncies (anuncies)"],
        ["Ele / Você — Él / Usted", "anuncia (anuncia)", "anunciou (anunció)", "anunciava (anunciaba)", "anunciará (anunciará)", "anuncie (anuncie)"],
        ["Nós — Nosotros", "anunciamos (anunciamos)", "anunciamos (anunciamos)", "anunciávamos (anunciábamos)", "anunciaremos (anunciaremos)", "anunciemos (anunciemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "anunciam (anuncian)", "anunciaram (anunciaron)", "anunciavam (anunciaban)", "anunciarão (anunciarán)", "anunciem (anuncien)"]
      ]},
      {title:"37. APRESENTAR — PRESENTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: apresentando (presentando)  ·  Particípio/Participio: apresentado (presentado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "apresento (presento)", "apresentei (presenté)", "apresentava (presentaba)", "apresentarei (presentaré)", "apresente (presente)"],
        ["Tu — Tú", "apresentas (presentas)", "apresentaste (presentaste)", "apresentavas (presentabas)", "apresentarás (presentarás)", "apresentes (presentes)"],
        ["Ele / Você — Él / Usted", "apresenta (presenta)", "apresentou (presentó)", "apresentava (presentaba)", "apresentará (presentará)", "apresente (presente)"],
        ["Nós — Nosotros", "apresentamos (presentamos)", "apresentamos (presentamos)", "apresentávamos (presentábamos)", "apresentaremos (presentaremos)", "apresentemos (presentemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "apresentam (presentan)", "apresentaram (presentaron)", "apresentavam (presentaban)", "apresentarão (presentarán)", "apresentem (presenten)"]
      ]},
      {title:"39. APROVEITAR — APROVECHAR  ·  Regular -AR  ·  Gerúndio/Gerundio: aproveitando (aprovechando)  ·  Particípio/Participio: aproveitado (aprovechado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "aproveito (aprovecho)", "aproveitei (aproveché)", "aproveitava (aprovechaba)", "aproveitarei (aprovecharé)", "aproveite (aproveche)"],
        ["Tu — Tú", "aproveitas (aprovechas)", "aproveitaste (aprovechaste)", "aproveitavas (aprovechabas)", "aproveitarás (aprovecharás)", "aproveites (aproveches)"],
        ["Ele / Você — Él / Usted", "aproveita (aprovecha)", "aproveitou (aprovechó)", "aproveitava (aprovechaba)", "aproveitará (aprovechará)", "aproveite (aproveche)"],
        ["Nós — Nosotros", "aproveitamos (aprovechamos)", "aproveitamos (aprovechamos)", "aproveitávamos (aprovechábamos)", "aproveitaremos (aprovecharemos)", "aproveitemos (aprovechemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "aproveitam (aprovechan)", "aproveitaram (aprovecharon)", "aproveitavam (aprovechaban)", "aproveitarão (aprovecharán)", "aproveitem (aprovechen)"]
      ]},
      {title:"40. APROVAR — APROBAR  ·  Regular -AR  ·  Gerúndio/Gerundio: aprovando (aprobando)  ·  Particípio/Participio: aprovado (aprobado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "aprovo (aprobo)", "aprovei (aprobé)", "aprovava (aprobaba)", "aprovarei (aprobaré)", "aprove (aprobe)"],
        ["Tu — Tú", "aprovas (aprobas)", "aprovaste (aprobaste)", "aprovavas (aprobabas)", "aprovarás (aprobarás)", "aproves (aprobes)"],
        ["Ele / Você — Él / Usted", "aprova (aproba)", "aprovou (aprobó)", "aprovava (aprobaba)", "aprovará (aprobará)", "aprove (aprobe)"],
        ["Nós — Nosotros", "aprovamos (aprobamos)", "aprovamos (aprobamos)", "aprovávamos (aprobábamos)", "aprovaremos (aprobaremos)", "aprovemos (aprobemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "aprovam (aproban)", "aprovaram (aprobaron)", "aprovavam (aprobaban)", "aprovarão (aprobarán)", "aprovem (aproben)"]
      ]},
      {title:"41. ARRUMAR — ARREGLAR  ·  Regular -AR  ·  Gerúndio/Gerundio: arrumando (arreglando)  ·  Particípio/Participio: arrumado (arreglado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "arrumo (arreglo)", "arrumei (arreglé)", "arrumava (arreglaba)", "arrumarei (arreglaré)", "arrume (arregle)"],
        ["Tu — Tú", "arrumas (arreglas)", "arrumaste (arreglaste)", "arrumavas (arreglabas)", "arrumarás (arreglarás)", "arrumes (arregles)"],
        ["Ele / Você — Él / Usted", "arruma (arregla)", "arrumou (arregló)", "arrumava (arreglaba)", "arrumará (arreglará)", "arrume (arregle)"],
        ["Nós — Nosotros", "arrumamos (arreglamos)", "arrumamos (arreglamos)", "arrumávamos (arreglábamos)", "arrumaremos (arreglaremos)", "arrumemos (arreglemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "arrumam (arreglan)", "arrumaram (arreglaron)", "arrumavam (arreglaban)", "arrumarão (arreglarán)", "arrumem (arreglen)"]
      ]},
      {title:"44. ATRAPALHAR — ESTORBAR  ·  Regular -AR  ·  Gerúndio/Gerundio: atrapalhando (estorbando)  ·  Particípio/Participio: atrapalhado (estorbado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "atrapalho (estorbo)", "atrapalhei (estorbé)", "atrapalhava (estorbaba)", "atrapalharei (estorbaré)", "atrapalhe (estorbe)"],
        ["Tu — Tú", "atrapalhas (estorbas)", "atrapalhaste (estorbaste)", "atrapalhavas (estorbabas)", "atrapalharás (estorbarás)", "atrapalhes (estorbes)"],
        ["Ele / Você — Él / Usted", "atrapalha (estorba)", "atrapalhou (estorbó)", "atrapalhava (estorbaba)", "atrapalhará (estorbará)", "atrapalhe (estorbe)"],
        ["Nós — Nosotros", "atrapalhamos (estorbamos)", "atrapalhamos (estorbamos)", "atrapalhávamos (estorbábamos)", "atrapalharemos (estorbaremos)", "atrapalhemos (estorbemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "atrapalham (estorban)", "atrapalharam (estorbaron)", "atrapalhavam (estorbaban)", "atrapalharão (estorbarán)", "atrapalhem (estorben)"]
      ]},
      {title:"45. AUMENTAR — AUMENTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: aumentando (aumentando)  ·  Particípio/Participio: aumentado (aumentado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "aumento (aumento)", "aumentei (aumenté)", "aumentava (aumentaba)", "aumentarei (aumentaré)", "aumente (aumente)"],
        ["Tu — Tú", "aumentas (aumentas)", "aumentaste (aumentaste)", "aumentavas (aumentabas)", "aumentarás (aumentarás)", "aumentes (aumentes)"],
        ["Ele / Você — Él / Usted", "aumenta (aumenta)", "aumentou (aumentó)", "aumentava (aumentaba)", "aumentará (aumentará)", "aumente (aumente)"],
        ["Nós — Nosotros", "aumentamos (aumentamos)", "aumentamos (aumentamos)", "aumentávamos (aumentábamos)", "aumentaremos (aumentaremos)", "aumentemos (aumentemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "aumentam (aumentan)", "aumentaram (aumentaron)", "aumentavam (aumentaban)", "aumentarão (aumentarán)", "aumentem (aumenten)"]
      ]},
      {title:"46. AVISAR — AVISAR  ·  Regular -AR  ·  Gerúndio/Gerundio: avisando (avisando)  ·  Particípio/Participio: avisado (avisado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "aviso (aviso)", "avisei (avisé)", "avisava (avisaba)", "avisarei (avisaré)", "avise (avise)"],
        ["Tu — Tú", "avisas (avisas)", "avisaste (avisaste)", "avisavas (avisabas)", "avisarás (avisarás)", "avises (avises)"],
        ["Ele / Você — Él / Usted", "avisa (avisa)", "avisou (avisó)", "avisava (avisaba)", "avisará (avisará)", "avise (avise)"],
        ["Nós — Nosotros", "avisamos (avisamos)", "avisamos (avisamos)", "avisávamos (avisábamos)", "avisaremos (avisaremos)", "avisemos (avisemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "avisam (avisan)", "avisaram (avisaron)", "avisavam (avisaban)", "avisarão (avisarán)", "avisem (avisen)"]
      ]},
      {title:"47. BAILAR — BAILAR  ·  Regular -AR  ·  Gerúndio/Gerundio: bailando (bailando)  ·  Particípio/Participio: bailado (bailado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "bailo (bailo)", "bailei (bailé)", "bailava (bailaba)", "bailarei (bailaré)", "baile (baile)"],
        ["Tu — Tú", "bailas (bailas)", "bailaste (bailaste)", "bailavas (bailabas)", "bailarás (bailarás)", "bailes (bailes)"],
        ["Ele / Você — Él / Usted", "baila (baila)", "bailou (bailó)", "bailava (bailaba)", "bailará (bailará)", "baile (baile)"],
        ["Nós — Nosotros", "bailamos (bailamos)", "bailamos (bailamos)", "bailávamos (bailábamos)", "bailaremos (bailaremos)", "bailemos (bailemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "bailam (bailan)", "bailaram (bailaron)", "bailavam (bailaban)", "bailarão (bailarán)", "bailem (bailen)"]
      ]},
      {title:"48. BAIXAR — BAJAR  ·  Regular -AR  ·  Gerúndio/Gerundio: baixando (bajando)  ·  Particípio/Participio: baixado (bajado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "baixo (bajo)", "baixei (bajé)", "baixava (bajaba)", "baixarei (bajaré)", "baixe (baje)"],
        ["Tu — Tú", "baixas (bajas)", "baixaste (bajaste)", "baixavas (bajabas)", "baixarás (bajarás)", "baixes (bajes)"],
        ["Ele / Você — Él / Usted", "baixa (baja)", "baixou (bajó)", "baixava (bajaba)", "baixará (bajará)", "baixe (baje)"],
        ["Nós — Nosotros", "baixamos (bajamos)", "baixamos (bajamos)", "baixávamos (bajábamos)", "baixaremos (bajaremos)", "baixemos (bajemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "baixam (bajan)", "baixaram (bajaron)", "baixavam (bajaban)", "baixarão (bajarán)", "baixem (bajen)"]
      ]},
      {title:"50. BRINCAR — JUGAR  ·  Regular -AR  ·  Gerúndio/Gerundio: brincando (jugando)  ·  Particípio/Participio: brincado (jugado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "brinco (jugo)", "brincei (jugé)", "brincava (jugaba)", "brincarei (jugaré)", "brince (juge)"],
        ["Tu — Tú", "brincas (jugas)", "brincaste (jugaste)", "brincavas (jugabas)", "brincarás (jugarás)", "brinces (juges)"],
        ["Ele / Você — Él / Usted", "brinca (juga)", "brincou (jugó)", "brincava (jugaba)", "brincará (jugará)", "brince (juge)"],
        ["Nós — Nosotros", "brincamos (jugamos)", "brincamos (jugamos)", "brincávamos (jugábamos)", "brincaremos (jugaremos)", "brincemos (jugemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "brincam (jugan)", "brincaram (jugaron)", "brincavam (jugaban)", "brincarão (jugarán)", "brincem (jugen)"]
      ]},
      {title:"51. BUSCAR — BUSCAR  ·  Regular -AR  ·  Gerúndio/Gerundio: buscando (buscando)  ·  Particípio/Participio: buscado (buscado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "busco (busco)", "buscei (buscé)", "buscava (buscaba)", "buscarei (buscaré)", "busce (busce)"],
        ["Tu — Tú", "buscas (buscas)", "buscaste (buscaste)", "buscavas (buscabas)", "buscarás (buscarás)", "busces (busces)"],
        ["Ele / Você — Él / Usted", "busca (busca)", "buscou (buscó)", "buscava (buscaba)", "buscará (buscará)", "busce (busce)"],
        ["Nós — Nosotros", "buscamos (buscamos)", "buscamos (buscamos)", "buscávamos (buscábamos)", "buscaremos (buscaremos)", "buscemos (buscemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "buscam (buscan)", "buscaram (buscaron)", "buscavam (buscaban)", "buscarão (buscarán)", "buscem (buscen)"]
      ]},
      {title:"53. CAMINHAR — CAMINAR  ·  Regular -AR  ·  Gerúndio/Gerundio: caminhando (caminando)  ·  Particípio/Participio: caminhado (caminado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "caminho (camino)", "caminhei (caminé)", "caminhava (caminaba)", "caminharei (caminaré)", "caminhe (camine)"],
        ["Tu — Tú", "caminhas (caminas)", "caminhaste (caminaste)", "caminhavas (caminabas)", "caminharás (caminarás)", "caminhes (camines)"],
        ["Ele / Você — Él / Usted", "caminha (camina)", "caminhou (caminó)", "caminhava (caminaba)", "caminhará (caminará)", "caminhe (camine)"],
        ["Nós — Nosotros", "caminhamos (caminamos)", "caminhamos (caminamos)", "caminhávamos (caminábamos)", "caminharemos (caminaremos)", "caminhemos (caminemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "caminham (caminan)", "caminharam (caminaron)", "caminhavam (caminaban)", "caminharão (caminarán)", "caminhem (caminen)"]
      ]},
      {title:"54. CANTAR — CANTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: cantando (cantando)  ·  Particípio/Participio: cantado (cantado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "canto (canto)", "cantei (canté)", "cantava (cantaba)", "cantarei (cantaré)", "cante (cante)"],
        ["Tu — Tú", "cantas (cantas)", "cantaste (cantaste)", "cantavas (cantabas)", "cantarás (cantarás)", "cantes (cantes)"],
        ["Ele / Você — Él / Usted", "canta (canta)", "cantou (cantó)", "cantava (cantaba)", "cantará (cantará)", "cante (cante)"],
        ["Nós — Nosotros", "cantamos (cantamos)", "cantamos (cantamos)", "cantávamos (cantábamos)", "cantaremos (cantaremos)", "cantemos (cantemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "cantam (cantan)", "cantaram (cantaron)", "cantavam (cantaban)", "cantarão (cantarán)", "cantem (canten)"]
      ]},
      {title:"55. CARREGAR — CARGAR  ·  Regular -AR  ·  Gerúndio/Gerundio: carregando (cargando)  ·  Particípio/Participio: carregado (cargado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "carrego (cargo)", "carregei (cargé)", "carregava (cargaba)", "carregarei (cargaré)", "carrege (carge)"],
        ["Tu — Tú", "carregas (cargas)", "carregaste (cargaste)", "carregavas (cargabas)", "carregarás (cargarás)", "carreges (carges)"],
        ["Ele / Você — Él / Usted", "carrega (carga)", "carregou (cargó)", "carregava (cargaba)", "carregará (cargará)", "carrege (carge)"],
        ["Nós — Nosotros", "carregamos (cargamos)", "carregamos (cargamos)", "carregávamos (cargábamos)", "carregaremos (cargaremos)", "carregemos (cargemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "carregam (cargan)", "carregaram (cargaron)", "carregavam (cargaban)", "carregarão (cargarán)", "carregem (cargen)"]
      ]},
      {title:"56. CASAR — CASARSE  ·  Regular -AR  ·  Gerúndio/Gerundio: casando (casandose)  ·  Particípio/Participio: casado (casado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "caso (me caso)", "casei (me casé)", "casava (me casaba)", "casarei (me casaré)", "case (me case)"],
        ["Tu — Tú", "casas (te casas)", "casaste (te casaste)", "casavas (te casabas)", "casarás (te casarás)", "cases (te cases)"],
        ["Ele / Você — Él / Usted", "casa (se casa)", "casou (se casó)", "casava (se casaba)", "casará (se casará)", "case (se case)"],
        ["Nós — Nosotros", "casamos (nos casamos)", "casamos (nos casamos)", "casávamos (nos casábamos)", "casaremos (nos casaremos)", "casemos (nos casemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "casam (se casan)", "casaram (se casaron)", "casavam (se casaban)", "casarão (se casarán)", "casem (se casen)"]
      ]},
      {title:"57. CHAMAR — LLAMAR  ·  Regular -AR  ·  Gerúndio/Gerundio: chamando (llamando)  ·  Particípio/Participio: chamado (llamado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "chamo (llamo)", "chamei (llamé)", "chamava (llamaba)", "chamarei (llamaré)", "chame (llame)"],
        ["Tu — Tú", "chamas (llamas)", "chamaste (llamaste)", "chamavas (llamabas)", "chamarás (llamarás)", "chames (llames)"],
        ["Ele / Você — Él / Usted", "chama (llama)", "chamou (llamó)", "chamava (llamaba)", "chamará (llamará)", "chame (llame)"],
        ["Nós — Nosotros", "chamamos (llamamos)", "chamamos (llamamos)", "chamávamos (llamábamos)", "chamaremos (llamaremos)", "chamemos (llamemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "chamam (llaman)", "chamaram (llamaron)", "chamavam (llamaban)", "chamarão (llamarán)", "chamem (llamen)"]
      ]},
      {title:"58. CHEGAR — LLEGAR  ·  Regular -AR  ·  Gerúndio/Gerundio: chegando (llegando)  ·  Particípio/Participio: chegado (llegado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "chego (llego)", "chegei (llegé)", "chegava (llegaba)", "chegarei (llegaré)", "chege (llege)"],
        ["Tu — Tú", "chegas (llegas)", "chegaste (llegaste)", "chegavas (llegabas)", "chegarás (llegarás)", "cheges (lleges)"],
        ["Ele / Você — Él / Usted", "chega (llega)", "chegou (llegó)", "chegava (llegaba)", "chegará (llegará)", "chege (llege)"],
        ["Nós — Nosotros", "chegamos (llegamos)", "chegamos (llegamos)", "chegávamos (llegábamos)", "chegaremos (llegaremos)", "chegemos (llegemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "chegam (llegan)", "chegaram (llegaron)", "chegavam (llegaban)", "chegarão (llegarán)", "chegem (llegen)"]
      ]},
      {title:"59. CHORAR — LLORAR  ·  Regular -AR  ·  Gerúndio/Gerundio: chorando (llorando)  ·  Particípio/Participio: chorado (llorado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "choro (lloro)", "chorei (lloré)", "chorava (lloraba)", "chorarei (lloraré)", "chore (llore)"],
        ["Tu — Tú", "choras (lloras)", "choraste (lloraste)", "choravas (llorabas)", "chorarás (llorarás)", "chores (llores)"],
        ["Ele / Você — Él / Usted", "chora (llora)", "chorou (lloró)", "chorava (lloraba)", "chorará (llorará)", "chore (llore)"],
        ["Nós — Nosotros", "choramos (lloramos)", "choramos (lloramos)", "chorávamos (llorábamos)", "choraremos (lloraremos)", "choremos (lloremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "choram (lloran)", "choraram (lloraron)", "choravam (lloraban)", "chorarão (llorarán)", "chorem (lloren)"]
      ]},
      {title:"60. COBRAR — COBRAR  ·  Regular -AR  ·  Gerúndio/Gerundio: cobrando (cobrando)  ·  Particípio/Participio: cobrado (cobrado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "cobro (cobro)", "cobrei (cobré)", "cobrava (cobraba)", "cobrarei (cobraré)", "cobre (cobre)"],
        ["Tu — Tú", "cobras (cobras)", "cobraste (cobraste)", "cobravas (cobrabas)", "cobrarás (cobrarás)", "cobres (cobres)"],
        ["Ele / Você — Él / Usted", "cobra (cobra)", "cobrou (cobró)", "cobrava (cobraba)", "cobrará (cobrará)", "cobre (cobre)"],
        ["Nós — Nosotros", "cobramos (cobramos)", "cobramos (cobramos)", "cobrávamos (cobrábamos)", "cobraremos (cobraremos)", "cobremos (cobremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "cobram (cobran)", "cobraram (cobraron)", "cobravam (cobraban)", "cobrarão (cobrarán)", "cobrem (cobren)"]
      ]},
      {title:"61. COLOCAR — COLOCAR  ·  Regular -AR  ·  Gerúndio/Gerundio: colocando (colocando)  ·  Particípio/Participio: colocado (colocado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "coloco (coloco)", "colocei (colocé)", "colocava (colocaba)", "colocarei (colocaré)", "coloce (coloce)"],
        ["Tu — Tú", "colocas (colocas)", "colocaste (colocaste)", "colocavas (colocabas)", "colocarás (colocarás)", "coloces (coloces)"],
        ["Ele / Você — Él / Usted", "coloca (coloca)", "colocou (colocó)", "colocava (colocaba)", "colocará (colocará)", "coloce (coloce)"],
        ["Nós — Nosotros", "colocamos (colocamos)", "colocamos (colocamos)", "colocávamos (colocábamos)", "colocaremos (colocaremos)", "colocemos (colocemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "colocam (colocan)", "colocaram (colocaron)", "colocavam (colocaban)", "colocarão (colocarán)", "colocem (colocen)"]
      ]},
      {title:"62. COMEÇAR — COMENZAR  ·  Regular -AR  ·  Gerúndio/Gerundio: começando (comenzando)  ·  Particípio/Participio: começado (comenzado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "começo (comienzo)", "começei (comenzé)", "começava (comenzaba)", "começarei (comenzaré)", "começe (comienze)"],
        ["Tu — Tú", "começas (comienzas)", "começaste (comenzaste)", "começavas (comenzabas)", "começarás (comenzarás)", "começes (comienzes)"],
        ["Ele / Você — Él / Usted", "começa (comienza)", "começou (comenzó)", "começava (comenzaba)", "começará (comenzará)", "começe (comienze)"],
        ["Nós — Nosotros", "começamos (comenzamos)", "começamos (comenzamos)", "começávamos (comenzábamos)", "começaremos (comenzaremos)", "começemos (comenzemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "começam (comienzan)", "começaram (comenzaron)", "começavam (comenzaban)", "começarão (comenzarán)", "começem (comienzen)"]
      ]},
      {title:"64. COMPRAR — COMPRAR  ·  Regular -AR  ·  Gerúndio/Gerundio: comprando (comprando)  ·  Particípio/Participio: comprado (comprado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "compro (compro)", "comprei (compré)", "comprava (compraba)", "comprarei (compraré)", "compre (compre)"],
        ["Tu — Tú", "compras (compras)", "compraste (compraste)", "compravas (comprabas)", "comprarás (comprarás)", "compres (compres)"],
        ["Ele / Você — Él / Usted", "compra (compra)", "comprou (compró)", "comprava (compraba)", "comprará (comprará)", "compre (compre)"],
        ["Nós — Nosotros", "compramos (compramos)", "compramos (compramos)", "comprávamos (comprábamos)", "compraremos (compraremos)", "compremos (compremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "compram (compran)", "compraram (compraron)", "compravam (compraban)", "comprarão (comprarán)", "comprem (compren)"]
      ]},
      {title:"66. CONCORDAR — COINCIDIR/ACORDAR  ·  Regular -AR  ·  Gerúndio/Gerundio: concordando (coincidiendo)  ·  Particípio/Participio: concordado (coincidido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "concordo (coincido)", "concordei (coincidí)", "concordava (coincidía)", "concordarei (coincidiré)", "concorde (coincida)"],
        ["Tu — Tú", "concordas (coincides)", "concordaste (coincidiste)", "concordavas (coincidías)", "concordarás (coincidirás)", "concordes (coincidas)"],
        ["Ele / Você — Él / Usted", "concorda (coincide)", "concordou (coincidió)", "concordava (coincidía)", "concordará (coincidirá)", "concorde (coincida)"],
        ["Nós — Nosotros", "concordamos (coincidimos)", "concordamos (coincidimos)", "concordávamos (coincidíamos)", "concordaremos (coincidiremos)", "concordemos (coincidamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "concordam (coinciden)", "concordaram (coincidieron)", "concordavam (coincidían)", "concordarão (coincidirán)", "concordem (coincidan)"]
      ]},
      {title:"70. CONTAR — CONTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: contando (contando)  ·  Particípio/Participio: contado (contado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "conto (cuento)", "contei (conté)", "contava (contaba)", "contarei (contaré)", "conte (cuente)"],
        ["Tu — Tú", "contas (cuentas)", "contaste (contaste)", "contavas (contabas)", "contarás (contarás)", "contes (cuentes)"],
        ["Ele / Você — Él / Usted", "conta (cuenta)", "contou (contó)", "contava (contaba)", "contará (contará)", "conte (cuente)"],
        ["Nós — Nosotros", "contamos (contamos)", "contamos (contamos)", "contávamos (contábamos)", "contaremos (contaremos)", "contemos (contemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "contam (cuentan)", "contaram (contaron)", "contavam (contaban)", "contarão (contarán)", "contem (cuenten)"]
      ]},
      {title:"71. CONTINUAR — CONTINUAR  ·  Regular -AR  ·  Gerúndio/Gerundio: continuando (continuando)  ·  Particípio/Participio: continuado (continuado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "continuo (continuo)", "continuei (continué)", "continuava (continuaba)", "continuarei (continuaré)", "continue (continue)"],
        ["Tu — Tú", "continuas (continuas)", "continuaste (continuaste)", "continuavas (continuabas)", "continuarás (continuarás)", "continues (continues)"],
        ["Ele / Você — Él / Usted", "continua (continua)", "continuou (continuó)", "continuava (continuaba)", "continuará (continuará)", "continue (continue)"],
        ["Nós — Nosotros", "continuamos (continuamos)", "continuamos (continuamos)", "continuávamos (continuábamos)", "continuaremos (continuaremos)", "continuemos (continuemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "continuam (continuan)", "continuaram (continuaron)", "continuavam (continuaban)", "continuarão (continuarán)", "continuem (continuen)"]
      ]},
      {title:"72. CONVERSAR — CONVERSAR  ·  Regular -AR  ·  Gerúndio/Gerundio: conversando (conversando)  ·  Particípio/Participio: conversado (conversado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "converso (converso)", "conversei (conversé)", "conversava (conversaba)", "conversarei (conversaré)", "converse (converse)"],
        ["Tu — Tú", "conversas (conversas)", "conversaste (conversaste)", "conversavas (conversabas)", "conversarás (conversarás)", "converses (converses)"],
        ["Ele / Você — Él / Usted", "conversa (conversa)", "conversou (conversó)", "conversava (conversaba)", "conversará (conversará)", "converse (converse)"],
        ["Nós — Nosotros", "conversamos (conversamos)", "conversamos (conversamos)", "conversávamos (conversábamos)", "conversaremos (conversaremos)", "conversemos (conversemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "conversam (conversan)", "conversaram (conversaron)", "conversavam (conversaban)", "conversarão (conversarán)", "conversem (conversen)"]
      ]},
      {title:"73. CONVIDAR — INVITAR  ·  Regular -AR  ·  Gerúndio/Gerundio: convidando (invitando)  ·  Particípio/Participio: convidado (invitado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "convido (invito)", "convidei (invité)", "convidava (invitaba)", "convidarei (invitaré)", "convide (invite)"],
        ["Tu — Tú", "convidas (invitas)", "convidaste (invitaste)", "convidavas (invitabas)", "convidarás (invitarás)", "convides (invites)"],
        ["Ele / Você — Él / Usted", "convida (invita)", "convidou (invitó)", "convidava (invitaba)", "convidará (invitará)", "convide (invite)"],
        ["Nós — Nosotros", "convidamos (invitamos)", "convidamos (invitamos)", "convidávamos (invitábamos)", "convidaremos (invitaremos)", "convidemos (invitemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "convidam (invitan)", "convidaram (invitaron)", "convidavam (invitaban)", "convidarão (invitarán)", "convidem (inviten)"]
      ]},
      {title:"75. CORTAR — CORTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: cortando (cortando)  ·  Particípio/Participio: cortado (cortado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "corto (corto)", "cortei (corté)", "cortava (cortaba)", "cortarei (cortaré)", "corte (corte)"],
        ["Tu — Tú", "cortas (cortas)", "cortaste (cortaste)", "cortavas (cortabas)", "cortarás (cortarás)", "cortes (cortes)"],
        ["Ele / Você — Él / Usted", "corta (corta)", "cortou (cortó)", "cortava (cortaba)", "cortará (cortará)", "corte (corte)"],
        ["Nós — Nosotros", "cortamos (cortamos)", "cortamos (cortamos)", "cortávamos (cortábamos)", "cortaremos (cortaremos)", "cortemos (cortemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "cortam (cortan)", "cortaram (cortaron)", "cortavam (cortaban)", "cortarão (cortarán)", "cortem (corten)"]
      ]},
      {title:"76. COZINHAR — COCINAR  ·  Regular -AR  ·  Gerúndio/Gerundio: cozinhando (cocinando)  ·  Particípio/Participio: cozinhado (cocinado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "cozinho (cocino)", "cozinhei (cociné)", "cozinhava (cocinaba)", "cozinharei (cocinaré)", "cozinhe (cocine)"],
        ["Tu — Tú", "cozinhas (cocinas)", "cozinhaste (cocinaste)", "cozinhavas (cocinabas)", "cozinharás (cocinarás)", "cozinhes (cocines)"],
        ["Ele / Você — Él / Usted", "cozinha (cocina)", "cozinhou (cocinó)", "cozinhava (cocinaba)", "cozinhará (cocinará)", "cozinhe (cocine)"],
        ["Nós — Nosotros", "cozinhamos (cocinamos)", "cozinhamos (cocinamos)", "cozinhávamos (cocinábamos)", "cozinharemos (cocinaremos)", "cozinhemos (cocinemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "cozinham (cocinan)", "cozinharam (cocinaron)", "cozinhavam (cocinaban)", "cozinharão (cocinarán)", "cozinhem (cocinen)"]
      ]},
      {title:"77. CRIAR — CREAR  ·  Regular -AR  ·  Gerúndio/Gerundio: criando (creando)  ·  Particípio/Participio: criado (creado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "crio (creo)", "criei (creé)", "criava (creaba)", "criarei (crearé)", "crie (cree)"],
        ["Tu — Tú", "crias (creas)", "criaste (creaste)", "criavas (creabas)", "criarás (crearás)", "cries (crees)"],
        ["Ele / Você — Él / Usted", "cria (crea)", "criou (creó)", "criava (creaba)", "criará (creará)", "crie (cree)"],
        ["Nós — Nosotros", "criamos (creamos)", "criamos (creamos)", "criávamos (creábamos)", "criaremos (crearemos)", "criemos (creemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "criam (crean)", "criaram (crearon)", "criavam (creaban)", "criarão (crearán)", "criem (creen)"]
      ]},
      {title:"78. CUSTAR — COSTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: custando (costando)  ·  Particípio/Participio: custado (costado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "custo (cuesto)", "custei (costé)", "custava (costaba)", "custarei (costaré)", "custe (cueste)"],
        ["Tu — Tú", "custas (cuestas)", "custaste (costaste)", "custavas (costabas)", "custarás (costarás)", "custes (cuestes)"],
        ["Ele / Você — Él / Usted", "custa (cuesta)", "custou (costó)", "custava (costaba)", "custará (costará)", "custe (cueste)"],
        ["Nós — Nosotros", "custamos (costamos)", "custamos (costamos)", "custávamos (costábamos)", "custaremos (costaremos)", "custemos (costemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "custam (cuestan)", "custaram (costaron)", "custavam (costaban)", "custarão (costarán)", "custem (cuesten)"]
      ]},
      {title:"79. DANÇAR — BAILAR  ·  Regular -AR  ·  Gerúndio/Gerundio: dançando (bailando)  ·  Particípio/Participio: dançado (bailado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "danço (bailo)", "dançei (bailé)", "dançava (bailaba)", "dançarei (bailaré)", "dançe (baile)"],
        ["Tu — Tú", "danças (bailas)", "dançaste (bailaste)", "dançavas (bailabas)", "dançarás (bailarás)", "dançes (bailes)"],
        ["Ele / Você — Él / Usted", "dança (baila)", "dançou (bailó)", "dançava (bailaba)", "dançará (bailará)", "dançe (baile)"],
        ["Nós — Nosotros", "dançamos (bailamos)", "dançamos (bailamos)", "dançávamos (bailábamos)", "dançaremos (bailaremos)", "dançemos (bailemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "dançam (bailan)", "dançaram (bailaron)", "dançavam (bailaban)", "dançarão (bailarán)", "dançem (bailen)"]
      ]},
      {title:"81. DEIXAR — DEJAR  ·  Regular -AR  ·  Gerúndio/Gerundio: deixando (dejando)  ·  Particípio/Participio: deixado (dejado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "deixo (dejo)", "deixei (dejé)", "deixava (dejaba)", "deixarei (dejaré)", "deixe (deje)"],
        ["Tu — Tú", "deixas (dejas)", "deixaste (dejaste)", "deixavas (dejabas)", "deixarás (dejarás)", "deixes (dejes)"],
        ["Ele / Você — Él / Usted", "deixa (deja)", "deixou (dejó)", "deixava (dejaba)", "deixará (dejará)", "deixe (deje)"],
        ["Nós — Nosotros", "deixamos (dejamos)", "deixamos (dejamos)", "deixávamos (dejábamos)", "deixaremos (dejaremos)", "deixemos (dejemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "deixam (dejan)", "deixaram (dejaron)", "deixavam (dejaban)", "deixarão (dejarán)", "deixem (dejen)"]
      ]},
      {title:"82. DEMORAR — DEMORAR  ·  Regular -AR  ·  Gerúndio/Gerundio: demorando (demorando)  ·  Particípio/Participio: demorado (demorado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "demoro (demoro)", "demorei (demoré)", "demorava (demoraba)", "demorarei (demoraré)", "demore (demore)"],
        ["Tu — Tú", "demoras (demoras)", "demoraste (demoraste)", "demoravas (demorabas)", "demorarás (demorarás)", "demores (demores)"],
        ["Ele / Você — Él / Usted", "demora (demora)", "demorou (demoró)", "demorava (demoraba)", "demorará (demorará)", "demore (demore)"],
        ["Nós — Nosotros", "demoramos (demoramos)", "demoramos (demoramos)", "demorávamos (demorábamos)", "demoraremos (demoraremos)", "demoremos (demoremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "demoram (demoran)", "demoraram (demoraron)", "demoravam (demoraban)", "demorarão (demorarán)", "demorem (demoren)"]
      ]},
      {title:"83. DEMONSTRAR — DEMOSTRAR  ·  Regular -AR  ·  Gerúndio/Gerundio: demonstrando (demostrando)  ·  Particípio/Participio: demonstrado (demostrado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "demonstro (demostro)", "demonstrei (demostré)", "demonstrava (demostraba)", "demonstrarei (demostraré)", "demonstre (demostre)"],
        ["Tu — Tú", "demonstras (demostras)", "demonstraste (demostraste)", "demonstravas (demostrabas)", "demonstrarás (demostrarás)", "demonstres (demostres)"],
        ["Ele / Você — Él / Usted", "demonstra (demostra)", "demonstrou (demostró)", "demonstrava (demostraba)", "demonstrará (demostrará)", "demonstre (demostre)"],
        ["Nós — Nosotros", "demonstramos (demostramos)", "demonstramos (demostramos)", "demonstrávamos (demostrábamos)", "demonstraremos (demostraremos)", "demonstremos (demostremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "demonstram (demostran)", "demonstraram (demostraron)", "demonstravam (demostraban)", "demonstrarão (demostrarán)", "demonstrem (demostren)"]
      ]},
      {title:"86. DESCULPAR — DISCULPAR  ·  Regular -AR  ·  Gerúndio/Gerundio: desculpando (disculpando)  ·  Particípio/Participio: desculpado (disculpado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "desculpo (disculpo)", "desculpei (disculpé)", "desculpava (disculpaba)", "desculparei (disculparé)", "desculpe (disculpe)"],
        ["Tu — Tú", "desculpas (disculpas)", "desculpaste (disculpaste)", "desculpavas (disculpabas)", "desculparás (disculparás)", "desculpes (disculpes)"],
        ["Ele / Você — Él / Usted", "desculpa (disculpa)", "desculpou (disculpó)", "desculpava (disculpaba)", "desculpará (disculpará)", "desculpe (disculpe)"],
        ["Nós — Nosotros", "desculpamos (disculpamos)", "desculpamos (disculpamos)", "desculpávamos (disculpábamos)", "desculparemos (disculparemos)", "desculpemos (disculpemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "desculpam (disculpan)", "desculparam (disculparon)", "desculpavam (disculpaban)", "desculparão (disculparán)", "desculpem (disculpen)"]
      ]},
      {title:"87. DESEJAR — DESEAR  ·  Regular -AR  ·  Gerúndio/Gerundio: desejando (deseando)  ·  Particípio/Participio: desejado (deseado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "desejo (deseo)", "desejei (deseé)", "desejava (deseaba)", "desejarei (desearé)", "deseje (desee)"],
        ["Tu — Tú", "desejas (deseas)", "desejaste (deseaste)", "desejavas (deseabas)", "desejarás (desearás)", "desejes (desees)"],
        ["Ele / Você — Él / Usted", "deseja (desea)", "desejou (deseó)", "desejava (deseaba)", "desejará (deseará)", "deseje (desee)"],
        ["Nós — Nosotros", "desejamos (deseamos)", "desejamos (deseamos)", "desejávamos (deseábamos)", "desejaremos (desearemos)", "desejemos (deseemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "desejam (desean)", "desejaram (desearon)", "desejavam (deseaban)", "desejarão (desearán)", "desejem (deseen)"]
      ]},
      {title:"88. DESENHAR — DIBUJAR  ·  Regular -AR  ·  Gerúndio/Gerundio: desenhando (dibujando)  ·  Particípio/Participio: desenhado (dibujado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "desenho (dibujo)", "desenhei (dibujé)", "desenhava (dibujaba)", "desenharei (dibujaré)", "desenhe (dibuje)"],
        ["Tu — Tú", "desenhas (dibujas)", "desenhaste (dibujaste)", "desenhavas (dibujabas)", "desenharás (dibujarás)", "desenhes (dibujes)"],
        ["Ele / Você — Él / Usted", "desenha (dibuja)", "desenhou (dibujó)", "desenhava (dibujaba)", "desenhará (dibujará)", "desenhe (dibuje)"],
        ["Nós — Nosotros", "desenhamos (dibujamos)", "desenhamos (dibujamos)", "desenhávamos (dibujábamos)", "desenharemos (dibujaremos)", "desenhemos (dibujemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "desenham (dibujan)", "desenharam (dibujaron)", "desenhavam (dibujaban)", "desenharão (dibujarán)", "desenhem (dibujen)"]
      ]},
      {title:"89. DESPERDIÇAR — DESPERDICIAR  ·  Regular -AR  ·  Gerúndio/Gerundio: desperdiçando (desperdiciando)  ·  Particípio/Participio: desperdiçado (desperdiciado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "desperdiço (desperdicio)", "desperdiçei (desperdicié)", "desperdiçava (desperdiciaba)", "desperdiçarei (desperdiciaré)", "desperdiçe (desperdicie)"],
        ["Tu — Tú", "desperdiças (desperdicias)", "desperdiçaste (desperdiciaste)", "desperdiçavas (desperdiciabas)", "desperdiçarás (desperdiciarás)", "desperdiçes (desperdicies)"],
        ["Ele / Você — Él / Usted", "desperdiça (desperdicia)", "desperdiçou (desperdició)", "desperdiçava (desperdiciaba)", "desperdiçará (desperdiciará)", "desperdiçe (desperdicie)"],
        ["Nós — Nosotros", "desperdiçamos (desperdiciamos)", "desperdiçamos (desperdiciamos)", "desperdiçávamos (desperdiciábamos)", "desperdiçaremos (desperdiciaremos)", "desperdiçemos (desperdiciemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "desperdiçam (desperdician)", "desperdiçaram (desperdiciaron)", "desperdiçavam (desperdiciaban)", "desperdiçarão (desperdiciarán)", "desperdiçem (desperdicien)"]
      ]},
      {title:"90. DESPERTAR — DESPERTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: despertando (despertando)  ·  Particípio/Participio: despertado (despertado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "desperto (desperto)", "despertei (desperté)", "despertava (despertaba)", "despertarei (despertaré)", "desperte (desperte)"],
        ["Tu — Tú", "despertas (despertas)", "despertaste (despertaste)", "despertavas (despertabas)", "despertarás (despertarás)", "despertes (despertes)"],
        ["Ele / Você — Él / Usted", "desperta (desperta)", "despertou (despertó)", "despertava (despertaba)", "despertará (despertará)", "desperte (desperte)"],
        ["Nós — Nosotros", "despertamos (despertamos)", "despertamos (despertamos)", "despertávamos (despertábamos)", "despertaremos (despertaremos)", "despertemos (despertemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "despertam (despertan)", "despertaram (despertaron)", "despertavam (despertaban)", "despertarão (despertarán)", "despertem (desperten)"]
      ]},
      {title:"91. DESLIGAR — APAGAR  ·  Regular -AR  ·  Gerúndio/Gerundio: desligando (apagando)  ·  Particípio/Participio: desligado (apagado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "desligo (apago)", "desligei (apagé)", "desligava (apagaba)", "desligarei (apagaré)", "deslige (apage)"],
        ["Tu — Tú", "desligas (apagas)", "desligaste (apagaste)", "desligavas (apagabas)", "desligarás (apagarás)", "desliges (apages)"],
        ["Ele / Você — Él / Usted", "desliga (apaga)", "desligou (apagó)", "desligava (apagaba)", "desligará (apagará)", "deslige (apage)"],
        ["Nós — Nosotros", "desligamos (apagamos)", "desligamos (apagamos)", "desligávamos (apagábamos)", "desligaremos (apagaremos)", "desligemos (apagemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "desligam (apagan)", "desligaram (apagaron)", "desligavam (apagaban)", "desligarão (apagarán)", "desligem (apagen)"]
      ]},
      {title:"99. DUVIDAR — DUDAR  ·  Regular -AR  ·  Gerúndio/Gerundio: duvidando (dudando)  ·  Particípio/Participio: duvidado (dudado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "duvido (dudo)", "duvidei (dudé)", "duvidava (dudaba)", "duvidarei (dudaré)", "duvide (dude)"],
        ["Tu — Tú", "duvidas (dudas)", "duvidaste (dudaste)", "duvidavas (dudabas)", "duvidarás (dudarás)", "duvides (dudes)"],
        ["Ele / Você — Él / Usted", "duvida (duda)", "duvidou (dudó)", "duvidava (dudaba)", "duvidará (dudará)", "duvide (dude)"],
        ["Nós — Nosotros", "duvidamos (dudamos)", "duvidamos (dudamos)", "duvidávamos (dudábamos)", "duvidaremos (dudaremos)", "duvidemos (dudemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "duvidam (dudan)", "duvidaram (dudaron)", "duvidavam (dudaban)", "duvidarão (dudarán)", "duvidem (duden)"]
      ]},
      {title:"100. ECONOMIZAR — AHORRAR  ·  Regular -AR  ·  Gerúndio/Gerundio: economizando (ahorrando)  ·  Particípio/Participio: economizado (ahorrado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "economizo (ahorro)", "economizei (ahorré)", "economizava (ahorraba)", "economizarei (ahorraré)", "economize (ahorre)"],
        ["Tu — Tú", "economizas (ahorras)", "economizaste (ahorraste)", "economizavas (ahorrabas)", "economizarás (ahorrarás)", "economizes (ahorres)"],
        ["Ele / Você — Él / Usted", "economiza (ahorra)", "economizou (ahorró)", "economizava (ahorraba)", "economizará (ahorrará)", "economize (ahorre)"],
        ["Nós — Nosotros", "economizamos (ahorramos)", "economizamos (ahorramos)", "economizávamos (ahorrábamos)", "economizaremos (ahorraremos)", "economizemos (ahorremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "economizam (ahorran)", "economizaram (ahorraron)", "economizavam (ahorraban)", "economizarão (ahorrarán)", "economizem (ahorren)"]
      ]},
      {title:"101. EMPURRAR — EMPUJAR  ·  Regular -AR  ·  Gerúndio/Gerundio: empurrando (empujando)  ·  Particípio/Participio: empurrado (empujado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "empurro (empujo)", "empurrei (empujé)", "empurrava (empujaba)", "empurrarei (empujaré)", "empurre (empuje)"],
        ["Tu — Tú", "empurras (empujas)", "empurraste (empujaste)", "empurravas (empujabas)", "empurrarás (empujarás)", "empurres (empujes)"],
        ["Ele / Você — Él / Usted", "empurra (empuja)", "empurrou (empujó)", "empurrava (empujaba)", "empurrará (empujará)", "empurre (empuje)"],
        ["Nós — Nosotros", "empurramos (empujamos)", "empurramos (empujamos)", "empurrávamos (empujábamos)", "empurraremos (empujaremos)", "empurremos (empujemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "empurram (empujan)", "empurraram (empujaron)", "empurravam (empujaban)", "empurrarão (empujarán)", "empurrem (empujen)"]
      ]},
      {title:"102. ENCONTRAR — ENCONTRAR  ·  Regular -AR  ·  Gerúndio/Gerundio: encontrando (encontrando)  ·  Particípio/Participio: encontrado (encontrado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "encontro (encuentro)", "encontrei (encontré)", "encontrava (encontraba)", "encontrarei (encontraré)", "encontre (encuentre)"],
        ["Tu — Tú", "encontras (encuentras)", "encontraste (encontraste)", "encontravas (encontrabas)", "encontrarás (encontrarás)", "encontres (encuentres)"],
        ["Ele / Você — Él / Usted", "encontra (encuentra)", "encontrou (encontró)", "encontrava (encontraba)", "encontrará (encontrará)", "encontre (encuentre)"],
        ["Nós — Nosotros", "encontramos (encontramos)", "encontramos (encontramos)", "encontrávamos (encontrábamos)", "encontraremos (encontraremos)", "encontremos (encontremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "encontram (encuentran)", "encontraram (encontraron)", "encontravam (encontraban)", "encontrarão (encontrarán)", "encontrem (encuentren)"]
      ]},
      {title:"103. ENSINAR — ENSEÑAR  ·  Regular -AR  ·  Gerúndio/Gerundio: ensinando (enseñando)  ·  Particípio/Participio: ensinado (enseñado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "ensino (enseño)", "ensinei (enseñé)", "ensinava (enseñaba)", "ensinarei (enseñaré)", "ensine (enseñe)"],
        ["Tu — Tú", "ensinas (enseñas)", "ensinaste (enseñaste)", "ensinavas (enseñabas)", "ensinarás (enseñarás)", "ensines (enseñes)"],
        ["Ele / Você — Él / Usted", "ensina (enseña)", "ensinou (enseñó)", "ensinava (enseñaba)", "ensinará (enseñará)", "ensine (enseñe)"],
        ["Nós — Nosotros", "ensinamos (enseñamos)", "ensinamos (enseñamos)", "ensinávamos (enseñábamos)", "ensinaremos (enseñaremos)", "ensinemos (enseñemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "ensinam (enseñan)", "ensinaram (enseñaron)", "ensinavam (enseñaban)", "ensinarão (enseñarán)", "ensinem (enseñen)"]
      ]},
      {title:"105. ENTRAR — ENTRAR  ·  Regular -AR  ·  Gerúndio/Gerundio: entrando (entrando)  ·  Particípio/Participio: entrado (entrado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "entro (entro)", "entrei (entré)", "entrava (entraba)", "entrarei (entraré)", "entre (entre)"],
        ["Tu — Tú", "entras (entras)", "entraste (entraste)", "entravas (entrabas)", "entrarás (entrarás)", "entres (entres)"],
        ["Ele / Você — Él / Usted", "entra (entra)", "entrou (entró)", "entrava (entraba)", "entrará (entrará)", "entre (entre)"],
        ["Nós — Nosotros", "entramos (entramos)", "entramos (entramos)", "entrávamos (entrábamos)", "entraremos (entraremos)", "entremos (entremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "entram (entran)", "entraram (entraron)", "entravam (entraban)", "entrarão (entrarán)", "entrem (entren)"]
      ]},
      {title:"106. ENTREGAR — ENTREGAR  ·  Regular -AR  ·  Gerúndio/Gerundio: entregando (entregando)  ·  Particípio/Participio: entregado (entregado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "entrego (entrego)", "entregei (entregé)", "entregava (entregaba)", "entregarei (entregaré)", "entrege (entrege)"],
        ["Tu — Tú", "entregas (entregas)", "entregaste (entregaste)", "entregavas (entregabas)", "entregarás (entregarás)", "entreges (entreges)"],
        ["Ele / Você — Él / Usted", "entrega (entrega)", "entregou (entregó)", "entregava (entregaba)", "entregará (entregará)", "entrege (entrege)"],
        ["Nós — Nosotros", "entregamos (entregamos)", "entregamos (entregamos)", "entregávamos (entregábamos)", "entregaremos (entregaremos)", "entregemos (entregemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "entregam (entregan)", "entregaram (entregaron)", "entregavam (entregaban)", "entregarão (entregarán)", "entregem (entregen)"]
      ]},
      {title:"107. ENVIAR — ENVIAR  ·  Regular -AR  ·  Gerúndio/Gerundio: enviando (enviando)  ·  Particípio/Participio: enviado (enviado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "envio (envio)", "enviei (envié)", "enviava (enviaba)", "enviarei (enviaré)", "envie (envie)"],
        ["Tu — Tú", "envias (envias)", "enviaste (enviaste)", "enviavas (enviabas)", "enviarás (enviarás)", "envies (envies)"],
        ["Ele / Você — Él / Usted", "envia (envia)", "enviou (envió)", "enviava (enviaba)", "enviará (enviará)", "envie (envie)"],
        ["Nós — Nosotros", "enviamos (enviamos)", "enviamos (enviamos)", "enviávamos (enviábamos)", "enviaremos (enviaremos)", "enviemos (enviemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "enviam (envian)", "enviaram (enviaron)", "enviavam (enviaban)", "enviarão (enviarán)", "enviem (envien)"]
      ]},
      {title:"110. ESCUTAR — ESCUCHAR  ·  Regular -AR  ·  Gerúndio/Gerundio: escutando (escuchando)  ·  Particípio/Participio: escutado (escuchado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "escuto (escucho)", "escutei (escuché)", "escutava (escuchaba)", "escutarei (escucharé)", "escute (escuche)"],
        ["Tu — Tú", "escutas (escuchas)", "escutaste (escuchaste)", "escutavas (escuchabas)", "escutarás (escucharás)", "escutes (escuches)"],
        ["Ele / Você — Él / Usted", "escuta (escucha)", "escutou (escuchó)", "escutava (escuchaba)", "escutará (escuchará)", "escute (escuche)"],
        ["Nós — Nosotros", "escutamos (escuchamos)", "escutamos (escuchamos)", "escutávamos (escuchábamos)", "escutaremos (escucharemos)", "escutemos (escuchemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "escutam (escuchan)", "escutaram (escucharon)", "escutavam (escuchaban)", "escutarão (escucharán)", "escutem (escuchen)"]
      ]},
      {title:"111. ESPERAR — ESPERAR  ·  Regular -AR  ·  Gerúndio/Gerundio: esperando (esperando)  ·  Particípio/Participio: esperado (esperado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "espero (espero)", "esperei (esperé)", "esperava (esperaba)", "esperarei (esperaré)", "espere (espere)"],
        ["Tu — Tú", "esperas (esperas)", "esperaste (esperaste)", "esperavas (esperabas)", "esperarás (esperarás)", "esperes (esperes)"],
        ["Ele / Você — Él / Usted", "espera (espera)", "esperou (esperó)", "esperava (esperaba)", "esperará (esperará)", "espere (espere)"],
        ["Nós — Nosotros", "esperamos (esperamos)", "esperamos (esperamos)", "esperávamos (esperábamos)", "esperaremos (esperaremos)", "esperemos (esperemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "esperam (esperan)", "esperaram (esperaron)", "esperavam (esperaban)", "esperarão (esperarán)", "esperem (esperen)"]
      ]},
      {title:"113. ESTUDAR — ESTUDIAR  ·  Regular -AR  ·  Gerúndio/Gerundio: estudando (estudiando)  ·  Particípio/Participio: estudado (estudiado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "estudo (estudio)", "estudei (estudié)", "estudava (estudiaba)", "estudarei (estudiaré)", "estude (estudie)"],
        ["Tu — Tú", "estudas (estudias)", "estudaste (estudiaste)", "estudavas (estudiabas)", "estudarás (estudiarás)", "estudes (estudies)"],
        ["Ele / Você — Él / Usted", "estuda (estudia)", "estudou (estudió)", "estudava (estudiaba)", "estudará (estudiará)", "estude (estudie)"],
        ["Nós — Nosotros", "estudamos (estudiamos)", "estudamos (estudiamos)", "estudávamos (estudiábamos)", "estudaremos (estudiaremos)", "estudemos (estudiemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "estudam (estudian)", "estudaram (estudiaron)", "estudavam (estudiaban)", "estudarão (estudiarán)", "estudem (estudien)"]
      ]}
      ],
      notes: [
        "A maioria dos verbos do espanhol termina em -AR e segue o mesmo padrão de conjugação — domine um, domine quase todos.",
        "Formato de cada célula: forma em português (forma em español) — leia sempre comparando os dois idiomas.",
        "Este módulo é só de consulta rápida — não tem exercícios nem prova. Use-o como dicionário de conjugação sempre que precisar, durante qualquer nível do curso."
      ],
      exercises: []
    },
    {
      id: "verb-ar2", order: 3, title: "Regulares -AR (parte 2)", subtitle: "65 verbos regulares terminados em -AR",
      vocabulary: [],
      grammar: [
      {title:"114. EVITAR — EVITAR  ·  Regular -AR  ·  Gerúndio/Gerundio: evitando (evitando)  ·  Particípio/Participio: evitado (evitado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "evito (evito)", "evitei (evité)", "evitava (evitaba)", "evitarei (evitaré)", "evite (evite)"],
        ["Tu — Tú", "evitas (evitas)", "evitaste (evitaste)", "evitavas (evitabas)", "evitarás (evitarás)", "evites (evites)"],
        ["Ele / Você — Él / Usted", "evita (evita)", "evitou (evitó)", "evitava (evitaba)", "evitará (evitará)", "evite (evite)"],
        ["Nós — Nosotros", "evitamos (evitamos)", "evitamos (evitamos)", "evitávamos (evitábamos)", "evitaremos (evitaremos)", "evitemos (evitemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "evitam (evitan)", "evitaram (evitaron)", "evitavam (evitaban)", "evitarão (evitarán)", "evitem (eviten)"]
      ]},
      {title:"115. EXPLICAR — EXPLICAR  ·  Regular -AR  ·  Gerúndio/Gerundio: explicando (explicando)  ·  Particípio/Participio: explicado (explicado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "explico (explico)", "explicei (explicé)", "explicava (explicaba)", "explicarei (explicaré)", "explice (explice)"],
        ["Tu — Tú", "explicas (explicas)", "explicaste (explicaste)", "explicavas (explicabas)", "explicarás (explicarás)", "explices (explices)"],
        ["Ele / Você — Él / Usted", "explica (explica)", "explicou (explicó)", "explicava (explicaba)", "explicará (explicará)", "explice (explice)"],
        ["Nós — Nosotros", "explicamos (explicamos)", "explicamos (explicamos)", "explicávamos (explicábamos)", "explicaremos (explicaremos)", "explicemos (explicemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "explicam (explican)", "explicaram (explicaron)", "explicavam (explicaban)", "explicarão (explicarán)", "explicem (explicen)"]
      ]},
      {title:"116. FALAR — HABLAR  ·  Regular -AR  ·  Gerúndio/Gerundio: falando (hablando)  ·  Particípio/Participio: falado (hablado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "falo (hablo)", "falei (hablé)", "falava (hablaba)", "falarei (hablaré)", "fale (hable)"],
        ["Tu — Tú", "falas (hablas)", "falaste (hablaste)", "falavas (hablabas)", "falarás (hablarás)", "fales (hables)"],
        ["Ele / Você — Él / Usted", "fala (habla)", "falou (habló)", "falava (hablaba)", "falará (hablará)", "fale (hable)"],
        ["Nós — Nosotros", "falamos (hablamos)", "falamos (hablamos)", "falávamos (hablábamos)", "falaremos (hablaremos)", "falemos (hablemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "falam (hablan)", "falaram (hablaron)", "falavam (hablaban)", "falarão (hablarán)", "falem (hablen)"]
      ]},
      {title:"117. FALTAR — FALTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: faltando (faltando)  ·  Particípio/Participio: faltado (faltado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "falto (falto)", "faltei (falté)", "faltava (faltaba)", "faltarei (faltaré)", "falte (falte)"],
        ["Tu — Tú", "faltas (faltas)", "faltaste (faltaste)", "faltavas (faltabas)", "faltarás (faltarás)", "faltes (faltes)"],
        ["Ele / Você — Él / Usted", "falta (falta)", "faltou (faltó)", "faltava (faltaba)", "faltará (faltará)", "falte (falte)"],
        ["Nós — Nosotros", "faltamos (faltamos)", "faltamos (faltamos)", "faltávamos (faltábamos)", "faltaremos (faltaremos)", "faltemos (faltemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "faltam (faltan)", "faltaram (faltaron)", "faltavam (faltaban)", "faltarão (faltarán)", "faltem (falten)"]
      ]},
      {title:"118. FECHAR — CERRAR  ·  Regular -AR  ·  Gerúndio/Gerundio: fechando (cerrando)  ·  Particípio/Participio: fechado (cerrado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "fecho (cierro)", "fechei (cerré)", "fechava (cerraba)", "fecharei (cerraré)", "feche (cierre)"],
        ["Tu — Tú", "fechas (cierras)", "fechaste (cerraste)", "fechavas (cerrabas)", "fecharás (cerrarás)", "feches (cierres)"],
        ["Ele / Você — Él / Usted", "fecha (cierra)", "fechou (cerró)", "fechava (cerraba)", "fechará (cerrará)", "feche (cierre)"],
        ["Nós — Nosotros", "fechamos (cerramos)", "fechamos (cerramos)", "fechávamos (cerrábamos)", "fecharemos (cerraremos)", "fechemos (cerremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "fecham (cierran)", "fecharam (cerraron)", "fechavam (cerraban)", "fecharão (cerrarán)", "fechem (cierren)"]
      ]},
      {title:"120. FUMAR — FUMAR  ·  Regular -AR  ·  Gerúndio/Gerundio: fumando (fumando)  ·  Particípio/Participio: fumado (fumado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "fumo (fumo)", "fumei (fumé)", "fumava (fumaba)", "fumarei (fumaré)", "fume (fume)"],
        ["Tu — Tú", "fumas (fumas)", "fumaste (fumaste)", "fumavas (fumabas)", "fumarás (fumarás)", "fumes (fumes)"],
        ["Ele / Você — Él / Usted", "fuma (fuma)", "fumou (fumó)", "fumava (fumaba)", "fumará (fumará)", "fume (fume)"],
        ["Nós — Nosotros", "fumamos (fumamos)", "fumamos (fumamos)", "fumávamos (fumábamos)", "fumaremos (fumaremos)", "fumemos (fumemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "fumam (fuman)", "fumaram (fumaron)", "fumavam (fumaban)", "fumarão (fumarán)", "fumem (fumen)"]
      ]},
      {title:"121. GANHAR — GANAR  ·  Regular -AR  ·  Gerúndio/Gerundio: ganhando (ganando)  ·  Particípio/Participio: ganhado (ganado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "ganho (gano)", "ganhei (gané)", "ganhava (ganaba)", "ganharei (ganaré)", "ganhe (gane)"],
        ["Tu — Tú", "ganhas (ganas)", "ganhaste (ganaste)", "ganhavas (ganabas)", "ganharás (ganarás)", "ganhes (ganes)"],
        ["Ele / Você — Él / Usted", "ganha (gana)", "ganhou (ganó)", "ganhava (ganaba)", "ganhará (ganará)", "ganhe (gane)"],
        ["Nós — Nosotros", "ganhamos (ganamos)", "ganhamos (ganamos)", "ganhávamos (ganábamos)", "ganharemos (ganaremos)", "ganhemos (ganemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "ganham (ganan)", "ganharam (ganaron)", "ganhavam (ganaban)", "ganharão (ganarán)", "ganhem (ganen)"]
      ]},
      {title:"122. GOSTAR — GUSTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: gostando (gustando)  ·  Particípio/Participio: gostado (gustado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "gosto (gusto)", "gostei (gusté)", "gostava (gustaba)", "gostarei (gustaré)", "goste (guste)"],
        ["Tu — Tú", "gostas (gustas)", "gostaste (gustaste)", "gostavas (gustabas)", "gostarás (gustarás)", "gostes (gustes)"],
        ["Ele / Você — Él / Usted", "gosta (gusta)", "gostou (gustó)", "gostava (gustaba)", "gostará (gustará)", "goste (guste)"],
        ["Nós — Nosotros", "gostamos (gustamos)", "gostamos (gustamos)", "gostávamos (gustábamos)", "gostaremos (gustaremos)", "gostemos (gustemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "gostam (gustan)", "gostaram (gustaron)", "gostavam (gustaban)", "gostarão (gustarán)", "gostem (gusten)"]
      ]},
      {title:"123. GUARDAR — GUARDAR  ·  Regular -AR  ·  Gerúndio/Gerundio: guardando (guardando)  ·  Particípio/Participio: guardado (guardado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "guardo (guardo)", "guardei (guardé)", "guardava (guardaba)", "guardarei (guardaré)", "guarde (guarde)"],
        ["Tu — Tú", "guardas (guardas)", "guardaste (guardaste)", "guardavas (guardabas)", "guardarás (guardarás)", "guardes (guardes)"],
        ["Ele / Você — Él / Usted", "guarda (guarda)", "guardou (guardó)", "guardava (guardaba)", "guardará (guardará)", "guarde (guarde)"],
        ["Nós — Nosotros", "guardamos (guardamos)", "guardamos (guardamos)", "guardávamos (guardábamos)", "guardaremos (guardaremos)", "guardemos (guardemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "guardam (guardan)", "guardaram (guardaron)", "guardavam (guardaban)", "guardarão (guardarán)", "guardem (guarden)"]
      ]},
      {title:"124. IMAGINAR — IMAGINAR  ·  Regular -AR  ·  Gerúndio/Gerundio: imaginando (imaginando)  ·  Particípio/Participio: imaginado (imaginado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "imagino (imagino)", "imaginei (imaginé)", "imaginava (imaginaba)", "imaginarei (imaginaré)", "imagine (imagine)"],
        ["Tu — Tú", "imaginas (imaginas)", "imaginaste (imaginaste)", "imaginavas (imaginabas)", "imaginarás (imaginarás)", "imagines (imagines)"],
        ["Ele / Você — Él / Usted", "imagina (imagina)", "imaginou (imaginó)", "imaginava (imaginaba)", "imaginará (imaginará)", "imagine (imagine)"],
        ["Nós — Nosotros", "imaginamos (imaginamos)", "imaginamos (imaginamos)", "imaginávamos (imaginábamos)", "imaginaremos (imaginaremos)", "imaginemos (imaginemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "imaginam (imaginan)", "imaginaram (imaginaron)", "imaginavam (imaginaban)", "imaginarão (imaginarán)", "imaginem (imaginen)"]
      ]},
      {title:"126. IMPORTAR — IMPORTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: importando (importando)  ·  Particípio/Participio: importado (importado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "importo (importo)", "importei (importé)", "importava (importaba)", "importarei (importaré)", "importe (importe)"],
        ["Tu — Tú", "importas (importas)", "importaste (importaste)", "importavas (importabas)", "importarás (importarás)", "importes (importes)"],
        ["Ele / Você — Él / Usted", "importa (importa)", "importou (importó)", "importava (importaba)", "importará (importará)", "importe (importe)"],
        ["Nós — Nosotros", "importamos (importamos)", "importamos (importamos)", "importávamos (importábamos)", "importaremos (importaremos)", "importemos (importemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "importam (importan)", "importaram (importaron)", "importavam (importaban)", "importarão (importarán)", "importem (importen)"]
      ]},
      {title:"127. INFORMAR — INFORMAR  ·  Regular -AR  ·  Gerúndio/Gerundio: informando (informando)  ·  Particípio/Participio: informado (informado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "informo (informo)", "informei (informé)", "informava (informaba)", "informarei (informaré)", "informe (informe)"],
        ["Tu — Tú", "informas (informas)", "informaste (informaste)", "informavas (informabas)", "informarás (informarás)", "informes (informes)"],
        ["Ele / Você — Él / Usted", "informa (informa)", "informou (informó)", "informava (informaba)", "informará (informará)", "informe (informe)"],
        ["Nós — Nosotros", "informamos (informamos)", "informamos (informamos)", "informávamos (informábamos)", "informaremos (informaremos)", "informemos (informemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "informam (informan)", "informaram (informaron)", "informavam (informaban)", "informarão (informarán)", "informem (informen)"]
      ]},
      {title:"128. INICIAR — INICIAR  ·  Regular -AR  ·  Gerúndio/Gerundio: iniciando (iniciando)  ·  Particípio/Participio: iniciado (iniciado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "inicio (inicio)", "iniciei (inicié)", "iniciava (iniciaba)", "iniciarei (iniciaré)", "inicie (inicie)"],
        ["Tu — Tú", "inicias (inicias)", "iniciaste (iniciaste)", "iniciavas (iniciabas)", "iniciarás (iniciarás)", "inicies (inicies)"],
        ["Ele / Você — Él / Usted", "inicia (inicia)", "iniciou (inició)", "iniciava (iniciaba)", "iniciará (iniciará)", "inicie (inicie)"],
        ["Nós — Nosotros", "iniciamos (iniciamos)", "iniciamos (iniciamos)", "iniciávamos (iniciábamos)", "iniciaremos (iniciaremos)", "iniciemos (iniciemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "iniciam (inician)", "iniciaram (iniciaron)", "iniciavam (iniciaban)", "iniciarão (iniciarán)", "iniciem (inicien)"]
      ]},
      {title:"130. INTERESSAR — INTERESAR  ·  Regular -AR  ·  Gerúndio/Gerundio: interessando (interesando)  ·  Particípio/Participio: interessado (interesado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "interesso (intereso)", "interessei (interesé)", "interessava (interesaba)", "interessarei (interesaré)", "interesse (interese)"],
        ["Tu — Tú", "interessas (interesas)", "interessaste (interesaste)", "interessavas (interesabas)", "interessarás (interesarás)", "interesses (intereses)"],
        ["Ele / Você — Él / Usted", "interessa (interesa)", "interessou (interesó)", "interessava (interesaba)", "interessará (interesará)", "interesse (interese)"],
        ["Nós — Nosotros", "interessamos (interesamos)", "interessamos (interesamos)", "interessávamos (interesábamos)", "interessaremos (interesaremos)", "interessemos (interesemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "interessam (interesan)", "interessaram (interesaron)", "interessavam (interesaban)", "interessarão (interesarán)", "interessem (interesen)"]
      ]},
      {title:"131. JOGAR — JUGAR  ·  Regular -AR  ·  Gerúndio/Gerundio: jogando (jugando)  ·  Particípio/Participio: jogado (jugado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "jogo (jugo)", "jogei (jugé)", "jogava (jugaba)", "jogarei (jugaré)", "joge (juge)"],
        ["Tu — Tú", "jogas (jugas)", "jogaste (jugaste)", "jogavas (jugabas)", "jogarás (jugarás)", "joges (juges)"],
        ["Ele / Você — Él / Usted", "joga (juga)", "jogou (jugó)", "jogava (jugaba)", "jogará (jugará)", "joge (juge)"],
        ["Nós — Nosotros", "jogamos (jugamos)", "jogamos (jugamos)", "jogávamos (jugábamos)", "jogaremos (jugaremos)", "jogemos (jugemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "jogam (jugan)", "jogaram (jugaron)", "jogavam (jugaban)", "jogarão (jugarán)", "jogem (jugen)"]
      ]},
      {title:"132. JUNTAR — JUNTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: juntando (juntando)  ·  Particípio/Participio: juntado (juntado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "junto (junto)", "juntei (junté)", "juntava (juntaba)", "juntarei (juntaré)", "junte (junte)"],
        ["Tu — Tú", "juntas (juntas)", "juntaste (juntaste)", "juntavas (juntabas)", "juntarás (juntarás)", "juntes (juntes)"],
        ["Ele / Você — Él / Usted", "junta (junta)", "juntou (juntó)", "juntava (juntaba)", "juntará (juntará)", "junte (junte)"],
        ["Nós — Nosotros", "juntamos (juntamos)", "juntamos (juntamos)", "juntávamos (juntábamos)", "juntaremos (juntaremos)", "juntemos (juntemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "juntam (juntan)", "juntaram (juntaron)", "juntavam (juntaban)", "juntarão (juntarán)", "juntem (junten)"]
      ]},
      {title:"133. JURAR — JURAR  ·  Regular -AR  ·  Gerúndio/Gerundio: jurando (jurando)  ·  Particípio/Participio: jurado (jurado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "juro (juro)", "jurei (juré)", "jurava (juraba)", "jurarei (juraré)", "jure (jure)"],
        ["Tu — Tú", "juras (juras)", "juraste (juraste)", "juravas (jurabas)", "jurarás (jurarás)", "jures (jures)"],
        ["Ele / Você — Él / Usted", "jura (jura)", "jurou (juró)", "jurava (juraba)", "jurará (jurará)", "jure (jure)"],
        ["Nós — Nosotros", "juramos (juramos)", "juramos (juramos)", "jurávamos (jurábamos)", "juraremos (juraremos)", "juremos (juremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "juram (juran)", "juraram (juraron)", "juravam (juraban)", "jurarão (jurarán)", "jurem (juren)"]
      ]},
      {title:"134. LEMBRAR — RECORDAR  ·  Regular -AR  ·  Gerúndio/Gerundio: lembrando (recordando)  ·  Particípio/Participio: lembrado (recordado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "lembro (recuerdo)", "lembrei (recordé)", "lembrava (recordaba)", "lembrarei (recordaré)", "lembre (recuerde)"],
        ["Tu — Tú", "lembras (recuerdas)", "lembraste (recordaste)", "lembravas (recordabas)", "lembrarás (recordarás)", "lembres (recuerdes)"],
        ["Ele / Você — Él / Usted", "lembra (recuerda)", "lembrou (recordó)", "lembrava (recordaba)", "lembrará (recordará)", "lembre (recuerde)"],
        ["Nós — Nosotros", "lembramos (recordamos)", "lembramos (recordamos)", "lembrávamos (recordábamos)", "lembraremos (recordaremos)", "lembremos (recordemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "lembram (recuerdan)", "lembraram (recordaron)", "lembravam (recordaban)", "lembrarão (recordarán)", "lembrem (recuerden)"]
      ]},
      {title:"136. LIMPAR — LIMPIAR  ·  Regular -AR  ·  Gerúndio/Gerundio: limpando (limpiando)  ·  Particípio/Participio: limpado (limpiado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "limpo (limpio)", "limpei (limpié)", "limpava (limpiaba)", "limparei (limpiaré)", "limpe (limpie)"],
        ["Tu — Tú", "limpas (limpias)", "limpaste (limpiaste)", "limpavas (limpiabas)", "limparás (limpiarás)", "limpes (limpies)"],
        ["Ele / Você — Él / Usted", "limpa (limpia)", "limpou (limpió)", "limpava (limpiaba)", "limpará (limpiará)", "limpe (limpie)"],
        ["Nós — Nosotros", "limpamos (limpiamos)", "limpamos (limpiamos)", "limpávamos (limpiábamos)", "limparemos (limpiaremos)", "limpemos (limpiemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "limpam (limpian)", "limparam (limpiaron)", "limpavam (limpiaban)", "limparão (limpiarán)", "limpem (limpien)"]
      ]},
      {title:"137. LIGAR — LLAMAR/CONECTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: ligando (llamando)  ·  Particípio/Participio: ligado (llamado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "ligo (llamo)", "ligei (llamé)", "ligava (llamaba)", "ligarei (llamaré)", "lige (llame)"],
        ["Tu — Tú", "ligas (llamas)", "ligaste (llamaste)", "ligavas (llamabas)", "ligarás (llamarás)", "liges (llames)"],
        ["Ele / Você — Él / Usted", "liga (llama)", "ligou (llamó)", "ligava (llamaba)", "ligará (llamará)", "lige (llame)"],
        ["Nós — Nosotros", "ligamos (llamamos)", "ligamos (llamamos)", "ligávamos (llamábamos)", "ligaremos (llamaremos)", "ligemos (llamemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "ligam (llaman)", "ligaram (llamaron)", "ligavam (llamaban)", "ligarão (llamarán)", "ligem (llamen)"]
      ]},
      {title:"138. LEVAR — LLEVAR  ·  Regular -AR  ·  Gerúndio/Gerundio: levando (llevando)  ·  Particípio/Participio: levado (llevado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "levo (llevo)", "levei (llevé)", "levava (llevaba)", "levarei (llevaré)", "leve (lleve)"],
        ["Tu — Tú", "levas (llevas)", "levaste (llevaste)", "levavas (llevabas)", "levarás (llevarás)", "leves (lleves)"],
        ["Ele / Você — Él / Usted", "leva (lleva)", "levou (llevó)", "levava (llevaba)", "levará (llevará)", "leve (lleve)"],
        ["Nós — Nosotros", "levamos (llevamos)", "levamos (llevamos)", "levávamos (llevábamos)", "levaremos (llevaremos)", "levemos (llevemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "levam (llevan)", "levaram (llevaron)", "levavam (llevaban)", "levarão (llevarán)", "levem (lleven)"]
      ]},
      {title:"139. MANDAR — MANDAR  ·  Regular -AR  ·  Gerúndio/Gerundio: mandando (mandando)  ·  Particípio/Participio: mandado (mandado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "mando (mando)", "mandei (mandé)", "mandava (mandaba)", "mandarei (mandaré)", "mande (mande)"],
        ["Tu — Tú", "mandas (mandas)", "mandaste (mandaste)", "mandavas (mandabas)", "mandarás (mandarás)", "mandes (mandes)"],
        ["Ele / Você — Él / Usted", "manda (manda)", "mandou (mandó)", "mandava (mandaba)", "mandará (mandará)", "mande (mande)"],
        ["Nós — Nosotros", "mandamos (mandamos)", "mandamos (mandamos)", "mandávamos (mandábamos)", "mandaremos (mandaremos)", "mandemos (mandemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "mandam (mandan)", "mandaram (mandaron)", "mandavam (mandaban)", "mandarão (mandarán)", "mandem (manden)"]
      ]},
      {title:"140. MARCHAR — MARCHAR  ·  Regular -AR  ·  Gerúndio/Gerundio: marchando (marchando)  ·  Particípio/Participio: marchado (marchado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "marcho (marcho)", "marchei (marché)", "marchava (marchaba)", "marcharei (marcharé)", "marche (marche)"],
        ["Tu — Tú", "marchas (marchas)", "marchaste (marchaste)", "marchavas (marchabas)", "marcharás (marcharás)", "marches (marches)"],
        ["Ele / Você — Él / Usted", "marcha (marcha)", "marchou (marchó)", "marchava (marchaba)", "marchará (marchará)", "marche (marche)"],
        ["Nós — Nosotros", "marchamos (marchamos)", "marchamos (marchamos)", "marchávamos (marchábamos)", "marcharemos (marcharemos)", "marchemos (marchemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "marcham (marchan)", "marcharam (marcharon)", "marchavam (marchaban)", "marcharão (marcharán)", "marchem (marchen)"]
      ]},
      {title:"141. MARCAR — MARCAR  ·  Regular -AR  ·  Gerúndio/Gerundio: marcando (marcando)  ·  Particípio/Participio: marcado (marcado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "marco (marco)", "marcei (marcé)", "marcava (marcaba)", "marcarei (marcaré)", "marce (marce)"],
        ["Tu — Tú", "marcas (marcas)", "marcaste (marcaste)", "marcavas (marcabas)", "marcarás (marcarás)", "marces (marces)"],
        ["Ele / Você — Él / Usted", "marca (marca)", "marcou (marcó)", "marcava (marcaba)", "marcará (marcará)", "marce (marce)"],
        ["Nós — Nosotros", "marcamos (marcamos)", "marcamos (marcamos)", "marcávamos (marcábamos)", "marcaremos (marcaremos)", "marcemos (marcemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "marcam (marcan)", "marcaram (marcaron)", "marcavam (marcaban)", "marcarão (marcarán)", "marcem (marcen)"]
      ]},
      {title:"142. MELHORAR — MEJORAR  ·  Regular -AR  ·  Gerúndio/Gerundio: melhorando (mejorando)  ·  Particípio/Participio: melhorado (mejorado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "melhoro (mejoro)", "melhorei (mejoré)", "melhorava (mejoraba)", "melhorarei (mejoraré)", "melhore (mejore)"],
        ["Tu — Tú", "melhoras (mejoras)", "melhoraste (mejoraste)", "melhoravas (mejorabas)", "melhorarás (mejorarás)", "melhores (mejores)"],
        ["Ele / Você — Él / Usted", "melhora (mejora)", "melhorou (mejoró)", "melhorava (mejoraba)", "melhorará (mejorará)", "melhore (mejore)"],
        ["Nós — Nosotros", "melhoramos (mejoramos)", "melhoramos (mejoramos)", "melhorávamos (mejorábamos)", "melhoraremos (mejoraremos)", "melhoremos (mejoremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "melhoram (mejoran)", "melhoraram (mejoraron)", "melhoravam (mejoraban)", "melhorarão (mejorarán)", "melhorem (mejoren)"]
      ]},
      {title:"145. MUDAR — CAMBIAR  ·  Regular -AR  ·  Gerúndio/Gerundio: mudando (cambiando)  ·  Particípio/Participio: mudado (cambiado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "mudo (cambio)", "mudei (cambié)", "mudava (cambiaba)", "mudarei (cambiaré)", "mude (cambie)"],
        ["Tu — Tú", "mudas (cambias)", "mudaste (cambiaste)", "mudavas (cambiabas)", "mudarás (cambiarás)", "mudes (cambies)"],
        ["Ele / Você — Él / Usted", "muda (cambia)", "mudou (cambió)", "mudava (cambiaba)", "mudará (cambiará)", "mude (cambie)"],
        ["Nós — Nosotros", "mudamos (cambiamos)", "mudamos (cambiamos)", "mudávamos (cambiábamos)", "mudaremos (cambiaremos)", "mudemos (cambiemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "mudam (cambian)", "mudaram (cambiaron)", "mudavam (cambiaban)", "mudarão (cambiarán)", "mudem (cambien)"]
      ]},
      {title:"146. MORAR — VIVIR/RESIDIR  ·  Regular -AR  ·  Gerúndio/Gerundio: morando (viviendo)  ·  Particípio/Participio: morado (vivido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "moro (vivo)", "morei (viví)", "morava (vivía)", "morarei (viviré)", "more (viva)"],
        ["Tu — Tú", "moras (vives)", "moraste (viviste)", "moravas (vivías)", "morarás (vivirás)", "mores (vivas)"],
        ["Ele / Você — Él / Usted", "mora (vive)", "morou (vivió)", "morava (vivía)", "morará (vivirá)", "more (viva)"],
        ["Nós — Nosotros", "moramos (vivimos)", "moramos (vivimos)", "morávamos (vivíamos)", "moraremos (viviremos)", "moremos (vivamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "moram (viven)", "moraram (vivieron)", "moravam (vivían)", "morarão (vivirán)", "morem (vivan)"]
      ]},
      {title:"148. MOSTRAR — MOSTRAR  ·  Regular -AR  ·  Gerúndio/Gerundio: mostrando (mostrando)  ·  Particípio/Participio: mostrado (mostrado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "mostro (mostro)", "mostrei (mostré)", "mostrava (mostraba)", "mostrarei (mostraré)", "mostre (mostre)"],
        ["Tu — Tú", "mostras (mostras)", "mostraste (mostraste)", "mostravas (mostrabas)", "mostrarás (mostrarás)", "mostres (mostres)"],
        ["Ele / Você — Él / Usted", "mostra (mostra)", "mostrou (mostró)", "mostrava (mostraba)", "mostrará (mostrará)", "mostre (mostre)"],
        ["Nós — Nosotros", "mostramos (mostramos)", "mostramos (mostramos)", "mostrávamos (mostrábamos)", "mostraremos (mostraremos)", "mostremos (mostremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "mostram (mostran)", "mostraram (mostraron)", "mostravam (mostraban)", "mostrarão (mostrarán)", "mostrem (mostren)"]
      ]},
      {title:"151. NECESSITAR — NECESITAR  ·  Regular -AR  ·  Gerúndio/Gerundio: necessitando (necesitando)  ·  Particípio/Participio: necessitado (necesitado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "necessito (necesito)", "necessitei (necesité)", "necessitava (necesitaba)", "necessitarei (necesitaré)", "necessite (necesite)"],
        ["Tu — Tú", "necessitas (necesitas)", "necessitaste (necesitaste)", "necessitavas (necesitabas)", "necessitarás (necesitarás)", "necessites (necesites)"],
        ["Ele / Você — Él / Usted", "necessita (necesita)", "necessitou (necesitó)", "necessitava (necesitaba)", "necessitará (necesitará)", "necessite (necesite)"],
        ["Nós — Nosotros", "necessitamos (necesitamos)", "necessitamos (necesitamos)", "necessitávamos (necesitábamos)", "necessitaremos (necesitaremos)", "necessitemos (necesitemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "necessitam (necesitan)", "necessitaram (necesitaron)", "necessitavam (necesitaban)", "necessitarão (necesitarán)", "necessitem (necesiten)"]
      ]},
      {title:"152. NEGAR — NEGAR  ·  Regular -AR  ·  Gerúndio/Gerundio: negando (negando)  ·  Particípio/Participio: negado (negado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "nego (nego)", "negei (negé)", "negava (negaba)", "negarei (negaré)", "nege (nege)"],
        ["Tu — Tú", "negas (negas)", "negaste (negaste)", "negavas (negabas)", "negarás (negarás)", "neges (neges)"],
        ["Ele / Você — Él / Usted", "nega (nega)", "negou (negó)", "negava (negaba)", "negará (negará)", "nege (nege)"],
        ["Nós — Nosotros", "negamos (negamos)", "negamos (negamos)", "negávamos (negábamos)", "negaremos (negaremos)", "negemos (negemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "negam (negan)", "negaram (negaron)", "negavam (negaban)", "negarão (negarán)", "negem (negen)"]
      ]},
      {title:"153. NOTAR — NOTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: notando (notando)  ·  Particípio/Participio: notado (notado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "noto (noto)", "notei (noté)", "notava (notaba)", "notarei (notaré)", "note (note)"],
        ["Tu — Tú", "notas (notas)", "notaste (notaste)", "notavas (notabas)", "notarás (notarás)", "notes (notes)"],
        ["Ele / Você — Él / Usted", "nota (nota)", "notou (notó)", "notava (notaba)", "notará (notará)", "note (note)"],
        ["Nós — Nosotros", "notamos (notamos)", "notamos (notamos)", "notávamos (notábamos)", "notaremos (notaremos)", "notemos (notemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "notam (notan)", "notaram (notaron)", "notavam (notaban)", "notarão (notarán)", "notem (noten)"]
      ]},
      {title:"154. OBSERVAR — OBSERVAR  ·  Regular -AR  ·  Gerúndio/Gerundio: observando (observando)  ·  Particípio/Participio: observado (observado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "observo (observo)", "observei (observé)", "observava (observaba)", "observarei (observaré)", "observe (observe)"],
        ["Tu — Tú", "observas (observas)", "observaste (observaste)", "observavas (observabas)", "observarás (observarás)", "observes (observes)"],
        ["Ele / Você — Él / Usted", "observa (observa)", "observou (observó)", "observava (observaba)", "observará (observará)", "observe (observe)"],
        ["Nós — Nosotros", "observamos (observamos)", "observamos (observamos)", "observávamos (observábamos)", "observaremos (observaremos)", "observemos (observemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "observam (observan)", "observaram (observaron)", "observavam (observaban)", "observarão (observarán)", "observem (observen)"]
      ]},
      {title:"155. OLHAR — MIRAR  ·  Regular -AR  ·  Gerúndio/Gerundio: olhando (mirando)  ·  Particípio/Participio: olhado (mirado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "olho (miro)", "olhei (miré)", "olhava (miraba)", "olharei (miraré)", "olhe (mire)"],
        ["Tu — Tú", "olhas (miras)", "olhaste (miraste)", "olhavas (mirabas)", "olharás (mirarás)", "olhes (mires)"],
        ["Ele / Você — Él / Usted", "olha (mira)", "olhou (miró)", "olhava (miraba)", "olhará (mirará)", "olhe (mire)"],
        ["Nós — Nosotros", "olhamos (miramos)", "olhamos (miramos)", "olhávamos (mirábamos)", "olharemos (miraremos)", "olhemos (miremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "olham (miran)", "olharam (miraron)", "olhavam (miraban)", "olharão (mirarán)", "olhem (miren)"]
      ]},
      {title:"156. ORGANIZAR — ORGANIZAR  ·  Regular -AR  ·  Gerúndio/Gerundio: organizando (organizando)  ·  Particípio/Participio: organizado (organizado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "organizo (organizo)", "organizei (organizé)", "organizava (organizaba)", "organizarei (organizaré)", "organize (organize)"],
        ["Tu — Tú", "organizas (organizas)", "organizaste (organizaste)", "organizavas (organizabas)", "organizarás (organizarás)", "organizes (organizes)"],
        ["Ele / Você — Él / Usted", "organiza (organiza)", "organizou (organizó)", "organizava (organizaba)", "organizará (organizará)", "organize (organize)"],
        ["Nós — Nosotros", "organizamos (organizamos)", "organizamos (organizamos)", "organizávamos (organizábamos)", "organizaremos (organizaremos)", "organizemos (organizemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "organizam (organizan)", "organizaram (organizaron)", "organizavam (organizaban)", "organizarão (organizarán)", "organizem (organizen)"]
      ]},
      {title:"157. PAGAR — PAGAR  ·  Regular -AR  ·  Gerúndio/Gerundio: pagando (pagando)  ·  Particípio/Participio: pagado (pagado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "pago (pago)", "pagei (pagé)", "pagava (pagaba)", "pagarei (pagaré)", "page (page)"],
        ["Tu — Tú", "pagas (pagas)", "pagaste (pagaste)", "pagavas (pagabas)", "pagarás (pagarás)", "pages (pages)"],
        ["Ele / Você — Él / Usted", "paga (paga)", "pagou (pagó)", "pagava (pagaba)", "pagará (pagará)", "page (page)"],
        ["Nós — Nosotros", "pagamos (pagamos)", "pagamos (pagamos)", "pagávamos (pagábamos)", "pagaremos (pagaremos)", "pagemos (pagemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "pagam (pagan)", "pagaram (pagaron)", "pagavam (pagaban)", "pagarão (pagarán)", "pagem (pagen)"]
      ]},
      {title:"158. PARAR — PARAR  ·  Regular -AR  ·  Gerúndio/Gerundio: parando (parando)  ·  Particípio/Participio: parado (parado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "paro (paro)", "parei (paré)", "parava (paraba)", "pararei (pararé)", "pare (pare)"],
        ["Tu — Tú", "paras (paras)", "paraste (paraste)", "paravas (parabas)", "pararás (pararás)", "pares (pares)"],
        ["Ele / Você — Él / Usted", "para (para)", "parou (paró)", "parava (paraba)", "parará (parará)", "pare (pare)"],
        ["Nós — Nosotros", "paramos (paramos)", "paramos (paramos)", "parávamos (parábamos)", "pararemos (pararemos)", "paremos (paremos)"],
        ["Eles / Vocês — Ellos / Ustedes", "param (paran)", "pararam (pararon)", "paravam (paraban)", "pararão (pararán)", "parem (paren)"]
      ]},
      {title:"161. PASSAR — PASAR  ·  Regular -AR  ·  Gerúndio/Gerundio: passando (pasando)  ·  Particípio/Participio: passado (pasado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "passo (paso)", "passei (pasé)", "passava (pasaba)", "passarei (pasaré)", "passe (pase)"],
        ["Tu — Tú", "passas (pasas)", "passaste (pasaste)", "passavas (pasabas)", "passarás (pasarás)", "passes (pases)"],
        ["Ele / Você — Él / Usted", "passa (pasa)", "passou (pasó)", "passava (pasaba)", "passará (pasará)", "passe (pase)"],
        ["Nós — Nosotros", "passamos (pasamos)", "passamos (pasamos)", "passávamos (pasábamos)", "passaremos (pasaremos)", "passemos (pasemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "passam (pasan)", "passaram (pasaron)", "passavam (pasaban)", "passarão (pasarán)", "passem (pasen)"]
      ]},
      {title:"162. PENSAR — PENSAR  ·  Regular -AR  ·  Gerúndio/Gerundio: pensando (pensando)  ·  Particípio/Participio: pensado (pensado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "penso (pienso)", "pensei (pensé)", "pensava (pensaba)", "pensarei (pensaré)", "pense (piense)"],
        ["Tu — Tú", "pensas (piensas)", "pensaste (pensaste)", "pensavas (pensabas)", "pensarás (pensarás)", "penses (pienses)"],
        ["Ele / Você — Él / Usted", "pensa (piensa)", "pensou (pensó)", "pensava (pensaba)", "pensará (pensará)", "pense (piense)"],
        ["Nós — Nosotros", "pensamos (pensamos)", "pensamos (pensamos)", "pensávamos (pensábamos)", "pensaremos (pensaremos)", "pensemos (pensemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "pensam (piensan)", "pensaram (pensaron)", "pensavam (pensaban)", "pensarão (pensarán)", "pensem (piensen)"]
      ]},
      {title:"165. PERDOAR — PERDONAR  ·  Regular -AR  ·  Gerúndio/Gerundio: perdoando (perdonando)  ·  Particípio/Participio: perdoado (perdonado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "perdoo (perdono)", "perdoei (perdoné)", "perdoava (perdonaba)", "perdoarei (perdonaré)", "perdoe (perdone)"],
        ["Tu — Tú", "perdoas (perdonas)", "perdoaste (perdonaste)", "perdoavas (perdonabas)", "perdoarás (perdonarás)", "perdoes (perdones)"],
        ["Ele / Você — Él / Usted", "perdoa (perdona)", "perdoou (perdonó)", "perdoava (perdonaba)", "perdoará (perdonará)", "perdoe (perdone)"],
        ["Nós — Nosotros", "perdoamos (perdonamos)", "perdoamos (perdonamos)", "perdoávamos (perdonábamos)", "perdoaremos (perdonaremos)", "perdoemos (perdonemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "perdoam (perdonan)", "perdoaram (perdonaron)", "perdoavam (perdonaban)", "perdoarão (perdonarán)", "perdoem (perdonen)"]
      ]},
      {title:"166. PERGUNTAR — PREGUNTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: perguntando (preguntando)  ·  Particípio/Participio: perguntado (preguntado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "pergunto (pregunto)", "perguntei (pregunté)", "perguntava (preguntaba)", "perguntarei (preguntaré)", "pergunte (pregunte)"],
        ["Tu — Tú", "perguntas (preguntas)", "perguntaste (preguntaste)", "perguntavas (preguntabas)", "perguntarás (preguntarás)", "perguntes (preguntes)"],
        ["Ele / Você — Él / Usted", "pergunta (pregunta)", "perguntou (preguntó)", "perguntava (preguntaba)", "perguntará (preguntará)", "pergunte (pregunte)"],
        ["Nós — Nosotros", "perguntamos (preguntamos)", "perguntamos (preguntamos)", "perguntávamos (preguntábamos)", "perguntaremos (preguntaremos)", "perguntemos (preguntemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "perguntam (preguntan)", "perguntaram (preguntaron)", "perguntavam (preguntaban)", "perguntarão (preguntarán)", "perguntem (pregunten)"]
      ]},
      {title:"168. PLANEJAR — PLANEAR  ·  Regular -AR  ·  Gerúndio/Gerundio: planejando (planeando)  ·  Particípio/Participio: planejado (planeado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "planejo (planeo)", "planejei (planeé)", "planejava (planeaba)", "planejarei (planearé)", "planeje (planee)"],
        ["Tu — Tú", "planejas (planeas)", "planejaste (planeaste)", "planejavas (planeabas)", "planejarás (planearás)", "planejes (planees)"],
        ["Ele / Você — Él / Usted", "planeja (planea)", "planejou (planeó)", "planejava (planeaba)", "planejará (planeará)", "planeje (planee)"],
        ["Nós — Nosotros", "planejamos (planeamos)", "planejamos (planeamos)", "planejávamos (planeábamos)", "planejaremos (planearemos)", "planejemos (planeemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "planejam (planean)", "planejaram (planearon)", "planejavam (planeaban)", "planejarão (planearán)", "planejem (planeen)"]
      ]},
      {title:"169. PRECISAR — NECESITAR  ·  Regular -AR  ·  Gerúndio/Gerundio: precisando (necesitando)  ·  Particípio/Participio: precisado (necesitado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "preciso (necesito)", "precisei (necesité)", "precisava (necesitaba)", "precisarei (necesitaré)", "precise (necesite)"],
        ["Tu — Tú", "precisas (necesitas)", "precisaste (necesitaste)", "precisavas (necesitabas)", "precisarás (necesitarás)", "precises (necesites)"],
        ["Ele / Você — Él / Usted", "precisa (necesita)", "precisou (necesitó)", "precisava (necesitaba)", "precisará (necesitará)", "precise (necesite)"],
        ["Nós — Nosotros", "precisamos (necesitamos)", "precisamos (necesitamos)", "precisávamos (necesitábamos)", "precisaremos (necesitaremos)", "precisemos (necesitemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "precisam (necesitan)", "precisaram (necesitaron)", "precisavam (necesitaban)", "precisarão (necesitarán)", "precisem (necesiten)"]
      ]},
      {title:"171. PREPARAR — PREPARAR  ·  Regular -AR  ·  Gerúndio/Gerundio: preparando (preparando)  ·  Particípio/Participio: preparado (preparado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "preparo (preparo)", "preparei (preparé)", "preparava (preparaba)", "prepararei (prepararé)", "prepare (prepare)"],
        ["Tu — Tú", "preparas (preparas)", "preparaste (preparaste)", "preparavas (preparabas)", "prepararás (prepararás)", "prepares (prepares)"],
        ["Ele / Você — Él / Usted", "prepara (prepara)", "preparou (preparó)", "preparava (preparaba)", "preparará (preparará)", "prepare (prepare)"],
        ["Nós — Nosotros", "preparamos (preparamos)", "preparamos (preparamos)", "preparávamos (preparábamos)", "prepararemos (prepararemos)", "preparemos (preparemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "preparam (preparan)", "prepararam (prepararon)", "preparavam (preparaban)", "prepararão (prepararán)", "preparem (preparen)"]
      ]},
      {title:"172. PROCURAR — BUSCAR  ·  Regular -AR  ·  Gerúndio/Gerundio: procurando (buscando)  ·  Particípio/Participio: procurado (buscado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "procuro (busco)", "procurei (buscé)", "procurava (buscaba)", "procurarei (buscaré)", "procure (busce)"],
        ["Tu — Tú", "procuras (buscas)", "procuraste (buscaste)", "procuravas (buscabas)", "procurarás (buscarás)", "procures (busces)"],
        ["Ele / Você — Él / Usted", "procura (busca)", "procurou (buscó)", "procurava (buscaba)", "procurará (buscará)", "procure (busce)"],
        ["Nós — Nosotros", "procuramos (buscamos)", "procuramos (buscamos)", "procurávamos (buscábamos)", "procuraremos (buscaremos)", "procuremos (buscemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "procuram (buscan)", "procuraram (buscaron)", "procuravam (buscaban)", "procurarão (buscarán)", "procurem (buscen)"]
      ]},
      {title:"175. PUXAR — JALAR  ·  Regular -AR  ·  Gerúndio/Gerundio: puxando (jalando)  ·  Particípio/Participio: puxado (jalado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "puxo (jalo)", "puxei (jalé)", "puxava (jalaba)", "puxarei (jalaré)", "puxe (jale)"],
        ["Tu — Tú", "puxas (jalas)", "puxaste (jalaste)", "puxavas (jalabas)", "puxarás (jalarás)", "puxes (jales)"],
        ["Ele / Você — Él / Usted", "puxa (jala)", "puxou (jaló)", "puxava (jalaba)", "puxará (jalará)", "puxe (jale)"],
        ["Nós — Nosotros", "puxamos (jalamos)", "puxamos (jalamos)", "puxávamos (jalábamos)", "puxaremos (jalaremos)", "puxemos (jalemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "puxam (jalan)", "puxaram (jalaron)", "puxavam (jalaban)", "puxarão (jalarán)", "puxem (jalen)"]
      ]},
      {title:"176. QUEBRAR — ROMPER  ·  Regular -AR  ·  Gerúndio/Gerundio: quebrando (rompiendo)  ·  Particípio/Participio: quebrado (roto)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "quebro (rompo)", "quebrei (rompí)", "quebrava (rompía)", "quebrarei (romperé)", "quebre (rompa)"],
        ["Tu — Tú", "quebras (rompes)", "quebraste (rompiste)", "quebravas (rompías)", "quebrarás (romperás)", "quebres (rompas)"],
        ["Ele / Você — Él / Usted", "quebra (rompe)", "quebrou (rompió)", "quebrava (rompía)", "quebrará (romperá)", "quebre (rompa)"],
        ["Nós — Nosotros", "quebramos (rompemos)", "quebramos (rompimos)", "quebrávamos (rompíamos)", "quebraremos (romperemos)", "quebremos (rompamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "quebram (rompen)", "quebraram (rompieron)", "quebravam (rompían)", "quebrarão (romperán)", "quebrem (rompan)"]
      ]},
      {title:"177. RECLAMAR — RECLAMAR  ·  Regular -AR  ·  Gerúndio/Gerundio: reclamando (reclamando)  ·  Particípio/Participio: reclamado (reclamado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "reclamo (reclamo)", "reclamei (reclamé)", "reclamava (reclamaba)", "reclamarei (reclamaré)", "reclame (reclame)"],
        ["Tu — Tú", "reclamas (reclamas)", "reclamaste (reclamaste)", "reclamavas (reclamabas)", "reclamarás (reclamarás)", "reclames (reclames)"],
        ["Ele / Você — Él / Usted", "reclama (reclama)", "reclamou (reclamó)", "reclamava (reclamaba)", "reclamará (reclamará)", "reclame (reclame)"],
        ["Nós — Nosotros", "reclamamos (reclamamos)", "reclamamos (reclamamos)", "reclamávamos (reclamábamos)", "reclamaremos (reclamaremos)", "reclamemos (reclamemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "reclamam (reclaman)", "reclamaram (reclamaron)", "reclamavam (reclamaban)", "reclamarão (reclamarán)", "reclamem (reclamen)"]
      ]},
      {title:"178. RECOMENDAR — RECOMENDAR  ·  Regular -AR  ·  Gerúndio/Gerundio: recomendando (recomendando)  ·  Particípio/Participio: recomendado (recomendado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "recomendo (recomendo)", "recomendei (recomendé)", "recomendava (recomendaba)", "recomendarei (recomendaré)", "recomende (recomende)"],
        ["Tu — Tú", "recomendas (recomendas)", "recomendaste (recomendaste)", "recomendavas (recomendabas)", "recomendarás (recomendarás)", "recomendes (recomendes)"],
        ["Ele / Você — Él / Usted", "recomenda (recomenda)", "recomendou (recomendó)", "recomendava (recomendaba)", "recomendará (recomendará)", "recomende (recomende)"],
        ["Nós — Nosotros", "recomendamos (recomendamos)", "recomendamos (recomendamos)", "recomendávamos (recomendábamos)", "recomendaremos (recomendaremos)", "recomendemos (recomendemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "recomendam (recomendan)", "recomendaram (recomendaron)", "recomendavam (recomendaban)", "recomendarão (recomendarán)", "recomendem (recomenden)"]
      ]},
      {title:"181. RECORDAR — RECORDAR  ·  Regular -AR  ·  Gerúndio/Gerundio: recordando (recordando)  ·  Particípio/Participio: recordado (recordado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "recordo (recuerdo)", "recordei (recordé)", "recordava (recordaba)", "recordarei (recordaré)", "recorde (recuerde)"],
        ["Tu — Tú", "recordas (recuerdas)", "recordaste (recordaste)", "recordavas (recordabas)", "recordarás (recordarás)", "recordes (recuerdes)"],
        ["Ele / Você — Él / Usted", "recorda (recuerda)", "recordou (recordó)", "recordava (recordaba)", "recordará (recordará)", "recorde (recuerde)"],
        ["Nós — Nosotros", "recordamos (recordamos)", "recordamos (recordamos)", "recordávamos (recordábamos)", "recordaremos (recordaremos)", "recordemos (recordemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "recordam (recuerdan)", "recordaram (recordaron)", "recordavam (recordaban)", "recordarão (recordarán)", "recordem (recuerden)"]
      ]},
      {title:"182. RECUSAR — RECHAZAR  ·  Regular -AR  ·  Gerúndio/Gerundio: recusando (rechazando)  ·  Particípio/Participio: recusado (rechazado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "recuso (rechazo)", "recusei (rechazé)", "recusava (rechazaba)", "recusarei (rechazaré)", "recuse (rechaze)"],
        ["Tu — Tú", "recusas (rechazas)", "recusaste (rechazaste)", "recusavas (rechazabas)", "recusarás (rechazarás)", "recuses (rechazes)"],
        ["Ele / Você — Él / Usted", "recusa (rechaza)", "recusou (rechazó)", "recusava (rechazaba)", "recusará (rechazará)", "recuse (rechaze)"],
        ["Nós — Nosotros", "recusamos (rechazamos)", "recusamos (rechazamos)", "recusávamos (rechazábamos)", "recusaremos (rechazaremos)", "recusemos (rechazemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "recusam (rechazan)", "recusaram (rechazaron)", "recusavam (rechazaban)", "recusarão (rechazarán)", "recusem (rechazen)"]
      ]},
      {title:"185. ROUBAR — ROBAR  ·  Regular -AR  ·  Gerúndio/Gerundio: roubando (robando)  ·  Particípio/Participio: roubado (robado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "roubo (robo)", "roubei (robé)", "roubava (robaba)", "roubarei (robaré)", "roube (robe)"],
        ["Tu — Tú", "roubas (robas)", "roubaste (robaste)", "roubavas (robabas)", "roubarás (robarás)", "roubes (robes)"],
        ["Ele / Você — Él / Usted", "rouba (roba)", "roubou (robó)", "roubava (robaba)", "roubará (robará)", "roube (robe)"],
        ["Nós — Nosotros", "roubamos (robamos)", "roubamos (robamos)", "roubávamos (robábamos)", "roubaremos (robaremos)", "roubemos (robemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "roubam (roban)", "roubaram (robaron)", "roubavam (robaban)", "roubarão (robarán)", "roubem (roben)"]
      ]},
      {title:"186. SALVAR — SALVAR  ·  Regular -AR  ·  Gerúndio/Gerundio: salvando (salvando)  ·  Particípio/Participio: salvado (salvado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "salvo (salvo)", "salvei (salvé)", "salvava (salvaba)", "salvarei (salvaré)", "salve (salve)"],
        ["Tu — Tú", "salvas (salvas)", "salvaste (salvaste)", "salvavas (salvabas)", "salvarás (salvarás)", "salves (salves)"],
        ["Ele / Você — Él / Usted", "salva (salva)", "salvou (salvó)", "salvava (salvaba)", "salvará (salvará)", "salve (salve)"],
        ["Nós — Nosotros", "salvamos (salvamos)", "salvamos (salvamos)", "salvávamos (salvábamos)", "salvaremos (salvaremos)", "salvemos (salvemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "salvam (salvan)", "salvaram (salvaron)", "salvavam (salvaban)", "salvarão (salvarán)", "salvem (salven)"]
      ]},
      {title:"188. SENTAR — SENTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: sentando (sentando)  ·  Particípio/Participio: sentado (sentado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "sento (sento)", "sentei (senté)", "sentava (sentaba)", "sentarei (sentaré)", "sente (sente)"],
        ["Tu — Tú", "sentas (sentas)", "sentaste (sentaste)", "sentavas (sentabas)", "sentarás (sentarás)", "sentes (sentes)"],
        ["Ele / Você — Él / Usted", "senta (senta)", "sentou (sentó)", "sentava (sentaba)", "sentará (sentará)", "sente (sente)"],
        ["Nós — Nosotros", "sentamos (sentamos)", "sentamos (sentamos)", "sentávamos (sentábamos)", "sentaremos (sentaremos)", "sentemos (sentemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "sentam (sentan)", "sentaram (sentaron)", "sentavam (sentaban)", "sentarão (sentarán)", "sentem (senten)"]
      ]},
      {title:"189. SEPARAR — SEPARAR  ·  Regular -AR  ·  Gerúndio/Gerundio: separando (separando)  ·  Particípio/Participio: separado (separado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "separo (separo)", "separei (separé)", "separava (separaba)", "separarei (separaré)", "separe (separe)"],
        ["Tu — Tú", "separas (separas)", "separaste (separaste)", "separavas (separabas)", "separarás (separarás)", "separes (separes)"],
        ["Ele / Você — Él / Usted", "separa (separa)", "separou (separó)", "separava (separaba)", "separará (separará)", "separe (separe)"],
        ["Nós — Nosotros", "separamos (separamos)", "separamos (separamos)", "separávamos (separábamos)", "separaremos (separaremos)", "separemos (separemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "separam (separan)", "separaram (separaron)", "separavam (separaban)", "separarão (separarán)", "separem (separen)"]
      ]},
      {title:"191. SIGNIFICAR — SIGNIFICAR  ·  Regular -AR  ·  Gerúndio/Gerundio: significando (significando)  ·  Particípio/Participio: significado (significado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "significo (significo)", "significei (significé)", "significava (significaba)", "significarei (significaré)", "significe (significe)"],
        ["Tu — Tú", "significas (significas)", "significaste (significaste)", "significavas (significabas)", "significarás (significarás)", "significes (significes)"],
        ["Ele / Você — Él / Usted", "significa (significa)", "significou (significó)", "significava (significaba)", "significará (significará)", "significe (significe)"],
        ["Nós — Nosotros", "significamos (significamos)", "significamos (significamos)", "significávamos (significábamos)", "significaremos (significaremos)", "significemos (significemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "significam (significan)", "significaram (significaron)", "significavam (significaban)", "significarão (significarán)", "significem (significen)"]
      ]},
      {title:"196. SUPORTAR — SOPORTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: suportando (soportando)  ·  Particípio/Participio: suportado (soportado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "suporto (soporto)", "suportei (soporté)", "suportava (soportaba)", "suportarei (soportaré)", "suporte (soporte)"],
        ["Tu — Tú", "suportas (soportas)", "suportaste (soportaste)", "suportavas (soportabas)", "suportarás (soportarás)", "suportes (soportes)"],
        ["Ele / Você — Él / Usted", "suporta (soporta)", "suportou (soportó)", "suportava (soportaba)", "suportará (soportará)", "suporte (soporte)"],
        ["Nós — Nosotros", "suportamos (soportamos)", "suportamos (soportamos)", "suportávamos (soportábamos)", "suportaremos (soportaremos)", "suportemos (soportemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "suportam (soportan)", "suportaram (soportaron)", "suportavam (soportaban)", "suportarão (soportarán)", "suportem (soporten)"]
      ]},
      {title:"198. TENTAR — INTENTAR  ·  Regular -AR  ·  Gerúndio/Gerundio: tentando (intentando)  ·  Particípio/Participio: tentado (intentado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "tento (intento)", "tentei (intenté)", "tentava (intentaba)", "tentarei (intentaré)", "tente (intente)"],
        ["Tu — Tú", "tentas (intentas)", "tentaste (intentaste)", "tentavas (intentabas)", "tentarás (intentarás)", "tentes (intentes)"],
        ["Ele / Você — Él / Usted", "tenta (intenta)", "tentou (intentó)", "tentava (intentaba)", "tentará (intentará)", "tente (intente)"],
        ["Nós — Nosotros", "tentamos (intentamos)", "tentamos (intentamos)", "tentávamos (intentábamos)", "tentaremos (intentaremos)", "tentemos (intentemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "tentam (intentan)", "tentaram (intentaron)", "tentavam (intentaban)", "tentarão (intentarán)", "tentem (intenten)"]
      ]},
      {title:"199. TIRAR — QUITAR/SACAR  ·  Regular -AR  ·  Gerúndio/Gerundio: tirando (quitando)  ·  Particípio/Participio: tirado (quitado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "tiro (quito)", "tirei (quité)", "tirava (quitaba)", "tirarei (quitaré)", "tire (quite)"],
        ["Tu — Tú", "tiras (quitas)", "tiraste (quitaste)", "tiravas (quitabas)", "tirarás (quitarás)", "tires (quites)"],
        ["Ele / Você — Él / Usted", "tira (quita)", "tirou (quitó)", "tirava (quitaba)", "tirará (quitará)", "tire (quite)"],
        ["Nós — Nosotros", "tiramos (quitamos)", "tiramos (quitamos)", "tirávamos (quitábamos)", "tiraremos (quitaremos)", "tiremos (quitemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "tiram (quitan)", "tiraram (quitaron)", "tiravam (quitaban)", "tirarão (quitarán)", "tirem (quiten)"]
      ]},
      {title:"200. TOMAR — TOMAR  ·  Regular -AR  ·  Gerúndio/Gerundio: tomando (tomando)  ·  Particípio/Participio: tomado (tomado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "tomo (tomo)", "tomei (tomé)", "tomava (tomaba)", "tomarei (tomaré)", "tome (tome)"],
        ["Tu — Tú", "tomas (tomas)", "tomaste (tomaste)", "tomavas (tomabas)", "tomarás (tomarás)", "tomes (tomes)"],
        ["Ele / Você — Él / Usted", "toma (toma)", "tomou (tomó)", "tomava (tomaba)", "tomará (tomará)", "tome (tome)"],
        ["Nós — Nosotros", "tomamos (tomamos)", "tomamos (tomamos)", "tomávamos (tomábamos)", "tomaremos (tomaremos)", "tomemos (tomemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "tomam (toman)", "tomaram (tomaron)", "tomavam (tomaban)", "tomarão (tomarán)", "tomem (tomen)"]
      ]},
      {title:"201. TRABALHAR — TRABAJAR  ·  Regular -AR  ·  Gerúndio/Gerundio: trabalhando (trabajando)  ·  Particípio/Participio: trabalhado (trabajado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "trabalho (trabajo)", "trabalhei (trabajé)", "trabalhava (trabajaba)", "trabalharei (trabajaré)", "trabalhe (trabaje)"],
        ["Tu — Tú", "trabalhas (trabajas)", "trabalhaste (trabajaste)", "trabalhavas (trabajabas)", "trabalharás (trabajarás)", "trabalhes (trabajes)"],
        ["Ele / Você — Él / Usted", "trabalha (trabaja)", "trabalhou (trabajó)", "trabalhava (trabajaba)", "trabalhará (trabajará)", "trabalhe (trabaje)"],
        ["Nós — Nosotros", "trabalhamos (trabajamos)", "trabalhamos (trabajamos)", "trabalhávamos (trabajábamos)", "trabalharemos (trabajaremos)", "trabalhemos (trabajemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "trabalham (trabajan)", "trabalharam (trabajaron)", "trabalhavam (trabajaban)", "trabalharão (trabajarán)", "trabalhem (trabajen)"]
      ]},
      {title:"203. TROCAR — CAMBIAR  ·  Regular -AR  ·  Gerúndio/Gerundio: trocando (cambiando)  ·  Particípio/Participio: trocado (cambiado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "troco (cambio)", "trocei (cambié)", "trocava (cambiaba)", "trocarei (cambiaré)", "troce (cambie)"],
        ["Tu — Tú", "trocas (cambias)", "trocaste (cambiaste)", "trocavas (cambiabas)", "trocarás (cambiarás)", "troces (cambies)"],
        ["Ele / Você — Él / Usted", "troca (cambia)", "trocou (cambió)", "trocava (cambiaba)", "trocará (cambiará)", "troce (cambie)"],
        ["Nós — Nosotros", "trocamos (cambiamos)", "trocamos (cambiamos)", "trocávamos (cambiábamos)", "trocaremos (cambiaremos)", "trocemos (cambiemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "trocam (cambian)", "trocaram (cambiaron)", "trocavam (cambiaban)", "trocarão (cambiarán)", "trocem (cambien)"]
      ]},
      {title:"204. USAR — USAR  ·  Regular -AR  ·  Gerúndio/Gerundio: usando (usando)  ·  Particípio/Participio: usado (usado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "uso (uso)", "usei (usé)", "usava (usaba)", "usarei (usaré)", "use (use)"],
        ["Tu — Tú", "usas (usas)", "usaste (usaste)", "usavas (usabas)", "usarás (usarás)", "uses (uses)"],
        ["Ele / Você — Él / Usted", "usa (usa)", "usou (usó)", "usava (usaba)", "usará (usará)", "use (use)"],
        ["Nós — Nosotros", "usamos (usamos)", "usamos (usamos)", "usávamos (usábamos)", "usaremos (usaremos)", "usemos (usemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "usam (usan)", "usaram (usaron)", "usavam (usaban)", "usarão (usarán)", "usem (usen)"]
      ]},
      {title:"208. VIAJAR — VIAJAR  ·  Regular -AR  ·  Gerúndio/Gerundio: viajando (viajando)  ·  Particípio/Participio: viajado (viajado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "viajo (viajo)", "viajei (viajé)", "viajava (viajaba)", "viajarei (viajaré)", "viaje (viaje)"],
        ["Tu — Tú", "viajas (viajas)", "viajaste (viajaste)", "viajavas (viajabas)", "viajarás (viajarás)", "viajes (viajes)"],
        ["Ele / Você — Él / Usted", "viaja (viaja)", "viajou (viajó)", "viajava (viajaba)", "viajará (viajará)", "viaje (viaje)"],
        ["Nós — Nosotros", "viajamos (viajamos)", "viajamos (viajamos)", "viajávamos (viajábamos)", "viajaremos (viajaremos)", "viajemos (viajemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "viajam (viajan)", "viajaram (viajaron)", "viajavam (viajaban)", "viajarão (viajarán)", "viajem (viajen)"]
      ]},
      {title:"210. VOAR — VOLAR  ·  Regular -AR  ·  Gerúndio/Gerundio: voando (volando)  ·  Particípio/Participio: voado (volado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "voo (volo)", "voei (volé)", "voava (volaba)", "voarei (volaré)", "voe (vole)"],
        ["Tu — Tú", "voas (volas)", "voaste (volaste)", "voavas (volabas)", "voarás (volarás)", "voes (voles)"],
        ["Ele / Você — Él / Usted", "voa (vola)", "voou (voló)", "voava (volaba)", "voará (volará)", "voe (vole)"],
        ["Nós — Nosotros", "voamos (volamos)", "voamos (volamos)", "voávamos (volábamos)", "voaremos (volaremos)", "voemos (volemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "voam (volan)", "voaram (volaron)", "voavam (volaban)", "voarão (volarán)", "voem (volen)"]
      ]},
      {title:"211. VOLTAR — VOLVER  ·  Regular -AR  ·  Gerúndio/Gerundio: voltando (volviendo)  ·  Particípio/Participio: voltado (vuelto)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "volto (vuelvo)", "voltei (volví)", "voltava (volvía)", "voltarei (volveré)", "volte (vuelva)"],
        ["Tu — Tú", "voltas (vuelves)", "voltaste (volviste)", "voltavas (volvías)", "voltarás (volverás)", "voltes (vuelvas)"],
        ["Ele / Você — Él / Usted", "volta (vuelve)", "voltou (volvió)", "voltava (volvía)", "voltará (volverá)", "volte (vuelva)"],
        ["Nós — Nosotros", "voltamos (volvemos)", "voltamos (volvimos)", "voltávamos (volvíamos)", "voltaremos (volveremos)", "voltemos (volvamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "voltam (vuelven)", "voltaram (volvieron)", "voltavam (volvían)", "voltarão (volverán)", "voltem (vuelvan)"]
      ]}
      ],
      notes: [
        "Continuação da lista de verbos -AR, em ordem alfabética.",
        "Formato de cada célula: forma em português (forma em español) — leia sempre comparando os dois idiomas.",
        "Este módulo é só de consulta rápida — não tem exercícios nem prova. Use-o como dicionário de conjugação sempre que precisar, durante qualquer nível do curso."
      ],
      exercises: []
    },
    {
      id: "verb-er", order: 4, title: "Regulares -ER", subtitle: "34 verbos regulares terminados em -ER",
      vocabulary: [],
      grammar: [
      {title:"25. ACONTECER — SUCEDER  ·  Regular -ER  ·  Gerúndio/Gerundio: acontecendo (sucediendo)  ·  Particípio/Participio: acontecido (sucedido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "aconteco (sucedo)", "aconteci (sucedí)", "acontecia (sucedía)", "acontecerei (sucederé)", "aconteca (suceda)"],
        ["Tu — Tú", "aconteces (sucedes)", "aconteceste (sucediste)", "acontecias (sucedías)", "acontecerás (sucederás)", "acontecas (sucedas)"],
        ["Ele / Você — Él / Usted", "acontece (sucede)", "aconteceu (sucedió)", "acontecia (sucedía)", "acontecerá (sucederá)", "aconteca (suceda)"],
        ["Nós — Nosotros", "acontecemos (sucedemos)", "acontecemos (sucedimos)", "acontecíamos (sucedíamos)", "aconteceremos (sucederemos)", "acontecamos (sucedamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "acontecem (suceden)", "aconteceram (sucedieron)", "aconteciam (sucedían)", "acontecerão (sucederán)", "acontecam (sucedan)"]
      ]},
      {title:"30. AGRADECER — AGRADECER  ·  Regular -ER  ·  Gerúndio/Gerundio: agradecendo (agradeciendo)  ·  Particípio/Participio: agradecido (agradecido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "agradeco (agradeco)", "agradeci (agradecí)", "agradecia (agradecía)", "agradecerei (agradeceré)", "agradeca (agradeca)"],
        ["Tu — Tú", "agradeces (agradeces)", "agradeceste (agradeciste)", "agradecias (agradecías)", "agradecerás (agradecerás)", "agradecas (agradecas)"],
        ["Ele / Você — Él / Usted", "agradece (agradece)", "agradeceu (agradeció)", "agradecia (agradecía)", "agradecerá (agradecerá)", "agradeca (agradeca)"],
        ["Nós — Nosotros", "agradecemos (agradecemos)", "agradecemos (agradecimos)", "agradecíamos (agradecíamos)", "agradeceremos (agradeceremos)", "agradecamos (agradecamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "agradecem (agradecen)", "agradeceram (agradecieron)", "agradeciam (agradecían)", "agradecerão (agradecerán)", "agradecam (agradecan)"]
      ]},
      {title:"36. APARECER — APARECER  ·  Regular -ER  ·  Gerúndio/Gerundio: aparecendo (apareciendo)  ·  Particípio/Participio: aparecido (aparecido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "apareco (apareco)", "apareci (aparecí)", "aparecia (aparecía)", "aparecerei (apareceré)", "apareca (apareca)"],
        ["Tu — Tú", "apareces (apareces)", "apareceste (apareciste)", "aparecias (aparecías)", "aparecerás (aparecerás)", "aparecas (aparecas)"],
        ["Ele / Você — Él / Usted", "aparece (aparece)", "apareceu (apareció)", "aparecia (aparecía)", "aparecerá (aparecerá)", "apareca (apareca)"],
        ["Nós — Nosotros", "aparecemos (aparecemos)", "aparecemos (aparecimos)", "aparecíamos (aparecíamos)", "apareceremos (apareceremos)", "aparecamos (aparecamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "aparecem (aparecen)", "apareceram (aparecieron)", "apareciam (aparecían)", "aparecerão (aparecerán)", "aparecam (aparecan)"]
      ]},
      {title:"38. APRENDER — APRENDER  ·  Regular -ER  ·  Gerúndio/Gerundio: aprendendo (aprendiendo)  ·  Particípio/Participio: aprendido (aprendido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "aprendo (aprendo)", "aprendi (aprendí)", "aprendia (aprendía)", "aprenderei (aprenderé)", "aprenda (aprenda)"],
        ["Tu — Tú", "aprendes (aprendes)", "aprendeste (aprendiste)", "aprendias (aprendías)", "aprenderás (aprenderás)", "aprendas (aprendas)"],
        ["Ele / Você — Él / Usted", "aprende (aprende)", "aprendeu (aprendió)", "aprendia (aprendía)", "aprenderá (aprenderá)", "aprenda (aprenda)"],
        ["Nós — Nosotros", "aprendemos (aprendemos)", "aprendemos (aprendimos)", "aprendíamos (aprendíamos)", "aprenderemos (aprenderemos)", "aprendamos (aprendamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "aprendem (aprenden)", "aprenderam (aprendieron)", "aprendiam (aprendían)", "aprenderão (aprenderán)", "aprendam (aprendan)"]
      ]},
      {title:"43. ATENDER — ATENDER  ·  Regular -ER  ·  Gerúndio/Gerundio: atendendo (atendiendo)  ·  Particípio/Participio: atendido (atendido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "atendo (atendo)", "atendi (atendí)", "atendia (atendía)", "atenderei (atenderé)", "atenda (atenda)"],
        ["Tu — Tú", "atendes (atendes)", "atendeste (atendiste)", "atendias (atendías)", "atenderás (atenderás)", "atendas (atendas)"],
        ["Ele / Você — Él / Usted", "atende (atende)", "atendeu (atendió)", "atendia (atendía)", "atenderá (atenderá)", "atenda (atenda)"],
        ["Nós — Nosotros", "atendemos (atendemos)", "atendemos (atendimos)", "atendíamos (atendíamos)", "atenderemos (atenderemos)", "atendamos (atendamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "atendem (atenden)", "atenderam (atendieron)", "atendiam (atendían)", "atenderão (atenderán)", "atendam (atendan)"]
      ]},
      {title:"49. BEBER — BEBER  ·  Regular -ER  ·  Gerúndio/Gerundio: bebendo (bebiendo)  ·  Particípio/Participio: bebido (bebido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "bebo (bebo)", "bebi (bebí)", "bebia (bebía)", "beberei (beberé)", "beba (beba)"],
        ["Tu — Tú", "bebes (bebes)", "bebeste (bebiste)", "bebias (bebías)", "beberás (beberás)", "bebas (bebas)"],
        ["Ele / Você — Él / Usted", "bebe (bebe)", "bebeu (bebió)", "bebia (bebía)", "beberá (beberá)", "beba (beba)"],
        ["Nós — Nosotros", "bebemos (bebemos)", "bebemos (bebimos)", "bebíamos (bebíamos)", "beberemos (beberemos)", "bebamos (bebamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "bebem (beben)", "beberam (bebieron)", "bebiam (bebían)", "beberão (beberán)", "bebam (beban)"]
      ]},
      {title:"63. COMER — COMER  ·  Regular -ER  ·  Gerúndio/Gerundio: comendo (comiendo)  ·  Particípio/Participio: comido (comido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "como (como)", "comi (comí)", "comia (comía)", "comerei (comeré)", "coma (coma)"],
        ["Tu — Tú", "comes (comes)", "comeste (comiste)", "comias (comías)", "comerás (comerás)", "comas (comas)"],
        ["Ele / Você — Él / Usted", "come (come)", "comeu (comió)", "comia (comía)", "comerá (comerá)", "coma (coma)"],
        ["Nós — Nosotros", "comemos (comemos)", "comemos (comimos)", "comíamos (comíamos)", "comeremos (comeremos)", "comamos (comamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "comem (comen)", "comeram (comieron)", "comiam (comían)", "comerão (comerán)", "comam (coman)"]
      ]},
      {title:"65. COMPREENDER — COMPRENDER  ·  Regular -ER  ·  Gerúndio/Gerundio: compreendendo (comprendiendo)  ·  Particípio/Participio: compreendido (comprendido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "compreendo (comprendo)", "compreendi (comprendí)", "compreendia (comprendía)", "compreenderei (comprenderé)", "compreenda (comprenda)"],
        ["Tu — Tú", "compreendes (comprendes)", "compreendeste (comprendiste)", "compreendias (comprendías)", "compreenderás (comprenderás)", "compreendas (comprendas)"],
        ["Ele / Você — Él / Usted", "compreende (comprende)", "compreendeu (comprendió)", "compreendia (comprendía)", "compreenderá (comprenderá)", "compreenda (comprenda)"],
        ["Nós — Nosotros", "compreendemos (comprendemos)", "compreendemos (comprendimos)", "compreendíamos (comprendíamos)", "compreenderemos (comprenderemos)", "compreendamos (comprendamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "compreendem (comprenden)", "compreenderam (comprendieron)", "compreendiam (comprendían)", "compreenderão (comprenderán)", "compreendam (comprendan)"]
      ]},
      {title:"67. CONHECER — CONOCER  ·  Regular -ER  ·  Gerúndio/Gerundio: conhecendo (conociendo)  ·  Particípio/Participio: conhecido (conocido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "conheco (conoco)", "conheci (conocí)", "conhecia (conocía)", "conhecerei (conoceré)", "conheca (conoca)"],
        ["Tu — Tú", "conheces (conoces)", "conheceste (conociste)", "conhecias (conocías)", "conhecerás (conocerás)", "conhecas (conocas)"],
        ["Ele / Você — Él / Usted", "conhece (conoce)", "conheceu (conoció)", "conhecia (conocía)", "conhecerá (conocerá)", "conheca (conoca)"],
        ["Nós — Nosotros", "conhecemos (conocemos)", "conhecemos (conocimos)", "conhecíamos (conocíamos)", "conheceremos (conoceremos)", "conhecamos (conocamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "conhecem (conocen)", "conheceram (conocieron)", "conheciam (conocían)", "conhecerão (conocerán)", "conhecam (conocan)"]
      ]},
      {title:"74. CORRER — CORRER  ·  Regular -ER  ·  Gerúndio/Gerundio: correndo (corriendo)  ·  Particípio/Participio: corrido (corrido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "corro (corro)", "corri (corrí)", "corria (corría)", "correrei (correré)", "corra (corra)"],
        ["Tu — Tú", "corres (corres)", "correste (corriste)", "corrias (corrías)", "correrás (correrás)", "corras (corras)"],
        ["Ele / Você — Él / Usted", "corre (corre)", "correu (corrió)", "corria (corría)", "correrá (correrá)", "corra (corra)"],
        ["Nós — Nosotros", "corremos (corremos)", "corremos (corrimos)", "corríamos (corríamos)", "correremos (correremos)", "corramos (corramos)"],
        ["Eles / Vocês — Ellos / Ustedes", "correm (corren)", "correram (corrieron)", "corriam (corrían)", "correrão (correrán)", "corram (corran)"]
      ]},
      {title:"84. DEPENDER — DEPENDER  ·  Regular -ER  ·  Gerúndio/Gerundio: dependendo (dependiendo)  ·  Particípio/Participio: dependido (dependido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "dependo (dependo)", "dependi (dependí)", "dependia (dependía)", "dependerei (dependeré)", "dependa (dependa)"],
        ["Tu — Tú", "dependes (dependes)", "dependeste (dependiste)", "dependias (dependías)", "dependerás (dependerás)", "dependas (dependas)"],
        ["Ele / Você — Él / Usted", "depende (depende)", "dependeu (dependió)", "dependia (dependía)", "dependerá (dependerá)", "dependa (dependa)"],
        ["Nós — Nosotros", "dependemos (dependemos)", "dependemos (dependimos)", "dependíamos (dependíamos)", "dependeremos (dependeremos)", "dependamos (dependamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "dependem (dependen)", "dependeram (dependieron)", "dependiam (dependían)", "dependerão (dependerán)", "dependam (dependan)"]
      ]},
      {title:"93. DEVER — DEBER  ·  Regular -ER  ·  Gerúndio/Gerundio: devendo (debiendo)  ·  Particípio/Participio: devido (debido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "devo (debo)", "devi (debí)", "devia (debía)", "deverei (deberé)", "deva (deba)"],
        ["Tu — Tú", "deves (debes)", "deveste (debiste)", "devias (debías)", "deverás (deberás)", "devas (debas)"],
        ["Ele / Você — Él / Usted", "deve (debe)", "deveu (debió)", "devia (debía)", "deverá (deberá)", "deva (deba)"],
        ["Nós — Nosotros", "devemos (debemos)", "devemos (debimos)", "devíamos (debíamos)", "deveremos (deberemos)", "devamos (debamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "devem (deben)", "deveram (debieron)", "deviam (debían)", "deverão (deberán)", "devam (deban)"]
      ]},
      {title:"104. ENTENDER — ENTENDER  ·  Regular -ER  ·  Gerúndio/Gerundio: entendendo (entendiendo)  ·  Particípio/Participio: entendido (entendido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "entendo (entiendo)", "entendi (entendí)", "entendia (entendía)", "entenderei (entenderé)", "entenda (entienda)"],
        ["Tu — Tú", "entendes (entiendes)", "entendeste (entendiste)", "entendias (entendías)", "entenderás (entenderás)", "entendas (entiendas)"],
        ["Ele / Você — Él / Usted", "entende (entiende)", "entendeu (entendió)", "entendia (entendía)", "entenderá (entenderá)", "entenda (entienda)"],
        ["Nós — Nosotros", "entendemos (entendemos)", "entendemos (entendimos)", "entendíamos (entendíamos)", "entenderemos (entenderemos)", "entendamos (entendamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "entendem (entienden)", "entenderam (entendieron)", "entendiam (entendían)", "entenderão (entenderán)", "entendam (entiendan)"]
      ]},
      {title:"108. ESCOLHER — ELEGIR  ·  Regular -ER  ·  Gerúndio/Gerundio: escolhendo (elegiendo)  ·  Particípio/Participio: escolhido (elegido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "escolho (elego)", "escolhi (elegí)", "escolhia (elegía)", "escolherei (elegiré)", "escolha (elega)"],
        ["Tu — Tú", "escolhes (eleges)", "escolheste (elegiste)", "escolhias (elegías)", "escolherás (elegirás)", "escolhas (elegas)"],
        ["Ele / Você — Él / Usted", "escolhe (elege)", "escolheu (elegió)", "escolhia (elegía)", "escolherá (elegirá)", "escolha (elega)"],
        ["Nós — Nosotros", "escolhemos (elegimos)", "escolhemos (elegimos)", "escolhíamos (elegíamos)", "escolheremos (elegiremos)", "escolhamos (elegamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "escolhem (elegen)", "escolheram (elegieron)", "escolhiam (elegían)", "escolherão (elegirán)", "escolham (elegan)"]
      ]},
      {title:"109. ESCREVER — ESCRIBIR  ·  Regular -ER  ·  Gerúndio/Gerundio: escrevendo (escribiendo)  ·  Particípio/Participio: escrito (escrito)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "escrevo (escribo)", "escrevi (escribí)", "escrevia (escribía)", "escreverei (escribiré)", "escreva (escriba)"],
        ["Tu — Tú", "escreves (escribes)", "escreveste (escribiste)", "escrevias (escribías)", "escreverás (escribirás)", "escrevas (escribas)"],
        ["Ele / Você — Él / Usted", "escreve (escribe)", "escreveu (escribió)", "escrevia (escribía)", "escreverá (escribirá)", "escreva (escriba)"],
        ["Nós — Nosotros", "escrevemos (escribimos)", "escrevemos (escribimos)", "escrevíamos (escribíamos)", "escreveremos (escribiremos)", "escrevamos (escribamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "escrevem (escriben)", "escreveram (escribieron)", "escreviam (escribían)", "escreverão (escribirán)", "escrevam (escriban)"]
      ]},
      {title:"112. ESQUECER — OLVIDAR  ·  Regular -ER  ·  Gerúndio/Gerundio: esquecendo (olvidando)  ·  Particípio/Participio: esquecido (olvidado)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "esqueco (olvido)", "esqueci (olvidé)", "esquecia (olvidaba)", "esquecerei (olvidaré)", "esqueca (olvide)"],
        ["Tu — Tú", "esqueces (olvidas)", "esqueceste (olvidaste)", "esquecias (olvidabas)", "esquecerás (olvidarás)", "esquecas (olvides)"],
        ["Ele / Você — Él / Usted", "esquece (olvida)", "esqueceu (olvidó)", "esquecia (olvidaba)", "esquecerá (olvidará)", "esqueca (olvide)"],
        ["Nós — Nosotros", "esquecemos (olvidamos)", "esquecemos (olvidamos)", "esquecíamos (olvidábamos)", "esqueceremos (olvidaremos)", "esquecamos (olvidemos)"],
        ["Eles / Vocês — Ellos / Ustedes", "esquecem (olvidan)", "esqueceram (olvidaron)", "esqueciam (olvidaban)", "esquecerão (olvidarán)", "esquecam (olviden)"]
      ]},
      {title:"135. LER — LEER  ·  Regular -ER  ·  Gerúndio/Gerundio: lendo (leyendo)  ·  Particípio/Participio: lido (leido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "lo (leo)", "li (leí)", "lia (leía)", "lerei (leeré)", "la (lea)"],
        ["Tu — Tú", "les (lees)", "leste (leiste)", "lias (leías)", "lerás (leerás)", "las (leas)"],
        ["Ele / Você — Él / Usted", "le (lee)", "leu (leió)", "lia (leía)", "lerá (leerá)", "la (lea)"],
        ["Nós — Nosotros", "lemos (leemos)", "lemos (leimos)", "líamos (leíamos)", "leremos (leeremos)", "lamos (leamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "lem (leen)", "leram (leieron)", "liam (leían)", "lerão (leerán)", "lam (lean)"]
      ]},
      {title:"144. MERECER — MERECER  ·  Regular -ER  ·  Gerúndio/Gerundio: merecendo (mereciendo)  ·  Particípio/Participio: merecido (merecido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "mereco (mereco)", "mereci (merecí)", "merecia (merecía)", "merecerei (mereceré)", "mereca (mereca)"],
        ["Tu — Tú", "mereces (mereces)", "mereceste (mereciste)", "merecias (merecías)", "merecerás (merecerás)", "merecas (merecas)"],
        ["Ele / Você — Él / Usted", "merece (merece)", "mereceu (mereció)", "merecia (merecía)", "merecerá (merecerá)", "mereca (mereca)"],
        ["Nós — Nosotros", "merecemos (merecemos)", "merecemos (merecimos)", "merecíamos (merecíamos)", "mereceremos (mereceremos)", "merecamos (merecamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "merecem (merecen)", "mereceram (merecieron)", "mereciam (merecían)", "merecerão (merecerán)", "merecam (merecan)"]
      ]},
      {title:"147. MORRER — MORIR  ·  Regular -ER  ·  Gerúndio/Gerundio: morrendo (muriendo)  ·  Particípio/Participio: morto (muerto)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "morro (muero)", "morri (morí)", "morria (moría)", "morrerei (moriré)", "morra (muera)"],
        ["Tu — Tú", "morres (mueres)", "morreste (moriste)", "morrias (morías)", "morrerás (morirás)", "morras (mueras)"],
        ["Ele / Você — Él / Usted", "morre (muere)", "morreu (morió)", "morria (moría)", "morrerá (morirá)", "morra (muera)"],
        ["Nós — Nosotros", "morremos (morimos)", "morremos (morimos)", "morríamos (moríamos)", "morreremos (moriremos)", "morramos (moramos)"],
        ["Eles / Vocês — Ellos / Ustedes", "morrem (mueren)", "morreram (morieron)", "morriam (morían)", "morrerão (morirán)", "morram (mueran)"]
      ]},
      {title:"149. MOVER — MOVER  ·  Regular -ER  ·  Gerúndio/Gerundio: movendo (moviendo)  ·  Particípio/Participio: movido (movido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "movo (muevo)", "movi (moví)", "movia (movía)", "moverei (moveré)", "mova (mueva)"],
        ["Tu — Tú", "moves (mueves)", "moveste (moviste)", "movias (movías)", "moverás (moverás)", "movas (muevas)"],
        ["Ele / Você — Él / Usted", "move (mueve)", "moveu (movió)", "movia (movía)", "moverá (moverá)", "mova (mueva)"],
        ["Nós — Nosotros", "movemos (movemos)", "movemos (movimos)", "movíamos (movíamos)", "moveremos (moveremos)", "movamos (movamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "movem (mueven)", "moveram (movieron)", "moviam (movían)", "moverão (moverán)", "movam (muevan)"]
      ]},
      {title:"150. NASCER — NACER  ·  Regular -ER  ·  Gerúndio/Gerundio: nascendo (naciendo)  ·  Particípio/Participio: nascido (nacido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "nasco (naco)", "nasci (nací)", "nascia (nacía)", "nascerei (naceré)", "nasca (naca)"],
        ["Tu — Tú", "nasces (naces)", "nasceste (naciste)", "nascias (nacías)", "nascerás (nacerás)", "nascas (nacas)"],
        ["Ele / Você — Él / Usted", "nasce (nace)", "nasceu (nació)", "nascia (nacía)", "nascerá (nacerá)", "nasca (naca)"],
        ["Nós — Nosotros", "nascemos (nacemos)", "nascemos (nacimos)", "nascíamos (nacíamos)", "nasceremos (naceremos)", "nascamos (nacamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "nascem (nacen)", "nasceram (nacieron)", "nasciam (nacían)", "nascerão (nacerán)", "nascam (nacan)"]
      ]},
      {title:"159. PARECER — PARECER  ·  Regular -ER  ·  Gerúndio/Gerundio: parecendo (pareciendo)  ·  Particípio/Participio: parecido (parecido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "pareco (pareco)", "pareci (parecí)", "parecia (parecía)", "parecerei (pareceré)", "pareca (pareca)"],
        ["Tu — Tú", "pareces (pareces)", "pareceste (pareciste)", "parecias (parecías)", "parecerás (parecerás)", "parecas (parecas)"],
        ["Ele / Você — Él / Usted", "parece (parece)", "pareceu (pareció)", "parecia (parecía)", "parecerá (parecerá)", "pareca (pareca)"],
        ["Nós — Nosotros", "parecemos (parecemos)", "parecemos (parecimos)", "parecíamos (parecíamos)", "pareceremos (pareceremos)", "parecamos (parecamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "parecem (parecen)", "pareceram (parecieron)", "pareciam (parecían)", "parecerão (parecerán)", "parecam (parecan)"]
      ]},
      {title:"163. PERCEBER — PERCIBIR/NOTAR  ·  Regular -ER  ·  Gerúndio/Gerundio: percebendo (percibiendo)  ·  Particípio/Participio: percebido (percibido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "percebo (percibo)", "percebi (percibí)", "percebia (percibía)", "perceberei (percibiré)", "perceba (perciba)"],
        ["Tu — Tú", "percebes (percibes)", "percebeste (percibiste)", "percebias (percibías)", "perceberás (percibirás)", "percebas (percibas)"],
        ["Ele / Você — Él / Usted", "percebe (percibe)", "percebeu (percibió)", "percebia (percibía)", "perceberá (percibirá)", "perceba (perciba)"],
        ["Nós — Nosotros", "percebemos (percibimos)", "percebemos (percibimos)", "percebíamos (percibíamos)", "perceberemos (percibiremos)", "percebamos (percibamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "percebem (perciben)", "perceberam (percibieron)", "percebiam (percibían)", "perceberão (percibirán)", "percebam (perciban)"]
      ]},
      {title:"164. PERDER — PERDER  ·  Regular -ER  ·  Gerúndio/Gerundio: perdendo (perdiendo)  ·  Particípio/Participio: perdido (perdido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "perdo (pierdo)", "perdi (perdí)", "perdia (perdía)", "perderei (perderé)", "perda (pierda)"],
        ["Tu — Tú", "perdes (pierdes)", "perdeste (perdiste)", "perdias (perdías)", "perderás (perderás)", "perdas (pierdas)"],
        ["Ele / Você — Él / Usted", "perde (pierde)", "perdeu (perdió)", "perdia (perdía)", "perderá (perderá)", "perda (pierda)"],
        ["Nós — Nosotros", "perdemos (perdemos)", "perdemos (perdimos)", "perdíamos (perdíamos)", "perderemos (perderemos)", "perdamos (perdamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "perdem (pierden)", "perderam (perdieron)", "perdiam (perdían)", "perderão (perderán)", "perdam (pierdan)"]
      ]},
      {title:"173. PROMETER — PROMETER  ·  Regular -ER  ·  Gerúndio/Gerundio: prometendo (prometiendo)  ·  Particípio/Participio: prometido (prometido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "prometo (prometo)", "prometi (prometí)", "prometia (prometía)", "prometerei (prometeré)", "prometa (prometa)"],
        ["Tu — Tú", "prometes (prometes)", "prometeste (prometiste)", "prometias (prometías)", "prometerás (prometerás)", "prometas (prometas)"],
        ["Ele / Você — Él / Usted", "promete (promete)", "prometeu (prometió)", "prometia (prometía)", "prometerá (prometerá)", "prometa (prometa)"],
        ["Nós — Nosotros", "prometemos (prometemos)", "prometemos (prometimos)", "prometíamos (prometíamos)", "prometeremos (prometeremos)", "prometamos (prometamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "prometem (prometen)", "prometeram (prometieron)", "prometiam (prometían)", "prometerão (prometerán)", "prometam (prometan)"]
      ]},
      {title:"174. PROTEGER — PROTEGER  ·  Regular -ER  ·  Gerúndio/Gerundio: protegendo (protegiendo)  ·  Particípio/Participio: protegido (protegido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "protego (protego)", "protegi (protegí)", "protegia (protegía)", "protegerei (protegeré)", "protega (protega)"],
        ["Tu — Tú", "proteges (proteges)", "protegeste (protegiste)", "protegias (protegías)", "protegerás (protegerás)", "protegas (protegas)"],
        ["Ele / Você — Él / Usted", "protege (protege)", "protegeu (protegió)", "protegia (protegía)", "protegerá (protegerá)", "protega (protega)"],
        ["Nós — Nosotros", "protegemos (protegemos)", "protegemos (protegimos)", "protegíamos (protegíamos)", "protegeremos (protegeremos)", "protegamos (protegamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "protegem (protegen)", "protegeram (protegieron)", "protegiam (protegían)", "protegerão (protegerán)", "protegam (protegan)"]
      ]},
      {title:"179. RECEBER — RECIBIR  ·  Regular -ER  ·  Gerúndio/Gerundio: recebendo (recibiendo)  ·  Particípio/Participio: recebido (recibido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "recebo (recibo)", "recebi (recibí)", "recebia (recibía)", "receberei (recibiré)", "receba (reciba)"],
        ["Tu — Tú", "recebes (recibes)", "recebeste (recibiste)", "recebias (recibías)", "receberás (recibirás)", "recebas (recibas)"],
        ["Ele / Você — Él / Usted", "recebe (recibe)", "recebeu (recibió)", "recebia (recibía)", "receberá (recibirá)", "receba (reciba)"],
        ["Nós — Nosotros", "recebemos (recibimos)", "recebemos (recibimos)", "recebíamos (recibíamos)", "receberemos (recibiremos)", "recebamos (recibamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "recebem (reciben)", "receberam (recibieron)", "recebiam (recibían)", "receberão (recibirán)", "recebam (reciban)"]
      ]},
      {title:"180. RECONHECER — RECONOCER  ·  Regular -ER  ·  Gerúndio/Gerundio: reconhecendo (reconociendo)  ·  Particípio/Participio: reconhecido (reconocido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "reconheco (reconoco)", "reconheci (reconocí)", "reconhecia (reconocía)", "reconhecerei (reconoceré)", "reconheca (reconoca)"],
        ["Tu — Tú", "reconheces (reconoces)", "reconheceste (reconociste)", "reconhecias (reconocías)", "reconhecerás (reconocerás)", "reconhecas (reconocas)"],
        ["Ele / Você — Él / Usted", "reconhece (reconoce)", "reconheceu (reconoció)", "reconhecia (reconocía)", "reconhecerá (reconocerá)", "reconheca (reconoca)"],
        ["Nós — Nosotros", "reconhecemos (reconocemos)", "reconhecemos (reconocimos)", "reconhecíamos (reconocíamos)", "reconheceremos (reconoceremos)", "reconhecamos (reconocamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "reconhecem (reconocen)", "reconheceram (reconocieron)", "reconheciam (reconocían)", "reconhecerão (reconocerán)", "reconhecam (reconocan)"]
      ]},
      {title:"183. RESPONDER — RESPONDER  ·  Regular -ER  ·  Gerúndio/Gerundio: respondendo (respondiendo)  ·  Particípio/Participio: respondido (respondido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "respondo (respondo)", "respondi (respondí)", "respondia (respondía)", "responderei (responderé)", "responda (responda)"],
        ["Tu — Tú", "respondes (respondes)", "respondeste (respondiste)", "respondias (respondías)", "responderás (responderás)", "respondas (respondas)"],
        ["Ele / Você — Él / Usted", "responde (responde)", "respondeu (respondió)", "respondia (respondía)", "responderá (responderá)", "responda (responda)"],
        ["Nós — Nosotros", "respondemos (respondemos)", "respondemos (respondimos)", "respondíamos (respondíamos)", "responderemos (responderemos)", "respondamos (respondamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "respondem (responden)", "responderam (respondieron)", "respondiam (respondían)", "responderão (responderán)", "respondam (respondan)"]
      ]},
      {title:"192. SOFRER — SUFRIR  ·  Regular -ER  ·  Gerúndio/Gerundio: sofrendo (sufriendo)  ·  Particípio/Participio: sofrido (sufrido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "sofro (sufro)", "sofri (sufrí)", "sofria (sufría)", "sofrerei (sufriré)", "sofra (sufra)"],
        ["Tu — Tú", "sofres (sufres)", "sofreste (sufriste)", "sofrias (sufrías)", "sofrerás (sufrirás)", "sofras (sufras)"],
        ["Ele / Você — Él / Usted", "sofre (sufre)", "sofreu (sufrió)", "sofria (sufría)", "sofrerá (sufrirá)", "sofra (sufra)"],
        ["Nós — Nosotros", "sofremos (sufrimos)", "sofremos (sufrimos)", "sofríamos (sufríamos)", "sofreremos (sufriremos)", "soframos (suframos)"],
        ["Eles / Vocês — Ellos / Ustedes", "sofrem (sufren)", "sofreram (sufrieron)", "sofriam (sufrían)", "sofrerão (sufrirán)", "sofram (sufran)"]
      ]},
      {title:"197. SURPREENDER — SORPRENDER  ·  Regular -ER  ·  Gerúndio/Gerundio: surpreendendo (sorprendiendo)  ·  Particípio/Participio: surpreendido (sorprendido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "surpreendo (sorprendo)", "surpreendi (sorprendí)", "surpreendia (sorprendía)", "surpreenderei (sorprenderé)", "surpreenda (sorprenda)"],
        ["Tu — Tú", "surpreendes (sorprendes)", "surpreendeste (sorprendiste)", "surpreendias (sorprendías)", "surpreenderás (sorprenderás)", "surpreendas (sorprendas)"],
        ["Ele / Você — Él / Usted", "surpreende (sorprende)", "surpreendeu (sorprendió)", "surpreendia (sorprendía)", "surpreenderá (sorprenderá)", "surpreenda (sorprenda)"],
        ["Nós — Nosotros", "surpreendemos (sorprendemos)", "surpreendemos (sorprendimos)", "surpreendíamos (sorprendíamos)", "surpreenderemos (sorprenderemos)", "surpreendamos (sorprendamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "surpreendem (sorprenden)", "surpreenderam (sorprendieron)", "surpreendiam (sorprendían)", "surpreenderão (sorprenderán)", "surpreendam (sorprendan)"]
      ]},
      {title:"205. VENCER — VENCER  ·  Regular -ER  ·  Gerúndio/Gerundio: vencendo (venciendo)  ·  Particípio/Participio: vencido (vencido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "venco (venco)", "venci (vencí)", "vencia (vencía)", "vencerei (venceré)", "venca (venca)"],
        ["Tu — Tú", "vences (vences)", "venceste (venciste)", "vencias (vencías)", "vencerás (vencerás)", "vencas (vencas)"],
        ["Ele / Você — Él / Usted", "vence (vence)", "venceu (venció)", "vencia (vencía)", "vencerá (vencerá)", "venca (venca)"],
        ["Nós — Nosotros", "vencemos (vencemos)", "vencemos (vencimos)", "vencíamos (vencíamos)", "venceremos (venceremos)", "vencamos (vencamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "vencem (vencen)", "venceram (vencieron)", "venciam (vencían)", "vencerão (vencerán)", "vencam (vencan)"]
      ]},
      {title:"206. VENDER — VENDER  ·  Regular -ER  ·  Gerúndio/Gerundio: vendendo (vendiendo)  ·  Particípio/Participio: vendido (vendido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "vendo (vendo)", "vendi (vendí)", "vendia (vendía)", "venderei (venderé)", "venda (venda)"],
        ["Tu — Tú", "vendes (vendes)", "vendeste (vendiste)", "vendias (vendías)", "venderás (venderás)", "vendas (vendas)"],
        ["Ele / Você — Él / Usted", "vende (vende)", "vendeu (vendió)", "vendia (vendía)", "venderá (venderá)", "venda (venda)"],
        ["Nós — Nosotros", "vendemos (vendemos)", "vendemos (vendimos)", "vendíamos (vendíamos)", "venderemos (venderemos)", "vendamos (vendamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "vendem (venden)", "venderam (vendieron)", "vendiam (vendían)", "venderão (venderán)", "vendam (vendan)"]
      ]},
      {title:"209. VIVER — VIVIR  ·  Regular -ER  ·  Gerúndio/Gerundio: vivendo (viviendo)  ·  Particípio/Participio: vivido (vivido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "vivo (vivo)", "vivi (viví)", "vivia (vivía)", "viverei (viviré)", "viva (viva)"],
        ["Tu — Tú", "vives (vives)", "viveste (viviste)", "vivias (vivías)", "viverás (vivirás)", "vivas (vivas)"],
        ["Ele / Você — Él / Usted", "vive (vive)", "viveu (vivió)", "vivia (vivía)", "viverá (vivirá)", "viva (viva)"],
        ["Nós — Nosotros", "vivemos (vivimos)", "vivemos (vivimos)", "vivíamos (vivíamos)", "viveremos (viviremos)", "vivamos (vivamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "vivem (viven)", "viveram (vivieron)", "viviam (vivían)", "viverão (vivirán)", "vivam (vivan)"]
      ]}
      ],
      notes: [
        "Verbos -ER regulares — repare nas terminações de presente e pretérito, bem parecidas com o -ER do português.",
        "Formato de cada célula: forma em português (forma em español) — leia sempre comparando os dois idiomas.",
        "Este módulo é só de consulta rápida — não tem exercícios nem prova. Use-o como dicionário de conjugação sempre que precisar, durante qualquer nível do curso."
      ],
      exercises: []
    },
    {
      id: "verb-ir", order: 5, title: "Regulares -IR", subtitle: "28 verbos regulares terminados em -IR",
      vocabulary: [],
      grammar: [
      {title:"21. ABRIR — ABRIR  ·  Regular -IR  ·  Gerúndio/Gerundio: abrindo (abriendo)  ·  Particípio/Participio: aberto (abierto)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "abro (abro)", "abri (abrí)", "abria (abría)", "abrirei (abriré)", "abra (abra)"],
        ["Tu — Tú", "abres (abres)", "abriste (abriste)", "abrias (abrías)", "abrirás (abrirás)", "abras (abras)"],
        ["Ele / Você — Él / Usted", "abre (abre)", "abriu (abrió)", "abria (abría)", "abrirá (abrirá)", "abra (abra)"],
        ["Nós — Nosotros", "abrimos (abrimos)", "abrimos (abrimos)", "abríamos (abríamos)", "abriremos (abriremos)", "abramos (abramos)"],
        ["Eles / Vocês — Ellos / Ustedes", "abrem (abren)", "abriram (abrieron)", "abriam (abrían)", "abrirão (abrirán)", "abram (abran)"]
      ]},
      {title:"42. ASSISTIR — ASISTIR/VER  ·  Regular -IR  ·  Gerúndio/Gerundio: assistindo (asistiendo)  ·  Particípio/Participio: assistido (asistido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "assisto (asisto)", "assisti (asistí)", "assistia (asistía)", "assistirei (asistiré)", "assista (asista)"],
        ["Tu — Tú", "assistes (asistes)", "assististe (asististe)", "assistias (asistías)", "assistirás (asistirás)", "assistas (asistas)"],
        ["Ele / Você — Él / Usted", "assiste (asiste)", "assistiu (asistió)", "assistia (asistía)", "assistirá (asistirá)", "assista (asista)"],
        ["Nós — Nosotros", "assistimos (asistimos)", "assistimos (asistimos)", "assistíamos (asistíamos)", "assistiremos (asistiremos)", "assistamos (asistamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "assistem (asisten)", "assistiram (asistieron)", "assistiam (asistían)", "assistirão (asistirán)", "assistam (asistan)"]
      ]},
      {title:"52. CAIR — CAER  ·  Regular -IR  ·  Gerúndio/Gerundio: caindo (caiendo)  ·  Particípio/Participio: caido (caido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "cao (cao)", "cai (caí)", "caia (caía)", "cairei (caeré)", "caa (caa)"],
        ["Tu — Tú", "caes (caes)", "caiste (caiste)", "caias (caías)", "cairás (caerás)", "caas (caas)"],
        ["Ele / Você — Él / Usted", "cae (cae)", "caiu (caió)", "caia (caía)", "cairá (caerá)", "caa (caa)"],
        ["Nós — Nosotros", "caimos (caemos)", "caimos (caimos)", "caíamos (caíamos)", "cairemos (caeremos)", "caamos (caamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "caem (caen)", "cairam (caieron)", "caiam (caían)", "cairão (caerán)", "caam (caan)"]
      ]},
      {title:"68. CONSEGUIR — CONSEGUIR  ·  Regular -IR  ·  Gerúndio/Gerundio: conseguindo (consiguiendo)  ·  Particípio/Participio: conseguido (conseguido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "conseguo (conseguo)", "consegui (conseguí)", "conseguia (conseguía)", "conseguirei (conseguiré)", "consegua (consegua)"],
        ["Tu — Tú", "consegues (consegues)", "conseguiste (conseguiste)", "conseguias (conseguías)", "conseguirás (conseguirás)", "conseguas (conseguas)"],
        ["Ele / Você — Él / Usted", "consegue (consegue)", "conseguiu (conseguió)", "conseguia (conseguía)", "conseguirá (conseguirá)", "consegua (consegua)"],
        ["Nós — Nosotros", "conseguimos (conseguimos)", "conseguimos (conseguimos)", "conseguíamos (conseguíamos)", "conseguiremos (conseguiremos)", "conseguamos (conseguamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "conseguem (conseguen)", "conseguiram (conseguieron)", "conseguiam (conseguían)", "conseguirão (conseguirán)", "conseguam (conseguan)"]
      ]},
      {title:"69. CONSTRUIR — CONSTRUIR  ·  Regular -IR  ·  Gerúndio/Gerundio: construindo (construyendo)  ·  Particípio/Participio: construido (construido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "construo (construo)", "construi (construí)", "construia (construía)", "construirei (construiré)", "construa (construa)"],
        ["Tu — Tú", "construes (construes)", "construiste (construiste)", "construias (construías)", "construirás (construirás)", "construas (construas)"],
        ["Ele / Você — Él / Usted", "construe (construe)", "construiu (construió)", "construia (construía)", "construirá (construirá)", "construa (construa)"],
        ["Nós — Nosotros", "construimos (construimos)", "construimos (construimos)", "construíamos (construíamos)", "construiremos (construiremos)", "construamos (construamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "construem (construen)", "construiram (construieron)", "construiam (construían)", "construirão (construirán)", "construam (construan)"]
      ]},
      {title:"80. DECIDIR — DECIDIR  ·  Regular -IR  ·  Gerúndio/Gerundio: decidindo (decidiendo)  ·  Particípio/Participio: decidido (decidido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "decido (decido)", "decidi (decidí)", "decidia (decidía)", "decidirei (decidiré)", "decida (decida)"],
        ["Tu — Tú", "decides (decides)", "decidiste (decidiste)", "decidias (decidías)", "decidirás (decidirás)", "decidas (decidas)"],
        ["Ele / Você — Él / Usted", "decide (decide)", "decidiu (decidió)", "decidia (decidía)", "decidirá (decidirá)", "decida (decida)"],
        ["Nós — Nosotros", "decidimos (decidimos)", "decidimos (decidimos)", "decidíamos (decidíamos)", "decidiremos (decidiremos)", "decidamos (decidamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "decidem (deciden)", "decidiram (decidieron)", "decidiam (decidían)", "decidirão (decidirán)", "decidam (decidan)"]
      ]},
      {title:"85. DESCOBRIR — DESCUBRIR  ·  Regular -IR  ·  Gerúndio/Gerundio: descobrindo (descubriendo)  ·  Particípio/Participio: descoberto (descubierto)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "descobro (descubro)", "descobri (descubrí)", "descobria (descubría)", "descobrirei (descubriré)", "descobra (descubra)"],
        ["Tu — Tú", "descobres (descubres)", "descobriste (descubriste)", "descobrias (descubrías)", "descobrirás (descubrirás)", "descobras (descubras)"],
        ["Ele / Você — Él / Usted", "descobre (descubre)", "descobriu (descubrió)", "descobria (descubría)", "descobrirá (descubrirá)", "descobra (descubra)"],
        ["Nós — Nosotros", "descobrimos (descubrimos)", "descobrimos (descubrimos)", "descobríamos (descubríamos)", "descobriremos (descubriremos)", "descobramos (descubramos)"],
        ["Eles / Vocês — Ellos / Ustedes", "descobrem (descubren)", "descobriram (descubrieron)", "descobriam (descubrían)", "descobrirão (descubrirán)", "descobram (descubran)"]
      ]},
      {title:"92. DESTRUIR — DESTRUIR  ·  Regular -IR  ·  Gerúndio/Gerundio: destruindo (destruyendo)  ·  Particípio/Participio: destruido (destruido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "destruo (destruo)", "destrui (destruí)", "destruia (destruía)", "destruirei (destruiré)", "destrua (destrua)"],
        ["Tu — Tú", "destrues (destrues)", "destruiste (destruiste)", "destruias (destruías)", "destruirás (destruirás)", "destruas (destruas)"],
        ["Ele / Você — Él / Usted", "destrue (destrue)", "destruiu (destruió)", "destruia (destruía)", "destruirá (destruirá)", "destrua (destrua)"],
        ["Nós — Nosotros", "destruimos (destruimos)", "destruimos (destruimos)", "destruíamos (destruíamos)", "destruiremos (destruiremos)", "destruamos (destruamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "destruem (destruen)", "destruiram (destruieron)", "destruiam (destruían)", "destruirão (destruirán)", "destruam (destruan)"]
      ]},
      {title:"94. DIMINUIR — DISMINUIR  ·  Regular -IR  ·  Gerúndio/Gerundio: diminuindo (disminuyendo)  ·  Particípio/Participio: diminuido (disminuido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "diminuo (disminuo)", "diminui (disminuí)", "diminuia (disminuía)", "diminuirei (disminuiré)", "diminua (disminua)"],
        ["Tu — Tú", "diminues (disminues)", "diminuiste (disminuiste)", "diminuias (disminuías)", "diminuirás (disminuirás)", "diminuas (disminuas)"],
        ["Ele / Você — Él / Usted", "diminue (disminue)", "diminuiu (disminuió)", "diminuia (disminuía)", "diminuirá (disminuirá)", "diminua (disminua)"],
        ["Nós — Nosotros", "diminuimos (disminuimos)", "diminuimos (disminuimos)", "diminuíamos (disminuíamos)", "diminuiremos (disminuiremos)", "diminuamos (disminuamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "diminuem (disminuen)", "diminuiram (disminuieron)", "diminuiam (disminuían)", "diminuirão (disminuirán)", "diminuam (disminuan)"]
      ]},
      {title:"95. DISCUTIR — DISCUTIR  ·  Regular -IR  ·  Gerúndio/Gerundio: discutindo (discutiendo)  ·  Particípio/Participio: discutido (discutido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "discuto (discuto)", "discuti (discutí)", "discutia (discutía)", "discutirei (discutiré)", "discuta (discuta)"],
        ["Tu — Tú", "discutes (discutes)", "discutiste (discutiste)", "discutias (discutías)", "discutirás (discutirás)", "discutas (discutas)"],
        ["Ele / Você — Él / Usted", "discute (discute)", "discutiu (discutió)", "discutia (discutía)", "discutirá (discutirá)", "discuta (discuta)"],
        ["Nós — Nosotros", "discutimos (discutimos)", "discutimos (discutimos)", "discutíamos (discutíamos)", "discutiremos (discutiremos)", "discutamos (discutamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "discutem (discuten)", "discutiram (discutieron)", "discutiam (discutían)", "discutirão (discutirán)", "discutam (discutan)"]
      ]},
      {title:"96. DIVERTIR — DIVERTIR  ·  Regular -IR  ·  Gerúndio/Gerundio: divertindo (divirtiendo)  ·  Particípio/Participio: divertido (divertido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "diverto (diverto)", "diverti (divertí)", "divertia (divertía)", "divertirei (divertiré)", "diverta (diverta)"],
        ["Tu — Tú", "divertes (divertes)", "divertiste (divertiste)", "divertias (divertías)", "divertirás (divertirás)", "divertas (divertas)"],
        ["Ele / Você — Él / Usted", "diverte (diverte)", "divertiu (divertió)", "divertia (divertía)", "divertirá (divertirá)", "diverta (diverta)"],
        ["Nós — Nosotros", "divertimos (divertimos)", "divertimos (divertimos)", "divertíamos (divertíamos)", "divertiremos (divertiremos)", "divertamos (divertamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "divertem (diverten)", "divertiram (divertieron)", "divertiam (divertían)", "divertirão (divertirán)", "divertam (divertan)"]
      ]},
      {title:"97. DIVIDIR — DIVIDIR  ·  Regular -IR  ·  Gerúndio/Gerundio: dividindo (dividiendo)  ·  Particípio/Participio: dividido (dividido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "divido (divido)", "dividi (dividí)", "dividia (dividía)", "dividirei (dividiré)", "divida (divida)"],
        ["Tu — Tú", "divides (divides)", "dividiste (dividiste)", "dividias (dividías)", "dividirás (dividirás)", "dividas (dividas)"],
        ["Ele / Você — Él / Usted", "divide (divide)", "dividiu (dividió)", "dividia (dividía)", "dividirá (dividirá)", "divida (divida)"],
        ["Nós — Nosotros", "dividimos (dividimos)", "dividimos (dividimos)", "dividíamos (dividíamos)", "dividiremos (dividiremos)", "dividamos (dividamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "dividem (dividen)", "dividiram (dividieron)", "dividiam (dividían)", "dividirão (dividirán)", "dividam (dividan)"]
      ]},
      {title:"98. DORMIR — DORMIR  ·  Regular -IR  ·  Gerúndio/Gerundio: dormindo (durmiendo)  ·  Particípio/Participio: dormido (dormido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "dormo (duermo)", "dormi (dormí)", "dormia (dormía)", "dormirei (dormiré)", "dorma (duerma)"],
        ["Tu — Tú", "dormes (duermes)", "dormiste (dormiste)", "dormias (dormías)", "dormirás (dormirás)", "dormas (duermas)"],
        ["Ele / Você — Él / Usted", "dorme (duerme)", "dormiu (dormió)", "dormia (dormía)", "dormirá (dormirá)", "dorma (duerma)"],
        ["Nós — Nosotros", "dormimos (dormimos)", "dormimos (dormimos)", "dormíamos (dormíamos)", "dormiremos (dormiremos)", "dormamos (dormamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "dormem (duermen)", "dormiram (dormieron)", "dormiam (dormían)", "dormirão (dormirán)", "dormam (duerman)"]
      ]},
      {title:"119. FINGIR — FINGIR  ·  Regular -IR  ·  Gerúndio/Gerundio: fingindo (fingiendo)  ·  Particípio/Participio: fingido (fingido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "fingo (fingo)", "fingi (fingí)", "fingia (fingía)", "fingirei (fingiré)", "finga (finga)"],
        ["Tu — Tú", "finges (finges)", "fingiste (fingiste)", "fingias (fingías)", "fingirás (fingirás)", "fingas (fingas)"],
        ["Ele / Você — Él / Usted", "finge (finge)", "fingiu (fingió)", "fingia (fingía)", "fingirá (fingirá)", "finga (finga)"],
        ["Nós — Nosotros", "fingimos (fingimos)", "fingimos (fingimos)", "fingíamos (fingíamos)", "fingiremos (fingiremos)", "fingamos (fingamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "fingem (fingen)", "fingiram (fingieron)", "fingiam (fingían)", "fingirão (fingirán)", "fingam (fingan)"]
      ]},
      {title:"125. IMPEDIR — IMPEDIR  ·  Regular -IR  ·  Gerúndio/Gerundio: impedindo (impediendo)  ·  Particípio/Participio: impedido (impedido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "impedo (impedo)", "impedi (impedí)", "impedia (impedía)", "impedirei (impediré)", "impeda (impeda)"],
        ["Tu — Tú", "impedes (impedes)", "impediste (impediste)", "impedias (impedías)", "impedirás (impedirás)", "impedas (impedas)"],
        ["Ele / Você — Él / Usted", "impede (impede)", "impediu (impedió)", "impedia (impedía)", "impedirá (impedirá)", "impeda (impeda)"],
        ["Nós — Nosotros", "impedimos (impedimos)", "impedimos (impedimos)", "impedíamos (impedíamos)", "impediremos (impediremos)", "impedamos (impedamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "impedem (impeden)", "impediram (impedieron)", "impediam (impedían)", "impedirão (impedirán)", "impedam (impedan)"]
      ]},
      {title:"129. INSISTIR — INSISTIR  ·  Regular -IR  ·  Gerúndio/Gerundio: insistindo (insistiendo)  ·  Particípio/Participio: insistido (insistido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "insisto (insisto)", "insisti (insistí)", "insistia (insistía)", "insistirei (insistiré)", "insista (insista)"],
        ["Tu — Tú", "insistes (insistes)", "insististe (insististe)", "insistias (insistías)", "insistirás (insistirás)", "insistas (insistas)"],
        ["Ele / Você — Él / Usted", "insiste (insiste)", "insistiu (insistió)", "insistia (insistía)", "insistirá (insistirá)", "insista (insista)"],
        ["Nós — Nosotros", "insistimos (insistimos)", "insistimos (insistimos)", "insistíamos (insistíamos)", "insistiremos (insistiremos)", "insistamos (insistamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "insistem (insisten)", "insistiram (insistieron)", "insistiam (insistían)", "insistirão (insistirán)", "insistam (insistan)"]
      ]},
      {title:"143. MENTIR — MENTIR  ·  Regular -IR  ·  Gerúndio/Gerundio: mentindo (mintiendo)  ·  Particípio/Participio: mentido (mentido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "mento (mento)", "menti (mentí)", "mentia (mentía)", "mentirei (mentiré)", "menta (menta)"],
        ["Tu — Tú", "mentes (mentes)", "mentiste (mentiste)", "mentias (mentías)", "mentirás (mentirás)", "mentas (mentas)"],
        ["Ele / Você — Él / Usted", "mente (mente)", "mentiu (mentió)", "mentia (mentía)", "mentirá (mentirá)", "menta (menta)"],
        ["Nós — Nosotros", "mentimos (mentimos)", "mentimos (mentimos)", "mentíamos (mentíamos)", "mentiremos (mentiremos)", "mentamos (mentamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "mentem (menten)", "mentiram (mentieron)", "mentiam (mentían)", "mentirão (mentirán)", "mentam (mentan)"]
      ]},
      {title:"160. PARTIR — PARTIR  ·  Regular -IR  ·  Gerúndio/Gerundio: partindo (partiendo)  ·  Particípio/Participio: partido (partido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "parto (parto)", "parti (partí)", "partia (partía)", "partirei (partiré)", "parta (parta)"],
        ["Tu — Tú", "partes (partes)", "partiste (partiste)", "partias (partías)", "partirás (partirás)", "partas (partas)"],
        ["Ele / Você — Él / Usted", "parte (parte)", "partiu (partió)", "partia (partía)", "partirá (partirá)", "parta (parta)"],
        ["Nós — Nosotros", "partimos (partimos)", "partimos (partimos)", "partíamos (partíamos)", "partiremos (partiremos)", "partamos (partamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "partem (parten)", "partiram (partieron)", "partiam (partían)", "partirão (partirán)", "partam (partan)"]
      ]},
      {title:"167. PERMITIR — PERMITIR  ·  Regular -IR  ·  Gerúndio/Gerundio: permitindo (permitiendo)  ·  Particípio/Participio: permitido (permitido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "permito (permito)", "permiti (permití)", "permitia (permitía)", "permitirei (permitiré)", "permita (permita)"],
        ["Tu — Tú", "permites (permites)", "permitiste (permitiste)", "permitias (permitías)", "permitirás (permitirás)", "permitas (permitas)"],
        ["Ele / Você — Él / Usted", "permite (permite)", "permitiu (permitió)", "permitia (permitía)", "permitirá (permitirá)", "permita (permita)"],
        ["Nós — Nosotros", "permitimos (permitimos)", "permitimos (permitimos)", "permitíamos (permitíamos)", "permitiremos (permitiremos)", "permitamos (permitamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "permitem (permiten)", "permitiram (permitieron)", "permitiam (permitían)", "permitirão (permitirán)", "permitam (permitan)"]
      ]},
      {title:"170. PREFERIR — PREFERIR  ·  Regular -IR  ·  Gerúndio/Gerundio: preferindo (prefiriendo)  ·  Particípio/Participio: preferido (preferido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "prefero (prefiero)", "preferi (preferí)", "preferia (prefería)", "preferirei (preferiré)", "prefera (prefiera)"],
        ["Tu — Tú", "preferes (prefieres)", "preferiste (preferiste)", "preferias (preferías)", "preferirás (preferirás)", "preferas (prefieras)"],
        ["Ele / Você — Él / Usted", "prefere (prefiere)", "preferiu (preferió)", "preferia (prefería)", "preferirá (preferirá)", "prefera (prefiera)"],
        ["Nós — Nosotros", "preferimos (preferimos)", "preferimos (preferimos)", "preferíamos (preferíamos)", "preferiremos (preferiremos)", "preferamos (preferamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "preferem (prefieren)", "preferiram (preferieron)", "preferiam (preferían)", "preferirão (preferirán)", "preferam (prefieran)"]
      ]},
      {title:"184. RIR — REÍR  ·  Regular -IR  ·  Gerúndio/Gerundio: rindo (riendo)  ·  Particípio/Participio: rido (reido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "ro (reo)", "ri (reí)", "ria (reía)", "rirei (reíré)", "ra (rea)"],
        ["Tu — Tú", "res (rees)", "riste (reiste)", "rias (reías)", "rirás (reírás)", "ras (reas)"],
        ["Ele / Você — Él / Usted", "re (ree)", "riu (reió)", "ria (reía)", "rirá (reírá)", "ra (rea)"],
        ["Nós — Nosotros", "rimos (reimos)", "rimos (reimos)", "ríamos (reíamos)", "riremos (reíremos)", "ramos (reamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "rem (reen)", "riram (reieron)", "riam (reían)", "rirão (reírán)", "ram (rean)"]
      ]},
      {title:"187. SEGUIR — SEGUIR  ·  Regular -IR  ·  Gerúndio/Gerundio: seguindo (siguiendo)  ·  Particípio/Participio: seguido (seguido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "seguo (siguo)", "segui (seguí)", "seguia (seguía)", "seguirei (seguiré)", "segua (sigua)"],
        ["Tu — Tú", "segues (sigues)", "seguiste (seguiste)", "seguias (seguías)", "seguirás (seguirás)", "seguas (siguas)"],
        ["Ele / Você — Él / Usted", "segue (sigue)", "seguiu (seguió)", "seguia (seguía)", "seguirá (seguirá)", "segua (sigua)"],
        ["Nós — Nosotros", "seguimos (seguimos)", "seguimos (seguimos)", "seguíamos (seguíamos)", "seguiremos (seguiremos)", "seguamos (seguamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "seguem (siguen)", "seguiram (seguieron)", "seguiam (seguían)", "seguirão (seguirán)", "seguam (siguan)"]
      ]},
      {title:"190. SERVIR — SERVIR  ·  Regular -IR  ·  Gerúndio/Gerundio: servindo (sirviendo)  ·  Particípio/Participio: servido (servido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "servo (sirvo)", "servi (serví)", "servia (servía)", "servirei (serviré)", "serva (sirva)"],
        ["Tu — Tú", "serves (sirves)", "serviste (serviste)", "servias (servías)", "servirás (servirás)", "servas (sirvas)"],
        ["Ele / Você — Él / Usted", "serve (sirve)", "serviu (servió)", "servia (servía)", "servirá (servirá)", "serva (sirva)"],
        ["Nós — Nosotros", "servimos (servimos)", "servimos (servimos)", "servíamos (servíamos)", "serviremos (serviremos)", "servamos (servamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "servem (sirven)", "serviram (servieron)", "serviam (servían)", "servirão (servirán)", "servam (sirvan)"]
      ]},
      {title:"193. SORRIR — SONREÍR  ·  Regular -IR  ·  Gerúndio/Gerundio: sorrindo (sonriendo)  ·  Particípio/Participio: sorrido (sonreido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "sorro (sonreo)", "sorri (sonreí)", "sorria (sonreía)", "sorrirei (sonreíré)", "sorra (sonrea)"],
        ["Tu — Tú", "sorres (sonrees)", "sorriste (sonreiste)", "sorrias (sonreías)", "sorrirás (sonreírás)", "sorras (sonreas)"],
        ["Ele / Você — Él / Usted", "sorre (sonree)", "sorriu (sonreió)", "sorria (sonreía)", "sorrirá (sonreírá)", "sorra (sonrea)"],
        ["Nós — Nosotros", "sorrimos (sonreimos)", "sorrimos (sonreimos)", "sorríamos (sonreíamos)", "sorriremos (sonreíremos)", "sorramos (sonreamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "sorrem (sonreen)", "sorriram (sonreieron)", "sorriam (sonreían)", "sorrirão (sonreírán)", "sorram (sonrean)"]
      ]},
      {title:"194. SUBIR — SUBIR  ·  Regular -IR  ·  Gerúndio/Gerundio: subindo (subiendo)  ·  Particípio/Participio: subido (subido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "subo (subo)", "subi (subí)", "subia (subía)", "subirei (subiré)", "suba (suba)"],
        ["Tu — Tú", "subes (subes)", "subiste (subiste)", "subias (subías)", "subirás (subirás)", "subas (subas)"],
        ["Ele / Você — Él / Usted", "sube (sube)", "subiu (subió)", "subia (subía)", "subirá (subirá)", "suba (suba)"],
        ["Nós — Nosotros", "subimos (subimos)", "subimos (subimos)", "subíamos (subíamos)", "subiremos (subiremos)", "subamos (subamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "subem (suben)", "subiram (subieron)", "subiam (subían)", "subirão (subirán)", "subam (suban)"]
      ]},
      {title:"195. SUGERIR — SUGERIR  ·  Regular -IR  ·  Gerúndio/Gerundio: sugerindo (sugiriendo)  ·  Particípio/Participio: sugerido (sugerido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "sugero (sugero)", "sugeri (sugerí)", "sugeria (sugería)", "sugerirei (sugeriré)", "sugera (sugera)"],
        ["Tu — Tú", "sugeres (sugeres)", "sugeriste (sugeriste)", "sugerias (sugerías)", "sugerirás (sugerirás)", "sugeras (sugeras)"],
        ["Ele / Você — Él / Usted", "sugere (sugere)", "sugeriu (sugerió)", "sugeria (sugería)", "sugerirá (sugerirá)", "sugera (sugera)"],
        ["Nós — Nosotros", "sugerimos (sugerimos)", "sugerimos (sugerimos)", "sugeríamos (sugeríamos)", "sugeriremos (sugeriremos)", "sugeramos (sugeramos)"],
        ["Eles / Vocês — Ellos / Ustedes", "sugerem (sugeren)", "sugeriram (sugerieron)", "sugeriam (sugerían)", "sugerirão (sugerirán)", "sugeram (sugeran)"]
      ]},
      {title:"202. TRADUZIR — TRADUCIR  ·  Regular -IR  ·  Gerúndio/Gerundio: traduzindo (traduciendo)  ·  Particípio/Participio: traduzido (traducido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "traduzo (traduco)", "traduzi (traducí)", "traduzia (traducía)", "traduzirei (traduciré)", "traduza (traduca)"],
        ["Tu — Tú", "traduzes (traduces)", "traduziste (traduciste)", "traduzias (traducías)", "traduzirás (traducirás)", "traduzas (traducas)"],
        ["Ele / Você — Él / Usted", "traduze (traduce)", "traduziu (tradució)", "traduzia (traducía)", "traduzirá (traducirá)", "traduza (traduca)"],
        ["Nós — Nosotros", "traduzimos (traducimos)", "traduzimos (traducimos)", "traduzíamos (traducíamos)", "traduziremos (traduciremos)", "traduzamos (traducamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "traduzem (traducen)", "traduziram (traducieron)", "traduziam (traducían)", "traduzirão (traducirán)", "traduzam (traducan)"]
      ]},
      {title:"207. VESTIR — VESTIR  ·  Regular -IR  ·  Gerúndio/Gerundio: vestindo (vistiendo)  ·  Particípio/Participio: vestido (vestido)", headers:["Pronombre", "Presente", "Pret. Perfeito / Pret. Perfecto", "Pret. Imperfeito / Pret. Imperfecto", "Futuro", "Pres. Subjuntivo"], rows:[
        ["Eu — Yo", "vesto (visto)", "vesti (vestí)", "vestia (vestía)", "vestirei (vestiré)", "vesta (vista)"],
        ["Tu — Tú", "vestes (vistes)", "vestiste (vestiste)", "vestias (vestías)", "vestirás (vestirás)", "vestas (vistas)"],
        ["Ele / Você — Él / Usted", "veste (viste)", "vestiu (vestió)", "vestia (vestía)", "vestirá (vestirá)", "vesta (vista)"],
        ["Nós — Nosotros", "vestimos (vestimos)", "vestimos (vestimos)", "vestíamos (vestíamos)", "vestiremos (vestiremos)", "vestamos (vestamos)"],
        ["Eles / Vocês — Ellos / Ustedes", "vestem (visten)", "vestiram (vestieron)", "vestiam (vestían)", "vestirão (vestirán)", "vestam (vistan)"]
      ]}
      ],
      notes: [
        "Verbos -IR regulares — fecham a lista completa de mais de 200 verbos do módulo.",
        "Formato de cada célula: forma em português (forma em español) — leia sempre comparando os dois idiomas.",
        "Este módulo é só de consulta rápida — não tem exercícios nem prova. Use-o como dicionário de conjugação sempre que precisar, durante qualquer nível do curso."
      ],
      exercises: []
    },
    {
      id: "verb-conectores", order: 6, title: "Conectores del Discurso", subtitle: "35 conectores en 7 categorías — la cohesión que conecta tus verbos en frases y textos",
      vocabulary: [
        {category:"➕ Conectores de adición", items:[
          {es:"además", pt:"além disso"},{es:"también", pt:"também"},{es:"asimismo", pt:"assim também / da mesma forma (formal)"},
          {es:"incluso", pt:"inclusive / até mesmo"},{es:"de igual manera", pt:"da mesma maneira"}
        ]},
        {category:"⏩ Conectores de secuencia o tiempo", items:[
          {es:"luego", pt:"logo, em seguida"},{es:"después", pt:"depois"},{es:"mientras", pt:"enquanto"},
          {es:"al mismo tiempo", pt:"ao mesmo tempo"},{es:"finalmente", pt:"finalmente"}
        ]},
        {category:"⚖️ Conectores de contraste u oposición", items:[
          {es:"pero", pt:"mas, porém"},{es:"sin embargo", pt:"no entanto, contudo"},{es:"aunque", pt:"embora, ainda que"},
          {es:"no obstante", pt:"não obstante, contudo (muy formal)"},{es:"en cambio", pt:"em contrapartida, por outro lado"}
        ]},
        {category:"📌 Conectores de causa", items:[
          {es:"porque", pt:"porque"},{es:"ya que", pt:"já que"},{es:"dado que", pt:"dado que"},
          {es:"puesto que", pt:"posto que, uma vez que"},{es:"debido a", pt:"devido a (+ sustantivo)"}
        ]},
        {category:"🎯 Conectores de consecuencia", items:[
          {es:"por lo tanto", pt:"portanto"},{es:"así que", pt:"então, de modo que"},{es:"en consecuencia", pt:"em consequência, consequentemente"},
          {es:"de modo que", pt:"de modo que"},{es:"entonces", pt:"então"}
        ]},
        {category:"📊 Conectores de ejemplificación", items:[
          {es:"por ejemplo", pt:"por exemplo"},{es:"en particular", pt:"em particular"},
          {es:"como muestra", pt:"como mostra"},{es:"tal como", pt:"tal como, assim como"}
        ]},
        {category:"📝 Conectores de conclusión", items:[
          {es:"en resumen", pt:"em resumo"},{es:"en definitiva", pt:"em definitivo, enfim"},{es:"en conclusión", pt:"em conclusão"},
          {es:"para terminar", pt:"para terminar, finalizando"},{es:"en síntesis", pt:"em síntese"}
        ]}
      ],
      grammar: [
      {title:"➕ Adición — cuándo usar cada uno", headers:["Conector","Ejemplo en español","Uso (nota en português)"], rows:[
        ["además", "El curso es muy completo; además, tiene certificado.", "Reforça uma ideia já dita, soma informação nova — o mais neutro."],
        ["también", "Ella habla inglés y también habla francés.", "Soma uma ação/característica igual à anterior — o mais comum e informal."],
        ["asimismo", "El informe fue aprobado; asimismo, se liberó el presupuesto.", "Mais formal que 'también' — comum em relatórios e textos técnicos."],
        ["incluso", "Estudió mucho, incluso los fines de semana.", "Destaca um caso extremo dentro da soma — 'até mesmo'."],
        ["de igual manera", "El profesor explicó la teoría; de igual manera, mostró ejemplos.", "Soma uma ação equivalente/paralela à anterior."]
      ]},
      {title:"⏩ Secuencia o tiempo — cuándo usar cada uno", headers:["Conector","Ejemplo en español","Uso (nota en português)"], rows:[
        ["luego", "Primero desayuno, luego salgo a trabajar.", "Indica a próxima etapa da sequência."],
        ["después", "Terminé el informe y después lo envié.", "Ação posterior — sinônimo próximo de 'luego'."],
        ["mientras", "Ella cocina mientras él pone la mesa.", "Duas ações simultâneas, cada uma com seu sujeito."],
        ["al mismo tiempo", "Estudia español y, al mismo tiempo, trabaja en auditoría.", "Simultaneidade explícita, mais enfática que 'mientras'."],
        ["finalmente", "Revisamos todo y finalmente firmamos el contrato.", "Última etapa/conclusão da sequência de ações."]
      ]},
      {title:"⚖️ Contraste u oposición — cuándo usar cada uno", headers:["Conector","Ejemplo en español","Uso (nota en português)"], rows:[
        ["pero", "Quiero viajar, pero no tengo tiempo.", "Contraste simples e neutro — o mais usado no dia a dia."],
        ["sin embargo", "El proyecto es caro; sin embargo, vale la pena.", "Contraste formal, geralmente após punto y coma o punto."],
        ["aunque", "Aunque llueva, iremos a la reunión.", "Concessão — geralmente no início da frase."],
        ["no obstante", "Los resultados fueron bajos; no obstante, el equipo mejoró.", "Muito formal — típico de auditoría, normas e informes."],
        ["en cambio", "Juan llegó temprano; en cambio, María llegó tarde.", "Contraste entre dois elementos/pessoas distintas."]
      ]},
      {title:"📌 Causa — cuándo usar cada uno", headers:["Conector","Ejemplo en español","Uso (nota en português)"], rows:[
        ["porque", "No fui a la reunión porque estaba enfermo.", "Causa direta e informal — a mais usada."],
        ["ya que", "Ya que estás aquí, revisemos el informe.", "Causa já conhecida/óbvia para quem escuta."],
        ["dado que", "Dado que el plazo venció, se aplicará una multa.", "Formal — comum em auditoría e normas técnicas."],
        ["puesto que", "Puesto que los datos son correctos, aprobamos el informe.", "Formal, semelhante a 'dado que'."],
        ["debido a", "El vuelo se canceló debido a la tormenta.", "Seguido de substantivo, não de verbo conjugado."]
      ]},
      {title:"🎯 Consecuencia — cuándo usar cada uno", headers:["Conector","Ejemplo en español","Uso (nota en português)"], rows:[
        ["por lo tanto", "No cumplió los requisitos; por lo tanto, fue rechazado.", "Consequência lógica e formal."],
        ["así que", "Llovía mucho, así que cancelamos el paseo.", "Mais informal que 'por lo tanto'."],
        ["en consecuencia", "El sistema falló; en consecuencia, se perdieron los datos.", "Formal — comum em relatórios e auditoría."],
        ["de modo que", "Organizamos todo con tiempo, de modo que no hubo problemas.", "Resultado planejado ou natural do que foi feito antes."],
        ["entonces", "Estudiaste mucho, entonces vas a aprobar.", "Consequência simples e coloquial."]
      ]},
      {title:"📊 Ejemplificación — cuándo usar cada uno", headers:["Conector","Ejemplo en español","Uso (nota en português)"], rows:[
        ["por ejemplo", "Hay varios documentos obligatorios, por ejemplo, el contrato.", "O mais comum para introduzir um exemplo."],
        ["en particular", "Todos los informes son importantes, en particular el de auditoría.", "Destaca um exemplo específico dentro de um grupo."],
        ["como muestra", "El gráfico, como muestra el informe, indica un crecimiento.", "Remete a uma evidência/exemplo já apresentado."],
        ["tal como", "El proceso se hizo tal como indica la norma ISO.", "Exemplo que segue exatamente um modelo/regra."]
      ]},
      {title:"📝 Conclusión — cuándo usar cada uno", headers:["Conector","Ejemplo en español","Uso (nota en português)"], rows:[
        ["en resumen", "En resumen, el proyecto fue un éxito.", "Resume o que foi dito antes."],
        ["en definitiva", "En definitiva, la empresa necesita más control interno.", "Conclusão firme e decisiva."],
        ["en conclusión", "En conclusión, se recomienda actualizar el sistema.", "Típico de textos formais e relatórios."],
        ["para terminar", "Para terminar, quiero agradecer a todo el equipo.", "Usado ao encerrar uma fala/apresentação."],
        ["en síntesis", "En síntesis, los tres pilares son calidad, plazo y costo.", "Resume de forma condensada os pontos principais."]
      ]}
      ],
      notes: [
        "Los conectores no cambian el verbo — organizan las ideas ENTRE frases y párrafos. Practica siempre leyendo la frase completa antes de elegir.",
        "Cuanto más formal el contexto (auditoría, informes, normas), más se usan: asimismo, no obstante, dado que/puesto que, en consecuencia, en conclusión.",
        "En el habla cotidiana se prefieren: también, pero, porque, así que, entonces.",
        "'debido a' va siempre seguido de un sustantivo (debido a la lluvia), mientras que 'porque'/'ya que'/'dado que'/'puesto que' van seguidos de una oración completa con verbo conjugado."
      ],
      exercises: [
        {type:"mc", q:"El curso es muy completo; _______, incluye certificado internacional.", options:["además","pero","porque"], correct:0},
        {type:"fill", q:"Ella habla portugués y _______ habla español fluido. (mismo nivel de importancia)", answer:"también"},
        {type:"mc", q:"El informe fue aprobado; _______, se liberó el presupuesto del proyecto. (formal, informes)", options:["asimismo","aunque","por lo tanto"], correct:0},
        {type:"fill", q:"Estudió toda la semana, _______ los domingos. (destaca un caso extremo)", answer:"incluso"},
        {type:"translate", from:"pt", text:"O professor explicou a teoria; da mesma maneira, mostrou exemplos práticos.", answer:"El profesor explicó la teoría; de igual manera, mostró ejemplos prácticos."},
        {type:"mc", q:"Primero reviso los documentos, _______ firmo el contrato.", options:["luego","sin embargo","debido a"], correct:0},
        {type:"fill", q:"Terminé el informe y _______ lo envié al cliente.", answer:"después"},
        {type:"mc", q:"Ella cocina _______ él pone la mesa. (dos acciones simultáneas)", options:["mientras","finalmente","ya que"], correct:0},
        {type:"fill", q:"Estudia español y, _______, trabaja en auditoría. (simultaneidad explícita)", answer:"al mismo tiempo"},
        {type:"translate", from:"pt", text:"Revisamos tudo e finalmente assinamos o contrato.", answer:"Revisamos todo y finalmente firmamos el contrato."},
        {type:"mc", q:"Quiero viajar, _______ no tengo tiempo.", options:["pero","además","por ejemplo"], correct:0},
        {type:"fill", q:"El proyecto es caro; _______, vale la pena. (formal)", answer:"sin embargo"},
        {type:"mc", q:"_______ llueva, iremos a la reunión. (concesión)", options:["Aunque","Porque","Entonces"], correct:0},
        {type:"fill", q:"Los resultados fueron bajos; _______, el equipo mejoró mucho. (muy formal, típico de auditoría)", answer:"no obstante"},
        {type:"mc", q:"Juan llegó temprano; _______, María llegó tarde.", options:["en cambio","dado que","en resumen"], correct:0},
        {type:"mc", q:"No fui a la reunión _______ estaba enfermo.", options:["porque","por lo tanto","sin embargo"], correct:0},
        {type:"fill", q:"_______ estás aquí, revisemos el informe. (causa ya conocida por el oyente)", answer:"Ya que"},
        {type:"mc", q:"_______ el plazo venció, se aplicará una multa. (formal, típico de normas)", options:["Dado que","Aunque","Luego"], correct:0},
        {type:"fill", q:"_______ los datos son correctos, aprobamos el informe. (formal)", answer:"Puesto que"},
        {type:"translate", from:"pt", text:"O voo foi cancelado devido à tormenta.", answer:"El vuelo se canceló debido a la tormenta."},
        {type:"mc", q:"No cumplió los requisitos; _______, fue rechazado.", options:["por lo tanto","mientras","incluso"], correct:0},
        {type:"fill", q:"Llovía mucho, _______ cancelamos el paseo. (más informal)", answer:"así que"},
        {type:"mc", q:"El sistema falló; _______, se perdieron los datos. (formal, informes)", options:["en consecuencia","en particular","aunque"], correct:0},
        {type:"fill", q:"Organizamos todo con tiempo, _______ no hubo problemas.", answer:"de modo que"},
        {type:"mc", q:"Estudiaste mucho, _______ vas a aprobar. (coloquial)", options:["entonces","no obstante","en síntesis"], correct:0},
        {type:"mc", q:"Hay varios documentos obligatorios, _______, el contrato y la factura.", options:["por ejemplo","sin embargo","de modo que"], correct:0},
        {type:"fill", q:"Todos los informes son importantes, _______ el de auditoría. (destaca un ejemplo específico)", answer:"en particular"},
        {type:"mc", q:"El gráfico, _______ indica el informe, muestra un crecimiento.", options:["como muestra","por lo tanto","además"], correct:0},
        {type:"fill", q:"El proceso se hizo _______ indica la norma ISO. (sigue exactamente un modelo)", answer:"tal como"},
        {type:"mc", q:"_______, el proyecto fue un éxito.", options:["En resumen","Mientras","Debido a"], correct:0},
        {type:"fill", q:"_______, la empresa necesita más control interno. (conclusión firme y decisiva)", answer:"En definitiva"},
        {type:"mc", q:"_______, se recomienda actualizar el sistema. (típico de informes formales)", options:["En conclusión","Asimismo","Aunque"], correct:0},
        {type:"fill", q:"_______, quiero agradecer a todo el equipo. (al finalizar una presentación)", answer:"Para terminar"},
        {type:"translate", from:"pt", text:"Em síntese, os três pilares são qualidade, prazo e custo.", answer:"En síntesis, los tres pilares son calidad, plazo y costo."},
        {type:"order", items:[
          "Sin embargo, el cliente corrigió las irregularidades a tiempo.",
          "Primero, revisamos el contrato de auditoría.",
          "Por lo tanto, aprobamos el informe final.",
          "Luego, identificamos dos irregularidades en los pagos."
        ], correctOrder:[1,3,0,2]}
      ]
    }
  ]
};
