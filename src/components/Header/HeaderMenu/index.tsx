'use client'

import { usePathname } from 'next/navigation'
import { LucideAlignLeft, LucideChevronDown, LucideLanguages } from 'lucide-react'
import Link from 'next/link'
import { PropsWithLocale } from '@/types/language'
import { MENU_ITEMS } from '@/utils/menu-items'
import { cn } from '@/utils/cn.function'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { i18nWithName, LocaleWithName } from '@/i18n-config'

export function HeaderMenu({ lang }: PropsWithLocale) {
  const path = usePathname()
  console.log(path)
  const currentPath = path.split('/')?.[2] || ''

  const currentLanguage = path.split('/')[1]

  const redirectedPathName = (locale: LocaleWithName) => {
    if (!path) return '/'
    const segments = path.split('/')
    segments[1] = locale.id
    return segments.join('/')
  }

  return (
    <>
      <div className="md:hidden">
        <LucideAlignLeft />
      </div>

      <div className="hidden gap-8 md:flex">
        {
          MENU_ITEMS.map(menuItem => (
            <Link className={cn('hover:border-brand-primary hover:bg-brand-primary hover:text-brand-on-primary transition-all rounded p-2', currentPath === menuItem.link.replace('/', '') ? 'text-brand-hover-primary' : '')} key={menuItem.link} href={menuItem.link}>{menuItem.name[lang]}</Link>
          ))
        }

        {/* LANGUAGE SELECTOR */}
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="flex items-center gap-1 rounded p-2 transition-all hover:bg-brand-primary hover:text-brand-on-primary">
            <LucideLanguages />
            <LucideChevronDown size={14} />
          </DropdownMenu.Trigger>

          <DropdownMenu.Portal>
            <DropdownMenu.Content className="flex flex-col gap-2 rounded bg-layer-1 p-2">
              {i18nWithName.locales.map((locale) => {
                return (
                  <Link key={locale.id} className={cn('p-2 rounded hover:text-brand-on-primary hover:bg-brand-hover-primary transition-all', currentLanguage === locale.id ? 'bg-brand-primary text-brand-on-primary' : 'text-on-layer-0-l2')} href={redirectedPathName(locale)}>{locale.name}</Link>
                )
              })}

              <DropdownMenu.Arrow className="mb-2 fill-layer-1" />
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
    </>
  )
}
