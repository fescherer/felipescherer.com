import { Dialog, Separator } from '@/lib/_felipescherer.com/components/primitives'
import { PropsWithLocale } from '@/@types/language'
import { IProject } from '@/lib/_felipescherer.com/data/projects.data'
import Link from 'next/link'
import { ProjectCarrousel } from './project-carrousel'
import { LayoutPanelLeft, LucideCode2, PanelTop } from 'lucide-react'

type ProjectCardProps = {
  project: IProject
}

export function ProjectCard({ project, lang }: PropsWithLocale<ProjectCardProps>) {
  const imagePath = `/projects/${project.type.id}/${project.id}`

  const articleDate = new Date(project.date)
  const monthFormat = new Intl.DateTimeFormat(lang, {
    month: 'long',
  }).format
  const articleDateFormated = `${monthFormat(articleDate.getMonth())}, ${articleDate.getDate()}, ${articleDate.getFullYear()}`

  return (
    <Dialog
      classContent="max-w-[1200px]"
      trigger={(
        <button type="button" title={project.title.pt} className="relative flex h-72 w-60 flex-col rounded-sm bg-layer-1 text-on-layer-1-l2 transition-all hover:scale-105">

          <div className="relative min-h-[60%] overflow-hidden rounded-sm">
            <div className="absolute size-full scale-110 bg-cover bg-center blur-xs" style={{ backgroundImage: `url(${imagePath}/thumb.webp)` }} />
            <div className="absolute top-0 size-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${imagePath}/thumb.webp)` }} />
          </div>

          <div className="h-full px-4 pb-2 pt-4">
            <h2 title={project.title[lang]} className="font-title text-lg text-on-layer-1-l1">{project.title[lang]}</h2>
          </div>
        </button>
      )}
    >
      <div className="flex flex-col gap-4 lg:flex-row">
        <ProjectCarrousel project={project} />

        <div className="flex w-full flex-col p-2">
          <h2 className="text-4xl text-on-layer-0-l1">{project.title[lang]}</h2>

          <div className="flex justify-between">
            <time dateTime={articleDateFormated} className="capitalize">{articleDateFormated}</time>

          </div>

          <Separator dataOrientation="horizontal" className="bg-on-layer-0-l2" />

          <div className="relative h-96 max-h-96 flex-1 space-y-4 overflow-scroll">
            {project.description[lang].split('\n').map((p, index) => (
              <p key={index}>{p}</p>
            ))}

            <div className="pointer-events-none sticky inset-x-0 bottom-0 h-12 bg-linear-to-b from-transparent to-layer-1" />
          </div>

          <div className="flex items-center gap-4">
            {project.links.figma
              ? (
                <Link target="_blank" className="flex items-center gap-2 transition-all hover:text-on-layer-0-l1" href={project.links.figma}>
                  <PanelTop size={16} />
                  {' '}
                  Figma
                </Link>
                )
              : null}

            {project.links.github
              ? (
                <Link target="_blank" className="flex items-center gap-2 transition-all hover:text-on-layer-0-l1" href={project.links.github}>
                  <LucideCode2 size={16} />
                  {' '}
                  Code
                </Link>
                )
              : null}

            {project.links.site
              ? (
                <Link target="_blank" className="flex items-center gap-2 transition-all hover:text-on-layer-0-l1" href={project.links.site}>
                  <LayoutPanelLeft size={16} />
                  Site
                </Link>
                )
              : null}
          </div>
        </div>
      </div>
    </Dialog>
  )
}
