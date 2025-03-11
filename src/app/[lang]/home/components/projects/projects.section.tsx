import { ProjectsShowcaseComponent } from '@/lib/_felipescherer.com/components/sections/projects/projects-showcase.component'
import { ContentWrapperComponent } from '../content-wrapper.component'
import { PropsWithLocale } from '@/@types/language'

export function ProjectsSection({ lang }: PropsWithLocale) {
  return (
    <ContentWrapperComponent anchor="#home" id="projects" isLastItem index={3}>
      <ProjectsShowcaseComponent lang={lang} />
    </ContentWrapperComponent>
  )
}
