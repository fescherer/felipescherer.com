import { getDictionary } from '@/get-dictionary'
import { InstagramIcon } from '@/icons/social/instagram.icon'
import { LinkedinIcon } from '@/icons/social/linkedin.icon'
import { YoutubeIcon } from '@/icons/social/youtube.icon'
import { PropsWithLocale } from '@/types/language'
import Image from 'next/image'
import Link from 'next/link'

export async function FennecTalesComponent({ lang }: PropsWithLocale) {
  const dictionary = await getDictionary(lang)
  const t = dictionary['fennec-tales']
  return (
    <>
      <div className="max-w-sm">
        <h2 className="text-4xl leading-loose tracking-wider text-on-layer-0-l1">
          {t.title}
        </h2>

        <p>{t.text}</p>

        <div className="my-6 flex gap-4">
          <Link href="https://fennectales.com" className="btn btn-primary">{t['btn-blog']}</Link>
          <Link href="#contact" className="btn btn-secondary">{t['btn-contact']}</Link>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Image className="rounded" src="/blog.webp" width={1068} height={922} alt="Blog" />

        {/* TODO add tooltip */}
        <div className="flex gap-2">
          <Link target="_blank" href="https://youtube.com/@FennecTales" className="rounded-full bg-[#FF0000] p-2 text-[#fff] transition-all hover:brightness-90">
            <YoutubeIcon className="size-8" />
          </Link>

          <Link target="_blank" href="https://www.linkedin.com/company/fennec-tales-studio" className="rounded-full bg-[#0a66c2] p-2 text-[#fff] transition-all hover:brightness-90">
            <LinkedinIcon className="size-8" />
          </Link>

          <Link target="_blank" href="https://www.linkedin.com/company/fennec-tales-studio" className="rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] p-2 text-[#fff] transition-all hover:brightness-90">
            <InstagramIcon className="size-8" />
          </Link>
        </div>
      </div>

    </>
  )
}
