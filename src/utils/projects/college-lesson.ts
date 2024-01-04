import { IProject } from '@/types'
import { OWNER_CONFIGS } from '../owner.config'

const PROJECT_TYPE = 'college-lesson'

export const original_projects: IProject[] = [
  {
    id: 'college-algorithm-best-fit',
    type: PROJECT_TYPE,
    tags: ['python', 'algorithm'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      pt: 'Algoritmo Best Fit',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/algorithm-best-fit`,
    figma: '',
    site: '',
    thumb: 'https://user-images.githubusercontent.com/62115215/235323706-c99b6e54-cfb7-4337-a146-158520af5f9e.png',
    description: {
      pt: 'Um algoritmo de demonstração do gerenciamento de memória baseado no Best Fit Algoritm.',
    },
    images: ['https://user-images.githubusercontent.com/62115215/235323706-c99b6e54-cfb7-4337-a146-158520af5f9e.png'],
    text: {
      pt: '<h2>Introdução</h2><p>Best fit foi um trabalho de faculdade feito na aula de sistemas operacionais.</p><h2>Sobre</h2><p>O algoritmo de best fit é relacionado com o gerenciamento de memória em um computador. Basicamente é um algoritmo que diz como os processos serão alocados na memória, ou seja, qual a regra de negócio que será usada para retirar e colocar eles, que é colocar um processo no menor espaço que é grande o suficiente para ele. Mais informações em <a target="_blank" href="https://en.wikipedia.org/wiki/Best-fit_bin_packing">Wiki</a></p><p>No caso esse projeto leva algumas coisas em consideração:</p><ul><li>É uma simulação e não uma implementação pronta para produção, apenas testes;</li><li>A memória será representada por um conjunto de 100 elementos;</li><li>Cada elemento representa o id do processo, com exceção do -1 que significa um espaço vago;</li><li>Cada processo pode ter um valor de peso (tamanho) aleatório;</li><li>O programa cria dois processos novos e excluí um (simbolizando que já foi utilizado);</li><li>A alocação é feita a partir de verificações para encontrar o menor espaço grande o suficiente para aquele processo;</li><li>A simulação para quando a memória fica lotada;</li></ul>',
    },
  },
  {
    id: 'college-aps-1',
    type: PROJECT_TYPE,
    tags: ['html', 'css'],
    date: '2019-03-01T10:00:00.000Z',
    title: {
      pt: 'APS 1 | Save the Green',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-01-desenvolvimento-em-ambiente-web`,
    figma: '',
    site: '',
    thumb: 'https://user-images.githubusercontent.com/62115215/235323828-5e3a77d6-da95-4d0e-8291-4dab2cd37c05.png',
    description: {
      pt: 'Primeiro projeto da faculdade, site para praticar conceitos de css e html.',
    },
    images:
  [
    'https://user-images.githubusercontent.com/62115215/219414481-5e742828-8b76-45ef-8d0a-f98fdfba2aa1.gif',
    'https://user-images.githubusercontent.com/62115215/219412486-cc05d257-6e7a-4c3f-b0c7-9ea58169fbeb.png',
    'https://user-images.githubusercontent.com/62115215/219412526-7d154ee9-a50a-42cc-bc03-d4a1ed9bb78c.png',
    'https://user-images.githubusercontent.com/62115215/219412571-adeed80b-7312-42d7-8168-c9fedda435c3.png',
    'https://user-images.githubusercontent.com/62115215/219412604-9b51845a-e2ff-47ab-b455-6e5385436bb9.png',
    'https://user-images.githubusercontent.com/62115215/219412638-af593bc1-0bd8-41e2-b9d6-012aee99146d.png',
    'https://user-images.githubusercontent.com/62115215/219412678-a7654024-8cef-41e2-a0cd-011ab7daa3a3.png',
    'https://user-images.githubusercontent.com/62115215/219412706-125e60de-96f6-4af6-8afb-de8ad085b0ff.png',
  ],
    text: {
      pt: '<h2>Introdução</h2><p>Esse projeto nem sequer estava no Github até pouco tempo atrás, pois quando fiz, estava tão no começo de minha carreira e ainda nem sabia usar o Git ou o Github.</p><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do primeiro semestre das minhas aulas de Ciência da Computação.</p><p>Por isso é um projeto extremamente simples e bem feio rsrs, mas foi um dos primeiros projetos de programação que fiz, então tenho muito orgulho e pretendo algum dia fazer a versão <em>atualizada</em> para poder comparar o quanto melhorei na área.</p><p>O projeto é super simples, é um site com apenas HTML e CSS.</p><p>Nessa época, apesar de inciante, já estava procurando mais sobre a área e já arriscava alguns códigos javascript, porém, o professor disse que o site era apenas para ter HTML e CSS, por isso lembro que um desafio foi criar o menu usando apenas essas ferramentas.</p><p>No fim, deu certo, o projeto apesar de um pouco feio, funcionava e conseguiu fazer a sua função.</p><h2>Sobre</h2><p>O tema do projeto era algo relacionado ao meio ambiente.</p><p>O projeto se trata de um site em HTML e CSS sobre ONGs ambientais, locais de coleta de lixo em campinas- Eco Pontos.</p>',
    },
  },
  {
    id: 'college-aps-2',
    type: PROJECT_TYPE,
    tags: ['python'],
    date: '2019-10-01T10:00:00.000Z',
    title: {
      pt: 'APS 2 | Eco Pontos',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-02-indroducao-a-programacao-estruturada`,
    figma: '',
    site: '',
    thumb: 'https://user-images.githubusercontent.com/62115215/235324241-1b7a2010-10bb-445a-a7ac-eba85f0746db.png',
    description: {
      pt: 'Projeto que calcula a distância entre um ponto de coordenada na região de Campinas fornecido para o Eco ponto mais próximo.',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/218791504-7e8a3e5d-ad86-40f0-ae2b-780a972c40bf.gif',
      'https://user-images.githubusercontent.com/62115215/218788137-d8993bd7-2f64-4b83-87c7-c7d84612cdb8.png',
    ],
    text: {
      pt: '<h2>Introdução</h2><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do segundo semestre das minhas aulas de Ciência da Computação.</p><p>Naquele semestre, a matéria principal estudada, foi programação estruturada em Python, por isso, o projeto deveria ser feito com essa metodologia e linguagem.</p><p>O projeto é um localizador de Eco Pontos em Campinas feito utilizando o algoritmo de busca de melhor caminho.</p><h2>Sobre</h2><p>O projeto não tem interface gráfica, por isso é feito utilizando apenas o console.</p><p>Digita-se uma localização, e oprograma calcula o melhor trajeto para o eco ponto em Campinas.</p>',
    },
  },
  {
    id: 'college-aps-3',
    type: PROJECT_TYPE,
    tags: ['java'],
    date: '2020-03-01T10:00:00.000Z',
    title: {
      pt: 'APS 3 | Sistema Acadêmico',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-03-programacao-orientada-a-objetos`,
    figma: '',
    site: '',
    thumb: 'https://user-images.githubusercontent.com/62115215/235324273-d17db2cb-7e75-4299-b40d-e79a54c4b179.png',
    description: {
      pt: 'Um sistema para gerencimento de universidade. Inclui gerenciamento de cursos, alunos e notas.',
    },
    images: ['https://user-images.githubusercontent.com/62115215/218890434-f4b99bba-c6eb-4060-8ec7-da68e8868eba.gif'],
    text: {
      pt: '<h2>Introdução</h2><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do terceiro semestre das minhas aulas de Ciência da Computação.</p><p>Naquele semestre, a matéria principal estudada, foi programação orientada a objetos em Java, por isso, o projeto deveria ser feito com essa metodologia e a linguagem poderia ser ou Java ou C#.</p><p>Nesse semestre foi meu primeiro contato com Java, até então estava estudando mais Python, mas tinha um interesse bem grande em Java, principalmente pelo desenvolvimento mobile. Apesar de preferir outras linguagens foi essencial aprender conceitos não só da linguagem, mas da própria computação, como a orientação a objetos.</p><h2>Sobre</h2><p>O projeto é um sistema para cadastramento e gerenciamento de alunos, cursos e notas de uma faculdade, o projeto é todo feito em console, porém inclui diversas opções para realizar ações de busca, atualização, deleção e criação utilizando um arquivo csv simulando algum banco de dados por exemplo.</p>',
    },
  },
  {
    id: 'college-aps-4',
    type: PROJECT_TYPE,
    tags: ['java'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      pt: 'APS 4 | Sistema Bibliotecário',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-04-aplicacao-orientacao-a-objetos`,
    figma: '',
    site: '',
    thumb: 'https://user-images.githubusercontent.com/62115215/235324646-e1397692-cc25-4267-9290-96d91ba993cf.png',
    description: {
      pt: 'Um sistema para gerencimento de bibliotecas. Inclui gerenciamento de livros, autores e editoras.',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/218890436-6570d175-62b3-4cb7-954c-0bec17a653c1.png',
      'https://user-images.githubusercontent.com/62115215/218890438-819cf6c7-f448-4c4d-80ed-4cfe716d1376.png',
      'https://user-images.githubusercontent.com/62115215/218890440-3e16b71c-908c-4bae-8768-3ed842065a23.png',
      'https://user-images.githubusercontent.com/62115215/236687945-028e446a-1067-470d-bd70-0fe11ad1d8f0.png',
    ],
    text: {
      pt: '<h2>Introdução</h2><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do quarto semestre das minhas aulas de Ciência da Computação.</p><p>Naquele semestre, a matéria principal estudada, foi banco de dados, por isso, o projeto deveria ser algo utilizando um banco de dados. a Linguagem poderia ser qualquer uma de banco de dados, mas no caso do nosso grupo foi escolhida o MySQL.</p><p>Foi meu primeiro contato com linguagem de banco de dados, no semestre anterior havia aprendido a modelar um banco de dados, mas foi somente nesse em que aprendi comandos da linguagem. Além disso também foi o primeiro contato com interface gráfica em Java utilizando Swift e AWT, por último também foi aprendido conceito de MVC (Model-View-Controller), um padrão para organizar os arquivos de um projeto com suas respectivas responsabilidades.</p><h2>Sobre</h2><p>Esse é um projeto desenvolvido para gerenciar uma livraria. Nele podemos apagar, alterar, incluir e buscar autores, livros e editoras. Há conexão com um banco de dados desenvolvido em MySQL e interface gráfica utilizando Java Swift e AWT.</p>',
    },
  },
  {
    id: 'college-aps-5',
    type: PROJECT_TYPE,
    tags: ['react', 'javascript', 'html', 'css'],
    date: '2021-03-01T10:00:00.000Z',
    title: {
      pt: 'APS 5 Redes | Chat',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-05-redes-e-computadores`,
    figma: '',
    site: '',
    thumb: 'https://user-images.githubusercontent.com/62115215/235324729-01c5c966-3f11-4d93-8a4d-0ad4d53b87ca.png',
    description: {
      pt: 'Um simulador de chat, um sistema de mensagens usando Socket.io',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/218894971-f7b00788-defe-4276-8f1f-02bc74faa5de.png',
      'https://user-images.githubusercontent.com/62115215/218894972-be520593-0a74-4303-bc22-c30c92321459.png',
      'https://user-images.githubusercontent.com/62115215/218894973-24356c3a-0f85-415c-baef-6799d190d090.png',
      'https://user-images.githubusercontent.com/62115215/218894974-55505798-d2e7-40d5-bbef-b8d69461367e.png',
    ],
    text: {
      pt: '<h2>Introdução</h2><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do quinto semestre das minhas aulas de Ciência da Computação.</p><p>Naquele semestre, a matéria principal estudada, foi redes de computadores, por isso, o projeto deveria ser algo utilizando os conceitos aprendidos nessa aula.</p><p>No fim, o professor deixou a critério dos alunos decidirem o que queriam fazer, mas precisa ser algo usando <em>sockets</em>, que são pontos de redes em que você ao conectar em um, fica <em>ouvindo</em> as respostas dele quando chega, basicamente é uma tecnologia para criar aplicativos que precisam atualizar em tempo real. Por isso o que eu e meu grupo decidimos fazer foi um aplicativo de mensagens, foi desenvolvido em react utilizando o socket.io</p><h2>Sobre</h2><p>Um aplicativo de mensagens desenvovlido em react utilizando socket.io. É bem simples, com um frontend minimalista podendo enviar emojis também na mensagem.</p>',
    },
  },
  {
    id: 'college-aps-6',
    type: PROJECT_TYPE,
    tags: ['linux'],
    date: '2021-10-01T10:00:00.000Z',
    title: {
      pt: 'APS 6 | Sistema de gerenciamento restaurante',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-06-sistemas-operacionais`,
    figma: '',
    site: '',
    thumb: 'https://user-images.githubusercontent.com/62115215/235326317-85bfcceb-64c1-4206-8beb-01df92cce70e.png',
    description: {
      pt: 'Sistema de gerenciamento de um restaurante, backup e relatório de dia e mês.',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/218895463-8f3e54ea-268f-4c6b-90a5-f118070eb61e.png',
      'https://user-images.githubusercontent.com/62115215/218895477-5997cd3a-5579-4df1-83ee-b09ad3ca738d.png',
      'https://user-images.githubusercontent.com/62115215/218895481-f9ad1b7a-163f-4286-9bbd-1cc0f1594993.png',
      'https://user-images.githubusercontent.com/62115215/218895483-0de5eff9-0f3a-4dce-809b-abc3351e112c.png',
    ],
    text: {
      pt: '<h2>Introdução</h2><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do sexto semestre das minhas aulas de Ciência da Computação.</p><p>Naquele semestre, a matéria principal estudada foi sistemas operacionais, por isso, o projeto deveria ser criar uma simulação de como um sistema de backup em Linux funcionaria utilizando 3 ou mais máquinas virtuais, elas deveriam estar conectadas, assim fazendo redundância de backup dos arquivos.</p><h2>Sobre</h2><p>Esse é um projeto desenvolvido para fazer backup de comandas de um restaurante. Nele temos 3 máquinas virtuais (Caixa, Server e Administrador), e eles estão conectados na mesma rede.</p><p>Como é uma simulação, o <em>Caixa</em> tem um script em Python que gera comandas aleatórias em tempos aleatórios entre 12h e 15h (Possível horário de funcionamento do caixa).</p><p>Entre 15h e 15h10, será gerado um backup diário e mandado para o server.</p><p>Às 15h15 será um relatório das comandas e mandado para o servidor.</p><p>Entre 15h20 e 15h25, será feito um relatório do que aconteceu no dia para a máquina administrador.</p><p>Cada máquina tem um firewall cadastrado, por isso, o caixa não consegue se comunicar com o administrador. Além disso, um proxy configurado baseado no papel de cada máquina.</p>',
    },
  },
  {
    id: 'college-aps-7',
    type: PROJECT_TYPE,
    tags: ['uml'],
    date: '2022-03-01T10:00:00.000Z',
    title: {
      pt: 'APS 7 | Diagrama de classes',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-07-engenharia-de-software`,
    figma: '',
    site: '',
    thumb: 'https://user-images.githubusercontent.com/62115215/235326416-3f1de678-77bc-4ea2-9782-c924d2a84902.png',
    description: {
      pt: 'Planejamento de um sistema computacional, diagrama de classes, uso e requisitos.',
    },
    images: ['https://user-images.githubusercontent.com/62115215/219104336-6162373f-1be2-42ed-9657-d59a55f380cf.png'],
    text: {
      pt: '<h2>Introdução</h2><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do sétimo semestre das minhas aulas de Ciência da Computação.</p><p>Naquele semestre, a matéria principal estudada foi Engenharia de Software, por isso o trabalho deveria ser relacionado com essa matéria.</p><p>Diferente de outras APS, essa daqui foi algo mais teórico, porque estávamos chegando perto do trabalho de conclusão de curso, então o professor sugeriu que o trabalho fosse relacionado com o tema escolhido pelo grupo.</p><p>O trabalho era desenvolver diagrama de classes, UML e outras coisas relacionada com o planejamento de projetos.</p>',
    },
  },
  {
    id: 'college-aps-8',
    type: PROJECT_TYPE,
    tags: ['backend', 'fast-api'],
    date: '2022-10-01T10:00:00.000Z',
    title: {
      pt: 'APS 8 | Sistema de redundância',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-08-sistemas-distribuidos`,
    figma: '',
    site: '',
    thumb: 'https://user-images.githubusercontent.com/62115215/218896385-40b4fcfc-5e6c-4cf4-9672-d56a970b047c.png',
    description: {
      pt: 'Projeto APS do 8º semestre de Ciência da Computação',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/218896385-40b4fcfc-5e6c-4cf4-9672-d56a970b047c.png',
      'https://user-images.githubusercontent.com/62115215/218896388-2eca63eb-485a-4fbc-8fcb-7d6900632f0b.png',
      'https://user-images.githubusercontent.com/62115215/218896389-fd759002-7e9c-447f-a438-4e777f982a0d.png',
    ],
    text: {
      pt: '<h2>Introdução</h2><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do oitavo semestre das minhas aulas de Ciência da Computação.</p><p>Naquele semestre, a matéria principal estudada, foi sistemas distribuidos. Como era o último semestre o professor deixou bem claro logo no inicio do semestre qual seria o trabalho. Deveria ser um sistema que tivesse redundância completa, ou seja, por exemplo um site em que se um dos servidores fosse desligado, o site deveria continuar funcionando.</p><h2>Sobre</h2><p>O projeto foi feito utilizando <a href="https://www.haproxy.org" target="_blank">HaProxy</a> como Load Balancer, <a href="https://www.docker.com" target="_blank">Docker</a> para rodar o sistema (Foi usada uma simples API ao invés de um site inteiro, mas o funcionamento de redundância seria o mesmo) e o <a href="https://k6.io" target="_blank">K6</a> para testar a API feita com <a href="https://fastapi.tiangolo.com">FastAPI</a>.</p>',
    },
  },
  {
    id: 'college-atm-simulation',
    type: PROJECT_TYPE,
    tags: ['python'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      pt: 'Simulação de caixa eletrônico',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/simulacao-caixa-eletronico`,
    figma: '',
    site: '',
    thumb: 'https://user-images.githubusercontent.com/62115215/235330197-74b7ddbf-13cd-40d4-9696-bffdf1b05d9c.png',
    description: {
      pt: 'Um script que gera uma simulação de um caixa eletrônico seguindo o enunciado proposto.',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/236707752-e4c3ae7f-c725-4218-a006-718a94e96400.png',
      'https://user-images.githubusercontent.com/62115215/236707851-2fe5682b-8010-417f-890a-27e1401618e1.png',
    ],
    text: {
      pt: '<h2>Introdução</h2><p>Este foi um projeto desenvolvido para a aula de Estrutura de dados. É um projeto feito em Python para simular uma agência bancária com intuito de estudar filas e pilhas em Estrutura de dados.</p><h2>Sobre</h2><p>É uma simulação de uma agência bancária, nele o projeto vai utilizar diversos valores aleatórios tanto para gerar os clientes em momentos diferentes para talvez criar uma fila. O usuário pode aumentar ou dimuir a porcentagem de aparecer mais clientes e deixar a fila maior. No final, o projeto gera um relatório daquele dia e das filas que se formaram.</p>',
    },
  },
  {
    id: 'college-computer-science-final-paper',
    type: PROJECT_TYPE,
    tags: ['html', 'css', 'javascript', 'react', 'fast-api'],
    date: '2022-11-01T10:00:00.000Z',
    title: {
      pt: 'TCC | Já vi',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/tcc`,
    figma: 'https://www.figma.com/file/iKllJp1aDboNXpVOg5EaSc/Javi?t=L0Crz5jFiKMfRxix-1',
    site: 'http://javi.app.br',
    thumb: 'https://user-images.githubusercontent.com/62115215/219413876-ff778045-3277-41db-861c-fe16e25908cf.png',
    description: {
      pt: 'Uma aplicação de gerenciamento e avaliação de filmes e séries . Trabalho de conclusão de curso de ciência da computação.',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/236708279-1c7b78a9-a44c-4172-b2ae-22f9b885b2be.gif',
      'https://user-images.githubusercontent.com/62115215/219413319-ab355226-6384-417b-9634-9622cd3deac6.png',
      'https://user-images.githubusercontent.com/62115215/236708023-8ac34474-b72d-4f98-9912-860abb52941f.png',
      'https://user-images.githubusercontent.com/62115215/219413668-6622c23e-2409-4e05-8448-92f2d40f3c02.png',
      'https://user-images.githubusercontent.com/62115215/219413812-1b4c3752-26a6-4594-8e02-01a955c9dbb3.png',
      'https://user-images.githubusercontent.com/62115215/219413876-ff778045-3277-41db-861c-fe16e25908cf.png',
      'https://user-images.githubusercontent.com/62115215/219413941-4fe41600-6d07-4401-a9a0-1c1b49395845.png',
    ],
    text: {
      pt: '<h2>Introdução</h2><p>Este foi meu TCC ou trabalho de conclusão de curso de Ciência da Computação. Foi um projeto bem grande e bem difícil de se desenvolver, principalmente porque precisavamos de um tema interessante que todos gostassem e tivessem prazer para pesquisar a respeito, demoramos muito tempo para decidir qual seria o tema, fim por termos 3 devs frontend, 1 backend e um de infra, optamos por fazer um site em que tivessem pequenas APIs não muito complexa e a autentificação e banco de dados ficaria responsável pelo <a target="_blank" href="https://firebase.google.com">Firebase</a>, assim podemos focar na pesquisa que era trazer acessibilidade ao projeto, seja com keyboard listeners, cores com contraste e layout responsivo.</p><h2>Sobre</h2><p>O Javi é um sistema de gerenciamento de filmes/séries e outras mídias digitais, nele é possível fazer a  avaliação daquela mídia para se em algum futuro o usuário desejasse lembrar se gostava ou não daquilo, poderia facilmente procurar em sua conta.</p><p>O projeto foi baseado no <a target="_blank" href="https://myanimelist.net">MyanimeList</a>, um site onde é possível salvar avaliações de animes de temporadas passadas e que ficam vinculadas a sua conta, então se em algum momento querer relembrar do que achava de tal anime, é possível por uma simples busca na plataforma.</p>',
    },
  },
  {
    id: 'college-data-structures',
    type: PROJECT_TYPE,
    tags: ['python'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      pt: 'Algoritmos de estrutura de dados',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/data-structures`,
    figma: '',
    site: '',
    thumb: 'https://user-images.githubusercontent.com/62115215/235331175-69f725a0-86a8-48e7-921d-583300d5433b.png',
    description: {
      pt: 'Respositório que contém métodos para simular os conceitos de ordenaçãod e itens em conjuntos aprendidos em estrutura de dados.',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/236707089-07613362-928d-4530-82cb-01e16f5c95a4.png',
      'https://user-images.githubusercontent.com/62115215/236707148-d97aa16b-4fbe-4c80-8faf-9d4b8689b051.png',
      'https://user-images.githubusercontent.com/62115215/236707168-d1b21501-2379-4be6-8e8b-266039c5eb89.png',
      'https://user-images.githubusercontent.com/62115215/236707189-026d96f0-1143-471d-a2af-be6689257ac0.png',
      'https://user-images.githubusercontent.com/62115215/236707211-5d6b9b62-6692-40c8-9a5b-2a4ff350355d.png',
    ],
    text: {
      pt: '<h2>Introdução</h2><p>Esses são exercícios das aulas de Estrutura de dados, cada um deles tem seu enunciado e resposta correspondentes.</p><h2>Sobre</h2><p>1º Este é um algoritmo que transforma uma equação matemática da forma infixa para pósfixa. <a href="http://www.vision.ime.usp.br/~pmiranda/mac122_2s14/aulas/aula13/aula13.html" target="_blank">Mais informações</a></p><p>2º Este é um algoritmo que resolve equações na forma infixa.</p><p>3º Algoritmo que realiza uma operação de potenciação utilizando recursão</p><p>4º Um algoritmo que resolve o jogo <a href="https://en.wikipedia.org/wiki/Tower_of_Hanoi" target="_blank">Torre de Hanoi</a>.</p><p>5º Uma coleção de 5 algoritmos de ordenação, são eles <a href="https://pt.wikipedia.org/wiki/Bubble_sort" target="_blank">Bubble Sort</a>, <a href="https://pt.wikipedia.org/wiki/Selection_sort" target="_blank">Selection Sort</a>, <a href="https://pt.wikipedia.org/wiki/Insertion_sort" target="_blank">Insertion Sort</a>, <a href="https://pt.wikipedia.org/wiki/Quicksort" target="_blank">Quick Sort</a> e <a href="https://pt.wikipedia.org/wiki/Comb_sort" target="_blank">Comb Sort</a></p>',
    },
  },
  {
    id: 'college-ellipse-transformation',
    type: PROJECT_TYPE,
    tags: ['python'],
    date: '2021-10-01T10:00:00.000Z',
    title: {
      pt: 'Geometria',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/ellipse-transformation`,
    figma: '',
    site: '',
    thumb: 'https://user-images.githubusercontent.com/62115215/235331587-188c8d7f-3f3f-4b81-895a-94de1e0c0a16.png',
    description: {
      pt: 'Projeto que demonstra as possíveis modificações em uma forma geométrica aprendidas nas aulas de geometria e computação gráfica.',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/236691657-7583569b-5c39-476a-96e5-ee4937e58a57.gif',
      'https://user-images.githubusercontent.com/62115215/236691635-8a558125-edcd-4128-b106-9f2567d943fe.png',
      'https://user-images.githubusercontent.com/62115215/236691624-de101f4d-cdae-466c-95e9-27a41af42ae8.png',
    ],
    text: {
      pt: '<h2>Introdução</h2><p>Esse foi um projeto desenvolvido durante as aulas de Computação Gráfica para demonstrar as possíveis transformações geometricas.</p><h2>Sobre</h2><p>Dentro do projeto é possível realizar todas as operações geometricas de rotação, translação X e Y, escalonamento X e Y, cisalhamento X e Y e por último mudar a quantidade de vértices da elipse.</p>',
    },
  },
  {
    id: 'college-image-thresholding',
    type: PROJECT_TYPE,
    tags: ['java'],
    date: '2021-01-01T10:00:00.000Z',
    title: {
      pt: 'Limiarização de imagens',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/algorithm-thresholding`,
    figma: '',
    site: '',
    thumb: 'https://user-images.githubusercontent.com/62115215/235332500-e3fd97b9-7d9a-4e2b-84bd-b3c0aa73010e.png',
    description: {
      pt: 'Projeto que contém diversos métodos pra testar a limiarização de imagens',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/236691953-8eeb04a5-93f1-4de6-9479-d40e1acd69c9.png',
      'https://user-images.githubusercontent.com/62115215/236691965-4ee1de5b-9d2f-4701-ba16-8ef7574c55da.png',
      'https://user-images.githubusercontent.com/62115215/236691976-14aeb920-b887-4956-b91a-40c54bebac29.png',
      'https://user-images.githubusercontent.com/62115215/236691998-3251449e-0355-4b24-abd2-9236f86ab868.png',
      'https://user-images.githubusercontent.com/62115215/236692002-bf575b7d-e39a-45f2-ba4d-39724c6e5c36.png',
      'https://user-images.githubusercontent.com/62115215/236692009-2eac359d-2a91-4196-a491-42d9c1e8949d.png',
    ],
    text: {
      pt: '<h2>Introdução</h2><p>Esse projeto foi feito durante a aula de processamento de imagem. É um script em Python que realiza a limiarização de imagens.</p><h2>Sobre</h2><p>Limiarização é transformar a imagem em binária. Uma imagem é composta por um conjunto de valores de cores, pode ser RGB por exemplo, ou seja se transformarmos esses valores em 0 ou o máximo 255, podemos ter uma imagem com somentes pixels pretos (255,255,255) ou brancos(0,0,0), a ideia do projeto é criar um algoritmo para saber diferenciar quando transformar o pixel em branco ou preto. Pode parecer simples, mas para gerar o valor de corte, tem muita matemática envolvida.</p>',
    },
  },
  {
    id: 'college-lights-out',
    type: PROJECT_TYPE,
    tags: ['java'],
    date: '2021-03-01T10:00:00.000Z',
    title: {
      pt: 'Lights Out',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/lights-out`,
    figma: '',
    site: '',
    thumb: 'https://user-images.githubusercontent.com/62115215/235331961-e215158a-bafa-44b1-acbc-3bf0934c11e5.png',
    description: {
      pt: 'Lights Out é um jogo que precisa desligar todas as luzes de uma matriz, porém toda vez que aperta uma luz para desliga-la, as adjacentes acendem.',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/236691169-b3374c02-2a7d-462a-8da5-32a39e30888d.png',
      'https://user-images.githubusercontent.com/62115215/236691199-70483455-154b-4f33-a86d-cdba7ee7fcea.png',
      'https://user-images.githubusercontent.com/62115215/111791516-0a128f00-88a2-11eb-9a3a-a1c03833acc8.png',
    ],
    text: {
      pt: '<h2>Introdução</h2><p>Esse projeto foi feito na aula de inteligência artificial e simula a <a target="_blank" href="https://www.ime.usp.br/~slago/IA-Busca.pdf">busca no espaço de estados</a>, um método bem simples e rudimentar para encontrar a resposta que precisa que é basicamente pedindo para a máquina fazer todas as possibilidades até encontrar a resposta que precisa.</p><p>O projeto consiste em um sistema que resolve o jogo <a href="https://en.wikipedia.org/wiki/Lights_Out_(game)" target="_blank"><strong>Light\'s Out</strong></a>. Nele há uma matriz de números (0-1) ou valores booleanos (true, false) em que ao tentar desligar um (clicando nele, trocando seu valor), os valores adjacentes desse número também trocarão de valor, o objetivo do jogo é desligar todos os números da matriz.</p>',
    },
  },
  {
    id: 'college-linear-systeam-solver',
    type: PROJECT_TYPE,
    tags: ['python'],
    date: '2021-10-01T10:00:00.000Z',
    title: {
      pt: 'Resolução de sistemas lineares',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/algorithm-linear-system-solver`,
    figma: '',
    site: '',
    thumb: 'https://user-images.githubusercontent.com/62115215/235332618-48f12495-95d2-432e-9bba-bb19dfcfbe54.png',
    description: {
      pt: 'Algoritmo para resolução de sistemas lineares em python.',
    },
    images: [
      'https://user-images.githubusercontent.com/62115215/236688806-fc46c4ba-bc63-4df6-9139-d84a74caafe5.png',
      'https://user-images.githubusercontent.com/62115215/236688819-59a74aaa-616d-46c4-b3ec-f0f80bc69b1f.png',
      'https://user-images.githubusercontent.com/62115215/236689312-332542be-3b0b-4df6-95e3-3b14882d36ed.png',
      'https://user-images.githubusercontent.com/62115215/236689321-20fe8485-5db2-4e85-a527-769bb57e9e5f.png',
      'https://user-images.githubusercontent.com/62115215/236689338-20c081ed-e244-44b6-af9e-43bef5bcd90d.png',
    ],
    text: {
      pt: '<h2>Introdução</h2><p>Esse projeto foi feito na aula de Cálculo numérico para resolver um sistema linear de qualquer tamanho.</p><h2>Sobre</h2><p>Um algoritmo feito em Python que resolve sistemas lineares.</p>',
    },
  },
]
