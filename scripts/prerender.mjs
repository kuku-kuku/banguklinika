// scripts/prerender.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, "..", "dist");
const templatePath = path.join(distDir, "index.html");

// 🔧 Pakeisk į savo tikrą domeną
const SITE_ORIGIN = "https://www.banguklinika.lt";

// ✅ Route'ų SEO head duomenys
const pages = [
  {
    route: "/",
    title: "Odontologijos klinika (odontologai) Klaipėdoje",
    description: "Bangų Odontologijos Klinika – moderni odontologija Klaipėdos centre.",
  },
  {
    route: "/apie",
    title: "Apie mus | Bangų klinika",
    description: "Sužinokite daugiau apie Bangų odontologijos kliniką Klaipėdoje, mūsų komandą ir vertybes.",
  },
  {
    route: "/paslaugos",
    title: "Odontologijos paslaugos | Bangų klinika",
    description: "Visos odontologijos paslaugos: higiena, plombavimas, balinimas, chirurgija, implantacija ir kt.",
  },
  {
    route: "/kainos",
    title: "Kainos | Bangų klinika",
    description: "Odontologijos paslaugų kainos ir informacija pacientams.",
  },
  {
    route: "/kontaktai",
    title: "Kontaktai | Bangų klinika",
    description: "Susisiekite su Bangų odontologijos klinika Klaipėdoje. Registracija, rekvizitai, darbo laikas.",
  },

  // Paslaugos (1 etapas)
  {
    route: "/paslaugos/burnos-higiena",
    title: "Burnos (dantų) higiena Klaipėdoje | Bangų klinika",
    description: "Profesionali burnos higiena Klaipėdoje. Apnašų ir akmenų šalinimas, profilaktika, patarimai.",
  },
  {
    route: "/paslaugos/dantu-plombavimas",
    title: "Dantų plombavimas Klaipėdoje | Kaina | Bangų klinika",
    description: "Dantų plombavimas Klaipėdoje – kokybiškas gydymas, modernios medžiagos ir ilgalaikis rezultatas.",
  },
  {
    route: "/paslaugos/estetinis-plombavimas",
    title: "Estetinis dantų plombavimas Klaipėdoje - Bangų odontologijos klinika | Bangų klinika",
    description: "Estetinis plombavimas – šypsenos atstatymas, formos ir spalvos korekcija natūraliam rezultatui.",
  },
  {
    route: "/paslaugos/burnos-chirurgija",
    title: "Burnos chirurgija Klaipėdoje | Bangų klinika",
    description: "Burnos chirurgija Klaipėdoje: procedūros, konsultacijos ir saugus gydymas klinikoje.",
  },
  {
    route: "/paslaugos/dantu-balinimas",
    title: "Dantų balinimas Klaipėdoje | Bangų klinika",
    description: "Dantų balinimas Klaipėdoje – profesionalus balinimas klinikoje ir rekomendacijos po procedūros.",
  },

  // Paslaugos (2 etapas)
  {
    route: "/paslaugos/dantu-taisymas-gydymas",
    title: "Dantų gydymas, taisymas (tvarkymas) Klaipėdoje | Bangų klinika",
    description: "Dantų taisymas ir gydymas Klaipėdoje – diagnostika, gydymo planas ir komfortiškos procedūros.",
  },
  {
    route: "/paslaugos/vaiku-odontologija",
    title: "Vaikų odontologija Klaipėdoje | Bangų klinika",
    description: "Vaikų odontologija Klaipėdoje – švelnus bendravimas, profilaktika ir gydymas mažiesiems.",
  },
  {
    route: "/paslaugos/dantu-protezavimas",
    title: "Dantų protezavimas Klaipėdoje | Bangų klinika",
    description: "Dantų protezavimas: vainikėliai, protezai, individualūs sprendimai šypsenos atstatymui.",
  },
  {
    route: "/paslaugos/dantu-traukimas",
    title: "Dantų traukimas (rovimas) Klaipėdoje | Bangų klinika",
    description: "Saugus dantų šalinimas Klaipėdoje – konsultacija, nuskausminimas ir priežiūra po procedūros.",
  },
  {
    route: "/paslaugos/dantu-tiesinimas",
    title: "Dantų tiesinimas kapomis (Ordoline) Klaipėdoje | Bangų klinika",
    description: "Dantų tiesinimas: konsultacija, gydymo planas ir šiuolaikiniai sprendimai taisyklingam sąkandžiui.",
  },
  {
    route: "/paslaugos/endodontinis-gydymas",
    title: "Endodontinis (šaknų kanalų) gydymas Klaipėdoje | Bangų klinika",
    description: "Kanalų gydymas (endodontija) Klaipėdoje – tikslus gydymas ir skausmo kontrolė.",
  },
  {
    route: "/paslaugos/dantu-implantacija",
    title: "Dantų implantacija Klaipėdoje | Bangų klinika",
    description: "Dantų implantacija Klaipėdoje – konsultacija, implantai, gydymo eiga ir priežiūra po procedūros.",
  },

  // Ypatingi pasiūlymai
  {
    route: "/ypatingi-pasiulymai",
    title: "Ypatingi pasiūlymai | Bangų klinika klaipėdoje",
    description: "Aktualūs Bangų klinikos pasiūlymai ir akcijos odontologijos paslaugoms.",
  },
  {
    route: "/ypatingi-pasiulymai/cirkonio-keramikos-vainikeliai",
    title: "Cirkonio keramikos vainikėliai | Bangų klinika Klaipėdoje",
    description: "Cirkonio keramikos vainikėliai – estetika ir tvirtumas. Sužinokite apie pasiūlymą ir sąlygas.",
  },
  {
    route: "/ypatingi-pasiulymai/pilnas-zandikaulio-atstatymas",
    title: "Pilnas žandikaulio atstatymas (All-on-4) | Bangų klinika Klaipėdoje",
    description: "Pilnas žandikaulio atstatymas All-on-4 – sprendimas dantų atkūrimui. Detalės ir konsultacija.",
  },
];

function normalizeRoute(r) {
  if (!r.startsWith("/")) r = "/" + r;
  if (r !== "/" && !r.endsWith("/")) r = r + "/";
  return r;
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function writeFileForRoute(route, html) {
  const clean = route.replace(/^\//, "").replace(/\/$/, "");
  const outDir = clean ? path.join(distDir, clean) : distDir;
  ensureDir(outDir);
  fs.writeFileSync(path.join(outDir, "index.html"), html, "utf8");
}

function upsertTag(html, regex, replacement) {
  if (regex.test(html)) return html.replace(regex, replacement);
  // jei tag'o nėra – įkišam prieš </head>
  return html.replace("</head>", `${replacement}\n</head>`);
}

function buildHeadHtml(template, { route, title, description }) {
  const url = SITE_ORIGIN + normalizeRoute(route);

  let html = template;

  // title
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

  // meta description
  html = upsertTag(
    html,
    /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );

  // canonical
  html = upsertTag(
    html,
    /<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i,
    `<link rel="canonical" href="${escapeHtml(url)}" />`
  );

  return html;
}

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function run() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Nerandu dist/index.html (${templatePath}). Pirma paleisk vite build.`);
  }

  const template = fs.readFileSync(templatePath, "utf8");

  const unique = new Map();
  for (const p of pages) unique.set(normalizeRoute(p.route), p);

  for (const [route, page] of unique) {
    const out = buildHeadHtml(template, page);
    writeFileForRoute(route, out);
    console.log("[prerender] wrote:", route);
  }

  console.log("[prerender] done. pages:", unique.size);
}

try {
  run();
} catch (e) {
  console.error("[prerender] ERROR:", e);
  process.exit(1);
}