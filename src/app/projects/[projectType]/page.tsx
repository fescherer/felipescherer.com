import { Projects } from '@/features'

type ProjectTypePageProps = {
  params: { projectType: string }
}

export default function ProjectTypePage({ params: { projectType } }: ProjectTypePageProps) {
  return (
    <Projects projectType={projectType} />
  )
}
