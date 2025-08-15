// src/components/ServiceCard.tsx
import type { Service } from '../data/services'
import { motion } from 'framer-motion'

export default function ServiceCard({ s, i = 0 }: { s: Service; i?: number }) {
  return (
    <motion.div
      id={s.id}
      className="card p-6"
      initial={{ opacity: 0, y: 16, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay: i * 0.05, type: 'spring', stiffness: 320, damping: 26 }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.995 }}
    >
      <h3 className="text-lg font-semibold">{s.title}</h3>
      <p className="text-sm text-gray-600 mt-2">{s.description}</p>
      <ul className="mt-4 text-sm text-gray-700 space-y-1">
        {s.highlights.map((h) => (
          <li key={h}>• {h}</li>
        ))}
      </ul>
    </motion.div>
  )
}
