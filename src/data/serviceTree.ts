/**
 * Vienintelis paslaugų hierarchijos šaltinis (LT + LV).
 *
 * Naudojama:
 *  - Navbar dropdown ("Paslaugos" / "Pakalpojumi")
 *  - RelatedServices blokai paslaugų puslapių apačioje
 *
 * Pridedant naują paslaugą užtenka įrašyti ją čia – navigacija ir
 * "Susijusios paslaugos" / "Kitos odontologijos paslaugos" blokai
 * atsinaujina automatiškai.
 */

export type ServiceNode = {
  /** Nuoroda. Jei nėra – tai tik grupė meniu (vaikai laikomi savarankiškomis paslaugomis). */
  to?: string
  label: string
  children?: ServiceNode[]
}

export const SERVICE_TREE: ServiceNode[] = [
  { to: '/paslaugos/skubi-pagalba/', label: 'Skubi pagalba' },
  {
    to: '/paslaugos/dantu-implantacija/', label: 'Dantų implantacija',
    children: [
      { to: '/paslaugos/vienmomente-implantacija/', label: 'Vienmomentė implantacija' },
      { to: '/paslaugos/straumann-dantu-implantai/', label: 'STRAUMANN dantų implantai' },
      { to: '/paslaugos/visi-dantys-ant-4-implantu/', label: 'Visi dantys ant 4 implantų (All-on-4)' },
    ],
  },
  {
    to: '/paslaugos/dantu-protezavimas/', label: 'Dantų protezavimas',
    children: [
      { to: '/paslaugos/dantu-karunieles/', label: 'Dantų karūnėlės (vainikėliai)' },
      { to: '/paslaugos/cirkonio-keramikos-vainikelis/', label: 'Cirkonio keramikos vainikėlis' },
      { to: '/paslaugos/dantu-tiltai/', label: 'Dantų tiltai' },
      { to: '/paslaugos/dantu-mikroprotezavimas/', label: 'Dantų mikroprotezavimas' },
      { to: '/paslaugos/dantu-uzklotai/', label: 'Dantų užklotai' },
      { to: '/paslaugos/isimami-protezai/', label: 'Išimami protezai' },
    ],
  },
  { to: '/paslaugos/kompensacija-protezavimui/', label: 'Kompensacija protezavimui' },
  { to: '/paslaugos/dantu-taisymas-gydymas/', label: 'Dantų gydymas' },
  { to: '/paslaugos/dantu-tiesinimas/', label: 'Dantų tiesinimas' },
  {
    to: '/paslaugos/burnos-higiena/', label: 'Burnos higiena',
    children: [
      { to: '/paslaugos/dantu-fluoravimas/', label: 'Dantų fluoravimas' },
    ],
  },
  {
    to: '/paslaugos/burnos-chirurgija/', label: 'Burnos chirurgija',
    children: [
      { to: '/paslaugos/sinuso-pakelimas/', label: 'Sinuso pakėlimas' },
      { to: '/paslaugos/zandikaulio-kaulo-priauginimas/', label: 'Žandikaulio kaulo priauginimas' },
      { to: '/paslaugos/pulinio-atverimas/', label: 'Pūlinio atvėrimas' },
    ],
  },
  {
    to: '/paslaugos/dantu-balinimas/', label: 'Dantų balinimas',
    children: [
      { to: '/paslaugos/dantu-balinimo-kapos/', label: 'Dantų balinimo kapos' },
      { to: '/paslaugos/dantu-balinimas-su-lempa/', label: 'Dantų balinimas su lempa' },
    ],
  },
  { to: '/paslaugos/estetinis-plombavimas/', label: 'Estetinis plombavimas' },
  { to: '/paslaugos/dantu-plombavimas/', label: 'Dantų plombavimas' },
  {
    to: '/paslaugos/dantu-traukimas/', label: 'Dantų traukimas',
    children: [
      { to: '/paslaugos/protiniu-dantu-salinimas/', label: 'Protinių dantų šalinimas' },
    ],
  },
  { to: '/paslaugos/endodontinis-gydymas/', label: 'Endodontinis Gydymas' },
  {
    to: '/paslaugos/vaiku-odontologija/', label: 'Vaikų Odontologija',
    children: [
      { to: '/paslaugos/vaiku-profilaktinis-patikrinimas/', label: 'Vaikų profilaktinis patikrinimas' },
      { to: '/paslaugos/dantu-higiena-vaikams/', label: 'Dantų higiena vaikams' },
    ],
  },
  {
    to: '/paslaugos/terapinis-dantu-gydymas/', label: 'Terapinis dantų gydymas',
    children: [
      { to: '/paslaugos/gydymas-icon-sistema/', label: 'Gydymas „ICON“ sistema' },
    ],
  },
  {
    label: 'Kitos paslaugos',
    children: [
      { to: '/paslaugos/rentgenologiniai-tyrimai/', label: 'Rentgenologiniai tyrimai' },
      { to: '/paslaugos/bruksizmo-dantu-kapa/', label: 'Bruksizmo dantų kapa' },
      { to: '/paslaugos/dantenu-uzdegimas-gingivitas/', label: 'Dantenų uždegimas (gingivitas)' },
    ],
  },
]

/** LV paslaugų medis. Naudojamas `navLv` dropdown'e ir LV puslapių blokuose. */
export const SERVICE_TREE_LV: ServiceNode[] = [
  { to: '/lv/pakalpojumi/neatliekama-palidziba', label: 'Neatliekamā palīdzība' },
  {
    to: '/lv/pakalpojumi/zobu-implantacija', label: 'Zobu implantācija',
    children: [
      { to: '/lv/pakalpojumi/tulitejas-implantacija', label: 'Tūlītējā implantācija' },
      { to: '/lv/pakalpojumi/straumann-implanti',     label: 'STRAUMANN zobu implanti' },
      { to: '/lv/pakalpojumi/visi-zobi-uz-4-implantiem', label: 'Visi zobi uz 4 implantiem (All-on-4)' },
    ],
  },
  {
    to: '/lv/pakalpojumi/zobu-protezesana', label: 'Zobu protezēšana',
    children: [
      { to: '/lv/pakalpojumi/zobu-kroniti',                  label: 'Zobu kronīši' },
      { to: '/lv/pakalpojumi/cirkonija-keramikas-kronitis',  label: 'Cirkonija keramikas kronītis' },
      { to: '/lv/pakalpojumi/zobu-tilti',                    label: 'Zobu tilti' },
      { to: '/lv/pakalpojumi/mikroprotezesana',              label: 'Zobu mikroprotezēšana' },
      { to: '/lv/pakalpojumi/zobu-uzlikas',                  label: 'Zobu uzlikas' },
      { to: '/lv/pakalpojumi/iznemamas-protezes',            label: 'Izņemamās protēzes' },
    ],
  },
  { to: '/lv/pakalpojumi/protezesanas-kompensacija', label: 'Protezēšanas kompensācija' },
  { to: '/lv/pakalpojumi/zobu-arstnieciba',          label: 'Zobu ārstniecība' },
  { to: '/lv/pakalpojumi/zobu-izlinesana',           label: 'Zobu izlīdzināšana' },
  {
    to: '/lv/pakalpojumi/mutes-higiena', label: 'Mutes higiēna',
    children: [
      { to: '/lv/pakalpojumi/zobu-fluoresana', label: 'Zobu fluorēšana' },
    ],
  },
  {
    to: '/lv/pakalpojumi/mutes-hirurgija', label: 'Mutes ķirurģija',
    children: [
      { to: '/lv/pakalpojumi/sinusa-pacelsana',        label: 'Sinusa pacelšana' },
      { to: '/lv/pakalpojumi/zoklakaula-augmentacija', label: 'Žokļa kaula augmentācija' },
      { to: '/lv/pakalpojumi/abscesa-atversana',       label: 'Abscesa atvēršana' },
    ],
  },
  {
    to: '/lv/pakalpojumi/zobu-balinesana', label: 'Zobu balināšana',
    children: [
      { to: '/lv/pakalpojumi/zobu-balinesanas-kapas', label: 'Zobu balināšanas kapas' },
      { to: '/lv/pakalpojumi/zobu-balinesana-ar-lampu', label: 'Zobu balināšana ar lampu' },
    ],
  },
  { to: '/lv/pakalpojumi/estetiska-plombana', label: 'Estētiskā plombēšana' },
  { to: '/lv/pakalpojumi/zobu-plombana',      label: 'Zobu plombēšana' },
  {
    to: '/lv/pakalpojumi/zobu-ekstrakcija', label: 'Zobu ekstrakcija',
    children: [
      { to: '/lv/pakalpojumi/gudribas-zobu-izvilksana', label: 'Gudrības zobu izvilkšana' },
    ],
  },
  { to: '/lv/pakalpojumi/endodontija', label: 'Endodontija' },
  {
    to: '/lv/pakalpojumi/bernu-odontologija', label: 'Bērnu zobārstniecība',
    children: [
      { to: '/lv/pakalpojumi/bernu-profilaktiska-parbaude', label: 'Bērnu profilaktiskā pārbaude' },
      { to: '/lv/pakalpojumi/bernu-mutes-higiena',          label: 'Bērnu mutes higiēna' },
    ],
  },
  {
    to: '/lv/pakalpojumi/terapeitiska-arstesana', label: 'Terapeitiskā ārstēšana',
    children: [
      { to: '/lv/pakalpojumi/arstesana-icon-sistema', label: 'Ārstēšana ar „ICON" sistēmu' },
    ],
  },
  {
    label: 'Citi pakalpojumi',
    children: [
      { to: '/lv/pakalpojumi/rentgena-izmeklejumi',        label: 'Rentgena izmeklējumi' },
      { to: '/lv/pakalpojumi/bruksisma-kapa',              label: 'Bruksisma kapa' },
      { to: '/lv/pakalpojumi/smaganu-iekaisums-gingivits', label: 'Smaganu iekaisums (gingivīts)' },
    ],
  },
]

export type Lang = 'lt' | 'lv'

/** Kalba pagal URL – viskas po /lv yra latviška. */
export function langFromPath(path: string): Lang {
  return path === '/lv' || path.startsWith('/lv/') ? 'lv' : 'lt'
}

export function getServiceTree(lang: Lang): ServiceNode[] {
  return lang === 'lv' ? SERVICE_TREE_LV : SERVICE_TREE
}

/** '/paslaugos/foo/' ir '/paslaugos/foo' laikomi tuo pačiu. */
export function normalizeServicePath(path: string): string {
  const clean = path.split('?')[0].split('#')[0]
  return clean.length > 1 ? clean.replace(/\/+$/, '') : clean
}

export type ServiceLink = { to: string; label: string }

/**
 * Visos "main" paslaugos – t. y. viršutinio lygio paslaugos be sub kategorijų.
 * Grupė be nuorodos ("Kitos paslaugos") išskleidžiama, nes jos vaikai
 * neturi tėvinio paslaugos puslapio ir patys yra savarankiški.
 */
export function getMainServices(lang: Lang = 'lt'): ServiceLink[] {
  const out: ServiceLink[] = []
  for (const node of getServiceTree(lang)) {
    if (node.to) {
      out.push({ to: node.to, label: node.label })
    } else {
      for (const child of node.children ?? []) {
        if (child.to) out.push({ to: child.to, label: child.label })
      }
    }
  }
  return out
}

export type ServiceContext = {
  /** Main kategorija, kuriai priklauso dabartinis puslapis (jei tokia yra). */
  parent: ServiceLink | null
  /** Ar dabartinis puslapis yra pati main kategorija. */
  isMain: boolean
  /** Tos pačios kategorijos paslaugos be dabartinės (main + sub, be dublikatų). */
  related: ServiceLink[]
  /** Visos main paslaugos be dabartinės kategorijos. */
  otherMain: ServiceLink[]
}

/** Pagal URL suranda, kuriai kategorijai priklauso puslapis, ir surenka blokų turinį. */
export function getServiceContext(pathname: string): ServiceContext {
  const current = normalizeServicePath(pathname)
  const lang = langFromPath(current)
  const mainServices = getMainServices(lang)

  let parentNode: ServiceNode | null = null
  let isMain = false

  for (const node of getServiceTree(lang)) {
    if (node.to && normalizeServicePath(node.to) === current) {
      parentNode = node
      isMain = true
      break
    }
    const hit = (node.children ?? []).some(c => c.to && normalizeServicePath(c.to) === current)
    if (hit) {
      parentNode = node
      break
    }
  }

  // Kategorijai priklausančios paslaugos: main + visos sub, be dabartinės.
  const related: ServiceLink[] = []
  if (parentNode) {
    if (!isMain && parentNode.to) related.push({ to: parentNode.to, label: parentNode.label })
    for (const child of parentNode.children ?? []) {
      if (child.to && normalizeServicePath(child.to) !== current) {
        related.push({ to: child.to, label: child.label })
      }
    }
  }

  // Kitos main paslaugos: be dabartinės kategorijos ir be to, kas jau rodoma viršuje.
  const shown = new Set(related.map(r => normalizeServicePath(r.to)))
  shown.add(current)
  if (parentNode?.to) shown.add(normalizeServicePath(parentNode.to))

  const otherMain = mainServices.filter(s => !shown.has(normalizeServicePath(s.to)))

  return {
    parent: parentNode?.to ? { to: parentNode.to, label: parentNode.label } : null,
    isMain,
    related,
    otherMain,
  }
}
