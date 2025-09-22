import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

type Service = {
  id: string
  title: string
  description?: string
  href?: string
  icon?: React.ReactNode
}

export default function ServiceCard({ s, i }: { s: Service; i?: number }) {
  return (
    <Link
      to={s.href || `/paslaugos#${s.id}`}
      className={clsx(
        'block rounded-2xl border shadow-sm transition',
        // Turkio schema: uždaryta bazė
        'bg-primary-50 border-primary-300 hover:bg-primary-100 hover:ring-1 hover:ring-primary-400',
        // lengvas judesys
        'hover:-translate-y-0.5'
      )}
      style={{ animationDelay: `${(i ?? 0) * 60}ms` }}
    >
      <div className="p-5">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl grid place-items-center bg-primary-100 text-primary-800">
            {s.icon ?? (
              <svg viewBox="0 0 24 24" className="w-5 h-5">
                <path d="M12 3c4 0 7 3 7 7v7a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-7c0-4 3-7 7-7z" stroke="currentColor" strokeWidth="1.6" fill="none"/>
              </svg>
            )}
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-darkblue-600 truncate">{s.title}</h3>
            {s.description && <p className="text-sm text-gray-600 mt-1 line-clamp-2">{s.description}</p>}
          </div>
        </div>
      </div>
    </Link>
  )
}
