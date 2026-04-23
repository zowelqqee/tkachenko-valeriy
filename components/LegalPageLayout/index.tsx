import Link from 'next/link'
import type { LegalPage } from '@/types/legal'
import { formatDateRu } from '@/lib/dates'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

interface LegalPageLayoutProps {
  page: LegalPage
}

export function LegalPageLayout({ page }: LegalPageLayoutProps) {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted text-sm hover:text-white transition-colors mb-8"
          >
            ← На главную
          </Link>

          <h1 className="font-heading font-black text-3xl sm:text-4xl text-white mb-2">
            {page.title}
          </h1>
          <p className="text-muted text-sm mb-12">
            Последнее обновление: {formatDateRu(page.lastUpdated)}
          </p>

          <div className="space-y-10">
            {page.sections.map((section, i) => (
              <section key={i}>
                <h2 className="font-heading font-bold text-xl text-white mb-4">
                  {section.heading}
                </h2>
                <div className="space-y-3">
                  {section.content.map((paragraph, j) => (
                    <p key={j} className="text-[#CCCCCC] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
