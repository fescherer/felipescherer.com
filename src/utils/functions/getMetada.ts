import { TCustomMetadata } from '@/types/Metadata'
import { Metadata } from 'next'

export function getMetadata(data: TCustomMetadata): Metadata {
  return {
    title: data.defaultTitle,
    description: `Wellcome to my portfolio | ${data.defaultDescription}`,
    keywords: [
      'programming',
      'coding',
      'javascript',
      'react',
      'portfolio',
      ...data.defaultKeywords,
    ],
    openGraph: {
      url: `https://portfolio.felipescherer.com${data.canonicalURL}`,
      title: data.defaultTitle,
      /* Generate this image as code */
      images: [
        {
          url: data.imagePath,
          width: 1200,
          height: 630,
          alt: data.defaultAltImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.defaultTitle,
      description: data.defaultDescription,
      /* TOODO add twitter account here */
      creator: '@fescherer',
      site: '@fescherer',
      images: [
        {
          url: data.imagePath,
          width: 1200,
          height: 630,
          alt: data.defaultAltImage,
        },
      ],
    },
    alternates: {
      canonical: `https://portfolio.felipescherer.com${data.canonicalURL}`,
    },
  }
}
