import { PropsWithChildren } from 'react'

type AboutCardProps = {
  image: string
  title: string
}

export function AboutCard({ image, title, children }: PropsWithChildren<AboutCardProps>) {
  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
      <div className="h-[361px] w-[272px] rounded-sm bg-layer-1 bg-cover" style={{ backgroundImage: `url(${image})` }} />

      <div className="text-justify">
        <h3 className="mb-3 font-title text-xl text-on-layer-0-l1">{title}</h3>
        <div className="max-w-[65ch] text-sm">{children}</div>
      </div>
    </div>
  )
}
