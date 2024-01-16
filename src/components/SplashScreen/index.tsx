// Base on https://github.com/jamezmca/orbit/blob/main/index.html
import Image from 'next/image'
import { useEffect } from 'react'

function generateRandomInt(max: number, min: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const numOfPlanets = 25
const starsColors = ['#F0F09E', '#f28baf', '#c6ddf4', '#cda1ca', '#fac096', '#a2d4d6', '#fddeb9']
// TODO Better Splash screen with project logo insted an text

export function SplashScreen() {
  function generatePlanets() {
    const squareDiv = document.getElementById('square')
    if (!squareDiv) return
    for (let i = 0; i < numOfPlanets; i++) {
      const childToAppend = document.createElement('span')
      childToAppend.classList.add('absolute', 'bg-transparent', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'animate-spinPlanet')
      squareDiv.prepend(childToAppend)
    }
    const spans = document.querySelectorAll('span')
    spans.forEach((span) => {
      const randHeight = generateRandomInt(500, 100)
      const randWidth = generateRandomInt(500, 100)
      span.style.height = `${randHeight}px`
      span.style.width = `${randWidth}px`

      const randInterval = Math.floor(Math.random() * 20000 + 8000)
      const randDelay = Math.floor(Math.random() * 20000)
      span.style.animationDuration = `${randInterval}ms`
      span.style.animationDelay = `-${randDelay}ms`

      const childNode = document.createElement('div')
      childNode.classList.add('absolute', 'top-0', 'left-0', 'rounded-full')
      const divRadius = Math.random() * 16 + 5
      childNode.style.height = `${divRadius}px`
      childNode.style.width = `${divRadius}px`

      const randomColorIndex = Math.floor(Math.random() * starsColors.length)
      const randomColor = starsColors[randomColorIndex]
      childNode.style.background = randomColor
      childNode.style.boxShadow = `0 0 1px 1px ${randomColor}`

      span.appendChild(childNode)
    })
  }

  useEffect(() => {
    generatePlanets()
  }, [])

  return (
    <div className="min-h-screen">
      <div id="square" className="absolute mx-auto my-0 flex h-screen w-screen flex-col items-center overflow-hidden bg-[#090511]">
        <div className="absolute h-full w-full backdrop-blur-sm" />
        <Image src="/favicon.svg" className="z-10 m-auto animate-[ping_2s_ease-in-out] animation-fill-forwards" width={80} height={80} alt="site-logo" />
      </div>
    </div>
  )
}
