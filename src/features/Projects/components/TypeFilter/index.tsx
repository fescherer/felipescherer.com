import { TProjectType } from '@/types'
import { SearchInput, SelectInput } from './components'
import Link from 'next/link'
import { AVAILABLE_TYPE_PROJECTS } from '@/utils/projects'

type TypeFilterProps = {
  projectType: TProjectType | null
}

export function TypeFilter({ projectType }: TypeFilterProps) {
  return (
    <>
      <nav className="flex w-full flex-col p-4 sm:flex-row sm:justify-between">
        <SelectInput projectType={projectType} />
        <SearchInput />

      </nav>

      <div className="flex gap-6">
        <Link href="/projects">all</Link>

        {
          AVAILABLE_TYPE_PROJECTS.map(type => <Link href={`/projects/${type}`} key={type}>{type}</Link>)
        }
      </div>
    </>
  )
}

/*

*/
