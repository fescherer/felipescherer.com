import { LogoIcon } from '@/icons'
import Link from 'next/link'

import { HeaderMenu } from './HeaderMenu'
import { PropsWithLocale } from '@/types/language'

export function Header({ lang }: PropsWithLocale) {
  return (
    <div className="after:maskFade fixed right-0 top-0 z-10 flex w-full after:backdrop-blur-md">
      <header className="m-auto flex w-full max-w-screen-lg flex-row-reverse items-center justify-between p-4 text-brand-primary md:flex-row ">
        <div className="md:hidden" />

        <Link href="/">
          <LogoIcon />
        </Link>

        <HeaderMenu lang={lang} />
      </header>
    </div>
  )
}
