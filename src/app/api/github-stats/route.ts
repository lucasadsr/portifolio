import { NextResponse } from 'next/server'
import type { GitHubStats } from '@/types/github'

export const revalidate = 3600 // Cache for 1 hour

const EMPTY_STATS: GitHubStats = {
  publicRepos: 0,
  totalStars: 0,
  pittayaStars: 0,
  topLanguage: 'TypeScript',
  yearsActive: 0,
  totalPRs: 0,
  updatedAt: new Date().toISOString(),
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN
  const headers: HeadersInit = {
    'User-Agent': 'LucasRibeiro-Portfolio-App',
    Accept: 'application/vnd.github.v3+json',
    ...(token ? { Authorization: `token ${token}` } : {}),
  }

  try {
    const userRes = await fetch('https://api.github.com/users/lucasadsr', {
      headers,
      next: { revalidate: 3600 },
    })

    if (!userRes.ok) {
      console.warn('GitHub API User fetch warning:', userRes.status)
      return NextResponse.json(EMPTY_STATS)
    }

    const userData = await userRes.json()

    const createdYear = userData.created_at ? new Date(userData.created_at).getFullYear() : 0
    const yearsActive = createdYear > 0 ? Math.max(0, new Date().getFullYear() - createdYear) : 0

    const reposRes = await fetch('https://api.github.com/users/lucasadsr/repos?per_page=100&sort=updated', {
      headers,
      next: { revalidate: 3600 },
    })

    const reposData = reposRes.ok ? await reposRes.json() : []
    const ownRepos = Array.isArray(reposData) ? reposData.filter((repo: { fork?: boolean }) => !repo.fork) : []

    const totalStars = ownRepos.reduce(
      (acc: number, repo: { stargazers_count?: number }) => acc + (repo.stargazers_count || 0),
      0,
    )

    const languageCounts: Record<string, number> = ownRepos.reduce(
      (acc: Record<string, number>, repo: { language?: string }) => {
        if (repo.language) {
          acc[repo.language] = (acc[repo.language] || 0) + 1
        }
        return acc
      },
      {},
    )

    const languageEntries = Object.entries(languageCounts)
    const topLanguageEntry = languageEntries.reduce<{ lang: string; count: number }>(
      (best, [lang, count]) => (count > best.count ? { lang, count } : best),
      { lang: 'TypeScript', count: 0 },
    )

    const pittayaOrgRes = await fetch('https://api.github.com/orgs/pittaya-ui/repos?per_page=100', {
      headers,
      next: { revalidate: 3600 },
    })

    const pittayaReposData = pittayaOrgRes.ok ? await pittayaOrgRes.json() : []
    const pittayaStars = Array.isArray(pittayaReposData)
      ? pittayaReposData.reduce((acc: number, repo: { stargazers_count?: number }) => acc + (repo.stargazers_count || 0), 0)
      : 0

    const prsRes = await fetch('https://api.github.com/search/issues?q=author:lucasadsr+type:pr', {
      headers,
      next: { revalidate: 3600 },
    })

    const prsData = prsRes.ok ? await prsRes.json() : null
    const totalPRs = prsData?.total_count ?? 0

    const stats: GitHubStats = {
      publicRepos: userData.public_repos ?? 0,
      totalStars,
      pittayaStars,
      topLanguage: topLanguageEntry.lang,
      yearsActive,
      totalPRs,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json(stats, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('GitHub API error:', error)
    return NextResponse.json(EMPTY_STATS)
  }
}
