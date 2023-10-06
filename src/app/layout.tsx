import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ArenLiore.com',
  description: 'A furry tiger boy who likes to code.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
