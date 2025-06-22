import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import translationSR from './locales/sr/translation.json'
import translationEN from './locales/en/translation.json'
import translationDE from './locales/de/translation.json'
import translationHR from './locales/hr/translation.json'
import translationBS from './locales/bs/translation.json'
import translationEL from './locales/el/translation.json'

const resources = {
  sr: { translation: translationSR },
  en: { translation: translationEN },
  de: { translation: translationDE },
  hr: { translation: translationHR },
  bs: { translation: translationBS },
  el: { translation: translationEL }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'sr',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
