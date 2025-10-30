// /api/callback.js (Galutinis Pataisymas - V6)
export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const code = url.searchParams.get('code') || '';

    const clientId = process.env.OAUTH_CLIENT_ID;
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    const redirectUri = process.env.OAUTH_REDIRECT_URI; // Turi būti https://www.banguklinika.lt/api/callback

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

    const token = data.access_token;
    const origin = new URL(redirectUri).origin; // https://www.banguklinika.lt

    // Paruošiame ABU formatus
    const payload = { token: token };
    const originalMsg = { token: token, provider: 'github' };
    const standardMsg = 'authorization:github:success:' + JSON.stringify(payload);

    const html = `<!doctype html><html><body><script>
      (function(){
        var token = ${JSON.stringify(token)};
        var origin = ${JSON.stringify(origin)};
        
        if (window.opener) {
          // METODAS 1: localStorage
          try { 
            localStorage.setItem('decap-cms-auth', JSON.stringify({ token: token })); 
          } catch(e) { /* Tiesiog ignoruojame klaidą */ }
          
          // METODAS 2: Jūsų originalus postMessage (formatas iš Testo Nr. 4)
          window.opener.postMessage(${JSON.stringify(originalMsg)}, origin);
          
          // METODAS 3: Standartinis Decap CMS postMessage
          window.opener.postMessage(${JSON.stringify(standardMsg)}, origin);
          
          // UŽDAROME SU NEDIDELIU VĖLAVIMU
          setTimeout(function() {
            window.close();
          }, 250); // 250ms vėlavimas
        } else {
          document.body.innerText = 'Authorized. You can close this window.';
        }
      })();
    </script></body></html>`;

    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(html);

  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end('Callback error');
  }
}