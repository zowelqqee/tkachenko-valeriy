import type { Metadata } from 'next'
import { LegalPageLayout } from '@/components/LegalPageLayout'
import { getLegalPage } from '@/data/legal'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Способы оплаты',
  description: 'Способы оплаты билетов на мероприятия Продюсерского центра Ткаченко',
}

export default function OplataPage() {
  const page = getLegalPage('oplata')
  if (!page) notFound()
  return <LegalPageLayout page={page} />
}
