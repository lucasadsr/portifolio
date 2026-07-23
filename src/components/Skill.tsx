'use client'

import { type Skill } from '@/types/skill'
import * as Tooltip from '@radix-ui/react-tooltip'
import Image from 'next/image'
import { type Variants, motion } from 'motion/react'

interface SkillProps {
  skill: Skill
}

const skillVariants: Variants = {
  offscreen: {
    opacity: 0,
    scale: 0.85,
    y: 15,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

const MotionTooltipContent = motion.create(Tooltip.Content)

function ExpoIcon() {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-white"
      aria-label="Expo Logo"
      role="img"
    >
      <path d="M5 15l7-7 7 7" />
    </svg>
  )
}

export function Skill({ skill }: SkillProps) {
  const { src, title, stack } = skill

  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.div
            variants={skillVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            className="p-3 rounded-2xl bg-zinc-900/70 border border-zinc-800/80 hover:border-emerald-500/50 hover:bg-zinc-800/80 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 flex items-center justify-center cursor-pointer group"
          >
            {src === 'expo' ? (
              <div className="w-[52px] h-[52px] rounded-xl bg-zinc-950 border border-zinc-800/90 flex items-center justify-center shadow-md">
                <ExpoIcon />
              </div>
            ) : (
              <Image
                src={`https://skillicons.dev/icons?i=${src}`}
                alt={title}
                width={52}
                height={52}
                quality={90}
                className="group-hover:scale-105 transition-transform duration-300"
              />
            )}
          </motion.div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <MotionTooltipContent
            side="top"
            sideOffset={10}
            initial={{ opacity: 0, y: 8, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 450,
              damping: 25,
            }}
            className="z-50 flex items-center gap-2.5 rounded-xl bg-zinc-950/95 backdrop-blur-xl border border-zinc-800/90 px-3.5 py-2 shadow-2xl shadow-emerald-500/10 text-zinc-100"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-white text-xs">{title}</span>
            <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              {stack}
            </span>
            <Tooltip.Arrow className="fill-zinc-950" width={11} height={6} />
          </MotionTooltipContent>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
