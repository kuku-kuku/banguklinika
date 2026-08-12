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
  { id: 'kas-yra', label: 'Kas ir bērnu mutes higiēna?' },
  { id: 'daznis', label: 'Kad tā ir nepieciešama?' },
  { id: 'paslaugos', label: 'Kā notiek procedūra?' },
  { id: 'saugumas', label: 'Vai bērniem droša?' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function BernuMutesHigienaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/lv/pakalpojumi/bernu-mutes-higiena/#service",
    "name": "Bērnu mutes higiēna Klaipēdā",
    "serviceType": "Bērnu mutes higiēna",
    "description": "Bērnu mutes higiēnas pakalpojums tiek sniegts Bangų zobārstniecības klīnikā Klaipēdā. Profesionāla, droša un nesāpīga bērnu zobu aprūpe.",
    "url": "https://www.banguklinika.lt/lv/pakalpojumi/bernu-mutes-higiena/",
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Bērnu mutes higiēna Klaipēdā - Bangų klīnika"
        description="Profesionāla bērnu mutes higiēna Klaipēdā☑️droša, nesāpīga un bērna vecumam pielāgota procedūra☑️cena no 70€.⏩Piesakiet savu bērnu jau šodien."
        keywords="bernu mutes higiena, bernu zobarstnieciba, aplikuma nonemsana, fluoresana, klaipeda"
        canonical={`${SITE_URL}/lv/pakalpojumi/bernu-mutes-higiena`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-higiena-vaikams` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/bernu-mutes-higiena` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-higiena-vaikams` },
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
        <TableOfContents sections={tocSections} title="Saturs" rootRef={pageRef} cta={{ label: "Pierakstīties vizītei", to: "/lv/kontakti" }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Bērnu mutes higiēna Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Bērnu zobu aprūpe ir svarīga jau no pirmo zobu izšķilšanās brīža. Lai gan piena zobi ir
                  pagaidu, to stāvoklis tieši ietekmē košļāšanas funkciju, runas attīstību, pastāvīgo zobu
                  aizmetņu veidošanos un visas mutes dobuma veselību. Šī iemesla dēļ ikdienas zobu aprūpe
                  mājās ir jāapvieno ar regulāru profesionālu kontroli zobārstniecības klīnikā.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā bērnu mutes higiēna tiek veikta atbilstoši mūsdienu
                  zobārstniecības principiem, ņemot vērā bērna vecumu, uzvedību un individuālo mutes stāvokli.
                  Procedūras mērķis nav tikai aplikuma noņemšana — tas ir arī agrīns kariesa riska novērtējums,
                  mutes higiēnas paradumu korekcija un bērna adaptācija zobārstniecības aprūpei bez bailēm.
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
                      Bērnu mutes higiēnas cenas
                    </h2>
                    <p className="text-slate-600">
                      Bērnu mutes higiēnas cena ir atkarīga no bērna vecuma, mutes stāvokļa un procedūras apjoma. Pirms procedūras vienmēr tiek novērtēts mutes dobuma stāvoklis un izvēlēts jaunākajam pacientam vispiemērotākais aprūpes plāns.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Bērnu mutes higiēna</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Bērnu mutes higiēna', 'no 70 €'],
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
                  Precīza bērnu mutes higiēnas cena Klaipēdā tiek apspriesta vizītes laikā, ņemot vērā konkrēto klīnisko situāciju. Caurspīdīga cenu noteikšana un individuāla uzmanība ļauj vecākiem justies mierīgi, bet bērniem — droši.
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
                    Bangų zobārstniecības klīnikā mēs tiecamies, lai katrs pacients justos pārliecināti — no pirmās konsultācijas līdz galīgajam rezultātam. Pierakstieties un speriet pirmo soli pretim veselam smaidam.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts detalizēts klīniskais novērtējums',
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
                {/* Right: doctor photo */}
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

          {/* ═══════════════════════════════════════════════════════════════
              REVIEWS
          ══════════════════════════════════════════════════════════════════ */}
          <motion.div className="mb-10 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          {/* KAS IR */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir bērnu mutes higiēna un kāpēc tā ir svarīga?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bērnu mutes higiēna ir profesionāla profilaktiska procedūra, kuras laikā no zobu virsmām
                  tiek noņemts mīkstais aplikums, pigmentētie netīrumi un, ja nepieciešams, sākotnējais
                  zobakmens. Tas ir viens no svarīgākajiem līdzekļiem, lai novērstu bērnu kariesu, gingivītu
                  un agrīnu zoba emaljas bojājumu.
                </p>
                <p>
                  Bērnu mutes higiēna atšķiras no pieaugušajiem, jo bērnu zoba emalja ir plānāka, un aplikums
                  veidojas ātrāk biežāku uzkodu un vēl tikai veidojamu higiēnas prasmju dēļ. Pat gadījumos,
                  kad zobi tiek tīrīti divas reizes dienā, bieži paliek vietas, kuras bērns nesasniedz, īpaši
                  molāro zobu vagās vai pie smaganu malas.
                </p>
                <p>
                  Profesionāla bērnu mutes higiēna Klaipēdā nav tikai tīrīšanas procedūra. Tas ir arī
                  diagnostisks posms, kura laikā tiek novērtēts, vai nav sākotnējā kariesa pazīmju, emaljas
                  demineralizācijas, smaganu iekaisuma vai nepareizu aplikuma uzkrāšanās zonu. Vecākiem tiek
                  sniegtas individuālas rekomendācijas, kā uzlabot ikdienas mutes aprūpi mājās.
                </p>
                <p>
                  Ir svarīgi saprast, ka bērnu mutes higiēna nav paredzēta tikai problēmu gadījumā. Tā ir
                  profilaktiska metode, kas ļauj izvairīties no sarežģītākas ārstēšanas nākotnē un nodrošināt,
                  ka bērna pastāvīgie zobi veidojas veselīgā vidē.
                </p>
              </div>
            </div>
          </motion.section>

          {/* VIZĪTES BIEŽUMS */}
          <motion.section id="daznis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad bērnam ir nepieciešama profesionāla mutes higiēna?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Profesionāla bērnu mutes higiēna tiek rekomendēta no brīža, kad izveidojas pilna piena zobu
                sakodiens, visbiežāk aptuveni 2–3 gadu vecumā, tomēr nepieciešamība tiek vērtēta individuāli.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Visbiežāk šī procedūra ir nepieciešama, kad:</h3>
                <div className="grid gap-3">
                  {[
                    'uz zobiem ir redzams dzeltenīgs, brūngans vai tumšs aplikums',
                    'jūtama slikta elpa, neskatoties uz regulāru tīrīšanu',
                    'smaganas apsārtst vai asiņo, tīrot zobus',
                    'bērnam ir paaugstināts kariesa risks',
                    'tiek nēsāti ortodontiskie aparāti',
                    'zobi ātri „pārklājas“ ar aplikumu, neskatoties uz higiēnu',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1">
                        <CheckIcon />
                      </span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bērnu mutes higiēna kļūst īpaši svarīga arī sakodiena maiņas laikā, kad sāk izšķilties
                  pastāvīgie zobi. Šajā periodā emalja ir jutīgāka, un aplikuma uzkrāšanās var ātri izraisīt
                  sākotnējos kariesa perēkļus.
                </p>
                <p>
                  Ieteicamais biežums ir atkarīgs no individuālās situācijas, tomēr visbiežāk profesionāla
                  bērnu mutes higiēna tiek veikta ik pēc 6–12 mēnešiem, bet lielāka riska gadījumā — biežāk.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KĀ NOTIEK */}
          <motion.section id="paslaugos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek veikta bērnu mutes higiēna klīnikā?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Bērnu mutes higiēna Bangų zobārstniecības klīnikā tiek veikta konsekventi, nodrošinot bērna
                komfortu un emocionālo drošību katrā posmā. Procedūra tiek pielāgota bērna vecumam,
                sadarbībai un aplikuma daudzumam.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Mutes stāvokļa novērtējums</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek veikta zobu un smaganu apskate, tiek novērtēts aplikuma daudzums, emaljas stāvoklis
                    un iespējamie kariesa riska faktori. Ja nepieciešams, tiek izmantoti īpaši indikatori, kas
                    parāda aplikuma uzkrāšanās zonas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Aplikuma noņemšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Maigi tiek noņemts mīkstais un, ja nepieciešams, cietākais aplikums. Bērniem tiek piemērotas
                    drošas, vecumam pielāgotas metodes, izvairoties no jebkāda diskomforta.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zobu pulēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zobu virsmas tiek pulētas ar speciāliem līdzekļiem, lai samazinātu aplikuma uzkrāšanās
                    ātrumu un atjaunotu dabisko emaljas tīrību.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Fluorēšanas un profilakses rekomendācijas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ja nepieciešams, tiek veikta emaljas stiprināšana ar fluora preparātiem. Vecākiem tiek
                    sniegtas individuālas rekomendācijas par zobu pastas izvēli, tīrīšanas tehniku un
                    starpzobu aprūpi.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Paradumu veidošanas konsultācija</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek paskaidrots, kā pareizi rūpēties par bērnu zobiem ikdienā, no kādām kļūdām izvairīties
                    un kā samazināt kariesa risku ilgtermiņā.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* DROŠĪBA */}
          <motion.section id="saugumas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Vai bērnu mutes higiēna ir droša un kā tai sagatavoties?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bērnu mutes higiēna ir pilnīgi droša, nesāpīga un neinvazīva procedūra, ja tā tiek veikta,
                  ievērojot zobārstniecības standartus un pielāgojot metodes bērna vecumam. Visbiežāk bērni
                  nejūt nekādas sāpes, un galvenais izaicinājums ir emocionāla sagatavošanās.
                </p>
                <p>
                  Pirms vizītes ieteicams bērnam vienkārši paskaidrot, ka ārsts apskatīs un notīrīs zobiņus.
                  Izvairoties no biedējošām formulējumiem un pārmērīgas dramatizēšanas, bērna pieredze
                  visbiežāk ir mierīga un pozitīva.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā liela uzmanība tiek pievērsta adaptācijai — procedūra tiek
                  veikta bez steigas, skaidri paskaidrojot katru darbību bērnam saprotamā valodā. Ja
                  nepieciešams, tiek darīti pārtraukumi, lai bērns justos droši.
                </p>
                <p>
                  Vecākiem svarīgi saprast, ka agrīns un regulārs vizītes pie zobārsta un profesionāla bērnu
                  mutes higiēna ievērojami samazina kariesa, smaganu iekaisumu un sarežģītākas ārstēšanas
                  risku nākotnē.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC IZVĒLĒTIES */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc vērts izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties bērnu mutes higiēnas pakalpojumu, vissvarīgākā ir ne tikai procedūras kvalitāte,
                  bet arī pieredze, ko bērns iegūst tās laikā. Bangų zobārstniecības klīnikā bērnu mutes
                  higiēna tiek veikta, ievērojot individuālu, maigu un skaidru komunikācijas modeli, kas
                  palīdz veidot pozitīvu attieksmi pret zobārstniecības aprūpi.
                </p>
                <p>
                  Katrs bērns tiek vērtēts individuāli, ņemot vērā viņa vecumu, mutes stāvokli un emocionālo
                  sagatavotību. Klīnikā tiecamies ne tikai noņemt aplikumu, bet arī novērst tā ātru veidošanos
                  nākotnē, tāpēc liela uzmanība tiek pievērsta vecāku izglītošanai un praktiskām
                  rekomendācijām.
                </p>
                <p>
                  Vecāki novērtē skaidru komunikāciju, profesionālu pieeju profilaksei un konsekventu uzmanību
                  bērna emocionālajai labsajūtai. Šo iemeslu dēļ Bangų zobārstniecības klīnika kļūst par
                  uzticamu izvēli ģimenēm, kas tiecas pēc ilgtermiņa bērnu mutes veselības un stabilas zobu
                  aprūpes sistēmas jau no agrīna vecuma.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties bērnu mutes higiēnai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja vēlaties parūpēties par sava bērna mutes veselību jau no mazotnes, aicinām pierakstīties
                  mutes higiēnas vizītei Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts bērna
                  mutes stāvoklis, veikta aplikuma noņemšana, zobu pulēšana un fluorēšana, un Jūs saņemsiet
                  noderīgus padomus ikdienas mutes aprūpei.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā mēs tiecamies, lai katrs bērna apmeklējums pie zobārsta būtu
                  patīkams, drošs un neradītu stresu. Šeit Jūs sagaida gādīgi speciālisti un silta vide,
                  pielāgota mazajiem pacientiem.
                </p>
                <p>
                  Piesakiet savu bērnu mutes higiēnas procedūrai un parūpējieties par viņa veselo smaidu jau
                  šodien.
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
