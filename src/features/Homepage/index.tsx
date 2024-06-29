import { AboutMe, Blog, Meet, Projects } from './components'
import { PropsWithLocale } from '@/types/language'

export function Homepage({ lang }: PropsWithLocale) {
  return (
    <main className="flex flex-col">
      <Meet lang={lang} />
      <AboutMe lang={lang} />
      <Blog lang={lang} />
      <Projects lang={lang} />
    </main>
  )
}
