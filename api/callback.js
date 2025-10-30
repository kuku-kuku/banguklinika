export default async function handler(req, res) {
  try {
    const { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, OAUTH_REDIRECT_URI } = process.env;
    if (!OAUTH_CLIENT_ID || !OAUTH_CLIENT_SECRET || !OAUTH_REDIRECT_URI) {
      res.statusCode = 500;
      return res.end('Missing OAUTH env vars');
    }

    const url = new URL(req.url, `https://${req.headers.host}`);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');

    if (!code) {
      res.statusCode = 400;
      return res.end('Missing code');
    }

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

    const data = await ghResp.json().catch(() => ({}));
    if (!data.access_token) {
      res.statusCode = 500;
      return res.end('OAuth failed');
    }

    const html = `<!doctype html><html><body><script>
      (function(){
        var token=${JSON.stringify(data.access_token)};
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
    res.end(html);
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.end('Callback error');
  }
}
