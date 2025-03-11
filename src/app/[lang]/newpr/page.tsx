import { RootLayoutType } from '@/@types/Page'
import { ProjectLoader } from '../projects/components/project-loader'

export default function NewPRPage({ params }: RootLayoutType) {
  return (
    <div>
      <ProjectLoader lang={params.lang} />
    </div>
  )
}
