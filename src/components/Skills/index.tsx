import { Skill } from '@/components/Skill'
import skills from './data.json'
import { Code2, Server, Cpu, Terminal } from 'lucide-react'

export function Skills() {
  return (
    <section id="skills" className="py-24 space-y-12">
      {/* Section Header */}
      <div className="space-y-2">
        <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
          <Cpu className="w-4 h-4" />
          Tech Stack
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Habilidades & Tecnologias
        </h2>
        <p className="text-zinc-400 text-base max-w-xl">
          Ferramentas e tecnologias que utilizo no dia a dia para construir produtos modernos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Front-End Stack Card */}
        <div className="p-7 rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 space-y-6 shadow-xl shadow-black/20 hover:border-emerald-500/30 transition-colors flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 min-h-[76px]">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <Code2 size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Front-End</h3>
                <p className="text-xs text-zinc-400">Interfaces web & mobile reativas</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) =>
                skill.stack === 'front-end' ? (
                  <Skill key={skill.id} skill={skill} />
                ) : null,
              )}
            </div>
          </div>
        </div>

        {/* Back-End Stack Card */}
        <div className="p-7 rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 space-y-6 shadow-xl shadow-black/20 hover:border-cyan-500/30 transition-colors flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 min-h-[76px]">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <Server size={22} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Back-End</h3>
                <p className="text-xs text-zinc-400">APIs, serviços & bancos de dados</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) =>
                skill.stack === 'back-end' ? (
                  <Skill key={skill.id} skill={skill} />
                ) : null,
              )}
            </div>
          </div>
        </div>

        {/* DevOps & Tools Stack Card */}
        <div className="p-7 rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 space-y-6 shadow-xl shadow-black/20 hover:border-violet-500/30 transition-colors flex flex-col justify-between md:col-span-2 lg:col-span-1">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4 min-h-[76px]">
              <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20 shrink-0">
                <Terminal size={22} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight leading-tight">DevOps & Ferramentas</h3>
                <p className="text-xs text-zinc-400">Cloud, CI/CD & utilitários</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) =>
                skill.stack === 'devops' ? (
                  <Skill key={skill.id} skill={skill} />
                ) : null,
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
