import { AnchorButton } from '@/components'

export function Projects() {
  return (
    <div id="projects" className="relative flex min-h-screen w-full items-center justify-center">
      <section id="aboutme" className="m-auto flex h-full w-full max-w-5xl flex-col gap-6 md:flex-row md:justify-between">

        <h2 className="mb-4 font-title text-4xl font-semibold tracking-wide">Projects</h2>
      </section>

      <AnchorButton anchor="#home" />
    </div>
  )
}
