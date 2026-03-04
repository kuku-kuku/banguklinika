import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { CLINIC } from '../../data/clinic'
import { SITE_URL } from '../../i18n/lv'

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } },
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
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

const services = [
  "Zobu ārstniecība, konsultācijas zobu kopšanas jautājumos.",
  "Zobu plombēšana.",
  "Implanti (Straumann®, Medentika®).",
  "Digitālā zobu protezēšana CEREC sistēmā, protezēšana uz implantiem, zobu kroņi, zobu tilti, vainagi, uzklājumi, laminēti.",
  "Zobu protezēšana uzreiz uz vietas.",
  "Mikroprotezēšana (daļēji vainagi — kroņi, ieliktņi, uzklājumi, laminēti).",
  "Profesionālā mutes higiēna.",
  "Estētiskā zobu plombēšana.",
  "Bērnu zobu ārstniecība.",
  "Zobu ekstrakcija, zobu sakņu izvilkšana.",
  "Kaula papildināšanas, sinusa paaugstināšanas operācijas.",
  "Zobu protezēšana bez metāla E-MAX IVOCLAR un cirkona keramikā.",
  "Zobu izlīdzināšana ar caurspīdīgiem ORDOLINE kapteiniem.",
]

let team = [
  { name: "Rugilė Guntytė", role: "Zobārste", license: "OPL-06438" },
  { name: "Donatas Bitinas", role: "Implantācijas zobārsts", license: "OPL-05611" },
  { name: "Eglė Daknienė", role: "Zobu tehniķe", license: "BPL-04671" },
  { name: "Rūta Garšvienė", role: "Mutes higieniste, zobu izlīdzināšanas kapteiņu koordinatore", license: "BPL-07858" },
  { name: "Jonas Sabulis", role: "Protezēšanas zobārsts", license: "OPL-05936" },
  { name: "Goda Daknytė", role: "Klīnikas administrācijas vadītāja" },
]

if (!team.some((m) => m.name.toLowerCase().includes('odeta'))) {
  team.push({
    name: 'Odeta Venckutė',
    role: 'Zobārste',
    license: 'OPL-05163',
  })
}

team = team
  .slice()
  .sort((a, b) => Number(hasPhoto(b.name)) - Number(hasPhoto(a.name)) || a.name.localeCompare(b.name))

export default function ParMusLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Bangų klīnika",
    "image": `${SITE_URL}/hero.jpg`,
    "url": `${SITE_URL}/lv/par-mums`,
    "logo": `${SITE_URL}/logo.png`,
    "description": "Mājīga un moderna zobārstniecības klīnika Klaipēdā. Visi pakalpojumi vienuviet: ārstniecība, protezēšana, implanti, higiēna, ķirurģija u.c.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CLINIC.address,
      "addressLocality": "Klaipēda",
      "postalCode": "92114",
      "addressCountry": "LT"
    },
    "telephone": CLINIC.phone,
    "openingHours": "Mo-Fr 08:00-18:00"
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Par mums — Bangų zobārstniecības klīnika Klaipēdā"
        description="Mājīga un moderna zobārstniecības klīnika Klaipēdā. Visi pakalpojumi vienuviet: ārstniecība, protezēšana, implanti, higiēna, ķirurģija un citi. Iepazīstiet mūsu komandu."
        keywords="par mums, Bangų klīnika, zobārsti Klaipēda, zobārstniecības klīnika, zobu ārstniecība Klaipēda"
        canonical={`${SITE_URL}/lv/par-mums`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/apie` },
          { lang: 'lv', url: `${SITE_URL}/lv/par-mums` },
          { lang: 'x-default', url: `${SITE_URL}/apie` },
        ]}
        structuredData={structuredData}
      />

      <motion.div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12" variants={container} initial="hidden" animate="visible">
        <motion.header className="mb-8" variants={item}>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-darkblue-700">
            Moderna zobārstniecības klīnika Klaipēdā
          </h1>
        </motion.header>

        <motion.div className="prose prose-slate max-w-none mb-12" variants={item}>
          <p className="text-xl text-slate-600 leading-relaxed">
            Bangų zobārstniecības klīnika ir mājīga un moderna zobārstniecības klīnika Klaipēdā. Šeit vadāmies pēc idejas, ka vizīte pie zobārsta nedrīkst būt biedējoša. Gluži pretēji — tā var būt patīkama. Tādēļ katru klientu sagaidām ar pozitīvu enerģiju un tiecamies, lai pēc vizītes klients aiziet ar platu, skaistu un veselīgu smaidu.
          </p>
        </motion.div>

        <motion.section className="mb-20" variants={item}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-darkblue-700 mb-8">Zobārstniecības klīnikā sniegtie pakalpojumi</h2>
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
            <div className="space-y-4 text-lg text-slate-700">
              {services.filter((_, i) => i % 2 === 0).map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-brand mt-1.5">
                    <CheckIcon />
                  </span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4 text-lg text-slate-700">
              {services.filter((_, i) => i % 2 === 1).map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-brand mt-1.5">
                    <CheckIcon />
                  </span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section className="mb-20 rounded-3xl border border-brand bg-white shadow-soft p-8" variants={item}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-darkblue-700 mb-4">Zobu tehnikas laboratorija</h2>
          <div className="text-slate-700 text-lg space-y-4">
            <p>
              Bangų zobārstniecības klīnikā darbojas profesionāla zobu tehnikas laboratorija, kurā tiek sagatavoti zobārstniecībai, implantācijai un protezēšanai nepieciešamie izstrādājumi. Bez metāla keramikas zobu vainagi, pagaidu vainagi, zobu tilti, protēzes uz implantiem, loka balstprotēzes, laminēti un citi izstrādājumi tiek gatavoti, izmantojot augstākās kvalitātes materiālus un modernās iekārtas.
            </p>
            <p className="font-medium text-darkblue-600">
              Ar digitālo tehnoloģiju palīdzību visi izstrādājumi tiek izcili precīzi modelēti un pielāgoti katram pacientam individuāli. Protezēšanas precizitāte ir nepieciešama nevainojamam estētiskam izskatam un pilnīgam komfortam.
            </p>
          </div>
        </motion.section>

        <motion.section className="mb-16" variants={item}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-darkblue-700 mb-10 text-center sm:text-left">
            Bangų zobārstniecības klīnikas kolektīvs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((m) => (
              <motion.div key={m.name} variants={item} className="w-full">
                <TeamPhoto name={m.name} />

                <div className="pt-5 px-1">
                  <h3 className="font-bold text-slate-900 text-2xl leading-tight mb-1">{m.name}</h3>
                  <p className="text-lg text-brand font-semibold mb-4">{m.role}</p>
                  {m.license && (
                    <div className="text-sm text-slate-500 pt-4 border-t border-slate-100 font-medium tracking-wide">
                      Licences Nr. {m.license}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="mt-12 mb-20 text-center">
          <Link to="/lv/cenas" className="btn-primary rounded-full px-12 py-5 font-bold text-xl inline-block shadow-lg">
            Bangų klīnikas pakalpojumu cenrādis
          </Link>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}
