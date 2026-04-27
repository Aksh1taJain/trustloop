import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { Shield, Sparkles, CheckCircle, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 px-4 py-8">
      <div className="mx-auto flex min-h-[90vh] max-w-6xl items-center">
        <div className="grid w-full gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center animate-fade-in">
            <Logo />
            <h1 className="mt-8 max-w-xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
              Trusted volunteer execution, not just listings.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              TrustLoop helps NGOs and CSR teams convert field needs into missions, verify proof-of-work, and report clean impact with AI-assisted need understanding.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="group flex items-start gap-3 rounded-xl border border-line bg-white p-5 shadow-sm transition-all hover:border-brand-200 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Verified Completion</div>
                  <div className="mt-1 text-sm text-slate-600">Proof-based task tracking</div>
                </div>
              </div>

              <div className="group flex items-start gap-3 rounded-xl border border-line bg-white p-5 shadow-sm transition-all hover:border-brand-200 hover:shadow-md">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Shield size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Trust Scores</div>
                  <div className="mt-1 text-sm text-slate-600">Volunteer reliability metrics</div>
                </div>
              </div>

              <div className="group flex items-start gap-3 rounded-xl border border-line bg-white p-5 shadow-sm transition-all hover:border-brand-200 hover:shadow-md sm:col-span-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-brand-600 text-white">
                  <Sparkles size={20} />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">AI Mission Drafts</div>
                  <div className="mt-1 text-sm text-slate-600">Turn community needs into structured missions automatically</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card mx-auto w-full max-w-md p-8 shadow-xl animate-scale-in">
            <h2 className="text-2xl font-bold text-ink">Demo Access</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              This Phase 1 build showcases UI, navigation, and role-based dashboard structure.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Email address</label>
                <input className="input" placeholder="Enter your email" defaultValue="demo@trustloop.org" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Password</label>
                <input className="input" placeholder="Enter your password" type="password" defaultValue="password123" />
              </div>
              <Link to="/role-select" className="btn-primary w-full group mt-6">
                Enter TrustLoop Demo
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-8 rounded-xl border border-brand-200 bg-gradient-to-br from-brand-50 to-purple-50 p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
                  <Sparkles size={16} className="text-white" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-slate-900">Demo Mode</div>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    Use the role switcher after login to explore NGO and volunteer dashboards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
