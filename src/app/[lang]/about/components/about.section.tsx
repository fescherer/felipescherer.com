import Image from 'next/image'
import Link from 'next/link'
import { CardWrapper } from '../../../../lib/_felipescherer.com/components/card-wrapper.component'
import { SocialsComponent } from '@/lib/_felipescherer.com/components/socials.component'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import { PropsWithLocale } from '@/@types/language'

export async function AboutSection({ lang }: PropsWithLocale) {
  const dictionary = await getDictionary(lang)
  const t = dictionary.aboutme.aboutme

  return (
    <CardWrapper id="about">
      <div className="flex flex-col gap-2">
        <div className="mockup-window rounded-sm bg-layer-1">
          <Image width={1722} height={2330} className="flex min-w-72 justify-center bg-layer-1 p-2" alt="Felipe Scherer photo" src="/felipe-scherer.webp" unoptimized />
        </div>

        <SocialsComponent />
      </div>

      <div className="flex flex-col items-center md:ml-10 md:items-start">
        <h1 className="text-4xl leading-loose tracking-wider text-on-layer-0-l1">{t.title}</h1>
        <p className="p">{t.text1}</p>
        <p className="p">{t.text2}</p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link className="btn btn-primary" href="#contact">{t.anchors['hire-me']}</Link>
          <Link className="btn btn-secondary" href="#education">{t.anchors.education}</Link>
          <Link className="btn btn-secondary" href="#fennec-tales-studio">{t.anchors['fennec-tales-studio']}</Link>
          <Link className="btn btn-secondary" href="#projects">{t.anchors.projects}</Link>
          <Link className="btn btn-secondary" href="#softskills">{t.anchors['soft-skills']}</Link>
          <Link className="btn btn-secondary" href="#toolkit">{t.anchors.toolbox}</Link>
          <Link className="btn btn-secondary" href="#services">{t.anchors.services}</Link>
        </div>
      </div>
    </CardWrapper>
  )
}
