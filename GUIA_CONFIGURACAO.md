# EspañolYa! — Guia de Configuração

Este guia leva você do zero até o app no ar, gratuitamente e sem cartão de crédito.

## O que você recebeu

- `index.html`, `style.css`, `app.js` — o aplicativo em si
- `firebase-config.js` — onde você cola as chaves do seu projeto Firebase
- `content-fundamentos.js`, `content-basico.js`, `content-intermedio.js`, `content-avanzado.js`, `content-secretos.js`, `content-profesional.js` — todo o conteúdo do curso (6 módulos, já populados com material real)

Estrutura do curso:
- **Fundamentos** (pré-requisito): alfabeto, pronúncia, acentuação
- **Básico**: 15 aulas + prova
- **Intermediário**: 15 aulas + prova
- **Avançado**: 15 aulas + prova
- **Secretos del Español** (bônus, sempre liberado): falsos cognatos, gírias por país, ditados, trava-línguas
- **Español Profesional — Auditoría y Negocios** (bônus, sempre liberado): vocabulário real de auditoria ISO, reuniões, e-mails formais — o diferencial do seu curso

O aluno só avança para o próximo nível principal (Básico → Intermediário → Avançado) depois de ser aprovado na prova do nível anterior, com a nota mínima que você configurar no painel de administrador.

---

## Passo 1 — Criar o projeto no Firebase

1. Acesse [console.firebase.google.com](https://console.firebase.google.com) e faça login com sua conta Google.
2. Clique em **"Criar um projeto"**. Dê um nome (ex.: `espanolya`).
3. Você pode desativar o Google Analytics (não é necessário). Aguarde a criação.
4. Isso usa o plano gratuito **Spark** — sem necessidade de cartão de crédito, com limites generosos para uso pessoal/pequenas turmas.

## Passo 2 — Ativar Authentication (login por e-mail/senha)

1. No menu lateral, clique em **Build → Authentication**.
2. Clique em **"Vamos começar"**.
3. Na aba **Sign-in method**, clique em **"E-mail/senha"** e ative a primeira opção. Salve.

## Passo 3 — Criar o Firestore Database

1. No menu lateral, clique em **Build → Firestore Database**.
2. Clique em **"Criar banco de dados"**.
3. Escolha o modo **produção** e a localização mais próxima (ex.: `southamerica-east1`).
4. Depois de criado, vá na aba **Regras** e substitua tudo pelo conteúdo abaixo:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    function isSignedIn() { return request.auth != null; }
    function isOwner(uid) { return isSignedIn() && request.auth.uid == uid; }
    function isAdmin() {
      return isSignedIn() &&
        exists(/databases/$(database)/documents/users/$(request.auth.uid)) &&
        get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }

    function isPreApprovedAdminEmail() {
      return request.resource.data.role == 'admin' &&
        request.resource.data.email in ['anderson.rsant@gmail.com', 'anderson@quallisi.com.br'];
    }

    match /users/{uid} {
      allow read: if isOwner(uid) || isAdmin();
      // El registro solo puede crearse como "aluno" + status "pending" (aprobación
      // manual del admin) — o como "admin" si el e-mail está en la lista pre-aprobada.
      allow create: if isOwner(uid) && (
        isPreApprovedAdminEmail() ||
        (request.resource.data.role == 'aluno' && request.resource.data.status == 'pending')
      );
      // El propio usuario puede actualizar su documento (nombre, preferencias, etc.)
      // pero NUNCA puede cambiar su propio "role" o "status" — eso queda reservado
      // al administrador, para que la aprobación de registro sea real.
      allow update: if isAdmin() || (
        isOwner(uid) &&
        request.resource.data.role == resource.data.role &&
        request.resource.data.status == resource.data.status
      );
      allow delete: if false;
    }

    match /progress/{uid} {
      allow read, write: if isOwner(uid) || isAdmin();
    }

    match /progress_summary/{uid} {
      allow read: if isSignedIn();
      allow write: if isOwner(uid);
    }

    match /config/{doc} {
      allow read: if isSignedIn();
      allow write: if isAdmin();
    }

    match /attempts/{id} {
      allow create: if isSignedIn() && request.resource.data.uid == request.auth.uid;
      allow read: if isSignedIn() && (resource.data.uid == request.auth.uid || isAdmin());
      allow update, delete: if false;
    }

    match /notebook_notes/{id} {
      allow create: if isSignedIn() && request.resource.data.uid == request.auth.uid;
      allow read, update, delete: if isSignedIn() && resource.data.uid == request.auth.uid;
    }
  }
}
```

5. Clique em **Publicar**.

> Essas regras garantem que cada aluno só vê e edita os próprios dados, enquanto o(s) administrador(es) — definidos no passo 5 — conseguem ver o progresso de todos os alunos e configurar a nota mínima de cada nível.

## Passo 4 — Copiar as chaves do Firebase

1. No menu lateral, clique no ícone de engrenagem ⚙️ → **Configurações do projeto**.
2. Role até **"Seus aplicativos"** e clique no ícone **`</>`** (Web).
3. Dê um apelido (ex.: `espanolya-web`) e clique em **Registrar app**. Não marque a opção de Firebase Hosting.
4. Copie o objeto `firebaseConfig` que aparece (apiKey, authDomain, projectId, etc.).
5. Abra o arquivo `firebase-config.js` (que você recebeu) e cole cada valor no lugar de `COLE_AQUI_...`.

## Passo 5 — Definir quem é administrador

No mesmo arquivo `firebase-config.js`, edite a lista `ADMIN_EMAILS`:

```js
const ADMIN_EMAILS = [
  "anderson.rsant@gmail.com"
];
```

Qualquer pessoa que se cadastrar no app usando um e-mail desta lista vira **administrador** automaticamente (pode configurar a nota mínima de cada nível e ver o progresso de todos os alunos). Todos os demais cadastros viram **alunos** normais. Um administrador também é um usuário do sistema como outro qualquer — ele pode estudar as aulas normalmente, além de ter acesso ao botão **"⚙️ Admin"** no topo da tela.

Para promover alguém a administrador depois (ou tirar o acesso), vá em **Firestore Database → coleção `users` → documento da pessoa** e edite o campo `role` para `"admin"` ou `"aluno"`.

### Aprovação de novos cadastros

Todo cadastro de aluno nasce com `status: "pending"` — o aluno consegue criar a conta, mas o sistema mostra apenas uma tela de "aguardando aprobación" até que você (administrador) aprove. Para aprovar ou rejeitar, entre no app como admin e vá em **⚙️ Admin → ✅ Aprobaciones**: lá aparece a lista de todo mundo que se cadastrou e ainda não foi aprovado, com botões de Aprobar/Rechazar. Isso evita que qualquer pessoa se cadastre e tenha acesso imediato ao curso. As regras do Firestore (acima) já impedem que o próprio aluno mude seu `status` ou `role` sozinho — só um admin pode aprovar.

## Passo 6 — Colocar o app no ar (GitHub Pages, grátis, sem cartão)

1. Crie uma conta gratuita em [github.com](https://github.com) se ainda não tiver.
2. Crie um novo repositório (ex.: `espanolya-app`), público.
3. Faça upload de todos os arquivos que você recebeu (`index.html`, `style.css`, `app.js`, `firebase-config.js` já editado, e os 6 arquivos `content-*.js`) direto pela interface do GitHub (botão **"Add file → Upload files"**).
4. Vá em **Settings → Pages**. Em "Source", selecione a branch `main` e a pasta `/ (root)`. Salve.
5. Em alguns minutos, seu site estará disponível em `https://SEU_USUARIO.github.io/espanolya-app/`.

## Passo 7 — Autorizar o domínio no Firebase

1. Volte ao Firebase Console → **Authentication → Settings → Authorized domains**.
2. Clique em **"Adicionar domínio"** e cole `SEU_USUARIO.github.io`.

Pronto — o app está no ar, com cadastro de usuários, progresso salvo na nuvem, e tudo gratuito.

---

## Como funciona o "mínimo para passar"

No painel **⚙️ Admin**, você define a nota mínima (%) para aprovação da prova de cada nível (padrão: 70%). Isso fica salvo no Firestore (`config/settings`) e vale para todos os alunos. Um aluno só desbloqueia o próximo nível principal quando é aprovado na prova do nível atual com nota igual ou maior à configurada.

## Recursos do app

- **Cadastro e login** por e-mail/senha, com recuperação de senha.
- **Progresso na nuvem** (Firestore): cada aluno só vê o próprio progresso; o admin vê o progresso de todos.
- **Leitura em voz alta com destaque de texto**: clique no ícone 🔊 em qualquer diálogo, texto ou palavra de vocabulário para ouvir a pronúncia em espanhol da Espanha, com a palavra falada destacada em tempo real (efeito "karaokê").
- **Reconhecimento de fala**: exercícios do tipo "fale em voz alta" usam o microfone do navegador para avaliar sua pronúncia (funciona melhor no Google Chrome).
- **Exercícios variados**: múltipla escolha, completar lacunas, tradução, escuta, fala, ordenar diálogo e perguntas abertas.
- **Provas por módulo** com nota mínima configurável.
- **Módulos bônus** sempre liberados: gírias/expressões por país, falsos cognatos, ditados populares e o módulo exclusivo de Español Profesional para Auditoría.

## Observações técnicas

- O reconhecimento de fala e a leitura em voz alta usam a Web Speech API do navegador — funcionam melhor no **Google Chrome** (computador ou Android). No Safari/iPhone o reconhecimento de fala pode não estar disponível.
- Não é necessário Node.js, build step ou servidor — são arquivos estáticos, funcionam em qualquer hospedagem de arquivos (GitHub Pages, Firebase Hosting, Netlify, etc.).
- Para editar o conteúdo das aulas no futuro, basta abrir os arquivos `content-*.js` em qualquer editor de texto — cada um segue uma estrutura clara documentada no topo do arquivo `content-fundamentos.js`.
