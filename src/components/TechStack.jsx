import React from 'react'
import html5 from '../assets/tech/html5.svg'
import css3 from '../assets/tech/css3.svg'
import js from '../assets/tech/javascript.svg'
import php from '../assets/tech/php.svg'
import laravel from '../assets/tech/laravel.svg'
import reactLogo from '../assets/tech/react.svg'
import tailwind from '../assets/tech/tailwind.svg'
import mysql from '../assets/tech/mysql.svg'

const techs = [
  { name: 'HTML5', logo: html5 },
  { name: 'CSS3', logo: css3 },
  { name: 'JavaScript', logo: js },
  { name: 'PHP', logo: php },
  { name: 'Laravel', logo: laravel },
  { name: 'React', logo: reactLogo },
  { name: 'Tailwind', logo: tailwind },
  { name: 'MySQL', logo: mysql }
]

const TechStack = () => {
  return (
    <section className="bg-white py-12 border-t">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-8 text-gray-700">Tehnologije koje koristimo</h2>
        <div className="flex flex-wrap justify-center items-center gap-6 grayscale hover:grayscale-0 transition-all">
          {techs.map((tech, index) => (
            <div key={index} className="w-20 h-20 p-2 flex justify-center items-center transition-transform duration-300 hover:scale-110">
              <img src={tech.logo} alt={tech.name} title={tech.name} className="w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
