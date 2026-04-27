import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RoleSelectionPage from './pages/RoleSelectionPage'
import NgoOverviewPage from './pages/NgoOverviewPage'
import MissionManagementPage from './pages/MissionManagementPage'
import VerificationQueuePage from './pages/VerificationQueuePage'
import AnalyticsPage from './pages/AnalyticsPage'
import AiHubPage from './pages/AiHubPage'
import VolunteerDashboardPage from './pages/VolunteerDashboardPage'
import MissionDetailPage from './pages/MissionDetailPage'
import MyMissionsPage from './pages/MyMissionsPage'
import ProfilePage from './pages/ProfilePage'
import CertificatePage from './pages/CertificatePage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/role-select" element={<RoleSelectionPage />} />

      <Route path="/ngo" element={<NgoOverviewPage />} />
      <Route path="/ngo/missions" element={<MissionManagementPage />} />
      <Route path="/ngo/verification" element={<VerificationQueuePage />} />
      <Route path="/ngo/analytics" element={<AnalyticsPage />} />
      <Route path="/ngo/ai-hub" element={<AiHubPage />} />

      <Route path="/volunteer" element={<VolunteerDashboardPage />} />
      <Route path="/volunteer/mission-detail" element={<MissionDetailPage />} />
      <Route path="/volunteer/my-missions" element={<MyMissionsPage />} />
      <Route path="/volunteer/profile" element={<ProfilePage />} />
      <Route path="/volunteer/certificate" element={<CertificatePage />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
