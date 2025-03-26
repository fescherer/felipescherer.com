'use client'

import { usePathname } from 'next/navigation'
import { LucideAlignLeft } from 'lucide-react'
import Link from 'next/link'
import { PropsWithLocale } from '@/@types/language'
import { cn } from '@/lib/clsx-tailwind-merge/cn.function'
import { DropdownMenuComponent } from '@/lib/primitives'
import React from 'react'
import { ClassValue } from 'clsx'
import { DictionaryType } from '@/lib/i18n/get-dictionary'

type TCCHeaderMenu = {
  dictionary: DictionaryType
  isMobile: boolean
}

export function CCHeaderMenu({ dictionary, isMobile }: PropsWithLocale<TCCHeaderMenu>) {
  const path = usePathname()
  const currentPath = '/' + (path.split('/')?.[2] || '')
  const linkBtnClass: ClassValue = 'py-2 px-4'
  // rounded-sm hover:text-brand-on-secondary text-sm hover:bg-brand-hover-secondary transition-all
  const returnClassByCurrentPath = (value: string) => value == currentPath ? 'text-primary border-primary border-b' : 'primary-link-effect'

  const headerItems = [
    { name: dictionary.header.menu.home,
      link: '/',
    },
    {
      name: dictionary.header.menu.about,
      link: '#about',
    },
    {
      name: dictionary.header.menu.projects,
      link: '/projects',
    },
  ]

  return (
    <>
      {
      isMobile
        ? (
          <div className="lg:hidden select-none">

            <DropdownMenuComponent
              contentClass="w-[300px]"
              trigger={(
                <>
                  <LucideAlignLeft />
                </>
              )}
            >
              {headerItems.map((menuItem, index) => (
                <React.Fragment key={menuItem.link}>
                  <Link
                    aria-disabled={currentPath === menuItem.link}
                    tabIndex={currentPath === menuItem.link ? -1 : undefined}
                    key={menuItem.link + index}
                    className={cn(linkBtnClass, returnClassByCurrentPath(menuItem.link), currentPath === menuItem.link ? 'pointer-events-none' : '')}
                    href={menuItem.link}
                  >
                    {menuItem.name}
                  </Link>
                </React.Fragment>
              )
              )}
            </DropdownMenuComponent>
          </div>
          )
        : (
          <nav className="justify-end hidden lg:flex gap-2">
            {headerItems.map(item => (
              <Link
                aria-disabled={currentPath === item.link}
                tabIndex={currentPath === item.link ? -1 : undefined}
                key={item.name}
                className={cn(linkBtnClass, returnClassByCurrentPath(item.link), currentPath === item.link ? 'pointer-events-none' : '')}
                href={item.link}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          )
    }
    </>
  )
}
