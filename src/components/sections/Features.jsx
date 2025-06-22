import React from 'react'

const features = [
  {
    title: 'Izrada sajtova',
    description: 'Moderne, brze i prilagodljive web prezentacije sa CMS-om i kontakt formama.',
  },
  {
    title: 'ERP & poslovne aplikacije',
    description: 'Upravljanje klijentima, fakturama, zalihama i projektima – sve na jednom mestu.',
  },
  {
    title: 'Online prodavnice',
    description: 'E-commerce rešenja sa više prodavaca, naprednom pretragom i lokalizacijom.',
  },
  {
    title: 'AI alati',
    description: 'Pisanje sadržaja, SEO analiza, prevodi i automatizovani asistenti za podršku.',
  },
  {
    title: 'CMS platforme',
    description: 'Sopstveni sistem za vesti, članke, komentare i tagovanje sadržaja.',
  },
  {
    title: 'Edukacija i podrška',
    description: 'Video uputstva, trening za korisnike, onboarding i tehnička pomoć.'
  }
]

const Features = () => {
  return (
    <section
      id="features"
      className="relative bg-white py-24 overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-20 pointer-events-none z-0">
        <img src="/images/circle-fade.svg" alt="pozadina" className="w-[900px]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Naše usluge</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ključne oblasti u kojima pomažemo digitalnu transformaciju malih i srednjih preduzeća.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-delay="100">
          {features.map((feature, index) => (
            <div key={index} className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
