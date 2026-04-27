import React from 'react'

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-600 text-lg font-bold text-white">
        T
      </div>
      <div>
        <div className="text-base font-semibold text-ink">TrustLoop</div>
        <div className="text-xs text-slate-500">Verified impact platform</div>
      </div>
    </div>
  )
}
