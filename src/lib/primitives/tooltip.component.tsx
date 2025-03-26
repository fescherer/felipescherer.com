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
            className="select-none rounded-md bg-layer-1 px-4 py-2 text-sm leading-none text-on-layer-0-l2 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
            sideOffset={5}
          >
            {tooltip}
            <PrimitiveTooltip.Arrow className="fill-layer-1" />
          </PrimitiveTooltip.Content>
        </PrimitiveTooltip.Portal>
      </PrimitiveTooltip.Root>
    </PrimitiveTooltip.Provider>
  )
}
