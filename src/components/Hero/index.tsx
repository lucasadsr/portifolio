import { ArrowBigDown, Download, Github, Linkedin, Mail } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col gap-8 pt-60 mobile:w-screen mobile:pt-32"
    >
      <div className="w-80 h-80 rounded-full bg-blue-800 absolute z-[-1] filter blur-5xl opacity-70" />
      <div className="flex flex-col gap-5">
        <div>
          <p>Olá, eu sou</p>
          <h1 className="text-6xl font-semibold mobile:max-w-[230px]">
            Lucas Ribeiro
          </h1>
        </div>
        <h2 className="text-2xl font-semibold text-green-400 ">
          {'>'} Desenvolvedor Full-Stack
        </h2>
        <p className="text-zinc-400 max-w-[72%] mobile:max-w-[90%]">
          {'//'} Sou um desenvolvedor Full-Stack especializado em{' '}
          <span className="text-blue-400 font-semibold">TypeScript</span>,
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

        {/* <a href="../../../../public/resume.pdf" download>
          <button className="bg-blue-700 h-10 p-2 flex gap-3 rounded font-semibold hover:bg-blue-600 transition-all">
            Baixar currículo <Download />{' '}
          </button>
        </a> */}
      </div>

      <a
        href="#projects"
        className="absolute bottom-24 left-0 right-0 mx-auto w-fit animate-bounce mobile:bottom-1"
      >
        <ArrowBigDown
          size={36}
          color="#60A5F5"
          className="hover:fill-[#60A5F5]"
        />
      </a>
    </section>
  )
}
