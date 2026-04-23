'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/data/site'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled || menuOpen
            ? 'bg-canvas/95 backdrop-blur-sm border-b border-border'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              className="max-w-[300px] translate-y-[6px] text-white hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <span className="block font-heading text-[11px] sm:text-[12px] lg:text-[13px] font-semibold uppercase tracking-[0.22em] text-white/70">
                Продюсерский центр
              </span>
              <span className="block font-heading text-lg sm:text-xl lg:text-2xl font-black tracking-tight leading-tight">
                Валерия Ткаченко
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    pathname === link.href ? 'text-accent' : 'text-[#CCCCCC]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/afisha"
                className="bg-accent hover:bg-accent-dark text-black text-sm font-bold px-5 py-2 rounded transition-colors"
              >
                Афиша
              </Link>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
              aria-expanded={menuOpen}
              className="md:hidden flex flex-col items-center justify-center w-10 h-10 gap-[5px]"
            >
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                  menuOpen ? 'rotate-45 translate-y-[7px]' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                  menuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-200 ${
                  menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMenuOpen(false)}
        />

        {/* Menu panel */}
        <div
          className={`absolute top-16 left-0 right-0 bg-canvas border-b border-border transition-all duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}
        >
          <nav className="flex flex-col px-4 py-6 gap-1">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white text-lg font-medium py-3 border-b border-border last:border-0 hover:text-accent transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pb-6">
            <Link
              href="/afisha"
              className="block w-full text-center bg-accent hover:bg-accent-dark text-black font-bold py-3 rounded transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Смотреть афишу
            </Link>
          </div>

          {/* Quick contact */}
          <div className="px-4 pb-6 border-t border-border pt-4">
            <a
              href={`tel:${siteConfig.company.contact.phone}`}
              className="flex items-center gap-3 text-muted hover:text-white transition-colors text-sm"
            >
              <PhoneIcon />
              {siteConfig.company.contact.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M2.5 3a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-.293.707L5.5 6.414A10.5 10.5 0 009.586 10.5l.707-.707A1 1 0 0111 9.5h2a1 1 0 011 1v2a1 1 0 01-1 1A11.5 11.5 0 012.5 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
