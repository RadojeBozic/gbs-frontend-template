import React from 'react'
import { Link } from 'react-router-dom'
import gbsLogo from '../../assets/gbs_logo2.png'
import TechTicker from '../header/TechTicker'

const Hero = () => {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden pb-24">

      {/* Pozadinski efekti */}
      <img src="/images/header-blur.svg" className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] opacity-20 z-0 pointer-events-none" alt="" />
      <img src="/images/gradient-light.svg" className="absolute bottom-0 right-0 w-[500px] opacity-10 z-0 pointer-events-none" alt="" />

      {/* Hero content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-32 md:pt-40 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Global Business Systems</h1>
        <p className="text-blue-400 text-xl mb-4">Vaš digitalni partner</p>
        <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
          Web sajtovi, ERP rešenja, e-prodaja i AI alati – modularno, moćno i fleksibilno.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/contact" className="bg-blue-600 px-6 py-3 rounded text-white font-semibold hover:bg-blue-700">
            Zakaži konsultacije
          </Link>
          <a href="#features" className="text-blue-400 hover:underline">Saznaj više →</a>
        </div>

        {/* Logo */}
        <div className="flex justify-center mt-10">
          <img src={gbsLogo} alt="GBS logo" className="w-64 h-auto" />
        </div>
      </div>

      {/* Kajron tehnologija */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <TechTicker />
      </div>
    </section>
  )
}

export default Hero
