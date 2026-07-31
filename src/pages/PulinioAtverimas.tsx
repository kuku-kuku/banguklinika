import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { TableOfContents } from '../components/TableOfContents'
import { useRef } from 'react'
import ReviewsCarousel from '../components/ReviewsCarousel'

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
  { id: 'kainos', label: 'Kainos' },
  { id: 'kas-yra', label: 'Kas yra danties pūlinys?' },
  { id: 'simptomai', label: 'Simptomai' },
  { id: 'kada-butinas', label: 'Kada būtinas atvėrimas?' },
  { id: 'procesas', label: 'Kaip atliekamas?' },
  { id: 'po-procedūros', label: 'Po procedūros' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function PulinioAtverimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/pulinio-atverimas/#service",
    "name": "Pūlinio atvėrimas Klaipėdoje",
    "serviceType": "Pūlinio atvėrimas",
    "description": "Danties pūlinio atvėrimas (incizija) ir drenavimas Bangų odontologijos klinikoje Klaipėdoje.",
    "url": "https://www.banguklinika.lt/paslaugos/pulinio-atverimas/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Pūlinio atvėrimas Klaipėdoje - Bangų klinika"
        description="Danties pūlinio atvėrimas (incizija) ir drenavimas Klaipėdoje – Bangų odontologijos klinikoje. Kaina nuo 70€ iki 150€.⏩Registruokitės skubiai ar konsultacijai."
        keywords="pulinio atverimas, danties pulinys, incizija, drenavimas, klaipeda"
        structuredData={structuredData}
      />

      <motion.div
        ref={pageRef}
        className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TableOfContents sections={tocSections} rootRef={pageRef} cta={{ label: 'Registruotis vizitui', to: '/kontaktai' }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Pūlinio atvėrimas Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Stiprėjantis danties skausmas, patinusios dantenos ar veido srities tinimas gali rodyti, kad aplink
                  dantį arba minkštuosiuose burnos audiniuose susikaupė pūlingas turinys. Danties pūlinys yra
                  bakterinės infekcijos sukelta būklė, kuri savaime nepraeina ir gali plisti į aplinkinius audinius.
                  Todėl atsiradus būdingiems simptomams svarbu neatidėlioti odontologo apžiūros.
                </p>
                <p className="mb-4">
                  Bangų odontologijos klinikoje Klaipėdoje pūlinio gydymas planuojamas individualiai, pirmiausia
                  nustatant infekcijos vietą ir priežastį. Jei minkštuosiuose audiniuose susiformavusi pūlių sankaupa,
                  gali būti atliekamas pūlinio atvėrimas, dar vadinamas incizija, ir drenavimas. Procedūros metu
                  sudaromos sąlygos pūlingam turiniui pasišalinti, sumažinamas spaudimas audiniuose ir padedama
                  kontroliuoti infekcijos plitimą.
                </p>
                <p>
                  Pūlinio atvėrimas dažniausiai yra tik vienas gydymo etapas. Sumažėjęs skausmas ar tinimas dar
                  nereiškia, kad pašalinta infekcijos priežastis. Priklausomai nuo situacijos, vėliau gali reikėti
                  šaknų kanalų, periodontologinio gydymo, danties šalinimo ar kitos procedūros.
                </p>
              </div>
            </div>

            <div className="flex justify-start mt-6">
              <Link
                to="/kontaktai"
                className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Registruotis vizitui
              </Link>
            </div>

            {/* KAINOS */}
            <motion.section id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24" variants={item}>
              <div className="rounded-3xl border border-sky-200/40 p-7 sm:p-10 lg:p-12" style={{ backgroundColor: SL }}>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                  <div>
                    <h2 className="text-3xl font-extrabold tracking-tight mb-2" style={{ color: P }}>
                      Pūlinio atvėrimo kainos
                    </h2>
                    <p className="text-slate-600">
                      Pūlinio atvėrimo kaina priklauso nuo pūlinio dydžio, vietos, drenavimo poreikio ir papildomo
                      gydymo. Tiksli kaina nustatoma įvertinus klinikinę situaciją.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Pūlinio atvėrimas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Pūlinio atvėrimas ir drenavimas', '70 – 150 €'],
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
                  Tiksli pūlinio atvėrimo Klaipėdoje kaina aptariama individualios konsultacijos metu, atsižvelgiant į
                  konkrečią klinikinę situaciją.
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
                    Kviečiame registruotis konsultacijai Bangų klinikoje
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Jeigu turite klausimų ar norite sužinoti daugiau apie gydymo galimybes, kviečiame registruotis
                    konsultacijai Bangų odontologijos klinikoje. Vizito metu įvertinsime Jūsų burnos būklę, atsakysime
                    į rūpimus klausimus ir padėsime suprasti visą gydymo eigą.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų odontologijos klinikoje siekiame, kad kiekvienas pacientas jaustųsi užtikrintai – nuo pirmosios
                    konsultacijos iki galutinio rezultato. Registruokitės ir ženkite pirmą žingsnį link sveikos šypsenos.
                  </p>
                  <div className="bg-sky-50 rounded-xl p-5 border border-sky-200 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultacijos metu:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        'atliekamas išsamus klinikinis įvertinimas',
                        'aptariami galimi gydymo metodai',
                        'paaiškinami procedūros etapai ir terminai',
                        'sudaromas individualus gydymo planas',
                      ].map((t, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="mt-1"><CheckIcon /></span>
                          <span className="leading-relaxed">{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    to="/kontaktai"
                    className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
                  >
                    Registruotis vizitui
                  </Link>
                </div>
                <div className="relative aspect-[4/5] bg-sky-50">
                  <div className="pt-[125%]" />
                  <img
                    src="/team/Jonas-light.jpg"
                    alt="Bangų odontologijos klinikos gydytojas"
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,white_0%,transparent_15%)]" />
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra danties pūlinys?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Danties pūlinys – tai pūlių sankaupa, susidaranti organizmui reaguojant į bakterinę infekciją. Ji
                  gali formuotis prie danties šaknies viršūnės, dantenose, periodonto audiniuose arba aplink iš dalies
                  išdygusį dantį.
                </p>
                <p>
                  Viena dažniausių priežasčių yra giliai išplitęs kariesas. Bakterijoms pasiekus danties pulpą, joje
                  gali prasidėti uždegimas, audinių žūtis ir infekcijos plitimas už šaknies ribų. Pūlinys taip pat gali
                  susidaryti dėl danties traumos, įskilimo, nesandarios restauracijos, periodonto ligos ar infekcijos
                  aplink protinį dantį.
                </p>
                <p>
                  Periapikalinis pūlinys dažniausiai formuojasi ties danties šaknies viršūne ir yra susijęs su
                  infekuota pulpa. Periodontinis pūlinys susidaro dantį supančiuose audiniuose, dažnai šalia gilios
                  periodonto kišenės.
                </p>
                <p>
                  Infekcijai išplitus į aplinkinius audinius, gali išsivystyti antkaulio uždegimas, vadinamas
                  periostitu. Jam būdingas lokalus ar platesnis tinimas, skausmas, audinių jautrumas ir kartais
                  pasunkėjęs išsižiojimas. Danties pūlinys ir periostitas yra susijusios, bet ne visiškai tapačios
                  būklės, todėl tiksli diagnozė nustatoma po apžiūros.
                </p>
              </div>
            </div>
          </motion.section>

          {/* SIMPTOMAI */}
          <motion.section id="simptomai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokie simptomai gali rodyti danties pūlinį?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Danties pūlinio simptomai priklauso nuo infekcijos vietos, jos išplitimo ir organizmo reakcijos.
                Skausmas gali būti pulsuojantis, stiprėjantis kramtant arba plintantis į ausį, smilkinį, žandikaulį
                ar kaklą.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Apie pūlinį gali įspėti:</h3>

                <div className="grid gap-3">
                  {[
                    'stiprus arba pulsuojantis danties skausmas',
                    'skausmas sukandus ar palietus dantį',
                    'patinusios, paraudusios ir jautrios dantenos',
                    'pūlingas gumbelis ant dantenų',
                    'skruosto, lūpos ar žandikaulio srities tinimas',
                    'nemalonus skonis ar kvapas burnoje',
                    'pūlingo skysčio išsiskyrimas',
                    'padidėję ir skausmingi limfmazgiai',
                    'karščiavimas, silpnumas ar bendras negalavimas',
                    'pasunkėjęs burnos išsižiojimas'
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
                  Pūliniui savaime pratrūkus skausmas gali laikinai sumažėti, tačiau tai nereiškia, kad infekcija
                  išgijo. Jos šaltinis gali likti danties šaknų kanaluose, periodonto audiniuose ar kaule.
                </p>
                <p>
                  Skubi medicininė pagalba reikalinga, jei tinimas sparčiai didėja, plinta po apatiniu žandikauliu,
                  link akies ar kaklo, tampa sunku ryti, kvėpuoti, kalbėti ar plačiai išsižioti. Nedelsiant kreiptis
                  reikia ir atsiradus aukštai temperatūrai, ryškiam silpnumui ar kitiems sparčiai progresuojančios
                  infekcijos požymiams.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA BUTINAS */}
          <motion.section id="kada-butinas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada būtinas pūlinio atvėrimas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Pūlinio atvėrimas gali būti reikalingas, kai minkštuosiuose audiniuose susiformuoja aiški pūlių
                  sankaupa, kurios negalima tinkamai pašalinti kitu būdu. Incizijos metu gleivinėje atliekamas nedidelis
                  pjūvis, per kurį pašalinamas pūlingas turinys ir sumažinamas audiniuose susikaupęs spaudimas.
                </p>
                <p>
                  Sprendimas dėl procedūros priimamas atlikus klinikinę apžiūrą. Gydytojas įvertina tinimo vietą,
                  audinių būklę, skausmingumą, dantų gyvybingumą ir galimą infekcijos šaltinį. Prireikus atliekama
                  danties rentgeno arba panoraminė nuotrauka.
                </p>
                <p>
                  Ne kiekvienas danties skausmas ar tinimas gydomas atliekant pjūvį dantenose. Kai kuriais atvejais
                  pūlingas turinys gali būti pašalinamas per šaknų kanalus. Jei infekcija susijusi su periodonto
                  kišene, gali būti reikalingas jos valymas ir drenavimas. Kai danties išsaugoti neįmanoma, infekcijos
                  šaltinis gali būti pašalintas kartu su dantimi.
                </p>
                <p>
                  Ar reikalingi antibiotikai nuo danties pūlinio, sprendžia gydytojas. Jie nėra automatinis kiekvieno
                  pūlinio gydymo etapas. Antibiotikų gali prireikti, kai infekcija plinta, atsiranda karščiavimas,
                  bendras negalavimas, limfmazgių reakcija arba pacientui nustatyta didesnė komplikacijų rizika.
                  Lokalizuoto pūlinio atveju svarbiausia užtikrinti drenavimą ir gydyti infekcijos priežastį.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip atliekamas pūlinio atvėrimas klinikoje?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Pūlinio atvėrimo eiga priklauso nuo jo vietos, dydžio, infekcijos šaltinio ir aplinkinių audinių
                būklės.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Burnos būklės ir infekcijos židinio įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gydytojas apžiūri skausmingą sritį, dantis, dantenas ir aplinkinius audinius. Paciento klausiama
                    apie simptomų pradžią, bendrą sveikatos būklę, vartojamus vaistus ir alergijas. Prireikus
                    atliekamas radiologinis tyrimas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Vietinės nejautros taikymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Prieš procedūrą taikoma vietinė nejautra, padedanti sumažinti skausmą. Esant ūmiam uždegimui,
                    anestetiko poveikis pačiame infekcijos židinyje gali būti silpnesnis, todėl nejautros metodas
                    parenkamas individualiai.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pūlinio atvėrimas ir turinio pašalinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gleivinėje ties pūlių sankaupa atliekamas nedidelis pjūvis. Per susidariusią angą pašalinamas
                    pūlingas turinys ir sumažinamas audiniuose susikaupęs spaudimas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Žaizdos praplovimas ir drenavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pūlinio ertmė gali būti atsargiai praplaunama. Jei tikėtina, kad pjūvio vieta greitai užsivers,
                    gali būti įdedamas drenas. Tai siaura lanksti juostelė arba vamzdelis, laikinai palaikantis atvirą
                    nutekėjimo kelią. Dreno poreikį ir pašalinimo laiką nustato gydytojas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Tolesnio gydymo plano sudarymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atvėrus pūlinį nustatoma, kaip bus gydoma jo priežastis. Jei infekcija kilo šaknų kanaluose, gali
                    būti atliekamas endodontinis gydymas. Jei priežastis yra periodonto liga, reikalingas
                    periodontologinis gydymas. Dantį, kurio patikimai išsaugoti neįmanoma, gali tekti pašalinti.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PO PROCEDŪROS */}
          <motion.section id="po-procedūros" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Ką svarbu žinoti po procedūros?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Po pūlinio atvėrimo sumažėjęs spaudimas dažnai palengvina skausmą, tačiau gydyta vieta dar gali būti
                  jautri. Nedidelis kraujavimas ar skysčio tekėjimas iš drenuotos srities gali būti susijęs su gijimu.
                </p>
                <p>
                  Jei paskirti antibiotikai, juos reikia vartoti tiksliai taip, kaip nurodė gydytojas. Negalima
                  savarankiškai keisti dozės, nutraukti gydymo ar vartoti anksčiau likusių vaistų. Skausmą malšinantys
                  preparatai taip pat vartojami pagal individualias rekomendacijas.
                </p>
                <p>
                  Gydomos vietos nereikėtų spausti, badyti ar bandyti atverti savarankiškai. Kol išlieka jautrumas,
                  rekomenduojama rinktis minkštesnį, ne per karštą maistą ir kramtyti kita burnos puse. Burną reikia
                  prižiūrėti atsargiai, nepažeidžiant pjūvio ar dreno vietos.
                </p>
                <p>
                  Būtina atvykti į paskirtą kontrolinį vizitą, net jei savijauta pagerėjo. Jo metu įvertinamas gijimas,
                  prireikus pašalinamas drenas ir tęsiamas pagrindinės infekcijos priežasties gydymas. Negydant
                  priežastinio danties ar periodonto audinių, pūlinys gali atsinaujinti.
                </p>
                <p>
                  Skubiai kreiptis reikia, jei tinimas didėja, skausmas stiprėja, nepraeina karščiavimas, atsiranda
                  rijimo ar kvėpavimo sunkumų, ryškus silpnumas arba pradeda tinti kaklo ar paakio sritis.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL RINKTIS */}
          <motion.section id="kodel-rinktis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Pūlinių gydymas reikalauja ne tik sumažinti skausmą ar pašalinti susikaupusį pūlingą turinį, bet ir
                  tiksliai nustatyti infekcijos šaltinį. Bangų odontologijos klinikoje paciento būklė vertinama
                  kompleksiškai, atsižvelgiant į simptomus, dantų ir dantenų būklę, radiologinių tyrimų duomenis bei
                  bendrą sveikatą.
                </p>
                <p>
                  Mūsų specialistai paaiškina, kodėl susidarė pūlinys, ar reikalinga incizija ir kokio tolesnio gydymo
                  gali prireikti. Pacientui pateikiamos aiškios rekomendacijos dėl žaizdos priežiūros, vaistų
                  vartojimo, kontrolinių vizitų ir simptomų, kuriems atsiradus būtina kreiptis skubiai.
                </p>
                <p>
                  Pūlinio riziką padeda mažinti savalaikis karieso ir dantenų ligų gydymas, kasdienė burnos higiena bei
                  reguliarios profilaktinės apžiūros. Atsiradus skausmui, jautrumui ar dantenų patinimui, nereikėtų
                  laukti, kol susiformuos ryškus veido tinimas.
                </p>
                <p>
                  Dėmesys mūsų klinikoje skiriamas ne tik ūmių simptomų sumažinimui, bet ir infekcijos priežasties
                  pašalinimui. Todėl ieškantiems profesionaliai atliekamo pūlinio atvėrimo ir dantų pūlinių gydymo
                  Klaipėdoje, Bangų odontologijos klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis pūlinio gydymui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu jaučiate stiprų dantų skausmą, tinimą ar kitus pūlinio požymius, nedelskite ir kreipkitės į
                  Bangų odontologijos kliniką. Įvertinsime situaciją, atliksime reikalingą gydymą ir aptarsime tolesnio
                  gydymo eigą.
                </p>
                <p>
                  Registruokitės ir pasirūpinkite savo burnos sveikata laiku bei profesionaliai.
                </p>
              </div>

              <Link
                to="/kontaktai"
                className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Registruotis vizitui
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}
