import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import about from '../content/about.json'
import Picture from '../components/Picture'

const TEAM_WITH_PHOTO = new Set(['donatas', 'jonas', 'odeta', 'ruta'])

const normalizeFirstName = (name: string) =>
  name
    .split(' ')[0]
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

/* Points at the cropped portraits (scripts/team-portraits.mjs), not the
   branded marketing cards in public/team/ — same sources, name/role artwork
   removed, and these are the ones the responsive pipeline has AVIF for. */
const getPhotoPath = (name: string, photoFile?: string) =>
  `/team-portrait/${photoFile ?? normalizeFirstName(name)}.jpg`
const hasPhoto = (name: string, photoFile?: string) =>
  photoFile ? true : TEAM_WITH_PHOTO.has(normalizeFirstName(name))

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

function TeamPhoto({ name, photoFile }: { name: string; photoFile?: string }) {
  const src = getPhotoPath(name, photoFile)
  const photoOk = hasPhoto(name, photoFile)

  return (
    <div
      className={[
        'relative w-full aspect-[3/4] overflow-hidden bg-shell',
        'wave-mask',
        photoOk ? '' : 'ring-1 ring-hairline',
      ].join(' ')}
    >
      {photoOk ? (
        <Picture
          src={src}
          alt={name}
          sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 30vw"
          className="absolute inset-0 block h-full w-full"
          imgClassName="h-full w-full object-cover"
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

  let team = [...(about.team as Array<{ name: string; role: string; license?: string; photoFile?: string }>)]

  if (!team.some((m) => m.name.toLowerCase().includes('odeta'))) {
    team.push({
      name: 'Odeta Venckutė',
      role: 'Gydytoja odontologė',
      license: 'OPL-05163',
      photoFile: 'Odeta-light',
    })
  }

  team = team
    .slice()
    .sort((a, b) => Number(hasPhoto(b.name, b.photoFile)) - Number(hasPhoto(a.name, a.photoFile)) || a.name.localeCompare(b.name))

  return (
    <AnimatedSection>
      <SEO
        title={about.seo?.title}
        description={about.seo?.description}
        keywords={about.seo?.keywords}
        structuredData={structuredData}
      />

      <motion.div
        className="container-wide py-section-tight"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.header className="mb-12" variants={item}>
          <h1 className="max-w-4xl text-h1 font-black">
            Odontologai Klaipėdos Bangų klinikoje
          </h1>
        </motion.header>

        <motion.section className="mb-20" variants={item}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((m) => (
              <motion.div key={m.name} variants={item} className="w-full">
                <TeamPhoto name={m.name} photoFile={m.photoFile} />

                <div className="pt-5 px-1">
                  <h3 className="text-h3 font-bold leading-tight">{m.name}</h3>
                  <p className="mt-1 text-body font-semibold text-tide-text">{m.role}</p>
                  {m.license && (
                    <div className="muted mt-4 border-t border-hairline pt-4 text-micro font-medium">
                      Licencijos Nr. {m.license}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="mb-20 space-y-8" variants={item}>
          <div className="grid gap-8 border-t border-hairline pt-12 lg:grid-cols-12 lg:gap-16">
            <h2 className="text-h2 font-extrabold lg:col-span-5">
              {about.hero?.title ?? 'Moderni odontologijos klinika Klaipėdoje'}
            </h2>
            <p className="muted measure text-lead leading-relaxed lg:col-span-7">{about.intro}</p>
          </div>

          <div className="shell-bg rounded-image p-7 sm:p-10 lg:p-14">
            <h2 className="mb-8 text-h2 font-extrabold">
              {about.servicesTitle}
            </h2>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              <div className="space-y-4 text-body">
                {services.filter((_, i) => i % 2 === 0).map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-pill bg-tide text-ink">
                      <CheckIcon />
                    </span>
                    <span className="leading-relaxed">{s}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 text-body">
                {services.filter((_, i) => i % 2 === 1).map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-pill bg-tide text-ink">
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
          className="mb-16 border-t border-hairline pt-12"
          variants={item}
        >
          <h2 className="mb-6 text-h2 font-extrabold">
            {about.lab?.title}
          </h2>

          <div className="measure space-y-4 text-body leading-relaxed">
            <p className="muted">{about.lab?.p1}</p>
            <p className="font-semibold">{about.lab?.p2}</p>
          </div>
        </motion.section>

        {about.cta?.href && (
          <div className="mb-20 mt-12">
            <Link
              to={about.cta.href}
              className="btn-ink"
            >
              {about.cta.text}
            </Link>
          </div>
        )}
      </motion.div>
    </AnimatedSection>
  )
}