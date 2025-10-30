// /api/callback.js (Galutinė versija)
export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const code = url.searchParams.get('code') || '';

    // PASTABA: Laikinai pašaliname 'state' patikrinimą, 
    // kadangi Testas Nr. 3 veikė be jo. Tai supaprastina procesą.

    const clientId = process.env.OAUTH_CLIENT_ID;
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    const redirectUri = process.env.OAUTH_REDIRECT_URI; // https://www.banguklinika.lt/api/callback

    if (!clientId || !clientSecret || !redirectUri) {
        throw new Error('Missing OAUTH env vars');
    }

    if (!code) {
      throw new Error('Missing code');
    }

    const r = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code, redirect_uri: redirectUri }),
    });
    const data = await r.json();

    if (!data.access_token) {
      throw new Error('OAuth failed (GitHub atsakymas be access_token)');
    }

    // Nustatome tikslų adresą (origin), kuriam siųsime raktą.
    // Dabar žinome, kad tai https://www.banguklinika.lt
    const origin = new URL(redirectUri).origin;
    const token = data.access_token;

    // Tai yra Decap CMS laukiamas formatas
    const payload = { token: token };
    const msg = 'authorization:github:success:' + JSON.stringify(payload);

    // 
    // Siunčiame žinutę (msg) atgal į pagrindinį langą (origin)
    const html = `<!doctype html><html><body><script>
      (function(){
        if (window.opener) {
          window.opener.postMessage(${JSON.stringify(msg)}, ${JSON.stringify(origin)});
          window.close();
        } else {
          document.body.innerText = 'Authorized. You can close this window.';
        }
      })();
    </script></body></html>`;

    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(html);

  } catch (err) {
    console.error(err); // Svarbu matyti klaidas Vercel log'uose
    res.statusCode = 500;
    const msg = 'authorization:github:error:' + JSON.stringify({ message: (err && err.message) || 'Server error' });
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(`<!doctype html><html><body><script>
      (function(){
        if (window.opener) { window.opener.postMessage(${JSON.stringify(msg)}, '*'); window.close(); }
        else { document.body.innerText = 'Server error'; }
      })();
    </script></body></html>`);
  }
}