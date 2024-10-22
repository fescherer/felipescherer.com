'use client'

import { i18nWithName, LocaleWithName } from '@/i18n-config'
import { LucideChevronDown, LucideLanguages } from 'lucide-react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/utils/cn.function'
import { ClassValue } from 'clsx'
import { DropdownMenuComponent } from '@/components/primitives'

type TCCConfigSelector = {
  className: ClassValue
}

export function CCConfigSelector({ className }: TCCConfigSelector) {
  const path = usePathname()

  const currentLanguage = path.split('/')[1]

  const redirectedPathName = (locale: LocaleWithName) => {
    if (!path) return '/'
    const segments = path.split('/')
    segments[1] = locale.id
    return segments.join('/')
  }

  return (
    <div className={cn('flex justify-center', className)}>
      {/* LANGUAGE SELECTOR */}
      <DropdownMenuComponent trigger={(
        <>
          <LucideLanguages />
          <LucideChevronDown size={14} />
        </>
      )}
      >
        {i18nWithName.locales.map((locale) => {
          return (
            <Link key={locale.id} className={cn('p-2 rounded hover:text-brand-on-primary hover:bg-brand-hover-primary transition-all', currentLanguage === locale.id ? 'bg-brand-primary text-brand-on-primary' : 'text-on-layer-0-l2')} href={redirectedPathName(locale)}>{locale.name}</Link>
          )
        })}
      </DropdownMenuComponent>
    </div>
  )
}
