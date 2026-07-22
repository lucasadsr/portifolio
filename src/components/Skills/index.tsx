import { Skill } from '@/components/Skill'
import skills from './data.json'

export default function Skills() {
  return (
    <section id="skills" className="mt-16 mb-4 pt-24 max-sm:pt-16">
      <p className="text-6xl text-green-400 font-semibold text-center pb-24 max-sm:text-4xl max-sm:pb-12">
        Habilidades
      </p>

      <div className="flex justify-around items-start max-sm:flex-col max-sm:gap-8">
        <div className="h-fit">
          <p className="text-6xl text-green-400 font-semibold mb-8 text-center max-sm:text-3xl max-sm:mb-4">
            Front-End
          </p>
          <div className="flex justify-center flex-wrap gap-4 w-[416px] max-sm:w-full">
            {skills.map((skill) => {
              return skill.stack === 'front-end' ? (
                <Skill key={skill.id} skill={skill} />
              ) : null
            })}
          </div>
        </div>

        <div className="h-fit">
          <p className="text-6xl text-green-400 font-semibold mb-8 text-center max-sm:text-3xl max-sm:mb-4">
            Back-End
          </p>
          <div className="flex justify-center flex-wrap gap-4 w-[416px] max-sm:w-full">
            {skills.map((skill) => {
              return skill.stack === 'back-end' ? (
                <Skill key={skill.id} skill={skill} />
              ) : null
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
