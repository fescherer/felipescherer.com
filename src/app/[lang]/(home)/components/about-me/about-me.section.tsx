import { getYearsOld } from '@/utils/functions/getYearsOld'
import { OWNER_CONFIGS } from '@/utils/owner.config'
import Link from 'next/link'
import { SocialIcon } from '@/icons/social/Social'
import { getDictionary } from '@/get-dictionary'
import { PropsWithLocale } from '@/types/language'
import { ContentWrapperComponent } from '../content-wrapper.component'
import { ResumeSection } from './resume-download-button.component'

export async function AboutMeSection({ lang }: PropsWithLocale) {
  const dictionary = await getDictionary(lang)

  const yearsOld = getYearsOld()

  return (
    <ContentWrapperComponent anchor="#blog" id="aboutme" index={1}>
      <div className="relative overflow-hidden rounded-sm ">
        <div className="h-[410px] min-w-[316px] bg-layer-1 bg-[url(/felipe-scherer/photo-flower.webp)] bg-cover" />
      </div>

      <div className="flex h-full max-w-[600px] flex-col gap-4 md:flex-row">
        <div className="flex h-full flex-col">
          <h2 className="mb-4 font-title text-4xl font-semibold tracking-wide text-on-layer-0-l1">{dictionary.homepage.aboutme.title}</h2>

          <p className="flex-1 text-justify text-base">
            {dictionary.homepage.aboutme.hello}
            ,
            {` ${yearsOld} `}
            {' '}
            {dictionary.homepage.aboutme.yearsOld}
            {' '}
            {dictionary.homepage.aboutme.description}
            {' '}
            <Link className="design-link" href={OWNER_CONFIGS.github_link}>{dictionary.homepage.aboutme.githubPage}</Link>
            .
          </p>

          <p>
            {dictionary.homepage.aboutme.findMore}
            {' '}
            <Link className="design-link" href={`${lang}/aboutme`}>here</Link>
            .
          </p>

          <ResumeSection defaultLang={lang} translation={dictionary} />
        </div>

        <div className="flex flex-row justify-center gap-2 self-start md:flex-col">
          <Link href={OWNER_CONFIGS.github_link} type="button" className="rounded-sm">
            <SocialIcon type="github" />
          </Link>

          <Link href={OWNER_CONFIGS.linkedin_link} type="button" className="rounded-sm">
            <SocialIcon type="linkedin" />
          </Link>
        </div>
      </div>
    </ContentWrapperComponent>
  )
}
