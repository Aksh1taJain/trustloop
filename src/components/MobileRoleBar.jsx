import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileRoleBar({ role }) {
  return (
    <div className="mb-4 flex items-center justify-between rounded-2xl border border-line bg-white p-3 lg:hidden">
      <div>
        <div className="text-sm font-semibold text-slate-900">
          {role === 'ngo' ? 'NGO Workspace' : 'Volunteer Workspace'}
        </div>
        <div className="text-xs text-slate-500">Use the quick switch buttons below</div>
      </div>
      <div className="flex gap-2">
        <Link to="/ngo" className="btn-secondary text-xs">NGO</Link>
        <Link to="/volunteer" className="btn-primary text-xs">Volunteer</Link>
      </div>
    </div>
  )
}
