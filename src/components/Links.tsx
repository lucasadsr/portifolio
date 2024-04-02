'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Menu } from 'lucide-react'
import { useEffect, useState } from 'react'

export function Links() {
  const [hash, setHash] = useState('#hero')
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
      <DropdownMenu.Content
        align="end"
        sideOffset={5}
        className="w-32 rounded-lg px-1.5 py-1 shadow-md md:w-56 bg-white dark:bg-gray-800"
      >
        <DropdownMenu.Item className="flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none text-gray-200 focus:bg-gray-500">
          <a href="#hero">Início</a>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none text-gray-200 focus:bg-gray-500">
          <a href="#projects">Projetos</a>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none text-gray-200 focus:bg-gray-500">
          <a href="#skills">Habilidades</a>
        </DropdownMenu.Item>
        <DropdownMenu.Item className="flex cursor-default select-none items-center rounded-md px-2 py-2 text-sm outline-none text-gray-200 focus:bg-gray-500">
          <a href="#contact">Contato</a>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}
