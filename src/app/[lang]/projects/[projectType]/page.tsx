import { Locale } from '@/lib/i18n/i18n-config'
import { getMetadata } from '@/@fn/getMetada'
import { Metadata } from 'next'
import { Projects } from '@/@components/projects/projects'
import { getProjectsData } from '@/@data/projects.data'

type ProjectTypePageProps = {
  params: { projectType: string, lang: Locale }

}

export async function generateMetadata(
  { params }: ProjectTypePageProps,
): Promise<Metadata> {
  const PROJECTS = await getProjectsData(params.lang)
  const isValidProjectType = PROJECTS.some(type => params.projectType === type.id)
  if (isValidProjectType) {
    return getMetadata({
      defaultDescription: `${params.projectType} projects`,
      defaultTitle: `Projects ${params.projectType}`,
      canonicalURL: `/projects/${params.projectType}`,
      imagePath: '/thumb.webp',
      defaultAltImage: 'Felipe Scherer',
      defaultKeywords: [`project-${params.projectType}`],
    })
  } else return getMetadata({
    defaultDescription: 'The project type was not found, please check the url',
    defaultTitle: 'Projects',
    canonicalURL: '',
    imagePath: '/thumb.webp',
    defaultAltImage: 'Felipe Scherer',
    defaultKeywords: ['projects'],
  })
}

export default function ProjectTypePage({ params: { projectType, lang } }: ProjectTypePageProps) {
  return (
    <Projects projectType={projectType} lang={lang} />
  )
}
