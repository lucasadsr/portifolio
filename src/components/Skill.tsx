'use client'

import { Skill } from '@/types/skill'
import * as Tooltip from '@radix-ui/react-tooltip'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface SkillProps {
  skill: Skill
  delay: number
}

export function Skill({ skill, delay }: SkillProps) {
  const { src, title } = skill

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setIsVisible(true)
      },
      100 + delay * 70,
    )

    return () => clearTimeout(timeout)
  }, [])

  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
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
