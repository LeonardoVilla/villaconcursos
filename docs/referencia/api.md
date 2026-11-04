# API

As rotas ficam em `app/api`.

## `GET /api/progress?contest=<sema|camara>`

Retorna o progresso da conta logada.

| Resposta | Corpo |
|---|---|
| `200` | `{ "data": <Progress> , "updatedAt": <ms> }`. Sem registro: `{ "data": null, "updatedAt": 0 }` |
| `400` | `{ "error": "BadContest" }` |
| `401` | `{ "error": "Unauthorized" }`. Sem sessão, e-mail fora da lista ou login desativado |

## `PUT /api/progress`

Grava o progresso. Corpo JSON:

```json
{ "contest": "sema", "data": { "version": 1, "profiles": { } }, "updatedAt": 1762246325000 }
```

| Resposta | Significado |
|---|---|
| `200` `{ "ok": true }` | Gravado, ou ignorado se o servidor já tinha dado mais novo |
| `400` `BadJson` ou `BadPayload` | Corpo inválido, concurso desconhecido, versão diferente de 1 ou `updatedAt` não numérico |
| `401` `Unauthorized` | Sem sessão válida |
| `413` `TooLarge` | Corpo maior que 256 KB |

A identidade vem sempre da sessão do servidor. O cliente não escolhe o e-mail.

## `/api/auth/*`

Rotas do NextAuth (login, callback, sessão e logout). Respondem `503` quando o login está desativado ou com credenciais incompletas.

## Segurança

- O e-mail do registro é o da sessão, em minúsculas.
- A consulta ao banco usa SQL parametrizado do driver Neon.
- O tamanho do corpo é limitado, e o formato é validado antes de gravar.
