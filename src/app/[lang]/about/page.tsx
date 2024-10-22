import { RootLayoutType } from '@/types/Page'
import { AboutSection } from './components/about.section'
import { BlogSection } from './components/blog.section'
import { EducationSection } from './components/education.section'
import { ServicesSection } from './components/services.section'
import { ToolkitSection } from './components/toolkit.section'
import { SoftSkillsSection } from './components/soft-skills.section'
import { Metadata } from 'next'
import { getMetadata } from '@/utils/functions/getMetada'
import { QuoteSection } from './components/quote.section'
import { ProjectsSection } from './components/projects.section'

export const metadata: Metadata = getMetadata({
  defaultDescription: 'Here you can find about my life, hobbies and works that I\'ve done',
  defaultTitle: 'About me',
  canonicalURL: '',
  imagePath: '/thumb.png',
  defaultAltImage: 'Felipe Schereer',
  defaultKeywords: ['about-me'],
})

export default function AboutPage({ params }: RootLayoutType) {
  return (
    <div className="relative m-auto flex w-full max-w-4xl flex-col space-y-32">
      <AboutSection />
      <EducationSection lang={params.lang} />
      <QuoteSection lang={params.lang} />
      <SoftSkillsSection />
      <ToolkitSection />
      <ServicesSection />
      <BlogSection />
      <ProjectsSection lang={params.lang} />
    </div>
  )
}
