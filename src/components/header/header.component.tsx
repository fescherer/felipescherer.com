import { LogoIcon } from '@/icons'
import Link from 'next/link'

import { PropsWithLocale } from '@/types/language'
import { CCHeaderMenu } from './components/header-menu.cc'
import { CCConfigSelector } from './components/config-selector.cc'

export function Header({ lang }: PropsWithLocale) {
  return (
    <div className="after:maskFade fixed right-0 top-0 z-10 flex w-full bg-layer-0 after:backdrop-blur-md">
      <header className="m-auto grid w-full max-w-screen-lg grid-cols-5 items-center p-4">
        <Link href="/" className="order-2 col-span-3 flex justify-center text-brand-primary md:order-1 md:col-span-2 md:justify-start">
          <LogoIcon />
        </Link>

        <CCHeaderMenu lang={lang} className="order-1 md:order-2 md:col-span-2" />
        <CCConfigSelector className="order-3" />
      </header>
    </div>
  )
}
