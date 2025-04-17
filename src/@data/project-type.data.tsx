export type TProjectType = 'original' | 'coding-lesson' | 'coding-week' | 'college-lesson' | 'drawing' | 'snippets'

export interface IProjectType {
  id: TProjectType
  title: string
  color: {
    bg: string
    text: string
  }
}

export type TProjectTypeObj = {
  [key: string]: IProjectType
}

export const PROJECT_TYPE: TProjectTypeObj = {
  'original': {
    id: 'original',
    title: 'Original',
    color: {
      bg: '#00C06B',
      text: '#04030F',
    },
  },
  'college-lesson': {
    id: 'college-lesson',
    title: 'College Lesson',
    color: {
      bg: '#EE0A0A',
      text: '#FFFFFF',
    },
  },
  'coding-week': {
    id: 'coding-week',
    title: 'Coding Week',
    color: {
      bg: '#F6D319',
      text: '#04030F',
    },
  },
  'coding-lesson': {
    id: 'coding-lesson',
    title: 'Coding Lesson',
    color: {
      bg: '#8F47EC',
      text: '#FFFFFF',
    },
  },
  'drawing': {
    id: 'drawing',
    title: 'Drawing',
    color: {
      bg: '#FF28CF',
      text: '#FFFFFF',
    },
  },
  'snippets': {
    id: 'snippets',
    title: 'Snippets',
    color: {
      bg: '#3272EF',
      text: '#FFFFFF',
    },
  },
}

export const AVAILABLE_TYPE_PROJECTS: TProjectType[] = Object.keys(PROJECT_TYPE) as TProjectType[]
export const AVAILABLE_TYPE_PROJECTS_CONTENT = Object.values(PROJECT_TYPE)

export const TYPE_CODING_LESSON: IProjectType = PROJECT_TYPE['coding-lesson']
export const TYPE_CODING_WEEK: IProjectType = PROJECT_TYPE['coding-week']
export const TYPE_COLLEGE_LESSON: IProjectType = PROJECT_TYPE['college-lesson']
export const TYPE_ORIGINAL: IProjectType = PROJECT_TYPE['original']
