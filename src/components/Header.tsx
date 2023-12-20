import Link from 'next/link'
import { Links } from './Links'

export function Header() {
  return (
    <header className="flex items-center justify-between h-24 border-b-2 border-b-zinc-800">
      <Link
        href="/"
        className="text-white text-2xl font-bold hover:cursor-pointer"
      >
        Lucas Ribeiro
      </Link>

      <nav>
        <Links />
      </nav>
    </header>
  )
}
