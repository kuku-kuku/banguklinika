import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../../components/AnimatedSection'
import SEO from '../../components/SEO'
import { TableOfContents } from '../../components/TableOfContents'
import { useRef } from 'react'
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

const tocSections = [
  { id: 'kainos', label: 'Cenas' },
  { id: 'kas-yra', label: 'Kas ir zobu fluorēšana?' },
  { id: 'kada-verta', label: 'Kad ir vērts izvēlēties?' },
  { id: 'procesas', label: 'Kā notiek procedūra?' },
  { id: 'rezultatai', label: 'Ko sagaidīt pēc procedūras?' },
  { id: 'kodel-rinktis', label: 'Kāpēc izvēlēties mūs?' }
]

export default function ZobuFluoresanaLv() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/lv/pakalpojumi/zobu-fluoresana/#service`,
    "name": "Zobu fluorēšana Klaipēdā",
    "serviceType": "Zobu fluorēšana",
    "description": "Profesionāla zobu fluorēšana (zobu pārklāšana ar fluora laku) Bangų zobārstniecības klīnikā Klaipēdā.",
    "url": `${SITE_URL}/lv/pakalpojumi/zobu-fluoresana/`,
    "areaServed": { "@type": "City", "name": "Klaipēda" },
    "provider": { "@id": `${SITE_URL}/#dentist` },
  }

  const pageRef = useRef<HTMLDivElement | null>(null)

  return (
    <AnimatedSection>
      <SEO
        lang="lv"
        title="Zobu fluorēšana Klaipēdā - Bangų klīnika"
        description="Zobu fluorēšana Klaipēdā – emaljas stiprināšana ar fluora laku Bangų zobārstniecības klīnikā. 1 zobs – 10€.⏩Pierakstieties profilaktiskai procedūrai."
        keywords="zobu fluoresana, fluora laka, zoba emaljas stiprinasana, kariesa profilakse, klaipeda"
        canonical={`${SITE_URL}/lv/pakalpojumi/zobu-fluoresana`}
        alternates={[
          { lang: 'lt', url: `${SITE_URL}/paslaugos/dantu-fluoravimas` },
          { lang: 'lv', url: `${SITE_URL}/lv/pakalpojumi/zobu-fluoresana` },
          { lang: 'x-default', url: `${SITE_URL}/paslaugos/dantu-fluoravimas` },
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
        <TableOfContents sections={tocSections} rootRef={pageRef} title="Saturs" cta={{ label: 'Pierakstīties vizītei', to: '/lv/kontakti' }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Zobu fluorēšana Klaipēdā
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Zobu emalju katru dienu ietekmē mutes baktēriju radītās skābes, ēdiens, dzērieni un individuālie
                  mutes kopšanas paradumi. Skābju iedarbības laikā no emaljas var izdalīties daļa minerālvielu – šo
                  procesu sauc par demineralizāciju. Ja minerālvielu tiek zaudēts vairāk, nekā to atgriežas zoba
                  virsmā, emalja kļūst mazāk izturīga pret skābju iedarbību, un zobu kariesa risks palielinās.
                </p>
                <p className="mb-4">
                  Viens no profesionālās kariesa profilakses līdzekļiem ir zobu fluorēšana. Vietēji lietotie
                  fluorīdi palīdz palielināt emaljas izturību pret skābēm un uztur remineralizāciju – minerālvielu
                  atgriešanos agri bojātā zoba virsmā.
                </p>
                <p>
                  Bangų zobārstniecības klīnikā Klaipēdā fluorēšanas nepieciešamība tiek vērtēta individuāli, ņemot vērā
                  zobu un smaganu stāvokli, mutes higiēnu, iepriekšējos kariesa bojājumus, siekalošanos, uztura
                  paradumus un iespējamu zobu jutīgumu. Procedūras laikā uz zobu virsmas tiek uzklāts profesionālai
                  lietošanai paredzēts fluora līdzeklis, visbiežāk fluora laka.
                </p>
              </div>
            </div>

            <div className="flex justify-start mt-6">
              <Link
                to="/lv/kontakti"
                className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Pierakstīties vizītei
              </Link>
            </div>

            {/* KAINOS */}
            <motion.section id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Zobu fluorēšanas cenas
                    </h2>
                    <p className="text-slate-600">
                      Zobu fluorēšanas cena ir atkarīga no apstrādājamo zobu skaita un izmantotā līdzekļa. Precīza
                      cena tiek noteikta pēc klīniskās situācijas izvērtēšanas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Zobu fluorēšana</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['1 zobs', '10 €'],
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
                  Precīza zobu fluorēšanas cena Klaipēdā tiek apspriesta individuālas konsultācijas laikā, ņemot vērā
                  konkrēto klīnisko situāciju.
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
                    Aicinām pierakstīties konsultācijai Bangų klīnikā
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Ja Jums ir jautājumi vai vēlaties uzzināt vairāk par ārstēšanas iespējām, aicinām pierakstīties
                    konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā izvērtēsim Jūsu mutes stāvokli, atbildēsim
                    uz interesējošajiem jautājumiem un palīdzēsim izprast visu ārstēšanas gaitu.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų zobārstniecības klīnikā mēs tiecamies, lai katrs pacients justos droši – no pirmās
                    konsultācijas līdz gala rezultātam. Pierakstieties un speriet pirmo soli uz veselu smaidu.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultācijas laikā:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'tiek veikts izsmeļošs klīniskais izvērtējums',
                        'tiek apspriestas iespējamās ārstēšanas metodes',
                        'tiek izskaidroti procedūras posmi un termiņi',
                        'tiek sastādīts individuāls ārstēšanas plāns',
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
                    Pierakstīties vizītei
                  </Link>
                </div>
                <div className="relative bg-sky-50">                  <img
                    src="/team/Jonas-light%20LV.jpg"
                    alt="Bangų zobārstniecības klīnikas ārsts"
                    className="w-full lg:absolute lg:inset-0 lg:h-full object-contain"
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

          {/* KAS YRA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas ir zobu fluorēšana?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu fluorēšana ir procedūra, kuras laikā zobu virsmas tiek pārklātas ar fluoru saturošu līdzekli.
                  Klīnikā var tikt lietota fluora laka, gēls vai cits profesionālai lietošanai paredzēts materiāls.
                  Līdzeklis tiek izvēlēts atbilstoši pacienta vecumam, mutes stāvoklim, kariesa riskam un procedūras mērķim.
                </p>
                <p>
                  Vietēji lietotie fluorīdi vispirms iedarbojas uz zoba virsmu. Tie palīdz samazināt minerālvielu
                  zudumu skābju iedarbības laikā un rada labvēlīgākus apstākļus minerālvielu atgriešanās agri bojātās
                  emaljas vietās. Tas ir īpaši svarīgi tad, kad uz zoba virsmas ir redzamas sākotnējās demineralizācijas
                  pazīmes, taču vēl nav izveidojies dobums.
                </p>
                <p>
                  Fluora laka uz zobiem tiek uzklāta plānā slānī. Tā uz īsu brīdi pielīp pie emaljas un pakāpeniski
                  izdala fluorīdus. Procedūrai nav nepieciešama urbšana vai vietēja anestēzija, tāpēc to var veikt
                  gan bērniem, gan pieaugušajiem.
                </p>
                <p>
                  Svarīgi saprast, ka fluorēšana nav aktīva kariesa ārstēšanas alternatīva. Ja zobā jau ir izveidojies
                  dobums, radušās sāpes, infekcija vai cits ārstēšanu prasošs stāvoklis, vispirms tiek sastādīts
                  atsevišķs zobārstniecības ārstēšanas plāns.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA VERTA */}
          <motion.section id="kada-verta" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kad ir vērts izvēlēties zobu fluorēšanu?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu fluorēšana var tikt rekomendēta pacientiem, kuriem konstatēts paaugstināts kariesa risks.
                Lēmums tiek pieņemts ne tikai pēc vecuma, bet arī pēc individuālajiem mutes veselības faktoriem.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Zobu pārklāšanu ar fluora laku var apsvērt, kad:</h3>

                <div className="grid gap-3">
                  {[
                    'bieži parādās jauni kariesa bojājumi',
                    'ir redzamas sākotnējās emaljas demineralizācijas zonas',
                    'zobu virsmas ir grūti pienācīgi iztīrīt',
                    'pacients nēsā breketes vai citus ortodontiskos aparātus',
                    'ir samazināta siekalošanās vai jūtama mutes sausums',
                    'ir atsegti zobu kakliņi vai sakņu virsmas',
                    'ir konstatēts paaugstināts zobu jutīgums',
                    'bērnam vai pieaugušajam ir konstatēts paaugstināts kariesa risks'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bērniem fluora laku var lietot gan piena, gan pastāvīgajiem zobiem. Procedūra ir īpaši aktuāla,
                  kad mutes higiēna ir nepietiekama, jau ir bijuši kariesa bojājumi vai ir grūti iztīrīt
                  izšķīlušos pastāvīgos zobus.
                </p>
                <p>
                  Pieaugušajiem fluorēšana arī var būt noderīga mutes sausuma, atsegtu sakņu virsmu, atkārtota
                  kariesa vai paaugstināta zobu jutīguma gadījumā.
                </p>
                <p>
                  Fluorēšanas biežums tiek izvēlēts individuāli. Paaugstināta kariesa riska pacientiem procedūra
                  var tikt rekomendēta biežāk, savukārt zema riska pacientiem profesionālas fluora aplikācijas var
                  būt nepieciešamas retāk vai vispār nebūt nepieciešamas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kā notiek fluorēšanas procedūra klīnikā?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Zobu fluorēšana ir īsa procedūra, taču pirms tās ir svarīgi izvērtēt mutes stāvokli un izvēlēties
                piemērotu līdzekli.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zobu un emaljas stāvokļa izvērtēšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zobārsts vai mutes higiēnists apskata zobus, smaganas, esošās restaurācijas un iespējamās
                    emaljas demineralizācijas vietas. Tiek izvērtēta mutes higiēna, iepriekšējie kariesa bojājumi,
                    jutīgums, siekalošanās un citi riska faktori.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Zobu virsmu sagatavošana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Zobu virsmas tiek apskatītas un nepieciešamības gadījumā notīrītas un nosusinātas. Ja mutē
                    ir daudz aplikuma vai zobakmens, var tikt ieteikta profesionāla mutes higiēna. Atsevišķi
                    pulēt zobus pirms katras fluora aplikācijas nav obligāti.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Fluora līdzekļa izvēle</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Fluora laka, gēls vai cits līdzeklis tiek izvēlēts atbilstoši pacienta vecumam, kariesa riskam,
                    zobu stāvoklim un procedūras mērķim. Tāpat tiek ņemts vērā konkrētā produkta sastāvs un iespējamās alerģijas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Fluora lakas uzklāšana</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ar nelielu suku fluora laka plānā slānī tiek uzklāta uz izvēlētajām vai visām zobu virsmām.
                    Līdzeklis ātri pielīp pie emaljas un sāk pakāpeniski izdalīt fluorīdus.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Individuālas kopšanas rekomendācijas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pēc procedūras pacientam tiek izskaidrots, kad drīkst ēst, dzert un tīrīt zobus. Rekomendācijas
                    var atšķirties atkarībā no lietotā līdzekļa, tāpēc ir svarīgi vadīties pēc klīnikā sniegtajām
                    norādēm.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* REZULTATAI */}
          <motion.section id="rezultatai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kādus rezultātus var sagaidīt pēc fluorēšanas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu fluorēšanas mērķis ir palīdzēt emaljai kļūt izturīgākai pret skābju iedarbību un mazināt
                  kariesa risku. Procedūra var veicināt agri, vēl dobumu neizveidojošo emaljas bojājumu kontroli,
                  taču rezultāts ir atkarīgs arī no ikdienas mutes higiēnas, uztura, siekalošanās un vispārējā
                  kariesa riska.
                </p>
                <p>
                  Dažos gadījumos fluora laka var palīdzēt samazināt atsegto zobu kakliņu vai sakņu jutīgumu.
                  Tomēr jutīguma cēlonis vispirms ir jānoskaidro, jo to var izraisīt smaganu atkāpšanās, zobu
                  plaisas, kariess vai citi stāvokļi.
                </p>
                <p>
                  Pēc fluora lakas aplikācijas uz zobiem kādu laiku var būt jūtama plāna, lipīgāka vai raupjāka
                  plēvīte. Daži līdzekļi var uz laiku piešķirt zobu virsmai iedzeltenāku nokrāsu. Šī ietekme
                  izzūd, kad laka pakāpeniski nolobās.
                </p>
                <p>
                  Fluorēšana nav vienreizēja ilgtermiņa aizsardzība. Labākais profilaktiskais rezultāts tiek
                  sasniegts, procedūru apvienojot ar ikdienas zobu tīrīšanu ar fluoru saturošu pastu, starpzobu
                  kopšanu, sabalansētu uzturu un regulārām zobārsta apskatēm.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kāpēc ir vērts izvēlēties Bangų zobārstniecības klīniku Klaipēdā?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Zobu fluorēšana būtu jāveic tikai pēc individuālā pacienta kariesa riska un mutes stāvokļa
                  izvērtēšanas. Bangų zobārstniecības klīnikā vispirms tiek noteikts, vai zobu pārklāšana ar fluora laku
                  konkrētajā gadījumā ir lietderīga.
                </p>
                <p>
                  Mūsu speciālisti izvērtē zobu emaljas stāvokli, smaganu veselību, mutes higiēnu, jutīgumu,
                  siekalošanos un citus iespējamos kariesa riska faktorus. Pacientam tiek izskaidrots procedūras
                  mērķis, iespējamās sajūtas un turpmākās kopšanas rekomendācijas.
                </p>
                <p>
                  Nepieciešamības gadījumā fluorēšana tiek apvienota ar profesionālu mutes higiēnu, individuālajām
                  zobu kopšanas rekomendācijām vai citu nepieciešamu ārstēšanu. Uzmanība tiek pievērsta ne tikai
                  pašai procedūrai, bet arī ilgtermiņa mutes slimību profilaksei.
                </p>
                <p>
                  Tiem, kas meklē profesionāli veiktu zobu fluorēšanu Klaipēdā, Bangų zobārstniecības klīnika piedāvā
                  individuālā mutes stāvokļa izvērtējumā balstītu procedūru un skaidru turpmākās kopšanas plānu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Aicinām pierakstīties zobu fluorēšanai Bangų klīnikā
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Ja vēlaties parūpēties par zobu emaljas izturību vai mazināt kariesa risku, aicinām pierakstīties
                  konsultācijai Bangų zobārstniecības klīnikā. Vizītes laikā tiks izvērtēts mutes stāvoklis un izvēlēts
                  piemērotākais profilaktiskais līdzeklis.
                </p>
                <p>
                  Pierakstieties un parūpējieties par savu zobu veselību savlaicīgi un profesionāli.
                </p>
              </div>

              <Link
                to="/lv/kontakti"
                className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Pierakstīties vizītei
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}
