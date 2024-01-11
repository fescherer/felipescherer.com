export interface IImage {
  img: string
  title: string
  alt: string
  height: number
  width: number
}

export interface IExperience {
  id: string
  info: {
    title: string
    short_desc: string
    desc: string[]
    job: string
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
  text: string
  icon: string
  doc: string
}
