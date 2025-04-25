import { TProjectType } from '@/@types'
import { Suspense } from 'react'
import { PropsWithLocale } from '@/@types/language'
import { SearchProvider } from './context/search.context'
import { TypeFilter } from './components/type-filter/type-filter'
import { ProjectList } from './components/project-list/project-list.component'
import { getProjectsData } from '@/@data/projects.data'
import { AVAILABLE_TYPE_PROJECTS } from '@/@data/project-type.data'
import { ProjectSkeleton } from './components/skeleton.component'
import { OpacityMotion } from '../motion/opacity-motion.component'

type ProjectsProps = {
  projectType?: string
}

export async function Projects({ projectType = '', lang }: PropsWithLocale<ProjectsProps>) {
  const PROJECTS = await getProjectsData(lang)

  const isValidProjectType = AVAILABLE_TYPE_PROJECTS.some(type => projectType === type)

  const projects = projectType ? isValidProjectType ? PROJECTS.filter(project => project.type.id === projectType) : PROJECTS : PROJECTS

  return (
    <SearchProvider>
      <OpacityMotion
        className="m-auto flex w-full max-w-5xl flex-col items-center gap-8 mt-10"
      >
        <div className="w-full">
          <TypeFilter projectType={isValidProjectType ? projectType as TProjectType : null} lang={lang} />

          <Suspense fallback={<ProjectSkeleton />}>
            <ProjectList projects={projects} lang={lang} />
          </Suspense>
        </div>
      </OpacityMotion>
    </SearchProvider>
  )
}
