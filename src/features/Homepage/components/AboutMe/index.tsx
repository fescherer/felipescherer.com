import { ContentWrapper } from '..'

const photos = [
  'bg-[url(/felipe-scherer/big-shoes.webp)]',
  'bg-[url(/felipe-scherer/black-white.webp)]',
  'bg-[url(/felipe-scherer/coconout.webp)]',
  'bg-[url(/felipe-scherer/dark-side.webp)]',
  'bg-[url(/felipe-scherer/photo-flower.webp)]',
]

export function AboutMe() {
  return (
    <ContentWrapper anchor="#blog" id="aboutme">
      <div className={`${photos[4]} h-[410px] min-w-[316px] bg-layer-1 bg-cover`} />

      <div className="flex h-full max-w-[600px] flex-col gap-4 md:flex-row">
        <div className="flex h-full flex-col">
          <h2 className="mb-4 font-title text-4xl font-semibold tracking-wide">About Me</h2>
          <p className="flex-1 text-justify text-sm italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nemo sed exercitationem facilis magnam, a sequi odio maxime fugit vel, provident aperiam. Debitis eum praesentium harum excepturi, iure aliquid quas!</p>
          <button type="button" className="mt-16 self-center rounded-sm bg-brand-primary px-2 py-4 text-brand-on-primary ring-4 ring-transparent transition-all hover:bg-brand-hover-primary md:self-start">Download my Resume</button>
        </div>

        <div className="flex flex-row justify-center gap-2 md:flex-col">
          <button type="button" className="rounded">GIT</button>
          <button type="button" className="rounded">YO</button>
          <button type="button" className="rounded">LI</button>
          <button type="button" className="rounded">FI</button>
          <button type="button" className="rounded">X</button>
        </div>
      </div>
    </ContentWrapper>
  )
}
