import React from 'react'
import AppShell from '../components/AppShell'
import Topbar from '../components/Topbar'
import ChartCard from '../components/ChartCard'
import SectionCard from '../components/SectionCard'
import { analytics, volunteerLeaders } from '../data/mockData'

export default function AnalyticsPage() {
  return (
    <AppShell role="ngo">
      <Topbar
        title="Reports & Analytics"
        subtitle="Clean operational reporting for NGOs, CSR teams, and partner stakeholders."
        action={<button className="btn-primary">Download Impact Report</button>}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div className="card p-5"><div className="text-sm text-slate-500">Completion Rate</div><div className="mt-2 text-3xl font-bold">{analytics.completionRate}%</div></div>
        <div className="card p-5"><div className="text-sm text-slate-500">Response Time</div><div className="mt-2 text-3xl font-bold">{analytics.averageResponseTime}</div></div>
        <div className="card p-5"><div className="text-sm text-slate-500">Verified Hours</div><div className="mt-2 text-3xl font-bold">{analytics.verifiedImpactHours}</div></div>
        <div className="card p-5"><div className="text-sm text-slate-500">Escalations</div><div className="mt-2 text-3xl font-bold">{analytics.escalationsThisWeek}</div></div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <ChartCard
          title="Weekly Verified Hours"
          subtitle="Mock chart for stakeholder reporting"
          bars={[
            { label: 'W1', value: 38 },
            { label: 'W2', value: 55 },
            { label: 'W3', value: 61 },
            { label: 'W4', value: 84 },
          ]}
        />

        <ChartCard
          title="Mission Response Time"
          subtitle="Mock chart for operational monitoring"
          bars={[
            { label: 'Health', value: 72 },
            { label: 'Edu', value: 56 },
            { label: 'Food', value: 68 },
            { label: 'Relief', value: 88 },
          ]}
        />
      </div>

      <div className="mt-6">
        <SectionCard title="Volunteer Reliability Insights" subtitle="Top performers and trust visibility for assignment confidence.">
          <div className="grid gap-4 md:grid-cols-2">
            {volunteerLeaders.map((person) => (
              <div key={person.name} className="rounded-2xl border border-line p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-semibold text-ink">{person.name}</div>
                    <div className="mt-1 text-sm text-slate-500">{person.group}</div>
                  </div>
                  <div className="badge bg-emerald-50 text-emerald-700">Trust {person.trust}</div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-slate-400">Completion</div>
                    <div className="mt-1 font-semibold text-slate-800">{person.completion}</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <div className="text-slate-400">Reliability Tier</div>
                    <div className="mt-1 font-semibold text-slate-800">High</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </AppShell>
  )
}
