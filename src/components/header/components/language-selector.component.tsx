'use client'

import { i18nWithName, LocaleWithName } from '@/i18n-config'
import { LucideChevronDown, LucideLanguages } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/utils/cn.function'
import { DropdownMenuComponent } from '@/components/primitives'
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
      <>
        <LucideLanguages />
        <LucideChevronDown size={14} />
      </>
    )}
    >
      {i18nWithName.locales.map((locale) => {
        return (
          <button type="button" key={locale.id} className={cn('p-4 rounded-sm hover:text-brand-on-secondary text-sm hover:bg-brand-hover-secondary transition-all', currentLanguage === locale.id ? 'bg-brand-hover-secondary text-brand-on-secondary' : 'text-on-layer-0-l2')} onClick={() => redirectedPathName(locale)}>{locale.name}</button>
        )
      })}
    </DropdownMenuComponent>
  )
}
