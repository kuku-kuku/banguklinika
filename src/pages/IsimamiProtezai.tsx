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
  { id: 'kas-yra', label: 'Kas yra išimami protezai?' },
  { id: 'kada-rekomenduojami', label: 'Kada rekomenduojami?' },
  { id: 'rusys', label: 'Protezų rūšys' },
  { id: 'procesas', label: 'Gamyba ir pritaikymas' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function IsimamiProtezai() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/isimami-protezai/#service",
    "name": "Išimami dantų protezai Klaipėdoje",
    "serviceType": "Išimami dantų protezai",
    "description": "Išimami dantų protezai – daliniai, pilni, lanko atraminiai ir ant implantų fiksuojami protezai Bangų odontologijos klinikoje Klaipėdoje.",
    "url": "https://www.banguklinika.lt/paslaugos/isimami-protezai/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Išimami dantų protezai Klaipėdoje - Bangų klinika"
        description="Išimami dantų protezai Klaipėdoje – daliniai, pilni, lanko atraminiai ir ant implantų fiksuojami protezai Bangų odontologijos klinikoje. Kaina nuo 180€ iki 690€.⏩Registruokitės konsultacijai."
        keywords="isimami dantu protezai, daline dantu ploksele, pilna dantu ploksele, lanko atraminiai protezai, klaipeda"
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
              Išimami dantų protezai Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Išimami dantų protezai – tai individualiai gaminamos konstrukcijos, skirtos prarastiems dantims ir jų
                  funkcijai atkurti. Jie gali būti naudojami netekus kelių, daugumos arba visų vieno žandikaulio
                  dantų. Tinkamai pritaikytas protezas padeda kramtyti, aiškiau tarti garsus, palaikyti veido audinius
                  ir atkurti estetiškesnę šypsenos išvaizdą.
                </p>
                <p className="mb-4">
                  Šis protezavimo būdas dažnai pasirenkamas kaip ekonomiškesnis arba laikinas sprendimas, ypač kai
                  trūksta daug dantų, nėra tinkamų atramų fiksuotam tiltui arba implantacija konkrečiu metu
                  neatliekama. Vis dėlto sprendimas turėtų būti priimamas ne vien pagal kainą. Svarbu įvertinti
                  numatomą protezo stabilumą, burnos anatomiją, priežiūros galimybes ir paciento lūkesčius.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje išimami protezai parenkami individualiai, įvertinus likusių
                  dantų būklę, žandikaulio anatomiją, gleivinę ir sąkandį. Prieš gydymą aptariamos galimos protezavimo
                  kryptys, jų privalumai, ribos ir ilgalaikė priežiūra.
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
                      Išimamų dantų protezų kainos
                    </h2>
                    <p className="text-slate-600">
                      Išimamų protezų kaina priklauso nuo protezo rūšies, naudojamų medžiagų, atraminių elementų,
                      implantų poreikio ir papildomo gydymo. Todėl protezų kainos tiksliai nustatomos po konsultacijos
                      ir individualaus gydymo plano sudarymo.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Išimami protezai</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Išimami dantų protezai', '180 – 690 €'],
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
                  Tiksli išimamų dantų protezų Klaipėdoje kaina aptariama individualios konsultacijos metu,
                  atsižvelgiant į konkrečią klinikinę situaciją.
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
                <div className="relative lg:aspect-[4/5] bg-sky-50 min-h-[300px]">                  <img
                    src="/team/Jonas-light.jpg"
                    alt="Bangų odontologijos klinikos gydytojas"
                    className="absolute inset-0 w-full h-full object-cover lg:object-contain"
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra išimami dantų protezai?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Išimamas dantų protezas yra konstrukcija, kurią pacientas gali savarankiškai išsiimti iš burnos ir
                  vėl įsidėti. Priklausomai nuo klinikinės situacijos, protezas gali remtis burnos gleivine, likusiais
                  natūraliais dantimis, specialiais atraminiais elementais arba implantais.
                </p>
                <p>
                  Nuo fiksuotų vainikėlių ir tiltų išimami protezai skiriasi tuo, kad nėra nuolat pritvirtinti burnoje.
                  Juos reikia reguliariai išimti, valyti ir prižiūrėti pagal gydytojo rekomendacijas. Šis sprendimas
                  gali būti taikomas tada, kai trūksta daug dantų, nėra pakankamai atramų fiksuotam protezui arba
                  pacientas renkasi išimamą konstrukciją.
                </p>
                <p>
                  Protezo stabilumas priklauso nuo jo rūšies, likusių dantų skaičiaus ir išsidėstymo, žandikaulio
                  kaulo, gleivinės bei sąkandžio. Daliniai protezai gali būti stabilizuojami likusiais dantimis, o
                  pilni išimami protezai daugiausia remiasi gleivine ir priglunda prie žandikaulio anatominių
                  paviršių.
                </p>
                <p>
                  Išimami protezai negali visiškai atkartoti natūralių dantų pojūčio ir funkcijos. Pradžioje gali būti
                  jaučiamas svetimkūnis, padidėti seilėtekis, laikinai pasikeisti kai kurių garsų tarimas ar kramtymo
                  pojūtis. Nuoseklus protezo nešiojimas ir gydytojo rekomendacijų laikymasis padeda lengviau
                  prisitaikyti.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REKOMENDUOJAMI */}
          <motion.section id="kada-rekomenduojami" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada rekomenduojami išimami protezai?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Išimamas protezavimas gali būti rekomenduojamas, kai dėl dantų netekimo tampa sunkiau kramtyti,
                kalbėti arba išlaikyti tinkamą sąkandžio atramą. Protezo poreikis vertinamas ne tik pagal trūkstamų
                dantų skaičių, bet ir pagal likusių dantų būklę bei bendrą burnos sveikatą.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Išimami dantų protezai gali būti svarstomi, kai:</h3>

                <div className="grid gap-3">
                  {[
                    'trūksta kelių dantų skirtingose dantų lanko vietose',
                    'netekta daugumos vieno žandikaulio dantų',
                    'viename arba abiejuose žandikauliuose nelikę natūralių dantų',
                    'nėra tinkamų atraminių dantų fiksuotam tiltui',
                    'implantacija dėl sveikatos, anatominių ar kitų priežasčių neatliekama',
                    'reikalingas laikinas sprendimas iki nuolatinio protezavimo',
                    'pacientas renkasi ekonomiškesnį dantų atkūrimo būdą'
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
                  Prieš protezavimą svarbu pašalinti aktyvius burnos ligų židinius. Gali reikėti gydyti kariesą,
                  periodonto ligas, pašalinti nepatikimus dantis arba atlikti profesionalią burnos higieną. Dantys,
                  kurie bus naudojami kaip protezo atramos, turi būti pakankamai tvirti ir tinkamai prižiūrimi.
                </p>
                <p>
                  Netekus dantų, žandikaulio kaulas laikui bėgant gali keistis ir mažėti. Dėl šių pokyčių anksčiau
                  gerai tikęs protezas gali pradėti judėti, trinti ar spausti gleivinę. Tokiu atveju gali prireikti
                  korekcijos, protezo perbazavimo arba naujos konstrukcijos gamybos. Reguliarios apžiūros padeda laiku
                  pastebėti šiuos pokyčius.
                </p>
              </div>
            </div>
          </motion.section>

          {/* RŪŠYS */}
          <motion.section id="rusys" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokios yra išimamų dantų protezų rūšys?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Išimamų protezų konstrukcija parenkama pagal trūkstamų dantų skaičių, likusių dantų būklę ir galimas
                atramas.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Daliniai išimami protezai</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Daliniai protezai gaminami pacientams, kuriems yra likę dalis natūralių dantų. Jie užpildo dantų
                    lanko tarpus ir gali būti tvirtinami kabliukais ar kitais fiksavimo elementais. Likę dantys padeda
                    stabilizuoti konstrukciją ir paskirstyti kramtymo apkrovą.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dalinė dantų plokštelė dažniausiai gaminama iš akrilo ar kitų odontologijoje naudojamų medžiagų.
                    Kai kuriais atvejais gali būti pasirenkamos lankstesnės termoplastinės konstrukcijos, tačiau jų
                    tinkamumas priklauso nuo defekto dydžio ir atraminių dantų būklės.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pilni išimami protezai</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Pilna dantų plokštelė naudojama tada, kai viename žandikaulyje nebelieka natūralių dantų. Ji
                    pakeičia visą dantų lanką ir remiasi burnos gleivine bei po ja esančiu žandikaulio kaulu.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Viršutinio žandikaulio protezas paprastai turi didesnį atraminį paviršių. Apatinio protezo
                    stabilumą gali apsunkinti mažesnis atramos plotas, liežuvio judesiai ir žandikaulio kaulo
                    sumažėjimas. Jei pilnas protezas laikosi nepakankamai stabiliai, gali būti svarstoma implantų
                    atrama.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Lanko atraminiai protezai</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Lanko atraminis protezas turi metalinį karkasą, prie kurio tvirtinami dirbtiniai dantys. Jis
                    dažniausiai yra plonesnis už įprastą plokštelinį protezą ir dalį kramtymo apkrovos perduoda
                    atraminiams dantims.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Ši konstrukcija galima tik tada, kai burnoje yra tinkamų, pakankamai tvirtų atraminių dantų. Prieš
                    gydymą įvertinama jų padėtis, periodonto būklė ir ilgalaikė prognozė.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Išimami protezai ant implantų</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    Išimami protezai ant implantų specialiais tvirtinimo elementais fiksuojami prie žandikaulyje
                    įsriegtų implantų. Pacientas protezą gali išsiimti higienai, tačiau burnoje jis paprastai laikosi
                    stabiliau nei vien gleivine paremtas pilnas protezas.
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Implantų atramos padeda sumažinti protezo judėjimą kalbant ir kramtant. Vis dėlto toks gydymas
                    reikalauja implantacijos, tinkamos kaulo būklės ir kruopščios implantų bei protezo priežiūros.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip vyksta išimamų protezų gamyba ir pritaikymas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Išimamų protezų gamyba vyksta keliais etapais. Vizitų skaičius priklauso nuo pasirinktos konstrukcijos,
                burnos būklės ir paruošiamųjų procedūrų.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Burnos būklės įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gydytojas apžiūri dantis, dantenas, gleivinę ir sąkandį. Jei reikia, atliekami radiologiniai
                    tyrimai. Įvertinama, kuriuos dantis galima išsaugoti ir naudoti kaip atramas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gydymo plano sudarymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Aptariamos tinkamos protezų rūšys, jų fiksavimo galimybės, priežiūra ir alternatyvos. Jei
                    planuojamas protezas ant implantų, papildomai vertinama žandikaulio kaulo būklė.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Atspaudų arba skaitmeninių duomenų surinkimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Nuo žandikaulių nuimami atspaudai arba surenkami kiti protezui gaminti reikalingi duomenys.
                    Siekiama tiksliai atkartoti burnos anatomiją ir protezo atraminius paviršius.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Protezo gamyba ir matavimai</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dantų technikų laboratorijoje gaminama individuali konstrukcija. Tarpiniuose vizituose gali būti
                    tikrinamas sąkandžio aukštis, dantų forma, dydis, padėtis, spalva ir būsimos šypsenos vaizdas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Galutinis pritaikymas ir priežiūra</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagamintas protezas pritaikomas burnoje, patikrinamas jo stabilumas, sąkandis ir kontaktas su
                    gleivine. Pacientui paaiškinama, kaip protezą įsidėti, išimti, valyti ir laikyti.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed mt-6">
                <p>
                  Pirmosiomis dienomis gali atsirasti spaudimo ar trynimo vietų, todėl kartais prireikia vienos ar
                  kelių korekcijų. Protezo nereikėtų šlifuoti ar taisyti savarankiškai.
                </p>
                <p>
                  Išimamą protezą reikia kasdien valyti minkštu šepetėliu ir jam skirtomis priemonėmis. Taip pat
                  svarbu prižiūrėti likusius dantis, liežuvį, gleivinę ir implantų atramas. Naktinio nešiojimo bei
                  laikymo rekomendacijos priklauso nuo konkrečios konstrukcijos.
                </p>
                <p>
                  Išimamų protezų kaina priklauso nuo protezo rūšies, naudojamų medžiagų, atraminių elementų,
                  implantų poreikio ir papildomo gydymo. Todėl protezų kainos tiksliai nustatomos po konsultacijos ir
                  individualaus gydymo plano sudarymo.
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
                  Renkantis išimamą protezą svarbu įvertinti ne tik jo kainą ar išvaizdą, bet ir atraminių dantų būklę,
                  sąkandį, gleivinės anatomiją bei konstrukcijos priežiūros galimybes. Bangų odontologijos klinikoje
                  gydymas planuojamas individualiai, siekiant parinkti pacientui funkcionalų ir jo klinikinei
                  situacijai tinkamą sprendimą.
                </p>
                <p>
                  Mūsų specialistai paaiškina dalinių, pilnų, lanko atraminių ir implantais fiksuojamų protezų
                  skirtumus. Pacientas informuojamas apie numatomą gydymo eigą, prisitaikymo laikotarpį, galimas
                  alternatyvas ir ilgalaikę priežiūrą.
                </p>
                <p>
                  Dėmesys skiriamas tiksliam protezo pritaikymui, sąkandžio patikrai, reikalingoms korekcijoms ir
                  kontroliniams vizitams. Todėl ieškantiems profesionaliai gaminamų išimamų dantų protezų Klaipėdoje,
                  Bangų odontologijos klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis išimamų protezų konsultacijai Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu netekote kelių ar daugumos dantų ir svarstote apie išimamą protezavimą, kviečiame registruotis
                  konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta burnos būklė ir aptartos
                  tinkamiausios protezavimo galimybės.
                </p>
                <p>
                  Registruokitės ir ženkite pirmą žingsnį link atkurtos šypsenos.
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
