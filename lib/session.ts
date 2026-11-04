import { getServerSession } from 'next-auth';
import { authOptions } from './auth';
import { authEnabled, googleConfigured, emailAllowed } from './auth-policy.mjs';

/** E-mail da sessão (em minúsculas) quando o login está ativo e a conta é permitida; senão, null. */
export async function identify() {
  if (!authEnabled() || !googleConfigured()) return null;
  const session = await getServerSession(authOptions);
  const email = session?.user?.email?.trim().toLowerCase();
  return email && emailAllowed(email) ? email : null;
}
