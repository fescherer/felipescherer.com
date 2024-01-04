import { IProject, TProjectType } from '@/types'
import { ProjectList, TypeFilter } from './components'
import { PROJECTS } from '@/utils/projects'

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

  const availableProjectType = Object.keys(PROJECTS)
  const isValidProjectType = availableProjectType.includes(projectType)

  const projects = projectType
    ? isValidProjectType
      ? PROJECTS[projectType as keyof typeof PROJECTS]
      : getAllProjects(availableProjectType as TProjectType[])
    : getAllProjects(availableProjectType as TProjectType[])

  return (
    <main className="m-auto flex min-h-screen w-full max-w-5xl flex-col items-center">
      <TypeFilter />
      <ProjectList projects={projects} />
    </main>
  )
}
