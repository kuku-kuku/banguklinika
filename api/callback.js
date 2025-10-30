// /api/callback.js (Testas Nr. 4 - Klausymosi testas)
export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const code = url.searchParams.get('code') || '';

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

    const token = data.access_token;
    const origin = new URL(redirectUri).origin; // https://www.banguklinika.lt

    // Paruošiame HTML kodą, kuris bus "popup" lange
    const html = `<!doctype html><html><body><script>
      (function(){
        var token = ${JSON.stringify(token)};
        var origin = ${JSON.stringify(origin)};
        
        // Išspausdiname info į patį "popup" langą
        document.body.innerHTML = '<h1>Testas Nr. 4: Siunčiama...</h1>' +
          '<p>Adresatas (Origin): <b>' + origin + '</b></p>' +
          '<p>Raktas (Token): <b>...' + token.slice(-6) + '</b></p>' +
          '<p style="color:red; font-weight:bold;">ŠIS LANGAS NEUŽSIDARYS.</p>' +
          '<p>Patikrinkite <b>PAGRINDINIO</b> (/admin/) lango KONSOLĘ (F12).</p>';
        
        if (window.opener) {
          // Siunčiame žinutę su mažu vėlavimu, kad išvengtume "race condition"
          setTimeout(function() {
            document.body.innerHTML += '<p style="color:green;">SIUNČIAMA ŽINUTĖ...</p>';
            
            // Naudojame JŪSŲ originalų formatą
            window.opener.postMessage({ token: token, provider: 'github' }, origin);
            
            // Bandome ir "localStorage" metodą kaip atsarginį
            try { 
              localStorage.setItem('decap-cms-auth', JSON.stringify({ token: token })); 
              document.body.innerHTML += '<p style="color:green;">PABANDYTA ĮRAŠYTI Į localStorage.</p>';
            } catch(e) {
              document.body.innerHTML += '<p style="color:orange;">Nepavyko įrašyti į localStorage.</p>';
            }

            document.body.innerHTML += '<p style="color:green;">IŠSIŲSTA.</p>';
          }, 500); // 500ms vėlavimas
        } else {
          document.body.innerHTML += '<p style="color:red;">KLAIDA: "window.opener" nerastas.</p>';
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