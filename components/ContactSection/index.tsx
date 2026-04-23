import type { SiteConfig } from '@/types/site'

interface ContactSectionProps {
  config: SiteConfig
}

export function ContactSection({ config }: ContactSectionProps) {
  const { company } = config
  const { contact } = company

  return (
    <section id="contacts" className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-10 h-px bg-accent" />
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
            Контакты
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
              СВЯЖИТЕСЬ С НАМИ
            </h2>
            <p className="text-[#AAAAAA] leading-relaxed mb-8 max-w-md">
              Если у вас возникнут вопросы, звоните.
            </p>
          </div>

          <div className="space-y-6">
            {contact.phone && (
              <ContactItem label="Телефон">
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, '')}`}
                  className="text-white text-xl font-bold hover:text-accent transition-colors"
                >
                  {contact.phone}
                </a>
              </ContactItem>
            )}
            <ContactItem label="Реквизиты">
              <span className="text-white">{company.name}</span>
            </ContactItem>
            {company.inn && (
              <ContactItem label="ИНН">
                <span className="text-white">{company.inn}</span>
              </ContactItem>
            )}
            {contact.address && (
              <ContactItem label="Адрес">
                <span className="text-white">{contact.address}</span>
              </ContactItem>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-xs text-muted uppercase tracking-wider mb-1">{label}</div>
      {children}
    </div>
  )
}
