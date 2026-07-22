import projects from './data.json'
import { Project } from '@/components/Project'
import { GithubIcon } from '@/components/icons'

export function Projects() {
  return (
    <section id="projects" className="py-24 space-y-12">
      <div className="space-y-2">
        <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase">
          Portfólio
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          Projetos em Destaque
        </h2>
        <p className="text-zinc-400 text-base max-w-xl">
          Conheça algumas das aplicações web e APIs que desenvolvi recentemente.
        </p>
      </div>

      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>

      <div className="flex justify-center pt-6">
        <a
          className="flex items-center gap-2.5 bg-zinc-900/90 border border-zinc-800 text-zinc-200 hover:text-white hover:border-emerald-500/40 hover:bg-zinc-800 py-3 px-6 rounded-xl font-medium text-sm transition-all shadow-lg hover:shadow-emerald-500/10 active:scale-95"
          href="https://github.com/lucasadsr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
          Ver todos os projetos no GitHub
        </a>
      </div>
    </section>
  )
}
