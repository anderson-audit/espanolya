# 🎓 Tutorial — Painel do Aluno, Cronograma e Certificados

Este guia explica as três novidades do **¡Español Ya!**: o Painel do Aluno, o Cronograma de Estudo configurável e os Certificados em PDF. Ele foi escrito para você (Anderson) entender o que foi construído e também para servir de manual rápido para qualquer aluno que for usar o sistema.

---

## 1. Painel do Aluno

Assim que o aluno faz login, a tela inicial (Dashboard) passou a abrir com um bloco novo, logo abaixo da saudação: o **Painel do Aluno** (🎓).

Esse painel tem dois elementos principais lado a lado:

- **Anel de progresso geral**: um círculo mostrando a % de conclusão de todo o curso (Fundamentos + Básico + Intermediário + Avançado somados). Por baixo do número, aparece "X de Y etapas concluídas" — cada lição e cada prova conta como uma etapa.
- **Cartão de status do cronograma**: mostra se o aluno está:
  - 🟢 **Dentro do prazo** — no ritmo planejado;
  - 🔵 **Adiantado** — acima do ritmo planejado (parabéns antecipados);
  - 🟠 **Atrasado** — abaixo do ritmo planejado, com uma mensagem de incentivo (sem alarme, só um empurrão gentil).

Um botão "Ver cronograma detalhado →" leva direto para a tela de Cronograma (explicada no item 2).

Cada card de nível (Básico, Intermediário, Avançado) que já tiver a prova aprovada ganha um botão dourado **🎓 Certificado**, que gera na hora o PDF daquele nível (explicado no item 3).

Quando o aluno aprova as provas de **Básico + Intermediário + Avançado**, aparece um cartão especial em destaque (fundo escuro, dourado) oferecendo o **🏆 Diploma final do curso** — um diploma único que resume os três níveis.

---

## 2. Cronograma de Estudo (configurável)

Acessível pelo botão **📅 Cronograma** no topo de qualquer tela (ao lado do botão de sair).

### Como funciona por padrão
Todo aluno novo começa com um cronograma de **12 meses**, contado a partir da data de criação da conta. O sistema sabe quantas "etapas" (lições + provas) existem no total no curso principal e distribui isso de forma proporcional ao longo dos meses escolhidos.

### O aluno pode mudar o prazo
Na tela de Cronograma, o aluno escolhe entre os atalhos **3, 6, 8 ou 12 meses**, ou digita qualquer número de 1 a 36 meses no campo "Meses (personalizado)". Ao salvar, o sistema recalcula tudo na hora:

- **% esperado até hoje** vs. **% real do aluno** — duas barras de comparação;
- **Previsão de finalização**: com base no ritmo real do aluno (quantas etapas ele completou dividido pelo tempo já passado), o sistema projeta em que data ele terminaria o curso se continuar nesse ritmo;
- **Plano de estudo sugerido mês a mês**: uma lista mostrando, para cada mês do prazo escolhido, quais lições e provas de quais níveis o aluno deveria completar naquele período (ex.: "Mês 3: 🌱 Básico (4 lecciones) + prueba").

### Onde isso fica salvo
O cronograma (duração + data de início) fica salvo no Firestore, dentro do documento de progresso de cada aluno (`progress/{uid}.schedule`). Contas criadas antes dessa atualização recebem automaticamente um cronograma padrão de 12 meses na primeira vez que fizerem login depois da atualização.

---

## 3. Certificados em PDF

Cada nível principal tem um **modelo visual próprio**, gerado na hora pelo navegador (usando a biblioteca jsPDF, carregada via CDN — não precisa de servidor nem de nada extra no Firebase). O aluno clica no botão do certificado e o PDF é baixado direto no computador/celular dele.

| Nível | Título no certificado | Estilo visual |
|---|---|---|
| Fundamentos | Certificado de Participación | Vermelho/dourado, ornamento em arco nos cantos, selo circular simples |
| Básico | Certificado de Finalización | Vermelho/dourado (cores da bandeira da Espanha), ornamento em "louro" (ramos) nos cantos, medalhão com fitas |
| Intermediário | Diploma de Finalización | Azul/dourado (paleta "Andalucía"), ornamento em losangos (inspirado em azulejos), selo em formato de escudo |
| Avançado | Diploma de Excelencia | Bordô/dourado (mais solene), ornamento tipo flor-de-lis, faixa/banner "EXCELENCIA" |
| Curso completo (bônus) | Diploma de Finalización Completa | Preto/dourado, o mais elaborado, mostra a nota dos três níveis principais lado a lado |

Todos os modelos têm em comum:
- moldura dupla (grossa + fina) ocupando quase toda a página A4 deitada, para não sobrar espaço em branco;
- marca d'água discreta com o nome do curso;
- bandeirinha da Espanha no topo;
- nome completo do aluno em destaque, com linha decorativa;
- nota final e, se for 90% ou mais, uma menção "★ CON MENCIÓN DE EXCELENCIA ★";
- referência ao nível equivalente do Marco Común Europeo (A1/A2/B1/B2) — um toque profissional, já que muitos alunos usam isso em currículo;
- data de emissão e um **ID único de verificação** (ex.: `EY-BAS-A1B2C3-LX7K9F`), gerado a partir do nível, de parte do UID do aluno e da data/hora — serve como comprovante de autenticidade;
- assinatura do "Sistema ¡Español Ya! — Emisión Automática Verificada" (já que quem assina é o próprio sistema, como você pediu);
- um rodapé discreto: **"Plataforma desarrollada por Quallisi® — Consultoría y Auditoría"**, dando crédito à sua empresa.

### Por que ficou assim
Pesquisei modelos de certificados profissionais (bordas ornamentadas, selos, tipografia serifada, um único elemento de destaque por design) e apliquei o princípio de "elegância com contenção": cada modelo tem sua própria paleta e ornamento, mas nenhum deles fica poluído — o nome do aluno e a nota continuam sendo o centro das atenções.

---

## 4. Onde estão os arquivos

Tudo foi implementado dentro dos arquivos que você já tinha, sem criar dependências novas de servidor:

- `index.html` — adicionada a tag `<script>` do jsPDF (CDN, carrega automaticamente);
- `app.js` — novas seções: Cronograma (`renderSchedule`, `computeScheduleStatus`, `buildStudyPlan`), Painel do Aluno (`panelSummaryHtml`) e Certificados (`generateCertificatePDF`, `generateFinalDiplomaPDF` e as funções de desenho `drawSeal`, `drawCornerOrnament`, `drawWatermark`);
- `style.css` — estilos novos para o anel de progresso, cartão de status, cartão do diploma final, chips de duração do cronograma e lista do plano de estudo mês a mês;
- também aproveitei para terminar a tela **Mi Cuenta** (trocar senha e trocar tema/fonte/idioma), que tinha ficado pendente da sessão anterior e ainda não estava funcionando.

Nenhuma configuração adicional no Firebase é necessária: o campo `schedule` é criado automaticamente no documento de progresso de cada aluno.

---

## 5. Próximos passos sugeridos

1. Testar o cadastro de um aluno novo e conferir se o cronograma já nasce com 12 meses.
2. Completar uma lição e uma prova de teste para ver o Painel do Aluno mudando de "atrasado/adiantado/no prazo" e o botão de certificado aparecendo.
3. Baixar os 4 modelos de certificado (Fundamentos, Básico, Intermediário, Avançado) e o Diploma final para conferir a impressão em PDF.
4. Se quiser, me avise para ajustarmos a nota mínima para "Menção de Excelência" (hoje está em 90%) ou o texto do rodapé da Quallisi.
