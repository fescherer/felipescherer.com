import { GithubIcon } from '@/lib/icons/social/github.icon'
import { LinkedinIcon } from '@/lib/icons/social/linkedin.icon'
import { YoutubeIcon } from '@/lib/icons/social/youtube.icon'
import { OWNER_CONFIGS } from '@/lib/_felipescherer.com/owner.config'
import Link from 'next/link'

export function SocialsComponent() {
  return (
    <div className="flex flex-wrap justify-center gap-3 text-[#fff] md:justify-start">
      <Link href="https://youtube.com/@fennectales" target="_blank" className="rounded-full bg-[#FF0302] p-2 transition-all hover:brightness-75">
        <YoutubeIcon className="size-4" />
      </Link>

      <Link href={OWNER_CONFIGS.linkedin_link} target="_blank" className="rounded-full bg-[#0A66C2] p-2 transition-all hover:brightness-75">
        <LinkedinIcon className="size-4" />
      </Link>

      <Link href={OWNER_CONFIGS.github_link} target="_blank" className="rounded-full bg-[#24292F] p-2 transition-all hover:brightness-75">
        <GithubIcon className="size-4" />
      </Link>
    </div>
  )
}
