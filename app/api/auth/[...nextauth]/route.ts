import NextAuth from 'next-auth';
import { authOptions } from '../../../../lib/auth';
import { authEnabled, googleConfigured } from '../../../../lib/auth-policy.mjs';

const handler = NextAuth(authOptions);
async function guardedHandler(...args: Parameters<typeof handler>) {
  if (!authEnabled() || !googleConfigured()) {
    return Response.json({ error: 'AuthenticationUnavailable' }, { status: 503 });
  }
  return handler(...args);
}
export { guardedHandler as GET, guardedHandler as POST };
