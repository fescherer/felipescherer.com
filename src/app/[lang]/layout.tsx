import type { Viewport } from 'next'
import { Lora, Poppins } from 'next/font/google'
import '../globals.css'
import React, { PropsWithChildren } from 'react'
import { ProgressBarProvider } from '@/providers/progress-bar.provider'
import 'react-multi-carousel/lib/styles.css'
import { METADATA } from './metadata'
import { Locale, i18n } from '@/i18n-config'
import { Header } from '@/components/header/header.component'
import { ToastContainer } from 'react-toastify'
import { Footer } from '@/components/footer/footer.component'
import 'react-toastify/dist/ReactToastify.css'
import { MainComponent } from '@/components/splash-screen/main.component'

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
      <body className={`${lora.variable} ${poppins.variable} h-screen bg-layer-0 font-text text-on-layer-0-l2`}>
        <ProgressBarProvider>
          <MainComponent>
            <ToastContainer />

            <div className="relative">
              <Header lang={params.lang} />
            </div>

            <main className="pt-16">
              {children}
            </main>

            <Footer />
          </MainComponent>
        </ProgressBarProvider>
      </body>
    </html>
  )
}
