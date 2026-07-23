'use client'

import { type Project } from '@/types/project'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { type Variants, motion } from 'motion/react'
import { GithubIcon } from '@/components/icons'

interface ProjectProps {
  project: Project
}

const projectVariants: Variants = {
  offscreen: {
    opacity: 0,
    y: 30,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.21, 0.47, 0.32, 0.98],
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
      viewport={{ once: true, margin: '-50px' }}
      className="group relative flex flex-col lg:flex-row gap-8 p-6 rounded-2xl bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
    >
      {/* Project Image Preview */}
      <a
        href={deploy || repo}
        target="_blank"
        rel="noopener noreferrer"
        className="relative overflow-hidden rounded-xl lg:w-1/2 w-full aspect-video bg-zinc-950 border border-zinc-800/60 block group-hover:border-zinc-700/80 transition-colors"
      >
        <Image
          className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-500 ease-out"
          src={image}
          alt={name}
          width={556}
          height={316}
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>

      {/* Project Info */}
      <div className="flex flex-col justify-between lg:w-1/2 gap-6">
        <div className="space-y-3">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
            {name}
          </h3>
          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tech Badges */}
        <div className="space-y-6">
          <div className="flex gap-2 flex-wrap">
            {techs.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium shadow-sm shadow-emerald-500/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex gap-3 items-center">
            <a
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-800/90 text-zinc-200 hover:text-white hover:bg-zinc-700 text-sm font-medium transition-all shadow-md active:scale-95"
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon /> Repositório
            </a>
            {deploy && (
              <a
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 text-sm font-medium transition-all shadow-md shadow-emerald-600/20 active:scale-95"
                href={deploy}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={16} /> Deploy
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
