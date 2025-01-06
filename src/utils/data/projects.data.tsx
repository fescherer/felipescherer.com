import { LocaleText } from '@/i18n-config'
import { OWNER_CONFIGS } from '../owner.config'

type IProject = {
  id: string
  type: IProjectType
  tags: string[]
  title: LocaleText
  description: LocaleText
  date: string
  links: {
    github?: string
    figma?: string
    site?: string
  }
  images: string[]
}

type TProjectType = 'original' | 'coding-lesson' | 'coding-week' | 'college-lesson' | 'drawing' | 'snippets'

interface IProjectType {
  id: TProjectType
  title: string
  color: {
    bg: string
    text: string
  }
}

type TProjectTypeObj = {
  [key: string]: IProjectType
}

export const PROJECT_TYPE: TProjectTypeObj = {
  'original': {
    id: 'original',
    title: 'Original',
    color: {
      bg: '#00C06B',
      text: '#04030F',
    },
  },
  'college-lesson': {
    id: 'college-lesson',
    title: 'College Lesson',
    color: {
      bg: '#EE0A0A',
      text: '#FFFFFF',
    },
  },
  'coding-week': {
    id: 'coding-week',
    title: 'Coding Week',
    color: {
      bg: '#F6D319',
      text: '#04030F',
    },
  },
  'coding-lesson': {
    id: 'coding-lesson',
    title: 'Coding Lesson',
    color: {
      bg: '#8F47EC',
      text: '#FFFFFF',
    },
  },
  'drawing': {
    id: 'drawing',
    title: 'Drawing',
    color: {
      bg: '#FF28CF',
      text: '#FFFFFF',
    },
  },
  'snippets': {
    id: 'snippets',
    title: 'Snippets',
    color: {
      bg: '#3272EF',
      text: '#FFFFFF',
    },
  },
}

const TYPE_CODING_LESSON: IProjectType = PROJECT_TYPE['coding-lesson']

export const PROJECTS: IProject[] = [
  {
    id: 'alura-courses',
    type: TYPE_CODING_LESSON,
    tags: ['angular', 'regex', 'html', 'css', 'javascript', 'ux', 'ui'],
    date: '2021-11-25T10:00:00.000Z',
    title: {
      en: 'Alura Courses',
      pt: 'Cursos da Alura',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/alura/courses-alura`,
      figma: '',
      site: '',
    },
    description: {
      en: 'This is a larger project with several projects carried out during my period of subscribing to the Alura online course platform. Here you will find everything from programming to management',
      pt: 'Este é um projeto maior com diversos projetos feitos durante meu periodo de assinatura da plataforma de cursos online Alura. Aqui você encontrará desde programação a gestão',
    },
    images: ['thumb.webp'],
  },
  {
    id: 'rocketseat-bootcamp',
    type: TYPE_CODING_LESSON,
    tags: ['html', 'css', 'javascript', 'react', 'nextjs'],
    date: '2023-01-10T10:00:00.000Z',
    title: {
      en: 'Bootcamp Rocketseat',
      pt: 'Bootcamp Rocketseat',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/rockeseat-bootcamp`,
      figma: '',
      site: '',
    },
    description: {
      en: 'This repository contains several projects developed during Rocketseat bootcamp classes related to web, mobile and backend',
      pt: 'Este repositório contém diversos projetos desenvolvidos durante as aulas do bootcamp da Rocketseat relacionados com web, mobile e backend',
    },
    images: ['thumb.webp'],
  },
  {
    id: 'rocketseat-challenge-01-todo-list',
    type: TYPE_CODING_LESSON,
    tags: ['html', 'css', 'javascript', 'react', 'vite'],
    date: '2023-06-02T10:00:00.000Z',
    title: {
      en: 'Challenge 01 - Todo List Rocketseat',
      pt: 'Challenge 01 - Todo List Rocketseat',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/rocket-seat-challenges/tree/main/01-to-do-list`,
      figma: 'https://www.figma.com/file/0n0zDN7zbzhRbaEO74Xesx/ToDo-List/duplicate',
      site: 'https://challenge-01.felipescherer.com',
    },
    description: {
      en: 'This repository contains challenge 01 - Todo List from Rocketseat\'s Ignite bootcamp',
      pt: 'Este repositório contém o desafio 01 - Todo List do bootcamp Ignite da Rocketseat',
    },
    images: [`thumb.webp`],
  },
  {
    id: 'rocketseat-challenge-02-coffee-delivery',
    type: TYPE_CODING_LESSON,
    tags: ['html', 'css', 'javascript', 'react', 'vite'],
    date: '2023-06-24T10:00:00.000Z',
    title: {
      en: 'Challenge 02 - Coffee Delivery Rocketseat',
      pt: 'Challenge 02 - Coffee Delivery Rocketseat',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/rocket-seat-challenges/tree/main/02-coffee-delivery`,
      figma: 'https://www.figma.com/file/5yT9ZzZmRQRS4yivGGB3pl/Coffee-Delivery/duplicate',
      site: 'https://challenge-02.felipescherer.com',
    },
    description: {
      en: 'This repository contains challenge 02 - Coffee Delivery from Rocketseat\'s Ignite bootcamp',
      pt: 'Este repositório contém o desafio 02 - Coffee Delivery do bootcamp Ignite da Rocketseat',
    },
    images: ['overview.gif', 'overview-mobile.gif'],
  },
  {
    id: 'rocketseat-challenge-03-',
    type: TYPE_CODING_LESSON,
    tags: ['html', 'css', 'javascript', 'react', 'vite'],
    date: '2023-06-24T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/rocket-seat-challenges/tree/main/02-coffee-delivery`,
      figma: 'https://www.figma.com/file/5yT9ZzZmRQRS4yivGGB3pl/Coffee-Delivery/duplicate',
      site: 'https://challenge-02.felipescherer.com',
    },
    description: {
      en: 'This repository contains challenge 03 -  from Rocketseat\'s Ignite bootcamp',
      pt: 'Este repositório contém o desafio 03 -  do bootcamp Ignite da Rocketseat',
    },
    images: ['overview.gif', 'overview-mobile.gif'],
  },
  {
    id: 'rocketseat-challenge-04-',
    type: TYPE_CODING_LESSON,
    tags: ['html', 'css', 'javascript', 'react', 'vite'],
    date: '2023-06-24T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/rocket-seat-challenges/tree/main/02-coffee-delivery`,
      figma: 'https://www.figma.com/file/5yT9ZzZmRQRS4yivGGB3pl/Coffee-Delivery/duplicate',
      site: 'https://challenge-02.felipescherer.com',
    },
    description: {
      en: 'This repository contains challenge 03 -  from Rocketseat\'s Ignite bootcamp',
      pt: 'Este repositório contém o desafio 03 -  do bootcamp Ignite da Rocketseat',
    },
    images: ['overview.gif', 'overview-mobile.gif'],
  },
]
