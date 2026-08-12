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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const tocSections = [
  { id: "cenas", label: "Cenas" },
  { id: "kas-ir", label: "Kas ir kanālu ārstniecība?" },
  { id: "kad-nepieciesama", label: "Kad nepieciešama?" },
  { id: "ka-notiek-klinika", label: "Ko veicam klīnikā?" },
  { id: "ka-notiek", label: "Procedūras gaita" },
  { id: "kapec-laiku", label: "Kāpēc svarīgi laicīgi?" },
  { id: "ar-sapiga", label: "Vai sāpīga?" },
  { id: "kavesanas-risks", label: "Kāpēc neatlikt?" },
  { id: "kad-nepalid", label: "Kad ārstniecība nepalīdz?" },
  { id: "kapec-mes", label: "Kāpēc Bangų klīnika?" },
]

export default function EndodontijaLv() {
  const pageRef = useRef(null)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/endodontija/#service`,
    "name": "Endodontija Klaipēdā",
    "serviceType": "Endodontiskā ārstniecība",
    "description": "Pirmējā endodontiskā palīdzība Bangų zobārstniecības klīnikā Klaipēdā. Diagnostika, sāpju mazināšana, infekcijas kontrole un zoba sagatavošana turpmākai ārstniecībai.",
    "url": `${SITE_URL}/lv/pakalpojumi/endodontija/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Endodontija (kanālu ārstniecība) Klaipēdā — Bangų klīnika"
        description="Profesionāla endodontiskā (kanālu) ārstniecība Klaipēdā. Pirmējā endodontiskā palīdzība: diagnostika, sāpju mazināšana, infekcijas kontrole un zoba sagatavošana turpmākai ārstniecībai."
        keywords="endodontija, kanālu ārstniecība, pirmējā endodontiskā palīdzība, zobu sāpes, kanāli, klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/endodontija`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/endodontinis-gydymas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/endodontija` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/endodontinis-gydymas` },
        ]}
        structuredData={structuredData}
      />

      <motion.div ref={pageRef} className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start" variants={container} initial="hidden" animate="visible">
        <TableOfContents sections={tocSections} title="Saturs" rootRef={pageRef} cta={{ label: "Pierakstīties vizītei", to: "/lv/kontakti" }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Endodontiskā (kanālu) ārstniecība Klaipēdā
            </h1>

            <div className="mb-8">
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Stipras, pulsējošas zobu sāpes, ilgstoša jutīgums pret karstumu vai aukstumu, pietūkums vai nepatīkama spiediena sajūta bieži liecina par dziļākiem zoba bojājumiem. Šādos gadījumos parasta plombēšana vairs nepietiek, jo problēma atrodas nevis zoba virsmā, bet tā iekšpusē. Tieši tad ir nepieciešama endodontiskā ārstniecība — kanālu ārstniecība, kuras mērķis ir novērst infekciju un saglabāt dabīgo zobu.
                </p>
                <p className="mb-4">
                  Endodontiskā ārstniecība ir svarīga mūsdienu zobārstniecības daļa, kas ļauj izvairīties no zoba ekstrakcijas pat sarežģītos gadījumos. Savlaicīgi veikta ārstniecība palīdz apturēt infekcijas izplatīšanos, mazināt sāpes un saglabāt zobu turpmākai funkcionēšanai. Neārstēti kanālu bojājumi var izraisīt nopietnas komplikācijas — no abscesiem līdz žokļa kaula bojājumiem, tādēļ ātra reaģēšana ir ārkārtīgi svarīga.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā pacienti, kas saskaras ar akūtām zobu sāpēm vai aizdomājušies par dziļu bojājumu, var vērsties pēc pirmējās endodontiskās palīdzības. Šī posma mērķis — novērtēt situāciju, mazināt iekaisumu un sagatavot zobu turpmākai specializētai ārstniecībai.
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <Link to="/lv/kontakti" className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
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
                    Pirmējās endodontiskās palīdzības cenas
                  </h2>
                  <p className="text-slate-600">
                    Pirmējās endodontiskās palīdzības cena ir atkarīga no konkrētās klīniskās situācijas, zoba stāvokļa un nepieciešamo sagatavošanas procedūru apjoma. Tā kā katrs gadījums ir individuāls, pirms ārstniecības uzsākšanas vienmēr tiek veikta konsultācija un diagnostika, kas ļauj precīzi novērtēt situāciju un izvēlēties piemērotāko risinājumu.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                  <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Pirmējā palīdzība</h3>
                  <div className="divide-y divide-slate-100">
                    {[
                      ['Pirmējā endodontiskā palīdzība', 'no 70 €'],
                      ['Kanālu zāles', 'no 30 €'],
                    ].map(([name, price], i) => (
                      <div key={i} className="flex justify-between items-center py-2.5">
                        <span className="text-slate-600 text-sm">{name}</span>
                        <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                  <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Kanālu sagatavošana</h3>
                  <div className="divide-y divide-slate-100">
                    {[
                      ['Viena zoba saknes kanāla ķīmismehāniskā sagatavošana', 'no 35 €'],
                      ['Viena zoba saknes kanāla plombēšana (sagatavošanas)', 'no 35 €'],
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
                Svarīgi uzsvērt, ka šīs ir sagatavošanas procedūru cenas. Galīgā pilnās endodontiskās ārstniecības cena tiek noteikta ārstniecības iestādē, kur tiek veikta visa kanālu ārstniecība. Caurspīdīga cenu veidošana ļauj pacientiem skaidri saprast, par ko tiek maksāts katrā ārstniecības posmā, un mierīgi plānot turpmāko ārstniecību.
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

          {/* KAS IR */}
          <motion.section id="kas-ir" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas ir endodontiskā (kanālu) ārstniecība?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Endodontiskā ārstniecība ir zobārstniecības procedūra, kuras laikā tiek ārstēti zoba saknes kanāli. Šo kanālu iekšpusē atrodas pulpa — mīkstais auds, kas sastāv no nerviem, asinsvadiem un saistaudiem. Pulpa veic svarīgu lomu zoba attīstības laikā, taču pieauguša cilvēka zobam tās galvenā funkcija ir maņu uztvere.
                </p>
                <p>
                  Kad pulpa tiek bojāta dziļa kariesa, traumas, plaisu vai baktēriju infekcijas dēļ, zobs kļūst sāpīgs, jutīgs vai ilgu laiku var neradīt nekādus simptomus, lai gan infekcija progresē. Endodontiskās ārstniecības laikā bojātie audi tiek izņemti no saknes kanāliem, kanāli rūpīgi iztīrīti un dezinficēti, lai novērstu baktērijas un apturētu iekaisumu.
                </p>
                <p>
                  Kanālu ārstniecības galvenais mērķis — saglabāt dabīgo zobu. Pat stipri bojāts zobs, pareizi ārstēts, var veiksmīgi funkcionēt kā košļāšanas daļa vai kā balsts turpmākai protezēšanai. Tas ļauj izvairīties no zoba ekstrakcijas un sarežģītākām atjaunošanas procedūrām nākotnē.
                </p>
                <p>
                  Svarīgi saprast, ka endodontiskā ārstniecība ir sarežģīta un ārkārtīgi rūpīgu pieeju prasa procedūra, kuras panākumi ir atkarīgi no precīzas diagnostikas, atbilstošas sagatavošanas un skaidra ārstniecības plāna. Šī iemesla dēļ bieži ir nepieciešama specializēta ārstniecība, ko veic ārsti, kas strādā tieši šajā jomā.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAD NEPIECIEŠAMA */}
          <motion.section id="kad-nepieciesama" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kad nepieciešama endodontiskā ārstniecība?
              </h2>

              <div className="text-slate-700 leading-relaxed space-y-4 mb-6">
                <p>
                  Endodontiskā ārstniecība nepieciešama tad, kad zoba bojājums sasniedzis dziļākos audus un infekcija skārusi pulpas zonu. Šādos gadījumos virsmas ārstniecība vai vienkārša plombēšana vairs nevar novērst problēmas cēloni, tāpēc neārstēta infekcija turpina progresēt un var izraisīt nopietnākas komplikācijas.
                </p>
                <p>
                  Visbiežāk pacienti vēršas pie ārsta stipru vai pulsējošu zobu sāpju dēļ, kas pastiprinās naktī vai košļājot. Raksturīgs arī ilgstošs jutīgums pret karstumu vai aukstumu, spiediena sajūta vai sāpes ap zobu. Dažos gadījumos parādās smaganu pietūkums, apsārtums vai pat abscess blakus bojātajam zobam.
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Endodontiskā ārstniecība visbiežāk nepieciešama, ja:
                </h3>

                <div className="grid gap-3">
                  {[
                    "jūtamas stipras vai pulsējošas zobu sāpes (īpaši naktī vai košļājot)",
                    "ilgstoši nepāriet jutīgums pret karstumu vai aukstumu",
                    "jūtama spiediena sajūta vai sāpes ap zobu",
                    "parādās smaganu pietūkums, apsārtums vai abscess pie zoba",
                    "profilakses laikā vai rentgenogrammā konstatētas iekaisuma izmaiņas pie zoba saknes",
                    "pēc zoba traumas simptomi parādās vēlāk, lai gan zobs no ārpuses izskatās nebojāts",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-slate-700 leading-relaxed space-y-4">
                <p>
                  Svarīgi zināt, ka ne visos gadījumos endodontiskās ārstniecības nepieciešamību pavada stipras sāpes. Dažreiz pulpa iet bojā pakāpeniski, un infekcija attīstās bez izteiktiem simptomiem. Šādos gadījumos problēmu bieži nosaka profilaktiskās pārbaudes laikā vai veicot rentgena izmeklēšanu.
                </p>
                <p>
                  Pamanot kādu no šiem simptomiem, svarīgi nekavēties. Jo agrāk tiek konstatēta problēma, jo lielāka iespēja veiksmīgi saglabāt dabīgo zobu un izvairīties no sarežģītākiem ārstniecības posmiem.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KO VEICAM KLĪNIKĀ */}
          <motion.section id="ka-notiek-klinika" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāda endodontiskās ārstniecības daļa tiek veikta Bangų zobārstniecības klīnikā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bangų zobārstniecības klīnikā tiek sniegta pirmējā endodontiskā palīdzība, kuras mērķis — stabilizēt situāciju, mazināt sāpes un sagatavot zobu turpmākai specializētai kanālu ārstniecībai. Šobrīd klīnikā nav ārsta, kas specializētos tikai pilnā endodontiskajā ārstniecībā, tādēļ pacienti, kuriem nepieciešama sarežģīta vai pilna kanālu ārstniecība, tiek nosūtīti pie uzticamiem speciālistiem citās ārstniecības iestādēs.
                </p>
                <p>
                  Pirmējās endodontiskās palīdzības laikā vispirms tiek veikta padziļināta diagnostika — klīniskā apskate un rentgena izmeklēšana. Pēc vajadzības tiek pielietota vietējā nejutība. Zobs tiek atvērts, izņemti inficētie audi, samazināts baktēriju skaits un, nepieciešamības gadījumā, izmantoti medikamenti iekaisuma kontrolei.
                </p>
                <p>
                  Turpmākajai ārstniecībai pacienti tiek nosūtīti pie profesionāla endodonta Klaipēdā, kas specializējas kanālu ārstniecībā. Šāds sadarbības modelis ļauj nodrošināt, ka katru ārstniecības posmu veic tieši tās jomas speciālists, un pacients saņem kvalitatīvu un drošu ārstniecību.
                </p>
                <p>
                  Svarīgi uzsvērt, ka pirmējā endodontiskā palīdzība nav pagaidu risinājums "atlikšanai". Tā ir mērķtiecīgs un atbildīgs ārstniecības posms, kas ievērojami palielina turpmākās endodontiskās ārstniecības panākumus un ļauj pacientam mierīgi plānot nākamos ārstniecības soļus kopā ar pieredzējušiem endodontiem Klaipēdā.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCEDŪRAS GAITA */}
          <motion.section id="ka-notiek" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kā tiek veikta pirmējā endodontiskā palīdzība Bangų klīnikā?
              </h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Pirmējā endodontiskā palīdzība Bangų zobārstniecības klīnikā tiek veikta, lai ātri un droši stabilizētu zoba stāvokli un sagatavotu to turpmākajai kanālu ārstniecībai. Šis process ir secīgs un orientēts uz pacienta pašsajūtas uzlabošanu un infekcijas kontroli.
              </p>

              <div className="space-y-6">
                {[
                  { n: 1, t: "Diagnostika", d: "Vispirms tiek veikta padziļināta klīniskā apskate un rentgena izmeklēšana. Tās ļauj novērtēt zoba bojājuma dziļumu, iespējamo kanālu skaitu, to anatomiju un iekaisuma apjomu pie zoba saknes. Precīza diagnostika ir nepieciešama, lai izvēlētos piemērotāko pirmējās palīdzības risinājumu un izvairītos no papildu komplikācijām." },
                  { n: 2, t: "Anestēzija", d: "Pirms procedūras uzsākšanas tiek pielietota vietējā nejutība, tādēļ pacients nejūt sāpes. Anestēzija ļauj ārstam strādāt precīzi un mierīgi, bet pacientam — justies droši." },
                  { n: 3, t: "Zoba atvēršana un inficēto audu izņemšana", d: "Pēc anestēzijas zobs uzmanīgi tiek atvērts, lai piekļūtu inficētajiem iekšējiem audiem. Bojātie pulpas audi tiek izņemti, kanālu iekšpuse apstrādāta tā, lai samazinātu baktēriju skaitu un apturētu iekaisuma procesu." },
                  { n: 4, t: "Medikamenti (ja nepieciešams)", d: "Pēc vajadzības kanālos var tikt ievietoti medikamenti, kas palīdz kontrolēt infekciju un mazināt iekaisumu līdz brīdim, kad pacients varēs turpināt ārstniecību pie specializēta ārsta." },
                  { n: 5, t: "Pagaidu aizsardzība un turpmākais plāns", d: "Procedūra tiek pabeigta ar pagaidu risinājumu, kas pasargā zobu no turpmākas baktēriju iekļūšanas. Pirmējās endodontiskās palīdzības mērķis nav pabeigt visu kanālu ārstniecību, bet radīt drošus un labvēlīgus apstākļus turpmākai, pilnai endodontiskai ārstniecībai." },
                ].map((s) => (
                  <div key={s.n} className={innerCard}>
                    <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                      <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">
                        {s.n}
                      </span>
                      {s.t}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">{s.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC SVARĪGI LAICĪGI */}
          <motion.section id="kapec-laiku" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc svarīgi vērsties laicīgi, pat ja pilna endodontiskā ārstniecība tiek veikta citur?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Daudzi pacienti domā, ka ja pilna kanālu ārstniecība tiks veikta pie cita speciālista, pirmējā palīdzība nav nepieciešama. Taču praksē tieši agrīna iejaukšanās bieži nosaka, vai zobu izdosies saglabāt, vai ārstniecība kļūs sarežģītāka.
                </p>
                <p>
                  Savlaicīgi sniegta pirmējā endodontiskā palīdzība ļauj mazināt sāpes un iekaisumu vēl pirms apmeklējuma pie endodonta. Tas ir īpaši svarīgi akūtu sāpju, pietūkuma vai infekcijas pazīmju gadījumā, kad kavēšanās var būt bīstama. Stabilizējot situāciju, turpmākā ārstniecība pie endodonta kļūst drošāka, prognozējamāka un bieži vien ātrāka.
                </p>
                <p>
                  Vēl viens svarīgs iemesls — infekcijas kontrole. Neārstēta pulpas infekcija var izplatīties apkārtējos audos, izraisīt abscesus, kaula bojājumus vai vispārējas veselības komplikācijas. Pirmējā palīdzība palīdz apturēt šo procesu un pasargāt no nopietnākām sekām.
                </p>
                <p>
                  Turklāt sagatavots zobs ļauj endontologam precīzāk un efektīvāk veikt pilnu kanālu ārstniecību. Skaidra diagnostika, mazināts iekaisums un atbilstoši sagatavoti kanāli palielina ārstniecības panākumu iespējamību un palīdz sasniegt ilgstošu rezultātu.
                </p>
                <p>
                  Bangų zobārstniecības klīnikas izvēlētais sadarbības modelis ar citiem endodontiem Klaipēdā ļauj pacientiem saņemt kompleksu palīdzību — no pirmējās intervences līdz galīgajam ārstniecības risinājumam. Šāda pieeja nodrošina, ka katru ārstniecības posmu veic attiecīgās jomas speciālists, bet pacients saņem optimālu un drošu ārstniecību.
                </p>
              </div>
            </div>
          </motion.section>

          {/* VAI SĀPĪGA */}
          <motion.section id="ar-sapiga" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Vai pirmējā endodontiskā palīdzība ir sāpīga?
              </h2>

              <div className="text-slate-700 leading-relaxed space-y-4">
                <p>
                  Viens no biežākajiem pacientu jautājumiem — vai procedūra būs sāpīga. Mūsdienu zobārstniecībā pirmējā endodontiskā palīdzība tiek veikta, pielietojot efektīvu vietējo nejutību, tādēļ procedūras laikā sāpes netiek izjustas. Vairākumā gadījumu pati ārstniecība ir daudz komfortablāka nekā sāpes, ko izraisa neārstēts zoba iekaisums.
                </p>
                <p>
                  Procedūras laikā pacients var just vieglu spiedienu vai vibrāciju, taču tā nav sāpe. Pēc procedūras, kad anestēzijas iedarbība beidzas, iespējams neliels sāpīgums vai jutīgums — tā ir normāla un pārejoša ķermeņa reakcija, kas parasti izzūd dažu dienu laikā.
                </p>
                <p>
                  Svarīgi saprast, ka pirmējās endodontiskās palīdzības mērķis ir ne tikai sagatavot zobu turpmākai ārstniecībai, bet arī mazināt vai pilnībā novērst sāpes. Lielākā daļa pacientu jau drīz pēc vizītes pamana skaidru atvieglojumu un uzlabotu pašsajūtu.
                </p>
                <p>
                  Savlaicīgi sniegta pirmējā palīdzība ļauj izvairīties no stiprākām sāpēm, akūtām komplikācijām un dod iespēju turpmāko ārstniecību plānot bez stresa.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC NEATLIKT */}
          <motion.section id="kavesanas-risks" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas notiek, ja kanālu ārstniecība tiek atlikta?
              </h2>

              <div className="text-slate-700 leading-relaxed space-y-4">
                <p>
                  Kanālu infekcija pati no sevis nepāriet. Lai gan dažreiz sāpes var uz laiku mazināties vai izzust, tas nenozīmē, ka problēma ir atrisināta. Bieži vien tādos gadījumos pulpa jau ir gājusi bojā, bet infekcija turpina izplatīties nemanāmi.
                </p>
                <p>
                  Neārstēta infekcija no zoba saknes kanāliem var pāriet uz apkārtējiem audiem un izraisīt abscesu, smaganu pietūkumu vai sāpīgu iekaisumu. Laika gaitā iekaisums var bojāt žokļa kaulu, veidoties hroniski infekcijas perēkļi, kas apgrūtina turpmāko ārstniecību un samazina iespējas saglabāt zobu.
                </p>
                <p>
                  Turklāt atlikta ārstniecība bieži nozīmē sarežģītākas un ilgākas procedūras nākotnē. Tas var ietvert ne tikai pilnu endodontisko ārstniecību, bet arī ķirurģiskas intervences vai pat zoba ekstrakciju. Šādos gadījumos vēlāk nepieciešama zoba atjaunošana ar implantiem vai protēzēm, kas ir ievērojami sarežģītāks un dārgāks process.
                </p>
                <p>
                  Pirmējā endodontiskā palīdzība ļauj apturēt šo negatīvo procesu agrīnā stadijā. Pat ja pilna kanālu ārstniecība tiek veikta pie cita speciālista, savlaicīgi sniegta palīdzība Bangų zobārstniecības klīnikā palīdz pasargāt no komplikācijām un radīt labvēlīgākus apstākļus veiksmīgai turpmākai ārstniecībai.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAD NEPALĪDZ */}
          <motion.section id="kad-nepalid" className={sectionWrap} variants={item}>
            <div className="bg-red-50 p-6 sm:p-8 rounded-2xl border border-red-200 shadow-soft">
              <h2 className="text-xl sm:text-2xl font-semibold text-red-900 mb-4">
                Kad endodontiskā ārstniecība var vairs nepalīdzēt?
              </h2>

              <p className="text-slate-700 mb-4 leading-relaxed">
                Lai gan endodontiskā ārstniecība vairākumā gadījumu ļauj veiksmīgi saglabāt dabīgo zobu, noteiktās situācijās tā var būt neefektīva vai nenodrošināt prognozējamus ilgtermiņa panākumus. Šādos gadījumos lēmums tiek pieņemts, novērtējot zoba stāvokli, bojājuma apjomu un iespējamo ieguvumu pacientam.
              </p>

              <h3 className="font-semibold text-red-900 mb-2">Endodontiskā ārstniecība var vairs nepalīdzēt, kad:</h3>

              <ul className="list-disc pl-5 space-y-2 text-red-900/80 mb-4">
                <li>zobs ir stipri sairējis vai nolūzis zem smaganas līmeņa un to nav iespējams droši atjaunot</li>
                <li>konstatētas vertikālas zoba saknes plaisas</li>
                <li>iekaisums ir bojājis lielu kaula daļu ap zoba sakni un prognoze ir nelabvēlīga</li>
                <li>iepriekšējā kanālu ārstniecība veikta nekvalificēti, bet atkārtotajai ārstniecībai vairs nav pietiekamas panākumu iespējas</li>
              </ul>

              <p className="text-slate-700 leading-relaxed">
                Svarīgi uzsvērt, ka lēmums atteikties no endodontiskās ārstniecības nekad netiek pieņemts steigā. Vispirms tiek izvērtētas visas iespējas saglabāt zobu, bieži konsultējoties ar endodontiem. Tikai tad, kad prognoze ir nelabvēlīga, pacientam tiek piedāvāti alternatīvi risinājumi — piemēram, zoba ekstrakcija un vēlāka atjaunošana ar implantiem.
              </p>

              <p className="text-slate-700 leading-relaxed mt-2">
                Atklāts situācijas novērtējums un skaidrs ārstniecības plāna izskaidrojums ļauj pacientam pieņemt informētu lēmumu un izvēlēties tādu risinājumu, kas ilgtermiņā nodrošinātu komfortu, funkcionalitāti un mutes veselību.
              </p>
            </div>
          </motion.section>

          {/* KĀPĒC MĒS */}
          <motion.section id="kapec-mes" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc vērts vērsties Bangų zobārstniecības klīnikā pēc pirmējās endodontiskās palīdzības?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties, kur vērsties zobu sāpju vai iespējama kanālu bojājuma gadījumā, vissvarīgākais ir ātra reaģēšana, skaidrs situācijas novērtējums un godīgs ārstniecības plāna izklāsts. Bangų zobārstniecības klīnikā Klaipēdā pirmējā endodontiskā palīdzība tiek sniegta atbildīgi, orientējoties uz pacienta pašsajūtas uzlabošanu un drošu turpmākās ārstniecības plānošanu.
                </p>
                <p>
                  Klīnikā katrs gadījums tiek vērtēts individuāli — tiek veikta diagnostika, novērtēts zoba stāvoklis un iekaisuma apjoms, izskaidroti iespējamie ārstniecības virzieni. Pacienti tiek skaidri informēti, kādas darbības tiek veiktas klīnikā un kuros gadījumos nepieciešama turpmāka ārstniecība pie specializēta ārsta. Šāda caurspīdīga pieeja palīdz izvairīties no neskaidrībām un ļauj pieņemt informētus lēmumus.
                </p>
                <p>
                  Svarīgs Bangų zobārstniecības klīnikas darba princips — sadarbība ar uzticamiem speciālistiem citās ārstniecības iestādēs. Ja nepieciešama pilna kanālu ārstniecība, pacienti tiek nosūtīti pie pieredzējušiem endodontiem Klaipēdā, ar kuriem tiek nodrošināts raits ārstniecības turpinājums. Tas ļauj pacientam saņemt kompleksu palīdzību, kad katru ārstniecības posmu veic attiecīgās jomas speciālists.
                </p>
                <p>
                  Pacientu uzticēšanos klīnikai apstiprina arī viņu atsauksmes, kurās bieži tiek minēta profesionāla komunikācija, skaidrs situācijas izskaidrojums un reāls atvieglojums pēc pirmējās palīdzības. Šāda pieeja ļauj nodrošināt, ka pat sarežģītākās situācijās pacients jūtas droši un pārliecināti.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section className="mt-8 mb-12" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties pirmējai endodontiskajai ārstniecībai Bangų klīnikā
              </h2>

              <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
                Ja jūtat stipras zobu sāpes, pamanījāt pietūkumu, ilgstošu jutīgumu vai saņēmāt ieteikumu par kanālu ārstniecību, aicinām nekavējoties pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts jūsu zoba stāvoklis, sniegta pirmējā endodontiskā palīdzība un skaidri izskaidroti turpmākie ārstniecības soļi.
                <br /><br />
                Savlaicīgi sniegta palīdzība ļauj mazināt sāpes, apturēt infekcijas progresēšanu un radīt labvēlīgus apstākļus turpmākajai ārstniecībai pie endodonta vai citiem uzticamiem speciālistiem. Pat ja pilna kanālu ārstniecība tiek veikta citā ārstniecības iestādē, pirmais solis ir ārkārtīgi svarīgs visas ārstniecības panākumiem.
                <br /><br />
                Bangų zobārstniecības klīnikā cenšamies, lai katrs pacients saņemtu profesionālu un godīgu palīdzību. Pierakstieties konsultācijai un parūpējieties par savu zobu veselību savlaicīgi — atbilstoši sniegta pirmējā endodontiskā palīdzība palīdz saglabāt zobu un izvairīties no sarežģītākām procedūrām nākotnē.
              </p>

              <Link
                to="/lv/kontakti"
                className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Pierakstīties vizītei
              </Link>
            </div>
          </motion.section>

        </div>
      </motion.div>
    </AnimatedSection>
  )
}
