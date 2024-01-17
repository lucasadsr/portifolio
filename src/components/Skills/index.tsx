import { Skill } from '@/components/Skill'
import skills from './data.json'

export default function Skills() {
  return (
    <section id="skills" className="mt-16 mb-4 pt-24 mobile:pt-16">
      <p className="text-6xl text-green-400 font-semibold text-center pb-24 mobile:text-4xl mobile:pb-12">
        Habilidades
      </p>

      <div className="flex justify-around items-start mobile:flex-col mobile:gap-8">
        <div className="h-fit">
          <p className="text-6xl text-green-400 font-semibold mb-8 text-center mobile:text-3xl mobile:mb-4">
            Front-End
          </p>
          <div className="flex justify-center flex-wrap gap-4 w-[416px] mobile:w-full">
            {skills.map((skill) => {
              return skill.stack === 'front-end' ? (
                <Skill key={skill.id} skill={skill} />
              ) : null
            })}
          </div>
        </div>

        <div className="h-fit">
          <p className="text-6xl text-green-400 font-semibold mb-8 text-center mobile:text-3xl mobile:mb-4">
            Back-End
          </p>
          <div className="flex justify-center flex-wrap gap-4 w-[416px] mobile:w-full">
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
