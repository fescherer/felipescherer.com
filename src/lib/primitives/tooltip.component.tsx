'use client'

import * as PrimitiveTooltip from '@radix-ui/react-tooltip'
import { PropsWithChildren } from 'react'

type TooltipProps = {
  tooltip: string
}

export function Tooltip({ children, tooltip }: PropsWithChildren<TooltipProps>) {
  return (
    <PrimitiveTooltip.Provider delayDuration={200}>
      <PrimitiveTooltip.Root>
        <PrimitiveTooltip.Trigger asChild>
          {children}
        </PrimitiveTooltip.Trigger>

        <PrimitiveTooltip.Portal>
          <PrimitiveTooltip.Content
            className="select-none rounded-md bg-primary px-4 py-2 text-sm leading-none text-primary-content will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade shadow-md"
            sideOffset={5}
          >
            {tooltip}
            <PrimitiveTooltip.Arrow className="fill-primary" />
          </PrimitiveTooltip.Content>
        </PrimitiveTooltip.Portal>
      </PrimitiveTooltip.Root>
    </PrimitiveTooltip.Provider>
  )
}
