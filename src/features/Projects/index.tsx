import { IProject, TProjectType } from '@/types'
import { ProjectList, TypeFilter } from './components'
import { AVAILABLE_TYPE_PROJECTS, PROJECTS } from '@/utils/projects'
import { SearchProvider } from './contexts/search.context'
import { Suspense } from 'react'
import { PropsWithLocale } from '@/types/language'
import { getDictionary } from '@/get-dictionary'

type ProjectsProps = {
  projectType?: string
}

function getAllProjects(availableProjects: TProjectType[]): IProject[] {
  let allProjects: IProject[] = []
  availableProjects.map(projectType => allProjects = [...allProjects, ...PROJECTS[projectType as keyof typeof PROJECTS]])
  return allProjects
}

export async function Projects({ projectType = '', lang }: PropsWithLocale<ProjectsProps>) {
  const dictionary = await getDictionary(lang)

  const isValidProjectType = AVAILABLE_TYPE_PROJECTS.some(type => projectType === type)

  const projects = projectType
    ? isValidProjectType
      ? PROJECTS[projectType as keyof typeof PROJECTS]
      : getAllProjects(AVAILABLE_TYPE_PROJECTS)
    : getAllProjects(AVAILABLE_TYPE_PROJECTS)

  return (
    <SearchProvider>
      <main className="m-auto flex w-full max-w-5xl flex-col items-center gap-8">
        <TypeFilter projectType={isValidProjectType ? projectType as TProjectType : null} lang={lang} />

        <Suspense fallback={<p>...</p>}>
          <ProjectList projects={projects} lang={lang} translation={{ readMore: dictionary.projects['project-card']['read-more'] }} />
        </Suspense>
      </main>
    </SearchProvider>
  )
}
