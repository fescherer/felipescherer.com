import type { Viewport } from 'next'
import { Lora, Poppins } from 'next/font/google'
import '../globals.css'
import React, { PropsWithChildren } from 'react'
import { ProgressBarProvider } from '@/providers/progress-bar.provider'
import { Footer } from '@/components/Footer'
import 'react-multi-carousel/lib/styles.css'
import { MainComponent } from '@/components/MainComponent'
import { METADATA } from './metadata'
import { Header } from '@/components'
import { Locale, i18n } from '@/i18n-config'

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

type RootLayoutType = {
  params: {
    lang: Locale
  }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({ children, params }: PropsWithChildren<RootLayoutType>) {
  return (
    <html lang={params.lang}>
      <body className={`${lora.variable} ${poppins.variable} bg-layer-0 font-text text-on-layer-0-l2`}>
        <ProgressBarProvider>
          <MainComponent>
            <Header lang={params.lang} />

            <main className="pt-16">
              {children}
            </main>

            <Footer lang={params.lang} />
          </MainComponent>
        </ProgressBarProvider>
      </body>
    </html>
  )
}
