'use client'

import { LucideChevronDown, LucideFileText } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import * as Select from '@radix-ui/react-select'
import { Locale, i18nWithName } from '@/lib/i18n/i18n-config'
import { getDictionary } from '@/lib/i18n/get-dictionary'

type ResumeSectionProps = {
  defaultLang: Locale
  translation: Awaited<ReturnType<typeof getDictionary>>
}

export function ResumeSection({ defaultLang, translation }: ResumeSectionProps) {
  const [language, setLanguage] = useState(defaultLang)

  return (
    <div className="my-6 flex flex-col gap-2 rounded-sm border border-layer-1 p-4">
      <Link href={`${defaultLang}/resume`} className="flex items-center gap-2 self-start font-medium text-on-layer-0-l1 transition-colors hover:text-brand-primary hover:underline focus:text-brand-primary">
        <LucideFileText />
        <h3>{translation.homepage.aboutme.resume.title}</h3>
      </Link>

      <p className="ml-1 text-sm">
        {translation.homepage.aboutme.resume.p1}
        <Link className="design-link ml-1" href={`${defaultLang}/resume`}>{translation.homepage.aboutme.resume.p2}</Link>
        {translation.homepage.aboutme.resume.p3}
      </p>

      <div className="mt-4 flex justify-end gap-3">
        <Select.Root value={language} onValueChange={(value: Locale) => setLanguage(value)}>
          <Select.Trigger className="flex items-center justify-center gap-2 rounded-xs border border-layer-1 px-4 py-2 transition-colors hover:border-on-layer-0-l1 hover:text-on-layer-0-l1 focus:text-on-layer-0-l1">
            <Select.Value />
            <LucideChevronDown size={14} />
          </Select.Trigger>

          <Select.Portal>
            <Select.Content className="overflow-hidden rounded-md bg-layer-1">
              <Select.Viewport className="space-y-2 p-2">
                {i18nWithName.locales.map(language => (
                  <Select.Item value={language.id} key={language.id} className="relative flex cursor-pointer select-none items-center rounded-xs p-3 text-base leading-none transition-colors data-highlighted:bg-brand-primary data-highlighted:text-brand-on-primary data-highlighted:outline-hidden">
                    <Select.ItemText>{language.name}</Select.ItemText>
                    <Select.ItemIndicator />
                  </Select.Item>
                ))}
              </Select.Viewport>

              <Select.Arrow />
            </Select.Content>
          </Select.Portal>
        </Select.Root>

        <Link target="_blank" className="rounded-sm bg-brand-primary px-4 py-2 text-brand-on-primary hover:bg-brand-hover-primary focus:bg-brand-hover-primary" href={`/resume/felipe-scherer-resume-${language}.pdf`} download={`felipe-scherer-resume-${language}`}>{translation.homepage.aboutme.resume.btn}</Link>
      </div>
    </div>
  )
}
