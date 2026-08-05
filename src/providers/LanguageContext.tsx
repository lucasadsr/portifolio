'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Dictionary, Language } from '@/types/language'
import { pt } from '@/dictionaries/pt'
import { en } from '@/dictionaries/en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Dictionary
}

const dictionaries: Record<Language, Dictionary> = {
  pt,
  en,
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const STORAGE_KEY = 'portfolio_preferred_language'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('pt')
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null
      if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
        setLanguageState(savedLang)
      } else {
        const browserLang = navigator.language.toLowerCase()
        if (browserLang.startsWith('en')) {
          setLanguageState('en')
        }
      }
    } catch {
      // Fallback to 'pt' on error
    } finally {
      setIsInitialized(true)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignore storage write errors
    }
  }

  // Dynamically update document <html lang="..."> attribute
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language === 'en' ? 'en' : 'pt-BR'
    }
  }, [language])

  const t = dictionaries[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
