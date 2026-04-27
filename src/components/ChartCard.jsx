import React from 'react'

export default function ChartCard({ title, subtitle, bars = [] }) {
  const maxValue = Math.max(...bars.map(b => b.value))
  
  return (
    <div className="card p-6 animate-fade-in">
      <div>
        <h3 className="text-lg font-bold text-ink">{title}</h3>
        {subtitle && <p className="mt-1.5 text-sm text-slate-600">{subtitle}</p>}
      </div>

      <div className="mt-8 flex h-56 items-end gap-3">
        {bars.map((bar, index) => {
          const heightPercentage = (bar.value / maxValue) * 100
          return (
            <div key={bar.label} className="group flex flex-1 flex-col items-center gap-3">
              <div className="relative flex h-48 w-full items-end rounded-t-xl bg-slate-50 p-1">
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-brand-600 to-brand-500 shadow-sm transition-all duration-500 group-hover:from-brand-700 group-hover:to-brand-600"
                  style={{ 
                    height: `${heightPercentage}%`,
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  <div className="flex h-full items-start justify-center pt-2">
                    <span className="text-xs font-bold text-white opacity-0 transition-opacity group-hover:opacity-100">
                      {bar.value}%
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-sm font-semibold text-slate-600">{bar.label}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
