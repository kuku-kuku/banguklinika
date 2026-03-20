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

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function ChipIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
    </svg>
  )
}

const tocSections = [
  { id: "cenas", label: "Cenas" },
  { id: "kas-ir", label: "Kas ir protezēšana?" },
  { id: "kad-nepieciesama", label: "Kad nepieciešama?" },
  { id: "cerec", label: "CEREC tehnoloģija" },
  { id: "materiali", label: "Materiāli" },
  { id: "ka-notiek", label: "Protezēšanas gaita" },
  { id: "ilgums", label: "Kalpošanas ilgums" },
  { id: "miti", label: "Biežākie mīti" },
]

export default function ZobuProtezesanaLv() {
  const pageRef = useRef(null)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Zobu protezēšana",
    "description": "Profesionāla zobu protezēšana Klaipēdā. CEREC tehnoloģija, cirkonija keramika, protezēšana uz implantiem.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klīnika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu protezēšana Klaipēdā — Bangų klīnika"
        description="Profesionāla zobu protezēšana Klaipēdā. 3D CEREC tehnoloģija, cirkonija keramika, bezmetāla keramika un protezēšana uz implantiem. Pieejamas cenas."
        keywords="zobu protezēšana, cerec, cirkonija keramika, protēzes, Klaipēda, implanti"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-protezesana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-protezavimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-protezesana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-protezavimas` },
        ]}
        structuredData={structuredData}
      />

      <motion.div ref={pageRef} className="max-w-screen-2xl mx-auto px-4 xl:px-8 2xl:px-4 2xl:flex 2xl:gap-8 2xl:items-start" variants={container} initial="hidden" animate="visible">
          <TableOfContents sections={tocSections} title="Saturs" rootRef={pageRef} cta={{ label: "Pierakstīties vizītei", to: "/kontaktai" }} />
          <div className="min-w-0 flex-1">

        {/* HERO */}
        <motion.header className="mb-10 text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionāla zobu protezēšana Klaipēdā
          </h1>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Zobu zudums vai nopietni bojājumi var ietekmēt ne tikai smaida estētiku, bet arī košļāšanas funkciju, runu un vispārējo pašsajūtu. Mūsdienu zobārstniecība ļauj efektīvi atjaunot zobus, taču pacientiem bieži svarīgs ir arī cenas aspekts. Tieši tāpēc Bangų zobārstniecības klīnikā cenšamies apvienot augstu ārstēšanas kvalitāti, progresīvas tehnoloģijas un racionālu cenu veidošanu.
            </p>
            <p>
              Bangų zobārstniecības klīnikā Klaipēdā tiek veikta profesionāla zobu protezēšana, nezaudējot profesionalitāti vai estētiku. Modernās ciparu tehnoloģijas, piemēram, 3D CEREC sistēma, ļauj optimizēt ārstēšanas procesu, samazināt laika izmaksas un piedāvāt pacientiem pievilcīgus, ilglaikīgus risinājumus. Katram pacientam tiek izstrādāts individuāls protezēšanas plāns, ņemot vērā vajadzības, mutes stāvokli un cerības.
            </p>
          </div>

          <div className="flex justify-start">
             <Link to="/lv/kontakti" className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1">
              Pierakstīties vizītam
            </Link>
          </div>

          <div id="cenas" className="mt-8 scroll-mt-36 2xl:scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Zobu protezēšanas cenas
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
             <p>
               Zobu protezēšanas cena ir atkarīga no izvēlētā risinājuma, izmantojamajiem materiāliem, protezēšanas tehnoloģijas un pacienta individuālā mutes stāvokļa. Bangų zobārstniecības klīnikā katram pacientam tiek sastādīts individuāls protezēšanas plāns.
             </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            <div className="bg-brand-50/50 p-4 border-b border-brand/10 font-bold text-darkblue-700">
              CEREC tehnoloģija (ātra izgatavošana)
            </div>
            <div className="divide-y divide-slate-100">
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">CEREC kronītis uz dabiskā zoba</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 400 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">CEREC kronītis uz implanta</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">450 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">CEREC inlejs vai lamināts</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 600 €</span>
              </div>
            </div>

            <div className="bg-brand-50/50 p-4 border-y border-brand/10 font-bold text-darkblue-700 mt-2">
              Keramiskie kronīši
            </div>
            <div className="divide-y divide-slate-100">
               <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Metālkeramikas kronītis</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 350 €</span>
              </div>
               <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Bezmetāla E-MAX keramikas kronītis</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 400 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Cirkonija keramikas kronītis</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 400 €</span>
              </div>
            </div>

            <div className="bg-brand-50/50 p-4 border-y border-brand/10 font-bold text-darkblue-700 mt-2">
              Papildus procedūras un nospiedumi
            </div>
            <div className="divide-y divide-slate-100">
               <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Lamināts</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 600 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Pagaidu kronītis (kabineta)</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 40 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Ciparu / silikona nospiedumi</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">150 €</span>
              </div>
               <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Zobu plāksnes</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 350 €</span>
              </div>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed text-sm">
            Precīza zobu protezēšanas cena tiek apspriesta individuālas konsultācijas laikā, novērtējot pacienta mutes stāvokli, izvēlēto tehnoloģiju un ārstēšanas apjomu.
          </p>
          </div>
        </motion.header>

        <motion.section id="kas-ir" className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas ir zobu protezēšana?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Zobu protezēšana – tā ir zobārstnieciska procedūra, kuras laikā tiek atjaunoti zaudētie vai stipri bojātie zobi, izmantojot dažādus risinājumus. Protezēšanas mērķis – atjaunot pilnvērtīgu košļāšanas funkciju, estētisko izskatu un komfortu ikdienas dzīvē.
            </p>
            <p>
              Atkarībā no situācijas zobu protezēšanu var izmantot gan viena zoba defekta atjaunošanai, gan vairāku vai visu zobu atjaunošanai. Mūsdienu protēzes tiek izgatavots tā, lai tās būtu izturīgas, estētiskas un pēc iespējas tuvākas dabiskajiem zobiem. Izvēloties piemērotu metodi un materiālus, zobu protezēšana var būt ne tikai finansiāli pieejama, bet arī uzticams ilglaicīgs risinājums.
            </p>
          </div>
        </motion.section>

        <motion.section id="kad-nepieciesama" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kad nepieciešama zobu protezēšana?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Zobu protezēšana tiek ieteikta gadījumos, kad dabisko zobu struktūra vairs nevar pilnīgi pildīt savu funkciju vai kad zobu trūkums ietekmē ikdienas komfortu. Savlaicīgi izvēlēts protezēšanas risinājums palīdz izvairīties no turpmākām mutes veselības problēmām un sarežģītākas ārstēšanas nākotnē.
          </p>

          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Zobu protezēšana var būt nepieciešama, ja:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Trūkst viena vai vairāku zobu (apgrūtināta košļāšana/runa)",
                "Zobi ir stipri bojāti, nodilušī vai vājināti",
                "Vecās protēzes vai restaurācijas vairs nepilda savu funkciju",
                "Radušās estētiskas problēmas, kas mazina pašapziņu",
                "Mainījusies sakodiena vai jūtams diskomforts"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Šādos gadījumos individuāli plānots un racionāli izvēlēts risinājums ļauj nodrošināt, ka zobu protezēšana Klaipēdā ir ne tikai pieejama, bet arī efektīva ilgtermiņa perspektīvā.
          </p>
        </motion.section>

        <motion.section id="cerec" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
             <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                  Progresīva 3D CEREC estētiskā restaurācija
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Bangų zobārstniecības klīnikā zobu protezēšanai plaši tiek izmantota progresīvā 3D CEREC tehnoloģija, kas ļauj sasniegt ārkārtīgi precīzu un ātru rezultātu. Ciparu skenēšanas laikā tiek izveidots precīzs zobu modelis, kas ļauj individuāli pielāgot katru restaurāciju pēc pacienta anatomijas.
                  </p>
                  <p>
                    CEREC sistēma sniedz iespēju izvairīties no tradicionālajiem nospiedumiem, izveidot ārkārtīgi precīzu restaurāciju, izgatavot protēzi uz vietas dažu stundu laikā un uzreiz veikt galīgo protezēšanu bez pagaidu kronīšiem.
                  </p>
                  <p>
                    Šī tehnoloģija ne tikai saīsina ārstēšanas laiku, bet arī ļauj optimizēt procesu, tāpēc pacientiem var tikt piedāvāta kvalitatīva zobu protezēšana, nezaudējot estētiku vai ilgmūžību.
                  </p>
                </div>
             </div>
             <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
                <ChipIcon />
                <p className="font-semibold text-darkblue-700 mt-2">Ciparu precizitāte</p>
                <p className="text-sm text-slate-500">Bez nospiedumiem, ātrs rezultāts</p>
             </div>
          </div>
        </motion.section>

        <motion.section id="materiali" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            No kādiem materiāliem tiek izgatavoti zobu protēzi?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <h3 className="font-bold text-darkblue-700 mb-2">Cirkonija oksīda keramika</h3>
               <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                 Ārkārtīgi izturīgs materiāls, piemērots gan priekšējiem, gan sānu zobiem. Izturīgs pret nodilumu, bez metāla malas, lēnāk vada temperatūru.
               </p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <h3 className="font-bold text-darkblue-700 mb-2">Bezmetāla keramika E-MAX</h3>
               <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                 Izceļas ar izcilu estētiku un dabīgu gaismas caurlaidību. Ideāli piemērota priekšējiem zobiem, bioloģiski saderīga, nemaina krāsu.
               </p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <h3 className="font-bold text-darkblue-700 mb-2">Protezēšana uz implantiem</h3>
               <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                 Mākslīgās saknes (implanti) atjauno stabilitāti un košļāšanas spēku. Izmantojam Straumann® un Medentika® sistēmas, kas ļauj atjaunot vienu vai visus zobus.
               </p>
             </div>
          </div>
        </motion.section>

        <motion.section id="ka-notiek" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kā notiek zobu protezēšana klīnikā?
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Diagnostika</h3>
              <p className="text-sm text-slate-600">Visaptveroša analīze, ciparu plānošana, materiālu izvēle.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Sagatavošana</h3>
              <p className="text-sm text-slate-600">Mutes sagatavošana, ārstēšana, nospiedumi vai skenēšana.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Izgatavošana</h3>
              <p className="text-sm text-slate-600">Protēžu izgatavošana (ar CEREC – pat tajā pašā dienā).</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Kontrole</h3>
              <p className="text-sm text-slate-600">Piemērotības pārbaude, ieteikumi kopšanai.</p>
            </div>
          </div>
        </motion.section>

        <motion.section id="ilgums" className="mb-12 space-y-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <div>
             <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Cik ilgi kalpo zobu protēzes?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Zobu protēžu kalpošanas laiks ir atkarīgs no materiāliem un kopšanas. Cirkonija un E-MAX keramika ir ārkārtīgi ilgmūžīga. Regulāra higiēna un profilaktiskie vizīti ļauj protēzēm kalpot daudzus gadus.
            </p>
          </div>
          <div>
             <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Ko ir svarīgi zināt pēc zobu protezēšanas?
            </h2>
            <div className="bg-brand-50/30 p-6 rounded-xl border border-brand/10">
              <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                <li>Iespējams īss adaptācijas periods (svešāda sajūta, viegls diskomforts).</li>
                <li>Svarīga rūpīga higiēna (tāpat kā dabiskajiem zobiem).</li>
                <li>Pirmajās dienās izvairīties no ļoti cieta ēdiena.</li>
                <li>Ja diskomforts nepāriet, vērsties korekcijai.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        <motion.section id="miti" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Biežākie mīti par zobu protezēšanu
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #1: protēzes izskatās nedabīgi</h3>
              <p className="text-slate-600 text-sm">Moderna keramika ļauj izgatavot protēzes, kuras vizuāli neatšķiras no dabiskajiem zobiem (krāsa, caurspīdīgums).</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #2: grūti pieradināties</h3>
              <p className="text-slate-600 text-sm">Pareizi pielāgotas protēzes ir komfortablas. Adaptācija ilgst īsu laiku, vēlāk pacienti aizmirst par protēzēm.</p>
            </div>
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mīts #3: tikai vecākiem cilvēkiem</h3>
              <p className="text-slate-600 text-sm">Protezēšana nepieciešama jebkurā vecumā, ja zobi ir zaudēti vai stipri bojāti.</p>
            </div>
          </div>
        </motion.section>

        <motion.div className="mt-8 mb-12 text-left" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Aicinām pierakstīties zobu protezēšanas konsultācijai Bangų klīnikā
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
            Ja apsverat zobu protezēšanu vai meklējat risinājumu, kā atjaunot zaudētos vai stipri bojātos zobus, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Modernās tehnoloģijas, pieredzējuši speciālisti un caurspīdīga cenu veidošana ļauj piedāvāt racionālus risinājumus gan funkcijas, gan estētikas ziņā.
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
