import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Building2, HeartHandshake, Sparkles } from 'lucide-react'
import Logo from '../components/Logo'

function RoleCard({ icon: Icon, title, description, to, cta, gradient }) {
  return (
    <Link 
      to={to} 
      className={`group card p-8 transition-all hover:scale-[1.02] hover:shadow-xl ${gradient}`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md">
        <Icon size={32} className="text-brand-600" />
      </div>
      <h2 className="mt-6 text-2xl font-bold text-slate-950">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-slate-600">{description}</p>
      <div className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-brand-700 group-hover:text-brand-800">
        {cta}
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}

export default function RoleSelectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 animate-fade-in text-center">
          <div className="inline-block">
            <Logo />
          </div>
          <div className="mt-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 text-sm font-bold text-brand-700">
              <Sparkles size={16} />
              Demo Role Switcher
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Choose your workspace
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
              This Phase 1 prototype includes polished NGO and volunteer dashboards with comprehensive multi-page navigation.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <RoleCard
            icon={Building2}
            title="NGO Admin / Coordinator"
            description="Manage missions, review proof submissions, explore analytics, and use AI-assisted need summarization and mission drafting tools."
            to="/ngo"
            cta="Open NGO Dashboard"
            gradient="bg-gradient-to-br from-white via-blue-50/30 to-white border-blue-200 hover:border-blue-300"
          />
          <RoleCard
            icon={HeartHandshake}
            title="Volunteer Experience"
            description="Browse available missions, track your accepted work, monitor trust score and impact hours, and explore certificates and profile."
            to="/volunteer"
            cta="Open Volunteer Dashboard"
            gradient="bg-gradient-to-br from-white via-purple-50/30 to-white border-purple-200 hover:border-purple-300"
          />
        </div>

        <div className="mt-12 animate-fade-in rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto max-w-3xl">
            <div className="text-sm font-bold text-slate-900">Phase 1 Demo Features</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Professional multi-page UI with role-based flows, dashboard pages, mission management, verification workflows, analytics views, and AI-powered tools with mock data.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
