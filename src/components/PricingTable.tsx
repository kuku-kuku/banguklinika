import { PRICING } from '../data/pricing'

export default function PricingTable() {
  return (
    <div className="grid gap-8">
      {PRICING.map((group) => (
        <div key={group.title} className="card overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b">
            <h3 className="font-semibold">{group.title}</h3>
          </div>
          <table className="w-full text-sm">
            <tbody>
              {group.items.map((p, i) => (
                <tr key={i} className="border-t">
                  <td className="p-4">{p.name}{p.note ? <span className="block text-xs text-gray-500">{p.note}</span> : null}</td>
                  <td className="p-4 w-40 font-medium">nuo €{p.from ?? 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}
