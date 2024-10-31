import Link from 'next/link'
import { getDictionary } from '@/get-dictionary'
import { PropsWithLocale } from '@/types/language'
import { StarryNightComponent } from './components/starry-night.component'
import { Typewriter } from './components/typewritter.component'
import { ContentWrapperComponent } from '../content-wrapper.component'

export async function MeetSection({ lang }: PropsWithLocale) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="relative overflow-hidden text-[#fff]">
      <StarryNightComponent />

      <ContentWrapperComponent anchor="#aboutme" id="meet" index={0}>
        <div className="flex flex-col text-center font-title tracking-wide md:text-left">
          <h2 className="text-2xl font-medium leading-none">{dictionary.homepage.meet.title}</h2>
          <h1 className="text-4xl font-medium md:text-6xl">Felipe Scherer</h1>
          <Typewriter items={dictionary.homepage.meet.typewriter} />

          <Link href="#aboutme" className="btn btn-primary mt-6 self-center text-xl md:self-start ">
            {dictionary.homepage.meet.button}
          </Link>
        </div>

        <div className="relative flex p-14">
          <div className="absolute aspect-square w-[192px] bg-gradient-to-br from-brand-primary to-brand-secondary blur-3xl md:w-[252px] lg:w-[320px]" />
          <div className="absolute aspect-square w-[192px] scale-105 rounded-full bg-profile bg-cover blur-lg grayscale md:w-[252px] lg:w-[320px]" />
          <div className="aspect-square w-[192px] rounded-full bg-profile bg-cover grayscale md:w-[252px] lg:w-[320px]" />
        </div>
      </ContentWrapperComponent>
    </div>

  )
}
