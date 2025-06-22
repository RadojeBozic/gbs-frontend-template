import React from 'react'
import html5 from '../../assets/tech/html5.svg'
import css3 from '../../assets/tech/css3.svg'
import js from '../../assets/tech/javascript.svg'
import php from '../../assets/tech/php.svg'
import laravel from '../../assets/tech/laravel.svg'
import react from '../../assets/tech/react.svg'
import tailwind from '../../assets/tech/tailwind.svg'
import mysql from '../../assets/tech/mysql.svg'

const icons = [html5, css3, js, php, laravel, react, tailwind, mysql]

const TechTicker = () => {
  return (
    <div className="w-full bg-gray-100 py-4 overflow-hidden border-t border-b border-gray-200 relative z-10">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-10">
        {icons.concat(icons).map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`tech-${index}`}
            className="h-8 w-auto opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  )
}

export default TechTicker
