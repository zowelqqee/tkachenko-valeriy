import type { SiteConfig } from '@/types/site'

interface ContactSectionProps {
  config: SiteConfig
}

export function ContactSection({ config }: ContactSectionProps) {
  const { contact } = config.company

  return (
    <section id="contacts" className="bg-surface py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-12">
          <span className="w-10 h-px bg-accent" />
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">
            Контакты
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: heading + description */}
          <div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
              СВЯЖИТЕСЬ С НАМИ
            </h2>
            <p className="text-[#AAAAAA] leading-relaxed mb-8 max-w-md">
              По всем вопросам, связанным с организацией мероприятий, сотрудничеством и продажей
              билетов — пишите или звоните.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {contact.telegram && (
                <SocialLink href={contact.telegram} label="Telegram">
                  <TelegramIcon />
                </SocialLink>
              )}
              {contact.vk && (
                <SocialLink href={contact.vk} label="ВКонтакте">
                  <VkIcon />
                </SocialLink>
              )}
              {contact.instagram && (
                <SocialLink href={contact.instagram} label="Instagram">
                  <InstagramIcon />
                </SocialLink>
              )}
            </div>
          </div>

          {/* Right: contact details */}
          <div className="space-y-6">
            {contact.phone && (
              <ContactItem label="Телефон">
                <a
                  href={`tel:${contact.phone.replace(/\s/g, '')}`}
                  className="text-white text-xl font-bold hover:text-accent transition-colors"
                >
                  {contact.phone}
                </a>
              </ContactItem>
            )}
            {contact.email && (
              <ContactItem label="Email">
                <a
                  href={`mailto:${contact.email}`}
                  className="text-white text-xl font-bold hover:text-accent transition-colors"
                >
                  {contact.email}
                </a>
              </ContactItem>
            )}
            {contact.address && (
              <ContactItem label="Адрес">
                <span className="text-white">{contact.address}</span>
              </ContactItem>
            )}

            <div className="pt-4 border-t border-border">
              <p className="text-muted text-sm">
                Режим работы: пн–пт с 10:00 до 19:00 МСК
              </p>
            </div>
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

function SocialLink({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-11 h-11 flex items-center justify-center border border-border rounded hover:border-accent hover:text-accent text-muted transition-colors"
    >
      {children}
    </a>
  )
}

function TelegramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.94z" />
    </svg>
  )
}

function VkIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.785 16.241s.288-.032.436-.19c.136-.145.132-.418.132-.418s-.02-1.279.574-1.468c.587-.186 1.341 1.236 2.14 1.783.605.41 1.064.32 1.064.32l2.137-.03s1.117-.069.587-1.022c-.043-.074-.307-.649-1.58-1.843-1.333-1.25-1.155-1.048.45-3.208.977-1.305 1.367-2.102 1.244-2.442-.117-.323-.84-.238-.84-.238l-2.406.015s-.178-.024-.31.055c-.13.077-.213.258-.213.258s-.378 1.006-.88 1.86c-1.063 1.804-1.487 1.9-1.66 1.788-.403-.26-.302-1.052-.302-1.613 0-1.753.266-2.484-.516-2.676-.26-.063-.45-.104-1.113-.111-.85-.009-1.569.002-1.975.202-.27.132-.478.428-.351.444.156.02.51.096.698.353.242.333.234 1.082.234 1.082s.139 2.062-.324 2.316c-.317.17-.752-.177-1.685-1.766-.48-.829-.842-1.747-.842-1.747s-.07-.176-.198-.27c-.154-.115-.37-.151-.37-.151l-2.286.015s-.343.01-.469.16c-.112.133-.009.408-.009.408s1.789 4.185 3.815 6.296c1.858 1.933 3.967 1.806 3.967 1.806h.956z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}
