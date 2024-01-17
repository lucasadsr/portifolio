'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Links() {
  const [hash, setHash] = useState('#hero')
  const windowWidth = window.innerWidth

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

  return windowWidth >= 600 ? (
    <ul className="flex gap-16 mobile:gap-3">
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
  ) : (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Menu />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="bg-zinc-700 p-8 rounded-2xl flex flex-col gap-3">
        <DropdownMenu.Item></DropdownMenu.Item>
        <DropdownMenu.Item>
          <a href="#hero">Início</a>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <a href="#projects">Projetos</a>
        </DropdownMenu.Item>
        <DropdownMenu.Item>
          <a href="#skills">Habilidades</a>
        </DropdownMenu.Item>
        <DropdownMenu.Item color="red">
          <a href="#contact">Contato</a>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
