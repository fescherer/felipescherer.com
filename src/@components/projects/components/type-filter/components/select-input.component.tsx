'use client'

import { AVAILABLE_TYPE_PROJECTS_CONTENT } from '@/@data/project-type.data'
import { TProjectType } from '@/@types'
import * as Select from '@radix-ui/react-select'
import { ChevronDown, LucideCheck } from 'lucide-react'
import { useRouter } from 'next/navigation'

type SelectInputProps = {
  projectType: TProjectType | null
  placeholder: string
}

export function SelectInput({ projectType, placeholder }: SelectInputProps) {
  const router = useRouter()

  function navigateTo(path: string) {
    if (path === 'all') router.push(`/projects`)
    else router.push(`/projects/${path}`)
  }

  return (
    <Select.Root defaultValue={projectType || ''} onValueChange={value => navigateTo(value)}>
      <Select.Trigger className={`flex w-full items-center justify-between whitespace-nowrap rounded-sm border px-4 py-2 text-sm transition-all sm:w-60 ${projectType ? 'border-primary text-primary hover:border-accent' : 'border-primary/50 text-base-content hover:border-primary'}`}>
        <Select.Value placeholder={placeholder} />
        <ChevronDown />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content className="overflow-hidden rounded-md border border-primary/50 bg-base-100 p-2">
          <Select.ScrollUpButton />

          <Select.Item className="flex select-none items-center justify-between rounded-xs p-2 text-sm text-base-content transition-colors data-highlighted:bg-primary data-[state='checked']:bg-primary data-highlighted:text-primary-content data-[state='checked']:text-primary-content data-highlighted:outline-hidden" value="all">
            <Select.ItemText>All</Select.ItemText>

            <Select.ItemIndicator>
              <LucideCheck size={14} />
            </Select.ItemIndicator>
          </Select.Item>

          {
          AVAILABLE_TYPE_PROJECTS_CONTENT.map(type => (
            <Select.Viewport key={type.id}>
              <Select.Item className="flex select-none items-center justify-between rounded-xs p-2 text-sm text-base-content transition-colors data-highlighted:bg-primary data-[state='checked']:bg-primary data-highlighted:text-primary-content data-[state='checked']:text-primary-content data-highlighted:outline-hidden" value={type.id}>
                <Select.ItemText>{type.title}</Select.ItemText>

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
