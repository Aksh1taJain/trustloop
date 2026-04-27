import React from 'react'
import AppShell from '../components/AppShell'
import Topbar from '../components/Topbar'
import SectionCard from '../components/SectionCard'

export default function CertificatePage() {
  return (
    <AppShell role="volunteer">
      <Topbar
        title="Impact Certificate"
        subtitle="Simple certificate preview page for volunteer recognition flow."
        action={<button className="btn-primary">Download Certificate</button>}
      />

      <SectionCard title="Certificate Preview" subtitle="Mock certificate UI for the volunteer side of the product.">
        <div className="rounded-[28px] border border-brand-100 bg-[linear-gradient(135deg,_#eff6ff,_#ffffff)] p-8">
          <div className="text-center">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-700">TrustLoop</div>
            <h2 className="mt-4 text-3xl font-bold text-slate-900">Certificate of Community Impact</h2>
            <p className="mt-6 text-sm text-slate-500">This is proudly awarded to</p>
            <div className="mt-2 text-4xl font-bold text-slate-950">Akshita Jain</div>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-600">
              for completing verified volunteer missions and contributing meaningful community service through the TrustLoop network.
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-4">
                <div className="text-xs text-slate-400">Verified Hours</div>
                <div className="mt-1 text-xl font-bold text-slate-900">100</div>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="text-xs text-slate-400">Completed Missions</div>
                <div className="mt-1 text-xl font-bold text-slate-900">18</div>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="text-xs text-slate-400">Trust Score</div>
                <div className="mt-1 text-xl font-bold text-slate-900">94</div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>
    </AppShell>
  )
}
