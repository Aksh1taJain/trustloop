import React from 'react'
import AppShell from '../components/AppShell'
import Topbar from '../components/Topbar'
import SectionCard from '../components/SectionCard'
import { volunteerProfile } from '../data/mockData'

export default function ProfilePage() {
  return (
    <AppShell role="volunteer">
      <Topbar
        title="Trust Profile"
        subtitle="Volunteer reliability, participation history, and impact footprint."
        action={<button className="btn-primary">Share Profile</button>}
      />

      <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
        <SectionCard title={volunteerProfile.name} subtitle="Top-performing community volunteer">
          <div className="grid gap-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-400">Trust Score</div>
              <div className="mt-2 text-4xl font-bold text-ink">{volunteerProfile.trustScore}</div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-400">Impact Hours</div>
              <div className="mt-2 text-4xl font-bold text-ink">{volunteerProfile.impactHours}</div>
            </div>
          </div>
        </SectionCard>

        <SectionCard title="Performance Snapshot" subtitle="Rule-based trust visibility shown clearly for assignment confidence.">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-line p-4">
              <div className="text-sm text-slate-400">Completed Missions</div>
              <div className="mt-2 text-3xl font-bold text-ink">{volunteerProfile.completedMissions}</div>
            </div>
            <div className="rounded-2xl border border-line p-4">
              <div className="text-sm text-slate-400">Active Missions</div>
              <div className="mt-2 text-3xl font-bold text-ink">{volunteerProfile.activeMissions}</div>
            </div>
            <div className="rounded-2xl border border-line p-4">
              <div className="text-sm text-slate-400">Certificates</div>
              <div className="mt-2 text-3xl font-bold text-ink">{volunteerProfile.certificatesEarned}</div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-600">
            Trust score in the full product can be calculated using completion rate, proof consistency, response reliability, escalation frequency, and coordinator feedback.
          </div>
        </SectionCard>
      </div>
    </AppShell>
  )
}
