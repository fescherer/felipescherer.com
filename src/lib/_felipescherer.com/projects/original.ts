import { IProject, IType } from '@/@types'
import { OWNER_CONFIGS } from '../owner.config'
import { PROJECTS_TYPES } from './projectsType'

const PROJECT_TYPE: IType = PROJECTS_TYPES.original

export const ORIGINAL_PROJECTS: IProject[] = [
  {
    id: 'pokedex',
    type: PROJECT_TYPE,
    title: {
      en: 'Pokedex',
      pt: 'Pokedex',
    },
    tags: ['react', 'figma', 'javascript', 'next', 'css', 'html'],
    date: '2023-01-29T10:00:00.000Z',
    github: `${OWNER_CONFIGS.github_profile}/pokedex`,
    figma: 'https://www.figma.com/file/JtsrGKsMNAnLKqVKBqnBad/Pokedex-APP?node-id=0-1&t=FUvofI6UnU3Pep3a-0',
    site: 'https://pokedex-felipescherer.vercel.app',
    description: {
      en: 'A pokedex app that provides all the most important information you need 😁',
      pt: 'Um app de pokedex que traz todas as mais importantes informações que você necessita 😁',
    },
    images: ['overview-opt.gif', 'homepage.webp', 'pokelist.webp', 'pokedetail.webp', 'pokedetail-2.webp', 'pokedetail-3.webp'],
    text:
    {
      en: '<h2>Introduction</h2><p>This was a project carried out to study APIs in React. I wanted to improve my skills in this regard, so I used a free API on the internet about Pokémon.</p>Developing the project was very interesting, in addition to being able to practice my design skills (In Figma), I was also able to practice using <a href="https://nextjs.org" target="_blank">NextJS</a>.<p></p><p>The project is a pokédex, that is, a set of information about pokemons. In it we have a list of them and if they have them, there is also the animation. In the details of each one, there is information about type, statistics, evolution and location.</p>',
      pt: '<h2>Introdução</h2><p>Este foi um projeto realizado para estudar sobre API\'s em React. Queria melhorar minhas habilidades em relação a isso, por isso utilizei uma API gratuita na internet sobre Pokémons.</p>O desenvolvimento do projeto foi bem interessante, além de conseguir praticar minhas habilidades de design (No Figma), também consegui praticar a utilizar o <a href="https://nextjs.org" target="_blank">NextJS</a>.<p></p><p>O projeto é uma pokédex, ou seja, um conjunto de informações sobre pokémons. Nela temos a listagem deles e se possuirem, também existe a animação. No detalhe de cada um, há informações sobre tipo, estatísticas, evolução e localização.</p>',
    },
  },
  {
    id: 'portifolio-v2',
    type: PROJECT_TYPE,
    tags: ['react', 'figma', 'javascript', 'next', 'css', 'html'],
    date: '2023-02-25T10:00:00.000Z',
    title: {
      en: 'Portfolio',
      pt: 'Portifolio',
    },
    github: `${OWNER_CONFIGS.github_profile}/portifolio`,
    figma: 'https://www.figma.com/file/9LKjRjHQrDtWNbydqZygxf/Project?t=zyrOwueQfx7S4WIN-1',
    site: 'https://www.felipescherer.com/pt',
    description: {
      en: 'Portfolio site, where you find my projects and about me.',
      pt: 'Site de portifolio, onde você encontra meus projetos e sobre mim.',
    },
    images: ['overview-home-opt.gif', 'overview-2-opt.gif', 'image.webp'],
    text: {
      en: '<h2>Introduction</h2><p>I\'ve always loved doing small solo projects and showing people, even if they\'re simple, I\'ve always liked archiving them and having a record and memory of how they were done and what I thought about it. time, my skills and ambitions, of course this changes over time and that\'s why I find it so fascinating to leave these records.</p><p>This project is version 2.0 of the portfolio to mainly show all my projects in a simpler way and visual for all people, even those who are not in the technology area and have a github to explore my profile.<h2>About</h2></p>The site was created following different web theming standards, i18n, modularization and other things that will be added in the future. It is made in <a href="https://nextjs.org/blog/next-13" target="_blank">Next JS 13</a> with app directory and <a href="https://tailwindcss. with" target="_blank">Tailwind</a> for styling.</p><p>I did it in a way that the project can be maintained and constantly updated, with good practices and clean code, and is free to explore. it on github :)</p>',
      pt: '<h2>Introdução</h2><p>Sempre amei fazer projetos solos pequenos e mostrar para as pessoas, mesmo que sejam simples, sempre gostei de arquivá-los e ter um registro e recordação de como foram feitos e o que pensava na época, minhas habilidades e ambições, claro que isso muda com o tempo e por isso acho tão facinante deixar esses registros.</p><p>Esse projeto se trata da versão 2.0 de portifolio para principalmente mostrar todos meus projetos de maneira mais simples e visual para todas as pessoas, mesmo as que não são da área de tecnologia e tenham um github para explorar meu perfil.<h2>Sobre</h2></p>O site foi feito seguindo diversos padrões web de tematização, i18n, modularização e outras coisas que serão adicionadas no futuro. É feito em <a href="https://nextjs.org/blog/next-13" target="_blank">Next JS 13</a> com app directory e <a href="https://tailwindcss.com" target="_blank">Tailwind</a> de estilização.</p><p>Fiz de uma forma que o projeto possa ser mantido e atualizado constantemente, com boas práticas e um código limpo, seja livre para explorá-lo no github :)</p>',
    },
  },
  {
    id: 'rpg',
    type: PROJECT_TYPE,
    tags: ['javascript', 'css', 'html', 'angular'],
    date: '2021-07-25T10:00:00.000Z',
    title: {
      en: 'WHITN V1 RPG Token',
      pt: 'Ficha de RPG WHITN V1',
    },
    github: `${OWNER_CONFIGS.github_profile}/rpg-whitn`,
    figma: '',
    site: 'https://fescherer.github.io/rpg-whitn',
    description: {
      en: 'First version of the WHITN system RPG sheet created by Felipe Scherer.',
      pt: 'Primeira versão da ficha de RPG do sistema WHITN criado por Felipe Scherer.',
    },
    images: ['overview.gif', 'overview-rules.gif', 'homepage.webp', 'mechanics.webp', 'attributes.webp', 'beziel.webp', 'penemue.webp', 'baraqiel.webp', 'asbel.webp', 'af.webp', 'inventory.webp', 'stability.webp', 'weapons.webp', 'character.webp', 'textareas.webp'],
    text: {
      en: '<h2>Introduction</h2><p>RPG Sheet <em>WHITN</em> or <cite>What Happened in That Night</cite> was one of the first big projects I did alone and for some reason of necessity and not just to study. Its story begins in the middle of early 2021, where my friends and I came up with the idea of ​​making an RPG. In the group, only I had played any RPG, but my experience was almost zero, anyway, over the next few months we were developing this idea better and I ended up taking on the role of master, or narrator of the story, who creates the adventures and enemies that other players will face.</p><p>It was really cool to imagine and create the world of <em >WHITN</em>, so much so that our RPG was supposed to start in September, but I delayed it and we only managed to start in November/December. Anyway, it was a lot of fun and this project from the <em>WHITN</em> sheet was created exclusively for the master to be able to manage other players and NPCs, in addition to being able to calculate damage more easily with the automatically calculated attributes.</p ><h2>About</h2><p>It is an RPG sheet that has essential fields for playing <em>WHITN</em>, a system created by me that was based on the <cite>Trail of Cthulhu</cite>, an RPG that improves some aspects of the famous <cite>Call of Cthulhu</cite>, aspects such as sanity and conditions in my opinion have been improved. So the form may seem a little confusing and not that useful for any RPG, but as it was made exclusively for <em>WHITN</em>, it serves its purpose.</p><p>Regarding programming, It\'s a project done in Angular, at the time I did it, I was working as an intern and we used Angular in the company, so it\'s only fair to use it and train more in the area. As I said, I was an intern, so I didn\'t have much experience to do something incredible, but even so, I\'m very proud of how the final result turned out, there are several little things about it that make me happy, like the possibility of uploading images of the players, the automatic calculation of attributes following a super crazy logic I made, the issue of animations and the secret area of ​​fallen angels (An aspect and mechanics of the system).</p>',
      pt: '<h2>Introdução</h2><p>Ficha RPG <em>WHITN</em> ou <cite>What Happened in That Night</cite> foi um dos primeiros projetos grandes que fiz sozinho e por algum motivo de necessidade e não somente para estudar. Sua história começa em meados do começo de 2021 onde dentre eu e meus amigos surgiu a ideia de fazer um RPG, do grupo, somente eu tinha jogado algum RPG, porém também minha experiência era quase nula, de qualquer forma, durante os próximos meses fomos desenvolvomendo melhor essa ideia e eu acabei pegando o papel de mestre, ou narrador da história, é quem cria as aventuras e inimigos que outros players irão enfrentar.</p><p>Foi muito legal ficar imaginando e criando o mundo de <em>WHITN</em>, tanto que nosso RPG era para começar em setembro, porém eu atrasei e só consguimos começar em novembro/dezembro. De qualquer forma, foi muito divertido e esse projeto da ficha do <em>WHITN</em> foi criado exclusivamente para o mestre conseguir gerenciar outros jogadores e NPCs, além de poder calcular dano mais facilmente com os atributos calculados automaticamente.</p><h2>Sobre</h2><p>É uma ficha de RPG que tem campos essenciais para se jogar o <em>WHITN</em>, um sistema criado por mim que foi baseado no sistema de <cite>Trail of Cthulhu</cite>, um RPG que incrementa alguns aspectos do tão famoso <cite>Call of Cthulhu</cite>, apectos como sanidade e condições na minha opinião foram melhorados. Por isso a ficha pode parecer um pouco confusa e nem tão útil para qualquer RPG, mas como foi feita exclusivamente para o <em>WHITN</em>, ela serve seu propósito.</p><p>Em relação a programação, é um projeto feito em Angular, no momento que fiz ela, trabalhava como estagiário e nós usávamos Angular na empresa, então nada mais justo de que usa-lo e treinar mais a prática da área. Como eu disse, era estagiário, então não tinha muita experiência para fazer algo incrível, mas mesmo assim, tenho muito orgulho de como o resultado final ficou, tem várias coisinhas nele que me deixam feliz, como a possibilidade de subir imagens dos players, o cálculo automático dos atributos seguindo uma lógica super maluca que fiz, a questão das animações e a área secreta de anjos caídos (Um aspecto e mecânica do sistema).</p>',
    },
  },
  {
    id: 'rpg-v2',
    type: PROJECT_TYPE,
    tags: ['javascript', 'css', 'html', 'angular'],
    date: '2022-06-27T10:00:00.000Z',
    title: {
      en: 'Angular RPG V2',
      pt: 'RPG Angular V2',
    },
    github: `${OWNER_CONFIGS.github_profile}/rpg-angular-v2`,
    figma: '',
    site: 'https://fescherer.github.io/rpg-angular-v2',
    description: {
      en: 'Second version of the WHITN system RPG sheet created by Felipe Scherer.',
      pt: 'Segunda versão da ficha de RPG do sistema WHITN criado por Felipe Scherer.',
    },
    images: ['overview.gif', 'image-overview.webp', 'image-dark-mode.webp', 'image-dark-mode-form.webp', 'image-home.webp'],
    text: {
      en: '<h2>Introduction</h2><p>Second version of the <em>WHITN</em> system sheet or <cite>What Happened in That Night</cite> which was an RPG system created by me based on <cite>Trail of Cthulhu</cite> which was consequently based on <cite>Call of Cthulhu</cite>. It was developed to be able to play with some friends something different from the conventional, something that was more dramatic than our games on <a href="https://store.steampowered.com" target="_blank">Steam</a> . The first season was a lot of fun, however, the system that had been created was very complex and many times we either forgot about the conditions that our characters had developed or even wasted a lot of time with it. That\'s why after some events within the story, I separated it and decided to call this second half <strong>season 2</strong>. I decided to change the system as a whole a little in order to simplify the mechanics as much as possible to focus more on the dialogues between the characters, which were the coolest part of the RPG.</p><h2>About</h2><p> This sheet is the product of the simplification of the <em>WHITN</em> system, that said, it has many similar things, but also new improvements such as, for example, the mobile version and dark theme. In other aspects, they were just changes related to the need for data in this new version of <em>WHITN</em>.</p><p>Its development was very fluid, as I had already had more experience as a developer and made a version V1 of this project, I managed to get along well with the business rules and how to transport them to the frontend. The project was created in Angular.</p>',
      pt: '<h2>Introdução</h2><p>Segunda versão da ficha do sistema <em>WHITN</em> ou <cite>What Happened in That Night</cite> que foi um sistema de RPG criado por mim baseado em <cite>Trail of Cthulhu</cite> que consequentemente foi baseado em <cite>Call of Cthulhu</cite>. Ele foi desenvolvido para poder jogar com alguns amigos algo diferente do convencional, algo que fosse mais dramático do que nossos jogos na <a href="https://store.steampowered.com" target="_blank">Steam</a>. A primeira temporada foi muito divertida, porém, o sistema que havia criado era muito complexo e muitas das vezes ou esquecíamos das condições que nossos personagens haviam desenvolvido ou mesmo perdíamos muito tempo com isso. Foi por isso que depois de alguns acontecimentos dentro da história, separei ela e decidi chamar essa segunda metade de <strong>temporada 2</strong>. Decidi mudar um pouco o sistema como um todo com a finalidade de simplificar ao máximo as mecânicas para focar mais nos diálogos entre os personagens que eram a parte mais legal do RPG.</p><h2>Sobre</h2><p>Essa ficha é produto da simplificação do sistema <em>WHITN</em>, dito isso, tem muitas coisas semelhantes, mas também melhorias novas como por exemplo, a versão mobile e tema escuro. Em outros aspectos foram somente mudanças relacionadas com a necessidade dos dados dessa nova versão do <em>WHITN</em>.</p><p>O desenvolvimento dela foi muito fluído, como já havia tido mais experiência como desenvolvedor e feito uma versão V1 desse projeto, consegui me virar bem com as regras de negócio e como transportá-las para o frontend. O projeto foi feito em Angular.</p>',
    },
  },
  {
    id: 'morse-secret-scripter',
    type: PROJECT_TYPE,
    tags: ['javascript', 'css', 'html', 'react'],
    date: '2024-06-30T10:00:00.000Z',
    title: {
      en: 'Morse Secret Encoder/Decoder',
      pt: 'Codificador/Decodificador de Código Morse',
    },
    github: `${OWNER_CONFIGS.github_profile}/morse-secret-scripter`,
    figma: '',
    site: 'https://morse-secret-scripter.felipescherer.com',
    description: {
      en: 'Simple encoder/decoder morse code project.',
      pt: 'Projeto simples de codificador/decodificador de código morse.',
    },
    images: ['thumb.webp'],
    text: {
      en: '<p>This is a translator for morse code. Very simple and easy to use. Just write your sentence in latin words in the encoder or morse words in decoder. Morse works by having two separate "letters" - short bip and long big, which you can see in the Morse Dictionary.</p>',
      pt: '<p>Este é um tradutor para código morse. Muito simples e fácil de usar. Basta escrever sua frase em palavras latinas no codificador ou em palavras morse no decodificador. Morse funciona com duas "letras" separadas - bip curto e grande grande, que você pode ver no Dicionário Morse.</p>',
    },
  },
]
