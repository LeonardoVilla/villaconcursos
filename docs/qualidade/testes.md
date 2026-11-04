# Testes

Os testes usam o executor nativo do Node (`node --test`) e ficam em `tests/`.

```sh
npm test
```

## `tests/auth-policy.test.mjs`

| Teste | O que garante |
|---|---|
| Login exige ativação explícita e credenciais completas | Sem `AUTH_ENABLED=true` ou sem ID, segredo e segredo de sessão, o login não libera acesso |
| Modo restrito bloqueia conta fora da lista, inclusive lista vazia | Lista vazia nega todos |
| Google precisa confirmar o e-mail, mesmo no modo público | `email_verified` é obrigatório |

## `tests/content.test.mjs`

| Teste | O que garante |
|---|---|
| Câmara tem conteúdo de nível superior para TI e Analista Legislativo | Estrutura mínima do edital da Câmara |
| O programa mantém matérias gerais, cinco eixos de TI e todas as áreas jurídicas | Cobertura do edital da SEMA |
| Cada marcação tem chave única e todos os tópicos têm conteúdo | Sem `id` duplicado |
| As quatro faixas de TI são WAV reais | Arquivos de áudio válidos |
| Edital e documentos complementares estão disponíveis | PDFs em `public/fontes` |
| Todo tópico tem aula e cada matéria tem banco mínimo de questões | 100% de aulas; pelo menos 10 questões por matéria dos grupos comuns, de TI e de Direito, e dos transversais trans0, 1, 2, 4, 5 e 7 |
| Cada matéria tem texto de revisão e referência | Sem matéria vazia em Materiais |

## O que os testes não cobrem

- Fluxo de OAuth real (precisa de credenciais e consentimento).
- A rota `/api/progress` com banco (verificada manualmente: `401` sem login e gravação condicional no Postgres).
- A correção jurídica do conteúdo. Veja [Verificação de fontes](../conteudo/verificacao-de-fontes.md).

## Validação completa

```sh
npx tsc --noEmit
npm test
npm run build
mkdocs build --strict
```
