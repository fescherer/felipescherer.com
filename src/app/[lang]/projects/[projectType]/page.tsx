import { Projects } from '@/features'
import { getMetadata } from '@/utils/functions/getMetada'
import { AVAILABLE_TYPE_PROJECTS } from '@/utils/projects'
import { Metadata } from 'next'

type ProjectTypePageProps = {
  params: { projectType: string }
}

export async function generateMetadata(
  { params }: ProjectTypePageProps,
): Promise<Metadata> {
  const isValidProjectType = AVAILABLE_TYPE_PROJECTS.some(type => params.projectType === type)
  if (isValidProjectType) {
    return getMetadata({
      defaultDescription: `${params.projectType} projects`,
      defaultTitle: `Projects ${params.projectType}`,
      canonicalURL: '',
      imagePath: '/thumb.png',
      defaultAltImage: 'Felipe Schereer',
      defaultKeywords: ['projects'],
    })
  } else return getMetadata({
    defaultDescription: 'O tipo de projeto não foi encontrado, por favor, verificar a url',
    defaultTitle: 'Projects',
    canonicalURL: '',
    imagePath: '/thumb.png',
    defaultAltImage: 'Felipe Schereer',
    defaultKeywords: ['projects'],
  })
}

export default function ProjectTypePage({ params: { projectType } }: ProjectTypePageProps) {
  return (
    <Projects projectType={projectType} />
  )
}
