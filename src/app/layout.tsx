import type { Viewport } from 'next'
import { Lora, Poppins } from 'next/font/google'
import './globals.css'
import React, { PropsWithChildren } from 'react'
import { ProgressBarProvider } from '@/providers/progress-bar.provider'
import { Footer } from '@/components/Footer'
import 'react-multi-carousel/lib/styles.css'
import { MainComponent } from '@/components/MainComponent'
import { METADATA } from './metadata'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-title',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-text',
  display: 'swap',
})

export const metadata = METADATA

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#2E7A85',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${poppins.variable} bg-layer-0 font-text text-on-layer-0-l2`}>
        <ProgressBarProvider>
          <MainComponent>
            {children}
            <Footer />
          </MainComponent>
        </ProgressBarProvider>
      </body>
    </html>
  )
}
