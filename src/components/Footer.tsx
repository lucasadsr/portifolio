import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <section className="bg-zinc-800 flex items-center justify-center gap-16 h-14 mobile:justify-evenly mobile:gap-0">
      <p className="text-zinc-100">
        Feito por{' '}
        <a
          className="italic underline-offset-2 underline hover:text-green-200"
          href="https://github.com/lucasadsr"
        >
          Lucas Ribeiro
        </a>
      </p>
      <div className="flex gap-5 items-center">
        <a
          href="https://github.com/lucasadsr"
          target="_blank"
          className="hover:text-green-200"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/lucasadsr/"
          target="_blank"
          className="hover:text-green-200"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:lucasaraujodesa@hotmail.com"
          target="_blank"
          className="hover:text-green-200"
        >
          <Mail />
        </a>
      </div>
    </section>
  )
}
