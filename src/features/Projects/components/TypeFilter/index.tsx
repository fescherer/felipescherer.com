import { TProjectType } from '@/types'
import Link from 'next/link'

export function TypeFilter() {
  const availableTypes: TProjectType[] = ['original', 'coding-lesson', 'coding-week', 'college-lesson']

  return (
    <div className="flex gap-6">
      <Link href="/projects">all</Link>

      {
        availableTypes.map(type => <Link href={`/projects/${type}`} key={type}>{type}</Link>)
      }
    </div>
  )
}
