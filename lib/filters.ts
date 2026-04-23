import type { Event } from '@/types/event'
import { isUpcoming, isThisMonth } from './dates'

export type DateFilter = 'all' | 'upcoming' | 'this-month'

export interface EventFilters {
  search: string
  genre: string    // "" = all genres
  dateRange: DateFilter
}

export const DEFAULT_FILTERS: EventFilters = {
  search: '',
  genre: '',
  dateRange: 'upcoming',
}

export function applyFilters(events: Event[], filters: EventFilters): Event[] {
  return events
    .filter((e) => e.published)
    .filter((e) => {
      if (!filters.search.trim()) return true
      return e.title.toLowerCase().includes(filters.search.toLowerCase().trim())
    })
    .filter((e) => {
      if (!filters.genre) return true
      return e.genre === filters.genre
    })
    .filter((e) => {
      if (filters.dateRange === 'all') return true
      if (filters.dateRange === 'upcoming') return isUpcoming(e.datetimeISO)
      if (filters.dateRange === 'this-month')
        return isUpcoming(e.datetimeISO) && isThisMonth(e.datetimeISO)
      return true
    })
    .sort((a, b) => new Date(a.datetimeISO).getTime() - new Date(b.datetimeISO).getTime())
}
