export type Section = {
  h?: string
  p: string[]
  image?: string
}

export type FaqItem = { q: string; a: string; preImage?: string }

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  coverImage: string
  readTime: number
  sections: Section[]
  faq?: FaqItem[]
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'kokie-yra-danties-implanto-atmetimo-pozymiai',
    title: 'Kokie yra danties implanto atmetimo požymiai?',
    excerpt: 'Dantų implantacija – tai patikimas būdas atkurti prarastus dantis. Tačiau kartais po procedūros gali kilti komplikacijų. Sužinokite, į kokius požymius svarbu atkreipti dėmesį.',
    date: '2026-06-10',
    category: 'Dantų implantacija',
    coverImage: 'https://images.unsplash.com/photo-1664529845843-b4192b8246fa?w=1200&q=80&fit=crop&auto=format',
    readTime: 7,
    sections: [
      {
        p: [
          'Dantų implantacija yra viena patikimiausių ir ilgalaikių galimybių atkurti prarastus dantis. Dauguma implantų sėkmingai integruojasi į kaulą ir ilgus metus tarnauja be problemų. Tačiau kartais po implantavimo gali kilti komplikacijų. Pacientai dažnai klausia: kaip atpažinti, kad implantas neprigijo arba yra atmetamas?',
          'Svarbu suprasti, kad tikras implanto „atmetimas" kaip alerginė reakcija yra itin retas. Dažniausiai tai, ką žmonės vadina „atmetimu", yra uždegimas, infekcija, neprigijimas arba audinių problemos. Šiame straipsnyje aptarsime, kokie požymiai gali rodyti, kad su implantu kyla problemų.',
        ],
      },
      {
        h: 'Normalūs pojūčiai po implantacijos ir pavojingi simptomai',
        p: [
          'Pirmomis dienomis po dantų implantacijos normalu jausti nedidelį maudimą, jautrumą, tempimą ar patinimą operuotoje vietoje. Pirmomis valandomis gali būti nežymus kraujavimas. Svarbiausia – kad šie simptomai palaipsniui mažėtų.',
          'Pavojingi simptomai, į kuriuos reikėtų atkreipti dėmesį: stiprėjantis skausmas, didėjantis patinimas, pūliavimas, blogas kvapas ar skonis burnoje ir implantas ar laikinas protezas, kuris juda ar juda. Tokie požymiai gali rodyti uždegimą ar neprigijimą.',
        ],
      },
      {
        h: 'Dažniausi danties implanto atmetimo arba neprigijimo požymiai',
        p: [
          'Pagrindiniai požymiai, kurie gali rodyti komplikacijas: ilgai nepraeina arba stiprėja skausmas implanto srityje, dantenose aplink implantą atsiranda paraudimas ar patinimas, gali formuotis pūlinys ar atsirasti nemalonus skonis, implanto apylinkėse matomos dantenos pasitraukia arba matosi implanto sraigtinė dalis.',
          'Vėlesnio stadijos komplikacijos gali pasireikšti mėnesiais ar net metais po implantavimo. Jos dažniausiai susijusios su uždegimo procesu aplink implantą – vadinamu periimplantitu – kuris negydomas gali pažeisti aplinkinį kaulą ir sukelti implanto praradimą.',
        ],
      },
      {
        h: 'Danties implanto uždegimas: kaip jis pasireiškia?',
        p: [
          'Ankstyvasis uždegimas aplink implantą pasireiškia paraudusiomis, patinusiomis ar jautriomis dantenomis. Galimas kraujavimas valant dantis, nemalonus skonis ar kvapas burnoje, skausmas kramtant.',
          'Pažengęs uždegimas (periimplantitas) gali paveikti kaulą aplink implantą. Toks procesas pasireiškia dantenų pasitraukimu, matoma implanto dalimi, padidėjusiu judumu ir skausmu. Šiuos simptomus būtina vertinti kuo greičiau – kuo anksčiau nustatoma problema, tuo daugiau galimybių ją suvaldyti.',
        ],
      },
      {
        h: 'Kodėl gali kilti komplikacijos po dantų implantavimo?',
        p: [
          'Komplikacijos po implantavimo gali atsirasti dėl įvairių priežasčių. Viena dažniausių – nepakankama burnos higiena. Jei aplink implantą kaupiasi apnašos ir bakterijos, gali prasidėti uždegimas.',
          'Rūkymas yra žinomas rizikos veiksnys, blogintis kraujotaką ir lėtinantis gijimą. Nekontroliuojamos ligos (diabetas, imuninės sistemos sutrikimai), per ankstyvas implanto apkrovimas, praleisti kontroliniai vizitai taip pat gali prisidėti prie komplikacijų atsiradimo. Svarbu suprasti, kad komplikacijos nebūtinai reiškia gydytojo ar paciento klaidą – kartais gijimas tiesiog nevyksta taip, kaip tikimasi.',
        ],
      },
      {
        h: 'Kada simptomai gali atsirasti?',
        p: [
          'Ankstyvosios komplikacijos dažniausiai atsiranda per pirmąsias dienas ar savaites po procedūros. Jos dažnai susijusios su infekcija ar gijimo sutrikimais.',
          'Vėlyvosios komplikacijos gali pasireikšti praėjus mėnesiams ar net metams po implantavimo. Jos dažniausiai susijusios su periimplantitu – lėtiniu uždegimu aplink implantą, kurį provokuoja nepakankami burnos priežiūros įpročiai ar kiti rizikos veiksniai.',
        ],
      },
      {
        h: 'Ką daryti pastebėjus galimus implanto atmetimo požymius?',
        p: [
          'Jei pastebite bet kurį iš minėtų požymių, kuo greičiau susisiekite su savo odontologu. Neatidėliokite vizito, net jei simptomai atrodo nežymūs – anksti nustatyta problema sprendžiama daug paprasčiau.',
          'Kol laukiate vizito: palaikykite švelną burnos higieną, nekrapštykite implanto vietos, nevartokite antibiotikų be gydytojo patarimo. Gydytojas apžiūros metu įvertins situaciją, prireikus atliks rentgeno nuotrauką ir pasiūlys tinkamiausią gydymo sprendimą.',
        ],
      },
      {
        h: 'Ar galima išvengti implanto komplikacijų?',
        image: 'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?w=1200&q=80&fit=crop&auto=format',
        p: [
          'Komplikacijų visiškai išvengti neįmanoma, tačiau jų riziką galima žymiai sumažinti. Svarbiausia – laikytis gydytojo rekomendacijų po procedūros, palaikyti gerą burnos higieną, nerūkyti ir reguliariai lankytis profilaktinėse apžiūrose.',
          'Reguliarūs kontroliniai vizitai leidžia anksti aptikti galimas problemas ir jas spręsti, kol jos dar nesukėlė rimtesnių pažeidimų. Ilgalaikė implanto sėkmė priklauso ne tik nuo pačios procedūros kokybės, bet ir nuo nuolatinės priežiūros.',
        ],
      },
      {
        h: 'Danties implanto atmetimo požymių nereikėtų ignoruoti',
        p: [
          'Dantų implantai pasižymi aukštu sėkmingumo rodikliu, tačiau kaip ir bet kuri medicininė procedūra, implantavimas reikalauja atidaus požiūrio ir tinkamos priežiūros. Jei po implantacijos pastebite neįprastų simptomų, nedelskite ir kreipkitės į odontologą.',
          'Jei turite klausimų dėl implanto priežiūros ar pastebėjote nerimą keliančių simptomų, registruokitės konsultacijai Bangų klinikoje Klaipėdoje. Gydytojas įvertins situaciją ir pasiūlys tinkamiausią sprendimą.',
        ],
      },
    ],
    faq: [
      { q: 'Kaip atpažinti, kad implantas neprigijo?', a: 'Pagrindiniai požymiai – stiprėjantis skausmas, didėjantis patinimas, pūliavimas, implantas, kuris juda, ar matomos implanto dalys dėl pasitraukusių dantenų. Pastebėjus šiuos simptomus, reikėtų kuo greičiau kreiptis į odontologą.' },
      { q: 'Ar implanto atmetimas yra dažnas reiškinys?', a: 'Tikras implanto „atmetimas" kaip alerginė reakcija yra labai retas. Dažniausiai komplikacijos susijusios su uždegimo procesais ar neprigyjimu, kuriuos galima gydyti, ypač jei problema nustatoma anksti.' },
      { q: 'Kiek laiko trunka gijimas po implantacijos?', a: 'Pirminis diskomfortas mažėja per kelias dienas, tačiau pats implantas suauga su kaulu per kelis mėnesius. Tiksli trukmė priklauso nuo individualios situacijos, kaulo kokybės ir papildomų procedūrų.' },
      { q: 'Ar galima rūkyti po implantacijos?', a: 'Rūkyti nerekomenduojama, nes rūkymas blogina kraujotaką, lėtina gijimą ir didina komplikacijų, įskaitant periimplantitą, riziką.' },
    ],
  },
  {
    slug: 'ka-reikia-zinoti-po-danties-implantacijos',
    title: 'Ką reikia žinoti po danties implantacijos?',
    excerpt: 'Po danties implantacijos svarbiausia – tinkama priežiūra. Sužinokite, kokia savijauta yra normali, ką galima valgyti ir ko vengti, kad gijimas vyktų sklandžiai.',
    date: '2026-06-03',
    category: 'Dantų implantacija',
    coverImage: 'https://images.unsplash.com/photo-1609918438269-9a4c5f8fe3a4?w=1200&q=80&fit=crop&auto=format',
    readTime: 8,
    sections: [
      {
        p: [
          'Danties implantacija atliekama kontroliuojamomis sąlygomis, tačiau galutiniam rezultatui labai svarbu ir tai, kaip pacientas elgiasi po procedūros. Tinkama priežiūra sumažina komplikacijų riziką ir sudaro geresnes sąlygas implantui prigyti.',
          'Po implantavimo svarbu laikytis gydytojo rekomendacijų. Nedidelis maudimas, patinimas ar jautrumas gali būti normali gijimo dalis, tačiau simptomai turėtų palaipsniui mažėti.',
        ],
      },
      {
        h: 'Kokia savijauta po danties implantavimo yra normali?',
        p: [
          'Savijauta skiriasi priklausomai nuo procedūros sudėtingumo, implanto vietos ir sveikatos būklės. Pirmomis dienomis galite jausti maudimą, tempimą ar jautrumą operuotoje vietoje.',
          'Taip pat galimas nedidelis patinimas, dantenų jautrumas ar sunkesnis kramtymas. Pirmomis valandomis po procedūros galimas nežymus kraujavimas.',
          'Normalu, jei diskomfortas palaipsniui mažėja, o patinimas po kelių dienų pradeda slūgti. Tačiau reikėtų nedelsti ir susisiekti su gydytoju, jei skausmas stiprėja arba atsiranda pūliavimas.',
        ],
      },
      {
        h: 'Pirmosios valandos po danties implantavimo',
        p: [
          'Šis laikotarpis ypač svarbus, nes pradeda formuotis pirminis gijimo procesas. Jei gydytojas uždėjo tamponą, jį reikėtų laikyti nurodytą laiką.',
          'Kol veikia nejautra, geriau nevalgyti. Taip pat pirmąją dieną reikėtų vengti karšto maisto ir intensyvaus burnos skalavimo.',
          'Operuotos vietos nelieskite liežuviu, pirštais ar daiktais. Rekomenduojama ilsėtis ir vengti intensyvaus fizinio krūvio.',
        ],
      },
      {
        h: 'Gijimas po dantų implantacijos: ko tikėtis?',
        p: [
          'Gijimas vyksta etapais. Pirmiausia gyja dantenos ir minkštieji audiniai. Pirmomis dienomis gali būti jaučiamas maudimas, jautrumas ar tempimas, o patinimas dažniausiai būna ryškiausias antrą ar trečią dieną po procedūros.',
          'Svarbu suprasti, kad iš išorės dantenos gali atrodyti sugijusios gana greitai, tačiau pats implantas dar turi integruotis į kaulą. Šis procesas vadinamas osteointegracija ir trunka kelis mėnesius.',
          'Gijimo trukmė priklauso nuo paciento sveikatos, kaulo kokybės ir papildomų procedūrų. Gydytojas įvertina gijimo eigą kontrolinių vizitų metu ir nusprendžia, kada galima pereiti prie tolimesnio protezavimo etapo.',
        ],
      },
      {
        h: 'Kaip prižiūrėti burną po implantacijos?',
        p: [
          'Po implantacijos burnos higiena turi būti atsargi, bet nuosekli. Pirmąją dieną nerekomenduojama intensyviai skalauti, nes tai gali sutrikdyti gijimą.',
          'Valykite dantis švelniai, naudodami minkštą dantų šepetėlį. Venkite stipraus spaudimo operuotoje vietoje.',
          'Švara yra svarbi, nes apnašos ir bakterijos gali didinti uždegimo riziką. Vėliau implantą reikės prižiūrėti kaip natūralius dantis – reguliariai valyti ir lankytis profilaktinėse apžiūrose.',
        ],
      },
      {
        h: 'Ką galima valgyti po danties implantavimo?',
        p: [
          'Po danties implantavimo pirmomis valandomis geriausia nevalgyti, kol visiškai nepraeina nejautra. Kai nejautra praeina, rinkitės minkštą, nekarštą maistą.',
          'Pirmomis dienomis tinka košės, jogurtas, sriubos, minkšti troškiniai, trintas ar lengvai kramtomas maistas. Reikėtų vengti kieto, traškaus ir aštraus maisto.',
          'Kramtykite kita burnos puse ir stenkitės neapkrauti implanto srities. Pirmąją parą venkite gerti per šiaudelį.',
        ],
      },
      {
        h: 'Ko negalima daryti po danties implantacijos?',
        image: 'https://images.unsplash.com/photo-1468493858157-0da44aaf1d13?w=1200&q=80&fit=crop&auto=format',
        p: [
          'Po implantavimo svarbu vengti veiksmų, kurie sutrikdytų gijimą. Pirmąją parą nereikėtų intensyviai skalauti burnos, spjaudyti ar gerti per šiaudelį.',
          'Pirmomis dienomis nerekomenduojama rūkyti ir vartoti alkoholio. Rūkymas blogina kraujotaką ir gali didinti uždegimo riziką.',
          'Venkite intensyvaus sporto, sunkaus fizinio krūvio ir pirties pirmomis dienomis po procedūros. Taip pat nepraleiskite kontrolinių vizitų – jie yra svarbi sėkmingo gijimo dalis.',
        ],
      },
      {
        h: 'Kada reikėtų sunerimti ir kreiptis į gydytoją?',
        p: [
          'Nedidelis maudimas gali būti normalus, tačiau simptomai turėtų palaipsniui mažėti. Jei skausmas stiprėja, reikėtų susisiekti su gydytoju.',
          'Nerimą turėtų kelti didėjantis patinimas po kelių dienų, pūliavimas, nemalonus kvapas ar skonis burnoje, karščiavimas, nesustojantis kraujavimas arba judantis implantas.',
          'Jei stipriai tinsta veidas, tampa sunku ryti ar kvėpuoti, arba atsiranda bendra bloga savijauta, reikalinga skubi medicininė pagalba.',
        ],
      },
      {
        h: 'Kiek laiko trunka gijimas po dantų implantacijos?',
        p: [
          'Gijimas vyksta nuosekliai. Pirminis diskomfortas, maudimas ar patinimas dažniausiai pradeda mažėti per kelias dienas.',
          'Svarbiausias etapas – implanto suaugimas su kaulu. Šis procesas trunka ilgiau ir dažnai užima kelis mėnesius.',
          'Tiksli gijimo trukmė priklauso nuo individualios situacijos: kaulo būklės, implantų skaičiaus, paciento sveikatos, burnos higienos, rūkymo ir papildomų procedūrų. Gydytojas stebės eigą ir informuos, kada galima pradėti kitus gydymo etapus.',
        ],
      },
      {
        h: 'Sėkmingam rezultatui svarbios pirmosios dienos ir ilgalaikė priežiūra',
        p: [
          'Po implantavimo svarbiausia laikytis gydytojo rekomendacijų, saugoti operuotą vietą ir stebėti savo savijautą.',
          'Tinkama burnos higiena, atsargumas pirmomis dienomis ir reguliarūs kontroliniai vizitai padeda užtikrinti geresnį rezultatą. Jei kyla klausimų ar nerimą keliančių simptomų, registruokitės konsultacijai Bangų klinikoje Klaipėdoje.',
        ],
      },
    ],
    faq: [
      { q: 'Kokia savijauta po danties implantavimo yra normali?', a: 'Normalu jausti nedidelį maudimą, jautrumą, tempimą ar patinimą operuotoje vietoje. Pirmomis valandomis gali būti nežymus kraujavimas. Svarbiausia, kad šie simptomai palaipsniui mažėtų.' },
      { q: 'Kiek trunka gijimas po dantų implantacijos?', a: 'Pirminis diskomfortas sumažėja per kelias dienas, tačiau implanto suaugimas su kaulu trunka ilgiau – dažnai kelis mėnesius.' },
      { q: 'Ką galima valgyti po danties implantavimo?', a: 'Pirmomis dienomis rekomenduojamas minkštas, nekarštas maistas: košės, jogurtas, sriubos, trinti patiekalai. Reikėtų vengti kieto ir traškaus maisto.' },
      { q: 'Ar galima skalauti burną po implantacijos?', a: 'Pirmą parą nereikėtų intensyviai skalauti burnos, nes tai gali sutrikdyti gijimą. Vėliau burnos priežiūra atliekama pagal gydytojo rekomendacijas.' },
      { q: 'Ar galima rūkyti po danties implantacijos?', a: 'Rūkyti nerekomenduojama, nes rūkymas gali lėtinti gijimą, bloginti audinių kraujotaką ir didinti komplikacijų riziką.' },
      { q: 'Kada kreiptis į gydytoją po implantacijos?', a: 'Į gydytoją reikėtų kreiptis, jei skausmas stiprėja, didėja patinimas, atsiranda pūliavimas, karščiavimas, blogas kvapas, nesustoja kraujavimas arba implantas juda.' },
    ],
  },
  {
    slug: 'kodel-skauda-danti-po-plombavimo',
    title: 'Kodėl skauda dantį po plombavimo?',
    excerpt: 'Nedidelis jautrumas po plombavimo dažnai yra laikinas. Tačiau kada skausmas – normali gijimo dalis, o kada jį reikia tikrinti? Atsakome į dažniausius klausimus.',
    date: '2026-05-27',
    category: 'Dantų gydymas',
    coverImage: 'https://images.unsplash.com/photo-1592400400196-bf709e32aa88?w=1200&q=80&fit=crop&auto=format',
    readTime: 8,
    sections: [
      {
        p: [
          'Po plombavimo pacientai kartais pastebi, kad dantis tapo jautresnis nei prieš procedūrą. Jis gali sureaguoti į šaltą ar karštą gėrimą, saldų maistą, kramtymą arba sukandimą. Dėl to natūraliai kyla klausimas: ar normalu, kad skauda užplombuotą dantį?',
          'Nedidelis jautrumas po plombavimo dažnai yra laikinas. Procedūros metu pašalinamas ėduonis, dantis išvalomas, paruošiamas ir atkuriamas plomba, todėl danties audiniai bei nervas gali kurį laiką reaguoti jautriau. Tai ypač dažna, jei ertmė buvo gilesnė arba dantis jau buvo jautrus prieš gydymą.',
          'Vis dėlto skausmo nereikėtų ignoruoti, jei jis stiprėja, tampa pulsuojantis, trukdo kramtyti ar nepraeina ilgesnį laiką. Tokiais atvejais būtina išsiaiškinti priežastį, nes kartais gali reikėti plombos korekcijos ar papildomo gydymo.',
        ],
      },
      {
        h: 'Kodėl po plombavimo dantis tampa jautrus?',
        p: [
          'Plombavimo metu odontologas pašalina pažeistus danties audinius ir atkuria danties formą plombine medžiaga. Nors procedūra atliekama siekiant sustabdyti ėduonies plitimą ir apsaugoti dantį, pats gydymo procesas gali laikinai sudirginti danties audinius. Dėl to po procedūros gali atsirasti jautrumas šalčiui, karščiui, saldžiam ar rūgščiam maistui.',
          'Jei ėduonis buvo negilis, jautrumas dažniausiai būna nedidelis ir greitai mažėja. Tačiau jei ertmė buvo gili ir plomba yra arčiau danties nervo, dantis gali reaguoti stipriau. Tokiu atveju pacientas gali jausti maudimą, trumpą skausmą į šaltį ar diskomfortą kramtant.',
          'Svarbu stebėti, ar pojūčiai silpnėja. Lengvas jautrumas, kuris kasdien mažėja, dažniausiai nėra pavojingas. Tačiau jei skauda užplombuotą dantį vis stipriau arba skausmas išlieka ilgai, reikėtų kreiptis į odontologą pakartotinei apžiūrai.',
        ],
      },
      {
        h: 'Dažniausios priežastys, kodėl skauda užplombuotą dantį',
        p: [
          'Viena dažniausių priežasčių – laikinas danties nervo sudirgimas. Tai gali nutikti po bet kokio plombavimo, ypač jei gydyta ertmė buvo gilesnė. Tokiu atveju dantis gali būti jautrus temperatūros pokyčiams, tačiau jautrumas turėtų palaipsniui mažėti.',
          'Kita dažna priežastis – per aukšta plomba. Jei po plombavimo dantis sukandus pirmas susiliečia su priešingu dantimi, jam tenka per didelis krūvis. Tuomet gali skaudėti kramtant, sukandus ar net lengvai palietus dantį. Tokia situacija dažniausiai išsprendžiama plombos aukščio korekcija.',
          'Skausmą taip pat gali sukelti labai gili plomba, kai ėduonis buvo arti nervo. Tokiais atvejais dantis kurį laiką gali būti jautrus, tačiau jei skausmas tampa pulsuojantis, ilgai nepraeina arba pažadina naktį, gali būti prasidėjęs nervo uždegimas.',
          'Kartais po plombavimo išryškėja ir kitos problemos: mikroįtrūkimas, papildomas danties pažeidimas, dantų griežimas ar netaisyklingas sukandimas. Todėl tikslią priežastį geriausiai gali nustatyti odontologas apžiūros metu.',
        ],
      },
      {
        h: 'Kada skausmas po plombavimo yra normalus?',
        p: [
          'Nedidelis skausmas ar jautrumas po plombavimo ne visada reiškia, kad kažkas atlikta netinkamai. Dantis buvo gydomas, todėl jo audiniai gali kurį laiką reaguoti jautriau. Dažniausiai normalu, jei dantis trumpai sureaguoja į šaltą, karštą, saldų ar rūgštų maistą, bet skausmas greitai praeina pašalinus dirgiklį.',
          'Po gilios plombos jautrumas gali būti ryškesnis, nes gydyta vieta yra arčiau danties nervo. Tokiu atveju gali būti jaučiamas lengvas maudimas ar diskomfortas kramtant, tačiau svarbiausia, kad šie pojūčiai palaipsniui mažėtų.',
          'Jei kasdien jaučiate mažesnį jautrumą, dažniausiai galima stebėti situaciją. Tačiau jei skausmas stiprėja, tampa pulsuojantis, ilgai nepraeina po dirgiklio arba pradeda trukdyti valgyti, reikėtų kreiptis į odontologą.',
        ],
      },
      {
        h: 'Kiek laiko gali skaudėti dantį po plombavimo?',
        p: [
          'Kiek laiko skauda dantį po plombavimo, priklauso nuo to, kokio gylio buvo ėduonis, kokio dydžio plomba įdėta ir kaip jautriai reaguoja pats dantis. Dažniausiai lengvas jautrumas sumažėja per kelias dienas. Pacientas gali pastebėti, kad kiekvieną dieną dantis reaguoja vis silpniau.',
          'Jei plomba buvo gili, jautrumas gali trukti ilgiau – kartais kelias savaites. Tai gali būti normali reakcija, jei skausmas nėra stiprus ir palaipsniui mažėja. Vis dėlto ilgai trunkantis ar nekintantis skausmas neturėtų būti ignoruojamas.',
          'Jei po 2–4 savaičių vis dar skauda užplombuotą dantį, jautrumas nemažėja arba situacija blogėja, reikėtų užsiregistruoti pakartotinei odontologo apžiūrai. Greičiau kreiptis reikėtų tada, jei skausmas stiprus nuo pat pradžių, trukdo miegoti, yra pulsuojantis arba dantis labai skauda sukandus.',
        ],
      },
      {
        h: 'Skauda dantį sukandus ar kramtant – ką tai reiškia?',
        p: [
          'Jei po plombavimo skauda dantį sukandus ar kramtant, viena dažniausių priežasčių gali būti per aukšta plomba. Net labai nedidelis plombos aukščio skirtumas gali lemti, kad užplombuotas dantis pirmas susiliečia su priešingu dantimi ir gauna per didelį kramtymo krūvį.',
          'Tokiu atveju pacientas dažnai jaučia, kad „kažkas trukdo", dantis atrodo per aukštas arba skausmas atsiranda tik sukandus. Kartais maudimas gali stiprėti, nes dantis nuolat apkraunamas kiekvieno sukandimo metu.',
          'Šios problemos nereikėtų kentėti tikintis, kad ji visada praeis savaime. Odontologas gali greitai įvertinti sukandimą ir, jei reikia, pakoreguoti plombos aukštį. Po korekcijos dantis dažnai nurimsta, tačiau jei skausmas buvo užsitęsęs, jam gali prireikti šiek tiek laiko visiškai atsistatyti.',
        ],
      },
      {
        h: 'Kada reikėtų kreiptis į odontologą?',
        p: [
          'Jei po plombavimo jaučiamas tik lengvas jautrumas, kuris palaipsniui mažėja, dažniausiai pakanka stebėti situaciją. Tačiau yra požymių, kurių nereikėtų ignoruoti. Į odontologą reikėtų kreiptis, jei skausmas stiprėja, tampa pulsuojantis, pažadina naktį arba nepraeina net pašalinus dirgiklį.',
          'Pakartotinė apžiūra taip pat reikalinga, jei skauda dantį sukandus, kramtant ar atrodo, kad plomba yra per aukšta. Tokiu atveju gali reikėti tik nedidelės korekcijos, tačiau delsiant dantis gali būti papildomai dirginamas.',
          'Nedelskite, jei atsiranda patinimas, pūlinys, nemalonus skonis burnoje, temperatūra ar skausmas plinta į žandikaulį, ausį ar smilkinį. Tokie simptomai gali rodyti uždegimą, kuriam reikalingas papildomas gydymas.',
        ],
      },
      {
        h: 'Ką galima daryti namuose, kol laukiate vizito?',
        p: [
          'Jei skauda užplombuotą dantį, pirmiausia stenkitės jo papildomai nedirginti. Laikinai venkite labai šalto, karšto, saldaus, rūgštaus ar kieto maisto. Jei skauda kramtant, nekramtykite ta burnos puse, kurioje buvo plombuotas dantis.',
          'Dantis reikėtų valyti reguliariai, bet švelniai. Burnos higiena svarbi, nes apnašos ir maisto likučiai gali dar labiau dirginti dantenas ar plombos kraštus. Jei dantis jautrus šalčiui, galima rinktis jautriems dantims skirtą pastą, tačiau ji nepašalins problemos, jei priežastis yra per aukšta plomba ar uždegimas.',
          'Nereikėtų krapštyti plombos, spausti danties ar bandyti savarankiškai koreguoti sukandimo. Taip pat venkite agresyvių naminių priemonių, kurios gali pažeisti dantenas. Jei skausmas didėja ar nepraeina, geriausias sprendimas – odontologo apžiūra.',
        ],
      },
      {
        h: 'Skausmas po plombavimo dažnai laikinas, bet jį verta stebėti',
        p: [
          'Lengvas jautrumas po plombavimo dažnai yra normali danties reakcija į gydymą. Dantis gali trumpai reaguoti į temperatūros pokyčius, saldų maistą ar kramtymą, ypač jei plomba buvo gili. Svarbiausia, kad šie pojūčiai palaipsniui mažėtų.',
          'Jei skauda užplombuotą dantį sukandus, skausmas stiprėja, nepraeina kelias savaites ar tampa pulsuojantis, reikėtų kreiptis į odontologą. Kartais pakanka nedidelės plombos korekcijos, o kartais reikia išsamesnės diagnostikos. Jei jaučiate diskomfortą ir nesate tikri, ar tai normalu, registruokitės konsultacijai Bangų klinikoje Klaipėdoje.',
        ],
      },
    ],
    faq: [
      { q: 'Ar normalu, kad skauda dantį po plombavimo?', preImage: 'https://images.unsplash.com/photo-1684607633138-6cc13613369b?w=1200&q=80&fit=crop&auto=format', a: 'Lengvas jautrumas ar maudimas po plombavimo gali būti normalus, ypač pirmomis dienomis. Tačiau skausmas turėtų palaipsniui mažėti. Jei jis stiprėja arba nepraeina ilgą laiką, reikėtų kreiptis į odontologą.' },
      { q: 'Kodėl skauda užplombuotą dantį?', a: 'Dažniausios priežastys – laikinas nervo sudirgimas, gili plomba, per aukšta plomba, netaisyklingas sukandimas arba uždegimas, jei ėduonis buvo labai gilus.' },
      { q: 'Kiek laiko gali skaudėti dantį po plombavimo?', a: 'Dažniausiai jautrumas sumažėja per kelias dienas. Po gilios plombos jis gali trukti kelias savaites. Jei po 2–4 savaičių skausmas nemažėja arba stiprėja, reikėtų pakartotinės apžiūros.' },
      { q: 'Kodėl skauda dantį sukandus po plombavimo?', a: 'Dažnai taip nutinka, kai plomba yra šiek tiek per aukšta. Tuomet dantis gauna per didelį krūvį kiekvieno sukandimo metu. Odontologas gali pakoreguoti plombos aukštį.' },
      { q: 'Ką daryti, jei skauda užplombuotą dantį?', a: 'Stebėkite, ar skausmas mažėja, venkite dirginančio maisto ir nekramtykite ta puse, jei skauda sukandus. Jei skausmas stiprėja, nepraeina ar trukdo kramtyti, kreipkitės į odontologą.' },
      { q: 'Kada skausmas po plombavimo nėra normalus?', a: 'Nenormalu, jei skausmas stiprėja, yra pulsuojantis, pažadina naktį, plinta į kitas sritis, atsiranda patinimas, pūlinys ar temperatūra. Tokiais atvejais reikalinga odontologo apžiūra.' },
    ],
  },
  {
    slug: 'ar-skauda-kai-traukia-danti',
    title: 'Ar skauda, kai traukia dantį?',
    excerpt: 'Danties rovimas daugeliui kelia nerimą. Ar procedūra skausminga? Ko tikėtis po rovimo? Atsakome į dažniausius klausimus apie danties traukimą.',
    date: '2026-05-20',
    category: 'Dantų chirurgija',
    coverImage: '/kodel-verta-3.webp',
    readTime: 9,
    sections: [
      {
        p: [
          'Danties rovimas daugeliui pacientų kelia nerimą. Dažniausiai bijoma ne tik pačios procedūros, bet ir nežinojimo, ko tikėtis: ar skaudės, kiek laiko truks, ką bus galima jausti ir kaip jausitės po to. Vis dėlto šiuolaikinėje odontologijoje danties traukimas atliekamas taikant nuskausminimą, todėl procedūros metu aštraus skausmo pacientas neturėtų jausti.',
          'Svarbu suprasti, kad skausmas ir spaudimas nėra tas pats. Kai traukia dantį, galima jausti tempimą, judinimą ar spaudimą žandikaulyje, tačiau tai neturėtų būti skausminga.',
        ],
      },
      {
        h: 'Kada gali prireikti traukti dantį?',
        p: [
          'Danties šalinimas dažniausiai nėra pirmas odontologo pasirinkimas. Kai tik įmanoma, siekiama dantį išsaugoti gydant ėduonį, atkuriant danties vainiką, gydant šaknų kanalus ar taikant kitus sprendimus. Tačiau tam tikrais atvejais danties išsaugoti nepavyksta arba jo palikimas gali kelti didesnę riziką sveikatai.',
          'Dantį gali prireikti traukti tada, kai jis yra stipriai pažeistas ėduonies, nulūžęs, skilęs ar nebetinkamas atkurti plomba ar vainikėliu. Rovimas taip pat gali būti reikalingas, jei susiformavo uždegimas, pūlinys, šaknies lūžis arba dantis labai paslankus dėl periodonto ligų.',
          'Dažna danties šalinimo priežastis – problemiški protiniai dantys. Jei jie dygsta netaisyklingai, spaudžia kitus dantis, sukelia skausmą ar pasikartojantį uždegimą, odontologas gali rekomenduoti šalinimą. Kai kuriais atvejais dantis traukiamas ir ruošiantis ortodontiniam gydymui.',
        ],
      },
      {
        h: 'Ar skauda, kai traukia dantį?',
        p: [
          'Dažniausias pacientų klausimas – ar skauda, kai traukia dantį. Įprastai procedūros metu taikoma vietinė nejautra, todėl skausmo neturėtų būti. Gydytojas pradeda danties šalinimą tik tada, kai sritis aplink dantį yra pakankamai nuskausminta.',
          'Vis dėlto pacientas gali jausti tam tikrus pojūčius. Kai traukia dantį, dažnai jaučiamas spaudimas, tempimas, danties judinimas ar vibracija. Šie pojūčiai gali būti nemalonūs, ypač jei žmogus jaudinasi, tačiau jie nėra tas pats, kas aštrus skausmas. Spaudimas atsiranda todėl, kad gydytojas turi atlaisvinti dantį iš jo vietos, tačiau nuskausminimas blokuoja skausmo pojūtį.',
          'Jei procedūros metu vis dėlto jaučiate skausmą, svarbu iš karto apie tai pasakyti gydytojui. Nejautrą galima papildyti, o procedūrą trumpam pristabdyti. Pacientas neturėtų kentėti skausmo tylėdamas – bendravimas su gydytoju padeda užtikrinti saugesnę ir ramesnę procedūrą.',
        ],
      },
      {
        h: 'Ką galima jausti, kai rauna dantį?',
        p: [
          'Kai rauna dantį, pacientai dažnai tikisi skausmo, tačiau dažniausiai jaučia ne skausmą, o spaudimą. Tai normalu, nes nejautra panaikina skausmo pojūtį, bet ne visus prisilietimo ar judesio pojūčius. Todėl procedūros metu galite jausti, kad dantis yra judinamas, spaudžiamas ar tempiamas.',
          'Kartais pacientus išgąsdina ir procedūros garsai. Jie gali atrodyti nemalonūs, tačiau nebūtinai reiškia, kad kažkas vyksta blogai. Taip pat gali būti nepatogu laikyti burną plačiai atvertą, ypač jei šalinamas krūminis ar protinis dantis. Gydytojas visos procedūros metu stebi paciento reakciją, todėl jei jaučiate skausmą, įtampą ar norite trumpai sustoti, verta apie tai pasakyti.',
        ],
      },
      {
        h: 'Nuo ko priklauso, ar danties traukimas bus sudėtingas?',
        p: [
          'Danties traukimo sudėtingumas priklauso nuo kelių veiksnių. Vienas svarbiausių – danties vieta burnoje. Priekiniai dantys dažnai šalinami paprasčiau, o krūminiai ar protiniai dantys gali būti sudėtingesni dėl šaknų formos, jų skaičiaus ir sunkesnio priėjimo.',
          'Svarbu ir tai, ar dantis yra pilnai išdygęs, ar dalinai pasislėpęs po dantenomis ar kaule. Jei dantis nulūžęs, stipriai pažeistas ėduonies, turi lenktas šaknis ar aplink jį yra uždegimas, procedūra gali užtrukti ilgiau. Kartais tokiais atvejais reikalingas chirurginis šalinimas.',
          'Vis dėlto net ir sudėtingesnis danties rovimas atliekamas taikant nuskausminimą. Tai reiškia, kad procedūra gali būti ilgesnė ar techniškai sudėtingesnė, tačiau pacientas neturėtų jausti aštraus skausmo.',
        ],
      },
      {
        h: 'Ar skauda po danties rovimo?',
        image: 'https://images.unsplash.com/photo-1606811951341-756fdd437682?w=1200&q=80&fit=crop&auto=format',
        p: [
          'Pasibaigus nejautros poveikiui, po danties rovimo gali atsirasti maudimas, jautrumas ar nedidelis patinimas. Tai dažniausiai yra normali gijimo proceso dalis. Organizmas pradeda formuoti kraujo krešulį rovimo vietoje, audiniai gyja, todėl pirmomis dienomis gali būti jaučiamas diskomfortas.',
          'Po paprasto rovimo skausmas dažniausiai būna lengvesnis ir gana greitai mažėja. Po sudėtingesnio ar chirurginio šalinimo, ypač jei buvo rautas protinis dantis, maudimas ir patinimas gali būti ryškesni. Skausmo stiprumas priklauso nuo danties vietos, procedūros sudėtingumo, uždegimo buvimo ir individualios gijimo reakcijos.',
          'Gydytojas po procedūros pateikia rekomendacijas, kaip prižiūrėti žaizdą ir kontroliuoti skausmą. Svarbu jų laikytis, nes tinkama priežiūra padeda sumažinti komplikacijų riziką ir užtikrina sklandesnį gijimą.',
        ],
      },
      {
        h: 'Kiek laiko skauda ištraukus dantį?',
        p: [
          'Kiek laiko skauda ištraukus dantį, priklauso nuo procedūros sudėtingumo, danties vietos ir individualaus gijimo. Dažniausiai diskomfortas jaučiamas pirmas kelias dienas. Pirmą parą skausmas gali būti ryškesnis, ypač tada, kai visiškai praeina nejautros poveikis.',
          'Įprastai per 2–3 dienas skausmas turėtų po truputį mažėti. Po paprasto danties rovimo pacientai dažnai jaučia tik lengvą maudimą ar jautrumą. Po sudėtingesnio šalinimo, pavyzdžiui, protinio danties rovimo, diskomfortas gali išlikti ilgiau, o patinimas gali būti labiau pastebimas.',
          'Svarbu stebėti, ar būklė gerėja. Jei skausmas po kelių dienų ne mažėja, o stiprėja, atsiranda blogas kvapas, nemalonus skonis burnoje, karščiavimas, didėjantis patinimas ar gausus kraujavimas, reikėtų kreiptis į odontologą.',
        ],
      },
      {
        h: 'Kaip elgtis po danties traukimo?',
        p: [
          'Po danties traukimo labai svarbu saugoti žaizdą ir leisti jai gyti. Gydytojas po procedūros uždeda tamponą, kurį reikia laikyti tiek, kiek nurodyta. Pirmą parą nereikėtų intensyviai skalauti burnos, spjaudyti ar gerti per šiaudelį, nes tai gali išjudinti kraujo krešulį, kuris būtinas gijimui.',
          'Taip pat reikėtų vengti karšto maisto ir gėrimų. Geriau rinktis minkštą, nekarštą maistą ir kramtyti kita burnos puse. Žaizdos negalima krapštyti liežuviu, pirštais ar daiktais, nes taip galima sutrikdyti gijimą ir padidinti infekcijos riziką.',
          'Pirmomis dienomis rekomenduojama nerūkyti, nevartoti alkoholio ir vengti intensyvaus fizinio krūvio. Dantis valyti reikia, tačiau atsargiai, saugant rovimo vietą. Jei gydytojas paskyrė vaistus ar pateikė papildomas rekomendacijas, jų būtina laikytis.',
        ],
      },
      {
        h: 'Kada kreiptis į odontologą po rovimo?',
        p: [
          'Nedidelis maudimas, jautrumas ar patinimas po danties rovimo yra normalu. Tačiau kai kurie simptomai gali rodyti komplikacijas. Į odontologą reikėtų kreiptis, jei skausmas stiprėja praėjus 2–4 dienoms po procedūros, o ne palaipsniui mažėja.',
          'Taip pat svarbu susisiekti su gydytoju, jei atsiranda blogas kvapas, nemalonus skonis burnoje, pūliavimas, karščiavimas, didėjantis patinimas ar gausus kraujavimas. Nerimą turėtų kelti ir skausmas, kuris plinta į ausį, smilkinį ar žandikaulį.',
          'Tokiais atvejais nereikėtų bandyti gydytis savarankiškai. Odontologas įvertins žaizdą, nustatys priežastį ir paskirs tinkamą gydymą.',
        ],
      },
      {
        h: 'Danties traukimas neturėtų būti skausminga procedūra',
        image: 'https://images.unsplash.com/photo-1663182245833-7dd667277043?w=1200&q=80&fit=crop&auto=format',
        p: [
          'Kai traukia dantį, procedūros metu taikoma nejautra, todėl aštraus skausmo pacientas neturėtų jausti. Spaudimas, tempimas ar danties judinimas yra įprasti pojūčiai, tačiau jie nėra tas pats, kas skausmas.',
          'Ištraukus dantį, kelias dienas gali būti maudimas, jautrumas ar patinimas. Dažniausiai šie pojūčiai palaipsniui mažėja, ypač jei laikomasi gydytojo rekomendacijų. Jei jums skauda dantį ar gydytojas rekomendavo šalinimą, registruokitės konsultacijai Bangų klinikoje Klaipėdoje.',
        ],
      },
    ],
    faq: [
      { q: 'Ar skauda, kai traukia dantį?', a: 'Dažniausiai ne, nes prieš procedūrą taikoma vietinė nejautra. Galima jausti spaudimą, tempimą ar danties judinimą, bet ne aštrų skausmą.' },
      { q: 'Ką jaučia pacientas, kai rauna dantį?', a: 'Kai rauna dantį, dažniausiai jaučiamas spaudimas, judesys, tempimas ar vibracija. Šie pojūčiai gali būti nemalonūs, bet jie nėra tolygūs skausmui.' },
      { q: 'Kiek laiko skauda ištraukus dantį?', a: 'Dažniausiai diskomfortas jaučiamas kelias dienas ir palaipsniui mažėja. Po sudėtingesnio rovimo maudimas gali išlikti ilgiau. Jei skausmas stiprėja po kelių dienų, reikia kreiptis į odontologą.' },
      { q: 'Ar galima papildomai nuskausminti, jei procedūros metu skauda?', a: 'Taip. Jei procedūros metu jaučiate skausmą, būtina iš karto pasakyti gydytojui. Nejautra gali būti papildyta, o procedūra trumpam pristabdyta.' },
      { q: 'Ko negalima daryti po danties rovimo?', a: 'Po rovimo nereikėtų intensyviai skalauti burnos, spjaudyti, gerti per šiaudelį, valgyti karšto maisto, rūkyti, vartoti alkoholio ar krapštyti žaizdos.' },
      { q: 'Kada po rovimo reikia kreiptis į gydytoją?', a: 'Į gydytoją reikia kreiptis, jei skausmas stiprėja, atsiranda blogas kvapas, nemalonus skonis, pūliavimas, karščiavimas, didėjantis patinimas ar gausus kraujavimas.' },
    ],
  },
  {
    slug: 'ka-daryti-kai-skauda-protini-danti',
    title: 'Ką daryti, kai skauda protinį dantį?',
    excerpt: 'Protinio danties skausmas – viena dažniausių priežasčių, dėl kurių pacientai skubiai kreipiasi į odontologą. Sužinokite, ką daryti ir kada būtina apsilankyti pas gydytoją.',
    date: '2026-05-13',
    category: 'Dantų gydymas',
    coverImage: '/kodel-verta-2.webp',
    readTime: 12,
    sections: [
      {
        p: [
          'Protinių dantų skausmas – viena dažniausių priežasčių, dėl kurios pacientai kreipiasi į odontologą skubiau nei planavo. Šie dantys dygsta vėliausiai, dažniausiai jau suaugus, kai žandikaulyje ne visada lieka pakankamai vietos. Dėl to protinis dantis gali dygti netaisyklingai, spausti šalia esančius dantis, likti dalinai prasikalęs arba sukelti dantenų uždegimą.',
          'Jei skauda protinį dantį, svarbu suprasti, kad skausmo priežastys gali būti skirtingos. Kartais tai tik laikinas dygimo diskomfortas, tačiau kitais atvejais skausmas rodo uždegimą, infekciją, ėduonį ar įstrigusį dantį. Todėl nereikėtų ilgai laukti ir tikėtis, kad problema praeis savaime.',
        ],
      },
      {
        h: 'Kodėl skauda protinį dantį?',
        p: [
          'Protinis dantis gali skaudėti dėl kelių priežasčių. Viena dažniausių – dygimas. Kai dantis bando prasikalti pro dantenas, aplinkiniai audiniai gali tapti jautrūs, patinę ir skausmingi. Jei žandikaulyje vietos pakanka, šis procesas gali praeiti be didesnių problemų. Tačiau dažnai protiniams dantims vietos būna per mažai.',
          'Kai protinis dantis neturi pakankamai vietos, jis gali dygti kreivai, remtis į gretimą dantį arba likti dalinai įstrigęs kaule ar po dantenomis. Tokia padėtis gali sukelti spaudimą, maudimą, skausmą kramtant ar net žandikaulio įtampą. Kartais skausmas plinta į ausį, smilkinį ar visą žandikaulio pusę.',
          'Dar viena dažna priežastis – dantenų uždegimas aplink dalinai prasikalusį protinį dantį. Kai virš danties lieka dantenų „gaubtas", po juo gali kauptis maisto likučiai ir bakterijos. Šią vietą sunku gerai išvalyti, todėl dantenos parausta, patinsta, tampa skausmingos, gali atsirasti nemalonus skonis ar kvapas burnoje.',
          'Protinius dantis taip pat dažnai pažeidžia ėduonis, nes jie yra pačiame burnos gale ir juos sunkiau pasiekti šepetėliu. Net nedidelis pažeidimas gali greitai sukelti jautrumą, o vėliau – stipresnį skausmą ar nervo uždegimą.',
        ],
      },
      {
        h: 'Kaip atpažinti, kad skauda būtent protinį dantį?',
        p: [
          'Ne visada lengva tiksliai suprasti, kuris dantis sukelia skausmą. Protinio danties skausmas dažniausiai jaučiamas pačiame žandikaulio gale, už paskutinio krūminio danties. Skausmas gali būti maudžiantis, pulsuojantis arba sustiprėti kramtant, plačiau išsižiojant ar liečiant dantenas toje vietoje.',
          'Dažnas požymis – patinusios ar jautrios dantenos aplink protinį dantį. Jei dantis prasikalęs tik iš dalies, gali atrodyti, kad dalį jo dengia dantenos. Šioje vietoje gali kauptis maistas, todėl atsiranda blogas burnos kvapas, nemalonus skonis ar jausmas, kad dantenos yra sudirgusios.',
          'Kartais protinio danties problema pasireiškia ne tik vietiniu skausmu. Skausmas gali plisti į ausį, smilkinį, gerklę ar visą žandikaulio pusę. Kai kuriems pacientams tampa sunkiau pilnai išsižioti, kramtyti ar valyti dantis toje pusėje. Jei yra uždegimas, gali atsirasti patinimas, bendras silpnumas ar pakilti temperatūra.',
        ],
      },
      {
        h: 'Skauda protinį dantį – ką daryti pirmiausia?',
        p: [
          'Kai skauda protinį dantį, pirmiausia reikėtų įvertinti, ar skausmas yra lengvas ir laikinas, ar stiprus, didėjantis ir lydimas kitų simptomų. Jeigu jaučiamas tik nedidelis maudimas dygstančio danties srityje, galima pradėti nuo švelnios burnos higienos ir skaudamos vietos stebėjimo.',
          'Pirmas žingsnis – atsargiai išsivalyti dantis, ypač sritį aplink protinį dantį. Kadangi šie dantys yra pačiame žandikaulio gale, aplink juos dažnai kaupiasi maisto likučiai ir apnašos. Valyti reikėtų švelniai, nenaudojant jėgos, kad dar labiau nesudirgintumėte dantenų.',
          'Burną galima praskalauti drungnu vandeniu. Reikėtų vengti labai karšto, šalto, aštraus, kieto ar lipnaus maisto. Jei yra patinimas, prie išorinės skruosto pusės galima trumpais intervalais pridėti šaltą kompresą. Jo nereikėtų dėti tiesiai ant odos – geriau įvynioti į rankšluostį.',
          'Svarbu nekrapštyti dantenų aštriais daiktais, nebandyti pradurti patinusios vietos ir nedėti vaistų tiesiai ant dantenų. Namų priemonės gali tik laikinai palengvinti simptomus, tačiau jos nepašalina priežasties.',
        ],
      },
      {
        h: 'Kada būtina kreiptis į odontologą?',
        image: 'https://images.unsplash.com/photo-1684607633217-462056580c3c?w=1200&q=80&fit=crop&auto=format',
        p: [
          'Į odontologą reikėtų kreiptis tada, kai protinio danties skausmas nepraeina, kartojasi arba stiprėja. Net jei skausmas kuriam laikui sumažėja, tai nebūtinai reiškia, kad problema išnyko. Uždegimas aplink protinį dantį gali atsinaujinti, o negydomas ilgainiui sukelti didesnį patinimą, infekciją ar pažeisti šalia esančius dantis.',
          'Skubi odontologo apžiūra reikalinga, jei skausmas yra stiprus, pulsuojantis, trukdo miegoti, valgyti ar normaliai išsižioti. Taip pat nereikėtų delsti, jei patino dantenos, žandas ar veidas, atsirado pūlinys, blogas skonis burnoje, nemalonus kvapas ar pakilo temperatūra.',
          'Svarbu kreiptis ir tuomet, kai skausmas plinta į ausį, smilkinį, gerklę ar visą žandikaulio pusę. Dažnai protinio danties būklei įvertinti reikalinga rentgeno nuotrauka. Ji padeda pamatyti, kaip dantis išsidėstęs kaule, ar jis spaudžia gretimą dantį ir kokia šaknų padėtis.',
        ],
      },
      {
        h: 'Ar visada reikia rauti protinį dantį?',
        p: [
          'Ne, protinį dantį ne visada reikia rauti. Jei dantis išdygęs taisyklingai, nespaudžia kitų dantų, nesukelia uždegimo ir jį galima kokybiškai išvalyti, jis gali likti burnoje. Tokiu atveju svarbiausia reguliari priežiūra, gera burnos higiena ir profilaktinės odontologo apžiūros.',
          'Tačiau protiniai dantys dažnai kelia problemų dėl savo padėties. Kadangi jie yra pačiame žandikaulio gale, juos sunkiau pasiekti šepetėliu ir tarpdančių priemonėmis. Jei dantis pažeistas taip, kad jo kokybiškai gydyti neįmanoma, gali būti rekomenduojamas šalinimas.',
          'Rovimas taip pat svarstomas, kai protinis dantis dygsta kreivai, remiasi į gretimą dantį, sukelia spaudimą ar pažeidžia šalia esančius audinius. Sprendimas dėl rovimo priimamas individualiai – odontologas įvertina paciento nusiskundimus, danties padėtį, rentgeno nuotrauką ir galimybes dantį prižiūrėti ar gydyti.',
        ],
      },
      {
        h: 'Ar skauda, kai rauna protinį dantį?',
        p: [
          'Vienas dažniausių pacientų klausimų – ar skauda, kai rauna protinį dantį. Dažniausiai pati procedūra atliekama taikant vietinę nejautrą, todėl aštraus skausmo pacientas neturėtų jausti. Prieš pradedant rovimo procedūrą, gydytojas pasirūpina, kad danties ir aplinkinių audinių sritis būtų nuskausminta.',
          'Procedūros metu galima jausti spaudimą, tempimą, judesį ar vibraciją, tačiau tai nėra tas pats, kas skausmas. Jei pacientas vis dėlto jaučia skausmą, svarbu iš karto pasakyti gydytojui – nejautrą galima papildyti.',
          'Tai, kiek sudėtinga bus pašalinti protinį dantį, priklauso nuo jo padėties. Jei dantis visiškai išdygęs ir šaknys nėra sudėtingos, rovimas dažnai būna paprastesnis. Jei protinis dantis įstrigęs, dygsta kreivai arba yra po dantenomis ar kaule, gali prireikti chirurginio šalinimo.',
        ],
      },
      {
        h: 'Ar skauda išrovus protinį dantį?',
        image: 'https://images.unsplash.com/photo-1676897288522-e8a081e71430?w=1200&q=80&fit=crop&auto=format',
        p: [
          'Po protinio danties rovimo, pasibaigus nejautros poveikiui, gali atsirasti maudimas, jautrumas, patinimas ar tempimo pojūtis. Tai yra normali gijimo proceso dalis, ypač jei dantis buvo šalinamas sudėtingiau.',
          'Kiek skauda išrovus protinį dantį, priklauso nuo danties padėties, šaknų formos, rovimo sudėtingumo, uždegimo buvimo ir individualios gijimo reakcijos. Gydytojas po procedūros pateikia rekomendacijas, kaip kontroliuoti skausmą ir prižiūrėti žaizdą.',
          'Jei po kelių dienų skausmas stiprėja, atsiranda blogas kvapas, nemalonus skonis burnoje, karščiavimas, gausus kraujavimas ar didėjantis patinimas, reikėtų kreiptis į odontologą.',
        ],
      },
      {
        h: 'Ko nedaryti, kai skauda protinį dantį?',
        p: [
          'Kai skauda protinį dantį, svarbu ne tik žinoti, ką daryti, bet ir ko vengti. Viena dažniausių klaidų – bandymas skausmą malšinti dedant vaistus tiesiai ant dantenų ar danties. Aspirinas, spiritas, česnakas ar kitos dirginančios medžiagos gali pažeisti burnos gleivinę ir dar labiau sustiprinti diskomfortą.',
          'Nereikėtų šildyti patinusios vietos. Jei skausmą sukelia uždegimas ar pūlinys, šiluma gali pabloginti situaciją ir paskatinti infekcijos plitimą. Taip pat nerekomenduojama savarankiškai vartoti antibiotikų be gydytojo paskyrimo.',
          'Svarbiausia – neatidėlioti vizito, jei skausmas stiprėja, kartojasi, atsiranda patinimas, temperatūra ar sunku išsižioti. Pasikartojantis protinio danties uždegimas dažniausiai neišnyksta savaime, todėl jį turi įvertinti odontologas.',
        ],
      },
      {
        h: 'Protinio danties skausmo nereikėtų ignoruoti',
        p: [
          'Jei skauda protinį dantį, svarbiausia nustatyti tikrąją skausmo priežastį. Nors kartais diskomfortas gali būti susijęs su dygimu, dažnai skausmą sukelia dantenų uždegimas, vietos trūkumas, netaisyklinga danties padėtis, ėduonis ar infekcija.',
          'Laiku atlikta odontologo apžiūra padeda suprasti, ar protinį dantį galima stebėti, gydyti, ar vis dėlto reikalingas jo šalinimas. Kuo anksčiau kreipiamasi, tuo lengviau suvaldyti uždegimą ir išvengti sudėtingesnių komplikacijų. Registruokitės konsultacijai Bangų klinikoje Klaipėdoje.',
        ],
      },
    ],
    faq: [
      { q: 'Ką daryti, jei skauda protinį dantį?', a: 'Pirmiausia švelniai išsivalykite dantis, praskalaukite burną drungnu vandeniu ir venkite kieto, karšto ar aštraus maisto. Jei yra patinimas, prie skruosto iš išorės galima trumpam pridėti šaltą kompresą. Jei skausmas stiprus ar kartojasi, kreipkitės į odontologą.' },
      { q: 'Kiek laiko skauda po protinio danties rovimo?', a: 'Diskomfortas po protinio danties rovimo dažniausiai jaučiamas kelias dienas. Trukmė priklauso nuo danties padėties, procedūros sudėtingumo ir individualaus gijimo. Jei skausmas ne mažėja, o stiprėja, reikėtų pasitarti su odontologu.' },
      { q: 'Ko negalima daryti po protinio danties rovimo?', a: 'Po rovimo pirmą parą nereikėtų intensyviai skalauti burnos, spjaudyti, gerti per šiaudelį ar valgyti karšto maisto. Pirmomis dienomis taip pat reikėtų vengti rūkymo ir alkoholio.' },
    ],
  },
  {
    slug: 'ka-daryti-kai-skauda-danti',
    title: 'Ką daryti, kai skauda dantį?',
    excerpt: 'Danties skausmas dažnai užklumpa netikėtai. Ką daryti, kai skauda dantį ir kaip atskirti, kada tai skubi situacija? Atsakome į dažniausius klausimus.',
    date: '2026-05-06',
    category: 'Skubi pagalba',
    coverImage: 'https://images.unsplash.com/photo-1602932213623-cc17e9541bb4?w=1200&q=80&fit=crop&auto=format',
    readTime: 10,
    sections: [
      {
        p: [
          'Danties skausmas dažnai užklumpa netikėtai: vakare, darbe, kelionėje ar savaitgalį, kai ne visada aišku, ką daryti ir kur kreiptis. Kartais skausmas būna trumpalaikis, pavyzdžiui, dėl jautrumo šalčiui ar maisto likučių tarpdančiuose. Tačiau stiprus, pulsuojantis ar ilgiau nepraeinantis skausmas gali signalizuoti apie rimtesnę problemą – ėduonį, danties nervo uždegimą, infekciją, pūlinį, traumą ar iškritusią plombą.',
          'Svarbiausia – neignoruoti skausmo ir nebandyti jo ilgai slopinti vien namų priemonėmis. Laikinas palengvėjimas dar nereiškia, kad problema išnyko. Kuo anksčiau nustatoma skausmo priežastis, tuo paprastesnis ir greitesnis gali būti gydymas.',
        ],
      },
      {
        h: 'Pirmi veiksmai, kai pradeda skaudėti dantį',
        p: [
          'Kai pradeda skaudėti dantį, pirmiausia reikėtų įvertinti, ar skausmą galėjo sukelti maisto likučiai, įstrigę tarp dantų ar prie dantenų. Atsargiai išsivalykite dantis minkštu šepetėliu ir naudokite tarpdančių siūlą arba tarpdančių šepetėlius. Svarbu tai daryti švelniai, kad papildomai nesudirgintumėte dantenų.',
          'Burną galite praskalauti drungnu vandeniu. Venkite labai karšto, šalto, saldaus ar kieto maisto, nes jis gali sustiprinti jautrumą ir skausmą. Jei pastebite žando ar dantenų patinimą, prie išorinės skruosto pusės galima trumpam pridėti šaltą kompresą. Jo nereikėtų dėti tiesiai ant odos – geriau įvynioti į rankšluostį.',
          'Kai skauda dantį ir nėra vaistų, šie veiksmai gali padėti laikinai sumažinti diskomfortą, tačiau jie nepašalina skausmo priežasties. Jeigu skausmas stiprėja, kartojasi arba atsiranda papildomų simptomų, būtina registruotis odontologo apžiūrai.',
        ],
      },
      {
        h: 'Jei labai skauda dantį – kada tai skubi situacija?',
        p: [
          'Jei labai skauda dantį, ypač kai skausmas yra pulsuojantis, stiprėja naktį ar trukdo miegoti, tai gali būti ženklas, kad problema yra rimtesnė nei paprastas jautrumas. Skubi odontologo apžiūra reikalinga tada, kai skausmas nepraeina kelias valandas, plinta į žandikaulį, ausį, smilkinį ar galvą, taip pat kai kartu atsiranda dantenų, žando ar veido patinimas.',
          'Nereikėtų delsti ir tais atvejais, kai burnoje matomas pūlinys, jaučiamas nemalonus skonis, pakyla temperatūra, sunku išsižioti ar kramtyti. Skubi pagalba taip pat reikalinga po danties traumos – jei dantis nuskilo, lūžo, buvo išmuštas, iškrito plomba ar karūnėlė ir dantis tapo labai jautrus.',
          'Tokiose situacijose skausmo malšinimas namuose gali būti tik laikinas sprendimas. Tik odontologas gali nustatyti tikslią priežastį ir parinkti tinkamą gydymą.',
        ],
      },
      {
        h: 'Ką daryti, kai skauda dantį ir nėra vaistų?',
        p: [
          'Kai skauda dantį ir nėra vaistų, svarbiausia nepanikuoti ir vengti veiksmų, kurie gali pabloginti situaciją. Pirmiausia švelniai išsivalykite dantis, pašalinkite maisto likučius iš tarpdančių ir praskalaukite burną drungnu vandeniu.',
          'Jeigu yra patinimas, prie skruosto iš išorės galima pridėti šaltą kompresą. Jį laikykite trumpais intervalais ir nedėkite ledo tiesiai ant odos. Svarbu vengti karštų kompresų, nes šiluma gali paskatinti uždegimo plitimą, ypač jei susiformavęs pūlinys.',
          'Nereikėtų dėti aspirino, česnako, spirito ar kitų dirginančių medžiagų tiesiai ant dantenų ar danties. Tokie metodai gali nudeginti gleivinę ir sukelti dar didesnį skausmą. Jei skausmas stiprus, kartojasi ar atsiranda patinimas, būtina kreiptis į odontologą.',
        ],
      },
      {
        h: 'Kur kreiptis, kai skauda dantį?',
        image: 'https://images.unsplash.com/photo-1681939278218-a755fb2bf2d3?w=1200&q=80&fit=crop&auto=format',
        p: [
          'Kai skauda dantį, svarbu įvertinti skausmo stiprumą ir kitus simptomus. Jei skausmas nestiprus, pasireiškia tik valgant ar geriant šaltus gėrimus, galima registruotis į įprastą odontologo konsultaciją artimiausiu metu. Tačiau jei skausmas stiprus, pulsuojantis, trukdo miegoti, kartu atsiranda patinimas, pūlinys, kraujavimas ar danties trauma, reikalinga skubi odontologinė pagalba.',
          'Tokiais atvejais geriausia kreiptis į odontologijos kliniką, kuri teikia skubią pagalbą. Vizito metu gydytojas įvertina danties būklę, nustato skausmo priežastį ir parenka tinkamiausią sprendimą.',
          'Bangų klinikoje Klaipėdoje teikiama skubi odontologinė pagalba pacientams, kuriuos vargina stiprus danties skausmas, patinimas, danties trauma, iškritusi plomba ar kitos ūmios problemos. Laiku kreipiantis pagalbos galima greičiau numalšinti skausmą ir sumažinti komplikacijų riziką.',
        ],
      },
      {
        h: 'Skauda dantį savaitgalį – ką daryti?',
        p: [
          'Jeigu skauda dantį savaitgalį, pirmiausia įvertinkite, ar situacija gali palaukti iki artimiausio odontologo vizito. Jei skausmas nestiprus, nėra patinimo, karščiavimo, pūlinio ar traumos požymių, laikinai venkite kieto, karšto, šalto ir saldaus maisto, palaikykite burnos higieną ir registruokitės vizitui artimiausiu metu.',
          'Tačiau jei skausmas labai stiprus, pulsuojantis, nepraeina, trukdo miegoti, patino žandas ar dantenos, atsirado pūlinys, temperatūra ar sunku išsižioti, delsti nereikėtų. Tokie simptomai gali rodyti infekciją ar ūmų uždegimą, kuriam reikalinga skubi pagalba.',
          'Bangų klinikos darbo laikas nurodomas klinikos svetainėje, todėl prieš vykstant visada rekomenduojama pasitikrinti aktualią informaciją ir susisiekti dėl registracijos.',
        ],
      },
      {
        h: 'Dažniausios danties skausmo priežastys',
        image: 'https://images.unsplash.com/photo-1592400400196-bf709e32aa88?w=1200&q=80&fit=crop&auto=format',
        p: [
          'Danties skausmas gali atsirasti dėl skirtingų priežasčių, todėl vien pagal pojūtį ne visada lengva suprasti, kas tiksliai nutiko. Viena dažniausių priežasčių – ėduonis. Iš pradžių jis gali sukelti tik jautrumą saldžiam, šaltam ar karštam maistui, tačiau pažeidimui gilėjant skausmas tampa stipresnis ir dažnesnis.',
          'Kita dažna priežastis – danties nervo uždegimas. Tokiu atveju skausmas dažnai būna pulsuojantis, stipresnis vakare ar naktį, gali plisti į žandikaulį, ausį ar smilkinį. Skausmą taip pat gali sukelti dantenų uždegimas, pūlinys, protinių dantų dygimas, danties trauma, nuskilimas ar lūžis.',
          'Kartais skausmas atsiranda iškritus plombai ar karūnėlei, kai dantis tampa jautrus temperatūros pokyčiams ir kramtymui. Kadangi priežasčių gali būti daug, tiksliausiai jas nustato odontologas apžiūros metu.',
        ],
      },
      {
        h: 'Kaip vyksta skubus vizitas pas odontologą?',
        p: [
          'Skubaus vizito metu odontologas pirmiausia išklauso paciento nusiskundimus: kada prasidėjo skausmas, koks jo pobūdis, ar yra patinimas, trauma, jautrumas, karščiavimas ar kiti simptomai. Tuomet atliekama burnos apžiūra, įvertinama dantų, dantenų ir aplinkinių audinių būklė.',
          'Jei vien apžiūros nepakanka, gali būti atliekamas rentgeno tyrimas. Jis padeda tiksliau nustatyti, ar yra gilus ėduonis, uždegimas šaknų srityje, pūlinys, danties lūžis ar kita problema.',
          'Pagrindinis skubaus vizito tikslas – sumažinti skausmą, suvaldyti ūmią būklę ir nuspręsti, koks gydymas reikalingas toliau. Kartais problema išsprendžiama to paties vizito metu, o kartais atliekamas laikinas gydymas ir sudaromas tolimesnis planas.',
        ],
      },
      {
        h: 'Greita reakcija padeda išvengti sudėtingesnio gydymo',
        p: [
          'Danties skausmas – tai signalas, kad burnoje vyksta pokyčiai, kurių nereikėtų ignoruoti. Net jei skausmas atrodo pakenčiamas arba trumpam sumažėja, jo priežastis gali išlikti. Laiku kreipiantis į odontologą, dažnai galima greičiau sustabdyti uždegimą, sumažinti skausmą ir išvengti sudėtingesnio gydymo ateityje.',
          'Namų priemonės gali padėti tik laikinai palengvinti būklę, tačiau jos nepakeičia profesionalios apžiūros. Ypač svarbu nedelsti, jei skausmas stiprus, pulsuojantis, atsirado patinimas, pūlinys, karščiavimas ar dantis buvo pažeistas traumos metu.',
          'Jei skauda dantį, registruokitės konsultacijai Bangų klinikoje Klaipėdoje. Gydytojas įvertins situaciją, nustatys skausmo priežastį ir pasiūlys tinkamiausią gydymo sprendimą.',
        ],
      },
    ],
    faq: [
      { q: 'Ką daryti, jei labai skauda dantį?', a: 'Jei labai skauda dantį, pirmiausia švelniai išsivalykite dantis, praskalaukite burną drungnu vandeniu ir venkite karšto, šalto, saldaus ar kieto maisto. Jei yra patinimas, prie skruosto iš išorės galima pridėti šaltą kompresą. Stiprus, pulsuojantis ar ilgai nepraeinantis skausmas – ženklas, kad reikalinga odontologo apžiūra.' },
      { q: 'Ką daryti, kai skauda dantį ir nėra vaistų?', a: 'Švelniai išsivalykite dantis, praskalaukite burną drungnu vandeniu, naudokite šaltą kompresą jei yra patinimas. Nedėkite aspirino, česnako ar spirito tiesiai ant dantenų – tai gali pažeisti gleivinę. Kreipkitės į odontologą, jei skausmas stiprus ar kartojasi.' },
      { q: 'Ar danties skausmas gali praeiti savaime?', a: 'Kartais danties skausmas gali trumpam sumažėti, tačiau tai nebūtinai reiškia, kad problema išnyko. Uždegimas ar infekcija gali toliau progresuoti. Jei skausmas kartojasi ar stiprėja, reikėtų kreiptis į odontologą.' },
      { q: 'Kur kreiptis, kai skauda dantį?', a: 'Jei skausmas nestiprus, galima registruotis į artimiausią odontologo konsultaciją. Jei skausmas stiprus, pulsuojantis, yra patinimas, pūlinys ar trauma, reikėtų kreiptis dėl skubios pagalbos. Bangų klinikoje Klaipėdoje teikiama pagalba esant ūmiam danties skausmui.' },
      { q: 'Ką daryti, jei dantį skauda savaitgalį?', a: 'Įvertinkite simptomų rimtumą. Jei skausmas nestiprus, nėra patinimo ar pūlinio – registruokitės vizitui artimiausiu metu. Jei skausmas labai stiprus, patino veidas ar atsiranda pūlinys ir temperatūra – kreipkitės į skubią pagalbą.' },
      { q: 'Ar galima šildyti skaudamą dantį?', a: 'Šildyti skaudamos vietos nerekomenduojama, ypač jei yra patinimas ar įtariamas pūlinys. Šiluma gali paskatinti uždegimo plitimą. Saugesnis pasirinkimas – šaltas kompresas iš išorinės skruosto pusės.' },
    ],
  },
]

export function getPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find(p => p.slug === slug)
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr)
  return d.toLocaleDateString('lt-LT', { year: 'numeric', month: 'long', day: 'numeric' })
}
