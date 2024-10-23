import { LocaleText } from '@/i18n-config'
import { LucideBrush, LucideCpu, LucideMousePointerClick, LucideVideo } from 'lucide-react'
import { ReactNode } from 'react'

type TServices = {
  icon: ReactNode
  title: LocaleText
  text: LocaleText
}

export const SERVICES: TServices[] = [
  {
    icon: <LucideMousePointerClick />,
    title: {
      en: 'Web development',
      pt: 'Desenvolvimento web',
    },
    text: {
      en: 'I build custom websites like restaurant menus, online stores, and more using WordPress or React & Next.js. Fast, responsive and tailored to your needs.',
      pt: 'Construo websites personalizáveis como cardápios de restaurante, lojas online e muito mais usando Wordpress ou React & NextJS. Rápido, responsivo adaptado às suas necessidades.',
    },
  },
  {
    icon: <LucideBrush />,
    title: {
      en: 'Company design identity',
      pt: 'Design da identidade da empresa',
    },
    text: {
      en: 'I create unique brand identities, including logos, color schemes and typography, to help your business stand out. Let\'s design a cohesive look that reflects your company\'s values and vision.',
      pt: 'Eu crio identidades de marcas únicas, incluindo logos, esquema de cores e tipografia para ajudar seu negócio se destacar. Vamos desenvolver um design coeso que reflete os valores e visão de sua empresa.',
    },
  },
  {
    icon: <LucideCpu />,
    title: {
      en: 'Image restoration using AI',
      pt: 'Restauração de imagem usando IA',
    },
    text: {
      en: 'I offer AI-powered image restoration services to bring your old or damaged photos back to life. Experience enhanced clarity and detail while preserving the original essence of your cherished memories.',
      pt: 'Eu ofereço serviços de restauração de imagens alimentados por IA para trazer suas fotos velhas ou danificadas de volta a vida. Experimente maior clareza e detalhe enquanto preserva a essência original de suas queridas lembranças.',
    },
  },
  {
    icon: <LucideVideo />,
    title: {
      en: 'Video Editing',
      pt: 'Edição de vídeo',
    },
    text: {
      en: 'I provide professional video editing services to transform your raw footage into polished, engaging content. From cuts and transitions to color correction and sound design, I’ll help bring your vision to life.',
      pt: 'Eu forneço serviços de edição profissional de vídeo para transformar sua filmagem bruta em conteúdo sofisticado e envolvente. Desde cortes e transições até correção de cor e design de som, irei ajudar levar sua visão à vida.',
    },
  },
]
