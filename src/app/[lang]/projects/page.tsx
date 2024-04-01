import { Projects } from '@/features'
import { getMetadata } from '@/utils/functions/getMetada'
import { Metadata } from 'next'

export const metadata: Metadata = getMetadata({
  defaultDescription: 'Here you can find all my projects',
  defaultTitle: 'Projects',
  canonicalURL: '',
  imagePath: '/thumb.png',
  defaultAltImage: 'Felipe Schereer',
  defaultKeywords: ['projects'],
})

export default function ProjectsPage() {
  return (
    <Projects />
  )
}
