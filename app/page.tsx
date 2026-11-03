import { createHash } from 'node:crypto';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import Dashboard from './dashboard';
import { authOptions } from '../lib/auth';
import { authEnabled, googleConfigured, emailAllowed } from '../lib/auth-policy.mjs';

export const dynamic = 'force-dynamic';
export default async function Home() {
  // Explicit staged rollout: the existing study app remains available until activation.
  if (!authEnabled()) return <Dashboard />;
  // Once activated, incomplete configuration never grants anonymous access.
  if (!googleConfigured()) redirect('/login');
  const session = await getServerSession(authOptions);
  const email = session?.user?.email;
  if (!email || !emailAllowed(email)) redirect('/login');
  const identity = createHash('sha256').update(email.trim().toLowerCase()).digest('hex');
  return <Dashboard key={identity} storageKey={'sema-estudos-v1-account-'+identity} account={{name:session.user.name,email}} />;
}
