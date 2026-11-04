# Como adicionar conteúdo

## Antes de escrever

1. Identifique o `id` do tópico em `app/data.json` ou `app/camara-data.json`.
2. Leia o texto oficial da norma. Se não puder, diga isso na própria aula, como "confira a versão vigente".
3. Escreva em português claro, em frases curtas.

## Nova aula

1. Abra o arquivo `lessons-*.ts` da matéria (veja [Estrutura](estrutura-do-conteudo.md)).
2. Acrescente uma entrada com o helper `L`, usando o `id` do tópico como chave.
3. Inclua de 1 a 3 seções, uma pergunta de revisão com resposta e pelo menos uma fonte.

Se o `id` já existir em `topic-lessons.ts`, a aula dele prevalece sobre a de `lessons-*.ts`. Para trocar a aula, edite o arquivo onde ela está.

## Novas questões

1. Ache o bloco da matéria em `practice-extra-*.ts` (ou crie um bloco novo).
2. Acrescente linhas no formato `enunciado|correta|errada1|errada2|errada3|errada4|explicação`.
3. Mantenha **exatamente seis campos separados por `|`**, com a correta em primeiro. Não use `|` dentro do texto.

!!! tip "Boas questões"
    Use alternativas plausíveis, mesmo comprimento aproximado e uma explicação que cite o artigo da norma.

## Novo texto de revisão ou referência

Acrescente a entrada em `study-readings-extra.ts` ou `study-materials.ts`. Para a referência, teste o link antes (veja abaixo).

## Verificar links

O Planalto bloqueia conexões com cabeçalho de navegador e limita rajadas. Para testar muitos endereços:

- Teste em lotes pequenos e com pausa entre as chamadas.
- No Windows, `Invoke-WebRequest -Method Head` sem cabeçalho `User-Agent` personalizado funciona bem para o Planalto.
- IBGE, ISO e OHCHR respondem `403` a robôs, mas costumam abrir no navegador. Confira manualmente.

## Antes de enviar

```sh
npx tsc --noEmit
npm test
npm run build
```

O teste de conteúdo falha se um tópico ficar sem aula, se uma matéria ficar com menos de 10 questões ou se uma matéria ficar sem texto de revisão ou referência.
