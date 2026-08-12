import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { SITE_URL } from '../../i18n/lv'
import { TableOfContents } from '../../components/TableOfContents'
import ReviewsCarousel from '../../components/ReviewsCarousel'

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

const sectionWrap = 'mb-14 scroll-mt-36 2xl:scroll-mt-24'
const whiteCard = 'bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft'
const innerCard = 'bg-white p-5 rounded-xl border border-slate-200 shadow-sm'

const P  = '#002045'
const S  = '#006b5f'
const SL = '#ecf5fb'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function ToothIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

const tocSections = [
  { id: "cenas", label: "Cenas" },
  { id: "kas-ir", label: "Kas ir plombēšana?" },
  { id: "kad-nepieciesama", label: "Kad nepieciešama?" },
  { id: "veidi", label: "Plombēšanas veidi" },
  { id: "ka-notiek", label: "Procedūras gaita" },
  { id: "info", label: "Informācija pacientiem" },
]

export default function ZobuPlombanaLv() {
  const pageRef = useRef(null)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/zobu-plombana/#service`,
    "name": "Zobu plombēšana Klaipēdā",
    "serviceType": "Zobu plombēšana",
    "description": "Profesionāla zobu plombēšana Bangų zobārstniecības klīnikā Klaipēdā. Kariesa ārstēšana, estētiskā un funkcionālā plombēšana.",
    "url": `${SITE_URL}/lv/pakalpojumi/zobu-plombana/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu plombēšana Klaipēdā | Cena — Bangų klīnika"
        description="Profesionāla zobu plombēšana Klaipēdā. Estētiskā un funkcionālā plombēšana, kariesa ārstēšana, kvalitatīvi materiāli un ilgstošs rezultāts."
        keywords="zobu plombēšana, estētiskā plombēšana, zobu ārstēšana, kariess, Klaipēda, zobārsts"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-plombana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-plombavimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-plombana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-plombavimas` },
        ]}
        structuredData={structuredData}
      />

      <motion.div ref={pageRef} className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start" variants={container} initial="hidden" animate="visible">
        <TableOfContents sections={tocSections} title="Saturs" rootRef={pageRef} cta={{ label: "Pierakstīties vizītei", to: "/lv/kontakti" }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-12 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Zobu plombēšana Klaipēdā
            </h1>

            <div className="mb-8">
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zobu plombēšana ir viena no visbiežāk veiktajām zobārstniecības procedūrām, kas paredzēta, lai apturētu zoba bojājumu progresēšanu un atjaunotu tā funkciju un hermētiskumu. Savlaicīgi veikta zobu plombēšana palīdz aizsargāt zobu no tālākas bojāšanās, samazināt sāpju risku un izvairīties no sarežģītākas ārstēšanas nākotnē.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā veiktā zobu plombēšana balstās uz rūpīgu diagnostiku, modernajiem plombēšanas materiāliem un individuālu pieeju katram pacientam. Procedūras laikā tiek censties ne tikai noņemt bojātās audis, bet arī atjaunot dabīgo zoba formu un košļāšanas funkciju. Pirms ārstēšanas tiek novērtēts zoba stāvoklis, tāpēc tiek izvēlēts piemērotākais plombēšanas veids, kas nodrošina ilgstošu un uzticamu rezultātu.
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <Link to="/lv/kontakti" className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                Pierakstīties vizītam
              </Link>
            </div>

            {/* CENAS */}
            <motion.section id="cenas" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Zobu plombēšanas cenas
                    </h2>
                    <p className="text-slate-600">
                      Zobu plombēšanas cena ir atkarīga no zoba stāvokļa, bojājuma apjoma, izmantotajiem materiāliem un procedūras sarežģītības. Pirms ārstēšanas uzsākšanas Bangų zobārstniecības klīnikā vienmēr tiek veikta konsultācija un profilaktiskā pārbaude, kuru laikā tiek izstrādāts individuāls ārstēšanas plāns.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  {[
                    ['Konsultācija, profilaktiskā pārbaude', '20 €'],
                  ].map(([name, price], i) => (
                    <div key={i} className="flex justify-between items-center bg-white rounded-2xl px-5 py-3 border" style={{ borderColor: S }}>
                      <span className="text-slate-700 text-sm font-medium">{name}</span>
                      <span className="font-extrabold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Plombēšana</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Zobu plombēšana ar gaismas plombu', '70 – 90 €'],
                        ['Zobu plombēšana ar stikla jonomēru', '40 – 60 €'],
                        ['Pagaidu plomba', 'no 40 €'],
                        ['Ārstnieciskais pamats (kalcija/stikla jonomērs)', 'no 15 €'],
                      ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between items-center py-2.5">
                          <span className="text-slate-600 text-sm">{name}</span>
                          <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Papildu pakalpojumi</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Pretsāpju injekcija', '10 €'],
                        ['Vienreizējie materiāli', '15 €'],
                        ['Rentgena uzņēmums', '10 €'],
                        ['Koferdama sistēmas izmantošana', '10 €'],
                      ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between items-center py-2.5">
                          <span className="text-slate-600 text-sm">{name}</span>
                          <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-slate-500 text-sm mt-6">
                  Precīza zobu plombēšanas cena tiek apspriesta individuālās konsultācijas laikā.
                </p>
              </div>
            </motion.section>
          </motion.header>

          {/* DOCTOR CTA */}
          <motion.div className="mt-8 mb-12" variants={item}>
            <div className="bg-white rounded-[28px] border border-sky-200 shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[5fr_4fr] gap-0 items-stretch">
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-700 mb-4">
                    Aicinām pierakstīties konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā novērtēsim jūsu mutes veselības stāvokli, atbildēsim uz jūsu jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs cenšamies, lai katrs pacients justos droši — no pirmās konsultācijas līdz gala rezultātam. Pierakstieties un speriet pirmo soli ceļā uz veselīgu smaidu.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts detalizēts klīniskais novērtējums',
                        'tiek apspriesti iespējamie ārstēšanas veidi',
                        'tiek izskaidroti procedūras posmi un termiņi',
                        'tiek izstrādāts individuāls ārstēšanas plāns',
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1"><CheckIcon /></span>
                          <span className="leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/lv/kontakti"
                    className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
                  >
                    Pierakstīties vizītam
                  </Link>
                </div>
                <div className="relative aspect-[4/5] bg-sky-50">                  <img
                    src="/team/Odeta-light%20LV.jpg"
                    alt="Odeta Balsienė – zobārste Bangų klīnikā"
                    className="absolute inset-0 w-full h-full object-contain"
                  loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_15%)] hidden lg:block" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* REVIEWS */}
          <motion.div className="mb-10 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          {/* KAS IR */}
          <motion.section id="kas-ir" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6 text-center sm:text-left">
                Kas ir zobu plombēšana?
              </h2>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
                <p className="mb-4">
                  Zobu plombēšana ir zobārstniecības procedūra, kuras laikā tiek noņemtas kariesa vai citādi bojātās zobu audis, bet izveidotā dobums tiek atjaunots ar speciālu plombēšanas materiālu. Šādā veidā zobs kļūst hermētisks, atgūst savu funkciju un tiek aizsargāts no baktēriju iekļūšanas un tālākas bojāšanās.
                </p>
                <p>
                  Plombēšanas laikā tiek atjaunota ne tikai zoba struktūra, bet arī tā anatomiskā forma, kas ļauj pareizi košļāt un izvairīties no nevienmērīgas slodzes. Atkarībā no bojājuma dziļuma un vietas var tikt piemēroti dažādi plombēšanas risinājumi — no vienkāršas virsmas plombēšanas līdz dziļākām restaurācijām.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className={innerCard}>
                  <ToothIcon />
                  <h3 className="font-semibold text-darkblue-700 mb-2">Funkcijas atjaunošana</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Tiek atjaunota zoba košļāšanas funkcija un anatomiskā forma, novēršot sakodiens problēmas.
                  </p>
                </div>
                <div className={innerCard}>
                  <ShieldIcon />
                  <h3 className="font-semibold text-darkblue-700 mb-2">Aizsardzība un hermētiskums</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Tiek novērsta baktēriju izplatīšanās un zoba nerva bojājumi.
                  </p>
                </div>
                <div className={innerCard}>
                  <ClockIcon />
                  <h3 className="font-semibold text-darkblue-700 mb-2">Ilgmūžība</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Savlaicīgi veikta plombēšana ļauj saglabāt dabīgo zobu daudzus gadus.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KAD NEPIECIEŠAMA */}
          <motion.section id="kad-nepieciesama" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kad nepieciešama zobu plombēšana?
              </h2>

              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-6">
                <p>
                  Zobu plombēšana ir nepieciešama, kad zobu audis ir bojātas un nepieciešams apturēt tālāko bojājuma procesu. Visbiežāk plombēšana tiek veikta agrīnās stadijās, kad problēmu vēl var atrisināt konservatīvi. Pie zobārsta ieteicams vērsties, ja pamanāmas šādas pazīmes:
                </p>
              </div>

              <div className="grid sm:grid-cols-1 gap-4 mb-4">
                {[
                  "Redzami kariesa bojājumi vai tumši plankumi uz zoba virsmas",
                  "Zoba sāpes vai jutīgums pret aukstumu, siltumu vai saldu",
                  "Saplaisājis vai ieplīsis zobs, bojāts košļājot vai traumas rezultātā",
                  "Vecas, hermētiski nesaistītas plombas, kas var ļaut baktērijām iekļūt zoba iekšpusē",
                  "Ēdiena iespiešanās vai nepatīkama sajūta konkrētā zoba vietā"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1"><CheckIcon /></span>
                    <span className="text-slate-700 font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 italic">
                Savlaicīgi veikta plombēšana palīdz aizsargāt zobu no tālākas bojāšanās, samazina sāpju risku un ļauj izvairīties no sakņu kanālu ārstēšanas vai zoba zaudēšanas nākotnē.
              </p>
            </div>
          </motion.section>

          {/* PLOMBĒŠANAS VEIDI */}
          <motion.section id="veidi" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kādi zobu plombēšanas veidi tiek piemēroti?
              </h2>

              <p className="text-slate-700 mb-6">
                Zobu plombēšana nav vienāda visiem pacientiem — plombēšanas veids tiek izvēlēts, ņemot vērā zoba bojājuma raksturu, dziļumu un vietu. Bangų zobārstniecības klīnikā katram pacientam tiek izstrādāts individuāls ārstēšanas plāns.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { title: "Ārstnieciskā (funkcionālā) plombēšana", desc: "Paredzēta kariesa bojāto zobu atjaunošanai un aizsardzībai no tālākas bojāšanās." },
                  { title: "Estētiskā plombēšana", desc: "Kad tiek atjaunota ne tikai zoba funkcija, bet arī tā forma un krāsa (īpaši aktuāli priekšzobiem)." },
                  { title: "Pagaidu plombēšana", desc: "Tiek piemērota starp ārstēšanas posmiem vai kad nepieciešams novērot zoba stāvokli pirms pastāvīgās plombēšanas." },
                  { title: "Dziļā plombēšana", desc: "Kad bojājums ir tuvu zoba nervam un nepieciešama īpaša precizitāte un papildu aizsargmateriāli." }
                ].map((type, i) => (
                  <div key={i} className={innerCard}>
                    <h3 className="font-bold text-darkblue-700 mb-2">{type.title}</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* PROCEDŪRAS GAITA */}
          <motion.section id="ka-notiek" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kā tiek veikta zobu plombēšana?
              </h2>

              <p className="text-slate-700 mb-8">
                Zobu plombēšana Bangų zobārstniecības klīnikā tiek veikta, ievērojot skaidru, drošu un pacientam saprotamu procedūras gaitu.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Apskate un diagnostika</h3>
                  <p className="text-sm text-slate-600 relative z-10">
                    Zobārsts novērtē zoba stāvokli, nosaka bojājuma dziļumu un, ja nepieciešams, veic rentgena izmeklēšanu. Tas ļauj precīzi plānot ārstēšanu.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Audu sagatavošana</h3>
                  <p className="text-sm text-slate-600 relative z-10">
                    Tiek noņemtas kariesa bojātās vai vājinātās zobu audis, lai nodrošinātu, ka baktērijas neizplatās tālāk. Svarīgi tīri iztīrīt dobumu.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Plombēšana</h3>
                  <p className="text-sm text-slate-600 relative z-10">
                    Sagatavotais dobums tiek atjaunots ar modernu plombēšanas materiālu, atjaunojot dabīgo zoba formu. Materiāls tiek slāņots un sacietināts.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden group">
                  <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Pulēšana</h3>
                  <p className="text-sm text-slate-600 relative z-10">
                    Plomba tiek koriģēta un pulēta, lai būtu gluda, ērta sakodinot un dabiski iederos ar pārējiem zobiem.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* INFO */}
          <motion.section id="info" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Svarīga informācija pacientiem
              </h2>

              <div className="space-y-6">
                <div className={innerCard}>
                  <h3 className="font-bold text-lg text-darkblue-700 mb-3">Vai zobu plombēšana ir sāpīga?</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Zobu plombēšana parasti tiek veikta bez sāpēm, izmantojot vietējo anestēziju. Pirms procedūras zobārsts parūpējas, lai justos komfortabli. Procedūras laikā var sajust tikai nelielu spiedienu vai vibrāciju. Pēc plombēšanas dažos gadījumos var rasties īslaicīgs jutīgums, kas ātri pāriet.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-lg text-darkblue-700 mb-3">Cik ilgi kalpo zobu plombas?</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Kalpošanas laiks ir atkarīgs no plombas lieluma, vietas un kopšanas. Kvalitatīvi veiktas plombas kalpo daudzus gadus. Lielāko ietekmi uz ilgmūžību atstāj personīgā mutes higiēna un regulāras profilaktiskās pārbaudes, kas ļauj savlaicīgi pamanīt un koriģēt vecās plombas.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-lg text-darkblue-700 mb-3">Ko svarīgi zināt pēc zobu plombēšanas?</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Pirmajās stundās pēc ārstēšanas ieteicams izvairīties no cieta ēdiena un nekošļāt ar plombēto pusi, īpaši ja tika piemērota anestēzija (lai neiekodieties). Ja jūtat īslaicīgu jutīgumu pret aukstumu vai košļājot — tā ir normāla reakcija, kas parasti pāriet dažu dienu laikā. Vissvarīgākais ir rūpīga ikdienas higiēna.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC MĒS & CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={`${whiteCard} mb-6`}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc vērts izvēlēties Bangų zobārstniecības klīniku?
              </h2>
              <p className="text-slate-700 mb-0 max-w-3xl leading-relaxed">
                Izvēloties zobu plombēšanu, svarīga ne tikai procedūras cena, bet arī ārstēšanas kvalitāte, izmantotie materiāli un speciālista pieredze. Bangų zobārstniecības klīnikā zobu plombēšana tiek veikta saskaņā ar mūsdienu zobārstniecības standartiem, pievēršot īpašu uzmanību precizitātei, drošībai un ilgstošam rezultātam.
              </p>
              <p className="text-slate-700 mt-4">
                Klīnikas speciālisti katru gadījumu novērtē individuāli — no rūpīgas diagnostikas līdz piemērotākā plombēšanas veida izvēlei. Tiek izmantoti uzticami, ilgstoši plombēšanas materiāli, un procedūras laikā tiek piemēroti papildu drošības pasākumi, kas nodrošina komfortu un hermētiskumu.
              </p>
              <p className="text-slate-700 mt-4">
                Pacienti novērtē skaidru komunikāciju, caurspīdīgu cenu politiku un konsekventu ārstēšanas procesu. Pozitīvās atsauksmes bieži uzsver profesionālo pieeju, mierīgu procedūras norisi un uzticēšanos rezultātam.
              </p>
            </div>

            <div className={whiteCard}>
              <h3 className="font-bold text-xl text-darkblue-700 mb-3">Aicinām pierakstīties vizītam</h3>
              <p className="text-slate-600 mb-6 max-w-2xl">
                Ja pamanījāt zoba bojājumus, jutīgumu vai sāpes, negaidiet. Savlaicīgi veikta ārstēšana palīdz saglabāt zobus.
              </p>
              <p className="text-slate-600 mb-6 max-w-2xl">
                Bangų zobārstniecības klīnikā jūs gaida profesionāla komanda, modernas tehnoloģijas un individuāla pieeja katram pacientam. Pierakstieties vizītam un parūpējieties par savu zobu veselību droši un pārliecinoši.
              </p>
              <Link to="/lv/kontakti" className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1">
                Pierakstīties vizītam
              </Link>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </AnimatedSection>
  )
}
