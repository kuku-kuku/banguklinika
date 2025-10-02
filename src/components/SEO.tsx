import { Helmet } from "react-helmet-async";

const SITE_NAME = "Bangų klinika";

type Props = {
  title?: string;        // Pvz.: "Apie mus"
  description?: string;
  isHome?: boolean;      // true tik pagrindiniam puslapiui
};

export default function SEO({ title, description, isHome = false }: Props) {
  // Jei home -> tik "Bangų klinika"
  // Jei kiti -> tik puslapio title
  const finalTitle = isHome ? SITE_NAME : (title || SITE_NAME);

  return (
    <Helmet>
      <title>{finalTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta name="theme-color" content="#0d76d6" />

      {/* Naudinga SEO: social tags */}
      <meta property="og:title" content={finalTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content="website" />
    </Helmet>
  );
}
