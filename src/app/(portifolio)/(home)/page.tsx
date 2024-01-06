import Contact from '@/components/Contact/page'
import { Hero } from '@/components/Hero'
import Projects from '@/components/Projects/index.tsx'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-[1140px] mx-auto px-6">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
