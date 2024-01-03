import { IProject } from '@/types'
import Link from 'next/link'

type CardProps = {
  project: IProject
}

export function Card({ project }: CardProps) {
  // TODO adicionar isso ao objeto do projeto
  // eslint-disable-next-line no-unused-vars
  const bgs = [
    'bg-[url("/projects/original/pokedex/thumb.png")]',
    'bg-[url("/projects/original/portifolio-v2/thumb.png")]',
    'bg-[url("/projects/original/rpg/thumb.png")]',
    'bg-[url("/projects/original/rpg-v2/thumb.png")]',
  ]
  const bgURL = `bg-[url("/projects/${project.type}/${project.id}/thumb.png")]`

  return (
    <Link href={`/projects/${project.id}`} className="group max-w-[400px]">
      <div className={`h-32 w-32 ${bgURL} overflow-hidden rounded bg-cover bg-center transition-all group-hover:scale-110`} />

      <h3 className="mt-4 font-title text-2xl font-semibold text-on-layer-0-l1 transition-all group-hover:text-brand-primary">
        {project.title}
      </h3>

      <p className="text-sm transition-all group-hover:text-brand-primary">{project.description}</p>
    </Link>
  )
}
