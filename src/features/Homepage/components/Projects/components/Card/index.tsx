import { IProject } from '@/types'
import Link from 'next/link'

type CardProps = {
  project: IProject
}

export function Card({ project }: CardProps) {
  return (
    <Link href={`/projects/${project.id}`} className="group max-w-[400px]">
      <div className="h-32 w-32 overflow-hidden rounded bg-cover bg-center transition-all group-hover:scale-110" style={{ backgroundImage: `url(${project.type}/${project.id}/thumb.png)` }} />

      <h3 className="mt-4 font-title text-2xl font-semibold text-on-layer-0-l1 transition-all group-hover:text-brand-primary">
        {project.title.pt}
      </h3>

      <p className="text-sm transition-all group-hover:text-brand-primary">{project.description.pt}</p>
    </Link>
  )
}
