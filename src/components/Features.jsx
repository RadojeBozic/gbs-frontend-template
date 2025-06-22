import React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { useTranslation } from 'react-i18next'

const Features = () => {
  const { t } = useTranslation()

  const features = [
    {
      title: t('features.0.title'),
      description: t('features.0.description'),
    },
    {
      title: t('features.1.title'),
      description: t('features.1.description'),
    },
    {
      title: t('features.2.title'),
      description: t('features.2.description'),
    },
    {
      title: t('features.3.title'),
      description: t('features.3.description'),
    },
    {
      title: t('features.4.title'),
      description: t('features.4.description'),
    },
    {
      title: t('features.5.title'),
      description: t('features.5.description'),
    }
  ]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{t('featuresTitle')}</h2>
          <p className="text-gray-600 mt-4">{t('featuresSubtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 shadow hover:shadow-lg transition " data-aos="fade-up" data-aos-delay={index * 100}>
              <CheckCircleIcon className="h-8 w-8 text-blue-600 mb-4" />
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
