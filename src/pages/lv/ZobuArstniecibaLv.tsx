import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { useRef } from 'react'
import { TableOfContents } from '../../components/TableOfContents'
import ReviewsCarousel from '../../components/ReviewsCarousel'
import { SITE_URL } from '../../i18n/lv'

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

const sectionWrap = 'mb-12 scroll-mt-36 2xl:scroll-mt-24'
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

function HeartPulseIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

function ClipboardListIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  )
}

const tocSections = [
  { id: "cenas", label: "Cenas" },
  { id: "kas-ir", label: "Kas ir zobu ārstniecība?" },
  { id: "kad-nepieciesama", label: "Kad nepieciešama?" },
  { id: "pakalpojumi", label: "Sniegtie pakalpojumi" },
  { id: "process", label: "Kā notiek ārstēšana?" },
  { id: "profilakse", label: "Profilaktiskās pārbaudes" },
  { id: "kapec-mes", label: "Kāpēc Bangų klīnika?" },
]

export default function ZobuArstniecibaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/zobu-arstnieciba/#service`,
    "name": "Zobu ārstniecība Klaipēdā",
    "serviceType": "Zobu ārstniecība",
    "description": "Zobu ārstniecības pakalpojums tiek sniegts Bangų zobārstniecības klīnikā Klaipēdā. Klīnikā tiek veikta zobu labošana un ārstēšana.",
    "url": `${SITE_URL}/lv/pakalpojumi/zobu-arstnieciba/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu ārstniecība Klaipēdā"
        description="Zobu ārstniecība Klaipēdā sāpju vai citu bojājumu gadījumā. Laikus novērsiet sāpes un saglabājiet dabiskos zobus. Reģistrējieties Bangų klīnikā."
        keywords="zobu ārstniecība, zobu labošana, neatliekamā palīdzība, kariess, plombēšana, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-arstnieciba`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-taisymas-gydymas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-arstnieciba` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-taisymas-gydymas` },
        ]}
        structuredData={structuredData}
      />

      <motion.div
        ref={pageRef}
        className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TableOfContents sections={tocSections} rootRef={pageRef} cta={{ label: "Reģistrēties vizītei", to: "/lv/kontakti" }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Zobu ārstniecība Klaipēdā
            </h1>

            <div className="mb-8">
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zoba sāpes, diskomforts vai profilaktiskās pārbaudes nepieciešamība — tie ir biežākie iemesli, kāpēc pacienti vēršas pie zobārsta. Laikus veikta zobu ārstēšana ļauj ne tikai novērst nepatīkamus simptomus, bet arī saglabāt dabiskos zobus un novērst sarežģītākas ārstēšanas stadijas nākotnē.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā sniegtais zobu labošanas pakalpojums ietver plašu procedūru klāstu — no konsultācijām un profilaktiskām pārbaudēm līdz sarežģītām ārstēšanas un atjaunošanas procedūrām. Klīnikas speciālisti operatīvi palīdz gan akūtu zoba sāpju, gan ilgtermiņa ārstēšanas plānošanas gadījumā. Kompleksa pieeja ļauj pacientiem saņemt visus nepieciešamos pakalpojumus vienā vietā, tāpēc zobu labošana kļūst par ērtu, skaidru un pārliecinātu procesu.
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <Link to="/lv/kontakti" className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                Reģistrēties vizītei
              </Link>
            </div>

            {/* CENAS */}
            <motion.section id="cenas" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Zobu ārstniecības cenas
                    </h2>
                    <p className="text-slate-600">
                      Zobu ārstniecības cena ir atkarīga no pacienta vecuma, zobu stāvokļa, izmantotās ārstēšanas metodes un procedūras sarežģītības. Bangų zobārstniecības klīnikā pirms ārstēšanas sākuma vienmēr tiek veikta konsultācija un profilaktiskā pārbaude, kuras laikā tiek izveidots individuāls ārstēšanas plāns un apspriests iepriekšējs ārstēšanas apjoms un cena.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  {[
                    ['Konsultācija un plāna izveide', '20 €'],
                    ['Konsultācija bērniem', '20 €'],
                  ].map(([name, price], i) => (
                    <div key={i} className="flex justify-between items-center bg-white rounded-2xl px-5 py-3 border" style={{ borderColor: S }}>
                      <span className="text-slate-700 text-sm font-medium">{name}</span>
                      <span className="font-extrabold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Pieaugušo ārstēšana</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Plombēšana ar hēlija plombu', '70 – 90 €'],
                        ['Plombēšana ar stikljonomēra plombu', '40 – 60 €'],
                        ['Pagaidu plomba', 'no 40 €'],
                        ['Anestēzija / Rentgena uzņēmums', 'pa 10 €'],
                      ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between items-center py-2.5">
                          <span className="text-slate-600 text-sm">{name}</span>
                          <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Bērnu ārstēšana</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Piena zobu ārstēšana', 'no 50 €'],
                        ['Stikljonomēra / kompomēra plomba', 'no 30 €'],
                        ['Vizīte, kad bērns neļauj ārstēt (līdz 30 min.)', 'no 30 €'],
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
                  Precīza zobu ārstniecības cena vienmēr tiek noteikta individuālas konsultācijas laikā, novērtējot konkrētu situāciju un ārstēšanas vajadzības. Skaidra un caurspīdīga cenu politika ļauj pacientiem un vecākiem justies pārliecināti, plānojot zobu ārstēšanu.
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
                    Aicinām reģistrēties zobu ārstniecībai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja jūtat zoba sāpes, pamanījāt diskomfortu vai vienkārši vēlaties veikt profilaktisku pārbaudi, aicinām reģistrēties konsultācijai Bangų zobārstniecības klīnikā. Laikus sākta zobu ārstēšana palīdz izvairīties no sarežģītākām procedūrām un saglabāt dabiskos zobus.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā Jūs sagaida profesionāla komanda, moderna diagnostika un individuāli pielāgoti risinājumi. Reģistrējieties vizītei un parūpējieties par savu mutes veselību pārliecināti — zobu labošana Klaipēdā var būt skaidrs, mierīgs un uzticams process.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts izsmeļošs klīniskais novērtējums',
                        'tiek apspriestas iespējamās ārstēšanas metodes',
                        'tiek izskaidroti procedūras posmi un termiņi',
                        'tiek izveidots individuāls ārstēšanas plāns',
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
                    Reģistrēties vizītei
                  </Link>
                </div>
                <div className="relative aspect-[4/5] bg-sky-50">
                  <div className="pt-[125%]" />
                  <img
                    src="/team/Odeta-light%20LV.jpg"
                    alt="Bangų zobārstniecības klīnikas ārsts"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_15%)]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* REVIEWS */}
          <motion.div className="mb-10 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          {/* KAS IR ZOBU ĀRSTNIECĪBA */}
          <motion.section id="kas-ir" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas ir zobu ārstniecība?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu ārstniecība ir dažādu zobārstniecības procedūru kopums, kas paredzēts mutes veselības uzturēšanai, bojāto zobu ārstēšanai un to funkcijas un estētikas atjaunošanai. Tā ietver gan profilaktiskās pārbaudes, kas ļauj agrīni pamanīt problēmas, gan aktīvu ārstēšanu, kad nepieciešams novērst bojājumus un atjaunot zobu struktūru.
                </p>
                <p>
                  Zobu ārstniecības laikā tiek risinātas tādas problēmas kā zobu kariess, zoba sāpes, jutīgums, iekaisumu procesi vai mehāniski bojājumi. Atkarībā no situācijas, ārstēšana var ietvert plombēšanu, sakņu kanālu ārstēšanu, profesionālo mutes higiēnu vai citas procedūras. Šāda secīga un individuāli plānota pieeja ļauj nodrošināt, ka zobu labošana mūsu klīnikā ir ne tikai efektīva, bet arī orientēta uz ilgtermiņa rezultātu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAD NEPIECIEŠAMA */}
          <motion.section id="kad-nepieciesama" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kad nepieciešama zobu ārstniecība?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Zobu ārstniecība nepieciešama ne tikai tad, kad parādās stipras sāpes. Daudzas mutes problēmas attīstās pakāpeniski un ilgu laiku var neizraisīt izteiktus simptomus, tāpēc regulāras profilaktiskās pārbaudes ir īpaši svarīgas. Laikus pamanītas problēmas ļauj tās risināt vienkāršāk un izvairīties no sarežģītākas ārstēšanas nākotnē.
              </p>

              <div className={innerCard + ' mb-6'}>
                <h3 className="font-semibold text-darkblue-700 mb-4">Pie zobārsta ieteicams vērsties, ja tiek pamanītas šīs pazīmes:</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Zoba sāpes vai smelgme (spontāni vai ēdot)",
                    "Palielināts jutīgums pret aukstumu, karstumu vai saldu",
                    "Atlūzis, ieplaisājis vai aptumšojies zobs",
                    "Asiņojošas vai pietūkušas smaganas",
                    "Nepatīkama mutes smaka (nepāriet tīrot)",
                    "Nepieciešamība profilaktiskai pārbaudei"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Regulāra un laikus veikta zobu labošana palīdz saglabāt zobu veselību, samazināt ārstēšanas apjomu un izmaksas un nodrošināt labu pašsajūtu ilgtermiņā.
              </p>
            </div>
          </motion.section>

          {/* KĀDUS PAKALPOJUMUS SNIEDZAM */}
          <motion.section id="pakalpojumi" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kādus zobu ārstniecības pakalpojumus sniedzam?
              </h2>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Bangų zobārstniecības klīnikā tiek sniegti visi galvenie zobu ārstniecības pakalpojumi, kas ļauj pacientiem saņemt kompleksu palīdzību vienā vietā. Ņemot vērā individuālo situāciju, tiek izveidots skaidrs un secīgs ārstēšanas plāns.
              </p>

              <div className={innerCard + ' mb-6'}>
                <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                  {[
                    "Konsultācijas un ārstēšanas plāna izveide",
                    "Zoba plombēšana (hēlija/stikljonomēra)",
                    "Dentālā rentgenogrāfija",
                    "Profesionāla mutes higiēna",
                    "Estētiskā zobu plombēšana",
                    "Zobu sakņu kanālu ārstēšana",
                    "Bērnu zobu ārstēšana",
                    "Zobu izraušana",
                    "Zobu implantācija",
                    "Kaula augmentācijas operācijas",
                    "Zobu protezēšana"
                  ].map((service, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Plašais pakalpojumu klāsts ļauj nodrošināt, ka zobu labošana tiek veikta secīgi, droši un orientēti uz ilgtermiņa rezultātu, nesūtot pacientu no vienas klīnikas uz citu.
              </p>
            </div>
          </motion.section>

          {/* KĀ NOTIEK ĀRSTĒŠANA */}
          <motion.section id="process" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kā notiek zobu ārstēšana mūsu klīnikā?
              </h2>

              <div className="grid gap-6 md:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultācija un diagnostika</h3>
                  <p className="text-sm text-slate-600">Pārbaude, rentgena izmeklējumi, stāvokļa novērtējums. Tiek izveidots individuāls ārstēšanas plāns ar prioritātēm.</p>
                </div>
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ārstēšanas veikšana</h3>
                  <p className="text-sm text-slate-600">Tiek veiktas procedūras (plombēšana, kanālu ārstēšana u.c.), izmantojot anestēziju un nodrošinot komfortu.</p>
                </div>
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ieteikumi un kopšana</h3>
                  <p className="text-sm text-slate-600">Padomi par kopšanu mājās un nākamā vizītes plānošana ilgtermiņa rezultāta nodrošināšanai.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROFILAKSE */}
          <motion.section id="profilakse" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc svarīgas profilaktiskās pārbaudes?
              </h2>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className={innerCard}>
                  <ShieldCheckIcon />
                  <h3 className="font-semibold text-darkblue-700 mb-2">Agrīna diagnostika</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Ļauj noteikt kariesu vai iekaisumu jau sākuma stadijā, kad sāpes vēl nav jūtamas.
                  </p>
                </div>
                <div className={innerCard}>
                  <ClipboardListIcon />
                  <h3 className="font-semibold text-darkblue-700 mb-2">Vienkāršāka ārstēšana</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Laikus pamanītas problēmas prasa mazāku iejaukšanos, īsāku laiku un mazākas izmaksas.
                  </p>
                </div>
                <div className={innerCard}>
                  <HeartPulseIcon />
                  <h3 className="font-semibold text-darkblue-700 mb-2">Ilgtermiņa veselība</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Regulāras vizītes palīdz izvairīties no negaidītām sāpēm un saglabāt dabiskos zobus pēc iespējas ilgāk.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC MĒS */}
          <motion.section id="kapec-mes" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties zobu ārstniecību, svarīgi ir ne tikai ātri novērst problēmu, bet arī nodrošināt ilgtermiņa rezultātu un drošu ārstēšanas procesu. Bangų zobārstniecības klīnikā zobu labošana un ārstēšana tiek veikta, ievērojot mūsdienu zobārstniecības standartus, apvienojot pieredzi, modernas tehnoloģijas un individuālu pieeju katram pacientam.
                </p>
                <p>
                  Klīnikā strādājošie speciālisti pievērš īpašu uzmanību precīzai diagnostikai, skaidrai ārstēšanas plāna izveidei un secīgai tā īstenošanai. Tas ļauj pacientiem saprast ārstēšanas gaitu, izvēlēties vispiemērotākos risinājumus un justies pārliecināti visa procesa laikā. Plašais pakalpojumu klāsts nodrošina, ka zobu labošana Klaipēdā tiek veikta vienā vietā — no profilakses līdz sarežģītākām ārstēšanas vai atjaunošanas procedūrām.
                </p>
                <p>
                  Pacienti novērtē mierīgu komunikāciju, caurspīdīgu cenu politiku un uzmanīgu pieeju, un pozitīvās atsauksmes bieži uzsver profesionalitāti, komfortu un pārliecību par galīgo rezultātu. Tas ļauj Bangų zobārstniecības klīnikai kļūt par uzticamu izvēli, meklējot kvalitatīvu un atbildīgu zobu ārstēšanu.
                </p>
              </div>
            </div>
          </motion.section>

        </div>
      </motion.div>
    </AnimatedSection>
  )
}
