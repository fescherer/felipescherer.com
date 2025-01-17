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
      en: 'Best Fit is a memory management demonstration algorithm based on the Best Fit Algorithm, developed as a college project in the Operating Systems class. This algorithm is used for memory allocation in computers, where it places processes in the smallest available space that is large enough to accommodate them. For more information, you can refer to the Wikipedia page. \nThis project is a simulation and not a production-ready implementation. It uses a set of 100 memory elements, where each element represents a process ID, and -1 indicates an empty space. The simulation includes random process weights (sizes) and tests for allocating processes, deleting processes, and handling memory overflow. The allocation is done by finding the smallest space large enough for each process. The program also simulates memory becoming full and manages the processes accordingly.',
      pt: 'Best Fit é um algoritmo de demonstração de gerenciamento de memória baseado no Algoritmo Best Fit, desenvolvido como um projeto universitário na disciplina de Sistemas Operacionais. Este algoritmo é utilizado para alocação de memória em computadores, onde ele coloca os processos no menor espaço disponível que seja grande o suficiente para acomodá-los. Para mais informações, você pode consultar a página da Wikipedia.\nEste projeto é uma simulação e não uma implementação pronta para produção. Ele utiliza um conjunto de 100 elementos de memória, onde cada elemento representa um ID de processo e -1 indica um espaço vazio. A simulação inclui pesos (tamanhos) de processos aleatórios e testes para alocar processos, excluir processos e lidar com o estouro de memória. A alocação é feita encontrando o menor espaço disponível o suficiente para cada processo. O programa também simula a memória ficando cheia e gerencia os processos de acordo.',
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
      en: 'Save the Green Website is my first college project, created to practice HTML and CSS concepts. It wasn\'t even on GitHub until recently because I hadn\'t yet learned how to use Git or GitHub at the time. This project, part of the Supervised Practical Activities (APS) for my Computer Science program, was done halfway through my first semester. \nIt\'s a very simple and, honestly, a bit ugly project, but I\'m proud of it since it was one of my first programming experiences. I plan to make an updated version someday to compare how much I\'ve improved since then. \nThe project itself is a basic website built only with HTML and CSS, focused on environmental topics. Specifically, it\'s about environmental NGOs and garbage collection sites in Campinas, known as Eco Pontos. Although I was a beginner, I already experimented with JavaScript, but the assignment was restricted to just HTML and CSS. One of the challenges was creating the menu using only these tools, which I successfully achieved. Despite its simplicity, the project served its purpose.',
      pt: 'Save the Green Website é o meu primeiro projeto universitário, criado para praticar conceitos de HTML e CSS. Ele nem estava no GitHub até recentemente, porque na época eu ainda não sabia como usar Git ou GitHub. Esse projeto, parte das Atividades Práticas Supervisionadas (APS) do meu curso de Ciência da Computação, foi feito no meio do meu primeiro semestre.\nÉ um projeto muito simples e, honestamente, um pouco feio, mas tenho orgulho dele, pois foi uma das minhas primeiras experiências com programação. Planejo fazer uma versão atualizada algum dia para comparar o quanto melhorei desde então.\nO projeto em si é um site básico construído apenas com HTML e CSS, focado em tópicos ambientais. Especificamente, trata-se de ONGs ambientais e pontos de coleta de lixo em Campinas, conhecidos como Eco Pontos. Embora eu fosse iniciante, já havia experimentado com JavaScript, mas a tarefa era restrita a apenas HTML e CSS. Um dos desafios foi criar o menu usando apenas essas ferramentas, o que consegui fazer com sucesso. Apesar de sua simplicidade, o projeto cumpriu seu propósito.',
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
      en: 'Eco Points Locator is a project that calculates the distance between a given coordinate point in the Campinas region and the nearest Eco Point. This project was created as part of my Supervised Practical Activities (APS) at the end of the second semester of my Computer Science course. The main subject studied that semester was structured programming in Python, so the project was developed using this methodology and language. \nThe project uses the best path search algorithm to locate the nearest Eco Point in Campinas. There is no graphical interface, so the program operates purely through the console. You simply input a location, and the program calculates the best route to the closest Eco Point.',
      pt: 'Eco Points Locator é um projeto que calcula a distância entre um ponto de coordenadas fornecido na região de Campinas e o Eco Point mais próximo. Este projeto foi criado como parte das minhas Atividades Práticas Supervisionadas (APS) no final do segundo semestre do meu curso de Ciência da Computação. A principal disciplina estudada naquele semestre foi programação estruturada em Python, então o projeto foi desenvolvido utilizando essa metodologia e linguagem.\nO projeto utiliza o algoritmo de busca pelo melhor caminho para localizar o Eco Point mais próximo em Campinas. Não há uma interface gráfica, portanto, o programa opera exclusivamente por meio do console. Você simplesmente insere uma localização, e o programa calcula a melhor rota para o Eco Point mais próximo.',
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
      en: 'University Management System is a project developed as part of the Supervised Practical Activities (APS) in the third semester of my Computer Science course. The main subject that semester was object-oriented programming (OOP) in Java, and the project had to follow the OOP methodology using either Java or C#. This semester marked my first exposure to Java, having previously focused on Python. Despite my preference for other languages, learning Java was essential, as it deepened my understanding of object orientation and computing concepts, particularly for mobile development. \nThe project is a university management system that handles student registrations, courses, and grades. It’s built entirely in the console and utilizes a CSV file to simulate a database. The system includes features for searching, updating, deleting, and creating records.',
      pt: 'University Management System é um projeto desenvolvido como parte das Atividades Práticas Supervisionadas (APS) no terceiro semestre do meu curso de Ciência da Computação. A principal disciplina daquele semestre foi programação orientada a objetos (POO) em Java, e o projeto precisava seguir a metodologia POO utilizando Java ou C#. Esse semestre marcou minha primeira experiência com Java, tendo me concentrado anteriormente em Python. Apesar da minha preferência por outras linguagens, aprender Java foi essencial, pois aprofundou meu entendimento sobre orientação a objetos e conceitos de computação, especialmente para o desenvolvimento mobile.\nO projeto é um sistema de gestão universitária que gerencia matrículas de alunos, cursos e notas. Ele é construído inteiramente no console e utiliza um arquivo CSV para simular um banco de dados. O sistema inclui funcionalidades para buscar, atualizar, excluir e criar registros.',
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
      en: 'Library Management System is a project developed as part of the Supervised Practical Activities (APS) in the fourth semester of my Computer Science course. During that semester, the primary focus was databases, and we were required to create a project that utilized a database. While any database language could be used, my group chose MySQL. This was my first experience with a database language, as I had only learned about data modeling in the previous semester. Additionally, it was my first encounter with a graphical interface in Java, using Swing and AWT. I also learned about the MVC (Model-View-Controller) pattern, which helps in organizing project files according to their respective responsibilities. \nThe project is designed to manage a bookstore, allowing for the deletion, modification, addition, and search of authors, books, and publishers. It connects to a MySQL database and features a graphical interface built with Java Swing and AWT.',
      pt: 'Sistema de gerenciamento de biblioteca é um projeto desenvolvido como parte das Atividades Práticas Supervisionadas (APS) no quarto semestre do meu curso de Ciência da Computação. Durante esse semestre, o foco principal foi bancos de dados, e fomos desafiados a criar um projeto que utilizasse um banco de dados. Embora qualquer linguagem de banco de dados pudesse ser utilizada, meu grupo escolheu o MySQL. Essa foi minha primeira experiência com uma linguagem de banco de dados, já que eu havia aprendido sobre modelagem de dados no semestre anterior. Além disso, foi meu primeiro contato com uma interface gráfica em Java, utilizando Swing e AWT. Também aprendi sobre o padrão MVC (Model-View-Controller), que ajuda a organizar os arquivos do projeto de acordo com suas respectivas responsabilidades.\nO projeto foi desenvolvido para gerenciar uma livraria, permitindo a exclusão, modificação, adição e pesquisa de autores, livros e editoras. Ele se conecta a um banco de dados MySQL e apresenta uma interface gráfica construída com Java Swing e AWT.',
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
      en: 'Chat Simulator is a messaging system developed as part of the Supervised Practical Activities (APS) during the fifth semester of my Computer Science course. The primary subject studied that semester was computer networks, and the project required us to use the concepts learned in class. While the teacher gave us the freedom to choose the project, it needed to involve sockets, which are network points that allow real-time communication by listening for responses. Based on this, my group and I decided to develop a messaging application using React and Socket.io. The application is straightforward, featuring a minimalist frontend and the ability to send emojis in messages, simulating a simple chat experience that updates in real-time.',
      pt: 'Chat Simulator é um sistema de mensagens desenvolvido como parte das Atividades Práticas Supervisionadas (APS) durante o quinto semestre do meu curso de Ciência da Computação. A principal disciplina estudada naquele semestre foi redes de computadores, e o projeto exigia que utilizássemos os conceitos aprendidos em sala de aula. Embora o professor tenha nos dado liberdade para escolher o projeto, ele precisava envolver o uso de sockets, que são pontos de rede que permitem comunicação em tempo real, ouvindo por respostas. Com base nisso, meu grupo e eu decidimos desenvolver uma aplicação de mensagens usando React e Socket.io. A aplicação é simples, com um frontend minimalista e a capacidade de enviar emojis nas mensagens, simulando uma experiência de chat simples que se atualiza em tempo real.',
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
      en: 'Restaurant Management System is a project developed as part of the Supervised Practical Activities (APS) during the sixth semester of my Computer Science course. The focus of that semester was operating systems, and the project aimed to simulate a Linux backup system using three virtual machines (VMs): Caixa (Cashier), Server, and Administrator. These VMs were connected to a shared network to ensure backup redundancy of files. The system simulates a restaurant\'s operations, where the Caixa generates random commands between 12 pm and 3 pm, representing potential cashier activities. At 3 pm, a daily backup is triggered and sent to the Server. Between 3:15 pm and 3:25 pm, the system generates various reports, including command reports sent to the Server and a day-end report sent to the Administrator machine. Each VM has a firewall restricting communication, with a proxy configured based on the role of each machine, ensuring that the Caixa cannot communicate directly with the Administrator.',
      pt: 'O Sistema de Gerenciamento de Restaurante é um projeto desenvolvido como parte das Atividades Práticas Supervisionadas (APS) durante o sexto semestre do meu curso de Ciência da Computação. O foco daquele semestre foi sistemas operacionais, e o projeto tinha como objetivo simular um sistema de backup Linux usando três máquinas virtuais (VMs): Caixa, Servidor e Administrador. Essas VMs estavam conectadas a uma rede compartilhada para garantir redundância no backup de arquivos. O sistema simula as operações de um restaurante, onde o Caixa gera comandos aleatórios entre 12h e 15h, representando atividades potenciais do caixa. Às 15h, um backup diário é acionado e enviado para o Servidor. Entre 15h15 e 15h25, o sistema gera vários relatórios, incluindo relatórios de comandos enviados ao Servidor e um relatório de fim de dia enviado para a máquina Administradora. Cada VM possui um firewall que restringe a comunicação, com um proxy configurado de acordo com o papel de cada máquina, garantindo que o Caixa não possa se comunicar diretamente com o Administrador.',
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
      en: 'Planning a Computational System is an end-of-semester project that I completed during the seventh semester of my Computer Science course. This project was part of the Software Engineering subject, and its focus was on theoretical aspects of system development, specifically project planning. Unlike other APS projects, this one involved more planning and documentation, as we were approaching the final stages of the course. The professor suggested that the project should be related to the group’s chosen topic, and we were tasked with creating essential planning documents, such as class diagrams, UML, and outlining requirements and use cases. This project was a significant exercise in understanding and applying the foundational principles of software design and planning.',
      pt: 'Planejamento de um Sistema Computacional é um projeto de final de semestre que realizei durante o sétimo semestre do meu curso de Ciência da Computação. Esse projeto fez parte da disciplina de Engenharia de Software, com foco nos aspectos teóricos do desenvolvimento de sistemas, especificamente no planejamento de projetos. Ao contrário de outros projetos de APS, este envolveu mais planejamento e documentação, já que estávamos nos aproximando das etapas finais do curso. O professor sugeriu que o projeto fosse relacionado ao tema escolhido pelo grupo, e fomos incumbidos de criar documentos de planejamento essenciais, como diagramas de classes, UML, além de definir requisitos e casos de uso. Este projeto foi um exercício significativo para entender e aplicar os princípios fundamentais do design e planejamento de software.',
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
      en: 'APS Project for the 8th Semester of Computer Science was an end-of-semester project completed during the eighth semester of my Computer Science course. In that semester, the main subject studied was distributed systems. Since it was the final semester, the professor had clearly outlined the project requirements from the beginning. The task was to develop a system with complete redundancy, meaning, for example, a website where, if one server went down, the website would still be operational. To accomplish this, I used HaProxy as the Load Balancer, Docker to run the system (we used a simple API rather than a full website, but the redundancy concept remained the same), and K6 for API testing, which was built using FastAPI.',
      pt: 'Projeto de APS do 8º Semestre de Ciência da Computação foi um projeto de final de semestre realizado durante o oitavo semestre do meu curso de Ciência da Computação. Nesse semestre, a principal disciplina estudada foi sistemas distribuídos. Como era o semestre final, o professor já havia delineado claramente os requisitos do projeto desde o início. A tarefa era desenvolver um sistema com redundância completa, ou seja, um site onde, se um servidor caísse, o site continuaria funcionando. Para isso, usei o HaProxy como Balanceador de Carga, o Docker para rodar o sistema (utilizamos uma API simples, em vez de um site completo, mas o conceito de redundância permaneceu o mesmo) e o K6 para testes de API, que foi construída utilizando o FastAPI.',
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
      en: 'ATM Simulation Script: This project was developed for the Data Structure class to simulate a bank branch in order to study queues and stacks in data structures. The script is written in Python and generates a simulation of an ATM. It utilizes random values to generate customers at different times, creating queues. The user can adjust the percentage of customers appearing, potentially making the queues longer. At the end, the script generates a report of the day\'s activities and the queues that formed during the simulation.',
      pt: 'Script de Simulação de Caixa Eletrônico (ATM): Este projeto foi desenvolvido para a disciplina de Estruturas de Dados com o objetivo de simular uma agência bancária para estudar filas e pilhas nas estruturas de dados. O script foi escrito em Python e gera uma simulação de um caixa eletrônico. Ele utiliza valores aleatórios para gerar clientes em diferentes momentos, criando filas. O usuário pode ajustar a porcentagem de clientes que aparecem, potencialmente tornando as filas mais longas. Ao final, o script gera um relatório das atividades do dia e das filas que se formaram durante a simulação.',
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
      en: 'Movie and Series Management Application: This was my Final Paper (Computer Science Course Completion Work), a comprehensive and challenging project to develop. We worked in a team of 3 frontend developers, 2 backend developers. After much deliberation, we decided to build a website focused on managing movies, series, and other digital media, with the aim of allowing users to evaluate and track their media preferences. The system is designed to help users remember what they liked and easily search through their collection.\nFor backend services, we used Firebase to handle authentication and the database, which allowed us to concentrate on adding accessibility features, such as keyboard listeners, contrasting colors, and a responsive layout. This project was inspired by MyAnimeList, a platform where users can save reviews and track their media consumption. Through the Javi platform, users can evaluate films and series, making it easier to revisit their thoughts in the future.',
      pt: 'Aplicativo de Gestão de Filmes e Séries: Este foi o meu TCC (Trabalho de Conclusão de Curso) de Ciência da Computação, um projeto abrangente e desafiador de desenvolver. Trabalhamos em uma equipe composta por 3 desenvolvedores frontend, 1 desenvolvedor backend e 1 outro membro da equipe. Após muita deliberação, decidimos construir um site focado no gerenciamento de filmes, séries e outros meios digitais, com o objetivo de permitir que os usuários avaliassem e rastreassem suas preferências de mídia. O sistema foi projetado para ajudar os usuários a lembrarem o que gostaram e a pesquisarem facilmente em sua coleção.\nPara os serviços de backend, utilizamos o Firebase para gerenciar a autenticação e o banco de dados, o que nos permitiu concentrar em adicionar recursos de acessibilidade, como ouvintes de teclado, cores contrastantes e um layout responsivo. Este projeto foi inspirado no MyAnimeList, uma plataforma onde os usuários podem salvar resenhas e rastrear seu consumo de mídia. Através da plataforma Javi, os usuários podem avaliar filmes e séries, facilitando revisitar suas opiniões no futuro.',
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
      en: 'Data Structures Repository: This repository contains methods and algorithms that simulate the concepts learned in Data Structures classes, focusing on ordering and sets. Each exercise is accompanied by its corresponding problem statement and solution. The repository includes: 1. Infix to Postfix Conversion Algorithm: This algorithm transforms a mathematical equation from infix to postfix form. More information. \n2. Infix Equation Solver: An algorithm to solve mathematical equations in infix form. \n3. Recursion-based Exponentiation: This algorithm performs exponentiation using recursion. \n4. Tower of Hanoi: A solution to the Tower of Hanoi puzzle. \n5. Sorting Algorithms Collection: A collection of five sorting algorithms: - Bubble Sort - Selection Sort - Insertion Sort - Quick Sort - Comb Sort \nThis repository is a useful resource to understand and implement basic data structures and algorithms.',
      pt: 'Repositório de Estruturas de Dados: Este repositório contém métodos e algoritmos que simulam os conceitos aprendidos nas aulas de Estruturas de Dados, com foco em ordenação e conjuntos. Cada exercício é acompanhado pela sua respectiva descrição do problema e solução. O repositório inclui: 1. Algoritmo de Conversão de Infixo para Pós-fixo: Este algoritmo transforma uma equação matemática da forma infixa para pós-fixa. Mais informações. \n2. Solver de Equações Infixas: Algoritmo para resolver equações matemáticas na forma infixa. \n3. Exponentiação com Recursão: Algoritmo que realiza exponenciação utilizando recursão. \n4. Torre de Hanoi: Solução para o quebra-cabeça Torre de Hanoi. \n5. Coleção de Algoritmos de Ordenação: Uma coleção de cinco algoritmos de ordenação: - Bubble Sort - Selection Sort - Insertion Sort - Quick Sort - Comb Sort \nEste repositório é um recurso útil para entender e implementar estruturas de dados e algoritmos básicos.',
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
      en: 'Geometric Transformations Project: Project that demonstrates the possible modifications in a geometric shape learned in geometry and computer graphics classes. \nIntroduction: This was a project developed during Computer Graphics classes to demonstrate possible geometric transformations. \nAbout: Within the project, it is possible to perform all geometric operations of rotation, translation X and Y, scaling X and Y, shearing X and Y, and finally changing the number of vertices of the ellipse.',
      pt: 'Geometric Transformations Project: Projeto que demonstra as possíveis modificações em uma forma geométrica aprendidas nas aulas de geometria e computação gráfica. \nIntrodução: Este foi um projeto desenvolvido durante as aulas de Computação Gráfica para demonstrar as possíveis transformações geométricas. \nSobre: Dentro do projeto, é possível realizar todas as operações geométricas de rotação, translação X e Y, escala X e Y, cisalhamento X e Y e, por fim, a alteração do número de vértices da elipse.',
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
      en: 'Image Thresholding Project: Project that contains several methods to test image thresholding. \nIntroduction: This project was done during the image processing class. It is a Python script that performs image thresholding. \nAbout: Thresholding is transforming the image into binary. An image is made up of a set of color values, it can be RGB for example, that is, if we transform these values into 0 or the maximum 255, we can have an image with only black pixels (255,255,255) or white pixels (0,0,0), the idea of the project is to create an algorithm to know how to differentiate when to turn the pixel into white or black. It may seem simple, but to generate the cutoff value, there is a lot of math involved.',
      pt: 'Image Thresholding Project: Projeto que contém vários métodos para testar limiarização de imagens. \nIntrodução: Este projeto foi feito durante a aula de processamento de imagens. É um script em Python que realiza a limiarização de imagens. \nSobre: Limiarização é transformar a imagem em binária. Uma imagem é composta por um conjunto de valores de cor, podendo ser RGB, por exemplo, ou seja, se transformarmos esses valores em 0 ou o valor máximo 255, podemos ter uma imagem com apenas pixels pretos (255,255,255) ou pixels brancos (0,0,0), a ideia do projeto é criar um algoritmo para saber como diferenciar quando o pixel deve se tornar branco ou preto. Pode parecer simples, mas para gerar o valor de corte, há muita matemática envolvida.',
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
      en: 'Lights Out Game: Lights Out is a game that needs to turn off all the lights in a matrix, but every time you press a light to turn it off, the adjacent ones light up. \nIntroduction: This project was done in artificial intelligence class and simulates state space search, a very simple and rudimentary method to find the answer you need, which is basically asking the machine to do all the possibilities until it finds the answer you need. \nThe project consists of a system that solves the game Light\'s Out. There is an array of numbers (0-1) or boolean values (true, false) in which when trying to turn off one (clicking on it, changing its value), the adjacent values of that number will also change value, the objective of the game is to turn off all numbers in the matrix.',
      pt: 'Lights Out Game: Lights Out é um jogo em que é necessário apagar todas as luzes em uma matriz, mas toda vez que você aperta uma luz para apagá-la, as luzes adjacentes se acendem. \nIntrodução: Este projeto foi feito na aula de inteligência artificial e simula a busca em espaço de estados, um método muito simples e rudimentar para encontrar a resposta que você precisa, que basicamente pede à máquina para testar todas as possibilidades até encontrar a solução desejada. \nSobre: O projeto consiste em um sistema que resolve o jogo Lights Out. Há um array de números (0-1) ou valores booleanos (true, false), no qual, ao tentar desligar um (clicando nele, alterando seu valor), os valores adjacentes a esse número também terão seus valores alterados. O objetivo do jogo é desligar todos os números na matriz.',
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
      en: 'This project focuses on developing an algorithm in Python for solving linear systems of equations, created as part of a Numerical Calculus class. The primary goal was to design a method that can efficiently solve systems of any size while maintaining accuracy and computational efficiency.\nA key feature of the algorithm is its scalability, allowing it to solve linear systems of any size, from small to large-scale problems. The project also emphasizes numerical stability to ensure reliable results, even for challenging, ill-conditioned systems. By optimizing the implementation, the algorithm balances performance with accuracy, providing an effective tool for solving real-world linear system problems.\nThroughout the development, challenges included ensuring stability with near-singular matrices and improving the algorithm\'s efficiency. Ultimately, the project successfully created a Python-based solution for linear systems that can be applied to various fields such as numerical analysis, engineering, and data science.',
      pt: 'Este projeto foca no desenvolvimento de um algoritmo em Python para resolver sistemas lineares de equações, criado como parte de uma aula de Cálculo Numérico. O objetivo principal foi projetar um método que pudesse resolver sistemas de qualquer tamanho de forma eficiente, mantendo a precisão e a eficiência computacional.\nUma característica chave do algoritmo é sua escalabilidade, permitindo que ele resolva sistemas lineares de qualquer tamanho, desde problemas pequenos até de grande escala. O projeto também enfatiza a estabilidade numérica para garantir resultados confiáveis, mesmo para sistemas desafiadores e mal condicionados. Ao otimizar a implementação, o algoritmo equilibra desempenho com precisão, fornecendo uma ferramenta eficaz para resolver problemas reais de sistemas lineares.\nAo longo do desenvolvimento, os desafios incluíram garantir a estabilidade com matrizes quase singulares e melhorar a eficiência do algoritmo. No final, o projeto criou com sucesso uma solução em Python para sistemas lineares que pode ser aplicada em diversos campos, como análise numérica, engenharia e ciência de dados.',
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
