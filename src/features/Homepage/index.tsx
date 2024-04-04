import { Locale } from '@/i18n-config'
import { AboutMe, Blog, Meet, Projects } from './components'

type HomepageProps = {
  lang: Locale
}

export function Homepage({ lang }: HomepageProps) {
  return (
    <main className="flex flex-col">
      <Meet />
      <AboutMe lang={lang} />
      <Blog />
      <Projects />
    </main>
  )
}
