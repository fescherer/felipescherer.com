import { SOFT_SKILLS } from '@/utils/data/soft-skills.data'
import { CardWrapper } from '../../../../components/card-wrapper.component'
import { Dialog } from '@/components/primitives'

export function SoftSkillsSection() {
  return (
    <CardWrapper direction="collumn" id="softskills">
      <h2 className="text-center text-4xl leading-loose tracking-wider text-on-layer-0-l1">
        Soft skills
      </h2>

      <div className="flex flex-wrap justify-center gap-8 text-sm">
        {
          SOFT_SKILLS.map(soft => (
            <Dialog
              key={soft.text}
              trigger={(
                <button type="button" className="flex h-36 w-32 flex-col items-center gap-4 rounded border border-brand-primary p-4 text-center transition-all hover:scale-110 hover:text-on-layer-0-l1 hover:brightness-90">
                  {soft.icon}
                  <p className="flex flex-1 items-center">{soft.title}</p>
                </button>
              )}
            >
              <div className="p-2">
                {soft.text}
              </div>
            </Dialog>
          ))
        }
      </div>
    </CardWrapper>
  )
}
