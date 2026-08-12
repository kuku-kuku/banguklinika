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
  { id: 'cenas', label: 'Cenas' },
  { id: 'kas-ir', label: 'Kas ir zobu ekstrakcija?' },
  { id: 'kad-nepieciesama', label: 'Kad nepieciešama?' },
  { id: 'veidi', label: 'Ekstrakcijas veidi' },
  { id: 'berniem', label: 'Bērniem un pusaudžiem' },
  { id: 'kavesanas-risks', label: 'Kāpēc svarīgi savlaicīgi?' },
  { id: 'ka-notiek', label: 'Kā tiek veikta?' },
  { id: 'ar-sapiga', label: 'Vai sāpīga?' },
  { id: 'pirms-ekstrakcijas', label: 'Ja sāp pirms ekstrakcijas' },
  { id: 'pec-ekstrakcijas', label: 'Pēc ekstrakcijas' },
  { id: 'kapec-mes', label: 'Kāpēc izvēlēties mūs?' },
]

export default function ZobuEkstrakcijaLv() {
  const pageRef = useRef(null)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/zobu-ekstrakcija/#service`,
    "name": "Zobu ekstrakcija Klaipēdā",
    "serviceType": "Zobu ekstrakcija",
    "description": "Zobu ekstrakcijas pakalpojums Bangų zobārstniecības klīnikā Klaipēdā. Droša un profesionāla zobu izvilkšana.",
    "url": `${SITE_URL}/lv/pakalpojumi/zobu-ekstrakcija/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu ekstrakcija (traukšana) Klaipēdā — Bangų klīnika"
        description="Profesionāla un droša zobu ekstrakcija Klaipēdā. Gudrības zobu izvilkšana, ķirurģiska ekstrakcija, bērnu zobu ekstrakcija. Pierakstieties vizītei."
        keywords="zobu ekstrakcija, zoba traukšana, gudrības zobs, ķirurģiska ekstrakcija, klaipēda, nesāpīgi"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-ekstrakcija`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-traukimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-ekstrakcija` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-traukimas` },
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
              Zobu ekstrakcija Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zobu ekstrakcija ir zobārstniecības procedūra, ko veic tad, kad zobu vairs nevar saglabāt vai kad tas apdraud vispārējo mutes veselību. Lai gan mūsdienu zobārstniecība vienmēr cenšas saglabāt dabīgos zobus, noteiktās situācijās to izvilkšana kļūst par nepieciešamu un racionālāko risinājumu.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā veiktā zobu ekstrakcija ir droša, rūpīgi plānota un orientēta uz pacienta komfortu. Procedūras laikā tiek izmantoti mūsdienīgi pretsāpju līdzekļi, kas ļauj izvairīties no sāpēm un samazināt stresu. Katrā gadījumā lēmums par zoba izvilkšanu tiek pieņemts individuāli, izvērtējot zoba stāvokli, iespējamās alternatīvas un ilgtermiņa mutes veselības perspektīvu.
                </p>
              </div>
            </div>

            <div className="flex justify-start mt-6">
              <Link
                to="/lv/kontakti"
                className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Pierakstīties vizītei
              </Link>
            </div>

            {/* CENAS */}
            <motion.section id="cenas" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Zobu ekstrakcijas cenas
                    </h2>
                    <p className="text-slate-600">
                      Zobu ekstrakcijas cena ir atkarīga no procedūras sarežģītības, zoba atrašanās vietas, sakņu struktūras un apkārtējo audu stāvokļa. Pirms procedūras veikšanas vienmēr tiek veikta apskate, kuras laikā tiek novērtēta situācija un izvēlēta drošākā un piemērotākā zoba izvilkšanas metode.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Zobu izvilkšana</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Saknes izvilkšana', '60 – 80 €'],
                        ['Vienkārša zoba izvilkšana', '80 – 100 €'],
                        ['Sarežģīta gudrības zoba izvilkšana', '120 – 150 €'],
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
                  Precīza zobu ekstrakcijas cena Klaipēdā tiek apspriesta individuālās konsultācijas laikā, ņemot vērā konkrēto klīnisko situāciju. Caurspīdīga cenu veidošana un profesionāla pieeja ļauj pacientiem justies pārliecināti un pieņemt informētu lēmumu.
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
                    Pierakstīties vizītei
                  </Link>
                </div>
                <div className="relative aspect-[4/5] bg-sky-50">                  <img
                    src="/team/Jonas-light%20LV.jpg"
                    alt="Bangų zobārstniecības klīnikas ārsts"
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir zobu ekstrakcija?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu ekstrakcija ir zobārstniecības procedūra, kuras laikā zobs tiek izņemts no žokļa kaula alveolas. Šī procedūra tiek pielietota gadījumos, kad zobs ir stipri bojāts ar kariesu, traumu vai infekciju, nepareizi izaudzis vai traucē citu zobu ārstniecībai vai pareizajam sakodumam.
                </p>
                <p>
                  Procedūra var būt vienkārša vai sarežģītāka, atkarībā no zoba atrašanās vietas, sakņu formas un apkārtējo audu stāvokļa. Pirms zobu ekstrakcijas veikšanas vienmēr tiek veikta apskate un, ja nepieciešams, radioloģiskie pētījumi, kas ļauj saplānot drošu un precīzu ārstniecību. Pareizi veikta zobu ekstrakcija palīdz izvairīties no komplikācijām, samazina sāpes un rada priekšnosacījumus turpmākai ārstniecībai, piemēram, protezēšanai vai implantācijai.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAD NEPIECIEŠAMA */}
          <motion.section id="kad-nepieciesama" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad nepieciešama zobu ekstrakcija?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu ekstrakcija tiek veikta tikai tad, kad nav iespējas zobu saglabāt vai kad tā atstāšana mutē var radīt nopietnākas veselības problēmas. Pirms lēmuma pieņemšanas vienmēr tiek izvērtētas iespējamās alternatīvas, taču noteiktos gadījumos zoba izvilkšana ir drošākais un efektīvākais risinājums.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Zobu ekstrakcija var būt nepieciešama, ja:</h3>

                <div className="grid gap-3">
                  {[
                    'zobs ir stipri bojāts ar kariesu vai traumu, un atjaunošana vairs nav iespējama',
                    'parādās akūtas sāpes, iekaisums vai infekcija, kas izplatās apkārtējos audos',
                    'zobs ir nepareizi izaudzis vai iestrēdzis un traucē citiem zobiem',
                    'nepieciešams radīt vietu ortodontiskai ārstniecībai',
                    'zobs apdraud vispārējo mutes un žokļa veselību',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                <p className="text-sm text-slate-700 leading-relaxed">
                  <span className="font-semibold text-darkblue-700">Piezīme:</span>{' '}
                  Savlaicīgi veikta zobu ekstrakcija palīdz izvairīties no sarežģītākām komplikācijām un rada priekšnosacījumus turpmākai ārstniecībai, piemēram, protezēšanai vai implantācijai.
                </p>
              </div>
            </div>
          </motion.section>

          {/* EKSTRAKCIJAS VEIDI */}
          <motion.section id="veidi" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādi ir zobu ekstrakcijas veidi?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu ekstrakcijas metode tiek izvēlēta individuāli, ņemot vērā zoba atrašanās vietu, sakņu struktūru un apkārtējo audu stāvokli. Visbiežāk izšķir divus galvenos zobu ekstrakcijas veidus.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Vienkārša zobu ekstrakcija</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Vienkārša zobu ekstrakcija tiek veikta, kad zobs ir pilnībā izaudzis un viegli pieejams. Procedūras laikā zobārsts, izmantojot speciālus instrumentus, maigi atbrīvo zobu un to izvelk. Šī metode parasti tiek veikta ātri, un dzīšana norit vienmērīgi.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Ķirurģiska zobu ekstrakcija</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ķirurģiska zobu ekstrakcija tiek pielietota sarežģītākos gadījumos — kad zobs ir daļēji vai pilnībā neizaudzis, iestrēdzis, nolūzis vai kad saknes ir sarežģītas formas. Procedūras laikā var tikt veikts neliels iegriezums smaganās vai zobs tiek izvilkts pa daļām. Neskatoties uz sarežģītību, izmantojot mūsdienu metodes un atbilstošu anestēziju, procedūra tiek veikta droši un kontrolēti.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* BĒRNIEM UN PUSAUDŽIEM */}
          <motion.section id="berniem" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Zobu ekstrakcija bērniem un pusaudžiem</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu ekstrakcija bērniem vai pusaudžiem visbiežāk tiek veikta tikai tad, kad tas ir nepieciešams un kad nav iespējas zobu saglabāt. Tas var būt piena zobu izvilkšana, ja tie traucē pastāvīgo zobu augšanai, vai pastāvīgo zobu ekstrakcija pie lieliem bojājumiem vai ortodontiskās ārstēšanas nepieciešamības.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā zobu ekstrakcija jauniem pacientiem tiek veikta īpaši maigi, ņemot vērā bērna vecumu, emocionālo stāvokli un individuālās vajadzības. Pirms procedūras zobārsts atvēl laiku skaidrojumam, mierīgi iepazīstina bērnu ar norisi un atbild uz visiem jautājumiem. Tas palīdz samazināt bailes un radīt pozitīvu pieredzi.
                </p>
                <p>
                  Procedūras laikā tiek piemērotas bērniem pielāgotas anestēzijas metodes, un pati zobu ekstrakcija tiek veikta uzmanīgi un kontrolēti. Pēc procedūras vecākiem tiek sniegti skaidri ieteikumi par mutes kopšanu mājās un kam pievērst uzmanību dzīšanas periodā. Šāda pieeja palīdz nodrošināt vienmērīgu dzīšanu un pozitīvu bērna attieksmi pret turpmākajām vizītēm pie zobārsta.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAVĒŠANĀS RISKS */}
          <motion.section id="kavesanas-risks" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas notiek, ja zobs netiek savlaicīgi izvilkts?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Atlikta zobu ekstrakcija var izraisīt ne tikai ilgstošas sāpes, bet arī nopietnākas mutes veselības problēmas. Bojāts vai inficēts zobs bieži kļūst par pastāvīgu baktēriju perēkli, kas laika gaitā var ietekmēt apkārtējos audus, smaganas un žokļa kaulu.
                </p>
                <p>
                  Ja problemātiskais zobs netiek savlaicīgi izvilkts, iekaisums var izplatīties dziļākos audos, izraisot stiprāku pietūkumu, sāpes vai pat vispārējās pašsajūtas pasliktināšanos. Šādos gadījumos ārstniecība kļūst sarežģītāka un var būt nepieciešamas papildu procedūras vai ilgāks dzīšanas periods.
                </p>
                <p>
                  Turklāt novēlota zobu ekstrakcija var negatīvi ietekmēt blakus esošos zobus. Infekcija vai pastāvīgais spiediens var veicināt apkārtējo zobu bojājumus, smaganu atkāpšanos vai kaula iznīkšanu. Tas ir īpaši svarīgi, plānojot turpmāko ārstniecību, piemēram, implantāciju vai protezēšanu, jo zaudētais kauls var apgrūtināt šīs procedūras.
                </p>
                <p>
                  Savlaicīgi veikta zobu ekstrakcija palīdz izvairīties no šīm komplikācijām, samazina ārstniecības apjomu un ļauj ātrāk pāriet pie risinājumiem, kas atjauno funkciju un komfortu. Tāpēc svarīgi neignorēt simptomus un vērsties pie zobārsta, tiklīdz pamanīta problēma.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KĀ TIEK VEIKTA */}
          <motion.section id="ka-notiek" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek veikta zobu ekstrakcija?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu ekstrakcija Bangų zobārstniecības klīnikā tiek veikta pēc skaidras un drošas secības, lai procedūra būtu pēc iespējas komfortablāka pacientam un neradītu papildu stresu. Katrs gadījums tiek vērtēts individuāli, tāpēc procedūras gaita var nedaudz atšķirties atkarībā no zoba novietojuma un sarežģītības.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Apskate un sagatavošanās</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pirms zobu ekstrakcijas veikšanas zobārsts rūpīgi novērtē zoba un visas mutes dobuma stāvokli. Tiek veikta klīniskā apskate, novērtēts zoba novietojums, apkārtējo audu stāvoklis un iespējamie riska faktori. Ja situācija prasa detalizētāku novērtējumu, tiek nozīmēts rentgena izmeklējums, kas ļauj precīzi noteikt zoba sakņu formu, to novietojumu attiecībā pret žokļa kaulu un blakus esošajiem zobiem vai nerviem.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Anestēzija</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pirms procedūras uzsākšanas tiek piemērota vietējā nejutība, kas droši atsāpina ārstējamo apgabalu. Tas nodrošina, ka zobu ekstrakcijas laikā pacients nejutīs sāpes, bet tikai vieglu spiedienu vai kustību. Anestēzijas metode tiek izvēlēta individuāli, ņemot vērā pacienta jutīgumu, procedūras sarežģītību un vispārējo pašsajūtu.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zoba izvilkšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kad anestēzija sāk darboties, zobārsts uzmanīgi atbrīvo zobu no alveolas un to izvelk. Procedūra tiek veikta maigi, cenšoties pēc iespējas mazāk traumēt apkārtējos audus. Sarežģītākos gadījumos, piemēram, kad zobs ir cieši ieaudzis vai daļēji neizaudzis, tas var tikt izvilkts pa daļām.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Brūces apstrāde un ieteikumi</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pēc zoba izvilkšanas brūce tiek rūpīgi iztīrīta, lai samazinātu infekcijas risku un radītu priekšnosacījumus dabīgai dzīšanai. Ja nepieciešams, tiek uzliktas šuves vai speciāli hemostatiskas līdzekļi. Procedūras beigās pacientam tiek sniegti skaidri un saprotami ieteikumi.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* VAI SĀPĪGA */}
          <motion.section id="ar-sapiga" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Vai zobu ekstrakcija ir sāpīga?
              </h2>

              <div className="text-slate-700 leading-relaxed space-y-4">
                <p>
                  Mūsdienu zobārstniecībā zobu ekstrakcija tiek veikta tā, lai pacients neciestu sāpes. Izmantojot efektīvu vietējo nejutību, procedūras laikā sāpes netiek izjustas, un lielākā daļa pacientu procedūru raksturo kā īsu un vieglāk panesamu, nekā gaidīts.
                </p>
                <p>
                  Pēc procedūras, kad pretsāpju iedarbība beidzas, var parādīties viegls sāpīgums, pietūkums vai jutīgums — tā ir normāla ķermeņa reakcija. Šīs sajūtas parasti mazinās dažu dienu laikā un var tikt kontrolētas ar zobārsta ieteiktajiem līdzekļiem. Ievērojot sniegtos norādījumus, dzīšana norit vienmērīgi un bez komplikācijām.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PIRMS EKSTRAKCIJAS */}
          <motion.section id="pirms-ekstrakcijas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Ko darīt, ja zobs sāp pirms ekstrakcijas?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zoba sāpes bieži ir signāls, ka mutes dobumā notiek iekaisuma procesi vai bojājumi, kurus nevajadzētu ignorēt. Ja zobs sāp stipri, pastāvīgi vai sāpes pastiprinās, svarīgi nekavējoties vērsties pie zobārsta. Savlaicīgi veikta apskate ļauj novērtēt situāciju un izlemt, vai zobu var ārstēt vai nepieciešama zobu ekstrakcija.
                </p>
                <p>
                  Kamēr gaidāt vizīti, ieteicams izvairīties no darbībām, kas var pasliktināt stāvokli. Nevajadzētu sildīt sāpošo vietu, spiest vai mēģināt patstāvīgi "ārstēt" zobu ar tautas līdzekļiem. Tāpat ieteicams izvairīties no cieta ēdiena sāpošajā pusē un uzturēt ierasto, bet maigu mutes higiēnu.
                </p>
                <p>
                  Ja nepieciešams, īslaicīgai sāpju mazināšanai var lietot zobārsta vai farmaceita ieteiktos pretsāpju līdzekļus, taču tie neatrisina galveno problēmu. Ja parādās stiprs pietūkums, drudzis vai sāpes izplatās, nepieciešams pēc iespējas ātrāk vērsties pie speciālistiem, jo tas var liecināt par infekciju.
                </p>
                <p>
                  Profesionāls novērtējums ļauj ne tikai samazināt sāpes, bet arī izvēlēties drošāko ārstniecības risinājumu. Savlaicīgi saplānota zobu ekstrakcija, ja tā ir nepieciešama, palīdz izvairīties no nopietnākām komplikācijām un atvieglo turpmāko ārstniecību.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PĒC EKSTRAKCIJAS */}
          <motion.section id="pec-ekstrakcijas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Ko svarīgi zināt pēc zobu ekstrakcijas?</h2>

              <div className="text-slate-700 leading-relaxed space-y-4 mb-6">
                <p>
                  Pēc zobu ekstrakcijas ķermenim ir nepieciešams laiks dzīšanai, tāpēc pirmās dienas pēc procedūras ir īpaši svarīgas. Atbilstoša aprūpe palīdz samazināt diskomfortu, nodrošina vienmērīgu dzīšanu un palīdz izvairīties no iespējamām komplikācijām.
                </p>
                <p>
                  Pirmajās stundās pēc procedūras ieteicams izvairīties no intensīvas fiziskas slodzes un ļaut ķermenim atpūsties. Ekstrakcijas vietā veidojas asins receklis, kas ir nepieciešams dzīšanas procesam, tāpēc ir ļoti svarīgi to nesabojāt. Šī iemesla dēļ ieteicams neskalot muti intensīvi, nesūkt caur salmiņu un neaiztikt brūci ar mēli vai pirkstiem.
                </p>
              </div>

              <div className={innerCard + ' mb-6'}>
                <h3 className="font-semibold text-darkblue-700 mb-4">Tāpat ieteicams:</h3>
                <ul className="space-y-3">
                  {[
                    'pirmo dienu izvairīties no karstas pārtikas un dzērieniem, izvēlēties mīkstu, siltu ēdienu',
                    'nesmēķēt un nelietot alkoholu vismaz 24–48 stundas, jo tas var palēnināt dzīšanu',
                    'ievērot zobārsta nozīmēto pretsāpju vai citu medikamentu lietošanas ieteikumus',
                    'uzturēt mutes higiēnu, taču tīrīt zobus uzmanīgi, izvairoties no ekstrakcijas vietas',
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Viegls pietūkums, jutīgums vai sāpīgums pirmajās dienās ir normāla ķermeņa reakcija. Šīs sajūtas parasti pakāpeniski mazinās. Ja sāpes pastiprinās, parādās intensīvs pietūkums vai citi neparasti simptomi, svarīgi nekavējoties vērsties pie zobārsta.
                </p>
                <p>
                  Ievērojot sniegtos ieteikumus, dzīšana pēc zobu ekstrakcijas norit vienmērīgi, un mutes audi atjaunojas bez komplikācijām.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC IZVĒLĒTIES MŪS */}
          <motion.section id="kapec-mes" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc vērts izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties zobu ekstrakcijas pakalpojumus, svarīga nav tikai pati procedūra, bet arī tas, kā tā tiek veikta — no lēmuma pieņemšanas līdz aprūpei pēc procedūras. Bangų zobārstniecības klīnikā zobu ekstrakcija tiek veikta atbildīgi, cenšoties maksimāli aizsargāt pacienta komfortu un mutes veselību.
                </p>
                <p>
                  Klīnikas speciālisti katru gadījumu vērtē individuāli, nesteidzas pieņemt lēmumu un vienmēr vispirms meklē iespējas zobu saglabāt. Ja zobu ekstrakcija ir neizbēgama, procedūra tiek veikta, izmantojot mūsdienu anestēzijas metodes un rūpīgi saplānotu gaitu. Uzmanība tiek pievērsta ne tikai pašai procedūrai, bet arī skaidram situācijas izskaidrojumam un ieteikumiem pēc tās.
                </p>
                <p>
                  Pacienti novērtē profesionālo komunikāciju, mierīgo pieeju un skaidros norādījumus, kas palīdz justies droši visas ārstniecības laikā. Tāpēc tiem, kas meklē uzticamu un profesionālu zobu ekstrakciju Klaipēdā, Bangų zobārstniecības klīnika ir droša izvēle.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties zobu ekstrakcijā Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja jūtat zobu sāpes, diskomfortu vai saņēmāt ieteikumu zobu izvilkt, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts jūsu mutes stāvoklis, apspriesti iespējamie ārstniecības risinājumi un, ja nepieciešams, saplānota droša zobu ekstrakcija.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā cenšamies, lai pat tādas procedūras kā zobu ekstrakcija būtu skaidras, kontrolētas un pēc iespējas mazāk stresa radošas. Šeit jūs sagaida pieredzējuši speciālisti, modernas iekārtas un rūpīga pieeja katram pacientam.
                </p>
                <p>
                  Pierakstieties zobu ekstrakcijā un parūpējieties par savu mutes veselību savlaicīgi un profesionāli.
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
