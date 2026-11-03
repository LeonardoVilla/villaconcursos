/** Authentication is activated explicitly after credentials have been configured. */
export function authEnabled(env = process.env) {
  return env.AUTH_ENABLED === 'true';
}

export function googleConfigured(env = process.env) {
  return Boolean(env.GOOGLE_CLIENT_ID?.trim() && env.GOOGLE_CLIENT_SECRET?.trim() && (env.NEXTAUTH_SECRET?.trim() || env.AUTH_SECRET?.trim()));
}

/** Restricted access is the default; an empty allowlist denies every account. */
export function emailAllowed(email, env = process.env) {
  if (typeof email !== 'string' || !email.trim()) return false;
  if (env.AUTH_ACCESS_MODE === 'public') return true;
  const allowed = (env.AUTH_ALLOWED_EMAILS || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
  return allowed.includes(email.trim().toLowerCase());
}

export function googleIdentityAllowed(profile, env = process.env) {
  return profile?.email_verified === true && emailAllowed(profile.email, env);
}
