import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'sr', label: '🇷🇸 SR' },
  { code: 'en', label: '🇬🇧 EN' },
  { code: 'de', label: '🇩🇪 DE' },
  { code: 'hr', label: '🇭🇷 HR' },
  { code: 'ba', label: '🇧🇦 BA' },
  { code: 'el', label: '🇬🇷 GR' }
]

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setOpen(false)
  }

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex justify-center items-center px-3 py-1 text-sm font-medium bg-white border border-gray-300 rounded shadow hover:bg-gray-50"
        >
          🌐 {i18n.language.toUpperCase()}
        </button>
      </div>

      {open && (
        <div className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {LANGUAGES.map(({ code, label }) => (
              <button
                key={code}
                onClick={() => changeLanguage(code)}
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LanguageSwitcher
