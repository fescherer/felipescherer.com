'use client'

import { IProject } from '@/types'
import { LayoutPanelLeft, LucideChevronRight, LucideCode2, PanelTop } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type HeaderProps = {
  project: IProject
}

export function Header({ project }: HeaderProps) {
  const pathname = usePathname()

  const routes = pathname.split('/')
  const lastRoute = routes[routes.length - 1]
  const articleDate = new Date(project.date)

  return (
    <header>
      <div className="my-4 flex items-center gap-2 text-xs capitalize">
        <Link className="design-link text-on-layer-0-l2" href="/projects">Projects</Link>
        <LucideChevronRight size={16} />
        <Link className={`design-link ${project.type !== lastRoute ? 'text-on-layer-0-l2' : ''}`} href={`/projects/${project.type}`}>{project.type}</Link>
        <LucideChevronRight size={16} />
        <Link className={`design-link ${project.id !== lastRoute ? 'text-on-layer-0-l2' : ''}`} href={`/projects/${project.type}/${project.id}`}>{project.id}</Link>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {
          project.tags.map(tag => <small className="rounded-full border border-on-layer-0-l2 px-4 py-2" key={tag}>{tag}</small>)
        }
        </div>

        <span className="rounded-full bg-brand-primary px-4 py-2 capitalize text-brand-on-primary">
          {project.type}
        </span>
      </div>

      <div className="flex flex-col items-center justify-between md:flex-row">
        <h2 className="text-4xl uppercase">{project.title.pt}</h2>

        <div className="flex gap-2 self-end">
          {
            project.site && (
              <Link title="Project site" className="rounded-full bg-layer-1 p-1 transition-all hover:text-brand-primary" target="_blank" href={project.site}>
                <PanelTop />
              </Link>
            )
          }

          {
            project.github && (
              <Link title="Code source" className="rounded-full bg-layer-1 p-1 transition-all hover:text-brand-primary" target="_blank" href={project.github}>
                <LucideCode2 />
              </Link>
            )
          }

          {
            project.figma && (
              <Link title="Layout source" className="rounded-full bg-layer-1 p-1 transition-all hover:text-brand-primary" target="_blank" href={project.figma}>
                <LayoutPanelLeft />
              </Link>
            )
          }

        </div>
      </div>

      <time>{articleDate.toLocaleDateString()}</time>
      <p className="mt-4 text-sm">{project.description.pt}</p>
    </header>
  )
}
