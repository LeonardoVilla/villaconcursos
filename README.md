# Trilha SEMA — TI e Direito

Aplicativo em Next.js e React para o concurso SEMA-MT 2026, preparado para publicar na Vercel. Dois perfis locais: TI (Perfil 2) e Direito (Perfil 5). Não usa serviços pagos, chaves de API ou banco de dados.

O login opcional com Google está implementado. Para criar as credenciais OAuth e ativá-lo na Vercel, siga `LOGIN-GOOGLE.md`. A ativação exige credenciais próprias do Google e um segredo de sessão. Até a configuração ser concluída e `AUTH_ENABLED=true`, o app mantém o acesso anterior. O login não sincroniza o progresso em nuvem.

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
- Quatro áudios gravados de TI, disponíveis para download e reprodução pelo player nativo. Os áudios duram aproximadamente 5 a 6 minutos.
- Dois roteiros introdutórios de Direito lidos pela voz do navegador. O suporte e a continuidade em segundo plano dependem do aparelho. Não são aulas completas de Direito.
- Exportação e importação manual de backup dos dois perfis.

## Persistência e limites

O progresso fica em `localStorage`, sob a chave `sema-estudos-v1`, no navegador e endereço em que o app foi aberto. Os perfis não são contas com senha. Não existe sincronização automática entre aparelhos ou entre o endereço local e o endereço publicado. Exporte e importe o backup para transferir o progresso. Limpar dados do navegador apaga o progresso local.

Na importação, os dois perfis são substituídos após confirmação. Por isso, exporte um backup antes. Em aparelhos separados, evite sobrescrever alterações novas com um backup antigo.

O app usa as datas do concurso dos PDFs fornecidos, sem monitorar retificações posteriores. A ordem do plano é uma proposta, não uma previsão de incidência. A carga de Direito foi inicialmente igualada à de TI e pode ser adaptada no código em `app/page.tsx`.

Conteúdo de checklist extraído do edital consolidado, cuja primeira página já registra as alterações de setembro e outubro de 2026. Os PDFs em `public/fontes` preservam a fonte oficial. Alguns itens extensos permanecem agrupados para preservar a redação. As pílulas de TI são explicações de apoio; os roteiros de Direito organizam o programa, sem substituir a leitura das normas e o estudo jurídico.

As fontes tipográficas externas têm alternativas locais: a interface continua funcionando se o carregamento falhar.

## Estrutura

- `app/data.json`: tópicos e roteiros de TI.
- `app/page.tsx`: interface, plano, perfis e persistência.
- `app/globals.css`: interface responsiva.
- `public/audio`: arquivos WAV gerados com voz local em português.
- `public/fontes`: edital, retificações e cronograma fornecidos.

## Fontes técnicas

- https://nextjs.org/docs/app/getting-started/installation
- https://vercel.com/docs/frameworks/full-stack/nextjs
