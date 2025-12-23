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

export default function EstetinisPlombavimas() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": "Estetinis dantų plombavimas",
    "description": "Estetinis dantų plombavimas Klaipėdoje. Šypsenos korekcija, tarpų uždarymas, nuskilusių dantų atstatymas.",
    "provider": {
      "@type": "Dentist",
      "name": "Bangų klinika"
    }
  }

  return (
    <AnimatedSection>
      <SEO
        title="Estetinis dantų plombavimas Klaipėdoje - Bangų odontologijos klinika"
        description="Estetinis dantų plombavimas – greitas ir efektyvus būdas atkurti šypseną. Koreguojame nuskilimus, tarpus ir spalvą. Registruokitės konsultacijai."
        keywords="estetinis plombavimas, dantu restauracija, sypsenos korekcija, tarpai tarp dantu, klaipeda"
        structuredData={structuredData}
      />

      <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">
        
        {/* HERO / ĮŽANGA */}
        <motion.header className="mb-12 text-center sm:text-left" variants={item}>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
            Profesionalus estetinis dantų plombavimas Klaipėdoje
          </h1>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-4 mb-8">
            <p>
              Šypsenos estetika turi didelę įtaką pasitikėjimui savimi ir bendrai savijautai. Net ir nedideli dantų defektai – nuskilimai, nudilimai, tarpai ar spalvos netolygumai – gali pastebimai keisti šypsenos vaizdą. Tokiais atvejais estetinis plombavimas tampa greitu ir efektyviu sprendimu, leidžiančiu atkurti natūralią dantų išvaizdą be sudėtingų ir ilgalaikių procedūrų.
            </p>
            <p>
              Bangų odontologijos klinikoje Klaipėdoje atliekamas dantų estetinis plombavimas yra viena iš pagrindinių estetinės odontologijos paslaugų. Procedūros metu siekiama ne tik pagerinti dantų išvaizdą, bet ir maksimaliai išsaugoti natūralų danties audinį. Individualus požiūris, modernios medžiagos ir kruopštus darbas leidžia pasiekti harmoningą ir natūraliai atrodančią šypseną.
            </p>
          </div>
          
          {/* CTA MYGTUKAS VIRŠUJE */}
          <div className="flex justify-center sm:justify-start">
             <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-3 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
              Registruotis vizitui
            </Link>
          </div>
        </motion.header>

        {/* KAS YRA ESTETINIS PLOMBAVIMAS */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kas yra estetinis plombavimas?
          </h2>
          <div className="bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10 space-y-4 text-slate-700 leading-relaxed">
            <p>
              Estetinis plombavimas – tai odontologinė procedūra, kurios metu dantys atkuriami sluoksniavimo metodu, naudojant aukštos estetikos restauracines medžiagas. Šis metodas leidžia tiksliai atkurti danties formą, spalvą, paviršiaus tekstūrą ir natūralų blizgesį, kartu maksimaliai apsaugant sveikus danties audinius.
            </p>
            <p>
              Estetinio plombavimo metu gali būti atstatomi nudilę, nuskilę, ėduonies ar kitaip pažeisti dantys, taip pat koreguojama jų forma, uždaromi tarpai tarp dantų ar švelniai pakoreguojamas dantų atspalvis. Priklausomai nuo situacijos, galima koreguoti vieną dantį arba net kelis priekinius dantis vieno vizito metu, todėl rezultatas dažnai pasiekiamas tą pačią dieną.
            </p>
            <p>
              Bangų odontologijos klinikoje naudojamos modernios restauracinės medžiagos leidžia minimaliai keisti kietuosius danties audinius ir išlaikyti ilgalaikį rezultatą. Vieno danties restauracija vidutiniškai trunka apie 1,5 valandos, o prieš procedūrą dažniausiai rekomenduojama atlikti profesionalią burnos higieną, kad būtų užtikrintas optimalus estetinis ir funkcinis rezultatas. Toks požiūris leidžia pasiekti aukštą kokybę, kurios ieško pacientai, besidomintys geriausiu estetiniu plombavimu Klaipėdoje.
            </p>
          </div>
        </motion.section>

        {/* KOKIAS PROBLEMAS GALIMA IŠSPRĘSTI */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kokias problemas galima išspręsti estetiniu plombavimu?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Estetinis plombavimas yra universali procedūra, leidžianti išspręsti įvairias – tiek estetines, tiek funkcines – dantų problemas. Dėl sluoksniavimo technikos ir modernių restauracinių medžiagų galima itin tiksliai atkurti natūralią dantų išvaizdą, pritaikant ją prie visos šypsenos proporcijų.
          </p>
          
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold text-darkblue-700">Dažniausiai estetiniu plombavimu sprendžiamos šios problemos:</h3>
            <div className="grid sm:grid-cols-1 gap-3">
              {[
                "Nudilę ar nuskilę dantys, kai pažeistas danties kraštas ar paviršius",
                "Ėduonies pažeisti dantys, kai svarbu ne tik gydymas, bet ir estetiškas atstatymas",
                "Tarpai tarp dantų (diastemos), ypač priekinių dantų srityje",
                "Netaisyklinga dantų forma ar ilgis, kai dantys atrodo per trumpi ar nevienodi",
                "Spalvos netolygumai, kurių neįmanoma pašalinti dantų balinimu"
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                  <span className="mt-1"><CheckIcon /></span>
                  <span className="text-slate-700">{text}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed">
            Priklausomai nuo situacijos, estetiniu plombavimu galima koreguoti vieną dantį arba kelis dantis vienu metu. Vieno vizito metu dažnai atkuriami 4–6 priekiniai dantys, todėl pacientas rezultatą mato tą pačią dieną. Tai ypač patrauklus sprendimas tiems, kurie ieško greito ir efektyvaus sprendimo estetinės odontologijos srityje.
          </p>
        </motion.section>

        {/* KAIP ATLIEKAMAS ESTETINIS PLOMBAVIMAS (STEPS) */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Kaip atliekamas estetinis plombavimas?
          </h2>
          <p className="text-slate-700 mb-6 leading-relaxed">
            Estetinis plombavimas Bangų odontologijos klinikoje atliekamas laikantis nuoseklios ir kruopščiai suplanuotos procedūros eigos, užtikrinančios tiek estetiką, tiek dantų ilgaamžiškumą. Kiekvienas etapas pritaikomas individualiai, atsižvelgiant į paciento dantų būklę ir norimą pasiekti rezultatą.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
               <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">01</div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Konsultacija ir planavimas</h3>
              <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                Procedūra pradedama išsamia apžiūra, kurios metu įvertinama dantų būklė, forma, spalva ir sąkandis. Aptariami paciento lūkesčiai ir galimos korekcijos ribos, siekiant natūralaus rezultato.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
               <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">02</div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Pasiruošimas procedūrai</h3>
              <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                Prieš estetinį plombavimą dažniausiai rekomenduojama atlikti profesionalią burnos higieną. Tai padeda užtikrinti švarų dantų paviršių ir geresnį restauracinių medžiagų sukibimą.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
               <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">03</div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Dantų restauravimas sluoksniais</h3>
              <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                Naudojant modernias plombines medžiagas, dantis atkuriamas sluoksniais, formuojant natūralią danties anatomiją ir atspalvį. Vieno danties restauracija vidutiniškai trunka apie 1,5 valandos, o darbas atliekamas maksimaliai tausojant sveikus danties audinius.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm relative overflow-hidden group">
               <div className="text-6xl font-bold text-brand/10 absolute top-0 right-4 select-none pointer-events-none group-hover:text-brand/20 transition-colors">04</div>
              <h3 className="font-bold text-darkblue-700 mb-2 relative z-10">Galutinis formavimas ir poliravimas</h3>
              <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                Procedūra užbaigiama kruopščiu dantų paviršiaus poliravimu, kad atkurti dantys būtų lygūs, blizgūs ir harmoningai įsilietų į bendrą šypsenos vaizdą.
              </p>
            </div>
          </div>
          
          <p className="text-slate-700 mt-6 leading-relaxed">
            Toks nuoseklus procesas leidžia pasiekti estetišką, natūralų ir ilgalaikį rezultatą, kurio tikisi pacientai, ieškantys geriausio estetinio plombavimo Klaipėdoje.
          </p>
        </motion.section>

        {/* PRIVALUMAI */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kokie estetinio plombavimo privalumai?
          </h2>
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4 text-slate-700 leading-relaxed">
            <p>
              Estetinis plombavimas vertinamas kaip viena universaliausių estetinės odontologijos procedūrų, nes leidžia pasiekti ryškų rezultatą minimaliai invaziniu būdu. Šis metodas tinka pacientams, kurie nori pagerinti šypsenos estetiką, išsaugant kuo daugiau natūralaus danties audinio.
            </p>
            <p>
              Vienas pagrindinių estetinio plombavimo privalumų – greitas rezultatas. Dažnu atveju vieno vizito metu galima atkurti net 4–6 priekinius dantis, todėl šypsenos pokytis matomas tą pačią dieną. Tai ypač aktualu pacientams, ieškantiems efektyvaus sprendimo prieš svarbias asmenines ar profesines progas.
            </p>
            <p>
              Procedūros metu naudojamos modernios restauracinės medžiagos, kurios leidžia itin tiksliai atkurti dantų spalvą, formą ir paviršiaus tekstūrą. Dantys atkuriami sluoksniais, todėl galutinis vaizdas atrodo natūraliai ir harmoningai įsilieja į bendrą šypsenos estetiką.
            </p>
            <p>
              Svarbus privalumas – minimalus dantų šlifavimas arba tam tikrais atvejais visai jokio. Tai leidžia maksimaliai išsaugoti sveikus kietuosius audinius, o pati procedūra yra tausojanti ir saugi. Dėl šių savybių estetinis plombavimas dažnai pasirenkamas kaip alternatyva sudėtingesniam protezavimui ar laminatėms, ypač tada, kai siekiama greito ir estetiškai patrauklaus sprendimo.
            </p>
          </div>
        </motion.section>

        {/* KAINOS */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
            Estetinio plombavimo kainos mūsų klinikoje
          </h2>
          <div className="text-slate-700 leading-relaxed space-y-4 mb-6">
            <p>
              Estetinio plombavimo kaina priklauso nuo restauruojamo danties būklės, pažeidimo apimties ir reikalingų estetinių korekcijų. Prieš procedūrą visuomet atliekama konsultacija, kurios metu įvertinama situacija ir parenkamas tinkamiausias gydymo sprendimas, leidžiantis pasiekti optimalų estetinį ir funkcinį rezultatą.
            </p>
          </div>

          <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
            <div className="divide-y divide-slate-100">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 hover:bg-brand-50/30 transition">
                <span className="text-slate-700 font-medium">Estetinis vieno danties plombavimas</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap mt-2 sm:mt-0 ml-0 sm:ml-4">150 – 200 €</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 hover:bg-brand-50/30 transition">
                <span className="text-slate-700 font-medium">Estetinės plombos poliravimas (atnaujinimas)</span>
                <span className="text-darkblue-700 font-bold whitespace-nowrap mt-2 sm:mt-0 ml-0 sm:ml-4">nuo 29 €</span>
              </div>
            </div>
          </div>

          <div className="text-slate-700 leading-relaxed space-y-4">
             <p>
               Procedūros metu dantis atkuriamas sluoksniavimo metodu, pritaikant formą, spalvą ir paviršiaus tekstūrą prie natūralių dantų.
             </p>
             <p>
               Jeigu reikalingas tik jau esamos restauracijos atnaujinimas, atliekamas estetinės plombos poliravimas. Ši procedūra padeda atkurti blizgesį, pagerinti estetinį vaizdą ir prailginti restauracijos tarnavimo laiką.
             </p>
             <p>
               Tiksli procedūros apimtis ir galutinė kaina aptariama individualios konsultacijos metu, atsižvelgiant į paciento poreikius ir norimą rezultatą. Skaidri kainodara leidžia priimti užtikrintą sprendimą dėl estetinės odontologijos paslaugų Klaipėdoje – mūsų klinikoje.
             </p>
          </div>
        </motion.section>

        {/* KIEK LAIKO IŠLIEKA */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kiek laiko išlieka estetinio plombavimo rezultatas?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Estetinio plombavimo rezultato ilgaamžiškumas priklauso nuo kelių veiksnių, todėl kiekvieno paciento atvejis yra individualus. Tinkamai atliktas estetinis plombavimas ir atsakinga priežiūra leidžia džiaugtis estetišku ir funkcionaliu rezultatu daugelį metų.
            </p>
            <p>
              Didžiausią įtaką rezultatui turi kasdieniai burnos priežiūros įpročiai. Reguliarus dantų valymas, tarpdančių higiena ir profilaktiniai vizitai pas odontologą padeda išlaikyti restauracijų estetinę išvaizdą ir struktūrinį stabilumą. Taip pat svarbūs mitybos įpročiai ir žalingų veiksnių, tokių kaip kietų daiktų kandimas ar nagų kramtymas, vengimas.
            </p>
            <p>
              Rezultato trukmei įtakos turi ir restauracijos vieta bei apimtis. Priekinių dantų estetinis plombavimas, kuris nėra veikiamas didelės kramtymo apkrovos, dažnai išlieka ilgiau. Laikui bėgant restauracijos gali natūraliai dėvėtis, todėl kai kuriais atvejais gali prireikti nedidelių korekcijų ar poliravimo, leidžiančių atnaujinti estetinį vaizdą ir prailginti plombų tarnavimo laiką.
            </p>
          </div>
        </motion.section>

        {/* KĄ SVARBU ŽINOTI PO */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Ką svarbu žinoti po estetinio plombavimo?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
             <p>
               Po estetinio plombavimo procedūros pacientai dažniausiai iš karto pastebi šypsenos estetikos pagerėjimą. Atkurtų dantų paviršiai tampa lygūs, blizgūs ir natūraliai dera su likusiais dantimis. Vis dėlto pirmosiomis dienomis po procedūros svarbu laikytis tam tikrų rekomendacijų, kad rezultatas išliktų kuo ilgiau.
             </p>
             <div className="bg-brand-50/30 p-6 rounded-xl border border-brand/10">
               <p className="mb-4">
                 Pirmąsias valandas po procedūros rekomenduojama vengti labai kieto ar itin dažančio maisto ir gėrimų, ypač jei buvo atkuriami priekiniai dantys. Taip pat patariama nenaudoti dantų kaip įrankių ir vengti didelio mechaninio krūvio restauruotai vietai.
               </p>
               <p>
                 Kasdienė burnos priežiūra po estetinio plombavimo turėtų būti švelni, bet nuosekli. Rekomenduojama valyti dantis minkštu arba vidutinio minkštumo šepetėliu, naudoti neabrazyvią dantų pastą ir reguliariai valyti tarpdančius. Jei odontologas pateikia individualias rekomendacijas, svarbu jų laikytis.
               </p>
             </div>
             <p>
               Reguliarūs profilaktiniai vizitai ir, esant poreikiui, estetinės plombos poliravimas padeda išsaugoti restauracijų blizgesį, spalvą ir bendrą estetinį vaizdą. Toks nuoseklus požiūris leidžia ilgą laiką džiaugtis tvarkinga ir harmoningai atrodančia šypsena.
             </p>
          </div>
        </motion.section>

        {/* AR SAUGU */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Ar estetinis plombavimas yra saugus?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Estetinis plombavimas yra saugi ir plačiai taikoma odontologinė procedūra, kai ji atliekama laikantis šiuolaikinių gydymo standartų ir naudojant kokybiškas restauracines medžiagas. Bangų odontologijos klinikoje ši procedūra planuojama individualiai, siekiant maksimaliai apsaugoti natūralius danties audinius ir užtikrinti ilgalaikį rezultatą.
            </p>
            <p>
              Procedūros metu naudojamos modernios plombinės medžiagos pasižymi geru biologiniu suderinamumu, tvirtumu ir estetinėmis savybėmis. Dantys atkuriami sluoksniais, todėl išsaugoma jų natūrali struktūra, o intervencija yra minimali. Daugeliu atvejų nereikalingas didelis dantų šlifavimas, o tai sumažina jautrumo ir kitų nepageidaujamų pojūčių riziką.
            </p>
            <p>
              Svarbu pabrėžti, kad saugumas priklauso ne tik nuo medžiagų, bet ir nuo tinkamo planavimo bei specialisto patirties. Prieš procedūrą įvertinama dantų būklė, sąkandis ir paciento lūkesčiai, todėl estetinis plombavimas atliekamas tik tada, kai jis yra tinkamas ir gali užtikrinti prognozuojamą rezultatą.
            </p>
          </div>
        </motion.section>

        {/* KODĖL MES */}
        <motion.section className="mb-14" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Renkantis estetinį plombavimą svarbu pasitikėti klinika, kurioje vyrauja profesionali patirtis, estetinė nuovoka ir atsakingas požiūris į kiekvieną pacientą. Bangų odontologijos klinikoje estetinė odontologija grindžiama individualiais sprendimais ir kruopščiu darbo planavimu.
            </p>
            <p>
              Klinikoje dirbantys specialistai didelį dėmesį skiria ne tik techniniam procedūros atlikimui, bet ir galutiniam estetikos pojūčiui – atkuriama dantų forma, proporcijos ir spalvos dermė visoje šypsenoje. Naudojamos modernios technologijos ir aukštos kokybės medžiagos leidžia pasiekti natūraliai atrodantį ir ilgalaikį rezultatą.
            </p>
            <p>
              Pacientai vertina aiškią komunikaciją, skaidrią kainodarą ir nuoseklų požiūrį į gydymą, o teigiami atsiliepimai dažnai pabrėžia profesionalų bendravimą, kruopštumą ir džiuginantį galutinį rezultatą. Tai ypač svarbu pacientams, ieškantiems patikimo sprendimo Klaipėdoje.
            </p>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div className="mt-8 mb-12 text-center" variants={item}>
          <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
            Kviečiame registruotis estetiniam plombavimui Bangų klinikoje
          </h2>
          <p className="text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Jeigu ieškote patikimos odontologijos klinikos, kurioje atliekamas saugus ir estetiškai aukštos kokybės dantų estetinis plombavimas, kviečiame apsilankyti Bangų odontologijos klinikoje. Čia Jūsų laukia ne tik individualus požiūris, modernios technologijos ir patyrę specialistai, siekiantys natūralaus bei ilgalaikio rezultato, bet ir geriausias estetinis plombavimas Klaipėdoje.
            <br/><br/>
            Registruokitės konsultacijai ir ženkite pirmą žingsnį link harmoningos, tvarkingos ir pasitikėjimą suteikiančios šypsenos.
          </p>
          <Link to="/kontaktai" className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1">
            Registruotis vizitui
          </Link>
        </motion.div>

      </motion.div>
    </AnimatedSection>
  )
}