'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { FolderGit2, Star, Users, Code2, ExternalLink, Activity } from 'lucide-react'
import { useLanguage } from '@/providers/LanguageContext'
import type { GitHubStats as GitHubStatsType } from '@/types/github'
import { GithubIcon } from '@/components/icons'

export function GithubStats() {
  const { t } = useLanguage()
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

  const statCards = [
    {
      id: 'public-repos',
      icon: FolderGit2,
      value: stats?.publicRepos ?? 18,
      label: t.githubStats.publicRepos,
      sublabel: t.githubStats.publicReposSub,
      color: 'from-emerald-500/20 to-teal-500/5',
      borderColor: 'group-hover:border-emerald-500/40',
      iconColor: 'text-emerald-400',
    },
    {
      id: 'total-stars',
      icon: Star,
      value: stats?.totalStars ?? 28,
      label: t.githubStats.totalStars,
      sublabel: t.githubStats.totalStarsSub,
      color: 'from-amber-500/20 to-yellow-500/5',
      borderColor: 'group-hover:border-amber-500/40',
      iconColor: 'text-amber-400',
    },
    {
      id: 'followers',
      icon: Users,
      value: stats?.followers ?? 12,
      label: t.githubStats.followers,
      sublabel: t.githubStats.followersSub,
      color: 'from-cyan-500/20 to-blue-500/5',
      borderColor: 'group-hover:border-cyan-500/40',
      iconColor: 'text-cyan-400',
    },
    {
      id: 'pittaya-stars',
      icon: Code2,
      value: stats?.pittayaStars ?? 15,
      label: t.githubStats.pittayaStars,
      sublabel: t.githubStats.pittayaStarsSub,
      color: 'from-purple-500/20 to-pink-500/5',
      borderColor: 'group-hover:border-purple-500/40',
      iconColor: 'text-purple-400',
    },
  ]

  return (
    <section id="github-stats" className="py-20 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="space-y-10">
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

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {statCards.map((card, index) => {
            const Icon = card.icon

            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
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
                      <div className="h-10 w-20 bg-zinc-800/80 animate-pulse rounded-lg my-1" />
                    ) : (
                      <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
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
      </div>
    </section>
  )
}
