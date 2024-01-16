'use client'

import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { LucideDownload } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

export function Resume() {
  const [language, setLanguage] = useState('pt-br')
  const classToggleGroup = 'flex w-full items-center justify-center border text-layer-1 border-layer-1 py-2 text-center text-sm data-[state=on]:border-brand-primary data-[state=on]:text-brand-primary'

  return (
    <div className="mt-16 flex flex-col self-center md:self-start">
      <ToggleGroup.Root
        className="flex text-on-layer-0-l2"
        type="single"
        defaultValue={language}
        value={language}
        onValueChange={e => e ? setLanguage(e) : ''}
        aria-label="Language Selector"
      >
        <ToggleGroup.Item className={`${classToggleGroup} rounded-tl`} value="pt-br" aria-label="Portuguese">
          PT-BR
        </ToggleGroup.Item>

        <ToggleGroup.Item className={`${classToggleGroup} rounded-tr`} value="en" aria-label="English">
          EN
        </ToggleGroup.Item>

      </ToggleGroup.Root>

      <Link target="_blank" href={`/resume/felipe-scherer-resume-${language}.pdf`} download={`felipe-scherer-resume-${language}`} className={twMerge('design-btn flex gap-2', 'rounded-none', 'rounded-b')}>
        Download my Resume
        <LucideDownload size={20} />
      </Link>

    </div>
  )
}
