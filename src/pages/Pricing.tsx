import SEO from '../components/SEO'
import PricingCards from '../components/PricingCards'
import RevealLines from '../components/RevealLines'
import TideLine from '../components/TideLine'
import WaveDivider from '../components/WaveDivider'

import pricing from '../content/pricing.json'

export default function Pricing() {
  // (paliekame tavo structuredData, jei norėsi — gali pildyti iš CMS ateityje)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Odontologijos paslaugos",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klinika"
    }
  }

  return (
    <>
      <SEO
        title={pricing.seo?.title ?? 'Kainos'}
        description={pricing.seo?.description}
        keywords={pricing.seo?.keywords}
        structuredData={structuredData}
      />

      {/* Hero. The page-load motion is the one orchestrated moment here:
          the heading reveals from under its mask, everything else is static. */}
      <section className="shell-bg">
        <div className="container-wide py-section">
          <div className="max-w-3xl">
            <h1 className="text-display font-black">
              <RevealLines lines={[pricing.seo?.title ?? 'Kainos']} />
            </h1>
            <p className="muted measure mt-6 text-lead leading-relaxed">
              {pricing.intro ?? 'Žemiau rasite pagrindines kategorijas — spustelkite kortelę, kad peržiūrėtumėte konkrečias paslaugas ir kainas.'}
            </p>
          </div>
          <TideLine className="mt-12 max-w-xl" />
        </div>
      </section>

      <WaveDivider from="var(--shell)" to="var(--paper)" />

      <section className="container-wide pb-section pt-section-tight">
        <PricingCards />

        <p className="muted mt-8 text-micro">
          {pricing.footnote ?? '* Kainos – orientacinės. Tiksli kaina nustatoma konsultacijos metu.'}
        </p>
      </section>
    </>
  )
}
