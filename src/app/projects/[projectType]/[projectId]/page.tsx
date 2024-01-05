/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Project } from '@/features/Project'
import { PROJECTS } from '@/utils/projects'

type ProjectPageProps = {
  params: { projectId: string, projectType: string }
}

export default function ProjectPage({ params: { projectType, projectId } }: ProjectPageProps) {
  if (!Object.keys(PROJECTS).includes(projectType)) return <span>The project type does not exist</span>

  const project = PROJECTS[projectType as keyof typeof PROJECTS].find(project => (project.id === projectId))

  if (!project) return <span>No project with this name</span>

  return (
    <Project project={project} />
  )
}
