import { IBookList } from '@/types'
import { LucideExternalLink, LucideStar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type BookCardProps = {
  book: IBookList
}

export function BookCard({ book }: BookCardProps) {
  return (
    <Link href={book.link} target="_blank" className={`group relative flex items-center gap-4 rounded p-2 ${book.isReading ? 'bg-layer-1' : ''}`}>

      <div className=" relative min-w-[80px] overflow-hidden">
        <Image src={`/books/${book.id}.jpg`} className="transition-all group-hover:scale-110" alt="" width={80} height={80} />
        <LucideExternalLink size={24} className="absolute right-0 top-0 rounded-bl-lg bg-layer-1 p-1" />
      </div>

      <div className="flex flex-col">
        <h3 className="text-on-layer-0-l1 group-hover:underline">{book.title}</h3>

        <small className="divide-x divide-on-layer-0-l3 transition-all">
          {book.authors.map(author => (
            <span className="first:pr-2 [&:not(:first-child)]:px-2" key={author}>{author}</span>
          ))}
        </small>

        {book.isReading && <p className="my-2 rounded-full bg-brand-primary px-4 py-2 text-sm text-brand-on-primary">Reading</p>}

        {
          book.rate && (
            <div className="my-2 flex gap-1" title={book.rate.toString()}>
              {Array.from(Array(book.rate).keys()).map(rate => <LucideStar className="text-[#ffe234]" key={rate} size={14} />)}
              {Array.from(Array(5 - book.rate).keys()).map(rate => <LucideStar key={rate} size={14} />)}
            </div>
          )
        }

      </div>
    </Link>
  )
}
