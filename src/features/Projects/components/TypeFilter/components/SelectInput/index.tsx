'use client'

import { TProjectType } from '@/types'
import { AVAILABLE_TYPE_PROJECTS } from '@/utils/projects'
import * as Select from '@radix-ui/react-select'
import { ChevronDown, LucideCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'

type SelectInputProps = {
  projectType: TProjectType | null
}

export function SelectInput({ projectType }: SelectInputProps) {
  const router = useRouter()

  function navigateTo(path: string) {
    if (path === 'all') router.push(`/projects`)
    else router.push(`/projects/${path}`)
  }

  return (
    <Select.Root defaultValue={projectType || ''} onValueChange={value => navigateTo(value)}>
      <Select.Trigger className={`flex w-full items-center justify-between overflow-hidden rounded border px-2 py-1 text-sm transition-all sm:w-52 ${projectType ? 'border-brand-primary text-brand-primary hover:border-brand-hover-primary hover:text-brand-hover-primary' : 'border-layer-1 text-on-layer-0-l2 hover:border-on-layer-0-l1 hover:text-on-layer-0-l1'}`}>
        <Select.Value placeholder="Select a type filter..." />
        <ChevronDown />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="overflow-hidden rounded-md border border-layer-1 bg-layer-0 p-2">
          <Select.ScrollUpButton />

          <Select.Item className="flex select-none items-center justify-between rounded-sm p-2 text-sm text-on-layer-0-l2 transition-colors data-[highlighted]:bg-brand-hover-primary data-[state='checked']:bg-brand-primary data-[highlighted]:text-brand-on-primary data-[state='checked']:text-brand-on-primary data-[highlighted]:outline-none" value="all">
            <Select.ItemText>All</Select.ItemText>

            <Select.ItemIndicator>
              <LucideCheck size={14} />
            </Select.ItemIndicator>
          </Select.Item>

          {
          AVAILABLE_TYPE_PROJECTS.map(type => (
            <Select.Viewport key={type}>
              <Select.Item className="flex select-none items-center justify-between rounded-sm p-2 text-sm text-on-layer-0-l2 transition-colors data-[highlighted]:bg-brand-hover-primary data-[state='checked']:bg-brand-primary data-[highlighted]:text-brand-on-primary data-[state='checked']:text-brand-on-primary data-[highlighted]:outline-none" value={type}>
                <Select.ItemText>{type}</Select.ItemText>

                <Select.ItemIndicator>
                  <LucideCheck size={14} />
                </Select.ItemIndicator>
              </Select.Item>

              <Select.Separator />
            </Select.Viewport>
          ))
            }

          <Select.ScrollDownButton />
          <Select.Arrow />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
