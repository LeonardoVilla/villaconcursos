# IA no app

O app usa modelos de linguagem de duas formas, e as duas passam pelo servidor. **Nenhuma chave vai para o navegador.**

## O que existe hoje

**Explicar questão.** No quiz, depois de responder, o botão **Não entendi: explicar com IA** pede uma explicação curta. A IA recebe o enunciado, a alternativa correta, a que o aluno marcou e a nota do banco de questões. Ela explica por que a correta está certa e por que a escolhida está errada, e fecha com uma dica. O botão também aparece em cada questão da tela de resultado.

O botão só aparece para quem está logado.

**Corrigir a discursiva.** No simulado completo, a última etapa é a prova discursiva. Depois de escrever pelo menos 200 caracteres (o máximo é 6000), o botão **Corrigir com IA** devolve uma nota estimada de 0 a 10, os pontos fortes, o que faltou do roteiro, comentários de português e organização e uma sugestão de melhora. A nota é só para treino e não é a nota da banca. O botão aparece na página da discursiva e no resultado, e a correção fica visível no resultado.

Cada correção conta como **3 usos** do limite diário, porque gasta mais tokens que uma explicação. Se a IA falhar, os 3 usos são devolvidos.

## Provedores e modelos

| Variável | Para que serve | Padrão |
|---|---|---|
| `AI_EXPLAIN_PROVIDER` e `AI_EXPLAIN_MODEL` | Explicar questões | `openai` e `gpt-5.4-nano` |
| `AI_ESSAY_PROVIDER` e `AI_ESSAY_MODEL` | Correção da discursiva | `openai` e `gpt-5.4-mini` |
| `AI_FALLBACK_PROVIDER` e `AI_FALLBACK_MODEL` | Reserva, se o primeiro falhar | `deepseek` e `deepseek-flash` |
| `AI_DAILY_LIMIT` | Usos por pessoa por dia | `30` (de 1 a 200) |
| `OPENAI_API_KEY`, `DEEPSEEK_API_KEY` | Chaves dos provedores | sem padrão |

Os provedores aceitos são `openai` e `deepseek`. Um provedor sem chave preenchida é ignorado. Para trocar de modelo, edite o `.env.local` (ou as variáveis da Vercel) e reinicie ou faça um Redeploy.

!!! tip "Como escolher o modelo"
    Em um teste com a mesma questão, o `gpt-5.4-nano` foi o mais rápido e correto (cerca de 2 segundos e pouco mais de cem tokens de resposta). O `deepseek-flash` também acertou, mas gasta tokens "pensando". O `deepseek-v4-pro` consumiu todo o limite de tokens só raciocinando, então não é indicado para este uso. Preços mudam: confira as páginas de preço oficiais antes de decidir.

## Como funciona a rota

`POST /api/ai/explain` com `{ "questionId": "q...", "chosen": 0..4 | null }`.

1. Exige sessão válida (mesma regra das outras rotas). Sem login, responde `401`.
2. Valida o corpo. O cliente **não envia texto livre**: só o identificador da questão e a alternativa marcada. O servidor busca o enunciado no banco de questões. Isso impede usar a rota como um chat aberto e controla o custo.
3. Reserva um uso do dia na tabela `ai_usage` (e-mail, dia no fuso de Cuiabá, contagem), de forma atômica. Acima do limite, responde `429`.
4. Chama o provedor principal e, se falhar, o de reserva. Se os dois falharem, devolve o uso reservado e responde `503`.
5. Responde com o texto, o modelo usado e quantos usos restam.

## Regras do prompt

O texto de instruções pede respostas de até 130 palavras, em português simples, usando somente fatos do enunciado, do gabarito e da nota do banco. Se precisar de um número de lei, artigo ou prazo que não esteja nesses textos, a IA deve mandar o aluno conferir a lei, e nunca inventar. Essas regras ficam em `lib/ai-policy.mjs` e são testadas.

!!! warning "A IA pode errar"
    A explicação é apoio, não fonte. A tela avisa que ela é gerada por IA e que deve ser conferida na lei ou no edital.

## Custo e segurança

- O limite diário por pessoa (`AI_DAILY_LIMIT`) segura o gasto. O login é restrito à lista de e-mails.
- Defina também um limite mensal de gasto na página de cobrança de cada provedor.
- Não coloque as chaves em variáveis `NEXT_PUBLIC_*` nem no GitHub. Na Vercel, cadastre-as em **Environment Variables**, marcadas como sensíveis.
- Se uma chave for exposta, revogue-a no painel do provedor e crie outra.

## Tabela de uso

`db/schema.sql` cria `ai_usage`:

```sql
CREATE TABLE IF NOT EXISTS ai_usage (
  email text    NOT NULL,
  day   date    NOT NULL,
  count integer NOT NULL DEFAULT 0,
  PRIMARY KEY (email, day)
);
```

## Próximos usos possíveis

- **Questões novas** para os tópicos de maior erro, com revisão humana antes de entrarem no banco.
