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
  { id: 'kas-yra', label: 'Kas yra kaulo priauginimas?' },
  { id: 'priezastis', label: 'Kodėl kaulas nyksta?' },
  { id: 'kada-reikalingas', label: 'Kada reikalingas?' },
  { id: 'nustatymas', label: 'Kaip nustatoma, ar būtinas?' },
  { id: 'metodai', label: 'Priauginimo metodai' },
  { id: 'medziagos', label: 'Naudojamos medžiagos' },
  { id: 'procesas', label: 'Kaip vyksta procedūra?' },
  { id: 'duk', label: 'Dažniausi klausimai' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function ZandikaulioKauloPriauginimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/zandikaulio-kaulo-priauginimas/#service",
    "name": "Žandikaulio kaulo priauginimas Klaipėdoje",
    "serviceType": "Žandikaulio kaulo priauginimas",
    "description": "Žandikaulio kaulo priauginimo paslauga teikiama Bangų odontologijos klinikoje Klaipėdoje. Klinikoje atliekamas kaulo augmentacijos gydymas, ruošiantis dantų implantacijai.",
    "url": "https://www.banguklinika.lt/paslaugos/zandikaulio-kaulo-priauginimas/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Žandikaulio kaulo priauginimas Klaipėdoje - Bangų klinika"
        description="Nepakanka kaulo implantacijai? Žandikaulio kaulo priauginimas (kaulo augmentacija) Klaipėdoje☑️individualus planavimas☑️kaina nuo 450€.⏩Registruokitės konsultacijai jau dabar."
        keywords="zandikaulio kaulo priauginimas, kaulo augmentacija, implantacijos paruosimas, klaipeda"
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
              Žandikaulio kaulo priauginimas Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų implantacija yra vienas patikimiausių būdų atkurti prarastus dantis, tačiau sėkmingam
                  implantui reikalingas pakankamas žandikaulio kaulo kiekis. Jei kaulas yra per siauras, per žemas
                  arba sunykęs po danties netekimo, implanto įsriegimas gali būti sudėtingas arba nerekomenduojamas
                  be papildomo paruošimo. Tokiais atvejais gali būti atliekamas žandikaulio kaulo priauginimas.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje kaulo priauginimas planuojamas individualiai, įvertinus
                  paciento burnos būklę, kaulo tūrį, būsimų implantų padėtį ir bendrą gydymo planą. Tikslas –
                  sukurti pakankamą ir saugų pagrindą implantui, atkurti prarastą kaulo atramą ir sudaryti sąlygas
                  ilgalaikiam dantų atkūrimo rezultatui.
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
                      Žandikaulio kaulo priauginimo kainos
                    </h2>
                    <p className="text-slate-600">
                      Žandikaulio kaulo priauginimo kaina priklauso nuo trūkstamo kaulo tūrio, taikomo metodo ir procedūros
                      apimties. Prieš gydymą visuomet atliekama diagnostika, kurios metu įvertinama situacija ir parenkamas
                      tinkamiausias kaulo augmentacijos sprendimas.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Kaulo priauginimas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Žandikaulio kaulo priauginimas', 'nuo 450 €'],
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
                  Tiksli žandikaulio kaulo priauginimo Klaipėdoje kaina aptariama individualios konsultacijos metu, atsižvelgiant
                  į konkrečią klinikinę situaciją. Skaidri kainodara ir profesionalus požiūris leidžia pacientams jaustis
                  užtikrintai ir priimti informuotą sprendimą.
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

          {/* KAS YRA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra žandikaulio kaulo priauginimas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Žandikaulio kaulo priauginimas, dar vadinamas kaulo augmentacija, yra chirurginė procedūra, kurios
                  metu atkuriamas arba padidinamas žandikaulio kaulo tūris. Ji dažniausiai atliekama tada, kai
                  planuojama dantų implantacija, tačiau esamo kaulo aukščio ar pločio nepakanka saugiam implanto
                  įsriegimui.
                </p>
                <p>
                  Implantas turi būti stabiliai įtvirtintas kaule. Jei kaulo per mažai, implantas gali neturėti
                  pakankamos atramos, o tai gali padidinti komplikacijų ar nesėkmingo gydymo riziką. Todėl kaulo
                  priauginimas implantui gali būti svarbus paruošiamasis etapas prieš implantaciją arba jos metu.
                </p>
                <p>
                  Procedūros metu naudojama speciali kaulo pakaitalo medžiaga arba kiti individualiai parenkami
                  sprendimai, padedantys atkurti trūkstamą kaulo tūrį. Laikui bėgant priauginta sritis gyja,
                  integruojasi su paciento audiniais ir gali tapti tinkamu pagrindu implantui.
                </p>
                <p>
                  Svarbu suprasti, kad žandikaulio kaulo priauginimas reikalingas ne visiems pacientams. Kai kuriais
                  atvejais implantaciją galima atlikti be papildomo kaulo atkūrimo, tačiau tai galima tiksliai
                  nustatyti tik atlikus diagnostiką.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PRIEŽASTIS */}
          <motion.section id="priezastis" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kodėl žandikaulio kaulas nyksta?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Žandikaulio kaulas yra gyvas audinys, kuris reaguoja į kramtymo krūvį. Kol burnoje yra natūralus
                  dantis, jo šaknis perduoda kramtymo apkrovą kaului ir padeda palaikyti jo tūrį. Netekus danties,
                  toje vietoje kaulas nebegauna įprasto mechaninio krūvio, todėl ilgainiui gali pradėti mažėti.
                </p>
                <p>
                  Viena dažniausių kaulo nykimo priežasčių yra ilgą laiką neatkurtas prarastas dantis. Kuo ilgiau
                  danties nėra, tuo didesnė tikimybė, kad kaulas toje srityje bus sumažėjęs. Dėl to implantacija
                  vėliau gali tapti sudėtingesnė ir gali prireikti papildomų chirurginių procedūrų.
                </p>
                <p>
                  Kaulo netekimą taip pat gali lemti periodonto ligos. Kai uždegimas pažeidžia dantenas ir aplink
                  dantis esantį kaulą, dantys gali tapti paslankūs, o kaulo atrama mažėti. Tokiais atvejais prieš
                  planuojant implantaciją svarbu įvertinti ne tik trūkstamo danties vietą, bet ir bendrą dantenų bei
                  periodonto būklę.
                </p>
                <p>
                  Žandikaulio kaulas gali būti prarandamas ir dėl traumų, cistų, infekcijų, sudėtingo danties
                  šalinimo ar individualių anatominių savybių. Kai kurių pacientų kaulo kiekis tam tikrose
                  žandikaulio vietose iš prigimties gali būti mažesnis, ypač viršutinio žandikaulio krūminių dantų
                  srityje, kur arti yra žandiniai sinusai.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REIKALINGAS */}
          <motion.section id="kada-reikalingas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada reikalingas kaulo priauginimas prieš implantaciją?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Kaulo priauginimas prieš implantaciją gali būti reikalingas tada, kai 3D tyrimas ar klinikinis
                įvertinimas parodo, kad implantui nepakanka kaulo aukščio, pločio ar tankio. Tokiu atveju pirmiausia
                turi būti atkuriama atrama, kuri leistų saugiai ir tiksliai suplanuoti implantą.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Kaulo priauginimas gali būti rekomenduojamas, kai:</h3>
                <div className="grid gap-3">
                  {[
                    'dantis buvo prarastas seniai ir kaulas toje vietoje sunyko',
                    'po danties šalinimo kaulas sugijo nepakankamai',
                    'žandikaulio kaulas yra per siauras arba per žemas implantui',
                    'buvo uždegimas, cista, trauma ar sudėtingas danties rovimas',
                    'planuojama implantacija estetiškai svarbioje šypsenos zonoje',
                    'reikia atkurti dantenų ir kaulo kontūrą būsimam protezavimui',
                    '3D tyrimas rodo, kad implantui trūksta stabilios atramos',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1">
                        <CheckIcon />
                      </span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Ne visais atvejais kaulo priauginimas yra vienintelis kelias. Kartais galima parinkti kitokį
                  implantą, pakeisti jo padėtį arba pasirinkti alternatyvų dantų atkūrimo planą. Todėl labai svarbu,
                  kad sprendimas būtų priimamas ne pagal bendrą prielaidą, o pagal tikslius diagnostikos duomenis.
                </p>
                <p>
                  Jei kaulo trūkumas nedidelis, tam tikrais atvejais kaulo priauginimas gali būti atliekamas kartu su
                  implantacija. Jei kaulo trūkumas didesnis, pirmiausia atliekama kaulo priauginimo procedūra,
                  palaukiama gijimo, o implantacija planuojama vėliau.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAIP NUSTATOMA */}
          <motion.section id="nustatymas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip nustatoma, ar kaulo priauginimas būtinas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Vien apžiūros dažnai nepakanka norint įvertinti, ar pacientui reikalingas kaulo priauginimas.
                  Išoriškai dantenos gali atrodyti pakankamos apimties, tačiau po jomis esantis kaulas gali būti
                  per siauras, per žemas arba netinkamos formos implantui.
                </p>
                <p>
                  Todėl planuojant implantaciją dažnai atliekami radiologiniai tyrimai, padedantys tiksliai
                  įvertinti kaulo būklę. Vienas svarbiausių tyrimų yra 3D rentgeno tyrimas arba kompiuterinė
                  tomografija. Šis tyrimas leidžia matyti kaulo aukštį, plotį, nervų eigą, sinusų padėtį ir būsimų
                  implantų planavimo galimybes.
                </p>
                <p>
                  Pagal diagnostikos duomenis gydytojas įvertina, ar implantą galima sriegti iš karto, ar reikalingas
                  papildomas kaulo atkūrimas. Taip pat sprendžiama, ar procedūrą galima atlikti kartu su
                  implantacija, ar geriau ją skaidyti į atskirus etapus.
                </p>
                <p>
                  Toks planavimas svarbus paciento saugumui ir ilgalaikiam rezultatui. Tiksliai įvertinus kaulo
                  tūrį, galima sumažinti komplikacijų riziką, parinkti tinkamą implantų poziciją ir suplanuoti
                  protezavimą taip, kad atkurtas dantis būtų ne tik stabilus, bet ir estetiškai derėtų prie
                  šypsenos.
                </p>
              </div>
            </div>
          </motion.section>

          {/* METODAI */}
          <motion.section id="metodai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokie yra žandikaulio kaulo priauginimo būdai?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Žandikaulio kaulo priauginimo būdas parenkamas individualiai, įvertinus kaulo trūkumo vietą,
                apimtį, būsimų implantų padėtį ir bendrą burnos būklę. Vieniems pacientams pakanka nedidelio kaulo
                tūrio atkūrimo, kitiems gali reikėti sudėtingesnio pasiruošimo implantacijai.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Kaulo augmentacija vieno ar kelių dantų srityje</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Tai vienas dažniausių kaulo priauginimo būdų, kai reikia padidinti kaulo plotį ar aukštį
                    konkrečioje vietoje. Šis metodas taikomas tada, kai planuojamam implantui trūksta stabilios
                    atramos, tačiau kaulo defektas nėra labai didelės apimties.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Alveolės išsaugojimas po danties šalinimo</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kai dantis šalinamas ir ateityje planuojama implantacija, gali būti atliekamas alveolės
                    išsaugojimas. Po danties pašalinimo į jo vietą įdedama kaulo pakaitalo medžiaga, padedanti
                    sumažinti kaulo tūrio netekimą gijimo metu ir palengvinti vėlesnį implantacijos planavimą.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Sinuso dugno pakėlimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Viršutinio žandikaulio krūminių dantų srityje kartais trūksta kaulo aukščio dėl arti esančio
                    žandinio sinuso. Tokiu atveju gali būti atliekamas sinuso dugno pakėlimas – procedūra, kurios
                    metu sukuriama daugiau vietos kaulo pakaitalui ir sudaromos sąlygos saugiam implanto įsriegimui.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Kaulo priauginimas kartu su implantacija</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Jei kaulo trūkumas nedidelis ir galima užtikrinti pirminį implanto stabilumą, kaulo priauginimas
                    gali būti atliekamas tos pačios procedūros metu kaip implantacija. Tai leidžia sutrumpinti
                    gydymo eigą, tačiau toks sprendimas tinka ne visais atvejais.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-3">Didesnės apimties kaulo atstatymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kai kaulo trūkumas ryškesnis, gali būti reikalingas platesnės apimties kaulo atstatymas.
                    Tokiais atvejais gydymas dažniausiai planuojamas etapais: pirmiausia atkuriamas kaulo tūris,
                    palaukiama gijimo, o implantacija atliekama vėliau.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* MEDŽIAGOS */}
          <motion.section id="medziagos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokios medžiagos naudojamos kaulo priauginimui?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Kaulo priauginimui gali būti naudojamos skirtingos medžiagos. Tinkamiausias pasirinkimas priklauso
                  nuo kaulo trūkumo apimties, vietos, paciento sveikatos būklės, planuojamos implantacijos ir
                  gydytojo sudaryto gydymo plano.
                </p>
                <p>
                  Kai kuriais atvejais gali būti naudojamas paciento nuosavas kaulas. Jis gali būti paimamas iš
                  kitos burnos srities ir naudojamas ten, kur reikia atkurti kaulo tūrį. Tai biologiniu požiūriu
                  artima medžiaga, tačiau jos panaudojimas priklauso nuo konkretaus defekto ir procedūros apimties.
                </p>
                <p>
                  Taip pat naudojami sintetiniai, donoriniai arba gyvūninės kilmės kaulo pakaitalai. Šios medžiagos
                  veikia kaip atraminė struktūra, padedanti organizmui formuoti naują kaulinį audinį. Gijimo metu
                  paciento audiniai palaipsniui integruojasi su priauginta sritimi.
                </p>
                <p>
                  Dažnai naudojamos ir specialios membranos. Jos padeda apsaugoti priauginamą sritį, išlaikyti
                  kaulo pakaitalą reikiamoje vietoje ir sudaryti geresnes sąlygas gijimui. Membranos poreikis
                  priklauso nuo defekto dydžio ir pasirinktos procedūros.
                </p>
                <p>
                  Pacientui nebūtina iš anksto žinoti visų medžiagų skirtumų. Konsultacijos metu gydytojas
                  paaiškina, kokios medžiagos rekomenduojamos konkrečiu atveju, kodėl jos pasirenkamos ir kokio
                  gijimo proceso galima tikėtis.
                </p>
                <p>
                  Papildomai gydytojas įvertina ir paciento gijimo sąlygas: burnos higieną, rūkymo įpročius, bendrą
                  sveikatos būklę, vartojamus vaistus ir planuojamos implantacijos laiką. Šie veiksniai gali turėti
                  įtakos tam, kaip sklandžiai gyja priaugintas kaulas ir kada galima pereiti prie kito gydymo etapo.
                  Todėl medžiagos pasirinkimas nėra vien techninis sprendimas – jis visada siejamas su visa gydymo
                  eiga.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip atliekama žandikaulio kaulo priauginimo procedūra?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Žandikaulio kaulo priauginimo procedūra Bangų odontologijos klinikoje planuojama nuosekliai,
                remiantis diagnostikos duomenimis ir individualia paciento situacija. Tikslus planavimas leidžia
                procedūrą atlikti saugiau ir numatyti tolimesnius implantacijos etapus.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultacija ir diagnostika</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Įvertinama paciento burnos būklė, trūkstamų dantų vieta, dantenos, sąkandis ir bendras gydymo
                    poreikis. Prireikus atliekami radiologiniai tyrimai, padedantys tiksliai nustatyti kaulo
                    trūkumo apimtį.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">3D tyrimo įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kompiuterinės tomografijos ar kito 3D tyrimo duomenys leidžia įvertinti kaulo aukštį, plotį,
                    nervų, sinusų ir kitų anatominių struktūrų padėtį. Šis etapas ypač svarbus planuojant saugią
                    implantaciją.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gydymo plano sudarymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pacientui paaiškinama, ar reikalingas kaulo priauginimas, koks metodas tinkamiausias ir ar
                    implantaciją bus galima atlikti tuo pačiu metu. Aptariama ir kaulo priauginimo kaina, priklausanti
                    nuo procedūros apimties, naudojamų medžiagų ir papildomų gydymo etapų.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Procedūros atlikimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kaulo priauginimas atliekamas taikant vietinę nejautrą, todėl procedūros metu pacientas
                    neturėtų jausti skausmo. Gydytojas paruošia sritį, pritaiko pasirinktą kaulo pakaitalą ar kitą
                    medžiagą, prireikus naudoja membraną ir susiuva audinius.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gijimo laikotarpis</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pacientui pateikiamos aiškios rekomendacijos dėl mitybos, burnos higienos, fizinio krūvio,
                    vaistų vartojimo ir kontrolinių vizitų. Gijimo metu svarbu laikytis gydytojo nurodymų, nerūkyti
                    ir stebėti savijautą.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">06</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Implantacijos planavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kai priaugintas kaulas sugija ir yra tinkamas implantui, planuojamas kitas gydymo etapas. Kai
                    kuriais atvejais implantacija gali būti atliekama kartu su kaulo priauginimu, tačiau jei
                    defektas didesnis, dažniausiai laukiama kelių mėnesių.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* DUK */}
          <motion.section id="duk" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Dažniausiai užduodami klausimai apie žandikaulio kaulo priauginimą</h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar kaulo priauginimas visada būtinas prieš implantaciją?</h3>
                  <p className="text-slate-600 text-sm">Ne visada. Kaulo priauginimas reikalingas tik tada, kai esamo kaulo kiekio nepakanka saugiam implanto įsriegimui. Jei kaulo tūris pakankamas, implantacija gali būti atliekama be papildomo priauginimo.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar kaulo priauginimą galima atlikti kartu su implantacija?</h3>
                  <p className="text-slate-600 text-sm">Kai kuriais atvejais taip. Jei kaulo trūkumas nedidelis ir galima užtikrinti pirminį implanto stabilumą, kaulo priauginimas gali būti atliekamas tuo pačiu metu kaip implantacija. Jei kaulo trūkumas didesnis, pirmiausia atliekamas priauginimas, o implantacija planuojama po gijimo.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar žandikaulio kaulo priauginimas yra skausmingas?</h3>
                  <p className="text-slate-600 text-sm">Procedūra atliekama taikant vietinę nejautrą, todėl jos metu skausmo neturėtų būti. Po procedūros gali būti patinimas, maudimas, jautrumas ar mėlynės. Tai dažniausiai yra normali gijimo dalis, kuri kontroliuojama gydytojo rekomendacijomis ir paskirtais vaistais.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Kiek laiko gyja kaulas po priauginimo?</h3>
                  <p className="text-slate-600 text-sm">Gijimo trukmė priklauso nuo procedūros apimties, vietos, paciento sveikatos, burnos higienos ir pasirinkto metodo. Mažesni defektai gali gyti greičiau, o didesnės apimties kaulo priauginimui gali prireikti kelių mėnesių, kol bus galima planuoti implantaciją.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Kokios galimos kaulo priauginimo komplikacijos?</h3>
                  <p className="text-slate-600 text-sm">Kaip ir po bet kurios chirurginės procedūros, galimos kaulo priauginimo komplikacijos gali būti infekcija, užsitęsęs patinimas, kraujavimas, skausmas, žaizdos gijimo sutrikimai ar nepakankama kaulo integracija. Komplikacijų riziką mažina tiksli diagnostika, tinkamas procedūros planavimas, gydytojo rekomendacijų laikymasis ir gera burnos higiena.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Nuo ko priklauso žandikaulio kaulo priauginimo kaina?</h3>
                  <p className="text-slate-600 text-sm">Žandikaulio kaulo priauginimo kaina priklauso nuo kaulo trūkumo apimties, pasirinkto metodo, naudojamų medžiagų, procedūros sudėtingumo ir to, ar ji atliekama kartu su implantacija. Tiksli kaina nustatoma konsultacijos metu, įvertinus paciento burnos būklę ir sudarius individualų gydymo planą.</p>
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
                  Renkantis žandikaulio kaulo priauginimą svarbu ne tik pati chirurginė procedūra, bet ir visas
                  pasiruošimo implantacijai procesas – nuo tikslios diagnostikos iki gijimo kontrolės ir tolimesnio
                  dantų atkūrimo plano. Bangų odontologijos klinikoje Klaipėdoje kaulo priauginimas planuojamas
                  individualiai, įvertinus paciento kaulo tūrį, dantenų būklę, sąkandį ir būsimų implantų padėtį.
                </p>
                <p>
                  Klinikoje didelis dėmesys skiriamas individualiam planavimui. Prieš pradedant gydymą atliekama
                  išsami diagnostika, padedanti tiksliai įvertinti, ar kaulo priauginimas yra būtinas, kokio metodo
                  gali reikėti ir kada būtų galima planuoti implantaciją. Toks požiūris leidžia pacientui aiškiai
                  suprasti gydymo eigą, galimus etapus ir priimti informuotą sprendimą.
                </p>
                <p>
                  Bangų odontologijos klinikoje pacientui aiškiai paaiškinama, kaip vyksta procedūra, kokios
                  medžiagos gali būti naudojamos ir ko tikėtis po kaulo priauginimo operacijos. Po gydymo
                  suteikiamos rekomendacijos dėl gijimo, higienos, mitybos ir kontrolinių vizitų, kad būtų sudarytos
                  kuo geresnės sąlygos sklandžiam gijimui bei tolimesniam dantų atkūrimui implantais.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis žandikaulio kaulo priauginimui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu Jums buvo rekomenduotas kaulo priauginimas prieš implantaciją arba norite sužinoti, ar Jūsų
                  žandikaulio kaulo pakanka saugiai implantacijai, kviečiame registruotis konsultacijai Bangų odontologijos
                  klinikoje. Vizito metu bus įvertinta Jūsų kaulo būklė ir aptartos tinkamiausios gydymo galimybės.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad implantacijos paruošimas būtų aiškus, kruopščiai suplanuotas ir
                  kuo mažiau keliantis streso. Čia Jūsų laukia patyrę specialistai, moderni įranga ir rūpestingas požiūris į
                  kiekvieną pacientą.
                </p>
                <p>
                  Registruokitės ir ženkite pirmą žingsnį link tvirto pagrindo Jūsų būsimam implantui.
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
