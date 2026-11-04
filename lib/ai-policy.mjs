// Regras puras da integração com IA: escolha de provedor e modelo, limite diário e montagem do prompt.
// Fica separado das rotas para poder ser testado sem rede e sem chaves.

export const PROVIDERS = {
  openai: { url: 'https://api.openai.com/v1/chat/completions', keyEnv: 'OPENAI_API_KEY' },
  deepseek: { url: 'https://api.deepseek.com/chat/completions', keyEnv: 'DEEPSEEK_API_KEY' },
};

const DEFAULTS = {
  explain: { provider: 'openai', model: 'gpt-5.4-nano' },
  essay: { provider: 'openai', model: 'gpt-5.4-mini' },
  fallback: { provider: 'deepseek', model: 'deepseek-flash' },
};

const clean = value => (typeof value === 'string' ? value.trim() : '');

function pick(env, prefix, fallback) {
  const provider = clean(env[`AI_${prefix}_PROVIDER`]).toLowerCase() || fallback.provider;
  const model = clean(env[`AI_${prefix}_MODEL`]) || fallback.model;
  return { provider, model };
}

/** Candidatos em ordem de tentativa. Só entram provedores conhecidos e com chave preenchida. */
export function aiCandidates(env = process.env, kind = 'explain') {
  const wanted = [pick(env, kind.toUpperCase(), DEFAULTS[kind] ?? DEFAULTS.explain), pick(env, 'FALLBACK', DEFAULTS.fallback)];
  const seen = new Set();
  return wanted.filter(item => {
    const known = PROVIDERS[item.provider];
    if (!known || !clean(env[known.keyEnv])) return false;
    const key = `${item.provider}:${item.model}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/** Limite de usos por pessoa por dia, sempre entre 1 e 200. */
export function dailyLimit(env = process.env) {
  const value = Number.parseInt(clean(env.AI_DAILY_LIMIT), 10);
  if (!Number.isFinite(value) || value < 1) return 30;
  return Math.min(value, 200);
}

/** Corpo da requisição de chat, ajustado às diferenças entre os provedores e as famílias de modelo. */
export function chatBody(provider, model, messages, maxTokens = 600) {
  const body = { model, messages };
  if (provider === 'openai') {
    body.max_completion_tokens = maxTokens;
    // Só a família GPT-5 e as séries "o" aceitam o ajuste de raciocínio.
    if (/^(gpt-5|o\d)/.test(model)) body.reasoning_effort = 'low';
  } else {
    // O DeepSeek gasta parte dos tokens pensando antes de responder, então precisa de folga.
    body.max_tokens = Math.max(maxTokens, 1500);
  }
  return body;
}

const SYSTEM = [
  'Você é um professor experiente de concursos públicos brasileiros.',
  'Responda em português do Brasil, em até 130 palavras, com linguagem simples.',
  'Use somente fatos presentes no enunciado, no gabarito e na nota do banco de questões.',
  'Se precisar de um número de lei, de artigo ou de prazo que não esteja nesses textos, diga para o aluno conferir no texto da lei, em vez de afirmar.',
  'Nunca invente números de lei, artigos, prazos ou súmulas.',
  'Explique por que a alternativa correta está certa e, se o aluno errou, por que a alternativa escolhida está errada.',
  'Termine com uma dica curta para não errar de novo.',
].join(' ');

/** Mensagens para explicar uma questão do banco. `chosenIndex` é o índice da alternativa marcada (0 = correta) ou null. */
export function explainMessages({ prompt, options, chosenIndex, explanation, topic }) {
  const correct = options[0];
  const chosen = Number.isInteger(chosenIndex) && options[chosenIndex] !== undefined ? options[chosenIndex] : null;
  const lines = [
    `Tópico: ${topic}`,
    `Enunciado: ${prompt}`,
    `Alternativa correta: ${correct}`,
    chosen === null ? 'O aluno não marcou alternativa.' : chosenIndex === 0 ? 'O aluno acertou. Reforce o raciocínio.' : `Alternativa marcada pelo aluno (errada): ${chosen}`,
    explanation ? `Nota do banco de questões: ${explanation}` : '',
  ].filter(Boolean);
  return [
    { role: 'system', content: SYSTEM },
    { role: 'user', content: lines.join('\n') },
  ];
}

/** Valida o corpo recebido pela rota de explicação. */
export function parseExplainInput(value) {
  if (!value || typeof value !== 'object') return null;
  const { questionId, chosen } = value;
  if (typeof questionId !== 'string' || !/^q[0-9a-z]{1,12}$/.test(questionId)) return null;
  if (chosen !== null && chosen !== undefined && !(Number.isInteger(chosen) && chosen >= 0 && chosen <= 4)) return null;
  return { questionId, chosen: chosen ?? null };
}
