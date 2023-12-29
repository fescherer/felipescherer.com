import Link from 'next/link'

export function Meet() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute -z-10 h-full w-full scale-110 bg-hero-pattern object-cover blur" />

      <section id="meet" className="m-auto flex min-h-screen w-full max-w-5xl flex-col items-center p-4 md:flex-row md:justify-between">

        <div className="flex flex-col text-center font-title md:text-left">
          <h2 className="text-2xl font-medium leading-none">Meet</h2>
          <h1 className="text-4xl font-medium text-on-layer-0-l1 md:text-6xl">Felipe Scherer</h1>
          <span className="italic">Developer / Designer / Content Creator / Game Developer</span>
          <Link href="#aboutme" className="mt-6 self-start rounded-sm bg-brand-primary px-2 py-4 text-xl text-brand-on-primary ring-4 ring-transparent transition-all hover:bg-brand-hover-primary">Explore my Portifolio</Link>
        </div>

        <div className="relative flex p-14">
          <div className="absolute aspect-square w-[192px] bg-gradient-to-br from-brand-primary to-brand-secondary blur-3xl md:w-[252px] lg:w-[320px]" />
          <div className="absolute aspect-square w-[192px] scale-110 rounded-full bg-profile bg-cover blur-lg grayscale md:w-[252px] lg:w-[320px]" />
          <div className="aspect-square w-[192px] rounded-full bg-profile bg-cover grayscale md:w-[252px]   lg:w-[320px]" />
        </div>

      </section>

    </div>

  )
}
