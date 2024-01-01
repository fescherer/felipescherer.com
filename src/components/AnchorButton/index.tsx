import { LucideArrowDown } from 'lucide-react'
import Link from 'next/link'

type AnchorButtonProps = {
  anchor: string
}

export function AnchorButton({ anchor }: AnchorButtonProps) {
  return (
    <Link href={anchor} className="absolute bottom-4 left-1/2 flex h-10 w-10 -translate-x-5 animate-bounce items-center justify-center rounded-full backdrop-blur transition-all hover:text-brand-primary hover:animation-paused">
      <LucideArrowDown />
    </Link>
  )
}
