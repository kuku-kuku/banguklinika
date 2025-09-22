// src/components/PricingTable.tsx
import { PRICING } from '../data/pricing'

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
                  key={i}
                  className="border-t border-gray-100 hover:bg-primary-50 transition"
                >
                  <td className="p-4">
                    {p.name}
                    {p.note && (
                      <span className="block text-xs text-gray-500">
                        {p.note}
                      </span>
                    )}
                  </td>
                  <td className="p-4 w-40 font-medium text-right whitespace-nowrap text-primary-700">
                    {p.from != null ? `nuo €${p.from}` : '—'}
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
