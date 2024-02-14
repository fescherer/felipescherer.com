import { Homepage } from '@/features'
import type { Metadata } from 'next'

/* TODO GENERATE METADA FOR ALL PAGES USING DOC https://nextjs.org/docs/app/api-reference/functions/generate-metadata */

const defaultDescription = 'Bla bla'
const defaultTitle = 'Felipe Scherer'
const canonicalURL = 'https://portfolio.felipescherer.com'
const imagePath = '/thumb.png'
const defaultAltImage = 'Felipe Schereer'
const defaultKeywords = [
  'programming',
  'coding',
  'javascript',
  'react',
  'portfolio',
]

export const metadata: Metadata = {
  title: defaultTitle,
  description: `Venha conhecer meu portifolio | ${defaultDescription}`,
  keywords: [...defaultKeywords, 'institucional-page'],
  openGraph: {
    url: canonicalURL,
    title: defaultTitle,
    /* Generate this image as code */
    images: [
      {
        url: imagePath,
        width: 1200,
        height: 630,
        alt: defaultAltImage,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    /* TOODO add twitter account here */
    creator: '@fescherer',
    site: '@fescherer',
    images: [
      {
        url: imagePath,
        width: 1200,
        height: 630,
        alt: defaultAltImage,
      },
    ],
  },
  alternates: {
    canonical: canonicalURL,
  },
}

export default function Home() {
  return (
    <Homepage />
  )
}
