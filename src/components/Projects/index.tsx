'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles, X, Maximize2 } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import type { Project } from '@/types/project'
import { GithubIcon } from '@/components/icons'
import { CardStack, type CardStackRef, type CardStackItem } from '@/components/CardStack'
import { useIsMobile } from '@/hooks/useIsMobile'
import { useLanguage } from '@/providers/LanguageContext'

type ProjectCardItem = Project & CardStackItem

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const cardStackRef = useRef<CardStackRef>(null)
  const isMobile = useIsMobile(768)
  const { t } = useLanguage()

  const cardItems: ProjectCardItem[] = t.projects.items.map((project) => ({
    ...project,
    title: project.name,
    imageSrc: project.image,
    href: project.deploy || project.repo,
  }))

  const nextProject = () => {
    cardStackRef.current?.next()
  }

  const prevProject = () => {
    cardStackRef.current?.prev()
  }

  // Handle ESC keyboard navigation to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }

    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'unset'
    }
  }, [selectedProject])

  return (
    <section id="projects" className="py-16 md:py-24 space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            {t.projects.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t.projects.sectionTitle}
          </h2>
          <p className="text-zinc-400 text-base max-w-xl">
            {t.projects.sectionDescription}
          </p>
        </div>

        {/* Navigation Controls & Status Indicator */}
        <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
          {/* Previous / Next Deck Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900/90 border border-zinc-800 shadow-md">
            <button
              onClick={prevProject}
              className="p-2.5 rounded-lg bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all active:scale-95 cursor-pointer"
              title="Anterior"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextProject}
              className="p-2.5 rounded-lg bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all active:scale-95 cursor-pointer"
              title="Próximo"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 font-medium backdrop-blur-sm shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{t.projects.deckHint}</span>
          </div>
        </div>
      </div>

      {/* CardStack Section */}
      <div className="relative py-2 select-none flex justify-center">
        <CardStack
          ref={cardStackRef}
          items={cardItems}
          cardWidth={isMobile ? 310 : 540}
          cardHeight={isMobile ? 530 : 440}
          overlap={isMobile ? 0.35 : 0.52}
          spreadDeg={isMobile ? 14 : 20}
          maxVisible={isMobile ? 3 : 5}
          perspectivePx={1100}
          depthPx={isMobile ? 50 : 100}
          activeLiftPx={18}
          springStiffness={380}
          springDamping={32}
          showDots={true}
          renderCard={(project) => (
            <div
              className="group relative flex flex-col justify-between h-full p-5 sm:p-5 bg-zinc-950/95 backdrop-blur-xl border border-zinc-800/80 rounded-3xl shadow-xl transition-all duration-300 hover:border-emerald-500/40 cursor-pointer"
              onClick={() => setSelectedProject(project as unknown as Project)}
            >
              {/* Project Image Preview */}
              <div className="relative w-full h-40 sm:h-44 overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/60 flex-shrink-0">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 620px"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  unoptimized={project.image.startsWith('http')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />

                {/* Expand Hint Overlay */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/85 backdrop-blur-md border border-zinc-800/80 text-xs text-zinc-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={12} className="text-emerald-400" />
                  {t.projects.viewDetails}
                </div>
              </div>

              {/* Project Details */}
              <div className="flex flex-col justify-between flex-grow mt-3 space-y-3">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="space-y-3 pt-1">
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-1.5 max-h-16 overflow-hidden">
                    {project.techs.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2.5 pt-1">
                    {project.repo && (
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 hover:border-zinc-700 text-xs font-medium transition-all shadow-md active:scale-95"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <GithubIcon /> {t.projects.repo}
                      </a>
                    )}
                    {project.deploy && (
                      <a
                        href={project.deploy}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 text-xs font-medium transition-all shadow-md shadow-emerald-600/20 active:scale-95"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} /> {t.projects.deploy}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        />
      </div>

      {/* GitHub Call to Action */}
      <div className="flex justify-center pt-2">
        <a
          className="flex items-center gap-2.5 bg-zinc-900/90 border border-zinc-800 text-zinc-200 hover:text-white hover:border-emerald-500/40 hover:bg-zinc-800 py-3 px-6 rounded-xl font-medium text-sm transition-all shadow-lg hover:shadow-emerald-500/10 active:scale-95"
          href="https://github.com/lucasadsr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon />
          {t.projects.repo} GitHub
        </a>
      </div>

      {/* Expanded Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              key={selectedProject.id}
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-zinc-800/90 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all z-10 hover:scale-110 active:scale-95 cursor-pointer"
                aria-label="Fechar modal"
              >
                <X size={20} />
              </button>

              {/* Modal Image */}
              <div className="relative w-full aspect-video sm:h-96 overflow-hidden rounded-2xl bg-zinc-900 border border-zinc-800/70 shadow-lg">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  fill
                  sizes="100vw"
                  className="object-cover object-top"
                  unoptimized={selectedProject.image.startsWith('http')}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* Modal Info */}
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {selectedProject.name}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {selectedProject.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-900">
                  {selectedProject.repo && (
                    <a
                      href={selectedProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-zinc-800 text-zinc-100 hover:text-white hover:bg-zinc-700 font-medium text-sm transition-all shadow-md active:scale-95"
                    >
                      <GithubIcon /> {t.projects.repo} GitHub
                    </a>
                  )}
                  {selectedProject.deploy && (
                    <a
                      href={selectedProject.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 font-medium text-sm transition-all shadow-md shadow-emerald-600/25 active:scale-95"
                    >
                      <ExternalLink size={16} /> {t.projects.deploy}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
