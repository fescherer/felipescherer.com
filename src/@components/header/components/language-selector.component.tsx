'use client'

import { i18nWithName, LocaleWithName } from '@/lib/i18n/i18n-config'
import { LucideChevronDown, LucideLanguages } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/clsx-tailwind-merge/cn.function'
import { DropdownMenuComponent } from '@/lib/primitives'
import { setCookie } from 'cookies-next'
import { useEffect, useState } from 'react'

interface LanguageSelectorProps {
  cookieLang: string
}

export function LanguageSelectorComponent({ cookieLang }: LanguageSelectorProps) {
  const [hasRunned, setHasRunned] = useState(false)
  const path = usePathname()
  const router = useRouter()

  const currentLanguage = path.split('/')[1]

  useEffect(() => {
    if (cookieLang && !hasRunned) {
      const cookieLocale = i18nWithName.locales.find(locale => locale.id === cookieLang)
      if (cookieLocale) {
        const segments = path.split('/')
        segments[1] = cookieLocale.id
        router.push(segments.join('/'))
      }
    }
    setHasRunned(true)
  }, [cookieLang, hasRunned, path, router])

  function redirectedPathName(locale: LocaleWithName) {
    if (!path) return '/'
    setCookie('data-lang', locale.id)
    const segments = path.split('/')
    segments[1] = locale.id
    router.push(segments.join('/'))
  }

  return (
    <DropdownMenuComponent trigger={(
      <div className={cn('primary-link-effect flex items-center gap-1 ', 'border-none')}>
        <LucideLanguages />
        <LucideChevronDown size={14} />
      </div>
    )}
    >
      {i18nWithName.locales.map((locale) => {
        return (
          <button type="button" key={locale.id} className={cn('py-1 px-4 primary-link-effect ', currentLanguage === locale.id ? 'border-primary border-b text-primary' : '')} onClick={() => redirectedPathName(locale)}>{locale.name}</button>
        )
      })}
    </DropdownMenuComponent>
  )
}
