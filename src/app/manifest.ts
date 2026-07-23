import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lucas Ribeiro | Engenheiro de Software Full Stack',
    short_name: 'Lucas Ribeiro',
    description:
      'Portfólio de Lucas Ribeiro, Engenheiro de Software Full Stack especializado em TypeScript, Next.js, React e Node.js.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#10b981',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
