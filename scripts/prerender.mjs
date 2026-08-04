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
  "@id": `${SITE_ORIGIN}/`,
  name: "Bangų odontologijos klinika",
  alternateName: "Bangų klinika",
  url: `${SITE_ORIGIN}/`,
  description: "Bangų odontologijos klinika Klaipėdoje teikia odontologijos paslaugas, įskaitant dantų gydymą, estetinį plombavimą, profesionalią burnos higieną, protezavimą, implantavimą ir dantų atkūrimą.",
  telephone: "+37067191399",
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bangų g. 7-3",
    addressLocality: "Klaipėda",
    postalCode: "LT-91250",
    addressCountry: "LT",
  },
  areaServed: { "@type": "City", name: "Klaipėda" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  medicalSpecialty: ["Dentistry"],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dantų implantacija" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dantų protezavimas" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dantų gydymas" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dantų taisymas" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dantų tiesinimas" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Burnos higiena" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Burnos chirurgija" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dantų balinimas" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Estetinis plombavimas" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dantų plombavimas" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Vaikų odontologija" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dantų traukimas" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Skubi odontologinė pagalba" } },
  ],
  sameAs: ["https://www.facebook.com/banguklinika/"],
};

function serviceSchema(name, serviceType, description, url) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    serviceType,
    description,
    url,
    areaServed: { "@type": "City", name: "Klaipėda" },
    provider: { "@id": `${SITE_ORIGIN}/#dentist` },
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
    title: "Burnos (dantų) higiena Klaipėdoje | Kaina su akcija | Geriausi atsiliepimai | Bangų klinika",
    description: "Profesionali burnos (dantų) higiena Klaipėdoje gera kaina☑️. Pašalinkite apnašas, sumažinkite dantenų problemų riziką ir išlaikykite sveiką šypseną☑️. Kreipkitės į⏩Bangų kliniką.",
    schema: serviceSchema("Burnos higiena Klaipėdoje", "Profesionali burnos higiena", "Profesionali burnos higiena teikiama Bangų odontologijos klinikoje Klaipėdoje. Paslauga padeda palaikyti sveikus dantis ir dantenas pacientams Klaipėdos mieste.", `${SITE_ORIGIN}/paslaugos/burnos-higiena/`),
  },
  {
    route: "/paslaugos/dantu-plombavimas",
    title: "Dantų plombavimas Klaipėdoje | Kaina | Bangų klinika",
    description: "Jautrus ar pažeistas dantis? Dantų plombavimas Klaipėdoje padeda atkurti danties funkciją☑️ir apsaugoti nuo tolimesnio gedimo☑️. Kreipkitės į⏩Bangų kliniką jau šiandien.",
    schema: serviceSchema("Dantų plombavimas Klaipėdoje", "Dantų plombavimas", "Dantų plombavimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekamas pažeistų dantų atstatymas plombomis pacientams Klaipėdos mieste.", `${SITE_ORIGIN}/paslaugos/dantu-plombavimas/`),
  },
  {
    route: "/paslaugos/estetinis-plombavimas",
    title: "Estetinis dantų plombavimas Klaipėdoje - Bangų odontologijos klinika | Bangų klinika",
    description: "Netenkina dantų forma ar spalva?⏩Estetinis dantų plombavimas Klaipėdoje leidžia greitai ir estetiškai atkurti šypseną. Kreipkitės į Bangų kliniką jau šiandien.",
    schema: serviceSchema("Estetinis plombavimas Klaipėdoje", "Estetinis plombavimas", "Estetinio plombavimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Paslauga skirta atkurti dantų formą, spalvą ir estetiką pacientams Klaipėdos mieste.", `${SITE_ORIGIN}/paslaugos/estetinis-plombavimas/`),
  },
  {
    route: "/paslaugos/burnos-chirurgija",
    title: "Burnos chirurgija Klaipėdoje | Bangų klinika",
    description: "Burnos chirurgija Klaipėdoje – profesionalios procedūros sudėtingesnėms dantų☑️minkštųjų audinių☑️žandikaulio☑️problemoms spręsti. Kreipkitės į⏩Bangų kliniką.",
    schema: serviceSchema("Burnos chirurgija Klaipėdoje", "Burnos chirurgija", "Burnos chirurgijos paslaugos teikiamos Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekamos odontologinės chirurginės procedūros pacientams Klaipėdos mieste.", `${SITE_ORIGIN}/paslaugos/burnos-chirurgija/`),
  },
  {
    route: "/paslaugos/dantu-balinimas",
    title: "Dantų balinimas Klaipėdoje | Kaina ir atsiliepimai | Bangų klinika",
    description: "Dantų balinimas Klaipėdoje už prieinamą kainą☑️– saugus ir efektyvus būdas pašviesinti dantis bei atkurti estetišką šypseną. Registruokitės⏩Bangų klinikoje jau dabar.",
    schema: serviceSchema("Dantų balinimas Klaipėdoje", "Dantų balinimas", "Dantų balinimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Paslauga skirta pacientams, norintiems šviesesnės ir estetiškesnės šypsenos Klaipėdos mieste.", `${SITE_ORIGIN}/paslaugos/dantu-balinimas/`),
  },
  {
    route: "/paslaugos/dantu-taisymas-gydymas",
    title: "Dantų gydymas, taisymas (tvarkymas) Klaipėdoje | Bangų klinika",
    description: "Dantų gydymas☑️tvarkymas☑️Klaipėdoje esant skausmui ar kitiems dantų pažeidimams. Laiku pašalinkite skausmą ir išsaugokite natūralius dantis. Registruokitės⏩Bangų klinikoje.",
    schema: serviceSchema("Dantų gydymas Klaipėdoje", "Dantų gydymas", "Dantų gydymo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekamas dantų taisymas ir gydymas pacientams Klaipėdos mieste.", `${SITE_ORIGIN}/paslaugos/dantu-taisymas-gydymas/`),
  },
  {
    route: "/paslaugos/vaiku-odontologija",
    title: "Vaikų odontologija (stomatologija) Klaipėdoje | Bangų klinika",
    description: "Ieškote vaikų odontologo Klaipėdoje?⏩Bangų klinikoje dirba patyrę specialistai, užtikrinantys švelnų☑️saugų☑️gydymą vaikams. Patogi registracija ir profesionali priežiūra.",
    schema: serviceSchema("Vaikų odontologija Klaipėdoje", "Vaikų odontologija", "Vaikų odontologijos paslaugos teikiamos Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekama vaikų dantų priežiūra ir gydymas pacientams Klaipėdos mieste.", `${SITE_ORIGIN}/paslaugos/vaiku-odontologija/`),
  },
  {
    route: "/paslaugos/dantu-protezavimas",
    title: "Dantų protezavimas Klaipėdoje | Bangų klinika",
    description: "Dantų protezavimas Klaipėdoje – prieinama kaina☑️patikimi sprendimai☑️prarastiems ar pažeistiems dantims atkurti. Sužinokite gydymo galimybes⏩Bangų klinikoje jau dabar.",
    schema: serviceSchema("Dantų protezavimas Klaipėdoje", "Dantų protezavimas", "Dantų protezavimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Paslauga skirta pacientams, norintiems atkurti dantų funkciją ir estetiką Klaipėdos mieste.", `${SITE_ORIGIN}/paslaugos/dantu-protezavimas/`),
  },
  {
    route: "/paslaugos/dantu-traukimas",
    title: "Dantų traukimas (rovimas) Klaipėdoje | Bangų klinika",
    description: "Skaudantis ar stipriai pažeistas dantis? Dantų traukimas (rovimas) Klaipėdoje atliekamas profesionaliai☑️rūpestingai☑️Bangų klinikoje už gerą kainą.⏩Kreipkitės jau dabar.",
    schema: serviceSchema("Dantų traukimas Klaipėdoje", "Dantų traukimas", "Dantų traukimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekamas dantų šalinimas pacientams Klaipėdos mieste.", `${SITE_ORIGIN}/paslaugos/dantu-traukimas/`),
  },
  {
    route: "/paslaugos/dantu-tiesinimas",
    title: "Dantų tiesinimas kapomis (Ordoline) Klaipėdoje | Bangų klinika",
    description: "Dantų tiesinimas kapomis (ORDOLINE) Klaipėdoje – patogus☑️modernus☑️sprendimas tiesesnei šypsenai bei taisyklingam sąkandžiui. Registruokitės⏩Bangų klinikoje jau dabar.",
    schema: serviceSchema("Dantų tiesinimas Klaipėdoje", "Dantų tiesinimas", "Dantų tiesinimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Paslauga skirta pacientams, norintiems tiesesnės šypsenos Klaipėdos mieste.", `${SITE_ORIGIN}/paslaugos/dantu-tiesinimas/`),
  },
  {
    route: "/paslaugos/endodontinis-gydymas",
    title: "Endodontinis (šaknų kanalų) gydymas Klaipėdoje | Bangų klinika",
    description: "Pulsuojantis danties skausmas☑️ilgai trunkantis jautrumas☑️gali signalizuoti apie gilesnius pažeidimus. Kreipkitės dėl endodontinio gydymo⏩Bangų klinikoje.",
    schema: serviceSchema("Endodontinis gydymas Klaipėdoje", "Endodontinis gydymas", "Endodontinis gydymas teikiamas Bangų odontologijos klinikoje Klaipėdoje. Paslauga skirta dantų šaknų kanalų gydymui pacientams Klaipėdos mieste.", `${SITE_ORIGIN}/paslaugos/endodontinis-gydymas/`),
  },
  {
    route: "/paslaugos/dantu-implantacija",
    title: "Dantų implantacija Klaipėdoje - Dantų implantai nuo 500€ | Bangų klinika",
    description: "Dantų implantacija Klaipėdoje – dantų implantai nuo 500€☑️, prarastų dantų atkūrimas implantais ir estetikos atstatymas☑️. Registruokitės⏩konsultacijai Bangų klinikoje.",
    schema: serviceSchema("Dantų implantacija Klaipėdoje", "Dantų implantacija", "Dantų implantacijos paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinika padeda pacientams atkurti prarastus dantis implantais Klaipėdos mieste.", `${SITE_ORIGIN}/paslaugos/dantu-implantacija/`),
  },
  {
    route: "/paslaugos/skubi-pagalba",
    title: "Skubi odontologinė pagalba Klaipėdoje | Bangų klinika",
    description: "Staigus dantų skausmas ar trauma? Skubi odontologinė pagalba Klaipėdoje esant uždegimui, tinimui ar netikėtai traumai. Registruokitės⏩Bangų klinikoje jau dabar.",
    schema: serviceSchema("Skubi odontologinė pagalba Klaipėdoje", "Skubi odontologinė pagalba", "Skubi odontologinė pagalba teikiama Bangų odontologijos klinikoje Klaipėdoje. Paslauga skirta pacientams, kuriems reikalinga skubi dantų gydymo, skausmo malšinimo ar kita odontologinė pagalba Klaipėdos mieste.", `${SITE_ORIGIN}/paslaugos/skubi-pagalba/`),
  },
  {
    route: "/paslaugos/protiniu-dantu-salinimas",
    title: "Protinių dantų šalinimas Klaipėdoje - Bangų klinika",
    description: "Protinių dantų šalinimas Klaipėdoje – saugiai☑️profesionaliai☑️Bangų klinikoje už kainą nuo 150€.⏩Registruokitės konsultacijai jau šiandien.",
    schema: serviceSchema("Protinių dantų šalinimas Klaipėdoje", "Protinių dantų šalinimas", "Protinių dantų šalinimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/protiniu-dantu-salinimas/`),
  },
  {
    route: "/paslaugos/rentgenologiniai-tyrimai",
    title: "Rentgenologiniai tyrimai Klaipėdoje - Bangų klinika",
    description: "Rentgenologiniai tyrimai ir dantų rentgenas Klaipėdoje☑️moderni skaitmeninė įranga☑️tiksli diagnostika už kainą nuo 30€.⏩Registruokitės Bangų klinikoje jau dabar.",
    schema: serviceSchema("Rentgenologiniai tyrimai Klaipėdoje", "Rentgenologiniai tyrimai", "Rentgenologinės diagnostikos paslaugos teikiamos Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/rentgenologiniai-tyrimai/`),
  },
  {
    route: "/paslaugos/vienmomente-implantacija",
    title: "Vienmomentė implantacija Klaipėdoje - Bangų klinika",
    description: "Vienmomentė implantacija Klaipėdoje – danties šalinimas ir implanto įsriegimas per vieną vizitą☑️greičiau, patogiau☑️Kaina nuo 1200€.⏩Registruokitės konsultacijai jau dabar.",
    schema: serviceSchema("Vienmomentė implantacija Klaipėdoje", "Vienmomentė implantacija", "Vienmomentės implantacijos paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/vienmomente-implantacija/`),
  },
  {
    route: "/paslaugos/dantu-karunieles",
    title: "Dantų karūnėlės (vainikėliai) Klaipėdoje - Bangų klinika",
    description: "Pažeistas ar nusilpęs dantis? Dantų karūnėlės (vainikėliai) Klaipėdoje☑️tvirtai☑️estetiškai atkuria dantį jau nuo 400€.⏩Registruokitės konsultacijai Bangų klinikoje.",
    schema: serviceSchema("Dantų karūnėlės Klaipėdoje", "Dantų karūnėlės", "Dantų karūnėlių (vainikėlių) paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/dantu-karunieles/`),
  },
  {
    route: "/paslaugos/kompensacija-protezavimui",
    title: "Kompensacija dantų protezavimui Klaipėdoje - Bangų klinika",
    description: "TLK kompensacija dantų protezavimui Klaipėdoje☑️sužinokite, ar priklausote tinkamų pacientų grupei☑️Bangų klinikoje.⏩Registruokitės konsultacijai jau dabar.",
    schema: serviceSchema("Kompensacija dantų protezavimui Klaipėdoje", "Kompensuojamas dantų protezavimas", "Informacija apie TLK kompensuojamą dantų protezavimą teikiama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/kompensacija-protezavimui/`),
  },
  {
    route: "/paslaugos/sinuso-pakelimas",
    title: "Sinuso pakėlimas Klaipėdoje - Bangų klinika",
    description: "Sinuso pakėlimą Klaipėdoje atliekame profesionaliai☑️saugiai☑️patikimai☑️Kaina nuo 200€, tinkamas implantacijos paruošimas.⏩Registruokitės konsultacijai jau dabar.",
    schema: serviceSchema("Sinuso pakėlimas Klaipėdoje", "Sinuso pakėlimas", "Sinuso pakėlimo procedūra atliekama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/sinuso-pakelimas/`),
  },
  {
    route: "/paslaugos/zandikaulio-kaulo-priauginimas",
    title: "Žandikaulio kaulo priauginimas Klaipėdoje - Bangų klinika",
    description: "Nepakanka kaulo implantacijai? Žandikaulio kaulo priauginimas (kaulo augmentacija) Klaipėdoje☑️individualus planavimas☑️kaina nuo 450€.⏩Registruokitės konsultacijai jau dabar.",
    schema: serviceSchema("Žandikaulio kaulo priauginimas Klaipėdoje", "Žandikaulio kaulo priauginimas", "Žandikaulio kaulo priauginimo (augmentacijos) paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/zandikaulio-kaulo-priauginimas/`),
  },
  {
    route: "/paslaugos/dantu-tiltai",
    title: "Dantų tiltai Klaipėdoje - Bangų klinika",
    description: "Trūksta danties? Dantų tiltai Klaipėdoje – fiksuotas protezavimas☑️natūrali išvaizda☑️kaina nuo 400€ už vienetą.⏩Registruokitės konsultacijai Bangų klinikoje jau dabar.",
    schema: serviceSchema("Dantų tiltai Klaipėdoje", "Dantų tiltai", "Dantų tiltų (fiksuoto protezavimo) paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/dantu-tiltai/`),
  },
  {
    route: "/paslaugos/bruksizmo-dantu-kapa",
    title: "Bruksizmo dantų kapa Klaipėdoje - Bangų klinika",
    description: "Griežiate dantimis miegodami? Bruksizmo dantų kapa Klaipėdoje apsaugos dantis nuo dilimo☑️pagaminta individualiai☑️kaina nuo 150€.⏩Registruokitės jau dabar.",
    schema: serviceSchema("Bruksizmo dantų kapa Klaipėdoje", "Bruksizmo dantų kapa", "Bruksizmo (dantų griežimo) kapų gamybos paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/bruksizmo-dantu-kapa/`),
  },
  {
    route: "/paslaugos/cirkonio-keramikos-vainikelis",
    title: "Cirkonio keramikos vainikėlis Klaipėdoje - Bangų klinika",
    description: "Cirkonio keramikos vainikėlis Klaipėdoje – natūrali išvaizda☑️tvirtumas☑️kaina nuo 400€.⏩Registruokitės konsultacijai Bangų klinikoje jau šiandien.",
    schema: serviceSchema("Cirkonio keramikos vainikėlis Klaipėdoje", "Cirkonio keramikos vainikėlis", "Cirkonio keramikos vainikėlių paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/cirkonio-keramikos-vainikelis/`),
  },
  {
    route: "/paslaugos/vaiku-profilaktinis-patikrinimas",
    title: "Vaikų profilaktinis dantų patikrinimas Klaipėdoje - Bangų klinika",
    description: "Vaikų dantų patikrinimas Klaipėdoje☑️ankstyva diagnostika☑️rūpestingi specialistai☑️kaina nuo 30€.⏩Registruokite vaiką profilaktiniam patikrinimui jau dabar.",
    schema: serviceSchema("Vaikų profilaktinis dantų patikrinimas Klaipėdoje", "Vaikų profilaktinis dantų patikrinimas", "Vaikų profilaktinio dantų patikrinimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/vaiku-profilaktinis-patikrinimas/`),
  },
  {
    route: "/paslaugos/dantu-fluoravimas",
    title: "Dantų fluoravimas Klaipėdoje - Bangų klinika",
    description: "Dantų fluoravimas Klaipėdoje – emalio stiprinimas fluoro laku Bangų odontologijos klinikoje. 1 dantis – 10€.⏩Registruokitės profilaktinei procedūrai.",
    schema: serviceSchema("Dantų fluoravimas Klaipėdoje", "Dantų fluoravimas", "Profesionalus dantų fluoravimas (dantų padengimas fluoro laku) teikiamas Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/dantu-fluoravimas/`),
  },
  {
    route: "/paslaugos/dantenu-uzdegimas-gingivitas",
    title: "Dantenų uždegimas (gingivitas) Klaipėdoje - Bangų klinika",
    description: "Dantenų uždegimo (gingivito) gydymas Klaipėdoje – kraujuojančių, patinusių dantenų priežiūra Bangų klinikoje. Kaina nuo 40€ iki 80€.⏩Registruokitės konsultacijai.",
    schema: serviceSchema("Dantenų uždegimo (gingivito) gydymas Klaipėdoje", "Dantenų uždegimo gydymas", "Dantenų uždegimo (gingivito) gydymo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/dantenu-uzdegimas-gingivitas/`),
  },
  {
    route: "/paslaugos/pulinio-atverimas",
    title: "Pūlinio atvėrimas Klaipėdoje - Bangų klinika",
    description: "Danties pūlinio atvėrimas (incizija) ir drenavimas Klaipėdoje – Bangų odontologijos klinikoje. Kaina nuo 70€ iki 150€.⏩Registruokitės skubiai ar konsultacijai.",
    schema: serviceSchema("Pūlinio atvėrimas Klaipėdoje", "Pūlinio atvėrimas", "Danties pūlinio atvėrimo (incizijos) ir drenavimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/pulinio-atverimas/`),
  },
  {
    route: "/paslaugos/isimami-protezai",
    title: "Išimami dantų protezai Klaipėdoje - Bangų klinika",
    description: "Išimami dantų protezai Klaipėdoje – daliniai, pilni, lanko atraminiai ir ant implantų fiksuojami protezai Bangų odontologijos klinikoje. Kaina nuo 180€ iki 690€.⏩Registruokitės konsultacijai.",
    schema: serviceSchema("Išimami dantų protezai Klaipėdoje", "Išimami dantų protezai", "Išimamų dantų protezų paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/isimami-protezai/`),
  },
  {
    route: "/paslaugos/dantu-uzklotai",
    title: "Dantų užklotai Klaipėdoje - Bangų klinika",
    description: "Dantų užklotai Klaipėdoje – individualios restauracijos stipriai pažeisto kramtomojo danties atkūrimui Bangų odontologijos klinikoje. Kaina nuo 450€.⏩Registruokitės konsultacijai.",
    schema: serviceSchema("Dantų užklotai Klaipėdoje", "Dantų užklotai", "Individualių dantų užklotų paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/dantu-uzklotai/`),
  },
  {
    route: "/paslaugos/dantu-mikroprotezavimas",
    title: "Dantų mikroprotezavimas Klaipėdoje - Bangų klinika",
    description: "Dantų mikroprotezavimas Klaipėdoje – įklotai, užklotai ir daliniai vainikėliai Bangų odontologijos klinikoje. Kaina nuo 450€ iki 650€.⏩Registruokitės konsultacijai.",
    schema: serviceSchema("Dantų mikroprotezavimas Klaipėdoje", "Dantų mikroprotezavimas", "Dantų mikroprotezavimo paslauga (įklotai, užklotai, daliniai vainikėliai) teikiama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/dantu-mikroprotezavimas/`),
  },
  {
    route: "/paslaugos/straumann-dantu-implantai",
    title: "STRAUMANN dantų implantai Klaipėdoje - Bangų klinika",
    description: "STRAUMANN dantų implantai Klaipėdoje – Šveicariška implantų sistema Bangų odontologijos klinikoje. Implantas nuo 650€.⏩Registruokitės konsultacijai jau šiandien.",
    schema: serviceSchema("STRAUMANN dantų implantai Klaipėdoje", "STRAUMANN dantų implantai", "Dantų implantacija STRAUMANN implantų sistema Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/straumann-dantu-implantai/`),
  },
  {
    route: "/paslaugos/dantu-balinimo-kapos",
    title: "Dantų balinimo kapos Klaipėdoje - Bangų klinika",
    description: "Individualios dantų balinimo kapos Klaipėdoje – planuojamas namų balinimas Bangų odontologijos klinikoje. Kaina nuo 200€ (be balinimo gelio).⏩Registruokitės konsultacijai.",
    schema: serviceSchema("Dantų balinimo kapos Klaipėdoje", "Dantų balinimo kapos", "Individualių dantų balinimo kapų gamyba ir namų balinimo planavimas Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/dantu-balinimo-kapos/`),
  },
  {
    route: "/paslaugos/gydymas-icon-sistema",
    title: "Gydymas „ICON“ sistema Klaipėdoje - Bangų klinika",
    description: "Gydymas „ICON“ sistema Klaipėdoje – mikroinvazinis ankstyvo karieso ir baltų emalio dėmių gydymas be gręžimo. Kaina nuo 80€.⏩Registruokitės Bangų klinikoje.",
    schema: serviceSchema("Gydymas „ICON“ sistema Klaipėdoje", "Gydymas „ICON“ sistema", "Mikroinvazinio gydymo „ICON“ sistema paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Ankstyvo karieso ir baltų emalio dėmių gydymas be gręžimo pacientams Klaipėdos mieste.", `${SITE_ORIGIN}/paslaugos/gydymas-icon-sistema/`),
  },
  {
    route: "/paslaugos/terapinis-dantu-gydymas",
    title: "Terapinis dantų (karieso) gydymas Klaipėdoje - Bangų klinika",
    description: "Terapinis dantų gydymas Klaipėdoje – karieso gydymas☑️plombavimas☑️nuskilusių dantų atkūrimas Bangų klinikoje.⏩Registruokitės konsultacijai jau šiandien.",
    schema: serviceSchema("Terapinis dantų gydymas Klaipėdoje", "Terapinis dantų gydymas", "Terapinio dantų gydymo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Karieso diagnostika ir gydymas, dantų plombavimas, senų restauracijų keitimas ir jautrumo gydymas pacientams Klaipėdos mieste.", `${SITE_ORIGIN}/paslaugos/terapinis-dantu-gydymas/`),
  },
  {
    route: "/paslaugos/dantu-higiena-vaikams",
    title: "Dantų higiena vaikams Klaipėdoje - Bangų klinika",
    description: "Profesionali dantų higiena vaikams Klaipėdoje☑️saugi, neskausminga ir vaiko amžių atitinkanti procedūra☑️kaina nuo 70€.⏩Registruokite savo vaiką jau šiandien.",
    schema: serviceSchema("Dantų higiena vaikams Klaipėdoje", "Dantų higiena vaikams", "Dantų higienos paslauga vaikams teikiama Bangų odontologijos klinikoje Klaipėdoje.", `${SITE_ORIGIN}/paslaugos/dantu-higiena-vaikams/`),
  },
  // ===== BLOG =====
  {
    route: "/straipsniai",
    title: "Straipsniai apie dantų sveikatą | Bangų klinika",
    description: "Naudinga informacija apie dantų sveikatą, gydymą ir priežiūrą. Odontologų patarimai ir atsakymai į dažniausius klausimus iš Bangų klinikos Klaipėdoje.",
  },
  {
    route: "/straipsniai/ka-daryti-kai-skauda-danti",
    title: "Ką daryti, kai skauda dantį? | Bangų klinika",
    description: "Danties skausmas dažnai užklumpa netikėtai. Ką daryti, kai skauda dantį, kaip atskirti skubią situaciją ir kur kreiptis – atsakome į dažniausius klausimus.",
  },
  {
    route: "/straipsniai/ka-daryti-kai-vaikui-skauda-danti",
    title: "Ką daryti, kai vaikui skauda dantį? | Bangų klinika",
    description: "Kai vaikui skauda dantį, svarbu žinoti, kaip padėti iki vizito ir kada reikia skubios pagalbos. Odontologų patarimai tėvams iš Bangų klinikos Klaipėdoje.",
  },
  {
    route: "/straipsniai/kiek-laiko-skauda-danti-po-kanalu-valymo",
    title: "Kiek laiko skauda dantį po kanalų valymo? | Bangų klinika",
    description: "Kiek laiko skauda dantį po kanalų valymo, kada tai normali gijimo dalis ir kada reikia kreiptis į odontologą – paaiškina Bangų klinikos specialistai Klaipėdoje.",
  },
  {
    route: "/straipsniai/kiek-trunka-burnos-higiena",
    title: "Kiek trunka burnos higiena? | Bangų klinika",
    description: "Kiek trunka profesionali burnos higiena, kas veikia procedūros laiką ir kada gali prireikti kelių vizitų – paaiškina Bangų klinikos specialistai Klaipėdoje.",
  },
  {
    route: "/straipsniai/kam-kompensuojami-dantu-implantai",
    title: "Kam kompensuojami dantų implantai? | Bangų klinika",
    description: "Kam ir kada priklauso kompensacija už dantų implantus bei protezavimą Lietuvoje – kompensuojamos sumos ir sąlygos aiškiai paaiškinamos Bangų klinikoje Klaipėdoje.",
  },
  {
    route: "/straipsniai/kaulo-priauginimas-ka-butina-zinoti-pries-operacija",
    title: "Kaulo priauginimas: ką būtina žinoti prieš operaciją? | Bangų klinika",
    description: "Kaip vyksta kaulo priauginimas, kiek trunka gijimas ir kokie simptomai gali rodyti komplikaciją – paaiškina Bangų klinikos specialistai Klaipėdoje.",
  },
  {
    route: "/straipsniai/ka-daryti-kai-susidaro-danties-pulinys",
    title: "Ką daryti, kai susidaro danties pūlinys? | Bangų klinika",
    description: "Danties pūlinys reikalauja odontologo pagalbos. Kaip atpažinti simptomus, kaip palengvinti skausmą iki vizito ir kada būtina skubi pagalba – Bangų klinika Klaipėdoje.",
  },
  {
    route: "/straipsniai/kaip-saugiai-balinti-dantis-namuose",
    title: "Kaip saugiai balinti dantis namuose? | Bangų klinika",
    description: "Kaip saugiai balinti dantis namuose, kurie metodai iš tiesų veikia ir kokių priemonių reikėtų vengti – paaiškina Bangų klinikos specialistai Klaipėdoje.",
  },
  {
    route: "/straipsniai/kariesas-be-grezimo-ka-galima-atlikti-klinikoje-ir-namuose",
    title: "Kariesas be gręžimo: ką galima atlikti klinikoje ir namuose? | Bangų klinika",
    description: "Kada karieso gydymas be gręžimo galimas, kokie metodai taikomi klinikoje ir ką galima daryti namuose – paaiškina Bangų klinikos specialistai Klaipėdoje.",
  },
  {
    route: "/straipsniai/kaip-pasalinti-dantu-akmenis",
    title: "Kaip pašalinti dantų akmenis? | Bangų klinika",
    description: "Kodėl susidaro dantų akmenys, kodėl jų negalima šalinti namuose ir kaip vyksta profesionali procedūra – paaiškina Bangų klinikos specialistai Klaipėdoje.",
  },
  {
    route: "/straipsniai/dantu-griezimas-nakti-kada-padeda-kapos",
    title: "Dantų griežimas naktį: kada padeda kapos? | Bangų klinika",
    description: "Kaip atpažinti dantų bruksizmą, kokias problemas jis gali sukelti ir kada padeda apsauginė kapa – paaiškina Bangų klinikos specialistai Klaipėdoje.",
  },
  {
    route: "/straipsniai/ka-daryti-kai-skauda-protini-danti",
    title: "Ką daryti, kai skauda protinį dantį? | Bangų klinika",
    description: "Protinio danties skausmas – viena dažniausių priežasčių, dėl kurių kreipiamasi į odontologą. Sužinokite priežastis, ką daryti ir kada būtina kreiptis į gydytoją.",
  },
  {
    route: "/straipsniai/ar-skauda-kai-traukia-danti",
    title: "Ar skauda, kai traukia dantį? | Bangų klinika",
    description: "Ar danties traukimas skausminga procedūra? Ko tikėtis po rovimo ir kaip prižiūrėti žaizdą – atsakome į dažniausius klausimus apie danties šalinimą.",
  },
  {
    route: "/straipsniai/kodel-skauda-danti-po-plombavimo",
    title: "Kodėl skauda dantį po plombavimo? | Bangų klinika",
    description: "Nedidelis jautrumas po plombavimo dažnai yra laikinas. Sužinokite, kada skausmas yra normali gijimo dalis ir kada reikia kreiptis į odontologą.",
  },
  {
    route: "/straipsniai/ka-reikia-zinoti-po-danties-implantacijos",
    title: "Ką reikia žinoti po danties implantacijos? | Bangų klinika",
    description: "Po danties implantacijos svarbiausia tinkama priežiūra. Sužinokite, kokia savijauta yra normali, ką galima valgyti ir ko vengti, kad gijimas vyktų sklandžiai.",
  },
  {
    route: "/straipsniai/kokie-yra-danties-implanto-atmetimo-pozymiai",
    title: "Kokie yra danties implanto atmetimo požymiai? | Bangų klinika",
    description: "Kaip atpažinti, kad implantas neprigijo? Sužinokite, į kokius požymius svarbu atkreipti dėmesį po dantų implantacijos ir kada reikia kreiptis į gydytoją.",
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
