import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { TableOfContents } from '../../components/TableOfContents'
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

function EyeOffIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
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

const tocSections = [
  { id: "cenas", label: "Cenas" },
  { id: "kas-ir", label: "Kas ir zobu izlīdzināšana?" },
  { id: "ordoline", label: "Kāpēc ORDOLINE kapteini?" },
  { id: "ka-notiek", label: "Ārstēšanas gaita" },
  { id: "piemerotiba", label: "Kam piemērota?" },
  { id: "ilgums", label: "Ilgums un sāpes" },
  { id: "nesasana", label: "Nēsāšana un rezultāti" },
  { id: "miti", label: "Biežākie mīti" },
  { id: "kapec-mes", label: "Kāpēc Bangų klīnika?" },
]

export default function ZobuIzlinesanaLv() {
  const pageRef = useRef(null)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Zobu izlīdzināšana",
    "description": "Profesionāla zobu izlīdzināšana Klaipēdā ar ORDOLINE kapteiniem. Neredzams, ērts un efektīvs zobu izlīdzināšanas veids.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klīnika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu izlīdzināšana (Ordoline) Klaipēdā — Bangų klīnika"
        description="Profesionāla zobu izlīdzināšana ar caurspīdīgiem ORDOLINE kapteiniem. Neredzams, ērts un efektīvs ārstniecības process Klaipēdā. Pierakstieties konsultācijai."
        keywords="zobu izlīdzināšana, ordoline kapteini, caurspīdīgi kapteini, ortodontiskā ārstniecība, klaipēda, taisni zobi"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-izlinesana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-tiesinimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-izlinesana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-tiesinimas` },
        ]}
        structuredData={structuredData}
      />

      <motion.div ref={pageRef} className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start" variants={container} initial="hidden" animate="visible">
          <TableOfContents sections={tocSections} title="Saturs" rootRef={pageRef} cta={{ label: "Pierakstīties vizītei", to: "/kontaktai" }} />
          <div className="min-w-0 flex-1">

        {/* HERO */}
        <motion.header className="mb-10 text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionāla zobu izlīdzināšana Klaipēdā ar ORDOLINE kapteiniem
          </h1>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Pareiza zobu novietojums ir svarīgs ne tikai estētiskam smaidam, bet arī visai mutes veselībai. Nepareizi izvietoti zobi var apgrūtināt mutes higiēnu, palielināt kariesu un smaganu slimību risku, radīt nevienmērīgu zobu nodilumu vai žokļa locītavu diskomfortu. Tādēļ arvien vairāk pacientu izvēlas zobu izlīdzināšanu kā ilgtermiņa ieguldījumu savā veselībā un pašsajūtā.
            </p>
            <p>
              Bangų zobārstniecības klīnikā Klaipēdā veiktā zobu izlīdzināšana ir vērsta uz katra pacienta individuālajām vajadzībām un mūsdienu ārstniecības risinājumiem. Pirms ārstniecības uzsākšanas vienmēr tiek veikta padziļināta diagnostika, kas ļauj novērtēt sakodumu, zobu novietojumu un izvēlēties piemērotāko izlīdzināšanas metodi. Pareizi plānota ārstniecība palīdz ne tikai sasniegt estētisku rezultātu, bet arī uzlabot zobu funkciju un ilgtermiņa mutes veselību.
            </p>
          </div>

          {/* CTA POGA AUGŠĀ */}
          <div className="flex justify-start">
            <Link to="/lv/kontakti" className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1">
              Pierakstīties vizītei
            </Link>
          </div>

          {/* CENAS */}
          <div id="cenas" className="mt-8 scroll-mt-36 2xl:scroll-mt-24">
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
              Zobu izlīdzināšanas ar kapteiniem cenas
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
              <p>
                Zobu izlīdzināšanas ar kapteiniem cena ir atkarīga no individuālā zobu novietojuma, sakoduma sarežģītības un paredzamā ārstniecības ilguma. Katram pacientam tiek izstrādāts personīgs ārstniecības plāns, tādēļ galīgā cena tiek noteikta tikai pēc konsultācijas un diagnostikas.
              </p>
            </div>

            <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
              <div className="divide-y divide-slate-100">
                <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                  <span className="text-slate-700">Konsultācija par zobu izlīdzināšanu</span>
                  <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 50 €</span>
                </div>
                <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                  <span className="text-slate-700">Zobu izlīdzināšana ar ORDOLINE kapteiniem</span>
                  <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">1800 – 4000 €</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
              <p>
                Pirms ārstniecības uzsākšanas tiek veikta konsultācija par zobu izlīdzināšanu. Konsultācijas laikā tiek novērtēts zobu un sakoduma stāvoklis, apspriesti iespējamie ārstniecības risinājumi un pacientam sniegta detalizēta informācija par ārstniecības gaitu un prognozētajiem rezultātiem.
              </p>
              <p>
                Cenu diapazons ir atkarīgs no nepieciešamā kapteiņu skaita, ārstniecības ilguma un korekciju sarežģītības. Ārstniecības cenā iekļauta individuālā digitālā plānošana, kapteiņu izgatavošana, ārstniecības uzraudzība un kontroles vizītes.
              </p>
              <p>
                Caurspīdīga cenu veidošana ļauj pacientiem skaidri saprast, kāds ārstniecības apjoms ir plānots un par ko tiek maksāts. Konsultācijas laikā ārsts atbild uz visiem jautājumiem un palīdz izvēlēties risinājumu, kas vislabāk atbilst pacienta vajadzībām un vēlmēm.
              </p>
            </div>
          </div>
        </motion.header>

        {/* KAS IR ZOBU IZLĪDZINĀŠANA */}
        <motion.section id="kas-ir" className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas ir zobu izlīdzināšana?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Zobu izlīdzināšana ir ortodontiska ārstniecība, kuras laikā pakāpeniski tiek koriģēts zobu novietojums un sakodums. Šīs ārstniecības mērķis ir ne tikai iztaisnot zobus, bet arī nodrošināt, lai tie pareizi saskartās savā starpā, bija ērti košļāšanai un viegli kopjami ikdienas mutes higienā.
            </p>
            <p>
              Ārstniecības laikā zobiem tiek pielietots kontrolēts, pakāpenisks spēks, kas laika gaitā ļauj tiem ieņemt pareizu novietojumu žoklī. Zobu izlīdzināšanu var izmantot dažādu problēmu risināšanai: atstarpēm starp zobiem, to sapūšanai, nepareizam sakodumam vai zobu pagriezumam. Mūsdienu ortodontija ļauj efektīvi, droši un pacientam ērtā veidā koriģēt šīs problēmas.
            </p>
            <p>
              Svarīgi uzsvērt, ka zobu izlīdzināšana ir piemērota ne tikai pusaudžiem, bet arī pieaugušajiem. Vecums nav šķērslis — svarīgs ir pareizi novērtēts mutes stāvoklis un individuāli pielāgots ārstniecības plāns, kas ļauj sasniegt prognozējamu un stabilu rezultātu.
            </p>
          </div>
        </motion.section>

        {/* ORDOLINE KAPTEINI (KARTES) */}
        <motion.section id="ordoline" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kāpēc izvēlēties caurspīdīgos ORDOLINE kapteinus?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
            <p>
              Caurspīdīgie kapteini ir moderns zobu izlīdzināšanas risinājums, ko novērtē estētikas, ērtumu un prognozējamu rezultātu dēļ. Bangų zobārstniecības klīnikā izmantotie ORDOLINE kapteini ļauj diskrēti koriģēt zobu novietojumu, pielāgojoties pacienta ikdienas dzīvesveidam.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <EyeOffIcon />
              <h3 className="font-bold text-darkblue-700 mb-2">Neredzamība ikdienā</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                ORDOLINE kapteini ir caurspīdīgi, tādēļ runājot, smaidot vai sazinoties tie gandrīz nav pamanāmi. Tas ir īpaši svarīgi pieaugušajiem, kuri vēlas iztaisnot zobus bez uzkrītošiem ortodontiskiem aparātiem un saglabāt pārliecību par sevi gan profesionālajā, gan personīgajā vidē.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <SmileIcon />
              <h3 className="font-bold text-darkblue-700 mb-2">Ērtums ēšanas laikā</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kapteini ir viegli izņemami, tādēļ ēšanas laikā tos nevajag nēsāt. Tas nozīmē, ka nav jāatsakās no iecienītajiem ēdieniem vai jāmaina ēšanas paradumi.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <SparklesIcon />
              <h3 className="font-bold text-darkblue-700 mb-2">Higiēnisks risinājums</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pateicoties iespējai kapteinus izņemt, ikdienas mutes higiēna kļūst vienkāršāka un efektīvāka, salīdzinot ar fiksētiem ortodontiskiem aparātiem. Tas samazina aplikuma uzkrāšanās risku.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2">Prognozējami rezultāti</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pirms ārstniecības uzsākšanas tiek izstrādāts digitālais plāns, kas ļauj precīzi paredzēt zobu kustību un galarezultātu. Tas nodrošina pacientam skaidrību un pārliecību visas ārstniecības laikā.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2">Īsāks ārstniecības ilgums</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Daudzos gadījumos zobu izlīdzināšana ar kapteiniem ilgst īsāk nekā ar tradicionālajām metodēm. Secīga kapteiņu maiņa un precīzi plānots ārstniecības plāns ļauj efektīvi sasniegt vēlamo rezultātu optimālā laikā.
              </p>
            </div>
          </div>
        </motion.section>

        {/* KĀ NOTIEK (SOĻI) */}
        <motion.section id="ka-notiek" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kā notiek zobu izlīdzināšana ar ORDOLINE kapteiniem?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Zobu izlīdzināšana ar ORDOLINE kapteiniem Bangų zobārstniecības klīnikā notiek pēc skaidras un pacientam saprotamas secības. Katrs posms ir svarīgs precīza un ilglaicīga rezultāta sasniegšanai.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">1</span>
                Pirmais posms – diagnostika un digitālā plānošana
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Zobu izlīdzināšana ar kapteiniem sākas ar padziļinātu mutes stāvokļa analīzi. Klīniskās apskates laikā tiek novērtēts zobu novietojums, sakodums, žokļu attiecība un vispārējā mutes veselība. Tiek veikti zobu nospiedumi vai modernā digitālā skenēšana, kas ļauj ārkārtīgi precīzi fiksēt esošo situāciju. Pamatojoties uz savāktajiem datiem, tiek izstrādāts individuāls digitālais ārstniecības plāns, kurā tiek plānots katrs zobu kustības posms. Šāda plānošana ļauj nodrošināt prognozējamu, kontrolētu un drošu ārstniecību.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">2</span>
                Otrais posms – virtuālā galarezultāta apskatīšana
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Viens no lielākajiem šīs ārstniecības ieguvumiem ir iespēja vēl pirms ārstniecības uzsākšanas redzēt, kā laika gaitā mainīsies zobu novietojums. Digitālās plānošanas laikā pacientam tiek parādīta vizualizācija, kurā redzama zobu izlīdzināšanas progresa un paredzamais galarezultāts. Tas palīdz labāk izprast ārstniecības gaitu, tās ilgumu un mērķus, kā arī sniedz papildu pārliecību lēmuma pieņemšanā par ārstniecību.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">3</span>
                Trešais posms – kapteiņu izgatavošana
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Pēc ārstniecības plāna apstiprināšanas, pamatojoties uz pacienta individuālajiem datiem, tiek uzsākta kapteiņu izgatavošana. Tiek izgatavota visa secīgā kapteiņu kopa, kur katrs kapteiņš atbilst konkrētam zobu kustības posmam. Kapteini ir precīzi pielāgoti, viegli un ērti nēsāšanai, tādēļ ārstniecība norit raiti un bez liekas diskomforta.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">4</span>
                Ceturtais posms – kapteiņu maiņa ik ~2 nedēļas
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Ārstniecības laikā pacients maina kapteinus aptuveni reizi divās nedēļās, ievērojot zobārsta norādīto grafiku. Katrs jaunais kapteiņš pakāpeniski koriģē zobu novietojumu, iedarbojoties ar nelielu, bet precīzu spiedienu. Šāda secīga maiņa ļauj zobiem kustēties droši, bez pēkšņām slodzēm, un tuvoties plānotajam galarezultātam.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">5</span>
                Piektais posms – regulāras kontroles
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Visas ārstniecības laikā ir paredzētas regulāras kontroles vizītes klīnikā. To laikā tiek uzraudzīta ārstniecības progrese, novērtēts, vai zobi kustas saskaņā ar plānu, un nepieciešamības gadījumā veiktas nelielas korekcijas. Regulāra uzraudzība nodrošina, ka zobu izlīdzināšana norit raiti, un sasniegtais rezultāts ir precīzs, stabils un ilglaicīgs.
              </p>
            </div>
          </div>
        </motion.section>

        {/* KAM PIEMĒROTA (KONTROLSARAKSTS) */}
        <motion.section id="piemerotiba" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kam piemērota zobu izlīdzināšana ar kapteiniem?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Zobu izlīdzināšana ar kapteiniem ir universāls risinājums daudziem pacientiem, kuri vēlas koriģēt zobu novietojumu estētiskā un ērtā veidā. Šī metode visbiežāk tiek izvēlēta, kad tiek meklēta efektīva, bet ikdienu netraucējoša ārstniecība.
          </p>

          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Zobu izlīdzināšana ar kapteiniem piemērota, ja:</h3>
            <div className="grid sm:grid-cols-1 gap-3">
              {[
                "starp zobiem ir atstarpes, kuras vēlaties aizvērt",
                "zobi ir sapūšuši vai nepareizi izvietoti",
                "nepieciešama viegla vai vidēji sarežģīta sakoduma korekcija",
                "zobi ir pagriezti vai noliekti",
                "vēlaties uzlabot ne tikai smaida estētiku, bet arī košļāšanas funkciju"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Šī ārstniecības metode ir īpaši populāra pieaugušo un vecāku pusaudžu vidū, kuri novērtē diskrētumu un elastīgumu. Pirms ārstniecības uzsākšanas vienmēr tiek veikts individuāls novērtējums, tādēļ var precīzi noteikt, vai zobu izlīdzināšana ar kapteiniem ir piemērota konkrētajā gadījumā.
          </p>
        </motion.section>

        {/* ILGUMS UN SĀPES */}
        <motion.section id="ilgums" className="mb-12 space-y-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Cik ilgi ilgst zobu izlīdzināšana ar kapteiniem?
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Zobu izlīdzināšanas ar kapteiniem ilgums ir atkarīgs no zobu novietojuma, sakoduma sarežģītības un katra pacienta individuālajiem mērķiem. Katrs ārstniecības plāns tiek izstrādāts individuāli, tādēļ precīzs ilgums tiek noteikts tikai pēc diagnostikas un digitālās plānošanas.
              </p>
              <p>
                Visbiežāk zobu izlīdzināšana ar kapteiniem ilgst no dažiem mēnešiem līdz aptuveni 12–18 mēnešiem. Vienkāršākos gadījumos rezultāti tiek sasniegti ātrāk, bet sarežģītākām korekcijām var būt nepieciešams ilgāks ārstniecības periods.
              </p>
              <p>
                Svarīgs faktors ir arī pacienta iesaistīšanās. Kapteinus ieteicams nēsāt aptuveni 20–22 stundas diennaktī, noņemot tos tikai ēšanas un mutes higiēnas laikā. Ievērojot šo režīmu, ārstniecība norit saskaņā ar plānu, un rezultāti tiek sasniegti paredzētajā laikā.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Vai zobu izlīdzināšana ar kapteiniem ir sāpīga?
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Daudziem pacientiem aktuāls jautājums ir, vai zobu izlīdzināšana ar kapteiniem izraisa sāpes. Šī ārstniecības metode tiek uzskatīta par vienu no ērtākajiem ortodontiskiem risinājumiem. Kapteini uz zobiem iedarbojas pakāpeniski, tādēļ diskomforts parasti ir minimāls.
              </p>
              <p>
                Pirmajās dienās pēc jauna kapteiņa uzvilkšanas var just nelielu spiedienu vai sasprindzinājumu. Tā ir normāla pazīme, kas liecina, ka zobi kustas saskaņā ar plānu. Parasti šī sajūta izzūd dažu dienu laikā un netraucē ikdienas aktivitātēm.
              </p>
              <p>
                Salīdzinot ar tradicionālajiem fiksētajiem aparātiem, kapteiniem nav metāla detaļu, kas varētu kairināt gļotādu vai izraisīt brūces. Tādēļ zobu izlīdzināšana ar kapteiniem bieži tiek izvēlēta pacientiem, kuri meklē maigāku un ērtāku risinājumu.
              </p>
            </div>
          </div>
        </motion.section>

        {/* NĒSĀŠANA UN REZULTĀTI */}
        <motion.section id="nesasana" className="mb-12 space-y-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Ko svarīgi zināt, nēsājot caurspīdīgos kapteinus ikdienā?
            </h2>
            <div className="bg-brand-50/30 p-6 rounded-xl border border-brand/10 text-slate-700 leading-relaxed space-y-4">
              <p>
                Lai sasniegtu plānoto zobu izlīdzināšanas rezultātu, ir ļoti svarīgi ievērot ārsta sniegtos ieteikumus un kapteiņu nēsāšanas režīmu. Caurspīdīgie kapteini ir izstrādāti tā, lai būtu ērti ikdienas aktivitātēs, taču ārstniecības panākumi tieši atkarīgi no pacienta iesaistīšanās.
              </p>
              <p>
                Kapteinus ieteicams nēsāt aptuveni 20–22 stundas diennaktī, noņemot tos tikai ēšanas un mutes higiēnas laikā. Regulārs un pietiekams nēsāšanas laiks nodrošina, ka zobi kustēsies saskaņā ar plānoto ārstniecības plānu un rezultāti tiks sasniegti laikus.
              </p>
              <p>
                Katru reizi, izņemot kapteinus, svarīgi pirms to ievietošanas atpakaļ iztīrīt zobus, lai zem kapteiņiem neuzkrātos aplikums. Pašus kapteinus ieteicams regulāri skalot ar remdenumu ūdeni un lietot speciālus tīrīšanas līdzekļus, izvairoties no karsta ūdens, kas var deformēt to formu.
              </p>
              <p>
                Tāpat ieteicams glabāt kapteinus speciālā kastītē, kad tie netiek nēsāti, lai izvairītos no to bojāšanas vai pazaudēšanas. Ievērojot šos vienkāršos ikdienas noteikumus, ārstniecība norit raiti, un mutes higiēna saglabājas laba visas izlīdzināšanas perioda laikā.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Zobu izlīdzināšanas ar kapteiniem rezultāti un to saglabāšana
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Zobu izlīdzināšanas ar kapteiniem rezultāti parasti ir pamanāmi pakāpeniski, bet ļoti skaidri — zobi kļūst taisni, sakodums kļūst pareizāks, un smaids kļūst estētiskāks. Tā kā ārstniecība tiek plānota digitāli, galarezultāts ir prognozējams un atbilst iepriekš saskaņotajiem mērķiem.
              </p>
              <p>
                Pēc aktīvās izlīdzināšanas posma beigām ārkārtīgi svarīga ir rezultāta stabilizācija. Parasti tiek izmantoti retencionālie (uzturošie) kapteini, kas palīdz uzturēt zobus jaunajā pozīcijā. Bez šī posma zobiem var būt tendence atgriezties iepriekšējā pozīcijā.
              </p>
              <p>
                Retencionālo kapteiņu nēsāšanas ilgums un režīms tiek noteikts individuāli, ņemot vērā veiktās ārstniecības apjomu un pacienta mutes īpatnības. Regulāras profilaktiskās vizītes ļauj uzraudzīt situāciju un nodrošināt, ka sasniegtais rezultāts saglabājas ilglaicīgs.
              </p>
              <p>
                Atbilstoša ikdienas mutes kopšana, ieteikumu ievērošana un uzturošais posms ļauj baudīt pareizu smaidu daudzus gadus pēc zobu izlīdzināšanas beigām.
              </p>
            </div>
          </div>
        </motion.section>

        {/* MĪTI */}
        <motion.section id="miti" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Biežāk sastopamie mīti par zobu izlīdzināšanu ar kapteiniem
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Zobu izlīdzināšana ar kapteiniem joprojām rada daudz jautājumu un šaubu, īpaši pacientiem, kuri ar šo ārstniecības metodi saskaras pirmo reizi. Daudzas bažas rodas no novecojušiem uzskatiem vai neprecīzas informācijas, tādēļ svarīgi tās skaidri kliedēt.
          </p>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #1: kapteini piemēroti tikai nelielām estētiskām korekcijām.</h3>
              <p className="text-slate-600 text-sm">Patiesībā ar kapteiniem var koriģēt ne tikai nelielas zobu neregularitātes, bet arī atstarpes, sapūšanu vai noteiktas sakoduma izmaiņas. Ārstniecības iespējas vienmēr tiek novērtētas individuāli, pamatojoties uz diagnostiku un digitālo plānošanu.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #2: zobu izlīdzināšana ar kapteiniem ir neefektīva.</h3>
              <p className="text-slate-600 text-sm">Kapteini iedarbojas pakāpeniski, bet ļoti precīzi. Katrs kapteiņš ir izgatavots konkrētam zobu kustības posmam, tādēļ, ievērojot nēsāšanas režīmu, var sasniegt skaidri prognozējamus un stabilos rezultātus.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #3: kapteini ir neērti nēsājami ikdienā.</h3>
              <p className="text-slate-600 text-sm">Caurspīdīgie kapteini ir viegli, plāni un individuāli pielāgoti, tādēļ lielākā daļa pacientu pie tiem pierod diezgan ātri. Tā kā kapteini ir izņemami, tie netraucē ne ēšanas laikā, ne veicot ikdienas mutes higiēnu.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #4: kapteini pastāvīgi krīt vai tiek pazaudēti.</h3>
              <p className="text-slate-600 text-sm">Pareizi pielāgoti kapteini stingri turas uz zobiem. Ja tiek ievēroti ieteikumi un kapteini tiek glabāti speciālā kastītē, kad netiek nēsāti, to pazaudēšanas vai bojāšanas risks ir minimāls.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #5: zobi pēc ārstniecības ātri atgriezīsies sākotnējā pozīcijā.</h3>
              <p className="text-slate-600 text-sm">Tāpat kā pēc jebkuras ortodontiskas ārstniecības, ļoti svarīgs ir uzturošais posms. Lietojot retencionālos kapteinus un ievērojot ārsta norādījumus, sasniegtais rezultāts paliek stabils ilgu laiku.</p>
            </div>
          </div>
        </motion.section>

        {/* KĀPĒC MĒS */}
        <motion.section id="kapec-mes" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kāpēc vērts izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Izvēloties zobu izlīdzināšanas pakalpojumus, svarīgs ir ne tikai estētisks galarezultāts, bet arī viss ārstniecības process — no pirmās konsultācijas līdz uzturošajam posmam. Bangų zobārstniecības klīnikā Klaipēdā zobu izlīdzināšana tiek veikta, izmantojot mūsdienīgus, pacientam ērtus un zinātniski pamatotus risinājumus, kas ļauj sasniegt prognozējamu un ilglaicīgu rezultātu.
            </p>
            <p>
              Klīnikā liela uzmanība tiek pievērsta individuālai plānošanai. Pirms ārstniecības uzsākšanas tiek veikta padziļināta diagnostika un digitālais ārstniecības plāns, kas ļauj pacientam skaidri izprast visu procesu un paredzamo galarezultātu. Šāda pieeja palīdz justies pārliecināti un pieņemt informētu lēmumu.
            </p>
            <p>
              Bangų zobārstniecības klīnikā strādājošie speciālisti velta laiku pacienta jautājumiem, skaidri izskaidro katru ārstniecības posmu un nodrošina pastāvīgu uzraudzību visas ārstniecības laikā. Pacienti novērtē profesionālo komunikāciju, komfortu un sasniegtos rezultātus, ko apliecina viņu pozitīvās atsauksmes.
            </p>
          </div>
        </motion.section>

        {/* BEIGU CTA */}
        <motion.div className="mt-8 mb-12 text-left" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Aicinām pierakstīties zobu izlīdzināšanas konsultācijai Bangų klīnikā
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
            Ja apsverat zobu izlīdzināšanu Klaipēdā un vēlaties uzzināt, vai caurspīdīgie kapteini ir piemēroti tieši Jums, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts Jūsu zobu un sakoduma stāvoklis, apspriesti iespējamie ārstniecības risinājumi un izstrādāts individuāls ārstniecības plāns.
            <br /><br />
            Bangų zobārstniecības klīnikā cenšamies, lai zobu izlīdzināšana būtu skaidra, ērta un pielāgota pacienta dzīvesveidam. Šeit Jūs sagaida mūsdienīgas tehnoloģijas, uzmanīga pieeja un secīga uzraudzība katrā ārstniecības posmā. Pierakstieties konsultācijai un speriet pirmo soli pareiza, pārliecību dodošā smaida virzienā.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link to="/lv/kontakti" className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1">
              Pierakstīties vizītei
            </Link>
            <a href={`tel:${CLINIC.phone}`} className="btn-ghost rounded-full px-8 py-4 font-semibold text-lg inline-block border border-brand text-brand hover:bg-brand-50 transition">
              Zvanīt mums
            </a>
          </div>
        </motion.div>
          </div>
      </motion.div>
    </AnimatedSection>
  )
}
