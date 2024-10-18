import { CardWrapper } from './card-wrapper.component'
import { ProjectComponent } from './project.component'
import Link from 'next/link'
import { PROJECTS } from '@/utils/projects'
import { PropsWithLocale } from '@/types/language'
import { Ribbon, Separator } from '@/components'
import { cn } from '@/utils/cn.function'

const RECENT_PROJECTS = Object.values(PROJECTS).reduce((acc, arr) => [...acc, ...arr], [])

export function ProjectsSection({ lang }: PropsWithLocale) {
  return (
    <CardWrapper direction="collumn" id="projects">
      <div className="flex w-full flex-col">
        <h2 className="mb-4 font-title text-4xl font-semibold tracking-wide text-on-layer-0-l1">Projects</h2>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-2">
          <ProjectComponent
            project={RECENT_PROJECTS[1]}
            lang={lang}
            ribbon={<Ribbon href={`/projects/${RECENT_PROJECTS[0].type.id}/${RECENT_PROJECTS[0].id}`} title="Popular" bgColor="var(--brand-primary)" textColor="var(--brand-on-primary)" className="z-10" />}
          />

          <Separator dataOrientation="vertical" className="hidden md:flex" />
          <Separator dataOrientation="horizontal" className="flex md:hidden" />

          <ProjectComponent
            project={RECENT_PROJECTS[0]}
            lang={lang}
            ribbon={<Ribbon href={`/projects/${RECENT_PROJECTS[0].type.id}/${RECENT_PROJECTS[0].id}`} title="Recent" bgColor="var(--brand-secondary)" textColor="var(--brand-on-secondary)" className="z-10" />}
          />
        </div>

        <Link href="/projects" className={cn('design-btn', 'mt-10 self-center px-8')}>
          {` More projects (+${RECENT_PROJECTS.length - 2})`}
        </Link>
      </div>
    </CardWrapper>
  )
}
