import { ReactNode } from 'react'

type TMenu = {
  name: {
    en: ReactNode
    pt: ReactNode
  }
  sublink?: TMenu[]
  link: string
}

export const MENU_ITEMS: TMenu[] = [
  {
    name: {
      en: 'Home',
      pt: 'Home',
    },
    link: '/',
  },
  {
    name: {
      en: 'About',
      pt: 'Sobre',
    },
    sublink: [
      {
        name: {
          en: 'About me',
          pt: 'Sobre mim',
        },
        link: '#aboutme',
      },
      {
        name: {
          en: 'Education',
          pt: 'Ensino',
        },
        link: '#education',
      },
      {
        name: {
          en: 'Fennec Tales Studio',
          pt: 'Fennec Tales Studio',
        },
        link: '#fennec-tales-studio',
      },
      {
        name: {
          en: 'Soft Skills',
          pt: 'Habilidades Interpessoais',
        },
        link: '#softskills',
      },
      {
        name: {
          en: 'Toolkit',
          pt: 'Caixa de Ferramenta',
        },
        link: '#toolkit',
      },
      {
        name: {
          en: 'Services',
          pt: 'Serviços',
        },
        link: '#services',
      },
    ],
    link: '/about',
  },
  {
    name: {
      en: 'Projects',
      pt: 'Projetos',
    },
    link: '/projects',
  },
  {
    name: {
      en: 'Now',
      pt: 'Agora',
    },
    link: '/now',
  },
]
