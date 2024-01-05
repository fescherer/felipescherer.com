import { IProject } from '@/types'
import { Header } from './components'
import { Separator } from '@/components'

type ProjectProps = {
  project: IProject
}

export function Project({ project }: ProjectProps) {
  /*
    tags to style:
    h2, p, li, ul, ol, a, img
    em - italic ,
    i - italic,
    strong - bold,
    cite - italic
  */

  return (
    <div className="m-auto max-w-5xl p-4">
      <Header project={project} />
      <Separator />

      <div className="flex flex-col gap-2">
        <img width={120} height={120} src={`/projects/${project.type}/${project.id}/thumb.png`} />

        <div className="flex flex-1 flex-wrap gap-5">
          {
      project.images.map(image => <img width={120} height={120} key={image} src={`/projects/${project.type}/${project.id}/${image}`} />)
    }
        </div>
      </div>

      <div dangerouslySetInnerHTML={{ __html: project.text.pt || '' }} />
    </div>
  )
}
