import { Metadata } from 'next'

// TODO Fix metadata//

const SITE_NAME = 'Portfolio'

export const METADATA: Metadata = {
  metadataBase: new URL('https://portfolio.felipescherer.com'),
  robots: {
    'index': true,
    'follow': true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    'googleBot': 'index, follow',
  },
  openGraph: {
    siteName: SITE_NAME,
    type: 'website',
  },
  title: {
    template: '%s | Felipe Scherer',
    default: 'Felipe Scherer',
  },
  applicationName: SITE_NAME,
  appleWebApp: {
    title: SITE_NAME,
    statusBarStyle: 'default',
    capable: true,
  },

  /* TODO Add sites verification */
  // verification: {
  //   google: 'YOUR_DATA',
  //   yandex: ['YOUR_DATA'],
  //   other: {
  //     'msvalidate.01': ['YOUR_DATA'],
  //     'ir-site-verification-token': ['YOUR_DATA'],
  //     'facebook-domain-verification': ['YOUR_DATA'],
  //     'impact-site-verification': ['YOUR_DATA'],
  //     'p:domain_verify': ['YOUR_DATA'],
  //   },
  // },

}
