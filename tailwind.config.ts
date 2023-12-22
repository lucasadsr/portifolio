import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
      },
      blur: {
        '5xl': '168px',
      },
      boxShadow: {
        project: '0px 0px 25px 9px rgba(59, 130, 246, 0.3)',
      },
    },
  },
  plugins: [],
}
export default config
