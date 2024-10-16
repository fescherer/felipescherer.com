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
    // sublink: [
    //   {
    //     name: {
    //       en: 'About me',
    //       pt: 'Sobre mim',
    //     },
    //     link: '/about#aboutme',
    //   },
    //   {
    //     name: {
    //       en: 'Tecnologias',
    //       pt: 'Tech',
    //     },
    //     link: '/about#tech',
    //   },
    // ],
    link: '/aboutme',
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
