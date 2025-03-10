import { cn } from '@/utils/cn.function'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { ClassValue } from 'clsx'
import { PropsWithChildren, ReactNode } from 'react'

type TPrimitive = {
  trigger: ReactNode
  triggerClass?: ClassValue
  contentClass?: ClassValue
}

export function DropdownMenuComponent({ trigger, triggerClass, contentClass, children }: PropsWithChildren<TPrimitive>) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger className={cn('flex items-center gap-1 rounded-sm p-2 transition-all hover:bg-brand-hover-secondary hover:text-brand-on-secondary', triggerClass)}>
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content className={cn('overflow-y-auto max-h-[calc(100vh-75px)] flex flex-col gap-2 rounded-sm border border-brand-secondary bg-layer-0 p-2', contentClass)}>
          {children}
          <DropdownMenuPrimitive.Arrow className="fill-brand-secondary" />
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}
