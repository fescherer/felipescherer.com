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
      <HexagonIcon size={size} className="fill-brand-primary text-brand-primary transition-all group-hover/link-btn:fill-brand-hover-primary group-hover/link-btn:text-brand-hover-primary" />
      {children}
    </Link>
  )
}
