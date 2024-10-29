'use client'

import { i18nWithName, LocaleWithName } from '@/i18n-config'
import { LucideChevronDown, LucideLanguages } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/utils/cn.function'
import { DropdownMenuComponent } from '@/components/primitives'

export function LanguageSelectorComponent() {
  const path = usePathname()

  const currentLanguage = path.split('/')[1]

  const redirectedPathName = (locale: LocaleWithName) => {
    if (!path) return '/'
    const segments = path.split('/')
    segments[1] = locale.id
    return segments.join('/')
  }

  return (
    <DropdownMenuComponent trigger={(
      <>
        <LucideLanguages />
        <LucideChevronDown size={14} />
      </>
    )}
    >
      {i18nWithName.locales.map((locale) => {
        return (
          <Link key={locale.id} className={cn('p-4 rounded hover:text-brand-on-secondary text-sm hover:bg-brand-hover-secondary transition-all', currentLanguage === locale.id ? 'bg-brand-hover-secondary text-brand-on-secondary' : 'text-on-layer-0-l2')} href={redirectedPathName(locale)}>{locale.name}</Link>
        )
      })}
    </DropdownMenuComponent>
  )
}
