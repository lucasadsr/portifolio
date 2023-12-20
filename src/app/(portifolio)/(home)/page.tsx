import { Download, Github, Linkedin, Mail } from 'lucide-react'

export default function Home() {
  return (
    <div className="max-h-full flex flex-col gap-8 mt-32">
      <div className="w-80 h-80 rounded-full bg-blue-800 absolute z-[-1] filter blur-5xl opacity-70" />
      <div className="flex flex-col gap-5">
        <div>
          <p>Olá, eu sou</p>
          <h1 className="text-6xl font-semibold">Lucas Ribeiro</h1>
        </div>
        <p className="text-2xl font-semibold text-green-400 ">
          {'>'} Desenvolvedor Full-Stack
        </p>
        <p className="text-zinc-400 max-w-[70%]">
          {'//'} Sou um desenvolvedor full stack especializado em TypeScript,
          utilizando{' '}
          <span className="text-blue-400 font-semibold">Next.js</span> e{' '}
          <span className="text-blue-400 font-semibold">Fastify</span> para
          construir aplicações web eficientes. Minha expertise em{' '}
          <span className="text-blue-400 font-semibold">Tailwind</span> e{' '}
          <span className="text-blue-400 font-semibold">Prisma</span>{' '}
          complementa a criação de interfaces modernas e a integração segura com
          bancos de dados{' '}
          <span className="text-blue-400 font-semibold">
            MySQL, PostgreSQL e MongoDB
          </span>
          .
        </p>
      </div>
      <div className="flex gap-5 items-center">
        <a
          href="https://github.com/lucasadsr"
          target="_blank"
          className="hover:translate-y-[-4px] transition-all"
        >
          <Github />
        </a>
        <a
          href="https://www.linkedin.com/in/lucasadsr/"
          target="_blank"
          className="hover:translate-y-[-4px] transition-all"
        >
          <Linkedin />
        </a>
        <a
          href="mailto:lucasaraujodesa@hotmail.com"
          target="_blank"
          className="hover:translate-y-[-4px] transition-all"
        >
          <Mail />
        </a>

        <a href="../../../../public/resume.pdf" download>
          <button className="bg-blue-700 h-10 p-2 flex gap-3 rounded font-semibold hover:bg-blue-600 transition-all">
            Baixar currículo <Download />{' '}
          </button>
        </a>
      </div>
    </div>
  )
}
