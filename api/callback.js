// /api/callback.js (Testas Nr. 7 - Rankinis valdymas)
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

    // Paruošiame ABU formatus
    const payload = { token: token };
    const originalMsg = { token: token, provider: 'github' };
    const standardMsg = 'authorization:github:success:' + JSON.stringify(payload);

    // HTML kodas su mygtuku, kuris NEUŽSIDARO
    const html = `<!doctype html><html><body style="font-family: sans-serif; padding: 20px;">
        <h2>Sėkmė! Gavome raktą.</h2>
        <p>Raktas: <b>...${token.slice(-6)}</b></p>
        <p>Adresatas: <b>${origin}</b></p>
        <hr>
        
        <button id="myButton" style="font-size: 16px; padding: 10px 20px;">
          1. Bandyti siųsti raktą į Admin Panelę
        </button>
        <p id="status" style="color: green;"></p>
        
        <hr>
        <h3>Ką daryti toliau:</h3>
        <ol>
            <li>Paspauskite mygtuką aukščiau.</li>
            <li>Pažiūrėkite į pagrindinį '/admin/' langą. Ar jis persikrovė ir atidarė panelę?</li>
            <li style="font-weight: bold;">Jei NE: palikite šį langą atidarytą ir <b>rankiniu būdu atnaujinkite (Refresh / F5)</b> pagrindinį '/admin/' langą.</li>
        </ol>

        <script>
            var token = ${JSON.stringify(token)};
            var origin = ${JSON.stringify(origin)};
            var originalMsg = { token: token, provider: 'github' };
            var standardMsg = 'authorization:github:success:' + JSON.stringify(payload);

            document.getElementById('myButton').onclick = function() {
                document.getElementById('status').innerText = 'Siunčiama...';
                
                // 1 METODAS: localStorage (svarbiausias rankiniam atnaujinimui)
                try { 
                  localStorage.setItem('decap-cms-auth', JSON.stringify({ token: token })); 
                } catch(e) { /* Ignoruojame */ }
                
                // 2 METODAS: Jūsų originalus postMessage
                window.opener.postMessage(originalMsg, origin);
                
                // 3 METODAS: Standartinis Decap CMS postMessage
                window.opener.postMessage(standardMsg, origin);

                document.getElementById('status').innerText = 'Išsiųsta! Dabar patikrinkite pagrindinį langą arba bandykite jį atnaujinti rankiniu būdu (F5).';
                document.getElementById('myButton').disabled = true;
            };
        </script>
    </body></html>`;

    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(html);

  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end('Callback error');
  }
}