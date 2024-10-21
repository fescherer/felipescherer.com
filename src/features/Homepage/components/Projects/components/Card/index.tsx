import { IProject } from '@/types'
import Link from 'next/link'

type CardProps = {
  project: IProject
}

export function Card({ project }: CardProps) {
  const imagePath = `/projects/${project.type.id}/${project.id}`

  return (
    <Link href={`/projects/${project.id}`} className="group max-w-[350px]">
      {/* <div className="h-48 w-full overflow-hidden rounded bg-cover bg-center transition-all group-hover:scale-110" style={{ backgroundImage: `url(${imagePath}/thumb.png)` }} /> */}

      <div className="group relative h-48 overflow-hidden">
        <div className="absolute size-full scale-110 bg-cover bg-center blur-sm" style={{ backgroundImage: `url(${imagePath}/thumb.png)` }} />
        <div className="absolute top-0 size-full bg-contain bg-center bg-no-repeat transition-transform group-hover:scale-110" style={{ backgroundImage: `url(${imagePath}/thumb.png)` }} />
      </div>

      <h3 className="mt-4 font-title text-2xl font-semibold text-on-layer-0-l1 transition-all group-hover:text-brand-primary">
        {project.title.pt}
      </h3>

      <p className="text-sm transition-all group-hover:text-brand-primary">{project.description.pt}</p>
    </Link>
  )
}
