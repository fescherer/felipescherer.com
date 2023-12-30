import Link from 'next/link'
import { StarryNight } from './components'

export function Meet() {
  return (
    <div className="relative overflow-hidden">
      <StarryNight />

      <div className="flex min-h-screen w-full items-center justify-center">
        <section id="meet" className="flex max-w-5xl flex-col-reverse items-center p-4 md:flex-row md:justify-between">

          <div className="flex flex-col text-center font-title md:text-left">
            <h2 className="text-2xl font-medium leading-none">Meet</h2>
            <h1 className="text-4xl font-medium text-on-layer-0-l1 md:text-6xl">Felipe Scherer</h1>
            {/* TODO Make a typing effect for what I am. Developer, Designer, Content Creator, Game Developer */}
            <span className="font-mono">Developer</span>

            <Link href="#aboutme" className="mt-6 self-center rounded-sm bg-brand-primary px-2 py-4 text-xl text-brand-on-primary ring-4 ring-transparent transition-all hover:bg-brand-hover-primary md:self-start">
              Explore my Portifolio
            </Link>
          </div>

          <div className="relative flex p-14">
            <div className="absolute aspect-square w-[192px] bg-gradient-to-br from-brand-primary to-brand-secondary blur-3xl md:w-[252px] lg:w-[320px]" />
            <div className="absolute aspect-square w-[192px] scale-105 rounded-full bg-profile bg-cover blur-lg grayscale md:w-[252px] lg:w-[320px]" />
            <div className="aspect-square w-[192px] rounded-full bg-profile bg-cover grayscale md:w-[252px] lg:w-[320px]" />
          </div>

        </section>
      </div>

    </div>

  )
}
