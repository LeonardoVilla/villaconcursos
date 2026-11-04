# Fluxo de dados

## Formato do progresso

O progresso é um objeto JSON com versão 1 e dois perfis:

```ts
type Entry = { done: boolean; date?: string; note?: string };
type Progress = {
  version: 1;
  profiles: Record<'ti' | 'direito', {
    topics: Record<string, Entry>;     // tópicos do edital marcados
    sessions: Record<string, boolean>; // blocos diários, chave "AAAA-MM-DD-n"
    heard: Record<string, boolean>;    // pílulas de áudio ouvidas
    quiz?: Record<string, QuizStat>;   // histórico de acertos e erros por questão
  }>;
};
type QuizStat = { r: number; w: number; last: 'r' | 'w'; ts: number }; // acertos, erros, último resultado e data
```

O histórico `quiz` é opcional: progressos antigos continuam válidos. A chave é o identificador da questão, calculado por um hash do enunciado e das alternativas (`stableId`, em `practice-bank.ts`), e não pela posição no banco, então acrescentar questões novas não apaga o histórico. Mudar o texto de uma questão muda o identificador e zera o histórico dela. Por isso as questões precisam ser únicas, e um teste verifica isso.

O dashboard valida o formato com `isProgress` antes de aceitar dados locais, do banco ou de um backup.

## Chaves no `localStorage`

| Chave | Conteúdo |
|---|---|
| `sema-estudos-v1` | Progresso da SEMA sem login (compatível com versões antigas) |
| `sema-estudos-v1-account-<hash>` | Progresso da SEMA de uma conta (hash SHA-256 do e-mail) |
| `<chave>-camara-cuiaba-2026` | Progresso da Câmara, com o mesmo sufixo de conta |
| `<chave>-ts` | Data da última alteração local, em milissegundos |

## Sincronização com o banco

Só ocorre quando há conta logada.

1. Ao abrir, o painel lê o progresso local.
2. Pede ao servidor `GET /api/progress?contest=sema` ou `camara`.
3. Compara a data do servidor com a data local (`-ts`):
    - servidor mais novo: usa o do servidor e atualiza o local;
    - local mais novo: envia o local ao servidor;
    - servidor vazio e local existente: envia o local.
4. A cada alteração, grava no `localStorage` e envia ao servidor com atraso de 1 segundo (*debounce*).
5. O servidor só aceita a gravação se a data enviada for maior ou igual à guardada.

Se a rede ou o banco falharem, o painel mostra um aviso e continua com o progresso local. A próxima alteração tenta de novo.

## Backup manual

A aba **Edital e backup** exporta e importa o progresso em JSON. Continua útil para levar dados entre navegadores sem login.
