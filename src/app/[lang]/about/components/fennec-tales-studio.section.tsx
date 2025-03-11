import { PropsWithLocale } from '@/@types/language'
import { CardWrapper } from '../../../../lib/_felipescherer.com/components/card-wrapper.component'
import { FennecTalesComponent } from '@/lib/_felipescherer.com/components/sections/fennec-tales/fennnec-tales.component'

export function FennecTalesStudioSection({ lang }: PropsWithLocale) {
  return (
    <CardWrapper id="fennec-tales-studio">
      <FennecTalesComponent lang={lang} />
    </CardWrapper>
  )
}
