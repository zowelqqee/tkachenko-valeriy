'use client'

import { useState, useMemo } from 'react'
import type { Event } from '@/types/event'
import { applyFilters, DEFAULT_FILTERS, type DateFilter } from '@/lib/filters'
import { EventCard } from '@/components/EventCard'

const DATE_RANGE_OPTIONS: { value: DateFilter; label: string }[] = [
  { value: 'upcoming', label: 'Предстоящие' },
  { value: 'this-month', label: 'В этом месяце' },
  { value: 'all', label: 'Все события' },
]

interface EventsCatalogProps {
  events: Event[]
  genres: string[]
}

export function EventsCatalog({ events, genres }: EventsCatalogProps) {
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('')
  const [dateRange, setDateRange] = useState<DateFilter>('upcoming')

  const filtered = useMemo(
    () => applyFilters(events, { search, genre, dateRange }),
    [events, search, genre, dateRange],
  )

  const hasFilters = search || genre || dateRange !== 'upcoming'

  function clearFilters() {
    setSearch('')
    setGenre('')
    setDateRange('upcoming')
  }

  return (
    <div>
      {/* Search + filters */}
      <div className="bg-surface border-b border-border sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
              <input
                type="text"
                placeholder="Поиск по названию..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-card border border-border text-white placeholder-muted text-sm rounded px-4 py-2.5 pl-10 focus:outline-none focus:border-accent/60 transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-white transition-colors"
                  aria-label="Очистить"
                >
                  <XIcon />
                </button>
              )}
            </div>

            {/* Genre filter */}
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="bg-card border border-border text-sm text-white rounded px-3 py-2.5 focus:outline-none focus:border-accent/60 transition-colors cursor-pointer min-w-[160px]"
            >
              <option value="">Все жанры</option>
              {genres.map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>

            {/* Date range */}
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value as DateFilter)}
              className="bg-card border border-border text-sm text-white rounded px-3 py-2.5 focus:outline-none focus:border-accent/60 transition-colors cursor-pointer min-w-[180px]"
            >
              {DATE_RANGE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>

            {/* Clear filters */}
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="text-sm text-muted hover:text-white transition-colors px-3 py-2.5 border border-border rounded whitespace-nowrap"
              >
                Сбросить
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Count */}
        <p className="text-muted text-sm mb-6">
          {filtered.length === 0
            ? 'Ничего не найдено'
            : `${filtered.length} ${pluralEvents(filtered.length)}`}
        </p>

        {filtered.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <EmptyState onReset={clearFilters} />
        )}
      </div>
    </div>
  )
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="text-5xl mb-4">🎭</div>
      <h3 className="font-heading font-bold text-xl text-white mb-2">Ничего не найдено</h3>
      <p className="text-muted text-sm mb-6 max-w-xs">
        Попробуйте изменить параметры поиска или сбросить фильтры
      </p>
      <button
        onClick={onReset}
        className="border border-border hover:border-accent text-white hover:text-accent text-sm font-medium px-5 py-2.5 rounded transition-colors"
      >
        Сбросить фильтры
      </button>
    </div>
  )
}

function pluralEvents(n: number): string {
  if (n % 10 === 1 && n % 100 !== 11) return 'событие'
  if (n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20)) return 'события'
  return 'событий'
}

function SearchIcon({ className = '' }: { className?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={className}>
      <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}
