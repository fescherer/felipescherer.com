import { PropsWithLocale } from '@/@types/language'
import { ContentWrapperComponent } from '../content-wrapper.component'
import { FennecTalesComponent } from '@/lib/_felipescherer.com/components/sections/fennec-tales/fennnec-tales.component'

export async function BlogSection({ lang }: PropsWithLocale) {
  return (
    <ContentWrapperComponent anchor="#projects" id="blog" index={2}>
      <FennecTalesComponent lang={lang} />
    </ContentWrapperComponent>
  )
}
