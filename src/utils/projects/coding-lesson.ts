import { IProject } from '@/types'
import { OWNER_CONFIGS } from '../owner.config'

const PROJECT_TYPE = 'coding-week'

export const original_projects: IProject[] = [
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
    thumb: 'https://user-images.githubusercontent.com/62115215/235196011-bc1b36ed-766d-40f6-9a03-16cd8e452af7.png',
    description: {
      pt: 'Este é um projeto maior com diversos projetos feitos durante meu periodo de assinatura da plataforma de cursos online Alura. Aqui você encontrará desde programação a gestão',
    },
    images: ['https://user-images.githubusercontent.com/62115215/235196011-bc1b36ed-766d-40f6-9a03-16cd8e452af7.png'],
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
    thumb: 'https://user-images.githubusercontent.com/62115215/235316187-6bbff291-d17e-4532-897c-bf6932092b2d.jpg',
    description: {
      pt: 'Este repositório contém diversos projetos desenvolvidos durante as aulas do bootcamp da Rocketseat relacionados com web, mobile e backend',
    },
    images: ['https://user-images.githubusercontent.com/62115215/235316187-6bbff291-d17e-4532-897c-bf6932092b2d.jpg'],
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
    thumb: `${OWNER_CONFIGS.github_profile}/project-euler/assets/62115215/39578de4-2e7a-4430-941c-765c8b287d26`,
    description: {
      pt: 'Este repositório contém o desafio 01 - Todo List do bootcamp Ignite da Rocketseat',
    },
    images: [`${OWNER_CONFIGS.github_profile}/project-euler/assets/62115215/39578de4-2e7a-4430-941c-765c8b287d26`],
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
    thumb: `${OWNER_CONFIGS.github_profile}/project-euler/assets/62115215/6935c267-1af8-4ca0-ac4b-2c5a1c8522a5`,
    description: {
      pt: 'Este repositório contém o desafio 02 - Coffee Delivery do bootcamp Ignite da Rocketseat',
    },
    images: [
      `${OWNER_CONFIGS.github_profile}/rocket-seat-challenges/assets/62115215/85c68406-0db2-4eb8-81e3-5659a065f8c9`,
      `${OWNER_CONFIGS.github_profile}/rocket-seat-challenges/assets/62115215/939021cc-1b3f-47da-85aa-7213c4237a89`,
    ],
    text: {
      pt: '<h2>Rocketseat challenges</h2><h2>Introdução</h2><p>Este é um repositório que contém o projeto desafio 02 da Rocketseat Ignite.</p><p>O projeto se chama Coffee Delivery e nele contém sistema de compra online de cafés.</p><p>É bem simples porém, esse é o propósito, para treinar os mais intermediários do React, como hooks, contexts e reducers.</p>',
    },
  },
]
