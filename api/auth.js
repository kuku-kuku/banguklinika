// CommonJS handleris, su CSRF state slapuku
module.exports = async (req, res) => {
  const clientId = process.env.OAUTH_CLIENT_ID;
  const redirectUri = process.env.OAUTH_REDIRECT_URI; // pvz.: https://banguklinika.lt/api/callback
  const scope = process.env.GITHUB_SCOPE || 'repo,user:email';

  if (!clientId || !redirectUri) {
    res.statusCode = 500;
    return res.end('Missing OAUTH_CLIENT_ID or OAUTH_REDIRECT_URI');
  }

  // CSRF state
  const state = Math.random().toString(36).slice(2);
  res.setHeader(
    'Set-Cookie',
    `gh_oauth_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600`
  );

  const authorizeUrl = new URL('https://github.com/login/oauth/authorize');
  authorizeUrl.searchParams.set('client_id', clientId);
  authorizeUrl.searchParams.set('redirect_uri', redirectUri);
  authorizeUrl.searchParams.set('scope', scope);
  authorizeUrl.searchParams.set('state', state);

  res.setHeader('Cache-Control', 'no-store');
  res.statusCode = 302;
  res.setHeader('Location', authorizeUrl.toString());
  res.end();
};
