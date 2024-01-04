import { IProject, TProjectType } from '@/types'
import { ProjectList, TypeFilter } from './components'
import { AVAILABLE_TYPE_PROJECTS, PROJECTS } from '@/utils/projects'
import { SearchProvider } from './contexts/search.context'

type ProjectsProps = {
  projectType?: string
}

function getAllProjects(availableProjects: TProjectType[]): IProject[] {
  let allProjects: IProject[] = []
  availableProjects.map(projectType => allProjects = [...allProjects, ...PROJECTS[projectType]])
  return allProjects
}

export function Projects({ projectType = '' }: ProjectsProps) {
  /*
    tags to style:
    h2, p, li, ul, ol, a, img
    em - italic ,
    i - italic,
    strong - bold,
    cite - italic
  */

  const isValidProjectType = AVAILABLE_TYPE_PROJECTS.some(type => projectType === type)

  const projects = projectType
    ? isValidProjectType
      ? PROJECTS[projectType as keyof typeof PROJECTS]
      : getAllProjects(AVAILABLE_TYPE_PROJECTS)
    : getAllProjects(AVAILABLE_TYPE_PROJECTS)

  return (
    <SearchProvider>
      <main className="m-auto flex min-h-screen w-full max-w-5xl flex-col items-center">
        <TypeFilter projectType={isValidProjectType ? projectType as TProjectType : null} />
        <ProjectList projects={projects} />
      </main>
    </SearchProvider>
  )
}
