'use client'

import { IProject } from '@/types'
import { useSearchContext } from '../../contexts/search.context'
import { getProjectsSortedByDate } from '@/utils/functions/getProjectsSorted'
import { ProjectCard } from './components'

type ProjectListProps = {
  projects: IProject[]
}

export function ProjectList({ projects }: ProjectListProps) {
  const { search } = useSearchContext()

  const safeFilter = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const rg = new RegExp(`^(?=.*\\b${safeFilter}).*$`, 'gmi')

  const filteredProjects = search
    ? projects.filter(project => project.id.match(rg)).sort(getProjectsSortedByDate)
    : projects.sort(getProjectsSortedByDate)
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {
        filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))
      }
    </div>
  )
}
