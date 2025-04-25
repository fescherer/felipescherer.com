import { YMotion } from '@/@components/motion/y-motion.component'
import { PropsWithChildren } from 'react'

type ContentContainerProps = {
  title: string
}

export function ContentContainer({ title, children }: PropsWithChildren<ContentContainerProps>) {
  return (
    <YMotion
      id="about"
      className="mt-14 bg-base-200 border-2 shadow-md border-base-200 p-8 rounded scroll-m-48"
    >
      <h2 className="font-title py-2 text-2xl font-medium table">{title}</h2>
      <hr className="text-primary mb-2 w-1/6" />
      <hr className="mb-12 text-primary w-1/8" />
      {children}
    </YMotion>
  )
}
