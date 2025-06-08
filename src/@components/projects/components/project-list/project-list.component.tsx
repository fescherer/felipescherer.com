'use client'

import { PropsWithLocale } from '@/@types/language'
import { useSearchContext } from '../../context/search.context'
import { Card } from './components/card.component'
import { IProject } from '@/@data/projects.data'
import { YMotion } from '@/@components/motion/y-motion.component'

type ProjectListProps = {
  projects: IProject[]
}

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

  const safeFilter = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const rg = new RegExp(`^(?=.*\\b${safeFilter}).*$`, 'gmi')

  const filteredProjects = search
    ? projects.filter(project => project.id.match(rg) || project.title.match(rg)).sort(getProjectsSortedByDate)
    : projects.sort(getProjectsSortedByDate)

  return (
    <>
      <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 md:min-h-[680px] lg:grid-cols-3 p-4">
        {
          filteredProjects.map(project => (
            <Card key={project.id} project={project} />
          ))
        }
      </div>
    </>
  )
}
