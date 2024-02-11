'use client'

import * as Tooltip from '@radix-ui/react-tooltip'
import { PropsWithChildren } from 'react'

type SimpleTooltipProps = {
  tooltip: string
}

export function SimpleTooltip({ children, tooltip }: PropsWithChildren<SimpleTooltipProps>) {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>

        <Tooltip.Portal>
          <Tooltip.Content
            className="select-none rounded-md bg-layer-1 px-4 py-2 text-sm leading-none text-on-layer-0-l2 will-change-[transform,opacity] data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade"
            sideOffset={5}
          >
            {tooltip}
            <Tooltip.Arrow className="fill-layer-1" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
