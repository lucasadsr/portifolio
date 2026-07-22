import { Skill } from '@/components/Skill'
import skills from './data.json'
import { Code2, Server } from 'lucide-react'

export function Skills() {
  return (
    <section id="skills" className="py-24 space-y-12">
      <div className="space-y-2">
        <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">
          Tech Stack
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Habilidades & Tecnologias
        </h2>
        <p className="text-zinc-400 text-base max-w-xl">
          Ferramentas e tecnologias que utilizo no dia a dia para construir produtos modernos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Front-End Stack Card */}
        <div className="p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 space-y-6 shadow-xl shadow-black/20 hover:border-zinc-700/80 transition-colors">
          <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Code2 size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Front-End</h3>
              <p className="text-xs text-zinc-400">Interfaces dinâmicas e reativas</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) =>
              skill.stack === 'front-end' ? (
                <Skill key={skill.id} skill={skill} />
              ) : null,
            )}
          </div>
        </div>

        {/* Back-End Stack Card */}
        <div className="p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 space-y-6 shadow-xl shadow-black/20 hover:border-zinc-700/80 transition-colors">
          <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <Server size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Back-End</h3>
              <p className="text-xs text-zinc-400">APIs, serviços e bancos de dados</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) =>
              skill.stack === 'back-end' ? (
                <Skill key={skill.id} skill={skill} />
              ) : null,
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
