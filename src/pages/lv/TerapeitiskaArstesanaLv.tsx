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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const tocSections = [
  { id: 'kainos', label: 'Cenas' },
  { id: 'kas-yra', label: 'Kas ir terapeitiskā zobu ārstēšana?' },
  { id: 'kada-reikalingas', label: 'Kad nepieciešama ārstēšana?' },
  { id: 'problemos', label: 'Risināmās problēmas' },
  { id: 'procesas', label: 'Kā notiek ārstēšana?' },
  { id: 'kodel-svarbu', label: 'Kāpēc svarīgi ārstēt savlaicīgi?' },
  { id: 'po-gydymo', label: 'Ko zināt pēc ārstēšanas?' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function TerapeitiskaArstesanaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/terapeitiska-arstesana/#service`,
    "name": "Terapeitiskā zobu ārstēšana Klaipēdā",
    "serviceType": "Terapeitiskā zobu ārstēšana",
    "description": "Terapeitiskā zobu (kariesa) ārstēšana Bangų zobārstniecības klīnikā Klaipēdā. Kariesa diagnostika un ārstēšana, zobu plombēšana, veco restaurāciju nomaiņa, nolauztu zobu atjaunošana un jutīguma ārstēšana.",
    "url": `${SITE_URL}/lv/pakalpojumi/terapeitiska-arstesana/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        title="Terapeitiskā zobu (kariesa) ārstēšana Klaipēdā - Bangų klīnika"
        description="Terapeitiskā zobu ārstēšana Klaipēdā – kariesa ārstēšana☑️plombēšana☑️nolauztu zobu atjaunošana Bangų klīnikā.⏩Piesakieties konsultācijai jau šodien."
        keywords="terapeitiska zobu arstesana, kariesa arstesana, zobu plombesana, zobu jutigums, klaipeda"
        lang="lv"
        canonical={`${SITE_URL}/lv/pakalpojumi/terapeitiska-arstesana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/terapinis-dantu-gydymas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/terapeitiska-arstesana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/terapinis-dantu-gydymas` },
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
        <TableOfContents sections={tocSections} rootRef={pageRef} title="Saturs" cta={{ label: 'Pierakstīties vizītei', to: '/lv/kontakti' }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Terapeitiskā zobu ārstēšana Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zoba jutīgums, sāpes košļājot, tumšāks laukumiņš emaljā, nolauzta zoba mala vai nolietojusies
                  plomba var būt pirmās pazīmes, ka zoba audiem nepieciešama ārstēšana. Pat neliels bojājums laika
                  gaitā var izplatīties, tāpēc svarīgi zobu stāvokli izvērtēt pēc iespējas agrāk, kamēr vēl iespējams
                  saglabāt vairāk veselu audu un izvairīties no sarežģītākām procedūrām. Terapeitiskā zobu ārstēšana
                  ietver zobu kariesa diagnostiku un ārstēšanu, bojāto zobu plombēšanu, veco restaurāciju nomaiņu,
                  nelielu nolauzumu atjaunošanu, kā arī zobu jutīguma cēloņu izvērtēšanu.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā katrs gadījums tiek izvērtēts individuāli. Ārstēšanas
                  risinājums tiek izvēlēts, ņemot vērā bojājuma dziļumu, atlikušo zoba audu daudzumu, sakodienu,
                  iepriekšējo restaurāciju stāvokli un pacienta izjustos simptomus. Mūsu klīnikā mēs cenšamies ne
                  tikai likvidēt bojātos audus, bet arī precīzi atjaunot zoba formu, košļāšanas funkciju, kontaktu
                  ar blakus esošajiem zobiem un estētisko viengabalainību.
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

            {/* KAINOS */}
            <motion.section id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Terapeitiskās zobu ārstēšanas cenas
                    </h2>
                    <p className="text-slate-600">
                      Terapeitiskās zobu ārstēšanas cena ir atkarīga no bojājuma lieluma, ārstējamā zoba atrašanās
                      vietas, restaurācijas apjoma, izmantotajiem materiāliem un papildu diagnostisko procedūru
                      nepieciešamības. Precīzs ārstēšanas apjoms un cena tiek noteikti, izvērtējot zoba stāvokli
                      konsultācijas laikā.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Terapeitiskā zobu ārstēšana</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Terapeitiskā zobu (kariesa) ārstēšana', '110–170 €'],
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
                  Precīza terapeitiskās zobu ārstēšanas cena Klaipēdā tiek apspriesta individuālas konsultācijas
                  laikā, ņemot vērā konkrēto klīnisko situāciju. Caurskatāma cenu politika un profesionāla pieeja
                  ļauj pacientiem justies pārliecināti un pieņemt informētu lēmumu.
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
                    Aicinām pierakstīties uz konsultāciju Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja Jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties
                    uz konsultāciju Bangų zobārstniecības klīnikā. Vizītes laikā izvērtēsim Jūsu mutes dobuma
                    stāvokli, atbildēsim uz interesējošajiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs tiecamies, lai katrs pacients justos pārliecināti – no pirmās
                    konsultācijas līdz galīgajam rezultātam. Piesakieties un speriet pirmo soli veselīga smaida
                    virzienā.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts detalizēts klīniskais izvērtējums',
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

          {/* KAS YRA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir terapeitiskā zobu ārstēšana?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Terapeitiskā zobu ārstēšana ir zobārstniecības joma, kas paredzēta dabīgo zobu slimību un bojājumu
                  diagnostikai, konservatīvai ārstēšanai un atjaunošanai. Šādas ārstēšanas galvenais mērķis ir
                  apturēt bojājuma progresēšanu, saglabāt pēc iespējas vairāk veselu zoba audu un atjaunot zoba
                  funkciju.
                </p>
                <p>
                  Zobu veido vairāki dažādi audi. Ārējo virsmu klāj emalja, zem tās atrodas mīkstāks dentīns, bet
                  zoba iekšpusē – pulpa, kurā atrodas nervi un asinsvadi. Kamēr kariesa vai traumas izraisīts
                  bojājums aprobežojas ar emalju un dentīnu, zobu parasti var ārstēt ar terapeitiskām metodēm. Ja
                  infekcija sasniedz pulpu un izraisa neatgriezenisku tās iekaisumu, var būt nepieciešama
                  endodontiskā jeb saknes kanālu ārstēšana.
                </p>
                <p>
                  Terapeitiskās ārstēšanas laikā bojātie, iemīkstinātie vai neuzticamie zoba audi tiek likvidēti, un
                  izveidojies defekts tiek atjaunots ar plombes materiālu. Restaurācija tiek veidota, ņemot vērā
                  dabīgo zoba anatomiju, košļāšanas slodzi un sakodienu. Priekšējo zobu apvidū papildus tiek
                  saskaņota krāsa, forma un caurspīdīgums, lai atjaunotais zobs pēc iespējas dabiskāk iekļautos
                  kopējā smaidā.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REIKALINGAS */}
          <motion.section id="kada-reikalingas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad nepieciešama terapeitiskā zobu ārstēšana?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Terapeitiskā zobu ārstēšana var būt nepieciešama tad, kad zoba emalju vai dentīnu bojā kariess,
                trauma, nolietojums vai izmaiņas ap vecu restaurāciju. Ārstēšanas nepieciešamība ir atkarīga ne tikai
                no izjustajām sāpēm, tāpēc svarīgi pievērst uzmanību arī mazāk izteiktām pazīmēm.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Pie zobārsta ieteicams vērsties, ja:</h3>

                <div className="grid gap-3">
                  {[
                    'zobs kļuvis jutīgs pret aukstumu, karstumu, saldu vai skābu ēdienu',
                    'jūtamas sāpes košļājot vai sakožot zobus',
                    'uz zoba pamanāms tumšs, brūngans vai bālgans plankums',
                    'redzams dobums, iedobums vai nelīdzena zoba virsma',
                    'nolūzusi zoba mala vai plombes daļa',
                    'vecā plomba mainījusi krāsu, kļuvusi raupja vai zaudējusi hermētiskumu',
                    'starp zobiem pastāvīgi iesprūst ēdiens',
                    'zobu diegs plīst vai aizķeras pie plombes malas',
                    'pēc traumas mainījusies zoba krāsa vai parādījies jutīgums',
                    'jūtams neierasts spiediens vai diskomforts konkrētā zoba apvidū'
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
                  Daži kariesa bojājumi, īpaši tie, kas atrodas starp zobiem vai zem vecām restaurācijām, var būt
                  neredzami ar neapbruņotu aci. Šādos gadījumos tos palīdz atklāt klīniskā apskate un radioloģiskie
                  izmeklējumi. Jo agrāk bojājums tiek atklāts, jo mazāka apjoma ārstēšana parasti ir pietiekama.
                  Nelielu dobumu var atjaunot, saglabājot lielāku dabīgā zoba daļu. Bojājumam progresējot, zobs
                  novājinās, palielinās pulpas iekaisuma, lūzuma un sarežģītākas atjaunošanas risks.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROBLEMOS */}
          <motion.section id="problemos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādas problēmas tiek risinātas terapeitiskās ārstēšanas laikā?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Terapeitiskā zobu ārstēšana ietver vairākas visbiežāk veiktās procedūras. Konkrēts risinājums tiek
                izvēlēts tikai pēc zoba stāvokļa, bojājuma lieluma, atrašanās vietas un iespējamās ilgtermiņa
                prognozes izvērtēšanas.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zobu kariesa ārstēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zobu kariess ir cieto zoba audu bojājums, kas saistīts ar aplikumā esošo baktēriju ražoto skābju
                    iedarbību. Sākotnējā stadijā uz emaljas virsmas var parādīties bālgana vai tumšāka izmaiņa, bet
                    procesam progresējot izveidojas dobums. Ārstēšanas laikā tiek likvidēti kariesa bojātie audi,
                    dobums tiek iztīrīts un atjaunots ar plombes materiālu.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zobu plombēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zobu plombēšana tiek veikta, lai atjaunotu pēc kariesa ārstēšanas, traumas vai nolietojuma
                    zaudēto zoba daļu. Mūsdienu kompozītie materiāli tiek saskaņoti ar dabīgo zoba krāsu un tiek
                    veidoti kārtām tā, lai tiktu atjaunota ne tikai izskats, bet arī funkcija – zoba paugurīši,
                    vagas un kontakts ar blakus esošo zobu.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Veco plombu nomaiņa</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Plomba nebūtu jāmaina tikai tāpēc, ka tā ir veca. Vispirms tiek izvērtēts tās hermētiskums,
                    malu stāvoklis, nolietojums, plaisas un apkārtējo zoba audu stāvoklis. Restaurāciju var būt
                    ieteicams nomainīt, ja tā ir nolauzta, zaudējusi hermētiskumu, kļuvusi pārāk augsta vai ap to
                    izveidojies sekundārs kariess.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Nolauztu zobu atjaunošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zobs var nolūzt traumas, cieta ēdiena, bruksisma, lielas plombes vai novājinātu audu dēļ. Nelieli
                    nolauzumi bieži tiek atjaunoti ar kompozīto materiālu, izvēloties formu un krāsu pēc blakus
                    esošajiem zobiem. Ja zaudēta liela zoba daļa, var tikt apsvērts keramiskais uzlikums, kronītis
                    vai cits protezēšanas risinājums.
                  </p>
                </div>

                <div className={innerCard + ' md:col-span-2'}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zobu jutīguma ārstēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zobu jutīgumu var izraisīt kariess, emaljas nolietojums, atkāpušās smaganas, plaisa, nehermētiska
                    plomba vai pārāk liela sakodiena slodze. Tāpēc vispirms nepieciešams noteikt precīzu jutīguma
                    cēloni. Atkarībā no situācijas var tikt veikta bojātās vietas plombēšana, esošās restaurācijas
                    korekcija, izmantoti jutīgumu mazinoši līdzekļi vai ieteikta citas jomas ārstēšana.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek veikta terapeitiskā zobu ārstēšana klīnikā?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Terapeitiskā zobu ārstēšana Bangų zobārstniecības klīnikā tiek veikta secīgi, lai precīzi noteiktu
                problēmu, likvidētu bojātos audus un atjaunotu ērtu zoba funkcionēšanu.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultācija un diagnostika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Vispirms tiek uzklausītas pacienta sūdzības un tiek veikta mutes dobuma apskate. Tiek izvērtēts
                    zobu, plombu, smaganu un sakodiena stāvoklis. Nepieciešamības gadījumā tiek veikti radioloģiskie
                    izmeklējumi, kas palīdz noteikt starpzobu kariesu, bojājumu zem plombes vai tā tuvumu pulpai.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ārstēšanas plāna sagatavošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Izvērtējot izmeklējumu rezultātus, pacientam tiek izskaidrots zoba stāvoklis, iespējamās
                    ārstēšanas metodes un prognoze. Ja bojājums ir pārāk liels uzticamai plombēšanai, tiek
                    apspriestas alternatīvas, kas var labāk pasargāt atlikušos zoba audus.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Anestēzija</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ja procedūra var izraisīt jutīgumu vai diskomfortu, tiek lietota vietējā anestēzija. Vairums
                    terapeitiskās ārstēšanas procedūru, atbilstoši anestezējot ārstējamo apvidu, tiek veiktas, nejūtot
                    sāpes. Pacients var justies spiedienu, pieskārienu vai vibrāciju, tomēr nebūtu jājūt asas sāpes.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Bojāto audu likvidēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kariesa bojātie, iemīkstinātie vai neuzticamie audi tiek likvidēti, cenšoties saglabāt pēc
                    iespējas vairāk veselās zoba struktūras. Sagatavotais dobums tiek iztīrīts un pielāgots gaidāmajai
                    restaurācijai.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zoba atjaunošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zobs tiek atjaunots ar plombes materiālu, visbiežāk to liekot un cietinot kārtām. Tiek veidota
                    dabīgā zoba anatomija, kontakts ar blakus esošajiem zobiem un pareiza košļāšanas virsma.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">06</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Sakodiena pārbaude un pulēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pabeidzot plombēšanu, tiek pārbaudīts, vai restaurācija netraucē sakodienam. Nepieciešamības
                    gadījumā tiek veiktas nelielas korekcijas. Plombes virsma tiek nopulēta, lai tā būtu gluda, ērta
                    un mazāk uzkrātu aplikumu.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Vienas vizītes ilgums ir atkarīgs no ārstējamo zobu skaita, bojājuma dziļuma un restaurācijas
                sarežģītības. Neliels bojājums bieži tiek nokārtots vienā vizītē, tomēr, ārstējot vairākus zobus vai
                sarežģītākas restaurācijas, var būt nepieciešami vairāki apmeklējumi.
              </p>
            </div>
          </motion.section>

          {/* KODĖL SVARBU LAIKU */}
          <motion.section id="kodel-svarbu" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kāpēc svarīgi bojātus zobus ārstēt savlaicīgi?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                <p>
                  Zobu kariess un citi cieto audu bojājumi paši no sevis nesadzīst. Agrīnā stadijā, kad emaljas
                  virsma vēl nav sabrukusi, zobārsts var ieteikt profilaktiskus līdzekļus un stāvokļa novērošanu.
                  Tomēr, kad izveidojies dobums, bojātie audi ir profesionāli jāizvērtē un jāārstē.
                </p>
                <p>
                  Neārstēts kariess pakāpeniski izplatās dentīnā un tuvojas pulpai. Sākumā pacients var nejust
                  nekādus simptomus, vēlāk parādās jutīgums, sāpes košļājot vai ilgāk ilgstoša reakcija uz
                  temperatūru. Infekcijai skarot pulpu, ar vienkāršu plombēšanu var vairs nepietikt un var būt
                  nepieciešama saknes kanālu ārstēšana.
                </p>
                <p>
                  Palielinoties bojājumam, atlikusī zoba struktūra novājinās. Plānas sieniņas kļūst jutīgākas pret
                  lūšanu, tāpēc zobu ne vienmēr var uzticami atjaunot ar lielu plombu. Šādā gadījumā var būt
                  nepieciešams keramiskais uzlikums vai kronītis. Ļoti stipri bojātu zobu dažreiz vairs nav
                  iespējams saglabāt.
                </p>
              </div>

              <div className={innerCard}>
                <h3 className="font-semibold text-darkblue-700 mb-4">Savlaicīgi veikta terapeitiskā ārstēšana palīdz:</h3>
                <ul className="space-y-3">
                  {[
                    'apturēt bojājuma progresēšanu',
                    'saglabāt vairāk dabīgo zoba audu',
                    'samazināt sāpju un pulpas iekaisuma risku',
                    'atjaunot košļāšanas funkciju',
                    'pasargāt zobu no turpmākas lūšanas',
                    'samazināt sarežģītākas ārstēšanas iespējamību nākotnē'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Regulāras profilaktiskās apskates ir svarīgas pat tad, ja simptomi netiek izjusti. To laikā iespējams
                pamanīt agrīnu kariesu, izmainītas plombu malas vai citus bojājumus, kurus pacients vēl nesajūt.
              </p>
            </div>
          </motion.section>

          {/* PO GYDYMO */}
          <motion.section id="po-gydymo" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas svarīgi zināt pēc terapeitiskās zobu ārstēšanas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Pēc plombēšanas zobs kādu laiku var būt jutīgāks pret aukstumu, karstumu vai košļāšanas slodzi.
                  Neizteikts un pakāpeniski samazinošs jutīgums var būt normāla reakcija, īpaši, ja ārstētais bojājums
                  bija dziļš. Tomēr pastiprinošas, spontānas, pulsējošas vai naktī parādošās sāpes nav ierastas,
                  tāpēc šādā gadījumā vajadzētu vērsties pie zobārsta.
                </p>
                <p>
                  Kamēr darbojas vietējā anestēzija, ieteicams ēst piesardzīgi un izvairīties no ļoti karstiem
                  dzērieniem. Samazinātās jušanas dēļ iespējams nepamanot iekost vaigā, lūpā vai mēlē. Kad kompozītā
                  plomba ir sacietējusi, zobu parasti var lietot ierasti, tomēr pirmajā dienā vērts novērot sajūtas
                  košļājot.
                </p>
                <p>
                  Ja šķiet, ka ārstētais zobs sakožot pirmais nonāk kontaktā, tiek jūsts spiediens vai sāpes, var būt
                  nepieciešama neliela sakodiena korekcija. Pārāk augstas restaurācijas nevajadzētu ignorēt, jo
                  pastāvīga pārāk liela slodze var izraisīt jutīgumu un ietekmēt plombes ilgmūžību.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties terapeitiskās zobu ārstēšanas pakalpojumus, svarīgi ir ne tikai likvidēt bojātos zoba
                  audus, bet arī tas, cik precīzi tiek izvērtēts zoba stāvoklis, izvēlēta ārstēšanas metode un
                  atjaunota tā funkcija. Bangų zobārstniecības klīnikā terapeitiskā zobu ārstēšana tiek veikta
                  atbildīgi, tiecoties pēc iespējas ilgāk saglabāt dabīgos zobus un nodrošināt pacienta komfortu
                  visas ārstēšanas laikā.
                </p>
                <p>
                  Klīnikā strādājošie speciālisti katru gadījumu izvērtē individuāli, ņemot vērā bojājuma dziļumu,
                  zoba vitalitāti, sakodienu, iepriekšējo restaurāciju stāvokli un pacienta sūdzības. Ārstēšanas
                  laikā tiek darīts viss iespējamais, lai saglabātu pēc iespējas vairāk veselu zoba audu, precīzi
                  atjaunotu tā anatomiju un nodrošinātu, ka restaurācija būtu ērta košļājot. Uzmanība tiek pievērsta
                  ne tikai pašai procedūrai, bet arī skaidram situācijas izskaidrojumam, iespējamo ārstēšanas
                  alternatīvu apspriešanai un ieteikumiem pēc ārstēšanas.
                </p>
                <p>
                  Pacienti novērtē profesionālu saziņu, mierīgu pieeju un skaidru ārstēšanas gaitu, kas palīdz justies
                  droši visu vizītes laiku. Tāpēc tiem, kas meklē uzticamu un profesionālu terapeitisko zobu
                  ārstēšanu Klaipēdā, Bangų zobārstniecības klīnika ir uzticama izvēle.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties terapeitiskai zobu ārstēšanai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja jūtat zobu jutīgumu, sāpes košļājot vai esat pamanījuši izmaiņas uz zobu virsmas, aicinām
                  pierakstīties uz konsultāciju Bangų zobārstniecības klīnikā. Vizītes laikā tiks izvērtēts Jūsu
                  mutes dobuma stāvoklis, apspriestas iespējamās ārstēšanas alternatīvas un ieplānota individuāla
                  ārstēšana.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā mēs tiecamies, lai terapeitiskā zobu ārstēšana būtu skaidra,
                  kvalitatīva un pēc iespējas mazāk stresa radoša. Šeit Jūs sagaida pieredzējuši speciālisti, moderna
                  aparatūra un rūpīga attieksme pret katru pacientu.
                </p>
                <p>
                  Piesakieties un parūpējieties par savu zobu veselību savlaicīgi un profesionāli.
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
