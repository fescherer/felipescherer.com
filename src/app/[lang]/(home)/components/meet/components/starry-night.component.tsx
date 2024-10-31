// Based on https://codepen.io/bennettfeely/pen/vYLmYJz

import { generateComets } from '../functions/generate-comets'
import { generateConstellation } from '../functions/generate-constellation'

export function StarryNightComponent() {
  const constellation = generateConstellation(3)
  const comets = generateComets()

  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div className="pointer-events-none absolute -z-10 size-full overflow-hidden bg-gradient-to-b from-[#17121b] via-[#0d0d1d] via-99%">
      {
        constellation.map((stars, index) => (
          <svg key={index} className="absolute inset-0 animate-star [&:nth-child(2)]:animation-delay-[calc(4s_*_-0.33)] [&:nth-child(3)]:animation-delay-[calc(4s_*_-0.66)]" width="100%" height="100%" preserveAspectRatio="none">
            {
              stars.map(star => (
                <circle key={star.id} style={{ fill: star.color }} className="[&:nth-child(13n)]:opacity-40 [&:nth-child(19n)]:opacity-20 [&:nth-child(3n)]:opacity-80 [&:nth-child(7n)]:opacity-60" cx={star.cx} cy={star.cy} r={star.r} />
              ))
            }
          </svg>
        ))
      }

      <svg width="100%" height="100%" preserveAspectRatio="none">
        <defs>
          <radialGradient id="comet-gradient" cx="0" cy=".5" r="0.5">
            <stop offset="0%" stopColor="rgba(255,255,255,.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>

        {
          comets.map(comet => (
            <g key={comet.id} transform={`rotate(${comet.angle})`}>
              <ellipse
                className="origin-center animate-comet"
                style={{ animationDelay: comet.delay }}
                fill="url(#comet-gradient)"
                cx={comet.cx}
                cy={comet.cy}
                rx={comet.rx}
                ry={comet.ry}
              />
            </g>
          ))
        }
      </svg>
    </div>
  )
}
