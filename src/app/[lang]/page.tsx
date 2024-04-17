import { Homepage } from '@/features'
import { getDictionary } from '@/get-dictionary'
import { RootLayoutType } from '@/types/Page'
import { getMetadata } from '@/utils/functions/getMetada'

export async function generateMetadata({ params }: RootLayoutType) {
  const dictionary = await getDictionary(params.lang)
  const defaultMetadata = {
    canonicalURL: '',
    imagePath: '/thumb.png',
  }

  return getMetadata({
    ...defaultMetadata,
    ...dictionary.homepage.seo,
  })
}

export default function Home({ params }: RootLayoutType) {
  return (
    <Homepage lang={params.lang} />
  )
}
