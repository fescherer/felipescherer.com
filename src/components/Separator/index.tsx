'use client'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { twMerge } from 'tailwind-merge'

interface SeparatorProps {
  dataOrientation?: 'horizontal' | 'vertical'
  className?: string
}

export function Separator({ dataOrientation = 'horizontal', className }: SeparatorProps) {
  return (
    <SeparatorPrimitive.Root className={twMerge('my-[15px] bg-layer-1 opacity-50 data-[orientation=horizontal]:h-px data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px', className)} orientation={dataOrientation} />
  )
}
