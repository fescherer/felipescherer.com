import { IProject } from '@/types'

type ProjectListProps = {
  projects: IProject[]
}

export function ProjectList({ projects }: ProjectListProps) {
  return (
    <div>
      {
        projects.map(project => (
          <div key={project.id}>
            <span>{project.id}</span>
          </div>
        ))
      }
    </div>
  )
}
