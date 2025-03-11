import { IProject, IType } from '@/@types'
import { OWNER_CONFIGS } from '../owner.config'
import { PROJECTS_TYPES } from './projectsType'

const PROJECT_TYPE: IType = PROJECTS_TYPES['coding-week']

export const CODING_WEEK_PROJECTS: IProject[] = [
  {
    id: 'alura-animal-quiz',
    type: PROJECT_TYPE,
    tags: ['react', 'nextjs', 'html', 'css', 'javascript'],
    date: '2021-01-25T10:00:00.000Z',
    title: {
      en: 'Animal Quiz',
      pt: 'Animal Quiz',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/alura/alura-quiz`,
    figma: '',
    site: 'https://alura-quiz-ofelipescherer.vercel.app',

    description: {
      en: 'Project for a quiz about animals developed during the intensive week react 2nd Edition Next.js prepared by the Alura team',
      pt: 'Projeto de um quiz sobre animais desenvolvido na semana intensiva react 2ªEdição Next.js elaborada pela equipe da Alura',
    },
    images: ['overview.gif', 'thumb.webp'],
    text: {
      en: '<h2>Introduction</h2><p>The Project was developed in January 2021 in the intensive week react 2nd Edition Next.js prepared by the Alura team.</p><p>The intensive weeks help a lot in improving skills of programming, as it is a whole week of code for 2-3 hours a day. This helps a lot to stick and more importantly, as it\'s a simple, one-week project, it\'s usually easy to finish and that\'s why we get that feeling of reward for finishing a project, often in the schedule, we end up leaving projects unfinished.</p ><p>It was a great experience, because despite being a relatively simple project, at that time, I still didn\'t have many skills to create react apps. Furthermore, it was in this project that I discovered <strong>Next JS</strong>, an incredible framework that greatly improves the frontend development experience.</p><p>Another thing I learned was to use JSONs in React, as As I said previously, at that time I wasn\'t yet familiar with the language, and learning about JSONs is essential for any programmer in any language.</p><h2>About</h2><p>Alura Quiz is a project a quiz. The teachers left our choice of what the quiz would be, and at that time, my family had just adopted a kitten, Luna, so I decided to do it about animals. (Luna is not the cat in the project photo lol).</p><img src="https://user-images.githubusercontent.com/62115215/236096010-d82ee517-47df-4a84-84d4-6d08026a34f4.png " alt="Photo of my kitten Luna"></img><p>The quiz consists of general questions about animals, a gif for each question with only one correct answer and a point count.</p><p >On the project\'s home screen, we also have 3 quizzes from other people who participated in the intensive week and which were projects that I found interesting.</p>',
      pt: '<h2>Introdução</h2><p>O Projeto foi desenvolvido em Janeiro de 2021 na semana intensiva react 2ªEdição Next.js elaborada pela equipe da Alura.</p><p>As semanas intensivas ajudam muito em melhorar as habilidades de programação, pois são uma semana inteira de código por 2-3 horas por dia. Isso ajuda muito a fixar e mais importante, como é um projeto simples, de uma semana, geralmente é fácil de terminar e por isso temos aquela sensação de recompensa por terminar um projeto, muitas vezes na programação, acabamos deixando projeto inacabados.</p><p>Foi uma ótima experiência, pois apesar de ser um projeto relativamente simples, naquela época, ainda não tinha tantas habilidades para criar apps react. Além disso foi nesse projeto que conheci o <strong>Next JS</strong>, um framework incrível que melhora e muito a experiência do desenvolvimento frontend.</p><p>Outra coisa que aprendi, foi usar JSONs em React, pois como falei anteriormente, nessa época ainda não tinha tanta familiaridade com a linguagem, e aprender sobre JSONs é algo essencial para qualquer programador em qualquer linguagem.</p><h2>Sobre</h2><p>Alura Quiz é um projeto de um quiz. Os professores deixaram a nossa escolha do que seria o quiz, e naquela época, minha familia tinha acabado de adotar uma gatinha, a Luna,por isso decidi fazer sobre animais. (A Luna não é o gato da foto do projeto rsrs).</p><img src="https://user-images.githubusercontent.com/62115215/236096010-d82ee517-47df-4a84-84d4-6d08026a34f4.png" alt="Foto da minha gatinha Luna"></img><p>O quiz consiste em perguntas gerais sobre os animais, um gif para cada pergunta com apenas uma resposta correta e uma contagem dos pontos.</p><p>Na tela incial do projeto, também temos 3 quizes de outras pessoas que participaram da semana intesiva e que foram projetos que eu achei interessante.</p>',
    },
  },
  {
    id: 'alura-game-dev',
    type: PROJECT_TYPE,
    tags: ['javascript', 'p5', 'game'],
    date: '2020-06-22T10:00:00.000Z',
    title: {
      en: 'Game Dev',
      pt: 'Game Dev',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/alura/game-dev`,
    figma: '',
    site: '',
    description: {
      en: 'A runner game to test and learn about javascript | First programming project. Project developed during Alura\'s intensive game dev week.',
      pt: 'Um runner game para testar e conhecer o javascript | Primeiro projeto de programação. Projeto desenvolvido durante a semana intensiva de game dev da Alura.',
    },
    images: ['overview.gif'],
    text: {
      en: '<h2>Introduction</h2><p>This was my first programming project posted on github. At that time I was in the first semester of college, however, the only web technologies I had learned were HTML and CSS, I hadn\'t seen anything about Javascript, apart from certain moments when I studied on my own on platforms like Khan Academy and books.</p ><p>On a normal day, I ended up coming across an advertisement from Paulo da Alura, inviting me to participate in Alura\'s Game Dev Intensive Week, in which he and other instructors would present and develop a project from scratch in one week using Javascript with the P5 game development library. In that, I decided to participate and it was very important, as I would learn some basic concepts of javascript that helped me a lot in making the decision to follow this language and also, I learned a little pixel art since the protagonist was made by me.</p ><h2>About</h2><p>Although the P5 library is not used as much for larger projects, this experience opened doors for me to Javascript concepts and even game development that I had no knowledge of until then. As I was still a beginner, many of the methods are very rudimentary and simple</p>',
      pt: '<h2>Introdução</h2><p>Esse foi meu primeiro projeto de programação colocado no github. Naquela época estava no primeiro semestre da faculdade, porém, as únicas tecnologias web que tinha aprendido era HTML e CSS, não tinha visto nada de Javascript, além de certos momentos que estudava por conta em plataformas como o Khan Academy e livros.</p><p>Em um dia normal, acabei me deparando com um anúncio do Paulo da Alura, convidando a participar da Semana Intensiva Game Dev da Alura, em que ele e outros instrutores apresentariam e desenvolveriam um projeto do zero em uma semana usando Javascript com a biblioteca P5 de desenvolvimento de jogos. Naquilo, decidi participar e foi muito importante, pois aprenderia alguns conceitos básicos do javascript que me auxiliaram muito a tomar a decisão de seguir nessa linguagem e também por conta, aprendi um pouco de pixelart já que o protagonista foi feito por mim.</p><h2>Sobre</h2><p>Apesar da biblioteca P5 não ser tão utilizada para projetos maiores, essa experiência me abriu portas para conceitos de Javascript e até mesmo de desenvolvimento de jogos que até então, não tinha conhecimento. Como ainda era iniciante, muito dos métodos são bem rudimentares e simples</p>',
    },
  },
  {
    id: 'dev-superior-fsdelivery-sds2',
    type: PROJECT_TYPE,
    tags: ['html', 'css', 'javascript', 'react', 'react-native', 'java-spring'],
    date: '2021-01-15T10:00:00.000Z',
    title: {
      en: 'FS Delivery',
      pt: 'FS Delivery',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/dev-superior/fsdelivery-sds2`,
    figma: '',
    site: 'https://felipescherer-fsdelivery.netlify.app',
    description: {
      en: 'FS Delivery is a project that brings together web frontend, mobile and backend, a fictitious delivery system. It was developed during the 2nd edition of top dev week.',
      pt: 'FS Delivery é um projeto que reúne frontend web, mobile e backend, um sistema de deliveries fictício. Foi desenvolvido durante a 2ª edição da semana dev superior.',
    },
    images: ['homepage.webp', 'dashboard.webp', 'recipe-getting.webp', 'maps.webp', 'mobile.webp', 'mobile-pedidos.webp', 'mobile-dashboard.webp', 'mobile-checked.webp'],
    text: {
      en: '<h2>Introduction</h2><p>This project was developed during <a href="https://www.youtube.com/devsuperior" target="_blank">Superior Dev\'s Superior Dev 2.0 Week</h2> a>. It was the first project that I had contact with the backend. In it we use the <a href="https://spring.io" target="_blank">Spring</a> framework in Java to build endpoints. In addition, we also had contact with the web and mobile frontend, with <a href="https://react.dev" target="_blank">React</a> and <a target="_blank" href="https: //reactnative.dev">React Native</a>, that is, it was a complete project and ready for production.</p><h2>About</h2><p>The project is a delivery system of meals in which the customer uses the web system to place the order and configures their address and location using <a href="https://leafletjs.com" target="_blank">Leaflet</a>, after which, the restaurant receives the order and manages everything within the app, which will have order information and actions to confirm delivery and view location.</p>',
      pt: '<h2>Introdução</h2><p>Esse projeto foi desenvolvido durante a Semana Dev Superior 2.0 da <a href="https://www.youtube.com/devsuperior" target="_blank">Dev Superior</a>. Foi o primeiro projeto que tive contato com o backend. Nele utilizamos o framework <a href="https://spring.io" target="_blank">Spring</a> em Java para construir endpoints. Além disso, também tivemos contato com frontend web e mobile, com <a href="https://react.dev" target="_blank">React</a> e <a target="_blank" href="https://reactnative.dev">React Native</a>, ou seja, foi um projeto completo e prontinho para produção.</p><h2>Sobre</h2><p>O projeto se trata de um sistema de entrega de refeições em que o cliente utiliza o sistema web para realizar o pedido e configura seu endereço e localização utilizando o <a href="https://leafletjs.com" target="_blank">Leaflet</a>, após isso, o restaurante recebe o pedido e gerencia tudo dentro do app que terá informações do pedido e ações para confirmar entrega e ver localização.</p>',
    },
  },
  {
    id: 'rocketseat-nlw-04',
    type: PROJECT_TYPE,
    tags: ['html', 'css', 'javascript', 'react', 'nextjs'],
    date: '2021-02-15T10:00:00.000Z',
    title: {
      en: 'Move it',
      pt: 'Move it',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-04-move-it`,
    figma: '',
    site: 'https://moveit-felipescherer.vercel.app',
    description: {
      en: 'An RPG style application following the pomodoro methodology to remind you to carry out small quality of life exercises. Project developed during the 4th edition of Rocketseat\'s NLW',
      pt: 'Uma aplicação em estilo RPG seguindo a metodologia pomodoro para relembrar de realizar pequenos exercícios de qualidade de vida. Projeto desenvolvido durante a 4ª edição do NLW da Rocketseat',
    },
    images: ['homepage.webp', 'level.webp', 'leve-up.webp', 'profile.webp', 'challenge.webp', 'desafio.webp', 'dark-mode-btn.webp', 'dark-mode.webp'],
    text: {
      en: '<h2>Introduction</h2><p>This project was really cool to do, it\'s basically frontend, however, at that time I already had a good theoretical basis of what it was like to program websites for the web, in addition to still being on vacation from service and college, so I managed to make the most of this week by studying more complex subjects, such as contexts in React.</p><h2>About</h2><p>Move it is an application developed during NLW 04 (Next Level 04) in which it follows the pomodoro study/work methodology, notifying the user every 30 minutes to perform a simple exercise. Its interface follows an RPG style, in which each completed exercise gives you points that can make you level up. How far can you get?</p>',
      pt: '<h2>Introdução</h2><p>Esse projeto foi muito legal de fazer, é basicamente frontend, porém, nessa época eu já tinha uma boa base teorica de como era programar sites para web, além de ainda estar de férias do serviço e da faculdade, por isso consegui aproveitar bastante essa semana estudando assuntos mais complexos como por exemplos contextos em React.</p><h2>Sobre</h2><p>Move it é uma aplicação desenvolvida durante a NLW 04 (Next Level 04) em que segue a metodologia pomodoro de estudo/trabalho, notificando o usuário de 30 em 30 minutos para realizar algum simples exercício. Sua interface foi seguindo um estilo de RPG, em que cada exercício concluído te da pontos que podem fazer você subir de level. Até qual você consegue chegar?</p>',
    },
  },
  {
    id: 'rocketseat-nlw-05',
    type: PROJECT_TYPE,
    tags: ['html', 'css', 'javascript', 'react', 'react-native'],
    date: '2021-02-15T10:00:00.000Z',
    title: {
      en: 'Plant Manager',
      pt: 'Plant Manager',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-05-plant-manager`,
    figma: '',
    site: '',
    description: {
      en: 'Mobile application to improve the feeling of reward for completing a task. It simulates a game in which you gain experience by completing a task and your plant symbolizes this. Developed during Rockeseat\'s NLW 05',
      pt: 'Aplicativo mobile para melhorar o sentimento de recomensa a terminar alguma tarefa. Simula um jogo em que você ganha experiência ao terminar uma tarefa e sua plantinha simboliza isso. Desenvolvido durante a NLW 05 da Rockeseat',
    },
    images: ['thumb.webp'],
    text: {
      en: '<h2>Introduction</h2><p>This was my first mobile project done in React Native at NLW 05 (Next level Week 5). The experience was very good mainly because I learned a lot about how to create and execute a mobile project, despite not having put it in any store, both the idea and the execution of it were really cool and I intend to make a 2.0 version of this project someday and then put it up in some application store.</p><h2>About</h2><p>The project, as the name says, is a plant manager. In it, a plant is registered and this way we can see how often we need to water it, leave it in the sun and other useful information on how to care for it. To make the project more interesting, it was done in a game style, in which each time you take care of the plant, you receive a little experience that serves to level up, thus giving you more motivation to take care of your plants.</p >',
      pt: '<h2>Introdução</h2><p>Esse foi meu primeiro projeto mobile feito em React Native na NLW 05 (Next level Week 5). A experiência foi muito boa principalmente porque aprendi muito como criar e executar um projeto mobile, apesar de não ter colocado em nenhuma loja, tanto a ideia quanto a execução dele foi muito legal e pretendo fazer algum dia uma versão 2.0 desse projeto e dai sim colocar em alguma loja de aplicativo.</p><h2>Sobre</h2><p>O projeto como o nome diz, é um gerenciador de plantas. Nele, é cadastrado uma planta e assim conseguimos ver de quanto em quanto tempo temos que regá-la, deixar no sol e outras informações úteis de como cuidá-la. Para deixar o projeto mais interessante, foi feito com estilo de jogo, em que cada vez cuida-da a planta, é recebido um pouco de experiência que serve para subir de nível, assim dando mais motivação para cuidar de suas plantinhas.</p>',
    },
  },
  {
    id: 'rocketseat-nlw-06',
    type: PROJECT_TYPE,
    tags: ['html', 'css', 'javascript', 'react', 'nextjs', 'firebase'],
    date: '2021-06-26T10:00:00.000Z',
    title: {
      en: 'Let me Ask',
      pt: 'Let me Ask',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-06-let-me-ask`,
    figma: '',
    site: 'https://letmeask-aulas-45172.web.app',
    description: {
      en: 'Application that simulates a live chat, but focused on questions. Developed during Rocketseat\'s NLW 06',
      pt: 'Aplicação que simula um chat de live, porém focado em perguntas. Desenvolvido durante a NLW 06 da Rocketseat',
    },
    images: ['homepage.webp', 'room-id.webp', 'comment.webp', 'saved-comment.webp'],
    text: {
      en: '<h2>Introduction</h2><p>Project built in NLW 06 or Next Level Week 06. Its development was very interesting, as for the first time I used the Firebase backend services tool, specifically using the login/registration function user. This opened several doors for me, because I loved Firebase after that and I use it in almost all the projects I need to do with simple authentication or a simple database (Firestore).</p><h2>About</h2> <p>The project is a platform to manage live stream chat. In it, the Streamer creates a room where his viewers can send messages and vote on the ones they want the streamer to see, so this helps in the case of a teaching stream, as it is easier for the streamer to see the question that the majority has, because of likes and votes on those messages.</p>',
      pt: '<h2>Introdução</h2><p>Projeto construído na NLW 06 ou Next Level Week 06. Seu desenvolvimento foi muito interessante, pois pela primeira vez usei a ferramenta de serviços backend Firebase, utilizando especificamente a função de login/cadastro de usuário. Isso abriu diversas portas para mim, porque amei o Firebase depois disso e utilizo ele em quase todos os projetos que preciso fazer com uma simples autentificação ou algum simples banco de dados (Firestore).</p><h2>Sobre</h2><p>O projeto se trata de uma plataforma para gerenciar o chat de uma live stream. Nele o Streamer cria uma sala onde os seus espectadores conseguem mandar mensagens e votar nas que desejam que o streamer veja, então isso auxilia em caso de stream de ensino, pois é mais fácil de o streamer ver a pergunta que a maioria tem, por conta das curtidas e votos naquelas mensagens.</p>',
    },
  },
  {
    id: 'rocketseat-nlw-setup-habits',
    type: PROJECT_TYPE,
    tags: ['html', 'css', 'javascript', 'react', 'backend', 'fast-api'],
    date: '2023-01-20T10:00:00.000Z',
    title: {
      en: 'Habbits',
      pt: 'Habbits',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-setup-habits`,
    figma: '',
    site: 'https://nlw-setup-habits-dun.vercel.app',
    description: {
      en: 'Application for managing and monitoring habits. Developed during Rocketseat\'s NLW Setup.',
      pt: 'Aplicação para gerenciamento e monitoramento de hábitos. Desenvolvido durante a NLW Setup da Rocketseat.',
    },
    images: ['thumb.webp', 'habit.webp'],
    text: {
      en: '<h2>Introduction</h2><p>This application was developed during NLW Setup (Next Level Week). Several programming concepts were learned throughout the flow from the backend to the web and mobile frontend. All using best practices for each type of project. The web and mobile frontend are identical and only differ from the platforms that will be used. In the backend I believe that was where I learned the most, as I didn\'t have much experience in this area. It was very good for my programming learning.</p><h2>About</h2><p>The project is an application where the user can register habits and manage whether they are completing them or not. On the platform, we can set a minimum frequency and an order to complete them.</p>',
      pt: '<h2>Introdução</h2><p>Essa aplicação foi desenvolvida durante a NLW Setup (Next Level Week). Foi aprendido diversos conceitos de programação em todo o fluxo desde o backend até o frontend web e mobile. Todos utilizando as boas práticas de cada tipo de projeto. O frontend web e mobile são identicos e somente se diferenciam das plataformas que serão utilizadas. No backend acredito que foi onde mais aprendi, pois não tinha muita experiência nessa área. Foi muito bom para meu aprendizado de programação.</p><h2>Sobre</h2><p>O projeto se trata de uma aplicação que o usuário pode cadastrar hábitos e gerenciar se está completando eles ou não. Na plataforma, podemos colocar uma frequência mínima e uma ordem para finalizá-los.</p>',
    },
  },
]
