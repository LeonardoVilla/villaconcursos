import { identify } from '../../../../lib/session';
import { ask, reserve, refund } from '../../../../lib/ai-server';
import { questions } from '../../../practice-bank';
import { aiCandidates, dailyLimit, explainMessages, parseExplainInput } from '../../../../lib/ai-policy.mjs';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const byId = new Map(questions.map(question => [question.id, question]));

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
