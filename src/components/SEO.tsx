import { Helmet } from "react-helmet-async";

const SITE_NAME = "Bangų klinika";
const SITE_URL = "https://banguklinika.lt"; // Replace with your actual domain
const DEFAULT_IMAGE = `${SITE_URL}/hero.jpg`;
const TWITTER_HANDLE = "@banguklinika"; // If you have one

type Props = {
  title?: string;
  description?: string;
  isHome?: boolean;
  keywords?: string;
  image?: string;
  canonical?: string;
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
  structuredData
}: Props) {
  // Title logic
  const finalTitle = isHome ? SITE_NAME : (title ? `${title} | ${SITE_NAME}` : SITE_NAME);
  
  // Canonical URL
  const canonicalUrl = canonical || (typeof window !== 'undefined' ? window.location.href : SITE_URL);

  // Default description if none provided
  const finalDescription = description || "Odontologijos klinika Klaipėdoje. Dantų gydymas, implantacija, CEREC protezavimas, burnos higiena. Nemokama konsultacija.";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="theme-color" content="#0d76d6" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="lt_LT" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={image} />
      {TWITTER_HANDLE && <meta name="twitter:site" content={TWITTER_HANDLE} />}

      {/* Additional SEO */}
      <meta name="author" content={SITE_NAME} />
      <meta name="language" content="Lithuanian" />
      <meta name="geo.region" content="LT-KL" />
      <meta name="geo.placename" content="Klaipėda" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}