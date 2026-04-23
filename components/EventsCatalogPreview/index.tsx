import Link from 'next/link'
import type { Event } from '@/types/event'
import { EventCard } from '@/components/EventCard'

interface EventsCatalogPreviewProps {
  events: Event[]
}

export function EventsCatalogPreview({ events }: EventsCatalogPreviewProps) {
  if (events.length === 0) return null

  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="w-10 h-px bg-accent" />
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
                Мероприятия
              </span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              БЛИЖАЙШИЕ СОБЫТИЯ
            </h2>
          </div>
          <Link
            href="/afisha"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-accent hover:text-white transition-colors shrink-0"
          >
            Смотреть все <ArrowRightIcon />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Mobile: see all link */}
        <div className="mt-10 text-center sm:hidden">
          <Link
            href="/afisha"
            className="inline-flex items-center gap-2 border border-[#3A3A3A] hover:border-accent text-white hover:text-accent font-medium px-6 py-3 rounded transition-colors"
          >
            Вся афиша <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </section>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
