/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Project } from '@/features/Project'
import { getDictionary } from '@/get-dictionary'
import { Locale } from '@/i18n-config'
import { getMetadata } from '@/utils/functions/getMetada'
import { PROJECTS } from '@/utils/projects'
import { Metadata } from 'next'

type ProjectPageProps = {
  params: { projectId: string, projectType: string, lang: Locale }
}

export async function generateMetadata(
  { params }: ProjectPageProps,
): Promise<Metadata> {
  if (!Object.keys(PROJECTS).includes(params.projectType)) return getMetadata({
    defaultDescription: `Project not found`,
    defaultTitle: `Project Not Found`,
    canonicalURL: `/projects/${params.projectType}/${params.projectId}`,
    imagePath: '/thumb.webp',
    defaultAltImage: 'Felipe Scherer',
    defaultKeywords: ['projects'],
  })

  const project = PROJECTS[params.projectType as keyof typeof PROJECTS].find(project => (project.id === params.projectId))

  if (!project) return getMetadata({
    defaultDescription: `Project not found`,
    defaultTitle: `Project Not Found`,
    canonicalURL: `/projects/${params.projectType}/${params.projectId}`,
    imagePath: '/thumb.webp',
    defaultAltImage: 'Felipe Scherer',
    defaultKeywords: ['projects'],
  })

  return getMetadata({
    defaultDescription: project.description[params.lang] ?? '',
    defaultTitle: project.title[params.lang] ?? '',
    canonicalURL: `/projects/${params.projectType}/${params.projectId}`,
    imagePath: `/projects/${project.type.id}/${project.id}`,
    defaultAltImage: project.title[params.lang] ?? '',
    defaultKeywords: [...project.tags],
  })
}

export default async function ProjectPage({ params: { projectType, projectId, lang } }: ProjectPageProps) {
  const dictionary = await getDictionary(lang)

  if (!Object.keys(PROJECTS).includes(projectType)) return <span>{dictionary.project.notExist}</span>

  const project = PROJECTS[projectType as keyof typeof PROJECTS].find(project => (project.id === projectId))

  if (!project) return <span>{dictionary.project.notFound}</span>

  return (
    <Project project={project} translation={{ title: dictionary.projects['title-header'] }} lang={lang} />
  )
}
