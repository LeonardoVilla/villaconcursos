# Publicação

O projeto está preparado para **GitHub + Vercel**. O repositório é `LeonardoVilla/villaconcursos`.

## CI

O workflow `.github/workflows/ci.yml` roda em pushes e pull requests para `main`:

1. instala dependências com `npm ci` (Node 22);
2. executa `npm test`;
3. executa `npm run build`.

## Deploy na Vercel

1. Em <https://vercel.com/new>, importe o repositório e selecione **Next.js**.
2. Use a raiz do repositório como **Root Directory** e Node.js **22.x**.
3. Confirme `main` como branch de produção.
4. Cadastre as variáveis de [Variáveis de ambiente](variaveis-de-ambiente.md) em **Settings → Environment Variables**, marcando as credenciais como sensíveis.
5. Faça um **Redeploy**: variáveis novas não alteram um deployment já publicado.

## Checklist antes de publicar com login

- [ ] `AUTH_ENABLED=true` só depois de preencher as demais variáveis de autenticação.
- [ ] `NEXTAUTH_URL` com a URL pública exata.
- [ ] URL pública cadastrada como origem e redirecionamento no Google.
- [ ] `DATABASE_URL` cadastrada na hospedagem.
- [ ] Tabela `study_progress` criada no banco.
- [ ] Testes e build passando no CI.

## Proteção da branch

O CI e o deploy da Vercel são independentes. Para impedir a entrada de mudanças sem validação, configure uma regra de proteção para `main` que exija pull request e o check **Testes e build Next.js**. A disponibilidade depende do plano e da visibilidade do repositório.

## Progresso por origem

Cada endereço tem seu próprio `localStorage`. Com login e banco, a pessoa recupera o progresso em qualquer endereço ao entrar com a mesma conta. Sem login, use exportar e importar backup.
