import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SITE_URL } from '@/constants/site'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Lucas Ribeiro | Engenheiro de Software Full Stack',
    template: '%s | Lucas Ribeiro',
  },
  description:
    'Engenheiro de Software Full Stack especializado em TypeScript, Next.js, React, React Native e Node.js. Desenvolvimento de interfaces web e mobile fluidas, escaláveis e de alta performance.',
  keywords: [
    'Lucas Ribeiro',
    'Engenheiro de Software',
    'Desenvolvedor Full Stack',
    'Desenvolvedor Front-end',
    'Desenvolvedor Back-end',
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Fastify',
    'React Native',
    'Tailwind CSS',
    'Portfólio',
    'Software Engineer',
    'Brasil',
  ],
  authors: [{ name: 'Lucas Ribeiro', url: 'https://github.com/lucasadsr' }],
  creator: 'Lucas Ribeiro',
  publisher: 'Lucas Ribeiro',
  category: 'technology',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: SITE_URL,
    title: 'Lucas Ribeiro | Engenheiro de Software Full Stack',
    description:
      'Engenheiro de Software Full Stack especializado em TypeScript, Next.js, React, React Native e Node.js.',
    siteName: 'Lucas Ribeiro | Portfólio',
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: 'Lucas Ribeiro | Engenheiro de Software Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucas Ribeiro | Engenheiro de Software Full Stack',
    description:
      'Engenheiro de Software Full Stack especializado em TypeScript, Next.js, React, React Native e Node.js.',
    images: ['/og-image.jpeg'],
    creator: '@lucasadsr',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'Lucas Ribeiro',
      jobTitle: 'Engenheiro de Software Full Stack',
      description:
        'Engenheiro de Software focado em aplicações web e mobile modernas com Next.js, React, React Native, TypeScript e Node.js.',
      url: SITE_URL,
      sameAs: [
        'https://github.com/lucasadsr',
        'https://linkedin.com/in/lucasadsr',
      ],
      knowsAbout: [
        'Software Engineering',
        'Full Stack Development',
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Node.js',
        'Fastify',
        'React Native',
        'Tailwind CSS',
        'PostgreSQL',
        'MongoDB',
        'Prisma',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Lucas Ribeiro | Portfólio',
      description:
        'Portfólio oficial de Lucas Ribeiro - Engenheiro de Software Full Stack.',
      publisher: {
        '@id': `${SITE_URL}/#person`,
      },
      inLanguage: 'pt-BR',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`${inter.className} scroll-smooth antialiased`} lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-black text-zinc-50">{children}</body>
    </html>
  )
}

