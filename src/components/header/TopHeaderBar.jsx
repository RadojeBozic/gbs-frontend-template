import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const TopHeaderBar = () => {
  const [visible, setVisible] = useState(true)
  const [showLang, setShowLang] = useState(false)
  const [showServices, setShowServices] = useState(false)

  if (!visible) return null

  return (
    <div className="relative bg-gray-800 text-white py-2 px-4 z-50">
      {/* Pozadinski efekti */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <img src="/images/header-blur.svg" alt="blur" className="absolute top-0 left-1/3 w-[400px] opacity-20" />
        <img src="/images/gradient-light.svg" alt="glow" className="absolute top-0 right-0 w-[500px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto flex justify-between items-center">
        {/* Levo: Planet logo */}
        <Link to="/planet-services" title="Planeta usluga">
          <img src="/images/planet.svg" alt="Planet" className="w-10 h-10" />
        </Link>

        {/* Centar: screen controls */}
        <div className="flex gap-4 items-center">
          <button title="Desktop prikaz" className="hover:scale-110 transition">📺</button>
          <button title="Mobilni prikaz" className="hover:scale-110 transition">📱</button>
        </div>

        {/* Desno: meniji + X */}
        <div className="flex items-center gap-3">
          {/* Usluge */}
          <div className="relative">
            <button
              onClick={() => setShowServices(!showServices)}
              className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
            >
              Usluge
            </button>
            {showServices && (
              <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded shadow text-sm z-20">
                <Link to="/services/web" className="block px-4 py-2 hover:bg-gray-100">Izrada sajtova</Link>
                <Link to="/services/erp" className="block px-4 py-2 hover:bg-gray-100">ERP aplikacije</Link>
                <Link to="/services/ecom" className="block px-4 py-2 hover:bg-gray-100">Online prodavnica</Link>
              </div>
            )}
          </div>

          {/* Jezici */}
          <div className="relative">
            <button
              onClick={() => setShowLang(!showLang)}
              className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm"
            >
              🌐
            </button>
            {showLang && (
              <div className="absolute right-0 mt-2 bg-white text-gray-800 rounded shadow text-sm z-20">
                <button onClick={() => window.location.reload()} className="block px-4 py-2 hover:bg-gray-100">🇷🇸 SR</button>
                <button onClick={() => window.location.reload()} className="block px-4 py-2 hover:bg-gray-100">🇬🇧 EN</button>
                <button onClick={() => window.location.reload()} className="block px-4 py-2 hover:bg-gray-100">🇩🇪 DE</button>
              </div>
            )}
          </div>

          {/* X dugme */}
          <button
            onClick={() => setVisible(false)}
            className="text-gray-400 hover:text-white text-xl"
            title="Zatvori traku"
          >
            ❌
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopHeaderBar
