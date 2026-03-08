import type { Metadata } from 'next'

import Layout from '@/components/Layout'

import '@/styles/globals.css'
import '@/styles/themes.css'

export const metadata: Metadata = {
  title: {
    default: 'Ofiare Khoko | Portfolio',
    template: 'Ofiare Khoko | %s',
  },
  description:
    "Ofiare Khoko is an avid full stack web developer building websites and applications you'd love to use",
  keywords: [
    'ofiare khoko',
    'ofiare',
    'khoko',
    'web developer portfolio',
    'wilpowa web developer',
    'wilpowa developer',
    'mern stack',
    'ofiare khoko portfolio',
    'vscode-portfolio',
  ],
  openGraph: {
    title: "Ofiare Khoko's Portfolio",
    description: "A full-stack developer building websites that you'd like to use.",
    images: ['https://imgur.com/4zi5KkQ.png'],
    url: 'https://vscode-portfolio.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const themeScript = `
  (function() {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  })();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
