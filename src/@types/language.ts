import { Locale } from '@/lib/i18n/i18n-config'

export type PropsWithLocale<P = unknown> = P & { lang: Locale }
