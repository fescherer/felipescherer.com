import { getDictionary } from '@/lib/i18n/get-dictionary'
import { Locale } from '@/lib/i18n/i18n-config'
import { LucideBrush, LucideCpu, LucideMousePointerClick, LucideVideo } from 'lucide-react'

export async function getServicesData(lang: Locale) {
  const dictionary = await getDictionary(lang)
  const t = dictionary.services

  return ([
    {
      icon: <LucideMousePointerClick size={36} />,
      title: t.web.title,
      text: t.web.text,
      image: '/images/services/web.jpg',
      border: 'linear-gradient(45deg, #FF6B6B, #FFD166)',
    },
    {
      icon: <LucideBrush size={36} />,
      title: t.design.title,
      text: t.design.text,
      image: '/images/services/web-design.webp',
      border: 'linear-gradient(45deg, #6A11CB, #2575FC)',
    },
    {
      icon: <LucideCpu size={36} />,
      title: t.ai.title,
      text: t.ai.text,
      image: '/images/services/image-restoration.webp',
      border: 'linear-gradient(45deg, #12C2E9, #C471ED, #F64F59)',
    },
    {
      icon: <LucideVideo size={36} />,
      title: t.editing.title,
      text: t.editing.text,
      image: '/images/services/photoshop.webp',
      border: 'linear-gradient(45deg, #52ACFF, #FFE32C)',
    },
  ])
}
