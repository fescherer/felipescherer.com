import { LocaleText } from '@/i18n-config'
import { LucideMoon, LucideSun } from 'lucide-react'
import { ReactNode } from 'react'

type TTheme = {
  id: string
  text: LocaleText
  icon: ReactNode
}

export const themes: TTheme[] = [
  {
    id: 'dark',
    text: {
      en: 'Dark',
      pt: 'Escuro',
    },
    icon: <LucideMoon size={16} strokeWidth={3} />,
  },
  {
    id: 'light',
    text: {
      en: 'Light',
      pt: 'Claro',
    },
    icon: <LucideSun size={16} strokeWidth={3} />,
  },
]
