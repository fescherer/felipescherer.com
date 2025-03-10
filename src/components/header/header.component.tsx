import { PropsWithLocale } from '@/types/language'
import { CCHeaderMenu } from './components/header-menu.cc'
import { CCHeaderLogo } from './components/header-logo.cc'
import { LanguageSelectorComponent } from './components/language-selector.component'
import { ThemeSelectorComponent } from './components/theme-selector.component'
import { cookies } from 'next/headers'

export function Header({ lang }: PropsWithLocale) {
  const theme = cookies().get('data-theme')
  const cookieLang = cookies().get('data-lang')

  return (
    <div className="fixed right-0 top-0 flex w-full bg-layer-0 after:maskFade after:backdrop-blur-md">
      <header className="m-auto grid w-full max-w-(--breakpoint-lg) grid-cols-6 items-center p-4">

        <div className="order-2 col-span-4 flex justify-center lg:order-1 lg:col-span-2 lg:justify-start">
          <CCHeaderLogo />
        </div>

        <CCHeaderMenu lang={lang} className="order-1 lg:order-2 lg:col-span-3" />

        <div className="order-3 flex justify-center gap-4">
          <LanguageSelectorComponent cookieLang={cookieLang?.value ?? ''} />
          <ThemeSelectorComponent lang={lang} theme={theme?.value ?? 'dark'} />
        </div>
      </header>
    </div>
  )
}
