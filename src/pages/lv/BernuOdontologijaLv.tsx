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

function HeartIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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
  { id: 'cenas', label: 'Cenas' },
  { id: 'kas-ir', label: 'Kas ir bērnu zobārstniecība?' },
  { id: 'kapec-piena-zobi', label: 'Kāpēc kopīt piena zobus?' },
  { id: 'kad-vizite', label: 'Kad vizīte pie zobārsta?' },
  { id: 'pakalpojumi', label: 'Mūsu pakalpojumi' },
  { id: 'ka-notiek', label: 'Ārstēšanas gaita' },
  { id: 'sagatavet', label: 'Kā sagatavot bērnu?' },
  { id: 'ar-sapiga', label: 'Vai sāpīga?' },
  { id: 'kapec-mes', label: 'Kāpēc Bangų klīnika?' },
]

export default function BernuOdontologijaLv() {
  const pageRef = useRef(null)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/bernu-odontologija/#service`,
    "name": "Bērnu zobārstniecība Klaipēdā",
    "serviceType": "Bērnu zobārstniecība",
    "description": "Bērnu zobārstniecības pakalpojumi Bangų zobārstniecības klīnikā Klaipēdā. Piena zobu ārstniecība, profilakse un adaptācijas vizītes.",
    "url": `${SITE_URL}/lv/pakalpojumi/bernu-odontologija/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Bērnu zobārstniecība Klaipēdā — Bangų klīnika"
        description="Profesionāla bērnu zobārstniecība Klaipēdā. Piena zobu ārstniecība, profilakse un adaptācijas vizītes bez bailēm. Pierakstiet bērnu vizītei."
        keywords="bērnu zobārstniecība, bērnu zobārsts, kariess bērniem, klaipēda, silanti, bez bailēm"
        canonical={`${SITE_URL}/lv/pakalpojumi/bernu-odontologija`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/vaiku-odontologija` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/bernu-odontologija` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/vaiku-odontologija` },
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
        <TableOfContents sections={tocSections} title="Saturs" rootRef={pageRef} cta={{ label: 'Pierakstīties vizītei', to: '/lv/kontakti' }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Bērnu zobārstniecība Klaipēdā
            </h1>

            <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
              <p className="mb-4">
                Bērnu zobu kopšana prasa ne tikai zobārstnieciskas zināšanas, bet arī īpašu uzmanību bērna emocionālajai pašsajūtai. Pirmās vizītes pie zobārsta bieži veido bērna attieksmi pret zobu ārstniecību visu mūžu, tādēļ ir svarīgi, lai šī pieredze būtu mierīga, droša un pozitīva.
              </p>
              <p>
                Bangų zobārstniecības klīnikā Klaipēdā bērnu zobārsts cenšas radīt draudzīgu vidi, kurā bērns jūtas saprasts un nebaidās no ārstniecības. Klīnikā liela uzmanība tiek pievērsta ne tikai zobu ārstniecībai, bet arī profilaksei, adaptācijai un secīgai bērna iepazīstināšanai ar zobārstnieciskajām procedūrām. Šāda pieeja palīdz veidot pozitīvus ieradumus un ilgtermiņa uzticēšanos ārstam.
              </p>
            </div>

            <div className="flex justify-start">
              <Link
                to="/lv/kontakti"
                className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Pierakstīties vizītei
              </Link>
            </div>
          </motion.header>

          {/* CENAS */}
          <motion.section id="cenas" className={sectionWrap} variants={item}>
            <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                    Bērnu zobārstniecības cenas
                  </h2>
                  <p className="text-slate-600">
                    Bērnu zobu ārstniecības cena ir atkarīga no bērna vecuma, zobu stāvokļa, izvēlētās ārstniecības metodes un procedūras sarežģītības. Bangų zobārstniecības klīnikā pirms jebkādas ārstniecības uzsākšanas vispirms tiek veikta apskate, kuras laikā tiek novērtēta situācija un izvēlēts piemērotākais risinājums, ņemot vērā bērna pašsajūtu.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mb-5">
                {[
                  ['Pirmā konsultācija un profilakse', '20 €'],
                ].map(([name, price], i) => (
                  <div key={i} className="flex justify-between items-center bg-white rounded-2xl px-5 py-3 border" style={{ borderColor: S }}>
                    <span className="text-slate-700 text-sm font-medium">{name}</span>
                    <span className="font-extrabold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                  <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Bērnu ārstniecība</h3>
                  <div className="divide-y divide-slate-100">
                    {[
                      ['Piena zobu ārstniecība', 'no 50 €'],
                      ['Stikla jonomēra / kompomēra plomba', 'no 30 €'],
                      ['Sarežģīta kariesa ārstniecība', 'no 60 €'],
                      ['Adaptācijas vizīte (līdz 30 min.)', 'no 30 €'],
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
                Galīgā bērnu zobu ārstniecības cena tiek apspriesta individuāli, ņemot vērā konkrēto situāciju un bērna vajadzības. Caurspīdīga cenu veidošana ļauj vecākiem mierīgi plānot bērna zobārstniecisko aprūpi.
              </p>
            </div>
          </motion.section>

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
                    Pierakstīties vizītei
                  </Link>
                </div>
                <div className="relative bg-sky-50">                  <img
                    src="/team/Odeta-light%20LV.jpg"
                    alt="Odeta Balsienė – zobārste Bangų klīnikā"
                    className="w-full lg:absolute lg:inset-0 lg:h-full object-contain"
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas ir bērnu zobārstniecība?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bērnu zobārstniecība ir zobārstniecības nozare, kas paredzēta bērnu zobu un mutes kopšanai no pirmajiem piena zobiem līdz pastāvīgo zobu izveidošanās brīdim. Tā ietver ne tikai zobu ārstniecību, bet arī profilaksi, agrīnu problēmu atklāšanu un bērna adaptāciju pie zobārstnieciskajām vizītēm.
                </p>
                <p>
                  Bērnu zobi atšķiras no pieaugušo zobiem — piena zobi ir jutīgāki, un kariess tajos var izplatīties ātrāk. Tādēļ bērnu zobārstniecībā tiek pielietotas speciālas metodes un materiāli, kas pielāgoti bērna vecumam un zobu attīstības posmam. Pieredzējis bērnu zobārsts ne tikai ārstē zobus, bet arī māca bērnu un vecākus pareizai mutes kopšanai, palīdzot izvairīties no problēmām nākotnē.
                </p>
                <p>
                  Pareizi kopti piena zobi ir svarīgi ne tikai košļāšanai un runas attīstībai, bet arī pastāvīgo zobu veselībai. Tādēļ regulāras apskates un savlaicīgi uzsākta kopšana ir svarīga bērna mutes veselības daļa.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC KOPĪT PIENA ZOBUS */}
          <motion.section id="kapec-piena-zobi" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc svarīgi kopīt piena zobus?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                <p>
                  Lai gan piena zobi ir pagaidu, to kopšana ir ļoti svarīga bērna mutes veselībai un attīstībai. Piena zobi palīdz bērnam pareizi košļāt, veidot runu un saglabāt vietu pastāvīgajiem zobiem. Neārstēti piena zobu bojājumi var izraisīt sāpes, infekcijas un negatīvi ietekmēt pastāvīgo zobu veidošanos.
                </p>
                <p>
                  Piena zobu kariess bieži attīstās ātrāk nekā pieaugušo zobos, tādēļ problēmas var progresēt nemanāmi. Savlaicīgi apmeklējot speciālistu, bērnu zobārsts var agrīni konstatēt izmaiņas un pielietot saudzīgas, bērnam pielāgotas ārstniecības vai profilakses metodes.
                </p>
                <p>
                  Svarīgi atspēkot mītu, ka piena zobus nav jāārstē, jo tie tāpat izkritīs. Gluži pretēji — pareizi kopti piena zobi palīdz izvairīties no sarežģītākām problēmām nākotnē un veido bērna pozitīvo attieksmi pret mutes kopšanu.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className={innerCard + ' flex flex-col items-start'}>
                  <SmileIcon />
                  <h3 className="font-semibold text-darkblue-700 mb-2">Attīstība</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Piena zobi palīdz bērnam pareizi košļāt, veidot runu un saglabāt vietu pastāvīgajiem zobiem.
                  </p>
                </div>
                <div className={innerCard + ' flex flex-col items-start'}>
                  <StarIcon />
                  <h3 className="font-semibold text-darkblue-700 mb-2">Ātra bojāšanās</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Piena zobu kariess attīstās ātrāk. Savlaicīgi apmeklējot, var konstatēt izmaiņas un pielietot saudzīgas metodes.
                  </p>
                </div>
                <div className={innerCard + ' flex flex-col items-start'}>
                  <HeartIcon />
                  <h3 className="font-semibold text-darkblue-700 mb-2">Nākotnes veselība</h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Atspēkojam mītu, ka tos nav jāārstē. Veseli piena zobi veido bērna pozitīvo attieksmi pret mutes kopšanu.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KAD VIZĪTE */}
          <motion.section id="kad-vizite" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kad bērnam nepieciešama vizīte pie zobārsta?
              </h2>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Pirmā bērna vizīte pie zobārsta ir ieteicama, tiklīdz parādās pirmie zobi, vai ne vēlāk kā viena gada vecumā. Agrīna vizīte ļauj bērnam iepazīties ar vidi, bet vecākiem — saņemt noderīgus padomus par zobu kopšanu mājās.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Pie zobārsta jāvēršas arī, ja novērojamas šādas pazīmes:</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    'bērns sūdzas par zobu sāpēm vai jutīgumu',
                    'uz zobiem redzamas baltas vai tumšas plankumi',
                    'smaganas ir apsārtušas vai asiņo',
                    'bērns izvairās košļāt no vienas puses',
                    'pienācis laiks profilaktiskajai pārbaudei (pat ja nav sūdzību)',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Regulāras pārbaudes palīdz novērst nopietnākas problēmas un ļauj pakāpeniski pierādīt bērnu pie zobārstnieciskajām vizītēm. Šāda secīga pieeja nodrošina, ka bērna zobu kopšana ir mierīga, bet ārstniecība — minimāla un savlaicīga.
              </p>
            </div>
          </motion.section>

          {/* PAKALPOJUMI */}
          <motion.section id="pakalpojumi" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kādus bērnu zobārstniecības pakalpojumus sniedzam?
              </h2>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Bangų zobārstniecības klīnikā bērnu zobārstniecība aptver visu pakalpojumu klāstu — no pirmajām profilaktiskajām pārbaudēm līdz ārstnieciskajām procedūrām. Katrs pakalpojums tiek izvēlēts, ņemot vērā bērna vecumu, zobu attīstības posmu un individuālās vajadzības, cenšoties pēc iespējas saudzīgākas un efektīvākas ārstniecības.
              </p>

              <h3 className="font-semibold text-darkblue-700 mb-4">Bērniem sniedzam šādus galvenos pakalpojumus:</h3>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  'Konsultācijas un profilaktiskās pārbaudes, kas palīdz agrīni pamanīt iespējamās izmaiņas',
                  'Piena zobu ārstniecība, izmantojot bērniem pielāgotus materiālus',
                  'Zobu plombēšana, lai atjaunotu bojātos zobus un apturētu kariesu',
                  'Kariesa profilakse, kas paredzēta zobu aizsardzībai no bojājumiem',
                  'Profesionālā mutes higiēna bērniem, veidojot pareizus kopšanas ieradumus',
                  'Zobu ekstrakcija, kad tas ir neizbēgami un nepieciešami bērna veselībai',
                ].map((service, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-700 mt-6 leading-relaxed">
                Plašs pakalpojumu klāsts ļauj nodrošināt, ka bērna zobu kopšana ir secīga un tiek veikta vienā vietā, un bērnu zobārsts var sekot pacienta zobu stāvoklim ilgtermiņā.
              </p>
            </div>
          </motion.section>

          {/* ĀRSTĒŠANAS GAITA */}
          <motion.section id="ka-notiek" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kā notiek bērnu zobu ārstniecība klīnikā?
              </h2>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Bērnu zobu ārstniecība Bangų zobārstniecības klīnikā sākas ar bērna iepazīšanos ar vidi un speciālistu. Pirmās vizītes laikā tiek censties iegūt uzticēšanos, tādēļ ārstniecība bieži netiek uzsākta uzreiz — bērns tiek iepazīstināts ar procedūrām tam saprotamā un draudzīgā veidā.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Adaptācija un apskate</h3>
                  <p className="text-sm text-slate-600">
                    Bērna vizīte sākas ar mierīgu iepazīšanos ar zobārstu un vidi. Speciālistam svarīgi iegūt uzticēšanos, tādēļ apskate tiek veikta nesteidzīgi, bērnam saprotamā veidā. Zobārsts apskata zobiņus, novērtē to stāvokli un vienkārši un draudzīgi izskaidro, kas tiks darīts vizītes laikā. Šāda pieeja palīdz bērnam justies droši un samazina spriedzi vēl pirms jebkādu procedūru uzsākšanas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ārstniecība vai profilakse</h3>
                  <p className="text-sm text-slate-600">
                    Ja tiek konstatēts, ka nepieciešama ārstniecība vai profilaktiskas procedūras, tās tiek veiktas maigi un ņemot vērā bērna emocionālo un fizisko pašsajūtu. Zobārsts strādā bērna tempā, seko tā reakcijām un, ja nepieciešams, dara pārtraukumus. Procedūru laikā tiek izmantotas bērniem pielāgotas metodes un līdzekļi, lai vizīte būtu pēc iespējas komfortablāka un neradītu negatīvas asociācijas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Uzmundrinājums un ieteikumi</h3>
                  <p className="text-sm text-slate-600">
                    Pēc vizītes bērns vienmēr tiek uzmundrināts par drosmi un sadarbību, lai vizīte pie zobārsta asociētos ar pozitīvu pieredzi. Vecākiem tiek sniegti skaidri un praktiski mutes kopšanas ieteikumi, ņemot vērā bērna vecumu un zobu stāvokli. Tāpat tiek apspriests nākamās profilaktiskās vizītes laiks, lai nodrošinātu secīgu un ilgtermiņa bērna mutes veselības aprūpi.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 mt-6 leading-relaxed">
                Šāds secīgs un mierīgs process palīdz radīt pozitīvu pieredzi un mazina bailes turpmākajās vizītēs. Tāpēc vizītes pie bērnu zobārsta mūsu klīnikā Klaipēdā bieži kļūst par ierastu un nebiedējošu bērna ikdienas daļu.
              </p>
            </div>
          </motion.section>

          {/* KĀ SAGATAVOT */}
          <motion.section id="sagatavet" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kā sagatavot bērnu vizītei pie zobārsta?
              </h2>

              <p className="text-slate-700 mb-6 leading-relaxed">
                Atbilstoša sagatavošanās vizītei pie zobārsta var būtiski ietekmēt bērna pieredzi. Galvenais mērķis — veidot pozitīvu attieksmi un samazināt trauksmi vēl pirms ierašanās klīnikā.
              </p>

              <h3 className="font-semibold text-darkblue-700 mb-4">Vecākiem ieteicams:</h3>
              <ul className="list-disc pl-5 space-y-2 text-slate-700">
                <li>par vizīti runāt mierīgi un pozitīvi, izvairīties no biedējošiem vārdiem vai negatīvām personīgām pieredzēm</li>
                <li>izskaidrot bērnam, ka zobārsts palīdz zobiem būt veseliem</li>
                <li>nelietot vārdus, kas saistīti ar sāpēm vai bailēm</li>
                <li>izvēlēties vizītei laiku, kad bērns ir atpūties un labā noskaņojumā</li>
              </ul>

              <p className="text-slate-700 mt-6 leading-relaxed">
                Tāpat svarīgi nepārspīlēt vizītes nozīmi — zobārsta apmeklējums būtu jāprezentē kā ierasta un dabīga darbība. Pieredzējis bērnu zobārsts vizītes laikā parūpējas, lai bērns justos droši, tādēļ vecāku mierīgums un uzticēšanās speciālistam ir ārkārtīgi svarīga.
              </p>
            </div>
          </motion.section>

          {/* VAI SĀPĪGA */}
          <motion.section id="ar-sapiga" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Vai bērnu zobu ārstniecība ir sāpīga?
              </h2>

              <p className="text-slate-700 leading-relaxed">
                Viens no biežākajiem vecāku jautājumiem — vai bērnu zobu ārstniecība rada sāpes. Mūsdienu bērnu zobārstniecībā liela uzmanība tiek pievērsta komfortam un saudzīgai ārstniecībai, tādēļ procedūras parasti tiek veiktas bez sāpēm vai ar minimālu diskomfortu.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                Ja nepieciešama ārstniecība, tiek pielietotas bērniem pielāgotas anestēzijas metodes, un procedūras tiek veiktas, ņemot vērā bērna pašsajūtu un reakcijas. Zobārsts strādā bērna tempā, nepieciešamības gadījumā darot pārtraukumus, lai bērns justos pēc iespējas mierīgāk.
              </p>
              <p className="text-slate-700 leading-relaxed mt-4">
                Vairākumā gadījumu lielākās bailes bērniem rada nezināmais, nevis pati ārstniecība. Tādēļ skaidrs izskaidrojums, draudzīga komunikācija un pakāpeniska adaptācija ļauj radīt pozitīvu pieredzi. Šī iemesla dēļ vizītes pie bērnu zobārsta mūsu klīnikā Klaipēdā bieži kļūst nebiedējošas pat jutīgākiem bērniem.
              </p>
            </div>
          </motion.section>

          {/* KĀPĒC MĒS */}
          <motion.section id="kapec-mes" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc vērts izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties zobārstniecības klīniku bērnam, svarīgs nav tikai ārstniecības rezultāts, bet arī pati pieredze. Bangų zobārstniecības klīnikā bērnu zobārstniecība balstās uz pacietību, cieņu pret bērna jūtām un secīgu uzticēšanās veidošanu no pirmās vizītes.
                </p>
                <p>
                  Klīnikā strādājošais bērnu zobārsts katru bērnu vērtē individuāli, ņemot vērā tā vecumu, emocionālo stāvokli un iepriekšējo pieredzi. Liela uzmanība tiek pievērsta adaptācijai, skaidram izskaidrojumam bērnam saprotamā valodā un saudzīgām ārstniecības metodēm. Tas ļauj samazināt bailes un veidot pozitīvu attieksmi pret zobārstnieciskajām vizītēm nākotnē.
                </p>
                <p>
                  Vecāki novērtē mierīgo vidi, skaidro komunikāciju un caurspīdīgu cenu politiku. Pozitīvās atsauksmes bieži uzsver ne tikai profesionālu ārstniecību, bet arī sirsnīgu saskarsmi ar bērniem. Šāda pieredze ļauj Bangų zobārstniecības klīnikai kļūt par uzticamu izvēli ģimenēm, kas meklē atbildīgu un ilgtermiņa bērnu zobu aprūpi.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties bērnu zobārsta konsultācijai Bangų klīnikā
              </h2>

              <div className="text-slate-700 mb-8 max-w-3xl leading-relaxed space-y-4">
                <p>
                  Ja vēlaties rūpēties par sava bērna zobu veselību jau no pirmajiem zobiem vai pamanījāt pazīmes, ka nepieciešama ārstniecība, aicinām pierakstīties vizītei Bangų zobārstniecības klīnikā. Agrīna kopšana palīdz izvairīties no sarežģītākām problēmām un ļauj bērnam pierast pie zobārsta bez stresa.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā jūsu bērnu gaida droša vide, pieredzējuši speciālisti un uzmanīga pieeja. Pierakstieties konsultācijai un ļaujiet bērnu zobārstam parūpēties par jūsu bērna smaidu mierīgi, atbildīgi un profesionāli.
                </p>
              </div>

              <Link
                to="/lv/kontakti"
                className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Pierakstīties vizītei
              </Link>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </AnimatedSection>
  )
}
