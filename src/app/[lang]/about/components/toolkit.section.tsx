import { CardWrapper } from '../../../../lib/_felipescherer.com/components/card-wrapper.component'
import Link from 'next/link'
import { Dialog } from '@/lib/_felipescherer.com/components/primitives'
import { TOOLKIT } from '@/lib/_felipescherer.com/data/toolkit.data'
import { PropsWithLocale } from '@/@types/language'
import { getDictionary } from '@/lib/i18n/get-dictionary'

export async function ToolkitSection({ lang }: PropsWithLocale) {
  const dictionary = await getDictionary(lang)
  const t = dictionary.aboutme.toolkit

  return (
    <CardWrapper direction="collumn" id="toolkit">
      <h2 className="text-center text-4xl leading-loose tracking-wider text-on-layer-0-l1">
        {t.title}
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {
          TOOLKIT.map(tool => (
            <Dialog
              classContent="max-w-[450px]"
              key={tool.name}
              trigger={(
                <button type="button" className="flex h-full w-24 flex-col items-center gap-4 transition-all hover:scale-110 hover:text-on-layer-0-l1">
                  <div className="rounded-sm bg-[#fff] p-1">
                    {tool.icon}
                  </div>

                  <p className="flex-1">{tool.name}</p>
                </button>
              )}
            >
              <div className="relative flex flex-col gap-8 rounded-sm bg-layer-1 p-2">
                <p className="flex-1">{tool.description[lang]}</p>

                <Link href={tool.docLink} target="_blank" className="mt-4 flex items-center gap-2 text-sm transition-all hover:brightness-90">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                    <path fillRule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm1 5.75A.75.75 0 0 1 5.75 7h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 7.75Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                  </svg>

                  {t['read-docs']}
                </Link>
              </div>
            </Dialog>
          ))
        }
      </div>

    </CardWrapper>
  )
}
