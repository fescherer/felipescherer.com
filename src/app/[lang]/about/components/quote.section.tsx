import { getDictionary } from '@/get-dictionary'
import { PropsWithLocale } from '@/types/language'

export async function QuoteSection({ lang }: PropsWithLocale) {
  const dictionary = await getDictionary(lang)

  return (
    <figure className="mx-auto my-8 max-w-screen-md text-center">
      <svg className="mx-auto mb-3 size-10 text-on-layer-0-l2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>

      <blockquote>
        <p className="text-2xl font-medium italic text-on-layer-0-l2">
          &quot;
          {dictionary['aboutme'].quote.quote}
          &quot;
        </p>
      </blockquote>

      <figcaption className="mt-6 flex items-center justify-center space-x-3 rtl:space-x-reverse">
        <div className="size-8 rounded-full border border-layer-2 bg-[url(https://www-cs-faculty.stanford.edu/~knuth/don.gif)] bg-cover bg-center" />

        <div className="flex items-center divide-x-2 divide-on-layer-0-l2 rtl:divide-x-reverse">
          <cite className="pe-3 font-medium text-on-layer-0-l2">Donald Knuth</cite>

          <cite className="ps-3 text-sm text-on-layer-0-l2">
            {dictionary['aboutme'].quote.author}
          </cite>
        </div>
      </figcaption>
    </figure>
  )
}
