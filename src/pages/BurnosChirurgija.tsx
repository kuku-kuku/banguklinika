import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { TableOfContents } from '../components/TableOfContents'

// Animacijų nustatymai
const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

// UI helper klasės
const sectionWrap = 'mb-12 scroll-mt-36 2xl:scroll-mt-24'
const whiteCard = 'bg-brand-50 p-6 sm:p-8 rounded-2xl border border-brand/20 shadow-soft'
const innerCard = 'bg-white p-5 rounded-xl border border-slate-200 shadow-sm'

// Ikonos
function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const tocSections = [
  { id: "kainos", label: "Kainos" },
  { id: "kas-yra", label: "Kas yra burnos chirurgija?" },
  { id: "kada-reikalinga", label: "Kada reikalinga konsultacija?" },
  { id: "procedūros", label: "Kokias procedūras atlieka?" },
  { id: "kaip-atliekamas", label: "Kaip atliekamas gydymas?" },
  { id: "ar-saugu", label: "Ar saugios procedūros?" },
  { id: "kodel-atideti", label: "Kodėl nereikia atidėti?" },
  { id: "pries-po", label: "Prieš ir po procedūros" },
  { id: "kodel-mes", label: "Kodėl Bangų klinika?" },
]

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

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Burnos chirurgija Klaipėdoje - Bangų klinika"
        description="Profesionali burnos chirurgija Klaipėdoje. Protinių dantų šalinimas, implantacija, kaulo augmentacija. Saugios ir neskausmingos procedūros."
        keywords="burnos chirurgija, dantu rovimas, protiniai dantys, cistos, kaulo priauginimas, klaipeda"
        structuredData={structuredData}
      />

      <motion.div
        ref={pageRef}
        className="max-w-screen-2xl mx-auto px-8 xl:px-28 2xl:px-8 2xl:flex 2xl:gap-8 2xl:items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TableOfContents sections={tocSections} rootRef={pageRef} cta={{ label: "Registruotis vizitui", to: "/kontaktai" }} />

        <div className="min-w-0 flex-1">
          {/* HERO / ĮŽANGA */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Profesionali burnos chirurgija Klaipėdoje
            </h1>

            <div className={`mb-8`}>
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4">
                <p>
                  Burnos chirurgija – tai odontologinio gydymo sritis, skirta spręsti sudėtingesnes dantų, minkštųjų audinių ir žandikaulio kaulo problemas, kai įprastas terapinis gydymas nebėra pakankamas. Tokios procedūros dažnai reikalingos siekiant pašalinti infekcijos židinius, atkurti burnos funkciją ar paruošti burną tolimesniam gydymui, pavyzdžiui, implantacijai ar protezavimui.
                </p>
                <p>
                  Bangų odontologijos klinikoje Klaipėdoje burnos chirurginės procedūros atliekamos laikantis šiuolaikinių medicininių standartų, naudojant modernią diagnostiką ir patikimus nuskausminimo metodus. Patyręs burnos chirurgas kiekvieną klinikinę situaciją vertina individualiai, siekdamas saugaus, prognozuojamo ir ilgalaikio rezultato. Didelis dėmesys skiriamas ne tik pačiai procedūrai, bet ir paciento savijautai, aiškiam gydymo paaiškinimui bei sklandžiam gijimo procesui.
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <Link to="/kontaktai" className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                Registruotis vizitui
              </Link>
            </div>

            {/* KAINOS */}
            <div id="kainos" className="mt-8 scroll-mt-36 2xl:scroll-mt-24">
              <div className="space-y-5">
                <div className="w-full">
                  <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                    Burnos chirurgijos paslaugų kainos mūsų klinikoje
                  </h2>
                  <p className="text-slate-700 leading-relaxed">
                    Burnos chirurgijos paslaugų kaina priklauso nuo procedūros pobūdžio, sudėtingumo ir individualios paciento klinikinės situacijos. Prieš kiekvieną chirurginę intervenciją atliekama konsultacija, kurios metu įvertinama burnos būklė ir parenkamas tinkamiausias gydymo sprendimas.
                  </p>
                </div>

                <div className="w-full rounded-2xl border border-brand/20 bg-white shadow-soft overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="md:border-r md:border-slate-100">
                      <div className="divide-y divide-slate-100">
                        <div className="px-5 py-4">
                          <div className="flex justify-between items-baseline mb-1 gap-4">
                            <span className="text-slate-900 font-bold">Kaulo augmentacija</span>
                            <span className="text-slate-900 font-bold whitespace-nowrap">150 – 600 €</span>
                          </div>
                          <span className="block text-slate-700 text-sm">
                            Priklausomai nuo reikalingos kaulo apimties ir taikomos gydymo metodikos.
                          </span>
                        </div>

                        <div className="px-5 py-4">
                          <div className="flex justify-between items-baseline mb-1 gap-4">
                            <span className="text-slate-900 font-bold">Šaknies šalinimo procedūra</span>
                            <span className="text-slate-900 font-bold whitespace-nowrap">60 – 80 €</span>
                          </div>
                          <span className="block text-slate-700 text-sm">
                            Kai dantis jau yra pašalintas, tačiau likusi šaknis kelia uždegimo ar infekcijos riziką.
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-100 md:border-t-0">
                      <div className="divide-y divide-slate-100">
                        <div className="px-5 py-4">
                          <div className="flex justify-between items-baseline mb-1 gap-4">
                            <span className="text-slate-900 font-bold">Danties šalinimas</span>
                            <span className="text-slate-900 font-bold whitespace-nowrap">80 – 100 €</span>
                          </div>
                          <span className="block text-slate-700 text-sm">
                            Atsižvelgiant į danties padėtį ir procedūros sudėtingumą.
                          </span>
                        </div>

                        <div className="px-5 py-4">
                          <div className="flex justify-between items-baseline mb-1 gap-4">
                            <span className="text-slate-900 font-bold">Komplikuotas protinių dantų šalinimas</span>
                            <span className="text-slate-900 font-bold whitespace-nowrap">120 – 150 €</span>
                          </div>
                          <span className="block text-slate-700 text-sm">
                            Atliekamas kai dantis neišdygęs pilnai, yra netaisyklingoje padėtyje ar sukelia aplinkinių audinių pažeidimus.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-slate-700 leading-relaxed text-sm">
                  Tiksli procedūros apimtis ir galutinė kaina aptariama individualios konsultacijos metu, atsižvelgiant į paciento burnos būklę, diagnostinius duomenis ir planuojamą gydymo eigą.
                </p>
              </div>
            </div>
          </motion.header>

          {/* KAS YRA BURNOS CHIRURGIJA */}
          <motion.section id="kas-yra" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
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
            </div>
          </motion.section>

          {/* KADA REIKALINGA KONSULTACIJA */}
          <motion.section id="kada-reikalinga" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kada reikalinga burnos chirurgo konsultacija?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Burnos chirurgo konsultacija reikalinga tuomet, kai dantų ar burnos audinių problemų neįmanoma išspręsti taikant įprastus gydymo metodus arba kai būtina tiksliai įvertinti situaciją prieš sudėtingesnį gydymą. Dažnai pacientai delsia kreiptis, nes skausmas būna nestiprus arba visai nejaučiamas, tačiau burnos ligos gali progresuoti tyliai ir nepastebimai.
              </p>

              <div className={innerCard + ' mb-6'}>
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Į burnos chirurgą mūsų klinikoje Klaipėdoje rekomenduojama kreiptis šiais atvejais:
                </h3>

                <div className="grid sm:grid-cols-1 gap-3">
                  {[
                    "kai dantis yra stipriai pažeistas ir jo neįmanoma išsaugoti gydant terapiniu būdu",
                    "esant nuolatiniam ar pasikartojančiam dantenų uždegimui, pūliniui ar infekcijos požymiams",
                    "kai protiniai dantys dygsta netaisyklingai, kelia skausmą ar sukelia uždegimą",
                    "patyrus dantų ar žandikaulio traumą",
                    "prieš planuojamą dantų implantaciją ar sudėtingesnį protezavimą",
                    "nustačius cistas, darinius ar kitus patologinius pakitimus žandikaulio kaulo srityje"
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Laiku atlikta konsultacija leidžia tiksliai nustatyti problemos priežastį, įvertinti galimas gydymo alternatyvas ir parinkti optimalų sprendimą. Ankstyvas chirurginis gydymas dažnai padeda išvengti didesnių intervencijų ir sutrumpina gijimo laikotarpį.
              </p>
            </div>
          </motion.section>

          {/* KOKIAS PROCEDŪRAS ATLIEKA */}
          <motion.section id="procedūros" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kokias procedūras atlieka burnos chirurgas?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Burnos chirurgas atlieka platų spektrą procedūrų, skirtų dantų, minkštųjų audinių ir žandikaulio kaulo patologijų gydymui. Procedūros parenkamos individualiai, atsižvelgiant į paciento burnos būklę, bendrą sveikatą ir ilgalaikius gydymo tikslus.
              </p>

              <div className={innerCard + ' mb-6'}>
                <h3 className="font-semibold text-darkblue-700 mb-4">
                  Dažniausiai atliekamos burnos chirurginės procedūros:
                </h3>

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
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Visos procedūros atliekamos laikantis griežtų saugumo ir higienos reikalavimų, taikant tinkamus nuskausminimo metodus. Patyręs burnos chirurgas ne tik atlieka pačią procedūrą, bet ir užtikrina, kad pacientas būtų tinkamai informuotas apie gijimo eigą bei tolimesnius gydymo etapus.
              </p>
            </div>
          </motion.section>

          {/* KAIP ATLIEKAMA */}
          <motion.section id="kaip-atliekamas" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kaip atliekamas burnos chirurginis gydymas?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Burnos chirurginis gydymas Bangų odontologijos klinikoje atliekamas pagal aiškią ir pacientui suprantamą eigą. Kiekvienas etapas yra kruopščiai suplanuotas tam, kad procedūra būtų saugi, efektyvi ir kiek įmanoma komfortiškesnė.
              </p>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Konsultacija ir diagnostika</h3>
                  <p className="text-sm text-slate-600">Vizito metu įvertinama burnos būklė, atliekama apžiūra, paskiriami rentgeno tyrimai. Sudaromas individualus planas.</p>
                </div>
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pasiruošimas procedūrai</h3>
                  <p className="text-sm text-slate-600">Supažindinama su eiga, parenkama vietinė nejautra, užtikrinanti, kad pacientas nejaustų skausmo.</p>
                </div>
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Chirurginė procedūra</h3>
                  <p className="text-sm text-slate-600">Atliekama steriliai, tiksliai ir švelniai, naudojant modernius instrumentus, siekiant sumažinti audinių traumą.</p>
                </div>
                <div className={innerCard}>
                  <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                  <h3 className="font-bold text-darkblue-700 mb-2">Pooperacinė priežiūra</h3>
                  <p className="text-sm text-slate-600">Suteikiamos rekomendacijos dėl priežiūros, mitybos, vaistų. Aptariami tolimesni vizitai.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* SAUGUMAS */}
          <motion.section id="ar-saugu" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
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
            </div>
          </motion.section>

          {/* DELSIMAS */}
          <motion.section id="kodel-atideti" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
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
            </div>
          </motion.section>

          {/* PRIEŠ IR PO */}
          <motion.section id="pries-po" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Ką svarbu žinoti prieš ir po burnos chirurginės procedūros?
              </h2>

              <p className="text-slate-700 leading-relaxed max-w-4xl mb-6">
                Tinkamas pasiruošimas ir pooperacinė priežiūra yra svarbi sėkmingo burnos chirurginio gydymo dalis. Prieš procedūrą pacientui suteikiama visa reikalinga informacija apie planuojamą gydymą, nuskausminimą ir galimus pojūčius, kad būtų užtikrintas ramus ir užtikrintas pasirengimas.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-4">Prieš burnos chirurginę procedūrą gali būti rekomenduojama:</h3>
                  <ul className="list-disc pl-5 text-slate-700 space-y-2 text-sm">
                    <li>laikytis gydytojo nurodymų dėl mitybos ar vaistų vartojimo</li>
                    <li>informuoti specialistą apie vartojamus vaistus ar lėtines ligas</li>
                    <li>vengti rūkymo, nes jis gali turėti neigiamos įtakos gijimo procesui</li>
                  </ul>
                </div>

                <div className={innerCard}>
                  <h3 className="font-bold text-darkblue-700 mb-4">Po procedūros svarbu laikytis rekomendacijų:</h3>
                  <ul className="list-disc pl-5 text-slate-700 space-y-2 text-sm">
                    <li>kurį laiką vengti intensyvaus fizinio krūvio</li>
                    <li>laikytis švelnios burnos higienos, neskubant dirginti operuotos vietos</li>
                    <li>rinktis minkštesnį, nekarštą maistą</li>
                    <li>stebėti gijimo eigą ir, prireikus, atvykti pakartotinei apžiūrai</li>
                  </ul>
                </div>
              </div>

              <p className="text-slate-700 leading-relaxed">
                Laikantis individualių rekomendacijų, pooperacinis laikotarpis dažniausiai praeina sklandžiai, o pacientas gali greitai grįžti prie įprasto gyvenimo ritmo. Atsakingas pasiruošimas ir bendradarbiavimas su specialistu yra svarbi sėkmingo gydymo dalis.
              </p>
            </div>
          </motion.section>

          {/* KODĖL MES */}
          <motion.section id="kodel-mes" className={sectionWrap} variants={item}>
            <div className={whiteCard}>
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
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <div className={whiteCard}>
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Kviečiame registruotis burnos chirurgo konsultacijai Bangų klinikoje
              </h2>

              <p className="text-slate-700 mb-8 max-w-3xl leading-relaxed">
                Jeigu ieškote patikimos odontologijos klinikos Klaipėdoje, kurioje burnos chirurgijos paslaugos teikiamos atsakingai, saugiai ir profesionaliai, kviečiame kreiptis į Bangų odontologijos kliniką. Mūsų pacientai vertina ne tik gydymo kokybę, bet ir aiškią komunikaciją, dėmesingą požiūrį bei kruopščiai suplanuotą gydymo eigą.
                <br /><br />
                Bangų odontologijos klinikoje burnos chirurgines procedūras atlieka kvalifikuoti burnos chirurgai, dirbantys su šiuolaikinėmis technologijomis ir taikantys individualius sprendimus pagal kiekvieno paciento situaciją. Čia didelis dėmesys skiriamas tiek procedūros tikslumui, tiek paciento savijautai prieš gydymą, jo metu ir po jo, siekiant patikimo bei ilgalaikio rezultato.
              </p>

              <Link to="/kontaktai" className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1">
                Registruotis vizitui
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}