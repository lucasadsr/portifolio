'use client'

import { Skill } from '@/types/skill'
import * as Tooltip from '@radix-ui/react-tooltip'
import Image from 'next/image'
import { Variants, motion } from 'framer-motion'

interface SkillProps {
  skill: Skill
}

const skillVariants: Variants = {
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
      duration: 0.5,
      delay: 0.1,
    },
  },
}

export function Skill({ skill }: SkillProps) {
  const { src, title } = skill

  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.div
            variants={skillVariants}
            initial="offscreen"
            whileInView="onscreen"
          >
            <Image
              src={`https://skillicons.dev/icons?i=${src}`}
              alt={title}
              width={60}
              height={60}
              quality={100}
              className="hover:translate-y-[-6px] transition-all"
            />
          </motion.div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="bg-zinc-600 px-2 py-1 rounded-md font-semibold">
            <Tooltip.Arrow fill="rgb(82 82 91)" />
            {title}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
