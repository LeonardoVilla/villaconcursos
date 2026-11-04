# Variáveis de ambiente

As variáveis ficam em `.env.local` (local) ou nas configurações do projeto na hospedagem. O Git ignora `.env*`, exceto `.env.example`.

!!! danger "Segredos"
    Nunca coloque `GOOGLE_CLIENT_SECRET`, `NEXTAUTH_SECRET` ou `DATABASE_URL` no GitHub, em capturas de tela ou em variáveis `NEXT_PUBLIC_*`. Se alguma vazar, gere uma nova e troque.

## Autenticação

| Variável | Obrigatória | Descrição |
|---|---|---|
| `AUTH_ENABLED` | Não | `true` ativa o login. Qualquer outro valor mantém o acesso público |
| `AUTH_ACCESS_MODE` | Não | `restricted` (padrão) aceita só os e-mails da lista; `public` aceita qualquer conta Google verificada |
| `AUTH_ALLOWED_EMAILS` | Com `restricted` | E-mails separados por vírgula. Lista vazia nega todos |
| `GOOGLE_CLIENT_ID` | Com login | ID do cliente OAuth |
| `GOOGLE_CLIENT_SECRET` | Com login | Segredo do cliente OAuth |
| `NEXTAUTH_SECRET` (ou `AUTH_SECRET`) | Com login | Valor aleatório forte para cifrar a sessão |
| `NEXTAUTH_URL` | Com login | URL do site, por exemplo `http://localhost:3000` |

Para gerar o segredo de sessão:

```sh
node -e "console.log(require('node:crypto').randomBytes(32).toString('base64'))"
```

## Banco de dados

| Variável | Obrigatória | Descrição |
|---|---|---|
| `DATABASE_URL` | Com sincronização | Conexão pooled do Neon, usada pela rota `/api/progress` |
| `DATABASE_URL_UNPOOLED` | Não | Conexão direta, útil para migrações |
| `NEON_BRANCH` | Não | Nome da branch do Neon vinculada ao ambiente |

O comando `neon env pull` preenche essas três variáveis em `.env.local`.

## IA (opcional)

| Variável | Obrigatória | Descrição |
|---|---|---|
| `OPENAI_API_KEY` | Para usar a OpenAI | Chave da API. Só no servidor |
| `DEEPSEEK_API_KEY` | Para usar o DeepSeek | Chave da API. Só no servidor |
| `AI_EXPLAIN_PROVIDER`, `AI_EXPLAIN_MODEL` | Não | Provedor (`openai` ou `deepseek`) e modelo para explicar questões. Padrão: `openai` e `gpt-5.4-nano` |
| `AI_ESSAY_PROVIDER`, `AI_ESSAY_MODEL` | Não | Para a correção da discursiva. Padrão: `openai` e `gpt-5.4-mini` |
| `AI_FALLBACK_PROVIDER`, `AI_FALLBACK_MODEL` | Não | Reserva se o principal falhar. Padrão: `deepseek` e `deepseek-flash` |
| `AI_DAILY_LIMIT` | Não | Usos de IA por pessoa por dia. Padrão: 30 |

Veja [IA no app](ia.md). Sem nenhuma chave, o botão de explicação responde que a IA está indisponível, e o resto do app funciona normalmente.

## Comportamento sem configuração

- Sem `AUTH_ENABLED=true`, o app abre direto e não sincroniza.
- Com `AUTH_ENABLED=true` e credenciais incompletas, a página inicial redireciona para `/login` e a API de login responde `503`. O painel não é liberado.
- Sem `DATABASE_URL`, a rota `/api/progress` falha e o painel avisa que a sincronização está indisponível. O progresso local continua funcionando.
