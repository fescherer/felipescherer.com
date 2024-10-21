'use client'

import { BOOK_LIST } from '@/utils/aboutme/reading-books'
import { BookCard } from './BookCard'
import { useState } from 'react'
import { LucideChevronLeft, LucideChevronRight } from 'lucide-react'

const PAGES_NUMBER = 6

type BookListProps = {
  titleString: string
}

export function BookList({ titleString }: BookListProps) {
  const [currentPage, setCurrentPage] = useState(0)
  const pages = Array.from(Array(Math.ceil(BOOK_LIST.length / PAGES_NUMBER)).keys())

  return (
    <div className="my-6 space-y-6">
      <p>{titleString}</p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {
          BOOK_LIST.slice(currentPage * PAGES_NUMBER, currentPage * PAGES_NUMBER + PAGES_NUMBER).map(book => (
            <BookCard book={book} key={book.id} />
          ))
        }
      </div>

      { BOOK_LIST.length > PAGES_NUMBER && (
        <div className="mt-8 flex items-center justify-end gap-2">
          <button onClick={() => setCurrentPage(prev => prev - 1)} disabled={currentPage === 0} type="button" className="rounded-full transition-all hover:enabled:text-on-layer-0-l1 disabled:cursor-not-allowed disabled:opacity-30">
            <LucideChevronLeft />
          </button>

          {pages.map(page => <button onClick={() => setCurrentPage(page)} type="button" className={`flex size-8 items-center justify-center rounded-full transition-all hover:bg-brand-hover-primary ${currentPage === page ? 'bg-brand-primary text-brand-on-primary' : ''}`} key={page}>{page + 1}</button>)}

          <button onClick={() => setCurrentPage(prev => prev + 1)} disabled={currentPage === pages.length - 1} type="button" className="rounded-full transition-all hover:enabled:text-on-layer-0-l1 disabled:cursor-not-allowed disabled:opacity-30">
            <LucideChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}
