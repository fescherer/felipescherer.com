import { LocaleText } from '@/lib/i18n/i18n-config'

export interface IImage {
  img: string
  title: LocaleText
  alt: LocaleText
  height: number
  width: number
}

export interface IExperience {
  id: string
  info: {
    title: string
    short_desc: LocaleText
    desc: LocaleText[]
    job: LocaleText
  }
  date_start: string
  date_end: string
  link: string
  img_showcase: IImage
  logo: string
}

export interface IHability {
  id: string
  title: string
  text: LocaleText
  icon: string
  doc: string
  short_description: LocaleText
  category: 'software' | 'css' | 'javascript' | 'other'
  isFavorite: boolean
}

export interface IBookList {
  id: string
  title: string
  authors: string[]
  isReading?: boolean
  isPlanToRead?: boolean
  rate?: number
  link: string
}

export interface IMyHistory {
  title: LocaleText
  text: LocaleText
  image: string
}
