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

## `tests/ai-policy.test.mjs`

| Teste | O que garante |
|---|---|
| Padrões de modelo | Sem variáveis, usa `gpt-5.4-nano` e a reserva `deepseek-flash` |
| Troca por variáveis | Provedor e modelo mudam só pelo ambiente |
| Provedor sem chave ou desconhecido | É descartado, e não há candidatos repetidos |
| Limite diário | Padrão de 30, teto de 200 |
| Corpo da requisição | Raciocínio só nas famílias que o aceitam, tokens certos por provedor |
| Prompt de explicação | Traz o gabarito, a escolha do aluno e a regra de não inventar |
| Entrada da rota | Rejeita identificadores e alternativas inválidos |

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
| Cada pílula de áudio tem um MP3 real | Nenhuma pílula aponta para arquivo ausente |
| Todo roteiro de áudio tem categoria | A lista de pílulas agrupa sem item solto |
| Cada questão tem enunciado único | O identificador estável do histórico de erros não colide |

## O que os testes não cobrem

- Fluxo de OAuth real (precisa de credenciais e consentimento).
- As rotas `/api/progress` e `/api/ai/explain` com banco e provedores reais. Foram verificadas manualmente, com uma sessão local assinada, nos casos `401`, `400`, `404` e `200`.
- A correção jurídica do conteúdo. Veja [Verificação de fontes](../conteudo/verificacao-de-fontes.md).

## Validação completa

```sh
npx tsc --noEmit
npm test
npm run build
mkdocs build --strict
```
