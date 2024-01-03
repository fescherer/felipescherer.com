import { LucideArrowDown, LucideArrowUp } from 'lucide-react'
import Link from 'next/link'

type AnchorButtonProps = {
  anchor: string
  isLastItem?: boolean
}

export function AnchorButton({ anchor, isLastItem }: AnchorButtonProps) {
  return (
    <Link href={anchor} className="my-10 flex h-10 w-10 animate-bounce items-center justify-center rounded-full backdrop-blur transition-all hover:text-brand-primary hover:animation-paused">
      {
        isLastItem
          ? <LucideArrowUp />
          : <LucideArrowDown />
      }
    </Link>
  )
}
