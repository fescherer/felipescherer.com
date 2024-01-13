// Base on https://github.com/jamezmca/orbit/blob/main/index.html

'use client'

import { useEffect } from 'react'

function generateRandomInt(max: number, min: number) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const numOfPlanets = 50
var colorArray = ['aliceblue', 'aqua', 'aquamarine', 'azure', 'blueviolet', 'blue', 'cadetblue', 'chartreuse', 'coral', 'cornflowerblue', 'cyan', 'crimson', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkmagenta', 'darkseagreen', 'darkorange', 'darkslateblue', 'darkorchid', 'darkslategray', 'darkturquoise', 'deeppink', 'darkviolet', 'dodgerblue', 'floralwhite', 'fuchsia', 'gold', 'greenyellow', 'honeydew', 'hotpink', 'indigo', 'lawngreen', 'lightblue', 'lightcyan', 'lightgreen', 'lightskyblue', 'lightsalmon', 'lightseagreen', 'mediumslateblue', 'mediumpurple', 'midnightblue', 'paleturquoise', 'palegreen']

export function LoadingScreen() {
  function generatePlanets() {
    const squareDiv = document.getElementById('square')
    if (!squareDiv) return
    for (let i = 0; i < numOfPlanets; i++) {
      const childToAppend = document.createElement('span')
      childToAppend.classList.add('absolute', 'bg-transparent', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'animate-spinPlanet')
      squareDiv.appendChild(childToAppend)
    }
    const spans = document.querySelectorAll('span')
    spans.forEach((span) => {
      const randHeight = generateRandomInt(350, 40)
      const randWidth = generateRandomInt(350, 40)
      span.style.height = `${randHeight}px`
      span.style.width = `${randWidth}px`

      const randInterval = Math.floor(Math.random() * 500000 + 5000)
      const randDelay = Math.floor(Math.random() * 20000)
      span.style.animationDuration = `${randInterval}ms`
      span.style.animationDelay = `-${randDelay}ms`

      const childNode = document.createElement('div')
      childNode.classList.add('absolute', 'top-0', 'left-0', 'rounded-full')
      const divRadius = Math.random() * 10 + 2
      childNode.style.height = `${divRadius}px`
      childNode.style.width = `${divRadius}px`

      const lengthOfColors = colorArray.length
      const randomColorIndex = Math.floor(Math.random() * lengthOfColors)
      const randomColor = colorArray[randomColorIndex]
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
      <div id="square" className="relative mx-auto my-0 flex h-[720px] w-[1280px] flex-col items-center">
        <h1>ORBITAL</h1>
        <p>LOADING PAGE</p>
      </div>
    </div>
  )
}
