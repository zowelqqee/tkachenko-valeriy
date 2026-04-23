export interface Event {
  id: string
  slug: string
  title: string
  shortTitle?: string
  description: string
  genre: string
  date: string        // "YYYY-MM-DD"
  time: string        // "HH:MM"
  datetimeISO: string // full ISO 8601 for sorting/comparison
  venue: string
  venueUrl?: string
  city?: string
  priceFrom?: number
  currency: string
  ageRating?: string  // "0+", "6+", "12+", "16+", "18+"
  buyTicketUrl: string
  posterImage?: string
  heroImage?: string
  galleryImages?: string[]
  featured: boolean
  published: boolean
}

export type Genre =
  | 'Концерт'
  | 'Творческий вечер'
  | 'Моноспектакль'
  | 'Детям'
  | 'Рок'
  | 'Джаз'
  | 'Поп'
  | 'Стендап'
  | 'Классика'
  | 'Блюз'
  | 'Электронная'
  | 'Хип-хоп'
  | 'Фолк'

export const GENRES: Genre[] = [
  'Концерт',
  'Творческий вечер',
  'Моноспектакль',
  'Детям',
  'Рок',
  'Джаз',
  'Поп',
  'Стендап',
  'Классика',
  'Блюз',
  'Электронная',
  'Хип-хоп',
  'Фолк',
]
