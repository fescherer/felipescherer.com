'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { PropsWithChildren } from 'react'

export function ProgressBarProvider({ children }: PropsWithChildren) {
  return (
    <>
      {children}

      <ProgressBar
        color="#2f81f7"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  )
}
