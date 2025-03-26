export const i18n = {
  defaultLocale: 'en',
  locales: ['en', 'pt'],
} as const

export type Locale = (typeof i18n)['locales'][number]

export const i18nWithName = {
  defaultLocale: { id: 'en', name: 'English' },
  locales: [{ id: 'en', name: 'English' }, { id: 'pt', name: 'Português' }],
} as const

export type LocaleWithName = (typeof i18nWithName)['locales'][number]

export type LocaleText = {
  pt: string
  en: string
}
