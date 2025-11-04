export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');

    if (!code) {
      throw new Error('Missing authorization code');
    }

    const { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, OAUTH_REDIRECT_URI } = process.env;

    if (!OAUTH_CLIENT_ID || !OAUTH_CLIENT_SECRET || !OAUTH_REDIRECT_URI) {
      throw new Error('Missing OAuth configuration');
    }

    // Keičiame access_token iš GitHub
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
        redirect_uri: OAUTH_REDIRECT_URI,
        state: state
      }),
    });

    const data = await tokenResponse.json();

    if (!data.access_token) {
      throw new Error('No access token received from GitHub');
    }

    // Decap CMS tikisi TIKSLIAI tokio formato
    const html = `
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Authorizing...</title>
</head>
<body>
  <script>
    (function() {
      function receiveMessage(e) {
        console.log('Received message:', e);
        window.removeEventListener('message', receiveMessage);
      }
      window.addEventListener('message', receiveMessage);

      const data = {
        token: "${data.access_token}",
        provider: "github"
      };

      // Siunčiame pranešimą į opener langą
      if (window.opener) {
        window.opener.postMessage(
          'authorization:github:success:' + JSON.stringify(data),
          window.location.origin
        );
      }

      // Uždaryti langą po 1 sekundės
      setTimeout(function() {
        window.close();
      }, 1000);
    })();
  </script>
  <p>Authorization successful! This window should close automatically...</p>
  <p>If it doesn't close, you can close it manually.</p>
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
<body>
  <h1>Authentication Error</h1>
  <p>${error.message}</p>
  <p><a href="/admin/">Try again</a></p>
</body>
</html>`);
  }
}