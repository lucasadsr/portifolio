'use client'

import { Skill } from '@/types/skill'
import * as Tooltip from '@radix-ui/react-tooltip'
import Image from 'next/image'

interface SkillProps {
  skill: Skill
}

export function Skill({ skill }: SkillProps) {
  const { src, title } = skill

  return (
    <Tooltip.Provider delayDuration={100}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <Image
            src={`https://skillicons.dev/icons?i=${src}`}
            alt={title}
            width={60}
            height={60}
            quality={100}
            className="hover:translate-y-[-6px] transition-all"
          />
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
