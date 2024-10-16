'use client'

import { usePathname } from 'next/navigation'
import { LucideAlignLeft } from 'lucide-react'
import Link from 'next/link'
import { PropsWithLocale } from '@/types/language'
import { MENU_ITEMS } from '@/utils/menu-items'
import { cn } from '@/utils/cn.function'
import { ClassNameValue } from 'tailwind-merge'

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
      <div className={cn('hidden gap-8 md:flex', className)}>
        {
          MENU_ITEMS.map(menuItem => (
            <Link className={cn('hover:border-brand-primary hover:bg-brand-primary hover:text-brand-on-primary transition-all rounded p-2', currentPath === menuItem.link.replace('/', '') ? 'text-brand-hover-primary' : '')} key={menuItem.link} href={menuItem.link}>{menuItem.name[lang]}</Link>
          ))
        }
      </div>
    </>
  )
}
