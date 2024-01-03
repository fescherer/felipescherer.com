import { LucideArrowDown, LucideArrowUp } from 'lucide-react'
import Link from 'next/link'

type AnchorButtonProps = {
  anchor: string
  isLastItem?: boolean
}

export function AnchorButton({ anchor, isLastItem }: AnchorButtonProps) {
  return (
    <Link href={anchor} className="my-10 flex h-10 w-10 animate-bounce items-center justify-center rounded-full border-2 border-on-layer-0-l2 backdrop-blur transition-all hover:border-brand-primary hover:text-brand-primary hover:animation-paused">
      {
        isLastItem
          ? <LucideArrowUp />
          : <LucideArrowDown />
      }
    </Link>
  )
}
