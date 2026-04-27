import React from 'react'
import AppShell from '../components/AppShell'
import Topbar from '../components/Topbar'
import StatCard from '../components/StatCard'
import SectionCard from '../components/SectionCard'
import ChartCard from '../components/ChartCard'
import Table from '../components/Table'
import MissionStatusBadge from '../components/MissionStatusBadge'
import { ngoStats, missions, partnerGroups } from '../data/mockData'
import { ClipboardList, Users, ShieldCheck, Clock } from 'lucide-react'

const statsWithIcons = [
  { ...ngoStats[0], icon: ClipboardList },
  { ...ngoStats[1], icon: Users },
  { ...ngoStats[2], icon: ShieldCheck },
  { ...ngoStats[3], icon: Clock },
]

export default function NgoOverviewPage() {
  return (
    <AppShell role="ngo">
      <Topbar
        title="NGO Dashboard"
        subtitle="Track mission execution, volunteer reliability, and verified community impact from one place."
        action={<button className="btn-primary">Create Mission</button>}
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {statsWithIcons.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <ChartCard
          title="Mission Completion Trend"
          subtitle="Weekly execution tracking across all active missions"
          bars={[
            { label: 'Mon', value: 45 },
            { label: 'Tue', value: 62 },
            { label: 'Wed', value: 54 },
            { label: 'Thu', value: 78 },
            { label: 'Fri', value: 70 },
            { label: 'Sat', value: 82 },
          ]}
        />

        <SectionCard
          title="Partner Group Reliability"
          subtitle="Top external volunteer pools connected to the NGO network"
        >
          <div className="space-y-3">
            {partnerGroups.map((group) => (
              <div key={group.name} className="group rounded-xl border border-line bg-slate-50/50 p-4 transition-all hover:border-slate-300 hover:bg-white hover:shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-ink">{group.name}</div>
                    <div className="mt-1 text-sm text-slate-500">{group.activeMembers} active members</div>
                  </div>
                  <div className="badge bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {group.responseRate} response
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>

      <div className="mt-8">
        <SectionCard
          title="Recent Mission Activity"
          subtitle="Overview of the latest mission states across the network"
          right={<button className="btn-secondary">View all missions</button>}
        >
          <div className="overflow-x-auto">
            <Table
              columns={['Mission', 'Location', 'Urgency', 'Volunteers', 'Status']}
              rows={missions.slice(0, 5)}
              renderRow={(mission) => (
                <tr key={mission.id} className="group transition-colors hover:bg-slate-50">
                  <td className="border-b border-line px-4 py-4">
                    <div className="font-semibold text-ink">{mission.title}</div>
                    <div className="mt-1 text-sm text-slate-500">{mission.category}</div>
                  </td>
                  <td className="border-b border-line px-4 py-4 text-sm text-slate-600">{mission.location}</td>
                  <td className="border-b border-line px-4 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${
                      mission.urgency === 'Critical' ? 'bg-red-50 text-red-700 border border-red-200' :
                      mission.urgency === 'High' ? 'bg-orange-50 text-orange-700 border border-orange-200' :
                      mission.urgency === 'Medium' ? 'bg-yellow-50 text-yellow-700 border border-yellow-200' :
                      'bg-slate-50 text-slate-700 border border-slate-200'
                    }`}>
                      {mission.urgency}
                    </span>
                  </td>
                  <td className="border-b border-line px-4 py-4 text-sm font-semibold text-slate-700">{mission.volunteersNeeded}</td>
                  <td className="border-b border-line px-4 py-4"><MissionStatusBadge status={mission.status} /></td>
                </tr>
              )}
            />
          </div>
        </SectionCard>
      </div>
    </AppShell>
  )
}
