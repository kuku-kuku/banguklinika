import SEO from '../components/SEO'
import PricingCards from '../components/PricingCards'
import AnimatedSection from '../components/AnimatedSection'
import { motion } from 'framer-motion'

export default function Pricing() {
  return (
    <AnimatedSection>
      <SEO title="Kainos – Bangų klinika" description="Aiškiai suskirstytos odontologijos paslaugų kainos." />

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
          Kainos
        </motion.h1>

        <motion.p
          className="text-gray-600 mb-8"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          Žemiau rasite pagrindines kategorijas — spustelkite kortelę, kad peržiūrėtumėte konkrečias paslaugas ir kainas.
        </motion.p>

        {/* Kortelės (stagger animacija viduje) */}
        <PricingCards />

        <motion.p
          className="text-xs text-gray-500 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
        >
          * Kainos – orientacinės. Tiksli kaina nustatoma konsultacijos metu.
        </motion.p>
      </motion.div>
    </AnimatedSection>
  )
}
