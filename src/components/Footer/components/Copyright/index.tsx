import { OWNER_CONFIGS } from '@/utils/owner.config'
import Link from 'next/link'

export function Copyright() {
  const initialDate = new Date('2023-08-20')
  const today = new Date()

  return (
    <div className="m-auto flex max-w-screen-lg flex-col items-center">
      <small>
        Copyright © 🞄
        {' '}
        {`${initialDate.getFullYear().toString()} - ${today.getFullYear().toString()}`}
      </small>

      <small>
        <Link aria-label={`Go to Github's ${OWNER_CONFIGS.name} page`} className="transition-all hover:text-brand-hover-primary" href={OWNER_CONFIGS.github_link} target="_blank">
          {OWNER_CONFIGS.user}
          |
          {OWNER_CONFIGS.name}
        </Link>
      </small>
    </div>
  )
}
