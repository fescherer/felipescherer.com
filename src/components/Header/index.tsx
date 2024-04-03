import { LogoIcon } from '@/icons'
import Link from 'next/link'

import { HeaderMenu } from './HeaderMenu'

export function Header() {
  return (
    <div className="after:maskFade fixed z-20 flex w-full after:backdrop-blur-md">
      <header className="m-auto flex w-full max-w-screen-lg  items-center justify-between p-4 text-brand-primary ">
        <Link href="/">
          <LogoIcon />
        </Link>

        <HeaderMenu />
      </header>
    </div>
  )
}
