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
  { id: 'kas-yra', label: 'Kas ir gingivīts?' },
  { id: 'simptomai', label: 'Simptomi' },
  { id: 'gydymas', label: 'Kā tiek ārstēts?' },
  { id: 'prieziura', label: 'Kopšana pēc ārstēšanas' },
  { id: 'mitai', label: 'Mīti par gingivītu' },
  { id: 'faq', label: 'BUJ' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function SmaganuIekaisumsGingivitsLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/lv/pakalpojumi/smaganu-iekaisums-gingivits/#service",
    "name": "Smaganu iekaisuma (gingivīta) ārstēšana Klaipēdā",
    "serviceType": "Smaganu iekaisuma ārstēšana",
    "description": "Smaganu iekaisuma (gingivīta) ārstēšana Bangų zobārstniecības klīnikā Klaipēdā.",
    "url": "https://www.banguklinika.lt/lv/pakalpojumi/smaganu-iekaisums-gingivits/",
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Smaganu iekaisums (gingivīts) Klaipēdā - Bangų klīnika"
        description="Smaganu iekaisuma (gingivīta) ārstēšana Klaipēdā – asiņojošu, pietūkušu smaganu kopšana Bangų klīnikā. Cena no 40€ līdz 80€.⏩Pierakstieties konsultācijai."
        keywords="smaganu iekaisums, gingivīts, smaganu asiņošana, periodonta slimība, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/smaganu-iekaisums-gingivits`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantenu-uzdegimas-gingivitas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/smaganu-iekaisums-gingivits` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantenu-uzdegimas-gingivitas` },
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
              Smaganu iekaisums – gingivīts Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Asiņojošas, pietvīkušas vai pietūkušas smaganas nav veselas mutes stāvokļa pazīme. Šādas
                  izmaiņas var liecināt par gingivītu – smaganu iekaisumu, kas visbiežāk saistīts ar bakteriālā
                  aplikuma uzkrāšanos zobu un smaganu robežā. Tā kā agrīnais gingivīts bieži neizraisa spēcīgas
                  sāpes, pacients var ilgu laiku nepamanīt pirmos simptomus.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā smaganu iekaisuma ārstēšana tiek plānota individuāli.
                  Tiek novērtēts smaganu stāvoklis, aplikuma un zobakmens daudzums, mutes higiēnas paradumi, esošās
                  plombas vai protēzes, kā arī citi iespējamie riska faktori. Ārstēšanas mērķis ir novērst iekaisumu
                  uzturošos cēloņus, uzlabot smaganu stāvokli un samazināt dziļāka periodonta bojājuma risku.
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
                      Smaganu iekaisuma ārstēšanas cenas
                    </h2>
                    <p className="text-slate-600">
                      Smaganu iekaisuma ārstēšanas cena ir atkarīga no iekaisuma intensitātes, zobakmens daudzuma un
                      ārstēšanas apjoma. Precīza cena tiek noteikta pēc klīniskās situācijas novērtēšanas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Smaganu iekaisuma ārstēšana</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Gingivīta ārstēšana', '40 – 80 €'],
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
                  Precīza smaganu iekaisuma ārstēšanas cena Klaipēdā tiek apspriesta individuālās konsultācijas laikā,
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
                    Aicinām pierakstīties konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja Jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties
                    konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā novērtēsim Jūsu mutes stāvokli, atbildēsim
                    uz interesējošajiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā tiecamies, lai katrs pacients justos droši – no pirmās
                    konsultācijas līdz galarezultātam. Pierakstieties un speriet pirmo soli pretim veselam smaidam.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts detalizēts klīniskais novērtējums',
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir gingivīts?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Gingivīts ir smaganu iekaisums, kas visbiežāk sākas dēļ pie smaganu malas uzkrājušās bakteriālās
                  bioplēves. Zobu aplikums ir pie virsmas piestiprinājusies plēvīte, kurā ir daudz mikroorganismu.
                  Ja tas regulāri un rūpīgi netiek notīrīts, smaganu audi sāk reaģēt ar iekaisumu.
                </p>
                <p>
                  Mīksto aplikumu var noņemt, pareizi tīrot zobus un starpzobus. Ar laiku daļa aplikuma
                  mineralizējas un pārvēršas par zobakmeni. Tā virsma ir raupja, tāpēc uz tās vieglāk uzkrājas
                  jauns aplikums. Izveidojušos zobakmeni ar parastu zobu suku noņemt nav iespējams – to
                  profesionāli noņem mutes higiēnas speciālists.
                </p>
                <p>
                  Visbiežāk sastopamā forma ir ar aplikumu saistītais bakteriālais gingivīts. Hronisks gingivīts
                  parasti attīstās pakāpeniski un ilgu laiku var izraisīt tikai nelielu asiņošanu vai pietvīkumu.
                  Akūts gingivīts var izpausties pēkšņāk un ar izteiktākiem simptomiem. Tomēr stipras sāpes,
                  smaganu čūlas, drudzis vai vispārēja slikta pašsajūta nav tipiski parastam aplikuma izraisītam
                  iekaisumam.
                </p>
                <p>
                  Svarīgi gingivītu atšķirt no periodontīta, zoba saknes iekaisuma un abscesa. Gingivīts
                  aprobežojas ar smaganām un nebojā zobu turošo kaulu. Periodontīta laikā iekaisums skar
                  dziļākos atbalsta audus, savukārt zoba saknes iekaisums visbiežāk saistīts ar infekciju zoba
                  iekšpusē vai ap saknes galu. Smaganu iekaisums un abscess arī nav vienādi stāvokļi.
                </p>
              </div>

              <h3 className="font-semibold text-darkblue-700 mt-6 mb-3">Kas palielina gingivīta risku?</h3>
              <p className="text-slate-700 leading-relaxed">
                Smaganu reakciju un aplikuma uzkrāšanos var pastiprināt smēķēšana, mutes sausums, nekontrolēts
                cukura diabēts, hormonālās izmaiņas, atsevišķas zāles, zobu saspiestība, ortodontiskās aparatūras vai
                neprecīzas plombu un protēžu malas. Tomēr biežākais gingivīta cēlonis paliek nepietiekami noņemtais
                bakteriālais aplikums.
              </p>
            </div>
          </motion.section>

          {/* SIMPTOMAI */}
          <motion.section id="simptomai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādi simptomi var liecināt par smaganu iekaisumu?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Gingivīta simptomi var būt nelieli, tāpēc slimība dažreiz tiek pamanīta tikai profilaktiskās apskates
                vai profesionālās mutes higiēnas laikā. Sāpju neesamība nenozīmē, ka smaganas ir veselas.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Biežākās smaganu iekaisuma pazīmes:</h3>

                <div className="grid gap-3">
                  {[
                    'smaganu asiņošana, tīrot zobus vai starpzobus',
                    'pietvīkušas, tumšākas vai spīdīgas smaganas',
                    'smaganu pietūkums un piebriedums',
                    'palielināta jutība pieskaroties',
                    'izmainījies smaganu kontūrs',
                    'nepatīkama mutes smaka',
                    'nepatīkama garša mutē',
                    'redzams aplikums vai zobakmens pie smaganu malas'
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
                  Veselām smaganām nebūtu regulāri jāasiņo. Vienreizēju asiņošanu var izraisīt mehānisks
                  savainojums, bet bieži atkārtota asiņošana parasti liecina par iekaisumu vai nepareizu tīrīšanas
                  tehniku. Izvairoties tīrīt asiņojošo vietu, tajā paliek vairāk aplikuma, tāpēc iekaisums var
                  pastiprināties.
                </p>
                <p>
                  Smaganu atkāpšanās, kļūstošās dziļākas periodonta kabatas, zobu kustīgums, strutas starp zobu un
                  smaganām vai sakodiena izmaiņas nav tipiskas parastam gingivītam. Šādas pazīmes var liecināt par
                  periodontītu, abscesu vai citu dziļāku problēmu.
                </p>
                <p>
                  Meklētājā lietotās frāzes „smaganu iekaisums abscess" vai „abscess smaganu iekaisums" bieži
                  apraksta lokālu pietūkumu. Tomēr parasts gingivīts strutu uzkrāšanos parasti neizraisa. Parādoties
                  strutainam mezglam, stiprām sāpēm, sejas pietūkumam, drudzim, rīšanas vai elpošanas grūtībām,
                  jāgriežas steidzami.
                </p>
              </div>
            </div>
          </motion.section>

          {/* GYDYMAS */}
          <motion.section id="gydymas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā tiek ārstēts smaganu iekaisums?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Gingivīta ārstēšana sākas ar tā cēloņa noteikšanu. Visbiežāk svarīgākais ir noņemt bakteriālo
                aplikumu un zobakmeni, uzlabot ikdienas mutes higiēnu un kontrolēt faktorus, kas veicina
                aplikuma uzkrāšanos.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Smaganu un mutes stāvokļa novērtēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek apskatītas smaganas, zobi, starpzobi un esošās restaurācijas. Tiek novērtēta smaganu krāsa,
                    pietūkums, asiņošana, aplikuma un zobakmens daudzums. Tāpat tiek apspriesti pacienta higiēnas
                    paradumi, smēķēšana, lietotās zāles un vispārējās slimības. Ja nepieciešams, tiek izmērītas
                    periodonta kabatas un novērtēts klīniskā piestiprinājuma līmenis. Radioloģiskā izmeklēšana
                    tiek veikta tad, kad nepieciešams novērtēt kaula stāvokli vai izslēgt periodontītu.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Aplikuma un zobakmens noņemšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Profesionālās mutes higiēnas laikā tiek noņemts mīkstais aplikums, virs smaganām izveidojies
                    zobakmens un virsmas pigmentācija. Zobu virsmas tiek notīrītas un, kad nepieciešams, pulētas,
                    lai pacientam būtu vieglāk uzturēt pareizu higiēnu mājās. Ja tiek konstatēts dziļāks periodonta
                    bojājums un zem smaganām uzkrājies zobakmens, var būt nepieciešama detalizētāka periodontoloģiskā
                    ārstēšana. Tā vairs nav tikai parasta gingivīta ārstēšana.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Individuālo mutes higiēnas paradumu koriģēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pacientam tiek parādīts, kā pareizi tīrīt zobus pie smaganu malas un starpzobus. Līdzekļi tiek
                    izvēlēti atbilstoši zobu novietojumam, starpzobu izmēram, esošajiem implantiem, protēzēm vai
                    ortodontiskajām aparatūrām. Zobus svarīgi tīrīt divas reizes dienā, tomēr tikai suka nav
                    pietiekami. Starpzobi jātīra katru dienu ar individuāli izvēlētām starpzobu sukām, diegu vai
                    citu piemērotu līdzekli. Mutes irigators var būt papildu palīgs, taču ne vienmēr aizstāj
                    mehānisko starpzobu tīrīšanu.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Iekaisumu uzturošo faktoru kontrole</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tiek novērtēts, vai aplikuma uzkrāšanos neveicina neprecīzas plombu malas, slikti pielāgotas
                    protēzes, zobu saspiestība, breketes vai mutes sausums. Ja nepieciešams, tiek plānota
                    restaurāciju koriģēšana vai cita papildu ārstēšana. Mutes skalošanas šķidrums vai antiseptiskie
                    līdzekļi var tikt nozīmēti kā pagaidu papildu ārstēšanas daļa, taču tie neaizstāj mehānisko
                    aplikuma noņemšanu. Antibiotikas parastam aplikuma izraisītam gingivītam parasti nav
                    nepieciešamas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Smaganu stāvokļa kontroles novērtējums</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pēc ārstēšanas tiek novērtēts, vai samazinājusies asiņošana, pietūkums un aplikuma daudzums. Ja
                    simptomi saglabājas, neskatoties uz labu higiēnu, var būt nepieciešama papildu izmeklēšana
                    saistībā ar periodontītu, zāļu ietekmi, sistēmiskām slimībām vai retākiem smaganu stāvokļiem.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Ārstēšanas ilgums ir atkarīgs no iekaisuma intensitātes, zobakmens daudzuma, pacienta higiēnas
                paradumiem un citiem riska faktoriem. Viena universāla termiņa, kurā smaganām pilnībā jāizveseļojas,
                nav.
              </p>
            </div>
          </motion.section>

          {/* PRIEŽIŪRA */}
          <motion.section id="prieziura" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā kopt smaganas pēc ārstēšanas un izvairīties no iekaisuma atkārtošanās?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Smaganu iekaisuma ārstēšana nebeidzas ar profesionālu aplikuma noņemšanu. Ja ikdienas higiēna
                  saglabājas nepietiekama, bakteriālā bioplēve atkal sāk uzkrāties un gingivīts var atkārtoties.
                </p>
                <p>
                  Zobi jātīra rūpīgi, bet ne pārāk spēcīgi, īpašu uzmanību pievēršot zobu un smaganu robežai.
                  Asiņojošās vietas nav jāignorē vai jāpārtrauc tīrīt – tās svarīgi kopt maigi un regulāri.
                </p>
                <p>
                  Starpzobu kopšana ir tikpat svarīga kā tīrīšana ar suku. Nepareizi izvēlēts līdzeklis var
                  nenoņemt aplikumu vai traumēt smaganas, tāpēc noderīgi konsultēties ar mutes higiēnistu.
                </p>
                <p>
                  Profesionālās mutes higiēnas biežums tiek izvēlēts individuāli. Tas ir atkarīgs no aplikuma
                  uzkrāšanās, smaganu stāvokļa, periodontīta riska, smēķēšanas, implantiem, ortodontiskajām
                  aparatūrām un pacienta spējas kopt muti mājās.
                </p>
                <p>
                  Smēķēšanas atmešana, pietiekama šķidruma uzņemšana un labi kontrolētas vispārējās slimības arī ir
                  svarīgas, taču tās neaizstāj ikdienas mehānisko aplikuma tīrīšanu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* MITAI */}
          <motion.section id="mitai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Biežākie mīti par gingivītu</h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Asiņojošas smaganas nedrīkst tīrīt</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Nepatiesi. Visbiežāk asiņošanu izraisa aplikuma uzturēts iekaisums. Pārtraucot tīrīt zobus un
                    starpzobus, aplikuma daudzums pieaug. Tīrīt vajag maigi, taču rūpīgi.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gingivīts vienmēr izraisa sāpes</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gingivīts bieži ir bez sāpēm. Pirmās pazīmes parasti ir asiņošana, pietvīkums, pietūkums vai
                    nepatīkama mutes smaka.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Mutes skalošanas šķidrums var izārstēt gingivītu</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Skalošanas līdzeklis var būt papildu ārstēšanas daļa, taču tas nenoņem pie zobiem pielipušo
                    bioplēvi un zobakmeni. Galvenā ārstēšana ir mehāniska aplikuma noņemšana.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gingivīts vienmēr pāraug par periodontītu</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Neārstēts gingivīts var radīt apstākļus periodontīta attīstībai, taču progresēšana nav vienāda
                    visiem pacientiem. To ietekmē aplikuma kontrole, smēķēšana, vispārējā veselība un individuālā
                    nosliece.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section id="faq" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Biežāk uzdotie jautājumi par smaganu iekaisumu</h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Vai gingivīts ir izārstējams?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Aplikuma izraisīts gingivīts visbiežāk ir atgriezenisks. Noņemot aplikumu un zobakmeni, kā arī
                    uzlabojot ikdienas higiēnu, smaganu stāvoklis var būtiski uzlaboties.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Vai smaganu iekaisums var pāriet pats no sevis?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Ja aplikums un zobakmens netiek noņemti, iekaisums visbiežāk saglabājas. Īslaicīga asiņošanas
                    samazināšanās nebūt nenozīmē, ka smaganas ir izveseļojušās.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Vai gingivīts var pāraugt par periodontītu?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Jā, neārstēts iekaisums daļai pacientu var progresēt līdz periodontītam. Tā laikā tiek bojāti
                    zobu turošie audi un kauls, tāpēc agrīna diagnostika ir svarīga.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Vai gingivīts ir tas pats, kas zoba saknes iekaisums?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nē. Gingivīts skar smaganas, savukārt zoba saknes iekaisums visbiežāk saistīts ar infekciju
                    zoba pulpā, sakņu kanālos vai ap saknes galu. Šo stāvokļu ārstēšana atšķiras.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Kad smaganu iekaisuma dēļ jāgriežas steidzami?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Steidzama palīdzība nepieciešama, ja parādās stipras sāpes, strutas, izteikts lokāls vai sejas
                    pietūkums, drudzis, vispārējs vājums, apgrūtināta rīšana, elpošana vai mutes atvēršana. Šādi
                    simptomi nav raksturīgi parastam gingivītam.
                  </p>
                </div>
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
                  Ārstējot smaganu iekaisumu, svarīgi ne tikai mazināt asiņošanu, pietūkumu vai citus simptomus, bet
                  arī noteikt cēloņus, kas uztur iekaisuma procesu. Bangų zobārstniecības klīnikā Klaipēdā
                  gingivīta ārstēšana tiek plānota individuāli, novērtējot pacienta smaganu stāvokli, aplikuma un
                  zobakmens daudzumu, mutes higiēnas paradumus, esošās restaurācijas un vispārējo mutes veselību.
                </p>
                <p>
                  Klīnikā liela uzmanība tiek pievērsta precīzai smaganu stāvokļa novērtēšanai. Pirms ārstēšanas
                  uzsākšanas tiek noteikts, vai simptomus izraisa aplikuma izraisīts gingivīts vai ir nepieciešama
                  detalizētāka izmeklēšana saistībā ar periodontītu, zoba saknes iekaisumu, abscesu vai citu mutes
                  stāvokli. Pacientam skaidri tiek izskaidrota ārstēšanas gaita, profesionālās mutes higiēnas
                  nepieciešamība, ikdienas kopšanas principi un iekaisuma atkārtošanās risku mazinošie pasākumi.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā tiek tiekts ne tikai uzlabot esošo smaganu stāvokli, bet arī
                  radīt apstākļus ilgtermiņa iekaisuma kontrolei. Pēc ārstēšanas pacientam tiek izvēlēti piemēroti
                  mutes higiēnas līdzekļi, sniegti skaidri ieteikumi par zobu un starpzobu tīrīšanu, kā arī
                  individuāli tiek noteikts kontroles vizīšu biežums.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties smaganu iekaisuma ārstēšanai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja pamanījāt smaganu asiņošanu, pietūkumu vai citas iekaisuma pazīmes, aicinām pierakstīties
                  konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts Jūsu smaganu stāvoklis un
                  ieplānota vispiemērotākā ārstēšana.
                </p>
                <p>
                  Pierakstieties un parūpējieties par savu smaganu veselību laikus un profesionāli.
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
