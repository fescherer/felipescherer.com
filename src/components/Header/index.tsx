import { LogoIcon } from '@/icons'
import Link from 'next/link'

import { HeaderMenu } from './HeaderMenu'
import { PropsWithLocale } from '@/types/language'

export function Header({ lang }: PropsWithLocale) {
  return (
    <div className="after:maskFade fixed z-20 flex w-full after:backdrop-blur-md">
      <header className="m-auto flex w-full max-w-screen-lg  items-center justify-between p-4 text-brand-primary ">
        <Link href="/">
          <LogoIcon />
        </Link>

        <HeaderMenu lang={lang} />
      </header>
    </div>
  )
}
