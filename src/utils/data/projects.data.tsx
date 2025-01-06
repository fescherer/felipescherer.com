import { LocaleText } from '@/i18n-config'
import { OWNER_CONFIGS } from '../owner.config'

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

  {
    id: 'alura-animal-quiz',
    type: TYPE_CODING_WEEK,
    tags: ['react', 'nextjs', 'html', 'css', 'javascript'],
    date: '2021-01-25T10:00:00.000Z',
    title: {
      en: 'Animal Quiz',
      pt: 'Animal Quiz',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/alura/alura-quiz`,
      figma: '',
      site: 'https://alura-quiz-ofelipescherer.vercel.app',
    },
    description: {
      en: 'Project for a quiz about animals developed during the intensive week react 2nd Edition Next.js prepared by the Alura team',
      pt: 'Projeto de um quiz sobre animais desenvolvido na semana intensiva react 2ªEdição Next.js elaborada pela equipe da Alura',
    },
    images: ['overview.gif', 'thumb.webp'],
  },
  {
    id: 'alura-game-dev',
    type: TYPE_CODING_WEEK,
    tags: ['javascript', 'p5', 'game'],
    date: '2020-06-22T10:00:00.000Z',
    title: {
      en: 'Game Dev',
      pt: 'Game Dev',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/alura/game-dev`,
      figma: '',
      site: '',
    },
    description: {
      en: 'A runner game to test and learn about javascript | First programming project. Project developed during Alura\'s intensive game dev week.',
      pt: 'Um runner game para testar e conhecer o javascript | Primeiro projeto de programação. Projeto desenvolvido durante a semana intensiva de game dev da Alura.',
    },
    images: ['overview.gif'],
  },
  {
    id: 'dev-superior-fsdelivery-sds2',
    type: TYPE_CODING_WEEK,
    tags: ['html', 'css', 'javascript', 'react', 'react-native', 'java-spring'],
    date: '2021-01-15T10:00:00.000Z',
    title: {
      en: 'FS Delivery',
      pt: 'FS Delivery',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/dev-superior/fsdelivery-sds2`,
      figma: '',
      site: 'https://felipescherer-fsdelivery.netlify.app',
    },
    description: {
      en: 'FS Delivery is a project that brings together web frontend, mobile and backend, a fictitious delivery system. It was developed during the 2nd edition of top dev week.',
      pt: 'FS Delivery é um projeto que reúne frontend web, mobile e backend, um sistema de deliveries fictício. Foi desenvolvido durante a 2ª edição da semana dev superior.',
    },
    images: ['homepage.webp', 'dashboard.webp', 'recipe-getting.webp', 'maps.webp', 'mobile.webp', 'mobile-pedidos.webp', 'mobile-dashboard.webp', 'mobile-checked.webp'],
  },
  {
    id: 'rocketseat-nlw-04',
    type: TYPE_CODING_WEEK,
    tags: ['html', 'css', 'javascript', 'react', 'nextjs'],
    date: '2021-02-15T10:00:00.000Z',
    title: {
      en: 'Move it',
      pt: 'Move it',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-04-move-it`,
      figma: '',
      site: 'https://moveit-felipescherer.vercel.app',
    },
    description: {
      en: 'An RPG style application following the pomodoro methodology to remind you to carry out small quality of life exercises. Project developed during the 4th edition of Rocketseat\'s NLW',
      pt: 'Uma aplicação em estilo RPG seguindo a metodologia pomodoro para relembrar de realizar pequenos exercícios de qualidade de vida. Projeto desenvolvido durante a 4ª edição do NLW da Rocketseat',
    },
    images: ['homepage.webp', 'level.webp', 'leve-up.webp', 'profile.webp', 'challenge.webp', 'desafio.webp', 'dark-mode-btn.webp', 'dark-mode.webp'],
  },
  {
    id: 'rocketseat-nlw-05',
    type: TYPE_CODING_WEEK,
    tags: ['html', 'css', 'javascript', 'react', 'react-native'],
    date: '2021-02-15T10:00:00.000Z',
    title: {
      en: 'Plant Manager',
      pt: 'Plant Manager',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-05-plant-manager`,
      figma: '',
      site: '',
    },
    description: {
      en: 'Mobile application to improve the feeling of reward for completing a task. It simulates a game in which you gain experience by completing a task and your plant symbolizes this. Developed during Rockeseat\'s NLW 05',
      pt: 'Aplicativo mobile para melhorar o sentimento de recomensa a terminar alguma tarefa. Simula um jogo em que você ganha experiência ao terminar uma tarefa e sua plantinha simboliza isso. Desenvolvido durante a NLW 05 da Rockeseat',
    },
    images: ['thumb.webp'],
  },
  {
    id: 'rocketseat-nlw-06',
    type: TYPE_CODING_WEEK,
    tags: ['html', 'css', 'javascript', 'react', 'nextjs', 'firebase'],
    date: '2021-06-26T10:00:00.000Z',
    title: {
      en: 'Let me Ask',
      pt: 'Let me Ask',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-06-let-me-ask`,
      figma: '',
      site: 'https://letmeask-aulas-45172.web.app',
    },
    description: {
      en: 'Application that simulates a live chat, but focused on questions. Developed during Rocketseat\'s NLW 06',
      pt: 'Aplicação que simula um chat de live, porém focado em perguntas. Desenvolvido durante a NLW 06 da Rocketseat',
    },
    images: ['homepage.webp', 'room-id.webp', 'comment.webp', 'saved-comment.webp'],
  },
  {
    id: 'rocketseat-nlw-setup-habits',
    type: TYPE_CODING_WEEK,
    tags: ['html', 'css', 'javascript', 'react', 'backend', 'fast-api'],
    date: '2023-01-20T10:00:00.000Z',
    title: {
      en: 'Habbits',
      pt: 'Habbits',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-setup-habits`,
      figma: '',
      site: 'https://nlw-setup-habits-dun.vercel.app',
    },
    description: {
      en: 'Application for managing and monitoring habits. Developed during Rocketseat\'s NLW Setup.',
      pt: 'Aplicação para gerenciamento e monitoramento de hábitos. Desenvolvido durante a NLW Setup da Rocketseat.',
    },
    images: ['thumb.webp', 'habit.webp'],
  },
  {
    id: 'college-algorithm-best-fit',
    type: TYPE_COLLEGE_LESSON,
    tags: ['python', 'algorithm'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      en: 'Best Fit Algorithm',
      pt: 'Algoritmo Best Fit',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/algorithm-best-fit`,
      figma: '',
      site: '',
    },
    description: {
      en: 'A memory management demonstration algorithm based on the Best Fit Algorithm.',
      pt: 'Um algoritmo de demonstração do gerenciamento de memória baseado no Best Fit Algoritm.',
    },
    images: ['thumb.webp'],
  },
  {
    id: 'college-aps-1',
    type: TYPE_COLLEGE_LESSON,
    tags: ['html', 'css'],
    date: '2019-03-01T10:00:00.000Z',
    title: {
      en: 'APS 1 | Save the Green',
      pt: 'APS 1 | Save the Green',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-01-desenvolvimento-em-ambiente-web`,
      figma: '',
      site: '',
    },
    description: {
      en: 'First college project, website to practice css and html concepts.',
      pt: 'Primeiro projeto da faculdade, site para praticar conceitos de css e html.',
    },
    images: ['overview.gif', 'aboutus.webp', 'reciclagem.webp', 'news.webp', 'form.webp', 'ecopontos.webp', 'app.webp', 'rrr.webp'],
  },
  {
    id: 'college-aps-2',
    type: TYPE_COLLEGE_LESSON,
    tags: ['python'],
    date: '2019-10-01T10:00:00.000Z',
    title: {
      en: 'APS 2 | Eco Pontos',
      pt: 'APS 2 | Eco Pontos',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-02-indroducao-a-programacao-estruturada`,
      figma: '',
      site: '',
    },
    description: {
      en: 'Project that calculates the distance between a coordinate point in the Campinas region provided to the nearest Eco point.',
      pt: 'Projeto que calcula a distância entre um ponto de coordenada na região de Campinas fornecido para o Eco ponto mais próximo.',
    },
    images: ['overview.gif', 'thumb.webp'],
  },
  {
    id: 'college-aps-3',
    type: TYPE_COLLEGE_LESSON,
    tags: ['java'],
    date: '2020-03-01T10:00:00.000Z',
    title: {
      en: 'APS 3 | Academic System',
      pt: 'APS 3 | Sistema Acadêmico',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-03-programacao-orientada-a-objetos`,
      figma: '',
      site: '',
    },
    description: {
      en: 'A system for university management. Includes course, student and grade management.',
      pt: 'Um sistema para gerencimento de universidade. Inclui gerenciamento de cursos, alunos e notas.',
    },
    images: ['overview.gif'],
  },
  {
    id: 'college-aps-4',
    type: TYPE_COLLEGE_LESSON,
    tags: ['java'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      en: 'APS 4 | Library System',
      pt: 'APS 4 | Sistema Bibliotecário',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-04-aplicacao-orientacao-a-objetos`,
      figma: '',
      site: '',
    },
    description: {
      en: 'A system for library management. Includes book, author and publisher management.',
      pt: 'Um sistema para gerenciamento de bibliotecas. Inclui gerenciamento de livros, autores e editoras.',
    },
    images: ['home.webp', 'home-lib.webp', 'editoras.webp', 'database.webp'],
  },
  {
    id: 'college-aps-5',
    type: TYPE_COLLEGE_LESSON,
    tags: ['react', 'javascript', 'html', 'css'],
    date: '2021-03-01T10:00:00.000Z',
    title: {
      en: 'APS 5 Networks | Chat',
      pt: 'APS 5 Redes | Chat',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-05-redes-e-computadores`,
      figma: '',
      site: '',
    },
    description: {
      en: 'A chat simulator, a messaging system using Socket.io',
      pt: 'Um simulador de chat, um sistema de mensagens usando Socket.io',
    },
    images: ['login.webp', 'instances.webp', 'chat.webp', 'chat02.webp'],
  },
  {
    id: 'college-aps-6',
    type: TYPE_COLLEGE_LESSON,
    tags: ['linux'],
    date: '2021-10-01T10:00:00.000Z',
    title: {
      en: 'APS 6 | Restaurant management system',
      pt: 'APS 6 | Sistema de gerenciamento restaurante',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-06-sistemas-operacionais`,
      figma: '',
      site: '',
    },
    description: {
      en: 'Restaurant management system, backup and day and month report.',
      pt: 'Sistema de gerenciamento de um restaurante, backup e relatório de dia e mês.',
    },
    images: ['folder.webp', 'precos.webp', 'relatorio.webp', 'relatorio-servidor.webp'],
  },
  {
    id: 'college-aps-7',
    type: TYPE_COLLEGE_LESSON,
    tags: ['uml'],
    date: '2022-03-01T10:00:00.000Z',
    title: {
      en: 'APS 7 | Class diagram',
      pt: 'APS 7 | Diagrama de classes',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-07-engenharia-de-software`,
      figma: '',
      site: '',
    },
    description: {
      en: 'Planning a computational system, class diagram, usage and requirements.',
      pt: 'Planejamento de um sistema computacional, diagrama de classes, uso e requisitos.',
    },
    images: ['diagrama.webp'],
  },
  {
    id: 'college-aps-8',
    type: TYPE_COLLEGE_LESSON,
    tags: ['backend', 'fast-api'],
    date: '2022-10-01T10:00:00.000Z',
    title: {
      en: 'APS 8 | Redundancy system',
      pt: 'APS 8 | Sistema de redundância',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-08-sistemas-distribuidos`,
      figma: '',
      site: '',
    },
    description: {
      en: 'APS Project for the 8th semester of Computer Science',
      pt: 'Projeto APS do 8º semestre de Ciência da Computação',
    },
    images: ['home.webp', 'hproxy.webp', 'load-balancer.webp'],
  },
  {
    id: 'college-atm-simulation',
    type: TYPE_COLLEGE_LESSON,
    tags: ['python'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      en: 'ATM simulation',
      pt: 'Simulação de caixa eletrônico',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/simulacao-caixa-eletronico`,
      figma: '',
      site: '',
    },
    description: {
      en: 'A script that generates a simulation of an ATM following the proposed statement.',
      pt: 'Um script que gera uma simulação de um caixa eletrônico seguindo o enunciado proposto.',
    },
    images: ['relatorio.webp', 'running.webp'],
  },
  {
    id: 'college-computer-science-final-paper',
    type: TYPE_COLLEGE_LESSON,
    tags: ['html', 'css', 'javascript', 'react', 'fast-api'],
    date: '2022-11-01T10:00:00.000Z',
    title: {
      en: 'TCC | Já vi',
      pt: 'TCC | Já vi',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/tcc`,
      figma: 'https://www.figma.com/file/iKllJp1aDboNXpVOg5EaSc/Javi?t=L0Crz5jFiKMfRxix-1',
      site: 'http://javi.app.br',
    },
    description: {
      en: 'A movie and series management and evaluation application. Computer science course completion work.',
      pt: 'Uma aplicação de gerenciamento e avaliação de filmes e séries . Trabalho de conclusão de curso de ciência da computação.',
    },
    images: ['overview.gif', 'homepage.webp', 'acounts.webp', 'dashboard.webp', 'saved.webp', 'movie-details.webp', 'dark-mode.webp'],
  },
  {
    id: 'college-data-structures',
    type: TYPE_COLLEGE_LESSON,
    tags: ['python'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      en: 'Data Structure Algorithms',
      pt: 'Algoritmos de estrutura de dados',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/data-structures`,
      figma: '',
      site: '',
    },
    description: {
      en: 'Repository that contains methods to simulate the concepts of ordering and items in sets learned in data structure.',
      pt: 'Repositório que contém métodos para simular os conceitos de ordenaçãod e itens em conjuntos aprendidos em estrutura de dados.',
    },
    images: ['infixposfix.webp', 'recursion.webp', 'convention.webp', 'hanoitower.webp', 'sorting-algorithms.webp'],
  },
  {
    id: 'college-ellipse-transformation',
    type: TYPE_COLLEGE_LESSON,
    tags: ['python'],
    date: '2021-10-01T10:00:00.000Z',
    title: {
      en: 'Geometry',
      pt: 'Geometria',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/ellipse-transformation`,
      figma: '',
      site: '',
    },
    description: {
      en: 'Project that demonstrates the possible modifications in a geometric shape learned in geometry and computer graphics classes.',
      pt: 'Projeto que demonstra as possíveis modificações em uma forma geométrica aprendidas nas aulas de geometria e computação gráfica.',
    },
    images: ['overview.gif', 'homepage.webp', 'transformed.webp'],
  },
  {
    id: 'college-image-thresholding',
    type: TYPE_COLLEGE_LESSON,
    tags: ['java'],
    date: '2021-01-01T10:00:00.000Z',
    title: {
      en: 'Image Thresholding',
      pt: 'Limiarização de imagens',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/algorithm-thresholding`,
      figma: '',
      site: '',
    },
    description: {
      en: 'Project that contains several methods to test image thresholding',
      pt: 'Projeto que contém diversos métodos para testar a limiarização de imagens',
    },
    images: ['thumb.webp', 'image-color.webp', 'image-black-white.webp', 'matriz.webp', 'histograma.webp', 'graph.webp'],
  },
  {
    id: 'college-lights-out',
    type: TYPE_COLLEGE_LESSON,
    tags: ['java'],
    date: '2021-03-01T10:00:00.000Z',
    title: {
      en: 'Lights Out',
      pt: 'Lights Out',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/lights-out`,
      figma: '',
      site: '',
    },
    description: {
      en: 'Lights Out is a game that needs to turn off all the lights in a matrix, but every time you press a light to turn it off, the adjacent ones light up.',
      pt: 'Lights Out é um jogo que precisa desligar todas as luzes de uma matriz, porém toda vez que aperta uma luz para desliga-la, as adjacentes acendem.',
    },
    images: ['solver-2.webp', 'solver.webp', 'pt-instructions.webp', 'en-instructions.webp'],
  },
  {
    id: 'college-linear-systeam-solver',
    type: TYPE_COLLEGE_LESSON,
    tags: ['python'],
    date: '2021-10-01T10:00:00.000Z',
    title: {
      en: 'Resolution of linear systems',
      pt: 'Resolução de sistemas lineares',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/algorithm-linear-system-solver`,
      figma: '',
      site: '',
    },
    description: {
      en: 'Algorithm for solving linear systems in Python.',
      pt: 'Algoritmo para resolução de sistemas lineares em python.',
    },
    images: ['code.webp', 'result.webp', 'result-2.webp', 'result-3.webp', 'result-4.webp'],
  },
  {
    id: 'pokedex',
    type: TYPE_ORIGINAL,
    title: {
      en: 'Pokedex',
      pt: 'Pokedex',
    },
    tags: ['react', 'figma', 'javascript', 'next', 'css', 'html'],
    date: '2023-01-29T10:00:00.000Z',
    links: {
      github: `${OWNER_CONFIGS.github_profile}/pokedex`,
      figma: 'https://www.figma.com/file/JtsrGKsMNAnLKqVKBqnBad/Pokedex-APP?node-id=0-1&t=FUvofI6UnU3Pep3a-0',
      site: 'https://pokedex-felipescherer.vercel.app',
    },
    description: {
      en: 'A pokedex app that provides all the most important information you need 😁',
      pt: 'Um app de pokedex que traz todas as mais importantes informações que você necessita 😁',
    },
    images: ['overview-opt.gif', 'homepage.webp', 'pokelist.webp', 'pokedetail.webp', 'pokedetail-2.webp', 'pokedetail-3.webp'],
  },
  {
    id: 'portifolio-v2',
    type: TYPE_ORIGINAL,
    tags: ['react', 'figma', 'javascript', 'next', 'css', 'html'],
    date: '2023-02-25T10:00:00.000Z',
    title: {
      en: 'Portfolio',
      pt: 'Portifolio',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/portifolio`,
      figma: 'https://www.figma.com/file/9LKjRjHQrDtWNbydqZygxf/Project?t=zyrOwueQfx7S4WIN-1',
      site: 'https://www.felipescherer.com/pt',
    },
    description: {
      en: 'Portfolio site, where you find my projects and about me.',
      pt: 'Site de portifolio, onde você encontra meus projetos e sobre mim.',
    },
    images: ['overview-home-opt.gif', 'overview-2-opt.gif', 'image.webp'],
  },
  {
    id: 'rpg',
    type: TYPE_ORIGINAL,
    tags: ['javascript', 'css', 'html', 'angular'],
    date: '2021-07-25T10:00:00.000Z',
    title: {
      en: 'WHITN V1 RPG Token',
      pt: 'Ficha de RPG WHITN V1',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/rpg-whitn`,
      figma: '',
      site: 'https://fescherer.github.io/rpg-whitn',
    },
    description: {
      en: 'First version of the WHITN system RPG sheet created by Felipe Scherer.',
      pt: 'Primeira versão da ficha de RPG do sistema WHITN criado por Felipe Scherer.',
    },
    images: ['overview.gif', 'overview-rules.gif', 'homepage.webp', 'mechanics.webp', 'attributes.webp', 'beziel.webp', 'penemue.webp', 'baraqiel.webp', 'asbel.webp', 'af.webp', 'inventory.webp', 'stability.webp', 'weapons.webp', 'character.webp', 'textareas.webp'],
  },
  {
    id: 'rpg-v2',
    type: TYPE_ORIGINAL,
    tags: ['javascript', 'css', 'html', 'angular'],
    date: '2022-06-27T10:00:00.000Z',
    title: {
      en: 'Angular RPG V2',
      pt: 'RPG Angular V2',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/rpg-angular-v2`,
      figma: '',
      site: 'https://fescherer.github.io/rpg-angular-v2',
    },
    description: {
      en: 'Second version of the WHITN system RPG sheet created by Felipe Scherer.',
      pt: 'Segunda versão da ficha de RPG do sistema WHITN criado por Felipe Scherer.',
    },
    images: ['overview.gif', 'image-overview.webp', 'image-dark-mode.webp', 'image-dark-mode-form.webp', 'image-home.webp'],
  },
  {
    id: 'morse-secret-scripter',
    type: TYPE_ORIGINAL,
    tags: ['javascript', 'css', 'html', 'react'],
    date: '2024-06-30T10:00:00.000Z',
    title: {
      en: 'Morse Secret Encoder/Decoder',
      pt: 'Codificador/Decodificador de Código Morse',
    },
    links: {
      github: `${OWNER_CONFIGS.github_profile}/morse-secret-scripter`,
      figma: '',
      site: 'https://morse-secret-scripter.felipescherer.com',
    },
    description: {
      en: 'Simple encoder/decoder morse code project.',
      pt: 'Projeto simples de codificador/decodificador de código morse.',
    },
    images: ['thumb.webp'],
  },
]
