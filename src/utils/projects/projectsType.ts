import { IType } from '@/types'

type TProjectTypeObj = {
  [key: string]: IType
}

export const PROJECTS_TYPES: TProjectTypeObj = {
  'original': {
    id: 'original',
    title: {
      en: 'Original',
    },
    color: {
      bg: '#00C06B',
      text: '#04030F',
    },
  },
  'college-lesson': {
    id: 'college-lesson',
    title: {
      en: 'College Lesson',
    },
    color: {
      bg: '#EE0A0A',
      text: '#FFFFFF',
    },
  },
  'coding-week': {
    id: 'coding-week',
    title: {
      en: 'Coding Week',
    },
    color: {
      bg: '#F6D319',
      text: '#04030F',
    },
  },
  'coding-lesson': {
    id: 'coding-lesson',
    title: {
      en: 'Coding Lesson',
    },
    color: {
      bg: '#8F47EC',
      text: '#FFFFFF',
    },
  },
  'drawing': {
    id: 'drawing',
    title: {
      en: 'Drawing',
    },
    color: {
      bg: '#FF28CF',
      text: '#FFFFFF',
    },
  },
  'snippets': {
    id: 'snippets',
    title: {
      en: 'Snippets',
    },
    color: {
      bg: '#3272EF',
      text: '#FFFFFF',
    },
  },
}
