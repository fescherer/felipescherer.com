'use client'

import { usePathname } from 'next/navigation'
import { LucideAlignLeft, LucideChevronDown } from 'lucide-react'
import Link from 'next/link'
import { PropsWithLocale } from '@/types/language'
import { MENU_ITEMS } from '@/utils/menu-items'
import { cn } from '@/utils/cn.function'
import { ClassNameValue } from 'tailwind-merge'
import { DropdownMenuComponent } from '@/components/primitives'
import React from 'react'

type TCCHeaderMenu = {
  className: ClassNameValue
}

export function CCHeaderMenu({ lang, className }: PropsWithLocale<TCCHeaderMenu>) {
  const path = usePathname()
  console.log(path)
  const currentPath = path.split('/')?.[2] || ''

  return (
    <>
      {/* MOBILE VERSION */}
      <div className={cn('md:hidden', className)}>
        <LucideAlignLeft />
      </div>

      {/* DESKTOP VERSION */}
      <nav className={cn('hidden gap-8 md:flex', className)}>
        {
          MENU_ITEMS.map(menuItem => (
            <React.Fragment key={menuItem.link}>
              {menuItem.sublink?.length
                ? (
                  <DropdownMenuComponent
                    trigger={(
                      <>
                        {menuItem.name[lang]}
                        <LucideChevronDown size={14} />
                      </>
                    )}
                  >
                    {menuItem.sublink.map((submenu, index) => {
                      return (
                        <Link key={submenu.link + index} className={cn('p-2 rounded hover:text-brand-on-primary hover:bg-brand-hover-primary transition-all', currentPath === submenu.link ? 'bg-brand-primary text-brand-on-primary' : 'text-on-layer-0-l2')} href={submenu.link}>{submenu.name[lang]}</Link>
                      )
                    })}
                  </DropdownMenuComponent>
                  )
                : (
                  <Link className={cn('hover:border-brand-primary hover:bg-brand-primary hover:text-brand-on-primary transition-all rounded p-2 text-on-layer-0-l1', currentPath === menuItem.link.replace('/', '') ? 'text-brand-hover-primary' : '')} href={menuItem.link}>
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
