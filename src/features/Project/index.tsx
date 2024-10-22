import { IProject } from '@/types'
import { Header, ProjectCarrousel } from './components'
import { PropsWithLocale } from '@/types/language'
import { Separator } from '@/components/primitives'

type ProjectProps = {
  project: IProject
  translation: {
    title: string
  }
}

export async function Project({ project, translation, lang }: PropsWithLocale<ProjectProps>) {
  return (
    <div className="m-auto max-w-5xl p-4">
      <Header project={project} translation={translation} lang={lang} />
      <Separator />
      <ProjectCarrousel project={project} />
      <div className="prose py-10" dangerouslySetInnerHTML={{ __html: project.text[lang] || '' }} />
    </div>
  )
}
