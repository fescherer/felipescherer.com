import { LocaleText } from '@/i18n-config'
import { LucideAlertCircle, LucideBrainCog, LucideCheckCircle, LucideHeartHandshake, LucideHelpingHand, LucideListChecks, LucideMessageSquare, LucidePalette, LucideUserCheck, LucideUsers } from 'lucide-react'
import { ReactNode } from 'react'

type TSoftSkill = {
  icon: ReactNode
  title: LocaleText
  text: LocaleText
}

export const SOFT_SKILLS: TSoftSkill[] = [
  {
    icon: <LucideListChecks size={36} />,
    title: {
      en: 'Organized',
      pt: 'Organizado',
    },
    text: {
      en: 'Being organized allows me to manage multiple projects efficiently, prioritize tasks and meet deadlines. It helps me maintain careful and ensure quality in every detail of my work.',
      pt: 'Sendo organizado me permite admistrar múltiplos projetos eficientemente, priorizando tarefas e prazos. Me ajuda a me manter atento e garante qualidade em todos os detalhes do meu trabalho.',
    },
  },
  {
    icon: <LucideCheckCircle size={36} />,
    title: {
      en: 'Problem Solving',
      pt: 'Resolução de Problemas',
    },
    text: {
      en: 'Through my experience, I have learned to tackle challenges like debugging code, optimizing performance, and designing efficient systems. Strong problem-solving skills are essential for navigating these obstacles successfully.',
      pt: 'Através da minha experiência, aprendi a investir em desafios como corrigir código, otimizar performance e desenvolver sistemas eficientes. Habilidades fortes de resolver problemas são essenciais para navegar nesses obstáculos com sucesso.',
    },
  },
  {
    icon: <LucideUsers size={36} />,
    title: {
      en: 'Collaboration',
      pt: 'Colaboração',
    },
    text: {
      en: 'I thrive in team environments, valuing diverse perspectives and open communication. I work seamlessly with developers, designers, and stakeholders, contributing effectively to Agile or Scrum projects and fostering a positive, productive dynamic.',
      pt: 'Eu me criei em ambientes com times, valorizo diversas perspectivas e sou aberto à comunicação. Trabalho perfeitamente com desenvolvedores, designers e patrocinadores, contribuindo efetivamente para projetos Agile ou Scrum e promovendo positividade e produtividade dinâmica.',
    },
  },
  {
    icon: <LucideBrainCog size={36} />,
    title: {
      en: 'Adaptability & Continuous Learning',
      pt: 'Adaptabilidade & Aprendizado Contínuo',
    },
    text: {
      en: 'I stay up in the ever-evolving tech landscape, quickly adapting to new tools, languages, and frameworks. Committed to continuous learning, I embrace interesting trends to keep my skills sharp and relevant.',
      pt: 'Eu estou atento na evolução contínua da tecnologia, rapidamente adaptando para novas ferramentas, linguagens e frameworks. Empenhado para o aprendizado contínuo, eu abraço tendências interessantes para continuar com minhas habilidades afiadas e relevantes.',
    },
  },
  {
    icon: <LucideAlertCircle size={36} />,
    title: {
      en: 'Attention to Detail',
      pt: 'Atenção aos Detalhes',
    },
    text: {
      en: 'I bring precision to coding, recognizing that even minor errors can lead to major problems. My keen attention to detail ensures accuracy in writing, debugging, and reviewing code for a great work.',
      pt: 'Eu trago precisão para meu código, reconhecendo que o menor dos erros pode levar a problemas maiores. Minha atenção aos detalhes garante precisão na escrita, correção e revisão de código para um bom trabalho.',
    },
  },
  {
    icon: <LucidePalette size={36} />,
    title: {
      en: 'Creativity',
      pt: 'Criatividade',
    },
    text: {
      en: 'I excel at thinking outside the box to develop innovative solutions, design intuitive and user-friendly interfaces. Creativity drives my work in UX/UI design, game development, and crafting engaging digital experiences.',
      pt: 'Sou excelente em pensar fora da caixa para desenvolver soluções inovadoras, design intuitivo e interfaces para usuário. Criatividade conduz meu trabalho em design UX/UI, desenvolvimento de jogos e elaboração engajante de experiência digital.',
    },
  },
  {
    icon: <LucideHeartHandshake size={36} />,
    title: {
      en: 'Empathy',
      pt: 'Empatia',
    },
    text: {
      en: 'I prioritize understanding user needs and pain points, which enables me to design intuitive and accessible products. This empathetic approach is crucial in enhancing user experience (UX) and user interface (UI) design.',
      pt: 'Eu priorizo o conhecimento das necessidades e dores do usuário, o que me habilita a desenvolver produtos intuitivos e acessíveis. Essa abordagem empática é crucial para melhor o design da experiência do usuário (UX) e interface do usuário (UI). ',
    },
  },
  {
    icon: <LucideHelpingHand size={36} />,
    title: {
      en: 'Teaching and help others',
      pt: 'Ensinar e ajudar outros',
    },
    text: {
      en: 'I actively support others by sharing coding principles, explaining concepts, and helping in general. This help me create a great environment and also learn while teaching.',
      pt: 'Eu apoio ativamente outros compartilhando princípios de código, explicando conceitos e ajudando no geral. Isso me permite criar um ótimo ambiente e também aprendo enquanto ensino.',
    },
  },
  {
    icon: <LucideMessageSquare size={36} />,
    title: {
      en: 'Adaptability to Feedback',
      pt: 'Adaptabilidade para Feedback',
    },
    text: {
      en: 'I\'m open to feedback from peers, clients, and users, seeing it as a chance to grow and improve. Being adaptable to constructive criticism helps me thrive in the ever-changing tech.',
      pt: 'Sou aberto a feedback de outros pares, clientes e usuários, vendo isso como chance de crescer e melhorar. Sendo adaptavél para critícas construtivas me ajuda a trilhar no caminho da constante mudança tecnologica.',
    },
  },
  {
    icon: <LucideUserCheck size={36} />,
    title: {
      en: 'Client concerned',
      pt: 'Preocupado com cliente',
    },
    text: {
      en: 'I prioritize understanding client needs and expectations, ensuring that my work aligns with their vision and objectives. By maintaining open communication and actively seeking feedback, I build strong relationships and deliver results that exceed client satisfaction.',
      pt: 'Eu priorizo o entendimento das necessidades e expectativas do cliente, garantindo que meu trabalho alinhe com sua visão e objetivos. Ao manter comunicação aberta e ativa, procurando feedbacks, eu construo relações fortes e entrego resultados que superam a satisfação do cliente',
    },
  },
]
