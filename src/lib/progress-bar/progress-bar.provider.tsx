'use client'

import { ProgressProvider } from '@bprogress/next/app'
import { PropsWithChildren } from 'react'

export function ProgressBarProvider({ children }: PropsWithChildren) {
  return (
    <ProgressProvider
      color="#2f81f7"
      options={{ showSpinner: false }}
    >
      {children}
    </ProgressProvider>
  )
}
