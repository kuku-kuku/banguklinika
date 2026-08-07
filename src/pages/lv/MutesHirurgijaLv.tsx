import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { TableOfContents } from '../../components/TableOfContents'
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
  { id: "cenas", label: "Cenas" },
  { id: "kas-ir", label: "Kas ir mutes ķirurģija?" },
  { id: "kad-nepieciesama", label: "Kad nepieciešama konsultācija?" },
  { id: "proceduras", label: "Kādas procedūras tiek veiktas?" },
  { id: "ka-notiek", label: "Kā tiek veikta ārstēšana?" },
  { id: "vai-drosi", label: "Vai procedūras ir drošas?" },
  { id: "kapec-neatlikt", label: "Kāpēc nedrīkst atlikt?" },
  { id: "pirms-pec", label: "Pirms un pēc procedūras" },
  { id: "kapec-mes", label: "Kāpēc Bangų klīnika?" },
]

export default function MutesHirurgijaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/mutes-hirurgija/#service`,
    "name": "Mutes ķirurģija Klaipēdā",
    "serviceType": "Mutes ķirurģija",
    "description": "Mutes ķirurģijas pakalpojumi tiek sniegti Bangų zobārstniecības klīnikā Klaipēdā. Klīnikā tiek veiktas zobārstniecības ķirurģiskās procedūras.",
    "url": `${SITE_URL}/lv/pakalpojumi/mutes-hirurgija/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Mutes ķirurģija Klaipēdā"
        description="Mutes ķirurģija Klaipēdā — profesionālas procedūras sarežģītāku zobu, mīksto audu un žokļa problēmu risināšanai. Vērsieties Bangų klīnikā."
        keywords="mutes ķirurģija, zobu izraušana, gudrības zobi, cistas, kaula augmentācija, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/mutes-hirurgija`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/burnos-chirurgija` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/mutes-hirurgija` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/burnos-chirurgija` },
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
              Mutes ķirurģija Klaipēdā
            </h1>

            <div className="mb-8">
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                <p>
                  Mutes ķirurģija ir zobārstniecības ārstēšanas joma, kas paredzēta sarežģītāku zobu, mīksto audu un žokļa kaula problēmu risināšanai, kad ierastā terapeitiskā ārstēšana vairs nav pietiekama. Šādas procedūras bieži ir nepieciešamas, lai novērstu infekcijas perēkļus, atjaunotu mutes funkciju vai sagatavotu muti turpmākajai ārstēšanai, piemēram, implantācijai vai protezēšanai.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā mutes ķirurģiskās procedūras tiek veiktas, ievērojot mūsdienu medicīniskos standartus, izmantojot modernu diagnostiku un uzticamas anestēzijas metodes. Pieredzējis mutes ķirurgs katru klīnisko situāciju vērtē individuāli, tiecoties pēc droša, prognozējama un ilgtermiņa rezultāta. Liela uzmanība tiek pievērsta ne tikai pašai procedūrai, bet arī pacienta pašsajūtai, skaidrai ārstēšanas skaidrošanai un raitam dzīšanas procesam.
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
                      Mutes ķirurģijas cenas
                    </h2>
                    <p className="text-slate-600">
                      Mutes ķirurģijas pakalpojumu cena atkarīga no procedūras rakstura, sarežģītības un individuālas pacienta klīniskās situācijas. Pirms katras ķirurģiskās iejaukšanās tiek veikta konsultācija, kuras laikā tiek novērtēts mutes stāvoklis un izvēlēts vispiemērotākais ārstēšanas risinājums.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Ķirurģiskās procedūras</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Saknes izraušanas procedūra', '60 – 80 €'],
                        ['Zoba izraušana', '80 – 100 €'],
                        ['Sarežģīta gudrības zobu izraušana', '120 – 150 €'],
                      ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between items-center py-2.5">
                          <span className="text-slate-600 text-sm">{name}</span>
                          <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Kaula procedūras</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Kaula augmentācija', '150 – 600 €'],
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
                  Precīzs procedūras apjoms un galīgā cena tiek apspriesta individuālas konsultācijas laikā, ņemot vērā pacienta mutes stāvokli, diagnostikas datus un plānoto ārstēšanas gaitu.
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
                    Aicinām reģistrēties mutes ķirurga konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja meklējat uzticamu zobārstniecības klīniku Klaipēdā, kurā mutes ķirurģijas pakalpojumi tiek sniegti atbildīgi, droši un profesionāli, aicinām vērsties Bangų zobārstniecības klīnikā. Mūsu pacienti novērtē ne tikai ārstēšanas kvalitāti, bet arī skaidru komunikāciju, uzmanīgu pieeju un rūpīgi plānotu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mutes ķirurģiskās procedūras veic kvalificēti mutes ķirurgi, kuri strādā ar mūsdienu tehnoloģijām un piemēro individuālus risinājumus atbilstoši katra pacienta situācijai. Šeit liela uzmanība tiek pievērsta gan procedūras precizitātei, gan pacienta pašsajūtai pirms ārstēšanas, tās laikā un pēc tās, tiecoties pēc uzticama un ilgtermiņa rezultāta.
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
                <div className="relative aspect-[4/5] bg-sky-50">
                  <div className="pt-[125%]" />
                  <img
                    src="/team/Donatas_Kubliuslight%20LV.jpg"
                    alt="Donatas Kubilius — mutes ķirurgs Bangų klīnikā"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_15%)]" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* REVIEWS */}
          <motion.div className="mb-10 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          {/* KAS IR MUTES ĶIRURĢIJA */}
          <motion.section id="kas-ir" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas ir mutes ķirurģija?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Mutes ķirurģija ir zobārstniecības joma, kas aptver zobu, mutes gļotādas, žokļu un apkārtējo audu ķirurģisku ārstēšanu. Tā tiek izmantota gadījumos, kad zobu vai mutes problēmas nav iespējams risināt ar konservatīvām metodēm, un ķirurģiska iejaukšanās ir nepieciešama, lai novērstu slimības progresēšanu vai atjaunotu normālas mutes funkcijas.
                </p>
                <p>
                  Visbiežāk mutes ķirurģija ietver procedūras, kas saistītas ar nedziedināmi bojātu zobu izraušanu, infekciju ārstēšanu, gudrības zobu problēmām, kaula audu korekcijām vai sagatavošanos zobu implantācijai. Šīs iejaukšanās var būt gan vienkāršas, gan sarežģītākas, tāpēc katrā gadījumā tiek veikta izsmeļoša diagnostika un izveidots individuāls ārstēšanas plāns.
                </p>
                <p>
                  Svarīgi uzsvērt, ka mūsdienu mutes ķirurģija ievērojami atšķiras no iepriekš valdošajiem stereotipiem. Procedūras tiek veiktas, izmantojot efektīvu vietējo anestēziju vai citas anestēzijas metodes, tāpēc pacients nejūt sāpes, un diskomforts pēc procedūras parasti ir minimāls un īslaicīgs. Pareizi plānota ķirurģiska ārstēšana ne tikai novērš esošo problēmu, bet arī rada apstākļus veiksmīgai turpmākai zobārstniecības ārstēšanai un ilgtermiņa mutes veselībai.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAD NEPIECIEŠAMA KONSULTĀCIJA */}
          <motion.section id="kad-nepieciesama" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kad nepieciešama mutes ķirurga konsultācija?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Mutes ķirurga konsultācija nepieciešama tad, kad zobu vai mutes audu problēmas nav iespējams risināt, izmantojot ierastas ārstēšanas metodes, vai kad ir nepieciešams precīzi novērtēt situāciju pirms sarežģītākas ārstēšanas. Bieži pacienti kavējas ar vēršanos, jo sāpes ir vieglas vai vispār nav jūtamas, taču mutes slimības var progresēt klusi un nemanāmi.
              </p>

              <div className={innerCard + ' mb-6'}>
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Pie mutes ķirurga mūsu klīnikā Klaipēdā ieteicams vērsties šajos gadījumos:
                </h3>

                <div className="grid sm:grid-cols-1 gap-3">
                  {[
                    "kad zobs ir stipri bojāts un to nav iespējams saglabāt ar terapeitisku ārstēšanu",
                    "pastāvot pastāvīgam vai atkārtotam smaganu iekaisumam, abscesam vai infekcijas pazīmēm",
                    "kad gudrības zobi aug nepareizi, rada sāpes vai izraisa iekaisumu",
                    "pēc zobu vai žokļa traumas",
                    "pirms plānotas zobu implantācijas vai sarežģītākas protezēšanas",
                    "konstatējot cistas, veidojumus vai citas patoloģiskas izmaiņas žokļa kaula rajonā"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Laikus veikta konsultācija ļauj precīzi noteikt problēmas cēloni, novērtēt iespējamās ārstēšanas alternatīvas un izvēlēties optimālu risinājumu. Agrīna ķirurģiska ārstēšana bieži palīdz izvairīties no lielākām iejaukšanās un saīsina dzīšanas periodu.
              </p>
            </div>
          </motion.section>

          {/* KĀDAS PROCEDŪRAS TIEK VEIKTAS */}
          <motion.section id="proceduras" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kādas procedūras veic mutes ķirurgs?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Mutes ķirurgs veic plašu procedūru klāstu, kas paredzēts zobu, mīksto audu un žokļa kaula patoloģiju ārstēšanai. Procedūras tiek izvēlētas individuāli, ņemot vērā pacienta mutes stāvokli, vispārējo veselību un ilgtermiņa ārstēšanas mērķus.
              </p>

              <div className={innerCard + ' mb-6'}>
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Visbiežāk veiktās mutes ķirurģiskās procedūras:
                </h3>

                <div className="grid sm:grid-cols-1 gap-3">
                  {[
                    "Zobu izraušana — kad zobs ir nedziedināmi bojāts, izraisa infekciju vai apdraud apkārtējos audus",
                    "Gudrības (impaktētu) zobu izraušana, kad tie neizaug pilnīgi, spiež citus zobus vai izraisa iekaisumu",
                    "Abscesu atvēršana un infekciju ārstēšana, lai apturētu iekaisuma izplatīšanos",
                    "Saknes gala rezekcija, kad infekcija saglabājas, neskatoties uz kanālu ārstēšanu",
                    "Žokļa cistu un citu veidojumu izraušana",
                    "Sagatavošanās procedūras implantācijai, tādas kā kaula korekcijas vai kaula augmentācija",
                    "Sinusa dibena pacelšana, kad augšējā žoklī nepietiek kaula implantiem",
                    "Mīksto audu ķirurģija, kas paredzēta mutes gļotādas izmaiņu korekcijai"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Visas procedūras tiek veiktas, ievērojot stingras drošības un higiēnas prasības, izmantojot piemērotas anestēzijas metodes. Pieredzējis mutes ķirurgs ne tikai veic pašu procedūru, bet arī nodrošina, ka pacients tiek pareizi informēts par dzīšanas gaitu un turpmākajiem ārstēšanas posmiem.
              </p>
            </div>
          </motion.section>

          {/* KĀ TIEK VEIKTA */}
          <motion.section id="ka-notiek" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kā tiek veikta mutes ķirurģiska ārstēšana?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Mutes ķirurģiska ārstēšana Bangų zobārstniecības klīnikā tiek veikta pēc skaidras un pacientam saprotamas gaitas. Katrs posms ir rūpīgi plānots, lai procedūra būtu droša, efektīva un pēc iespējas ērtāka.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultācija un diagnostika</h3>
                  <p className="text-sm text-slate-600">Vizītes laikā tiek novērtēts mutes stāvoklis, veikta apskate, nozīmēti rentgena izmeklējumi. Tiek izveidots individuāls plāns.</p>
                </div>
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Sagatavošanās procedūrai</h3>
                  <p className="text-sm text-slate-600">Tiek iepazīstināts ar gaitu, izvēlēta vietējā anestēzija, kas nodrošina, ka pacients nejūt sāpes.</p>
                </div>
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ķirurģiska procedūra</h3>
                  <p className="text-sm text-slate-600">Tiek veikta sterili, precīzi un maigi, izmantojot modernus instrumentus, lai samazinātu audu traumu.</p>
                </div>
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pēcoperācijas aprūpe</h3>
                  <p className="text-sm text-slate-600">Tiek sniegti ieteikumi par kopšanu, uzturu, zālēm. Tiek apspriesti turpmāki vizīti.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* DROŠĪBA */}
          <motion.section id="vai-drosi" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Vai mutes ķirurģiskās procedūras ir drošas?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Mūsdienu mutes ķirurģija ir droša un prognozējama zobārstniecības joma, ja procedūras veic pieredzējuši speciālisti un ievēro medicīniskos standartus. Bangų zobārstniecības klīnikā liela uzmanība tiek pievērsta pacienta drošībai katrā ārstēšanas posmā — no pirmās konsultācijas līdz pilnīgai dzīšanai.
                </p>
                <p>
                  Pirms katras ķirurģiskās procedūras tiek novērtēts pacienta vispārējais veselības stāvoklis, lietotās zāles un iespējamie individuālie riski. Tas ļauj izvēlēties vispiemērotāko ārstēšanas taktiku un samazināt komplikāciju iespējamību. Vietējā anestēzija vai citas anestēzijas metodes nodrošina, ka procedūras laikā pacients nepiedzīvo sāpes.
                </p>
                <p>
                  Pēc ķirurģiskās ārstēšanas iespējamas īslaicīgas sajūtas, tādas kā pietūkums, jutīgums vai neliels diskomforts, taču tā ir normāla organisma reakcija uz iejaukšanos un visbiežāk pāriet dažu dienu laikā. Ievērojot mutes ķirurga ieteikumus, dzīšanas process ir raits un kontrolēts.
                </p>
                <p>
                  Svarīgi uzsvērt, ka laikus veikta mutes ķirurģiska ārstēšana bieži ir drošāks risinājums nekā problēmas ignorēšana. Neārstētas infekcijas vai iekaisumi var progresēt un izraisīt nopietnākas komplikācijas, tāpēc profesionāla ķirurģiska palīdzība palīdz izvairīties no lielākiem riskiem nākotnē.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAVĒŠANA */}
          <motion.section id="kapec-neatlikt" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas notiek, ja nepieciešamā mutes ķirurģiska ārstēšana tiek atlikta?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Mutes ķirurģiska ārstēšana bieži kļūst nepieciešama nevis uzreiz pēc problēmas pamanīšanas, bet tad, kad tā jau ir progresējusi. Tomēr kavēšana var radīt negatīvas sekas, pat ja simptomi sākumā izskatās nenozīmīgi vai vispār nav jūtami. Daudzas mutes slimības progresē pakāpeniski un ilgu laiku var attīstīties bez skaidrām sāpēm.
                </p>
                <p>
                  Neizārstētas infekcijas vai iekaisumu procesi mutes dobumā var izplatīties uz apkārtējiem audiem, izraisīt abscesus, kaula bojājumus vai smaganu atkāpšanos. Šādos gadījumos ārstēšana kļūst sarežģītāka, prasa lielāku ķirurģisku iejaukšanos un ilgāku dzīšanas periodu. Turklāt neārstētas problēmas var apgrūtināt nākamo zobu atjaunošanu — piemēram, implantāciju vai protezēšanu.
                </p>
                <p>
                  Atliekot mutes ķirurģisku ārstēšanu, var arī palielināties vispārējo veselības komplikāciju risks, īpaši, ja infekcija izplatās ārpus mutes robežām. Tāpēc laikus veikta mutes ķirurga konsultācija un ārstēšana ļauj risināt problēmu agrīnā stadijā, samazināt iejaukšanās apjomu un nodrošināt labāku ilgtermiņa prognozi.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PIRMS UN PĒC */}
          <motion.section id="pirms-pec" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas svarīgi zināt pirms un pēc mutes ķirurģiskās procedūras?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Pareiza sagatavošanās un pēcoperācijas kopšana ir svarīga veiksmīgas mutes ķirurģiskās ārstēšanas daļa. Pirms procedūras pacientam tiek sniegta visa nepieciešamā informācija par plānoto ārstēšanu, anestēziju un iespējamām sajūtām, lai nodrošinātu mierīgu un pārliecinātu sagatavošanos.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-4">Pirms mutes ķirurģiskās procedūras var būt ieteicams:</h3>
                  <ul className="list-disc pl-5 text-slate-700 space-y-2 text-sm">
                    <li>ievērot ārsta norādījumus par uzturu vai zāļu lietošanu</li>
                    <li>informēt speciālistu par lietotajām zālēm vai hroniskajām slimībām</li>
                    <li>izvairīties no smēķēšanas, jo tā var negatīvi ietekmēt dzīšanas procesu</li>
                  </ul>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-4">Pēc procedūras svarīgi ievērot ieteikumus:</h3>
                  <ul className="list-disc pl-5 text-slate-700 space-y-2 text-sm">
                    <li>kādu laiku izvairīties no intensīvas fiziskās slodzes</li>
                    <li>ievērot maigu mutes higiēnu, nesteidzoties kairināt operēto vietu</li>
                    <li>izvēlēties mīkstāku, nekarstu ēdienu</li>
                    <li>novērot dzīšanas gaitu un, ja nepieciešams, ierasties atkārtotai apskatei</li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Ievērojot individuālus ieteikumus, pēcoperācijas periods visbiežāk paiet raiti, un pacients ātri var atgriezties pie ierasta dzīves ritma. Atbildīga sagatavošanās un sadarbība ar speciālistu ir svarīga veiksmīgas ārstēšanas daļa.
              </p>
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
                  Izvēloties mutes ķirurģijas pakalpojumus, īpaši svarīgi uzticēties ne tikai procedūrai, bet arī to veicošajam speciālistam un klīnikas pieejai pacienta drošībai. Bangų zobārstniecības klīnikā mutes ķirurģiska ārstēšana tiek veikta, ievērojot augstus medicīniskos standartus, apvienojot pieredzi, mūsdienu tehnoloģijas un individuālu uzmanību katram pacientam.
                </p>
                <p>
                  Mūsu klīnikā strādājošais mutes ķirurgs katru situāciju vērtē individuāli — no sākotnējās konsultācijas līdz pilnīgai dzīšanai. Liela uzmanība tiek pievērsta precīzai diagnostikai, skaidram ārstēšanas plāna skaidrojumam un prognozējamam rezultātam. Tas ļauj pacientam justies droši un saprast katru ārstēšanas posmu.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā tiek izmantotas modernas diagnostikas un ķirurģiskās ārstēšanas metodes, kas nodrošina precizitāti un minimālu audu bojājumu. Procedūras tiek veiktas, izmantojot uzticamus anestēzijas risinājumus, tāpēc pacientu pieredze ir pēc iespējas ērtāka. Pēc ķirurģiskās ārstēšanas pacientiem tiek sniegti izsmeļoši un praktiski ieteikumi, kas palīdz nodrošināt raitu dzīšanas procesu.
                </p>
                <p>
                  Svarīga klīnikas priekšrocība — skaidra komunikācija un caurspīdība. Pacienti iepriekš tiek iepazīstināti ar procedūras gaitu, iespējamām alternatīvām un turpmāko ārstēšanas plānu. Šāda pieeja ļauj veidot ilgtermiņa uzticību un sadarbību, kas orientēta uz ilgtermiņa mutes veselību.
                </p>
              </div>
            </div>
          </motion.section>

        </div>
      </motion.div>
    </AnimatedSection>
  )
}
