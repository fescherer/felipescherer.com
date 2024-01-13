import { HABILITIES_DATA } from '@/utils/aboutme/habilities'
import { HabilityItem } from '..'

const maxNumerFirstLine = 7
const maxNumerSecondLine = 21

function generateBounds(index: number): number {
  if (index < maxNumerFirstLine) return 100
  else if (index < maxNumerSecondLine) return 200
  return 0
}

export function HabilityList() {
  return (
    <>
      {
        HABILITIES_DATA.map((hability, index) => {
          const size = generateBounds(index)
          const divideNumber = index < maxNumerFirstLine ? 7 : HABILITIES_DATA.length - maxNumerFirstLine
          const angle = 360 / divideNumber * index + 1 % divideNumber * Math.random() * 12
          return (
            <span style={{ height: size, width: size, transform: `translate(-50%, -50%) rotate(${angle}deg)` }} key={hability.id} className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spinPlanet bg-transparent">
              <HabilityItem hability={hability} rotate={angle} />
            </span>
          )
        })
      }
    </>
  )
}
