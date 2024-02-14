'use client'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { PropsWithChildren, ReactNode, useState } from 'react'
import { Separator } from '../Separator'

type SimpleAccordionProps = {
  trigger: ReactNode
}

export function SimpleAccordion({ trigger, children }: PropsWithChildren<SimpleAccordionProps>) {
  const [isHeadingExpanded, setIsHeadingExpanded] = useState(false)

  return (
    <div className="w-full rounded border border-layer-1">
      <button className="flex w-full items-center justify-between p-4" type="button" onClick={() => setIsHeadingExpanded(prev => !prev)}>
        {trigger}

        {
          isHeadingExpanded ? <ChevronUp /> : <ChevronDown />
        }
      </button>

      <div className="grid transition-all duration-300" style={{ gridTemplateRows: isHeadingExpanded ? '1fr' : '0fr' }}>
        <div className="overflow-hidden">
          <Separator className="my-1" />
          {children}
        </div>
      </div>
    </div>
  )
}
