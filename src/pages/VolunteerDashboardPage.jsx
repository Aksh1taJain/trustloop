import React from 'react'
import { Link } from 'react-router-dom'
import AppShell from '../components/AppShell'
import Topbar from '../components/Topbar'
import SectionCard from '../components/SectionCard'
import MissionStatusBadge from '../components/MissionStatusBadge'
import { missions, volunteerProfile } from '../data/mockData'
import { Award, Clock, CheckCircle, MapPin, Calendar, ArrowRight } from 'lucide-react'

export default function VolunteerDashboardPage() {
  return (
    <AppShell role="volunteer">
      <Topbar
        title="Volunteer Dashboard"
        subtitle="Browse missions, monitor your reliability, and contribute verified impact."
        action={<Link to="/volunteer/my-missions" className="btn-primary">View My Missions</Link>}
      />

      <div className="grid gap-5 md:grid-cols-3">
        <div className="stat-card group">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-medium text-slate-500">Trust Score</div>
              <div className="mt-3 text-3xl font-bold text-ink">{volunteerProfile.trustScore}</div>
              <div className="mt-3 text-sm font-medium text-accent-green-600">Top 5% volunteers</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all group-hover:bg-brand-100">
              <Award size={24} />
            </div>
          </div>
        </div>
        
        <div className="stat-card group">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-medium text-slate-500">Impact Hours</div>
              <div className="mt-3 text-3xl font-bold text-ink">{volunteerProfile.impactHours}</div>
              <div className="mt-3 text-sm font-medium text-accent-green-600">+8 this week</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all group-hover:bg-brand-100">
              <Clock size={24} />
            </div>
          </div>
        </div>
        
        <div className="stat-card group">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-sm font-medium text-slate-500">Completed Missions</div>
              <div className="mt-3 text-3xl font-bold text-ink">{volunteerProfile.completedMissions}</div>
              <div className="mt-3 text-sm font-medium text-accent-green-600">96% completion rate</div>
            </div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-all group-hover:bg-brand-100">
              <CheckCircle size={24} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <SectionCard title="Available Missions" subtitle="Discover and accept missions that match your skills and availability">
          <div className="grid gap-5 lg:grid-cols-2">
            {missions.slice(0, 4).map((mission) => (
              <div key={mission.id} className="group rounded-2xl border border-line bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="text-lg font-bold text-ink group-hover:text-brand-600 transition-colors">{mission.title}</div>
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

                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-slate-50 p-3 text-center transition-colors group-hover:bg-slate-100">
                    <div className="text-xs font-medium text-slate-500">Urgency</div>
                    <div className={`mt-1.5 text-sm font-bold ${
                      mission.urgency === 'High' || mission.urgency === 'Critical' ? 'text-orange-600' :
                      mission.urgency === 'Medium' ? 'text-yellow-600' : 'text-slate-600'
                    }`}>
                      {mission.urgency}
                    </div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3 text-center transition-colors group-hover:bg-slate-100">
                    <div className="text-xs font-medium text-slate-500">Hours</div>
                    <div className="mt-1.5 text-sm font-bold text-slate-800">{mission.estimatedHours}h</div>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3 text-center transition-colors group-hover:bg-slate-100">
                    <div className="text-xs font-medium text-slate-500">Needed</div>
                    <div className="mt-1.5 text-sm font-bold text-slate-800">{mission.volunteersNeeded}</div>
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm text-slate-600">
                  <Calendar size={16} />
                  <span>Deadline: <span className="font-semibold text-slate-800">{mission.deadline}</span></span>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to="/volunteer/mission-detail" className="btn-secondary flex-1">
                    View Details
                  </Link>
                  <button className="btn-primary flex-1 group/btn">
                    Accept Mission
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
      </div>
    </AppShell>
  )
}
