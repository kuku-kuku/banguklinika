import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const clientId = process.env.OAUTH_CLIENT_ID!;
  const redirectUri = process.env.OAUTH_REDIRECT_URI!; // pvz. https://banguklinika.lt/api/callback
  const scope = process.env.GITHUB_SCOPE || 'repo,user:email';

  const state = Math.random().toString(36).slice(2);
  const authorizeUrl = new URL('https://github.com/login/oauth/authorize');
  authorizeUrl.searchParams.set('client_id', clientId);
  authorizeUrl.searchParams.set('redirect_uri', redirectUri);
  authorizeUrl.searchParams.set('scope', scope);
  authorizeUrl.searchParams.set('state', state);

  res.setHeader('Cache-Control', 'no-store');
  res.redirect(authorizeUrl.toString());
}
