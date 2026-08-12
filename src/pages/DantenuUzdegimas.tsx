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
  { id: 'kas-yra', label: 'Kas yra gingivitas?' },
  { id: 'simptomai', label: 'Simptomai' },
  { id: 'gydymas', label: 'Kaip gydomas?' },
  { id: 'prieziura', label: 'Priežiūra po gydymo' },
  { id: 'mitai', label: 'Mitai apie gingivitą' },
  { id: 'faq', label: 'D.U.K.' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function DantenuUzdegimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/dantenu-uzdegimas-gingivitas/#service",
    "name": "Dantenų uždegimo (gingivito) gydymas Klaipėdoje",
    "serviceType": "Dantenų uždegimo gydymas",
    "description": "Dantenų uždegimo (gingivito) gydymas Bangų odontologijos klinikoje Klaipėdoje.",
    "url": "https://www.banguklinika.lt/paslaugos/dantenu-uzdegimas-gingivitas/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Dantenų uždegimas (gingivitas) Klaipėdoje - Bangų klinika"
        description="Dantenų uždegimo (gingivito) gydymas Klaipėdoje – kraujuojančių, patinusių dantenų priežiūra Bangų klinikoje. Kaina nuo 40€ iki 80€.⏩Registruokitės konsultacijai."
        keywords="dantenu uzdegimas, gingivitas, dantenu kraujavimas, periodonto liga, klaipeda"
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
              Dantenų uždegimas – gingivitas Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Kraujuojančios, paraudusios ar patinusios dantenos nėra sveikos burnos būklės požymis. Tokie
                  pokyčiai gali rodyti gingivitą – dantenų uždegimą, dažniausiai susijusį su bakterinių apnašų
                  kaupimusi ties dantų ir dantenų riba. Kadangi ankstyvas gingivitas dažnai nesukelia stipraus
                  skausmo, pacientas gali ilgą laiką nepastebėti pirmųjų simptomų.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje dantenų uždegimo gydymas planuojamas individualiai.
                  Įvertinama dantenų būklė, apnašų ir dantų akmenų kiekis, burnos higienos įpročiai, esamos plombos ar
                  protezai bei kiti galimi rizikos veiksniai. Gydymo tikslas – pašalinti uždegimą palaikančias
                  priežastis, pagerinti dantenų būklę ir sumažinti gilesnio periodonto pažeidimo riziką.
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
                      Dantenų uždegimo gydymo kainos
                    </h2>
                    <p className="text-slate-600">
                      Dantenų uždegimo gydymo kaina priklauso nuo uždegimo intensyvumo, dantų akmenų kiekio ir gydymo
                      apimties. Tiksli kaina nustatoma įvertinus klinikinę situaciją.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Dantenų uždegimo gydymas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Gingivito gydymas', '40 – 80 €'],
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
                  Tiksli dantenų uždegimo gydymo Klaipėdoje kaina aptariama individualios konsultacijos metu,
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
                <div className="relative aspect-[4/5] bg-sky-50">                  <img
                    src="/team/Jonas-light.jpg"
                    alt="Bangų odontologijos klinikos gydytojas"
                    className="absolute inset-0 w-full h-full object-contain"
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra gingivitas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Gingivitas – tai dantenų uždegimas, dažniausiai prasidedantis dėl ties dantenų kraštu susikaupusio
                  bakterinio biofilmo. Dantų apnašos yra prie paviršiaus prisitvirtinusi plėvelė, kurioje gausu
                  mikroorganizmų. Jei jos reguliariai ir kruopščiai nepašalinamos, dantenų audiniai pradeda reaguoti
                  uždegimu.
                </p>
                <p>
                  Minkštas apnašas galima pašalinti tinkamai valant dantis ir tarpdančius. Ilgainiui dalis apnašų
                  mineralizuojasi ir virsta dantų akmenimis. Jų paviršius šiurkštus, todėl ant jo lengviau kaupiasi
                  naujos apnašos. Susiformavusių akmenų įprastu dantų šepetėliu pašalinti neįmanoma – juos
                  profesionaliai pašalina burnos priežiūros specialistas.
                </p>
                <p>
                  Dažniausia forma yra bakterinis gingivitas, susijęs su apnašomis. Lėtinis gingivitas paprastai
                  vystosi palaipsniui ir gali ilgą laiką sukelti tik nežymų kraujavimą ar paraudimą. Ūminis gingivitas
                  gali pasireikšti staigiau ir ryškesniais simptomais. Vis dėlto stiprus skausmas, dantenų išopėjimas,
                  karščiavimas ar bendras negalavimas nėra tipiški paprastam apnašų sukeltam uždegimui.
                </p>
                <p>
                  Svarbu gingivitą atskirti nuo periodontito, danties šaknies uždegimo ir pūlinio. Gingivitas
                  apsiriboja dantenomis ir nepažeidžia dantį laikančio kaulo. Periodontito metu uždegimas apima
                  gilesnius atraminius audinius, o danties šaknies uždegimas dažniausiai susijęs su infekcija danties
                  viduje ar aplink šaknies viršūnę. Dantenų uždegimas ir pūlinys taip pat nėra tapačios būklės.
                </p>
              </div>

              <h3 className="font-semibold text-darkblue-700 mt-6 mb-3">Kas didina gingivito riziką?</h3>
              <p className="text-slate-700 leading-relaxed">
                Dantenų reakciją ir apnašų kaupimąsi gali sustiprinti rūkymas, burnos sausumas, nekontroliuojamas
                cukrinis diabetas, hormonų pokyčiai, tam tikri vaistai, dantų susigrūdimas, ortodontiniai aparatai ar
                netikslūs plombų ir protezų kraštai. Tačiau dažniausia gingivito priežastis išlieka nepakankamai
                pašalintos bakterinės apnašos.
              </p>
            </div>
          </motion.section>

          {/* SIMPTOMAI */}
          <motion.section id="simptomai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokie simptomai gali rodyti dantenų uždegimą?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Gingivito simptomai gali būti nežymūs, todėl liga kartais pastebima tik profilaktinės apžiūros ar
                profesionalios burnos higienos metu. Skausmo nebuvimas nereiškia, kad dantenos yra sveikos.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Dažniausi dantenų uždegimo požymiai:</h3>

                <div className="grid gap-3">
                  {[
                    'dantenų kraujavimas valantis dantis ar tarpdančius',
                    'paraudusios, patamsėjusios ar blizgančios dantenos',
                    'dantenų patinimas ir paburkimas',
                    'padidėjęs jautrumas liečiant',
                    'pakitęs dantenų kontūras',
                    'nemalonus burnos kvapas',
                    'nemalonus skonis burnoje',
                    'matomos apnašos ar dantų akmenys ties dantenų kraštu'
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
                  Sveikos dantenos neturėtų reguliariai kraujuoti. Vienkartinį kraujavimą gali sukelti mechaninis
                  sužeidimas, tačiau dažnai pasikartojantis kraujavimas paprastai rodo uždegimą arba netinkamą valymo
                  techniką. Vengiant valyti kraujuojančią vietą, joje lieka daugiau apnašų, todėl uždegimas gali
                  stiprėti.
                </p>
                <p>
                  Dantenų atsitraukimas, gilėjančios periodonto kišenės, dantų paslankumas, pūliai tarp danties ir
                  dantenų ar sąkandžio pokyčiai nėra tipiški paprastam gingivitui. Tokie požymiai gali rodyti
                  periodontitą, abscesą ar kitą gilesnę problemą.
                </p>
                <p>
                  Paieškoje vartojamos frazės „dantenų uždegimas pūlinys“ ar „abscesas dantenų uždegimas“ dažnai
                  apibūdina lokalų patinimą. Vis dėlto paprastas gingivitas pūlių sankaupos paprastai nesukelia.
                  Atsiradus pūlingam gumbeliui, stipriam skausmui, veido tinimui, karščiavimui, rijimo ar kvėpavimo
                  sunkumams, reikėtų kreiptis skubiai.
                </p>
              </div>
            </div>
          </motion.section>

          {/* GYDYMAS */}
          <motion.section id="gydymas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip gydomas dantenų uždegimas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Gingivito gydymas pradedamas nuo jo priežasties nustatymo. Dažniausiai svarbiausia pašalinti bakterines
                apnašas ir dantų akmenis, pagerinti kasdienę burnos higieną bei kontroliuoti veiksnius, kurie skatina
                apnašų kaupimąsi.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dantenų ir burnos būklės įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Apžiūrimos dantenos, dantys, tarpdančiai ir esamos restauracijos. Vertinama dantenų spalva,
                    patinimas, kraujavimas, apnašų ir akmenų kiekis. Taip pat aptariami paciento higienos įpročiai,
                    rūkymas, vartojami vaistai ir bendrosios ligos. Prireikus matuojamos periodonto kišenės ir
                    vertinamas klinikinio prisitvirtinimo lygis. Radiologiniai tyrimai atliekami tuomet, kai reikia
                    įvertinti kaulo būklę arba atmesti periodontitą.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Apnašų ir dantų akmenų pašalinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Profesionalios burnos higienos metu pašalinamos minkštosios apnašos, virš dantenų susidarę akmenys
                    ir paviršinė pigmentacija. Dantų paviršiai nuvalomi ir, kai reikia, poliruojami, kad pacientui būtų
                    lengviau palaikyti tinkamą higieną namuose. Jei nustatomas gilesnis periodonto pažeidimas ir po
                    dantenomis susikaupę akmenys, gali reikėti išsamesnio periodontologinio gydymo. Tai jau nėra vien
                    įprastas gingivito gydymas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Individualių burnos higienos įpročių koregavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pacientui parodoma, kaip taisyklingai valyti dantis ties dantenų kraštu ir tarpdančiuose. Priemonės
                    parenkamos pagal dantų padėtį, tarpdančių dydį, esamus implantus, protezus ar ortodontinius
                    aparatus. Dantis svarbu valyti du kartus per dieną, tačiau vien šepetėlio nepakanka. Tarpdančiai
                    turėtų būti valomi kasdien individualiai parinktais tarpdančių šepetėliais, siūlu ar kita tinkama
                    priemone. Burnos irigatorius gali būti papildoma pagalba, tačiau ne visada pakeičia mechaninį
                    tarpdančių valymą.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Uždegimą palaikančių veiksnių kontrolė</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Įvertinama, ar apnašų kaupimosi neskatina netikslūs plombų kraštai, prastai pritaikyti protezai,
                    dantų susigrūdimas, breketai ar burnos sausumas. Prireikus planuojamas restauracijų koregavimas ar
                    kitas papildomas gydymas. Burnos skalavimo skystis ar antiseptinės priemonės gali būti skiriamos
                    kaip laikina papildoma gydymo dalis, tačiau jos nepakeičia mechaninio apnašų pašalinimo.
                    Antibiotikai įprastam apnašų sukeltam gingivitui paprastai nėra reikalingi.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Kontrolinis dantenų būklės įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Po gydymo vertinama, ar sumažėjo kraujavimas, patinimas ir apnašų kiekis. Jei simptomai išlieka
                    nepaisant geros higienos, gali reikėti papildomo ištyrimo dėl periodontito, vaistų poveikio,
                    sisteminių ligų ar retesnių dantenų būklių.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Gydymo trukmė priklauso nuo uždegimo intensyvumo, dantų akmenų kiekio, paciento higienos įpročių ir
                kitų rizikos veiksnių. Vieno universalaus termino, per kurį dantenos turi visiškai pasveikti, nėra.
              </p>
            </div>
          </motion.section>

          {/* PRIEŽIŪRA */}
          <motion.section id="prieziura" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip prižiūrėti dantenas po gydymo ir išvengti uždegimo pasikartojimo?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantenų uždegimo gydymas nesibaigia profesionaliu apnašų pašalinimu. Jei kasdienė higiena išlieka
                  nepakankama, bakterinis biofilmas vėl pradeda kauptis ir gingivitas gali pasikartoti.
                </p>
                <p>
                  Dantis reikėtų valyti kruopščiai, bet ne per stipriai, ypatingą dėmesį skiriant dantų ir dantenų
                  ribai. Kraujuojančių vietų nereikėtų ignoruoti ar nustoti valyti – jas svarbu prižiūrėti švelniai ir
                  reguliariai.
                </p>
                <p>
                  Tarpdančių priežiūra yra tokia pat svarbi kaip valymas šepetėliu. Netinkamai parinkta priemonė gali
                  nepašalinti apnašų arba traumuoti dantenas, todėl naudinga pasikonsultuoti su burnos higienistu.
                </p>
                <p>
                  Profesionalios burnos higienos dažnumas parenkamas individualiai. Jis priklauso nuo apnašų
                  kaupimosi, dantenų būklės, periodontito rizikos, rūkymo, implantų, ortodontinių aparatų ir paciento
                  gebėjimo prižiūrėti burną namuose.
                </p>
                <p>
                  Rūkymo atsisakymas, pakankamas skysčių vartojimas ir gerai kontroliuojamos bendrosios ligos taip pat
                  svarbios, tačiau jos nepakeičia kasdienio mechaninio apnašų valymo.
                </p>
              </div>
            </div>
          </motion.section>

          {/* MITAI */}
          <motion.section id="mitai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Dažniausi mitai apie gingivitą</h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Kraujuojančių dantenų negalima valyti</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Netiesa. Dažniausiai kraujavimą sukelia apnašų palaikomas uždegimas. Nustojus valyti dantis ir
                    tarpdančius, apnašų kiekis didėja. Valyti reikia švelniai, tačiau kruopščiai.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gingivitas visada sukelia skausmą</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Gingivitas dažnai yra neskausmingas. Pirmieji požymiai paprastai būna kraujavimas, paraudimas,
                    patinimas ar nemalonus burnos kvapas.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Burnos skalavimo skystis gali išgydyti gingivitą</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Skalavimo priemonė gali būti papildoma gydymo dalis, tačiau ji nepašalina prie dantų prilipusio
                    biofilmo ir dantų akmenų. Pagrindinis gydymas yra mechaninis apnašų pašalinimas.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gingivitas visada pereina į periodontitą</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Negydomas gingivitas gali sudaryti sąlygas periodontitui vystytis, tačiau progresavimas nėra
                    vienodas visiems pacientams. Tam įtakos turi apnašų kontrolė, rūkymas, bendroji sveikata ir
                    individualus polinkis.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* FAQ */}
          <motion.section id="faq" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Dažniausiai užduodami klausimai apie dantenų uždegimą</h2>

              <div className="space-y-4">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ar gingivitas yra išgydomas?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Apnašų sukeltas gingivitas dažniausiai yra grįžtamas. Pašalinus apnašas ir dantų akmenis bei
                    pagerinus kasdienę higieną, dantenų būklė gali reikšmingai pagerėti.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ar dantenų uždegimas gali praeiti savaime?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Jei apnašos ir akmenys nepašalinami, uždegimas dažniausiai išlieka. Laikinas kraujavimo sumažėjimas
                    nebūtinai reiškia, kad dantenos pasveiko.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ar gingivitas gali pereiti į periodontitą?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Taip, negydomas uždegimas daliai pacientų gali progresuoti į periodontitą. Jo metu pažeidžiami
                    dantį laikantys audiniai ir kaulas, todėl ankstyva diagnostika yra svarbi.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Ar gingivitas yra tas pats, kas danties šaknies uždegimas?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Ne. Gingivitas pažeidžia dantenas, o danties šaknies uždegimas dažniausiai susijęs su infekcija
                    danties pulpoje, šaknų kanaluose ar aplink šaknies viršūnę. Šių būklių gydymas skiriasi.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Kada dėl dantenų uždegimo reikia kreiptis skubiai?</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Skubi pagalba reikalinga, jei atsiranda stiprus skausmas, pūliai, ryškus lokalus ar veido
                    patinimas, karščiavimas, bendras silpnumas, sunku ryti, kvėpuoti ar išsižioti. Tokie simptomai
                    nėra būdingi paprastam gingivitui.
                  </p>
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
                  Gydant dantenų uždegimą svarbu ne tik sumažinti kraujavimą, patinimą ar kitus simptomus, bet ir
                  nustatyti priežastis, kurios palaiko uždegiminį procesą. Bangų odontologijos klinikoje Klaipėdoje
                  gingivito gydymas planuojamas individualiai, įvertinus paciento dantenų būklę, apnašų ir dantų
                  akmenų kiekį, burnos higienos įpročius, esamas restauracijas bei bendrą burnos sveikatą.
                </p>
                <p>
                  Klinikoje didelis dėmesys skiriamas tiksliam dantenų būklės įvertinimui. Prieš pradedant gydymą
                  nustatoma, ar simptomus sukelia apnašų sukeltas gingivitas, ar reikalingas išsamesnis ištyrimas dėl
                  periodontito, danties šaknies uždegimo, pūlinio ar kitos burnos būklės. Pacientui aiškiai
                  paaiškinama gydymo eiga, profesionalios burnos higienos poreikis, kasdienės priežiūros principai ir
                  uždegimo pasikartojimo riziką mažinantys veiksmai.
                </p>
                <p>
                  Bangų odontologijos klinikoje siekiama ne tik pagerinti esamą dantenų būklę, bet ir sudaryti sąlygas
                  ilgalaikei uždegimo kontrolei. Po gydymo pacientui parenkamos tinkamos burnos higienos priemonės,
                  pateikiamos aiškios rekomendacijos dėl dantų ir tarpdančių valymo bei individualiai nustatomas
                  kontrolinių vizitų dažnumas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis dantenų uždegimo gydymui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu pastebėjote dantenų kraujavimą, patinimą ar kitus uždegimo požymius, kviečiame registruotis
                  konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta Jūsų dantenų būklė ir
                  suplanuotas tinkamiausias gydymas.
                </p>
                <p>
                  Registruokitės ir pasirūpinkite savo dantenų sveikata laiku bei profesionaliai.
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
