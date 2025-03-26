'use client'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { twMerge } from 'tailwind-merge'

interface SeparatorProps {
  dataOrientation?: 'horizontal' | 'vertical'
  className?: string
}

export function Separator({ dataOrientation = 'horizontal', className }: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root className={twMerge('my-[15px] bg-layer-1 data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-[2px]', className)} orientation={dataOrientation} />
  )
}
