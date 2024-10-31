import { Projects } from '@/features'
import { getDictionary } from '@/get-dictionary'
import { RootLayoutType } from '@/types/Page'
import { getMetadata } from '@/utils/functions/getMetada'

export async function generateMetadata({ params }: RootLayoutType) {
  const dictionary = await getDictionary(params.lang)
  const defaultMetadata = {
    canonicalURL: '/projects',
    imagePath: '/thumb.webp',
  }

  return getMetadata({
    ...defaultMetadata,
    ...dictionary.projects.seo,
  })
}

export default function ProjectsPage({ params }: RootLayoutType) {
  return (
    <Projects lang={params.lang} />
  )
}
