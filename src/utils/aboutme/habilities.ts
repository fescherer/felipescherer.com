import { IHability } from '@/types'

const imagePath = '/images/logos'

export const HABILITIES_DATA: IHability[] = [
  {
    id: 'css',
    icon: `${imagePath}/css.svg`,
    title: 'CSS 3',
    text: 'Cascading Style Sheets (CSS). It is an essential skill for frontend developers, a style sheet language that serves mostly to style HTML code. It become like a pattern to style stuff.',
    doc: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    id: 'figma',
    icon: `${imagePath}/figma.svg`,
    title: 'Figma',
    text: 'Design tool used to create amazing designs, prototypes and collaborative platform. It is amazing and really useful for developers with easy integration of translations to CSS.',
    doc: 'https://www.figma.com/design-overview',
  },
  {
    id: 'firebase',
    icon: `${imagePath}/firebase.svg`,
    title: 'Firebase',
    text: 'Firebase is a platform to help developers to create apps. It can serve a lot of services but I personally used most for Google Analytics, Cloud Firestore (A NoSQL document database) and Authentification (Single Sign On, SSO integration with a lot of providers like Facebook, Google, Apple, Email, Twitter, Github and lot more).',
    doc: 'https://firebase.google.com',
  },
  {
    id: 'html',
    icon: `${imagePath}/html.svg`,
    title: 'HTML',
    text: 'HTML(HyperText Markup Language) is a pattern to create web pages using structure blocks called `tags`. It is most basic tecnology to learn as frontend developer, but it is always good to study, because choosing the best tag for semantic is not a out of box ideia.',
    doc: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    id: 'java',
    icon: `${imagePath}/java.svg`,
    title: 'Java',
    text: 'Java is an object oriented programming language that can be used to create a lot of types of applications most likely because the Java Virtual Machine, a platform to run the code in many devices, because of that, Java can run in almost all devices from smartphones,computers, watches and even tv apps.',
    doc: 'https://docs.oracle.com/javase/tutorial',
  },
  {
    id: 'javascript',
    icon: `${imagePath}/javascript.svg`,
    title: 'Javascript',
    text: 'Javascript is a lightweight interpreted programming language. It is most used for creating Web Pages scripts, so it is an essential part of the web and it is a must have knowledge of web developers.',
    doc: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    id: 'markdown',
    icon: `${imagePath}/markdown.svg`,
    title: 'Markdown',
    text: 'Markdown is a simple markup language to convert into pure HTML. It is most used to create files like README, writting blogs or articles in internet forums.',
    doc: 'https://pt.wikipedia.org/wiki/Markdown',
  },
  {
    id: 'mui',
    icon: `${imagePath}/mui.svg`,
    title: 'Material UI',
    text: 'Material UI is a component library for React (But it has for other frameworks too) that follows the Material Design, the Google open source design system. It has a lot of components and can be used to increase productivity.',
    doc: 'https://mui.com',
  },
  {
    id: 'react',
    icon: `${imagePath}/react.svg`,
    title: 'React',
    text: 'React is one of the most popular library for Javascript, created by Facebook, it follows the reactive app pattern, by controlling the DOM, React can make changes in the UI without refreshing the page, like old forms did, remember? React offers much more features that you can find in its documentation.',
    doc: 'https://react.dev/reference/react',
  },
  {
    id: 'nextjs',
    icon: `${imagePath}/nextjs.svg`,
    title: 'Next JS',
    text: 'NextJS is a fullstack framework made for React that can add a lot of features like routes, SEO, optimization of links and images and can even do some backend tasks. It is a complete framework that has a lot of suport, easy learn curve and easy deploy because integration with Vercel, I love it and use for most of my projects.',
    doc: 'https://nextjs.org/docs',
  },
  {
    id: 'photoshop',
    icon: `${imagePath}/photoshop.svg`,
    title: 'Photoshop',
    text: 'Photoshop is an well known software to edit, create and generate photos, drawing and gifs. It is one of the most popular softwares for its purposes and with every new version, comes something really good like AI, Artboards and much more. Photoshop is an incredible tool to use, and I been using for drawings, edit photos and even automate some these edits.',
    doc: 'https://www.adobe.com/products/photoshop.html',
  },
  {
    id: 'python',
    icon: `${imagePath}/python.svg`,
    title: 'Python',
    text: 'Python is an incredible programming language. It supports multiple programming language paradigms like structured, object-oriented and function programming. It is really good to code in Python because of its code readability and become very popular in the community, specially in the data analysis, using machine learning.',
    doc: 'https://www.python.org/doc',
  },
  {
    id: 'react-query',
    icon: `${imagePath}/react-query.svg`,
    title: 'React Query',
    text: 'React Query is a powerfull library for Javascript frameworks for asynchronous state management. It helps a lot when we need to make calls to API on client and now with the latest version, we can make even in servers.',
    doc: 'https://tanstack.com/query/v3/docs/react/overview',
  },
  {
    id: 'sass',
    icon: `${imagePath}/sass.svg`,
    title: 'SASS',
    text: 'SASS is a stylesheet language that is compiled to CSS. It allows you to use variables, nested rules, mixins, functions and more. It is very useful and can make the CSS code much more readable and enjoyable to code.',
    doc: 'https://sass-lang.com/documentation',
  },
  {
    id: 'tailwind',
    icon: `${imagePath}/tailwind.svg`,
    title: 'Tailwind CSS',
    text: 'Tailwind CSS is a CSS utility class framework. With it you can write CSS as classes like "flex" means "display: flex", it is very similar to Bootstrap, but better because you can do so much stuff with Tailwind like create components, make the builded CSS file a way smaller (It just compiles the classes used in the project), make a simple design systeam (Or use the default that Tailwind gives to you) and of course create or add plugins from comunity. Tailwind is incredible and my favorite way to write CSS.',
    doc: 'https://tailwindcss.com/docs/installation',
  },
  {
    id: 'turborepo',
    icon: `${imagePath}/turborepo.svg`,
    title: 'Turborepo',
    text: 'Turborepo is a high-performance build system for JavaScript and TypeScript codebases. I personally used this to make monorepos that share some configs or share libraries in node modules. My experience was good and if sometime I decided to make a design systeam, I think this is the perfect tool to use.',
    doc: 'https://turbo.build/repo/docs',
  },
  {
    id: 'angular',
    icon: `${imagePath}/angular.svg`,
    title: 'Angular',
    text: 'Angular is a Javascript framework for creating efficient and sophisticated single-page apps. Angular uses classes to create components, so if you like Java, this is very similar way to code. Angular is used to create single page apps which means interactive pages that are controlled by Javascript using the DOM, is really good because most of the stuff you need is already inside Angular, like routes, which is very different from React for example.',
    doc: 'https://angular.io/docs',
  },
]