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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
    </svg>
  )
}

export default function EndodontinisGydymas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Endodontinis gydymas",
    "description": "Profesionalus šaknų kanalų gydymas Klaipėdoje. Infekcijos šalinimas, danties išsaugojimas, skubus skausmo gydymas.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klinika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        title="Endodontinis Gydymas Klaipėdoje | Kanalų Gydymas | Bangų klinika"
        description="Profesionalus šaknų kanalų gydymas. Gydome dantų skausmą, uždegimą ir infekcijas. Išsaugokite savo dantis. Registruokitės vizitui."
        keywords="endodontinis gydymas, saknu kanalu gydymas, dantu skausmas, dantu kanalai, klaipeda, endodontas"
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">
        
        {/* HERO */}
        <motion.header className="mb-10 text-center sm:text-left" variants={item}>
          {/* H1 PAKEISTAS ČIA */}
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionalus šaknų kanalų (endodontinis) gydymas Klaipėdoje
          </h1>
          
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p className="mb-4">
              Stiprus, pulsuojantis danties skausmas, jautrumas karščiui ar šalčiui, patinimas ar nemalonus spaudimo pojūtis dažnai signalizuoja apie gilesnius danties pažeidimus. Tokiais atvejais paviršinio gydymo nepakanka, o vienintelis būdas išsaugoti dantį tampa endodontinis gydymas – šaknų kanalų gydymas.
            </p>
            <p>
              Bangų odontologijos klinikoje atliekamas endodontinis gydymas orientuotas į tikslų infekcijos pašalinimą ir natūralaus danties išsaugojimą. Klaipėdoje dirbantys endodontai taiko šiuolaikinius gydymo metodus, leidžiančius procedūrą atlikti saugiai, prognozuojamai ir komfortiškai pacientui. Kiekvienu atveju siekiama ne tik pašalinti skausmo priežastį, bet ir užtikrinti ilgalaikį danties funkcionalumą.
            </p>
          </div>

          {/* CTA MYGTUKAS VIRŠUJE */}
          <div className="flex justify-center sm:justify-start">
             <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
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
              Endodontinis gydymas – tai odontologinė procedūra, kurios metu gydomi danties šaknų kanalai. Šių kanalų viduje yra minkštasis audinys – pulpa, sudaryta iš nervų, kraujagyslių ir jungiamojo audinio. Kai pulpa pažeidžiama dėl gilaus karieso, traumos ar infekcijos, ji gali sukelti stiprų skausmą ir uždegimą.
            </p>
            <p>
              Procedūros metu uždegimo ar infekcijos paveikti audiniai yra pašalinami, šaknų kanalai kruopščiai išvalomi, dezinfekuojami ir hermetiškai užpildomi. Taip sustabdomas infekcijos plitimas ir sudaromos sąlygos išsaugoti dantį. Tinkamai atliktas endodontinis gydymas leidžia dantį toliau naudoti kaip atramą kramtymui ar vėlesniam protezavimui.
            </p>
            <p>
              Bangų odontologijos klinikoje Klaipėdoje šias procedūras atlieka patyręs endodontologas, dirbantis kruopščiai ir atsakingai, o moderni diagnostika leidžia tiksliai įvertinti danties būklę dar prieš pradedant gydymą. Tai svarbus žingsnis siekiant užtikrinti gydymo sėkmę ir ilgalaikį rezultatą.
            </p>
          </div>
        </motion.section>

        {/* KADA REIKALINGAS (CHECKLIST) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kada reikalingas endodontinis gydymas?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Endodontinis gydymas reikalingas tuomet, kai pažeidimas pasiekia gilesnius danties audinius ir infekcija paveikia pulpos sritį. Tokiais atvejais įprastas plombavimas nebegali pašalinti problemos priežasties, o negydoma infekcija gali progresuoti ir sukelti rimtesnių komplikacijų.
          </p>
          
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Šaknų kanalų gydymas dažniausiai rekomenduojamas, jei:</h3>
            <div className="grid sm:grid-cols-1 gap-3">
              {[
                "jaučiamas stiprus, pulsuojantis ar ilgai trunkantis danties skausmas",
                "dantis tampa itin jautrus karščiui ar šalčiui, o jautrumas nepraeina",
                "atsiranda dantenų patinimas ar skausmas aplink dantį",
                "nustatomas gilus kariesas, pasiekęs nervą",
                "dantis buvo traumuotas, net jei skausmas pasireiškė vėliau",
                "rentgeno nuotraukoje matomi uždegiminiai pakitimai ties danties šaknimi"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-slate-700 leading-relaxed">
            Svarbu žinoti, kad kartais infekcija gali vystytis ir be ryškaus skausmo. Tokiais atvejais endodontinis gydymas atliekamas siekiant užkirsti kelią tolimesniam uždegimo plitimui ir išsaugoti dantį. Laiku kreipiantis, endodontas gali padėti išvengti danties netekimo ir sudėtingesnių chirurginių procedūrų.
          </p>
        </motion.section>

        {/* KAINOS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Endodontinio gydymo kainos
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
             <p>
               Endodontinio gydymo kaina priklauso nuo danties būklės, infekcijos sudėtingumo ir reikalingų gydymo etapų. Kiekvienu atveju gydymas planuojamas individualiai, todėl galutinė kaina nustatoma tik įvertinus klinikinę situaciją konsultacijos metu.
             </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            <div className="divide-y divide-slate-100">
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Pirminė endodontinė pagalba</span>
                  <span className="text-darkblue-700 font-bold">nuo 70 €</span>
                </div>
                <span className="block text-slate-600 text-sm">Dažniausiai reikalinga esant ūmiam skausmui ar uždegimui.</span>
              </div>
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Kanalų vaistai</span>
                  <span className="text-darkblue-700 font-bold">nuo 30 €</span>
                </div>
                <span className="block text-slate-600 text-sm">Naudojami vaistiniai preparatai kanalų dezinfekcijai ar uždegimo kontrolei.</span>
              </div>
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Vieno danties šaknies kanalo chemomechaninis paruošimas</span>
                  <span className="text-darkblue-700 font-bold">nuo 35 €</span>
                </div>
                <span className="block text-slate-600 text-sm">Kanalas kruopščiai išvalomas ir dezinfekuojamas.</span>
              </div>
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Vieno danties šaknies kanalo plombavimas</span>
                  <span className="text-darkblue-700 font-bold">nuo 35 €</span>
                </div>
                <span className="block text-slate-600 text-sm">Būtinas siekiant hermetiškai užpildyti kanalą.</span>
              </div>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed text-sm">
            Tiksli endodontinio gydymo kaina aptariama individualios konsultacijos metu, atsižvelgiant į danties kanalų skaičių, jų anatomiją ir gydymo apimtį. Skaidri kainodara leidžia pacientams aiškiai suprasti gydymo procesą ir priimti informuotą sprendimą dėl tolimesnio gydymo.
          </p>
        </motion.section>

        {/* EIGA (STEPS) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kaip atliekamas šaknų kanalų gydymas?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Endodontinis gydymas Bangų odontologijos klinikoje atliekamas pagal aiškią ir nuoseklią eigą, kad procedūra būtų saugi, prognozuojama ir kuo komfortiškesnė pacientui.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">1</span>
                Pirmasis etapas – diagnostika ir pasiruošimas
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Endodontinis gydymas pradedamas nuo išsamios klinikinės apžiūros. Gydytojas įvertina danties būklę, aplinkinių audinių reakciją ir galimus infekcijos požymius. Rentgeno tyrimai leidžia tiksliai nustatyti šaknų kanalų skaičių, jų formą bei gylį, taip pat įvertinti uždegimo apimtį ties danties šaknimi. Remiantis šia informacija sudaromas individualus gydymo planas, leidžiantis numatyti procedūros eigą ir užtikrinti kuo tikslesnį rezultatą.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">2</span>
                Antrasis etapas – nuskausminimas ir kanalų atvėrimas
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Prieš pradedant gydymą taikoma vietinė nejautra, kuri patikimai nuskausmina gydomą sritį. Dėl to procedūros metu pacientas nepatiria skausmo, o jaučia tik lengvą spaudimą. Nuskausminus dantį, jis atsargiai atveriamas, kad būtų galima pasiekti šaknų kanalus ir pradėti jų gydymą. Šis etapas atliekamas itin kruopščiai, siekiant išsaugoti kuo daugiau sveikų danties audinių.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">3</span>
                Trečiasis etapas – kanalų valymas ir dezinfekcija
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Atvėrus kanalus, iš jų pašalinami pažeisti pulpos audiniai. Kanalai mechaniškai išvalomi ir dezinfekuojami specialiais tirpalais, kurie naikina bakterijas ir uždegimo sukėlėjus. Šis etapas yra vienas svarbiausių, nes būtent nuo kruopštaus kanalų išvalymo priklauso gydymo sėkmė ir infekcijos nepasikartojimas ateityje.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">4</span>
                Ketvirtasis etapas – kanalų užpildymas
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Kruopščiai išvalyti ir dezinfekuoti kanalai hermetiškai užpildomi specialiomis biologiškai suderinamomis medžiagomis. Tai apsaugo kanalus nuo pakartotinio bakterijų patekimo ir užtikrina ilgalaikį gydymo rezultatą. Kanalų sandarumas yra būtinas, siekiant sustabdyti infekcijos plitimą ir išsaugoti dantį.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2 flex items-center">
                <span className="bg-brand/10 text-brand w-8 h-8 flex items-center justify-center rounded-full mr-3 text-sm">5</span>
                Penktasis etapas – danties atstatymas
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Užbaigus endodontinį gydymą, dantis turi būti tinkamai atstatytas, kad galėtų pilnai atlikti savo funkciją. Priklausomai nuo danties būklės, jis atstatomas plombuojant arba, esant didesniam pažeidimui, protezuojamas vainikėliu. Tinkamas atstatymas užtikrina danties tvirtumą, apsaugo jį nuo lūžių ir leidžia išlaikyti ilgalaikį funkcionalumą.
              </p>
            </div>
          </div>
        </motion.section>

        {/* SKAUSMAS IR PASEKMĖS */}
        <motion.section className="mb-12 space-y-8" variants={item}>
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Ar endodontinis gydymas yra skausmingas?
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Vienas dažniausių pacientų nuogąstavimų – ar šaknų kanalų gydymas bus skausmingas. Šiuolaikinėje odontologijoje endodontinis gydymas atliekamas taikant veiksmingą vietinę nejautrą, todėl procedūros metu skausmas nejaučiamas. Daugeliu atvejų pats gydymas yra gerokai komfortiškesnis nei skausmas, kurį sukelia negydomas danties uždegimas.
              </p>
              <p>
                Procedūros metu pacientas gali jausti tik lengvą spaudimą ar vibraciją, tačiau ne skausmą. Po gydymo, kai nuskausminimo poveikis praeina, galimas nežymus jautrumas ar maudimas – tai normali organizmo reakcija, kuri dažniausiai praeina per kelias dienas. Šie pojūčiai paprastai lengvai kontroliuojami gydytojo rekomenduotomis priemonėmis.
              </p>
              <p>
                Svarbu suprasti, kad šaknų kanalų gydymo tikslas yra ne tik pašalinti infekciją, bet ir palengvinti skausmą, todėl dauguma pacientų po procedūros jaučia aiškų palengvėjimą.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Kas nutinka, jei šaknų kanalai negydomi?
            </h2>
            <div className="text-slate-700 leading-relaxed space-y-4">
              <p>
                Negydoma danties pulpos infekcija savaime neišnyksta. Priešingai – laikui bėgant uždegimas gali plisti toliau ir sukelti rimtesnių komplikacijų. Infekcija iš danties šaknų kanalų gali pereiti į aplinkinius audinius, sukelti pūlinį, dantenų patinimą ar net žandikaulio kaulo pažeidimus.
              </p>
              <p>
                Ilgainiui negydomas dantis gali tapti nuolatiniu infekcijos židiniu, kuris ne tik sukelia skausmą, bet ir apsunkina tolimesnį gydymą. Tokiais atvejais dažnai nebeįmanoma išsaugoti danties, todėl tenka jį šalinti, o vėliau planuoti sudėtingesnes ir brangesnes atkūrimo procedūras.
              </p>
              <p>
                Laiku atliktas endodontinis gydymas leidžia sustabdyti infekcijos plitimą, išsaugoti natūralų dantį ir išvengti didesnių intervencijų ateityje. Todėl pastebėjus pirmuosius simptomus svarbu nedelsti ir kreiptis į specialistą.
              </p>
            </div>
          </div>
        </motion.section>

        {/* KADA NEPADEDA */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kada endodontinis gydymas nepadeda?
          </h2>
          <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
            <p className="text-slate-700 mb-4 leading-relaxed">
              Nors endodontinis (šaknų kanalų) gydymas daugeliu atvejų leidžia sėkmingai išsaugoti natūralų dantį, tam tikrose situacijose šis gydymo būdas gali būti neefektyvus arba nebesuteikti ilgalaikio rezultato. Tokiais atvejais sprendimas priimamas įvertinus danties būklę, infekcijos apimtį ir prognozę ateičiai.
            </p>
            <h3 className="font-semibold text-red-900 mb-2">Endodontinis gydymas gali nepadėti, kai:</h3>
            <ul className="list-disc pl-5 space-y-2 text-red-900/80 mb-4">
              <li>dantis yra stipriai suiręs ar skilęs žemiau dantenų lygio, todėl jo neįmanoma patikimai atstatyti</li>
              <li>nustatomi vertikalūs danties šaknies skilimai</li>
              <li>infekcija yra ilgai uždelsta ir sukėlusi didelį kaulo pažeidimą, mažinantį danties stabilumą</li>
              <li>ankstesnis šaknų kanalų gydymas buvo atliktas nekokybiškai, o pakartotinis gydymas nebeturi prognozuojamos sėkmės</li>
              <li>dantis nebegali atlikti savo funkcijos net ir po sėkmingo kanalų gydymo</li>
            </ul>
            <p className="text-slate-700 leading-relaxed">
              Tokiais atvejais gydytojas visuomet aptaria situaciją su pacientu ir pasiūlo alternatyvius sprendimus. Dažniausiai tai gali būti danties šalinimas ir vėlesnis atkūrimas implantais ar protezais. Svarbu pabrėžti, kad sprendimas niekada nepriimamas skubotai – pirmiausia įvertinamos visos galimybės išsaugoti dantį.
            </p>
            <p className="text-slate-700 leading-relaxed mt-2">
              Atviras situacijos įvertinimas leidžia pacientui priimti informuotą sprendimą ir pasirinkti tokį gydymo kelią, kuris užtikrintų ilgalaikį komfortą, funkcionalumą ir burnos sveikatą.
            </p>
          </div>
        </motion.section>

        {/* KODĖL MES */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Renkantis endodontinį gydymą itin svarbu gydytojo patirtis, darbo tikslumas ir naudojamos technologijos. Bangų odontologijos klinikoje šaknų kanalų gydymas atliekamas atsakingai, siekiant ne tik pašalinti infekciją, bet ir išsaugoti natūralų dantį kuo ilgesniam laikui.
            </p>
            <p>
              Kiekvienas atvejis vertinamas individualiai – nuo pirminės diagnostikos iki galutinio danties atstatymo. Klinikoje naudojami šiuolaikiniai diagnostikos ir gydymo metodai leidžia tiksliai įvertinti kanalų anatomiją ir užtikrinti prognozuojamą rezultatą. Didelis dėmesys skiriamas aiškiam gydymo eigos paaiškinimui, todėl pacientai žino, ko tikėtis kiekviename etape.
            </p>
            <p>
              Pacientų pasitikėjimą patvirtina teigiami atsiliepimai, kuriuose dažnai minimas profesionalus požiūris, kruopštumas ir realus skausmo sumažėjimas po gydymo. Toks darbo principas leidžia užtikrinti aukštą gydymo kokybę ir ilgalaikį rezultatą.
            </p>
          </div>
        </motion.section>

        {/* PABAIGOS CTA */}
        <motion.div className="mt-8 mb-12 text-center" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kviečiame registruotis endodontiniam gydymui Bangų klinikoje
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Jeigu jaučiate danties skausmą, pastebėjote patinimą ar gavote rekomendaciją dėl šaknų kanalų gydymo, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu bus įvertinta Jūsų danties būklė, aptarti galimi gydymo sprendimai ir sudarytas individualus gydymo planas.
            <br/><br/>
            Bangų odontologijos klinikoje siekiame, kad endodontinis gydymas būtų ne tik efektyvus, bet ir kuo komfortiškesnis pacientui. Čia Jūsų laukia profesionali komanda, modernios technologijos ir rūpestingas požiūris kiekviename gydymo etape.
            <br/><br/>
            Registruokitės konsultacijai ir pasirūpinkite savo dantų sveikata laiku – tinkamai atliktas endodontinis gydymas leidžia išsaugoti dantį ir išvengti sudėtingesnių procedūrų ateityje.
          </p>
          <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
            Registruotis vizitui
          </Link>
        </motion.div>

      </motion.div>
    </AnimatedSection>
  )
}