import { LocaleText } from '@/lib/i18n/i18n-config'
import { OWNER_CONFIGS } from './owener-config'

export type IProject = {
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

export type TProjectType = 'original' | 'coding-lesson' | 'coding-week' | 'college-lesson' | 'drawing' | 'snippets'

export interface IProjectType {
  id: TProjectType
  title: string
  color: {
    bg: string
    text: string
  }
}

export type TProjectTypeObj = {
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

export const AVAILABLE_TYPE_PROJECTS: TProjectType[] = Object.keys(PROJECT_TYPE) as TProjectType[]

const TYPE_CODING_LESSON: IProjectType = PROJECT_TYPE['coding-lesson']
const TYPE_CODING_WEEK: IProjectType = PROJECT_TYPE['coding-week']
const TYPE_COLLEGE_LESSON: IProjectType = PROJECT_TYPE['college-lesson']
const TYPE_ORIGINAL: IProjectType = PROJECT_TYPE['original']

export const PROJECTS: IProject[] = [
  {
    id: 'alura-courses',
    type: TYPE_CODING_LESSON,
    tags: ['angular', 'regex', 'html', 'css', 'javascript', 'ux', 'ui'],
    date: '2021-11-25T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/alura/courses-alura`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['thumb.webp'],
  },
  {
    id: 'rocketseat-bootcamp',
    type: TYPE_CODING_LESSON,
    tags: ['html', 'css', 'javascript', 'react', 'nextjs'],
    date: '2023-01-10T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/rockeseat-bootcamp`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['thumb.webp'],
  },
  {
    id: 'rocketseat-challenge-01-todo-list',
    type: TYPE_CODING_LESSON,
    tags: ['html', 'css', 'javascript', 'react', 'vite'],
    date: '2023-06-02T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/rocket-seat-challenges/tree/main/01-to-do-list`,
      figma: 'https://www.figma.com/file/0n0zDN7zbzhRbaEO74Xesx/ToDo-List/duplicate',
      site: 'https://challenge-01.felipescherer.com     ',
    },
    description: {
      en: '',
      pt: '',
    },
    images: [`thumb.webp`],
  },
  {
    id: 'rocketseat-challenge-02-coffee-delivery',
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
      en: '',
      pt: '',
    },
    images: ['overview.gif', 'overview-mobile.gif'],
  },
  {
    id: 'alura-animal-quiz',
    type: TYPE_CODING_WEEK,
    tags: ['react', 'nextjs', 'html', 'css', 'javascript'],
    date: '2021-01-25T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/alura/alura-quiz`,
      figma: '',
      site: 'https://alura-quiz-ofelipescherer.vercel.app',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['overview.gif', 'thumb.webp'],
  },
  {
    id: 'alura-game-dev',
    type: TYPE_CODING_WEEK,
    tags: ['javascript', 'p5', 'game'],
    date: '2020-06-22T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/alura/game-dev`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['overview.gif'],
  },
  {
    id: 'dev-superior-fsdelivery-sds2',
    type: TYPE_CODING_WEEK,
    tags: ['html', 'css', 'javascript', 'react', 'react-native', 'java-spring'],
    date: '2021-01-15T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/dev-superior/fsdelivery-sds2`,
      figma: '',
      site: 'https://felipescherer-fsdelivery.netlify.app',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['homepage.webp', 'dashboard.webp', 'recipe-getting.webp', 'maps.webp', 'mobile.webp', 'mobile-pedidos.webp', 'mobile-dashboard.webp', 'mobile-checked.webp'],
  },
  {
    id: 'rocketseat-nlw-04',
    type: TYPE_CODING_WEEK,
    tags: ['html', 'css', 'javascript', 'react', 'nextjs'],
    date: '2021-02-15T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-04-move-it`,
      figma: '',
      site: 'https://moveit-felipescherer.vercel.app',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['homepage.webp', 'level.webp', 'leve-up.webp', 'profile.webp', 'challenge.webp', 'desafio.webp', 'dark-mode-btn.webp', 'dark-mode.webp'],
  },
  {
    id: 'rocketseat-nlw-05',
    type: TYPE_CODING_WEEK,
    tags: ['html', 'css', 'javascript', 'react', 'react-native'],
    date: '2021-02-15T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-05-plant-manager`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['thumb.webp'],
  },
  {
    id: 'rocketseat-nlw-06',
    type: TYPE_CODING_WEEK,
    tags: ['html', 'css', 'javascript', 'react', 'nextjs', 'firebase'],
    date: '2021-06-26T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-06-let-me-ask`,
      figma: '',
      site: 'https://letmeask-aulas-45172.web.app',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['homepage.webp', 'room-id.webp', 'comment.webp', 'saved-comment.webp'],
  },
  {
    id: 'rocketseat-nlw-setup-habits',
    type: TYPE_CODING_WEEK,
    tags: ['html', 'css', 'javascript', 'react', 'backend', 'fast-api'],
    date: '2023-01-20T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-setup-habits`,
      figma: '',
      site: 'https://nlw-setup-habits-dun.vercel.app',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['thumb.webp', 'habit.webp'],
  },
  {
    id: 'college-algorithm-best-fit',
    type: TYPE_COLLEGE_LESSON,
    tags: ['python', 'algorithm'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/algorithm-best-fit`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['thumb.webp'],
  },
  {
    id: 'college-aps-1',
    type: TYPE_COLLEGE_LESSON,
    tags: ['html', 'css'],
    date: '2019-03-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-01-desenvolvimento-em-ambiente-web`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['overview.gif', 'aboutus.webp', 'reciclagem.webp', 'news.webp', 'form.webp', 'ecopontos.webp', 'app.webp', 'rrr.webp'],
  },
  {
    id: 'college-aps-2',
    type: TYPE_COLLEGE_LESSON,
    tags: ['python'],
    date: '2019-10-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-02-indroducao-a-programacao-estruturada`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['overview.gif', 'thumb.webp'],
  },
  {
    id: 'college-aps-3',
    type: TYPE_COLLEGE_LESSON,
    tags: ['java'],
    date: '2020-03-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-03-programacao-orientada-a-objetos`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['overview.gif'],
  },
  {
    id: 'college-aps-4',
    type: TYPE_COLLEGE_LESSON,
    tags: ['java'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-04-aplicacao-orientacao-a-objetos`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['home.webp', 'home-lib.webp', 'editoras.webp', 'database.webp'],
  },
  {
    id: 'college-aps-5',
    type: TYPE_COLLEGE_LESSON,
    tags: ['react', 'javascript', 'html', 'css'],
    date: '2021-03-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-05-redes-e-computadores`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['login.webp', 'instances.webp', 'chat.webp', 'chat02.webp'],
  },
  {
    id: 'college-aps-6',
    type: TYPE_COLLEGE_LESSON,
    tags: ['linux'],
    date: '2021-10-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-06-sistemas-operacionais`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['folder.webp', 'precos.webp', 'relatorio.webp', 'relatorio-servidor.webp'],
  },
  {
    id: 'college-aps-7',
    type: TYPE_COLLEGE_LESSON,
    tags: ['uml'],
    date: '2022-03-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-07-engenharia-de-software`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['diagrama.webp'],
  },
  {
    id: 'college-aps-8',
    type: TYPE_COLLEGE_LESSON,
    tags: ['backend', 'fast-api'],
    date: '2022-10-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-08-sistemas-distribuidos`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['home.webp', 'hproxy.webp', 'load-balancer.webp'],
  },
  {
    id: 'college-atm-simulation',
    type: TYPE_COLLEGE_LESSON,
    tags: ['python'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/simulacao-caixa-eletronico`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['relatorio.webp', 'running.webp'],
  },
  {
    id: 'college-computer-science-final-paper',
    type: TYPE_COLLEGE_LESSON,
    tags: ['html', 'css', 'javascript', 'react', 'fast-api'],
    date: '2022-11-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/tcc`,
      figma: 'https://www.figma.com/file/iKllJp1aDboNXpVOg5EaSc/Javi?t=L0Crz5jFiKMfRxix-1',
      site: 'http://javi.app.br',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['overview.gif', 'homepage.webp', 'acounts.webp', 'dashboard.webp', 'saved.webp', 'movie-details.webp', 'dark-mode.webp'],
  },
  {
    id: 'college-data-structures',
    type: TYPE_COLLEGE_LESSON,
    tags: ['python'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/data-structures`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['infixposfix.webp', 'recursion.webp', 'convention.webp', 'hanoitower.webp', 'sorting-algorithms.webp'],
  },
  {
    id: 'college-ellipse-transformation',
    type: TYPE_COLLEGE_LESSON,
    tags: ['python'],
    date: '2021-10-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/ellipse-transformation`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['overview.gif', 'homepage.webp', 'transformed.webp'],
  },
  {
    id: 'college-image-thresholding',
    type: TYPE_COLLEGE_LESSON,
    tags: ['java'],
    date: '2021-01-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/algorithm-thresholding`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['thumb.webp', 'image-color.webp', 'image-black-white.webp', 'matriz.webp', 'histograma.webp', 'graph.webp'],
  },
  {
    id: 'college-lights-out',
    type: TYPE_COLLEGE_LESSON,
    tags: ['java'],
    date: '2021-03-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/lights-out`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['solver-2.webp', 'solver.webp', 'pt-instructions.webp', 'en-instructions.webp'],
  },
  {
    id: 'college-linear-systeam-solver',
    type: TYPE_COLLEGE_LESSON,
    tags: ['python'],
    date: '2021-10-01T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/algorithm-linear-system-solver`,
      figma: '',
      site: '',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['code.webp', 'result.webp', 'result-2.webp', 'result-3.webp', 'result-4.webp'],
  },
  {
    id: 'pokedex',
    type: TYPE_ORIGINAL,
    title: {
      en: '',
      pt: '',
    },
    tags: ['react', 'figma', 'javascript', 'next', 'css', 'html'],
    date: '2023-01-29T10:00:00.000Z',
    links: {
      github: `${OWNER_CONFIGS.github_profile}/pokedex`,
      figma: 'https://www.figma.com/file/JtsrGKsMNAnLKqVKBqnBad/Pokedex-APP?node-id=0-1&t=FUvofI6UnU3Pep3a-0',
      site: 'https://pokedex-felipescherer.vercel.app',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['overview-opt.gif', 'homepage.webp', 'pokelist.webp', 'pokedetail.webp', 'pokedetail-2.webp', 'pokedetail-3.webp'],
  },
  {
    id: 'portifolio-v2',
    type: TYPE_ORIGINAL,
    tags: ['react', 'figma', 'javascript', 'next', 'css', 'html'],
    date: '2023-02-25T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/portifolio`,
      figma: 'https://www.figma.com/file/9LKjRjHQrDtWNbydqZygxf/Project?t=zyrOwueQfx7S4WIN-1',
      site: 'https://www.felipescherer.com/pt',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['overview-home-opt.gif', 'overview-2-opt.gif', 'image.webp'],
  },
  {
    id: 'rpg',
    type: TYPE_ORIGINAL,
    tags: ['javascript', 'css', 'html', 'angular'],
    date: '2021-07-25T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/rpg-whitn`,
      figma: '',
      site: 'https://fescherer.github.io/rpg-whitn',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['overview.gif', 'overview-rules.gif', 'homepage.webp', 'mechanics.webp', 'attributes.webp', 'beziel.webp', 'penemue.webp', 'baraqiel.webp', 'asbel.webp', 'af.webp', 'inventory.webp', 'stability.webp', 'weapons.webp', 'character.webp', 'textareas.webp'],
  },
  {
    id: 'rpg-v2',
    type: TYPE_ORIGINAL,
    tags: ['javascript', 'css', 'html', 'angular'],
    date: '2022-06-27T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/rpg-angular-v2`,
      figma: '',
      site: 'https://fescherer.github.io/rpg-angular-v2',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['overview.gif', 'image-overview.webp', 'image-dark-mode.webp', 'image-dark-mode-form.webp', 'image-home.webp'],
  },
  {
    id: 'morse-secret-scripter',
    type: TYPE_ORIGINAL,
    tags: ['javascript', 'css', 'html', 'react'],
    date: '2024-06-30T10:00:00.000Z',
    title: {
      en: '',
      pt: '',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/morse-secret-scripter`,
      figma: '',
      site: 'https://morse-secret-scripter.felipescherer.com',
    },
    description: {
      en: '',
      pt: '',
    },
    images: ['thumb.webp'],
  },
]
