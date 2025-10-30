import { parse } from 'cookie'; // Būtina importuoti 'cookie' paketą

export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const code = url.searchParams.get('code') || '';
    const state = url.searchParams.get('state') || ''; // Gauname 'state' iš URL

    // --- PRIDĖTAS SAUGUMO PATIKRINIMAS (STATE) ---
    const cookies = parse(req.headers.cookie || '');
    const savedState = cookies.gh_oauth_state;

    // Išvalome slapuką, kad jo nebenaudotų
    res.setHeader('Set-Cookie', `gh_oauth_state=; Max-Age=0; Path=/; HttpOnly; Secure; SameSite=Lax`);

    if (!state || !savedState || state !== savedState) {
      res.statusCode = 401;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      const msg = 'authorization:github:error:' + JSON.stringify({ message: 'Invalid state' });
      res.end(`<!doctype html><html><body><script>
        (function(){
          if (window.opener) { window.opener.postMessage(${JSON.stringify(msg)}, '*'); window.close(); }
          else { document.body.innerText = 'Invalid state'; }
        })();
      </script></body></html>`);
      return;
    }
    // --- SAUGUMO PATIKRINIMO PABAIGA ---

    const clientId = process.env.OAUTH_CLIENT_ID;
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    const redirectUri = process.env.OAUTH_REDIRECT_URI; // Turi būti: https://banguklinika.lt/api/callback

    if (!clientId || !clientSecret || !redirectUri) {
        throw new Error('Missing OAUTH env vars');
    }

    if (!code) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      const msg = 'authorization:github:error:' + JSON.stringify({ message: 'Missing code' });
      res.end(`<!doctype html><html><body><script>
        (function(){
          if (window.opener) { window.opener.postMessage(${JSON.stringify(msg)}, '*'); window.close(); }
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
      const msg = 'authorization:github:error:' + JSON.stringify({ message: 'OAuth failed' });
      res.end(`<!doctype html><html><body><script>
        (function(){
          if (window.opener) { window.opener.postMessage(${JSON.stringify(msg)}, '*'); window.close(); }
          else { document.body.innerText = 'OAuth failed'; }
        })();
      </script></body></html>`);
      return;
    }
    
    // --- PATOBULINTAS postMessage ---
    // Nustatome tikslų adresą (origin), kuriam siųsime raktą.
    // Tai veiks TIK JEI 'redirectUri' yra teisingas (be www).
    const origin = new URL(redirectUri).origin; // pvz., https://banguklinika.lt

    const html = `<!doctype html><html><body><script>
      (function(){
        // Naudojame JSON.stringify, kad saugiai perduotume raktą
        var payload = { token: ${JSON.stringify(data.access_token)} };
        var msg = 'authorization:github:success:' + JSON.stringify(payload);
        
        if (window.opener) {
          // Siunčiame žinutę TIK į teisingą 'origin' (adresą)
          window.opener.postMessage(msg, ${JSON.stringify(origin)});
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
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    const msg = 'authorization:github:error:' + JSON.stringify({ message: (err && err.message) || 'Server error' });
    res.end(`<!doctype html><html><body><script>
      (function(){
        if (window.opener) { window.opener.postMessage(${JSON.stringify(msg)}, '*'); window.close(); }
        else { document.body.innerText = 'Server error'; }
      })();
    </script></body></html>`);
  }
}