import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import AnimatedSection from "../components/AnimatedSection"
import SEO from "../components/SEO"

// Animacijų nustatymai
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

// Ikonos
function CheckIcon() {
    return (
        <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 text-brand" aria-hidden>
            <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
    )
}

function ShieldCheckIcon() {
    return (
        <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
        </svg>
    )
}

function CubeIcon() {
    return (
        <svg className="w-8 h-8 text-brand mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
        </svg>
    )
}

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

    return (
        <AnimatedSection>
            <SEO
                title="Dantų implantacija Klaipėdoje - Bangų klinika"
                description="Dantų implantacija Klaipėdoje – pažangiausias prarastų dantų atkūrimo sprendimas. Ilgaamžiai Straumann® ir Neodent® implantai, ALL-ON-4 metodas, skaidri kainodara."
                keywords="dantu implantacija, implantai klaipeda, straumann, neodent, all-on-4, dantu atkurimas, bangų klinika"
                structuredData={structuredData}
            />

            <motion.div className="container-narrow" variants={container} initial="hidden" animate="visible">
                {/* HERO */}
                <motion.header className="mb-10 text-center sm:text-left" variants={item}>
                    <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-darkblue-700 mb-6">
                        Dantų implantacija
                    </h1>

                    <h2 className="text-lg sm:text-xl font-semibold text-darkblue-700 mb-4">
                        Dantų implantacija Klaipėdoje – pažangiausias prarastų dantų atkūrimo sprendimas
                    </h2>

                    <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed mb-8">
                        <p className="mb-4">
                            Prarasti dantys – tai ne tik estetinė problema. Jie daro tiesioginę įtaką kramtymo funkcijai, kalbai,
                            sąkandžiui, veido proporcijoms ir bendrai gyvenimo kokybei. Ilgainiui netekus vieno ar kelių dantų, keičiasi
                            visa burnos sistema: gretimi dantys pradeda slinkti, didėja apkrova likusiems dantims, nyksta žandikaulio
                            kaulas, o veido bruožai gali tapti labiau įkritę. Dėl šių priežasčių šiuolaikinėje odontologijoje vis daugiau
                            dėmesio skiriama ne tik laikiniems sprendimams, bet ilgalaikiam, patikimam ir fiziologiškai teisingam dantų
                            atkūrimui.
                        </p>
                        <p className="mb-4">
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

                {/* KAS YRA IMPLANTACIJA */}
                <motion.section className="mb-12 bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10" variants={item}>
                    <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Kas yra dantų implantacija?</h2>
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

                {/* IŠ KO SUDARYTA (CHECKLIST / KORTELĖS) */}
                <motion.section className="mb-12" variants={item}>
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
                            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                                <span className="mt-1">
                                    <CheckIcon />
                                </span>
                                <span className="text-slate-700">{text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-slate-700 leading-relaxed mt-6">
                        Šių dalių visuma leidžia sukurti sprendimą, kuris vizualiai ir funkciškai kuo labiau primena natūralų dantį.
                    </p>
                </motion.section>

                {/* KUO SKIRIASI NUO KITŲ METODŲ */}
                <motion.section className="mb-12" variants={item}>
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
                </motion.section>

                {/* AR VISIEMS TINKA (CHECKLIST) */}
                <motion.section className="mb-12" variants={item}>
                    <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                        Ar implantacija – visiems tinkamas sprendimas?
                    </h2>

                    <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                        <p>
                            Dantų implantacija gali būti taikoma daugeliui pacientų, tačiau prieš gydymą visuomet atliekamas išsamus
                            įvertinimas. Svarbiausi veiksniai – bendroji burnos būklė, žandikaulio kaulo kiekis ir paciento sveikatos
                            būklė. Net ir tais atvejais, kai kaulo trūksta, šiuolaikinė odontologija siūlo sprendimus, leidžiančius
                            pasiruošti implantacijai.
                        </p>
                        <p>Implantacija gali būti taikoma:</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                        {[
                            "netekus vieno danties",
                            "netekus kelių dantų",
                            "netekus visų dantų viename ar abiejuose žandikauliuose",
                            "pacientams, nepatenkintiems išimamais protezais",
                        ].map((text, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                                <span className="mt-1">
                                    <CheckIcon />
                                </span>
                                <span className="text-slate-700">{text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-slate-700 leading-relaxed mt-6">
                        Svarbiausia – individualus planavimas ir tinkamai parinkta gydymo strategija, leidžianti pasiekti stabilų ir
                        ilgalaikį rezultatą.
                    </p>
                </motion.section>

                {/* KODĖL SVARBU ATSTATYTI GREIČIAU */}
                <motion.section className="mb-12" variants={item}>
                    <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                        Kodėl prarastą dantį svarbu atstatyti kuo greičiau?
                    </h2>

                    <div className="space-y-4 text-slate-700 leading-relaxed mb-8">
                        <p>
                            Prarasto danties atkūrimas neturėtų būti atidedamas ilgam laikui. Nors iš pradžių gali atrodyti, kad vieno
                            danties netekimas nesukelia didelių nepatogumų, ilgainiui burnoje prasideda sudėtingi ir dažnai nepastebimi
                            pokyčiai, kurie gali turėti įtakos tiek burnos sveikatai, tiek bendrai savijautai.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-darkblue-700 mb-2">Gretimų dantų slinkimas ir sąkandžio pokyčiai</h3>
                            <p className="text-slate-700 leading-relaxed text-sm">
                                Netekus danties, atsiradusi tuščia vieta burnoje niekada nelieka „neutrali“. Gretimi dantys palaipsniui
                                pradeda slinkti į susidariusį tarpą, o priešpriešiniai dantys gali išilgėti. Dėl šių pokyčių keičiasi
                                sąkandis, atsiranda netolygios kramtymo apkrovos, didėja kitų dantų dilimo ar lūžių rizika. Laikui bėgant
                                tai gali sukelti žandikaulio sąnario diskomfortą, galvos ar kaklo skausmus.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-darkblue-700 mb-2">Žandikaulio kaulo nykimas</h3>
                            <p className="text-slate-700 leading-relaxed text-sm">
                                Natūralaus danties šaknis stimuliuoja žandikaulio kaulą kramtymo metu. Netekus danties, ši stimuliacija
                                išnyksta, todėl kaulas toje vietoje pradeda nykti. Kaulo rezorbcija vyksta palaipsniui, tačiau ji yra
                                neišvengiama, jei dantis neatstatomas. Kuo ilgiau laukiama, tuo labiau sumažėja kaulo tūris, o tai gali
                                apsunkinti ar net apriboti galimybes ateityje atlikti implantaciją be papildomų procedūrų.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-darkblue-700 mb-2">Kramtymo funkcijos ir virškinimo problemos</h3>
                            <p className="text-slate-700 leading-relaxed text-sm">
                                Trūkstant dantų, kramtymo funkcija tampa neefektyvi. Maistas nėra tinkamai susmulkinamas, todėl didesnė
                                apkrova tenka virškinimo sistemai. Ilgainiui tai gali sukelti ne tik diskomfortą valgant, bet ir virškinimo
                                sutrikimus. Be to, žmonės dažnai pradeda vengti kietesnio maisto, o tai daro įtaką mitybos kokybei.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-darkblue-700 mb-2">Burnos higienos ir dantenų problemos</h3>
                            <p className="text-slate-700 leading-relaxed text-sm">
                                Tarpai tarp dantų tampa vieta, kurioje lengviau kaupiasi maisto likučiai ir bakterijos. Tai apsunkina
                                kasdienę burnos higieną ir didina dantenų uždegimo, karieso ar nemalonaus burnos kvapo riziką. Net ir
                                kruopščiai prižiūrint dantis, neužpildyta danties vieta gali tapti nuolatiniu problemų židiniu.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 grid gap-6 md:grid-cols-2">
                        <div className="bg-brand-50/30 p-6 rounded-2xl border border-brand/10">
                            <h3 className="font-bold text-darkblue-700 mb-2">Veido estetikos ir pasitikėjimo savimi pokyčiai</h3>
                            <p className="text-slate-700 leading-relaxed text-sm">
                                Ilgainiui dėl kaulo nykimo ir sąkandžio pakitimų gali keistis veido kontūrai – atsirasti įkritę skruostai,
                                gilesnės raukšlės, veidas gali atrodyti senesnis. Be to, dantų netekimas dažnai turi ir psichologinį
                                poveikį: žmonės pradeda vengti šypsotis, jaustis nejaukiai bendraudami ar fotografuodamiesi.
                            </p>
                        </div>

                        <div className="bg-brand-50/30 p-6 rounded-2xl border border-brand/10">
                            <h3 className="font-bold text-darkblue-700 mb-2">Ankstyvas atkūrimas – mažiau sudėtingas gydymas</h3>
                            <p className="text-slate-700 leading-relaxed text-sm">
                                Kuo greičiau atkuriamas prarastas dantis, tuo paprastesnis ir prognozuojamesnis tampa gydymas. Laiku
                                atlikta implantacija leidžia išvengti papildomų procedūrų, tokių kaip kaulo priauginimas, ir sutrumpina
                                visą gydymo procesą. Tai ne tik palengvina gydymą, bet ir padeda pasiekti geresnį ilgalaikį rezultatą.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* KAM REIKALINGA (CHECKLIST + KAM TINKAMIAUSIA) */}
                <motion.section className="mb-12" variants={item}>
                    <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">Kam reikalinga dantų implantacija?</h2>

                    <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                        <p>
                            Dantų implantacija yra vienas universaliausių ir plačiausiai pritaikomų sprendimų šiuolaikinėje odontologijoje.
                            Ji gali būti taikoma labai skirtingose situacijose – nuo vieno prarasto danties atkūrimo iki sudėtingų atvejų,
                            kai netekta visų dantų viename ar abiejuose žandikauliuose. Tinkamumas implantacijai visada vertinamas
                            individualiai, tačiau indikacijų spektras yra labai platus.
                        </p>

                        <h3 className="font-semibold text-darkblue-700">Kada reikalinga dantų implantacija?</h3>
                        <p>Implantacija rekomenduojama tada, kai:</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {[
                            "netenkama vieno ar kelių nuolatinių dantų",
                            "dantis buvo pašalintas dėl karieso, periodonto ligų ar traumos",
                            "dantys stipriai pažeisti ir nebetinkami atstatyti plombomis ar vainikėliais",
                            "seniai netekti dantys sukėlė sąkandžio ar kramtymo problemas",
                            "išimami protezai kelia diskomfortą ar nestabilumą",
                        ].map((text, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                                <span className="mt-1">
                                    <CheckIcon />
                                </span>
                                <span className="text-slate-700">{text}</span>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                        <p>
                            Svarbu pabrėžti, kad implantacija gali būti planuojama tiek iškart po danties netekimo, tiek praėjus ilgesniam
                            laikui. Tačiau ankstyvas sprendimas dažnai leidžia išvengti papildomų procedūrų ir sutrumpina visą gydymo
                            procesą.
                        </p>

                        <h3 className="font-semibold text-darkblue-700">Dėl ko pacientai renkasi implantaciją?</h3>
                        <p>
                            Pacientai implantaciją renkasi dėl jos funkcinių, estetinių ir ilgalaikių privalumų. Pagrindinės priežastys:
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                        {[
                            "Natūralus pojūtis – implantais atkurti dantys funkciškai ir vizualiai labiausiai primena natūralius.",
                            "Stabilumas – implantai yra fiksuoti, nejuda ir netrukdo kasdienėje veikloje.",
                            "Kaulo išsaugojimas – implantai padeda sustabdyti žandikaulio kaulo nykimą.",
                            "Gretimų dantų apsauga – nereikia šlifuoti sveikų dantų, kaip tiltų atveju.",
                            "Ilgaamžiškumas – tinkamai prižiūrimi implantai gali tarnauti dešimtmečius.",
                        ].map((text, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                                <span className="mt-1">
                                    <CheckIcon />
                                </span>
                                <span className="text-slate-700">{text}</span>
                            </div>
                        ))}
                    </div>

                    <p className="text-slate-700 leading-relaxed mb-8">
                        Dėl šių savybių implantacija dažnai laikoma ne trumpalaikiu sprendimu, o ilgalaike investicija į burnos sveikatą
                        ir gyvenimo kokybę.
                    </p>

                    <h3 className="text-lg font-semibold text-darkblue-700 mb-4">Kam dantų implantacija yra tinkamiausia?</h3>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h4 className="font-bold text-darkblue-700 mb-2">Pacientams, netekusiems vieno danties</h4>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                Tai leidžia atkurti trūkstamą dantį nepažeidžiant gretimų sveikų dantų ir išlaikyti natūralią burnos
                                struktūrą.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h4 className="font-bold text-darkblue-700 mb-2">Pacientams, netekusiems kelių dantų</h4>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                Implantai gali būti naudojami kaip atrama tiltams ar atskiriems vainikėliams, užtikrinant stabilų ir
                                estetišką rezultatą.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h4 className="font-bold text-darkblue-700 mb-2">Pacientams, netekusiems visų dantų viename žandikaulyje</h4>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                Tokiais atvejais implantacija leidžia atsisakyti išimamų protezų ir pereiti prie fiksuotų sprendimų,
                                atkuriant visą dantų lanką.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h4 className="font-bold text-darkblue-700 mb-2">Pacientams, nešiojantiems išimamus protezus</h4>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                Implantai gali ženkliai pagerinti protezų stabilumą arba visiškai pakeisti juos fiksuotais sprendimais,
                                suteikiančiais daugiau komforto ir pasitikėjimo.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm md:col-span-2">
                            <h4 className="font-bold text-darkblue-700 mb-2">Vyresnio amžiaus pacientams</h4>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                Amžius savaime nėra kliūtis implantacijai. Svarbiausia – bendra sveikatos būklė ir individualus gydymo
                                planavimas.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 bg-brand-50/30 p-6 rounded-2xl border border-brand/10">
                        <h3 className="text-lg font-semibold text-darkblue-700 mb-3">Individualus įvertinimas – būtinas žingsnis</h3>
                        <p className="text-slate-700 leading-relaxed mb-4">
                            Nors dantų implantacija tinka daugeliui pacientų, kiekvienu atveju būtina išsami konsultacija. Jos metu
                            įvertinama:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                            <li>burnos ir dantenų būklė</li>
                            <li>žandikaulio kaulo kiekis</li>
                            <li>bendroji sveikata</li>
                            <li>paciento lūkesčiai ir galimi sprendimai</li>
                        </ul>
                        <p className="text-slate-700 leading-relaxed mt-4">
                            Tik atlikus tokį įvertinimą galima parinkti optimalų implantacijos metodą ir suplanuoti gydymą,
                            užtikrinantį saugų ir ilgalaikį rezultatą.
                        </p>
                    </div>
                </motion.section>

                {/* ALL-ON-4 (HIGHLIGHT) */}
                <motion.section className="mb-12" variants={item}>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1">
                            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                                ALL-ON-4 implantacija – visi dantys per vieną dieną
                            </h2>

                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                <p>
                                    ALL-ON-4 implantacija yra vienas pažangiausių šiuolaikinės odontologijos sprendimų pacientams, netekusiems
                                    visų ar beveik visų dantų viename žandikaulyje. Šis metodas leidžia atkurti visą dantų lanką per vieną
                                    dieną, suteikiant pacientui fiksuotus, stabilius ir estetiškus dantis be ilgų laukimo laikotarpių ir
                                    sudėtingų etapų.
                                </p>
                                <p>
                                    Tai sprendimas, skirtas tiems, kurie nebenori taikstytis su išimamais protezais, nuolatiniu diskomfortu
                                    ar ilgu gydymo procesu. ALL-ON-4 metodas keičia gyvenimo kokybę iš esmės — nuo pirmos dienos pacientas
                                    gali šypsotis, kalbėti ir valgyti su fiksuotais dantimis.
                                </p>

                                <h3 className="font-semibold text-darkblue-700">Kas yra ALL-ON-4 metodas?</h3>
                                <p>
                                    ALL-ON-4 – tai implantacijos technika, kai visas vieno žandikaulio dantų lankas atkuriamas naudojant
                                    keturis implantus. Du implantai sriegiami vertikaliai priekinėje žandikaulio dalyje, o kiti du – pasviru
                                    kampu užpakalinėje srityje. Toks išdėstymas leidžia maksimaliai išnaudoti esamą kaulą ir užtikrinti tvirtą
                                    atramą visam dantų lankui.
                                </p>
                                <p>
                                    Ant šių keturių implantų tą pačią dieną tvirtinamas laikinas, bet fiksuotas protezas, kuris atrodo kaip
                                    natūralūs dantys ir leidžia pacientui grįžti prie įprasto gyvenimo ritmo.
                                </p>

                                <h3 className="font-semibold text-darkblue-700">Vienas žandikaulis per vieną dieną – ką tai reiškia pacientui?</h3>
                                <p>
                                    Vienas didžiausių ALL-ON-4 privalumų – laikas. Pacientams, kurie ilgą laiką gyveno be dantų ar su
                                    nestabiliais protezais, galimybė per vieną dieną turėti fiksuotus dantis yra esminis pokytis.
                                </p>
                                <p>Praktiškai tai reiškia:</p>

                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "tik per vieną dieną atliekamas implantų įsriegimas",
                                        "tą pačią dieną pritvirtinami laikini fiksuoti dantys",
                                        "nereikia nešioti išimamų protezų gijimo laikotarpiu",
                                        "pacientas iš klinikos išeina su dantimis",
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                                            <span className="mt-1">
                                                <CheckIcon />
                                            </span>
                                            <span className="text-slate-700">{text}</span>
                                        </div>
                                    ))}
                                </div>

                                <p>
                                    Tai ypač svarbu žmonėms, kuriems estetika, kalba ir pasitikėjimas savimi yra kritiškai svarbūs kasdienėje
                                    veikloje ar darbe.
                                </p>

                                <h3 className="font-semibold text-darkblue-700">Kam ALL-ON-4 implantacija yra tinkamiausia?</h3>
                                <p>ALL-ON-4 metodas dažniausiai rekomenduojamas:</p>

                                <div className="grid sm:grid-cols-2 gap-3">
                                    {[
                                        "pacientams, netekusiems visų dantų viename ar abiejuose žandikauliuose",
                                        "tiems, kurių likę dantys yra stipriai pažeisti ir nebetinkami gydyti",
                                        "žmonėms, kurie nepatenkinti išimamais protezais",
                                        "pacientams, kuriems nustatytas žandikaulio kaulo sumažėjimas",
                                        "tiems, kurie nori greito ir fiksuoto sprendimo, o ne ilgo gydymo",
                                    ].map((text, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                                            <span className="mt-1">
                                                <CheckIcon />
                                            </span>
                                            <span className="text-slate-700">{text}</span>
                                        </div>
                                    ))}
                                </div>

                                <p>
                                    Dažnai ALL-ON-4 pasirenkamas ir tada, kai pacientas mano, kad implantacija jam nebeįmanoma dėl kaulo
                                    trūkumo. Būtent pasvirų implantų koncepcija leidžia išvengti sudėtingų ir ilgų kaulo priauginimo
                                    procedūrų daugeliu atvejų.
                                </p>

                                <h3 className="font-semibold text-darkblue-700">Kodėl ALL-ON-4 dažnai leidžia išvengti kaulo priauginimo?</h3>
                                <p>
                                    Tradicinėje implantacijoje dažnai prireikia papildomų procedūrų, jei žandikaulio kaulo kiekis yra
                                    nepakankamas. ALL-ON-4 metodas išnaudoja tas žandikaulio sritis, kur kaulo paprastai išlieka daugiau, ir
                                    leidžia implantus įsriegti kampu, užtikrinant stabilumą net esant kaulo trūkumui.
                                </p>
                                <p>
                                    Tai reiškia: trumpesnį gydymo laiką, mažiau chirurginių intervencijų, mažesnę komplikacijų riziką bei
                                    greitesnį grįžimą prie įprasto gyvenimo.
                                </p>

                                <h3 className="font-semibold text-darkblue-700">Laikini ir galutiniai dantys – kaip vyksta procesas?</h3>
                                <p>
                                    Pirmąją dieną pacientui pritvirtinami laikini, bet fiksuoti dantys, kurie yra estetiški, stabilūs ir
                                    funkcionalūs. Jie leidžia komfortiškai gyventi gijimo laikotarpiu, kol implantai pilnai suauga su kaulu.
                                </p>
                                <p>
                                    Po gijimo etapo laikini dantys pakeičiami galutiniais protezais, kurie gaminami individualiai, atsižvelgiant
                                    į: veido bruožus, šypsenos liniją, sąkandį ir paciento estetikos lūkesčius. Galutinis rezultatas – natūraliai
                                    atrodantys, tvirti ir ilgaamžiai dantys.
                                </p>

                                <h3 className="font-semibold text-darkblue-700">ALL-ON-4 – ne tik apie dantis, bet ir apie gyvenimo kokybę</h3>
                                <p>
                                    Pacientai, pasirinkę ALL-ON-4 implantaciją, dažnai pabrėžia ne tik estetinį pokytį, bet ir:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                                    <li>laisvę valgyti mėgstamą maistą</li>
                                    <li>pasitikėjimą savimi bendraujant</li>
                                    <li>komfortą be judančių protezų</li>
                                    <li>psichologinį palengvėjimą</li>
                                </ul>
                                <p className="text-slate-700 leading-relaxed">
                                    Tai sprendimas, kuris iš esmės keičia kasdienybę, o ne tik šypsenos išvaizdą.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ALL-ON-4 PRANAŠUMAI (Lyginimas) */}
                <motion.section className="mb-12" variants={item}>
                    <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                        ALL-ON-4 privalumai, lyginant su kitais dantų atkūrimo sprendimais
                    </h2>

                    <div className="space-y-4 text-slate-700 leading-relaxed">
                        <p>
                            Renkantis dantų atkūrimo metodą, pacientams dažnai kyla klausimas, kuo ALL-ON-4 skiriasi nuo kitų galimų
                            sprendimų ir kodėl šis metodas laikomas vienu pažangiausių. Norint priimti pagrįstą sprendimą, svarbu
                            suprasti pagrindinius skirtumus tarp ALL-ON-4, tradicinės implantacijos ir išimamų protezų.
                        </p>

                        <h3 className="font-semibold text-darkblue-700">ALL-ON-4 ir išimami protezai</h3>
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

                        <h3 className="font-semibold text-darkblue-700">ALL-ON-4 ir klasikinė implantacija su daug implantų</h3>
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

                        <h3 className="font-semibold text-darkblue-700">Laikas – vienas didžiausių ALL-ON-4 privalumų</h3>
                        <p>
                            Vienas iš esminių skirtumų tarp ALL-ON-4 ir kitų metodų yra gydymo trukmė. Klasikinės implantacijos atveju
                            pacientas gali laukti kelis mėnesius ar net ilgiau, kol bus galima džiaugtis galutiniais dantimis.
                        </p>
                        <p>
                            ALL-ON-4 leidžia per vieną dieną atkurti visą dantų lanką, suteikiant laikinus, bet fiksuotus dantis tą pačią
                            dieną. Tai ypač svarbu pacientams, kurie nenori ar negali ilgą laiką likti be dantų ar naudoti išimamus
                            protezus.
                        </p>

                        <h3 className="font-semibold text-darkblue-700">Komfortas ir psichologinis aspektas</h3>
                        <p>
                            Dantų atkūrimas yra ne tik fizinis, bet ir psichologinis procesas. Judantys ar nepatogūs protezai dažnai sukelia
                            nesaugumo jausmą, o ilgi gydymo etapai gali varginti emociškai.
                        </p>
                        <p>
                            ALL-ON-4 sprendimas suteikia greitą stabilumą ir saugumo pojūtį, leidžiantį pacientams vėl pasitikėti savimi.
                            Galimybė iš karto turėti fiksuotus dantis dažnai vertinama kaip vienas didžiausių šio metodo privalumų.
                        </p>

                        <h3 className="font-semibold text-darkblue-700">Ilgalaikė vertė</h3>
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
                </motion.section>

                {/* KAINOS */}
                <motion.section className="mb-12" variants={item}>
                    <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">Dantų implantacijos kainos</h2>

                    <div className="space-y-4 text-slate-700 leading-relaxed mb-6">
                        <p>
                            Dantų implantacijos kaina gali skirtis priklausomai nuo pasirinkto implanto tipo, individualios burnos būklės ir
                            reikalingų papildomų procedūrų. Bangų odontologijos klinikoje kainodara yra aiški ir skaidri – kiekvienam
                            pacientui sudaromas individualus gydymo planas, kuriame detaliai paaiškinama, iš ko susideda galutinė
                            implantacijos kaina.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-brand bg-white shadow-soft overflow-hidden mb-6">
                        <div className="bg-brand-50/50 p-4 border-b border-brand/10 font-bold text-darkblue-700">
                            Naudojami dantų implantai ir jų kainos
                        </div>
                        <div className="divide-y divide-slate-100">
                            <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                                <span className="text-slate-700">Straumann® implantas</span>
                                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">650 €</span>
                            </div>
                            <div className="px-4 pb-4 -mt-2 text-slate-600 text-sm leading-relaxed">
                                Tai vienas lyderiaujančių implantų gamintojų pasaulyje, garsėjantis itin aukštu prigijimo rodikliu,
                                ilgaamžiškumu ir patikimumu. Šie implantai dažnai pasirenkami sudėtingesniais atvejais ar pacientams,
                                ieškantiems aukščiausios klasės sprendimo.
                            </div>

                            <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
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
                            <div className="flex justify-between items-center p-4 hover:bg-brand-50/30 transition">
                                <span className="text-slate-700">Sinuso pakėlimo operacija</span>
                                <span className="text-darkblue-700 font-bold whitespace-nowrap ml-4">500–700 €</span>
                            </div>
                            <div className="px-4 pb-4 -mt-2 text-slate-600 text-sm leading-relaxed">
                                Ši procedūra atliekama tuomet, kai viršutiniame žandikaulyje nepakanka kaulo implanto stabilumui. Ji leidžia
                                sudaryti tinkamas sąlygas implantacijai ir ženkliai padidina ilgalaikės sėkmės tikimybę.
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4 text-slate-700 leading-relaxed">
                        <h3 className="font-semibold text-darkblue-700">Nuo ko priklauso galutinė implantacijos kaina?</h3>
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

                        <h3 className="font-semibold text-darkblue-700">Investicija į ilgalaikį sprendimą</h3>
                        <p>
                            Nors dantų implantacija yra didesnė investicija nei laikini sprendimai, ilgalaikėje perspektyvoje ji dažnai
                            tampa ekonomiškai naudingesnė. Implantai padeda išsaugoti žandikaulio kaulą, užtikrina stabilų kramtymą ir
                            nereikalauja dažnų keitimų ar korekcijų, kaip kai kurios alternatyvos. Tai investicija ne tik į šypseną, bet
                            ir į gyvenimo kokybę, komfortą bei pasitikėjimą savimi.
                        </p>
                    </div>
                </motion.section>

                {/* SAUGU / SKAUSMAS */}
                <motion.section className="mb-12" variants={item}>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                        <div className="flex-1">
                            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">
                                Ar dantų implantacija yra saugi? O gal skausminga?
                            </h2>

                            <div className="space-y-4 text-slate-700 leading-relaxed">
                                <p>
                                    Dantų implantacija dažnai kelia nemažai klausimų ir nerimo, ypač pacientams, kurie su chirurginėmis
                                    procedūromis susiduria pirmą kartą. Vieni dažniausių nuogąstavimų – ar procedūra bus skausminga ir ar
                                    implantacija yra saugi ilgalaikėje perspektyvoje. Šiuolaikinė odontologija leidžia į šiuos klausimus
                                    atsakyti užtikrintai.
                                </p>

                                <h3 className="font-semibold text-darkblue-700">Implantacijos saugumas</h3>
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
                                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-white border border-slate-100 shadow-sm">
                                            <span className="mt-1">
                                                <CheckIcon />
                                            </span>
                                            <span className="text-slate-700">{text}</span>
                                        </div>
                                    ))}
                                </div>

                                <p>
                                    Tinkamai suplanuota ir atlikta implantacija pasižymi labai aukštu sėkmės rodikliu, kuris daugeliu atvejų
                                    viršija 95 %.
                                </p>

                                <h3 className="font-semibold text-darkblue-700">Ar implantacija yra skausminga?</h3>
                                <p>
                                    Implantų įsriegimas atliekamas taikant vietinę nejautrą, todėl procedūros metu pacientas nejaučia skausmo.
                                    Dauguma pacientų procedūrą apibūdina kaip trumpą ir gerokai mažiau nemalonią, nei jie tikėjosi iš anksto.
                                </p>
                                <p>
                                    Procedūros metu gali būti juntamas: lengvas spaudimas, vibracija ar judesio pojūtis. Tačiau skausmo tikrai
                                    nejaučiama. Jei pacientas jaučia didesnį nerimą, gydytojas visuomet parenka tinkamiausią nuskausminimo
                                    sprendimą.
                                </p>

                                <h3 className="font-semibold text-darkblue-700">Pojūčiai po procedūros</h3>
                                <p>
                                    Pasibaigus nuskausminimo poveikiui, gali pasireikšti nedidelis diskomfortas, patinimas ar tempimo pojūtis –
                                    tai normali organizmo reakcija po chirurginės intervencijos. Šie simptomai dažniausiai būna laikini ir
                                    sumažėja per kelias dienas.
                                </p>
                                <p>
                                    Po implantacijos pacientams pateikiamos aiškios rekomendacijos, kaip: prižiūrėti burną, ko vengti
                                    pirmosiomis dienomis ir kaip sumažinti patinimą bei diskomfortą. Laikantis šių nurodymų gijimo procesas
                                    vyksta sklandžiai ir be komplikacijų.
                                </p>

                                <h3 className="font-semibold text-darkblue-700">Ką svarbu žinoti apie gijimą?</h3>
                                <p>
                                    Implantacijos sėkmė labai priklauso nuo gijimo laikotarpio. Osteointegracijos metu implantas suauga su
                                    žandikaulio kaulu, todėl svarbu laikytis gydytojo rekomendacijų, vengti pernelyg didelės apkrovos implantų
                                    srityje ir reguliariai lankytis kontroliniuose vizituose. Šis etapas yra esminis ilgalaikio stabilumo
                                    pagrindas.
                                </p>

                                <h3 className="font-semibold text-darkblue-700">Rizikos ir kaip jos valdomos</h3>
                                <p>
                                    Kaip ir bet kuri medicininė procedūra, implantacija turi tam tikrų rizikų, tačiau jos yra retos ir
                                    dažniausiai susijusios su:
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                                    <li>nepakankama burnos higiena</li>
                                    <li>rūkymu</li>
                                    <li>bendromis sveikatos būklėmis</li>
                                </ul>
                                <p className="text-slate-700 leading-relaxed">
                                    Būtent todėl prieš gydymą atliekamas išsamus įvertinimas, leidžiantis sumažinti galimas rizikas iki
                                    minimumo.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* KIEK TARNAUJA */}
                <motion.section className="mb-12" variants={item}>
                    <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">Kiek laiko tarnauja dantų implantai?</h2>

                    <div className="space-y-4 text-slate-700 leading-relaxed">
                        <p>
                            Vienas dažniausių klausimų, kurį užduoda pacientai svarstydami apie implantaciją, yra susijęs su ilgaamžiškumu –
                            kiek laiko tarnaus dantų implantai ir ar tai tikrai ilgalaikis sprendimas. Šiuolaikinė odontologija leidžia
                            drąsiai teigti, kad tinkamai suplanuoti ir profesionaliai įsriegti implantai gali tarnauti dešimtmečius ar net
                            visą gyvenimą.
                        </p>

                        <h3 className="font-semibold text-darkblue-700">Ilgaamžiškumo pagrindas – implantas ir kaulas</h3>
                        <p>
                            Dantų implantų ilgaamžiškumą lemia osteointegracija – procesas, kurio metu implantas suauga su žandikaulio kaulu.
                            Kai implantas pilnai integruojasi, jis tampa stabilia ir tvirta atrama, galinčia atlaikyti kasdienes kramtymo
                            apkrovas. Šis procesas yra vienas svarbiausių veiksnių, lemiančių ilgalaikę sėkmę.
                        </p>
                        <p>
                            Naudojant aukštos kokybės implantus ir laikantis tinkamos chirurginės technikos, implantų prigijimo rodikliai
                            yra itin aukšti. Būtent todėl implantacija laikoma vienu patikimiausių dantų atkūrimo metodų.
                        </p>

                        <h3 className="font-semibold text-darkblue-700">Kas turi įtakos implantų tarnavimo laikui?</h3>
                        <p>Nors pats implantas yra labai patvarus, jo tarnavimo trukmę veikia keletas svarbių veiksnių:</p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-700 text-sm">
                            <li>Burnos higiena: kasdienė priežiūra ir profesionali higiena padeda išvengti uždegiminių procesų aplink implantą.</li>
                            <li>Reguliarūs profilaktiniai vizitai: periodinės patikros leidžia laiku pastebėti pokyčius ir užkirsti kelią galimoms komplikacijoms.</li>
                            <li>Bendroji sveikata: tam tikros ligos ar žalingi įpročiai gali turėti įtakos gijimui ir ilgalaikei implantų būklei.</li>
                            <li>Gydytojo patirtis ir planavimas: tikslus implantų išdėstymas ir tinkamas gydymo planas yra esminiai stabilumo veiksniai.</li>
                        </ul>

                        <h3 className="font-semibold text-darkblue-700">Karūnėlės ir protezai – ar juos reikia keisti?</h3>
                        <p>
                            Svarbu atskirti patį implantą nuo ant jo tvirtinamos karūnėlės ar protezo. Pats implantas dažniausiai tarnauja
                            labai ilgai, o ant jo tvirtinami protezai laikui bėgant gali būti atnaujinami dėl natūralaus nusidėvėjimo ar
                            estetinių pokyčių.
                        </p>
                        <p>
                            Tai leidžia ilgalaikėje perspektyvoje išlaikyti stabilų implantą ir prireikus atnaujinti tik viršutinę,
                            matomą dantų dalį.
                        </p>

                        <h3 className="font-semibold text-darkblue-700">Implantai kaip ilgalaikė investicija</h3>
                        <p>
                            Nors implantacija gali atrodyti kaip didesnė pradinė investicija, vertinant ilgalaikį rezultatą ji dažnai tampa
                            ekonomiškai naudingesniu sprendimu nei alternatyvos, reikalaujančios dažnesnio atnaujinimo ar korekcijų.
                            Ilgaamžiai, stabilūs ir funkcionalūs implantai leidžia pacientams džiaugtis pilnaverte šypsena, komfortu ir
                            pasitikėjimu daugelį metų.
                        </p>
                    </div>
                </motion.section>

                {/* PO IMPLANTACIJOS */}
                <motion.section className="mb-12 space-y-8" variants={item}>
                    <div>
                        <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-4">Ką svarbu žinoti po dantų implantacijos?</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Sėkminga dantų implantacija nesibaigia implanto įsriegimu. Labai svarbus etapas yra laikotarpis po procedūros,
                            kurio metu vyksta gijimas ir implantas suauga su žandikaulio kaulu. Tinkama priežiūra ir gydytojo rekomendacijų
                            laikymasis padeda užtikrinti sklandų gijimą ir ilgalaikį implantų stabilumą.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-darkblue-700 mb-2">Pirmosios dienos po implantacijos</h3>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                Pirmosiomis dienomis po procedūros gali pasireikšti nedidelis patinimas, tempimo pojūtis ar jautrumas
                                implantacijos srityje. Tai normali organizmo reakcija į chirurginę intervenciją. Dažniausiai šie simptomai
                                palaipsniui mažėja per kelias dienas.
                            </p>
                            <p className="text-slate-700 text-sm leading-relaxed mt-3">
                                Po implantacijos rekomenduojama: vengti intensyvaus fizinio krūvio, pirmąją parą laikytis minkštesnio maisto,
                                nevartoti labai karšto maisto ar gėrimų bei nerūkyti ir nevartoti alkoholio. Šios priemonės padeda sumažinti
                                diskomfortą ir sudaro palankias sąlygas gijimui.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                            <h3 className="font-bold text-darkblue-700 mb-2">Burnos higiena gijimo laikotarpiu</h3>
                            <p className="text-slate-700 text-sm leading-relaxed">
                                Tinkama burnos higiena yra viena svarbiausių sąlygų sėkmingam implantų prigijimui. Nors implantacijos vieta
                                gali būti jautri, burnos priežiūros visiškai nutraukti negalima.
                            </p>
                            <p className="text-slate-700 text-sm leading-relaxed mt-3">
                                Gijimo laikotarpiu svarbu švelniai valyti dantis minkštu šepetėliu, naudoti gydytojo rekomenduotas burnos
                                priežiūros priemones, vengti intensyvaus spaudimo implantacijos srityje ir laikytis individualių higienos
                                rekomendacijų. Reguliari, bet atsargi priežiūra padeda išvengti uždegiminių procesų ir užtikrina sėkmingą
                                gijimą.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
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

                        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
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

                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                        <h3 className="text-lg font-semibold text-darkblue-700 mb-2">Ilgalaikė priežiūra</h3>
                        <p className="text-slate-700 text-sm leading-relaxed">
                            Net ir sėkmingai prigijus implantams, būtina rūpintis jų priežiūra ilgalaikėje perspektyvoje. Reguliari burnos
                            higiena, profesionalios higienos procedūros ir profilaktiniai vizitai leidžia išlaikyti implantų stabilumą ir
                            estetiką daugelį metų.
                        </p>
                    </div>
                </motion.section>

                {/* KODĖL MES */}
                <motion.section className="mb-12" variants={item}>
                    <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-6">
                        Kodėl verta rinktis Bangų odontologijos kliniką Klaipėdoje?
                    </h2>

                    <div className="bg-brand-50/30 p-6 sm:p-8 rounded-2xl border border-brand/10">
                        <p className="text-slate-700 leading-relaxed mb-6">
                            Renkantis, kur atlikti dantų atkūrimą implantais, svarbu ne tik procedūros kaina ar greitis, bet ir tai, kas stovės
                            už galutinio rezultato. Bangų odontologijos klinikoje Klaipėdoje dantų implantacija atliekama remiantis šiuolaikiniais
                            gydymo standartais, tikslia diagnostika ir individualiu požiūriu į kiekvieną pacientą.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                {
                                    title: "Patyrę implantologai",
                                    text:
                                        "Klinikoje dirba specialistai, kurie atlieka tiek pavienių dantų implantaciją, tiek sudėtingus viso žandikaulio atkūrimo atvejus."
                                },
                                {
                                    title: "Tikslus planavimas",
                                    text:
                                        "Gydymo planas sudaromas įvertinus burnos būklę, kaulo kiekį, paciento lūkesčius, gyvenimo būdą ir siekiamą ilgalaikį rezultatą."
                                },
                                {
                                    title: "Patikimi implantų sprendimai",
                                    text:
                                        "Naudojami tik pasaulyje pripažinti implantai, parenkami atsakingai – pagal klinikinę situaciją, kaulo būklę ir numatomą apkrovą."
                                },
                                {
                                    title: "Skaidrus bendravimas",
                                    text:
                                        "Pacientai vertina aiškų paaiškinimą, skaidrią kainodarą ir profesionalų, ramų požiūrį viso gydymo metu."
                                }
                            ].map((c, i) => (
                                <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <span className="mt-1">
                                            <CheckIcon />
                                        </span>
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
                <motion.div className="mt-8 mb-12 text-center" variants={item}>
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-soft overflow-hidden">
                        {/* viršus */}
                        <div className="p-6 sm:p-10 bg-brand-50/40 border-b border-brand/10">
                            <h2 className="text-xl sm:text-2xl font-semibold text-darkblue-700 mb-3">
                                Kviečiame registruotis dantų implantacijos konsultacijai Bangų klinikoje
                            </h2>

                            <p className="text-slate-700 max-w-3xl mx-auto leading-relaxed">
                                Jeigu svarstote apie dantų atkūrimą implantais ir norite sužinoti, koks sprendimas būtų tinkamiausias Jūsų
                                situacijoje, kviečiame registruotis konsultacijai Bangų odontologijos klinikoje. Vizito metu patyrę implantologai
                                įvertins burnos būklę, atsakys į rūpimus klausimus ir padės suprasti visą gydymo eigą.
                            </p>
                        </div>

                        {/* turinys */}
                        <div className="p-6 sm:p-10">
                            <div className="grid md:grid-cols-2 gap-8 items-start text-left">
                                <div className="text-slate-700 leading-relaxed space-y-4">
                                    <p>
                                        Bangų odontologijos klinikoje siekiame, kad implantacija būtų aiškus, saugus ir pacientui suprantamas procesas,
                                        vedantis prie ilgalaikio ir stabilaus rezultato.
                                    </p>
                                    <p>
                                        Registruokitės konsultacijai ir ženkite tvirtą žingsnį link pilnavertės šypsenos.
                                    </p>
                                </div>

                                <div className="bg-brand-50/30 p-6 rounded-xl border border-brand/10">
                                    <p className="font-semibold text-darkblue-700 mb-4 text-center md:text-left">
                                        Konsultacijos metu:
                                    </p>

                                    <ul className="space-y-3 text-slate-700">
                                        {[
                                            "atliekamas išsamus klinikinis įvertinimas",
                                            "aptariami galimi gydymo metodai",
                                            "paaiškinami procedūros etapai ir terminai",
                                            "sudaromas individualus gydymo planas"
                                        ].map((t, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className="mt-1">
                                                    <CheckIcon />
                                                </span>
                                                <span className="text-sm leading-relaxed">{t}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <Link
                                    to="/kontaktai"
                                    className="btn-primary rounded-full px-8 py-4 font-semibold text-lg inline-block shadow-lg shadow-brand/20 hover:shadow-xl transition transform hover:-translate-y-1"
                                >
                                    Registruotis vizitui
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatedSection>
    )
}
