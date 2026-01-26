import React from 'react'
import Sidebar from '../ui/Sidebar'

export default function MainLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-page-bg">
      <Sidebar />
      <main className="flex-1 p-8 bg-page-bg">{children}</main>
    </div>
  )
}
