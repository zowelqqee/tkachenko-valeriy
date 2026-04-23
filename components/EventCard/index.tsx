import Image from 'next/image'
import Link from 'next/link'
import type { Event } from '@/types/event'
import { formatDateRu } from '@/lib/dates'

const GENRE_GRADIENTS: Record<string, string> = {
  Концерт: 'from-rose-950 to-zinc-900',
  'Творческий вечер': 'from-amber-950 to-zinc-900',
  Моноспектакль: 'from-fuchsia-950 to-zinc-900',
  Детям: 'from-sky-950 to-zinc-900',
  Рок: 'from-red-950 to-zinc-900',
  Джаз: 'from-blue-950 to-zinc-900',
  Поп: 'from-purple-950 to-zinc-900',
  Стендап: 'from-green-950 to-zinc-900',
  Классика: 'from-yellow-950 to-zinc-900',
  Блюз: 'from-indigo-950 to-zinc-900',
  Электронная: 'from-cyan-950 to-zinc-900',
  Фолк: 'from-emerald-950 to-zinc-900',
}

interface EventCardProps {
  event: Event
  compact?: boolean
}

export function EventCard({ event, compact = false }: EventCardProps) {
  const gradient = GENRE_GRADIENTS[event.genre] ?? 'from-zinc-800 to-zinc-900'
  const showPrice = typeof event.priceFrom === 'number'

  return (
    <article className="group flex flex-col bg-card border border-border rounded-lg overflow-hidden hover:border-accent/40 transition-colors duration-200">
      {/* Poster */}
      <div className={`relative aspect-[3/4] bg-gradient-to-b ${gradient} overflow-hidden`}>
        {event.posterImage ? (
          <Image
            src={event.posterImage}
            alt={event.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
          />
        ) : (
          <div className="absolute inset-0 flex items-end p-4">
            <span className="text-xs text-white/30 uppercase tracking-widest">{event.genre}</span>
          </div>
        )}

        {/* Age badge */}
        {event.ageRating && (
          <div className="absolute top-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
            {event.ageRating}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        {/* Genre tag */}
        <span className="text-accent text-xs font-semibold uppercase tracking-wider">
          {event.genre}
        </span>

        {/* Title */}
        <h3 className="font-heading font-extrabold text-white text-lg leading-tight line-clamp-2">
          {event.title}
        </h3>

        {!compact && (
          <p className="text-muted text-sm leading-snug line-clamp-2">{event.description}</p>
        )}

        {/* Meta */}
        <div className="mt-auto space-y-1">
          <div className="flex items-center gap-2 text-sm text-[#CCCCCC]">
            <CalendarIcon />
            <span>{formatDateRu(event.date)}</span>
            <span className="text-muted">·</span>
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <LocationIcon />
            <span className="truncate">{event.venue}</span>
          </div>
        </div>

        {/* Price + CTA */}
        <div
          className={`flex items-center pt-3 border-t border-border mt-1 ${showPrice ? 'justify-between' : 'justify-end'}`}
        >
          {showPrice && (
            <div>
              <span className="text-xs text-muted">от </span>
              <span className="font-bold text-white text-base">
                {event.priceFrom?.toLocaleString('ru-RU')}{' '}
                <span className="text-sm">₽</span>
              </span>
            </div>
          )}
          <Link
            href={event.buyTicketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent hover:bg-accent-dark text-black text-sm font-bold px-4 py-2 rounded transition-colors duration-150 whitespace-nowrap"
          >
            Купить билет
          </Link>
        </div>
      </div>
    </article>
  )
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 text-muted">
      <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1 7h14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 1v4M11 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="shrink-0 text-muted">
      <path
        d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.49-2.01-4.5-4.5-4.5z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
