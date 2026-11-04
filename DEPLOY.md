# GitHub → Vercel

## 1. Repositório

Crie um repositório no GitHub, preferencialmente vazio. Envie o conteúdo desta pasta como raiz do repositório: `package.json`, `app`, `public` e `.github` devem ficar diretamente na raiz. Não envie `node_modules` ou `.next`; eles já constam em `.gitignore`.

Se optar por baixar e extrair o ZIP, abra a pasta interna `sema-estudos` antes de executar os comandos.

Com o terminal aberto nesta pasta, depois de substituir a URL abaixo pela URL real:

```sh
git init -b main
git add .
git commit -m "Cria app de estudos SEMA para TI e Direito"
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
```

Os comandos pressupõem Git autenticado e identidade de commit já configurada. Se o repositório remoto tiver README ou outros commits, integre o histórico existente antes do envio; não use force push.

## 2. Importação na Vercel

1. Acesse https://vercel.com/new e conecte sua conta GitHub.
2. Autorize o acesso ao repositório escolhido e importe-o.
3. Selecione o framework **Next.js**.
4. Use a raiz do repositório como **Root Directory**, se enviou o conteúdo conforme acima.
5. Mantenha os comandos padrão de instalação e build. Sem variáveis, o app abre sem login e sem sincronização. Para login e sincronização, cadastre as variáveis de `.env.example` em **Settings → Environment Variables** (veja `LOGIN-GOOGLE.md` e `docs/guia/banco-e-sincronizacao.md`). Para sincronizar o progresso, inclua `DATABASE_URL`.
6. Selecione Node.js **22.x** nas configurações do projeto.
7. Faça o primeiro deploy e confirme **main** como **Production Branch** nas configurações Git.

## 3. Atualizações automáticas

- Pushes na `main` acionam o GitHub Actions, que executa testes e build.
- A integração Git da Vercel publica automaticamente as mudanças da branch de produção e normalmente gera previews para pull requests.
- Não é necessário criar token da Vercel nem guardá-lo no GitHub para usar a integração Git nativa.
- O workflow do GitHub e o deploy da Vercel são independentes. Para impedir a entrada de mudanças sem validação, configure uma regra de proteção para `main`, exija pull request e o check **Testes e build Next.js**. A disponibilidade de proteção depende do plano e da visibilidade do repositório.
- Quando a Vercel disponibiliza um endereço estável de produção, use-o para estudar. Cada endereço/origem tem seu próprio progresso no navegador. Para levar marcações do localhost ou de um preview à produção, use exportar/importar backup no app.

## Situação da entrega

O app está publicado em https://villaconcursos.vercel.app, com deploy automático a cada push na `main`. Para a sincronização do progresso funcionar em produção, confira estes itens:

- `DATABASE_URL` cadastrada nas variáveis de ambiente da Vercel (Production).
- `NEXTAUTH_URL` igual à URL pública, `NEXTAUTH_SECRET`, `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` e `AUTH_ALLOWED_EMAILS` cadastrados.
- A URL pública e o redirecionamento `/api/auth/callback/google` cadastrados no console do Google.
- Tabela `study_progress` criada no banco (veja `db/schema.sql`).

Depois de alterar variáveis, faça um **Redeploy**: valores novos não afetam um deployment já publicado.

Referências oficiais:

- https://vercel.com/docs/deployments/git
- https://vercel.com/docs/frameworks/full-stack/nextjs
- https://docs.github.com/en/actions
