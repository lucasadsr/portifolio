'use client'

import { type Project } from '@/types/project'
import { Globe } from 'lucide-react'
import Image from 'next/image'
import { type Variants, motion } from 'motion/react'
import { GithubIcon } from '@/components/icons'

interface ProjectProps {
  project: Project
}

const projectVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 20,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.2,
    },
  },
}

export function Project({ project }: ProjectProps) {
  const { name, description, techs, image, repo, deploy } = project

  return (
    <motion.div
      variants={projectVariants}
      initial="offscreen"
      whileInView="onscreen"
      className="flex gap-8 max-sm:flex-col max-sm:w-full max-sm:gap-3"
    >
      <a
        href={repo}
        target="_blank"
        className="rounded-md min-w-[556px] h-fit hover:shadow-project transition-all"
      >
        <Image
          className="rounded-md max-sm:w-[300px]"
          src={image}
          alt=""
          width={556}
          height={316}
          quality={100}
        />
      </a>
      <div className="flex flex-col gap-4">
        <p className="text-5xl font-semibold text-white max-sm:text-4xl">
          {name}
        </p>
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
            <GithubIcon /> Repositório
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
    </motion.div>
  )
}
