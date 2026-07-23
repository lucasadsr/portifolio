'use client'

import { ChevronDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { motion } from 'motion/react'
import dynamic from 'next/dynamic'

import { useIsMobile } from '@/hooks/useIsMobile'

const FaultyTerminal = dynamic(
  () => import('@/components/FaultyTerminal/FaultyTerminal'),
  { ssr: false },
)

export function Hero() {
  const isMobile = useIsMobile(768)

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* FaultyTerminal WebGL Background - Rendered only on Desktop for optimal mobile performance */}
      {isMobile === false && (
        <div className="absolute inset-0 -z-10 w-full h-full opacity-40 pointer-events-none">
          <FaultyTerminal
            scale={3}
            gridMul={[2, 1]}
            digitSize={1.9}
            timeScale={0.5}
            pause={false}
            scanlineIntensity={0.5}
            glitchAmount={1}
            flickerAmount={1}
            noiseAmp={1}
            chromaticAberration={0}
            dither={0}
            curvature={0.1}
            tint="#A7EF9E"
            mouseReact
            mouseStrength={0.5}
            pageLoadAnimation
            brightness={0.6}
          />
        </div>
      )}

      {/* Lightweight CSS Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-emerald-500/10 rounded-full blur-[80px] md:blur-[140px] pointer-events-none -z-10 transform-gpu" />
      <div className="absolute top-1/3 left-1/4 w-[240px] sm:w-[350px] h-[240px] sm:h-[350px] bg-cyan-500/10 rounded-full blur-[70px] md:blur-[120px] pointer-events-none -z-10 transform-gpu" />

      {/* Bottom Gradient Fade Mask for Seamless Transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none -z-10" />

      {/* Hero Content Container */}
      <div className="w-full max-w-[1140px] px-6 sm:px-8 pt-28 pb-16 flex flex-col justify-center gap-6">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium w-fit shadow-sm shadow-emerald-500/10"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Aberto a conexões & networking
        </motion.div>

        {/* Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-2"
        >
          <p className="text-zinc-400 text-lg font-medium">Olá, eu sou</p>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white">
            Lucas Ribeiro
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent"
        >
          Engenheiro de Software
        </motion.h2>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-zinc-300 leading-relaxed text-base sm:text-lg max-w-2xl space-y-2.5"
        >
          <p>
            Engenheiro de Software focado na criação de aplicações{' '}
            <span className="text-emerald-400 font-semibold">web e mobile</span>{' '}
            modernas com{' '}
            <span className="text-emerald-400 font-semibold">Next.js</span>,{' '}
            <span className="text-emerald-400 font-semibold">React</span>,{' '}
            <span className="text-emerald-400 font-semibold">React Native</span> e{' '}
            <span className="text-emerald-400 font-semibold">TypeScript</span>.
          </p>
          <p className="text-zinc-400 text-sm sm:text-base">
            Atualmente atuando no setor fintech/precatórios com foco em interfaces fluidas, gerenciamento de estado assíncrono e arquitetura escalável.
          </p>
        </motion.div>

        {/* Actions & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 items-center pt-2"
        >
          <a
            href="https://github.com/lucasadsr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-200 hover:text-white hover:border-emerald-500/40 hover:bg-zinc-800/80 hover:-translate-y-0.5 transition-all shadow-lg shadow-black/40 hover:shadow-emerald-500/10 font-medium text-sm"
          >
            <GithubIcon size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/lucasadsr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-200 hover:text-white hover:border-emerald-500/40 hover:bg-zinc-800/80 hover:-translate-y-0.5 transition-all shadow-lg shadow-black/40 hover:shadow-emerald-500/10 font-medium text-sm"
          >
            <LinkedinIcon size={20} /> LinkedIn
          </a>
          <a
            href="mailto:lucasaraujodsr@gmail.com"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-200 hover:text-white hover:border-emerald-500/40 hover:bg-zinc-800/80 hover:-translate-y-0.5 transition-all shadow-lg shadow-black/40 hover:shadow-emerald-500/10 font-medium text-sm"
          >
            <Mail size={20} /> E-mail
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        href="#experience"
        aria-label="Rolar para histórico profissional"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 hover:bg-zinc-800 transition-all animate-bounce"
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  )
}
