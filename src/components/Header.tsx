'use client'

import { useEffect, useState } from 'react'
import { Links } from './Links'

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div
        className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-out ${
          scrolled
            ? 'mt-4 w-[calc(100%-2rem)] max-w-[1000px] h-14 px-6 rounded-full bg-zinc-950/85 backdrop-blur-xl border border-zinc-800/90 shadow-2xl shadow-emerald-500/10'
            : 'mt-0 w-full max-w-[1140px] h-20 px-6 sm:px-8 bg-transparent border-b border-transparent'
        }`}
      >
        <a
          href="#hero"
          className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors"
        >
          Lucas Ribeiro<span className="text-emerald-400">.</span>
        </a>

        <nav>
          <Links />
        </nav>
      </div>
    </header>
  )
}
