/* TODO Update images in background of each card */

import Link from 'next/link'
import { CardWrapper } from '../../../../components/card-wrapper.component'
import { SERVICES } from '@/utils/data/services.data'
import { getDictionary } from '@/get-dictionary'
import { PropsWithLocale } from '@/types/language'

export async function ServicesSection({ lang }: PropsWithLocale) {
  const dictionary = await getDictionary(lang)
  const t = dictionary.aboutme.services

  return (
    <CardWrapper direction="collumn" id="services">
      <h2 className="text-center text-4xl leading-loose tracking-wider text-on-layer-0-l1">
        {t.title}
      </h2>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        {
          SERVICES.map(card => (
            <div key={card.title[lang]} className="rounded border border-brand-primary p-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-brand-primary p-3 text-[#fff]">
                  {card.icon}
                </div>

                <h3 className="text-xl font-medium">
                  {card.title[lang]}
                </h3>
              </div>

              <p className="mt-4">
                {card.text[lang]}
              </p>
            </div>
          ))
        }
      </div>

      <div className="mt-6 flex flex-col items-center space-y-2">
        <p className="text-lg">{t['project-idea'].callout}</p>
        <p>{t['project-idea'].solution}</p>

        <p>
          {t['project-idea'].contact}
          {' '}
          <strong>{t['project-idea']['free-call']}</strong>
        </p>
      </div>

      <Link href="/about#contact" className="btn btn-primary my-6">
        {t['project-idea'].button}
      </Link>
    </CardWrapper>
  )
}
