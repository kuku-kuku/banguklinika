import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { TableOfContents } from '../../components/TableOfContents'
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

// Ikonas
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
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

function SparklesIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
}

const tocSections = [
  { id: "cenas", label: "Cenas" },
  { id: "kas-ir", label: "Kas ir zobu balināšana?" },
  { id: "beyond", label: "BEYOND® balināšana" },
  { id: "kapec-beyond", label: "Kāpēc BEYOND®?" },
  { id: "kapsas", label: "Balināšana ar kapsām" },
  { id: "drosiba", label: "Vai droša?" },
  { id: "ka-notiek", label: "Procedūras gaita" },
  { id: "pec-balina", label: "Pēc balināšanas" },
  { id: "ilgums", label: "Rezultāta ilgums" },
  { id: "kamseder", label: "Kontraindikācijas" },
  { id: "miti", label: "Biežākie mīti" },
  { id: "kapec-mes", label: "Kāpēc Bangų klīnika?" },
]

export default function ZobuBalinesanaLv() {
  const pageRef = useRef(null)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Zobu balināšana",
    "description": "Profesionāla zobu balināšana Klaipēdā ar BEYOND® sistēmu un mājas balināšanas kapsām.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klīnika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu balināšana Klaipēdā | Cena un atsauksmes — Bangų klīnika"
        description="Profesionāla zobu balināšana Klaipēdā: BEYOND® ofisa balināšana un mājas balināšana ar kapsām. Droša, efektīva un ilgstoša rezultāta."
        keywords="zobu balināšana, beyond sistēma, balināšanas kapsas, zobu estētika, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-balinesana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-balinimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-balinesana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-balinimas` },
        ]}
        structuredData={structuredData}
      />

      <motion.div ref={pageRef} className="max-w-screen-2xl mx-auto px-4 xl:px-8 2xl:px-4 2xl:flex 2xl:gap-8 2xl:items-start" variants={container} initial="hidden" animate="visible">
          <TableOfContents sections={tocSections} title="Saturs" rootRef={pageRef} cta={{ label: "Pierakstīties vizītei", to: "/kontaktai" }} />
          <div className="min-w-0 flex-1">

        {/* HERO */}
        <motion.header className="mb-10 text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionāla zobu balināšana Klaipēdā
          </h1>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p>
              Zobu krāsa laika gaitā var mainīties dažādu iemeslu dēļ — ēšanas paradumu, smēķēšanas, vecuma vai noteiktu medikamentu ietekmes. Pat rūpīga ikdienas mutes kopšana ne vienmēr spēj atjaunot zobu dabisko baltumu, tāpēc profesionāla zobu balināšana kļūst par vienu no efektīvākajiem estētiskajiem risinājumiem.
            </p>
            <p>
              Bangų zobārstniecības klīnikā Klaipēdā veiktā zobu balināšana palīdz droši un ātri sasniegt pamanāmu rezultātu. Izmantotās modernās balināšanas metodes ļauj zobus gaišināt par vairākām nokrāsām, saglabājot emaljas drošību un komfortu procedūras laikā. Pirms katras balināšanas tiek novērtēts individuālais mutes stāvoklis, tāpēc tiek izvēlēts piemērotākais risinājums katram pacientam.
            </p>
          </div>

          {/* CTA POGA AUGŠĀ */}
          <div className="flex justify-start">
            <Link to="/lv/kontakti" className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1">
              Pierakstīties vizītam
            </Link>
          </div>

          {/* CENAS */}
          <div id="cenas" className="mt-8 scroll-mt-36 2xl:scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Zobu balināšanas cena mūsu klīnikā
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
            <p>
              Zobu balināšanas cena ir atkarīga no izvēlētās balināšanas metodes, procedūras apjoma un pacienta individuālajām vajadzībām. Pirms balināšanas vienmēr tiek ieteikta konsultācija, kuras laikā tiek novērtēts zobu stāvoklis un izvēlēts piemērotākais risinājums drošam un ilgstošam rezultātam.
            </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            <div className="divide-y divide-slate-100">
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Ofisa zobu balināšana ar BEYOND® sistēmu</span>
                  <span className="text-darkblue-700 font-bold">no 250 €</span>
                </div>
                <span className="block text-slate-600 text-sm">Ātra un efektīva metode, rezultāts pēc vienas procedūras.</span>
              </div>
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Balināšanas kapsu nospiedumi</span>
                  <span className="text-darkblue-700 font-bold">no 30 €</span>
                </div>
                <span className="block text-slate-600 text-sm">Pirmais solis, izvēloties mājas balināšanu.</span>
              </div>
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Balināšanas kapsas ar gelu (2 gab. + gelis)</span>
                  <span className="text-darkblue-700 font-bold">no 200 €</span>
                </div>
                <span className="block text-slate-600 text-sm">Ļauj balināt zobus pakāpeniski mājas apstākļos.</span>
              </div>
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Zobu rotājuma piestiprināšana</span>
                  <span className="text-darkblue-700 font-bold">no 50 €</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Precīza zobu balināšanas cena tiek apspriesta individuālās konsultācijas laikā, ņemot vērā izvēlēto metodi, zobu stāvokli un vēlamo rezultātu. Caurspīdīga cenu noteikšana ļauj pacientiem pieņemt pārliecinātu lēmumu par zobu balināšanu Klaipēdā.
          </p>
          </div>
        </motion.header>

        {/* KAS IR BALINĀŠANA */}
        <motion.section id="kas-ir" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas ir zobu balināšana?
          </h2>
          <div className="bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10 space-y-4 text-slate-700 leading-relaxed">
            <p>
              Zobu balināšana ir estētiska zobārstniecības procedūra, kuras laikā ar speciāliem līdzekļiem tiek novākti zobu emaljas uzkrātie pigmenti, kas izraisa zobu aptumšošanos vai dzeltenēšanu. Atšķirībā no virsmas aplikumu noņemšanas, balināšanas laikā tiek iedarbojas uz zobu struktūras dziļumā, tāpēc rezultāts ir izteiktāks un ilgāk saglabājas.
            </p>
            <p>
              Bangų zobārstniecības klīnikā tiek izmantotas vairākas zobu balināšanas metodes atkarībā no pacienta vajadzībām un vēlmēm. Viens no progresīvākajiem risinājumiem ir ofisa zobu balināšana ar BEYOND® sistēmu, ko veic zobārsta kabinetā. Tā ir īpaša balināšanas procedūra ar gaismas filtrēšanu, kas nodrošina ātru un drošu rezultātu. Izmantotā BEYOND® ACCELERATOR halogenā lampa izstaro mazāku temperatūru, tāpēc procedūra ir ērtāka, un zobu jutīguma risks ir mazāks. Balināšanas rezultāts ir redzams uzreiz pēc procedūras.
            </p>
            <p>
              Tiem pacientiem, kuri vēlas balināt zobus pakāpeniski, tiek piedāvāta mājas balināšana ar kapsām. Šīs metodes ietvaros tiek izgatavoti individuāli pielāgoti uzliktņi, kas tiek izmantoti kopā ar īpašiem balināšanas geliem. Pirms mājas balināšanas uzsākšanas ieteicams veikt profesionālu mutes higiēnu, lai nodrošinātu labāku un vienmērīgāku rezultātu.
            </p>
          </div>
        </motion.section>

        {/* BEYOND SISTĒMA */}
        <motion.section id="beyond" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Zobu balināšana ar BEYOND® sistēmu
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Ofisa zobu balināšana ar BEYOND® sistēmu tiek veikta zobārsta kabinetā un tiek uzskatīta par vienu no progresīvākajām profesionālajām balināšanas metodēm. Procedūras laikā tiek izmantots īpašs balināšanas gelis un BEYOND® ACCELERATOR halogenā lampa, kas aktivizē balināšanas procesu, vienlaikus nodrošinot maksimālu zobu emaljas drošību.
                </p>
                <p>
                  Šī sistēma izceļas ar to, ka balināšanas laikā tiek piemērota gaismas filtrēšana, kas ļauj samazināt izstaroto siltumu. Tāpēc procedūra ir ērtāka pacientam, un zobu jutīguma risks ir ievērojami mazāks salīdzinājumā ar dažām citām balināšanas metodēm. Visa procedūra ilgst aptuveni 45 minūtes, un rezultāts bieži vien ir pamanāms uzreiz pēc pirmās seansas.
                </p>
                <p>
                  Zobu balināšana Klaipēdā ar BEYOND® sistēmu ir īpaši piemērota pacientiem, kuri vēlas ātru un izteiktu rezultātu, piemēram, pirms svarīgiem personīgiem vai profesionāliem notikumiem. Pirms procedūras tiek novērtēts zobu stāvoklis, tāpēc balināšana tiek veikta tikai tad, kad tā ir droša un piemērota konkrētam pacientam.
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
              <SparklesIcon />
              <p className="font-semibold text-darkblue-700 mt-2">Ātrais rezultāts</p>
              <p className="text-sm text-slate-500">Tikai 45 minūtēs</p>
            </div>
          </div>
        </motion.section>

        {/* KĀPĒC IZVĒLĒTIES BEYOND */}
        <motion.section id="kapec-beyond" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kāpēc vērts izvēlēties BEYOND® zobu balināšanu?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            BEYOND® sistēma pasaulē ir atzīta kā viena no vadošajām zobu estētikas jomā. Šī balināšanas metode tiek izvēlēta uzticamības, prognozējama rezultāta un komforta procedūras laikā dēļ.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              "BEYOND® — pasaules zobu estētikas līderis",
              "Pamanāmi rezultāti jau pēc vienas procedūras",
              "Lieliska izvēle, gatavojoties īpašiem notikumiem",
              "Piemērota dažāda izcelsmes traipiem (tetraciklīna, fluora u.c.)",
              "Procedūra vienkārša un nesāpīga (ap 45 min.)",
              "Ilgstošs efekts — rezultāti bieži saglabājas līdz 2 gadiem"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                <span className="mt-1"><CheckIcon /></span>
                <span className="text-slate-700 text-sm">{text}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-700 text-sm bg-blue-50 p-4 rounded-xl border border-blue-100">
            <strong>Svarīgi:</strong> Pēc BEYOND® zobu balināšanas ir ļoti svarīgi ievērot speciālista ieteikumus. Pirmās 24 stundas pēc procedūras ieteicams izvairīties no kafijas, tabakas, krāsojošiem dzērieniem un pārtikas, kā arī krāsainām zobu pastām vai mutes skalojamiem šķidrumiem. Tas palīdz saglabāt sasniegto rezultātu un nodrošina vienmērīgāku zobu nokrāsu.
          </p>
        </motion.section>

        {/* BALINĀŠANA AR KAPSĀM */}
        <motion.section id="kapsas" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Zobu balināšana ar kapsām mājās
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Pacientiem, kuri vēlas balināt zobus pakāpeniski un elastīgāk, Bangų zobārstniecības klīnikā tiek piedāvāta zobu balināšana ar kapsām mājās. Šī metode ļauj sasniegt vienmērīgu rezultātu ilgākā laika periodā, veicot balināšanu ērti mājas vidē.
            </p>
            <p>
              Balināšana ar kapsām sākas klīnikā, kur pēc pacienta zobu individuālā nospieduma tiek izgatavoti personiski pielāgoti uzliktņi. Kopā ar tiem tiek izvēlēts piemērots balināšanas gelis un sniegtas detalizētas lietošanas instrukcijas. Tādā veidā tiek nodrošināts, ka balināšana ir droša, efektīva un pielāgota konkrētam zobu stāvoklim.
            </p>

            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm my-4">
              <h3 className="font-semibold text-darkblue-700 mb-2">Šo balināšanas veidu bieži izvēlas pacienti, kuri:</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>vēlas pakāpenisku un kontrolētu rezultātu</li>
                <li>ir ar jutīgākiem zobiem</li>
                <li>vēlas saglabāt vai pastiprināt jau veiktās ofisa balināšanas efektu</li>
              </ul>
            </div>

            <p>
              Pirms mājas balināšanas ar kapsām uzsākšanas ieteicams veikt profesionālu mutes higiēnu, lai balināšanas gelis darbotos vienmērīgi un rezultāts būtu estētiski vienāds.
            </p>
          </div>
        </motion.section>

        {/* DROŠUMS */}
        <motion.section id="drosiba" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Vai zobu balināšana ir droša?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Mūsdienu profesionāla zobu balināšana, ko veic zobārsta uzraudzībā, tiek uzskatīta par drošu procedūru, ja tiek ievēroti noteiktie protokoli un individuāli izvēlēta metode. Bangų zobārstniecības klīnikā tiek izmantotas uzticamas, klīniski pārbaudītas balināšanas sistēmas, piemēram, BEYOND®, kas ir izstrādātas, lai maksimāli aizsargātu zobu emalju.
            </p>
            <p>
              Viens no biežākajiem pacientu bažu avotiem ir tas, vai balināšana nesbojā zobus. Pareizi veikta balināšana negrauž emaljas struktūru, un iespējamais īslaicīgais zobu jutīgums parasti paiet īsā laikā. BEYOND® sistēmā izmantotā gaismas filtrēšana ļauj samazināt procedūras laikā izstaroto siltumu, tāpēc diskomforts un jutīguma risks ir mazāks.
            </p>
            <p>
              Svarīgi uzsvērt, ka lielākais risks rodas ne no profesionālās balināšanas, bet no nekontrolētas vai nepareizas mājas balināšanas, izmantojot nezināmas izcelsmes līdzekļus. Tāpēc pirms lēmuma balināt zobus ieteicams konsultēties ar zobārstu, kurš novērtēs situāciju un ieteiks drošāko risinājumu.
            </p>
          </div>
        </motion.section>

        {/* GAITA (SOĻI) */}
        <motion.section id="ka-notiek" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kā notiek zobu balināšanas procedūra klīnikā?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Lai nodrošinātu drošu un prognozējamu rezultātu, zobu balināšana Bangų zobārstniecības klīnikā tiek veikta pēc skaidras un pacientam saprotamas gaitas. Pirms konkrētās balināšanas metodes izvēles vienmēr tiek novērtēts individuālais mutes stāvoklis.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2">1. Konsultācija un novērtēšana</h3>
              <p className="text-sm text-slate-600">Zobārsts pārbauda zobus, novērtē emaljas stāvokli, restaurācijas un piemērotību. Tiek apspriestas vēlmes.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2">2. Sagatavošanās balināšanai</h3>
              <p className="text-sm text-slate-600">Ja nepieciešams, tiek veikta profesionāla higiēna aplikumu noņemšanai un vienmērīgam efektam.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2">3. Balināšanas procedūra</h3>
              <p className="text-sm text-slate-600">Tiek veikta ofisa BEYOND® procedūra vai nodoti uzliktņi ar instrukcijām.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2">4. Ieteikumi pēc balināšanas</h3>
              <p className="text-sm text-slate-600">Tiek sniegtas instrukcijas, kā kopēt zobus, lai rezultāts saglabātos ilgāk.</p>
            </div>
          </div>

          <p className="text-slate-700 mt-6 leading-relaxed">
            Šāds konsekvents process ļauj nodrošināt, ka zobu balināšana Klaipēdā ir ne tikai efektīva, bet arī droša un pielāgota katram pacientam.
          </p>
        </motion.section>

        {/* PĒC BALINĀŠANAS */}
        <motion.section id="pec-balina" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Ko svarīgi zināt pēc zobu balināšanas?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Pēc profesionālas zobu balināšanas zobi kļūst pamanāmi gaišāki, taču pirmajās dienās pēc procedūras emaljs var būt jutīgāks pret ārējiem faktoriem. Tā ir normāla un pārejoša reakcija, kas parasti izzūd īsā laikā. Lai saglabātu sasniegto balināšanas rezultātu un samazinātu iespējamo jutīgumu, svarīgi ievērot zobārsta sniegtos ieteikumus.
            </p>
            <p>
              Pirmās 24 stundas pēc balināšanas ieteicams izvairīties no krāsojošiem produktiem, piemēram, kafijas, tējas, sarkanā vīna, krāsainiem dzērieniem vai pārtikas ar intensīvu pigmentu. Tāpat ieteicams nesmēķēt un nelietot krāsainas zobu pastas vai mutes skalojamos šķidrumus, kas var ietekmēt zobu nokrāsu.
            </p>
            <p>
              Ikdienas mutes kopšanai pēc balināšanas jābūt maigai un konsekventi. Ieteicams tīrīt zobus ar maigu suku, lietot jutīgiem zobiem paredzētu zobu pastu un izvairīties no pārmērīga spiediena. Ja zobārsts iesaka papildus līdzekļus, piemēram, remineralizējošos gēlus, svarīgi tos lietot pēc norādījumiem.
            </p>
            <p>
              Ievērojot šos ieteikumus, balināšanas rezultāts saglabājas ilgāk, bet zobu jutīgums — mazinās. Regulāras profilakses vizītes un atbilstoša ikdienas kopšana palīdz saglabāt estētisku smaidu un ilgstošu zobu baltumu.
            </p>
          </div>
        </motion.section>

        {/* REZULTĀTA ILGUMS */}
        <motion.section id="ilgums" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Cik ilgi saglabājas zobu balināšanas rezultāts?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Zobu balināšanas rezultāta noturīgums ir atkarīgs no vairākiem faktoriem, tāpēc katra pacienta pieredze var atšķirties. Vidēji profesionālās balināšanas rezultāts saglabājas no viena līdz diviem gadiem, taču atbilstoša kopšana var šo laiku pagarināt.
            </p>
            <p>
              Lielāko ietekmi uz balināšanas efekta ilgumu atstāj ikdienas paradumi. Bieža kafijas, tējas, sarkanā vīna lietošana, smēķēšana vai intensīvi krāsojošs ēdiens var ātrāk mainīt zobu nokrāsu. Svarīga arī regulāra mutes higiēna un profilakses vizītes, kas palīdz uzturēt tīras zobu virsmas.
            </p>
            <p>
              Ofisa zobu balināšana ar BEYOND® sistēmu parasti nodrošina izteiktāku un ātrāku rezultātu, savukārt mājas balināšana ar kapsām var tikt izmantota kā uzturošs līdzeklis, kas palīdz saglabāt sasniegto zobu krāsu ilgāku laiku. Zobārsts, novērtējis individuālo situāciju, var ieteikt optimālo balināšanas atkārtošanas intervālu vai papildu kopšanas līdzekļus.
            </p>
            <p>
              Svarīgi saprast, ka zobu balināšana nav vienreizējs risinājums uz mūžu — tas ir process, kura rezultāts ir atkarīgs no ilgtermiņa kopšanas un pacienta paradumiem.
            </p>
          </div>
        </motion.section>

        {/* KAM NEDER */}
        <motion.section id="kamseder" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kam zobu balināšana neder?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Lai gan zobu balināšana ir droša un efektīva estētiska procedūra, tā ne vienmēr ir piemērota katram pacientam. Pirms balināšanas Bangų zobārstniecības klīnikā vienmēr tiek novērtēts individuālais mutes stāvoklis, lai procedūra būtu ne tikai efektīva, bet arī droša.
            </p>

            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <h3 className="font-semibold text-red-800 mb-2">Zobu balināšana var nebūt ieteicama vai tiek atlikta, ja:</h3>
              <ul className="list-disc pl-5 space-y-2 text-red-900/80">
                <li>ir konstatēts aktīvs kariess vai citas neārstētas zobu slimības</li>
                <li>ir smaganu iekaisums vai periodonta slimības, kas vispirms jāārstē</li>
                <li>zobu emalja ir ļoti plāna vai bojāta, palielinot jutīguma risku</li>
                <li>priekšējā apgabalā ir plombas, kroņi vai laminētas, kuru krāsa pēc balināšanas nemainās</li>
                <li>paciente ir grūtniecē vai zīdīšanas periodā, kad estētiskās procedūras parasti tiek atliktas</li>
              </ul>
            </div>

            <p>
              Šādos gadījumos zobārsts piedāvā alternatīvus risinājumus vai iesaka vispirms veikt ārstēšanas procedūras. Atbildīga novērtēšana palīdz izvairīties no nevēlamiem rezultātiem un nodrošina, ka zobu balināšana tiek veikta tikai tad, kad tā patiešām ir piemērota.
            </p>
          </div>
        </motion.section>

        {/* MĪTI */}
        <motion.section id="miti" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Biežākie mīti par zobu balināšanu
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #1: pēc balināšanas zobi kļūst vājāki</h3>
              <p className="text-slate-600 text-sm">Balināšana nemaina zobu stiprumu vai izturību. Pareizi veikta procedūra nevājina zobus, un izmantotie papildu kopšanas līdzekļi var pat palīdzēt stiprināt emaljas virsmu.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #2: zobu balināšana bojā zobu emalju</h3>
              <p className="text-slate-600 text-sm">Profesionāla zobu balināšana, ko veic zobārsta uzraudzībā, nesbojā zobu emalju. Mūsdienu balināšanas sistēmas, piemēram, BEYOND®, ir izstrādātas tā, lai iedarbotos uz pigmentiem, saglabājot dabisko emaljas struktūru.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #3: zobu balināšana vienmēr ir sāpīga</h3>
              <p className="text-slate-600 text-sm">Lielākā daļa pacientu zobu balināšanu raksturo kā ērtu procedūru. Mūsdienu metodes ļauj samazināt diskomfortu, un ja jutīgums arī parādās, tas parasti ir īslaicīgs.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #4: visu cilvēku zobi balina vienādi</h3>
              <p className="text-slate-600 text-sm">Rezultāts ir individuāls un atkarīgs no sākotnējās krāsas, emaljas struktūras un pigmentācijas izcelsmes. Pirms procedūras vienmēr tiek apspriestas reālistiskas vēlmes.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #5: balināšana iedarbojas uz plombām un kroņiem</h3>
              <p className="text-slate-600 text-sm">Balināšanas līdzekļi iedarbojas tikai uz dabisko zobu audu — plombas, kroņi vai laminētas nebalinojas. Tāpēc pirms balināšanas svarīgi novērtēt restaurācijas.</p>
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
              Izvēloties zobu balināšanas pakalpojumus, svarīgs ne tikai pats rezultāts, bet arī procedūras drošums, izmantotās tehnoloģijas un speciālistu pieredze. Bangų zobārstniecības klīnikā zobu balināšana tiek veikta, izmantojot modernās un uzticamās metodes, kas nodrošina estētisku, bet zobu emaljam drošu rezultātu.
            </p>
            <p>
              Klīnikā strādājošie speciālisti individuāli novērtē katra pacienta zobu stāvokli un vēlmes, tāpēc tiek izvēlēta piemērotākā balināšanas metode — ofisa balināšana ar BEYOND® sistēmu vai mājas balināšana ar kapsām. Liela uzmanība tiek pievērsta ne tikai pašai procedūrai, bet arī ieteikumiem pēc tās, lai sasniegto rezultātu saglabātu pēc iespējas ilgāk.
            </p>
            <p>
              Bangų zobārstniecības klīnikā tiek izmantotas progresīvas tehnoloģijas, skaidri paskaidrota ārstēšanas gaita un nodrošināta caurspīdīga cenu noteikšana. Šāda pieeja ļauj pacientiem justies mierīgi un pārliecināti, bet pozitīvās atsauksmes par zobu balināšanu bieži vien uzsver profesionālu komunikāciju, komfortu procedūras laikā un priecīgu galarezultātu.
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div className="mt-8 mb-12 text-left" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Aicinām pierakstīties zobu balināšanai Bangų klīnikā
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
            Ja meklējat uzticamu un profesionālu zobārstniecības klīniku, kurā tiek veikta droša un efektīva zobu balināšana Klaipēdā, aicinām apmeklēt Bangų zobārstniecības klīniku. Mūsu pacienti novērtē ne tikai redzamās estētiskās izmaiņas, bet arī skaidras konsultācijas, uzmanīgu attieksmi un ilgstošu rezultātu, ko apliecina viņu atsauksmes.
            <br /><br />
            Bangų zobārstniecības klīnikā Jūs gaida modernās balināšanas tehnoloģijas, pieredzējuši speciālisti un individuāli risinājumi katram pacientam. Pierakstieties konsultācijai un speriet pirmo soli pretim gaišākam, pārliecību sniedzošam smaidam.
          </p>
          <Link to="/lv/kontakti" className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1">
            Pierakstīties vizītam
          </Link>
        </motion.div>
          </div>
      </motion.div>
    </AnimatedSection>
  )
}
