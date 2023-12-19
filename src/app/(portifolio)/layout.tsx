import { Header } from '@/components/Header'
import { ReactNode } from 'react'

export default function portifolioLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="min-h-screen w-full max-w-[1440px] mx-auto px-6">
      <Header />
      {children}
    </div>
  )
}
