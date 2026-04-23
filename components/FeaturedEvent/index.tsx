import Image from 'next/image'
import Link from 'next/link'
import type { Event } from '@/types/event'
import { formatDateRu } from '@/lib/dates'

const GENRE_GRADIENTS: Record<string, string> = {
  Концерт: 'from-rose-950 via-zinc-900 to-zinc-900',
  'Творческий вечер': 'from-amber-950 via-zinc-900 to-zinc-900',
  Моноспектакль: 'from-fuchsia-950 via-zinc-900 to-zinc-900',
  Детям: 'from-sky-950 via-zinc-900 to-zinc-900',
  Рок: 'from-red-950 via-zinc-900 to-zinc-900',
  Джаз: 'from-blue-950 via-zinc-900 to-zinc-900',
  Поп: 'from-purple-950 via-zinc-900 to-zinc-900',
  Стендап: 'from-green-950 via-zinc-900 to-zinc-900',
  Классика: 'from-yellow-950 via-zinc-900 to-zinc-900',
  Блюз: 'from-indigo-950 via-zinc-900 to-zinc-900',
}

interface FeaturedEventProps {
  event: Event
}

export function FeaturedEvent({ event }: FeaturedEventProps) {
  const gradient = GENRE_GRADIENTS[event.genre] ?? 'from-zinc-800 via-zinc-900 to-zinc-900'
  const showPrice = typeof event.priceFrom === 'number'

  return (
    <section className="bg-canvas py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-10">
          <span className="w-10 h-px bg-accent" />
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
            Ближайшее событие
          </span>
        </div>

        <div className="grid lg:grid-cols-[2fr_3fr] gap-8 lg:gap-14 items-center">
          {/* Poster */}
          <div
            className={`relative aspect-[3/4] max-h-[560px] rounded-lg overflow-hidden bg-gradient-to-b ${gradient}`}
          >
            {event.posterImage ? (
              <Image
                src={event.posterImage}
                alt={event.title}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-end p-6">
                <span className="text-white/20 text-xs uppercase tracking-widest">{event.genre}</span>
              </div>
            )}

            {/* Age badge */}
            {event.ageRating && (
              <div className="absolute top-4 right-4 bg-black/80 text-white text-xs font-bold px-2.5 py-1.5 rounded">
                {event.ageRating}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            {/* Genre */}
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              {event.genre}
            </span>

            {/* Title */}
            <h2 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              {event.title}
            </h2>

            {/* Description */}
            <p className="text-[#AAAAAA] leading-relaxed max-w-xl line-clamp-4">
              {event.description}
            </p>

            {/* Event meta */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              <MetaItem icon={<CalendarIcon />} label="Дата">
                {formatDateRu(event.date)} · {event.time}
              </MetaItem>
              <MetaItem icon={<LocationIcon />} label="Место">
                {event.venue}
                {event.city && <span className="text-muted">, {event.city}</span>}
              </MetaItem>
            </div>

            {/* Price + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-border">
              {showPrice && (
                <div className="flex flex-col">
                  <span className="text-muted text-xs uppercase tracking-wider mb-1">Стоимость</span>
                  <span className="font-heading font-black text-3xl text-white">
                    от {event.priceFrom?.toLocaleString('ru-RU')} ₽
                  </span>
                </div>
              )}
              <Link
                href={event.buyTicketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:ml-auto bg-accent hover:bg-accent-dark text-black font-bold text-base px-8 py-4 rounded transition-colors duration-150 whitespace-nowrap"
              >
                Купить билет
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MetaItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-muted mt-0.5">{icon}</span>
      <div>
        <div className="text-xs text-muted uppercase tracking-wider mb-0.5">{label}</div>
        <div className="text-white font-medium">{children}</div>
      </div>
    </div>
  )
}

function CalendarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="3" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M1 7h14" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5 1v4M11 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1.5C5.51 1.5 3.5 3.51 3.5 6c0 3.75 4.5 8.5 4.5 8.5S12.5 9.75 12.5 6c0-2.49-2.01-4.5-4.5-4.5z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  )
}
