# Mapa de arquivos

```
.
├─ app/
│  ├─ page.tsx                   página inicial (servidor, decide o login)
│  ├─ dashboard.tsx              painel (cliente)
│  ├─ practice.tsx               aulas, materiais, quiz e simulados
│  ├─ account-menu.tsx           menu da conta
│  ├─ layout.tsx                 layout e metadados
│  ├─ icon.svg                   favicon
│  ├─ login/                     tela de login
│  ├─ api/
│  │  ├─ auth/[...nextauth]/     rota do NextAuth
│  │  └─ progress/route.ts       GET e PUT do progresso
│  ├─ data.json                  edital da SEMA-MT
│  ├─ camara-data.json           edital da Câmara de Cuiabá
│  ├─ lesson-type.ts             tipo e helper L das aulas
│  ├─ topic-lessons.ts           aulas originais
│  ├─ topic-lessons-extra.ts     junta os lessons-*.ts
│  ├─ lessons-*.ts               aulas por escopo
│  ├─ practice-bank.ts           banco de questões original
│  ├─ practice-extra-{a,b,c}.ts  questões adicionais
│  ├─ study-readings*.ts         textos de revisão
│  ├─ study-materials.ts         referências e links
│  ├─ reading-exercises.ts       exercícios de leitura
│  ├─ mt-lessons.ts              história e geografia de MT
│  └─ globals.css                estilos
├─ lib/
│  ├─ auth.ts                    opções do NextAuth
│  ├─ auth-policy.mjs            regras de acesso (testadas)
│  └─ db.ts                      conexão com o Neon
├─ db/schema.sql                 esquema da tabela de progresso
├─ neon.ts                       configuração do projeto Neon
├─ public/
│  ├─ audio/                     MP3 narrados e WAV antigos
│  └─ fontes/                    editais, retificações e cronograma em PDF
├─ tests/                        testes do Node
├─ docs/ e mkdocs.yml            esta documentação
├─ .github/workflows/ci.yml      testes e build
├─ README.md, DEPLOY.md, LOGIN-GOOGLE.md
└─ .env.example                  modelo das variáveis de ambiente
```

## Arquivos que não vão para o Git

`.env*` (exceto `.env.example`), `node_modules/`, `.next/`, `*.tsbuildinfo`, `.neon` e `site/`.
