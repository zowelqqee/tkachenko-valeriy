import type { Event } from '@/types/event'
import { isUpcoming, isThisMonth } from './dates'

export function getPublishedEvents(events: Event[]): Event[] {
  return events.filter((e) => e.published)
}

export function getUpcomingEvents(events: Event[]): Event[] {
  return getPublishedEvents(events)
    .filter((e) => isUpcoming(e.datetimeISO))
    .sort((a, b) => new Date(a.datetimeISO).getTime() - new Date(b.datetimeISO).getTime())
}

export function getFeaturedEvent(events: Event[]): Event | null {
  const upcoming = getUpcomingEvents(events)
  // Prefer events marked as featured; fall back to nearest upcoming
  return upcoming.find((e) => e.featured) ?? upcoming[0] ?? null
}

export function getPreviewEvents(events: Event[], limit = 3): Event[] {
  const featured = getFeaturedEvent(events)
  return getUpcomingEvents(events)
    .filter((e) => e.id !== featured?.id)
    .slice(0, limit)
}

export function getThisMonthEvents(events: Event[]): Event[] {
  return getPublishedEvents(events)
    .filter((e) => isUpcoming(e.datetimeISO) && isThisMonth(e.datetimeISO))
    .sort((a, b) => new Date(a.datetimeISO).getTime() - new Date(b.datetimeISO).getTime())
}

export function getUniqueGenres(events: Event[]): string[] {
  const genres = getPublishedEvents(events).map((e) => e.genre)
  return Array.from(new Set(genres)).sort()
}
