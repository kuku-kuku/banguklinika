import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import about from '../content/about.json'

const TEAM_WITH_PHOTO = new Set(['donatas', 'jonas', 'odeta', 'ruta'])

const normalizeFirstName = (name: string) =>
  name
    .split(' ')[0]
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

const getPhotoPath = (name: string) => `/team/${normalizeFirstName(name)}.jpg`
const hasPhoto = (name: string) => TEAM_WITH_PHOTO.has(normalizeFirstName(name))

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden>
      <path
        d="M20 6L9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TeamPhoto({ name }: { name: string }) {
  const [missing, setMissing] = useState(false)
  const src = getPhotoPath(name)
  const photoOk = hasPhoto(name) && !missing

  return (
    <div
      className={[
        'relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-white shadow-soft',
        'ring-2',
        photoOk ? 'ring-brand/50' : 'ring-slate-200',
      ].join(' ')}
    >
      {!missing ? (
        <img
          src={src}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          onError={() => setMissing(true)}
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-3xl bg-white/90 backdrop-blur border border-slate-200 shadow-soft flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Bangų klinika"
                className="max-w-[78%] max-h-[78%] object-contain opacity-95"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-black/0 to-black/0" />
    </div>
  )
}

export default function About() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: about.schemaOrg?.name ?? 'Bangų klinika',
    image: about.schemaOrg?.image,
    url: about.schemaOrg?.url,
    logo: about.schemaOrg?.logo,
    description: about.schemaOrg?.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: about.schemaOrg?.address?.streetAddress,
      addressLocality: about.schemaOrg?.address?.addressLocality,
      postalCode: about.schemaOrg?.address?.postalCode,
      addressCountry: about.schemaOrg?.address?.addressCountry,
    },
    telephone: about.schemaOrg?.telephone,
    sameAs: about.schemaOrg?.sameAs,
    founder: about.schemaOrg?.founder,
    openingHours: about.schemaOrg?.openingHours,
  }

  const services: string[] = about.services as any

  let team = [...(about.team as Array<{ name: string; role: string; license?: string }>)]

  if (!team.some((m) => m.name.toLowerCase().includes('odeta'))) {
    team.push({
      name: 'Odeta Venckutė',
      role: 'Gydytoja odontologė',
      license: 'OPL-05163',
    })
  }

  team = team
    .slice()
    .sort((a, b) => Number(hasPhoto(b.name)) - Number(hasPhoto(a.name)) || a.name.localeCompare(b.name))

  return (
    <AnimatedSection>
      <SEO
        title="Odontologijos klinika Klaipėdoje | Bangų klinika"
        description={about.seo?.description}
        keywords={about.seo?.keywords}
        structuredData={structuredData}
      />

      <motion.div
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.header className="mb-12" variants={item}>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-darkblue-700">
            Odontologai Klaipėdos Bangų klinikoje
          </h1>
        </motion.header>

        <motion.section className="mb-20" variants={item}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((m) => (
              <motion.div key={m.name} variants={item} className="w-full">
                <TeamPhoto name={m.name} />

                <div className="pt-5 px-1">
                  <h3 className="font-bold text-slate-900 text-2xl leading-tight mb-1">{m.name}</h3>
                  <p className="text-lg text-brand font-semibold mb-4">{m.role}</p>
                  {m.license && (
                    <div className="text-sm text-slate-500 pt-4 border-t border-slate-100 font-medium tracking-wide">
                      Licencijos Nr. {m.license}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-20 grid gap-8" variants={item}>
          <div className="rounded-[32px] border border-sky-200 bg-white shadow-soft p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              {about.hero?.title ?? 'Moderni odontologijos klinika Klaipėdoje'}
            </h2>

            <div className="max-w-none">
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">{about.intro}</p>
            </div>
          </div>

          <div className="rounded-[32px] border border-emerald-200 bg-gradient-to-br from-white to-emerald-50 shadow-soft p-6 sm:p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl font-semibold text-darkblue-700 mb-8">
              {about.servicesTitle}
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              <div className="space-y-4 text-base sm:text-lg text-slate-700">
                {services.filter((_, i) => i % 2 === 0).map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-1 ring-emerald-200">
                      <CheckIcon />
                    </span>
                    <span className="leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-base sm:text-lg text-slate-700">
                {services.filter((_, i) => i % 2 === 1).map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 ring-1 ring-emerald-200">
                      <CheckIcon />
                    </span>
                    <span className="leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          className="mb-16 rounded-3xl border border-brand bg-white shadow-soft p-8"
          variants={item}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-darkblue-700 mb-4">
            {about.lab?.title}
          </h2>

          <div className="text-slate-700 text-lg space-y-4">
            <p>{about.lab?.p1}</p>
            <p className="font-medium text-darkblue-600">{about.lab?.p2}</p>
          </div>
        </motion.section>

        {about.cta?.href && (
          <div className="mt-12 mb-20 text-center">
            <Link
              to={about.cta.href}
              className="btn-primary rounded-full px-12 py-5 font-bold text-xl inline-block shadow-lg"
            >
              {about.cta.text}
            </Link>
          </div>
        )}
      </motion.div>
    </AnimatedSection>
  )
}