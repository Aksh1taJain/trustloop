import React from 'react'

export default function SectionCard({ title, subtitle, right, children }) {
  return (
    <section className="card p-6 animate-fade-in">
      <div className="section-header">
        <div>
          <h2 className="section-title">{title}</h2>
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
        {right}
      </div>
      {children}
    </section>
  )
}
