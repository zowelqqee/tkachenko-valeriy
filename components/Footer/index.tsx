import Link from 'next/link'
import { siteConfig } from '@/data/site'
import { LegalLinks } from '@/components/LegalLinks'

export function Footer() {
  const year = new Date().getFullYear()
  const { company } = siteConfig

  return (
    <footer className="bg-canvas border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer row */}
        <div className="py-12 grid sm:grid-cols-3 gap-8">
          {/* Logo + tagline */}
          <div className="sm:col-span-1">
            <Link
              href="/"
              className="inline-block max-w-[260px] text-white hover:text-accent transition-colors"
            >
              <span className="block font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Продюсерский центр
              </span>
              <span className="block font-heading text-lg font-black tracking-tight leading-tight">
                Валерия Ткаченко
              </span>
            </Link>
            <p className="text-muted text-sm mt-2">{company.tagline}</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs text-muted uppercase tracking-wider mb-4">Разделы</p>
            <nav className="flex flex-col gap-2">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#AAAAAA] text-sm hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs text-muted uppercase tracking-wider mb-4">Контакты</p>
            <div className="flex flex-col gap-2">
              {company.contact.phone && (
                <a
                  href={`tel:${company.contact.phone.replace(/[^\d+]/g, '')}`}
                  className="text-[#AAAAAA] text-sm hover:text-white transition-colors"
                >
                  {company.contact.phone}
                </a>
              )}
              {company.contact.email && (
                <a
                  href={`mailto:${company.contact.email}`}
                  className="text-[#AAAAAA] text-sm hover:text-white transition-colors"
                >
                  {company.contact.email}
                </a>
              )}
              {company.contact.address && (
                <span className="text-muted text-sm">{company.contact.address}</span>
              )}
            </div>
          </div>
        </div>

        {/* Legal row */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <LegalLinks />
          <div className="flex flex-col sm:items-end gap-1">
            <p className="text-muted text-xs">
              {company.name}
            </p>
            {company.inn && (
              <p className="text-muted text-xs">
                ИНН {company.inn}
                {company.ogrn && ` · ОГРН ${company.ogrn}`}
              </p>
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="py-4 border-t border-border">
          <p className="text-muted text-xs text-center">
            © {year} {company.shortName}. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
