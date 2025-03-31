import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Locale } from '@/lib/i18n/i18n-config'

export type TAvailableLanguages = {
  tooltip: string
  en: string
  pt: string
}

export async function getAvailableLanguages(lang: Locale) {
  const dictionary = await getDictionary(lang)
  const t = dictionary['languages']

  return ({
    tooltip: t.toltip,
    en: t.en,
    pt: t.pt,
  })
}
