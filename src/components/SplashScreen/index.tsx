// Base on https://github.com/jamezmca/orbit/blob/main/index.html
import Image from 'next/image'

function generateRandomInt(max: number, min: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const numOfPlanets = 25
const starsColors = ['#F0F09E', '#f28baf', '#c6ddf4', '#cda1ca', '#fac096', '#a2d4d6', '#fddeb9']

const planets = Array.from({ length: numOfPlanets }, (_, index) => {
  const randHeight = generateRandomInt(500, 100)
  const randWidth = generateRandomInt(500, 100)
  const randInterval = `${Math.floor(Math.random() * 20000 + 8000)}ms`
  const randDelay = `-${Math.floor(Math.random() * 20000)}ms`
  const divRadius = `${Math.random() * 16 + 5}px`
  const randomColorIndex = Math.floor(Math.random() * starsColors.length)
  const randomColor = starsColors[randomColorIndex]

  return (
    <span key={index} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spinPlanet bg-transparent" style={{ height: `${randHeight}px`, width: `${randWidth}px`, animationDuration: randInterval, animationDelay: randDelay }}>
      <div className="absolute left-0 top-0 rounded-full" style={{ height: divRadius, width: divRadius, background: randomColor, boxShadow: `0 0 1px 1px ${randomColor}` }} />
      <div />
    </span>
  )
})

export function SplashScreen() {
  return (
    <div id="square" className="absolute z-50 mx-auto my-0 flex h-screen min-h-screen w-screen flex-col items-center overflow-hidden bg-[#090511]">
      {planets}
      <div className="absolute h-full w-full backdrop-blur-sm" />
      <Image src="/favicon.svg" className="z-10 m-auto animate-[ping_2s_ease-in-out] animation-fill-forwards" width={80} height={80} alt="site-logo" />
    </div>
  )
}
