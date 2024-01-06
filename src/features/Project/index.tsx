import { IProject } from '@/types'
import { Header, ProjectCarrousel } from './components'
import { Separator } from '@/components'

type ProjectProps = {
  project: IProject
}

export async function Project({ project }: ProjectProps) {
  return (
    <div className="m-auto max-w-5xl p-4">
      <Header project={project} />
      <Separator />
      <ProjectCarrousel project={project} />
      <div className="prose py-10" dangerouslySetInnerHTML={{ __html: project.text.pt || '' }} />
    </div>
  )
}
