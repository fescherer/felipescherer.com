export function Meet() {
  return (
    <div className="m-auto flex min-h-screen w-full max-w-5xl flex-col items-center p-4 md:flex-row md:justify-between">
      <div className="text-center font-title md:text-left">
        <h2 className="text-2xl font-medium leading-none">Meet</h2>
        <h1 className="text-4xl font-medium text-on-layer-0-l1 md:text-6xl">Felipe Scherer</h1>
        <span className="italic">Developer / Designer / Content Creator / Game Developer</span>
        <button type="button" className="mt-6 rounded-sm bg-brand-primary px-2 py-4 text-xl text-brand-on-primary ring-4 ring-transparent transition-all hover:bg-brand-hover-primary">Explore my Portifolio</button>
      </div>

      <div className="relative flex p-14">
        <div className="absolute aspect-square w-[192px] bg-gradient-to-br from-brand-primary to-brand-secondary blur-3xl md:w-[252px] lg:w-[320px]" />
        <div className="absolute aspect-square w-[192px] scale-110 rounded-full bg-hero-pattern bg-cover blur-lg grayscale md:w-[252px] lg:w-[320px]" />
        <div className="aspect-square w-[192px] rounded-full bg-hero-pattern bg-cover grayscale md:w-[252px]   lg:w-[320px]" />
      </div>

    </div>
  )
}
