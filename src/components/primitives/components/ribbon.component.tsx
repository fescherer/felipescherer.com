import { cn } from '@/utils/cn.function'
import Link from 'next/link'
import { ClassNameValue } from 'tailwind-merge'

type RibbonProps = {
  title: string
  bgColor: string
  textColor: string
  href: string
  className?: ClassNameValue
}

export function Ribbon({ title, bgColor, textColor, href, className }: RibbonProps) {
  return (
    <Link href={href} className={cn('absolute -right-2 top-1 rounded-sm rounded-ee-none px-2 text-sm leading-relaxed transition-all hover:brightness-75', className)} style={{ background: bgColor, color: textColor }}>
      <span>{title}</span>
      <div className="absolute end-0 border-4 border-b-transparent border-e-transparent border-r-transparent brightness-75" style={{ color: bgColor }} />
    </Link>
  )
}
