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

export default function BurnosChirurgija() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Profesionali burnos chirurgija",
    "description": "Profesionali burnos chirurgija Klaipėdoje. Dantų šalinimas, implantacija, cistų gydymas.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klinika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        title="Burnos chirurgija Klaipėdoje - Bangų klinika"
        description="Profesionali burnos chirurgija Klaipėdoje. Protinių dantų šalinimas, implantacija, kaulo augmentacija. Saugios ir neskausmingos procedūros."
        keywords="burnos chirurgija, dantu rovimas, protiniai dantys, cistos, kaulo priauginimas, klaipeda"
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">
        
        {/* HERO / ĮŽANGA */}
        <motion.header className="mb-10 text-center sm:text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionali burnos chirurgija Klaipėdoje
          </h1>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 mb-8">
            <p>
              Burnos chirurgija – tai odontologinio gydymo sritis, skirta spręsti sudėtingesnes dantų, minkštųjų audinių ir žandikaulio kaulo problemas, kai įprastas terapinis gydymas nebėra pakankamas. Tokios procedūros dažnai reikalingos siekiant pašalinti infekcijos židinius, atkurti burnos funkciją ar paruošti burną tolimesniam gydymui, pavyzdžiui, implantacijai ar protezavimui.
            </p>
            <p>
              Bangų odontologijos klinikoje Klaipėdoje burnos chirurginės procedūros atliekamos laikantis šiuolaikinių medicininių standartų, naudojant modernią diagnostiką ir patikimus nuskausminimo metodus. Patyręs burnos chirurgas kiekvieną klinikinę situaciją vertina individualiai, siekdamas saugaus, prognozuojamo ir ilgalaikio rezultato. Didelis dėmesys skiriamas ne tik pačiai procedūrai, bet ir paciento savijautai, aiškiam gydymo paaiškinimui bei sklandžiam gijimo procesui.
            </p>
          </div>

          {/* CTA MYGTUKAS VIRŠUJE */}
          <div className="flex justify-center sm:justify-start">
            <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
              Registruotis vizitui
            </Link>
          </div>

          {/* KAINOS */}
          <div className="mt-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Burnos chirurgijos paslaugų kainos mūsų klinikoje
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Burnos chirurgijos paslaugų kaina priklauso nuo procedūros pobūdžio, sudėtingumo ir individualios paciento klinikinės situacijos. Prieš kiekvieną chirurginę intervenciją atliekama konsultacija, kurios metu įvertinama burnos būklė ir parenkamas tinkamiausias gydymo sprendimas.
          </p>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            <div className="divide-y divide-slate-100">
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-baseline mb-1">
                    <span className="text-slate-900 font-bold">Kaulo augmentacija</span>
                    <span className="text-brand font-bold whitespace-nowrap ml-4">150 – 600 €</span>
                </div>
                <span className="block text-slate-700 text-sm">Priklausomai nuo reikalingos kaulo apimties ir taikomos gydymo metodikos.</span>
              </div>
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-baseline mb-1">
                    <span className="text-slate-900 font-bold">Šaknies šalinimo procedūra</span>
                    <span className="text-brand font-bold whitespace-nowrap ml-4">60 – 80 €</span>
                </div>
                <span className="block text-slate-700 text-sm">Kai dantis jau yra pašalintas, tačiau likusi šaknis kelia uždegimo ar infekcijos riziką.</span>
              </div>
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-baseline mb-1">
                    <span className="text-slate-900 font-bold">Danties šalinimas</span>
                    <span className="text-brand font-bold whitespace-nowrap ml-4">80 – 100 €</span>
                </div>
                <span className="block text-slate-700 text-sm">Atsižvelgiant į danties padėtį ir procedūros sudėtingumą.</span>
              </div>
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-baseline mb-1">
                    <span className="text-slate-900 font-bold">Komplikuotas protinių dantų šalinimas</span>
                    <span className="text-brand font-bold whitespace-nowrap ml-4">120 – 150 €</span>
                </div>
                <span className="block text-slate-700 text-sm">Atliekamas kai dantis neišdygęs pilnai, yra netaisyklingoje padėtyje ar sukelia aplinkinių audinių pažeidimus.</span>
              </div>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Tiksli procedūros apimtis ir galutinė kaina aptariama individualios konsultacijos metu, atsižvelgiant į paciento burnos būklę, diagnostinius duomenis ir planuojamą gydymo eigą.
          </p>
          </div>
        </motion.header>

        {/* KAS YRA BURNOS CHIRURGIJA */}
        <motion.section className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas yra burnos chirurgija?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Burnos chirurgija – tai odontologijos sritis, apimanti chirurginį dantų, burnos gleivinės, žandikaulių ir aplinkinių audinių gydymą. Ji taikoma tais atvejais, kai dantų ar burnos problemų neįmanoma išspręsti konservatyviais metodais, o chirurginė intervencija yra būtina siekiant užkirsti kelią ligos progresavimui ar atkurti normalias burnos funkcijas.
            </p>
            <p>
              Dažniausiai burnos chirurgija apima procedūras, susijusias su nepagydomai pažeistų dantų šalinimu, infekcijų gydymu, protinių dantų problemomis, kaulo audinio korekcijomis ar pasiruošimu dantų implantacijai. Šios intervencijos gali būti tiek paprastos, tiek sudėtingesnės, todėl kiekvienu atveju atliekama išsami diagnostika ir sudaromas individualus gydymo planas.
            </p>
            <p>
              Svarbu pabrėžti, kad šiuolaikinė burnos chirurgija ženkliai skiriasi nuo anksčiau vyravusių stereotipų. Procedūros atliekamos taikant efektyvią vietinę nejautrą ar kitus nuskausminimo metodus, todėl pacientas nejaučia skausmo, o diskomfortas po procedūros paprastai būna minimalus ir laikinas. Tinkamai suplanuotas chirurginis gydymas ne tik pašalina esamą problemą, bet ir sudaro sąlygas sėkmingam tolimesniam odontologiniam gydymui bei ilgalaikei burnos sveikatai.
            </p>
          </div>
        </motion.section>

        {/* KADA REIKALINGA KONSULTACIJA */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kada reikalinga burnos chirurgo konsultacija?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Burnos chirurgo konsultacija reikalinga tuomet, kai dantų ar burnos audinių problemų neįmanoma išspręsti taikant įprastus gydymo metodus arba kai būtina tiksliai įvertinti situaciją prieš sudėtingesnį gydymą. Dažnai pacientai delsia kreiptis, nes skausmas būna nestiprus arba visai nejaučiamas, tačiau burnos ligos gali progresuoti tyliai ir nepastebimai.
          </p>
          
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Į burnos chirurgą mūsų klinikoje Klaipėdoje rekomenduojama kreiptis šiais atvejais:</h3>
            <div className="grid sm:grid-cols-1 gap-3">
              {[
                "kai dantis yra stipriai pažeistas ir jo neįmanoma išsaugoti gydant terapiniu būdu",
                "esant nuolatiniam ar pasikartojančiam dantenų uždegimui, pūliniui ar infekcijos požymiams",
                "kai protiniai dantys dygsta netaisyklingai, kelia skausmą ar sukelia uždegimą",
                "patyrus dantų ar žandikaulio traumą",
                "prieš planuojamą dantų implantaciją ar sudėtingesnį protezavimą",
                "nustačius cistas, darinius ar kitus patologinius pakitimus žandikaulio kaulo srityje"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Laiku atlikta konsultacija leidžia tiksliai nustatyti problemos priežastį, įvertinti galimas gydymo alternatyvas ir parinkti optimalų sprendimą. Ankstyvas chirurginis gydymas dažnai padeda išvengti didesnių intervencijų ir sutrumpina gijimo laikotarpį.
          </p>
        </motion.section>

        {/* KOKIAS PROCEDŪRAS ATLIEKA (Pakeista: Ikonos nuimtos, palikti tik checkmarkai) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kokias procedūras atlieka burnos chirurgas?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Burnos chirurgas atlieka platų spektrą procedūrų, skirtų dantų, minkštųjų audinių ir žandikaulio kaulo patologijų gydymui. Procedūros parenkamos individualiai, atsižvelgiant į paciento burnos būklę, bendrą sveikatą ir ilgalaikius gydymo tikslus.
          </p>
          
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Dažniausiai atliekamos burnos chirurginės procedūros:</h3>
            <div className="grid sm:grid-cols-1 gap-3">
              {[
                "Dantų šalinimas – kai dantis yra nepagydomai pažeistas, sukelia infekciją ar kelia grėsmę aplinkiniams audiniams",
                "Protinių (retinuotų) dantų šalinimas, kai jie neišdygsta pilnai, spaudžia kitus dantis ar sukelia uždegimą",
                "Pūlinių atvėrimas ir infekcijų gydymas, siekiant sustabdyti uždegimo plitimą",
                "Šaknies viršūnės rezekcija, kai infekcija išlieka nepaisant kanalų gydymo",
                "Žandikaulio cistų ir kitų darinių šalinimas",
                "Paruošiamosios procedūros implantacijai, tokios kaip kaulo korekcijos ar kaulo priauginimas",
                "Sinuso dugno pakėlimas, kai viršutiniame žandikaulyje nepakanka kaulo implantams",
                "Minkštųjų audinių chirurgija, skirta burnos gleivinės pakitimams koreguoti"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Visos procedūros atliekamos laikantis griežtų saugumo ir higienos reikalavimų, taikant tinkamus nuskausminimo metodus. Patyręs burnos chirurgas ne tik atlieka pačią procedūrą, bet ir užtikrina, kad pacientas būtų tinkamai informuotas apie gijimo eigą bei tolimesnius gydymo etapus.
          </p>
        </motion.section>

        {/* KAIP ATLIEKAMA */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kaip atliekamas burnos chirurginis gydymas?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Burnos chirurginis gydymas Bangų odontologijos klinikoje atliekamas pagal aiškią ir pacientui suprantamą eigą. Kiekvienas etapas yra kruopščiai suplanuotas tam, kad procedūra būtų saugi, efektyvi ir kiek įmanoma komfortiškesnė.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Konsultacija ir diagnostika</h3>
              <p className="text-sm text-slate-600">Vizito metu įvertinama burnos būklė, atliekama apžiūra, paskiriami rentgeno tyrimai. Sudaromas individualus planas.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Pasiruošimas procedūrai</h3>
              <p className="text-sm text-slate-600">Supažindinama su eiga, parenkama vietinė nejautra, užtikrinanti, kad pacientas nejaustų skausmo.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Chirurginė procedūra</h3>
              <p className="text-sm text-slate-600">Atliekama steriliai, tiksliai ir švelniai, naudojant modernius instrumentus, siekiant sumažinti audinių traumą.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
              <h3 className="font-bold text-darkblue-700 mb-2">Pooperacinė priežiūra</h3>
              <p className="text-sm text-slate-600">Suteikiamos rekomendacijos dėl priežiūros, mitybos, vaistų. Aptariami tolimesni vizitai.</p>
            </div>
          </div>
        </motion.section>

        {/* SAUGUMAS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Ar burnos chirurginės procedūros yra saugios?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
             <p>
               Šiuolaikinė burnos chirurgija yra saugi ir prognozuojama odontologijos sritis, kai procedūros atliekamos patyrusių specialistų ir laikantis medicininių standartų. Bangų odontologijos klinikoje didelis dėmesys skiriamas paciento saugumui kiekviename gydymo etape – nuo pirmosios konsultacijos iki visiško gijimo.
             </p>
             <p>
               Prieš kiekvieną chirurginę procedūrą įvertinama paciento bendra sveikatos būklė, vartojami vaistai ir galimos individualios rizikos. Tai leidžia parinkti tinkamiausią gydymo taktiką ir sumažinti komplikacijų tikimybę. Vietinė nejautra ar kiti nuskausminimo metodai užtikrina, kad procedūros metu pacientas nepatirtų skausmo.
             </p>
             <p>
               Po chirurginio gydymo galimi laikini pojūčiai, tokie kaip patinimas, jautrumas ar nežymus diskomfortas, tačiau tai yra normali organizmo reakcija į intervenciją ir dažniausiai praeina per kelias dienas. Laikantis burnos chirurgo rekomendacijų, gijimo procesas būna sklandus ir kontroliuojamas.
             </p>
             <p>
               Svarbu pabrėžti, kad laiku atliktas burnos chirurginis gydymas dažnai yra saugesnis sprendimas nei problemos ignoravimas. Negydomos infekcijos ar uždegimai gali progresuoti ir sukelti rimtesnes komplikacijas, todėl profesionali chirurginė pagalba padeda išvengti didesnių rizikų ateityje.
             </p>
          </div>
        </motion.section>

        {/* DELSIMAS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas nutinka, jei reikalingas burnos chirurginis gydymas atidedamas?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
             <p>
               Burnos chirurginis gydymas dažnai tampa būtinas ne iš karto pastebėjus problemą, o tuomet, kai ji jau yra pažengusi. Vis dėlto delsimas gali turėti neigiamų pasekmių, net jei simptomai iš pradžių atrodo nežymūs arba visai nejuntami. Daugelis burnos ligų progresuoja palaipsniui ir ilgą laiką gali vystytis be aiškaus skausmo.
             </p>
             <p>
               Neišgydytos infekcijos ar uždegiminiai procesai burnos ertmėje gali plisti į aplinkinius audinius, sukelti pūlinius, kaulo pažeidimus ar dantenų atsitraukimą. Tokiais atvejais gydymas tampa sudėtingesnis, reikalauja didesnės chirurginės intervencijos ir ilgesnio gijimo laikotarpio. Be to, negydomos problemos gali apsunkinti būsimą dantų atkūrimą – pavyzdžiui, implantaciją ar protezavimą.
             </p>
             <p>
               Atidėliojant burnos chirurginį gydymą taip pat gali padidėti bendrų sveikatos komplikacijų rizika, ypač jei infekcija plinta už burnos ribų. Todėl laiku atlikta burnos chirurgo konsultacija ir gydymas leidžia išspręsti problemą ankstyvoje stadijoje, sumažinti intervencijos apimtį ir užtikrinti geresnę ilgalaikę prognozę.
             </p>
          </div>
        </motion.section>

        {/* PRIEŠ IR PO */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Ką svarbu žinoti prieš ir po burnos chirurginės procedūros?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Tinkamas pasiruošimas ir pooperacinė priežiūra yra svarbi sėkmingo burnos chirurginio gydymo dalis. Prieš procedūrą pacientui suteikiama visa reikalinga informacija apie planuojamą gydymą, nuskausminimą ir galimus pojūčius, kad būtų užtikrintas ramus ir užtikrintas pasirengimas.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-brand-50/30 p-6 rounded-xl border border-brand/10">
              <h3 className="font-bold text-darkblue-700 mb-4">Prieš burnos chirurginę procedūrą gali būti rekomenduojama:</h3>
              <ul className="list-disc pl-5 text-slate-700 space-y-2 text-sm">
                <li>laikytis gydytojo nurodymų dėl mitybos ar vaistų vartojimo</li>
                <li>informuoti specialistą apie vartojamus vaistus ar lėtines ligas</li>
                <li>vengti rūkymo, nes jis gali turėti neigiamos įtakos gijimo procesui</li>
              </ul>
            </div>
            <div className="bg-brand-50/30 p-6 rounded-xl border border-brand/10">
              <h3 className="font-bold text-darkblue-700 mb-4">Po procedūros svarbu laikytis rekomendacijų:</h3>
              <ul className="list-disc pl-5 text-slate-700 space-y-2 text-sm">
                <li>kurį laiką vengti intensyvaus fizinio krūvio</li>
                <li>laikytis švelnios burnos higienos, neskubant dirginti operuotos vietos</li>
                <li>rinktis minkštesnį, nekarštą maistą</li>
                <li>stebėti gijimo eigą ir, prireikus, atvykti pakartotinei apžiūrai</li>
              </ul>
            </div>
          </div>
          
          <p className="text-slate-700 mt-6 leading-relaxed">
            Laikantis individualių rekomendacijų, pooperacinis laikotarpis dažniausiai praeina sklandžiai, o pacientas gali greitai grįžti prie įprasto gyvenimo ritmo. Atsakingas pasiruošimas ir bendradarbiavimas su specialistu yra svarbi sėkmingo gydymo dalis.
          </p>
        </motion.section>

        {/* KODĖL MES */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
             <p>
               Renkantis burnos chirurgijos paslaugas itin svarbu pasitikėti ne tik procedūra, bet ir ją atliekančiu specialistu bei klinikos požiūriu į paciento saugumą. Bangų odontologijos klinikoje burnos chirurginis gydymas atliekamas laikantis aukštų medicininių standartų, derinant patirtį, šiuolaikines technologijas ir individualų dėmesį kiekvienam pacientui.
             </p>
             <p>
               Mūsų klinikoje dirbantis burnos chirurgas kiekvieną situaciją vertina individualiai – nuo pirminės konsultacijos iki visiško gijimo. Didelis dėmesys skiriamas tiksliai diagnostikai, aiškiam gydymo plano paaiškinimui ir prognozuojamam rezultatui. Tai leidžia pacientui jaustis saugiai ir suprasti kiekvieną gydymo etapą.
             </p>
             <p>
               Bangų odontologijos klinikoje naudojami modernūs diagnostikos ir chirurginio gydymo metodai, užtikrinantys tikslumą ir minimalų audinių pažeidimą. Procedūros atliekamos taikant patikimus nuskausminimo sprendimus, todėl pacientų patirtis yra kiek įmanoma komfortiškesnė. Po chirurginio gydymo pacientams suteikiamos išsamios ir praktiškos rekomendacijos, padedančios užtikrinti sklandų gijimo procesą.
             </p>
             <p>
               Svarbus klinikos privalumas – aiški komunikacija ir skaidrumas. Pacientai iš anksto supažindinami su procedūros eiga, galimomis alternatyvomis ir tolimesniu gydymo planu. Toks požiūris leidžia kurti ilgalaikį pasitikėjimą ir bendradarbiavimą, orientuotą į ilgalaikę burnos sveikatą.
             </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div className="mt-8 mb-12 text-center" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kviečiame registruotis burnos chirurgo konsultacijai Bangų klinikoje
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Jeigu ieškote patikimos odontologijos klinikos Klaipėdoje, kurioje burnos chirurgijos paslaugos teikiamos atsakingai, saugiai ir profesionaliai, kviečiame kreiptis į Bangų odontologijos kliniką. Mūsų pacientai vertina ne tik gydymo kokybę, bet ir aiškią komunikaciją, dėmesingą požiūrį bei kruopščiai suplanuotą gydymo eigą.
            <br/><br/>
            Bangų odontologijos klinikoje burnos chirurgines procedūras atlieka kvalifikuoti burnos chirurgai, dirbantys su šiuolaikinėmis technologijomis ir taikantys individualius sprendimus pagal kiekvieno paciento situaciją. Čia didelis dėmesys skiriamas tiek procedūros tikslumui, tiek paciento savijautai prieš gydymą, jo metu ir po jo, siekiant patikimo bei ilgalaikio rezultato.
          </p>
          <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
            Registruotis vizitui
          </Link>
        </motion.div>

      </motion.div>
    </AnimatedSection>
  )
}