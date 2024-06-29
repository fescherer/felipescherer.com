import { SimpleAccordion } from '@/components'
import { PropsWithLocale } from '@/types/language'
import { EXPERIENCES_DATA } from '@/utils/aboutme/experiences'
import { Calendar, User } from 'lucide-react'
import Image from 'next/image'

function formatDate(start: string, end: string, monthFormat: any) {
  const formatStartDate = new Date(start)
  const formatEndDate = new Date(end)

  return `${monthFormat(formatStartDate)}, ${formatStartDate.getFullYear()} - ${monthFormat(formatEndDate)},  ${formatEndDate.getFullYear()}`
}

export function ExperienceSection({ lang }: PropsWithLocale) {
  const monthFormat = new Intl.DateTimeFormat(lang === 'en' ? 'en-US' : 'pt-BR', {
    month: 'long',
  }).format

  return (
    <div>
      <div className="flex flex-col gap-4">
        {
        EXPERIENCES_DATA.map(experience => (
          <SimpleAccordion
            key={experience.id}
            trigger={(
              <div className="flex flex-col gap-2">
                <div key={experience.id} className="flex items-center rounded ">
                  <Image src={experience.logo} alt={experience.img_showcase.alt[lang]} width={30} height={30} />
                  <h3>{experience.info.title}</h3>
                </div>

                <div className="flex flex-col gap-2 md:flex-row">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={12} />
                    <span className="capitalize">{formatDate(experience.date_start, experience.date_end, monthFormat)}</span>
                  </div>

                  <span className="hidden md:block">|</span>

                  <div className="flex items-center gap-2 text-sm">
                    <User size={12} />
                    <span>{experience.info.job[lang]}</span>
                  </div>
                </div>
              </div>
            )}
          >
            <div className="p-4">
              {experience.info.desc.map(desc => desc[lang])}
            </div>
          </SimpleAccordion>
        ))
      }
      </div>
    </div>
  )
}
