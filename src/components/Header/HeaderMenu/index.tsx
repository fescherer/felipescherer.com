'use client'

import { usePathname } from 'next/navigation'
import { LucideMenu, LucideX } from 'lucide-react'
import LocaleSwitcher from '../LocaleSwitcher'
import Link from 'next/link'
import { useState } from 'react'

const items = [
  {
    name: 'Home',
    link: '',
  },
  {
    name: 'About me',
    link: 'aboutme',
  },
  {
    name: 'Resume',
    link: 'resume',
  },
  {
    name: 'Services',
    link: 'https://services.fennectales.com',
  },
  {
    name: 'Projects',
    link: 'projects',
  },
  {
    name: 'Blog',
    link: 'https://fennectales.com',
  },
  {
    name: 'Now',
    link: 'now',
  },
]

export function HeaderMenu() {
  const path = usePathname()
  const currentPath = path.split('/')?.[2] || ''

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setIsMenuOpen(true)} className="text-on-layer-0-l2 transition-colors hover:text-brand-primary focus:text-brand-primary">
        <LucideMenu />
      </button>

      {
        isMenuOpen && (
          <button type="button" onClick={() => setIsMenuOpen(false)} className="fixed right-0 top-0 h-full w-full cursor-default bg-[#000000af]" />
        )
      }

      {
        isMenuOpen && (
          <div className="fixed right-0 top-0 flex h-full flex-col items-start gap-4 bg-layer-1 px-8 pt-8">
            <button type="button" onClick={() => setIsMenuOpen(false)} className="text-on-layer-0-l2 transition-colors hover:text-brand-primary focus:text-brand-primary">
              <LucideX />
            </button>

            {items.map(item => (
              <Link onClick={() => setIsMenuOpen(false)} key={item.name} href={item.link} className={`border-b transition-all hover:border-brand-primary hover:text-brand-hover-primary ${currentPath === item.link ? 'border-brand-primary text-brand-primary' : 'border-transparent text-on-layer-0-l2 '}`}>{item.name}</Link>
            ))}

            <LocaleSwitcher />
          </div>
        )
      }

    </>
  )
}
