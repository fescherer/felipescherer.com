'use client'

import { LucideChevronDown, LucideFileText } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import * as Select from '@radix-ui/react-select'

const languages = [
  {
    value: 'en',
    title: 'English',
  },
  {
    value: 'pt-br',
    title: 'Português',
  },
]

export function ResumeSection() {
  const [language, setLanguage] = useState('en')

  return (
    <div className="my-6 flex flex-col gap-2 rounded border border-layer-1 p-4">
      <Link href="/resume" className="flex items-center gap-2 self-start font-medium text-on-layer-0-l1 transition-colors hover:text-brand-primary hover:underline focus:text-brand-primary">
        <LucideFileText />
        <h3>Resume</h3>
      </Link>

      <p className="ml-1 text-sm">
        If you looking for my resume
        <Link className="design-link ml-1" href="/resume">go the this page</Link>
        , but if you want to download just choose the prefered language and click download
      </p>

      <div className="mt-4 flex justify-end gap-3">
        <Select.Root value={language} onValueChange={setLanguage}>
          <Select.Trigger className="flex items-center justify-center gap-2 rounded-sm border border-layer-1 px-4 py-2 transition-colors hover:border-on-layer-0-l1 hover:text-on-layer-0-l1 focus:text-on-layer-0-l1">
            <Select.Value />
            <LucideChevronDown size={14} />
          </Select.Trigger>

          <Select.Portal>
            <Select.Content className="overflow-hidden rounded-md bg-layer-1">
              <Select.Viewport className="space-y-2 p-2">
                {languages.map(language => (
                  <Select.Item value={language.value} key={language.value} className="relative flex cursor-pointer select-none items-center rounded-sm p-3 text-base leading-none transition-colors data-[highlighted]:bg-brand-primary data-[highlighted]:text-brand-on-primary data-[highlighted]:outline-none">
                    <Select.ItemText>{language.title}</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Viewport>

              <Select.Arrow />
            </Select.Content>
          </Select.Portal>
        </Select.Root>

        <Link target="_blank" className="rounded bg-brand-primary px-4 py-2 text-brand-on-primary hover:bg-brand-hover-primary focus:bg-brand-hover-primary" href={`/resume/felipe-scherer-resume-${language}.pdf`} download={`felipe-scherer-resume-${language}`}>Download</Link>
      </div>
    </div>
  )
}
