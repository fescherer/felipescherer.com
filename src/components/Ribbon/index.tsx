import Link from 'next/link'

type RibbonProps = {
  title: string
  bgColor: string
  textColor: string
  href: string
}

export function Ribbon({ title, bgColor, textColor, href }: RibbonProps) {
  return (
    <Link href={href} className="absolute -right-2 top-1 rounded rounded-ee-none px-2 text-sm leading-relaxed transition-all hover:brightness-75" style={{ background: bgColor, color: textColor }}>
      <span>{title}</span>
      <div className="absolute end-0 border-4 border-b-transparent border-e-transparent border-r-transparent brightness-75" style={{ color: bgColor }} />
    </Link>
  )
}
