import { IProject } from '@/@data/projects.data'
import { ProjectCarrousel } from './project-carrousel.component'
import { Locale } from '@/lib/i18n/i18n-config'
import Link from 'next/link'
import { FigmaIcon, Github, LayoutTemplate } from 'lucide-react'

type ProjectPageProps = {
  project: IProject
  lang: Locale
}

export function ProjectPage({ project, lang }: ProjectPageProps) {
  const articleDate = new Date(project.date)
  const monthFormat = new Intl.DateTimeFormat(lang, {
    month: 'long',
  }).format
  const articleDateFormated = `${monthFormat(articleDate.getMonth())}, ${articleDate.getDate()}, ${articleDate.getFullYear()}`

  return (
    <div className="flex flex-col rounded-sm shadow-lg bg-base-100 border border-primary/30 z-0 relative h-full">
      <div className="flex justify-between p-4">
        <h2 className="font-title text-xl mb-4">{project.title}</h2>
        <time dateTime={articleDateFormated} className="flex justify-end capitalize text-xs text-primary/60 mb-2">{articleDateFormated}</time>
      </div>

      <div className="flex">
        <ProjectCarrousel project={project} />

        <div className="max-w-80 p-4 flex flex-col">
          <p className="flex-1 text-base-content/90">{project.description}</p>

          <div className="py-4 space-y-2">
            <p className="text-sm text-primary/60">Tags:</p>

            <div className="flex gap-2 pb-4 overflow-auto">
              {project.tags.map(item => (
                <div key={item} className="bg-base-300 border border-primary/50 px-2 py-1 rounded-full text-sm whitespace-nowrap">
                  {item}
                </div>
              ))}
            </div>

            <p className="text-sm text-primary/60">Links:</p>

            <div className="flex gap-2 pb-4">
              {
              project.links.site
                ? (
                  <Link target="_blank" className="flex gap-1 bg-primary/90 p-2 rounded text-primary-content hover:brightness-90 transition-all" href={project.links.site}>
                    <LayoutTemplate />
                    {' '}
                    Site
                  </Link>
                  )
                : ''
            }

              {
              project.links.figma
                ? (
                  <Link target="_blank" className="flex gap-1 bg-primary/90 p-2 rounded text-primary-content hover:brightness-90 transition-all" href={project.links.figma}>
                    <FigmaIcon />
                    {' '}
                    Layout
                  </Link>
                  )
                : ''
            }

              {
              project.links.github
                ? (
                  <Link target="_blank" className="flex gap-1 bg-primary/90 p-2 rounded text-primary-content hover:brightness-90 transition-all" href={project.links.github}>
                    <Github />
                    {' '}
                    Github
                  </Link>
                  )
                : ''
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
