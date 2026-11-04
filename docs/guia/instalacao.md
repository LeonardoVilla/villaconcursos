# Instalação e execução

## Requisitos

- Node.js 20.9 ou superior (o CI usa 22).
- npm.
- Para a documentação: Python 3.10+ e `pip`.

## Rodar o app

```sh
npm install
npm run dev
```

Abra <http://localhost:3000>. Sem variáveis de ambiente, o app abre sem login e guarda o progresso só no navegador.

## Comandos úteis

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Compila e verifica os tipos do TypeScript |
| `npm start` | Serve a versão compilada |
| `npm test` | Roda os testes de conteúdo e de autenticação |
| `npx tsc --noEmit` | Só verifica os tipos |

## Ativar login e sincronização localmente

1. Crie `.env.local` a partir de `.env.example` e preencha as variáveis descritas em [Variáveis de ambiente](variaveis-de-ambiente.md).
2. Cadastre `http://localhost:3000/api/auth/callback/google` como URI de redirecionamento no console do Google. Veja [Autenticação com Google](autenticacao.md).
3. Defina `AUTH_ENABLED=true` e reinicie o servidor.
4. Para o banco, siga [Banco e sincronização](banco-e-sincronizacao.md).

!!! note "Reinício necessário"
    O Next.js lê o `.env.local` ao iniciar. Depois de mudar uma variável, reinicie o servidor. Em `npm start`, rode `npm run build` de novo.

## Rodar esta documentação

```sh
pip install -r requirements-docs.txt
mkdocs serve
```

O site abre em <http://127.0.0.1:8000>. Para gerar os arquivos estáticos em `site/`:

```sh
mkdocs build --strict
```

O modo `--strict` transforma avisos (por exemplo, links quebrados entre páginas) em erro. A pasta `site/` não deve ser versionada.
