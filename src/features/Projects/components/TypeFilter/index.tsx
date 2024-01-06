import { TProjectType } from '@/types'
import { SearchInput, SelectInput } from './components'

type TypeFilterProps = {
  projectType: TProjectType | null
}

export function TypeFilter({ projectType }: TypeFilterProps) {
  return (
    <nav className="flex w-full flex-col gap-2 p-4 sm:flex-row sm:justify-between">
      <SelectInput projectType={projectType} />
      <SearchInput />
    </nav>
  )
}
