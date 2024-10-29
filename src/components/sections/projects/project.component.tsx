import { IProject } from '@/types'
import { PropsWithLocale } from '@/types/language'
import Link from 'next/link'
import { ReactNode } from 'react'

type TProjectComponentPage = {
  project: IProject
  ribbon: ReactNode
}

export function ProjectComponent({ project, lang, ribbon }: PropsWithLocale<TProjectComponentPage>) {
  const imagePath = `/projects/${project.type.id}/${project.id}`
  const linkPath = `/projects/${project.type.id}/${project.id}`

  return (
    <div className="relative max-w-[350px]">

      <Link href={linkPath} className="group">

        <div className="group relative h-48 overflow-hidden">
          <div className="absolute size-full scale-110 bg-cover bg-center blur-sm" style={{ backgroundImage: `url(${imagePath}/thumb.png)` }} />
          <div className="absolute top-0 size-full bg-contain bg-center bg-no-repeat transition-transform group-hover:scale-110" style={{ backgroundImage: `url(${imagePath}/thumb.png)` }} />
        </div>

        <h3 className="mt-4 font-title text-xl font-semibold text-on-layer-0-l1 transition-all group-hover:text-brand-primary">
          {project.title[lang]}
        </h3>

        <p className="text-sm transition-all group-hover:text-brand-primary">{project.description[lang]}</p>
      </Link>

      {ribbon}
    </div>
  )
}
