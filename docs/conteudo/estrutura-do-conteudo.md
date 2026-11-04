# Estrutura do conteúdo

Todo o conteúdo de estudo é estático, versionado no repositório e carregado pelo cliente.

## Editais

| Arquivo | Conteúdo |
|---|---|
| `app/data.json` | Edital da SEMA-MT: grupos (matérias) com `id`, `title`, `category` (`comum`, `ti`, `direito`, `transversal`), `topics` e as pílulas de áudio de TI |
| `app/camara-data.json` | Edital da Câmara de Cuiabá, em lista de grupos com a mesma forma. Os `id` começam com `cmc-` |

Cada tópico tem `id` (por exemplo `trans6-24`, `cmc-leg-3`) e `text` (o item do edital). O `id` do tópico é a chave que liga todo o resto.

## Camadas de estudo

A aba **Materiais** reúne quatro camadas, todas vinculadas a uma matéria ou a um tópico:

| Camada | Arquivos | Vinculada a | Cobertura |
|---|---|---|---|
| Aula por tópico | `topic-lessons.ts`, `topic-lessons-extra.ts`, `lessons-*.ts` | `id` do tópico | 100% dos tópicos |
| Texto de revisão | `study-readings.ts`, `study-readings-extra.ts` | `id` do grupo | Todas as matérias |
| Referências | `study-materials.ts` | `id` do grupo | Todas as matérias, salvo `atual` e `cmc-leg` |
| Exercício de leitura | `reading-exercises.ts` | Título do texto de revisão | Parcial |

Além delas: `mt-lessons.ts` guarda a linha do tempo e a geografia de Mato Grosso usadas na aba de materiais.

### Linha do tempo de Mato Grosso

Na matéria de História e Geografia de Mato Grosso, a aba de materiais mostra a linha do tempo de duas formas: uma versão interativa (`MatoGrossoTimeline`, em `practice.tsx`), com a lista de eventos à direita e o detalhe do evento escolhido à esquerda, e a lista corrida abaixo dela. As duas leem `mtTimeline`. Para acrescentar um evento, inclua `{ date, title, text }` em `mt-lessons.ts`. Em telas estreitas, a lista de eventos aparece acima do detalhe.

## Aula por tópico

```ts
type Lesson = {
  sections: { title: string; text: string }[];
  question: string;
  answer: string;
  sources: { title: string; url: string }[];
};
```

Os arquivos `lessons-*.ts` usam o helper `L` para escrever menos:

```ts
'cmc-leg-3': L(
  [['Título da seção', 'Texto da seção.']],
  'Pergunta de revisão?',
  'Resposta comentada.',
  [['Nome da fonte', 'https://exemplo.gov.br']],
),
```

`topic-lessons-extra.ts` junta os arquivos `lessons-*.ts`. Em `practice.tsx`, o conjunto final é `{ ...extraLessons, ...baseLessons }`: se o mesmo `id` existir nos dois, vale o de `topic-lessons.ts`.

| Arquivo | Escopo |
|---|---|
| `topic-lessons.ts` | Aulas originais de TI, Direito e transversais da SEMA |
| `lessons-sema-comum.ts` | Matérias comuns da SEMA (Português, MT, ética, atualidades, legislação) |
| `lessons-sema-amb.ts` | Transversais ambientais e outras da SEMA |
| `lessons-cmc-comum.ts` | Matérias comuns da Câmara |
| `lessons-cmc-adm.ts` | Direito e Administração da Câmara, incluindo a legislação municipal |
| `lessons-cmc-ti.ts` | TI da Câmara |

## Banco de questões

As questões ficam em `practice-bank.ts` (banco original) e em `practice-extra-a.ts`, `-b.ts`, `-c.ts` e `-d.ts`. Cada linha segue o formato:

```
enunciado|resposta correta|errada 1|errada 2|errada 3|errada 4|explicação
```

A **resposta correta vem sempre primeiro**. O player embaralha as alternativas. Os blocos são agrupados por matéria:

```ts
['cmc-leg', 'Legislação municipal de Cuiabá', `
linha 1
linha 2
`],
```

O primeiro elemento é o `id` do grupo (ou ids separados por espaço), e o segundo é o nome do tópico exibido.

## Textos de revisão

```ts
{ groups: 'dir4 trans6', title: 'Título', text: ['parágrafo 1', 'parágrafo 2'] }
```

## Referências

```ts
{ groups: 'trans1', title: 'Nome', publisher: 'Órgão', url: 'https://...', guide: 'Como usar esta fonte.' }
```
