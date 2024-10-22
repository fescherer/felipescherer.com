'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import { SplashScreenComponent } from './splash-screen.component'

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
        ? <SplashScreenComponent />
        : <>{ children }</>
    }
    </>
  )
}
