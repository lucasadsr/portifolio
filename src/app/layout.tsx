import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Lucas Ribeiro',
  description:
    'Sou um desenvolvedor full stack especializado em TypeScript, utilizando Next.js e Fastify para construir aplicações web eficientes. Minha expertise em Tailwind e Prisma complementa a criação de interfaces modernas e a integração segura com bancos de dados MySQL, PostgreSQL e MongoDB.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${inter.className} scroll-smooth`} lang="pt">
      <body className="antialiased bg-zinc-900 text-zinc-50">{children}</body>
    </html>
  )
}
