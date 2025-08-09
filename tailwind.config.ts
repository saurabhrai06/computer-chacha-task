import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#1C1C1C',
        'brand-light': '#F5F3F0', // An off-white for the main background
        'brand-accent': '#FFD15C', // The yellow/orange accent
        'brand-purple': '#C8B6F6', // The purple for glows/outlines
      },
    },
  },
  plugins: [],
}
export default config