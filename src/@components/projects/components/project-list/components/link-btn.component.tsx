import { HexagonIcon } from 'lucide-react'
import Link from 'next/link'
import { ReactNode } from 'react'

type LinkBtnProps = {
  href: string
  children: ReactNode
  size: number
  title: string

}

export function LinkBtn({ href, size, children, title }: LinkBtnProps) {
  return (
    <Link title={title} href={href} target="_blank" className="group/link-btn relative">
      <HexagonIcon size={size} className="fill-primary text-primary transition-all group-hover/link-btn:fill-accent group-hover/link-btn:text-accent" />
      {children}
    </Link>
  )
}
