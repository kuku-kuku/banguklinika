// scripts/prerender.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";
import { chromium } from "playwright";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, "..", "dist");

// ✅ VISI route'ai iš App.tsx
const routes = [
  "/",
  "/apie",
  "/paslaugos",
  "/kainos",
  "/kontaktai",

  // Paslaugos (1 etapas)
  "/paslaugos/burnos-higiena",
  "/paslaugos/dantu-plombavimas",
  "/paslaugos/estetinis-plombavimas",
  "/paslaugos/burnos-chirurgija",
  "/paslaugos/dantu-balinimas",

  // Paslaugos (2 etapas)
  "/paslaugos/dantu-taisymas-gydymas",
  "/paslaugos/vaiku-odontologija",
  "/paslaugos/dantu-protezavimas",
  "/paslaugos/dantu-traukimas",
  "/paslaugos/dantu-tiesinimas",
  "/paslaugos/endodontinis-gydymas",
  "/paslaugos/dantu-implantacija",

  // Ypatingi pasiūlymai
  "/ypatingi-pasiulymai",
  "/ypatingi-pasiulymai/cirkonio-keramikos-vainikeliai",
  "/ypatingi-pasiulymai/pilnas-zandikaulio-atstatymas",
];

// Vercel/Static hostinimui patikimiausia: trailing slash,
// kad serveris servintų kaip /route/index.html
function normalizeRoute(r) {
  if (!r.startsWith("/")) r = "/" + r;
  if (r !== "/" && !r.endsWith("/")) r = r + "/";
  return r;
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function writeHtml(route, html) {
  // "/paslaugos/x/" -> dist/paslaugos/x/index.html
  const clean = route.replace(/^\//, "").replace(/\/$/, "");
  const outDir = clean ? path.join(distDir, clean) : distDir;
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
}

function contentTypeFor(ext) {
  const types = {
    ".html": "text/html; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".svg": "image/svg+xml",
    ".png": "image/png",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".ico": "image/x-icon",
    ".txt": "text/plain; charset=utf-8",
    ".xml": "application/xml; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".map": "application/json; charset=utf-8",
  };
  return types[ext] || "application/octet-stream";
}

function safeJoinDist(decodedPath) {
  // apsauga nuo path traversal
  const normalized = path
    .normalize(decodedPath)
    .replace(/^(\.\.(\/|\\|$))+/, "");

  // užtikrinam, kad neprasideda su "\" ar "C:" ir pan.
  const stripped = normalized.replace(/^([/\\])+/, "");
  return path.join(distDir, stripped);
}

async function startStaticServer(port) {
  const server = http.createServer((req, res) => {
    try {
      const urlPath = (req.url || "/").split("?")[0];
      const decoded = decodeURIComponent(urlPath);

      // 1) bandome duoti realų failą iš dist (assets, robots, sitemap, etc.)
      const tryDirect = safeJoinDist(decoded);
      if (fs.existsSync(tryDirect) && fs.statSync(tryDirect).isFile()) {
        const data = fs.readFileSync(tryDirect);
        res.writeHead(200, {
          "Content-Type": contentTypeFor(path.extname(tryDirect).toLowerCase()),
        });
        return res.end(data);
      }

      // 2) jei folderis, bandome folder/index.html
      const tryIndex = safeJoinDist(path.join(decoded, "index.html"));
      if (fs.existsSync(tryIndex)) {
        const data = fs.readFileSync(tryIndex);
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        return res.end(data);
      }

      // 3) SPA fallback: duodam dist/index.html, kad React Router užkrautų route
      const spa = path.join(distDir, "index.html");
      const data = fs.readFileSync(spa);
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      return res.end(data);
    } catch (e) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      res.end(String(e));
    }
  });

  await new Promise((r) => server.listen(port, "127.0.0.1", r));
  return server;
}

async function run() {
  if (!fs.existsSync(distDir)) {
    throw new Error(
      `dist folder nerastas: ${distDir}. Pirma paleisk "npm run build".`
    );
  }

  const port = 4173;
  const baseUrl = `http://127.0.0.1:${port}`;
  const server = await startStaticServer(port);

  // Playwright: rekomenduojama Vercel'e
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const uniqueRoutes = Array.from(new Set(routes.map(normalizeRoute)));

  for (const route of uniqueRoutes) {
    const url = baseUrl + route;

    console.log("[prerender] render:", url);

    // Playwright "networkidle" (ne "networkidle0")
    await page.goto(url, { waitUntil: "networkidle" });

    // jei Helmet truputį pavėluoja atnaujinti title/meta
    await page.waitForTimeout(80);

    const html = await page.content();
    writeHtml(route, html);
  }

  await browser.close();
  server.close();

  console.log("[prerender] done. sugeneruota puslapių:", uniqueRoutes.length);
}

run().catch((e) => {
  console.error("[prerender] ERROR:", e);
  process.exit(1);
});