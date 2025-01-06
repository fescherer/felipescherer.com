import { RootLayoutType } from '@/types/Page'
import { ProjectLoader } from './components/project-loader'

// export async function generateMetadata({ params }: RootLayoutType) {
//   const dictionary = await getDictionary(params.lang)
//   const defaultMetadata = {
//     canonicalURL: '/projects',
//     imagePath: '/thumb.webp',
//   }

//   return getMetadata({
//     ...defaultMetadata,
//     ...dictionary.projects.seo,
//   })
// }

export default function ProjectsPage({ params }: RootLayoutType) {
  return (
    <div className="flex">
      <ProjectLoader lang={params.lang} />
    </div>
  )
}
