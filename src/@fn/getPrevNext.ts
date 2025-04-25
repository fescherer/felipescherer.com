import { IProject } from '@/@data/projects.data'

export function getPrevNext(arr: IProject[], project: IProject) {
  let index = arr.indexOf(project)

  if (index === -1) return [arr[0], arr[1]]

  let prevItem = index === 0 ? arr[arr.length - 1] : arr[index - 1]
  let nextItem = index === arr.length - 1 ? arr[0] : arr[index + 1]

  return [prevItem, nextItem]
}
