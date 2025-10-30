export default async function handler(req, res) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const code = url.searchParams.get('code') || '';

  const clientId = process.env.OAUTH_CLIENT_ID;
  const clientSecret = process.env.OAUTH_CLIENT_SECRET;
  const redirectUri = process.env.OAUTH_REDIRECT_URI;

  if (!code) {
    res.statusCode = 400;
    res.end('Missing code');
    return;
  }

  const r = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code, redirect_uri: redirectUri }),
  });
  const data = await r.json();

  if (!data.access_token) {
    res.statusCode = 401;
    res.end('OAuth failed');
    return;
  }

  const html = `<!doctype html><html><body><script>
    (function(){
      function send(){
        if (window.opener) {
          window.opener.postMessage({ token: '${data.access_token}', provider: 'github' }, '*');
          window.close();
        } else {
          document.body.innerText = 'Token received. You can close this window.';
        }
      }
      send(); setTimeout(send, 300);
    })();
  </script></body></html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(html);
}
