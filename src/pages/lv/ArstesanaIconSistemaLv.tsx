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
  { id: 'kas-yra', label: 'Kas ir ārstēšana ar „ICON" sistēmu?' },
  { id: 'kada-rekomenduojamas', label: 'Kad ārstēšana ir ieteicama?' },
  { id: 'privalumai', label: 'Priekšrocības un ierobežojumi' },
  { id: 'procesas', label: 'Kā tiek veikta ārstēšana?' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function ArstesanaIconSistemaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/arstesana-icon-sistema/#service`,
    "name": "Ārstēšana ar „ICON\" sistēmu Klaipēdā",
    "serviceType": "Ārstēšana ar „ICON\" sistēmu",
    "description": "Mikroinvazīva zobu emaljas bojājumu ārstēšana ar „ICON\" sistēmu Bangų zobārstniecības klīnikā Klaipēdā.",
    "url": `${SITE_URL}/lv/pakalpojumi/arstesana-icon-sistema/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        title="Ārstēšana ar „ICON&quot; sistēmu Klaipēdā - Bangų klīnika"
        description="Ārstēšana ar „ICON&quot; sistēmu Klaipēdā – mikroinvazīva agrīnā kariesa un balto emaljas plankumu ārstēšana bez urbšanas. Cena no 80€.⏩Pierakstieties Bangų klīnikā."
        keywords="icon sistēma, kariesa ārstēšana bez urbšanas, emaljas infiltrācija, balti plankumi, klaipēda"
        lang="lv"
        canonical={`${SITE_URL}/lv/pakalpojumi/arstesana-icon-sistema`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/gydymas-icon-sistema` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/arstesana-icon-sistema` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/gydymas-icon-sistema` },
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
              Ārstēšana ar „ICON" sistēmu Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Ārstēšana ar „ICON" sistēmu ir mikroinvazīva zobu emaljas bojājumu ārstēšanas metode, ko izmanto
                  agrīnā, dobumu vēl neizveidojušā kariesa un noteiktu balto emaljas plankumu korekcijai.
                  Procedūras laikā porainajā emaljas struktūrā tiek ievadīts šķidrs infiltrācijas materiāls, kas aizpilda
                  mikroporas un apgrūtina skābju iekļūšanu bojātajos audos.
                </p>
                <p className="mb-4">
                  Atbilstoši izvēlētos gadījumos ārstēšana tiek veikta bez zoba urbšanas un bez plombas dobuma
                  veidošanas. Tādējādi tiek saglabāti neskartie zoba audi un agrīnais bojājums tiek ārstēts vēl pirms
                  lielāka defekta izveidošanās.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā ārstēšana ar „ICON" sistēmu tiek plānota individuāli,
                  izvērtējot emaljas izmaiņu izcelsmi, dziļumu, aktivitāti un virsmas viengabalainību. Šī metode
                  nav piemērota visiem kariesa bojājumiem vai zobu krāsas izmaiņām, tāpēc pirms procedūras svarīga
                  precīza diagnostika.
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
                      Ārstēšanas ar „ICON" sistēmu cenas
                    </h2>
                    <p className="text-slate-600">
                      „ICON" sistēmas cena tiek noteikta individuāli, ņemot vērā ārstēšanas apjomu un papildu
                      diagnostikas nepieciešamību.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Ārstēšana ar „ICON" sistēmu</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['1 zobs', 'no 80 €'],
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
                  Precīza ārstēšanas ar „ICON" sistēmu cena Klaipēdā tiek apspriesta individuālas konsultācijas laikā,
                  ņemot vērā konkrēto klīnisko situāciju.
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
                    Aicinām pieteikties konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja Jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pieteikties
                    konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā izvērtēsim Jūsu mutes dobuma stāvokli,
                    atbildēsim uz interesējošajiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs cenšamies, lai katrs pacients justos droši – no pirmās
                    konsultācijas līdz galīgajam rezultātam. Piesakieties un speriet pirmo soli uz veselīga smaida pusi.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts detalizēts klīniskais izvērtējums',
                        'tiek apspriestas iespējamās ārstēšanas metodes',
                        'tiek paskaidroti procedūras posmi un termiņi',
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
                <div className="relative lg:aspect-[4/5] bg-sky-50 min-h-[300px]">                  <img
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir ārstēšana ar „ICON" sistēmu?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  „ICON" sistēma zobārstniecībā tiek izmantota zoba emaljas infiltrācijai. Procedūras laikā tiek sagatavota
                  bojātās emaljas virsma, un tās mikroporās tiek ievadīts zemas viskozitātes sveķu materiāls. Tas iekļūst
                  porainajos audos un tiek sacietināts ar zobārstniecības lampu.
                </p>
                <p>
                  Šo metodi var izmantot divos galvenajos virzienos. Pirmais – agrīnu, nekavitatīvu kariesa bojājumu
                  ārstēšana, īpaši starpzobu zonās. Otrais – noteiktu balto emaljas plankumu estētiskā korekcija
                  priekšējo zobu virsmās.
                </p>
                <p>
                  Balti plankumi kļūst pamanāmi tāpēc, ka bojātās emaljas optiskās īpašības atšķiras no veseliem audiem.
                  Infiltrācijas materiālam aizpildot emaljas mikroporas, plankumu kontrasts var samazināties, tāpēc zoba
                  virsma izskatās vienmērīgāka.
                </p>
                <p>
                  Ārstēšana ar „ICON" sistēmu nav zobu balināšana un nav tradicionālā plombēšana. Procedūras laikā netiek
                  mainīts visu zobu kopējais tonis, bet tiek ārstēta konkrēta bojātā emaljas zona.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REKOMENDUOJAMAS */}
          <motion.section id="kada-rekomenduojamas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad ir ieteicama ārstēšana ar „ICON" sistēmu?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                „ICON" sistēmu zobiem var ieteikt tad, kad emaljas virsma vēl nav sabrukusi un nav izveidojies skaidrs
                kariesa dobums. Ārsts izvērtē bojājuma vietu, dziļumu un aktivitāti, kā arī nosaka, vai infiltrācijas
                materiāls varēs sasniegt poraino emaljas zonu.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Ārstēšanu var apsvērt, kad:</h3>

                <div className="grid gap-3">
                  {[
                    'tiek konstatēts sākotnējs, dobumu neizveidojis kariess',
                    'bojājums atrodas starpzobu zonā',
                    'uz priekšējiem zobiem redzami balti demineralizācijas plankumi',
                    'balti plankumi radušies ap breketēm vai pēc ortodontiskās ārstēšanas',
                    'tiek meklēts veids, kā izvairīties no agrīnas zoba urbšanas',
                    'emaljas izmaiņu struktūra ir piemērota infiltrācijai'
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
                  Starpzobu kariesa konstatēšanai var būt nepieciešams radioloģisks izmeklējums, jo šādu bojājumu ne
                  vienmēr var pamanīt klīniskās apskates laikā. Ja virsma jau ir iekritusi, izveidojies dobums vai
                  bojājums izplatījies dziļāk, visbiežāk nepieciešama plombēšana vai cita ārstēšanas metode.
                </p>
                <p>
                  Ne katrs balts, dzeltenīgs vai brūngans plankums ir piemērots „ICON" infiltrācijai. Emaljas krāsas
                  izmaiņas var būt saistītas ar demineralizāciju, fluorozi, traumu vai attīstības traucējumiem, tāpēc
                  vispirms svarīgi noteikt to izcelsmi.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIVALUMAI */}
          <motion.section id="privalumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādas ir ārstēšanas ar „ICON" sistēmu priekšrocības un ierobežojumi?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Viena no būtiskākajām šīs metodes priekšrocībām ir iespēja piemērotos gadījumos ārstēt bojājumu bez
                  urbšanas un saglabāt veselos zoba audus. Tā kā nav jāveido dobums plombai, ārstēšana ir saudzīga un
                  parasti labi panesama.
                </p>
                <p>
                  Infiltrācijas materiāls aizpilda emaljas mikroporas un palīdz stabilizēt agrīno kariesa bojājumu.
                  Tomēr procedūra nenovērš vispārējos kariesa riska faktorus, tāpēc pēc ārstēšanas joprojām ir svarīga
                  ikdienas mutes higiēna, starpzobu kopšana un profilaktiskās apskates.
                </p>
                <p>
                  Estētiskās korekcijas laikā balti emaljas plankumi var kļūt mazāk pamanāmi. Galīgais rezultāts ir
                  atkarīgs no to izcelsmes, dziļuma, krāsas un emaljas virsmas stāvokļa. Ne visos gadījumos plankums
                  pilnībā izzūd, un dziļākām izmaiņām var būt nepieciešama papildu vai cita ārstēšana.
                </p>
                <p>
                  „ICON" sistēma nav paredzēta lielu kariesa dobumu, stipri sabrukušu zoba audu vai mehānisku plaisu
                  ārstēšanai. Piemērotība procedūrai tiek noteikta tikai pēc individuāla zobu stāvokļa izvērtējuma.
                </p>
                <p>
                  Regulāras profilaktiskās pārbaudes palīdz sekot līdzi infiltrētās zonas stāvoklim, laikus pamanīt
                  jaunas emaljas izmaiņas un vajadzības gadījumā koriģēt individuālo mutes kopšanas un kariesa kontroles
                  plānu, ņemot vērā pacienta riska faktorus un paradumus.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā klīnikā tiek veikta ārstēšana ar „ICON" sistēmu?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Ārstēšana ar „ICON" sistēmu Bangų zobārstniecības klīnikā tiek veikta vairākos secīgos posmos.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zobu stāvokļa izvērtēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek veikta klīniskā apskate un, ja nepieciešams, radioloģisks izmeklējums. Tiek izvērtēts bojājuma
                    dziļums, virsmas viengabalainība un iespējamās ārstēšanas alternatīvas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ārstējamās vietas sagatavošana un izolēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zoba virsma tiek notīrīta, un ārstējamā zona tiek izolēta no siekalām un mitruma. Tam var tikt
                    izmantots koferdams vai citi izolācijas līdzekļi.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Emaljas virsmas sagatavošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Uz ārstējamās vietas tiek uzklāts speciāls materiāls, kas palīdz atvērt poraino bojātās emaljas
                    struktūru. Virsma tiek noskalota un rūpīgi izžāvēta.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Infiltrācijas materiāla ievadīšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Uz sagatavotās virsmas tiek uzklāts zemas viskozitātes infiltrants. Materiālam tiek ļauts iekļūt
                    emaljas mikroporās, un tā pārpalikums tiek noņemts.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Materiāla sacietināšana un rezultāta izvērtēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Infiltrācijas materiāls tiek sacietināts ar zobārstniecības lampu. Vajadzības gadījumā aplikācija
                    tiek atkārtota, un procedūras beigās zoba virsma tiek nopulēta un tiek izvērtēts rezultāts.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed mt-6">
                <p>
                  Tā kā visbiežāk nav nepieciešams urbt zoba audus, vietējā anestēzija parasti nav nepieciešama. Pacients
                  var sajust izolācijas līdzekļu vai starpzobu atdalīšanas spiedienu, taču procedūra parasti nerada
                  asas sāpes.
                </p>
                <p>
                  Procedūras ilgums ir atkarīgs no ārstējamo zobu skaita, bojājumu vietas un sagatavošanas
                  nepieciešamības. „ICON" sistēmas cena arī tiek noteikta individuāli, ņemot vērā ārstēšanas apjomu un
                  papildu diagnostikas nepieciešamību.
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
                  Izvēloties ārstēšanu ar „ICON" sistēmu, svarīga ir ne tikai izmantotā materiāla kvalitāte, bet arī
                  precīza diagnostika, pareizs indikāciju izvērtējums un secīga procedūras izpilde. Bangų zobārstniecības
                  klīnikā ārstēšana tiek plānota individuāli, cenšoties izmantot saudzīgo metodi tikai tad, kad tā
                  konkrētajā gadījumā ir piemērota.
                </p>
                <p>
                  Mūsu speciālisti izvērtē kariesa bojājuma aktivitāti, emaljas virsmas stāvokli, plankuma izcelsmi un
                  pacienta gaidas. Pirms procedūras tiek paskaidrota ārstēšanas gaita, iespējamās alternatīvas un
                  gaidāmā rezultāta robežas.
                </p>
                <p>
                  Uzmanība tiek pievērsta pareizai ārstējamās zonas izolēšanai, rūpīgai emaljas sagatavošanai un
                  infiltrācijas materiāla ievadīšanai. Tāpēc tiem, kas meklē profesionālu ārstēšanu ar „ICON" sistēmu
                  Klaipēdā, Bangų zobārstniecības klīnika ir uzticama izvēle.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pieteikties ārstēšanai ar „ICON" sistēmu Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja esat pamanījuši baltus emaljas plankumus vai Jūsu zobārsts aizdomājas par agrīnu kariesa bojājumu,
                  aicinām pieteikties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks izvērtēts Jūsu
                  zobu stāvoklis un apspriestas iespējamās ārstēšanas alternatīvas.
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
