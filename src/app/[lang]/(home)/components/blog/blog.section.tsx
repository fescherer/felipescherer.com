import Image from 'next/image'
import Link from 'next/link'
import { OWNER_CONFIGS } from '@/utils/owner.config'
import { twMerge } from 'tailwind-merge'
import { getDictionary } from '@/get-dictionary'
import { PropsWithLocale } from '@/types/language'
import { ContentWrapperComponent } from '../content-wrapper.component'

export async function BlogSection({ lang }: PropsWithLocale) {
  const dictionary = await getDictionary(lang)

  return (
    <ContentWrapperComponent anchor="#projects" id="blog" index={2}>

      <div className="flex flex-col">
        <h2 className="mb-4 font-title text-4xl font-semibold tracking-wide text-on-layer-0-l1">{dictionary.homepage.blog.title}</h2>

        <p className="min-w-[300px]">
          {dictionary.homepage.blog.description}
          {' '}

          <Link className="design-link" href={`mailto:${OWNER_CONFIGS.email}`}>
            {dictionary.homepage.blog.myEmail}
          </Link>
          .
        </p>

        <Link href={OWNER_CONFIGS.blog_link} target="_blank" className={twMerge('design-btn', 'mt-4 self-center md:self-start px-4')}>{dictionary.homepage.blog.checkMyBlog}</Link>
      </div>

      <Image className="rounded" alt="blog preview" src="/misc/blog.png" width={1029 * 0.6} height={886 * 0.6} />

    </ContentWrapperComponent>
  )
}
