import create from 'zustand'

import en from '../../public/locales/translations/en.json'
import hr from '../../public/locales/translations/hr.json'

const get_nested = (p, o) =>
  p.reduce((xs, x) => (xs && xs[x] ? xs[x] : null), o)

export const useLanguageStore = create((set, get) => ({
  language: 'hr',
  changeLanguage: (language) => set({ language }),
  t: (key) => get_nested(key.split('.'), get().translations[get().language]),
  translations: {
    en,
    hr,
  },
}))
