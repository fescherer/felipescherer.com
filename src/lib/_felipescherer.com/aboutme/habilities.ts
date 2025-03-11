import { IHability } from '@/@types'

const imagePath = '/images/logos'

export const HABILITIES_DATA_ENUM = {
  'css': 'css',
  'figma': 'figma',
  'firebase': 'firebase',
  'html': 'html',
  'java': 'java',
  'javascript': 'javascript',
  'markdown': 'markdown',
  'mui': 'mui',
  'react': 'react',
  'nextjs': 'nextjs',
  'photoshop': 'photoshop',
  'python': 'python',
  'react-query': 'react-query',
  'sass': 'sass',
  'tailwind': 'tailwind',
  'turborepo': 'turborepo',
  'angular': 'angular',
}

export const HABILITIES_DATA: IHability[] = [
  {
    id: HABILITIES_DATA_ENUM.css,
    icon: `${imagePath}/css.svg`,
    title: 'CSS 3',
    text: {
      en: 'Cascading Style Sheets (CSS). It is an essential skill for frontend developers, a style sheet language that serves mostly to style HTML code. It become like a pattern to style stuff.',
      pt: 'Cascading Style Sheets (CSS). É uma habilidade essencial para qualquer programador frontend, uma linguagem de folha de estilo que serve para estilizar o código HTML. Tão conhecida e usada que é um padrão web.',
    },
    doc: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    category: 'css',
    short_description: {
      en: 'Style HTML or XML document',
      pt: 'Estilize documento HTML or XML',
    },
    isFavorite: true,
  },
  {
    id: HABILITIES_DATA_ENUM.figma,
    icon: `${imagePath}/figma.svg`,
    title: 'Figma',
    text: {
      en: 'Design tool used to create amazing designs, prototypes and collaborative platform. It is amazing and really useful for developers with easy integration of translations to CSS.',
      pt: 'Ferramenta de design usada para criar designs, protótipos e plataformas colaborativas incríveis. É incrível e muito útil para desenvolvedores com fácil integração de traduções para CSS',
    },
    doc: 'https://www.figma.com/design-overview',
    category: 'software',
    short_description: {
      en: 'Design and create interfaces',
      pt: 'Design e crie suas interfaces',
    },
    isFavorite: true,
  },
  {
    id: HABILITIES_DATA_ENUM.firebase,
    icon: `${imagePath}/firebase.svg`,
    title: 'Firebase',
    text: {
      en: 'Firebase is a platform to help developers to create apps. It can serve a lot of services but I personally used most for Google Analytics, Cloud Firestore (A NoSQL document database) and Authentification (Single Sign On, SSO integration with a lot of providers like Facebook, Google, Apple, Email, Twitter, Github and lot more).',
      pt: 'Firebase é uma plataforma para ajudar desenvolvedores a criar aplicativos. Ele pode oferecer muitos serviços, mas eu pessoalmente usei mais para Google Analytics, Cloud Firestore (um banco de dados de documentos NoSQL) e Autenticação (Single Sign On, integração SSO com vários provedores como Facebook, Google, Apple, Email, Twitter, Github e muito mais).',
    },
    doc: 'https://firebase.google.com',
    category: 'other',
    short_description: {
      en: 'Set of backend services like database and authentication',
      pt: 'Conjunto de serviços de backend como banco de dados e autenticação',
    },
    isFavorite: true,
  },
  {
    id: HABILITIES_DATA_ENUM.html,
    icon: `${imagePath}/html.svg`,
    title: 'HTML',
    text: {
      en: 'HTML(HyperText Markup Language) is a pattern to create web pages using structure blocks called `tags`. It is most basic tecnology to learn as frontend developer, but it is always good to study, because choosing the best tag for semantic is not a out of box ideia.',
      pt: 'HTML (HyperText Markup Language) é um padrão para criar páginas da web usando blocos de estrutura chamados `tags`. É a tecnologia mais básica para aprender como desenvolvedor frontend, mas é sempre bom estudar, pois escolher a melhor tag para semântica não é uma ideia fora da caixa.',
    },
    doc: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    category: 'other',
    short_description: {
      pt: 'Markup language for Web pages',
      en: 'Linguagem de marcação para páginas da Web',
    },
    isFavorite: true,
  },
  {
    id: HABILITIES_DATA_ENUM.java,
    icon: `${imagePath}/java.svg`,
    title: 'Java',
    text: {
      en: 'Java is an object oriented programming language that can be used to create a lot of types of applications most likely because the Java Virtual Machine, a platform to run the code in many devices, because of that, Java can run in almost all devices from smartphones,computers, watches and even tv apps.',
      pt: 'Java é uma linguagem de programação orientada a objetos que pode ser usada para criar vários tipos de aplicativos, provavelmente porque a Java Virtual Machine, uma plataforma para executar o código em muitos dispositivos, por causa disso, Java pode ser executado em quase todos os dispositivos de smartphones, computadores, relógios e até aplicativos de TV.',
    },
    doc: 'https://docs.oracle.com/javase/tutorial',
    category: 'other',
    short_description: {
      en: 'A high-level, class-based, object-oriented programming language',
      pt: 'Uma linguagem de programação de alto nível, baseada em classes e orientada a objetos',
    },
    isFavorite: false,
  },
  {
    id: HABILITIES_DATA_ENUM.javascript,
    icon: `${imagePath}/javascript.svg`,
    title: 'Javascript',
    text: {
      en: 'Javascript is a lightweight interpreted programming language. It is most used for creating Web Pages scripts, so it is an essential part of the web and it is a must have knowledge of web developers.',
      pt: 'Javascript é uma linguagem de programação interpretada leve. É mais usado para criar scripts de páginas da Web, por isso é uma parte essencial da web e é um conhecimento obrigatório para desenvolvedores web.',
    },
    doc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    category: 'javascript',
    short_description: {
      en: 'A interpreted programming language',
      pt: 'Uma linguagem de programação interpretada',
    },
    isFavorite: true,
  },
  {
    id: HABILITIES_DATA_ENUM.markdown,
    icon: `${imagePath}/markdown.svg`,
    title: 'Markdown',
    text: {
      en: 'Markdown is a simple markup language to convert into pure HTML. It is most used to create files like README, writing blogs or articles in internet forums.',
      pt: 'Markdown é uma linguagem de marcação simples para converter em HTML puro. É mais utilizado para criar arquivos como README, escrever blogs ou artigos em fóruns da internet.',
    },
    doc: 'https://pt.wikipedia.org/wiki/Markdown',
    category: 'other',
    short_description: {
      en: 'Create formatted text using a plain-text editor',
      pt: 'Crie texto formatado usando um editor de texto simples',
    },
    isFavorite: true,
  },
  {
    id: HABILITIES_DATA_ENUM.mui,
    icon: `${imagePath}/mui.svg`,
    title: 'Material UI',
    text: {
      en: 'Material UI is a component library for React (But it has for other frameworks too) that follows the Material Design, the Google open source design system. It has a lot of components and can be used to increase productivity.',
      pt: 'Material UI é uma biblioteca de componentes para React (mas também para outros frameworks) que segue o Material Design, o sistema de design de código aberto do Google. Possui muitos componentes e pode ser usado para aumentar a produtividade.',
    },
    doc: 'https://mui.com',
    category: 'javascript',
    short_description: {
      en: 'React library that implements Google\'s Material Design',
      pt: 'Biblioteca React que implementa o Material Design do Google',
    },
    isFavorite: false,
  },
  {
    id: HABILITIES_DATA_ENUM.react,
    icon: `${imagePath}/react.svg`,
    title: 'React',
    text: {
      en: 'React is one of the most popular library for Javascript, created by Facebook, it follows the reactive app pattern, by controlling the DOM, React can make changes in the UI without refreshing the page, like old forms did, remember? React offers much more features that you can find in its documentation.',
      pt: 'React é uma das bibliotecas mais populares para Javascript, criada pelo Facebook, segue o padrão de aplicativo reativo, controlando o DOM, o React pode fazer alterações na UI sem atualizar a página, como faziam os formulários antigos, lembra? O React oferece muito mais recursos que você pode encontrar em sua documentação.',
    },
    doc: 'https://react.dev/reference/react',
    category: 'javascript',
    short_description: {
      en: 'JavaScript library for building user interfaces based on components JavaScript library for building user interfaces based on components',
      pt: 'Biblioteca JavaScript para construir interfaces de usuário baseadas em componentes Biblioteca JavaScript para construir interfaces de usuário baseadas em componentes',
    },
    isFavorite: true,
  },
  {
    id: HABILITIES_DATA_ENUM.nextjs,
    icon: `${imagePath}/nextjs.svg`,
    title: 'Next JS',
    text: {
      en: 'NextJS is a fullstack framework made for React that can add a lot of features like routes, SEO, optimization of links and images and can even do some backend tasks. It is a complete framework that has a lot of suport, easy learn curve and easy deploy because integration with Vercel, I love it and use for most of my projects.',
      pt: 'NextJS é um framework fullstack feito para React que pode adicionar muitos recursos como rotas, SEO, otimização de links e imagens e pode até realizar algumas tarefas de backend. É um framework completo que tem muito suporte, fácil curva de aprendizado e fácil implantação porque integração com Vercel, adoro e uso na maioria dos meus projetos.',
    },
    doc: 'https://nextjs.org/docs',
    category: 'javascript',
    short_description: {
      en: 'React framework with server-side rendering and static website generation',
      pt: 'Estrutura React com renderização no lado do servidor e geração de site estático',
    },
    isFavorite: true,
  },
  {
    id: HABILITIES_DATA_ENUM.photoshop,
    icon: `${imagePath}/photoshop.svg`,
    title: 'Photoshop',
    text: {
      en: 'Photoshop is an well known software to edit, create and generate photos, drawing and gifs. It is one of the most popular softwares for its purposes and with every new version, comes something really good like AI, Artboards and much more. Photoshop is an incredible tool to use, and I been using for drawings, edit photos and even automate some these edits.',
      pt: 'Photoshop é um software bastante conhecido para editar, criar e gerar fotos, desenhos e gifs. É um dos softwares mais populares para seus propósitos e a cada nova versão vem algo realmente bom como IA, pranchetas e muito mais. O Photoshop é uma ferramenta incrível de usar, e tenho usado para desenhar, editar fotos e até automatizar algumas dessas edições.',
    },
    doc: 'https://www.adobe.com/products/photoshop.html',
    category: 'software',
    short_description: {
      en: 'A raster graphics editor',
      pt: 'Um editor gráfico raster',
    },
    isFavorite: false,
  },
  {
    id: HABILITIES_DATA_ENUM.python,
    icon: `${imagePath}/python.svg`,
    title: 'Python',
    text: {
      en: 'Python is an incredible programming language. It supports multiple programming language paradigms like structured, object-oriented and function programming. It is really good to code in Python because of its code readability and become very popular in the community, specially in the data analysis, using machine learning.',
      pt: 'Python é uma linguagem de programação incrível. Ele suporta vários paradigmas de linguagem de programação, como programação estruturada, orientada a objetos e de funções. É muito bom codificar em Python devido à sua legibilidade e se tornou muito popular na comunidade, principalmente na análise de dados, usando aprendizado de máquina.',
    },
    doc: 'https://www.python.org/doc',
    category: 'other',
    short_description: {
      en: 'A high-level, general-purpose programming language',
      pt: 'Uma linguagem de programação de alto nível e uso geral',
    },
    isFavorite: false,
  },
  {
    id: HABILITIES_DATA_ENUM['react-query'],
    icon: `${imagePath}/react-query.svg`,
    title: 'React Query',
    text: {
      en: 'React Query is a powerfull library for Javascript frameworks for asynchronous state management. It helps a lot when we need to make calls to API on client and now with the latest version, we can make even in servers.',
      pt: 'React Query é uma biblioteca poderosa para estruturas Javascript para gerenciamento de estado assíncrono. Ajuda muito quando precisamos fazer chamadas para API no cliente e agora com a versão mais recente podemos fazer até em servidores.',
    },
    doc: 'https://tanstack.com/query/v3/docs/react/overview',
    category: 'javascript',
    short_description: {
      en: 'Powerful asynchronous state management',
      pt: 'Poderoso gerenciamento de estado assíncrono',
    },
    isFavorite: false,
  },
  {
    id: HABILITIES_DATA_ENUM.sass,
    icon: `${imagePath}/sass.svg`,
    title: 'SASS',
    text: {
      en: 'SASS is a stylesheet language that is compiled to CSS. It allows you to use variables, nested rules, mixins, functions and more. It is very useful and can make the CSS code much more readable and enjoyable to code.',
      pt: 'SASS é uma linguagem de folha de estilo compilada em CSS. Ele permite que você use variáveis, regras aninhadas, mixins, funções e muito mais. É muito útil e pode tornar o código CSS muito mais legível e agradável de codificar.',
    },
    doc: 'https://sass-lang.com/documentation',
    category: 'css',
    short_description: {
      en: 'CSS with superpowers',
      pt: 'CSS com superpoderes',
    },
    isFavorite: false,
  },
  {
    id: HABILITIES_DATA_ENUM.tailwind,
    icon: `${imagePath}/tailwind.svg`,
    title: 'Tailwind CSS',
    text: {
      en: 'Tailwind CSS is a CSS utility class framework. With it you can write CSS as classes like "flex" means "display: flex", it is very similar to Bootstrap, but better because you can do so much stuff with Tailwind like create components, make the builded CSS file a way smaller (It just compiles the classes used in the project), make a simple design systeam (Or use the default that Tailwind gives to you) and of course create or add plugins from comunity. Tailwind is incredible and my favorite way to write CSS.',
      pt: 'Tailwind CSS é uma estrutura de classe de utilitário CSS. Com ele você pode escrever CSS como classes como "flex" significa "display: flex", é muito semelhante ao Bootstrap, mas melhor porque você pode fazer muitas coisas com o Tailwind como criar componentes, tornar o arquivo CSS construído bem menor ( Basta compilar as classes usadas no projeto), fazer um sistema de design simples (ou usar o padrão que o Tailwind fornece) e, claro, criar ou adicionar plugins da comunidade. Tailwind é incrível e minha maneira favorita de escrever CSS.',
    },
    doc: 'https://tailwindcss.com/docs/installation',
    category: 'css',
    short_description: {
      en: 'A utility-first CSS framework packed with classes',
      pt: 'Uma estrutura CSS utilitária repleta de classes',
    },
    isFavorite: true,
  },
  {
    id: HABILITIES_DATA_ENUM.turborepo,
    icon: `${imagePath}/turborepo.svg`,
    title: 'Turborepo',
    text: {
      en: 'Turborepo is a high-performance build system for JavaScript and TypeScript codebases. I personally used this to make monorepos that share some configs or share libraries in node modules. My experience was good and if sometime I decided to make a design systeam, I think this is the perfect tool to use.',
      pt: 'Turborepo é um sistema de construção de alto desempenho para bases de código JavaScript e TypeScript. Eu pessoalmente usei isso para criar monorepos que compartilham algumas configurações ou bibliotecas em módulos de nó. Minha experiência foi boa e se algum dia eu decidisse fazer um design systemtime, acho que essa é a ferramenta perfeita para usar.',
    },
    doc: 'https://turbo.build/repo/docs',
    category: 'other',
    short_description: {
      en: 'Turbo is an incremental bundler and build system optimized',
      pt: 'Turbo é um empacotador incremental e sistema de compilação otimizado',
    },
    isFavorite: false,
  },
  {
    id: HABILITIES_DATA_ENUM.angular,
    icon: `${imagePath}/angular.svg`,
    title: 'Angular',
    text: {
      en: 'Angular is a Javascript framework for creating efficient and sophisticated single-page apps. Angular uses classes to create components, so if you like Java, this is very similar way to code. Angular is used to create single page apps which means interactive pages that are controlled by Javascript using the DOM, is really good because most of the stuff you need is already inside Angular, like routes, which is very different from React for example.',
      pt: 'Angular é uma estrutura Javascript para criar aplicativos de página única eficientes e sofisticados. Angular usa classes para criar componentes, então se você gosta de Java, esta é uma forma muito semelhante ao código. Angular é usado para criar aplicativos de página única, o que significa páginas interativas controladas por Javascript usando o DOM, é muito bom porque a maior parte do que você precisa já está dentro do Angular, como rotas, que é muito diferente do React, por exemplo.',
    },
    doc: 'https://angular.io/docs',
    category: 'javascript',
    short_description: {
      en: 'A single-page web application framework',
      pt: 'Uma estrutura de aplicativo da web de página única',
    },
    isFavorite: false,
  },
]
