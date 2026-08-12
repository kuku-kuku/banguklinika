import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from 'react'
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

function ToothIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

const tocSections = [
  { id: "cenas", label: "Cenas" },
  { id: "kas-ir", label: "Kas ir mutes higiēna?" },
  { id: "airflow", label: "AIRFLOW® tehnoloģija" },
  { id: "kapec-izveleties", label: "Kāpēc izvēlēties?" },
  { id: "kad-nepieciesama", label: "Kad īpaši nepieciešama?" },
  { id: "process", label: "Kā tiek veikta?" },
  { id: "pec-higienas", label: "Pēc higiēnas" },
  { id: "miti", label: "Mīti" },
]

export default function MutesHigiennaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/mutes-higiena/#service`,
    "name": "Mutes higiēna Klaipēdā",
    "serviceType": "Profesionāla mutes higiēna",
    "description": "Profesionāla mutes higiēna tiek sniegta Bangų zobārstniecības klīnikā Klaipēdā. Pakalpojums palīdz uzturēt veselus zobus un smaganas.",
    "url": `${SITE_URL}/lv/pakalpojumi/mutes-higiena/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Mutes higiēna Klaipēdā ar AIRFLOW®"
        description="Profesionāla mutes higiēna Klaipēdā ar labu cenu. Noņemiet aplikumus, samaziniet smaganu problēmu risku un uzturiet veselīgu smaidu Bangų klīnikā."
        keywords="mutes higiēna, airflow, zobu tīrīšana, zobakmens noņemšana, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/mutes-higiena`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/burnos-higiena` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/mutes-higiena` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/burnos-higiena` },
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

          {/* HERO HEADER */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Mutes higiēna Klaipēdā ar AIRFLOW® tehnoloģiju
            </h1>

            <div className="mb-8">
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Pat rūpīgi tīrot zobus mājās ikdienā, suka un starpzobu diegs nesasniedz visas mutes vietas. Ar laiku uzkrājušies aplikumi un zobakmeņi var izraisīt kariesu, smaganu iekaisumu vai nepatīkamu mutes smaku. Tieši tāpēc profesionāla mutes higiēna ir viena no svarīgākajām profilaktiskām procedūrām, kas palīdz saglabāt veselus zobus un smaganas.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā mutes higiēna tiek veikta, izmantojot moderno AIRFLOW® tehnoloģiju. Procedūras laikā zobi tiek ne tikai rūpīgi iztīrīti, bet arī kļūst gaišāki, gludāki un svaigāki. Tas ir drošs un efektīvs risinājums gan profilaksei, gan pirms citām zobārstniecības procedūrām.
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
                      Mutes higiēnas cenas
                    </h2>
                    <p className="text-slate-600">
                      Profesionālas mutes higiēnas cena atkarīga no individuālā pacienta mutes stāvokļa, aplikumu daudzuma un izvēlētajām papildu procedūrām.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Higiēnas procedūras</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Pilna profesionāla mutes higiēna', '60 – 80 €'],
                        ['Atkārtota mutes higiēna (regulāri apmeklējot)', 'no 50 €'],
                      ].map(([name, price], i) => (
                        <div key={i} className="flex justify-between items-center py-2.5">
                          <span className="text-slate-600 text-sm">{name}</span>
                          <span className="font-bold text-sm shrink-0 ml-3" style={{ color: P }}>{price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Papildu procedūras</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Fluora lakas aplikācija', 'no 20 €'],
                        ['ICON ārstēšana (fluorozes plankumiem)', '60 €'],
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
                  Precīzs procedūras apjoms un galīgā cena tiek apspriesta individuālas konsultācijas laikā, ņemot vērā pacienta vajadzības un mutes stāvokli.
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
                    Aicinām reģistrēties profesionālai mutes higiēnai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja meklējat uzticamu un profesionālu zobārstniecības klīniku Klaipēdā, aicinām apmeklēt Bangų zobārstniecības klīniku. Pacientu uzticību mūsu sniegtajiem pakalpojumiem apstiprina pozitīvās atsauksmes, kurās bieži tiek minēts procedūras maigums, skaidra situācijas apkopošana un iepriecinošs ilgtermiņa rezultāts. Šeit Jūs sagaida modernas tehnoloģijas, pieredzējuši speciālisti un individuāla pieeja katram pacientam.
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
                <div className="relative aspect-[4/5] bg-sky-50">                  <img
                    src="/team/Rūta_light%20LV.jpg"
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

          {/* KAS IR HIGIĒNA */}
          <motion.section id="kas-ir" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas ir profesionāla mutes higiēna?
              </h2>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className={innerCard}>
                  <ToothIcon />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Profesionāla mutes higiēna ir speciālista veikta procedūra, kuras laikā no zobu virsmām, starpzobu telpām un zem smaganām tiek noņemti mīkstie aplikumi, zobakmeņi un pigmenta plankumi.
                  </p>
                </div>
                <div className={innerCard}>
                  <ShieldIcon />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Ar laiku aplikumi mineralizējas un pārvēršas par zobakmeņiem. Tas rada labvēlīgu vidi baktērijām, kas var izraisīt smaganu iekaisumu un periodonta slimības. Higiēna ir svarīgākā profilakses ierīce.
                  </p>
                </div>
                <div className={innerCard}>
                  <ClockIcon />
                  <p className="text-sm text-slate-700 leading-relaxed">
                    Regulāri veikta zobu higiēna palīdz uzturēt veselas smaganas un samazina kariesa risku. Visbiežāk procedūra ir ieteicama ik pēc 6 mēnešiem, un problēmu gadījumā — biežāk.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* AIRFLOW TEHNOLOĢIJA */}
          <motion.section id="airflow" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas ir AIRFLOW® tehnoloģija?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  AIRFLOW® ir moderna zobu aplikumu noņemšanas tehnoloģija, kuras laikā tiek izmantots gaisa, ūdens un speciālas sodas maisījums. Šī metode ļauj maigi, taču īpaši precīzi noņemt mīkstos aplikumus un pigmenta plankumus pat grūti sasniedzamās vietās.
                </p>
                <p>
                  AIRFLOW® tehnoloģija īpaši piemērota pacientiem, kuriem ir implanti, plombas, kronīši vai protēzes, jo procedūra ir droša zobu emaljai un restaurācijām. Komforta un efektivitātes dēļ šī tehnoloģija bieži tiek izvēlēta gan regulārai profilaksei, gan kā palīgierīce, ārstējot smaganu slimības.
                </p>
                <p>
                  AIRFLOW® arī palīdz atjaunot dabisko zobu nokrāsu un nodrošina ilgāk saglabājošos tīrības sajūtu pēc profesionālas mutes higiēnas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* IEGUVUMS */}
          <motion.section id="kapec-izveleties" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc izvēlēties profesionālu mutes higiēnu?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Profesionāla mutes higiēna ir ne tikai estētiska, bet arī ārstējoša un profilaktiska procedūra. Regulāra aplikumu un zobakmeņu noņemšana palīdz izvairīties no daudzām mutes slimībām, kas bieži attīstās nepamanāmi un ar laiku izraisa nopietnas komplikācijas. Bangų zobārstniecības klīnikā Klaipēdā veiktā zobu higiēna orientēta uz ilgtermiņa rezultātu.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {[
                  "Tiek noņemti neredzamie aplikumi zem smaganām un starpzobu telpās",
                  "Tiek notīrīti zobakmeņi — gingivīta iemesls",
                  "Tiek pulētas zobu virsmas (zobi kļūst gludāki un baltāki)",
                  "Uzlabojas mutes smaka",
                  "Samazinās agrīnas zobu zaudēšanas risks",
                  "Tiek sniegti individuāli higiēnas padomi"
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-0.5"><CheckIcon /></span>
                    <span className="text-slate-700 text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed">
                Šī procedūra ir īpaši svarīga pacientiem, kuri vēlas ne tikai skaistu smaidu, bet arī ilgtermiņa mutes veselību. Regulāra profesionāla higiēna palīdz izvairīties no sarežģītām un dārgām ārstēšanas stadijām nākotnē.
              </p>
            </div>
          </motion.section>

          {/* KAD NEPIECIEŠAMA */}
          <motion.section id="kad-nepieciesama" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kad profesionāla mutes higiēna ir īpaši nepieciešama?
              </h2>

              <div className={innerCard}>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Pacientiem, kuri pamana asiņojošas smaganas, nepatīkamu smaku vai jutīgumu.</li>
                  <li>Cilvēkiem ar implantiem, tiltiem, kronīšiem vai protēzēm (ilgmūžības nodrošināšanai).</li>
                  <li>Cilvēkiem, kuri valkā ortodontiskās ierīces (kad higiēna ir sarežģītāka).</li>
                  <li>Smēķētājiem vai tiem, kuri bieži lieto kafiju un tēju.</li>
                  <li>Pirms zobu balināšanas, plombēšanas vai protezēšanas.</li>
                  <li>Kā regulāra profilakse ik pēc 6 mēnešiem (vai ik pēc 3 mēnešiem, ja ir problēmas).</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* GAITA */}
          <motion.section id="process" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kā tiek veikta mutes higiēna ar AIRFLOW® tehnoloģiju?
              </h2>

              <div className="space-y-6">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                    <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">1</span>
                    Zobakmeņu noņemšana ar ultraskaņas skaleri
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Procedūra sākas ar zobakmeņu noņemšanu, izmantojot ultraskaņas skaleri. Šī ierīce ar vibrāciju palīdzību efektīvi sadala un noņem cietos aplikumus no zobu virsmām un zem smaganām, nebojājot emalju.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                    <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">2</span>
                    Aplikumu noņemšana ar AIRFLOW® metodi
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Tālāk tiek veikta zobu tīrīšana ar AIRFLOW® ierīci. Izmantotais gaisa, ūdens un speciālas sodas maisījums ļauj maigi noņemt mīkstos aplikumus un pigmenta plankumus pat grūti sasniedzamās vietās. Šis posms īpaši tiek novērtēts komforta un manāma estētiska rezultāta dēļ.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                    <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">3</span>
                    Zobu pulēšana ar speciālu pastu
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Procedūra tiek pabeigta ar zobu pulēšanu ar speciālu pastu. Pulēta zobu virsma kļūst gludāka, tāpēc aplikumi uzkrājas lēnāk, un zobi ilgāk saglabājas tīri un mirdzoši.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PĒC PROCEDŪRAS */}
          <motion.section id="pec-higienas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kas svarīgi zināt pēc profesionālas mutes higiēnas?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Pēc profesionālas mutes higiēnas vairums pacientu jau uzreiz pamana tīrības, svaiguma un vieglumu sajūtu mutē. Zobu virsmas kļūst gludākas, vizuāli gaišākas, un mutes smaka — patīkamāka. Dažos gadījumos, īpaši, ja bija daudz zobakmeņu vai jutīgas smaganas, uz īsu brīdi var izpausties neliels smaganu jutīgums vai asiņošana — tā ir normāla un īslaicīga organisma reakcija.
              </p>

              <div className={innerCard + ' mb-6'}>
                <h3 className="font-semibold text-darkblue-700 mb-3">Ieteikumi rezultāta saglabāšanai:</h3>
                <ul className="list-disc pl-5 space-y-2 text-slate-700">
                  <li>Ievērot individuālus higiēnista padomus.</li>
                  <li>Tīrīt zobus vismaz 2 reizes dienā, lietot starpzobu diegu/sukas.</li>
                  <li>Pirmās stundas izvairīties no krāsojošiem produktiem (kafijas, vīna, tējas).</li>
                  <li>Apmeklēt higiēnai ik pēc 6 mēnešiem (vai biežāk).</li>
                </ul>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Pareiza ikdienas mutes kopšana un regulāras profilaktiskas vizītes palīdz ne tikai saglabāt tīrus zobus, bet arī pasargā no smaganu slimībām un sarežģītas ārstēšanas nākotnē.
              </p>
            </div>
          </motion.section>

          {/* MĪTI */}
          <motion.section id="miti" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Biežākie mīti par profesionālu mutes higiēnu
              </h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts #1: higiēna bojā emalju</h3>
                  <p className="text-slate-600 text-sm">Tas ir viens no biežākajiem kļūdainajiem uzskatiem. Profesionālas mutes higiēnas laikā izmantotās ierīces un tehnoloģijas ir pielāgotas drošai aplikumu un zobakmeņu noņemšanai, nebojājot emalju. AIRFLOW® tehnoloģija darbojas maigi un precīzi, tāpēc zobu virsmas pēc procedūras saglabājas gludas un nebojātas.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts #2: procedūra ir sāpīga</h3>
                  <p className="text-slate-600 text-sm">Vairums pacientu profesionālu mutes higiēnu apraksta kā ērtu procedūru. Iespējams tikai neliels diskomforts, īpaši, ja bija daudz zobakmeņu vai jutīgas smaganas, taču šī sajūta ir īslaicīga. Procedūras gaita vienmēr tiek pielāgota individuāli, ņemot vērā pacienta pašsajūtu.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts #3: pietiek tīrīt zobus mājās</h3>
                  <p className="text-slate-600 text-sm">Ikdienas mutes kopšana ir nepieciešama, taču tā nevar pilnīgi aizvietot profesionālu mutes higiēnu. Pat rūpīgi tīrot zobus mājās, ne visas vietas ir sasniedzamas ar suku vai diegu. Profesionālas procedūras laikā tiek noņemti aplikumi no grūti pieejamām zonām, kas ar laiku var izraisīt smaganu slimības.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts #4: higiēna nepieciešama tikai tad, kad sāp</h3>
                  <p className="text-slate-600 text-sm">Mutes slimības bieži attīstās nepamanāmi un bez sāpēm. Asiņojošas smaganas, nepatīkama smaka vai zobu jutīgums var būt agrīni signāli, ka nepieciešama profesionāla higiēna. Regulāra procedūra ļauj novērst problēmas jau pirms to izpausmes.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Mīts #5: higiēna tikai skaistuma dēļ</h3>
                  <p className="text-slate-600 text-sm">Lai gan pēc procedūras zobi izskatās tīrāki un gaišāki, profesionālas mutes higiēnas galvenais mērķis ir mutes veselības uzturēšana. Procedūra palīdz samazināt kariesa, smaganu iekaisuma un periodonta slimību risku un saglabāt dabiskos zobus ilgu laiku.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* KĀPĒC MĒS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Izvēloties zobārstniecības klīniku, svarīga ir ne tikai pati procedūra, bet arī tas, kas to veic, kādos apstākļos un ar kādu pieeju pacientam. Bangų zobārstniecības klīnikā profesionāla mutes higiēna tiek veikta, ievērojot augstus medicīniskos standartus, apvienojot progresīvas tehnoloģijas un individuālu uzmanību katram pacientam.
                </p>
                <p>
                  Klīnikā strādājošie speciālisti pastāvīgi pilnveido savu kvalifikāciju un piemēro mūsdienīgus, zinātniski pamatotus risinājumus. Mutes higiēna tiek veikta, izmantojot moderno AIRFLOW® tehnoloģiju, kas nodrošina ne tikai efektīvu aplikumu noņemšanu, bet arī komfortu procedūras laikā. Tas ir īpaši svarīgi pacientiem, kuri novērtē maigu, drošu un ilgtermiņa rezultātu.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā īpaša uzmanība tiek pievērsta individuālai pieejai. Pirms procedūras tiek novērtēts pacienta mutes stāvoklis, smaganu jutīgums, esošās restaurācijas vai implanti, un procedūras apjoms un biežums tiek pielāgots konkrētām vajadzībām. Pēc mutes higiēnas pacientam tiek sniegti skaidri un praktiski ieteikumi, kas palīdz uzturēt rezultātu ikdienas kopšanā.
                </p>
                <p>
                  Svarīgs klīnikas priekšrocība — skaidra komunikācija un caurspīdība. Pacienti iepriekš tiek iepazīstināti ar procedūras gaitu, iespējamām sajūtām un cenu politiku. Tas palīdz justies droši, pārliecināti un bez lieka stresa.
                </p>
                <p>
                  Izvēloties Bangų zobārstniecības klīniku Klaipēdā, pacienti izvēlas ne tikai profesionālu mutes higiēnu, bet arī uzticamu partneri ilgtermiņa mutes veselības uzturēšanai.
                </p>
              </div>
            </div>
          </motion.section>

        </div>
      </motion.div>
    </AnimatedSection>
  )
}
