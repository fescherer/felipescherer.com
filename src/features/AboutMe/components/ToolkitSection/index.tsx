import { HABILITIES_DATA } from '@/utils/aboutme/habilities'
import { ToolkitList } from './components'
import { IHability } from '@/types'
import { PropsWithLocale } from '@/types/language'
import { getDictionary } from '@/get-dictionary'

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

export async function ToolkitSection({ lang }: PropsWithLocale) {
  const dictionary = await getDictionary(lang)

  return (
    <div className="flex flex-col gap-8">
      <p>{dictionary['aboutme'].toolkit.text}</p>
      <ToolkitList title="Javascript toolkit" tools={JAVASCRIPT_TOOLS} lang={lang} />
      <ToolkitList title="CSS toolkit" tools={CSS_TOOLS} lang={lang} />
      <ToolkitList title="Other toolkit" tools={OTHER_TOOLS} lang={lang} />
      <ToolkitList title="Software toolkit" tools={SOFTWARE_TOOLS} lang={lang} />
    </div>
  )
}
