# Guia — Ativar os pagamentos (Mercado Pago)

Este guia é o passo a passo para colocar no ar o sistema de aceite de termos + planos de
pagamento (mensal/anual) implementado em `app.js`/`functions/index.js`/`firestore.rules`.

Nada disso foi testado ao vivo — este ambiente de trabalho não tem acesso de rede de saída
nem suas credenciais do Mercado Pago/Firebase. O código foi escrito e revisado com cuidado,
mas só um teste real (de preferência com as credenciais de TESTE do Mercado Pago primeiro)
confirma que está tudo certo.

## 1. Upgrade do Firebase para o plano Blaze

Cloud Functions com chamadas de rede para fora (falar com a API do Mercado Pago) exigem o
plano Blaze (pago por uso, com cota grátis generosa — para o seu volume de alunos, é bem
provável que o custo mensal fique próximo de zero).

No console do Firebase → engrenagem (⚙️) → **Uso e faturamento** → **Alterar plano** → Blaze.

## 2. Instalar o Firebase CLI (uma vez só, no seu computador)

```powershell
npm install -g firebase-tools
firebase login
```

## 3. Criar conta e pegar as credenciais no Mercado Pago

1. Crie/entre em https://www.mercadopago.com.br
2. Vá em **Seu negócio → Configurações → Credenciais**
3. Comece pelas credenciais de **TESTE** (Access Token de teste) para validar tudo antes de
   cobrar de verdade. Quando estiver tudo funcionando, troque pelas credenciais de
   **PRODUÇÃO**.

## 4. Configurar o segredo do Access Token nas Cloud Functions

Dentro da pasta do projeto (`C:\XDADOS\ESPAÑOL`):

```powershell
cd functions
npm install
firebase functions:secrets:set MP_ACCESS_TOKEN
```

Vai pedir para colar o valor — cole o Access Token (de teste, no começo).

## 5. Publicar as Cloud Functions

```powershell
firebase deploy --only functions
```

Isso vai criar duas funções na região `southamerica-east1`: `createMpCheckout` (chamada pelo
app quando o aluno escolhe um plano) e `mpWebhook` (recebe as notificações do Mercado Pago).
Ao final do deploy, o terminal mostra a URL pública de `mpWebhook` — copie ela.

## 6. Configurar o Webhook no painel do Mercado Pago

No painel → **Sua integração → Webhooks** → adicionar a URL de `mpWebhook` copiada no passo
anterior. Marcar para receber eventos de: **Pagamentos** e **Assinaturas (preapproval)**.

## 7. Publicar as regras do Firestore

O arquivo `firestore.rules` neste projeto é uma **referência minha**, reconstruída a partir do
que sei das coleções do sistema — eu não tinha acesso às suas regras reais em produção (elas
sempre foram publicadas direto pelo console, nunca existiu esse arquivo aqui antes). **Compare
com cuidado** as regras atuais no console do Firebase (Firestore → Regras) antes de colar por
cima — em especial os blocos marcados "NOVO" no arquivo, que são os que realmente precisam
entrar para o pagamento funcionar (o resto é só a reconstrução do que já existia).

## 8. Deploy do site (igual sempre)

```powershell
cd C:\XDADOS\ESPAÑOL
git add -A
git commit -m "Aceite de termos + planos de pagamento (mensal/anual) via Mercado Pago"
git push
```

O Vercel pega o `app.js`/`index.html`/`style.css` automaticamente, como sempre. As Cloud
Functions são publicadas separadamente (passo 5) — são dois deploys diferentes, não um só.

## 9. Checklist de teste (com credenciais de TESTE primeiro)

- [ ] Criar um usuário aluno novo, aprovar o cadastro em Aprobaciones.
- [ ] Fazer login como esse aluno: deve aparecer a tela "Antes de empezar" (aceite de termos).
- [ ] Marcar a caixa e aceitar: deve ir para "Elegí tu plan".
- [ ] Escolher o plano mensal: deve abrir o checkout do Mercado Pago (aba nova ou redirect).
- [ ] Pagar com um cartão de teste do Mercado Pago (a documentação deles lista os números de
      cartão de teste que sempre aprovam/recusam).
- [ ] Voltar ao site: deve aparecer "¡Gracias!" e depois liberar o painel normalmente.
- [ ] Conferir em Admin → Alumnos que aparece o badge de pagamento (🟡 pendente logo após
      pagar, depois 🟢 em dia quando o webhook confirmar — pode levar alguns segundos).
- [ ] Testar o botão "Suspender acceso" num aluno de teste e confirmar que ele é redirecionado
      para a tela de acesso suspenso no próximo login.
- [ ] Repetir o fluxo escolhendo o plano anual.
- [ ] Só depois de tudo isso funcionar, trocar o Access Token de teste pelo de produção
      (`firebase functions:secrets:set MP_ACCESS_TOKEN` de novo, com o valor de produção, e
      rodar `firebase deploy --only functions` outra vez).

## Pendências conhecidas / próximos passos possíveis

- O valor do plano anual está fixo (não recalcula automaticamente a partir do mensal) — foi
  pedido assim de propósito, para você poder dar desconto no anual.
- Não existe ainda uma tela para o aluno ver o histórico de pagamentos/trocar de plano sozinho
  — hoje isso é "fale com a administração" (texto na tela de escolha de plano). Se quiser,
  posso adicionar uma aba "Minha Assinatura" em Mi Cuenta depois.
- O bloqueio de acesso por atraso é **sempre manual** (botão "Suspender acceso" em Alumnos),
  como você pediu — o sistema nunca corta sozinho.
