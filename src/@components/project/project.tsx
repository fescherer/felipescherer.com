// This page is supposed to act like a swipper of projects. It must have arrows to go to other projects, projects related and etc

import { PROJECTS } from '@/@data/projects'
import { Separator } from '@/lib/_felipescherer.com/components/primitives'
import { getMetadata } from '@/lib/_felipescherer.com/functions/getMetada'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Locale } from '@/lib/i18n/i18n-config'
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

  const project = PROJECTS.find(project => (project.id === params.projectId))

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

export async function Project({ params: { projectType, projectId, lang } }: ProjectPageProps) {
  const dictionary = await getDictionary(lang)

  if (!Object.keys(PROJECTS).includes(projectType)) return <span>{dictionary.project.notExist}</span>

  const project = PROJECTS.find(project => (project.id === projectId))

  if (!project) return <span>{dictionary.project.notFound}</span>

  return (
    <div className="m-auto max-w-5xl p-4">
      {/* <Header project={project} translation={translation} lang={lang} /> */}
      <Separator />
      {/* <ProjectCarrousel project={project} /> */}
      {/* <div className="prose py-10" dangerouslySetInnerHTML={{ __html: project.text[lang] || '' }} /> */}
    </div>
  )
}
