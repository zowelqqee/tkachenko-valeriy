import type { SiteConfig } from '@/types/site'

interface AboutSectionProps {
  config: SiteConfig
}

export function AboutSection({ config }: AboutSectionProps) {
  const { company, aboutTitle, stats } = config

  return (
    <section id="about" className="bg-canvas py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="w-10 h-px bg-accent" />
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
            О нас
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: text */}
          <div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-8">
              {aboutTitle}
            </h2>
            <div className="space-y-4">
              {company.description.map((para, i) => (
                <p key={i} className="text-[#AAAAAA] leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Right: stats */}
          <div className="grid grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-surface px-6 py-8 flex flex-col gap-2">
                <span className="font-heading font-black text-4xl sm:text-5xl text-accent leading-none">
                  {stat.value}
                </span>
                <span className="text-muted text-sm uppercase tracking-wider">{stat.label}</span>
                {stat.description && (
                  <p className="text-[#AAAAAA] text-sm leading-relaxed">{stat.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {(company.highlights?.length || company.founder) && (
          <div className="mt-16 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            {company.highlights?.length ? (
              <div className="rounded-lg border border-border bg-surface p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-accent" />
                  <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
                    Площадки и проекты
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white mb-6">
                  ГДЕ И ЧТО МЫ ДЕЛАЕМ
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {company.highlights.map((highlight) => (
                    <article
                      key={highlight.title}
                      className="rounded-lg border border-border bg-canvas/60 p-5"
                    >
                      <h4 className="text-white font-semibold text-lg leading-snug mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-[#AAAAAA] text-sm leading-relaxed">
                        {highlight.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            ) : null}

            {company.founder ? (
              <aside className="rounded-lg border border-border bg-surface p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-accent" />
                  <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
                    Основатель
                  </span>
                </div>
                <h3 className="font-heading font-black text-2xl sm:text-3xl text-white leading-tight">
                  {company.founder.name}
                </h3>
                <p className="text-white/90 leading-relaxed mt-4">{company.founder.title}</p>
                {company.founder.award && (
                  <p className="text-accent font-medium mt-3">{company.founder.award}</p>
                )}

                <div className="space-y-3 mt-6">
                  {company.founder.description.map((paragraph) => (
                    <p key={paragraph} className="text-[#AAAAAA] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {company.founder.education.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="text-white font-semibold uppercase tracking-wider text-sm mb-4">
                      Образование
                    </h4>
                    <ul className="space-y-3">
                      {company.founder.education.map((item) => (
                        <li key={item} className="text-[#AAAAAA] text-sm leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            ) : null}
          </div>
        )}
      </div>
    </section>
  )
}
