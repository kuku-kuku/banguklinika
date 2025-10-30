// Force Node runtime on Vercel
module.exports.config = { runtime: 'nodejs20.x', regions: ['arn1', 'fra1', 'iad1'] };

module.exports = async (req, res) => {
  try {
    const { OAUTH_CLIENT_ID, OAUTH_REDIRECT_URI } = process.env;
    const scope = process.env.GITHUB_SCOPE || 'repo,user:email';

    if (!OAUTH_CLIENT_ID || !OAUTH_REDIRECT_URI) {
      res.statusCode = 500;
      return res.end('Missing OAUTH env vars');
    }

    // naudok https bazę ant Vercel
    const authorizeUrl = new URL('https://github.com/login/oauth/authorize');
    const state = Math.random().toString(36).slice(2);

    authorizeUrl.searchParams.set('client_id', OAUTH_CLIENT_ID);
    authorizeUrl.searchParams.set('redirect_uri', OAUTH_REDIRECT_URI);
    authorizeUrl.searchParams.set('scope', scope);
    authorizeUrl.searchParams.set('state', state);

    // (nebūtina) įrašom state į slapuką 5 min.
    res.setHeader('Set-Cookie', `gh_oauth_state=${state}; Max-Age=300; Path=/; HttpOnly; Secure; SameSite=Lax`);
    res.setHeader('Cache-Control', 'no-store');
    res.statusCode = 302;
    res.setHeader('Location', authorizeUrl.toString());
    res.end();
  } catch (e) {
    res.statusCode = 500;
    res.end('Auth error');
  }
};
