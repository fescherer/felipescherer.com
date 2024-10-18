import { RootLayoutType } from '@/types/Page'
import { AboutSection } from './components/about.section'
import { BlogSection } from './components/blog.section'
import { EducationSection } from './components/education.section'
import { ProjectsSection } from './components/projects.section'
import { ServicesSection } from './components/services.section'
import { ToolkitSection } from './components/toolkit.section'
import { SoftSkillsSection } from './components/soft-skills.section'

export default function AboutPage({ params }: RootLayoutType) {
  return (
    <div className="relative m-auto flex w-full max-w-4xl flex-col space-y-32">
      <AboutSection />
      <EducationSection />
      <SoftSkillsSection />
      <ToolkitSection />
      <ServicesSection />
      <BlogSection />
      <ProjectsSection lang={params.lang} />
    </div>
  )
}
