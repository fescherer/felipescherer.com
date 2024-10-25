'use client'

import { usePathname } from 'next/navigation'
import { LucideAlignLeft, LucideChevronDown } from 'lucide-react'
import Link from 'next/link'
import { PropsWithLocale } from '@/types/language'
import { MENU_ITEMS } from '@/utils/data/menu-items'
import { cn } from '@/utils/cn.function'
import { ClassNameValue } from 'tailwind-merge'
import { AccordionComponent, DropdownMenuComponent } from '@/components/primitives'
import React from 'react'
import { ClassValue } from 'clsx'

type TCCHeaderMenu = {
  className: ClassNameValue
}

export function CCHeaderMenu({ lang, className }: PropsWithLocale<TCCHeaderMenu>) {
  const path = usePathname()
  const currentPath = '/' + (path.split('/')?.[2] || '')
  const linkBtnClass: ClassValue = 'p-4 rounded hover:text-brand-on-secondary text-sm hover:bg-brand-hover-secondary transition-all'

  const returnClassByCondition = (value1: string, value2: string) => value1 == value2 ? 'bg-brand-hover-secondary text-brand-on-secondary' : 'text-on-layer-0-l2'
  const returnClassByCurrentPath = (value: string) => returnClassByCondition(value, currentPath)

  return (
    <>
      {/* MOBILE VERSION */}
      <div className={cn('lg:hidden select-none', className)}>

        <DropdownMenuComponent
          contentClass="min-w-[75vw]"
          trigger={(
            <>
              <LucideAlignLeft />
            </>
          )}
        >
          {MENU_ITEMS.map((menuItem, index) => (
            <React.Fragment key={menuItem.link}>
              {menuItem.sublink?.length
                ? (
                  <AccordionComponent accordions={[
                    {
                      id: menuItem.name[lang] + 'id',
                      trigger: menuItem.name[lang],
                      triggerClass: returnClassByCurrentPath(menuItem.link),
                      content: (
                        <div className="flex flex-col gap-4 border-l border-brand-secondary">
                          {menuItem.sublink.map(submenu => (
                            <Link
                              className={linkBtnClass}
                              href={currentPath === menuItem.link ? submenu.link : menuItem.link + submenu.link}
                              key={submenu.name[lang] + ''}
                            >
                              {submenu.name[lang]}
                            </Link>
                          ))}
                        </div>
                      ),
                    },
                  ]}
                  />
                  )
                : (
                  <Link
                    aria-disabled={currentPath === menuItem.link}
                    tabIndex={currentPath === menuItem.link ? -1 : undefined}
                    key={menuItem.link + index}
                    className={cn(linkBtnClass, returnClassByCurrentPath(menuItem.link), currentPath === menuItem.link ? 'pointer-events-none' : '')}
                    href={menuItem.link}
                  >
                    {menuItem.name[lang]}
                  </Link>
                  )}
            </React.Fragment>
          )
          )}
        </DropdownMenuComponent>
      </div>

      {/* DESKTOP VERSION */}
      <nav className={cn('hidden gap-6 lg:flex text-sm select-none', className)}>
        {
          MENU_ITEMS.map(menuItem => (
            <React.Fragment key={menuItem.link}>
              {menuItem.sublink?.length
                ? (
                  <DropdownMenuComponent
                    triggerClass={cn(returnClassByCurrentPath(menuItem.link), 'px-6 py-3')}
                    trigger={(
                      <>
                        {menuItem.name[lang]}
                        <LucideChevronDown size={14} />
                      </>
                    )}
                  >
                    {menuItem.sublink.map((submenu) => {
                      return (
                        <Link
                          key={submenu.name[lang] + ''}
                          className={linkBtnClass}
                          href={currentPath === menuItem.link ? submenu.link : menuItem.link + submenu.link}
                        >
                          {submenu.name[lang]}
                        </Link>
                      )
                    })}
                  </DropdownMenuComponent>
                  )
                : (
                  <Link
                    aria-disabled={currentPath === menuItem.link}
                    tabIndex={currentPath === menuItem.link ? -1 : undefined}
                    className={cn(linkBtnClass, 'px-6 py-3', returnClassByCurrentPath(menuItem.link), currentPath === menuItem.link ? 'pointer-events-none' : '')}
                    href={menuItem.link}
                  >
                    {menuItem.name[lang]}
                  </Link>
                  )}
            </React.Fragment>
          ))
        }
      </nav>
    </>
  )
}
