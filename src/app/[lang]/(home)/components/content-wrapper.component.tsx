import { PropsWithChildren } from 'react'
import { LucideArrowDown, LucideArrowUp } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/utils/cn.function'
import { CardWrapper } from '@/components/card-wrapper.component'

type ContentWrapperProps = {
  id: string
  anchor: string
  index: number
  isLastItem?: boolean
}

export function ContentWrapperComponent({ children, id, anchor, isLastItem, index }: PropsWithChildren<ContentWrapperProps>) {
  const bgColor = index !== 0 ? index % 2 === 0 ? 'bg-layer-0' : 'bg-layer-0-5' : 'transparent'

  return (
    <div id={id} className={cn('relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden', bgColor)}>
      <CardWrapper id={id} className="m-auto flex size-full max-w-5xl items-center gap-6 p-4 md:flex-row md:justify-between">
        {children}
      </CardWrapper>

      <Link href={anchor} className="my-10 flex size-10 animate-bounce items-center justify-center rounded-full border-2 border-on-layer-0-l2 backdrop-blur-sm transition-all hover:border-brand-primary hover:text-brand-primary hover:animation-paused">
        {
        isLastItem
          ? <LucideArrowUp />
          : <LucideArrowDown />
      }
      </Link>
    </div>
  )
}
