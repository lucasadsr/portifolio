import Image from 'next/image'
import ArrowImage from '@/../public/arrow-ornament.png'
import projects from './data.json'
import { Project } from '@/components/Project'
import { GithubIcon } from '@/components/icons'

export default function Projects() {
  return (
    <section id="projects" className="pt-24 max-sm:pt-16">
      <div className="flex">
        <p className="text-6xl text-green-400 font-semibold w-[400px] leading-tight max-sm:max-w-screen max-sm:text-4xl max-sm:text-center max-sm:mb-12">
          Projetos que já fiz
        </p>
        <Image
          src={ArrowImage}
          alt="Arrow pointing to my projects"
          className="max-sm:hidden"
        />
      </div>

      <div className="flex flex-col gap-16">
        {projects.map((project) => {
          return <Project key={project.id} project={project} />
        })}
      </div>

      <a
        className="w-fit mx-auto my-8 flex items-center gap-2 bg-green-700 py-2 px-4 rounded-md hover:bg-green-600 transition-all"
        href="https://github.com/lucasadsr"
        target="_blank"
      >
        <GithubIcon />
        Ver todos os projetos
      </a>
    </section>
  )
}
