import { identify } from '../../../../lib/session';
import { ask, reserve, refund } from '../../../../lib/ai-server';
import { aiCandidates, dailyLimit, essayMessages, parseEssayInput, ESSAY_COST } from '../../../../lib/ai-policy.mjs';
import { essayTasks, type EssayKey } from '../../../essay-prompts';

export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function POST(req: Request) {
  const email = await identify();
  if (!email) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const raw = await req.text();
  if (raw.length > 20000) return Response.json({ error: 'TooLarge' }, { status: 413 });
  let input;
  try { input = parseEssayInput(JSON.parse(raw)); } catch { input = null; }
  if (!input) return Response.json({ error: 'BadPayload' }, { status: 400 });
  const task = essayTasks[input.task as EssayKey];

  const candidates = aiCandidates(process.env, 'essay');
  if (!candidates.length) return Response.json({ error: 'AiUnavailable' }, { status: 503 });

  const limit = dailyLimit();
  const remaining = await reserve(email, limit, ESSAY_COST);
  if (remaining === null) return Response.json({ error: 'LimitReached', limit, cost: ESSAY_COST }, { status: 429 });

  const messages = essayMessages({ prompt: task.prompt, review: task.review, text: input.text });
  for (const { provider, model } of candidates) {
    try {
      const text = await ask(provider, model, messages, 1100, 50000);
      return Response.json({ text, model, remaining });
    } catch {
      // tenta o próximo candidato
    }
  }
  await refund(email, ESSAY_COST);
  return Response.json({ error: 'AiUnavailable' }, { status: 503 });
}
