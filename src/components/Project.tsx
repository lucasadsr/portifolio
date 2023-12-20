import { Project } from '@/types/project'
import { Github, Globe } from 'lucide-react'
import Image from 'next/image'

interface ProjectProps {
  project: Project
}

export function Project({ project }: ProjectProps) {
  const { name, description, techs, image, repo, deploy } = project

  return (
    <div className="flex gap-8">
      <Image
        className="rounded-sm"
        src={image}
        alt=""
        width={556}
        height={316}
        quality={100}
      />
      <div className="flex flex-col gap-4">
        <p className="text-5xl font-semibold text-white">{name}</p>
        <p className="text-zinc-400">{description}</p>
        <div className="flex gap-4 flex-wrap">
          {techs.map((tech, i) => {
            return (
              <p className="py-1 px-4 bg-blue-500 rounded-md" key={i}>
                {tech}
              </p>
            )
          })}
        </div>
        <div className="flex gap-4 mt-1">
          <a
            className="flex items-center gap-2 bg-green-700 py-2 px-4 rounded-md hover:bg-green-600 transition-all"
            href={repo}
            target="_blank"
          >
            <Github /> Repositório
          </a>
          {deploy && (
            <a
              className="flex items-center gap-2 bg-green-700 py-2 px-4 rounded-md hover:bg-green-600 transition-all"
              href={deploy}
              target="_blank"
            >
              <Globe /> Deploy
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
