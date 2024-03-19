import { IProject } from '@/types'
import { LayoutPanelLeft, LucideCode2, PanelTop } from 'lucide-react'
import Link from 'next/link'
import { LinkBtn } from './components'
import { Ribbon } from '@/components'

type ProjectCardProps = {
  project: IProject
}
export function ProjectCard({ project }: ProjectCardProps) {
  const iconClassName = 'absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-on-primary'
  const linkPath = `/projects/${project.type.id}/${project.id}`
  const imagePath = `/projects/${project.type.id}/${project.id}`

  return (
    <div title={project.title.pt} className="relative flex h-80 w-60 flex-col rounded bg-layer-1 text-on-layer-1-l2 transition-all hover:scale-105">

      <Link href={linkPath} className="absolute left-0 top-0 h-full w-full" />

      <div className="relative min-h-[40%] overflow-hidden">
        <Link href={linkPath} className="absolute h-full w-full scale-110 bg-cover bg-center blur-sm" style={{ backgroundImage: `url(${imagePath}/thumb.png)` }} />
        <Link href={linkPath} className="absolute top-0 h-full w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${imagePath}/thumb.png)` }} />
      </div>

      <Ribbon
        href={`/projects/${project.type.id}`}
        bgColor={project.type.color.bg}
        textColor={project.type.color.text}
        title={project.type.title.en || ''}
      />

      <div className="relative">
        <div className="h-1 w-full bg-brand-primary" />

        <div className="absolute top-0 flex -translate-y-1/2 items-center gap-1">
          {
            project.site && (
              <LinkBtn title="Site" href={project.site} size={40}>
                <PanelTop className={iconClassName} />
              </LinkBtn>
            )
          }

          {
            project.github && (
              <LinkBtn title="Code source" href={project.github} size={30}>
                <LucideCode2 size={16} className={iconClassName} />
              </LinkBtn>
            )
          }

          {
            project.figma && (
              <LinkBtn title="Layout source" href={project.figma} size={30}>
                <LayoutPanelLeft size={16} className={iconClassName} />
              </LinkBtn>
            )
          }
        </div>

      </div>

      <div className="h-full px-4 pb-2 pt-4">
        <h2 title={project.title.pt} className="truncate font-title text-lg text-on-layer-1-l1">{project.title.pt}</h2>
        <p className="vertical-ellipsis mt-2 text-sm text-on-layer-1-l2">{project.description.pt}</p>
      </div>

      <span className="self-end px-4  py-2 text-sm">Read more...</span>
    </div>
  )
}
