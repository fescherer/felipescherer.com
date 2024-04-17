import { Copyright, PersonalSkills } from './components'
import { Separator } from '../Separator'
import { PropsWithLocale } from '@/types/language'

export function Footer({ lang }: PropsWithLocale) {
  return (
    <footer>
      <div className="m-auto flex max-w-screen-lg justify-between p-4">

        <PersonalSkills lang={lang} />
        {/* <SiteMap /> */}

      </div>

      <Separator />

      <div className="flex flex-col gap-2 p-4">
        {/* <div className="flex justify-center gap-4 text-center text-sm">
          <Link className="transition-all hover:text-brand-hover-primary" href="/privacy-policy">Privacy Policy</Link>
          <Link className="transition-all hover:text-brand-hover-primary" href="/terms-of-use">Terms of use</Link>
        </div> */}

        <Copyright />
      </div>
    </footer>
  )
}
