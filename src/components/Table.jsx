import React from 'react'

export default function Table({ columns, rows, renderRow }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-separate border-spacing-0">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column}
                className="border-b border-line px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-400"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{rows.map(renderRow)}</tbody>
      </table>
    </div>
  )
}
