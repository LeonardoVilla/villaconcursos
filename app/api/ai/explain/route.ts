import { identify } from '../../../../lib/session';
import { sql } from '../../../../lib/db';
import { questions } from '../../../practice-bank';
import { PROVIDERS, aiCandidates, dailyLimit, chatBody, explainMessages, parseExplainInput } from '../../../../lib/ai-policy.mjs';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const byId = new Map(questions.map(question => [question.id, question]));
const today = () => new Intl.DateTimeFormat('sv-SE', { timeZone: 'America/Cuiaba' }).format(new Date());

/** Reserva um uso do dia. Devolve quantos restam, ou null se o limite já foi atingido. */
async function reserve(email: string, limit: number) {
  const rows = await sql()`
    INSERT INTO ai_usage (email, day, count) VALUES (${email}, ${today()}, 1)
    ON CONFLICT (email, day) DO UPDATE SET count = ai_usage.count + 1
      WHERE ai_usage.count < ${limit}
    RETURNING count`;
  return rows.length ? limit - Number(rows[0].count) : null;
}

async function refund(email: string) {
  await sql()`UPDATE ai_usage SET count = GREATEST(count - 1, 0) WHERE email = ${email} AND day = ${today()}`;
}

async function ask(provider: string, model: string, messages: { role: string; content: string }[]) {
  const config = PROVIDERS[provider as keyof typeof PROVIDERS];
  const response = await fetch(config.url, {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: 'Bearer ' + process.env[config.keyEnv] },
    body: JSON.stringify(chatBody(provider, model, messages)),
    signal: AbortSignal.timeout(45000),
  });
  if (!response.ok) throw new Error('HTTP ' + response.status);
  const data = await response.json();
  const text = String(data?.choices?.[0]?.message?.content ?? '').trim();
  if (!text) throw new Error('Resposta vazia');
  return text;
}

export async function POST(req: Request) {
  const email = await identify();
  if (!email) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const raw = await req.text();
  if (raw.length > 2000) return Response.json({ error: 'TooLarge' }, { status: 413 });
  let input;
  try { input = parseExplainInput(JSON.parse(raw)); } catch { input = null; }
  if (!input) return Response.json({ error: 'BadPayload' }, { status: 400 });
  const question = byId.get(input.questionId);
  if (!question) return Response.json({ error: 'UnknownQuestion' }, { status: 404 });

  const candidates = aiCandidates(process.env, 'explain');
  if (!candidates.length) return Response.json({ error: 'AiUnavailable' }, { status: 503 });

  const limit = dailyLimit();
  const remaining = await reserve(email, limit);
  if (remaining === null) return Response.json({ error: 'LimitReached', limit }, { status: 429 });

  const messages = explainMessages({
    prompt: question.prompt,
    options: question.options,
    chosenIndex: input.chosen,
    explanation: question.explanation,
    topic: question.topic,
  });
  for (const { provider, model } of candidates) {
    try {
      const text = await ask(provider, model, messages);
      return Response.json({ text, model, remaining });
    } catch {
      // tenta o próximo candidato
    }
  }
  await refund(email);
  return Response.json({ error: 'AiUnavailable' }, { status: 503 });
}
