'use client'

import { ChevronDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { motion } from 'motion/react'
import dynamic from 'next/dynamic'

import { useIsMobile } from '@/hooks/useIsMobile'
import { useLanguage } from '@/providers/LanguageContext'

const FaultyTerminal = dynamic(
  () => import('@/components/FaultyTerminal/FaultyTerminal'),
  { ssr: false },
)

export function Hero() {
  const isMobile = useIsMobile(768)
  const { t } = useLanguage()

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
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium w-fit shadow-sm shadow-emerald-500/10 transform-gpu [will-change:transform,opacity]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          {t.hero.statusBadge}
        </motion.div>

        {/* Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: isMobile ? 0.05 : 0.1, ease: 'easeOut' }}
          className="space-y-2 transform-gpu [will-change:transform,opacity]"
        >
          <p className="text-zinc-400 text-lg font-medium">{t.hero.greeting}</p>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight text-white">
            {t.hero.name}
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: isMobile ? 0.1 : 0.2, ease: 'easeOut' }}
          className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent transform-gpu [will-change:transform,opacity]"
        >
          {t.hero.role}
        </motion.h2>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: isMobile ? 0.15 : 0.3, ease: 'easeOut' }}
          className="text-zinc-300 leading-relaxed text-base sm:text-lg max-w-2xl space-y-2.5 transform-gpu [will-change:transform,opacity]"
        >
          <p>
            {t.hero.bioLine1Part1}
            <span className="text-emerald-400 font-semibold">{t.hero.bioLine1Highlight1}</span>
            {t.hero.bioLine1Part2}
            <span className="text-emerald-400 font-semibold">{t.hero.bioLine1Highlight2}</span>
            {t.hero.bioLine1Part3}
            <span className="text-emerald-400 font-semibold">{t.hero.bioLine1Highlight3}</span>
            {t.hero.bioLine1Part4}
            <span className="text-emerald-400 font-semibold">{t.hero.bioLine1Highlight4}</span>
            {t.hero.bioLine1Part5}
          </p>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.hero.bioLine2}
          </p>
        </motion.div>

        {/* Actions & Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: isMobile ? 0.2 : 0.4, ease: 'easeOut' }}
          className="flex flex-wrap gap-4 items-center pt-2 transform-gpu [will-change:transform,opacity]"
        >
          <a
            href="https://github.com/lucasadsr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-200 hover:text-white hover:border-emerald-500/40 hover:bg-zinc-800/80 hover:-translate-y-0.5 transition-all shadow-lg shadow-black/40 hover:shadow-emerald-500/10 font-medium text-sm"
          >
            <GithubIcon size={20} /> {t.hero.github}
          </a>
          <a
            href="https://www.linkedin.com/in/lucasadsr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-200 hover:text-white hover:border-emerald-500/40 hover:bg-zinc-800/80 hover:-translate-y-0.5 transition-all shadow-lg shadow-black/40 hover:shadow-emerald-500/10 font-medium text-sm"
          >
            <LinkedinIcon size={20} /> {t.hero.linkedin}
          </a>
          <a
            href="mailto:lucasaraujodsr@gmail.com"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-200 hover:text-white hover:border-emerald-500/40 hover:bg-zinc-800/80 hover:-translate-y-0.5 transition-all shadow-lg shadow-black/40 hover:shadow-emerald-500/10 font-medium text-sm"
          >
            <Mail size={20} /> {t.hero.email}
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Arrow */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: isMobile ? 0.3 : 0.6 }}
        href="#experience"
        aria-label={t.hero.ariaScroll}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-2.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/40 hover:bg-zinc-800 transition-all animate-bounce transform-gpu"
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  )
}
