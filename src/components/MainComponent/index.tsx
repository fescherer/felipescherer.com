'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import { SplashScreen } from '../SplashScreen'

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
        ? <SplashScreen />
        : <>{ children }</>
    }
    </>
  )
}
