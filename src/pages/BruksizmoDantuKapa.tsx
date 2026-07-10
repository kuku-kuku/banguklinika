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
  { id: 'kas-yra', label: 'Kas yra bruksizmo dantų kapa?' },
  { id: 'bruksizmas', label: 'Kas yra bruksizmas?' },
  { id: 'pozymiai', label: 'Bruksizmo požymiai' },
  { id: 'kaip-veikia', label: 'Kaip veikia kapa?' },
  { id: 'gamyba', label: 'Kapos gamyba' },
  { id: 'prieziura', label: 'Kapos priežiūra' },
  { id: 'duk', label: 'Dažniausi klausimai' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function BruksizmoDantuKapa() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/bruksizmo-dantu-kapa/#service",
    "name": "Bruksizmo dantų kapa Klaipėdoje",
    "serviceType": "Bruksizmo dantų kapa",
    "description": "Bruksizmo (dantų griežimo) kapos siūlomos Bangų odontologijos klinikoje Klaipėdoje. Individualiai pagaminta kapa apsaugo dantis nuo dilimo ir pažeidimų.",
    "url": "https://www.banguklinika.lt/paslaugos/bruksizmo-dantu-kapa/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Bruksizmo dantų kapa Klaipėdoje - Bangų klinika"
        description="Griežiate dantimis miegodami? Bruksizmo dantų kapa Klaipėdoje apsaugos dantis nuo dilimo☑️pagaminta individualiai☑️kaina nuo 150€.⏩Registruokitės jau dabar."
        keywords="bruksizmo kapa, dantu griezimas, naktine kapa, dantu apsauga, klaipeda"
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
              Bruksizmo kapa Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų griežimas ar stiprus sukandimas dažnai vyksta nevalingai, ypač miego metu, todėl žmogus
                  ilgą laiką gali net nežinoti, kad ši problema veikia jo dantis, kramtomuosius raumenis ir
                  žandikaulio sąnarį. Rytais jaučiamas žandikaulio nuovargis, galvos ar smilkinių skausmas,
                  padidėjęs dantų jautrumas ar pastebimas dantų nudilimas gali būti ženklai, kad dantys patiria per
                  didelę apkrovą.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje bruksizmo požymiai vertinami individualiai, atsižvelgiant
                  į dantų nudilimą, sąkandį, restauracijų būklę ir paciento nusiskundimus. Vienas dažniausiai
                  taikomų apsaugos būdų yra bruksizmo kapa – individualiai pagaminta kapa nuo dantų griežimo,
                  padedanti apsaugoti dantis nuo tolimesnio dilimo, skilimų ir per didelės apkrovos.
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
                      Bruksizmo dantų kapos kaina
                    </h2>
                    <p className="text-slate-600">
                      Bruksizmo dantų kapa gaminama individualiai pagal kiekvieno paciento burnos matmenis, todėl prieš gamybą visuomet atliekama apžiūra, kurios metu įvertinama situacija ir aptariami tolimesni žingsniai.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Kapa nuo bruksizmo</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Bruksizmo dantų kapa', '150 €'],
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
                  Atskirai skaičiuojami atspaudai, modelių atpylimas ir kiti su gamyba susiję darbai.
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

          {/* KAS YRA BRUKSIZMO KAPA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra bruksizmo dantų kapa?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bruksizmo dantų kapa – tai individualiai pagal paciento dantis pagaminta apsauginė kapa,
                  dažniausiai naudojama naktį. Jos pagrindinis tikslas – sukurti apsauginį barjerą tarp viršutinių
                  ir apatinių dantų, kad griežimo ar stipraus sukandimo metu dantys tiesiogiai nesitrintų vienas į
                  kitą.
                </p>
                <p>
                  Tinkamai pagaminta bruksizmo kapa padeda sumažinti dantų emalio dilimą, apsaugoti dantis nuo
                  įtrūkimų, lūžių ir restauracijų pažeidimų. Ji ypač aktuali pacientams, kurie jau turi plombų,
                  vainikėlių, užklotų, laminačių ar kitų restauracijų, nes bruksizmas gali sutrumpinti jų tarnavimo
                  laiką.
                </p>
                <p>
                  Pacientai šią priemonę dažnai vadina skirtingai: kapos nuo dantų griežimo, dantų kapos nuo
                  griežimo arba dantų kapos nuo bruksizmo. Visi šie pavadinimai dažniausiai apibūdina tą pačią
                  paskirtį – apsaugoti dantis nuo nevalingo griežimo ar stipraus sukandimo padarinių.
                </p>
                <p>
                  Svarbu suprasti, kad kapa ne visada pašalina pačią bruksizmo priežastį. Dažnai ji yra apsauginė
                  ir stabilizuojanti priemonė, padedanti kontroliuoti bruksizmo pasekmes bei išvengti sudėtingesnio
                  dantų gydymo ateityje.
                </p>
              </div>
            </div>
          </motion.section>

          {/* BRUKSIZMAS */}
          <motion.section id="bruksizmas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra bruksizmas ir kodėl svarbu jo neignoruoti?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bruksizmas – tai nevalingas dantų griežimas arba stiprus dantų sukandimas. Jis dažniausiai
                  pasireiškia nakties metu, kai žmogus negali sąmoningai kontroliuoti kramtomųjų raumenų veiklos.
                  Kai kuriais atvejais stiprus sukandimas gali pasireikšti ir dieną, ypač patiriant įtampą, stresą
                  ar ilgai susikaupus.
                </p>
                <p>
                  Bruksizmo priežastys gali būti įvairios. Dažnai jis siejamas su stresu, emocine įtampa, miego
                  sutrikimais, netaisyklingu sąkandžiu, tam tikrais įpročiais ar bendru kramtomųjų raumenų
                  aktyvumu. Dėl šios priežasties dantų griežimo gydymas gali būti kompleksinis – vieniems
                  pacientams pakanka apsauginės kapos, o kitiems gali reikėti papildomai vertinti sąkandį,
                  restauracijas, raumenų įtampą ar kitus veiksnius.
                </p>
                <p>
                  Ignoruojamas bruksizmas ilgainiui gali sukelti reikšmingų dantų ir žandikaulio problemų. Nuolatinė
                  mechaninė apkrova gali lemti emalio nusidėvėjimą, dantų aukščio sumažėjimą, jautrumą šalčiui ar
                  karščiui, plombų skilimą, keramikos restauracijų pažeidimus ar net dantų lūžius.
                </p>
                <p>
                  Kai kuriais atvejais dėl bruksizmo gali atsirasti ir žandikaulio sąnario diskomfortas: traškesys,
                  maudimas, ribotas išsižiojimas, kramtomųjų raumenų įtampa ar galvos skausmai. Todėl pastebėjus
                  galimus požymius svarbu nedelsti ir pasikonsultuoti su odontologu.
                </p>
              </div>
            </div>
          </motion.section>

          {/* BRUKSIZMO POŽYMIAI */}
          <motion.section id="pozymiai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokie požymiai rodo, kad jums gali reikėti kapos nuo dantų griežimo?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Bruksizmas dažnai nustatomas ne iš karto, nes žmogus dantimis dažniausiai griežia miegodamas.
                Kartais apie problemą pasako šalia miegantis artimasis, tačiau neretai pirmuosius požymius pastebi
                odontologas profilaktinės apžiūros metu.
              </p>

              <div className="space-y-3 mb-6">
                <h3 className="font-semibold text-darkblue-700">Kapa nuo dantų griežimo gali būti reikalinga, jei:</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'rytais jaučiate žandikaulio nuovargį, įtampą ar skausmą',
                    'dažnai skauda galvą, smilkinius, kaklą ar ausų sritį',
                    'pastebite dantų nudilimą, patrumpėjimą ar pasikeitusią jų formą',
                    'dantys tapo jautresni šalčiui, karščiui ar prisilietimui',
                    'skilinėja plombos, vainikėliai, laminatės ar kitos restauracijos',
                    'ant dantų matomi įtrūkimai ar nuskilimai',
                    'partneris pastebi dantų griežimą naktį',
                    'dienos metu dažnai laikote dantis stipriai sukąstus',
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
                  Šie požymiai ne visuomet reiškia, kad problema jau yra pažengusi, tačiau jie rodo, kad dantys
                  gali patirti per didelę apkrovą. Kuo anksčiau nustatomi bruksizmo požymiai, tuo didesnė tikimybė
                  apsaugoti dantis nuo didesnio nudilimo ir sudėtingesnio atkūrimo ateityje.
                </p>
                <p>
                  Jei dantys jau stipriai nudilę, yra pakitęs sąkandžio aukštis, dažnai lūžta restauracijos ar
                  vargina žandikaulio sąnario skausmai, vien kapos gali nepakakti. Tokiais atvejais reikalingas
                  išsamesnis gydymo planas, apimantis ne tik dantų apsaugą, bet ir pažeidimų atkūrimą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAIP VEIKIA */}
          <motion.section id="kaip-veikia" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip veikia bruksizmo kapa?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bruksizmo kapa veikia kaip apsauginis sluoksnis tarp viršutinių ir apatinių dantų. Griežimo ar
                  stipraus sukandimo metu ji perima dalį mechaninės apkrovos ir neleidžia dantims tiesiogiai
                  trintis vieniems į kitus. Tokiu būdu saugomas emalis, dentinas, plombos ir kitos restauracijos.
                </p>
                <p>
                  Individualiai pritaikyta kapa taip pat padeda stabilizuoti dantų kontaktus nakties metu. Tai
                  svarbu pacientams, kurių dantys yra nudilę, apkrauti restauracijomis arba jautrūs dėl per
                  didelio sukandimo. Kapa padeda sumažinti netolygią apkrovą ir apsaugoti silpnesnius dantis nuo
                  skilimo.
                </p>
                <p>
                  Svarbu pabrėžti, kad bruksizmo kapos nėra vienintelis sprendimas visais atvejais. Jei dantys jau
                  stipriai nudilę, sukandimas pakitęs arba yra žandikaulio sąnario sutrikimų, gali prireikti
                  platesnio gydymo plano. Tokiais atvejais odontologas gali rekomenduoti restauracijų atnaujinimą,
                  sąkandžio analizę, protezavimą, ortodontinį gydymą ar kitus papildomus sprendimus.
                </p>
                <p>
                  Vis dėlto daugeliui pacientų individuali kapa yra pirmas ir labai svarbus žingsnis siekiant
                  sustabdyti tolimesnį dantų pažeidimą. Ji padeda apsaugoti natūralius dantis ir jau atliktus
                  gydymo darbus, todėl ypač rekomenduojama pacientams po didesnių plombavimo, protezavimo ar
                  estetinių restauracijų procedūrų.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAPOS GAMYBA */}
          <motion.section id="gamyba" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip gaminama individuali bruksizmo kapa?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Individualios bruksizmo kapos gamyba Bangų odontologijos klinikoje atliekama nuosekliai, kad kapa
                būtų tiksli, patogi ir saugi naudoti kasdien. Kiekvienas etapas svarbus tam, kad kapa gerai
                laikytųsi burnoje ir atliktų savo apsauginę funkciją.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Apžiūra ir dantų būklės įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Odontologas įvertina dantų būklę, nudilimo požymius, plombas, vainikėlius, sąkandį ir paciento
                    nusiskundimus. Aptariama, kada pasireiškia griežimas ar stiprus sukandimas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Sąkandžio ir restauracijų analizė</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Jei burnoje yra daug restauracijų, dantys stipriai nudilę arba pacientas jaučia diskomfortą
                    kramtant, papildomai vertinamas sąkandis, siekiant nuspręsti, ar pakanka apsauginės kapos.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dantų skenavimas arba atspaudai</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kad kapa tiksliai atitiktų paciento dantų formą, atliekamas skaitmeninis skenavimas arba
                    nuimami dantų atspaudai, pagal kuriuos gaminama individuali kapa.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Kapos gamyba</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Kapa gaminama iš specialios medicininės medžiagos, parenkant tinkamą storį ir standumą pagal
                    paciento situaciją – nuo plonesnės apsauginės kapos iki tvirtesnio okliuzinio sprendimo.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pritaikymas ir naudojimo rekomendacijos</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagaminta kapa pamatuojama burnoje, įvertinamas jos prigludimas ir stabilumas. Pacientui
                    paaiškinama, kaip kapą įsidėti, išimti, valyti, laikyti ir kaip dažnai ją naudoti.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Individuali bruksizmo kapa skiriasi nuo standartinių universalių kapų tuo, kad ji gaminama pagal
                konkretaus paciento dantis. Todėl ji tiksliau priglunda, geriau laikosi, mažiau trukdo miegui ir
                padeda saugiau paskirstyti apkrovą.
              </p>
            </div>
          </motion.section>

          {/* KAPOS PRIEŽIŪRA */}
          <motion.section id="prieziura" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kiek laiko tarnauja ir kaip prižiūrėti bruksizmo kapą?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bruksizmo kapos tarnavimo laikas priklauso nuo griežimo intensyvumo, kapos medžiagos, jos
                  storio, priežiūros ir reguliarių patikrinimų. Vieniems pacientams kapa gali tarnauti ilgiau,
                  kitiems, esant labai intensyviam griežimui, ji gali nusidėvėti greičiau. Jei kapa pradyla,
                  įtrūksta, tampa laisva ar nepatogi, svarbu kreiptis į odontologą.
                </p>
                <p>
                  Kapos priežiūra nėra sudėtinga, tačiau ji turi būti nuosekli. Po kiekvieno naudojimo kapą
                  rekomenduojama nuplauti vėsiu arba drungnu vandeniu ir švelniai nuvalyti tam skirta priemone ar
                  minkštu šepetėliu. Nereikėtų naudoti karšto vandens, nes jis gali deformuoti kapą.
                </p>
                <p>
                  Kai kapa nenaudojama, ją reikėtų laikyti specialioje dėžutėje, apsaugotoje nuo karščio, dulkių ir
                  mechaninių pažeidimų. Taip pat svarbu nepamiršti kasdienės burnos higienos – kapa dedama ant
                  švarių dantų, todėl prieš miegą būtina kruopščiai išsivalyti dantis ir tarpdančius.
                </p>
                <p>
                  Reguliarūs profilaktiniai vizitai padeda įvertinti, ar kapa vis dar tinkamai priglunda, ar nėra
                  naujų dantų nudilimo požymių, įtrūkimų ar sąkandžio pokyčių. Tai ypač svarbu pacientams, kuriems
                  bruksizmas yra intensyvus arba jau atlikti didesni dantų atkūrimo darbai.
                </p>
              </div>
            </div>
          </motion.section>

          {/* DUK */}
          <motion.section id="duk" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Dažniausiai užduodami klausimai apie bruksizmo kapas</h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar bruksizmo kapa išgydo dantų griežimą?</h3>
                  <p className="text-slate-600 text-sm">Ne visada. Bruksizmo kapa dažniausiai nepašalina pačios dantų griežimo priežasties, tačiau padeda apsaugoti dantis nuo jo pasekmių. Jei bruksizmas susijęs su stresu, miego sutrikimais ar sąkandžio problemomis, gali būti reikalingas platesnis požiūris.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar kapą reikia nešioti kiekvieną naktį?</h3>
                  <p className="text-slate-600 text-sm">Dažniausiai taip, jei odontologas rekomendavo ją naudoti naktiniam bruksizmui kontroliuoti. Reguliarus naudojimas padeda apsaugoti dantis ir restauracijas nuo nuolatinės apkrovos.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar bruksizmo kapa bus patogi?</h3>
                  <p className="text-slate-600 text-sm">Individualiai pagaminta kapa pritaikoma pagal paciento dantis, todėl paprastai yra gerai toleruojama. Pirmomis naktimis gali būti jaučiamas nedidelis svetimkūnio pojūtis, tačiau dauguma pacientų prie kapos pripranta palaipsniui.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Ar kapa reikalinga po protezavimo ar estetinių restauracijų?</h3>
                  <p className="text-slate-600 text-sm">Jei pacientas griežia dantimis ar stipriai sukanda dantis, kapa gali būti labai svarbi po protezavimo, estetinio plombavimo, laminačių ar užklotų. Ji padeda apsaugoti restauracijas nuo skilimo, nusidėvėjimo ir per didelės apkrovos.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Kada reikia keisti bruksizmo kapą?</h3>
                  <p className="text-slate-600 text-sm">Kapą reikėtų keisti, jei ji susidėvi, įtrūksta, nebetiksliai laikosi, pasikeičia dantų padėtis arba atsiranda diskomfortas. Sprendimą dėl kapos keitimo geriausia priimti po odontologo apžiūros.</p>
                </div>
                <div className={innerCard}>
                  <h3 className="font-bold text-slate-900 mb-2">Nuo ko priklauso bruksizmo kapos kaina?</h3>
                  <p className="text-slate-600 text-sm">Bruksizmo kapos kaina priklauso nuo kapos tipo, naudojamos medžiagos, gamybos būdo ir individualios klinikinės situacijos. Tiksli kaina aptariama konsultacijos metu, kai įvertinama dantų būklė, sąkandis ir bruksizmo požymiai.</p>
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
                  Renkantis bruksizmo kapą svarbu ne tik pati apsauginė priemonė, bet ir tikslus dantų, sąkandžio
                  bei restauracijų būklės įvertinimas. Bangų odontologijos klinikoje Klaipėdoje bruksizmo požymiai
                  vertinami individualiai, siekiant parinkti pacientui tinkamą, patogų ir ilgalaikę dantų apsaugą
                  užtikrinantį sprendimą.
                </p>
                <p>
                  Klinikoje didelis dėmesys skiriamas aiškiam gydymo plano paaiškinimui. Konsultacijos metu
                  aptariama, ar konkrečiu atveju pakanka individualios kapos, ar dėl dantų nudilimo, restauracijų
                  pažeidimų ar žandikaulio sąnario diskomforto reikalingas platesnis gydymo planas.
                </p>
                <p>
                  Bangų odontologijos klinikoje specialistai skiria laiko paciento klausimams, paaiškina kapos
                  naudojimo ir priežiūros rekomendacijas bei užtikrina tolimesnę kontrolę. Toks požiūris padeda
                  pacientui jaustis ramiai, suprasti savo situaciją ir laiku apsaugoti dantis nuo tolimesnio
                  dilimo.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis bruksizmo dantų kapos gamybai Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu pastebite bruksizmo požymius – ryte jaučiamą žandikaulio nuovargį, galvos skausmą, padidėjusį dantų
                  jautrumą ar dantų nudilimą – kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu
                  bus įvertinta Jūsų burnos būklė ir aptartas individualiai pritaikytos bruksizmo dantų kapos gamybos
                  procesas.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiame, kad dantų apsauga nuo griežimo būtų paprasta, patogi ir efektyvi.
                  Čia Jūsų laukia patyrę specialistai, moderni įranga ir rūpestingas požiūris į kiekvieną pacientą.
                </p>
                <p>
                  Registruokitės bruksizmo dantų kapos gamybai ir pasirūpinkite savo dantų sveikata laiku bei profesionaliai.
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
