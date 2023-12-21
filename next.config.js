/** @type {import('next').NextConfig} */
const nextConfig = {
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

module.exports = nextConfig
