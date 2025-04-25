'use client'

import { useEffect, useState } from 'react'
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react'
import { PropsWithLocale } from '@/@types/language'
import { useSearchContext } from '../../context/search.context'
import { Card } from './components/card.component'
import { IProject } from '@/@data/projects.data'

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

export function ProjectList({ projects }: PropsWithLocale<ProjectListProps>) {
  const { search } = useSearchContext()
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    setCurrentPage(0)
  }, [search])

  const safeFilter = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const rg = new RegExp(`^(?=.*\\b${safeFilter}).*$`, 'gmi')

  const filteredProjects = search
    ? projects.filter(project => project.id.match(rg)).sort(getProjectsSortedByDate)
    : projects.sort(getProjectsSortedByDate)

  const pages = Array.from(Array(Math.ceil(filteredProjects.length / PAGES_NUMBER)).keys())

  const handleChange = (value: number, specificPage: boolean = false) => {
    if (specificPage) setCurrentPage(value)
    else
      setCurrentPage(prev => prev + value)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:min-h-[680px] lg:grid-cols-3 p-4">
        {
        filteredProjects.slice(currentPage * PAGES_NUMBER, currentPage * PAGES_NUMBER + PAGES_NUMBER).map(project => (
          <Card key={project.id} project={project} />
        ))
      }
      </div>

      { filteredProjects.length > PAGES_NUMBER && (
        <div className="mt-8 flex items-center justify-end gap-2">
          <button onClick={() => handleChange(-1)} disabled={currentPage === 0} type="button" className="rounded-full transition-all hover:enabled:text-accent hover:enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-30">
            <LucideChevronLeft />
          </button>

          {pages.map(page => <button onClick={() => handleChange(page, true)} type="button" className={`flex size-8 cursor-pointer items-center justify-center rounded-full transition-all hover:bg-accent hover:text-accent-content ${currentPage === page ? 'bg-primary text-primary-content' : ''}`} key={page}>{page + 1}</button>)}

          <button onClick={() => handleChange(1)} disabled={currentPage === pages.length - 1} type="button" className="rounded-full transition-all hover:enabled:text-accent hover:enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-30">
            <LucideChevronRight />
          </button>
        </div>
      )}

    </>
  )
}
