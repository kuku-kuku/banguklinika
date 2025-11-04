export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const code = url.searchParams.get('code');

    if (!code) {
      throw new Error('Missing authorization code');
    }

    const { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET, OAUTH_REDIRECT_URI } = process.env;

    if (!OAUTH_CLIENT_ID || !OAUTH_CLIENT_SECRET) {
      throw new Error('Missing OAuth configuration');
    }

    // Gaunami access_token iš GitHub
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
      throw new Error('No access token received from GitHub');
    }

    // HTML su trijų metodų kombinacija
    const html = `
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Completing authentication...</title>
  <style>
    body { 
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin: 0;
      background: #f5f5f5;
    }
    .message {
      text-align: center;
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }
    .spinner {
      border: 3px solid #f3f3f3;
      border-top: 3px solid #3498db;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  </style>
</head>
<body>
  <div class="message">
    <div class="spinner"></div>
    <h2>Authentication successful!</h2>
    <p>Redirecting to admin panel...</p>
  </div>

  <script>
    (function() {
      const token = "${data.access_token}";
      const authData = {
        token: token,
        provider: "github"
      };

      // METODAS 1: PostMessage į opener (jei tai popup)
      if (window.opener) {
        console.log('Sending postMessage to opener');
        
        // Decap CMS standartinis formatas
        window.opener.postMessage(
          'authorization:github:success:' + JSON.stringify(authData),
          window.location.origin
        );

        // Alternatyvus formatas
        window.opener.postMessage(
          {
            type: 'authorization:github:success',
            payload: authData
          },
          window.location.origin
        );

        setTimeout(() => window.close(), 500);
      } else {
        console.log('No opener, using localStorage + redirect');
        
        // METODAS 2: LocalStorage (jei tai redirect, o ne popup)
        try {
          localStorage.setItem('netlify-cms-user', JSON.stringify({
            token: token,
            backendName: 'github'
          }));
        } catch(e) {
          console.error('localStorage error:', e);
        }

        // METODAS 3: Redirect atgal į admin su token hash
        setTimeout(() => {
          window.location.href = '/admin/#access_token=' + token;
        }, 100);
      }
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
  <h1>❌ Authentication Error</h1>
  <p>${error.message}</p>
  <p><a href="/admin/" style="color: #0066cc;">← Back to Admin</a></p>
</body>
</html>`);
  }
}