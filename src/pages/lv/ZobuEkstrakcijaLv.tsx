import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { CLINIC } from '../../data/clinic'
import { SITE_URL } from '../../i18n/lv'
import { useRef } from 'react'
import { TableOfContents } from '../../components/TableOfContents'

const tocSections = [
  { id: "cenas", label: "Cenas" },
  { id: "kas-ir", label: "Kas ir ekstrakcija?" },
  { id: "kad-nepieciesama", label: "Kad nepieciešama?" },
  { id: "veidi", label: "Ekstrakcijas veidi" },
  { id: "kavesanas-risks", label: "Atlikšanas risks" },
  { id: "ka-notiek", label: "Procedūras gaita" },
  { id: "sapes-aprupe", label: "Sāpes un aprūpe" },
  { id: "kapec-mes", label: "Kāpēc Bangų klīnika?" },
]

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

function ScalpelIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  )
}

function ExclamationIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
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

export default function ZobuEkstrakcijaLv() {
  const pageRef = useRef(null)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Zobu ekstrakcija",
    "description": "Profesionāla zobu ekstrakcija Klaipēdā. Nesāpīga zobu izvilkšana, gudrības zobi, bērnu zobu ekstrakcija.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klīnika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu ekstrakcija (traukšana) Klaipēdā — Bangų klīnika"
        description="Profesionāla un droša zobu ekstrakcija Klaipēdā. Gudrības zobu izvilkšana, ķirurģiska ekstrakcija, bērnu zobu ekstrakcija. Pierakstieties vizītei."
        keywords="zobu ekstrakcija, zoba traukšana, gudrības zobs, ķirurģiska ekstrakcija, klaipēda, nesāpīgi"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-ekstrakcija`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-traukimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-ekstrakcija` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-traukimas` },
        ]}
        structuredData={structuredData}
      />

      <motion.div ref={pageRef} className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start" variants={container} initial="hidden" animate="visible">
        <TableOfContents sections={tocSections} title="Saturs" rootRef={pageRef} cta={{ label: "Pierakstīties vizītei", to: "/kontaktai" }} />
        <div className="min-w-0 flex-1">

        {/* HERO */}
        <motion.header className="mb-10 text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionāla zobu ekstrakcija Klaipēdā
          </h1>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Zobu ekstrakcija ir zobārstniecības procedūra, ko veic tad, kad zobu vairs nevar saglabāt vai kad tas apdraud vispārējo mutes veselību. Lai gan mūsdienu zobārstniecība vienmēr cenšas saglabāt dabīgos zobus, noteiktās situācijās to izvilkšana kļūst par nepieciešamu un racionālāko risinājumu.
            </p>
            <p>
              Bangų zobārstniecības klīnikā Klaipēdā veiktā zobu ekstrakcija ir droša, rūpīgi plānota un orientēta uz pacienta komfortu. Procedūras laikā tiek izmantoti mūsdienīgi pretsāpju līdzekļi, kas ļauj izvairīties no sāpēm un samazināt stresu. Katrā gadījumā lēmums par zoba izvilkšanu tiek pieņemts individuāli, izvērtējot zoba stāvokli, iespējamās alternatīvas un ilgtermiņa mutes veselības perspektīvu.
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
              Zobu ekstrakcijas cenas
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
              <p>
                Zobu ekstrakcijas cena ir atkarīga no procedūras sarežģītības, zoba atrašanās vietas, sakņu struktūras un apkārtējo audu stāvokļa. Pirms procedūras veikšanas vienmēr tiek veikta apskate, kuras laikā tiek novērtēta situācija un izvēlēta drošākā un piemērotākā zoba izvilkšanas metode.
              </p>
            </div>

            <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
              <div className="divide-y divide-slate-100">
                <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                  <span className="text-slate-700">Saknes izvilkšana</span>
                  <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">60 – 80 €</span>
                </div>
                <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                  <span className="text-slate-700">Vienkārša zoba izvilkšana</span>
                  <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">80 – 100 €</span>
                </div>
                <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                  <span className="text-slate-700">Sarežģīta gudrības zoba izvilkšana</span>
                  <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">120 – 150 €</span>
                </div>
              </div>
            </div>

            <p className="text-slate-700 leading-relaxed text-sm">
              Precīza zobu ekstrakcijas cena Klaipēdā tiek apspriesta individuālās konsultācijas laikā, ņemot vērā konkrēto klīnisko situāciju. Caurspīdīga cenu veidošana un profesionāla pieeja ļauj pacientiem justies pārliecināti un pieņemt informētu lēmumu.
            </p>
          </div>
        </motion.header>

        {/* KAS IR ZOBU EKSTRAKCIJA */}
        <motion.section id="kas-ir" className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas ir zobu ekstrakcija?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Zobu ekstrakcija ir zobārstniecības procedūra, kuras laikā zobs tiek izņemts no žokļa kaula alveolas. Šī procedūra tiek pielietota gadījumos, kad zobs ir stipri bojāts ar kariesu, traumu vai infekciju, nepareizi izaudzis vai traucē citu zobu ārstniecībai vai pareizajam sakodumam.
            </p>
            <p>
              Procedūra var būt vienkārša vai sarežģītāka, atkarībā no zoba atrašanās vietas, sakņu formas un apkārtējo audu stāvokļa. Pirms zobu ekstrakcijas veikšanas vienmēr tiek veikta apskate un, ja nepieciešams, radioloģiskie pētījumi, kas ļauj saplānot drošu un precīzu ārstniecību. Pareizi veikta zobu ekstrakcija palīdz izvairīties no komplikācijām, samazina sāpes un rada priekšnosacījumus turpmākai ārstniecībai, piemēram, protezēšanai vai implantācijai.
            </p>
          </div>
        </motion.section>

        {/* KAD NEPIECIEŠAMA (KONTROLSARAKSTS) */}
        <motion.section id="kad-nepieciesama" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kad nepieciešama zobu ekstrakcija?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Zobu ekstrakcija tiek veikta tikai tad, kad nav iespējas zobu saglabāt vai kad tā atstāšana mutē var radīt nopietnākas veselības problēmas. Pirms lēmuma pieņemšanas vienmēr tiek izvērtētas iespējamās alternatīvas, taču noteiktos gadījumos zoba izvilkšana ir drošākais un efektīvākais risinājums.
          </p>

          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Zobu ekstrakcija var būt nepieciešama, ja:</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "zobs ir stipri bojāts ar kariesu vai traumu, un atjaunošana vairs nav iespējama",
                "parādās akūtas sāpes, iekaisums vai infekcija, kas izplatās apkārtējos audos",
                "zobs ir nepareizi izaudzis vai iestrēdzis un traucē citiem zobiem",
                "nepieciešams radīt vietu ortodontiskai ārstniecībai",
                "zobs apdraud vispārējo mutes un žokļa veselību"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Savlaicīgi veikta zobu ekstrakcija palīdz izvairīties no sarežģītākām komplikācijām un rada priekšnosacījumus turpmākai ārstniecībai, piemēram, protezēšanai vai implantācijai.
          </p>
        </motion.section>

        {/* EKSTRAKCIJAS VEIDI (KARTES) */}
        <motion.section id="veidi" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kādi ir zobu ekstrakcijas veidi?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Zobu ekstrakcijas metode tiek izvēlēta individuāli, ņemot vērā zoba atrašanās vietu, sakņu struktūru un apkārtējo audu stāvokli. Visbiežāk izšķir divus galvenos zobu ekstrakcijas veidus.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <ScalpelIcon />
              <h3 className="font-bold text-darkblue-700 mb-2">Vienkārša zobu ekstrakcija</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tiek veikta, kad zobs ir pilnībā izaudzis un viegli pieejams. Zobārsts maigi atbrīvo zobu un to izvelk. Ātra procedūra un vienmērīga dzīšana.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <ExclamationIcon />
              <h3 className="font-bold text-darkblue-700 mb-2">Ķirurģiska zobu ekstrakcija</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tiek pielietota sarežģītākos gadījumos (zobs nav izaudzis, iestrēdzis, nolūzis). Var būt nepieciešams neliels iegriezums vai zoba sadalīšana. Tiek veikta droši un kontrolēti.
              </p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <ShieldCheckIcon />
              <h3 className="font-bold text-darkblue-700 mb-2">Zobu ekstrakcija bērniem</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Tiek veikta īpaši maigi, ja nepieciešams izvilkt piena vai pastāvīgos zobus. Pirms procedūras tiek atvēlēts laiks skaidrojumam un bērna nomierināšanai.
              </p>
            </div>
          </div>
        </motion.section>

        {/* KAVĒŠANĀS */}
        <motion.section id="kavesanas-risks" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas notiek, ja zobs netiek savlaicīgi izvilkts?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Atlikta zobu ekstrakcija var izraisīt ne tikai ilgstošas sāpes, bet arī nopietnākas mutes veselības problēmas. Bojāts vai inficēts zobs bieži kļūst par pastāvīgu baktēriju perēkli, kas laika gaitā var ietekmēt apkārtējos audus, smaganas un žokļa kaulu.
            </p>
            <p>
              Ja problemātiskais zobs netiek savlaicīgi izvilkts, iekaisums var izplatīties dziļākos audos, izraisot stiprāku pietūkumu, sāpes vai pat vispārējās pašsajūtas pasliktināšanos. Šādos gadījumos ārstniecība kļūst sarežģītāka un var būt nepieciešamas papildu procedūras vai ilgāks dzīšanas periods.
            </p>
            <p>
              Turklāt novēlota zobu ekstrakcija var negatīvi ietekmēt blakus esošos zobus. Infekcija vai pastāvīgais spiediens var veicināt apkārtējo zobu bojājumus, smaganu atkāpšanos vai kaula iznīkšanu.
            </p>
            <p>
              Savlaicīgi veikta zobu ekstrakcija palīdz izvairīties no šīm komplikācijām, samazina ārstniecības apjomu un ļauj ātrāk pāriet pie risinājumiem, kas atjauno funkciju un komfortu.
            </p>
          </div>
        </motion.section>

        {/* KĀ TIEK VEIKTA (SOĻI) */}
        <motion.section id="ka-notiek" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kā tiek veikta zobu ekstrakcija?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Zobu ekstrakcija Bangų zobārstniecības klīnikā tiek veikta pēc skaidras un drošas secības, lai procedūra būtu pēc iespējas komfortablāka pacientam un neradītu papildu stresu.
          </p>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Apskate</h3>
              <p className="text-sm text-slate-600">Klīniskā apskate, rentgena izmeklēšana, riska novērtēšana un metodes izvēle.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Anestēzija</h3>
              <p className="text-sm text-slate-600">Vietējā nejutība nodrošina, ka jūtīsiet tikai spiedienu, bet ne sāpes.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Izvilkšana</h3>
              <p className="text-sm text-slate-600">Zobs uzmanīgi tiek atbrīvots un izvilkts (ja nepieciešams — pa daļām).</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Aprūpe</h3>
              <p className="text-sm text-slate-600">Brūces apstrāde, hemostāze un ieteikumi dzīšanai.</p>
            </div>
          </div>
        </motion.section>

        {/* SĀPES UN APRŪPE */}
        <motion.section id="sapes-aprupe" className="mb-12 space-y-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Vai zobu ekstrakcija ir sāpīga?
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Mūsdienu zobārstniecībā zobu ekstrakcija tiek veikta tā, lai pacients neciestu sāpes. Izmantojot efektīvu vietējo nejutību, procedūras laikā sāpes netiek izjustas, un lielākā daļa pacientu procedūru raksturo kā īsu un vieglāk paneses, nekā gaidīts.
              </p>
              <p>
                Pēc procedūras, kad pretsāpju iedarbība beidzas, var parādīties viegls sāpīgums, pietūkums vai jutīgums — tā ir normāla ķermeņa reakcija. Šīs sajūtas parasti mazinās dažu dienu laikā un var tikt kontrolētas ar zobārsta ieteiktajiem līdzekļiem.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Ko darīt, ja zobs sāp pirms ekstrakcijas?
            </h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Ja zobs sāp stipri, pastāvīgi vai sāpes pastiprinās, svarīgi nekavējoties vērsties pie zobārsta. Savlaicīgi veikta apskate ļauj novērtēt situāciju un izlemt, vai zobu var ārstēt vai nepieciešama zobu ekstrakcija.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Ko svarīgi zināt pēc zobu ekstrakcijas?
            </h2>
            <div className="bg-brand-50/30 p-6 rounded-xl border border-brand/10 text-slate-700 text-sm leading-relaxed">
              <p className="mb-4">
                Pirmajās stundās pēc procedūras ieteicams izvairīties no intensīvas fiziskas slodzes un ļaut ķermenim atpūsties. Ekstrakcijas vietā veidojas asins receklis, kas ir nepieciešams dzīšanas procesam, tādēļ ir ļoti svarīgi to nesabojāt.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Pirmajā dienā izvairīties no karstas pārtikas un dzērieniem, izvēlēties mīkstu ēdienu.</li>
                <li>Nesmēķēt un nelietot alkoholu vismaz 24–48 stundas.</li>
                <li>Ievērot zobārsta nozīmēto pretsāpju vai citu zāļu lietošanas ieteikumus.</li>
                <li>Uzturēt mutes higiēnu, taču tīrīt zobus uzmanīgi, izvairoties no ekstrakcijas vietas.</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* BEIGU CTA */}
        <motion.div id="kapec-mes" className="mt-8 mb-12 text-left scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Aicinām pierakstīties zobu ekstrakcijā Bangų klīnikā
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
            Ja jūtat zobu sāpes, diskomfortu vai saņēmāt ieteikumu zobu izvilkt, aicinām pierakstīties konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks novērtēts Jūsu mutes stāvoklis, apspriesti iespējamie ārstniecības risinājumi un, ja nepieciešams, saplānota droša zobu ekstrakcija.
            <br /><br />
            Bangų zobārstniecības klīnikā cenšamies, lai pat tādas procedūras kā zobu ekstrakcija būtu skaidras, kontrolētas un pēc iespējas mazāk stresa radošas. Šeit Jūs sagaida pieredzējuši speciālisti, modernās iekārtas un rūpīga pieeja katram pacientam.
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
