import { getDictionary } from '@/lib/i18n/get-dictionary'
import { RootLayoutType } from '@/@types/Page'
import { getMetadata } from '@/lib/_felipescherer.com/functions/getMetada'
import { AboutMeSection } from './components/about-me/about-me.section'
import { MeetSection } from './components/meet/meet.section'
import { BlogSection } from './components/blog/blog.section'
import { ProjectsSection } from './components/projects/projects.section'

export async function generateMetadata({ params }: RootLayoutType) {
  const dictionary = await getDictionary(params.lang)
  const defaultMetadata = {
    canonicalURL: '',
    imagePath: '/thumb.webp',
  }

  return getMetadata({
    ...defaultMetadata,
    ...dictionary.homepage.seo,
  })
}

export default async function Home({ params: { lang } }: RootLayoutType) {
  const dictionary = await getDictionary(lang)

  return (
    <main className="flex flex-col">
      <MeetSection lang={lang} />
      <AboutMeSection lang={lang} dictionary={dictionary} />
      <BlogSection lang={lang} />
      <ProjectsSection lang={lang} />
    </main>
  )
}
