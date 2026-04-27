import React from 'react'
import { Circle, Clock, AlertCircle, CheckCircle, Shield, XCircle } from 'lucide-react'

const statusConfig = {
  'Open': { 
    class: 'bg-brand-50 text-brand-700 border border-brand-200', 
    icon: Circle 
  },
  'In Progress': { 
    class: 'bg-amber-50 text-amber-700 border border-amber-200', 
    icon: Clock 
  },
  'Pending Verification': { 
    class: 'bg-purple-50 text-purple-700 border border-purple-200', 
    icon: Shield 
  },
  'Verified': { 
    class: 'bg-emerald-50 text-emerald-700 border border-emerald-200', 
    icon: CheckCircle 
  },
  'Escalated': { 
    class: 'bg-red-50 text-red-700 border border-red-200', 
    icon: AlertCircle 
  },
  'Accepted': { 
    class: 'bg-blue-50 text-blue-700 border border-blue-200', 
    icon: CheckCircle 
  },
  'Pending': { 
    class: 'bg-purple-50 text-purple-700 border border-purple-200', 
    icon: Clock 
  },
  'Needs Review': { 
    class: 'bg-orange-50 text-orange-700 border border-orange-200', 
    icon: AlertCircle 
  },
}

export default function MissionStatusBadge({ status }) {
  const config = statusConfig[status] || { 
    class: 'bg-slate-100 text-slate-700 border border-slate-200', 
    icon: Circle 
  }
  const Icon = config.icon
  
  return (
    <span className={`badge ${config.class}`}>
      <Icon size={12} className="inline" />
      <span>{status}</span>
    </span>
  )
}
