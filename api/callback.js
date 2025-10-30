// /api/callback.js (Laikina DEBUG versija)
export default async function handler(req, res) {
  let debugHtml = '<h1>Testas Nr. 3: "Callback" langas</h1>';
  
  try {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const code = url.searchParams.get('code') || '';
    debugHtml += `<p>Gautas "code": <b>${code || 'TRŪKSTA'}</b></p>`;

    const clientId = process.env.OAUTH_CLIENT_ID;
    const clientSecret = process.env.OAUTH_CLIENT_SECRET;
    const redirectUri = process.env.OAUTH_REDIRECT_URI;
    debugHtml += `<p>Serverio "redirectUri" (turi būti su www): <b>${redirectUri || 'TRŪKSTA'}</b></p>`;

    if (!code) {
      throw new Error('Missing "code" from GitHub');
    }
    if (!clientId || !clientSecret || !redirectUri) {
        throw new Error('Trūksta serverio OAUTH kintamųjų');
    }

    debugHtml += '<p>Kreipiamasi į GitHub dėl "access_token"...</p>';
    const r = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({ client_id: clientId, client_secret: clientSecret, code, redirect_uri: redirectUri }),
    });
    
    const data = await r.json();
    debugHtml += `<p>GitHub atsakymas: <pre>${JSON.stringify(data, null, 2)}</pre></p>`;

    if (!data.access_token) {
      throw new Error('GitHub negrąžino "access_token". Patikrinkite Client Secret.');
    }

    const token = data.access_token;
    const origin = new URL(redirectUri).origin; // Adresas, kuriam siųsime žinutę
    
    debugHtml += `<h2>SĖKMĖ!</h2>`;
    debugHtml += `<p>Gautas Token: <b>...${token.slice(-6)}</b></p>`;
    debugHtml += `<p>Bandoma siųsti "postMessage" į: <b>${origin}</b> (turi būti su www)</p>`;
    debugHtml += `<p>Langas neuždaromas tyčia, kad galėtumėte nukopijuoti šį tekstą.</p>`;
    
  } catch (err) {
    debugHtml += `<h2 style="color:red;">KLAIDA!</h2>`;
    debugHtml += `<pre style="color:red;">${err.message}</pre>`;
    debugHtml += `<pre>${err.stack}</pre>`;
    
  } finally {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(debugHtml);
  }
}