/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { PROJECTS } from '@/utils/projects'

type ProjectPageProps = {
  params: { projectId: string, projectType: string }
}

export default function ProjectPage({ params: { projectType, projectId } }: ProjectPageProps) {
  if (!Object.keys(PROJECTS).includes(projectType)) return <span>The project type does not exist</span>

  const project = PROJECTS[projectType as keyof typeof PROJECTS].find(project => (project.id === projectId))

  if (!project) return <span>No project with this name</span>

  return (
    <div className="flex flex-col gap-2">
      <img width={120} height={120} src={`/projects/${projectType}/${projectId}/thumb.png`} />

      <div className="flex flex-1 flex-wrap gap-5">
        {
        project.images.map(image => <img width={120} height={120} key={image} src={`/projects/${projectType}/${projectId}/${image}`} />)
      }
      </div>
    </div>
  )
}
