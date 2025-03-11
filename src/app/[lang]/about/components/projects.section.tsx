import { CardWrapper } from '@/lib/_felipescherer.com/components/card-wrapper.component'
import { ProjectsShowcaseComponent } from '@/lib/_felipescherer.com/components/sections/projects/projects-showcase.component'
import { PropsWithLocale } from '@/@types/language'

export function ProjectsSection({ lang }: PropsWithLocale) {
  return (
    <CardWrapper direction="collumn" id="projects">
      <ProjectsShowcaseComponent lang={lang} />
    </CardWrapper>
  )
}
