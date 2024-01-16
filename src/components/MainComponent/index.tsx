'use client'

import { PropsWithChildren, useEffect, useState } from 'react'
import { SplashScreen } from '../SplashScreen'

export function MainComponent({ children }: PropsWithChildren) {
  const [hasShowedSplashScreen, setHasShowedSplashScreen] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHasShowedSplashScreen(true)
    }, 1800)
    return () => clearTimeout(timeoutId)
  }, [])

  // TODO solve bug that makes some stars visible in the section

  return (
    <div className="relative overflow-hidden" style={{ maxHeight: hasShowedSplashScreen ? 'none' : '100vh' }}>
      {
        !hasShowedSplashScreen
        && <SplashScreen />
      }

      {children}
    </div>

  )
}
