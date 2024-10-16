import { ReactNode } from 'react'

type TMenu = {
  name: {
    en: ReactNode
    pt: ReactNode
  }
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
    link: '/about',
  },
]
//   {
//     name: {
//       en: 'About me',
//       pt: 'Sobre mim',
//     },
//     link: 'aboutme',
//   },
//   {
//     name: {
//       en: 'Resume/CV',
//       pt: 'Currículo',
//     },
//     link: 'resume',
//   },
//   {
//     link: 'https://services.fennectales.com',
//     name: {
//       en: 'Services',
//       pt: 'Serviços',
//     },
//   },
//   {
//     name: {
//       en: 'Projects',
//       pt: 'Projetos',
//     },
//     link: 'projects',
//   },
//   {
//     name: {
//       en: 'Blog',
//       pt: 'Blog',
//     },
//     link: 'https://fennectales.com',
//   },
//   {
//     name: {
//       en: 'Now',
//       pt: 'Atualmente',
//     },
//     link: 'now',
//   },
// ]
