import { cn } from '@/lib/clsx-tailwind-merge/cn.function'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { LucideX } from 'lucide-react'
import { PropsWithChildren, ReactNode } from 'react'

type TDialog = {
  trigger: ReactNode
  classContent?: string
}

export function Dialog({ trigger, children, classContent }: PropsWithChildren<TDialog>) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        {trigger}
      </DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-[#000000aa] data-[state=open]:animate-overlayShow" />

        <DialogPrimitive.Content className={cn('fixed left-1/2 top-1/2 max-h-[85vh] w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-md bg-layer-1 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-hidden data-[state=open]:animate-contentShow overflow-auto', classContent)}>
          {children}

          <DialogPrimitive.Close asChild>
            <button
              type="button"
              className="absolute right-2.5 top-2.5 inline-flex size-6 appearance-none items-center justify-center rounded-full text-on-layer-0-l1 hover:brightness-90"
              aria-label="Close"
            >
              <LucideX />
            </button>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
