import { Inter, Montserrat } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import './globals.css'
import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: {
    default: 'Elm Recovery | Sober Living Housing in San Diego',
    template: '%s | Elm Recovery',
  },
  description: 'Supportive sober living housing in San Diego, California. Elm Recovery provides a safe environment for individuals on their recovery journey.',
  keywords: ['sober living', 'recovery housing', 'San Diego', 'addiction recovery', 'supportive housing'],
  openGraph: {
    title: 'Elm Recovery | Sober Living Housing in San Diego',
    description: 'Supportive sober living housing in San Diego, California. Elm Recovery provides a safe environment for individuals on their recovery journey.',
    url: 'https://elmrecovery.com',
    siteName: 'Elm Recovery',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994',
        width: 1200,
        height: 630,
        alt: 'Elm Recovery Housing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col bg-slate-50">
        <Toaster position="top-center" />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
