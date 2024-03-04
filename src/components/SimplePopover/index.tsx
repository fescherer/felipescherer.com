'use client'

import * as Popover from '@radix-ui/react-popover'
import { X } from 'lucide-react'
import { PropsWithChildren, ReactNode } from 'react'

type SimplePopoverProps = {
  trigger: ReactNode
}

export function SimplePopover({ children, trigger }: PropsWithChildren<SimplePopoverProps>) {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        {trigger}
      </Popover.Trigger>

      <Popover.Portal>
        <Popover.Content
          className="w-72 rounded border border-layer-0 bg-layer-1 px-6 py-4 will-change-[transform,opacity] data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=top]:animate-slideDownAndFade"
          sideOffset={5}
        >
          {children}

          <Popover.Close
            className="absolute right-1 top-1 inline-flex cursor-pointer items-center justify-center rounded-full text-on-layer-1-l2 outline-none transition-all hover:bg-default-red focus:shadow-default-red"
            aria-label="Close"
          >
            <X />
          </Popover.Close>

          <Popover.Arrow className="fill-layer-1" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
