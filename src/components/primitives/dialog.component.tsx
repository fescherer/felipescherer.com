import * as DialogPrimitive from '@radix-ui/react-dialog'
import { PropsWithChildren, ReactNode } from 'react'

type TDialog = {
  trigger: ReactNode
}

export function Dialog({ trigger, children }: PropsWithChildren<TDialog>) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger>
        {trigger}
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay />

        <DialogPrimitive.Content className="fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-layer-1 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
          {children}
          <DialogPrimitive.Title />
          <DialogPrimitive.Description />
          <DialogPrimitive.Close />
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>

  )
}
