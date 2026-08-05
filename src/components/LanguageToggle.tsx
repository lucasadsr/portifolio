'use client'

import { useLanguage } from '@/providers/LanguageContext'
import { motion } from 'motion/react'
import { Globe } from 'lucide-react'

interface LanguageToggleProps {
  className?: string
}

export function LanguageToggle({ className = '' }: LanguageToggleProps) {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      className={`inline-flex items-center gap-1 p-1 rounded-full bg-zinc-900/90 border border-zinc-800/90 text-xs font-semibold shadow-inner ${className}`}
      role="group"
      aria-label="Seleção de idioma / Language selection"
    >
      <div className="flex items-center justify-center pl-1.5 pr-0.5 text-zinc-400">
        <Globe size={13} className="text-emerald-400/90" />
      </div>

      <button
        onClick={() => setLanguage('pt')}
        className={`relative px-2 py-0.5 rounded-full transition-colors duration-200 cursor-pointer ${
          language === 'pt'
            ? 'text-emerald-400 font-bold'
            : 'text-zinc-400 hover:text-zinc-200'
        }`}
        aria-label="Mudar para Português"
      >
        {language === 'pt' && (
          <motion.div
            layoutId="active-language-pill"
            transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
            className="absolute inset-0 rounded-full bg-emerald-500/15 border border-emerald-500/30"
          />
        )}
        <span className="relative z-10">PT</span>
      </button>

      <span className="text-zinc-700 select-none">|</span>

      <button
        onClick={() => setLanguage('en')}
        className={`relative px-2 py-0.5 rounded-full transition-colors duration-200 cursor-pointer ${
          language === 'en'
            ? 'text-emerald-400 font-bold'
            : 'text-zinc-400 hover:text-zinc-200'
        }`}
        aria-label="Switch to English"
      >
        {language === 'en' && (
          <motion.div
            layoutId="active-language-pill"
            transition={{ type: 'spring', bounce: 0.15, duration: 0.3 }}
            className="absolute inset-0 rounded-full bg-emerald-500/15 border border-emerald-500/30"
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
    </div>
  )
}
