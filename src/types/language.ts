import { Locale } from '@/i18n-config'

export type PropsWithLocale<P = unknown> = P & { lang: Locale }
