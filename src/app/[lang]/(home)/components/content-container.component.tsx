import { PropsWithChildren } from 'react'

type ContentContainerProps = {
  title: string
}

export function ContentContainer({ title, children }: PropsWithChildren<ContentContainerProps>) {
  return (
    <div id="about" className="pt-14 space-y-6">
      <h2 className="font-title border-b border-primary py-2">{title}</h2>
      {children}
    </div>
  )
}
