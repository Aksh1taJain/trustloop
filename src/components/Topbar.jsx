import React from 'react'
import { Bell, Search, User } from 'lucide-react'

export default function Topbar({ title, subtitle, action }) {
  return (
    <div className="mb-8 animate-fade-in">
      <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight text-ink">{title}</h1>
          {subtitle && <p className="mt-2 text-base text-slate-600">{subtitle}</p>}
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2.5 rounded-xl border border-line bg-white px-4 py-2.5 text-sm text-slate-400 shadow-sm transition-all hover:border-slate-300 lg:flex">
            <Search size={18} className="text-slate-400" />
            <input 
              type="text" 
              placeholder="Search missions, volunteers..." 
              className="w-48 border-none bg-transparent outline-none placeholder:text-slate-400"
            />
          </div>
          
          <button className="relative rounded-xl border border-line bg-white p-2.5 text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300">
            <Bell size={20} />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand-600 ring-2 ring-white"></span>
          </button>

          <button className="rounded-xl border border-line bg-white p-2.5 text-slate-600 shadow-sm transition-all hover:bg-slate-50 hover:border-slate-300">
            <User size={20} />
          </button>
          
          {action && <div className="ml-2">{action}</div>}
        </div>
      </div>
    </div>
  )
}
