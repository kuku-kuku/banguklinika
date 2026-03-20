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

const tocSections = [
  { id: "cenas", label: "Cenas" },
  { id: "kas-ir", label: "Kas ir mutes ķirurģija?" },
  { id: "kad-nepieciesama", label: "Kad nepieciešama?" },
  { id: "proceduras", label: "Veicamās procedūras" },
  { id: "ka-notiek", label: "Ārstēšanas gaita" },
  { id: "drosiba", label: "Vai drošas procedūras?" },
  { id: "atlikta", label: "Ārstēšanas atlikšanas risks" },
  { id: "pirms-pec", label: "Pirms un pēc procedūras" },
  { id: "kapec-mes", label: "Kāpēc Bangų klīnika?" },
]

export default function MutesHirurgijaLv() {
  const pageRef = useRef(null)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Profesionāla mutes ķirurģija",
    "description": "Profesionāla mutes ķirurģija Klaipēdā. Zobu ekstrakcija, implantācija, cistu ārstēšana.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klīnika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Mutes ķirurģija Klaipēdā — Bangų klīnika"
        description="Profesionāla mutes ķirurģija Klaipēdā. Gudrības zobu ekstrakcija, implantācija, kaula augmentācija. Drošas un nesāpīgas procedūras."
        keywords="mutes ķirurģija, zobu ekstrakcija, gudrības zobi, cistas, kaula audzēšana, Klaipēda"
        canonical={`${SITE_URL}/lv/pakalpojumi/mutes-hirurgija`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/burnos-chirurgija` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/mutes-hirurgija` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/burnos-chirurgija` },
        ]}
        structuredData={structuredData}
      />

      <motion.div ref={pageRef} className="max-w-screen-2xl mx-auto px-4 xl:px-8 2xl:px-4 2xl:flex 2xl:gap-8 2xl:items-start" variants={container} initial="hidden" animate="visible">
          <TableOfContents sections={tocSections} title="Saturs" rootRef={pageRef} cta={{ label: "Pierakstīties vizītei", to: "/kontaktai" }} />
          <div className="min-w-0 flex-1">

        <motion.header className="mb-10 text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionāla mutes ķirurģija Klaipēdā
          </h1>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 mb-8">
            <p>
              Mutes ķirurģija – tā ir zobārstnieciskās ārstēšanas joma, kas paredzēta sarežģītāku zobu, mīksto audu un žokļa kaula problēmu risināšanai, kad parastā terapeitiskā ārstēšana vairs nav pietiekama. Šādas procedūras bieži nepieciešamas, lai novērstu infekcijas perēkļus, atjaunotu mutes funkciju vai sagatavotu muti turpmākai ārstēšanai, piemēram, implantācijai vai protezēšanai.
            </p>
            <p>
              Bangų zobārstniecības klīnikā Klaipēdā mutes ķirurģiskās procedūras tiek veiktas, ievērojot mūsdienu medicīnas standartus, izmantojot modernas diagnostikas un uzticamas anestēzijas metodes. Pieredzējušais mutes ķirurgs katru klīnisko situāciju novērtē individuāli, tiecoties pēc droša, prognozējama un ilglaicīga rezultāta. Liela uzmanība tiek pievērsta ne tikai pašai procedūrai, bet arī pacienta pašsajūtai, skaidram ārstēšanas izskaidrojumam un raitas dzīšanas nodrošināšanai.
            </p>
          </div>

          <div className="flex justify-start">
            <Link to="/lv/kontakti" className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1">
              Pierakstīties vizītam
            </Link>
          </div>

          <div id="cenas" className="mt-8 scroll-mt-36 2xl:scroll-mt-24">
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Mutes ķirurģijas pakalpojumu cenas mūsu klīnikā
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Mutes ķirurģijas pakalpojumu cena ir atkarīga no procedūras rakstura, sarežģītības un pacienta individuālās klīniskās situācijas. Pirms katras ķirurģiskās iejaukšanās tiek veikta konsultācija, kuras laikā tiek novērtēts mutes stāvoklis un tiek izvēlēts piemērotākais ārstēšanas risinājums.
          </p>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            <div className="divide-y divide-slate-100">
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-baseline mb-1">
                    <span className="text-slate-900 font-bold">Kaula augmentācija</span>
                    <span className="text-brand font-bold whitespace-nowrap ml-4">150 – 600 €</span>
                </div>
                <span className="block text-slate-700 text-sm">Atkarībā no nepieciešamā kaula apjoma un izmantotās ārstēšanas metodes.</span>
              </div>
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-baseline mb-1">
                    <span className="text-slate-900 font-bold">Saknes noņemšanas procedūra</span>
                    <span className="text-brand font-bold whitespace-nowrap ml-4">60 – 80 €</span>
                </div>
                <span className="block text-slate-700 text-sm">Kad zobs jau ir izvilkts, bet atlikušā sakne rada iekaisuma vai infekcijas risku.</span>
              </div>
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-baseline mb-1">
                    <span className="text-slate-900 font-bold">Zoba ekstrakcija</span>
                    <span className="text-brand font-bold whitespace-nowrap ml-4">80 – 100 €</span>
                </div>
                <span className="block text-slate-700 text-sm">Ņemot vērā zoba atrašanās vietu un procedūras sarežģītību.</span>
              </div>
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-baseline mb-1">
                    <span className="text-slate-900 font-bold">Sarežģīta gudrības zoba ekstrakcija</span>
                    <span className="text-brand font-bold whitespace-nowrap ml-4">120 – 150 €</span>
                </div>
                <span className="block text-slate-700 text-sm">Tiek veikta, kad zobs nav pilnīgi izaudzis, atrodas nepareizā pozīcijā vai izraisa apkārtējo audu bojājumus.</span>
              </div>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Precīzs procedūras apjoms un galīgā cena tiek apspriesta individuālas konsultācijas laikā, ņemot vērā pacienta mutes stāvokli, diagnostikas datus un plānoto ārstēšanas gaitu.
          </p>
          </div>
        </motion.header>

        <motion.section id="kas-ir" className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas ir mutes ķirurģija?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Mutes ķirurģija – tā ir zobārstniecības joma, kas aptver ķirurģisku zobu, mutes gļotādas, žokļu un apkārtējo audu ārstēšanu. Tā tiek izmantota gadījumos, kad zobu vai mutes problēmas nav iespējams atrisināt ar konservatīvām metodēm, bet ķirurģiska iejaukšanās ir nepieciešama, lai novērstu slimības progresēšanu vai atjaunotu normālas mutes funkcijas.
            </p>
            <p>
              Visbiežāk mutes ķirurģija aptver procedūras, kas saistītas ar neatjaunojami bojātu zobu noņemšanu, infekciju ārstēšanu, gudrības zobu problēmām, kaula audu korekcijām vai sagatavošanos zobu implantācijai. Šīs iejaukšanās var būt gan vienkāršas, gan sarežģītākas, tāpēc katrā gadījumā tiek veikta visaptveroša diagnostika un sastādīts individuāls ārstēšanas plāns.
            </p>
            <p>
              Svarīgi uzsvērt, ka mūsdienu mutes ķirurģija ievērojami atšķiras no agrāk valdošajiem stereotipiem. Procedūras tiek veiktas, izmantojot efektīvu vietējo anestēziju vai citas anestēzijas metodes, tāpēc pacients nejūt sāpes, bet diskomforts pēc procedūras parasti ir minimāls un pārejošs. Pareizi plānota ķirurģiskā ārstēšana ne tikai novērš esošo problēmu, bet arī rada apstākļus veiksmīgai turpmākai zobārstnieciskai ārstēšanai un ilglaicīgai mutes veselībai.
            </p>
          </div>
        </motion.section>

        <motion.section id="kad-nepieciesama" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kad nepieciešama mutes ķirurga konsultācija?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Mutes ķirurga konsultācija nepieciešama tad, kad zobu vai mutes audu problēmas nav iespējams atrisināt ar parastajām ārstēšanas metodēm vai kad pirms sarežģītākas ārstēšanas nepieciešams precīzi novērtēt situāciju. Bieži pacienti vilcinās vērsties, jo sāpes nav stipras vai vispār nejūtamas, tomēr mutes slimības var progresēt klusi un nepamanīti.
          </p>

          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Pie mutes ķirurga mūsu klīnikā Klaipēdā ieteicams vērsties šādos gadījumos:</h3>
            <div className="grid sm:grid-cols-1 gap-3">
              {[
                "kad zobs ir stipri bojāts un to nav iespējams saglabāt ārstējot terapeitiski",
                "esot pastāvīgam vai atkārtotam smaganu iekaisumam, pūlim vai infekcijas pazīmēm",
                "kad gudrības zobi aug nepareizi, izraisa sāpes vai iekaisumu",
                "pēc zobu vai žokļa traumas",
                "pirms plānotas zobu implantācijas vai sarežģītākas protezēšanas",
                "konstatējot cistas, veidojumus vai citas patoloģiskas izmaiņas žokļa kaula zonā"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Savlaicīgi veikta konsultācija ļauj precīzi noteikt problēmas cēloni, novērtēt iespējamās ārstēšanas alternatīvas un izvēlēties optimālo risinājumu. Agrīna ķirurģiskā ārstēšana bieži palīdz izvairīties no lielākām iejaukšanās un saīsina dzīšanas periodu.
          </p>
        </motion.section>

        <motion.section id="proceduras" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kādas procedūras veic mutes ķirurgs?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Mutes ķirurgs veic plašu procedūru klāstu, kas paredzētas zobu, mīksto audu un žokļa kaula patoloģiju ārstēšanai. Procedūras tiek izvēlētas individuāli, ņemot vērā pacienta mutes stāvokli, vispārējo veselību un ilgtermiņa ārstēšanas mērķus.
          </p>

          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Visbiežāk veiktās mutes ķirurģiskās procedūras:</h3>
            <div className="grid sm:grid-cols-1 gap-3">
              {[
                "Zobu ekstrakcija – kad zobs ir neatjaunojami bojāts, izraisa infekciju vai apdraud apkārtējos audus",
                "Gudrības (retinētu) zobu ekstrakcija, kad tie nav pilnīgi izauguši, spiež uz citiem zobiem vai izraisa iekaisumu",
                "Pūļu atvēršana un infekciju ārstēšana, lai apturētu iekaisuma izplatīšanos",
                "Saknes virsotnes rezekcija, kad infekcija saglabājas neraugoties uz kanālu ārstēšanu",
                "Žokļa cistu un citu veidojumu noņemšana",
                "Sagatavošanas procedūras implantācijai, piemēram, kaula korekcijas vai kaula augmentācija",
                "Sinusa dibena pacelšana, kad augšžoklī nav pietiekami daudz kaula implantiem",
                "Mīksto audu ķirurģija, kas paredzēta mutes gļotādas izmaiņu korekcijai"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Visas procedūras tiek veiktas, ievērojot stingras drošības un higiēnas prasības, izmantojot atbilstošas anestēzijas metodes. Pieredzējušais mutes ķirurgs ne tikai veic pašu procedūru, bet arī nodrošina, ka pacients ir pienācīgi informēts par dzīšanas gaitu un turpmākajiem ārstēšanas etapiem.
          </p>
        </motion.section>

        <motion.section id="ka-notiek" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kā tiek veikta mutes ķirurģiskā ārstēšana?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Mutes ķirurģiskā ārstēšana Bangų zobārstniecības klīnikā tiek veikta pēc skaidras un pacientam saprotamas gaitas. Katrs etaps ir rūpīgi plānots, lai procedūra būtu droša, efektīva un pēc iespējas komfortablāka.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Konsultācija un diagnostika</h3>
              <p className="text-sm text-slate-600">Vizīta laikā tiek novērtēts mutes stāvoklis, veikta apskate, nozīmēti rentgena izmeklējumi. Tiek sastādīts individuāls plāns.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Sagatavošanās procedūrai</h3>
              <p className="text-sm text-slate-600">Tiek iepazīstināts ar gaitu, tiek izvēlēta vietējā anestēzija, nodrošinot, ka pacients nejūt sāpes.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Ķirurģiskā procedūra</h3>
              <p className="text-sm text-slate-600">Tiek veikta sterili, precīzi un maigi, izmantojot modernos instrumentus, cenšoties samazināt audu traumu.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Pēcoperācijas aprūpe</h3>
              <p className="text-sm text-slate-600">Tiek sniegti ieteikumi par aprūpi, uzturu, medikamentiem. Tiek apspriesti turpmākie vizīti.</p>
            </div>
          </div>
        </motion.section>

        <motion.section id="drosiba" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Vai mutes ķirurģiskās procedūras ir drošas?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
             <p>
               Mūsdienu mutes ķirurģija ir droša un prognozējama zobārstniecības joma, kad procedūras tiek veiktas pieredzējušu speciālistu vadībā un ievērojot medicīnas standartus. Bangų zobārstniecības klīnikā liela uzmanība tiek pievērsta pacienta drošībai katrā ārstēšanas etapā – no pirmās konsultācijas līdz pilnīgai dzīšanai.
             </p>
             <p>
               Pirms katras ķirurģiskās procedūras tiek novērtēts pacienta vispārējais veselības stāvoklis, lietotie medikamenti un iespējamie individuālie riski. Tas ļauj izvēlēties piemērotāko ārstēšanas taktiku un samazināt komplikāciju iespējamību. Vietējā anestēzija vai citas anestēzijas metodes nodrošina, ka procedūras laikā pacients nejūt sāpes.
             </p>
             <p>
               Pēc ķirurģiskās ārstēšanas iespējamas pārejošas sajūtas, piemēram, pietūkums, jutīgums vai neliels diskomforts, taču tā ir normāla organisma reakcija uz iejaukšanos un parasti pāriet dažu dienu laikā. Ievērojot mutes ķirurga ieteikumus, dzīšanas process norit raiti un kontrolēti.
             </p>
             <p>
               Svarīgi uzsvērt, ka savlaicīgi veikta mutes ķirurģiskā ārstēšana bieži ir drošāks risinājums nekā problēmas ignorēšana. Neārstētas infekcijas vai iekaisumi var progresēt un izraisīt nopietnākas komplikācijas, tāpēc profesionāla ķirurģiskā palīdzība palīdz izvairīties no lielākiem riskiem nākotnē.
             </p>
          </div>
        </motion.section>

        <motion.section id="atlikta" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas notiek, ja nepieciešamā mutes ķirurģiskā ārstēšana tiek atlikta?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
             <p>
               Mutes ķirurģiskā ārstēšana bieži kļūst nepieciešama ne uzreiz pēc problēmas pamanīšanas, bet tad, kad tā jau ir progresējusi. Tomēr vilcināšanās var radīt negatīvas sekas, pat ja simptomi sākotnēji šķiet nenozīmīgi vai vispār nejūtami. Daudzas mutes slimības progresē pakāpeniski un ilgu laiku var attīstīties bez skaidrām sāpēm.
             </p>
             <p>
               Neārstētas infekcijas vai iekaisuma procesi mutes dobumā var izplatīties uz apkārtējiem audiem, izraisīt pūļus, kaula bojājumus vai smaganu atvilkšanos. Šādos gadījumos ārstēšana kļūst sarežģītāka, prasa lielāku ķirurģisku iejaukšanos un ilgāku dzīšanas periodu. Turklāt neārstētas problēmas var apgrūtināt turpmāko zobu atjaunošanu – piemēram, implantāciju vai protezēšanu.
             </p>
             <p>
               Atlikstot mutes ķirurģisko ārstēšanu, var palielināties arī vispārējo veselības komplikāciju risks, īpaši, ja infekcija izplatās ārpus mutes. Tāpēc savlaicīgi veikta mutes ķirurga konsultācija un ārstēšana ļauj atrisināt problēmu agrīnā stadijā, samazināt iejaukšanās apjomu un nodrošināt labāku ilgtermiņa prognozi.
             </p>
          </div>
        </motion.section>

        <motion.section id="pirms-pec" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Ko ir svarīgi zināt pirms un pēc mutes ķirurģiskās procedūras?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Atbilstoša sagatavošanās un pēcoperācijas aprūpe ir svarīga veiksmīgas mutes ķirurģiskās ārstēšanas daļa. Pirms procedūras pacientam tiek sniegta visa nepieciešamā informācija par plānoto ārstēšanu, anestēziju un iespējamām sajūtām, lai nodrošinātu mierīgu un pārliecinātu sagatavošanos.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-brand-50/30 p-6 rounded-xl border border-brand/10">
              <h3 className="font-bold text-darkblue-700 mb-4">Pirms mutes ķirurģiskās procedūras var tikt ieteikts:</h3>
              <ul className="list-disc pl-5 text-slate-700 space-y-2 text-sm">
                <li>ievērot ārsta norādījumus par uzturu vai medikamentu lietošanu</li>
                <li>informēt speciālistu par lietotajiem medikamentiem vai hroniskām slimībām</li>
                <li>izvairīties no smēķēšanas, jo tā var negatīvi ietekmēt dzīšanas procesu</li>
              </ul>
            </div>
            <div className="bg-brand-50/30 p-6 rounded-xl border border-brand/10">
              <h3 className="font-bold text-darkblue-700 mb-4">Pēc procedūras svarīgi ievērot ieteikumus:</h3>
              <ul className="list-disc pl-5 text-slate-700 space-y-2 text-sm">
                <li>kādu laiku izvairīties no intensīvas fiziskās slodzes</li>
                <li>ievērot maigo mutes higiēnu, nesteidzīgi kairinot operētās vietas</li>
                <li>izvēlēties maigāku, nekarstu ēdienu</li>
                <li>uzraudzīt dzīšanas gaitu un, ja nepieciešams, ierasties atkārtotai apskatei</li>
              </ul>
            </div>
          </div>

          <p className="text-slate-700 mt-6 leading-relaxed">
            Ievērojot individuālos ieteikumus, pēcoperācijas periods parasti norit raiti, un pacients var ātri atgriezties pie ierastā dzīves ritma. Atbildīga sagatavošanās un sadarbība ar speciālistu ir svarīga veiksmīgas ārstēšanas daļa.
          </p>
        </motion.section>

        <motion.section id="kapec-mes" className="mb-12 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kāpēc vērts izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
             <p>
               Izvēloties mutes ķirurģijas pakalpojumus, ārkārtīgi svarīgi ir uzticēties ne tikai procedūrai, bet arī to veicošajam speciālistam un klīnikas attieksmei pret pacienta drošību. Bangų zobārstniecības klīnikā mutes ķirurģiskā ārstēšana tiek veikta, ievērojot augstus medicīnas standartus, apvienojot pieredzi, mūsdienu tehnoloģijas un individuālu uzmanību katram pacientam.
             </p>
             <p>
               Mūsu klīnikā strādājošais mutes ķirurgs katru situāciju novērtē individuāli – no sākuma konsultācijas līdz pilnīgai dzīšanai. Liela uzmanība tiek pievērsta precīzai diagnostikai, skaidram ārstēšanas plāna izskaidrojumam un prognozējamam rezultātam. Tas ļauj pacientam justies droši un saprast katru ārstēšanas etapu.
             </p>
             <p>
               Bangų zobārstniecības klīnikā tiek izmantoti modernas diagnostikas un ķirurģiskās ārstēšanas metodes, nodrošinot precizitāti un minimālu audu bojājumu. Procedūras tiek veiktas, izmantojot uzticamus anestēzijas risinājumus, tāpēc pacientu pieredze ir pēc iespējas komfortablāka. Pēc ķirurģiskās ārstēšanas pacientiem tiek sniegti detalizēti un praktiski ieteikumi, palīdzot nodrošināt raitu dzīšanas procesu.
             </p>
             <p>
               Svarīga klīnikas priekšrocība – skaidra komunikācija un caurspīdīgums. Pacienti iepriekš tiek iepazīstināti ar procedūras gaitu, iespējamajām alternatīvām un turpmāko ārstēšanas plānu. Šāda pieeja ļauj veidot ilgtermiņa uzticēšanos un sadarbību, kas orientēta uz ilglaicīgu mutes veselību.
             </p>
          </div>
        </motion.section>

        <motion.div className="mt-8 mb-12 text-left" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Aicinām pierakstīties mutes ķirurga konsultācijai Bangų klīnikā
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xlleading-relaxed">
            Ja meklējat uzticamu zobārstniecības klīniku Klaipēdā, kurā mutes ķirurģijas pakalpojumi tiek sniegti atbildīgi, droši un profesionāli, aicinām vērsties Bangų zobārstniecības klīnikā. Mūsu pacienti novērtē ne tikai ārstēšanas kvalitāti, bet arī skaidru komunikāciju, uzmanīgu pieeju un rūpīgi plānotu ārstēšanas gaitu.
            <br/><br/>
            Bangų zobārstniecības klīnikā mutes ķirurģiskās procedūras veic kvalificēti mutes ķirurgi, kas strādā ar mūsdienu tehnoloģijām un izmanto individuālus risinājumus pēc katra pacienta situācijas. Šeit liela uzmanība tiek pievērsta gan procedūras precizitātei, gan pacienta pašsajūtai pirms ārstēšanas, tās laikā un pēc tās, tiecoties pēc uzticama un ilglaicīga rezultāta.
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
