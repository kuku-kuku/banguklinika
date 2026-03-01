import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { TableOfContents } from '../../components/TableOfContents'
import { SITE_URL } from '../../i18n/lv'

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

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
  { id: "kapec-vertigi", label: "Kāpēc vērts?" },
  { id: "kad-nepieciesama", label: "Kad īpaši nepieciešama?" },
  { id: "ka-notiek", label: "Procedūras gaita" },
  { id: "pec-proceduras", label: "Pēc procedūras" },
  { id: "miti", label: "Biežākie mīti" },
]

export default function MutesHigiennaLv() {
  const pageRef = useRef(null)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Profesionāla mutes higiēna",
    "description": "Mutes higiēna ar AIRFLOW tehnoloģiju Klaipēdā.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klīnika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Mutes (zobu) higiēna Klaipēdā | Cena ar akciju | Labākās atsauksmes — Bangų klīnika"
        description="Profesionāla mutes higiēna ar AIRFLOW® tehnoloģiju. Noņemam zobakmeni, aplikumus un atjaunojam zobiem dabīgo baltumu. Pierakstieties vizītam Klaipēdā."
        keywords="mutes higiēna, airflow, zobu tīrīšana, zobakmens noņemšana, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/mutes-higiena`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/burnos-higiena` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/mutes-higiena` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/burnos-higiena` },
        ]}
        structuredData={structuredData}
      />

      <motion.div ref={pageRef} className="max-w-screen-2xl mx-auto px-4 2xl:flex 2xl:gap-8 2xl:items-start" variants={container} initial="hidden" animate="visible">
          <TableOfContents sections={tocSections} title="Saturs" rootRef={pageRef} />
          <div className="min-w-0 flex-1">

        <motion.header className="mb-10 text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionāla mutes higiēna Klaipēdā ar AIRFLOW® tehnoloģiju
          </h1>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Pat katru dienu rūpīgi tīrot zobus mājās, birste un starpzobu diegi nesasniedz visas mutes vietas. Laika gaitā veidojušies aplikumi un zobakmens var izraisīt karieso, smaganu iekaisumu vai nepatīkamu mutes smaržu. Tieši tāpēc profesionāla mutes higiēna ir viena no svarīgākajām profilaktiskajām procedūrām, kas palīdz saglabāt veselus zobus un smaganas.
            </p>
            <p>
              Bangų zobārstniecības klīnikā Klaipēdā mutes higiēna tiek veikta, izmantojot moderno AIRFLOW® tehnoloģiju. Procedūras laikā zobi ne tikai rūpīgi tiek iztīrīti, bet arī kļūst gaišāki, gludi, svaigāki. Tas ir drošs un efektīvs risinājums gan profilaksei, gan pirms citām zobārstnieciskām procedūrām.
            </p>
          </div>

          <div className="flex justify-start">
            <Link to="/lv/kontakti" className="btn-primary rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
              Pierakstīties vizītam
            </Link>
          </div>

          <div id="cenas" className="mt-8 scroll-mt-36 2xl:scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Mutes higiēnas pakalpojumu cenas mūsu klīnikā
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
             <p>
               Profesionālās mutes higiēnas cena ir atkarīga no pacienta individuālā mutes stāvokļa, aplikumu daudzuma un izvēlētajām papildu procedūrām.
             </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            <div className="divide-y divide-slate-100">
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700 font-medium">Pilna profesionālā mutes higiēna</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">60 – 80 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700 font-medium">Atkārtota mutes higiēna (regulāri apmeklējot)</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 50 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700 font-medium">Fluora laka aplikācija</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 20 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700 font-medium">ICON ārstēšana (fluorozes plankumiem)</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">60 €</span>
              </div>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed text-sm">
            Precīzs procedūras apjoms un galīgā cena tiek apspriesta individuālas konsultācijas laikā, ņemot vērā pacienta vajadzības un mutes stāvokli.
          </p>
          </div>
        </motion.header>

        <motion.section id="kas-ir" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kas ir profesionāla mutes higiēna?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ToothIcon />
              <p className="text-sm text-slate-700 leading-relaxed">
                Profesionāla mutes higiēna – tā ir speciālista veikta procedūra, kuras laikā no zobu virsmām, starpzobiem un zem smaganām tiek noņemti mīkstie aplikumi, zobakmens un pigmenta plankumi.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ShieldIcon />
              <p className="text-sm text-slate-700 leading-relaxed">
                Laika gaitā aplikumi mineralizējas un pārvēršas par zobakmeni. Tas rada labvēlīgu vidi baktērijām, kas var izraisīt smaganu iekaisumu un parodonta slimības. Higiēna ir vissvarīgākais profilakses līdzeklis.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ClockIcon />
              <p className="text-sm text-slate-700 leading-relaxed">
                Regulāri veikta zobu higiēna palīdz uzturēt veselīgas smaganas un samazina kariesa risku. Visbiežāk procedūra tiek ieteikta ik pēc 6 mēnešiem, bet problēmu gadījumā – biežāk.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section id="airflow" className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas ir AIRFLOW® tehnoloģija?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              AIRFLOW® – tā ir moderna zobu aplikumu noņemšanas tehnoloģija, kuras laikā tiek izmantots gaisa, ūdens un speciālās sodas maisījums. Šī metode ļauj maigi, bet ārkārtīgi precīzi noņemt mīkstos aplikumus un pigmenta plankumus pat grūti sasniedzamās vietās.
            </p>
            <p>
              AIRFLOW® tehnoloģija ir īpaši piemērota pacientiem ar implantiem, plombām, kronīšiem vai protēzēm, jo procedūra ir droša zobu emaljai un restaurācijām. Komforta un efektivitātes dēļ šī tehnoloģija bieži tiek izvēlēta gan regulārai profilaksei, gan kā palīglīdzeklis smaganu slimību ārstēšanā.
            </p>
            <p>
              AIRFLOW® palīdz arī atjaunot dabīgo zobu toni un nodrošina ilgāk saglabājušos tīrības sajūtu pēc profesionālās mutes higiēnas.
            </p>
          </div>
        </motion.section>

        <motion.section id="kapec-vertigi" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kāpēc vērts izvēlēties profesionālu mutes higiēnu?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Profesionāla mutes higiēna ir ne tikai estētiska, bet arī ārstnieciska un profilaktiska procedūra. Regulāra aplikumu un zobakmens noņemšana palīdz izvairīties no daudzām mutes slimībām, kas bieži attīstās nepamanīti un laika gaitā rada nopietnas komplikācijas. Bangų zobārstniecības klīnikā Klaipēdā veiktā zobu higiēna ir orientēta uz ilgtermiņa rezultātu.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Tiek noņemti neredzamie aplikumi zem smaganām un starpzobos",
              "Tiek noņemts zobakmens – gingivīta cēlonis",
              "Tiek pulētas zobu virsmas (zobi kļūst gludi un baltāki)",
              "Uzlabojas mutes smarža",
              "Samazinās agrīnas zobu zaudēšanas risks",
              "Tiek sniegti individuāli higiēnas padomi"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                <span className="mt-0.5"><CheckIcon /></span>
                <span className="text-slate-700 text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-700 mt-4 leading-relaxed">
            Šī procedūra ir īpaši svarīga pacientiem, kuri vēlas ne tikai skaistu smaidu, bet arī ilgtermiņa mutes veselību. Regulāra profesionāla higiēna palīdz izvairīties no sarežģītiem un dārgiem ārstēšanas etapiem nākotnē.
          </p>
        </motion.section>

        <motion.section id="kad-nepieciesama" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kad profesionāla mutes higiēna ir īpaši nepieciešama?
          </h2>
          <div className="bg-brand-50/30 p-6 rounded-2xl border border-brand/10">
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Pacientiem, kuri pamana asiņojošas smaganas, nepatīkamu smaržu vai jutīgumu.</li>
              <li>Tiem, kam ir implanti, tilti, kronīši vai protēzes (ilgmūžības nodrošināšanai).</li>
              <li>Tiem, kas nēsā ortodontiskos aparātus (kad higiēna ir sarežģītāka).</li>
              <li>Smēķētājiem vai tiem, kas bieži lieto kafiju, tēju.</li>
              <li>Pirms zobu balināšanas, plombēšanas vai protezēšanas.</li>
              <li>Kā regulāru profilaksi ik pēc 6 mēnešiem (vai ik pēc 3 mēnešiem problēmu gadījumā).</li>
            </ul>
          </div>
        </motion.section>

        <motion.section id="ka-notiek" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kā tiek veikta mutes higiēna ar AIRFLOW® tehnoloģiju?
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">1</span>
                Zobakmens noņemšana ar ultraskaņas skaleri
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Procedūra sākas ar zobakmens noņemšanu, izmantojot ultraskaņas skaleri. Šī ierīce ar vibrāciju palīdzību efektīvi sadala un noņem cietajus aplikumus no zobu virsmām un zem smaganām, nesabojājot emalju.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">2</span>
                Aplikumu noņemšana ar AIRFLOW® metodi
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Tālāk tiek veikta zobu tīrīšana ar AIRFLOW® aparātu. Gaisa, ūdens un speciālās sodas maisījums ļauj maigi noņemt mīkstos aplikumus un pigmenta plankumus pat grūti sasniedzamās vietās. Šis etaps tiek īpaši novērtēts komforta un redzamā estētiskā rezultāta dēļ.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">3</span>
                Zobu pulēšana ar speciālu pastu
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Procedūra tiek pabeigta ar zobu pulēšanu ar speciālu pastu. Pulēta zobu virsma kļūst gluda, tāpēc aplikumi uzkrājas lēnāk, un zobi ilgāk paliek tīri un spīdīgi.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section id="pec-proceduras" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Ko ir svarīgi zināt pēc profesionālās mutes higiēnas?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
             <p>
               Pēc profesionālās mutes higiēnas lielākā daļa pacientu uzreiz pamana tīrības, svaiguma un viegluma sajūtu mutē. Zobu virsmas kļūst gludi, vizuāli gaišākas, bet mutes smarža – patīkamāka. Dažos gadījumos, īpaši, ja bijis daudz zobakmens vai jutīgas smaganas, īslaicīgi var parādīties neliels smaganu jutīgums vai asiņošana – tā ir normāla un pārejoša organisma reakcija.
             </p>
             <div className="bg-brand-50/30 p-6 rounded-xl border border-brand/10">
               <h3 className="font-semibold text-darkblue-700 mb-3">Ieteikumi rezultāta saglabāšanai:</h3>
               <ul className="list-disc pl-5 space-y-2">
                 <li>Ievērot higiēnista individuālos padomus.</li>
                 <li>Tīrīt zobus vismaz 2 reizes dienā, izmantot starpzobu diegu/birstes.</li>
                 <li>Pirmās stundas izvairīties no krāsojošiem produktiem (kafija, vīns, tēja).</li>
                 <li>Apmeklēt higiēnu ik pēc 6 mēnešiem (vai biežāk).</li>
               </ul>
             </div>
             <p>
               Atbilstoša ikdienas mutes kopšana un regulāri profilaktiskie vizīti palīdz ne tikai uzturēt tīrus zobus, bet arī aizsargā no smaganu slimībām un sarežģītas ārstēšanas nākotnē.
             </p>
          </div>
        </motion.section>

        <motion.section id="miti" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Biežākie mīti par profesionālo mutes higiēnu
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #1: higiēna bojā emalju</h3>
              <p className="text-slate-600 text-sm">Tā ir nepareiza pārliecība. Izmantotie līdzekļi (AIRFLOW) ir droši un nebojā emalju, bet zobi paliek gludi un nebojāti.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #2: procedūra ir sāpīga</h3>
              <p className="text-slate-600 text-sm">Lielākā daļa pacientu procedūru raksturo kā komfortablu. Diskomforts ir minimāls un pārejošs, atkarībā no aplikumu daudzuma.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #3: pietiek tīrīt zobus mājās</h3>
              <p className="text-slate-600 text-sm">Mājās nav iespējams sasniegt visas vietas (piemēram, zem smaganām). Profesionāla higiēna noņem aplikumus no grūti sasniedzamām zonām.</p>
            </div>
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #4: higiēna vajadzīga tikai tad, kad sāp</h3>
              <p className="text-slate-600 text-sm">Slimības attīstās bez sāpēm. Regulāra higiēna novērš problēmas (asiņošanu, smaržu) vēl pirms to izpausmes.</p>
            </div>
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #5: higiēna tikai skaistuma dēļ</h3>
              <p className="text-slate-600 text-sm">Lai gan zobi kļūst gaišāki, galvenais mērķis – veselība: kariesa un smaganu slimību profilakse.</p>
            </div>
          </div>
        </motion.section>

        <motion.div className="mt-8 mb-12 text-left" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Aicinām pierakstīties profesionālajai mutes higiēnai Bangų klīnikā
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
            Ja meklējat uzticamu un profesionālu zobārstniecības klīniku Klaipēdā, aicinām apmeklēt Bangų zobārstniecības klīniku. Pacientu uzticēšanos mūsu sniegtajiem pakalpojumiem apliecina pozitīvas atsauksmes, kurās bieži tiek minēts procedūras maigums, skaidrs situācijas apkopojums un iepriecinošs ilgtermiņa rezultāts. Šeit Jūs sagaida modernās tehnoloģijas, pieredzējuši speciālisti un individuāla pieeja katram pacientam.
          </p>
          <Link to="/lv/kontakti" className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
            Pierakstīties vizītam
          </Link>
        </motion.div>
          </div>
      </motion.div>
    </AnimatedSection>
  )
}
