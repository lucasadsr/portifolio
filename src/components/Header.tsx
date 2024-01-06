import { Links } from './Links'

export function Header() {
  return (
    <header className="flex items-center justify-between h-24 border-b-2 border-b-zinc-800 fixed top-0 w-full z-10 px-40 bg-zinc-900">
      <a
        href="#hero"
        className="text-white text-2xl font-bold hover:cursor-pointer"
      >
        Lucas Ribeiro
      </a>

      <nav>
        <Links />
      </nav>
    </header>
  )
}
