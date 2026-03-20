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

function HeartPulseIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

function ClipboardListIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  )
}

const tocSections = [
  { id: "cenas", label: "Cenas" },
  { id: "kas-ir", label: "Kas ir zobu ārstēšana?" },
  { id: "kad-nepieciesama", label: "Kad nepieciešama?" },
  { id: "pakalpojumi", label: "Mūsu pakalpojumi" },
  { id: "ka-notiek", label: "Ārstēšanas gaita" },
  { id: "profilakse", label: "Profilaktiskās pārbaudes" },
  { id: "kapec-mes", label: "Kāpēc Bangų klīnika?" },
]

export default function ZobuArstniecibaLv() {
  const pageRef = useRef(null)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Zobu ārstēšana",
    "description": "Profesionāla zobu ārstēšana Klaipēdā. Terapeitiskā ārstēšana, plombēšana, kanālu ārstēšana, neatliekamā palīdzība.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klīnika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu ārstēšana Klaipēdā — Bangų klīnika"
        description="Profesionāla zobu ārstēšana Klaipēdā. Neatliekamā palīdzība, kariesa ārstēšana, plombēšana. Pierakstieties vizītam."
        keywords="zobu ārstēšana, zobārsts, neatliekamā palīdzība, kariess, plombēšana, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-arstnieciba`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-taisymas-gydymas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-arstnieciba` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-taisymas-gydymas` },
        ]}
        structuredData={structuredData}
      />

      <motion.div ref={pageRef} className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start" variants={container} initial="hidden" animate="visible">
          <TableOfContents sections={tocSections} title="Saturs" rootRef={pageRef} cta={{ label: "Pierakstīties vizītei", to: "/kontaktai" }} />
          <div className="min-w-0 flex-1">

        <motion.header className="mb-10 text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionāla zobu ārstēšana Klaipēdā
          </h1>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Zobu sāpes, diskomforts vai profilaktiskas pārbaudes nepieciešamība – tās ir visbiežākās iemesls, kāpēc pacienti vēršas pie zobārsta. Savlaicīgi veikta zobu ārstēšana ļauj ne tikai novērst nepatīkamus simptomus, bet arī saglabāt dabiskos zobus un novērst sarežģītākus ārstēšanas etapus nākotnē.
            </p>
            <p>
              Bangų zobārstniecības klīnikā Klaipēdā sniegtais zobu ārstēšanas pakalpojums aptver plašu procedūru klāstu – no konsultācijām un profilaktiskām pārbaudēm līdz sarežģītām ārstēšanas un atjaunošanas procedūrām. Klīnikas speciālisti operatīvi palīdz gan akūtu zobu sāpju gadījumā, gan plānojot ilgtermiņa ārstēšanu. Kompleksā pieeja ļauj pacientiem saņemt visus nepieciešamos pakalpojumus vienā vietā.
            </p>
          </div>

          <div className="flex justify-start">
             <Link to="/lv/kontakti" className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1">
              Pierakstīties vizītam
            </Link>
          </div>

          <div id="cenas" className="mt-8 scroll-mt-36 2xl:scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Zobu ārstēšanas cenas
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
            <p>
              Zobu ārstēšanas cena ir atkarīga no pacienta vecuma, zobu stāvokļa, izmantotās ārstēšanas metodes un procedūras sarežģītības. Bangų zobārstniecības klīnikā pirms ārstēšanas uzsākšanas vienmēr tiek veikta konsultācija un profilaktiskā pārbaude, kuras laikā tiek sastādīts individuāls ārstēšanas plāns un apspriesta provizoriskā ārstēšanas apjoma un cena.
            </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            <div className="bg-brand-50/50 p-4 border-b border-brand/10 font-bold text-darkblue-700">
              Pieaugušo ārstēšana
            </div>
            <div className="divide-y divide-slate-100">
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Konsultācija un plāna sastādīšana</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">20 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Plombēšana ar gaismas plombu</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">70 – 90 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Plombēšana ar stiklajonomerplombu</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">40 – 60 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Pagaidu plomba</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 40 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Anestēzija / Rentgenuzņēmums</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">katrs 10 €</span>
              </div>
            </div>

            <div className="bg-brand-50/50 p-4 border-y border-brand/10 font-bold text-darkblue-700 mt-2">
              Bērnu ārstēšana
            </div>
            <div className="divide-y divide-slate-100">
               <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Konsultācija bērniem</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">20 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Piena zobu ārstēšana</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 50 €</span>
              </div>
               <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Stiklajonomer / kompomēra plomba</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 30 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Vizīts, ja bērns neļauj ārstēties (līdz 30 min.)</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">no 30 €</span>
              </div>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed text-sm">
            Precīza zobu ārstēšanas cena vienmēr tiek noteikta individuālas konsultācijas laikā, novērtējot konkrēto situāciju un ārstēšanas vajadzības. Skaidra un caurspīdīga cenu veidošana ļauj pacientiem un vecākiem justies droši, plānojot zobu ārstēšanu.
          </p>
          </div>
        </motion.header>

        <motion.section id="kas-ir" className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas ir zobu ārstēšana?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Zobu ārstēšana – tā ir dažādu zobārstniecisko procedūru kopums, kas paredzēts mutes veselības uzturēšanai, bojāto zobu ārstēšanai un to funkcijas un estētikas atjaunošanai. Tā aptver gan profilaktiskās pārbaudes, ļaujot savlaicīgi pamanīt problēmas, gan aktīvo ārstēšanu, kad nepieciešams novērst bojājumus un atjaunot zobu struktūru.
            </p>
            <p>
              Zobu ārstēšanas laikā tiek risinātas tādas problēmas kā zobu kariess, zobu sāpes, jutīgums, iekaisuma procesi vai mehāniski bojājumi. Atkarībā no situācijas ārstēšana var ietvert plombēšanu, sakņu kanālu ārstēšanu, profesionālu mutes higiēnu vai citas procedūras.
            </p>
          </div>
        </motion.section>

        <motion.section id="kad-nepieciesama" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kad nepieciešama zobu ārstēšana?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Zobu ārstēšana nav nepieciešama tikai tad, kad parādās stipras sāpes. Daudzas mutes problēmas attīstās pakāpeniski un ilgu laiku var neizraisīt redzamus simptomus, tāpēc regulāras profilaktiskās pārbaudes ir ārkārtīgi svarīgas. Savlaicīgi pamanītas problēmas ļauj tās atrisināt vienkāršāk un izvairīties no sarežģītākas ārstēšanas nākotnē.
          </p>

          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Pie zobārsta ieteicams vērsties, ja pamanāt šādas pazīmes:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Zobu sāpes vai sāpīgums (spontāni vai ēdot)",
                "Paaugstināts jutīgums pret aukstu, karstu vai saldu",
                "Noskaldīts, plaisājis vai tumšāks zobs",
                "Asiņojošas vai uzpampušas smaganas",
                "Nepatīkama mutes smarža (nepāriet tīrot)",
                "Nepieciešama profilaktiskā pārbaude"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Regulāra un savlaicīga zobu ārstēšana palīdz saglabāt zobu veselību, samazināt ārstēšanas apjomu un izmaksas, kā arī nodrošināt labu pašsajūtu ilgtermiņa perspektīvā.
          </p>
        </motion.section>

        <motion.section id="pakalpojumi" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kādus zobu ārstēšanas pakalpojumus sniedzam?
          </h2>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-soft">
            <p className="text-slate-700 mb-6 leading-relaxed">
              Bangų zobārstniecības klīnikā tiek sniegti visi galvenie zobu ārstēšanas pakalpojumi, ļaujot pacientiem saņemt kompleksu palīdzību vienā vietā. Ņemot vērā individuālo situāciju, tiek sastādīts skaidrs un secīgs ārstēšanas plāns.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {[
                "Konsultācijas un ārstēšanas plāna sastādīšana",
                "Zoba plombēšana (ar gaismas/stiklajonomerplombu)",
                "Dentālā rentgenogrāfija",
                "Profesionāla mutes higiēna",
                "Estētiskā zobu plombēšana",
                "Zobu sakņu kanālu ārstēšana",
                "Bērnu zobu ārstēšana",
                "Zobu ekstrakcija",
                "Zobu implantācija",
                "Kaula augmentācijas operācijas",
                "Zobu protezēšana"
              ].map((service, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <p className="text-slate-700 mt-4 leading-relaxed">
            Plašs pakalpojumu klāsts ļauj nodrošināt, ka zobu ārstēšana tiek veikta secīgi, droši un vērsta uz ilgtermiņa rezultātu, nesūtot pacientu no vienas klīnikas uz otru.
          </p>
        </motion.section>

        <motion.section id="ka-notiek" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kā notiek zobu ārstēšana mūsu klīnikā?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Konsultācija un diagnostika</h3>
              <p className="text-sm text-slate-600">Pārbaude, rentgena izmeklēšana, stāvokļa novērtēšana. Tiek sastādīts individuāls ārstēšanas plāns ar prioritātēm.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Ārstēšanas veikšana</h3>
              <p className="text-sm text-slate-600">Tiek veiktas procedūras (plombēšana, kanālu ārstēšana u.c.), izmantojot anestēziju, nodrošinot komfortu.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Ieteikumi un kopšana</h3>
              <p className="text-sm text-slate-600">Padomi par kopšanu mājās un nākamā vizīta plānošana ilgtermiņa rezultāta nodrošināšanai.</p>
            </div>
          </div>
        </motion.section>

        <motion.section id="profilakse" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kāpēc svarīgas profilaktiskās pārbaudes?
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ShieldCheckIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Agrīna diagnostika</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Ļauj noteikt karieso vai iekaisumu jau sākotnējā stadijā, kad nav jūtamas sāpes.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <ClipboardListIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Vienkāršāka ārstēšana</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Savlaicīgi pamanītas problēmas prasa mazāku iejaukšanos, īsāku laiku un mazākas izmaksas.
              </p>
            </div>
            <div className="rounded-2xl border border-brand bg-white shadow-soft hover:shadow-md transition p-6 flex flex-col items-start">
              <HeartPulseIcon />
              <h3 className="font-semibold text-darkblue-700 mb-2">Ilgtermiņa veselība</h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Regulāri vizīti palīdz izvairīties no negaidītām sāpēm un saglabāt dabiskos zobus pēc iespējas ilgāk.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section id="kapec-mes" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kāpēc vērts izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Izvēloties zobu ārstēšanu, svarīgi ir ne tikai ātri novērst problēmu, bet arī nodrošināt ilgtermiņa rezultātu un drošu ārstēšanas procesu. Bangų zobārstniecības klīnikā zobu ārstēšana tiek veikta, vadoties pēc mūsdienu zobārstniecības standartiem, apvienojot pieredzi, modernās tehnoloģijas un individuālu pieeju katram pacientam.
            </p>
            <p>
              Klīnikā strādājošie speciālisti īpašu uzmanību pievērš precīzai diagnostikai, skaidrai ārstēšanas plāna sastādīšanai un secīgai tā īstenošanai. Tas ļauj pacientiem saprast ārstēšanas gaitu, izvēlēties piemērotākos risinājumus un justies droši visa procesa laikā.
            </p>
            <p>
              Pacienti novērtē mierīgu komunikāciju, caurspīdīgu cenu veidošanu un uzmanīgu pieeju, un pozitīvas atsauksmes bieži uzsver profesionalitāti, komfortu un uzticēšanos gala rezultātam.
            </p>
          </div>
        </motion.section>

        <motion.div className="mt-8 mb-12 text-left" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Aicinām pierakstīties zobu ārstēšanai Bangų klīnikā
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
            Ja jūtat zobu sāpes, pamanījāt diskomfortu vai vienkārši vēlaties veikt profilaktisku pārbaudi, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Savlaicīgi uzsākta zobu ārstēšana palīdz izvairīties no sarežģītākām procedūrām un saglabāt dabiskos zobus.
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
