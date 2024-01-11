'use client'

import { IExperience } from '@/types'
import { EXPERIENCES_DATA } from '@/utils/aboutme/experiences'
import Image from 'next/image'
import { useState } from 'react'

export function ExperienceSection() {
  const experiences = EXPERIENCES_DATA

  const [experienceSelected, setExperienceSeletected] = useState(experiences[0])
  const [isMoreInfoToggled, setIsMoreInfoToggled] = useState(false)
  const startExperiencePeriod = new Date(experienceSelected.date_start)
  const endExperiencePeriod = new Date(experienceSelected.date_end ?? '')
  console.log(endExperiencePeriod)
  const monthFormat = new Intl.DateTimeFormat('us', {
    month: 'long',
  }).format
  const experiencePeriod = `${monthFormat(startExperiencePeriod)}, ${startExperiencePeriod.getFullYear()} - ${monthFormat(endExperiencePeriod)},  ${endExperiencePeriod.getFullYear()}`

  function handleExperienceSelected(experience: IExperience) {
    setExperienceSeletected(experience)
    setIsMoreInfoToggled(false)
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {
        experiences.map((experience, index) => (
          <button onClick={() => handleExperienceSelected(experiences[index])} type="button" className={`flex items-center rounded-full border px-4 py-2 text-sm transition-all  ${experienceSelected.id === experience.id ? 'border-brand-primary text-brand-primary' : 'border-layer-1 hover:text-on-layer-0-l1'}`} key={experience.id}>
            <Image src={experience.logo} alt="" width={30} height={30} />
            <span>{experience.info.title}</span>
          </button>
        ))
      }
      </div>

      <div className="m-4 flex flex-col gap-2 md:flex-row">
        <div className="flex flex-col gap-4" style={{ minWidth: experienceSelected.img_showcase.width + 6 }}>
          <Image src={experienceSelected.img_showcase.img} width={experienceSelected.img_showcase.width} height={experienceSelected.img_showcase.height} alt={experienceSelected.img_showcase.alt} />

          <div className="flex flex-col">
            <small className="opacity-75">Nome da Empresa</small>
            <span>{experienceSelected.info.title}</span>
          </div>

          <div className="flex flex-col">
            <small className="opacity-75">Periodo de contribuição</small>
            <span>{experiencePeriod}</span>
          </div>

          <div className="flex flex-col">
            <small className="opacity-75">Função</small>
            <span>{experienceSelected.info.job}</span>
          </div>
        </div>

        <div className="flex flex-col">
          <h3 className="mb-2 font-title text-lg text-on-layer-0-l1">{experienceSelected.info.title}</h3>

          <p className="text-sm leading-6">
            {
              isMoreInfoToggled
                ? experienceSelected.info.desc
                : experienceSelected.info.short_desc
            }
          </p>

          {
            !isMoreInfoToggled && <button onClick={() => setIsMoreInfoToggled(prev => !prev)} type="button" className="design-link mt-2 self-end">Mais informações</button>
          }
        </div>
      </div>
    </div>
  )
}
