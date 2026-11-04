import { neon } from '@neondatabase/serverless';

// Pooled connection string: the app runs as short-lived route handlers.
export function sql() {
  const url = process.env.DATABASE_URL;
  if (!url) throw new Error('DATABASE_URL is not set');
  return neon(url);
}
