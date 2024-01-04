export type TTag = 'react' | 'figma' | 'next' | 'css' | 'html' | 'javascript' | 'angular' | 'python' | 'algorithm' | 'java' | 'linux' | 'uml' | 'backend' | 'fast-api' | 'nextjs' | 'p5' | 'game' | 'react-native' | 'java-spring' | 'firebase' | 'ux' | 'ui' | 'regex' | 'vite'

export type TProjectType = 'original' | 'coding-lesson' | 'coding-week' | 'college-lesson'

export interface ITextLanguage {
  pt?: string
  en?: string
}
export interface IProject {
  id: string
  type: TProjectType
  tags: TTag[]
  title: ITextLanguage
  description: ITextLanguage
  date: string
  github: string
  figma: string
  site: string
  images: string[]
  text: ITextLanguage
}
