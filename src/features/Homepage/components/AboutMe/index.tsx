import { getYearsOld } from '@/utils/functions/getYearsOld'
import { ContentWrapper } from '..'
import { OWNER_CONFIGS } from '@/utils/owner.config'
import Link from 'next/link'
import { SocialIcon } from '@/icons/Social/Social'
import { Carrousel } from './components'
import { ResumeSection } from '@/components'

export function AboutMe() {
  const yearsOld = getYearsOld()

  return (
    <ContentWrapper anchor="#blog" id="aboutme" index={1}>
      <Carrousel />

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

          <ResumeSection />
        </div>

        <div className="flex flex-row justify-center gap-2 self-start md:flex-col">
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
