# Arquitetura

O app é uma aplicação Next.js em que quase todo o conteúdo é estático. O servidor existe para três coisas: autenticar, proteger a página inicial e gravar o progresso.

```
Navegador
 ├─ app/page.tsx (servidor)      decide se exige login
 ├─ app/dashboard.tsx (cliente)  interface, plano e progresso
 │    ├─ app/practice.tsx        aulas, materiais, quiz e simulados
 │    └─ localStorage            cópia local do progresso (funciona offline)
 ├─ /api/progress                lê e grava o progresso no Neon (só com login)
 └─ /api/ai/explain              explica questões com IA (só com login, com limite diário)

Servidor Next.js
 ├─ lib/auth.ts + lib/auth-policy.mjs   NextAuth, Google e lista de e-mails
 ├─ lib/session.ts                      identifica o usuário da sessão
 ├─ lib/ai-policy.mjs                   modelos, limite e prompt da IA (testado)
 └─ lib/db.ts                           conexão com o Neon

Neon Postgres
 └─ tabela study_progress (e-mail, concurso, dados JSON, data da alteração)
```

## Componentes

| Parte | Arquivo | Responsabilidade |
|---|---|---|
| Página inicial | `app/page.tsx` | Servidor. Se `AUTH_ENABLED=true`, exige sessão Google e e-mail permitido; senão, abre o painel direto |
| Painel | `app/dashboard.tsx` | Cliente. Concursos, perfis, abas, cronômetro, progresso e sincronização |
| Prática e materiais | `app/practice.tsx` | Aulas por tópico, textos de revisão, referências, quiz e simulados |
| Login | `app/login`, `app/api/auth` | Tela de login e rota do NextAuth |
| Progresso | `app/api/progress/route.ts` | `GET` e `PUT` do progresso por concurso |
| Banco | `lib/db.ts`, `db/schema.sql` | Conexão e esquema da tabela |
| Conteúdo | `app/*.ts`, `app/*.json` | Editais, aulas, questões, leituras e referências |

## Decisões de projeto

- **Conteúdo versionado no código.** Aulas, questões e links ficam em arquivos TypeScript. Isso dá revisão por diff e testes automáticos de cobertura, e dispensa um CMS.
- **Progresso local primeiro.** O `localStorage` continua sendo a fonte imediata. O banco é uma cópia que sincroniza quando há login, então o app funciona sem rede e sem conta.
- **Autenticação opcional.** Sem `AUTH_ENABLED=true`, o app abre como antes. Com a variável ativa, credenciais incompletas nunca liberam o painel.
- **Driver serverless.** A rota usa `@neondatabase/serverless` sobre HTTP, adequado a funções de curta duração na Vercel.
- **Um registro por e-mail e concurso.** O progresso de SEMA e Câmara é independente.

## Limites conhecidos

- A sincronização usa *last write wins* por data de alteração. Dois aparelhos editando ao mesmo tempo podem sobrescrever um ao outro.
- PDFs e áudios em `public/` são públicos. O login protege o painel, não os arquivos.
- O banco gratuito do Neon hiberna após inatividade, e a primeira consulta pode demorar cerca de 1 segundo. Planos e limites mudam, então confira a página de preços do Neon.
