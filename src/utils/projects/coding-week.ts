import { IProject } from '@/types'
import { OWNER_CONFIGS } from '../owner.config'

const PROJECT_TYPE = 'coding-week'

export const original_projects: IProject[] = [
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
    thumb: 'https://user-images.githubusercontent.com/62115215/234919046-1496d5c3-44a3-4c0e-913d-97559b0cae9a.png',
    description: {
      pt: 'Projeto de um quiz sobre animais desenvolvido na semana intensiva react 2ªEdição Next.js elaborada pela equipe da Alura',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/219959310-90e2fbeb-ee51-45fd-96f6-390b0588a457.gif',
      'https://user-images.githubusercontent.com/62115215/219958670-485e5106-d4c8-44b2-a60f-699c944db648.png',
    ],
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
    thumb: 'https://user-images.githubusercontent.com/62115215/235013507-dc9f3c2c-56ec-4dd6-a5a5-754a67767a4f.png',
    description: {
      pt: 'Um runner game para testar e conhecer o javascript | Primeiro projeto de programação. Projeto desenvolvido durante a semana intensiva de game dev da Alura.',
    },
    images: ['https://user-images.githubusercontent.com/62115215/219967687-18ce6ec5-966e-4180-a5d4-c156bdaab702.gif'],
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
    thumb: 'https://user-images.githubusercontent.com/62115215/235317699-84cade79-2737-477d-90f1-cc82ae0bc6b1.png',
    description: {
      pt: 'FS Delivery é um projeto que reúne frontend web, mobile e backend, um sistema de deliveries fictício. Foi desenvolvido durante a 2ª edição da semana dev superior.',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/110243621-f37f4600-7f39-11eb-8099-105402b47d5a.png',
      'https://user-images.githubusercontent.com/62115215/110243714-4953ee00-7f3a-11eb-99a2-b27830a560ec.png',
      'https://user-images.githubusercontent.com/62115215/110243771-8f10b680-7f3a-11eb-8d89-46cb39a62143.png',
      'https://user-images.githubusercontent.com/62115215/110243769-8ddf8980-7f3a-11eb-82ce-1544742513dc.png',
      'https://user-images.githubusercontent.com/62115215/110244092-eebb9180-7f3b-11eb-840a-8ad6ada1c5ef.jpeg',
      'https://user-images.githubusercontent.com/62115215/110244095-ef542800-7f3b-11eb-9598-433d36216a38.jpeg',
      'https://user-images.githubusercontent.com/62115215/110244094-eebb9180-7f3b-11eb-9f06-7e1c2a558d92.jpeg',
      'https://user-images.githubusercontent.com/62115215/110244091-ee22fb00-7f3b-11eb-976e-d8d36db50d89.jpeg',
    ],
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
    thumb: 'https://user-images.githubusercontent.com/62115215/235317998-3f528832-3d05-4bdc-8a0e-15caeb6d0875.png',
    description: {
      pt: 'Uma aplicação em estilo RPG seguindo a metodologia pomodoro para relembrar de realizar pequenos exercícios de qualidade de vida. Projeto desenvolvido durante a 4ª edição do NLW da Rocketseat',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/109425876-481a4280-79c9-11eb-96d0-c76415e3e69a.png',
      'https://user-images.githubusercontent.com/62115215/109426075-5321a280-79ca-11eb-8381-17fe74998252.png',
      'https://user-images.githubusercontent.com/62115215/109426077-53ba3900-79ca-11eb-90c2-6a4435301556.png',
      'https://user-images.githubusercontent.com/62115215/109426214-3043be00-79cb-11eb-8e37-2229f25c312f.png',
      'https://user-images.githubusercontent.com/62115215/109426236-4e112300-79cb-11eb-9dac-4426f0a2e37f.png',
      'https://user-images.githubusercontent.com/62115215/109426369-31291f80-79cc-11eb-813a-628db1c114c5.png',
      'https://user-images.githubusercontent.com/62115215/109426500-ba405680-79cc-11eb-9b3f-11cc02d3b005.png',
      'https://user-images.githubusercontent.com/62115215/109426572-2327ce80-79cd-11eb-9a0f-702970d511ce.png',
    ],
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
    thumb: 'https://user-images.githubusercontent.com/62115215/219973048-fc247186-3c8e-4ed6-8592-5d136b57d959.png',
    description: {
      pt: 'Aplicativo mobile para melhorar o sentimento de recomensa a terminar alguma tarefa. Simula um jogo em que você ganha experiência ao terminar uma tarefa e sua plantinha simboliza isso. Desenvolvido durante a NLW 05 da Rockeseat',
    },
    images: ['https://user-images.githubusercontent.com/62115215/219973048-fc247186-3c8e-4ed6-8592-5d136b57d959.png'],
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
    thumb: 'https://user-images.githubusercontent.com/62115215/235321997-4aee7557-ba24-462d-99cd-b0b63fdd920c.png',
    description: {
      pt: 'Aplicação que simula um chat de live, porém focado em perguntas. Desenvolvido durante a NLW 06 da Rocketseat',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/219976815-47640513-1c8c-4df1-b0fb-69a38212e4dc.png',
      'https://user-images.githubusercontent.com/62115215/219977167-3ef523d4-20e5-42ce-9328-afe0c0d6babd.png',
      'https://user-images.githubusercontent.com/62115215/219977213-803b560e-e959-4b59-a95f-45ef966b40e7.png',
      'https://user-images.githubusercontent.com/62115215/219977261-e13586f2-bb16-40ae-b2d2-7479ecfd15d8.png',
    ],
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
    thumb: 'https://user-images.githubusercontent.com/62115215/219977459-5a8388bf-13b3-4010-950d-95b11d5332bd.png',
    description: {
      pt: 'Aplicação para gereciamento e monitoramento de hábitos. Desenvolvido durante a NLW Setup da Rocketseat.',
    },
    images: ['https://user-images.githubusercontent.com/62115215/219977459-5a8388bf-13b3-4010-950d-95b11d5332bd.png'],
    text: {
      pt: '<h2>Introdução</h2><p>Essa aplicação foi desenvolvida durante a NLW Setup (Next Level Week). Foi aprendido diversos conceitos de programação em todo o fluxo desde o backend até o frontend web e mobile. Todos utilizando as boas práticas de cada tipo de projeto. O frontend web e mobile são identicos e somente se diferenciam das plataformas que serão utilizadas. No backend acredito que foi onde mais aprendi, pois não tinha muita experiência nessa área. Foi muito bom para meu aprendizado de programação.</p><h2>Sobre</h2><p>O projeto se trata de uma aplicação que o usuário pode cadastrar hábitos e gerenciar se está completando eles ou não. Na plataforma, podemos colocar uma frequência mínima e uma ordem para finalizá-los.</p>',
    },
  },
]
