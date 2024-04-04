import Link from 'next/link'
import { StarryNight, Typewriter } from './components'
import { ContentWrapper } from '..'
import { Locale } from '@/i18n-config'
import { getDictionary } from '@/get-dictionary'

type MeetProps = {
  lang: Locale
}

export async function Meet({ lang }: MeetProps) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="relative overflow-hidden">
      <StarryNight />

      <ContentWrapper anchor="#aboutme" id="meet" isFlexReverse index={0}>

        <div className="flex flex-col text-center font-title tracking-wide md:text-left">
          <h2 className="text-2xl font-medium leading-none">{dictionary.homepage.meet.title}</h2>
          <h1 className="text-4xl font-medium text-on-layer-0-l1 md:text-6xl">Felipe Scherer</h1>
          <Typewriter items={dictionary.homepage.meet.typewriter} />

          <Link href="#aboutme" className="design-btn mt-6 self-center text-xl md:self-start ">
            {dictionary.homepage.meet.button}
          </Link>
        </div>

        <div className="relative flex p-14">
          <div className="absolute aspect-square w-[192px] bg-gradient-to-br from-brand-primary to-brand-secondary blur-3xl md:w-[252px] lg:w-[320px]" />
          <div className="absolute aspect-square w-[192px] scale-105 rounded-full bg-profile bg-cover blur-lg grayscale md:w-[252px] lg:w-[320px]" />
          <div className="aspect-square w-[192px] rounded-full bg-profile bg-cover grayscale md:w-[252px] lg:w-[320px]" />
        </div>

      </ContentWrapper>

    </div>

  )
}
