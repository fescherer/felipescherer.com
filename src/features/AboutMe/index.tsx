import Link from 'next/link'
import { AboutCard, ExperienceSection } from './components'

export function AboutMe() {
  const titleSectionClassname = 'my-4 font-title text-2xl text-on-layer-0-l1'

  return (
    <div className="m-auto max-w-5xl p-4">
      <section id="aboutme">
        <h2 className={titleSectionClassname}>About me</h2>

        <AboutCard image="/felipe-scherer/photo-flower.webp" title="Felipe Scherer">
          <div className="flex h-full flex-col">
            <p className="flex-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veritatis deserunt nulla dicta, voluptate dolore dolor perspiciatis odio tempora magni ipsam quaerat eius, reiciendis delectus laborum! Perspiciatis eveniet quaerat optio.
            </p>

            <div className="flex justify-evenly">
              <Link className="design-anchor-btn" href="#habilities">Habilidades</Link>
              <Link className="design-anchor-btn" href="#experience">Experiences</Link>
              <Link className="design-anchor-btn" href="#resume">Resume</Link>
              <Link className="design-anchor-btn" href="#my-history">My History</Link>
            </div>
          </div>
        </AboutCard>
      </section>

      <section id="habilities">
        <h2 className={titleSectionClassname}>Habilities</h2>
      </section>

      <section id="experience">
        <h2 className={titleSectionClassname}>Experiences</h2>
        <ExperienceSection />
      </section>

      <section id="resume">
        <h2 className={titleSectionClassname}>Resume</h2>
      </section>

      <section id="my-history">
        <h2 className={titleSectionClassname}>My History</h2>
      </section>

    </div>

  )
}