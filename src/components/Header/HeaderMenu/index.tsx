'use client'

import { usePathname } from 'next/navigation'
import { LucideMenu, LucideX } from 'lucide-react'
import LocaleSwitcher from '../LocaleSwitcher'
import Link from 'next/link'
import { useState } from 'react'
import { PropsWithLocale } from '@/types/language'

const items = [
  {
    name: {
      en: 'Home',
      pt: 'Home',
    },
    link: '',
  },
  {
    name: {
      en: 'About me',
      pt: 'Sobre mim',
    },
    link: 'aboutme',
  },
  {
    name: {
      en: 'Resume/CV',
      pt: 'Currículo',
    },
    link: 'resume',
  },
  {
    name: 'Services',
    link: 'https://services.fennectales.com',
    name: {
      en: 'Services',
      pt: 'Serviços',
    },
  },
  {
    name: {
      en: 'Projects',
      pt: 'Projetos',
    },
    link: 'projects',
  },
  {
    name: 'Blog',
    link: 'https://fennectales.com',
  },
  {
    name: {
      en: 'Now',
      pt: 'Atualmente',
    },
    link: 'now',
  },
]

export function HeaderMenu({ lang }: PropsWithLocale) {
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
