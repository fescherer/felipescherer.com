import { IProject } from '@/@data/projects.data'
import Image from 'next/image'
import Link from 'next/link'

type CardProps = {
  project: IProject
}

export async function Card({ project }: CardProps) {
  const linkPath = `/projects/${project.type.id}/${project.id}`
  const imagePath = `/projects/${project.type.id}/${project.id}`

  return (
    <Link href={linkPath} title={project.title} className="relative flex h-80 w-70 flex-col rounded-sm transition-all hover:scale-105 shadow-md bg-base-100 z-0">
      <Image className="w-full" src={`/projects/${project.type.id}/${project.id}/thumb.webp`} alt={project.title} width={400} height={400} />

      <div className="relative h-full overflow-hidden">
        <div className="absolute size-full scale-110 bg-cover bg-center blur-xs" style={{ backgroundImage: `url(${imagePath}/thumb.webp)` }} />
        <div className="w-full h-full absolute top-0 left-0 bg-black/50" />
        {/* <div className="absolute top-4 w-full h-1/2 bg-contain bg-top bg-no-repeat" style={{ backgroundImage: `url(${imagePath}/thumb.webp)` }} /> */}
      </div>

      <div className="absolute bottom-0 p-4 text-white backdrop-blur-lg">
        <h2 className="font-medium text-lg font-title pb-2">{project.title}</h2>
        <p className="vertical-ellipsis mt-2 text-sm text-on-layer-1-l2">{project.description}</p>
        <span className="text-sm">Read more...</span>
      </div>
    </Link>
  )
}
