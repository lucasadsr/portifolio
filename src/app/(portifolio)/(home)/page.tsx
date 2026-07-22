import Contact from '@/components/Contact'
import { Hero } from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div className="min-h-screen w-full max-w-[1140px] mx-auto px-6 max-sm:w-screen max-sm:overflow-hidden max-sm:px-3">
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
