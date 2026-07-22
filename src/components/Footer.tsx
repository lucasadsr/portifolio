import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/80 bg-zinc-950/60 backdrop-blur-md py-8">
      <div className="max-w-[1140px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-zinc-400 text-sm">
          Desenvolvido com foco e paixão por{' '}
          <a
            className="text-zinc-200 hover:text-emerald-400 font-medium transition-colors underline decoration-emerald-500/40 underline-offset-4"
            href="https://github.com/lucasadsr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lucas Ribeiro
          </a>
        </p>

        <div className="flex items-center gap-4 text-zinc-400">
          <a
            href="https://github.com/lucasadsr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil do GitHub"
            className="p-2 rounded-lg hover:text-emerald-400 hover:bg-zinc-800/60 transition-all"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/lucasadsr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil do LinkedIn"
            className="p-2 rounded-lg hover:text-emerald-400 hover:bg-zinc-800/60 transition-all"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:lucasaraujodesa@hotmail.com"
            rel="noopener noreferrer"
            aria-label="Enviar e-mail"
            className="p-2 rounded-lg hover:text-emerald-400 hover:bg-zinc-800/60 transition-all"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
