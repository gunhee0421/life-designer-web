import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

// Pretendard 폰트 설정
// const pretendard = localFont({
//   src: [
//     {
//       path: './fonts/Pretendard-Thin.woff2',
//       weight: '100',
//       style: 'normal',
//     },
//     {
//       path: './fonts/Pretendard-ExtraLight.woff2',
//       weight: '200',
//       style: 'normal',
//     },
//     {
//       path: './fonts/Pretendard-Light.woff2',
//       weight: '300',
//       style: 'normal',
//     },
//     {
//       path: './fonts/Pretendard-Regular.woff2',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: './fonts/Pretendard-Medium.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//     {
//       path: './fonts/Pretendard-SemiBold.woff2',
//       weight: '600',
//       style: 'normal',
//     },
//     {
//       path: './fonts/Pretendard-Bold.woff2',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: './fonts/Pretendard-ExtraBold.woff2',
//       weight: '800',
//       style: 'normal',
//     },
//     {
//       path: './fonts/Pretendard-Black.woff2',
//       weight: '900',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-pretendard', // Tailwind에서 사용할 커스텀 CSS 변수
// })

export const metadata: Metadata = {
  title: '라디: lifedesigner',
  description: '라디와 함께 루틴을 만들고 관리해보세요.',
  icons: {
    icon: '/Icon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <link rel="preload" href="/hero_section_copy.svg" as="image" />
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
