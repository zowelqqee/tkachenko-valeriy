import type { Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventsCatalog } from '@/components/EventsCatalog'
import { events } from '@/data/events'
import { getPublishedEvents, getUniqueGenres } from '@/lib/events'

export const metadata: Metadata = {
  title: 'Афиша',
  description: 'Все предстоящие концерты, шоу и события. Поиск и фильтрация по жанру и дате.',
}

export default function AfishaPage() {
  const publishedEvents = getPublishedEvents(events)
  const genres = getUniqueGenres(events)

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        {/* Page header */}
        <div className="bg-surface border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-px bg-accent" />
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
                Мероприятия
              </span>
            </div>
            <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              АФИША
            </h1>
            <p className="text-muted mt-3 text-base max-w-xl">
              Предстоящие концерты, шоу и события. Найдите своё мероприятие и купите билет.
            </p>
          </div>
        </div>

        {/* Catalog with filters */}
        <EventsCatalog events={publishedEvents} genres={genres} />
      </main>
      <Footer />
    </>
  )
}
