import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const fallbackLng = ['en']
const avalibleLanguages = ['en', 'hr']

i18n
  // load translation using http -> see /public/locales
  .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    fallbackLng,
    backend: {
      loadPath: '/locales/translations/{{lng}}.json',
    },
    detection: {
      checkWhitelist: true,
    },
    // debug: process.env.NODE_ENV !== 'production',
    debug: true,

    whitelist: avalibleLanguages,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },

    react: {
      wait: true,
      useSuspense: false,
    },
  })

export default i18n
