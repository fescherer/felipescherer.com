import { IProject } from '@/types'
import { OWNER_CONFIGS } from '../owner.config'

const PROJECT_TYPE = 'coding-week'

export const CODING_WEEK_PROJECTS: IProject[] = [
  {
    id: 'alura-animal-quiz',
    type: PROJECT_TYPE,
    tags: ['react', 'nextjs', 'html', 'css', 'javascript'],
    date: '2021-01-25T10:00:00.000Z',
    title: {
      pt: 'Animal Quiz',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/alura/alura-quiz`,
    figma: '',
    site: 'https://alura-quiz-ofelipescherer.vercel.app',

    description: {
      pt: 'Projeto de um quiz sobre animais desenvolvido na semana intensiva react 2ªEdição Next.js elaborada pela equipe da Alura',
    },
    images: ['overview.gif', 'thumb.png'],
    text: {
      pt: '<h2>Introdução</h2><p>O Projeto foi desenvolvido em Janeiro de 2021 na semana intensiva react 2ªEdição Next.js elaborada pela equipe da Alura.</p><p>As semanas intensivas ajudam muito em melhorar as habilidades de programação, pois são uma semana inteira de código por 2-3 horas por dia. Isso ajuda muito a fixar e mais importante, como é um projeto simples, de uma semana, geralmente é fácil de terminar e por isso temos aquela sensação de recompensa por terminar um projeto, muitas vezes na programação, acabamos deixando projeto inacabados.</p><p>Foi uma ótima experiência, pois apesar de ser um projeto relativamente simples, naquela época, ainda não tinha tantas habilidades para criar apps react. Além disso foi nesse projeto que conheci o <strong>Next JS</strong>, um framework incrível que melhora e muito a experiência do desenvolvimento frontend.</p><p>Outra coisa que aprendi, foi usar JSONs em React, pois como falei anteriormente, nessa época ainda não tinha tanta familiaridade com a linguagem, e aprender sobre JSONs é algo essencial para qualquer programador em qualquer linguagem.</p><h2>Sobre</h2><p>Alura Quiz é um projeto de um quiz. Os professores deixaram a nossa escolha do que seria o quiz, e naquela época, minha familia tinha acabado de adotar uma gatinha, a Luna,por isso decidi fazer sobre animais. (A Luna não é o gato da foto do projeto rsrs).</p><img src="https://user-images.githubusercontent.com/62115215/236096010-d82ee517-47df-4a84-84d4-6d08026a34f4.png" alt="Foto da minha gatinha Luna"></img><p>O quiz consiste em perguntas gerais sobre os animais, um gif para cada pergunta com apenas uma resposta correta e uma contagem dos pontos.</p><p>Na tela incial do projeto, também temos 3 quizes de outras pessoas que participaram da semana intesiva e que foram projetos que eu achei interessante.</p>',
    },
  },
  {
    id: 'alura-game-dev',
    type: PROJECT_TYPE,
    tags: ['javascript', 'p5', 'game'],
    date: '2020-06-22T10:00:00.000Z',
    title: {
      pt: 'Game Dev',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/alura/game-dev`,
    figma: '',
    site: '',
    description: {
      pt: 'Um runner game para testar e conhecer o javascript | Primeiro projeto de programação. Projeto desenvolvido durante a semana intensiva de game dev da Alura.',
    },
    images: ['overview.gif'],
    text: {
      pt: '<h2>Introdução</h2><p>Esse foi meu primeiro projeto de programação colocado no github. Naquela época estava no primeiro semestre da faculdade, porém, as únicas tecnologias web que tinha aprendido era HTML e CSS, não tinha visto nada de Javascript, além de certos momentos que estudava por conta em plataformas como o Khan Academy e livros.</p><p>Em um dia normal, acabei me deparando com um anúncio do Paulo da Alura, convidando a participar da Semana Intensiva Game Dev da Alura, em que ele e outros instrutores apresentariam e desenvolveriam um projeto do zero em uma semana usando Javascript com a biblioteca P5 de desenvolvimento de jogos. Naquilo, decidi participar e foi muito importante, pois aprenderia alguns conceitos básicos do javascript que me auxiliaram muito a tomar a decisão de seguir nessa linguagem e também por conta, aprendi um pouco de pixelart já que o protagonista foi feito por mim.</p><h2>Sobre</h2><p>Apesar da biblioteca P5 não ser tão utilizada para projetos maiores, essa experiência me abriu portas para conceitos de Javascript e até mesmo de desenvolvimento de jogos que até então, não tinha conhecimento. Como ainda era iniciante, muito dos métodos são bem rudimentares e simples</p>',
    },
  },
  {
    id: 'dev-superior-fsdelivery-sds2',
    type: PROJECT_TYPE,
    tags: ['html', 'css', 'javascript', 'react', 'react-native', 'java-spring'],
    date: '2021-01-15T10:00:00.000Z',
    title: {
      pt: 'FS Delivery',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/dev-superior/fsdelivery-sds2`,
    figma: '',
    site: 'https://felipescherer-fsdelivery.netlify.app',
    description: {
      pt: 'FS Delivery é um projeto que reúne frontend web, mobile e backend, um sistema de deliveries fictício. Foi desenvolvido durante a 2ª edição da semana dev superior.',
    },
    images: ['homepage.png', 'dashboard.png', 'recipe-getting.png', 'maps.png', 'mobile.jpeg', 'mobile-pedidos.jpeg', 'mobile-dashboard.jpeg', 'mobile-checked.jpeg'],
    text: {
      pt: '<h2>Introdução</h2><p>Esse projeto foi desenvolvido durante a Semana Dev Superior 2.0 da <a href="https://www.youtube.com/devsuperior" target="_blank">Dev Superior</a>. Foi o primeiro projeto que tive contato com o backend. Nele utilizamos o framework <a href="https://spring.io" target="_blank">Spring</a> em Java para construir endpoints. Além disso, também tivemos contato com frontend web e mobile, com <a href="https://react.dev" target="_blank">React</a> e <a target="_blank" href="https://reactnative.dev">React Native</a>, ou seja, foi um projeto completo e prontinho para produção.</p><h2>Sobre</h2><p>O projeto se trata de um sistema de entrega de refeições em que o cliente utiliza o sistema web para realizar o pedido e configura seu endereço e localização utilizando o <a href="https://leafletjs.com" target="_blank">Leaflet</a>, após isso, o restaurante recebe o pedido e gerencia tudo dentro do app que terá informações do pedido e ações para confirmar entrega e ver localização.</p>',
    },
  },
  {
    id: 'rocketseat-nlw-04',
    type: PROJECT_TYPE,
    tags: ['html', 'css', 'javascript', 'react', 'nextjs'],
    date: '2021-02-15T10:00:00.000Z',
    title: {
      pt: 'Move it',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-04-move-it`,
    figma: '',
    site: 'https://moveit-felipescherer.vercel.app',
    description: {
      pt: 'Uma aplicação em estilo RPG seguindo a metodologia pomodoro para relembrar de realizar pequenos exercícios de qualidade de vida. Projeto desenvolvido durante a 4ª edição do NLW da Rocketseat',
    },
    images: ['homepage.png', 'level.png', 'leve-up.png', 'profile.png', 'challenge.png', 'desafio.png', 'dark-mode-btn.png', 'dark-mode.png'],
    text: {
      pt: '<h2>Introdução</h2><p>Esse projeto foi muito legal de fazer, é basicamente frontend, porém, nessa época eu já tinha uma boa base teorica de como era programar sites para web, além de ainda estar de férias do serviço e da faculdade, por isso consegui aproveitar bastante essa semana estudando assuntos mais complexos como por exemplos contextos em React.</p><h2>Sobre</h2><p>Move it é uma aplicação desenvolvida durante a NLW 04 (Next Level 04) em que segue a metodologia pomodoro de estudo/trabalho, notificando o usuário de 30 em 30 minutos para realizar algum simples exercício. Sua interface foi seguindo um estilo de RPG, em que cada exercício concluído te da pontos que podem fazer você subir de level. Até qual você consegue chegar?</p>',
    },
  },
  {
    id: 'rocketseat-nlw-05',
    type: PROJECT_TYPE,
    tags: ['html', 'css', 'javascript', 'react', 'react-native'],
    date: '2021-02-15T10:00:00.000Z',
    title: {
      pt: 'Plant Manager',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-05-plant-manager`,
    figma: '',
    site: '',
    description: {
      pt: 'Aplicativo mobile para melhorar o sentimento de recomensa a terminar alguma tarefa. Simula um jogo em que você ganha experiência ao terminar uma tarefa e sua plantinha simboliza isso. Desenvolvido durante a NLW 05 da Rockeseat',
    },
    images: ['thumb.png'],
    text: {
      pt: '<h2>Introdução</h2><p>Esse foi meu primeiro projeto mobile feito em React Native na NLW 05 (Next level Week 5). A experiência foi muito boa principalmente porque aprendi muito como criar e executar um projeto mobile, apesar de não ter colocado em nenhuma loja, tanto a ideia quanto a execução dele foi muito legal e pretendo fazer algum dia uma versão 2.0 desse projeto e dai sim colocar em alguma loja de aplicativo.</p><h2>Sobre</h2><p>O projeto como o nome diz, é um gerenciador de plantas. Nele, é cadastrado uma planta e assim conseguimos ver de quanto em quanto tempo temos que regá-la, deixar no sol e outras informações úteis de como cuidá-la. Para deixar o projeto mais interessante, foi feito com estilo de jogo, em que cada vez cuida-da a planta, é recebido um pouco de experiência que serve para subir de nível, assim dando mais motivação para cuidar de suas plantinhas.</p>',
    },
  },
  {
    id: 'rocketseat-nlw-06',
    type: PROJECT_TYPE,
    tags: ['html', 'css', 'javascript', 'react', 'nextjs', 'firebase'],
    date: '2021-06-26T10:00:00.000Z',
    title: {
      pt: 'Let me Ask',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-06-let-me-ask`,
    figma: '',
    site: 'https://letmeask-aulas-45172.web.app',
    description: {
      pt: 'Aplicação que simula um chat de live, porém focado em perguntas. Desenvolvido durante a NLW 06 da Rocketseat',
    },
    images: ['homepage.png', 'room-id.png', 'comment.png', 'saved-comment.png'],
    text: {
      pt: '<h2>Introdução</h2><p>Projeto construído na NLW 06 ou Next Level Week 06. Seu desenvolvimento foi muito interessante, pois pela primeira vez usei a ferramenta de serviços backend Firebase, utilizando especificamente a função de login/cadastro de usuário. Isso abriu diversas portas para mim, porque amei o Firebase depois disso e utilizo ele em quase todos os projetos que preciso fazer com uma simples autentificação ou algum simples banco de dados (Firestore).</p><h2>Sobre</h2><p>O projeto se trata de uma plataforma para gerenciar o chat de uma live stream. Nele o Streamer cria uma sala onde os seus espectadores conseguem mandar mensagens e votar nas que desejam que o streamer veja, então isso auxilia em caso de stream de ensino, pois é mais fácil de o streamer ver a pergunta que a maioria tem, por conta das curtidas e votos naquelas mensagens.</p>',
    },
  },
  {
    id: 'rocketseat-nlw-setup-habits',
    type: PROJECT_TYPE,
    tags: ['html', 'css', 'javascript', 'react', 'backend', 'fast-api'],
    date: '2023-01-20T10:00:00.000Z',
    title: {
      pt: 'Habbits',
    },
    github: `${OWNER_CONFIGS.github_profile}/project-studies/tree/main/rocketseat/nlw-setup-habits`,
    figma: '',
    site: 'https://nlw-setup-habits-dun.vercel.app',
    description: {
      pt: 'Aplicação para gereciamento e monitoramento de hábitos. Desenvolvido durante a NLW Setup da Rocketseat.',
    },
    images: ['thumb.png', 'habit.png'],
    text: {
      pt: '<h2>Introdução</h2><p>Essa aplicação foi desenvolvida durante a NLW Setup (Next Level Week). Foi aprendido diversos conceitos de programação em todo o fluxo desde o backend até o frontend web e mobile. Todos utilizando as boas práticas de cada tipo de projeto. O frontend web e mobile são identicos e somente se diferenciam das plataformas que serão utilizadas. No backend acredito que foi onde mais aprendi, pois não tinha muita experiência nessa área. Foi muito bom para meu aprendizado de programação.</p><h2>Sobre</h2><p>O projeto se trata de uma aplicação que o usuário pode cadastrar hábitos e gerenciar se está completando eles ou não. Na plataforma, podemos colocar uma frequência mínima e uma ordem para finalizá-los.</p>',
    },
  },
]
