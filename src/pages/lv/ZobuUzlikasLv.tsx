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
  { id: 'kas-yra', label: 'Kas ir zobu uzlikas?' },
  { id: 'kada-rekomenduojami', label: 'Kad tās ir ieteicamas?' },
  { id: 'skirtumai', label: 'Atšķirības no plombām un kronīšiem' },
  { id: 'procesas', label: 'Kā notiek atjaunošana?' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function ZobuUzlikasLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/zobu-uzlikas/#service`,
    "name": "Zobu uzlikas Klaipēdā",
    "serviceType": "Zobu uzlikas",
    "description": "Individuālas zobu uzlikas stipri bojāta košļājamā zoba atjaunošanai Bangų zobārstniecības klīnikā Klaipēdā.",
    "url": `${SITE_URL}/lv/pakalpojumi/zobu-uzlikas/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        title="Zobu uzlikas Klaipēdā - Bangų klīnika"
        description="Zobu uzlikas Klaipēdā – individuālas restaurācijas stipri bojāta košļājamā zoba atjaunošanai Bangų zobārstniecības klīnikā. Cena no 450€.⏩Piesakieties konsultācijai."
        keywords="zobu uzlikas, keramikas uzlikas, zoba atjaunosana, mikroprotezesana, klaipeda"
        lang="lv"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-uzlikas`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-uzklotai` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-uzlikas` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-uzklotai` },
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
              Zobu uzlikas Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zobu uzlikas ir individuāli izgatavotas restaurācijas, kas paredzētas stipri bojāta košļājamā
                  zoba atjaunošanai. Tās parasti tiek izvēlētas tad, kad ar plombu nepietiek, lai droši atjaunotu zoba
                  formu un funkciju, bet visa zoba pārklāšana ar kronīti vēl nav nepieciešama. Uzlika var atjaunot lielu
                  košļājamās virsmas daļu un pārklāt vienu vai vairākus novājinātus zoba paugurīšus.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā zoba atjaunošana ar uzliku tiek plānota individuāli. Pirms
                  ārstēšanas tiek novērtēts bojājuma lielums, atlikušo sieniņu izturība, sakodiens, zoba dzīvotspēja un
                  iepriekš veiktā ārstēšana. Šāda novērtēšana palīdz izvēlēties restaurāciju, kas atbilst konkrētā
                  zoba stāvoklim un košļāšanas slodzei.
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
                      Zobu uzliku cenas
                    </h2>
                    <p className="text-slate-600">
                      Zobu uzliku cena ir atkarīga no materiāla, restaurācijas lieluma, zoba sagatavošanas un papildu
                      ārstēšanas. Precīza cena tiek noteikta, izvērtējot konkrēto klīnisko situāciju.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Zobu uzlikas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Zoba uzlika', 'no 450 €'],
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
                  Precīza zobu uzliku cena Klaipēdā tiek apspriesta individuālas konsultācijas laikā, ņemot vērā
                  konkrēto klīnisko situāciju.
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
                    konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā novērtēsim Jūsu mutes dobuma stāvokli,
                    atbildēsim uz Jūs interesējošiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs cenšamies, lai katrs pacients justos droši – no pirmās
                    konsultācijas līdz galīgajam rezultātam. Piesakieties un speriet pirmo soli veselīga smaida virzienā.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikta detalizēta klīniskā izmeklēšana',
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir zobu uzlikas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu uzlikas ir netiešās restaurācijas, kas tiek izgatavotas atbilstoši sagatavotā zoba formai un
                  pēc tam piestiprinātas pie tā atlikušajiem audiem. Atšķirībā no plombēšanas, galīgā restaurācija netiek
                  pilnībā veidota tieši pacienta mutē. Zobs tiek noskenēts vai no tā tiek noņemts nospiedums, pēc kura
                  tiek izgatavota individuāla uzlika.
                </p>
                <p>
                  Uzlika atjauno bojāto košļājamās virsmas daļu un pārklāj novājinātos paugurīšus. Šāds risinājums
                  var būt nepieciešams pēc lielas plombas, kariesa, zoba lūzuma vai sakņu kanālu ārstēšanas, kad
                  atlikušās sieniņas vairs nespēj droši izturēt košļāšanas spēkus.
                </p>
                <p>
                  Zobu uzlikas tiek pieskaitītas mikroprotezēšanai, jo tiek atjaunota tikai bojātā zoba daļa. Sagatavošanas
                  laikā tiek noņemti kariesa bojātie, ielūzušie vai neuzticamie audi, bet stiprās sieniņas tiek saglabātas.
                  Tas ļauj atjaunot zobu ar mazāka apjoma restaurāciju nekā viss kronītis.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REKOMENDUOJAMI */}
          <motion.section id="kada-rekomenduojami" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad zobu uzlikas ir ieteicamas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zoba atjaunošana ar uzliku var tikt ieteikta, kad bojājums ir pārāk liels drošai plombai, bet vēl
                ir palicis pietiekami daudz stipru dabisko audu, lai noturētu daļēju restaurāciju.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Zobu uzlikas var tikt apsvērtas, kad:</h3>

                <div className="grid gap-3">
                  {[
                    'liela zoba daļa ir bojāta ar kariesu',
                    'atlikusi plaša, nolietojusies vai negaisdroša plomba',
                    'nolūzis viens vai vairāki zoba paugurīši',
                    'zoba sieniņas ir plānas vai novājinātas',
                    'pēc sakņu kanālu ārstēšanas ir zudis daudz vainaga audu',
                    'zobs ir stipri nodilis',
                    'plomba nespētu precīzi atjaunot košļājamo virsmu un kontaktus'
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
                  Pēc endodontiskās ārstēšanas zoba prognozei ir svarīgs ne tikai kanālu ārstēšanas rezultāts, bet arī
                  droša un košļāšanas slodzi pareizi sadalošā galīgā restaurācija. Ja atlikušo sieniņu ir pietiekami,
                  uzlika var pārklāt novājinātos paugurīšus un samazināt to lūšanas risku.
                </p>
                <p>
                  Tomēr uzlika nav nepieciešama katram sakņu kanālu ārstētam zobam. Ja defekts ir mazs, var pietikt ar
                  plombu vai zoba inleju. Ja zobs ir ļoti stipri sabrucis, var tikt ieteikts viss zobu pārklājošais
                  kronītis.
                </p>
              </div>
            </div>
          </motion.section>

          {/* SKIRTUMAI */}
          <motion.section id="skirtumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Ar ko zobu uzlikas atšķiras no plombām un kronīšiem?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Plomba tiek veidota tieši mutē un parasti ir piemērota maziem vai vidēja lieluma defektiem.
                  Kad ir bojāta liela košļājamās virsmas daļa un ir novājināti paugurīši, plomba var nepietiekami
                  aizsargāt atlikušās sieniņas no košļāšanas slodzes.
                </p>
                <p>
                  Zobu inlejas un uzlikas tiek izgatavotas individuāli, bet to apjoms atšķiras. Inleja parasti
                  atjauno košļājamās virsmas iekšējo daļu, kad galvenie paugurīši vēl ir pietiekami stipri.
                  Uzlika pārklāj plašāku laukumu un vienu vai vairākus paugurīšus, kuriem nepieciešama papildu
                  aizsardzība.
                </p>
                <p>
                  Kronītis pārklāj gandrīz visu sagatavoto zoba vainaga daļu. Tas var būt nepieciešams, kad
                  atlikušo audu nepietiek, lai noturētu uzliku. Uzlika ir mazāka apjoma restaurācija, tāpēc
                  piemērotos gadījumos ļauj saglabāt vairāk dabiskā zoba.
                </p>
                <p>
                  Uzlikas var tikt izgatavotas no keramikas, kompozītmateriāliem vai citiem zobārstniecībā izmantotiem
                  materiāliem. Keramikas zobu uzlikas izceļas ar gludu virsmu, izturību pret nolietošanos un var tikt
                  pielāgotas dabiskā zoba formai un nokrāsai. Porcelāna zobu uzlikas – tas arī ir bieži lietots keramikas
                  restaurāciju nosaukums.
                </p>
                <p>
                  Materiāls tiek izvēlēts ne tikai pēc estētikas. Tiek vērtēta zoba atrašanās vieta, restaurācijas lielums,
                  sakodiena slodze, zobu griešana un atlikušo audu stāvoklis.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā notiek zoba atjaunošana ar uzliku?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu uzliku izgatavošana un pielietošana tiek veikta vairākos posmos. Vizīšu skaits ir atkarīgs no zoba
                stāvokļa, izvēlētā materiāla un restaurācijas izgatavošanas veida.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zoba stāvokļa novērtējums</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek veikta klīniska apskate un, ja nepieciešams, radioloģiskā izmeklēšana. Tiek novērtēts bojājuma
                    dziļums, atlikušo sieniņu izturība, zoba dzīvotspēja un sakodiens.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ārstēšanas plāna izstrāde</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pacientam tiek izskaidrots, vai konkrētajā gadījumā piemērotāka ir uzlika, inleja, plomba vai kronītis.
                    Tiek apspriests restaurācijas materiāls, ārstēšanas gaita, alternatīvas un provizoriskā cena.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zoba sagatavošana un skenēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek noņemti kariesa bojātie audi, negaisdrošas plombas un neuzticamās zoba daļas. Pēc tam
                    tiek veikta digitālā skenēšana vai tiek noņemts nospiedums. Ja nepieciešams, zobs tiek aizsargāts ar
                    pagaidu restaurāciju.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Uzlikas izgatavošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atbilstoši savāktajiem datiem tiek izgatavota individuāla restaurācija. Tās forma tiek pielāgota
                    dabiskajai zoba anatomijai, blakus zobu kontaktiem un pacienta sakodienam.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Uzlikas pielāgošana un piestiprināšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Izgatavotā uzlika tiek pārbaudīta mutē. Tiek novērtēts tās piegulums, malas, kontakti un
                    sakodiens. Restaurācija tiek piestiprināta ar zobārstniecības materiāliem, un virsma tiek koriģēta
                    un pulēta.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed mt-6">
                <p>
                  Pēc procedūras dažas dienas var būt jūtama neliela zoba jutība pret spiedienu, aukstumu vai
                  karstumu. Ja sajūtas pastiprinās, nepāriet vai uzlika traucē sakost, ir jāvēršas pie ārsta,
                  lai pārbaudītu piegulumu un sakodienu.
                </p>
                <p>
                  Zobs ar uzliku ir jātīra divas reizes dienā, jārūpējas par starpzobu telpām un regulāri jāpārbauda
                  restaurācijas stāvoklis. Ja pacients griež zobus, var tikt ieteikta aizsargkapa.
                </p>
                <p>
                  Zobu uzliku cena ir atkarīga no materiāla, restaurācijas lieluma, zoba sagatavošanas un papildu
                  ārstēšanas. Precīza cena tiek noteikta, izvērtējot konkrēto klīnisko situāciju.
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
                  Izvēloties zoba atjaunošanu ar uzliku, svarīgs ir ne tikai restaurācijas materiāls, bet arī precīza
                  diagnostika, zoba sagatavošana un sakodiena novērtējums. Bangų zobārstniecības klīnikā katrs gadījums
                  tiek plānots individuāli, cenšoties izvēlēties bojājuma apjomam piemērotu un dabiskos audus
                  saudzējošu risinājumu.
                </p>
                <p>
                  Mūsu speciālisti novērtē atlikušo zoba sieniņu izturību, košļāšanas slodzi un ārstēšanas
                  alternatīvas. Pacientam tiek izskaidrotas zobu inleju, uzliku, plombu un kronīšu atšķirības, procedūras
                  gaita un restaurācijas kopšana.
                </p>
                <p>
                  Uzmanība tiek pievērsta precīzai uzlikas pielāgošanai, drošām malām, kontaktiem ar blakus zobiem
                  un ērtam sakodienam. Tāpēc tiem, kas meklē profesionāli veiktu zobu atjaunošanu ar uzlikām
                  Klaipēdā, Bangų zobārstniecības klīnika ir uzticama izvēle.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties zobu uzliku konsultācijai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja Jums ir stipri bojāts zobs, kuram vienkāršas plombas vairs nepietiek, aicinām pierakstīties
                  konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts zoba stāvoklis un apspriestas
                  iespējamās atjaunošanas alternatīvas.
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
