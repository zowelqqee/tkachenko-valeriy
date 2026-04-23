export interface NavLink {
  label: string
  href: string
  isExternal?: boolean
}

export interface ContactInfo {
  phone?: string
  email?: string
  address?: string
  instagram?: string
  vk?: string
  telegram?: string
}

export interface CompanyHighlight {
  title: string
  description: string
}

export interface FounderInfo {
  name: string
  title: string
  award?: string
  description: string[]
  education: string[]
}

export interface CompanyInfo {
  name: string
  shortName: string
  tagline: string
  description: string[]
  highlights?: CompanyHighlight[]
  founder?: FounderInfo
  inn?: string
  ogrn?: string
  legalAddress?: string
  contact: ContactInfo
}

export interface SiteStats {
  value: string
  label: string
  description?: string
}

export interface SiteConfig {
  siteName: string
  siteDescription: string
  siteUrl: string
  company: CompanyInfo
  navLinks: NavLink[]
  heroTitle: string
  heroTitleAccent: string
  heroSubtitle: string
  aboutTitle: string
  stats: SiteStats[]
}
