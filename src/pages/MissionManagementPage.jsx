import React from 'react'
import AppShell from '../components/AppShell'
import Topbar from '../components/Topbar'
import SectionCard from '../components/SectionCard'
import MissionStatusBadge from '../components/MissionStatusBadge'
import { missions } from '../data/mockData'
import { Circle, Clock, Shield, AlertTriangle, MapPin, Calendar, Users as UsersIcon } from 'lucide-react'

const missionStats = [
  { label: 'Open', value: '2', icon: Circle, color: 'brand' },
  { label: 'In Progress', value: '1', icon: Clock, color: 'amber' },
  { label: 'Pending Verification', value: '1', icon: Shield, color: 'purple' },
  { label: 'Escalated', value: '1', icon: AlertTriangle, color: 'red' },
]

export default function MissionManagementPage() {
  return (
    <AppShell role="ngo">
      <Topbar
        title="Mission Management"
        subtitle="Create, assign, and monitor volunteer missions with clear status visibility."
        action={<button className="btn-primary">New Mission</button>}
      />

      <div className="mb-8 grid gap-5 md:grid-cols-4">
        {missionStats.map((stat) => {
          const Icon = stat.icon
          return (
            <div key={stat.label} className="stat-card group">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-slate-500">{stat.label}</div>
                  <div className="mt-3 text-3xl font-bold text-ink">{stat.value}</div>
                </div>
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${stat.color}-50 text-${stat.color}-600 transition-all group-hover:bg-${stat.color}-100`}>
                  <Icon size={24} />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <SectionCard
        title="Mission List"
        subtitle="Comprehensive view of all missions with operational tracking"
        right={<button className="btn-secondary">Assign Volunteers</button>}
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {missions.map((mission) => {
            const isUrgent = mission.urgency === 'High' || mission.urgency === 'Critical'
            const isCritical = mission.urgency === 'Critical'
            
            return (
              <div 
                key={mission.id} 
                className={`group rounded-2xl border p-6 transition-all hover:shadow-lg ${
                  isCritical 
                    ? 'border-red-200 bg-gradient-to-br from-red-50 to-white' 
                    : isUrgent 
                      ? 'border-orange-200 bg-gradient-to-br from-orange-50 to-white'
                      : 'border-line bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className={`text-lg font-bold ${isCritical ? 'text-red-900' : isUrgent ? 'text-orange-900' : 'text-ink'}`}>
                      {mission.title}
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-slate-500">
                      <span className="font-semibold text-slate-700">{mission.org}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {mission.location}
                      </span>
                    </div>
                  </div>
                  <MissionStatusBadge status={mission.status} />
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {mission.category} mission requiring {mission.volunteersNeeded} volunteers for approximately {mission.estimatedHours} hours of work.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className={`rounded-xl p-3 transition-colors ${
                    isCritical ? 'bg-red-100' : isUrgent ? 'bg-orange-100' : 'bg-slate-50 group-hover:bg-slate-100'
                  }`}>
                    <div className="flex items-center gap-2">
                      <AlertTriangle size={14} className={isCritical ? 'text-red-600' : isUrgent ? 'text-orange-600' : 'text-slate-500'} />
                      <div className="text-xs font-medium text-slate-500">Urgency</div>
                    </div>
                    <div className={`mt-1.5 text-sm font-bold ${
                      isCritical ? 'text-red-700' : isUrgent ? 'text-orange-700' : 'text-slate-800'
                    }`}>
                      {mission.urgency}
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3 transition-colors group-hover:bg-slate-100">
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-slate-500" />
                      <div className="text-xs font-medium text-slate-500">Deadline</div>
                    </div>
                    <div className="mt-1.5 text-sm font-bold text-slate-800">{mission.deadline}</div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 rounded-xl bg-white border border-slate-200 p-3">
                  <UsersIcon size={16} className="text-brand-600" />
                  <span className="text-sm text-slate-600">
                    <span className="font-bold text-slate-900">{mission.volunteersNeeded}</span> volunteers needed
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <button className="btn-secondary">View Details</button>
                  <button className="btn-secondary">Assign Team</button>
                  {mission.status === 'Escalated' ? (
                    <button className="btn-primary bg-red-600 hover:bg-red-700">Escalated to Backup</button>
                  ) : (
                    <button className="btn-ghost text-slate-600">Escalate</button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </SectionCard>
    </AppShell>
  )
}
