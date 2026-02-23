import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { CLINIC } from '../../data/clinic'
import { SITE_URL } from '../../i18n/lv'

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

function SmileIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

function StarIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export default function BernuOdontologijaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Bērnu zobārstniecība",
    "description": "Profesionāla bērnu zobu kopšana un ārstniecība Klaipēdā. Adaptācijas vizītes, piena zobu ārstniecība.",
    "provider": { "@type": "Dentist", "name": "Bangų klīnika" }
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Bērnu zobārstniecība Klaipēdā — Bangų klīnika"
        description="Profesionāla bērnu zobārstniecība Klaipēdā. Piena zobu ārstniecība, profilakse un adaptācijas vizītes bez bailēm. Pierakstiet bērnu vizītei."
        keywords="bērnu zobārstniecība, bērnu zobārsts, kariess bērniem, klaipēda, silanti, bez bailēm"
        canonical={`${SITE_URL}/lv/pakalpojumi/bernu-odontologija`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/vaiku-odontologija` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/bernu-odontologija` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/vaiku-odontologija` },
        ]}
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">

        {/* HERO */}
        <motion.header className="mb-10 text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionāla bērnu zobārstniecība Klaipēdā
          </h1>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Bērnu zobu kopšana prasa ne tikai zobārstnieciskas zināšanas, bet arī īpašu uzmanību bērna emocionālajai pašsajūtai. Pirmās vizītes pie zobārsta bieži veido bērna attieksmi pret zobu ārstniecību visu mūžu, tādēļ ir svarīgi, lai šī pieredze būtu mierīga, droša un pozitīva.
            </p>
            <p>
              Bangų zobārstniecības klīnikā Klaipēdā bērnu zobārsts cenšas radīt draudzīgu vidi, kurā bērns jūtas saprasts un nebaidās no ārstniecības. Klīnikā liela uzmanība tiek pievērsta ne tikai zobu ārstniecībai, bet arī profilaksei, adaptācijai un secīgai bērna iepazīstināšanai ar zobārstnieciskajām procedūrām. Šāda pieeja palīdz veidot pozitīvus ieradumus un ilgtermiņa uzticēšanos ārstam.
            </p>
          </div>

          <div className="flex justify-start">
            <Link to="/lv/kontakti" className="btn-primary rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
              Pierakstīties vizītei
            </Link>
          </div>

          {/* CENAS */}
          <div className="mt-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
              Bērnu zobārstniecības cenas
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
              <p>
                Bērnu zobu ārstniecības cena ir atkarīga no bērna vecuma, zobu stāvokļa, izvēlētās ārstniecības metodes un procedūras sarežģītības. Bangų zobārstniecības klīnikā pirms jebkādas ārstniecības uzsākšanas vispirms tiek veikta apskate.
              </p>
            </div>

            <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
              <div className="divide-y divide-slate-100">
                <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                  <span className="text-slate-700">Pirmā konsultācija un profilakse</span>
                  <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">20 €</span>
                </div>
                <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                  <span className="text-slate-700">Piena zobu ārstniecība</span>
                  <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 50 €</span>
                </div>
                <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                  <span className="text-slate-700">Stikla jonomēra / kompomēra plomba</span>
                  <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 30 €</span>
                </div>
                <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                  <span className="text-slate-700">Sarežģīta kariesa ārstniecība</span>
                  <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 60 €</span>
                </div>
                <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                  <span className="text-slate-700">Adaptācijas vizīte (līdz 30 min.)</span>
                  <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 30 €</span>
                </div>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed text-sm">
              Galīgā bērnu zobu ārstniecības cena tiek apspriesta individuāli, ņemot vērā konkrēto situāciju un bērna vajadzības. Caurspīdīga cenu veidošana ļauj vecākiem mierīgi plānot bērna zobārstniecisko aprūpi.
            </p>
          </div>
        </motion.header>

        {/* KAS IR BĒRNU ZOBĀRSTNIECĪBA */}
        <motion.section className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas ir bērnu zobārstniecība?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Bērnu zobārstniecība ir zobārstniecības nozare, kas paredzēta bērnu zobu un mutes kopšanai no pirmajiem piena zobiem līdz pastāvīgo zobu izveidošanās brīdim. Tā ietver ne tikai zobu ārstniecību, bet arī profilaksi, agrīnu problēmu atklāšanu un bērna adaptāciju pie zobārstnieciskajām vizītēm.
            </p>
            <p>
              Bērnu zobi atšķiras no pieaugušo zobiem — piena zobi ir jutīgāki, un kariess tajos var izplatīties ātrāk. Tādēļ bērnu zobārstniecībā tiek pielietotas speciālas metodes un materiāli, kas pielāgoti bērna vecumam un zobu attīstības posmam.
            </p>
            <p>
              Pareizi kopti piena zobi ir svarīgi ne tikai košļāšanai un runas attīstībai, bet arī pastāvīgo zobu veselībai. Tādēļ regulāras apskates un savlaicīgi uzsākta kopšana ir svarīga bērna mutes veselības daļa.
            </p>
          </div>
        </motion.section>

        {/* KĀPĒC SVARĪGI KOPĪT (KARTES) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kāpēc svarīgi kopīt piena zobus?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <SmileIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Attīstība</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Piena zobi palīdz bērnam pareizi košļāt, veidot runu un saglabāt vietu pastāvīgajiem zobiem.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <StarIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Ātra bojāšanās</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Piena zobu kariess attīstās ātrāk. Savlaicīgi apmeklējot, var konstatēt izmaiņas un pielietot saudzīgas metodes.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <HeartIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Nākotnes veselība</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Atspēkojam mītu, ka tos nav jāārstē. Veseli piena zobi veido bērna pozitīvo attieksmi pret mutes kopšanu.
              </p>
            </div>
          </div>
        </motion.section>

        {/* KAD VĒRSTIES (KONTROLSARAKSTS) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kad bērnam nepieciešama vizīte pie zobārsta?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Pirmā bērna vizīte pie zobārsta ir ieteicama, tiklīdz parādās pirmie zobi, vai ne vēlāk kā viena gada vecumā. Agrīna vizīte ļauj bērnam iepazīties ar vidi, bet vecākiem — saņemt noderīgus padomus.
          </p>

          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Pie zobārsta jāvēršas, ja novērojamas šādas pazīmes:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Bērns sūdzas par zobu sāpēm vai jutīgumu",
                "Uz zobiem redzamas baltas vai tumšas plankumi",
                "Smaganas ir apsārtušas vai asiņo",
                "Bērns izvairās košļāt no vienas puses",
                "Pienācis laiks profilaktiskajai pārbaudei (pat ja nav sāpju)"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* PAKALPOJUMI */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kādus bērnu zobārstniecības pakalpojumus sniedzam?
          </h2>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft">
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Konsultācijas un profilaktiskās pārbaudes",
                "Piena zobu ārstniecība (bērniem pielāgoti materiāli)",
                "Zobu plombēšana (kariesa apturēšana)",
                "Kariesa profilakse",
                "Profesionālā mutes higiēna bērniem",
                "Zobu ekstrakcija (tikai kad nevar izvairīties)"
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-slate-700 mt-4 leading-relaxed">
            Plašs pakalpojumu klāsts ļauj nodrošināt, ka bērna zobu kopšana ir secīga un tiek veikta vienā vietā, un bērnu zobārsts var sekot pacienta zobu stāvoklim ilgtermiņā.
          </p>
        </motion.section>

        {/* KĀ NOTIEK (SOĻI) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kā notiek bērnu zobu ārstniecība klīnikā?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Adaptācija un apskate</h3>
              <p className="text-sm text-slate-600">Mierīga iepazīšanās ar zobārstu un vidi. Apskate tiek veikta nesteidzīgi, izskaidrojot bērnam saprotamā valodā.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Ārstniecība (ja nepieciešama)</h3>
              <p className="text-sm text-slate-600">Tiek veikta maigi, bērna tempā. Tiek izmantotas bērniem pielāgotas metodes, tiek darītas pārtraukumi.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Uzmundrinājums</h3>
              <p className="text-sm text-slate-600">Bērns tiek uzmundrināts par drosmi, vecākiem sniegtas rekomendācijas par kopšanu mājās.</p>
            </div>
          </div>
          <p className="text-slate-700 mt-6 leading-relaxed">
            Šāds secīgs un mierīgs process palīdz radīt pozitīvu pieredzi un mazina bailes turpmākajās vizītēs.
          </p>
        </motion.section>

        {/* PADOMI VECĀKIEM */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kā sagatavot bērnu vizītei?
          </h2>
          <div className="bg-brand-50/30 p-6 rounded-2xl border border-brand/10">
            <h3 className="font-semibold text-darkblue-700 mb-4">Vecākiem ieteicams:</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-700">
              <li>Par vizīti runāt mierīgi un pozitīvi, izvairīties no biedējošiem vārdiem.</li>
              <li>Izskaidrot, ka zobārsts palīdz zobiem būt veseliem.</li>
              <li>Nelietot vārdus, kas saistīti ar sāpēm vai bailēm.</li>
              <li>Izvēlēties vizītei laiku, kad bērns ir atpūties un labā noskaņojumā.</li>
            </ul>
          </div>
        </motion.section>

        {/* SĀPES UN KĀPĒC MĒS */}
        <motion.section className="mb-12 space-y-8" variants={item}>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Vai bērnu zobu ārstniecība ir sāpīga?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Mūsdienu bērnu zobārstniecībā liela uzmanība tiek pievērsta komfortam. Procedūras parasti tiek veiktas bez sāpēm vai ar minimālu diskomfortu, izmantojot bērniem pielāgotas anestēzijas metodes. Vairākumā gadījumu lielākās bailes rada nezināmais, tādēļ skaidrs izskaidrojums un draudzīga komunikācija palīdz radīt pozitīvu pieredzi.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Kāpēc vērts izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Mūsu klīnikā bērnu zobārstniecība balstās uz pacietību, cieņu pret bērna jūtām un secīgu uzticēšanās veidošanu. Katrs bērns tiek vērtēts individuāli, atvēlot laiku adaptācijai. Vecāki novērtē mierīgo vidi, skaidro komunikāciju un sirsnīgo speciālistu saskarsmi ar mazajiem pacientiem.
            </p>
          </div>
        </motion.section>

        {/* BEIGU CTA */}
        <motion.div className="mt-8 mb-12 text-left" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Aicinām pierakstīties bērnu zobārsta konsultācijai Bangų klīnikā
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
            Ja vēlaties rūpēties par sava bērna zobu veselību jau no pirmajiem zobiem vai pamanījāt pazīmes, ka nepieciešama ārstniecība, aicinām pierakstīties vizītei Bangų zobārstniecības klīnikā. Agrīna kopšana palīdz izvairīties no sarežģītākām problēmām un ļauj bērnam pierast pie zobārsta bez stresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link to="/lv/kontakti" className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
              Pierakstīties vizītei
            </Link>
            <a href={`tel:${CLINIC.phone}`} className="btn-ghost rounded-full px-8 py-4 font-semibold text-lg inline-block border border-brand text-brand hover:bg-brand-50 transition">
              Zvanīt mums
            </a>
          </div>
        </motion.div>

      </motion.div>
    </AnimatedSection>
  )
}
