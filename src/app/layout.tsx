import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: {
    default: 'ZoomClone — HD Video Meetings, Reimagined',
    template: '%s | ZoomClone',
  },
  description:
    'Crystal-clear HD video conferencing for teams of every size. Start your free meeting in seconds — no downloads required.',
  keywords: ['video meetings', 'video conferencing', 'online meetings', 'HD video calls'],
  openGraph: {
    title: 'ZoomClone — HD Video Meetings, Reimagined',
    description: 'Crystal-clear HD video conferencing for teams of every size.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
