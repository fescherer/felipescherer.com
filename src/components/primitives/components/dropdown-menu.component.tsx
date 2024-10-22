import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { PropsWithChildren, ReactNode } from 'react'

type TPrimitive = {
  trigger: ReactNode
}

export function DropdownMenuComponent({ trigger, children }: PropsWithChildren<TPrimitive>) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger className="flex items-center gap-1 rounded p-2 transition-all hover:bg-brand-primary hover:text-brand-on-primary">
        {trigger}
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content className="flex flex-col gap-2 rounded bg-layer-1 p-2">
          {children}
          <DropdownMenuPrimitive.Arrow className="mb-2 fill-layer-1" />
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  )
}
