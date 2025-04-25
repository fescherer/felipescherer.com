import { IProject } from '@/@data/projects.data'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'

type NavigationProps = {
  prevNext: IProject[]
  translation: {
    next: string
    previous: string
  }
}

export async function Navigation({ prevNext, translation }: NavigationProps) {
  return (
    <div className="flex justify-between px-2 py-4 text-primary/60 md:hidden text-sm">
      <Link href={`/projects/${prevNext[0].type.id}/${prevNext[0].id}`} className="flex gap-1 items-center hover:text-primary transition-all cursor-pointer">
        <ChevronLeft size={18} />
        {translation.previous}
      </Link>

      <Link href={`/projects/${prevNext[1].type.id}/${prevNext[1].id}`} className="flex gap-1 items-center hover:text-primary transition-all cursor-pointer">
        {translation.next}
        <ChevronRight size={18} />
      </Link>
    </div>
  )
}
