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
  { id: 'kas-yra', label: 'Kas yra mikroprotezavimas?' },
  { id: 'kada-rekomenduojamas', label: 'Kada rekomenduojamas?' },
  { id: 'restauracijos', label: 'Naudojamos restauracijos' },
  { id: 'procesas', label: 'Kaip atliekamas?' },
  { id: 'kodel-rinktis', label: 'Kodėl verta rinktis mus?' }
]

export default function DantuMikroprotezavimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.banguklinika.lt/paslaugos/dantu-mikroprotezavimas/#service",
    "name": "Dantų mikroprotezavimas Klaipėdoje",
    "serviceType": "Dantų mikroprotezavimas",
    "description": "Dantų mikroprotezavimas – įklotai, užklotai ir daliniai vainikėliai Bangų odontologijos klinikoje Klaipėdoje.",
    "url": "https://www.banguklinika.lt/paslaugos/dantu-mikroprotezavimas/",
    "areaServed": { "@type": "City", "name": "Klaipėda" },
    "provider": { "@id": "https://www.banguklinika.lt/#dentist" },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Dantų mikroprotezavimas Klaipėdoje - Bangų klinika"
        description="Dantų mikroprotezavimas Klaipėdoje – įklotai, užklotai ir daliniai vainikėliai Bangų odontologijos klinikoje. Kaina nuo 450€ iki 650€.⏩Registruokitės konsultacijai."
        keywords="dantu mikroprotezavimas, danties iklotas, danties uzklotas, dalinis vainikelis, klaipeda"
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
              Dantų mikroprotezavimas Klaipėdoje
            </h1>

            <div>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Dantų mikroprotezavimas – tai pažeistų danties audinių atkūrimo būdas, kai naudojamos individualiai
                  pagamintos restauracijos. Šis metodas dažniausiai pasirenkamas tuomet, kai įprastos plombos
                  nepakanka patikimam danties atkūrimui, tačiau viso vainikėlio dar nereikia. Mikroprotezavimas
                  leidžia atkurti danties formą, funkciją ir estetiką, kartu išsaugant kuo daugiau tvirtų natūralių
                  audinių.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje dantų mikroprotezavimas planuojamas individualiai,
                  įvertinus pažeidimo apimtį, likusių danties sienelių būklę, sąkandį ir paciento poreikius.
                  Restauracija gaminama pagal skaitmeninį skenavimą arba atspaudą, todėl gali būti tiksliai pritaikoma
                  prie danties anatomijos, gretimų dantų ir kramtymo paviršiaus.
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
                      Dantų mikroprotezavimo kainos
                    </h2>
                    <p className="text-slate-600">
                      Dantų mikroprotezavimo kaina priklauso nuo restauracijos tipo, medžiagos, pažeidimo apimties ir
                      papildomo gydymo poreikio. Tiksli gydymo apimtis ir kaina nustatomos įvertinus danties būklę.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div className="bg-white p-6 sm:p-8 rounded-3xl border-2 shadow-sm hover:shadow-xl transition-all" style={{ borderColor: S }}>
                    <h3 className="text-lg font-extrabold mb-4" style={{ color: P }}>Dantų mikroprotezavimas</h3>
                    <div className="divide-y divide-slate-100">
                      {[
                        ['Įklotas / užklotas / dalinis vainikėlis', '450 – 650 €'],
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
                  Tiksli dantų mikroprotezavimo Klaipėdoje kaina aptariama individualios konsultacijos metu,
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
                <div className="relative aspect-[4/5] bg-sky-50 min-h-[300px]">                  <img
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
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra dantų mikroprotezavimas?</h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Mikroprotezavimas – tai danties atkūrimas individualiai pagaminta restauracija, kuri vėliau
                  pritvirtinama prie išlikusių danties audinių. Skirtingai nei tiesioginio plombavimo metu, galutinė
                  restauracija nėra visa suformuojama burnoje. Ji pagaminama atskirai pagal paruošto danties formą, o
                  vėliau tiksliai pritaikoma.
                </p>
                <p>
                  Šis gydymo būdas dažnai pasirenkamas kaip tarpinis sprendimas tarp didelės plombos ir pilno
                  vainikėlio. Jei pažeidimas nedidelis, gali pakakti plombavimo. Jei danties vainikinė dalis labai
                  stipriai suirusi, gali būti reikalingas visas dantį dengiantis vainikėlis. Mikroprotezavimas
                  taikomas tada, kai defektas per didelis patikimai plombai, tačiau dar galima išsaugoti dalį tvirtų
                  natūralių audinių.
                </p>
                <p>
                  Mikroprotezas padeda atkurti ne tik trūkstamą danties dalį, bet ir taisyklingą jo anatomiją,
                  kontaktus su gretimais dantimis bei kramtymo paviršių. Tinkamai suplanuota restauracija padeda
                  paskirstyti kramtymo apkrovą ir apsaugoti susilpnėjusias danties sieneles.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KADA REKOMENDUOJAMAS */}
          <motion.section id="kada-rekomenduojamas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kada rekomenduojamas dantų mikroprotezavimas?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų mikroprotezavimas gali būti rekomenduojamas, kai danties pažeidimas yra per didelis įprastam
                plombavimui, tačiau dar nėra būtinybės viso danties dengti vainikėliu. Sprendimas priimamas įvertinus
                likusių audinių kiekį, danties vietą, sąkandžio apkrovą ir bendrą burnos būklę.
              </p>

              <div className="space-y-4 mb-6">
                <h3 className="font-semibold text-darkblue-700">Mikroprotezavimas gali būti svarstomas, kai:</h3>

                <div className="grid gap-3">
                  {[
                    'dantis stipriai pažeistas karieso',
                    'likusi didelė, susidėvėjusi ar nesandari plomba',
                    'nulūžusi dalis danties arba kramtomojo paviršiaus',
                    'susilpnėję vienas ar keli danties kauburėliai',
                    'dantis nudilęs dėl griežimo ar kitų priežasčių',
                    'po šaknų kanalų gydymo prarasta didelė vainikinės dalies apimtis',
                    'tiesioginė plomba negalėtų tiksliai atkurti danties anatomijos ir kontaktų'
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
                  Po endodontinio gydymo dantis gali būti netekęs didelės vainikinės dalies ir tapti jautresnis
                  skilimui. Jei likusių audinių pakanka, užklotas ar dalinis vainikėlis gali padengti susilpnėjusius
                  kauburėlius ir padėti tolygiau paskirstyti kramtymo apkrovą.
                </p>
                <p>
                  Mikroprotezavimas nėra universalus sprendimas. Mažesniam defektui gali labiau tikti plomba, o labai
                  stipriai suirusiam dančiui – pilnas vainikėlis. Tinkamiausias atkūrimo būdas parenkamas
                  individualiai.
                </p>
              </div>
            </div>
          </motion.section>

          {/* RESTAURACIJOS */}
          <motion.section id="restauracijos" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kokios restauracijos naudojamos mikroprotezavimui?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų mikroprotezavimui dažniausiai naudojami įklotai, užklotai ir daliniai vainikėliai. Restauracijos
                tipas priklauso nuo pažeidimo vietos, dydžio ir likusių audinių būklės.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dantų įklotai</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Įklotas naudojamas tuomet, kai pažeidimas yra vidinėje kramtomojo paviršiaus dalyje, o pagrindiniai
                    danties kauburėliai ir sienelės išlieka pakankamai tvirti. Jis tiksliai užpildo paruoštą ertmę ir
                    atkuria trūkstamus audinius.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Dantų užklotai</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Užklotas dengia ne tik vidinę danties dalį, bet ir vieną ar kelis susilpnėjusius kauburėlius. Jis
                    gali būti pasirenkamas, kai reikia atkurti didesnę kramtomojo paviršiaus dalį ir sumažinti likusių
                    sienelių skilimo riziką.
                  </p>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-2">Daliniai vainikėliai</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Dalinis vainikėlis dengia didesnę danties dalį, tačiau ne visą jo paviršių. Toks sprendimas
                    taikomas tada, kai dantis stipriai pažeistas, bet dar galima išsaugoti dalį tvirtų natūralių
                    audinių.
                  </p>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed mt-6">
                Mikroprotezai gali būti gaminami iš keramikos, kompozicinių ar kitų odontologijoje naudojamų medžiagų.
                Keramikinis įklotas ar užklotas gali būti derinamas prie natūralios danties spalvos, tačiau medžiaga
                parenkama ne vien pagal estetiką. Vertinama danties vieta, restauracijos dydis, sąkandžio apkrova ir
                likusių audinių būklė.
              </p>
            </div>
          </motion.section>

          {/* PROCESAS */}
          <motion.section id="procesas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kaip atliekamas dantų mikroprotezavimas klinikoje?</h2>

              <p className="text-slate-700 leading-relaxed mb-6">
                Dantų mikroprotezavimas Bangų odontologijos klinikoje atliekamas keliais etapais. Vizitų skaičius
                priklauso nuo danties būklės, restauracijos gamybos būdo ir papildomo gydymo poreikio.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Danties būklės įvertinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Atliekama klinikinė apžiūra ir, jei reikia, radiologinis tyrimas. Įvertinamas pažeidimo dydis,
                    likusių sienelių tvirtumas, danties gyvybingumas, sąkandis ir senų restauracijų būklė.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Gydymo plano sudarymas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Parenkamas restauracijos tipas ir medžiaga. Pacientui paaiškinama, kuo mikroprotezavimas skiriasi
                    nuo plombavimo ar vainikėlio, aptariamos gydymo alternatyvos, eiga ir preliminari kaina.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Danties paruošimas ir skenavimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pašalinami karieso pažeisti audiniai ir netinkamos senos restauracijos. Dantis paruošiamas
                    išsaugant kuo daugiau tvirtų audinių. Tuomet atliekamas skaitmeninis skenavimas arba atspaudas.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Restauracijos gamyba</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagal gautus duomenis gaminamas individualus įklotas, užklotas ar dalinis vainikėlis. Restauracijos
                    forma pritaikoma prie gretimų dantų, natūralios anatomijos ir sąkandžio.
                  </p>
                </div>

                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">05</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Mikroprotezo pritaikymas ir tvirtinimas</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Pagaminta restauracija patikrinama burnoje. Vertinamas jos prigludimas, kraštai, kontaktai ir
                    sąkandis. Tvirtinimo metu darbo laukas apsaugomas nuo seilių ir drėgmės, o mikroprotezas
                    pritvirtinamas odontologinėmis medžiagomis.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-700 leading-relaxed mt-6">
                <p>
                  Po procedūros gali būti juntamas laikinas jautrumas ar neįprastas sąkandžio pojūtis. Jei restauracija
                  trukdo sukąsti arba dantis išlieka skausmingas, reikėtų kreiptis į kliniką.
                </p>
                <p>
                  Mikroprotezą reikia prižiūrėti taip pat kruopščiai kaip natūralius dantis: valyti dantis du kartus
                  per dieną, prižiūrėti tarpdančius ir reguliariai tikrinti restauracijos būklę. Jei pacientas griežia
                  dantimis, gali būti rekomenduojama apsauginė kapa.
                </p>
                <p>
                  Dantų mikroprotezavimo kaina priklauso nuo restauracijos tipo, medžiagos, pažeidimo apimties ir
                  papildomo gydymo poreikio. Tiksli gydymo apimtis ir kaina nustatomos įvertinus danties būklę.
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
                  Renkantis dantų mikroprotezavimo paslaugą svarbu ne tik restauracijos medžiaga ar estetinė išvaizda,
                  bet ir tai, kaip įvertinama danties būklė, planuojama restauracijos apimtis bei paskirstoma kramtymo
                  apkrova. Bangų odontologijos klinikoje mikroprotezavimas atliekamas atsakingai, siekiant išsaugoti
                  kuo daugiau sveikų danties audinių ir atkurti jo funkciją.
                </p>
                <p>
                  Mūsų specialistai kiekvieną atvejį vertina individualiai, atsižvelgdami į pažeidimo dydį, likusių
                  sienelių tvirtumą, sąkandį ir paciento poreikius. Prieš gydymą paaiškinamos galimos restauravimo
                  kryptys, jų skirtumai ir priežiūros rekomendacijos. Dėmesys skiriamas ne tik mikroprotezo formai bei
                  spalvai, bet ir jo kraštų pritaikymui, kontaktui su gretimais dantimis bei patogiam sąkandžiui.
                </p>
                <p>
                  Pacientai vertina profesionalų bendravimą, aiškų gydymo planą ir nuoseklų dėmesį visais gydymo
                  etapais. Todėl ieškantiems profesionalaus dantų mikroprotezavimo Klaipėdoje, Bangų odontologijos
                  klinika yra patikimas pasirinkimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis dantų mikroprotezavimui Bangų klinikoje
              </h2>

              <div className="text-slate-700 max-w-3xl leading-relaxed mb-8 space-y-4">
                <p>
                  Jeigu turite pažeistą dantį, kuriam paprastos plombos jau nepakanka, kviečiame registruotis
                  konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta danties būklė ir aptartos
                  galimos mikroprotezavimo alternatyvos.
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
