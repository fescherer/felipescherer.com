import { Resume } from '@/features'
import { RootLayoutType } from '@/types/Page'
import { getMetadata } from '@/utils/functions/getMetada'
import { Metadata } from 'next'

export const metadata: Metadata = getMetadata({
  defaultDescription: 'Here you can find about career',
  defaultTitle: 'Résumé/CV',
  canonicalURL: '',
  imagePath: '/thumb.png',
  defaultAltImage: 'Felipe Schereer',
  defaultKeywords: ['resume', 'cv'],
})

export default function Page({ params }: RootLayoutType) {
  return (
    <Resume lang={params.lang} />
  )
}
