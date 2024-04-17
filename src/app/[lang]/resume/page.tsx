import { Resume } from '@/features'
import { getDictionary } from '@/get-dictionary'
import { RootLayoutType } from '@/types/Page'
import { getMetadata } from '@/utils/functions/getMetada'

export async function generateMetadata({ params }: RootLayoutType) {
  const dictionary = await getDictionary(params.lang)
  const defaultMetadata = {
    canonicalURL: '/resume',
    imagePath: '/thumb.png',
  }

  return getMetadata({
    ...defaultMetadata,
    ...dictionary.resume.seo,
  })
}

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
