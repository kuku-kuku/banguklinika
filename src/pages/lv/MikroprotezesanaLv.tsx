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
  { id: 'kas-yra', label: 'Kas ir mikroprotezēšana?' },
  { id: 'kada-rekomenduojamas', label: 'Kad ir ieteicama?' },
  { id: 'restauracijos', label: 'Izmantotās restaurācijas' },
  { id: 'procesas', label: 'Kā tiek veikta?' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function MikroprotezesanaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/mikroprotezesana/#service`,
    "name": "Zobu mikroprotezēšana Klaipēdā",
    "serviceType": "Zobu mikroprotezēšana",
    "description": "Zobu mikroprotezēšana – inlejas, onlejas un daļēji kronīši Bangų zobārstniecības klīnikā Klaipēdā.",
    "url": `${SITE_URL}/lv/pakalpojumi/mikroprotezesana/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu mikroprotezēšana Klaipēdā - Bangų klīnika"
        description="Zobu mikroprotezēšana Klaipēdā – inlejas, onlejas un daļēji kronīši Bangų zobārstniecības klīnikā. Cena no 450€ līdz 650€. Pierakstieties konsultācijai."
        keywords="zobu mikroprotezēšana, zoba inleja, zoba onleja, daļējs kronītis, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/mikroprotezesana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-mikroprotezavimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/mikroprotezesana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-mikroprotezavimas` },
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
              Zobu mikroprotezēšana Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zobu mikroprotezēšana ir bojāto zoba audu atjaunošanas veids, kurā tiek izmantotas individuāli
                  izgatavotas restaurācijas. Šī metode visbiežāk tiek izvēlēta tad, kad parasta plomba nav
                  pietiekama uzticamai zoba atjaunošanai, bet vēl nav nepieciešams pilns kronītis. Mikroprotezēšana
                  ļauj atjaunot zoba formu, funkciju un estētiku, vienlaikus saglabājot pēc iespējas vairāk stipro
                  dabisko audu.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā zobu mikroprotezēšana tiek plānota individuāli,
                  novērtējot bojājuma apjomu, atlikušo zoba sieniņu stāvokli, sakodienu un pacienta vajadzības.
                  Restaurācija tiek izgatavota pēc digitāla skenējuma vai nospieduma, tāpēc to var precīzi pielāgot
                  zoba anatomijai, blakus esošajiem zobiem un košļājamai virsmai.
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
                      Zobu mikroprotezēšanas cenas
                    </h2>
                    <p className="text-slate-600">
                      Zobu mikroprotezēšanas cena ir atkarīga no restaurācijas tipa, materiāla, bojājuma apjoma un
                      papildu ārstēšanas nepieciešamības. Precīzs ārstēšanas apjoms un cena tiek noteikti pēc zoba stāvokļa novērtēšanas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Zobu mikroprotezēšana</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Inleja / onleja / daļējs kronītis', '450 – 650 €'],
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
                  Precīza zobu mikroprotezēšanas cena Klaipēdā tiek apspriesta individuālas konsultācijas laikā,
                  ņemot vērā konkrētu klīnisku situāciju.
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
                    Ja Jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties
                    konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā novērtēsim Jūsu mutes stāvokli, atbildēsim
                    uz interesējošajiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs tiecamies, lai katrs pacients justos droši – no pirmās
                    konsultācijas līdz galīgajam rezultātam. Pierakstieties un speriet pirmo soli pretim veselam smaidam.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts detalizēts klīnisks novērtējums',
                        'tiek apspriestas iespējamās ārstēšanas metodes',
                        'tiek izskaidroti procedūras posmi un termiņi',
                        'tiek sastādīts individuāls ārstēšanas plāns',
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
                    src="/team/Jonas-light%20LV.jpg"
                    alt="Bangų zobārstniecības klīnikas ārsts"
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

          {/* KAS YRA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir zobu mikroprotezēšana?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Mikroprotezēšana ir zoba atjaunošana ar individuāli izgatavotu restaurāciju, kas vēlāk
                  tiek piestiprināta pie atlikušajiem zoba audiem. Atšķirībā no tiešās plombēšanas, galīgā
                  restaurācija netiek pilnībā izveidota mutē. Tā tiek izgatavota atsevišķi pēc sagatavotā zoba formas, un
                  vēlāk precīzi pielāgota.
                </p>
                <p>
                  Šī ārstēšanas metode bieži tiek izvēlēta kā starprisinājums starp lielu plombu un pilnu
                  kronīti. Ja bojājums ir neliels, var pietikt ar plombēšanu. Ja zoba vainaga daļa ir ļoti
                  stipri sabrukusi, var būt nepieciešams pilns zobu klājošs kronītis. Mikroprotezēšana
                  tiek pielietota tad, kad defekts ir pārāk liels uzticamai plombai, bet vēl var saglabāt daļu stipro
                  dabisko audu.
                </p>
                <p>
                  Mikroprotēze palīdz atjaunot ne tikai trūkstošo zoba daļu, bet arī tā pareizo anatomiju,
                  kontaktus ar blakus esošajiem zobiem un košļājamo virsmu. Pareizi plānota restaurācija palīdz
                  vienmērīgi sadalīt košļāšanas slodzi un aizsargāt novājinātās zoba sieniņas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REKOMENDUOJAMAS */}
          <motion.section id="kada-rekomenduojamas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad ir ieteicama zobu mikroprotezēšana?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu mikroprotezēšana var būt ieteicama tad, kad zoba bojājums ir pārāk liels parastai
                plombēšanai, bet vēl nav nepieciešams visu zobu segt ar kronīti. Lēmums tiek pieņemts, novērtējot
                atlikušo audu daudzumu, zoba atrašanās vietu, sakodiena slodzi un vispārējo mutes stāvokli.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Mikroprotezēšana var tikt apsvērta, kad:</h3>

                <div className="grid gap-3">
                  {[
                    'zobs ir stipri bojāts kariesa dēļ',
                    'palikusi liela, nolietota vai neblīva plomba',
                    'nolauzta zoba vai košļājamās virsmas daļa',
                    'novājināti viens vai vairāki zoba kauburīši',
                    'zobs ir nodilis griešanas vai citu iemeslu dēļ',
                    'pēc sakņu kanālu ārstēšanas zaudēts liels vainaga daļas apjoms',
                    'tieša plomba nespētu precīzi atjaunot zoba anatomiju un kontaktus'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Pēc endodontiskās ārstēšanas zobs var būt zaudējis lielu vainaga daļu un kļuvis jutīgāks
                  pret sašķelšanos. Ja atlikušo audu pietiek, onleja vai daļējs kronītis var pārsegt novājinātos
                  kauburīšus un palīdzēt vienmērīgāk sadalīt košļāšanas slodzi.
                </p>
                <p>
                  Mikroprotezēšana nav universāls risinājums. Mazākam defektam var vairāk piemērota plomba, bet ļoti
                  stipri sabrukušam zobam – pilns kronītis. Vispiemērotākais atjaunošanas veids tiek izvēlēts
                  individuāli.
                </p>
              </div>
            </div>
          </motion.section>

          {/* RESTAURACIJOS */}
          <motion.section id="restauracijos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādas restaurācijas tiek izmantotas mikroprotezēšanai?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu mikroprotezēšanai visbiežāk tiek izmantotas inlejas, onlejas un daļēji kronīši. Restaurācijas
                tips ir atkarīgs no bojājuma atrašanās vietas, lieluma un atlikušo audu stāvokļa.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zobu inlejas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Inleja tiek izmantota tad, kad bojājums atrodas košļājamās virsmas iekšpusē, bet galvenie
                    zoba kauburīši un sieniņas paliek pietiekami stipri. Tā precīzi aizpilda sagatavoto dobumu un
                    atjauno trūkstošos audus.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zobu onlejas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Onleja sedz ne tikai zoba iekšpusi, bet arī vienu vai vairākus novājinātos kauburīšus. Tā
                    var tikt izvēlēta, kad nepieciešams atjaunot lielāku košļājamās virsmas daļu un samazināt atlikušo
                    sieniņu sašķelšanās risku.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Daļēji kronīši</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Daļējs kronītis sedz lielāku zoba daļu, bet ne visu tā virsmu. Šāds risinājums
                    tiek pielietots tad, kad zobs ir stipri bojāts, bet vēl var saglabāt daļu stipro dabisko
                    audu.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Mikroprotēzes var tikt izgatavotas no keramikas, kompozītu vai citiem zobārstniecībā izmantotajiem materiāliem.
                Keramikas inleja vai onleja var tikt pielāgota dabiskai zoba krāsai, tomēr materiāls
                tiek izvēlēts ne tikai pēc estētikas. Tiek novērtēta zoba atrašanās vieta, restaurācijas lielums, sakodiena slodze un
                atlikušo audu stāvoklis.
              </p>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek veikta zobu mikroprotezēšana klīnikā?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu mikroprotezēšana Bangų zobārstniecības klīnikā tiek veikta vairākos posmos. Vizīšu skaits
                ir atkarīgs no zoba stāvokļa, restaurācijas izgatavošanas veida un papildu ārstēšanas nepieciešamības.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zoba stāvokļa novērtēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek veikta klīniska apskate un, ja nepieciešams, radioloģiska izmeklēšana. Tiek novērtēts bojājuma lielums,
                    atlikušo sieniņu stiprums, zoba dzīvotspēja, sakodiens un veco restaurāciju stāvoklis.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ārstēšanas plāna sastādīšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek izvēlēts restaurācijas tips un materiāls. Pacientam tiek izskaidrots, ar ko mikroprotezēšana atšķiras
                    no plombēšanas vai kronīša, tiek apspriestas ārstēšanas alternatīvas, gaita un provizoriskā cena.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zoba sagatavošana un skenēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek noņemti kariesa bojātie audi un nepiemērotās vecās restaurācijas. Zobs tiek sagatavots,
                    saglabājot pēc iespējas vairāk stipro audu. Pēc tam tiek veikta digitāla skenēšana vai nospiedums.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Restaurācijas izgatavošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pēc iegūtajiem datiem tiek izgatavota individuāla inleja, onleja vai daļējs kronītis. Restaurācijas
                    forma tiek pielāgota blakus esošajiem zobiem, dabiskai anatomijai un sakodienam.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Mikroprotēzes pielāgošana un piestiprināšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Izgatavotā restaurācija tiek pārbaudīta mutē. Tiek novērtēta tās piegulšana, malas, kontakti un
                    sakodiens. Piestiprināšanas laikā darba lauks tiek aizsargāts no siekalām un mitruma, un mikroprotēze
                    tiek piestiprināta ar zobārstniecības materiāliem.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed mt-6">
                <p>
                  Pēc procedūras var būt jūtama īslaicīga jutība vai neierasta sakodiena sajūta. Ja restaurācija
                  traucē sakost vai zobs paliek sāpīgs, vajadzētu vērsties klīnikā.
                </p>
                <p>
                  Mikroprotēze ir jākopj tikpat rūpīgi kā dabiskus zobus: tīrīt zobus divas reizes
                  dienā, kopt starpzobus un regulāri pārbaudīt restaurācijas stāvokli. Ja pacients griež
                  zobus, var tikt ieteikta aizsargkapa.
                </p>
                <p>
                  Zobu mikroprotezēšanas cena ir atkarīga no restaurācijas tipa, materiāla, bojājuma apjoma un
                  papildu ārstēšanas nepieciešamības. Precīzs ārstēšanas apjoms un cena tiek noteikti pēc zoba stāvokļa novērtēšanas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc vērts izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties zobu mikroprotezēšanas pakalpojumu, svarīgs ir ne tikai restaurācijas materiāls vai estētiskais izskats,
                  bet arī tas, kā tiek novērtēts zoba stāvoklis, plānots restaurācijas apjoms un sadalīta košļāšanas
                  slodze. Bangų zobārstniecības klīnikā mikroprotezēšana tiek veikta atbildīgi, tiecoties saglabāt
                  pēc iespējas vairāk veselo zoba audu un atjaunot tā funkciju.
                </p>
                <p>
                  Mūsu speciālisti katru gadījumu vērtē individuāli, ņemot vērā bojājuma lielumu, atlikušo
                  sieniņu stiprumu, sakodienu un pacienta vajadzības. Pirms ārstēšanas tiek izskaidroti iespējamie restaurēšanas
                  virzieni, to atšķirības un kopšanas ieteikumi. Uzmanība tiek pievērsta ne tikai mikroprotēzes formai un
                  krāsai, bet arī tās malu pielāgošanai, kontaktam ar blakus esošajiem zobiem un ērtam sakodienam.
                </p>
                <p>
                  Pacienti novērtē profesionālu komunikāciju, skaidru ārstēšanas plānu un konsekventu uzmanību visos ārstēšanas
                  posmos. Tāpēc tiem, kas meklē profesionālu zobu mikroprotezēšanu Klaipēdā, Bangų zobārstniecības
                  klīnika ir uzticama izvēle.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties zobu mikroprotezēšanai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja Jums ir bojāts zobs, kuram parastas plombas jau nepietiek, aicinām pierakstīties
                  konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts zoba stāvoklis un apspriestas
                  iespējamās mikroprotezēšanas alternatīvas.
                </p>
                <p>
                  Pierakstieties un parūpējieties par savu zobu veselību savlaicīgi un profesionāli.
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
