import type { LinkProps } from 'next/link'
import NextLink from 'next/link'
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'

type LinkType = LinkProps & AnchorHTMLAttributes<any>

export function SimpleLink({ children, href, className, ...props }: PropsWithChildren<LinkType>) {
  return <NextLink className={`text-brand-primary underline decoration-on-layer-0-l3 transition-all hover:text-brand-hover-primary hover:decoration-brand-hover-primary ${className}`} href={href} {...props}>{children}</NextLink>
}
