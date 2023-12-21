import { Skill } from '@/components/Skill'
import skills from './data.json'
import { Metadata } from 'next'

export function generateMetadata(): Metadata {
  return {
    title: 'Habilidades',
  }
}

export default function Skills() {
  return (
    <div className="mt-16 mb-4 flex justify-around items-start">
      <div className="h-fit">
        <p className="text-6xl text-green-400 font-semibold mb-8 text-center">
          Front-End
        </p>
        <div className="flex justify-center flex-wrap gap-4 w-[416px]">
          {skills.map((skill) => {
            return skill.stack === 'front-end' ? (
              <Skill key={skill.id} skill={skill} />
            ) : null
          })}
        </div>
      </div>

      <div className="h-fit">
        <p className="text-6xl text-green-400 font-semibold mb-8 text-center">
          Back-End
        </p>
        <div className="flex justify-center flex-wrap gap-4 w-[416px]">
          {skills.map((skill) => {
            return skill.stack === 'back-end' ? (
              <Skill key={skill.id} skill={skill} />
            ) : null
          })}
        </div>
      </div>
    </div>
  )
}
