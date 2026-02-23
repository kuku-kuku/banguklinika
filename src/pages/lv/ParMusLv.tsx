import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { CLINIC } from '../../data/clinic'
import { SITE_URL } from '../../i18n/lv'

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
  "Zobu izlīdzināšana ar caurspīdīgiem ORDOLINE kapteiniem."
]

const team = [
  { name: "Rugilė Guntytė", role: "Zobārste", license: "OPL-06438" },
  { name: "Donatas Bitinas", role: "Implantācijas zobārsts", license: "OPL-05611" },
  { name: "Eglė Daknienė", role: "Zobu tehniķe", license: "BPL-04671" },
  { name: "Rūta Garšvienė", role: "Mutes higieniste, zobu izlīdzināšanas kapteiņu koordinatore", license: "BPL-07858" },
  { name: "Jonas Sabulis", role: "Protezēšanas zobārsts", license: "OPL-05936" },
  { name: "Goda Daknytė", role: "Klīnikas administrācijas vadītāja" }
]

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

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">

        {/* HERO TEKSTS */}
        <motion.header className="mb-6" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700">
            Moderna zobārstniecības klīnika Klaipēdā
          </h1>
        </motion.header>

        <motion.div className="prose prose-slate max-w-none mb-8" variants={item}>
          <p>
            Bangų zobārstniecības klīnika ir mājīga un moderna zobārstniecības klīnika Klaipēdā. Šeit vadāmies pēc idejas, ka vizīte pie zobārsta nedrīkst būt biedējoša. Gluži pretēji — tā var būt patīkama. Tādēļ katru klientu sagaidām ar pozitīvu enerģiju un tiecamies, lai pēc vizītes klients aiziet ar platu, skaistu un veselīgu smaidu.
          </p>
        </motion.div>

        {/* PAKALPOJUMI */}
        <motion.section className="mb-10" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Zobārstniecības klīnikā sniegtie pakalpojumi
          </h2>

          <div className="grid sm:grid-cols-2 gap-2">
            <div className="space-y-2">
              {services.filter((_, i) => i % 2 === 0).map((s, i) => (
                <motion.div key={`L-${i}`} variants={item} className="flex items-start gap-2 text-slate-700">
                  <span className="text-brand mt-1"><CheckIcon /></span>
                  <span className="text-sm leading-relaxed">{s}</span>
                </motion.div>
              ))}
            </div>
            <div className="space-y-2">
              {services.filter((_, i) => i % 2 === 1).map((s, i) => (
                <motion.div key={`R-${i}`} variants={item} className="flex items-start gap-2 text-slate-700">
                  <span className="text-brand mt-1"><CheckIcon /></span>
                  <span className="text-sm leading-relaxed">{s}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* LABORATORIJA */}
        <motion.section
          className="mb-10 rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-5 relative overflow-hidden"
          variants={item}
        >
          <div className="pointer-events-none absolute -top-10 -right-10 -z-10 w-48 h-48 rounded-full bg-brand-50 blur-3xl" />
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-3">Zobu tehnikas laboratorija</h2>
          <div className="text-slate-700 space-y-3">
            <p>
              Bangų zobārstniecības klīnikā darbojas profesionāla zobu tehnikas laboratorija, kurā tiek sagatavoti zobārstniecībai, implantācijai un protezēšanai nepieciešamie izstrādājumi. Bez metāla keramikas zobu vainagi, pagaidu vainagi, zobu tilti, protēzes uz implantiem, loka balstprotēzes, laminēti un citi izstrādājumi tiek gatavoti, izmantojot augstākās kvalitātes materiālus un modernās iekārtas.
            </p>
            <p>
              Ar digitālo tehnoloģiju palīdzību visi izstrādājumi tiek izcili precīzi modelēti un pielāgoti katram pacientam individuāli. Protezēšanas precizitāte ir nepieciešama nevainojamam estētiskam izskatam un pilnīgam komfortam.
            </p>
            <p className="text-sm text-slate-600">
              Strādājam ar pasaules ražotājiem: E-MAX Ivoclar Vivadent, Straumann®, Medentika® u.c.
            </p>
          </div>
        </motion.section>

        {/* KOMANDA */}
        <motion.section className="mb-8" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Bangų zobārstniecības klīnikas kolektīvs
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.map((m) => (
              <motion.div key={m.name} variants={item} className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-4">
                <div className="font-semibold text-slate-900">{m.name}</div>
                <div className="text-sm text-slate-600">{m.role}</div>
                {m.license && <div className="text-xs text-slate-500 mt-1">Licences Nr. {m.license}</div>}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div className="mt-6 flex flex-wrap gap-4" variants={item}>
          <Link to="/lv/cenas" className="btn-primary rounded-full px-6 py-3 font-semibold">
            Bangų klīnikas pakalpojumu cenrādis
          </Link>
          <a href={`tel:${CLINIC.phone}`} className="btn-ghost rounded-full px-6 py-3 font-semibold border border-brand text-brand hover:bg-brand-50">
            Zvanīt mums
          </a>
        </motion.div>

      </motion.div>
    </AnimatedSection>
  )
}
