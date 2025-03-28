// This page is supposed to act like a swipper of projects. It must have arrows to go to other projects, projects related and etc

import { getProjectsData, IProject } from '@/@data/projects.data'
import { getMetadata } from '@/@fn/getMetada'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Locale } from '@/lib/i18n/i18n-config'
import { Metadata } from 'next'
import { ProjectPage } from '@/@components/project/project-page'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/clsx-tailwind-merge/cn.function'
import { ArrowLeft } from 'lucide-react'

type ProjectPageProps = {
  params: { projectId: string, projectType: string, lang: Locale }
}

export async function generateMetadata(
  { params }: ProjectPageProps,
): Promise<Metadata> {
  const projects = await getProjectsData(params.lang)

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

function getPrevNext(arr: IProject[], project: IProject) {
  let index = arr.indexOf(project)

  if (index === -1) return [arr[0], arr[1]]

  let prevItem = index === 0 ? arr[arr.length - 1] : arr[index - 1]
  let nextItem = index === arr.length - 1 ? arr[0] : arr[index + 1]

  return [prevItem, nextItem]
}

export default async function Project({ params: { projectId, lang } }: ProjectPageProps) {
  const PROJECTS = await getProjectsData(lang)
  const dictionary = await getDictionary(lang)

  const project = PROJECTS.find(project => (project.id === projectId))

  if (!project) return <span>{dictionary.project.notFound}</span>

  const prevNext = getPrevNext(PROJECTS, project)

  return (
    <div className="m-auto p-4 mt-12">
      <Link href="/projects" className="p-1 primary-link-effect">
        <ArrowLeft className="float-left" />
        {' '}
        {dictionary.project['back-to-project']}
      </Link>

      <div className="relative mt-6">
        {
          prevNext.map((item, index) => (
            <Link
              key={`prevItem-${item.id}`}
              href={`/projects/${item.type.id}/${item.id}`}
              className={cn('opacity-50 absolute top-1/2 -translate-y-1/2 h-4/5 flex rounded-sm shadow-lg p-2 bg-base-100 border border-primary/30  hover:opacity-100 hover:scale-110 transition-all cursor-pointer group', { '-right-10': index, '-left-10': !index })}
            >
              <Image className="blur-xs group-hover:blur-none" src={`${`/projects/${item.type.id}/${item.id}`}/thumb.webp`} width={600} height={400} alt="" />
            </Link>
          ))
        }

        <ProjectPage project={project} lang={lang} />
      </div>

    </div>
  )
}
