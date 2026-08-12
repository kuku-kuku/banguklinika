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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const tocSections = [
  { id: 'kada-reikalinga', label: 'Kad nepieciešama?' },
  { id: 'kaina', label: 'Cena' },
  { id: 'situacijos', label: 'Biežākās situācijas' },
  { id: 'kodel-neatidelioti', label: 'Kāpēc neatlikt?' },
  { id: 'vizitas', label: 'Kā notiek vizīte?' },
  { id: 'skausmo-mazinimas', label: 'Sāpju mazināšana' },
  { id: 'trauma', label: 'Zoba trauma' },
  { id: 'kodel-bangu', label: 'Kāpēc Bangų klīnika?' },
]

export default function NeatliekamaPalidzibaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/neatliekama-palidziba/#service`,
    "name": "Neatliekamā zobārstniecības palīdzība Klaipēdā",
    "serviceType": "Neatliekamā zobārstniecības palīdzība",
    "description": "Neatliekamā zobārstniecības palīdzība tiek sniegta Bangų zobārstniecības klīnikā Klaipēdā. Pakalpojums paredzēts pacientiem, kuriem nepieciešama steidzama zobu ārstēšana, sāpju mazināšana vai cita zobārstniecības palīdzība Klaipēdas pilsētā.",
    "url": `${SITE_URL}/lv/pakalpojumi/neatliekama-palidziba/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Neatliekamā zobārstniecības palīdzība Klaipēdā"
        description="Pēkšņas zobu sāpes vai trauma? Neatliekamā zobārstniecības palīdzība Klaipēdā iekaisuma, pietūkuma vai negaidītas traumas gadījumā. Pierakstieties⏩Bangų klīnikā jau tagad."
        keywords="neatliekamā palīdzība, steidzams zobārsts, zobu sāpes, zobu traumas, klaipēda, banguklinika"
        canonical={`${SITE_URL}/lv/pakalpojumi/neatliekama-palidziba`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/skubi-pagalba` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/neatliekama-palidziba` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/skubi-pagalba` },
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
        <TableOfContents sections={tocSections} rootRef={pageRef} title="Saturs" cta={{ label: "Pierakstīties vizītei", to: "/lv/kontakti" }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Neatliekamā zobārstniecības palīdzība Klaipēdā
            </h1>

            <div className={`mb-8`}>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Pēkšņas zobu sāpes vai negaidīti radusies mutes dobuma problēma var būtiski traucēt ikdienas dzīvi.
                  Šādos gadījumos vissvarīgākais ir pēc iespējas ātrāk vērsties pie zobārsta, kurš var noteikt sāpju cēloni un
                  sniegt nepieciešamo palīdzību.
                </p>
                <p className="mb-4">
                  Bangų zobārstniecības klīnikā tiek sniegta neatliekamā zobārstniecības palīdzība Klaipēdā, paredzēta pacientiem, kuriem
                  nepieciešama neatliekama ārstēšana stipru zobu sāpju, infekcijas vai traumas dēļ. Ārsti vispirms
                  izvērtē situāciju, nosaka problēmas cēloni un izvēlas piemērotāko risinājumu – no sāpju mazināšanas līdz
                  nepieciešamajai ārstēšanai.
                </p>
                <p>
                  Laikus sniegta palīdzība palīdz mazināt diskomfortu, apturēt iekaisumu un izvairīties no sarežģītākām procedūrām
                  nākotnē.
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
          </motion.header>

          {/* KADA REIKALINGA */}
          <motion.section
            id="kada-reikalinga"
            className={sectionWrap}
            variants={item}
          >
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kad nepieciešama neatliekamā zobārstniecības palīdzība?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Neatliekamā zobārstniecības palīdzība ir nepieciešama tad, kad mutes dobumā parādās pēkšņi simptomi, kurus nedrīkst
                  ignorēt. Visbiežāk pacienti vēršas stipru zobu sāpju, pietūkuma, infekcijas vai traumas dēļ.
                </p>
                <p>
                  Tāpat svarīgi nekavēties, ja zobs ir atšķēlies, lūzis, izsists, ja izkritusi plomba vai kronītis. Šādos gadījumos
                  ātra zobārsta palīdzība palīdz pasargāt zobu no turpmākiem bojājumiem un mazināt komplikāciju risku.
                </p>
                <p>
                  Jo agrāk tiek noteikts problēmas cēlonis, jo vienkāršāk to atrisināt un saglabāt dabiskos zobus.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAINA */}
          <motion.section
            id="kaina"
            className={sectionWrap}
            variants={item}
          >
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                No kā atkarīga neatliekamās zobārstniecības palīdzības cena?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Neatliekamās zobārstniecības palīdzības cena var atšķirties atkarībā no vairākiem svarīgiem faktoriem. Vispirms tā
                  ir atkarīga no problēmas sarežģītības un nepieciešamā ārstēšanas veida. Piemēram, vienkārša zoba plombēšana var
                  izmaksāt mazāk nekā sarežģītākas procedūras, piemēram, sakņu kanālu ārstēšana vai ķirurģiska zoba izraušana.
                </p>
                <p>
                  Cena var būt atkarīga arī no diagnostikas nepieciešamības. Dažos gadījumos ārsts var veikt rentgena
                  izmeklējumu vai citus papildu izmeklējumus, kas palīdz precīzi noteikt sāpju cēloni un izvēlēties piemērotāko
                  ārstēšanas metodi.
                </p>
                <p>
                  Vēl viens svarīgs aspekts ir zoba stāvoklis un nepieciešamo procedūru skaits. Ja problēmu var atrisināt vienas
                  procedūras laikā, ārstēšana parasti ir vienkāršāka. Tomēr, ja nepieciešama vairāku posmu ārstēšana vai turpmākas
                  procedūras, galīgā cena var mainīties.
                </p>
                <p>
                  Precīzu neatliekamās zobārstniecības palīdzības cenu var noteikt tikai pēc ārsta apskates, kad tiek izvērtēts pacienta
                  mutes dobuma stāvoklis un izvēlēts piemērotākais ārstēšanas risinājums.
                </p>
              </div>
            </div>
          </motion.section>

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
                    Ja Jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā izvērtēsim Jūsu mutes dobuma stāvokli, atbildēsim uz interesējošajiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā tiecamies, lai katrs pacients justos droši – no pirmās konsultācijas līdz galīgajam rezultātam. Pierakstieties un speriet pirmo soli uz veselīgu smaidu.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikta detalizēta klīniskā izvērtēšana',
                        'tiek pārrunātas iespējamās ārstēšanas metodes',
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
                <div className="relative aspect-[4/5] bg-sky-50">                  <img
                    src="/team/Odeta-light%20LV.jpg"
                    alt="Odeta Balsienė – zobārste Bangų klīnikā"
                    className="absolute inset-0 w-full h-full object-contain"
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

          {/* SITUACIJOS */}
          <motion.section
            id="situacijos"
            className={sectionWrap}
            variants={item}
          >
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Biežākās situācijas, kad nepieciešama neatliekamā palīdzība
              </h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Neatliekamā zobārstniecības palīdzība visbiežāk ir nepieciešama tad, kad rodas negaidīti simptomi vai mutes dobuma
                bojājumi, kurus nevar atlikt. Šādās situācijās svarīgi pēc iespējas ātrāk vērsties pie zobārsta, jo agrīna
                ārstēšana bieži palīdz izvairīties no nopietnākām komplikācijām.
              </p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Pēkšņas un stipras zobu sāpes',
                    text: 'Viens no biežākajiem neatliekamās palīdzības gadījumiem ir stipras, pulsējošas zobu sāpes. Tās var rasties progresējošas kariesa, zoba nerva iekaisuma vai infekcijas dēļ. Šādā gadījumā nepieciešams pēc iespējas ātrāk veikt diagnostiku un uzsākt ārstēšanu, lai mazinātu sāpes un apturētu iekaisumu.',
                  },
                  {
                    title: 'Zoba lūzums vai atšķelšanās',
                    text: 'Zobi var tikt bojāti traumas, sitiena vai cietu pārtikas produktu dēļ. Pat neliela atšķelšanās var izraisīt jutīgumu vai sāpes, tāpēc svarīgi vērsties pie zobārsta, kurš izvērtēs bojājuma apmēru un atjaunos zoba formu.',
                  },
                  {
                    title: 'Pietūkums vai infekcija mutes rajonā',
                    text: 'Smaganu pietūkums, abscess vai infekcija var liecināt par bakteriālu iekaisumu. Šādos gadījumos neatliekamā palīdzība palīdz apturēt infekcijas izplatīšanos un mazināt komplikāciju risku.',
                  },
                  {
                    title: 'Izkritusi plomba vai kronītis',
                    text: 'Ja izkrīt plomba vai kronītis, zobs paliek neaizsargāts un var kļūt jutīgs vai viegli bojājams. Steidzams apmeklējums pie zobārsta palīdz pasargāt zobu un atjaunot tā funkciju.',
                  },
                  {
                    title: 'Traumas vai asiņošana mutē',
                    text: 'Pēc negadījuma vai sporta traumas var tikt bojāti zobi vai mīkstie audi. Šādos gadījumos nepieciešams pēc iespējas ātrāk vērsties pie speciālistiem, lai tiktu izvērtēta situācija un sniegta atbilstoša palīdzība.',
                  },
                  {
                    title: 'Gudrības zobu sāpes',
                    text: 'Gudrības zobu nākšana dažreiz izraisa stipras sāpes, pietūkumu vai iekaisumu. Ja simptomi kļūst intensīvi, nepieciešama neatliekamā zobārstniecības palīdzība, kas palīdzēs mazināt diskomfortu un izvēlēties piemērotu ārstēšanas risinājumu.',
                  },
                ].map((s, i) => (
                  <div key={i} className={innerCard}>
                    <h3 className="font-bold text-darkblue-700 mb-2">{s.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* KODĖL NEATIDĖLIOTI */}
          <motion.section
            id="kodel-neatidelioti"
            className={sectionWrap}
            variants={item}
          >
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc nevajadzētu atlikt vizīti pie zobārsta?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Daudzi cilvēki mēdz atlikt vizīti pie zobārsta, cerot, ka sāpes pāries pašas no sevis. Tomēr
                  visbiežāk tā ir tikai īslaicīga atvieglošanās, bet pati problēma paliek un var progresēt.
                </p>
                <p>
                  Neārstēts zobu kariess var bojāt dziļākos zoba audus un izraisīt nerva iekaisumu. Šādā gadījumā
                  ārstēšana kļūst sarežģītāka un var būt nepieciešama sakņu kanālu ārstēšana vai pat zoba izraušana. Līdzīgi arī smaganu
                  infekcijas – neārstētas tās var izplatīties uz apkārtējiem audiem un izraisīt nopietnākas veselības problēmas.
                </p>
                <p>
                  Laikus sniegta neatliekamā zobārstniecības palīdzība ļauj ātri noteikt problēmas cēloni un uzsākt ārstēšanu. Tas
                  palīdz mazināt sāpes, pasargāt zobu no turpmākiem bojājumiem un izvairīties no sarežģītākām procedūrām nākotnē.
                </p>
                <p>
                  Tāpēc, sajūtot stipras zobu sāpes, pamanot pietūkumu vai piedzīvojot traumu, ieteicams nekavēties un pēc iespējas
                  ātrāk vērsties pie zobārsta. Agrīna ārstēšana bieži ir vienkāršāka, ātrāka un ļauj saglabāt
                  dabiskos zobus.
                </p>
              </div>
            </div>
          </motion.section>

          {/* VIZITAS */}
          <motion.section
            id="vizitas"
            className={sectionWrap}
            variants={item}
          >
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kā notiek neatliekamās palīdzības vizīte?
              </h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Neatliekamās zobārstniecības palīdzības vizīte vispirms ir paredzēta, lai ātri noteiktu problēmas cēloni un mazinātu
                pacienta piedzīvotās sāpes. Bangų zobārstniecības klīnikā katra situācija tiek izvērtēta individuāli, tāpēc
                ārsti cenšas pēc iespējas ātrāk sniegt nepieciešamo palīdzību un izvēlēties piemērotāko ārstēšanas risinājumu.
              </p>

              <div className="grid gap-6 md:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Primārā apskate un diagnostika</h3>
                  <p className="text-sm text-slate-600">
                    Zobārsts veic mutes dobuma apskati un izvērtē simptomus. Ja nepieciešams, tiek veikts rentgena izmeklējums.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Sāpju mazināšana</h3>
                  <p className="text-sm text-slate-600">
                    Vispirms tiek pielietoti pasākumi sāpju mazināšanai – vietējā anestēzija vai citas procedūras.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Problēmas risinājums</h3>
                  <p className="text-sm text-slate-600">
                    Tiek veikta nepieciešamā procedūra vai pagaidu ārstēšana, kas stabilizē stāvokli līdz plānveida ārstēšanai.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Turpmākās ārstēšanas plāns</h3>
                  <p className="text-sm text-slate-600">
                    Tiek sastādīts turpmākās ārstēšanas plāns, kas palīdz atrisināt problēmu galīgi un nodrošināt ilgtermiņa mutes veselību.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SKAUSMO MAŽINIMAS */}
          <motion.section
            id="skausmo-mazinimas"
            className={sectionWrap}
            variants={item}
          >
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kā mazināt zobu sāpes līdz vizītei pie zobārsta?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Pēkšņas zobu sāpes var būt ļoti nepatīkamas, tāpēc daudzi pacienti meklē veidus, kā atvieglot stāvokli
                  līdz apmeklējumam pie zobārsta. Lai gan mājas līdzekļi nevar atrisināt pamata problēmas cēloni, tie var
                  palīdzēt mazināt diskomfortu.
                </p>

                <div className="grid sm:grid-cols-1 gap-3 mt-2">
                  {[
                    'Izvairīties no ļoti karsta, auksta vai salda ēdiena, kas var kairināt bojāto zobu.',
                    'Uzturēt labu mutes higiēnu – uzmanīgi iztīrīt zobus un noņemt pārtikas atliekas.',
                    'Ja parādījies pietūkums, likt aukstu kompresi uz vaiga ārpuses.',
                    'Lietot ārsta ieteiktos pretsāpju līdzekļus.',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold text-darkblue-700">Svarīgi:</span>{' '}
                    Tie ir tikai pagaidu risinājumi. Jo agrāk tiek noteikts zobu sāpju cēlonis, jo vienkāršāka un ātrāka
                    var būt ārstēšana.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* TRAUMA */}
          <motion.section
            id="trauma"
            className={sectionWrap}
            variants={item}
          >
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Ko darīt, piedzīvojot zoba traumu?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zoba trauma var notikt dažādu iemeslu dēļ – sporta, negadījuma vai stipra sitiena rezultātā. Šādās
                  situācijās ļoti svarīgi reaģēt ātri un pareizi, jo no tā bieži ir atkarīgs, vai izdosies saglabāt
                  bojāto zobu.
                </p>
                <p>
                  Ja zobs ir atšķēlies vai lūzis, ieteicams pēc iespējas ātrāk vērsties pie zobārsta. Pat ja sāpes nav stipras,
                  bojātais zobs var kļūt jutīgs un pakļauts baktēriju iedarbībai.
                </p>
                <p>
                  Ja zobs ir pilnībā izsists, svarīgi to pēc iespējas ātrāk atrast un uzglabāt mitrā vidē – piemēram,
                  pienā vai speciālā šķīdumā. Šādā gadījumā nekavējoties jāvēršas pie zobārsta, jo ātra palīdzība var
                  palielināt iespēju saglabāt zobu.
                </p>
                <p>
                  Tāpat svarīgi izvērtēt, vai nav mīksto audu bojājumu vai asiņošanas. Šādos gadījumos zobārsts
                  apskatīs mutes dobumu, veiks nepieciešamos izmeklējumus un izvēlēsies piemērotāko ārstēšanas veidu.
                </p>
                <p>
                  Laikus sniegta zobārstniecības palīdzība pēc traumas palīdz pasargāt zobus, mazināt komplikāciju risku un atjaunot
                  mutes veselību.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL BANGŲ */}
          <motion.section
            id="kodel-bangu"
            className={sectionWrap}
            variants={item}
          >
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties zobārstniecības klīniku neatliekamai palīdzībai, vissvarīgākais ir profesionalitāte, pieredze un ātra reakcija.
                  Bangų zobārstniecības klīnikā pacientiem tiek sniegta kvalificēta palīdzība, orientēta uz ātru problēmas risinājumu
                  un pacienta komfortu. Mūsu speciālistiem ir ilggadēja pieredze dažādās zobārstniecības jomās, tāpēc viņi var precīzi
                  izvērtēt situāciju un izvēlēties piemērotāko ārstēšanas metodi.
                </p>
                <p>
                  Klīnikā tiek izmantota moderna diagnostikas un ārstēšanas aparatūra, kas ļauj ātri noteikt problēmas cēloni un
                  uzsākt ārstēšanu. Tas ir īpaši svarīgi neatliekamās palīdzības gadījumos, kad katrai minūtei var būt ietekme uz zoba
                  saglabāšanu vai iekaisuma izplatīšanās apturēšanu.
                </p>
                <p>
                  Liela uzmanība tiek pievērsta arī pacienta pašsajūtai – procedūras tiek veiktas, izmantojot efektīvu anestēziju, tāpēc
                  ārstēšana notiek pēc iespējas komfortablāk. Individuāla pieeja katram pacientam palīdz nodrošināt, lai tiktu
                  izvēlēts optimāls risinājums gan sāpju mazināšanai, gan turpmākajai ārstēšanai.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties neatliekamai zobārstniecības palīdzībai Bangų klīnikā
              </h2>

              <p className="text-slate-700 max-w-3xl leading-relaxed mb-8">
                Ja jūtat stipras zobu sāpes, esat pamanījuši pietūkumu vai piedzīvojuši zoba traumu, svarīgi nekavēties un pēc
                iespējas ātrāk vērsties pie speciālistiem. Laikus sniegta neatliekamā zobārstniecības palīdzība var palīdzēt mazināt sāpes,
                apturēt iekaisumu un saglabāt dabiskos zobus.
                <br />
                <br />
                Bangų zobārstniecības klīnikas komanda ir gatava sniegt profesionālu palīdzību un parūpēties par jūsu mutes
                veselību. Vērsieties mūsu klīnikā un pierakstieties steidzamai konsultācijai – pieredzējuši speciālisti izvērtēs
                situāciju un izvēlēsies piemērotāko ārstēšanas risinājumu.
              </p>

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
