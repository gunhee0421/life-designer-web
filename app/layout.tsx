import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

export const metadata: Metadata = {
  title: '나만의 라이프디자이너: 라디',
  description: '라디와 함께 더 나은 삶을 디자인하세요!',
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
      <head>
        <meta
          name="google-site-verification"
          content="73RKaY0rvpuflIV28yjSJ3_o3TTc3T_nSkNi5u4p-JA"
        />
      </head>
      <body className={`bg-white font-sans text-black antialiased`}>
        {children}
      </body>
    </html>
  )
}
