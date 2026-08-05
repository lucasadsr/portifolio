import { Dictionary } from '@/types/language'

export const en: Dictionary = {
  nav: {
    hero: 'Home',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    statusBadge: 'Open to work & networking',
    greeting: "Hello, I'm",
    name: 'Lucas Ribeiro',
    role: 'Software Engineer',
    bioLine1Part1: 'Software Engineer focused on building modern ',
    bioLine1Highlight1: 'web and mobile',
    bioLine1Part2: ' applications with ',
    bioLine1Highlight2: 'Next.js',
    bioLine1Part3: ', ',
    bioLine1Highlight3: 'React',
    bioLine1Part4: ', ',
    bioLine1Highlight4: 'React Native',
    bioLine1Part5: ', and TypeScript.',
    bioLine2:
      'Currently working in the fintech/court-ordered debt (precatórios) sector, building fluid interfaces, async state management, and scalable architecture.',
    github: 'GitHub',
    linkedin: 'LinkedIn',
    email: 'E-mail',
    ariaScroll: 'Scroll to experience section',
  },
  experience: {
    sectionBadge: 'Career History',
    sectionTitle: 'Journey & Experience',
    sectionDescription:
      'Explore my key roles in tech, projects developed, and skills refined throughout my career.',
    items: [
      {
        id: 'exp-1',
        role: 'Software Engineer (Front-end)',
        company: 'Ativos Precatórios',
        type: 'Full-time',
        location: 'Recife, PE • On-site',
        period: 'Jan 2025 — Present',
        description:
          'Development of the Celer platform, a complete ecosystem for management and strategic negotiation of court-ordered debt bonds. Focused on high performance, intuitive UI/UX, and scalable front-end architecture.',
        highlights: [
          'Building modern, responsive interfaces using Next.js, Tailwind CSS, and TypeScript',
          'Managing state and consuming asynchronous APIs with TanStack Query and Zustand',
          'Data validation with Zod and visual standardization using Shadcn UI components',
          'Continuous collaboration in agile teams to deliver high-impact features',
        ],
        skills: [
          'Next.js',
          'React',
          'TypeScript',
          'Tailwind CSS',
          'TanStack Query',
          'Zustand',
          'Zod',
          'Shadcn UI',
        ],
      },
      {
        id: 'exp-2',
        role: 'Software Engineer',
        company: 'Grupo Ser Educacional',
        type: 'Internship',
        location: 'Recife, PE • On-site',
        period: 'Mar 2024 — Jan 2025',
        description:
          'Development of web and mobile ecosystems targeting social impact and operational process automation, combining hands-on technical execution with team leadership.',
        highlights: [
          'Development of the Bem Família mobile app (+500 downloads and 5/5 star store rating)',
          'Implementation of Sinal Vermelho web app (a digital platform fighting violence against women)',
          'Building admin dashboards in Next.js, automating manual routines',
          'Technical leadership of 4 developers, organizing sprints and establishing code best practices',
        ],
        skills: [
          'React',
          'Next.js',
          'React Native',
          'Expo',
          'TypeScript',
          'Tailwind CSS',
          'Team Leadership',
        ],
      },
    ],
  },
  projects: {
    sectionBadge: 'Portfolio',
    sectionTitle: 'Featured Projects',
    sectionDescription:
      'Explore some of the web applications and APIs I have developed recently.',
    deckHint: 'Drag or use arrows to navigate',
    viewDetails: 'View details',
    repo: 'Repository',
    deploy: 'Live Deploy',
    items: [
      {
        id: 1,
        name: 'Pittaya UI kit',
        description:
          'A fully open-source React UI library built with TypeScript and Tailwind CSS. Fast, composable, and production-ready.',
        techs: ['Next.Js', 'TypeScript', 'Tailwind CSS', 'Shadcn/UI'],
        image: '/project-images/pittaya.webp',
        repo: 'https://github.com/pittaya-ui/ui-kit',
        deploy: 'https://ui.pittaya.org/',
      },
      {
        id: 2,
        name: 'Agrupe',
        description:
          'Modern web app for collaborative group event management. Allows users to create groups, manage members with role permissions, organize events on shared calendars, and view upcoming events.',
        techs: [
          'Next.Js',
          'TypeScript',
          'Tailwind CSS',
          'TanStack Query',
          'Supabase',
          'Vercel Cron Jobs',
          'GSAP',
          'Zod',
        ],
        image: '/project-images/agrupe.webp',
        deploy: 'https://www.agrupe.app/',
      },
      {
        id: 3,
        name: 'Bewear',
        description:
          'Full-featured e-commerce application offering a seamless and modern shopping experience. Allows users to browse products, manage cart items, process secure payments, and track orders.',
        techs: [
          'Next.Js',
          'TypeScript',
          'Tailwind CSS',
          'Drizzle ORM',
          'PostgreSQL',
          'Stripe',
          'Tanstack Query',
        ],
        image: '/project-images/bewear.webp',
        repo: 'https://github.com/lucasadsr/bewear',
        deploy: 'https://bewear-rouge.vercel.app/',
      },
      {
        id: 4,
        name: 'WeatherNow',
        description:
          'Modern cross-platform weather forecasting app built with Expo and React Native. Provides real-time weather updates, accurate 5-day forecasts, and intuitive favorite city management across iOS, Android, and web.',
        techs: [
          'Expo',
          'React Native',
          'TypeScript',
          'Tailwind CSS',
          'TanStack Query',
          'OpenWeatherMap API',
          'React Native Reanimated',
        ],
        image: '/project-images/weather.webp',
        repo: 'https://github.com/lucasadsr/WeatherNow',
      },
      {
        id: 5,
        name: 'Gopportunities',
        description:
          'A RESTful API for job vacancy management developed in Go. Supports all CRUD operations and includes automatically generated Swagger documentation.',
        techs: ['Go', 'Gin', 'GORM', 'SQLite', 'Swaggo'],
        image: '/project-images/gopportunities.webp',
        repo: 'https://github.com/lucasadsr/gopportunities',
      },
      {
        id: 6,
        name: 'Pittaya Theme',
        description:
          'VS Code and IDE extension featuring the Pittaya UI color theme.',
        techs: ['TypeScript', 'ts-node', 'VS Code Extension'],
        image: '/project-images/pittaya-theme.webp',
        repo: 'https://github.com/pittaya-ui/pittaya-theme',
        deploy: 'https://open-vsx.org/extension/pittaya-org/pittaya-theme',
      },
    ],
  },
  skills: {
    sectionBadge: 'Tech Stack',
    sectionTitle: 'Technologies & Tools',
    sectionDescription:
      'Languages, frameworks, libraries, and tools I use in my daily workflow.',
    stacks: {
      frontend: 'Front-end & Mobile',
      backend: 'Back-end & Databases',
      devops: 'DevOps & Tools',
    },
  },
  contact: {
    sectionBadge: 'Contact',
    sectionTitle: "Let's connect",
    sectionDescription:
      'Send a message to discuss technology, development opportunities, or networking.',
    form: {
      nameLabel: 'Name',
      namePlaceholder: 'Your full name',
      emailLabel: 'E-mail',
      emailPlaceholder: 'your.email@example.com',
      messageLabel: 'Message',
      messagePlaceholder: 'How can I help or what would you like to talk about?',
      submitButton: 'Send Message',
      submittingButton: 'Sending...',
      successMessage: 'Message sent successfully! I will reply soon.',
      errorMessage:
        'An error occurred while sending your message. Please try again later.',
    },
  },
  footer: {
    role: 'Full Stack Software Engineer',
    rights: 'All rights reserved.',
  },
}
