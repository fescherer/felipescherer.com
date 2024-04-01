import { Homepage } from '@/features'
import { getMetadata } from '@/utils/functions/getMetada'
import type { Metadata } from 'next'

export const metadata: Metadata = getMetadata({
  defaultDescription: 'Here you can find about my life, hobbies and works that I\'ve done',
  defaultTitle: 'Portfolio Felipe Scherer',
  canonicalURL: '',
  imagePath: '/thumb.png',
  defaultAltImage: 'Felipe Schereer',
  defaultKeywords: ['institucional-page'],
})

export default function Home() {
  return (
    <Homepage />
  )
}
