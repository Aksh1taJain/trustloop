import React from 'react'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function StatCard({ label, value, delta, icon: Icon }) {
  const isPositive = delta && (delta.includes('+') || delta.includes('up'))
  
  return (
    <div className="stat-card group">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-sm font-medium text-slate-500">{label}</div>
          <div className="mt-3 text-3xl font-bold tracking-tight text-ink">{value}</div>
          {delta && (
            <div className={`mt-3 flex items-center gap-1.5 text-sm font-semibold ${
              isPositive ? 'text-accent-green-600' : 'text-accent-red-600'
            }`}>
              {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <span>{delta}</span>
            </div>
          )}
        </div>
        {Icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all group-hover:bg-brand-100">
            <Icon size={24} />
          </div>
        )}
      </div>
    </div>
  )
}
