import { identify } from '../../../lib/session';
import { sql } from '../../../lib/db';

export const dynamic = 'force-dynamic';
const MAX_BYTES = 256 * 1024;
const contests = new Set(['sema', 'camara']);

export async function GET(req: Request) {
  const email = await identify();
  if (!email) return Response.json({ error: 'Unauthorized' }, { status: 401 });
  const contest = new URL(req.url).searchParams.get('contest') || '';
  if (!contests.has(contest)) return Response.json({ error: 'BadContest' }, { status: 400 });
  const rows = await sql()`SELECT data, updated_at FROM study_progress WHERE email = ${email} AND contest = ${contest}`;
  if (!rows.length) return Response.json({ data: null, updatedAt: 0 });
  return Response.json({ data: rows[0].data, updatedAt: Number(rows[0].updated_at) });
}

export async function PUT(req: Request) {
  const email = await identify();
  if (!email) return Response.json({ error: 'Unauthorized' }, { status: 401 });
  const raw = await req.text();
  if (raw.length > MAX_BYTES) return Response.json({ error: 'TooLarge' }, { status: 413 });
  let body: { contest?: string; data?: { version?: number; profiles?: unknown }; updatedAt?: number };
  try { body = JSON.parse(raw); } catch { return Response.json({ error: 'BadJson' }, { status: 400 }); }
  const { contest = '', data, updatedAt } = body;
  if (!contests.has(contest) || !data || data.version !== 1 || typeof data.profiles !== 'object' || !data.profiles || !Number.isFinite(updatedAt)) {
    return Response.json({ error: 'BadPayload' }, { status: 400 });
  }
  // Last write wins, but never let an older device overwrite newer progress.
  await sql()`
    INSERT INTO study_progress (email, contest, data, updated_at)
    VALUES (${email}, ${contest}, ${JSON.stringify(data)}::jsonb, ${updatedAt})
    ON CONFLICT (email, contest) DO UPDATE
      SET data = EXCLUDED.data, updated_at = EXCLUDED.updated_at
      WHERE study_progress.updated_at <= EXCLUDED.updated_at`;
  return Response.json({ ok: true });
}
