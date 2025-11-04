// /api/callback.js
export default async function handler(req, res) {
  try {
    const url = new URL(req.url, `https://${req.headers.host}`);
    const code = url.searchParams.get("code");
    const state = url.searchParams.get("state");
    const cookieState = (req.headers.cookie || "")
      .split(";")
      .map(v => v.trim())
      .find(v => v.startsWith("gh_oauth_state="))
      ?.split("=")[1];

    if (!code) throw new Error("Missing authorization code");
    if (!state || !cookieState || state !== cookieState) {
      throw new Error("Invalid OAuth state");
    }

    const { OAUTH_CLIENT_ID, OAUTH_CLIENT_SECRET } = process.env;
    if (!OAUTH_CLIENT_ID || !OAUTH_CLIENT_SECRET) {
      throw new Error("Missing OAuth configuration");
    }

    // Exchange code -> token
    const tokenResp = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: OAUTH_CLIENT_ID,
        client_secret: OAUTH_CLIENT_SECRET,
        code,
      }),
    });
    const data = await tokenResp.json();
    if (!data?.access_token) throw new Error("No access token received");

    const token = data.access_token;

    // Minimal, permissive HTML that posts the token to opener (Decap/Netlify CMS)
    const html = `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Authentication Complete</title>
  <meta name="referrer" content="no-referrer-when-downgrade">
  <style>
    body { font-family: system-ui, sans-serif; display:flex; align-items:center; justify-content:center; min-height:100vh; margin:0; background:#f7f7f7; }
    .box { background:#fff; padding:24px 28px; border-radius:10px; box-shadow:0 6px 24px rgba(0,0,0,.08); text-align:center; }
    .ok { color:#16a34a; font-size:44px; margin-bottom:8px; }
    .muted { color:#666; font-size:14px; }
    #status { margin-top:10px; font-size:13px; background:#eef6ff; padding:6px 8px; border-radius:6px; }
  </style>
</head>
<body>
  <div class="box">
    <div class="ok">✓</div>
    <h2>GitHub auth success</h2>
    <p class="muted">Sending token to the admin window…</p>
    <div id="status">Preparing…</div>
  </div>
  <script>
    (function() {
      var token = ${JSON.stringify(token)};
      var statusEl = document.getElementById('status');
      var attempts = 0, maxAttempts = 20;

      function sendOnce() {
        if (!window.opener) {
          statusEl.textContent = '⚠️ window.opener not found. Please reopen admin and try again.';
          return false;
        }
        // Legacy Decap format: STRING
        var str = 'authorization:github:success:' + JSON.stringify({ token: token, provider: 'github' });
        window.opener.postMessage(str, '*');

        // Also send OBJECT for custom handlers
        window.opener.postMessage({ type: 'decap-auth', provider: 'github', token: token }, '*');

        return true;
      }

      function tick() {
        attempts++;
        statusEl.textContent = 'Sending (' + attempts + '/' + maxAttempts + ')…';
        var ok = sendOnce();
        if (attempts < maxAttempts) setTimeout(tick, 300);
        else {
          statusEl.textContent = ok ? '✓ Sent. Closing…' : '⚠️ Could not send.';
          setTimeout(function(){ window.close(); }, 1200);
        }
      }

      // Give admin time to attach listeners
      setTimeout(tick, 150);
    })();
  </script>
</body>
</html>`;

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    // Netalpink COOP/COEP – jie panaikina window.opener
    res.setHeader("Cache-Control", "no-store");
    res.status(200).send(html);
  } catch (err) {
    console.error("OAuth callback error:", err);
    res.status(500).send(`<!doctype html><html><body style="font-family:sans-serif;padding:24px">
      <h1>❌ Klaida</h1>
      <p>${(err && err.message) || "Unknown error"}</p>
      <p><a href="/admin/">← Grįžti į Adminaaaa</a></p>
    </body></html>`);
  }
}
