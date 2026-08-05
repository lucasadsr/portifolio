'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Calendar as CalendarIcon, ExternalLink, Activity } from 'lucide-react'
import { GitHubCalendar } from 'react-github-calendar'
import * as Tooltip from '@radix-ui/react-tooltip'
import { useLanguage } from '@/providers/LanguageContext'
import type { GitHubStats as GitHubStatsType } from '@/types/github'
import { GithubIcon } from '@/components/icons'
import { formatDate } from '@/utils/formatDate'
import { getStatCards } from '@/constants/githubStats'

export function GithubStats() {
  const { t, language } = useLanguage()
  const [stats, setStats] = useState<GitHubStatsType | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const response = await fetch('/api/github-stats')
        if (response.ok) {
          const data = await response.json()
          setStats(data)
        }
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [])

  const statCards = getStatCards(stats, t)

  const customTheme = {
    light: ['#18181b', '#064e3b', '#047857', '#10b981', '#34d399'],
    dark: ['#18181b', '#064e3b', '#047857', '#10b981', '#34d399'],
  }

  return (
    <section id="github-stats" className="py-20 relative overflow-hidden space-y-12">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
        <div className="space-y-2">
          <span className="text-emerald-400 text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
            <Activity className="w-4 h-4" />
            {t.githubStats.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {t.githubStats.sectionTitle}
          </h2>
          <p className="text-zinc-400 text-base max-w-xl">
            {t.githubStats.sectionDescription}
          </p>
        </div>

        {/* Live Indicator Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs text-zinc-300 font-medium backdrop-blur-md shadow-md self-start sm:self-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>{t.githubStats.liveIndicator}</span>
        </div>
      </div>

      {/* Stats Grid - 6 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {statCards.map((card, index) => {
          const Icon = card.icon

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`group relative p-6 rounded-2xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 shadow-xl transition-all duration-300 ${card.borderColor} hover:-translate-y-1 transform-gpu flex flex-col justify-between`}
            >
              {/* Background Card Gradient */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 ${card.iconColor}`}>
                    <Icon size={22} />
                  </div>

                  <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full bg-zinc-950/60 border border-zinc-800/60">
                    GitHub
                  </span>
                </div>

                <div>
                  {isLoading ? (
                    <div className="h-10 w-24 bg-zinc-800/80 animate-pulse rounded-lg my-1" />
                  ) : (
                    <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {card.value}
                    </span>
                  )}

                  <h3 className="text-base font-bold text-zinc-100 mt-1">
                    {card.label}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mt-0.5">
                    {card.sublabel}
                  </p>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* GitHub Contribution Calendar Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="p-6 sm:p-8 rounded-3xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800/80 shadow-2xl space-y-6 overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-emerald-400" />
              {t.githubStats.contributionTitle}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
              {t.githubStats.contributionSub}
            </p>
          </div>

          <a
            href="https://github.com/lucasadsr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <span>@lucasadsr</span>
            <ExternalLink size={14} />
          </a>
        </div>

        {/* Scrollable Calendar Wrapper */}
        <div className="overflow-x-auto pb-2 pt-2 scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent flex justify-center">
          <div className="min-w-[720px] text-zinc-300 font-sans">
            <Tooltip.Provider delayDuration={50}>
              <GitHubCalendar
                username="lucasadsr"
                blockSize={12}
                blockMargin={4}
                fontSize={12}
                theme={customTheme}
                labels={{
                  totalCount: t.githubStats.contributionTotalCount,
                }}
                renderBlock={(block, activity) => (
                  <Tooltip.Root key={activity.date}>
                    <Tooltip.Trigger asChild>{block}</Tooltip.Trigger>
                    <Tooltip.Portal>
                      <Tooltip.Content
                        side="top"
                        sideOffset={6}
                        className="z-50 rounded-xl bg-zinc-950/95 backdrop-blur-xl border border-zinc-800/90 px-3 py-1.5 shadow-2xl text-xs text-zinc-100 font-sans flex items-center gap-1.5"
                      >
                        <span className="font-semibold text-emerald-400">
                          {activity.count}
                        </span>
                        <span>
                          {activity.count === 1
                            ? t.githubStats.contributionSingle
                            : t.githubStats.contributionPlural}{' '}
                          {formatDate(activity.date, language)}
                        </span>
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                )}
              />
            </Tooltip.Provider>
          </div>
        </div>
      </motion.div>

      {/* Link to GitHub */}
      <div className="flex justify-center pt-2">
        <a
          href="https://github.com/lucasadsr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-200 hover:text-white hover:border-emerald-500/40 hover:bg-zinc-800 transition-all font-medium text-sm shadow-md hover:shadow-emerald-500/10 active:scale-95 group"
        >
          <GithubIcon size={18} />
          <span>{t.githubStats.visitProfile}</span>
          <ExternalLink size={14} className="text-zinc-500 group-hover:text-emerald-400 transition-colors" />
        </a>
      </div>
    </section>
  )
}
