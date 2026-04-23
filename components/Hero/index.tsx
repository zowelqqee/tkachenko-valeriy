import Link from 'next/link'
import type { SiteConfig } from '@/types/site'

interface HeroProps {
  config: SiteConfig
}

export function Hero({ config }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Atmospheric background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 100% 60% at 50% 0%, #1C1307 0%, #0A0A0A 65%)',
        }}
      />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 lg:py-40">
        {/* Label badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="w-8 h-px bg-accent" />
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
            Продюсерский центр
          </span>
          <span className="w-8 h-px bg-accent" />
        </div>

        {/* Headline */}
        <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-6">
          <span className="block text-white">{config.heroTitle}</span>
          <span className="block text-accent">{config.heroTitleAccent}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[#AAAAAA] text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          {config.heroSubtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/afisha"
            className="w-full sm:w-auto bg-accent hover:bg-accent-dark text-black font-bold text-base px-8 py-4 rounded transition-colors duration-150 tracking-wide"
          >
            Смотреть афишу
          </Link>
          <Link
            href="/#about"
            className="w-full sm:w-auto border border-[#3A3A3A] hover:border-white text-white font-medium text-base px-8 py-4 rounded transition-colors duration-150"
          >
            О нас
          </Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-canvas to-transparent" />

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-muted uppercase tracking-widest">Листайте вниз</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent" />
      </div>
    </section>
  )
}
