import { IProject, TProjectType } from '@/@types'
import { AVAILABLE_TYPE_PROJECTS, PROJECTS } from '@/lib/_felipescherer.com/projects'
import { Suspense } from 'react'
import { PropsWithLocale } from '@/@types/language'
import { SearchProvider } from './context/search.context'
import { TypeFilter } from './components/type-filter/type-filter'
import { ProjectList } from './components/project-list/project-list.component'

type ProjectsProps = {
  projectType?: string
}

function getAllProjects(availableProjects: TProjectType[]): IProject[] {
  let allProjects: IProject[] = []
  availableProjects.map(projectType => allProjects = [...allProjects, ...PROJECTS[projectType as keyof typeof PROJECTS]])
  return allProjects
}

export async function Projects({ projectType = '', lang }: PropsWithLocale<ProjectsProps>) {
  const isValidProjectType = AVAILABLE_TYPE_PROJECTS.some(type => projectType === type)

  const projects = projectType
    ? isValidProjectType
      ? PROJECTS[projectType as keyof typeof PROJECTS]
      : getAllProjects(AVAILABLE_TYPE_PROJECTS)
    : getAllProjects(AVAILABLE_TYPE_PROJECTS)

  return (
    <SearchProvider>
      <div className="m-auto flex w-full max-w-5xl flex-col items-center gap-8 mt-10">
        <div>
          <TypeFilter projectType={isValidProjectType ? projectType as TProjectType : null} lang={lang} />

          <Suspense fallback={<p>...</p>}>
            <ProjectList projects={projects} lang={lang} />
          </Suspense>
        </div>
      </div>
    </SearchProvider>
  )
}
