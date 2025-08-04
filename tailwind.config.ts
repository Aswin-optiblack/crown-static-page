import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C47FF',
        secondary: '#F9D923',
        crownPurple: '#AF89FF',
        darkText: '#1E1E1E',
      },
      fontFamily: {
        sans: ["var(--font-urbanist)", "sans-serif"],
        jakarta: ["var(--font-plus-jakarta)", "sans-serif"],
        bowlby: ["var(--font-bowlby)", "cursive"],
      },
    },
  },
  plugins: [],
}
export default config
