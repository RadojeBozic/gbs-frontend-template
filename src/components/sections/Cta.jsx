import React from 'react'
import { Link } from 'react-router-dom'

const Cta = () => {
  return (
    <section className="relative bg-blue-600 text-white py-20 overflow-hidden" data-aos="fade-up">
      <div className="absolute top-0 right-0 transform translate-x-1/3 opacity-25 pointer-events-none z-0">
        <img src="/images/gradient-blur.svg" alt="cta blur" className="w-[600px]" />
      </div>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Spremni za digitalni iskorak?
        </h2>
        <p className="text-lg text-blue-100 mb-8">
          Pokrenimo vaš sledeći projekat zajedno — uz GBS platformu i tim koji vas razume.
        </p>
        <Link
          to="/contact"
          className="bg-white text-blue-600 hover:bg-blue-100 font-semibold px-6 py-3 rounded-lg transition duration-300"
        >
          Zakaži konsultacije
        </Link>
      </div>
    </section>
  )
}

export default Cta
