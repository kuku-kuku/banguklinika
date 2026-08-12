import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { TableOfContents } from '../../components/TableOfContents'
import { useRef } from 'react'
import ReviewsCarousel from '../../components/ReviewsCarousel'
import { SITE_URL } from '../../i18n/lv'

// Animāciju iestatījumi
const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

// UI helpers
const sectionWrap = 'mb-12 scroll-mt-36 2xl:scroll-mt-24'
const whiteCard = 'bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft'
const innerCard = 'bg-white p-5 rounded-xl border border-slate-200 shadow-sm'

// Cenu dizaina žetoni
const P  = '#002045'
const S  = '#006b5f'
const SL = '#ecf5fb'

// Ikonas
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const tocSections = [
  { id: 'kainos', label: 'Cenas' },
  { id: 'kas-yra', label: 'Kas ir sinusa pacelšana?' },
  { id: 'priezastis', label: 'Kāpēc var būt nepieciešama?' },
  { id: 'kada', label: 'Kad tiek veikta?' },
  { id: 'budai', label: 'Procedūras veidi' },
  { id: 'procesas', label: 'Kā notiek procedūra?' },
  { id: 'gijimas', label: 'Dzīšana un ieteikumi' },
  { id: 'duk', label: 'Biežāk uzdotie jautājumi' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function SinusaPacelsanaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/lv/pakalpojumi/sinusa-pacelsana/#service",
    "name": "Sinusa pacelšana Klaipēdā",
    "serviceType": "Sinusa pacelšana",
    "description": "Sinusa pacelšanas pakalpojums tiek sniegts Bangų zobārstniecības klīnikā Klaipēdā. Klīnikā tiek veikta augšžokļa kaula augmentācija pacientiem Klaipēdas pilsētā.",
    "url": "https://www.banguklinika.lt/lv/pakalpojumi/sinusa-pacelsana/",
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Sinusa pacelšana Klaipēdā - Bangų klīnika"
        description="Sinusa pacelšanu Klaipēdā veicam profesionāli☑️droši☑️uzticami☑️Cena no 200€, piemērota sagatavošana implantācijai.⏩Piesakieties konsultācijai jau tagad."
        keywords="sinusa pacelšana, sinusa lifts, kaula augmentācija, sagatavošana implantācijai, klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/sinusa-pacelsana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/sinuso-pakelimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/sinusa-pacelsana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/sinuso-pakelimas` },
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
              Sinusa pacelšana Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zobu implantācija augšžokļa dzerokļu un priekšdzerokļu zobu zonā dažkārt prasa papildu
                  sagatavošanos. Viens no biežākajiem iemesliem ir nepietiekams kaula augstums starp mutes
                  dobumu un augšžokļa sinusu. Šādā gadījumā implantam var trūkt stabila atbalsta, tāpēc
                  pirms implantācijas vai tās laikā var tikt veikta sinusa pacelšana.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā sinusa pacelšanas nepieciešamība tiek novērtēta
                  individuāli, balstoties uz pacienta mutes stāvokli, 3D izmeklējuma datiem, plānoto implantu
                  novietojumu un kopējo zobu atjaunošanas plānu. Mērķis ir droši izveidot pietiekamu kaula
                  augstumu implantam un radīt apstākļus ilglaicīgai, funkcionālai zobu atjaunošanai.
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
            <motion.section id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Sinusa pacelšanas cenas
                    </h2>
                    <p className="text-slate-600">
                      Sinusa pacelšanas cena ir atkarīga no izvēlētās metodes, trūkstošā kaula daudzuma un augšžokļa sinusa stāvokļa. Pirms procedūras veikšanas vienmēr tiek veikta detalizēta apskate un diagnostika, kuras laikā tiek izvēlēts vispiemērotākais un drošākais procedūras veids.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Sinusa pacelšana</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Slēgtā veidā', 'no 200 €'],
                        ['Atvērtā veidā', 'no 700 €'],
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
                  Precīza sinusa pacelšanas cena Klaipēdā tiek apspriesta individuālas konsultācijas laikā, ņemot vērā konkrēto klīnisko situāciju. Caurskatāma cenu politika un profesionāla pieeja ļauj pacientiem justies droši un pieņemt informētu lēmumu.
                </p>
              </div>
            </motion.section>
          </motion.header>

          {/* ═══════════════════════════════════════════════════════════════
              DOCTOR CTA
          ══════════════════════════════════════════════════════════════════ */}
          <motion.div className="mt-8 mb-12" variants={item}>
            <div className="bg-white rounded-[28px] border border-sky-200 shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[5fr_4fr] gap-0 items-stretch">
                {/* Left: content */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-700 mb-4">
                    Aicinām pierakstīties konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja Jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā novērtēsim Jūsu mutes stāvokli, atbildēsim uz interesējošajiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs cenšamies, lai katrs pacients justos droši — no pirmās konsultācijas līdz galīgajam rezultātam. Piesakieties un speriet pirmo soli pretī veselam smaidam.
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
                {/* Right: doctor photo */}
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

          {/* ═══════════════════════════════════════════════════════════════
              REVIEWS
          ══════════════════════════════════════════════════════════════════ */}
          <motion.div className="mb-10 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          {/* KAS IR SINUSA PACELŠANA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir sinusa pacelšana?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Sinusa pacelšana ir ķirurģiska kaula palielināšanas procedūra, kas tiek veikta augšžokļa
                  sānu zobu zonā. Tās laikā uzmanīgi tiek pacelta augšžokļa sinusa gļotāda, bet zem tās
                  izveidotais dobums tiek aizpildīts ar kaula aizvietotāja materiālu. Tādējādi tiek izveidots
                  papildu kaula augstums, kas nepieciešams drošai zobu implantu ieskrūvēšanai.
                </p>
                <p>
                  Augšžokļa sinusi ir augšžokļa zonā esošie dobumi, kas savienoti ar deguna dobumu.
                  Kad augšējie dzerokļi vai priekšdzerokļi tiek zaudēti, zem sinusa esošais kauls laika gaitā
                  var samazināties. Rezultātā attālums starp mutes dobumu un sinusa pamatni kļūst pārāk mazs implantam.
                </p>
                <p>
                  Sinusa pacelšana nav nepieciešama visiem pacientiem. Tā tiek veikta tikai tajos gadījumos, kad
                  diagnostika parāda, ka dabiskā kaula augstums nav pietiekams, lai implantu stabili nostiprinātu.
                  Kad kaula pietiek, implantāciju var veikt bez papildu sinusa pamatnes pacelšanas.
                </p>
                <p>
                  Šī procedūra ir viens no kaula augmentācijas veidiem. Tā palīdz sagatavoties implantācijai
                  augšžoklī, kad anatomisko īpatnību, zobu zaudēšanas vai kaula atrofijas dēļ implantam
                  trūkst piemērota atbalsta.
                </p>
              </div>
            </div>
          </motion.section>

          {/* IEMESLS */}
          <motion.section id="priezastis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kāpēc pirms implantācijas var būt nepieciešama sinusa pacelšana?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Galvenais iemesls, kāpēc pirms implantācijas var būt nepieciešama sinusa pacelšana, ir
                  nepietiekams augšžokļa kaula augstums. Implants jāieskrūvē kaulā tā, lai tas būtu stabils
                  un spētu izturēt košļāšanas slodzi. Ja kaula ir par maz, implanta ieskrūvēšana var būt
                  nedroša vai neiespējama bez papildu sagatavošanas.
                </p>
                <p>
                  Kaula augstums augšžokļa sānu zonā bieži samazinās pēc zobu zaudēšanas. Kad zobs tiek
                  izņemts un tā vieta ilgu laiku netiek atjaunota, kauls vairs nesaņem parasto košļāšanas
                  slodzi, tāpēc sāk atrofēties. Tajā pašā laikā sinuss var būt tuvu nākamajai implantācijas
                  vietai vai laika gaitā vēl vairāk pietuvoties žokļa grēdai.
                </p>
                <p>
                  Sinusa pacelšana var būt nepieciešama arī individuālās anatomijas dēļ. Dažiem pacientiem
                  augšžokļa sinusi dabiski ir lielāki vai to pamatne ir zemāk, tāpēc pat pavisam nesen pēc
                  zoba zaudēšanas implantācijai var pietrūkt kaula augstuma.
                </p>
                <p>
                  Papildu sagatavošana var būt nepieciešama arī pēc sarežģītas zoba ekstrakcijas, iekaisumiem,
                  infekcijām vai ilgstošas izņemamu protēžu nēsāšanas. Šādos gadījumos kauls var būt zaudējis
                  daļu apjoma, tāpēc implantācija jāplāno uzmanīgi.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAD TIEK VEIKTA */}
          <motion.section id="kada" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad tiek veikta sinusa pacelšana?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Sinusa pacelšana var tikt ieteikta tad, kad plānota zobu implantācija augšžokļa dzerokļu
                  vai priekšdzerokļu zobu zonā, bet 3D izmeklējums rāda, ka kaula augstuma implantam nepietiek.
                  Tas visbiežāk tiek konstatēts konsultācijas un radioloģiskā izmeklējuma laikā.
                </p>
                <p>
                  Procedūra var būt nepieciešama, kad ilgu laiku trūkst viena vai vairāku augšējo sānu zobu.
                  Jo ilgāk zobs nav atjaunots, jo lielāka iespēja, ka kauls šajā vietā būs samazinājies.
                  Tāpēc vēlāk plānotā implantācija var prasīt papildu kaula palielināšanu.
                </p>
                <p>
                  Sinusa pacelšana var tikt veikta arī tad, kad pacients vēlas atjaunot augšējos dzerokļus
                  ar implantiem, bet augšžokļa sinuss ir tuvu nākamā implanta vietai. Šādā gadījumā procedūra
                  ļauj izveidot vairāk kaula augstuma un droši saplānot implantu.
                </p>
                <p>
                  Dažreiz sinusa pamatnes pacelšana ir nepieciešama pēc sarežģītas zoba ekstrakcijas, kad
                  pēc zoba izņemšanas paliek maz kaula vai dzīšanas laikā tā apjoms samazinās. Šādos gadījumos
                  ārsts novērtē, vai implantāciju var veikt uzreiz, vai vispirms nepieciešams sagatavošanās posms.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCEDŪRAS VEIDI */}
          <motion.section id="budai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādi ir sinusa pacelšanas veidi?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Sinusa pacelšanas veids tiek izvēlēts atkarībā no tā, cik kaula trūkst, cik implantu tiek
                plānots ieskrūvēt un vai implantāciju var veikt tās pašas procedūras laikā. Visbiežāk tiek
                pielietotas divas galvenās metodes — slēgtā un atvērtā sinusa pacelšana.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Slēgtā sinusa pacelšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Slēgtā sinusa pacelšana visbiežāk tiek pielietota tad, kad kaula trūkums nav liels. Procedūra
                    tiek veikta caur implantam sagatavoto vietu, tāpēc tā parasti ir mazāk invazīva nekā atvērtā
                    metode. Šo veidu bieži var veikt kopā ar implantāciju, ja esošā kaula pietiek implanta
                    sākotnējai stabilitātei. Procedūras laikā sinusa pamatne tiek maigi pacelta, un izveidotā
                    vieta tiek aizpildīta ar kaula aizvietotāja materiālu.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Atvērtā sinusa pacelšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atvērtā sinusa pacelšana tiek pielietota tad, kad kaula augstuma trūkst vairāk un nepieciešama
                    lielāka apjoma kaula atjaunošana. Šādā gadījumā ārsts izveido nelielu piekļuvi augšžokļa
                    sānu sieniņā, uzmanīgi paceļ sinusa gļotādu un zem tās ievieto kaula aizvietotāja materiālu.
                    Šī metode ļauj atjaunot lielāku kaula apjomu, tomēr visbiežāk prasa ilgāku dzīšanas periodu.
                    Dažos gadījumos implantus var ieskrūvēt tās pašas procedūras laikā, tomēr, ja kaula trūkums
                    ir liels, implantācija visbiežāk tiek plānota pēc dažiem mēnešiem.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Sinusa pacelšana kopā ar implantāciju</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kad situācija to atļauj, sinusa pacelšanu var veikt tajā pašā laikā kā implantāciju.
                    Šāds risinājums var saīsināt kopējo ārstēšanas laiku, tomēr tas ir piemērots ne visiem
                    pacientiem. Galvenais nosacījums ir pietiekama implanta sākotnējā stabilitāte.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Sinusa pacelšana kā atsevišķs posms</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ja kaula trūkums ir lielāks, vispirms tiek veikta sinusa pacelšana, kauls tiek atstāts sadzīt,
                    bet implantācija tiek plānota vēlāk. Šāda posmveida ārstēšana var aizņemt vairāk laika, tomēr
                    dažos gadījumos tā ir drošāka un vairāk prognozējama.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROCESS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek veikta sinusa pacelšanas procedūra?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Sinusa pacelšanas procedūra tiek plānota pa posmiem, jo precīza sagatavošanās palīdz droši
                novērtēt kaula daudzumu, sinusa novietojumu un nākamās implantācijas iespējas.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultācija un sākotnējais novērtējums</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ārsts novērtē pacienta mutes stāvokli, trūkstošo zobu vietu, smaganu un kaula stāvokli,
                    kā arī apspriež pacienta vēlmes attiecībā uz zobu atjaunošanu ar implantiem. Šajā posmā
                    ir svarīgi saprast, vai sinusa pacelšana vispār var būt nepieciešama.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">3D izmeklējums un sinusa anatomijas novērtējums</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek veikts 3D rentgena izmeklējums vai datortomogrāfija. Šis izmeklējums ļauj precīzi
                    novērtēt kaula augstumu, sinusa pamatnes novietojumu, sinusa anatomiju un nākamo implantu
                    plānošanas iespējas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Individuāla ārstēšanas plāna sastādīšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pēc diagnostikas datiem tiek sastādīts ārstēšanas plāns. Pacientam tiek izskaidrots, vai
                    nepieciešama slēgtā vai atvērtā sinusa pacelšana, vai procedūru var veikt kopā ar implantāciju,
                    cik var ilgt dzīšana un kādi būs turpmākie ārstēšanas posmi.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Vietējā anestēzija</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pati procedūra tiek veikta, izmantojot vietējo anestēziju, tāpēc tās laikā pacientam nevajadzētu
                    just sāpes. Ja nepieciešams, ārsts papildus izskaidro, kādas sajūtas var sagaidīt procedūras
                    laikā un pēc tās.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Sinusa gļotādas pacelšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atkarībā no izvēlētās metodes ārsts sasniedz sinusa pamatni caur implantam sagatavoto vietu
                    vai caur nelielu piekļuvi augšžokļa sānu sieniņā. Tad sinusa gļotāda tiek uzmanīgi pacelta,
                    lai izveidotu vietu kaula aizvietotājam.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">06</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Kaula aizvietotāja pielietošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zem paceltās sinusa gļotādas tiek ievietots izvēlētais kaula aizvietotāja materiāls.
                    Ja nepieciešams, tiek izmantota īpaša membrāna, kas palīdz aizsargāt palielināmo zonu un
                    radīt labākus apstākļus dzīšanai.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">07</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Brūces sašūšana un sākotnējie ieteikumi</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pēc procedūras audi tiek sašūti, un pacientam tiek sniegti skaidri ieteikumi par dzīšanu.
                    Pirmajās dienās var būt pietūkums, sāpīgums, jutīgums, neliela asiņošana no deguna vai
                    zilumi — parasti tā ir normāla reakcija, tomēr, simptomiem pastiprinoties, ir jāvēršas
                    pie ārsta.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">08</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dzīšanas kontrole un implantācijas plānošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dzīšanas ilgums ir atkarīgs no procedūras apjoma, pacienta veselības un izvēlētā ārstēšanas
                    plāna. Kad implants tiek ieskrūvēts tās pašas procedūras laikā, turpmākā ārstēšana tiek plānota
                    atbilstoši implanta dzīšanai. Ja implantācija tiek atlikta, tā visbiežāk tiek plānota tikai
                    tad, kad palielinātais kauls ir pietiekami sadzijis.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* DZĪŠANA UN IETEIKUMI */}
          <motion.section id="gijimas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Aprūpe pēc sinusa pacelšanas</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Pēc sinusa pacelšanas īpaši svarīgi ir sargāt operēto zonu no straujām spiediena izmaiņām.
                Dzīšanas periodā visbiežāk ieteicams stipri nepūst degunu, šķaudīt ar atvērtu muti un izvairīties
                no šādām darbībām:
              </p>

              <div className="space-y-3">
                {[
                  'niršanas',
                  'lidojumiem ar lidmašīnu',
                  'pirts un tvaika procedūrām',
                  'intensīva sporta un fiziskās slodzes',
                  'smēķēšanas',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    <span className="text-slate-700">{text}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Tāpat ir svarīgi lietot nozīmētos medikamentus, ievērot uztura un mutes higiēnas ieteikumus un
                ierasties uz kontroles vizītēm. Šo ieteikumu ievērošana palīdz izvairīties no spiediena izmaiņām,
                kas var kaitēt operētajai zonai, un nodrošina raitu un drošu dzīšanas procesu.
              </p>
            </div>
          </motion.section>

          {/* BUJ */}
          <motion.section id="duk" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Biežāk uzdotie jautājumi par sinusa pacelšanu</h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai sinusa pacelšana ir sāpīga?</h3>
                  <p className="text-slate-600 text-sm">Procedūra tiek veikta, izmantojot vietējo anestēziju, tāpēc tās laikā sāpes nevajadzētu just. Pēc procedūras var būt jūtams sāpīgums, pietūkums vai jutīgums. Šīs sajūtas visbiežāk tiek kontrolētas ar ārsta nozīmētajiem medikamentiem un piemērotu pēcoperācijas aprūpi.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Cik ilgi notiek dzīšana pēc sinusa pacelšanas?</h3>
                  <p className="text-slate-600 text-sm">Dzīšanas ilgums ir atkarīgs no tā, vai tika veikta slēgtā vai atvērtā sinusa pacelšana, cik kaula bija jāatjauno un vai implants tika ieskrūvēts tās pašas procedūras laikā. Dažos gadījumos pietiek ar īsāku dzīšanas periodu, citos implantācija tiek plānota pēc dažiem mēnešiem.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Vai sinusa pacelšanu var veikt kopā ar implantāciju?</h3>
                  <p className="text-slate-600 text-sm">Jā, dažos gadījumos sinusa pacelšanu var veikt kopā ar implantāciju. Tas ir iespējams tad, kad esošā kaula pietiek, lai implants tiktu stabili nostiprināts. Ja kaula trūkums ir lielāks, drošāk vispirms veikt sinusa pacelšanu un implantāciju plānot pēc dzīšanas.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ko nedrīkst darīt pēc sinusa pacelšanas operācijas?</h3>
                  <p className="text-slate-600 text-sm">Pēc sinusa pacelšanas ir svarīgi ievērot ārsta ieteikumus. Visbiežāk kādu laiku ieteicams izvairīties no intensīvas fiziskās slodzes, smēķēšanas, pirts, karstām vannām, niršanas un stipras deguna pūšanas. Šķaudīt vajadzētu ar atvērtu muti, lai sinusa zonā neveidotos pārāk liels spiediens.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">No kā ir atkarīga sinusa pacelšanas cena?</h3>
                  <p className="text-slate-600 text-sm">Sinusa pacelšanas cena ir atkarīga no procedūras veida, kaula trūkuma apjoma, izmantotajiem materiāliem, ķirurģiskās sarežģītības un tā, vai procedūra tiek veikta kopā ar implantāciju. Precīzā cena tiek noteikta konsultācijas laikā, pēc diagnostikas veikšanas un individuāla ārstēšanas plāna sastādīšanas.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Kādas ir iespējamās sinusa pacelšanas komplikācijas un kā samazināt to risku?</h3>
                  <p className="text-slate-600 text-sm">Tāpat kā pēc jebkuras ķirurģiskas procedūras, iespējamās sinusa pacelšanas komplikācijas var būt infekcija, ieilgusi pietūkums, asiņošana, sāpes, sinusa gļotādas bojājums vai lēnāka kaula dzīšana. Risku samazina precīza 3D diagnostika, individuāla procedūras plānošana, piemērota ķirurģiskā tehnika un pacienta pēcoperācijas ieteikumu ievērošana.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC IZVĒLĒTIES */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties sinusa pacelšanu, ir svarīga ne tikai pati ķirurģiskā procedūra, bet arī viss
                  sagatavošanās process implantācijai — no precīzas diagnostikas līdz dzīšanas kontrolei un
                  turpmākajam zobu atjaunošanas plānam. Bangų zobārstniecības klīnikā Klaipēdā katra situācija
                  tiek vērtēta individuāli, novērtējot pacienta kaula augstumu, sinusa novietojumu, smaganu
                  stāvokli un nākamo implantu vietu.
                </p>
                <p>
                  Klīnikā liela uzmanība tiek pievērsta individuālai plānošanai. Pirms ārstēšanas uzsākšanas
                  tiek veikta detalizēta diagnostika, kas palīdz precīzi noteikt, vai sinusa pacelšana ir
                  nepieciešama, kāda metode ir vispiemērotākā un vai implantāciju var veikt tās pašas procedūras
                  laikā. Šāda pieeja ļauj pacientam skaidri saprast ārstēšanas gaitu, iespējamos posmus un
                  pieņemt informētu lēmumu.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā pacientam tiek skaidri izskaidrots, kā notiek procedūra, ko
                  sagaidīt pēc tās un kādi ieteikumi jāievēro dzīšanas periodā. Konsekventa plānošana, skaidra
                  komunikācija un atbildīga aprūpe palīdz radīt labākus apstākļus raitai dzīšanai un turpmākajai
                  zobu atjaunošanai ar implantiem.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties sinusa pacelšanai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja plānojat zobu implantāciju un Jums nepieciešama sinusa pacelšana, aicinām pierakstīties konsultācijai
                  Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts Jūsu žokļa kaula stāvoklis un saplānots
                  vispiemērotākais procedūras veids.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā mēs cenšamies, lai sinusa pacelšana un turpmākā implantācija būtu skaidra, kontrolējama un
                  pēc iespējas mazāk stresu radoša. Šeit Jūs sagaida pieredzējuši speciālisti, moderns aprīkojums un rūpīga pieeja
                  katram pacientam.
                </p>
                <p>
                  Piesakieties konsultācijai un speriet pirmo soli pretī veiksmīgai implantācijai.
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
