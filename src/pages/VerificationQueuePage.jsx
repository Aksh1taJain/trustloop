import React from 'react'
import AppShell from '../components/AppShell'
import Topbar from '../components/Topbar'
import SectionCard from '../components/SectionCard'
import MissionStatusBadge from '../components/MissionStatusBadge'
import { verificationQueue } from '../data/mockData'

export default function VerificationQueuePage() {
  return (
    <AppShell role="ngo">
      <Topbar
        title="Verification Queue"
        subtitle="Review proof-of-work submissions and maintain clean accountability."
        action={<button className="btn-primary">Export Queue</button>}
      />

      <SectionCard title="Pending Proof Submissions" subtitle="All proof uploads shown here are mock prototype data for Phase 1.">
        <div className="space-y-4">
          {verificationQueue.map((item) => (
            <div key={item.id} className="rounded-2xl border border-line p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="text-lg font-semibold text-ink">{item.mission}</div>
                  <div className="mt-2 text-sm text-slate-500">
                    Submitted by <span className="font-medium text-slate-700">{item.volunteer}</span> • {item.proofType} • {item.submittedAt}
                  </div>
                  <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-600">
                    Proof preview area: image snapshot, timestamp, and geo-tag metadata would appear here in the full build.
                  </div>
                </div>
                <MissionStatusBadge status={item.status} />
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <button className="btn-primary">Approve Proof</button>
                <button className="btn-secondary">Reject</button>
                <button className="btn-secondary">Add Comment</button>
              </div>
            </div>
          ))}
        </div>
      </SectionCard>
    </AppShell>
  )
}
