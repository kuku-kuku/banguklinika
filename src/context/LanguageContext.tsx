import { createContext, useContext } from 'react'

export type Lang = 'lt' | 'lv'

const LanguageContext = createContext<Lang>('lt')

export const useLang = () => useContext(LanguageContext)

export function LangProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <LanguageContext.Provider value={lang}>
      {children}
    </LanguageContext.Provider>
  )
}
