export type PriceItem = {
  name: string
  from?: number
  to?: number
  note?: string
  /** Rodyti fiksuotą kainą be „nuo“ */
  exact?: boolean
}
export type PriceGroup = { title: string; items: PriceItem[] }

export const PRICING: PriceGroup[] = [
  {
    title: "Dantų gydymo kainoraštis",
    items: [
      { name: "Konsultacija iki 30 min", from: 20, exact: true },
      { name: "Konsultacija iki 15 min", from: 25, exact: true, note: "Konsultacija, profilaktinis patikrinimas" },
      { name: "Gydymo plano sudarymas", from: 30, exact: true, note: "Išsamus, individualus gydymo planas su gydymo kainomis" },
      { name: "Nuskausminimas", from: 10, exact: true, note: "Infiltracinė nejautra" },
    ],
  },

  {
    title: "Dantų gydymas (suaugusių)",
    items: [
      // Stiklo jonomerinės plombos
      { name: "Stiklo jonomerinė plomba (maža)", from: 40, exact: true },
      { name: "Stiklo jonomerinė plomba (didelė)", from: 60, exact: true },

      // Helio plombos (šviesoje kietėjantis kompozitas)
      { name: "Helio plomba (maža)", from: 60, exact: true, note: "Šviesoje kietėjantis kompozitas" },
      { name: "Helio plomba (vidutinė)", from: 80, exact: true, note: "Šviesoje kietėjantis kompozitas" },
      { name: "Helio plomba (didelė)", from: 100, exact: true, note: "Šviesoje kietėjantis kompozitas" },

      { name: "Gydomasis pamušalas (kalcio hidroksido pagrindu)", from: 5, exact: true },
      { name: "Stiklo jonomerinis pamušalas", from: 5, exact: true },

      { name: "Laikina plomba (didelė)", from: 30, exact: true },
      { name: "Laikina plomba (maža)", from: 15, exact: true },

      { name: "Estetinis plombavimas (1 danties)", from: 150, note: "Nuo" },
      { name: "Plombos pataisa", from: 50, exact: true },
      { name: "Biodentino uždėjimas (MTA)", from: 40, exact: true },
    ],
  },

  {
    title: "Pieninių dantų gydymas",
    items: [
      {
        name: "Pieninių dantų gydymas",
        from: 25,
        exact: true,
        note: "Konsultacija, gydymo plano sudarymas, dokumentų pildymas, pažymos mokyklai/darželiui pildymas",
      },
      { name: "Apsilankymas 30 min., kai vaikas nesileidžia gydyti dantų", from: 30, exact: true },
      { name: "Stiklo jonomerinė plomba", from: 30, exact: true },
      { name: "Kompomerinė plomba", from: 40, exact: true },
      { name: "Komplikuotas ėduonies gydymas (pulpitas, periodontitas)", from: 60, exact: true },
      { name: "Dantų vagelių hermetizavimas silantais (1 dantis)", from: 15, exact: true },
    ],
  },

  {
    title: "Endodontija",
    items: [
      { name: "Pirminė endodontinė pagalba (pulpito atveju)", from: 90, exact: true },
      {
        name: "Vieno danties šaknies kanalo chemomechaninis paruošimas (pirminis gydymas)",
        from: 40,
        exact: true,
      },
      {
        name: "Kanalo medikamentinis gydymas",
        from: 20,
        exact: true,
        note: "Kalcio hidroksido pastos įvedimas arba eugenolio tvarstelis",
      },
      { name: "Vieno danties šaknies kanalo užplombavimas", from: 40, exact: true },
      { name: "Koferdamas", from: 10, exact: true },
    ],
  },

  {
    title: "Profesionali burnos higiena (apnašų/konkrementų pašalinimas)",
    items: [
      { name: "Pilna profesionali burnos higiena (vienas vizitas)", from: 80, exact: true },
      { name: "Konkrementų pašalinimas (pirminis vizitas)", from: 60, exact: true },
      { name: "Konkrementų pašalinimas + poliravimas AIR FLOW (antrinis vizitas)", from: 60, exact: true },
      { name: "Poliravimas AIR FLOW aparatu", from: 50, exact: true },
      { name: "Medikamentinis dantenų gydymas (1 dantis)", from: 15, exact: true },
      { name: "Fluoro lako aplikacija (1 dantis)", from: 10, exact: true },
    ],
  },

  {
    title: "Dantų balinimas",
    items: [
      { name: "Ofisinis balinimas BEYOND aparatu (pirmą kartą)", from: 250, exact: true },
      { name: "Ofisinis balinimas BEYOND aparatu (kartojant procedūrą)", from: 150, exact: true },
      { name: "Dantų balinimo kapos (2 kapos + balinimo gelis)", from: 200, exact: true },
      { name: "Balinimo gelis (1 švirkštas)", from: 30, exact: true },
      { name: "Balinimo kapos (2 vnt)", from: 130, exact: true },
      { name: "Vidinis negyvo danties balinimas (1 dantis)", from: 20, exact: true },
      { name: "Swarovski danties papuošalo įdėjimas", from: 50, exact: true },
      { name: "Icon procedūra (1 dantis)", from: 80, exact: true },
    ],
  },

  {
    title: "Burnos chirurgijos kainoraštis",
    items: [
      { name: "Konsultacija iki 30 min", from: 20, exact: true },
      { name: "Gydymo plano sudarymas", from: 30, exact: true, note: "Išsamus, individualus gydymo planas su gydymo kainomis" },

      { name: "Pieninio danties rovimas su aplikaciniu nuskausminimu", from: 30, exact: true },
      { name: "Pieninio danties rovimas su injekciniu nuskausminimu", from: 50, exact: true },

      { name: "Nuolatinio danties rovimas", from: 100, exact: true, note: "Vienkartinės medžiagos ir nuskausminimas įskaičiuota" },
      { name: "Nuolatinio danties šaknies rovimas", from: 70, exact: true, note: "Vienkartinės medžiagos ir nuskausminimas įskaičiuota" },
      { name: "Sudėtingas nuolatinio danties rovimas", from: 120, exact: true, note: "Vienkartinės medžiagos ir nuskausminimas įskaičiuota" },
      {
        name: "Sudėtingas nuolatinio danties šaknies rovimas",
        from: 90,
        exact: true,
        note: "Vienkartinės medžiagos ir nuskausminimas įskaičiuota",
      },
      {
        name: "Trečiųjų apatinių krūminių dantų rovimas",
        from: 150,
        exact: true,
        note: "Vienkartinės medžiagos ir nuskausminimas įskaičiuota",
      },

      { name: "Klinikinis danties vainiko prailginimas", from: 60, exact: true },
      { name: "Alveolito gydymas (1 seansas)", from: 30, exact: true },
      { name: "Incizija (pjūviai uždegimo metu)", from: 50, exact: true },
      { name: "Siūlų išėmimas", from: 10, exact: true },

      { name: "Chirurginis gidas implantacijai", from: 100, exact: true },

      { name: "Neodent implanto įsukimas ir priedai (1 vnt., chirurginė dalis)", from: 500, exact: true },
      { name: "Straumann SLA implanto įsukimas ir priedai (1 vnt., chirurginė dalis)", from: 650, exact: true },
      { name: "Straumann SLA Active implanto įsukimas ir priedai (1 vnt., chirurginė dalis)", from: 790, exact: true },

      { name: "Neodent gijimo galvutė", from: 80, exact: true },
      { name: "Straumann gijimo galvutė", from: 100, exact: true },

      { name: "Sinuso dugno pakėlimo operacija uždaru būdu (per implanto ložę)", from: 200, exact: true },
      { name: "Sinuso dugno pakėlimo operacija atviru būdu (per sinuso langelį)", from: 600, exact: true },

      { name: "Kaulo augmentacija nuosavu arba kaulo pakaitalu", from: 450, note: "Nuo" },
      {
        name: "Pastaba dėl kaulo priauginimo medžiagų",
        note:
          "Chirurginių operacijų ir implantacijos metu gali prireikti dirbtinio kaulo ir/ar membranos (kaulo priauginimas) – kaina priklauso nuo sunaudotų medžiagų kiekio. Chirurginių procedūrų kainos nurodytos su nuskausminimu.",
      },
    ],
  },

  {
    title: "Dantų protezavimas (ant dantų)",
    items: [
      { name: "Konsultacija", from: 20, exact: true },
      { name: "Gydymo plano sudarymas", from: 30, exact: true, note: "Išsamus, individualus gydymo planas su gydymo kainomis" },

      { name: "Laikinas plastmasinis vainikėlis (pagamintas kabinete)", from: 40, exact: true },
      { name: "Laikinas plastmasinis vainikėlis (pagamintas laboratorijoje)", from: 80, exact: true },

      { name: "Metalo keramikos vainikėlis", from: 350, exact: true },
      { name: "Keramikos vainikėlis cirkonio oksido pagrindu", from: 400, exact: true },
      { name: "E-max presuotos bemetalės keramikos vainikėlis", from: 400, exact: true },

      { name: "Vainiko kulties šlifavimas / paruošimas", from: 50, exact: true },

      { name: "Vainiko atstatymas ant stiklo pluošto kaiščio su helio plomba (priekinis dantis)", from: 70, exact: true },
      { name: "Vainiko atstatymas ant stiklo pluošto kaiščio su helio plomba (krūminis dantis)", from: 100, exact: true },
      { name: "Pilnas vainiko atstatymas ant stiklo pluošto kaiščio su helio plomba", from: 150, exact: true },

      { name: "Kosmetinė plokštelė (plastmasinė, kieta)", from: 150, exact: true },
      { name: "Kosmetinė plokštelė (termoplastinė, minkšta)", from: 260, exact: true },
      { name: "Išimama pilna dantų plokštelė (plastmasinė)", from: 350, exact: true },
      { name: "Išimama pilna dantų plokštelė (minkšta)", from: 600, exact: true },

      { name: "Kietos plokštelės pataisa", from: 70, exact: true },
      { name: "Plokštelės perbazavimas", from: 80, exact: true },

      { name: "Lanko atraminis protezas", from: 700, exact: true },

      { name: "Diagnostiniai modeliai", from: 20, exact: true },
      { name: "Danties pavaškavimas (1 vnt.)", from: 10, exact: true },

      { name: "Atspaudo nuėmimas naudojant alginatą (1 žandikaulis)", from: 20, exact: true },
      { name: "Atspaudo nuėmimas naudojant silikoną (1 žandikaulis)", from: 50, exact: true },
      { name: "Sąkandžio registras", from: 10, exact: true },

      { name: "Individualus šaukštas (1 vnt.)", from: 30, exact: true },

      { name: "KKĮ formavimas", from: 20, exact: true },
      { name: "Metalinis KKĮ", from: 60, exact: true },
      { name: "Sudėtinis KKĮ", from: 90, exact: true },

      { name: "Senų vainikėlių nuėmimas", from: 50, exact: true },
      { name: "Laikino vainikėlio cementavimas (ne gydymo metu)", from: 20, exact: true },
      { name: "Nuolatinio vainikėlio cementavimas (ne gydymo metu)", from: 50, exact: true },

      { name: "Kompozitinis užklotas", from: 150, exact: true },
      { name: "Keramikos užklotas", from: 300, exact: true },
      { name: "E-max laminatė", from: 350, exact: true },
      { name: "Sluoksniuota keramikos laminatė", from: 450, exact: true },

      { name: "Minkšta kapa nuo bruksizmo", from: 100, exact: true },
      { name: "Kieta kapa nuo bruksizmo", from: 150, exact: true },
    ],
  },

  {
    title: "Dantų protezavimas (ant implantų)",
    items: [
      { name: "Laikinas vainikėlis ant implanto", from: 200, exact: true, note: "Su laikinos atramos kaina" },
      { name: "Atspaudai / skenavimas nuo implantų", from: 150, exact: true },

      { name: "Keramikos vainikėlis cirkonio oksido pagrindu", from: 450, exact: true },
      { name: "E-max presuotos bemetalės keramikos vainikėlis", from: 450, exact: true },

      { name: "Neodent standartinė atrama", from: 100, exact: true },
      { name: "Straumann standartinė atrama", from: 200, exact: true },
      { name: "Individuali atrama", from: 200, exact: true },
    ],
  },

  {
    title: "Kita",
    items: [
      { name: "Dentalinė nuotrauka", from: 10, exact: true },
      { name: "Vienkartinės priemonės", from: 10, exact: true, note: "Kiekvienam apsilankymui" },
      { name: "Lūpų apsauga, optragate", from: 5, exact: true, note: "Kiekvienam apsilankymui" },
      { name: "Pooperacinis rinkinys", from: 30, exact: true },
      { name: "Darbų kainos, nenumatytos kainininke", note: "Aptariamos su gydančiu gydytoju" },
      { name: "Detalesnė informacija", note: "Jums suteiks įstaigos darbuotojai" },
    ],
  },

  {
    title: "Pasiūlymai / paketai",
    items: [
      {
        name: "Vieno žandikaulio dantų atstatymas All-on-4 sistema",
        from: 3800,
        exact: true,
        note:
          "Į pasiūlymą įeina: 3D rentgeno nuotrauka; 4 Straumann grupės implantai; originalios protezavimo detalės; neišimamas (laikinas) protezas.",
      },
      {
        name: "Vienmomentė implantacija (Neodent)",
        from: 1200,
        exact: true,
        note:
          "Į pasiūlymą įeina: rovimas; kaulo priauginimas; implantas; individuali galvutė; atspaudai; atrama; cirkonio vainikėlis.",
      },
    ],
  },
]