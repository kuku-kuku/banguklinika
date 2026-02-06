import { Helmet } from "react-helmet-async";

const SITE_NAME = "Bangų klinika";
const SITE_URL = "https://banguklinika.lt";
const DEFAULT_IMAGE = `${SITE_URL}/hero.jpg`;
const TWITTER_HANDLE = "@banguklinika";
const HOME_TITLE = "Odontologijos klinika (odontologai) Klaipėdoje";

type Props = {
  title?: string;
  description?: string;
  isHome?: boolean;
  keywords?: string;
  image?: string;
  canonical?: string; // rekomenduoju paduoti aiškiai iš page
  noindex?: boolean;
  structuredData?: object;
};

export default function SEO({
  title,
  description,
  isHome = false,
  keywords,
  image = DEFAULT_IMAGE,
  canonical,
  noindex = false,
  structuredData,
}: Props) {
  const cleanTitle = (title || "")
    .replace(new RegExp(`\\s*[|–—-]\\s*${SITE_NAME}\\s*$`, "i"), "")
    .replace(new RegExp(`\\s*${SITE_NAME}\\s*$`, "i"), "")
    .trim();

  const finalTitle = isHome
    ? HOME_TITLE
    : cleanTitle
      ? `${cleanTitle} | ${SITE_NAME}`
      : SITE_NAME;

  const finalDescription =
    description ||
    "Odontologijos klinika Klaipėdoje. Dantų gydymas, implantacija, CEREC protezavimas, burnos higiena. Nemokama konsultacija.";

  const canonicalUrl = canonical || SITE_URL;

  const structuredDataObj =
    structuredData || {
      "@context": "https://schema.org",
      "@type": "Dentist",
      name: SITE_NAME,
      image: image,
      url: SITE_URL,
      telephone: "+37060000000",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Pavyzdžio g. 1",
        addressLocality: "Klaipėda",
        addressRegion: "KL",
        postalCode: "91234",
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
    };

  return (
    <Helmet>
      <html lang="lt" />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />

      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="theme-color" content="#0d76d6" />
      <link rel="canonical" href={canonicalUrl} />

      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="lt_LT" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
      {TWITTER_HANDLE && <meta name="twitter:site" content={TWITTER_HANDLE} />}

      <meta name="author" content={SITE_NAME} />
      <meta name="language" content="Lithuanian" />
      <meta name="geo.region" content="LT-KL" />
      <meta name="geo.placename" content="Klaipėda" />

      <script type="application/ld+json">{JSON.stringify(structuredDataObj)}</script>
    </Helmet>
  );
}
