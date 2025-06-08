import { YMotion } from '@/@components/motion/y-motion.component'
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
    <YMotion className="bg-base-200 overflow-hidden hover:scale-105  h-fit relative rounded transition-[scale] border-primary/30 border shadow-md">
      <Tooltip tooltip={project.title}>
        <Link href={linkPath} className="">
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
    </YMotion>
  )
}
