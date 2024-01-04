import { IProject } from '@/types'
import { OWNER_CONFIGS } from '../owner.config'

const PROJECT_TYPE = 'college-lesson'

export const COLLEGE_LESSON_PROJECTS: IProject[] = [
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
    description: {
      pt: 'Um algoritmo de demonstração do gerenciamento de memória baseado no Best Fit Algoritm.',
    },
    images: ['thumb.png'],
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
    description: {
      pt: 'Primeiro projeto da faculdade, site para praticar conceitos de css e html.',
    },
    images: ['overview.gif', 'aboutus.png', 'reciclagem.png', 'news.png', 'form.png', 'ecopontos.png', 'app.png', 'rrr.png'],
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
    description: {
      pt: 'Projeto que calcula a distância entre um ponto de coordenada na região de Campinas fornecido para o Eco ponto mais próximo.',
    },
    images: ['overview.gif', 'thumb.png'],
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
    description: {
      pt: 'Um sistema para gerencimento de universidade. Inclui gerenciamento de cursos, alunos e notas.',
    },
    images: ['overview.gif'],
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
    description: {
      pt: 'Um sistema para gerencimento de bibliotecas. Inclui gerenciamento de livros, autores e editoras.',
    },
    images: ['home.png', 'home-lib.png', 'editoras.png', 'database.png'],
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
    description: {
      pt: 'Um simulador de chat, um sistema de mensagens usando Socket.io',
    },
    images: ['login.png', 'instances.png', 'chat.png', 'chat02.png'],
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
    description: {
      pt: 'Sistema de gerenciamento de um restaurante, backup e relatório de dia e mês.',
    },
    images: ['folder.png', 'precos.png', 'relatorio.png', 'relatorio-servidor.png'],
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
    description: {
      pt: 'Planejamento de um sistema computacional, diagrama de classes, uso e requisitos.',
    },
    images: ['diagrama.png'],
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
    description: {
      pt: 'Projeto APS do 8º semestre de Ciência da Computação',
    },
    images: ['home.png', 'hproxy.png', 'load-balancer.png'],
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
    description: {
      pt: 'Um script que gera uma simulação de um caixa eletrônico seguindo o enunciado proposto.',
    },
    images: ['relatorio.png', 'running.png'],
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
    description: {
      pt: 'Uma aplicação de gerenciamento e avaliação de filmes e séries . Trabalho de conclusão de curso de ciência da computação.',
    },
    images: ['overview.gif', 'homepage.png', 'acounts.png', 'dashboard.png', 'saved.png', 'movie-details.png', 'dark-mode.png'],
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
    description: {
      pt: 'Respositório que contém métodos para simular os conceitos de ordenaçãod e itens em conjuntos aprendidos em estrutura de dados.',
    },
    images: ['infixposfix.png', 'recursion.png', 'convention.png', 'hanoitower.png', 'sorting-algorithms.png'],
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
    description: {
      pt: 'Projeto que demonstra as possíveis modificações em uma forma geométrica aprendidas nas aulas de geometria e computação gráfica.',
    },
    images: ['overview.gif', 'homepage.png', 'transformed.png'],
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
    description: {
      pt: 'Projeto que contém diversos métodos pra testar a limiarização de imagens',
    },
    images: ['thumb.png', 'image-color.png', 'image-black-white.png', 'matriz.png', 'histograma.png', 'graph.png'],
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
    description: {
      pt: 'Lights Out é um jogo que precisa desligar todas as luzes de uma matriz, porém toda vez que aperta uma luz para desliga-la, as adjacentes acendem.',
    },
    images: ['solver-2.png', 'solver.png', 'pt-instructions.png', 'en-instructions.png'],
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
    description: {
      pt: 'Algoritmo para resolução de sistemas lineares em python.',
    },
    images: ['code.png', 'result.png', 'result-2.png', 'result-3.png', 'result-4.png'],
    text: {
      pt: '<h2>Introdução</h2><p>Esse projeto foi feito na aula de Cálculo numérico para resolver um sistema linear de qualquer tamanho.</p><h2>Sobre</h2><p>Um algoritmo feito em Python que resolve sistemas lineares.</p>',
    },
  },
]
