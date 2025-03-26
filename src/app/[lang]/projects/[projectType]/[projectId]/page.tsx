// This page is supposed to act like a swipper of projects. It must have arrows to go to other projects, projects related and etc

import { Header } from '@/@components/project/header'
import { ProjectCarrousel } from '@/@components/project/project-carrousel.component'
import { getProjectsData } from '@/@data/projects.data'
import { Separator } from '@/lib/primitives'
import { getMetadata } from '@/@fn/getMetada'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Locale } from '@/lib/i18n/i18n-config'
import { Metadata } from 'next'

type ProjectPageProps = {
  params: { projectId: string, projectType: string, lang: Locale }
}

export async function generateMetadata(
  { params }: ProjectPageProps,
): Promise<Metadata> {
  const projects = await getProjectsData(params.lang)

  if (!Object.keys(projects).includes(params.projectType)) return getMetadata({
    defaultDescription: `Project not found`,
    defaultTitle: `Project Not Found`,
    canonicalURL: `/projects/${params.projectType}/${params.projectId}`,
    imagePath: '/thumb.webp',
    defaultAltImage: 'Felipe Scherer',
    defaultKeywords: ['projects'],
  })

  const project = projects.find(project => (project.id === params.projectId))

  if (!project) return getMetadata({
    defaultDescription: `Project not found`,
    defaultTitle: `Project Not Found`,
    canonicalURL: `/projects/${params.projectType}/${params.projectId}`,
    imagePath: '/thumb.webp',
    defaultAltImage: 'Felipe Scherer',
    defaultKeywords: ['projects'],
  })

  return getMetadata({
    defaultDescription: project.description ?? '',
    defaultTitle: project.title ?? '',
    canonicalURL: `/projects/${params.projectType}/${params.projectId}`,
    imagePath: `/projects/${project.type.id}/${project.id}`,
    defaultAltImage: project.title ?? '',
    defaultKeywords: [...project.tags],
  })
}

export default async function Project({ params: { projectId, lang } }: ProjectPageProps) {
  const PROJECTS = await getProjectsData(lang)
  const dictionary = await getDictionary(lang)

  const project = PROJECTS.find(project => (project.id === projectId))

  if (!project) return <span>{dictionary.project.notFound}</span>

  return (
    <div className="m-auto max-w-5xl p-4">
      <Header project={project} lang={lang} />
      <Separator />

      <p className="prose py-10 whitespace-pre-wrap">
        {project.description}
      </p>

      <ProjectCarrousel project={project} />
    </div>
  )
}
