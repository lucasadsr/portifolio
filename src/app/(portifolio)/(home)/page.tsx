import { Contact } from '@/components/Contact'
import { Experience } from '@/components/Experience'
import { Hero } from '@/components/Hero'
import { Projects } from '@/components/Projects'
import { Skills } from '@/components/Skills'

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Hero />
      <div className="w-full max-w-[1140px] mx-auto px-6 sm:px-8">
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}
