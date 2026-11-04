# Trilha SEMA — TI e Direito

> Documentação técnica completa em `docs/` (MkDocs). Para ler: `pip install -r requirements-docs.txt` e `mkdocs serve`.

O seletor de concurso alterna entre **SEMA-MT 2026** e **Câmara de Cuiabá 2026**. Cada concurso tem edital, plano, pílulas e progresso próprios, com as áreas de TI e Direito. Na Câmara, Direito corresponde à preparação para Analista Legislativo, sem especialidade jurídica no edital. As marcações da SEMA permanecem na chave original do navegador; backups antigos continuam sendo reconhecidos como SEMA-MT.

Aplicativo em Next.js e React para o concurso SEMA-MT 2026, preparado para publicar na Vercel. Dois perfis locais: TI (Perfil 2) e Direito (Perfil 5). Sem login, não precisa de chaves nem de banco: o progresso fica no navegador. Com login Google e banco Neon Postgres, o progresso sincroniza entre aparelhos.

O login opcional com Google está implementado. Para criar as credenciais OAuth e ativá-lo na Vercel, siga `LOGIN-GOOGLE.md`. A ativação exige credenciais próprias do Google e um segredo de sessão. Até a configuração ser concluída e `AUTH_ENABLED=true`, o app mantém o acesso anterior. Com `DATABASE_URL` configurada, o login também sincroniza o progresso (veja `docs/guia/banco-e-sincronizacao.md`).

## Executar

Requer Node.js 20.9 ou superior.

```sh
npm install
npm run dev
```

Acesse http://localhost:3000. Para validar a versão de produção:

```sh
npm run build
npm start
```

## Publicar na Vercel

Para configurar GitHub, CI e deploy automático, siga também `DEPLOY.md`. O projeto inclui `.github/workflows/ci.yml` com testes e build em pushes e pull requests para `main`.

Envie esta pasta para um repositório Git. Em https://vercel.com/new, importe o repositório e selecione Next.js. Se o projeto estiver em uma subpasta, indique essa pasta como Root Directory. Os comandos padrão são `npm install` e `npm run build`. Não há variáveis de ambiente obrigatórias.

Alternativa com a CLI, dentro desta pasta:

```sh
npx vercel
npx vercel --prod
```

A publicação requer autenticação na sua conta Vercel. Documentação: https://vercel.com/docs/frameworks/full-stack/nextjs

## Recursos

- Checklist do Anexo III, por perfil, incluindo as matérias gerais e os transversais de Direito.
- Marcações, notas por tópico e quatro sessões diárias de 30 minutos.
- Cronômetro, plano até 13/12/2026 e arquivos oficiais fornecidos pelo usuário.
- Sessenta e três faixas em MP3 com narração neural em português do Brasil para TI e Direito. As faixas podem ser baixadas para ouvir offline.
- Biblioteca de materiais por edital e cargo, com indicações de estudo e links oficiais das bancas.
- Aula por tópico para 100% dos itens do edital da SEMA-MT e da Câmara de Cuiabá, com questão de revisão comentada e fontes.
- Quiz com correção imediata, simulado por tópicos e simulado completo com 70 questões objetivas, pontuação por banca e proposta de discursiva para autoavaliação. As questões são autorais e o banco inicial cobre parte dos tópicos de cada edital.
- Exportação e importação manual de backup dos dois perfis.

## Persistência e limites

O progresso fica em `localStorage`, sob a chave `sema-estudos-v1`, no navegador e endereço em que o app foi aberto. Os perfis não são contas com senha. Sem login e banco, não há sincronização entre aparelhos; com eles, o progresso da conta é sincronizado. Exporte e importe o backup para transferir o progresso. Limpar dados do navegador apaga o progresso local.

Na importação, os dois perfis são substituídos após confirmação. Por isso, exporte um backup antes. Em aparelhos separados, evite sobrescrever alterações novas com um backup antigo.

O app usa as datas do concurso dos PDFs fornecidos, sem monitorar retificações posteriores. A ordem do plano é uma proposta, não uma previsão de incidência. A carga de Direito foi inicialmente igualada à de TI e pode ser adaptada no código em `app/page.tsx`.

Conteúdo de checklist extraído do edital consolidado, cuja primeira página já registra as alterações de setembro e outubro de 2026. Os PDFs em `public/fontes` preservam a fonte oficial. Alguns itens extensos permanecem agrupados para preservar a redação. As pílulas de TI são explicações de apoio; os roteiros de Direito organizam o programa, sem substituir a leitura das normas e o estudo jurídico.

As fontes tipográficas externas têm alternativas locais: a interface continua funcionando se o carregamento falhar.

## Estrutura

- `app/data.json`: tópicos e roteiros de TI.
- `app/page.tsx`: interface, plano, perfis e persistência.
- `app/globals.css`: interface responsiva.
- `public/audio`: faixas MP3 narradas e arquivos WAV das primeiras versões.
- `public/fontes`: edital, retificações e cronograma fornecidos.

## Fontes técnicas

- https://nextjs.org/docs/app/getting-started/installation
- https://vercel.com/docs/frameworks/full-stack/nextjs
