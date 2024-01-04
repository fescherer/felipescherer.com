'use client'

import { IProject } from '@/types'
import { useSearchContext } from '../../contexts/search.context'
import { getProjectsSortedByDate } from '@/utils/functions/getProjectsSorted'

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
    <div>
      {
        filteredProjects.map(project => (
          <div key={project.id}>
            <span>{project.id}</span>
          </div>
        ))
      }
    </div>
  )
}
