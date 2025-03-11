import { IProject } from '@/@types'

export function getProjectsSortedByDate(ProjectA: IProject, ProjectB: IProject) {
  const dateProjectA = new Date(ProjectA?.date)
  const dateProjectB = new Date(ProjectB?.date)

  if (dateProjectA > dateProjectB)
    return -1

  if (dateProjectA < dateProjectB)
    return 1

  return 0
}
