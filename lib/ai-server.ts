// Peças de servidor compartilhadas pelas rotas de IA: cota diária e chamada ao provedor.
import { sql } from './db';
import { PROVIDERS, chatBody } from './ai-policy.mjs';

const today = () => new Intl.DateTimeFormat('sv-SE', { timeZone: 'America/Cuiaba' }).format(new Date());

/** Reserva `cost` usos do dia, de forma atômica. Devolve quantos restam, ou null se estourar o limite. */
export async function reserve(email: string, limit: number, cost = 1) {
  if (cost > limit) return null;
  const rows = await sql()`
    INSERT INTO ai_usage (email, day, count) VALUES (${email}, ${today()}, ${cost})
    ON CONFLICT (email, day) DO UPDATE SET count = ai_usage.count + ${cost}
      WHERE ai_usage.count + ${cost} <= ${limit}
    RETURNING count`;
  return rows.length ? limit - Number(rows[0].count) : null;
}

export async function refund(email: string, cost = 1) {
  await sql()`UPDATE ai_usage SET count = GREATEST(count - ${cost}, 0) WHERE email = ${email} AND day = ${today()}`;
}

export async function ask(provider: string, model: string, messages: { role: string; content: string }[], maxTokens = 600, timeoutMs = 45000) {
  const config = PROVIDERS[provider as keyof typeof PROVIDERS];
  const response = await fetch(config.url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: 'Bearer ' + process.env[config.keyEnv] },
    body: JSON.stringify(chatBody(provider, model, messages, maxTokens)),
    signal: AbortSignal.timeout(timeoutMs),
  });
  if (!response.ok) throw new Error('HTTP ' + response.status);
  const data = await response.json();
  const text = String(data?.choices?.[0]?.message?.content ?? '').trim();
  if (!text) throw new Error('Resposta vazia');
  return text;
}
