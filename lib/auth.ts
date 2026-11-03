import type { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { emailAllowed, googleIdentityAllowed, authEnabled, googleConfigured } from './auth-policy.mjs';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET || process.env.AUTH_SECRET,
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    authorization: { params: { scope: 'openid email profile', prompt: 'select_account' } },
  })],
  session: { strategy: 'jwt', maxAge: 7 * 24 * 60 * 60 },
  pages: { signIn: '/login', error: '/login' },
  callbacks: {
    async signIn({ account, profile }) {
      return authEnabled() && googleConfigured() && account?.provider === 'google' && googleIdentityAllowed(profile);
    },
    async jwt({ token, account, profile }) {
      if (account?.provider === 'google' && profile) {
        token.googleVerified = googleIdentityAllowed(profile);
      }
      return token;
    },
    async session({ session, token }) {
      // Expose the minimum identity needed by the dashboard, never OAuth tokens.
      if (session.user) {
        if (token.googleVerified !== true || !emailAllowed(token.email)) {
          session.user = undefined;
        }
      }
      return session;
    },
  },
};
