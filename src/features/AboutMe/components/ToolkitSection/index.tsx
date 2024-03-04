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
      <p>Estou em constante aprimoramento e dedicação aos estudos em diferentes áreas da programação. Acredito que é importante estar sempre atualizado e buscar novos conhecimentos para evoluir na carreira e crescer profissionalmente. Além disso, estou sempre em busca de novas oportunidades de aprendizado, cursos, treinamentos, eventos e experiências que possam agregar valor ao meu conhecimento e habilidades. Entre as áreas em que me dedico com entusiasmo e interesse estão:</p>
      <ToolkitList title="Javascript toolkit" tools={JAVASCRIPT_TOOLS} />
      <ToolkitList title="CSS toolkit" tools={CSS_TOOLS} />
      <ToolkitList title="Other toolkit" tools={OTHER_TOOLS} />
      <ToolkitList title="Software toolkit" tools={SOFTWARE_TOOLS} />
    </div>
  )
}
