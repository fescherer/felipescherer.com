'use client'

import { useSearchContext } from '@/@components/projects/context/search.context'

type SearchInputProps = {
  placeholder: string
}

export function SearchInput({ placeholder }: SearchInputProps) {
  const { search, setSearch } = useSearchContext()

  return (
    <input type="search" onChange={e => setSearch(e.target.value)} placeholder={placeholder} className={`flex w-full items-center justify-between overflow-hidden rounded-sm border  bg-base-100 px-2 py-1 text-sm transition-all sm:w-52 ${search ? 'border-accent' : 'border-primary/50 hover:border-primary text-base-content'}`} />
  )
}
