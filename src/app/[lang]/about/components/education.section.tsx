import Link from 'next/link'
import { CardWrapper } from '../../../../components/card-wrapper.component'
import { LinkedinIcon } from '@/icons/social/linkedin.icon'
import { GithubIcon } from '@/icons/social/github.icon'
import QRCode from 'react-qr-code'
import { LucideBadgeInfo, LucideCalendar, LucideUser } from 'lucide-react'
import { PropsWithLocale } from '@/types/language'
import { EXPERIENCES } from '@/utils/data/experiencies.data'
import Image from 'next/image'
import { Separator } from '@/components/primitives'
import { getDictionary } from '@/get-dictionary'

function formatDate(start: string, end: string, monthFormat: any) {
  const formatStartDate = new Date(start)
  const formatEndDate = new Date(end)

  return `${monthFormat(formatStartDate)}, ${formatStartDate.getFullYear()} - ${monthFormat(formatEndDate)},  ${formatEndDate.getFullYear()}`
}

export async function EducationSection({ lang }: PropsWithLocale) {
  const dictionary = await getDictionary(lang)
  const t = dictionary.aboutme.education

  const monthFormat = new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'pt-BR', {
    month: 'long',
  }).format

  return (
    <CardWrapper id="education">
      <div className="flex flex-col items-center md:max-w-[60%] md:items-start">
        <h2 className="text-4xl leading-tight tracking-wider text-on-layer-0-l1">{t.title}</h2>

        <p className="p">
          <strong>{t.text.part1}</strong>
          {t.text.part2}
          <strong>{t.text.part3}</strong>
          {t.text.part4}
        </p>

        <h3 className="text-3xl leading-relaxed tracking-wider text-on-layer-0-l1">{t.experiences.title}</h3>

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
          {t.resume['callout-text']}
        </p>

        <div className="mt-10 flex gap-3 ">
          <Link className="btn btn-secondary" href="/resume">{t.resume['btn-resume']}</Link>
          <Link className="btn btn-primary" href="#hire-me">{t.resume['btn-hire']}</Link>
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
        <h3 className="text-2xl leading-loose tracking-wide">{t.languages.title}</h3>

        <ol className="list-inside list-decimal">
          <li>{t.languages.pt}</li>
          <li>{t.languages.en}</li>
        </ol>
      </div>

    </CardWrapper>
  )
}
