import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <footer className="bg-gray-900 text-gray-300 text-sm py-6 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">{t('footerText')}</p>
        <div className="space-x-4">
          <Link to="/privacy" className="hover:underline">{t('privacyPolicy')}</Link>
          <Link to="/terms" className="hover:underline">{t('termsOfService')}</Link>
          <Link to="/contact" className="hover:underline">{t('contactUs')}</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
