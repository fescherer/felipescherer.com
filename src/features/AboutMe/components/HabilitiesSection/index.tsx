import { HabilityList } from './components'

export function HabilitiesSection() {
  return (
    <div className="relative mx-auto my-0 flex min-h-[500px] max-w-[500px] items-center justify-center">
      <div className="relative flex items-center justify-center p-14">
        <div className="absolute aspect-square w-[100px] bg-gradient-to-br from-brand-primary to-brand-secondary blur-3xl md:w-[200] lg:w-[200px]" />
        <span className="z-10 text-on-layer-0-l1">Stack</span>
      </div>

      <HabilityList />
    </div>
  )
}
