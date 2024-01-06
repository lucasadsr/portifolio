'use client'

import { useEffect, useState } from 'react'

export function Links() {
  const [hash, setHash] = useState('#hero')

  useEffect(() => {
    const handleHashChange = () => {
      setHash(window.location.hash as string)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [hash])

  const isActive = (pathname: string) => {
    return hash === pathname ? 'text-white' : 'text-zinc-300'
  }

  return (
    <ul className="flex gap-16">
      <li
        className={`${isActive(
          '#hero',
        )} font-semibold hover:text-white cursor-pointer transition-all`}
      >
        <a href="#hero">Início</a>
      </li>
      <li
        className={`${isActive(
          '#projects',
        )} font-semibold hover:text-white cursor-pointer transition-all`}
      >
        <a href="#projects">Projetos</a>
      </li>
      <li
        className={`${isActive(
          '#skills',
        )} font-semibold hover:text-white cursor-pointer transition-all`}
      >
        <a href="#skills">Habilidades</a>
      </li>
      <li
        className={`${isActive(
          '#contact',
        )} font-semibold hover:text-white cursor-pointer transition-all`}
      >
        <a href="#contact">Contato</a>
      </li>
    </ul>
  )
}
