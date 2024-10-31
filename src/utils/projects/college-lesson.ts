import { IProject, IType } from '@/types'
import { OWNER_CONFIGS } from '../owner.config'
import { PROJECTS_TYPES } from './projectsType'

const PROJECT_TYPE: IType = PROJECTS_TYPES['college-lesson']

export const COLLEGE_LESSON_PROJECTS: IProject[] = [
  {
    id: 'college-algorithm-best-fit',
    type: PROJECT_TYPE,
    tags: ['python', 'algorithm'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      en: 'Best Fit Algorithm',
      pt: 'Algoritmo Best Fit',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/algorithm-best-fit`,
    figma: '',
    site: '',
    description: {
      en: 'A memory management demonstration algorithm based on the Best Fit Algorithm.',
      pt: 'Um algoritmo de demonstração do gerenciamento de memória baseado no Best Fit Algoritm.',
    },
    images: ['thumb.webp'],
    text: {
      en: '<h2>Introduction</h2><p>Best fit was a college project done in the operating systems class.</p><h2>About</h2><p>The best fit algorithm is related to the memory management on a computer. Basically it is an algorithm that says how processes will be allocated in memory, that is, what business rule will be used to remove and place them, which is to place a process in the smallest space that is large enough for it. More information at <a target="_blank" href="https://en.wikipedia.org/wiki/Best-fit_bin_packing">Wiki</a></p><p>In this case, this project takes a few things in consideration:</p><ul><li>It is a simulation and not a production-ready implementation, just tests;</li><li>The memory will be represented by a set of 100 elements;</li><li >Each element represents the process id, with the exception of -1 which means an empty space;</li><li>Each process can have a random weight (size) value;</li><li>The program creates two new processes and deleted one (symbolizing that it has already been used);</li><li>The allocation is done based on checks to find the smallest space large enough for that process;</li><li>The simulation for when your memory gets full;</li></ul>',
      pt: '<h2>Introdução</h2><p>Best fit foi um trabalho de faculdade feito na aula de sistemas operacionais.</p><h2>Sobre</h2><p>O algoritmo de best fit é relacionado com o gerenciamento de memória em um computador. Basicamente é um algoritmo que diz como os processos serão alocados na memória, ou seja, qual a regra de negócio que será usada para retirar e colocar eles, que é colocar um processo no menor espaço que é grande o suficiente para ele. Mais informações em <a target="_blank" href="https://en.wikipedia.org/wiki/Best-fit_bin_packing">Wiki</a></p><p>No caso esse projeto leva algumas coisas em consideração:</p><ul><li>É uma simulação e não uma implementação pronta para produção, apenas testes;</li><li>A memória será representada por um conjunto de 100 elementos;</li><li>Cada elemento representa o id do processo, com exceção do -1 que significa um espaço vago;</li><li>Cada processo pode ter um valor de peso (tamanho) aleatório;</li><li>O programa cria dois processos novos e excluí um (simbolizando que já foi utilizado);</li><li>A alocação é feita a partir de verificações para encontrar o menor espaço grande o suficiente para aquele processo;</li><li>A simulação para quando a memória fica lotada;</li></ul>',
    },
  },
  {
    id: 'college-aps-1',
    type: PROJECT_TYPE,
    tags: ['html', 'css'],
    date: '2019-03-01T10:00:00.000Z',
    title: {
      en: 'APS 1 | Save the Green',
      pt: 'APS 1 | Save the Green',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-01-desenvolvimento-em-ambiente-web`,
    figma: '',
    site: '',
    description: {
      en: 'First college project, website to practice css and html concepts.',
      pt: 'Primeiro projeto da faculdade, site para praticar conceitos de css e html.',
    },
    images: ['overview.gif', 'aboutus.webp', 'reciclagem.webp', 'news.webp', 'form.webp', 'ecopontos.webp', 'app.webp', 'rrr.webp'],
    text: {
      en: '<h2>Introduction</h2><p>This project wasn\'t even on Github until recently, because when I did it, it was so early in my career and I didn\'t even know how to use Git or Github yet.</p> <p>APS (Supervised Practical Activities) is an end-of-semester project that I needed to do in college, that is, this project was done halfway through the first semester of my Computer Science classes.</p><p >That\'s why it\'s an extremely simple and very ugly project lol, but it was one of the first programming projects I did, so I\'m very proud of it and I intend to make the <em>updated</em> version one day so I can compare how much I\'ve improved in area.</p><p>The project is super simple, it\'s a website with just HTML and CSS.</p><p>At that time, despite being a beginner, I was already looking for more about the area and was already trying out some codes javascript, however, the professor said that the site was only to have HTML and CSS, so I remember that a challenge was creating the menu using only these tools.</p><p>In the end, it worked, the project despite a little ugly, it worked and managed to do its job.</p><h2>About</h2><p>The theme of the project was something related to the environment.</p><p>The project is about a website in HTML and CSS about environmental NGOs, garbage collection sites in Campinas - Eco Pontos.</p>',
      pt: '<h2>Introdução</h2><p>Esse projeto nem sequer estava no Github até pouco tempo atrás, pois quando fiz, estava tão no começo de minha carreira e ainda nem sabia usar o Git ou o Github.</p><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do primeiro semestre das minhas aulas de Ciência da Computação.</p><p>Por isso é um projeto extremamente simples e bem feio rsrs, mas foi um dos primeiros projetos de programação que fiz, então tenho muito orgulho e pretendo algum dia fazer a versão <em>atualizada</em> para poder comparar o quanto melhorei na área.</p><p>O projeto é super simples, é um site com apenas HTML e CSS.</p><p>Nessa época, apesar de inciante, já estava procurando mais sobre a área e já arriscava alguns códigos javascript, porém, o professor disse que o site era apenas para ter HTML e CSS, por isso lembro que um desafio foi criar o menu usando apenas essas ferramentas.</p><p>No fim, deu certo, o projeto apesar de um pouco feio, funcionava e conseguiu fazer a sua função.</p><h2>Sobre</h2><p>O tema do projeto era algo relacionado ao meio ambiente.</p><p>O projeto se trata de um site em HTML e CSS sobre ONGs ambientais, locais de coleta de lixo em campinas- Eco Pontos.</p>',
    },
  },
  {
    id: 'college-aps-2',
    type: PROJECT_TYPE,
    tags: ['python'],
    date: '2019-10-01T10:00:00.000Z',
    title: {
      en: 'APS 2 | Eco Pontos',
      pt: 'APS 2 | Eco Pontos',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-02-indroducao-a-programacao-estruturada`,
    figma: '',
    site: '',
    description: {
      en: 'Project that calculates the distance between a coordinate point in the Campinas region provided to the nearest Eco point.',
      pt: 'Projeto que calcula a distância entre um ponto de coordenada na região de Campinas fornecido para o Eco ponto mais próximo.',
    },
    images: ['overview.gif', 'thumb.webp'],
    text: {
      en: '<h2>Introduction</h2><p>APS (Supervised Practical Activities) is an end-of-semester project that I needed to do in college, that is, this project was done halfway through the second semester of my Science classes of Computing.</p><p>In that semester, the main subject studied was structured programming in Python, therefore, the project should be done with this methodology and language.</p><p>The project is a localizer of Eco Pontos in Campinas made using the best path search algorithm.</p><h2>About</h2><p>The project does not have a graphical interface, so it is carried out using only the console.</p> <p>Enter a location, and the program calculates the best route to the eco point in Campinas.</p>',
      pt: '<h2>Introdução</h2><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do segundo semestre das minhas aulas de Ciência da Computação.</p><p>Naquele semestre, a matéria principal estudada, foi programação estruturada em Python, por isso, o projeto deveria ser feito com essa metodologia e linguagem.</p><p>O projeto é um localizador de Eco Pontos em Campinas feito utilizando o algoritmo de busca de melhor caminho.</p><h2>Sobre</h2><p>O projeto não tem interface gráfica, por isso é feito utilizando apenas o console.</p><p>Digita-se uma localização, e oprograma calcula o melhor trajeto para o eco ponto em Campinas.</p>',
    },
  },
  {
    id: 'college-aps-3',
    type: PROJECT_TYPE,
    tags: ['java'],
    date: '2020-03-01T10:00:00.000Z',
    title: {
      en: 'APS 3 | Academic System',
      pt: 'APS 3 | Sistema Acadêmico',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-03-programacao-orientada-a-objetos`,
    figma: '',
    site: '',
    description: {
      en: 'A system for university management. Includes course, student and grade management.',
      pt: 'Um sistema para gerencimento de universidade. Inclui gerenciamento de cursos, alunos e notas.',
    },
    images: ['overview.gif'],
    text: {
      en: '<h2>Introduction</h2><p>APS (Supervised Practical Activities) is an end-of-semester project that I needed to do in college, that is, this project was done halfway through the third semester of my Science classes of Computing.</p><p>In that semester, the main subject studied was object-oriented programming in Java, therefore, the project should be done with this methodology and the language could be either Java or C#.</p ><p>This semester was my first contact with Java, until then I was studying Python more, but I had a very strong interest in Java, mainly for mobile development. Despite preferring other languages, it was essential to learn concepts not only of the language, but of computing itself, such as object orientation.</p><h2>About</h2><p>The project is a system for registering and managing students, courses and grades from a college, the project is all done in a console, but includes several options to perform search, update, deletion and creation actions using a csv file simulating some database for example.</p>',
      pt: '<h2>Introdução</h2><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do terceiro semestre das minhas aulas de Ciência da Computação.</p><p>Naquele semestre, a matéria principal estudada, foi programação orientada a objetos em Java, por isso, o projeto deveria ser feito com essa metodologia e a linguagem poderia ser ou Java ou C#.</p><p>Nesse semestre foi meu primeiro contato com Java, até então estava estudando mais Python, mas tinha um interesse bem grande em Java, principalmente pelo desenvolvimento mobile. Apesar de preferir outras linguagens foi essencial aprender conceitos não só da linguagem, mas da própria computação, como a orientação a objetos.</p><h2>Sobre</h2><p>O projeto é um sistema para cadastramento e gerenciamento de alunos, cursos e notas de uma faculdade, o projeto é todo feito em console, porém inclui diversas opções para realizar ações de busca, atualização, deleção e criação utilizando um arquivo csv simulando algum banco de dados por exemplo.</p>',
    },
  },
  {
    id: 'college-aps-4',
    type: PROJECT_TYPE,
    tags: ['java'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      en: 'APS 4 | Library System',
      pt: 'APS 4 | Sistema Bibliotecário',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-04-aplicacao-orientacao-a-objetos`,
    figma: '',
    site: '',
    description: {
      en: 'A system for library management. Includes book, author and publisher management.',
      pt: 'Um sistema para gerenciamento de bibliotecas. Inclui gerenciamento de livros, autores e editoras.',
    },
    images: ['home.webp', 'home-lib.webp', 'editoras.webp', 'database.webp'],
    text: {
      en: '<h2>Introduction</h2><p>APS (Supervised Practical Activities) is an end-of-semester project that I needed to do in college, that is, this project was done halfway through the fourth semester of my Science classes of Computing.</p><p>That semester, the main subject studied was databases, so the project should be something using a database. The language could be any database language, but in the case of our group MySQL was chosen.</p><p>It was my first contact with a database language, in the previous semester I had learned how to model a database. data, but it was only in this one that I learned language commands. In addition, it was also the first contact with a graphical interface in Java using Swift and AWT. Lastly, the concept of MVC (Model-View-Controller) was also learned, a standard for organizing a project\'s files with their respective responsibilities.</p ><h2>About</h2><p>This is a project developed to manage a bookstore. In it we can delete, change, include and search for authors, books and publishers. There is connection to a database developed in MySQL and a graphical interface using Java Swift and AWT.</p>',
      pt: '<h2>Introdução</h2><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do quarto semestre das minhas aulas de Ciência da Computação.</p><p>Naquele semestre, a matéria principal estudada, foi banco de dados, por isso, o projeto deveria ser algo utilizando um banco de dados. a Linguagem poderia ser qualquer uma de banco de dados, mas no caso do nosso grupo foi escolhida o MySQL.</p><p>Foi meu primeiro contato com linguagem de banco de dados, no semestre anterior havia aprendido a modelar um banco de dados, mas foi somente nesse em que aprendi comandos da linguagem. Além disso também foi o primeiro contato com interface gráfica em Java utilizando Swift e AWT, por último também foi aprendido conceito de MVC (Model-View-Controller), um padrão para organizar os arquivos de um projeto com suas respectivas responsabilidades.</p><h2>Sobre</h2><p>Esse é um projeto desenvolvido para gerenciar uma livraria. Nele podemos apagar, alterar, incluir e buscar autores, livros e editoras. Há conexão com um banco de dados desenvolvido em MySQL e interface gráfica utilizando Java Swift e AWT.</p>',
    },
  },
  {
    id: 'college-aps-5',
    type: PROJECT_TYPE,
    tags: ['react', 'javascript', 'html', 'css'],
    date: '2021-03-01T10:00:00.000Z',
    title: {
      en: 'APS 5 Networks | Chat',
      pt: 'APS 5 Redes | Chat',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-05-redes-e-computadores`,
    figma: '',
    site: '',
    description: {
      en: 'A chat simulator, a messaging system using Socket.io',
      pt: 'Um simulador de chat, um sistema de mensagens usando Socket.io',
    },
    images: ['login.webp', 'instances.webp', 'chat.webp', 'chat02.webp'],
    text: {
      en: '<h2>Introduction</h2><p>APS (Supervised Practical Activities) is an end-of-semester project that I needed to do in college, that is, this project was done in the middle of the fifth semester of my Science classes of Computing.</p><p>That semester, the main subject studied was computer networks, so the project should be something using the concepts learned in that class.</p><p>In the end, the teacher left it up to the students to decide what they wanted to do, but it needs to be something using <em>sockets</em>, which are network points where when you connect to one, you <em>listen</em> to its responses When it arrives, it\'s basically a technology for creating applications that need to update in real time. That\'s why what my group and I decided to do was a messaging application, it was developed in react using socket.io</p><h2>About</h2><p>A messaging application developed in react using socket. io. It\'s very simple, with a minimalist frontend that can also send emojis in the message.</p>',
      pt: '<h2>Introdução</h2><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do quinto semestre das minhas aulas de Ciência da Computação.</p><p>Naquele semestre, a matéria principal estudada, foi redes de computadores, por isso, o projeto deveria ser algo utilizando os conceitos aprendidos nessa aula.</p><p>No fim, o professor deixou a critério dos alunos decidirem o que queriam fazer, mas precisa ser algo usando <em>sockets</em>, que são pontos de redes em que você ao conectar em um, fica <em>ouvindo</em> as respostas dele quando chega, basicamente é uma tecnologia para criar aplicativos que precisam atualizar em tempo real. Por isso o que eu e meu grupo decidimos fazer foi um aplicativo de mensagens, foi desenvolvido em react utilizando o socket.io</p><h2>Sobre</h2><p>Um aplicativo de mensagens desenvovlido em react utilizando socket.io. É bem simples, com um frontend minimalista podendo enviar emojis também na mensagem.</p>',
    },
  },
  {
    id: 'college-aps-6',
    type: PROJECT_TYPE,
    tags: ['linux'],
    date: '2021-10-01T10:00:00.000Z',
    title: {
      en: 'APS 6 | Restaurant management system',
      pt: 'APS 6 | Sistema de gerenciamento restaurante',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-06-sistemas-operacionais`,
    figma: '',
    site: '',
    description: {
      en: 'Restaurant management system, backup and day and month report.',
      pt: 'Sistema de gerenciamento de um restaurante, backup e relatório de dia e mês.',
    },
    images: ['folder.webp', 'precos.webp', 'relatorio.webp', 'relatorio-servidor.webp'],
    text: {
      en: '<h2>Introduction</h2><p>APS (Supervised Practical Activities) is an end-of-semester project that I needed to do in college, that is, this project was done halfway to the end of the sixth semester of my Science classes of Computing.</p><p>That semester, the main subject studied was operating systems, therefore, the project should be to create a simulation of how a Linux backup system would work using 3 or more virtual machines, they should be connected, thus providing backup redundancy of files.</p><h2>About</h2><p>This is a project developed to backup a restaurant\'s commands. In it we have 3 virtual machines (Caixa, Server and Administrator), and they are connected to the same network.</p><p>As it is a simulation, <em>Caixa</em> has a Python script that generates commands random times between 12pm and 3pm (Possible cashier opening hours).</p><p>Between 3pm and 3:10pm, a daily backup will be generated and sent to the server.</p><p>At 3:15pm it will be a report from the commands is sent to the server.</p><p>Between 3:20 pm and 3:25 pm, a report of what happened that day will be made to the administrator machine.</p><p>Each machine has a firewall registered, Therefore, the cashier is unable to communicate with the administrator. Additionally, a proxy configured based on the role of each machine.</p>',
      pt: '<h2>Introdução</h2><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do sexto semestre das minhas aulas de Ciência da Computação.</p><p>Naquele semestre, a matéria principal estudada foi sistemas operacionais, por isso, o projeto deveria ser criar uma simulação de como um sistema de backup em Linux funcionaria utilizando 3 ou mais máquinas virtuais, elas deveriam estar conectadas, assim fazendo redundância de backup dos arquivos.</p><h2>Sobre</h2><p>Esse é um projeto desenvolvido para fazer backup de comandas de um restaurante. Nele temos 3 máquinas virtuais (Caixa, Server e Administrador), e eles estão conectados na mesma rede.</p><p>Como é uma simulação, o <em>Caixa</em> tem um script em Python que gera comandas aleatórias em tempos aleatórios entre 12h e 15h (Possível horário de funcionamento do caixa).</p><p>Entre 15h e 15h10, será gerado um backup diário e mandado para o server.</p><p>Às 15h15 será um relatório das comandas e mandado para o servidor.</p><p>Entre 15h20 e 15h25, será feito um relatório do que aconteceu no dia para a máquina administrador.</p><p>Cada máquina tem um firewall cadastrado, por isso, o caixa não consegue se comunicar com o administrador. Além disso, um proxy configurado baseado no papel de cada máquina.</p>',
    },
  },
  {
    id: 'college-aps-7',
    type: PROJECT_TYPE,
    tags: ['uml'],
    date: '2022-03-01T10:00:00.000Z',
    title: {
      en: 'APS 7 | Class diagram',
      pt: 'APS 7 | Diagrama de classes',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-07-engenharia-de-software`,
    figma: '',
    site: '',
    description: {
      en: 'Planning a computational system, class diagram, usage and requirements.',
      pt: 'Planejamento de um sistema computacional, diagrama de classes, uso e requisitos.',
    },
    images: ['diagrama.webp'],
    text: {
      en: '<h2>Introduction</h2><p>APS (Supervised Practical Activities) is an end-of-semester project that I needed to do in college, that is, this project was done halfway through the seventh semester of my Science classes of Computing.</p><p>That semester, the main subject studied was Software Engineering, so the work should be related to that subject.</p><p>Unlike other APS, this one was something more theoretical, because we were getting close to the course conclusion work, so the professor suggested that the work be related to the topic chosen by the group.</p><p>The work was to develop class diagram, UML and other things related to project planning.</p>',
      pt: '<h2>Introdução</h2><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do sétimo semestre das minhas aulas de Ciência da Computação.</p><p>Naquele semestre, a matéria principal estudada foi Engenharia de Software, por isso o trabalho deveria ser relacionado com essa matéria.</p><p>Diferente de outras APS, essa daqui foi algo mais teórico, porque estávamos chegando perto do trabalho de conclusão de curso, então o professor sugeriu que o trabalho fosse relacionado com o tema escolhido pelo grupo.</p><p>O trabalho era desenvolver diagrama de classes, UML e outras coisas relacionada com o planejamento de projetos.</p>',
    },
  },
  {
    id: 'college-aps-8',
    type: PROJECT_TYPE,
    tags: ['backend', 'fast-api'],
    date: '2022-10-01T10:00:00.000Z',
    title: {
      en: 'APS 8 | Redundancy system',
      pt: 'APS 8 | Sistema de redundância',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/aps/aps-08-sistemas-distribuidos`,
    figma: '',
    site: '',
    description: {
      en: 'APS Project for the 8th semester of Computer Science',
      pt: 'Projeto APS do 8º semestre de Ciência da Computação',
    },
    images: ['home.webp', 'hproxy.webp', 'load-balancer.webp'],
    text: {
      en: '<h2>Introduction</h2><p>APS (Supervised Practical Activities) is an end-of-semester project that I needed to do in college, that is, this project was done in the middle of the eighth semester of my Science classes of Computing.</p><p>In that semester, the main subject studied was distributed systems. As it was the last semester, the professor made it very clear at the beginning of the semester what the work would be. It should be a system that has complete redundancy, that is, for example a website in which if one of the servers were turned off, the website should continue to work.</p><h2>About</h2><p>The project was created using <a href="https://www.haproxy.org" target="_blank">HaProxy</a> as Load Balancer, <a href="https://www.docker.com" target="_blank ">Docker</a> to run the system (a simple API was used instead of an entire website, but the redundancy operation would be the same) and the <a href="https://k6.io" target= "_blank">K6</a> to test the API made with <a href="https://fastapi.tiangolo.com">FastAPI</a>.</p>',
      pt: '<h2>Introdução</h2><p>APS (Atividades Práticas Supervisionadas) é um projeto de final de semestre que precisava fazer na faculdade, ou seja, esse projeto foi feito na metade pro fim do oitavo semestre das minhas aulas de Ciência da Computação.</p><p>Naquele semestre, a matéria principal estudada, foi sistemas distribuidos. Como era o último semestre o professor deixou bem claro logo no inicio do semestre qual seria o trabalho. Deveria ser um sistema que tivesse redundância completa, ou seja, por exemplo um site em que se um dos servidores fosse desligado, o site deveria continuar funcionando.</p><h2>Sobre</h2><p>O projeto foi feito utilizando <a href="https://www.haproxy.org" target="_blank">HaProxy</a> como Load Balancer, <a href="https://www.docker.com" target="_blank">Docker</a> para rodar o sistema (Foi usada uma simples API ao invés de um site inteiro, mas o funcionamento de redundância seria o mesmo) e o <a href="https://k6.io" target="_blank">K6</a> para testar a API feita com <a href="https://fastapi.tiangolo.com">FastAPI</a>.</p>',
    },
  },
  {
    id: 'college-atm-simulation',
    type: PROJECT_TYPE,
    tags: ['python'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      en: 'ATM simulation',
      pt: 'Simulação de caixa eletrônico',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/simulacao-caixa-eletronico`,
    figma: '',
    site: '',
    description: {
      en: 'A script that generates a simulation of an ATM following the proposed statement.',
      pt: 'Um script que gera uma simulação de um caixa eletrônico seguindo o enunciado proposto.',
    },
    images: ['relatorio.webp', 'running.webp'],
    text: {
      en: '<h2>Introduction</h2><p>This was a project developed for the Data Structure class. It is a project made in Python to simulate a bank branch in order to study queues and stacks in Data Structure.</p><h2>About</h2><p>It is a simulation of a bank branch, in which the project will use several random values ​​to both generate customers at different times to perhaps create a queue. The user can increase or decrease the percentage of more customers appearing and making the queue longer. At the end, the project generates a report of that day and the queues that formed.</p>',
      pt: '<h2>Introdução</h2><p>Este foi um projeto desenvolvido para a aula de Estrutura de dados. É um projeto feito em Python para simular uma agência bancária com intuito de estudar filas e pilhas em Estrutura de dados.</p><h2>Sobre</h2><p>É uma simulação de uma agência bancária, nele o projeto vai utilizar diversos valores aleatórios tanto para gerar os clientes em momentos diferentes para talvez criar uma fila. O usuário pode aumentar ou dimuir a porcentagem de aparecer mais clientes e deixar a fila maior. No final, o projeto gera um relatório daquele dia e das filas que se formaram.</p>',
    },
  },
  {
    id: 'college-computer-science-final-paper',
    type: PROJECT_TYPE,
    tags: ['html', 'css', 'javascript', 'react', 'fast-api'],
    date: '2022-11-01T10:00:00.000Z',
    title: {
      en: 'TCC | Já vi',
      pt: 'TCC | Já vi',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/tcc`,
    figma: 'https://www.figma.com/file/iKllJp1aDboNXpVOg5EaSc/Javi?t=L0Crz5jFiKMfRxix-1',
    site: 'http://javi.app.br',
    description: {
      en: 'A movie and series management and evaluation application. Computer science course completion work.',
      pt: 'Uma aplicação de gerenciamento e avaliação de filmes e séries . Trabalho de conclusão de curso de ciência da computação.',
    },
    images: ['overview.gif', 'homepage.webp', 'acounts.webp', 'dashboard.webp', 'saved.webp', 'movie-details.webp', 'dark-mode.webp'],
    text: {
      en: '<h2>Introduction</h2><p>This was my TCC or Computer Science course completion work. It was a very large and very difficult project to develop, mainly because we needed an interesting theme that everyone liked and had pleasure researching about, it took us a long time to decide what the theme would be, ending up with 3 frontend devs, 1 backend and one below, we chose to create a website with small, not very complex APIs and the authentication and database would be responsible for <a target="_blank" href="https://firebase.google.com">Firebase< /a>, this way we can focus on the research that was to bring accessibility to the project, whether with keyboard listeners, contrasting colors and responsive layout.</p><h2>About</h2><p>Javi is a management system of films/series and other digital media, it is possible to evaluate that media so that if in the future the user wanted to remember whether they liked it or not, they could easily search in their account.</p><p>The project was based on <a target="_blank" href="https://myanimelist.net">MyanimeList</a>, a site where you can save reviews of anime from past seasons and which are linked to your account, so if in any If you want to remember what you thought of this anime, you can do so by simply searching on the platform.</p>',
      pt: '<h2>Introdução</h2><p>Este foi meu TCC ou trabalho de conclusão de curso de Ciência da Computação. Foi um projeto bem grande e bem difícil de se desenvolver, principalmente porque precisavamos de um tema interessante que todos gostassem e tivessem prazer para pesquisar a respeito, demoramos muito tempo para decidir qual seria o tema, fim por termos 3 devs frontend, 1 backend e um de infra, optamos por fazer um site em que tivessem pequenas APIs não muito complexa e a autentificação e banco de dados ficaria responsável pelo <a target="_blank" href="https://firebase.google.com">Firebase</a>, assim podemos focar na pesquisa que era trazer acessibilidade ao projeto, seja com keyboard listeners, cores com contraste e layout responsivo.</p><h2>Sobre</h2><p>O Javi é um sistema de gerenciamento de filmes/séries e outras mídias digitais, nele é possível fazer a  avaliação daquela mídia para se em algum futuro o usuário desejasse lembrar se gostava ou não daquilo, poderia facilmente procurar em sua conta.</p><p>O projeto foi baseado no <a target="_blank" href="https://myanimelist.net">MyanimeList</a>, um site onde é possível salvar avaliações de animes de temporadas passadas e que ficam vinculadas a sua conta, então se em algum momento querer relembrar do que achava de tal anime, é possível por uma simples busca na plataforma.</p>',
    },
  },
  {
    id: 'college-data-structures',
    type: PROJECT_TYPE,
    tags: ['python'],
    date: '2020-10-01T10:00:00.000Z',
    title: {
      en: 'Data Structure Algorithms',
      pt: 'Algoritmos de estrutura de dados',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/data-structures`,
    figma: '',
    site: '',
    description: {
      en: 'Repository that contains methods to simulate the concepts of ordering and items in sets learned in data structure.',
      pt: 'Repositório que contém métodos para simular os conceitos de ordenaçãod e itens em conjuntos aprendidos em estrutura de dados.',
    },
    images: ['infixposfix.webp', 'recursion.webp', 'convention.webp', 'hanoitower.webp', 'sorting-algorithms.webp'],
    text: {
      en: '<h2>Introduction</h2><p>These are exercises from Data Structure classes, each of them has its corresponding statement and answer.</p><h2>About</h2><p>1st This is an algorithm that transforms a mathematical equation from infix to postfix form. <a href="http://www.vision.ime.usp.br/~pmiranda/mac122_2s14/aulas/aula13/aula13.html" target="_blank">More information</a></p><p >2nd This is an algorithm that solves equations in infix form.</p><p>3rd Algorithm that performs a potentiation operation using recursion</p><p>4th An algorithm that solves the game <a href="https ://en.wikipedia.org/wiki/Tower_of_Hanoi" target="_blank">Tower of Hanoi</a>.</p><p>5th A collection of 5 sorting algorithms, they are <a href=" https://pt.wikipedia.org/wiki/Bubble_sort" target="_blank">Bubble Sort</a>, <a href="https://pt.wikipedia.org/wiki/Selection_sort" target="_blank ">Selection Sort</a>, <a href="https://pt.wikipedia.org/wiki/Insertion_sort" target="_blank">Insertion Sort</a>, <a href="https:// en.wikipedia.org/wiki/Quicksort" target="_blank">Quick Sort</a> and <a href="https://pt.wikipedia.org/wiki/Comb_sort" target="_blank">Comb Sort </a></p>',
      pt: '<h2>Introdução</h2><p>Esses são exercícios das aulas de Estrutura de dados, cada um deles tem seu enunciado e resposta correspondentes.</p><h2>Sobre</h2><p>1º Este é um algoritmo que transforma uma equação matemática da forma infixa para pósfixa. <a href="http://www.vision.ime.usp.br/~pmiranda/mac122_2s14/aulas/aula13/aula13.html" target="_blank">Mais informações</a></p><p>2º Este é um algoritmo que resolve equações na forma infixa.</p><p>3º Algoritmo que realiza uma operação de potenciação utilizando recursão</p><p>4º Um algoritmo que resolve o jogo <a href="https://en.wikipedia.org/wiki/Tower_of_Hanoi" target="_blank">Torre de Hanoi</a>.</p><p>5º Uma coleção de 5 algoritmos de ordenação, são eles <a href="https://pt.wikipedia.org/wiki/Bubble_sort" target="_blank">Bubble Sort</a>, <a href="https://pt.wikipedia.org/wiki/Selection_sort" target="_blank">Selection Sort</a>, <a href="https://pt.wikipedia.org/wiki/Insertion_sort" target="_blank">Insertion Sort</a>, <a href="https://pt.wikipedia.org/wiki/Quicksort" target="_blank">Quick Sort</a> e <a href="https://pt.wikipedia.org/wiki/Comb_sort" target="_blank">Comb Sort</a></p>',
    },
  },
  {
    id: 'college-ellipse-transformation',
    type: PROJECT_TYPE,
    tags: ['python'],
    date: '2021-10-01T10:00:00.000Z',
    title: {
      en: 'Geometry',
      pt: 'Geometria',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/ellipse-transformation`,
    figma: '',
    site: '',
    description: {
      en: 'Project that demonstrates the possible modifications in a geometric shape learned in geometry and computer graphics classes.',
      pt: 'Projeto que demonstra as possíveis modificações em uma forma geométrica aprendidas nas aulas de geometria e computação gráfica.',
    },
    images: ['overview.gif', 'homepage.webp', 'transformed.webp'],
    text: {
      en: '<h2>Introduction</h2><p>This was a project developed during Computer Graphics classes to demonstrate possible geometric transformations.</p><h2>About</h2><p>Within the project it is possible perform all geometric operations of rotation, translation X and Y, scaling X and Y, shearing X and Y and finally changing the number of vertices of the ellipse.</p>',
      pt: '<h2>Introdução</h2><p>Esse foi um projeto desenvolvido durante as aulas de Computação Gráfica para demonstrar as possíveis transformações geometricas.</p><h2>Sobre</h2><p>Dentro do projeto é possível realizar todas as operações geometricas de rotação, translação X e Y, escalonamento X e Y, cisalhamento X e Y e por último mudar a quantidade de vértices da elipse.</p>',
    },
  },
  {
    id: 'college-image-thresholding',
    type: PROJECT_TYPE,
    tags: ['java'],
    date: '2021-01-01T10:00:00.000Z',
    title: {
      en: 'Image Thresholding',
      pt: 'Limiarização de imagens',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/algorithm-thresholding`,
    figma: '',
    site: '',
    description: {
      en: 'Project that contains several methods to test image thresholding',
      pt: 'Projeto que contém diversos métodos para testar a limiarização de imagens',
    },
    images: ['thumb.webp', 'image-color.webp', 'image-black-white.webp', 'matriz.webp', 'histograma.webp', 'graph.webp'],
    text: {
      en: '<h2>Introduction</h2><p>This project was done during the image processing class. It is a Python script that performs image thresholding.</p><h2>About</h2><p>Thresholding is transforming the image into binary. An image is made up of a set of color values, it can be RGB for example, that is, if we transform these values ​​into 0 or the maximum 255, we can have an image with only black pixels (255,255,255) or white pixels (0,0,0 ), the idea of ​​the project is to create an algorithm to know how to differentiate when to turn the pixel into white or black. It may seem simple, but to generate the cutoff value, there is a lot of math involved.</p>',
      pt: '<h2>Introdução</h2><p>Esse projeto foi feito durante a aula de processamento de imagem. É um script em Python que realiza a limiarização de imagens.</p><h2>Sobre</h2><p>Limiarização é transformar a imagem em binária. Uma imagem é composta por um conjunto de valores de cores, pode ser RGB por exemplo, ou seja se transformarmos esses valores em 0 ou o máximo 255, podemos ter uma imagem com somentes pixels pretos (255,255,255) ou brancos(0,0,0), a ideia do projeto é criar um algoritmo para saber diferenciar quando transformar o pixel em branco ou preto. Pode parecer simples, mas para gerar o valor de corte, tem muita matemática envolvida.</p>',
    },
  },
  {
    id: 'college-lights-out',
    type: PROJECT_TYPE,
    tags: ['java'],
    date: '2021-03-01T10:00:00.000Z',
    title: {
      en: 'Lights Out',
      pt: 'Lights Out',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/lights-out`,
    figma: '',
    site: '',
    description: {
      en: 'Lights Out is a game that needs to turn off all the lights in a matrix, but every time you press a light to turn it off, the adjacent ones light up.',
      pt: 'Lights Out é um jogo que precisa desligar todas as luzes de uma matriz, porém toda vez que aperta uma luz para desliga-la, as adjacentes acendem.',
    },
    images: ['solver-2.webp', 'solver.webp', 'pt-instructions.webp', 'en-instructions.webp'],
    text: {
      en: '<h2>Introduction</h2><p>This project was done in artificial intelligence class and simulates <a target="_blank" href="https://www.ime.usp.br/~slago/IA -Search.pdf">state space search</a>, a very simple and rudimentary method to find the answer you need, which is basically asking the machine to do all the possibilities until it finds the answer you need.</p> <p>The project consists of a system that solves the game <a href="https://en.wikipedia.org/wiki/Lights_Out_(game)" target="_blank"><strong>Light\'s Out< /strong></a>. There is an array of numbers (0-1) or boolean values ​​(true, false) in which when trying to turn off one (clicking on it, changing its value), the adjacent values ​​of that number will also change value, the objective of the game is to turn off all numbers in the matrix.</p>',
      pt: '<h2>Introdução</h2><p>Esse projeto foi feito na aula de inteligência artificial e simula a <a target="_blank" href="https://www.ime.usp.br/~slago/IA-Busca.pdf">busca no espaço de estados</a>, um método bem simples e rudimentar para encontrar a resposta que precisa que é basicamente pedindo para a máquina fazer todas as possibilidades até encontrar a resposta que precisa.</p><p>O projeto consiste em um sistema que resolve o jogo <a href="https://en.wikipedia.org/wiki/Lights_Out_(game)" target="_blank"><strong>Light\'s Out</strong></a>. Nele há uma matriz de números (0-1) ou valores booleanos (true, false) em que ao tentar desligar um (clicando nele, trocando seu valor), os valores adjacentes desse número também trocarão de valor, o objetivo do jogo é desligar todos os números da matriz.</p>',
    },
  },
  {
    id: 'college-linear-systeam-solver',
    type: PROJECT_TYPE,
    tags: ['python'],
    date: '2021-10-01T10:00:00.000Z',
    title: {
      en: 'Resolution of linear systems',
      pt: 'Resolução de sistemas lineares',
    },
    github: `${OWNER_CONFIGS.github_profile}/college-projects/tree/main/algorithm-linear-system-solver`,
    figma: '',
    site: '',
    description: {
      en: 'Algorithm for solving linear systems in Python.',
      pt: 'Algoritmo para resolução de sistemas lineares em python.',
    },
    images: ['code.webp', 'result.webp', 'result-2.webp', 'result-3.webp', 'result-4.webp'],
    text: {
      en: '<h2>Introduction</h2><p>This project was done in Numerical Calculus class to solve a linear system of any size.</p><h2>About</h2><p>An algorithm made in Python that solves linear systems.</p>',
      pt: '<h2>Introdução</h2><p>Esse projeto foi feito na aula de Cálculo numérico para resolver um sistema linear de qualquer tamanho.</p><h2>Sobre</h2><p>Um algoritmo feito em Python que resolve sistemas lineares.</p>',
    },
  },
]
