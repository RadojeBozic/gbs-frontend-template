import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TopHeaderBar from '../components/header/TopHeaderBar'
import Footer from '../components/Footer'
import MainHeader from '../components/header/MainHeader'
import TechTicker from '../components/header/TechTicker'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">

      {/* Top bar iznad svega */}
      <TopHeaderBar />

      {/* Glavna navigacija */}
      <MainHeader />



      {/* Glavni sadržaj */}
      <main className="flex-1">
        <Outlet />
      </main>

       



      {/* Footer */}
      <Footer />
    </div>
  )
}

export default MainLayout
