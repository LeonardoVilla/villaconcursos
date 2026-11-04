# Banco e sincronização

O progresso de quem faz login é guardado em um banco **Neon Postgres**, para acompanhar a pessoa entre celular e computador.

## Configurar o Neon

O projeto usa o CLI `neon`. Com a conta já criada:

```sh
npm i -g neon@latest
neon login
neon init -y --org-id <ORG_ID> --project-id <PROJECT_ID> --branch production --services postgres
neon deploy
```

- `neon init` cria `neon.ts` e vincula o projeto.
- `neon deploy` aplica a configuração e puxa `DATABASE_URL`, `DATABASE_URL_UNPOOLED` e `NEON_BRANCH` para `.env.local`.
- Em outro computador, `neon env pull` recupera as variáveis.

## Esquema

O arquivo `db/schema.sql` cria uma tabela:

```sql
CREATE TABLE IF NOT EXISTS study_progress (
  email      text   NOT NULL,
  contest    text   NOT NULL CHECK (contest IN ('sema','camara')),
  data       jsonb  NOT NULL,
  updated_at bigint NOT NULL,
  PRIMARY KEY (email, contest)
);
```

| Coluna | Descrição |
|---|---|
| `email` | E-mail da conta, em minúsculas |
| `contest` | `sema` ou `camara` |
| `data` | O objeto de progresso (veja [Fluxo de dados](../visao-geral/fluxo-de-dados.md)) |
| `updated_at` | Milissegundos desde 1970 da última alteração |

Para aplicar o esquema, execute o SQL no console do Neon ou por um script que use `DATABASE_URL_UNPOOLED`.

## Como a gravação se protege

A rota `PUT /api/progress` usa `INSERT ... ON CONFLICT DO UPDATE ... WHERE updated_at <= novo`. Assim, um aparelho com dados antigos não sobrescreve um registro mais novo. O limite do corpo da requisição é de 256 KB.

## Verificar o banco

No console do Neon, rode:

```sql
SELECT email, contest, to_timestamp(updated_at/1000.0) AS atualizado
FROM study_progress;
```

Depois de marcar algo no app logado, o registro aparece com a data da alteração.

## Hibernação

No plano gratuito, o computador do banco é suspenso após alguns minutos sem uso e acorda sozinho na próxima consulta, em geral em cerca de 1 segundo. Os dados não se perdem. Se a primeira chamada falhar, o painel avisa e o progresso local continua válido; recarregar a página resolve.

## Teste de ponta a ponta

1. Entre com a conta Google e marque um bloco do dia.
2. Aguarde 2 segundos e consulte a tabela. O registro deve existir.
3. Abra o app em outro navegador ou janela anônima, entre com a mesma conta e confira se a marcação aparece.
