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
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function MicroscopeIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
      />
    </svg>
  )
}

export default function EndodontinisGydymas() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Endodontinis gydymas',
    description:
      'Profesionalus endodontinis (šaknų kanalų) gydymas Klaipėdoje. Pirminė endodontinė pagalba: diagnostika, skausmo ir uždegimo mažinimas, danties paruošimas tolimesniam gydymui.',
    provider: {
      '@type': 'Dentist',
      name: 'Bangų klinika'
    }
  }

  return (
    <AnimatedSection>
      <SEO
        title="Endodontinis (šaknų kanalų) gydymas Klaipėdoje - Bangų klinika"
        description="Profesionalus endodontinis (šaknų kanalų) gydymas Klaipėdoje. Pirminė endodontinė pagalba: diagnostika, skausmo mažinimas, infekcijos kontrolė ir danties paruošimas tolimesniam gydymui."
        keywords="endodontinis gydymas, saknu kanalu gydymas, pirminė endodontinė pagalba, dantu skausmas, kanalai, klaipeda"
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">
        {/* HERO */}
        <motion.header className="mb-10 text-center sm:text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionalus endodontinis (šaknų kanalų) gydymas Klaipėdoje
          </h1>

          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Stiprus, pulsuojantis danties skausmas, ilgai nepraeinantis jautrumas karščiui ar šalčiui, patinimas ar
              nemalonus spaudimo pojūtis dažnai signalizuoja apie gilesnius danties pažeidimus. Tokiais atvejais įprasto
              plombavimo nepakanka, nes problema slypi ne danties paviršiuje, o jo viduje. Būtent tuomet prireikia
              endodontinio gydymo – šaknų kanalų gydymo, kurio tikslas yra pašalinti infekciją ir išsaugoti natūralų dantį.
            </p>

            <p className="mb-4">
              Endodontinis gydymas yra svarbi šiuolaikinės odontologijos dalis, leidžianti išvengti danties šalinimo net ir
              sudėtingais atvejais. Laiku atliktas gydymas padeda sustabdyti infekcijos plitimą, sumažinti skausmą ir
              išsaugoti dantį tolimesniam funkcionavimui. Negydomi šaknų kanalų pažeidimai gali sukelti rimtas komplikacijas
              – nuo pūlinių iki žandikaulio kaulo pažeidimų, todėl ankstyvas reagavimas yra itin svarbus.
            </p>

            <p>
              Bangų odontologijos klinikoje Klaipėdoje pacientai, susiduriantys su ūmiu danties skausmu ar įtariamu giliu
              pažeidimu, gali kreiptis dėl pirminės endodontinės pagalbos. Šio etapo tikslas – įvertinti situaciją, sumažinti
              uždegimą ir paruošti dantį tolimesniam specializuotam gydymui. Tokia praktika leidžia pacientui greičiau jausti
              palengvėjimą ir užtikrina sklandų tolimesnį gydymo procesą.
            </p>
          </div>

          {/* CTA MYGTUKAS VIRŠUJE */}
          <div className="flex justify-center sm:justify-start">
            <Link
              to="/kontaktai"
              className="btn-primary rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              Registruotis vizitui
            </Link>
          </div>
        </motion.header>

        {/* KAS YRA ENDODONTIJA */}
        <motion.section className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas yra endodontinis (šaknų kanalų) gydymas?
          </h2>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Endodontinis gydymas – tai odontologinė procedūra, kurios metu gydomi danties šaknų kanalai. Šių kanalų viduje
              yra pulpa – minkštasis audinys, sudarytas iš nervų, kraujagyslių ir jungiamojo audinio. Pulpa atlieka svarbų
              vaidmenį danties vystymosi metu, tačiau suaugusio žmogaus dantyje jos pagrindinė funkcija yra jutiminė.
            </p>

            <p>
              Kai pulpa pažeidžiama dėl gilaus karieso, traumos, įtrūkimo ar bakterinės infekcijos, dantis tampa skausmingas,
              jautrus arba, priešingai, ilgą laiką gali nesukelti jokių simptomų, nors infekcija ir progresuoja. Endodontinio
              gydymo metu pažeisti audiniai iš šaknų kanalų pašalinami, kanalai kruopščiai išvalomi ir dezinfekuojami, siekiant
              pašalinti bakterijas ir sustabdyti uždegimą.
            </p>

            <p>
              Pagrindinis šaknų kanalų gydymo tikslas – išsaugoti natūralų dantį. Net ir stipriai pažeistas dantis, tinkamai
              gydomas, gali būti sėkmingai naudojamas toliau kaip kramtymo funkcijos dalis arba kaip atrama vėlesniam
              protezavimui. Tai leidžia išvengti danties šalinimo ir sudėtingesnių atkūrimo procedūrų ateityje.
            </p>

            <p>
              Svarbu suprasti, kad endodontinis gydymas yra sudėtinga ir itin daug kruopštumo reikalaujanti procedūra, kurios
              sėkmė priklauso nuo tikslios diagnostikos, tinkamo paruošimo ir aiškaus gydymo plano. Dėl šios priežasties dažnai
              reikalingas specializuotas gydymas, atliekamas gydytojų, kurie dirba būtent šioje srityje.
            </p>
          </div>
        </motion.section>

        {/* KADA REIKALINGAS (CHECKLIST) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kada reikalingas endodontinis gydymas?
          </h2>

          <p className="text-slate-700 mb-6 leading-relaxed">
            Endodontinis gydymas reikalingas tuomet, kai danties pažeidimas pasiekia gilesnius audinius ir infekcija apima pulpos
            sritį. Tokiais atvejais paviršinis gydymas ar paprastas plombavimas nebegali pašalinti problemos priežasties, todėl
            negydoma infekcija toliau progresuoja ir gali sukelti rimtesnių komplikacijų.
          </p>

          <p className="text-slate-700 mb-6 leading-relaxed">
            Dažniausiai pacientai į gydytoją kreipiasi dėl stipraus ar pulsuojančio danties skausmo, kuris sustiprėja naktį ar
            kramtant. Taip pat būdingas ilgai nepraeinantis jautrumas karščiui ar šalčiui, spaudimo pojūtis ar skausmas aplink
            dantį. Kai kuriais atvejais atsiranda dantenų patinimas, paraudimas ar net pūlinys šalia pažeisto danties.
          </p>

          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Endodontinis gydymas dažniausiai reikalingas, jei:</h3>

            <div className="grid sm:grid-cols-1 gap-3">
              {[
                'jaučiamas stiprus ar pulsuojantis danties skausmas (ypač naktį ar kramtant)',
                'ilgai nepraeina jautrumas karščiui ar šalčiui',
                'jaučiamas spaudimo pojūtis ar skausmas aplink dantį',
                'atsiranda dantenų patinimas, paraudimas ar pūlinys šalia danties',
                'profilaktikos metu ar rentgeno nuotraukoje nustatomi uždegiminiai pakitimai ties danties šaknimi',
                'po danties traumos simptomai pasireiškia vėliau, nors dantis iš išorės atrodo nepažeistas'
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1">
                    <CheckIcon />
                  </span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Svarbu žinoti, kad ne visais atvejais endodontinio gydymo poreikį lydi stiprus skausmas. Kartais pulpa žūsta
            palaipsniui, o infekcija vystosi be ryškių simptomų. Tokiais atvejais problema dažnai nustatoma profilaktinio
            patikrinimo metu arba atlikus rentgeno tyrimą.
          </p>

          <p className="text-slate-700 leading-relaxed mt-4">
            Pastebėjus bet kurį iš šių simptomų svarbu nedelsti. Kuo anksčiau nustatoma problema, tuo didesnė tikimybė sėkmingai
            išsaugoti natūralų dantį ir išvengti sudėtingesnių gydymo etapų.
          </p>
        </motion.section>

        {/* KOKIA DALIS ATLIEKAMA (kortelė + ikona) */}
        <motion.section className="mb-12" variants={item}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kokia endodontinio gydymo dalis atliekama Bangų odontologijos klinikoje?
              </h2>

              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Bangų odontologijos klinikoje atliekama pirminė endodontinė pagalba, kurios tikslas – stabilizuoti situaciją,
                  sumažinti skausmą ir paruošti dantį tolimesniam specializuotam šaknų kanalų gydymui. Šiuo metu klinikoje nėra
                  gydytojo, kuris specializuotųsi tik pilname endodontiniame gydyme, todėl pacientai, kuriems reikalingas
                  sudėtingas ar pilnas šaknų kanalų gydymas, nukreipiami pas patikimus specialistus kitose gydymo įstaigose.
                </p>

                <p>
                  Pirminės endodontinės pagalbos metu pirmiausia atliekama išsami diagnostika – klinikinė apžiūra ir rentgeno
                  tyrimai, leidžiantys įvertinti pažeidimo gylį ir uždegimo apimtį. Prireikus taikoma vietinė nejautra, kad būtų
                  sumažintas skausmas ir diskomfortas. Dantis atveriamas, pašalinami infekuoti audiniai, sumažinamas bakterijų
                  kiekis ir, esant poreikiui, naudojami vaistiniai preparatai uždegimui kontroliuoti.
                </p>

                <p>
                  Tolimesniam gydymui pacientai nukreipiami pas profesionalų endodontą Klaipėdoje, kuris specializuojasi šaknų
                  kanalų gydyme. Toks bendradarbiavimo modelis leidžia užtikrinti, kad kiekvieną gydymo etapą atliktų būtent tos
                  srities specialistas, o pacientas gautų kokybišką ir saugų gydymą.
                </p>

                <p>
                  Svarbu pabrėžti, kad pirminė endodontinė pagalba nėra laikinas sprendimas „atidėjimui“. Tai kryptingas ir
                  atsakingas gydymo etapas, kuris ženkliai padidina tolimesnio endodontinio gydymo sėkmę ir leidžia pacientui
                  ramiai planuoti kitus gydymo žingsnius kartu su patyrusiais endodontais Klaipėdoje.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* KAINOS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">Endodontinės (pirminės) pagalbos kainos</h2>

          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
            <p>
              Pirminės endodontinės pagalbos kaina priklauso nuo konkrečios klinikinės situacijos, danties būklės ir reikalingų
              paruošiamųjų procedūrų apimties. Kadangi kiekvienas atvejis yra individualus, prieš pradedant gydymą visada atliekama
              konsultacija ir diagnostika, leidžianti tiksliai įvertinti situaciją ir parinkti tinkamiausią sprendimą.
            </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            <div className="divide-y divide-slate-100">
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Pirminė endodontinė pagalba</span>
                  <span className="text-darkblue-700 font-bold">nuo 70 €</span>
                </div>
                <span className="block text-slate-600 text-sm">
                  Dažniausiai taikoma esant ūmiam skausmui ar uždegimui – stabilizavimui ir paruošimui tolimesniam gydymui.
                </span>
              </div>

              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Kanalų vaistai</span>
                  <span className="text-darkblue-700 font-bold">nuo 30 €</span>
                </div>
                <span className="block text-slate-600 text-sm">
                  Vaistiniai preparatai kanalų dezinfekcijai ar uždegimo kontrolei, kai to reikia klinikinėje situacijoje.
                </span>
              </div>

              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Vieno danties šaknies kanalo chemomechaninis paruošimas</span>
                  <span className="text-darkblue-700 font-bold">nuo 35 €</span>
                </div>
                <span className="block text-slate-600 text-sm">Kanalų valymas ir dezinfekcija pirminiame etape.</span>
              </div>

              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Vieno danties šaknies kanalo plombavimas (paruošiamasis)</span>
                  <span className="text-darkblue-700 font-bold">nuo 35 €</span>
                </div>
                <span className="block text-slate-600 text-sm">
                  Laikinas arba paruošiamasis kanalų plombavimas, kai tai reikalinga danties apsaugai.
                </span>
              </div>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed text-sm">
            Svarbu pabrėžti, kad tai yra paruošiamųjų procedūrų kainos. Galutinė pilno endodontinio gydymo kaina nustatoma gydymo
            įstaigoje, kurioje atliekamas visas šaknų kanalų gydymas. Skaidri kainodara leidžia pacientams aiškiai suprasti, už ką
            mokama kiekviename gydymo etape, ir ramiai planuoti tolimesnį gydymą.
          </p>
        </motion.section>

        {/* EIGA (STEPS) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kaip atliekama pirminė endodontinė pagalba Bangų odontologijos klinikoje?
          </h2>

          <p className="text-slate-700 mb-6 leading-relaxed">
            Pirminė endodontinė pagalba Bangų odontologijos klinikoje atliekama siekiant greitai ir saugiai stabilizuoti danties
            būklę bei paruošti jį tolimesniam šaknų kanalų gydymui. Šis procesas yra nuoseklus ir orientuotas į paciento savijautos
            pagerinimą bei infekcijos kontrolę.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">
                  1
                </span>
                Diagnostika
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Pirmiausia atliekama išsami klinikinė apžiūra ir rentgeno tyrimai. Jie leidžia įvertinti danties pažeidimo gylį,
                galimų kanalų skaičių, jų anatomiją ir uždegimo apimtį ties danties šaknimi. Tiksli diagnostika yra būtina, kad būtų
                parinktas tinkamiausias pirminės pagalbos sprendimas ir išvengta papildomų komplikacijų.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">
                  2
                </span>
                Nuskausminimas
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Prieš pradedant procedūrą taikoma vietinė nejautra, todėl pacientas nejaučia skausmo. Nuskausminimas leidžia gydytojui
                dirbti tiksliai ir ramiai, o pacientui – jaustis saugiai.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">
                  3
                </span>
                Danties atvėrimas ir infekuotų audinių pašalinimas
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Nuskausminus dantį, jis atsargiai atveriamas, kad būtų galima pasiekti infekuotus vidinius audinius. Pažeisti pulpos
                audiniai pašalinami, o kanalų vidus apdorojamas taip, kad būtų sumažintas bakterijų kiekis ir sustabdytas uždegiminis
                procesas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">
                  4
                </span>
                Vaistiniai preparatai (jei reikalinga)
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Esant poreikiui, į kanalus gali būti įdedami vaistiniai preparatai, kurie padeda kontroliuoti infekciją ir sumažinti
                uždegimą iki tol, kol pacientas galės tęsti gydymą pas specializuotą gydytoją.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">
                  5
                </span>
                Laikina apsauga ir tolimesnio gydymo planas
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Procedūra užbaigiama laikinu sprendimu, apsaugančiu dantį nuo tolimesnio bakterijų patekimo. Pirminės endodontinės
                pagalbos tikslas – ne užbaigti visą šaknų kanalų gydymą, o sudaryti saugias ir palankias sąlygas tolimesniam, pilnam
                endodontiniam gydymui.
              </p>
            </div>
          </div>
        </motion.section>

        {/* SKAUSMAS IR PASEKMĖS */}
        <motion.section className="mb-12 space-y-8" variants={item}>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Ar pirminė endodontinė pagalba yra skausminga?
            </h2>

            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Vienas dažniausių pacientų klausimų – ar procedūra bus skausminga. Šiuolaikinėje odontologijoje pirminė endodontinė
                pagalba atliekama taikant veiksmingą vietinę nejautrą, todėl procedūros metu skausmas nejaučiamas. Daugeliu atvejų
                pats gydymas yra gerokai komfortiškesnis nei skausmas, kurį sukelia negydomas danties uždegimas.
              </p>

              <p>
                Procedūros metu pacientas gali jausti lengvą spaudimą ar vibraciją, tačiau tai nėra skausmas. Po procedūros, kai
                nuskausminimo poveikis baigiasi, galimas nežymus maudimas ar jautrumas – tai normali ir laikina organizmo reakcija,
                kuri dažniausiai praeina per kelias dienas.
              </p>

              <p>
                Svarbu suprasti, kad pirminės endodontinės pagalbos tikslas yra ne tik paruošti dantį tolimesniam gydymui, bet ir
                sumažinti arba visiškai pašalinti skausmą. Dauguma pacientų jau netrukus po vizito pastebi aiškų palengvėjimą ir
                pagerėjusią savijautą.
              </p>

              <p>
                Laiku suteikta pirminė pagalba leidžia išvengti stipresnio skausmo, ūmių komplikacijų ir suteikia galimybę tolesnį
                gydymą planuoti be streso.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Kas nutinka, jei šaknų kanalų gydymas atidedamas?
            </h2>

            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Šaknų kanalų infekcija savaime neišnyksta. Nors kartais skausmas gali laikinai sumažėti ar visai praeiti, tai
                nereiškia, kad problema išsisprendė. Priešingai – tokiais atvejais dažnai pulpa jau būna žuvusi, o infekcija toliau
                plinta nepastebimai.
              </p>

              <p>
                Negydoma infekcija iš danties šaknų kanalų gali pereiti į aplinkinius audinius ir sukelti pūlinį, dantenų patinimą ar
                skausmingą uždegimą. Ilgainiui uždegimas gali pažeisti žandikaulio kaulą, susiformuoti lėtiniai infekcijos židiniai,
                kurie apsunkina tolimesnį gydymą ir mažina galimybes išsaugoti dantį.
              </p>

              <p>
                Be to, uždelstas gydymas dažnai reiškia sudėtingesnes ir ilgesnes procedūras ateityje. Tai gali apimti ne tik pilną
                endodontinį gydymą, bet ir chirurgines intervencijas ar net danties šalinimą. Tokiais atvejais vėliau prireikia danties
                atkūrimo implantais ar protezais, kas yra žymiai sudėtingesnis ir brangesnis procesas.
              </p>

              <p>
                Pirminė endodontinė pagalba leidžia sustabdyti šį neigiamą procesą ankstyvoje stadijoje. Net jei pilnas šaknų kanalų
                gydymas atliekamas pas kitą specialistą, laiku suteikta pagalba Bangų odontologijos klinikoje padeda apsaugoti nuo
                komplikacijų ir sudaro palankesnes sąlygas sėkmingam tolimesniam gydymui.
              </p>
            </div>
          </div>
        </motion.section>

        {/* KADA NEPADEDA */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kada endodontinis gydymas gali nebepadėti?
          </h2>

          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <p className="text-slate-700 mb-4 leading-relaxed">
              Nors endodontinis gydymas daugeliu atvejų leidžia sėkmingai išsaugoti natūralų dantį, tam tikrose situacijose jis gali
              būti neefektyvus arba neturėti prognozuojamos ilgalaikės sėkmės. Tokiais atvejais sprendimas priimamas įvertinus danties
              būklę, pažeidimo mastą ir galimą naudą pacientui.
            </p>

            <h3 className="font-semibold text-red-900 mb-2">Endodontinis gydymas gali nebepadėti, kai:</h3>

            <ul className="list-disc pl-5 space-y-2 text-red-900/80 mb-4">
              <li>dantis yra stipriai suiręs ar lūžęs žemiau dantenų lygio ir jo neįmanoma patikimai atstatyti</li>
              <li>nustatomi vertikalūs danties šaknies skilimai</li>
              <li>uždegimas pažeidė didelę kaulo dalį aplink danties šaknį ir prognozė yra nepalanki</li>
              <li>ankstesnis šaknų kanalų gydymas buvo atliktas nekokybiškai, o pakartotinis gydymas nebeturi pakankamos sėkmės tikimybės</li>
            </ul>

            <p className="text-slate-700 leading-relaxed">
              Svarbu pabrėžti, kad sprendimas atsisakyti endodontinio gydymo niekada nepriimamas skubotai. Pirmiausia įvertinamos visos
              galimybės išsaugoti dantį, dažnai konsultuojantis su endodontais. Tik tuomet, kai prognozė nepalanki, pacientui pasiūlomi
              alternatyvūs sprendimai – pavyzdžiui, danties šalinimas ir vėlesnis atkūrimas implantais.
            </p>

            <p className="text-slate-700 leading-relaxed mt-2">
              Atviras situacijos įvertinimas ir aiškus gydymo plano paaiškinimas leidžia pacientui priimti informuotą sprendimą ir
              pasirinkti tokį sprendimą, kuris ilgainiui užtikrintų komfortą, funkcionalumą ir burnos sveikatą.
            </p>
          </div>
        </motion.section>

        {/* KODĖL MES */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kodėl verta kreiptis į Bangų odontologijos kliniką dėl pirminės endodontinės pagalbos?
          </h2>

          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Renkantis, kur kreiptis dėl danties skausmo ar įtariamo šaknų kanalų pažeidimo, svarbiausia yra greita reakcija, aiškus
              situacijos įvertinimas ir sąžiningas gydymo plano pateikimas. Bangų odontologijos klinikoje Klaipėdoje pirminė endodontinė
              pagalba teikiama atsakingai, orientuojantis į paciento savijautos pagerinimą ir saugų tolimesnio gydymo planavimą.
            </p>

            <p>
              Klinikoje kiekvienas atvejis vertinamas individualiai – atliekama diagnostika, įvertinama danties būklė ir uždegimo
              apimtis, paaiškinamos galimos gydymo kryptys. Pacientai aiškiai informuojami, kokie veiksmai atliekami klinikoje ir kokiais
              atvejais reikalingas tolimesnis gydymas pas specializuotą gydytoją. Toks skaidrus požiūris padeda išvengti neaiškumų ir
              leidžia priimti informuotus sprendimus.
            </p>

            <p>
              Svarbus Bangų odontologijos klinikos darbo principas – bendradarbiavimas su patikimais specialistais kitose gydymo įstaigose.
              Jei reikalingas pilnas šaknų kanalų gydymas, pacientai nukreipiami pas patyrusius endodontus Klaipėdoje, su kuriais užtikrinamas
              sklandus gydymo tęstinumas. Tai leidžia pacientui gauti kompleksinę pagalbą, kai kiekvieną gydymo etapą atlieka atitinkamos srities
              specialistas.
            </p>

            <p>
              Pacientų pasitikėjimą klinika patvirtina ir jų atsiliepimai, kuriuose dažnai minimas profesionalus bendravimas, aiškus situacijos
              paaiškinimas bei realus palengvėjimas po pirminės pagalbos. Toks požiūris leidžia užtikrinti, kad net ir sudėtingesnėse situacijose
              pacientas jaustųsi saugiai ir užtikrintai.
            </p>
          </div>
        </motion.section>

        {/* PABAIGOS CTA */}
        <motion.div className="mt-8 mb-12 text-center" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kviečiame registruotis pirminiam endodontiniam gydymui Bangų klinikoje
          </h2>

          <p className="text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Jeigu jaučiate stiprų danties skausmą, pastebėjote patinimą, ilgalaikį jautrumą ar gavote rekomendaciją dėl šaknų kanalų
            gydymo, kviečiame nedelsti ir registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta Jūsų danties
            būklė, suteikta pirminė endodontinė pagalba ir aiškiai paaiškinti tolimesni gydymo žingsniai.
            <br />
            <br />
            Laiku suteikta pagalba leidžia sumažinti skausmą, sustabdyti infekcijos progresavimą ir sudaryti palankias sąlygas tolimesniam
            gydymui pas endodontologą ar kitus patikimus specialistus. Net jei pilnas šaknų kanalų gydymas atliekamas kitoje gydymo įstaigoje,
            pirmasis žingsnis yra itin svarbus viso gydymo sėkmei.
            <br />
            <br />
            Bangų odontologijos klinikoje siekiame, kad kiekvienas pacientas gautų profesionalią ir sąžiningą pagalbą. Registruokitės konsultacijai
            ir pasirūpinkite savo dantų sveikata laiku – tinkamai suteikta pirminė endodontinė pagalba padeda išsaugoti dantį ir išvengti
            sudėtingesnių procedūrų ateityje.
          </p>

          <Link
            to="/kontaktai"
            className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1"
          >
            Registruotis vizitui
          </Link>
        </motion.div>
      </motion.div>
    </AnimatedSection>
  )
}
