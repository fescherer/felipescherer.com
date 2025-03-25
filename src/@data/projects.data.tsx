import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Locale } from '@/lib/i18n/i18n-config'

export type IProject = {
  id: string
  // type: IProjectType
  tags: string[]
  title: string
  description: string
  date: string
  links: {
    github?: string
    figma?: string
    site?: string
  }
  images: string[]
}

export async function getProjectsData(lang: Locale) {
  const dictionary = await getDictionary(lang)
  const t = dictionary.project.data

  return ([
    {
      title: t['alura-courses'].title,
      description: t['alura-courses'].description,
    },
  ])
}
