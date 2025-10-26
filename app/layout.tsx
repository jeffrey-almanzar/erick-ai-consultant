import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Eric Aragundi - AI Consulting Backed by Research and Real-World Insight',
  description: 'AI Consulting & Data Science Research by Eric Aragundi. Helping businesses leverage Data Science, Machine Learning, and Artificial Intelligence for better decisions. Bringing academic rigor to real-world AI solutions.',
  keywords: [
    'AI Consulting',
    'Data Science',
    'Machine Learning',
    'Artificial Intelligence',
    'Research',
    'Eric Aragundi',
    'AI Implementation',
    'Data Analysis',
    'AI Strategy',
    'Machine Learning Consulting'
  ],
  authors: [{ name: 'Eric Aragundi' }],
  creator: 'Eric Aragundi',
  publisher: 'Eric Aragundi',
  icons: {
    icon: [
      { url: 'logo2.png', sizes: '32x32', type: 'image/png' },
      { url: 'logo2.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: 'logo2.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: 'logo2.png', sizes: '192x192', type: 'image/png' },
      { url: 'logo2.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  // openGraph: {
  //   type: 'website',
  //   locale: 'en_US',
  //   url: 'https://ericaragundi.com',
  //   title: 'Eric Aragundi - AI Consulting Backed by Research and Real-World Insight',
  //   description: 'AI Consulting & Data Science Research by Eric Aragundi. Helping businesses leverage Data Science, Machine Learning, and Artificial Intelligence for better decisions.',
  //   siteName: 'Eric Aragundi AI Consulting',
  //   images: [
  //     {
  //       url: 'hero.png',
  //       width: 1200,
  //       height: 630,
  //       alt: 'Eric Aragundi - AI Research Consultant',
  //     },
  //   ],
  // },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="logo2.png" type="image/png" />
        <link rel="shortcut icon" href="logo2.png" type="image/png" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
