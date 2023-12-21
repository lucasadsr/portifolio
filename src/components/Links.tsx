'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Links() {
  const path = usePathname()

  const isActive = (pathname: string) => {
    return path === pathname ? 'text-white' : 'text-zinc-300'
  }

  return (
    <ul className="flex gap-16">
      <li
        className={`${isActive(
          '/',
        )} font-semibold hover:text-white cursor-pointer transition-all`}
      >
        <Link href="/">Início</Link>
      </li>
      <li
        className={`${isActive(
          '/projects',
        )} font-semibold hover:text-white cursor-pointer transition-all`}
      >
        <Link href="/projects">Projetos</Link>
      </li>
      <li
        className={`${isActive(
          '/skills',
        )} font-semibold hover:text-white cursor-pointer transition-all`}
      >
        <Link href="/skills">Habilidades</Link>
      </li>
      <li
        className={`${isActive(
          '/contact',
        )} font-semibold hover:text-white cursor-pointer transition-all`}
      >
        <Link href="/">Contato</Link>
      </li>
    </ul>
  )
}
