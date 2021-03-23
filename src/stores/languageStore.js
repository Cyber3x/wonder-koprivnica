import create from 'zustand'

import en from '../../public/locales/translations/en.json'
import hr from '../../public/locales/translations/hr.json'

const get_nested = (p, o) =>
  p.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o)

export const useLanguageStore = create((set, get) => ({
  language: 'hr',
  checkLanguage: () => {
    const language = localStorage.getItem('language')
    language ? set({ language }) : null
  },
  changeLanguage: (language) => {
    set({ language })
    localStorage.setItem('language', language)
  },
  t: (key) => get_nested(key.split('.'), get().translations[get().language]),
  translations: {
    en,
    hr,
  },
}))
