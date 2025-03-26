import { RootLayoutType } from '@/@types/Page'
import { Ribbon, Separator } from '@/lib/primitives'
import { cn } from '@/lib/clsx-tailwind-merge/cn.function'
import { getDictionary } from '@/lib/i18n/get-dictionary'
import Link from 'next/link'
import { getProjectsData } from '@/@data/projects.data'

export async function ProjectsShow({ params: { lang } }: RootLayoutType) {
  const PROJECTS = await getProjectsData(lang)
  const RECENT_PROJECTS = PROJECTS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const dictionary = await getDictionary(lang)
  const RECENT_PROJECT = RECENT_PROJECTS[0]
  const POPULAR_PROJECT = PROJECTS.find(project => project.id === 'rpg') || RECENT_PROJECTS[1]

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-2">

        {
          [POPULAR_PROJECT, RECENT_PROJECT].map((project, index) => (
            <div className="relative max-w-[350px]" key={project.id}>
              <Link href={`/projects/${project.type.id}/${project.id}`} className="group">
                <div className="group relative h-48 overflow-hidden">
                  <div className="absolute size-full scale-110 bg-cover bg-center blur-xs" style={{ backgroundImage: `url(${`/projects/${project.type.id}/${project.id}`}/thumb.webp)` }} />
                  <div className="absolute top-0 size-full bg-contain bg-center bg-no-repeat transition-transform group-hover:scale-110" style={{ backgroundImage: `url(${`/projects/${project.type.id}/${project.id}`}/thumb.webp)` }} />
                </div>

                <h3 className="mt-4 font-title text-xl font-semibold text-on-layer-0-l1 transition-all group-hover:text-brand-primary">
                  {project.title}
                </h3>

                <p className="text-sm transition-all group-hover:text-brand-primary">{project.description}</p>
              </Link>

              <Ribbon
                href={`/projects/${project.type.id}/${project.id}`}
                title={index === 0 ? dictionary.homepage.projects.tag.popular : dictionary.homepage.projects.tag.recent}
                bgColor={index === 0 ? 'var(--color-primary)' : 'var(--color-accent)'}
                textColor={index === 0 ? 'var(--color-primary-content)' : 'var(--color-accent-content)'}
              />
            </div>
          ))
        }

        <Separator dataOrientation="vertical" className="hidden md:flex" />
        <Separator dataOrientation="horizontal" className="flex md:hidden" />

      </div>

      <Link href="/projects" className={cn('btn-primary btn', 'py-4 mt-10 self-center px-8')}>
        {dictionary.homepage.projects.moreProjects + ` (+${RECENT_PROJECTS.length - 2})`}
      </Link>
    </div>
  )
}
