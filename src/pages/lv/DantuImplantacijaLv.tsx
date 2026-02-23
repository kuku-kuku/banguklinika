import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { CLINIC } from '../../data/clinic'
import { implantacijaLv, SITE_URL } from '../../i18n/lv'

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
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export default function DantuImplantacijaLv() {
  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title={implantacijaLv.seo.title}
        description={implantacijaLv.seo.description}
        keywords={implantacijaLv.seo.keywords}
        canonical={implantacijaLv.seo.canonical}
        alternates={implantacijaLv.seo.alternates}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'MedicalProcedure',
          name: 'Zobu implantācija',
          description: implantacijaLv.seo.description,
          url: implantacijaLv.seo.canonical,
          performedBy: {
            '@type': 'Dentist',
            name: 'Bangų klinika',
            url: SITE_URL,
            telephone: CLINIC.phone,
            address: {
              '@type': 'PostalAddress',
              streetAddress: CLINIC.address,
              addressLocality: 'Klaipēda',
              addressCountry: 'LT',
            },
          },
        }}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">
        {/* HERO */}
        <motion.header className="mb-10 text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            {implantacijaLv.hero.h1}
          </h1>

          <h2 className="text-lg sm:text-xl font-semibold text-darkblue-700 mb-4">
            {implantacijaLv.hero.h2}
          </h2>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            {implantacijaLv.hero.intro.map((p, i) => (
              <p key={i} className="mb-4">{p}</p>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-center sm:justify-start">
            <Link
              to="/lv/kontakti"
              className="btn-primary rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1 mb-8"
            >
              {implantacijaLv.hero.cta}
            </Link>
          </div>

          {/* PRICES */}
          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            <div className="bg-brand-50/50 p-4 border-b border-brand/10 font-bold text-darkblue-700">
              {implantacijaLv.prices.heading}
            </div>
            <div className="divide-y divide-slate-100">
              {implantacijaLv.prices.items.map((pr, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                    <span className="text-slate-700">{pr.name}</span>
                    <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">{pr.price}</span>
                  </div>
                  <div className="px-4 pb-4 -mt-2 text-slate-600 text-sm leading-relaxed">
                    {pr.desc}
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-brand-50/50 p-4 border-y border-brand/10 font-bold text-darkblue-700 mt-2">
              {implantacijaLv.prices.additional.heading}
            </div>
            <div className="divide-y divide-slate-100">
              {implantacijaLv.prices.additional.items.map((pr, i) => (
                <div key={i}>
                  <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                    <span className="text-slate-700">{pr.name}</span>
                    <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">{pr.price}</span>
                  </div>
                  <div className="px-4 pb-4 -mt-2 text-slate-600 text-sm leading-relaxed">
                    {pr.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <h3 className="font-semibold text-darkblue-700">{implantacijaLv.prices.priceNote.heading}</h3>
            <p>{implantacijaLv.prices.priceNote.text}</p>
          </div>
        </motion.header>

        {/* KAS IR IMPLANTĀCIJA */}
        <motion.section className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            {implantacijaLv.sections.whatIs.heading}
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>{implantacijaLv.sections.whatIs.text}</p>
          </div>
        </motion.section>

        {/* IMPLANTĀCIJAS SASTĀVDAĻAS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            No kā sastāv zobu implantācijas risinājums?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Zobu implantācija nav tikai implanta ievietošana. Tā ir kompleksa ārstniecība, ko veido vairāki savstarpēji saistīti elementi:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              'Implants — mākslīgā zoba sakne, ievietota kaulā',
              'Abutments (savienotājs) — starpposma daļa, kas savieno implantu ar protēzi',
              'Kronis vai protēze — redzamā zoba daļa, kas atjauno estētiku un funkciju',
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                <span className="mt-1"><CheckIcon /></span>
                <span className="text-slate-700">{text}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* VAI PIEMĒROTA VISIEM */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            {implantacijaLv.sections.suitable.heading}
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
            <p>
              Zobu implantācija var tikt veikta lielākajai daļai pacientu, taču pirms ārstniecības vienmēr tiek veikts rūpīgs izvērtējums. Galvenie faktori — vispārējais mutes stāvoklis, žokļa kaula daudzums un pacienta veselības stāvoklis.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {implantacijaLv.sections.suitable.items.map((text, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                <span className="mt-1"><CheckIcon /></span>
                <span className="text-slate-700">{text}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* KĀPĒC SVARĪGI ĀTRI */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            {implantacijaLv.sections.whyFast}
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-8">
            <p>
              Zaudētā zoba atjaunošana nevajadzētu atlikties uz ilgu laiku. Lai gan sākumā var šķist, ka viena zoba zudums nerada lielas neērtības, laika gaitā mutē sāk notikt sarežģītas un bieži nemanāmas izmaiņas.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { t: 'Blakuszoba pārvietošanās un sakoduma izmaiņas', d: 'Zaudējot zobu, radusies tukšā vieta mutē nekad nepaliek "neitrāla". Blakuszobi pamazām sāk pārvietoties uz izveidojušos spraugu, bet pretī esošie zobi var pagarināties.' },
              { t: 'Žokļa kaula zudums', d: 'Dabīgā zoba sakne stimulē žokļa kaulu košļāšanas laikā. Zaudējot zobu, šī stimulācija izzūd, tāpēc kauls tajā vietā sāk izzust.' },
              { t: 'Košļāšanas funkcijas problēmas', d: 'Trūkstot zobiem, košļāšanas funkcija kļūst neefektīva. Pārtika netiek pienācīgi sagraizīta, tāpēc lielāka slodze gulstas uz gremošanas sistēmu.' },
              { t: 'Mutes higiēnas problēmas', d: 'Atstarpes starp zobiem kļūst par vietu, kur vieglāk uzkrājas pārtikas atliekas un baktērijas, kas apgrūtina ikdienas mutes higiēnu.' },
            ].map((c, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">{c.t}</h3>
                <p className="text-slate-700 leading-relaxed text-sm">{c.d}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* ALL-ON-4 */}
        <motion.section className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            {implantacijaLv.sections.allOn4.heading}
          </h2>
          <p className="text-slate-700 leading-relaxed">
            {implantacijaLv.sections.allOn4.text}
          </p>
        </motion.section>

        {/* FINAL CTA */}
        <motion.section className="mb-12" variants={item}>
          <div className="bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden">
            <div className="bg-brand-50/40 p-6 sm:p-10 border-b border-brand/10">
              <h2 className="text-xl sm:text-2xl font-bold text-darkblue-700 mb-3">
                {implantacijaLv.sections.cta.heading}
              </h2>
              <p className="text-slate-700 leading-relaxed">
                {implantacijaLv.sections.cta.text}
              </p>
            </div>
            <div className="p-6 sm:p-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`tel:${CLINIC.phone}`}
                className="btn-primary rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition text-center"
              >
                {implantacijaLv.sections.cta.btnPhone}
              </a>
              <Link
                to="/lv/kontakti"
                className="btn-ghost rounded-full px-8 py-3 font-semibold text-lg inline-block border border-brand text-brand hover:bg-brand-50 transition text-center"
              >
                {implantacijaLv.sections.cta.btnContact}
              </Link>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </AnimatedSection>
  )
}
