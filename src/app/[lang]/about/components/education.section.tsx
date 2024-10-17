import Link from 'next/link'
import { CardWrapper } from './card-wrapper.component'
import { LinkedinIcon } from '@/icons/social/linkedin.icon'
import { GithubIcon } from '@/icons/social/github.icon'
import { Separator } from '@/components'

export function EducationSection() {
  return (
    <CardWrapper id="education">
      <div className="flex flex-col items-center md:max-w-[60%] md:items-start">
        <h2 className="text-4xl leading-tight tracking-wider text-on-layer-0-l1">Education & Experiences</h2>
        <p className="p">I hold a Bachelor’s degree in Computer Science, complemented by a technical course in Electronics and several specialized tech certifications. I am currently pursuing a postgraduate specialization on Coursera.  </p>
        <p className="p">With over 5 years of experience in software development, I bring a blend of technical expertise and practical industry experience. </p>
        <p className="p">To view my full resume, click the button below or scan the QR code. Feel free to explore my social profiles as well.</p>

        <div className="mt-10 flex gap-3 ">
          <Link className="btn btn-secondary" href="/resume">CV/Resume</Link>
          <Link className="btn btn-primary" href="#hire-me">Hire Me</Link>
        </div>
      </div>

      <div className="mt-12 flex w-full flex-col items-center gap-4 md:w-1/3 md:items-start ">
        <Link className="link flex items-center gap-2" href="https://www.linkedin.com/in/fescherer" target="_blank">
          <LinkedinIcon className="size-4 text-on-layer-0-l1" />
          /fescherer
        </Link>

        <Link className="link flex items-center gap-2" href="https://github.com/fescherer" target="_blank">
          <GithubIcon className="size-4 text-on-layer-0-l1" />
          /fescherer
        </Link>

        <div>qr code</div>
        <Separator />
        <h3 className="text-2xl leading-loose tracking-wide">Languages</h3>

        <ol className="list-inside list-decimal">
          <li>Portuguese</li>
          <li>English</li>
        </ol>
      </div>
    </CardWrapper>
  )
}
