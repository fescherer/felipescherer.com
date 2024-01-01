import { getYearsOld } from '@/utils/functions/getYearsOld'
import { ContentWrapper } from '..'
import { OWNER_CONFIGS } from '@/utils/owner.config'
import Link from 'next/link'
import { SocialIcon } from '@/icons/Social/Social'
import { Resume } from './components'

const photos = [
  'bg-[url(/felipe-scherer/big-shoes.webp)]',
  'bg-[url(/felipe-scherer/black-white.webp)]',
  'bg-[url(/felipe-scherer/coconout.webp)]',
  'bg-[url(/felipe-scherer/dark-side.webp)]',
  'bg-[url(/felipe-scherer/photo-flower.webp)]',
]

export function AboutMe() {
  const yearsOld = getYearsOld()

  return (
    <ContentWrapper anchor="#blog" id="aboutme">
      <div className={`${photos[4]} h-[410px] min-w-[316px] bg-layer-1 bg-cover`} />

      <div className="flex h-full max-w-[600px] flex-col gap-4 md:flex-row">
        <div className="flex h-full flex-col">
          <h2 className="mb-4 font-title text-4xl font-semibold tracking-wide text-on-layer-0-l1">About Me</h2>

          <p className="flex-1 text-justify text-base">
            Hello! My name is Felipe Scherer,
            {` ${yearsOld} `}
            {' '}
            years old
            and a developer 🤓. Currently working with web development (ReactJS - NextJS - NodeJS) and game development (Unreal Engine). Sometimes creating content for internet 😊. You can find mostly of my projects on my
            {' '}
            <Link className="design-link" href={OWNER_CONFIGS.github_link}>Github&apos;s Page</Link>
            .
          </p>

          <p>
            Find more about me
            {' '}
            <Link className="design-link" href="/aboutme">here</Link>
            .
          </p>

          <Resume />
        </div>

        <div className="flex flex-row justify-center gap-2 md:flex-col">
          <Link href={OWNER_CONFIGS.github_link} type="button" className="rounded">
            <SocialIcon type="github" />
          </Link>

          <Link href={OWNER_CONFIGS.linkedin_link} type="button" className="rounded">
            <SocialIcon type="linkedin" />
          </Link>
        </div>
      </div>
    </ContentWrapper>
  )
}
