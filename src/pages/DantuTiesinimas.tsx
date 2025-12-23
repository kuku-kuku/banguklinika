import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'

// Animacijų nustatymai
const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

// Ikonos
function SmileIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function EyeOffIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
    </svg>
  )
}

function SparklesIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

export default function DantuTiesinimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dantų tiesinimas",
    "description": "Profesionalus dantų tiesinimas Klaipėdoje su ORDOLINE kapomis. Nematomas, patogus ir efektyvus būdas tiesinti dantis.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klinika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        title="Dantų tiesinimas kapomis (Ordoline) Klaipėdoje - Bangų klinika"
        description="Profesionalus dantų tiesinimas skaidriomis ORDOLINE kapomis. Nematomas, patogus ir efektyvus gydymas Klaipėdoje. Registruokitės konsultacijai."
        keywords="dantu tiesinimas, ordoline kapos, skaidrios kapos, ortodontinis gydymas, klaipeda, tiesūs dantys"
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">
        
        {/* HERO */}
        <motion.header className="mb-10 text-center sm:text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionalus dantų tiesinimas Klaipėdoje ORDOLINE kapomis
          </h1>
          
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Taisyklinga dantų padėtis yra svarbi ne tik estetinei šypsenai, bet ir visai burnos sveikatai. Netaisyklingai išsidėstę dantys gali apsunkinti burnos higieną, didinti karieso ir dantenų ligų riziką, lemti netolygų dantų dilimą ar žandikaulio sąnarių diskomfortą. Dėl šių priežasčių vis daugiau pacientų renkasi dantų tiesinimą kaip ilgalaikę investiciją į savo sveikatą ir savijautą.
            </p>
            <p>
              Bangų odontologijos klinikoje Klaipėdoje atliekamas dantų tiesinimas orientuotas į individualius paciento poreikius ir šiuolaikinius gydymo sprendimus. Prieš pradedant gydymą visuomet atliekama išsami diagnostika, leidžianti įvertinti sąkandį, dantų padėtį ir parinkti tinkamiausią tiesinimo metodą. Tinkamai suplanuotas gydymas padeda ne tik pasiekti estetišką rezultatą, bet ir pagerinti dantų funkciją bei ilgalaikę burnos sveikatą.
            </p>
          </div>

          {/* CTA MYGTUKAS VIRŠUJE */}
          <div className="flex justify-center sm:justify-start">
             <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
              Registruotis vizitui
            </Link>
          </div>
        </motion.header>

        {/* KAS YRA DANTŲ TIESINIMAS */}
        <motion.section className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas yra dantų tiesinimas?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Dantų tiesinimas – tai ortodontinis gydymas, kurio metu palaipsniui koreguojama dantų padėtis ir sąkandis. Šio gydymo tikslas – ne tik ištiesinti dantis, bet ir užtikrinti, kad jie taisyklingai kontaktuotų tarpusavyje, būtų patogūs kramtymui ir lengvai prižiūrimi kasdienėje burnos higienoje.
            </p>
            <p>
              Gydymo metu dantims taikoma kontroliuojama, nuosekli jėga, kuri laikui bėgant leidžia jiems užimti taisyklingą padėtį žandikaulyje. Dantų tiesinimas gali būti taikomas sprendžiant įvairias problemas: tarpus tarp dantų, jų susigrūdimą, netaisyklingą sąkandį ar dantų pasisukimą. Šiuolaikinė ortodontija suteikia galimybę koreguoti šias problemas efektyviai, saugiai ir pacientui patogiu būdu.
            </p>
            <p>
              Svarbu pabrėžti, kad dantų tiesinimas tinka ne tik paaugliams, bet ir suaugusiesiems. Amžius nėra kliūtis – svarbiausia tinkamai įvertinta burnos būklė ir individualiai parinktas gydymo planas, leidžiantis pasiekti prognozuojamą ir stabilų rezultatą.
            </p>
          </div>
        </motion.section>

        {/* ORDOLINE KAPOS (BURBULAI) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kodėl verta rinktis skaidrias ORDOLINE kapas?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
            <p>
              Skaidrios kapos yra modernus dantų tiesinimo sprendimas, vertinamas dėl estetikos, patogumo ir prognozuojamų rezultatų. Bangų odontologijos klinikoje naudojamos ORDOLINE kapos leidžia koreguoti dantų padėtį diskretiškai ir prisitaikant prie paciento kasdienio gyvenimo būdo.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <EyeOffIcon />
               <h3 className="font-bold text-darkblue-700 mb-2">Nematomumas kasdienybėje</h3>
               <p className="text-sm text-slate-600 leading-relaxed">
                 ORDOLINE kapos yra skaidrios, todėl beveik nepastebimos kalbant, šypsantis ar bendraujant. Tai ypač aktualu suaugusiesiems, kurie nori tiesinti dantis be ryškių ortodontinių aparatų ir išlaikyti pasitikėjimą savimi tiek profesinėje, tiek asmeninėje aplinkoje.
               </p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <SmileIcon />
               <h3 className="font-bold text-darkblue-700 mb-2">Patogumas valgant</h3>
               <p className="text-sm text-slate-600 leading-relaxed">
                 Kapos yra lengvai išimamos, todėl valgymo metu jų nereikia nešioti. Tai reiškia, kad nereikia atsisakyti mėgstamo maisto ar keisti mitybos įpročių.
               </p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <SparklesIcon />
               <h3 className="font-bold text-darkblue-700 mb-2">Higieniškas sprendimas</h3>
               <p className="text-sm text-slate-600 leading-relaxed">
                 Dėl galimybės kapas išimti, kasdienė burnos higiena tampa paprastesnė ir efektyvesnė, lyginant su fiksuotais ortodontiniais aparatais. Tai sumažina apnašų kaupimosi riziką.
               </p>
             </div>
          </div>
          
          <div className="mt-6 grid gap-6 md:grid-cols-2">
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <h3 className="font-bold text-darkblue-700 mb-2">Prognozuojami rezultatai</h3>
               <p className="text-sm text-slate-600 leading-relaxed">
                 Prieš pradedant gydymą sudaromas skaitmeninis planas, leidžiantis tiksliai numatyti dantų judėjimą ir galutinį rezultatą. Tai suteikia pacientui aiškumą ir užtikrintumą viso gydymo metu.
               </p>
             </div>
             <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
               <h3 className="font-bold text-darkblue-700 mb-2">Trumpesnė gydymo trukmė</h3>
               <p className="text-sm text-slate-600 leading-relaxed">
                 Daugeliu atvejų dantų tiesinimas kapomis trunka trumpiau nei tradiciniais metodais. Nuoseklus kapų keitimas ir tiksliai suplanuotas gydymo planas leidžia efektyviai pasiekti norimą rezultatą per optimalų laiką.
               </p>
             </div>
          </div>
        </motion.section>

        {/* KAINOS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Dantų tiesinimo kapomis kainos
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
             <p>
               Dantų tiesinimo kapomis kaina priklauso nuo individualios dantų padėties, sąkandžio sudėtingumo ir numatomos gydymo trukmės. Kiekvienam pacientui sudaromas asmeninis gydymo planas, todėl galutinė kaina nustatoma tik po konsultacijos ir diagnostikos.
             </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            <div className="divide-y divide-slate-100">
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Konsultacija dėl dantų tiesinimo</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">nuo 50 €</span>
              </div>
              <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                <span className="text-slate-700">Dantų tiesinimas ORDOLINE kapų sistema</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">1800 – 4000 €</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed text-sm">
            <p>
              Prieš pradedant gydymą atliekama konsultacija dėl dantų tiesinimo. Konsultacijos metu įvertinama dantų ir sąkandžio būklė, aptariami galimi gydymo sprendimai ir pacientui pateikiama išsami informacija apie gydymo eigą bei prognozuojamus rezultatus.
            </p>
            <p>
              Kainos intervalas priklauso nuo reikalingo kapų skaičiaus, gydymo trukmės ir korekcijų sudėtingumo. Į gydymo kainą įeina individualus skaitmeninis planavimas, kapų gamyba, gydymo stebėsena ir kontroliniai vizitai.
            </p>
            <p>
              Skaidri kainodara leidžia pacientams aiškiai suprasti, kokia gydymo apimtis planuojama ir už ką mokama. Konsultacijos metu gydytojas atsako į visus klausimus ir padeda pasirinkti sprendimą, kuris geriausiai atitinka paciento poreikius ir lūkesčius.
            </p>
          </div>
        </motion.section>

        {/* KAIP VYKSTA (STEPS) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kaip vyksta dantų tiesinimas ORDOLINE kapomis?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Dantų tiesinimas ORDOLINE kapomis Bangų odontologijos klinikoje atliekamas pagal aiškią ir pacientui suprantamą eigą. Kiekvienas etapas yra svarbus siekiant tikslaus ir ilgalaikio rezultato.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">1</span>
                Pirmasis etapas – diagnostika ir skaitmeninis planavimas
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Dantų tiesinimas kapomis pradedamas nuo išsamios burnos būklės analizės. Klinikinės apžiūros metu įvertinama dantų padėtis, sąkandis, žandikaulių santykis bei bendroji burnos sveikata. Atliekami dantų atspaudai arba modernus skaitmeninis skenavimas, kuris leidžia itin tiksliai užfiksuoti esamą situaciją. Remiantis surinktais duomenimis sudaromas individualus skaitmeninis gydymo planas, kuriame suplanuojamas kiekvienas dantų judėjimo etapas. Toks planavimas leidžia užtikrinti prognozuojamą, kontroliuojamą ir saugų gydymą.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">2</span>
                Antrasis etapas – virtualus galutinio rezultato matymas
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Vienas didžiausių šio gydymo privalumų – galimybė dar prieš pradedant gydymą pamatyti, kaip keisis dantų padėtis laikui bėgant. Skaitmeninio planavimo metu pacientui pateikiama vizualizacija, kurioje matomas dantų tiesinimo progresas ir numatomas galutinis rezultatas. Tai padeda geriau suprasti gydymo eigą, jo trukmę ir tikslus, o taip pat suteikia papildomo pasitikėjimo priimant sprendimą dėl gydymo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">3</span>
                Trečiasis etapas – kapų gamyba
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Patvirtinus gydymo planą, pagal individualius paciento duomenis pradedama kapų gamyba. Pagaminamas visas nuoseklus kapų rinkinys, kur kiekviena kapa atitinka konkretų dantų judėjimo etapą. Kapos yra preciziškai pritaikytos, lengvos ir patogios nešioti, todėl gydymas vyksta sklandžiai ir be nereikalingo diskomforto.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">4</span>
                Ketvirtasis etapas – kapų keitimas kas ~2 savaites
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Gydymo metu pacientas kapas keičia maždaug kas dvi savaites, laikydamasis odontologo nurodyto grafiko. Kiekviena nauja kapa palaipsniui koreguoja dantų padėtį, darydama nedidelį, bet tikslų spaudimą. Toks nuoseklus keitimas leidžia dantims judėti saugiai, be staigių apkrovų, ir artėti prie suplanuoto galutinio rezultato.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">5</span>
                Penktasis etapas – reguliarios kontrolės
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Viso gydymo metu numatomi reguliarūs kontroliniai vizitai klinikoje. Jų metu stebimas gydymo progresas, vertinama, ar dantys juda pagal planą, ir prireikus atliekami nedideli koregavimai. Reguliari priežiūra užtikrina, kad dantų tiesinimas vyktų sklandžiai, o pasiektas rezultatas būtų tikslus, stabilus ir ilgalaikis.
              </p>
            </div>
          </div>
        </motion.section>

        {/* KAM TINKA (CHECKLIST) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kam tinka dantų tiesinimas kapomis?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Dantų tiesinimas kapomis yra universalus sprendimas, tinkantis daugeliui pacientų, kurie nori koreguoti dantų padėtį estetišku ir patogiu būdu. Šis metodas dažniausiai pasirenkamas tuomet, kai siekiama efektyvaus, bet kasdienio gyvenimo netrikdančio gydymo.
          </p>
          
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Dantų tiesinimas kapomis tinka, jei:</h3>
            <div className="grid sm:grid-cols-1 gap-3">
              {[
                "tarp dantų yra tarpai, kuriuos norima uždaryti",
                "dantys yra susigrūdę ar netaisyklingai išsidėstę",
                "reikalinga lengva ar vidutinio sudėtingumo sąkandžio korekcija",
                "dantys yra pasisukę ar pasvirę",
                "norima pagerinti ne tik šypsenos estetiką, bet ir kramtymo funkciją"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-slate-700 leading-relaxed">
            Šis gydymo būdas ypač populiarus tarp suaugusiųjų ir vyresnių paauglių, kurie vertina diskretiškumą ir lankstumą. Prieš pradedant gydymą visuomet atliekamas individualus įvertinimas, todėl galima tiksliai nustatyti, ar dantų tiesinimas kapomis yra tinkamas konkrečiu atveju.
          </p>
        </motion.section>

        {/* TRUKMĖ IR SKAUSMAS */}
        <motion.section className="mb-12 space-y-8" variants={item}>
          <div>
             <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Kiek laiko trunka dantų tiesinimas kapomis?
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Dantų tiesinimo kapomis trukmė priklauso nuo dantų padėties, sąkandžio sudėtingumo ir individualių paciento tikslų. Kiekvienas gydymo planas sudaromas individualiai, todėl tiksli trukmė nustatoma tik po diagnostikos ir skaitmeninio planavimo.
              </p>
              <p>
                Dažniausiai dantų tiesinimas kapomis trunka nuo kelių mėnesių iki maždaug 12–18 mėnesių. Paprastesniais atvejais rezultatai pasiekiami greičiau, o sudėtingesnėms korekcijoms gali prireikti ilgesnio gydymo laikotarpio.
              </p>
              <p>
                Svarbus veiksnys yra ir paciento įsitraukimas. Kapas rekomenduojama nešioti apie 20–22 valandas per parą, nuimant jas tik valgymo ir burnos higienos metu. Laikantis šio režimo, gydymas vyksta pagal planą, o rezultatai pasiekiami numatytu laiku.
              </p>
            </div>
          </div>

          <div>
             <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Ar dantų tiesinimas kapomis yra skausmingas?
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Daugeliui pacientų aktualu, ar dantų tiesinimas kapomis sukelia skausmą. Šis gydymo metodas laikomas vienu komfortiškiausių ortodontinių sprendimų. Kapos dantis veikia palaipsniui, todėl diskomfortas dažniausiai yra minimalus.
              </p>
              <p>
                Pirmosiomis dienomis pradėjus nešioti naują kapą gali būti juntamas lengvas spaudimas ar tempimo pojūtis. Tai normalus ženklas, rodantis, kad dantys juda pagal planą. Šis pojūtis paprastai praeina per kelias dienas ir netrukdo kasdienėms veikloms.
              </p>
              <p>
                Lyginant su tradiciniais fiksuotais aparatais, kapos neturi metalinių detalių, kurios galėtų dirginti gleivinę ar sukelti žaizdeles. Dėl to dantų tiesinimas kapomis yra dažnai pasirenkamas pacientų, ieškančių švelnesnio ir patogesnio sprendimo.
              </p>
            </div>
          </div>
        </motion.section>

        {/* NEŠIOJIMAS IR REZULTATAI */}
        <motion.section className="mb-12 space-y-8" variants={item}>
          <div>
             <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Ką svarbu žinoti nešiojant skaidrias kapas kasdienybėje?
            </h2>
            <div className="bg-brand-50/30 p-6 rounded-xl border border-brand/10 text-slate-700 leading-relaxed space-y-4">
              <p>
                Norint pasiekti suplanuotą dantų tiesinimo rezultatą, labai svarbu laikytis gydytojo pateiktų rekomendacijų ir kapų nešiojimo režimo. Skaidrios kapos yra sukurtos taip, kad būtų patogios kasdienėje veikloje, tačiau gydymo sėkmė tiesiogiai priklauso nuo paciento įsitraukimo.
              </p>
              <p>
                Kapas rekomenduojama nešioti apie 20–22 valandas per parą, nuimant jas tik valgymo ir burnos higienos metu. Reguliarus ir pakankamas nešiojimo laikas užtikrina, kad dantys judės pagal suplanuotą gydymo planą ir rezultatai bus pasiekti laiku.
              </p>
              <p>
                Kiekvieną kartą išėmus kapas svarbu prieš jas vėl įsidedant išsivalyti dantis, kad po kapomis nesikauptų apnašos. Pačias kapas rekomenduojama reguliariai plauti drungnu vandeniu ir naudoti specialias valymo priemones, vengiant karšto vandens, kuris gali deformuoti jų formą.
              </p>
              <p>
                Taip pat patariama laikyti kapas specialioje dėžutėje, kai jos nenešiojamos, kad būtų išvengta jų pažeidimo ar pametimo. Laikantis šių paprastų kasdienių taisyklių, gydymas vyksta sklandžiai, o burnos higiena išlieka gera viso tiesinimo laikotarpiu.
              </p>
            </div>
          </div>

          <div>
             <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Dantų tiesinimo kapomis rezultatai ir jų išlaikymas
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Dantų tiesinimo kapomis rezultatai dažniausiai yra pastebimi palaipsniui, tačiau labai aiškiai – dantys tampa tiesesni, sąkandis taisyklingesnis, o šypsena estetiškesnė. Kadangi gydymas planuojamas skaitmeniniu būdu, galutinis rezultatas yra prognozuojamas ir atitinkantis iš anksto suderintus tikslus.
              </p>
              <p>
                Pasibaigus aktyviam tiesinimo etapui, itin svarbus yra rezultato stabilizavimas. Tam dažniausiai naudojamos palaikomosios (retencinės) kapos, kurios padeda išlaikyti dantis naujoje padėtyje. Be šio etapo dantys gali turėti tendenciją grįžti į ankstesnę padėtį.
              </p>
              <p>
                Retencinių kapų nešiojimo trukmė ir režimas parenkami individualiai, atsižvelgiant į atlikto gydymo apimtį ir paciento burnos ypatumus. Reguliarūs profilaktiniai vizitai leidžia stebėti situaciją ir užtikrinti, kad pasiektas rezultatas išliktų ilgalaikis.
              </p>
              <p>
                Tinkama kasdienė burnos priežiūra, rekomendacijų laikymasis ir palaikomasis etapas leidžia džiaugtis taisyklinga šypsena daugelį metų po dantų tiesinimo pabaigos.
              </p>
            </div>
          </div>
        </motion.section>

        {/* MITAI (ACCORDION STYLE) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Dažniausi mitai apie dantų tiesinimą kapomis
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Dantų tiesinimas kapomis vis dar kelia nemažai klausimų ir abejonių, ypač pacientams, kurie su šiuo gydymo metodu susiduria pirmą kartą. Daugelis nuogąstavimų kyla iš pasenusių įsitikinimų ar netikslios informacijos, todėl svarbu juos aiškiai išsklaidyti.
          </p>

          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mitas#1: kapos tinka tik nedidelėms estetinėms korekcijoms.</h3>
              <p className="text-slate-600 text-sm">Iš tiesų kapomis galima koreguoti ne tik smulkius dantų nelygumus, bet ir tarpus, susigrūdimą ar tam tikrus sąkandžio pakitimus. Gydymo galimybės visuomet įvertinamos individualiai, remiantis diagnostika ir skaitmeniniu planavimu.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mitas#2: dantų tiesinimas kapomis neveiksmingas.</h3>
              <p className="text-slate-600 text-sm">Kapos veikia palaipsniui, tačiau labai tiksliai. Kiekviena kapa yra sukurta konkrečiam dantų judėjimo etapui, todėl laikantis nešiojimo režimo galima pasiekti aiškiai prognozuojamus ir stabilus rezultatus.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mitas#3: kapas nepatogu nešioti kasdien.</h3>
              <p className="text-slate-600 text-sm">Skaidrios kapos yra lengvos, plonos ir pritaikytos individualiai, todėl dauguma pacientų prie jų pripranta gana greitai. Kadangi kapos yra išimamos, jos netrukdo nei valgant, nei atliekant kasdienę burnos higieną.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mitas#4: kapos nuolat krenta ar pasimeta.</h3>
              <p className="text-slate-600 text-sm">Tinkamai pritaikytos kapos tvirtai laikosi ant dantų. Jei laikomasi rekomendacijų ir kapos laikomos specialioje dėžutėje, kai jos nenešiojamos, jų praradimo ar pažeidimo rizika yra minimali.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mitas#5: dantys po gydymo greitai grįš į pradinę padėtį.</h3>
              <p className="text-slate-600 text-sm">Kaip ir po bet kokio ortodontinio gydymo, labai svarbus yra palaikomasis etapas. Naudojant retencines kapas ir laikantis gydytojo nurodymų, pasiektas rezultatas išlieka stabilus ilgą laiką.</p>
            </div>
          </div>
        </motion.section>

        {/* KODĖL MES */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Renkantis dantų tiesinimo paslaugas svarbu ne tik estetiškas galutinis rezultatas, bet ir visas gydymo procesas – nuo pirmos konsultacijos iki palaikomojo etapo. Bangų odontologijos klinikoje Klaipėdoje dantų tiesinimas atliekamas taikant šiuolaikinius, pacientui patogius ir moksliškai pagrįstus sprendimus, leidžiančius pasiekti prognozuojamą ir ilgalaikį rezultatą.
            </p>
            <p>
              Klinikoje didelis dėmesys skiriamas individualiam planavimui. Prieš pradedant gydymą atliekama išsami diagnostika ir skaitmeninis gydymo planas, leidžiantis pacientui aiškiai suprasti visą procesą ir numatomą galutinį rezultatą. Toks požiūris padeda jaustis užtikrintai ir leidžia priimti informuotą sprendimą.
            </p>
            <p>
              Bangų odontologijos klinikoje dirbantys specialistai skiria laiko paciento klausimams, aiškiai paaiškina kiekvieną gydymo etapą ir užtikrina nuolatinę priežiūrą viso gydymo metu. Pacientai vertina profesionalų bendravimą, komfortą ir pasiektus rezultatus, kuriuos patvirtina jų teigiami atsiliepimai.
            </p>
          </div>
        </motion.section>

        {/* PABAIGOS CTA */}
        <motion.div className="mt-8 mb-12 text-center" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kviečiame registruotis dantų tiesinimo konsultacijai Bangų klinikoje
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Jeigu svarstote apie dantų tiesinimą Klaipėdoje ir norite sužinoti, ar skaidrios kapos tinka būtent Jums, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta Jūsų dantų ir sąkandžio būklė, aptarti galimi gydymo sprendimai ir sudarytas individualus gydymo planas.
            <br/><br/>
            Bangų odontologijos klinikoje siekiame, kad dantų tiesinimas būtų aiškus, patogus ir pritaikytas prie paciento gyvenimo būdo. Čia Jūsų laukia modernios technologijos, dėmesingas požiūris ir nuosekli priežiūra kiekviename gydymo etape. Registruokitės konsultacijai ir ženkite pirmą žingsnį link taisyklingos, pasitikėjimą suteikiančios šypsenos.
          </p>
          <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
            Registruotis vizitui
          </Link>
        </motion.div>

      </motion.div>
    </AnimatedSection>
  )
}