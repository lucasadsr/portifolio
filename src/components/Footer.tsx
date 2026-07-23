'use client'

import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

const NAV_LINKS = [
  { label: 'Início', href: '#hero' },
  { label: 'Experiência', href: '#experience' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Habilidades', href: '#skills' },
  { label: 'Contato', href: '#contact' },
]

const TECH_BADGES = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Golang',
  'Python',
  'Tailwind',
  'Prisma',
  'Postgres',
  'MongoDB',
  'Docker',
  'Vite',
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-zinc-900 bg-zinc-950/90 backdrop-blur-xl relative overflow-hidden pt-16 pb-12">
      {/* Glow background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-emerald-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-[1140px] mx-auto px-6 space-y-12 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Brand & Status */}
          <div className="space-y-4 md:col-span-1">
            <a
              href="#hero"
              className="text-2xl font-bold tracking-tight text-white hover:text-emerald-400 transition-colors inline-block"
            >
              Lucas Ribeiro<span className="text-emerald-400">.</span>
            </a>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Desenvolvedor Full Stack criando aplicações web modernas, escaláveis e de alto desempenho com foco em UI/UX refinado.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              Navegação
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-xs sm:text-sm font-medium transition-colors inline-block duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Stack / Techs */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              Tecnologias
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {TECH_BADGES.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-400 text-xs font-medium hover:text-emerald-400 hover:border-emerald-500/30 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Column 4: Social Connections */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
              Conecte-se
            </h4>
            <div className="space-y-2">
              <a
                href="https://github.com/lucasadsr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-xl bg-zinc-900/70 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-emerald-500/40 hover:bg-zinc-900 transition-all text-xs font-medium group"
              >
                <div className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300 group-hover:text-emerald-400 transition-colors">
                  <GithubIcon size={16} />
                </div>
                <span>GitHub</span>
              </a>

              <a
                href="https://www.linkedin.com/in/lucasadsr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-2 rounded-xl bg-zinc-900/70 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-emerald-500/40 hover:bg-zinc-900 transition-all text-xs font-medium group"
              >
                <div className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300 group-hover:text-emerald-400 transition-colors">
                  <LinkedinIcon size={16} />
                </div>
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:lucasaraujodsr@gmail.com"
                className="flex items-center gap-3 p-2 rounded-xl bg-zinc-900/70 border border-zinc-800/80 text-zinc-300 hover:text-white hover:border-emerald-500/40 hover:bg-zinc-900 transition-all text-xs font-medium group"
              >
                <div className="p-1.5 rounded-lg bg-zinc-800 text-zinc-300 group-hover:text-emerald-400 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="truncate">E-mail</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar Divider & Copyright */}
        <div className="pt-8 border-t border-zinc-900/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Lucas Ribeiro. Todos os direitos reservados.</p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 transition-all active:scale-95 cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  )
}
