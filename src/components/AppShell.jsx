import React from 'react'
import Sidebar from './Sidebar'
import MobileRoleBar from './MobileRoleBar'

export default function AppShell({ role, children }) {
  return (
    <div className="min-h-screen bg-bg">
      <div className="mx-auto flex max-w-[1600px]">
        <Sidebar role={role} />
        <main className="min-h-screen flex-1 px-4 py-5 md:px-8 md:py-8">
          <MobileRoleBar role={role} />
          {children}
        </main>
      </div>
    </div>
  )
}
