import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')
const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './utils/*',
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ['var(--font-inter)'],
        Monserrat: ['var(--font-montserrat)'],
      },
      fontSize: {
        'placeholder-lg': '1.2rem', // Define a custom placeholder font size
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui()],
}
export default config
