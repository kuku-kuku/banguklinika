// /api/auth.js (Laikina DEBUG versija)
export default async function handler(req, res) {
  try {
    // Tikriname kintamuosius
    const data = {
      OAUTH_CLIENT_ID: process.env.OAUTH_CLIENT_ID ? '...YRA...' : '...TRŪKSTA...',
      OAUTH_CLIENT_SECRET: process.env.OAUTH_CLIENT_SECRET ? '...YRA...' : '...TRŪKSTA...',
      OAUTH_REDIRECT_URI: process.env.OAUTH_REDIRECT_URI || '...TRŪKSTA...',
      GITHUB_SCOPE: process.env.GITHUB_SCOPE || '...TRŪKSTA (naudojamas numatytasis)...'
    };

    // Išvedame juos kaip JSON
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data);

  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
