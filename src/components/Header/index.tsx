'use client'

import { LogoIcon } from '@/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const items = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About me',
    link: '/aboutme',
  },
  {
    name: 'Resume',
    link: '/resume',
  },
  {
    name: 'Services',
    link: 'https://services.felipescherer.com',
  },
  {
    name: 'Projects',
    link: '/projects',
  },
  {
    name: 'Blog',
    link: 'https://blog.felipescherer.com',
  },
  {
    name: 'Now',
    link: '/now',
  },
]

export function Header() {
  const path = usePathname()

  return (
    <div className="after:maskFade fixed z-20 flex w-full after:backdrop-blur-md">
      <header className="m-auto flex w-full max-w-screen-lg items-center justify-between p-4 text-brand-primary">
        <Link href="/">
          <LogoIcon />
        </Link>

        <div className="flex items-center gap-4">
          {items.map(item => (
            <Link key={item.name} href={item.link} className={`border-b transition-all hover:border-brand-primary hover:text-brand-hover-primary ${path === item.link ? 'border-brand-primary text-brand-primary' : 'border-transparent text-on-layer-0-l2 '}`}>{item.name}</Link>
          ))}
        </div>
      </header>
    </div>
  )
}
