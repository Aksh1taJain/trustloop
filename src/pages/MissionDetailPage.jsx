import React from 'react'
import AppShell from '../components/AppShell'
import Topbar from '../components/Topbar'
import SectionCard from '../components/SectionCard'

export default function MissionDetailPage() {
  return (
    <AppShell role="volunteer">
      <Topbar
        title="Mission Detail"
        subtitle="Detailed volunteer mission view with proof submission area."
        action={<button className="btn-primary">Accept Mission</button>}
      />

      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <SectionCard title="Deliver Essential Medicines to Elderly Residents" subtitle="HopeBridge NGO • Noida Sector 62 • Deadline: Today, 6:00 PM">
          <p className="text-sm leading-7 text-slate-700">
            This mission supports elderly residents who are unable to collect medicines on time. Volunteers coordinate pick-up, sorting, and final delivery while maintaining communication with the NGO coordinator.
          </p>

          <div className="mt-5">
            <div className="text-sm font-semibold text-ink">Step-by-step instructions</div>
            <div className="mt-3 space-y-3 text-sm text-slate-600">
              <div className="rounded-xl bg-slate-50 p-4">1. Check the assigned delivery list and confirm recipient addresses.</div>
              <div className="rounded-xl bg-slate-50 p-4">2. Collect medicine packets from the NGO coordination point.</div>
              <div className="rounded-xl bg-slate-50 p-4">3. Deliver packets and capture proof image with timestamp.</div>
              <div className="rounded-xl bg-slate-50 p-4">4. Upload proof and short completion note in the app.</div>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Proof Submission" subtitle="Phase 1 prototype UI for upload flow">
          <div className="rounded-2xl border border-dashed border-line bg-slate-50 p-8 text-center">
            <div className="text-sm font-semibold text-slate-700">Upload proof image</div>
            <div className="mt-2 text-sm text-slate-500">Drag and drop or browse files</div>
          </div>

          <div className="mt-4 grid gap-3">
            <input className="input" defaultValue="Auto timestamp: Today, 4:10 PM" readOnly />
            <input className="input" defaultValue="Simulated geo-tag: Noida Sector 62" readOnly />
            <textarea className="input min-h-[120px] resize-none" placeholder="Add completion notes" />
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <button className="btn-primary">Submit Proof</button>
            <button className="btn-secondary">Save Draft</button>
          </div>
        </SectionCard>
      </div>
    </AppShell>
  )
}
