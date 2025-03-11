'use client'

import { useSearchContext } from '@/features/Projects/contexts/search.context'
import { PropsWithLocale } from '@/@types/language'
import { IProject } from '@/lib/_felipescherer.com/data/projects.data'
import { useState } from 'react'
import { ProjectCard } from './project-card'
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react'

type ProjectListProps = {
  projects: IProject[]
}
const PAGES_NUMBER = 6

function getProjectsSortedByDate(ProjectA: IProject, ProjectB: IProject) {
  const dateProjectA = new Date(ProjectA?.date)
  const dateProjectB = new Date(ProjectB?.date)

  if (dateProjectA > dateProjectB)
    return -1

  if (dateProjectA < dateProjectB)
    return 1

  return 0
}

export function ProjectList({ projects, lang }: PropsWithLocale<ProjectListProps>) {
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
      <div className="my-10 grid grid-cols-1 gap-10 sm:grid-cols-2 md:min-h-[680px] lg:grid-cols-3">
        {
      filteredProjects.slice(currentPage * PAGES_NUMBER, currentPage * PAGES_NUMBER + PAGES_NUMBER).map(project => (
        <ProjectCard key={project.id} project={project} lang={lang} />
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
