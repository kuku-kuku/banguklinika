import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import about from '../content/about.json'

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": about.schemaOrg?.name ?? "Bangų klinika",
    "image": about.schemaOrg?.image,
    "url": about.schemaOrg?.url,
    "logo": about.schemaOrg?.logo,
    "description": about.schemaOrg?.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": about.schemaOrg?.address?.streetAddress,
      "addressLocality": about.schemaOrg?.address?.addressLocality,
      "postalCode": about.schemaOrg?.address?.postalCode,
      "addressCountry": about.schemaOrg?.address?.addressCountry
    },
    "telephone": about.schemaOrg?.telephone,
    "sameAs": about.schemaOrg?.sameAs,
    "founder": about.schemaOrg?.founder,
    "openingHours": about.schemaOrg?.openingHours
  }

  const services: string[] = about.services as any
  const team = about.team as Array<{ name: string; role: string; license?: string }>

  return (
    <AnimatedSection>
      <SEO
        title={about.seo?.title ?? 'Apie mus'}
        description={about.seo?.description}
        keywords={about.seo?.keywords}
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">
        {/* Hero tekstas */}
        <motion.header className="mb-6" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700">
            {about.hero?.title ?? 'Moderni Odontologijos Klinika Klaipėdoje'}
          </h1>
        </motion.header>

        <motion.div className="prose prose-slate max-w-none mb-8" variants={item}>
          <p>{about.intro}</p>
        </motion.div>

        {/* Paslaugos */}
        <motion.section className="mb-10" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            {about.servicesTitle}
          </h2>

          <div className="grid sm:grid-cols-2 gap-2">
            <div className="space-y-2">
              {services.filter((_, i) => i % 2 === 0).map((s, i) => (
                <motion.div key={`L-${i}-${s}`} variants={item} className="flex items-start gap-2 text-slate-700">
                  <span className="text-brand mt-1"><CheckIcon /></span>
                  <span className="text-sm leading-relaxed">{s}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-2">
              {services.filter((_, i) => i % 2 === 1).map((s, i) => (
                <motion.div key={`R-${i}-${s}`} variants={item} className="flex items-start gap-2 text-slate-700">
                  <span className="text-brand mt-1"><CheckIcon /></span>
                  <span className="text-sm leading-relaxed">{s}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Laboratorija */}
        <motion.section
          className="mb-10 rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-5 relative overflow-hidden"
          variants={item}
        >
          <div className="pointer-events-none absolute -top-10 -right-10 -z-10 w-48 h-48 rounded-full bg-brand-50 blur-3xl" />
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-3">{about.lab?.title}</h2>
          <div className="text-slate-700 space-y-3">
            <p>{about.lab?.p1}</p>
            <p>{about.lab?.p2}</p>
            {about.lab?.note && <p className="text-sm text-slate-600">{about.lab.note}</p>}
          </div>
        </motion.section>

        {/* Komanda */}
        <motion.section className="mb-8" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            {about.teamTitle}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((m) => (
              <motion.div key={m.name} variants={item} className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-4">
                <div className="font-semibold text-slate-900">{m.name}</div>
                <div className="text-sm text-slate-600">{m.role}</div>
                {m.license && <div className="text-xs text-slate-500 mt-1">Licencijos Nr. {m.license}</div>}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA į kainoraštį */}
        {about.cta?.href && (
          <motion.div className="mt-6" variants={item}>
            <Link to={about.cta.href} className="btn-primary rounded-full px-6 py-3 font-semibold">
              {about.cta.text}
            </Link>
          </motion.div>
        )}
      </motion.div>
    </AnimatedSection>
  )
}
