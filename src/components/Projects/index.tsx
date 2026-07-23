'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles, X, Maximize2 } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { PROJECTS } from '@/constants/projects'
import type { Project } from '@/types/project'
import { CardSwap, Card, type CardSwapRef } from '@/components/CardSwap/CardSwap'
import { GithubIcon } from '@/components/icons'
import { useIsMobile } from '@/hooks/useIsMobile'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [mobileIndex, setMobileIndex] = useState(0)
  const cardSwapRef = useRef<CardSwapRef>(null)
  const isMobile = useIsMobile(768)

  const currentMobileProject = PROJECTS[mobileIndex]

  const nextProject = () => {
    cardSwapRef.current?.swapNext()
    setMobileIndex((prev) => (prev + 1) % PROJECTS.length)
  }

  const prevProject = () => {
    cardSwapRef.current?.swapPrev()
    setMobileIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length)
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
    <section id="projects" className="py-24 space-y-12 overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
            <Sparkles className="w-4 h-4" />
            Portfólio
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Projetos em Destaque
          </h2>
          <p className="text-zinc-400 text-base max-w-xl">
            Conheça algumas das aplicações web e APIs que desenvolvi recentemente.
          </p>
        </div>

        {/* Navigation Controls & Status Indicator */}
        <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
          {/* Previous / Next Deck Buttons */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-900/90 border border-zinc-800 shadow-md">
            <button
              onClick={prevProject}
              className="p-2 rounded-lg bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all active:scale-95"
              title="Projeto Anterior"
              aria-label="Projeto Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextProject}
              className="p-2 rounded-lg bg-zinc-800/80 text-zinc-300 hover:text-white hover:bg-zinc-700 transition-all active:scale-95"
              title="Próximo Projeto"
              aria-label="Próximo Projeto"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 font-medium backdrop-blur-sm shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="hidden sm:inline">Passe o mouse para alinhar e pausar</span>
            <span className="sm:hidden">Toque no card para ver</span>
          </div>
        </div>
      </div>

      {/* Desktop 3D CardSwap Section */}
      {isMobile === false && (
        <div className="hidden md:flex relative py-8 justify-center items-center min-h-[500px] sm:min-h-[560px]">
          <CardSwap
            ref={cardSwapRef}
            width={680}
            height={480}
            cardDistance={35}
            verticalDistance={25}
            delay={4500}
            pauseOnHover={true}
            straightenOnHover={true}
            paused={Boolean(selectedProject)}
            skewAmount={4}
          >
            {PROJECTS.map((project, index) => (
              <Card
                key={project.id}
                onClick={() => setSelectedProject(project)}
                customClass="group cursor-pointer flex flex-col justify-between overflow-hidden bg-zinc-950/95 backdrop-blur-md md:backdrop-blur-2xl border border-zinc-800/80 p-5 sm:p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:border-emerald-500/50 transform-gpu"
              >
                {/* Project Image Preview */}
                <div className="relative w-full h-44 sm:h-52 overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/60 flex-shrink-0">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    unoptimized={project.image.startsWith('http')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />
                  
                  {/* Badge Number */}
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-xs text-emerald-400 font-mono font-medium shadow-md">
                    0{index + 1} / 0{PROJECTS.length}
                  </span>

                  {/* Expand Hint Overlay */}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 text-[11px] text-zinc-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 size={12} className="text-emerald-400" />
                    Expandir
                  </div>
                </div>

                {/* Project Details */}
                <div className="flex flex-col justify-between flex-grow mt-3 space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-1">
                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
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
                    <div className="flex items-center gap-3 pt-1">
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-800/90 text-zinc-200 hover:text-white hover:bg-zinc-700 text-xs sm:text-sm font-medium transition-all shadow-md active:scale-95"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <GithubIcon /> Repositório
                        </a>
                      )}
                      {project.deploy && (
                        <a
                          href={project.deploy}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 text-xs sm:text-sm font-medium transition-all shadow-md shadow-emerald-600/20 active:scale-95"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={14} /> Deploy
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      )}

      {/* Touch-Optimized Mobile Showcase (< md) */}
      <div className="md:hidden space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMobileProject.id}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -15 }}
            transition={{ duration: 0.2 }}
            className="group cursor-pointer flex flex-col justify-between overflow-hidden bg-zinc-950/95 backdrop-blur-md border border-zinc-800/80 p-5 rounded-2xl shadow-xl hover:border-emerald-500/50 transform-gpu"
            onClick={() => setSelectedProject(currentMobileProject)}
          >
            {/* Mobile Card Image Preview */}
            <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800/60 flex-shrink-0">
              <Image
                src={currentMobileProject.image}
                alt={currentMobileProject.name}
                fill
                sizes="100vw"
                className="object-cover object-top"
                unoptimized={currentMobileProject.image.startsWith('http')}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-80" />

              {/* Counter Badge */}
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-xs text-emerald-400 font-mono font-medium shadow-md">
                0{mobileIndex + 1} / 0{PROJECTS.length}
              </span>

              {/* Expand Hint Overlay */}
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 text-xs text-zinc-300 font-medium">
                <Maximize2 size={12} className="text-emerald-400" />
                Ver detalhes
              </div>
            </div>

            {/* Project Details */}
            <div className="flex flex-col justify-between flex-grow mt-4 space-y-4">
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                  {currentMobileProject.name}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
                  {currentMobileProject.description}
                </p>
              </div>

              <div className="space-y-3 pt-1">
                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5">
                  {currentMobileProject.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3 pt-1">
                  {currentMobileProject.repo && (
                    <a
                      href={currentMobileProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-zinc-800/90 text-zinc-200 hover:text-white text-xs font-medium transition-all shadow-md active:scale-95 border border-zinc-700/60"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon /> Repositório
                    </a>
                  )}
                  {currentMobileProject.deploy && (
                    <a
                      href={currentMobileProject.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 text-xs font-medium transition-all shadow-md shadow-emerald-600/20 active:scale-95"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} /> Deploy
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Mobile Pagination & Quick Jump Dots */}
        <div className="flex items-center justify-between px-2 pt-1">
          <div className="flex items-center gap-1.5">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setMobileIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  mobileIndex === i ? 'w-6 bg-emerald-400 shadow-sm shadow-emerald-500/50' : 'w-2 bg-zinc-800 hover:bg-zinc-700'
                }`}
                aria-label={`Ir para projeto ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={prevProject}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white active:scale-95 transition-all"
              aria-label="Projeto Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={nextProject}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white active:scale-95 transition-all"
              aria-label="Próximo Projeto"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
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
          Ver todos os projetos no GitHub
        </a>
      </div>

      {/* Expanded Modal Overlay with 3D Forward Motion & Navigation */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md [perspective:1200px]"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              key={selectedProject.id}
              initial={{ scale: 0.45, opacity: 0, y: 70, rotateX: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0, rotateX: 0 }}
              exit={{ scale: 0.45, opacity: 0, y: 50, rotateX: -12 }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 24,
                mass: 0.85
              }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-950 border border-zinc-800/90 rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(16,185,129,0.25)] space-y-6 transform-gpu"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all z-10 hover:scale-110 active:scale-95"
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
                      <GithubIcon /> Repositório GitHub
                    </a>
                  )}
                  {selectedProject.deploy && (
                    <a
                      href={selectedProject.deploy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-500 font-medium text-sm transition-all shadow-md shadow-emerald-600/25 active:scale-95"
                    >
                      <ExternalLink size={16} /> Visitar Deploy
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
