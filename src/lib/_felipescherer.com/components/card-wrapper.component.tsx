import { cn } from '@/lib/clsx-tailwind-merge/cn.function'
import { ClassValue } from 'clsx'
import { PropsWithChildren } from 'react'

type TCardWrapper = {
  direction?: 'row' | 'collumn'
  className?: ClassValue
  id: string
}

export function CardWrapper({ children, direction = 'row', className, id }: PropsWithChildren<TCardWrapper>) {
  return (
    <section id={id} className={cn('m-4 space-y-8 flex flex-col items-center scroll-mt-20', direction === 'row' ? 'md:flex-row md:items-start justify-between gap-4' : '', className)}>
      {children}
    </section>
  )
}
