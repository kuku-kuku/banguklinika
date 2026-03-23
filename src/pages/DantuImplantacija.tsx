import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import AnimatedSection from "../components/AnimatedSection"
import SEO from "../components/SEO"
import { TableOfContents } from "../components/TableOfContents"
import ReviewsCarousel from "../components/ReviewsCarousel"
import { useRef } from "react"

const tocSections = [
  { id: "implantai-kainos", label: "Dantų implantacijos kainos" },
  { id: "kas-yra-implantacija", label: "Kas yra implantacija?" },
  { id: "kaip-vyksta-implantacija", label: "Kaip vyksta implantacija?" },
  { id: "is-ko-sudaryta", label: "Iš ko sudarytas sprendimas?" },
  { id: "kuo-skiriasi", label: "Skirtumai nuo kitų metodų" },
  { id: "ar-visiems-tinka", label: "Ar visiems tinka?" },
  { id: "kodel-svarbu-greiciau", label: "Kodėl svarbu atstatyti greičiau?" },
  { id: "kam-reikalinga", label: "Kam reikalinga implantacija?" },
  { id: "all-on-4", label: "ALL-ON-4 metodas" },
  { id: "all-on-4-privalumai", label: "ALL-ON-4 privalumai" },
  { id: "ar-saugu", label: "Ar saugu? Ar skausminga?" },
  { id: "kiek-tarnauja", label: "Kiek tarnauja implantai?" },
  { id: "po-implantacijos", label: "Po implantacijos" },
  { id: "kodel-mes", label: "Kodėl Bangų klinika?" },
]

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", staggerChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const processSteps = [
  {
    step: "1",
    title: "Implantas įsriegiamas į kaulą",
    text: "Po išsamios diagnostikos implantas įsriegiamas į žandikaulį ir tampa būsimo danties atrama.",
    image: "/implantacija1.png",
  },
  {
    step: "2",
    title: "Gijimo ir prigijimo etapas",
    text: "Vyksta osteointegracija – implantas suauga su kaulu ir tampa stabilia ilgalaike atrama.",
    image: "/implantacija2.png",
  },
  {
    step: "3",
    title: "Tvirtinama jungtis",
    text: "Prie implanto pritvirtinama jungtis, kuri sujungia implantą su būsima karūnėle ar protezu.",
    image: "/implantacija3.png",
  },
  {
    step: "4",
    title: "Tvirtinama karūnėlė",
    text: "Užbaigiamas estetiškas ir funkcionalus danties atkūrimas, maksimaliai artimas natūraliam dančiui.",
    image: "/implantacija4.png",
  },
]

const treatmentOptions = [
  {
    title: "Netekus vieno danties",
    text: "Vienas implantas leidžia atkurti trūkstamą dantį nepažeidžiant gretimų sveikų dantų ir išlaikyti natūralią burnos struktūrą.",
    image: "/netekus1.png",
  },
  {
    title: "Netekus kelių dantų",
    text: "Keli implantai gali būti atrama tiltui ar atskiriems vainikėliams, užtikrinant stabilų ir estetišką rezultatą.",
    image: "/netekus2.png",
  },
  {
    title: "Netekus visų dantų",
    text: "Ant implantų gali būti tvirtinami fiksuoti viso žandikaulio sprendimai, įskaitant ALL-ON-4 metodą.",
    image: "/netekus3.png",
  },
]

export default function DantuImplantacija() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Dantų implantacija",
    description:
      "Dantų implantacija Klaipėdoje – pažangiausias prarastų dantų atkūrimo sprendimas. Individualus planavimas, ilgaamžiai implantai, ALL-ON-4 metodas.",
    provider: {
      "@type": "Dentist",
      name: "Bangų klinika",
    },
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title=" Dantų implantacija Klaipėdoje - Dantų implantai nuo 500€ | Bangų klinika"
        description="Dantų implantacija Klaipėdoje – pažangiausias prarastų dantų atkūrimo sprendimas. Ilgaamžiai Straumann® ir Neodent® implantai, ALL-ON-4 metodas, skaidri kainodara."
        keywords="dantu implantacija, implantai klaipeda, straumann, neodent, all-on-4, dantu atkurimas, bangų klinika"
        structuredData={structuredData}
        lang="lt"
        alternates={[
          { lang: "lt", url: "https://banguklinika.lt/paslaugos/dantu-implantacija" },
          { lang: "lv", url: "https://banguklinika.lt/lv/pakalpojumi/zobu-implantacija" },
          { lang: "x-default", url: "https://banguklinika.lt/paslaugos/dantu-implantacija" },
        ]}
      />

      <motion.div
        ref={pageRef}
        className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TableOfContents sections={tocSections} cta={{ label: "Registruotis vizitui", to: "/kontaktai" }} />

        <div className="min-w-0 flex-1">

          {/* HERO */}
          <motion.header
            className="mb-12 rounded-[28px] border border-brand/10 bg-white overflow-hidden shadow-soft"
            variants={item}
          >
            <div className="grid lg:grid-cols-[5fr_7fr] gap-0 items-stretch">
              <div className="p-6 sm:p-8 lg:p-10">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-darkblue-700 mb-4">
                  Dantų implantacija
                </h1>
                <h2 className="text-base sm:text-lg font-semibold text-darkblue-600 mb-5 leading-snug">
                  Dantų implantacija Klaipėdoje – pažangiausias prarastų dantų atkūrimo sprendimas
                </h2>
                <p className="text-base text-slate-600 leading-relaxed mb-6">
                  Pažangus ir ilgalaikis sprendimas prarastų dantų atkūrimui – nuo vieno danties iki viso žandikaulio atstatymo.
                </p>
                <div className="space-y-3 text-slate-700 mb-8">
                  {[
                    "Individualus gydymo planas pagal jūsų situaciją",
                    "Ilgaamžiai ir estetiški implantų sprendimai",
                    "Galimybė atkurti vieną, kelis ar visus dantis",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="mt-1"><CheckIcon /></span>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link
                    to="/kontaktai"
                    className="btn-primary btn-glow rounded-full px-7 py-3 font-semibold text-base inline-block shadow-lg hover:shadow-xl transition"
                  >
                    Registruotis vizitui
                  </Link>
                  <a
                    href="#implantai-kainos"
                    className="rounded-full px-7 py-3 font-semibold text-base inline-block border border-brand/20 text-darkblue-700 hover:bg-brand-50 transition"
                  >
                    Žiūrėti kainas
                  </a>
                </div>
              </div>

              <div className="relative min-h-[320px] lg:min-h-full bg-brand-50/40">
                <img
                  src="/implantacija.webp"
                  alt="Dantų implantacija Klaipėdoje"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white via-white/20 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/30 lg:to-transparent" />
              </div>
            </div>
          </motion.header>

          {/* INTRO */}
          <motion.section className="mb-12 space-y-4 text-slate-700 leading-relaxed" variants={item}>
            <p>
              Prarasti dantys – tai ne tik estetinė problema. Jie daro tiesioginę įtaką kramtymo funkcijai, kalbai,
              sąkandžiui, veido proporcijoms ir bendrai gyvenimo kokybei. Ilgainiui netekus vieno ar kelių dantų, keičiasi
              visa burnos sistema: gretimi dantys pradeda slinkti, didėja apkrova likusiems dantims, nyksta žandikaulio
              kaulas, o veido bruožai gali tapti labiau įkritę. Dėl šių priežasčių šiuolaikinėje odontologijoje vis daugiau
              dėmesio skiriama ne tik laikiniems sprendimams, bet ilgalaikiam, patikimam ir fiziologiškai teisingam dantų
              atkūrimui.
            </p>
            <p>
              Būtent todėl dantų implantacija šiandien laikoma pažangiausiu ir efektyviausiu būdu atkurti prarastus
              dantis. Tai sprendimas, kuris leidžia atkurti ne tik matomą danties dalį, bet ir jo šaknį, užtikrinant
              natūralią funkciją, stabilumą ir estetiką. Skirtingai nei išimami protezai ar tiltai, implantai tampa tvirta
              atrama dirbtiniams dantims ir padeda išsaugoti žandikaulio kaulą bei natūralią veido formą.
            </p>
            <p>
              Bangų odontologijos klinikoje Klaipėdoje implantacija atliekama naudojant tik aukščiausios kokybės, pasaulyje
              pripažintus sprendimus. Pacientams siūlomi ilgaamžiai dantų implantai, pagaminti pagal griežčiausius
              medicininius standartus ir pritaikyti ilgalaikiam naudojimui. Klinikoje dirbantys patyrę implantologai
              kiekvieną atvejį vertina individualiai, parinkdami tinkamiausią gydymo metodą pagal paciento burnos būklę,
              kaulo kiekį ir lūkesčius.
            </p>
          </motion.section>

          {/* KAINOS */}
          <motion.section
            id="implantai-kainos"
            className="mb-12 rounded-2xl border border-brand bg-white shadow-soft overflow-hidden scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="bg-brand-50/50 p-4 border-b border-brand/10 font-bold text-darkblue-700">
              Naudojami dantų implantai ir jų kainos
            </div>

            <div className="divide-y divide-slate-100">
              <div className="flex justify-between items-center px-4 py-2 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Straumann® implantas</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">650 €</span>
              </div>
              <div className="px-4 pb-4 -mt-2 text-slate-600 text-sm leading-relaxed">
                Tai vienas lyderiaujančių implantų gamintojų pasaulyje, garsėjantis itin aukštu prigijimo rodikliu,
                ilgaamžiškumu ir patikimumu. Šie implantai dažnai pasirenkami sudėtingesniais atvejais ar pacientams,
                ieškantiems aukščiausios klasės sprendimo.
              </div>

              <div className="flex justify-between items-center px-4 py-2 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Neodent® implantas</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">500 €</span>
              </div>
              <div className="px-4 pb-4 -mt-2 text-slate-600 text-sm leading-relaxed">
                Aukštos kokybės implantai, pasižymintys patikima konstrukcija ir geru kainos bei kokybės santykiu. Neodent
                implantai yra plačiai naudojami šiuolaikinėje odontologijoje ir dažnai pasirenkami pacientų, ieškančių
                patikimo, ilgaamžio sprendimo už racionalią kainą. Šie implantai užtikrina stabilų prigijimą ir tinka
                įvairioms klinikinėms situacijoms – nuo pavienių dantų atkūrimo iki sudėtingesnių implantacijos atvejų.
              </div>
            </div>

            <div className="bg-brand-50/50 p-4 border-y border-brand/10 font-bold text-darkblue-700 mt-2">
              Papildomos procedūros
            </div>
            <div className="divide-y divide-slate-100">
              <div className="flex justify-between items-center px-4 py-2 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Sinuso pakėlimo operacija</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">500–700 €</span>
              </div>
              <div className="px-4 pb-4 -mt-2 text-slate-600 text-sm leading-relaxed">
                Ši procedūra atliekama tuomet, kai viršutiniame žandikaulyje nepakanka kaulo implanto stabilumui. Ji leidžia
                sudaryti tinkamas sąlygas implantacijai ir ženkliai padidina ilgalaikės sėkmės tikimybę.
              </div>
            </div>

          </motion.section>

          <div className="space-y-4 mb-12">
            <div className="bg-brand-50 rounded-2xl p-6 border border-brand border-slate-100 shadow-sm space-y-4 text-slate-700 leading-relaxed">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700">Nuo ko priklauso galutinė implantacijos kaina?</h2>
              <p>
                Galutinė dantų implantacijos kaina nėra vienoda visiems pacientams, nes ji priklauso nuo kelių individualių
                veiksnių. Kainai įtakos turi reikalingų implantų skaičius, pasirinktas implanto tipas bei žandikaulio kaulo
                būklė. Tam tikrais atvejais gali prireikti papildomų procedūrų, kurios sudaro sąlygas saugiai ir stabiliai
                implantacijai. Taip pat svarbus ir taikomas gydymo metodas – ar pasirenkama klasikinė implantacija, ar
                modernesnis sprendimas, pavyzdžiui, ALL-ON-4 metodas.
              </p>
              <p>
                Dėl šios priežasties prieš pradedant gydymą visuomet atliekama išsami konsultacija ir diagnostika. Ji leidžia
                tiksliai įvertinti individualią situaciją, suplanuoti optimalų gydymo sprendimą ir pateikti aiškų, pagrįstą
                implantacijos bei galutinės kainos planą.
              </p>
            </div>
            <div className="bg-brand-50 rounded-2xl p-6 border border-brand shadow-sm space-y-4 text-slate-700 leading-relaxed">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700">Investicija į ilgalaikį sprendimą</h2>
              <p>
                Nors dantų implantacija yra didesnė investicija nei laikini sprendimai, ilgalaikėje perspektyvoje ji dažnai
                tampa ekonomiškai naudingesnė. Implantai padeda išsaugoti žandikaulio kaulą, užtikrina stabilų kramtymą ir
                nereikalauja dažnų keitimų ar korekcijų, kaip kai kurios alternatyvos. Tai investicija ne tik į šypseną, bet
                ir į gyvenimo kokybę, komfortą bei pasitikėjimą savimi.
              </p>
            </div>
          </div>

          {/* REVIEWS */}
          <motion.div className="mb-12 no-x-scroll pan-y" variants={item}>
            <ReviewsCarousel />
          </motion.div>

          {/* KAS YRA */}
          <motion.section
            id="kas-yra-implantacija"
            className="mb-12 bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Kas yra dantų implantacija?
            </h2>
            <div className="space-y-4 text-slate-700 leading-relaxed">
              <p>
                Dantų implantacija – tai modernus odontologinis gydymo metodas, kurio metu atkuriamas prarastas dantis ar
                dantys, imituojant natūralią danties struktūrą nuo pat šaknies. Skirtingai nei tradiciniai sprendimai, kurie
                atkuria tik matomą danties dalį, implantacija leidžia atkurti visą dantį – tiek jo atraminę dalį
                žandikaulyje, tiek viršutinę, estetinę dalį.
              </p>
              <p>
                Implantacijos pagrindas – danties implantas, kuris atlieka natūralios danties šaknies funkciją. Jis
                įsriegiamas į žandikaulio kaulą ir tampa stabilia atrama būsimam dirbtiniam dančiui. Ant implanto vėliau
                tvirtinama karūnėlė, tiltas ar protezas, atkuriantis kramtymo funkciją ir natūralią dantų estetiką.
              </p>
              <p>
                Vienas svarbiausių dantų implantacijos privalumų yra tai, kad implantas sąveikauja su kaulu. Po įsriegimo
                vyksta vadinamasis osteointegracijos procesas – implantas palaipsniui suauga su žandikaulio kaulu ir tampa jo
                dalimi. Dėl šios priežasties implantas yra stabilus, patikimas ir gali tarnauti daugelį metų ar net visą
                gyvenimą, jei tinkamai prižiūrimas.
              </p>
            </div>
          </motion.section>

          {/* KAIP VYKSTA */}
          <motion.section
            id="kaip-vyksta-implantacija"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
              Kaip vyksta dantų implantacija?
            </h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="bg-brand-50 rounded-2xl border border-brand border-slate-100 shadow-sm overflow-hidden"
                >
                  <div className="relative">
                    <img src={step.image} alt={step.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/95 text-darkblue-700 font-bold flex items-center justify-center shadow">
                      {step.step}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-darkblue-700 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-700 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* IŠ KO SUDARYTA */}
          <motion.section
            id="is-ko-sudaryta"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
              Iš ko sudarytas dantų implantacijos sprendimas?
            </h2>
            <p className="text-slate-700 mb-6 leading-relaxed">
              Dantų implantacija nėra vien tik implanto įsriegimas. Tai kompleksinis gydymas, sudarytas iš kelių tarpusavyje
              susijusių elementų:
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                "Implantas – dirbtinė danties šaknis, įsriegta į kaulą",
                "Abutmentas (jungtis) – tarpinė dalis, jungianti implantą su protezu",
                "Karūnėlė arba protezas – matoma danties dalis, atkurianti estetiką ir funkciją",
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-brand-50 border border-brand border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
            <p className="text-slate-700 leading-relaxed mt-6">
              Šių dalių visuma leidžia sukurti sprendimą, kuris vizualiai ir funkciškai kuo labiau primena natūralų dantį.
            </p>
          </motion.section>

          {/* KUO SKIRIASI */}
          <motion.section
            id="kuo-skiriasi"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kuo implantacija skiriasi nuo kitų dantų atkūrimo metodų?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Lyginant su dantų tiltais ar išimamais protezais, implantacija turi esminių pranašumų. Protezuojant
                  tilteliu, dažnai tenka šlifuoti sveikus gretimus dantis, kurie tampa atrama dirbtiniam dančiui. Implantacijos
                  atveju gretimi dantys neliečiami, todėl išsaugomas jų vientisumas.
                </p>
                <p>
                  Išimami protezai dažnai sukelia diskomfortą, judėjimą, spaudimą dantenoms ir ne visada užtikrina pakankamą
                  kramtymo stabilumą. Implantais paremti sprendimai yra fiksuoti, nejuda ir leidžia jaustis užtikrintai valgant,
                  kalbant ar šypsantis.
                </p>
              </div>
            </div>
          </motion.section>

          {/* AR VISIEMS TINKA */}
          <motion.section
            id="ar-visiems-tinka"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="space-y-6">
              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                  Ar implantacija – visiems tinkamas sprendimas?
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Dantų implantacija gali būti taikoma daugeliui pacientų, tačiau prieš gydymą visuomet atliekamas išsamus
                    įvertinimas. Svarbiausi veiksniai – bendroji burnos būklė, žandikaulio kaulo kiekis ir paciento sveikatos
                    būklė. Net ir tais atvejais, kai kaulo trūksta, šiuolaikinė odontologija siūlo sprendimus, leidžiančius
                    pasiruošti implantacijai.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Implantacija gali būti taikoma:
                </h3>

                <div className="grid sm:grid-cols-2 gap-3 ">
                  {[
                    "netekus vieno danties",
                    "netekus kelių dantų",
                    "netekus visų dantų viename ar abiejuose žandikauliuose",
                    "pacientams, nepatenkintiems išimamais protezais",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-brand shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* KODĖL SVARBU GREIČIAU */}
          <motion.section
            id="kodel-svarbu-greiciau"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8 mb-8">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                Kodėl prarastą dantį svarbu atstatyti kuo greičiau?
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Prarasto danties atkūrimas neturėtų būti atidedamas ilgam laikui. Nors iš pradžių gali atrodyti, kad vieno
                  danties netekimas nesukelia didelių nepatogumų, ilgainiui burnoje prasideda sudėtingi ir dažnai nepastebimi
                  pokyčiai, kurie gali turėti įtakos tiek burnos sveikatai, tiek bendrai savijautai.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Gretimų dantų slinkimas ir sąkandžio pokyčiai</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Netekus danties, atsiradusi tuščia vieta burnoje niekada nelieka „neutrali". Gretimi dantys palaipsniui
                  pradeda slinkti į susidariusį tarpą, o priešpriešiniai dantys gali išilgėti. Dėl šių pokyčių keičiasi
                  sąkandis, atsiranda netolygios kramtymo apkrovos, didėja kitų dantų dilimo ar lūžių rizika. Laikui bėgant
                  tai gali sukelti žandikaulio sąnario diskomfortą, galvos ar kaklo skausmus.
                </p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Žandikaulio kaulo nykimas</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Natūralaus danties šaknis stimuliuoja žandikaulio kaulą kramtymo metu. Netekus danties, ši stimuliacija
                  išnyksta, todėl kaulas toje vietoje pradeda nykti. Kaulo rezorbcija vyksta palaipsniui, tačiau ji yra
                  neišvengiama, jei dantis neatstatomas. Kuo ilgiau laukiama, tuo labiau sumažėja kaulo tūris, o tai gali
                  apsunkinti ar net apriboti galimybes ateityje atlikti implantaciją be papildomų procedūrų.
                </p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Kramtymo funkcijos ir virškinimo problemos</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Trūkstant dantų, kramtymo funkcija tampa neefektyvi. Maistas nėra tinkamai susmulkinamas, todėl didesnė
                  apkrova tenka virškinimo sistemai. Ilgainiui tai gali sukelti ne tik diskomfortą valgant, bet ir virškinimo
                  sutrikimus. Be to, žmonės dažnai pradeda vengti kietesnio maisto, o tai daro įtaką mitybos kokybei.
                </p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Burnos higienos ir dantenų problemos</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Tarpai tarp dantų tampa vieta, kurioje lengviau kaupiasi maisto likučiai ir bakterijos. Tai apsunkina
                  kasdienę burnos higieną ir didina dantenų uždegimo, karieso ar nemalonaus burnos kvapo riziką. Net ir
                  kruopščiai prižiūrint dantis, neužpildyta danties vieta gali tapti nuolatiniu problemų židiniu.
                </p>
              </div>
            </div>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand">
                <h3 className="font-bold text-darkblue-700 mb-2">Veido estetikos ir pasitikėjimo savimi pokyčiai</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Ilgainiui dėl kaulo nykimo ir sąkandžio pakitimų gali keistis veido kontūrai – atsirasti įkritę skruostai,
                  gilesnės raukšlės, veidas gali atrodyti senesnis. Be to, dantų netekimas dažnai turi ir psichologinį
                  poveikį: žmonės pradeda vengti šypsotis, jaustis nejaukiai bendraudami ar fotografuodamiesi.
                </p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand">
                <h3 className="font-bold text-darkblue-700 mb-2">Ankstyvas atkūrimas – mažiau sudėtingas gydymas</h3>
                <p className="text-slate-700 leading-relaxed text-sm">
                  Kuo greičiau atkuriamas prarastas dantis, tuo paprastesnis ir prognozuojamesnis tampa gydymas. Laiku
                  atlikta implantacija leidžia išvengti papildomų procedūrų, tokių kaip kaulo priauginimas, ir sutrumpina
                  visą gydymo procesą. Tai ne tik palengvina gydymą, bet ir padeda pasiekti geresnį ilgalaikį rezultatą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAM REIKALINGA */}
          <motion.section
            id="kam-reikalinga"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="space-y-6">
              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                  Kam reikalinga dantų implantacija?
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Dantų implantacija yra vienas universaliausių ir plačiausiai pritaikomų sprendimų šiuolaikinėje odontologijoje.
                    Ji gali būti taikoma labai skirtingose situacijose – nuo vieno prarasto danties atkūrimo iki sudėtingų atvejų,
                    kai netekta visų dantų viename ar abiejuose žandikauliuose. Tinkamumas implantacijai visada vertinamas
                    individualiai, tačiau indikacijų spektras yra labai platus.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Kada reikalinga dantų implantacija?
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Implantacija rekomenduojama tada, kai:
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {[
                    "netenkama vieno ar kelių nuolatinių dantų",
                    "dantis buvo pašalintas dėl karieso, periodonto ligų ar traumos",
                    "dantys stipriai pažeisti ir nebetinkami atstatyti plombomis ar vainikėliais",
                    "seniai netekti dantys sukėlė sąkandžio ar kramtymo problemas",
                    "išimami protezai kelia diskomfortą ar nestabilumą",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-brand shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed">
                  Svarbu pabrėžti, kad implantacija gali būti planuojama tiek iškart po danties netekimo, tiek praėjus ilgesniam
                  laikui. Tačiau ankstyvas sprendimas dažnai leidžia išvengti papildomų procedūrų ir sutrumpina visą gydymo
                  procesą.
                </p>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Dėl ko pacientai renkasi implantaciją?
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Pacientai implantaciją renkasi dėl jos funkcinių, estetinių ir ilgalaikių privalumų. Pagrindinės priežastys:
                </p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Natūralus pojūtis – implantais atkurti dantys funkciškai ir vizualiai labiausiai primena natūralius.",
                    "Stabilumas – implantai yra fiksuoti, nejuda ir netrukdo kasdienėje veikloje.",
                    "Kaulo išsaugojimas – implantai padeda sustabdyti žandikaulio kaulo nykimą.",
                    "Gretimų dantų apsauga – nereikia šlifuoti sveikų dantų, kaip tiltų atveju.",
                    "Ilgaamžiškumas – tinkamai prižiūrimi implantai gali tarnauti dešimtmečius.",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-brand shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* ALL-ON-4 */}
          <motion.section
            id="all-on-4"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            {/* Poster image block */}
            <div className="rounded-[28px] border border-brand bg-brand-50 overflow-hidden shadow-soft mb-8">
              <div className="grid lg:grid-cols-2 gap-0 items-stretch">
                <div className="p-6 sm:p-8 lg:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand mb-4">
                    Pažangus metodas
                  </p>
                  <h2 className="text-2xl sm:text-3xl font-bold text-darkblue-700 mb-5">
                    ALL-ON-4 implantacija – visi dantys per vieną dieną
                  </h2>
                  <div className="space-y-4 text-slate-700 leading-relaxed">
                    <p>
                      ALL-ON-4 implantacija yra vienas pažangiausių šiuolaikinės odontologijos sprendimų pacientams, netekusiems
                      visų ar beveik visų dantų viename žandikaulyje. Šis metodas leidžia atkurti visą dantų lanką per vieną
                      dieną, suteikiant pacientui fiksuotus, stabilius ir estetiškus dantis be ilgų laukimo laikotarpių.
                    </p>
                    <p>
                      Tai sprendimas, skirtas tiems, kurie nebenori taikstytis su išimamais protezais, nuolatiniu diskomfortu
                      ar ilgu gydymo procesu. ALL-ON-4 metodas keičia gyvenimo kokybę iš esmės — nuo pirmos dienos pacientas
                      gali šypsotis, kalbėti ir valgyti su fiksuotais dantimis.
                    </p>
                  </div>
                  <div className="mt-6">
                    <Link
                      to="/ypatingi-pasiulymai/pilnas-zandikaulio-atstatymas"
                      className="btn-primary rounded-full px-7 py-3 font-semibold text-base inline-block"
                    >
                      Sužinoti daugiau apie ALL-ON-4
                    </Link>
                  </div>
                </div>
                <div className="relative min-h-[320px] lg:min-h-full">
                  <img
                    src="/poster1.webp"
                    alt="ALL-ON-4 implantacija"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Detailed ALL-ON-4 content */}
            <div className="space-y-6 text-slate-700 leading-relaxed">
              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Kas yra ALL-ON-4 metodas?</h3>
                <p>
                  ALL-ON-4 – tai implantacijos technika, kai visas vieno žandikaulio dantų lankas atkuriamas naudojant
                  keturis implantus. Du implantai sriegiami vertikaliai priekinėje žandikaulio dalyje, o kiti du – pasviru
                  kampu užpakalinėje srityje. Toks išdėstymas leidžia maksimaliai išnaudoti esamą kaulą ir užtikrinti tvirtą
                  atramą visam dantų lankui.
                </p>
                <p className="mt-4">
                  Ant šių keturių implantų tą pačią dieną tvirtinamas laikinas, bet fiksuotas protezas, kuris atrodo kaip
                  natūralūs dantys ir leidžia pacientui grįžti prie įprasto gyvenimo ritmo.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-darkblue-700">Vienas žandikaulis per vieną dieną – ką tai reiškia pacientui?</h3>
                <p className="mt-4">Praktiškai ALL-ON-4 reiškia:</p>
                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    "tik per vieną dieną atliekamas implantų įsriegimas",
                    "tą pačią dieną pritvirtinami laikini fiksuoti dantys",
                    "nereikia nešioti išimamų protezų gijimo laikotarpiu",
                    "pacientas iš klinikos išeina su dantimis",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-brand-50 border border-brand border-slate-100 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-darkblue-700">Kam ALL-ON-4 implantacija yra tinkamiausia?</h3>
                <p className="mt-4">ALL-ON-4 metodas dažniausiai rekomenduojamas:</p>
                <div className="grid sm:grid-cols-2 gap-3 mt-4">
                  {[
                    "pacientams, netekusiems visų dantų viename ar abiejuose žandikauliuose",
                    "tiems, kurių likę dantys yra stipriai pažeisti ir nebetinkami gydyti",
                    "žmonėms, kurie nepatenkinti išimamais protezais",
                    "pacientams, kuriems nustatytas žandikaulio kaulo sumažėjimas",
                    "tiems, kurie nori greito ir fiksuoto sprendimo, o ne ilgo gydymo",
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-brand-50 border border-brand border-slate-100 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Kodėl ALL-ON-4 dažnai leidžia išvengti kaulo priauginimo?</h3>
                <p>
                  Tradicinėje implantacijoje dažnai prireikia papildomų procedūrų, jei žandikaulio kaulo kiekis yra
                  nepakankamas. ALL-ON-4 metodas išnaudoja tas žandikaulio sritis, kur kaulo paprastai išlieka daugiau, ir
                  leidžia implantus įsriegti kampu, užtikrinant stabilumą net esant kaulo trūkumui.
                </p>
                <p className="mt-4">
                  Tai reiškia: trumpesnį gydymo laiką, mažiau chirurginių intervencijų, mažesnę komplikacijų riziką bei
                  greitesnį grįžimą prie įprasto gyvenimo.
                </p>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">Laikini ir galutiniai dantys – kaip vyksta procesas?</h3>
                <p>
                  Pirmąją dieną pacientui pritvirtinami laikini, bet fiksuoti dantys, kurie yra estetiški, stabilūs ir
                  funkcionalūs. Jie leidžia komfortiškai gyventi gijimo laikotarpiu, kol implantai pilnai suauga su kaulu.
                </p>
                <p className="mt-4">
                  Po gijimo etapo laikini dantys pakeičiami galutiniais protezais, kurie gaminami individualiai, atsižvelgiant
                  į veido bruožus, šypsenos liniją, sąkandį ir paciento estetikos lūkesčius.
                </p>
              </div>
            </div>
          </motion.section>

          {/* ALL-ON-4 PRIVALUMAI */}
          <motion.section
            id="all-on-4-privalumai"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="space-y-6">
              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                  ALL-ON-4 privalumai, lyginant su kitais dantų atkūrimo sprendimais
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Renkantis dantų atkūrimo metodą, pacientams dažnai kyla klausimas, kuo ALL-ON-4 skiriasi nuo kitų galimų
                    sprendimų ir kodėl šis metodas laikomas vienu pažangiausių. Norint priimti pagrįstą sprendimą, svarbu
                    suprasti pagrindinius skirtumus tarp ALL-ON-4, tradicinės implantacijos ir išimamų protezų.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  ALL-ON-4 ir išimami protezai
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Išimami protezai dažnai pasirenkami kaip laikinas ar pigesnis sprendimas, tačiau jie turi nemažai trūkumų.
                    Tokie protezai gali judėti, spausti dantenas, trukdyti kalbai ar valgymui. Be to, jie nesustabdo žandikaulio
                    kaulo nykimo, todėl laikui bėgant situacija gali tik blogėti.
                  </p>
                  <p>
                    ALL-ON-4 implantacija, priešingai, suteikia fiksuotą sprendimą, kuris nejuda ir yra tvirtai pritvirtintas prie
                    implantų. Pacientas gali jaustis užtikrintai valgydamas, kalbėdamas ar šypsodamasis, be baimės, kad dantys
                    pasislinks ar iškris. Be to, implantai stimuliuoja žandikaulio kaulą, padėdami išsaugoti jo struktūrą.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  ALL-ON-4 ir klasikinė implantacija su daug implantų
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Tradicinė viso žandikaulio implantacija dažnai reikalauja didelio implantų skaičiaus, papildomų chirurginių
                    procedūrų ir ilgesnio gydymo laiko. Tokiais atvejais gali būti reikalingas kaulo priauginimas, sinusų pakėlimas
                    ir ilgas gijimo laikotarpis, kol galima tvirtinti galutinius dantis.
                  </p>
                  <p>
                    ALL-ON-4 metodas leidžia pasiekti stabilų rezultatą naudojant vos keturis implantus, išvengiant sudėtingų
                    papildomų procedūrų daugelyje atvejų. Tai reiškia trumpesnį gydymo laiką, mažesnį chirurginį krūvį ir
                    greitesnį grįžimą prie įprasto gyvenimo ritmo.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Laikas – vienas didžiausių ALL-ON-4 privalumų
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Vienas iš esminių skirtumų tarp ALL-ON-4 ir kitų metodų yra gydymo trukmė. Klasikinės implantacijos atveju
                    pacientas gali laukti kelis mėnesius ar net ilgiau, kol bus galima džiaugtis galutiniais dantimis.
                  </p>
                  <p>
                    ALL-ON-4 leidžia per vieną dieną atkurti visą dantų lanką, suteikiant laikinus, bet fiksuotus dantis tą pačią
                    dieną. Tai ypač svarbu pacientams, kurie nenori ar negali ilgą laiką likti be dantų ar naudoti išimamus
                    protezus.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Ilgalaikė vertė
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Nors pradinė ALL-ON-4 investicija gali atrodyti didesnė, ilgalaikėje perspektyvoje tai dažnai tampa ekonomiškai
                    naudingesniu sprendimu. Mažesnis implantų skaičius, trumpesnis gydymo laikas ir retesnės korekcijos leidžia
                    išvengti papildomų išlaidų ateityje.
                  </p>
                  <p>
                    ALL-ON-4 implantacija sujungia stabilumą, estetiką, laiką ir komfortą į vieną sprendimą, kuris daugeliui
                    pacientų tampa optimaliausiu pasirinkimu.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* AR SAUGU */}
          <motion.section
            id="ar-saugu"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="space-y-6">
              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                  Ar dantų implantacija yra saugi? O gal skausminga?
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Dantų implantacija dažnai kelia nemažai klausimų ir nerimo, ypač pacientams, kurie su chirurginėmis
                    procedūromis susiduria pirmą kartą. Vieni dažniausių nuogąstavimų – ar procedūra bus skausminga ir ar
                    implantacija yra saugi ilgalaikėje perspektyvoje. Šiuolaikinė odontologija leidžia į šiuos klausimus
                    atsakyti užtikrintai.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Implantacijos saugumas
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Dantų implantacija yra viena labiausiai ištirtų ir patikimų procedūrų šiuolaikinėje odontologijoje.
                    Pasaulyje ji atliekama jau kelis dešimtmečius, o naudojami implantai gaminami laikantis griežtų medicininių
                    standartų. Klinikoje naudojami implantai yra biologiškai suderinami su žmogaus organizmu, todėl organizmas
                    juos priima kaip natūralią dalį.
                  </p>
                  <p>Procedūros saugumą užtikrina:</p>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      "išsami diagnostika prieš gydymą",
                      "individualus gydymo planavimas",
                      "sterilios darbo sąlygos",
                      "patyrusių specialistų darbas",
                      "šiuolaikinės chirurginės technologijos",
                    ].map((text, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-brand shadow-sm">
                        <span className="mt-1"><CheckIcon /></span>
                        <span className="text-slate-700">{text}</span>
                      </div>
                    ))}
                  </div>

                  <p>
                    Tinkamai suplanuota ir atlikta implantacija pasižymi labai aukštu sėkmės rodikliu, kuris daugeliu atvejų
                    viršija 95 %.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Ar implantacija yra skausminga?
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Implantų įsriegimas atliekamas taikant vietinę nejautrą, todėl procedūros metu pacientas nejaučia skausmo.
                    Dauguma pacientų procedūrą apibūdina kaip trumpą ir gerokai mažiau nemalonią, nei jie tikėjosi iš anksto.
                  </p>
                  <p>
                    Procedūros metu gali būti juntamas lengvas spaudimas, vibracija ar judesio pojūtis – tačiau skausmo tikrai
                    nejaučiama. Jei pacientas jaučia didesnį nerimą, gydytojas visuomet parenka tinkamiausią nuskausminimo
                    sprendimą.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Pojūčiai po procedūros
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Pasibaigus nuskausminimo poveikiui, gali pasireikšti nedidelis diskomfortas, patinimas ar tempimo pojūtis –
                    tai normali organizmo reakcija po chirurginės intervencijos. Šie simptomai dažniausiai būna laikini ir
                    sumažėja per kelias dienas.
                  </p>
                  <p>
                    Po implantacijos pacientams pateikiamos aiškios rekomendacijos, kaip prižiūrėti burną, ko vengti pirmosiomis
                    dienomis ir kaip sumažinti patinimą bei diskomfortą. Laikantis šių nurodymų gijimo procesas vyksta sklandžiai
                    ir be komplikacijų.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Rizikos ir kaip jos valdomos
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Kaip ir bet kuri medicininė procedūra, implantacija turi tam tikrų rizikų, tačiau jos yra retos ir dažniausiai
                  susijusios su nepakankama burnos higiena, rūkymu ar bendromis sveikatos būklėmis. Būtent todėl prieš gydymą
                  atliekamas išsamus įvertinimas, leidžiantis sumažinti galimas rizikas iki minimumo.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KIEK TARNAUJA */}
          <motion.section
            id="kiek-tarnauja"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div className="space-y-6">
              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                  Kiek laiko tarnauja dantų implantai?
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Vienas dažniausių klausimų, kurį užduoda pacientai svarstydami apie implantaciją, yra susijęs su
                    ilgaamžiškumu – kiek laiko tarnaus dantų implantai ir ar tai tikrai ilgalaikis sprendimas. Šiuolaikinė
                    odontologija leidžia drąsiai teigti, kad tinkamai suplanuoti ir profesionaliai įsriegti implantai gali
                    tarnauti dešimtmečius ar net visą gyvenimą.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Ilgaamžiškumo pagrindas – implantas ir kaulas
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Dantų implantų ilgaamžiškumą lemia osteointegracija – procesas, kurio metu implantas suauga su žandikaulio
                  kaulu. Kai implantas pilnai integruojasi, jis tampa stabilia ir tvirta atrama, galinčia atlaikyti kasdienes
                  kramtymo apkrovas. Šis procesas yra vienas svarbiausių veiksnių, lemiančių ilgalaikę sėkmę.
                </p>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Kas turi įtakos implantų tarnavimo laikui?
                </h3>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Nors pats implantas yra labai patvarus, jo tarnavimo trukmę veikia keletas svarbių veiksnių:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                  <li>Burnos higiena: kasdienė priežiūra ir profesionali higiena padeda išvengti uždegiminių procesų aplink implantą.</li>
                  <li>Reguliarūs profilaktiniai vizitai: periodinės patikros leidžia laiku pastebėti pokyčius ir užkirsti kelią galimoms komplikacijoms.</li>
                  <li>Bendroji sveikata: tam tikros ligos ar žalingi įpročiai gali turėti įtakos gijimui ir ilgalaikei implantų būklei.</li>
                  <li>Gydytojo patirtis ir planavimas: tikslus implantų išdėstymas ir tinkamas gydymo planas yra esminiai stabilumo veiksniai.</li>
                </ul>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Karūnėlės ir protezai – ar juos reikia keisti?
                </h3>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Svarbu atskirti patį implantą nuo ant jo tvirtinamos karūnėlės ar protezo. Pats implantas dažniausiai tarnauja
                    labai ilgai, o ant jo tvirtinami protezai laikui bėgant gali būti atnaujinami dėl natūralaus nusidėvėjimo ar
                    estetinių pokyčių.
                  </p>
                  <p>
                    Tai leidžia ilgalaikėje perspektyvoje išlaikyti stabilų implantą ir prireikus atnaujinti tik viršutinę,
                    matomą dantų dalį.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-brand bg-brand-50 p-6 sm:p-8">
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Implantai kaip ilgalaikė investicija
                </h3>
                <p className="text-slate-700 leading-relaxed">
                  Nors implantacija gali atrodyti kaip didesnė pradinė investicija, vertinant ilgalaikį rezultatą ji dažnai
                  tampa ekonomiškai naudingesniu sprendimu nei alternatyvos, reikalaujančios dažnesnio atnaujinimo ar korekcijų.
                  Ilgaamžiai, stabilūs ir funkcionalūs implantai leidžia pacientams džiaugtis pilnaverte šypsena, komfortu ir
                  pasitikėjimu daugelį metų.
                </p>
              </div>
            </div>
          </motion.section>

          {/* PO IMPLANTACIJOS */}
          <motion.section
            id="po-implantacijos"
            className="mb-12 space-y-8 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Ką svarbu žinoti po dantų implantacijos?
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Sėkminga dantų implantacija nesibaigia implanto įsriegimu. Labai svarbus etapas yra laikotarpis po procedūros,
                kurio metu vyksta gijimas ir implantas suauga su žandikaulio kaulu. Tinkama priežiūra ir gydytojo rekomendacijų
                laikymasis padeda užtikrinti sklandų gijimą ir ilgalaikį implantų stabilumą.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Pirmosios dienos po implantacijos</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Pirmosiomis dienomis po procedūros gali pasireikšti nedidelis patinimas, tempimo pojūtis ar jautrumas
                  implantacijos srityje. Tai normali organizmo reakcija į chirurginę intervenciją. Dažniausiai šie simptomai
                  palaipsniui mažėja per kelias dienas.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed mt-3">
                  Po implantacijos rekomenduojama: vengti intensyvaus fizinio krūvio, pirmąją parą laikytis minkštesnio maisto,
                  nevartoti labai karšto maisto ar gėrimų bei nerūkyti ir nevartoti alkoholio.
                </p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Burnos higiena gijimo laikotarpiu</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Tinkama burnos higiena yra viena svarbiausių sąlygų sėkmingam implantų prigijimui. Nors implantacijos vieta
                  gali būti jautri, burnos priežiūros visiškai nutraukti negalima.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed mt-3">
                  Gijimo laikotarpiu svarbu švelniai valyti dantis minkštu šepetėliu, naudoti gydytojo rekomenduotas burnos
                  priežiūros priemones ir laikytis individualių higienos rekomendacijų.
                </p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Mityba po implantacijos</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Pirmosiomis dienomis rekomenduojama rinktis minkštą, lengvai kramtomą maistą. Vėliau, gijimui progresuojant,
                  galima palaipsniui grįžti prie įprastos mitybos, tačiau svarbu vengti pernelyg kieto ar lipnaus maisto
                  implantacijos srityje.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed mt-3">
                  Tinkama mityba padeda ne tik išvengti mechaninio dirginimo, bet ir užtikrina organizmui reikalingas medžiagas
                  gijimo procesui.
                </p>
              </div>
              <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
                <h3 className="font-bold text-darkblue-700 mb-2">Kontroliniai vizitai – būtini ilgalaikiam rezultatui</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Po implantacijos suplanuojami kontroliniai vizitai, kurių metu gydytojas stebi gijimo eigą, implantų
                  stabilumą ir aplinkinių audinių būklę. Šie vizitai leidžia laiku pastebėti bet kokius pakitimus ir užtikrinti,
                  kad gijimas vyksta sklandžiai.
                </p>
                <p className="text-slate-700 text-sm leading-relaxed mt-3">
                  Kontrolė yra ypač svarbi osteointegracijos laikotarpiu, kai implantas suauga su kaulu.
                </p>
              </div>
            </div>
            <div className="bg-brand-50 p-6 rounded-2xl border border-brand border-slate-100 shadow-sm">
              <h3 className="text-lg font-semibold text-darkblue-700 mb-2">Ilgalaikė priežiūra</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Net ir sėkmingai prigijus implantams, būtina rūpintis jų priežiūra ilgalaikėje perspektyvoje. Reguliari burnos
                higiena, profesionalios higienos procedūros ir profilaktiniai vizitai leidžia išlaikyti implantų stabilumą ir
                estetiką daugelį metų.
              </p>
            </div>
          </motion.section>

          {/* KODĖL MES */}
          <motion.section
            id="kodel-mes"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
              Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
            </h2>
            <div className="bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand">
              <p className="text-slate-700 leading-relaxed mb-6">
                Renkantis, kur atlikti dantų atkūrimą implantais, svarbu ne tik procedūros kaina ar greitis, bet ir tai, kas stovės
                už galutinio rezultato. Bangų odontologijos klinikoje Klaipėdoje dantų implantacija atliekama remiantis šiuolaikiniais
                gydymo standartais, tikslia diagnostika ir individualiu požiūriu į kiekvieną pacientą.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Patyrę implantologai",
                    text: "Klinikoje dirba specialistai, kurie atlieka tiek pavienių dantų implantaciją, tiek sudėtingus viso žandikaulio atkūrimo atvejus.",
                  },
                  {
                    title: "Tikslus planavimas",
                    text: "Gydymo planas sudaromas įvertinus burnos būklę, kaulo kiekį, paciento lūkesčius, gyvenimo būdą ir siekiamą ilgalaikį rezultatą.",
                  },
                  {
                    title: "Patikimi implantų sprendimai",
                    text: "Naudojami tik pasaulyje pripažinti implantai, parenkami atsakingai – pagal klinikinę situaciją, kaulo būklę ir numatomą apkrovą.",
                  },
                  {
                    title: "Skaidrus bendravimas",
                    text: "Pacientai vertina aiškų paaiškinimą, skaidrią kainodarą ir profesionalų, ramų požiūrį viso gydymo metu.",
                  },
                ].map((c, i) => (
                  <div key={i} className="bg-brand-50 p-5 rounded-xl border border-brand border-slate-100 shadow-sm">
                    <div className="flex items-start gap-3">
                      <span className="mt-1"><CheckIcon /></span>
                      <div>
                        <p className="font-semibold text-darkblue-700">{c.title}</p>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">{c.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12" variants={item}>
            <div className="bg-white rounded-[28px] border border-brand shadow-soft overflow-hidden">
              <div className="grid lg:grid-cols-[5fr_4fr] gap-0 items-stretch">
                {/* Left: content */}
                <div className="p-6 sm:p-8 lg:p-10">
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-darkblue-700 mb-4">
                    Kviečiame registruotis dantų implantacijos konsultacijai Bangų klinikoje
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-4">
                    Jeigu svarstote apie dantų atkūrimą implantais ir norite sužinoti, koks sprendimas būtų tinkamiausias Jūsų
                    situacijoje, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu patyrę implantologai
                    įvertins burnos būklę, atsakys į rūpimus klausimus ir padės suprasti visą gydymo eigą.
                  </p>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Bangų odontologijos klinikoje siekiame, kad implantacija būtų aiškus, saugus ir pacientui suprantamas procesas,
                    vedantis prie ilgalaikio ir stabilaus rezultato. Registruokitės konsultacijai ir ženkite tvirtą žingsnį link
                    pilnavertės šypsenos.
                  </p>

                  <div className="bg-brand-50/40 rounded-xl p-5 border border-brand/10 mb-8">
                    <p className="font-semibold text-darkblue-700 mb-3">Konsultacijos metu:</p>
                    <ul className="space-y-2 text-slate-700">
                      {[
                        "atliekamas išsamus klinikinis įvertinimas",
                        "aptariami galimi gydymo metodai",
                        "paaiškinami procedūros etapai ir terminai",
                        "sudaromas individualus gydymo planas",
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

                {/* Right: Donatas Bitinas photo */}
                <div className="relative min-h-[320px] lg:min-h-full bg-brand-50/40">
                  <img
                    src="/team/donatas.jpg"
                    alt="Donatas Bitinas – implantologas Bangų klinikoje"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,white_0%,transparent_30%)] lg:bg-[linear-gradient(to_right,white_0%,transparent_20%)]" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </AnimatedSection>
  )
}