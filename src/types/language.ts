export type Language = 'pt' | 'en'

export interface Dictionary {
  nav: {
    hero: string
    experience: string
    stats: string
    projects: string
    skills: string
    contact: string
  }
  hero: {
    statusBadge: string
    greeting: string
    name: string
    role: string
    bioLine1Part1: string
    bioLine1Highlight1: string
    bioLine1Part2: string
    bioLine1Highlight2: string
    bioLine1Part3: string
    bioLine1Highlight3: string
    bioLine1Part4: string
    bioLine1Highlight4: string
    bioLine1Part5: string
    bioLine2: string
    github: string
    linkedin: string
    email: string
    ariaScroll: string
  }
  experience: {
    sectionBadge: string
    sectionTitle: string
    sectionDescription: string
    items: Array<{
      id: string
      role: string
      company: string
      type: string
      location: string
      period: string
      description: string
      highlights: string[]
      skills: string[]
    }>
  }
  githubStats: {
    sectionBadge: string
    sectionTitle: string
    sectionDescription: string
    liveIndicator: string
    publicRepos: string
    publicReposSub: string
    totalStars: string
    totalStarsSub: string
    topLanguage: string
    topLanguageSub: string
    yearsActive: string
    yearsActiveSub: string
    totalPRs: string
    totalPRsSub: string
    pittayaStars: string
    pittayaStarsSub: string
    contributionTitle: string
    contributionSub: string
    visitProfile: string
  }
  projects: {
    sectionBadge: string
    sectionTitle: string
    sectionDescription: string
    deckHint: string
    viewDetails: string
    repo: string
    deploy: string
    items: Array<{
      id: number
      name: string
      description: string
      techs: string[]
      image: string
      repo?: string
      deploy?: string
    }>
  }
  skills: {
    sectionBadge: string
    sectionTitle: string
    sectionDescription: string
    stacks: {
      frontend: string
      backend: string
      devops: string
    }
  }
  contact: {
    sectionBadge: string
    sectionTitle: string
    sectionDescription: string
    form: {
      nameLabel: string
      namePlaceholder: string
      emailLabel: string
      emailPlaceholder: string
      messageLabel: string
      messagePlaceholder: string
      submitButton: string
      submittingButton: string
      successMessage: string
      errorMessage: string
    }
  }
  footer: {
    role: string
    rights: string
  }
}
