import { RootLayoutType } from '@/@types/Page'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import Image from 'next/image'
import { Typewriter } from './components/typewritter.component'
import Link from 'next/link'
import { YoutubeIcon } from '@/lib/icons/social/youtube.icon'
import { LinkedinIcon } from '@/lib/icons/social/linkedin.icon'
import { GithubIcon } from '@/lib/icons/social/github.icon'
import { LucideArrowDown } from 'lucide-react'
import QRCode from 'react-qr-code'
import { ContentContainer } from './components/content-container.component'
import { Dialog, Tooltip } from '@/lib/primitives'
import { getServicesData } from '@/@data/services.data'
import { getSoftSkillsData } from '@/@data/soft-skills.data'
import { getToolkitData } from '@/@data/toolkit.data'
import { ProjectsShow } from './components/projects-show.component'
import { OWNER_CONFIGS } from '@/@data/owener-config'
import { OpacityMotion } from '@/@components/motion/opacity-motion.component'

export default async function HomePage({ params: { lang } }: RootLayoutType) {
  const dictionary = await getDictionary(lang)
  const t = dictionary.aboutme

  const SERVICES_DATA = await getServicesData(lang)
  const SOFT_SKILLS_DATA = await getSoftSkillsData(lang)
  const TOOLKIT_DATA = await getToolkitData(lang)

  return (
    <OpacityMotion
      className="m-auto pt-8 max-w-4xl"
    >
      <div className="flex flex-col items-center gap-4">
        <Image src="/perfil.jpg" width={2128} height={2128} alt="Felipe Scherer Photo" className="rounded-full size-80 border-primary border-4" />
        <h1 className="font-title text-5xl">Felipe Scherer</h1>
        <Typewriter items={dictionary.homepage.meet.typewriter} />

        <div className="flex flex-wrap justify-center gap-3 pt-6 text-[#fff] md:justify-start">
          <Tooltip tooltip="Youtube">
            <Link href="https://youtube.com/@fennectales" target="_blank" className="rounded-full bg-primary p-2 transition-all hover:brightness-75">
              <YoutubeIcon className="size-6" />
            </Link>
          </Tooltip>

          <Tooltip tooltip="Linkedin">
            <Link href={OWNER_CONFIGS.linkedin_link} target="_blank" className="rounded-full bg-primary p-2 transition-all hover:brightness-75">
              <LinkedinIcon className="size-6" />
            </Link>
          </Tooltip>

          <Tooltip tooltip="Github">
            <Link href={OWNER_CONFIGS.github_link} target="_blank" className="rounded-full bg-primary p-2 transition-all hover:brightness-75">
              <GithubIcon className="size-6" />
            </Link>
          </Tooltip>
        </div>
      </div>

      <Link href="#about" className="my-12 flex size-10 mx-auto animate-bounce items-center justify-center rounded-full border-2 border-on-layer-0-l2 backdrop-blur-sm transition-all hover:border-brand-primary hover:text-brand-primary hover:animation-paused">
        <LucideArrowDown />
      </Link>

      <div className="space-y-10">
        <ContentContainer title={dictionary.homepage.aboutme.title}>
          <div className="flex gap-4 items-center flex-col text-center md:items-start md:flex-row md:text-start">
            <Image src="/felipe-scherer.webp" width={1722} height={2330} alt="Felipe Scherer Photo" className="h-96 w-auto" />

            <div className="space-y-4">
              <p>
                {dictionary.homepage.aboutme.p1}
              </p>

              <p>{dictionary.homepage.aboutme.p2}</p>
            </div>
          </div>
        </ContentContainer>

        <ContentContainer title={dictionary.homepage.resume.title}>
          <div className="flex gap-4 flex-col items-center text-center md:flex-row md:items-start md:text-start">

            <div className="space-y-4 flex flex-col">
              <p>
                {dictionary.homepage.resume.p1}
              </p>

              <p className="font-medium">{dictionary.homepage.resume.p2}</p>
              <Link href="/resume" className="btn-primary hidden md:block">{dictionary.homepage.resume.link}</Link>
            </div>

            <div className="rounded-sm bg-[#fff] p-4">
              <QRCode value={`https://www.felipescherer.com/${lang}/resume`} />
            </div>

            <Link href="/resume" className="btn-primary block md:hidden">{dictionary.homepage.resume.link}</Link>
          </div>
        </ContentContainer>

        <ContentContainer title={dictionary.services.title}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* TODO: Make dialog here for description */}
            {
              SERVICES_DATA.map(card => (
                <div key={card.title} className="relative rounded-sm shadow-lg p-[3px] overflow-hidden animate-gradient-border" style={{ background: card.border, backgroundSize: '200% 200%' }}>
                  <div className="relative rounded-sm p-4 text-white bg-cover bg-center h-full" style={{ backgroundImage: `url(${card.image})` }}>
                    <div className="absolute inset-0 bg-black/70" />

                    <div className="relative flex flex-col items-center gap-2">
                      <div className="rounded-full bg-brand-primary p-3 text-accent">
                        {card.icon}
                      </div>

                      <h3 className="text-lg font-bold tracking-wide text-center">
                        {card.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="mt-12 text-2xl flex flex-col items-center space-y-2 text-center md:text-start">
            <p>{t.services['project-idea'].callout}</p>

            <p>
              {t.services['project-idea'].contact}
              {' '}
              <strong>{t.services['project-idea']['free-call']}</strong>
            </p>
          </div>

          <div className="flex justify-center gap-10">
            <Link target="_blank" href="https://services.fennectales.com" className="btn">{t.services['project-idea'].button2}</Link>

            <Link href="/about#contact" className="btn-primary">
              {t.services['project-idea'].button}
            </Link>
          </div>
        </ContentContainer>

        <ContentContainer title={dictionary['soft-skills'].title}>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            {
              SOFT_SKILLS_DATA.map(soft => (
                <Dialog
                  classContent="max-w-[450px]"
                  key={soft.text}
                  trigger={(
                    <button type="button" className="flex h-36 w-32 flex-col items-center gap-4 rounded-sm p-4 text-center card-primary">
                      {soft.icon}
                      <p className="flex flex-1 items-center">{soft.title}</p>
                    </button>
                  )}
                >
                  <div className="p-2 text-center text-base-content">
                    {soft.text}
                  </div>
                </Dialog>
              ))
            }
          </div>
        </ContentContainer>

        <ContentContainer title={dictionary.toolkit.title}>
          <div className="flex flex-wrap justify-center gap-8">
            {
              TOOLKIT_DATA.map(tool => (
                <Dialog
                  classContent="max-w-[450px]"
                  key={tool.title}
                  trigger={(
                    <button type="button" className="w-24 h-36 card-primary rounded flex flex-col items-center border-none">
                      <div className="bg-white w-full flex justify-center p-4">
                        {tool.icon}
                      </div>

                      <p className="flex items-center h-full">{tool.title}</p>
                    </button>
                  )}
                >
                  <div className="relative flex flex-col gap-8 rounded-sm bg-layer-1 p-2">
                    <p className="flex-1">{tool.text}</p>

                    <Link href={tool.docLink} target="_blank" className="mt-4 flex items-center gap-2 text-sm primary-link-effect w-fit">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                        <path fillRule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm1 5.75A.75.75 0 0 1 5.75 7h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 7.75Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                      </svg>

                      {t.toolkit['read-docs']}
                    </Link>
                  </div>
                </Dialog>
              ))
            }
          </div>
        </ContentContainer>

        <ContentContainer title={dictionary.projects.title}>
          <ProjectsShow params={{ lang: lang }} />
        </ContentContainer>
      </div>

    </OpacityMotion>
  )
}
