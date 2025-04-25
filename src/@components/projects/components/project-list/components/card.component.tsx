import { IProject } from '@/@data/projects.data'
import { Tooltip } from '@/lib/primitives'
import Link from 'next/link'

type CardProps = {
  project: IProject
}

export function Card({ project }: CardProps) {
  const linkPath = `/projects/${project.type.id}/${project.id}`
  const imagePath = `/projects/${project.type.id}/${project.id}`

  return (
    <Tooltip tooltip={project.title}>
      <Link href={linkPath} className="bg-base-200 h-fit overflow-hidden hover:scale-105 transition-all relative rounded border-primary/30 border shadow-md">
        <div className="absolute size-full scale-110 bg-cover bg-center blur-xs" style={{ backgroundImage: `url(${imagePath}/thumb.webp)` }} />

        <div className="h-50 relative">
          <div className="absolute top-0 w-full h-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${imagePath}/thumb.webp)` }} />
        </div>

        <div className="p-4 text-primary-content bg-primary/70 relative">
          <h2 className="font-medium text-lg text-ellipsis whitespace-nowrap overflow-hidden font-title pb-2">{project.title}</h2>
          <p className="vertical-ellipsis mt-2 text-sm mb-4">{project.description}</p>
          <span className="text-sm">Read more...</span>
        </div>

      </Link>
    </Tooltip>
  )
}
