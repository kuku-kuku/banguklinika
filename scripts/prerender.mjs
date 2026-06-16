// scripts/prerender.mjs
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, "..", "dist");
const templatePath = path.join(distDir, "index.html");

const SITE_ORIGIN = "https://www.banguklinika.lt";

const DENTIST_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Bangų klinika",
  image: `${SITE_ORIGIN}/hero.webp`,
  url: SITE_ORIGIN,
  telephone: "+37046410101",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bangų g. 5",
    addressLocality: "Klaipėda",
    addressRegion: "KL",
    postalCode: "91249",
    addressCountry: "LT",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 55.7033,
    longitude: 21.1443,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
};

function serviceSchema(name, description, url) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Dentist",
      name: "Bangų klinika",
      url: SITE_ORIGIN,
    },
    areaServed: {
      "@type": "City",
      name: "Klaipėda",
    },
  };
}

const pages = [
  {
    route: "/",
    title: "Odontologijos klinika (odontologai) Klaipėdoje",
    description: "Bangų Odontologijos Klinika – moderni odontologija Klaipėdos centre.",
    schema: DENTIST_SCHEMA,
  },
  {
    route: "/apie",
    title: "Apie mus | Bangų klinika",
    description: "Sužinokite daugiau apie Bangų odontologijos kliniką Klaipėdoje, mūsų komandą ir vertybes.",
    schema: DENTIST_SCHEMA,
  },
  {
    route: "/paslaugos",
    title: "Odontologijos paslaugos | Bangų klinika",
    description: "Visos odontologijos paslaugos: higiena, plombavimas, balinimas, chirurgija, implantacija ir kt.",
    schema: DENTIST_SCHEMA,
  },
  {
    route: "/kainos",
    title: "Kainos | Bangų klinika",
    description: "Odontologijos paslaugų kainos ir informacija pacientams.",
    schema: DENTIST_SCHEMA,
  },
  {
    route: "/kontaktai",
    title: "Kontaktai | Bangų klinika",
    description: "Susisiekite su Bangų odontologijos klinika Klaipėdoje. Registracija, rekvizitai, darbo laikas.",
    schema: DENTIST_SCHEMA,
  },
  {
    route: "/paslaugos/burnos-higiena",
    title: "Burnos (dantų) higiena Klaipėdoje | Bangų klinika",
    description: "Profesionali burnos higiena Klaipėdoje. Apnašų ir akmenų šalinimas, profilaktika, patarimai.",
    schema: serviceSchema("Burnos higiena", "Profesionali burnos higiena Klaipėdoje. Apnašų ir akmenų šalinimas, profilaktika, patarimai.", `${SITE_ORIGIN}/paslaugos/burnos-higiena/`),
  },
  {
    route: "/paslaugos/dantu-plombavimas",
    title: "Dantų plombavimas Klaipėdoje | Kaina | Bangų klinika",
    description: "Dantų plombavimas Klaipėdoje – kokybiškas gydymas, modernios medžiagos ir ilgalaikis rezultatas.",
    schema: serviceSchema("Dantų plombavimas", "Dantų plombavimas Klaipėdoje – kokybiškas gydymas, modernios medžiagos ir ilgalaikis rezultatas.", `${SITE_ORIGIN}/paslaugos/dantu-plombavimas/`),
  },
  {
    route: "/paslaugos/estetinis-plombavimas",
    title: "Estetinis dantų plombavimas Klaipėdoje - Bangų odontologijos klinika | Bangų klinika",
    description: "Estetinis plombavimas – šypsenos atstatymas, formos ir spalvos korekcija natūraliam rezultatui.",
    schema: serviceSchema("Estetinis plombavimas", "Estetinis plombavimas – šypsenos atstatymas, formos ir spalvos korekcija natūraliam rezultatui.", `${SITE_ORIGIN}/paslaugos/estetinis-plombavimas/`),
  },
  {
    route: "/paslaugos/burnos-chirurgija",
    title: "Burnos chirurgija Klaipėdoje | Bangų klinika",
    description: "Burnos chirurgija Klaipėdoje: procedūros, konsultacijos ir saugus gydymas klinikoje.",
    schema: serviceSchema("Burnos chirurgija", "Burnos chirurgija Klaipėdoje: procedūros, konsultacijos ir saugus gydymas klinikoje.", `${SITE_ORIGIN}/paslaugos/burnos-chirurgija/`),
  },
  {
    route: "/paslaugos/dantu-balinimas",
    title: "Dantų balinimas Klaipėdoje | Bangų klinika",
    description: "Dantų balinimas Klaipėdoje – profesionalus balinimas klinikoje ir rekomendacijos po procedūros.",
    schema: serviceSchema("Dantų balinimas", "Dantų balinimas Klaipėdoje – profesionalus balinimas klinikoje ir rekomendacijos po procedūros.", `${SITE_ORIGIN}/paslaugos/dantu-balinimas/`),
  },
  {
    route: "/paslaugos/dantu-taisymas-gydymas",
    title: "Dantų gydymas, taisymas (tvarkymas) Klaipėdoje | Bangų klinika",
    description: "Dantų taisymas ir gydymas Klaipėdoje – diagnostika, gydymo planas ir komfortiškos procedūros.",
    schema: serviceSchema("Dantų gydymas", "Dantų taisymas ir gydymas Klaipėdoje – diagnostika, gydymo planas ir komfortiškos procedūros.", `${SITE_ORIGIN}/paslaugos/dantu-taisymas-gydymas/`),
  },
  {
    route: "/paslaugos/vaiku-odontologija",
    title: "Vaikų odontologija Klaipėdoje | Bangų klinika",
    description: "Vaikų odontologija Klaipėdoje – švelnus bendravimas, profilaktika ir gydymas mažiesiems.",
    schema: serviceSchema("Vaikų odontologija", "Vaikų odontologija Klaipėdoje – švelnus bendravimas, profilaktika ir gydymas mažiesiems.", `${SITE_ORIGIN}/paslaugos/vaiku-odontologija/`),
  },
  {
    route: "/paslaugos/dantu-protezavimas",
    title: "Dantų protezavimas Klaipėdoje | Bangų klinika",
    description: "Dantų protezavimas: vainikėliai, protezai, individualūs sprendimai šypsenos atstatymui.",
    schema: serviceSchema("Dantų protezavimas", "Dantų protezavimas: vainikėliai, protezai, individualūs sprendimai šypsenos atstatymui.", `${SITE_ORIGIN}/paslaugos/dantu-protezavimas/`),
  },
  {
    route: "/paslaugos/dantu-traukimas",
    title: "Dantų traukimas (rovimas) Klaipėdoje | Bangų klinika",
    description: "Saugus dantų šalinimas Klaipėdoje – konsultacija, nuskausminimas ir priežiūra po procedūros.",
    schema: serviceSchema("Dantų traukimas", "Saugus dantų šalinimas Klaipėdoje – konsultacija, nuskausminimas ir priežiūra po procedūros.", `${SITE_ORIGIN}/paslaugos/dantu-traukimas/`),
  },
  {
    route: "/paslaugos/dantu-tiesinimas",
    title: "Dantų tiesinimas kapomis (Ordoline) Klaipėdoje | Bangų klinika",
    description: "Dantų tiesinimas: konsultacija, gydymo planas ir šiuolaikiniai sprendimai taisyklingam sąkandžiui.",
    schema: serviceSchema("Dantų tiesinimas", "Dantų tiesinimas: konsultacija, gydymo planas ir šiuolaikiniai sprendimai taisyklingam sąkandžiui.", `${SITE_ORIGIN}/paslaugos/dantu-tiesinimas/`),
  },
  {
    route: "/paslaugos/endodontinis-gydymas",
    title: "Endodontinis (šaknų kanalų) gydymas Klaipėdoje | Bangų klinika",
    description: "Kanalų gydymas (endodontija) Klaipėdoje – tikslus gydymas ir skausmo kontrolė.",
    schema: serviceSchema("Endodontinis gydymas", "Kanalų gydymas (endodontija) Klaipėdoje – tikslus gydymas ir skausmo kontrolė.", `${SITE_ORIGIN}/paslaugos/endodontinis-gydymas/`),
  },
  {
    route: "/paslaugos/dantu-implantacija",
    title: "Dantų implantacija Klaipėdoje | Bangų klinika",
    description: "Dantų implantacija Klaipėdoje – konsultacija, implantai, gydymo eiga ir priežiūra po procedūros.",
    schema: serviceSchema("Dantų implantacija", "Dantų implantacija Klaipėdoje – konsultacija, implantai, gydymo eiga ir priežiūra po procedūros.", `${SITE_ORIGIN}/paslaugos/dantu-implantacija/`),
  },
  {
    route: "/paslaugos/skubi-pagalba",
    title: "Skubi odontologinė pagalba Klaipėdoje | Bangų klinika",
    description: "Skubi odontologinė pagalba Klaipėdoje – greitas sprendimas staigiam dantų skausmui, infekcijai ar traumai.",
    schema: serviceSchema("Skubi odontologinė pagalba", "Skubi odontologinė pagalba Klaipėdoje – greitas sprendimas staigiam dantų skausmui, infekcijai ar traumai.", `${SITE_ORIGIN}/paslaugos/skubi-pagalba/`),
  },
  // ===== LATVIAN PAGES /lv/* =====
  {
    route: "/lv",
    title: "Zobārstniecības klīnika Klaipēdā | Bangų klinika",
    description: "Bangų zobārstniecības klīnika – moderna zobārstniecība Klaipēdas centrā. Pierakstieties uz konsultāciju.",
  },
  {
    route: "/lv/par-mums",
    title: "Par mums | Bangų klinika",
    description: "Uzziniet vairāk par Bangų zobārstniecības klīniku Klaipēdā, mūsu komandu un vērtībām.",
  },
  {
    route: "/lv/kontakti",
    title: "Kontakti | Bangų klinika",
    description: "Sazinieties ar Bangų zobārstniecības klīniku Klaipēdā. Reģistrācija, darba laiks un adrese.",
  },
  {
    route: "/lv/cenas",
    title: "Cenas | Bangų klinika",
    description: "Zobārstniecības pakalpojumu cenas un informācija pacientiem.",
  },
  {
    route: "/lv/pakalpojumi",
    title: "Zobārstniecības pakalpojumi | Bangų klinika",
    description: "Visi zobārstniecības pakalpojumi: higiēna, plombēšana, balināšana, ķirurģija, implantācija un citi.",
  },
  {
    route: "/lv/pakalpojumi/zobu-implantacija",
    title: "Zobu implantācija Klaipēdā | Bangų klinika",
    description: "Zobu implantācija Klaipēdā – konsultācija, implanti, ārstēšanas gaita un aprūpe pēc procedūras.",
  },
  {
    route: "/lv/pakalpojumi/zobu-protezesana",
    title: "Zobu protezēšana Klaipēdā | Bangų klinika",
    description: "Zobu protezēšana: kroņi, protēzes, individuāli risinājumi smaida atjaunošanai.",
  },
  {
    route: "/lv/pakalpojumi/zobu-arstnieciba",
    title: "Zobu ārstniecība Klaipēdā | Bangų klinika",
    description: "Zobu ārstniecība un labošana Klaipēdā – diagnostika, ārstēšanas plāns un komfortablas procedūras.",
  },
  {
    route: "/lv/pakalpojumi/zobu-izlinesana",
    title: "Zobu izlīdzināšana (Ordoline) Klaipēdā | Bangų klinika",
    description: "Zobu izlīdzināšana: konsultācija, ārstēšanas plāns un mūsdienīgi risinājumi pareizam kodumam.",
  },
  {
    route: "/lv/pakalpojumi/mutes-higiena",
    title: "Mutes higiēna Klaipēdā | Bangų klinika",
    description: "Profesionāla mutes higiēna Klaipēdā. Aplikumu un akmens noņemšana, profilakse, padomi.",
  },
  {
    route: "/lv/pakalpojumi/mutes-hirurgija",
    title: "Mutes ķirurģija Klaipēdā | Bangų klinika",
    description: "Mutes ķirurģija Klaipēdā: procedūras, konsultācijas un droša ārstēšana klīnikā.",
  },
  {
    route: "/lv/pakalpojumi/zobu-balinesana",
    title: "Zobu balināšana Klaipēdā | Bangų klinika",
    description: "Zobu balināšana Klaipēdā – profesionāla balināšana klīnikā un ieteikumi pēc procedūras.",
  },
  {
    route: "/lv/pakalpojumi/estetiska-plombana",
    title: "Estētiskā plombēšana Klaipēdā | Bangų klinika",
    description: "Estētiskā plombēšana – smaida atjaunošana, formas un krāsas korekcija dabīgam rezultātam.",
  },
  {
    route: "/lv/pakalpojumi/zobu-plombana",
    title: "Zobu plombēšana Klaipēdā | Bangų klinika",
    description: "Zobu plombēšana Klaipēdā – kvalitatīva ārstēšana, moderni materiāli un ilgstošs rezultāts.",
  },
  {
    route: "/lv/pakalpojumi/zobu-ekstrakcija",
    title: "Zobu ekstrakcija (izraušana) Klaipēdā | Bangų klinika",
    description: "Droša zobu ekstrakcija Klaipēdā – konsultācija, anestēzija un aprūpe pēc procedūras.",
  },
  {
    route: "/lv/pakalpojumi/endodontija",
    title: "Endodontija (sakņu kanālu ārstēšana) Klaipēdā | Bangų klinika",
    description: "Kanālu ārstēšana (endodontija) Klaipēdā – precīza ārstēšana un sāpju kontrole.",
  },
  {
    route: "/lv/pakalpojumi/bernu-odontologija",
    title: "Bērnu zobārstniecība Klaipēdā | Bangų klinika",
    description: "Bērnu zobārstniecība Klaipēdā – maiga pieeja, profilakse un ārstēšana mazajiem pacientiem.",
  },
  {
    route: "/lv/ipasi-piedavajumi",
    title: "Īpašie piedāvājumi | Bangų klinika Klaipēdā",
    description: "Aktuālie Bangų klīnikas piedāvājumi un akcijas zobārstniecības pakalpojumiem.",
  },
  {
    route: "/draugai",
    title: "Draugai | Bangų klinika",
    description: "Mūsų partneriai ir draugai – įmonės ir projektai, su kuriais džiaugiamės bendradarbiauti.",
  },
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

function escapeHtml(s) {
  return String(s)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function upsertTag(html, regex, replacement) {
  if (regex.test(html)) return html.replace(regex, replacement);
  return html.replace("</head>", `${replacement}\n</head>`);
}

function injectHead(html, { route, title, description, schema }) {
  const url = SITE_ORIGIN + normalizeRoute(route);

  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

  html = upsertTag(
    html,
    /<meta\s+name=["']description["']\s+content=["'][\s\S]*?["']\s*\/?>/i,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );

  html = upsertTag(
    html,
    /<link\s+rel=["']canonical["']\s+href=["'][\s\S]*?["']\s*\/?>/i,
    `<link rel="canonical" href="${escapeHtml(url)}" />`
  );

  if (schema) {
    html = upsertTag(
      html,
      /<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/i,
      `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
    );
  }

  return html;
}

async function run() {
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Nerandu dist/index.html (${templatePath}). Pirma paleisk vite build.`);
  }

  const serverEntryPath = path.resolve(__dirname, "..", "dist", "server", "entry-server.js");
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`Nerandu ${serverEntryPath}. Pirma paleisk vite build --ssr.`);
  }

  const { render } = await import(pathToFileURL(serverEntryPath).href);

  const template = fs.readFileSync(templatePath, "utf8");

  const unique = new Map();
  for (const p of pages) unique.set(normalizeRoute(p.route), p);

  let success = 0;
  let errors = 0;

  for (const [route, page] of unique) {
    try {
      const { html: rawHtml } = render(page.route);

      // Framer Motion SSR outputs initial animation states (opacity:0, transforms)
      // as inline style attributes. Strip them so crawlers see fully visible content.
      // Only targets style="..." attributes, not <style> blocks or @keyframes.
      const appHtml = rawHtml.replace(
        /\bstyle="([^"]*)"/g,
        (_, styles) => {
          const cleaned = styles
            .replace(/\bopacity:\s*0\b;?\s*/g, "")
            .replace(/\btransform:[^;"]*(;|$)\s*/g, "")
            .trim()
            .replace(/;$/, "");
          return cleaned ? `style="${cleaned}"` : "";
        }
      );

      let output = template;
      output = output.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
      output = injectHead(output, page);

      writeFileForRoute(page.route, output);
      console.log("[prerender] ✓", route);
      success++;
    } catch (err) {
      console.error(`[prerender] ✗ KLAIDA ${route}:`, err.message);
      // Jei render nepavyko – įrašom tuščią template su teisingais meta tagais
      let fallback = template;
      fallback = injectHead(fallback, page);
      writeFileForRoute(page.route, fallback);
      errors++;
    }
  }

  console.log(`\n[prerender] done. success: ${success}, errors: ${errors}, total: ${unique.size}`);
  if (errors > 0) {
    console.warn("[prerender] Kai kurie puslapiai buvo atvaizduoti be turinio (fallback). Patikrink klaidas aukščiau.");
  }
}

run().catch((e) => {
  console.error("[prerender] FATAL:", e);
  process.exit(1);
});
