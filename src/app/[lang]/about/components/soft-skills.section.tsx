import { SOFT_SKILLS } from '@/utils/data/soft-skills.data'
import { CardWrapper } from '../../../../components/card-wrapper.component'
import { Dialog } from '@/components/primitives'
import { PropsWithLocale } from '@/types/language'
import { getDictionary } from '@/get-dictionary'

export async function SoftSkillsSection({ lang }: PropsWithLocale) {
  const dictionary = await getDictionary(lang)
  const t = dictionary.aboutme.softskills

  return (
    <CardWrapper direction="collumn" id="softskills">
      <h2 className="text-center text-4xl leading-loose tracking-wider text-on-layer-0-l1">
        {t.title}
      </h2>

      <div className="flex flex-wrap justify-center gap-8 text-sm">
        {
          SOFT_SKILLS.map(soft => (
            <Dialog
              classContent="max-w-[450px]"
              key={soft.text[lang]}
              trigger={(
                <button type="button" className="flex h-36 w-32 flex-col items-center gap-4 rounded border border-brand-primary p-4 text-center transition-all hover:scale-110 hover:text-on-layer-0-l1 hover:brightness-90">
                  {soft.icon}
                  <p className="flex flex-1 items-center">{soft.title[lang]}</p>
                </button>
              )}
            >
              <div className="p-2">
                {soft.text[lang]}
              </div>
            </Dialog>
          ))
        }
      </div>
    </CardWrapper>
  )
}
