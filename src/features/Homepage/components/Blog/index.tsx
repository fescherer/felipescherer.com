import Image from 'next/image'
import { ContentWrapper } from '..'
import Link from 'next/link'
import { OWNER_CONFIGS } from '@/utils/owner.config'
import { twMerge } from 'tailwind-merge'

export function Blog() {
  return (
    <ContentWrapper anchor="#projects" id="blog" index={2}>

      <div className="flex flex-col">
        <h2 className="mb-4 font-title text-4xl font-semibold tracking-wide text-on-layer-0-l1">Blog</h2>

        <p className="min-w-[300px]">
          Sometimes I like to create articles about what I learned or just to share what I am thinking. Feel free to check it out. And of course, you can leave suggestions for next blogs in
          {' '}

          <Link className="design-link" href={`mailto:${OWNER_CONFIGS.email}`}>
            my email
          </Link>
          .
        </p>

        <Link href={OWNER_CONFIGS.blog_link} target="_blank" className={twMerge('design-btn', 'mt-4 self-center md:self-start px-4')}>Check my blog</Link>
      </div>

      <Image className="rounded" alt="blog preview" src="/misc/blog.png" width={1029 * 0.6} height={886 * 0.6} />

    </ContentWrapper>
  )
}
