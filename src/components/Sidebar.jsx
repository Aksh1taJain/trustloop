import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import {
  LayoutDashboard,
  ClipboardList,
  ShieldCheck,
  BarChart3,
  Sparkles,
  UserCircle2,
  Award
} from 'lucide-react'

const ngoItems = [
  { to: '/ngo', label: 'Overview', icon: LayoutDashboard },
  { to: '/ngo/missions', label: 'Missions', icon: ClipboardList },
  { to: '/ngo/verification', label: 'Verification', icon: ShieldCheck },
  { to: '/ngo/analytics', label: 'Analytics', icon: BarChart3 },
  { to: '/ngo/ai-hub', label: 'AI Hub', icon: Sparkles },
]

const volunteerItems = [
  { to: '/volunteer', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/volunteer/my-missions', label: 'My Missions', icon: ClipboardList },
  { to: '/volunteer/profile', label: 'Trust Profile', icon: UserCircle2 },
  { to: '/volunteer/certificate', label: 'Certificate', icon: Award },
]

function Item({ to, label, icon: Icon }) {
  return (
    <NavLink
      to={to}
      end={to === '/ngo' || to === '/volunteer'}
      className={({ isActive }) =>
        `group flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all duration-200 ${
          isActive
            ? 'bg-brand-600 text-white shadow-md'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <Icon size={20} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'} />
          <span>{label}</span>
        </>
      )}
    </NavLink>
  )
}

export default function Sidebar({ role = 'ngo' }) {
  const items = role === 'ngo' ? ngoItems : volunteerItems

  return (
    <aside className="hidden min-h-screen w-72 border-r border-line bg-white px-5 py-6 lg:block">
      <div className="mb-8">
        <Logo />
      </div>

      <div>
        <div className="mb-3 px-3.5 text-xs font-bold uppercase tracking-wider text-slate-400">
          {role === 'ngo' ? 'NGO Workspace' : 'Volunteer Workspace'}
        </div>
        <nav className="space-y-1">
          {items.map((item) => (
            <Item key={item.to} {...item} />
          ))}
        </nav>
      </div>

      <div className="mt-auto pt-8">
        <div className="rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-5 shadow-sm">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 shadow-sm">
              <Sparkles size={20} className="text-white" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-slate-900">
                Phase 1 Prototype
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Professional multi-page UI with role-based flows and mock data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
