// Vercel serverless (CommonJS)
module.exports = async (req, res) => {
  try {
    const { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, OAUTH_REDIRECT_URI } = process.env;
    if (!OAUTH_CLIENT_ID || !OAUTH_CLIENT_SECRET || !OAUTH_REDIRECT_URI) {
      res.statusCode = 500;
      return res.end('Missing OAuth env vars');
    }

    // Ant Vercel naudok https bazę
    const url = new URL(req.url, `https://${req.headers.host}`);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');

    if (!code) {
      res.statusCode = 400;
      return res.end('Missing code');
    }

    // (Pasirinktinai) CSRF state validacija — jei auth.js nustatei slapuką
    const cookieState = (req.headers.cookie || '')
      .split(';').map(s => s.trim())
      .find(s => s.startsWith('gh_oauth_state='))?.split('=')[1];

    if (cookieState && state && state !== cookieState) {
      res.statusCode = 400;
      return res.end('Invalid state');
    }

    // Exchange code -> access_token
    const ghResp = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
        code,
        redirect_uri: OAUTH_REDIRECT_URI,
      }),
    });

    const data = await ghResp.json();
    if (!ghResp.ok || !data.access_token) {
      res.statusCode = 500;
      return res.end('OAuth failed');
    }

    const token = data.access_token;

    // Grąžinam HTML, kuris perduoda tokeną Decap CMS langui
    const html = `<!doctype html><html><body><script>
      (function(){
        var token=${JSON.stringify(token)};
        // Decap CMS klausosi postMessage iš popup
        if (window.opener) {
          window.opener.postMessage({ token: token, provider: 'github' }, '*');
          try { localStorage.setItem('decap-cms-auth', JSON.stringify({ token: token })); } catch(e){}
          window.close();
        } else {
          document.body.innerText = 'Token received. You can close this window.';
        }
      })();
    </script></body></html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.statusCode = 200;
    res.end(html);
  } catch (e) {
    res.statusCode = 500;
    res.end('Callback error');
  }
};
