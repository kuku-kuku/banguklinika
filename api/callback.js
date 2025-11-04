export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const code = url.searchParams.get('code');

    if (!code) {
      throw new Error('Missing authorization code');
    }

    const { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } = process.env;

    if (!OAUTH_CLIENT_ID || !OAUTH_CLIENT_SECRET) {
      throw new Error('Missing OAuth configuration');
    }

    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
        code: code,
      }),
    });

    const data = await tokenResponse.json();

    if (!data.access_token) {
      throw new Error('No access token received');
    }

    const html = `
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Authentication Complete</title>
  <style>
    body { 
      font-family: system-ui, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background: #f0f0f0;
    }
    .box {
      text-align: center;
      background: white;
      padding: 3rem;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      max-width: 400px;
    }
    .success { color: #22c55e; font-size: 48px; margin-bottom: 1rem; }
    h2 { margin: 0 0 0.5rem 0; color: #333; }
    p { color: #666; margin: 0.5rem 0; }
    .token { 
      font-family: monospace; 
      background: #f5f5f5; 
      padding: 0.5rem; 
      border-radius: 4px;
      word-break: break-all;
      font-size: 12px;
      margin: 1rem 0;
    }
    #status { 
      margin-top: 1rem; 
      padding: 0.5rem;
      background: #e0f2fe;
      border-radius: 4px;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="box">
    <div class="success">✓</div>
    <h2>Autentifikacija sėkminga!</h2>
    <p>Siunčiamas raktas į pagrindinį langą...</p>
    <div class="token">Token: ...${data.access_token.slice(-8)}</div>
    <div id="status">Ruošiama...</div>
  </div>

  <script>
    (function() {
      const token = "${data.access_token}";
      const statusEl = document.getElementById('status');
      
      let attempts = 0;
      const maxAttempts = 10;

      function sendMessage() {
        attempts++;
        
        if (!window.opener) {
          statusEl.textContent = '⚠️ Nerasta pagrindinio lango. Uždarykite ir bandykite iš naujo.';
          statusEl.style.background = '#fee';
          return;
        }

        statusEl.textContent = 'Siunčiama (' + attempts + '/' + maxAttempts + ')...';

        // Decap CMS formatas (string pranešimas)
        const message = 'authorization:github:success:' + JSON.stringify({
          token: token,
          provider: "github"
        });

        // Siunčiame į opener
        window.opener.postMessage(message, window.location.origin);
        
        // Taip pat bandome į '*' (bet kuris origin)
        window.opener.postMessage(message, '*');

        console.log('PostMessage sent:', message);

        if (attempts < maxAttempts) {
          // Bandome dar kartą po 300ms
          setTimeout(sendMessage, 300);
        } else {
          statusEl.textContent = '✓ Išsiųsta! Langas užsidarys...';
          statusEl.style.background = '#d1fae5';
          
          // Uždarome po 2 sekundžių
          setTimeout(function() {
            window.close();
          }, 2000);
        }
      }

      // Pradedame siųsti po 100ms
      setTimeout(sendMessage, 100);
    })();
  </script>
</body>
</html>`;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).send(html);

  } catch (error) {
    console.error('OAuth callback error:', error);
    res.status(500).send(`
<!doctype html>
<html>
<head><meta charset="utf-8"><title>Error</title></head>
<body style="font-family: sans-serif; padding: 2rem; text-align: center;">
  <h1>❌ Klaida</h1>
  <p>${error.message}</p>
  <p><a href="/admin/">← Grįžti į Admin</a></p>
</body>
</html>`);
  }
}