import Image from 'next/image'
import { CardWrapper } from './card-wrapper.component'
import Link from 'next/link'

export function BlogSection() {
  return (
    <CardWrapper id="blog">
      <div className="max-w-sm">
        <h2 className="text-4xl leading-loose tracking-wider text-on-layer-0-l1">
          Fennec Tales Studio
        </h2>

        <p>From time to time, I enjoy sharing insights on topics I have learned or experiences from my professional journey, which I share on my blog. I welcome you to explore my posts and share any feedback or suggestions.</p>
      </div>

      <Link className="transition-all hover:brightness-90" href="https://fennectales.com" target="_blank">
        <Image className="rounded" src="/blog.png" width={1068} height={922} alt="Blog" />
      </Link>
    </CardWrapper>
  )
}
