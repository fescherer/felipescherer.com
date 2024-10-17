import Image from 'next/image'
import Link from 'next/link'
import { CardWrapper } from './card-wrapper.component'
import { SocialsComponent } from '@/components/socials.component'

export async function AboutSection() {
  return (
    <CardWrapper id="about">
      <div className="flex flex-col gap-2">
        <div className="mockup-window rounded bg-layer-1">
          <Image width={1722} height={2330} className="flex min-w-72 justify-center bg-layer-1 p-2" alt="Felipe Scherer photo" src="/felipe-scherer.webp" unoptimized />
        </div>

        <SocialsComponent />
      </div>

      <div className="flex flex-col items-center md:ml-10 md:items-start">
        <h1 className="text-4xl leading-loose tracking-wider text-on-layer-0-l1">about</h1>
        <p className="p">I am Felipe Scherer, creator of Fennec Tales Studio and a software developer with over five years of experience in delivering innovative solutions across various platforms. My expertise spans web and mobile application development, with a strong emphasis on user experience and performance optimization. </p>

        <p className="p">
          Currently, I am expanding my skills in game development. Committed to continuous learning, I stay updated with industry trends to ensure the highest quality results.
        </p>

        <div className="mt-10 flex gap-3 ">
          <Link className="btn btn-primary" href="#contact">Hire Me</Link>
          <Link className="btn btn-secondary" href="#education">Resume</Link>
        </div>
      </div>
    </CardWrapper>
  )
}
