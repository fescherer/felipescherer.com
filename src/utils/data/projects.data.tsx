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
      en: 'This repository showcases a collection of projects I completed during my subscription to the Alura online course platform. These projects span a wide range of topics, including programming, web development, management, and design.\nThrough these courses, I gained hands-on experience in both technical and creative fields, ranging from frontend and backend development to UX/UI design and social media strategies. Each course offered valuable insights and skills, contributing to a well-rounded learning experience.',
      pt: 'Esse repositório apresenta a coleção de projetos que completei durante minha inscrição na plataforma de cursos online da Alura. Nesses projetos existem uma variedade de tópicos incluindo programação, desenvolvimento web, administração e design.\n Através desses cursos, ganhei experiências em ambos campos técnico e criativo, contribuindo para o aprendizado completo.',
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
      en: 'This repository features a collection of projects developed during my participation in the Rocketseat bootcamp. These projects cover web, mobile, and backend development, reflecting the comprehensive and immersive learning experience provided by the platform. The bootcamp included in-depth modules focused on modern development technologies, such as React, React Native and Node JS.',
      pt: 'Esse repositório apresenta uma coleção de projetos desenvolvidos durante minha participação do bootcamp da Rocketseat. Eles abrangem desenvolvimento web, mobile e backend, refletindo na compreensão e imersão da experiência providenciada pela plataforma. O bootcamp inclui foco nos modulos com tecnologias modernas como React, React Native e Node JS.',
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
      site: 'https://challenge-01.felipescherer.com     ',
    },
    description: {
      en: 'This repository contains the implementation of Challenge 01: Todo List from Rocketseat\'s Ignite bootcamp. The project focuses on building a simple task management application with basic functionalities, such as adding, completing, and deleting tasks. While the layout and features are intentionally straightforward, the challenge serves as an excellent opportunity to practice and reinforce the foundational concepts of React. \nThe Todo List project is designed to help developers understand React component structure, manage state effectively in a React application, and handle user interactions such as form submissions and button clicks. By focusing on these essentials, this challenge provides a strong starting point for mastering React and modern frontend development.',
      pt: 'Este repositório contém a implementação do Desafio 01: Lista de Tarefas do bootcamp Ignite da Rocketseat. O projeto tem como objetivo construir uma aplicação simples de gerenciamento de tarefas com funcionalidades básicas, como adicionar, concluir e excluir tarefas. Embora o layout e os recursos sejam propositalmente simples, o desafio é uma excelente oportunidade para praticar e reforçar os conceitos fundamentais do React.\nO projeto da Lista de Tarefas foi projetado para ajudar os desenvolvedores a compreender a estrutura de componentes do React, gerenciar estado de forma eficaz em uma aplicação React e lidar com interações do usuário, como envio de formulários e cliques em botões. Ao focar nesses conceitos essenciais, este desafio oferece uma base sólida para dominar o React e o desenvolvimento moderno de frontend.',
    },
    images: [`thumb.webp`],
  },
  {
    id: 'rocketseat-challenge-02-coffee-delivery  ',
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
      en: 'This repository contains the implementation of Challenge 02: Coffee Delivery from Rocketseat\'s Ignite bootcamp. The project focuses on building an online coffee purchasing system, providing an opportunity to practice intermediate React skills such as hooks, contexts, and reducers. \nThe challenge is designed to help developers enhance their understanding of React\'s state management and component interactions while creating a functional and user-friendly application. Despite its simplicity, the project serves as a valuable exercise in applying React concepts to real-world scenarios.',
      pt: 'Este repositório contém a implementação do Desafio 02: Coffee Delivery do bootcamp Ignite da Rocketseat. O projeto tem como objetivo construir um sistema de compra online de cafés, oferecendo uma oportunidade para praticar habilidades intermediárias em React, como hooks, contextos e reducers.\nO desafio foi projetado para ajudar os desenvolvedores a aprimorar sua compreensão sobre o gerenciamento de estado e interações entre componentes no React, enquanto criam uma aplicação funcional e amigável para o usuário. Apesar de sua simplicidade, o projeto é um exercício valioso para aplicar os conceitos de React em cenários do mundo real.',
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
      en: 'This repository contains the Alura Quiz project, a quiz about animals developed during the Intensive Week React 2nd Edition using Next.js, organized by the Alura team in January 2021. \nThe intensive week is a coding bootcamp that dedicates 2-3 hours daily to building a complete project, making it easier to finish and providing a rewarding sense of accomplishment. Despite being relatively simple, this project was a pivotal experience for me as I was just beginning to learn React. It introduced me to the Next.js framework, which significantly enhances the frontend development experience, and taught me to work with JSON in React, an essential skill for any developer. \nThe Alura Quiz project allows users to answer general questions about animals, with each question accompanied by a GIF, one correct answer, and a score counter. Inspired by my family\'s adoption of our kitten Luna, the quiz reflects my personal connection to the theme. \nAdditionally, the project\'s home screen showcases three quizzes from other participants in the intensive week that I found particularly interesting, fostering a sense of community. This experience greatly improved my programming skills and introduced me to key concepts in React and Next.js development.',
      pt: 'Este repositório contém o projeto Alura Quiz, um quiz sobre animais desenvolvido durante a Imersão React 2ª Edição, utilizando Next.js, organizada pela equipe da Alura em janeiro de 2021.\nA imersão é um bootcamp de programação que dedica de 2 a 3 horas diárias à construção de um projeto completo, tornando mais fácil concluí-lo e proporcionando uma gratificante sensação de realização. Apesar de ser relativamente simples, este projeto foi uma experiência marcante para mim, pois estava apenas começando a aprender React. Ele me apresentou ao framework Next.js, que melhora significativamente a experiência de desenvolvimento frontend, e me ensinou a trabalhar com JSON no React, uma habilidade essencial para qualquer desenvolvedor.\nO projeto Alura Quiz permite que os usuários respondam perguntas gerais sobre animais, com cada pergunta acompanhada por um GIF, uma resposta correta e um contador de pontuação. Inspirado pela adoção da nossa gatinha Luna pela minha família, o quiz reflete minha conexão pessoal com o tema.\nAlém disso, a tela inicial do projeto exibe três quizzes de outros participantes da imersão que achei particularmente interessantes, promovendo um senso de comunidade. Essa experiência melhorou muito minhas habilidades de programação e me introduziu a conceitos-chave no desenvolvimento com React e Next.js.',
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
      en: 'This repository contains a runner game developed during Alura\'s Intensive Game Dev Week, my first programming project posted on GitHub. At the time, I was in the first semester of college and had only learned HTML and CSS, with limited exposure to JavaScript through self-study on platforms like Khan Academy and books. \nThe Game Dev Intensive Week, led by Paulo and other Alura instructors, introduced me to JavaScript using the P5.js library for game development. This experience was pivotal, as it taught me essential JavaScript concepts, helped me decide to focus on the language, and even introduced me to pixel art, which I used to create the game\'s protagonist. \nWhile the P5.js library is not typically used for large-scale projects, this experience provided an excellent starting point for understanding JavaScript and game development. As a beginner, many methods in the project are simple and rudimentary, but it served as an important milestone in my programming journey and sparked my interest in further exploring both JavaScript and creative development.',
      pt: 'Este repositório contém um jogo runner desenvolvido durante a Imersão Game Dev da Alura, meu primeiro projeto de programação publicado no GitHub. Na época, eu estava no primeiro semestre da faculdade e havia aprendido apenas HTML e CSS, com pouca experiência em JavaScript, adquirida por meio de autoestudo em plataformas como Khan Academy e livros.\nA Imersão, liderada por Paulo e outros instrutores da Alura, me apresentou ao JavaScript utilizando a biblioteca P5.js para desenvolvimento de jogos. Essa experiência foi fundamental, ensinando conceitos essenciais de JavaScript, ajudando-me a decidir focar na linguagem e até mesmo introduzindo-me à arte de pixel, usada para criar o protagonista do jogo.\nEmbora a biblioteca P5.js não seja geralmente usada em projetos de grande escala, foi um excelente ponto de partida para entender JavaScript e desenvolvimento de jogos. Como iniciante, os métodos do projeto são simples, mas este marco foi crucial no meu aprendizado e despertou meu interesse por JavaScript e desenvolvimento criativo.',
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
      en: 'FS Delivery is a complete web, mobile, and backend project simulating a fictitious delivery system, developed during the 2nd edition of Superior Dev Week organized by DevSuperior. \nThis was my first experience working with the backend, where we used the Spring framework in Java to build RESTful endpoints. Additionally, the project incorporated web and mobile frontends using React and React Native, making it a comprehensive, production-ready solution. \nThe system allows customers to place meal orders through the web interface, configure their address and location using the Leaflet library, and send the order to the restaurant. Restaurants manage orders via the mobile app, where they can view order details, confirm deliveries, and access the customer’s location. This project provided an excellent introduction to full-stack development, combining technologies across the stack for a cohesive and functional application.',
      pt: 'FS Delivery é um projeto completo de web, mobile e backend que simula um sistema fictício de entregas, desenvolvido durante a 2ª edição da Superior Dev Week organizada pela DevSuperior.\nEssa foi minha primeira experiência trabalhando com backend, utilizando o framework Spring em Java para construir endpoints RESTful. Além disso, o projeto incorporou frontends web e mobile com React e React Native, tornando-o uma solução abrangente e pronta para produção.\nO sistema permite que os clientes façam pedidos de refeições pela interface web, configurem seus endereços e localizações usando a biblioteca Leaflet e enviem os pedidos ao restaurante. Os restaurantes gerenciam os pedidos por meio do aplicativo móvel, onde podem visualizar detalhes do pedido, confirmar entregas e acessar a localização do cliente. Este projeto proporcionou uma excelente introdução ao desenvolvimento full-stack, combinando tecnologias em toda a stack para criar uma aplicação coesa e funcional.',
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
      en: 'Move It is an RPG-style application designed to follow the Pomodoro methodology, reminding users every 30 minutes to perform small quality-of-life exercises. Developed during the 4th edition of Rocketseat\'s Next Level Week (NLW 04), this project was an exciting opportunity to enhance my React skills by exploring more advanced topics such as contexts. \nThe application\'s gamified interface incorporates an engaging RPG theme, where each completed exercise awards points that contribute to leveling up, making productivity both fun and rewarding. At the time of development, I already had a strong theoretical foundation in web development and took full advantage of my vacation from work and college to deepen my knowledge and refine my skills. How far can you level up?',
      pt: 'Move It é uma aplicação no estilo RPG projetada para seguir a metodologia Pomodoro, lembrando os usuários a cada 30 minutos de realizar pequenos exercícios para a qualidade de vida. Desenvolvido durante a 4ª edição da Next Level Week (NLW 04) da Rocketseat, este projeto foi uma oportunidade empolgante para aprimorar minhas habilidades em React, explorando tópicos mais avançados, como contextos.\nA interface gamificada do aplicativo incorpora um tema envolvente de RPG, onde cada exercício concluído concede pontos que contribuem para subir de nível, tornando a produtividade divertida e recompensadora. Na época do desenvolvimento, eu já possuía uma sólida base teórica em desenvolvimento web e aproveitei ao máximo minhas férias do trabalho e da faculdade para aprofundar meu conhecimento e refinar minhas habilidades. Até onde você consegue chegar no jogo?',
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
      en: 'Plant Manager is a mobile application developed during Rocketseat\'s NLW 05 (Next Level Week 05), designed to enhance the feeling of reward for completing tasks. This was my first project using React Native, and the experience was invaluable for learning how to create and execute a mobile application. Although I haven\'t published it to any app store yet, the idea and execution were exciting, and I plan to develop a 2.0 version in the future. \nThe app allows users to register plants and provides reminders for essential tasks like watering, sunlight exposure, and general plant care. To make it more engaging, the project incorporates a game-style system where users gain experience points each time they care for their plants. These points contribute to leveling up, offering motivation to stay consistent with plant care while gamifying the experience.',
      pt: 'Plant Manager é um aplicativo móvel desenvolvido durante a NLW 05 (Next Level Week 05) da Rocketseat, projetado para aumentar a sensação de recompensa ao concluir tarefas. Este foi meu primeiro projeto usando React Native, e a experiência foi valiosa para aprender como criar e executar um aplicativo móvel. Embora ainda não tenha sido publicado em nenhuma loja de aplicativos, a ideia e a execução foram empolgantes, e planejo desenvolver uma versão 2.0 no futuro.\nO app permite que os usuários cadastrem plantas e fornece lembretes para tarefas essenciais, como rega, exposição ao sol e cuidados gerais com as plantas. Para tornar o projeto mais envolvente, ele incorpora um sistema no estilo de jogo, onde os usuários ganham pontos de experiência cada vez que cuidam de suas plantas. Esses pontos contribuem para o progresso de nível, oferecendo motivação para manter a consistência nos cuidados com as plantas, ao mesmo tempo em que gamifica a experiência.',
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
      en: 'Live Chat Q&A is an application developed during Rocketseat\'s NLW 06 (Next Level Week 06) that simulates a live chat focused on questions. The project was particularly interesting because it was my first time using Firebase backend services, specifically the user login/registration functionality. This experience opened several doors for me, as I quickly became fond of Firebase, and now I use it in almost every project that requires simple authentication or a database (Firestore). \nThe platform allows streamers to create rooms where viewers can send messages and vote on the ones they want the streamer to see. This voting system is particularly useful for teaching streams, as it helps the streamer identify the most popular questions, making it easier to engage with the audience.',
      pt: 'Live Chat Q&A é uma aplicação desenvolvida durante a NLW 06 (Next Level Week 06) da Rocketseat que simula um chat ao vivo focado em perguntas. O projeto foi particularmente interessante porque foi a primeira vez que utilizei os serviços de backend do Firebase, especificamente a funcionalidade de login/cadastro de usuários. Essa experiência abriu várias portas para mim, pois rapidamente me apaixonei pelo Firebase, e agora o utilizo em quase todos os projetos que exigem autenticação simples ou um banco de dados (Firestore).\nA plataforma permite que os streamers criem salas onde os espectadores podem enviar mensagens e votar nas que desejam que o streamer veja. Esse sistema de votação é particularmente útil para transmissões educativas, pois ajuda o streamer a identificar as perguntas mais populares, facilitando o engajamento com a audiência.',
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
      en: 'Habit Manager is an application developed during Rocketseat\'s NLW Setup (Next Level Week), designed for managing and monitoring habits. Throughout this project, I learned various programming concepts, from backend development to both web and mobile frontend development, all while following best practices for each project type. The frontend is identical for both web and mobile platforms, with differences only in how they are deployed. The backend was where I gained the most experience, as I was relatively new to this area, and the project greatly contributed to my programming growth. \nThe app allows users to register habits and track their progress. It also enables setting a minimum frequency for each habit and prioritizing the order in which they are completed.',
      pt: 'Habit Manager é uma aplicação desenvolvida durante o NLW Setup (Next Level Week) da Rocketseat, projetada para gerenciar e monitorar hábitos. Ao longo deste projeto, aprendi diversos conceitos de programação, desde o desenvolvimento backend até os frontends web e mobile, sempre seguindo as melhores práticas para cada tipo de projeto. O frontend é idêntico para ambas as plataformas, web e mobile, com diferenças apenas na forma como são implementados. O backend foi onde ganhei mais experiência, pois estava relativamente novo nessa área, e o projeto contribuiu bastante para o meu crescimento como programador.\nO app permite que os usuários registrem hábitos e acompanhem seu progresso. Ele também possibilita definir uma frequência mínima para cada hábito e priorizar a ordem em que eles devem ser completados.',
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
      en: 'Simple encoder/decoder morse code project. ',
      pt: 'Projeto simples de codificador/decodificador de código morse.',
    },
    images: ['thumb.webp'],
  },
]
