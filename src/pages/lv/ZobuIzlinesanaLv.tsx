import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { TableOfContents } from '../../components/TableOfContents'
import { useRef } from 'react'
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

function SmileIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const tocSections = [
  { id: "cenas", label: "Cenas" },
  { id: "kas-ir", label: "Kas ir zobu izlīdzināšana?" },
  { id: "ordoline", label: "ORDOLINE kapas" },
  { id: "process", label: "Kā notiek izlīdzināšana?" },
  { id: "kam-piemerota", label: "Kam piemērota?" },
  { id: "ilgums", label: "Ilgums" },
  { id: "ikdiena", label: "Ikdienas kopšana" },
  { id: "rezultati", label: "Rezultāti" },
  { id: "miti", label: "Mīti" },
  { id: "kapec-mes", label: "Kāpēc Bangų klīnika?" },
]

export default function ZobuIzlinesanaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/zobu-izlinesana/#service`,
    "name": "Zobu izlīdzināšana Klaipēdā",
    "serviceType": "Zobu izlīdzināšana",
    "description": "Zobu izlīdzināšanas pakalpojums tiek sniegts Bangų zobārstniecības klīnikā Klaipēdā. Pakalpojums paredzēts pacientiem, kuri vēlas taisnāku smaidu.",
    "url": `${SITE_URL}/lv/pakalpojumi/zobu-izlinesana/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu izlīdzināšana ar kapām (Ordoline) Klaipēdā"
        description="Zobu izlīdzināšana ar kapām (ORDOLINE) Klaipēdā — ērts un mūsdienīgs risinājums taisnākam smaidam un pareizam sakodienam. Reģistrējieties Bangų klīnikā."
        keywords="zobu izlīdzināšana, ordoline kapas, caurspīdīgas kapas, ortodontiska ārstēšana, Klaipēda, taisni zobi"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-izlinesana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-tiesinimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-izlinesana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-tiesinimas` },
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
              Zobu izlīdzināšana Klaipēdā ar ORDOLINE kapām
            </h1>

            <div className={`${whiteCard} mb-8`}>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Pareizs zobu izvietojums ir svarīgs ne tikai estētiskam smaidam, bet arī visai mutes veselībai. Nepareizi izvietoti zobi var apgrūtināt mutes higiēnu, palielināt kariesa un smaganu slimību risku, izraisīt nevienmērīgu zobu nolietojumu vai žokļa locītavu diskomfortu. Šo iemeslu dēļ arvien vairāk pacientu izvēlas zobu izlīdzināšanu kā ilgtermiņa ieguldījumu savā veselībā un pašsajūtā.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā veiktā zobu izlīdzināšana ir orientēta uz individuālām pacienta vajadzībām un mūsdienu ārstēšanas risinājumiem. Pirms ārstēšanas sākuma vienmēr tiek veikta izsmeļoša diagnostika, kas ļauj novērtēt sakodienu, zobu stāvokli un izvēlēties vispiemērotāko izlīdzināšanas metodi. Pareizi plānota ārstēšana palīdz ne tikai sasniegt estētisku rezultātu, bet arī uzlabot zobu funkciju un ilgtermiņa mutes veselību.
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
                      Zobu izlīdzināšanas cenas
                    </h2>
                    <p className="text-slate-600">
                      Zobu izlīdzināšanas ar kapām cena atkarīga no individuāla zobu stāvokļa, sakodiena sarežģītības un plānotā ārstēšanas ilguma. Katram pacientam tiek izveidots personīgs ārstēšanas plāns, tāpēc galīgā cena tiek noteikta tikai pēc konsultācijas un diagnostikas.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  {[
                    ['Konsultācija par zobu izlīdzināšanu', 'no 50 €'],
                  ].map(([name, price], i) => (
                    <div key={i} className="flex justify-between items-center bg-white rounded-2xl px-5 py-3 border" style={{ borderColor: S }}>
                      <span className="text-slate-700 text-sm font-medium">{name}</span>
                      <span className="font-extrabold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Zobu izlīdzināšana</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Zobu izlīdzināšana ar ORDOLINE kapu sistēmu', '1800 – 4000 €'],
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
                  Cenu intervāls atkarīgs no nepieciešamā kapu skaita, ārstēšanas ilguma un korekciju sarežģītības. Ārstēšanas cenā ir iekļauta individuāla digitāla plānošana, kapu izgatavošana, ārstēšanas uzraudzība un kontroles vizītes.
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
                    Aicinām reģistrēties zobu izlīdzināšanas konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja domājat par zobu izlīdzināšanu Klaipēdā un vēlaties uzzināt, vai caurspīdīgas kapas ir piemērotas tieši Jums, aicinām reģistrēties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts Jūsu zobu un sakodiena stāvoklis, apspriesti iespējamie ārstēšanas risinājumi un izveidots individuāls ārstēšanas plāns.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs cenšamies, lai zobu izlīdzināšana būtu skaidra, ērta un pielāgota pacienta dzīvesveidam. Šeit Jūs sagaida modernas tehnoloģijas, uzmanīga pieeja un secīga aprūpe katrā ārstēšanas posmā. Reģistrējieties konsultācijai un speriet pirmo soli uz pareizu, pašpārliecinātību sniedzošu smaidu.
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
                <div className="relative aspect-[4/5] bg-sky-50 min-h-[300px]">                  <img
                    src="/team/Jonas-light%20LV.jpg"
                    alt="Bangų zobārstniecības klīnikas ārsts"
                    className="absolute inset-0 w-full h-full object-cover lg:object-contain"
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

          {/* KAS IR IZLĪDZINĀŠANA */}
          <motion.section id="kas-ir" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas ir zobu izlīdzināšana?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu izlīdzināšana ir ortodontiska ārstēšana, kuras laikā pakāpeniski tiek koriģēts zobu izvietojums un sakodiens. Šīs ārstēšanas mērķis — ne tikai iztaisnot zobus, bet arī nodrošināt, lai tie pareizi kontaktētu savā starpā, būtu ērti košļāšanai un viegli koptu ikdienas mutes higiēnā.
                </p>
                <p>
                  Ārstēšanas laikā zobiem tiek pielietots kontrolēts, secīgs spēks, kas laika gaitā ļauj tiem ieņemt pareizu pozīciju žoklī. Zobu izlīdzināšana var tikt izmantota dažādu problēmu risināšanai: atstarpes starp zobiem, to sablīvējums, nepareizs sakodiens vai zobu pagriešanās. Mūsdienu ortodontija sniedz iespēju koriģēt šīs problēmas efektīvi, droši un pacientam ērtā veidā.
                </p>
                <p>
                  Svarīgi uzsvērt, ka zobu izlīdzināšana ir piemērota ne tikai pusaudžiem, bet arī pieaugušajiem. Vecums nav šķērslis — vissvarīgākais pareizi novērtēts mutes stāvoklis un individuāli izvēlēts ārstēšanas plāns, kas ļauj sasniegt prognozējamu un stabilu rezultātu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ORDOLINE KAPAS */}
          <motion.section id="ordoline" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc izvēlēties caurspīdīgas ORDOLINE kapas?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Caurspīdīgas kapas ir mūsdienīgs zobu izlīdzināšanas risinājums, ko novērtē par estētiku, ērtumu un prognozējamiem rezultātiem. Bangų zobārstniecības klīnikā izmantotās ORDOLINE kapas ļauj koriģēt zobu izvietojumu diskrēti un pielāgojoties pacienta ikdienas dzīvesveidam.
              </p>

              <div className="grid gap-6 md:grid-cols-3 mb-6">
                <div className={innerCard}>
                  <EyeOffIcon />
                  <h3 className="font-bold text-darkblue-700 mb-2">Nepamanāmība ikdienā</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    ORDOLINE kapas ir caurspīdīgas, tāpēc gandrīz nav pamanāmas runājot, smaidot vai sazinoties. Tas ir īpaši aktuāli pieaugušajiem, kuri vēlas izlīdzināt zobus bez izteiktām ortodontiskām ierīcēm un saglabāt pašpārliecinātību gan profesionālajā, gan personiskajā vidē.
                  </p>
                </div>
                <div className={innerCard}>
                  <SmileIcon />
                  <h3 className="font-bold text-darkblue-700 mb-2">Ērtums ēdot</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kapas ir viegli izņemamas, tāpēc ēšanas laikā tās nav jāvalkā. Tas nozīmē, ka nav jāatteicas no iemīļotā ēdiena vai jāmaina uztura ieradumi.
                  </p>
                </div>
                <div className={innerCard}>
                  <SparklesIcon />
                  <h3 className="font-bold text-darkblue-700 mb-2">Higiēnisks risinājums</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pateicoties iespējai kapas izņemt, ikdienas mutes higiēna kļūst vienkāršāka un efektīvāka, salīdzinot ar fiksētiem ortodontiskiem aparātiem. Tas samazina aplikumu uzkrāšanās risku.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Prognozējami rezultāti</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pirms ārstēšanas sākuma tiek izveidots digitālais plāns, kas ļauj precīzi paredzēt zobu kustību un galīgo rezultātu. Tas sniedz pacientam skaidrību un pārliecību visas ārstēšanas laikā.
                  </p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Īsāks ārstēšanas ilgums</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Vairumā gadījumu zobu izlīdzināšana ar kapām ilgst īsāk nekā ar tradicionālajām metodēm. Secīga kapu maiņa un precīzi plānots ārstēšanas plāns ļauj efektīvi sasniegt vēlamo rezultātu optimālā laikā.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KĀ NOTIEK */}
          <motion.section id="process" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kā notiek zobu izlīdzināšana ar ORDOLINE kapām?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Zobu izlīdzināšana ar ORDOLINE kapām Bangų zobārstniecības klīnikā tiek veikta pēc skaidras un pacientam saprotamas gaitas. Katrs posms ir svarīgs, tiecoties pēc precīza un ilgtermiņa rezultāta.
              </p>

              <div className="space-y-6">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                    <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">1</span>
                    Pirmais posms — diagnostika un digitāla plānošana
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Zobu izlīdzināšana ar kapām sākas ar izsmeļošu mutes stāvokļa analīzi. Klīniskās apskates laikā tiek novērtēts zobu izvietojums, sakodiens, žokļu attiecība un vispārējā mutes veselība. Tiek veikti zobu nospiedumi vai modernā digitālā skenēšana, kas ļauj īpaši precīzi fiksēt esošo situāciju. Balstoties uz savāktajiem datiem, tiek izveidots individuāls digitālais ārstēšanas plāns, kurā tiek plānots katrs zobu kustības posms. Šāda plānošana ļauj nodrošināt prognozējamu, kontrolētu un drošu ārstēšanu.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                    <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">2</span>
                    Otrais posms — virtuāla galīgā rezultāta redzēšana
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Viena no lielākajām šīs ārstēšanas priekšrocībām — iespēja jau pirms ārstēšanas sākuma redzēt, kā mainīsies zobu izvietojums laika gaitā. Digitālās plānošanas laikā pacientam tiek sniegta vizualizācija, kurā redzams zobu izlīdzināšanas progress un plānotais galīgais rezultāts. Tas palīdz labāk saprast ārstēšanas gaitu, tās ilgumu un mērķus, kā arī sniedz papildu pārliecību, pieņemot lēmumu par ārstēšanu.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                    <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">3</span>
                    Trešais posms — kapu izgatavošana
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Apstiprinot ārstēšanas plānu, pēc individuālajiem pacienta datiem tiek sākta kapu izgatavošana. Tiek izgatavots viss secīgais kapu komplekts, kur katra kapa atbilst konkrētam zobu kustības posmam. Kapas ir precīzi pielāgotas, vieglas un ērtas valkāt, tāpēc ārstēšana norit raiti un bez lieka diskomforta.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                    <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">4</span>
                    Ceturtais posms — kapu maiņa ik pēc ~2 nedēļām
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Ārstēšanas laikā pacients kapas maina apmēram ik pēc divām nedēļām, ievērojot zobārsta norādīto grafiku. Katra jaunā kapa pakāpeniski koriģē zobu izvietojumu, izdarot nelielu, bet precīzu spiedienu. Šāda secīga maiņa ļauj zobiem kustēties droši, bez pēkšņām slodzēm, un tuvoties plānotajam galīgajam rezultātam.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                    <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">5</span>
                    Piektais posms — regulāras kontroles
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Visas ārstēšanas laikā tiek plānotas regulāras kontroles vizītes klīnikā. Tajās tiek novērots ārstēšanas progress, novērtēts, vai zobi kustas pēc plāna, un vajadzības gadījumā tiek veiktas nelielas korekcijas. Regulāra aprūpe nodrošina, ka zobu izlīdzināšana norit raiti, un sasniegtais rezultāts ir precīzs, stabils un ilgtermiņa.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KAM PIEMĒROTA */}
          <motion.section id="kam-piemerota" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kam ir piemērota zobu izlīdzināšana ar kapām?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Zobu izlīdzināšana ar kapām ir universāls risinājums, piemērots daudziem pacientiem, kuri vēlas koriģēt zobu izvietojumu estētiskā un ērtā veidā. Šī metode visbiežāk tiek izvēlēta tad, kad tiek meklēta efektīva, bet ikdienas dzīvi netraucējoša ārstēšana.
              </p>

              <div className={innerCard + ' mb-6'}>
                <h3 className="font-semibold text-darkblue-700 mb-4">Zobu izlīdzināšana ar kapām ir piemērota, ja:</h3>
                <div className="grid sm:grid-cols-1 gap-3">
                  {[
                    "starp zobiem ir atstarpes, ko vēlaties aizvērt",
                    "zobi ir sablīvēti vai nepareizi izvietoti",
                    "nepieciešama viegla vai vidēji sarežģīta sakodiena korekcija",
                    "zobi ir pagriezti vai sasvērti",
                    "vēlaties uzlabot ne tikai smaida estētiku, bet arī košļāšanas funkciju"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Šis ārstēšanas veids ir īpaši populārs pieaugušo un vecāko pusaudžu vidū, kuri novērtē diskrēciju un elastību. Pirms ārstēšanas sākuma vienmēr tiek veikta individuāla novērtēšana, tāpēc iespējams precīzi noteikt, vai zobu izlīdzināšana ar kapām ir piemērota konkrētā gadījumā.
              </p>
            </div>
          </motion.section>

          {/* ILGUMS UN SĀPES */}
          <motion.section className="mb-12 space-y-8" variants={item}>
            <div id="ilgums" className="scroll-mt-36 2xl:scroll-mt-24">
              <div className={whiteCard}>
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                  Cik ilgi ilgst zobu izlīdzināšana ar kapām?
                </h2>
                <div className="text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Zobu izlīdzināšanas ar kapām ilgums ir atkarīgs no zobu izvietojuma, sakodiena sarežģītības un individuāliem pacienta mērķiem. Katrs ārstēšanas plāns tiek izveidots individuāli, tāpēc precīzs ilgums tiek noteikts tikai pēc diagnostikas un digitālās plānošanas.
                  </p>
                  <p>
                    Visbiežāk zobu izlīdzināšana ar kapām ilgst no dažiem mēnešiem līdz apmēram 12–18 mēnešiem. Vienkāršākos gadījumos rezultāti tiek sasniegti ātrāk, un sarežģītākām korekcijām var būt nepieciešams ilgāks ārstēšanas periods.
                  </p>
                  <p>
                    Svarīgs faktors ir arī pacienta iesaiste. Kapas ir ieteicams valkāt apmēram 20–22 stundas diennaktī, izņemot tās tikai ēšanas un mutes higiēnas laikā. Ievērojot šo režīmu, ārstēšana norit pēc plāna, un rezultāti tiek sasniegti plānotajā laikā.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className={whiteCard}>
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                  Vai zobu izlīdzināšana ar kapām ir sāpīga?
                </h2>
                <div className="text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Daudziem pacientiem aktuāls jautājums, vai zobu izlīdzināšana ar kapām izraisa sāpes. Šī ārstēšanas metode tiek uzskatīta par vienu no ērtākajiem ortodontiskajiem risinājumiem. Kapas iedarbojas uz zobiem pakāpeniski, tāpēc diskomforts visbiežāk ir minimāls.
                  </p>
                  <p>
                    Pirmajās dienās, sākot valkāt jaunu kapu, var būt jūtams viegls spiediens vai spriedzes sajūta. Tā ir normāla zīme, kas norāda, ka zobi kustās pēc plāna. Šī sajūta parasti pāriet dažu dienu laikā un netraucē ikdienas darbībām.
                  </p>
                  <p>
                    Salīdzinot ar tradicionālajiem fiksētajiem aparātiem, kapām nav metāla detaļu, kas varētu kairināt gļotādu vai izraisīt čūliņas. Tāpēc zobu izlīdzināšana ar kapām bieži tiek izvēlēta pacientu, kuri meklē maigāku un ērtāku risinājumu, vidū.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* VALKĀŠANA UN REZULTĀTI */}
          <motion.section className="mb-12 space-y-8" variants={item}>
            <div id="ikdiena" className="scroll-mt-36 2xl:scroll-mt-24">
              <div className={whiteCard}>
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                  Kas svarīgi zināt, valkājot caurspīdīgās kapas ikdienā?
                </h2>
                <div className="text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Lai sasniegtu plānoto zobu izlīdzināšanas rezultātu, ļoti svarīgi ievērot zobārsta sniegtos ieteikumus un kapu valkāšanas režīmu. Caurspīdīgās kapas ir veidotas tā, lai būtu ērtas ikdienas darbībās, taču ārstēšanas veiksme tieši ir atkarīga no pacienta iesaistes.
                  </p>
                  <p>
                    Kapas ir ieteicams valkāt apmēram 20–22 stundas diennaktī, izņemot tās tikai ēšanas un mutes higiēnas laikā. Regulārs un pietiekams valkāšanas laiks nodrošina, ka zobi kustēsies pēc plānotā ārstēšanas plāna un rezultāti tiks sasniegti laikā.
                  </p>
                  <p>
                    Katru reizi izņemot kapas, svarīgi pirms to atkal ievietošanas iztīrīt zobus, lai zem kapām neuzkrātos aplikumi. Pašas kapas ieteicams regulāri mazgāt ar remdenu ūdeni un lietot speciālus tīrīšanas līdzekļus, izvairoties no karsta ūdens, kas var deformēt to formu.
                  </p>
                  <p>
                    Tāpat ir ieteicams glabāt kapas speciālā futrālī, kad tās netiek valkātas, lai izvairītos no to bojāšanas vai pazaudēšanas. Ievērojot šos vienkāršos ikdienas noteikumus, ārstēšana norit raiti, un mutes higiēna saglabājas laba visā izlīdzināšanas periodā.
                  </p>
                </div>
              </div>
            </div>

            <div id="rezultati" className="scroll-mt-36 2xl:scroll-mt-24">
              <div className={whiteCard}>
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                  Zobu izlīdzināšanas ar kapām rezultāti un to saglabāšana
                </h2>
                <div className="text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Zobu izlīdzināšanas ar kapām rezultāti visbiežāk ir pamanāmi pakāpeniski, taču ļoti skaidri — zobi kļūst taisnāki, sakodiens pareizāks, un smaids estētiskāks. Tā kā ārstēšana tiek plānota digitāli, galīgais rezultāts ir prognozējams un atbilst iepriekš saskaņotajiem mērķiem.
                  </p>
                  <p>
                    Pēc aktīvās izlīdzināšanas posma beigām īpaši svarīga ir rezultāta stabilizēšana. Tam visbiežāk tiek izmantotas atbalsta (retencijas) kapas, kas palīdz saglabāt zobus jaunajā pozīcijā. Bez šī posma zobiem var būt tendence atgriezties iepriekšējā pozīcijā.
                  </p>
                  <p>
                    Retencijas kapu valkāšanas ilgums un režīms tiek izvēlēts individuāli, ņemot vērā veikto ārstēšanas apjomu un pacienta mutes īpatnības. Regulāras profilaktiskas vizītes ļauj novērot situāciju un nodrošināt, ka sasniegtais rezultāts saglabātos ilgtermiņā.
                  </p>
                  <p>
                    Pareiza ikdienas mutes kopšana, ieteikumu ievērošana un atbalsta posms ļauj priecāties par pareizu smaidu daudzus gadus pēc zobu izlīdzināšanas beigām.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* MĪTI */}
          <motion.section id="miti" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Biežākie mīti par zobu izlīdzināšanu ar kapām
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Zobu izlīdzināšana ar kapām joprojām rada daudz jautājumu un šaubu, īpaši pacientiem, kuri ar šo ārstēšanas metodi saskaras pirmo reizi. Daudzi baiļojumi rodas no novecojušām pārliecībām vai neprecīzas informācijas, tāpēc svarīgi tos skaidri kliedēt.
              </p>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts #1: kapas piemērotas tikai nelielām estētiskām korekcijām.</h3>
                  <p className="text-slate-600 text-sm">Patiesībā ar kapām var koriģēt ne tikai sīkas zobu nelīdzenības, bet arī atstarpes, sablīvējumu vai atsevišķas sakodiena izmaiņas. Ārstēšanas iespējas vienmēr tiek novērtētas individuāli, balstoties uz diagnostiku un digitālo plānošanu.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts #2: zobu izlīdzināšana ar kapām nav efektīva.</h3>
                  <p className="text-slate-600 text-sm">Kapas iedarbojas pakāpeniski, bet ļoti precīzi. Katra kapa ir izveidota konkrētam zobu kustības posmam, tāpēc, ievērojot valkāšanas režīmu, iespējams sasniegt skaidri prognozējamus un stabilus rezultātus.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts #3: kapas ikdienā nav ērti valkāt.</h3>
                  <p className="text-slate-600 text-sm">Caurspīdīgās kapas ir vieglas, plānas un pielāgotas individuāli, tāpēc vairums pacientu pie tām pieradina diezgan ātri. Tā kā kapas ir izņemamas, tās netraucē nedz ēdot, nedz veicot ikdienas mutes higiēnu.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts #4: kapas pastāvīgi krīt vai pazūd.</h3>
                  <p className="text-slate-600 text-sm">Pareizi pielāgotas kapas cieši turas uz zobiem. Ja tiek ievēroti ieteikumi un kapas tiek glabātas speciālā futrālī, kad netiek valkātas, to pazaudēšanas vai bojāšanas risks ir minimāls.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts #5: zobi pēc ārstēšanas ātri atgriezīsies sākotnējā pozīcijā.</h3>
                  <p className="text-slate-600 text-sm">Tāpat kā pēc jebkuras ortodontiskās ārstēšanas, ļoti svarīgs ir atbalsta posms. Lietojot retencijas kapas un ievērojot zobārsta norādījumus, sasniegtais rezultāts saglabājas stabils ilgu laiku.</p>
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
                  Izvēloties zobu izlīdzināšanas pakalpojumus, svarīgs ir ne tikai estētisks galīgais rezultāts, bet arī viss ārstēšanas process — no pirmās konsultācijas līdz atbalsta posmam. Bangų zobārstniecības klīnikā Klaipēdā zobu izlīdzināšana tiek veikta, izmantojot mūsdienīgus, pacientam ērtus un zinātniski pamatotus risinājumus, kas ļauj sasniegt prognozējamu un ilgtermiņa rezultātu.
                </p>
                <p>
                  Klīnikā liela uzmanība tiek pievērsta individuālai plānošanai. Pirms ārstēšanas sākuma tiek veikta izsmeļoša diagnostika un digitāls ārstēšanas plāns, kas ļauj pacientam skaidri saprast visu procesu un plānoto galīgo rezultātu. Šāda pieeja palīdz justies pārliecināti un ļauj pieņemt informētu lēmumu.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā strādājošie speciālisti velta laiku pacienta jautājumiem, skaidri izskaidro katru ārstēšanas posmu un nodrošina pastāvīgu aprūpi visas ārstēšanas laikā. Pacienti novērtē profesionālu komunikāciju, komfortu un sasniegtos rezultātus, ko apstiprina viņu pozitīvās atsauksmes.
                </p>
              </div>
            </div>
          </motion.section>

        </div>
      </motion.div>
    </AnimatedSection>
  )
}
