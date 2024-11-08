import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx,css}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
        notoSans: ['NotoSansKR', 'sans-serif'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
      },
      colors: {
        primary: '#1777E9',
        textPrimary: '#383A42',
        textSecondary: '#595959',
        textSub: '#909090',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        gray: '#F9FAFB',
        backgroundGray: '#f4f4f4',
      },
      boxShadow: {
        cardMobile: '0px 4px 4px 0px rgb(0,0,0,0.25)',
        cardWeb: '0px 8px 8px 0px rgb(0,0,0,0.25)',
      },
      keyframes: {
        fadein: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' }, // 시작 위치와 투명도
          '100%': { transform: 'translateY(0)', opacity: '1' }, // 끝 위치와 투명도
        },
      },
      animation: {
        fadeIn: 'fadein 1s ease-in-out',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
export default config
