import { PRICING } from '../data/pricing'

const FORCE_EXACT = new Set<string>([
  // Suaugusiesiems
  'Konsultacija, profilaktinis patikrinimas, gydymo plano sudarymas',
  'Nuskausminimas',
  'Vienkartinės priemonės',
  'Nuotrauka',
  'Koferdamo sistemos naudojimas',

  // Vaikams
  'Konsultacija, profilaktinis patikrinimas',

  // Protezavimas
  'CEREC vainikėlis (ant implanto)',

  // Implantai
  'Straumann® implantas',
  'Medentika® implantas',
])

function formatPrice(p: { name: string; from?: number; to?: number; exact?: boolean }): string {
  const { name, from, to, exact } = p
  const forceExact = FORCE_EXACT.has(name) || exact === true

  if (typeof from === 'number' && typeof to === 'number') {
    // intervalas – be „nuo“
    return `€${from}–${to}`
  }
  if (typeof from === 'number') {
    // jeigu forceExact – rodome tik kainą, kitaip „nuo“
    return forceExact ? `€${from}` : `nuo €${from}`
  }
  return '—'
}

export default function PricingTable() {
  return (
    <div className="grid gap-8">
      {PRICING.map((group) => (
        <div
          key={group.title}
          className="card overflow-hidden border border-primary-100 shadow-soft"
        >
          {/* Header */}
          <div className="px-6 py-4 bg-primary-50 border-b border-primary-100">
            <h3 className="font-semibold text-primary-700">{group.title}</h3>
          </div>

          {/* Table */}
          <table className="w-full text-sm">
            <tbody>
              {group.items.map((p, i) => (
                <tr
                  key={`${group.title}-${i}`}
                  className="border-t border-gray-100 hover:bg-primary-50 transition"
                >
                  <td className="p-4 align-top">
                    {p.name}
                    {p.note && (
                      <span className="block text-xs text-gray-500">
                        {p.note}
                      </span>
                    )}
                  </td>
                  <td className="p-4 w-40 font-medium text-right whitespace-nowrap text-primary-700">
                    {formatPrice(p)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}
