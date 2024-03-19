import { ContentWrapper } from '..'
import { Card } from './components'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { Separator } from '@/components'
import { PROJECTS } from '@/utils/projects'

const ALL_PROJECTS = Object.values(PROJECTS).reduce((acc, arr) => [...acc, ...arr], [])

export function Projects() {
  return (
    <ContentWrapper anchor="#home" id="projects" isLastItem index={3}>

      <div className="flex w-full flex-col">
        <h2 className="mb-4 font-title text-4xl font-semibold tracking-wide text-on-layer-0-l1">Projects</h2>

        <div className="flex flex-col justify-between gap-4 md:flex-row md:gap-2">
          <Card project={ALL_PROJECTS[0]} />
          <Separator dataOrientation="vertical" className="hidden md:block" />
          <Separator dataOrientation="horizontal" className="block md:hidden" />
          <Card project={ALL_PROJECTS[1]} />
        </div>

        <Link href="/projects" className={twMerge('design-btn', 'mt-10 self-center px-8')}>
          {` More projects (+${ALL_PROJECTS.length - 2})`}
        </Link>
      </div>
    </ContentWrapper>
  )
}
