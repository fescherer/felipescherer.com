import { PropsWithChildren } from 'react'

type AboutCardProps = {
  image: string
  title: string
  isInverted?: boolean
}

export function AboutCard({ image, title, children, isInverted = false }: PropsWithChildren<AboutCardProps>) {
  return (
    <div className={`my-8 flex flex-col items-center gap-8 md:items-start ${isInverted ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
      <div className="h-[361px] w-[272px] rounded-sm bg-layer-1 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }} />

      <div className="text-justify">
        <h3 className="mb-3 font-title text-xl text-on-layer-0-l1">{title}</h3>
        <div className="max-w-prose indent-4 text-sm leading-6">{children}</div>
      </div>
    </div>
  )
}
