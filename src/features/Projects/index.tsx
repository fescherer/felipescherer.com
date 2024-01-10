import { IProject, TProjectType } from '@/types'
import { ProjectList, TypeFilter } from './components'
import { AVAILABLE_TYPE_PROJECTS, PROJECTS } from '@/utils/projects'
import { SearchProvider } from './contexts/search.context'
import { Suspense } from 'react'

type ProjectsProps = {
  projectType?: string
}

function getAllProjects(availableProjects: TProjectType[]): IProject[] {
  let allProjects: IProject[] = []
  availableProjects.map(projectType => allProjects = [...allProjects, ...PROJECTS[projectType as keyof typeof PROJECTS]])
  return allProjects
}

export function Projects({ projectType = '' }: ProjectsProps) {
  const isValidProjectType = AVAILABLE_TYPE_PROJECTS.some(type => projectType === type)

  const projects = projectType
    ? isValidProjectType
      ? PROJECTS[projectType as keyof typeof PROJECTS]
      : getAllProjects(AVAILABLE_TYPE_PROJECTS)
    : getAllProjects(AVAILABLE_TYPE_PROJECTS)

  return (
    <SearchProvider>
      <main className="m-auto flex w-full max-w-5xl flex-col items-center gap-8">
        <TypeFilter projectType={isValidProjectType ? projectType as TProjectType : null} />

        <Suspense fallback={<p>Loading projects...</p>}>
          <ProjectList projects={projects} />
        </Suspense>
      </main>
    </SearchProvider>
  )
}
