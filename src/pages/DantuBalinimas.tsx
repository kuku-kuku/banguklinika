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

function StarIcon() {
  return (
    <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
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

export default function DantuBalinimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Dantų balinimas",
    "description": "Profesionalus dantų balinimas Klaipėdoje su BEYOND® sistema ir kapomis namuose.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klinika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        title="Dantų Balinimas Klaipėdoje | BEYOND® ir Kapos | Bangų klinika"
        description="Profesionalus dantų balinimas Klaipėdoje: BEYOND® ofisinis balinimas ir balinimas kapomis namuose. Saugus, efektyvus ir ilgalaikis rezultatas."
        keywords="dantu balinimas, beyond sistema, balinimo kapos, dantu estetika, klaipeda"
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">

        {/* HERO */}
        <motion.header className="mb-10 text-center sm:text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionalus dantų balinimas Klaipėdoje
          </h1>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
            <p>
              Dantų spalva laikui bėgant gali pakisti dėl įvairių priežasčių – mitybos įpročių, rūkymo, amžiaus ar tam tikrų vaistų poveikio. Net ir kruopšti kasdienė burnos priežiūra ne visuomet leidžia atkurti natūralų dantų baltumą, todėl profesionalus dantų balinimas tampa vienu efektyviausių estetinių sprendimų.
            </p>
            <p>
              Bangų odontologijos klinikoje Klaipėdoje atliekamas dantų balinimas padeda saugiai ir greitai pasiekti pastebimą rezultatą. Naudojami modernūs balinimo metodai leidžia dantis pašviesinti keliais atspalviais, išlaikant emalio saugumą ir komfortą procedūros metu. Prieš kiekvieną balinimą įvertinama individuali burnos būklė, todėl parenkamas tinkamiausias sprendimas kiekvienam pacientui.
            </p>
          </div>

          {/* CTA MYGTUKAS VIRŠUJE */}
          <div className="flex justify-center sm:justify-start">
            <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
              Registruotis vizitui
            </Link>
          </div>
        </motion.header>

        {/* KAS YRA BALINIMAS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas yra dantų balinimas?
          </h2>
          <div className="bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10 space-y-4 text-slate-700 leading-relaxed">
            <p>
              Dantų balinimas – tai estetinė odontologinė procedūra, kurios metu specialiomis priemonėmis šalinami dantų emalyje susikaupę pigmentai, sukeliantys dantų patamsėjimą ar pageltimą. Skirtingai nei paviršinis apnašų šalinimas, balinimo metu veikiama giluminė danties struktūra, todėl rezultatas yra ryškesnis ir ilgiau išliekantis.
            </p>
            <p>
              Bangų odontologijos klinikoje taikomi keli dantų balinimo metodai, atsižvelgiant į paciento poreikius ir lūkesčius. Vienas pažangiausių sprendimų – ofisinis dantų balinimas BEYOND® sistema, atliekamas odontologo kabinete. Tai speciali balinimo procedūra su šviesos filtravimu, kuri užtikrina greitą ir saugų rezultatą. Naudojama BEYOND® ACCELERATOR halogeninė lempa išskiria mažesnę temperatūrą, todėl procedūra yra patogesnė, o dantų jautrumo rizika – mažesnė. Balinimo rezultatas matomas iš karto po procedūros.
            </p>
            <p>
              Tiems pacientams, kurie pageidauja balinti dantis palaipsniui, siūlomas balinimas kapomis namuose. Šio metodo metu pagaminamos individualios kapos, kurios naudojamos su specialiais balinimo geliais. Prieš pradedant balinimą namuose, rekomenduojama atlikti profesionalią burnos higieną, siekiant geresnio ir tolygesnio rezultato.
            </p>
          </div>
        </motion.section>

        {/* BEYOND SISTEMA */}
        <motion.section className="mb-12" variants={item}>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                Dantų balinimas BEYOND® sistema
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  Ofisinis dantų balinimas BEYOND® sistema atliekamas odontologo kabinete ir laikomas vienu pažangiausių profesionalaus balinimo metodų. Procedūros metu naudojamas specialus balinamasis gelis ir BEYOND® ACCELERATOR halogeninė lempa, kuri aktyvuoja balinimo procesą, kartu užtikrindama maksimalų saugumą dantų emaliui.
                </p>
                <p>
                  Ši sistema išsiskiria tuo, kad balinimo metu taikomas šviesos filtravimas, leidžiantis sumažinti skleidžiamą šilumą. Dėl to procedūra yra patogesnė pacientui, o dantų jautrumo rizika – gerokai mažesnė, lyginant su kai kuriais kitais balinimo metodais. Visa procedūra trunka apie 45 minutes, o rezultatas dažniausiai pastebimas iš karto po pirmo seanso.
                </p>
                <p>
                  Dantų balinimas Klaipėdoje BEYOND® sistema ypač tinkamas pacientams, kurie nori greito ir ryškaus rezultato, pavyzdžiui, prieš svarbias asmenines ar profesines progas. Prieš procedūrą įvertinama dantų būklė, todėl balinimas atliekamas tik tada, kai jis yra saugus ir tinkamas konkrečiam pacientui.
                </p>
              </div>
            </div>
            {/* Vizualinis elementas - ikona ar vieta nuotraukai */}
            <div className="w-full md:w-1/3 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center">
              <SparklesIcon />
              <p className="font-semibold text-darkblue-700 mt-2">Greitas rezultatas</p>
              <p className="text-sm text-slate-500">Vos per 45 minutes</p>
            </div>
          </div>
        </motion.section>

        {/* KODĖL RINKTIS BEYOND */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kodėl verta rinktis BEYOND® dantų balinimą?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            BEYOND® sistema pasaulyje pripažįstama kaip viena iš lyderiaujančių dantų estetikos srityje. Šis balinimo metodas pasirenkamas dėl patikimumo, prognozuojamo rezultato ir komforto procedūros metu.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              "BEYOND® – pasaulinis dantų estetikos lyderis",
              "Pastebimi rezultatai jau po vienos procedūros",
              "Puikus pasirinkimas ruošiantis ypatingoms progoms",
              "Tinka esant įvairios kilmės dėmėms (tetraciklino, fluoro ir kt.)",
              "Procedūra paprasta ir neskausminga (apie 45 min.)",
              "Ilgalaikis efektas – rezultatai dažnai išlieka iki 2 metų"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                <span className="mt-1"><CheckIcon /></span>
                <span className="text-slate-700 text-sm">{text}</span>
              </div>
            ))}
          </div>

          <p className="text-slate-700 text-sm bg-blue-50 p-4 rounded-xl border border-blue-100">
            <strong>Svarbu:</strong> Po BEYOND® dantų balinimo labai svarbu laikytis specialisto rekomendacijų. Pirmąsias 24 valandas po procedūros rekomenduojama vengti kavos, tabako, dažančių gėrimų ir maisto, taip pat spalvotų dantų pastų ar burnos skalavimo skysčių. Tai padeda išsaugoti pasiektą rezultatą ir užtikrina tolygesnį dantų atspalvį.
          </p>
        </motion.section>

        {/* BALINIMAS KAPOMIS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Dantų balinimas kapomis namuose
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Pacientams, kurie nori balinti dantis palaipsniui ir lankstesniu būdu, Bangų odontologijos klinikoje siūlomas dantų balinimas kapomis namuose. Šis metodas leidžia pasiekti tolygų rezultatą per ilgesnį laiką, balinimą atliekant patogiai namų aplinkoje.
            </p>
            <p>
              Balinimas kapomis pradedamas klinikoje, kur pagal individualų paciento dantų atspaudą pagaminamos asmeniškai pritaikytos kapos. Kartu parenkamas tinkamas balinimo gelis ir suteikiamos išsamios naudojimo instrukcijos. Tokiu būdu užtikrinama, kad balinimas būtų saugus, efektyvus ir pritaikytas konkrečiai dantų būklei.
            </p>

            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm my-4">
              <h3 className="font-semibold text-darkblue-700 mb-2">Šis balinimo būdas dažnai pasirenkamas pacientų, kurie:</h3>
              <ul className="list-disc pl-5 space-y-1 text-slate-700">
                <li>nori palaipsnio ir kontroliuojamo rezultato</li>
                <li>turi jautresnius dantis</li>
                <li>siekia išlaikyti ar sustiprinti jau atlikto ofisinio balinimo efektą</li>
              </ul>
            </div>

            <p>
              Prieš pradedant balinimą kapomis, rekomenduojama atlikti profesionalią burnos higieną, kad balinimo gelis veiktų tolygiai, o rezultatas būtų estetiškai vienodas.
            </p>
          </div>
        </motion.section>

        {/* KAINOS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Dantų balinimo kaina mūsų klinikoje
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
            <p>
              Dantų balinimo kaina priklauso nuo pasirinkto balinimo metodo, procedūros apimties ir individualių paciento poreikių. Prieš atliekant balinimą visuomet rekomenduojama konsultacija, kurios metu įvertinama dantų būklė ir parenkamas tinkamiausias sprendimas, leidžiantis pasiekti saugų ir ilgalaikį rezultatą.
            </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            <div className="divide-y divide-slate-100">
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Ofisinis dantų balinimas BEYOND® sistema</span>
                  <span className="text-darkblue-700 font-bold">nuo 250 €</span>
                </div>
                <span className="block text-slate-600 text-sm">Greitas ir efektyvus būdas, rezultatas po vienos procedūros.</span>
              </div>
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Balinimo kapų atspaudai</span>
                  <span className="text-darkblue-700 font-bold">nuo 30 €</span>
                </div>
                <span className="block text-slate-600 text-sm">Pirmas žingsnis renkantis balinimą namuose.</span>
              </div>
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Balinimo kapos su geliu (2 vnt. + gelis)</span>
                  <span className="text-darkblue-700 font-bold">nuo 200 €</span>
                </div>
                <span className="block text-slate-600 text-sm">Leidžia balinti dantis palaipsniui namų sąlygomis.</span>
              </div>
              <div className="p-5 hover:bg-brand-50/30 transition">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-slate-900 font-bold">Danties papuošalo tvirtinimas</span>
                  <span className="text-darkblue-700 font-bold">nuo 50 €</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Tiksli dantų balinimo kaina aptariama individualios konsultacijos metu, atsižvelgiant į pasirinktą metodą, dantų būklę ir norimą rezultatą. Skaidri kainodara leidžia pacientams priimti užtikrintą sprendimą dėl dantų balinimo Klaipėdoje.
          </p>
        </motion.section>

        {/* SAUGUMAS */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Ar dantų balinimas yra saugus?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Šiuolaikinis profesionalus dantų balinimas, atliekamas odontologo priežiūroje, yra laikomas saugia procedūra, kai laikomasi nustatytų protokolų ir individualiai parenkamas metodas. Bangų odontologijos klinikoje naudojamos patikimos, kliniškai patikrintos balinimo sistemos, tokios kaip BEYOND®, kurios sukurtos taip, kad maksimaliai apsaugotų dantų emalį.
            </p>
            <p>
              Vienas dažniausių pacientų nuogąstavimų – ar balinimas nepažeidžia dantų. Tinkamai atliktas balinimas neardo emalio struktūros, o galimas laikinas dantų jautrumas dažniausiai praeina per trumpą laiką. BEYOND® sistemoje taikomas šviesos filtravimas leidžia sumažinti procedūros metu išsiskiriančią šilumą, todėl diskomfortas ir jautrumo rizika yra mažesni.
            </p>
            <p>
              Svarbu pabrėžti, kad daugiausia rizikų kyla ne dėl profesionalaus balinimo, o dėl nekontroliuojamo ar netinkamo balinimo namuose, naudojant neaiškios kilmės priemones. Todėl prieš nusprendžiant balinti dantis, rekomenduojama konsultuotis su odontologu, kuris įvertins situaciją ir pasiūlys saugiausią sprendimą.
            </p>
          </div>
        </motion.section>

        {/* EIGA (STEPS) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kaip vyksta dantų balinimo procedūra klinikoje?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Siekiant saugaus ir prognozuojamo rezultato, dantų balinimas Bangų odontologijos klinikoje atliekamas pagal aiškią ir pacientui suprantamą eigą. Prieš pasirenkant konkretų balinimo metodą, visada įvertinama individuali burnos būklė.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2">1. Konsultacija ir įvertinimas</h3>
              <p className="text-sm text-slate-600">Odontologas apžiūri dantis, įvertina emalio būklę, restauracijas ir tinkamumą. Aptariami lūkesčiai.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2">2. Pasiruošimas balinimui</h3>
              <p className="text-sm text-slate-600">Jei reikia, atliekama profesionali higiena apnašų pašalinimui ir tolygiam efektui.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2">3. Balinimo procedūra</h3>
              <p className="text-sm text-slate-600">Atliekama ofisinė BEYOND® procedūra arba perduodamos kapos su instrukcijomis.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-darkblue-700 mb-2">4. Rekomendacijos po balinimo</h3>
              <p className="text-sm text-slate-600">Suteikiamos instrukcijos, kaip prižiūrėti dantis, kad rezultatas būtų ilgaamžis.</p>
            </div>
          </div>

          <p className="text-slate-700 mt-6 leading-relaxed">
            Toks nuoseklus procesas leidžia užtikrinti, kad dantų balinimas Klaipėdoje būtų ne tik efektyvus, bet ir saugus bei pritaikytas kiekvienam pacientui.
          </p>
        </motion.section>

        {/* PO BALINIMO */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Ką svarbu žinoti po dantų balinimo?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Po profesionalaus dantų balinimo dantys tampa pastebimai šviesesni, tačiau pirmosiomis dienomis po procedūros emalis gali būti jautresnis išoriniams veiksniams. Tai normali ir laikina reakcija, kuri dažniausiai praeina per trumpą laiką. Siekiant išsaugoti pasiektą balinimo rezultatą ir sumažinti galimą jautrumą, svarbu laikytis odontologo pateiktų rekomendacijų.
            </p>
            <p>
              Pirmąsias 24 valandas po balinimo rekomenduojama vengti dažančių produktų, tokių kaip kava, arbata, raudonas vynas, spalvoti gėrimai ar intensyvaus pigmento turintis maistas. Taip pat patariama nerūkyti ir nenaudoti spalvotų dantų pastų ar burnos skalavimo skysčių, kurie gali turėti įtakos dantų atspalviui.
            </p>
            <p>
              Kasdienė burnos priežiūra po balinimo turėtų būti švelni ir nuosekli. Rekomenduojama valyti dantis minkštu šepetėliu, naudoti jautriems dantims skirtą dantų pastą ir vengti pernelyg didelio spaudimo. Jei odontologas rekomenduoja papildomas priemones, pavyzdžiui, remineralizuojančius gelius, svarbu juos naudoti pagal nurodymus.
            </p>
            <p>
              Laikantis šių rekomendacijų, balinimo rezultatas išlieka ilgiau, o dantų jautrumas – sumažėja. Reguliarūs profilaktiniai vizitai ir tinkama kasdienė priežiūra padeda išlaikyti estetišką šypseną ir ilgalaikį dantų baltumą.
            </p>
          </div>
        </motion.section>

        {/* REZULTATO TRUKMĖ */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kiek laiko išlieka dantų balinimo rezultatas?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Dantų balinimo rezultato išliekamumas priklauso nuo kelių veiksnių, todėl kiekvieno paciento patirtis gali skirtis. Vidutiniškai profesionalaus balinimo rezultatas išlieka nuo vienerių iki dvejų metų, tačiau tinkama priežiūra gali šį laikotarpį pailginti.
            </p>
            <p>
              Didžiausią įtaką balinimo efekto trukmei turi kasdieniai įpročiai. Dažnas kavos, arbatos, raudono vyno vartojimas, rūkymas ar intensyviai dažantis maistas gali greičiau pakeisti dantų atspalvį. Taip pat svarbi reguliari burnos higiena ir profilaktiniai vizitai, padedantys palaikyti švarius dantų paviršius.
            </p>
            <p>
              Ofisinis dantų balinimas BEYOND® sistema dažniausiai suteikia ryškesnį ir greitesnį rezultatą, o balinimas kapomis namuose gali būti naudojamas kaip palaikomoji priemonė, padedanti išlaikyti pasiektą dantų spalvą ilgesnį laiką. Odontologas, įvertinęs individualią situaciją, gali rekomenduoti optimalų balinimo kartojimo intervalą ar papildomas priežiūros priemones.
            </p>
            <p>
              Svarbu suprasti, kad dantų balinimas nėra vienkartinis sprendimas visam gyvenimui – tai procesas, kurio rezultatas priklauso nuo ilgalaikės priežiūros ir paciento įpročių.
            </p>
          </div>
        </motion.section>

        {/* KAM NETINKA */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kam dantų balinimas netinka?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Nors dantų balinimas yra saugi ir efektyvi estetinė procedūra, ji ne visada tinka kiekvienam pacientui. Prieš atliekant balinimą Bangų odontologijos klinikoje visuomet įvertinama individuali burnos būklė, kad procedūra būtų ne tik veiksminga, bet ir saugi.
            </p>

            <div className="bg-red-50 p-6 rounded-2xl border border-red-100">
              <h3 className="font-semibold text-red-800 mb-2">Dantų balinimas gali būti nerekomenduojamas arba atidedamas, jei:</h3>
              <ul className="list-disc pl-5 space-y-2 text-red-900/80">
                <li>nustatytas aktyvus kariesas ar kitos uždelstos gydyti dantų ligos</li>
                <li>yra dantenų uždegimas ar periodonto ligos, kurios pirmiausia turi būti gydomos</li>
                <li>dantų emalis yra labai plonas ar pažeistas, todėl padidėja jautrumo rizika</li>
                <li>priekinėje srityje yra plombų, vainikėlių ar laminačių, kurių spalva po balinimo nepasikeičia</li>
                <li>pacientė yra nėščia arba žindymo laikotarpiu, kai estetinės procedūros dažniausiai atidedamos</li>
              </ul>
            </div>

            <p>
              Tokiais atvejais odontologas pasiūlo alternatyvius sprendimus arba rekomenduoja pirmiausia atlikti gydomąsias procedūras. Atsakingas vertinimas padeda išvengti nepageidaujamų rezultatų ir užtikrina, kad dantų balinimas būtų atliekamas tik tada, kai jis iš tiesų yra tinkamas.
            </p>
          </div>
        </motion.section>

        {/* MITAI (ACCORDION STYLE) */}
        <motion.section className="mb-12" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Dažniausi mitai apie dantų balinimą
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mitas #1: po balinimo dantys tampa silpnesni</h3>
              <p className="text-slate-600 text-sm">Balinimas nekeičia danties tvirtumo ar atsparumo. Tinkamai atlikta procedūra nesilpnina dantų, o naudojamos papildomos priežiūros priemonės gali net padėti sustiprinti emalio paviršių.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mitas #2: dantų balinimas pažeidžia dantų emalį</h3>
              <p className="text-slate-600 text-sm">Profesionalus dantų balinimas, atliekamas odontologo priežiūroje, nepažeidžia dantų emalio. Šiuolaikinės balinimo sistemos, tokios kaip BEYOND®, sukurtos taip, kad veiktų pigmentus, bet išsaugotų natūralią emalio struktūrą.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mitas #3: dantų balinimas visada yra skausmingas</h3>
              <p className="text-slate-600 text-sm">Dauguma pacientų dantų balinimą apibūdina kaip komfortišką procedūrą. Šiuolaikiniai metodai leidžia sumažinti diskomfortą, o jei jautrumas ir pasireiškia, jis dažniausiai būna trumpalaikis.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mitas #4: visų žmonių dantys išbąla vienodai</h3>
              <p className="text-slate-600 text-sm">Rezultatas yra individualus ir priklauso nuo pradinės spalvos, emalio struktūros bei pigmentacijos kilmės. Prieš procedūrą visuomet aptariami realūs lūkesčiai.</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-2">Mitas #5: balinimas veikia plombas ir vainikėlius</h3>
              <p className="text-slate-600 text-sm">Balinimo priemonės veikia tik natūralų danties audinį – plombos, vainikėliai ar laminatės nebąla. Todėl svarbu įvertinti restauracijas prieš balinimą.</p>
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
              Renkantis dantų balinimo paslaugas svarbu ne tik pats rezultatas, bet ir procedūros saugumas, naudojamos technologijos bei specialistų patirtis. Bangų odontologijos klinikoje dantų balinimas atliekamas taikant modernius ir patikimus metodus, užtikrinančius estetišką, tačiau dantų emaliui saugų rezultatą.
            </p>
            <p>
              Klinikoje dirbantys specialistai individualiai įvertina kiekvieno paciento dantų būklę ir lūkesčius, todėl parenkamas tinkamiausias balinimo metodas – ofisinis balinimas BEYOND® sistema arba balinimas kapomis namuose. Didelis dėmesys skiriamas ne tik pačiai procedūrai, bet ir rekomendacijoms po jos, kad pasiektas rezultatas išliktų kuo ilgiau.
            </p>
            <p>
              Bangų odontologijos klinikoje naudojamos pažangios technologijos, aiškiai paaiškinama gydymo eiga ir užtikrinama skaidri kainodara. Toks požiūris leidžia pacientams jaustis ramiai ir užtikrintai, o teigiami dantų balinimo atsiliepimai dažnai pabrėžia profesionalų bendravimą, komfortą procedūros metu ir džiuginantį galutinį rezultatą.
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div className="mt-8 mb-12 text-center" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kviečiame registruotis dantų balinimui Bangų klinikoje
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Jeigu ieškote patikimos ir profesionalios odontologijos klinikos, kurioje atliekamas saugus ir efektyvus dantų balinimas Klaipėdoje, kviečiame apsilankyti Bangų odontologijos klinikoje. Mūsų pacientai vertina ne tik matomą estetinį pokytį, bet ir aiškias konsultacijas, dėmesingą požiūrį bei ilgalaikį rezultatą, kurį patvirtina jų atsiliepimai.
            <br /><br />
            Bangų odontologijos klinikoje Jūsų laukia modernios balinimo technologijos, patyrę specialistai ir individualūs sprendimai, pritaikyti kiekvienam pacientui. Registruokitės konsultacijai ir ženkite pirmą žingsnį link šviesesnės, pasitikėjimą suteikiančios šypsenos.
          </p>
          <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
            Registruotis vizitui
          </Link>
        </motion.div>

      </motion.div>
    </AnimatedSection>
  )
}