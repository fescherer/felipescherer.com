import { Resume } from '@/features'
import { getDictionary } from '@/get-dictionary'
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

export default async function Page({ params }: RootLayoutType) {
  const dictionary = await getDictionary(params.lang)

  return (
    <Resume
      lang={params.lang}
      translations={{
        'title': dictionary.resume.title,
        'text': dictionary.resume.text,
        'en-version': dictionary.resume['en-version'],
        'pt-version': dictionary.resume['pt-version'],
      }}
    />
  )
}
