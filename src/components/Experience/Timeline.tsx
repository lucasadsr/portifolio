'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, MapPin, Building2, CheckCircle2 } from 'lucide-react'
import { ExperienceItem } from '@/types/experience'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface TimelineProps {
  experiences: ExperienceItem[]
}

export function Timeline({ experiences }: TimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return

    const ctx = gsap.context(() => {
      // Timeline vertical line filling animation on scroll
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
            end: 'bottom 85%',
            scrub: 0.5,
          },
        }
      )

      // Individual item reveal animations
      itemRefs.current.forEach((item) => {
        if (!item) return
        gsap.fromTo(
          item,
          { opacity: 0, y: 40, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="relative pt-6 pb-4">
      {/* Track Line Background */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-zinc-800/90 rounded-full" />

      {/* Animated Filled Progress Line */}
      <div
        ref={lineRef}
        className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-emerald-400 via-teal-400 to-emerald-500 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.6)] origin-top"
      />

      {/* Experience Items */}
      <div className="space-y-12">
        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0

          return (
            <div
              key={exp.id}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className="relative flex flex-col md:flex-row items-start group"
            >
              {/* Timeline Dot Node */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 z-10 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-950 border-2 border-emerald-500/80 group-hover:border-emerald-400 group-hover:scale-110 shadow-[0_0_12px_rgba(16,185,129,0.3)] transition-all duration-300">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>

              {/* Card Container */}
              <div
                className={`ml-10 md:ml-0 w-[calc(100%-2.5rem)] ${
                  isEven
                    ? 'md:mr-auto md:w-[calc(50%-2.5rem)] md:text-left'
                    : 'md:ml-auto md:w-[calc(50%-2.5rem)] md:text-left'
                }`}
              >
                <div className="p-6 sm:p-7 rounded-2xl bg-zinc-900/70 border border-zinc-800/90 backdrop-blur-xl hover:border-emerald-500/40 hover:bg-zinc-900/90 transition-all duration-300 shadow-xl hover:shadow-emerald-500/10 group-hover:-translate-y-1">
                  {/* Date Badge & Location Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 text-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                    <div className="flex items-center gap-3 text-zinc-400">
                      <span className="inline-flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-zinc-500" />
                        {exp.type}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Role Title & Company */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-emerald-300 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-sm font-semibold text-emerald-400/90 mt-0.5 mb-3">
                    {exp.company}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="space-y-2 mb-5">
                    {exp.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-zinc-800/80">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-zinc-800/70 border border-zinc-700/50 text-zinc-300 hover:border-emerald-500/40 hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
