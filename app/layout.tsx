import type { Metadata } from 'next'
import './globals.css'
import CosmicBadge from '@/components/CosmicBadge'

export const metadata: Metadata = {
  title: 'Digital Agency - Web Development, Design & Marketing',
  description: 'Professional digital agency offering web development, UI/UX design, and digital marketing services. Transform your online presence with our expert team.',
  keywords: 'digital agency, web development, UI/UX design, digital marketing, SEO',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}