'use client'

import { i18n, Locale } from '@/lib/i18n/i18n-config'
import { LucideChevronDown, LucideLanguages } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { cn } from '@/lib/clsx-tailwind-merge/cn.function'
import { DropdownMenuComponent } from '@/lib/primitives'
import { setCookie } from 'cookies-next'
import { useEffect, useState } from 'react'
import { TAvailableLanguages } from '@/@data/available-languages.data'

interface LanguageSelectorProps {
  cookieLang: string
  languages: TAvailableLanguages
}

export function LanguageSelectorComponent({ cookieLang, languages }: LanguageSelectorProps) {
  const [hasRunned, setHasRunned] = useState(false)
  const path = usePathname()
  const router = useRouter()

  const currentLanguage = path.split('/')[1]

  useEffect(() => {
    if (cookieLang && !hasRunned) {
      const cookieLocale = i18n.locales.find(locale => locale === cookieLang)
      if (cookieLocale) {
        const segments = path.split('/')
        segments[1] = cookieLocale
        router.push(segments.join('/'))
      }
    }
    setHasRunned(true)
  }, [cookieLang, hasRunned, path, router])

  function redirectedPathName(locale: Locale) {
    if (!path) return '/'
    setCookie('data-lang', locale)
    const segments = path.split('/')
    segments[1] = locale
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
      {
        ['en', 'pt'].map(item => (
          <button key={item} type="button" className={cn('py-1 px-4 primary rounded transition-all cursor-pointer hover', currentLanguage === item ? 'bg-primary text-primary-content' : '')} onClick={() => redirectedPathName(item as Locale)} title={languages.tooltip}>{languages[item as Locale]}</button>
        ))
      }
    </DropdownMenuComponent>
  )
}
