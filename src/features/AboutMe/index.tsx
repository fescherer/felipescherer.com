import Link from 'next/link'
import { AboutCard, BookList, ExperienceSection, QuoteSection } from './components'
import { HISTORY_DATA } from '@/utils/aboutme/history'
import { ToolkitSection } from './components/ToolkitSection'
import { getDictionary } from '@/get-dictionary'
import { PropsWithLocale } from '@/types/language'

export async function AboutMe({ lang }: PropsWithLocale) {
  const titleSectionClassname = 'my-4 font-title text-2xl text-on-layer-0-l1'
  const dictionary = await getDictionary(lang)

  const ABOUT_ME_DATA = {
    title: dictionary.aboutme.about_data.title,
    text: dictionary.aboutme.about_data.text,
    buttons: [
      {
        id: 'toolkit',
        name: dictionary.aboutme.about_data.buttons.toolkit,
      },
      {
        id: 'experiences',
        name: dictionary.aboutme.about_data.buttons.experiences,
      },
      {
        id: 'book_recomendation',
        name: dictionary.aboutme.about_data.buttons.book_recomendation,
      },
      {
        id: 'my_history',
        name: dictionary.aboutme.about_data.buttons.my_history,
      },
    ],
  }

  return (
    <div className="m-auto max-w-5xl p-4">
      <section id="aboutme">
        <h2 className={titleSectionClassname}>{dictionary['aboutme'].title}</h2>

        <AboutCard image="/felipe-scherer/photo-flower.webp" title={ABOUT_ME_DATA.title}>
          <div className="flex h-full flex-col gap-2">
            <p className="flex-1">
              {ABOUT_ME_DATA.text}
            </p>

            <div className="flex flex-col flex-wrap gap-2 md:flex-row">
              {ABOUT_ME_DATA.buttons.map(btn => (
                <Link key={btn.id} className="design-anchor-btn text-center" href={`#${btn.id}`}>{btn.name}</Link>
              ))}

              <Link className="design-anchor-btn text-center" href="/resume">
                {dictionary['aboutme'].resume}
              </Link>
            </div>
          </div>
        </AboutCard>
      </section>

      <section id={ABOUT_ME_DATA.buttons[0].id} className="scroll-m-20">
        <h2 className={titleSectionClassname}>{dictionary['aboutme'].toolkit.title}</h2>
        <ToolkitSection lang={lang} />
      </section>

      <section id={ABOUT_ME_DATA.buttons[1].id} className="scroll-m-20">
        <h2 className={titleSectionClassname}>{dictionary['aboutme'].experiences}</h2>
        <ExperienceSection lang={lang} />
      </section>

      <QuoteSection lang={lang} />

      <section id={ABOUT_ME_DATA.buttons[3].id} className="scroll-m-20">
        <h2 className={titleSectionClassname}>{dictionary['aboutme']['book-recomendation'].title}</h2>
        <BookList titleString={dictionary['aboutme']['book-recomendation'].text} />
      </section>

      <section id={ABOUT_ME_DATA.buttons[2].id} className="scroll-m-20">
        <h2 className={titleSectionClassname}>{dictionary['aboutme']['my-history']}</h2>

        {
          HISTORY_DATA.map((history, index) => (
            <AboutCard
              isInverted={index % 2 === 0}
              key={index}
              image={history.image}
              title={history.title[lang]}
            >
              {history.text[lang]}
            </AboutCard>
          ))
        }
      </section>

    </div>

  )
}
