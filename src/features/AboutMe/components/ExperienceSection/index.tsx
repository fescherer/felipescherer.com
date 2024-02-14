import { SimpleAccordion } from '@/components'
import { EXPERIENCES_DATA } from '@/utils/aboutme/experiences'
import { Calendar, User } from 'lucide-react'
import Image from 'next/image'

const monthFormat = new Intl.DateTimeFormat('us', {
  month: 'long',
}).format

function formatDate(start: string, end: string) {
  const formatStartDate = new Date(start)
  const formatEndDate = new Date(end)

  return `${monthFormat(formatStartDate)}, ${formatStartDate.getFullYear()} - ${monthFormat(formatEndDate)},  ${formatEndDate.getFullYear()}`
}

export function ExperienceSection() {
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
                  <Image src={experience.logo} alt="" width={30} height={30} />
                  <h3>{experience.info.title}</h3>
                </div>

                <div className="flex flex-col gap-2 md:flex-row">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={12} />
                    <span>{formatDate(experience.date_start, experience.date_end)}</span>
                  </div>

                  <span className="hidden md:block">|</span>

                  <div className="flex items-center gap-2 text-sm">
                    <User size={12} />
                    <span>{experience.info.job}</span>
                  </div>
                </div>
              </div>
            )}
          >
            <div className="p-4">
              {experience.info.desc}
            </div>
          </SimpleAccordion>
        ))
      }
      </div>
    </div>
  )
}
