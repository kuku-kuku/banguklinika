// /api/auth.js
export default async function handler(req, res) {
  try {
    const { OAUTH_CLIENT_ID, OAUTH_REDIRECT_URI } = process.env;
    const scope = process.env.GITHUB_SCOPE || "repo,user:email";
    if (!OAUTH_CLIENT_ID || !OAUTH_REDIRECT_URI) {
      res.statusCode = 500;
      return res.end("Missing OAUTH env vars");
    }

    const state = Math.random().toString(36).slice(2);
    const authorizeUrl = new URL("https://github.com/login/oauth/authorize");
    authorizeUrl.searchParams.set("client_id", OAUTH_CLIENT_ID);
    authorizeUrl.searchParams.set("redirect_uri", OAUTH_REDIRECT_URI);
    authorizeUrl.searchParams.set("scope", scope);
    authorizeUrl.searchParams.set("state", state);

    // 5 min state
    res.setHeader(
      "Set-Cookie",
      `gh_oauth_state=${state}; Max-Age=300; Path=/; HttpOnly; Secure; SameSite=Lax`
    );
    res.statusCode = 302;
    res.setHeader("Location", authorizeUrl.toString());
    res.end();
  } catch (e) {
    console.error(e);
    res.statusCode = 500;
    res.end("Auth error");
  }
}
