import Link from 'next/link'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center justify-center pt-16 min-h-[70vh]">
        <div className="text-center px-4">
          <p className="text-accent font-heading font-black text-8xl sm:text-9xl leading-none mb-6">
            404
          </p>
          <h1 className="font-heading font-black text-2xl sm:text-3xl text-white mb-4">
            Страница не найдена
          </h1>
          <p className="text-muted mb-10 max-w-sm mx-auto">
            Запрашиваемая страница не существует или была перемещена.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-accent hover:bg-accent-dark text-black font-bold px-6 py-3 rounded transition-colors"
            >
              На главную
            </Link>
            <Link
              href="/afisha"
              className="border border-border hover:border-white text-white font-medium px-6 py-3 rounded transition-colors"
            >
              Смотреть афишу
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
