import { AboutMe, Meet } from './components'

export function Homepage() {
  return (
    <main className="flex flex-col">
      <Meet />
      <AboutMe />

      <div className="block">
        <div className="text-3xs">3xs</div>
        <div className="text-2xs">2xs</div>
        <div className="text-xs">xs</div>
        <div className="text-sm">sm</div>
        <div className="text-base">base</div>
        <div className="text-lg">lg</div>
        <div className="text-xl">xl</div>
        <div className="text-2xl">2xl</div>
        <div className="text-3xl">3xl</div>
        <div className="text-4xl">4xl</div>
        <div className="text-5xl">5xl</div>
        <div className="text-6xl">6xl</div>
        <div className="text-7xl">7xl</div>
      </div>

      <div className="min-h-screen min-w-full bg-layer-1" />
    </main>
  )
}
