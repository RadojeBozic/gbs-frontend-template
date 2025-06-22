import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const MainHeader = () => {
  const location = useLocation()

  return (
<header className="w-full sticky top-0 z-40 bg-gray-900/90 backdrop-blur-md text-white shadow-sm transition-all duration-300">

        <img
            src="/images/gradient-light.svg"
            alt=""
            className="absolute top-0 right-0 w-[400px] opacity-10 pointer-events-none z-0"
        />
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Levo: mini logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src="/images/planet.svg" alt="Logo" className="w-10 h-10" />
          <span className="font-bold text-blue-400 text-lg hidden sm:inline">GBS</span>
        </Link>

        {/* Centar: meni */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link
            to="/"
            className={`hover:text-blue-400 ${
              location.pathname === '/' ? 'text-blue-400 font-semibold' : 'text-white'
            }`}
          >
            Početna
          </Link>
          <Link
            to="/about"
            className={`hover:text-blue-400 ${
              location.pathname === '/about' ? 'text-blue-400 font-semibold' : 'text-white'
            }`}
          >
            O nama
          </Link>
          <Link
            to="/services"
            className={`hover:text-blue-400 ${
              location.pathname === '/services' ? 'text-blue-400 font-semibold' : 'text-white'
            }`}
          >
            Usluge
          </Link>
          <Link
            to="/contact"
            className={`hover:text-blue-400 ${
              location.pathname === '/contact' ? 'text-blue-400 font-semibold' : 'text-white'
            }`}
          >
            Kontakt
          </Link>
        </nav>

        {/* Desno: dugmad */}
        <div className="flex items-center gap-4">
          <button className="text-sm font-semibold text-white hover:text-blue-400">
            Sign In
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 text-sm rounded">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
