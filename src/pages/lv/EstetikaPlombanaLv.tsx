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

const tocSections = [
  { id: "cenas", label: "Cenas" },
  { id: "kas-ir", label: "Kas ir estētiskā plombēšana?" },
  { id: "problemas", label: "Kādas problēmas risina?" },
  { id: "ka-notiek", label: "Procedūras gaita" },
  { id: "priekstatas", label: "Priekšrocības" },
  { id: "ilgums", label: "Rezultāta ilgums" },
  { id: "pec-proceduras", label: "Pēc procedūras" },
  { id: "drosiba", label: "Vai droša?" },
  { id: "kapec-mes", label: "Kāpēc Bangų klīnika?" },
]

export default function EstetikaPlombanaLv() {
  const pageRef = useRef(null)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Estētiskā zobu plombēšana",
    "description": "Estētiskā zobu plombēšana Klaipēdā. Smaida korekcija, spraugu aizvēršana, saplaisājušu zobu atjaunošana.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klīnika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Estētiskā plombēšana Klaipēdā — Bangų zobārstniecības klīnika"
        description="Estētiskā zobu plombēšana — ātra un efektīva metode smaida atjaunošanai. Koriģējam saplaisājumus, spragas un krāsu. Pierakstieties konsultācijai."
        keywords="estētiskā plombēšana, zobu restaurācija, smaida korekcija, spragas starp zobiem, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/estetiska-plombana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/estetinis-plombavimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/estetiska-plombana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/estetinis-plombavimas` },
        ]}
        structuredData={structuredData}
      />

      <motion.div ref={pageRef} className="max-w-screen-2xl mx-auto px-4 xl:px-8 2xl:px-4 2xl:flex 2xl:gap-8 2xl:items-start" variants={container} initial="hidden" animate="visible">
          <TableOfContents sections={tocSections} title="Saturs" rootRef={pageRef} cta={{ label: "Pierakstīties vizītei", to: "/kontaktai" }} />
          <div className="min-w-0 flex-1">

        {/* HERO / IEVADS */}
        <motion.header className="mb-12 text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionāla estētiskā zobu plombēšana Klaipēdā
          </h1>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 mb-8">
            <p>
              Smaida estētikai ir liela ietekme uz pašpārliecību un vispārējo labsajūtu. Pat nelieli zobu defekti — saplaisājumi, nodilumi, spragas vai krāsas nevienmērīgums — var pamanāmi mainīt smaida izskatu. Šādos gadījumos estētiskā plombēšana kļūst par ātru un efektīvu risinājumu, kas ļauj atjaunot dabisko zobu izskatu bez sarežģītām un ilgstošām procedūrām.
            </p>
            <p>
              Bangų zobārstniecības klīnikā Klaipēdā veiktā zobu estētiskā plombēšana ir viens no galvenajiem estētiskās zobārstniecības pakalpojumiem. Procedūras laikā tiek tiekts ne tikai uzlabot zobu izskatu, bet arī maksimāli saglabāt dabisko zobu audu. Individuāla pieeja, modernālie materiāli un rūpīgs darbs ļauj sasniegt harmonisku un dabiski izskatīgu smaidu.
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
            Estētiskās plombēšanas cenas mūsu klīnikā
          </h2>
          <div className="text-slate-700 leading-relaxed space-y-4 mb-6">
            <p>
              Estētiskās plombēšanas cena ir atkarīga no restaurējamā zoba stāvokļa, bojājuma apjoma un nepieciešamajām estētiskajām korekcijām. Pirms procedūras vienmēr tiek veikta konsultācija, kuras laikā tiek novērtēta situācija un izvēlēts piemērotākais ārstēšanas risinājums optimāla estētiska un funkcionāla rezultāta sasniegšanai.
            </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            <div className="divide-y divide-slate-100">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 hover:bg-brand-50/30 transition">
                <span className="text-slate-700 font-medium">Estētiskā viena zoba plombēšana</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap mt-2 sm:mt-0 ml-0 sm:ml-4">150 – 200 €</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 hover:bg-brand-50/30 transition">
                <span className="text-slate-700 font-medium">Estētiskās plombas pulēšana (atjaunošana)</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap mt-2 sm:mt-0 ml-0 sm:ml-4">no 29 €</span>
              </div>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4">
            <p>
              Procedūras laikā zobs tiek atjaunots ar slāņošanas metodi, pielāgojot formu, krāsu un virsmas tekstūru dabīgajiem zobiem.
            </p>
            <p>
              Ja nepieciešama tikai esošās restaurācijas atjaunošana, tiek veikta estētiskās plombas pulēšana. Šī procedūra palīdz atjaunot spīdumu, uzlabot estētisko izskatu un pagarināt restaurācijas kalpošanas laiku.
            </p>
            <p>
              Precīzs procedūras apjoms un galīgā cena tiek apspriesta individuālās konsultācijas laikā, ņemot vērā pacienta vajadzības un vēlamo rezultātu. Caurspīdīga cenu noteikšana ļauj pieņemt pārliecinātu lēmumu par estētiskās zobārstniecības pakalpojumiem Klaipēdā — mūsu klīnikā.
            </p>
          </div>
          </div>
        </motion.header>

        {/* KAS IR ESTĒTISKĀ PLOMBĒŠANA */}
        <motion.section id="kas-ir" className="mb-14 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas ir estētiskā plombēšana?
          </h2>
          <div className="bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10 space-y-4 text-slate-700 leading-relaxed">
            <p>
              Estētiskā plombēšana ir zobārstniecības procedūra, kuras laikā zobi tiek atjaunoti ar slāņošanas metodi, izmantojot augstas estētikas restaurācijas materiālus. Šī metode ļauj precīzi atjaunot zoba formu, krāsu, virsmas tekstūru un dabisko spīdumu, vienlaikus maksimāli aizsargājot veselās zobu audis.
            </p>
            <p>
              Estētiskās plombēšanas laikā var tikt atjaunoti nodilušie, saplaisājušie, kariesa vai citādi bojātie zobi, kā arī koriģēta to forma, aizvērtas spragas starp zobiem vai maigi koriģēta zobu nokrāsa. Atkarībā no situācijas var koriģēt vienu zobu vai pat vairākus priekšzobus vienas vizītes laikā, tāpēc rezultāts bieži vien tiek sasniegts tajā pašā dienā.
            </p>
            <p>
              Bangų zobārstniecības klīnikā izmantotie modernālie restaurācijas materiāli ļauj minimāli mainīt cietās zobu audis un saglabāt ilgstošu rezultātu. Viena zoba restaurācija vidēji ilgst aptuveni 1,5 stundas, un pirms procedūras parasti ieteicams veikt profesionālu mutes higiēnu, lai nodrošinātu optimālu estētisko un funkcionālo rezultātu. Šāda pieeja ļauj sasniegt augstu kvalitāti, ko meklē pacienti, kas interesējas par labāko estētisko plombēšanu Klaipēdā.
            </p>
          </div>
        </motion.section>

        {/* KĀDAS PROBLĒMAS VAR ATRISINĀT */}
        <motion.section id="problemas" className="mb-14 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kādas problēmas var atrisināt ar estētisko plombēšanu?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Estētiskā plombēšana ir universāla procedūra, kas ļauj atrisināt dažādas — gan estētiskas, gan funkcionālas — zobu problēmas. Zahumi ar slāņošanas tehniku un modernajiem restaurācijas materiāliem var ļoti precīzi atjaunot dabisko zobu izskatu, pielāgojot to visas smaida proporcijām.
          </p>

          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Ar estētisko plombēšanu visbiežāk tiek risinātas šādas problēmas:</h3>
            <div className="grid sm:grid-cols-1 gap-3">
              {[
                "Nodilušie vai saplaisājušie zobi, kad bojāta zoba mala vai virsma",
                "Kariesa bojātie zobi, kad svarīga ne tikai ārstēšana, bet arī estētiska atjaunošana",
                "Spragas starp zobiem (diastēmas), īpaši priekšzobu apgabalā",
                "Nepareiza zobu forma vai garums, kad zobi izskatās pārāk īsi vai nevienmērīgi",
                "Krāsas nevienmērīgums, ko nav iespējams novērst ar zobu balināšanu"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Atkarībā no situācijas ar estētisko plombēšanu var koriģēt vienu zobu vai vairākus zobus vienlaikus. Vienas vizītes laikā bieži tiek atjaunoti 4–6 priekšzobi, tāpēc pacients rezultātu redz tajā pašā dienā. Tas ir īpaši pievilcīgs risinājums tiem, kas meklē ātru un efektīvu risinājumu estētiskās zobārstniecības jomā.
          </p>
        </motion.section>

        {/* KĀ TIEK VEIKTA ESTĒTISKĀ PLOMBĒŠANA (SOĻI) */}
        <motion.section id="ka-notiek" className="mb-14 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kā tiek veikta estētiskā plombēšana?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Estētiskā plombēšana Bangų zobārstniecības klīnikā tiek veikta, ievērojot konsekventu un rūpīgi plānotu procedūras gaitu, kas nodrošina gan estētiku, gan zobu ilgmūžību. Katrs posms tiek individuāli pielāgots, ņemot vērā pacienta zobu stāvokli un vēlamo rezultātu.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
               <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">01</div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Konsultācija un plānošana</h3>
              <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                Procedūra sākas ar rūpīgu apskati, kuras laikā tiek novērtēts zobu stāvoklis, forma, krāsa un sakodiens. Tiek apspriestas pacienta vēlmes un iespējamās korekcijas robežas, lai sasniegtu dabīgu rezultātu.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
               <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">02</div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Sagatavošanās procedūrai</h3>
              <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                Pirms estētiskās plombēšanas parasti ieteicams veikt profesionālu mutes higiēnu. Tas palīdz nodrošināt tīru zobu virsmu un labāku restaurācijas materiālu pielipšanu.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
               <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">03</div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Zobu restaurācija ar slāņiem</h3>
              <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                Izmantojot modernos plombēšanas materiālus, zobs tiek atjaunots slāņos, veidojot dabīgu zoba anatomiju un nokrāsu. Viena zoba restaurācija vidēji ilgst aptuveni 1,5 stundas, un darbs tiek veikts, maksimāli saudzējot veselās zobu audis.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
               <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">04</div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Galīgā formēšana un pulēšana</h3>
              <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                Procedūra tiek pabeigta ar rūpīgu zobu virsmas pulēšanu, lai atjaunotie zobi būtu gludi, spīdīgi un harmoniski iederoties vispārējā smaida estētikā.
              </p>
            </div>
          </div>

          <p className="text-slate-700 mt-6 leading-relaxed">
            Šāds konsekvents process ļauj sasniegt estētisku, dabīgu un ilgstošu rezultātu, kādu gaida pacienti, kas meklē labāko estētisko plombēšanu Klaipēdā.
          </p>
        </motion.section>

        {/* PRIEKŠROCĪBAS */}
        <motion.section id="priekstatas" className="mb-14 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kādas ir estētiskās plombēšanas priekšrocības?
          </h2>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4 text-slate-700 leading-relaxed">
            <p>
              Estētiskā plombēšana tiek vērtēta kā viena no universālākajām estētiskās zobārstniecības procedūrām, jo ļauj sasniegt izteiktu rezultātu minimāli invazīvā veidā. Šī metode ir piemērota pacientiem, kuri vēlas uzlabot smaida estētiku, saglabājot pēc iespējas vairāk dabīgo zobu audu.
            </p>
            <p>
              Viena no galvenajām estētiskās plombēšanas priekšrocībām ir ātrais rezultāts. Bieži vienas vizītes laikā var atjaunot pat 4–6 priekšzobus, tāpēc smaida maiņa ir redzama tajā pašā dienā. Tas ir īpaši aktuāli pacientiem, kas meklē efektīvu risinājumu pirms svarīgiem personīgiem vai profesionāliem notikumiem.
            </p>
            <p>
              Procedūras laikā tiek izmantoti modernālie restaurācijas materiāli, kas ļauj ļoti precīzi atjaunot zobu krāsu, formu un virsmas tekstūru. Zobi tiek atjaunoti slāņos, tāpēc galīgais izskats izskatās dabiski un harmoniski iederas vispārējā smaida estētikā.
            </p>
            <p>
              Svarīga priekšrocība ir minimālā zobu slīpēšana vai noteiktos gadījumos tās nav vispār. Tas ļauj maksimāli saglabāt veselās cietās audis, un pati procedūra ir saudzīga un droša. Šo īpašību dēļ estētiskā plombēšana bieži tiek izvēlēta kā alternatīva sarežģītākam protezēšanai vai laminētām, īpaši tad, kad tiek meklēts ātrs un estētiski pievilcīgs risinājums.
            </p>
          </div>
        </motion.section>

        {/* CIK ILGI SAGLABĀJAS */}
        <motion.section id="ilgums" className="mb-14 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Cik ilgi saglabājas estētiskās plombēšanas rezultāts?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Estētiskās plombēšanas rezultāta ilgmūžība ir atkarīga no vairākiem faktoriem, tāpēc katra pacienta gadījums ir individuāls. Pareizi veikta estētiskā plombēšana un atbildīga kopšana ļauj baudīt estētisku un funkcionālu rezultātu daudzus gadus.
            </p>
            <p>
              Lielāko ietekmi uz rezultātu atstāj ikdienas mutes kopšanas paradumi. Regulāra zobu tīrīšana, starpzobu higiēna un profilaktiski zobārsta apmeklējumi palīdz saglabāt restaurāciju estētisko izskatu un strukturālo stabilitāti. Svarīgi arī ēšanas paradumi un kaitīgu faktoru, piemēram, cietu priekšmetu košļāšanas vai nagu kodiena, izvairīšanās.
            </p>
            <p>
              Rezultāta ilgumu ietekmē arī restaurācijas vieta un apjoms. Priekšzobu estētiskā plombēšana, kurai nav lielas košļāšanas slodzes, bieži saglabājas ilgāk. Laika gaitā restaurācijas var dabiski nodilties, tāpēc dažos gadījumos var būt nepieciešamas nelielas korekcijas vai pulēšana, kas ļauj atjaunot estētisko izskatu un pagarināt plombu kalpošanas laiku.
            </p>
          </div>
        </motion.section>

        {/* KO SVARĪGI ZINĀT PĒC */}
        <motion.section id="pec-proceduras" className="mb-14 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Ko svarīgi zināt pēc estētiskās plombēšanas?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Pēc estētiskās plombēšanas procedūras pacienti parasti uzreiz pamana smaida estētikas uzlabojumu. Atjaunoto zobu virsmas kļūst gludi, spīdīgas un dabiski iederas ar pārējiem zobiem. Tomēr pirmajās dienās pēc procedūras svarīgi ievērot noteiktus ieteikumus, lai rezultāts saglabātos pēc iespējas ilgāk.
            </p>
            <div className="bg-brand-50/30 p-6 rounded-xl border border-brand/10">
              <p className="mb-4">
                Pirmās stundas pēc procedūras ieteicams izvairīties no ļoti cietas vai intensīvi krāsojošas pārtikas un dzērieniem, īpaši ja tika atjaunoti priekšzobi. Tāpat ieteicams nelietot zobus kā instrumentus un izvairīties no lielas mehāniskas slodzes restaurētajai vietai.
              </p>
              <p>
                Ikdienas mutes kopšanai pēc estētiskās plombēšanas jābūt maigai, bet konsekventi. Ieteicams tīrīt zobus ar maigu vai vidēji maigu suku, lietot neabrazīvu zobu pastu un regulāri tīrīt starpzobus. Ja zobārsts sniedz individuālos ieteikumus, svarīgi tos ievērot.
              </p>
            </div>
            <p>
              Regulāras profilaktiski vizītes un, ja nepieciešams, estētiskās plombas pulēšana palīdz saglabāt restaurāciju spīdumu, krāsu un vispārējo estētisko izskatu. Šāda konsekventa pieeja ļauj ilgi baudīt kārtīgu un harmoniski izskatīgu smaidu.
            </p>
          </div>
        </motion.section>

        {/* VAI TAS IR DROŠI */}
        <motion.section id="drosiba" className="mb-14 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Vai estētiskā plombēšana ir droša?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Estētiskā plombēšana ir droša un plaši izmantota zobārstniecības procedūra, ja tā tiek veikta saskaņā ar mūsdienu ārstēšanas standartiem un izmantojot kvalitatīvus restaurācijas materiālus. Bangų zobārstniecības klīnikā šī procedūra tiek plānota individuāli, lai maksimāli aizsargātu dabīgās zobu audis un nodrošinātu ilgstošu rezultātu.
            </p>
            <p>
              Procedūras laikā izmantotie modernālie plombēšanas materiāli izceļas ar labu bioloģisko savietojamību, stiprumu un estētiskajām īpašībām. Zobi tiek atjaunoti slāņos, tāpēc tiek saglabāta to dabīgā struktūra, bet intervence ir minimāla. Daudzos gadījumos nav nepieciešama liela zobu slīpēšana, kas samazina jutīguma un citu nevēlamu sajūtu risku.
            </p>
            <p>
              Svarīgi uzsvērt, ka drošums ir atkarīgs ne tikai no materiāliem, bet arī no pareizas plānošanas un speciālista pieredzes. Pirms procedūras tiek novērtēts zobu stāvoklis, sakodiens un pacienta vēlmes, tāpēc estētiskā plombēšana tiek veikta tikai tad, kad tā ir piemērota un var nodrošināt prognozējamu rezultātu.
            </p>
          </div>
        </motion.section>

        {/* KĀPĒC MĒS */}
        <motion.section id="kapec-mes" className="mb-14 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kāpēc vērts izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Izvēloties estētisko plombēšanu, svarīgi uzticēties klīnikai, kurā valda profesionāla pieredze, estētiskā izjūta un atbildīga attieksme pret katru pacientu. Bangų zobārstniecības klīnikā estētiskā zobārstniecība balstās uz individuāliem risinājumiem un rūpīgu darba plānošanu.
            </p>
            <p>
              Klīnikā strādājošie speciālisti lielu uzmanību pievērš ne tikai procedūras tehniskai izpildei, bet arī galīgajai estētiskajai sajūtai — tiek atjaunota zobu forma, proporcijas un krāsas harmonija visā smaidā. Modernās tehnoloģijas un augstas kvalitātes materiāli ļauj sasniegt dabiski izskatīgu un ilgstošu rezultātu.
            </p>
            <p>
              Pacienti novērtē skaidru komunikāciju, caurspīdīgu cenu noteikšanu un konsekventu attieksmi pret ārstēšanu, bet pozitīvās atsauksmes bieži uzsver profesionālu komunikāciju, rūpīgumu un priecīgu galarezultātu. Tas ir īpaši svarīgi pacientiem, kas meklē uzticamu risinājumu Klaipēdā.
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div className="mt-8 mb-12 text-left" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Aicinām pierakstīties estētiskai plombēšanai Bangų klīnikā
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
            Ja meklējat uzticamu zobārstniecības klīniku, kurā tiek veikta droša un estētiski augstas kvalitātes zobu estētiskā plombēšana, aicinām apmeklēt Bangų zobārstniecības klīniku. Šeit Jūs gaida ne tikai individuāla pieeja, modernās tehnoloģijas un pieredzējuši speciālisti, kas tiecas pēc dabīga un ilgstoša rezultāta, bet arī labākā estētiskā plombēšana Klaipēdā.
            <br/><br/>
            Pierakstieties konsultācijai un speriet pirmo soli pretim harmoniskam, kārtīgam un pārliecību sniedzošam smaidam.
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
