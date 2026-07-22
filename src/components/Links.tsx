'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const NAV_ITEMS = [
  { label: 'Início', href: '#hero', id: 'hero' },
  { label: 'Experiência', href: '#experience', id: 'experience' },
  { label: 'Projetos', href: '#projects', id: 'projects' },
  { label: 'Habilidades', href: '#skills', id: 'skills' },
  { label: 'Contato', href: '#contact', id: 'contact' },
]

export function Links() {
  const [activeSection, setActiveSection] = useState('#hero')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250

      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const item = NAV_ITEMS[i]
        const element = document.getElementById(item.id)
        if (element) {
          const top = element.offsetTop
          if (scrollPosition >= top) {
            setActiveSection(item.href)
            break
          }
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Desktop Navigation with Animated Sliding Pill */}
      <ul className="hidden sm:flex items-center gap-1 relative">
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.href

          return (
            <li key={item.href} className="relative">
              <a
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                className={`relative z-10 block px-4 py-1.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-emerald-400 font-semibold'
                    : 'text-zinc-400 hover:text-zinc-100'
                }`}
              >
                {item.label}
              </a>
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  transition={{
                    type: 'spring',
                    bounce: 0,
                    duration: 0.3,
                  }}
                  className="absolute inset-0 rounded-full bg-emerald-500/10 border border-emerald-500/25 shadow-sm shadow-emerald-500/10"
                />
              )}
            </li>
          )
        })}
      </ul>

      {/* Mobile Dropdown Navigation */}
      <div className="sm:hidden">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button
              aria-label="Abrir menu de navegação"
              className="p-2 rounded-xl text-zinc-300 hover:text-white bg-zinc-800/80 border border-zinc-700/80 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
            >
              <Menu size={20} />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              align="end"
              sideOffset={8}
              className="z-50 w-48 rounded-2xl p-2 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 shadow-2xl shadow-emerald-500/5 focus:outline-none"
            >
              {NAV_ITEMS.map((item) => (
                <DropdownMenu.Item key={item.href} asChild>
                  <a
                    href={item.href}
                    onClick={() => setActiveSection(item.href)}
                    className={`flex w-full items-center rounded-xl px-3 py-2.5 text-sm font-medium transition-colors outline-none cursor-pointer ${
                      activeSection === item.href
                        ? 'text-emerald-400 bg-emerald-500/10 font-semibold'
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
                    }`}
                  >
                    {item.label}
                  </a>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </>
  )
}
