import { CardWrapper } from '@/components/card-wrapper.component'
import { ProjectsShowcaseComponent } from '@/components/sections/projects/projects-showcase.component'
import { PropsWithLocale } from '@/types/language'

export function ProjectsSection({ lang }: PropsWithLocale) {
  return (
    <CardWrapper direction="collumn" id="projects">
      <ProjectsShowcaseComponent lang={lang} />
    </CardWrapper>
  )
}
