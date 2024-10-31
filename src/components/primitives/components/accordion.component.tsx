import { cn } from '@/utils/cn.function'
import * as PrimitiveAccordion from '@radix-ui/react-accordion'
import { ClassValue } from 'clsx'
import { LucideChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

type TAccordionItem = {
  id: string
  trigger: ReactNode
  triggerClass?: ClassValue
  content: ReactNode
}

type TAccordion = {
  accordions: TAccordionItem[]
}

export function AccordionComponent({ accordions }: TAccordion) {
  return (
    <PrimitiveAccordion.Root type="single" collapsible>
      {
        accordions.map(accordion => (
          <PrimitiveAccordion.Item key={accordion.id} value={accordion.id}>
            <PrimitiveAccordion.Header>
              <PrimitiveAccordion.Trigger className={cn('group flex w-full justify-between rounded p-4 transition-all hover:bg-brand-hover-secondary hover:text-brand-on-secondary', accordion.triggerClass)}>
                {accordion.trigger}

                <LucideChevronDown
                  className="opacity-80 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                  aria-hidden
                />
              </PrimitiveAccordion.Trigger>
            </PrimitiveAccordion.Header>

            <PrimitiveAccordion.Content>{accordion.content}</PrimitiveAccordion.Content>
          </PrimitiveAccordion.Item>
        ))
      }
    </PrimitiveAccordion.Root>
  )
}
