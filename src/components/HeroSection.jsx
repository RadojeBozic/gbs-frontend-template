import { useTranslation } from 'react-i18next'
import gbsLogo from '../assets/gbs_logo2.png'

const HeroSection = () => {
  const { t } = useTranslation()

  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0" data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            {t('heroTitle')}
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            {t('heroSubtitle')}
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition">
            {t('ctaButton')}
          </button>
        </div>
        <div className="md:w-1/2 flex justify-center" data-aos="zoom-in">
          <img src={gbsLogo} alt="GBS Logo" className="w-64 h-auto" />
        </div>
      </div>
    </section>
  )
}
export default HeroSection