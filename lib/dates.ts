const MONTHS_RU = [
  'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
  'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
]

const MONTHS_SHORT_RU = [
  'янв', 'фев', 'мар', 'апр', 'май', 'июн',
  'июл', 'авг', 'сен', 'окт', 'ноя', 'дек',
]

export function formatDateRu(isoDate: string): string {
  const [year, month, day] = isoDate.split('-').map(Number)
  return `${day} ${MONTHS_RU[month - 1]} ${year}`
}

export function formatDateShortRu(isoDate: string): string {
  const [, month, day] = isoDate.split('-').map(Number)
  return `${day} ${MONTHS_SHORT_RU[month - 1]}`
}

export function isUpcoming(datetimeISO: string): boolean {
  return new Date(datetimeISO) >= new Date()
}

export function isThisMonth(datetimeISO: string): boolean {
  const now = new Date()
  const dt = new Date(datetimeISO)
  return dt.getFullYear() === now.getFullYear() && dt.getMonth() === now.getMonth()
}

export function isNextThreeMonths(datetimeISO: string): boolean {
  const now = new Date()
  const threeMonthsLater = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate())
  const dt = new Date(datetimeISO)
  return dt >= now && dt <= threeMonthsLater
}
