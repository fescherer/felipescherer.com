import { Projects } from '@/features'
import { Locale } from '@/lib/i18n/i18n-config'
import { getMetadata } from '@/lib/_felipescherer.com/functions/getMetada'
import { AVAILABLE_TYPE_PROJECTS } from '@/lib/_felipescherer.com/projects'
import { Metadata } from 'next'

type ProjectTypePageProps = {
  params: { projectType: string, lang: Locale }

}

export async function generateMetadata(
  { params }: ProjectTypePageProps,
): Promise<Metadata> {
  const isValidProjectType = AVAILABLE_TYPE_PROJECTS.some(type => params.projectType === type)
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
