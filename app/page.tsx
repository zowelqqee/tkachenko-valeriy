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
  const featuredEvent = getFeaturedEvent(events)
  const previewEvents = getPreviewEvents(events, 3)

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero config={siteConfig} />
        {featuredEvent && <FeaturedEvent event={featuredEvent} />}
        <EventsCatalogPreview events={previewEvents} />
        <AboutSection config={siteConfig} />
        <GallerySection />
        <ContactSection config={siteConfig} />
      </main>
      <Footer />
    </>
  )
}
