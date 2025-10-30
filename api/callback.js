// /api/callback.js  (ESM)
export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const code = url.searchParams.get('code') || '';

    const clientId = process.env.OAUTH_CLIENT_ID;
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    const redirectUri = process.env.OAUTH_REDIRECT_URI; // https://www.banguklinika.lt/api/callback

    if (!code) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(`<!doctype html><html><body><script>
        (function(){
          var msg = 'authorization:github:error:' + JSON.stringify({ message: 'Missing code' });
          if (window.opener) { window.opener.postMessage(msg, '*'); window.close(); }
          else { document.body.innerText = 'Missing code'; }
        })();
      </script></body></html>`);
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
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.end(`<!doctype html><html><body><script>
        (function(){
          var msg = 'authorization:github:error:' + JSON.stringify({ message: 'OAuth failed' });
          if (window.opener) { window.opener.postMessage(msg, '*'); window.close(); }
          else { document.body.innerText = 'OAuth failed'; }
        })();
      </script></body></html>`);
      return;
    }

    const html = `<!doctype html><html><body><script>
      (function(){
        var payload = { token: '${data.access_token}' };
        var msg = 'authorization:github:success:' + JSON.stringify(payload);
        function send(){ 
          if (window.opener) { window.opener.postMessage(msg, '*'); window.close(); }
          else { document.body.innerText = 'Authorized. You can close this window.'; }
        }
        send(); setTimeout(send, 250); setTimeout(send, 1000);
      })();
    </script></body></html>`;

    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(html);
  } catch (err) {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(`<!doctype html><html><body><pre>${(err && err.message) || err}</pre></body></html>`);
  }
}
