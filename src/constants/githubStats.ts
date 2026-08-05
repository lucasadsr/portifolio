import {
  FolderGit2,
  Star,
  Code2,
  Terminal,
  Calendar as CalendarIcon,
  GitPullRequest,
  type LucideIcon,
} from 'lucide-react'
import type { GitHubStats } from '@/types/github'
import type { Dictionary } from '@/types/language'

export interface StatCardItem {
  id: string
  icon: LucideIcon
  value: string | number
  label: string
  sublabel: string
  color: string
  borderColor: string
  iconColor: string
}

export function getStatCards(
  stats: GitHubStats | null,
  t: Dictionary,
): StatCardItem[] {
  return [
    {
      id: 'public-repos',
      icon: FolderGit2,
      value: stats ? stats.publicRepos : 0,
      label: t.githubStats.publicRepos,
      sublabel: t.githubStats.publicReposSub,
      color: 'from-emerald-500/20 to-teal-500/5',
      borderColor: 'group-hover:border-emerald-500/40',
      iconColor: 'text-emerald-400',
    },
    {
      id: 'total-stars',
      icon: Star,
      value: stats ? stats.totalStars : 0,
      label: t.githubStats.totalStars,
      sublabel: t.githubStats.totalStarsSub,
      color: 'from-amber-500/20 to-yellow-500/5',
      borderColor: 'group-hover:border-amber-500/40',
      iconColor: 'text-amber-400',
    },
    {
      id: 'pittaya-stars',
      icon: Code2,
      value: stats ? stats.pittayaStars : 0,
      label: t.githubStats.pittayaStars,
      sublabel: t.githubStats.pittayaStarsSub,
      color: 'from-purple-500/20 to-pink-500/5',
      borderColor: 'group-hover:border-purple-500/40',
      iconColor: 'text-purple-400',
    },
    {
      id: 'top-language',
      icon: Terminal,
      value: stats?.topLanguage || 'TypeScript',
      label: t.githubStats.topLanguage,
      sublabel: t.githubStats.topLanguageSub,
      color: 'from-blue-500/20 to-cyan-500/5',
      borderColor: 'group-hover:border-blue-500/40',
      iconColor: 'text-blue-400',
    },
    {
      id: 'years-active',
      icon: CalendarIcon,
      value: stats
        ? `${stats.yearsActive}+ ${t.githubStats.yearsText}`
        : `0 ${t.githubStats.yearsText}`,
      label: t.githubStats.yearsActive,
      sublabel: t.githubStats.yearsActiveSub,
      color: 'from-teal-500/20 to-emerald-500/5',
      borderColor: 'group-hover:border-teal-500/40',
      iconColor: 'text-teal-400',
    },
    {
      id: 'total-prs',
      icon: GitPullRequest,
      value: stats ? `${stats.totalPRs}` : '0',
      label: t.githubStats.totalPRs,
      sublabel: t.githubStats.totalPRsSub,
      color: 'from-indigo-500/20 to-violet-500/5',
      borderColor: 'group-hover:border-indigo-500/40',
      iconColor: 'text-indigo-400',
    },
  ]
}
