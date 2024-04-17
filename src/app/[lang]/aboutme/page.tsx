import { AboutMe } from '@/features/AboutMe'
import { RootLayoutType } from '@/types/Page'
import { getMetadata } from '@/utils/functions/getMetada'
import { Metadata } from 'next'

export const metadata: Metadata = getMetadata({
  defaultDescription: 'Here you can find about my life, hobbies and works that I\'ve done',
  defaultTitle: 'About me',
  canonicalURL: '',
  imagePath: '/thumb.png',
  defaultAltImage: 'Felipe Schereer',
  defaultKeywords: ['about-me'],
})

export default function AboutMePage({ params }: RootLayoutType) {
  return (
    <AboutMe lang={params.lang} />
  )
}
