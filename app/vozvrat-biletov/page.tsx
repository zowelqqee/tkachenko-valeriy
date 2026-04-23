import type { Metadata } from 'next'
import { LegalPageLayout } from '@/components/LegalPageLayout'
import { getLegalPage } from '@/data/legal'
import { notFound } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Возврат билетов',
  description: 'Условия возврата и обмена билетов на мероприятия Продюсерского центра Ткаченко',
}

export default function VozvratBiletovPage() {
  const page = getLegalPage('vozvrat-biletov')
  if (!page) notFound()
  return <LegalPageLayout page={page} />
}
