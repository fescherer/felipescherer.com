import { IProject } from '@/@types'
import { PropsWithLocale } from '@/@types/language'
import Link from 'next/link'

type CardProps = {
  project: IProject
}

export async function Card({ project, lang }: PropsWithLocale<CardProps>) {
  const linkPath = `/projects/${project.type.id}/${project.id}`
  const imagePath = `/projects/${project.type.id}/${project.id}`

  return (
    <Link href={linkPath} title={project.title.pt} className="relative flex h-80 w-70 flex-col rounded-sm transition-all hover:scale-105 shadow-md bg-base-100 z-0">

      <div className="relative h-full overflow-hidden">
        <div className="absolute size-full scale-110 bg-cover bg-center blur-xs" style={{ backgroundImage: `url(${imagePath}/thumb.webp)` }} />
        <div className="absolute top-4 size-full bg-contain bg-top bg-no-repeat" style={{ backgroundImage: `url(${imagePath}/thumb.webp)` }} />
        <div className="w-full h-full absolute top-0 left-0 bg-black/50" />
      </div>

      <div className="absolute bottom-0 p-4 text-white">
        <h2 className="font-medium text-lg font-title pb-2">{project.title[lang]}</h2>
        <p className="mb-4">{project.description[lang]}</p>
        <span className="text-sm">Read more...</span>
      </div>
    </Link>
  )
}
