import { Projects } from '@/@components/projects/projects'
import { RootLayoutType } from '@/@types/Page'

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
    <Projects lang={params.lang} />
  )
}
{ /* <ProjectLoader lang={params.lang} /> */ }
