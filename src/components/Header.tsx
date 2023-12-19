import Link from 'next/link'

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
        <ul className="flex gap-16">
          <li className="text-white font-semibold hover:text-white cursor-pointer transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="text-zinc-300 font-semibold hover:text-white cursor-pointer transition-all">
            <Link href="/">Projects</Link>
          </li>
          <li className="text-zinc-300 font-semibold hover:text-white cursor-pointer transition-all">
            <Link href="/">Skills</Link>
          </li>
          <li className="text-zinc-300 font-semibold hover:text-white cursor-pointer transition-all">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
