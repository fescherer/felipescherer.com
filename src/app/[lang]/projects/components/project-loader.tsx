import { SearchProvider } from '@/features/Projects/contexts/search.context'
// import { getDictionary } from "@/get-dictionary"
import { PropsWithLocale } from '@/@types/language'
import { PROJECTS } from '@/lib/_felipescherer.com/data/projects.data'
import { AVAILABLE_TYPE_PROJECTS } from '@/lib/_felipescherer.com/projects'
import { Suspense } from 'react'
import { ProjectList } from './project-list'

type ProjectsProps = {
  projectType?: string
}

export async function ProjectLoader({ projectType = '', lang }: PropsWithLocale<ProjectsProps>) {
  // const dictionary = await getDictionary(lang)

  const isValidProjectType = AVAILABLE_TYPE_PROJECTS.some(type => projectType === type)

  const projects = projectType
    ? isValidProjectType
      ? PROJECTS.filter(project => (project.type.id === projectType))
      : PROJECTS
    : PROJECTS

  return (
    <SearchProvider>
      <main className="m-auto flex w-full max-w-5xl flex-col items-center gap-8">
        {/* <TypeFilter projectType={isValidProjectType ? projectType as TProjectType : null} lang={lang} /> */}

        <Suspense fallback={<p>...</p>}>
          <ProjectList projects={projects} lang={lang} />
        </Suspense>
      </main>
    </SearchProvider>
  )
}
