'use client'

import { Ribbon } from '@/components/primitives'
import { IProject } from '@/types'
import { PropsWithLocale } from '@/types/language'
import { LayoutPanelLeft, LucideChevronRight, LucideCode2, PanelTop } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

type HeaderProps = {
  project: IProject
  translation: {
    title: string
  }
}

export function Header({ project, lang, translation }: PropsWithLocale<HeaderProps>) {
  const linkPath = `/projects/${project.type.id}`
  const pathname = usePathname()

  const routes = pathname.split('/')
  const lastRoute = routes[routes.length - 1]

  const articleDate = new Date(project.date)
  const monthFormat = new Intl.DateTimeFormat('us', {
    month: 'long',
  }).format
  const articleDateFormated = `${monthFormat(articleDate.getMonth())}, ${articleDate.getDate()}, ${articleDate.getFullYear()}`

  return (
    <header>
      <div className="my-4 flex items-center gap-2 text-xs capitalize">
        <Link className="design-link text-on-layer-0-l2" href="/projects">{translation.title}</Link>
        <LucideChevronRight size={16} />
        <Link className={`design-link ${project.type.title[lang] !== lastRoute ? 'text-on-layer-0-l2' : ''}`} href={linkPath}>{project.type.title[lang]}</Link>
        <LucideChevronRight size={16} />
        <Link className={`design-link ${project.id !== lastRoute ? 'text-on-layer-0-l2' : ''}`} href={`${linkPath}/${project.id}`}>{project.id}</Link>
      </div>

      <div className="relative flex items-center justify-between">
        <div className="flex flex-wrap gap-2 text-xs">
          {
          project.tags.map(tag => <small className="rounded-full border border-layer-1 px-2 py-1 text-on-layer-0-l2" key={tag}>{tag}</small>)
        }
        </div>

        <Ribbon
          href={`/projects/${project.type.id}`}
          bgColor={project.type.color.bg}
          textColor={project.type.color.text}
          title={project.type.title[lang] || ''}
        />

      </div>

      <div className="flex flex-col items-center justify-between md:flex-row">
        <h2 className="font-title text-4xl uppercase text-on-layer-0-l1">{project.title[lang]}</h2>

        <div className="flex gap-2 self-end">
          {
            project.site && (
              <Link title="Project site" className="rounded-full bg-layer-1 p-2 transition-all hover:text-brand-primary" target="_blank" href={project.site}>
                <PanelTop size={16} />
              </Link>
            )
          }

          {
            project.github && (
              <Link title="Code source" className="rounded-full bg-layer-1 p-2 transition-all hover:text-brand-primary" target="_blank" href={project.github}>
                <LucideCode2 size={16} />
              </Link>
            )
          }

          {
            project.figma && (
              <Link title="Layout source" className="rounded-full bg-layer-1 p-2 transition-all hover:text-brand-primary" target="_blank" href={project.figma}>
                <LayoutPanelLeft size={16} />
              </Link>
            )
          }

        </div>
      </div>

      <time dateTime={articleDateFormated} className="capitalize">{articleDateFormated}</time>
      <p className="mt-4 text-sm">{project.description[lang]}</p>
    </header>
  )
}
