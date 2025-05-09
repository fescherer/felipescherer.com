import { PropsWithLocale } from '@/@types/language'
import { CCHeaderMenu } from './components/header-menu.cc'
import { CCHeaderLogo } from './components/header-logo.cc'
import { LanguageSelectorComponent } from './components/language-selector.component'
import { cookies } from 'next/headers'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { getAvailableLanguages } from '@/@data/available-languages.data'

export async function Header({ lang }: PropsWithLocale) {
  const cookieLang = cookies().get('data-lang')
  const dictionary = await getDictionary(lang)
  const languages = await getAvailableLanguages(lang)

  return (
    <div className="fixed right-0 top-0 flex w-full maskFade backdrop-blur-sm bg-base-100/70">
      <header className="flex m-auto max-w-4xl w-full justify-between p-4 items-center">
        <CCHeaderMenu dictionary={dictionary} lang={lang} isMobile={true} />
        <CCHeaderLogo />

        <div className="flex gap-2">
          <CCHeaderMenu dictionary={dictionary} lang={lang} isMobile={false} />
          <LanguageSelectorComponent cookieLang={cookieLang?.value ?? ''} languages={languages} />
        </div>
      </header>
    </div>
  )
}
