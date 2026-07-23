'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import {
  Menu,
  X,
  Home,
  Briefcase,
  FolderKanban,
  Code2,
  Mail,
  ChevronRight,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

const NAV_ITEMS = [
  { label: 'Início', href: '#hero', id: 'hero', icon: Home },
  { label: 'Experiência', href: '#experience', id: 'experience', icon: Briefcase },
  { label: 'Projetos', href: '#projects', id: 'projects', icon: FolderKanban },
  { label: 'Habilidades', href: '#skills', id: 'skills', icon: Code2 },
  { label: 'Contato', href: '#contact', id: 'contact', icon: Mail },
]

export function Links() {
  const [activeSection, setActiveSection] = useState('#hero')
  const [isOpen, setIsOpen] = useState(false)

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

      {/* Mobile Dropdown Navigation with Smooth Expansion */}
      <div className="sm:hidden">
        <DropdownMenu.Root open={isOpen} onOpenChange={setIsOpen}>
          <DropdownMenu.Trigger asChild>
            <button
              aria-label="Abrir menu de navegação"
              className={`p-2.5 rounded-xl transition-all duration-300 focus:outline-none active:scale-95 border ${
                isOpen
                  ? 'bg-zinc-900 text-emerald-400 border-emerald-500/50 shadow-lg shadow-emerald-500/15 ring-2 ring-emerald-500/20'
                  : 'bg-zinc-900/90 text-zinc-300 hover:text-white border-zinc-800/90 hover:border-zinc-700 shadow-md'
              }`}
            >
              <div className="relative w-5 h-5 flex items-center justify-center">
                {isOpen ? (
                  <X size={20} className="text-emerald-400 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu size={20} className="text-zinc-300 transition-transform duration-300" />
                )}
              </div>
            </button>
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <AnimatePresence>
              {isOpen && (
                <DropdownMenu.Content asChild align="end" sideOffset={12}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96, y: -8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -6 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="z-50 w-64 rounded-2xl p-2 bg-zinc-950/95 backdrop-blur-2xl border border-zinc-800/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_30px_0_rgba(16,185,129,0.15)] focus:outline-none space-y-1 origin-top-right transform-gpu"
                  >
                    {/* Menu Header */}
                    <div className="flex items-center justify-between px-3.5 py-2 border-b border-zinc-900/90 mb-1">
                      <span className="text-[10px] font-mono font-semibold tracking-wider text-zinc-400 uppercase">
                        Navegação
                      </span>
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                    </div>

                    {/* Menu Items */}
                    {NAV_ITEMS.map((item) => {
                      const Icon = item.icon
                      const isActive = activeSection === item.href

                      return (
                        <DropdownMenu.Item key={item.href} asChild>
                          <a
                            href={item.href}
                            onClick={() => {
                              setActiveSection(item.href)
                              setIsOpen(false)
                            }}
                            className={`group flex items-center justify-between w-full rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-200 outline-none cursor-pointer active:scale-[0.98] ${
                              isActive
                                ? 'bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-semibold shadow-sm shadow-emerald-500/10'
                                : 'text-zinc-300 hover:text-white hover:bg-zinc-900/90 border border-transparent'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <div
                                className={`p-1.5 rounded-lg transition-colors ${
                                  isActive
                                    ? 'bg-emerald-500/20 text-emerald-400'
                                    : 'bg-zinc-900 text-zinc-400 group-hover:text-zinc-200 group-hover:bg-zinc-800'
                                }`}
                              >
                                <Icon size={16} />
                              </div>
                              <span>{item.label}</span>
                            </div>

                            {isActive ? (
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                            ) : (
                              <ChevronRight
                                size={14}
                                className="text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 transition-all"
                              />
                            )}
                          </a>
                        </DropdownMenu.Item>
                      )
                    })}
                  </motion.div>
                </DropdownMenu.Content>
              )}
            </AnimatePresence>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </>
  )
}
