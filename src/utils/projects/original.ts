import { IProject } from '@/types'
import { OWNER_CONFIGS } from '../owner.config'

const PROJECT_TYPE = 'original'

export const original_projects: IProject[] = [
  {
    id: 'pokedex',
    type: PROJECT_TYPE,
    title: {
      pt: 'Pokedex',
    },
    tags: ['react', 'figma', 'javascript', 'next', 'css', 'html'],
    date: '2023-01-29T10:00:00.000Z',
    github: `${OWNER_CONFIGS.github_profile}/pokedex`,
    figma: 'https://www.figma.com/file/JtsrGKsMNAnLKqVKBqnBad/Pokedex-APP?node-id=0-1&t=FUvofI6UnU3Pep3a-0',
    site: 'https://pokedex-felipescherer.vercel.app',
    thumb: 'bg-[url("/projects/original/pokedex/thumb.png")]',
    description: {
      pt: 'Um app de pokedex que traz todas as mais importantes informações que você necessita 😁',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/235033235-12fe5d0f-5652-4b60-aa9b-3d99bca8ddb1.png',
      'https://user-images.githubusercontent.com/62115215/235033606-e1b8e6be-bc13-4ef0-9ddb-14f9e9850007.gif',
      'https://user-images.githubusercontent.com/62115215/235033277-54f762ea-092a-4a76-b33c-65bb18b305ec.png',
      'https://user-images.githubusercontent.com/62115215/235033636-bb958a34-81d7-4ac2-9a32-fd5095d7584c.png',
      ' https://user-images.githubusercontent.com/62115215/235033653-c2c152b6-6a8e-4d62-b6fc-3cb840f05ccf.png',
      '    https://user-images.githubusercontent.com/62115215/235033675-f9f91660-0da8-4466-b00f-57d136bf086e.png',
    ],
    text:
    {
      pt: '<h2>Introdução</h2><p>Este foi um projeto realizado para estudar sobre API\'s em React. Queria melhorar minhas habilidades em relação a isso, por isso utilizei uma API gratuita na internet sobre Pokémons.</p>O desenvolvimento do projeto foi bem interessante, além de conseguir praticar minhas habilidades de design (No Figma), também consegui praticar a utilizar o <a href="https://nextjs.org" target="_blank">NextJS</a>.<p></p><p>O projeto é uma pokédex, ou seja, um conjunto de informações sobre pokémons. Nela temos a listagem deles e se possuirem, também existe a animação. No detalhe de cada um, há informações sobre tipo, estatísticas, evolução e localização.</p>',
    },
  },
  {
    id: 'portifolio-v2',
    type: PROJECT_TYPE,
    tags: ['react', 'figma', 'javascript', 'next', 'css', 'html'],
    date: '2023-02-25T10:00:00.000Z',
    title: {
      pt: 'Portifolio',
    },
    github: `${OWNER_CONFIGS.github_profile}/portifolio`,
    figma: 'https://www.figma.com/file/9LKjRjHQrDtWNbydqZygxf/Project?t=zyrOwueQfx7S4WIN-1',
    site: 'https://www.felipescherer.com/pt',
    thumb: 'bg-[url("/projects/original/portifolio-v2/thumb.png")]',
    description: {
      pt: 'Site de portifolio, onde você encontra meus projetos e sobre mim.',
    },
    images: [
      'https://github.com/ofelipescherer/portifolio/assets/62115215/ab5f7bed-510e-49f0-9640-d8853e76c311',
      'https://github.com/ofelipescherer/portifolio/assets/62115215/199232b8-f70c-41c8-a3cd-3873b2020222',
      'https://github.com/ofelipescherer/portifolio/assets/62115215/6068bb3d-4f1b-4a79-85f7-882abfc134d9',
    ],
    text: {
      pt: '<h2>Introdução</h2><p>Sempre amei fazer projetos solos pequenos e mostrar para as pessoas, mesmo que sejam simples, sempre gostei de arquivá-los e ter um registro e recordação de como foram feitos e o que pensava na época, minhas habilidades e ambições, claro que isso muda com o tempo e por isso acho tão facinante deixar esses registros.</p><p>Esse projeto se trata da versão 2.0 de portifolio para principalmente mostrar todos meus projetos de maneira mais simples e visual para todas as pessoas, mesmo as que não são da área de tecnologia e tenham um github para explorar meu perfil.<h2>Sobre</h2></p>O site foi feito seguindo diversos padrões web de tematização, i18n, modularização e outras coisas que serão adicionadas no futuro. É feito em <a href="https://nextjs.org/blog/next-13" target="_blank">Next JS 13</a> com app directory e <a href="https://tailwindcss.com" target="_blank">Tailwind</a> de estilização.</p><p>Fiz de uma forma que o projeto possa ser mantido e atualizado constantemente, com boas práticas e um código limpo, seja livre para explorá-lo no github :)</p>',
    },
  },
  {
    id: 'rpg',
    type: PROJECT_TYPE,
    tags: ['javascript', 'css', 'html', 'angular'],
    date: '2021-07-25T10:00:00.000Z',
    title: {
      pt: 'Ficha de RPG WHITN V1',
    },
    github: `${OWNER_CONFIGS.github_profile}/rpg-whitn`,
    figma: '',
    site: 'https://fescherer.github.io/rpg-whitn',
    thumb: 'bg-[url("/projects/original/rpg/thumb.png")]',
    description: {
      pt: 'Primeira versão da ficha de RPG do sistema WHITN criado por Felipe Scherer.',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/235560838-44cdf092-ece2-4910-a7c2-00f99a20cf2f.gif',
      'https://user-images.githubusercontent.com/62115215/235560845-37df8fad-5b88-4c1a-a5e0-764854e65ea0.png',
      'https://user-images.githubusercontent.com/62115215/235560846-60f56571-fe1b-4960-9758-2d4068726ce1.gif',
      'https://user-images.githubusercontent.com/62115215/235560851-f41d9c15-9d63-4750-b806-2e71b590ea0d.png',
      'https://user-images.githubusercontent.com/62115215/235560852-d7a2a5de-7d8e-4a15-96e0-6eab2d6132d4.png',
      'https://user-images.githubusercontent.com/62115215/235560853-acec2df8-9c0e-4a00-87e3-1c40f1129bd6.png',
      'https://user-images.githubusercontent.com/62115215/235560867-bfcbc6dd-ae69-4980-90ba-ae517a6b5ce3.png',
      'https://user-images.githubusercontent.com/62115215/235560870-f96a6f19-d3e5-43df-8db9-d58ec76b1f80.png',
      'https://user-images.githubusercontent.com/62115215/235560871-d822d666-ccd2-45e2-8d2e-380a24b4697d.png',
      'https://user-images.githubusercontent.com/62115215/235560872-18458c26-17d1-4205-98ff-20a9e7724e13.png',
      'https://user-images.githubusercontent.com/62115215/235560879-61e4b88d-1061-4975-9403-b7d2c08d68fb.png',
      'https://user-images.githubusercontent.com/62115215/235560882-bcbc11b6-7fbd-441b-af60-1fb1bd688d59.png',
      'https://user-images.githubusercontent.com/62115215/235560883-f29c0bed-72a1-4544-acaf-86a5ba4c6e94.png',
      'https://user-images.githubusercontent.com/62115215/235560899-a1b237d6-9c45-4203-bd39-3f7b0f5a27fb.png',
      'https://user-images.githubusercontent.com/62115215/235560905-c2ae7ba6-76c2-4c0a-b2e9-5cff62a2123d.png',
    ],
    text: {
      pt: '<h2>Introdução</h2><p>Ficha RPG <em>WHITN</em> ou <cite>What Happened in That Night</cite> foi um dos primeiros projetos grandes que fiz sozinho e por algum motivo de necessidade e não somente para estudar. Sua história começa em meados do começo de 2021 onde dentre eu e meus amigos surgiu a ideia de fazer um RPG, do grupo, somente eu tinha jogado algum RPG, porém também minha experiência era quase nula, de qualquer forma, durante os próximos meses fomos desenvolvomendo melhor essa ideia e eu acabei pegando o papel de mestre, ou narrador da história, é quem cria as aventuras e inimigos que outros players irão enfrentar.</p><p>Foi muito legal ficar imaginando e criando o mundo de <em>WHITN</em>, tanto que nosso RPG era para começar em setembro, porém eu atrasei e só consguimos começar em novembro/dezembro. De qualquer forma, foi muito divertido e esse projeto da ficha do <em>WHITN</em> foi criado exclusivamente para o mestre conseguir gerenciar outros jogadores e NPCs, além de poder calcular dano mais facilmente com os atributos calculados automaticamente.</p><h2>Sobre</h2><p>É uma ficha de RPG que tem campos essenciais para se jogar o <em>WHITN</em>, um sistema criado por mim que foi baseado no sistema de <cite>Trail of Cthulhu</cite>, um RPG que incrementa alguns aspectos do tão famoso <cite>Call of Cthulhu</cite>, apectos como sanidade e condições na minha opinião foram melhorados. Por isso a ficha pode parecer um pouco confusa e nem tão útil para qualquer RPG, mas como foi feita exclusivamente para o <em>WHITN</em>, ela serve seu propósito.</p><p>Em relação a programação, é um projeto feito em Angular, no momento que fiz ela, trabalhava como estagiário e nós usávamos Angular na empresa, então nada mais justo de que usa-lo e treinar mais a prática da área. Como eu disse, era estagiário, então não tinha muita experiência para fazer algo incrível, mas mesmo assim, tenho muito orgulho de como o resultado final ficou, tem várias coisinhas nele que me deixam feliz, como a possibilidade de subir imagens dos players, o cálculo automático dos atributos seguindo uma lógica super maluca que fiz, a questão das animações e a área secreta de anjos caídos (Um aspecto e mecânica do sistema).</p>',
    },
  },
  {
    id: 'rpg-v2',
    type: PROJECT_TYPE,
    tags: ['javascript', 'css', 'html', 'angular'],
    date: '2022-06-27T10:00:00.000Z',
    title: {
      pt: 'RPG Angular V2',
    },
    github: `${OWNER_CONFIGS.github_profile}/rpg-angular-v2`,
    figma: '',
    site: 'https://fescherer.github.io/rpg-angular-v2',
    thumb: 'bg-[url("/projects/original/rpg-v2/thumb.png")]',
    description: {
      pt: 'Segunda versão da ficha de RPG do sistema WHITN criado por Felipe Scherer.',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/235561980-82d6b515-bbce-4c30-92e3-d20e96260186.gif',
      'https://user-images.githubusercontent.com/62115215/235561983-854635e1-9d4c-4e67-818d-ce47708f0950.png',
      'https://user-images.githubusercontent.com/62115215/235561987-71bb1672-b703-4023-b5f1-c20e7e64c43e.png',
      'https://user-images.githubusercontent.com/62115215/235561990-f48f84ef-d8f9-49c7-9fb9-ade82d7da575.png',
      'https://user-images.githubusercontent.com/62115215/235561991-0600a40d-b6aa-4df8-8bbd-70681e93715c.png',
    ],
    text: {
      pt: '<h2>Introdução</h2><p>Segunda versão da ficha do sistema <em>WHITN</em> ou <cite>What Happened in That Night</cite> que foi um sistema de RPG criado por mim baseado em <cite>Trail of Cthulhu</cite> que consequentemente foi baseado em <cite>Call of Cthulhu</cite>. Ele foi desenvolvido para poder jogar com alguns amigos algo diferente do convencional, algo que fosse mais dramático do que nossos jogos na <a href="https://store.steampowered.com" target="_blank">Steam</a>. A primeira temporada foi muito divertida, porém, o sistema que havia criado era muito complexo e muitas das vezes ou esquecíamos das condições que nossos personagens haviam desenvolvido ou mesmo perdíamos muito tempo com isso. Foi por isso que depois de alguns acontecimentos dentro da história, separei ela e decidi chamar essa segunda metade de <strong>temporada 2</strong>. Decidi mudar um pouco o sistema como um todo com a finalidade de simplificar ao máximo as mecânicas para focar mais nos diálogos entre os personagens que eram a parte mais legal do RPG.</p><h2>Sobre</h2><p>Essa ficha é produto da simplificação do sistema <em>WHITN</em>, dito isso, tem muitas coisas semelhantes, mas também melhorias novas como por exemplo, a versão mobile e tema escuro. Em outros aspectos foram somente mudanças relacionadas com a necessidade dos dados dessa nova versão do <em>WHITN</em>.</p><p>O desenvolvimento dela foi muito fluído, como já havia tido mais experiência como desenvolvedor e feito uma versão V1 desse projeto, consegui me virar bem com as regras de negócio e como transportá-las para o frontend. O projeto foi feito em Angular.</p>',
    },
  },
]
