import { getDictionary } from '@/lib/i18n/get-dictionary'
import { RootLayoutType } from '@/@types/Page'
import { getMetadata } from '@/@fn/getMetada'
import { ResumeComponent } from './resume.component'

export async function generateMetadata({ params }: RootLayoutType) {
  const dictionary = await getDictionary(params.lang)
  const defaultMetadata = {
    canonicalURL: '/resume',
    imagePath: '/thumb.webp',
  }

  return getMetadata({
    ...defaultMetadata,
    ...dictionary.resume.seo,
  })
}

export default async function Page({ params }: RootLayoutType) {
  const dictionary = await getDictionary(params.lang)

  return (
    <ResumeComponent
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
