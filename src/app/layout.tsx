import { Archivo, Hepta_Slab } from 'next/font/google'
import { PropsWithChildren } from 'react'

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

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html className="scroll-smooth overflow-x-hidden">
      <body className={`${archivo.variable} ${heptaSlab.variable} font-text h-screen bg-layer-0 text-text bg-base-100 w-screen`}>
        {children}
      </body>
    </html>
  )
}
