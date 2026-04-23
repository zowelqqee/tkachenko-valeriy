import Link from 'next/link'

const links = [
  { label: 'Способы оплаты', href: '/oplata' },
  { label: 'Возврат билетов', href: '/vozvrat-biletov' },
]

export function LegalLinks({ className = '' }: { className?: string }) {
  return (
    <nav className={`flex flex-wrap gap-x-6 gap-y-2 ${className}`}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-muted text-sm hover:text-white transition-colors"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
