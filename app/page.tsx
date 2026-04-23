import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { FeaturedEvent } from '@/components/FeaturedEvent'
import { EventsCatalogPreview } from '@/components/EventsCatalogPreview'
import { AboutSection } from '@/components/AboutSection'
import { GallerySection } from '@/components/GallerySection'
import { ContactSection } from '@/components/ContactSection'
import { Footer } from '@/components/Footer'
import { siteConfig } from '@/data/site'
import { events } from '@/data/events'
import { getFeaturedEvent, getPreviewEvents } from '@/lib/events'

export default function HomePage() {
  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>Site works</h1>
      <p>Minimal test page</p>
    </main>
  )
}
