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
    title: "Dantų gydymas (suaugusiesiems)",
    items: [
      // Fiksuota be „nuo“
      { name: "Konsultacija, profilaktinis patikrinimas, gydymo plano sudarymas", from: 20, exact: true },

      // Pakeista į 70–90
      { name: "Danties plombavimas helio plomba", from: 70, to: 90 },

      // Pakeista į 40–60
      { name: "Danties plombavimas stiklojonomerine plomba", from: 40, to: 60 },

      { name: "Gydomasis pamušalas (kalcio arba stiklojonomerinis)", from: 15 },
      { name: "Laikina plomba", from: 40 },

      // Fiksuota 10 € (be „nuo“ ir be „gydant dantis“)
      { name: "Nuskausminimas", from: 10, exact: true },

      // Fiksuotos kainos be „nuo“
      { name: "Vienkartinės priemonės", from: 15, exact: true },
      { name: "Nuotrauka", from: 10, exact: true },

      // Nauja paslauga – fiksuota be „nuo“
      { name: "Koferdamo sistemos naudojimas", from: 10, exact: true },
    ],
  },
  {
    title: "Dantų gydymas (vaikams)",
    items: [
      // Fiksuota be „nuo“
      { name: "Konsultacija, profilaktinis patikrinimas", from: 20, exact: true },
      { name: "Pieninių dantų gydymas", from: 50 },
      { name: "Stiklojonomerinė plomba", from: 30 },

      // Pakeista į 30 € (palieku be exact — jei norėsi be „nuo“, pridėk exact: true)
      { name: "Kompomerinė plomba", from: 30 },

      { name: "Komplikuotas ėduonies gydymas", from: 60 },
      { name: "Apsilankymas iki 30 min., kai vaikas nesileidžia gydyti dantų", from: 30 },
    ],
  },
  {
    title: "Endodontija",
    items: [
      { name: "Pirminė endodontinė pagalba", from: 70 },
      { name: "Kanalų vaistai", from: 30 },
      { name: "Vieno danties šaknies kanalo chemomechaninis paruošimas", from: 35 },
      { name: "Vieno danties šaknies kanalo plombavimas", from: 35 },
    ],
  },
  {
    title: "Burnos higiena",
    items: [
      { name: "Pilna profesionali burnos higiena", from: 60, to: 80 },
      { name: "Pakartotinė burnos higiena", from: 50 },
      // Pridėta nauja
      { name: "Fluoro lako aplikacija", from: 20 },
      { name: "Fluorozinio danties padengimas su ICON", from: 60, exact: true },
      // (Jei dar yra 2-oji nauja paslauga šiame bokse – parašyk pavadinimą ir kainą)
    ],
  },
  {
    title: "Dantų balinimas",
    items: [
      { name: "Ofisinis dantų balinimas BEYOND® sistema", from: 250, note: "BEYOND® sistema" },
      { name: "Balinimo kapų atspaudai", from: 30 },
      { name: "Balinimo kapos (2 kapos + balinimo gelis)", from: 200, note: "2 kapos + gelis" },
      { name: "Danties papuošalas", from: 50 },
    ],
  },
  {
    title: "Burnos chirurgija",
    items: [
      { name: "Kaulo augmentacija", from: 150, to: 600 },
      { name: "Šaknies šalinimas", from: 60, to: 80 },
      { name: "Danties šalinimas", from: 80, to: 100 },
      { name: "Komplikuotas trečiųjų apatinių krūminių dantų šalinimas", from: 120, to: 150 },
    ],
  },
  {
    title: "Dantų protezavimas",
    items: [
      { name: "CEREC vainikėlis (ant danties)", from: 400 },
      // Fiksuota be „nuo“
      { name: "CEREC vainikėlis (ant implanto)", from: 450, exact: true },

      { name: "CEREC užklotas, laminatė", from: 600 },
      { name: "Metalo keramikos vainikėlis", from: 350 },
      { name: "Bemetalės E-max keramikos vainikėlis (ant danties)", from: 400 },
      { name: "Bemetalės E-max keramikos vainikėlis (ant implanto)", from: 450 },
      { name: "Cirkonio keramikos vainikėlis (ant danties)", from: 400 },
      { name: "Cirkonio keramikos vainikėlis (ant implanto)", from: 450 },
      { name: "Laminatė", from: 600 },
      { name: "Laikinas vainikėlis (kabinete)", from: 40 },
      { name: "Laikinas vainikėlis (laboratorijoje)", from: 70 },
      { name: "Stiklo pluošto kaištis", from: 120 },
      { name: "Metalinis KKĮ", from: 70, to: 100 },

      // „Atspaudai“ – jei norėsi be „nuo“, pridėsiu exact: true
      { name: "Atspaudai (silikonas/skenavimas)", from: 150, exact: true },

      { name: "Atramos ant implantų (Medentika®, Straumann®)", from: 200, note: "Medentika®, Straumann®" },
      { name: "Dantų plokštelės", from: 350 },
      { name: "Seno vainikėlio nuėmimas", from: 50, exact: true},
      { name: "Alginatinis atspaudas", from: 15, exact: true },
      { name: "Sąkandžio registracija", from: 10, exact: true },
    ],
  },
  {
    title: "Implantai",
    items: [
      // Abi – fiksuotos be „nuo“
      { name: "Straumann® implantas", from: 650, note: "Straumann®", exact: true },
      { name: "Medentika® implantas", from: 550, note: "Medentika®", exact: true },
      { name: "Sinuso pakėlimo operacija", from: 500, to: 700, exact: true },
    ],
  },
  {
    title: "Dantų tiesinimas (suaugusiesiems)",
    items: [
      { name: "Konsultacija dėl dantų tiesinimo", from: 50 },
      { name: "Dantų tiesinimas ORDOLINE kapų sistema", from: 1800, to: 4000, note: "ORDOLINE sistema" },
    ],
  },
  {
    title: "Estetinis dantų plombavimas",
    items: [
      { name: "Estetinis vieno danties plombavimas", from: 150, to: 200 },
      // Nauja
      { name: "Estetinės plombos poliravimas (1 danties)", from: 29 },
    ],
  },
]
