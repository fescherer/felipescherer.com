'use client'

import { getYearsOld } from '@/lib/_felipescherer.com/functions/getYearsOld'
import { OWNER_CONFIGS } from '@/lib/_felipescherer.com/owner.config'
import Link from 'next/link'
import { SocialIcon } from '@/lib/icons/social/Social'
import { ContentWrapperComponent } from '../content-wrapper.component'
import { ResumeSection } from './resume-download-button.component'
import { motion } from 'framer-motion'

export function AboutMeSection({ lang, dictionary }: any) {
  const yearsOld = getYearsOld()

  return (
    <ContentWrapperComponent anchor="#blog" id="aboutme" index={1}>
      <motion.div
        className="relative overflow-hidden rounded-sm "
        initial={{ opacity: 0, y: 50 }} // Start hidden & below
        whileInView={{ opacity: 1, y: 0 }} // Animate when visible
        transition={{ duration: 0.6 }}
      >
        <div className="h-[410px] min-w-[316px] bg-layer-1 bg-[url(/felipe-scherer/photo-flower.webp)] bg-cover" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start hidden & below
        whileInView={{ opacity: 1, y: 0 }} // Animate when visible
        transition={{ duration: 0.6 }}
        className="flex h-full max-w-[600px] flex-col gap-4 md:flex-row"
      >

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
      </motion.div>
    </ContentWrapperComponent>
  )
}
