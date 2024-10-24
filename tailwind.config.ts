import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-pretendard)', 'sans-serif'],
        notoSans: ['NotoSansKR', 'sans-serif'],
      },
      colors: {
        primary: '#1777E9',
        textPrimary: '#383A42',
        textSecondary: '#595959',
        textSub: '#909090',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gray: '#F9FAFB',
      },
    },
  },
  plugins: [],
}
export default config
