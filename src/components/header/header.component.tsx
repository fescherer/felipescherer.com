import { PropsWithLocale } from '@/types/language'
import { CCHeaderMenu } from './components/header-menu.cc'
import { CCHeaderLogo } from './components/header-logo.cc'
import { LanguageSelectorComponent } from './components/language-selector.component'
import { ThemeSelectorComponent } from './components/theme-selector.component'
import { cookies } from 'next/headers'

export function Header({ lang }: PropsWithLocale) {
  const theme = cookies().get('data-theme')

  return (
    <div className="after:maskFade fixed right-0 top-0 flex w-full bg-layer-0 after:backdrop-blur-md">
      <header className="m-auto grid w-full max-w-screen-lg grid-cols-6 items-center p-4">

        <div className="order-2 col-span-4 flex justify-center lg:order-1 lg:col-span-2 lg:justify-start">
          <CCHeaderLogo />
        </div>

        <CCHeaderMenu lang={lang} className="order-1 lg:order-2 lg:col-span-3" />

        <div className="order-3 flex justify-center gap-4">
          <LanguageSelectorComponent />
          <ThemeSelectorComponent lang={lang} theme={theme?.value ?? 'dark'} />
        </div>
      </header>
    </div>
  )
}
