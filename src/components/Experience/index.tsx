import { Briefcase } from 'lucide-react'
import { Timeline } from './Timeline'
import { EXPERIENCES } from '@/constants/experiences'

export function Experience() {
  return (
    <section id="experience" className="py-24 space-y-12 relative overflow-hidden">
      {/* Section Header */}
      <div className="space-y-2">
        <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
          <Briefcase className="w-4 h-4" />
          Histórico Profissional
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Jornada & Experiência
        </h2>
        <p className="text-zinc-400 text-base max-w-xl">
          Conheça minhas principais atuações no mercado de tecnologia, projetos desenvolvidos e habilidades aprimoradas.
        </p>
      </div>

      {/* Timeline Component */}
      <Timeline experiences={EXPERIENCES} />
    </section>
  )
}
