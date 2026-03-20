import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'
import SEO from '../components/SEO'
import { TableOfContents } from '../components/TableOfContents'
import { useRef } from 'react'

const container = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut', staggerChildren: 0.06 } }
}
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } }
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
      <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

const tocSections = [
  { id: 'kada-reikalinga', label: 'Kada reikalinga?' },
  { id: 'kaina', label: 'Kaina' },
  { id: 'situacijos', label: 'Dažniausios situacijos' },
  { id: 'kodel-neatidelioti', label: 'Kodėl neatidėlioti?' },
  { id: 'vizitas', label: 'Kaip vyksta vizitas?' },
  { id: 'skausmo-mazinimas', label: 'Skausmo mažinimas' },
  { id: 'trauma', label: 'Danties trauma' },
  { id: 'kodel-bangu', label: 'Kodėl Bangų klinika?' },
]

export default function SkubiPagalba() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name: 'Skubi odontologinė pagalba',
    description:
      'Skubi odontologinė pagalba Klaipėdoje – greitas sprendimas staigiam dantų skausmui, infekcijai ar traumai.',
    provider: {
      '@type': 'Dentist',
      name: 'Bangų klinika'
    }
  }

  const pageRef = useRef(null)

  return (
    <AnimatedSection>
      <SEO
        title="Skubi odontologinė pagalba Klaipėdoje"
        description="Skubi odontologinė pagalba Klaipėdoje – greitas sprendimas staigiam dantų skausmui, infekcijai ar traumai. Registruokitės kuo greičiau."
        keywords="skubi pagalba, skubus odontologas, danties skausmas, dantų traumas, klaipeda, banguklinika"
        structuredData={structuredData}
      />

      <motion.div
        ref={pageRef}
        className="max-w-screen-2xl mx-auto px-4 xl:px-8 2xl:px-4 2xl:flex 2xl:gap-8 2xl:items-start"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <TableOfContents sections={tocSections} rootRef={pageRef} cta={{ label: "Registruotis vizitui", to: "/kontaktai" }} />

        <div className="min-w-0 flex-1">
          {/* HERO */}
          <motion.header className="mb-10 text-left" variants={item}>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
              Skubi odontologinė pagalba Klaipėdoje
            </h1>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-soft">
              <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                <p className="mb-4">
                  Staigus danties skausmas ar netikėtai atsiradusi burnos problema gali stipriai sutrikdyti kasdienį gyvenimą.
                  Tokiais atvejais svarbiausia yra kuo greičiau kreiptis į odontologą, kuris gali nustatyti skausmo priežastį ir
                  suteikti reikalingą pagalbą.
                </p>
                <p className="mb-4">
                  Bangų odontologijos klinikoje teikiama skubi odontologinė pagalba Klaipėdoje, skirta pacientams, kuriems
                  reikalingas neatidėliotinas gydymas dėl stipraus dantų skausmo, infekcijos ar traumos. Gydytojai pirmiausia
                  įvertina situaciją, nustato problemos priežastį ir parenka tinkamiausią sprendimą – nuo skausmo malšinimo iki
                  reikalingo gydymo.
                </p>
                <p>
                  Laiku suteikta pagalba padeda sumažinti diskomfortą, sustabdyti uždegimą ir išvengti sudėtingesnių procedūrų
                  ateityje.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex justify-start mt-6">
              <Link
                to="/kontaktai"
                className="btn-primary btn-glow rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
              >
                Registruotis vizitui
              </Link>
            </div>
          </motion.header>

          {/* KADA REIKALINGA */}
          <motion.section
            id="kada-reikalinga"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Kada reikalinga skubi odontologinė pagalba?
            </h2>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-brand/10 shadow-soft">
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Skubi odontologinė pagalba reikalinga tuomet, kai burnos ertmėje atsiranda staigių simptomų, kurių negalima
                  ignoruoti. Dažniausiai pacientai kreipiasi dėl stipraus danties skausmo, patinimo, infekcijos ar traumos.
                </p>
                <p>
                  Taip pat svarbu nedelsti, jei dantis nuskilo, lūžo, buvo išmuštas, iškrito plomba ar karūnėlė. Tokiais atvejais
                  greita odontologo pagalba padeda apsaugoti dantį nuo tolimesnių pažeidimų ir sumažinti komplikacijų riziką.
                </p>
                <p>
                  Kuo anksčiau nustatoma problemos priežastis, tuo paprasčiau ją išspręsti ir išsaugoti natūralius dantis.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KAINA */}
          <motion.section
            id="kaina"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Nuo ko priklauso skubios odontologinės pagalbos kaina?
            </h2>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-soft">
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Skubios odontologinės pagalbos kaina gali skirtis priklausomai nuo kelių svarbių veiksnių. Pirmiausia ji
                  priklauso nuo problemos sudėtingumo ir reikalingo gydymo tipo. Pavyzdžiui, paprastas danties plombavimas gali
                  kainuoti mažiau nei sudėtingesnės procedūros, tokios kaip šaknų kanalų gydymas ar chirurginis danties šalinimas.
                </p>
                <p>
                  Kaina taip pat gali priklausyti nuo diagnostikos poreikio. Kai kuriais atvejais gydytojas gali atlikti rentgeno
                  tyrimą ar kitus papildomus tyrimus, kurie padeda tiksliai nustatyti skausmo priežastį ir parinkti tinkamiausią
                  gydymo metodą.
                </p>
                <p>
                  Dar vienas svarbus aspektas – danties būklė ir reikalingų procedūrų kiekis. Jei problemą galima išspręsti vienos
                  procedūros metu, gydymas dažniausiai būna paprastesnis. Tačiau jei reikalingas kelių etapų gydymas ar tolimesnės
                  procedūros, galutinė kaina gali keistis.
                </p>
                <p>
                  Tiksli skubios odontologinės pagalbos kaina nustatoma tik po gydytojo apžiūros, kai įvertinama paciento burnos
                  būklė ir parenkamas tinkamiausias gydymo sprendimas.
                </p>
              </div>
            </div>
          </motion.section>

          {/* SITUACIJOS */}
          <motion.section
            id="situacijos"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
              Dažniausios situacijos, kai reikalinga skubi pagalba
            </h2>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-soft mb-6">
              <p className="text-slate-700 leading-relaxed">
                Skubi odontologinė pagalba dažniausiai reikalinga tuomet, kai atsiranda netikėti simptomai ar burnos ertmės
                pažeidimai, kurių negalima atidėti. Tokiose situacijose svarbu kuo greičiau kreiptis į odontologą, nes ankstyvas
                gydymas dažnai padeda išvengti rimtesnių komplikacijų.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: 'Staigus ir stiprus danties skausmas',
                  text: 'Vienas dažniausių skubios pagalbos atvejų – stiprus, pulsuojantis danties skausmas. Jis gali atsirasti dėl pažengusio ėduonies, danties nervo uždegimo ar infekcijos. Tokiu atveju būtina kuo greičiau atlikti diagnostiką ir pradėti gydymą, kad skausmas būtų sumažintas ir sustabdytas uždegimas.',
                },
                {
                  title: 'Danties lūžis ar nuskilimas',
                  text: 'Dantys gali būti pažeisti dėl traumos, smūgio ar kietų maisto produktų. Net ir nedidelis nuskilimas gali sukelti jautrumą ar skausmą, todėl svarbu kreiptis į odontologą, kuris įvertins pažeidimo mastą ir atkurs danties formą.',
                },
                {
                  title: 'Patinimas ar infekcija burnos srityje',
                  text: 'Dantenų patinimas, pūlinys ar infekcija gali rodyti bakterinį uždegimą. Tokiais atvejais skubi pagalba padeda sustabdyti infekcijos plitimą ir sumažinti komplikacijų riziką.',
                },
                {
                  title: 'Iškritusi plomba arba karūnėlė',
                  text: 'Jei iškrenta plomba ar karūnėlė, dantis lieka neapsaugotas ir gali tapti jautrus ar pažeidžiamas. Skubus apsilankymas pas odontologą padeda apsaugoti dantį ir atkurti jo funkciją.',
                },
                {
                  title: 'Traumos ar kraujavimas burnoje',
                  text: 'Po nelaimingo atsitikimo ar sporto traumos gali būti pažeisti dantys ar minkštieji audiniai. Tokiais atvejais būtina kuo greičiau kreiptis į specialistus, kad būtų įvertinta situacija ir suteikta tinkama pagalba.',
                },
                {
                  title: 'Protinių dantų skausmas',
                  text: 'Protinių dantų dygimas kartais sukelia stiprų skausmą, patinimą ar uždegimą. Jei simptomai tampa intensyvūs, reikalinga skubi odontologinė pagalba, kuri padės sumažinti diskomfortą ir parinkti tinkamą gydymo sprendimą.',
                },
              ].map((s, i) => (
                <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                  <h3 className="font-bold text-darkblue-700 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.text}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* KODĖL NEATIDĖLIOTI */}
          <motion.section
            id="kodel-neatidelioti"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Kodėl nereikėtų atidėlioti vizito pas odontologą?
            </h2>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-soft">
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Daugelis žmonių linkę atidėti vizitą pas odontologą, tikėdamiesi, kad skausmas praeis savaime. Tačiau
                  dažniausiai tai tik laikinas palengvėjimas, o pati problema išlieka ir gali progresuoti.
                </p>
                <p>
                  Negydomas dantų ėduonis gali pažeisti gilesnius danties audinius ir sukelti nervo uždegimą. Tokiu atveju
                  gydymas tampa sudėtingesnis ir gali prireikti šaknų kanalų gydymo ar net danties šalinimo. Panašiai ir dantenų
                  infekcijos – negydomos jos gali plisti į aplinkinius audinius ir sukelti rimtesnių sveikatos problemų.
                </p>
                <p>
                  Laiku suteikta skubi odontologinė pagalba leidžia greitai nustatyti problemos priežastį ir pradėti gydymą. Tai
                  padeda sumažinti skausmą, apsaugoti dantį nuo tolimesnių pažeidimų ir išvengti sudėtingesnių procedūrų ateityje.
                </p>
                <p>
                  Todėl pajutus stiprų dantų skausmą, pastebėjus patinimą ar patyrus traumą, rekomenduojama nedelsti ir kuo
                  greičiau kreiptis į odontologą. Ankstyvas gydymas dažnai yra paprastesnis, greitesnis ir leidžia išsaugoti
                  natūralius dantis.
                </p>
              </div>
            </div>
          </motion.section>

          {/* VIZITAS */}
          <motion.section
            id="vizitas"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
              Kaip vyksta skubios pagalbos vizitas?
            </h2>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-soft mb-6">
              <p className="text-slate-700 leading-relaxed">
                Skubios odontologinės pagalbos vizitas pirmiausia skirtas greitai nustatyti problemos priežastį ir sumažinti
                paciento patiriamą skausmą. Bangų odontologijos klinikoje kiekviena situacija vertinama individualiai, todėl
                gydytojai stengiasi kuo greičiau suteikti reikalingą pagalbą ir parinkti tinkamiausią gydymo sprendimą.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                <div className="text-4xl font-bold text-brand/20 mb-2">01</div>
                <h3 className="font-bold text-darkblue-700 mb-2">Pirminė apžiūra ir diagnostika</h3>
                <p className="text-sm text-slate-600">
                  Odontologas atlieka burnos ertmės apžiūrą ir įvertina simptomus. Jei reikia, atliekamas rentgeno tyrimas.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                <div className="text-4xl font-bold text-brand/20 mb-2">02</div>
                <h3 className="font-bold text-darkblue-700 mb-2">Skausmo malšinimas</h3>
                <p className="text-sm text-slate-600">
                  Pirmiausia imamasi priemonių skausmui sumažinti – vietinė nejautra ar kitos procedūros.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                <div className="text-4xl font-bold text-brand/20 mb-2">03</div>
                <h3 className="font-bold text-darkblue-700 mb-2">Problemos sprendimas</h3>
                <p className="text-sm text-slate-600">
                  Atliekama reikalinga procedūra arba laikinas gydymas, kuris stabilizuoja būklę iki planinio gydymo.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                <div className="text-4xl font-bold text-brand/20 mb-2">04</div>
                <h3 className="font-bold text-darkblue-700 mb-2">Tolimesnio gydymo planas</h3>
                <p className="text-sm text-slate-600">
                  Sudaromas tolimesnio gydymo planas, padedantis išspręsti problemą galutinai ir užtikrinti ilgalaikę burnos sveikatą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* SKAUSMO MAŽINIMAS */}
          <motion.section
            id="skausmo-mazinimas"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Kaip sumažinti dantų skausmą iki vizito pas odontologą?
            </h2>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-soft">
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Staigus dantų skausmas gali būti labai nemalonus, todėl daugelis pacientų ieško būdų, kaip palengvinti būklę
                  iki apsilankymo pas odontologą. Nors namų priemonės negali išspręsti pagrindinės problemos priežasties, jos gali
                  padėti sumažinti diskomfortą.
                </p>

                <div className="grid sm:grid-cols-1 gap-3 mt-2">
                  {[
                    'Vengti labai karšto, šalto ar saldaus maisto, kuris gali dirginti pažeistą dantį.',
                    'Palaikyti gerą burnos higieną – švelniai išsivalyti dantis ir pašalinti maisto likučius.',
                    'Jei atsirado patinimas, laikyti šaltą kompresą išorinėje žando pusėje.',
                    'Naudoti gydytojo rekomenduotus skausmą malšinančius vaistus.',
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                      <span className="mt-1"><CheckIcon /></span>
                      <span className="text-slate-700">{text}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-4 rounded-xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-sm text-slate-700 leading-relaxed">
                    <span className="font-semibold text-darkblue-700">Svarbu:</span>{' '}
                    Tai tik laikinieji sprendimai. Kuo anksčiau nustatoma dantų skausmo priežastis, tuo paprastesnis ir greitesnis
                    gali būti gydymas.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* TRAUMA */}
          <motion.section
            id="trauma"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Ką daryti patyrus danties traumą?
            </h2>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-soft">
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Danties trauma gali įvykti dėl įvairių priežasčių – sporto, nelaimingo atsitikimo ar stipraus smūgio. Tokiose
                  situacijose labai svarbu greitai ir teisingai reaguoti, nes nuo to dažnai priklauso, ar pavyks išsaugoti
                  pažeistą dantį.
                </p>
                <p>
                  Jei dantis nuskilo ar lūžo, rekomenduojama kuo greičiau kreiptis į odontologą. Net jei skausmas nėra stiprus,
                  pažeistas dantis gali tapti jautrus ir pažeidžiamas bakterijų.
                </p>
                <p>
                  Jei dantis buvo visiškai išmuštas, svarbu jį kuo greičiau rasti ir laikyti drėgnoje aplinkoje – pavyzdžiui,
                  piene ar specialiame tirpale. Tokiu atveju būtina nedelsiant kreiptis į odontologą, nes greita pagalba gali
                  padidinti galimybę išsaugoti dantį.
                </p>
                <p>
                  Taip pat svarbu įvertinti, ar nėra minkštųjų audinių pažeidimų ar kraujavimo. Tokiais atvejais odontologas
                  apžiūrės burnos ertmę, atliks reikalingus tyrimus ir parinks tinkamiausią gydymo būdą.
                </p>
                <p>
                  Laiku suteikta odontologinė pagalba po traumos padeda apsaugoti dantis, sumažinti komplikacijų riziką ir atkurti
                  burnos sveikatą.
                </p>
              </div>
            </div>
          </motion.section>

          {/* KODĖL BANGŲ */}
          <motion.section
            id="kodel-bangu"
            className="mb-12 scroll-mt-36 2xl:scroll-mt-24"
            variants={item}
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
            </h2>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-soft">
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Renkantis odontologijos kliniką skubiai pagalbai, svarbiausia yra profesionalumas, patirtis ir greita reakcija.
                  Bangų odontologijos klinikoje pacientams teikiama kvalifikuota pagalba, orientuota į greitą problemos sprendimą
                  ir paciento komfortą. Mūsų specialistai turi ilgametę patirtį įvairiose odontologijos srityse, todėl gali tiksliai
                  įvertinti situaciją ir parinkti tinkamiausią gydymo metodą.
                </p>
                <p>
                  Klinikoje naudojama moderni diagnostikos ir gydymo įranga, leidžianti greitai nustatyti problemos priežastį ir
                  pradėti gydymą. Tai ypač svarbu skubios pagalbos atvejais, kai kiekviena minutė gali turėti įtakos danties
                  išsaugojimui ar uždegimo plitimo sustabdymui.
                </p>
                <p>
                  Didelis dėmesys skiriamas ir paciento savijautai – procedūros atliekamos taikant efektyvią nejautrą, todėl
                  gydymas vyksta kuo komfortiškiau. Individualus požiūris į kiekvieną pacientą padeda užtikrinti, kad būtų
                  pasirinktas optimalus sprendimas tiek skausmo malšinimui, tiek tolimesniam gydymui.
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.div className="mt-8 mb-12 text-left" variants={item}>
            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
              Kviečiame registruotis skubiai odontologinei pagalbai Bangų klinikoje
            </h2>

            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-soft mb-6">
              <p className="text-slate-700 max-w-3xl leading-relaxed">
                Jei jaučiate stiprų danties skausmą, pastebėjote patinimą ar patyrėte danties traumą, svarbu nedelsti ir kuo
                greičiau kreiptis į specialistus. Laiku suteikta skubi odontologinė pagalba gali padėti sumažinti skausmą,
                sustabdyti uždegimą ir išsaugoti natūralius dantis.
                <br />
                <br />
                Bangų odontologijos klinikos komanda pasiruošusi suteikti profesionalią pagalbą ir pasirūpinti jūsų burnos
                sveikata. Kreipkitės į mūsų kliniką ir užsiregistruokite skubiai konsultacijai – patyrę specialistai įvertins
                situaciją ir parinks tinkamiausią gydymo sprendimą.
              </p>
            </div>

            <Link
              to="/kontaktai"
              className="btn-primary btn-glow rounded-full px-8 py-4 font-semibold text-lg inline-block hover:shadow-xl transition transform hover:-translate-y-1"
            >
              Registruotis vizitui
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </AnimatedSection>
  )
}
