import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import PricingCardsLv from '../../components/PricingCardsLv'
import { motion } from 'framer-motion'
import { SITE_URL } from '../../i18n/lv'

export default function CenasLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Zobārstniecības pakalpojumi",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klīnika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Cenas — Bangų zobārstniecības klīnika Klaipēdā"
        description="Zobārstniecības pakalpojumu cenas Bangų klīnikā Klaipēdā. Caurspīdīgas cenas bez slēptajām maksām."
        keywords="zobārstniecības cenas, Bangų klīnika, implanti cena, zobu ārstniecība cena"
        canonical={`${SITE_URL}/lv/cenas`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/kainos` },
          { lang: 'lv', url: `${SITE_URL}/lv/cenas` },
          { lang: 'x-default', url: `${SITE_URL}/kainos` },
        ]}
        structuredData={structuredData}
      />

      <motion.div
        className="container-narrow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <motion.h1
          className="text-3xl font-bold mb-3 text-darkblue-700"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
        >
          Cenas
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Zemāk atradīsiet galvenās kategorijas — noklikšķiniet uz kartes, lai apskatītu konkrētos pakalpojumus un cenas.
        </motion.p>

        <PricingCardsLv />

        <motion.p
          className="text-xs text-gray-500 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          * Cenas ir orientējošas. Precīza cena tiek noteikta konsultācijas laikā.
        </motion.p>
      </motion.div>
    </AnimatedSection>
  )
}
