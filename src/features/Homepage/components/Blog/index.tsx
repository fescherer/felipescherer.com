import { AnchorButton } from '@/components'

export function Blog() {
  return (
    <div id="blog" className="relative flex min-h-screen w-full items-center justify-center bg-layer-1">
      <section id="aboutme" className="m-auto flex h-full w-full max-w-5xl flex-col gap-6 md:flex-row md:justify-between">

        <h2 className="mb-4 font-title text-4xl font-semibold tracking-wide">Blog</h2>
      </section>

      <AnchorButton anchor="#projects" />
    </div>
  )
}
