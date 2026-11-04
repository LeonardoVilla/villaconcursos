# Autenticação com Google

Implementação: NextAuth 4, provedor Google, sessão JWT de 7 dias. Os escopos são apenas `openid email profile`. O app não pede acesso a Gmail, Drive nem acesso offline.

## Regras de acesso

As regras estão em `lib/auth-policy.mjs` e são cobertas por testes:

| Função | Regra |
|---|---|
| `authEnabled` | Só é verdadeira com `AUTH_ENABLED=true` |
| `googleConfigured` | Exige ID, segredo e segredo de sessão preenchidos |
| `emailAllowed` | No modo `public`, aceita qualquer e-mail. No `restricted`, só os da lista, sem diferenciar maiúsculas |
| `googleIdentityAllowed` | Exige `email_verified` verdadeiro, mesmo no modo público |

A sessão só expõe o mínimo necessário (nome e e-mail). Se o e-mail sair da lista, o painel deixa de abrir na próxima verificação.

## Configurar no Google Cloud

1. Abra o console do Google Cloud, em **Google Auth Platform**, e configure o nome do app e os contatos.
2. Em **Audience**, escolha **External** para contas pessoais. Em modo de teste, inclua os e-mails em **Test users**.
3. Em **Clients**, crie um cliente **Web application**.
4. Cadastre as origens e os redirecionamentos:

| Ambiente | Origem JavaScript | URI de redirecionamento |
|---|---|---|
| Local | `http://localhost:3000` | `http://localhost:3000/api/auth/callback/google` |
| Produção | URL do site | `<URL do site>/api/auth/callback/google` |

A URI de redirecionamento precisa coincidir exatamente. Endereços de preview da Vercel mudam e não são aceitos automaticamente, então cada um precisaria ser cadastrado.

!!! tip "Erro `redirect_uri_mismatch`"
    Significa que o redirecionamento não foi salvo exatamente como acima. Confira espaços e barra no final. O Google pode levar alguns minutos para aplicar a mudança.

## Ativação gradual

- Sem `AUTH_ENABLED=true`, o app segue público.
- Com a variável ativa, a página exige sessão. Credenciais incompletas levam ao login indisponível, sem liberar o painel.
- O acesso é restrito por padrão. Para aceitar qualquer conta verificada, defina `AUTH_ACCESS_MODE=public`.

## Conferência final

1. Em janela anônima, abrir o site deve levar a `/login`.
2. Entrar com conta autorizada abre o painel e mostra a conta e **Sair**.
3. Conta fora da lista recebe mensagem de acesso negado.
4. Sair retorna a `/login`.
5. Contas diferentes no mesmo navegador usam progresso independente.

O guia operacional completo, com a configuração na Vercel, está no arquivo `LOGIN-GOOGLE.md` na raiz do repositório.
