'use client'

import { useSearchContext } from '@/features/Projects/contexts/search.context'

type SearchInputProps = {
  placeholder: string
}

export function SearchInput({ placeholder }: SearchInputProps) {
  const { search, setSearch } = useSearchContext()

  return (
    <input type="search" onChange={e => setSearch(e.target.value)} placeholder={placeholder} className={`flex w-full items-center justify-between overflow-hidden rounded-sm border  bg-layer-0 px-2 py-1 text-sm transition-all sm:w-52 ${search ? 'text-brand-primary' : 'text-on-layer-0-l2'} ${search ? 'border-brand-primary hover:border-brand-hover-primary hover:text-brand-hover-primary' : 'border-layer-1 hover:border-on-layer-0-l1'}`} />
  )
}
