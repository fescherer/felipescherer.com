import Link from 'next/link'
import { AboutCard, ExperienceSection, ResumeSection } from './components'
import { HISTORY_DATA } from '@/utils/aboutme/history'
import { ToolkitSection } from './components/ToolkitSection'
import { ABOUT_ME_DATA } from '@/utils/aboutme/aboutme'

export function AboutMe() {
  const titleSectionClassname = 'my-4 font-title text-2xl text-on-layer-0-l1'

  return (
    <div className="m-auto max-w-5xl p-4">
      <section id="aboutme">
        <h2 className={titleSectionClassname}>About me</h2>

        <AboutCard image="/felipe-scherer/photo-flower.webp" title={ABOUT_ME_DATA.title}>
          <div className="flex h-full flex-col gap-2">
            <p className="flex-1">
              {ABOUT_ME_DATA.text}
            </p>

            <div className="flex flex-col justify-evenly md:flex-row">
              {ABOUT_ME_DATA.buttons.map(title => (
                <Link key={title} className="design-anchor-btn text-center" href={`#${title}`}>{title}</Link>
              ))}
            </div>
          </div>
        </AboutCard>
      </section>

      <section id={ABOUT_ME_DATA.buttons[0]}>
        <h2 className={titleSectionClassname}>Toolkit</h2>
        {/* <HabilitiesSection /> */}
        <ToolkitSection />
      </section>

      <section id={ABOUT_ME_DATA.buttons[1]}>
        <h2 className={titleSectionClassname}>Experiences</h2>
        <ExperienceSection />
      </section>

      <section id={ABOUT_ME_DATA.buttons[2]}>
        <h2 className={titleSectionClassname}>Resume</h2>
        <ResumeSection />
      </section>

      <section id={ABOUT_ME_DATA.buttons[3]}>
        <h2 className={titleSectionClassname}>My History</h2>

        {
          HISTORY_DATA.map((history, index) => (
            <AboutCard
              isInverted={index % 2 === 0}
              key={index}
              image={history.image}
              title={history.title}
            >
              {history.text}
            </AboutCard>
          ))
        }
      </section>

    </div>

  )
}
