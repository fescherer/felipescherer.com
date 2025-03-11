import { TProjectType } from '@/@types'
import { CODING_LESSON_PROJECTS } from './coding-lesson'
import { CODING_WEEK_PROJECTS } from './coding-week'
import { COLLEGE_LESSON_PROJECTS } from './college-lesson'
import { ORIGINAL_PROJECTS } from './original'

export const PROJECTS = {
  'original': ORIGINAL_PROJECTS,
  'college-lesson': COLLEGE_LESSON_PROJECTS,
  'coding-week': CODING_WEEK_PROJECTS,
  'coding-lesson': CODING_LESSON_PROJECTS,
}

export const AVAILABLE_TYPE_PROJECTS: TProjectType[] = Object.keys(PROJECTS) as TProjectType[]
