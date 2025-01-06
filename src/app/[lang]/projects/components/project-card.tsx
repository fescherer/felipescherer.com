import { Dialog } from '@/components/primitives'
import Link from 'next/link'

export function ProjectCard({ project }: any) {
  return (
    <Dialog
      trigger={(
        <button type="button" className="flex h-full w-24 flex-col items-center gap-4 transition-all hover:scale-110 hover:text-on-layer-0-l1">
          <div className="rounded bg-[#fff] p-1">
            card
            {' '}
            {project?.id}
          </div>

          <p className="flex-1">card nbame</p>
        </button>
      )}
    >
      <div className="relative flex flex-col gap-8 rounded bg-layer-1 p-2">
        <p className="flex-1">project description</p>

        <Link href="" target="_blank" className="mt-4 flex items-center gap-2 text-sm transition-all hover:brightness-90">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
            <path fillRule="evenodd" d="M4 2a1.5 1.5 0 0 0-1.5 1.5v9A1.5 1.5 0 0 0 4 14h8a1.5 1.5 0 0 0 1.5-1.5V6.621a1.5 1.5 0 0 0-.44-1.06L9.94 2.439A1.5 1.5 0 0 0 8.878 2H4Zm1 5.75A.75.75 0 0 1 5.75 7h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 7.75Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>

          dsadas
        </Link>
      </div>
    </Dialog>
  )
}
