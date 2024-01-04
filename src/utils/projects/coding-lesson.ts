import { IProject } from '@/types'
import { OWNER_CONFIGS } from '../owner.config'

const PROJECT_TYPE = 'coding-lesson'

export const CODING_LESSON_PROJECTS: IProject[] = [
  {
    id: 'alura-courses',
    type: PROJECT_TYPE,
    tags: ['angular', 'regex', 'html', 'css', 'javascript', 'ux', 'ui'],
    date: '2021-11-25T10:00:00.000Z',
    title: {
      pt: 'Cursos da Alura',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/alura/courses-alura`,
    figma: '',
    site: '',
    description: {
      pt: 'Este é um projeto maior com diversos projetos feitos durante meu periodo de assinatura da plataforma de cursos online Alura. Aqui você encontrará desde programação a gestão',
    },
    images: ['thumb.png'],
    text: {
      pt: '<h2>Rocketseat challenges</h2><h2>Introdução</h2><p>Este é um repositório que contém todos os projetos realizados durante o periodo de assinatura da plataforma <a href="https://www.alura.com.br" target="_blank">Alura</a></p><p>Dentre os cursos realizados, fiz diversos sobre frontend, backend, social medias e ux-ui. Foram experiências incríveis que me possibilitou conhecer um pouco de cada área.</p><p>Os cursos foram:</p><ul><li><a href="https://www.alura.com.br/formacao-angular-14" target="_blank">Angular</a></li><li><a href="https://www.alura.com.br/escola-front-end" target="_blank">Frontend</a></li><li><a href="https://www.alura.com.br/curso-online-html-css-responsividade-mobile-first" target="_blank">Responsividade</a></li><li><a href="https://www.alura.com.br/curso-online-acessibilidade-web-front-end-parte-2" target="_blank">Acessibilidade</a></li><li><a href="https://www.alura.com.br/curso-online-html-css-classes-posicionamento-flexbox" target="_blank">HTML Positions e Display</a></li><li><a href="https://www.alura.com.br/curso-online-javascritpt-orientacao-objetos" target="_blank">Javascript</a></li><li><a href="https://www.alura.com.br/curso-online-arquitetura-css" target="_blank">Arquitetura CSS</a></li><li><a href="https://www.alura.com.br/curso-online-sass-css-sintaticamente-espetacular" target="_blank">SASS</a></li><li><a href="https://www.alura.com.br/formacao-html-css" target="_blank">WEB</a></li><li><a href="https://www.alura.com.br/curso-online-http-entendendo-web-por-baixo-dos-panos" target="_blank">HTTP</a></li><li><a href="https://www.alura.com.br/curso-online-nlp-modelos-linguagem" target="_blank">REGEX</a></li><li><a href="https://www.alura.com.br/formacao-social-media" target="_blank">Social Media</a></li><li><a href="https://www.alura.com.br/formacao-seo" target="_blank">SEO</a></li><li><a href="https://www.alura.com.br/curso-online-figma-conhecendo-componentes-interface" target="_blank">Figma</a></li><li><a href="https://www.alura.com.br/formacao-ux" target="_blank">UX</a></li></ul>',
    },
  },
  {
    id: 'rocketseat-bootcamp',
    type: PROJECT_TYPE,
    tags: ['html', 'css', 'javascript', 'react', 'nextjs'],
    date: '2023-01-10T10:00:00.000Z',
    title: {
      pt: 'Bootcamp Rocketseat',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/rockeseat-bootcamp`,
    figma: '',
    site: '',
    description: {
      pt: 'Este repositório contém diversos projetos desenvolvidos durante as aulas do bootcamp da Rocketseat relacionados com web, mobile e backend',
    },
    images: ['thumb.png'],
    text: {
      pt: '<h2>Rocketseat challenges</h2><h2>Introdução</h2><p>Este é um repositório que contém todos os projetos realizados durante o periodo de assinatura da plataforma <a target="_blank" href="https://www.rocketseat.com.br">Rocketseat</a>.</p><p>O curso disponibiliza módulos em React, React Native e Node. Os módulos são extremamente completos.</p>',
    },
  },
  {
    id: 'rocketseat-challenge-01-todo-list',
    type: PROJECT_TYPE,
    tags: ['html', 'css', 'javascript', 'react', 'vite'],
    date: '2023-06-02T10:00:00.000Z',
    title: {
      pt: 'Challenge 01 - Todo List Rocketseat',
    },
    github: `${OWNER_CONFIGS.github_profile}/rocket-seat-challenges/tree/main/01-to-do-list`,
    figma: 'https://www.figma.com/file/0n0zDN7zbzhRbaEO74Xesx/ToDo-List/duplicate',
    site: 'https://challenge-01.felipescherer.com',
    description: {
      pt: 'Este repositório contém o desafio 01 - Todo List do bootcamp Ignite da Rocketseat',
    },
    images: [`thumb.png`],
    text: {
      pt: '<h2>Rocketseat challenges</h2><h2>Introdução</h2><p>Este é um repositório que contém o projeto desafio 01 da Rocketseat Ignite.</p><p>O projeto se chama Todo list e nele contém um simples layout e simples funcionalidades de uma lista com tarefas para fazer.</p><p>É bem simples porém, esse é o propósito, para treinar os conceitos básicos do React.</p>',
    },
  },
  {
    id: 'rocketseat-challenge-02-coffee-delivery',
    type: PROJECT_TYPE,
    tags: ['html', 'css', 'javascript', 'react', 'vite'],
    date: '2023-06-24T10:00:00.000Z',
    title: {
      pt: 'Challenge 02 - Coffee Delivery Rocketseat',
    },
    github: `${OWNER_CONFIGS.github_profile}/rocket-seat-challenges/tree/main/02-coffee-delivery`,
    figma: 'https://www.figma.com/file/5yT9ZzZmRQRS4yivGGB3pl/Coffee-Delivery/duplicate',
    site: 'https://challenge-02.felipescherer.com',
    description: {
      pt: 'Este repositório contém o desafio 02 - Coffee Delivery do bootcamp Ignite da Rocketseat',
    },
    images: ['overview.gif', 'overview-mobile.gif'],
    text: {
      pt: '<h2>Rocketseat challenges</h2><h2>Introdução</h2><p>Este é um repositório que contém o projeto desafio 02 da Rocketseat Ignite.</p><p>O projeto se chama Coffee Delivery e nele contém sistema de compra online de cafés.</p><p>É bem simples porém, esse é o propósito, para treinar os mais intermediários do React, como hooks, contexts e reducers.</p>',
    },
  },
]
