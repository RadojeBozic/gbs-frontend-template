import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const CallToAction = () => {
  const { t } = useTranslation()

  return (
    <section className="bg-blue-600 text-white py-16" data-aos="fade-in">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
        <p className="mb-6 text-lg">{t('ctaText')}</p>
        <Link
          to="/contact"
          className="inline-flex items-center bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition"
        >
          {t('ctaAction')}
          <ArrowRightIcon className="h-5 w-5 ml-2" />
        </Link>
      </div>
    </section>
  )
}

export default CallToAction
