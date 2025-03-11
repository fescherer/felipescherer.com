'use client'

import { LogoIcon } from '@/lib/icons'
import { cn } from '@/lib/clsx-tailwind-merge/cn.function'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function CCHeaderLogo() {
  const path = usePathname()
  const currentPath = '/' + (path.split('/')?.[2] || '')
  const isCurrentPath = currentPath === '/'

  return (
    <Link
      href="/"
      className={cn('text-brand-primary transition-all hover:text-brand-hover-primary', isCurrentPath ? 'pointer-events-none' : '')}
      aria-disabled={isCurrentPath}
      tabIndex={isCurrentPath ? -1 : undefined}
    >
      <LogoIcon />
    </Link>
  )
}
