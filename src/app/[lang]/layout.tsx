import type { Viewport } from 'next'
import { Hepta_Slab, Archivo } from 'next/font/google'
import '../globals.css'
import React, { PropsWithChildren } from 'react'
import { ProgressBarProvider } from '@/lib/progress-bar/progress-bar.provider'
import 'react-multi-carousel/lib/styles.css'
import { METADATA } from './metadata'
import { Locale, i18n } from '@/lib/i18n/i18n-config'
import { Header } from '@/@components/header/header.component'
import { ToastContainer } from 'react-toastify'
import { Footer } from '@/lib/_felipescherer.com/components/footer/footer.component'
import 'react-toastify/dist/ReactToastify.css'
import { MainComponent } from '@/lib/_felipescherer.com/components/splash-screen/main.component'

const heptaSlab = Hepta_Slab({
  subsets: ['latin'],
  variable: '--font-title',
  display: 'swap',
})

const archivo = Archivo({
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
    <html className="scroll-smooth" lang={params.lang}>
      <body className={`${archivo.variable} ${heptaSlab.variable} font-text h-screen bg-layer-0 text-text bg-base-300`}>
        <ProgressBarProvider>
          <MainComponent>
            <ToastContainer />
            <Header lang={params.lang} />

            <main className="pt-16 flex m-auto">
              {children}
            </main>

            <Footer lang={params.lang} />

          </MainComponent>
        </ProgressBarProvider>
      </body>
    </html>
  )
}
