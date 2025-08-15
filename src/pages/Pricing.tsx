import SEO from '../components/SEO'
import PricingCards from '../components/PricingCards'
import AnimatedSection from '../components/AnimatedSection'

export default function Pricing() {
  return (
    <AnimatedSection>
      <SEO title="Kainos – Bangų klinika" description="Aiškiai suskirstytos odontologijos paslaugų kainos." />
      <div className="container-narrow">
        <h1 className="text-3xl font-bold mb-3">Kainos</h1>
        <p className="text-gray-600 mb-8">
          Žemiau rasite pagrindines kategorijas — spustelkite kortelę, kad peržiūrėtumėte konkrečias paslaugas ir kainas.
        </p>
        <PricingCards />
        <p className="text-xs text-gray-500 mt-4">* Kainos – orientacinės. Tiksli kaina nustatoma konsultacijos metu.</p>
      </div>
    </AnimatedSection>
  )
}
