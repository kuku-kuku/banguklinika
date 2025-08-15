import { CLINIC } from '../data/clinic'
export default function Map() {
  return (
    <div className="card overflow-hidden">
      <iframe
        title="Žemėlapis"
        src={CLINIC.mapEmbed}
        className="w-full h-[360px] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
