export const ngoStats = [
  { label: 'Total Missions', value: '28', delta: '+6 this week' },
  { label: 'Active Volunteers', value: '142', delta: '+12 today' },
  { label: 'Verified Missions', value: '19', delta: '68% verified' },
  { label: 'Impact Hours', value: '486', delta: '+73 this month' },
]

export const missions = [
  {
    id: 1,
    title: 'Medicine Delivery for Senior Citizens',
    location: 'Noida Sector 62',
    urgency: 'High',
    org: 'HopeBridge NGO',
    volunteersNeeded: 6,
    estimatedHours: 3,
    status: 'Open',
    category: 'Healthcare',
    deadline: 'Today, 6:00 PM',
  },
  {
    id: 2,
    title: 'School Supply Distribution Drive',
    location: 'Ghaziabad',
    urgency: 'Medium',
    org: 'EduReach Foundation',
    volunteersNeeded: 12,
    estimatedHours: 5,
    status: 'In Progress',
    category: 'Education',
    deadline: 'Tomorrow, 11:00 AM',
  },
  {
    id: 3,
    title: 'Community Meal Packaging',
    location: 'Delhi NCR',
    urgency: 'High',
    org: 'ServeTogether',
    volunteersNeeded: 10,
    estimatedHours: 4,
    status: 'Pending Verification',
    category: 'Food Relief',
    deadline: 'Today, 8:00 PM',
  },
  {
    id: 4,
    title: 'Flood Relief Kit Assembly',
    location: 'East Delhi',
    urgency: 'Critical',
    org: 'RapidRelief Collective',
    volunteersNeeded: 15,
    estimatedHours: 6,
    status: 'Escalated',
    category: 'Disaster Support',
    deadline: 'Immediate',
  },
  {
    id: 5,
    title: 'Library Clean-up and Catalog Support',
    location: 'Noida Sector 18',
    urgency: 'Low',
    org: 'EduReach Foundation',
    volunteersNeeded: 4,
    estimatedHours: 2,
    status: 'Verified',
    category: 'Education',
    deadline: 'Friday, 4:00 PM',
  },
  {
    id: 6,
    title: 'Women Health Camp Registration Desk',
    location: 'Greater Noida',
    urgency: 'Medium',
    org: 'CareCircle',
    volunteersNeeded: 8,
    estimatedHours: 4,
    status: 'Open',
    category: 'Healthcare',
    deadline: 'Saturday, 10:00 AM',
  }
]

export const verificationQueue = [
  {
    id: 101,
    mission: 'Community Meal Packaging',
    volunteer: 'Khwaish Goyal',
    proofType: 'Image + timestamp',
    submittedAt: 'Today, 3:42 PM',
    status: 'Pending'
  },
  {
    id: 102,
    mission: 'Flood Relief Kit Assembly',
    volunteer: 'Neha Verma',
    proofType: 'Image + geo-tag',
    submittedAt: 'Today, 2:18 PM',
    status: 'Needs Review'
  },
  {
    id: 103,
    mission: 'School Supply Distribution Drive',
    volunteer: 'Riya Singh',
    proofType: 'Image + notes',
    submittedAt: 'Yesterday, 6:20 PM',
    status: 'Pending'
  }
]

export const volunteerLeaders = [
  { name: 'Khwaish Goyal', trust: 94, completion: '96%', group: 'NSS JIIT' },
  { name: 'Neha Verma', trust: 91, completion: '92%', group: 'Delhi Youth Serve' },
  { name: 'Riya Singh', trust: 89, completion: '90%', group: 'NSS JIIT' },
  { name: 'Kabir Mehta', trust: 87, completion: '88%', group: 'Youth for Good' },
]

export const partnerGroups = [
  { name: 'NSS JIIT', activeMembers: 48, responseRate: '82%' },
  { name: 'Delhi Youth Serve', activeMembers: 31, responseRate: '76%' },
  { name: 'Campus Impact Club', activeMembers: 27, responseRate: '73%' },
]

export const aiOutput = {
  summary: 'Residents in two nearby blocks are facing a shortage of medicines and scheduled support for elderly citizens. The need is time-sensitive because several residents depend on regular medication.',
  category: 'Healthcare Access',
  urgency: 'High',
  draftTitle: 'Deliver Essential Medicines to Elderly Residents',
  draftDescription: 'Coordinate local volunteers to collect, sort, and deliver prescribed medicines to elderly residents across two residential blocks within the same day.',
  estimatedHours: 3,
  volunteersNeeded: 6,
  suggestedSkills: ['Local coordination', 'Basic communication', 'Time management']
}

export const analytics = {
  completionRate: 78,
  averageResponseTime: '2.1 hrs',
  verifiedImpactHours: 486,
  escalationsThisWeek: 4
}

export const volunteerProfile = {
  name: 'Akshita Jain',
  trustScore: 94,
  impactHours: 62,
  completedMissions: 18,
  activeMissions: 2,
  certificatesEarned: 4
}

export const volunteerAccepted = [
  {
    id: 201,
    title: 'Medicine Delivery for Senior Citizens',
    location: 'Noida Sector 62',
    deadline: 'Today, 6:00 PM',
    status: 'Accepted'
  },
  {
    id: 202,
    title: 'Women Health Camp Registration Desk',
    location: 'Greater Noida',
    deadline: 'Saturday, 10:00 AM',
    status: 'In Progress'
  }
]
