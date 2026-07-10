import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { TableOfContents } from '../components/TableOfContents'
import { useRef } from 'react'
import ReviewsCarousel from '../components/ReviewsCarousel'

// Animacijų nustatymai
const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

// UI helpers
const sectionWrap = 'mb-12 scroll-mt-36 2xl:scroll-mt-24'
const whiteCard = 'bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft'
const innerCard = 'bg-white p-5 rounded-xl border border-slate-200 shadow-sm'

// Kainų dizaino žetonai
const P  = '#002045'
const S  = '#006b5f'
const SL = '#ecf5fb'

// Ikonos
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const tocSections = [
  { id: 'kainos', label: 'Kainos' },
  { id: 'kas-yra', label: 'Kas yra sinuso pakėlimas?' },
  { id: 'priezastis', label: 'Kodėl gali prireikti?' },
  { id: 'kada', label: 'Kada atliekamas?' },
  { id: 'budai', label: 'Procedūros būdai' },
  { id: 'procesas', label: 'Kaip vyksta procedūra?' },
  { id: 'gijimas', label: 'Gijimas ir rekomendacijos' },
  { id: 'duk', label: 'Dažniausi klausimai' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function SinusoPakelimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/sinuso-pakelimas/#service",
    "name": "Sinuso pakėlimas Klaipėdoje",
    "serviceType": "Sinuso pakėlimas",
    "description": "Sinuso pakėlimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekama viršutinio žandikaulio kaulo augmentacija pacientams Klaipėdos mieste.",
    "url": "https://www.banguklinika.lt/paslaugos/sinuso-pakelimas/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Sinuso pakėlimas Klaipėdoje - Bangų klinika"
        description="Sinuso pakėlimą Klaipėdoje atliekame profesionaliai☑️saugiai☑️patikimai☑️Kaina nuo 200€, tinkamas implantacijos paruošimas.⏩Registruokitės konsultacijai jau dabar."
        keywords="sinuso pakelimas, sinuso liftingas, kaulo augmentacija, implantacijos paruosimas, klaipeda"
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
              Sinuso pakėlimas Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų implantacija viršutinio žandikaulio krūminių ir prieškrūminių dantų srityje kartais
                  reikalauja papildomo pasiruošimo. Viena dažniausių priežasčių – nepakankamas kaulo aukštis tarp
                  burnos ertmės ir žandinio sinuso. Tokiu atveju implantui gali trūkti stabilios atramos, todėl
                  prieš implantaciją arba jos metu gali būti atliekamas sinuso pakėlimas.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje sinuso pakėlimo poreikis vertinamas individualiai,
                  remiantis paciento burnos būkle, 3D tyrimo duomenimis, planuojamų implantų padėtimi ir bendru
                  dantų atkūrimo planu. Tikslas – saugiai sukurti pakankamą kaulo aukštį implantui ir sudaryti
                  sąlygas ilgalaikiam, funkcionaliam dantų atkūrimui.
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
                      Sinuso pakėlimo kainos
                    </h2>
                    <p className="text-slate-600">
                      Sinuso pakėlimo kaina priklauso nuo pasirinkto metodo, trūkstamo kaulo kiekio ir žandinio sinuso būklės. Prieš atliekant procedūrą visuomet atliekama išsami apžiūra ir diagnostika, kurios metu parenkamas tinkamiausias bei saugiausias procedūros būdas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Sinuso pakėlimas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Uždaru būdu', 'nuo 200 €'],
                        ['Atviru būdu', 'nuo 700 €'],
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
                  Tiksli sinuso pakėlimo Klaipėdoje kaina aptariama individualios konsultacijos metu, atsižvelgiant į konkrečią klinikinę situaciją. Skaidri kainodara ir profesionalus požiūris leidžia pacientams jaustis užtikrintai ir priimti informuotą sprendimą.
                </p>
              </div>
            </motion.section>
          </motion.header>

          {/* ═══════════════════════════════════════════════════════════════
              DOCTOR CTA
          ══════════════════════════════════════════════════════════════════ */}
          <motion.div className="mt-8 mb-12" variants={item}>
            <div className="bg-white rounded-[28px] border border-sky-200 shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[5fr_4fr] gap-0 items-stretch">
                {/* Left: content */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-700 mb-4">
                    Kviečiame registruotis konsultacijai Bangų klinikoje
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Jeigu turite klausimų ar norite sužinoti daugiau apie gydymo galimybes, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu įvertinsime Jūsų burnos būklę, atsakysime į rūpimus klausimus ir padėsime suprasti visą gydymo eigą.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų odontologijos klinikoje siekiame, kad kiekvienas pacientas jaustųsi užtikrintai – nuo pirmosios konsultacijos iki galutinio rezultato. Registruokitės ir ženkite pirmą žingsnį link sveikos šypsenos.
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
                {/* Right: doctor photo */}
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

          {/* ═══════════════════════════════════════════════════════════════
              REVIEWS
          ══════════════════════════════════════════════════════════════════ */}
          <motion.div className="mb-10 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          {/* KAS YRA SINUSO PAKĖLIMAS */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra sinuso pakėlimas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Sinuso pakėlimas – tai chirurginė kaulo priauginimo procedūra, atliekama viršutinio žandikaulio
                  šoninių dantų srityje. Jos metu atsargiai pakeliama žandinio sinuso gleivinė, o po ja suformuota
                  ertmė užpildoma kaulo pakaitalo medžiaga. Taip sukuriamas papildomas kaulo aukštis, reikalingas
                  saugiam dantų implantų įsriegimui.
                </p>
                <p>
                  Žandiniai sinusai yra viršutinio žandikaulio srityje esančios ertmės, susijusios su nosies ertme.
                  Kai viršutiniai krūminiai ar prieškrūminiai dantys prarandami, po sinusu esantis kaulas ilgainiui
                  gali mažėti. Dėl to atstumas tarp burnos ertmės ir sinuso dugno tampa per mažas implantui.
                </p>
                <p>
                  Sinuso pakėlimas nėra reikalingas visiems pacientams. Jis atliekamas tik tais atvejais, kai
                  diagnostika parodo, kad natūralaus kaulo aukščio nepakanka implantui stabiliai įtvirtinti. Kai
                  kaulo pakanka, implantacija gali būti atliekama be papildomo sinuso dugno pakėlimo.
                </p>
                <p>
                  Ši procedūra yra viena iš kaulo augmentacijos rūšių. Ji padeda pasiruošti implantacijai
                  viršutiniame žandikaulyje, kai dėl anatominių savybių, dantų netekimo ar kaulo nykimo implantui
                  trūksta tinkamos atramos.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIEŽASTIS */}
          <motion.section id="priezastis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kodėl prieš implantaciją gali prireikti sinuso pakėlimo?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Pagrindinė priežastis, dėl kurios gali prireikti sinuso pakėlimo prieš implantaciją, yra
                  nepakankamas viršutinio žandikaulio kaulo aukštis. Implantas turi būti įsriegiamas į kaulą taip,
                  kad būtų stabilus ir galėtų atlaikyti kramtymo krūvį. Jei kaulo per mažai, implantą sriegti gali
                  būti nesaugu arba neįmanoma be papildomo paruošimo.
                </p>
                <p>
                  Kaulo aukštis viršutinio žandikaulio šoninėje srityje dažnai mažėja netekus dantų. Kai dantis
                  pašalinamas ir jo vieta ilgą laiką neatkuriama, kaulas nebegauna įprasto kramtymo krūvio, todėl
                  pradeda nykti. Tuo pačiu metu sinusas gali būti arti būsimos implantacijos vietos arba laikui
                  bėgant dar labiau priartėti prie žandikaulio keteros.
                </p>
                <p>
                  Sinuso pakėlimo gali prireikti ir dėl individualios anatomijos. Kai kurių pacientų žandiniai
                  sinusai natūraliai yra didesni arba jų dugnas yra žemiau, todėl net ir neseniai netekus danties
                  implantacijai gali trūkti kaulo aukščio.
                </p>
                <p>
                  Papildomas pasiruošimas gali būti reikalingas ir po sudėtingo danties šalinimo, uždegimų,
                  infekcijų ar ilgesnio išimamų protezų nešiojimo. Tokiais atvejais kaulas gali būti praradęs dalį
                  tūrio, todėl implantaciją būtina planuoti atsargiai.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA ATLIEKAMAS */}
          <motion.section id="kada" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada atliekamas sinuso pakėlimas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Sinuso pakėlimas gali būti rekomenduojamas tada, kai planuojama dantų implantacija viršutinio
                  žandikaulio krūminių ar prieškrūminių dantų srityje, tačiau 3D tyrimas parodo, kad kaulo aukščio
                  implantui nepakanka. Tai dažniausiai nustatoma konsultacijos ir radiologinio tyrimo metu.
                </p>
                <p>
                  Procedūra gali būti reikalinga, kai ilgą laiką trūksta vieno ar kelių viršutinių šoninių dantų.
                  Kuo ilgiau dantis neatkurtas, tuo didesnė tikimybė, kad kaulas toje vietoje bus sumažėjęs. Dėl to
                  vėliau planuojama implantacija gali reikalauti papildomo kaulo priauginimo.
                </p>
                <p>
                  Sinuso pakėlimas taip pat gali būti atliekamas, kai pacientas nori atkurti viršutinius krūminius
                  dantis implantais, tačiau žandinis sinusas yra arti būsimo implanto vietos. Tokiu atveju procedūra
                  leidžia sukurti daugiau kaulo aukščio ir saugiai suplanuoti implantą.
                </p>
                <p>
                  Kartais sinuso dugno pakėlimas reikalingas po sudėtingo danties šalinimo, kai pašalinus dantį
                  lieka mažai kaulo arba gijimo metu jo tūris sumažėja. Tokiais atvejais gydytojas įvertina, ar
                  implantaciją galima atlikti iš karto, ar pirmiausia reikalingas paruošiamasis etapas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCEDŪROS BŪDAI */}
          <motion.section id="budai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokie yra sinuso pakėlimo būdai?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Sinuso pakėlimo būdas parenkamas pagal tai, kiek kaulo trūksta, kiek implantų planuojama sriegti ir
                ar implantaciją galima atlikti tos pačios procedūros metu. Dažniausiai taikomi du pagrindiniai
                metodai – uždaras ir atviras sinuso pakėlimas.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Uždaras sinuso pakėlimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Uždaras sinuso pakėlimas dažniausiai taikomas tada, kai kaulo trūkumas nėra didelis. Procedūra
                    atliekama per implantui paruoštą vietą, todėl ji paprastai yra mažiau invazyvi nei atviras
                    metodas. Šis būdas dažnai gali būti atliekamas kartu su implantacija, jei esamo kaulo pakanka
                    pirminiam implanto stabilumui. Procedūros metu sinuso dugnas švelniai pakeliamas, o susidariusi
                    vieta užpildoma kaulo pakaitalo medžiaga.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Atviras sinuso pakėlimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atviras sinuso pakėlimas taikomas tada, kai kaulo aukščio trūksta daugiau ir reikalingas
                    didesnės apimties kaulo atkūrimas. Tokiu atveju gydytojas suformuoja nedidelį priėjimą
                    viršutinio žandikaulio šoninėje sienelėje, atsargiai pakelia sinuso gleivinę ir po ja įdeda
                    kaulo pakaitalo medžiagą. Šis metodas leidžia atkurti didesnį kaulo tūrį, tačiau dažniausiai
                    reikalauja ilgesnio gijimo laikotarpio. Kai kuriais atvejais implantai gali būti įsriegiami tos
                    pačios procedūros metu, tačiau jei kaulo trūkumas didelis, implantacija dažniausiai planuojama
                    po kelių mėnesių.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Sinuso pakėlimas kartu su implantacija</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kai situacija leidžia, sinuso pakėlimas gali būti atliekamas tuo pačiu metu kaip implantacija.
                    Toks sprendimas gali sutrumpinti bendrą gydymo trukmę, tačiau jis tinkamas ne visiems
                    pacientams. Svarbiausia sąlyga – pakankamas pirminis implanto stabilumas.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Sinuso pakėlimas kaip atskiras etapas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Jei kaulo trūkumas didesnis, pirmiausia atliekamas sinuso pakėlimas, leidžiama kaului sugyti, o
                    implantacija planuojama vėliau. Toks etapinis gydymas gali užtrukti ilgiau, tačiau kai kuriais
                    atvejais jis yra saugesnis ir labiau prognozuojamas.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip atliekama sinuso pakėlimo procedūra?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Sinuso pakėlimo procedūra planuojama etapais, nes tikslus pasiruošimas padeda saugiai įvertinti
                kaulo kiekį, sinuso padėtį ir būsimos implantacijos galimybes.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultacija ir pirminis įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gydytojas įvertina paciento burnos būklę, trūkstamų dantų vietą, dantenų ir kaulo būklę, taip
                    pat aptaria paciento lūkesčius dėl dantų atkūrimo implantais. Šiame etape svarbu suprasti, ar
                    sinuso pakėlimas apskritai gali būti reikalingas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">3D tyrimas ir sinuso anatomijos įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atliekamas 3D rentgeno tyrimas arba kompiuterinė tomografija. Šis tyrimas leidžia tiksliai
                    įvertinti kaulo aukštį, sinuso dugno padėtį, sinuso anatomiją ir būsimų implantų planavimo
                    galimybes.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Individualaus gydymo plano sudarymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagal diagnostikos duomenis sudaromas gydymo planas. Pacientui paaiškinama, ar reikalingas
                    uždaras, ar atviras sinuso pakėlimas, ar procedūrą galima atlikti kartu su implantacija, kiek
                    gali trukti gijimas ir kokie bus tolimesni gydymo etapai.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Vietinė nejautra</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pati procedūra atliekama taikant vietinę nejautrą, todėl jos metu pacientas neturėtų jausti
                    skausmo. Prireikus gydytojas papildomai paaiškina, kokių pojūčių galima tikėtis procedūros metu
                    ir po jos.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Sinuso gleivinės pakėlimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Priklausomai nuo pasirinkto metodo, gydytojas pasiekia sinuso dugną per implantui paruoštą vietą
                    arba per nedidelį priėjimą viršutinio žandikaulio šoninėje sienelėje. Tuomet sinuso gleivinė
                    atsargiai pakeliama, kad būtų sukurta vieta kaulo pakaitalui.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">06</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Kaulo pakaitalo pritaikymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Po pakelta sinuso gleivine įdedama pasirinkta kaulo pakaitalo medžiaga. Jei reikia, naudojama
                    speciali membrana, padedanti apsaugoti priauginamą sritį ir sudaryti geresnes sąlygas gijimui.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">07</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Žaizdos susiuvimas ir pirminės rekomendacijos</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Po procedūros audiniai susiuvami, o pacientui suteikiamos aiškios rekomendacijos dėl gijimo.
                    Pirmomis dienomis gali būti patinimas, maudimas, jautrumas, nedidelis kraujavimas iš nosies ar
                    kraujosruvos – tai dažniausiai normali reakcija, tačiau simptomams stiprėjant būtina kreiptis į
                    gydytoją.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">08</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gijimo kontrolė ir implantacijos planavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gijimo trukmė priklauso nuo procedūros apimties, paciento sveikatos ir pasirinkto gydymo plano.
                    Kai implantas įsriegiamas tos pačios procedūros metu, tolimesnis gydymas planuojamas pagal
                    implanto gijimą. Jei implantacija atidedama, ji dažniausiai planuojama tik tada, kai priaugintas
                    kaulas pakankamai sugija.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* GIJIMAS IR REKOMENDACIJOS */}
          <motion.section id="gijimas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Priežiūra po sinuso pakėlimo</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Po sinuso pakėlimo ypač svarbu saugoti operuotą sritį nuo staigių slėgio pokyčių. Gijimo laikotarpiu
                dažniausiai rekomenduojama nepūsti nosies stipriai, čiaudėti atvira burna ir vengti šių dalykų:
              </p>

              <div className="space-y-3">
                {[
                  'nardymo',
                  'skrydžių lėktuvu',
                  'pirties ir garų procedūrų',
                  'intensyvaus sporto ir fizinio krūvio',
                  'rūkymo',
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                    <span className="mt-1">
                      <CheckIcon />
                    </span>
                    <span className="text-slate-700">{text}</span>
                  </div>
                ))}
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Taip pat svarbu vartoti paskirtus vaistus, laikytis mitybos bei burnos higienos rekomendacijų ir
                atvykti į kontrolinius vizitus. Šių rekomendacijų laikymasis padeda išvengti spaudimo pokyčių,
                kurie gali pakenkti operuotai sričiai, ir užtikrina sklandų bei saugų gijimo procesą.
              </p>
            </div>
          </motion.section>

          {/* DUK */}
          <motion.section id="duk" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Dažniausiai užduodami klausimai apie sinuso pakėlimą</h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar sinuso pakėlimas yra skausmingas?</h3>
                  <p className="text-slate-600 text-sm">Procedūra atliekama taikant vietinę nejautrą, todėl jos metu skausmo neturėtų būti. Po procedūros gali būti jaučiamas maudimas, patinimas ar jautrumas. Šie pojūčiai dažniausiai kontroliuojami gydytojo paskirtais vaistais ir tinkama pooperacine priežiūra.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Kiek laiko gyjama po sinuso pakėlimo?</h3>
                  <p className="text-slate-600 text-sm">Gijimo trukmė priklauso nuo to, ar buvo atliktas uždaras, ar atviras sinuso pakėlimas, kiek kaulo reikėjo atkurti ir ar implantas buvo įsriegiamas tos pačios procedūros metu. Kai kuriais atvejais pakanka trumpesnio gijimo laikotarpio, kitais implantacija planuojama po kelių mėnesių.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar sinuso pakėlimą galima atlikti kartu su implantacija?</h3>
                  <p className="text-slate-600 text-sm">Taip, kai kuriais atvejais sinuso pakėlimas gali būti atliekamas kartu su implantacija. Tai įmanoma tada, kai esamo kaulo pakanka tam, kad implantas būtų stabiliai įtvirtintas. Jei kaulo trūkumas didesnis, saugiau pirmiausia atlikti sinuso pakėlimą ir implantaciją planuoti po gijimo.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ko negalima daryti po sinuso pakėlimo operacijos?</h3>
                  <p className="text-slate-600 text-sm">Po sinuso pakėlimo svarbu laikytis gydytojo rekomendacijų. Dažniausiai rekomenduojama kurį laiką vengti intensyvaus fizinio krūvio, rūkymo, pirties, karštų vonių, nardymo ir stipraus nosies pūtimo. Čiaudėti reikėtų atvira burna, kad sinuso srityje nesusidarytų per didelis spaudimas.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Nuo ko priklauso sinuso pakėlimo kaina?</h3>
                  <p className="text-slate-600 text-sm">Sinuso pakėlimo kaina priklauso nuo procedūros tipo, kaulo trūkumo apimties, naudojamų medžiagų, chirurginio sudėtingumo ir to, ar procedūra atliekama kartu su implantacija. Tiksli kaina nustatoma konsultacijos metu, atlikus diagnostiką ir sudarius individualų gydymo planą.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Kokios galimos sinuso pakėlimo komplikacijos ir kaip jų riziką sumažinti?</h3>
                  <p className="text-slate-600 text-sm">Kaip ir po bet kurios chirurginės procedūros, galimos sinuso pakėlimo komplikacijos gali būti infekcija, užsitęsęs patinimas, kraujavimas, skausmas, sinuso gleivinės pažeidimas ar lėtesnis kaulo gijimas. Riziką mažina tiksli 3D diagnostika, individualus procedūros planavimas, tinkama chirurginė technika ir paciento laikymasis pooperacinių rekomendacijų.</p>
                </div>
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
                  Renkantis sinuso pakėlimą svarbu ne tik pati chirurginė procedūra, bet ir visas pasiruošimo
                  implantacijai procesas – nuo tikslios diagnostikos iki gijimo kontrolės ir tolimesnio dantų
                  atkūrimo plano. Bangų odontologijos klinikoje Klaipėdoje kiekviena situacija vertinama
                  individualiai, įvertinus paciento kaulo aukštį, sinuso padėtį, dantenų būklę ir būsimų implantų
                  vietą.
                </p>
                <p>
                  Klinikoje didelis dėmesys skiriamas individualiam planavimui. Prieš pradedant gydymą atliekama
                  išsami diagnostika, padedanti tiksliai nustatyti, ar sinuso pakėlimas yra būtinas, koks metodas
                  tinkamiausias ir ar implantaciją galima atlikti tos pačios procedūros metu. Toks požiūris leidžia
                  pacientui aiškiai suprasti gydymo eigą, galimus etapus ir priimti informuotą sprendimą.
                </p>
                <p>
                  Bangų odontologijos klinikoje pacientui aiškiai paaiškinama, kaip vyksta procedūra, ko tikėtis po
                  jos ir kokių rekomendacijų svarbu laikytis gijimo laikotarpiu. Nuoseklus planavimas, aiški
                  komunikacija ir atsakinga priežiūra padeda sudaryti geresnes sąlygas sklandžiam gijimui bei
                  tolimesniam dantų atkūrimui implantais.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis sinuso pakėlimui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu planuojate dantų implantaciją ir Jums reikalingas sinuso pakėlimas, kviečiame registruotis konsultacijai
                  Bangų odontologijos klinikoje. Vizito metu bus įvertinta Jūsų žandikaulio kaulo būklė ir suplanuotas
                  tinkamiausias procedūros būdas.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad sinuso pakėlimas ir tolimesnė implantacija būtų aiškūs, valdomi ir
                  kuo mažiau keliantys streso. Čia Jūsų laukia patyrę specialistai, moderni įranga ir rūpestingas požiūris į
                  kiekvieną pacientą.
                </p>
                <p>
                  Registruokitės konsultacijai ir ženkite pirmą žingsnį link sėkmingos implantacijos.
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
