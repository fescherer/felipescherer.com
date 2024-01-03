import { PropsWithChildren } from 'react'
import { AnchorButton } from './components'

type ContentWrapperProps = {
  id: string
  anchor: string
  index: number
  isFlexReverse?: boolean
  isLastItem?: boolean
}

export function ContentWrapper({ children, id, anchor, isFlexReverse, isLastItem, index }: PropsWithChildren<ContentWrapperProps>) {
  const bgColor = index !== 0 ? index % 2 === 0 ? 'bg-layer-0' : 'bg-layer-0-5' : 'transparent'

  return (
    <div id={id} className={`relative flex min-h-screen w-full flex-col items-center  justify-center overflow-hidden ${bgColor}`}>
      <section className={`m-auto flex h-full w-full max-w-5xl items-center gap-6 p-4 md:flex-row md:justify-between ${isFlexReverse ? 'flex-col-reverse' : 'flex-col'}`}>
        {children}
      </section>

      <AnchorButton isLastItem={isLastItem} anchor={anchor} />
    </div>
  )
}

//  <div className="flex min-h-screen w-full items-center justify-center">
// <section id="meet" className="flex max-w-5xl flex-col-reverse items-center p-4 md:flex-row md:justify-between">
