import Link from 'next/link'
import { CardWrapper } from './card-wrapper.component'
import { LinkedinIcon } from '@/icons/social/linkedin.icon'
import { GithubIcon } from '@/icons/social/github.icon'
import { Separator } from '@/components'
import QRCode from 'react-qr-code'
import { LucideBadgeInfo, LucideCalendar, LucideUser } from 'lucide-react'
import { PropsWithLocale } from '@/types/language'
import { EXPERIENCES } from '@/utils/data/experiencies.data'
import Image from 'next/image'

function formatDate(start: string, end: string, monthFormat: any) {
  const formatStartDate = new Date(start)
  const formatEndDate = new Date(end)

  return `${monthFormat(formatStartDate)}, ${formatStartDate.getFullYear()} - ${monthFormat(formatEndDate)},  ${formatEndDate.getFullYear()}`
}

export function EducationSection({ lang }: PropsWithLocale) {
  const monthFormat = new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'pt-BR', {
    month: 'long',
  }).format

  return (
    <CardWrapper id="education">
      <div className="flex flex-col items-center md:max-w-[60%] md:items-start">
        <h2 className="text-4xl leading-tight tracking-wider text-on-layer-0-l1">Education & Experiences</h2>

        <p className="p">
          I hold a Bachelor&apos;s degree in
          <strong>
            {' '}
            Computer Science
            {' '}
          </strong>

          and multiple tech certifications. Currently, I&apos;m pursuing a postgraduate specialization in algorithms, building on
          <strong>
            {' '}
            over five years
            {' '}
          </strong>
          of experience in software development.
        </p>

        <h3 className="text-3xl leading-relaxed tracking-wider text-on-layer-0-l1">Experiences</h3>

        <ul className="list-disc space-y-4">
          {
              EXPERIENCES.map(experience => (
                <li key={experience.id} className="flex w-full flex-col justify-between gap-2 rounded border border-layer-1 p-4">
                  <div key={experience.id} className="flex items-center rounded ">
                    <Image src={experience.logo} alt={experience.img_showcase.alt[lang]} width={30} height={30} />
                    <h3>{experience.info.title}</h3>
                  </div>

                  <div className="flex flex-col gap-2 md:flex-row">
                    <div className="flex items-center gap-2 text-sm">
                      <LucideCalendar size={12} />
                      <span className="capitalize">{formatDate(experience.date_start, experience.date_end, monthFormat)}</span>
                    </div>

                    <span className="hidden md:block">|</span>

                    <div className="flex items-center text-sm">
                      <LucideUser size={12} />
                      <span>{experience.info.job[lang]}</span>
                    </div>
                  </div>
                </li>
              ))
            }
        </ul>

        <p className="mt-10 flex gap-2 rounded bg-layer-1 p-2 text-on-layer-0-l1">
          <LucideBadgeInfo size={46} className="text-brand-primary" />
          To access my complete resume, click the button below or scan the QR code. You can also explore my social profiles for a detailed insight of my experiences.
        </p>

        <div className="mt-10 flex gap-3 ">
          <Link className="btn btn-secondary" href="/resume">CV/Resume</Link>
          <Link className="btn btn-primary" href="#hire-me">Hire Me</Link>
        </div>
      </div>

      <div className="mt-12 flex w-full flex-col items-center gap-4 md:w-1/3 md:items-start ">
        <Link className="link flex items-center gap-2" href="https://www.linkedin.com/in/fescherer" target="_blank">
          <LinkedinIcon className="size-4 text-on-layer-0-l1" />
          /fescherer
        </Link>

        <Link className="link flex items-center gap-2" href="https://github.com/fescherer" target="_blank">
          <GithubIcon className="size-4 text-on-layer-0-l1" />
          /fescherer
        </Link>

        <div className="rounded bg-[#fff] p-4">
          <QRCode value="https://www.felipescherer.com/pt/resume" />
        </div>

        <Separator />
        <h3 className="text-2xl leading-loose tracking-wide">Languages</h3>

        <ol className="list-inside list-decimal">
          <li>Portuguese</li>
          <li>English</li>
        </ol>
      </div>
    </CardWrapper>
  )
}
