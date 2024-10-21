'use client'

import { IProject } from '@/types'
import { useSearchContext } from '../../contexts/search.context'
import { getProjectsSortedByDate } from '@/utils/functions/getProjectsSorted'
import { ProjectCard } from './components'
import { useState } from 'react'
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react'
import { PropsWithLocale } from '@/types/language'

type ProjectListProps = {
  projects: IProject[]
  translation: {
    readMore: string
  }
}
const PAGES_NUMBER = 6

export function ProjectList({ projects, lang, translation }: PropsWithLocale<ProjectListProps>) {
  const { search } = useSearchContext()
  const [currentPage, setCurrentPage] = useState(0)

  const safeFilter = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const rg = new RegExp(`^(?=.*\\b${safeFilter}).*$`, 'gmi')

  const filteredProjects = search
    ? projects.filter(project => project.id.match(rg)).sort(getProjectsSortedByDate)
    : projects.sort(getProjectsSortedByDate)

  const pages = Array.from(Array(Math.ceil(filteredProjects.length / PAGES_NUMBER)).keys())

  return (
    <div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:min-h-[680px] lg:grid-cols-3">
        {
        filteredProjects.slice(currentPage * PAGES_NUMBER, currentPage * PAGES_NUMBER + PAGES_NUMBER).map(project => (
          <ProjectCard key={project.id} project={project} lang={lang} translation={translation} />
        ))
      }
      </div>

      { filteredProjects.length > PAGES_NUMBER && (
        <div className="mt-8 flex items-center justify-end gap-2">
          <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 0} type="button" className="rounded-full transition-all hover:enabled:text-on-layer-0-l1 disabled:cursor-not-allowed disabled:opacity-30">
            <LucideChevronLeft />
          </button>

          {pages.map(page => <button onClick={() => setCurrentPage(page)} type="button" className={`flex size-8 items-center justify-center rounded-full transition-all hover:bg-brand-hover-primary ${currentPage === page ? 'bg-brand-primary text-brand-on-primary' : ''}`} key={page}>{page + 1}</button>)}

          <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === pages.length - 1} type="button" className="rounded-full transition-all hover:enabled:text-on-layer-0-l1 disabled:cursor-not-allowed disabled:opacity-30">
            <LucideChevronRight />
          </button>
        </div>
      )}

    </div>
  )
}
