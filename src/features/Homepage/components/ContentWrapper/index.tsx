import { AnchorButton } from '@/components'
import { PropsWithChildren } from 'react'

type ContentWrapperProps = {
  id: string
  anchor: string
  isFlexReverse?: boolean
}

export function ContentWrapper({ children, id, anchor, isFlexReverse }: PropsWithChildren<ContentWrapperProps>) {
  return (
    <div id={id} className="relative flex min-h-screen w-full items-center justify-center  overflow-hidden">
      <section className={`m-auto flex h-full w-full max-w-5xl items-center gap-6 p-4 md:flex-row md:justify-between ${isFlexReverse ? 'flex-col-reverse' : 'flex-col'}`}>
        {children}
      </section>

      <AnchorButton anchor={anchor} />
    </div>
  )
}

//  <div className="flex min-h-screen w-full items-center justify-center">
// <section id="meet" className="flex max-w-5xl flex-col-reverse items-center p-4 md:flex-row md:justify-between">
