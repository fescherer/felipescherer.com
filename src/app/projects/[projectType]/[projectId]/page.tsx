/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Project } from '@/features/Project'
import { getMetadata } from '@/utils/functions/getMetada'
import { PROJECTS } from '@/utils/projects'
import { Metadata } from 'next'

type ProjectPageProps = {
  params: { projectId: string, projectType: string }
}

export async function generateMetadata(
  { params }: ProjectPageProps,
): Promise<Metadata> {
  if (!Object.keys(PROJECTS).includes(params.projectType)) return getMetadata({
    defaultDescription: `Project not found`,
    defaultTitle: `Project Not Found`,
    canonicalURL: '',
    imagePath: '/thumb.png',
    defaultAltImage: 'Felipe Schereer',
    defaultKeywords: ['projects'],
  })

  const project = PROJECTS[params.projectType as keyof typeof PROJECTS].find(project => (project.id === params.projectId))

  if (!project) return getMetadata({
    defaultDescription: `Project not found`,
    defaultTitle: `Project Not Found`,
    canonicalURL: '',
    imagePath: '/thumb.png',
    defaultAltImage: 'Felipe Schereer',
    defaultKeywords: ['projects'],
  })

  return getMetadata({
    defaultDescription: project.description.pt ?? '',
    defaultTitle: project.title.pt ?? '',
    canonicalURL: '',
    imagePath: `/projects/${project.type.id}/${project.id}`,
    defaultAltImage: project.title.pt ?? '',
    defaultKeywords: [...project.tags],
  })
}

export default function ProjectPage({ params: { projectType, projectId } }: ProjectPageProps) {
  if (!Object.keys(PROJECTS).includes(projectType)) return <span>The project type does not exist</span>

  const project = PROJECTS[projectType as keyof typeof PROJECTS].find(project => (project.id === projectId))

  if (!project) return <span>No project with this name</span>

  return (
    <Project project={project} />
  )
}
