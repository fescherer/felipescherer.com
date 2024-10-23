import { PropsWithLocale } from '@/types/language'
import { CardWrapper } from '../../../../components/card-wrapper.component'
import { FennecTalesComponent } from '@/components/sections/fennec-tales/fennnec-tales.component'

export function FennecTalesStudioSection({ lang }: PropsWithLocale) {
  return (
    <CardWrapper id="fennec-tales-studio">
      <FennecTalesComponent lang={lang} />
    </CardWrapper>
  )
}
