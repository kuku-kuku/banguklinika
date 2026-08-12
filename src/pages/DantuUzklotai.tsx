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
  { id: 'kas-yra', label: 'Kas yra dantų užklotai?' },
  { id: 'kada-rekomenduojami', label: 'Kada rekomenduojami?' },
  { id: 'skirtumai', label: 'Skirtumai nuo plombų ir vainikėlių' },
  { id: 'procesas', label: 'Kaip atliekamas atkūrimas?' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function DantuUzklotai() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/dantu-uzklotai/#service",
    "name": "Dantų užklotai Klaipėdoje",
    "serviceType": "Dantų užklotai",
    "description": "Individualūs dantų užklotai stipriai pažeisto kramtomojo danties atkūrimui Bangų odontologijos klinikoje Klaipėdoje.",
    "url": "https://www.banguklinika.lt/paslaugos/dantu-uzklotai/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Dantų užklotai Klaipėdoje - Bangų klinika"
        description="Dantų užklotai Klaipėdoje – individualios restauracijos stipriai pažeisto kramtomojo danties atkūrimui Bangų odontologijos klinikoje. Kaina nuo 450€.⏩Registruokitės konsultacijai."
        keywords="dantu uzklotai, keramikiniai uzklotai, danties atkurimas, mikroprotezavimas, klaipeda"
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
              Dantų užklotai Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų užklotai – tai individualiai gaminamos restauracijos, skirtos stipriai pažeistam kramtomajam
                  dančiui atkurti. Jie dažniausiai pasirenkami tada, kai plombos nepakanka patikimai atkurti danties
                  formą ir funkciją, tačiau viso danties dengti vainikėliu dar nebūtina. Užklotas gali atkurti didelę
                  kramtomojo paviršiaus dalį ir padengti vieną ar kelis susilpnėjusius danties kauburėlius.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje danties atkūrimas užklotu planuojamas individualiai. Prieš
                  gydymą įvertinamas pažeidimo dydis, likusių sienelių tvirtumas, sąkandis, danties gyvybingumas ir
                  anksčiau atliktas gydymas. Toks vertinimas padeda parinkti restauraciją, kuri atitiktų konkretaus
                  danties būklę ir kramtymo apkrovą.
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
                      Dantų užklotų kainos
                    </h2>
                    <p className="text-slate-600">
                      Dantų užklotų kaina priklauso nuo medžiagos, restauracijos dydžio, danties paruošimo ir papildomo
                      gydymo. Tiksli kaina nustatoma įvertinus konkrečią klinikinę situaciją.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Dantų užklotai</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Dantų užklotas', 'nuo 450 €'],
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
                  Tiksli dantų užklotų Klaipėdoje kaina aptariama individualios konsultacijos metu, atsižvelgiant į
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra dantų užklotai?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Dantų užklotai yra netiesioginės restauracijos, pagaminamos pagal paruošto danties formą ir vėliau
                  pritvirtinamos prie likusių jo audinių. Skirtingai nei plombuojant, galutinė restauracija nėra visa
                  formuojama tiesiogiai paciento burnoje. Dantis nuskenuojamas arba nuo jo nuimamas atspaudas, pagal
                  kurį pagaminamas individualus užklotas.
                </p>
                <p>
                  Užklotas atkuria pažeistą kramtomojo paviršiaus dalį ir padengia susilpnėjusius kauburėlius. Toks
                  sprendimas gali būti reikalingas po didelės plombos, karieso, danties skilimo ar šaknų kanalų
                  gydymo, kai likusios sienelės nebegali patikimai atlaikyti kramtymo jėgų.
                </p>
                <p>
                  Dantų užklotai priskiriami mikroprotezavimui, nes atkuriama tik pažeista danties dalis. Paruošimo
                  metu pašalinami karieso pažeisti, suskilę ar nepatikimi audiniai, o tvirtos sienelės išsaugomos. Tai
                  leidžia atkurti dantį mažesnės apimties restauracija nei visas vainikėlis.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REKOMENDUOJAMI */}
          <motion.section id="kada-rekomenduojami" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada rekomenduojami dantų užklotai?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Danties atkūrimas užklotu gali būti rekomenduojamas, kai pažeidimas yra per didelis patikimai plombai,
                tačiau dar likę pakankamai tvirtų natūralių audinių dalinei restauracijai išlaikyti.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Dantų užklotai gali būti svarstomi, kai:</h3>

                <div className="grid gap-3">
                  {[
                    'didelė danties dalis pažeista karieso',
                    'likusi plati, susidėvėjusi ar nesandari plomba',
                    'nulūžęs vienas ar keli danties kauburėliai',
                    'danties sienelės yra plonos arba susilpnėjusios',
                    'po šaknų kanalų gydymo prarasta daug vainikinių audinių',
                    'dantis stipriai nudilęs',
                    'plomba negalėtų tiksliai atkurti kramtomojo paviršiaus ir kontaktų'
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
                  Po endodontinio gydymo danties prognozei svarbus ne tik kanalų gydymo rezultatas, bet ir sandari bei
                  tinkamai kramtymo apkrovą paskirstanti galutinė restauracija. Jei likusių sienelių pakanka, užklotas
                  gali padengti susilpnėjusius kauburėlius ir sumažinti jų skilimo riziką.
                </p>
                <p>
                  Vis dėlto užklotas nėra reikalingas kiekvienam šaknų kanalus gydytam dančiui. Jei defektas mažas,
                  gali pakakti plombos ar danties įkloto. Kai dantis labai stipriai suiręs, gali būti rekomenduojamas
                  visas dantį dengiantis vainikėlis.
                </p>
              </div>
            </div>
          </motion.section>

          {/* SKIRTUMAI */}
          <motion.section id="skirtumai" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kuo dantų užklotai skiriasi nuo plombų ir vainikėlių?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Plomba formuojama tiesiogiai burnoje ir dažniausiai tinka mažiems arba vidutinio dydžio defektams.
                  Kai pažeista didelė kramtomojo paviršiaus dalis ir susilpnėję kauburėliai, plomba gali nepakankamai
                  apsaugoti likusias sieneles nuo kramtymo apkrovos.
                </p>
                <p>
                  Dantų įklotai ir užklotai gaminami individualiai, tačiau jų apimtis skiriasi. Įklotas dažniausiai
                  atkuria vidinę kramtomojo paviršiaus dalį, kai pagrindiniai kauburėliai dar pakankamai tvirti.
                  Užklotas dengia platesnę sritį ir vieną arba kelis kauburėlius, kuriems reikalinga papildoma
                  apsauga.
                </p>
                <p>
                  Vainikėlis apgaubia beveik visą paruoštą danties vainikinę dalį. Jis gali būti reikalingas, kai
                  likusių audinių nepakanka užklotui išlaikyti. Užklotas yra mažesnės apimties restauracija, todėl
                  tinkamais atvejais leidžia išsaugoti daugiau natūralaus danties.
                </p>
                <p>
                  Užklotai gali būti gaminami iš keramikos, kompozicinių ar kitų odontologijoje naudojamų medžiagų.
                  Keramikiniai dantų užklotai pasižymi lygiu paviršiumi, atsparumu nusidėvėjimui ir gali būti
                  pritaikomi prie natūralaus danties formos bei atspalvio. Porcelianiniai dantų užklotai – taip pat
                  dažnai vartojamas keraminių restauracijų pavadinimas.
                </p>
                <p>
                  Medžiaga parenkama ne vien pagal estetiką. Vertinama danties vieta, restauracijos dydis, sąkandžio
                  apkrova, griežimas dantimis ir likusių audinių būklė.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip atliekamas danties atkūrimas užklotu?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų užklotų gamyba ir pritaikymas atliekami keliais etapais. Vizitų skaičius priklauso nuo danties
                būklės, pasirinktos medžiagos ir restauracijos gamybos būdo.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Danties būklės įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atliekama klinikinė apžiūra ir, jei reikia, radiologinis tyrimas. Įvertinamas pažeidimo gylis,
                    likusių sienelių tvirtumas, danties gyvybingumas ir sąkandis.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gydymo plano sudarymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pacientui paaiškinama, ar konkrečiu atveju tinkamesnis užklotas, įklotas, plomba ar vainikėlis.
                    Aptariama restauracijos medžiaga, gydymo eiga, alternatyvos ir preliminari kaina.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Danties paruošimas ir skenavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pašalinami karieso pažeisti audiniai, nesandarios plombos ir nepatikimos danties dalys. Tuomet
                    atliekamas skaitmeninis skenavimas arba nuimamas atspaudas. Prireikus dantis apsaugomas laikina
                    restauracija.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Užkloto gamyba</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagal surinktus duomenis gaminama individuali restauracija. Jos forma derinama prie natūralios
                    danties anatomijos, gretimų dantų kontaktų ir paciento sąkandžio.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Užkloto pritaikymas ir tvirtinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagamintas užklotas patikrinamas burnoje. Įvertinamas jo prigludimas, kraštai, kontaktai ir
                    sąkandis. Restauracija pritvirtinama odontologinėmis medžiagomis, o paviršius koreguojamas ir
                    poliruojamas.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed mt-6">
                <p>
                  Po procedūros kelias dienas gali būti jaučiamas nestiprus danties jautrumas spaudimui, šalčiui ar
                  karščiui. Jei pojūčiai stiprėja, nepraeina arba užklotas trukdo sukąsti, būtina kreiptis į gydytoją
                  prigludimui ir sąkandžiui patikrinti.
                </p>
                <p>
                  Dantį su užklotu reikia valyti du kartus per dieną, prižiūrėti tarpdančius ir reguliariai tikrinti
                  restauracijos būklę. Jei pacientas griežia dantimis, gali būti rekomenduojama apsauginė kapa.
                </p>
                <p>
                  Dantų užklotų kaina priklauso nuo medžiagos, restauracijos dydžio, danties paruošimo ir papildomo
                  gydymo. Tiksli kaina nustatoma įvertinus konkrečią klinikinę situaciją.
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
                  Renkantis danties atkūrimą užklotu svarbi ne tik restauracijos medžiaga, bet ir tiksli diagnostika,
                  danties paruošimas bei sąkandžio įvertinimas. Bangų odontologijos klinikoje kiekvienas atvejis
                  planuojamas individualiai, siekiant parinkti pažeidimo apimčiai tinkamą ir natūralius audinius
                  tausojantį sprendimą.
                </p>
                <p>
                  Mūsų specialistai įvertina likusių danties sienelių tvirtumą, kramtymo apkrovą ir gydymo
                  alternatyvas. Pacientui paaiškinami dantų įklotų, užklotų, plombų ir vainikėlių skirtumai, procedūros
                  eiga bei restauracijos priežiūra.
                </p>
                <p>
                  Dėmesys skiriamas tiksliam užkloto pritaikymui, sandariems kraštams, kontaktams su gretimais dantimis
                  ir patogiam sąkandžiui. Todėl ieškantiems profesionaliai atliekamo dantų atkūrimo užklotais
                  Klaipėdoje, Bangų odontologijos klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis dantų užklotų konsultacijai Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu turite stipriai pažeistą dantį, kuriam paprastos plombos jau nepakanka, kviečiame registruotis
                  konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta danties būklė ir aptartos
                  galimos atkūrimo alternatyvos.
                </p>
                <p>
                  Registruokitės ir pasirūpinkite savo dantų sveikata laiku bei profesionaliai.
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
