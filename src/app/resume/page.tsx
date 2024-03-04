import { Resume } from '@/features'
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

export default function Page() {
  return (
    <Resume />
  )
}
