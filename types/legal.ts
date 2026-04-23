export interface LegalSection {
  heading: string
  content: string[]  // paragraphs
}

export interface LegalPage {
  slug: string
  title: string
  metaDescription: string
  lastUpdated: string
  sections: LegalSection[]
}
