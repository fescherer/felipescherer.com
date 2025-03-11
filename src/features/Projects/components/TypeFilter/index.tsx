import { TProjectType } from '@/@types'
import { SearchInput, SelectInput } from './components'
import { PropsWithLocale } from '@/@types/language'
import { getDictionary } from '@/lib/i18n/get-dictionary'

type TypeFilterProps = {
  projectType: TProjectType | null
}

export async function TypeFilter({ projectType, lang }: PropsWithLocale<TypeFilterProps>) {
  const dictionary = await getDictionary(lang)

  return (
    <nav className="flex w-full flex-col gap-2 p-4 sm:flex-row sm:justify-between">
      <SelectInput projectType={projectType} placeholder={dictionary.projects.placeholder.search} />
      <SearchInput placeholder={dictionary.projects.placeholder.type} />
    </nav>
  )
}
