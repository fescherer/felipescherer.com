import { HABILITIES_DATA } from '@/utils/aboutme/habilities'
import { ToolkitList } from './components'
import { IHability } from '@/types'

function sortByIsFavorite(array: IHability[]) {
  return array.sort(function (x, y) {
    if (x.isFavorite && !y.isFavorite) {
      return -1
    }
    if (!x.isFavorite && y.isFavorite) {
      return 1
    }
    return 0
  })
}

const CSS_TOOLS = sortByIsFavorite(HABILITIES_DATA.filter(hability => hability.category === 'css'))
const JAVASCRIPT_TOOLS = sortByIsFavorite(HABILITIES_DATA.filter(hability => hability.category === 'javascript'))
const OTHER_TOOLS = sortByIsFavorite(HABILITIES_DATA.filter(hability => hability.category === 'other'))
const SOFTWARE_TOOLS = sortByIsFavorite(HABILITIES_DATA.filter(hability => hability.category === 'software'))

export function ToolkitSection() {
  return (
    <div className="flex flex-col gap-8">
      <ToolkitList title="CSS toolkit" tools={JAVASCRIPT_TOOLS} />
      <ToolkitList title="CSS toolkit" tools={CSS_TOOLS} />
      <ToolkitList title="CSS toolkit" tools={OTHER_TOOLS} />
      <ToolkitList title="CSS toolkit" tools={SOFTWARE_TOOLS} />
    </div>
  )
}
