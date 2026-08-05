import { NextResponse } from 'next/server'
import type { GitHubStats } from '@/types/github'

export const revalidate = 3600 // Cache for 1 hour

const FALLBACK_STATS: GitHubStats = {
  publicRepos: 18,
  totalStars: 28,
  followers: 12,
  pittayaStars: 15,
  topLanguage: 'TypeScript',
  updatedAt: new Date().toISOString(),
}

export async function GET() {
  const token = process.env.GITHUB_TOKEN
  const headers: HeadersInit = {
    'User-Agent': 'LucasRibeiro-Portfolio-App',
    Accept: 'application/vnd.github.v3+json',
  }

  if (token) {
    headers.Authorization = `token ${token}`
  }

  try {
    // 1. Fetch user profile
    const userRes = await fetch('https://api.github.com/users/lucasadsr', {
      headers,
      next: { revalidate: 3600 },
    })

    if (!userRes.ok) {
      console.warn('GitHub API User fetch warning:', userRes.status)
      return NextResponse.json(FALLBACK_STATS)
    }

    const userData = await userRes.json()

    // 2. Fetch user repositories to compute total stars & top language
    const reposRes = await fetch('https://api.github.com/users/lucasadsr/repos?per_page=100&sort=updated', {
      headers,
      next: { revalidate: 3600 },
    })

    let totalStars = 0
    let topLanguage = 'TypeScript'
    const languageCounts: Record<string, number> = {}

    if (reposRes.ok) {
      const reposData = await reposRes.json()
      if (Array.isArray(reposData)) {
        reposData.forEach((repo: { stargazers_count?: number; language?: string; fork?: boolean }) => {
          if (!repo.fork) {
            totalStars += repo.stargazers_count || 0
            if (repo.language) {
              languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1
            }
          }
        })

        // Find primary language
        let maxCount = 0
        Object.entries(languageCounts).forEach(([lang, count]) => {
          if (count > maxCount) {
            maxCount = count
            topLanguage = lang
          }
        })
      }
    }

    // 3. Fetch Pittaya UI Kit repo stats
    let pittayaStars = 0
    try {
      const pittayaRes = await fetch('https://api.github.com/repos/pittaya-ui/ui-kit', {
        headers,
        next: { revalidate: 3600 },
      })
      if (pittayaRes.ok) {
        const pittayaData = await pittayaRes.json()
        pittayaStars = pittayaData.stargazers_count || 0
      }
    } catch {
      pittayaStars = 10
    }

    const stats: GitHubStats = {
      publicRepos: userData.public_repos ?? FALLBACK_STATS.publicRepos,
      totalStars: totalStars || FALLBACK_STATS.totalStars,
      followers: userData.followers ?? FALLBACK_STATS.followers,
      pittayaStars: pittayaStars || FALLBACK_STATS.pittayaStars,
      topLanguage: topLanguage || FALLBACK_STATS.topLanguage,
      updatedAt: new Date().toISOString(),
    }

    return NextResponse.json(stats, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    })
  } catch (error) {
    console.error('GitHub API error:', error)
    return NextResponse.json(FALLBACK_STATS)
  }
}
