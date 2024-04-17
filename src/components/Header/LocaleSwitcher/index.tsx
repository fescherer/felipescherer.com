'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LocaleWithName, i18nWithName } from '@/i18n-config'

type LocaleSwitcherProps = {
  title: string
}

export default function LocaleSwitcher({ title }: LocaleSwitcherProps) {
  const pathName = usePathname()
  const currentLanguage = pathName.split('/')[1]

  const redirectedPathName = (locale: LocaleWithName) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale.id
    return segments.join('/')
  }

  return (
    <div className="text-on-layer-0-l2">
      <p className="text-sm">{title}</p>

      <ul className="my-1">
        {i18nWithName.locales.map((locale) => {
          return (
            <li key={locale.id}>
              <Link className={`${currentLanguage === locale.id ? 'text-brand-primary' : 'text-on-layer-0-l2'}`} href={redirectedPathName(locale)}>{locale.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
