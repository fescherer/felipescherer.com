'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import Image from 'next/image'

export function MainComponent({ children }: PropsWithChildren) {
  const [hasShowedSplashScreen, setHasShowedSplashScreen] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHasShowedSplashScreen(true)
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [])

  // TODO make better animation of changing items

  return (
    <>
      {
      !hasShowedSplashScreen
        ? (
          <div id="square" className="absolute z-50 mx-auto my-0 flex h-screen min-h-screen w-screen flex-col items-center overflow-hidden bg-[#090511]">
            <div className="absolute size-full backdrop-blur-xs" />
            <Image src="/favicon.svg" className="z-10 m-auto animate-[ping_2s_ease-in-out] animation-fill-forwards" width={80} height={80} alt="site-logo" />
          </div>
          )
        : <>{ children }</>
    }
    </>
  )
}
