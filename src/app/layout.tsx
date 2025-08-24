import type { Metadata } from 'next'
import { Space_Grotesk, Inter, Caveat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'
import { Providers } from './providers'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Aurora N&N Business Solutions Inc. | Tax Services & Web Design in BC',
  description: 'Professional taxation services and modern web design for small businesses across Canada. Expert CRA guidance, GST/PST filing, and high-performance Next.js websites.',
  keywords: 'tax services BC, web design Canada, GST PST registration, Next.js development, small business tax, Vancouver tax services',
  authors: [{ name: 'Aurora N&N Business Solutions Inc.' }],
  creator: 'Aurora N&N Business Solutions Inc.',
  publisher: 'Aurora N&N Business Solutions Inc.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aurorabusiness.ca'),
  openGraph: {
    title: 'Aurora N&N Business Solutions Inc.',
    description: 'Professional taxation services and modern web design for small businesses across Canada.',
    url: 'https://aurorabusiness.ca',
    siteName: 'Aurora N&N Business Solutions Inc.',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aurora N&N Business Solutions Inc.',
    description: 'Professional taxation services and modern web design for small businesses across Canada.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${caveat.variable}`} suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          {children}
          <Analytics />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  )
}
