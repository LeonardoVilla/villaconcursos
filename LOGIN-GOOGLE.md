# Login com Google

Implementação: NextAuth.js 4.24.15, provider Google, sessão JWT cifrada e validada no servidor. Somente os escopos `openid email profile`. Não pede Gmail, Drive nem acesso offline. O login pode restringir o acesso aos e-mails autorizados.

## 1. Google Cloud

Abra https://console.cloud.google.com/auth/overview e selecione ou crie um projeto. Configure o Google Auth Platform (nome do app: Villa Concursos; e-mail de suporte e contato do desenvolvedor).

Em **Audience**, selecione o público adequado. Para contas pessoais, use **External**. Se o aplicativo estiver em testes, inclua os dois e-mails em **Test users**. Essa configuração do Google é adicional à lista permitida no aplicativo.

Em **Clients**, crie um cliente OAuth do tipo **Web application**, com:

Origem JavaScript autorizada:

```
https://villaconcursos.vercel.app
```

URI de redirecionamento autorizada (deve coincidir exatamente):

```
https://villaconcursos.vercel.app/api/auth/callback/google
```

Para testes locais, adicione separadamente a origem `http://localhost:3000` e o callback `http://localhost:3000/api/auth/callback/google`. URLs aleatórias de preview da Vercel não são aceitas automaticamente: cada callback precisa estar cadastrado. Evite enviar o login de um preview para produção.

Guarde o **Client ID** e o **Client secret** diretamente na Vercel. Não coloque o secret no GitHub, em mensagens, em capturas de tela nem em variáveis `NEXT_PUBLIC_*`.

## 2. Vercel

Em **villaconcursos → Settings → Environment Variables**, adicione para **Production**:

| Variável | Valor |
|---|---|
| `GOOGLE_CLIENT_ID` | ID do cliente OAuth |
| `GOOGLE_CLIENT_SECRET` | Segredo do cliente OAuth |
| `NEXTAUTH_SECRET` | Valor aleatório forte, exclusivo para este app |
| `NEXTAUTH_URL` | `https://villaconcursos.vercel.app` |
| `AUTH_ACCESS_MODE` | `restricted` para aceitar só a lista; `public` para qualquer conta Google verificada |
| `AUTH_ALLOWED_EMAILS` | Dois e-mails separados por vírgula, caso use `restricted` |
| `AUTH_ENABLED` | `true`, somente depois de configurar os demais valores |

Gere `NEXTAUTH_SECRET` localmente com `node -e "console.log(require('node:crypto').randomBytes(32).toString('base64'))"` e cole o resultado diretamente na Vercel. Não compartilhe esse valor no chat. As credenciais de Google e de sessão devem ser marcadas como sensíveis quando a interface oferecer essa opção.

Após salvar, faça um **Redeploy**. Variáveis salvas não alteram um deployment já publicado.

## 3. Ativação gradual

- Sem `AUTH_ENABLED=true`, o app de estudos continua com o comportamento público anterior. A integração está preparada, mas ainda não protege o acesso.
- Com `AUTH_ENABLED=true`, a página exige uma sessão válida do Google. Credenciais incompletas levam à tela de login indisponível, sem liberar o painel.
- Por padrão, o acesso é restrito. Se a lista estiver vazia, ninguém entra. Para aceitar qualquer conta verificada, configure explicitamente `AUTH_ACCESS_MODE=public`.
- A lista é revalidada ao acessar o painel e ao recuperar a sessão. Se remover um e-mail, o painel deixa de ser acessível a essa conta na próxima verificação.

## 4. Progresso e perfis

Cada conta tem sua própria chave de progresso no navegador. Os dois perfis de estudo, TI e Direito, continuam disponíveis dentro de cada conta. O login ainda não cria sincronização em nuvem: exportar/importar continua sendo o meio de levar o progresso a outro aparelho.

As marcações anteriores não são apagadas nem atribuídas automaticamente a alguém. Após entrar, use **Edital e backup → Recuperar progresso anterior** para copiá-las para a conta atual. Confirme apenas se essas marcações pertencem a você. Em aparelhos compartilhados, o `localStorage` não é um cofre: quem tem acesso ao navegador pode inspecionar seus dados locais. Sair remove a sessão, mas preserva as marcações nesse aparelho.

PDFs e áudios são materiais públicos em `public/`; o login controla a entrada no painel, não transforma esses arquivos em documentos privados.

## 5. Conferência final

1. Em janela anônima, abrir o site deve levar a `/login` depois da ativação.
2. Entrar com uma conta autorizada deve abrir o painel e mostrar a conta e a opção **Sair**.
3. Uma conta fora da lista deve receber a mensagem de acesso negado.
4. Sair deve retornar a `/login`; abrir `/` novamente exige login.
5. Entrar com a outra conta no mesmo navegador deve usar marcações independentes.
6. Recuperar um backup ou o progresso anterior deve preservar as duas áreas de estudo.

O teste real de OAuth exige as credenciais válidas e consentimento do usuário. Os testes automatizados cobrem as regras de autorização, verificação do e-mail e configuração, além da integridade do conteúdo.

Referências:

- https://next-auth.js.org/providers/google
- https://next-auth.js.org/configuration/nextjs
- https://developers.google.com/identity/protocols/oauth2/web-server
