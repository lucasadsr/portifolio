import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: 'github.com',
      },
      {
        hostname: 'skillicons.dev',
      },
    ],
  },
}

export default nextConfig
