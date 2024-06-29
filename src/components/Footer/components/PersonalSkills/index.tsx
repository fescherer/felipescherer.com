import { LogoIcon } from '@/icons'
import { PropsWithLocale } from '@/types/language'
import { OWNER_CONFIGS } from '@/utils/owner.config'

export async function PersonalSkills({ lang }: PropsWithLocale) {
  return (
    <div className="flex flex-col gap-2 ">

      <LogoIcon color="var(--brand-primary)" />
      <p className="max-w-prose text-sm">{OWNER_CONFIGS.description[lang]}</p>

      <div className="flex gap-4">
        {/* <Link aria-label="Go to RSS's author" href="/feed.xml">
          <Rss size={24} />
        </Link>

        <Link aria-label="Go to Linkedin's author" href={ownerConfigs.linkedinLink}>
          <LinkedinLogo size={24} />
        </Link>

        <Link aria-label="Go to Github's author" href={ownerConfigs.githubLink}>
          <GithubLogo size={24} />
        </Link> */}

        {/* <Link aria-label="Go to Figma's author" href={ownerConfigs.figmaLink}>
          <FigmaLogo size={20} />
        </Link>
        <Link aria-label="Go to Youtube's author" href={ownerConfigs.youtubeLink}>
          <YoutubeLogo size={20} />
        </Link>
        <Link aria-label="Go to Twitter's author" href={ownerConfigs.twitterLink}>
          <TwitterLogo size={20} />
        </Link>
        <Link aria-label="Go to Tiktok's author" href={ownerConfigs.tiktokLink}>
          <TiktokLogo size={20} />
        </Link> */}
      </div>
    </div>
  )
}
